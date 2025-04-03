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
    "3yBtH5FaqEXFCscQaWA2tDZL63KaxgLGCvsvgDHPCGN1eZAYCFSioD8M4f8js4MnvHJQQ8TzMfVnyyhPADfeFVLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33YKxRPkKffM66ZLWfD2actMaE6vjHH8QBpvwVy2PB7Ln6eMyHNKxb36TE6xCWWA8sSVYEr81YpFw1tGTqpammp6",
  "key1": "XKJRdzTVPhsq1b7jY1cDSCRzZfVePc79T9YNf8cG153LRp8i5Hpvt92fPSTM7EbEowvBf1ZQppqJpiCUufDjEKG",
  "key2": "5c3mM5CnUxN67qjpjhwSNFGgsmDmbpgYC2596T5FaD2doChkpeWMtWg73Mn2R6mNSrdwhE7w6AGzu2whvfVZ4Ump",
  "key3": "3NZJMsy9ynAUsTTD53eXx2EGsYx19jiVgxdJDbBQtf16J2vMrj67gZrm49BB4fDFdKcXNgEGAUvT7LPpavjybQ1f",
  "key4": "3bdUPpvK2wemGTuTGHatP24ZK3XiFiMBzQ9QviMpufbJhgMju9UtB3eXNVVWQDKrAVZT8fGmidcxdwCJVvbzxk61",
  "key5": "2oXa9kPBEYBT2rQNFfk3CYcqvd2X4vDddYk4UpB248sGyg1iJWUXNAd2V3eX7NnTQb7T6G8DXib5ek8ahqgwSRuU",
  "key6": "56MX9z6SM13Vxgmat3PKoMEQqPf8JhHgAGbmkcKUcTG2zbmfZZxkf8NEmtHraQMBEfFTq2ZjC2rTva4kgR4TgEjR",
  "key7": "5vSe7i2ifCGvxeW8wG6EdizQtjjX8tPTDsQZP5DwSdCZ1iXH3KZ3Taufj8bfNQ47U2Ec52QbZEtrmfyhU3ovn3h6",
  "key8": "3wL78f5pENWuFaaBERAmU9xMkkUWVy1nRyoFzkBo1CgqePUNxvBerC5cPhrAWe33waggQspDubvayr656Gj6Cgt7",
  "key9": "2e5s73EBsbhA3pAvpSj6BZuH6G4JHtDFy9zZ7r7nq4x3RvRHvmypLf7GK2y9VaKdghPYx9XCkUV5keTAKxfnZAdr",
  "key10": "25xsMeK76mrnC7K5gAdArcEucXQyEmxNCwBtzZ5CPfc5LG9eUN2huvTNBYE2EMkwNYe58jNwZirUSMdSsv2ys4QF",
  "key11": "4RFs5qAUzX4d4CYEktvQQ5i2BNUHxUd8VxSM7H7fBTaRrno9E4eRGgsXVVoqPcbQDeEBiwktMvfqYBnDXj1VW41a",
  "key12": "rGyyazj2ZMcab5ZF2fFPJ4Kg5Egnpg99iR2XAHePbTPoeV7KjQMC2CsMYTpDm1JZH8eT4Bf82k1xxBzKSpHZM6i",
  "key13": "UjhZUuzWw4Nobo2Y7YU6B5saWTemvYtJDtxpJ2jmJPpB3fMNjFWnatPtjBdN8vsB312MPTaC2h6ADKqapUmQoAD",
  "key14": "3uiyX4eXK7zgaybm6KY8Pq7185K641CB8hPDgLzY6qvHuNKQj8YKAKvE1ziVgszRCV8VJgUYXP9ZNTB3uRaktnF1",
  "key15": "2h2GkSdKVVmbsGo8NAAfrfKampS4JLZ1LpnEnffpLhq9g2bZSsrT4mj3qzjJ7zw13fQbWniHZqapwDAdnJ4buwZR",
  "key16": "5Meg4jyXk5xpNJVjRrDYppde94yAiMdsenmhorPNwbbE7W6AFe1hb5Hh2jPW5kth7FUVKsSijSoEP6pqNM4XaX7y",
  "key17": "2bDXDyyZ3EfApkR1AUtKDyFUFTzqYDhvyTgGRep1baeyNket9m54PJmkuJU7Fzov3TpMryP4qsGCBKu1KwT2Hzri",
  "key18": "dbRn5FtNj2KxAZmCojE59zcRqDHNKLWv7eDmevruvKTheEN9a7BpwVk5Xz8xpqWwfdoRNcg6WnhVYizxgWg26e8",
  "key19": "3hvwt6m5qR1zxmJkL8gEX8Cv58uMT73nYr2fLkxdCHqD1uT8xCFiAwZjcXAS8gxrPoGFyLqs839uwefbcawqnrmC",
  "key20": "2D7gLCvZ7WV7p7RLNoESVbo3k6dksLkkpN1ZwC6d4qGAGLj98Apkx8XJ2SVtKfKoFuuHsHRXFDgQRb3UBocCKVQ4",
  "key21": "25aeCPHDG7hd6cVZJwgmgw9RzPXdMDr8i9i8Tf3sJuuTmgbywnYQkXBr8MHKTQSrGBEVKRGz4HLyBB6Das46dw8Y",
  "key22": "DiUTkziednWVR8xm3x3d8pNADckmA7TUX2QRD2Eg8tUK3p7Znw8Xf6VLhGzFuWMERGGTFwWeXgHw8z2u4URJyaM",
  "key23": "5eCXF3bT2qGNEzqmSt3mjofDjBhUQxvtGJHN3fyJvXwZdfWpELaeQ7EEpAKH3gJsqyV98hiuRHrfRC6Aq489bRHn",
  "key24": "5dvKRTCyYTJvnZjz2sTofdJoPEEPGv3bhLyzjLEHm1tNoN4SeuaL1z4yd53c1vabarnPVFAhWNEmGzZYPCpfhrgM",
  "key25": "2EHpZpyqMAATDNsLWdAxUSYisEDeK9xLb6cxUUJhdow9AA9ah5gttb1hwvcZ83ywq61HuRUs9fMvUkK1PKNrSKs8",
  "key26": "48Y5ZMurs2bY5oPAdHFYqZ4V8abhwkp4hVR2793jEtiNQrH61mSy3SU9RwB4FM7WwD95ADWRoK9wWJcetD9MGe9M",
  "key27": "41ZfFGT9a7dE95NnqmxjuLRUf9SNaQEooXzeGniu5uqoPVr7dKAiEsjgkd6LgRnkbd33TkgpBBdUXptko2XgKRLi",
  "key28": "4sLtYcUq9iEgUqStdubWecW7XnAgSstZ1mBD3TLXM4CR1U19q2f3VgRkJv2NpE5JVHxJbtHL14okoVhRu42TcUyG",
  "key29": "2HYc1yJbPsQorVkgSrBZezWn6CggLKMaAxztpysHER7aeMY8tB8ZWzrpPbDZcmWhu9XmNsFNjPRmGs23VwGAr7TY",
  "key30": "41iEVrzA8AiwhTPr8ydW9wDdnyAECZ6HUcbLJ2vUXhkVT1hgZcvpQ7rJdZ1spN8vyMNMFNoPs66qQT2UWA47Kp82",
  "key31": "3yYt89wcraRLnYxDrCyWyU3LnnFKt2bNjzznNhRvRiRSZsqSbTfxUMrKrtLiwnRsQxsxsrcHimDhmstTsWwfL4Fz",
  "key32": "52PWdLkJLKaG6NfXBdNjisBWtKr3QbUK5Nhr4ZeWrypWfEgHyiHzoBpZnCMemwo7HnymJgmgkQ64Lm8B1HxgkDgb",
  "key33": "3GzjWCZuK3mx5b98qtyL8srKwD37uUrNJi8CmDYFeEZVsoRh8ZoZgXYpCt68f1uTpuL5qvAh7RQ4nnVZjyg5um7w",
  "key34": "44D1e9C7o1ReRWZ68xgnBDS9V6GwKhBJdJHqmne5jRv1SqZwSCvD4JACmkDKimNPdpDmzkFJMVp4zZmGFcTph6xm",
  "key35": "QBz3SBNJRNUzCpte6STi4wQZXz4YaZnhn7ADNLSM7cy1UFjn5fCURc3s6hJapV7Tw363eTsJp5TVxbVLeuwy6nU",
  "key36": "cR2A1rkpHKQPzwUMMPqhL9TyQ96NTajBtPbuoxKgXQX3525nZWbNXzgY9wbcAxusBssY3tL6AfgXyRrbynx82uJ",
  "key37": "63kppCauZ5usTAuBXJLd8a88Htcnva4FEJ4W2y4f8kaPN3zaBufoUF4FMRJjamSsLMn2weVgtSosJvNvEbguumhz",
  "key38": "3ygFjWvR432tg58uPRtwKEpvHUEJJRdV3SQiw1iXruVfVWN3ZnVGUEyD28iCo1KJKwHe6xP6ZwtnDKzP9RPp2Q7w",
  "key39": "DwrXtfqek7Jd7aVRohEQByv6ZgWSHhVCWgh4U7XRtSuSGMdHu8mCu39SByz4CMH7XmoufssPP3oLah2Uiu4KUoH",
  "key40": "nGFgCKC7miitSY164vDXU66WT4abDhXGrq1Xr8NbcBb76feox8FjtA1c7xGfBekkttasvP2iRTvwQ57Uivdpq3C"
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
