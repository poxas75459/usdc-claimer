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
    "3H9dn85NdgdEZetz4CjpJMvu4mHbHUXyppxq3tcjJDDW7Z86q7W5dyeeJ74su3gDLD3MANCfJREeGC4F7gC4oC6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HTxPCz9qLzPKsbkVfAHuoG46zmyQTQ4L86uxmuBzUVgpQWa2edoXpp37tzJw7Q6FxiiouDmixKSbHo8VGy6GUkr",
  "key1": "4EtPx39MhPEkiXmy7F2f3awRrNJ3UNvGmU7AMuvzV4EsQ9UxaGFXiiWgksjsVeGtpAQBrQUkmmx1SzqGeeCqfb2",
  "key2": "5KRNbp2nU4T5GUzW2a1kqGdsLmnr5jTsrDBGPeQgnoZaMDjGuEUs5WVHVjQzmcMMYzr8rLpDwQj8Ku56VHADMUqG",
  "key3": "5bDY8A2p5zaryV9Wb7N1cWF36SZgwGk38m3xiHTXT4Yxx8YiYmoiSfafHEzhT83x8gJPGjiKMKvxmmviZzjNxGy",
  "key4": "NP5FCBEbYicGrEVNFcnbRN5CdDDTv2yFsAAqkt3BHx3HJr8zzZp7XQpxRaGJwdhQwhRbhrxZs5Y3R47fbVuSuy4",
  "key5": "4tRrLb2nQV9qdhY9QhCExihSdideGAeJXwhTHduvmD5gorS6WYXdAVNxXGL96ciZkGoBHrVytY1e7TNzEjqTA5LX",
  "key6": "3XsAh8KGd6fiHLRnywshbWsCGGUfDBWKRZQcXAno32rDzv9mRQhZtTVi9X1Z8xqbj1yWWe88c5iaUJMfLMCRBwE2",
  "key7": "64WgtanmEJdcJAyRFgHjdjQ3maUr5CPeBCkphEn2JJMz4yYaS9BWc5E1mhBSSM1eDrZo6NW2wD5qDpGMVRkLRMh1",
  "key8": "4YX6FAMwbbbf8xnPhQgYUEoYJ7kTRWVo4ikhKzL8Sz9bp1aa1N1qj3VRZQFEzqspNkrU6PwkZkyRDGHifCr5WZtx",
  "key9": "dxdqZ32PZBkifvGobmQiqEEpmwmK7qFv11yZ2ZgBopC7DsN861PEWtDGVivMdHoJiZq1Pa44kf5gwcFz4Bpazcm",
  "key10": "4CxYmAX94MMVhyv8kdNAoypt5TAWrGMJLznqC4uDgxgbeEvs6p1PENxMPseG6SdJifxDrPHz5UDAGopb58nqcg9Z",
  "key11": "3azqGwBKTBqzy8U69ym9Tuonip2iPSRBP2MPCUBjWnSqk5k5CUHitLH2avsgrpfcqsTebM4vwdQ7peVYD5ss5Lbz",
  "key12": "5PfVCG5bbtPLU2dD1eEs1JmP4BCk1dJyHZwhgdDkcL3SbCusMhqnvkd7RTcPkG4jS12HZ3YaZEM9ijq7Rzd8Wu24",
  "key13": "4NuNNHmRt7TfFKk27gCw5vX3MCcvrjHADPTUJeiMyhb3GDv7U4bxfvJU8Yt1krszDFojuheLS2zuMEVRzJwGBdL3",
  "key14": "3peaXHoRye82KC8o6eRQz17hwVz4nLvQmqwcwUBJ82PvRWqFpndAfRLqSJMiAjjdPLcRsn8RmbCbP2ybuAFopBGq",
  "key15": "4qPsD43Nx4sb2jiRRqbUQt9rL6oeoFUBeLmW5LGEgF3qzL5c1yJz8sHfMXDV8VdYExp5Vf573UfbeJ1cjkXg8mYD",
  "key16": "4yARMBDN5mdqm5KGPj4MRHbr8VdCwrnDCHPE41HZ6wGNNH4Nq8QDcwt3LSAJLSrToLMPECk3evwJgFTmGKqG2i1B",
  "key17": "61qaMaiF5xgG8mxWyeDaap6LzRVjUHtNfxQrjnbZkTyJCiSnr21CuDDRKFGLNRprnbMoV1BDM1NWs859P42Cb8Zi",
  "key18": "5cjuDE2sfsqPVE7EwUoXGEEcwrTq38tNtzBZYdZR7ZWGVafMyFTK8NF7M8UxomztKGoP2W5iFu69hc8x7SdRMj3W",
  "key19": "QHXg5xrUvjNhjiyHuK6EAEvG2fXeCgFDYY4GuMsj1YwDa95GTYUULRoKHFpc4KmcbiV89atoydNcj7venr5phpR",
  "key20": "21WubqbPAtg8H7ATkeRxD4X6gfRKSHa58JrV2AyqtLoA6F2XyqJzT2XQ6dgwj8yEUHL9FPpWNgWbdJhBdUr1FZAx",
  "key21": "4kiwMdohRiZAQEc7AP3DBPetSDjsJAv7ueV6f4zf9wD9q7ZMTRJFX7ETmFfbnqsp5ZjBmNwzXZ7pbVdUp4VHH1p3",
  "key22": "51jWRMPNgpeHosSVyNQwKj8V2yPxoTRzBMzLCjPyRyXFeKu2e9nUMwXrFULLSaxyPvun9aXN4Fv8rmnju8WLMBdA",
  "key23": "5zxp3PcHW1u6MahJjt5m9nTSnVUx9giCWn2ndqc1FffN3UQ7XQW8igMC5jvMPhR5HNWcZh1JbbMQ4Ct8ewd7eM3z",
  "key24": "ch2B4FQz2vV5E5WzKTDPEoPyXqncuvSfQhZuXB4ZnN75Vt73XgXXLMEkETmnMcgyNjejYTTgWrd7XAwNJxdEbWh",
  "key25": "3SxY9zFmHcGm4LCexz1sMzWjQ4XBwzd3A7vaUVrPkPMZz8F5MDkw9U3egqKNZK19vnbxzM9fUgYFyBYsPhUEzCsA",
  "key26": "3Lf6PHJeAFX5krr8BoBX35pbn2JXQ3NA2KNKGRwcCTojztxFL8s6zYh2fXr3zfByXsiJJ1pYA53p5JNX61QEHxo",
  "key27": "2D8jUEdFJiNUtq29NnzAsz6vZUKaLUXQGz86y38yfgovtBZPV5Vy4ZP1g6CABKJSQgNjG6DhbCB3DpG2sGC3zAVY",
  "key28": "5zA56ES5KFCtKQiE8NnoUFXmXVQJ4Z2LMUCDcRoFyESF7NVCsPSSZXRETmaJmaouxckyXTFrsnXYMDcVkZXora9F",
  "key29": "56GTsuKPHRbEKhJAXv6mmrajR3hxjrcWMkxpBghnd38YgXfgpXmHzz8DiPt6QspnYAxPw8StBfMR1NTkT32R8aBN",
  "key30": "44B9eqfDqw1DUA8u4RX213CSGGqZRHpeXqgoG4kbc3JvhGz16LxKnrnHcQKNNowiQ28HCzawDZbPDHt4rDVNkY4J",
  "key31": "21qwj7iPcdcwx74EJsaNTLFYuju2eHESCJV2y1Wxs9ZAiiKSLw2hyZYq3ZKtYzXeEvwwB5mKraTbkEmAAueriGbZ",
  "key32": "61859qQXuDMtmFYm73RrTQr98xTk1CP3DvMbQsLrxosTmqyMymKo13NhwGTdLCHv5tzuYdyWDkXcbUztpeiMEZ26",
  "key33": "22sNwnMZWvnEn626365cezaGRPrBnKKi6GZpQzijXNvrMo2AXqtF3AJK4zeLo4nfoDGZPjMW7MS7EivceC6qzZsy"
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
