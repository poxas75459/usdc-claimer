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
    "3BP8KnyxeuyU2xb1rgz6D3kYsosvk63cJVrmgHX74DUwVoy3gH997FoBufNqyw6aR8caNdippTcnMmyGM4zRdfZ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UcTncGbN9CZaFfRGHt2E3HCqhoVZWAHjSJExx1ZB1S68VWtVBWVJkj5PpgPN8KihEzzAzRxMJbwqdYwXMjjx8UQ",
  "key1": "X3eHd2EEAEYdWMLMBjpkj5EXVpXmxDKQMRNR9TRTbcofcEdFNU6atotS6AZzPvvTYyLC3FN7JoMiUzFECXZdeap",
  "key2": "3pPyweNbKW1fj3bAaTBY37xFCUzXfaVTWtEwSU1YRHL3zUVEhPyGTRVpyVBriXfWZpqrhbd1MUvyZ3X8UJY7dDQH",
  "key3": "37pJGDxra63A844iuCWKDoirkyguiaWfG56T2SkB4gd4bYcjQXEoZCbC5L73KqnFpa8Bi2KGccJti8j4uaVKuX2o",
  "key4": "pJW6buZGhEhd75Q1XrgbpwW2frHL8zqiW5kCCwkTfgasekQFX4qsaBHjKe9iMAS7xAvLJPsJLRBrjZQSiCz7Luo",
  "key5": "2aiU4U2uwXhUqLoyUGJLRcQorETEghbXmeQfvBbjw4b3f99B1YmWUJXpYCaYtAawpQUrBBmVePnLhNPhrest9sXN",
  "key6": "46JWC7hwPTnrY3eyREcav3aggiUzMxqvcBfKQATkpEUiRZ6NioZcwG4jpcWtCuhESZFoffoX8GBuQGjduPsRoMCm",
  "key7": "4Uq5xT5PqxdswCqSUNrs7beKycEZSXTNQLSJZMh3vNJaTUFfmffmeSNsMWuYGUxKXBXZ8wWSpcCrJRNpNVETKxF1",
  "key8": "5nbHGxiAvsvZhcxwNhWh3D6gxV1axPXWVDW1nvqCwEXVddHEPPVv1oSXx1wkbUHUcSpvrd17P7eAbBenAnmQVcwM",
  "key9": "TmEaKRmfCuR9nTKPYeNmoPLCuTSeFUraxSqEAmoiac6VrCBDxroY8iQHDiiWHuaCTXdeAVtpfoXtbVUz4Mi8k7M",
  "key10": "3pCwd6wQkvdVFDbkumkP1ADfj3yvbPNofMndwdtk4kqPQUtZ1qdP82QQTT2Qj7GWPrtTBc82qKroDsuKf7y2cNLg",
  "key11": "5yRs96cnTeU9wQcnDDLd6YFVtaG8N91TpEhkcNpKgo2JhHhjcgxLrhEtmLtMYZwxDW8oHYK4CjPSFpfaCEF4icYc",
  "key12": "495u3KAHF1gSQZr3mhGBEjFCcVvBVGGnorJ5LurAgG4cDrEae2B3DJ4prgGh3QUwvmCwR4tYwoXCHNmPFPpYQVDM",
  "key13": "3jFGQ9Gy4GmvPDdirnnmN6KwXzDzHLnLCoG3zwxeLF3dHK5isJR6zF81oJ3jmdPN98GMrcayYxCktXdSkKqfxkHs",
  "key14": "3TaoztKMtnZbyN8U23adZi534PLCovfB61u6WFPgecEvQkynaHLJ8VtDshKPSi3UG4e6ioGay1bwXAXBVEpyXVT2",
  "key15": "5ubuoCoik3hFXE57oSwz5sDwjkDed95nYUvCmgwpHQGMWP3XWVPMvziiqD85Ecu6wEjMoMHXRW8yDd3Zidmesr7U",
  "key16": "5SRprUVvQoxk4ADj3cXaPyXbgFLyG8z7bMM5R8hTEk2Z26MdRMSukSxVRZDB8LXV2fqQTc23aFDwAoB6U5PLnyPh",
  "key17": "4BYi86vx4MXWSd9ZKsNo11LYMVEpGRWvJpxu9Zq1RPJ4bUWUxm8Ymir1mBVkUPggmhVYRncJkY81U4qBpCXDLkGH",
  "key18": "4QRYFRUkuLFzPkcB7wHBv3EJL2wFmDptFeuNgV8hxvW7BiC3fNmpSZyxsvVHEuzVm4SoQLtdQPpszZ9X8To6uaid",
  "key19": "Q1M7q2Eroc6pqwEV5WZtPQGRBkvxkUgUUxnpfFdWfemsA53raXnf96bVCbbPGcKHKffpB8u1XLFDBE7iD8uPQx2",
  "key20": "473yzKq31zYNtefRDmicy8dnVYBm5nK9mVtUM8KPEcYw3BfUM23a8P2J3kq2J6RdtoWtgDEUYhHcMjNbE2WhTwQr",
  "key21": "3MHBbhN6H6f9nfn2a3fsTRvGCDgoCru6SB48mhcTpXpHMT411zgHnzGwNG2MAQH3ytwJJTAuJMob7F1yGffpTEp",
  "key22": "3DaspQxt9bAw87V2TUM7V5Zz8xAvpwwVBKbvB8bn5pa2GPX4CaBw9Jc4DcBSG6Bx8wDWMqVumoZC4HbnQDAVM8CQ",
  "key23": "XLQe1DupvQwG3cpxd5sANZm6scnRoTQeV2VRPuYNj1zzRZWonddzBiA7Ud6W8YZasaTRNJNo1PXhHWCCpKGJMJD",
  "key24": "4LJh8drbjAy7w4L6yaPfm4E6AFFUXeia7kNtbkuTWNNjk6dVcYJf5JPUh7K6fPqxTbntx3LRudw5TnEZMSsZfw77",
  "key25": "3X2WhKHmsf1Z91JfH6k34GhiT9GFjcttX5mj5twpc2QrDmafRvmvg4DBACSqmWEhan7BRruhRHDh7txhc7u9zoXG",
  "key26": "3cEzpdB861edauigbm5iixmWKxLYV2UZBVNf9JiE12zg6TyxQvYd7sSKgA4dSEDPSTeEUq12kh79kBDJWo2zWkZs",
  "key27": "65Gd6opwkBduW7WzPtqBa5uezZr8bPeZ9EQFYze472HMA9JJvDh4Y6PmjEu719Eo1JrWKCFmpchz94UABNVpwqNC",
  "key28": "RKW8o2PJLYcp2tHYq4WVbwWiUNTt4GvWWqts1Ent5YSuxt58D7sLty7kqeiaNZRLgqSA4oXZcTESN8DHfiM65hz",
  "key29": "4Qn8ZuJe8Txfuj27nv8Uo7bkJYyhDgtoG1SHePpEAeN3ARTE3ifD2u1YGEiooZx7XM27xy6arqK992ewyh9nmitC",
  "key30": "2vH5x6V9a8QN4uUcyM1iHp3FpdDtGbPzrfKL87htb3Vj8EtPHgngifEJsdfvuFUz7MjST6JrZQcrMFyoSeYhBLxE",
  "key31": "59EvWP4UeGEu1uHuzA9bSDLPizh5fgY1GtxACzVyCcFzxtrPUkpG98mTDdinYQc2MgYB4c2MRSQkcc9cftZS8hwi",
  "key32": "2QFCmB1bckbS76djHUNsyWfmWuU6V6vqVui99oorCEAvyGdBctjKQ32ARe5Dsz2c6hawWgGULpLdHp7yBEpKW8AD",
  "key33": "22MwuWvsJYmZ7WZG751DveHY6AnLHq3cwo1dUWvrUVyJHZbyy4UxtTELnDXo8MZoUTFUSGy75qtSqFcBykhXxA7K",
  "key34": "4NG6kYJaXe8haLBXcHEvyBUHjqScmg3uFzAhQftoQ27SGFUAz9Gr63JErtPX7bgSoZtUWM1c83vEC684fivWHh3a",
  "key35": "3p16rgidv6pDGWf2tkvNpdGWwgg1QkaXTLvt4rHgi2ryQcuTRcnaqcDuScbqYCQojqkCT2K6hPo2RDq9ggtbbq57",
  "key36": "2HnTB5TW3hDG3kjLMdmVPnQStwxMMQdqNCbaRiLMHEDA9rT4xi3roksDpsPrB3kX6g2XRmzLvMWKNQe17R3WxPrf",
  "key37": "3YdYpVh7paYMdkDYFhATpN2gsS4j7cjmv4ytuwQs23QswE22wwnskJygCvzAeHr6uQbtkuniwda5MCKPpL2tAA1x"
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
