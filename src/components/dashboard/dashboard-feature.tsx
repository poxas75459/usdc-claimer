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
    "4ie9v3khhCE9CrWWRAWDVMni29rLntCVsc4DaWVLVAhmQsxT9HDXGVLAehXehRNXUFSCP89k5QCZnqX1h4d6NMDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57wx6WL27WsF3JzR2yKa7wtVxirgScNhSniECZ2bh9g1x4WefwrgWQvd2itb5bU5Y9AJgZpsZcxeXx7PoPzcpEyY",
  "key1": "4YDezooEKMLqdVyysdkAZPTrZu2m5t8qTPNGJNbUgjZog4A2APZ9w4nJ5Kqr2g4FpMpdUZQWeTTQ9sSAuaBRaRHA",
  "key2": "5my59EdLp4SCCiCLAbVpos675Ks6Xjo7ymcXY3kLZC2qajyJcD1L7xAt2N7MwARgS55dHVYdWtTWscy6qnwD8KBk",
  "key3": "2hfJTYdV8T7GAksYsxa2hxVPvaHLHUgbqDih2yiqRg2jgLKXHoaEP9UJWzVQyt23MvcmXiTFYBe9qhVVpz3GagPT",
  "key4": "3ddwGVGhidBvYhx5Soq2KdYGWD2W3PAAt6AE71tJ1mwSbSmNherKsAw48hsrPW4mxxZopPkTzPaHmPb5V8uFhTtz",
  "key5": "4qLqj6ZGafoALGYkCyAdpMpBFfnphSoTHBaFunC9NDUfUWg8GoesyoNAB85UUADnJkhbZZ94jcNy6URZqzKoBXNZ",
  "key6": "5hwwEtHRFNXRNv6gZimLQEqpcnwgLu3CcbGKd1xZeXuaKvuppgDNYYsvnF9uqmZ7KK99BA9eQtScEqeHCVcRvs1a",
  "key7": "4ztEgRXvJ7bsAENoNPBTPiesv47VqapudRSFPg3xv3K15fbs8XCBnyoA3pS1kmYH4wSY3aNnQDQfhScj8amzf4yK",
  "key8": "4kRMLazVVM3J1mMTVbKNmjDC5fAPLMvULm1x9RJoLx6U1tbkAq3pBGsCbGuqam8XWDyMKNwzqZaYqiCdU5Fnjmxo",
  "key9": "2pgweyqmGFm4JmmFKuGPKfQLFRwvU9XghFhbBDqrEwSqxeGcTetiuBTmo91eGsHD98GiFCVh3FP4TMUT6jzf8Huq",
  "key10": "4vSU2GkWkvFuT7qdjzqJZEPcWM3W2ywWVJBhEdAsB7AdmVu9FTxW3EUkYNiMrSugrP7WKyWDBX7aUTSsTcJ6Uh87",
  "key11": "5NdRVB6NL3wUa7E9uJ979bsZRm3TmeE9biDTCaWpoB8GwKWdptRE8YE9LkpWnC7ixJ7zBXa589jrYAqZs55fRC1w",
  "key12": "4pe79jN9MWK31s1D6TCULDWsnCaeRTfCF2oz1UWx92vs8vpoYDnmybUR6YssPWcZfD6e1gWTJQnjJEoD5xvmRR3M",
  "key13": "4vbCSTL1sENB9ZXFUZeg7DkuvtsVEawvc6nLN1623JTS3vzmwuXNPzxjbhD5sQ62KehP4L5G4cQRUEZTg9hDRrqX",
  "key14": "6N9v2BCUYNNMWsKEefT6cRJ5k6wuTvm8Wwjq1brv5G592Ut8wDJ8kusTFP22Jkihpu35v795ZurfVeF5i2w4WSb",
  "key15": "2KbpBhhyGqRhtU8BX439cUFYhkKoiqGFYtfXqYAiGnVLwbVxj76fNCz9cnsK4XN5gsLP84rjMv13jbjTNpJYWAzw",
  "key16": "623CCD5jV2Jyf9qSmgu2mhFt4DspMWZmyzuwe9m4LUJEQpWzEM5KVa42Y8KgL3GgqWUWG7PavrxSM1MphGPWUmhe",
  "key17": "5XQZ5NJGeFJwh4ehF5W59U3HGiVFgfuhngNU59sU259VbPafMT6WX6fRZFPquWW9Ka8T7mjAXvBLvmwMuA6io44E",
  "key18": "5eG5DSGxRUTt7ib4J4ioWR48v26GFzZPiWM14VRoQQMGdR6bpmW9xFQxhh2U8w2ChZwHiobmg68bvw5HTQn7W177",
  "key19": "4pVuiXfwPxPEwFHgkcKMgaqh7YgmF2ucYkqP3UG8e4LCoSNPNXRg9t5fvXBoTqB6QPhhUqjZfqfySZafzEGJ7T65",
  "key20": "4VwXPGfyMNZxQiABD3mUioJ1jD4dtA6n6HgE3NAhjWAubTL6ZkRpoozGfyFeRCwD89QMhuxXXrCW69P4Vw9FLNEa",
  "key21": "5JJocJNWhjS1a1SNUBvPuARFuRoVj3J1QYQh3yM4DiUFm1gm8H5crLZPjAVr3TebKGpqYEX2hqF2xfCoG5QdcCGF",
  "key22": "4dz4qdeKBmtvoDTZwWyLHvxpRszVkiWfgE1EcijEKwjoZH2miDPzNSWan72qzuG95dEcyAv41uvG6sXC7qoDM4P7",
  "key23": "yZTmbYnXeeGEq5osst3MhH9gTStB7xBmdBW6SBncnHTUGABW4HdbhoBnBdB4RXuNkGmfVnEKYNY62j7Afse98Sd",
  "key24": "5mP9JnbQBvCVJ2bh24Djtb4XeJERQN6tkBQKYisUhv6nbeEMXKrSh9WFqM7w8TAjrj8vjLhfpL8fV6iN8oJG585v",
  "key25": "3TQ1YZjuKbggXLU19KkEfpCEYxmKYCbzQaBV1Tc98D2vKDcKUzg895fR4tJ3Kc2L49UMRNLUtnbR5vhhBfgdyq2A",
  "key26": "jd6ZgkABJkSsNB7BbgdwT8sgGysbxQ75sQAcwSEe8JyuEAiWvoTN9pGxvkvtFLeVgFeG3BbEZEKSmEG8BhFbiHH",
  "key27": "4q8mMhp5AtfCi7e6PcADu5ELx7wLXK8E7YX9LJN2DfumCaBpQL77oZHazTFKgKC8V6nNcwvfasCdDWxAnpHyJvCC",
  "key28": "4U6NCiB2yyxecseAUWYm58mFrFXjS8gNLPodbXJcXJrL3YPkeAvCUh5fZBAkK4nTbgDX8TiznUw3TyWYJxWUbc3v",
  "key29": "5nxmSwq147stRxrYY4nVLPA7cEy5StDYPM4ndVqxbZQpBS5HmYKrbkTEjQgDN5cKkhFLGqJ6jzZe8yWZBPRf3qf4",
  "key30": "3w6rdDa3nDkPMPFAioosQxZaemX4Q1KEAqugdTPMNT3VQNykPGsxuE8y1HV5Cw46MsTvrFczF9Un33mDXrd2naM9"
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
