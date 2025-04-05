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
    "57YF9Hqvx4YCRjp88fConV5kvUpfhMDWMcDL2oJnyAVkEP1HSQVkftU2gxGtS3Ny87H2YCvPszEGmbP9zXU697Ub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z2GeYvQVmw5wdH9fYbiWDZRmNe9kb1CqWqiTL8u8SGoDV7kNBmUx3mb5Kw4oxRdyWTYA9u3CwMbrN5MbHG2Fega",
  "key1": "5WKhwE5wPpHqmQb4zy7MejoevxNHiLrjrFEyUJRqrx9zSR8Q1KTi5aV9BY5a3y9s6TVbZ4qo15GuVNChMp4bb7YD",
  "key2": "9kkFi2r4L2hPZ9oAyCxzZxnVdUuxYixwHxDX3Q5ccw5BKkrreHmz9Szdo6XB8js4zhA523oVn4iRrytGdKJ5pmS",
  "key3": "5SQ17p7hTDndq3TETgFoCov6tXxuqcp47y6N5ybTSrd9hwMnXrxKsCwUzobA13sactFeuPBF4A2ZcnnMqtVLyeW2",
  "key4": "2YJiqaZhK4cTZb2rVga2VgqYzQRiGfCRuNVsicbpk5k9dHG6Mz143NA8wC4C4V6kUiPeXSRq2bs9sTnwWDmkAgLH",
  "key5": "44FEHh7FEcXbu4FE8qWBvL6CNKN3y2N8USNF9BcRrxhPajhU73DFLSvrokG4LGjDvwPBuuX5A6hSiEYxwfjQqXaw",
  "key6": "HpSc2dASwjr1vmUgL96YkEX6bLqu4cMjQqERZZyRmVJe86gsM3DyPSFEHDjY51CabiLwttAzABFg4vBUC2Ay4rx",
  "key7": "ZsqgAmfMH4Jo1A1kiSerADuz6Byvqm6ZG68BLiZnxyj1DFqbNWzocQR5dQjwsDqFj4yifxtYXDYCHyQ9omVL7iq",
  "key8": "jipn5byYxs2uyUJ4cL2i4EcYcoULLZJhKZSQFuMeC43kT1CEusCcc6G6GaLr2y94aBz8ifm93iVL3rkPdCqHneW",
  "key9": "aJHgCmorJyVExScUpDBFghFc86SEdgPY9XuoKUfQi4ivmoKdeEeeezUb7CzxaNbsNvkYMQgPBFWi1p5BWo51jgj",
  "key10": "4yUu8woiyd3WYsfmMQL3uz2kbL1Xxh5RHggij2Y99Fsnfbfg7uxdLbeG9JSKXbYfxV4hAECCwfacGedRKTNiSGrQ",
  "key11": "fTqEpPeGcL3ico7RHRn844ak19KtLJf8yicfPHJ8PEvBm9LVxsVyALAP95GbUz9A3vg2hqxapdDBBHDmiH4kgWz",
  "key12": "262AgagZoqG1brexGHgVDShz1fo7pqe9VyLV7RWxSCQAkZcAhPeTqZswFciFGCkgZPGhPEuJHT49XD1okgTbuCLu",
  "key13": "63swAiaGxboYgwtyzYaqVfqpE7x1Hgbigsvv2LfTvG5E2cmwihEuVepVCNXSNMBbiLMMZeMUYusEuo9PGASaPo41",
  "key14": "35cV43LRJaqNPjDUgurTWg9QUhyJj9riY2PUcsJy6t5V5h5A3hsSmJHJxtqGLCYiKHtyqikvxXzd31U552qQCfUu",
  "key15": "3gZu2c5pameNkTwsQ6R6mT2HXZvBS7jNXUBNv9mtGttXcV3NnYsgFZqjCaMvmKdyM2yHTEFeex6HY8wdV5hLsGq5",
  "key16": "3KBXbyF9G6AiRJ5dArUfjgvQ4BZSWiktUBahk4rmAqZqUE9c76pZh7KGLCF69QFTN76SBgBiih3EjZyTacmNVQxP",
  "key17": "5BYorV1PBPyUiq4q3ujAioFGJvP7hY6xDqP64bi4yW6R4bu2Ldc427W7T9rwbgMxWpBVMfHQz2jnge6LG6qbtyb4",
  "key18": "2Awi2E2PjKXDPxxG9j8SYDTw1H8sFz61Q9NbyWk4TunLEBoePLKfNPJTNkzYtbSsPFhvbM8SzhCYRBAtLapqLcW8",
  "key19": "3CGHKP8EnStwaKHcHqHHWwbuwag1jFEGpr3UkJKtTdfa39G8t5PHmAbL9szRwLLD2hdCKw35nBi8dv5FVkU6iUmm",
  "key20": "mmsS4toYVS8n4ARh9hypdxFsbh5hBKVnCDppgDogBMD2nHM9SaomCcvWA8Jf3P5qQDuB52juVdW8Wa1AunnmdaL",
  "key21": "32Xcf1qqbL745Ho1mdhdD5Y4T5ZMJZGD5Xi9cFkBy865G8n3s5PbncfmKwhpbL9xexrhcah2jLYhiXmhB1zqhWqD",
  "key22": "4XZQnL8QZAUbTLuxEdxeRrQ3saKyST8bKR1KS1LMXHQR8RR7jKfsXhgGU3utGZPvyho2iQmAsAMGWGE3yVBAuoKU",
  "key23": "nGmvfWTU47qxGhxguqACCxmLxh4YXdASd6ejLnotT6ubeS8L67XihY6p5J9ZpRoabKcvPNtbPEWr7xgufDQiGgR",
  "key24": "2G2AgirHf3d2DgZR7Mz188nhT3JGa6DqZraee7NPsKke2Bco2GBW1sg3TxWG5K3mx9CEv5uBBWSaGrxSQFuEAR4u",
  "key25": "5mhYSnFDUFsHgcSDDushmeL2cSVR83FGoxa3CQDt45UbZ7UndL8xWaHpS73fhiXYw8Ug65MjsZhTGcftu2jnXjRF",
  "key26": "4oUdaAovgnT4PDhSx9NrrYokyyFtd14XWKV8Bpe41HuyftAfguLFYDq1CRosWEUKDmA31bYk1R9uHX6HNHAWLaeq",
  "key27": "3C419APtiCVXf8eLiomZcefj9qP7iEmZjEwtoibspR9mbKHQTe7Nyb7Qp6XPyZkmLQFPqsrw9xV1qXEw9F3LKFcX",
  "key28": "4CrkhSV1r4zUybEic5DdQq6XR2tQXH9ndnv5Xhvd9MCoRztm6DiWxw8T1tXTxd3httiGVWTRitLWbT1vCcicmJg9"
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
