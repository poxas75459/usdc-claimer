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
    "54WoBXeH49y1UXtdpLsoZzMkBEv29JoPT6mnPFNGRErteCWLBr8hqVqXjoD5rBf7PAxNMwyhcpxDMnUAFkf6NGGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "365Lny7bFii4zWMx3udozoVDa8Y2sxSMaJLTivjm8bQZNC4qG6mRZLG7sSBxWjKNWf9oDrABWKs5FKrDZDEt8S1z",
  "key1": "c69Q9seMGowvZaJ1M3GKAJpfLQQ3hdM9v2dAhV3z4dboZX3BvoT6iM23cmQFcwagFTgxRaLabhFkNEDp82NUtoE",
  "key2": "37WYpHCDdYyWQVGYnvyyy46B8YdUpdJaTa2rgfQkHEwdJq7TdzoBjKgTNg6mfgTB549sZs9wnc1ouqW4irhses91",
  "key3": "NEvgcHRAjiehkCtfrYZVzcjzhqK4MY4A5PuaJJagyAiXxLmsMpL8dW2VBynP7C5ddoPXDUvBf1saCf43ijZ2TbA",
  "key4": "4LEYcyFRSJ5zLczVRsWJqXb443F1CeFj25UrvTSsbvx6JrycaVtfrAsHtsqq37zsoxRyMbdqTdqzEPen5VBjf9LU",
  "key5": "EwuqdCpy9bsLBVLfKMs37drqWdgyQivzxcYEptNXjJNTBQnxqBK82vEW7f3jDpGZwwwroLawBSBiDq9PDDkRvCJ",
  "key6": "2aNf2EP1X12YU6wu8UiXeiqL6iJ6cDXfGPPJhbAQo57LQPTdCpiJWspCRdi7pWs3xQ9Lrcu3Xjeu4NmghDuANtJD",
  "key7": "37SPPw9jnk6TSZruWihrKygW4vZu4WCLES4YTcNFKG5fUN6Xqk4Y4TYQKi5KKqDdmyErK6pvfdGfQz8SCXQRXSek",
  "key8": "3GurjtA36v7Dd8vmm1RDQqg9S2Ci65qgRcTK71wzjyxuMXfvQ3Fp6M5TvbcJJPyskbYvBpjmNuW4HCHyaUa7NzCw",
  "key9": "3jjHPUuDyNqJveDG9rMKAkFqQszekCwbn6Z3ZdCDWHYYSb9Zk3CanDYwBeGfKbe5TNP8txxHMGpG5EVBkPYAZuXV",
  "key10": "tfr5naShdGMYDxdSpzyLFXCmisyJVQCRGg2X3tHcvPK6mGL4k66p988cKFh9gHXxfRDKTJ9pezudZiPoGYzBpL1",
  "key11": "55P3xV2iLyutFsBP3TZnDkKSKbdqver7fgXATCmr6yzADztZbR8mb27CcjzCFE5yCgzNVAMgAvhnd4FGnxK97abu",
  "key12": "4LPkLPJXU5nRLPpQnqPDtMmTzPXLW122nnbkKgsmDD4CGpLz8ZwPrtDYGaKcWqTA24GVaSkTa26iDjjrAYPyqFb2",
  "key13": "4R7R255doWbuEJEJQDwbdM7NFC8J1E6BVtMbBN4czdjUahqaUfe6d85UqeXYsxeSsYdszGXCXLMLjJ97g3wQEHNd",
  "key14": "2fFEKPH11SRY27sgyroriq86PdyFrrmsSqaxbZWX2NDQCMUN94w3VNid1tWbDbfUbPVmW1BotEiN3n5JptjiVE5g",
  "key15": "5HTqmjsbrJKE8tGDmwUdUbDnpMs3jWYEgPnaqePZK3nwHtyigESJihfuZgxXTA52KmyCupd1V1LSfQk9HdpWREsN",
  "key16": "4sL9V14FrKWCxRpEvViCgKRh6NfoYxxcBuveieCRgtAgAJKGNLtA3B7hdR7kqUWAjvUkE8WRozQefqTzymHE8RAP",
  "key17": "5VY13RZAFcFad8DhbbbpzyNH2DeYPc8F8FcbmkJeyk5FiSAc3PfpUbEHGt5S2zAq8x5XVR3nfsEJinyhoie4A2d3",
  "key18": "3VnCkQeCn4LGojyPbQTgonrrWBhH853h7ZaUXrPXBfYFGYKRNhKW1SFRMEA3zDjdzt2saL2cnEjVM2hhQaKRrSF2",
  "key19": "FbdYtePSyU87bnSAWe3K15kKWM5hRexVjbgL8ydp7mcHNxhiL2J8YsQfd92fkqmLfnUe4qS9jLMwUXs3ayeTgAN",
  "key20": "fXgPrrjHVzQXGj4UutsHZwEdWkdZajujJJm1nvfmC5XfgCKYQaWL3QSAWDjBxJp49r7e3exHbRKLKPACARPJX3i",
  "key21": "5eYfKZGaNbmS5QTPAQ8PvoVAENdX5QopV2YAZzkiSWbmsdrDXQfkbQVQDcfokDkqPE8WcrGyKzoSVodU4P7nGwkP",
  "key22": "nc7i2EytteeXPecS7CEmKTfVKFocfBjQ79mEU39jMm1dENQn4J44howZZ7kCq7SyNRsraccXebn3bwg795UbgEh",
  "key23": "2kBXw16FTHYzDknporxL345zAGhJHyT2kjGFAgud8EmM1VBCwugLiLHGTmAkwg482LNmXEejQW7E7g3BErebJQXb",
  "key24": "4DJ6gKZP5eEAoxb1x1zdUMYwj5n2jU1HqWDfPwBLbUeW47Tye8CUKACS8CAYfRMQoHW7dKS6P4wEzCWChmbGzfpi",
  "key25": "5DRwEniBrsXxLrQ9jEUodvqjXXjQFNBvWtiwkDVmN4BC3JD6imtUiF9wcUTeonNYRUhMGRWVsrEkSUDeLaE2s1e2",
  "key26": "62L5EoxBNsG2365Mj5iK3eQP8Gu611wYxirLq9TkeDyaFpToe1MXDyx4bpN83S8Vn4VyVx1nhTG9WP1FGyVZPhYc",
  "key27": "21kiV3usj6ChNYZPcWX46bnae1Z7eg881k8PFNYkqQA8Xf6KVRZfWUxdq9knBKrkN4N2Nzts76uLqDMMXM8askVj",
  "key28": "4ic3pdip8EUSCJdxCTbNr4aTiiL8LkePtQRdWaF5WE2TT1zQfJzeu7UcioUKXKwKYvwzVteAubvTGznFFpy3MPTN",
  "key29": "eZAgN2radMS3LYBhC46pjgeJBx9JSLvW3Uh1miHPWbH2VaiLZAz785n57XwUNwQTDjQfQk38hjfGEbd4mF3mq7w"
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
