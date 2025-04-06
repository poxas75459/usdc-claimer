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
    "2VPeSyeBRUzdKBmWJVhdWJuEAKnXD6XJuaYE7FqaNU23PNby8bNKNg4jynsWQFSnhM7zchjbeASk9zserTudMwok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aHmShJj4csKDUJnSTRGeELrXjyAaJ6CzMnvjqkjhJ4fZN5p7kGxThbREKV3nvFNTfTxy8k6UpAMbRCztVsHtLsu",
  "key1": "2tEkM4Rh44362gUX8oRTR5KPNSWx6hyeATxkNAYZjUEHHavdirKjGpQBprPEoXeajHasQf7GGbnpWco3y2UqGXd4",
  "key2": "2v41SmuDiKMsWYYNhuQXaoebNeH7HfvLVakFA8iixiBsr249zqqDxtvq6gsdgRn4zcsjcNDR5cqWc8Nu3whLhWtR",
  "key3": "43uaUnCTUqSmLwdzVmhJJ3bQUuYvmy1ijDaUV6eBKy7gpTaxDP5FuFkXpGWsimCLtd6EMmKvoHjCRtwKWvaYwjWp",
  "key4": "29b1Dq1PJvkWpdp8uwmxaDkghWqk8VMtZbcs6zJp6Zo3AWzD9TcejsrLUFtjb2TsKZ8uM3cJ3U381KkF5cuzqFBf",
  "key5": "2YZ5y9MeqSwpfv1wf322zWdpCakMRZKTZQ5LrcQ76ibPeeejrdr938g5og7mGCdoTizpYSedht78AfPRveJeZFgr",
  "key6": "vSgcsHFzyyKGK89uRgbe5yuiW5LidbiptgV52BLyugDCV6ZRGNevtAexSc3zy9HdShVtS4Mqnv4TaWx6FJUPx1G",
  "key7": "5VXBafnznJ1rjQKVyy5n3ujJJA7pwbHw7F2PpcFUdJLFhmradwtbpSoziEE3sEkD84wPW9K9Mk8DJASpuBbKhmzd",
  "key8": "5iTrmiJKoJmV8ZshkCfeQRASKBojpaq2NEibxdrubjeuSySHqNSmZ7XaXwWnknbxTAhbQzguf3BF1q95Smn4KFWu",
  "key9": "3FSygJbgFWvpDJT3L6tu8iGK696jJfTYeE1dPcWPvtjgfkpg8P1gkzxBCSp9j8jsNAtttj4QP5F5QrphE3TX7LLE",
  "key10": "4Jtp2FFJvm6cXkDybfzgEj85793r3nFg62Qd9GkGPWUQV9Nh62tVjKUyALFJXjk8fE6SrsdikgocmvCVbP2mfbVn",
  "key11": "4uBDbYuNLpTAkDLr8eviFJ8dxWigNdvhmaSgTushgEDeCDqDCVhheeUNNk1DfT3SwDJTqCSgijmAbe7dHg3f6Q1K",
  "key12": "3erMHgQBkMYjahZtpjvU6FgYWRKno4G8rZrSGhEDc2icvdVSRaUbyPZ9pXPm8BVuNrWnKSfVsaMCBQsGP2wbFF7a",
  "key13": "4zsJZjfd5QxBBXrYZkCohP7s3FVRH6LU3dox8tohgE3mzfqSpyLovE7SwWZZKzdRmxnWng1EWVeaZtULxvCXDti9",
  "key14": "36BTf3PZh6hHJCos9wUB1SXFmk3UhDGdehFXqDe6az3ZDh7FjKcZbnyZjmbJ2phE73EmJDPa2FLTcc56pWKNPvY3",
  "key15": "2fcjtNdjE2oxbmdkhTUGfJLeHqVwELhyvjRRqy1soTm7gXazQxhnZVPHhFyadq1SbrwXGxJdvw9Y2UTBHBUG4UXh",
  "key16": "2ujffAQrxc7McmPw1fREHtVf5fzRKwkZpxcMC2sGe29w5JgCT92Z2vhxcWCbbbdbitSWojak1KF5N2wXBbPRSWSf",
  "key17": "2u3cNLxKSzi5ndzzfoCD3cu7dDuWs6BabgKCEtf1XxSzv3bM46pP4iqWwwtKT1tWy46jcnPACXKRdVmzNb33Hptq",
  "key18": "3ZhZ4LW2PPHwAR1RWaeoxqmR9p2fMSnBW3K2M8fjvgCHyYjrmbJdXNpUvMAN8jYfwTEWFSyR225dA5GEGvge3VY4",
  "key19": "2N4V67akQF2caBJ8nmXmWN922c2EfkwrtP4FJQY8htEuW22uzvMmNMtpMLkSx5gLtp3ZReq6rS6qGAEPnEpVYQGs",
  "key20": "4uD8jpXgMrTisfXcPnBgdhLixAbdxG9y3quGupmUVdrmKigsRiLTeoRpa1UyEdQXbRz6AgL9i83WWtr6CenTbAEm",
  "key21": "nwcaWP5NWnCxyZqJC64p5CdXDqdQ76svFXbHtKXPAmC7rwX3DGNg7uPm9PcBGavy9Cv2fE53q1ai3YxWQuVk4Ej",
  "key22": "5cowh8QraFiKsG6fKzGAQuzMLakweDPvr3azbCtUz7FfWC3BEqXxcr7XSXem2LHd6X2GsVGHdQPneVXwgSdYbR6X",
  "key23": "RyTE1h6At9Qdw1VofycZbCS8wHQJuLsRjGFnsE2t93YsaNRpHQDpLC8SSNHD1GAoMHHmNpw3ejAJhJn8VGfX2zi",
  "key24": "BUSaYsMAZqkRZV8JtmG162cfDZ2W7jBkYQuBhAqsPPtvHq6hWErxRGJLzSDm2oC98wJDiMyULTPHoXxvFCTkdWk",
  "key25": "8ZrBspbotzBRcXFpxwJ8tD9AK4AEiKW2UeP7pMHBXs58TFRLyryXJFHfGCwv7hmmBwFZiuG632AtdJisE2oGU8x",
  "key26": "4JgrSh6toMu9AjjCsvNJgq2DBFjj8Cmk7VJB5UCui99pZZDZiwzWhDnG3Tf3MjsNaWJggV6iEXMJ5MmG5NCxRc1N",
  "key27": "Qx8rTnTSULedHy21NearZ4UuUD1RRoQdFrvrPzxLX1vKSMeDtz4hSSxJvK8WQuPD7mmKhpMKrcxV6KW2BVFUDWg",
  "key28": "3VV4J8RDmw26s9dxexnzNM7WjH4ygeJAzkPrPqdBocP1sMHmn9i9cbCtzU8mfLqvTxmRMruMeKx34Tg1YxyFoySu",
  "key29": "49dYVNRYCWQZj436VtKspuiHbwCjZ9hJvtbJHHwARjqrkJawsDWxop46hZTGXbQ4G6NTSyf73YHBwMLTCxbjoVp2",
  "key30": "47kfazJT8KoWno2zTYdonsrbWKMCFvdLjn8Fv1eMsGtbvGEQ16nRsBNZoKxLqGxPuQKJbhiXni8YHfaxLY6EeubB",
  "key31": "4mw9jtyq92SoQxX2EA44Qg9g4XhFkoPYmZwJbSbK5F52R2u2FJ2UdbeSf5uSUzAQbico47QcGEZw2WQ44CHRyJSN",
  "key32": "4Huopi3c4n3JJ1ocgZPvmhZ2M4xeDkf5RC1kpKjYb36NFBHDfvRAsjkyTMsjfymiFSzuokiSTqBgjDeumciqzy5i",
  "key33": "CYw2e8LS839DKBxAGL27VooCZw2YebMDYbkqgWUw8rB5tGo6EWQw8sqdqxL2gywRBjAWRcA2DNyDfXH1f9CAWY8",
  "key34": "5CPooCew1sLctnptjL8cuhFKaqV1SBCXYnNDGqNuZY9Wci35A8LjLEA9SJ94VsCQ2Vkd4oUw94wB3WCP6W7ejLvA",
  "key35": "2DNAnEgi9cwqRxF41LzntgpfCNnrkEGDLqtAHSXv1isRqYpPh57MSGCAtzoknYcRh496eX9fp8MKFWErE1wkNqCp",
  "key36": "5JxUPWuUx2hiZNrgpkDkYbw9qtZbxJGSsu4yRR53dbMdBHVq2hbJBvVvzh2szdQukYhpR787HWgtdSDfubob968Y",
  "key37": "2HdsvzFJsmzGqwRPbXv5oXAFQh1fJeKSgK3MaX2tRYndV1ojQAUDxhtgjfSqncu5H9kcxus6CBHWbLtPB6vatxHH",
  "key38": "3NRmVL1kV48ZwCE1PuodNNMXcjhjr7Q1mGT5QWhH4v4H2dy6YjBsXkEHdsfhuChxnF2YaZqW7wy2fFV6DTktkEHe",
  "key39": "2CJ6PK3NYXFNCCq8fZNJW5eoCrR8SJ3CB1r5oiREjwjeotJRu5DUE7oE31tZHFWstxhBumR5MxdhdCC3B824uz1f",
  "key40": "4T3HLfkpKrssAQNJPXMAG9izCxfAN2fn6NgEaG8AmVTvuj4BnqmyB9wLfT7GxExhxLmsf7AaUEz5SHAqHvDBaHan",
  "key41": "5eXFNHBs5XAfUsEvAxs14NumEP35Z1ZjkwHrMm35AeAXMoYMSuXC3yfo8aFtWgtLGhshcU6BCCVwrdEA4jGKrQdg",
  "key42": "3H6haK297K2nvh8U14P2oRZQdVFP3C7SErQb9NpimryJCdaEYtE5VxWCdedGrg3auQRiSf4VENLAShQ6kT2nqsmJ"
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
