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
    "5KTvGsQT7LtwZG544ZAzTneYx9rVrgoneafuEZmCARTGUD1MZoFfH5xsBgQrrRXiWcnDA46rx7booencYFv4azaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k2HUSG9ncHawHotRCmhwo9c4Mt8QDQbgovxjp8rDyu5aE79SQR2wEVzBNoXLhw1ng3gwk3gq5T28TqKDjEfiXkH",
  "key1": "5qf6cfbmFepNeSWmY2N4CWu53eWgvqs6YveqM8ySBAkmFYcMb3e3cZvg6MwHUkAqvAbZ4GmUeSrk8sv5n6k2jAkt",
  "key2": "5LpgPbSfMuBEX6Sjwk32n5BBeHG46tqQeeddoFS3DG6XzbSveMR67qbTVaDDzfKo41sPyL8EhhbpA3suDJiRwcF5",
  "key3": "5q3Z1Q2ghprt9AGz8M2cVCh85aaYQNatuYENBNzGABqt1tZA2hzfxG37XNQaL8dbr56i8DhfcXatWzVbBmQcALv",
  "key4": "4TyFYWDHpu8VRHutJt5k9CwcKHVmpKuBf3KhfdBfYWUvHh1HzD8p5gr1ByYwRRBHF5wdMkjgN9hUWN7pfVgVhfgZ",
  "key5": "2rzaPxQPxNzGAriqEtbmL25aH5PHXfqryEzmpz87R7vMVcWBXQRJeR88YRYXY5c3xCdG9g8qS4b8V47vtxLEr2uq",
  "key6": "4QhztQn8KyzEPQofGDTpZKUhd1YpSp16arXQBwoabYjGu8irpM7M5SczpZmyRBPMdkNXBGKgmr8cqKkzSxHA83kY",
  "key7": "5sCHiUQUS3QcCLx93vXGvVWLPMeBGb23iVfRzzKW42s5wwm6w5fn7AherJsVMbasSfSDKddL8gTN567M1WtJ5ddM",
  "key8": "HouJAmpyXiEBdfszN6Y82di8HTCnCDt7opVZnjE6yYMwbmMrEPjZqdnkRFN3hYtf1HBEa3Vr2heNXmyLoZRmp1H",
  "key9": "55WFVWRpYafvwn2NdrSosZmbsASNYK9rNUCWdREjCNaiodzNFPmfznQ3JdbDnJgRXgxKxGwkMpSMQQj8YWWn5A5P",
  "key10": "5mCnm3m5n5YEXbAM5cvE3QvjsSBW1UTBBLvgmBKmfP1rLLEmp3qdhFKztkzGtk8zyuK1DXuMyfqXBURNmXDnkBts",
  "key11": "5xiDEBkQSMjdurzHux2FhHPqBTYG21SCdYD1G3GC7urcGbUeS3wzbZxXVGHZZV3pD9bK2xRuhdkphoWAdLpLqyq8",
  "key12": "4qXmey8AEfFyfAkAAdifa8SeSNReAR6zgXj4fTFGjh8ezqtzEFkqgZNGRQWRvMqLD6mAM1KNoxqdYzpKrx3Dxakb",
  "key13": "5cGvNB4LHi1krcEU1s5p6VbmhG72fFjMgPw5iPcxmCsB3sHtkkGUMSCTPxX4LnxG4oA83oJEhyZoZAUSiio1Noc1",
  "key14": "Y6pwDXRZBhXfjfudyDA9KBwQxhcp5o66rccUDCjq6akf66PxRqASCjqhEGNknEYKvsX9H3DFySKP8MxVLu3UK11",
  "key15": "3BSkDh7fCdeSiE8oYR2GSXg8xrBuabP1cD882jT9muCSLMSJ6EmaEiCvVFr69BYrkGpHu967ZbhG3hDWRbeG7qMq",
  "key16": "5c917MUTCYNdSoLCzkkpwbe59ihNvkVsQURGjaAN2HVPKgn2kgPaurnP1aUFCsou2kpC3e4npS6rBDDjgcEEv7PM",
  "key17": "2ranMrFBepNfLdsHEsSAeuyjWYkLjk3YqTEre66wjkTr7FP6KBdUx13YPnwiTDPkqaLgiXRdVqudW5LiRX5ry4Do",
  "key18": "kWzBXcyrzG4DdgJtWschAxuT1xajmNGELCCs1AEetUbTX5SRztAR6tTMpJEq6xoXBzm2HRYHAGj57u3vxiAyAdY",
  "key19": "3Xtx5PqS3E4bo7vke9yScbPK437ZkKTtbR9voKvsinKWk6YSAr822gUNVXmFTWB3i2CUpwu4qbh9wgGpH9D5JPco",
  "key20": "65QRh8nhnTQjzPvyTdianoDULkP8UWzGtyHU7ydqv8mRzsdpt99dhPLwWBVnzogFujVLJPoT1myN9FLfRyrRQxiQ",
  "key21": "2sCwfhNrdtn6q4qJSpEPgYXDNDKXYWXv1qzVJVqkNo6GaTjoWi1CK2hT7txhLfjrqAibYihQrKrxR7qzu7StsRWC",
  "key22": "3Vrf8mDXwvcsd4oyRjRzjNS62u1aK9iKxVefoLowjfwyDLDBsW7tprdGPKaxMmMFAFrasCjtZvTLrfnJFChf9fYT",
  "key23": "3JdycQGKmKoeX57zQgfR5nAQyWgGrrjuuPyyFiaYt9PoYEdQGCUTkwnKHcVF52o7GtKSm1R5iKRTbMsYvPuA2rn4",
  "key24": "pP5xmS46MZ6FoLdgThe8KvtdrcfKX4BpaSHXNLXsrXsAoVkFjutuJ1Cu8wUKY8mQEqbMhybTWfKE3XjT4bQwNdb"
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
