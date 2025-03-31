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
    "4NfbNdKjKcJBdZ6Vgf18MEbPiL4oLkTLkuhDKbz2eVQKuFfZD1TvNQKfwNtwxxRxZ1dXvS876EtYbawngg7e8QxV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uHwqoz9Ab9pqKHw4TbEnTXnevZ964Vg11Q41gssMudBAFNjAHzn3rWXdnnADwtCJWDG2hvd4fj6gz98N9YUYYep",
  "key1": "5iBmYBNFns4CQ7Gem3ah6zqmfZApUG3WT5aVLFXVaVRmxaFEqZqCEmZdEsibTVNDmDk9kdNbPJpaLsGT94oWkh1h",
  "key2": "5QV5sJFCuvZnD7iaYiXHSyYf39im8mNfTyb9hzvNbUohYprQfJNBNjEgCsGC1RtAuY2bv62tacmMFK3fo7aXCVbu",
  "key3": "57WLiEnv3pw45nWD3fM9JpPDJaEj3myvQBCGbkSskFgn3TArjXaTGDHYUuYS9GsVngum1FxktcLSxRpcUmenrx9x",
  "key4": "2ct5yMzVdNiWQ8EiniQQTA5ob43JwBTiyxhTDV5i4pTUqtTC71mAhDTHs9s25eQmuRV3vApZx2k2KcQFfGqaRt6Z",
  "key5": "5FDuaN1hQvWx4d33V8y4uPcepN1kteS62Z2z9Wwaw7G6ogpoGJbTTKowWg4YXnHsqmVspeM7xtYknXsLJZr1Ued3",
  "key6": "2zzEyS25SL5u4eUv79UZHEhLZP4sapwLTCr7hhaHdC5eEgaRxxSbwrkKrVTeG6a34Z23tQMx4DrRy4Ayuix8iK1B",
  "key7": "4SPm3qhzNFoQec6ap6s6Zw9i7wwKJwc3RcFrxkgrQ8Taf1aiprLKhNzsRUR5xhvXNXQNz5w61tnfrsRYAT1s6ho",
  "key8": "31abac7j44Q9WDgbn8CXqANVNT2FdhfMhbJcXJa4V3c3Ttc4VEXYpKtpZELAUFxybEJ8GAGDZCCPtJteQWiGpRyz",
  "key9": "2t9S2XCbRNrum76Nui8Rx2qatqMGyLUdUwc45oKDVqjZ9sLsbx9YhHUEJ24Lktwnzhvohmaz48cX8P485eUZreEr",
  "key10": "5teMfwAooqFrUCT1ojJ9cvNhtsbJPMpvhuCkkuYx5g4j2Ww9Phio5EtknyBEKR8Cp6RpCBJdtaZFagz4p2DMJ6xz",
  "key11": "5bQSA8KcNfUhNs9gmn6avffJQYS5CUc3vYvvac9jgf97RHq9vAkY2vaE5Z32Pmsf86cdhTxWnoU7rrhedJYkrGGR",
  "key12": "j3bQ7xUHhFo151GM1fd8ttcSvKC7322fFmRYBzmfVL5bbU7DgjcfN7vtni6vb4tXG3iF4r42imXySmzjUX9yWrx",
  "key13": "5TCJKubVCw67nUuRzUSMwZAmVrVfobPnZjGcNiSDeFj2PxRfmS3VPejpVLZiX4rA5oC6jBeUN5cQhAcLpk5ePkwp",
  "key14": "5MKo22H5Pm4MkhbGZEcgmhDs6xN1UuNcuj15XYc4fjfPE2w1mAb2FF6VMrsMFDFSaY9UC6H5ECnWbK5xXcyruUH9",
  "key15": "VajLmub2q2vbALbRKZRMi2gNgDxGk8UFdFouCVRqLauUYPikXxKZ9zRgzwnojdVzWLWcHDJiq7MTpG1XP9m45zh",
  "key16": "baS5tv9nxNPdzpYffMYyV3F7UEvXwF122q5KgEDpJmVCtfs66vyMLnzeZk8fFBL5WGYYd1UYVJ9XQA3zAhEgR8o",
  "key17": "4zoKPGBdEFYsK3kfWu7FA2vRyFMQ2aiFtDguntGDXk8WqEpNuXuwxZLm8biXSGp7SnKGjJ7GKHi78cif9ToMeaXd",
  "key18": "5p4PKuVSpMV2ksPcUpLGDHfohgNhTMciCJGvv3jP5uLdkE3KS4BytBs55xUAmgMFsPm1U7Gr7uFQukJsoPpnwJxY",
  "key19": "5YX8H2fyNpT2pBS7RbZfzm26a8m9X12tPFQekYhdJv4dDYejrmrZpTwt6EJpfVrSnYNdg4HxT5kcm19rxgcQriu6",
  "key20": "3jUzm5y9LhjavLMF8h7K77bkAeqPWQ6NxRHSR4D3i14fBNzN2apmg7wUdSmurktov1FoDvbuKCWeog8QjsMScMRX",
  "key21": "Pkpg2nYyg2w2Swypc1vV6sHe6oiWd9YoAQc71aYPYzbnWMfn21CEe9goR3wz2dSvsm2fBLrffTSBGvxUnm5nB1q",
  "key22": "3W3m2Dje637QbPnB9LoEuSC1EaeJCaEJB6ij1MGu1Z3YnvQpEJDBepzQAZbR9Ry4DEVRwb1ReV54ZgWvGsx8v1d4",
  "key23": "38fP7Myg3xnqzgbW2pkvG5GDtLefZQx1CoKw5MRSkT6wkdxkkdPTneqR4qUkD3NUp4k5UMLAEvb4xjbLcpcwAT4a",
  "key24": "2mBGMNVsQfBi11fP3dtmWHKm9PYwjeE93W93fq6KxWfyvetUxhyBku5CeDRwXEfFc7yq7kVY6U1vMcyWDLfb4g9y",
  "key25": "FGKgMu67jumjCywJ3gtgTfnL6oYNRYVxpF2YpWnCAyxx7dUGk4hPLf1Q68vMah8KEjVvNGLPksqtRSJXSuR7vVY",
  "key26": "2mVLG5hsbHViBDb4ciBusyn7LHabiqSdRLPFKExypHwFk1yagkzr4ea2Ux7asGCMoQThjTfdL5ERXFVELXBtXyNn",
  "key27": "4ZweUmMHKJNsapUqfmYgBv8F1hf1tXS28MkB6hrxfQ2MVBCqMkBZwN2KpE13zkpYvAyJtpjtXnVcagaREjd7DZMo",
  "key28": "5nL8XnTggzRBzSLotHJatkcMNwEPWMBCrbKqBd44ni8MKjBkFkfLTPi5KSVgCbpqbnKTCc6FCsyUMM9XPN3KYShn",
  "key29": "PSknJ92Jto72MovqeiaxGxHfmvE853R3XpVN4WY5zJUy6niBFKif8U99wzPFKHJwnEcG46PaYqZK99AL1DMUUQK",
  "key30": "66WFyziXvvW52g4J49jLaeMHZHLRnssMfqbFauVx8Nbpd5WoxGXM7zFy71bMfuohZqG3fFidfUTLoFNp6yrBA8aZ",
  "key31": "2CrrKbTqH6GSQSGYVNAd1iQhJgJDuCB84B6yLV6W65WCNyL22jfyurZPtGo8zSH1sAWt6U47Lg67D8WbqzQ4EmS3",
  "key32": "2keonoyyDEateHehjSmBSqKnPeCQuxxJZqQSL1UPkbB6toiJsc1gG3wrwm92GmU6jPjezXL1To5mnhNXfEvrCecF",
  "key33": "3FWWkH6raTrCzrdkJE6QnevZWQKx9XCvXm9Rq4nZh7s87AZDij2UMTsQzGvoa5ajy3sDuKBMxJ1YhHSZprbUh3ZC",
  "key34": "2gxFrfaFsY9TrhMd8Qq9B7rzQRG5iGWQSrhUnNNAzEzW5z3ywi3WYbT8RPB8NTGh3uV7Xs9NENBtjqrhUyub9eJH",
  "key35": "3y54cfkGn23N1ytJnBV5kg1ugceh5A9kGJW5P8CbR112W52Pr2prh9hHckhh1yYPZnmFnKsucnMeTFQ35e8CE297",
  "key36": "2wGHMxF2HmzxY44NQ3Vva4fdcyUpw3dBYN5vawWenuNLnHwBmjmRweBbHzMR365smq3HX1gEgnVoAm7Gna1mBa36",
  "key37": "46pVZFbejYeZo3iSummtqcubeAU4M1EAMssNVY8BPjmMpP4jWwJJHpiMdGdcrM6TLcaznJg9u3wLoYXLKWhT8GKn",
  "key38": "32fdATpLo3adRvchcRHiRuXJxJWpBjHdD4ThCo4s7tPLDV1MNfGP8w9H6yKaBSLpoTNvW3Ajmrdc1q7eeKUEyvWB",
  "key39": "SNyi7jgtf25somP1sUQiCFEBQUZm3LD2K3fNJRcQ5RDZQYC2HcmxidKBKy3TG6CPBpaia6TjzPw3LnBTNzDKvuo",
  "key40": "3jsbKJJmoEWGzJj8tmx5N3hpJu7SQwDcTt8sDh7TnUp6uyrp7f5tEEVBKFZDWAiqkSfKZfnV8vpQny5fSsd4hJG8",
  "key41": "4mszgQ6RoZtxV1zabGqQGVhQCB5DTKEPEnNDH8b8GijNC2YXspQWKJrYPLYcScTCGTiX27XbqSszDySkNhhFxLKp",
  "key42": "44vqm1AN4eQCkRyRyjJHtjyVaZEcxWQAQh5kn7dCFL6z3CSEaWvm21ftfJoFG8pdEajFpgUiCPTsmFRL2L2SZaMk"
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
