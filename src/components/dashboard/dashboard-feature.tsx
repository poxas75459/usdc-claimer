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
    "2Et5b6z7pb5qpF4CVxZKiEpXCvrZuSnkdUQj8pxjEtHii2PBjCdBbA6eyc1zb1ThWd4PvhjC1fyx5PBgvKHSRWc2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r7SC9iKEZyRCxka54kCTGknrS31m6xJqVAdXsSd8J5kfhAjBDRvUTHXdgNePmy2QYmFjrWY4XA7PkKqoJWmCNeM",
  "key1": "5PfB3tF8tdMxfi4YMEAeDZXTcUgzLMGJsn4mx3GQd8qwyVz57SNQCGy8Z4rXndYywGonm6PoaAFXwp8b2QUbzN18",
  "key2": "KPNuSQ8DXqjF47Fahf27yPRPohDuN8QqWh42DPa7S5Lcf4pBZ81cRNcc2iHU2EsdtsY7MEWFbJEjVLKKCQLd4X3",
  "key3": "413pKZNkGyJ36YPhx1G1o7zJQ4qP5r2hez5mvMDG2iEXPB4bLypTyCSDBJADfuEEQLxz96qXAyA7ciiLYpTHyWgZ",
  "key4": "57G9Wc3zyMEqyHCKEbfveBGfpxKaqSrhEanYqbL4qYFGvtKrydsYY6sKG5XTEVKUHBWjaigkZNsgeqsAmzLp6JWS",
  "key5": "5J7RT2mMUid1z4U1ipRs5sckDN8omuRpEHWE9ADfpCBZeWm6nFQDKf7QQtTKiJecQrNPSREFPC65iW3xEp9qM5KG",
  "key6": "5rVSRcXLZnqkd5qpjuVdej3G2x1JBRFW1CJiWTyaXs5dCddeL4E68qm3D7cE6jxzVcSZzfwJjYM6LmX1UaJmcUXm",
  "key7": "XDn31sZkvRz176CaqkKagCTzt5yeGJ3o1wDa5rziDeLy2PuEPxpdTiJdk639w5TNM8JGcDWQGDX2bwg2dTXfDiw",
  "key8": "3jM1kfmtWFYwN2DcwP6fo4Rq4hJJYAkne8nh634gysk64hzfsiaxY25PSZq4uctpXko73eV2bGdDrkUqLemV8jyy",
  "key9": "3UvHYV9hv6DhupFdAvofyULHPtc12EAx92p3yeEtzgQbCy3zB7jBZxgshbhyqyMbiPDsVPjbKrKu7reAkdhNxCgB",
  "key10": "2E3K6A1oUGTobXzh8UtoZDhAQNFcfSHmpKCAuZ52AqaYhCcJUJz5aBxYzu5jyK6XGbNzgmFbSFuLgwKsZUabM43F",
  "key11": "2EtVyg7a6hGumK53KVEcfYVqUqQb8mgYULELmqHaDGeCR2m5UeF9vnvzEECpZ4kZm98X2upP36wgvyZJsK1JVGvG",
  "key12": "65EcAD13xUtCp5LaBCq6HV2eiKbtFSNsawASiyPpmPCQi3QGNU29TLehqwSK5qXVkenzy5WibYocMWrNTCVsch7q",
  "key13": "3uN1BXJj7rM9fdT7fsz2ob2LrGma1ptiKH5MQY1JEztZNPHGnqXJZ9uGdBJcWfuPmPa6zPUBFNA8ZwxYBL3mLPpD",
  "key14": "3Jk4rzx4waEwtL3ps5mYsk81xfptTR753J8hA3FUz8qje7qExrb4nJAYspzPKCzCaRbfmqVtg7PJYsyzKdMasZjd",
  "key15": "5Ag7yNrXeHY2H6MxY6aFasVxA36bkrihXMLetQcf9ryj2rkptYRgEfZdhHjnB8yKQsK6CzCEB7RLipfa3GCRqdWh",
  "key16": "5ST2vL4Bz6wnPUwG4DYotaMhARCkc2jL8voLLDLQzFJuHZbdA4R2EUHpobA4EHSaCxcXHcs9tY89dBF1HQbButuJ",
  "key17": "213xMAjy1QFqdAr8W1YwEZsBJeJCNtBSedZjsW8kcKe1frcnxozokh5fGN7UmSJGh1mj25AetgqJsM89x7YFBJKT",
  "key18": "2t4PPeCihsjiDNC11iRj4Gg3JyRTHq3evGgek4815NygLMJja11yWaF1uMpZXdGWfgAHxAMCfhNWX9H2LQFwCdtM",
  "key19": "4dHoY3jftQ1J3zN8KAwQTzjJNhoHKSMiu5db3vnUhiQshnUByMVeUhd5bQFpahYMrCoUGfsRupK6Pvj8Tg8Zz9Ny",
  "key20": "39DJDkkR99yhF49kVYAnjk1zkCHVAxy5pwo7qcHGq1zbmkqLaebYQLtmi1Q62mEgykJYRoKnAUMRPmE7joZekT5M",
  "key21": "4J77T5ijmkYKp3F3eHNsrmw8CoucRybjq8a4wNMCLRAWLJnUPaci1GdzyCtEFiaaCJUnMkri5bXf19C2DywP1iza",
  "key22": "5YqCWaxcfabzKS4jtCKsuGhouJ4Xss5ffggYxGLifq2VuxD8bBRXZceMNihcq98nEB49rPwjgZ2g9aJoSCSu58kz",
  "key23": "5fXgbo27L4xjkhgKi11X9VbBtKnEgS5y12APJ5dPGeyTTGSKBB5eMhCQr78NTPNYis9upTwztjBxtRS9dBR7bTc4",
  "key24": "QzrE4jbVYSQjxVXXcsdb5REhxk8bSL99P27NRwiWSAvpdmY3p7Bz9mrfciMHFY9PzPAog6mySDk9yFKyhizbxUS",
  "key25": "4GBrGBVVm4KQk1fhd2X3iCJsj1TGG8P2ZsiExsyjFKUXbF2J4brc5iK7cxvA5TH57giW4faehxpEHgjjgy2vMqA3",
  "key26": "3TU3ZEBjR282q7gYEr2vxoQjnKEkyRudJbRfMpMidsw1U3j1w3NGTFf4UwYmvnKEUaJmkZJFAsRUsdZzqFDXWKjs",
  "key27": "5gnQY3FCtDUs9VsLsBDLLCfNVQQudF35PZC2i7nbkik7MyHUKaVscW42KNGFCuKzWG7TCFWeTbyRLmdhaq3LKT8s",
  "key28": "27WrkDUxDQgrhv2BooM66NaThY7tU6D7rUj1hmZhA1maZTNuGwtLkyzkw8JdzSQGLrJ79JCSDmEDPjJrusJoFimS",
  "key29": "36NnghvJqc4GKSY6pZiJzDX7RtVk971rgrHJyDphnhuWauFUL1tH8ywFgB1vPsEHS4jPT8TJPmiT9q9QvsjHPhYt",
  "key30": "4L6GyRQKNBHKwGi9uJ1UGen91a4XxZRvurjw42YahUdT2iijSZ7EJaYRLUTt2a1s62uNQeo1CiSPVq9uv3xenHEf",
  "key31": "FF1Fwz1jFJbx9bHYQtcSwt9p2ave6yW5EYqa9vLQPy3wJRD5xUQpdpVm8fwsJ3iQ1EwJugQRipc3Co1yeMzVEKM",
  "key32": "2eKk2jB1KrQnsPDSaZCeSMFRthawN4bnEkcLmgX9m4tMQjqFWSGmus5PYwdPvKXM7DSzAFncU3n6HQwqQ8n2xTES",
  "key33": "2AiQSjTeKQGopREovzCNDJ5fK5fRUzzz7gReY3uKBaBAug6arm4hGr3L49hrV9tzKW2UaGVYgGFxM9pFs1PioSBz",
  "key34": "cXoJ151SCasPhEG1FAjiNCJEmvfgMg3Xx4oWA9za1BNsg6GHS5hoDBBWf3yoh2reiYsMZnN7UJmhEWLUvktGncS",
  "key35": "4pVRPENgv3HkbRexoxh79gaAEMnc8dR8N5fGshzxkkwMD5yvWXtujFp9SPhtNm6p8hAM2qt7JPqi66UC2AcZbKJ6",
  "key36": "YLRZmc5FdbGriBCGjTVuAE82g8BweewedZrVPF1C9gk65eh7PhPdNgAxWG3CwvMqcifphT728t71yUTL39wgw3Z",
  "key37": "2EQ96bFYBUWddPWX1Pc5k3BW4hTXWSoqXWroWfr9HAtnMuhzeAbiAfaEeWscvSkKEyn6czkxTf1DvTLzM85FnUXZ",
  "key38": "66vpDCZ3UUgSB4ZJstBNoqHwY17SxFHXNmMs7ht1MUpEtM3N6arb8Z5zNhU8XPgsdenFUHerF9gRQQj6LFeGCgzk",
  "key39": "xwCXSCwuFb4ZMDyaHnVqiKzD4a6xeNd441W4K2UgpmzQpjeHWrg6kaeKgWgETR1B6MEPfWmkx3KKhu1f8h2k5C2",
  "key40": "3rVQ9mgQAEPUCkLJ3GJwbNj5wLceNnuuTxZWmt95bdRzcFqpkfgbL2n4C7d5NQ9RVhx5GmY8zTQyWEgpX4Ddx4nA",
  "key41": "4p3V192aDp9QZ3tWKGEEFyswWT6nQCNaxcorPF2XuUQ3jFduaRbSDo8K8fB2TNogPP7388Zds8Cjf6F4gxbUd5qY",
  "key42": "3dy47AAmJCQXgA9T7hcVny2Mu2nRNv75A2z9ATs1obQidyN5H3hvZMbh4cQPpagJc7psdtGLtmjURjTRiCDt2jGf",
  "key43": "5MeX5u7e9zAkjCLz1raX3qQicUnvpivNFktVHvcpsHb491535iH69nqx4WP9aBkigT96cvL7LsVyjYxxk1FEfQYc"
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
