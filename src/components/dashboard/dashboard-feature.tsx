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
    "5HQgy7SRSumME45LDJ78saGF4ATXdAfAAzW4ZSU28tv5y6ZB8fUhHYm3chia9PkjTBF3rvYbNB3GoL26mA3xDrDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7HwoFno5onPUYj3WhCKfAKCGWX6bP3bas27u5DVwqGXkJAjTvNVRwEJtYZfBLztyiNqPgFjgH7v2KQZfs1Ajaho",
  "key1": "48VEjLiASNrATD58hiPXEFupQvPvUybmrhPeM6hLQaC9BxzbkuhkRcJaJa1ov9VHMQyaMr7uE67w8s9XjWzekDs2",
  "key2": "5Sb3LUzak9BZ7kSboxrTdmpgRyy6njmX4WUtm4BENTiv9BuGTVVFQubW5A3woJnq45JxVfmXEmmgxLJp6VfLBQpn",
  "key3": "35sSgvfmXbhgPs7uJdVmp9KpsmCcEjwJNnmEJXHBZf4HAGFDBFCf6CrkcBNdSiPiBDPHvugZ2BQ3wbpiBzMDA4nf",
  "key4": "2AgotDpFivznGp1yxuMrKV7JU6RGPe1TwwGsywUY1hrJ1kDCeKYL2aRMrMdCXGK4Tv11T4aoGxp1icTVMz5E4wE4",
  "key5": "4pBwu1finJM6V4BGCzj47L2S2gdYJcpLKT1p3GYQrZsNNSenyqmpXQD7w8tqnHnxC8g7s8js1PvwrW3GfD9vrxJr",
  "key6": "2m9SwbHVJUhK9DKB98Wyoqou9c5XcNpB8LMBimU7SqurXKXHUnW33wFQTycdwJkC9wpCoof648HiLwA8LsCFhoFd",
  "key7": "4pVj4N2WPxrt4aq5vb3MtQu3zLRs6B7ttGXAX5WT9CxtSQevZenMgMKSLWPf3XfAvCFKkuvrZprT1KHqTWhvye2Y",
  "key8": "3aLDdBZ1Yu9viPczUsm6uKp4SGrLGTXYZRQdDCsXhSm8fk7u4vNcLtt8y2C4ox79WG76TM7X6F7R1i1cpf29SFsC",
  "key9": "5Duc1nmAgzSsdpxyg9z1GKbL7dJUKBbrrinMTfdYhcsDsejHvrm9N9Y8MAEuTCQ8L7doxRLn9d2bavyNomi9Ey7a",
  "key10": "5MQHo5rwMWRGzTDjJTNPHHoNmhnqYae9nQzswYDBDsGScSzM9Nqp6N3GmVr3SmT61yppeag1AQkEcGLm6wTueLr6",
  "key11": "43wjcpJTTsEXPu4dYjhKeSJ7pCU1HUdfDThWcuJZwozTzuffoWZjmhGs4kYywcrfr6Qj31XshgfDt76kn8DdG75Z",
  "key12": "4Htpou68jPZRobSzGpvQFzktE7QBtzLtUguw4jUxwoS8wFD3z9EGmfWV3BQtVNSsQP9AVhNE9Lfrx2VtA9u4fLtq",
  "key13": "5TpbYGEtTBw52AgPNwAkA6Ap8FEYT12AUifYaYii9Kxprx8MsgNVWUYBs8hSPNdkRhUqCtCjHtrftPxxSLGhpU2M",
  "key14": "3KBPeFeju3kgcsjqmCEdifp5HsFswkEhGuAb8Drq1w35p9hYBzBXX5UmPqVY5tH7mZFGL5ZbfQXJNHCvQqGVANRt",
  "key15": "2Ld4fFhGPXMqRecnvq4X94Vcd8XckyJ8zsGopFyXWP6cudzG6YBuEkKEvUV4DNAEkvcqAb6krZyWes4nfkJ72Ktz",
  "key16": "3a4txfLBpAZBh5GEcxM8efk9uT1E8RkWUQMxJru79oSPyGKkY98pow4rpgC4yEfeqZjWiPnnH7Bky83suTu8q5Rh",
  "key17": "NmEohUvSzgaNcj4z1AEfWgdRZd4uBcZ3Xa1TRnB4cRTkrjRYsbmdGCzQnVqFM3GY5UyTbq11HWyxqkatrvWjsGG",
  "key18": "5rpSvek621FUXEbeLfcgGXREYNQnTT9qei2cFTyEhzLHfE8GS6ztrtgpscdXD4mZZ9N3DXhpFgb5RdXobYj3gKLt",
  "key19": "TUH6E5UiX982w3nMG3MrvjHjbALN3VTHzoyRdRJR1HbcrR2zWGYsE4SBWbaqEFn9BhZ5LVeGDgas3ir6vrDHY8u",
  "key20": "3DejVw8H7rC2Do5UPDWN8yXZ35PApPjMwTDHGaRXwHj99VHSVTRpEwRsiDWdmqzX8ncUXw2Jq4JpHTjDz6PfFDBy",
  "key21": "3iYH6q8yYsCZ4C7qNSy4zC9irVrSVKTa9DQQ5TZ4cABDFjD2L4jnJEeBM4vJPPo7AWL4KKTAjFKMThtzibmoBt8Y",
  "key22": "3sLeWYjyE7AmV8c8ktqZBE87hfSrZNGqv47yZHSCo8JR2X5ruRN8f9TCV6Uycn3LLJEU2XDUwQHn8vq3c3zMfp2S",
  "key23": "49X1bNCUSdDGfuxq4Sc8kxyg3Ms7oU4gw2HUzwtyJQGjcfmkALGD7xHEud6LcQMdyZQRc86xRgaGY4Lu1DTZeUw7",
  "key24": "21UCo1PjnEa68bGVD4R5oJV6TgkaMmJBwJKgZ8WdLYPxtJEVXbPh4k8BUAHVc91deHzN9ZMshWY81myinDY3J99q",
  "key25": "2YJai5HwvebWg9iFuRRdYBqY2rZvfdrSq9ac91PDxGWEtBtpEX4xWsVZE3UFDUWRRVvh1BbsxAHF1PXn9MDYMzgA",
  "key26": "4a2KcdJ2hAZ7aeLhnATimgtVgx8snQFBQDCbV2rhKHcNrymNLoH2sVKawPTw7gy3bpWWB1qjZuSFc9uvFvN8hXGC",
  "key27": "5DzNPhcZkg6a2CVg7fkDm7k3s7fVoiCekyg2cESE7g7No6FDkx9C5H48HjVLax4iLcnJF8VQ4GYKpMc23SWpU5NB",
  "key28": "3bEHG1ZN9SV5b7fZfAjRsHVya9stQEyzaP1MtxV3YidbmoLt7JAtcnG8xFRqvoaWMZoLJBBLiSAWVDrTrfAnJMmt",
  "key29": "4tvU3LVp45A2NY7PfLXEYH4hw8NYJzjR62mWLSju1vj9seCeZ2iHLbfqSovQ8N3NTMfifiHMvhYZVhi7wY95uTx6",
  "key30": "5QJTZ6tqhwjLzS8CTE31CanpSWNjXBGbcRDohxhZy6LSuWTpVnXscSDVk6g79yq6jRQXRf8rMBAH4bPAhx4wmUV8",
  "key31": "4KueZpQSkWBTDJsKaWWKbT6UrFEdGhcnJi6rpZEKTCDX19sxPUkqQfPqVkVR7CJLFCAcYSN7BLPj1bsamN86vXLZ",
  "key32": "3gGjGY4wGyJpXVwZQe3arPLN9RTbwc9awdYRAm8Sqv8xuwyTz1B7ZbqvZYsYCCqcNt2ZY2f7yY83Eq4VoFYHbVM",
  "key33": "3G2oFLjhiSnnTXUmbifmYWVowj5BxrArE9Hoa6RhVC4Sft8prCRmAnV2XK3c3JmZATPGYEx7VsEceUw7XJVeN961",
  "key34": "Dg3TL39zMNQpiZPMJ7E5H2DxFDEFLu1FqBcbcNwrbZepEgWrqXHTybPh4mdcn8vKUV8tUo3JEy7EhggSGopvJWx",
  "key35": "3rJXCju4MYn5PRXVsW9XvxJhRJVX1ySLLedcqyDZKCrb58V54Wg1krsycTwgY2Hv5PAiHN8ktnk2bD9AGe7KDvo9",
  "key36": "4SiGmPqY3YTJABTkZ8DU1TqaJhjwGXCpH7uAiB7emjEQANfzMz8N5wzrZKTmpaZn6CHg5YmGs3LB3v8bUKpZBcJn",
  "key37": "5XZKhwNB5Jz2wgasaUWjEZs8346DNGBXkBmsYukjCswzibkMzNH7bVRWQHL6X3KnjnA8cbfDCzS3kaAWScDRDcv3",
  "key38": "3A2ykyQnpeVW2Jdz2u9yGynF2kDk9se1uJ9ZoiJro87EeEWwxiQUPNymo8YwGzKMyUPC7fGmEfXp9iHuhMbp6eVS",
  "key39": "4Qgt1i4kNysCYcMhn1furXdDGpDs5E7TWq1JMX6DDvgtUB1Mtr1oVEcYUvUPXcuEjkPuc4kJrtu4yG7KoZJ8dxgE",
  "key40": "4QxZE159xxbodDXvEvz7m5rdLF8t3X2MG46HVsGFE9WhfgDYhfT14ZbHg3uhxfuk62BktXRGDhH8z6EfS1PnwWnz",
  "key41": "5tnvYfPmsidpW6ZTn6rMVj6DAa8AGHV6pZq3eJWXb57SpK4MYjdUKkpGnpBAyiPgNEtp2vqNRPycqGnzsTxbrxmd",
  "key42": "281M4X4SZ1rNZozFxn4L1swRjU2GwXU4BCjRDVd3f9AyfwF7fog851AwdVwEhURaow73VXf4Wrcain5ttQmbcPTQ",
  "key43": "3duUzxtr2BAWYxswcBH3boTHMYrNLWEFNsQ8CuEd4X4m2km9Ad8FCBA6ZBR3Avuz3SRkEMchQRa2Pk1KqbXyvPTs",
  "key44": "5TdbsDFg5PuXPgVASFvtP5qoYHdnxwNPHPtAT2Nf7MQj82bZXLJj3VXVqRPGqRZeHWDhNjd8oBXNwvP3sj4DTUjQ",
  "key45": "5pgqi51DNNUJrUUt8Kn3YHMRMP8TTur46ZMGHmoo2hMMLDwmP3nNfm1LVh2M7vdMFzkdrTh1UD9M3dASLWXaGrXM",
  "key46": "5oZEP5sJB6Wdj71vcQyjJKWziXJC9mPwxTH1YzNrUeCLyEn8tadbtyFByvC8tQCrHFx2f3LMxfP5h9VnokPQa7tA",
  "key47": "2TT8QPGQzXHUyjTo7SRKZkKqXHhRy9i9LVx2Nbh3RGJddEmRhdhuUhEMndBQ3jFXKaSzqPNWe73stwHQ2n4igrqo",
  "key48": "FYhuY4drPgFUtHhpzQefftHD6yKjFJTzPrE2ahJhHNEYQ6J9DcT1LBNLB9HtRcsZj1iw9jL32cVB5JFwyAoiu3R"
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
