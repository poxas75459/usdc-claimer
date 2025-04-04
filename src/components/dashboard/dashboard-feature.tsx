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
    "2KYBKSNczMwSFXR5sMbN3sKJdp5BHTV7xXjstj7NuHeS4x4owWvxViKRr7jm9QKNyaCRtdMmRABCZ85s2WzxUcay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47md85QgELgrCCkpDbvYSGomWU1iYYvhq5gdbaeguBacQXhD422MZ24stRFeA29AAWLrmUZvBhoFUwJkCf6u2pPL",
  "key1": "2QAVK5JBQbJK4umuLjuGwkucptpHKJQR3T1ffpzC5wVLUuX13yRkZKMB9chVkLKZvGgScdsSMrME9uQgCNJqdrkS",
  "key2": "4zLo94qvbVZC1KbYa2VG7KT44vhGU1oKTGBsUAUQ1451mPzjvyfNjDSSnMYNRVLFithLH7zfxk7J4VTPD7WxdXxs",
  "key3": "5aV3zg6RTTighQpkh69rHFoXMGv3QKihnSaWaLETTrn4c4V3t7ZGHLrsMMfGucp9MQ4FSFpYARb2S3cko5DwdFSW",
  "key4": "53DjRGXdixMMb42LQUnQasCxBm7AjaMtmHwVyGf8rfKB9VvrXSJpTEQdAytnDrTkCynVU8yZX5fuaLNQpBaws8Pz",
  "key5": "4SkmkiduWcMAFDbYpS8QmdagcNQxcyFc42z9bqzgBKz9bgZy1WvPzvFvmz5LrqnaqhGmR52AfbpngxMG1oqLWn8j",
  "key6": "3Rh4dCFDhvQGNTnN8bRumNuf6tCSyS5eVE8ckfsXSjT6MV8Wijy8UGb36HoiA6g7KvhJ8EG6NshEiYCAMVzp8RTy",
  "key7": "vCsjqdwA8gaP7GnzaBdGMP3G7WPbLVC1ZCGNmcWCZrmq8CN5yZyrhFoc7F8PZuocgotXqGJo6c66thSePZzvc6c",
  "key8": "5YeshewVs5Tc8wY3QYNHqsLA4qB6hB7Q4pWbdfWhZT9TCX4gyVyiMkx9nr1JcFsfc2hLnc158imSXf5jjPFSEVuB",
  "key9": "2N1GjemC5hAs6ivFW3gG83Aqjh1aMRCj4BU49W42AsEctFRwZrrEJdhuwfLxxPMYb8cRE3n6jHnEH1jP5JCW5huj",
  "key10": "4YAJTzHuyLZo5HVp2TNPK6sJ8KW9SpHLsnZbsGpZoh9mXqzUVCcMQ4dMyqbQoun1eweHEdCArWJWWPqkG5gAShpS",
  "key11": "33dmeYEV8xAHbGJA35EoUDRGPi2nUoDRMASkXnpYQG7iH3KoEMnsuHACGf2dtXk1ELEQs7k428iy9Z6JK99sNA7i",
  "key12": "65GbdPV3VMHCaqsEdo4iWy2ci3JbEKz4xd7QbdHmuXZ5wGqLDd1YvWyAagRL6UAiGN5CEm5HFWdEGLxpGH6iMsdV",
  "key13": "4VoB8PkcLv2okgFC1bSwxiA58BDZY7K3hWwMF4vUp21kVYCc2j9zLybqJrTGx2tWKheoLywtnw8yQPEsxYB67k3F",
  "key14": "5v8PHdqYkmc3ko3SFpgbK1dBpm3LrJkKPJQTENYM7z7hhcnPp4TTZnbbRnE6EhLjwER5pXiPXgyx74RRmK2fQwt4",
  "key15": "3vbyESscdmLLWRjNNbUyGLshQMh2T2Ws7yDHp8ezNT4G6cpYbBAHvjLmnoQMGAn3Q2pPChR9Z5aQmRBAL3TDwxD",
  "key16": "4J69f6aGDPZGodppK2KFzMNquC5vEk3vxMKtfRgxaebg5Yanc7R8zmywyZV46hpPyzqEK5rPJtXZDqev7y91yPrp",
  "key17": "5M2v2ZcaQLUhUABQxHsjFfrUmJGiru6Ft4b3GkeZqruVKr7HoQDx9BqBJmi8ooadjqSfX8aJG72wo25yXDNiR4iN",
  "key18": "5cr2bfckmEtJDqvqsjKwT6BTps1R7g5Y4QescFCLSFzxT8bCyzqjBP4oeMphUmhB7yzr8kYNhQmHm1sP6gVTHMzm",
  "key19": "53bcZrUHQG6TZrMcexY2cMVnRr2M4KS2s8re6iPT2cCi5bTC4aTHJY6o6FVorzkBXBwrwgAzhdD2oTGRW1VvW4yd",
  "key20": "e67macBMt4BEUT6jLFywPVakXih7TyksbP5zVZUoECae3x9xvfzETVL9DvwwY1RvCwfNjt5zDpDYrGDhWDDip7Z",
  "key21": "z6U7vMfxMNhLPoE1GjBsxxpYewHMXcpQ5MUi5XopsJZmHif2RuneysHKYkVGbDzKvT3jN3KmDdydG8xEH62FPUY",
  "key22": "5JiDZdTbNQESWKtue1AcSt6tFvnt2Ly3AjupKt4uJ3FWtMSbWSSGniRMdB7qjJeZdPPG2jAZzJXP2iuu5d4AF7rN",
  "key23": "LdGewWzTKoNAt2Gi8mKtQQTTmmkF889msFf7GpyeQ3ic7Jftada89yRBKVFVqP1hzK27yTZTJXjbFAiFRfCFX1f",
  "key24": "5BD4kVxCpxAAQZdE3hK5BfvVMvjgTXryqVk66zUfp9xmzhy29haJtaibJCM5XVBpACaCnt1Q4cx3FpfJ9s46Ytpt",
  "key25": "3v2yKE9TvA5sQGxT9BKrpWLZXNt7cwKNnkbWTf9j6fyyk5WNhYe6UYHd6bTSPXyweHSPNwyT5c8AnheuZE4Jirmu",
  "key26": "4BAsBzmoTcmdsc23LNokpMRsV6NzdHPdAJxG3YQfWbitWXQHipnswXRHBvc1NZffudLtG6x8pigna1XUzuWRtuiQ",
  "key27": "3gm8aGYoUiiqztrpMtxNHW3Rpyw1YGkHbJofzMgQANUG4YaXk3MLAKHEPaA2SqCthhxXSJ3fNJrt4eEdpMgw9tfU"
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
