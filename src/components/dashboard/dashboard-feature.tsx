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
    "5AiSe4LxfMLkt4mrmavTL8reajtP6gmtNVZgCu2XK84PLZbD8fxCZcLYiBAVUv2Cm5tpaNPxBSJbbe1VoZrHdCza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M5m6wAt4QLqN1GRu1xJNaLQj7CdNu2WEExHRgu4YdhZuk15YHDVHEHk41aCt9pGkhySZhxHDwiAbEH8BbCkd3gW",
  "key1": "4QGcqGzPzTG9K7gpUFXLrKnWsFwqCpQMnSNtiQczXQEUgoZAzPXfkPcrFqKYHDLKHKxiq7CfJatG7S62vWLUX2H2",
  "key2": "5Wem7H3zmkSKDcTNdNyu1ezw4QpkTEMwX38G9vScMpveW8VH1rsdE5ySS3LV9gML9Pqwo9pGkdDHBSvaWHJyfgeS",
  "key3": "4m29cyuxvNHZNUB84WUYDcCMbirBhGazEuZjQf82iYar9a8mUcrt3BzT6gFhCzSWBZErT9eNFZye7GT1Z2RUkkkj",
  "key4": "4cDMKoWTbWybzsLMQC8KNRD8JSvoZ3To75YyeQqd3ejR5Dzq9uYCMyaqHn1gXgp78honNQcnQ8nPMnMzwQVYM5MV",
  "key5": "vyyamQa1EeJ8BNRUeBQ1PHwA524AvcKExMdZxaBbUkY2d7SVXoY23bPe9847dcWkp6NbN5cNG72cGapFrBWJXUu",
  "key6": "5BjNDtZGW8JGtwWv2gD6dSYCYKpWw2qiV4y9TNee8j9oxdN76adt9DT1xuEbX6eKwMCrF3BghDyBUJYt8s9tkXnp",
  "key7": "4GAWseYdJFzVm8AZUyXzz84M2FTxPV6Ft4xXkP2tyHmEqSfa8Xw5GXLcq6ipKW2iQsjz4jXeUyTXrgxRs5tUGRiL",
  "key8": "3RqaZoLnaPjmMvufQVjdQBW9RpHJCAHH1UuY18oBcf54GWWie2dAFi2R2chkhGVtzoQefdFC9HhtuD8wtsrfuUPf",
  "key9": "3oxEkqDKYJ8bpenMTpSKt8RaGeH9qAuBt5VAkWFdsLCyaf32Kps4PuvRRHrsizHdYe2uakdpXV7Woa4WL1APiBDi",
  "key10": "5dpHhQRs6Q8gX9LcC5Fv5ZR8FKcr4Z8EegVz13c9gBgYXq4vrYFEvYrF6Z71FkcTPafZ1nYBJ3YcuoAxkrhMw39Z",
  "key11": "5cyaqsma6MqDsoYyyarJTuWmw4qicZexsUmfiMWoa5eX4JmGNPWQNk6KQPttDNTpa5EW5Hno1rg4jFPidc4NKDLC",
  "key12": "39UiH461FzC7huGVb8aGw7jNhze3Z17uoJRZzFMybaafMzW2UtDdTWmW2VYEcWQ7LkViUcZoQnXHaRHZxzVAt9hk",
  "key13": "3aDTHwgwM5HtHvLxkmrzmvPJMjEo3nYP4WUctYBoR3YJVyQaB4ciponKnYQKhKYaG7EnK2dyj1fQFP4v5zktf91N",
  "key14": "5q2M4QVvBsFjz6BLbGcD3Y4p4uCC3E3Z7rwo74HAW5zMzBQWbmppVLXWn3Gvyc2uB5JZfbS6xwHzYBhDykNdpqmf",
  "key15": "5FVC91w4CCz6vq25pVkcetvGkFMPFgbVrY8Qw5GKNS1KR4uA3e5MxDeD6onSbXJekQJ9Sm6rDHUqViFPa47QSqhV",
  "key16": "5MvZPE2CJCSNv83pj4hLd2SCwcUDuzP8XGRtMVgz3jHctGdCJEcVewFG6pYRPYd3XocUggdXyAhwCzmwfUfGraXi",
  "key17": "4cZSj6qmJn7KxhQtmHhz8xdr7CvFR7Hr1LsV83j94Dy9RLB9RgQWsFK4A89wuBXZXZApuQKtDv1p7UPg12vj5qxL",
  "key18": "3SoejTRdof5igGd7Vrx1CBkB76LFwAtMX7xgUC2AhqT3cZUAmd9NRiASyrYRJDaA2CniVsHLmjVMcf1CCxWNzVax",
  "key19": "kRvw2jU3qADyva97zNrYsJV32gvP2q1DgVdWgqEeS8UKc2ojxmC4QNxtHvo4nZbxZjcvubrRPqgkBMhnbR2it3V",
  "key20": "3p7Q9r49z7iJrMJwtRMDdTUQ7LHEGExvYKXPHiQnGS4hC6WGRdaYzeeW6y3v8daFwRHXpyqFqurqpVPXqCCNaViL",
  "key21": "4ELwdcNcjho67DsW19kkgUC3m8hSeofJrTA4mvfabfXMif4GY6k3de6Nwoqr3Utz3MGGjJdT4XscegN4yPovv5hd",
  "key22": "2s1f8Bx2t6pMjKWijX3RXgbNSh1wr4fhzSMBcPpc2D2FFh1AbdHePxQnHTRGKhhPikBcrSBDmrRa3rnXYBXXZi8H",
  "key23": "4xU442DxYGJoV431yibHmCMASxZTSPG89azGgrkPay1ZsForC8b3S4mPngZfwEsqZ1hyBCsMkBBRjRWQtQKEecyf",
  "key24": "2gjtJAVohGCmZpVRBMnvgBDWETXXLewdndEDgv7YougBQjWUA7UKpc61WGCv4PKAK9nDV1oJ1SbPKKuPMNbmSfyM"
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
