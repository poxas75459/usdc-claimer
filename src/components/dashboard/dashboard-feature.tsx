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
    "WtPgkeXd8Ebkt8KuwrDELJ4z2YQ17UiYqPXVSEfmc1ARCDv3BkLV4RmNbH88BSHHzUJ6KhnC1S2oK6ZPxDLedp1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Z3BpiNdGgMnnxbwiseNCD1K8iGAnFvYEu5XfVHidmECVfDQmYgn8E3La72HerZbzL9M6iY6CdbR8CAeB8vW1nB6",
  "key1": "5jD7U83wLtRWpiNRXTpFx1vVzWjX6GkkfGhPPksWPk3LEpJjs3x1VevBuDUEc6Hs962XRiiRyCRR4XV4xVime15",
  "key2": "5C4kJeqEWkhVPeafoxQRPEr4pYNpBJnfyn67iLV5bqmUvLGyv22m5SNosAeHHsRzcNBL1DQVUNfMYhAdCyoFvx5M",
  "key3": "5fjV8GyPvpMrqKTE6oXzVM7e1bAW12seqoA31Fc9G5YgBnmevonXyhJEW33z3ufhEFu6kg8LxZv3NiwFUEKgBYtC",
  "key4": "5p7N1gt14fv42qTN8vUfPCfoZ2a7SXyGK2aZDT6ukC6ivUYJfUjHQqs2DL9Q14d51PpT9SYBEtHNWsZPisqCWcFY",
  "key5": "3XH2GvpPdooiVaW1U4QqCpHHRFKq9Hj9rWcK5efTdZfEbY33kxToM2YhETmbKnYt6DW3AG7ChhdihqHeNNdHTHXq",
  "key6": "2SberNvbrz8jQykGDFtiPUL1XXHJCtzwx5WTJ8njzDEdBQCKQwTD4VN3znJqPVQJcru1RBXSWe9JfUJaGT9GnLMC",
  "key7": "5cAiY4Ww8MikeumhXHiuxnkzvQLMrjU9uAQmMjbRALYPTVnwB9dBUz2JBSiKPxfhXYQ1nrnpQD8fptWhCfK8eWvC",
  "key8": "37y6ZnzJUQQpowTyQ3QpEwZiFaxZAVnMWE2tz1UxBbkgN5DXYeoshWpaPZ2inJaFp2EpJTLa2KH66iDmk23s5eJk",
  "key9": "3F7GetAB7BHCRVVHGQMKo4sANtYoydZguagdjjDs1jmrkKS7Vwg8o975o7e4AQfxWB9zekn7cNnABn5oaPjbcto7",
  "key10": "44Y1D4rjWscyeokvAaq4QBEpcQhDpwJE8sScH8oatzaVKMCaWoBJx52ukMPQwmJ5WqdUti6iiiW5a6T4ohu5iY87",
  "key11": "4KzuLxGgxXxvT93cyXAJZkwrk8UfMiG79GjjBvZr5LCR4xybm6yskSnUCmHxHftsNmfTvmMrNV8SZJMekJziTHCx",
  "key12": "58DNc52yyth5DbcSi5xx4KXMsJt52VwEaeoxL6P6kQK97F7NZCH69vkc9LLY2sh76wR43Zit2uYWnLvERVrFw8kt",
  "key13": "SzXHwSzp6sDrfc5GW5HQMZFVPMg13aDRTCpYaNWgg7evKqx7vUTZgFKmpfaURZshZtAu9fjSrQwnNPfUKKFmMHf",
  "key14": "2gVqLn6yE2qtD8msm8XuGYHYWXXkRu69LDoDnacGJFVrAb5WWQerkHMNqCktQCyncAaV56eeHMRA3BqRx8cwCDvE",
  "key15": "53SEmm138mXuo99FDov9kayGPoatN1LgyZEianTpRzbpkh6bE74KwWH9x3UeQwk8mTUc2GvnDwegnuZ7PuA98tj3",
  "key16": "5xL83WjdPgu1tSAohh5nkxtX2HDEfVt4weEt6ZK4fSJDAbXYfXmcPkYZeDXLvsK7czeooWvLsMKWcRCKqWKoHsi6",
  "key17": "5nFbRezLi7irE6SAdpA7cGgvAi243CxmNbWWVEeNYUfNRaeMNktZC6qb5FsNiDJqwqGHrRwPU7L66okRJFMHkoHb",
  "key18": "3E85txYrsWNHNVLmpN5jaye7kJWDSfhUsZJMfoUZXwr3XiNia4sJEE96r2HRu6ve4LvkkCt9K1gP8rCuhQaybshv",
  "key19": "5Lo8HYnmXXyS8TXUsV188nGf6fTy47KgvGoxU3FiYXXwdd4jq5GeBTtV2eEAXrkdqSvvZCMQcXcY8F8q3BaPAdDo",
  "key20": "4SnWYmkxfs3TUoUSYwBV1GE8XJFPR7qoyCJ4KNWU7rT2KQNogtxRFaY3epg4mF3DDb38WUSf32RgPX6KUbPoQDGr",
  "key21": "vL3sBSYcKa2dvBVJ7rWR3bRMw9Z5bPjBWQDcHymSuG4PC71LiTqFEusotaxRysNUFLDLPA8meAhb4dE4dvRqu7R",
  "key22": "3mrMWggBMDbgExkuipbwgeJ1ym3aGWdnemifwcqzBsVjYEpGEzTUHmLYmVVgcwkMrDM2fMFgBynKeSz28M3SRz27",
  "key23": "5kquWtg5EUNBfu6k7j5tuKXCaUhsSn5ZVDqmXeAihx5gr6gVzwbCQDnQJosQ4vfBLSac6Jfc5278AeoG2tzwwa7u",
  "key24": "xFDcN4PGvLGQqKn8rheuWpg93Bth72vzjZcdLRaX2hWiBrYM4ANJKrKvGLrvg8gdvFpnq6TqMpsT59eDsftGFWh",
  "key25": "32gQMU5kTKxj7wWS73977YVZdV6kXe5EGChWKEduKH7u2XyUvw4h1b6xeCRqw71ru5kRJeJbR92MSeQSXbeatCyP",
  "key26": "5MAPHuUVZ2gYSaiyGSVz3T1mbYGvLcKTjfxZaBUeCfbtyZMxi9uHby9qXSk6b6DTk3HJrtaPU1ZuD15FonNEstuM",
  "key27": "pW8girvD9D4CVeQMYpe9KBQGHAuLv4hTzJCJSCcWPu2gyt4tAmMagqftCG96GQv13PYb7GQib4etWbox4HEYHDL",
  "key28": "cHU1hdN32cstjNE4Z34bRvkZdJLLmFcH3gc57ehMqnRb664EPaadQCz6s2E8nYJE165rp9zAmEybeyDJ2xYdYsA",
  "key29": "5Mb5XtQYmwKhWAXgUyWgVaXfxh22ftMdDCii2mvEfdzS5wF3pbgRq8ySHTdfEPzhY1XVZv4QCrgdswQ8oYCT7K2P",
  "key30": "5xRbguT9Racxm5hActx1ZgxA3wXopUXuZC3WWjipVWxaTDtRcHkRKnmojDSKZFFDsjZn6cKnBDTTEe74f8oCNEhc",
  "key31": "22g6NJ16TUd2yQbez3TAuFCnRvr8JoXK3XKQCYKsX8YZX8VT1pNcPtuMLbjYtiDZiYXyt23jYuDzTWtjefG2tMSa",
  "key32": "3y4ncR49KcCexcWEUmTWRS8ULcf3mYGAgAMZWDR18aVjdxkSMwepAEZ2vfLykZKfkijNbu9PSVecqCyU6veCW4pu",
  "key33": "5J8NTzWcRM3Je3DPy9iWkkEo3GiJdsmeGHdQgTDLkJHVYqeiEyDQUqUoBkDGCQBg536vh56K1rkaJoxDTtJnaLth",
  "key34": "2RGX6mNnp7zhaFfis97UvjiDD65rSa6mGuLvqdBro3yN7egzXYCC2cXH18L3nyyeDphbZCg2MD8BcxnpRYHmVBHs",
  "key35": "67QFuaTb4Pkpi7FHe8GbpBhtjb7yqnvvjXSzzoFazC1dsipYaENCkCkJgkJ9ECzT3UB76KS65dxBSjW8pmG8h6zB",
  "key36": "WWgy69cV2iQw4UZA6mFWKyEzbAj2cmwTzWVwgbKZVQ35Zv4T6HvoxJGV7U7vuVmehkeFYWPi7HphHPVzZjrcriQ",
  "key37": "21EiVZW2fu3XvQ4pkupNR24cVLhVCYt4uaaD8Ra1oE5WGgrdaa75mag5xPuGCes6t6pN8fUDbvFJ16jRddHq3c7p",
  "key38": "3MFrmAgcKAFF9e6gn3KJD6MB24STmSPhUgJh6CqACFTGp8F9gGUvUsn4FX664fUJpFshUsjCvhpnR3sUQjkv3yXj",
  "key39": "LCtPrKfoHqQuLZoRwNpy8qSqF1BETaNT8s75322N6rSsSEgKUPDJwqBvuTwNXddYJvZSDeYFZbSdatPAkdf3A2g",
  "key40": "4TTtXxQPB9HHhMwPFbfDuW4mio1pDuFHXr5nyRwKA4BextJXmPa6H95xn2ebTfSiaiixXrN11a2QjdBRQ6AYFiNw",
  "key41": "4f44iWojgb4Uc6pWc7bAJnArn6rbeap1m5USYbzQ5Pj2Gfoob8UUGhxnSfDjrzHnVvk2BSCb8KKbKjMxLqPt7oUh",
  "key42": "bZT7geWFiXWZrg4d8oCxLaJahXE3cnYuF6V2Tr27K1bUU9pnfZgLcz1KHMSKrsRFscqSBUEvm2Hb4otq8S1T3kt",
  "key43": "5BujDsTFrTYLS2TFTUXc8YS3HzKs6SL13SHTN7cXWANo26ZwKsSwA7RYMvTNZ8LkLYMEDj7sKBGq2FjWrxCQZtUe",
  "key44": "5L13EdytAUSBiQRHQvEXkh3nAVVgSdp4ipnZXWCfHuUFxHq9ovi6AVN1PyhcrYjNc2L2niBLCX8NRkyhyayaspAd",
  "key45": "3PfjKS65bbMs4vay9sP8KPPvkLy46AJG1189yU4VCuq54AjMHTBjz6gGVQE1yo7vsqKQuiL5RF5dZ89YAe5okXiZ",
  "key46": "2hoZdbuAnZewyHNtsqsmK73EbKAefw2SHZQQPwMEPUB5Wh5sJoHSHKUssViqmvKtZp7oPunmfAEGfYygQaPwe17u",
  "key47": "2UdkSsEMohVyhV1Nh34hTZgkMNVqTuuihp9YVs1UxTcnKH7zeegdNT4P7CuowsCuAcu1wcpVBk13g385hGTgKUy9"
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
