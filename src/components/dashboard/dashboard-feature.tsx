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
    "b4jckNJKm2thm65ZBfmmpNtMYGbUgjZd33ePj2hFnrRfXymjNbaSGpiUgnETGXwgYPVWJd8y6ihusZAK3nAM9EW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eerMB8aiHGkGTQRXsHugPd1cuevA2B5SCYkWcedaUaotF5orxpvc9XZaVkSdifKRfgQ7gF2dnMdBJZ6geDWjwPS",
  "key1": "48CbSYGGfrKTStyUimZcx5JQ4WCMBfDZuzM2n66s2FzE4uDkCiSqsHfbdpg5JFPizPCjzwSqLsFKy1meSutMDDpc",
  "key2": "2GjLTzExaad2FG2DNZAY5xR1sgvmMK8DwXnf6VF5yFhWHVyAKrbFdbYYaKHBhQW3tPuZsiTLvocAaAV1S7woH2kh",
  "key3": "5ZcvssBxUxHhYbRxq6GfhCXbhgZBk8Jajjf545rMDiZRBuyhmQ4Pq6cdmfQAgENrBj61BNjhsz4kgEzVssb6hVN8",
  "key4": "5mwAWsprrrTjBLoQjCzCbMgbYSqWmdAEVMdH9EpGUs26HTSmJgLRGKGU1wA8qMzv96NGwqxmH6a5B6EqmSkNs29N",
  "key5": "5f3troNNqCqrDMRTbpLZ6YAfLGLtygLPgio3PGsKwvj3LUNZBQiU7f9KMWU1sp8T7AKwXN1SS4cRzVfot9zm5Rvt",
  "key6": "ib3SLNUw7W3Gsppbx1746H39EEoK5gQN3aLsNJDnaVD49v6QY9wJwJyhbrfT8PX4i8uUp7CHuk5mviHonSumRaN",
  "key7": "62DGAdo7RRpcdma6yFPxyCQxair1eReZzT1mKH3Wsax2Lqg1DKkAeJDnBkpcHdQawpBYmPaBKkM3KSjXsQNjkDVb",
  "key8": "2bpiT35qFAXnXwiuVgADghveu4xZrr56ueDUMZnbTYhTbmPBoP4gRnVwAp4JJTLzisfgQc4idQQmhdcemMChDZb",
  "key9": "3iZDVC26Q4vfvs2w1zXwUoHNCj3DJiZk7fpP5dVrjK94ogpPgRGtDF56KCbKHWwpUnPds6imvSfGvw27ZnQPNmcR",
  "key10": "43YoTC4bonrZobJHXnKFY3aPp3KxKX8EM1pbH1PoHALjzhw3aQ9rmLtAPqrDTnCSaF3BgLgW8KgYpye5ihPWytij",
  "key11": "LY1WRT7zz11fZ6eHy3M8JqAzTKneKGZYZ25oQjXA7e42qy7PwTLtz9AoTGVXmie7Gv2xntX1icpKTjksYVrnavZ",
  "key12": "5zmYY22v7SGwTGhWdoi4zPETEAvo52ptpk9sHmwfJKxzzPaVD5c66djsrfuaww45ngQ69NPtPW5wYxUo1TKTHqKY",
  "key13": "5XE6RxS1QxLpH3fA8KN82CsDa2gbbEySe27W8DLqARGYon5x66x188cEkoSes5EuHvqePGcxfoJCHYCUrRFQf7Y5",
  "key14": "unyvPVWhxcZuvJKFiGREaQYmXA55KbEvxEgr6bsBwcYgrmU1BgmcBQfwNvfnGbpSz2gQxLb7MZJL5mRa1onTPQd",
  "key15": "4uuwLzcyMZ2zkieomLsXdVww4xDyarWBQ6mWTWLkR6aDPHo92xrVk1cwgwsXsyHJYotCymAN6i3pDsWN9LsqZn1C",
  "key16": "5qRB3JhPWLMtigphabThEsLUTWjZdUw64kcV94HnGgLMpCmzMNSbp9pGivKRNE8xx92VjCZas98SWcp2vuzBRMWK",
  "key17": "2H1UAy7Wpf4PqnKkdHUqn5ayUw8CpcteHr7tzVVnFytgaFFjKEVtF9i6a9RSShsjZvGTBY8gdmQWZqLvw33Y8Ein",
  "key18": "3B5nfw7Vjv5shTjASwD52bSqSXT5M733u2mF1T4nSj6uKW2kqvcHo4dPqYomVp4JZPRscgm9j4S31ZrMrvjfJe4c",
  "key19": "Bpj4Qqso1qWgwVM7pb4s9QY9XSzQ55UdZPL9hY8gW9i49Ybt9GaeYQMYPaGWg6ZrohCCD7Ys3Zw3pjxGfNQH22z",
  "key20": "4auGpSNv5SqNadbvSAR6aYWok6QJFThkoZs1hpi65gDSnvj5tjz5GqQMUQtPToRqx9TsMq5FQZcYzujdbLVJAQ2x",
  "key21": "5XEu2JYteXquzoGy456nNENjKnzagKPKyMRVVqn9okNSMZHiKoJVS64JyXUo2EkmtdXU88xbh2Vw3ynWJq7Y6wPw",
  "key22": "3dLoTZhK1YyjyDso6V5K28mm46t4L93qYhHHJCZN4tfFoGraiS9vvuxTKJaNbu8hRbGbBYAjLiqTGboNMpmXzys1",
  "key23": "5wtvj7TGtbgHXGsXmVZpJnh9gKguMS1asfuLkYMr4HFNxxJNvyMXa4QptJwjeSDXmZtcf6bo1wBR4wr4nK6BLn3e",
  "key24": "3rHKPbE7wieTjyC6k5nsrSxmPm3GMiuwT3ebzsHNCfddJZ1goMcmYdiGWwUqw5y7L5PVC3sy2dDVcyo4fP8GQbYR",
  "key25": "4oyuFV3RnUhDo6tepn2FUJtWxU4oSEFWqyRSywzmJ5mAreqT6CXqh2fGpwnE7UDvsMxipkxfFsGenHswmb7ACu5f",
  "key26": "5tAfKZVj3ADBhwwsvdKcftYcRk6Qs7NQdZGXjQb16hccDoyt3NXmachkusmo2s6ATF1eYQLvKpMQjdz24j5RKWsp"
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
