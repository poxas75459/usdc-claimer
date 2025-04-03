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
    "4wLG7vA5VLUWVTxBqozibpeiVBgd7kkjnPJZZ717zH6xeP17Vy7vkEp9QbLRQ89vd8BB7gELC4HAPxGh7p3qthJ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pXZ6n3y4MyzyPFwTKCnaFKP1giY3439gUUvJRhVgs2okU52LMsVpsYPpxaSW1yT3uUmuAF8fzavNJY442odqyDB",
  "key1": "Ez5BVNHLzYgKn9XwBGCrdqBMa2pku4GgaqrZp9o7TkcHAQm2fNzaCFoCmRPYuGEBxHraFy56adqV3jFxzTnCdMB",
  "key2": "2JYFjVTYfCCJu4Z7fRjAcezHmAZrmkC7Tp2J2SvVdTJYpK2tRFmKyAUAdGrr4zHoL1tvotyrfxsiS9zRrsDkhgfD",
  "key3": "2AiHESyrfAztYegfhza5qsAxZ46DDpNPn45PBdg7Doy43BnLjzHBvpe22id7cT1aKyvC4Q1u47cJ9dUMVDtZ8N2c",
  "key4": "4tG4LntfR6ycRhor5u8zYcnYCdM6VP8oP82AjC3P61BLhCvjbZQrMAy8jScyRsEnA7vVsNWzRuCPBZVg1MMwoSnN",
  "key5": "3R5hKvx3dxrfpo16Q9fwWW4xszqNP5PTiMDskBfaEt58QH9y63dkLK1axx8649zG37x2zfeUeWHkmFA49XEPQZyF",
  "key6": "woYeVdkGAHB81tY5JDjscwDHrakuP3akgTRJ6Q6pcUWEwbySPs8P6Y31kXSAhvAJn36UxbbcSPKvgptS6KUHgzE",
  "key7": "29DNBUc67V9iq6Sco8HaiS1utAUbfCkQgFGzJuWHTgTQc2mKJtVNzvPZ3Xo6NzFBGU3ihKrkWnGzQefa4z6eX8XY",
  "key8": "4WELAYoC4zNZhZAcS5RSSFTpZRxB9R6UKrPQdUnhzqni2yDtxNwTMwrMYrCrmeW2pQV7rj4FanfZaALEp1Vt8XGN",
  "key9": "3jHYsFtLKPVLzJ6TohaPRnHNs3VZ6RioK1fQFzAoYSPyQEhKAmVaKqmogt3qKFxUWqqtpX9K8daH4eeJtTrMBfVc",
  "key10": "4DhcQGVUL78VFrFZJLg4tWGqbabieoTAWgbshi1jjUhijmBm3yyTSC6X3KDhiJ3HuzBRPYufd5kTcGeGVhc7TfeF",
  "key11": "4Aad9UjBR44rWssgbgnWdAHYt5VEsC1mYGc5RrCa2hSMrowTqUsVbDp2GyuSkrdiyKYpN1caHcUk1N9YE88dNKLC",
  "key12": "39v9WvdUyWivRNQENfn4z6YCaB6tPg76KKsRgyeQWDu1DiKfzgCKNM2GTKS7L5LptWb22xaG2VFFmAJ2zRYmLcBf",
  "key13": "3KpvK8jAD4SfMuiT6i85jKayjbHTDC9Nxpvuz3Zczii8QQKtWMdYbgRyoAoiAx899oacjr8oyyhvTcWjcra2aY48",
  "key14": "22FoTcg141uX9XCPkwpj2AB6DdaxCgGEQ1HVZtr8yqHg6z7NzG6tiwDgXPTKa52vd5uvz1BZ5CUyu7agH2K2s6iE",
  "key15": "5TA2gDbm38Y7XUTRSHMaoC4N3hxZcWhDGLx9CKGf9bp9bMzEsDxQAkviYMY4DJg1ubsTYtUYi1js2WbvcRFRcoCM",
  "key16": "5WZapfU2KwCjibwTrp5gZ28VYCtgPQSCHxfL7P6Cqwq6WrkPUbp87UDXsb3ekXMbA5RwjiWTMbGAmsSktBCXGoqr",
  "key17": "z4Q1cYysxeKGTBpo6q9qK1sAzMyJBPCZhTHrAD1ugggGFkmL6MwP4ZEEHuMNT4GBeNZ8Eewk5N4NcngyEdn3TsX",
  "key18": "3uoN1eNnjkRxUAVPggyJ1XvKGXtkkDAjoymac9tTiRfEMUkrsLVmnSGmPwpKZnnQnzvuTb7mW9BasqUSLumoUyot",
  "key19": "5ptrm943cXPo38MZMVPs3Une1KpCpjoenCKqNcqmxw1n9HgBECwsuTPutmZJ3PMjVddd2Na7URddf1QeMKmS9pgU",
  "key20": "2mRr5eQCh6cS8s8YTFyfeJXtvL95m5STUZWdzc8Qwpaa2RrcjUUJKETfVNJ7SzTx5UbU5n6o4q7UeeHHFmvducuL",
  "key21": "3A8i6Xc8EvqioB768sRFpPUKA4t5VBqCUvwb2WTsGT53qZWJR1h8AxTYirv8rSvx2eCw5oakvZTScFXNhQLa2KRg",
  "key22": "2GZe8QWpq5gH6RCBEG2Z9SaqPeFwf1Jw1QNNh84u4SjNP2GEEXkvMAsA3TwDu5GeoA2en66ZnQrf9gHkxcntVUkJ",
  "key23": "3ucxMsE17ErUobCdy78wyhAsakH3cuJydEVk7LDPPuXjRNhaSn9t4srdst6wztcTqYWLe17mUMZrSTPFjUDyBVpN",
  "key24": "2sysrune1BzFiRN5jbEHCNcWUCWLjwsHMvCgXKt9EMyMrJcKy6iMJVeHjQd8Bj2b3vcCv5ZvaxRCxghTrVzG6sn4",
  "key25": "5R84P3gAatefEUDyaDeZQnkCgUsm19GdxtWVm793c5KuMXYc1jevi86d7Systu1e9CpLecp7PnMzbMPhZmRcepge",
  "key26": "k4bsbCYtkh6FkVrvym4qz7gmZuY46ArP4Y7wceBeoHUYotZh8ezwytQ1vsT8pj91CCqTxFbnnyxhpGqpbnKuQdB",
  "key27": "cQVdFQdzadBtQgr1XNruC8UaDiKwNA4RiKWkTwtyJdFNpCVnhnGGTiFFWdqq7xxSU1VHWjbJFSjeCg7thM4FvHy",
  "key28": "5Wovip4Qrs7cay6jR4r8VjAoyeNmY4GpJz3CbeT2u4kToDLUwpFVmQKXhi76ZvjpP1BDmjk2KqTUSy4eT7pXkKLd",
  "key29": "5X73FM66meCpTRXpWRNPsyQqkzRKaGNtge9FH4FcGJDffkZ7wL8ck5u8eyq8Fret2cFY3udViiuo4yoJbBkkkXT",
  "key30": "4QUZ1ijpz27whtNXnnTR2w4Ws2rQRRe3dEdHNNxTtE3qHqSgffjKWbwnMEyvWyDVK8FUcULvif42bUPnLqw6TQ7L",
  "key31": "3CVNBN22i7NUxRJ2PRAqwhXGVziwAHTLp23fajN5mabTDKCgdC6wCcjC8yVGGFKPnGv9Vfven8mubsvBDMYHCsts"
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
