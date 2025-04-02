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
    "YWMDp1K6jckPSRGapv8JHQJqijpAianER9FSgpEHwWgZeJi7r87Kjo1bdWW4SDQTKqnXPYJKmiWycsiUDAV5XVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dyQbsEfN3tEyBfgUA2C9C6r1adUCKtKeBxsij5ggJ8DVNgj665JszyXF53DTy9RW8BoeeEDEbK3JrKzoue9ANcB",
  "key1": "4x8D16Jn7tuPLpijpbyU8Q9pcuheTda1GHZusqTN48ey8kTC85iEcC8tEDicAT5faMhQ81hc36M81VatyMyN6UM1",
  "key2": "2yXAeJFecYv2QoKvNQbonmjVEhKhrzTVpm2iZGjfQzJbL533KLVSCLttHzx6Pko1sNAxGcCnq6JBYD18Grunct62",
  "key3": "5ndkZ9Zs6nmgLwG7KKaEfC5Gd3UDVnbnHGyKHRR8kMArCXphV7Hpj1RNsbNw2kaS2pqFpe2NASHqinsBAkPvFsUd",
  "key4": "5zj5Y5izeQk4yaAw3hesL1Cb2X1uR1itN3e2bpR1U8N4zdWwKMMwzdqFA17i1vPYj5NLM95qvE7oVLaUG9XdcKLt",
  "key5": "4mBgW88XjLUNxx8Y3obHT55WY1LfMpDVeTDnCAfFWcFA7tPZCeHQPeqv3DsX2KKwombcaWjuxSacU7nzEP7GrmKN",
  "key6": "PtygTXQF68EofaRStysY4xZ8hJnG4he1esfCYGj1DhQtSqgmGWYrPWLCn2Sve94BdTdr35ZshNNonjc6fNcbLvL",
  "key7": "2TCAQFfTazuFKdM4mwPnUwcci1ryRRiEVrSrvbqaJFb4mqB9mpzhbpYtUmtrnYVYGBftLpsPWp7wn4KYfbHYTZ3A",
  "key8": "2D2Pq3x85NkngRf26PSRCqu3bvG7h44kCGKkQt5npgeMinawKJ69xPeuqyrQCKVghgWp6Emi5bmdwxPNxyVqfur8",
  "key9": "2kxZkG43H8ExRHTHSdDuvCdnq86zAB4zKRfPzw5bh8zqZfG1Qv9pAecdUkK21Ns2EArn2AKHQKkBN4Pp5CoxG2SN",
  "key10": "5Gf3dGLGkgYb2FDxrdJAhizSzSbyyzsKYwDHo9aR2w61FS5s7ntwFE9MgryGNBLozP1okGiS7GQtHCBdVigKagr",
  "key11": "5SSkE4U9LCuAszJBvG5cfpRn2qE3X1KzfPcthpxTsc2DMCBFaB43PTd91iG1RsjG3aynz9bdLnZ81fx9Bw7NPJmu",
  "key12": "5KAgvjFHuuTADQCeVPDoHMBPiDANiFdxEA4QjBS5gm6uyg24wxumxpz4922RJhxcn8CmQmJK33RV4H64cx4yu1mY",
  "key13": "2hqCC68Y7Ddubr5Jihc86ftzDSSiooLXHT1RzgRQjkqX1CPRGeF3pmeDoWt1dwMSMRxFAY25fMyFLcXs3iJ7KLTM",
  "key14": "5E5bHtVbwNSxi2XpoQbzKAMKUgQvbuYhpaT63ckaLVNSU4hYTp6yMu5JcFiGYxCUvpVfECABj2AifLZxFenromUU",
  "key15": "4i57Dz7DWWj7ERQD8hUd77Bt4hAKHsYPEqSwxgMHnMTXh1im9HwUjzxifr7kg8EeR1aiq2b2L8ZDVVXKKdTWkc2M",
  "key16": "4eYijT7jrj68wwre9skKpvkXUATsMZaDCrQ2vpLWrHwNUQ57LWA1ZuXQgYqaVhqoSu85tmT1JEveguQpoXjUbSPr",
  "key17": "tS5d97o6GETodkCmg2B9iWdhThDQJiWEtHcT3e7Xjgot3kqEDhfR9NeApXGxLywUqLP2puVfshndc75u1whB5sG",
  "key18": "4WfWzNL4GdzAeSsymWM144GQnSxdvd9gAiXXEShdRUdbMs6du5jzpzfR65Z6ya6pp3AGZhfY3QY4UWQJ26Jsxt8K",
  "key19": "2HyGym87xNVC3kAEHygrxzLT1RsphE71DyWK3nyvjRyGTSYiQsrPauBRZz4V6T5mAfufk2YTevUVPhxRkPEJGdXA",
  "key20": "5x6m4ExaTBbD94JpbEHibDnWHxhxzcWWKJ1RMZbSoyi1WgZ8uAdeJfjZcCTNUa9YrPejuQ19mbfLkDyaEHLtXdu2",
  "key21": "48YCdT84Y81sXxHUaAXQsv2eYpihEv72i4UGec1yxhnkheiURPB5PYaLgxCaBqtCrBWfcbiL4gBs3jhosoWDuBgZ",
  "key22": "2XnzsWPYc7bmCBFr2qKkn9xQq84Q4y1HR2LmnGL6xfvZCmrRkD6rJ5fekEEBdRix4tT7SzsMWQJejzqJQ9g5TZug",
  "key23": "2AwGYs5eh4jUE7citPNeRCZFUbnBdB56DDEe3HkRqcDRZVAipMhYFTeb2KNjwfMXfMAksJxoVvRSHkdtYw68rTYX",
  "key24": "jDoLwsrwWSEwLdw8qXwNAprwcM1gE8q69G3DEk44t9kAJ3oxRoHEgRkSVFNrKa6rFnEtCPTNuNM9VAEgaPZpww5",
  "key25": "oA6xvHWKL5gCpQCetYCD928AG52pHXoevcqctzNAmQ5pzng7kBnfBUkYwPmMTK4bfcwduxYwcaUxMJ8fWU1LhCt",
  "key26": "5gPffaNWEAeAULgYoaeQRNgQ8bPsWd8t7rJqtZkBDXe4phzUYuM9opM6hQfPKJ1PBfVc18qVdSDw8cp9arc3BGrZ",
  "key27": "bcjcdamNkg8wbdrsRQdrKYN4hTTUUFjYC1XY5Dkswt96NDwqPx8WWJyyMiQtp6bAWk1XzRTgdeRLkGCe6PsohH4",
  "key28": "5ogVCRSissJzFqMM1ee8ZUXUff5S3RNeBw6kfjagzLmdpW4Y5BEa8wjheE9FPQeyJ6or5WYg63zb4pq5dpBzUkQ3",
  "key29": "4bf3GT1svZ6HJkqqK6T2MT6Gst369ENx2Eb7HJGYXPgaYnx5pjKBBfYsMjSoAdhP3rpwc9C6R6y7jEbVza9bdoPC",
  "key30": "38MFbqFEJjXZgSj7sXXvfoyMyp55TxuoZPunkZWgBBKP6sfXfqdQRkr6JdoZF8p8cymTRt1H5JSyxDwNkNfaE8T5",
  "key31": "5pRNCqaLJet7JFV6MxovF9exkouwn2qNYjYQJBCk3zPHWKQ4aCutkxkSDLiUkaFGpkD2uyjkiAW9pgfjtGwjJEVD",
  "key32": "3FBbKCU59VFFbqC3Du9LXo9rGYc4wJAKerR3HnS3B3pkmZYBfB6J7sQMJoooZnETg2rjaaJo7sfHFxAAq8FisyWE"
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
