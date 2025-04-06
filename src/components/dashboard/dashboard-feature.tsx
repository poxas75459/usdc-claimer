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
    "4bG3D1GKNqzRhfrTUkLq1nfP92FdYCacUQgGhoRruUANdwkh8SpsQDf7UbywbFiwGVJi8s8EA7kYo811jg6yBc5K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LkwAP6mUBirNBcTAxZBZFRfbCuYjft6znp6wzYgHytE8s52UPRWhjvFRGAycNRpeoWgc7qKykikFGAwvYkpmguf",
  "key1": "4PuNToz9VCKzGJ2D1JHdg5gyecJ3ddrK6enr3snGt4PTWTuMXdeGVRswkuaFeZnsTLhkBtkRQDdzBdtCcJwk5oaw",
  "key2": "kZ4J17DFAftjWsVDP4VoqXYeh655MTnte3zpsW1PUuRuczL5kCN2NiLa8AgVPtqsciEMB59wt1HD7cjYUygau3E",
  "key3": "5iB5BYBRnLEYHPRodLW9pepqbeNGAjJNgeCLFm3iaq8M4mr22PkRAhG6QSDie39NQMrTTbDuDyKWp1EbDA3txjEe",
  "key4": "RFAKN4gseqwhk4mg8Ao4ybuhgdL1hKVofXeTcLP3uxcbLYUN9RCN7D37sPMbkJo2b2oqnj7DRsTBfSPotauC3ho",
  "key5": "4QQvbzUFwZVXaNsjrUZ1JDeMptvUaDKwVLBmBvcNUwP6TCkrmtY1P4RwM6M7AR4RaswkM8Gg65iKwVfhGn8Pr8Yc",
  "key6": "4nQmQnhqUFyxBr5cr6xEQVQyhqsimvTnKqYGFVrLwDYCFKeAoUayWjziSdyPco3kHaDjxKKH394KwVNrTEro1EJJ",
  "key7": "3Z9Npfh7RCPtYbvwuvTi5K74b6idigXCTpUscttBeU4yWLY3GC5DkKZGuLUBiJTJeZWB2PTAEAGofikrWpDaLcz7",
  "key8": "4TScHNeF3fWErNZJS5bG995MA6gq4BQMLsG1G8bGKwqoV74T4N5wYRg3Jd7XMCAhAaZW7eofMJzKT5x65yBeFMBa",
  "key9": "5SUMswYqzyyT8P9USyg2xDupNxpV8pt94YhhWoUfVXm1jhMaDBa4xCyuY5AsybXKUUDqdZrGhvkZ5hEQxwm2iEzC",
  "key10": "3BdtrTeMkBm8Xk41FsP9RAWdWMBcgAF6NaNv1ngPuV8sNQWLpk8e13bne7DJSxdKPayTBTVbYUHHjJsFzxKhWqzg",
  "key11": "M76sngkVxucYLebkZ5ykeGnE8vyGprKCAKEBnRmrw9sADnazVU7oY2p5v4oL7BARYegDU1bA3xfRv19wdkz6xjH",
  "key12": "5gwqPuxKLhPLKw4nbcLTDBsWGULXeZxeuvzgcsUnPcTQmviyp84DmYwcYChopeGuNmH17zHMTgXfvtjE9R5sfeM6",
  "key13": "3rkSoqL1B5vmivzqDEpy2YLKNuMyGweQ5rzVhPKsRKRhJgeXmFVFkvTnfASgPaDTCqZ7g4HMWXFW8nXHDZbXJebX",
  "key14": "3sN313Mj2d2kihPWhC1w3cnW4QbzEJHnGBaakwNGGhcLaAej2WwETTRHB8cPBbV5uifXi6qB2E8eMFTzKm6y5r7o",
  "key15": "2LRojjFad8XKPF8BsCfXL9eurh1erGAN42oZ11tEmykP7jz3cxkT7fadj2rK7SvyjUKPU7uBxvpra7FDXkYiH1Fr",
  "key16": "5FtQ1RbjGXNrTCxYdadnXRSQwuFx2tU7SBrmroPBWaa6NPqkB78uKU9sfsr1rtiBjNUeidxTG8BRHM6HsmurvpvQ",
  "key17": "4CpPTyEmdcYfQ324PzMmk7THPDq34xxYEtU3oiuZZiy5FD8P6x51L8o5QdQdBgHeiN6jHvQS13wugnVhDXoubueu",
  "key18": "5hQthrFyiub5C4Ph74B5pdiDwbXrV2y5NDAHHHo4B2M6i2wGeZWzzM162ReJDVH6zpWdo23AZXbUMHicVkLfVEE3",
  "key19": "5SrqgA8NZBqxw8xAhtYEgS6yqrAczQXB4BLFpRvmWAdW9qLiVeKoDHhEdFH9bGAhgeQTQ8ih6sptzDyyoqLQ8aZL",
  "key20": "4H6usNuLqxKXjKk79BRCJ6NoZcQ1dLpNyStfZjZp4Pc74GupSYVULQueAoXzAV17goiU4jwYzuyFZtyscs6JtKbE",
  "key21": "33WuiKmMmNqGisLnpHssD6XFuM6hJVWCcwZ1hNfR1vY29iip4NudGZuedARQTZLFhq7jb4BNZgSy4pv22dkV7g4d",
  "key22": "VnHBET1XrwgMmh4Cn7oV6955raUSPoyRdiUWmxmmNpCDdDXnB5K21Jq7LaTUSJTFuxSSeZRhQnnsTNefWArRAqM",
  "key23": "4tgniYsKiftRGLNkj8cEMu5smr4Cwdzp7Ud1vpTqNp94TEfQsVoS4kgLxjiVspdB5QPZcqvdENGGSiMAiv951bBc",
  "key24": "2j6ixiVZXKySPid4mhTLSUdhU4a673CxrChaQicNPgzgZdCJNcdrJz17dPZr3aPoa2KE5ukeahMrHaT6N4pof4qZ",
  "key25": "2cecgFSwHZtEVqJwEYSdG1CcFU2LEpn4jZBLhEigz5Lj2zmuS7abv7rj253zKzRDwHCvqijvCgMacjQ1VJYE3aj",
  "key26": "4onH8VepBuhiw1cxJk2Sxr7xfGY4XgRJVsSxpQRjf2dZEU52FihriZ31ydr5PG8ET6wEDQHamAdRCsoQVSPUL2nq"
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
