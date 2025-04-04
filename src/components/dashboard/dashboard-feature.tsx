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
    "3NDpnCNg9AYigngBh4fKHgkQUJ967byvL8QTJk4XmwHBhoRe5LP1KEPxtwnogqpiQ2dyfvpvL6Fc6Noe2p5MN4hd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tLaVxBfJErVdAHBbJkM3WJZzopxfVVqZvrAqgdhSGqUFVtx4qJ9tAouvHU5owWi4bXx62MqakaCksem9putHzrE",
  "key1": "5zEtEhr5n8TAppRiWXTzAavpA1FvFKieq38xSgPqBCdV1uwPBufEtHqxTzchKrXgabP7HZtEdiRMkA93ZCFUTz9F",
  "key2": "21iW7s6SSf3U71c8pro9h2NvKVWzsyAujKSz8djDszaWz4yiJy8rGBb2FBZyNPd83CeSeZTHthMDx4ZREZfrWEqb",
  "key3": "Efb7MxwyPCXBBHzGMnX2wGqAJ3xw9twS84d18c4qqfyyZX7b93q566gfB7Kq2TciToVpscRaxUjmuBodETHYHoq",
  "key4": "NWMRCwuMycxh8vB3aqhr6fcRUdGZrtwBkLhDmRH7RisbzhVkijgMBhzxGwccHMEB5TeBCsGR1BwBYJVtuYqJNMd",
  "key5": "4qBE4WLkuyd7nmSueA5J3NbqNVCacVyHrMBpd8RfvjuXcubEX9CpCbG85bdrfWVzPrZd5ycZkuBmMGNJGzi7bDrJ",
  "key6": "4kvisA8EmhxhWbyt9QPgaWAsQafzvpWKZntmwV3bFHNTdahS8wycqL6xjkrdoA99RajotBvZ9Frj5eS6zr3uXUwn",
  "key7": "2TAhUz6PqkqfAYA5TRFDmyp9X24B2XBYNfMb3WeUVopTXRsvtrmoUjzw518FthiXdCgifADUQNmkpRJGPSaR43i1",
  "key8": "45Xos15pdkv6p3RtKRiEW58m7PujakY76bE3LnmRFimuHpsQf2Kj86ncGzB7UJGCAVgeKxuEmJFvE4aifsE8TDd1",
  "key9": "2D7vmZKxTQ3wrSTjF7vrfTKzvuVxFPZR6Pm9gxtqYodxL1ywJ92GpT8NXQFjBV79sH25cZDHZDmGQHiJHJmr8gUV",
  "key10": "tHXmx4AeyaKce2hbTyAG62JwkqEk33nCAf5jGLXZa9PiR1KMgdWMYTmcCFBZvsaQLAAS78JGD1QNfFr4aJqaJWV",
  "key11": "4hXPy5vBF8rVvLJdnX5oTQgMNd39vqhSekPrax5mnkdYeJdL9MVxdLmCpMC7SbGgPMjTUBDFN7FA4E2BEoaycFpz",
  "key12": "56xfpGfa2AFnXCyP3mXKJkhNR1hisgZLdbL369JH7b5g4cUi39yewz6XTJpD6NhNvLM87YPjiX13FukbBucLSNxx",
  "key13": "4DfxciKHadgL8TZpiQeTA2vWf1or4DYNBiJzDQsNgYWZj9qxexLsPpKp9kBakAJSXX5QV1apPCqm7hZDqwC1yhzm",
  "key14": "3i8fy5MiCjG79mbT1qPdfJbiLsKheNJU3HnHVMyqyJihpZpMz6k7g8PQ7hvQxF7mZcb15CZhcUjDdfyVq7vFPvUo",
  "key15": "66fzAwVYDQRv1ofETsrJgtGi8nnZTUq5PtwnGCze5ktCkQk7XFr9iviABbkjvP21VnTqPAHkDtbvs6J9NjqZC1cv",
  "key16": "2Xm6ZMZoA1Q7WcqXUkB133WaUyiBSJL4BQejGuYuLJV44uHMrowLhvq7LYonTVkJu44T1F1K3WaUC9nop6444w5a",
  "key17": "5eHpWE7F5eAx4PpSEZGrPoR8zioMWz4eqC9nKJoU9rhes7Z72LRSZ7cEHyHVvKtxa8doK51dmMxMRoSv1uetXyst",
  "key18": "55xceqqxsHZ77Sq2UQuU3MaVmPKR9T5jDCVeMQF7pPjCrb2seQTN1Xc4vLkJ3WpCWp3YXdkkK87UENAuZSBUkYAw",
  "key19": "23kC9s64nKfTTbEfyfKBYr2mUuQ3giEuA8oU17ZtufthQMUhtad3GU8exxFgEZGRnryWLp7qtkBUAeVJJ9fSiXoG",
  "key20": "2WEkZuaFkBjdzKoL2ABUKPqZAMtnWY9kPCmZ8DWcR8N6EfU3V6c9Ysmy1V9dQ3HYf1wKtdyQJE5QAugSBHVpC58p",
  "key21": "4t1QpEqxckrxYWy2K6oKtvnmi2zSz329fp8JEzuPDhrGVi8DhsxRSXDCDDXeRSXHyhvn6NbKU7YCA8rAJPc1WMRL",
  "key22": "3ARnmrb8Y4YgqzdgS27ZVfHwu46H1Vyk2GELRsVpsbQd8ActXD9iRRq2kj2GSakDtw9quAGf8NxFiUWi4XYv97K1",
  "key23": "4DfsHC6egW862mkoiGtCYywwHqD44DAZUH7HG1aSTvY7LW4BvrzFfiANu7wxDTqbus4rkyryieT5AwBLwUCsYaqT",
  "key24": "5RgovSP8MC7mRCEqMd8zMUWfY3rgg2WrVidko2jrTKhnSmkX7TMZ9UQBqyFkfJEnpgnuQxWkKKfrdQW8qEK9ogdM",
  "key25": "3xk4smv6FNoY9BHsSVLeqHmfMUt6nqzA8MX31AJHE8uWP38pFiyZdytMeDqFGLVkvBPTCdVdbChGzFcSxvnMm4jB",
  "key26": "52fwSMAwSDqN1sjgiFCEtZxGHm7TnfVtRadsg2oXERPNKg381LqvQvF2bBzyUftX5HEd4HJpNd18wTk7yjBMT1CW",
  "key27": "4NfDgNLHSg193h6nLrarsaNBgWiYwsN9dg1PRHubG1zAK2N7uaawDomFSx3Bxp8QdrqGMYHR4ufudLpDxzjLE5MZ"
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
