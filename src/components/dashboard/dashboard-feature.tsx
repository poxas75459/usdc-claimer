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
    "45HW4RCCETrb85YHn2FshET31zmKbFSez3KkVPLzgvdMWhfKdoypF7sRZtdwJp9LC4UpdXArVxAygWiyAqLuoXfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39vzphyu7mhew1zEGJX8F1NkXMjHCrtHchNYRNG2P5DLCpezhALCkEjJGzDxoeMvaSY4DGuJcqrKxdE8hh2HyMih",
  "key1": "2Az6PhCMAXoVCcXw8xUiFQ7k3PQCt46WoScEVMGu7ZiWVKtduEFXxQ3hwugDxP4wPJXjgofXPz6RFjn4fEgsJXBU",
  "key2": "5p83L5iP2TFzy7FfmxEL7N3zqWNAsizbajF3DvWc7VykNy5uWXa1FhubeKguJkfyX95hNcMhqhoVhKZratmtbmbo",
  "key3": "3wkQX4jUm2QiLrTgrEruycxninfRtW7YzMJUDcHchwdbEXU4ecUYoPPa8M66NwqxXAFciFhRY5K8HPwzHBuX8QiA",
  "key4": "2HwLyNe6k8Fhv2wsmeg6RvDXHqQNtipTWKcvhCCp76Kxu5552aSQaNCPAzUZ8UtZVCdga7EtiemkBBNMQFUNhhTo",
  "key5": "2AvpJacdcotTzEncGxCjNGdPQj2hKB7ag9QSBm1WzExHMKS6MVaQ6bf5uodTmzaiNUC3uhdeXQEkWLLrDf5N8QSU",
  "key6": "EALYRUWPTKS3CbyFGdhBmbayVwJCZc4w7yG2wH9eAFJiATUMp6jUPLTDaLxU8afPyUa3jJANvEGVgSiKdEGcZfx",
  "key7": "4bkFGNnLka8Hx16qtd8DJtCqwxXZPvKp5qTb1q7W1pT3pe3jLnr21qBe3XwnEzuFGTDbkoLvrhZAC8H1Z2UtPjZS",
  "key8": "4uGHNFNTQVsN4xByaSSskvM7SihvSGtQprgu8AqzA2iVwKtnqn9XCVzfUzutyZpFi8vvvNUecHBZGQwamTL9yE9u",
  "key9": "3ePt4fbaiCvnM7GPrp3kJPCryoMHDmkmjFjze8s2tMNPrtHcwTTqcUu65BwG2t1pt48vCh9Szx6bxuZqTCs5DSRx",
  "key10": "2VDCqXWYuvn6dtqFwy2n8enD3frZd42kxY6o93N22PJjuTnDfK1ZMCnwasoRgdG8GRGDamP7Y1jz3DqvfY9RmYpD",
  "key11": "2UwT2KS7GHxRdoq19zaT2bMpgg4DADUwvGUk4c47y6afbFWetQYpBmheYJgfGB9LcNGbuhXUsso3j8Aidw1SzoHP",
  "key12": "5UFCxLBK1yoHTGcCFGSRcmyQ7Egf7e6nSfcMFmvoUQ4WSeNhYREGDkS5UMvkvTqTjsf1NQwRLspDih5CVmRBC7cQ",
  "key13": "D1mNvVVijHGtSkWLgtx5ytRqr5yJoa9tJU12dz4ZMPXDYPEAXmv932jHYDdJLch96DF8Qwivr9xeNee2etj2nBC",
  "key14": "3CrsAmrneHMQdnhAtaLfmYLXcVeYUpk2iPMDMjvefpfexHPN3JtpMMPXFg8aLcGwce5EdgpT7ExPdj79Lja7DEU8",
  "key15": "3obRXdGhnucF6wciZGw3gdHm5RWVPH5KEgvUaHyP2hpZEs7EokF1BQMr6UZ8pnuavZ575PAaLrDSPNC18KhJfMAZ",
  "key16": "3g6Yp4b7xRK2cZWvdWvMMFQDyycM9fixL7w9SzNoPKMUizW5PTE32ezJqu1crUrZ2vLE35cGD19PcQMuo8gVsCJP",
  "key17": "3sXVWibyGB6W7fYEy5AsxYHZcmhUFBc16sc6VVrvNeoYksXFgZwSkidqeWy2FAFWTAhxytyefEaEjJpP4He3191x",
  "key18": "Q9Bp2ejDWCECW9FfsVZ7AdRoAeq4ydthjzG5U6NwYeDhWpWKe1uYFaZYHQa4iQfg351kHJ4P5AWL2zK2U73stP1",
  "key19": "5ETYXbtRuewfTHrffyJfyEgpZL2N6KiXhr1UUBMNjjJGbvnMtNKb6NCKVbnVq71qjTMX8HKAu2kgYXPWvUz5VUng",
  "key20": "3mAwEESFuZUzbR5rVTUVhi4RSN2YUn4hBz7dntRdnmWj6wVhp6EfWFFVVFvzp1KipVV3oXQZABDbQLsx58dBhfcp",
  "key21": "3stfrESUi9qNs4ah59EouzsF1YNKojCok3Z1YetgCYea4xNmVBpGBfcWq4k521Jr1jWPBR7z3Q7cBJ2B5mbQHGTN",
  "key22": "24eZZ5LnDGk2Wav9xL2DxfQQgQUttwS668XAghyrE5F8ZsACNRS3ebPETHpkjrJNijzru7jpyFXcj3paGcmaTKgw",
  "key23": "4WcVD3QE2kntshNFsWS2ViJVf8f9VCUxwcyvddRzr6uwEJLdCcrpCLecU6pVfjuw1xWRNksqqwC4mCPLnsJ1oiCr",
  "key24": "Hj5oRh2F4Ky2GUsZn1VXcGBQ5x32sE9izZBQd7sVUFmkwGtf9srYaHtv93WtPbKgS4HEX7NjL6yfJcVNeSsp1Po",
  "key25": "2NfqMKPyRwLnAFex9E5f1VwXni7tmbdaXpxysPgbHdQP7fTwBTDuWbkZ16C1BweH8SySfqox3UVjxMuqdMjoR6bZ",
  "key26": "4LumjaW5YDHAqdU29kc1kga8QWgD9iHH2JT3P8oA9dvKi1FNEB5SzzHAM8yPMRVT8CZ2xjXkvebEdVMgrj8wPJoJ",
  "key27": "4RwrUCNMjySzmxwD1wSBiQsTWMWH7zs5kMGNd1HLEoNXffktXPLEQ6U1Xm3PR4jc7DFkNAQLccASWhU53nu8Vxec",
  "key28": "5WRzsYwSDkprQzRGxBTteUrdQajnchGJa32gTVpmLoGBZ185HpgjJzobHV67cDEm9euM9ZKSffNjYLpjszp5aQtN",
  "key29": "5NY6GdeLrEj56EdGi9QPC9UHszt7WqqCakq59TJBhpjh8F1srXPgMJ14aXrMfuBPTSYToZEk3CnmNYeKukY1mKyr",
  "key30": "3mS3sUMD6r41C1DPCHLECP6soy2EJMT6eyXVQEWi2LZ67Lh7F2mEGCgeM893HuCB1srQkFbD7RErjDZVug1xVeC3",
  "key31": "bD2zkmG6dDZ46yU655BaChti8Vw3EohAnrGnDqVzkm2ga4VxfY9CwQeLEhnsNdFpPGoBfAr4Y9zEf9RWTkWcRSr"
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
