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
    "4UmV5uiyPv4RWfUmccLBEbNJ3AD3KgrwUT8Nay7mAKRTnbti7z4fKXnLw88LQmd7P6XALiokvYmQGAHF1c5knp8C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FTsno9rXw1Hgn8NUoAP6isrWMRzpJQcnbxWGGqWc8P63S2cDJH8F7PuTqE8r25MGx3kFZnTa2nQ4SxURPiap4bA",
  "key1": "3Pp31LnKWuS2psQFMAoCjKZUC6hPJhCgYMzE5gFqzpcCquGhg8dU8CoKEdXJ6VahobrKDr5LFViR4PwF4T57SiTN",
  "key2": "3xhvCHm7Bjz1FNLGESVfbACvUhtkrydYTL8G9jzRgQfo4J6Wq3fpZPM1uTHggWJnYQMzNsnYw82aQx5nGtakNJ5E",
  "key3": "wcGc82YxfTXuFN5DkpDpKworiszrAeXhc5ep4bxB7H7VixKd9JF4c9BwFYfDVEZ15X76E52XAYeS15LXtw1bZ6k",
  "key4": "58wjrQvSS6fNgjKmN4iSVNr2wtPe2CPKPccP6TvLMDok81gX5Cc3dYpSDYLg48KG6JpkcziovDACbQimqphgedV9",
  "key5": "Rp9KNivehVs7FsdMd6svYqEW7uU8g9wSv8NeyZTHyULW72xCoZGkH99PGVk1m27K94jKSuLnoxA5S6Zn2ztkh5o",
  "key6": "4d69UeU8vA5Cv2k9ivJGfgPrKsLLuR89rnQN8nJmAeJMeXkHpksTBNBLvgdUAuVf1r44ikSidYJWWSrFw7ho7hJ2",
  "key7": "7k9RRgLHaUacSEo2VMRo5jNAiyi5Z4HJD26xpqvxocvoCkA2v9hbbW6AUm6XcMN6R1PpJHTm8Lgw4uvQV13k648",
  "key8": "5nENb9FTTw7jAhsvtnR48rcbVQHZowraRUgaUv7jJXReyPc56QJqrXyuTZ4kGWB3iuXE64j1uoVSHutLy8GYsM4E",
  "key9": "2YvYLpopUQYgG3HgfFU4KATJ4QJFdch5cg7mQMduqqhEDRY4d5kLojhFTfiu7EEKMgzg64ALBKn29AwU9k6YMFoM",
  "key10": "3NJfQ2JqaJu7t3xXEv586PprXidjUftED829DBFKbUxNNHR7PReMwv3gAhETaEenkTcEb7N9fdvxpUre46UvEmAQ",
  "key11": "2AzBndGEn5W1rnW9utWv59Emp1bwwDekcGYLHjo1YwYykCyU8YhMTXdWwoMGbQDVMZSEoEfHDJ9zphFSy1YUiyMZ",
  "key12": "3BSU3FAAQWWsZTJvX4TorEW4bJND8A3vaKzxhakA2z3VJTUykfzwBvi1mh5avvonJ1GhRVEPVMiNwNWiU8srD4FQ",
  "key13": "k9v2bSQLTsyxnG9uwaGBHJaJQNnZgZbXuSn6XhAkL7Lo1KwvVpNKBeuoW4NXHxrGT7gSubobESsbGu6eqBgfLuS",
  "key14": "3QfCoUPbnBZ5jgfHFMLEY3Pv5kuZoALUfCNcokLqvdARznsvNEVvEsFVEYxSAA11hkwPpjr54uWv95sReyPE2Ahc",
  "key15": "2zmpknf2uRKckPGobsA23egukYCpQ3aT7f8h9moqW7e5ZxgjZhB1ZomBYS6dShDKr41hH8d3TZroNAB11N9pgt2C",
  "key16": "5y1CbHCxf6ia43SjycZac1vWf29sBLnoEPZkWfytp1d4nugrorSoev6QqRnSC7cPKiKZFcHioDfjMC7dNt7Fd85Z",
  "key17": "4YhgRVaPUANiypg39C1eynBFmqpdT7JArE2VLGroPA2jf21ijS6EWHDVHX2bSxajjsc8PsvMdb7wcbSBwikwMQHg",
  "key18": "2YDvKpZwbSNvfDJjbkuLrx2RE9JBjXKyuN6ZvJo9N4Wt7TUUFAafTPnRg4461JwQ76sB4Sa4BUUJPZqwtMR8Vzjy",
  "key19": "3ZXogywfqyRBgqu9eQUtgqZEWrwPNiY6hxRtWmDNXooqdgydSHjyLVybR8dvr4sjDNuk5hqMoY54kAUMbQrpJGJg",
  "key20": "2MjdxjAc2GADrVH9mxGYhKBUgLQbEb3VCTDAAW4LKuiCv5r2qHRd9ju3aVU3RJnwFju7hsPyHZEfY926bph84WqB",
  "key21": "3oJW9jDz7NMwARF19HhiXy92WVTsT4A42cxVukhTohn8BDpHLH4KXtQix12uYZU58kRaccmUvqgSD7DAEvmSTKGD",
  "key22": "2GthDzHrk5onLrDtwZxd6AKXygac7C5RAbYM2M5qMBgca7Ryq6vaQnaSd2T9JVercKSEJTGmfwUw7GPsTSiZWvFH",
  "key23": "2Lj78rPTLvdzo9akoTpq7UeWBqkfR7NwP6KUyqdZM3GQVHCFL3QKSAZKB9kR3v1Hswt73ikGXwmozLKbSgL19yPu",
  "key24": "4JdFVG1p8xro9VvbbegowcRuT5cUtvkJB7CyLBLujc3LTMqVv3Xx2W4DbMecNK2WK2TR1kKxETKux5dpkFvEMGcs",
  "key25": "62vNmkYywGetsZEAeZ81xD2XMVsc5g3cLQz2GwLsWgAmaeginbYkY3yWpEy2uFkUiZnqf8twyUUuESGnBa1jwGST",
  "key26": "wRS978ywHw2bbTjGbaqWbfc4h6PMchcjBX2KdGUh1TFkpzM2J3VvEwTA4dHrBneWx4PgUHds5PJE9P2UrrHGZTe",
  "key27": "256CswdqjCMFW3Fd6EBUYehouZv5EVcvP7cdwgU699MhneZgxAENfu8wvVvskp8Dxuem3WzCTQJdbMsZoGUPtSMU",
  "key28": "a3xe187grRjYFeZrcrbXRwphBpBsFAV2Kix2RQh5zTxURgHMQnSCUDP5UWQDErReSqJUd27RhjTqGhoXy99ahpk",
  "key29": "45dwZHBKC7YF96oYmX256989mNcaif3MdSiX7TXJDEAGb2owYf79q7qsDbA7eCyXceGkR716v3czejy8Sbcu4TAk",
  "key30": "4nubQ915E1jAirXPd31aBAPW188Yof5MNAuxKGMCMHsYAmVPB8rTCiCk1B2ibZwHh19LHE72896ovBZqXBJKkgJr",
  "key31": "2UrG1Xf3bDyiwsUHrFsEwVwenbkfZ8pSLtuF1CeYbp5nKBXhVp12cRdWHnfCS9GaZjAC13QdBPCUStbAHtu1pE3u",
  "key32": "1gouccsB2xn4RwgwdZBTv66HjhTkoJV5EkXK98gRvVGZd4X9Yvh9hfPVYCjSYZMRwqwDUsAdZ82nnyKP5BUmxs9",
  "key33": "3Ztx5zp31DguaEDHmYj5v434Dpw6Dtt64oofefNkd9fLoFhm77ivDYEgrdc2PNHVmUUPHnAXbZhQjLcLjNzbjqYt",
  "key34": "53Uec9uCVypg8nLr2iL8EKiH7pfveYurqziP18o4h3eH8oJqWDw4o97ycFxYkgimy4vMZQzjm7wN9UxvtaiFxjL7",
  "key35": "2TPLSjyZ2UTVYsHBWa5fKTFCFKBj8SLCBHSUZcYh8AeNdFbwvPkqwD9aYWtwdGdMMshRZSgZrV5rC4JuxfmCHNoW",
  "key36": "4eZWbRCRL3G5LeRussDzMRJc72Ugjfc5DZzY36iiPWcnveZ2VZJuVDR18Rmr95PybXFbdmL9EG5wFmpW5a5VtWMQ",
  "key37": "3E5jG8fnu9QLvB4avoXpt4SmWX6h2LwA9x4gGkFo2CpcDMMesKjQDvkmzHrLsuk6NDdGGUuhtQnvyZxFyP7eJa9C",
  "key38": "34EG1rfdG2e3cEt8NjnituLsX7Ljb4Roza5asp6RzFf5FTk743MvqYbg2V6rQDdfCpTcmGG3MUkhr74QFSvG3V3B"
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
