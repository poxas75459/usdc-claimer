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
    "55rQ7xcC7QigMuBxZA5Evco4sc3Pjhat2GPunGLbUam8i8oxrj2fP5WwioJSYthiBdKoAFXx7qXwWcASrpWhZ9Q8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cQivD7L5UvvyfnM4SpBhTvh8pq682z5tUk5CmD8nkoYHncXWEkDTV3ssftaZtzMuBPbn4Dy3p8JKawqZx8vrzdS",
  "key1": "3Kvvj37Lx59WuvjQxWML6gSuDXcNCd18dzuzXfQkiDhJAwopvEiEgMZKCKnUj66a7X6E8oPPkQQ9V21yzUhjtwCv",
  "key2": "2ErssG5Ac5p38k6LBMbLnCzAko4QxRLCKoxqj5GzAqh3F1FgktbBN9QDL9shNF2hpjDLjB6Nx9CRh3Bd8tiv1GUH",
  "key3": "2cLdDCZ71UEpEodicvmoiyCceZmAF68Jn3DpQHE6Qxj6gfZCzgn2HuoxuzxBu8cCof2vzgqBDUv5V27B5nZ8doRG",
  "key4": "24uNoCKcG7V3qtgV6pfxjnHqMFHi1QZPtDwWBx5ZqEj3s9xN223Pkaab8ix1U87nRWFH7hYgeGgPeHfJmBSEFBdw",
  "key5": "5VnYfewW1LeVCBpGhiTDJ47dTqMc4PYbd47mjqaeoFiTsfH1wYkYFKpMPbDTDDCfuFRUT8CyGMmJ8eaZt7B6dfm3",
  "key6": "5t2vCCKXvmxJp6bj9rfW4EXySKfg61WR2mTd33EmWhkXqVHJWp7P63BENaaNXj7NhdTdzFqZaZRSNU934WSgT5Tp",
  "key7": "5iVnCLDagENTN29n8na9i3J8pfHLaFDaJKHpwBV83tiXM5cVaU2jzXehJdKgpo5zCafrxD2STeJSNDU9qTVfCwVR",
  "key8": "4NuMe29VGVbEttYUM6iw31D2w7SEy6A2bAgTEc2pxwyyBUZVzduTYJDn4jf1cUA7dvUecnBX8zbPf5wBLgi6QCP5",
  "key9": "23Qe4WwukzQb9EWMr2uZdD8Fs68auzYdYMYnigeeHMzY1YtPFBm6v2GvzhuvEEGB7Gkzxhmo7Ce2vUHBqtyovz8E",
  "key10": "4R4kumNwtb32DMSuxvTvpi4hrkzHH5GzmWqVTZj3ik61vesXP7URo4HmXk13AevMJotzh2t1zzGNzR5NWQZ6uCMB",
  "key11": "2ebnoUtvgn68H4ogDp4NWckoD1S6nZGJ6kdE4VvEALNYeNiLczAy3vL6ZREfLv1mvaFPCFVZXpPCuS6AbziSswKV",
  "key12": "33KBdobt9zGHgM8jjnbYi7sEWDaLJq2sZ3YpjHJvoXjDSSSbc84kWuQvAPXJhxjoG8H6HHqmfYLvGmTDBfxxMofj",
  "key13": "4bxjnU2H88ht8AYfhvirQpGRru7oHrf8i3DwXQMn51W7NSHYUzesAn6hT1pSsCdzfgcpi95J4HibfgYCdyUQcaEK",
  "key14": "HAbGqkGyWJLpX1MT1sDsaUS7S2Dw92H3EfW1NszxZxkkLxH2PqHJaVx9x5ZzwGrgY6dMPvrVfJKod36boSuxA7f",
  "key15": "2X33MqExr7MpRKjnqR7zMDZ2zi7CWivHAzQtKysE8DZb6rEtihYRAqJtNtp3NmTtKhDpHXmFHvbFmrLZp2xcbpD1",
  "key16": "4SVwvGYdT9JU82xPrRsTkiqPthGHxZgrFhF4L1XGdaMdpz71uu28dyFKQA2KjkBVgZfgpaoHcf23pVzNCQjh4FvJ",
  "key17": "jwuuQVBVuZ2CkLpa367pVfz5brL3jQZ4j8q5SVz3dwu7C33731wpcFkzjXuDowEdaFiwAe3JCQVmga5vpNBnY45",
  "key18": "4F5sMr9moqhq3VjEYQq8qmsjn3DghzWptQE2NQgoV4cbqEiHN5ZAjPspUKvw6bWiaVcnyVxucj98Dg28WQxmn5Sf",
  "key19": "4oHvG9DPXo8pex3VxE5PtQ82WC32rdRt12bgjJVaMpL4KPr1BddK6mU1gymmLaszYArLJgfULN1jgmL9scmuidUV",
  "key20": "5eUp5y8oQDGyrXdPUTsNXECCBmESjD6y6mona1X2MG1TRWfZNVYD83eXCfsoT5sj1MdyV8Vpm5Uo77Woa9dhdQ6Q",
  "key21": "3xiFD3xi9nXvviqB7tEx8pm1gaQpAzgUerBaiEECTvQzJBgs1gk1RkB6WdBC2bzo88YhGGhmpT5iV6wXZUQdqhx5",
  "key22": "4iBuRfvyUTnMY9vA7uhmV7ibKACLEMHnJXVFNXGAhEhwUH6Bo6kBmhDG5VpUAUr2espKnjpD8oLN2UGo5cHnCfMg",
  "key23": "5UuG43QgL8iWvDoYXqPev5aeSLn52DmCo8w7qYqbcQ5DE22ikqkWcLDiigZ75iUVo43kaMbeqA3Nx72aVYPkELtz",
  "key24": "249SXwZB8XvbYmevQdWUP8ihyDQ3Pz3aKnqEkfQ6wnRwy8y4rJPBxeBc1R4YMSTDc75Q7ViycpVc7CEJWZxpjRdX"
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
