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
    "2RcanZZXzm31rMENE4SsReDvgarrqXcG7PvJ6a7aJxnNVJzynJN7fiw7LEQ91GteHnwnJDzr67WKhT1u3FzUHJm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TAN8gHgQVHByh9CCkCYeTBvHnfLGG5kL7vcjPQecGmpuBbDfj4SCfxwLwqZn8PHD6fgMHZKYipMjVhhZYQRA4sy",
  "key1": "34CzHNN4dYjEFbt7om1JK52ghw1MQPv2QDvWedMKva6rop6syfw7QVCbecKXk8Jy3oHmLfcjV8w894qDEnivThaV",
  "key2": "3PfvviZSRMG18ybTo4Qsb47Fyyk2LXR7sM6qvtGoeJ3v2XAA4ffZtFYtbrpdnLT26Fahbwco7Wo8aBrZfmKiHFV1",
  "key3": "5x4B4ztnGPYTWKPjN6wDSgha1hRTuxnEwCqrNe9DjQEdERf1a89XwSEoKGRBazN33GvYEVUsBQbWEAKgEniKaXvF",
  "key4": "eQte3Mbn199VpT7wcNCJS45Cc3kSUSrhE7uqBRjM6seb7bX13vXLKDay6jMneNFpCkAHu1FndRvvQKdUMBW49me",
  "key5": "2PT9R6NtcZ83yAYSYRRMPzUmq5Ho3YtunqN7cwJ4pd5Y6rJuyfBwcsFYmeBToEmBX7rxMh67Lc3p9uvTMEhGKNzk",
  "key6": "2uohUU4XToHdm1FveTg4WPDvSewo9WpQeWVFKr8igRzZHKZ5TUfoP9zkwJvc9zgu4PCoNzjEYEFZPTrw85jq1RfL",
  "key7": "pWkqjPQKReVW4A4H2diC6VDuMragAwTog4XqRRPvohn1v7JdNUuDThg8dKf5b4V8TLRfK3Jz8hnKuUssTokc47J",
  "key8": "i7ANdbcPo49cvt43kFJeVbgRRXAFPv8p3XTht6GHMopqhRN1hYN5vK8PgD7NuRokzrrPCepS7dg3bFHdBCCuVa1",
  "key9": "bLiohJgmRXZBppYVjjajr7j3TY7tuqUXk6EbFTEK1AbLtdSJqnzbMRdqwDYzHHtZDXCHDBgJQ42RJGNcb51RiBZ",
  "key10": "4sdUHDCjfjyB4cc6Y7ttAG9wuwstRpLh4gKCSYmSQioMygiExGRLfxkwZKguMxNw2zon5YmyaBtZrRG4m1yysr94",
  "key11": "5hLGqtPycBq4FEVbu8DAhLmWqgUoucLVDMxs1pVr6Lme839XVpX2d6XpokD6uR3fRYYcPUxbpeZagHqP9GE7hjgm",
  "key12": "4LTJdwK2zXerrCyn7Lf54EmoEA2SbjsBXAf12v3teKxZihYQq7v2Z6u454jiL3kmWAJ88kPJAbjFp9HNE2MkPsDC",
  "key13": "5Zmi6KyjYSrZDNGSrz9GF3fmuJkUi439BpFg7EmyRJ99K2PcJKxgAbnAZSjseHr8SoHYkb6zqJk9oYKBVgGqKhhg",
  "key14": "4YfeDg8Ued4o2X62vwqvVqoFqXtgswnBbz2qMVRgJoePYrMcU9HFSkQpjv1BBcm8kD766KR4Ytp6YJqbryVvaqbD",
  "key15": "3LyWoy9U7ru2JsHWhpxmt67umrMjPn5L5Z3iaYcHLLNB9XqbLtioS11t72szikojPekcHm6VQ2j242R5b9MVko3w",
  "key16": "3BcbxHSFCWV7TjcaxtjG6yqvr6AfSgUPqTsk5gLLGEiXimdZHYgM5v9gcCq7yqnJxhcUEUmY4sKVeHWV7e5xsFo4",
  "key17": "4rtoK2DgepnJCrYg6w2oJTFLdY1kxoHUeD3XYm1aaXxD7ySKpztSHjdRR2SgV5hmNFJ97XtCfDfoUJCbubz4995D",
  "key18": "hfxAz61cvyASemufi71eaccuyhRmRwxtv22c8ngjiBzVAmWCsXCDHRs2xiweb3s7nhLn3SdWpqvwreV4jMo6RZC",
  "key19": "TMWNtLDYrAXJWPpEGZmkmXCaAwsGsDmAuXzLWNdSoDmHbi6FgaVv5Gy6YH9DxgcGe7MKsXWfZwaMcwRHMsV9moq",
  "key20": "4DySiefyfxAVWvMoFNhHK3BsDcg5GH8UYHtdEcvn3Tw1QvvvRSs2ZYuo3egsafW4QKLTrkAsnzmQwaW52MDCAcdy",
  "key21": "7FTpKJeJAQp1fgEUtNsMBRgyB8i874k2vKgne3YdPSv129btfw6Jg9diMLo2Hpjpe22EaDiQTnAbamijGGbpiKY",
  "key22": "aYMzW7ZdDYq31Ed6x5NECBEvGsSqTRJDGGkf3qk2ZzRrxd382rBC7FJdTzMUeXm8FSTwyyobwovM8Yiw3AzkdiT",
  "key23": "2RtRnGTRTj4vejB9vYd8mjATezS4PPcDXuVn2AMv8RroTiTjYBr37ix7pUf5iMiQ2ynANEkqMWPjk2gWPZknAFXm",
  "key24": "5t2Ggn2BnjyAWCAQPkgM4CAUbehckRUzHUaPdiX2CKKvUDMGSYUZgschPVTg7JqALAL2EePVVBytnkn95FoUFhVn"
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
