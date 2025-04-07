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
    "5LM4zukmakgxmJsWd6QoL54fktFxFUdZPqLMRcKZ4bz8ATPyWCeD6qtUK9w8thNruLzJKtmow25SffiCBFvmQ144"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QkVnCcKqvw5gRb8iRBScR3NdHzoaB9vPsZ2sy4J5bbikFFJhGAZkUYfFBrAr7ZbgtSTjb2mMdrNujenTTd3prbQ",
  "key1": "52wQYPaJrrZNdCLh8d9sePy4unjVbhcYc5UpLxbU9cN9YGN9HBfi3f8XSaTWrvMcdx182yiYfzQ6Zx2dD7Gue1gV",
  "key2": "4q5dhK3UtugwKCfGZohQqYLDVaxUD6aELDXbZgsAmYDisYJ3dva6wopM49cpnbrveUYvM66B1LvcfAN7QkPFW8x6",
  "key3": "2yVG5xUP1tzoseobnfhsbNfFm1cDAkwLvvow8QAGfdmoFN89oPHFWEtzzNegVgNZRMtMY6UhBXBM56ETNs71UPjw",
  "key4": "EkYeHXzYQbraEdJn5CBbPYyHZZTu3XTA1jif4FrpvUcGMb99RrrV8DQdVWzdp2m9mzjoJ4rGuJd9wTxq55dZJkN",
  "key5": "5MZGBr1nXsJ8SdPVpCsTNcY2QwmmePAwTrneL6raufQ7eQbYFKEgVDcmwPX8v3MVDZkW6pxpkYCPSFutMqjAs5r8",
  "key6": "8KhXBBY4e2BcEfdrcoQfYyPfA7WDsACoQykJnq3XgHvX5rqpVmERieP3uBzcEJQnNWYXEaHhhwG9CXMF8RG4T5g",
  "key7": "5jxZEBvKGmfnrBWC3mJ4JX42jbu3y7QXhAaLrviuTH1oZPfCsHVLy35HBBtVEQNxDoSCbDkJkBdVjWV6PykkzrXz",
  "key8": "3cDnw7TJZZwZSpVbR7RjTSedQogn7uqyWGPkjUKjK4KdB886oJnG1PrN268uU99Ahw63Kx5xy5udDxqX2oXUkTww",
  "key9": "2rakZGaMEeaHAb3aYjjzh8vQnLBxaigLgsU5CeJJfr7XoPsXFyE7nzYoj26Xw6zVrhghRjNxPMV4MqB6VbBMnG7G",
  "key10": "94i6rVbjdifzrNj188aUxLXkuSY3HATJBYDGF8EPT1Hgpaa3pN4LBZY6XoNba9E7DJPrYJ3pod8BzEaPwqVhgt5",
  "key11": "5Moc8W7SdjN3tQJxSYJ4HAx7GeLVqHFd1AoZfJkPZ6cKP4uC6p9pBn69bCmGHEraQJ6A5ABX7t327uqYP2XZ5nHz",
  "key12": "2q5WFWRvKUsV7DkWvbSL49N8ZsRmVkZpoWEo1Vud2m7uiz4hvBgHtUkcgByKqHggnF7XTCcYdbCwn7TkbVpKZ93n",
  "key13": "2SjH3WBLXBngJLm2ymUv3obsoB8KHKwAMr8cp23dq6Biit3jLtsG6Ep9mkCtRUfGig2wuV7W8QPFvwxcVVkrHENU",
  "key14": "54EEe3f5wpWqrS2JTLv866F97XYGNewtKdowZAPnT2vwUSJPLX1Ga6BKigBRSu8QCDx4BTPeax3YvaiyGcz18sum",
  "key15": "KkTkG7H6h9a3WvrhcLUJu4PdFDErXEuG63BWaTjRfPDLLHVJGsndHoys8U8HbZq6FPAEvnWtVLd5nKjTVASkBp8",
  "key16": "4RxVW2sTEETqtRR4b5sH8NmKPgxURJbppYqNnhtsHBvECexXb6bmjLrMMx9wQsrKtgnxJsM6hHKD97DC7xgSJMGY",
  "key17": "5sNA3PrexBkxb6mnEbVAYRmzmnuTGCAU415cp85a8w3dmtA23FSB3WDaPeL8gc9yejRbFZJH9Z7zkGjfUXAYt85x",
  "key18": "2ofekXQDvmzDXYBUi125TXQoD4aKWobw1UVmVKz1xm6d6FrsSQ64R9UKxx1s8ViFbie1c8b6LWHGhNLmSY6gAVRA",
  "key19": "4xCMSjhGXCHt694So7Ep9VJBjvUh2X4WcGQ9vZ4ZvS1XgwgDvbrR91dbVYMeo7qLGmTJqqxWywSoG1qkTdBixVW4",
  "key20": "4wVZPfnspjeFSqtHffgV4477VQ11dnwFVP7op6xT93dBmA4JsvDtQJ5P1kRXiZdEvqGFTsMoV9tHVCUitetQ2kaf",
  "key21": "3MVeoUNFApAMMBjc83hQe7D141T6PbcpSFJT1nsEg4CxapntYXkLmdAwLzKANm8Nj9a2wHcZc9aRBbyUzFvSFZwr",
  "key22": "5HaShTDGquDZmumXQoJrqHzhvpagwLNRkAi4oUC5W33WiomNLHLxP1HuTfpGgwjviTmXiCoeLt5EMajXgT1xhrgX",
  "key23": "524aAPSASB8FbvaqpXRyqChDFHt96X38pKxbjCsWNufQMWPytNec99WSwjegr9G5i7tyUtrjU5Mnq58oc2Go5fRS",
  "key24": "2XkKKRoUDNxepA1TFSFwvoV6ZmTDsvzz5AuMDnTQJWrNtkLcr1umu6rzdA9aec5iztsSfcYjF1KWrBCXNwK6SJK7",
  "key25": "UZf2aTbcBTNBrg6j4XDjAX5fwUPHrjCweiMauzNP1QGzPgKJzka9xCUWwNmoLNxEe3DpbBkjfBU7Gt1FjmUYDN5",
  "key26": "5kPUGbJ8awpD9SbuSoBXcjHpppti5qVw1ULHz1oaynqToxdpiZjU5gxg1R6bnzGj7GP9jweBGVNBQSSA4BkyPPMA",
  "key27": "mBesDUSmdtKPJRp1Raiwje5BgDRrkBGfZcPkxPnU36dkzYsvXPDdsRG4oidfcFNou28fncM2mr8FGC1xVnsw1F7",
  "key28": "4v2oPLf5n3wDxDN6hRLsLZxnr5fh7uR5keTnfbom3KfiKfPzvkpsBLSBpVpRa39LS6M67GYxkRzWYAiKRdaCxNWS",
  "key29": "5dMdcoQvEnpEWgJaWDL9J4Rd6frHUoMTNtJqbuABSepYkoYjQZ3RyGFyHkoWVa6MVehbiyg14caN9Lv1z1CKcaee",
  "key30": "r9SEHAFgYHa4rChjK1kedszKgbRwkMVVnsg6ouSnS5mp6Z4mGbqj74eWMKq4TohXkLorTC2je543s8kGAZx6SJv",
  "key31": "2Q4fbegymGNMkRAU5221fzvMb3jWuGZwbq43ozMkZ7ELxFdgjBSfr1aRXgBX2guzETG2HC475nmZZ13mKwc6BtFe",
  "key32": "HeFhgmyxLdFbx6d53Lbjny8QNKSfcZDqGWBFBhkx8TfS1updWhUKRhL2pEy35rHKv5BPZ1DjSpYesLC9CB4yqLi",
  "key33": "5mWuQxoL7goqd8jhfLcaiEwzdaciqhxVeSy7ezFEFBKNyCffzko6tREPkavf9wcxBHhtXP28nan3Lx31ovY57PqP",
  "key34": "2pWYeMPjXSDbeGJp4tATA3jKArT2tu5JaEmzQ48GUahN1ysjnDp9hvfjjnFarF9bmRDgQPW3J3hWocqTfxbbTJKV",
  "key35": "4zfeX4hntRNqnHd5uPYpHDzC6tNKYc1opdaVWX7LDpNm2eQKb5CtXZfQvQ5RAj3fkRBueWAv2yRwhpBHvXoRVvn2",
  "key36": "5hqLcjstm7wMPNQXvjHezHjjGq92saWs8RLcauxDxfaFTzbN26anYZB8iMhWtsbQsjkosCdUvLThVEQGiRHgtT6C",
  "key37": "45hUqw5DaKUftZaTv4Kdw27tQGAi2eZLthEw7aLsaK2JurjjGzWFKQDoecxWbEDx456QaxsAA3bqpoKwEU69TAAd",
  "key38": "59x7S8YBZwKvpVqpt1P63hMsZezbDawVrqFoxcGdAvFncMwL6j7muCdTgXgXAJyXQrQGuMMwZod526t3UUY7YbMc",
  "key39": "5SmiwMn6Nxqf3zEEP2AkaWptQih4TA3XxMeZaC5owrkYdPGDe8Y8qzTymJfPa5dpDHcZFRX1J9gTm95SqdCfh3Jx",
  "key40": "2WFGE7joaWrVkaXBLsdFgjs2rKPKDdpDhu16y5aHuNij1PEFaEk89GQk3dzwizCghK1Tjdbd9KpReWgYJmbYLHLR",
  "key41": "5aRAYmEzYJdQ8aruapuNfdPLvbHxTtrGSMK2cMndXXbgTTxat2f2JyN9QToXEcZCgpRBBcisr8Ey31V37pL1pBtt",
  "key42": "347YUKvPmmKKjtCmTb3fNLG7xvtt9FxmnAX1goKE69DPUZHCfQDJrdVk2P7nPo3kJqJmNbdKRxSDYxZhobHZVRSm",
  "key43": "4g5k9jGNV1BXFiDDdh9qof9kDyAXN6RT1aWp3MEkcXfrT3Ub73paJaw4HL2BYD15ULZKRykd1ouh635xrduRpeqX"
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
