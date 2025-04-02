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
    "62dU2QyY4ERfPz6KRgh3Z7WiPpo8HWLpt3pBoesFjAzAndaZSHDuDu6uqNssLdQBK8yKvm8USqsgvQHob9HCvK5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VwNfUzpsejTLXm1tHCgvgs8E2ZyP8DxoXCR3kVvTCimkL8aDAmHHbpAk3CF53uVzNES78U15ujkcTNHLmA9JaRL",
  "key1": "4Hkmz6LKeqBVR6Eh4YMoScd1PnygeRDZffZb1M2ba9DoUK9Ub45tBuVWjtzwDTii3jmgSxpv2vdAdCpVGSVD5H7",
  "key2": "sbRDCh5HhvjSKs8SSo6HLrF3MNyg7eJyS5ZTBSYbaJ1dz6SfpQQpxz7qHGrqBovZLqSvKxtstTjkZprVuRSJ2VV",
  "key3": "2qiWoogoQagceqn6DUj1AYwGtFk1yeQL3WSrvvYN4FZ7hD8o7KTBnSFZKeQUxJ32ZpCqgoM1zy5a1EzKJhZhmq9A",
  "key4": "5yxYL5ytoTZpVwn3k9pe3iQJwQ1PGzFKLhPJBAeYDtWdJ5nUkeLaTb2xXWs1NGk4U4ZxHFYMB6dpZpxVyQ4Mv1Tn",
  "key5": "2h3yTSCVxFuNnVWaVJR7sQtUYRBBtXBRknyzsVCksYYeXZsk65g1JNCXiRs8v8JrBwD1uhQm4aybFevStPPXixem",
  "key6": "24dHFYbcSxBFLGUU6gs9i8AQRGyy25qY9GGN8CCq6PFghsUoJdfLfvNCcsCJC1xZ6JBFpZoNGh9Cfc8pJ2JnWRpm",
  "key7": "VyJFvewFhUM6Kwy4zsRaXuFZrosTCXdvGn3SJmW2PTf6HtaFZRDWWJ9nEB1YojftzusrSS4M6yGYarv8r7BGQD2",
  "key8": "4dnEuhs2QsLrE1BF1yiHmMDEW6iG8D5CqNGA5Qzypu786MHy9k46ZGkpmdk7s5Ppq7wFRoWMQRWjbcdKdBt216kZ",
  "key9": "53sutK2q9F62TC2M29nCXdTzdWKLpwtHGzWmy5eqk8HbfPQHErU14MvSsNw1Ha5HF3LRhp4ExM9mm8UV1mHorXg5",
  "key10": "4kCuzfH88hTRPKXGYVNfYYfWKPAicboCD7ML9EanAdhDfmobR67668REwzSVV652jkWuWbPeXN5dFLoyfPzYutqq",
  "key11": "3dSdvia6eaHJRugZQ8ZKD5yPyeqNMvkSWnvfP2izBDwk652PWpC99Je9tXgJ2S6bqf1nF1CLdv7wqLZvWCeUPWcR",
  "key12": "2PsrfpvpmDjQinBwzFw83RXp73kkZZ6Ax9y4PNuWp1AZSibyEpQ1EJ3uqHhjF4Gr5JCqn4zQ9MKi3UA87EgLrJZb",
  "key13": "48kCJc3fFKS3MYwNRhHGHgkzHdJ5jRheqFsWNLy65dVmXVcx1mhf7PrsfVbdmWY4uegqsaML2zcMSqUYuXXMvr3K",
  "key14": "3nX7X8ZeY2SiXPsfHPJH63CyXknUVqpVtT6u3yivZF1TpScqt3jeWNENH8Sdc8JmXymdFyCUyQtjUgWmsUchteE9",
  "key15": "4TratpToriYNybgQaZMjxCEstGWgTHAguwvJx5wBAFcStjmqjGTzWv2k9WNBzX5wEupj4SFonshBi6WTRm5nPSwD",
  "key16": "2NxrLNwQ5UXFvu4a6hYkf7gyNw9FmJUBVbLdvLyqUxm4ZeJoKbmYxbg7hpyycKwdCUcPHUKdPVqKJ4HgWwuEjQU3",
  "key17": "4SLmAAMtA8deggF4q8anQU9vTHfozuVii5EC25jqxhUzp3uW7PNiFJg17FVNccvvnNcWnvvnZ9vybtND1tFvaZhM",
  "key18": "8naZLn57PxFNFBddffSrPN1LcBcQRjgkGionREqoi5ZaHDPFq4TiU1b3zpss93Soaz7CwHfWhpC7MBDv8GEYkT1",
  "key19": "3XUMJ7m9L4Nw4wncPM1Q1PA6sHr1mtmmkEZ9Go3FALU29bjmrsPEUvMYQTycJaMw9ZVXtm64iTzi6e1u61vwNVtJ",
  "key20": "54cfC1BBqcLDj7kKNX52E9b42avRDjJbFYL8t1zJunM8yVG2LcmCZq77ndLUoYSyyVV8hZRN8E7Xmc7kU4A7qVv2",
  "key21": "3igReMMfcULNVv1MjWpvKCCTx1kHMtB6ds4YgGDK6xp58DpE5NcjQqaZEf8Yu5GWJGNwkf5wmda16X4AoxPzdZSn",
  "key22": "624NSwFFKXYKkQ1GZRHRUTSU7YEx3iTHJoZXtMzR31fZ1MepJdcG2ZnoF3dz2NxYB2mXxLo74eioBTWzyF3zGU7j",
  "key23": "2VbiJkmcXFsrTb9YNpvQwVbTS4cnZ2mVAqm7bcHp7x3tEB6PiakioiuugBaUY57LVejgJZxqjRZNrpBuQEPVn57m",
  "key24": "4zujpyhm6bqKcdGPWeeQSsqCtrwjje28ghuYhxAXN5fmZgPM3jUSHb9TbHXHDt7e5pDKHNy27VtJJhmYWzK2p53f",
  "key25": "13KvMfWsyWuqugZ4WZ1fGmgFeJJWZvEgSBLyNrkoMQKNmekUKCR2dcHwgCHVPESnKt2fpFhGnEZckpYaZRSugRF"
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
