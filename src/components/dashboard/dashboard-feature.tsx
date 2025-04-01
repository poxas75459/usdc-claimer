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
    "5Rk9SSqNskiccrY66akKuL2g9rKSBzFV854THQNBBub17MWiCvnbPpfjosqt59LvfWTmMygMaC1eUWRi5djKGNom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2go2c6r8J139sDdQgVrAHtJxjR9uHfvabMekE3uQ6FMyXLYti9zAU3L4Z7vNaJ8ZF1wf499pWWcQn7Px5kVnJP9z",
  "key1": "2JFpChY4PnhoYCqG4cgYxidRiC8PT6Fm3tLoTMwtsLiNaT9VJUp9mrEiKu7g3amxv7GM1FCixUDnmqyCzsmdQ5vy",
  "key2": "5R8YWM21TFwJrsecGPtfhPeZgibw3rpBjD5X85kkUhSYyqQq6ppNKkcSZHqaiyB1h6r4dgmxg2RQfVweLTagd2ei",
  "key3": "4m521ssm1exnoDmoFuhgZDHuyutcW6Xcyw3CYqepm1Zi6jrCCkduMqpgMxAghJw3g2wCW2nveYjXbjCXUXrqR2mw",
  "key4": "2kyDCBX68bbDZQPWsedGYYdkZrSEFtFCLjasevFw5VjfCRpQs4tdXEHRipmXd2Lrv3XHwLQgZy7vREuQjBVYwNm2",
  "key5": "H1n2MPA9hUYXops2MPmu8pTYHUpp8fWQGfSabx9hQV7nXVp1D7Bw2WK4DVzCvkaB1jbPJvpVLVNK15BQpkrfCEm",
  "key6": "5eeqgwzaHeuSs4mYSuhzGG1WKhBzX3vaQDRqWzb3P3sQFhT7AXmM8zxjLLbuTfreD7Zujw8guGPwKUwXeBBrgxx6",
  "key7": "5sip1pJ7s8BtBxqcv6QgykuMQtVsxomJSjpc7E5Xn27WCaqrHJs5MR3qjnDw1zsJcREvTJgcVMwRbmkUmDznfScT",
  "key8": "4S9zTR1LxPfzMZp91T9UrcvCe3YQ6xPYmLjf6od954z6Q4s2RW5Hhmn2YX6UrkVdrxuBPPhvcGi4Dq8CFNrSD9p5",
  "key9": "3N15bytBVJbUcGKPn1s7KxsJM1JPC61HYM4CrUWSBL2gpZoHN1hYd3aiSDNpoMN4sZDV1T5xAEqHrGWCJYsc6as7",
  "key10": "Nb7JDEZT4ogC3TwJ7fJ2BUnBSHwaDzxcvH4UUfmkG5a1rgmJNMYswXN5yn7bDbJGqZSpaHjJxUozkN6uSpjnyYS",
  "key11": "85QpkhBWTGknYTo77QwbwtVQ4quSN6eaoYEeNJGK2dsPezLDjNCWApDsiNxKEs2GVxo3HZUHGpXtibQ9x8v7Qc2",
  "key12": "3VpBU1yohgdQ3P1EExb4o6Eecxni6EfDyihpzwTEchHxnJZ97s8dRaJR3vQUh6XZL9S8Dbho5DJA8GEDdDRZeLbk",
  "key13": "5LqqMJYyFZ6snhN7yjidKh86DESJzzScqaCowbhN2A8hBt37EmLZ3JyXpBu2s44gRiL5uHfwungmKSwxpnccw6GF",
  "key14": "x34qz8mQrrMunz8f3kixhJdMrEH4ZiyHdmWXz4mCwFFrGrqaoV282r3Hk4L9SMXR5eZ6txazdWtKwqHk7TnXko1",
  "key15": "CXckKgRMk7wfPtnU8EDyEYc5tjWDWk8aysJNPa3hwV7i742iE1wDBihVSFQAcGLCHPfk12iKJ2UchREPT5x4cMr",
  "key16": "2V2GjQmAypFcDj84ZdaJreYjLZzBfoaiSgkMPnADNWeX5zePKoL6ojGtpKvfuRZzVCefFzexM8ZV43Ut4iCS6Feh",
  "key17": "669hQaLhcgskQqc2aGpGanGskMPC6jvYNr2raZeKez3WV2U7yNRT7MvqyULEZAGeuYBTSowpmSMhHQTpn9UD4dht",
  "key18": "ZwNLQwJdZ7BLsvUsXK9pC798awuAKJWsjrsBf41daDR2ojQBsiEdqchLrtYUf1ySYy3oMUCfyx7D4gGKFkcHdfH",
  "key19": "4GQXe99EiPjsXxDpUrLQiytXc1uP8e1uF1QhdVpneoR9pEPXWkHFXNHiZxqGE2k24N4k2bQZVxGYoqP6PaLdHJa2",
  "key20": "3ui8oGPFtuUrwk4yMxnrAaHw7iTcoEWtktuCKgy3W4MDSerfXzBt2tg9GAFtGvaXiviBbZpRJqoSiqj6Y5KjysPP",
  "key21": "2sqM2VNrhr9hfRwzWLQY1u6S6BzFXVoEM36Mnyeev7cLiSDwbtiN9j5SCejFt8mHx34SaF1bYduyEdb6xte2ivgD",
  "key22": "66irzS5wLC1GyXyXdmps2cKPZJqeBq5ZTsEGpk91cf9n6yVC5ZrdePGxkotBRfBi9pczxWAixHf8MvfCHpRQX4g7",
  "key23": "3nXT375ZWq91w6rQnma3NiWiM2BuQtbGAbxdwMRaEtUAKKSnK5tTHTmq1syE9Yy4Ds357QshWff2EWcRQd957Qyj",
  "key24": "2vabstEm6Xe1iStkyQoTdhxJ5mh8zMYVKMytHB6B7xi68HbvxZC3C1Nf7qxbWck9erqC8R9nXrnDz4Lcm1RUuEW8",
  "key25": "6S5vstpy58vihhAuxDvshk5sVoUMWBPd84RRRofVu5VYfNbi7j9yciLBwDxJxuBn9pzv927NGrS6ZWgP1kdtZyA",
  "key26": "5UWSBzKE5otNSZYNLKtKi1W1dHKLA7v9aNfcu3GxQvau4CQrUbeTVMQH4rJchTrJzfPCAtn3azYGaMDHb8XUENn3",
  "key27": "3j1s4Cxp1RFmXRxcCX6wuCDRNpYEyv5EWavDwpSt8cp9H6szFeC6P5P8UezRisJHTGm8gLhcQbjpBbQq9QM6jK6z",
  "key28": "4F1DJMbJ5BbUg4UW1xLm32nQ73U5LgF6PRgQyw8m93on49S667DPDBbTUqdFQRZs5jNqbBbi9tnxH4znMCYYczVz",
  "key29": "5AFCfbx5iCMpWer4D4RrnKuuc2t5gseQTFxNfqvtZu85EtyYybVmLCU5nkjuXtoJk3wq5Lk2wHGym8pGtbVzKU8Z",
  "key30": "559NYjStpNRXSHxbsM8C2Ha2MY5z6irancxT6Q5wMWGBnHCLQxuoeCifKBhLAa2uTuDoYrtinFSG1DcQfJ4knGMc",
  "key31": "4hsQdK78vYM7M4wimJRytCEC33PgdC63sMMJM9T2Vh33MqA4YLoDXYCR6XS6bVQtyPPdpCqQVpKk8dPsE233J6u3",
  "key32": "2cyFpUuEQTuaAGzN7PXXB34RTd7yj83nzewFoHRFFkGNJvPh1456AQkwuRPR6qMiosgDbhjsqPiwXoUSxjL5W6T8",
  "key33": "57czock6KJm4fWfAMKwqtZVHokKWKmf3Jew1XVkzbGW4w9ETWn3rejQikMPGTPTYYzxJQVLx8dm1hTdvPZR6cEem",
  "key34": "5fhfUH2VFyi4yckNoNyQmdJdHBYRoW2qD7BTa6sQ2iXrHQUWztLHgnpvHU4JdY1BBVRoScL2rxyaRyvYB8cJcV4c",
  "key35": "2jbZ4jczo1tir8UQkAWSZzbnNzTnkyS3Asy7vJorkGaprSKoR4EM7aS1Ujui6DiweFbNKbPPEA5q7Pi3bHSYiqu8",
  "key36": "4v2eN9mDeamf7xYVk2aZR3BQSizi8rXCSmRMvQzgPdk6D5T7WZbPSGdstsrRCpgupgYdDhBpir7smGsfhXCvwRRo",
  "key37": "4gdZ38Tm4bjvnStTr9KN2n8Y8NWPv6yBUp7buyJFBpkvWAx1Ve4ebii2CHdZxvhyvtQRii2Fn7r4HeZiK177jRH3",
  "key38": "5nRTW3Lgf1Zw2x7Sq9wccB2ocGXU3Si7PL5kT5obVSeME2zxARvAEjpyWjN1UGZNeiuTXKFbdMGcXjyErhvYQS9d",
  "key39": "4oRCadX6FsaHUwGFkdhm8NvY3qCBVEuYF3o6BgPCvAYuH4B5B1Cc6kEXpGZL8N3oR782F2ZByKoxHzUjznbbNV6M",
  "key40": "DdX2vj1FyewZDGVP9Nhw5iM7sgmZus6Dv7FGTVaFYMgArL7TUJf2ccwWfo2vUDhJKvfTM4xzeQvkkkNWUNEK22R",
  "key41": "43oqCr6kw3VdPL5GxCZfBDkyTyW882By8aYjGtm4NLpeBWYLVhVKcv9AGpunubi1wuRvd1BqUYGdiWU8QPCGuJi7",
  "key42": "3orpvrEgjNNRmTobk17dmvpzEs2W789JaoHFYNXnqwbUBmTXwCZCVsf8ZDfbQFjcAYCyp4KKEHAkmi8rWmD8eXpD",
  "key43": "4zwZHpaH5tzqdoET5RbrV8rFTnV66gNtrZrnqLDiXHQGyYZwtHpUPG2PrXozUAdNjiy5CMUvZRfri2ybrnnhEcHm",
  "key44": "2P4xjFqzdinaHop6jHsUUJ4C4pRyxZbETVskoB8tyYQwLANhwjDYfjYnzQnKhm4he3SPxua7X9q9KeWWq2qiTNzW",
  "key45": "3sUfqiUuif7TfTpmqRP5RoYSweKnoQuPZZ3AvEBbRjobRsV8UyKV1YA1DrXnNeS8wLmiRZpRSXDsqrDH5VDT9hB",
  "key46": "4fuHqpg2PsMNNmbK8wvbqtHmkrTdP3AXtU5FqDQxZ7MQ1ZWjUBVpoRvhzJE7FRTFA3iduBLkm79r1kTNwmEd3Soc",
  "key47": "2WJzLD1uzmFTRJCj3anEdLAJu2PFkHQoYZ5NAvcbFq13qGodKSctUpZibE9WYKGLKJmXAt1LFJepwzGZWojjoFXa"
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
