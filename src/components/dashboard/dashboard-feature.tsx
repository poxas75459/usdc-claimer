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
    "4mZy6cKtVgx8o3TWKcW1hC7CRLzXSwuSJcBYmc1PpSSdaTMuhEDbtkcLP82HBB54AsAMN7uhTDZDi7gWGxM7BtQK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eRou77j2uwSwMT8vsWNXud3kFybZKWvJrXzLEnSVXtNa6rT7pKW9cTde4ZiRxeeMSxfAESrk7Fo3KCRNkw5bFih",
  "key1": "62Vp4m1gYunE6WLy7npBmTTAcEfm7n21umSBwn7QWcH4XqNypkQxR7Zzy4p9urbAVAMRF3poZUgZrH11qwR2uMxh",
  "key2": "4BjJ4EaAKmQXfABKpF2m2oHXWLj4ybYCMADSzafEBRJizNgwQts4tm9aDXkvoCgkaKtzDSpVuBFvv6cu1KiVT2Cn",
  "key3": "276EaYAmL2gXJCDh53eECdjTFgpttfKL8iMMwDUg2m8YDKTiCptTW4MLofn1f7DL11xyZ7KkBpAMGQfFfsptrbJU",
  "key4": "s24yRt5dVXBjJCuAd3oMXjHejZDPJNnEHYbxjB9K6rfW7uPT9eW6HPRLiNQy7BCNW2DSffx9fr4g9JkvyY1ra5u",
  "key5": "E7uVHtUjhYFGQPfUVz3kptgzKPhGF2f7TGHryrKAV2MJdbhxfSoXYRcLmWYjCN83hFiTfeotbVmKEGG3LQkkqrh",
  "key6": "o3VAdXFrmKRkPj6cuRhDz2aH7uUT5ARTCm9RVPzj8pVZLWFYQzAY46RCjhFcXopDsiuC9oHHViagWxH6QHS8ydk",
  "key7": "o5DiEE6S2TinKRzsNmrfjZyrjrs68w6QvFjiPHvTfCaM1QtJWDjk6tDZqNrkGfxjX3cy3SdTjqeZJ4GxqFDATpF",
  "key8": "2fTHwTi6KpsVPTn5vXf9rJVvAS1mvy9fWGtRTuzKT12HjhgkezUJfaZP11RyjKzt8tAbDPEPjSfvHSEYA7ChL6rf",
  "key9": "2nTtvTRZ8f7euDE5DA4UukCxJ9qhdA77LDWoPQ9auNpBuhodL3SVVitBwxjEpH3CAN2Nvvfu9V1buQpQ15vT7cn3",
  "key10": "3LCUKAFrgDjc9yzaxcjonNwxLWEqhkQET9t8B1Bd8NQmtToSgNuRmtpDB9Nz3MyS5VDCULSk4SvM5ZWFbtszva56",
  "key11": "4LDxDmG7zqrxNgthy9oeyvfUmBWdPGV48bXn4BPcCBVprWmbny7UNkBsyoWTzvEuNYV2Q5XnX1Kg2vixh8g4Zj1R",
  "key12": "29F3ma84e952e3GhZFRrSsYh5yEvkK9uo1bdGtEGNqQeAkuJiHrnnW4P1xh4REyvT4GNLcHdeRBtJieetsNyCCrD",
  "key13": "67aN23nSDF98PKWiHTnLRL6wYPBZAdaHVLAFmrWVAhAdY8fb2xY3hmGcuNWBiBAXkDejp5bwDP3c86hRw4Sf6v5A",
  "key14": "4hmWFiTKT834QkueGhkqRv3RC4cEoL1h6UnKniF9dwq7mNjQHcJJychk2Y9Xc9K7bMMfx2hG3wegX86vJngBUHfW",
  "key15": "E9VkRCZ2EBJNMUiU4TUGbSx1xb8m5Yk2kgaWQQFV815EesBcT5rDpRfhSQqEEHJCMBwtntruN1JjRK4owkLdq7g",
  "key16": "5DjVHrVKa3sKj89UqBdMCYRCcd8uxXPsTyKbzqJzLkTV7AWzUZuSDCRxVeCLAiGVLMZWTYKWZrZSUEnLNzMepuq6",
  "key17": "4ar1GRbMAvGg7wj62gJytYGbkDgmBvas4JAxAJRu4so4RoVfrUuAgn8mYpc5WcYMQuXh8WqTVSKZHQQdmotCktqb",
  "key18": "Bz3kDRR46s8YgSUQGYebiAa4PQyEEacgQ7cPauU2TC9hf6DuaS2cUzSUv91XxNhyUpnQhNFWWtFxocPTGm6a9D4",
  "key19": "tD4wxGkqL8zp7Hc6urQPDzK5Yr8xrLWNygR9upodqoGLZhxy2JXbLT8nbcaSy87NGCEXKBPNHQfN6MU6QWQxdqH",
  "key20": "4whPgs2KAaKWgeVhEgyRSWAFnYgw4Cs7H9eCGwmg6sbLWKi9xFhZXUSNVeWrFtVdGrDa1Baq7iAuqfzM8RARMHEY",
  "key21": "4MEZXoqToUhi6eF2abbNC8FrmpwbnCx5WbQypXxHhMovbLXXgXUKWx3QxKJhRnLv4FgTivN3rPfTPNCDCQMy1siX",
  "key22": "5RGfeGvZZdYmyAq9XrabevTFxr18Uoo7jAoxCBrPHVivEBX7JzLAqe9xvKQucu1o1UppcKqbyMfg9wYxuUWQnkXF",
  "key23": "46a7q2vCjqZvW4qQ4BtBujSP1XGmegezHyaVP6e81Hw43GctBz7aW5awSzCTDcpKkjhYwkYfyEAFooBFrW7m1A65",
  "key24": "5rVw1FKHkHPrAJWt1SGtyowB4Bz3tfuVrAV6Vf3TZUQ3ZigdxssSN2Cgs87BuZpHDTuiR1VghWMpDVTstuuKDCZ3",
  "key25": "5UB1DVxqRtDYdXDshckmJjtzpeXbFcN5erPkgBLtL92ERSo3iAtQp6uqbgVGprGPsCe7WVZTJsirnjbVAgBm1Jrt",
  "key26": "5qpKVeLGTdyWAWx31HwrKhtJ4mxzAWJdbQkbiv4rW53WxpqEGe7z2NpLawfrMkjoQxeALheNJu8PnLumVYRCpkN8",
  "key27": "38MRejv65NoUTCARUsMDFL5aYNsh3dbgg23gnpR3vFF5GnEBc2RTYHMfKqYEs6SRpfK7ixr2NAp2tMahLQytrvEr",
  "key28": "Va2CxwzJMGooqwLYwCvuTkoedNbZ9VB8WBiyoFFD53nA6psB222AgZbBZGoLc8EJsJU4HUqCHPoFqXh7phJrAaw",
  "key29": "4TMLwk3WfzQ2TyWh7LULVANygi89gisA1At5DTv6v6gF3RsULvtEtXwsadJ1aXTWKpfyYjiotcSKcw5oyamZSLCs",
  "key30": "2SQFqqehhMrJQudLU2KPvRi8D8BCTzvgBebwYs7BgkHTykThxWuBJxsY9WR84qvqyxaAGKxBAZNPvBjB35PMdTLe",
  "key31": "7XxLjuNNjYGvcSupJpD1zefhPi7B1u775CVjMuxXosFc4UvFdaEBkaGCASa6AQj6VYfD5MhGQRoGhc1LXg8LFF7",
  "key32": "QjSF7FCGm6wqyHNifwUtteVaRu9LWRDKxjpNhxpdTfzEsb7fFEd5U1eMqT52mqXHHPDHNJicRAzXNmnqpp17K8P",
  "key33": "3svN7kkSoMgAKGpHAPCVcu6nNkQCbrdFQaqrkisZHG9BsitVA75S3q5JmBKYUTc6xaeGodCTeymdaDTFY4MLCBV9",
  "key34": "2WitmoAunHWLpbW6fUfXDjvqDcmDK7wSemhTL6MQkvPbQiTBjLBAtpduMkmkiyXGfNSkrSvvQe3ciCjBbK4aQFhi",
  "key35": "iqKuGdjoSVAxsdJEjyJykNDBFQSgF167Bndtwz8aB8wH3JwLwWv9VuEFmQipFmYR2kgENR6Wiisopzhejed6MGy",
  "key36": "2XaFMmb6yrCx2bPmCBs16pQUwRqTLjAb9YaFPDm3fhGoE6riWoEwauygx4X3bkPTv7KX1Nfoe8tZ6NBqf4rKJD5X",
  "key37": "2AMDuzQXcQoGNUBJJhtXxeT8jXh77NtWAEMS7nWEkma7hz83rxSfss9cTivUzN69VyA9rKdwMEJuRp1EFZP5LyHK",
  "key38": "345YRVC3PRkrHTZzM7s9NxaFVEigjzhbXq9aDnUz96CrUpGuYHzEUMMvTJbGVAS5h1xzuyLPuvPpQdmpz2L9MRFw",
  "key39": "4rUoHJFrRPNzPpBujsbfma1WgQsxTnrGDZYsVEdarSBzYHotVq1PFAU6LjXJjgUhnNqT4bpViQPULXGWn9xLAXZn",
  "key40": "4X1WL1xG2XYnyELDMWt5RhZRgknUse9ZovEYSSbzxNT1MUHy9xYzcBJvou62JbM1E8ku4RhucRYdEGFpxytuVeij",
  "key41": "k4Cn2VdDGjC6G4jjXYDcHUPANpiXGa1KXo6wXbE5S95hiynzoRH47xjjP4iHgqKKeuue5oS53PwyepDtbjAGNGj",
  "key42": "4PG5LMJwWLuvYdcoqeQn5Dp8FUVLspVePiRsvkm6kkSe18zDToK1tEgWurn4FTSDfVdzEtLeD8FcAUjwgwXJh562",
  "key43": "F68XkpGBQksgfjWrtJEKkP8d8ctQkzaLWYWnd2LWtQPRNyVnqqwwwoYM1geocYrJArsJxcYtjNjdM8MEuMkJRcE",
  "key44": "2SRocHExvn71KkHNc4R2qW99uVGf8SWXAkZNkKY9D6eo3mNXLudQ3XANkfodKQ9LKjXVsabUuMWXy6UgSJeHaLZg",
  "key45": "5E94fk2PdKXowidd9rNP2Qc4Vc8dYTWpaTe2R9Ze98kwntbZBfv9uynrEz1618g28DmzNW5rdjvoMrZNCgzMigC8",
  "key46": "5vptKMH2PCcssZ4pwVy4qdnh3KQjrMRxvdiPY1wBUtiTKaSouh99rh5b45LQgnXHpCVo6UtkGF7UHGYWHp232T1n",
  "key47": "3tJGhs8BsYuvt6VLQ7pcWGabgHuiZUw3TezwA9vShNyeXaoPFpa9uPaGDkNUEwDEtTVbpxugth3Pt6FCho7WkFjM"
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
