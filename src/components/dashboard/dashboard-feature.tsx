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
    "5TY1sjQvJCyEVvziKY7wNmLNCPVKFRqYAmyG5z4uEY1fL39fwZijnmTvyoXVGRaw1EasbtKcNk1cjm95dbjuQi18"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qSKYi3bFbiJZH6yeiCnnNB7YrNjprmD15Y8LDzc7oEwZife5R3SjJc7jw4R8M3d5o2ujvjsuLskfDhPZKyFq3xQ",
  "key1": "3KuJrjnZo9K1tbEixCeLLMsiqvv1SeS987fLWpx9u9AosBPUYmJsmNJbBJBkhtAFgHc7LQ2KNds3ETGDDU398Fa2",
  "key2": "pQPd1c2z9KnKxPWSummMQVNoCZ28uEPzMunh3R8wQtVThYkTD7B746A3obhvHDa1Dku6zRLy77kAH82hQJ1nzpF",
  "key3": "3bSQe3YkXRvrYi1bNu3PGUd9Zbrmc7usqdhuvPbsBdMswfSJtxu9jcgUFtFZESBQqg9GaBk1V8WANSdQWdz4ZYa4",
  "key4": "5asmT78GGfmPAS55kcrE5PLbx7aXGSiNP9S8YCZRn3vHEdy6YyQouMYZR7iYR52qkj1nGT5bZSMTXF1yanYVnJRZ",
  "key5": "45Pxb5PC9U7LvQQxjXUBqtrHrqXL9C7epYSd5fKx1BNYKM4t8cFhhQvvp5BKRdrLWtvu7zR3zWvhH3nyJhiREiRH",
  "key6": "5msuUHn4oW6mEXpyTzcqTMS2Tg7iRp2P2M7WAxXWwEd4Enie4SYLmxhBtJ33ycSAn56jbX79nWKsht6bLkTmESDi",
  "key7": "2o4RKcr1pZsjGG1vJzVDpas5p17D8hbgJTToUQu9uMzxn6sZeebBrPtkueZQm1JQMZ5DhmNvRVREPbsk9WjT323x",
  "key8": "2CEGCNBHTV52hz6zYtFqcsnvZDHNEb2S138prQR1QHNJrH444JY3uuhzGf5yMkmwFeHbRKWNqVynAtqkMrFBTUp6",
  "key9": "4kVPRcDcSuHMpxvaQb4AGJWQKhtpFTgqduVbnXr3zCuq1qeL8ynPE7Ge2K9fdGG33JUB28zv8jt5FME88iDtJRMb",
  "key10": "2i4wNbZgpD9uTFwmn1h3BeWpZ2qR3jVgag3EcRudii4hrF5GSZDvYSgp7iaNGNwmJJ32CKTMaQ9xizwx9EHsQWnL",
  "key11": "4iALV9VnQt4iKArjcyjhiALWXtRLD9N4KtCS9ZrQ5yeUCQM3GStrL8KvEQnKBa9hZfGwq4nUyYd8xDw3DNeVB6MM",
  "key12": "5cZRoEXFKw75veNQFMboKo2z4JeeUN3ydVcSWShXkE69YkWrjWCDG8Ap9gLyvfbUp3UPy5pn8Z2DGJvSJ6M9c8Wy",
  "key13": "5dPvHvEYYkGMpXAiQhqs7PCi19q4NZ6hTHV5CCQLQnQTpargz5WWPFnUH7zyCFU1PLM1Dc7ZwunQpv4PSw3tHkQ9",
  "key14": "4VMgAfTm6Z3i75TWwzcv54DjmYFjRHYtnTactALnf5jGMNzxQ8tUfUXNu6n8oEX1nvkaYaTDdH6w2Wge3g7qB1UN",
  "key15": "56tZSDM5F1wiFnAReqyfuAM9dRfCbyJXGhCq6d22uu7DGANWHsGLguVvpaGuA8zcffMEJ36CoY7eNXSU4nayV9z1",
  "key16": "4r4XiMFpHc3NvQPSjifjht2saZdFYibmEpisjUxam4215sMZPsG6vQEdx6vbs7zQy7yS9v2wjs4hsBw1Yj5ofiA3",
  "key17": "5JocFBRH8WHgdVbSTFEaFSZKSD5PtCHtu2x3UM3HJ8fXPbpyfH276a5hAaRSAuxy89m58dvXwmoST47k1a6Bq4o3",
  "key18": "21PitYGoP4TpWqjhHVHZ3X5787xKCXjQPSXpNAhBPHRrJcGssyfnzWgyY5ABG2U8kLV1EZnc14tiaksF4sJfLrFT",
  "key19": "23PRJ48aHebAuuTCpP6R9WFqErmyuwsm6w47JWygE6aeGorwqEJB1z8c6zR7EBxzSfQoTKPBGL11TN4wSwSXaphr",
  "key20": "ptN3YUvaE63AKE8Fi1W6AtQAXufEVr5hwg4cjEZETMNh2Xm3fQGzyBrxY4w4EsShTrCTq4NYaBz6zeqfGoykvxh",
  "key21": "2zoxcSrEKwk88oSr1WxXkDG2d13oMDnKtsosWTicZKYEuVkJn7KK3AAysgMnbRurGaqbqGkPoz7vaZnCoHMFRGoo",
  "key22": "PPuZjXhBNcQHoZcFwN2XvAR5D6zSHFAi69KJ3t43uni7ghQnjsJuxz3SeLA4FMswrEjnCgg6aAnyadGTP8cf3is",
  "key23": "62ZwJbrfNR8nRyHkXJvg9qNVfe7S47ffytpdDXRjBAHdSF5dBAe7jmAPMbwxPttv2hfEpXRqRBshGQthSDm8xSoZ",
  "key24": "3HnVbFhuz3jDgxojWtx8k32PsXFh5UBd46BBJh9gBbFjL8XvmfmzeEAMGWic4TXvErg9Ec3BdbVnc94TYPzjpFV2",
  "key25": "3u2ZaNhzcp2qfoWmvGzGJyp5MUiDB59SxGzRCTs54NWGiDrvmA8TbJsn7hcSemJwGANRcJ46xUEkVbVXarCA43P6"
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
