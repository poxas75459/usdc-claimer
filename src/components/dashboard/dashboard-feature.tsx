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
    "dwK72R17cBRu9QoNwY4jw9tEs3j3QYYofhSDnjb5tZWhimiV8gpzPmxndYtj5SfHqLs8SfF6KrFX2JDpmfxxM8Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9MtASgzG8sBgetEX7D64um8zqQwH2ufmonLPU6iFG2HDK8enfDRSgqoe9FyuMn9iP64kcdrwQquQjYf7rZJtNAK",
  "key1": "3m8CaLdx4i868TE95VY1STFeUVr3Te3fQqXX4xfqWDebJrLA4hXeLaCv1XHGin6ocwVeYz6a1KfWRrLtfuqNiAy1",
  "key2": "2aZ6yRRMta1Y3cDousnsLQVHcYRxjrrvovvxCkUg56Y4VhHHbAaXmMtH6byMAUS1TyecGRntfkB81aaLS9qsNGp9",
  "key3": "DEqKBLFAC3HbDQ85wpW2YoNUdPs8PSQuGxofNwATCansd5ETMJTowiNm533u8MTKH2YaqKdv9szxzFdmgWPAerY",
  "key4": "5JEwYFfkUiYHUETdVq6CM5YssZui3G8hoyhWKKaNa1K3Xg5YnjUwgiUVH8hHYhAXUg7YUjENwJHiQ3CbyXxNJC5B",
  "key5": "66X2CLakp5PJCXWLPQmTmdTgKDCAXx4zTC59TRE2JgrEtDZCtfcHDW3y7uEsXzyixE41EeMphtyzgPQeMG71krgq",
  "key6": "GCCUgaHxe9UNFRMpUdwoPRhFWto4Z2v2fA2MrKzS6qpXUojsQBXKJfgCEz9RcgMpkWBHgeyExukp5F8UviFvDBJ",
  "key7": "3pG8zhFnwv8XgxCQAtRZPK8FvHFPQwYbjMeJSnsVxXkWD1LinJVrkmAfnb59QCNJz6nX5CKP1iZxfks6vmNivvs4",
  "key8": "4RTTYXXn3fCUrGwrighpLC5KGJyXj5nD1eGkqC2ud2Ek3xXuUzUUJEMZQAxmotTo53S7q3UtUYpfcH39vwktGagt",
  "key9": "4ofJSTbeR3CU3EEgCvFBL2coffUgtpaegqUemU5EUwkLr91pAUX7e4yKaa7ZajoD9XRDZW1q9vGeNp91Mdon984S",
  "key10": "vcBvEF2rTX4YC7iYVHEEJgDaoXNzz7PZcRCv3xbaE2HBcBa4LsEwNqVGiYGpW4KHbikBzzJUjUTLVCi4npiYbxz",
  "key11": "121qm5A9NWzMknB44GUBfjbBBVzZm9WXMCMR5thSFaokxBbLZAKfNRnsBujNJdE7qrrLBB1Tz3mfknYrL13hfrMC",
  "key12": "QQgcDqbtie29zvs91XeJ5TFLA2pz4jciDNJgmryuXUuv6axoFCDpQBQZgmkFAqmazvgKDqpZctJZzXqNSYheodw",
  "key13": "JEsozBFyoqmoaUXkNtE8A6NCDKQzTwgi8S3cHga9arq811yAiEUMHrcTsA8DwKxYEheLhBf43tSosDqaSv2GnqD",
  "key14": "3bSzVHfjTGkCmiy486vVcKavtqnBkPShrdGLEouD8KRRC4JUADGBsNLs6AeZHMJQjGpMovZSs4UBaKLgsRKMGGd",
  "key15": "ZSCEZ9Ko55PMJSp6DqYK7QB3zKSC4fUkEsVKMNBPwiNZ8JMf6Af8BVQZku16bvNvswNq88xySY596BKH76xtKxr",
  "key16": "5kDHqgfwEmMKobkBNpehxupZ5oi2FgWv5R9phXdeQ4zCRoZK8TtXEdoz3wiC1WzcUFktXtXv47vzH4PLcnU4gBH9",
  "key17": "2j7GRL1wuVKxiDv3zK52FHoL4N7WcgKfb6KKfMGz9PzM4SftJ7oHGLjsqvsJGvxKVMxQYXY7cZwCe1Rh6EG8Xs2x",
  "key18": "UQkRTmm9uBFkHNSYs88eJM1fE4Ub4tu32udtyqp3THJkUuVAHid4S1ySdhcKE4pLp8sx6EPJ8mowsJ77utVKhfK",
  "key19": "5gnHewArnqdTrGS4FVqkv92rVR16KMs8wzAPdiXaXDDgrPv3wzhfTU5PeD6C9qhcZZqSXpJwYxAwR9ySGuDhpTaz",
  "key20": "2NkPQVApnNFysAT4AQhRtAnqiDVve8PcUGHVv6fRPrHGQSiZrts6GzJNku5ZxLMNyDZNnPRxLPxq43j4NAvGLi76",
  "key21": "38xnS1yReKnAwAC521tjvjRYwUu5zhLrqnLHy2bRz4ruRw3F4CfYtJHzk4DaAFCXFhzNjS3S5RwVSHkFSbDhPmzA",
  "key22": "5Gzh6eKdcyVKygk2pgMBUkRazy4JZrA3MF1sGoPDY4MDaczwYoEqi3PyPU96URqi46cjEnqp27RW7SCofnra5Pic",
  "key23": "421fCjUJtaurLATdnXTGJEUzupVsuK3S4rzt5e2JoG8ZQy5JXq5XrC4QyC2NHuMtnskSrVcSF7EGG4PwfBz3JLzL",
  "key24": "3kXSUSnjAtrziJEAskmhAkKtAozdgFQhSBFhaQCJnzgcLzRWZrfS5mU6XHj9ncEh7FcgJ18Yt27zf1vSfdXVQhYV",
  "key25": "5FNHjqEzXWj23pS4wYXL8ZApq3h9pfTAtphAnFxUpiddYDhbV5HCpwM4s1384muRwu82HYAnwJrRMhYdUQ3EUsRk",
  "key26": "Mcfo3nqQZ9mXeGAgHXzeBgyJk3uJFDaBBWcFMuehVx1AVsNFBnZabBmgXV4vvihT8iq6Hp4J8x976L2y6Qt34CX",
  "key27": "5nYG3EjURwBsZ9JsqBmFcrPGSR4FLexP2U9fvzggoe4EvDDdKE6dHzzBRLcKJ3pft4FtcLHA4LYVHXyH3N3DDwnp",
  "key28": "5vZAnXEiKzXEnGXLej78vMFZrz4vMf2kis2Ch54yi6TfmfzDtyaVv73MAGVCxMzTh5fYVmSEQFWi7f1gzUKDb9vZ",
  "key29": "4GyGgW5CPgszqynfGgzNRs69H3Se6YH2VSFB2xDxuxLTEiLgEt3TYi1j2JgRdfid8EaDnMTEes27RfF5BrJJPfG6",
  "key30": "AHnE3uTwDnv1qf2Jkib2GeXjNYDo8hoViapJUnbw9fFJ3NJzudhD8PD6fANtRdMyY965dMMriKEDFBDTEA9f4B7",
  "key31": "5mXkwsf6MvmCnjkj4H6gAzMvPZaKF1pDar1Cts44nx9xsMPxQ8JtEeLzXSe7JgQaRkuQrRLM3pgqMUp6csACC6HG",
  "key32": "wYsDfE6fczZLb2LECm4FAxgvvCZievR3N5dNyoGikFu3rW3Xtp5xLVfeFDiFuLovciso7FN4hPUUDDciuaMnWRC",
  "key33": "49RqKrdmconiVkwKK8CQEiqKXT2FggpAR7eMWGLYYbmAqh6cFLZjB92Ahe5nG6ubNGRmSLFMhUSsTyszfwqoZoEX",
  "key34": "2XXiDSuMeKqoakNu8qQ2yyxmcTAYVB5vtp5rReehyPg19dbzXjzppSgEpbGteKHRiP2LzUyb4e5Rd2oFTx86BJoD",
  "key35": "65vQZuietu2yHXVNSk7a9kdYX45gE7TizdmGTsWJ8k6McLNsg1ycEQsMDLCn28uBbiWfzXYphpK4WWYVp6Brp6za",
  "key36": "282Pgc5otVwMJ6SLTqUZfb3bnQPtoJkyCXbifZm7yngHxY6JAX2V6FPKySv6PdsaKJsDuHDA38nUjwSB5RgJuprg",
  "key37": "3at9ZYWLtyGkbTRyUTJmfsxb9gQ8C6EUE2xmK2s8F2uwwmeU6LyMkY9GVoxAzSTRJruw8DqP6N2CZ41jmXnLFQFa",
  "key38": "5V74g3d1TekS85iMbhkpjyU9epVMNZKQc5WFFmRd2g4en11rsRGbu8NLYDtPUWQxBWc331LbKHtmx4CtpKuVBL32",
  "key39": "5yPAJK94LDv4WZvaSLtmPM5qr8G8XHAsUpqxbfeRPJyzvzKQh8StRx5hxSqwxhgFRtcxwPSr9q8r1rss7LuZogS6",
  "key40": "2jungWQpbe2t7rnURHKhBuHef2tZQ6qmKPEVBN2rt1J66H5yjs59BAWpowKyynSmDVmL2xCi4GT55J6bAKYum7Ty"
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
