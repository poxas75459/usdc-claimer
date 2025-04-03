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
    "MuB5H7cqWXbcrSZNsBwsMcUtgHsVr7GTNCWRHtSKED7wuge1Wypo9chb2gK2DhHsAz8PkKZWpQBHCLoSQiX6sn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r92WkzmmT2vRCyxN8hej8q9xxTTWK9QPVroDxQragSW2tJnFGkK7M4NS9uFsZuqtHATrPkwyUxausAxx95tcWiP",
  "key1": "5Sx9N72hZhtbDdPDxDrnyVZqD6rpbqzCPzAyY4mqNCtHmzvn8pLWeUkBSELzEJ4BVgN3EVJXKz7PtyJAMwRgbwSb",
  "key2": "67iKK5Rva15VnzPJeeT6Md5PQuHgCs3pT9PsyBc2J3BRD5U7fq7N7hWrrZgQCQsfTqyfbNN46Ha59LibAGP6D8pf",
  "key3": "2RhHAfSYw1Rq7X7HLUmhq6wddkt3m5yMqwMFbPLb9T1gu1niQHVYiqNzKw59ZGFMtCJy3Wea1qC3S1FZPdW5n1ik",
  "key4": "5vw9nMjA3qpfyYoKi3heyMe4v33FW2C6bZJbUkmujGU39EDnpWY2ZuRa3j2zCmybWa3TrNzN269dssKk5xtjZ7aS",
  "key5": "5P3GhuAbQiKBa1hhEFybgMTCxiovwF2MyWNec3ZP43RheV3Qn84SGMwMy8jNj4Vwo89bJtK8DBno4gFein6FwqJg",
  "key6": "5LwV9NnH9Q8SHDNVNGNJn2phN4T6Mw1tqgbavqgCP3bVnFZu5fcnajw64NXQQmLEP4kHdCxULFSJ5nPaY1yiGRnD",
  "key7": "aJ1Yw8cqEDLbNjZ7h2ENX4yLKq29WwohBwdWFYxWWtkweSYfByTxSgHkQfpz21LpUknAhtYWPTxeYaDDYwrytij",
  "key8": "4jHup3MVDAvssAtkids2am7rcawUjEs2anLpGy3PyD4Ge3ARKr7Lms4NeWCQcyGUxmEhc2HVy6ABeRFry43UoJAS",
  "key9": "3vevFU2RKSgwRUsBQhYYpqYjRTnzKn5heYid7MEncVb3rGp1USi6nz1FgHR4hUotD35P8EceAuksxZQ2ofh5zgAC",
  "key10": "3y4TU1vQCzmhZ6nEDMuL6PpcpRdp4eU7N84y9vhzSGytxK8eTD44ThGBnsHTPYuDMaEjTxVvfQRegAjZSAXdotKf",
  "key11": "3nMZLSHAYXuk4fnZpusmRrbYeShgn4XUh2znpbibXixaMr2Zse8rAAeZrYvcn3hi7829MnGmc5BJrYrQD1MmvvZZ",
  "key12": "5C1WbnW8Me4SBtAFiiswgWmfEWotJF3ZwfqTKqRMiqYyYNGj69nsaNDiqu2xMGcsXaG42Lo8c6m61Xyj7P4GVVXn",
  "key13": "2rs1tiViWFWAKEd9CNTw4WNtcETddJuUub7MnhBdrjeArWVuk3HYwXC8QL8fsnPKGfPBB5pcC9uhjYf2eAVXRo9M",
  "key14": "2DZdsrNN9jyAJNqY4RKQZyhRJ8FfFjzNup2tYrCckGQMuxfwXTHWbtxRCEwR9GXdXsPHUZTWfhZycRSGeCztiAY4",
  "key15": "2fw3v5YGT4QWgM7UXJHFPyTJoAMS5a1TWkzwtZL7qkwSawLib5azBnMkUay5KohXXXB2UcCF9EZWjkkue5hTo8Jt",
  "key16": "tFfigiNEQJWnK9US2g4wzhGVZ1F8fdK7w17piXuJwzhqKPSASLvNMGoWYixrXqsBXZGer4afzQ4oSji51PKp1tX",
  "key17": "FdGwAAyaiwWjAKBH5cj9iLJXBxSitf1q6aZoWga4qQ9bTU1zrWqFbRYujE933CPXQE4RJAf2iSwWoJphZ8jHeR3",
  "key18": "KFnaEwgtgTo1KaZhxS4tCeSwbkvvvxV7Q2txNGghf9iN5nX1gsjs41VvvUehqVqSHP5NXm5uwps1SNn4BvWw499",
  "key19": "5VM7nzZHzyMrg7mfZYRU74WHBM3apvBnux2D28eKo8RtsYwkaoyCezP5vTpmsQT6vCaqCg4gjdvRidMKy3RHCSMv",
  "key20": "5B3tpN8isCEeXVWQ5yaJrpM67De6iZboEPYY85zznZkftLa4Co6GK7aPTSGpLcotAYjs6UYzMMojTyGiVNuXVJnm",
  "key21": "2YKE1kk14kLNPABYrmhepGSghQKTeTwgvoPPgFNuHJMRZVBwV2FK4Af5V57ZtzHJaWb3ewZzQan9UexercFxDHE",
  "key22": "4gxFFok81GJg8nBeusNof1p1sYr3KEgEmVDEqNQE4iKVFWsQP62HvwXBhLbMGVsaVSMpkcQP2QQ9WYUEpMA1rjoe",
  "key23": "2Jyt4nn2htU6gNJ3AgiiXQjGerHFyhkuTMgYNuHX95rhUHy3wHEJyKLSqn1Dk1zLY2edBac1gNmiyS1LUKdrzM4c",
  "key24": "4gbES3YrZtV1QdBoTVyYsrXPezdPRQM9qvGQWxdUjmt3CgJBBQe3Np8yAgDZQ4wbtusCVtMmMANQ1BuLgfwceA8x",
  "key25": "2dBvUqkVSQiMLKA8SDByR85PbEM6Ct36YztHqhc2dC6oKQ1axer7mxmRVFVwZT8gKunqY5ycbaGmTVSrR2odtfzo",
  "key26": "nTMFtqEDwcKBQTJXbqauyM8UkXCANbVzN21kEg1wqmKi5dZy33hwwJzKiTzpV2omk7zpyATaTsyVgrHtTDMqfMw",
  "key27": "3PJ8tSBbkToLgQCxoUDjzymYwUtr6Z6FxfjLmYxkwubKsQPfZGsebdSREb6w8iW443XmEVL4Jh9CdRbCFo8if6e3",
  "key28": "4dMXmAHTkgR4Hdbh6cYGSKyrEJphQmxEvNBTKNmXGJKaPoJHK1fiaEQvmwS6siVEnxfKAEGorupfkrTm1pexPzZi",
  "key29": "43VpZRcdWsWNowUajJnEuebh5dFSsW7UekiaKe8mv3Va4EJF9SiVGTbS5P9W6xtv8d3XW944q3HLmfHBgiLyrFFL",
  "key30": "5wro9ue77wCAnGNpVihWaBRwMNtXGnWjoVjeXMYpZerfmUwGzBDNPDL5k17519zfYAUydibHNDEQe24PyfaBVxZr",
  "key31": "4vbVLvprJFLD5Qh1yHdTGEqfeB9kwoYzV8JH6p5D4Cm1rXwCn9UR5mt4Kyt9RZfWa5ze2zPFWaUn6JXPt97ooQBG",
  "key32": "3d2DH6WcoKXEe4GSovUcnkLNowjq8BdYRrT2DiTTEzopU3bDTDgWQYnZ9at7zXVvHxEuJUHyWG1bsKhhszGgkL3s",
  "key33": "2GmKWcUtbQ9W44dEH3XrQB2hxvRWdFaf5NWkbVzQWGTkz61Jhv2guKWZC82wxFUvkfRjQX5dQmGb9KDkCTHrunTu",
  "key34": "3kygwZRGeBz6wDcDU64mtSuJiekLnbaXHBLbSZ8rupB1g84fTtJEFsQw32t41PPEnW9RVzZeQ4zcLgoQ31ukrMXj",
  "key35": "aE94Xzs87BkuVFBP41o9VzCAAzKHo6r32KWrSYzDBs25w1QtVb67TkiuwJrC23ecYPq3H7EtvPrmzed6Ke7iYzj",
  "key36": "5erPL89cvKoAVB5gVtp1wruSYmrjJRKDmbQQYGTkJmXrve4qxrYPyCdFfVMij4C8mAfyTgcvP8uw9Fi1gTxVSMYb",
  "key37": "4Zooohp7BppNnsxgrDcnkf7PtwCpZxo2p4WwucXs83bAtnBydXf2ugXsuUqa8sfa7ZLg7S32VfzQ1tp5g8qEMusv"
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
