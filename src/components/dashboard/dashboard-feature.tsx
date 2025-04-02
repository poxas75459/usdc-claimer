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
    "3JccXCCZEn93E4fgFUjNchRs7zietyowZCh2dNkHBFvvBkTAEmL4b3SwhxRJi3PXM4s3sAqd9hykJ2s4qVgYcqdC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gsJwCbLWXKR6g6hxcJDGKErvXGGBgVxm5DdLAid663m2v1dubPiesLjnKTim3DyHutNFzR28bJduFgJ4KzgeXoH",
  "key1": "JULQm4kxoMFgFtqr3nPuJ3CD75WiW3s9XrbLCEjZHLazGEU6mfp1eHHeue5A9yu2oFjSrBaQqYwi4CWeMcXFNMP",
  "key2": "29e3R1a4pBWcCRjReYKV7gXKbwvvztJWU5nbgiyxDAhCXgRusJuduN4YJvmagevkStj7BtPWXy3PqkWdiXimtaJE",
  "key3": "52XPmmDucTRffkcYgRadCSb5uTXVUoApDiWZsEW7tcN992q5YCXV1cNeye8Z3NAmnYf1HNBjrggnLBNCJu4vr1z3",
  "key4": "JCj6ohGgGuv27tacAUxR4Rcwnqt4Cmgqo9d6pggapdCS63pJb357gjEdWmxepbq2CQL2kZpFyFAMbC6LhZb5cza",
  "key5": "3A4VERwY5TF8PQsSeVG4Gu8GWGY6JiDDWUCFvmgmvtTLwRCg4AoUD9fRQE9YSPcgWzXGsgu74DVRW6Zx5tVMx5vg",
  "key6": "3TfhcExkbtqGSawU5qsZNYnHfXsxYKnJS8N5FNgQ8KV8yw7wovCaTJKnRgn5iyom86HfqD346LxSx43djdorxxAo",
  "key7": "sGFDqt9T5k568s8DMR71eiCT8Rba6SXAAnRWs48bjfG4GgfkB1wgWYzwysxPCURFtqZEqwhx4v7HwrHsa8gT3QU",
  "key8": "LPewXsJqsyzJY49HN8GRiLK6HkPXztsB3HFRx1QkZwJWmad2rX4ymevhaoB9rip84wBX3Aa94MG2zChpo6aDhmi",
  "key9": "47S9xJo53PXmswx28E1yNc51RqbA6q2zRACU1Nzei7gQVSPZQBYK4yKQ2HNvcJ1jmCGbuT4REvSjudtYR2mNaUDW",
  "key10": "37Xe3MeC7E98X527vzfYf8Jrc2z5A4m5AZG8f6YJJjpgeStKdhLQGCFWCqyR6VVPZhH9AW4sJyYDptXbGKoGRaiq",
  "key11": "5Gnkc8cyDpBJ7SuSpxxfNnmTRkRRUsQvpmWVyXUAAn15KMgNCyLiSnoiX7zsfE3G9Xm9xnCrfNRsqDA65NdphStj",
  "key12": "2ZHeFSqHHuCq3uaNSAcAcH5x8UtUBJNqd4SBvk6LYxW5pNyxX8UMUHcp9bZbgFmGVAEH7rWzHMp4uZbnVT65tRxz",
  "key13": "5wGs9m1wC1RmXyZSgDHbXYNhwZZ79wujAiJ3UncFAexantPJCq7s4vHkNgWRJN6ocsBHfbxGLuwUqZztwTjozJWW",
  "key14": "9WqWNzKUJyE23JcgbKJgNuYjtBocYURB9HUSfDM5J47swqgo5ii5JvNFRLy7VZJbgaxypMSBGGY2g9tA8dG2vFw",
  "key15": "35h8qF7pNqSvc31YHJKRw94MX7oDRGToUa76W4YwKkKhy8ZVZyCdtivu3f5r1tqZaCnAk8H9pKYdpG7Kgpa5fNGE",
  "key16": "G8o1rRkDoDJSd7inpuyMQoaZpZ4uevAz5e6LAvYXcZGUciXadCthumN2fmkPofj2uLuFkGeYYthWgyibnznTBKX",
  "key17": "C1PtEEkPdHpbtvMmxJ7tuEVWkaJCyXitsZzSiitVyaqMoNg6XUpjX2m5mLjV2bGoxWYT3z7h5SkwD9xfRwMcot6",
  "key18": "fne6zBpde6KwNTXHZ9VyQG95VsxoW8tAx4C7wofYp4oTipgXf45R1wDR841ukxdJwvqc8mnUYujDWzzxCQknshN",
  "key19": "56hpxAqfR8VpiC4anMxYbwikRRG5c8EJ9P28KVjKtT3KnihjTRUas5RXiD5kGBJ4LemQBUw6CNsTUnp63FuUs2Lr",
  "key20": "3vkSMFiVNiYiik3kBF5MVu4jfgQbGsRSJ3HoyRfSBFYLoEGnBrKMoJVgjkwZ6W6CDhaoBUBLmvmfxMP3ydGqkb6g",
  "key21": "4eN64zSVBi5ffCUMHy37W3RTC3extwTRDP9m83xYA3DYRDZWMxq39zeNxSBRZLM434vu65vDHjoYjDv3a8VRza8H",
  "key22": "3mz64eFWezajUWG7tAdpmfZMq1xq53Xhu7apmN8XeaBJtDaYMr2f6eUvnmhLtSDULZ3R7i8YHeTFz9ETkhxwrGXC",
  "key23": "DybgZE5wCGqoa2EVxpCS5ZktxQnfD9fJ3p6SUtdy3C3xyVqgdxBDPNor9bEa3NhqN7uUJ9sQQBwkuL2wwH5feMD",
  "key24": "5kdg8raiZK3di5gnTUG3iEjjZmjFiko7BBroJPniT4zMV48nUzAunx9nzy9S8YDv81Z3TUtnZEMS8YtLG8kiE5EJ",
  "key25": "NKveoW5SAKcEvytpgQePzkehFypXhL9Lkt5yXYftyt1Y5CCzWJp6QFem5ryiAou5tuFUjeZG7ncp2pxy2EHNyja"
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
