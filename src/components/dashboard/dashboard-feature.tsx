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
    "4VHeNFNAHnNcUX4KuSXkqPjvqGWQpNiS3Wmpur6WiysL6vU1X4K2RZjn4KJdgb7eVuvg4AfsNhCXWhnxYDfsqQNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hdWxdaKrC52Qgx9VNiJgu6G3W6GTs6mTWJMfsDwkgHC7bNTK9rufJFxJYBSCr9UaQp1DNBq9gFfCLK9D1JDnnv",
  "key1": "3HeV3dqmXgBB4q52MyJThowf4favL9VWbexAvhVZKbfwuDwiHMvEBocnewwxYvL31QiU5geqVzfiZxAu9NMRmS27",
  "key2": "2DYMMAeREftJvsyng9S5jGedBhJAHtRPGGD7MjebeJMB3tyCMumduPcWd68C8FJefkULNeRWrMQrk3fPNAUgE3oM",
  "key3": "cioGkci89Z5QfiFRtvRo9W1GTorNJJiAkZZeSm6MzsbvyHUdiDrJYPN8VJcEk2u7Tozenh6g6tNTQTypVAsXztt",
  "key4": "2ikQiCTp87znCTeMFdJH5sPaUtACiABdsPM88LP53JDe8StpJzb6ya8ZYQJbKTSXuLgy9n57AMK4pQKqWyG9Dpey",
  "key5": "gS2LWFxy9v9DhmGpSSPttCzsDT97T6kgbeNLzBrRx3nu6YpVytUfWjmgd9jyUq8ZZ4MFHkPE6wNL6jVdaGPoTmR",
  "key6": "5f4KvQKJidHRpuCFn7vazqP47PBGhoeYQtGnx2WzgkDwytmjW87BW2M8aXiLQ5Sym1V7miEgeFUp8jrEsYyhfKoV",
  "key7": "5cCDdAZ9cFkdL3Y2xaW2f56rmVLv1kt2aoELZyFrErJD74BQebzthHdRgvTpd9kRifS377fYmdJ9LrBqu7xe7mSC",
  "key8": "28RiJrgPa7Eh8SpFQYztqYCCwhrDg6HCjTCKd34y7c4VfJJayCTbpdg7ygF453icwbd1Fnc3Eovszrn2EhbGLvi5",
  "key9": "2VrvMF1AhnJ8WyBVMPT3vyWx4znzjwzAQ1owquNpqt3rgkHE9Zz6viAuRZqwJg8YDjf165rtjEsPyi1UnvKk6be8",
  "key10": "335MgcMx1JfkdXsy5SXxu5TUMJKhJrCQXU4y4GXw9MNrxPc56hvn3tSaHNUVV84YFp3NbrRfskZnW9e5KNVi5MLf",
  "key11": "3gaBvpDBbvtZ1DCqpzEsShjbnHrFSjmPs15uAyVM9i1LGegRj1evLUCuGh2n3J2LHkyTJAVmnVffgK1eqvA7yVbV",
  "key12": "2KX3fkM5A1N1GqkCEKmVXVwnZhJWYWcK4GXW3huPkGmHfjv2vfsf3bxBtSD6iH4wNDXdy631wMr48gLSX1A67rCS",
  "key13": "4UmNC5hEv6i73QS6uDFFJixKhcDXdnzQKuGq7SLjVa3ud833bb6c3t7gTTM5f8pQP2fizuzcYpnSksRVLs7sin3F",
  "key14": "2AoCuP1TfkBxsg1C3rXJFuCydcpBxTyyrr1NzZASGK2LBLfQmjLkUxi4Ziw6wV4TjLnoAzDJQXCy1urtKTrhARoX",
  "key15": "2ubSoLdCa2RSJhcMLtvkqcYgiLTNgejvBxaGSTcejRtKpmD3Qho8RkvGbdX5JrptULbF5UNYmTEcquTzJ9jeFb3X",
  "key16": "4vZmE6V99R57h4LURzY98LiGyttzQcUGGc6HYiNZSu14ukhhKn5MiCaykEva6XWTmqrwY8xDVX4JddfJ4T5JmHbV",
  "key17": "4iB4qzokitezozMwCyE4BYdnbGtCsBgc9TAg4HVdnareH5wizV7g9h5Tju3ZPyAfvnWcd7rCLQQ9zbFkzTUftYax",
  "key18": "3SNSHx6pKn5HpDiKhv45fmqHiB6d5ZuFDyeH1BGuZbddJmp4W2YXB2VPFi2VfMWrehb2Dp45h1xUJBg71AnJktAj",
  "key19": "4ZYdccaE2XWy73dbuJNBDfgPMzfW7w8UzY86JPRgLHEf6XyYjfuR2zezrNFRfxL2XaBFpSqkE5fMWUDxdXtYhwux",
  "key20": "3ASnLuD9LajuaKVjzkj2ZngUR2DK1vymZsW4uiBS2FTFyQhzw8FmEtePsvjkezefvJAS57ghbSAFYkYtUb4fJcAi",
  "key21": "3nu8HGx6MVNiQBphmrM6S31Vf2DnLcJCa4ukRYNeCDn5RHPs6KQGd589X2cv3WsoFcEDiLsNizYLcYCde1WNBFYw",
  "key22": "3WsF36zcuvBLco2m6ppTWYbUWWbkHTohgkfNN8jWfYCZPWx7LL1Mii1KGHvEXDXmiuPTqTPi5N6BQfC52FhBJKtq",
  "key23": "a8G2ndjbckrVonJi6a6ZBDymm47kvZzhsX3MGCc3qmUJBZ9B1EAFDTsgf47gMMLBzP1crCfa1AChA3Bbq37Xd2K",
  "key24": "5ZiueTJVEdZsQ8jFva1BLUYqB9YPrpsqqiE8nShjZgxYPMrsPdUSnppcR9rvTgLeQ8CatUosyNVT9b85nZKHbKeM",
  "key25": "4XQbCrQ3ZBxrPjhY77B1yTPaNimcMC2ALTCn4hv6UWm9WheJJPstuBq5LCRj3ZNJR3m5B2XW7Za3uZgm9MwTPjXt",
  "key26": "3aWnbjeAKrqnA26P5dUq95Py1ehGrH9G7sufz3EgNMdwnCSUhibu4QbChEwvpjezhEnq3aGHXwZsAvPE6cbbRe7h",
  "key27": "3gbCaunyetL6oH5PiLR7n2hjg19q6SzyVw1VgQYWUWFQUaACuponUHL4QKCMsAeu48UmiMYCnNQ8n9nJnYhYKCKX",
  "key28": "2dKEdEdF9eYj2eM6szHwL8bNgRZiUanznsYr8wqxyXPeNKq474hZHT13vuMR4ra7CYXmK63xhn95dFKphCVBQ4LR",
  "key29": "3F4zjR6mEzjfoUkwjXVTSbhBQED7ouNdhNFb5kM5L1gujJecFShCenNVZaVYURPDcZyj6ur9NbJgVWYSULsGRMh8",
  "key30": "5dR7ZFKhzcUe5RtwudQQwk1bbWKGXGvYZfkpQaqhESiEzm2tbQgQi8xqFdASyigFRzZmmoi2Ew2ZNeBGzXRbmhZ6"
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
