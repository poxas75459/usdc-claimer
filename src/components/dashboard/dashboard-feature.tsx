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
    "hf5rWuuP8m9Wo2VcT2LcfPwjmQKcjixGyoqBRnJNfuAX8ZcLXS9E7dJ5Dxs7Scbj99ChJeVW8kPaSWwYp7fKjZ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ocN3D4n8w3Un4LoHVzuygygtNvuHrRPkZn7tGH61mVjCdrmvbEp6abzCtXYeycvwAr7nV3crjw7HE9EauPHxxNH",
  "key1": "34ELrk4GAGEWd1LEDUdZaaov9jYZPV5mtAn4ufVcSVxrSnSKu79UZmx4oVRDmvr8bqgCtaPPq4p9SbMMi8YeS4ug",
  "key2": "2NDDR3a1wPYrJjPpMjjVjMsFY25BQtkX5u3TwtXwQKLNgfxXH5N5GQodmRVpdWEGe7Bw9U5isqi2XhjA4bp81t5Q",
  "key3": "2kqkMEuPHj8eAnYH2ddtHJ694tUnN2FEmVEv4LKV7nfHDJxBXFGQG8TUsE2rmKRL7MHU1NcyzhBU1qVJVe49z9AN",
  "key4": "H9wkCCq6VQYs17G4Et3sckKiLbkbEMJXEcdUmt8BE9JBSHdRvUqiBVerMwYiBGjtK4t8JUvCF9iByBMwE29KJkk",
  "key5": "2AnFMSd71gBjkzcGN5eZVqYYTxDe8rGsEGMey2AkKGBN2TwckPxCA9Ek6AizYa8woHGGNN3FBaWREnkgkjJZrW7k",
  "key6": "264SecWMzoq4BijbfQ9YqMdYag48YkYzhVh6sxZspAtnM38fNtHKWt9LwYV6BrvYXCxosKwDxQkc9sgQzzzt5R59",
  "key7": "qvVbr3Y2jDSuZNbMy9JgyQPwA57nxEuZtoFAqLuoxtFg4DPdgxv5NUNtKzyXCkKvx1HSWBPXm8bdjGioUSSixSK",
  "key8": "2Y8sNRn9Cskp1AE4zYyaCmcF6T35GAprwvBh3CfspkyCKtg8VkuwWNwdbN7Vqk84PXWCaNUQbDpcWNkYjat32VLd",
  "key9": "iMWfmRBMhesBE85FA3DE2Zbfq5dEgP6cepCuctpgnVm5JmRetypHT1BRmrF7P9sNTGbda2NteKDD7Nb7Uy3kZVm",
  "key10": "5G9wvybkM7W1R6j1EvDsT6EQ3xSMV95BDDx2M3XshySQWPWDoyZSV8KNURMmpgothkHF1bYSfkQcs4QmQhALRFqV",
  "key11": "4euqJzF6CXjcpFBvz1ogo7kdydyktimPPYWufLQZUxKPKU4CFnehQWFAeBawJoLHEd55UUZzq5yAVyzFwFhaC8Ac",
  "key12": "4YcwqN81EKq6izrmK3bM3x5AoKDnaVcNGvZgGiDnzwUtN1bDy97b4Pr4nF41ExZ9U3JPbxMyzxBSkg3NtuCyN62j",
  "key13": "4u7pdauk7XkXJRDtZoaKbYEwMfQeFKMDm3THxuB3k8KJGybrXa1Yx2RYWU57X5yYXeZFF6CJUhuzk4h3bAzKMCaz",
  "key14": "5EnTxzcdQa8Whgbmfw1CYcdUnkwBGp5Qa9nFtKHojJAjtChLBF3bPYEAbPrqrX7eY8dD4ZEis7YNZjcNd9ECD2p3",
  "key15": "Lb3x3ZgshHbC4yQx6QKraCagn9rmmjGsLi7YBpnzWGrpmwtDzxWPEybirTVgpx822rHgjFCqN8R2bCkQoTFt4Xi",
  "key16": "4vLjfQdAaTAko7T7jH71P5Nd1T7V8qzAWkbnt97cBTRxTV3bEzTWBpB1it4YedFkUkpAZidt73w89fNswtFqzTvd",
  "key17": "56tYu1MSHqCZWnF5eBR71f1onfv9qYHLxDgwGh9WH6dgrE4wQFuvspDxLp3xRAhRToodT4kxCVB2cPKVGZREpzus",
  "key18": "5RpFkzC7JqirDkmt4SaxL3Aa1pPr1mf5hGbiFbzcVNj5fhqNjEaYvuuhy6RpHg7SFY7G6CmLMF1CjVGLpZo77FUV",
  "key19": "AUtAWFrb1n7i5P37sfU5bJJV1z3K5NCZtCmNnMEb1jU4re8Y2p83YiCC7TkRbSNsV3iGBZqdrZrWqSkLM76FkvB",
  "key20": "uJqpvFXYBP26zCPBqUE1Z3osaFakDumRbHzfvriKY1y8eJKs7oA2xzvatjy2B4ycm28swFdHztGueABCWZtoinq",
  "key21": "2abyogfFyc3HMaAnBJcEd2ZfktE562njCNbv5K8hJSp2SMNeza6AdhwWYaQpD1D6oGhSsCNUQopCqZZDeUkLUMfa",
  "key22": "6avkZmNcCfv1YAfJCznZ6B87uThsYAYkr6DzupnB2isvtxxivBmhR4Nsgv368XktwjPMpv4FPa2sPrnmFVxcRWK",
  "key23": "4ADAUjnA6iBRqru6zGYjRo3W5cghCZfgQjsXdcH1ij6y7ucwsEnQjf42xgdzuxB2XvnkuwsLxHWMqtirtCGiRGj7",
  "key24": "3mgsjMTfzEWABpX2YYcLM92PHKacKmpVDTEibE5mzMHyRF6CcH8uzrPS27HStB96Cow31G7ZNnq8NoSynDrYWa8X",
  "key25": "5AfyFaMsTevjKiAEc8KjFPhS5LvaLnhAKz58dVW8Hhibm7jkVXwsu6v7jKYDtYTL9MyEBwEGzuEitXNpHTSGXpvQ",
  "key26": "9MTWWNHhqoDEU7omnjYZzGoE1enXUhhvwDndUNa181uVmXxAsFJyozpSbSoJWQ89Ly2XpgHs2K8Mo9FvLucpTKQ",
  "key27": "3L3mjsaYszNRy6MG6XzpAosHzL7GfdJ4hBT8pjmcE1wopQC2w3YTEkEpyRuS2aAY3gEyRZuV7oyFBjEFan9RZf4b",
  "key28": "32rSxTSRFH2qF3ZH8VgyMCKqEuqF7BRBGEaS4VRymSuhej8mAkjtTW1sH7xhQU7uWWx8BMnXEzrkPVwNYhkxdDdQ",
  "key29": "3mKADKptKQUNdujr2pF3z2Qq9fXdQiaTaiYBxbhVLghj9KdR51ongn9a7yaqf1JNxnEnsT1GgNqfQ4PFjSNMvAqE",
  "key30": "3BtnHuuHnGqEqFb1nNWQrq91G38pP6VJNchYKkpTp93v1igEgSLXh3RwArjy9vSaARaHqLENJKYn5RGfry4CMdww",
  "key31": "45geDHUjVUsxpgknjvtaFBVgscFMLuwPb1isxjVADfwDfLgei2DLPAwL2V24TykGf4Kk4yTrmpvbNUhY2wDqDdSg",
  "key32": "dYNyBEAiMEGgVKrXmcAXcD1oQRdccMmUScLCWcgd5khdohpb4BBgxtFsRKn445XcRmzZXPR55Zn418h69Ne9xLX",
  "key33": "47usMo9viBq6dyQQknhfGzU6jtVRU3wvFZmjdjioZNvwEhMNUA2kez9YqZMHN8fwSrpsq6awUa5m17G1yvcTiFRg",
  "key34": "4VQaGCevpcTyekMhw1nA7i5ofX5mvtwWUa6yJMXKpdtWbY1Ty7rC1NQJkfzAHekcJRMekpWTx3Kfgre28JHRZ73i",
  "key35": "3QtkjkAe1DGvskBnzG2Eh7tsKwo2uFDNbepnEByAr9XuHpvPdeDWa2Pp6mZQqKkRHiHnQcNdGcqCDqBm4uSWZhok",
  "key36": "2GbSwcN789L3F9LGkrbikMdfLLyCqvzrDddvDZCKDTRmMnAzC3wvv7RCXUCjRvk4xHiWgrQ6kd2Bjba2S6pP4wa5",
  "key37": "4uQdndA2E2nsVonogvUUp7crVuVffY55NmUi2Xfkgt45HFDuGiCVN3k75Er9H4pZunErSLsXWxad4NzXAb7Ymzcc",
  "key38": "5gMsAkByph94mBQkHBnS9VKFZgUiYGWRwuth68zKYTGGWu6fxTAex8iCVdtbbJRadpXuLJ9R4Cx9bQ3jKT8ttQkb",
  "key39": "3r5Z2pzKx9eboqmse9NvtLLYyHZxkUyzjeErrrVaUyyFiGq8jdiNpDdPPFzgMi8yxTD1jWTMN5PBqSjadz4whF22",
  "key40": "3wq8MkpciDp8nBbVhh1QrcyaDGWbatK9CvYkE6T3MsyFnhmHqK5jy7xFgK1DNCEzyeuPiPPwLbSyK9SQR4LXZUGX",
  "key41": "3E37na8Av8gq4bU5gVWT59r6AV9zzx63oofxMmu1ahok4X73rzKk5CtFfmFCWRegkf2WqxqbgsqDE26pwakafNdn"
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
