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
    "45gaPT4mdf6zefQRVg38mvcvUyknkSczHYXpU7iLS64C73AsPNXsZzzjqygeL4T1cQmmNy4vx6dPex6f5dV28oZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y7oYQ1S2m3mwKNdYxwo6CJKXc44bywcTBFLu83eCpwsZvaawEJTWvXeeggrsHWek659UfVV69iq85RRkv5y3WTd",
  "key1": "4jyG8jvDAhtL3Y7Ex3R3W8NWxhTxEoVm1MrksLgrESb4Uzdr6Je1QnCvuZCLb6Wj7qhozjuXzpXTN1aJ9jgNmgzD",
  "key2": "32KzWF6G6kMfMbQfSugWuNp6VQ3E5MG1c4qMdcH2TnoWm6kJU6YpfMzyhNZc6PdTt4uqcpUp9p5audWqnXiQwJGn",
  "key3": "Cc35Ep6Dvr5Jqk8eCxnFPhA3h523WY8yY3uVZc6USDfR78gYABoZSch9fexEHh9bgzMZAKngJmToyFovWqKL7kr",
  "key4": "D2MsNsABEa6EedsbxiDHM9BfMyf9cvSfVesWQ4nC3qgRDyL757fWHcywLW9JbNiwPr3kmnmurDfVPJPVPN2gdi5",
  "key5": "3UnHwpyTjdcyureL3XrkQ1uG1hrEuZ3HyjLGvWSZYbK7pTsn7yeihn14Bgv2cMxuKGaSCW3FA2yyo7o5Ls98KCe1",
  "key6": "427pc4XdTMPjfaEHGuvb14ymN3xNHeWKXoaC7xeBpkPxcMN1iymgsSC2eTmHeYNcFL48Da84dyx3HQKV8tMMsxur",
  "key7": "PV22pWezvVqpeHBYgm3rB6TDihkVu8Ab3eNyDnkNcBhZpUgf9UUHbLciHd64rmS5Sypwrv9RQr5SgPs4nwn9W2N",
  "key8": "3sEiU2bqtiZQZ7MQQjGvNPK8L123ivro4oC3FWWrYdLkVybHrQxkdvEXMa68CFu9vdZB3jgNHv7ndxYa1UqXrbeX",
  "key9": "5BK6zr72h2HtTxfYgemyxMyuKu2AJnbRz3AhwWvMuMMnLLatnirJDuba6t3Z719zkbdYV8U3MBoqEVbmYZmuhdjN",
  "key10": "sJMwaun8rJ5NRrKYvTgkGvJnn8GqB1AGBAMnftMH64uryjGfa1hfAPuxqekNhUao5RGqrDziXe3VnDuhXWBmqen",
  "key11": "545v7V14FVwn9dQjyoU5BnaFb4TJje9kQv4YpYpQDTz1WzcvjrnZ2i5u1AhfejoUKUM23UA17GJvTfB1gjhk8aRh",
  "key12": "5JS16SVyoB1kCUy8Wfo9s7TcTaSCceTsRCyJzHL1A5gGBXjXwGg66xkmn4sFftWyuChv7z7UCeZaFcW5PVxA8Q56",
  "key13": "3avRtqkLazZ9b7hiCh5Lp5phX3hJ4x1tqCgQkXMkoWnYQD9LPiLMTz5VvG92Lgss8rcgRbcbTR3f6HfkMaYH41Kd",
  "key14": "5cfpUKT8j2qi3FjFwoiwaraEHDVghUsAZJfbNjmK3qVhfFEVfXMkoUkcerZ2GZoyqiKskTZqsFEkUzT5h2qdGFko",
  "key15": "4uTDXsk6985Cvf6XW9K9KJbhTuwderyk2Dnsxihyo57Ne5TBUp3JPoNsPKcD6H6YnX1kLRgTogxeETMiFy8pmq6J",
  "key16": "2o5Ctm5MuRDuPgicGNcajJndMY4QWQ2jDZNzbaExBiuXwa1PLjLb2RxvozpxXzcmH5ihvdS6GuEBFqLntpmPdNHX",
  "key17": "5ZXoLW6ddGTcGxhjy5xJQ1W8sWagSh7tyjsVrsQ5H6LCJacgqYzS6XiLC8f6qkwnmSCpeTUnVD7tdUyext4TCvPn",
  "key18": "65NUgofMFBe2NrFABJ4DdJuFAgV97WnEjxFxrVZaB8JDFiybbzQ9axChowCVasLDfcvPCTnmK1cAUv15T4R5iBHu",
  "key19": "5yYqAAaw3bTBvRg5GBSwon6hNNmJT3Wrk4xHfmk3L3VWarriVyYpvapCK9kfWQjqs6E8Upkrh8bwscA5qV2yF22z",
  "key20": "32q2Fjoi14giPn6UqzhEnwL79GNoGafWE5vFMioKywzgeG6k6w9FfKxCetM8RDazhdebAPq1mQD2AdELbUHnnhLA",
  "key21": "34ur8ow1WvvUHAXMGPbaFeoFCAXqrUNW4GRazi3EtyvkZzuQoNDcvHGkg27nWhWUJk59nFMKDyu8exNFoLLT2Hnf",
  "key22": "3WUZJkU9dYJEeHRsah3EoEJN98Xv6LVFi6GzEK8tQQU1fGsXCvLbzaHP158LS99RQscnziYRC5oSFnSzWWcemUkb",
  "key23": "B8YfrBLkCDH3YmaqWdHTbjZ3i941horRMJ9ebGxDXamZ7GX8zn495KNdE7V5ukyUA7vvjpGw226Rp6id5QEPoNH",
  "key24": "46FtvjiyAPDtMxdsMfTY1XQBRvmMw9TjreTR3C7yd8EwiFUPoLiZAHX73dFEh9x6SkfvyHYcxVYnGyPnpfNwa4iQ",
  "key25": "RrsNwd17gxtabEVAE8BAP7t6v6d1Kc2mzfdCeBNy1JU5MiwMANNkT9JYWU211mQHJFG3QcqVLevibG2oTiG5vGv",
  "key26": "4eiokBUB3FeVxqMqiAZRCNxrRJLuPydCz8ihSNfn4kusT8zocgCEhhtbuh58bRGbpoW1duzEFrV1adqJQ9qz74Pb",
  "key27": "2iC3ke8vfm29dGgtVRWSb1zPQAmmcCS3VpKXh99JuBmQFHmJE3nD9fzWcH2cxP5Naypc1PA5NMgZ6ArBjgTFqSNs",
  "key28": "5CQHMhBYjHPcRdYdj1XkLzPMJhGuryx2L8toaSCnKcrPYLk61qTYumjNgxcooE1rntMmawgbHfryg6H6Yrjvn2nz",
  "key29": "5oujmAvpRwp1cwiaS1SCnFtUSsc8kAEzHK5qtMPKTCXrmPAdN47ium865JX7W1J77CCcvUceLtFAJV9LEjK2rQne",
  "key30": "2uCc4QULwAKUXbsQFNpiUDdFaBTUHTCgyuUhHeeiQP6xLcciPKyCo6tgAv6rcBbqjGdpdK8K16gSPS85vLQq19AC",
  "key31": "K2diyZANw4GodvvcRRE1ZQ13C6XZWkqABasDzDPQq7dWh1mzjrc3fTFzqpm52oxvYTvw6YJxmwu4mfHmw4ZMCK1",
  "key32": "2S8nKvURAFTS9p9bCECnSfPHgDpRjkcfLdsu9MvPpHBTx1QpagM6pSiwW5jMJKHNexYDdrehLStqSiB24sK5sLT2",
  "key33": "3pcku5TSYHRYcYTDmZGarpZzxe6RhVMFJ6Qu7WEjBgyYDgkv1TBC4PYfPwmuMKvThWyfAigtRjZxfXJuLfj5oRSZ",
  "key34": "4tgPeZKitLJkJmBnmYyRfYgNydvpjPKRw3TzpMBRdXFsPM7PhgpZoSTVnLF3vTqhkWe4DMZYpi9oasUkxMTB3meW",
  "key35": "3uByLyQDCDc25nK8D2QaevCw7nGFfEE4Tp781TfQu3PVHUygPRfuRLEy21PjDGhUCsYLXCkmgEMg7VHVEV7cV4xU",
  "key36": "2PmkjciKfzhECwKBnthnrFYcxCTrCNDB1YKPAmrg62zijL7GEPiUXK6JYaTNTnWhFCX6bpFJj4X4fPEjnQu7NuP6",
  "key37": "37yfGXb3QCwnQ1Zf9ecYU6xkDmYGNFCfoNYP2Yi7VMcstQfgw5RXPxx8Kjjn3CNZ9jomrNUsR58St65BKfF8XzFN",
  "key38": "36tFfQESGrC2pVTreAsz6wfMXAwZZkrKGCihzKB2yjjSzrLg9uKVppQcmHwotkMf6fxA5uHhv1bjuoEUMdxhdsPD",
  "key39": "4mQ5nw74q2Z9nTAtM7es1dRXXWj84tYKywRTwmhSsg1M3LqEWvJi5dsBFyFskDyzut2jM5HqLrsSGenZupbUKDw",
  "key40": "5HfTBqWeCkbWoxC1UpLhN7qvE7U4nwGnzzKk9BSERdGD5n8WW3Vr1nq8pDzij4dQZB1hMX2CdkivaiWjmECvYCY",
  "key41": "4kvjew42w3YcNHGn6cFMm8yqmSGYuuNhrSBCQR9bakNLNgAYitZwx89jFnmtQgJgGWFeBek9Suha8bCMx92jN4eg",
  "key42": "35czeuMFbWeg7yTLRGMqeuK6CyB2nSM2w9Z7UyxXxrrvJrQEkZkL8Q5NejQRUSsMZJut6YzUU2eoyy7dX86teu5p",
  "key43": "4n2kaw6ZvaquuqS4PSTpBzpC1LwupNXkQGWHjyAiKrMkLaYep8hhgBqML6gDguAZrpDkqabAbyi9w529Pis5HHuF",
  "key44": "2PVuAPtzgWMPCvNJ5cP8JZeqe3YLuMyK9p1fZMPsYtkccNgQaoVjhxSsx5Ei9DxcyomoHpoxwKxEp2FtXV6uvfGx",
  "key45": "5UULwuvkzNBqHde4B37ySpy7iXB3TbxT9pDdi3x7wP8pffMwiXtXnH1Ei8h8nX97GErjUEYa8KpnE7ai11sfnvb1",
  "key46": "3A2awouDegQDdUZGVn2AwUMHGYQuDv54JWav1W69ruWSuaMkkvjwSmSgbtmsdYEemaBBNkim9RroCutmTvdqYmcX",
  "key47": "DTeiFC1EcnQGmTYPBFtQWfPgAR9sfNNZLenepia9ZaWw1EjbytKXM7GRdC7D3uBR1CiNpw6mBHdKvbRGFyXnhkK",
  "key48": "2Bi6qE3FhjfWhWrUzxLpdjzkqrLchGWZA7LL6jhtKJeTeN4PhTindLGqZk1mqtcw5NMJr13DNuf8FKWA9Z6C8iyK"
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
