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
    "2e1G6wbvGh79T5jsfbsZ2jX1jS35wRfRv8cn3LPw9JZaK2empf1YKdudikBCUU3Dbd4yb3PTYpWGuB3h5uKCktV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RMGUD3pQvEmDj5MBJgfx6dEjvoD4snyJ9aUYaSaXGbqupz37tZZ1LGjaksHdES9i5eUT8a2QhAKnvBmxY9nwLuT",
  "key1": "Ka6UkZpSW2wy1AsH29s7zk8x9ms5RrWQ163yA8op4iX3uphxmqNtjMZsiMGWPoD7ePSshapg78ZPfRLdjuEh4xi",
  "key2": "3sN4MU6DpfSBd5GQoCUeT44pSR9uk8PKo6YkkmJYHbdZrDkrcJwPwvqdyrn8jetFU3sLQ3gdVytJaunbHeNcwRrK",
  "key3": "2uavaw2G7dTT7kzPam4NSZp5En89rPoruz92tNwv2zxJabwYtzF3Nd8yb1r17f7yZyi5QBj38dxEXAvZft97tYo3",
  "key4": "5zaGxxi1kBcMHmepukhxvErgXSwKL5Njwgc6BnVfPmLGJso99jgZwAeNoc8WwrpjJSfuy925Q1EGvHiLCZBQyEnA",
  "key5": "iSpMF78UsVhm7iCpJpwyRcvXRokvEF7gHr929iHhudVC1sNV5bXSHW8B3p5vvUPVm745cVd7a92MgP2e2PwRU9w",
  "key6": "3XRMdr1QVaCZhZ6QBEtcvy4KT9JbiixcBpyb469ewYSSP6eFVUKNnUwNbQbCuVwaU4dA2eGA3oZAZFXECUh7Hdi4",
  "key7": "2YM4cDAzUibjJhg4jHUg9aGuaHmhT544UaYNfyECjjFzxyPJKZ46jAgssY88wCZ2i9uUbFpN727EJKLemqSJdrHk",
  "key8": "4MZ8hgP4wmEYHQ12qgfBRCjehyie8SNGEEkc3MZ3Q8mFKRUqZFLvkLX7S1eavRRnaaQdASAKFQCxhuxZ9m5be8jN",
  "key9": "hizfARQxXo4DD5JRCabKgzPQAQWk3AH5f1PisAaBgfERBD4JRcQNxMQpo6NQvRQKCJBweidKRUWazNqB5Vrf3Pm",
  "key10": "N9SHMhtJs6FxmuQeriMAPSGuDqafoaSFJaTkEXHevTQnzhpBkrQWYZ3Hngk3rWTproYiQL8VoM1xt4CTL6FjKvL",
  "key11": "3ataV8tW97TcTJBmnGGeGuwkUxtaCfBSy2nLGad4pSg6rN7gS2SRQ25RX3wwm2GKn6fForUcWBTzZBDWhTGFXHww",
  "key12": "4Qin4qd1TqXFjcrLqKXnGQcREGtWPuNgpMAiVNKne64iGV9WGwJexzUcRd6ofq4V16DghmR4MpL4GwK2NVj5NsmF",
  "key13": "wyXR9hZ6JoaQQLwK8T4ZXtN6dWSmmpPsA85y9vBVGVWS7Qcbe7ncpnFwgtbLLUPDhi7ndwJ2yNKXiyCJ4XAnpBc",
  "key14": "4popeSEvDv9pcbbZroCz8fNKiPR4MMNTgGMbTmSnoTvDnQnyPgYXirjvL4nrsE69kJQZ56yGmmUwa3aCvjxKZmie",
  "key15": "2akD1NfuufSdgkZBPExwUgVVBUXGM6BuFd2MbegWQziAxRSxGSUiPRxoLmLAsRKKTRgsC1hiELYuBaJ6zRqmFieq",
  "key16": "54JPsQbQ7x6DAaqANS5J7YhVRwy2ueDMUcnMoeTmdmWDQAk22kiPQLa3RKNJijSXjVxv4V8pGArnN86toaGpNbUK",
  "key17": "5AczoyLJ5w69CQXrKYSc8xqvT1dX7YiYC7qHv4eeQ13dWubVefD83TdM2SCW9fFwkwFJYnJeyLYNVXH266egB3wW",
  "key18": "2BWsmb2cDerQzf1m8rtfLn9ZZRD6duRTAxqV6YwJRCAAMompENGGqELMuStVYmTJioT7U4bmMuxUHfPMb531u5WL",
  "key19": "5EV8695cPU2crDyHKyRDASAEJ7zADSXdCWLcXjgUMCNoTHpStSHgmqd8oFbvramBnuYKiohyFAY2st5gARPzbNL6",
  "key20": "3bfPh7yZqfbYGc3oFjfj67GEb4yqSex7BkxWjuq2tyMBjAFmGjQGmkFAP966UnaCHoMs3SFv9Q4AbXbb1sjzpX2Y",
  "key21": "2wfRt5baeYU1g2MVup72igb3d5DrvqeBRoMFUtu5sH71zgN9fSEaWn7b1N3C4BpdnktQkPC1twpLB2FSs73aiwJs",
  "key22": "4brzWKbR1QCvELWL5U4HkMnM2KW9R9jP1AKVaGu9nZMrxu7jqnKFVCZP1rNdJZyVau15NMGFemqM7aAR3MLNzWo2",
  "key23": "5thoPEXWJWXuMJ3WbJp42CA6xyHgbFLTwqi6Z9R47mmjR2RUjq9wDusMSDPdwtCTFfC62V2tTGuZXfBasnpNUULM",
  "key24": "62yXStM9ug5pttpQxz7sbJiuEW423hvrBb18As45FvW2skqtas9yj3MgvfJtSQXZAwgYLEF95paQDjL65dxBqEdn",
  "key25": "3ZnXXEQ6zSsDYTCa3g3QPQYkD9pngL2RCY1TR2Y4AtPrRtYJawHXCyysqLvNRuaP7P8u292mtvCr22KkKxBE2FR9",
  "key26": "2qdDmu2CtvP1aGMbdqf7LpdMMSLNCwCYeUkmo4fj6c4Hr8H5rNpSs2FVzrtMFiJYTCHL2qavAHrs49beXgczbf67",
  "key27": "4GDBm9SWrsTT6kMvqpvhXWCEc3fmF2sdrdS8rFeyHPpNPnrXrUKkE4fndJfF9rvrHFEfaETox6Pyfois4CzCQPFU",
  "key28": "4eQAVbuZ7APm8tXMEe2JYhhnevmtZnmUcL594aSZRgFubocen53jRcqUd5UcJLq7TNUuMWbWG18oFtaxru6uwJX8",
  "key29": "4jyPR5bvMy4XpLq2Pi6aYyeznJLQPA6C8mk7Sr9vctM4ae6iSjn42cVrbVpDCa1hqPWXphJqFAvzej795FkicgAX",
  "key30": "4k7inR3FAsEaYQ14zk34t2jWNHXLkqh2Jb3xAi2SpXtC5kQo3rmMG2uRHTXGAEcDq3pFNf2517Fz25JRBjGEz1eb",
  "key31": "2fwPAoeUgDvYxTQYnZvGNHR5QaUhGpe4a9PPas7HKPp8dBf3vjCQZyHPDA3uo4ymacN3QWyVMy2a5fdoUbKw1xES"
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
