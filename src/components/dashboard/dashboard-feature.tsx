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
    "2jkD5iCRLgBeVYPFacfyNYeYFEjLZxDTMuUh6Tt1Kq8wmXdi65zUMbFDDyZmoqfrM2t6Nbg3CJKzpeikCodFS1cy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mdxXjQRfusguyeeLu8tXg8KknwJFYfvXRvdbJ9U9FvJMR1VUhYTQTWdAS3KLuv4pR5vpue8me5TaGhLz1p5DQrt",
  "key1": "3SoAkV9Ui41Dw17eWLJoH7QSvZFugD9e7Epw9CeJ3vXaD1aLTqoxTbmQrQNmHCkZq4pwbmH1oF29WgBf9tgDReha",
  "key2": "3BjxkQFLY4m8dE2PC4tygTCg3fk4Fm8ThtkQw1CseTeYBj4ZvUqF7C4GCcdvTYH7MaFdGVYZS3QsBLNQHkY5f8SQ",
  "key3": "3iMUXdr5LrR1JgKqBiVHdZnamL711t4wkKqe5wVqF2NspSsCQsBwBH6wWAoK6S7CCisCgohvRGQN2BFjQk1CSWnw",
  "key4": "3FMhgMwtbLD5HqEVnQ9qvzP792AwS1TMGRsqhBGCbZgpMgw1sCiYwECiEeJWq5kbBakAnqHjeF3hH39cKbaH5moY",
  "key5": "2qBhUrUaSUq6gdNTWR6xmNA8G4gwTwTCKm3KUhojK444EEktH5GyRShS5ETDDFwWf9UVJhcPEDxnLmqxXyJyeuf3",
  "key6": "5GoV8bxwfzXtWLF4GcMaZCpB6hssxvUC1oZF14iZ4iLtwTzgFqax2Jgqacb2Az2y2uUrUH6gX2XdRQWk7SdBrPEm",
  "key7": "43jEDCnrVoEdMXfW5NVikR4x46omsN8vvdxfn56buNWBBj5PeYjSZx9sP3mhDw6WbhCkgjxYQe3PCe2qB1i8r5vk",
  "key8": "29aTDTnKFceBG7cgWWRsixb8kSGyNcDLxgBuVpd61brkA6riCTqcTmLzBULgWdUnGR7excvXR18nas8QDw9Shfqm",
  "key9": "3Abi1u5FUtBk6xyqCr2dcdq4C8bZ5gJnnYyVGEJwF9z8W672yuEXfmXYVpTbUqgYAzmEZ4ZFcvxA3TNLyh6e7Wz5",
  "key10": "4j4X7NFjmQ91SUTTxcUpAYCFLCTf5VGV2roadbG8ewkHLhqLNhbyv4BDayqfNbHdfAUzcWdzJDxWq9Zx6AVA8FLi",
  "key11": "5PzKfDBgGNoyZH6jwUL3SZm6FUseWtm4wAqKzvV9PhpaVdcmo8he2VHYpNQcC1feekYm8eGrZF95bvzEkJyFdqi9",
  "key12": "p4mZkkbSi5MKMG8Q4rH2jrFgwWzcYkVsXtPi8vPhmiLdWe7zX3hgsJb82hFz2a5b3suSfC5dLrtfwJHuacnZtJK",
  "key13": "2pBafSJGveyqGDDiqdYhQsrAPWkivrmQphqreYn3APrLaS32pRJJZUkvXJeYRMnA4Depq1MhL4xks2YWgmHvYYnt",
  "key14": "462q1UV43jehLo2MZr9TBzbyAGgLoNvArRo4cSwdcad5PcrnTsToxP99geh6Go9Xy2id6dH6AbfkScX2cS1BSdhL",
  "key15": "5u8pCmUs2eRavYiygj86PXUsxTVeYksHwkZMxcT3AMiumyMsTCoWvT8fezys9QH3CuNK4FGGnh8WwqTzBQ4ZVdKx",
  "key16": "3LDuJEFokUuiwvS6ySS4tKuazq1GdHBJ5nehq8Fe3KvSFKtQV9sBo7KvKfi3vj94SuYoyj4eXS1wRL1aqzigiMvc",
  "key17": "2Lt4RM3xGfrJDshNy5tUdKapUZ5a1h9c1E8SoKWGP6Q1tEmtoFrSDaY5QHmDACfR2rEwdKc9VSXBFcEJfzSprXaA",
  "key18": "3NsuKZfmfA793DWkvXmzmTgpE5muFxqTomSUzipTqimYkXfRtUniLJ9M2NYbwqa7ik2pbVKTNfFD5TcoYLj3LJdY",
  "key19": "3mpFcTF395EWTHFCCX87Bsv1UPqERTQKaXfYd9HjtnaSbYQ9CUsnCza1BZJQYJEXisFnhoRoNDg8iEVqNuwE9o4t",
  "key20": "3ZsfFjfCNXDUT2kphTcnkuifxbJTPhGBYkmhTmmVLyWnc6B11ghqTVPjtHLsbeTw36fDY83HwLCELmqHTT2zpYxR",
  "key21": "4KDz3itCiaq2oxB1mTRzjnLrAgqawNeHbW2yfeA792yQQWBCm1FiWh2tt7UXQ77mBGxb9KexzSBahKDTkXQsx3Bj",
  "key22": "3KMKgZiMkJ2g4cGn8YtiqoDVoqgHGX4LHB85CYFzccVHSa4XSfLwR5CXj8CSPWUmBPRCFpoNJaGTp1Wrbo7XJm47",
  "key23": "4dqE9Fhyc8Tv1YJm3VWvs6sAwAasdk7GfGHcMTNwJfBTV97TtaAQcA91uKJULUEXQU4TAXtkNpQsvFPKRxWNs7YU",
  "key24": "553Mxi2bSB5W8AnVdP3aGxeXHj91eyNi3Z9ccHXk9bBAe9Xf8HqKDasA9bLZQAKt5jkcDhsZLJC9jWu51udTfD1y",
  "key25": "4sRYMtAzPCdbq1h7ZEUJPShEtK4kyxQxWjQ3Fo6w2aagRtmkgJtCBGZHpniNGwrnEPiDKcCap3fKMXF6z7qVgqDX",
  "key26": "2sJ1pkrmDQF56VkqENCJRvihgUGWX8u9VAoR8ZWLZGedkmXrCC1Apjc2u3vLLNTN91T2z1cFszKcKh27mP4WftEZ",
  "key27": "3bLcjq5PANKayPq19dxEraYxHsVXujGxuyKGJ9pfr2KExGUWHK9bD3io29KU21tmRpGK2f3Ea1SybMRrNuhw4P7g",
  "key28": "375ZiHBvFVDHHERSVjeXwEmRagwqbagyP55yVPT2XTu1f5AKfpq4r1kbyz6mkj77zQ32ZJdMH2oFp1wXaKFXKovH",
  "key29": "3MicXT7JqhGZnja7yhDBLUJc22gKN2B9aZmbpWmQUsuTvGmYsZvZsCF5De9uCsbo46hJqwmPa8R9whbs37ZjRXJr",
  "key30": "2rVcbxzWVV3W63JfBdC9jU9U4RjvfsN235bvEY3WBnaX6QwLVRSP32knjLFAuwZbfMsxK7hdLmMUPKmehKAoFpvS",
  "key31": "3SsR8z4Gov4qKVJ1hc5WiHALyhjvFhJs7GMLzwXgNanZUhtHt2ZR9e2311PFesWxzgSm3cZ4Ygm6LypHv4upPvTF",
  "key32": "4997bR1x8rQHAjKbtKWmeVJyVZJ23hbPzuKs1NYVwbeL64rTyDkwpvenE1XkmvhHPWgsMMAJg5ZWfE5R7YqLD6A9",
  "key33": "51e2LJNidQfRv3uWWWuwYmgFmDoVPHLgxb9EoBT9wXxcDikteagPTbiFCa9xSufPXCRx8nhFs2A9EZaFbk7sT6JR",
  "key34": "4r7n6ggSh1cr7pbxo5icprk85dZL69NHHFvgNopKBNeTtd1cV3MDZEQZ89TeotsPh4in8cbDcHYSTU95Q2R3cFMo",
  "key35": "5XWvi2m69knNkkTxL22FAmYJphVLERcKaYtVJqkg6kr1USxnoaPXJwTgnDNhk6LqVeRT7XBNgD8WgMU1TcHsc8QT",
  "key36": "52bLu8ZKnUgr1zSNAMyGKGBHaoWghvFjFq1EjG3gAy9NKGXVncSqj6YCGkL83etF5GcsUNSG87AgweDKsmgEzdSi",
  "key37": "2ufMgVaUhpCZ3uCfJcU8m9BJkVdF6iVG4aB4JURA8PrKwYhhv4NU7BEZuFcv3eQc8yT5B7B611W9j1dqfKJjRhyG",
  "key38": "45qLRQHS6Td7UCGdpU9AaNFiw5BPVMw8gCoBiKF1qDp38g1hL1vnCG19vWs4jCRM3i3432WaBk5xHid2e5urE3AF",
  "key39": "VRSa1RUqY2HhEjTWLyLNy6ip21zkyzZ9kY4wet21tAVmX8inoszyKcGZNHtixzVtqY43ymUjj12m3uz9ro5CJ7m"
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
