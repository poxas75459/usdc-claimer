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
    "5DKffkhjou5XUUz6DTwjQnWUcVihhaTo7mbJp94wT7zHS3fkQVXLf3cLcDs1ZdKkmrWn8bA2J8jaQuT9g63GXTjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aUdBCjsq3NEDUZ9BYCgRAewvP4zdxY2h32Z4oKNKNRrDAXMJYZ1WddhU92PbZ5HEanExvrUX29nw4GwCj6764fM",
  "key1": "5Ws6KDmwzgTvW7m54ZtwMRzBW8K8tNbvepJ43cdyKr8XL7xQcVkJDyZA71GQNymuNsfMYeFjfNgMDbhi7EbzEVpM",
  "key2": "2Db95wq62or158RYtHAxbavybxVWCM667cspFB18kJhrpcq6ePoVT4AUmhppZYPuHhJXm7donHDB3cTZYZVztmKP",
  "key3": "5JrFXDDMG7NNJeHCNq96iYTBkvNNZxcZwSFoadTkoyH3fKUgpZZoaDGwKyjFi66PQwx8btXmBwixoQMRTHMBB9FB",
  "key4": "4VTrWVrRPKYX8xa9edpQz5Ve8B4BipxyYAyHMAx3zBsSwzkSCMcH9qFf8ViBhdrDPCnzQcJ8oNUrLsiXWVV8SgU",
  "key5": "29Bny8cry7reDBYoKZukAU1daxUabps2SyVkuiWNsTGVDBSfUoNoVLw5NZ81tJ7g9XR1oc1kkjJKcDsdZm9XvdhX",
  "key6": "2qjEfq4EdH34spnuYGkKp6QEbU6E5vWZQByEt9kxXV3HNUzPnZwZ1kd76PobkWE32cJe8fbMv9ePky1Eh6byNWpy",
  "key7": "37yi3RbJ1xtLChymiW45vo4z1pBzrFXk4Pjro8sRFE7UBZaPRuEK6eYmywTUzxJeYhevJ4wUzh6dY5CiCZCENc7P",
  "key8": "KZEzgKGad8rzwVhXpgbfNaXQxiSMHnYQoJLu88KQ8bNjnTbwrRWTqJexbW8eKpEPxi2bdg35soUTr6ppeGDQXe4",
  "key9": "4SLUBq1ytZswtyRTDxyLv3qHbviQcuj7zBo9nadNWhoov6JZkVVSiY6KkChUNkPZo6wCSwuFBw5TC39Kcq9TJpsN",
  "key10": "3EEsDM6z9X3mFX7RRs83gGte16ieunA4DB4SCDrgzDKKMBrwNAhm3fpAqRtoTfPsQSq3BGJxbuBTk253viLz8pdH",
  "key11": "TekjK4pRTy9GMETuhKSZFdt4x9BgQM8UcAEsQEwGwgnrT56sihnfvqvNQ4bXcXMGp4ZA69T9Kb7BgB79Z5eqdyh",
  "key12": "ahK2KKGJcBv59NJpWMY4Z41fLS71g4Jget1YFbn6HExkyotoWsoyUgzzFtZURHG8uLS9QAvp1CuBh6yVyNRAU2e",
  "key13": "21puVk47NavNyVQdVooaWd1dr2SPBXeVjpaZAeyMNyn6thD4p51oYTRyt19yeE7wgLKhLbvoTxit3Vmczpz89DxM",
  "key14": "31guRi5sGDRGk6vTLz5Y3vN4eJ63yxJbomFq6SpEUfWpH2Xyha25SezqLHYAb3hSypijfLb2nkh8QGFHN1fgaweT",
  "key15": "EuQY8DnKHi6bWEnbDMg9RHENBvfTQzMTDXAFzTLhjXshC9kji1dgRDPeuWtL5RJTn9JesfqBhRCVQB2jTFpDW31",
  "key16": "4dg2AJuiaBrPtamBsu5XFbHpVBTs71mceHKr3a3QUTP9rb8KycvUHNwsKkum88g5sN2GUtof5ryiNrVxVAujp32u",
  "key17": "widtybjCtLWH7c91unAMvcXXTeym9ANxU8dizxE4pM6YbB58eaQDXhFaW5nMMtxMLY3gzAt25nzdzmcoqaYT6BC",
  "key18": "2zMBGqe4UoXsTQd8Awj9K6VXA1Peq3abczwYDqc9eRZvJt6e7jMZjJ1n2pHoAvpyJfZ6ry3X79iPD3MGRjnnrv7M",
  "key19": "4rJ7DGffJu7fYLhrK9D6oYPUd47YGfUYHTJmLKZnMMom4VZR6eeJwj4ZpFgN1LPdJJ5wCLsRPB7YoPix3joXKbLF",
  "key20": "5EtfDXubMv2mBkYLGKieqWXBMad1CHDDEey22QgDxPC1wHk81XhpDHTYEDUNug467NeLFQZSwubB88qDwSWeLUgc",
  "key21": "2MarurLGdkiLma8VoFwgZCkKoW2bCJAJC6T51aPCaWHXL63QoRX5YEpZNs5muD5e46HrJVxtb1XgghJpZ97JKaaD",
  "key22": "25jwdCvE68ncty8Aab95fVMSzoNecBB9y6BJ2hKqTZYhqbYzhkz2yKiZyyLp71tEQtsjRxY8fAWm8Tqah5XQmVLw",
  "key23": "5MQc2Xj2VgifLLjvq9zHurafNWeUL3oitGj8UKXs1vLac85Z3xhfjVKh7MLmkGmX6HforupLppWSAR5fYHbvNCX3",
  "key24": "5pcsripBbVnRstA7YuztFs6aNEatR6VpfbrcPsj3dufcWPBfWZXgfyQEfitwkMGLmyPWet47eYvCScd2qX1f6hCL",
  "key25": "4ApXXNsV56YnNWoxWxRzggiQaA3s4efoDfGghx7dDC4NVcKPJ4Qh6EDtQejiccGdeGtTyfa3BstwzzkjCvqK23v1",
  "key26": "PxFBHmBf1mUMcXewEBJMoABEir3gwDC4NLePJ2C1MPSWoreDL3LiNUivwTCqzqiLgxkVCVe99aMo8q3uZtpsWST",
  "key27": "65qEF97nRQRQFQ8W6RaEqkwUut1QZmkDmCmUGJSjEeUZKQPCZdfJHxidy7369EX2Xc1PGzdDHYPXkFNtrrSHUhLq",
  "key28": "4YKuvdS7VwvXRXXTS8soXRZUCQ2ndzAsq8SUGp2jbp1XAzZRGFwMzvVYhp5PCPcT83p9bVjhTUHMWE4iAMYXcPGk",
  "key29": "5i2fQT11kNrr7oTxwxCc65Na7Fb91njGf9PmogkHjTEbqXHW2HvtUbnLhtuJTbL7mz2JKGWLPtWJWvFx1TjwDjmB",
  "key30": "gEYXbSnNu5PAsvATJEJ94pZDUxsKUGHxfRe9AgpTvTPyhALNmM6t1uGp4jhczezm8jM5soebqMiu1AorxjKEBTk",
  "key31": "6H2rKmSgWR1t69PeU4RCsqCQuP4gbuYEHoGzwLgutuRAER9Eo32uwSDLozNPuqvt6NE4tj5GSMoGAnfPMTi4Vqr",
  "key32": "476xVpUaAK2nNoXokhnX8rvDLMduMcaL8vTKjKZaLCGA11UWxd2jQMtA6UMFeWh56NWchqgJcKfrg9o5Juxnu8J3",
  "key33": "w4G7vB38oMawNZSPhZ9z3QEGte2LFMnm77KtaEiBr5R1Z8MCWRJit7cYVvbW7Xnq5z7KAuGW5gkuJKPS2E3WMz4",
  "key34": "5kwfzHzBqgNZjt1PfJGBQ8JF2JQEphhCV59cbBomkUFdKmwd4P2tHe58oHaP1421Lp66FbtpuKurkpFuiBH7bjJx",
  "key35": "21EUkcKqW9HNsu63SoMRNpAAVA4ix4keoUTbMSNhsPs6ncZqqVoFqRVoPzAweAB9V7it9F9aqizorvn7N6vaySAd",
  "key36": "4cpebNQPKKTXpHJUtTgztAGDLhpq95AmibhyjGHQYoyp9eMpNKUGdjMfUf6qPcW4C1jgwwZLYAgjmUS4LwCGYWrP",
  "key37": "5ukHyyrfHsseh57CFaabJyW6fhPW2aECJeEYWbzVNZwL2onVwSkwfEX2G8vNtLdyf8sZNcc4RrVcQ3LbFJAQK8zW",
  "key38": "2FRXcprAV769jaqdV71HavV8C2qwYXYAYzz2rKrvJmP2mVNYE4Wzm6P74z4QFo6XhkqmK24uyhRuihR3UdabbFsz",
  "key39": "4QvDWYUC5NwwQ6G6j8FG4UuNzEbRHBgPSvqzbRSTf7wbjvUs4NYC5txDdRvbEfEUw5yowGwASF5MhUahwKgKatba",
  "key40": "61MzKFRpNb47eT7SkY9f3GQfwm2DLVQcvsgtF1DLeLQQGbDo2K11hafURtordb7BG3HLQZg71AFmMr8w7jcbTb3k",
  "key41": "55nkpx8RUeKKGtyPBE5tKJnUQYLohFiSbQsccPsqUYBSgaWVyCmi9goeqyEyV5aK8fwBDMWj4qepGuxRySQ8t9g3",
  "key42": "CaB8ewJhbNndhaSWpLWSakBomTu7osnq43GQxjDQf4jxiuMwEZ5e7CnmaMxuBc7dvJsTS2o2tNJADvbS6y5CR3A",
  "key43": "DcgYn2sBGnJwUqirFtwtseRZ9NysoKjm7vidkamHzHfWoC4rAEAGeEoTDNVeMerc5zpDsFSZC1fWmgJZuExZcwh",
  "key44": "4NACp4ivieewncmN5dvPVeCmS1FFbuEz31DugGjXPt5jaJj1ameGzeyqGAQVH7zUgofPJY2VbuuhU3xk7EYU1KU8",
  "key45": "3H6SJypFgLbVuKgdXt5kUtHve6XDSwfkGbsSPqD95mxmZAwZYgrjVhMNEQGKBz4LtXuYxYySvx8rGrJSjjTVVryW"
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
