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
    "3ScGR8ue9x6xWb1WC4Kko2ZgZ14fz79rzT8gE2KRgJ5Pdp7sVnCE2cyZMjdRqSNtJ2TbSYVk6z1eyJ3dfF6DYAo9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gDh1X63mpTew8cPA9LeyCbcKqaKBZqutMSd8Pa25y3K1FV439nwuQ61S2vyxZeYtboJhqgxFSg6JXzsnUvD5CbQ",
  "key1": "3pfV1M2mPA4dXhCrYFkcUkRMja3bWiz7V2Z2Tyk28ySAsHnhegc7ZaPRQTH6KtKRQPfKicnmUH1C3EYYc8UV6jke",
  "key2": "g1ZeFBe2nHMoFhNNvTqT1MTpookErkCSZNA1eGC3raoz7f1de3Rc9pKiEJ68PhR81jZgrJ6pmeqqFBEWNG9Jd5A",
  "key3": "47zNZUb6EJzei4NBRsREHPJeNjTsMbrgCmRbBfrVFtPXNoqo3yss1GPnnrcrPGmizCjuEJ6d5vtJGHhWxsY2f1MY",
  "key4": "4ZshxLjdctkEX4C9rz41Fi1nfC6MPCortHzwVqZn9ucwQz8ev1cj4eiP6HKr4ekHLpzjamhGoULZUei59hXYGTbP",
  "key5": "2kfPa2z9661fMAPB1WT6L9x2rKAtQTvEXMTF4iEGm6r1gq18Nj5X9iB3uCHxbXyfbxypUsYtJHaWxQYMrn9uPtJf",
  "key6": "4KMA8f8hkqHLzEQdunxsvdvsCUFRzwrWK45UiW3BBDPmHu6aS8FSkq19md7AFph9XtFxX4KrJZXctsyy1wpcLPt9",
  "key7": "2WLrkt1gNnmbgDMX6oqFzufnRPh11twGieoNiUyfkQpjjzo9XzYKPfDvAuVW77DBz9sdYTu4KBeR4GRivHRyPswj",
  "key8": "5o3U25aLa9wMTMukjMtMrnso7EFxECyyoxuwkKBUv5Jbe1o6H2Ddr8F62nZFkoMiRXQZs7aruYGzrD3Qhwzy9MJW",
  "key9": "2uKf6HEH87kWwRSyEc4cwRcmyynAjFc5cfbfW5LjUuiCWKMW1SVF87bTTjNPSsKxYjBwwdVs57crUwrfqwARVfSQ",
  "key10": "5s7AnKTAtYAafL8UnpEma4Qp2KTKWAdnPhBT7EnKu5hy7HhxfWDM4x7zqZC18zL6zBZTkyQ2MHq7EGdhgx1i4z6S",
  "key11": "2eNbH3Xo9jaNT6zoy5d4ghZsjB4duRZL8wZg9oEK61xBrYKudgWRNjd8GNZkYJpbBcxNkPisK1grbwpMcDchwbJC",
  "key12": "4Ydu1bBZvJTKM28pkgjTkECWFNmPVd2xK8j17MMkxL9zUaxWqsFAgMjRXtTwQzRZ6q1vcnaKMGWpJygwi64Xaqvr",
  "key13": "zikLe268je5quPjAcGLnZpkf8DFt4LPZcH8ZAHNGQBjYvt2qMzHEUeXdxT6NTdtCjL76dJ2HmsytfgVKiAYFUjj",
  "key14": "5iqE53Mmkp6yuWD3ATpCgocJEp4x2KdpLz5mh1b4tTz4NDv8v31U1uW9GjQiFDYkiCtvh4KVwakzUtTuShmorzMY",
  "key15": "3BFvg4NsPzC73rxuGZG9FBjWPxrVioAczUSeANVq2h1ohdzYyjy5sVNFP1vR53qNZSE42HhinsNUc7r8ogVcEvs5",
  "key16": "3x2wKaADgFvdedUGXJJfU7yEf2mdyMn91ZaxM1CCuXwi9n7KY6d1uRW19T2WhYwLiJehRaQqMAA6nVxFFJGjy2Hy",
  "key17": "33V9RL11DY9tX6qXwGv7rUDEYSEEmMAUGnoBEXQr1Dbb9GrFBzViB3SgUsaoMziM8XhSxycxj7R6zxQDzrhB74SN",
  "key18": "64uex8kuxVEBQmp2JgnP9EsJP82uPs95Euvja3PP16bjn6q6CPwNt3mB8AmNuHM5mV6cpPjoauzdf8n5tYjtzWFz",
  "key19": "536bZTWqQsaUTXQ3YANLxYTNV6rRSHEVtaq5pLgAKSnvWviaQLsKgVTjtC5BdmqVkTXmHk6kupvwZWxddhz11H14",
  "key20": "64ksDsBcKtAe9qeLkq3ADABJhj3E7NSCx1aXfEf6kNDpghRVwGPpqtb8dDZ8Y44uVwzjn7Y1Ccq7kxXFbQNnu6sS",
  "key21": "53EQPDE5RwNMVu7ExhDxeuKjdkVbP1Jms9AEmbpsdPpdrXbJFrskcNPUneRa7ZZporgSmhXbGgA8yuDcaoH6PS8Z",
  "key22": "4AWXqbTwrESvfEMA174vCPx5dYM4kqHjdaEWKCAKjkTpsKXh3RXrFjJ3oy8FN1GZr2vnAxMGJKBpi1JWhWPwyAm8",
  "key23": "JBZ8k3QmXdrYihHPamqGZpdFhpbWx2YgSZmC3jj1DZUZGt7iq32EcpjB9qpdnEP1SXQZc8DmL3Dq2odm6TcTfSf",
  "key24": "VVuHD5s7foE4PnvRWrb2cCn1HUZXECKr1y7HD8nGzotA7PGFU2BDoAzktkTXm6onYsqRhpPUzzMkgbhVfMbB2X4",
  "key25": "53ECjP7rnzJFJwQQJWkP3ntJWf4satqxu5XTTyJDwuAYHF37fK3U1e4UGTvW7mJBmz3s4jKbPV2GiJv5TY168NbL",
  "key26": "AvrxGUCYJMmzVM7YtvdWgYPaAand8SYWBuzAuTkWGH17UqRgiB5aNWrVRUy978tzu9Zb78x92SEPFFYHHLvaugL",
  "key27": "4zrX8UEHA3qhCLSonkSH3UceUJYSoL4sQqJsxRK32qtLabwDyjTQmt2ABuMrKuNzoLR3pep8haXvtXCme7hrM4cm",
  "key28": "3PKAVkXeEvQQxC9HQC82YWsj6eNGFKWmvGAB51bti14sHny1k6cPJBAqs3P3A2YFHHhPX7TrECuZmHaspvR7gVgj",
  "key29": "8FShX88y4S8jkXoZu1hAZtExuXqXA2A4N6dw8MJhirPZEzjqaJugCqQZEnD47anvYL9egSc64iSTZc4pFvocdPB",
  "key30": "yRc7tDmoQdKtp3apo5Cntwh5x9Hvf1MUjuDg7bbNNkowent1uYRPc4duB4L9UHTjQzr4hAbCzRUoUZQZp7dxfqV",
  "key31": "43J7sr8JaV1AktsQEGXW1QhsddvoJJUnha2cJKNXrmoYhkq3ECe7TvQ6ECqw4wiC1gc15SNCtRE62fGTZWKvFgXf",
  "key32": "2T5pBEf89qiu3bvoaviemZp2Y77gE38yJ7c7D4AQhBRs6Wzo1MXtaS7FUWcZPARQWJkLL5MsQhiq3juewD5cbxig",
  "key33": "2Pn9dLKUtPX4wEL6odqFR2sEL15rkpcbHxsPbCZVHmT23rkB67eXkzPrdLv3RSSKvX9JdbZ4vEWMFygF3fVThXAu",
  "key34": "2UF2WLBp2frzrbRXkQMf9DDpTgvpvfuwkqFsCCRYwrqyBmWGpdSXP3NdBfEPGffaiMFFLLLk5h8LiAgFuwGBGBGX",
  "key35": "MN1ktpXmmUb6LifEbXe5obJcejx9NrDgoickHLmZHngor6cUdFKysV5AHwLEkFKRDAVPwZRUCgvCXfFHxsK6Z5K",
  "key36": "4aCyFcTV2MTaD8w7wtdr3FvZJf5YQ66b1o3dzhvE3W75dGaLkNJTDxzye87q9yWCKFhRBSsri2pckL28CEGKs4nx",
  "key37": "4pTfK3Kr6CSC1RfsaEmc21fhfWH5f2HPpPc43XUd3nK1KBvRXf51mP759MPaBnPRYdUzozcgkrc1iGNiSgqut36C",
  "key38": "2kN5EExkhkTYakDL7t2v3zQ4yna81ZjB6hn844ngKq6P3ux3xvn4o9NruegHABZY3XspHGRdyjebmaTjEVMkKpvS",
  "key39": "4QxKd1rz3rASM4zTzen74SpxGFPFZatw6QcWykx88LXi2zYNdfmQMenu7BQA8xd4xkrii4SWMx7sHV5netzXZCqH",
  "key40": "3QswHzZoDjTdXLD8gDvAKWgLfiLKRcdceAP79UGwe8iPxmsFZguMX6GJ6eEgNr6ChnyRAKG4ZfrQGwATivgk1479",
  "key41": "324xWGa5j5nRah7v9pzJFQDjYHfHZX9oEgZQTmbxm8mNA9BmBu4x8yxLj8p2TvcojDhMkNCznBDCiYDV18w4SQaF",
  "key42": "3f4PrCfK3tnXp3kEWtpSrvGctXCnBptJGamXtrNGkv6v1UCF4shraJ5ukERr2W3L7cqxkZuJMxYk2LvmDx3HLCDA",
  "key43": "2FPze9b1rr7k55dGEngGtEhi7vbumrFi9KxvxwGxSy7ww3dohS496qDF9E4CE6QwzHdEcGBvuPUwcfsvpA44AfLf",
  "key44": "3uSCfB1n2jtpwqpxDQCc4gJiHe2jcbuiW3qcQDbMSJ1wi4qLwPSjooBYi9fNzSFH99X57K5PtoM7k7DVwT3HAwwv",
  "key45": "2aQgVtk1bYnfJbGEjsrikKX29qRJGa573NGmBmZGp4CmsecCyqx5fWD3a2uJLjKFxUJ3WCEQLUKc87RbgLRRrKm7",
  "key46": "5HHTUHg3iPpGuxdWvWDZzWWo8A34AtAefX6C8q7zTBrPcXGe3rKYpgVofPtHxyucrJMssDv2zheaJfMkhfHmMppm",
  "key47": "3VxDjmHiE1pd2zWTLyEya6w1RGpwS7RyZTuw4bFk3HopPr8FSSoRar7oHd6M5ZpU6z2oPDNNq11ThDWMiCCu68Cq"
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
