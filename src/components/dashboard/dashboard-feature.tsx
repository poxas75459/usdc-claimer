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
    "3LDtvyK8iKorzwZEnoRhECWjjavGNDKdiDrnsW8Nc4HyTbuR1QRbsBabtFohWY2aYkPMPsB2upJM4PLABfcHR3Wo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zp72TvdgsF6afhuxEXZ714DQqNrdf2cLd3dx2ZF4qFvrviAG6XdSsafosYCWAN5HdU73ZsFAUJbHEVzjVXvXEUW",
  "key1": "3jZ5vg6PfBgiFLVyBs3Ms8JDQeTssfZ449sHieMU2BQwHGJSuR3rMe8y66tXQReH5bKu9UFD5PYmxcDN5v2sPcTt",
  "key2": "28PkVFDyMQGXhK2QzSu1Xa77fK3u16kPWDRr77mtMTrWpLhEqa6pPuLgY265JQ2r3wLCrQ3Ra1zeLc1W6YarTySo",
  "key3": "2JNqgzCXCoTkYpPNkVbiQ9ysDxdqPZrCFE2916XNWRjAqcuAjxrg2qoSdbQyfMHSPuVJW4c62YtKQ23nstbfaPA1",
  "key4": "28nBF18DfeGrMyG95G8DzaWeqCS7Edx1Awiw1N8epsxrw4J8XAoAyVLpnz6zsUWGdNTELMY6TJUTcnk3vs4iyRXy",
  "key5": "HTk8WSSfwe3hcPJgaufMRKmGV8XHM99faoHJRtksTfbxpApwkzMJJfZ3rrQHLtDtStG5fnsemRfEepZag4L2PcQ",
  "key6": "jUu1ZnNDgUHbX8RUquDmQ7QeB5yAa7jJYfNAbpvScqpPYqPcMhFwfGFvBACKfGMwt8Cc5xELyi3LjhoeYGMup6u",
  "key7": "2eMVTYWMaBi3JUiY2AeeVZpAxdyUGcsDtAzqKu3n1B3n36GCv3UEqgb9DHDvXRRbDtfoFV6oqQSrFx3vT8CHMkuj",
  "key8": "2T83PgCw5HopF7TrjMWfWmWfc5Amp8H2RvBCFqDgrCK8CAshB9vVqDbF3eSqstqgTyeuMZx2hTJvkFzEJQqYDn1f",
  "key9": "3QdeycKisvKnFZnARcnoPbKW8AJMcH3N5roCiWaSvkW6vnr6GJgcBbTJb5yhABjMf7KPNBmuMyTQv1dowCzWqbVL",
  "key10": "4QsuD3aTTF3hhhzuCNUrEAakiKUKbAFBXXF95Tw8dRZeQabUT8LyaAXCXDeejhvtrJ3W5swTLkH58JJZJwEN9x4f",
  "key11": "2dPKkSvZQe4tZttK8rCeo7fmKjUdfaKBusHzDfFt5jYfxLc7JpaPoBZFnFCCES4x7RZKgapXehojhBFveV6ZcT17",
  "key12": "43huBU11DJno9vDKLGuvBq92qAda8wacoYEY16ox3hpayDdpqjpzfvodFADsNXQHJA5DyQMuyJf9Yw5jdWfsqon9",
  "key13": "5qfTv6hpkZuWcS5AHmakpVBWbsG1Qw7jowm39f5aY1ed4od2tt9UPew2P5FVuZPGWTDU6dQQU2YcND6y6EzjrT24",
  "key14": "3b7Hih4aYerC3TkpmDJYMaJyS4bwDoQhxKEoLg8nh1zgda3pLCLRQMYbAzB8Rq1742z2F9voa1ggL5t4HSLmrpD3",
  "key15": "AteSrUgo4ywppMDPvHgkKz9ePfUwVNyDKC2ac7XgTxJeRDTzHop8nMHrNNh9HSH9wniPYwKvnEqU97VtZkMw5TK",
  "key16": "5EruY7ssiYHM5VfCnLDuSa9AdTjJB79raDHuZan4f7SUWM9A2nvEVt3be4hRo8vgxFm3qSBKA2nRGDaPx46waRX9",
  "key17": "2kWTn1ruTZ7KUiKccRkzQz7zUwno23hXPXS9vE7yDKJLmaXMBppeywjiskVRymSudewQ6MCf5C21vbWbjstPxvyq",
  "key18": "4NvQvu8JAtfzaWB1m9QDGaP2paZVWmptJWUMtWNbkRWqpyGz8ZvRyFKMpaNwMx2JFoxUgfaunJWvmxBXi8NKq76R",
  "key19": "5dyemiFiRP1BWgLDpTKbbdtBCJM3HUTnrYYwBEyUDJeaDru3X2HJGD75ExogNrSdzcuRiyY7vg3xCaZjt39xKE7y",
  "key20": "5dEcqpjN3CYwCHeC2pqydNgm5L8AnR3fhxVXGYfMueeTzVjUA41skafgzjHiJyjJH13bauE69SdLecM8gw1yiRi2",
  "key21": "3G1tXs4aX533RnwpATh8kpSXnFt25DVuqYYKo95V8A8gFBifBCtknzFWKhVNV8RP4gvB43VTadDdFTT17EmDGrjw",
  "key22": "2DBVdMF6GoL2QMVNRAfEMRz4dsfFK6BC3ht5BPrXL5FnD91G5qkuq9SiMKuB9K6y68PqZ4eptDJkcDMtWL7JCgW9",
  "key23": "2fkGrA1nsA2G6aE6drHewvCrEGf8z9CmR67YbRM63SCf8ms8eoXSnyJatgMrwsCQZRRLkGmRbmtP9XrViVXmSdTA",
  "key24": "5zFftJezuRo8LszM2adnL4qBFLjcZQ4DjpDNDeqLawKz5mE1YK5CzHTZWuert4JeM8Ggz7wxVxmrvr7PuWYCpeze",
  "key25": "PTUSXyUccex6CR5FdM2jZFdTrevKKQjcP744KyrDGN7g9Nh6EhGCCf5Rg3uavrXhxnvGGGBij4FBm9jecFddYaB",
  "key26": "5JgDgnxj33K9M7Vk5roqWmvoBunNPgLVJCH1ZtDYzXVwRcshh9jzTiXH8BbvBuCfetXHmW7oDFJvoqFtctmZNJuT",
  "key27": "2XRF1dsDjZmmCeV8iw6wQpmkEGGSCJG4XN42fw3vTaK8gCLA1zZUasqqVJAVtAm66kPvtyM9WvKSiFM8udU9TwRr",
  "key28": "2fW453LQ4spVfRdt1J5H52gD1ep3TazJKBSHPMh51dxxjsEYRujtEEoN368qCK8weXf4ni8BAsPZfPPwJJGkUWhp",
  "key29": "2evtgndLcdMXTBMfCRzmrFRRKv3vrnojey6GMy6ucPryH6iZRvwxqVht2c24LEQrv8BBHLPo228B9q39PpHUJgen",
  "key30": "2VwyDEqS5hRpKYhdb8Pz6tvKKHKnWWmccRTwWwjXuFHaub4o6fdjxBjy2hn6sMKMYTok4A2CiiRQMc7tTQtnGfCD",
  "key31": "5BK3XYHfAvZuVtH7dVLraXgxDEGeZBBX3dgjcRz9nkJQfiBJywW2ecUCz38pQkXWvVxnAnUjdgU3Pavu3u7tvfaa",
  "key32": "4tneF3tqWivvjJFzFAeJsMNiBUymsq72vrmy2ojBfdZqi5RknzAkudAXBagob1p51sqJdb5tm1tUkm8BFzQyEh3x",
  "key33": "4Xs7TPBibBjnmF2BuawnnKEjo9SasbhuiuNGTooercDJstgNgEpJkbTQoj8scQkPuQFFf8W37D8Y7qWW5XQUEMmg",
  "key34": "5PpyRcJj5mAcV7odpUpvWJW8xV2NpU9F5cBmYHES3Pt8SDfCWxA2CzpMuLV3aY6L2JM3UXin1nrn5HKeEBygf8w2",
  "key35": "2wX4jAvu1fquoec59yBvaFBxdeiBKNCQZ2THJ9ymQk26gDUjhB5QFnnaKfGdMqadeBEFHManUQ1BqAykHcJife2y",
  "key36": "3UWZkJp3MVsLddt3RtL9fgSifDyf4djeN1EcqffVS9LMpVc7qBbz1SVd8ZNBSWhFUQ6nQDDwocV25pZFZHSPRAJ7",
  "key37": "47cSQTQZTcFvyRTyAxVfkNMDQK8Kxb7v6ndAbfnj4eWPpex9fDBHaQ7fBgmFcFkQHRfRTihf1xCRjCkQoV96ZyJx",
  "key38": "5vrUtEkgR8UsrX7YptKEY3dsChdnWgX9C8FowFooBb17dBxGaZhGntWXwfLu7fi69UG1TYG8eAUFfLV9GskkeT3i",
  "key39": "4aZ4DAPHir8tJAjtuxG1BTaCSFbRzBtqYBUPed7seRmrRpfMdHEUJ4CCa3xzPJH6WjFYaRKncZRxioXsp3jRUB1m",
  "key40": "wamVP76ojqESWPxeW8daWfQn5HcLJP95Mxg4SV3DTyU4iP2B5gNiqRDoeVr3ToR783hFcdYPEKzF8FbQvQiGxjR",
  "key41": "2hKMxWnsQDweYZLG86pd8M5pzfgHwvJNcKWH2fzEMjpaxwvT8yp2U883wRfSnJJzYqU5TeQY8pAvL2uXMy73GGzD",
  "key42": "5ahStLTmWejUX2f93sTmGoufytvSCa8gGazPK4dSYZAdVcVUUhVpjrRnVmu8DGa9etDbWqBE5TUAQ5giGu8d6UiD",
  "key43": "roMp64zNma4hAox6qJ7V6Zb1gLqQQkn3YnsLqHxWg5WM87B8tX92Vuj7WDXU7AdbCBYmhrrJk6jJ7R8n7nKLuAe",
  "key44": "2eC6Gvgq4sxmJufBLzLZvahoAevHJA5iejKvDJ8Tk2EJ9aQruEo95higMwbLLyryWT1UgEQVv6rQqe88uzGAeqqA",
  "key45": "YVGHetxRhXnuatCHAj8rrNMwZcJqzKZbjvwmvzt35se17Z6ohgZkp9EHsCg3FwhXhoY4HHsPzSnqMzk697bGkQK",
  "key46": "5oCQ36CJKbRWZquq6BEb7LNud76arLgQNQ8qoJSwQ4c4ncRHfSBGt8apVHD1x2azbzA1kZ4b2Xb4qe1PNSmH4w3x"
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
