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
    "2pAJAtbzxmy5Uwq6r98VqDbe4QhPSyFpgdGNpETJ8HUzEQfccL1UgzHDmgHSNFqYXM3th7hZbCUsQ41KiK8tgNB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P1AbweT1uf4ao3gMKAGr6MSw5sLkx2o1CGBEfhny2j4wGnJSfLEWkAJyx7iig9eudJsTjFp8LxkgTSq5HbHVCqB",
  "key1": "5VNNPvemHZyLsJChaRu1X1d4Hxh5qqEQYrf9TP3hu1FNFxcjoVRAvqEbQ6eZrx1sGtga51hQfa9Cst2AgVfqZv5Z",
  "key2": "5WT3sdrWQuv4poTQatex7F5ioioWm9W45iC6B6QtdHZwt1fC3rp5uwJDybYzf2WGZrDF6eH76ow9fGHDye8zs4XJ",
  "key3": "3NKrTtgw3MbnBeQ7jvGCKwZmvBnJyzC58pxXUh9e2wz5P3ieBe22SSosfF768wJwGJnvDPDGeqZFgpPi9AK7svhA",
  "key4": "4sXAmDv7bhcrxwaQoDngvEdVasBnsjrJ9uJRpp2224YKX4fdHtT26v7g5DgFPEmiguiCBbYqeogmo4TjcswUxAhE",
  "key5": "52dCf7oZqxWFyCMNGmHB5Lur9q1q53MnSdRNrcvQUCA59Msridi4PWfjUvZ69F4zEkrN6bqTPoxs4jVbLeCawbQb",
  "key6": "sZjDdnht9PLkAqxgqy5ZuvE91H4AotmJ5PiqYaZfruqQtCvX4bmVMdgwot1h3tqMjhf1YnRTry2dDrfWdTHMtv8",
  "key7": "y9bThcmpfsa13DpLk1gP8PKpvDgkpjucbQNpM9fJoDqVM9thCJdx1kWFA1K55FQMU6qrTwTPQWLN7UC5eFVsmKs",
  "key8": "59SgBtRv5UYvXfYExywaiupQsd2zsW3Mm9PnKPqLtNurbSDkKb5T5wTbARH1ecXBx5AVT6hTsMi8WJK4gw2Ewafb",
  "key9": "2yp8kyrGjeN7QL9pZiP5ApGPsGG7E6r5MwfsLwEaPfRwHDXNnCNUk4ZecHUneD6VnLQ6kFvQp856G7GUxRQT3zcc",
  "key10": "4JNRXFG1Mqds2pF6E6CtckcWbmykiVSB8wo2qv1uHbsX18o5o6GEaofKzEaeE4ZQU3WT8JPUijsSMv8s7kt8X53t",
  "key11": "yd2uvf6yyadViv6qcrjXQN8ughw4QC7MAi89JfvQXsmSt9Wpvy4vYj2ceFmw2Mtb5M8m5vBvo4Q9ypkjTes4Zyg",
  "key12": "4WD17szKFD5HiFbFt6a7iWesfuhF8eJaSRF4WpKBJCsNomhpXfyMpNJaSSCc6ew8PEpz5VVjZnHHrFyCP4U8hz2G",
  "key13": "3o3853aPNrcRodcuy2zTfskjCwYXBaN32LtEv1NuFCDHZAqUspwG9vk5LmP3SE7z4qvQjpz49oCqATaMoj6iJUxP",
  "key14": "3cgRfnEEMnEHDcK5H7NHqqSSrreHXsrEwGfFTaYcMazvyuGA7uMnnwppg7WSYim3p2Giun6nexcVNZsA5AF35Qi",
  "key15": "44XiXhszqMbh1tmrzPP7iPGdRE4XwN2aVzq4JfcubKFz4EDQaUJhrHzbiGSLnxRt6m4szikHfV9s1u7PnskNVRyW",
  "key16": "2ULwFRh17xBMpicHd56kYnyxFFY1KsW62vZ7NCh8zss75F5cXmuRceQKTpYkzNT29BTBVkcfNwZCWfzou8LcxLcQ",
  "key17": "64TPQ1GXnBbs3n3BgdtaQuJSewqMGPjJ7EjSH1W91aztfJAdUW6ommCjfUCqNzbmUcdN72TAYZ4P5L433KgFuYYf",
  "key18": "52NdgwAz6pAyef1WBPzZFAdaaQZZwMajrvqj1m4K26Wvo6N8djkM9ReZ6BijNAcBAtY2jojDdffXsBJdXNzXADRT",
  "key19": "3VBfkETg6Tnfi5gDguQSexAc82hHB6zEYoqoJJZBUQWt9uwgEpezRe1SzjAjFfR53AF2shNFHMCw7tfC7biyNMBu",
  "key20": "5uuNFmLjz6z7s9cgPi1ndRcHKnh3FhEYiMNyDqpMaBp2eyygEG3xDzFCbsVCSL5TEYgnyTGtv5cunBaHH1WQsu5Z",
  "key21": "4BiGDKPvnE4M88HvE6GAFF6VJQ8CAQd5qzhUbGBZvvrfdhLdnUEij4XTHefxfyP4Qp7Lo2TBr86rVnKnf8diA8Mo",
  "key22": "7TysWwtQaxifDTPVhstwm1vWt4RmtgQ8NFRSiD25fAJHFDTnYusu44NNNwiFYft8rcJXDARiCgSAU5iZK3aTHmU",
  "key23": "BMxreHBpNYKaszM7MUAmY5ETgR5fuvMEtZS7igNH4XEiMoqfjHpcWpzxd1PjpfjgK9VyWFDE9NS37D62NGQTFFJ",
  "key24": "3ktqCP8QRa48nbEDePGa1WtZUJUbgDGdX9jQ6CQeeVUKjwuwwvf8pWFv85r3QmpRQDk5WoxdnuQ87cf9oTuH6SYm",
  "key25": "4273rkX7L7NagwgbznVjk4jTYMV2wiNuReYFxX6MPZUZdymBFvYu9z5iWJJvvR2epGarS2JcyECVLKyUbDDoRtXn"
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
