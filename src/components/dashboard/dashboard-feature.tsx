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
    "FwM52ricp117RjhjKUkKERsTwH46dkVzgsxJe5csP3wJTiXcCDJB7qBzFaeaA9M58TPi8XbwqwotR734FJdaqDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hYMfKAuM2AZmWjKZmSxXhfTSYQBHyPA4fKa1aKL4D1JUbt3EoR5EY7jw3oV66TsTrFYGUSk6Q5m5pfRaG4iieN6",
  "key1": "52vdss25FovemEHE2Gkwz8XSkDV2dWmystKDAq5UX5bawHnLoivTu91CmD3nrni9nkMpae7SdqJBdMdRaUifHo1B",
  "key2": "4x7XcFJCXjPYDaLgzBUtEujdLoMCMdVAf6iWhoGaFP5LCa9cc5JHj3SkosKiAyT8D7dB42nPgA5Pb63T9rkcCZZy",
  "key3": "VSYPNmeuARvQAMwbn1pdGhfNGHq4YhBSRTPsX9mR3Mk4YrdMeqDYRf7Db7MkaPCzrHy2VT5prb6ybxduqatuUNR",
  "key4": "5BDb2r5pcvWhAWMyD4GyTXdyVZThsrVh6XYAiw1HLrhujzqB1j3tGTGZF6sByBX6R6CEEWQ5kQyYPEnjKo7BUgDB",
  "key5": "659GVNfS4bTVAKA3mMffm9h8vJz9M4fnxzi6PbKWSSVEXHKKXAXLA3TPpx4GkTUfunSB7piaaSbnQsYotbPdM25i",
  "key6": "3H8YLvqSVJWhsZ4ZG8WYSn4Vy8EhhqzS8Vkm1fxLHyrk2KL8H244ywemM8gTDmeot6wxwm1yE4feskAPoHWZGd1K",
  "key7": "3FVEWp1MHGjAurJJzKWgiLtnca4GJrEVB5oXhJdBdhUjTqUQPthu2tNBZZ1fGvYaNfwTef6ffZaiFi1TCGKUjZRq",
  "key8": "yn3bNHwhhY2M533vbAcHaar9VAGPbpmumAzaM2tQv8QAZ1x5ctZ11VuaJry1h7c3EJkTeNrvc1yaVQmxotAD4PY",
  "key9": "4hZbVfWWC3bGqdFqhyrnmGBJPHpCHn1g3z6yYNB8hX1VnyrsM2RaDJE6r8ZGxqmREZewkr3iKc37ZjqvwtDgTRfb",
  "key10": "5aKXV65eY3omkjm7at8zyzQNsh8mCVPKk69o8U6HkQFrp56HTYT5rBCq5hYcAWxYBj4PLAqLGbBkRYchBAfhT1Kv",
  "key11": "qipi1V1azbunpyRWPe73CpPfZ4371Ar9ttuu2x7uCy7hfiPxeBEK5eDyHiD3MbnSfP4Jk64QHnmfUwXPvWwJ6yw",
  "key12": "4WKHs5W6QU6G4XBsjhwUxwg5uryeRbJKgzSDEaaUqvgCp9uDReczZzT2pdMTewfTyxDSrgZ6owa4gtgBcz13DV7D",
  "key13": "4PhAmnCPwJT7CCBXxQzEY3T6ZQfhzifHndJTkaHjY65eCrdPexgDfsgSgigurwNKceBsFvJ35ggxn3mjp9EtzZVa",
  "key14": "5HS23A6Ux82W3RGnoE5sDEDFpJ7DFDCLyeiFaGxiMe4t2HqqATT4xj4djRH7ey9q2TL7Tkd5tvxG3wCTFGoH9HMd",
  "key15": "2LduLbKkp4GkERRu51FmdgM5a7L3rmR5oUaWDN9nuoaD4cuRinJzREeYrzuWguVTQGTq5wbx7CJpGx2VCAmv8T8V",
  "key16": "2C8BvGuUoFEg6MYHq67qVXzgEZMvkiQf96T3TDou4Lnk4HaajdWJQHD27VGpVGnkuALsQLekEtVysTWq3JvETHdY",
  "key17": "1KZQTMhSYVaLxq4Syx2R72N9Z9fkRPv9Zp8ytVmrEka2BiHe9r924W1sHtVNQ7RqGbwAvWmxJiaNZfKPPNtR3y2",
  "key18": "2vnDiaeTY5EHhjtNk35H1iiZXr5JYru2Tw2587XzuoCDdsQo9wupHmVQ6X1v2zAV3W5eu4LuWJqLGDNepAieAQCu",
  "key19": "mCr1H3c7iQR7aPS6nNNnRQYXRfAi4PaN8xvgD2quQyefHB5PtLVXsoKVaVLCfXiKjctFQiT8mEQBWoiw5KKTzqe",
  "key20": "3PivTsWs3MWkrNoEWjufNYbwMPNnbk1eRAcsyw2kwBtYRKPFUWUDtsPDJxJFcFwEBAohbcStWCZW34sRT4K6iG9M",
  "key21": "4gkxLc6W1y8AWky58rETaZD2KaTHVCqZW1oX6ViiCUkGiAY8JuHWh6r1XPZN5FKvCmkTBrqBy2Daqt82NiVshqdG",
  "key22": "3u2jVQDtdNeotVirtNEaZ8GbNRNjVoiWdtiCRfbtXYr1a1Wxt55xua7g6eTzXzhBQd8i5qfbPzwR9VnLkP3GSWoN",
  "key23": "5Nyh17CEbnr4RF22zoofCSPBr6dSuVTWMPyCRM93RLYoLMHkYoPGSeoaL1KhDJx8EpVaAdWwy1ajZf7ZGEYJ2DZe",
  "key24": "3yhZQNz8dS9Mn76kFffqtJr4FCScPHakswy9cv4mL6Lz41RTRwC7otQ79FTBSnSciTFrZa8akvZkq5ky2a2NfkT3",
  "key25": "4MGzCEWQym1dSwDJYAp6m8uygqRX7K7ewGw1QkAH6yQSutvgM3z8cHxpwvDHh9nM7zipcNQSfhyueLa6sFURWKft",
  "key26": "4VG1bGq3xM6uQtSSAH6ZKChkF3mruiMQyLDA7Mj64iN4pEKiKvecHD5EdkLD86jVTEe9i95DedeziEpZxkXRSFL5",
  "key27": "2iiMd8ou2YSPiXuo9kTFMTKR23gbyFdsrNWfJoHv7czRSWvMV9zUyJLUetRoE29Cmkj692R7jRsAneb8zJ64eT2Z",
  "key28": "52GGjS1uQSWPGuZKBuTsYMTjsxe7kqBGMyvXft21fc57hByYmnrmLDfH9AYUvYSAWrR8EB6SnZ5FPSuTyWrVkYNp",
  "key29": "3kFBdwa9xTV9Zf3aW5p3cAJ44uxP3JATw8eB7xjSWEyCmm54BRH3DUfNuFsX36WSUtWgEph1qecApGYBbgFNNhwa",
  "key30": "2X2H7P4PWkMfaKeDDvaybNJaT5TTctPS3DoLQnhc9ZoKYyvs3qpRWSHFEzc6c5wTArp1ANX1hTkvWvkvhLandvAZ",
  "key31": "37X1PzpqyoLQBi8L25XRijhaDSErgbDfySXpEXNtQCFAENCRwKPuGBkURFmwv1juZ2GYg9rbbEwwgNpZoSUHNwoh",
  "key32": "3WLFsrSbRux6r8cuYLikNyztFQe2u8pn6exsK1aLU5KWydCNUDZ186qqQN3p6iZiUaNv4TFfdS1AMxCuKBVTz1Ct"
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
