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
    "2i7Xr7i29enVyGZqbVrVJM6LeYYXoFz7BW5ugK6sCKXFZgDvRk6SkgbJu4vKAWTy64CNwkk1T2C913EN1cDehtJF"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4zcZXAaMm8foWhCCJKfCmbQz3UvqJKAoCcXeJZoL4zeSNXZWdiGPRXGtZ32FDqjeVcQG6z9kowQvXbymj83UHuZb",
  "decoyKey1": "5dhcjegkLC9fgjiMPTXTHyKH2Ja6qrQXgNSJC4jHEShDr9RFLnX3XogLHpgwnkDx7VpUrGz7dBYQhfd3bQ79bimP",
  "decoyKey2": "rNQLteK8TedBNESHaxddKDtrYAmZa4QTEDJoemk82qksRAJtVoVJovEHTZ9Lu9B1maWwgvPcKgLi4fjcZyYUNnb",
  "decoyKey3": "5rgrJTPrkAh4BpVxhf59cpdcQHXXbyfaBLJoyxPhvropRFj4dVk8sHWm11U75oYfTGMiEAHTTvyaSWyMxguxJmcr",
  "decoyKey4": "3tquiDcebL7AugdVD3noePSCrMMyUHS3i8fFxVfq2aSALQJkDJ23DGreFqi32w66qxACDn4Re3MRv5wPEAeyhh9w",
  "decoyKey5": "2iHGUsVLDsJsuMyaMnN2cMiRX3qxFBHeiK2pgr1CoXTr72Qa8KDweQy5fcFF3BspnAEaanC2qX8grpWXJuNbdrfD",
  "decoyKey6": "67EHaFQviciUAJ5GXFRMpqBmpHFurwBZPrj3596omNKEomsvizgw6o52eDyYTsoNAA6JTy4kjymUApQgXj1PmUiT",
  "decoyKey7": "5kCQmd1KU6SirPLhpsC9t9NRfyaH7wSxKDZAHAQnRiTX9mgkyYv6yWQSp4ZJ1CiK8AY2tUgqRw2Enz9nvKS3dw1K",
  "decoyKey8": "XaJu3bYd5kLg3mh7ZoX4Re5ZMsnL7LKcPtVtsFfeHKn9HXTDXpRgynaHYFDaFrcoD6E2jHJRxVGduUqqQefX162",
  "decoyKey9": "33Wk99rk2Yrur78fN3Rz8VYtMPoMSfw2EoHmzt4A9K4ZVXrELRRF27JkejKNgCsEKCVJoE2CdPKQBoAEVjh6xfuZ",
  "decoyKey10": "5doh5rW9xkMGXovrgiNMzJHjtXaJCz4LAhWjQk7QenX3ryEGrJ6dRtaaL5PzzmzpWoMbWWsqF9tJA9RvksdNNJHx",
  "decoyKey11": "3fF3hsjvbtTV57JKPUVZq71ihq1CDrLGgyZggywdSuHLeTieYpEZ6JT5rDaboCFbSzeQ645rT7qkkz1J9Sg3nxWo",
  "decoyKey12": "5TWyewYDV5fmJjJPK3NA6MsYz9ARD9kMDZZC9P2F7QLRL3MtUQQ54HrifUwNUr8bbYGHw65bGCU2GYsTh1VtZfvc",
  "decoyKey13": "5VGtryKRR4rM7B1TQZRJ6E4mowCKQBqEvjYqjVMbnEeW6kGNGom6djewNpuNFPPoFdunzowLAc1iGuVVEvk3Nf27",
  "decoyKey14": "3BasUXZ3iqrS8p3zA7c5XsXxeJZV6qWiSHMrrYa15BKrGeiM1oJdmE77o9H6VX6riA86tmH3UReWU8EGqumiZM4e",
  "decoyKey15": "c57DrxE6iun4MGD7x8mA6Nan6moXgvt5mMEDNkGzh3g6jzzmqRx1xsTd8jQg9rSqrBKwf3cJT856wATge2oTj5Z",
  "decoyKey16": "46q1VfhHYMgQYqXD8KZRk2s97QHAivUNeSmZdrjeLKHZCKzMybZEpHPFVisySE95GfrdkkcvbXhqCGumwfmc4LPE",
  "decoyKey17": "53yGJvwtgauSZjLgx5afCefmfdkKxUPdk7ppL3kHmnVKX5ug5kWUnFZtYwXXGDZXfqDuny4qdk4V96MM2oBGkAx6",
  "decoyKey18": "3cMGe935djxbWGGJtqcLr7oB5oht5DAYWTMWMR7a1pbBNMEVpFEbNeD9hKJcGMJvFJALpCHNm2spkZGRL5mtohhL",
  "decoyKey19": "44jLAhFjoo6HJ78FbG9W8JB4Ah3syoyCDMiySFGq3qVvAiKVnFcQ5UM4nEuhhfCq6eEFadsWwVqD5x2V2YyoSopw",
  "decoyKey20": "2ouM4bbTiXSSVM7eW6ULgN1dGLz1839n3CL9u29pf6PHAL1Ce44w1WqAQzrvAJpBwXhKqjGjr3B8aT793dpTtwuk",
  "decoyKey21": "5i5Bc83W6D2rHXkrxCE7BKXmBFeD2UPEr6g24Pu6z2xu2yFA6iDDnnRuzezFMRqzy36kLJJrQ6TenkgogELoKUW3",
  "decoyKey22": "3EVygvSdXsqbXxpNmhtfZA1Y7t9nTVFfh8vkE1vgm9n5onfePYgHFekP9tu1bHEkhXBxduAtwKf959MABMSMBBkX",
  "decoyKey23": "435JY2binBh3xSVNJCHVuZ7skUtweQ1gddpb7v5ZABY6DfB5TWLTpxuv7R2CBSjx6KjEyod9DRd16855t8iP583q",
  "decoyKey24": "289n4JsLKsmu6cTMB5j5DXXxw49HfSmEAUDGnAsCH5T2R7Nzi824cKxAqPZ2f27jdMDywKbyuCU1dCpFR6puiT3H",
  "decoyKey25": "2Dpv8tfwMQ55EGzQXu3hKtDmcG3WaY6LYWYEK4szjG4wSfzy63XNesoJvAp3CY9eDa5SF3nypXz8dPDKotrQbtk9",
  "decoyKey26": "5MJYXLje1GCt1RCgWK6VSR2mLP5hiQYXJU6E5uKCbpk39dyeJxnM68Jaw3VH3FjqqhVkAFgPqw4pKFQG7YCQoGQd",
  "decoyKey27": "h5aZMpUeKAy264VwzU4schCR1Eh7vQAbqk4KTjPb59XVWc4R1dGE37Rq4SHcRit6D3EAfP4wc5hVWWdrmJvpwsA",
  "decoyKey28": "4pGECAsXHY9r9pQ9LovNJLGxDRw7j7wyzDMnhb113aVUS1bN4PoGgcjZRCBtyFFqivMfvp11Un4rBxV1WxRUbi9N",
  "decoyKey29": "2nx8RaU1xzbu9HrywA3rg1evCatW5pM2TZnGDPP9e5cgJTEcPwpzCXphAvEcM8iutDMEGEyCPSVofA7zvJrWntMv",
  "decoyKey30": "43fHgDw173G2cr6wVxn4pLYwSorgbUpMyPpSRpxZ1ZaguozqFrc3hC6aKuQBB7rWL8YSZhJM4rR7CkqmBYnYma8P",
  "decoyKey31": "D6mXk2tUgngKrn2ZpbiG68jd7URs7Kv6RMjHYeT1fEo9btykrF96P9HfeA3hKk1ATSi1hQ8YZdXb16hDckRhhJ2",
  "decoyKey32": "3HXdFGRtU1p2pK7BNRL556Xi44wdiwv66hsrGRzXwch5AyjcKfUEkq1udNT7yVCFd9wtoqu17SAKhuWKEBEagCRL",
  "decoyKey33": "4Q7Lwe3YndTCRB55QVFJAYRPhVGV65k8Nku1FeWvHYXjnCdVW9smtNdyQKkPfSozCHRGqAYBrxTXGK7TmuEAiWxJ",
  "decoyKey34": "mz9yvjcaUrJddFRuiqKkgSn5GKv2f1FrPbai8zV8zici2GHmevX4wLT697KJVtsdvEQzgTFJpe9HAFkyQh2qeGb",
  "decoyKey35": "3NBrrf16avr1iKEL9fQb2psfmecQeexC2j8crUD5r2kYEL1yZy6QEHpHCAGVYDbt7w8zttDK2s9KUA3vnGuytdGT",
  "decoyKey36": "44iDtGqpXFKwY2AU7FboibixvExPc74QdJgQXBxL5exyuBmaMjKRjegacBXFmGJfYh98hC1KjBU6p7NCq88ubpuT",
  "decoyKey37": "27GmXgBKsGQFxQqkjTf9TeoTnZy2rcmzKgJi9z5dGRuvCENLmshXCMziMXW9ULxKoumRdWgMFuP6iz5wchJcKrE8",
  "decoyKey38": "25DJxqdBD5iTkNfzWKRbDaKEoXMsTbdVcSF8PPMH4c2AdTJJWVizy61EiikNfLdkeCRFMS42JM7Ciy5RUdsDnDDs",
  "decoyKey39": "v3qJwxgAz8jKQqfnY6uXNZXr7jc3C77yK1en2kbAZHxLqw43Eo6UY8wtFGuoJAcANJbTPta9YtvvoAGMzDaMQDf",
  "decoyKey40": "3GucHDSQZcmMfidJ3k6rMC1hQZCzhvkz5ypTJXRo7oBBBy8dYemVwheUoBcYxWNQmp3fVGKnu1PHEKEAAdU4jfum",
  "decoyKey41": "2p9Q7CrMqGHdHZ2gA8j5DbNHQyhExgkGYWRoHogLmckpB9WBzZ47733yhLXSGWU3oBzGXUCvcGuXwY71sCZfFUL3",
  "decoyKey42": "8Q7SXzVUBBCdh51SnW6gErPX9gXDQmSGFJT7FRQvJesV7nUwq6RAMRSkWw7wxCi5fHG6oKpNaBZkBHXXtHS9g3c",
  "decoyKey43": "2mK5JiVy8jgoBejnPUqSbxx1BKkEcGXF5wGiwWFq8nwCRG69wzYccNYBP8uqvimmapbmGpA9XnYtJkwzHEwxp6qK",
  "decoyKey44": "5on3VA2ma6BSTuJAHnxDiziX4Ju6yLYSP3iDbcWHVQaqXKSB91rVpCsnGDbgKJifazJEuiNMwdW5MGHnbTTYckMS",
  "decoyKey45": "2ZQR55J1pHK63Cc6KnybXx3eYezNf2thwRkxKnmYqZF81huPtNuA2KtMFu2ZnqsVxz7jzP2n9fXjGaqFUeU1j6jw"
};
// DECOY_KEYS_END
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