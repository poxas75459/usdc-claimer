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
    "NKE1zkjdSEn1Vs2froPXEmHYJH44pMuAhBXdn1bJniXmNLJwoDVsyvsTDyec5KwxHEUtN3v9kU5MwsQhRcbkG9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FAtq4DEXXYNfTqtuqNYdDiK56kiZWezqvJvj6GsxHqHQmpe8Qx4LNAGgYrhLh3DnuicW2SK7UxhB5RqdNX149fX",
  "key1": "3oKWxyL8ZB6DAHpUtNRYwebAWpijWrH3ynK7aXms2AweDJ1ZxVtT9vXLncovxnhBuD9Yo7SCfe5yTySo9Hx2hqCr",
  "key2": "4tUFrtWAYGMrt2Vnvhiu7msTTtYtpj7pu1sLNXM91jafrPjb7ZWydR6YN57fc8W91MkY1fUCKTPSBwDkJ6YHuPpZ",
  "key3": "5DEW9eAoT4xqyApGXbFr2ueNLqZL2N4HjnJCMrZdyenrKuT8YhKu88CsyJPNmi4AVvep8oRuHFHEq2zSTqK7Kaaz",
  "key4": "39dnvhiwcaYiTXFiXCSqiBd4ez9bMgM2xmwrUeeeGGsac13vRXv2zQH525RgXVuLeKJ1hWpDbFjtYZaP5Zmg6JhS",
  "key5": "4bjJ7Nmj7hZSyqPsvynorEzSuoSg5suaqsLgGTM9FSswYjnDG8HG75s7xbhiCCSidABsoy8nuLB2FA9ZXhGgN94N",
  "key6": "5nNQ6fqgjQKT4L7VuZ5EfwjsipumJsViuJ5YaAd1xg11G5rFuSks3cqcJ7PPFoP7BpGner331nTxemB1z8dYPsUz",
  "key7": "3q29hBCiWnKDZK3XZR5VHY62ski3WUUC5kzK8pG1yik2LEM4weNzrnb2Zm6zb5p12MoV4xJJXxM5Aqo6xXFfH1qT",
  "key8": "fVTdBP52d6RoKLXqhC5enq4MXNz5VN56Jk3T6QYjh6r1PDW1J8aLy7nUL1chFzoUAAuyb7yeYNboroQ6pLvRRr8",
  "key9": "5WUZN3DpKkaMcTL7jfXbaNdGnCR3tRHBZkZYZTmB9UjmVZTHE3g4HeumkGLaNWxzAWBjSxpqAJdJ3ztgxfKDT2ac",
  "key10": "49VTLLZMopRM35CuqeTgBUGh8WkEKgvh3rAD1Bzp58qUUPUQUJm6Tsd9ucSKs6mcXSme3kYWBPyL3toRbaatGz6T",
  "key11": "9Pd8E8eASz6QPnazsqp5vNzttd233z8mDPMuUMbfNX6hPMUX53JDz4mBaahEtuDmXe8rmMEmvUZ6g49qomvpAKk",
  "key12": "4UJKUT21HmP47LpGXysZY1s4biDWPtpvNFdX5zBQAptjduSGmazcaxB2uiJncYKFxnrobsJ8GAQYmSDtkMZFgcW9",
  "key13": "w8UnsBYbg28HHWixbTe8AacHnoRGd3TMDuuhrFE4AvHNPbCeCnh24diFTzvAiobZcqv7wuKN4cn1ES4FDusUknc",
  "key14": "5Mauw15K1Trgmh8eHhWnAY1MBhnXZRpSYRZgXWvgFM6zC6FDx8yVD4qJX95FZG3TVTyJeharrymoJpvQZBXcCscY",
  "key15": "3BjyWjP4Jo4w7B8gtpePR5icmg7rZoz9srQ22AN9sh72NtCHN3K5L4zgAbgqR8ydHKe51hhZFAjDo2ZaojpP1BR3",
  "key16": "29xYxnbLuZifBqgRnZHBf3Xc766LJphpLrLhDxWcMG7n8Wk18jNTRBZqZrLYaaMGUZ4qFMVysW7jhG4P5wwBiyuL",
  "key17": "gsQirctr94FfJtKYrBSwj9ZqHXMEDhSYwi1VaLDyjRgMYDxkHBGN4eP12FbKCMaiLxPPAe7g4sa5LimxU3MU3Vu",
  "key18": "dm5Zcq8QMkqUUSZTL58WsJTk5i2p6newQK9R6bmLwg4fjNqzYeqrafaDwMqgksTrKTZiGQ58g6rrdTKYsrKhQVL",
  "key19": "3wpSuPU3RNqtz1Z1NnZpbckbkwMVYRkCVaRGN5kVvgsesqprj8CzSpD7grpWgJEHSwAD5438iBSyecfgSxfLQhmS",
  "key20": "emsBds5uroe13G4eRmF4L4as9q7zcQsVUbBt1sqq8zvbGWVCHeq9xaaHCymYaorpBiN4xsQKfvWVqKGz8HPUVet",
  "key21": "4FAAJrdZhc5Q7fK3ZQSuho2UiP7ye9Hj97WRPKoS5Uj5oRs4mB3RceD8erWMuQvdd63iErN5FnJHVwUeMXJHQAc8",
  "key22": "4pfqaQxoKChVeHUPqSDVq2KnHjiYLsGdes7rMbAkA7EYYEvF6NeQNZpV3ZCH9UnsAoCVhRL7nJDNCe6HtdSbvs1X",
  "key23": "62vvhQX7FkJfnjaTTZo15YQLZuZjbBCbBtQiKu7eHZdaJcYzyEpwsMhAkcZiwnA4Cas7DCrFyLK6uMg8sPVnsd8U",
  "key24": "2KSs5c7Ay7TR7Zdf8Jyca2AxbL2X5oQfZwgHjrQVPgqj5utuMQTnyXZpDMFDejqwuFQynxEEdjjaAhbWqrpuGkGB",
  "key25": "4TZi37axszm7Q49MJob23rouh5NfoYn26TEvesPPo9Bry7Dg6tLhjogmRaM6VswPUcqiYH45b6HMdVHyjPdD7nTb",
  "key26": "2y9XNR3uirsr4iTGoQzm13goGYSfEmYAPk85aLpAWKuLK5sBmJYNgrwEdwSoSVGuVPCGiiKBfSEr6nVn3gdQ9Bco",
  "key27": "335RVGu6L5yq9BXbY4fTpZVcgwcP7oUGWJhconMWLsA73e9h9PjbiSMkFc3KSFPPi5r6keVZUrpLiEUaiRDEfMb4",
  "key28": "2SzLHSHV5f5a4NqmzKieMc8jNvBZo3RdZLpo3wNnmHzsBn4VMqB3H5Ax89xLoQPDsCsQXBgjR6E7TWV3bsuPXvKc",
  "key29": "3WSMptbkkCbWmmwdckk1pWwqUqPFZTjiNm3z3ufp11yRrNChLhzb4QPj9o43uspoPUyvBRDxtUQWjNyX3SprVStS",
  "key30": "4cuGaqPcdPJ9oPgsgtcerxKYUccQ73ppwXX3AsdFfdznUtb6ACFSGDtiV8aMqdJH9SeKcQPbikqrKdzsNH8BK1N5",
  "key31": "5hrVFJbcDdzGQyxSrkoXHdEQeKvE3jqeaBqcy9Kb1jPaDmVWCUiP9axoP7gRSAutP7mVeyt3cCZ2UvGBDoCgoG6X",
  "key32": "2wAMahN18GaZZhgKH53bvyCi2UtE3fkLiN6JJAUyg3TpRrnZ52czAViYCLAgNQPBMRzgHKMndk2NVUC6vCimsZrg",
  "key33": "2zegBZptw2CZTSupkKu2d2WsEs455GyhedkiP1RzEqakBA9gSiLqHKn2trN2L1Tqbm8bMiniV748oaUXgUVFnmY9",
  "key34": "8MwYMCkdQxX7jcJ1Zgj8UGdwouhpPn3hU9gLjg6NLFUuHihY17YgGdq56t2nHcpwXWiFeyDSLXrXZ6MkLchbkrG",
  "key35": "xCrCX1W3ZyMEbMoTo9WvMt1CRD9wxf6BcAxhhkNwMbGZ71RvKj1myQwB3difQKrzbLKZzoBQkGaGtdqFAmNCJw9",
  "key36": "26fahExpKLUuuEisdQxwFj1HsBDZHimoDqajnRNQbzGGirbPmEPf8dKKD7pX6SvPn1Rw7SKewmaRFERZ5oHDouoJ",
  "key37": "RbeEwYDETq6dFFXPwgXEGKM4KT8TdBKFVgPo9nFRrXdDH8XDtT1mezbgniZqkjNGhpDc5akqEzzDgutHiPnC8cJ",
  "key38": "3hbvNvsu7c2YjQpo1YWxBif76uj2NeQu9vEfpFnwzJ1GYSRfFnpHs61iGLP1M8j6Z9N6d99EbNJrscBksMLrLABq",
  "key39": "WxEBLexbZQ7fCeCipmtmWpcKMtuMCGvJG9Ps8fraa8DhD8PtPjEu4sPKdPjk9oaWDqAYFBZMM6qjqh3awYquLaj",
  "key40": "4AKKrnKTUTqDoZUbc4mVAMKHFXSM49rzb8PKVTzdWpSXiF9zNwqVtnoRpTMteQ4damNJ9FZorUqaubSFtDgiAV16",
  "key41": "2BpDxb6Rs8DSv365vRqtFT2CGLrxvxRTjfs7a1wJ5Zxf9FeqcfS8U3oPkHpiQTzhAgSjQe4RwjdeZBGFk7FB8VYc",
  "key42": "62inyWskwEEeKkWtU8DHNFVPnRsZKuYDanXppTWWnWnwBeAtdHMcvxaGCNafvfYeAtg6fGwZuRD6N4PK4BZLD2Hi",
  "key43": "2P7Yn8rP3smS5oXaoksdJDa8q8ELfEuKCH86spV897ZYDJqZ6XT5CeEmHYyVfuW28z25Q7GDrbUefMk1wirFg8S6"
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
