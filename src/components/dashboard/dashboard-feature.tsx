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
    "GA49FCdD8FVrzrGJSmAS99fvqMCajqs5SWJzi8h2yTCGK4tbSWYVv95Dp5yNoZXp83WdwVkDi9jDAB9EmyG36nT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tKPPRCGtsXfBhpWKoTfhK3V5xbXMScKSbnbvM5XtehNDfggTjcZytAHhUU34a1erZhbjUyXUUZfRkWMbuGBhqFu",
  "key1": "4rM9L269nxeGANSMdWHSLb3beReAm3odPDKiK9FxAY2oCFUCmizFfZFoPtS8D8Tg5oL7Q1JaBfFiAHhd7KvEvTYf",
  "key2": "39TscLN3uYP7okx62muQUzjR1ycivsHUMAjTXf83qeGcCwUU2q5JCZccJ3DT4pnB4ZDbhgL3FKtgftf77jHKzoQS",
  "key3": "avzgWC3wGSaZHYTmYnQy67qkf1s6fX37MT51dufiw2xWEE1AfuK6psQ2irk8MUY5kcJnjKKoDmeixJZAsTuQgqk",
  "key4": "65jt5ic8Yq5S3us6xj2tQFp8hx3hfp4B8UXNKhVeRkZrQi5FWAjEMggNF5FJTfJBCSE2Rse9Q6kp2ET7t6xbzeGw",
  "key5": "39xafduEmGPZVyhHoyAaZpNs6sD7Tws5AFS7r8CJ2Y16juej6Gtzjg7g2eXxXUbWMJCwH8suYqgmhwBhXfgxQiaU",
  "key6": "2R1zAYuZkjYhA7FEDaAKcLAftuCgMDBTCwxxYR2hfciWoa4ZDf1JwNdPdiNhTAw7A6HSo8tAKXGKUL3EE8io3c2n",
  "key7": "48s4bET34auHvmPmLmc5Ms4VHJEYMvtXHfVUH3Kp3Xe6iiEeE1iDeUn7Fbbd1NhFKvHxLCKxKGCNCr26tfjW2GvW",
  "key8": "5q68xA1rF4PXPf5zjUbc49nVdqTw24FmpUtdDVCTK7fFUzgRwcZqjqxaxtTAioYQXUXZRwD8QGvCfB6Y218XtbyU",
  "key9": "Q2PVvKztmzj3kBs7x4E5n6pQdd74EwySezFtQAigvTP7WvqYE1MJqGFYQ17y8Rrj9yqhCCpPCLndeLLH8Wy2fNw",
  "key10": "65s9dSgExWbwzygmJyAaXReSNchkymGW9cLZDLX3QhE7nMvK216ydj4CCCk6wTP5SKcJxvTg9tyjo1upbyYhdnL6",
  "key11": "3Wgb5BzDySQZ4zuBZ1iA5V3Yzh35cdo2u6Buf5YvP5uTiqYyYAGoUuEWJX618gKKB9Zu31CdvmbYv55YMFrZ3w1B",
  "key12": "2btyL1n1ZdSXyXyW5mpjGZaiTHBTWhPJM1ffx2FphsgHiHHA7JzVCaxNVwZobcXmdaGrgW5ceqYGNHa5U3zSHtKb",
  "key13": "2cUcuXUhxmw3YMioCTjkDXxnEnBWGQbzB8JQoxFWwL6fxJEFwyG61Xt2Ms7xqRp7hZCs1ksXXwnLjyVjEqpHjoCv",
  "key14": "4RkW7AfDhDNkMcntpSeizbtDjQiLg3AeuJHKi4v3ewHrQn9XwH2hkDbRetLtTRaDECSFugdhi6ZsVzyYj1dfdWkE",
  "key15": "2ESgKpDaXdJumFuGGpzEJH6FcbvcdfQYJQTYoAYrwFhdK4jbwV6LUtf2NWQcSssm8418BM8HC7MkLDVK8Gqi3sVi",
  "key16": "2YEuUTuxvHzQkATJBSZw2nLL1H9TXbXexZwqGFezZd2XJKhwqGex8HcWPXjsP6tvaXK8CYsf9H8LGS2cn7SxCsKX",
  "key17": "4UZy7iLcuLvmG2wp8WEVGLZoe1gDi8cD5zWFwFMCZPsRJfdSkvmVJXDy3vv7QMWXconV1QyhyFE3j2DCydS12FSp",
  "key18": "mNj9BSLFmf1M379cW5JJPWKY6n5TE8vnt6hfJ7CkGJ1MJxZvZY5bSpwvU5PC7FoGUWcHnKKquD82HfwDNW8JymY",
  "key19": "4E3jZw45ASwuvx4jqTPaqyNezB64XhkCsdN7SmifFNam2WkKtcNz3SXn7QZutmT6TNNfobBGowxgPEw4fpSppbU6",
  "key20": "5DCL8ankFdLZvk6cpnskmPVWGHn8oECLDVszB88qhDSLhvbQoQwnauxYY33mj4jLJd9bYfRWLCx46YiYxxCktw3s",
  "key21": "47x4YerNf6fbq1tbYASFG7PLehj8Q2BAZDbcoBR1cBCe4y9WqQ4AKycqSTrpcqSH4Qd8B6CWYZcDwXu4czJ44LD",
  "key22": "3rWgh7oBnyVt3gnSQsCJUp8j9faJjuTaMJXsDCPCyHLBa32GGYuu66gyhbeZhoz3uZjBALkxdY9tPqnC6CLZ6ntD",
  "key23": "2HMpNDUhqFP5c7wqkU3a4HNCbKb5WYDJueWXZ9TNRT8ZzABByruaYaYrjttRSKpAaRzepA1TPyN8JE4LZZQyznCZ",
  "key24": "GD62kAunVMLU79wJVzWQZajGio8D9kAUYQLb2Fi33oh3env6dyd484U51wGp1bZ6F9xAHcY34xhs5D2GMKAgPAq",
  "key25": "3hXHeuySdWd7GQt41FLTagob4va23qQyJudrUWrqDQT7wrHcguxbaRAir9Eizm75tKnSFQ7hZGmfZKQE6ARYqeBv",
  "key26": "3dscHkECyXZ7zmc8LuidYYWWonaU8kYDrMTJiYeNxAsJACijj78PULLoPHHqJyqjrt2Y5EiMCxkjWkcLvNe7UQuC"
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
