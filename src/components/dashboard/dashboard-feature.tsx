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
    "5aNquzziBDYosGZuPt9WED8zAgtBhSU7eX8yq4x7imcDi4GUHhb8jLwhyykhMixZ7t9rC7s1GDYQSvxYAb9XfsB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HXeeQPmWmLkJ6fNWPgWPt8ZdcVVacfeJZw2g8xHbwZK3Uh1ZRm7mPoLdUomucx5qYp2cHw3jqkZJTcZ8Q3aPUhT",
  "key1": "5x28ACtWQhN4WuG9pdjhkJf8tmVy2NZfQVANVTDaJ8Uo176g2WbRDzRtfK2CM2ZatsyUkF2AE5B4MmAYFwET97PM",
  "key2": "4gGS9dTjNhjromvCpWuhHgTgDSbv3opNyLh4HoPUmqgwM24pC8ZUFxjKPA1ihSkF7SAVcPCsFEoMrDXzjA7TkfvG",
  "key3": "5d1aMwurBvCt3aWx9eAaAoi8UUbRFcLcWknNSCPD1R35q5zjCESdmHCz9ssERotuZRT6GPakg3SRydBbS4s8jd5A",
  "key4": "vNcbED3K4hfSU1pcrhusHRQZi5HyTS3YYHVUxPkdSEYSW2qQc6ZTHZTHj8EgLgiwxkDTjR3j5Akn9swsEHS23Fz",
  "key5": "2iYTnpnwc3JsPVyRvhRQeTsqFM8NRACEzGT5SXgrtZPQGEv312bTNfHPotaShrKM9BZ1Vo7MrJqndjGsmnVMZTT",
  "key6": "5Np2RHhTEm9ZPH93fnKWwrsYpL19cWb2hEZ1seweuYLCfbPourRdyEEF9keUv7aXLe2c3kd9tfH2imzDpLJHyDUs",
  "key7": "ReMdvjsFcVkcHrt4niUSEp7vipP4bAELLrTyWJWWWJ82xni8gor4HGiz8mXQCQCoAzEYYgtN2aSQBofi2amJRtN",
  "key8": "3Q7WEWxHtPVrxwDdwwZgoXAqY2DVrLVjnKpNJjZBqUw4jL4g3Ko1LZ8EJps5NmNcxg3HaQrPKDQShTdHBADneX7d",
  "key9": "4eGg59w56RDYqp7n8uWzrm56JgyET2mp4Dikriq8YM8SgLTzGK2N2GYFuTdZxUsPhSCDF5rPAY6zwioNnwzubo3v",
  "key10": "4hcAp2jVH75G54n2xyQDwQ7RNG4ANTTsrAVCUGxDTxphNsupdzmh9RhjHNN7nrjxoxxUAYwHQV7Ex3oBeNw2dVid",
  "key11": "3NnbSBmcLG3PzSuQnhnK5St5RmPxTkYai3R8akCU9MCFCQAac9gzfdnHpY4ayCvLEixy956PnfKbnH7nKm8YaszU",
  "key12": "5k6MNoMp3eeYsKXM67BowJFbwSQ1DKKbwFPiE6ZWTUnt3vCfEZftL27t1DP3taTSeNeQx6qn6eL8A6fLRLCKToZA",
  "key13": "2SNJq7kxoa8uogbxvfMivcaNXu2H9ixaRychcSAiUtA97UWxHBS4EWrBzr7dmsZkGdY7L1jJYAFmHkLx1XqGxAwL",
  "key14": "36ThAPuem9Aqh2bEambxtbsrQwmHyqvLzaC12z9UdnqbRsuQssGurT84vk8h6X7D4ueuiP9E4sm73heDcNpPhbSb",
  "key15": "52M2Z6e6QqPdsYecCz1TSAehS4YxnYhMTTRB2QDUs5WLewC3UySmSP7Kbp7Bc6SZbY5nPcpjDGaJjfEBAPU1jYQf",
  "key16": "2hzS7SwUB8M8bQTtYXfMsL55WR4JJDV7AxKnr28mZFBvhAjMsdomnXvSVSTPfHjkCm7RoPujeSA2rujGNPArdurE",
  "key17": "UhoCzCyvw2yBFquidGDvRA8SHCZB29qH2W7a51s6WZjDMiw67X7XwnWbR7LeprhGdZ9nczAAN8dZmZQarZzX6Ae",
  "key18": "RgEmC9zfattW6XJnCL8KBQ2kv3gtskEF6QhSAtM2AND47zr59F5eDe3nLecEbSjf4AQGi9oCu1xiwSCeU3Xrjmq",
  "key19": "3qVue9rgcyAmGJbpAo9MRybLH3XDYTYNtDQUSccszdBf2VyoZyUTbjHKSV7n55s4VLhCf6WacCns7UYVfaFUN8tB",
  "key20": "3umjopiX7VdPNvSq2Pe2WBq7phAV56ETV1Qvr3paBkHrAeiVV8Vo2EqAR25aoM72QYDAwUbcNUNXxbnFNi3rrXvA",
  "key21": "2Xhibk1CMam5FwW1bqarakZ8hUA6ShZZBbohLRsxxYn4T8XZ7Ar6JiEVpK1zC5TVvjBt4ni58zQxbSgoyqY5ajn2",
  "key22": "2ZumA81Fi54Wvr8QUvzkDztwqLwDHc2atED3yJhuWNVZA23cyYaPUb4A4jMfRRVNsmhmWyHm5r3QYK1s8mkUemuu",
  "key23": "66cUH9LUu1Vdoot9k1m8AEBbErZ66JkgidFwHZL7Bp48FohwcQMRgr3E8xsBNrpJPaBHvosVEwrSxFJumjAFtJRU",
  "key24": "RX5h73KhCEGGdjnujLyEXT775yijSZqT6p6smrE9bFDKW5iLuXse1nMb3x5EqVp7A6W4MN8XZTLtZinkxiJXUyt"
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
