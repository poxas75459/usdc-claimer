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
    "RyistL75JpzxgXWiNSEzif43sAGgzJQCF1Ay4yLKEogoBEjLXFX7uwYzq6VxxEdW9TKStuUyWmLrrxbySYdjRfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mg2gTrCZgnqQExJKWdhv3NRJUGaaVzxBxscqtsueWcgJ4V6ntHogHu3LgKvy4S5x8GcvP7maXwZVevEbzs75Xeq",
  "key1": "25vFvqDanDnvF3dGxmXTJTaRSWpm1KCrpv4RCmyDqwmtg4xutEXTvgqnc5NwDUJsfBFCK4QYrpNXKR7CrRuRA3uA",
  "key2": "3jfAchrkyysQRhVg1dx3rxo3nsG7DVEEjmdmgvS4Ned2xzyNgG8ufHw67bWohKoXkQNifBvK89KzUH1qhvhNqCbc",
  "key3": "21hsMYe923VfMiRCqsF2d6da9ptKPor7xjHjUbyxVtRTRLCwDm8Xqbo4JxXo3vCwU9CPABPxek76dWnuq6rugqYs",
  "key4": "41D26KEit3pHui7QMUy2uKBHaWeKQwiyUhdm5g5yQAUFhpToX465Gm3jEuvjf5SgX5Wk7SAw9Jczp6ysfE3YPC3N",
  "key5": "qQgaphQSxZUePwgHVjduqRuorQrcqQpTcvnPktr56XxVNJAA1EuNXv9BECR3urUDDDTqpsGsq2jBA6hsaDU2HLV",
  "key6": "5MZPL3srf1kGe7YfRmsnWxh7yk9McRcW6nBkUvqRgJWBqonnkfqVtFTf1S8vizAurwoLBxPbRhLSmUZza1qxWszv",
  "key7": "2Q1fy3QvXbFJtgK9Vt14JzUhKAoyM9jjRrjKThXnYuk4VNeiyB1yD8RDH1C8MYJGYt7eKcjeqQUh2M7zLYbm6sF6",
  "key8": "3ZY9qAYFqUMYes8vYLsM3zSDFygGycVwECyACC4xL9ZWQtKdruf8dR9tJBerN5YCaytnFF5prUqrNfFwrxcae8Y1",
  "key9": "qA5Nvh9Qh6jLLAVRHgJqCTGuJrETXdUvGY5iEZEM2pa6xP91ZDn65UUwKffXZxyshXkfBAgrzjjsjoU284f8jJH",
  "key10": "DYomE6w6Ye1awPMgVgALDDu6WXtqr1nvceJtbreQx4Hz5tTv7fvGUnQZM9d9TTcdWK7AjSg6nGqHpbNNKoNiAJG",
  "key11": "3F2mGZ5jUWNagX8AMbDoupsvtEd5QtxB9inaHMXjxExbgiNtqQNpmRzN3Acpmy7U85krrjamxRQagm7CsMHzq2dP",
  "key12": "3YWcXpfBiAAWvPw4mawGUh1bxpUwZPBr21wKZe2HevKHLdzjTcSvgg6CopbE8wGeF6Da4LjgTB16hSZGebMYDXtT",
  "key13": "21QZRxT7r9WRp7VYWoishCeXSzweSHx3mJRkeQUCXbvT3TgfNt7vkJRzo1c27dznGbn4CzEpbbGyapgg4VHT9sb7",
  "key14": "5u5gdDxenH39waofDLWUm3nK2kFeM9WYeQGwiT6TrNgdMdMYZZgbkr7hfTR52WTkvbZk24si18QMepCBmqGdauXQ",
  "key15": "4pSbR8EFYF7PVTeEbJzkAGjFc7JNF3QFwj7b69shiZUNz3Ut5CJq7ZJgmoJzcHkPthHmEJNEVwinJhyAZaEYvCob",
  "key16": "2gT2hff8buAcD2H5B6uWgtVZfuG148LRh3azLfxz9bReJMw7fMkj62Af1nx6wn5BdhH3C762GQGuThSoQNn5Nb5s",
  "key17": "4uGW9iNsJys3dj1SsaXLRHB83Tjt7VPKAkyxErAp3vKJ2KNmHKBDd53DHakVuemn8ih9Mg553294sQfXsKiiZP44",
  "key18": "3ukSAzK1yLRMWThsbpSGZ57hCrY1KpnRLqG91DbKmnTjk9Ub1MkaAUfCra4CUK1JhXbWwcPK5AjcLpxrmQti92Dm",
  "key19": "4H5qbKNg3yefEPJUjHxvNqWRSiJ7TjfTqv2EiQT8L5opa86TkLABhGc54CKpJvWc6epzYCk9QyXdcDrZ3VB3foCv",
  "key20": "5N2gQa3aGvDhkC6zxbERfHzNTg2xteRxYqL4vsfduzMWZWmadpCxGerL1wkeTrgXfNiWbZwFpi2Pu32QJwSXSLpf",
  "key21": "4nsuBg5FLx3UTFM26Xyk6c3VkS7CDghRbEZ1uKX7J2panNDWpYGneyML9LkMvPLb3g8JFZgnLTza3w9cVjCXT8Fm",
  "key22": "2ZVZC8bghVzVUn77y6JdqvQbzPbB3TNucBWEZ3La81AsTuboY3A7J43pAHQQW5yUWxFJJvUJDkyCusy19Q3eD2Qg",
  "key23": "2SLA1dDUe7BhMoPSVMYsfZqVQkbhhf6gwfJWh3c2N8CTu1sKMp5m5CsKKPjAtrhiN8zMSYmydQVpfDkPPWH72ufS",
  "key24": "4cZT71uJav2CWUix3J3LSxn9n8nUPCtvBvQyG84FnKoQ9yr87bRnyQ3aG1Vg3hJibJ7RpVc4qJb9LVvDXE315cTC",
  "key25": "4Usf7veYB5DeqgMWJQLHAJNCEgy83Qw9PuyZMstph4b1kAZmyAW2MarpUAkbuLz81EF63rX7q9TviKJuNMig4QAy",
  "key26": "4JjH4NfitNoxhaUKkvKbpDwpAiTbY7Lm1LRM3bKxLTqAisWbT2ov6zLZZ617YtdBqV58pdaBWbDgJve6hnbkvW91",
  "key27": "35KVyKTJJqymXE5rEK9s4KTMUWrGt8i13jdMixGuD2rh6j5nDUeEzg8r4n3gh4QqeqyWzdEivPyE3DRoLYkUmov9",
  "key28": "3pU37TbEqTYL9rELYG3FXRdLbitXgVye3E5knzkRCNj5tUyuRqR15F9FrGoPRyTZgkpzKnX3wrfoHQuNvzvDvFHe",
  "key29": "5Jdm2VMCL7pKrfMxpEdWgYM3Dgn5RfpZVAfbUPpeBpqDo38zTJefHSX9rbxsxX6TERaZ28dGj9Q4A9eEJ1xS8Ziu",
  "key30": "5WSA4iAfw6G9GmEYxiq8zXXRBGWN4x2DtxCywdY2vKgq2dJU18ZRjLLUjrJNajmGEevZyYwVLagHDTWZ6VKw5AZo",
  "key31": "39tAEiHMn35ZtMkbyUtSKbKo1j9KNAv7VeCEe6Ec8K3mJGsgAFDgsgFgjCnVQRmcmDWymSCZ7WQDgMQfNUEA4cbv",
  "key32": "5nQiz2XM58foagLTB5Hw5gvKfJgQK6kr5dLXoQj6PMg1xaSQfcbfPU74UaNECt7JBMDZVRu3jYpPj6trhNW9BB1N",
  "key33": "2Z5G1RojaS9oJdkXax66Dwk6seRFwKmUCbDmB5f6jJtYLjpERGdp19rs6tqxTSc43HFadCWPRU5R6iWtvPEB3DTA",
  "key34": "2QJVR7fouk7ooyeBibSkbA6brZGos4HoAdCwPWRYMRnMNUaB4vW2nKsy87PZeuFNdsSqKBEDhw6yKDRJmurJauj",
  "key35": "2jnorEvxX7vcroLAJxHtaeR9pXut1VZ4Vqq3sgWAZuaBZYDhk7jasJFbMBewKbdPmWKvGjuayGPi9HU27TkAewxc",
  "key36": "xYuoWzQVyznHy431KK7QrMfwBhyPSbuU4gQQfBQn2QY61ki6cBRmPirnLvX7RwTCsBNCvBQr12Z8pj6PmjdxDau",
  "key37": "2BrwKW9kRPDqU6kTGqeULQo7WbKB19EGgR6gGYADpp9JMwrnRYKTdPeeZW4nexCxs1dVNPgC5f7LDARvHf5cjfRC",
  "key38": "55gmUQHWVWrFerNwC2hiitb8LfZ451aGeXpeqyx6JuQ9TyinGtjniUx8iVW1NMTtbJPwYGVg8TALp6r5xmy7azkf",
  "key39": "5vuzvKVh9Twi7v7VssYTUZquUBvPdWzmaiHfLMYG4EkH1zWb2syFGb4bF5htUDotgmk1rZ93XUMvz5LQzJfEWBY1",
  "key40": "5wg8bqVrRk9hbCsZFwW8W1VynGYdcDrh7rMJ5CZxAKvd6ePx68pSf7TTRpx1EpDUjqAm6jQXJhRrsTAWuAH7Cx2",
  "key41": "4PaDzEjc8SnESwZXHZQqtALnBtBBRnme6bGb6jHwUedqCRkUR8SrekP6cGS1e2sPPdm1kdq32UisSSNP29iKd4t8",
  "key42": "LQufcPt1pFxbhvhMtVMpmUQv2XbdpjMUDvff4UoWjVT8RyS9Hr6v8SDGy3zFNuFna5eb53kSWyNQMNNEYRW7ZvA",
  "key43": "5sg3NpvZ6UPSgwz1iFF3ugVfur33kKDdt5HeWGK2XMcwB56idrWeuyhEupkjKXZfhYxJDEGpcJcgQVso8VP6rZKL",
  "key44": "4y7FDuzq4Ve9Q3XhXLbKGqqpLBMd8ricUUHRbptDV42G4wGxoiYrFraGAoW3wagkMrDssmrbo9MotQm92My974hL"
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
