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
    "i1NzhQKwst4356nN7DVzDQwUYF6C4Lt1nL4hZkrhTVJAg2g3qBwMU5pzwRVS7GJZxZMKoA7a2JHwhknx1z3c61R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AK1K6wmBYQv2aVsK7qUEWSCzwHxDbCZAmyNuuE11x9DJf58tV3tDejPjmE55bdsMjZL64HnHdnY219JqqTfmEbY",
  "key1": "573SNJgJD4mGgUyqXLcT6vfnw9Vbif1E5NcvGhQoFkykzgzi6oQp68GJekFtoMPeKq998dWvs5VYNgm8AiXbNA6m",
  "key2": "YhjmquySj6mx987VNMbqpXXTU56joemV6mcUM55oZeorV1vFtSinUTwyjz5QLPjRVkNWqU6xSBD6WgGWBKVBZt8",
  "key3": "35fyEjEpYQ51mC6weG3B6ZXQCyR5QqegYvxQxsyomMb4oo8NAMZZE5XaJWJdaJiwUGmcJK45oWaSscYiVu5ZQSA3",
  "key4": "25FeiWiKQdmFLmywhbiuKzMeYkhsge2w4c3CTWT3xw3vmvheWmGP9xEbyw1wZKop8czzGhF22yjExmeHE8YRFAVd",
  "key5": "2RXLguP5joYv2VMqazn1Ny4opbgrNJxJY6MJopDDV8wUoVSmqRVuhX9Zmkf4X7MTtqjiPnYzoPpMBBjTinXSnj4H",
  "key6": "2Sic6bmcPsQ6ZcuYDEutAscT11ZhkmMaPJVZ4N55X7hnHgGF3hbVc621bRFFFa77QTurnSpEg4aNo1DnQ1Gcwhrj",
  "key7": "2q92htf9XSwbnZkurxMT5mfymwcq4fBD7zFdNJKV6YweeP6S6DTU4oEDy3C7yCbnybbizTWBMz2EoAkwQYcVQJvN",
  "key8": "amSw62ew83JBK4RC5XKdeWW1ot5mmDjYv8ipgqt3RUsrQem9gswSjSSZEKBwvW2nLKS9wbnELys2s9NG5Nt4MyC",
  "key9": "5aRgux3qsa7LXvhZ1Eo4mSAp1eZwy858syo2GRktWQQDVwjTybwB6C7QdrdParqnKNR1HKgtarGfkYt4GoUbvGcT",
  "key10": "56RimywHvonGRFyfr2GXUkE5k4rVZcfWq9GiSpCLbonV721ZYAxfxnb6wP1bBdipzZy2nYqhh2yCHzq4sZk4RCXD",
  "key11": "5LFHDbmCNuQgTe16WaCAdo1msojqPyGvFH6me86zz2okhAatMoJPwrgrrdGAsARe336Gd6qTxgywE6tJF5F78qSq",
  "key12": "4NdVxYLRfqL8Hi6SqcUHFpoYNp9MW6EQK9EBL4oUHdf84Wb1F9sdZDYmF831VGJLPLs3sJSXsXoeRdcbGfBZjFyz",
  "key13": "4b88uKbycEw3BbERqLNRTKV3opcyRxgNeC2cBY9RzsJPHGofELhChsgXn8Um7TbLZgRK94RDv8insz39GfHYDoy7",
  "key14": "GLUmcT54BsNLDZioVAvL8au6wcpKkXFhtyjgU9BC9Lnsr2zoH5zGBhKMREcWCr7aN4PqeSVZXM4SLtV31tocwQp",
  "key15": "jRiDWZXDTo3zFN9ofSCAe9wD86FMK1A4nHeYXJofWpkUVGQ8FpxEgMKhjHL7FwXvSCe5WXEcve4qxbGXUz3uZFf",
  "key16": "hjdRMSbNjtokDyTo9FM3HKuesnCjWKTQKpNA73KvrPRPG5boNYhhMzE3aVxrHKydamkWoqDpdzCiS8RQmoz6xK8",
  "key17": "5MFTEroo6Y66AkL6k6ry2VJbLg2RNsvgu93jongBaxrF2AePuxcMS3Zg27EqYBmk4RNNiHnuH5sGU7kUoFrM1XuX",
  "key18": "yzEyEA6RkTF5o9k4WxYraLpdFT3AZhT7yvYWc6u6FSVUGGYR96kD8CANtDJD38pEKacrdtcAG5m5q4yyBss2Hno",
  "key19": "UcXZaEQuXnwdR39vaFstWaiLuoFmqRrPFS13jggza53fwdW1YkxRXB8Xs8gJFuL1QP2r5QHVbLjvvZHYPNnBMwM",
  "key20": "Fus2xHkPH7eFsZYpw9PSVYJv341Kp9ob4KcKhMcHEZWWfqjCpqaPPgtKhAARhg6SN6ciAUQ7wBSBXC7tv9JacE2",
  "key21": "5hugzdxH1vQLTmfqQjpgFzuuNxSpEc894amLqUMFeKJAc9rJ1Gfaheud2Lheq6Wcvt8fyPEaEuouiJMrDHke1oDz",
  "key22": "3oQuTN76Y5ta3rgR9jprNhqkCji5kL2awQPQp7HzEjmZzhF6kNfdNkyRvnTRM2m1KEmmKCdSkpPUpzygnQTKK36B",
  "key23": "3bZzqRSvtcKvFrKKDDKL5wB6mhn2ZPPGdgJsxNzq1H7V8CWhkDEQsCQ11xfM9FXPaJNJbeJMmX2LU7tSRWisiyPi",
  "key24": "5PtFBT3SjCjpQXJaPmB7YUWaHRiWfSdsxfXwJ9RuhqvJhxpTL8K7bARmpa3sXALfbakbAALjy2DgEaCHSYgQMUAK",
  "key25": "5ATc8RoDVkUk6t9KWgLVtwUHLjvMhgHxKwYZoqXbmuaaRFwg9jbACRsTDzBtPVVJDiuKwgq4gL1E4SJuA87P7SJw",
  "key26": "SEsjCJBAu54SXD22STp6bVAWMippZ6tbCgxGDvjm1rACyqPrGiCbAYz1hir5FoCPA6pFcMVvpjEhKMDFefKQEsz"
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
