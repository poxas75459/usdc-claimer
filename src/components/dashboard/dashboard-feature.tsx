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
    "znuD4QzaWpvPJE65DeRwmtZhTWrvFcTENh1bR5kD1SRQGpG3L2hdjdAfbdMbp2x2Et3nn6krunp3obdRdwAG2N4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RhC9kidf3YFCAVRVbhumoQXdB7eZEeFjFjiUY1gktX3q7R3eoyxPwuJbyLXQqFf83ecZtSojo8xc69afrYtnVW6",
  "key1": "7Q3obirbc7mwBMd1Jo7arDfo3Y5mgtoXsKXHEsNtg5ZGJrSwJG44D23dN4See5kzWx1pGNEXKdwAhAz1XdvM6be",
  "key2": "4HxnobpPSd1CZpUCcwGdZd9FXDGYP9X7H2uNv8mfHeRFnC7hdtL9h7usBPHNmDsaSs5hTmZwArG9EcET4sjPCKfa",
  "key3": "45MazmAM8EP1Lxojce68XfK45ixb3crLeT8c6wYLkghzku5MK8X3cwgJoRRaHAqi2mKf9zdn8dCpeTeTqcARuLR8",
  "key4": "2Tv4tPKVYZD5PPQNHkEz5A9RqS8nGmcoh7SKho18q1uSjFJ8JCxYCc11QyzRtddLGXzkgq8iiVMdejRr4skjHRxJ",
  "key5": "MZMS51kqjPATY5GGLtXC5QRwauL9amiUKTZCB1bkqpz3duJbHP7oiBimCXUyyX1eqRSvKYXMBN4xdG99qZaitSw",
  "key6": "3shYgG9iruzdfdTfXgev2CrsL6dvGDXKft1ETBwyF632azs3ZiCkwQ7fqC3xcCWqK8V69JCCH37NCxsmNLHy9GxX",
  "key7": "4yhvnG6iUFifg9dNS84uzrZVyD4sjv9ABD6gCxadC86oRfnTkdMXXEQikXpcg2fPsrPXizzRvkqTiPdtcoGq21d7",
  "key8": "3x4GELef1JehG1HsoBZvRS8kHb89yTFY4umEacowjmcBjdQ9JrjvUTkX9jdx4CBywGe4s1DKbMEpDU1a6RD46bKa",
  "key9": "GMW3Ck6wcCavE6Ft6U8aNdv8GSEVmPfWGuVgY2nF4zdPz8KRBCpxQjHdV23RMkqujpYL886CdTTqnbkFPRAVGDL",
  "key10": "5G91eb3WkX9CDuSvmFKNGKdFwMspbybJwDMjLHH1ZX8Cjy3gDXZuSFwHRU2tbNdbALBu6iyaewfa9LHTMgy8HCHF",
  "key11": "3xjx4Ch3NGRS287ytCa6cmJaUuYeZLhQcSMJybbcviqfgQwxMHXqEt1fQR8AvjjjUzqTGnGtMfCC8hiu3KcvcivC",
  "key12": "2rQFn6P5u2Pps6GttVUTg2TvTgjWCVVqzmwCuugcUUHymbHoDUterNBnHTgTFCs1zZTt3mG82t7JAgYr2jxyZY8G",
  "key13": "3Q5poNg59G6NMHFaWieycqmA9REbJ2tdDUhM51xWe6jnGiL52djASt5Z3Fm7eecuJSmeZ95dLm35TWScwmXdPYeq",
  "key14": "29JXx5p22PvLBJH15betsA3biQk3tghhPS58k9RvzKQHjHAVDkQpCvuXiZdH9h6mm7j6giWHebLhWgmrPT6LrG5H",
  "key15": "27HgXhZdZmid7kEw9QpNF5A7bPYHLGvp5fF3YSZnUdZLqDq4gQipJ72gwwurxKTnagRKxD4kJSvwbLZ72kjNy5u2",
  "key16": "2jnSqeXGccEAU9znr7w4GVUJyiatZpi9GYmPmE3tfqy11ZHi1yzEHwEhheqns2Gh1Skvbd7RVyzhfAbMZXbPtvjB",
  "key17": "4orFTwJkXoChgHh9AvNd93huaAwrbj3qHjKxyX4qeNt6EPaJMxNHLeUaz4wZuMHyMMnLSbZrXxsFsuMU1qP187ft",
  "key18": "64FwLX7pdMVqxskDXvWTVQ28BVyBXr3aVre5L5F58tn1eQ5NMuK2omwiBfdawpVqB4Lu29Ff1wiEHQqVr9K6sK47",
  "key19": "4n47F1avfXLGEmSu5D6W9o6bFnV7zDVPShocrySEhtnQ86qTWjQbtp9iFoBiCkcfdXfLm61LFDccLL8i7MQK7VFa",
  "key20": "3n2roZ4ujq8PMjfMcwkNi3z2VKSCqRG4zoCB7DkfeK42V3uW61usTREwfLvq5zK22j84PeeZCxCiNAD42WFQQbPY",
  "key21": "2X2qGizCdL13bPZnxRPjj379tP3zuVeVNnGcR46MAPFUo6poZmhVueqLsRMamj8gFnjyvXSyqzs17WmGmL6Dhhav",
  "key22": "HGADzxTTkGkuho5pTGG3FAWd9rgGQCiUCGgXjwgq3EvrTgMz8oonAergMNiHzRJ5Ynzd78ofVnao2zjsYnUNPK9",
  "key23": "54yH7WzcSdQUqCZFcsGSZWjEQo6qyNXfM31zXZNCYMqwQBga3cwRMUn4ftdAMbf2QMwjWZ4vAZv97MiTWJMXDuVC",
  "key24": "4dem7Dd7vGyNknBmqLGAG7Hq49G2NsxG2zd3SBP4TXJG8DXRgHyBcP7qQawDedy19uH6GbaD6eEzDZhJeKb2SeP9",
  "key25": "5gEpekdUZ3ZmAVi84HnL5KJtdzRADzSWz1SXXAxCRYR5cacELJTnDMNUjeaHtmkDwNaB4DuphwZbbpWTRwNhB3t6",
  "key26": "4xXzUvR7gkrBndSBpn2LJ9PCVR6LyBwkD2JbePdf8PtLusWEmnfMVKFAj3GERxhBjSjffj79XXXtjXq4H4vrhA3H",
  "key27": "22GsyuLKrkhzhz52RPjpeiZjUsB4e3y2y2AJkqVrekd9zqm4MwSfjr4B7MwagadqWWaefQRvhHaXfGEUBBi2BHQf",
  "key28": "5qUtZxQRmjVa6n8yonCKaPVR4ZnoDSsUZ1ExFYMUuAPUrn4NtRKcLcZ44z6pcF1cXZHZ7utkA43ACLgg9aHksBY3",
  "key29": "3u7nQQZF7L5FUtxisdwU1VkLnmgZrCbFLukj3uh76wDH6BGonBDMNirs8sCW8tUr1JA1DwNcNpeuHExyxHKCFsGu",
  "key30": "59SjrSmfQAtYAZGYDyaq3hYBxU82R4Hf6ToW6PDt4rvEbbzrxNTh9S7zJGDj4itMY8u5cYExU4qJCi7pSTQCdFMa",
  "key31": "3bkhWPNfGBL6j912rYYyxPE57M96kbXAZKFWB7txrXkcsAU36yxyLet5XkJavp3PAAZm1XYinbUMV1JioNsJjUY5",
  "key32": "5oXj46QzXtMS5H5cw46nNdo9a3HeHMC4cnDpWr76kY2Yvmw4EX5bkWSPztSaNYQnf48GQ1RSxTYg56ByYB35Am8n",
  "key33": "4YJjNbr4AX3LtTtn68pjTipVLSmbu56xmKRBsuTj2172tWeGHvyYDic4ZDiyWaxQHQ2HUgnBq8jyETWqKkEGUcS5",
  "key34": "3tdHvx9YNvhpSXNAr6EGhgyMv4FEREnMeZWL38aBqaYWkMdoHWngNWseCTCr9TYjYtyHZoqdVY6CCQCKqnEpTNUK"
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
