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
    "QV1CA947vuqsAMNGZ84QmcJBsQaY5DHDQTHPEwTHRbAcbXKctaX7vRz9dfBgj5JrEEWiUocxcAhiU4cci5ELnSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nnhi8b1sPuSLTNsJBWUFrFjwQix46TRMAqei8THVbMso3cRANodt2zkoKCJo549EWd3MNyywqQ6nMNc11sHXkxh",
  "key1": "59z1pNER4FzAyqaCJHUb7EjgPcT4gBipoXbZDnZGDAr5PiJ3EUzVYfTDBz75YgAJ2amtyEn3rPzwKUuxsVFMJbJs",
  "key2": "2LXyCMKVTAndSYh5HVfnHMxCdJ76XYjfmcV5qigXaCqUrqcxf3p3RTx1jeh1quTdnk6jowZi2E5fbmwTtp5QmJ8A",
  "key3": "5ud5ZfcaV46ECsgy7EXtAuZKcddKtjYXwMJMx8wR1xnopr3X69odBBGTsv2AXCHusEoNbNQWeu561XdaxXXW3Pzv",
  "key4": "4X9zibKQ8fBgw7E6DjYr6CdbP8snGjutomeVQzc2vy6NNB6wZCq7x5XQ2ZdC3A7sLSCAqFst6jWSKDUm9qvcAk3Q",
  "key5": "2jQWmi8DQXjY7SZK4HZ42EL1BztCMB6adoRFPKa9uTtZpaKaYj3AzQuBmGSDWDnCefW3D4VGUy7SjkAPqLDiPsym",
  "key6": "5Up69c7XsGAcWZF8QAzNxKi8D55h2UYC97pybrx5mptbPK4gForw3MdRTsX4YyMe7AC7izzByiVYwPKBmLqVUobk",
  "key7": "4juEB1NDHa3GKMxd3rYzmMTxXcWGvS7PiCt4ufRh9RWQidVun3vRHREQpXSDfF8oUw6yWqQLDiAwoXxxCS5vxWFL",
  "key8": "5USTGUebE74fyDSkJauaDpaw4Rk8eMW64rzd6xgvAsGPHyK9SbW58pFCkZuEfb75iLLmouW9V1BaBGkdRCH1HayS",
  "key9": "2ijvnxUvmoYRcv76zDfnN3FaVQW8Qkc3a4GCdJLAoCziTw4yuQyqs6vWtMPtAU6FNEtCybz5Yzthk5gJrV5RR6B7",
  "key10": "JT2bvrpqN21NPWbtfx8fU6pJRuiHRPCkYpCKL3GtLzr9Bezf19MonXY3YMfsDzjfTtijMajVk2mJxpXRh7R1pa1",
  "key11": "4osuJ53vP2F4fRnXERD1yv88K1MUTht1D8zwFnpKTTDCReLhUQuGz9FHB8bLWWdnX17AoZArPvAo7vBuGfyMTMLB",
  "key12": "5EABruzEvh3rWVaDQsn6tkn2qDUPBsqwXu3z3CySD6nwzx9HjmBh4ArYs6BuoBDyoaGzBct21YpmhCAGTVhHCUH2",
  "key13": "2zssLSuS71p4tDVBKvSwm7CMdrxpojFp8Zp3UJtFWRFvQwsaDuSGsTgoR4TWJvyw55XkCv9VKkrrnNWSthBBTZ6S",
  "key14": "37WgwuZM9u4siaSfges1KFkWKNhD3nwkm73AeQbqHvxZG3gyLibr2nQ6Sa5cWypRfPb6b6PHCm5ibYrW5j94Amq4",
  "key15": "2tyK9i87t5pBsaJwgJ6Wmc8DHo99UGatrRhRGP95XMyvoVSVfTLrqpV4rbtRMoM9vb5nRrpGKNZG6tywy5cEpiVx",
  "key16": "3rxuPW17CpDvvCazDagQDYG3HKB8ToCF4sumqcaKkKdpiagEsDGyTfu2svSBcGXM8EG67oZ2UKYeTXjMXEwNVo6U",
  "key17": "2FuzKHejN1j7Rf8BfYXmKdYgSNJDVeiJCGQFwei7PEB6rTeZBLPhwQVhreQu7CiUPUDH21jZifHCNM3wsz8tjCV1",
  "key18": "54opdsS2QhXcbdrmtj6i2oW2kD2UpoYKztMdwKyAEJ4H3S9NzmcLdxp35Gd8UbLNsNptPZb5StoX3UY1mfWxMp1C",
  "key19": "5XMYEJerbmKain6PiUtpWthjDXkqnW68YqryHvZrUtxszNw8zno5XAXrioFisBH27GcGGYxHEodP7mDhtGdgRMgo",
  "key20": "pooAsC5WzSwYDUf2UWbFC67vApfpfJCmX8RmDZg7NRJM1qL4prr4i8FdfeG8gD3QML7Abiicu7TX8TbfpoKLXcH",
  "key21": "3AMsMKDJo4kzYFKhTtdAWNZahuinc2MNGUcNWFyUJ2V2oN1QpTKSvyE6avzK6BiTHn4ajkXUCiTVz9e9CZf1ccMk",
  "key22": "4bBEHW6ekMA35XQoYwCcJx41DKzSDvXSkAbJXMLiwwPSq57exREC4jatyDfhB4kErkRLefm4UYzhZ3caJthJuEUX",
  "key23": "VtBXKvQVsS8NRZVjR6f5aTJ8h5PPQZmQViXEhRYiMowmwXNijeVQ74QspMv9M3DSAvxmnfHSLh1LKPYGV1Sf7js",
  "key24": "3jTivTZzhXfwYxcf4ZQXjJWm51cdXydGxmBMjnEZAkq54SC2MMj4xVJjnsGQqGNdJFZ9q7MeW3GFLUDv4TDCe461",
  "key25": "5R4ZVuBdiS38MxwM9HAn5jTMDBsKd9r27VHkPbWGx4qGJsDJMEjPLLrUnZbzK6n3ER8nnoN88EEMF91fCKi1SBfV"
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
