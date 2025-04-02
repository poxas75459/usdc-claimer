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
    "rA19r5CH4tLDQw62sAPhekWp9ciLDuhtCznTTPFfCaYu7LjgkzxRW4Usm64t4vhkw47FcMQ6s9FURxihpjCgRwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5feuKSQ6CjwoKXf3z7jfw9T4n6SzZGVmzFBefdqESxEqQTQyChSexfEwC7AHkkaHPdGtjaJpybKqsq9sFQYZzo44",
  "key1": "3vJtJYu2Y2LssEvco1YgXNZdpApJ7AXYdX5M5hQe6yKsHgEKUqd5bAsicVQ5Khem5GjinLJwoscDcMbBFdWfpFyq",
  "key2": "5VgZWMe1TYV83M5fKoFWzoNHj8cQUv8EZRBoNKi8LUTywfpdDfJS19Wjt73TzsD2RRKEZfcLcRnbxoE5HAmejNbT",
  "key3": "2zspsuDqraYwuUAXgJDY2Tcty6ye6KmyUnnkRi6a2hPhEcgkGH9SWrkZPJdqgAJCFyNJdph7RfHMsNeUFyTFcKmT",
  "key4": "5J9L1jAdHNDJbD6pqLLsm14piXxZTtVFsqqiwcykBR7nRZ4nsgHipERSnLS1n4JUNe87m7RPxmZykbTSUK7bb7oP",
  "key5": "3sewAmP5VnFNvzC3hs5aQ5pFFMxzkUKXkt5zS2RV4Y8Rfeby8aX3EbzXSKrgkYkjBgoHFiYqFJ28eAub5TGvcgxq",
  "key6": "46qnxZ7Ro4Lwtudv9pxz8k8MmeVpKw4xKividCPSD6fP23H7ANbQRmfzx3UPFCRD5PXTLVLvMyrQyRASbH4DgEDB",
  "key7": "4x8UrLAcC249YKp9b8ZdfU7j7Jfr6Uf1gUH2NmuF3pf3aB8hfiz7tq1cb2H88yGzJcGZ2Vmr5EoM964DX8KXZ4s9",
  "key8": "5hCsTB2ZNAzDWpKoGW8czhDspPaEZubCucgieyNhMyBz6QSXiJoDTnrW2iTD1DjRoQudbXn8ipTrPmh2pBq6Eq55",
  "key9": "26eFix9GFCQqQW8fiKKsVyAssKrAxP438fiUCPMpQaB62PeRzgnzw8HBsAArdRotzPqnQKd8ooin15ufXk2WbJdh",
  "key10": "4hh3QfEEcFr8rpFwfxHUqGHqFh6vKHqFYrahCaNsWdseYKeAC6Frh9fgJLbMB9qJeF2wa9Nv4dYTQpvJMzopyddW",
  "key11": "3jgCKckWpwCNaHzyU5Cvv6gB7NZsUSHwCNPpq2iKyHYxrJ57FBx5rAFRqkyDYd6xpyHFn5GWvHbJcZRAWCdF9tsU",
  "key12": "4h9k6ijLmXjN7pehyZhVdFTLn1Zqaqz972aEcCSQ7dyfZVREf1RHyLmCFgkDf9SAN8fNmEtgQwuSa2tuVH25kSVd",
  "key13": "ovxYhm3n3QCUq1F435jpACd6BJKDqcvWLQ3wwSbkC2X8B7iLQeyu2GyYxm8Bt2CF1F65gY7Jt8hWnLU5eKZ6xaw",
  "key14": "2y6jsmthRYd71nhitbnoMueLu13yZ2rmxzCfNEeeR9bKik7xVdBjWBxbYKMm87fRPLcVv6iB7NeCuf217ZuBQa1g",
  "key15": "UshZembsMJ1fLnuaB6fHZciEhjKEPKZdLGjMFSJqi2SE4tJXtd7G3egb3T2GnMXckw7xSQxhkzNCC2duEDVzjPL",
  "key16": "dp1iPGFrtbVZNUvb6A7vjLe4BZDWYYjz8PpoGUP6vqfrAPJUPN328pw9CxTKBuENWafa7ZDH8yPqfa2Yao6eBdm",
  "key17": "21fD6DDPfRJVcd4njWoBkfCJBcThXXibq3shUS8nNoJoJanpfRbEKJyCoFq6FK53QDLeh6PnoCCCenEZB7V3mdbD",
  "key18": "XuDb6nNn2tghP2rd1N3pVbjHKcdUCpDEeA2QHxWo8iEBzB4BxyTrroVWGdziL7oAdoWVUZJJyzLL2zqkVL8UNF1",
  "key19": "3BmoLkbRcCFeJ6KoEjsKVPj1Z1JZVPxbN9NdQZEVu72X3PHuFh5NAGujs3wWZKtReJvD3jYaN7m3aeq8rtGsKfmM",
  "key20": "65knwQzGW6aDKcQansj5zFsMHG2jgB6pWvi47vWNHupBRgW1PLFzWePEQNUvN5iLG7PLDWvsquMJUR7pT6J5NLui",
  "key21": "3X6NPMr7PrgLtfK9Fb4vWjTxPFg7xCtCMjeQgKFH7ZQ4GDXKx45n6fQdaFTyrUjYiKMBNxGXynegCC9DzaFdwcNw",
  "key22": "2zRGLDCc43WnZA2GgndV3oPLjvHXBUiT82DKGqCn7L5pveJ8JKPnzJG9rHht2WW4vU1yeLAuZ7kgxZbv7qVUQYaV",
  "key23": "KhkTEdtp39CnVi1j2gdNQgDEcoAvq93aYbPBGdA6EL66Wc2r1frcJ8MWcLRL1EGkVrAeryHhS17DEAWkH7uCacX",
  "key24": "5ByCfEAQpgYYmUcaixaycpAd78pFqsTmBXvcFprZ9ny2sw4kXuuQZEAkBE4jUEcEWgWwyWR9gyNUU3gbWnM8DRPs",
  "key25": "5o6Y3HdKckHRes7qk4fTmyxt4DvfS1MCA6hbbpzhdN3YSm6T7vDjuBji7DTgyPYNLE9EpyHxPcm3YSrknH7snKJ5",
  "key26": "5rzeFdz6ajuewXi8QT3oSuPqF4a24YFqMLgUgD3XxrwuZX7A8oXpE6NUb4Z8zj6jUePdpjSpViyuV4Q7pzmJ25MC",
  "key27": "5GT1fQQLYZJRJg6JdFo3S9sjp38UtTCrBcMDehVBsEUd9QwmdoCqrn5nM95MDfCqZ4KNBXatfHdWTkSFHs6FLnuq",
  "key28": "2oDqskuhntjwTu8QFnmkhz51tr8SVeqcc5ai8VMTSXpB5sezjHyR2sJRJLbC2MB33VhjdP4k6tTkF2aMqFiNNjf",
  "key29": "2gKUs549mgQUY5Q7tJU1jvcRzogwXNt76s3J637Gqn4uwhv7TtpkaysyhiGiSx1UCbnU7iVTXV1HyVrgzp91txpy",
  "key30": "4gGYicCeQcwtFtTTkg8ZpA6RtqXJso4n81UuDCwDzLDB8qKVmFoYh45cGL4MBs2nH5cZ7ck75wv9bdJftGzvS91Q",
  "key31": "4HgNAcWEz1TnikBfLZLv9w65J5NikwSbfNNvbpSB6XcwUKff4xUEyRuw5FqZcrK2rdRfDCsc98gmKhxkvMRbSvmn"
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
