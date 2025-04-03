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
    "2Mqz7bCbzWo8d5H3n9wc5Lf6Yj7FuqhnrnqHC4yiFLtbRBckcnjasNXwB5YuX8KtPmAfKvNKUxqbCVDmASCB3tPn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z79VVAGpnvwd4gwrrv7witRBqrDKsLxjZAbE15EAzb8VJtjXpiRDKgfthYgEmp6XBaSxAGuF8xLtodAHBtN6Srb",
  "key1": "YFgHVfT6ZGgbiKfjERoKPJt4SaEY3KH5iToowDkQ75vu4JbUdhZdWVm97VNFChww7A4A8Z4D5EekPCEk7qWdp6Q",
  "key2": "56UeJki6gKHu577YukshAbfYmNpECtFN1hJMzJ8q25RFvNG6sSnEVBV5FX3sitEwe3iFqempqwtd4vZn9J4jhz5s",
  "key3": "4BteeE4rtSjPtdaVq8L7oBV5Zx7fWJBCwEW8PC9vjF4x16BQTurzLcTdmX7wYruDsAp9VcKmB6ZJ1gkuMuFaKEUs",
  "key4": "2wxqQDoTAynUYtWEQZWz1tivft7vqr3oJT6rrEW7jdKjqbytExYZJbMT7a1YVuNbciRLnxzknke1G313nQs2XYe6",
  "key5": "nbFRjKus9Sib43ka2WijLyPiDGrMhBtTkJYwX8rvjHjDmn5o3WxjAj5G1TgYEQLhQnEtoTxV1SdRyJpn4TNtsUW",
  "key6": "2yvJ9YjxdSQfSbQ3usVjpU7Lwk6AxmgTqhN26quZ6pQkLPK5ywXLypXxC4LRzSEB1jMsJDwYfgJwwQQvo8r5MjKH",
  "key7": "4HYbXieRDhfhb3NBKvz6SHCDPHy3Ffvcr65AYwrdtYRZTqbmTKh7f7YWdFCBcxeHHZRReATpgCTFfKzGcLo2juwj",
  "key8": "55NGJ9UHvrqNZ7sBqiTZeU4mENDRi59E8wQ5sS4HoBbxk2vwj4L98sUvnQo2qUN5oESMCpmuLV5tSt3URT7BM3n6",
  "key9": "4zouRqafQUP7fBfrmvmmME6wf4uXEko9MTK9mfSwrXJPBBxKuxpvbtj8ojjvWQqaGGyE2nuw9g8L5ybySboyfu9y",
  "key10": "2rqjfeCjVDixGKGfbfcMXUGRtUjx6baNEBw1Jp9MrBZyEW81Xa7DV1CFU73XHmipymS1reoaGuuzzp1Eie1Hi5KX",
  "key11": "3getxzt22R4k2UqSJuMnXWziaaiHTZcwRhAimUqqcMV1YbtVKMT7xVDfsmLyo7XrKGLTZbW46iKwHXmLHjezJgiV",
  "key12": "5rEywz5mhtqXydNUur9XTdxhDsmUMqfh8s7Pej4vZoSubEmTicxyUBXRoxPcQtUdZGPdzodgYuQNtSEahasuS6BR",
  "key13": "2S1VMJDxyeDFNZCV7Qp2cEduSc1kChsZE449Lr6c4m3nDVBehThfGEyfpmUR2JmFfxfm3yB1u5wEEiSz4hBnYugR",
  "key14": "4o8q51Fyn61kXjeB9mmQNm5iEovhitGTJVZwVVSFt7WcBcbmPsgwjr1r3fEZUGhuX1qjcD6hdtBtP5VjdyCjE82L",
  "key15": "5hhGQKaMdWvygZ8B2H3JBZdqjiGsV6gcMsDeKBhan6V5FwxjdsfT1wdiUAFUfkVKJqM2w9NxtUEzUhASFGQrJUpF",
  "key16": "5RrkHSke91BxFjB1pghYtF4mLxcEToXs65NhUAECoce7DiusWJ72aScB7MLTY4ZE4NUnXg1XmDT98zLaFftpxcyj",
  "key17": "4Adtt6c45gYJTWHLmQoPYMX77SspypG27msbHWKF8eR9i24uBP6wx4PKDNcaoS3r7z8AYiahdhaaJY78fiwAL3Up",
  "key18": "4qqyLHMqejyrztP4C3WVwb7i6RHAAzN9jRohmg58Ttwjg1ZBQNg4VXo3szkkjGRm3J3wNjqNwbk524g3ucZJPRFw",
  "key19": "5cxs6PCVgXMZtSpgKtiachjEjvYyPLiF4oBpFa9jDTg5vKAaLzhfBKTbY3RHmqGKX1ZX4jWtQKndcXsrj9AWpkXE",
  "key20": "5ZNdtkP5VtgYhVvisvwSju5TPzdEu5ehsahfLJGaTiANPdykGqLbBZ4tzSz4zo8x7yZssxMAszpaTNRykhj1pPgQ",
  "key21": "5Fx9MFE7eUmuHWGWEJ5EP7jiMDvNsPfV94zX5S92tKM9yoxNuDgDdg52gacB5BNcCqc4sAof1ccn975mq5n44oUJ",
  "key22": "4UHMTDDg4Jo362s4WrmRKBiLfgMaacpFiGHjdBXo7PBpKDtVDBPHTL9ixp5p222jrvo9RMG86wAfk9CStubn4A7N",
  "key23": "49TQFKYVsFvKTeSqxC7xcEdHH2d6fiU3HggF27qRkersp2r8zK21M4Z2S7MBcP2LoyBzUy7Yf652Yx46cay65HmU",
  "key24": "5CrhGLLhWsUVskJBEKssde9v6Wg19f66ZpXn2UHvW2uj2ZcrkvPjVn6kyjopsxWjsd9NVonvzFZp22Q2NCst4uxf",
  "key25": "53wSyKuqF33SRyTwN1LNt6BFVjDgKGPwriUeHkCk3ZBcE2z15vxd4A5N9qdZEZRtcfcRaq2p8nUbAqUUZHMgyXiu"
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
