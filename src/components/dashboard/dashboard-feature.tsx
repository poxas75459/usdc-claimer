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
    "2P45d7wwE8j9PPRemZHZALK869Drrvw5jYMLh4YeJTB8aMaTQN8zf1MBchoEyyW4cY1uzkrWUTPCMyioZTt479ZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DbCtgFZ9aJqjcX2bbdQNYSBTfT3y8BbWRo6Hg1fX1NPtjzgcqFRbZVdujyFr8f5VdF4psrpaTcWcXSS8EW62wtm",
  "key1": "5GimwFfMbvGtHZWauC1RQk8B4feaRKsDFNPPoJiH9RoAmUriUXkTkUkMmXRUe5EBdZZy6SpwzVpDeWt1pjhjcDZ5",
  "key2": "5xqxepC7p72zpnpHiyUthNhv7tDS8oVxbyK4wyDhzWDcP68uWQf5r56bmfkZLxVyFzepNpUDckpCZ5NGs1qT3c4y",
  "key3": "4qibAvuRH6EcQ3J2AqtWLWgMNnpn9zRM9d4eyjCcqmFhqgZcXSsc7bCyz7DjsQEa2LAfJ51t3oxQsuoP7APbgCQ8",
  "key4": "39nYThHGwB1LUkfubxTUA1vqSgzBBECRuUYkd8vaFieswLPPRcBm8322H4QQ5443NFDAp4MBxCx3rwzgzcCSwQMq",
  "key5": "iYJm4JicAsUwa6qnQ9eK29LBbycA6VmpQiYBiqfH9gPud5A851Q8e1VtN1bAWswd79zWd5VWaEnnCkgepZXaogw",
  "key6": "5aynrbTAHQ28ng6XuKFe1tBnePT5SNsFXg9CZxPz9ezN7o5HZJK6vjVnodGHn5HFT9NvtBkAJhR1qkurtLYx3UXp",
  "key7": "2YRgVxDhyQhVahQ6TypaBpDv9cGG946EXh7kgNZrwJsyNV2yjJ2khumdszMEPyZVcW2DQ2Lo7chMiYzSouji5xRK",
  "key8": "28r7XNVK443Bnwi8xneGA4kVueLinDonmjwDEqfHGoxA4rnimNxRRrx5wYwtKJnCUpNFzyccFSd4pncarjS4ibsP",
  "key9": "5PXfT9NRFXgoa6idjD3JsaKDj7DWbGUxjhNucrLXweqi3PqhofoFmHgKMSjeXuYwQL5kM9GtbBnZknUQzn3xMP6g",
  "key10": "3hJJBdf6w8mNJaHgAC4eE6GoLTQN1FdopyonHBBywVry1kTciBA8BpGyp7P6RwW3VFNW3Wad12AUXDiykBhojX79",
  "key11": "2vRNQhGidJCSHffFb6TzxQ8QyuSskynwcoyv8BAeQCLfxhyGmRr8KLQ8o6pdDCrjK4fN8gTpunrVW9xwktqkBYbF",
  "key12": "4tTnnZe3CehZLf6aKVZQ5GQYbBSzSgMujwKYc3iz5wtA9sWo9CZJ8UFECYq5B1wHh2YcWRFzfF7Xr3JnDk6j69JB",
  "key13": "avEF1JkpzMeu4JRZofQCZ7KxtfqdzTJp1DjutipMf6SF7rAUnTCJWUpfG1CDBtfLv4HS3X5zVeFMHrnugwGyXTJ",
  "key14": "5REMgRQ5DNvEakmqmCBsqqEndyay1y5mKYcGd71XiifSmkafewCZQMPjUtaN1BjEiKHAzu5m8xhUF2sYTy2axMCY",
  "key15": "4ntNSV3yCkVPYXNhniJY9UsmcixPiqPJFNtaLx7XvKnCoBT8PBfD9ur2JBYf6Xac2gpxBFBMT9tmLFNzsZfpjtiU",
  "key16": "2SatesTUUmsN3VAsVrDBFUgSXuuc4ovrc3sFVZoKMtZ1VTWa9gcYVXjLkNrUP3g82cAcJrBbSkusZQAFMeHsqNWS",
  "key17": "51ctK9vsnUXYob7R5NyQNKVak5psjSHWtADMYNXAXExebdCqM7eYsfWZQm2AjWAxSLcMpH5mMZv1WzQrbVSWU5hJ",
  "key18": "H2pwV1T5FktP4H1iHZo3v2AiripaQk6pVf7mvfaGzm3NgbtUPAgwfZcFgPjdDYpc2B8NYYCG8CqkRqyNgJdw5DN",
  "key19": "5SmgYQrY4UXyfUFUvhwT1mHtRF482pBkW7RRvXKMUDua4n1TmSWwDrPmkZeimGVZdkKBjq1rsZmKuVK4LHrXpuJq",
  "key20": "3udkx8qnx51HaYf4mVdmM2929KLAdRkkNp5y22PrcwvYgt1iGEazJiH1ZdWsjLxJhpiARgNXm3RG3z7ueXf6jDTC",
  "key21": "3haC3GKrHmKsrMGzA2xjFCbavNxhxmwy97bWQ2LyDYGmE2k6CcykcSuuTXnxk4e9KFg7PmQFfEid8poi3mZS9tAk",
  "key22": "QvJ1mxhbAZMGGQ9SHAwWgk1KPdoLt6fSB7WxNpgorwRNiZop4b7Xg9EN3YYvrJh2T6HRtrQp9wy81286MTRWD5G",
  "key23": "3vbBkBNrSqFEcyQsL1FbN3JmWAnx3a892gEuNMkptCQwYUyt9Xn2b7yGvMZHhTtijK33b8Csn415pautm5LQKLmw",
  "key24": "k2DK1zoYYce1GXFehWMiTcXMjZG6DCubVX8w846x5uQYTKtBef1u3Zw2MdWSYVmGWeVEkgxoTk4xDFKPFMT9pVP",
  "key25": "4ZPLHScJEqoRg4GASRaF2tWJbNLy6Uz4DyiE9Fb4meux315YiXD3wRfiwLoUKdMExGtEfG7fh2ikvSC6KB5n38NM",
  "key26": "5gxjQU5qToFu56ErcJAowH3vRiiVDt7vEZzccMNc3LNfUKZSKLvATroHbMk8LbevxHqMUwADtgd7GjCFAn4aG6mS",
  "key27": "2HiyCyJHf1GiuHw5GwrnTLWTxeV1ajoK2FCPnN4poZ3n8jmDsn4CiDZ84hMNRj9Td6thFgtVyA2GHxsv7ziqDA5t",
  "key28": "5utDYsQ13wSHxtTDqwCDU4YeS89UpQy3ehyzM2g59k5sdpZtD9ayqeCcfdbZafaHNN22iT56UKTyZigv6FtzYzBp"
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
