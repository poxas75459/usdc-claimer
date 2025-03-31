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
    "2iw4SFX4XFFAyEPrYFchHpTvm5zbmBTgWJY79Aahq5UAYwyFiVSpbsvbrgLnDUF2y5HwTd1Vt91QDZtXLFgFC3hV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "442DfSoBWPTQwjMinR5RUPH7TetV84Nq3hZ8GtA6GQQd6E69QVo24WhWg4zsUnmrSnsyPPpaZqi3vA7juJf2PRVb",
  "key1": "4b9s8Nvby7VKVFGcJo33FJwZ7LgjZZ3tnFf7uvzhjp1778ASC5Q69T6rUEq3whvaKhg7zEhNAuicvrc8EAaELkZA",
  "key2": "y8WcqbKSxR3Ksn3XjNEXBMyQ453yDFW7VY3zU3zwPSVPgbvZSEAz5H2h9hERZFYoLfBp5uSFFgzaVtUPbtx2CkV",
  "key3": "3eVDmHjgahKjQGpsjxFELAmFCZB8XSDwqwyFeZ3Hq3CuJ19UnwbeHSNm72xQpxepQ9Fg6oXa4R4pAK4cEQb7JRWT",
  "key4": "3LEQCthQJUwHDicEJZYeqaf6kAQE8eWekcguMnVDTKuGHkDneDq3vRU9bpVQdiAV2VsfcPSVXatvL7yCYdNmHvMP",
  "key5": "5RC22BhuXXH8Sgf8QtHARzZh8jQS8kbsSCAgXL9axzhFStAN9YyZgoNp5x6xi5M2ebXCQhrZDxMWZwoLedrgsETb",
  "key6": "2uGNEBKVXYH4FaBGjz9Np1eTFK21HMEdL66JmSFtMJBHZnw8wdjwLjtfBDj3PwtPmNoKmgQ5jnv4NQy5fs6SJ3yH",
  "key7": "uMU4TrjzK2DrabNVrJMQ5aZh2gr3Po9tSjLCcW3p9qkTDxSyCCRvE5yoRMz8whER9AgaHdhedf3Bpkvj2u5aA4h",
  "key8": "3dT8Vj77e5YAW6HRk186zW7Aje7o5fkgaHRGyweS9zvnktWhMBLVQ1vSyeUGtMMzpQA8rFiAgCLyAu7VHqSxwjos",
  "key9": "3eWaKWjzYn8uSk7Vb46NQeo3dSENUp4Ei8sbJMY6mEuGYZGQ9tQVyckXRmmgTSxMUYM7Dg4G6VBstcku9CahcdLe",
  "key10": "3QYnRZsE88hBTVp7ymvxoyLEe847UoRuh5B6JfYUwdyEMCuYTSu1i1Ws38KhfG8Eeidf9BZthXgcCgBAkhK7eMtW",
  "key11": "GP3Z8copUQyrBZga7cLKdRTDQQt4kFRmmwqVcAbTRP7LcHMUuyUnYsVmui9J863ohJcWBco78kxytUvuPE943kH",
  "key12": "Lpm7wWDbcHmE6jU7BnA5ECmcgYnvEip55RwZbSDzqusdWPUd15gMvBNQKM1J4dMSv64MehQzDwYc5EyTTrPUxmH",
  "key13": "4so6smHcaWFtQYbfXBE8S8DYFPYJvK5u6smfg5jdmeGnqKcUnEwoAt5UBpVWRLCH57rrt15fdPkp4ZP9Tcv92FoA",
  "key14": "dgs9MGqm3z5dj1KJU5vsSHURg5YJncqb2Afm8RgoJZzbLGRaAqx1cEVv5n8vq5Wo5uabqximz9fJzyoYF2GjQHm",
  "key15": "5xFRj5JofxoJETUJ5wHmtC7soL49dWif6hJ9DnW3fhKdErincjTQwgVAm9ch8SCz1yFCeQR1g9Bu1eBtm34AGzN8",
  "key16": "5vcrRHSaXRh5zA7nYPh2pbEzddxLG9ZBwth7rtyAa6asVp2rV6smHVaxshARzp4jQNZm8nYhQtdDhxzcjZZZc7dt",
  "key17": "41WbWtMfkSSMJJc5AM1iy3jvNAox3DpFFzqKDAGVEhPY4zLJEZBxmBorBMLrryecG2ZyUegwrhjsLUjxyLmaQzKv",
  "key18": "4B3xqD7RtFsbTUnErdA7DTu2jSSQukwS7FmDWBB2SxpcPRijeBJMoQbHi82V24uX6sTsEPfLozRu6Kwf5AaiycRZ",
  "key19": "pMvPcbrKgkAX6TAPTU4FQcv4PYKJ3vQUCLod4vPCWNPyGREreMfyXrubC8F3A2A9xoBL5XCyXwD9RcjXAjLvwNX",
  "key20": "2MMXxBZis1q9ZggfBbUBdYbC5xu8bL3PMUBf4sNjfEY9jarBE2Ut4nzGVEyPZkz2HJ2qAZ7AJ4LguMgSQJhp2Ui6",
  "key21": "3n7yVdZ3vUfSKVVkPbpPtCb9aHXRrXcV8PhruKMTmULPJBjPKpk6G6qyr76kC3zkYWzDX8fWCquh8h7mMHbCDfUE",
  "key22": "E18iCxRRcBycR1pXhtk2Nn3WzPzAXSSSHHvwtJCufzJhiQqYzuVFY6RYHqwPEYxikRfe7sin7HoQZcFGTFwu9cj",
  "key23": "2wRJh1odcKUuwebchubzYyZ5Z4CRaeB6w6VJYor3xcbJscmDKJG2nTRDAkgCSq7ruHdG9JUeJYBzBd6yJ2QnnV4D",
  "key24": "3ZRFmp1hLneda81ff2S65xehGkHjuA6FANxcucFe32Q8pHuVXXPV6qg2FRNzeUPeohWX6b4rFACr9aPvPeqCmVPq",
  "key25": "547xCceaLnRMQf2XTxaSQrJXYPQXta2xdceNgfPVaJhsVSNNjThxu1hqGZ3L5ixi69emUP8BqsxpTUuC9dKFg9Rq",
  "key26": "jwwHHR2si4vC3kFzn9xxk7bEpXrWy9EbCmnonHkWfYM97c7w3S6c5bXW6abiivDa4P1DbAfF1g5eVXCkSJ6QVzW",
  "key27": "2kp4dxbprhYMYE3JLyqkC5M5AyZqzjMn5jwz8fcv11mvSJvT2kNXaAQF5BD5s2WboJGyVqonjkDcsoaM4EJ3yndi",
  "key28": "5Yf3RmkBxeXb9X5T7XzF4AmDCJN5RY7CDXrXhAYMD5sL4mkBsZkzaXkieX2JUEY2HUT2snFkoFSh49RnGUV2fnPU",
  "key29": "2ZNFkEdgbjUUjik5YVwZxs6KEoHK1dbKgVWMKLqRKpokLt5doEu9qhRUXQbRK5gGUpMPa13nfqFq5FPZxZ5n8byN",
  "key30": "3ag93fzxYWtpgS3k7y1NjnV9BLox66iPK8bVgeYBy7WgBfGJb5upVaETWiUDbi7Ah7jLCDXoZGJXQgGsynAoDej9",
  "key31": "CMt4LjMBgFPrTAykhUxfQtQ2UPvK9mwP1q6egJ29Xgv8xnZ2yymabWaZmzTs6p2tXPF4wFNFXrWU5gk6Rpf8nPP",
  "key32": "2y7aXDSyG7Qy1wodNgdeiZxHwyjLan2G3Huk4XpnFW88PZuoHmW2Ku2kg32FoPZZiw6h8tAQYk3NJ6R1AAVc2Kqk",
  "key33": "4kJwVfX1LqHkazyHzaTuVado2PVEVEWvzWRdnZKNACsAszjuLvxX5GMnJrkumUnkMM84pdn526iLc8K1XWDjNimr",
  "key34": "2ct2k5eT7JeTEoG3iaZe9oNvjpw9LLmodLHxAscCsYMFYmeKKmub2nsKCFeXZGK5YxXw224qHKjN7rs3LA7DfNaD",
  "key35": "5irAksRNkwh3ZShd5mBkbmaLaUbRvPazg2sVK4UE2vLMdVnPPys9wUtTtn8j1yCvDL8GmSWpfWQYs6jiEVArDaCi",
  "key36": "4XL2LNZmDB53ws125qSs5ZuoXRErtnxJpR2vkiLC2ewPFbQqiALXruTEChhDgtNL27AxCZUdawE2cFG6K2hQcrkL",
  "key37": "3PQ4Av6AM9ui3Kj9a5iYr5SdfTMazVqCrmAJtbcpxG6BSpfuG2oJYMsZ8MMGdqMtTkLGC9JDd1PkcTb2xgpqoc8n",
  "key38": "66cMk3Qs96Ha1CQWfSFyMtFPAfE9RSRfRo2oYN9KxN1VoyyEX9EL4KLe3ArkFcS8wrjGLrKV3HdG1BDdSvKECqkP",
  "key39": "2BA4HFazzQWWEKemYsjJwPJKDszh3oD1Eu5uYENUVcy8kBhCDsHXsh8NjKZvpRbcUNzkwUstNTsoWwTjQ2KzBLFg",
  "key40": "2HdQXBiqs3Ucf5UqxSU5vaYLGGkbSi62aficwAogZu42xpFhcdbAeJ41qx9X7nJaY7sUjUUKGY9D2vKYREPiSheT",
  "key41": "612gRmsQGwcgnxt9uxmhZDzhd35sgWGFbZLW6ynXurQXyRPx1ZSEoHDPHSqA5Yp5DGdDB2FbcwjiYB7ta68ty1kR",
  "key42": "5gz4buUN6RS7Pakxd2c1oZ5Z8x3cS94kJSjxcguKtnQJumgum5hPpy8KfcgUBJkpRKwojTHBHhGXvkCrjPkvd451",
  "key43": "QJRg7HisbiW3wMA5YzdJjcssj9gqFWKQawjmqJNRbztr2A11MGoK3GTZr6EANUsgBNnKTkiAiEDCFXvxW6k7FfS",
  "key44": "3d42856exSNuYrrsPjsyVnw5nWoWSfEZ4UqKE4W3yWv7ke8JCUZ6WF2otnbwiPGXdpdTaWEpuM9KZ28U7a2JWJpY",
  "key45": "3KREjQJaVfRwSyg18en8oZKeBrNv6NHDr4ZXhw1GsbfkPHmVuTXhsfHDin3GRND3g829vGXwBJgWEVzhZLgBihNQ",
  "key46": "2u8fiuB9r45oZ3WfemhSch6J65w1yd57cm6MBR5nboE3SuouPevZc3cLME6KAMJh3ynxcrQqq2ps1onuCVyfK2c8"
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
