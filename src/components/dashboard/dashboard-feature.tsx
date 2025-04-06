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
    "3rD4ik2Vk46q55HpxYELnpNEzdk7EmPYFKTCooJYzqCYxn4pPt1AWbVYZaSjj9NATfRp8WRBL1sg8tqbYMmXKAr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8XeYnvwmVigPxdURk7vSFrMcZQns2QZDegguDM9oURcJHW26XN8HjgUUzmQhrqykHK9xi3BRNw1g4y5io9RKpaa",
  "key1": "5fUiwExtFGgcPXcG6WraEZ1VBK79ePwzrPRj9c2yqErhsppz1VbKAwQD97FNrtdwCDYR47rfdyZ2mLQJXHM27Fyk",
  "key2": "ekQ2By7Dyikx3mqqssBBPnTQ1fyrcyuY8MN66aDPybGg4n8yR5e5xWxEvjZm4v2U1dMkw9Ja3sg8UrF2NR65GPs",
  "key3": "42Mcgw4TGUhGixJDFezPvEnYTwxfsbNxDXX2XiYiPLE3KQNiJMxD9z7SPKW12nEi94rTWZmJXcxBMPfQDz7R5UoS",
  "key4": "2KYz8d7YQdVERZkC7zam1YzdNNMwLsZxWGNYvvd1nDRAw8PvacQZKbMQ2DoAFRv45diJYA8qSiBqWTbC4q7oUmUR",
  "key5": "3ScHiZZFAMbkA9h9yLK56TWQZnVb9ejXL92cCW32R5xVASBLYBAc4GiohdKmFLvj2jeYvPjYP5m4saxoLMLZCySP",
  "key6": "byngxF7zgG3L8tREitYg7yNB2VJDX2B6PseGEs7MqrynpNWLwpFdosH3Sm3F6fBPxcH4xyiJRqxrhyXh5gyeaxG",
  "key7": "436UWVRATbe2UH2Ve7ymko89yuQD8zrBsnELH45GPArzRhiNUBfKsGVvN13ELwb2ugPW1AdzRXs6Sc7JCvWXQAPi",
  "key8": "oKkimMkKM2E26KjnDQpaXZNctSizp698uCfdYbRiRBZ5miqQjV5izeXPoECU5ipXrQbxrqwrj285Bt9wNACK3Fj",
  "key9": "4Y6MUVAqSRDCBC8oyW8KmsDBPjtPbQTwB5hWW1fnJvwqoNnUYH3ZN7GJbQFiNuFKDkkr77hMXv9LxS3Aaf3jD2zA",
  "key10": "2ofXVa8cuhskEjX6j95jMEC2YwogZP9Jw3muqn6t8MM1vEheWLzzbaZQtW6tA8E9wf9vea99p42MhTUZpFoxm95f",
  "key11": "2xmL1QzQ765ctGyMHfdw9gMjNkJMMazo1Gma14equNm1FA5NhJq42XoFYRQanCXECy9E7e8ahHCJ1MZqQ6Voq2Gp",
  "key12": "4bce8izAvYoERuvbb38TTGa9RQRYj3A8bUhLctwCbfWYvHWYyqimuA7EwtQApMKjcRM1JLfKoM58F5BcCzp2AqzD",
  "key13": "2XcAmKe1x5R13j6ERjpj48aatSekVer7byN8X13SRpGqWz5Nn3ELCd98NMAdFJmot4ERLtM5DuVcZauaJaKakoF2",
  "key14": "1Ds6o8F7fUr7LXDcmmden1doP9UsKKn9rHoPFMuXqcrHE8WyywN3FimnAWmGduWq8UJLnj6DJwUkKoECPjk9SH4",
  "key15": "hCNJ9rZBtWroJGxVM8ZfzfgS4PDCJA4XT7STPf8Q7HBxmWfTZMsk9obiKRWancnHp29E9qUHRo5vpd7ML1B5Fe9",
  "key16": "2bGeCfeax3tonXXi24iZWyCqAxvCHDJJ7vQYvU43kjD4AwyHKsWXtBAUGuqvmTNHW8nBdFTWmT38UfrvwGjiVSim",
  "key17": "4NHdPTFnvTUvQ6BGdiZNboDPtASRsLcJ6wXQiz7smyWPfcmgvYJM3Lekt8iWwhyVQNz153GDcJA3S13LwuJY2iab",
  "key18": "5qNoCLba42sefpDZirbhedrqKEoiGpgtnGN3AvHiPYFDNhTRArDVCheV5Jxj8wTjCJ8nNFMMkekkv9Sy8pHMpJuk",
  "key19": "47wK4MoeybBUjyE7sxd2HVaxYqRQEsXih4QYQUZZdLYKKDFNjVPHD3ihDrg2GufozvUGiTCB8nEVWf6EDbJgdDtf",
  "key20": "2HU7gT5Q9tMjvz1rhq6DEjB8aTFQLyUFd8BezRGHbv8Eij9CeXnDmoqhMX6QHNGPyc9yzcjQPQV8qPuszLELfjdY",
  "key21": "49eHSVvupdJzaqETLKqGZ8aVzAcnpEmMJnwXoAbi7xbFs9AyvE1wizABKwiq8HJPEozxJp8sJsXKkcNRzxxDm2MG",
  "key22": "2mwamx6A9SuMhTqkhTxw2KVddDBrRH1CYFpfC9rXQyQoUKRg2DivgdX6kQ3jRRt8Tn4wUy1eaBNAHrvh3VjHVL2D",
  "key23": "28U3NgYLdPKjiDG77WqbYjETp9FVtDgh55wgnJk22NSoGi7VN1ACSUCgCwfhyG2Veb2Cvb91C8HBPh3XZz15Tap8",
  "key24": "5f9ZpdmscgP4DEMEAWofMCQ7Sjr8NDTYyger6sTYEXyAgJyMw53Dm7p2EdajJxiKWF1x8SKTE1Yp5iZfPPdYJeDm",
  "key25": "3CobP4s1k6h1CLVbk2dNNLj3ftZX4KUyq9V8QZ4RhPcJdjXtHkZ8XQMVDvxBkwuFmN5Zqmo27rEhPqP73GArUTSd",
  "key26": "H8U2W1EG3AsD6CVJWBpBZjsE8v79fWtsC2mNboQhokDWceD1GV4nNNBXgfJxwa3X7MjuuC3wLJhVEherd3UwASx"
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
