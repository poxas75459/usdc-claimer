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
    "5BeFTMz2dYYLFq2SRkziHUt89yiM8mj7KNx9AUWRVFaTSeJ7qUy87Y2Grd7Vw99na4QjG5iSuGBQ5BEiTrKXjDvp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49MCAzYsDa48xUQPjAv58nNmrkntfrash6DWfhRVdkBLsta9b18nE1HxzYuuNZVT189Tpm95C4b9Qo7WGX19EDV2",
  "key1": "5purt7tEv9SgZfRt7yRAj2SEeDwYjsNjPd3ZBD9DDQp7TrbdXsk3NhonVKDzUitKrHdGwce7Mo1G6umX4fumqLHc",
  "key2": "4pWCoUiVLzto3cxaeNF2QJ6Y7sSMEmCHvKRVWCJZycMtgwUhbE6gN1ckHuZ5zEyckj7ckynyqx3os7V8MWTqJpkB",
  "key3": "5hRkaiguhKD17GcZ2YhhnBNfgRW5Y9Egfm3FBLktpecUjqhFu3jM5YhzMrKWnafFFSRa5QM5J3x1VAN5YZAMNHC4",
  "key4": "542VYb7zk6GBhMuuHU9JETdbQM6kgu37eF2TccpNwMosfh1bH1R7SWqK4EK9LY3TGnjVcLVFXScNCEJiDPwr6Lmc",
  "key5": "4p7Rapqb3bnzf2wSxTAhFdciiMqYKBNNvd5pm1CJSdAbjLpCoJmrVqQeXnww9meuD4R2K6uTTL6GGUrJ1G9b8hYT",
  "key6": "3iXR7AYu8PLpHpsdchTZJ9DiDM9Ka1ua8uAu2m3guPJSECy5YZkbmyJZbEN62CwvnrfhPSpveUSMJkxWbNbCGbeB",
  "key7": "5tgKY7WMALVK11pSLJHYdbo6APYR2uiKR3m7az1fdh6wYS1LuCJvwZ9ngz9xvT9wUXiTJenVRQ5AqT39ksSfwwDp",
  "key8": "5qYAkDavYdB2dEusH25kjqJ3uMHPobZuqyL7VYBk7c4UWSwBFzmUKHaaSk2rpkvi7oDqxU6xEiz4qTsfTAF3qi4f",
  "key9": "4guomzTpVSBjNEbacYjxx56PtU81K5BeQBTdHizBxyF6nEgN2SpbgAx8HvED8ws9iERnnffAoyyGeAH6J6FRxgs7",
  "key10": "4wYbgUGbr6rFPwUr3x7N7LQy4QRPBZxAhtXfC92Gq2DgSLXAFV3Ea8aV5UPh1Pc1X61FeG8oe2ww4g822iSi5VvP",
  "key11": "32eRkNTk4EGnKYK1xnQL99fFQaqySQ54v8Efu8R2czCB4V7rsSq5JbVaPpBJ8GKwFBoMAVyfCK3p5yVQ2sTgreta",
  "key12": "ktNQdJ64xfRav5ZNkCZwCDXso1FYGhKvHaA3UNfS1qBZM9Pt1eTekYZEDfmMCqq95xgojNLTK2mynNWQc18LQcr",
  "key13": "NyFEAs9MT5UyLwgzj1vVb5yZHibhrKdC9bVdYvwYTQndptykvxii6BBuV6ceWMzkG1geYUogS4GSo32gPaySZ76",
  "key14": "3xvHSchpNfWtGucaWH4mUWKXhGUoNrNPp3uvADKn6KqkDTFgULvVKsAPukpL7JXjd3Hr3HF3qQVx73YhEMkbpmqa",
  "key15": "4GtkRA32UZKrmV6vFBTJ7eZhdzhCNavyz3iW82bfWomnoVEbtRWKZyS8qJPEAFPxTByoCj5KV6vLXzi1XnmbKV5Y",
  "key16": "pFR1Zg5duYfjLZ4TWg222vffe4pzPMngszAGadhkAm5qTe2jrbx9vHfsvaTm2HeoK1WB4jzdixecT6MmfLBRLLw",
  "key17": "3V6MAGFNqLMCQZRJNXv6MMMmLcXfneB8BnrSFmk9ZitzEhiYSXn2rf3AB4XAoZF2cKpkdMsaSdwDVfKZbq8oCKgQ",
  "key18": "2QnGd3j2Zp4rSaQgJo58tDksfyozAvPFYwt68YHbaagaTKZ7Tcx9oJz9AjcwawHfWnZws2yqztUXE2qEZDqoG91P",
  "key19": "26tRNsk13L871To8kUQEAF6U25wLxAwGTZp1TsHFsTBwHffzR1aV1FZdvcQ3RvD6iZ8dauED4CPRQP1iStzhPSqT",
  "key20": "4kgrAn3bj5cczJc3XRZKnZVV4SxLBmGN5Aa1bbmcpkYC8TSfsDQnFxHiy2iVMezwi9t6FPvapNDuAxn2UYDc2czi",
  "key21": "2KDZ4D6abVBDevteivSLaw4uLw1v8SuFsRo5kteYJJ75wjux39Gdpf5EY6gzf9szyzRv8LU3uS1BiU2fdC4yENi4",
  "key22": "wGM6voFXAtNFXUZ2iyyxh4SGTSzdhKbTC4D8L8N1WrtgbHjBCkSk1AFTHDGGvvQSM6EtNRU1GSEdrytEyn9bLKW",
  "key23": "31dY6FUk6qJyqjafRRz6coGvdhMRRn37QH45bA8vg82Ud1SKycNmyqu1877JqKZWSqZ4zihNNKS3Lb3TnAspQ8U2",
  "key24": "5KrCmTUaLUkVFYTxZUNabAaBB5b5ft8irEyZAVeNE5DeRFMmbATAZizYApYAr5NReD6riWAQz1eSHbTf5dqsmRFf",
  "key25": "GP7pFg7iAekRqzKhLNckLtCQHJvUEEZmxXDuWH2urXDmGPEgKFpEdpXHzd45Yq1pLxyzWEjVsW3XC3smExzY928",
  "key26": "3MAfXG265ikKW8FWKx2bUEDRHXAgswhLAXzCTkz5ESKvzhBrFRZEUwEanEDTv23Bcxsz49ygzmr829FhKZDKTfr2",
  "key27": "4qBpUXLzzHMk5NdLFYJoYg6wKMa1hY4v1SLmqCyiLhvShM5oAgFSzqQcQ9DR9Dt4fWPryPSyArGeLfPZZUjiSkgE",
  "key28": "2y3LTjBfCJXUf7UgSBMWe2TEv7v3ECALFKXcknxrs77Wc5BXDBWc4gC3Rmowh1TuCa1wkTKGHaZ27J5WQzHpchxr",
  "key29": "4S6JWn5xf1xDX7yiG2Y4VNB5Ts6Vj5rGf6B3mAcdmj8WsQMxCGa2piKf6vjCmvxHjLKNGy6yvuG7Kp8zDou2q8tm",
  "key30": "3AS4D6XZBfJSwMVx2TPQY6EhYw4wJZcey3ftrViZBUGHsHfAfiDdCTo1rDSRZvVHDuuC3CtyK556Zv6cZuUFn9AP",
  "key31": "8fkxcK4hk8pC9EigZw7dfqPQopZx2hVtzKwJpuiQCBg4jPvbckjnh6noBzgVQdJ8bqosWdN7VXfrpXjLXQwgjqL",
  "key32": "48Q1X62mG2wLpPFjW7oWu4h5381NPQbARZaW733Yqp8wYtY4x8os9cCjwySoU3END9wseH3Tsm5sX7iR8Aj11cBS",
  "key33": "594b3qeLhGApdfaxmx68rw5ficFiLpTYWj1YEyGxvamDydZPi2pHaVXDmuexM1DQnhTDceetXEC1sbLvtxGnuYE2",
  "key34": "66aVWUyyGPFrjXcPKRNkf9WmHWt7kXktWpZHw92mDEC8mANhSDAQuyEVuBS1u4eb2StB5xcc8nDoNvt949gCXfyB",
  "key35": "2RHT9V51j39fLiEJ1oPq7PUF2Z4beRPUhHr9exry9JDhZcrxbG8njEoUfwbxiQoAyTjQjsrXFkwMV8Z9EBxCgm97",
  "key36": "21Rd54fr6FQg8SBHvyN6Kuxu8PuySZLnVCJNSkKh5F33Sv4gyHj6KvWEs98qtzkHAeY5g457smF5ukLyxS5TFnnF"
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
