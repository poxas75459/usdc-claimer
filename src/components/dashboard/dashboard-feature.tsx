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
    "3uis9s8iHgBoTfadgXdkCopGDw7jJ8L9hFUPWZQRYhJFe7pw3v7hVhRBkG7MhdUPfQ3fHGhuu9jdCPqom8RhJwoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HQs5uSKuTJWwyErFdKmQrxAZXnrQcAfzKxEjpFrKN973EDjxmFRctRoJB6dj6vJ7yRfTiqctLMvQCKM7oDMcfbL",
  "key1": "4WmUdX7E5YFMUPtQvGWSrW1ooAwCeuv1scaFAQ5hJodJbbnJMUqgRwEErkdd5beZsaMf6ZDNCjTxLW6u6FGPDQSu",
  "key2": "4m3ocyPt1vQnAjT7UcMLeXK81t3z52YyHsNiRrgssBENPUv3ihRk5FQXhqJESx9raKdn9gpcKYNMTUdGoPfNXS9k",
  "key3": "7Xdf4xChMQgb651DprkfEbJ6Rc3teQQ5rfRThAfs689a71iFuDHZ9doPGeKppqLaDGh5DPJoeSTaQA1pmjphUtA",
  "key4": "4h92dhCr74rgR5p9g9vKdvegoWzqd4z83uVfbvhPexvuiEK4m9otwbFcvaADnpBiUirWw3MFZZB64LuK69NvvvAU",
  "key5": "5A2FLvkffShJpq5EU8TGf3vMDKvAKuS649MruhB5VTwieUKvKqziDiPc4hAp8MsU37VtopnTF1SqSXg88ogjwZ1z",
  "key6": "65taBrYoPkwtC8dz2MFhUPbJMXgcyhrWwWy1x3TUZPqUrviV7xreyiiQSbXDNUmdiknwEcGNs5M9agsnXNM9v1wz",
  "key7": "2hsWGvCiCSrEd9GVvk1Xs6fLPMsa8CQJ27kimM84RebjxSTN9jGCQ3WNHjsfVRbCZstyhoC8jBTSqFTYq2iZk7Py",
  "key8": "51sp4M5bLAvphQ2PUNzPkuoicEj4QopRWrywQStegVk45fnrmmT2cYAvXUYkCEU3MsKdyNmM6icLfneioBhVHzdN",
  "key9": "5Z4UNn3YkB9zdsmwsRLKqcJ3MtGji2CLUpcsEXKTd74HPho9UMNmQNJpXYpL7imU4iFGx1afN5DMFrBePjsxzwFC",
  "key10": "ddsydK7Mb4kTmFJ8nMYbKKaQE88hDGFBnfw7KKEFddjDEc5p8XyyhkwPPw5s1neC6wjHxzZ3pBX5uHfWT9oMCkF",
  "key11": "2to1MbZ6bvEz3sx7J8ireC3iLDpVo5uRZnTPBx9cvsGDDAUqJzv26G7Cr2HoM9UgWdXYwyF2VzrjxaPjCdnu5AxX",
  "key12": "4RFT2BReKkMkUdBw5phEpZCsTANPEXjx8kJLYeJAx8cVh9okqL5Zptnyn8EA93p9NeDj6FWs2VShFCxDSJ9XPAFo",
  "key13": "2jLJiDgZfhKQpxnwr5qpbNdwKpGUf6ABgWUAUX4uejWU5xhn7yT8z6JSwuiuEjJR3y1UV6DNbpsEpE2W7KSpGivw",
  "key14": "9HRsoAKoWfUury83xHhY8DK3ZLJG7bjLsoYvAEVwiUj5XirUgMJRmw8r25MpECS9LegMr82uPsvTvT35xZk7Vaj",
  "key15": "22rxqqvtneJ2pmAZDcFB2inpQW11byhS2F28EAJt7vViuZwpT2Bn28Wt5UJYhoFvB85wCawZ8H8tMqhhQh3jah58",
  "key16": "gEMUhMsi3wYZfyyWif5sqiTc4xvY2wJqsXbyn19oA2xHpVhFa9cxgtUA5nM3yiL17uAKTFmQsNX5tfKs4hS6S26",
  "key17": "2783WcDLPXPCqzK98gzvsdysabt7cBds8wkh1YAKrHLw9ytUMeiQ1d3BPRYi2MA2nbxBjcEUeSnfxTQ3Vw8Z1ex8",
  "key18": "66CUtzoQ9NM9a82iBXFCihjo4wYSXmLsRqZ3tbEzSk9FhE3UpjC4hpyqwFkJmQxHg2o6XHpFcVFrHA5WcZoym3hu",
  "key19": "65WpG8faFXG9AD3ThSHXjh3NCimuu4WVQzFRVfjuy3DJtacrZ8Tcqu2zMdRchPa6rQZjMneH4g4ZeSuVQgUWMJaD",
  "key20": "cjL3TGV6VQS3GXJMcijDAFsr5KPrjLnMYU1jYFeZqZCs7QY6AMQMzG5aqmgzfoaR6eE1ipdb4cn96MkipUmp9Ts",
  "key21": "2sjcBjQ1RAnVVpDAFVmVnXVRwHqvGTsZWSaCTs4ipZKV8n6jmnQgsqAiPc1hQcqHW2fGMT7d689UYW8c987Bn72Z",
  "key22": "5Hzw4yEgNUQw85f6CQdDtMwNp8aG4yMKdYZ7rTnHwRe2QPuzLgJNZWLC2tXyWnpTbAARquxtWzav8XtzSC6bSE8r",
  "key23": "4CiqUsZ5sLwLwX1DHr7BivCqgtc7Hebb8bbEjheZWuUgm8MTRFnvVow1QHEWU6PCCgkSY6SBy6gooKeJCreLeR4p",
  "key24": "5pot819w23zzpGS45Gbuq7B95c4CFTYPXhWzoqMxNFFi26uzHbZQP4YkSPY4pVPdNaaz3DkFRA4dv8ZNrgMDoRAs",
  "key25": "2HV9bLxWSGJyGkm4xQsZAzHd9QdqwLQefwbzxAeFGnJnUnWkF7dRHJUVvsEQKb5A5eq2s9N9M7zP3RAUqeaHJhUs",
  "key26": "3xMQwzJSeyxkL5Vx6PKkdujJXS1rFgwCefxK655JAdKH3du8DvC4uDdYyRomWgHgAECXp3htoBwrDzaqWvFZULbc",
  "key27": "5z4WyK6Sq1pHCV5oo6ZkjnvbafBsuFmu1fXJyuc3AH3oSNh4aWm1qbLVB8CVBnuPosJ85Vywmx7zCyz8Qa2ZGGRh",
  "key28": "3dLx52XUcf6JzbrorqerMS8foopzK7GrVxDAVXNGa9p3A9YC7sthFi7GXuxEM45MS2U8i9tarfBEBEfgxFCGtP2m",
  "key29": "4GYnJaJ66tWvVwadDGT9JSnsGHcvYGMitUQYjKHph9fWuvyBEjRws76sDCrQsJ2gNG8YHnoBNH2rwNmeiuJp8jCY",
  "key30": "2HUwPsmSdLaxZqAP8ciTNhA7FoNRhy98sHLgfvpCzZirAtj2kRbmy4rs1HZ1Hayj1XYsbiran2S3gPZDdTRax5xr",
  "key31": "3vLFUtYZrD7suRLoW2syNVTBMAqFVfMPP8tkh3SATLLzJTLuWd2gac64qrFG5sfvcSx9FVU3Q6JKW1tx8rtfedoY",
  "key32": "PrxCWNzZjX51Pa6NZDQw9ajyf1Dce3tHaet73G2ZZcmT9F86p4bbrA8jDLBo7D852pERUQJMM9QCoRdFgBTCR54",
  "key33": "HMdF8MbU19CY94UFDHj1PYSJjmTVniHRupUvd1Efn5oKdgVioTnp625Fcai9Vp8BEEXH2fGdsEm7QV5y2fSdLR7",
  "key34": "3B9xVnjc2xs218kejnbBHiMa41ohAZgtp79D7VLhGWqt9F8QBiqEXaekbHiN54Z8xVuvU5ooug5G3DB3HarHi3Xu",
  "key35": "6gifFv51JRRj1EbyT5nqjqiJxckLSMdQjKoxN5kPstXqbncYJHszG2tBqyLTMDaikEuWNska6qF6ngaseNyhhBF",
  "key36": "4NqUNnpCjbVh6GhMnABM6yD3p9mC3jdEQMiSRgC1Fokbd47wMXX9k5ZeMvG4v85pnZPjPQ6BJMSJm5WZNz3xug29",
  "key37": "4iUfgcpNjwiBrVwDLGKzBG71n4qMu24tw79HgiJRsNJ2ePRbJpofJQ38XZy9tUoSq5VEu3eLsGX7Pkxt69HXLrXF",
  "key38": "ooD1gE4uzcVdnCCEPxgT48qb4Tu27QVJDBTgKbGA38ojCMt8Yo2xd1WVRFNVHBkdmyLkuHMuhQc4oKVADBp85XX",
  "key39": "5zNPRJgvMrFUx1KW7CqP3DJBguyK61fB7q4wM522j6d4VsUukkkMyC5mw4zWef4vCb1icVstFs3cgKShkpFRKVwF",
  "key40": "38Mj1vPRCzqnNU8kjf2Wc7QMaLxC9ebH7Xi39uY58PZRLUH5gy3Hwek8znVq26in667F7isER7TrDijL58jR296A",
  "key41": "V9gn4wmtWf8yMeq6ibCLa1tnRC4Wi2ZEyyh5ha1ceAJAtd1KbwSPWae3EewjmxZ7CWf7JKUao46K7ruLtKksf7X",
  "key42": "26LEEJiW5FpbJjCSaVioFJrapLHk5E74ihqB71WQJJ9NWiKZHuhEXxN6sLb4hYgeMJkXiV3wQnMHmJW4uL66hiBR",
  "key43": "QX1nejAcXxYvJFG36yaa9B57Koctb78n9hwbFT6jsCbaunvjDvLnJMD42RJz9CXEEkeZY1gGXyWBsFqUf2dyDBK",
  "key44": "4JxgpDQGpVSSPpZAoNjwW2rQciz3zL7N2mEmNPwM69wifLcq6W7NH7QLUMC7M4WR2NCJ8Lfp7cSKrRrd2j2J5D8R"
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
