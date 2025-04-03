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
    "3UCp4Z2VVDze3XEnzkKP28X6YePi1dRsbCFD9hk7fsWvGmAaC57u88n2PkFmdHPiUcHYrJERHAdogg3rxpYrN2hu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ss88nmzAjTF45GboSdD5SbT8Lsxh1ySeWH2TKs7VABBTXqciaxWL26xt98hAffDB4sKTXDQq9wBMTZXEuGxbYhN",
  "key1": "5rw6cQy8yHTcTx14KQJWbW63bTJaJEj6UaVZrjKgwzq2iUGCdzUpvMiG4kTzmGkPzxGbhny3XuSmVXb322rVeAP9",
  "key2": "5vhkCc1Ui4svKj5bRKH7MZkQQ3pnHDBMKphJRCvqZvc8ycwY6VroRMQUQwUcW2heYSSBzw4YnDkuiu6JfyntC8RJ",
  "key3": "3ihecoKBwyS6qMa9BM6MsVtDZWr5YzHBR3WBhRLJkthXbPdUYcST1Bu2qPB7FhsVZLYcuMYp4DRyfy3JuRkqLkhc",
  "key4": "2AKBz8t6ePhxndzzUqGFnG9aQpxr956gvHKgjzDhNAYUY8HVBSq6em1Qsx492YCBNZnUrmnoS3N56XuSGKRYNbZb",
  "key5": "3kfmABWmM2xNuoQ7qzcS8S8kQfb2JdekTAWc4NvS9qoQDJ2MNGyy9DRHvQDrx5Mfjyd5cSsvKentzCXW76q1GEUa",
  "key6": "25vLgMN7iP4e1GEYXaVed9SPmcXwzFogx1HLCF1HZjyYd6kGuC32pNsVHWadTtok4WDmg3DqK37MAxGjztDLFf23",
  "key7": "4ZW7RmEvysjoMeA9mQ4wkGni7xWGXtazdVYiXc6u6ZKaw3euVgiJaV9WHS7wVbUhw3jPN3xPyjgWmy2tGiiz2tV2",
  "key8": "3QBezG3XMsW59c2kH3gntxXeZMLttpLbAoPwwwAFzEPmwFSdEWW52psu5bonEV8zAGLgqUpijQAieU6yY7kfxo3z",
  "key9": "Kc1hovcrH29rcGtNV8yFzreRaoBHfRNujB636qZwwCYMvTfQ33DEDWDBYTzBHZvpgJKTj7ioi8ztsN1iFXGQ7WP",
  "key10": "AwoHM6xf7H4TPXLtKsGAxG6ZHYYPpYLTEj5SiPD3HeRw3ZihkBBmeCACBjtxcVWrktT6J6r8TDYeuvWuGEBfYvU",
  "key11": "12A3UuZhaKhRKXR7PGcP8MAEaocGmZmytka933YAKrkNSTCp9PnDJ1TwGrKtkpHZVu5Rov9LcPX913uRwsQHLCvH",
  "key12": "46JM6FoA8uAUrrDNF3L6P6nGdNfxM4RqD5MUiu7BfLzDCxbk9yUF1mqwqJiycU1wNGVwVzegS65Uc5HouvnemmjC",
  "key13": "2w9b59PcbsJ979LiwAbaafNuvX9cdexh5uHmqQDwymDKv1nK8wSMkjq8LNMnhREYVHqjBwSvC2KiXeA7RwBmb8kU",
  "key14": "5CDssF7vGZJ3uzqxQB2Vpet1exU3G26wejYYaH27DJJuDse68PkoAs8rcxWpvQrUyHnXNwXB2fedVN5ZuTsZ9GBR",
  "key15": "27NiXRChwQSqEuQcGkpaWDQGbENGEh3PP41yhcXzrMbNW2KU41H75WyWeajw3fyss3gWbDcCyS1gjKAdhHYeXNDK",
  "key16": "p7WEQWdAvG8ThjmzegXLgPAtJsdSoqHvWuporPs2XNbH2AHiC4S6U2BK8JPTjajHdRWXM2vY7yqujtqDDzPSKzg",
  "key17": "3qp3sGAFNoiBvPJHrWyESCHTz16qfVxVTjVuJktcgZ2wC3ePNY4bpGcLWk5qYV2pdxNHSzVwrswQia9eBFwACTLV",
  "key18": "3q5jWTcEiTjwUodyPALRi81C9SLCWVvPaysDoMZMWSoreEJBj93xbfoUzRUhFaFbWh9dAp4aUoFvpUX1PznawU73",
  "key19": "TKK66PFXDYjEhsRZ2b4R7xU4dCA3A8h3B5jRtZHBkPwttcc2uhsC5RMbKZK91yifuXE3fatvG3NedNTZFjHKNL4",
  "key20": "8YaNgxqSPBjfbRkBcHmLUxCeumxurQdu7UYPN7RoV5rdGhrP4NtRrwtiqPd5Jqbo3GZzwfhUnM7DYuAUXfjds8F",
  "key21": "D9hDhRGezoZ7kcmYmq3YB2QhSxt1qAeS7yS1S8pqkYeUDvakzxYo5Xexf7NEJH4rNAGR3ZU7CNsKokRgSP4uwuF",
  "key22": "3FYhiTERcboD63bMwT4a1qks351ar9ygErF6g2NerJRSFWCBgTRXoJHmnG6MudQTXyd5JnxKdRCByV63RBfSzT8X",
  "key23": "vACzupMccw8j9M4TpsGN5TZh2mb49msBeuNDz3VL8o1yKDEC2hgKvaJzBwUt3DxgZSoyUFEc5V6NuJcowAgKMfi",
  "key24": "31oiDjJoRYc85Z1bZ6yuVJDwcNSquUbdYfxnAR5MneWHnrzwuKKgP9YbsWpEPKeZSEGhqTaV9mQBeJZwea8M3joV",
  "key25": "25FrWugwJEHvxrmZ94mfKxFe4tvZ9PYSdGgmjAhb1RP7yMqDHA3Z5jzpspg9xhkNa8jerJ1nZJFDMQ2ib4FVdGDt",
  "key26": "4y94pPctYw3PWEy3g1Ffs1v2FLsWxFccryBSPP28Jio9TnMfdzGYEFr9UTZL32TTeRauxPC3UVbVA6DcZavChpCe",
  "key27": "o4ebJqjBDYtzuQfuXJjYvEhpX1xFUfr3QpbcNyEADckkUQWyksG3dzjZBUWxdbmfT6wWdWvAV3aEYGnYuy84g7o",
  "key28": "5XSVuBzGF134YEUuZksdULE2ZMqenPamFyKCh6Jb88xT7n5wGvy6DwYpyqgD8kNTJAgFeHYbjukSFJzK1Tt92QQn",
  "key29": "67mG1jPajP9fWqTBWuCZ8rykjsTxvEnd4yRTesY6ycg1LFJKZEM2JahiHTTcwLcZDwTxqpMwkNHdRAF9K1Zxxjbz",
  "key30": "27X52KEfB1Syhzwahf6hoQQgdSqG1NMm7iWK8SuQotWgu5YeTt2E8rprzXg3phxYh92zU2MnFVC8svuBe4Wd5N1n",
  "key31": "SsGncZVPrAriPHvBU2e42iLR7Ghr6Ve9GKGcrsVGWbPsNgZ6wWkDgXVHvmoUf8p2tKQLDNi2xQgpkPmY9Zntn5M",
  "key32": "cwXsJTV4x2SzTMZifYWewFTyUwFdE3yEQF2rWLm9dcac3588iVTZ3dcqLC3AS3UBpY2HSjuBEd6mvtBum4gR63s",
  "key33": "63QppJ9u1Pz6LdFDUP4MMbkT1gHDwt6GzHRYk1E6UAar4ayeh5GnnL81f9vA4x21Nrv9k4jh7GkvRSkMWg2NvLJQ",
  "key34": "56KRkQ9KY6QSEobY5ysSkoQwT8umABXzFyLBYHEAuVMSpbgF7FK75BLG7esxoP6wwtUDt4nnWwyjryvkkQJ77fWk",
  "key35": "5vF3wU5zPKcA3t2DEZZR3yehKjiZxsP688j4SnZKEuymjoycsVpvFDsNvF9ExXgghfuCRFwsEPLvCTtvCxAk8voS",
  "key36": "fexatXY47MTdhS48MXCC5Y1j1g33kxAbz3Q1RaZiVkiu3B7BhSh62oKFnXeeNcUGcmehrahP9bWQrFVLfq6W8cq"
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
