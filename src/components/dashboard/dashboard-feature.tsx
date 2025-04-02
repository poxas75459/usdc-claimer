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
    "4Y4p2BQJtRt7TmUKgW4oMWdjZndJHv4HiKTjoNMZyTrf6avds1FhbyEk1pGYfMLMgLQ6933oDZK7krGekn5KSvqX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wCDdsCBaMK9yrt23ZcMX6K6x3aBBRQuMbsvVfY14XRGG3XMfP5QXhf7Qim9tmpezHhorCcaAze9cZB9gtKuVvdM",
  "key1": "RCpdS966PbqLcotvG36nZF9KqX2CW81GKyWvpeV9L9FcYcmHdCPxDZMicBqt64F6A46eBJ7mEKMusQTCqiDifk5",
  "key2": "Jo7KpmGZNGg9vchAehfr2xnuH6KVcYCXN1KCKdv6nvh8jJzrXXJ1yGmdnVs5ZNy2qEG4eTz3Paxje6MnjrsTFYM",
  "key3": "3KkRBCCug2vNXv5ZJT5xdLivSLkTomXHmhztnakMGZqron3NdyeF34RUf1U3qwL7pebNQcMxwRioHnzEy53Pu5zD",
  "key4": "64gcqCYRkyowL2D6VwkV49PjzMfM8pUxzoPkCLwMSNJYqiqLko5ksv8ixkpmpd6eQxYmPicDga7eWkpxHCToGoPn",
  "key5": "TztHern4bRkPsm8yQKEvvEEpQgAfjR4sh5Edeu72dCB6w25Hi7xyFQnuRZjTbKvUvbiQ1rsCR2HE1AFHqrbuoak",
  "key6": "5GFkCFKZQdVNEbinfpp2as1kHrxsahw1gWTcwuLtqWjrtuHyqbADH24KyVc5MSWm6wGcurDevX8nz1EXAqWKgLxZ",
  "key7": "ve1t2PriadDxo47TLPbn7RZN6cFaR8sD29MNDUBRpXBY4JyHH68nE9ryCiHk9HieProYkUq4wK7NuNWwXvkifAk",
  "key8": "N23QBmwywTUuWiPEzNZ9dD7h9Qui4b5GGkxVt7W8FTXBRHDm2HbXuCwyiWNDJYAs2adFSLKonDRPNMXtN4HNQbi",
  "key9": "5bDUXjsjw8sKQAJ8e14XHy178iUndnjpwC1CNNxhMgMfuzpRd6P6PwdBGNWrfgkeRpgt4jL6CX1T4Ykduyf6xbta",
  "key10": "35JononCri2BgNmmj2Jk3RvDfs5CzoC2MCq1KXSRJiashyDx2RtWXxCN76WDd7yTF3EfbubVCbU8qa6rKCrhhMti",
  "key11": "3sR52eNyL6BzKCtWc8sdmCEoGxGh45VpeX4M7SkJbWutCMVhdQ884qXibrgqw4GYmKT1fuvVsJPQgK1AMCZ82LBL",
  "key12": "3NDeiFuH3ZdYTkzBU3uX93RrhnjGXHuFk7CrBQsK3pwqSSHV8hsV2CZvrMhGh5Nb2gN4tSgdE7F7j1cWwoHij5s2",
  "key13": "eR6LcHSvhyrND3JLJT2m5z4zEQzgdPdpnHqRTQhz1QVsrcFVafo9uvi9CptfLkBozwNw3E3cbWdJkES6mvF1L5e",
  "key14": "3mQtQ2gBjkxs65gQ2VzQVweSv7jQiqtfvdiJVCgfgfXodd3bvDoTBFHKhJ4Hdd95maP6ycVeqyVpr2RMjaMQUKDj",
  "key15": "5GwnobVtCqw1Fk5SjEYSdfmudxs79A1Spn5VbUKXBw8drbHqWS1M7jAizkf48P88jFa6LyvFEWTXPUY9nm9XfVso",
  "key16": "3CvoeBd5ngfzKruzRfPDBWCg47Wd5kJQ5PJ7cZnGTz4VbR2PwCWkQB52j7gy5jSf9HBKvT7QKwRGkAyiZAf5eC78",
  "key17": "34iTJ6Z42X75V4XqXDEx4dZAzr6TpXSH9TLYLMEzFWn3yo74vwow3jm5QJzYV6UzqA5frkg3e26nVgm44NCCpfus",
  "key18": "2LP41KL1nvFnTzmanNGpjy43hCBkVBzyYsLCE3tU4pCNX93N9a98i6nazEnuoGAq62UVd3y5s5HynvzFGPa58Stu",
  "key19": "36pztx8snYcJ3DXPPCs758ZXpTxrSepn5kPqK9ExccBKbiMZPtorCE3UJevSMBuxNxC2Q49y68drUnNeRduqiDUx",
  "key20": "4wcMi48mSYcQK1gDv9mc52JgpQdyVohbD873Erg9Zr5hgJwS2BVxm6XbCEuTnRFBB8EUTvxcSExDt46ZY1q6aAYa",
  "key21": "3ebjWjG43HgigMhT1WRb3L1ZUcz6feNkemsiNt2cxmouC3YE6oAy9TH7wKvMZCDgSzJZufFBHcS1n5irhJPhkfAW",
  "key22": "MP82y7Xwb3c7ehxcYdr6wvmK5kqvMw8CoeswfVq8eREMYAJkNxkDbDiJYWMVbkMnBtpEsEc2AomAsRbMqdnxA2L",
  "key23": "28zGTSRxnbdjR4oVSCL4hAZ62McZ8SX42UdyC4PDh3Tp3DGwmg8j1C8f6hL5CRGE4stJZZ8ozfRr27T78fvFBA6Z",
  "key24": "3pz1s9qLeSg9MpfH2H29zJaHQ7ig6a7sbKxP9QUmTLnkeNSRb1BK74qqC99EZFwif2qtgLjTtvxyRWEzcd5JcEG",
  "key25": "2tXBrdC6iMik2TdwzcK7c8Wea4UpND7HTsShKk38nTx55CeKaQvWpUvuexfwcEiuzHgr7awrxVQySCGMhEGsPYJ2",
  "key26": "2y4EB83DjckES2QXp3NABe63vK2VhZrhxgqhz1pV5BGxrwgEazAQvLcHmwKiQb2tPNXhX9XkrM6ZoReG5dr1RGyx",
  "key27": "5Y8kwMWs7i7dmDACb8AN8VHCL98T42P1ofEmDiLJ3xtEtNwd6fErZXPSe6Nb24wrwLBguSA1CcHimWEj4JEddQxS",
  "key28": "2Und11LgiEgG2aUZCiK6QDfPraywSjBDkze31V3XXL6sktXqc9ad5CNncQFXwL3ePRckqj7ARjwgDtFjTUQqQE6V"
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
