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
    "2nRGcsDs9pVN7AveD7W3QVQdyzajA68KG9w28vWcHZPDPzBezciC7eGdp1MdZ1nyPxnsZRsq6R93QEvGH5YuTev3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44YBPopgG6vedDDz1xcckm776AVdGWfJUETvSZTDqHyruKTqfUM8tCDvNjq4kmsVa2EefeYUp3mq3u9A5EWNsgtu",
  "key1": "3RKJqs4VSvytzk9Rr9cb5suMFfcQyEbk46BFBzwPAM9zALEmoa9378tKLDEJan9vDHBjSvGTMMoATFa8w9eDg9C",
  "key2": "2S28NT1Erg2DZ3QQeX43kgH51VWg1az3ZYkVsVe71sqiWtscgPCycEn8PxrqLM4ymMXF7fETvPRDJceoUpsUS5ZR",
  "key3": "22WrDTsGztm8HvZkbwWnXzzYZ6CviiH4hq3cC2J5YTu4kcEVQYowm4DmE13kpSojNdqqzGNXgKWbqE1fLMp6iLaH",
  "key4": "47ZHAF5s4zuk5TYWxQeEtFZtnp6d3iyXfbV3ppuqkC3VzoSdTKC2q7i24o8bZzR7jbk1njfhx99GGpsEKK4bgHsr",
  "key5": "2YVk6A6g5ptbFzFzF98fAZ5r6yMPLHYqwpUkwLSUTztAVC9reyW3aM7MwTwjYkDgmLQx92KYBFQghVPYGveyLbZw",
  "key6": "4zHRBFk2zNDDxikuRbfzSU18k5xeChNGbUap8oeYD2m4prgBrjWPHY2DdtC77HPPSQMBJxWhuV7TX8ok29DctJW1",
  "key7": "258G49yGoGxtq5fbWekbhapkLnYtUEUJE9ke8gm8YrfViTYjnZRyCZTx7G3yAFFMH7tnriyk9kmx36BQg8E2FQLP",
  "key8": "4XmqcsE23cr6M5fsEnZSxQjwqzMktNccZoSuimqVT89pKEZVwRuKoDtCt2wEWPt4duci8ea7xfg4FFWkmVCdXYJ5",
  "key9": "3KUyxzjKWEMt1986P9xsgb4EAAKmTj4hFkv8EmPxqmqe4kBtZZ9DCbvApfRFqfWTqZcnwTxB5tKYsm3Qhip6Hcdj",
  "key10": "22TrNa167GNrfyE2m7KbFYu77jYmR5Dn4DfbPEyFL3QERxARcyZKeyAziHnrV84Vu3rc4eKoShQ3kqm9RECKyx3D",
  "key11": "2iBU2rtLjQJnVPgxD9r71VgFtqZYDkce4LrcidcZZGhc9wrcYqff2oqRmMdesMLzLzdw8esEcHnjRxYTrU1w5ij2",
  "key12": "7etTudhqT8kEghtQScBjefT8eRnfThARmFpYUTGxF4Gc9jugctJHfy28cwR7E4psYfKNhBEwjtHPubNcYfCQ7Rx",
  "key13": "2DqdLdhVjkBkaTFjErjzAppoJZ6AJrcdT3JfJmwzydxGKXgGHrHViZYNEZuKQSgsJkd9oEX2Ya9eqHcXuU5e73k6",
  "key14": "5GVtyDz1LRepDHSENLffWW5snrQFWX5iVVTiFdckUomgTMoH8eiHT2czsAp3xMfhruubpXWCEkEjxmV6J9xewvbe",
  "key15": "34bKVCrhVMhrJdwV5upCwJhuA9Ubrfy6Tpfqo1jJFaZmibxcryGJjvmZQg8rwDSjxoSXXYHwQkmajrNQtqec7eZy",
  "key16": "szZK9uWYwPy4pVmwgjqbCXwTRN3TWdMhT7dZ6X7czyt6hHHD1BQ6bNi8BqFbWHtatp7gXaUZwowFAtsMS8vy8qK",
  "key17": "3EpJbNeDqGgJVCWZDe8cX3edwqRqvBLXJ7V2YN7iDRAfkEabHQ9JuFFSWSZX9tppK1LN8GPSXtBj4sPtB4htrKDq",
  "key18": "2bFrpdJMJqW7heZAtpfGFbuCT1jLVEs15egLv4Yfe1iFWnnUTVLVSBKbsx3Rcq4tNQJ5z6bQzYQtWasJPJZgzDyr",
  "key19": "34fb6iwRq7JiaZQHjZ2vEVQUn1bJhg8NGbqquDpwXWvwQUxJ3Vf1U3amgALpFjUDyychpZmPRSYaVv5GcqvFjySc",
  "key20": "21Cf5HHwZZtJHw823xsUJ6dBTZwjpitBbr2UqdJBxhE65X3KVCLpFYn9CqcGzW4oPozuozVe2RYp6A5GfZKSPEVm",
  "key21": "4A3xBGMQCFL1LNmGPAy1aUsGohC68g6EoRCydoGcaVva1frAt7uLwYihWe2FZcySnLqGKo2ogJ2ej2ULofd3tZcZ",
  "key22": "2czEjKtGxE39LXjWAJDPBQfvNxXgT2pkuDShitGtA3UniuZ3ukwcanbzuUKBP8ZkM1kSLLuhidkTGpAoVfuunjP3",
  "key23": "2yq8MVgxYqWrH4vLybEV6jibicG7oguZr1J2WA7d1KsNE7tGaaGGkZrgHQBobQPZaG36mECN1PkpJe16gUSrrQVC",
  "key24": "2op9Wok5jqFD6PDPPjpPttD1exn5S1TtKxnubi7VZmDZDYoD5AfnLBgR2KxLSyMYDUo76GZ32Pn2k8LW2kTqYvJy",
  "key25": "b9icgQ7PfuDroUwGaheYtSneBjZncA7Kh6VCYjJLGDA7mKaYKoiqwJaivCCMamSmFcRLUkbms6TetGkXnS5rzAq",
  "key26": "641TmMWV8xhmB8hw3KxcckfQhBjHofi6SySmBEK2DcmZJvu2u2YMSL1gWugF2g9HE5wnMJTfLxg3REqLcan4rERp",
  "key27": "2fC6JH8ssKrR8UUvpWpGnCkaXnfqUPNnqX7Jvrc8jrm11ZX1FVPzzPYtB6cTkQjfmvqQappvQw2LqcnorTKBSmxu"
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
