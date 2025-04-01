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
    "4AhD89nGVSzrG7y1u8Q61N17LD52Y9Gu5H5SGxfcTWXw6oLbWWNTmoefptiTHR2jVGCuQHGYCqA2QcG77Q9ANQJt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KBJQU6DyC5Y5hJZCBQzFM4jTjz4mDqo8wfk5XT2hvtYQ9iQNkV7FDB8X51yVcbUX919UX3hHExdFrKecU6Q3PPG",
  "key1": "5wyMmaGXmZQ5CmQNxQz1tEwCShsTpXHTLbB1PPLmKYRiN2UGRd3amS88NqATfotuuTYvgws2PyRJfKnPBvyxwSY9",
  "key2": "5DqxpCY6Jz9o84K45RHfE42eoVAheP12V3Z1MJqMACbhcARxjD9LhZzaFXKV28j2h7toQnS9hCUJaDfBxe7evRq3",
  "key3": "3xjE1scE47bYHM1Up3nxDsqigkMB6Vp7tijHFXibDK2TATyLR3QAhR6bc8Vvm4iKQYiZ8cXyVAgzj5xAZb8ZNTba",
  "key4": "3boVcGkGsSAjW3WiwBJiCd7ASwi6GBEgenHm6bRAqfcaJrC7zvBy9w2XJGgnxBsP19sWk8PuEu92AknFaWFM15j9",
  "key5": "4FQMN5ezgWBfjzikb9uFY1SGyW17PXRthqHSVEr314SeBBz9x1ADjYJSG3WLCWWJsiKgN8upQTmJfX9ZvxJcYAMX",
  "key6": "29x6hrEZvXNqQribELhkrGoV8K8ZHgMBSwQe8p4WrHFspUnogG7tWaWp1LHnedDX5K8PSdn1sVtdhWtfpuVwNfPS",
  "key7": "2vDVrEE9cCWdyg6gRutFyjig45DW5cXdnMqPq7Ghnz5E73v7FU4kxGi9dH2dZJP9hjJXKFQV2tMxAQLZr7kAbgXt",
  "key8": "4QWzdFrosEY9nuanjwgW35y4MWDXgo9suTxFa8DYM3xyUnh9gshBzNs4N3jjDn8uBxKsk3SPbaANTXbnuSxgfnds",
  "key9": "3QJfSZgE2Nutt4bh4sWaLWifvu1tuB7LYbboXivNwVVquVvZhccwUj4G3isxEKsaBxvXJX4MLoDwByS17SAcbVq9",
  "key10": "463MS4yB6kZkBb6YSPjP3546tvAGZDGceqw8vFFxRjupqowKiqUxd4171h5YJ9GpgKqZg9T751wq9WDi6zvaRoR6",
  "key11": "4yG3xnn2DnjN1gjBEvZCsiSv6RrJT9HWPPKExErSMDS15cZNDYg7imQYpKaCzGXCkENDWczvH5AxYZtgqf58g7L2",
  "key12": "jiAM5yUA12oHAVzdC3CVKv8g2DDdzuBEfWVgaWnLhfhrwSiwxqfsm2XRgN8K2vw4aaFgXrns5MqNeJyXhvjydpD",
  "key13": "3s53dKXBVfjHcLbvZUveiwnmftzauBhJZmPqor6VYaKkYehv8a3fqVDgPngEso9Dd8QoVgrZh4wTYJUYmsPnDFUL",
  "key14": "2uq3LPbExiZniAuFfkGxdpoQZJFtyiQweeAiNbjyd5SNQsF4BQs4aUBawqkp6XrTtZpJogNRYvXQXEcyhZCyDrEE",
  "key15": "4gamJRJxMVini7dDhdFnzo1Qsr611jqout9qni7j5B4EnUNwbi1Qpb9avrgB6MGWqNCmCGbmFJokTEG6rDMEv7bz",
  "key16": "44zpq25i2cfoZMmWD9ZADf7hfGsdYDjG6vkkULNTTUdsfPv6HxkNpMwWufFsjSzDQumgc8GtTRLpkr2jAGEAAtFt",
  "key17": "pFMRnD4vSnKcskstcKp5d8JGa1bGM6zp5Xe5eksZVEknPW9BxdxDeo6s234zRZYqdRMQ6eNAZmJbfpVsFcaujxK",
  "key18": "64t9n8Y817akhDGbwcVnwfeV4AUR7khUhhCLzRHKke4Stven9XwJ3fAB6X79JgNjur7BY1ajatpdgL9uQWyM6XwQ",
  "key19": "5Ci1JJQMsNka13NGYbdiNgTpm2SssqrECgrBrZCFg8ctZBouCGgDjYNau5VZb9gxTL9XY9HSpeVH57DN5sjkJij7",
  "key20": "uV3dhQZz7dTMxdPFNXogKq9SskasTsr5S1C3g5958nbZRw4bdYzUUzBL4y6QUAaFgsHhYNMYqbvpy136B14hF5D",
  "key21": "3ZcLFfMZGDMYk1RzEcpWkBr22vkirQWsQjZNe7mQXdZF9xehv6LwAG5Cvx6u8Dsr5nJdRu94r2CcVqub5aywSEgZ",
  "key22": "62iNdFuDpW2whNoxNLXvcUgZTPqma5h1AHR4RDH59mc61SXCXJ1oow5WsD9rtJjXkkGpkiwPeP8digL6NrNtCAAR",
  "key23": "2xiqHJi2c9aAGRHrFJY8NccZhXJ5UDqBAcYUHBLdHw2Wk6AV8ARj7wLdH7VAYzNxZTC8gD4hA2Gizr93VJuwiVoa",
  "key24": "ASeZCotL26iHRQatjwtbXwx75tAgUU3DEEbQeEtCCkWzvyo7Yt8UPKvdYYxiyUhi9q8ZSk5p4iQ3LsQJi34cQpa",
  "key25": "3o1UH3DUxfrKUjWwXqeTnPF4kBWQvZHec7PfqXt3SvrokLVeeBubyGDgHs7jEPGBWQ6gUrrBCTksKCx5F81odWZn"
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
