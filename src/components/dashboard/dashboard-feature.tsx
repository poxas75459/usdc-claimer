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
    "4VQAM5rch2mjhctTMK66RAaqE2efzpZeBFiRytEawRdiBCMR8iHX7p3Nk9tH5AwfZ1SRp61vass2QqkGpa3QdiA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4STwMWkYt5PAWJJpC7r8g5zMvxyGnNQM7aWNsk7NLf5cbYy1shww7j4WVSMByBbmeTRvHbYGthz4FBdpmLQvpN4E",
  "key1": "5N3vQc6qRFCsqqJDVdWy1ifJi4ERJfvFmxQh6jSwYrGAHqyKjDS37PnBVkBFLbbmZvuqe2eNwHz1fENRaqbjc458",
  "key2": "3BjVvZGuq3L91D5YWNjr3mmFfeMmwEmRjmmd387AygyReppeit46PNWyt1vF1NfztDUSmDoTyeG1X1fMPZUA9Zsu",
  "key3": "5ZNnoKUVRUx9k31hD24bBfZMHriFYhEZifyjv6gMUKiJSHzQnnQC4iWk3cpW27qxewGDeyNQaeya1ZvcRbbvSdjC",
  "key4": "2Ugv3bLkmf42RKLuVURQP3SUB4xG9bh349TPhe8bvr6E9vRAqYrjuzSrWum2HVee5FQzZp5QpBsyyquF98n69rG7",
  "key5": "2pHHNrg9K1psojEnedQHSTWnqZgneN87ecz7Zq98qJ9qyir2yLNWD7YtyqYWnJ4xXfKfqVApwcXf4xSnfqKCxWnG",
  "key6": "5Cq5W5wyyiqS4RGB7Ddo3M1sP6YfCqiEFJghaAT59U8MWvgca1ZRd9iAgz1bMWdyjntiY5Hq2UwqJ4Vz5ENWrSga",
  "key7": "63z1QrPpiCLXe7JwQivmnBM2V1XXubcjPSAXSjY8udqbFYsj4arKMDieeWMPgaJe9TLej1iHtPnm3i7DAhBWz29k",
  "key8": "5YVAxJeZW51yvZGoqHQYXStP4aEjDvxzrZbiqJtVcuA2q2L9vnxAPqsJ98Uuoaq4WvBrVTfAQ3dHMGfPsDqV8Qfu",
  "key9": "4EiS5yzuNiw6oSRzLkMhnrQKBjudsWJn5PWoR1Nkw2unLuaFik6xeJYCR21dEpVtopN3Y1AdxitR8qERR1qp1Yp2",
  "key10": "4YJSyit6zgAqoMAvdZMTA1BQJSeAWdGghTfqcE5H732zPSVym7KTkTN2gSu6Hhsh1Bw7zaZMC1NRVhHr4Q5EZLds",
  "key11": "5Zb96VtkYXd4eq7fTk6Xq9RZs3KnL2udMkocEJVJ5nGaNToJ9BZ3aStQZZSy4nn8nZTVEZRjMS4Xt8DFi5bEA8rL",
  "key12": "22wwcrRioMeNQ7z6s1fQY9cxh4VgzwohitZAVgaTMtX4mPj7oWU87wNeuyEZwjG8XChR8cFskVLsVuDtAUS6xL8Z",
  "key13": "2y4tUjyvHeXoCAWdpMh9TKB9XZBkXcqYpmBvbKCccjnZbvMkjzRokPDsfcr2w5eTJSLSGKkpG5CLGPVKiR5fZbeZ",
  "key14": "271VSpUyyBdiZzBogJ8GXBdWkA7yMymdMbcWfDj6MssG7Ms75MKmM3tDbTtP2CBDc4JrzbnLhiVPGuXzFa6R9haR",
  "key15": "3s91syRwXAuHUxixjTQ8GNmaN39xzxVx9rSkN5q8JrJ84NNjvG7jpMbbGavQV7ShFVJyWhJPJdyP8rVKD9ynrV1d",
  "key16": "nDeiXnobZVTmwEHjdpWyTgNZQTbcRdButG2K5FxV37JEWTztBv6Y7pG9wzYgG8vXZpxf1CYjC88Sd58mnXeujWP",
  "key17": "4dFTp8WcLvdaJ6R3AYqpNWYANTvyUjHWEqqXu2SLAWKr17ZS6hSGEe6xSUSf36mpVdnnwWdwNyAj4spWsWf9cSWM",
  "key18": "5rrEWZqHfCpmyAPJ7NArDgH5CyqxCGA3ThiaLX2NDVaao9y9SimmHgUUfYmw3XVX2iDyQm2kEshTQhc8TFWbCSdM",
  "key19": "7tqJZkXd6YCxdR4QEz5rYKpxaCLU7HnTTuQUep7HXisD8yCHQQjgCqHdSRzCV6VM6pNQdUXY5fLBCoQFW2mTuKw",
  "key20": "mQfZfVShWFwqCbNdyTJed9p4Xn2zqB4aLF6dehXaz6TgVCctMpvoYYh4u1GKSvAmRU3mEb1u8eVo73Wya9MWgSn",
  "key21": "5P6fR11f8aM31ocsVna6TsAfMrzNpXL9inEwL4PvmQcFVXS9wdYtJS6NLUevBkL9DYXHkyFB4C85hpS9VQULnu5t",
  "key22": "MH37FZzrRedFbqM6u9VcwcaAnsWP8ppn7otzy1tf7fP9xyAr73ifs2kZskN2LoD1DEQ7xF2coG6b5z9C8ZnuiGq",
  "key23": "48BwskNMKpLBmHsfdfq9xsF9ew7GowpnCwR4efPVHRjHQZomt5xpwYoseLwv9q5bVn7xU8hMpTxHTJ8qjxUsuF6c",
  "key24": "5mLMtvq1MdYPqQFLnu8c3KEknQugF3kkSsUg7HzcgSHH6XipzzyhF1nKWMQYTaahH4fDi3gdH2RY7GrhhH1xectA",
  "key25": "BCdnQJVDPks9TWDkJWcmpJGz9oUM1YWf5tAbt5pMsr9vL7wiHc3qAzUWkkMsTcJP6Ei2wXJGhnPNTmXQrgsLtcM",
  "key26": "uUUXbJ1GGfsPNyR9UFZzjW7mVoG16TigHh3MMEK4JBPFbaqSuBZtUnT33et8cqpkNWcDEAa23pfTB8A7RcwLhrD",
  "key27": "5HR5xwSNYJMdPrrcvFFx2WZ1M4TQrznQLZYunGudr3irAwbQfjdbUoCRBpXVky6SYQxeUSApg9r8tYsqJfCpjYmX",
  "key28": "jDBLN2qLDsyp5VNKkMiAppgg8ZfvBtZ6aLLFvcsh3iXgoADoMAWswWqtATvep49CnSvjuiE1Bc2WozZxb7TCjaK",
  "key29": "4xXVsEy5PemJ2PQLTqy3kR9UhmbXybHzdw5SAFAfh4ATohhiTB66vqmCUic4W66ZEcz18MfHLCdzNsQpJwghnEia",
  "key30": "65mqkUQrAgu8qKr4bGu6vnEx3d6RSpt9a6LtNGuUV8MEjMyEz54YYzNdDUtdfumXG1GarTGXHb3Qa2pHswHqquGY",
  "key31": "6kzFEhWyuMrkS3oPB9c5VMpxxyqXaux4D4WBfPrSidgs5paSPjByiaS1QZYpuu9qZhRrXFcy2yf8PP71PpZqY6f",
  "key32": "3SD2JzQp6n4j6o8pSnW91kPiCP93f1W3aGgFCRZG3xniaSAqBcfbcE4VcMgAw299akirdmPnTEwAFKNFSmdCH5EX",
  "key33": "5AHecRu1kJcqBgvvHTNrCBP2R9EUomX4tBXELYsDYbAt8aCmVcprE7gJHrjFMsVHaPdjKtKFK1GKZfEfvvPCUdUB",
  "key34": "2XE7JwUwMBnjrsjc6i9S6b997dnmhY9ifyyzFD7VcEjYaBjJNUo8RuXczH2pn4dxCCVwo3KVkekppZjFPFwToWbW",
  "key35": "2C9m1ZDzeFvjzzq5uHKRv2z5LnSVnyZe5aMkgxo6gimgSGy4wPoH69RUfKmx7XDnNTpNMeidGs1AqQySKhJtLbDf",
  "key36": "q6S5Yxg5GryckvqTA2pnxAPjkkgMFg6JHUeNZG8UURFpEEYHgir3G6BLLz4WWHLuLB2eCfVztxVdA9BrLXF8QaC",
  "key37": "47HaccAmGx5iv7BGUb22x5sjJdVhEJA9Le7A3HePLKWdSTUdMbZYmEDPcHAE24Y2DnMrh5sy5EHhHTGjeaFDdnJq",
  "key38": "3ujAFUUuPnHzk5hGXnz8JwAyzB19WNvsydSvjGPVuxBtYzuYxxeb9ttf16wgf1NQasuQ9F6TZLRTFhpZGcBWGxRB",
  "key39": "2XQbxLZhqTHnLwxSRJwksoAJND8f6NZ2mZuUYtG4V2DzH3MeR4ppddhYr6gbGueEeTUZQb5BBu932SiKooHHxQc",
  "key40": "4Xh3oBKiTSsGVx6fUcsx6yZLTAyPUWcb6pTfbipMZytPuGEYGokh7SECePN2AZe14yPjYZxNSE6EXELffJ5MNVsV",
  "key41": "5PcrN99WjHZ9nowCgrojwEuAqYkiLxqBri2VaeE8or8TLNALxLx7k37davefUbmsayyHqZXcX1yqF65TZcYYcmwh",
  "key42": "5He6BYCKvqVGnVaJH54hyEHMqkSL9kxG3kCjgkMu2NUvpao1Zg4m8j6VD3XWFpekqHuczJGcnNPP27CnwSHRtc2w",
  "key43": "2zEwabABWB2YUR95e4FwyMiyRsLyNvH81pXQQtvrx4Lr5Fd5xKeFtia2QDVCzVA2MiZyFtfimD4VRREUXtjobgpN",
  "key44": "3xCtFBf3dRwbZoTRNLxGFNp7ks7Yduv2997SFeB87ezvpcYvEimGGUBDoPtLHn2sdjBb3zTiCVzR4Y5je2T2qXcj"
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
