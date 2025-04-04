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
    "2Ge9TfmKHKU44RcStGev4hHZ6BmscYyAF4VcK34tJhBrHfPJbjCYtK8WmxehistBgVtqatSdCZbcGkgVUvsxtHdo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZNk8mHMNXV5erYfAB3Foh4tkQvaq3bZGwGY8vxheL86wSu4M7Wkn8WNhZwbe5CmJ1DpYX7XNUuSL5oai5crh3Lt",
  "key1": "5tJ7nep47NCoViRji33yyxURYwQ3ALgzMk62dqCdDo1iBdyQRH1bEu8hqZvTsrrnDAckNNe37Z24afRpEhUVU6k5",
  "key2": "36rKMewE4Vgq226xaN3D6SADuxkd7i974JMd8TpCUZzRXif2CkAposwSyCac6sk49DBqPeeiPwtfT2TXhLLfYMQX",
  "key3": "3pEjXRocnjUcJPmEDWU4VBNRRYbg7pnHhNbBaV19jUXAzJ4Q4gcWqNRFcT1h56eTuvgJmwNoMphWMAM43gnszQDP",
  "key4": "5zmxdfxjcc94tK8xhLFRfN94HuRJPx21i1Uk2m2NvRFZa6pjCNyuLaC5Kyk4gwHgzvs7RktcURSbZteRUcovmsyu",
  "key5": "5GFJ9WqUiCEFGDKVvSCohysaY9p1KrrE62e7km4WUiBcFfYshHrvtwCjCCZoBrFhYUc8HtpEo4b314jiZYYiF6JQ",
  "key6": "37c9o1kBzg7XcvyYg8j54wDvGparamTDqRWFxKPSTtPqAYHn7CKJSeRsqJAhErZ83tU6nqZhx1YCGv7gwyej3kyv",
  "key7": "3wSt1NixUcsK2ZjwCCKVQPPRkFGf7QaWn9ykZubEsqBHEvKVfEZ6cPB4fw8iF4696kREdoZeJZNUCzFM9BpTxhkj",
  "key8": "oRdgg4BEn6iMSXhjQmZLxhuRYeiziQTcw9tRx21MS8gNRjAsszEZJ9Su64VQFx6hmn9NyRNdotVeJoGb567pTVR",
  "key9": "XdXWEbXdJDHnHBDudhaawfkDgokwJJYRrFvN6ycVhe4i4HWcW3uycPRRm9haSR2YPZLA2Kq5PModxu4Z6CHMdFw",
  "key10": "2JVBAbKX5UVP2G9nEUjqsaqSnrcdkfp4REmqEEKd8XkzuA416JMEQyveP1LW33g24a4EX3Y5nQorUfLiv8DWgVyZ",
  "key11": "2vYhELWUwSPbLqP9noXv6PzatqsYHr4LxHLH49dFyQF2tKuUp5rB3hEPvBYvzFfhzqFbgJDFrdmgPStWdhuwFHnH",
  "key12": "5ekXdzX2BFiMEuoemfanKjCVMaLPZB4VK44mDyoVkqw1bQfcqk63FDngqm4fSJWZUUzcKT1AcYN7cNidf5XnrkJh",
  "key13": "Mh7KHp7g99QsudoT6Jns6QDTkt7uWQUqZFGM78p6S61nALiMnRy67tMGuZi5545nr1mmsZAEE7svWopg3QzhHT6",
  "key14": "5y9D5W9dRA4d4u3zWm615xbc93HiSbRTxxDD5N4F1wFyhzwV94E6N9PuteDKyQ9YjjRFaGNEARcu5w6Ngpz8CAYb",
  "key15": "64qqBmobn1LmJwasoVCKzwLEgPhzMLUFP9PhLTnLdyt59BU4ku1gFDXDvduDkEMEMuP4pr2sKiT2dBTcumnqC2ik",
  "key16": "1PPWRNKc9JmSATNHuvmNPwyoyu6myaN7Zkgb1MXZ51EgVmS2ern1E2erXYu5crGfxkiyBpK5qFianrmtmtzYgX1",
  "key17": "45o6MJXQEcsmQZidkuwHSYr24Xem6tQMebFPPrQAAoegxbyQE9fpnpXcE43yT7eULrKhYP9wKkSQevu9i2gtgJEQ",
  "key18": "2GMTPRBzB4id3z6SZrQEmC3rXDue3ZnMgyvqwwVPhsE1y2dnnJ8iS2F9NqePNqPUrcbnYNjYbqJXHX1CxdeBQYUo",
  "key19": "49G4JRpuqaoWceMeXfSBAwiufCneeF6yKpUZDjso9Hdre45jnjFKRGT72WAg76LVQA59kp3xSSuMHTk9gvXLzaLQ",
  "key20": "5r54YS5vXvVGmrbsWXCPBEmPF8xf1Sjq9JGcgLSDT88rqiPDHV2trNHM4ySyPjhVVaJFXQYRZmWmbtfdmdoLfBx8",
  "key21": "6JH9R26Nq1iSw2HWgB5PZxneyM862YUnXnXArFhzwQSCZFDix1hxPvdwrTMqkDUkdGYqFw8jQTUzQxwsN4mSDuq",
  "key22": "kAYNfHUGLkDff93j5uMc42gqnrkFPdKS3RAs5ucps83a2Z1KpfeR7NC7ifuo5na7wWGJmZRqPpraURWr7g79dy9",
  "key23": "5fxEcDw7toPtCjvPkxsGXpXNrBDG2MzpT9cH4FwLU2cVhpypAkmyQVJmAhDeVbkJou2TihreabiBgZ4KZcRiQ4hN",
  "key24": "rXn3A2e1XjjFiefvAZc19Sc8cMv68fVGySDvL8a9xGuSS1J5M5fgJPc48dsQeJGCBZ4KB4p4sjVhhAyo96CbDwU",
  "key25": "4uLqstvSHVRugRvh2fV86hECS89rLZP1ftUPdkyHLSxyKXFnz3SwCS6jFtUa4u3vgAScTyALFiynstkjYuPdKdSv",
  "key26": "3de5tRZ87BduqxFCMfxwc6SAdt6KAr1v4GFueYfKTLNwTxJzPv4g9kzZqBEid1K1NCuBy7ARFhSRiarDBUfXDVrW",
  "key27": "5SDS46tdnqC2iaWums2GJu2Gx7keRzH2byqV5g7uNhK4M2ThNi4UFgVWghtxgKRWKCyigq5vBCPYWdgNCLuaw398",
  "key28": "2kJvojjbo5x7XPsX1bjunQmrpEy2gywJKfsBXTpVVVVBjktpXoyL1BabSekQ4wuZGtPHXxb3FhmYTkRK7NMWuk7V",
  "key29": "5C36E4soQfwQ94zDxXDN7qAZmfMsu3j6TXFf2Rf857AyLww3ajaSgXHvRR23wmG8iLio9UtaxpKWsXWirBL2pq2B",
  "key30": "3M44w94VqCbsPvgZEFT4icswkeo457iXRghKDdigamCCcEsayUYyNnVj4TVE51eiQmqBxi8E7EUuGbq7vtcDhmZ5",
  "key31": "2KPgpyqCPNYosek5ffCEhEqgUG3UrPcNVGpNn1ExEMcQjL1nmBP6gvoHAuwRzusC14VGrYv9ToUfvUkmkxWqfpq2",
  "key32": "5ba8fhHRCJF3JFKzJnYyFPLQwW5tZfT4neixnNsUS9sayWy66kvineuj8ykGh5SoJrFxyHgwDm5U1SpbX9fqLbbA",
  "key33": "YwvWajgfA5LH8dbJQusdeUwWb9HGFJSVQ13Kw7Q376z2SXHWBF6Gme3mJ8oFgpkdtnaysujXQXeP766d2prVgY8",
  "key34": "2eXKZSEjoetivPJQ26rmiA3q1YUe3n4YWCWkZo3ykJhJtX1nUBd5zvzPamgBfaxLqs8C4rhprJkCvNTxYeH5REXP",
  "key35": "5BhpM3VmvBxELepx5tgw3HCBydod7hvtytYjQiys7UA33QSA9U2DBT9RoASrHXCSP4KwrgwKJNHbuaCWj3xsTAKU",
  "key36": "43SK1PR9KvCcFhBhPXEbhh8eyf4daLnDBEtRiEHwepAMtybf8ChSDZaLWVBGWXyho6nEJquYAJSiBh5nuwYHhUsH",
  "key37": "3fzwyYC1p4taummqPJnENx3P11SxfQvqHckbXt7BsDCYfA4VyE9hDAN6zfb4XYSSvfDMVmNN6eu26emkqgsLUwsz",
  "key38": "VLEUvqsYmPhZ5MuNVsHVuj5cgvmpj3kZpenK9q1vZ5pPnFfDATmCknSFHJiW5aGUZnnJqfUd4uc5MQ72oZuV9eM",
  "key39": "3iqb4tSZz2JLH6jMNLsGg1KBtNkU8j3ifj6rp2rC1Wr6fbDmon4wgTkrbFnk3TDsTDsqWBeDfziuN5BUJWcKygVR",
  "key40": "2tj8t3Wc1rY7uN13uaiYE5gcwh826EipWk2Zd2Gqp7yhpdzQPa4fUtV84mnF7KUAV7AnSLLQ3rujspnvikBA9T2x",
  "key41": "4hU145gsagEUYP3Z5B9PrkzvwJ24saxfVWdpqH4QT6L3ymB4Qf7Q7AMGKE1BRTv5TmuDNeuPe3pNcmb1MtybFSka",
  "key42": "4UP8jytbahSWPunwM5q5PHgjbjpHVZCXffTAxLxztK23HsEt9Fwv4smqVj4RBHBWQv2MZwkcYTVZjoeRqiLCK7Ec",
  "key43": "5mUVUAnM1mjirPFbyeaM5vUZQi7zp2CzaYiB2nBdmcyugpomZqfJkVRGU2T5wt5ay6mPHhm5UmwJJCCEA2v4QCA3",
  "key44": "4LAtKrRcTpji9gRi2jaVppZ1MVznAeBA1KSPFKC5U2JWsvP1K7QaGXi2daDUesNojVS67wCAAJNqNUYbSeaqRRKt",
  "key45": "57TAJpUr6VAcDSQtbf2ZoFiCvt3v8pz271EANfnQ6vrbZ1ovSe4zUK61vcNCRVpSLZuUofjA9XVYSw8RYzVMabqc",
  "key46": "4yQZYxv6SxPJseUsgEhq6fi9e1zU8sx8buLPTnse1XQ8THFzvFieY2MMw7Gvr2p3GzwPYZE1bsaRK4LpU3PSEuWh"
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
