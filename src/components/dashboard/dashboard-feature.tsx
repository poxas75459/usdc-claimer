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
    "2782NpFQDzG7FhaLuXjcfPh5sATb7xx4UxVsQT5Q39eWzeW4kuHNqXRvN8JCBfZAGXY9sK5jkVS8KBgWZ9Nw6yEA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yx3YaAUm7foxRkEvKELByHYp8a9CDna3qTNuSa8zGddyQkBZhBLqKKYYptG5oNcaF1ag1VDQHhVcdacEdQawsdT",
  "key1": "4r4QRvu2ua4GTHtk9hSuuzFNt71BsvfSo9ohd7FANP1jL7BW3qQ4WDKrrABgJ15QDyp2JGQvMQQwiT1RjWBmkPdv",
  "key2": "3Bw8f8pT7xGK8bUN6NH6v4voAKEAthocpqH1NcKPYU3arVj5Dwfk2MNkhLP4XHDCh3BStuBEGNSFshBrWXfif8WJ",
  "key3": "F8ADAtiabVoQdw5C1fBZa6PYtnsM9RdviWrVEK5es6a6dpMKkiuwoam4j7zqRUP1fuvLhJrTLjugdkeVLp7rwr1",
  "key4": "3zP2KyV5J8JrwgUrVmexetYhVDssHS3FdW2jcfC5j6wpR4Afz2xpKANSr7GGfmUFK4ZZBPJ1PrDBUpeUtaWoBbqF",
  "key5": "6XLmRT4K9Z3BbmXo8nA9qJV1PPjqQBcNTBo9EWX5xm9UjxyTrAckph6hGxeDtrexJmnmxw4Zk5YEsG46824WoZF",
  "key6": "56e5Ke2XCkyDDwSvGcQULSuiebNN4dB9pAJ4S9DC8HRm8xiU4cZiHewuhPYuCpx3DVVRjH815fdTowsVbKDqx121",
  "key7": "53nDhCj5j1oov2nuCDTuRjGsM5AvJ7tNjvU1eyC1pGtv5HeuUhk8t6gjp8G5NWw9qCqCYid8hvwNZ8VNRBiv1SDu",
  "key8": "5P6fxPYxjjsycUd7uGSHgFetySpgrscouR2qLF4QFEWQvcMgYEhyNoPB1ud1TKZ98CSZAA6Sqdy74k17RSN5dp32",
  "key9": "5XjficCE21hVp4LjEA2UeWKyTkXeeWna3Bgv6bu63vx3yBszS4tP67zDcRboVCVzUsqb1kryQQ869ztGM2xnTt68",
  "key10": "L7uAx1ojP3w5dwyyS98sWXbvsFSz65JBWA4ppnBSLSSbdKAXoMrkWTr4xv7jS3cAS3qJ5DJp1NcPF444aLxZznQ",
  "key11": "kGVXLpyj443drK9WTpLSifw4iKvm7vVprcnYpTHHoJvXaGVXrS1cc86wEw7GJoowujMJZHjkAkLiFUhMpUNfPUi",
  "key12": "52PY9tHSgX39j2UJDg68wkteToDyf3M5FogZZ94X6uhY9ipDUhcAfXDEe9AHMRat1Fee9YuU1oDtEJ5UR3mabEaj",
  "key13": "2pUj7UPZC5Fja9yZfmKSVtAn1WwZFGfmB3FxyHjSyjd72HWz48Jfh8QGqkb273tSb6PLfYQJPBZE6wnKbZ9MGfXQ",
  "key14": "4dzDje72mA2VXYgPpSHTm6vfpPzJpK8AzwMoyLZZF8yRCTZKGWD2nbQPqTzLgAPGCF6XgtDVUiSnfqY6ZXDnyH7k",
  "key15": "3GF8N4vR8PC6LypPwsG3gMNxU4wpeer5Q2cQjDm4556Jds17n3DLXXhqJDRFJ3KtHwxaPQuu8oNKrPwR1zdhGuRH",
  "key16": "WFPpdruMybcojbjmto5w1GAvjTmty9B8x57mhGmVeYFmrq56xuH866NRuo6QBE9iv6oStEsgLUdhYx7tq15uunQ",
  "key17": "kXiPyvJs6mXgPQ3bDQt8vMMMA5aZk55xFjdXViUeGdNpmg9sJEhgSFy7Hi7m4m84mkNgkJuK7soRYtP9kTeCmdP",
  "key18": "5fmjPXURUiFRYq2bhmBJLyWqrMAuTKsRzqPPQvfhsMaDiCvcg5vpTotLfCQcpzkF6XwMEwiCfh45dCeAWPCXeaK9",
  "key19": "SaN7otsY5UngDXxrkhEY2b3sGk1uqMKuo5Cu4tRyhQNz5y4MasyGYGqKJQiNPhyFQsZPoFnTDkkTJqNZwHszmDf",
  "key20": "5d9oXQSdWMuLL6U2hAmr8pYg7ZWndUTyA2agw5jDNhsgSdVDnzRcb9VAa3zbte9DPwtjsL86U4JqKS6V4DsHJuWT",
  "key21": "gnZqyhsuhCbEboogyfb5YxUjKYSTxP6hawzxmgXCsCQMWYb4m3JSjUGgRGhMTHsTsPYtCzTh8MzqbZeuDffiqKJ",
  "key22": "5t4GsLgGqznFsDftgU8i2rVwNAAxKjsMFTyU4AwMD1SP2EeDGEJVffeP7n6hpQPxGc6DhRPgJ45VMuHpQfdfiufq",
  "key23": "5uRkFVyLGA7kP68oqDMoP4Dyqy1WpeQVWB9Z9RwNe82n5w8gb98oh3X8EWUwwe9NQfLgtCUj5zgQtHbw1VDri5wq",
  "key24": "5LeReVsXxm2mHjupJaTnzKvbsMxofZ1FwxHSwxadth3dpzCAQraq7DxSVvUY2FX62gR6aM4L2aESuKd7Q75tnorD",
  "key25": "3yYjyLGv3HMUXnYe1vCtDWKEr3tFGBtfKz4D8r9hSttbPSLBvEJfUptUKpTqUyjw4z7roVNaCqf5WwWYjbjysdQc",
  "key26": "aJdPn6u5kAGEMFcYH3hD523v8fLR1LjuzGjX2W2zYLwzwAAKfpapR5bqPPMFNodEMRda3zjXMYN724hJ9HyBfEc",
  "key27": "5eX4MK5rTnGxwmJNZ25X8Q3Fqpsmvbiw5A7mq8yemWkFZMqyxyf7W777x3zPn3AjXYQBX6qayVsjV75DPAEThGAY",
  "key28": "5LRrxzVGbCeksMBtm6uYB9LFF8z6A9ihX59dxbaxKUNPyMYRTmiy7VR5p14ToyfcwqstrXV1cyYrQsf2nF5vPJ9X",
  "key29": "FFkkKBko1m25Ghs8DYAgSRtRQdfVej3dv8jnSpYv86P2ALaXU19kLNgr4DE3JK69hn6F8y5tPwe1BWYk8ZrPWZd",
  "key30": "4Af8VaDsUtHSZAjZMLhfJAJXpomWvXhvP8FPnXLdTuQ7ECRQZ7KJTwc9tdyDzRLH54APm66TZ646eYJgT5DBGKDq",
  "key31": "LwKrQRjeq6525MsVXnyrpuxHEfFoeqXfPqmg39tDGdjXPR778544v9uAaf8j8Zac39VowYt12NzDAJo5bJje33v",
  "key32": "56bqsc3bBhLpiNfdEt5Y9diC1nD7UjQjMaVpDkS5wdCwKoHHqEtZ8acpzLU71NuAA3XyZ25BbC8wWivSqd2yrmjq",
  "key33": "qFcLENLSuy9Rg5DXubHjuwWRnrLsRC1jb8pEM9cMUKFzrJpUqbP9sExoxRFerg5Ztb6Jf8XcgDQKYe9YbaPtyF1",
  "key34": "57e5WeqGZaDpQkaXroUaH2aY4BrvTiUZX8R1U6UMUnH5HFTtwwLbSMNrcN7x7RDgrLXebM5PEpmfht2nHhzVF3W8",
  "key35": "5KZLmYWQawbEVL6MeXDGvpkfXVUEoLqLSqN8bQ28h1aTQgo78S4SwTRgWFDrBPErMsXEz6zaizt2YSp3ZMsxG2Hc"
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
