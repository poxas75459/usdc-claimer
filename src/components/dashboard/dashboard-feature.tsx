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
    "25dbNAr1K37YYq2aHtBsN2qxtgSE9cSVEAkFEv4Nf6yQfqzuinYeHY8Sa8WV8CSqhcyFc4EMKEJMkDhv7T6S5Cej"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zshtcoGa3Hr3JAm6e6XH1FigrQx5FczJpQmkymTTpHrcZLh65MKCExwgGgs8TSNjxrp6rFhFjgJEFGFYzGhozot",
  "key1": "3JfKiskYhimrUd6FnDKoLfeyZpMqkMYxiUND3xDtZ1QAQ3ahhtZm2XEmrmFtkt3jYKJ49miv8sauPFjRVcHhMbrP",
  "key2": "2jYvQ8VCoeXLNCsMTpH6Cp5maNjDiRQT8Jk5P8GkH1t3wa8hW56R5wQXtmJ3ytxpNXDKYQCr9JD5KKFV4Vi2GBBx",
  "key3": "4XVCG5U4E9rtssieyD84Gctz1qKef9dzXQRMbrU1NPv9f6qMqoW2eBuqvBGyL1rjCML9sztrPLMD13PviYbdhKmV",
  "key4": "36RZEkDSD7pysz6bgzRkcu2v1cS7q3j1gH59ujJV9tDmni2Wrup5ooU763axLMF5P9iuR23YQEfXRKWxVpePXrxy",
  "key5": "3zVGJcfQoNWxQFc7K2i3Rfx2DECKq8BT7trm6fRQUvoBaVickK9Xa368uCAvztoY6zafs5sncfeZzsRhsBbjiQic",
  "key6": "4PxQsHkcmsTYVzkxz4DR9iEZqa863BA3JGLCZD2ZHETKRg42uQLCgV3ieesMTqSgWewddcK1GVvy59ump4aYknTR",
  "key7": "ybPUvC4dohzUB8W2v8CF5JSS1jYAwf6oWSeafjFX84GovNqurFmHxKXDwhnpVoynA4uqNsmQ9LYeQW9rfenBe8Q",
  "key8": "dzpDbwQRTgisGhM6FATwgAX5juiSaXnVNLWL6inbeUniFqZDQTDoFKTypF9FZoLyuJPBGkGFHnm3X1J2LnZ5kLM",
  "key9": "3f9jzNVfm8K8SJo6MnwuBkBtwL2gxwmAt2GdKfCb8ZBPoXt9YhPpgtTn2zBSDqiAR7AvUvRREY9r8XRgJ1LQBsum",
  "key10": "36ysosyRsody9udZaZjnZYX7UZSbFMmke4zQ25X3Ccn1gj7oyEEvHZtMhQUcwDggrzaVUATo15Bgeaa2CWqV93Hb",
  "key11": "4JR2TLduKtviRxRx95VtRBieJuJva7jVQfuEM4Vf9XrmyLaAtEoUhzRJqkBHoVEGgE1L4jZ8BavHVSBHm9pd9YBE",
  "key12": "4KygY6EE3Qjy9kVXYxgiEmDm9nbVLavyDAjoFoEMSyZEErEGqhcou9GJfpnutYLhntV9ZLLN3djkbiF768rGDDm8",
  "key13": "3GEZkQ3he6bfpkcy4GBBYaGWRnrvH6Z5V2t6ru25A8eXM7ERMLx2eU9vwiQGetGm426tREPhEqMCto4vxVrQ742c",
  "key14": "2bqhvr7chqzttQgo4bVg9g34q3XpfsMYBpnuAEgg41NfMN3NwksZWYSdXFCYbKte9MD6p1NXJnxVatCgpaGzUqS9",
  "key15": "5kBWwmsRJe7dVWmgSDhp7cELBQN7Xq7ekKmsfLWxWwR8h9QrEPge9G5gtDecighbVk7Dew46Zvt4VL9EeEh3BMJb",
  "key16": "5yz9hDkmyCk974U7G1M96eWHDSTBmDpT2iUmRFsLqvc6fLQP4DQ88RbqC6jC4ovmRDxeDLL1uJ4ArKVB1p5B8gWp",
  "key17": "2vL3wPwkVNzh5xQbX6JGZ1H1YVM9mSwCCr4A41naMnv8xVm98vVSF56KooMdWoWSahy4GSbZX43NPq4Rk64LnkBD",
  "key18": "JVADQjtT7hRnuSQoS6Rxcu9YGxoXLdLGtCzgSbjzcMMNvPS9vmAK2LGkWhKA7kiWgmMJcR21sr5U5NFL6xiwwqq",
  "key19": "2RJ8YLDLiV6xEuxFyMtxYgWDz5P2Db6CkRHv6TkV8w61ZiHZ8VgbHYV11BUxEvgbiAp9cwatPypMg9SKuZ6kizDx",
  "key20": "5X1Bk98ps9wff1aVQ5fQhWUN2EMm4eJYj3T9vGpKPMVXD1AwzamgsS1pyYyMnZiwaqNfezQoRdoPM5iyGa4GnaMJ",
  "key21": "5mii31fnq7VMpCREk4xv4WVBXuV2rXwuH3Wdk1Qu9B3KW2FKeZtwbLuTe4jtfGd3P5JnBBGZV1x3emegJC9muPpP",
  "key22": "5v6ExGnXxQtXQddfSCzuoZmcF1CC4znoREkD98fjQubtKtU8j5mJ75M1Roy55znLGHwPmYP1MhTaibwkd8tTHHsd",
  "key23": "5TXQqrfcr7Lxgd6EoEaTjkwfPcAFcZ2FuE7sYHcpxk1zpb1LjpiH3xt9vDKYL6GwEiTMWTWbpsaUznBreXp2B4Gf",
  "key24": "4KoWogz6faVjEcd5HTrTce9we4G7tEspnoXZ5nHB8UrKi6Tm5NX93xoYgnuXExJM1ypEqB5DwAZnywHXPfjVfUP",
  "key25": "3StjqexwXz8mHfYpTVWGybrf47uuVe4A3xRbFhNFCPwX9FkEmYWNNFYTsAm9b87S87eaghQ2wmJJT3txqHd8UJo4",
  "key26": "4YV5Sf783QPhMa9Dwu7UDdJiG2W7Sn5QAwLBkMJ7a1J1LnVPnC2BJ1Q2AcQWdT4qP5x7RfQR6usQEc9br6wc51ng",
  "key27": "4sfXjSpzE2odAvURi6ZBkFG96aYdRHj3X7mieGVbpcWY7RjduuC5urytE8Lg3ay1MwLjipTABunCcdv4uYp18Y4Q",
  "key28": "EQqPaFfnjGGCR5wRK5sRzoSjjD8jRptqYn1KQVytnaHmFirxeQroPqVRwavo5HKG7giXpw9YPJWV7EB12L2YWPk",
  "key29": "2PmAYTVFcGzGX7xwwJ1qc5G7VMERHgP6fXf42Pe21DGKVEz46XUpfj71csvrEt51Fp46b4LZ2pJaHdLZyH3H6NTG"
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
