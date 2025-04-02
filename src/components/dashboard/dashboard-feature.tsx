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
    "2g4jgfbCDmeKxZjLfVwSkc9JUBUJsHpgKxGyMGpL6T9Fq2Mc9v7XDb6zdUmthAv1aBt2giw2VSgCRxtVP5svtKDp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qgJpWJbNw4Vmxkf1tr9Jmd7cVuYYNR971FYKd8DKjFYY3z1TnAgw7dKaD9jmsPKGsEZVo2UzTeT8msYBVyUEkCB",
  "key1": "5w8masSPgU7D3rWYqg1nTfEZ6vheDi6snukiWcAueso2FpaTfab1A2yPTniH3Wyvozpk7f36rzDMUFUnWqxfYBZU",
  "key2": "4HvZYC1pQmqd7izmwZnUZVoTZT81YGv1u95H6XT8rWJbgieukX9ATVMU5t2eePqTfz33sgZswxMxo98BVtnHKTph",
  "key3": "2vUu4U9f75HmXmtR7Eb1BwDPQP6Dtg4gVVdwub8gC14wSisdCVoKxHYrZSVM5y7ThRDcmpZRADktvW7cKw7MdeCJ",
  "key4": "4w9sPPA3kNG9CBBBpUukRNMTgBZsxb7YQzWMuZHjtnDvxARD2WnEEEi3XCFsKXvzMkkJ7eC2rWWBv8ia4FbBKbS3",
  "key5": "54LkASiSxGJtkxYPT8RzSNd1Xm7hdRgxpHSCn9WFYtyxgniQH6Ar36X6k3URggj4HEqH8f3AFpNu8fL8GpRPNwKz",
  "key6": "29rRBsCvx7jTDQ43LmJf47HqqB59vBRe7Nzx5vDUsShb5yQD7iLAXMqZhMsoWHVNtMu3npoTVePQV4fKuzsRpHjV",
  "key7": "5RodxrFKgd8eoCtxPk4r9Ffk5kddyHfYzxVkPR3CvdMGWS5z1iVz9VUDnAU4km7RJszb2eQxybTXsJiFfh3TZHT3",
  "key8": "2tPhWowPPGXhHEBc9ocyhahKG1gr9Pr2r3SiLwdPQvdtrzRaZeqnpo2HNKSQCsh4xw219goCjzrUC3Ti5mAtH3DU",
  "key9": "24UHfYGSoMSdhywJL5SYqw8B2Je6iV554xJajWuNu6vZ3NwF2gH9Zyn9eJrgwKDcRaNjnbTg7kmMKJrUEZJpwDjc",
  "key10": "25AU8xxQaQPynBVAi2doJk6La7xkBiCWXDL3rLrPTHUBLSuTE2FpDVvcZzmaqqZGsemG529F6cbG4e65y4RCbtbn",
  "key11": "2qGvKrsww1xRcrh3TpqsrTNqeUFv9a1x73jpoSuTLsCCUXRKJbtfc8wYBD3QXqz8EXmXChqnCpQWwZSdaNMKXesz",
  "key12": "5hkJRpW6QN1egimFpQmnK5iwFJyERLzsaUdcnAJCHS1uR27vzqGvdNEjdMG7X8N7NnF7YfwjZKCbkPiwqR299F13",
  "key13": "64JJ3AQMCkrMuww5ETJZCzCT58xmGi3Ub2zokuipCreSunpH83fek3mX8fQwF3eUM4EzvXnYf3TtZ7aVxLzbv9zG",
  "key14": "5sTmXEVPJDDEgNwpErv91Nvc7BtciFJ3Q8qQTmkd6CZnzo9pXpCDmDtE5KNi2ge3KnppaCkeGHXvvjZSsAJRcm5n",
  "key15": "67AF4BArkXGYdnKZnNs7U1oFFF17YxCHrTtRch7yxCaNEHWGb5eXqY8rkvoqDH1dPrkNM1QzDDgUh9Sk6YNrab61",
  "key16": "wyh1RKa2r6hSyE798CHWyXc9tX4wJcQnKtufb47dsGuEbiaPytVCN1cH3uwPUuRy4syuojNR3j6hYWE6AkCTyKY",
  "key17": "2y8RynKGNUFoXMgieL42fFDMWEbGsCgnEq36CCbtjqgNfr84LbEWFiMs88gru9uVNHHJhbFN6QYV6osmU4bugETR",
  "key18": "3L5fic5weyiHVotybZT4MzgkU5r551Zs1EbfzrbgkBXW4buo8yMbTNd2R8cDPy96g7y3dZVnbHESCNL94fbbX8nu",
  "key19": "3C4gj4147YVpLPEUwTT8Dw3HfqGRsnBWFBBDjuHtBU5VotZEpjBkjtpejPh8zpQidEdph3qUpxEcG6CzQ28oNXLM",
  "key20": "4hNargUEGa7dZ1jF7dpxoHJFwchgYoyavxBnntZpAz1hLduzJ3hLUF9H5ckiujRv6eVVf9qDZP1zPGXVzMQogJb6",
  "key21": "3ccftRtpUTbLn9B7oPeJvdT2KREaQcnTgBMCzeJy3tEVyLGHAhQii6U8ksNFnVrg67oaLQGHmo4Mq6ixPfrrNaGR",
  "key22": "5h5Dv2jsjj1ju43bBLyU8cUrf4gzSy1aQpHzpVRBkSvJHp1T5LXzWvkYvmhpyidte6Bc2bATW3L9q4msN7mjVpX7",
  "key23": "be3v8rjRbTC1xs6kPbLo1DJn1w1YLwQcbi1RY4ioZ8Rvm6KoFK267sXdNdt4CPhcvXppH2p1coGefwFu5fp8T73",
  "key24": "42PWVHS4avzv9WWjsB1Y9myaECsAVr1twV1hheLVXQxECCTvK3o7jENS2xwJxgw1577xUqmTLh9NeV9gHRaBsF6g",
  "key25": "25T2yGEG5KGF6AKU6sPNNSfDXHKVfUuyG2sDni9YMtnB19AHsqWATEZFw6skBsiy5tjPgMHQC5ULtgtBdLyAB4bW",
  "key26": "4GsYLEeZTNG8vG2BPeaDqGnza2YmhPQe7RUBvWBtcHMYRTxj1MVvfrrf5sXiqAiZdLztEWnGQHZ75DbDaYYJzEo7",
  "key27": "63i9cWvni5bxJVs4uo8hLZezbc1qLd3tLAjX7efZuThy1oThYibeowGFbnsnijqDrUA5h5iZqSpF9wef9u48uXMC",
  "key28": "3mg2kChde8k1UFMdHW3hggnThNEsysQcfMvaDbNPRh9CtiKEPUp3g54FX9YXVoTqWVd8gbazoPyBQnAxnWMUnt2q",
  "key29": "2FugWNdvTBWHg7EKegwv54HWt5v2PhcvmnKq6NngTTt9RSLdjz2B9MRD2mep1a3gnuU9EjxrTdZw6iHaCgozHy4p",
  "key30": "5ewxDxH2KyvGMfCcWkwXmZHjBgvEDaBcNNWTQtQiuLwZdF18Lnxkbb2yxHr8XLcxyY1HR2mxzfrKVAz2Z6xx8QHC",
  "key31": "517dxGvmXvWgKjA5Dd52pdbfua8aW4bvBvjfid3ejVQzTLRUdPErtiYsdjTV1BfYgcEevREotd5FoSwjsHP6N1Lm",
  "key32": "3EtJ3gncgz9KChGE7Z7QfrSaic71grYVGFNZ2PsZ7SqETYQg6TuU7RcYRtAiSueenboho8naKc2nW8p3QELhGvN6",
  "key33": "3VVVUxM38k4Y3hfQpFWDbYtVmdDE2G8yngEqBBREm1wMyMUeEMzddSf8Dgx1nTGi4EzcmpGfgeQQHY8H6aKUdKwJ",
  "key34": "Q1xU6tTtKBNkFB95kQxwQiHZf6zLh8YJayNRNVWHFF36k1K5GrgzqdrjJkqowqgvMAh5ioNDg5JCwgcdWS9V2U1",
  "key35": "3GKtp9AgpVZi4R2ZpLZckWHwLisfcXLUryv4WXeZNTV4CrozHzQ91zq68rgXd14zfHptJi4f5dgLpwoqcAUiraA9",
  "key36": "ftrgZh4Ah3St7BiNZh4f3exjxoNeisR9sSEQipQzUvxzL2RTZF7keoNR8wjfvpvAVxBtUS5KWLJ8B925ruopGuR",
  "key37": "noyyy3ht17hSKjsZbYovk3DfCruioJ54LDtbCUnFq2JDQ4xp4yxhvPo3dXZ9mh9dXuJMKZNvYr9XdWmrupvkxqD",
  "key38": "5jkCbNrJXcwaBKwGw5ktfKWBTZQEkmjbuqVUgTZzzzRsEzzescpyXnZCBQNSz4ZkigYwGJvcBpNL3kUCJXqiDgCe",
  "key39": "3Ap22XWPDXSvv4fw9DB4eEDpwonfeVnBPRhDNZQTvrkeP6L7LuuZ2k1XE6dcu8f96JRszBA1pVTu7QrSKno8Cgd5",
  "key40": "4ikEaCnzHGtELppwyo2TBbAZKmF1GHvDFDBpe6hBSpuecw4sLdAtTQo8H1hkTKBaXLJnYP5kz16CfcVUaDP5zbV2",
  "key41": "5AGv2J35RGFTBX1SR7JSvixHUiD5SN9G4Tjo7fstft9kQrWWgLvKWazFNEjFjDwYGJ8h7565kBMkQ9NLbayicht7",
  "key42": "5N5yP5kamPUj3zgqeaM8TpSXU6Mr7K4PHwyeGFGnu3c8eFGvM6womge2AKgBxbF9Qem1t2pfL8kgGDXydmVFpJLp",
  "key43": "2uVBR8XAXy89CPSax5r5nWcGd9ZbscurdTPZmzVEZR6u6NYY7xRpp5DaVP4j7Mhh6wTvrMWp2pKsx9avMAG1Qawt",
  "key44": "414yxmt4JoM4gxbYHqkvgYJgfdCYWNpRpAGSgBZnSaSvirJruPP56CFRhYX6fkmu6cXpjfRgzFdRqm3Xy5kbb9Yt",
  "key45": "4kyTPgxDsiqBj5uiQKaTKnaVpuJRQgjj1xiceumcVs7LE1H28bgGPUFZyoMFLPLKWyd3BwxmLoiHayHoYgCWPMX8",
  "key46": "2879NFjyWN7816xKi7tdpVgVYCUPwBuMYfkAkEBGvq1mB84iAEdk2VGVbJzBdC3pw7MbFK9BaT1un8ZUvnCBT5hW",
  "key47": "4iw3uLzEBHuZmW5mH87Wpt17VuU6mdRy9BEAcJBz4zEGMpt91rcpDq5BA1BV3vAGUnzMZePT99zEm5Yi3a3aW8CH",
  "key48": "43vAS8aGrCDoomL9amqnYY7FuEBNhuXo8Gtt6HfKoeZPg3XMfkyTbn3DgZR6PgQ9XoTPpLtqNK5aBD5dya7Sxtpm",
  "key49": "3T4anFJrU8iBXcfgssrcqurBgAkv5GXCPxbMWwXUD4zAUb91UHXKbHN8d8bNSvDiXLgtmxyhJ6K3jtTbF63Ci45E"
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
