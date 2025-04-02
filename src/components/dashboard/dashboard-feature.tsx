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
    "4urZf7GW22s6mvYt3uqqzwNuVgeufcvw8vF9NTJR7Hswf7DEetojtkv3Lu8warCXrPgw4mTRPLyaofp8mvyYZfo1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34A8beeZn3Rr4sGEbfwoSGKMDzv634F6gtfnAGfvdYKiF1jYErxEe3yFHkXBCAsi6SSMRgVNmy6dexJmajJxbCy9",
  "key1": "WCLrGNdso1cJhxHaD3M2ojV6bb6cbo28VWHCpGo3nykw46KdynP3qbtqTmH4ZfFW72DwzizJzsvMSxm6fQnLed1",
  "key2": "3aH7J2GuKNjAF11bkQnRzn2QXL2KNKfwyThxGocomZJCMaAf9PdWMvZtm3S2LYMrat1WDodaWjGwNzkwncVBJ9Sy",
  "key3": "5Uhac8mgMbi3uT46xmmGvgoNvaH2LhifjeSqegKgK78C5EZgC72mzxfdBFaNTJ9tKsgGxJ4uXanQu6ksW27BCKvA",
  "key4": "4KfPDt4rY7UyQb95iSh69MTWNdtcWLoFinTVhRsJqugnoitXQUjMekooZdNppjUY2MN8TyKF6iosDXDUGF7A1jmJ",
  "key5": "3k3cEc3bSFxo1HzSZCELJ1ip7uQG7vCjf7hkPq9z9QrrFfjNFJuX53GhoXMaruKJm3k69aaioeQDyRcZynMNcLFM",
  "key6": "36Xm5wLrGuuYHdiCWdDxSXKaPKogGnjE8i46gDwMi14RLLJqBNwqJVHXLfhRksyfFJK9puKvuGGda6HsUyhvvvCo",
  "key7": "3y6q7XHAcf2LpcVxWJ52vbqmBFPHfiCSYLYnd98nkZsBC54LhqbpbHsecU6Yg3P4ZYaD27jhzF6rC92Syp8tmrL1",
  "key8": "4gDgKnFCzR7BxyS29hNZpxXuEeYWYe4zxtPqMH6baDzSMrXdoNMhiXiiK13Np2cP1uxC8LaZDNFfXSBiNCBYCzEF",
  "key9": "QphbJXabyPMduv87XmtHgJgGH1Frg47KFXCLkJCaYZ7S32ahHxWkhhvd399gp2R2gPFJgm1WQpWWbNxyn5VNkVn",
  "key10": "PaMfrUAvBPWhKjub4j5MFTWoJX8Fpsf1t6vG51Q95Z7uPb4PeephtLyjjy4J9To8G328N95UWauGkc2iitoMZ9g",
  "key11": "45DdpXaHqhHiCVNPym89KFoY2k9i7x6MHC6FtYbxjeCnzqNAax1Ac824jDusx9PBvYdB4AcXacqMBsFsbeHHgG3s",
  "key12": "EZPjHUy1h3vy3narupcUnVZXEH21kGoYprTKPeKmFf1JKerx3acrgXSdkw2qBXkmSsuGUCg7MccqZ3zrAmYvcJS",
  "key13": "vUVTgAEcQPjWN2huaJYSTTLvALdCEuFcDHcXfHi1KiHfC2neKjxtBCVPy6Y2EvMpjU94cvHD4RXm25EPkge3K44",
  "key14": "2qkXLxFd9qAkm7VPdTzfsNKfuDaiLCSAuXBRGZZZ3UfuBZ6NqJsLpHuUucgxZ8qzYUcPLW3vcKiDioqjxhv7E6NU",
  "key15": "48nfhkLpTEzSNx96YJHifVpAaiTKLjk6A2LXKCtHiHdtAN8vnbEFDfDBYtt83oUJVwRFbCJQuEonp7MzFcEQz6ej",
  "key16": "2rEB2arjq5VDfoNGtSTWKy2cjYo9zqW5EXzp2V19t9HMyYZDpHYcD8VMdMfgcnttjXnW9jZG5TdZxNpZtzE2QuA6",
  "key17": "3NBwNaBTnsK6ptLGRdSWV5NzhBFzAr3WyJZCXxE83s35VLSFWKVydLDLcnVfWBF7z89vyuuV4fuynDDTMRcnUja5",
  "key18": "4daxhWXiAKrqJwvRr3HYVuj7HwNAZtrm6ANbKMXvyLa4y68hdqA1qHpBUw5caJmHGjrh86656ewmmLxSAaMxcivA",
  "key19": "52k557sSkzox6LfzCNMup2TJffsBfYQw1J4yDA1pNsiK5rS27YJDNumzGHr9QhWPM64WjbKDbfSoENGJgzDM8XTd",
  "key20": "4r2qDa7ya8z2yxMpvX3768AZCUFL7UVZqFf1rTTXbUEwC5vNGs2uoDvry5nHFJCvZnQRiNLcrnYf8VPcZGMEz4sW",
  "key21": "2QENbpJzuizGVDFrHVaiFruRaGXchAY3FzpQDTh2ScPhab5dtzH8mGDU54NFU2kGzjVU4MuDjGUSb36R9cvkYuZK",
  "key22": "4N7nFsQpNnqetGgrR4zd2G8YA9tLq4t3nasMpeSHmiihMxVFYSKyvvo6NswqVwV3iDkFcvXg5rNpyWMWxZy5KQwN",
  "key23": "3Ub7EJ2xUXnqr2KESNU734ZAbRaDP19yh1NU4PcpBPEhHvYuyFEnmmMRpfEZK7krKxXF7JMc2DZ5S7CuAgBfoN8z",
  "key24": "2oWoAyLgXBCpE6HMpxr7No79vZ7WC5YcRD7nt5Qw5P5iPNEfcApgWpyrkgXDgjs4HDgpttWdZuNKtxQt3o51nVVv"
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
