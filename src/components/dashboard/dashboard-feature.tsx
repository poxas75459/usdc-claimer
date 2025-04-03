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
    "5P8T2dts1RFWwAp7srRBPUZ5JUS9iSVTJRD9cptmxnEe2EgsxqHL79AeX2szFXJj6w4Z3RJ4wxiRtxAAYGmzioCB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PsDJ1T2zxHxhmT4Ryz1Er4vKjiahx7yvx8PJNygLHd6tt4fVqcVzdQnpMxtx1KQemTxeegB4EM713fhkav4AGgh",
  "key1": "4RfHTVAgp2D7Y5HR2tBQX3BNCcXtzrDo9NRqpvPV84XHZSZBWNCuSiQ7fdeugbqLe5HF8eyPXTs4bnTaAJxx3Aav",
  "key2": "uyL7mtJU2ZLZs5fufTxyyxTXr4nRUwAB93g6MDZBKBz2AbpqDiB3wfcjVsKxzM3gSzZJ9o6HkmjyWDaEnWW4H3Q",
  "key3": "DRqm1NcFX4uDv6eD25T3BBGkASBLrnRmNJYQS1zVd83jBJAcZnooBgRpKX9fhfX7RLDF4bXaqMxBESoh444f7Ub",
  "key4": "2Q5yntkLerZ1ormzq93Cv5XwKMTeMqgHeqAQ45RLvF2bL43yRPHx6eDe2S73TH5rGmTxQE8gv9cEdDuCnjXnqLw8",
  "key5": "4HXcNb9nkMJrkcQ57dSAE44Ue5P39uBkj1dHHvkS97qGEY7WktSVhcD8QAQQASVZdD32JcCNYMLeD8zGdN61VbLH",
  "key6": "ibAnGToCXbsGzTQeouZp9Ks8JM3ueafiinjTnaHWJGXkdh97DdzTWMVvnUHA8EZJWRRDmvLjMNj2JJpoBgHfPx8",
  "key7": "4jixzT73myctKhQox1otBpuZhFAt1j2dX4inTQTe4hzPSCMk6fhDZujSoqKSorTkFzSfxugxuGcwnFYZ7yYMR11e",
  "key8": "5Ze9Mt4b5YJyUitoywZA5Y9CbZRQE9Qp6Ae42HRErb1wXxRXAQyo4UALcsj6L4vkv3zGHr637QTMqtTqjJnKxgM4",
  "key9": "2UuD7ZnnzEyeFZRhVhqL3P2Y8FgeeQwhygaz8CHbQy925XSxdZ8oKkNFv3Q5GKV5w6T1cyYgYtivFaBqZ1PBNjtB",
  "key10": "2CCSVbFtcf6UPanx23kPLravJ6WWVxSRD27SsuRHdv3EYirWVwHSYDXXQ5Ka9eQdZF5BV9apLEpMLtX3YHviCnLZ",
  "key11": "MdK6sZmNs7VKnVp7vuejEHmmHPLnE8YYvtRxN8Kdxo799ubSNiTc3iw9UdqDb7i5WrfJEeX4WX4BCt11veKDfan",
  "key12": "5TkRYUNNcgvh2HCZY6QBzH4gJKKRFXw6S771JrrdU5qBLa1AtJYj1VtrxdxC1bb5giq3qHJ6z6AWi3yYC1KSaTGu",
  "key13": "2rxNtyfexhvXAWqn8bG74pSk6QQERuHrEL7PgwNJQPsWDZMoKkYp4oZjcpmR2rBZg9fxi8AeV6HNdT2iaTaEnsXf",
  "key14": "41EJ6FqfyQhXqM94nPLezxNcTUjMFHn4Aj4SqH8oGAfrMuhBdwu1ALyDPpVTpeX17qmfPun1oTn27fRKJt7GYBZJ",
  "key15": "3yDGvnHbetAXsGY3cDZGbV1au9MZQCUQvPmZJuEpAh27uY2MxkFZbbQWehM4mJteWRjZ5EqEEwzDcf9rQoSC88oB",
  "key16": "KqcVYY1wGVA162NDFL9nmLm19qQ1pqFNNMa324v9zXJj5beSqmMPopc45APVGtYUGQQiEmKpriTmRWNcooj4NL3",
  "key17": "4yQtThxNFs8ExFPnb7xvUurs5GRgbN6afHoNL3WZkGZc1ETGJgAfa2qZvDdFyQNoRppzGTARFB11wv5rTVKaotuN",
  "key18": "57WUM9Xne74SarqzA7GT3RVFdXyDumK4ZiwRTXPiqSZE7zCPMkD1XQCCTjoscK25f57Lyi3odk2jbJeNyTumoXhD",
  "key19": "4a532zQHCXs9Ze4xfSyvf6K1qXfwEGDxfZu5MNdQJ84RLRCcfLRKegwwJSUWkzHdGY1UWSUBnEtkcaTysum6yHjL",
  "key20": "2U8Bdd3BfauFcWJWmZq7uq5vcVzmjxfzwjcLKFumcCbkb3JGTb52HDZ2xDm3MSBD8Kc4dM2qnLZsADqbA3ieVsqR",
  "key21": "58v9X94d3evzHe3BzqK9vQwAaeXcZzKSQnUMUK6UhXUFVTJCyReedk6qsRLBw5DVeft6ktPco5aV8egNAjocs4Jg",
  "key22": "3aBrvjauhR8sg18nJKBxRhUkaJoQtT9g8gZuNydyncCQ1B8XQka8Y1wUePFBAajF18CZfQyBX1CHYCttGfG7L4cF",
  "key23": "5smvJMUMPav46haAJjR52pAQsRdjtBRyj5K7ZtdundLZ99Rf21erMYpHMkNU62Vf6MPWkggRhjziJbxSMcou1UbB",
  "key24": "jheGWyL4h19iHK6nw1X3FZqjVcFqVRhnC98JfQ7x7N3cm1Kop9AbXX4hgRYjfaQiNVTNhTZQkPqnbZMu4S82x8H",
  "key25": "4HGScuXyoxajn6ouDdjDJmc88pEDqq5JszYmtSfhz3xbdx3dRJnifBKoPcYVAZBYtFEpWFUPeTpxa3MF3iE4M1Vk",
  "key26": "2MvnzZjHxrXg6JvU1tKtXzqRqqZjcuyzmSgDRXLQCo6LUPX4SrbBAxkjvdKz5Se4ZponqtQqe4PW71jTKGorEMB1",
  "key27": "TVbLUjSugxS8ocYECBqXXqYj4bUajAF3tmcXcYTCXJFHZwZ23cd3zrUQz7jQSio1id9vHXjshXuhae75unyhLFz",
  "key28": "3EForoBL1Be8xf5LpcPKm18sKy2o9HMP1WxrqZ7XH3vMh9AudDDrVExRA99cGDNFtfPdcQN4FgiconZhLpvNEcf5",
  "key29": "3Y1hh3nvSMmMcoM5h3tnpCRehino9p4y7Nxp4cvPHr5x7XVZJxs6tyWnK59aT5hkbwVo2JuhZcuaDUBoT6WxZFF6",
  "key30": "5cvupFQdp26SN4mtQovUrQU1AKBGz1muX6Bmu82d9AXNxApnBChSxn34dcxTqSr7ymb5TZ3YMNtb6xKu8obgMwfe",
  "key31": "5ddVLnGV1x2cAdisJ4xMjv1aLcibrvxZzEkp1MsSPKRyx9LW8FQxhNCcMQVFdXM2t4FKaNQ7MJbNPuct3pNdCn4y",
  "key32": "2xm2xKGn9oZrjqNus7KbCHRiXwCNDACbA9xR7rmbKmeuvLvuhzUKDUgwKyUngPTCya7yk68WkCUxMuez9U9LpUj7",
  "key33": "bTnkEVLJncUamhY5hxFoZZkKabEoKr91WD4LR569kQMem5SB2EGbh2kZAfoTTyyYQLUMX2piMU6EGLLyx6YDQa3",
  "key34": "428Ve3NtYtEc8o2k37wcxs4f5iWKaiM8gFR7aoUeFerV2xAYMq2MxBCiCvYZSNMCozKMdP5GZtLcX5ePmA1WLrJB",
  "key35": "zx8B7rjWrjjiUfHMhZyLqUdcercwzRiBs4tJj2FwsgjtLXAjifVvkptDppDxvEdg8y6gLHh4QaiEZdh94MGQYnz",
  "key36": "RcrDb2V8Ydz7Uz1m8rKwBAxiSFkPJ29uSwRqKTmbdSqd5wU56q3TVr6JCPrHNUGLdpUGKyCJ4P5PKkZ91rMxRJ7",
  "key37": "ohAxYThu3LVk4RuCzgF2ZwhYVK5AkbTBMnyNQSXaXZwRB1ZDwFZUKHWFnoWGUo3aD1TaFweDhEdUjvUtWoC9zGg",
  "key38": "5rrQeUZz5WFEgJ6tpVymrUDyXowzsAjbDNvAg7rH5ZPy6VAHkF7oJtRmYaVCBHhDtszXBVw5BJTtvQsofSeFCTMt",
  "key39": "4LKchkCKqmWzjVb5ZnskfFmQcc1rFti1cdw3nfDZNEgorcL56K2jALDv87KEKyqkZW9eYjvF7A2YwKuYt3NYVHiL",
  "key40": "by4DHCXHnbfgMnDUKEnQPz6QYVAFqZi9hrZBXwAF1qdHkB3KBjYPrfjggprtDrnuRzqhHMeQ5n1z2qgbkRrpj5A",
  "key41": "21quuGg87up9UoRx3sLW2Az6PTmHH21sQa3g28Qxxb4e3dPdYF6qbz2vu31X2AkDhFUyzurhsgG7MT5DQ8XTsBxV",
  "key42": "2PXF9mhEwfzumsKhkv1uagGY5jbMkkKsnXZJ6yuZMwxkSnme5ceR88vmu8KiVwWDg4PGQT4P3uMKMV4SB2hAzxXW",
  "key43": "5E6ySgV1r3bCvqPQg8CZvsgNeKvfKNYwskHn6p74neLetM2hdapeJYHtzk2bKTxa146NH3j2wSGrNoNhSLgC3CPs",
  "key44": "3rcXzMXa9fajRErNgrAzvBawwTVrzz3g5BCK4PMSGxx68ebukEb8z6m11JrhqwoaaHm6YQV7MwRKbHAazZfG8vHj",
  "key45": "2fmE5KkZCpUoP7PmV3CmK3n5xv9h1X7NkoBRwSM6eRmkg5m3KxZnpfUNS8DyhAZ1AyxU1oemijgS5XmGQwmuXY1u",
  "key46": "3VAwe5gFwt1i71tZ3hha24ZzCGwsc7vKzpkET8sAhW1G4m3JEzooUizFp9kusDUS33Zu56J5paqYXjjrjnvYaFmL"
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
