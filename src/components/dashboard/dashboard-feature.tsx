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
    "3HL78AvdScMEDH6pP78vsh35Y79sPxfCGupwkj7bDJUxRY46KCjh67t2xsi8dG66eAeq8hZFkgnurUMZYGNC2PYk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qBof5fvXRBkqZAvXeqSUsB99FKaXyHjsyW28zrtsg2qYnTUmJmvJWXPPZRUcUSjAjJtq7MhHcSJnF2MEVPoyauA",
  "key1": "oARwxvh9FVfCf1LvYUd2BVeXX6iLw2ULNH4NUXuS7YwXM2JXC5sj31JLZG3WLCHGW3tRLopEpZHj8HwX2hGtfN3",
  "key2": "5sKNZrCDdBedMy7kzMCLxFchw3vcaszHKFHYu2t8FCCHrXJTacy7brQGaV11GKHgRreYDQ5ZpPFZekAneHM3HC3R",
  "key3": "4emqthESVwAZyUMdgxKMJ9eiZ5XPxFGqJZBhkLgSdYiSdc4fBLMR1P6hQ8G36trEcuQbAxeb2ooXpH3Kh2xgSpAw",
  "key4": "5QUwQZU56uVRonnTuz6ZWEYrARgVgsM3XYFBoxqU7ZnfDCVoYDPmDY6KV8cFZZfDhXYNbWd7mSTTv1Epjp9uuBzM",
  "key5": "2KFfpcMTaf3HrVkKqRu57uevwwmBko7vWjugrvCEvniQm1wxMn9yXE5iVb611ze8uC7hfVSVjFduYKKDWfrhKYcP",
  "key6": "dDkehHbs3prWSvurnqt6XY8oPzc1QQ1hCgAA7nb1iwrwtoqMYcF1gbvizT2q7TeRD8SF8pSieDUSy6SQGbwjG7n",
  "key7": "2qeGwtNmPhNhaj82ZTGctb1dvP5qMhxNtKp6ZG2R3hAC5wvpRCGsfEC79JaCv9Ty5XrVY1aHEFpios5JLG8WxmL2",
  "key8": "5cfKdh2AsyxMjmhfw5RJssXHHTg2b1aNSn8K1b89HV5J8jZ7JX3RYkXvhT29GR1Hks4DWpc359xGqwB4ebm23Cwb",
  "key9": "272Lro3o7fWpUK95dKCvWh5F6diBAKyyKLmkzz7mpBRQc58rz8ZR4x4WbfuwUhya6TubqEtJ66uYo48w9djyo7jB",
  "key10": "3pa1xcw5ug2rP1jFt63TVZX7vnf9C3ECXJ9Q2aSybLChKvipzm6BFsR7QxazUikffacMu6ArjLbKkwkDZ969AWLp",
  "key11": "LB1eNNAZLGHBUZNbb69wyak7xN9JHovTHNZ8LHhJHMomeZzXyWjjTUyYRMxpRU4WADNHP8Vi79E2XwzJvJ3WpC6",
  "key12": "5DU1cUHmeaoVMvwp5dWsRHpLg2SRJcc3MDYThToqJNqLdrKnQ3skM8Ph2GWjYdgQS4B7o22LYKCVVLBBMYM6qrGd",
  "key13": "2DvmbWW66Pig9JYWkjm4z8AabeSZLXVABbAgnxBnaEg148WeA5tDjXzJt4hYcfkGbUZmuQnSESmeEzctFE1C8hhH",
  "key14": "37VEETkm2YKwmWFECKB52nTEzsFRVfcazSzKnKL3BWdT36esNXyXecRFuDZKjUXNoVcSNbXY2qL1j2vXbmfDYndE",
  "key15": "2rsoGqoeQtNnJfn2G1kBExxvvAEMRiYGkqvdZxxTDYYHSHSxcy5ocfSAEDJHxpwGZ97EVnPTftv81rNhNkDLMv6F",
  "key16": "3uGbQmq7TZ2JhBaQytzr4JurPf7WVhgw3H29BQNrBCthmU35arMvTeEW4wc7RbbWc7zBLkEyFw11qDnDiKwuJJgN",
  "key17": "3eVLkVhAJozFScAuXMzzEv9XVN1SbBZNwuLPb5cZohyP2ajFihXrXNFDwzwW9eJyixxhGrevkYCRP3U5zfq2SRN7",
  "key18": "2QSsdSqmRxhmWTTVAbcUnmX2XMBxdmfinSy7ttyBbXq29ZE3eXfUqv3mAHFokQU1MaxkJFeY9NQP8uQChUr2RkUf",
  "key19": "5xENfTPv2FDYbteUhkSQLw2cZUfpisAZHJ6oaaEaCyqx1o9RWDLG1iXh2AoNMPYtkr7UeFCFXTxeU2BpbLgPjKJC",
  "key20": "43TJL8zw4rgJhq2ZGhp6Ym7P8k3U8wrJdnZXuCRzHUQ4tTUeL9thP8uiLFvodftbj9Lv3PobhF2WXae3Cym1x6wc",
  "key21": "51ThEGX4yFJignwmSt7jCQ7ZYTRbha9p5y2tJ7XUEBtBn2eS87v3q4CBWHsZdWWdHicNYq5rdpUHKCuej6rdtaMY",
  "key22": "1u1PGmb2BY5ngcD7AxZhfoTRrw4USXqNnz8vYtL6hEfJNUXuDcjdET94z7kVX2BPohQqf6PfwKQ2XfTtE5AYTTc",
  "key23": "5KMQs7wzvSXTPVPRqjU8xADDos1pZX1F8v4PBQzqWYSMmTncsS6djYxorFux21Y1zaccgAMc6bKpiaMFEUXru9UP",
  "key24": "4DvDT9ivSb8VEKHHLpMQ9p25NmkYmnooGVdojZejk9k47ZEqRg6Q8bAVV57W4gbd2LDBhX86U9dXyQxRctW4nx1A",
  "key25": "4n5jfj1peAmWu5s95WwZL9WcAJPnNAqRhMXLDzaZs3YirPnt5n9QeLGYE31LedHCLKh51pj87qk9KEzrjwkwePyA",
  "key26": "3A5xDcgGi2ar5Uhf1fbxM8NbJLWKcvK21fsPkTVMjjEzBxf2qZeTzkwsZhSaF5VqpE7vALRRsD1ZYrqCEc5rzns1",
  "key27": "2sRKHJtbyPLCvDWQWHp96k482CDSaYuy42qxCPtbVpCSt6SWpVkoNx3t9z1hsz9WZhPvVZ8BGi3rdwk3e5ScWkwp",
  "key28": "5WXZ88LTYBVExYMTJaGS71Fcebk7rrV85rkPPQfJzg165PMZHnmMBjBbkvg84ssQPzRi9xe5d6kKW7gXAsmTkczQ",
  "key29": "4TqsKDQzPuz84o55UoDQ498S4eqorNv7utataA6aGwcbvbsep8mJn3Uq1f7MxcPfZLvvxaHzAwbuwbGpb8X7TPjE",
  "key30": "3UuhgXkXRriEwJchUATjVnf24cKib36S23b1W7MyQ6XovBdF59mznpfysw6mCC8cUpk6Whh61odLm2gbkRaQXHrT",
  "key31": "2TmAjaTPfrbYyC2gwJU5MnxAVkhTt6MWqrtyaxMQ9ZRzJF5zU25GaXnEn78TVvcbS5LKbMCPqkoHwCjNF9LDBKSc"
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
