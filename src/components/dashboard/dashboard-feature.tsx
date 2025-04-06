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
    "m6SMJhvR2mC6vTXuTkn6r5WEuUpQx8w1FfduS4A5P6BArr1MpViwJUMq9ijkDhpUpRFFzjcQXS2L5YuoEmGxz9h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c34EGdhEzHGzkEQdRX8bKFgNUeCEqZS8pUNjFrdWQSNB6H9CB2GVxGbyuoHLPKCwcUBW5GERdfSKEp4moMEhkhg",
  "key1": "29qykZ26GbmECsdCL6xjSyk52B19KN3cEepXBszxHgBYTyvZQuQva1EJmMCvWKqyyDEjdP5b9kmPDsT3XfixWu6p",
  "key2": "61orjrrbqEY1zk4DykfYt1DibhkmbNT2BPqp6JScoJsMEq7kydVcTuyE6r7WQXtL3ht7b4PCmaka7arRckb8ivb",
  "key3": "4gvn2a67qNoKpKR8TYkGTK3tmjAA7JGEvVg13M9mdpDRmYEUmWvT3NVsMZPqEQwXZ9t8wN248H5HwQjyzRGd4oZu",
  "key4": "3AfT76WiPjEKETYqqQ3N5RCb6UvDCQAd6D8iSSKoVtdNUJdYNDKZua1BiHrhCE4XrbYXdK2uB63maxNAFvoc7PZW",
  "key5": "4aw3D38te1H3bbVzhCWcRNDGoYNo9dsLdtLhN3UrMxaH8L6ok661pZzSy53tJnHgJNMcmdTmL8engYf5pcgYxRGH",
  "key6": "2FEeHtyzM4L1iKGJ19vhpNj5K36nwJyqcSXu4AZrymQuEFX4XiQuPumy9tc8vmB3cxwasHMdX8Pc91ihHE3ezxo7",
  "key7": "4ksQD29pd23hPor9PBhbgWhMmMHPwAH5HzQUwDSCtBWP8sd5rTPDuryez9tg1fZmAP8dr4ATF2KTACAHS7DvafA6",
  "key8": "3M9MZDzniVixkEQFF7WNyMz8tf1F5aDuUhSZrBRQK41yXtiVxLZbw5DopvQsbew7Yc5oZSEetpZqbKfVcyRFsoX6",
  "key9": "AjYWY8QYchGqSbDbS7N5f3EubmRzz55bvKj19spsziiQf8tN3pbwifZBj5a4tSu3n4xGijVWCgVPB6o3mZJ5Kk2",
  "key10": "48ETvHCzKaQnQq12yxRMABGdvnbZsaz4eHin1rNjp4YFyw9DF45gajAR8gsdKKKZdKUg7qmjuYEEWXZsZm3tqQFq",
  "key11": "UpzhwsVQsKxojg4VZ6EM6ZwF9iejrdNQyRJJeCVxgHMiQxrEjfozLxLf95EY6ThxGNU1iXA8mi9bAHfqtCXeKLH",
  "key12": "3qs3yffkixQeD74cTV6jpENYyMc9hmGVEywBuWSiZkUKizLG7b5dAGPxzyshY1doHFEgbtyq7akopk41LWVLTrVY",
  "key13": "4CfUJ1GQUpNAmDWywVzZ6wMUgfumh786z3hjbw5wPataSXEk7y2e1mxq1yApSZQeqhyyZUCNnWnPR5mfuSVD1iQa",
  "key14": "2Jqz6YqKDsodFEX6kUZdCw3SKNWCHtAoSYGDnzWXVhjghk6qJEV2rLxYztTf7Mf6Lr5GY33TgPUyagwSpmjNW3H3",
  "key15": "3mXZ7ijMEFGP77Rb1uhmXc7TRVSdebFPbcvoxsvfub8kEZUikKUW9JKW6ZNVa3T6jJtXNsECuKtVknuqa7tzrKjR",
  "key16": "66waCS8NfFTqyBLeWoYr6XqrFYgfum2gGSprx6dRngvMPjaLkLkz9BuXzjvQMHbGjFmnp4zTFWT5nYZAJUexwYE2",
  "key17": "3ceS22bsLRxLFmDK3cHPkNtsmt9KxJtr6Kp4TNgrCYrP4Ro8Qyfz5cDx5jcaXdKJEjJ8CT28U6FHSysd1tg1Rz6P",
  "key18": "233yCAP42NDNtsWJXKoHo4wZ6DRxCfmsA3yQeK2PKuNrzjsw6HmpsyqEyMQf9kZSu3YMGYyMMQ4J5LUXh3XAD4NL",
  "key19": "2QFC3tkt2uPCo4GKAUgLEfPeeGmMGMA6TY9AurjuEWgoPWhKNjppHCTeHUNWjErpQuzE6fDk5PcFdbmmMAG38wEb",
  "key20": "66xH6K7igyhhi3Wz93sv6SkHu8TnD7i7qqbXnje7sVMoHCrrHD7uKuSsjp54VswF8uRJx2QFuvyrMLw78yp7KY92",
  "key21": "35iPfM4396xjLH3G6yxwkLShsCT975qAZRkgiDFpMPbtwAF1k3Fs8UUR4hLLJiLMLDXkv6Z7efh5Mt7hAkM5RPd7",
  "key22": "3gxYdA4u3cN2xAvUQ4PWzenUSSkbfXSw1wziLHvMSvxPoYgUiVPA84aE5JcNEFXTX1KueQfyAfvZ3HDm1W1saeL8",
  "key23": "584LrzTeXEuDSStcuNhpmWCQ2475qk9fe39nToqWYrzsB3zexN2wZV742dFHGJbUcfLanKSERTghGpVKz3f4cigi",
  "key24": "3oFj2SvqoPrXp3DJcv29AuRy58qWnyhv6vA2UU46oFGkBaT1LtL9KZVVavJqB1VJvt34Cq3NkKr72Jy7MDtoPX8f",
  "key25": "5nj8iXiZGrg9JqAr7oyargWu4p5mcQcaW1dmmxEaY5k7i36P15dPUdToKBxo7jQ6MWRZVipfQ7NgC5xyLkMREMt9",
  "key26": "2xBTBfjETki9voS9E1hannZmJrp4wMmyMy8s4fai2KfuLrLHMz7QNyq5U1K3zsWwjoYByhXMnN2ECcV3FQFtuzdh",
  "key27": "5wqQubZfrA88wfst8MSsiUdYBeUdP8c6KhsoPgFfmEUHdkQE6RHgxKwxr6edmd6e1XiRw97HuW6RZva4N96ihNe3",
  "key28": "2dkZQc2i1jzptjpiWF6bDTnckecZWnEPdfv2NY9WkTgAGW2Q1xzGcYXVtoTesH6yaqVruAeT5wNmMURAvfbRkWBw",
  "key29": "63o4p4UmVshD81VUXkQkmQ3LiVZAchvf2g7yL8w2EbzwKekdzGWyfDkq1cX9WEEwTdcvJq3BmmVP6FQCiYtBhfYi",
  "key30": "5MRkpmZ8KGFbefSCUNfLReg7vRRrLNvJVZ1ZnEPp1FyxBGPbHZCue7B3Xwj2kQY23ZQ2QzpdJKFDGREtwA7HAHRN",
  "key31": "2RpqXBiFYoaVFSYkqLoLmgkM6EKacwJq6E8pWPAZ2ghiLBmFt94UdpKXKziH3hV8w226DXw2ux1xA35ttn8J2Ucb",
  "key32": "29ENWegdiCECQ3MrpT8B6B2MLw2eTcuYXhxE3L2hBfbTct89Ja9t9NUPneN5V9LqsyT31SUqJLbkCRDqVmGkMqTV",
  "key33": "2SbACyEEVnsADf99cURANxZzP3A89W6Thdn4bDPLqgponuxEa4VtjdmzDRp5REecso1n5WRdjZAy9EGHPT4KivEj",
  "key34": "5pxx2TQhkcyFDQ3LNeiq9bGJMDCxvmrg3oxfEyP5ixtVYaCBymNFMVEBPgNpKD7s3FMD8cxvgh4zWKNuNhjLXtLH"
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
