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
    "3dtS4XukbiWQwFMwKNbDdF7aZoUi1Prq8c6uDThRoUx8tNVBAohGENj5iFcek9BChgH5kQe7FWompwyJafhnyCLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2adKxUuzx4JLghmfZA6ETNPZUfuvBidM83c7886asnc2j5DakUezxxdxdsq4QsiJb9udgZPKBM6XV6YwPi4kMccr",
  "key1": "4F76AiiV8xocawBWA1H4eM1136di1YeHcSkMYtK2WkckVsfcq1d5CR7Euuu5TjXJvjkVLTjP4Cvpu7gYBysdX1Mv",
  "key2": "6ZGe7biDNKZ1DvbGrrTPjP1xH1TXzM1bVquyq7K1B9FZhdmtDXY3dw1Nns8r2AFHyVeqwYLv7whSAABDmdjoYVg",
  "key3": "2GACwHatYbTQfxuwMEQAAo3zHUkLUtx4t6Hxynadq3pdtc4zrcLAs5xZwRY8MN1abiew4HTdWP8rk1Th3X7psnEg",
  "key4": "3Ws1pB39dR7WfGELypCBRfi3NgW13MwiPZZhuL54yLCou9G4AWaTBUdCLsKTmAowaQLX1pZ6bvMbFwzfhv4qzfbc",
  "key5": "493WoG1Bumf9T8QyGqAa4kn5X2chhem7f7GD4PKD6Po1HxFEX43CER3ZmdWfU75YgYD89W9HEwULdA6kg2o5ZJ29",
  "key6": "5zaRb3A2RDNc86cTUK9pbkjpcX8B6CpqYyZgCpkbeKzsnD7ZKJQ95sypEHxKtVWhhPx1eKaSYxG8iSam6a1hqMV4",
  "key7": "3zdaRMxoqRSd5ypXNRziZp3J4aJt4vDnRssSdTG5JJwuATXjd4dLmSRXwvZxPZD6uZL28SKzrz2wMTexs7BZcBdw",
  "key8": "3o25tnSHBSxaJbkbR9dSzy95hcoNJJGxdUBeQRnDjy1oE9EYXqoTM71ycimcMuafdjuzq7QA9KdhrX7HT1xXAqri",
  "key9": "2DUBdZdYWYHRzNZe1zSfHC95G5BziaCs2FeYorzxdaWv8i5JLfHPAGob3ak69nPzcQ4oJow6UjrBb8yA51ZPY32M",
  "key10": "HbyAwGCs5arUDJCFEnfda7yn1BFefLa8JtnYb4fArxF31ENpKaUAfQEgr5vc5bKan8FkXX63cdJ1x2gDG3Z7mUs",
  "key11": "39EUu38CYE4DQYjFNgDcoyyYbGqEKF5B8KLuibGZFh85KutjKJN1rPokvt3XB9HdLrxyw3aZojFeuDVzowmA9hR1",
  "key12": "3iMMhhMFKgiGe4YmtwVXWDaC4GBbk7S2ix7veh8arfAFH6CupYCq8yQ8CoZys6xuozFRArw9y8o3aVQ3XjagiDrt",
  "key13": "28SdCTdxgaqyt55Q9TXCJk1zMmek2XNtFPtDmvgue4DVi3QTrMJ6EJguWmP97u22zqw46qjLhk8oQHwTWQGykiMt",
  "key14": "5WQCCs5swaky4smhwFHyeZAcs8X21EuukX6Dpp5VCjHJw4ba3oDzNLiBi7d6cYkaxhXwoeuCK1XdGMwmnuznAoi1",
  "key15": "2N4jshqh9TboGLkYu7AJULV19KqDxpgcbYodnnpnqkPEacRnarx1wk8x7tCMTemndjFFddZHAKkPCBbdEjo8Xe5c",
  "key16": "29549mdgF3qtTMsoe4Bc6wiexLkpCvSeczQj7PSuauhBDVgspBfVmnyvvWGgpVHpKKPzQdb5qheUS5RG5MhhAGfn",
  "key17": "23YMUzsFrTw6DJ2QrcySHxn37MiPGPDBJn8dgdBrwRkfzdNh6cknXyu7gpC67ah2ZBA4XxvLg1YxSbZ55rH1VL5E",
  "key18": "3X3sofvxyjL53miiTyVmamBLv8pgLH4MD9AqTTNAkJgvuJ2Z99yP7Ms4jZkFezW2sVe6u8ii3wfETRP7nXwi3SpN",
  "key19": "5evbhVkK1pRaHov2TAz7GyzVW9pSxmLbeSHpWd8U83ZAdLKVth8LKub7bdD8eSm9wVnjUB4g6Ti8iriF692bSyF3",
  "key20": "2FjewjZDGMqD1DDy61f5Wd77DYdpRZdg1XHxKg5MkWaMAj697JM7MWWctR2MtSJqGA2WAwpNRmLcvVw69nV65M7C",
  "key21": "5kH1nMf1QACZwY7iCApqpx2tqBMvW945czaNomvr6E2oSmrLSp2c2PM2ghdCaNUPz2tJa1VX5bHQMyFRRML5P6ox",
  "key22": "cnt5bGdTtCdrvMFrH6XHZX1Lc6149CUk7Fp4NBRY5F6TwY6LngMRGCaVUsAoNYPccnYknusFiGL8C1GwkqHxEMZ",
  "key23": "3fiouWjjE4Cw5van3atiD2aLYrudtpYJZERv9x39cF5yNmXRadkKTvdVLJXQQF9JYhmXcc7KRggmgrh9sYHQ3JXt",
  "key24": "3q7RfurViQaPFpmF81kxqoHUQzDesiXYTf1EM8CYqKMay4gK5W62cWnkJBgcUB7Ec5g3VPY3JAw7AqNJbkKgLdZt",
  "key25": "4LpTvivQo5CfDEWeZfM3K5pcKwvz4mSgPPRpiGz1hDsfXdXPW7ycqZaxfnVKUX73BR6GfB83cuzHN13hrWgbnHdj",
  "key26": "425Y98ksBCARyeULEGMFDayKsweR83Xbi1FxzwoNiwzUFKifJaLY4xzcwiFvK7YwB5yw9iQyugvTng4d9JzmUKMo",
  "key27": "3jRNpMJznEUeFxUXPxdsRGZSrvxsDR5bPithbAhzoXdkqdZfJB77RssHnmYgujdGB68afqgzoxTstR1Pv5mZtV4C",
  "key28": "UcJuKdYrJFXbnJXzyLMPWgde1eg7Jo6MjtFUCxUkvNAt7dZfz2D5tmL7MABBwxdghhUNwgrTBLomqESstQMTp4a",
  "key29": "39siMKZ1iptbU1hBNDx1DTfkWM6PN7Uk79cThhcWARExme6rU7Q6a5vrgfHg3ANbZUVE9kV8jRtDNPmPrAv5Ckgp",
  "key30": "3hmYcPeWV4Bvhg3Grt8ieRYzbRuk4SYnA1zTCdmdkXyZo8d7Rk2ecDu4431fv9WHgnBf46hpZUjrTG3tuRFGnKdE",
  "key31": "3YC1A7wWtnRFx8S93snFjxvN94aLb114qLwa8zMiea6GiRWaJmyUscVH94Jsg2eZUmLPF17bwG5A93kY3f5Eu4Yr"
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
