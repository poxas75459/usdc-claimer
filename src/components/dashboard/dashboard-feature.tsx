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
    "27DPNAs9jGUjoCVnXGYADu6eW62GxVmyFZ2DM6Z7TR9Dkd7ojBXKBmbxEZkTdUHkWoBRyB8LcUuXWSr1iNoC6EGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V3CaeZKxPJpF3MXkn3eg2aZS5jFEKSYNQwSii3ZiPYrxoWCFvaq5cCywACZLoM6j6rsrtNY67Fmtu2LQvRJRM1U",
  "key1": "4D9gtLF8rMe4E5S3hmLvAFat9Lt1eWwPBDfoqGykiF72vnVR7HYqqrRpZnzjVNDyciw5D7nvEd7hqXf52A8yJvx8",
  "key2": "36piz2cfZRcwmLCGLSRHUk8khhLkUkRXywgGxWmdpDQWbhBfPz4j2TjzTYFbjzXA17wbPFqCsT2Sae94yft8p63P",
  "key3": "3tcZUDegQpME5ST9P2G5NNAgBPfS4ULbZiNQWvFTjVDtozfyB71jF2Jp2gNWWHtqYs8V1MDeLwnsezAp9Ymw9e3y",
  "key4": "5y1dxpqRnHYXRGtUvd3Z3D6dRf4mGqZz8tFxMnL6jw8ziyRCYZiSUikBLVdbPJDe5GT8NtYu8YnjGzbb81Dam2Yw",
  "key5": "brWPceuTdrPAkv1bqEv6hsZBCN8fC4Yr7xPtaJdfTbuEm6YpLvibZ9WN6sugA7FgazSt1PF2axuMcYL7e9t7zZz",
  "key6": "5AsWBxoYbQy4m2MphqJJjcKghCJwNc34ZZ2wWhnR5aq4iwK4nMViQp7tYmcS1XNBzqvgFYcZiTdPjfJwdMk7RXX",
  "key7": "5fTEAudVT5F4BrnjbR5AAYUccaAdd8zt9eyepFS6gww62DxiNBSumXTKwzW1edT3t4nUZqbXdVwgvhRZ2Z8nUJuM",
  "key8": "4Ybq6ZT3ajVL8mDj9XqoBV8LPB87aiWT9C6K59TfzD1w47FxMF9SceXo6gk7cY9mew81U5GCJcLym6YRqaTj7EVv",
  "key9": "5HFPRCzJNADmVriXN1n8JWZNAot1buyy4F6p9DmV5W9KNPExHmXCRtHGirTVdJrQxzpAWaQWpVKJobtrpccAzqBs",
  "key10": "2DAFCq3hpDAs6xCfMBVhADQgSYWtrewJxegfQSvUDSQVeSMGW1uNBANCYZAERV2PcegPpzdKbxX9fmLTe7w8TyX8",
  "key11": "xSaodJ9eNjN78vmbRCMZnpdmxKNnbDy6HQDVcPFnGyr4L8reMHKeEPzwrWCBCtPc8g38R9t2srRSBxH6SNNNuM7",
  "key12": "2gQm3PRbKoWb758koobvPPJ6ArwXabkes43GDr3WiTXG6pyva7QJYGd7bREq1pGH5YbMK7jusxvGY3XbEg91UNLx",
  "key13": "5PxPNhb8LR2cEuSsnPTfYvgb627GpcvVWNLNZD2oQUBbFVykJEpBgsX6tMtn2MCRkWg6ajgD7GFRwmE2iuWgLfyN",
  "key14": "5Kie2vGdT5f5hk7bqbWFzdHtYjZyadJhKEGu3XGQRQyKgUSfU6s6VeemCUpDi47mzpJkfHRkcAYmsBYPD587xYkQ",
  "key15": "2AiqZYTqkWipKfDKyNH3YAbdmapo8dLqoEp5EXsrvLXeoqJmepff8F7iHacHhPmvYZZNBnoGVmJ1tvcjzPe7Bdd6",
  "key16": "bBarsQBmfxbkwvC3NW2a9meHTtDkDx7nkaGM8dT7FC4sN3B9BFRoABgPBLzbxMeEwomidYfy89Qnnwq6GqpUMPJ",
  "key17": "3h5MEoiSU6cBxFsTgpW9K4mga5kapbQ23LcoEqiV8xmn1TGNYLnvXuUA2579upcjhuXuY2WHuYd5tUuzgqYQbtF9",
  "key18": "3P5fJET2ZbKWDSdT1euYCMCUFUzNTvJvjDqFNAzxxWS6qUJpWo3tCcuCHqLy3yEtNNsHCE2vG4G7QQgs4fNrBorF",
  "key19": "2HkaxES5CyfapDBbge4ZoBDyutRJsr3gtwKeswPNGYVwFYMe98zJeaStQfXmApRu9vC6k6hGbspGiN3MqTNQGgkR",
  "key20": "2YZMRxoeAp8KMSwrKn74y55yLGJY3W5HMKdi361wZZY4vqZ65a3AK3KFeCuNYTpYnaWFeTM8mRnpSpUABE9V6D5v",
  "key21": "jEMGSWCiMoNP2ddJ1bPSYANPnR4spn6AjaopFLhufvaQo31UhGTtNr1UyzC3ZUTMVUfsuqsUtLweg6jDebvxRig",
  "key22": "2DuPJaWKxLubSdjvAUvqTstmgigTBxdz7SrxuhqBfnigawjMHjRqAJBwp3DqH2j7g8RRqoMDSku2FkUEYGwR8Xia",
  "key23": "2ZwypzrAJq1wkuiYoCpYPCDDx7pMdKuGcucyEWjtFbX62vXdS61n8r1bcvbiJdsudQC224zW7VtdHDVmp3QJmGHZ",
  "key24": "5YjNZeKLdB2kAbYcNzuLL4BkLmseEi6pfLRhUVUa7HwMLTvTSkeQF3zBhggnQ6CusLWMFr8ykG21SzFovxboCrpK",
  "key25": "3rvxxY5Y3nYeFsgUnvqfL1NvYfrXmFaqeFevk9Pk8E86YJy1CquwHU3wZiMrJ3LShoj8h2D27kw8WMXSyiTojjJB",
  "key26": "3DLLrccMdp4ygwad4b5gdQyA5z58sYhS7yyR7xhxDh1aTLBXMRCaRTuw6XL3e77XRNL5Wn2QQDA7xu4MHD7CADW8",
  "key27": "5zhCH7AJ4B3LXZ81rs1PGukAxCmUwreGZPNWcWf2kGtp9LuyYmCny6ARAzfMBXvDH9rGwty37eBXKvu9yJnLiUdn",
  "key28": "4DtvZVEDZkNpof1MAo7efUHmZLf97u1yCSSn8VRoJiZCWKym5q9NBXS8ruiBYCWMHG31YGYVCWAHoyZsEu1m6vwx",
  "key29": "67qMP6rj9NiqJgkYNWCJQjPFJHnkZ2EdRc3yed78sW47ktjwfNewbrxwA2UPnBFZVmbtSgwVaTn3E83D2UcEh9jt",
  "key30": "55RcTCUUvYedpLzkhoqfUG4J9ShYj7f4xuhpVws5uxwQyW4WGxJubFkrxvUkA4RjgcapDQvRrUQXrG3bSJg5FySE",
  "key31": "3gKdaAFcEmjwKGWM7WpKnUvqc7qQgnRbUWuXSN76gCZjg5RVtcvBHftFqu5rw2VJfzjLoQAJMcvdBSzmAyX2zMQZ",
  "key32": "N59Fzc3UWsF8GfnCAndxwehLzQv3sTbqhtVMzumq97qrrmXUTDNCF1xTndsn7FWYaGodqnyBTK5QPknuuNiGxEx",
  "key33": "4KJtzZLQ4ajXKEhVNtCZp9LW7fUomGV6CYRGiQ8uZKGV9bwWMdmKybdtfrxUWMy7TMWsmMNNxLAynN9oYrXQFFGP",
  "key34": "5qe6mTAUbCoL8nVWVZUGDURbK838XGhU5Bkoo7yXf6jzKhGynkUotGFhhtiBLPVJUXPugboPdnvvMpFUc2U86Mvo",
  "key35": "dGhGnrpEBRti7PDZ6936A1WTBVEWBTLGQ28W27Pu6YoTEpUfTydYEDbL1JR9QRmghaZnrcT7RxgygKSts6mWWQh",
  "key36": "2vYAaQcSeDApRthguanUu6JqFKDXvFQMKM4JiyeasPZCg6gN6NryZevLX5hC6fJRJafQLuZfdK7FHFvZ4cK1fxKP",
  "key37": "37u4c43nb2gZJjU3fEmXdTwk9mgKSpKddCuMtVHWbX2Xhv5LgT298fYPYHbtFQptmGWZm5jG727XYK9mARYT8hwY"
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
