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
    "3r4KrVwDoJRcyQHGHbG9Du4EbEMXtxUVnsxm21dumvVMjdWu5GXxYLgVcfe7uuRJrizyURP54vnp4iu4U3UU45Kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZY3RX6Rn8riV1pgiF4FbuEfz9paJb2as95herHG1xb3CCLXsSxCuVHRx7evxGKsrNGDYSi8bf5gae18uQYpShax",
  "key1": "5uAoYaKmvgYyDRyC7YbEy97ZrJMKPsWUndn3uYP99zpDeDmB6mR2dm1F92SVjGEPTcDo86Ysq66GNZBtpcc1gvJj",
  "key2": "5QDPZpNxvXAax6dfZgiXTTqKoWakJZ94edkfH3H4uFkq89VThsDbPoNZ7jhV6UNGhuMnLbG1h7gWDbdDRW97asxg",
  "key3": "3YhLY3QGBfUZQqvVBXKUcqpBbhjuFa6dfNmzL7EmbHif8dzNQuczbapjEN7Eb5uosLWTGk9z2L6aivapUtEm8XuA",
  "key4": "4bJ5ij9TGw442JxptmBVYmpEiUrnJpMJre2RCvT7vS7V6qATw146JgSS1uVKdD33nAgid57YxtKJivqmjvMGrqAo",
  "key5": "25wfRT3aentiFa8Uyx6sJv212hFj9hVPyswksCvrrszfqPSjsmj2EzzgjpMKyN9oL64xBdYQJ6vM8DQbNPUaoQjJ",
  "key6": "5GmbGfdLYLk2MjLuktUYHd4FQVzNF62pwdCB87LN6YUU7PjmBzZSubZpkWZvSajBWfkN1PccyEzL5DF3F4ph7CJo",
  "key7": "45zuAkaZgVSUWFBDMKQ9WojwgxdDBUaYoa2fokvrAnjpTsAobyaixVQ15chbeBnrXP1UD7ecNsc6BZBKN1Lh8w3z",
  "key8": "2vBJ8JsFxSZ4vYJvG9oRP4oZW6PZwsZeqcKi2N9BymVbRctmktvLVJH2DGHPgu3tQQ2wjxRMrzHtPAMHmEQRdsfx",
  "key9": "2gUxYo8QUZPgpi2Li4yJe9CGh7C5WkDnYb6GiwtS7rfuiyiLR1JXE5QivSeV3K1vJ9qKoiE5uAeqcr4xYd4zL3ka",
  "key10": "41cbm2Yp4k9MdC6YWwNYtT6rJDLuLjcKmD157ejfsZdx6VoYVR7zCqYF5HyEkjK6Agcd8HZVyBg77pyAcTwFcCU4",
  "key11": "geMQTLr2kr9TyptvQzqxiutQKNWXhSvFvgu8vVHNrBCNV5E8LbyWaj41pM7sSzVGpj6AniMqXyo7EnWrTBtXH3V",
  "key12": "3eFBfE6VzQxV6nCEgbmq6DuTwryMthJdpNLGaKojgr8dXnV5j7PFgkpRFbMDgfPna3M3x28THxFPjxWxUaA1aGvF",
  "key13": "2eGkfDfDJFm5czeajV7JvsW6iDdSemSxb4zpM7LsouVAf6ArtYtbghXadMAdbs1w5GsGQCVxGSZpkhyEHdikMoL2",
  "key14": "34fLioNi9peTHbRmAKnu69LmoZgDH1UoJ8YQwLVjzLytc6AeNitvYzJzuWbeM1oakvZtUzRNpSDHt1vmWAroDTDN",
  "key15": "2ZhiegvbPY3yJKhNrXmJ4evCXRynZ1DYq7iCgmsyFyTm1JVDbWtwxKuWY2qBAJyAtEDq1FAAUfeqk9gXLrtb15H7",
  "key16": "48NEYNhNSpEwocA4NvyB18BNYH1hcN4eBkt2SXwcC5js8dTPiFRnBmPpG7CTvj7nqBbbW3tGJoymX2ePPVPZMWXc",
  "key17": "1kfNUjwpg97UW6remy9Y7sXPRQaHoLcnG5eSRfkHsVZfNh8xXENiz9dVJLpjcyzf6Up7dUPZdqY2H7ptuhzqSfi",
  "key18": "5fnyFdVN9dqXr1rxPGzH2vyHFGk99XNtDkCevNCw7z1tGs3TTrzQLQQXztwbyzyV1i9HBq2hsYXhPAhoQtzJa1h8",
  "key19": "E7yG3qbsZQ2q7SCh7yDDEZQk9iweQHDbHCUWdzKZWGB7yj29QFmGRNy33NKngfXjcLXiNMujiArvzBjV94EAHpi",
  "key20": "5WYQh2o371p3DEnA39vdABssogQsso4kwvuZiJRV19QKFBtwYHKN1DXu7B6RNeRm35tQ7aGDhcGWfpCZhQb1EAzo",
  "key21": "29EP14GU3ZrsFcZPgnbMQYTaCtYUBXUtt6HRS96gbkeS5a1RbZXaECjcVQ7C79aGeFkQN3RXY93pGBEv9jXSaQHM",
  "key22": "4F3QhNca6tPdpiZch6QkrTXfMNgdFTSwDytBbj9aHm5aV2C5oj3ZJsfkikG5wYvidw8w2mgsfdVZt7nQGQuUCaRy",
  "key23": "3sNBRBrM3Lgpc3eLWJYk16u7mU4kASKXxYNC4JadX8KVt4BCGaS4gQD4Lh7cunuZx5uqc4QVGKX1irnarscBLC7w",
  "key24": "4ViHsxY5QZ5E38Tx23WapGLPbrDji14mGSA3WaJZj1byvXc7ZwTre7vRyG1H4yobyAer8xwp3dyB26LSzGAFoope",
  "key25": "3RNfvvS97QtXuk3p4gaz92fA93NTwtbMmuTrQUj5UjpSRWZSv1NmXySNynnP59Kd7z2DxppnnvYZad6K3fkV7whr",
  "key26": "4qfqofd26WTidEHmjG2YRf5wCTvQWAZBw6QEmuGkP2AtVnSrGH4c9YaKXVivADECc1eVHm9UV5pyQSbzcEiyXao4",
  "key27": "3nwLMqozdaQYjdkkiB6oPcHd8Gvj2gV3cZUcbV9ZoPSnwC5syMgPotm57RZKcdb6j6PKmj1r1jXZYzFujx6VrL1n",
  "key28": "3pe8Xs6Bab7rpaDBECeqsexy9KMgxkBwmv3kxZD6VmnjT49bKu4aVWHZqRaGShaG54LQETkariRAoGpqzb1ktSgX",
  "key29": "3nFYtwhoPbZv9px15Z4DQY6KaACkRVme5ZkvHhnFnJQUbGZRJ3NysdLkN8fVZeyP5LL98vCz3uL9xe656EJhBDbH",
  "key30": "33ae89KgdnmmjoGk7chPMdaiPP5KTafjKpaBitqjgUBUa7KcjBFucTKX7oBzijV8jRRrN4HstKx5tgexViJrFVcY",
  "key31": "YEc6PMwP713RsVfzmxDQZUGa3ivqc9sFivzZLdtu9emdFG1qmFhevZFWNn7oG7JaDRP3nFFzGxrj6hXXwDBwxcz",
  "key32": "4dMQNyqaiBQugJYCZuEEmFcMz9LbACX7vMWMbLdUyfmLudvoqAqWUrAihz3yyXVjHAPC7jLTkERwmCXuA4jqckZT",
  "key33": "2ey5NEv3X9fNJTgWNSPstK9m3K8W2wWJW8KKRp9877rpvGnMrGvaQ83zuQqqRtVd66tMiWRohypoAsbe6x8YzwXB",
  "key34": "4XMJLHxz5YhAvcDQ3apuoSF65EGZrV3KCavo4oLUsk5D7a6NhbR3deiRV4BWhS3GKYkqn3ujZbSAdpbGCYzexNe2",
  "key35": "2s6XwNqmKF65CWmWAD5tuKh9f3kfkF3iPRfGntiVzuNXHA2YM2vrqyLtyrSEypgXktojet3du4WDAUnbxizY586A",
  "key36": "5n2z2PTxnNxzzU8xtdvXpHNoDz4Q7mwgcfS5UwCerLFi7ryCV8TNt8p9CpjaFmmxjJZEizgsMPR5yw9Rn3bawPKG",
  "key37": "5NCgSWpFr8LdakWLuhfz363WUVYXFUKpFjsTz9aXdRjW6dZwGGrY8SdK6Mnhq8d36AfF3UVFUQNK8ioEiAVFpVyV",
  "key38": "3tjwpRdC6yQQVdhzYp43NyphoxDPQtzPgDEnRAejbMBRsa1zSZygPYTzRzwP6Jeb7tEyerdRTaNmCHs2Sq21F4Q1",
  "key39": "4px1KV22LUHErNGQtFnNUAhbpwtwVAAzRTedSuN5fSDT1A5nNpaRmuDBkHpLKspgreSgxpkNymrPh5h1bm8k1Wfw",
  "key40": "41x16SFr4KsD2p3wjAsRBHxjt3JCPX6jmQPCBGfwDASRxBz9eQ65zNqEEJXBGHRkM1kode59uqadLSKUpntdE9f6",
  "key41": "2ZUAzFitPHA5C6pYgQr1CQCoH7PdVxErEgsmsfNFEgFBZ29L4E376MR69ajke3Szk23uwAMqTuyC93zrgbgptb2h",
  "key42": "29KrHBPFctXmzjQVea7aFABmMdA1DjUY67QC8B1vn7YgB3hbKavNBJh1Pa1FDYAWjEibGA7DFy7gJfhW7581c88N",
  "key43": "5S3B6rDdVZbYJDHRADnpye39RDJwYhLH4tFMt6eTimHtvsY6C4ZTbAQDxPRLQSHGgU26nM59qnSbfk8NTT4ZV3V4",
  "key44": "4iAEKPMAfqrhkX1FCBWKEnDwhYSzhtJWb5zyYkkqa6ixMk2PiMUp1TMjtA4gVRT2coJZG8XvXR2hEvKomhKaJ5n4",
  "key45": "CKhrmtzdWbuy21mCnLZuQeq2D8PJSyhsgdiXTm6X13JPuzk2n6Vbanc111pBob8QPBscYFiDEoyonDQVeJWBHo7",
  "key46": "4TYVp6L16g9BW7r9QNkvfS2M2BUVVfu5Yg9uPq1dCPR6bsUtcSMgU1NLeV3CuSruBFPX6q7WVNVJHxF2QoSSivhF",
  "key47": "tAH4TyNxpXMjZH5uvA6fZJFV4Dby6k1vB2fmmEDfdatZYAq5H9qsYPt6KDYkyi3xaCfXk7NcYMqE9wjnshie95r",
  "key48": "4KA3DPdhWce16uYpFQhHBqVTP31jtX3uQQH5zKW1CDExtgzeE7PjqkcfMH7PMLodArMqhojwGiepzbH6FyJpcmEC"
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
