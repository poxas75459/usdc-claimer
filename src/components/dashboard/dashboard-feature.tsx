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
    "msSa6QoKCRvv47YAFpNzSFMPSmpoFR21Vb9AuX1XVzzwEciBzZGGPg4avUwwcFa2jSfF2dciX9Cyq4RiwAZ4MXT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AeTccJKgvDCDqj2JfTZhFxC588e3kdA7yidfXtVWLFs9xeL3rpizSaX4uAPa6KfH4ZyLhbzqmEtpgSGkUUAcjUR",
  "key1": "3S6zuj3sfLpEVDGWucKN5siT7B1EpnZCajSu4qnZN19WvKDvgNwgDBHJBtUccMhJZzWftda5GSzPYvvs2SKd1nyL",
  "key2": "AqqWdzo5x3bN3WaChA3PJr1X8ivQLnc62B7WMS5UnKTSU3eDhLiTiTpzmfDvbX5wwHtS88rG5CmyLATfQgvXr9H",
  "key3": "51o3cQL79gCu3CgApjVdRqKbAyw45Z2KHNLFGRmkoH4gVwTDBnQxXs4aUyauTna5dqwaWGcjJ73aN7ByfMucVf3D",
  "key4": "4CdLrXcgNRz5HrcPfDRbE9dK2P9UFfGiDACkBRADcUAiTCCSMa7WfifKANvLbXPXZ8MSbAP3frGs7Ua2xNB5MH48",
  "key5": "R5fEtVB6bThiyBV4w67Sc3APyCqd1N89R4CkP4HEUugUEgxLUjgpPjKYvnJgTHmNohQBpDG3aL5EXp9mAJzYZNV",
  "key6": "4J4pEcCLfCzgHh6Qp2YT8Bt2K5GcuvubbARTXaGqvty2RbRboS1xW7dnHNE8AGQi4rCpuE1BMPvc2Umhh9kyQmFp",
  "key7": "56GkcZ5rAqUXjrBM4SrdiGAtbp1tdYZkfKeN33fmeppNMMcnJKLLPRTVURXPDVSnW1GThpUxs5Kqcb2sW8YW7Mt7",
  "key8": "4QY9rnG6s894KnNm95r48JKpmco3KXThKDk4Q6Gyy2wDmDUMbchmLvTsiueRCGdvM2pGD6eHLvVqGTtoEtXvpRcn",
  "key9": "5vLw7GZWDa1boE3GQn1qoKgWwx1vLp4dnP3Deg3AuwWaXYb4QmCofbKo55Sxeg4aLtTBZTLijz3THuPSjKSzfX4x",
  "key10": "2ew1UDCnE9Y9Hi1WjChevT11e22Tfzw3HFcKgFQw4AumUK7dc96YaQfLMpfmAfqMGYAAjooWdzr1kpmcPmYRibaz",
  "key11": "cRG5ubcfN4kBZW9dN4f8xpcDXasyAgFG9ZfzZxoV3pbyQbN1J5tnFrYyd5fccLk3Ddm6274Dtmf3y9wsisjsCpe",
  "key12": "5YWK4LyB9moaQpaJ8vHaQoK9rruZAG4oFerSFZGaaqbvfKZVquAjDLVPxoNH31VhvCS7Fhbn2JSxob8NB75WhZ8i",
  "key13": "adCdFngenERMCw8VXu5FbzZF94YQpXCHg7Evp4wgEXBvvD5QDZ72xvwiSTiqSeN2PtnydftWsJQk8daVbNfZPYN",
  "key14": "2Ajcj6dVgQFvQ49FSGNZTXXRHgxvK8zqoFmjxUanPhuYcxhhhC5ESXMvbz46Ceq8f2VJ9c56rL1aiY56RzsVwiNN",
  "key15": "2g8xqouUtJ8kjof7YcTH7YksbH717ogj81Mq9m2nRPKM3d4MhbR22EvAoqv94T2sCTvoGgGcpN8TcTbdBuCQUDhM",
  "key16": "45vqjfCU6bVp4y1R3jxa5KjXhyGBMMPVWAdm54zGFavzp27x17P53mP8E8qKpfZ2DoRDa79ncfjkdNbM3sekzJ5m",
  "key17": "5z8wj6Dqp2ygfBM3kjPqW3TSyPhdL7XdX2qBcDPJzrbqmyZMGNvi7z8K1cpwnbr9A7MYYec4K7gM8FwnHo323PGN",
  "key18": "4jDR9eyvh6AYZZU4jP9hhRYBgRFHRLtG4UDshf8d3QJ8jbXZcVKnTV1dh7KVV2RgcTAqfXtExmZwTJUJYgxzE6fH",
  "key19": "2rMiorzreiCjAKyJFSe7vf4rFEZy3pLrdneYdqhHK9VPnkFAom5uiRVBETANogUEvZTSzQgE2ep1jKxdnVbJHRis",
  "key20": "4g54U1fMjk49NxxETaix3zTCzh9yVEyYWUzxCesEpqNoQVky316eEuj1xEewnfetCCwa4ME59Goc2mwyhd8j7mWU",
  "key21": "2V3MeBdUtC1LvRJZ37JAR2CA7abMbSLugrXSqzGXbBhcB5xvLtjK9YSmVEL7sD21KoSvUJebxKFad7vYJwzNAGGq",
  "key22": "5mCEP8C7LdBeWVRYD97x6eYXtztDdFWBba7zjTuTywJfnKB8Vus4tjT3iF9YAVRiLqGan6LTLeLHGEvqWppjhah7",
  "key23": "3EuSYdcNeU3e8dyLx4TJnEU1BwxYsrGeBinVeEUD21LpqpZ8NZBWHgdLJoruzKpToasVFs2Ta99YEKfxo2FSmQAi",
  "key24": "3ZR2UAwk4Mp97X4qBwafTUptY6ik4xRozye3PYsTaYsj5TdzbBkpGZwshhSNVgRRbjTneRkVZRRwS8FrNuywvqsE",
  "key25": "jNUvdv3WV1PWDQxs4MsF46SuJbs2zhacjhUcTzfWvQeXoGBrrFdipmkTuuRi2PHpCpx5hGpbvmhp79KK3RfnPFn",
  "key26": "s9nEcaEZMAMP23U9JpGfceBCuHjvtZPqfqnuHSMRMkgBWPKn6nWtZKwjYCm2D4iz98zJRELWo94fgRueFpoHqms",
  "key27": "5TbPMVneHmkdQAU9VE4oahwthLkrxv9WWJjdjxUZDSdE8xqhK5QVMPomiujgok87K4444TMTAQac31wJBMAx7CNT",
  "key28": "4cx6CDbZRHigeyeRR6hGrAmFo8pWDvzoiocZFpdfxZPp8z3sgX8jVqmW59Ni2RYawgTkYw46u7F41fAgKiRFTnxD",
  "key29": "38KdepHCo3GqcrCncTGEhpU4HoAu2MLcjAZjEyi8fAsSimASTvYzBSzarZySKcoHKi9Zx54PRV6P4WbkXewN8YVG",
  "key30": "4Wki1z9fm57fEBiGkq7Dy3jDSo7XAoUdVfUxg6w6hZbXRVLjbtLhKnphAc4JSYzsqYG1ZAfJ6MUtY4QvMJCiVuBM",
  "key31": "5562vK43gZRXEmDibF85WLVBhwoqWW6MrtBBWirYr4YL2T58pZmTHeR5goDNkPdnSeVSCN6UTB6rNCRNhQEv85Hf",
  "key32": "3GsbkpvkyHnfFgtsv1RALTZv3f9Ns6rTM3UPrvTZD7aoC2twLugLrRdRQnYjwNrxUoBjhuwdHEErbjBT9PrJe95E",
  "key33": "3kcMK7XYVokLwSiTfpovC44wC2wbA4ieS1WZAVht4aMiQJjhk2wg5oxsAM32c997yDBACzCj3G851qMWgSY3MLVf",
  "key34": "3YbGwAcf1TdwoVbBTc9vcnVz2AnBSaehzNW7qkzU1S1QYXtMCNT8fpnAi3GBnfEotYVJN6M6cuJkJee82mCyk6T3",
  "key35": "ncR9ArNVEWcBe9EFdsDbj8YFncUfoBk1SS9iBPadx5HBFNNBeRjReBVwSHagYeSGxZNtFFnYV5qQfa22X41P2Kx",
  "key36": "5D5QYBLHbAnqhYnhEPDrjJ3eyjLuWce6UY3FjdjgA6BMgihgboxDfFzGqfL3bh5LSw5MGT129R9tdUkYfuA2P6Xj",
  "key37": "V2MM91ZXMmpQb5FGx7FpV2XHkmHhTn4ssbKJJtjvmP8y5qc1BXEj1rEdReZNwEuoUn6XaeYJ1dgHcEsGNkxczfr",
  "key38": "2UeBa25Bxs2Nx8FVoiFZTVbXzRdAXoENBEjUUWsT2b2jNSGUVTMxt8WyWCEFH6CbATtpoME2MBxzecJ9SMvC8Gqz",
  "key39": "UQB5sTp5CVDQZoddavr4vhGPwNvdUsViVJWkHBjC1icQxhyA4XneWC9scbGxPrTm5uhK78e13ntnzivC4w3FCuV",
  "key40": "3rpoDBzMcb4iRaHFoFQi1kZCRYRt5dtTN5YE8dpdviwHUnFc3wTd5fvrJ3nPLyBWbcDxa6hFgk8QNnPFnaukctLy",
  "key41": "2Yno2FC3ExfLzqdNaMTtNAvYyLSgxcFLZDU5RENDhhnjJdrVYtksxUhm2jDV43QB3GXWxzoabDiar16Z3B2BZG91"
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
