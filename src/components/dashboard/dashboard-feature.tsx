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
    "5musCXDBgvzf2ckdaz7iTbBVMR8JMoDM6Rxi1jQ7dndCaAUsQKRYynNhL4oK6jm4u6N82WoM8jU5P9aqtaRnoAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qTpvSqoufNFoJ1XiKLVmbz21MDMzVsf9cVigzDQQ5S4EdAwtFABjuZzF9ncVGSN22fDrQ6yYoASK7TzdWvRB6J4",
  "key1": "2k1WmbN5N8td1FZWEDwzMiZkNKEcE9uQqqfSBwtJBrNyXM9uzt4Fb5mgb3rndBwvNtJLsYBXQFjby7tLRoKKFCEs",
  "key2": "5bUfLKwppEVGHzhV4ow2dM7ii7A3BhKK3C1tkveD1eFLK3ZfjscGfgX1msXP3eRicbfq4iMb5h1oL6GjWDSX38CD",
  "key3": "SkRvG9xKLV9wVj94RyetsEZ2QmUNjijwYERwkXct7yWodDPXRx2644g1gTYA4FS53XjaGcHef96KTHmCALXgYpd",
  "key4": "59JMoKL6rKN9dAiuBdwwQSq8dDWhV87NKEMbJY6y1493KLLG39r7ojJ62AN8WhfwXpyX9FgF3u6nMXQsTRLWXuBL",
  "key5": "4xUpecLyv3TrLyEcJfd8rq7oPQe5F6c9xpTfYoBwpBaVonBm5xzWie61o9q5UWGh2DG2zGrzyVMzbArLo2qRe8uQ",
  "key6": "4cHMb6odsb3bhVafJzXUFvxoHBoRdsK6Fk4Xs1gfH8bRUjQwM7e4wfScSVePfWjtZyikQsyiGf98C42eyz82DJoL",
  "key7": "4NSNjvmXzJtQBELHNnMctFs3vPrA7SA9xQBAE6jqeE6doChbnWLjsHYMvfAw6ueSVDmzhKLFmBZW14CwTrAND5VA",
  "key8": "bhkg53NudAMAj4EdUEJQFniXZquVAiqACF9ZxVrToz4z92ykA1H5K2K9TvLmqahzgsYvxVWxsBvziKiJTJ3sQkP",
  "key9": "4sESF7jdDw7k7LUN2GT1NbVmkvBDTeNyPi8FHgRjQYWJkmikbsy2WzXJ9zaz8gNLyFhzsuJSgNamqDU4wTwFiW9E",
  "key10": "5m9ZpVPXvTtvPRAVjUScCihPd6173G3drDc1Dco3TwpHFq5FjDzUM5aHFv9vY6HZZaG3GyS2zGyzvpaYPu9ax8fP",
  "key11": "54mHAte6mKpicnEFXf8icVcBcvxsQdinFFk22t1utd42kC6CmxNzHJqs58z48pw9C2zbWwoat2wiUoS4hn3skuFs",
  "key12": "5cmGg3gK2QHgeQ6aj29znAud8vLaTeHTqMwV21dJXTP81xoLcAnFqFdCr1BUWDkggoam9f4goBtw5MmLdKcL8gJ9",
  "key13": "5g61HREkCNnXXxMLUeW2289k5c4gLoh6fqgYWwWmeCfbA8Jx58pzdEHK9G8tzY6VBPEtKPdgVro8VwfG7Y2DP3qq",
  "key14": "5EucnwvRsvfSemjve5KfyWz6T4ZDopuvycAWpttwwCVQSisL3ZtvuDb4HDCNfgonWunYgd4SQzaaJooppB74DC78",
  "key15": "2dYdfezw4DTSSxjpPPzs3CJNyvbrNfGCAErTYRXrv4SDtZwqLrfDkF593EYGRJsofYLwnSuqTKFCHTzn9csPCDzu",
  "key16": "65uv3PC4aV9HSURufJHXfvAzC2n8ep7B54T58g1T9Ec93va6ipaqjawNX9VrVb6puzhvc3xVU1M1mRNQgYey56Xf",
  "key17": "28bVvoepdEfxmvnYDC2QEusy8yDqYdT4VJXUCUns9hHgaLxfMSfga8TXpUiFHA9JyPhbBG7Kgd8UPNvhncvb6Bkh",
  "key18": "4w7SCm44sNtuFLoyp4E16aScNMfNDRq469D4BqBrhDLu9uXr3UfRTuD2KKPcACDWW6z2NRbBMj5DXzPcev9VvCcc",
  "key19": "3Qt2zrbuvcva6Cgq9LBowHSHETxcUg8gH7Cjj2WnAnPoLdxmGZkTrYLVdv4s2P57z9Se2QNHVNBZyuGnFXMNxzui",
  "key20": "4cUAa3HZ2mqAACsyimoMUQ8AVx9hBaYiPvx9vW1nBoawWiyU5FLLUud2wH3mud7PKNHqwamixgyBPapFqqXfG5YX",
  "key21": "5jjpVzVCkWs7NbmPF9KKpxvRYw5K8bZAeUqCfUWFM4pXEFhLKhYRTkHvTURg5cEA9GHdC1GoesjygoaJ2TL1z6yi",
  "key22": "3BpcdQDU7rQM1CDSXXBqFixF8xMA2ts4kzVLtFNQpGbU18XYH5fPL2jDoMB582DwgE4zpuNFeExHaofkLNu5ur8R",
  "key23": "kZmErW5A9YtpZMpqddTtA37xReBmoR5FBpft47RvxUHn2qd55QRPCFHP8rq9YrtxBYd4KVsDcBNZ65JH1UY7rmk",
  "key24": "3Ksq5k1eR3D3SQFGLk2VcdFGNkNsxMPRPtbgrnkhBKSmgtFvwUdoPkHMCtHhGP1JqqkU8ooUGQkDreVJJ2CRcgg1",
  "key25": "4BTZYb8ksAFZE2niJ8ufHNVvw76bxZy87kCWaukeB94nGyPxGXKgZUzNU4XFPRSydBumMLPZ3fwB5S6BCRpa5DkR",
  "key26": "2jprkaqq4apTcFdeoxaxAm1BSPF41EJeHQ2SvpiQ1oGuWVZ1HGcz9z2dRdGrEoUuFRxhmRqwtfzCnzesxuTbFadw",
  "key27": "5YUn7CcxP4CGcJEucXtUwTg6HmeAuwNqwWLhnnzNL9RqKKMUpiPCGX4ahueXtKtq5j57DHab3g8XEVFvQuaXVk6b",
  "key28": "3TPGw3cFoFGc4BredLDkrUfVtEYt8Je6tkFGYDKgEmZqTp3CWsdeneNZ85MSdGQdeF61iomdpnCJknqHah9xCvGo",
  "key29": "3KacptkBvDBVs5e7YRLZuE6bdSqosusNY3faWFyfne5JKapMJEV9R1raA3LotFWxx9NaGdyBiq64pKdVWzr4Pyg1",
  "key30": "2qY765mwq7JD8QaPkAnp1pAiM9dLXKBqopjvRqxeL7Dd8AroGw8rQJqnfxphrTaomM7SxsCWab8XdHHe88LZcndo",
  "key31": "4F7JwSQEveeT23Waj6a7kQ5oDBtdxmRq8hm7VZBwg5rM5WDTqBgmzPXGp8xp2ZH9xrMX8Ep7XvyTMRMU6mmMEuwc",
  "key32": "3tfp2tZBq5MyctqsQFLpCqvDu1DtQu1FpJ6aPVRA9uua5waxSRVhxcE91JzWWVaD4HQDLQG55c9nn4YNsyUm39C6",
  "key33": "4XVZLYdmUDEjvshnZoHA42reqyQ1UpGYmU7sF7RqXciWcZoPCt6gNigu7Fhf6wPF96nJixWtP9adVjkuN8HZT9yM"
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
