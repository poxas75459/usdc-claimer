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
    "2VyoQiWUX5wnDv2vKu6BKu72Y4CmvBuGKWurETdPQUNvaXqE7pKrgjN3sdeUsaR7yXxbZpQv5hXZrhsZaNiW2Z3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Hoc43Tt2spNtM7vq8xeZaEy3Av72aamqxVwW4JbgRYaLcqjpRc2oe4YLfKwaajzTN2MpCvxAU2kzHGFuhWhS8KA",
  "key1": "26zp21aqo64GictvBGWbexve5H6C9frHvPoQxXZavrPAcP4iMDY542VKAHPHNBrApmnPdJX66AwwwYUXZmBH4Nk1",
  "key2": "3Cr8ySGzTNk1hJwk8yQWNQzWh845ZHyvQZA7Nj1Hab8Xdd1rothiaPskPsgner21qXCfDxfFcjBMd9PojhM2DA3H",
  "key3": "4CbgJJTSWw71m84pn3yW3bcQBRxmJ7sycF25qJvWZXRCXWstH1R2QKpT1gdFLa7VZXTLNDWxbyAKjKs7jXf9WoGr",
  "key4": "3tpvhk9boJBXV7EBXcZ5td1kmU7YR8NJtg9rGDiGorHL6RGQhCeNaStTpqtSh4DEkBW4waSujCuWSqMJDPvguEF7",
  "key5": "49rxARiaBW4Er8aC9jrnF3oifiwmUkJon4rN1X5heet57GiSH1Xe4Gbw8sAb61JebKt3Mu2uNhHG2NRZqpURaMp",
  "key6": "MgEB9azXt6HLzJmeSrvgWhaf1u3ZwxU6wxm4AWWCpnNLGz7jrJMBDWH3R3VrEvTPz4GDcan4cge5BJjCwufCSQ2",
  "key7": "4Dcr7Xi2cwM1QeitELDLmmA8JRut9LT9kdHVuwSKvY4iGwcvSSKyCrVv7odC43QRjVuYXB1sCudXJpBTVcHfKLV9",
  "key8": "5Rm6MYdTvEea3Dg4e6Ra2gjGgEiPjEQB3sKHKZP1tqNcSwZ8hAhbTyWCNwLJohqNTdEJZZXLy9hH6WEpx2oNfXE2",
  "key9": "5zDSaSZ9XKz4ZVqFFtdZ5HSiG3Erwy92DUACZxhuvY54CDwdTg9Qo2JDCanWcFq4c92DQLx1XmdfsCAgH4dJ4CzT",
  "key10": "4FT5mo3zbUWLU7DqbnGZxMALH8RRHmzodDYN42QA3w1TKi1ujSCNGUEVe6W698drfLHmWZy6zwgf83VYKtJxcmFq",
  "key11": "4k9hqnPhjB1V3JwJQTyXjEzNEEGZenVenwqQkArFULxJafYeFVrM39qR6pCt2iqm1ugrR8WRZjDiToYq5GpDwiMk",
  "key12": "3iSwa25Ec75LmFcnFbp7hDy6uczJKfyNXjHwAfW1FEAQy4mU1YuikqU8KiJvQCmcqcGB1rNZXp19My7zmJ7ygumT",
  "key13": "5iU51JwvqsEbBht1VvgkYFAMhDHJBSimauRU2C7wEELBPE4CQiaxw9GSWdUqXiptcANESvQF36u4JrDEdqUqUQn5",
  "key14": "4CAv3FuQy2CBFsinDG6L7PWJH6J4v9U1ciQgrd7GHr2FRiVo67MQje7UHwK7QKeK4Z1Bf52hzLYW7kpxTbbS3rsW",
  "key15": "2kBkswGfFGoYb4fbs8WLM1SBSqSjPK33mbi85zCAKQsVecsyBYH6uBPmZQ1fCndBH9bfvvD5YyC75xgX4N5Je3PP",
  "key16": "3tnrL2o4vdGQ7Czm8qTqSqh588WahUn9T8sjm4duWEyubHwNccDrwvokPTUq1MN4U2zKSGz1hyR8naAjRCQ3XBy5",
  "key17": "4uMy4n85S78EnDJr2sktJMNdh4JatL5sioVd9UJA8HL3so1LrJXZfB6jeAd14mn2544DWyJFUfwgXh8spyuaJ1eH",
  "key18": "3kDsL7Gyr5kiVGYvMxxp9ZooLqgZbEjtSfSHRub6rEH9qELgmab8e8JWzG2dekwtirCxCMoPpiuXQ5W1LqJUmw3d",
  "key19": "5nGVfrGwS8jn6KTmxmss82kdxeLJSMVTWDi7sLtZtHkXWqMMZhd8accC8bRQJGRUXAp1MQu742P1FPLAYa6UfC9C",
  "key20": "4dKSmrbtMQX9NGc9Gbw1ryUusFWxP5t9cuxSMU6Hs7oofbHGj9gPg1t7kRt2F9Er2SknzbqvMZjsVtABrJ78BrhD",
  "key21": "7ffBmLso2sJEp8qkS7ueFcLRbMqMCQ5YTLnLYLL9nbU8izSy8QisdMuXWk1rYMCeuy7C7C6HjCYWSJ3bRb71Shm",
  "key22": "2bRfY5d6rf9yoBd89U3Bv9zZKxGzdZpGwvbxF4GsgAXrWsT3xLvQBjrcttsFuFAyEUgNaxKUeDY5fXmVja7DX1TA",
  "key23": "WMyj268xRj573xdcczmte5DpdY96MvWsZQnnnxitXJ7VhPjCw5U9Sh9oJQj4DpvqtHJMhE23wtWUAHdHqVYVRk5",
  "key24": "67H1UczQV9Lp8dp7u2zXPabFgCJ9LyGW2ggorF5YtRJHmTp5XBXHrJcmdisFP9in5ZCZrbbFGbbs6fAW1NzQYbyX",
  "key25": "4qaDWm3bLvb2SiNWLDDj3hsL9PFeRJ98PpbvoSNtrKYjK5Wa5D29yrXS3xtf3hjU7fVmcbshudFDSTy2ACvF5uJs",
  "key26": "WV75Tzt5aQJzsPcrkhfM7jzKBo6epEio8es29HGwPUD12hFcZWQC8i4A5KMmbyi4b145gmLe5qdFWcrCyj6jdBT"
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
