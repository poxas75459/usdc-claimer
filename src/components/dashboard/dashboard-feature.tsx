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
    "2fAdFVSKFiZqu3uWPzGfBJGTNiHQs1tqyLjJu6hdQKDh2d9Q2jfnUjGzyggTHHKnPT23RfJA1FFu2tTNcRR7jzY2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G8tmQQwteCSM1WWKhU1YfRtEAeAtMvmN8LQ2Gw2xd4FZT6rE9CQpXUAxSN23nMTzpDcSy3yoMKNTtK2UKX3iQE9",
  "key1": "4H6beEk7RJ99PbTzLfzGZsD1AGRFkGBrZkmZUSSrx4qoPN9VytNsCwrE4mcBSGAcuzdwBVtNraL23yDkRHNjNzBn",
  "key2": "5LvCbPMCXynNVH1QS5fZNsJfxA5GjAxKM1uiZhfkyCohpGxxVcL2V8LZgf575fqEJvQQy1tZNKzB83GTAQhNU7Nc",
  "key3": "3hHp1czxA75ebJnAPYyNc6e1r5czeKDCKtKGBc9NLLaVQXBoUvfVaHwUbumsSAqAiErjiJCwzgpfd85WjxqFKoRQ",
  "key4": "2z7aTsUt53NmncBqJpiVbbEmJFsr48eQ9ySmhpGzTKiaoLABEGZZLArzGXhJea3NzJCRyDUzaWagj3FmyaxwTRct",
  "key5": "5uuZxhEdhBZuFgnySR1Amvr2B32NiNKXxoCQoGojrKVgLdZnttkpMG2Q6XLCneYsXN9f3j6DNepWHwPcMThW2kEU",
  "key6": "3yd6Lke7zA66sfWG3oG7AdsaAZx521zhfjKf3f3okPSk51LFNupy6VMXCTmLdi9cU8uJgFzG8cJCdBuk75nQDUGB",
  "key7": "2JRzfZqC7L3QdmDNfZEfiErixzJwtg5AUvw2iM9Acyj1VBk6CwQTnHvtSFthMq5X9whxo7BEZmG4xonkE3PbFLy3",
  "key8": "D1bqSKw27aJ1EPzrBXBL14mvfVgbaPh33eUBSKm4yd6XJgdVjuFPi79z6dkJBP9ZVkPMtpjxfCaPJ1SkbZAJZS2",
  "key9": "5g597cgRuBw2eoqQ4jcSZsxAYZ5JQN4etH37koV5uiNEzUSAQCNNNv13aSgsmf1cW89p3G3b58FPQTNZoR87JqpR",
  "key10": "4L1DDSqtgXZjwbY3ZwxJHkBN8Q6KyE4kgMxcWNf4Y4JAMHbdBT3z7guy6vRsdqvRTDFJBARwv1pXQ35x62xJEGdx",
  "key11": "5BCR51rf3Um9jRRbVN6APzwEBqwECKmoBfrnfU4y1tBgckwiuHHx33G2JBtDCdH4kyJhtJ9rJGxcuKSWss3kmAhc",
  "key12": "4Ga7wSJBFsgS7ZMhhCHsdECqe3dqSYkQSxAJgYS7dk75wdgMKdgNPxSMggL5mRBiEuYvNScpYctciSgRoh2ugJuU",
  "key13": "45nWXCHL3MJxpJ9iH57zSFTovwEKpSbYC3k2XW8tStrw51EEusnU6mUFmMqk69tZY1YSsbge1pc1wbrfYEBC6ayT",
  "key14": "2KSUznhbYFDL2TEqbXzywJmtXLsVXiuLPoKHnwrFvGKqRBQzqVxv6R74nJ6h9nEtdf5QuXCGkir3PN6dVeTevoX6",
  "key15": "DMvinyBXKyZtJpRhkhNua9m5kHVrCuqTN8jmtCTQobejsJwDYA5Q2zxa4wt3KUPvQDTUtPr5r9wGsFTaGgstrb4",
  "key16": "1cRdNLWZmVfVhuohg82QN6sBMC3zzf11ejbiLD6b6CDX2CaW67WqFcY6RgybUZ45taA3tAbzjWEoagR8NsmkDGZ",
  "key17": "4yUbqNMB6kDcZys9SXn7e6jmE2Ka2hz5HvbLhJwamTgvRemy3w7SmyQqrdqYZMKG2pAKmaKVofJBRqRm6iFFjXkj",
  "key18": "61rWr1Rpenn2jdEuDxjMNmnXMq6iDvvSE3eYDU5TY85gg5ViKDBydZ7gHxad19X3ySeotJFWMSehsNnzpzgy8Na5",
  "key19": "4dScjfRwjTA9KnQSUrrmJ4jsYeq3qCqEqRNufVZm4Ab854TXYWGBPvcq9LTyGL4FBLAWKctn745DWp2LeLfcBMTg",
  "key20": "5FnPsfa4xRm3aRry1UYmsuRESRL5NebrtqV6uVgcY4EkiugonMXTWVHnHhnZg5LurxfDq2KZ2h1VFRSRgFg2YyHa",
  "key21": "531mkD6JMthdBosRitBoBTMDrAkN54Wrz8cXA3aEgewH9wVjyfVW23p3FSSYHsRT4r8XM9D69J6Yu7H9XTNx8mbS",
  "key22": "4dkxZZrBKKrm98uPCQ1K9oMmsYfmyb744yyVkL3YCfNnrnvWqyDH42eqxv6ym4QeQc4Wj3S7yb37JVs6tf2LnGwV",
  "key23": "3aRLHpwgZY6yeZrvwa6WsX3UDkj9MLX1EaFf3SB7RWZfE8b9T5djED2jfumyuNVVFzLaB8xFuJJm6q2Z3rk2fKX4",
  "key24": "5z99yH3XShxBciaZaXXARmhg1R1w5EoNR5nNxBFjaETNnKdjb2YtrUCLAiBkUUCKpc9RogimFttXHFRjeB9TyV2e",
  "key25": "2B1hp5k5sKdf8KyARrQXXvwY7hofzqXcoUu2kJqRNocPXSswrhRNiz9jktwbPAuQXPNwB2xcKvV294WF5L9PXjnt",
  "key26": "4VsQRwY3nX9WFRnfEgzPXZQhzAWXfEwCZqHHdid5XdkmM98W5AozEYaDeHh9EFhVmEEEMQRw2XRMGpwneGSgvPkZ",
  "key27": "4kYc3hetrzVT6b3fQSqkKn9PPf5UTuAF4TdRQ1GBBJBEVWeHebqHqMSJTDtbmctUDVLMZt2cG6L1o3799r8XCJcE",
  "key28": "2HbBURae39FySeMvFLSXzYZE2UoJDH8xTnYETmTX22scMMNfVRErUBMZaUAyT4PJTPcbg4PQK9Dyiqsr3nbTAjQc",
  "key29": "2wxmoNLNtGRghgUqpn1xvh5rv9fjcAJX85wb1FmgY4bwqWKUrcCVifb37FZwBpM9o2uW7cV7HLc4YFXHW96yH9k",
  "key30": "jRumDVzrGi72zFJmVH52qHYexr1PqCzB1JKRPKLcsxSuk53TpRqemLRjzKNwqysLDnR5NHFmwGKHXv8ZYMZLtbX",
  "key31": "35zxFbejh66geWsF1Y6sY2UDTLSj4HqTmHVZNnqBZQBAvsT39tH2c1UforXJxY6P9pQgVxVDyvZtXSDa1a5n6kwo",
  "key32": "5BSg14P5KgM37kE4s1JxE1At7gJrKpUiL4ZLEhaxj4cDtU2AHQR6Qusv8YytxnD8MvPEY3Gni1NKeyR2cH4TcvnA",
  "key33": "5p3Qf8JA3gpesTsVzoAVHanzxF3e6nehwsCFnuDN7QH8nNYW88g1WHFytc1kMAiWupMDDQNTBg65DoW1cthRfsMm",
  "key34": "5UwbNgMTcGDLDKz9Q86CaM5s3ti3XA4FVxoLWmXnK6iCN8waUUqKNFyb9WQfwz37iUQuBje4WNgdfxGkUbiouchH",
  "key35": "5861Lbh1SkjDHfrB26eXzx5xCzcWMG2UQyFGZeDLDb7wo5AR6RhJbzdigHbispfjFvK27XZBVezaV96DK81BHyZp",
  "key36": "5KNrXQn4RhXn9LdgwcVbqGoKDJTU29WzmdURFrHpc9qeZmQZce5goRiBE1yG32FjVuJ1jE2McYAA4zCT9jYNmqpX",
  "key37": "3DMyMb22V954JGozosiRGm99VpHLNikpbM8bh8VCaQGnVRSJeHEbvKTWzag1CbREzntDUj1kZkBsugzih5osi4nE",
  "key38": "5YVqVtGeTGsH4iNj9xtzwBxh9QKQmiGKxMGMRvFXAkosynDzgWx4eabPxPRdGwoGsoeQw4Nb2dEHWxY8nygC3MXi",
  "key39": "2YhmJ7cskwWSUjvshyP8RZm4sGKPXPRzZDjQGQ85gdeaLB5aeft53LQ29eKVbNxC8KeUiQTNvGXPbCN9qfj9zCqx",
  "key40": "3Pz4AnQhmnQsmrXsNv17B97yemgDAbDe8TEqzb5BfeVcttMbxKAWxdjh7gED5vqHgVAEAztNcGT48yLHZHanRsdz",
  "key41": "dVjmdz9y6ykLAsGVkwnQdereaNei41LvqGLk3daGESejaW7b3BuqPvxQ4EUyVc7TvmFesdb67S25KnSoaPwWY5q",
  "key42": "4jQiYX2WEY3uBmfV73H8gTn6XRHFS62FcQZAEsPrhmjaeiEd2oWepzKHBD4GKynd8oLdrGcmdFj67sh3txQDtZPy",
  "key43": "53cCocc36718F1tbveJsC68BQSDSyfh9GZmo3qmLBf52XWwLh3pcJUq8FUpjHjTpe2E8vzjXFWxRVT7WwxADNj33",
  "key44": "XpEfxp5ZoKoj55QB6jw5pDCz4D7ZVyHBfWfMh86h5GQeZbBFkXLUBvuGsxZgHN7Ua4N5vzBUnVwXhir6mQVwDk2",
  "key45": "2aaaP1NmniwTQuYqZfJk5k7PCYxCXb4NMAkj12RnR7QDNrvtjuDr1kQJ2MXmkHa1H1ApreazKNXcieE6wkua71Ak",
  "key46": "3ZcCtCyehZzCSLodMADpBAZmyJ9DU15tukPNxEckssfyH91a3vG8EvPPcYv1mbA5gQLkVUh2AzfgyDPtYyGaWHex",
  "key47": "5dKStgFsPAPLK3bBkGRzLLYTJBThF5EK6H4pjehTG4AEQ7CALXmpP719XYnykwfcLodRiFGLUUDk8G1Cnr3ZBp93",
  "key48": "4HEEAJJ3pNWrhpC1UWVtq5AwMwqvcBNzUYNC93k13nX718QWCmFBK1WKFYySMRVrAJtx5jLBW8GLSp61JUR9ioDP"
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
