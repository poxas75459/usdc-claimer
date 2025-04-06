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
    "28hA8pQTT2JttjE72syx13HpMZ3Nd44PyBLg3EGWxofp4ENSBia3QjufKGRPNiN8iiziuEezjiaBvEey9Lnh3BuB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bvy7trCPB9PEcyReTocKR5YzzYKkD12QQVL7KC4izCPubNeh9ESJStGZQ2PXRZg5VxTNCMQGXSLQoBLJ7W8bHcu",
  "key1": "5MkVd2SeFjFXKNpUDonxE7o9pdZX2VVh84sMKNXsj4u3JkHxSr6cv1rGWCRjQP55Ao7RDpEjCKmH29py7RyvamdN",
  "key2": "vRnBk841AKKu24HGgx6a3GF2LpwD6Vtepyvg5vuenDdCoTQ1fD2TjVB9bmoa3ophUC2DDozwQavkYcGz264F8Yd",
  "key3": "5AuYE29E7TJHZ2zJN6DYs9Lb2Pt6AGZZ4QEA4uC3jjThJj9Az61xzZd43MTxTMvzNC9KwkKBSKZKtpRwdaQYsWJ4",
  "key4": "48ynHumVbQQJYRAH68rN2tPHxpsWF2iozFyzfJw1Ak2pQBFJLAJpUotCUPjNYebhb6sR8fkQP8og8RsV49PXUgkE",
  "key5": "4xX4UEPWPkoCLZR62t6wyAJZfgmoqeWwu8pk8qZb3esCpHNYcFb2SNNoKHsNukdEuFzRMDjmG9N64sh1oCX1BhRk",
  "key6": "5RHoW7zpad3tE9ecLUyeuQn9jYYgAXRzqF3ZVEZ1752MsgrMNdrpCFwhRQqGTVLnn32xSaE59e4A19WgrfH8RLAm",
  "key7": "5BxMK4gpnPJC3urj8eAyK9EihXYejGm9Tj2cQDF68MSkVoytTyyE9EJeQWhnugCUNz8WU83bzaWBuQqa5XmUU6gB",
  "key8": "87ZsJkAqMkrFSxVUuQuqVdJpTWtj535bmaeS7XgLwZmfyidWJPTaB6tn8WRD18QuaZPFSKeR7BEuj2hgPpUr28X",
  "key9": "qrzoSJRAh4h1mW3xb8b1obSkAnG8XjeAEDBZjkCi2bfZwnLpmfY6ZgXBR2i1vgn98rgUGitfZvSTNudeh2sAKqR",
  "key10": "2hgdWVHQpeHm8vrauwz34iRaUbV5B95jigotqyUmrd5NicgrScYmZ6qRCsUNEHd1ek1srFMbscgCZJjPjaAL9o1z",
  "key11": "2ERwy4CGGQmYobgZd96wYgGtQkn8g7rZadxa4P7f7qQ5ksZtTqs3GkQYX2swbvPceuqnKzxS3xACNC8b5jPU9suA",
  "key12": "556e32fVP2iPHafjazr1s8P8qBXNQ4FY5M7zWA6dHYL1hxA4JWsAaRRnmdLH4BwMLw6C8yXjLL3RugZMuiHacPFU",
  "key13": "on7LCNLQRhAkQmykSZyAqiD3DCm1fTX8TFXsbGhprT4CLDRxfoRqudRu8bHGKBTheky4yKG5AEeUVZZmBR9yPCh",
  "key14": "3EZXVmhbpaj4jXZYL7ntxgNKjt9L1KveaTMbmrCHGVKiqoczMDs8TFngrALfKNtcLgCQy6S3hRz6p8MQftrhu1Y5",
  "key15": "41Mny3349nXTMhwC425p4cpbYKtroLnjnGNrctbxb1NhVbEAphA5Xb3KMyNFaRMsuP8Lz7yuTQFbyE4kuNnw8Tut",
  "key16": "3S6HY9Uw3kdLSau1njECYeYzFcd9dgaMLKYH4aBiHCtoZwYpeurfBEVB6gSZoweq1chaRN2KxC6Qa2JcX2fZ3XT3",
  "key17": "2jmk7GbwoK6hjHNobHzUHK5sJKn8wJ5py5YViZd6BKVsL1Hi11A2oBVRBeRAoaeMYP6pjPYJxHFwd21s9pdAHK3Q",
  "key18": "3hBJDxL7ARFR9TJ8bAgkvMnFVPDrKWx2WX169iWsX8WWDc9x1mk6YoKpEWVi6PcxcuS6e83nVXqDqJWnvinLMLAG",
  "key19": "43q7Y6no7hTvBW6DrWRBk2Cn1caSEWB9Zpmoi6XYsrrbk2u3iht6rhQXFrV37F7KD7Lwt8CshTzpBCrEZAUa1Kva",
  "key20": "5tyLtvJzSnKc5oYmyDQB8hvppfkmYgAiSN2YoghcJATtWR746TRFo1ub8Z6hB3iGv1Wbur5G2VqrKj1K9P47zC9U",
  "key21": "4crEHA6bV57pH1euKbEibu9HRpE7Bpt5NpDxSF9sW7eknsUHXSKDW2cUkmGAdgmtrWdRdEFAUL1G4DZPtmhBHQ1Q",
  "key22": "2wq3LAMivgQnhagXpQ3Vtk1jRboVSbhYhjtHwoFt4hV8zDLQx6VVWh4Ec1RXR2EUtyXEgrXAVa5yKugVDuCfSEh9",
  "key23": "4oBja4mafz4jkr1YVJWtaWwGk4jjMvFfpBWyPNbwXWUH82qDskYH9AeVueuGMdWfdkn5Ux3wudVSgrFSGXFp8w75",
  "key24": "3LQoGPPUbx1QvDUtUcViMCHzy4DtUXwgCjPhoCWbTmDXhErf2oVcqjo7Ty2Yt28ErR3DnYHtZWd89HPBgBwfpj6E",
  "key25": "5YUR33SJdxVnA4rcqescLVzkUVPhVmpLyd6fgrty5CidD24okMzUNrXXCQGCcBrjiVtZcd4NYAht3D1GmxWzRGEw",
  "key26": "2uEoRPJi2hwJ81ZcHyGVaUNnPh88P31zocQUqb9tBAiAHGLvvstWdVSFfMrwyXkvG4i4PkuBhot36iHancCDaX7A",
  "key27": "5zmFxuqLVRoM4tYsTdkaKTco5VcahvkfmLvThWmFsvjDY5s9iEQGgbcXycNaW9kiFwULEGb57fzzodUf8ytkVKbX",
  "key28": "3qJdpC82aYcidaDiRNoJYUm18z5S53xL2f1LyEXe4Y8Fk1MJzNJSRSvpuaPTb8vg6Z7id2Di7iEzFa1mR3doi5PB",
  "key29": "2RH2WU2WWAh17JgvaRWH4v7FqiRbdz9o5fLRSNPmRUcHKB4siEfb1GZjdjafHnxzz3uhaU4p75a4JrYPovoQLKbw",
  "key30": "23r9wP8PnUotD9dDSK71f7B2Fe5cno1UuBWm8HdLEYJnBZ6r8P7qkfBrJhftPojMTmfu5NR7Hy29amW5Yi1kUwMc",
  "key31": "45b1mXq5gs2TFFGQ8BRQ32V4VQsbY6FwHUL6B6yjv7DmEtCSmCffaoR4bWrctXdi842PsezUGPf3Eq2pDcsgLT5J",
  "key32": "5F2EnWft9DnCA4q2jdziCfokndZpemC9Zvgn1w8JBw2WFc95AUEg5Khnc2gLUkR8etfjJNVsignz4AWVvEWzZ7wB",
  "key33": "qS1dCGHZVx6WwJVtFjaEkDzzM2ejRdv9Q3kSeG5QTGtGzNjxKa3JSThoAiGHhdz6WtDLjW4h92Hjoehrid6UzNd",
  "key34": "oXpiNQAQLP2oceXrwyytV1oec37M9kFCFJnuvZpmad274bP3e8rJxeNswvcNnK5VS2i95bNYihCc9iSYBaW95Gm",
  "key35": "3Fzrh2mJ9he9kSkh4to5qtQD1PEpFFttVTYLrAkoDNjj1qUsYvBik5sitd1yPt4czkkjSnMVWC27wzs7SbfNqCT9",
  "key36": "5bJZhDMT4wKJm1yADycDg8SA4Zbbf4xzLq48YvxhG6Es99vgyS2zLDaA6uoVvr5FhpB2WqJPHgMXdZkg4RchwTeo",
  "key37": "4QVHDjAH2qHUonnZVV5HtYoYdHSXE4kxMV1BGyKCmupw8cxAZwv3UKDa2TY7hBev1mqKHtfgyPTx8JnrkbWG2Sn1",
  "key38": "3TWY6SpH9iGzFdjQ6zqUbwiGcgNXPKMviRfbW5KrV3y22jNJ9c6QaDK8j1xaGBNjSgYBeaq1b3iAfqNFTASkAkrJ",
  "key39": "3mUJBwQrB7A3bfVkhpCFEfMFiu246Sa5t3oAWG74ovnueAeXE5RT6kmSxZthVcizDtJvhJ6CKz8WK5j2SfoaqbWV",
  "key40": "3PcdWsGDK1CJre3SQHzLb2KiJg689k169NkbGLrSbfJqpwth9QyDKKRs6u65ZzJfWEBuT1o5yhmhA9wC3DodoKZu"
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
