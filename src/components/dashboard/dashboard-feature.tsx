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
    "2gSVyexhBJrDrN3PTHn3aXN9AKBbgQzRqtrwtw8svEEjyLHZQkVDDofVu5mA7YWLSLvJB36fShYScxVFvWZpPb2D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q6sJoxc6DVudVCcJpdT8fQQMN6otooDVVHUyrCT9nZmzYfp17GE6NxvJTSTPgb8AexpuhGQtY8PtfJbkcGrsLMK",
  "key1": "3b7Cxx2ALBVGHp8AkmzgPcffjXgWpeMmp1tZxC94Vu1PZ5WyNVxk6HSQwRfNEeVSHZtXq26Skzb42bKRUBHDNkGm",
  "key2": "5V1LdhHTJcqoRiJgMdtKSA5nc4k71vaGr6SeSW4LCSqbi7JwufKiF34TBKcXK24rqd3v4HFbDB8HeLRXJnD422XD",
  "key3": "4RGh1BX5QK67oLKcVV6gFSmBcGPxtEVZMkBb8sY6quu4ZxczJHBKQAgVFR8iL4Y1ks4uHnM6WfoRXbGKJag7d5P9",
  "key4": "4DqTBWxgfMmnDToFWtEnRWsP5JhJGaCntQXbWgj7TM5bXiSTax6eWQUCpz4ZJJedXzJubcKPysbVwxwQpeZfY9Va",
  "key5": "5tzZgVdvaE8y8TKYP64CQcTRDMznjLHRW5TwXsNoAptVTq5aovdM46qHRXV68vQHTCeohY1nEfq9ym34zBrecoRN",
  "key6": "5kPh6eWSE1GwB4Qdmp25ov5NNQ4oSBm8iBcsMaLEzoVqJkD8whDDTvHMgR7AvUwUw1gFBgfAnUSY2Zqgq68QomMB",
  "key7": "2jtNd9MzPcBotig2W8Fu8JLLSdCTrFxMYFVP7gVHpmBmsJby8mUVhaNWgQf2oytgW44pVFe4GVdsC3csab8UqFeo",
  "key8": "4TNVr2Jq1o9DtWBqy3LvQjswnzfwofUrv5ows56deoGp2qjiuPeD2xmntMVBMtdEy6anf8dktYeVcE8XnYswscsf",
  "key9": "4AMfmhwAKsfaFGavWLjWFXRF5TRSZNZS9at1otcCVL1gJXoNX4J7RhcPViwirdExjJw6KBrnF7N8eLvTE8o22Bqs",
  "key10": "3DLRTBEYFYaLvEnkNX3u8NqLQN2Ln1Axms39dBTFzAPdpXQocHt7WgDmnpsExWfZqrp4weaFKkwwL3zatnLaZ4uH",
  "key11": "2z5AdxVXVXJ1hJydSVWWSo7gKTGgVYjoNnZ3tAg6sRxVUsTznm9AQxeqZCFWHbhwrWHJ3tZDpRnFyEawJKpuywrD",
  "key12": "2c3mSA2CCDY6UQbSYta6KBP5a5inXKrcQL5V1ErA1PdrjBJVGmHLReisWttsHLX1SdQLNufqHnqGvNNfowoNFg7w",
  "key13": "35MAdsS9RzF2NWabYW8NuRBw9HCnmGvijUh68UB3mw7gdRUaBiDTG25iMBURiBb1PLV6t5mb2oVLJ6YEqrG4Vcqw",
  "key14": "3j22VoZkXnYXukmnhDyLR8CejP6mTeo2qzD6Nxhpq7SmPeTX64cZS23KF1HGH7Waw1i1gBU71CFzGXS7MtNkqMaM",
  "key15": "5dgqQYGsbNiZfwP2M4KrdAR2bRn8RWu11wYtU3LiXgi2g4QaQWseWaoc42dcjZ7hUvCyYbQ3zGpkcow1LS6iwLHf",
  "key16": "58gQWyoYJYwsNXm5dLGTHdS8zuKnwGXAdWcd9RiA64Br5FVQZVgka9EKKoQmnnTKYDJ2RfrSX3kZkdXXFaSW68wh",
  "key17": "5RMssws2ApcfJQtd8BH1GuSvoQ9zXvsaDCqguypdpyvbQEVXcjKruKc5SoGTtxsQGKJjBvUCRwyzNzmLihvQJoUD",
  "key18": "3msNwwb8tH5vhe8PEPqh3eKYSmABpx7y6cMedzWLkcKM6M54cY2JdtwNzPiaJB27hXqBwnow4hHNQHrLzpBKiFvB",
  "key19": "3Xpkqam1FWk9Tg8zaR1418GGgqRLFioMuos52K8ShZ2LcfSJA661ecdtAJJaNCUsAmhmdWqsTzqk6vtbgAG7Kum1",
  "key20": "2zuzjj17ZPF1G6kecj7bL2tdWZhAKg8S58CTQnT9qHXHKnMGkXpTm7AJa32ZXbFe5jLJZJgRMu7oiVKXmXDQ2ysb",
  "key21": "4NuzNr93y5pSGUpkq2DGcM3ngxjjUmd4RSDrHj3MHefE6bS5XTfoDbCZy1pbyXD9cWkahwA5cD2GSPxNsaWDPSxs",
  "key22": "39wWv4PEUefZK2c2CXFcnWijpKNv8NgcfYmsTbvApcinx6nJUsYrqXCRfQ8xMxcxMfADpqzbgrYZqvmM7Sp64K1G",
  "key23": "4MaqhaQuDWe9cqaMowcXdmULseHMKDwYCRLeJAAXUGB8A6MXLqLCppU47NhxdNMWmTEuXQ4ibeachc2C1pN5diTC",
  "key24": "2vKNNumthN559bPrzQfhJpkFp8n4KegcHyHKbDnoaDKe6cy6n3VtuUJJMyezvUesKhGZQB9EEApa1ueT25XGz3GA",
  "key25": "4iiVqkqNbyw4hypuvayZapaPtHdvMsjkiqGNitvR43pVndtHjtHJHxWo3Hcm5KzEnYdMX6ocA2YTSoLPKVGPnNHd",
  "key26": "Qccp9bGugUQX7Fn7epzXSqB2YTURDpyvTvWDxVX5o4Sq5j8V5QHVkJEyuGZcSrgG8FNVr6xLb38aFxfaxVsdpoG",
  "key27": "TeN8gYzQ99RKHSDAobWqXz5hpQKBx8kFNs3Ccrnm5ZmmmPsab27LCMb21N7oHNDTQqjk3NxjxKpyukDspKTxDrx",
  "key28": "3hxNmZzbZdYX8AmBHjKWpDbMLS2fMAdXjR4nhWeGEhijCezdUKqMfksfNYsysqz1VdHRdVtLFE9gRd7iHewANqMr",
  "key29": "4zCqpe8zsdztnyUNJY6aUghmwXntDEPW3kZW9z2NBA5icq5Rp5G2fuu8Czdchx3AnhE3mcF3aHrbwoSuK86Mny6Y",
  "key30": "52aay2A2eb6yuKUAMwbdjRTa3FknVq4ibGmeEptM1Z7kup2XLwq7kzQfWCUJAg3wJeMozWfF6znBoBQhBR8BdLp7",
  "key31": "3Af5SZZUekafnbximQAAdoUKdNLQYNCe3nBEHNPBFcr3UNfidaXMqE36dVEVXeLPEBqA1Y8Epn9zNiJ4UZCeBSrf",
  "key32": "5rZmyNZ8PCXYTFdc4muFLuNXnqMQtYvz1orTFzWhzLif22sLBz9U3VAStD56mENhCVDyZvV5YhmZPsyX6prEdo5h",
  "key33": "5HAuUyn8ZTXmL7mdc5pFaLs25G4MYGsyynnKPYbMyf4eoaGmrFD9W6j4KKEc8EsxWfGfjsr1m7c6n55e3MgGRFVW",
  "key34": "48qhxL6omTw9w9TdeWsCmaKVfjSzw5iG3DJMrXJdZxXTALy3ZVqtQ8TRAEP58TdkwLzqGJJw39PMoqP7emU174Uh",
  "key35": "5mGWes4SSYjVsMaXueTTuqpncQefdMX8UrwiQvkshPRT3Xvz1bLaprVrV3rDUwe48QqH6AXz2aHiatTkeTKAkEhq",
  "key36": "2zUf7ZxBZru3aCt6nvRRBW39hXe1HKzp3B7jQMkUrzPPwdheSqZSeCegRGHhGfVTtfoo2NTQjBVviHpwM9Bm7B5v",
  "key37": "3KxFFtWHQyaw3Eaeeh5hDRXBVHFRWaChc2M4TDBSTvfRwnDLuUE1sKoip3FLoFc7wo3DLKxLYrvU11scpxjXHzyu",
  "key38": "Tyf3GurJRH6iUrQ2EqFw6amfP21FuUndRksmaRSc4PXSpwFtsGg28JhCUaweoShjBV4sfDdakD4NndXsft5JKho",
  "key39": "3ZASqwq4nvrzT8mn6tganN97fXmrrqRiJAaRo83uTaUgyKHcPHciQgUA1o12nmCkXdmwoauwwyq4uoAprNqMRjre",
  "key40": "284HwNGN4D6jTDsRo9WM4R8rsfsXLGgbBuzJuBaBr7emyuGUnFRB1CffZeEjf9idYBgu51FYkZ8qN3Fkx1MRD2UF",
  "key41": "4PeBUX1h66sAmjgXQL8EUJddBgvxydMBRxejCuKGTriBYK6EE9L1WdRJzTdxYinZA8kpYLqJzkFxUNsX6svS6mNY"
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
