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
    "SvAwVMNZ3RQ6i2XAvqqrYdr1CKjpL6ihiWRzb2HAfHWHygpfzymGqLZgHLNQMm8k3QTj96e8CLnngguxie1SuPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PBKXfBLbkngQGGbzA6sRazwvuB3uz6mHPfg5WgJjp9d7Z7fi8WMg2pVeLq82kbAT1vsCLeJgU17ZRb4RmdpQds1",
  "key1": "3JYsWVuavyvsTfJWkJHQyGPDVfDcwnU8qh3zdurRmuzbjFmDN5jeQpS8g8bTELwm8AP6xFEuRP3BGPyp1VrVvChU",
  "key2": "4mRX53ePdUi21oqKkgHFaN23eXFNpCgqgQ55UPuxySkHNsDBXCPgwDiYYKmPr5t3KvZrzdLeg368oaXxvNipiUF",
  "key3": "64NJfqt55ovW1TkmGhMgEFGGdBJPe6LrnddbMdWE6Ao4DnyZB4CA4Xgubc8AZX9tws5j24yYVdEMAHQHHLs29Cf2",
  "key4": "LvwgFxsy9q31UdvtktYr8pCtSTQkRrLnceSLQozW4bdNBXTPovXdKqv4MW8iPEt9LSaxYqJaNbH96gN6LWoPRkj",
  "key5": "29HZRqC2fsbrFH7MEt8Ajzs1MFXd9WfqeFiAbdRjZ8CPJDX5DeaKnwMwbkeR9Hrk9uTxi3GFQ3DGMxSPAuZEciH5",
  "key6": "5UK967PkT1DD4t9ctddHWDHHdLw7h9PVCHB7KzvYvNe3BioNcrf2AJQekpWk4ENz6JLNMHLw3DcKv95vrt2Jbvvd",
  "key7": "3dVnTg2Az2gisvU3kLXzrAuYUDH1mgtomMPB6jfkthvozm39q7TxTjmLcrEMUSneE3MWW846vCbvghq58UXGFXxG",
  "key8": "4UZzmRUPmSFCyho29G4fPvkWuPZNbGgu9jbi9TnUDWUraHJgweeQSTufQq9SAtCNMC6EHxUnYAz2za8SnLpZjbqH",
  "key9": "Z3o1nBgVLkkpAuDibgvrFnKMNohufdE4fq5wE92BpTMidDAvzFB5W9BjZrsS4JZGkqmQzsMyRBjtSUhDjnrCixV",
  "key10": "tDVm9E7cpu4As1NUQRJsLLQWAj25DKkMVADr9nitNtc6HkJpF2ASyXVrv3NtMW5n1jLUbqbDBi8zzkmHPFFJc16",
  "key11": "reNP4BfsdZmfb3Q7Hat8Cj9uHY3Z72Vn2Nwjyu6mfjWhPdBdfguAT3jwwwPgD4wQuo5xqUFa71Du1VQJMC3wGmM",
  "key12": "LcgjwZL6ckPodqVvxptySrZxoJdo3wxgJdSzcM3y4gj2UUuwFmaX7v3JJHLWWpoeBUuREwFtTgGjKkXHqkC21gB",
  "key13": "zPgNVn8P2fuVtwmtpoWbYWeA9CSNGgoJqVzmtUApejmyG4RPfqoov4WetoYjTZrr3dprTNUYa6d4LanFae2CrHy",
  "key14": "2KJHaj2dsL1BnRQpX17cCiHmV21GkRyYd26LjuodyitgCDink27D9vNHFNyL5aggYfWHRe3wo28XDgzuQJtHBcXr",
  "key15": "4W5BmQzfYrbKTpCeMrBzVVrYqi9yKTwvzWtuZPf7gvAvL58kL4AJpdKQN3e2knMyT9t7xh8xCCvd6VKLSrcDK4gA",
  "key16": "1AurHSMwyreUekmXqwV3M15sSZsNCQnLrai34nsTNbYQEHN3mea6LjgLBFmsLhytivoycb1CdwHsH1cniCYTRUC",
  "key17": "5Gpximid41R3A2TZ2yyVDfiXFuUjrhoHtSfasYNjj7r2soDPhgH9YUXcvoDgHWRZHZUQ2Vk7Y7ure2CrVMa12A5p",
  "key18": "2737KtaVrFdqZwPw1ehkPw5zTiXCzrxsRFbbHWUBE2U4b441sTRwWkF2gBxVwBDd5gcbP2N7ZDzBkTUm4SDnGnRM",
  "key19": "5M2PXn6Uia6xkCPAWr8Y2wfXW1tmf8y6Z2PHo288iLa1qqqNmXJLy4uUfw1fSdHaA63LmoiVK1cDRfcZHJBRa9G5",
  "key20": "4XsSwdoZmsiYph3SLC8PsQvPq3TVxZgXcVsUGLJ4H3ejxj72wSwxTeNmZZcRN7dK5gJ9ZxJEyXk49Jy8JvidmoPW",
  "key21": "37tnZVSymFWPRGLfuynDX5fbeU7xFLTDxyAC7oxnxWbac91tSy2QfW2NrrcRR3EsZRZbCoNaK2CjkiryTjfWyzhd",
  "key22": "36jixbz6xTaALerkSmiW2QhVQ3JPjY3YSyfcwSB7zkPxDJntWhusPeQADPb6m82nc687oQCKScBerRmtZEEwzfgJ",
  "key23": "35gYMfXr9aEui4Z3CESG5bArkwcwZofYxzD3W1nqM3ZWXLWqipSzHTCYwbnUdVR5HJnn6u2DJHKhENhW7FwxuNhb",
  "key24": "5Ppnde7yKGM21kkGMhqwVfRE71k8BHifrW8ApnvSxeGsQFci2d5kgG5hfm6G77wcbGYtFxmrQkhPaGzGTU4oFWcs",
  "key25": "3wey3b7b5nhEo6Ht7NinjMnvHUunBTMypZXbv5yYnPqevA4Ge9fAsVfF3xaafRvNFxSMAEaqoDM1ek6ii6c2XSnx",
  "key26": "uKUm7qyiyd4Jr4BDN4YJBvr1wUs9wHDwPkJ6nLiLrQVv3DVjuJTqoUPtsWAUtE5YwsmjjL9WN8rqwajFLbQutuG",
  "key27": "5GGmho6F4haK2eD3n14hrQrcAWEEwj57Qt9vHF7FtNbybmZgagSHEGde6VvuS4YmvBdwegS61GBC6L1wQThhCsRM",
  "key28": "23eBfejnxc7aEyMdGsJ2KVqPAKvGppXXpZLVbFvievovxeQfijuyo3CvuQWpKBjUCnvdcpvCMneZh4ZDW3DgXt6y",
  "key29": "k1o6rtruzmjXYfaRKfFP36fi8uvewtikyXi6twLHWXcQ6MoUxC5SNuc8kepByLJFV9qFP7BuEudjkwe6jcpmAiF",
  "key30": "3EjyFNbTrCEus4ZkMGHHfpfTAhcmUGmDkQf5kQkbowARgXLDjQE4s38nPEWUBuF8ZxZwjF2cNZJHvrEKRE9w68QX",
  "key31": "64if3HiMyWYhbEyUBhhPPPXNjdPtDQaoYV15mZwHCG6bNEoiNkjiLFvXjv8duaR1Pk2QepeBYXjJ4ARbNVJsjqgP",
  "key32": "4ancFH2Rh2ekNUuddMkoSjmQ9k2pnCqfP6KD6BkasiYGsnZRCn5QLSQPqN9o4zqfukw6HXjUPAKE7nV84nfCexDK"
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
