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
    "2XGxf5Ra5rvtABPjKMR7vozRX7rwETJpCR88RyApJLmTiAHdj2wpjav6WbkUkdCPKVBKyM8QwtEYvDd8mC3miefN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MrwCZRjGbHNrYkPDTUArfBdgpWywf7Fm9yA89uBvENuFzQ9TXE4GauuopLE53aQnKqmYSBYfi9fYUffNQs8yZ8n",
  "key1": "5r88aT7HJo3StXj632roDKGnjKLS12sjA5azkN3yUfHf8GGRgUqNC2vVsMjXN2MEtmvdjMkg9Eo8BWaKRqH8zEVg",
  "key2": "4iHBuokxbmKe21Y596xGMgWSne9ghhLvzAc3pDMTS2Rr6gimeWD74T76uz6G3YiUNEhkF5zm7JXQ5oTYZF5oUTNP",
  "key3": "2jjsPFK1r6Chiz6K3SsMeGBgPfedYKunmym3sQFNZuEiWp4ixUAJ2fvRBR6DJuYL6U1npANUzMRdMU5B44NwQyVU",
  "key4": "4ZxNwaXf49c8JsPHe8b2div69br1mMvR45gx7v9jkYEZX3z9UFikUKo8VN5gUCRR1fBj2qpxS6MdqzE2NT6RDQoq",
  "key5": "3DH6iqmGsg7P2ibFB6435CTXbdZ849XXNY7Wyc6ic795n8aY62WTUkKmtGYUfifafwKa2BbQFMdjDxKiqqyD8CsV",
  "key6": "dznuCnCtc8wNmTD8BCo5nkRxBQchP5LbjPti9huEmby5Ebrmueah1J7JHsmVdXHbT8qCd4KTZa1reD3vf7XK5aU",
  "key7": "47vDSh1TzifaZcizRL1G2Mr232eTzN1HhDLbrjS4u8pPeMZKfFqmQ76bNSg3CNQmkYdM6FwzPks1CUm2i21DF9fk",
  "key8": "2FGqRA6J6H2Sk3XiLvh5b2sqBgHpok9JKzALwbzVLAadgny8G6xbc51sDkSfwBZYhTzMTbQwMFkgwierZgY6xs3m",
  "key9": "2CEXyBYunCAUczABad31PedHMExZzJY1DVhTTjNeJi5zzdgbPPGi6mCtdFN8mhXhvHnCzkbEgGQc7mhEX9nxQiM6",
  "key10": "3WckMNtNHmLub3CEoWWfWMBrTWjsVX3uzcHsR4rfREUGboV2gdrrEhYD8KkuvF3LD8XoBm4FfqSufuwvjxuLBb3B",
  "key11": "3E7VzemQwHzH8TwngNJa1swq6yXi4HjfaDgifQugShmSLD3D5hft75dLgXF7s2CUafhhqBoCptFs1DogEZDHSMjE",
  "key12": "58VCSdFmWLSdi8KqjYKjRJ5PS6s2aMQAMLaW9VNVRM6VFrHjgubcjXUnW5aAhhSSzGowmezkeyjf5iWFWYYzS4iR",
  "key13": "48WbwPgqZmH4N5NcMHtw39iRF5GWJBgY7PZ9azNZq4e9RitWAFRESEtUz4L6WVA4GuCqgUGbqsW7CVp9MDxHEK6x",
  "key14": "3ZTkr4784ouhzC3kZxp3m8U1sb2C9BR3dv3ntz3H3RrLrxwyAU34W4cVu7WttS34XZJbuWmJosej2zSBeQES2MCf",
  "key15": "49nx46vfSddSteh99WKMBGA8BoSXbZJVGCcmADik7fPszGKWXSiXN42t86sT14yuwxqBFzd6fjp4DU2PCnwttg9",
  "key16": "AS8NoPBg5qtLDEpUeABp7Ja2oUYJp7roBE4Sq6GUM5LKX4Gz2kK93T3DezCYJTH4gUNNKaCzW2zxJgKzqTuVVdM",
  "key17": "tTdLpRKsENf7HwZKNQYmpfqXjmkYx7spcyEEBKZ6Xp7oftroXVcsxGtqBhrVYgMwdADmo7szMwvcjhvdbY9Rbn7",
  "key18": "qmo19q7uCxVyz7vHbRkCeLncPQjymNtoTfvcaUL8PdsXFck7UF85r5EEfwtsCwiSqYxAtSRKHSaSjomjpxPsYV2",
  "key19": "gC4eXMAq7yZyytDj66kGk9AWL2Ntowx8H4HKrj55ZZ2BQe2RCUxXPCrt5nNziUH31b7ao8UaNZ1Na2VUro7nmog",
  "key20": "UcXhopGqJ7tyQqDr58igXQa6J4zpm3Mi7ZtzVV6213rbDgqBo2fmfUqoep1GouCy98Fgb2HedCCpZ26jhbQMYgP",
  "key21": "TGVfWsvnht1VM7Jqp3BuVjikTUcxStPzC4WphFDZcMP7Veq7F5tEFFTnxJfVd4nxhbzESbXACyjtcNN5v5Vgu56",
  "key22": "Dtauyd6gjAZKRXjRBGzQTyYuyrUi97n5YkEtLzCiFsECutsN2462ANvwP6vSBCqfxsMPeqGCNJbxbW97HQ9u4pv",
  "key23": "3G8pJy4rGenYiNjeJaPwfciJT6a2RtQ4ijAGy4MFrixjXjdaDQaxSgBj6mfHoepbonf2CFkP86aT5CxxfuRg2jJ6",
  "key24": "txKc4zTezZkET8SES8eMyGzz42znNZgix9Em84wVoUjgPN6xn9VbmxBrzD4PcJeAbafq6Sdf8MrFfvCwKWKvunQ",
  "key25": "428sFisQg4EGPZjXeV9w5aTv7gCLNc951kK2fjbvaPmmAihCyDgy8jYY5HpEpgUH3mPT45XTyFZagxpSKmf2kKSg",
  "key26": "2cqbetACJAs3cVAmiDAts6FgYzGH72aQULYtzcTRWwmUYPmyeQ7wScUzYKF5ihuSWfgeYZ7B8GuTGLKagCxMNGcP",
  "key27": "4SYgeY3SzgBZNC8doVbaoLxNNzENnwDZEq31rKzxyLTMbiiQPVK4ARvg2GoJhi5UoSSMUehsAdzuRXRXW55UWofx",
  "key28": "32nQn6wrZRpHEZGjE1N4VzyNnzBCtmTFBCnZYpK6kuhwher2GXbscHyJ9LqwH8GwR7xiFPFTJbw6Fwhe7SaSk66H"
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
