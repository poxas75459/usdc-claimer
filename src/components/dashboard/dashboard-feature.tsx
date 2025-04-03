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
    "41MDDk3VhJw9meZJCe6E986Q8S67q3p4RpEEBg9pJafvoTurKjEjwsCDrZudjoVd7FZYPvcG4ByBjJ1cTwZzio8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "581UqHu7LXS8peviHhRmiLjr7Wr1JtSYUDY1L4nJDdSqDSubSFUNrhF5abuaYoNpDF3WdaVZ6JLQmWghze92kRvp",
  "key1": "YtmiEBvbt13DmL2E2j7ftgnUfTB3vksu2GvxLyE8MHFa5ftjr9ELY8P7Aqg459Jt951AU4ytkWMs8hWUcKnjZmp",
  "key2": "3JXguEa4SX1AkbDBC6CnXSukZkDA8pSEEaSKgUNiXsaS6SUJWmB8yrYrQddrKXmKMerLJPmZPHLRWQ6M4HM1eZxu",
  "key3": "2wZvEkNVuXRnV1vhizKcKmQoPdweJu2EWMi1YWPtxieLHUbxjkhzGhd2ZRhAQEjicaFqPJgmRw88ViN7frmhR2r7",
  "key4": "4PNYaqNo1ezwuGKUnU7QMbzmNSrqbBxiK9qh1uLJEuVkBuqySwh8zJs2TiPyPVwhzDoQ4LoGy4CLdLt35PZa769f",
  "key5": "3HUHEQAd6Zga7rPhsGuEZvNahSprsaShvHkzRYeVjdi3ATrRDcxXptyMus2smLRy7Ff9axZQq8Qg7sX9VhdGustm",
  "key6": "5MuQwC2XUUubRfuURQ4yr95JNkir5AT5S5tkQjg9YD2aavv2vRWrLfA5u9LNj9QQiS7da98z9vcuSKyzS7qSy8Mn",
  "key7": "3xzL4TZWCvkH74CBStiketezmS38Rh2VNQN8c9azWckyJzweecac5Ss5xoxKWPvbXLmJ6XjLgkKi4xDFhCiRaYhD",
  "key8": "52YGNmuqDf53mtbmftwcQneCyD3dQzECHttVyU3UeRzSKYTa9YBLRziFM8DtqSqc9Q5anVCiMZ7S41UkUKuFWBE7",
  "key9": "4SYspVJNYRbTyUBthSzwW77f6eynJxva5GUcQYwp6zpe28mj7MgWP2sZJQ3sBDWwKc7Gw32uzEZegxMXWyVboZ8G",
  "key10": "33iPsFfDiTRKdD2FnqBpfV5ETMFJSWYJpgmzPQkHY3ov2NACH54Z9kpyHzXsWWBkm6eMux9KgV1xRkydiC1KvTzq",
  "key11": "4ALSiunSj3JC7H3pC5BC6DF2d9Vo8kn257Nbco7VgCZoZkrPJUR411a5h1SsG8CWDftukHx7JHWWRZrRjEoCtejo",
  "key12": "2c8zWCQ9HF4QTQty97ijydQVPVttittYqb2BFurTP6QoRbmK8yyqfhXwheVGAAZcu9UgBFL3PvP8K7L82hu7o8X5",
  "key13": "4m63S1Qrod9m7LxeodqoV39HUF3tsJuBq6GpXE5WhVDDwHqRZWZb9tGeag4isj4A6tDFUnKFzzbvoUiG4tDkULkr",
  "key14": "4Rq4cGLoRfrDLS1BtgH9dNfuzQvuA1c7RdahM7zUYAzQ6d45mQQQgu1mKc9qTd3Y3s5FaGXXkreZcw1HomsDvC71",
  "key15": "3FgADiHdkkS8BMkhmpi8Zioe1sXCyMzYEXqmpoZhbquwDvinHAXzACNmVxDb6QVbXErrAZBw7QW5hGw5gBgDC3dT",
  "key16": "3C9ZKJAyBdTCdmmT5XY1CYr1YDn2Fnirs81WMVqbfZVCNHMqJxzcthLgJ38ez3YYAmZXfUF2ChPNnoYBhwpZmtYR",
  "key17": "2AJ12eSq1gbxUM7A31CSsvni6Wt4bpRYAJemF8Q6A1P4e3NxMVeCSTWsgig334UNXxbUotfiPHSG5hsP9fadGAji",
  "key18": "5XeDLU5fDh6GW5xeaY4EGgfCpAWkF2kTb2XVNdDMdurSRfx1kmQcsSjb2ayewEZrXYZXoipKnXWSh3jbtATjsk5H",
  "key19": "Kjn5PvweDzd96ZkbLvEgG9ea8EXZCzNbdUGL5K85D1LN7gYvyi1D9G3xhdfnpYNWhCiE8G33NsMnxagsDi7qwTV",
  "key20": "4xhL7x11APWFTpQ9JXGuTZndzGhTGxVf19yuhBeBqqnbsjhnMPuFkyjXuwV3L67fFyvjyz6kezX5uycPtJ25ebCv",
  "key21": "y6k46tgakz3Guw6Xnzr87h3nHrdKdqXEikS48Tj9nMio25QvZMoSet71g3Zp3xzTw1CWnMJbYVxwhR5K4zE82LH",
  "key22": "5uS8yLRZkXPpaMtqp75VtpEuThYdNAgsxwi2KJsbh6yr1ifdEv4ge3CES1sySy1JM3fhc4cn9oBsw8jqXyBsbFHv",
  "key23": "22WZMJgPnGk5XCZN5GCRhWPwgWZRyFK5Hm14LPaGqQwiWm2GnWQutj3oSdzdomDediXaWKzdgn5AQpsGgDkn8iv2",
  "key24": "5rKVT5Bq5BpiGfEQAHHH19HAwSmzSzkh8ayygaQxHSq83AYLdZKxJUKYAUPxzSyNrWhmTP4XHPbvLEcZHaNAegaw",
  "key25": "CXcoS8bS3kG82Havcp9sBRWLd8NfNTeRK2ekCivGseBnWWRu3rQnRCjgsmvZd1QBr56UMHhRw2vdJ4Sy4ZYXpgd",
  "key26": "3ooLCV5WXo1izjnJEr8MVkFEwfSG5PBCKG3fwnHrhBw6X84FoMKRq714bREivzyiURzNNSmDPiybNKvbdVNrpQvr",
  "key27": "64DKC9gqCBz5VPopPeddRSaRAwbi4DKQeEAaztf9ULqeL8DVnkEs9Wr5KNeXQJtVB2Lm93yGahgXToiwo3iSmnNm",
  "key28": "23PKWMNWvCS4ikNCGjWWYkd6k7fdMu1uxc3NeFyo9oE3AhNJxLgWdaLiNNMcWL4RvaEiYRjtb1M6SFQ4Z48oW9co",
  "key29": "3rwxKeEQtfAyJXMFRxSMkxkvg2EMS1ANW9kuDtHZVXq2JUDnfTu6PFyEJ2ndsjgJcRWABJzRgd2RCiihZch9JiJY",
  "key30": "2FAkzWXUjERsVnTT1o2eP6cwLNz2LrNj9uAa9v8aXaRv4LUFS3VWXu9EFZckyNkoSR38KDGBNL5o6ZbkjQn1d7MR",
  "key31": "J4FAfQJ3UeCgEQEeN6PYncnYMbUmXpxYozRhkhMmyUvyXKoQhkFLS3FQn3pBfACPwdQrLXD3ayAs5qeswYtTAoN"
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
