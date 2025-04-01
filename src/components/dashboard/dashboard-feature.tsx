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
    "5bVrhmPYtZUXbuVMjRdX9CJW6JttTtxY85iXyYB9uPXNJh4MQayFhghEL9Gwbyit9xW7JzZzkrhGJty3kWUnZtED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dhztxsaozgkEUrZvKVXkVTcVbo2o7YE46Ad9hkEKL2G7murnk7Q49eHL73VfzzLjLjazhKBvpgTf9v5RLqifZ7V",
  "key1": "4o8M5zzK51ThXhMNHSZ7u2cRegU958W9gy8Z4XJNWzvWy8ZBchD9P6aSQFKBjAueRPbSXNouHsZZmzjtkkj9Ae18",
  "key2": "5ib7HGBPhZPJJJ9TiU4VJCwAq8nBL68s71zZ1zomwk2UBXJ5uHqm11xydAGUCUftUp6UbdJfdHynrLMicxGkYCy4",
  "key3": "4YFemYbz9ePMbAfQbqHfiTnBDnmnxt4NoxMMvTveVWZuCJFVhDnSTz1iGJxin7Sf2BGhm62agTcziVzoWRNME7K9",
  "key4": "3HEy5y3H1W6ZYsBpLYr65x8gDAPEEWjhmd2XYPErtvRqFnyCXH9rbsNjAgg3oPkg27Pj2ofRcZN8YvKvE1Cf4sQs",
  "key5": "3BFnjhCZuNJWafhsUdcx6w1sGvM8cY9eFzeb4HJcPv3ThVmhBDcLg6pjC56NHMn8UrAYK2rZSeFL9GDEL7w1pUM9",
  "key6": "w6HvDx8ea6V5sXHvd6WRVXhqUD6dK6dCuMTE5s7J9THz733Hjr36fq22siAkLFADyT1pG4QEnKLWEhy7vbrkFPh",
  "key7": "2sQrXeVwk9P1AwA6aF8HE7FGXaSLAhZS2wTzpCMcKvUQ1Ctshc3ALqMVSf2VeT7EEbtqNHWH1oz5ovKNpTH9BXDC",
  "key8": "33QDcgMCvg4DX2kDAjAE6UCjetT1gfbcb4uh7mqXR1yzVnKVSANaHg1EggN1jaVj2KDuMWW3DiHsrU79ycDfH2Ba",
  "key9": "zDNDRKHFBNxCJ3ENSh1FMGchmJoB9d8SsWA5s1S2T6zJniYWev33BHPD7S4PqyqxgWeSPVKs4xDL8bUSpUAhQgw",
  "key10": "5cC3QTKBbTs4JiMYovaJyovX3eHGJrrhA3eutnVTuckwHRMwajDMcyV4X2ubRKedyT6Bx5e3doaGwZM9LJqFxn4V",
  "key11": "2PCv6mM9LognkzjAtgAzTGfo4GWPyEh2acxWaj2tm84mxkBTmWPhsjANPqfyyr48PjeEHsALeiq8aJTQRHFp6sZ1",
  "key12": "xLSEvdc1G8dYfUxzfAzJefjYUhqKyJWsUpPuGXFKxtrqEpSjttPRbL4MYJZ6fg4xa3xWA3HuQ3oX5koJQgDVVUD",
  "key13": "4TUw92FsdNLfxb4exorUjPVT6A1WScQtwALjnsLESFVErntgCpVcSAAsVErZvLqrTAeNzXug2ZD5jLTm6s68qzcB",
  "key14": "57uSJjJKP1NZoHpxU9JMPxeeh5WE7DuBJxft4kw1g3GLUsEQS2dpirm83CnSiY9dAtZSYxeyETGxGvBxndVLm5y8",
  "key15": "4L9tyiWKgh8YZXYjHHKdHoYYajREkwCC7pcJDePM5hiRKevgXYENprmKTn4VX5mSAfWt657St5XFC3phyPvjtTSQ",
  "key16": "8LnQFynogpnsdJB1DC9hyMnhFpMAwtjbubohxQhR3cVpwEeTg9HVDn7gJimpx1WXfmnq7c4en9HKrub7tXxC4iP",
  "key17": "hFFNXKsrY5FzFBCMbNpehvPkHdUjf7Cve8M7WuhEd49icUF2jrbftUixjL4PEbjbtbb89ed5cyPfZQ5wyAfqiYw",
  "key18": "3uVRNBxJRTLTXue4ZPvHNowWDjJ4Wtkw8fXR8QB2VrQVM6hwKHLr4wu3icKu27nNtZLWJ3rn4bgsCaeWyBmm3qrh",
  "key19": "Z682TgZcDurft53gnAfZRnXcsV3KZDJfEABut95wyMdpnYRYY2wTuSKocHgLRErNXasVmxKac2CEPtyFfEZgiEc",
  "key20": "2m42R67ew1NksQCpv4Hv8Xa98dGo8NVmH81wUSGHyrTGUeS8WnukVR9LN4sXjgZLd84m6ZUhJTpgh7gZmLpzwJN2",
  "key21": "27r1Ufqs1oBMYwHfo29vHaAph4jY7sCRvCbdQJeAHmhtthwBMKfoEpaki2SeDKUcaSVMaskT1tmwfzduU8cTtBLo",
  "key22": "5Zv5eDZ5bdtepmurFepkrtyDdHQqLJtGkLaHECXWM9Xuv1RFyrwoWiVBLfxtvqUqYkKUvCbFjNQzVJXzCMmENqzR",
  "key23": "4NpyZMDdjtgxbrHuDq1Qir5VUf8etygf9efsqT8buSEy4pR5LyvoLGzXZQhn94oKW1VicoNti83ALyLYCGox2Z4Z",
  "key24": "zJoeK4GLMRNzCk8wjfD69ub9siAMFPkXMfdbge3sdrSobdBhQNu9CrT92qBsq3hubVEdwtXhc2gG4XpccFw9HL8"
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
