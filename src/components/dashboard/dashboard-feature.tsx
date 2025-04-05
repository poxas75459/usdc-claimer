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
    "4ye3iRanmYUiU5bGS2NLn6FTB5NwKj9wwL5Tuk1uhXZvTK4Lfs9zufQYga2KyFFBzmDdg7xt5ia61UyxFdyvsxxb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AP8YC6xGtHh7687f4MDfgoP7fRZ1zzV8kLdXyVnpGdmQ2FrwB8oci8abdqaACQLqAzWvVaceXEibYqs4MU8D7hF",
  "key1": "Ys8Q85m9zPMPVZF2f1VigfJmZLZLrv2GZXQPHJcfEPZrLVFFwnKZz7UbEbEfJFZ3PFt9ZBNZfnBvNbYgj4dSJgU",
  "key2": "3R6peoGL3vA8wDLWbg9kvv7XbBvhPn5uc3CZHzYY1QvnFU8bCxWhaqieaVw1exb2qrtgRP7qqP1q1H56Syy7UUGH",
  "key3": "53bNMGJcarJZNAh3eiozuUzEUTG8M2dVE7vstb4rS1XmhnNVsAZweYAxZVdAXcr8QFbXBJVgMTnmykbiZPonViRX",
  "key4": "KbRSEwWZHN3v8UdTNyJ1AyQ6yuRAFQvj2bJMb8tz8Mgrq7DUH9JXpUTG2XMPqQdK7fKdqWKdnVM6ezdGXJfEs58",
  "key5": "2FCrU2EA2Vw4gfNAsxztCB6Pd8B6SnzmNbN3o8W4aYeFh7kGjWA8emdgddbHg6cnjy84CYGmVdjRcNP5YD2HSron",
  "key6": "3vwZiRMEu2wmsZsm1SFXrofKBgGkNcB8DQaKVF7Ej9ePho2FuHSjodpruowHxMERGK3iAPuKxXoJ5qmC3X8cTqjG",
  "key7": "27XbHqmd6sDhsrTuYMK28SuG1bPAuTmimYDRoKNY5eiJVoVYU9U9eb3ir1ctD2ySTiTxHmi8f8XKNFfYWLnUDRrM",
  "key8": "54oL7w66LQdNgKrLuKaBW3FTW4FksixYhH4j8Tvou3PpqMYkzeKoSmCp8SpvBHT2QS5TfgoXTe3BWVCZCx7GyJBM",
  "key9": "uKar6duKCLATzEZgBbTHdojUvqC2bDbv8UTg66HzEXQntJqy19ycmgvtysAgse5XarD2HgZhqzPCq4535twccPA",
  "key10": "552SHkxCfCebGL8WGhGTQ7NMcYyJWCdiFfW2EY8rsCXGcwBvy43ojE9ancacum5jD7aZhwySu51tBfMb1qEzwcxj",
  "key11": "jQosZU8hfHW7dB6C1cWvmgYTf3bT4cQUYoio4Rc5AvMYgn9BF9jY5viX7pX1r9SAvutpRgxy7kyQCmV572ifYrv",
  "key12": "2keWioCTFNvrFDvyJp3jhL45MHr3M97NbbVhVczu4MCyyyBmKPssBEb6bMYgpauJw8PpAGENiitxMHahQCR9XN78",
  "key13": "3SNJQ1jkv2N9KFuxMETsNjc3Xv6Crbph7KKErZ4R4hYk1y6NzLEMYQqBT5ysmAJStC3iGehcSKRAR8g3dQPhZpgx",
  "key14": "2sTt2z7S33QjUiTrnNrNzheSi55AvnSdXCsdcZaccxC2V3cvBQmiWNrAxMA7uzUrvNoXvn3Wy8FfnctmGAsWipKp",
  "key15": "3EBE1aQXs2sBCpXRL8C3zYRdL3r1JxGr8DYeBFXY2HHMBdB9huZicZxo3R8vnentsgRxqFnFcrARYKX2ixnjQn77",
  "key16": "2pEBSdm2zSA5hCHGbc9gkv5HK3pPexGoXdKXjaMQhQuRMLyCV9ERjwpZZkiTwvuJh4a2ZvhxzYDZwJcAfTM1ndgb",
  "key17": "2aFYunE1BDaSAmGTVbyZAfXf8quY2cyu3Ys2fb6uiZNkoTqR5jBUEiokbPEbm21rcUbCGANYwiJ25PPcU6A5teMG",
  "key18": "2iVPsXYe6iggeM1aGUfT1mHot5oPLSZ5ekdTuvgqk5s22vugMuZLNs2f9LUdGG5FmWKi7dEEjXvTBfzPZ6qdmcJ4",
  "key19": "3521E3zYazE2Wb5EMKDoVF5bAeRjqZU222usSamaW4PXa5AzKYqjDBm1mFgv3dvKg14Eyw26xz6uUMXLEqwdSeTa",
  "key20": "3rKNEaHVcmuVc5TomrbZ2iDJcfYK6kdwwkjxtRTfb8P8rtqnv8z69pgD8khDVFfToro5KVh4dz5L3XoPex8GY2gM",
  "key21": "HYKJvdAA4A7q9Qv6iM9BUVUmYKxDqgcQcvBACrgAneb5qTJbg2ARxYdPPaaxnpCatMZBfFyuJt7bJ9TGSZ9D6Fv",
  "key22": "2qbZUjid7v8kD8EaTFPa9CLYJ2AiTr14QB4kxWsDh9Uk23pssCfh2Ny1e7xpQeuCNNr9G2FctnafwKq2htbA9SHM",
  "key23": "21vDeHmLgfZ7vH4HdLo22bHCPUKfLZdjiLYvCApX4FxZf6LUAt3G59amVcHUDnnEU2926HWsXwAXYqcQx3mVtSgk",
  "key24": "4h9be8rjrGR9FNd389nYXV8iw5RE7RqkSv9JDjHhh1pig8zCMTPwr2hGqWV5jj1Bce72TDBbiD1Dzf2GGUB24Cf8",
  "key25": "3M29Hv9BkGL32DDCSMwejNutSUS8JWL3L7x8SHtL7ny5ke5rip6HKpxnaWb9J344WW1utydESH6tfRK97srP5Jnb",
  "key26": "22dT5wxJ9CFxp9ZZRFpj8a6Ewiov8LmU93x1xyU57mfqmYuNPnFPvEyaHQqDe6bU6UQkwqWywMwuAdxDDU16igJq",
  "key27": "5K3c3nwWHM1X2S7P3dgGuUqjihzMeanVomsNXaUayXUP9DV26fMJ4NLRmtVxkD8C7cJZMCaXt54rSmoGL7ACNHGv",
  "key28": "41S23yjAcwJrTssUXePf3bPEiFEDU1trGEEJ5WbVHL2hDgNV6VmYiaTDTwR1WU2rKAPpdA2wZwwrYTy85AiSCUhT",
  "key29": "3P36yQRiz4oHeoUVkpi5sGM45jx4GZo2hwL6vNf81etWC9YRrz7bbg5i1ZyJ7bnM97N3YT8WS4cLrz6FuRYaMnun",
  "key30": "3ummVatKWyVggW163BRqeuU9CGUB16CF6sm6V9wNFoofSgHY2kuRc53BPdcZWVAL4AWYPsu5ydNRgeFYzEwasTLB",
  "key31": "MUohX2ogMuzJ7S1uhXHVqedxQtNMh7tHLsyt1ZSZt7JKg5J9owXJjFQBo8vzBAabAhcAoHtHW1UzMQPGBueshQu",
  "key32": "4UV9ay7b78PhAzy1GPxdQm3MKpecjbDd6sN4Rt3LmSfoFYoiAqgGN3H53qLU3L1PmneA1PHdt6w821YpoG1UieFz",
  "key33": "tVipThMfHNMJquW4kymFRn5r6dnwcfh1JYaNAeAZDD781QNezdC8ArkpcNngLbtrTZKosXPADzJSEfHf2MnruGj",
  "key34": "3YqK1nuhZBz5u5kyRUb1XkwwYDKo5o4dHT8kwWvPHn7Mkw4WQscfyR3co7Dvcfmc8pDPWH911GVCE66gadY3Gc6v",
  "key35": "4B6So8phwtjg7A8vHFUJMP4EEp2tpFoLwGkLSyhPDzf7SBzvFnfgWwx6ViWb69gjZx9DfptsCsE4hqapKcQAme4z",
  "key36": "478g7x57Bth1qeNCm8f9RBGoX4QthV9Vwn8LCAU4nvYaN7aAmzaVNYZXaJwnrQBwqaJGrbWmNeCoryBxYNNj3xTz",
  "key37": "5PvkJT5mUZxQjnXygTjWF7udNGSDp5hhAwCjw1kFPgc1XxASRvR8zKrdnWnJTA3JGdMP5ChDRjYLFWrsCtagSYhK",
  "key38": "475bkkjKmiddDi9LSLCJVWoDmgqXsc3LzASpavUpUeh9CuTLQhqzodAyznmPPB5XY1Jjz5nf5eH4nYJZpu17sLWN",
  "key39": "5UivRH5V2w2egvh1nQmmvRXEi7v4ec8a5eA3sJzLPBcDwQK5ero8mTvadYDjEijFPpNFZnATNCV9HzTWbAGiACJY",
  "key40": "HywuVa64Sz4a9KkJNqN67YYAqgmkcZwUDhZ1hgcAoHvmneTV7MyJwohDLdvhfny5DJkoM4PuH6amUqXhb7xqtmw"
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
