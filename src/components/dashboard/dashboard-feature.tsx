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
    "2MW8WBvGaq7i3HdxXuQoKCTk6bvvrewECtNf54Ma3DwbPnri8hhDbJKDiQfH6E546q1xyUUxjnew2q1s77vyCHJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RUpaafMqkZe81LJutyp9uzz3fyDqkhhm6KdM8xJ3TgZnTsQpL9k8CM184wtKbVQHn4X2rW7uhUWoWtS9Li96Hsv",
  "key1": "2YBPnJPxHshe5RvC8JkhzYtZ9VvY9ST1Y1fpfUHwYZBEWeTQgDaKiHWvYeFyEPM6Fh6ZW2iU8adKeDAGPpvWq7tb",
  "key2": "36szV76RP2vWzpc8QC5cdrmTqwsz7MojCKVxcwqYeikHygrVfcNQ48C5bahbZyS4hMVhA9XqQfihTLHRNWaWEQg",
  "key3": "5VbBuzkS4xKmxHbDxHBSsSPbKnQLWw2Sukua97YveAqYvMxvdApjqxkg6qYTXShPdbg2sJYxnZYqWSJaF7fkg4ua",
  "key4": "4DLcSC3Wg7HTfGFwoHFvUvXjvf1zZzbYF68N8WMnQbgA9YLAGXWNjEKLDKo9CQPih9Uazet5CgAhx6jwZ8rJtkVE",
  "key5": "gBqKb1G7NfGyH6imL3MDZPKCpGBc3C2ZyvixtzWfqmDMyG6MDMqe35DvLvcK1Q2kNpx1iorQ7V78w5va6eKQPut",
  "key6": "3XooWD7n9QBGPqthhTJiRuFmi8s16pmC7S3ZtoiCNvzJMut3KB4YLNJZDHMhqZCfx5YGXZBMpemD3SBESf8RBiP5",
  "key7": "3BfKJHfuo9yQdcxtVG5kHGANRFZVed3cM7kKivi4aZwbB7KLRzu37djXewcncMR6pPNCeAJj6ajRh8zKXBCixhwT",
  "key8": "4BErtPSDU48tpnasn5sooDxWKtPmqqd65Sp5PCp8gy48SEv8L7U6k1bUc7qT8Jn2RQQ2qLt7TuxQw6qFstvDre9H",
  "key9": "4h7vZRLZEe76kx736hNHqY5rPfiPXkk9CTuidniFGiaZL45m6VyQdRJRjYz6TtDcPt8C6EfBMBNRQCCbKAAuuRYX",
  "key10": "BrtwjsxoqnCh9yzBMxec5bLRLUrgu2ukWgDML8HBfHaPCh8Y7HfU9zFuaxsBw2fxJbgszEJFjxiP6Fuk8xdSv4b",
  "key11": "3xUrRAC9yVtpBPaRCKBvnWNonPNHpGgxLEGZVxuQBVMcRno9jLg5rSwnwQNzRr8qV3CG5Lcqhy9wjc2eufbE8NFd",
  "key12": "5tX7XXpxoY3oHKc9vAK68oePzyhtXtbrohjJ8PwsnRdmQnUfgG19djbo2EGhAAJAwJnEFRiA6RKPj1wmQnExpSVY",
  "key13": "5mzFxQ89mQ1extzCa6qeevQMHYX6afbVTmrUXpNyG8w3B4UUGzowXmpoZD4XvC2tGSBvsX3LKEu54jkNPwMXx8kP",
  "key14": "icWnkv69fUQw6EWCdM1JxbYgt3gxFp34so2eUwwvX7nyzj7gLwtspvtB3ZFjSD3Kv9e6ixbNoENwmu2YeyXQjcu",
  "key15": "3fGeHptX91mamLE62qWt7WsSrB67s2yRAa3TCuD2MxznFCCUytkmxYtAM9yZSfm7aAKLbr4mUMRzLApaf5nrL2xZ",
  "key16": "39gP523chmtrfugyWSuiRiirgUv3LXrKXU3WpY1Gbr1FMEm9pdeBZB41CyzhQeop7pgwq42927dbydwCBPbvxACa",
  "key17": "rEZoZEyw5bNPsMAG623pHcA9MA26wsY4wBaHwpD9ZNLbNABcw4WDjXiLFL7Lzp3UuxqTsNKW6rXADJPJdaxMXYi",
  "key18": "2BjZAYYQfQH4AxaZo32zFovVk3HmuSL1BxGEHa45PNdcjdmwFGuJNUhYasq88md3iEGt1F8uN1e94RxYjZPZnv82",
  "key19": "QTkRueQVF31K31b9fZeeLSoZTGTQDoqBaKuswdq2KjgqtsZBUhQDMms9YW1dEvHnXH65hEiv7rckhndS3TmzEr7",
  "key20": "47XQv8bpvfzr3iMubosHixbhSr8rW7wg1jHAjBZaiRXKEbyRYJBA9bHK3HREXaRaKoCLHsTCWMphci4twj8erEGw",
  "key21": "5hyJ82gVXSUunfAkQaMfZZYbqhFdB4hDBaav4kfHp5aojsPrm5rB945vCABi7MqDPg47wPNVq9tAnJPKvZ8CN9U1",
  "key22": "3ZM6XU3w6DwTJWPCULzCEuQSrreDWoMYfS5UiMrqP86JnpvEsw9RpgDYk927NwxzAQ5UxgRxE9pJaqEbgtbRxvo3",
  "key23": "2fHNxVsbxhAgvhUg4pjDHN8Fr2FtRmfFV2HXEmHsQ5utf4FzuuFfw6SiV4U4bLDCRpMcKCcucjxauyoayNiPfJd6",
  "key24": "4XxJQ31YWJDeqMcE2gNymye3YFwonqL5U8Un9KBfwyDfLT4p51obuuXrNgxepnAKdPKyyouVM1JoMqAWjpyR9SwT",
  "key25": "2xYmU4hCU1hdfaURXs6K5PMhU6DmnRSK7LP5KpJFiicJy5qhGM6KUcugKTtYdq9yxtLbC9BjAdsEQqw1L1nXY1Bt",
  "key26": "2yxRYCcarYWvHtZM9PJhyDmzGjCPFA24eFN1nhcZVtzrGo5TcW12eQwt6ZwZbTGsmZi87pvty74mC6SnRroHQmwF",
  "key27": "2T4CK8ekPxqvaxAEAaMQzsgX3ZCHWLxNWxFdERtkLXw9fTPxUDYweusVc1ePo3uqtBpV7aPCJmJN9VM3U4FzoH8T",
  "key28": "3curyqKUtzjNtM6YnTb5y2Y14uQEXgvCNRxCcVX5AdxjdSMEuo8zhBPyirK4TJtcSruef73Zi4TccmpsxqmK73pY",
  "key29": "46TLnNCFbBCohray4KSJnPzSaAG7hA39o7zAaj26KP5uKVyrrmyHPpRh8s5qx5wJAPkw4Y3EfTupPypuNrfhpc39"
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
