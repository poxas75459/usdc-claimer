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
    "4q4SpgEvagoqX7By52iZGJaYFcRCJP4DkveByDra1pCM7sGL4prWDmrWLmkUmL32xU3DGnQcXC1TFV8CzenrQC9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ehPtHPmvWGjiYQ1R8hRdy2XJKTT582nL9Lcwt4aLceUSMC6UGg7fpqGPivPEk6bujc6NVtS9J8NRULMhVfE2Ho6",
  "key1": "2ACwVKuWHMfz5YeEiVr1ui2JToJnzNLBErwqUZKmbacGqH9vrknAjJSAMrsFeSLa8ChVVgxMR6CwV4d3ZfeDzQuW",
  "key2": "4hCCFBCfz3ARJ44zuc59VAwqzUzYjmaaLp3BawABXW4k2UsyNPd2yaj6vm2Mk27MMaSN8pwe2xupTbBPk73AMEWR",
  "key3": "3ghSWtNtW34tXkaiNebLYwtN61JKoxm4CkZh6cNU19MU2Ek7Y8Byxx9Fo9rDBSpftDyJUStioFskBAYECpVrckED",
  "key4": "4oWfbAYfZD4nXzRZzdvbBMvhFWWeeJx5Rqd8pYY7RrucNJX1WbAFkror4TDMhBVHnfzSN1aSGKV2LFfoBhwRVy4q",
  "key5": "43bgpZynb9HT53zSqQ9LcaVCUjf24sVfn39RVRsAGTqW2bGdmf12K3BzUbu2SczQKLcoUGcoM6aGMGpSL1ccybLb",
  "key6": "PStxmX3LV1htpK9tUDPitHk2YGu1niagUQjjo4CdopwCUD8k1P6C33raku85aYPbuCzruHG9LBrBYtiqxwcfEqc",
  "key7": "wQjJGtbXhL56csuRD5Q8cgKj2z55UGa691zUBC14z5Xzqy39Bzku5bWHgrY7zG34K14TfhDzs84VCW5bzWMWgza",
  "key8": "5ofBMxU8nQhPruBCYSB47aWBiFmmGaRMaNrohL48ZxUPSoEekDqeqkRpXFkmadqXT2YxF1qdE9mr7crpR3risw2E",
  "key9": "2ACpg2NMQUg8uwEBKuCmspZifc2uYP6twJnkLTUgzpM8rN8rAEF8MhXf2a6c2AGY1mQ3RFB3qP2sdA1vD1MwLKwn",
  "key10": "27un6SsDcFfHTFMkUu1RkrSyKNDAkQmttMXZ8jWCzLzj8WyLqGjUsWDMnsLyq94zwdHB9EzbMyhgz8kDwgRVYU9S",
  "key11": "RUmDTdqm5tVoQPg8d6tyAzcUCtM7ADTTQtsY8qyfAxWLd78TUnujdEWysLwCPN81pjFkJgrgXssfCyh19ppjwyi",
  "key12": "2j3g7r2xhXNn52XvgW6KD7f5VJPGyEt5gN4ztqDKT9iHiHFgLGrPaA1TZ4F5ZK5EE2dWBtUnnux3tZWXCKmJWvSY",
  "key13": "65xRCLSPHPvYVEC5uDAiHXVe9AnCxGtBcmhLj6tBjoES77b5jn4wbvj1C2ivezRimc37BPgp4gZvrjEGbzdiCsvL",
  "key14": "2U5rNAWdfBnDuwcJKfQr59N8B1GRCbyJ9HmB8DDpQ1Q59xWcgGUdnyZSoNdjkQKDjb9Uv1d7Ngh1XE68fndkFkQu",
  "key15": "4eZS41Q31vC71ncVRtXt3eYaXGFC7oaHNfkKK5ZqPHoMKf97tdk61LJyr8xkqLcC4Rt5NhTWQEwUj7ATeeMMLo77",
  "key16": "4yaRXioAZo96rCLfipRzyjuiDp1X1rwn8QFn8j6brVCPpRm6nETvoaur8euX8YmjqxLgCfRYkt5TyBSWF6ETVdEW",
  "key17": "5opi78S9ESwxoNDfa5VVb9kw8fAvUBqFkuJ7QWDxYNp6pw9Tb7jMHAoH69NkCB7FACRznqWBe8dnfLSYt2VLSUSy",
  "key18": "4dQbeQM8jBnahWhMfQDzAzvfNekFPdcP1mhSSLCJpjtQi9GhDMUygNFWrTgVHdRqs16Ts2nqvpfBbr8WTTZGLr7k",
  "key19": "oTxvUADGvaG6ckP9K46onNvTkx24nhcMjkjZwCeQNLmQNdtVGZdsVQpHcVoRu368iWcm7GjgLn7gexmKh9WfkDt",
  "key20": "ntaE69mAcPMNpxbDcnEvaxHD2mBXytEWiY5xSDJ5Wrj4cPhi2C8PtccDF7pfoyTfcvstRtHho4HsJAVvdkXbnMN",
  "key21": "2i4W4rubbrAeEvDaWCbuJ5a6EvHaKKcyDmfoYUJCLVLTW3NMswutkrWEirKpU5NPTxG74qq7iiuqVTP7MEE7r3ek",
  "key22": "tR2QZfBKD3ENjUhTrU34NRAqqRGWyRorNAZgtNFHyVhwTQubZ444sniiTwoAYtdZNTAn7ksC1PEjBW9eTwCSZjD",
  "key23": "2K8fWwog4L3ykUrHHX6v3CTWfAqzX8NemdmVpnEadsASExUMTANvJZ1HaXiH2hEmbfKFPverGV4iJZzgDkW3M3g6",
  "key24": "u1hJbAVTGtGVQzvd5uirxLSrxinounx5Zq3Ec2qxyFgaVbwUFFpvwCjanituFczzqDvCaQrK3KazPtX4R7ABV9k",
  "key25": "4yVdHgmzL4bU3N5EunMKZoqPARwN8EpdgNKp9bwTcdQcQHedpUT1iDZ91mCpS9HRbDzXxTJhcprdTv8SPHTR584X",
  "key26": "4owRBqm3VwtEuLsPDxSQVCim7XCV3Hgz8TSLgQvBMMUNrnK7K9qtdemRxKwqKvBoCivJ1AEjofmbQCLmW1HHYBEW",
  "key27": "3NAuW8dm3bi8psSSDWivAq8w5v8xtdhHrCcuQdaP4PSzUKSNtfe51TcUjLh4L9uhoLz3BzHYvQnrewys51cjnqFx",
  "key28": "RrbqNzuDK9p8FLDtwJ3YHgwHgSEtDJyEmRzrTB7iwCvdvWBVMEZEBCSWVNCmMUhbZCp7Ye19c1MNYVgTtwNeCeV",
  "key29": "3B4gwnodUbBPQs5GqSbE4c4TkjGsDmjAZdydXk44nsAHvXTxBC679dsTNvRzkfMs6ZHmACt8AxTofQwCadExcZPt",
  "key30": "4GRdjgLrNtbRdJufxy3rbPtbxsEqG1qUqK3gQgp75k6LjGrFyhdpVW3vW4YfrPTwsJXQZYEEY7dRUnNsGQxoBhM7",
  "key31": "4GiptpwEowNCznMBWuxbYxpvhxqiXwZEstCL6c2q1o1TLP5CUjy4Aj5HrfVjfJovYGCMS5FqAhc3excgkxRus9mJ",
  "key32": "3QmXX3b71DZvpvfpXhLFzG97CAYi4DDLpsW6KpVKTnS3dwXsW3zunhnaAKn1HQMbYxhvrYkDHUPNkE6UQ45TbUUp",
  "key33": "37b7WrPjfGsJQ3aivVxyaHknDy6Vgvg8RbvSZiKryoWu7qmYsTa7HCLCzctq8af7EM1kVG6Y591NrhhniZEYaJB7",
  "key34": "2w8oQijA9G7Jn3kfQLnxLLb33RDPGh1BX5Kvo2ntnuePWZjvQg43sKCPE46zSGWwMyi2Q6TH3YrJ3tViYc2cTKfK",
  "key35": "5LRDziWMgir9WGZHiMvjVTV8kXS4GYGbcPAVaFmy3zANGWojssjfaPttMzr6TWFnpqxvTjDSKtp5sU1MtpBeUzcg",
  "key36": "2ee2g1wAvViYzzB16mzHb2JRZvp53t9HKzoPJ7H5t1r2KwxjLD55SrVHcEYGU2CLM8o5MTxPwWAtaJkbxF8BXLXY",
  "key37": "49Qg9iqeD5nmyxpdtufTeAo3sqGE8NVyPPEbMzB4ekNBhgGoLz2k7uRaSCSnbWcmbT34tkw6n3L4y674GsK3HLLu"
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
