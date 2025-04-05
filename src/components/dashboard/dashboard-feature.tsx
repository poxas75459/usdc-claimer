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
    "5N7Vo2CNo74hawzAj2f4d1uGAF5bwufAgdxLcA8Vqaxk8Bp8WGNExfqnJuydebMkidbyGZSWhi4h4z91j3Bryn8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S9vaUTZMLfQpt6f83Da6Uubte4vcUo4hFK3L6iE69AjpobvbXRpLDBgfTTKDaq4s3ekriEsu6tQVZ7zLco7fwjZ",
  "key1": "7EfgmKpcbbdMBzxDeRNAH7nmuxidPv1Ej7EGqd2EeFumetYkDcY1dPsCCe9D6oufB7mNsdMFXpyuV2LKeK4PFcX",
  "key2": "434qofc1JDvB8Rm7FBe9efvs13g1LQfART5UF7xSbMMbgRtGtyFTPaFaw56dAZ46FhkjaYRHg8R5nZEroHQGi9wn",
  "key3": "DhxnBF4Kxh9dQQdw7XzeQbZ9roBNVpP7X8BzcKqng6cJZUFqAHzK4hXF4Tw2tUXCHUAVkjG1vrxtVCbKttcphnd",
  "key4": "8xznaGUE9FspLytupLKJ1WjrSmKMUCuqtKpHA7cmtqYDiFoeTa78fZ5kbDDGZbzamqSAaSHsXyBHmkbMGV4XEJ9",
  "key5": "4NbYRUtiU17Rfob6gVCB6bWHSqyWBYf35hqbZBqhd9ZWSozHdhWWQcRgB9gsTnUjWoRcjY5nRNpmbtPL4NvkVSGQ",
  "key6": "3vs9qKhbvyPvkSyb8cUDcvLWvq9furLFqDgp3t6p3E9h9K8jSZLg6odrK28MpBnd4UFV2pj4WJse8yuNT7y6upEe",
  "key7": "2H5UeACjGDtW3oq6AQF9HJtmMj5KTbNwm9rU6dYQ6by8BaqkoGKmKf2L1oT34oBYXUd3gEGdNAiHaEiVpF4t1WxU",
  "key8": "3KueM8VA1dA5smCZz95MTYMj9ZKY63MX79LGsgFzAhBJ4BzpS4RwsnrHrCW7rJ7BRK2drCMAct21fUqfEnQGKBFF",
  "key9": "4jNCgT2A874vnumZjnnEnKDid2QdJswBKjNRP6UXkAkBLoVxcLq4q6h5Bh7nxQvEsFHHLrFCg7byBzECnSKmbiUp",
  "key10": "2Ssm6jyM9d8AuXVGVBs8Qcr3a39eu9m3qryzwKog3Aff3WZEwvSvYC5XfAwLmAoqC4Axwfig14AtjDdXPS1bajoo",
  "key11": "2GnxrgdpX8bjFfFY1D4mziuTMKxEY9kGHGybB5LVaX2FND48jjK3RuLi18x8cyMpCLfP2TsdRk28tCz4j9DN2wZj",
  "key12": "4iXapSm5WPrGWkU3BJMfqoFhAYtE2qhc8CfnKTRHaSE9GxyafbPqZSVjJLmbfgVoDLHhCX2XnBdctyPLGqLwziKk",
  "key13": "57PUCghAViiT7LGgYrGgBhLi8y5ALzwqo9rgLJaN4kQGfBETW7CetvEjqZ3ow5FA59r71gNZ4EqVhrhNnjqoPkaW",
  "key14": "4GWsAfxgG8yipdeRJCLPCaFTs9W8Fz9CSDzUVLNDimUVhPiy9vKNe1KR2wk926a2Qh2pjdjsUmjcvdzwipe5y7nP",
  "key15": "5vnqzNPxjhmhquLTACNPVpSqR4Erpo1nSheVtwbaBoo9RdvraYpb6b6UskEE6D8YaVv6NLfFyTzDvndHRNyCVfym",
  "key16": "5EHaztVHv9ZNo6vLYHeYpPGYvM7BipRSzX7vFCsVN8FTkzifgAmiJDwLvZRb6YLjXY339QGxLBab39er99Nc42b5",
  "key17": "oLN6ACEk8TT5maDFuzmtr7U6qLuedGJNJDCVfa474tN8tvzMXKsahXpR4cfhjoQSbxiREqZKz41wTQrfD6EAn1s",
  "key18": "3yCsa7pq9shLzzWXSCEhu68CMFqEq2k2ngE8eBzi1r3HgDEyNYy8RNZxWY6sBgrCHL9qvcTWAPZbdePD7hxUSeBk",
  "key19": "3xZevMuaqgVEuismYvaSiPAY1aPrkZMLLJSXqJha6twjErh2pmmAsmVAUSLUGCa5uAdNLbwyGzNGnLUDSDkgAGL1",
  "key20": "4TFPifoQQ3w1EAsdtSqS36XtUrTUQr6KB1y8rXSoUJXBXEBipsBfncHG8dAy7ydfSoTQ8J82GM64RUfdDS2g8UgY",
  "key21": "4LC8hhAnEnBKgDp27ADAXhKdzdLQFHufqpGXK6Eso4KJAb7iASN5dJmkEA2svRiUWseZ5j2miXBpo22zBaD9c1Zy",
  "key22": "5VVgz2XnawJQwY9zE5D1Je2sbrXDT3hJgbPj7v4Ac5TERBgBiyGWcvn2X3UPiJj4c9WoM4hNfzvg4yibWQd1VABo",
  "key23": "59xXaaYY8fBNygC8LJaDMsKtTBHKezVsUyDTtcYGTYcCFERDCuWNoFCdL1N2PKKFqeVKCf6aa5xiiWp5PN768Gs7",
  "key24": "4xqkwp3vqiHbYnyPjg7gb5wSa3jgL6yCxcshEs52FxvqCzJ74ADGMHVAtMB2wRkGGrRrdJoYP1e6zNjJW66dbGE",
  "key25": "ec5azq5bDLEpat11Zxsh4dHeRqAGbrDWP3L6TmhcaS8yFUEDBokLpRiR8pSJAQYWWhHmSV811W2B3hZjpFjPeaN",
  "key26": "2p81qU6yuiwzE6YncgR6vmw4YbJaMc2JvRopvN7w27okLKCB5g5FvFiTpNcETGKmU56Q8iYtEkCL3us6sLzzNYPN",
  "key27": "5mmPB8L9cJYXLAaJGLRCC4wDTzntFyYEW3Y6AopJ2FEPMbWrXD36QUuQdqAAgkjE2SHTvdKGRiW3usrAyvkpAjAU",
  "key28": "3d1cXac3pUtcnk6Si9aBWLR5XjpzFoVsSGQrA5at3g9GFoG7C4WM9XUUxSPBT3MkUEKLwVHkNJA7AafR6qfLb4Xr",
  "key29": "3F52tzkq7ubNCNo3jnHLueQAuakBisyzQARkeyb8GtQvsxomUyieJBK7DcqbWN2GpcvPAHaPUiJuTPZZa3uoWYzz",
  "key30": "4TG7GUovAwAqC5ESzB8enyRGTGRNekCTtZMdorV91xK6eKHewSCyXuyQLUu8wHf5aLEftfZ3yLtNCrSo7Sk1Pomz",
  "key31": "4KZcRBx427sQosU2KhHCNK6cBNCtpYmiD1VwLr7a4CE31RnHLs2niRaMGeopSR5iRHfgQVWL7Uoe85oWMuXqvhMS",
  "key32": "2tggoDf6V687ZM6aW82iacLSuBf9RNaEzmp5BmhwyRCogm9xsHibUJyYbWepAuEsh7Bi29bFW24jHVPvXHtyu4pZ"
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
