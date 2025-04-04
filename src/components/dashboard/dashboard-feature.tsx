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
    "65BVhN3ksEnGiTSSHKvT3ysikJHY45jSYuhScPnzpD6LDpYSkrEP83WwudNdARATxpsqaXJbLP5MUV4BxSjrh8qZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oRzucEzYVBeKsjsJ26q3BsseTPXbQUVhwYkirDroLK2iprD9FWsNTZzVGRVE9qRc811iv9WUzqGN7YwZs6shZzp",
  "key1": "23qWzSMmEMPNu2sRFAzKpXatjpj6oHKBqZAB9AVueTup2jHBBK1ihf7f7F2RFffaHLWpM3cQULtim8rV6M5274jZ",
  "key2": "4ngGVmPpEnchkCLgSxuC8XgJv3a6nWN8btgd3wS6TikHMdLnGd6Sr3LVGMzgbrF7kmN1tGyKJQVJBEoUTGvSnn6B",
  "key3": "22M5eVyrsovvjPW9bvMyfyvSJ6K3j6bB2YPAdrx61n29fmuTwYbBeFSj5dWmrVEatCMkQDm7g5KiBTBujvTVWjGX",
  "key4": "48dmWNKxsiJLAkpjcn8QyEuakbxEbqrrBWjdQrhPGbRtQTHyjYoxAjXxc8ocE2U5Ze51fFj3akSaw9u3uVmug1i2",
  "key5": "5KnDm1T7geTvZKNT76hTezaqT9RGTdTSN9m7ny9qAR9gH8kVtQZnN25r4NQ4arwJYr2hNDKZQyUKS7UMwDZXTQ91",
  "key6": "449LTPb8ypfmyzMUTWZQhUd5Yhkb5ZUsKWBqwdWaeyhRerSnF5EnYmBDVu5dMXa8nTHntHejxaorQTnNTVtMXpCe",
  "key7": "48Z69UpGacnQuBoEBF3QamuTMgaeWRj9uNZWuxTob61YBud8DBHDqRSsJff5HqamAdYmDWj165ALqoReU6jBamrT",
  "key8": "2SKniePN8pxVW47iydgAqXhkb6PoP7enUcveLppjEeVf1ozMepVDbhbTLzqrqUw78n2u6ap8hJuZDHFTyEGsMFZF",
  "key9": "2cftz6SxUuJwoNRphnZZm7MUfNXMhriaMkP1MwAg4fdme68ZQAgpqeHSopeBMASSZzQi26VubADP1AinrWLFa5ih",
  "key10": "3ZAHke1RKvd7phXFdFGvPDcuiLGEVyMBy9kvJSZM3Vit2mBpmBTCpGPANwVrV1Kdnxthq8bsQK1bjNafrNc8SRut",
  "key11": "43hKXCNGp6sKxpetrTewGbjFg3bkVQ8N1qoadF2YMzc72LPaK5RYffSLLFuNGS1CJDeSQiXaD1KdC3r7eHFYXsqE",
  "key12": "63fbmCXJgJFgBNo2HvbLykddkXP3SF3QiTiSpbpbec5K127WcF4VNFZktL2kyKA4mecaQaKk5ZagHXSGrYWPsW3K",
  "key13": "5os9SXBzM3uwu9UCAVNFtotVhEHFtDFFWcdGfvj1rogrMhjGM39hJSY7syHBQ3eDgUPGQWLreZ15r85VJT6JyrAP",
  "key14": "5wwyycJSWwBDponBB2mMtdo8w8fDDCMao6bq2oB3gqctge7wyrstc4pviTA1STsRxPHQ1A7RDacBndLz1xbyBERR",
  "key15": "2g2ngK3hcsr4GtBCc4dhD1ntBBcPwiZZmo8i69XDZi2cRv5XA45eeJpVxCwimsMoTbGTquwbyDTHXqgH1N3pnAc5",
  "key16": "5j66Z1xY743vD4KsuUYHi9aQCcSroSrzM9GiDVgVg4PYPPjxA3FnbtNE2JGsGz4WEHMUnfs8dVLaKmzcfmMeAaTC",
  "key17": "uxd97t3VWpJz28Xgan55xkjLzYYvXcaasngBhyQGhj4rKABk2mZFauS45QkdiRcmXGybj1s4JVa2RiPLwqrtqC8",
  "key18": "4NMEQsMYVioJcvyZorbkRULNxpzZQyZRabzEXcXZTBrBcjSHDtXmcpwv3cvUefikPopP17wbWcrxic1LY7ASKK7j",
  "key19": "4z37ogjXLmF6ffuPqmRfq9EyenmSFo7qVryQR9ECHrSwgwwJZ3yTzTk5gyikNxdBMkYMDB3Y1jSd49t6UkSUzyEm",
  "key20": "38azAYS9b2mggZgjeK1AUruM3UpKNJ2zBvdeadXknyg7tcgQ7FTgyApijRnn43spk5yadA3iTDtE6hAwiCQtG1HJ",
  "key21": "53S94XsZSf1aJVNoKyDrioYfQKA4Mp8ZvuBDTQUp9p5u7YsAfkXYSsKoVhbcxPLuQ63oEUpcxq3QEFr2a8KbhdBj",
  "key22": "9Sa3hn6PoggkcW9LdixZq2YH7UnhLnvquyMfvFdehPZYJFKyJSHkTEjJrsPyKVFRudtoHRr2UZydaaT9sqN4Zo4",
  "key23": "4JWFe5hDYF9KiC5S8U5LGp8MgpxJe7eTEF1KDJsCeXrxg1QkyLUVqjEDYc9o6GvnYnMwP8JaBgb9qu6McHwpAGnb",
  "key24": "5DodHFkn2c7rWnRZF4jprmbGPq4sjmi9aYNNAKRiBMJiebbpBF9b3nJiXCQ7tup6M2HSMkpLvNYJCbNbUjnRzEtT",
  "key25": "4paDPAnAj9zvLdcsaBUPeQ1wj4deHnDGKHPAiJqMuwQ7KD5G8pkvxUjQKbJgp7srcCsgDpGu1qHanU9mpF7a2bTm",
  "key26": "4Wx6d7vg66qGyciSkn5ps2ibzPMxhhqjDJ6LoPSoSqiVsHZ8DK6RHFmLAsCuhiZ388JHQoujZ1zySDfR3acr2tSv",
  "key27": "2NyhU7n3TfwmdKz1VdojRzY54MPHSoLRhCuuN9jw82ixKizMkReFrLspp6QYDXGU1fqXdS9sm5WGKVKYq7SP4m7h",
  "key28": "3MhWU75Czb7T26xtUZwX1LoCTtWHZgB7WJp1SjDTaebwFSu1vbud7JG6FUq2UuS7jGCqyZEB9dirqUDmkhGnHdbY"
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
