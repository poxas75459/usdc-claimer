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
    "4CxvjTuPT8Fat5BMBKQM6TCoWVxvk5XD2eHSUUBnLG1C1M6fpceE5hKaCtdNB4SnTXQcmdqvMYUvUdaxj1rJc8yn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xVJaniPjKTcHSfYHR9SwUfkgb8DyTEBuXGm6J5GsJXnucLvVQjdsdf4617CxyqdtKDWhV3JFGTBs28iYKTU27Ht",
  "key1": "34GZWpPJdkXZW9mnmLXVvVK3VjFk13yVTjjvtJ7tw129bCwb17RWxna9XGvhfm2wGmATnMLHAMtL3kfXXZ7VhWVS",
  "key2": "676RWWJveJEMkCw5jErQgSB7NsQUh2gW9UjzXwNDh476C4a8YTTY7L46U56HZRfBnFTF6wycP8w72yJhTHo2JMLm",
  "key3": "5ZoyiYDx3q9EDEbrRLAggZERmA9mvC5HF6Jc6CbitksbdUuSVqkrQs1ULaZLKZNArEoU5vCCFdnJqjCmPe7s1oqL",
  "key4": "2KCv5FKEtaKHjc5PeZu8A6ZCs1775tnE4c8wxnNRRtBeeoSbLxpywyVnW7WNgTnjTxiCHEH3AuBiywXBpZYen4Lt",
  "key5": "5j9kyRcUas9Tbrrd1XZHWyxnv1z7LFaAXxNHkEMx3exdmwz1Ho8KD2CUkb8fNSgq1iHuE9aVx8H1Np7Kf3hzJsBQ",
  "key6": "4UHkEkPRZd39uW1uGMABf9jsxXxN7DcqBmSDM395HRfQ9XrDrq3KV2KTMdge5WEjEPewJCPeyWduvmF69GxgtMNu",
  "key7": "3LVEAgp7QbwBoEyYECiyGkrrefJeubgk9dKRtxnBzCPxyBqQerjXLZbiS5i8xP4A6BBRqN7qZwAqAaNmzMb36qUN",
  "key8": "5H5FtNRRF6dk1nV25phNF32q3V6ry1Zo2VsWWpMrDLE7YRvZcFPbNEwsMNyZZfGgjcufSJjud5uz1vib8FLAi5vC",
  "key9": "635WP1nV7yQSyeL6UTeJxPXt5BLsePZxpC91WsFqo5Dw71RTdH6BfPGvPWUfyEBeqmJZ6w5JyJDyUN8DNvXVDsuY",
  "key10": "598VdQSewV1S6JEnAukdRCLM4N661N4oXuJLJddEe1e99hdhsMGs6aC1G772fkvhzgpLsmV25pV4FaywsFq1Q3CC",
  "key11": "3LQTz9zCpvgbWuaHdkqJGcFHQuEm4KKgFb2u31Rc2YuYDkX5ejzx9Hq6HBHTyGbYjog4Xhc4hnPTaZKxJoRZJt3J",
  "key12": "5Hq4twWXMkQFiA6MpppTsGskUtjFTin9rjCAH15Dtq8UikEZ7HwqyL8FszoWjJ2F8abDGgM5KFfygRTwMRWpVL2X",
  "key13": "4FRrApEQSkceF6XnhMaAfX4KShPnWzbYKQHA5XTbdbLwfCoada25RZu9FxeyEeHxWauDs1NjaKAak7hY8a65vwJ1",
  "key14": "2YogGCozN9cgbB5bYRZBCa2CiDwUhAfnDgKzboW9Y5kACf2RWUUPuXFXFGi6F7ZPC7cSHsDJEb6JJFYVauaWCCkB",
  "key15": "2ERskEmXvseVfjr5zzi9bPnxqAaf5DbAA2v7jeZ2MDPVjKLN8Z9un58nbZdb6FDUmaLdzLFmTNnvwQqffB3PY7ur",
  "key16": "2fL4yLfPWLv4GFrffTTF1LBCEaTk5GviqGFubU4CBytwKxSiicnH1R44uzXMGNvZZWzt3g9FfiMbV1AoD6VyL5MJ",
  "key17": "4bAUjsRr97xpxjzHDAXEod9FnB7Z1FWRwJ6QQVYd3izrm5dCtPkBZo227ySxk7heSGNiMRLavbrR8myCpmUbFNoZ",
  "key18": "5MJSix7zBjajkm9vpNvudvgsYWWbUmSYPaiGnQyosibtZZ3Y8RSyGG5PTSDja9ttoTnDJXGeAhno2pDZZoTLJgx1",
  "key19": "5hkas56NjPN5qDenzZh3nfzSr1xgEWrPqRAtBSvcPa4xFBoreHRYwXt2xEThp4PqeawVEZpdXhJP9FpTEd3LKmuX",
  "key20": "5xQJa68k5Ebpf2AcKtH4uRgxUAyjwCq8f6CQZRPfsXKvtzenydZZHnig8hp77ohznEpKEqu49q2BDHrPc1NnYjB4",
  "key21": "3tzCeyTSSjkXvZVkSiumRsJjcKfBv61jZykyEUvbqd8NWZjSv3vy8NfzGhQA7dAk9SrGT1jBvdMo6BMY35afycUb",
  "key22": "4ZnNjgNmYqTAGveDMy1sVWPTSHbJ4qj7zEjrshMvh9jhvz8XQNcorcNSPXBphjTwheWDDS4TaKH3V1jDhv32CHEv",
  "key23": "3Jr5SYoc64JJXhc65XMnu1YLF1KW3hZuXEMmRqap58Mvya6zVwKSLLLUcwMD7dqrtVdfxpYSQiKaHBaVxp336tSn",
  "key24": "C7qsLsmzEHhQaaggTy6BfVNRnxwCPdK1qwMo7G5vfBAMzEyXxEUgP2XM7SVRKutSuqfvXNYUXkDdb7BfQw9fBvK",
  "key25": "DLSopgLV2LjKtVncTfTVW2Cxq9oXnkr3asdVAc1TgZ739aEpJdEpeRybz92SaxhyUrVpGSndwdsm2zekNK8ZrRp",
  "key26": "4FN7wHyShKxLnhntzoKCvwjRSnkPUXnkD3ECU8J3APtPNDivi5WEJwoGCDyZ5F78Nubw34gzR4S6nFS5rA2QMqQu",
  "key27": "5qEa4MumQwqffSaZzVPVSADea3TUPznsPw6NhrabKTj8W8emnbNTyQZZKsNDRAHmM1vCpfKCo3Aso2fdafsqB8Xe",
  "key28": "52SGkzr5PKGT8uSnRyvpqdUHkgTncy35dZ2mZps2Rxb6R7vuYgsmyuGC1JMZAmLQ1UnmQzPLVF2XxT1sSW9XDN9J"
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
