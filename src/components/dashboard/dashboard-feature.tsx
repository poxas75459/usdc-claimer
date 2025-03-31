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
    "5U9DYPmyV8FBg22f8FMi6RsRRfbWn4n8Rtr3yuwH625nBaVYXFiGDRp8drt76NeESgJTzbktbAjECXvoA3mHTyF1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gjjYmsKawsMkVhJg9pcopETPFmPT8T2pUHJHyYLVjVQnSRaMFJCRT6AyT7Pr96QVhLokV646KY8GMYWFfWh1PCw",
  "key1": "5UhY5ej5J9u18ht22jFb1Q8ZaxZX4nvRgT9gQEsCDuanLefjPTQ542bbvvQMnoG2whbT4CDP3aaMCbAsdzjg1t3p",
  "key2": "2qZRXt56VKnnLrQ3wVXzReQ3gR3spVeGLKXTNUruW37khzP7ev4gq8sCQ3MDVJmfPpwrdM5aPo8QHYDYnEmHLMb1",
  "key3": "5yWTx14heShSzu6xqWGrxFgB2uJQYR9KcW3uomdJXSrdAimapMeg5Z7A7Xyjvhwcf5LNnPtU3xT7A2WAw3hpXp7M",
  "key4": "4r5o83T7KV68No9H4BJao7i15vv4FCAFLDP1iQKBEeuUEx4FZock3JrAZbpYxEUk2hW1WTiV3T5QNw6M7Fx8xtZc",
  "key5": "1fx7HQvkPpfi7ubUE1P9nqUd17r3i3an5r2oA1czza1XhhY2ysTdWDjuai4GeQcZw7ksST3ViFB4nxZYHbyDwfG",
  "key6": "2sn7QFK357qqz4CRZY5dMj9zGTY8g2QLspdVSQDjo8oY3nj4qsfntENqCxzUJfmpDF5LHJ17obzXJegpnKPtCTj1",
  "key7": "3UxFRimGSvvQnBziuaXnmMWBzMhQbbErkqBKL9JveYdA2D41AiUECCbz8EdniqKKWqoX1jh6SoCYkZs4Y4LXsyoW",
  "key8": "3LexUXXLbKV2kgLPM1subT4B71wTYQKB7JsP1zkDMYitWc6H4AfRdcksmKV85vUxcw469rRBZT4WucNxx9AckMk3",
  "key9": "4yVQcgBHSHJd17r93Ho5fr1U2dcJ43cq1HYsybkZ4Cjgpowkx87WxjnSty5yGAwtZzEeBWKs2PgVzdsiJo8SEL8Z",
  "key10": "2bQLm6rP6Vsi6dqnRveRc14WALnyLMKL3jv45BwHfw5k1S4bTjpd3kh76YhEvz5V6UYrY4h93KdLrJ68RCy52Vhv",
  "key11": "2y2LY1w41HhoMUDYViKFgqLawRfEdoKjGpo4v6QStDFZb6ZUzFnALdwXAiBSY7SawW3mGm5vemD6Ugp1nLUjv4tP",
  "key12": "Gt1YmYoA1uheyEJFHpDCLHTybms381o2759Ncq4BkmDhdwxyCSc1HLYM4x3dafcSGnQ2CC6SL9dBWfdBG4Em9rr",
  "key13": "327TpyidanWe8MkRtG7PjX99bUEiEtTzBEXyS73VD11X6EzuThnxVwfumQ1mu1rEgpmFN4gypzsVjuunVQR1wi3n",
  "key14": "4QzZZAHh9ufhHArj5J12MbKy6yQxpHFaKgmcubhVuEYYCSrzvTVjAACPrwbzYUrErvz2wwuSkYTun7rmbwBbibX2",
  "key15": "2ACDV9j2uRiFdy5coxYY6YHovnqE5YADEmHLrcJwFcXXJwsatQ7M6cxzRDjBa7VU61wmTfrE4VE7T5myMwv2QY85",
  "key16": "wdndfTLmYGJgFNd8FjjpNgViovCYErZ1kqeT69gYXdDHgi9p1ZXW4y7N9dGiGiw97SQEicnTbTG9JGHb2YoNRKf",
  "key17": "5AP4tajuPUdWJBKjhjp8wgDiMpjRuXYEmgg6WMWGsX3Mu71a7G4mdPZWnhcEFHAZ5gvqmeF5fuzHRoSgDz32wutm",
  "key18": "5MBAuRfcNGYbik6444iTEC7VLwrqMZmP6R8QL7itmtRfH8GoXmtjHdr2mgixET6Zq7GQTdmFHhjzMquTWu5ALiCx",
  "key19": "4oromMUPqxcWAqJmMYpQxbe8eXVHzYGACRhNyg6tdFzfnusoNRVhawrXz3LV3csLrzZeqEaLyoF9MqyL4gWW3a96",
  "key20": "4b3YEQVqnXpyCfv1Rpe6jqBd3RcSwDeLcMihrSo1mwsm3oSNyT2RdJxJYYyt3QAXgkyGA7iwP9txtuaziLzjbHX3",
  "key21": "3qKXCkC9PerVP1WxCogiCCoWLBdt8bhTDZ4jtWDVEHP246yYTDYwLazvpxXAeedmpjbP3bgX5fxutGhJMDR4em1H",
  "key22": "51UgyEUMwC2AHx6G2rnsgAhGVobiHuy6kR7Bso2VbBM3qo6s51TeFiCmHv1T2BiDfq9gRFNBNBed8yUNHDrv6das",
  "key23": "491D7z2zhfgKnJqoTtyrddiTqooNmycwwEUrU43CsyL2jnhUH1kbt1i3pLSRH8QFy42yPrkLAYSgFtQTsiWXqyeW",
  "key24": "3kaXhwG5nv8FdfoNVrkD1ShuMUixCwLU5pt1pWEyNyMZULgk1mxuT1d6i4y69f5ShCx8KPn3CtzRvTgSkUkFdNre",
  "key25": "5SQbuFkt9gjcFA6eGT4pGUeQEL6pahNYa8xfm6CnP5XPUa54RfKMhFwgsbgFghtW87SxgP7hVNTLdKmbhmtHQNY8",
  "key26": "P4PnQcCh6va6RK8YoUg21zEh75VWXvySkM6SvinpHhFqC4k33EeCi7H6im64b5GFwd4kXdR7byfPFQU8fmE6vZi",
  "key27": "VoqWTyCnEMEoHp13UsqU1dHGEPGNaRphspNp2dxX5M9dpnLbjqKNgvZBeFaVq1mg9juHLZVqV2pvzii1CH6hHUS",
  "key28": "43s7GPqbqHiGezvSixXcAfvh5mZfX9znGPYLsNjW2uZt3sSx3uHgUiNwscFPDNQM5oHYby49RnvHZANR55N2m2hu",
  "key29": "2Yffn4r6caHv6qTXUuMw4Y2sS8vpLFmkAX2Nbrrgs9WCEF2QjXqsCTy3XdbzoucQDy5h32UiT7HEfLtR7KiM2q3r",
  "key30": "3eqD1X4xkGzrDnK61xkKeKVJu7iLQeKf2wfMjtmhJPjC24LGEUviW2Weojk77uu2juhpDr1uh2MeBRfd4W38tK5f",
  "key31": "e76UmAbGa1y38hdfvrZjoV5j4bMpBp9TDpJEr11wiDJ2tYBSFNGaGY5YRi6We4UJ9FSZiJWqEeyvUDJpDtrisdt",
  "key32": "4V5ndJiLCdp8Cg9YEu8fHALEe79MjdSFx33696uuwgrThvkfkQeM5xDdcWieiroKceVtN4u51LXTVG4nxQTLdxHo",
  "key33": "6ZCdR1gwZWbKpKVmEq6B7bdczg12JanTJMbivyDwRTXG9V8cb8F6FpL4835TNgCQ5AMTvEAEy2kjwa4aQfjUrYS",
  "key34": "3eYwhEFqkvSA6BqZdTejqCHiT4oxEXSadCgXvBrmK6Dw6qNbAPNy3yYTvNUkuRGSfDbppmJ5WEgikyswDp5iRA62",
  "key35": "zHFhFNrMpjtdEiryr9LdHrDY7B7RqbQSxhhxtXXtwA3BcC3SzAT9PCGEVk6c67ufDES2VQMt2ugUuKFEN2tiHQ2",
  "key36": "2ch5qhxqQPBY2prjLUR4aYCXge5e6AH1inazfgBuQ7Lp8JsvFWG5p3b6VnyPzBQtGBWLuQzzkDZuaKET9xHaHfr2",
  "key37": "4ohn38hxjocqAh7HXtVCuW1GRhPQN5VgSy9eS87okGN4ZDf47AcaBLtAxSxCmv4AzmUzH5sY38ibbVwkNELFCXwL",
  "key38": "39JxZ7WPuPHbkRiJ7eiHmLmuCUNtf1uqD6B4noQeBACep7FuAP2E2uDCRF1aGE1FSuj2jcH6kcAJ5CyLBKss8j7N",
  "key39": "2KARt677Y3RVTgW6Gw7Z3My317dCLpcB2jDDNv5VGf7ZW5L5B9qwhM6RUfVefWKrroAwpK5st8PLAEF4P2XTEUmv",
  "key40": "5XhwerHvkrwedwJsnuaWyH2Kxj2Y1ypCQMgWRuYFcim46txpa5nPaFtNgJKqMWVCirp8WbhK22c5L4uT3KegP5RW",
  "key41": "3mLJcYMShDU38d18L8GVtQnXbNxiAQRZjhcJguQV95dXk3Pe3zmH1WZfRq14hdRjpHRk4hiq56JLiQqtaysMg6yq",
  "key42": "4KQv6tN6rJiA3tWsk5JqRTa9ka3ZcmJ4Z1RupotrCziX818xUtKn5M41V5rSgjJgEJBep8o1Qasu6CR9vLQVfpCX",
  "key43": "3VozVdfkGxKSy2ewyg8q75NhgUiqyuJ7Fw2E9aKNrQfM9ERyU7cVaudGCpm3dB6sM71PZJMb3y5AVzRjfgQMMkma",
  "key44": "5mSMbFKSdiuMnz3Ji1kKHZNpavEets57hELNh2ygfEXuVNJhLKoLAE33EJGuQ2ihNX4MyS2VJjzvABKDyaHpB1hq",
  "key45": "3EaoVAA4bN6bw9R3CyGVNifSa7csjYJE9JvRDEEQmW7dbA5abMk5taxqQCX2Zcn1PzPQ2hwCjbbf8cXQPLN8mAxR"
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
