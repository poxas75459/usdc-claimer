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
    "S1c9KJTRMJHMtiLehaGUzsyShPuZyhiJ3ifFrg1TXtq7Kzai35aLZgREiu1hKuaphQoN3vs12tx4mt48wLvTJaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fy1yJ26Rib39Q26AAFw184o2cdKwC9bJfz3eskeSzNHQDkKiDkuZgPXde6zGTcwP7SGfZyu4VHx3cuvdBxtNQ5a",
  "key1": "4zEe8biJD59teBT9kJhMhAuNauzi2PPJbahcLzpEr86HS7GCPJx8u5NuEHTeZzax2X1mCfuAEooy6WZB1uEQy2Xy",
  "key2": "4tMiv29CqtXiCPwFehuW3bd6VipV2mby7M5dFAwP1kTuFLdVR7ErTozFGmTjB2wLkM3sryYDsALHisqezYyNeuF2",
  "key3": "2LqN4DSddfv4ryo8QxaAwe9xZkEPTWwGPvY4vW8fatNuBt9q4A1avnkxz3rCdWGpJQYQZbYzzjvwk3S8YJr4duMJ",
  "key4": "5azACm8xi9J97VA6XBwXAtXEQL2X1ZXw3SMydmoeStxcALM87iDSrQ9vuGQwh8C23ZSAsYdcMsth7ELNkFfbmdyB",
  "key5": "2bVMxyFA4emMmdfkyhXfNU2zA2P813PXVqkusVg3G1sHcgws9AiBehtRnnnXf8KdmLx9kmVXViynUYBT2YTmeDrC",
  "key6": "2tm2iLL8tBGpxee57gZ5UxoMCufBvor4P772TxwM6rZMW1u5WtSx8mwjm2GQAhKgD16k4DeV3evshN8Y6BMuYSng",
  "key7": "5cn1EvhXW8dCQ8hA3uUinDXyGkYsMBoLGvs7fjjPALadrtbAq4HG6F1JhS6G3DtXy1cEpUcPh2swNSTe2N7g11rR",
  "key8": "5MDS34aEto2EbLefoYRJSrMznwWNRwmRFp6Fvrrv6ZuiXGTpu3y2C1SnKM1SypiBLxS3aMg79CAgsnunXH9vKZRo",
  "key9": "2vMXcSRtBny8qZbfJjcJMXMR3QQd2U2Di9EW6h7rLGfBmbNCYGuimAeV2MV7ns8KFfcBRqb23KFS8CbiihqDgadN",
  "key10": "5YesT91qsTbmspzn6C4ndmgjR6mUFny2ZQiTfX52jnrQAhpaP6HHEu5pnBaQPLCQUwinkLZhhmC6mZbxh7hwyTGb",
  "key11": "5NCATyxqnUFoGWgU5Xv49qNP8cAsPJpEChEpcQ8A4jPeUv8KyokjdKfCXnTVaS6sH7dB4Mze33xouiMBfB8XN85X",
  "key12": "3sKuu3ku3jZAdCVv5KA3VVjPGfTEntCcM9Kg4FDsFwmny1CD2buzQHeU6XWuTaBVMNPvWhHtFLkN5x3jEoLgwUwK",
  "key13": "4VWD3drodEZEFghyur4Dtn65A5LU43tgQDBN7U9ruiAtGJPxH79fMP1VLZ3pv7KXpUZxqfRSQJ9SnW8qEof7fVQ9",
  "key14": "V6uEny9mroxYTMvk1hUNKU2estcNcCx3fQZ57CJyJnwngvmXWqLGwcyLD3185c9MQ9sQpaNbsRfMpFSNDYkS2vx",
  "key15": "mQm8z9xio8dFX1C6bf3rVgWEDzyEr7RAgU1MWrk5u81Q91BfwScontMDKgDNxL8m7xrvtg66XWi1fTQuGqobH45",
  "key16": "4cwfhKTsokDkqGKSf8sxeErKnU3kj6sK5LB9b3trrQyHKkAmZUyGV9UXdkBzFLZ36QJ9ACfC96T8hvCEii7k8VtU",
  "key17": "59tgtijxzfMG4hXP1kibBRkYfZyH9YxVB8kZQbXBFVq2ea3Ygs5WhnjNNYRhVTEKkmwXgC2eb78oTR3uS5cXHgc4",
  "key18": "3g2MMNnpFv8f6FAiDTFcr2d5VkP2c1HQrqTac1eQw1VsSuefgnzvGqi5FtNskg2ko3661Tssbm7wtANbHGSueWuA",
  "key19": "S19hUL7gW9Pg1vCKnUVgSiWFA4hfXS5W7qrC2VJuDQZNLSs3ZAen6wSHfxP95g7B8JrrBfsybdeNSooVgtUadqt",
  "key20": "32GiC7DK67c6q3L4spBydX58CsAiXHGpma3FmEMWDpjbNHuffugjRC3Duk6cqNn8RHfnMb4bWPc4g194QdJiRdyG",
  "key21": "4pMpcJaFMX1gtc3LQ5hNibQyZmR7eG54WjwxvbDNguPhMbuZy5LCggXBv8HGE3JW2DVcBz9N2As7fetFckGyAzpb",
  "key22": "4EYTb5UjHraRznDAX9WFKwfMPr1aDGzaCfC7g2PhagpAgdZrguJm1wmtMoBLoEzfRnKyjZkZgEtQ5Y9hS2CaJ3zJ",
  "key23": "3PrFxRKxaybvHRvvkS9i14iY3ReyHwhGSH4Fa8BioF3nwSdx34bhegb5Hx1uR5EjDP6iNVci7MoVFm5DqP16Fynd",
  "key24": "in2RRiGkwPddJwjQd4nLoqVyyjhtA4TbrK2pVGwYJX451JH1FyS8dDXZAMdRXpmFaiCx5KdswitJ4uRZRNqZT7g",
  "key25": "bR795Vg3TmrQGZyHzt3EDB8oHv8jjZ8huvdowXF4iLqfS9k7hVZCXWTr4BkW4KZgWyUVzMr9bg4iijY7Jw38whj",
  "key26": "4mtMC4K7wnPtgcneoks7hx29BHc8AyW5MWYaW9uZTGN9PucEFH7aE1tWZgkGNwWnmza1pNheYDJ9AieiLadLJPGm",
  "key27": "4ZNeHqRV7P242Kfn3bqPBj5CPBtsAMgd59eV1tNEPvg55Cr5JPkYFSQ8sHK4rJEALhJmkyut3pz4GW1L7EqN5siA",
  "key28": "4qihYkQHCVbMdwTpGNmtQ7VuqjqbPNakTUKZ5d4eSMUse12wZzPz3VPxk9mErmdXHwngRbAuxwGwLH1nMvu9APSg",
  "key29": "9XvDzCf1odgU5ugz6utFCm5UNTkgXS38CSwXtvEeoHyawetSmbRWaZqpheEyYawg1BsrZH2E8zadqhbtkgkptgc",
  "key30": "DwtnHtoeQWQJeybKfpqbo5QLsnfbJ7nGrKz5zyHrCApwG5WdMmJtKibzxNsKLEHzVQAg3iP6EY6sCXMyb3hMkgE",
  "key31": "2Ysg27XVnW5SiXFXxaf1HnDoJPu3ntkdrq7NnKXQSNBgViMENJHp7itwUb7nEzeKs7HSnXFcGwNmhDZQukhMCxnn",
  "key32": "GtqKFGtDenmctkbwv9128ozsnLkEJBK7PgSJSLa8WXorAAr64gfwwGZa1r5AnCRAB5pNNdVJkah6B58anuX9fmv",
  "key33": "2jFYL1gHUXjKBzQZZfim7yEJ551t9fcZuuuDb3MFCXTiVBtb5AXQSkk85877uANF1TykJcXxaPPm8XxdNVdiMTGb",
  "key34": "2w2JQBPAqSfMJXxyyv4QUD2UMZURQ334Xk9Jo8G9atU1cCBBb8Zsmn2kBrypNmmt5dwUJB8tL9LFyUgcyWd9oRYv",
  "key35": "Mp2ozGU6dnViEG8PLCUQQZtMoVVRVZzu1U33eqcQtqkJX1zdppA8nPB7zMrGNGyJjY7MdGBmg9dYJjknY2J6NHx",
  "key36": "3BpCgj8i5LTdA5vbmhJHDKjHcFJMNmKc1EKLF92aamKiSf9NeKRuzx49GodYFoSk5wPb6oJJ42F3AmKgSe7CkUWe",
  "key37": "4sqtTBtFBWV5JbTuB2VHkpNKSVfMnXn4NZgD1tQmuDxZZx7hfVqq7tuZjztc46XswNqueWp4RDRJK5TTBRTtvLr4",
  "key38": "4ZT5SgZrQJquDztetMfDDBErt9gCUE9wp2y14xc3H59iWqcoi4EY8QxWmiAojyHzStmoV2HsFq3c3JxoJ4aaRZcx"
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
