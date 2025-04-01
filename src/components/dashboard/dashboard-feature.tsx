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
    "4gawg7T5CR7TEPHh3DYXpf6CuGWcFLqZ3yU9ERbfJwpdzHn2AzyPiQTXAnSam6WjDBgTmPS9LiiBPW4Z7Ljy9Su6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ckeumfCRQRmjH5PFnoR8WrsMusbJgweP16UByXbR29biR9CYWUueeMaU78gdnK1iG2ecHrZ2MKjmzTahn2nLDcm",
  "key1": "3HcFuZU5Em5Kfqpv5AjcJVV3zHp8Grh5QXzKeQcgUS3cE5SzvLgaadPZTpnvCk67SwrJyjA2XDxCYzPqmTRwWc6i",
  "key2": "eD8LWXihdsWuc8ukTZ221wNg6xK64g3MmTmMN6tkbHWjBHrwi2eyF5yfCcrwxDG8ohBnEyGXDtT6J5S8DTvtzJH",
  "key3": "28GRWu5o9AyaHNMMQfdyZVWibF2LJxq6nJieUUvkbqqD8bHqAFBbbtWaPN64txgXtfyLZ139pqMTZdoJ98U8rJv1",
  "key4": "5sQpzTCdxksRGRQjZKDGn8n2kXHaSJD6kiar97WG3eDbRak7u5GSAv7faD2HfmTAZVmyc7PD6ZU42nv1i6N2PrUS",
  "key5": "59MYnNcxo18j5e6K1NJjXZrjHPNJgftfy5PQrJZ2vky7fwrYfFpAABKP7hZN5g3aDWp7pXD4rKHiAhkvbCLcQ8nK",
  "key6": "44Fc6AKYU2n8vjVKZrN4FfpXy17MZdURryqrPoSbfAahUj8NyFzXFfPaEfryRfPoBLsq2MozGocqSRSwdTErReSt",
  "key7": "3o9D1MUxYyZ8hLpzvy7rpTCgtsMMwzNp444ajLyvaQzWbb1pK5qrq2Gho9XSEfAqMahdJqCUDVCcfLDFhngaovkY",
  "key8": "4CBp6ezWDiCSKqomWE9uivGXcZCS84DdrW6T64FX4XGEEorfheWTm2ro2urtsSuSkEKqBojUXtHiJL5eLhpWNxvK",
  "key9": "5bHMAsJeEvowfkV1m3uLWCCbtmVNh7bCi1gA129SFXwcif3dXZnNxwRhDgsmNex3V4pnKyP8KEJqQhhKG8pPmeqQ",
  "key10": "4d1aphNGF5XihhDR1bd4BWTqVwfMaKEXmDxefA2mwj1gjAfZzm7v2DtG6zyiHxWyDbV5jkeowgx1SbZkg4ntREVi",
  "key11": "39XFgmL5qkDPL5so9ZGuB2MjARsL5h9enRDCusTkg6cHSJ2nYgyqLfBrePrwxzF9SkJRRHgBEKy2wTFYiqPbqgAS",
  "key12": "2UAc88dJmdRe9YZUhKiHuzh3x3pdGgpVvb6p6fBrVDhaZiGZvJ1bhTUa8KCRX7Se586rw2zw7qyXzb8S3rMcbmSp",
  "key13": "85WDdqxWTA5tTvQEycWFQxm6TcKRr6FFfDWyKfa4DfPq1qEDrmVGzwd6ZeJiN4t5PN77Tj2YZEarAjKxuCP5nCH",
  "key14": "2Vv28KonTPeguMU3urAf6CK2wvoRS3EtWiRystkF8hwKT1yH5BEdmUYHUWHoHjWfXRwxxzPhvvhknja2EHw7V2En",
  "key15": "3NtEsBL6Bn7Wp45hSLmfYQD5xYfHBQi6v8ihqd39HKUEif61x1SEVGNGpQ9RLfooB54ecP5Zc2isYUnNtuMC7kxB",
  "key16": "4hukLSDWTtdBbSWZaGM6nGPPuYR4F4X4Z4RwMy3EdjvXkEu2R6tADn8AgMNGeeMJZS7XQ22jqjvfCvsd8aLXW7dn",
  "key17": "2VFX4ndeqSaQF7yKDbHKqK34kZLUHm5ydzN6N4TrgymqahWV2i8HkndoW2Z7mJnYGJtBKhx4uvQPRt7cHyQrVVw1",
  "key18": "4M5W98boJr88p4xf6cfXxtyqdE9H9MoP82DwMqBNAvMkmoEN9eTyTZ1P8MkFXq6y1b3Uhp75DTUNLfuWcGrb8zVD",
  "key19": "Nzhmna2tAGmL1UYSNGhVwpiafdrNA5APKiGDpwugoYbiZiCkoBiEdfHYNb85JZZjafa3ZzyWx5DNwoX6n5kR9d5",
  "key20": "529phsNLKGd1ri3HL6pbqsweivr4xrTRCSE6P5upmKDeDhWyAfauRXQZ7JjKTVLh89o7XpU5e41upvaMXUTzaAZQ",
  "key21": "2QjN9VyFfK6wyozZ1QhdDMqMjUJAf74BboBsL6EPcBipDFUkgULGKkENnYRaY4hv7SG1e8zEnPE2QBykuJvyomU3",
  "key22": "5cwy44MdmDCgH33fYk6GyTPS3kgid7Qn9F1arFAcTjLUVE5Z4QuBCtnajDxRBKA6Skdy1ZVviAMruHpFTkWC2LuK",
  "key23": "4bxM1h7XyXa7XYRwA99PPmrZFuWtFqTXEfoY2hDTtDrvW161wWWn9KXVmnyEx6SVTQyWM4Wwqs7yKTzcidyG6VdZ",
  "key24": "5TC7eVHRkFhGRSdvprgeHsg6H9VBAi1gJchDZDKktLnCvc5pqVH5LnMwcwggz2ZmSrfN9AX2Qf88Brzcjvcq5yee",
  "key25": "3tFbRNEfLkxc7wB6k266fSyXoHDhPwvwT2gi4C82dWtS6qoHStTCbsWyqk7HMNT1MXWambJ2pYW6YKoqSE8kwzhA",
  "key26": "5FyuYMr7k2JVbAd9BC4brMMkYpRnCrMaDpeK3f6JCjWDBmw1udFnAw6wvF23mQ1CPUB69d6SJLf2d95FMxu114kP",
  "key27": "psSxHVkV3cLa8tXhR4jqnRwv9dHc6UXPykqDJsUx5dRxzjzJaxzaHd4N3xeLiTu51DwtwcDn6nMmXfQpDpnS2gQ",
  "key28": "CwNbcsLy2zdX5iwDRY1BjXcg96aBTz4qqSE6DKv1XznBqPawnB4DbQh6ZJMETnFrVJorSXaFvCvNrYD32jntpLh"
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
