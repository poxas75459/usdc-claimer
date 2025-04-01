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
    "3AEtCyS1zxHqA6aSEEu3MZnWZMsagrnpZp9MF44Fcp5xZxdR1aMwvpLD24quHAR5NCvRhjdL8jpzXwNxxiWvcQUm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61Cq2nYhCenxEurakJoN8M58vSSLccbQUZgMXA9bB3G9L3aH2HtsLVGtsSa2cgc8afoXykZpck9DaCvtDLk17XkH",
  "key1": "M6PwVf43KbXXEFL1k4dxaAVN6RtiDP4WQJBPWVQ2eaRWVKYFf6VRZxEjY4sLvEF7a4DCXQ3EtgPHhfkQt6DRakg",
  "key2": "2AG1S7FpWMWYCv1Sb4znBcAr5WvAPCSN6xvSxpe4VvQYXJEK1ZN4BwBMqKrAz6fWRL5KZVSR6Tfzr4wGzND7KLgX",
  "key3": "PgTJzheEjMR1m1yMCGmzE1MdHsf9rmpZuo7hCiQsH73gHnU2sGkSQzW54s5yn3GTQe7YWrG4krPcHAKqmMhTYdh",
  "key4": "4o2aimPw8bUc5UauzptXN8TjEupVDT5KZv68iUAbShtEc4Ghz4LRXWtxvE7JotTRwF9m6cHsUc7ehnqgtt1piffk",
  "key5": "5XdTVJi7LoqZiLF1vTTLztCy4F5YSHYjVUudNZwytk9dxxa2AV8pHmLiiJfRB3v8RY39Bc1Ewnr4Cj2nS3rr4QtE",
  "key6": "5WGKaPjg3uxwJgpr3WJXkaFjfx7Xtnd6hXEH65kZ4SuPCDMcWWp52YRFLyPVJTWBiTVSx23tLYE3u1XDZMcMBd2T",
  "key7": "5MJwUH4ptqXGJhejrzp6tmK9HY72fQre6jommthEXK4T6XYAk31zYNuorByjecdXofRqYDWnTcGn5tPPJToxBJZT",
  "key8": "3PLGyDVdgTPJyicG9tm2ZKH8Nr2EgzvbVWoXkP9u6bUYLKbeBEY2pZC5QDVwttFaP2NmLbbUueUPm9wCjtBiZhJA",
  "key9": "65dQCwm9FQF6Gzuofvg5tFWjLiZYZfcvFZdgr4kdHZMCZ6BjGe2bYF8xLi2a1kgrFTBT4Dst8UtKqZvD72F4C5qn",
  "key10": "3qKp7heSZqxn1DH3LXfQVJhKzvpyE9iDdUdecDYerNTDXGE7SxWfaEKfxw3o1socVQ3k3UDwWHR97A8U7AxoTorK",
  "key11": "4pE8Ze6GdpUAmmqPco48mP3RY3LSb1Fim5144XFn7J4ZbreU4at6r2KiR48yQzj3iUyF6WYcu7DypTjhDLmiWThf",
  "key12": "2LusMBeZkGAKZRaVRfhTBL4i8JQLRAsm8HWf9Pa1jHxMsRqijwBE2TcSQWeooLAJ4djvQwwXPhQfJQRJif16BTrv",
  "key13": "4MiZGYafDudvWrZ4hx5HfZ8DcMDosFiSyhXCGZwbLeTMxTnWMw6HtTiwergpdxbPsgXXQV2ZfiWdBUeiGJDbNZvd",
  "key14": "iTW6kB3e5EvEWGVPRVFTSHckzX49MfpWC9eNUS1vNwCj4X3737dfugzgGH7AmhaDN6DQFh46uvNWW2xzCjLArcf",
  "key15": "3616XrUQuTifMwBMW8YBjb3ZNC7pddLeRSWHqeuBcTG9YkqHFeccgwf7mPC1LJnagrjN3EzwCudcoxk9sWaZfvrZ",
  "key16": "272oBEw1r1nwVgkttTX2pSi9sFNJStSTKFkC4umCRCzGp7KQjb8hr5o49pZ9Qfm8VmDqBfTbUmgeYpXv24Gt9seL",
  "key17": "3j3EVxsVH8Uqr8evsAV92kgUamdukgkm1SyW58bsYPC3Aox6NBKPSUcUBhkdJ6wog4KwffnZzEhmStkvjrx4314L",
  "key18": "55qDcgmVYpTWQ9Lehezeu3NgFgL33tUuJJZytb61539buBnhjK3vCaHev1839jWscGYVoTDMkN5DFSQep5H72hjs",
  "key19": "41q76f6V9BGv484PEu4GqbyLuTrLhr9bibdz79v1fHrApg68jEWByRBdMcGADxENCaVGXJSTPyqzSVLCicaacM3v",
  "key20": "5UcjLAwsw2MYQte172X7wrTiCwq683A4GZd75uSyBPvq9ndZagPScus3rtkoj7giTRqEoFqcNHDar2ta65PBoKAY",
  "key21": "668tLXcrJu7QeYedFiFUrFToB7rzKGGAqMarC1UmAAVZ7JgeKEoSW8HtDG9GhVW9rXCa9RuekoHifL35qr3SY9vU",
  "key22": "5enwJrrTv4GuEzWT8ipCacdBg5BZuYrmbjvZsygswUcHkWJdfnzh9pD2fU1A4RAcfAAceFDkbE6MFw6zwazzqurd",
  "key23": "4mH15k6d3WEp2skNWMjr4mcCMdnfWa7TBzet5xv5sztG83si4P2k1C6ydC3MFPEEZP9RnfHV8pogiKQaZUKtgjxL",
  "key24": "4AYvQTfaEq3pYhUQ7WB58YwvPTFJdBLegNsg4nemcuXLDPtG1HykKvCgRiiydV9sxtyYeBzKrtEXys7RTM9EwW1J",
  "key25": "3HpcsTapXxK2HZarXP8TfMiUiJAxni84m1r6WhAd4SENLz6VJb396UZoTx4F2cuqwTLbGV2MyqmiYvUVhv963ucs"
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
