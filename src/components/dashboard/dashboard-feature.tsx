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
    "5xHWzpqChZjizQXuVf6QWuztKWgbCihcSERzNrVty1otM8KSWJwcbR5iyrug1dmKE9rYXAgkK7JVsoR1PvJnyg4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vSfPFwk6VwGsdBmsFKTLWT79x2Dq4dWKEhZ9JTsDb93k8w3KSMERsXYdk9kAzjwfZq6NHwHLNQ5BhR2pA8pajnY",
  "key1": "9dQEBAumwk7ip3P1zX9GowK44jQBewzeZkFa5HwFMCesZ1fJ2mBDEKFyEHqqFbuAobqVuriz1UWT87Jsi6s38C4",
  "key2": "41wLdcQvU12YavEvqwDUSdUehtFJCHoc5pB6znzQCmBLa2g35dNwmh9s9BgfAYpPNMEPufZd9z1LDoHZLdmuMWGC",
  "key3": "c5AtCViDFKCnWKVkxrD2ThbnWHVYvMH5u2ijyQrEHtTRkbJsb67eR3y74KPpi31fYkSTDi1tYnsdK438YXGutfT",
  "key4": "34o13hn2vswpQQp34zS57YaHfzAFYcjDtrWicRjiSWTeEY79AUXhVTgr6of1L2gT88TvHbd2wg6ZZ3BrNAYfU4WJ",
  "key5": "4xuDXkaDrKLzFjc3M6Ytm1nhxXocLo6ZKRiHxY4bGsfK4peuCinSrmZtFvETGevE9DMRr8a2WKPRqAgFpHEDzmp4",
  "key6": "41M88s6wcQFeLRKteNbj89g9Z7NqGWi9qJdGN5Dmh7P92EqwUDzM4RhaHVcVkPdmNK4wzi8pRHXgX6XgmaJePXHy",
  "key7": "5vGZ4MKSRZu8FVtB6pMVZNYW3eXkbXkNiMM9utwfA2mt4evjBjJ8BZvC5cdMoRpSoemuPaHr6FAJaWqhiDNqv3nu",
  "key8": "5Mdy2PwQsQs5vqrpMnjo514BXdRppccTi9tYHJ2zPiBQ3eBuTCXb8nQuTLy3TjnGKqwiAi4sQYYdpY8hqg2tXRnc",
  "key9": "5pHVrfwrT8CG13mDd9qSzmGdy3SRYLrwyFnhNDCXQeB8Y31nyyggbKbnmJGw4m3cNxHywodwN2oRZmRGhHFLbiia",
  "key10": "3JsKj2Dr2Ce8PihL2bh9xpua9sGXnbDPBpSkL9M91vPdAjYKh6xkiJVHFHKXBjBdvmjreXzoXbyPs46nwtkncJUk",
  "key11": "hcNDtQqd1gZDUvaDEZjs5zte9Lff8n5gY2TSvYzSstmTUruaeuqit6LV7qwKaUaCn4hZr7DT5KDyHfierTk5jE1",
  "key12": "1VvYdi6nYPa7w7CB5aETuGbTdtF9eQdfwu3T5rnD1jtNz5NduuRzsVFTF49Y2zScirWXBuSNNcsozjR27Ramfek",
  "key13": "iBrrd93UEMxeNncg6vfBCdgxTiARiXWuLkAUXCny8PHHwmYZorPxQBDsbYULZrKMy5SLnkPVmaeGqKEezBP25KU",
  "key14": "5e1gUgeGJEpwVTq7mu6vh4GerHy2nNi5tAJ2ckigrbD8idEQV3okjLsdUh5jhKyB4HHzgPR7Xowxef3nt3mLB3yu",
  "key15": "4KhJcsF66Eh5YADsuPBCyQa6tdzWd73pZGdMospv8kSx7UJwZFVad5DuGEw2HA9t5oDgyhT79PtCzKBcFVKLNioe",
  "key16": "4Y7dnrKf53XsMyCkN7WWntE6EDXQ4nNHxpvKJWMANtYKXMfnopQ6AXEKNrm5pT3YCZqJ6x3rDnkFgfrMQwqLpTvc",
  "key17": "TBP474QKfQGmZYdfdbg3Gz7BmrzekB23i4fXwq6EBSKYuRnqsNwVhb1J9mE56iGeiuHFyiRZTPhALM67v5NLQeq",
  "key18": "5bAZSJ5mAHaUmkiXW7QGA4NQyaMceejRzdZ21kkzvvm2nVT8dAdus6uGvKJqdrdBsKYD3GqRJjx5jmCFovJPKVev",
  "key19": "3FLaTNNhJmp3Q2nZrNBpptedMfpTZJyjhVNnpAT38e6Z8EsZqcd2hRQmcaQZ7UQkKAixdqEN2pQ8GqE43P8Pj3k9",
  "key20": "3suy817SiZpc3jS8CDgUck5Y8eUVAzJD9KTEyThKG5GVUrzsMKTprgCB7tduki6KoQwMhddTbyNEAjTenfJ3vPq6",
  "key21": "3JSUU2e1wqpUTobYWFttYDpBro32c9TtNR1z8mZ61vasMeuvrnrXo64a4Ch4bHm6w7oSh6J81HQqDeLPPkZ6T5B6",
  "key22": "Av1KAnAADxr8hvmSGyoc82V8y2zGc3x5cBEqDUY9WoKLo828MPZpCeVruQ64MDRmxfi2LWdxvCGqi4Kauwxba5J",
  "key23": "PzkvK2XDU2K1n79EvhgQbgnSrqfSJuPXQGz4UL3HDKE2V5QdWCbD1g5TTVhhL41rY5xyGncsLetvkHod1KZoHjC",
  "key24": "3fqt7gBtHbRMpPdT2wCe5CR7YQf5o4wvAkd1awMq7LGvfZK59ivKb1ewW8gainh5Ras5mG9EQQShzWQeSkgET6Ho",
  "key25": "QiDG5BRNoJC6zR2PSYYq6y7zdVDWDmpWC1j3uivNLrgeJxFQ1JcfQoppiDdZPQmh1ytKC1ktvNyYjw6yF8HxHQd",
  "key26": "2gXkcvs2n5CttQUVvRkXbEErzkoQNiYazEy67Bp3FEsTKc71ueviY6ktjZuFBTvxHxSSVDmLiYyjFKntdM88X5DH",
  "key27": "5W4eXeWbepjzyLsS1Am3B879Rvt1UuUTqAkP2v9gV2MajMJSuLbkydGBFxa65yxYbJqRsBHJyuMF6mkNc9zzTKnq",
  "key28": "4WYxF8wWX9JBwaarZS54P57L3YwpE9yC3VHKg9yc17QrF5atVuJ6BckZKLGSFtg39tc1wjNa7URfjryywrs2FLtr",
  "key29": "35qrfnvZVd3XvhgAaXc9fycESVMZ9bFBAkKivzVeWoL9V2j4YNDmsVr9xMfEFpioMd1VmqyK5uGSHqQ87hoKyUJi",
  "key30": "2QkQCgGSxSpZTkUMgj4bP3SnEySqHpsZDj1QkVMpoN37tiSCePiJAg6tt3cVSzUCTFdigpCyfMKGpJvyyhysEE8x",
  "key31": "k66j1MthDDziwDdY9XL26jdorzkbzyY5togFZ3WDXaoyXGvRKnzHy1hS6eWDYwYHc3k6fH8nhcDNb4mntgnQpbW",
  "key32": "2ZwzcyHzgWqptLKJTBazBeCykreN3oFTwDHL9x9QAssDhcT3hD37VTQC8f3GEa4ZKhX4G62yLFTn3MtXsfNhqNan",
  "key33": "89HHVHpTpEFVxBD8yGNXnt7mqGifugfZGUP7CXHvGaqJgPFqgCdoGXSFPnX1UwePYN2WsMH8cC96nemqo3Fd6JJ",
  "key34": "3rFrCnqaU3zbFL3jgZ81bH44dRuoAGCwktR9QEpukAniEuQz6n9EEEXVdRZ9K1nJjDVewUcntMsedSj1WQEAnAeC",
  "key35": "3E5CQJvjNuFV7wsYvsiLQLXUnp3snyHvBR6ix7MM1X8FAZAPntQYzrn1Jvth4f5QkYTQUcmawNAEU6cRCApQnH42",
  "key36": "6HTwR2txUxR92cDyJbuY8reQbMLEkZYQDQFztHw6Jq2Rattb4tp4XebJfqcoupwuGwgqdruKZxC4uhhtFetABCQ",
  "key37": "3CA9dznUdrfogAcjHzMBKfebNbG4wVp1gjVuoNQuFKhg4Pt9TBEfUQL7LDCMbL8T8gtLAoSEqVEEukL6BRD4C38h",
  "key38": "5DPhesMncCNXwxbA3n6zjgR5QPcoQ5mcFGrWCygKbEyfaMgMmBtsZDdnKMarmp66zPapW6xCQ1TACTTemN7K2Hqq",
  "key39": "ae2Qtb2ykGiu63H1YX8cbrke83ZQLrRkBYnFMCE9kqP239Y2Pg9fd2XY8gzPZjh5sWWnLwwVf11bKA5aLT9WX4N"
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
