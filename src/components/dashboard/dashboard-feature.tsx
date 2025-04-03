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
    "4DbuEjGrcDinCvsYBsEn36tbt5eQTg51g8qKPmEzehDUihhQwe3hzZkATWbwZsnhoPg1n5NZXhchVhQ5wFv3B7bg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nn8ybAGDZuPbT851KnctWWAt3n5YMkDnZXfajZ4VfcXpQr8pJKR4V8FNt91j84GHnjyb8CuAropMvJ1VXatmF2q",
  "key1": "2Lu62LvsW1BHgyH4MC6jVtRAAqkMkZ3WJhgQn9nEG2XzodeC8RNUYGaAizyVhoDgBdnNeNV4WKM1gjdGZmhZaZfy",
  "key2": "HUrD2TW9ndQmAJt3HE8ZBPQYjupBmVkYLGZ78na71LZhpZDXYJV8JQFrq8WvK7bYitGhvWBJ8zk6WFSiaG54z2h",
  "key3": "53x9BsbxSAVAi1UeWzK3VkvFk2h8WgLssU3nySv8ba1sEanf5U2mDi7JGtK4cNx7YmVM3LPRc38vTdz5JNiwppS3",
  "key4": "3r2daLjMjbXtur4qafmnY7fhgt4HvkMsJRwWgYWAov1XUu6tbvVfxvKxG1TdaakDQbUgrK9VLLgczoViBok2tP2P",
  "key5": "4UBSw6XeATn7rXqxzdKR3KVNeqrd646vEN92nCAHvVoE4ReybX2BVc3SEYvDhtUDffdVhtxdcsg9wd5ifZ467b9S",
  "key6": "3ccyb9uL4gGySVpBrNtfNxwTswBiESphZJqYJCxutNwemivVNQYvSx64EJGt2Ag7gqLxpJ39YzQJQ5cnXkzPPUzr",
  "key7": "5pGvuBEbZFwHBq4NgV7b4coJoN558hmdYQExFMQqS6rb959fRfyrydxsQrvxbhp8xaPB9iHHuAMTTUe8SPZngw7G",
  "key8": "F3m2DSEUjSXUmB5EXZPoYu4ycr3UEhLs2qnaiZja3p5ETLUnaWDYrnzNSWVkKR82Ud4cM4RdyVVb665adtc7SKd",
  "key9": "3UNmkLdsa8KEjyKUe2yBs1V3Z1WGDLXrRczki6WWM4rzJgFE97YyfxWrtph6RhE7Zn9uwKLjxKhdN9PvhbnFn6yf",
  "key10": "xo85xt3WoKbkX5bst6H4NA7qWuTi4n9jNnxW1rwEwXL5uxL4JLqSDcVaPrSy7jfxd4hs5cZj8fSsAcvpVakGqz5",
  "key11": "53KC2rswaBQxtRa3NWbnf6XvxfwxEsVizmtj5KyYw8HceEpDrc1Uus3LBshbdiJN7KCiC38YahJcudrAZ6rCFzji",
  "key12": "c9Gx3QVmgr1Gvy65iYXekyP2zBjWAQzEmfQrrda4xLr3pt6PuNABfhQRZDmtHLQL8ZXAqL52cxP8gfNS3hrfXYs",
  "key13": "22WHwDireLpyAxt8XfktUUHY3JdrBQm1QXMacW8ADxS2wi3Zteo2uGP81AfaGsdVAmmE6LzXYX27UysvAhkocLQt",
  "key14": "5s4rkAh87cH5bDWa1uhY6zvMPrvet6NR2Nag1Tvng5WQEt4dBsgH7gfhrAdA55vnibZdoqyFYmnRBvjusBSmCzqr",
  "key15": "3RKqKxGJr5RxFAjrS1cGKti9Bp5GwuKZmcXq5eLKaMQaXgmCuYhCd6q3LW8nALRUwvQq22mKPRmJZb4WFRh2cqDz",
  "key16": "3EwBf9k6Ms4iGtVGqp4mtHC5YVfVpupz5CjDTCXTwRYjQeXKKf6CnAmqg64PcpjXhf4HPekaxMuMW74Q9gmHgLTN",
  "key17": "NeFH2X2twULnzpj3jtXdWtTUdX28AAQ1WvzEPbs3MsoBkTmSJNipb5mb94oCAgkyqhun36FrwVmFuHMbJGyngun",
  "key18": "3eGCyJqmL26rH23rHmdSffNz2oJaC8cBNK2wTp7VUJb7kuzRoG4PrLhKejmwTcMLZK9F9SRKBRaoko6HQKuGEUmH",
  "key19": "GJqRPWNd6D8mNW969mpaCVeCTRKSNsb4bstiVbV2Q3whRo5B7qpPKBZMViAVJgiMTvASE8RmKxMiYUcq7cEzHJR",
  "key20": "2Rri3kD6KihbQ3Xuh8yPniLwh5tdLoWsG7UpFek1GBVYSRosMcm5okY4jTD5qye7tnUwXc8JyTgoN5EsbQc4dvvk",
  "key21": "3bPtuu5wVtpMBwDRSRXd2i4iGLcfb5a14cACKKRbN28DXJ2WYLwshgQ9q1uBU3bt8qPiwkS6m1b7nWtrzLFFmnuM",
  "key22": "4ymqGZ9KJZ2kotGuyxr2j9Y2qyJtCium7dNxDW1VtWVTaEkQAg7WtACqq1M2LfMKUgfsEKXdC2MiCBsMGz7gLiUf",
  "key23": "ekYqpC1JPi2oSTxPRdAFVL9T948dMVZftYG8xL1Phjpxvq5UW28hkkbpKmbkoi48vffaYKGZVazNeYSP9t9i9a7",
  "key24": "5PtmdRgY9LdP4HBFpaoJjQtcrbj6DA2cw23n9vkkQfacUE4kB7xqA8FvcDTQqjEGvUN6vYVNuLhfd7cyZ2cERMCu",
  "key25": "5zjP5w6VFRdRvLwfYsn9CPQye8t91Pnf2uDpXbgQHSMYsQa5RauoJnp739aHwCzEDtN6XxkaQnn4DQRLuAfZf11D",
  "key26": "2i5m53EFZRmLniKMjfW8DuUHBkV5778t9NtgYmD8H5xuf84ZQJi2Gt9hGUe99zMtk1y5K83m4VRTvLFwEk5sW8BD",
  "key27": "Qbgf1HSiKPUeSvDu6KQLvEsaBXiGV27iPKEXYgKGWUfG9UvqVZ9zqKoY9hZ5GPkzrLq7RKihs7wH8wr7e51DKvB",
  "key28": "599T3MMmThYVZHpKRMwsYbFihUqjy9g4m9bduJyZvpyuMoTJsNUEjfn6mbRcrFArvZ52tbDEtWgFPwSXwmw6EABo",
  "key29": "5SywuuGpk3v8MKNMQyTrYsorhBEXnduuVXymVeRy54c2fqXYM9wxoedTASgXZJ6EE2uzqdCxMUUdcknv6ynnEihH",
  "key30": "4zRHHLPvKMdeZcq8uuKNzgvmGCV7dKHggD1H88A8teJZNx8B1Q5CPnRpvdrPbnVf3bFRsS5xsQBtLcvvcEAiSRTb"
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
