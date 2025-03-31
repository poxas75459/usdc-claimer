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
    "2BeBs28JMHwor3Begv2oDo2jmT2WQTjt8QwDs4rBaG8i9vNknnYpou2bV2kQ2VPTGgaxG1R2V7XWGAjan21VX1Ek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "486UPF3C9G2PRf1auuKH6WJB6JHwoyww1kwDQzLH4Tr34PhH7RjuCzz7MzBkkLChPZaqndKEhBsTetEXzgHJFNbD",
  "key1": "5rs9mAHoWouZ5dkrjZ3gK19MmKuu61zwxyhSM6DQGSvjeDDsbKZaAFKs9gRe3rytiMbgGU65m1r5gz4CX9FK4LLp",
  "key2": "5WDbK42ZXwuWpV5eAmQut1Vj5JVoG2Hv76cHBycpfTYy68tEtwrSREbAJiNfErNrKPwqSFC7NKdJBebDBGcbV2kg",
  "key3": "3SCPS2xRyduGd4bev2ogFfk3cEetFZpY5hR2rZikqem3ySP6pXubfnoRHNnBXEhzTuBEweaQ6dGk89DjtdkzjbVu",
  "key4": "2u2fyp4c4HRLoiyyKCpdyd2gsdihmqL9cKE5AKSkAuu5wHwHrnCLBZJo8ytcfLpKjyBJfLvcgnimaeN63QTi8dE1",
  "key5": "4TShMcMtsZ9ab96ALMmgRkY98iKZGVbHUzNCbC5qpofGoVdWybfXTJDRY3YiY4KMRJmmSK8eyjSPxkhCdGL3P3r4",
  "key6": "658uchqXda2K26eE1goKtSiANNGgGVPrRmFSDWKxNWhyS9Jkj1tcLGwq7GHjRfTguEL8GKpGetpnRmrmnxdrSPM8",
  "key7": "5rkrbsCjz32VXRicDSF81ESScu869q4bcjkGaZnJNBG8pTzcYNw3DCqbVJDB18wRFrC1mpKFRWhBHkpmKoUdad6u",
  "key8": "4P24u6nUpG6diSW37Pha4EBv3gevgj6Ncqwf7n6gnPekk24EKQwHgoyZGU2f9AqyFrwWHyqvs3oUvM4tYqoocXsS",
  "key9": "2fj39K8MNVikKb89MKCLyr687vaG1eeijAezKyScJ3BoKmQzYGX2L8rMJwRbrZBidGbS4hp46LpjTGf5FPkuJkZJ",
  "key10": "2vxzJuqKiAMHmLrMUZGTTK4u28hRHxpaPBnFKspSAhVBRMmzbEGBmLexnKm2xLpspZuWpJD8SMCKxA85QKgYSKb8",
  "key11": "NJbHr7oojAP8hP1uG3MxtekY9ZBx1WWrsSZaDw1Jaf5GDbsaXXmoSAjvQm3svhgfA77T2x3jwLEtke1UiFPq3rL",
  "key12": "3a1AGfGdbNMwkZmZGYJ2KV2EFTThYZa1VwCWVJyGyN3ePpbkBE5knHu8KPKjYio8ecGae4s8oMrUgJSRcfpy3SPg",
  "key13": "5DmrLhHjCCEH395agkfHkgXjyZ8DrwjZFZrxbYrJ7k25MnokvDHZihnbjroqMDKTCH8e4bgZsF7q3nrBAKkBpTpK",
  "key14": "3QGr3uJ9YLDn3RKnpWKQqoShgqv7vf48gCZJF2tfPr6CK47X9ZbEi8cpu6eex9AnJkWfchup2fRDeRUkuGaiMQDf",
  "key15": "2DPiAEMKi7A1fAUhH1ZN5hg3HQwVP21huUYRikeaWBQhyDhpEzRngfKJVnrwhmavvLc4P4QCRi41pSGuB21fabaj",
  "key16": "4oAMt7Fr2F9m1YW5h3j8nkZe8dzTJ8w9TUcZP53iqTVuCFHGEuspmCtJ7pcBdme2SLCLWWSpjqNoN8sTe2RrL5Xd",
  "key17": "2avZaYdVkkpaSr1WyNMjHBAGRf1gnNNzJEEPJXypBcCF5oyGg96LTXt9TWxXEDmRyoj8BTTgAaYxzpwvhQKjnzjv",
  "key18": "3mrkkc6pXCKHib51Ju2GazRpzBDK1jHMKHcK8wZRinTtt1s1oFiQSspG7NthyL6RZuNS18E52SYjfEQTX77WCf6V",
  "key19": "66wthn5YaTWCuCTVcjZZVWic5DSKkg5wYk61PEvirjreyWEoAZCPrH7sjoX4ar24kby8peBSwZBHHHadtHkjbedH",
  "key20": "2Ewo3ENZ8mvzX3oeAojyxhQUMRSzUFRPUkq6UZ1tCe8pvsxGeBNKeXfLr2Xng5aYKe4beXTpmHzGA9DKMZEodj7x",
  "key21": "2EQU33hUf56QS2zLeu4wZgE9Hx3aeyptJfkgKBrtNuj7zP7EKkMQ96Q2qMSPbz4YGKsxmgenGqtSDNdzHqtmfSiY",
  "key22": "5qYTsDzsf825Da5tyD9AmtLwEsdzGJHNfjr55fQMYgccaACojccEefppGh6oinbt7evG8v8KDSAhjMYVBwuA6ztt",
  "key23": "3orfRtzL2LtpHqaYkPHAVUjppivmJsJsyVDTnoY92wCLNhLTGTnxd66MvKyMicJacUWAUSw3355gxGDVGzVG4t9t",
  "key24": "2Mw2xozgYbhdYCNa56hd4ozE2RQ2niZzDpBKC5p2CiV9FCv4PMzW7HrJTyFLBX28v6Mi2dHDcjMjwsAETy2HGAMD"
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
