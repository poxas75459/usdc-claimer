/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2tCtVCnkKWr9bUgts7GcwW4BWJnyzkx3Yxyt6kgyqyZa8G14aAY5BqYABkSUn4grEnHUgnH9UoWkSkonStC26EJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45MaxjWWWYy7qMRmGf3YE18aY4K97joAKFUcxCnQPxP9GqDkV4xoMs3W1RzcSRwk9wDgPickKpmrCXvR9bYqJPx8",
  "key1": "h5xhKxtvQGQ81cqxy7fMRAnG4J3E5k5YiaiPJTMW2UPWD8miTU9XxJiTgQ74JFDBCeAwM6gtsicZveu9wJ3cDU5",
  "key2": "wtBVB16bu2uGTQFmU4gQAGC88RPPgwo9ZYeVVqDjzB6et9CDJJCwemymjMCwii7jLe6xpMXptNYdSkkmf2NW9AX",
  "key3": "4TGSSCJrMCmaQeoDAjNZqP8G5gin8Nrrik1vtB3vhHdvLDbycAnKHLyBfeHPcrnZHwKmHSrHDRJwqRyfUU6sMEVK",
  "key4": "cHopxRpCCitVfDPESzAtbW9vphCvpWqeWLfvXPME222o3tBcogdEqSZMwXe9aJfn5FdLVNQsJwhRQvnS6Ch6o4c",
  "key5": "2X1za2oED7Vc31Gi9tUVLLxeCRW32pWHtymmB8YjMox7HDv9spuJmB4LqNxjGwst78nLVcJ8KCj2eywc4y2tEW3f",
  "key6": "cRQG3kGJuWi6AJQX9ZqiUSFu4Vn7N8PmkniUweMzo5d1sR7Tk7QPhoEPtivh28oysC6BD22TJzf7CkiSjANDFtZ",
  "key7": "571uVb7L6zFx9xg5mDta6Zfr1PTusbpM2ZjiHQ8wdidas82eRiyfuZWeSbQ2cEvMrZGKbK65v4poUTHLxmSKXWoG",
  "key8": "pqCM2GJfgzgLsn4XWZx81wkMf3in6PUWXw4Zr5W26ZdUqTJNBB6cgdmhHzrznyNvjKDE69tA56rAwrmFsUNqaiB",
  "key9": "2YLh3mx2tbDrt9oyiLcsYyVMzTVpJeBTzUqhhJT27LZgYFUZ9HJqt1arU2RkJNW8F1AcPQGecFMhndcxPnNYwmEX",
  "key10": "4iuJbyLMVH2Mw71ve9AUvPJYSMrufoidjMw5h2Tynq4dV6nN8i4MW33MnX3gkgxDoGsEW7NGGgnUuv8FmPsueFuV",
  "key11": "ZQUd44kDxzG2g3zw2yLv9ozD51N2YnG1zXgccpQyyRDedh2Ns5vmnPj9k8XugpdbSZcsRhK6NQrhVerqcxzJ8nx",
  "key12": "21U4rGfUmVT8CsujkK8mwqYrhfEkrmxmUnS8MmTGb8GD2Gki1hiovvq4HEJvTtyxKKjX4w3khYyAUMCoLvRrP1ds",
  "key13": "tCjBMtvH5JHHHsSU2yWZBCmQaYHV2oqGwxG9WgVLBf7AfX6PSYm3zpVHssTYhAZMtn4K2YavjR7YVkpdCTThe7E",
  "key14": "3mpnvmDxx96jvFiJvaEaP7gkhYAXkskzuJXunafzqwyYNSy98xzrtHoTLvh938ZZAv7amVERwgnGSotmC2Ud8BuH",
  "key15": "3CRBuosbC4tjvUeSPmuTwDQfM4546WagjJnhCMgAFK3pt7mFUhgEkvATiw7Wwe2DBWbyn7SzZPg4dZSCwh2SkiS9",
  "key16": "29yJKoouoJbgv1dMVK2CPAX4arGDsMFztdLg9fSgYD7SH9mbjkjZhMUXuPFtQFjxoKwQ4qDSdHminuq4bz17NKgA",
  "key17": "fU5PA3HDS2NgJT9xnXuMrMFpjaN3yWXjFBTtd1ofueKNwCKV2V2MS2eLb41YzkyucZn5Sfq7nJHpZjCCYXPNvfF",
  "key18": "3uHjzYTWyqQZw8ggkh1vbo6UPcNUnVhnAHbaTzZrQ6EKrNBkCukFeVH1G39tYAUpwC3hQMy2naxDXRhxsi1eq4vV",
  "key19": "3t15QDj3K2Ys2R6wjzzMN2g6ChCFFM7KQMNPdSns95p9Yq8DDa3GKKbPi5XgFAkU6jWdqdF7AKaMsWgeopLoL8Sq",
  "key20": "3X2vRa3bkmZ91YND4szb5aY5xVcWYswNprUokXLx7ATA4PU6P1cR44zqgm1terDcduCHKiZYD5Mukb1KM5BAHG5H",
  "key21": "46zQSD4m98DdL7aViPw5mnKziWcZTDPo1caRd2DTmWcgwnLsfktxHFYUUWNQZKfok89UFFFs69wP9KrZc2UVm28U",
  "key22": "qVFDhV9FcjKTS3EsAmfVEYkkrqR5x4Gt5dU4weuhPKgwLtmugpLaKpmDiN3vtnvyFLpeypShoMY2gkDEU3D6xs8",
  "key23": "5P4E7ZUhFLd7PRjeM2wfb2ixXfrepKEZQRYghFDt7KeiMJBYZupELB6esW9hD6NTQbnUn8cUxDfEyNdZcNVcHZa",
  "key24": "3ZYTSkryDd5nXjNdq3sYV9gGvwg5Ujcc7wwu7RqUR6PH8ftERCi7vHc7orifssGowAZXoYVNpeyhzMHHxXUtRTXN",
  "key25": "nj2BXM6oFaPavHJ4Q87LEbbmHfE8yv4vGhDEpXK5eL8PbQ9qneZapioYoCxmnn65vcBK9PrGu8JQwkcGiDdckjQ",
  "key26": "4uc3VSkZqxxRag9zaMTjLogrh8anUnFa2XNKZkZSCC9pTGSMp2GtmLaRYdn94awygiPNYtExdJEpbSkuUfJwo1Ey",
  "key27": "2xQAoCPh9Bc3mxdQSBkW8X9eK2ys3QVt7pqaWUZv1sTX7PEAqadeH7DzeCzwPTwL83cPmUkVZCEoyi1bLUnYu8dN",
  "key28": "3gYcr3AVuxP8TN7S12WS2xLU3Qfcc3Ux6JnZT6Tzh7ghTYdhWL1JtY37yzWvUP2XqmbSJ1EWhEsSTWuK33LAzeNQ",
  "key29": "7qLHWA2api6GaAexZf98HPBTZrXV4QaztYrSuuXhdGcb1M19bFL5VW6BNeahw2YEBcRETHK2azJYGgsVEZWexDY",
  "key30": "5UvQrJo6AmnieBrvCfY1TZHVuLey6kQ4QauBuyGvmCdj1Fahw4jJcL8MtD79LXHXNDtZaM4pMnUXsDwZmp9c2YLX",
  "key31": "dmCkWFxVDNKo9Qkk6qVgmDh2GBesr2gwekhj464E2GiDp245YoTPhrsXfgL1Fx9uh6LF2MBgNn9a5t6SgwQGe6o",
  "key32": "4GPKccFsdYcmBokDpqyp4jAepTN1p18weE8gDxNgg1BYNBUn5McCycGiKMx8QjCZQiby1H5Tu2jL1PWFcpsgfXtK",
  "key33": "4LBD1wwHADNVZg8uvq9U4yeCCit7uH8A5GLm1tStkzkhQ3gvV3XJgA8XFbFFMRpQUUFUA8RMpYqybegi6d3FwJtm",
  "key34": "r9dFVM8QK513V8p29nPKahYoikhytuGgCdrnCzS1U3WLe5rs7UuktFcPtyw6jR7Pe3DRot7yjJiVGXAWjFVS7VZ",
  "key35": "3uDcwKDA32SxeUjZti2HaJ9E6FVcovPtq9dEwHRHZ4r1axihsRAtif9aEjYh9j24VX4VfDsygoen7F4RF6gogEVA",
  "key36": "2RB4XwRccWzBq8osnQoHtas7CtpHWcdYyFWpY3ohqhBxGKcLRDJMtc7yX7RThLmjAnYFQKdJajJGw3LLWWPqkMKS"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
