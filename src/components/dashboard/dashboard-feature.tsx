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
    "4VEqEa4z4DQhR16hLFsxAkg11tqArpz86p2utkztaXsqHCjQ6E2TbcTtmJsaAbV4iiV1Rhzb8JCvPTDREaWSFZ9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NbaLYGaRbRZN1gdVAw2ivkU9hRijqvNxEFEBSiwuMqYrELAVrXceTXT9y7h9aHEsjfo9bEyuCLdjPTAMBEhPsYq",
  "key1": "4rscMCkcchV4C2j1nd4NtthWYVbQxpjb1ZyD8daGP7H2GAA69GxKsV31az8WGhX6WcDS8r3UyzcGwZsZrxAjqc2w",
  "key2": "56qP1QJWjFJ9pqCXu57iBKjEXWiHaGQU29jPqgHjc4RQbJT8db1FDQjanpQvewQE8QQpYfR5RUA7eiccwjAsPBPN",
  "key3": "4BQ2nDyjeNiAJs6xFL48A6Ni47MQYAQCdCQaCUbKPeMcYTsT1ARnMUCEWmxi2TjE4nD5QtHtxUvCFAcVp9BMQwHV",
  "key4": "46Gms3Z3fWJDpscHGbd8aHPaKsdZj6GugWz5nBQUMENH5S47WeDRyiDjceJM61xDSBw8N4i1kV5JWs2dzDcTcbiA",
  "key5": "2NC2tXVGwj9hFV9KKHGV5HTZYvA6maWCbvkqCorxCoz9V7k9xJZKijr8xRFXN6obirmyXYQc4evBSM5P2t5qnjA2",
  "key6": "c6RckQBQ2LCfLiQM1hNfGGkswWTF2kB3ihpEPkpDMmCmBkvpQ7ryP4PrtrybCFzj18KATSEHvhkjXPgCJLxWim2",
  "key7": "2LS27qHbM8FffG765jcCFiA2Zu8LgxMsc8vLfnTTpy22QR5Uyd75drMwamjwZAo2Zpgws4q8NrzR5h1y51KAt3aw",
  "key8": "Y95oqFz7naBn8jpoxewtwKcWMKUU8qzHBKyGo1WouzJsH4Pas9x5gNW6sHBuJiyTJXsmibA1zr3GSWJ79Yz52FQ",
  "key9": "3caPrTpy6nms6gXKoeSwfFaPKinhiN9bVcfLWwyQ3JxT4oQgVr6fdjG71dVVAjMBedd3o6WHtNbJsbSQEoM9cyhN",
  "key10": "KpCBRvKnVahKZC2cbcwPSuUHV6GFE8EJLdUWHnGtQCpMxLRYCK1k29oGWD9oCYYppqG516teHgTgcf9EaaoLhMu",
  "key11": "48VCqBWCYGtQaJyk6ChQaGKvYVCtAGGCvJmZRpEU2a2HuMBRvWUZWPZaKnKU4SgyocTPJSPwVY9tCcVW5zZ4v39Z",
  "key12": "24SeAKZhLJDMVdUjuLA14F4qqb71hQ4cSAqvP4iXzsFFkMPyo3bMf6AadTdbDCon8KoTuPzFe7WSrS42RqEdxm3v",
  "key13": "4EwWo38jf652hePKwRnViCbucxQAdwKXpG8TdFJac4BHhivKNpHCKqYbVBV2rmSgb934oSrQkfmpaJ3kxiApQZ7N",
  "key14": "5ytoCXzEob5BCh6r2pUqoMgAiZv1DSK32AeL5FsLTbHhpGrYYk2VYtiRU1YRVncyhbAkp1gN3wj47uz8y4adW4RH",
  "key15": "3wt4FnLLvyQrZk3GAFRFcLFwmPaaPHQyheDBFxWjio948N1ceJ5fSxyRAqn96ogUW7Tpvtt4qFbZz7oVtZjXjReh",
  "key16": "29EopjPFyVP1ft1fkV26nLNvX3yWzzcuwVArWeWTSLouynwKgMgVVA1MnATrKX1sywLAM2SvQz6CMgUiidhNxQJb",
  "key17": "2KG1PQbsAGrPVA3QVTSnUvXfq4jbKTzGyTGVz8dnpezGEWjL7MzEPputWZU4yJPHmJjPTLmcB5c37dF7bKtT8fAG",
  "key18": "38G8xTz2u1d8iZ2hvLaGDu46XpbTivBHbzsmL133rTwZctKiFrT2oDhp7tK9rmeJ2uSrvb3sqvVYghAFNAjD3we2",
  "key19": "2Zmupc1Li1cFPykNzx7E2rcF1f9zmBu2Ybv6jFzvScFCFGVcif8WSymaUmJTCgf2pe9VarmKkRN5qo82cPwyEzPu",
  "key20": "7ogES6YN52Exjj4qGUhVJ3xiFMz1u6ZpR9ZU1ah7eHBSPaDT9rn58iTM2ZJaDZfbxTxNWdNzgUJ716a2o2QYdWs",
  "key21": "3xL9YsptKgvUbYbDX2H8h3E2qnDhdSpKXKRYN6r5aSbtnPVCmxSzbHq21kED54pQ1VBxHUkMhBP4mxjYx2zpkQnY",
  "key22": "3zjWMcriWotCVVL87sBvrPptncoHReAoXxgvPhcuwsbhFX2kd3JWh2UAUJtKaCeujBPs48868kXrKNHYmZbAVfNw",
  "key23": "h9xD3wo8riU72PM5vnL9qXTv25vcttrx8LpYgzib36hVD1FnwhMdoJBJnNHn5FnSB6FWmwntWUuL4sVW3aL4eFk",
  "key24": "vXi7fkxMiRXwCJBZpAornpe4PQU8ZGSnM7gRy4RvDRvrcB711y27ReVFNQc8im7CieeUAACCx4uUzbns5Pi1aFM",
  "key25": "CSGarHiPqVNEs3T2zZUZJo8gXZzxdivotptTXvJqL9hn4QjBniwPrYhvmB6NVtwJDLuE1ENEYxNGF2xayEdTMGR",
  "key26": "iteTNCyaZVv2fQkkgN9cEQfBZSGme6X9gxAieWNuMY6akXeZecLAVopXRgGvL1abTt98ZdFdY3ac3FHn7mtBg51",
  "key27": "5QWGcejhBHCSUge17NNr4osPmTvSfDwS2AgzRRJF14SSLxKjzRajWX9iHrbW6nMSFBVazDzLJhQNnapjmreocDWG",
  "key28": "a3aqFW9THAgvPwvkCNhkGXZGqDjPe6cHGK5sUDKLoToZqzbejYUtWvZDp645vpsJLUvzxwzjw23MtUGk8HBJPhC",
  "key29": "4RHKYi22pbczfqmxEeRmJnFHvKiVzkiLmG65CwE8qeWcVDbaFynhXR66YYWXD2fAfRWqeK3p9bYbXdM3rjZkB4tL",
  "key30": "3ZRL5F1LUKzGicuUegyVf1AkxQFNNCvRCKTg5Mcjj9y4nFREDLyZ9scYX412dyVPfrQKKFQV6sDmg7sZSnzL8vHj",
  "key31": "2MvqUZ8uqupW73dLGxyx69hKbYCv1qm6K6qcLFrS8Jh5bdkQeh95eFtritRCMfajCDM4MUdLM7T3RxJdbVWAc4iS",
  "key32": "B21aFnX2HzXK6dTvQ2hMBwcQAsoQXc3LxujRp2bcjdJ73bo1V8eTChCb2jNfqNhTUss7w8tt6gdf23zty69RBPH",
  "key33": "2rTXesy1ziRgfpKZVam5aR1aZvGr6nHUPKWB8erM9CCeX2uPYkZXMTbTcovdMCkPdKjyWAqP9rPNgwKNgkgrsQd4",
  "key34": "5AHsx66eULn7qryA2tBtuf3XeE61394J6o6pgNw9XTbQM1cE3thTn2tRWMGnn8aDnhwcjpLa2SUJBv1c7tQKXKdr"
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
