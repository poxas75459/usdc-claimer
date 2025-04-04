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
    "4Lkh7gkxrfwNFdMshEKLE5UkFbbkNVJu9ZH4dhMJ99AmUpgzEURBQT8zAHNDLJddRrRrbu5DsqKhbxVoWQP8FyBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tAKUK4LTS4iMhx64cRXFQEWbWBGzkkqmQhCm3E8uGTaCY2wYkxjgKPEuYk93PeBwnfToCAVpWxMSAb3aphXeQN6",
  "key1": "qDn3gbez2Kuks5G2XaxdyVD3FhFUARBABDoC6NFWsKWsn6XmPzwGYmPv4NemsuqkkVszSmPq94wsV7RBgKDW93d",
  "key2": "5gQNJiwUVwMMPotLUC5mk4M8gi4BnG1AXxYHNbe5N1L29sJo9sfQ4ndd5dGs47Shi28cjz172c5vKctvMtvzHava",
  "key3": "2jHZUAKcRmWu3d7aqge6HCW3nBMSLSbFFKFiEFfzfu3QXRFpXqPTCji6PLYPRs1mAac8zBgf15owALgGUvK3e1EB",
  "key4": "3jAFa43Qax89zDhMMqtTwp3kuTQR5hg21SgLYWk9yh6yhZxaiak1zEZ6Twu6uxJsA92DRV3f5dypFRByiTZChbph",
  "key5": "3HXUPUp3DidzTsPSugewY2pHxXKiXqTpgmWiF48U9noe4mnxSHreDnqsVAWE8H5GdTsPP5Nce2Vh3auYNcxcQF7N",
  "key6": "4oaYG9pxF761x9feR18ZFgUysBpfRTP9NGaK3ncZGyTZCymTZbc3Z7KggtqTnces9TEA6Y66Nhit843paAjqsKJ",
  "key7": "jzCGXBowVYPjvFf1ZQxwx6wkBRk9uHx3uJBH5PkeMjpPrtHdP6p4zQw4SAqqkq2EetdBbs5yM5fGPMfc4QEzGSr",
  "key8": "5rrQU9U9Nya3AkUdhFa9dZYXuZQxuyoHamv3PVLAGaFN53hqLcugbz7snty6cH3y4DmQS5amJW9VMbhtWmtpjsua",
  "key9": "61VhU3bb9eEcnbYamdSUN5neYddFEz5UvMnyEzEyB1kc7QrqXGp3FxM3dvLPhnEdFHW1J1ehJmYJsS6LTQfFPVj4",
  "key10": "A4EsTN1VTMHgaVdiJ69Fn8W8QdY1bApjivnrX3Sc7dNREdVvhYeZJhzCrfKyEhsyZMAjMoXrV2krdc2A18XfVvB",
  "key11": "4rD3hmYrwk5YWLmqENqRqtSLYsLGryYh6cLgUeeprcC3G62trMP437poBS8K76Q66By484cACfF4dxbjdfVgcdWc",
  "key12": "3gnqxXDtAiZia4VKU65C9KRGn6vxFP8AiCukk14YNJ1Az79Yrp2gUJ2McPT5mivAdvBtM6C8qzHZ3a5tgDV8Dmea",
  "key13": "31eAHP1U6vefzR24ZMxNakMhh2fUsSwWVuwwuGXtLUyWvaVYuxFy4bcySg7YEdGVQt6aY4uCr4JQvqfKFCarrEpa",
  "key14": "242Hx98HX4REhGwcMRf192eoQKh7wpkAQMNe6Kv2QbMH5AWu4TeA2Y3rwCC2TnsNeRVkDQLgNKb85nBfFZ7Cr9gY",
  "key15": "42PhSYv7xhKiMfXHpV1JYFpqknsE2nsnxfieqgsfLKaNSRdAuwkjLkAer95SkD1i1wQSfw7PvDwYcGueaNdqm4kN",
  "key16": "pgHAMxAuR3qyjDRkbzGWbGYWpTsCxEMaEQdjpT5dYx8J8HSEHdcg9UhtPj9yeTPzLWfgM3fiXk5bdkbEqP44rqh",
  "key17": "5BW9sPW3oV3HPhxoSgpnRQdhrzSWV8GHZXXdeZZUWwBsVnMFE1hQ7VQvwn5ngzcyTp2mmAji1jYuD8n7Lgattahn",
  "key18": "xuFq6pcDUYvZWvaxGpmo5UJY6m3SvMiYADK4yCcncbu9SnnSbo4wua9xNZegWFPy9oxeHRCYcoAvUzNEttpgJw9",
  "key19": "Dj2dumRNpgtRKc1mzDECfP61RUorxRMa8cbJskjCXWXkFLHXJxmHEE81F56hdqrox1sQ1SZZhyBjSCo7DicfFjE",
  "key20": "3tGKgfjQx36doU37xFzTmUWHG91hpSccXRS6uGdXfBX9Ygn22cftHS7b1rDfJXitJkfH74tYtzXwNYRWDsxSonU9",
  "key21": "5yqBGMCUaqx3q91YtaemptcojUraU9AXP7RNh5X6h9vNhdtKTyTMxuTbjyLYfP4uhfWYdyhu7sy2eNewoZFSFFva",
  "key22": "5LG6xL495ozd3iikQrNyBn3Lfs9LkVMTwAtG4ZoqtWBE44QDRbo4tQoMFSBMm2uEerBGxLn3LwQvJk5DCBz8qSzN",
  "key23": "4vgimt366wz6vVmguxGNvEVoi8u8D9bZTGqYzZVH8MA9R6KZ8wEZb3YFKGiMvJrG5ddssaQVVwj3BWx6cxpTkxCB",
  "key24": "49JvjGRj3rhgr9a5PVW2PmsVCCZJMHaZ8SJPGbyB3JWhFybdJY5JZCEZnyFbANt26Mam2PvpaWRuqCoxRSVfadLU",
  "key25": "48gmZjs3j2LVCe1mqykTKM9Pca94DD44HgHux37aPjQjLmjr2LeLR17TSJ68UGCYnGD7ofXN7rEKqi9n7uKCcNry",
  "key26": "5DEmzKeVTKcbohPpfRELZXPFYNwifxqgBMKsosU32rnyebSB5w38xhjFTontYYZi5uN5pvzMcQtbKXdsv6rZ7hGe"
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
