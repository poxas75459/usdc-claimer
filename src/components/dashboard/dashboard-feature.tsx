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
    "4jYr22ovSfVETNYtfpdNNXe5fFbJcumQYvWsMb9aqDgFt5vBTntNgM4jf2iF4f6RZqZWX1osQ3DwWY2XbDJxbrPY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jXdYD39G3fv4EQM8myeeNm2iyc7aC5tPN5bC8iVahJP4nrniMsytGBxdcLpEFq5NzetDUjpr3MW1jGwDMuedpDe",
  "key1": "4xRewiaGXamVHvES1h7Jj5SQmJYSs69uUFKSwafCKZRm5RuFgch9u5n3t1aHWv3qgYcf6bzVG5fnSGEH5Mc14jJ4",
  "key2": "26YqXMTr2yn5pqnjZVjKbinoPFL9TaDAX3hLN1CyU9ZRmemjKAfgSxP6go2wgV41139TZF5giuMjYeSHVmhZXPq1",
  "key3": "2NLdLAxAcKNhUEqTR4BUkTifpQUcK7QhXRswumQXztNuAHeK633mCAXfSLaMt47YSvakcf99cpmyS7axhqF1SZSr",
  "key4": "4eZJS8ykiF6ebkZZXDpsGggeKECv8SGwVPnuwVQyLmXdHv2phymuMqq8ckksVvdhagkqYxwLKd6SW9hGa12fcgpL",
  "key5": "3vcGqWbvviE3FoyKw2BVKVmxtxJbCiopahJtRy4V6puufHwm1tFbdj36ohU1yL4f9gugApJEjZSviCLty4ZqUicN",
  "key6": "2vFKvqomTgXohAFaoP3Yhm2urHXBKrUkzdSFj5sDnXTYPouJuM2heX1F8oBmnuGLaJBLkXX7rhdTe8GmwqsT1Mqg",
  "key7": "45CxFwjZsXgpM3UnBytY2azpmJ39BR9GB1RVEhiQwm6Dy4E4GQ24eM71upZVe5mYNXGVm1sDJqN5PPSL42KZwiTv",
  "key8": "2bvq1fiQApvB4FEKzmjwEXowRSy3ZSpVmBtVtBg8HkspLxsbpN4HHL2aGXgKCBHLtTMSRW5efbx4azb2Nqvk2tAt",
  "key9": "3wARujRpWqUCC9HvRQ5sPacZvxUKxwrhxDFQvvaVD5uyhEtSD7UBSBtUV5bjjd7nwTX1QzyeE58kZuPpS37VvbPB",
  "key10": "5xdVfye1hr3cEFPkpp8P6vv3fSYLoYLaBakiGcGoVjWwDxY3FbUmk7ZrYhQ3Wx5yENkrwiMx62ft8xUqjWDWxaWs",
  "key11": "2woAPR4toLnpyeTNuCnkp9etA2atBhLvHBAFcjARDZdeJ9XrfrchBA1UPCRq8EVdp8ZDXocD9ZKA1AkRyGzPAqon",
  "key12": "2ge5PP5VFyvrAVuACefDmYVf8rq3PDnHWU7voTYtnAUKH4ARFx5WZJzarygNeiwygwkLZNEHyZ3EcR2P1dcBdkj2",
  "key13": "4k7vQqhMDScBVo52r6oMqzHiFuVfEn56Qvk2rLpfSnHRiHXwKhGNrP4LMf8nZBUdj2dXFsdVbojzY6Yq41EETmsG",
  "key14": "3CYTu2UAGy92Ty4gMGBbZAjqqKsz7qvargFktXhgHGiJPg1y4MQZq8waFFRgG4fe8ENZy4Zcy2uVCY9fy5bC3ojY",
  "key15": "PRgbKyXwhjjdZgupcLGvgFqdmWcK6vLawjYSmNgqnEgk9853EoHNUaRwELGxU23gra9ggDoqVruBxGUSqb3eSyh",
  "key16": "48ZJETizoA6eECe2M3jR9xKX1eop7BQUbcFU7WcNWx5FohTXQBE1HBdwgeNu4zKH6HHkZ2ntjd7bFrr6uYjQcQVF",
  "key17": "4VoV5R4S1rVVyUBVQLwkwmSTxPHfucwuc5eGV2QkcHcNY9yzfCLPBN9ECzvGZx6bXkLeYVYYDVENhVzoHnhYRsdS",
  "key18": "5TX3SYVWGXjNqiVJNuW7AEE3LyuvSS8CNrL2Chz2usuFRRkWrnWjx2kCtQM1oHaXCLjdKbAtNXuzDDRMVhjZpK6a",
  "key19": "eM4eFT44mi3UYa6EAFr2ZMBYQRDs2EdsjpKR8LAoNthXy3ayNPoZRvZduNtgTQ9tqgMfGZjUrrWo77hLNFxLKsR",
  "key20": "3vSXKGAmkdCUE2Y4bh1WRoqJCHQDEoGatNG4VFfEHxTeTmKzbqLynXNuwMsQW2FUc1ZN7nurHjrLnWnJ1qFZsTUP",
  "key21": "5fVs4U6hSF4CcZuGN1cqzabeP7r462oX43TBppVNUAodnahDdUhpkjkTrD7UpM5KhDoMP8eLD7SqWnMptFwBWPsa",
  "key22": "2m5nuZDnB1ZEvG9Xdu9EMPipQNedSvCoM34BtefhYhvdFdac8BSogVaAdvnYytXLo8c8FERBYdRnuFT1n9CE2e6y",
  "key23": "5PnZBACpARdkErTpJ2jLiwQaAPeae2Y9XfyFL5ET16y6JD59yPVRW7nxpE3SKGXmHWznYxuVu5UJZTnicnZsRQ93",
  "key24": "5ajYS3uFv2A8TjMLq22JuW1HmDhjp22cD26WbtdGz1S2QnkS3ZD2R5FMWxnvk7fQ1ieGvDDBx6A4D139hyGNY2H5",
  "key25": "4CUZ6Me7GVuwCfdtp3f7G3E6928NvxF23bFDHfZJrVUJJaQmezZ35hBZ9ju6kV7vb3L5oWTdeNDkUmZrdiKPPy5g",
  "key26": "7dgWwWDcXSqnZo6h46W833aDedo8YJTuWKXugQtDDf3fWC2UTPZ7CMjaRq5BRwErYQrX9CaWpxM7SsHJjx64FrS",
  "key27": "3bqXFWUx4ncRmG5VbdWuCKLZaYZH7QnGFGZgyi5dTn4Gc6H14kEyt4ndp1aYGaK4XDQ27zC9tJnWUF1VjbURiuoX",
  "key28": "58YTVyPGgGLzWLeXTuPuqmxCZ3E6kWZ4CtfgMowDz1MPj5SgXmvhu6k18Fw1oeKu6zz3E9bWWLZsYdir51G7kSzB",
  "key29": "5UyJx4fx9PS74eZ7wKEHwBPb11Cvt9YcZCq5S3U24SME6onFVxZjNpPK26UJakVjsmVcbew1yxFysSV76Tz553zK",
  "key30": "4xgjCiAx5yiauLe3bAaJfpFGdDHgaswGPHrtE9R5oY1L73qNgLFVRkNjX5UxAoZWFbPM5AV7vhNK1386p5mG92mY",
  "key31": "2LKJu5upmnRikFSgTTZ61Ta9Z2QdLpLLZ3esR6NCgcwkUZ1fvSQnsnuxkETg2pM6AYzJPkUqCLGpDhPGPxN383N7",
  "key32": "3NvJAs3XPQjKfZ95FkzPkM8rU8UfVhL3ajiQpiPREHbHwv6ojRfvNdCHKzymCGqfNgUpAJFGkZGXu4fgvaREaqpg",
  "key33": "gHS7S8cAh3cV5m6tBWJ5kQ3ocBetSwp17iNcEnZLJoRWqnDwYwX5YX6TrxGfmBSS3nBhytHNd14QHxHmdcFRBh6",
  "key34": "BPQAY3Zj561vrvbScDpSy71KVKUFPpzZK1cvHETCCau978EJk69TxhxeQ2tCzvrMCAEazTWhwEmxLrkQQua2dyn",
  "key35": "zCEwxXrfB5MwUBX9bvmpQvFtThrsrtZHuCCL6M9R7dBLZQ1pdLfbqbLvHSd4q6mscjzauxaCBSxEobPFMB7TD8C",
  "key36": "3T4x1cYmEUgPJLGug8mh6GPmguhARVPRPmGk27sxUUx4v9k8podLVAohez8xUC8Wk3f5igpCKbw1BR3G32JjuK1w",
  "key37": "UTkYmse9CS9V7domiX7DWYb2Pveg2zPw5AoCFiz3AZvuhEgsQWiPog8gLCFhAAN8NacEF5NRL8NyE6KQa6Y9mW5",
  "key38": "3NB8QTf4pUSSjAWTAw16SzPyYGNVRuFGupdw513pHxiYfATmHvsPNktfRNwX5P2FBTtcTTUKj7EmhGTqkkMNNNMe",
  "key39": "DDVcqNF3nDZtGujv7cVN9Djmi76b2fWe4XsbfWbSVN9MtctZqCPKaZviFZFZMVJ84xKJehKHnVrxU1fL7vvxm4k",
  "key40": "2oMBDdUfstGq5hQAUiTTWWcy3GcdpwKHWLGwqhmWGsupBr44Ydz19gwH8hAvtvCnApzJ6kRahiTZPCBv5ZqvQPED",
  "key41": "4dLwkRRk4EuYnrwhBiLh717Q3MCbxUnGxbKi4FGYjyxdzgLexk4pRyyNY9KzQFw4k8PEvwasnLLoo4J8SfYCvRsv",
  "key42": "25BZ7RRqCCk6mzcpk9pCX9xfTW9JdEy96yoSXyMEQ6hjyRKjcQsH2pcZpeqLxTmJVnPNkdhzR9DfgpUtSDpFRN5g",
  "key43": "5AUspw2v7sBK4pnfhzfZmqcQTaR58fHu1w5giEDCKZa66dopjaaHFm3CD2Ld3B6CMTJcdyJgE1Y4eFYuSExhwCwr",
  "key44": "5pyeEjENWpq357HfGuo8y4JyRYFUETBPveRmeUx2g2ZZJqhBtKFQykZQxext64BNavgJ6gwaEEg4VHY64Yhzw9j6",
  "key45": "ixZGSBTZykLfyP1TWHaBcMCSuyX8myesjEqnMeAh6UjRX2zzthyvpwzmBHKxsAAvcAVem8h3R3ttLV6osQGjMXb",
  "key46": "4HcYHYVhttjrcaG9cgMM1LxaQN2pQMdfG7iFqNykpa2KfbPnWhfC8Z6E5bdMWmNNqBn6vxA2xiPBmJtBx2VSTEkY",
  "key47": "2KFwzAPvTQXaN5Em59y9PcttoUA3rnCXervuAxaD4f3XG1eeQtZ6tPZxFRA4wZNa6KR4n49zvU6Qj35Ygu51rS8w"
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
