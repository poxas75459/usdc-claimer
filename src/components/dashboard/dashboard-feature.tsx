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
    "5RU8LN6CrgN73w1JyhUEPiWTW2d3g1ttzEKJJ3K6ruXwutwdiuxK8QKLY7qLuwVhfZsJMjj6FDmBcmYYXKscb2Wm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DxW8WcsMQQuVJtdjYTKUWQWku4YiAxmnK5x6jcSPTqCAxTo29HoJgLBp87EyVWEruGXjRe4zDqxJwSTnabE5XF2",
  "key1": "4ZPbT64WhN9ppNo3gG4UMsoMe7hh7G4WyaLWErSSRgU6fmVACrwKakmhMKpt6LM1Pt3ABTEa7HKRK2gGquPcjPJA",
  "key2": "4fyKxb6fZgGsMRjqH1DRhC686BPVA1bdwvBsFgsVZVLoAzNF9g7BMTnNxDSceynBo8Ry8KQPEJaG7KuBuxnP97cm",
  "key3": "31ud9sYSTgdyx1wGNzRLUts5hXb1LuVTxGMit11Uu8sTNbETLM6Z63UNVA4U4L7Lae1XtvgHwFmsPyNuB4cmpfe5",
  "key4": "5q9HDHVrStuP3pgvkWG2XyySr5gMCt5hFmua2Rogp3vPAvrSF2dNaPZoCiRyJjgWiJzYyDqDgXNTsGbp3qeWt8Y5",
  "key5": "2u4friKSH7z2487qgNye7gw5FaqSQDSZ8bkrzqcmvvHWN35pgkfEPKqq1ktxqcxBz69wTTGmuk8mMPgPp7wWu6n7",
  "key6": "4p3zB6jKDCZJrhpHSoWZnVyyEECv2eYKfJExVTGvaFAb6pzVusvqvwk5axHUDAdoNCcTaivzKh4gjpNRADAZRwCD",
  "key7": "2KVo5nxh6qEseSNFfygwY9fQYjUDAP5a82Zb4BdahcX4xBmanKjHVBLn3GZm8VDGvg73EspPgfQrNGaEEAeQTcs6",
  "key8": "w752xCiDQZCcSaean92a4276McXmMC5x7PmY4DhoEY8LMtqWEmuz2wvaxe9rKWu6HkpLeEUZUJ9KgaWTEE326aW",
  "key9": "45Ai7LVaAJF1aTPb8qBNmCTKp9ixVgp3eLBKNmzjRLv6248sNvMWFrqz7GZTFkmbJPJDXZJWXifXZZ2LWL5yPLrH",
  "key10": "W2wk8XwDbN79yntB15xruQ9k4TonKbasHTAuNKY5a4xP4vKWiTu8jRSQfFFukoqz1GDzc5FHYDZSjhjw1dXgN4c",
  "key11": "3zHthMaLBFvEudinF8FFEpmosjAMSzDFQzpLJQsVzMJP7kSyaDazWSQo15jexFc5bx7GLxEprzPzcaiRmzYUcEZK",
  "key12": "58K7pafu6szzPudS9azTgBmZk7GkHijAHFN5JayJPtSGN5RXbngK3uwxkjHXb5DTqwuTksS2wWWWKMhTjyqK8rv6",
  "key13": "41LACExUC41ev6Aa9u8fbfKWiEUghQPdb14LgVn2n5WftyQStzmuHxDiJgExCK4PS32w8qC5bN3eqsBJxYtJVVr8",
  "key14": "4MLjxrA6jqF8noG4cNPePAyj9mgJwGygrEhVjzfvQk7za4D845DjBAurt4U6y6w5F6RhcsxM6xBB2yvi7G3HqQ2s",
  "key15": "3eX6QseDUKjFmW6F76r8iqN2LG3PBUAWGAFEifPYaSpNXR42CGBgUhceZGtVBgyzWbj7Jk9F7oSTRgZ5HTriZg6N",
  "key16": "5BYt5C24ELL2sV9CeggMZfv666z3zNYGakGWT71zoAFdZ74ies3V5H9P9D9pP4dTyYxEgseLB32HZ357yd8QAizK",
  "key17": "GTEBPJECfuaWXGCQWEabotujMG9R6bAfzB76N7bE3Qcmgh4vo3vMnkdwmxvrFLUTSwK7X1LbCDefJtv3WdFUkuz",
  "key18": "5YX3qcVWs5b1bS73GKGpSGx4uu3Xy3rEFqeXt3AMHBqY21JWT5733HHWRh6jFvhkTMsUTzNRfzuVDVZBa87XmGpM",
  "key19": "2DXQRcLYQwHTL1V7hyxD8QYsHgjwEgYaN1X6wcr3HVdZrje2kFGCneobuSNqggqqS8kT7gTsPao8wDXG1pihstFx",
  "key20": "61JTroLjtnHDTx8TCtARGTcvtsd79aoLyQwQvU37X4gRazNrv9vpj91qHsvR97zMzg4cN21Ja3n5UgvYSn6GstvH",
  "key21": "4uqPGMeSZw3bamc1Y3okUSwwToukTwSHkPx858mhLZrZmMhMFsAAsfrnFkzntjzfoGiC8mCGc2w92RWTJMXxaKaU",
  "key22": "5S2RwS7iEg5jiApZ2a9oG1SRbXftuV8gwoY1pzh5JjSTgSJ3mZyDcjdS4DPtEFR9TP3YJc9z6jxem1UEE8GxQ7tK",
  "key23": "xRUBeWoXB8ugc5kfUDhRV32kXfJanND83hGfUk5QGq5pzwc1bqMPVAv2ZuqfVtkpfvKav7mNmWMB4eJCsmqh3Ct",
  "key24": "4YPTzcw17XrWPpLMozycYeyaYm1jbBG8sPuwNRVSYyetYZ88iByDx39tr1axgHWkFWcfUYc6TiNfi64bFm3uc7TH",
  "key25": "51QCt3ovnzumPFtYKEP4twiTFHmDC6AbPtek9Skt4PjkeqX8QM2556XwbwnkJPX4RDpAJUSQPmEAi9fUCoxtqV5q",
  "key26": "4D7Vsu7duugBuDSgDQjbg32pz9quKvUKAtrGNidyGdsZrj6BCJTf8sKzDK994wHSdBuNzwweNuLD8zUA3hxrQU1W",
  "key27": "3j33uT5FvSN1iSKQKsb1BrYqFKgfywu5skSUgjk1hNWQJWiFtwkGL8Be1DRycoxes6Y3z6RfJwphx8vcz5xgbQRi",
  "key28": "2o1tjGqFmZX3G5wb5c8QKwM21Zw3K3bAuwXVXSxwkkCoBe4WkjCvf9h35s9y24F73uNzcAp8DSvfFSNsWvSGbZCV",
  "key29": "22MhoajER2hDWc77Bo5JuJVPorkb7vYuUGyRoexgYQ4JJ8vvvhwNnCge8VgbH7vQrttFgBpXRsk5hNL9BG5vYoXK",
  "key30": "5jNjB9TAGruN4YVYfRAJCG1QtehCX56mbv1pSPp6S4gqmFuxXPVctkdhswwticA98Q3sRWvTC22DwJ1C98dLnKdc",
  "key31": "TKsHp43PDBKHmEQisU37fXZdPCih64rGGfEogU3hZ7ywi6fBrMDq2o7wHtbSMYhaKZ9n9AJaexC4VbBThSTXQ94",
  "key32": "4mjeqGJnCxudh72cFrcAvPxGDVtUNdKNZwmDfXcFrzWiqXu12fwXbdM75KHgb3pXtHsFp6s6WSEcLVtcxt1dupKx",
  "key33": "cwSiYwb7UfrWUxBEQVUZpYfJmMcXm77a4HUjs28593PFPrko6vzBj1hv4Uvh6CBRyEq2UdP9AmpYxQBHmkiyNeA"
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
