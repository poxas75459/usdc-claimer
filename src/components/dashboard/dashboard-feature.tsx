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
    "3ys4EU7T2qYgVkxA1UWeDgQ1C7kYuBhsYkqAvTAyjTmQKtP4DysajcYwuwrrL2Wt7mmijWsPNzp7CSK3LXNZRBok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "568ouwzv8upeEErRdYBhpiQi9E5rvSnrzhicGLyrSYnS18Xnxj86ycvP9eSpUMhrSLAm3hAxaKJ8mR61KdtGXFjq",
  "key1": "25WiWQSX7x1FPhhq6fLSHoNhc5SXzJ7KzkVh56jhvEidunqK8WGSMEJBQkzZwhpzs3HYcqpBst72ptAzokGgbvvF",
  "key2": "2C6qpgX4Tj1rwesuVGvQf2aUPqMTv4bz8CBEDeopW4ZCVQsbmJTdjgHCPHbWDNmuFXQAyGr1HqE8X8wtGoyeUuQw",
  "key3": "4jhwmDuyG2nXhBn38AYDFzHAELGAELt93Fkx6MYmyBiVJ9cCMzNN9kHgRk2xLUjcjQCpU4Lz3N7N4F3rAcCmStWX",
  "key4": "4acpky3PQggZk9r8atZ9UQCfKzbJpBzFxxmuTc4Cam9TEUhUy12a3SNnrWGAWtFtmy8F6KcuLYRnMo4e24namzd9",
  "key5": "5XNdSfGk234tprSXZMSddDcXs2AEzDQndTqXPBhpwqyQZojDxMU5dQTrdMPfsqsX7qkr4w1aSjriopgczNNbbgBM",
  "key6": "4cGyiLEFrajEAaQPecaVwcf5ywaWKPib2bzydhfjE2mSa8oK5ZrmitVvygaHjxBaBCrafh9n3ucaTgJoSJW7S2eT",
  "key7": "434iqwZznhbquVwAu6zFCtq1LMtzbCNNSK3cb77v4Nx3PAq3pMZwD29nYcFftRoA3E2SXCEt5aNvM2HTE24FQYF1",
  "key8": "aXGyiBK4zm8124p6GgRYZAJ9MS8F6Sf8CYUjmEGWvygXse86HyHaj87W4ihkCWezJQ6wvGPQNj3Zcrnspkndy3h",
  "key9": "66o6SmzNHszSfK6jmXhRR4iXDmjyaHQzfXdBAAz2FcvZbSWYDRpVftTT7cu8eXS4CnkVL5GVjScTMzrF1gAj88qq",
  "key10": "2yjSB2Bnx3UXzJPQT44Kr2v1BrCkhjaSaGcf2gBz6Zq5W5AxdjUh8kZF5AFYShRT5Wpnp6FBrpV9Wd1XJaNSj8Ag",
  "key11": "3zwmj3jBhaq1UUYVqg74p2v9rvNyQpXd1c3uZQsNjgJwqNyf5qV1FmzVePHf2MG4XvgfepWU7U3mFqHtQbyX5Ktv",
  "key12": "5CqtqT9EG9FThFuLKqti5rhrfCF9yeRtseAMi4ATUyJbnYCqaGbLR73f9KNkbMofmerqqESj4K1S2X7vHyRBcfeV",
  "key13": "3YEHVxoRmZzxibWtxLDWgCLew7ueUhVQCnBqRkmPmN8pCpX4RVcwJMELvwfAWLjo8BEDjTRuUeWfdp6uEvtvevo3",
  "key14": "3CLUWLzcCybY5e9eDgeYULWEwA4JsEgy7s5b5FqxscuZJRjR6J4qHLwYZ23dbAu9BBx8NAWzeSUZQ8odKHvSDYNQ",
  "key15": "4gN1hw59KbU7r8eToY2p1t4Nz78cAMjT8Lw8yu836GryM1p1ojEu5czhsTcNzji8Xk7dhDyLSyQ3YpF7wjcR1xv",
  "key16": "W6esMTXzReqiKtXwu5JG6eaLGAxMQbuogV4XQGzTLMPvJVC1aQphKS5GUzTQT9oRdmhqePad7e6FxXcUwrKVNAo",
  "key17": "2tYpct1GFZCys7TwKth1BebBFbNon34opXSWaMgELRxv8MPurmjQhHKxuM8faTmm3NiGzcMFqtMD4sYZQRrT9SxF",
  "key18": "449F6H678HCN7WD9v41ePdqV92DztxMU3E3uhzVBJRVGsKL7c3Wpcu4tFnBhkmtyoaLvk2CkEvAzftYWBQCqax3i",
  "key19": "4uBUuMroLDq53HKwJgauyAZkKshKcK5XDZU8MiVE8mBADqwgF1sEFkkjZqE9TYGHFD7YeM1TtBdt3c78SoHoY3Ax",
  "key20": "TpjEUHfikz8hGad9hE9zh8PqY72VzbNG59TM1YKgwpaZywJeroEGYAtjNz1ec9rZQMUGePjeqZBycU1k7DYU7LX",
  "key21": "3mi3ytQ6h6RLjPZkzpaTZEVmz1kGiqS4Vk5kp2iBNSf5ecZMhKo3f2f7VpF2f9VgGstgfpiPXeMWeFTxxpDiu75p",
  "key22": "5CVUDzwMPNX1hTi6UZLisXrfQf7QRwhS8zVujYHf3k2wQvF2NzX7sxJQEwYey4E1HGPs2A3mUUKoty1NwPouBRSN",
  "key23": "2Ke7566xroV37eYxWDCFSpLWMGquNM17FHAPT9Pw9EgLBMjAMrrXSsB1nq5ozhtLG96wXt2dQoA4hSzuGMnMgTCH",
  "key24": "KBfySwoRq19xC86TyoYvbpzZJYbiLTLeUczq5KyGazuAtptNqLoy8v8LfZaD9z39CdLjbCpSXwoBbGPiJzJFnB1",
  "key25": "5bcegBTGML3CfDeb57iGRkWCkiprpbWEHLhza5xuV1hnLr3AExFDvaPWhuP2W818WFMFwxwZYr7toV9btSCV6zgM",
  "key26": "383fi64w7z1Z8zfV2gjixJZZsGvJZPaQDvmDzn9W82FW81Y7Ba93CpukZ2rzongcahM4X7axAq5ChtPdoZq7gkkG",
  "key27": "2eXscyuWc6nHrniFGp9DZx2CpJBD83AYigHo6XcavUsnPo2r7Lr2H7xfJ6JiYZbCPqDGhF8DduLDeun3xzAmDT4m",
  "key28": "5gv2mpWHfaPE8mYjUWcALWPfwieEhLxU9f71BSqASpaHohVxZ8QBamybY4n826rcPscqQppXcQ2swLxjdnNrkAXt",
  "key29": "5n6zNHaNXJZiuvWJyZhUAnVnfwBd5Q4ejJDgGW9E3jwiLpTnBSsGGBTM78tUQxUCLKm2DKbtyW9x7L3U8D5Fvn8N",
  "key30": "4P5mLxJGYxNriJ8cgPR7zG8h1HHuy7YrwAkSVEQEnhji3VHBht8dEfoFWGEBJL4de234tsKZGUrGrrsGy2PqKywC",
  "key31": "26N1zPchU4HfwE5JmnynU5NnSjLhW36NbtpKVBBKRhtRr49kxVbFGdhH7x19xiL3Y56BvKg17aF1NwqJGVFnRs3V",
  "key32": "oPFmugcrqVCMxWvEozw6MNBhUEhAEzG4pYnZ2iRYQHT8PuvuLeBP241TfTHGvV9pGA4qpLXnzeP2k8GNC7DE2L1",
  "key33": "25CmpzC4QHbDYGYdaZdp1zJydgkaaun16w4AmC9PmQ23yNMNGY6nHi1xYSe2tzfR5wVCLCx9TxAR5hYJmvufr2iT",
  "key34": "5YaiFScEH2hBv88Qi4jbSuDSd5PR3aVV4nyPdRHYmVkpvebHGRBYjYkYHKdm3SGcdsBbef6YcJwaHFxbUafjXGQy",
  "key35": "2tx4RwEm1V3XX4aMGjRQjVo8D5BRoUhJS6oHmM8VaL1cEUU2zkdwMZuDZYqdtmMZR82ZpzqtzjGuiTXDZuXt2mvo",
  "key36": "4Jwk9Z9BYA3cnYSxfZj8za36PHTcgSm53VeBTNybKCCoMi4G8i4mfWJTaBEz2t9xsrGBAbptMpEYsSonzyKoYAbA",
  "key37": "5EVicNDjPFwbXWVNbAJpTXHfDp5UcjBT1ttu3521QEnZKBwX16m28pNGpyMUSS2evgLDuT5Ze3YzY3TqCnwQPFVn"
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
