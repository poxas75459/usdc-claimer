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
    "5CQmp7QrucoBAUgpAoVUXtiBgv7x7xNa3H6FNjy3J8m9umU9RWkcFRT7TRJT7ypYGVkF6XZMLVHoghshCu1wyfRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZPUZAxQPgK1orzRzfFRjX9CVCZqQHuj2FwMrb67oxhD4jiCBadCYm6TQGhwsWJgHwoMVqN7VbvfrBi9PZ3GKW9F",
  "key1": "5X7XL23RNNadRtTo3Ni4rJqGBLXGg1d4o1sccEAYE1oZmkUUhnxq5j5V5oi6y9FwAzoiGiNuWHUunuCo1k9JidUy",
  "key2": "5JcGV8zdg8vCNktaunMmamqJAJWBPJAvK6j4xjTuSwdUKhumzymHXuiZNhWfXBcsZwCV5a8A6zcofsat9RJoe2uA",
  "key3": "iFCkrWVqfZeJY9CPkGiePeZPXeBcxaStG4WGWg7kSqZU4n5uJGycgEnUWKWrEU8KpBzVK6NX1oHASENRDH8Nsr6",
  "key4": "3i6aNRay7GLt6wtMtBdvaABEdb9Axy3GNsaUYVBazCeuDWPqnLx41CEUKCKVuQM8PBw3XwxCVxLHv27ACvYNn2Ek",
  "key5": "3Qs2UjZD7BNr5myvsxJEBknP4ySTX8qcdndrQqyQXMmRbm4vKR5yTtmfHNQkAVfeztxzy3AHpK5L8vyNvoDbmB1K",
  "key6": "37mCxdw6zzs7ZduFzZJy2QDp2VRofGxu5rKMZXpMA1xuGffSUFCaYEkkWPcHiX6Tm1g2GmEyqWCEpM89bitLYLkx",
  "key7": "67992qRgmGUVQeATLfpvg8gSyHuNb7vgPdGfg3ZXqsFQ47AFxss4nUf1QRFEFWU1mGueyZDTFhGvenkyyRa4M7A3",
  "key8": "4zqUQdPrgxMm99xBMfDnHqzar69aMUg1hHT8mBozczFfX9jEdtFwn9h3HTX6MavR9bT38hXAKsob8mRGXgZ3PaqN",
  "key9": "4wQMsFnu1QEnUbu65S3YUvy2HddQmvdthrFciu9HTEETn7wyd2iKuYK1iHNv6EAqR3u2QwQnHQFWPEB8eVgZKDFc",
  "key10": "4B3kdGrTcnVdR4bve2EjUVzUKstvcd1UCwBP51CzLw9vvSka9chefkzVkwSG2geb9BQMpbT423XobQKdctSVYpkV",
  "key11": "4aiXj4AA9w1UeQVhbBnq5mRpFFP1vTAJymYJw8vxfLf8BVFn6NBTbN3UBpHPF2p6BM1AiAj578wcpsPcjv36Wd3P",
  "key12": "2aUxVHJ2u2n8nsL31LBXG9SLLReMa5oDhV2sV1EUxDSsZB9oMmiKW67yvQT43eDCetRx2R6scutx4vvEunca4gQ3",
  "key13": "4rnWmHYswap5r8BpoNxNeTpenc5VEWfx68XtrTZ1tR8Ms5cUVdXwMi4PRiGXkudkXqoE8qW5aKPABpBmvYMXcLRL",
  "key14": "28uZFT6gZTXPk2M4BzBnnS9PJkodNdjDHYX7Eu1c5LvEowoyTXByPF6weFeTcCbi4ZjNS31QkxZxhWauDgEqggoo",
  "key15": "65rChKadGPNx1321yFSb2rnUNr4yYJnscXuBLQN7yyE3TUk1P9sesZmyErKeZwSkhBXKkjtPPAiyxAQpnuwqBrV3",
  "key16": "2nATPJ7zufW43rz7KfmNgyfesoNHjTtr9sFJBDXXLmj2QaiJDMrf2nKwhp3MsF6k9QeCy2oQN8ZkJSLQKHATQXzq",
  "key17": "ffnpKAyn56yDDf7daCeNbYMJDGKY1YdQrdqctXUkxp5EN3CPMr9Thc3MNN6V6m83AhvrEqQ2xkGTSMPAoR49EAf",
  "key18": "2kGP9MjuF8by4m212HLwiJSZoNxW9BKChm86u1THEmWbgJMKxEirfBYCGKTZsRyyk9EcAKRAgmd1fRj2B67ojecA",
  "key19": "LSWUKe2Tsrf7X6b6huAxbzH94gqoccp9uCdHCZtzE5jNkWK39zLroyUYET8NdQJSYPNA4MXs14TncQeEyVBqEC7",
  "key20": "3SrLKYYwv2gcR8hDCts49c6uTSFak2WD1eNvEryeRPovrwkEgxHD51o3LnAwCL4JRhvsJJ5UHYYfCYGzHAkHEkFm",
  "key21": "25pYhop4n5JtbnTmypfBw6V4B2ZVzHyKuwUPzKyHxXT95qAPWni32UtoDjCvqTADj1xzysy9AUSN8FeaPrMQubTL",
  "key22": "2esSxjemtm5McjzaELUT8tpG9NVCSy7tDHfeWu75qhgix9qDbbRQskKPn6dyYgmzCcLFB55bGLCa7zrjV1q7jD9k",
  "key23": "58ed1fPwuiPpox3diw8n3upizQykJ7U2omdSrhNDUmV9qyfcsAQQjzamL7XRHrUDKMj1uNSA7GpfcH9pLx8MGuRN",
  "key24": "hPqXm4aHGgt3PaKHHcidm1w9eHbtbkauhVMZp8VEKdVQ4PqYNgmWTUr5ebtriRGqmasYTZyZJEvt3QCreVVRTV7",
  "key25": "4RShLyGYxBheBezHRwVxA7er4Y3B5iEKhENHwDmivZFdTipXzjwD5dNfTUazMt2KzxhNJ6VDNDvvb9J5oRV4gMP",
  "key26": "a3F8qSZpu7f8GFQyH4hYCgCNAGCwsZzpN2cMjCK5KGEUKbeTkDm4j63Pcn12R1BvwWvi3CeBjSNANJ1XuAumv5L",
  "key27": "4z7y44ov7ztBMWXqrbrHMX9VuiZhLcikwiB1epaA1CJcUo5SUFMkLcS5xQRAYAVS6YpNyKkaoFwFPvk33fxa2C4j",
  "key28": "4MkFmPQzTGXJ5pi6aUEDWJ5eNkKdSyuHTLmaShjYZ7V8BaAvjCsQMm1y1cLiBizN88EXy8BbYnWSB1FxR6NUYM9u",
  "key29": "5gcQtwX9cLusBBG9DEo1XHJj6rbWNSMJ2x6qPoh1o9pgAEidXfWMVr83p1x9rrc39XcjHRVS9cAEF35tJZFZNwGj",
  "key30": "5KQ7JkLnzZtw8ku3AvDAVLZzSqquopLTqR36KYYek9yG7MzTruT13esWoEW7RdTm28q2iHg5rRhLhySrGGF5Kc3P",
  "key31": "4qp61ShnsBbkQ7C4Sm8PQbQjXRqn1YSfMPZfeWr9axCowK2gpNPoCsdKtufUubTG9UPXGgLi8kGUSYsa2ANdp5YX",
  "key32": "2AdUENYWkAPMhrt2M1tDNgce9H9Vz5jzaL7zr1SWDR6Tc5ZK7sz2bnzRZ3jofLo1z8z25BeC4boLW5HpEfrSjtjX",
  "key33": "2Y6AMbnjNawFcuzjuC6e8ze6aEyhHTiJ2tvyGXmFLRVMrcLMeyGPXkj2ddPeUxkmSApWsCfm1wJKfuNsZZvh73eQ",
  "key34": "3uQ78r8eSmrX41GhKeSow6rx5pLqDYfaaHVV3ca1gwRXx2uLiZhpZ7v3VVdNDpNTpgpTcMhWLXq5jwyGbwE3XDZH",
  "key35": "3QKW4M7mrYQHpHAGQjMrS3eT29WMFByCw5HWdc2HWnSE3wUuMFeWxsCF7YqVWGkeZzaG4eGLQuUwQ589qpVFBRCE",
  "key36": "5pJAdJt4K51ZRdoxQbhjxF19hHdv2dEZu9QCkBjNRRRJDDRqYuDXVV9ZST2KghvoENeR4qZ5KYYuscuyqdoZQqPj",
  "key37": "511hJTK8PWBpUT4At7QcPtGvGLmbsMJabrvNEYP8GHpPkFYbpJSzdw4cwtmo4YDGA5Mko9knx1nnvmmYi6kZVrAZ",
  "key38": "4eePDif9U4UcPZPRUvSTD8YXVdiqeNXiBU3Nxp9dTjZJArGmYmMaGFMtfijTBfd6LJRND1xg7M8YmZpMvLNoUAEG",
  "key39": "SAV6rpFNB1rbVGvqCUyUQ7PDA5mTorTUTur8oe2SGwgD9RWWJgYDGtmQUjfDR2BzqC6XFLBRTNTbAFZvbtQcEYq",
  "key40": "4j42u2RRJxyTD4ZBHNjAv5njDktFhBjncQfTAAQtWUc6bNH4VYBS2oRNnrAJyHdjRf77PVmvfduFRB3Cm4SnBkxk",
  "key41": "4WHAzaL8sadu8ubZPK5GbMJjsqJPe6m4Sho2qcypPoEbM5hUnHggeaGKgyrT9dP593SqRt8gGvZEdA4AL5AcM1LE",
  "key42": "eh6wvRQebutbZrfJLDywXFU64pb1QBDpsRnvfyW1KgxL7HHkN2ZkWpq1mZABq6nF67eDsn6PcH3gomHXPdLvkbG"
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
