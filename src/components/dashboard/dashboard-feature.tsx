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
    "4bvS83yDFSGjHmU5zdUJSHd3nXHAEc6K4FfnQJgddNKncnXB2epW5sMKxJjtBNp1Cj2mt2qXAkb61ZH32jW8y8xA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26U4s1KE7MQrST2wG1wRVvdGf6YKmmfntz1U3PWPrT2To8tHjH6swnrFwgrrCiqNAiLXjur8DxZCeQrQysZTdLL7",
  "key1": "658jgkXkoo2J15PHBRgYF9pKdzGmzFhPUJe1BurZG1N9D942niQiXtSsKiZpnM5p2aM1bDciKFH4PuUhYdjPFnFa",
  "key2": "3vu12wxTqx48hYTSGnurfEetsYPnuubGAmjgd68TSCBK75YCZCDsLSrJTrWovzX5L43Xir2pxPjYJNXdj6ExJ9Cz",
  "key3": "5xj5YzWo5my3ZYCiv7NqvG7TRFmipFuBR3uWyz9HtcyoraLGpq7kecMCJPq3Ef1MfrzwJUZ9hKBX6rDSk6MENFzs",
  "key4": "5399cWxmZeCEJVrfqQJ5mmaiv3yhQNRtt5njZbHy3mksN7ZnWyeYuJa6SCPBNYBToZjZok3NdHqnCNCdhub35GYT",
  "key5": "GWj3TSTYFATv1hpk21KZLCQj3HpczWYsiwchepQsZ2tf11Sr5orvz33psVtStZVF3SKgEfzHw2vF8qrvtL5JaQx",
  "key6": "5wwmLWpY72kd6GBmv6GC9JhmpALE51MJabP27x3ZvQWeotUccVrauFa4Ge1TJLHc3a1N6emjGryR6d6u825hC4fE",
  "key7": "TX5qKEBg3m2vzfLMR2kLsPYEwbG9F63HSNVWsiAzHFUHefVqA8BudXrdiUjbpSrEQRdCNLTQeVd7Ebde9YRHkPg",
  "key8": "4fhcdGRT8cNSUsf4zUN1vSojb4JARKNkEJsnEkAtdbhpu8jkG8hLnBF5s18fJnoYzf2Tdm2Fw4bEi3eawSWpuE2T",
  "key9": "PZJQBSNa3j3mT8S6Lzmo8YwQDPBGegeGS7pGw8df8J1BEhqnvnmfAygJsjZaGAD558LkuFM2yse6QCkkR6mn5th",
  "key10": "4SDVGALrthpRTS9ZxUSNRZC5hnq5EDbn39kBjXkncv9xRfhmyH82VZSA4rRnNn8G13mNjijC4rt6nZ7GhDtb2JKv",
  "key11": "5p4n7Z7yYESHxVi6DVNt8qRQj7isxQosjQ3oa5yawe2y2JW8HbRvrzs4GMkNmkmVNQdc6eGxiAjien4GTTCTGzBF",
  "key12": "5nHvZDrxKkPJw2XairKta5NEKa6hXjLbeDccbhKvu4XuPkvHqSEBGB1WbGSXfCj6bVN1KhJuZiQgYL9E9J6wBZuV",
  "key13": "2PtDKh2qdkG6VMBeTNEbdsjtevPu65unQat6Jeq8Ddo7QFeR67nv2UVDEqhHPYdzHyCuEPuvATvzzc4TqTnHuLSC",
  "key14": "5QK4NJF4bAZQqPe9V2PCMH2dsZtopbeabsGYhscRiF1rHBtQhj9hPQWj4hQ1SF6Jwp7wWcBiup5YmjrCYb5ggSXq",
  "key15": "3ApeiHChbWozWtkhBbhAALWDCxJm2k2BgiPtWt63gvnb3dZHnkkDxGNgGdonWsMUvGDxcnkqFLJmcwqE1WawPiui",
  "key16": "5PdwXR73G4eZ59VMWS6EAHcYViUsVWxUT6zp7tKurWRRKishj7Rb1WzHmHCnqVcNdtW82rorsFmPHCN6ufCvdHxk",
  "key17": "5wwsC52PmJuVgszdDDRnbuMVndeQtqso1AiYH84Uieh6HaESgdR6HWaRbpiAQxkSjdSq75XqHsKyCAqrEUks5prR",
  "key18": "4NXUea3NFbAD5NC9o4nJbp9jx4cQU28MdbkHXSLpniMdqmYecw66LJk3RDUZWgCPJjn5CtJN27m1MCjS4aYwbCi7",
  "key19": "2zErKNWT4bjvKmxAHMp43uL7iyYTqGYkKK81zEbHd5XaWjxEd1XNhJkjqJuE2bnpcD74yTT5VYf1JWohEbkfdGdr",
  "key20": "YkozHXks67syMBmpNSuvtyKaaeUEGcq5uyaNzByfSjdcc3VpR5JnHi7FPWGrGsasCgT5nCVv8rfN6nfZoVtgH55",
  "key21": "ej6BAHVqoPfz1FhrHgrsBbsbAG6Atahmb2VYrfyKv3nTsQuy1csCXqwiBhRrDJdW3CM9Zsk4693qiAbxwvEQZ8k",
  "key22": "2k6ZdPrVzNveShQz8jHrQCCHLHJ1UASSyDvBbJcqfvaDbDKQmveChnwjtJJFrG77rnZXSjVtPuAx3hB7BoR4MsUn",
  "key23": "kq1e9eNVhag6UBZinz2CEPjidfifXrvaDpP4Fq6RkaybUpH45pUbaKaJbKLz3tDC85oWXsEAdkHfDMhqphtcsxb",
  "key24": "5YGGxREYmnnCUxXQNxX8GM49vQnZqUExLr41DFTbVNs5e8eXQMBryLEyWtHUaYsWbr3dr59CQzGniZHzAfcw9D8o",
  "key25": "2eFFddiPpDpDYQsfTozAqcLFUuhJLU1gBv6qSM8PGF9QrkLso36o4WmG4bXWKJtJNKbzEbxfJM59g8jx4dHjMUoc",
  "key26": "2Qb3gL3m4DUVxNnnDRWMrAvAYT9XqLcm47YJ1pUeyRFxF8j6wPaHoNsLJW2QbSRDr63WiWPBdEDnXXS7dRxTFeSa",
  "key27": "26GLujHKGPVrHWVqNmqqL4MopnHY3jbaAHaamZrsYkZJzX1hiDhsFbBrCEAGmu9THbNa5fakLmBnBYk1GgQ6dqQ4",
  "key28": "4QBuXSzkDVRjLvf5rijAirr6rz2kEtSXeGxvuifvRdV7oTnzn4CF2MVq5Wmafz2S4Z7QnswvLjXBrAS2qgBW1jsE",
  "key29": "3A9UmpchY5GGviqs3DmyGcsGkt2V6WP8zy1zgVRHBabcp66eKRbnjaufBzRAudp5xcZoegBBgv7TNDfrVD9GhFNh",
  "key30": "P2pLgZQKCi7mt29M6xBC5T42We3jgmDqDGmK3TBKnp7poyrBhzR5U52Fjix8tjwjdrvnKyMvhdggGbt5v1avnaE",
  "key31": "26MsQQQ7xvi1dR1xYt4XhNDhb9KbBYFkaCoyCQyuH8u8di5CDXUktSMLVw7rhbVGTTsrfumHmvjSCf5CzTezRPYe",
  "key32": "mgFBWWf9zj1dzmUSzRWMbAZqJiN7BaHgEcD7Li4xM6JBxT8H7nVT975vbARcgy7AzX5E3tiws6zyMv29e25Xrbj",
  "key33": "3Zwv2qHUqA41a7arR2mW2w2PxabeqA1681hb6fxctaamMGNceKsgeizuMEDvM6cDwqpGZ5s8HVJHuPH1zFYpNUQm",
  "key34": "3w5VNkUGst3G9SQvjWvo8EvTA2UUjETtyyQxa5okytRdPMJRgzJyaTHuBEp3CCie1MLoRKUzn3mpYBWPVBrKvSer",
  "key35": "5QZFRNCBnas1roZTBFvTxDuyvmfKm9mB46jMK5PrkdwfudRNKDfZjbXynntStDfLPHXY2TsovsPB1tvrX3nTRWce",
  "key36": "bXrFeHRBfUSBaJ7ZGuoUQrize23NBYTVtCUL2aifXYg76EUyuXywH81BthRnEzmxd9QrWrCJkvVPREVpXjhGWP1",
  "key37": "5JXcmAsGRvVbDy5Kf265kbdFd7Mzt8cWGuD69qD5YrBownbrFKQDgEz24PoqRvajrEAPZexvUXKsj8DrzUrQcmhk",
  "key38": "3tWdAirgBRXRkuWNnz6Z3eKTowPnfQBX5gNUqJ8wiL7ZDKzYS5Bzs9DW2pCNH5y3QpfVrMounTm5iPx74wCSi8Nj",
  "key39": "2mvptRET9Bspki2QEREkKKP4xBz7XrmpMTnVYbjSpJJTQ27B6FAPcy3pGGf89bNvVHPDB1GxzwomatuijoEcYN17",
  "key40": "4JKvd7xfFiqgJGKUm1tha7VcqA9uFjAgx5uZS59Ny5hrYcx2rQD8yMAWjeYXLKftUaHjaZMn2PkvNZXXEQto7PFK",
  "key41": "38aYYQSMPnQn1dNQ11LdZSnNJEiGsBf2cUPFhMKa2Ggi68HMoyZaynMJTiYwx6rJfxMHwZv38fGLKT6XwjJEu4pu",
  "key42": "ra3mh2Jp6o9YKh2xFGfnJB9FiFQtdWh7CtVSKRMQZW8DMepXPt2RFJte1UyiCbE1VshciT1eaqd6d1JgGLHuvb2",
  "key43": "LdWcBPzANYCkhFrbC1HMoTQG3azkiZCKpTpUL2PZ5PpAwksHRtzKwC9cAEXPkDThbVVjkJkaKjZVorxeayxu9ey",
  "key44": "3sHzPoAfK84ugKUNudaD2KyUNsQGKtLn2JoNdg7jHRWBgjRnnpb6ENE7zenRBphqdA8cW4FLpqR2nQfpvNnvMcAV",
  "key45": "5r5bbzDJ5cjqGtt2rJynVFPViBFQ1QDaXNyiiFZeUTCBePgDYdrWgu3K5eGujRvDRuLLvmJWLDmbVipB4xgt65N5"
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
