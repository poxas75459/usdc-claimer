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
    "4Vie1zD5u3gA1XCrMznqsLnM8MgCVa2oXXK8JDeoXkfEFY5AhoiwojiL4qCd9FModYaaZzTgSypQUueUify1pwHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PGJZFF6fwACbVXvjXQMTEs9ZJsp5te2XW4WaGLCrkgvtLTHckJYCGaqv8xNKXDSLbjGqH9hyDHAvvuvJfQizAsL",
  "key1": "2feFccBqrShfVcUDTZ6dBM612ATD5iHpUMjqZEJtwsC7SG4nNnES5ZuQ2RSCPj44EmYP3R1ReKduvjG837i3DuX4",
  "key2": "42ZHJzqDR49TBJRy86nj63fH19FbdSv494TfxxkTEDGfiDc71eyNtzQXFEeWSGEENnZrFDzyc9BzMVDNHTobHwvC",
  "key3": "EEggfmzUJhR3SVmgspRXhm3YdXUeyHVx9gCJtaLSuN75hL3a8Xsa57MVARV3YZXuaYPrxb9N3gfxJB3eR9TmhpT",
  "key4": "4Ae2zbEXxrRfcn88gh6XjsZkK8rcPDzb1TCJFS2jhBZHsW9GciBY9Fa9tDTaxo2kdK11PjSpCbTjPDbvTy6JBA7b",
  "key5": "3gzA2nicatziCrAAPSKhSroL8uXYy4noVp5fGjVUgMxK3Nm2aZFcr9yMfStYCZT6UCCcCi4zrJfRK9tjw1a7ANhZ",
  "key6": "5AkdGWFcrwTxcKRywwJKU3GhQRTeBdep2GpARcYdtH5zm1xCEJL3SWfM3eh3Ckvo6dkxKYGmTCJ5VQLsxSG2jQYh",
  "key7": "xgGYBimLEN1LCipYvPkHo1sFBamnwCHvbNS1e4jTrLoGjCQ3rLciHTFzG1vUQLYbG2P1haBMpD7VA73kwbWC4mG",
  "key8": "mUz3ttsf5sjXQqcTadva32c2DXv4DbUiMv2uJQvcSj2eSap1BUA1vvgkSizTuYEmuPCHBPpiLtBT7FjTXG6kkpF",
  "key9": "515sKfFmj4TeZs1Dv7voUe34Hhwv3Bfxt1ZCu6knPKvbawgo1fUu6XH2WVcgcMafhY8WzSbs7aXhRzeewknjDgeV",
  "key10": "65b2oFrKyaJxUMdZNCGRyqtudRFGQewbg8TSoWGsCH8XV5gkJnEwgDRkbNBqdQwhs5p4WXpihgCeF1YtExXuL1C9",
  "key11": "ZNovSrXyaZFciB4YttgyyndeiKbDcZ1HeJw6PDUGfBT1ZH51gxNsk6SScinAYmBkN7D8sqVqFPGMovWX9pX76rd",
  "key12": "3bkiHR1R7syfg4Q3q9E5LpKSh2SbVMCSgbd7E5UX9mgtpUFi7XFikxSWVXR4nJxJsTGKJX73rcf4MzS7not1n8xZ",
  "key13": "3Apf5Uwnv1fDaajhtC7S2qTefiWQNBPVxE4ZENxS4K8gR2GTg1FSHQwJ7mkzsdzoUn3cPhjQcPGa3Rm9XCpcVu7x",
  "key14": "5jPaFPwywTD2ipvmbnh2j3Cfq7zcdG1WLwWmnRAWxqMpCS1Km86XGrWvsavG1hFbQgnH2wb3ScFgsm5SWi5k9SqA",
  "key15": "4J9yJKm7xw3kAwH4izBJHXHVPXpmHdTEBcBPeSRXfiLLcpVDdAaJtDhpuX4qtqQvUfqoAbJTNZY8Pgvwjiufqa2Y",
  "key16": "5rTBxXewEsRdcYavtteGzUCXQ5CHjCNu8UCPq8dxveRCUz47wdtEbKGb1Yi2ZKgEPy4AgvJqmN2h7SqYFTA8L7c",
  "key17": "5a2v8BPfM7jZtEaoaRzkd2nYkt7nFvzntPSsq76WrnABz7Nqni52g21JQh1tKHT6RpdiZiNBY4Q1ytpkAbCKecN1",
  "key18": "3uVD5FZxKHNh6srBmCEmfpC8uMp5UiomP9Z69NxGhTXmte3tFkEFn11Y747oAPoGdKCbdnFJMVkxND7HpQBtY1MW",
  "key19": "3oNA1EardRMM8ZUEy9d2x5JA2V3idgiCtHa9Rh5iKVtKh3DmBcUzQD1R3KKJ5z6yPh7y4qEC85SVAsG1uPetNzMR",
  "key20": "4dQUHB2AyPoodHrtuMq1QhLkXmpe2yRheVmCn1pM9ZDxTKorGGcmwR4JKpuSxV2Nu9AjzurREkHmDJkFKM9BKXNb",
  "key21": "4D42GRXxES1SuH74DPj8BMFUFjLLafNXaMpdkoRRMc2h6BfEKTVSEsvJNfiocGwRUV7UdWehB1qsoFsgTjGE5ygc",
  "key22": "5K811fPp9AYyvtFVJefRHMYKt5PmHPpKg6YaWbcXfvtED5B4yfn4WHggF79PGDn2zWAYmu8LahCS4gnzGj6Mgvn4",
  "key23": "3eyuL8dwnn33LDpwCUBUnMs9ghr4N4mniPPFRPM697VGxYPN8bohcnExPBUvgmnmf9V6QxS2cs18tZ2QwteETyCX",
  "key24": "5gt4caakwuxbuswUrq29QtJb374VSoouoU3XCjTEeh7KT2dPEKqHNyPHLDJAYp2NpRxxPrTgRoc9anL52ux8KEgs",
  "key25": "NCD4gjK7wehZTmmazpEMLQEN7aR3diCXcL9drDWhhg2sYorThaiXAS9s6xT7RBdgtacYuLGQdnyjGqHTdzitpko",
  "key26": "2fFPEN8fMsrigwjxLrnVnRdjdzGmLxYp8oX1G1Qk2nag5EKPxbiCZ11U57mj7wxK9bBgtwXGe9oPu7WczTgUxRFj",
  "key27": "3ajwbPVyTLYu3oVXJMGErK1PqYUytaDMF7i5SQbnVPhcsrhGYxEARqyVsexEf9zFZV5hAa4NN12VHXxrrFxQCM4r",
  "key28": "34Xfk4NBvU3nXf5yJPx9PecLNGyVFCE2qyVz9CqcA8dsyPWkFVa71PAj9cjPE7yRzjPy8ebW1yAxfC87XPi7Tqfr",
  "key29": "3HYYAYkbR2UYahpmUTpL8pQsgfEPR2pDdDrRSm5sb2zEqKBEnv8ng3XDLMwnPty9okgutHfRrRUgEH59Fur8poFb",
  "key30": "3CMnaN2zLF2k6FkRL3hdpY8ozJ3hWt1LCo5r9faYBk1uMmKYhZAPtugVZyKSijddia8dMiQhVmc133NVib5DHMe7"
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
