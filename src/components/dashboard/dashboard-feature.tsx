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
    "dKQUrJF5utzzwxTBwPR2JNbjH3vz1VyV2m5XvZxK164mWAj94GTw1h5XmCj7nutFqeCNCDtfP1hgddfEVsaxe3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NujQ6CkNrBhJqVdVD7Nnxy1UDM15zCzMt329WWKDcJmVTNP2xy7cWSUx6k4YNxPWxckhgnxAtE7XUM7AnrbWVxV",
  "key1": "4PMa9tixfgALhzDF5Epr6EHZoLFxUcmMRdafjj5xnB2KXgarsDNWpKfJvmFWB9n3it4ZYTbv93B6u8n71bbS4rSv",
  "key2": "47k2CY7o5ijeNmDW95vSVnvjTrjMq4szYqbYzfJkzbS3hPXeFvTZ63qLSnGvguPzMdecTXvT413sLQXXTfLvZqLK",
  "key3": "2YSnhZBjeGKW3RNHPntRzvKmDpKJHkLawuQhS5Td97SL5o3CkBBSXDmji7pCv54LnNoUJYeLnpM9t3TCn8YLuMXZ",
  "key4": "5gvYTALJPudtmgwv4VgKVGYYz4JLst3uSGUu3WH4d9hfCPtxfA2VDv2uHNVXLKcLBbrCHoPajgG3fGoV686JF5ab",
  "key5": "3cfpm6iphdEA85AdebHEmpiyfFGr68kwX1snYPQyHHeWnD81sNLFhUBfKWEVaLsY5A4DMaLukXLkKiPccKg9a8FT",
  "key6": "4JoqZ78UGWXU1hunzWfyWrdJF8jDTSqU5bzVb1zShT9HVrFrcXEjYBhzXn7gfp1GHy49mR92CqpqaDAgnU9F8NjD",
  "key7": "LXA8YaBCty4B3h9joNW5AM2mdX3bXMm57W4EKz1NWaRu25fYeEXAFAP1HZQV3YtyTDNq4MEHikPnqsx1hBTbtXg",
  "key8": "3FbCT77m7g4oxoDMEo8GknauzyZFfK5aqGAzthowVBkxZAzSHck9Ty8z4vKc5A1auUWhYGCoaTMEmMVR3Jetjgmr",
  "key9": "ct5nJ8qVeKG83hWJ3ajsgpkL9Kxx5Las329jfim5JueYgc8yUHLNKBjzyVrdSWPZNzQ6QKUr8Ps7C6peeS1rgeT",
  "key10": "5EPFeEkcCk1bmMksLVqPB7SnJpPuF3gxh3xh4ycFopxSo1xhe9kvNeZMVmsMr4a76iZ9aB2bRzkRNXAYANMf7Fqb",
  "key11": "4gKKXgkvK5rzap5iNr7nHmvJTzynU2q2TCdEGc9ytMQ4shsttyZcRqAvJ7AoskG5GmUQ1rmog9wGpij9vthdZhhc",
  "key12": "4vat4Y3TDcf4ScsJm2gHVccSFwhp6t9S5oasAdPcdAKrM58ZuMdm7SmNhe8a2dK3sMArrjNZhyudRHuEsTzCntAy",
  "key13": "KeXgPWZ4VR7nJooiS7j8wjWX2LDgtnaEPymzS7khtrZ5CvpKMJ5FZi7PbBYPg1qUKh4jRHF7UPXiftf8fqyyKMW",
  "key14": "48cea3Eysi1XwiwQmiNnvfoRVWy4CYGPsyvM1ESfa51BXLxP1F98nzuvvpKyRPf87SgEAj5j4QsoWX9sMve4pm3r",
  "key15": "4KnPsAjafMtHNPs4RfYNNV9ANtPHysFsgMwLKUe8Bbnp9hej9NHjsDQLQmL7FLMpK1CtiaphbyAvqkYtDMafR4fW",
  "key16": "wXFjRPGhX1qwfe3L9PaLgwSm7Yi4wFRkgvNF1vUuXjHDpx4ZqEpa27wYEs8fmJsatRUHsyx71r7KaHmKZL9dcKS",
  "key17": "5zQcH6EsLhG9wVLQLZ7DH3h5V5eXfYFJNWadcUKCWuM47PRkvFpqa7gvjH7NLT1GFKi8BeYgs4MFhcK3Lo8Pc4NW",
  "key18": "2XcTHJYKYB65SvptsdNKJTMcFQErcBjZ7Kn3MwvekT4YZFzqFj2bPA9MTcffc8zWL1PrAfwNzVaa8VjoithxdQSo",
  "key19": "4PwQMW4ckqdccSbu87jsL8NiQZdGmW9mdWNUXVNBoccTvnXQmGSnX9cVD42ZaP6pREhqBsUvD1TpTd3fSVQGGu2f",
  "key20": "5VfhgUqGagMi76g35BnePK9wxwmkLBjWRCwqa1vEJgHdS1U2BqmXGahhLCHBR2gub29VGXKLv4m3MX16zbC8oGqP",
  "key21": "3cuDhhniPEF7QwCJL24yLZuz4rE2EEKqnyFErkw3exkP3cQfvv3xBYqJNdXGoHeXpQwL8SjzyjRPy8HVP1Z3QxpH",
  "key22": "45yL8Kmow3LCZs1ALshZKcsY6SEfmNnrsTRhSaRd8GsJXM6JV5r2mEpeD3mnTfAns1bAjZTXYPfM3bkphzANzUwP",
  "key23": "5cJcvfTyvxxnipPg4ct36TVb4geiASEzKeDxAzrnXqDH3yr76qvRn3pwn1Z2SBJNRqBK4tMjHk2NEiNwqJUAT5Bk",
  "key24": "vafVF4m398bFqH7zwv8JNxuxVaoCV2Ev48N4kN5RmrZp4KmjPxt5MW4ui98J8QWh7jM9mayRfJ74b4BwCxufYwy",
  "key25": "3yY6QSjjysZHDh2J9ihbwDbdua8KW1jcuymqyqvhscjfWV4UZdXZ68XdSoDReviGFQf8E6bcLBmLzgsSk4BTNE8P",
  "key26": "83ATYnBFQpAhfshmG11xzooZdbM6yHXciECCfVjdYrWs3eeL5e2YatXfZPBt2SRFRKf4H6YLkqpyMygvfW2CxiJ",
  "key27": "3kh9xwTaeHRcAPPsd2fdBpW8DUMTJQzr4dLhcG6LAFSx3ZnT8iEGRq3ZBo7r1H1aWPy9RztPeSufFn59J9HD3Ez8",
  "key28": "5K61mjkUrXjmt3qFu1MxUi6RgXeFSqRjHtv9cKMjeUneegtvHMkLdqmtEzcGNvd8bknmD6NNusbMWFhwhhMTxq85",
  "key29": "3pVeoTq9ampfeRHbhwPNqY3A9BjWKZREN2JYRQA7u885HMpKyEmkG79v6BPwGpFoUzW9iYUq18pFnCT8YyvuKkKM",
  "key30": "4yTjNduojvv8meKzk7nezppsmEZeKcuzC5hxAPQKngbaYdo9pwZSynQyLhNRpALFCbB2Jb6umphu3jro2eBa27VS",
  "key31": "DoiNiwzR1WPBfxRFmB4uobtqY8sY3yEAmV6WX1RrindD5MYhGswTDpULkZAJZesQhrGJsMFzajARkNQjXZpY6te",
  "key32": "2FEYvN3SSED72UQf3xAgNuByy9poH9fUGvDNskBCipPQDZsRFdQzbNAaYpFNqDePBDe9nbL4fVRAbQ8E7Pvx91LT",
  "key33": "5NQNYjoPbLGBEnvA8fKwqRJftTpqWEeAosiWNk8Nf3TDZoWzPgXAHF2y1W66Txrj3S23z9yw6wfrffeDGpPRUyeh",
  "key34": "4jAerQxC7pMdiEkGqv817zc88DajcWhdCniUhd5NTqnei36ShwruzDy5BLHvZtuwcvot1Ty1kpKDQfJEBaLbDeaK",
  "key35": "EKtkfzyjEPXcs6A6bMVLxtmncsrdJvhSKNYan9nwERDmgNgFXDmmmttgAPCSSUf8Jgb8fAVSkK2jEWeW82ADkWE",
  "key36": "4FtmgTuqVJKbiMLahA4m8pMJybV6CJsWa6fdywYDjo8ecTbZ1sgM7vDRtu4jktBNjEx2rKaGLFwRJynjka1ar87x",
  "key37": "mvfFxEC3gDkZgHUnfb2rhiXaKkKnzoTz3YobQGGsNiqi5g7k9PxrZ5HoAcfyWnfYTLdKQ9WRZEpugFoz29VvbbK",
  "key38": "5QtGDLqUxMtLiXUcvte2SoHobAUgPtZbwAHxgKp7dKCKzNBfJZG9s1zSMmMzDJi9AfZbJ9vV7z8xXuF88AQnnrRQ",
  "key39": "fm8vocafZ8JgpPztCDgicM3x8bpuSnZKMqybo1fzhQu1zEbv2xS74RvXoWd5Tgv4c9Ve4JX1yBTBGqgQbXoxJNS",
  "key40": "4tWyGptrM6PUU6iGnSXFG38hqDpo1g48pwNY4TzR3m6SytgRk9MX83QG6ineiuWsTguPZSTQFUK76x5BRJ4c94eu",
  "key41": "5ZjFu3JcCVN6xDzKmYunMszkBK5WV4L4YPz8grwi1aXbhEYY5rRsqF7sVgDHuo4sKc4mBh86koWPdBQfCNmtX3ZB",
  "key42": "eMrHQoutRMqpQtcLoEjmirtapffdhGDqcMEoZhc5oo2cLCqdnU6z5d4N4mq7JfLHWZBEzGVYiBViMNkrpfqvA9E",
  "key43": "5srSErNSmY78ydVuqgPoVHBiuGdisX8o5DpXEvp4kQMtt2BgnBBEQXFGiww7UU411D15NrFsanVZoqQ4Y1fWCevw",
  "key44": "3LECfYbDkpVH2xfkLf7tvN4HYSasJ9VzLozqNxUZ2hDrh5fXUNtW9Sd9p9ekPQDSVWVLpnZjQaUDsEY311jfvdXw",
  "key45": "2HYgFWW6SY4u6e1RuYBzsyy4c2X7z9tQPF78tLf28TzjSvTTRgjVT5MiwRGcD92499Xw4n3Sbw7pdQ8KkoZ2ahJi",
  "key46": "3HAf8jZum7WGZQsNoyqriLws6GE3KUPADCPJtaBkvz71rxekpvRiTSNajcq1NPSxQHmTGK7SgbcWx4Xv9MYNiWic",
  "key47": "2RKJev74rRp9Y7radtHM9GTMmsg1xpXx3kF7PmR5FUuNrQgwPgqcTsKfLT9XcNGDzu7gcX6fAh6wZRYZdCdUUgVq",
  "key48": "2aT4cawKwGbZGZag9vf7Eu4XnV7oMfvzRR27c95uUJAQCdDoWjUuRWLFXJxEiaHxabofAFYg9LpMgGqWyAMc7k9Q"
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
