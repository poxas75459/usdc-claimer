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
    "5y6RsMncLQPT4Q3XBu3uywbNLwJZL93aFGSHGwWrmQRtaNuYYNhcpsg1TUy7shgBLTT3VYSYdhrKP8iUXSyhs4Xr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UwvytL9oUHrtwk7HqdJti3i3STKgir9tvuod7vRowp3TBJQzdyEAfSScnrNDm3zg34KRbwy3MNK2cTb2Bpi6Q42",
  "key1": "RXJMPB5FJUZ8yVRRH7RjSbCmxvR64ZLnWqq7nDrsRB4Ra7JWeLt5pKnTmoUD7rk9ej1ceMGPyyVHyMVP3rqu7Mv",
  "key2": "4Bi6PrywZGEpGbSUDq8ZdSTx9svgBZcbz8WWFj3J4vSuHMgCCwRnFZx4jTzaCkwWkRTsNCj1qYpedULnRRjKxyvt",
  "key3": "5GVYpqwdvL7FsjBntEBEpApErCQz4mdE2mEFCigHeDaRbTbjPcPvLqd4FvwFU3hD5WSpywkKKtDALBgQhZ9PmXxa",
  "key4": "2eFfTVh5pDJJ53F16chgBDZ5eqxctUo2fufgi4QNhvxjZxfVApvNnaFtw8H28Lkweht9NHg7TkRHuWfgnvC6uJik",
  "key5": "2nN3qRMSiuRf8EkGHkwVCNBr3zPBiCaMhkZt5t9pmYJe4vx1uayiEH1q4QY8dSbPaLFWaT2oEwhWMogMoa6Lezwt",
  "key6": "2mKLqkCBPR7insNzBi1G45KELNiBdL3Z6Zy82zRdNXU4RuVZvkUP2Hbs3FGmcqJ3MmLCYgs5jvmpLLZkgY3JUVtN",
  "key7": "2tJzgKWN3EhnjfxvYVa5UhKhQw1v34xXB6vwwt72Bnv72SnQ7sPzxhapWrDX2ze4u7VZFvtbpLzSsgpWLy2Xt3QV",
  "key8": "3QtTvfFVr2bH4sUBuFKyYY45c77BKd45Mka27nSTCi2ScA7qEiTRWvNqUmPon5vwc9tYADKXtoxyYUD6PyQE5oaq",
  "key9": "33Kjx8wUYD3hveeLo4hkR9N8SfgdwHduN3KijpuKPcep57auFDRxNp9QkLRFo2GgoCSmxgqFZVDsxpmH2uYpDS4L",
  "key10": "3TSVJ6ruxujxXXW5rgy63ka2Hc8HhTADB4cfiGrLWQ6qvhwkLprvdigKGZ1PuLDGryTyD2joiyZEiQY9pyEnHuGX",
  "key11": "4tLFsy1FiM9EUE3tP2oX7fQDiXcedLpcRfbE3t8Y55zAHcA7saGovGULCoVvvGoywAwYdoYBvKgBsDBRd6mQRCvK",
  "key12": "2dq7KYyZh2EfuzvuwPTnn8QJC5Z7pin5QrUj6B5TdTEMnXVzd3Bxyrbzbr11DtSKG5yuvDDJmmtrkKSjPdviz2wW",
  "key13": "3drDKzLjHX6ypeSa5bpAzmTHCYSm1cZzJ9gDbpUxxkBPmxN7MDsVidb7duy6gabU3gNKQ5F5i26aek6eHMrWsqpg",
  "key14": "x8X7vmsJGu7FrcgobMeRB1MU9omFGsiuCw4Qxb6G6p4txZjnZ1oFwxLCunXKUs1sy2fE6AyfhVLk3GyXz5auhx9",
  "key15": "5acCtcF4idZVDV8PcKUEmW5ZTaLfJ9w7FimWAb4FqktiojjkYaRfbsMRMa741iLMySXMTeWeALU2WiJaP4kpzWuk",
  "key16": "2kxGZuKXoGo1QBw6bJKuAWtRBRnEMqdmwUfbhQEzcD7RFbkJiGGG8MPncty3bUzrjohmdBCijZmff1pHRqhf13w9",
  "key17": "4MPGWAMKdqH2E19yJm1B7kBtr9MBnMFwFcURLvnqqcYsBkRn8yGouVBwCnBoBGigEMWi9iLT5WGJJeQTPDfkpFu6",
  "key18": "y2wNXL8SjvJ9Mt2ec1LB5Ct1fjG1Ktm92K5ArV12t3WqgqCAx2ZrEWeyqvf7zmBZKgJbHe8j5jFYMPJXUbPv45Z",
  "key19": "2QUu7SkNtvuWoweX91DKos71jYPHTyyBG8e5gV5Xoo6SYJRzKmmPtzQcdHYs1N8DfBFNUyjfxQyTvgviVeU4PWEz",
  "key20": "kkRxNfKAL9jEMTeAgsujt6wSdZN5AzNoRtvXg5FXuAnv9WtHwdcCGfFh7EeZTHXrpHQdg3cU8fxBSvRu378AnRR",
  "key21": "LMJH4KSauYjbPTxiBjgWysFsF8RvCjsJ589RFYawKeWMVndnP82HGVecuYvQ2JVyZGspTHDMJttQtWzxAAaJd6c",
  "key22": "5MGhKstJhFXRthGP1HPPA2UkWvVzU2ZFtin1xAKnY7xeD4vk93i5wfNEmVMyUXvMcRF6Jxq6fGSEfDo62iZFYtgF",
  "key23": "ofwSCz3CnQks58mmfYtiLvibUMM3o2B9bqv2FoCa62NqCQooxgWveRXu8nUcoVmeEQbWsbjgcAGuNFud3eQz1AA",
  "key24": "5dwXKVNw29iEvcfCyy6fPE8Eeyb233jnBLJ3byJ5LofTxZSgdLubHH3vPNbyopC63kec1TUKE8BU3sYPWivVeyU8",
  "key25": "4ATHyg3wohLzHhWaNewEe8HjEaKLLQm8xDxpF4ZBziGT6UUgYMfHELrkwwtCHcQKXryS12gxVWuaBoXqaLB74xXK",
  "key26": "42UCXaoeXzRQN86nN4SDNHdmyqnN2ta3YNzgrrxQiaScFbhMAPGMpiv4GWcvsBvs9mar6S8uY3hBG8svt54vWgzA",
  "key27": "2sTQgcv9TvQSYrHMqGZUNzB3vtK5vSyG9YYAZ9Rx4pVVr2SUHm9j8QTRemM6dpA2dvwtvMqRRhkj9KATMxSUxuxr",
  "key28": "2fYwmrfLYt1to3s5oMuQX5kCJUBHTS6H3T4xViEqgZspybHQNAE8QnK8nKGPn6jYYAkcsUyNh65p9Anj3aNQHkgv",
  "key29": "63gVe47YmbumfVotj5vYxVbBHpbCGacy9mBAhZfZoSAMY2Vq45KRrBhxyk6JEW6gntWokoJnjP71HwbJW7mjWPc3",
  "key30": "2wqm5G6YraCQSGdbeZdqJTYQ7gEMr2pcNHCwfoKh9YZxDT8XzAYDiaMrUjTtu9QLhwKvUwZTfvwzi4T2KdnzKtLk",
  "key31": "4mbKB2x2JpymmUMbvmQderpJVtCC2Qak3tMY1EoGxAhsTWubbvFJRhrYWFkpDGyNCXKtGSVFQGdEh4twCh6t65jV",
  "key32": "5yuCXswxKc9X1SMVSQ9iXSFnpteBtz77CBvJr3tRUEaSG53aiS8KagBTg85y82oLtsdQdFnCiTAgEumb1zadxF3v",
  "key33": "41bECWggfatG44nborFoVTTo8PFGY3D6X4eGybGwn92amk2hngfuiuVA1zqeNskc36Tq16w5yaADH9S5RfjEQ6uQ",
  "key34": "2yfEnYVRAsUMxsRYwkxm6LLWh9fJZu6snMSxF4XumZ6mFvrtUBt6dKHBU8UiHba4o7SC3hz1ZgARvNBT58C7rD3u",
  "key35": "52ur249DqfLWdpCDnweS8EPy4NkzgnW2YHsw5BB1R8cNr1MTLznKBtUpNWrD91G4DwQQmHdEnZoKtMSEDYvvngUS",
  "key36": "4RNzRa4hdEn1g1LY5ChfCmAh88TbLwrmokrvuH4HZbACGpGBDweLZyy5WZyXHxVuzQv17XW9UNemC1ehi1UshxMN",
  "key37": "5SyJCeb5KGKKGY1XJwe7pBNm61cQgrkeDrhcsMqTymJnnvUXbRy6VrhF2ezYnYLJPqJNxuRjSfDULyGEXVb3bwJq",
  "key38": "38eyzCR6LEWEKh6DdPjbwSTKqDd3jUAsV3dETfgix53hmUDdTAyL9YyjFWWJMCpagvbAmPGwLKhpn7R3upbwm1gf",
  "key39": "5q52T8XwAs6oGAFL4n35xL6ecN2Q3Fc1WxGBMXCAWp31fzoAydDzffE2X7q3sJY7GWmDcHL4927NJtewybsEBFHJ",
  "key40": "3x67UoQYYLJWgXEDH8XAx3sE8t899ndXtVBCMwr9cFHBy3oBsvF6dT9FQHJtYcY9iyjoX5mFLcWuW9MiFBiyWNDb",
  "key41": "3euGyaPDj2PUToxmDEcLGArzJVpS36F2aPEWfTTCvH4GYHCzXvKheRiXB2WTt8gTpX1CC34GbVSEiBVB28VYbUtn",
  "key42": "2iLh5b6nd5g8Wj55j6Q4VSEdheQQpwGY7UXd1RSDNxgKfrbcBY9xfx6HHS4QBi2DBiQahbcRJKZgAKPX5fd5ZMTB",
  "key43": "4Sv7vokQBAjDZ49Cna3kE8zudsqshyACcS4SYzW9kAh8ZmdoMkzJbAf99if6uHHLaqdmPZN3q3PjKNQcYxispaAZ",
  "key44": "3H23AKUDqzck9sdeqjXcBcNctirvhr8Qk1ogtJfjVipZsi3U2TRAR2rpYNDESLagUhxos63sX67jVhJmixz1CBKw",
  "key45": "5AW9GndoX5KWjkbNkAwiU4HDDfgZEdXiPpyyeiYe7VxraT4uEahBU419og2vN4fB37DN8tAk7F3K8yUeA7JVCUqp"
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
