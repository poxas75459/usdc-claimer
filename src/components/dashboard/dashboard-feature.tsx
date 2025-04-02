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
    "4KnBboEpp5bESaH2ZcPSkRxGAdDVHL8cCkUoRU7Lm9DfEXodbwvjt38hivvJGirXHB6iBE6yzdkjwpVC8hNA8tBP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V1JVpRzgvBpSvqAvBknkREWDnHibdyMqX6nGZv2DosmoBxVDfrahSGUWxds2zd7FPXrEeHTriwMfVyQ8mk2vpCZ",
  "key1": "2VHspBYLfByRPrdWg3TD7hajvJqCNXdNNVaTFHqHTLP8SRTjFbqwuFmua4tzPEN7YQpt2XEnrvwV7imjny18S1Vc",
  "key2": "boD3g6x9CtetrnmA92sWwqkie19ejgPnoiPm67qvBnTobbDxgV8cWYaMGFki1ZdkGn4KG2JauvkhCkfzNj96fEe",
  "key3": "3Nruin5vF1qsJFrgqNKDiFe3kqkxMDKRdEvg1LW7wXksZpWzrF7GBieTGeuauxNzHEeHThznKcnyRtsT5W8AXYoU",
  "key4": "23wZhDRS7CrvFyf4RVAFN75uGFEAn2akoGrJVvxyrCQH8NdmTH2uoPtx4hkMBzuU6JyGrG6zztwfAvWRHHsP7yJ4",
  "key5": "2yqETUea39MAwJdRJbbBXm6wYFULvapCZmspX2MGiJKGqXdT5uN1WLgVwx5eumVrioSwvd4rNiBxvLxUdbhqS5fK",
  "key6": "5jUmVZ8gRx3PtXb7W48nLK3MBnkXsAWQWGAhwWNzhGgCNZSrtvysZm3aDZtfDT7UinuSb9MZWK2epnW4mx8hMm7W",
  "key7": "46QrCkDJJUaMsejS7TTQGBViKZdbSuDBetjwsF6gPd4wkNgLJKbLGcDiri71Zn7cxdCGEfCznBdXfMLhnFWQW7W3",
  "key8": "5sXT2fV8tzAZoXzkdX1LcRP4YMETsH2AsxPY9QAPw5TsCn38Ah6r7iimu25VXimLabj2X3ioEnurd5wiGPvbcoHw",
  "key9": "3DptUMu6LVzmGCKfj5UmwDiYzXLxYtMvXcVcFb8ZRURni97gX9X1rs33zThHXt2T5w88cEXVazyHkwrmFGTxCzmJ",
  "key10": "626Q6vsBshQhB2gCNWVBqv4HRuWTKPsGNPZJXWGpK2bodHB2HJnoqDjwwhiqk3rxMnKWa9keDKZK47UyqvxnF5NU",
  "key11": "5ikmqWkVhsPyzi7fAypY3zCwAXtvQLivYk67jQDkPhdcqZqyLMB4jUF8CECWvnrC7viCh4ET7zhgpqaFB28PK7ZG",
  "key12": "4VKJA6dS2s118Bw6bHH83cZSpAh1kqnVjaRnZV9Qu8AJmzznYoc7gpymFpHQMPTDtx3Zwg2CeNN3MpDujNN7Z4Vg",
  "key13": "34m5Tei3zJcVt14Y5UAZWsrG5ryKiXmnjYkscsDzLWGb5HqAuckV6hFQZQCh8M3sfDyFmEdaPU5rwts5SieB61dB",
  "key14": "3BRWZZvKrSr9SeqxvWLA58fgFXZqVzcvjYKUtxbXjQCXtZZNeoDqijUQqn5ZY4Q6U9ojkhjoFrdkQfqDy4fSpkdQ",
  "key15": "2zuxD5dskAQi2pJSM73TFrwDjvh3VM265xZrbwdNGyw6NS7HmpA6ejr5RgpJeELLxVwPZLsTa5ayofcXKFGQfbe7",
  "key16": "zMBNCv8sVsc4X4JpKy9AvsDfVpZ6zyGMByTbve7Z7Lb9iKaqRy9sAabBQr3rcuqpEo1W8B99TuKE6TAFtPyX5kp",
  "key17": "4KTvDbry4qTmBGEfu3mmYAEmusZPsTKM7WgzDeNpfYSD5Wzpb713P47omUJu7T65VSzVhZGaiJWfufj3jbPbo1NM",
  "key18": "mekYE4zHHKoAuMDPuGMu8mJzqsFutD2Y82uUdFfpms7NRc3h65AVsCM2YFfoRzCus6nGqMoFwen6PuVPrm7qZjX",
  "key19": "2g7HcAPgLSira1GjdY3dZUaxiJ9YeLd3ib1KGeJZkMjDEmfTVdx2eK52891Am8tT7zMEZr4ZqCwBmry5knAnuKjY",
  "key20": "4ZH6D6R23bngRza5y6hFcM2hNfosYvyMkzzx2uD297xuuPJrT6G9oPxTXziUvyy5spCszwiqS5CxfLuh4CsNwFUh",
  "key21": "3H9Tpxgm5ZosSu1twGWRSYnLq8kBWM32bekMtk1QcipZ1xe1yvnJTqkmYwyRVFtWoggZLhQdLnGxzrRC6SrAML64",
  "key22": "5dtaWtEAGdweXm5UYLwBSTsUUhTLMbpcT9Urhh6bB17QJFTRhFr4ocAYQJyDRSK8HPkgcCfaHEKb8u94TYmbKFjM",
  "key23": "3GbPwzoj1yfgjzhheCGBYUcJEHGexzDUwJD86A3VAbLmbmjCq8AMWoFoctggzKJTn1ycnVfweJKniEsWCZTFPgmz",
  "key24": "21XR7AKAfBmCn8MXctBkFrzbTbec6oTj1UuV8LHkkPGMX5hMHhS2bUGxX2qd2sC2of52xS8vH5CmAMp5JmZkfZcu",
  "key25": "q7aeawJ2ExU5b4ruQSNamiE1NdXDnDKTfe4bCtmM3tU858PTEdi3tRWT9XwSkkj2CzDeNMdNSLX7sannoK6qpvG"
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
