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
    "uLSSGsx13Gom3t5iTWmYZEk3m4UMsFbnqUYuAB8Tyk7LAb9ZNCADqp2vjapgWiM6JVwGdgxEXtjfSTDx3QVeDkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L29kTNeVckgUu2thdxu934BFL1Z7NvEJenzJo5WyhtMJB4FXEuc53NwpdKd4Z8pEUkynT19jUgwPmLrQxfjR12i",
  "key1": "3jHn1pGehZfymQQpA4EeSF7et5L7crKqHsB8mvr96q7wQZfkw4CvqzuHF6Fgue653AsmDAjRYwJJMWooG5XhTP9z",
  "key2": "2ar6wgUHwKEmWMj7Kx2T61gEfKbZvZSNiiiE4unaGfSGSpodGA3g7pL8dsd6e29nC9tyBcsB3dhhNBsqE22VvwRB",
  "key3": "5NXuUEmX7ABZhWBKdaiF1oWYG9z3TiK5ax52mkZ9NMekFtMnmnSRhR8mkmCjPy7EKTjMS7CoKgfZ6m1bJNdEK49h",
  "key4": "dRyYdXNc1rWdgwrejNUgQy7kqPckwK3G2HKSUoHQAApNahtP7XRaAQgGZm4UR9HMUQHFmfk7RdGtQNd4zXpopAK",
  "key5": "TVH76tvVgmkm4YVRAdvQtb3Gkr3X7eerM8PAcehGVtqazJ4hmGocVSidHZpe9JZGWNaSRuuMTcekEZ7YNF8j6LS",
  "key6": "2MMJuDpp92gQZUsiVLYjCaAgMMRrJHH4WWih2mzZacjAWzDijZMVDxjCAWgiZhSyEZYTNj6fJUmPoQUZLMDyR18a",
  "key7": "4tffw5yJ6ouCiTEZkJHmPNnv96tQJgJx7m17n7FZ9YoZGivQHn5JDvoxjQngoYuubV5iTZ77Wzu9QN3EdpBqTRmG",
  "key8": "5mHfHT92Sx7B5citXKCYQik23qR4wo5p3ggZoozpK2s4TQSAZj23pnPXqmEZ9CLzSQdfYqkTeXxoPhnGVBTTib82",
  "key9": "PCGWcQQRMjgbwVZspQZ5XJyduqNu3VZEPU3Rx5gtGPgUW1MAcQhNMbrigdZgCrPXPQq8wpCjXZJTc5SWpBZETTa",
  "key10": "VDGB2Q5jQPf2D9Dpsx8s6v2XCkyvp5GxR3V4CPoGB4WWynQWEnTrWLyXuc1jt4YNsxHdRPYm5CBkNCzUMQNyc4Y",
  "key11": "58Z2uv5ufr7KTMtxeNwbh4HwYNcw9BbEif3gm26P6pwtxB8wvCLVEyRUW6u7txXf3HAQAkdirQVGkrMiauN7c4aD",
  "key12": "5gBG5Nkj84jR9qUAGrrFevyc3P5n7DQpC4cEGtb7TFXXCkTzeRRuy8Ek6g5QgZ2FEVWFUnjXcLMkKZWrLhdvnKgt",
  "key13": "5GnTZp2L4nCN3GMeoTmYiCecqN8ENboycQdXWsEvsugyw5eKUZajEnMMSSwndrZY8oZNUJE2bUDW6f8px9sQW3n9",
  "key14": "4KNeC27bG4RqnZP7JLZXuEGuiF7yuVS5XRr2tmLpU1ThZimHB5yY5HHmDib4bvtSpjYtgCbptKH4TbQRFMfZNm8X",
  "key15": "4ors3oPvmdeFgMFCcgh2XNN9N9KDiVCRtx4zrujhqhEdbEoExqyKKNVHhqkyxsAf5y4XPqw2AMLxnHBRoW9wrHdd",
  "key16": "3kEfx99969K6be5CCn8HqqtAwtJQqsCJmGVYpAn48Gk6eRHMM6oKDRxqiuozBX6UePEpCiGCf6uYosk3FnT4BLeP",
  "key17": "58VrRmudH7hzBVfk3DiDF2BqaVLmJxavTE8tBf1S2RwYie2fLqeApjbsDdNahjScT5n6VSvYDBFSoBYqY99ijm2Y",
  "key18": "4BH1vFKJe9ethZCX4wQW6EAp7BPWE6DANami7UiSv9597ixKWdSFLnfZ6nHMiAdMF1XRs6xrHV3twoQ9Zx58QrGy",
  "key19": "4gacQ5Q5m1MxkpzUrdMgqTDcJYzEyPPmkv4CDERPhhjivcRn8r9GHBs1PVQXP5MVB5fkYeA6y4oo75Pq16N5yPKX",
  "key20": "5XCFTDTGSJbzsaRQF1wErCvzPJvXSY7AMbDvdVUQxc5k2PmSFTyXfZPhs4L9MFK3Sea8FoNwsmeSF6HeXwZnLyu6",
  "key21": "3nAoEsvPsrZ9YzeeQMdjETyMXDqgc8dUxjvs2pkiEyThi8qMmpfcu9YZtfUbDmsffVV2PdHTpLdN4ZnKJDHSUXzC",
  "key22": "2ecRpusm5xUpfWjLN2rzAKu7kpRtLGAGyNHADCnyRSCRoeHtZs5c77gio2WKXb6NcmkkNmjbumapEJf2VDTujT6Z",
  "key23": "3UtzCmUXLa8rS2hquMq3ypqxabHpqKCyM5k8z4154w6MSSxMiSE8jKwx7dv6N475AbSenWvqi3j8c6WgqaipB9P2",
  "key24": "3b1UTRX2tKXKEdjUypVTWUWxF6h2sT47vtNxwnbFnpnkSTuQPShsnZ6k5sE2zY1KyiGSM4PV7WZkhdB3MCp2y1rP",
  "key25": "261nD28SjFTZsN1bSHNkptXHkNkATLA4ubxsWQbtwFRm9mMLVtsjdQhFM5STT35X9MsepCGyNxsdhbikJVC2RznE"
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
