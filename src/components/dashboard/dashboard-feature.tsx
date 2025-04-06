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
    "35A9URaqZj3jRT4EtSKa4BEbbPUWbumCaLzYZdygARvqNqzn3m98kda5uP2B1RakdiMdXAUMswbJmUddaa2GBWBh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9eah8cEfZxT1Rs8EEzztL9LNjqxZr4aGyMYKzFhJM18N72Ssuu3ore5nCUHgAD7raSM7oXC2oNpHP9Dr4vj2ZgW",
  "key1": "5iGgfkoRovhHjNo72hZRRmnvwkTaT7THLhAwKrTZUcVnqbQjUda2jErWJvLxJ3rwHsciQAo68X2bvCRkC5Vc8T63",
  "key2": "3pCH9Q2JNqueMgozP7KQN7wPuV2DkZ2xoDDfGTMnZMVnht63rmhFgodh6TsEqSd5jBa1VzZhHpMhefJg14ZCfaXo",
  "key3": "5TqCj4dWWxeF5gjz813RcL7oGuo1Vcjn3xeHt2b4CdkEp2QTeoVU3mjadHQ9ZgDc7EBittroDRwJTGK4vsGfYmGX",
  "key4": "bpy8UGdJJnvn3TLfw7ubUe6VEMZzVJX9BCmCsrppipAcZ6fs5NLPJx8nQfWxd11hPQgf343UhyH3Q1UfbECjp7c",
  "key5": "56prRFpCcpgZZUWhkDnJ7JjMgVrowCko41vzM7aBZKheZaXW9hR1UW8YvetonKqny7kEyeqh7nvHDRmJTGdiA17q",
  "key6": "2tSBKbeNNpyqYJpbhC7cfKyGxjFnFoBaLrMRZSKRdZ7fmeXqkjJLS7gvzyFuvnfVd66My6SLxQu6Qf8X1NkrZHXu",
  "key7": "3jRZj2mVcHqhMB1CFiny9scrZ1U3ygUxzdn9m4TtWBjyUZx8PmkTu1aqtvpYbffzn7dQisYwHzRUTgrUn5VQRWy",
  "key8": "5JPfYjqKrHrLNL9MifsJLEs7L9G89x6wG6fwykG3wDd74CuMZch6kNJuNFpwnjpfq1CSRRdDGLApnBtV6nC5ZYK6",
  "key9": "3eLsNvCNvTmeLVwGvUogjZ3caX5GeaBYWPGm9cDi32eYcctPTNDCGNfCcdMPhERpcMLxHM2L6fXHeuaPDcg3oTCZ",
  "key10": "4iuTm71W1Uut6JoDh8MPMqsCRaP2JiZ885zUaNy2VNRaQQ7UqrkHjZ4ZESypiMp9JJGSHcinzRunTt4k9chEVeEG",
  "key11": "4dhVPS9YJQ5by8UX3iu2iTehHMnx2SkYM8xN8VvNhdEcp4Pg3A59EU17AvPtemdZs7hnxC8KQAt4grWbe4yEdFCY",
  "key12": "pUgysxLPapoiKeyzTsqnmNqHGcfTaFtjwNEpdKsM2rTejtR42B6uQeEuPod239rUXMCMLwervL48YMDngPekfPD",
  "key13": "WyLWTBoe9acUWmMebABttmqf7zyb7i9eBQ1qn3rqXpafAwq3jTMDJQV5f3wnfMaea49hAdK131W2qAaiRFcjM42",
  "key14": "5tnvCeqNLEPoHaTzQTZBTBNm9ThbGDJfXSF6FPQUuPMCKboiBJrj2CLozd8gC76PsqHs7jikhDm2BGgUgNFaweLk",
  "key15": "66sBpf3oPLPBDtHUEETF9FF3CCrUhqVXFc5gJ4Sy3cSUAaHQUwQm7x29FNHjDKsrQTd2piYRmtRbixLBJ2VxvGbe",
  "key16": "b5JynrhUUVQLKwE4qebYXTSE23s8VeEzUTKfg5Ng9KUDRMgniMRZJietQhXRCQNFMXiC9uUrmtZdXrvLLRF16id",
  "key17": "4Kw2mfEMKFchmAoExmw3jmQUuZCkSqqusUUiJvDTiBcnAzwC5y9LjTt92A4n4wDArM95zot7uAPsx5RY9epgG9mx",
  "key18": "5fNonsAkdYn7i7aLqr4UC8H7EWu5teaAYQpbv6ohf5fLqbAgG7HkVQNxAB6UoZJCtEiUmH944FzJt9mocVFTN2xt",
  "key19": "gKfWeg7oksmgee14avKkJgSZCW7312kfnJWV2bbjP23xf2sPPcJHNLAZ4uVjHet597vgjN1FRjhapdMB8WqvkNF",
  "key20": "5i8UsAQo6iBRUcdAQ9WXfV5KUvBj26fz4JuEuFw4YeuLNqhcpG8BtjaLKGpsDz3Cd7AhHLtBSNzDnC2nGWDKZZZK",
  "key21": "cBDyqBACrxREZXvzpWZyxr9THEyuKhnduKxvePF572eL1F5BJiugS4PgYkinP6DA9eKT9Fs8xUVDeg2yKqxYXFN",
  "key22": "gtbhvhmQfVjcCkjjuGdevynjGekM1EJEq8AQB9229fGwEgx7MC8aU6LoDUC6Y38rVgD77VaHz5z7PBiWLH2ZoyB",
  "key23": "4Be5Dbpcy6W4LsNyh4BQLyUdz5K6gzU3NE4qVcuRT8wX4FrEvVyUGkTq2ppqmSDuaXxLRgvUyxMHRNj8QdLUPRub",
  "key24": "5YXbmkQJLVTFG6XS75HQ5rSmFyTutusvsuARmKNT2ijw3WamGR6ApK6JrgesxEeRwohYGjiTAfBHZPmcfasAA8EF",
  "key25": "5jArapKzfoGbYsaYzf28NQ8oygXUNuocY9cJtQqFq1mqSxto1H4Chw9GRN8ox4qBaZcrJXVtJSZAcU62JTMRGCst",
  "key26": "3obQxJ3D9Usb5wRupqNeDnGSX8bSqeaqUmt3V6vyPCDoWqZfks6hsUHrPyUXjL1MupAmPmLqKbZvXLcXJiPFE9BA",
  "key27": "aN5QENsTWB8gYHkjTbCRPr64fuHsiGuczV6X3x4a93J1HCuCdKq4bZLWzcS1ra7CXsTFmiyCmBATWkkPyt1e9Kn",
  "key28": "v5sHBCf1Jkz7d19pZQqRQBjh2HPfLgnA9MSgwJNJoqB1QpYnmkjZ9ZgxbLoa2KXY2JVgZPr6wa4DmnqticEYKLG",
  "key29": "4yEPwHajzEA2isdTARZowPbvzNsH1sbgM9rys6jMw6Ldr2uAGXzGgB2jJkYHrjR13n9cdtHCduqtkzNg5e3CFipj",
  "key30": "fmwPiEgRb15zX2eFaTDKazA5vcdHXHFyVHiX9Bn5b7APKeni1CXujnsMY6Yq5HdNQ7U1APmx3WfJfhdgw4QiMFg",
  "key31": "2hm9ArpQBjPPohN956tdWZgZWqzYagig3fUYYrFPqw1Jvu3z3WxkvD1qhPHTdE4mP7RE567ECntytsxpMciQ392S",
  "key32": "5UCwMH2iBn9HED8eFkpkVRX6KL12kayPV2uSxY2eRvM4DAB3yipjoD1Gz4862tcAnb7Sc6RsKsvCBEwptEttmRaJ",
  "key33": "2VB9Bvu95KByfEmHdu7BXAwGtD2V4YumvT695uAdFpjUzoWXVmVh4NN5VbxK8nR2Znxfejvf7AJtaYLyZDeVFMKa",
  "key34": "5rySaZiygSn3acNissheBnALeosuAHTztnw36Fb9CFkCzKP9N7WrUkuJ7HdL3TQGAdAf88NRmPF9LtaUbn97rCb3"
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
