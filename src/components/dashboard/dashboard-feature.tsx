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
    "4mpqsJxsL7L7AdjBXksdMaKyvdozMc3HHt1rH4hakXrzZbDKj75uoANPYP4TGxZbGqF6yZAcHykherZosRAJfNmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ENHs2U9sb7L93HpSBaffnLxxawquDQ3RPxyaHcSynjYYKjUR1u4dfwEVxFBZ7WN2XxXGQHbxRjo5BeL6mhGXdDm",
  "key1": "3HSi7UrPxtHF6StudghvpTNuWRWTMLGXFE5riY1KTih7MAkU44ULdjb8k8Bkk7JHyQ5g7WbCUYJuxjZUVZy2Ye5M",
  "key2": "63tZ9TKN5aurkQhAxfXrkF7dNUZDV17QCA7EsisEa5qczLkiti8wAVNeqZqJUAH13pmCCMtWDQTYFUZF7M8F9zzy",
  "key3": "3YfdxJFekxCfgJvoBN8ToMQQZFhMr5ZLFzAofajS9zD6ooAHzv4jroYv1WT5TGppgJVhNWefWov8M5aiGojM2y9K",
  "key4": "2SJGjmLqJrGTeaCWUoxUtsXxqjNMxLjMrFD8Lq3XSZEjc3bVW2EeHmDwCdm7qjjtnxFwUGjV9d3pUEbdkHCBzAh7",
  "key5": "2Df9YJQ2JTKHgoU8XUAFuCBW67BrnAP7jMVBpevY1dyGQdW4LPxjN3wy8CXSao1P4sRuK59LPpSRMqNBbAtTqYir",
  "key6": "2HBdp7hMJ7QGmhpeQwUEgtXYAXtjNQWmDm6LpSzHnGkBEafBcRrbvzF5Tk6by5WzjhZbnUNDxEmbJhnERg47HcTm",
  "key7": "3UvWFj88fYw8P2ZDoio8ctPSbci6pGKRzZaG7tsMnHn1euiyywd1wv24B653cp98nubc2uoz3yCC9DyDReSv96Xg",
  "key8": "5Lp64fGmXMwuEJdgBEgxkML6hPw4LsCKxyXkL4MgYdCtW7wnDxMgfdRFeHrzcCvjy2dDBKDBsaQf38APU5FwB71y",
  "key9": "2PKzZAcAt5cBSrB8LV1jqdqNVPGrjmTM54jnrrArsnL8xQBQCzWeQg4Em3D2GyoywMWn5ssKJN3s6YFvuN8DwWZY",
  "key10": "63ArK6zFVfC2jSvT83mBLS3seszD1BPHccpLCdvjLoW4ohJUHJuLvnZmiwhnRfzPiGsLgyy1Hj4t77j88Aczyh3M",
  "key11": "47Tduhj2dJRJ3NM2GjB4LtF4uZ14Yb8h8ffXKRsjaSYQBZjxoSVVMnhVYhAqTARDuE7K3sA5abXyGVY3i69xQ8D5",
  "key12": "2VETjXKxJxar9ec4e4Uf88eBnbWUJjKqFCu9NTDMybpb2gQGnoXsKuatn4aB7eeqth2Xyk1x536LUmzogRpAer1N",
  "key13": "2co18Anzit2Rhn9LYE7ViDjy4KeU7cqTsgbnGK3eKtELGGSmeY3rj5V5RdYu5bvrwinFVtUGGgUbbCk3ZXsdmFQi",
  "key14": "51FgXbXCCsLnhFoPixWiV9BgZPcWXqxQoe6PbQjG9CeeNsA5EDrYrnKGXKjeJogY6Jm7tWuzYU4reVBK8kZJtH7G",
  "key15": "445sXg6fD5kPgQkCbMTMQZtT6dWUDZwP4Dr4CNAUrxsTwZPsbtsN1PmAhL5BVtUadFabMi78p5RtkdGZt6Szu2eK",
  "key16": "3EM2baWfPo8irAMzQof5vMGQ2eHWSDRhqJ6BSgALV899yrk6wBT6MMUyuPVfBaHoTPKWtq5gCGuH9ijPHYhExddS",
  "key17": "bdoXGgbQp2VoMZLKKZCRXw7rb8SZfPf2H5jqCXe5zAx7FgzginMkjt4m1Si3EESG78GPnekdTyMxHHUXU1BPVLg",
  "key18": "4tWVXVsqKQ7kqL1rpLLzt2r3JStnsmg9MX9PBj2e7ggcyYDXE75QZ9PaUaUfYBR12TzPzRMXd9zw1f9fRSXVsqLg",
  "key19": "37UPhzo3kHynVtuqH2PaDxRgn68Pj5d2h2kyYqw2P3fWxTKkfnDocfdBx1VAJgCoGVukCKaHgcJGoeRsw3vmk6zJ",
  "key20": "4z21sXDh8Kfio6qM4wR3exLpJD5BDabJyRnJZ8vRDsvfcF4gczYwnMsB4YXVVJgaT24QGsC9R7Fr5aguRT6JMxCC",
  "key21": "4ewQBfHnuR3Q4wZm17HGoFuWZAQpHSuRSrbyqssVUqJe6hNQumBv9HaMh7RTZt9xzQhW3dvXfWJXmGSnU1rqg1s4",
  "key22": "59QSTMk5CQyvQVsPLx45hmFPTbJuroNYd5Fc24Qyz3LGJdDiNZ5rx2RTPzsZZaze67YCP2CuiTBab2wtpazjMwy4",
  "key23": "2wKY2srGnCNoAx6GXdPdPC8SZyUxwSt6aVzTQ9frSH5d1ESx1XCoJksMQaVge7d8ECvFoGAE8e22hK6ZmJnHJZjD",
  "key24": "47iWHhgZUd8Gf6Fuk78FfU4jeNoqmgd7nZdxRCDbNgiuDcDseCXqLxDGrdHUuA9t7tcnr7u541dtaydMohi3ZsrN",
  "key25": "ts4kYJ619g4uh9UoWSA6T5jCZ9jH3a9nrU4LCTWi58v1LkhwGWvLb8YnXRDHnSpY2CamZswPg7qbVA5e8kY9ZaS",
  "key26": "5r5ku2RaS2hw2LH8vxikdsfEXHbdWQwRogvYkrsKbFXUjjB4krv7DhVon8xit9MTtLEmeSuWg8wqUKrTYQLC8ojt",
  "key27": "5Leo8MEraa6TL8cqfiQtgLGPHW1xiRHFRE26wjXxfN7MHdoVeEeEfUYAsDwYYunysZSiEezMHufDyRuyhvVtfNNf",
  "key28": "5PogwPFtwqBiKGCZhNFJPot24z2BcufjNdR3eiHdWvVDF9t9d9r61NYphxtjy6QCnYeo8oZYr6Gqen9LRNHTczSq",
  "key29": "3kvLnE66uLMGrEYyuAfmv5whQEKRi688g6dSfQWrJAHh23Xvs44A3ohQGuB1TVWSBJi19PUVayzV8SG4Zxqi86WT",
  "key30": "4qQEu1UuQdPazfD5N3pUAS2ZDesBDcjkzCtnjBka9rhx93nAFpUS9MjUr7YytTi7aFa9u2qZTSJX18f8gv6m6wo5",
  "key31": "3QAEYxgjSVq854APu2H184HKyQuMpFcA5N4w3mK8UzEchSisk6fWco4ZWMqA2TAmhhQkxG9E9nUbhvBxMtTmY6e3",
  "key32": "4i5Jg3KALGZZS79b3aaoTxXmUg4b8SQchqZ4nno2Tmhz1T19heGXooWVsPThK1VwpDhWpwiz7Vst27EA3yhp8RGj",
  "key33": "4V3amxG4cHnrTNM55zaCHn6tnScGm9BZCvLBsxkMfahGEzu161w2n4Q9bXRid1eQdwk6ubJJXiSymtaLn8JLJgvZ"
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
