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
    "4dzxUvujtAysKznni8j8mKZnTN2LCBgVjcYe6fT1ATweyX5DkgzsXDg4ibGSLeB4yYQdGm375Hoqwj1P2noggR7B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4brJYCvBCfP8QE6b1AQpaxKpm61AmaXSt5U7WFzpcJaHJs22DZDwQhVSyd8dwSC8k7dqztTHfgD5gnxmxkb3CmkF",
  "key1": "47ufXpdf6aP1vxkp3dLb3wE5D3Y59M8RfRa1SvXbBdDLyYqHCY5VLjZSc33G4gXZ6QoqU8UCV2Ti7ud6gVuB7oeY",
  "key2": "5z4hTG184iustL2yxQ8Q9VM6To5nFmsXFdf5WcsBKntN3sCHzJ2aCnL2i26XNaVCwep1uy4A95E75pi5z9easnAa",
  "key3": "4xkhEwGucBcJWzhqjQRJkoRXxE5Z3Cx8nQAMzpqj4u5RXAXQ3DAkJFLXZATJVuctzJWTRc4cL2LsoNuwZW9gTUzY",
  "key4": "4QciAN9NWWnT4PR4QWdywBNCpGMvhqiLfQ2kYaqEz7t6VZoEBJm3Mvniu13go9e6HwDKSaqKwzhTmA8FLGNeP43e",
  "key5": "56Ws3z2CKyVRGyVgio6kVwX1rgcjfF7h5PgG5vkU75BX7NmLLoQf9DG3rVggrdrEjgoHQeXsqX9WRTx6bKDtvz4x",
  "key6": "62gSbuxHuvfVZHmFZNRfHmiTGk6VYut48oWNJ3ZXxEL4PiWqdw9uri42owwpC8AXeNcpKjY1C74qZHJBcNQiTPhA",
  "key7": "3L41Ko3ZD6bkQ4qf4cF3BQa7RLwX5KYBBQeJjuMbeSy47P4Z2uYFRqwQVFQdGp6c3Y3A8kUMkJxbo9EWos2pDHYH",
  "key8": "2tK9ywnjP4vjGGexBitXWscEb9zxaWf9hJKvbx6wqKQKFf5XYQTRUtdcGRxNoVqcRumechznDqnLucBt6Ukm5jNm",
  "key9": "3vsWmzBGwajmdyRhTyu6JVWDxYBTjtQAN7eCDh5L4xyDmTyaesHWjZ3kUuXgECbUFb7UwqwhjPHnBzSbbF9WdgzZ",
  "key10": "4akeSt1eydRsTV8CeVfj4gbY5GWkHirfXWdAafdVeachbo9GNPtU1JKp83LvLnnsRyN46rTyaqDj3eoCnLKKJ3xJ",
  "key11": "3U3k615vsF27a1TTEY8HQAzrqe8YYkhwM8En5g2Z7VgGhhZ4dZTWzkJGZJWjPvCbvYYHrHUTUG7UDusFezJX951y",
  "key12": "Kf9BotR7duh5pJJAGsM9QqdmLaWFoZ6eEicckzm9KT8A689HvgUGTNqfCrzfChaLP3cp2KuWkdARt9WUwGYKV1r",
  "key13": "5pCfWhGNEkwQn9X1fT1k4LW4Pbw8NWR51iFPS8DRpAK1L3tviAopHP4Hw775e3MyoA6TLzCGHifHx2zb1hi9skqP",
  "key14": "53ejLk5G2GymkBtNPLaypkwTrheybTDVWBWX7qkiiLgkE2v9WWdFZacZUZgDweuoUtz8tBoZaZSqmjpB33aMBoi5",
  "key15": "qjvaULSBEQvfxYvTDgkbcaP7P2fFwyX33VF5TQ61HNmVA2duTGwNZ8R8dWTWnnJRpMDE4T8XtZk52GtqcujYYRA",
  "key16": "4zBUP3P8pwHLcX6XQZ42AvR4kSHV85c6sviPDWGQaL5cXowoFyt4b8pvaGUUTg4uNtvy9KmtmZfPzCr2FaLvseiK",
  "key17": "4hJPb73yoayJBALW1S5Mig3s7MAQz6c83DtCmew884hrJ4HX68EnqPxtjdh6fN4atms1VZPZUSGw1BiRDS4JgtT7",
  "key18": "3UCMpLEYjqSqgWqUsjRsbdmAT1E2ChfaZA6pHy4VXD5aHM7RsWmNAFVGZ2vQE6rZ5VKYc9kWti34qp12hdevnDby",
  "key19": "b8SXQAvuCUc3LV5cUK8G7t9d6fAQTVHTqkwaZNpeT7q7wZ1XEpr7xap5KCFUQX1uJRMQanPu5KPhMWP1sdjdGwt",
  "key20": "3C9VXEtDGzx49LHJuQy8imgjuxAtQV44o1Cuqqspjyez91PX7kpAiCYqMBdk9oU1xM5XAynF3RFo3jJkHao3X2wd",
  "key21": "3WxJ7HfZNyddPwNFNuCU3p3fSZn5AEbPWZbbvwm14MWr2updYyNoHMAPnFTvY7LY7q2JBAqYQAgHff9oCa1fgpVN",
  "key22": "5Rjk7HUUTPki2WFU28KzuPYB6ZJJxtEWCEWGsn5CaXPk5nNWzXYMjt4LeyWDJSMnuFNmduyuKkmu622SAEUgptSs",
  "key23": "b9AWfyk8MYudVJNtajzar4946nMZu2vqrv371dhWr9sLUqJsT4spTP437kVtXW5iEGjh5jGT25PEEoS1fzVwNTA",
  "key24": "jJvMw2mtxdMD1aMVXbmyfGqbQVMDDZqxHzxV4rFQQigFoo57F18QW7fFfzrMmaLGcvJBEtobjRaANpfHe1kyuM6",
  "key25": "3UK82qG39AdgSuaTMmoCGhMLTB55gDhD67rrLJLsjXoaKHkw5ejKowC5eAg4kmQHunuGKDesuUD66cPMvBVP4cVT",
  "key26": "3umT7THtWkmrV4odnnMuzH6pqFeN33WcwCtJsPHdhoCbxbkTPP3ZefvtqcRm5KK368E1gWKAjQ2AVDa5agFX2aWj",
  "key27": "2gvky1eLCuR1eTEAFSTh3BNysAvqYuSFN1rhN9VG1qAZb1w59kBZSSYhi3VNQAMNHPbCdX3DvArMty6wT9PHRYC",
  "key28": "j478nXHrTQDVafad3ThsEPHQfhxj7XFZQwXjYMf15VQmZgmbN2QyQE6YrYcmjAVEhkeSPzVXrmYY184VDiXhnAd",
  "key29": "3ukD5mAVXVCup4HPc9fELbANTnXTDFCqsi5ntDNGQiN9rcHPM2CXwLjyGmQqRBjL7udobbuhAb4hHyHzhriq6ZGz",
  "key30": "5U5TrCdcQUotexhU9uNAsBKM9H5sMtYZUJGVuCnRa4brLMQEqggaMR8J3Yyutfygzxkgn6G5F2xsUU29SuAX1Yfs",
  "key31": "77oehrN7ss2AwqfPpvtxST5T2s6Z5ahAto5G4NuxNf277uFPZx1JjXtqnbnqZR5bj9Q6mV1LvtGqbz84XxAXuC1",
  "key32": "4eezeZeYfWFiTdXBmZ9gQTnJYd9Lbp19vYswpzkUKmrqa9vC3aWTE4xNCeVgDq5kpeoSqYd2tKKYWZ2SRfRGQ8Ei",
  "key33": "6dc1NNcV7ENGmw9GV43EMs4aQtApu2M719kRU4ziQYnTiCWkKGcva53mUFwCSTbJpXN8GCqwZe8ns6nt7DFaXxZ",
  "key34": "w5X1NoVPCbtJPAHivi6T1xodR429AwfAgVo8kbfKTDcRsKRuGbWHVve2gdKaYErfYuhzBWqrDq9Zy3yGi5MAJoe"
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
