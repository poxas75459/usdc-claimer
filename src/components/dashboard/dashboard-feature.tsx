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
    "c3AREbEYeJSdmuk5PhmENv7wFMcWaDr9tzUa7rQxJcGnEYJBguk1S3Kdt3psAPFGY4vH2YdqCNaY38ee4PVjyiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QQgCxWCwWku4MQXQwZPubZ6NLJiAoAQGnjMYbU47tbaSMT5aMNwXWhRaF1vaXXi9fBi1nZrgGkvPXCcoCnur63t",
  "key1": "4NmFHUuKy35ZgZ7rV8cUFNaz1FYdARxeQTLkPL3NqGBFTUuzTaGtwH3AERxJjddmHLiQ7xtKFdk6QHeNm6swPeLk",
  "key2": "4oCW5tAEe9QKhE3t1Jp4sGkNkLXqgqnFweX9TPgkT4P6LfB9X3MDmg1bmSfvpb21rGRGdYC4T7YmAtPseyc5AdeF",
  "key3": "5inQ99dSRdA7nbzULS1Q4B2a6YCpTUtQLpn1NaC7vuDNWWrdBnbeGjia5DXgXbvTeSzjSDrrFqRotUGdGtWsfzNH",
  "key4": "5osCMNLDHMBENsUwAAvcsoR4HJVDFhN6cDka45qnBdEApKoR332oRNdM7wucBcZMREbkTwG3EsZKT4k6qsTtfSmq",
  "key5": "ZNYVb4YRKKMufJFnZpCQaAipP5g6nQrZ9fDoKnPU6ZabcCYLgyKuMsG15fogWwTrd73TtyHQ1h7S9mWewTeYTZg",
  "key6": "2h2xxt2svPPnX6CeiRMWZzzzLEqjRKDKGnibZHXhNS6nHEX6oqe1aqXUksMsWxtQkoBzy2A8WDj1HUrMNBfaACEM",
  "key7": "3vsD84LQFPQySGVMQKzXhzPkU3zCi4SDU891E8xCYc9WbBJiMJ4Za47g6ME1LNAtUm2KJTmSH7YA81vEYFfurxKb",
  "key8": "3PeccKA1KsKufRz6UXQ3MeLshG9WakS22gcu5W68TWRuvNjGeKYSwjvGekjH2p42uUaKHUckJrzUdmqZemaBjrXj",
  "key9": "2iS9dkEJWmcsfujjT9aZyKMA9Mgv1YxQPBSQ9bP9dMqkdPbubaEYGQpV6nAcLj2MsTqR1atWdKqPyPKw9mpVc8nd",
  "key10": "51ngcUiYspem7jHRkkzMJGeaio4sn4PRVtzyKQxMDXvgRGKN2vf4SVgsgyMLSvgGGurDyRDb24u7nPtss8iBpFXA",
  "key11": "5XUWC4AuiZJCqhBkbMwH1QPKR8UQAmnPZwmGajZGvSpL6SKTxVzKVcikWRqwdVME9o6Ur6s8GjPP5arr2Aqtg2qv",
  "key12": "2qvYahV4YNfVP2EXtTro67eMGvtTqnoFnVB1os5hkh5SxPuxdd7fHj2jxFizpgnBYYxtLvkyJRZLje1cHqvzyjBA",
  "key13": "3GTgkBMHdtY4UvVbv8ps4wij1d4F3jMyG5bQ4yHGwz28xbWxU3ZKQv6ceHYknexfdMVoqgTg3VUdN3LYR2Nr62Jt",
  "key14": "4THsFgW4TKAe7xGdLhRXMZQaoNH1kAABEhiAAAapXfqt1wRsxygCgY3seDLgGeQkTQ361Ldz1axzSML2pbX7Rw3H",
  "key15": "6ZRaD1XpmmF7oYRompmGMHbJebkUckQhpX7uVi2mGZfAargKi2xcpcdBNya8BLR8m7cWfsWE35ZERoZ6LHj5XzB",
  "key16": "5s3uJGBgcwava175wnQKF5TCBaABwANwhXhktJr8jgYWqdgwGMTbYWkLARNoAiEUEZwZSi7cSne5KnCqy1AmB6iN",
  "key17": "66kenqs1RbByNCPmNt49WiTZyzrQqnqyoV6qdS4grpdQjjRb1vJs31GZVyqwH7GDzMLaFQsyWxjsQodJthUx7yoR",
  "key18": "5P4NN5uMpcxdCj6bjL27vnzPJoAPpfAULhLpEpx11jaBBU3FShYzbQZFNZK5v9iikkjazKSU5u6We29cz2u1pgdd",
  "key19": "DtSzyNHNF3Q5Wzkr8xinaxCbJ565hRe7NtFTVrZXdVkKy7HKCSJtGorRyXkgiyw4YaUsDeqtLp79GSoyT2kswfs",
  "key20": "5cH7JfQuuvYU4gdesqjFsDVWcDABJyqzEMGYzGB1vkwUMCg6Sph3aoKAckgYdiqMiQEePwFHnhCRnFCXQpnMFRaS",
  "key21": "tXguu4bNGi5JUwVhtdtG4J5UkrKH2xw15TbTP9Shw2pJ6Q96vSSNjKXFkwvSGTRsLYrS1GFAYCReuJouwCETQf3",
  "key22": "4qq6168atW5rC2HvZfYiY7x2wBXB5hurc96bTJ41RgTMjEXVrzsawmpqbjNofWpMS4DmaNuNYYx4X12Gc2cGSjtX",
  "key23": "44VU38qCXt2EGMJwA8J2Ws3aVd6YBpojh5fHCEyXJdZQ4TbWza12PgThez6vT67gLseR1E6yjoGkE3j2sonrYPGa",
  "key24": "5qUmaaRr8v8daUrvswFaRuxEfyPdRZCdcLgXhHsiiPt7QETbARWxxceqRHKs4iUQZUr9LcHmmWPPpQmvSkfAG5Y9",
  "key25": "3NKpgn6Bv8ZswHBStBN95dULfc55Ccd4684Yu8Mcv1iMEo1xYWridsEPyX9jWCQgc6FgHMvoftmYAHvRcK57QtkA",
  "key26": "3KahdPet2AuQVRE2g4Nc1HXbwehDyjHr2cSEpEUsKunWdFXvNzwhM6Wgnjq8eCBvikyqbE1xZGasBfAQL1b5647D",
  "key27": "4ZESNmHtFSvUFCJ3RTMK2Ne72LC4J8z1mP94ks2vVNhnyBNXMXuroQ8dPsC3c9q81rz4PVKqL5bYL3Y9qsLEjqvi",
  "key28": "xRaxCeZg2MJYYzqGWTFeHK3AipG2aXvRSH4H2vebx7X7Q9hEFQ24AAP8w5k6bGryJtCHbvwcbCfqq2Yni4bvEBM",
  "key29": "5Qxqkudd5ndsBRYxz8p7RqRrRR2Wscse9gvFftyY9XWu1fHriS4MPGv25VUxaUFENYbBPrgmKUQbmVMRPYo4ynQE",
  "key30": "3zajwh5M7x6ZVSXraotrADQwjQHcCciUpyrJEF91y2q8CAehQW5SiqiQ2wdrWX7JKu68W9wYuV2XrVbphZD3MQ3c",
  "key31": "5DAWJbahJdR7PD3dZsEZYHNm1DQ2H5UhXyGNAPhKop6yK96nquRUfkVzJNHMDQLHCrTUv5ErrCv868go1YCH6BWQ",
  "key32": "35dk7LgGuYbymRQcpGxJ9ouUQvZ3Gg2JmDmmeXwMyjWgDCjXVd1pf42J45kpofzuv6iSqE1mqFagbVEbHFchjNeX",
  "key33": "3YV6jfwaBhxESTWPqv9QaAVnpTH5ZWLcHpyJMRt4zFUA5uc92w2tqmTpJtefp6fSNvcbu82gH1mxJ6yvSg9LdWgz",
  "key34": "4VuZPeZCQhSwRA6882dhAsGhu6q4GXwSZNn715efdbczQ3LmZyVBHrmQ32xj6jjnv4aixoYCy3WWfkscNGiJ6cwh",
  "key35": "2PrsqAuJYEjVPCGW1FBVF1aEaVb5ka3VQHrCTUujJ4WJk8g3CWYd2gMxp6SPQ57jspmHozExU3YiXAnYSC1g7mYv",
  "key36": "3qRZ1WSYeD3px5oVhB7SLNjQgRHuwQSgaeJBcbpnh4jRqeejuhS1hcXQKsaJVLraB6BGJBSH4ZUM26w52Acc8ggH",
  "key37": "aMAkVBMU3nTwZGyQe7EsDHV1M82j6w7jHWUvyksR2RkPm4cqS6RgYc5C2mVVJcaqFNsoEVLRknY2NyJETLtedUz",
  "key38": "2v7a6RTTiUTJCZ2Nkh7UegFdcVmv6B2rMnMDw3kTnkRUHHk2tzyNKraTN4vDNWf3XSWti8HrCTZaZaB6CcWb8LYD",
  "key39": "2LuSGCL4U8UrcpVTbsegit9aUAi2dB9DVsidUPKyiv4UQSFWfqv17rUn2bjUGtBjtk8ZS75QNxFK7YZ4CmWFq2PD",
  "key40": "SHafi7CJRyJCQGcpFmzzd7paxJrtfcVmnQ4NyyEMrVgLghu4uXY2G4pw5CuFiKoYryzzDgKqoFD2gajga96QA7W",
  "key41": "3aGYH95hY8pfaiDuLDMNR6QEf1LxBdDFvBCKF7q8wE7r1wtncGdcqWEuz4WYWBAqSEB2nKgF2isvszTuHgsKiv94",
  "key42": "279NgrtkKzhhdEF26yx2mL3jS2VGbM567Pm38XzTzTLW9gFx3nzzsDzj3pbF7vdpfCvBvoHWtZUVvjouGSypjCmk",
  "key43": "31Ucw4ytvxNKVWc42p3yqdbTMdQtcMBkW7f3PW8M3XsU3evtwTM2FnVjaJuiFDbzLRQFg1QiFfAuMYvSfqVsuoFz",
  "key44": "55A9guiSFogPTPDTMTtgg4VvgU5aaFXeGv8tcQUpojKMUw1vpVAR8Bs8SVZNBPQdfysLQyQyvptaFqAVFn6BPDCq",
  "key45": "2VAEyX3CfTu5pGSADpwpJttyHhjhAkZTnLmw83JL5g6Yos75npKxF8JWsq9UoZnWzU3HKRTWatKStbFi5Uo8654p",
  "key46": "4hbMKzc9iM4TVKjATjs5QMb3DYLfR9wscVsVWBoKezi4WLnjWuYghmuuuPwFc9JyeuQByp9vmucjfZien81f2fc4",
  "key47": "v8vzWbsiajQuA92cs68njzguQpdanEsMSvSpX65PsC9wjuUuLrGCCWsq3bx3obvxoTCvA7ekqHJ1E3xM9Y5rhFG",
  "key48": "C6rGtHPAhwZpfdhZvNb7YHmeRhjZVYdoam2pcLEW2LTjqHNqKxDUHxrUmjoEX1KrYDh8ntKXfwgDLC8BF6Soh7H",
  "key49": "2rQc5U7b7JP91Svt6PkEmK3JdqWuzoTwqC6S4CYheLPEPKCusZtMg7xUjAJR8JpP7p7e9W3Dy59NJiGEp2p9CTZZ"
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
