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
    "33C2pdZkACC5rprxnBKidN398gtRenwUQWHKuWdimjWsTBDqNxUBLu7pKDWuYua1sQBhvaNjSZsnPp12qLBNhQUi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UyAtxhDCbXyCdhEXsvXcwokWLDG3JxxxvbYfvwJevSHPZ2qEeLapX8dvicaC28MVK3x2bhv6UpiN81b9cQ5yQ6h",
  "key1": "5TXaySgdGweaSbmrbVmyuVLBTs1Wtcrv35Xbtt3KUQENRQ76JXgmP9dhD8FtQJVGg6jMcgYLyrUYuZegrViwtZmV",
  "key2": "3592QQsAUhQcpo4TAXWvV4froJmUo7BuemmSX423NRvF4W51nrnUJkvPz7streBshxR3zqGKECj1KaTJ1wD4Bmqx",
  "key3": "4H8uE7C795Ruc1ckAP3kosXzHiXut119kto9RcwiCLTwGkFe1hDjtxy2YkQpZFxgbeheUUrEnqLRziWaPgErdyvT",
  "key4": "67QAjxWrJUTmknnPausjik68c3JbgC1K38bCYVzZQV2QWNUEKdeE22CatVc5rPkuD2bnkqaTVgNj3b1Ch74rQU51",
  "key5": "21kak5YwBLXo7ycLdnFWHipZTKLqpGjaK2fkHZZwqp8ZyoGyAtF21uDoAKWF2PA9T1eFeFPUZ7dSGBJHuhR8SvfX",
  "key6": "3M4aGWcJ2rJ6fqTSkBo6jk2sxGVXeYd5LsnF39a9q7h4r9yGu4ZbQPbpf1982C3agkfzooSszA3ayUuRMzPe8GhW",
  "key7": "3a4SLhxvYTPM3ktA3BLBfSzPKYSXyuGwyFfNSWQWiBcUMCe9w8bqgk5fesqdmhtVMWqygPJWtLrnRP9y5Ne5NGkx",
  "key8": "4YwYtPBbSUfasaAaJZUJZsviH77p6G2QH1nt7tHXSLLJYwnzxNrmGPh6Y6z2YPdjxDRTdXQbvzV4jVTt2SFvASca",
  "key9": "5NMU6yFWPjnxFviG1tY3j3MkSVnhFCsQJw5dNDuM1UxvvQ5j3iZFaCZu48zSe5JBTWsW1uWhtcFkARuk1F36pRXq",
  "key10": "4sGGucvur9jpHrm13wqut8rTgt8dWtRTgGXfJQAP2TEP9S9XoWpW3uCkDEcdx6uXGnPaGYnDyKR3sdJz6RTfcu66",
  "key11": "3YMeVTU47m5KdxKVPiZMUEpvXqk1cbEmMLgsri8iLK78w9FnRDEAUr9zj397GqjJVjzPfgXHpHoCXjerBJ5nw14b",
  "key12": "5HkkvgqbH8tbf7Hm7JfMpMqL1joFgSj4iYJmCcvd5swBuCbqjArD7LSaWgpGqH9CyAT6r1R1fLgxY2euna4SpoKL",
  "key13": "2iRdFJTtQbMtDtLA2eJJQbqqD2e6PTcfTMt6wLrhjwAQj4Gb85sJhSYEZ64YmzX6gEj5RK39qoTsCgdbhFpMznkZ",
  "key14": "4ht9Gh4pizHB63uXdyNYvVAMQd3uEQU5nfRDN7sK1uaYojyC7RLcUQtQ7JtDbEKd5mKK6Sus4xgxp8K7U8UFHjNS",
  "key15": "2t5Bvkh84mHJ17DosbscVJcVj4GmTA94uV3iqkCznCxZwDPBtPSANZHHSz9t82giVRkYD6ajSxRRVWTcfxthF4TS",
  "key16": "2JPc7TkSaCb4AAeG7j1wJUgSzdVPYYY6sW1tVGQJfekizkbr6paPeMPyCNqwPLzjyyPKdGUuHCeNtcKyMh5oBnPo",
  "key17": "5Urv9692zi4unqiBegkM8BWArMjVNP3B2nZ8HwL5992bAS9CQ8voHq5YrVPhX5mNdaGVZWWX1Ujg7fQCZ84BM1es",
  "key18": "29TGDM4WMo6msGr7KWfQw6WmbqctusbtvYzT8qh5MddLhmFuVAkABfUdsoiw9ybVKKAkb6BGSHHrVpBoszgr6yvz",
  "key19": "4kmrb5J9y1gb43j8rLa8D7SJBEb667W4ZvCzbZaws5Vedeo5rJW61rjG9gwkNpxcR1wfEtmDBFmVkRqFaRCiZ5qb",
  "key20": "2rx21Scy23ckkyEhdv7oWXEdAxVhMoBaM4wuppZmeLb4RXJGx3ba4n71R8ApeoA6GUyEHWTbegfsevhjYyGFVLtV",
  "key21": "3KzDvjDhMBTkeEWANo8ghwWMyv2wtwBNzYmfMkSbJ4eMZ1sWtPM1JWCLuzomRWERLQPksQPSoFefPaD43JvA1D9K",
  "key22": "3azhXcHux5NXo3gVDZwdaiwcjkVJTN1wF2eTZMSkCuF6BMAjCrpbWrRhZVxAA9ZbJnExYB8zAyj1zFHbqMXwxpyG",
  "key23": "LW5CZHSTQZA8fcS4LTRHYjh18KoihDcyWhC3ryMpNCGemFaNgFg6Cre8pCobPz9LgWQYA2bbSat7qqHkNkvhDc3",
  "key24": "3M9Qe3xZE9XrRGfoirUWCdqmMezLkTbetfLrEmcYqw9Aq9Cd7WZAkzoeSi8rWmum7NCDxGnEWSsVxyqT4Nxwvu4",
  "key25": "5bWnKsx6PLpVT3EZH2QGKTzyv4ia8vWbVhoUvQ9X6HaBbFuGuRuSF4SdGX95xJhqMuW7sBguhckcKw6zoQzSfeRo",
  "key26": "bxua8NxRaiL5v5ii61z7HisZkCzNiEjcEyYWvjU8boDhNg14VT5cUYEGxsZ1YizEzZhBfhV4UB3NEz7g3R3zvH5",
  "key27": "4Zg4zTjeGLxFkfVXmHS9JZQwJi3k1Vc8XYcPggfy91MMBv3yu8Cg71USYqFXPDtRbtxURKAUyJ3gduDYD5QaUBcF",
  "key28": "3cdxQF1sq46GpXXPtbnPK9dvJtAtcRAGau1Fqjz8dzXMqjYrjcPCCvc9pemUFYgWyS8WZ7jCVqU5JWWv1efge3o3",
  "key29": "5wc2h6j2sRyTXHDym5jkFgKF7UpLsgzC2C7tgdzvyae7gSymdeCTMH6LZrPyCbxsVrzCHE2MagNkhoQcUjYfiZ1t",
  "key30": "3zrJ8WXjTeh9GLeaSB747uRSVugVzc3N3yFbM64o9nYtdBJeQGYGQHggN8tdGi9srYXTBka6WinfZ5MiEGVgvVEn",
  "key31": "5a8nCNymMUQT3WvFJUbD1wraE2xnUABbqX4pStBSQgkxhdRYkgbyoEAjeBH8wrCFSudY8vR2VRLTjPHi3MLHgNaW",
  "key32": "2PqBh7PLUdoLpDqVGNhgz9VSKnD4wmKivF6ryxhLQnnug7ahTu8wpN4rTYNLHqM6vDbg5HnestKLiZhS2mT9qHiw",
  "key33": "4WKTv3tbd9Hks2r4wH9NnA89ugVQMKQ4VE58Un47YGGWfNDq22moP4Ep7ppztUT3CPBCheAX3iVGmc3Nncqxpypn",
  "key34": "yrsyqpkBPnnzPtmtvHhabLZVCmh72aeM1DP6cmr6tuB38E8RQ4NaQQhiZntMQ3C38hLHQm3ANwrFXgSZTs8Ah4s",
  "key35": "5YraepkZknoCbDXCtxnEcHLcyuehmAaeZyzyg2EaJqhCsNTVYwbTb5h6eDNganm89k6j9GhECgfQs3PkRB4ox4T5",
  "key36": "WSxwtaDE2TiytHT3LRaMU2cov6J1ejZ3JdpcsjzzMGekYvE6Ahswe1wnh3CZ2nxFuHXNvhCFByrGuTXiMBsXY19",
  "key37": "4wKcTAJvYppRoMiZ8S27kjhKSyXeJB5k87fMXvCfMm2A9gqqXZB5bYni8F3WNoUYt199BDL6LTNSnTFsF9zWr4o3",
  "key38": "3cKLFih4X2H79YNFmNw8PMzV5Wb3ZgxasSx6E45FeQUSK6Yc7muNX42EWXwbMhHfwpbD76TC4Yfd7Ko9ZhJwhurQ",
  "key39": "EJYpqZLSeRgyCaYavj6v91ZpRpgMt2MshjecmBdT7cXipNfsTMkeqPyotgVb3yjwJATY7Pc5n58HWR5xdxLfArc",
  "key40": "2DkNKRgAeAmVTqaBiDGmiCzh2Hj4pFYKRuGg6EAaM9LrstgivrngQCMNL7KhqCsJSrD9K7dtgPA7FkFfo4apjfme",
  "key41": "nWWjXwmP7Pdx5faTA5CXzktD4hLiG33aWUo6gEwsqtx44Bwt2bC9zH8p1SGSLepsrUVGZR7tBVUMU22TYgDWF8j",
  "key42": "3xukyTz4LcbXYS1QietARNUrU3FHr8149x7cxhEFnZvCXaiBWz4pq57Y92C3BDzfkEkA2kYpvEqALMKqa2sFRvhV",
  "key43": "4G4asf4nD9d5dorK5KhGeMBfVhaXB3842LEXNkjwRNWVgykC6MLHGS8wUTUBups7PDgZYfSy5L2JBeDCHyS8eJ69",
  "key44": "2wmug5cr5344d5MhfGuYUn2TTrLu3CUJpW3JsVWLNTEWt1Pt4bQfKgNDKZs9RKr4gzNRAWvvxixPfivR6bxh7VuG",
  "key45": "nM9aBnXZsFBWCjFhE2bfX7DQdqHcrUtEcxn8tt7M69QMVfkmWEmDHZDkuVp6xfzGWcorTiu79JPuC6ngbME9h8k",
  "key46": "YXuWSAns4uF8MiVhhJu7CCTH9qNjq77WjoZhCFAXqFHrMYMTbheokPmSFrLxk5PkRvaQzq6Knmm5uCxmfVFKGsd"
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
