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
    "522jFyAmQYYoywkbNcTg2ZDWzcVE3nJqjPKvHBfrn7NEajAnoiXG5mn8k7g8HiSqBCSNBEwKWShHmMReWjgCUdv7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a3yLxZhyhc3EFQp2MH85qFmH2YjyXopfCFVNTasqs2i3PLAR6wa5LBEY6UWsC1dXp1A4qRUakKLYi6JcbLqsc6b",
  "key1": "4tH86xCpjZbSECewYPG4F4go5UkaXScSoNimZS88d2GuCMLBZwx6oJVGpP5Q8JLgJ1FFnUt7CP33w9UzRaTNdHi6",
  "key2": "5uUQ9h19PzC8eamiag42Fm9LHVVjyYmgSj8N779bkdtpzaSjZcXoMctQ8GbwdUV6iRXoSVq2YrSD1z4FZpjirm1T",
  "key3": "4WHS2JyJBCYQd5qDDJop29ZuFZgis55CY8TLUUoBLFXTMsPZ8L9wakphXdksDqHzjYPdPQyKEUGgUX9qbg9GiTxb",
  "key4": "Jd4A79f67tj97nECSF4f3DsB8g8ybU4AccByxqmWh2WhMkQVP8DLRCQT2fhqmJb4pi9wMYPMaiUyVDY5DtPF7cz",
  "key5": "2teRpWEkUNhG7YCQdj8YLBzg36khUsxXCquXJxi3TE1gZU4jAVPEXUurREJJuYtBjvdtYRZwjqyuUMjX3geD35yF",
  "key6": "5mXLzkj1sHmddhJh3UShF7so4knVjVYHPBm1yvJwQgTNp2BfWP756tY1HJ94NQiztrcKyLyWBpVtvxaiLzWLW8ot",
  "key7": "64gSeyavQs8CFCQgCCy5rZdiCJqtPN6o7CCmqigaaYKoaoxPnesjxSRXbpJm2w32GFYCkcGvJDsm8o3xkxwSt47D",
  "key8": "4VWF6XAy2CqqbfY7J5vy9S2kEXPSdsrzDszZvxNgjAUzLCiz7JeJSbgcCpjEWprPEi2ZgdaPo8iDY81KzQ6q7bKf",
  "key9": "2FWCoCZPKhUM1Qjoahdv6MGeQhYsR51JwPTsui2iUGv9H1MsdR1TgofQGRgWjoW6E39yaftdcpLc7R33vCCG1kM1",
  "key10": "ahniYvLEmh4TC2BmdNT9xvVW7ooqJFkWpKeUthrdWukErF48cqHmjd65kMznS196yN9DisUhdyur8AJ6yBHcx14",
  "key11": "36aiwPqHXCzbDLdoNmPDjUrzn7s8kjNJaWaGbMvNqRJauThELH98Hn8AdBGf2qdMXL8ECdmcHHu9GghbnU2Gt3WM",
  "key12": "451f3uJdEe5xTsubyCem8RfXvHfe6iHzVMt3xJ55kRsEY1gET2mcj9MQQzLHSLazXGDmTPJSCzFoKXyEfLf15Lkn",
  "key13": "5994n38dpdN2WraJCkWvrHvRCMcoeTpQ2isLuEuCzM2NQj332amVeAYrpfQnCumBVdEgqePxDmzH2FuGGj4hu4w1",
  "key14": "4xudeaET1mkQ4zAUEezf1BBkL7iMukH3XTKoBEeVH7YHN8dk8CxgSmGX39hkDiCZmp2qGVhj54gEUdVbGsjUTQQp",
  "key15": "4NNzTFR96VdA9oeB2JT7r9AFbRNfhqn1xn9G9gu5kQ2LkC98EkLUBPcWTdjPxGTjZmx4T4ASupJqFzeeZTC9rugV",
  "key16": "QxjsyZV1Xyhp4wjwsDYfDZCKdg3QkWXR8UXX7YcQ7EbbVYAs7jxcuHFbinzDAogXrp47Uw6MQikYc8i5cAJmDwF",
  "key17": "2yCvYeWS2gtRos2yT814T2J9sdMfBwyJSTDp7hBK4hhPf4okNvYEwWwAda7h9L42EMcfF5sGkwcRNQkAsBDXdVq8",
  "key18": "3nvaeF7QhdFxYjPznqUSdyCdjKAST6Y9rNGPMUZHNeVkaB3hcRqA3gJLZ39v5718ePuAwXHgozC67BpwxgUipQEq",
  "key19": "5KRa8rAqviwiNZDCMFkHvCnGnhCTSxzWVogesNUNNjFoqYGYLJ8xsESMVAvUJZbLYt3xtRAzDwkku5WGqragnLVZ",
  "key20": "oKyKBcThc7Ka3uxFYr5w8EqXQXBxc4oWPS3N8dGRQqB13sV9LG3BgxTKHxeo4zwwLMUGSazidr9oZr7YaNcjQgj",
  "key21": "3zovWrTZpooAicVvHJrm2VKTnoL5kPU1cEPa2Y95eVk3WAyVxUoEB1M3g9tQMQ72zDQaCkk1M2ZCruEWiSoVZcPE",
  "key22": "2DYqaE8BSFMAuEfjxaWHMqqNYoppDJbHfWCUjwMZxSJbS5M4npaS3WBc6n689KvoeYYkW1SDrpuSChm3g74rF7h7",
  "key23": "2U8jCLttrCbMHaRdedLGY2EkPk3c8BvuigjtbcvQU2GTZVv7sKJxutEqJygyMLTKEeayEhjMtgKojCdQrit65NFa",
  "key24": "2crynhW7fXdYC7kesqWfpQqWTUfTMrR5iCcGntCJbBwRqevFhnbDgd6BE8n9pU7kfj313tC8377wLdFbsJeNta71",
  "key25": "4KfVq1bamioqPhJ9cjFXmZ3FTmN7WFTYfkDwvXwX46Z7VMb8jJJ1U2uarABi3EZYcJ8QV2MQL6bYNjJ1APWdWR9w",
  "key26": "sW1pE8sRDZeTcixospu1gqaUJBerKd3eGuF7GQL8ksiyMJ7pyjKv4fTaJ2aCdNXqZfjSKjzpyGNTrr9zjoAEDMY",
  "key27": "3Z85a9LiGwgx5i4KN29HC2bWWqCwVNaqELwiFHDSQ7FiaKh7EXL8NvD45htDtzMK3PnhsG5bwPn1MiXtVxjKcNUi",
  "key28": "5a8pRr4HhkrwY7NH4T4QrF3YPVrmQ7aUEYBbXq5SgdF9aNWqxSXu9dqjeWUvSZSB1RqM2JhAU6T8nLsn2yTJnKTX",
  "key29": "2LhSK6VwPdMdjCNWLbBQHdckiao8wcQKgSE5QKXS87xS63fMFX7pUVcKXMD7qpVT9NYHKUjcCdLmqN686Kr5Jhop",
  "key30": "3Nu1T6wufSCHoAQXWo6ygAW3uTQNd8Fy5iZ1e6QE9HYuZPLSEqHQPicNce8dNt4cpit4nJwQ2sbb1p71g8RNBBve",
  "key31": "4bqn2GEBAEYfHHiXXmsLdw95vWzEihRHwVSKTPHcPbdSYaSguQP4EkjVphVNBcQ2GJEBtKbu2MrAqntvNQ3bVAdy",
  "key32": "4hHpKKAd4oEn9pjZZmH6SpDmT8x4NMeMabbR4iwPDarZ676gNn5yQ1yuUshfpU552SAurqwbZkpcdQPdGYLZP2j1",
  "key33": "5WEgfKUF1d6Q8uwski1jHdpkDZ7d5mL7sqd3NWgV4mqSUq2Tb9W8F27Y6JKEzYLheE9aKBEsnnhyxpaDgXiT6hnz",
  "key34": "TQBU6o3iLMNBA2QcRsmZEmX4Ckn5vGG5i5XMgAofmfLT1s4JRePYRg7bv43FzdRmSTR5zvzhGjBWyUVXyPFy7yy",
  "key35": "2wB5kL12thJV8zdqFobou2otnLxQVQkuCYxiVHGTmvMzxTzYA6djnCpwJfwZLNSsrCwhephCMYG1RnYMvFszKDUU",
  "key36": "55CNLsvW1Q15Lr4N9fpeA45bedHzP84XonPEJeurLQ8k9kLXA8Eyr9nNtVZH19g6Qr4WXRiGLaTjBMPRdvbX6bBf",
  "key37": "664FJZUqrvMaQLuiZQTf4zaZGBugssoFWhQyr3bufi4f3YXhdkYxMD51FzrFRdYz5zJSUkmJdTwfNf3qRBzuAKbj",
  "key38": "2JEgQ8KgzmxGcrdCw4pQyN44Qa3JNtJ4QwAAkvBqZw1Bk1cDVWVuurahyYSz6BaHEhmracqtSooxYxayzbdQpxZa",
  "key39": "2Ln95ydZjyP1GAGJbzJxzQjUvELj1HoqveCpKBnKy6e6oTRh4fSrx3VrKDu9PWAnAzQf5npusy3wWfvDeFn7EiR3",
  "key40": "4pza2UG192E8QnTXZNoeFaDQ2AMyGUXL7T6zK1MPSLnN8uCnT3YWJEKCfemxDkkeJpeJmh7aYin9nPhzACTEhvK6",
  "key41": "RgpgJE3VykDvgrQBAhH4Zixwjz48P3jUV4srmsAFshaJxehrzT8CCcZoUZupE7RKexmqeeuhtzrtJAHmwqqV24q",
  "key42": "53Syy1eiFMKg6hpoMKQNfVNTQJzru556c6X9zwF6bJteeWf21PeHAb9R5KzrDXJb5Win6uyYb1L97Nx8tPfdojmf",
  "key43": "3hn6St5YVHDd1YPSKc6Bz6CjQXPm9nYPpq8ebhoTGzpHsz3xnRhRo9Vh4JcHSiQyVEuvZAvvicrXQzECQyJGU89a",
  "key44": "xN2bMdidpsxXkB34RjVD7koCiknWBMqWoPEdWu3gyR1KAwGuLyG2U4XTnng58DKmYgSn52FDqnjmFKYS8YD2NWy",
  "key45": "44WSxrEikvoqM35T2zWT3QLBR2eX3PrYoPCyCYwnd2BnZe6dPFvYpR1WytRFrQXfWjzWN4GEz8U8qwo1wnFi53QH",
  "key46": "3X2jKCw6HwepzLSs7NkgTbX65Xv5CGCprxDP8A92AXHNhBLAxrtZmqBVmESLC9cANPjXPwKC2ZaQVvujcyre59vr",
  "key47": "5cBKqsc4TxtAJNQZ7U8UtTEc4Bxe9XztpfnnX1qVcD5BQNfJek8vGKBz6N2jAuBidLuXZacs9LPpQJoTHWi9Bdwv"
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
