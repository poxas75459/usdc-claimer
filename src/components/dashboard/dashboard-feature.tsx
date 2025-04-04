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
    "2Pjm2qMxKYJVy7QAdSoakXXXvCZCbfFMpu7PkJiSjAuuQhik8c9Vh2VmtYzDuwNTmEBUphnRLUaRvw93whhiMwY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55VLk9RSbptCxPdxphzfcHLRT78Jg9pF7tGgAKbD7gZyxxTin3cT4DpjbkaBURk15be6AeNuLNGPjDUWtvrXrD5",
  "key1": "2X6gy1VAxRPKYn3GjM8YGWm5JpACorszqJ628pYvgqxHVhuheaxhwMZLfHqjnaWpfs4GB9EUXZjZ6TwGEMRGs1QX",
  "key2": "N5GukzCnPpAMf773ex7VeuTzGnMhgSdzMNrcXMoSmq4quNhFeaBuTQY2HmVFfAhatQfp13Qs7arm8Q79owNrxjC",
  "key3": "4ZHawdvDGrhVZZsz22Z64J2Fz6z3qNxQFVnNW4Htmn3Er6XkFAcwPmwMDrkThG3666AttcnoinVXp34V6SDgRzNx",
  "key4": "3qrZKR1DJAyVjNepVzD4Wou8wS8bwnHBbeQg39MaMjkHuf9AvTyisvr8sM1GzyGBxN2bJqXKY3q2zd4PGYz663Si",
  "key5": "5cBYaX6MKjaWQxSoe9xUa1BGMWSqHZ2DQB8sAuTPbDKuy3sHeQKpiwKKykiP8Tyj4kmoLkFspxEMrJV7HtgZoUkW",
  "key6": "UKooAcNcsR9271UwWyLatUVBYyZFdcqbjwwmPBK1pbzX9KKSQaL81hHqKw7MZCGz8eNxvaz5ZKiKy47yUxGsgAv",
  "key7": "Vmf9aKin7niSxEjVESPteec9NeJBzYweZ8HSXt3HVhJatqHFaFJ52u9np2y5auuAsenJ5GQEp1ub3vYo3tQyuWJ",
  "key8": "26uE642pC5APyLrzKRWV3tn38qrvbFmXDCUUdpNoGBQhYHme8Diqhg3vFLq1ALcAtduEtT1N9MBnYpcKs5ikiuUV",
  "key9": "5ADc35DTw28JPxjHxocjS3vEjW5U7P57L6aw7qM3Bt6iZZ8GCy4v33ERY76WiZUmeTAFvZVYgNuDHJQmZnz3uKqD",
  "key10": "4NsNxVRveu665EqHFKc4qnoY1b2btdsFtKvY7QEU4MULxKbLmucKd8kywFdiRV57b728MnEa8KXAC1zqk2gqcxdv",
  "key11": "HKRSCa5PWHXg7ge8pRgkr1Gs3t7zNKC7Wr11cgM5nH7GaoNzi1r2wXvZiw8j3pxdQZuHoSvcKuGRfmT8a3bA7zh",
  "key12": "KZxEWLQxHJZGVTRnnHodZ1t2NLuY5vua9QSajY7GxmYVyx51ynBhsvSZVMgxHRzb6Kfs4ea3EwS6TR9NXGsxPyZ",
  "key13": "586G9ssRBJs1w7E9MUcp9pyvVp7cFiVEPEvhNSE8BUazSKcp2wMq419hFDMUSPvjP5SqjZtXimn7652R4YdGg8Vn",
  "key14": "24HJMNpXUfa6FABkHYywZx2ZMcDH7bbtChjAgLKnDSAKmpGA7iTSLjPVcYJGvaVPAwGE8vhCp4fYuGoTwngq91M9",
  "key15": "4B5MzXLpZJActdcKVD84Xg8kG8dY86oZxTHAg37aEkhVpGSYLPMwXJfUgT4pBuHpec8JgBpsV4CiDkE6o1JYaxaW",
  "key16": "2wy7TseY3JAbEJaBsTSyYfWk5Sjg8fLjYWMz9JDL3cS238FhQQcfUFe1Jh4pMwnBbQYiLZL4vPyCkZA2BSGeGC5X",
  "key17": "5nAXsmjBMZwqitvfjvZTZT2MRPe1JE42NLeD6jrZiPtSGC4xkPEf6NgMiCuubSyBWUb2ktojxaeRuMY7Da1prpPS",
  "key18": "5P2fCp3FvLHyLx2bvRVsknVtcZjvMqP9Vp14yWBGQwdrmbfPcr2bU6wdyf8NVTQmLifUFtaVHSomofMAZxeZwyoA",
  "key19": "2wSwBbPNctBPo1H5Auk2h7kzX9WWXFvjsKur6RjfjUDpy7oTfkYfytZxEYa71EdZgYB113zW5W5nLyWwwiZ2Kcwu",
  "key20": "5HCrZn7XiJTYhp7ZWZd9RmmmsFGCrFW5aUKLNa6f3azBJktwS76RYZLmM5Gt9LMGJmK1LBq4kZC3fMVmyjbc7GAw",
  "key21": "3mwqMGAEMLyuuRKQzqJNxgruAG9jJxeXXP3a9VRnauqAfuaWkzs1vamMF3bCr7zWqcEMT1Gn7JV5nwLR4XfM6Ssj",
  "key22": "2zfCmpQMi89xarsJX4V6xNoXSSCeqxKrLDG98i7Cr3KrTffjB59kD8jU2DpTMFu57MkbGbNSqb3fkeJWZsjFpcVv",
  "key23": "3KefKaBegZNi31NgDsZQ9R3Z1kyErsvv24N8VSHJEoDUR9nPhZ28SxnVRRJjEhQxx3e9yNpJyPyKpVweh8ctYeEi",
  "key24": "2Q9mXp8V9p6uEtnfVyjXA3dsFhzCotqh39LKEVt231vxA5iVWLnFgSNGy2M21cqRpv4VsxsiYT3tD5PnVhKbL8pM",
  "key25": "5mqVipaySeHUigVatfWca9cSFVdb2a5fmnZHT5yQVZPHYeEGbmVTy8HDJH55GArzxXMFbtbrpEeFSTeWLhVHFunY"
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
