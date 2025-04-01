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
    "5wbbfaXXdK5BeUd1p9n7YZ5tATvf3pWpgMcCM9cbeKiwWoTS2WCzZLK2mouLHfkajRFhXYf2bJ45zU1bCQQRiPif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WxtwZu55Nx8pDr3ATsEs1SE9SmLY9crbwrAzvPawQM8dnootm7JcGUXT1CjRqEymwpGNwJGXPRdx1McFfxAQzzi",
  "key1": "5VaVKJANyNjNZurnzXzr6svWp3s4D4FVUiYzcyQoV87UpNepStUkoh1KoKPoZJhu1N97wDktmEJGaxKVi2AckL2S",
  "key2": "5KVyVURMeZc54VjBMstuc5wyhL415RsD7ke8chfnA6ipngf7tp2H7gkjsJGw2Na8CiDMSomZteGkKtKb2D56AH1g",
  "key3": "5sWmzqkZXMGkxYKgA5Z8nEmjh9BhMvY3iPTNKUA7gsgTsqnLceHw8s4rVxBqineDPHeLhhmdL3JgfXNW1WFWoNze",
  "key4": "PS7XWuFYTVWbsdVKBqa96zd1ZaFB1Q8LXeKGvYSTVGwToHsYdFEn2yRLYHRqJosxpRdraz8UgetzVxAE3cwQP6F",
  "key5": "22wh3mwZeqMaULhPnBREZ5bNdL1aLr75QzwCYCmoia7U3mDSXtW1nKuFCmLMAFkJwNz3DhUoVrRZQ819SVTxKtAz",
  "key6": "HLyEo6s1cKV9dUCgFYN2P48Wso1GQYaCuqc5pWJBv3nppaoib7Trz2LZbS31yFVbHgPsryiYHSoMnzc64SCNFZH",
  "key7": "315Fg5UeqXCqcQbEYXjDXw3xkqKqqa2sH1SdDwCxcAXeo1tG7R9ezbkkWDjs5ifqZMEmLVdA5tho6CEPYCUHje85",
  "key8": "bUDV5z38DJz2i9BTAc4BXjH6Y6DbiSvcVjtPy9Znge5BNPu7nsh52toFeBfbB3rhU4VQqxZL3uEF3bY1h9TUiRr",
  "key9": "3cigKEXU6Uaw9faPYt7csnfZVHKMrjG9K3NekvzMoLEMwfNKLCGfAjBQHG3WVSekeDEj4oaHHnUjq1Af6zoTicfJ",
  "key10": "3totRYEhtp5XHGNjSybzLjGQoPnuQBkz1bmtr2PK35ADB1kozztdPWGtukGR5LheRr42aKZwWZuc1EG7B5G1NuQJ",
  "key11": "59V6WYvJJM35txxwWjFM2PT3t94brVPwpXLJgDjRyhjQWAMiGBftJork76Q4HeALeiWoWioCoKNL3t7mWSbJEHhi",
  "key12": "1VDbrUW7nT3eQZrBP5m5AjYX4nZQ2dGok58Qiv4GwjzVjuPM981HKEXXiAeajWiqxhHix5prx8bRV4bDseMZ3X4",
  "key13": "5GuG9HekxtYXDEgVQKnNHHB8XFuzduh8zWNf6Y2umfaNkGStTHTAzSyBaztVbdfGkdjH9KGGVqjQAMWedx1NiyiG",
  "key14": "2me7b6kZZUMQPsbauQifk5u2pTEdj9h8ooe1cxUgvF4kVzLYduZewY68y9dAiFNzPYyXd5fCunFVhm9TUgDzMfaW",
  "key15": "5zPjHvVENLfFfTAygxFZ6ankLZ2TcEoxoTtaVaPgRzqZX85NDzFDchoDrJo7NB4226w8bCtvpTQA3bf4qmZLnZ8A",
  "key16": "3rvuwYrWiHfwQiBdTNTFgFnQEq1UyoBsaeZxRt6iYNqnGezy7x8WK7CWKj4UnD9caPnXg7FYS1qeGfTxHr5Tmm4U",
  "key17": "3dPiRaXWFfV9W5pGziYi8tKmGnyz7tiazFeHcpmRquHU6Me19EYqbWtzw8Ux4Z3N21jJYEeQ7sUN5x6zSZ7ev4Td",
  "key18": "2tkCDTHzX6UtBDq1FztcTkRxySYaPZFqpk5LD7AroDiSsPY4mMd4zaQHE7Xjf2ibXe3mwKMoLEKVjJqfkWRbUwVj",
  "key19": "ixRUoWL2JjYCPWEdvKgcbP5ouqi7maZUp6JBQhmf7NqZ6CM979EBmWRYguaaSutPyjLxuXVQk8DWC9ozcpg3V7T",
  "key20": "3VfpT7Yfi31uDVZBD5snrwj5JFbE6NJGasG6tSCkaNbsswJd7qGeSc64kppLCzYLG9HeZGzZ7NLy69jSDFJHjHix",
  "key21": "2YxxzEquu57zFVhHMfxebL4VVU39LQqwqDXeG7qeax8aja25gmpBmHhgNAuPUboicNitgNxz7j8yceJv3XvdEPbu",
  "key22": "dt3db56cHjTD8acbMKebBpQMVbbhrPtM51gTStm5QhYbhDXJn6TJoVv79ypwpjwYcEiYit7D3yqQNw8bJPo5Ltc",
  "key23": "pJFtjgTbKFBQ187UsgYir3o5G8HTBGRW5BANPk5FzEHtcBteuyJJ7JWyaF9HyYHbRXY3dJD4Gua8WY3KG8nutym",
  "key24": "rWFcUSVacJHXfPmu9ok3otGM6ekZtv74CdVyWdNCRUJjdvYm9yihQLh43rnxLakBmWdYUFSeiTAibhDWzA16qkf",
  "key25": "54FYzst8ijdps2qBhFtaMbuqaEwwLrngydDrk6PDrRtnM3eAkpq1XBFaJ4NehXSkBZCTt6aTtTBXT6AhjqvBQaHV",
  "key26": "2qoT5ncr66kokJtKwB7mpjC8j7g2qAoCxXJbpG8BePtR9EX6aSNT4yAvAsTJHcWB2V4AEu4UJcFgbzopmEknkMZV",
  "key27": "3SPAwg3ewny6PnWJvBADAK8MPLXYDqj9SLAnQJbg3Vr6szQ1veYMKXsAfLYTfwzJPdmja8oDV3wDDXBU5joEeaaM",
  "key28": "2bNiyqZXKYrL9yNafC3e2yRPjTX1PV3j9aP3GWyZW92F1SHPjXDv5n6DMeY9JgcRj9NeKijMuzrhdkyCg89wzQ9N",
  "key29": "sjxb9vPeF2F4GSpk3beg9nxmWHQM3oSgo4i1VzGqCk8Gmpn9oiAydzQRkuGfjfrqEzutdReLNzp5JsrKFmbQ45q",
  "key30": "2efQB2UKmJzyCauroZMe4rFKRZuKudv9CtX9JcFQistBGKEx51AJMLd8ELzdpVfhndUq2Fae4w1cd2a7EF3aVurQ",
  "key31": "3DUNVBW5M7Ww8x5gbxzdK3nNZ4jvZTDpG3qargCzXjGFozroCj467Kw4bTRrVJWQo7qU2CwBtFdtbHApMFiNdii6",
  "key32": "61CnhyJ6E3eLoFLgsQ9AYXNHry8VNsy8bEuXZFAKsUZnUoHAHnTsp8cicNxc26KQBn5vbEXgJSzsKk45Ke6enap9",
  "key33": "HYNQAZDB5kJG2DhAekcEnhAuLRVKLH6xSaLnukqePdoKxgVUQG2VRF6h8AbuHtoYPENvcidd8M95iVBAitJ2zTd",
  "key34": "62YDJ6C5GpXHDGudUsX8F1HrmEiN5m416RKjhcXtGYwQDiLmz4hKLDDY6YGBpYhNmuSrz2RkeshbwSaVwcCrUhZc",
  "key35": "FcCojimqE1b8Acbys94Ljot3VbREHGqvL2xAhmLnesiY9hy81bj5sTT49wKo4yVFGCXcSR19fs2rQME25SbiUtH",
  "key36": "3NMFt5rXEwwEwKKUnJ7zoPVc6hR9hMThsF5NNaHumKNdrBxjEbPWb8cT8V7DPAGmfgH9kQErScS5f5pGr9xbA9TN",
  "key37": "3qSWirAUW6aJ6ec91fzP3HbuThiZPh9B9uHGoYjbjuZ2UvhtqNsVDUxUfR6CxqvRCx48q9ipREWeNZnpf71oqrV6",
  "key38": "5zYFuzziW1kGP74dRaDyLToonELJSkBKJ8xMufXbFmvZgkR6yowCov35g9CfuZnN4i4UXfV3wAmDbtj9kMwUSYpp",
  "key39": "4a2AY2TDGtjToJxspkWYCbP3Z35Dqo8fajyV6YhbB7LkunFUEH8XwAdmYsPy4YxaYe6CCBMKzRAqNz58V4ZMwDHs",
  "key40": "4zUJMtb3pgrCeP4HH3LWkdBbBXd4nVfMLHXEVkgvQn3mVmyAh5qLWmqcfgJWrCze8doPL2vwbbRkZy97EwYXVWkB",
  "key41": "31fFvBnnoGwAPzDNuNybRwjHmFHcnVCdBpTHDPKqvsbXitMQ1dWasGbFrzLvBpAA5zXMni4XRmQPmpGFS98MbSJv",
  "key42": "4diRBiCorxwGdPj4SNXaT7jK7eMzoPdiAJeqeKBWTsZSKKexH6tCoF3j2GWtmMpYbQ8973zPxEJ5pMpNhk8xjCZY",
  "key43": "3snN7kxScrU2HPniLgms2geVzjHiJXXAGRyf4dECVnzXqVFiEV4wGb9FevmeqFhJ6Lt7oNbDApedRmK6bDkSjKa2",
  "key44": "4F8n4P4T5sQGS4LeuaVzCWTzw9VYt4811KtLXQTPj2rYEofqcd6YoY7ykAXoFXDXb2YVtERPSNHGrki7vfjgkYR6",
  "key45": "2tqbVpjR24QXqpF3LWtHnD4c9F5342hCnVV66qhj8fQBxNacWtteLb2Wahm7M1aLfK162u8HWdgV1EMg1yUEFKKY",
  "key46": "3oSBHBxjVbNWy4G4Gnofphuvfb9z5xjP5HLi2Ty4SqG37rDU31LuV2B9JXd8uFPsEj5xTq6fXMyQqXL8TmaxTiCq",
  "key47": "2QLbMLNgfrgb1BPm83pf3RPPysGmqXNFp44AukQjMoWGfJvT3j8P2LsiEu8PV8DaTAYiN5hUCory14BuxoCjuiV1",
  "key48": "5C4wmzdYRWbmhXB4UySZVvyVznz4xwN3YCSferi35V5wvKtybu4XXVGQooct1wX35T3pPRXYGDjZ8Rsc5bFZHwaZ",
  "key49": "2k57WzURR5Jq3gdeKFpvJ48q8bxjZD2eEzjBtmGPhHqBxUXAE26Np1ZXKH9tQUGsYwKsQ4MBXvdDNSpw1gp9BxYZ"
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
