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
    "3vRdzfgfNbg4ajB3XwL9vVc39NE5ViZErus6CN4STUe2Goid3SQQxE2tcZP7B4Mreyo4mNMMaQDwnQGffcDo5ENn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DHRsVZZrDdf9pBBQZnfLAwtjnfRGoKAigZZMmBnbj4X36bvEzwq11q7ihSZY2YaRJVvajoTL3MULeRzfCgLk26U",
  "key1": "4E1Vfxi4zcaFzaR5boPGNghXyDUW3WBe6sFtt1UdgoocBDAzAguas2cdc5YM4ggmDgcq6mM84H8r2jMMcHc6PkfY",
  "key2": "1u7rzg1mey2o8XmhaBZU2nrbEJvW2EGCMdGNcRM2udtZdmdPdJoopmXrHMuLF3VedTuXJrJ16phxzBuAmvKf1X",
  "key3": "55WSvaoMGZXBqFnJXCFg3qNYY6VbisQZQVTNJ34nowV3iifuPDsmw3CMBztU9ZEkYwzDZ1AaK7wuf6ZvUbYj6BR3",
  "key4": "32MR3hbmsP75SqwgYGUZ13prVCnB6u2L8Hff8mCYCKrNFBXH2WbAWquxaytZqFydJ2U9vxyHTBQpR14SvkeLBYtq",
  "key5": "mMs4meTEjiSSxhY1hwG3Vfseo9Ssz3U2ETfN8Ggz6sX2xR6gXESKUrefm6HKCeJEkkspooyYNWwtuo3SRcJbXwZ",
  "key6": "XKkvZciLepG348SQjeN6XbZH8eLbupssfmqsfUUoRweznAzvDhrBjd7nijSvbPfZbqtg5CbZL18NMenbrZfJ5Z9",
  "key7": "62rKHsAthJLQsm8eLqGQuCbLV4jypuMJYmGrHX2aaCQDcn4BHvnoUup9EjuU3k56bYe99X5B5HjXZ1Pthh2g9QRd",
  "key8": "5EmTSNZxwngXLvoC2xSzMypzDn1MgXK6oHwFtw785MxeowBz32GDdr5hT9D6aAyQ2KxK7heRadRyJeiNmoue5yEG",
  "key9": "5N3KYsdMrk7CjCYsV4rywY2qr4ZxqJnNaW8rZPDcpeoPxAThpw19QKmC9vfyeJpCDfoeM3z9ao91Ex1SHbAGLekP",
  "key10": "3sEmvX5dnESz46UscKbZsDvQa3AhUoy5ENP4zHvFxQnJv2yD8yHEV4RZSdkSidwAqPkX14jfPSWhbhLCV88k5kRi",
  "key11": "2X9XgupVroaP4jmqY6QZf4h7EB6oZo84ZRmGRmC2hpPVnDJJW2JUKr4nMLyMjpifFHnzHbodEiBfq2t6DWzTwYqp",
  "key12": "5nUXnDPoJhJnGicbFiFvD2LssSaV46NZtBpPjyMreP6ZeCw79yuZkQNSjex6iowqnaU5NfB8YYXXrvELW1YJLCV6",
  "key13": "5EfEsYP4DFW6p5vPBzKVnMBKFJNa2CW3JwnevjcMwdw18YdySJDFWa94QhD9KKVAb2GbXRfJmYnuZgtXaug9vrzP",
  "key14": "4BSkSj21uf898B3tKJnxCU4eEWCA7WBBE7G98vt7VhLNmmx4JPuKPbiFefeJ21KH33xEsZ4ui6cj3X8LDkRukyZ2",
  "key15": "5PAhT6dyRtxbUcDqCiiP1ACtitmbqvQred3oWnBvx2x5PeWmpwDXBgB2MG6xFVmHJVKrnqkHz9VGJwiZK4Qr877a",
  "key16": "35CedFXixqW2EDFjop4bGBr5ba7DBD93Sgv6vRXupsaYGH8GBaboeUTspBvv5YpBCWiRJUeANxqFGKmD19bniqK2",
  "key17": "3SwxT6vAxbBVAk2mqd2HGPqEYWCgRdjQwub6Y13rEcZTBqJRztuNsFmXrTQQ14csNNJ9jPkm3gqCLUKLJ3KJKhXf",
  "key18": "5KBJbALGL7vSPJijvVovogqwyHQnux1YXvPLkNVg5coyJe9aS4gzX34YHDYM1scUHMyLCbm4ZfRNvSGR35EXUMLm",
  "key19": "5kYSpRzZb3EB6sZBsbuG1FtEr51FoEUinMSQbE9PU4w96Bp8wR4injEKynJ2mNLMuEqt8UzCfDpPC4UW3Yg5taDL",
  "key20": "4HSumjTbgSYBfqVm5uqAMk6VcMUs4J9d9CkU2oY8C5JQfjbwYkR1QvrZdcdAqsL5Y6yXUoJ9oifAdsHNCsXYkc86",
  "key21": "4YNuwTFoiDgVFHYePpRB3m7t5h2Uext1VutqFMFZMoqxUeQyz8fH32hUpXsTuw2xtuDASavLvUKWgiK1p5ZCM1bd",
  "key22": "3cRjFWbQxzoCtXYHPc98h4DCT5mw5ntZFUavahbi9UZYT67vMuuzjkehaqFRqbJND1CLXX9DhfsxRSYbdm4SN3cX",
  "key23": "2kMVcJNq2Cdd5siiGJyekvjUek1Mdop569Z3RkTQu2antGSyz9hkhLaZmLD9q5A9SdfibkGd6rkar2fcJCjYEkni",
  "key24": "2LeGXx5E5rDikWWMDunCJm51vupDFQhJNK17DKiptheZsAE9XdNWav394iGsB6HN1AgyYqpY9z3QKFA9zamsViZX",
  "key25": "Sk9DWvJ4Ro5o5P3EBHFoTiQ7t8G9MEHDmu6vbU2YGSG4W7jJyDxDWquTxC2UHmxpqdnVWMmQxjNvH28zU1ZGBVB",
  "key26": "5n37EkyPQFZNXAMAY7HeYwFN4WovPaSaco8vagcpyPLgQFP9Z9WFbenMJ3nbKhu1pAgZCmBzc9nJh4K8foBnZ8XT",
  "key27": "3G6TiwWViUdJJATqH9upGVRrE8mBoH1CDKJaGd54jEKELGZebNM1brT4MxQvdhkUkFj28pAP5hgCsPwFv5BrH9rZ",
  "key28": "4AnrtNwyghfffEhBvZLwUrKLQmfFpXVzwuTLpvvxAiCm3G2o1yrM9TVohXBZGPekjHouKn8bZvNiqTWJMkXnofHF",
  "key29": "iwMNvX65GZrPZ9jRa7pppfHtbjqU49uPio1dnFdvJYKuzNdJD5vZjtTCMZPwYRSuecisdWvGeJgn5ph1PTT9YPH",
  "key30": "4ze4oTpYd7W5JpYrEZ1NRGbpysHsVPSFdQsi6sJo8WBHtwyaDZBQ349QT1MdgxSAf1koG2vg83XN7V26o8J73u8N",
  "key31": "4ViEBAj7sAPxyg9ECqGGRMDWr7ZmxKny6SzdzQMR7d8LEAKaSRqfpsQRvZPtMi3BfqYksaksUyAcuKEyJy4J78oP",
  "key32": "4qhsqyWVxQmejfs2QSFGsiBmdakqHhA62dxCvdyeWfT52FdcReYeiYJdUyTt3vwBdw4qMnZEn4Znp63KAiRvdczt",
  "key33": "5h1U2158VyzVH8omghbMeXLwaBvtFLxpTX2UvqCs5hapkUDXbCsQhBsMTXmiWau3tQ1NskQBru82rWbcEb6VVmUb",
  "key34": "XdmKCSXJe1SQf3SDFQmRGwqhET6fATpLTk7uAgJDtuxLXs2hDyARYLFTp6tqTWkfEBfokuDkywrfp8JRMA1729x",
  "key35": "3oo2LGartUJFmiTUnYcXyEg1rHqtPwjFP3rX31fxpUD3Ts9mPN1YEJZw7BWaGQFWxLS7ucoiRDzZuikdexdY6vX4",
  "key36": "4n8MqXC2QUUgwtErVUizX27bNiv14fMVKCKRNimPs8aM1B4GgvPu2arteTNeW6LRtCQonuN8oTQEbuDX4j3Xtn8C",
  "key37": "4aYFto7eJqc8Y8DxYrTcbqieyPAAXVTXsCe9x9gZTUT4yDF2Ce4vF4fTy6ja3JFqsTJJSMmbqmF1gd6Hoy14XnY1",
  "key38": "3XBa6DGsnK7hXF9Ng8VF6xTapNFUEc6mVDgBdjUdu1X3nXY8A5vjsipCwEy9WdwgnhwswAy9aGa4rBKiuViqtVdn",
  "key39": "4GjRXKauWtxkG2mt8uufmUECT9FWymJhdoLMYiST1NfN6r6md6c4VCZjimR1RdH1e7eAT1RYA8sWUTrSqKHKzbYg",
  "key40": "2S5H5vkKxhhyBFWuHD9ScfeAwsM3tguGLddjZ1ngyehdfTEUbNS9Veeme7ph6fHpCaUgrNtxdicKVKaSkixJHGtz",
  "key41": "2vUho6EDxXMDDd694uesh326hdwNe29xbz74NtpugiFf8j3nhgoNPh3sZpmwSE4pRBuXTFh9npcS5Z8N766f82o1",
  "key42": "3tHT7VaoWf9JEbEwT1zfAkUMqqSixSsrS38W4LVpCg1gdG2cB3umdrLf4RAyAJFr451RFmr2NJnBdxAE7AbkBZts"
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
