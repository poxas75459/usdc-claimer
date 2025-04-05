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
    "4zgLXkn18SZsuGhxrK5rKWBKkdtsUX6V6YgNQrz1P72GyYhKyozgPYbzXiKrCbrszqgWa6gcFkEQH828uZssofdv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ajtjb24qJc7L6tcr8gJKrPcEc8j8gv6FgpTtQF2HqeiM3mFFxeEbS3NSETnM45uPuBhowghnq2DyusdWoC2NJoX",
  "key1": "cEDsGLSsWySXc1FXgZFrpEFEbfFzqdyYVEnTCssLFzZHkK6PoXjS5HUMisTeT3Lyo1KAdum79RysnCtW1aHjsPM",
  "key2": "3E79Uy5ca24GMzPNScCLTUR5zmJsHM5qmQ1qNASBBzXYSrGkRhcWgJ9HTwVbt6XnBJVXUhhFotoWRifc5CNgJDKy",
  "key3": "5q1dvhQwzHH11qH9kM3QkdehKpPzfMAi4iS7dTGE3UHKmJBn9FGaUhxGoPvMiUuPWJrSNmgar5QTG9ivpR6D82s3",
  "key4": "3dmpd5QSSbZPD97aBtt8y9u6WKA5xch5tx2WJhhHwaZKK65iwEUwvJya5LaqEJT8tDSYNtiRQ1UQE5UfEBnnKR21",
  "key5": "3ny8HAiJ4UzfcozcSubQ6zDPFZdwG7VTtWEkuoqfaeM4c561QH3VzQNrhitnw4T8Z71CEGiQWpD4jwJx6QvoEn5k",
  "key6": "5Gtv9LCLiSTXp9xEXiATHDZ7acrGdSWT3Qjhxf8DQAiazSiGZEMBAWMXUm2R4attQVrMZ6Z7fonMpDx8wxkrP4ew",
  "key7": "2o4hRnKH6ufMaudkuuJbLFw7F5CeHzcPrvhohFUixCtr6xmktLwyRNtjSuGKpZDmKvMdFb5fTP9SWYDANa3TADra",
  "key8": "8NG7peAbnS73GT8yfewr3ifBsCRfa4kzBv6raLFv2bqakoDpi1iPnU8mcHwaH9MfyMifZbKqD1X9obsY7Eaygih",
  "key9": "3hBGxQQbcqdrUZtUicniaEY56vvaTQJ4R9fEwWhEP7BsucBjV9gG6ABk3a6r9jbQkEeWFLpvdNKXvudwtjAMuXjq",
  "key10": "62pXjvdoAh6g2Fthe5DNw7xkuBidLWr56b2k876Fq1SGPTXVcny9nbwoMs26ZtieMo1Tz4iSaJQLmgJn3QC2egma",
  "key11": "36rch3qaye1gSrSA7gVcHb4FXGgNoALBvrTwxLX6PBAxbfwRV2EbBvqdZ6HTLaxs5kqUDtmh8pGsj2n1ZJi52fwo",
  "key12": "Lpmeivwtb2hPGEJ8otbySRjoAdkEgNqjNXFdrJHgGWCHSK8DNLZADTRPRMuitdem1R8b1sZLGxPjcjwWgxGwLkw",
  "key13": "2pnhtzXVakHcisQ2oSPJ8QDUpAdHXohhhidXUjtgFVkEhFjJgJqPpEqXEzjqGzhqgjTpsUfPKKBKzMrUyprc36QN",
  "key14": "62riwbjZBi78YSqrCD5PVp7HvSpqWNjYLTomCmp65uCdaGQ9k7jcCK7UgVbaRL9kAvt6Tbwr5EvLzi7b7VwrbKio",
  "key15": "3DKV8XT8DUKfwosh5HgVbeomzoZ2mBzFrCNKPLXZc3zozHvPvFhUvxAscJxVNtLLRSwuPJSiQ1FHRVTQqKuorxoB",
  "key16": "2eSkcd3nM6SrcfMgBcn37YQvGto1BdX13N4r5hVAjVs4rZGCnWBo3WxLYbzBkDGA1foEeonyTMouGTZK5a7RF6ut",
  "key17": "21Q4xyVctrqSyM8QgkMx2RafKDU8PwpF9yKWSzne7q2BYz6WiWYX2xpDTmcw7fiSaGWdgA6N1jUz66rtKUrqMEiX",
  "key18": "3ESLU4XQf24YBb3otxEykmtVAZoWSESucGXu6zTcWXYnK7nf8P7EpSgg8LrKJLzx9vD3nd5zU3giubqo7YH1mVmG",
  "key19": "4VxCtP9Xz9cvY188QyctER48aJx8SnHNZRy8afrq9o8SdvDfHN5JHVTRXxRtMPGWyiQe1e4oqzFEr3oqj1NePKvU",
  "key20": "67dZLuhqJMR3J8QhYRYhCBT9gVP67VVh2iNLmyQEeshpBmRvS6SfVBSHaQ8tCeCaJFFuYAtCE9WcEwKu6mgop47b",
  "key21": "2FLaxgSP4hjBsdgkyrBCNgFsMyY88k98osXLdNwEUfsNbnHRLtMLj7aLaDFXuMA22uP8BLvU9ZDEtNrmgFAd2MMP",
  "key22": "57LPrVkzQfFnuRRSTTbXEhMs6jwZRmzyFuhorTjC6rDbtL5LGaiMU8gnzigrsYegHnmaW195hm9wqnh1mv6sTiRX",
  "key23": "42FVwRBao1Y1QuuW9t6eAStVG7ueEziEpVzH6XdwxzYg2zEz9t6aHVZ5CLGmYjN65QcWb1gwmb11et1dydXkULBP",
  "key24": "39JW2YjV9jqpA7vPZ2K6mMghcnsMSnHnp8KKAftd27q3pbc7ZifjbcAzryHRTkK1CfnwS3BeUP2rRzHjeGXUz5Vo",
  "key25": "2RZ2Ec6ChEotE7V76AeQu7w7dCXDJCusBzRnZxiJWd4ZMDnDfWTdbn2cbHiJRygCatEumaaHYNq4gFf4rSoMKWhP",
  "key26": "2zKxCTi8KBWi2JpNwnVMKjVN6YEtBQFw3NZBa6wEbxDbTYXvTpEwc3TfGp9b8yeYSA4kB7syn79P1HBXciYv9YBu",
  "key27": "2Kv6AhbzJ5ExNsp6UpLJBL3QksuhyHyTLYpBdgJ23i4959q7AdwTtnspa1z4swjUoQB4gHLvm3iS27Vp8bT8c6RR",
  "key28": "4E9DbZdN2cbs1xDtDmjYC1mRCAY42d2gVGdGnnuvnppFmvsoP79HqEJW2f1ynqvgBqMu7Fb73WxcrGxqaZjsWKsr",
  "key29": "2AZPStNBw29DR9RKPu5s4TDHhRQXjiw95zTqKTX1cxRdeLeHo3vNZX2VdduK97numVtXfJXyVhJaSRm2dcq78nDv",
  "key30": "2jDz6xU37qiUjXmZCz9YfbYLPhwwZbJXyVBWeiMTR6h5fFucN98vXwbHHg4sTV4NHQFwCt6AyK4bkS24KbubUZXz",
  "key31": "5qjgmyvdy6AoZ4cR5yyULh1JJCTaduhSf1G7SXxSh9QQAN9SonrLM199W4Lf1Fjrn5kvPfsDozzXpExjM3jyYwDP",
  "key32": "4R5BuHN7Pn1p2PUjmvto8KHPfDvQghiXms67fdQDBZNMUi8dm8as7c39GsLnFBr5SKybQjrmL6iRjhEVCfoyLuJg",
  "key33": "47aM1UUo6XLgSLsWwRy3akKTkBtKcVFyjvMJLwqdy9KBgtcS382hxvfpp6ramFEX6goenRvQUiNNJiLZErHUndVX",
  "key34": "4thtdCaUhJYVjUXGXiqU1vFzY5QJ23kx6EaqZBkSJfQXqCqcEmf1z8ApGesHXjTedUQjJss3BK2tjTemHC1YuSLe",
  "key35": "5PGD3XgVhaYJjHGP4DZMhmQ8HHvqV5qQuNZqsJ2jSNU2PxHaE5bRhmh7SVQA1oiGoFgQAtpaASuWKQ4frxXSRSxf",
  "key36": "5dnJGKXchtsq5uhhsGcdMVTVfjo5iDDX9aDxtBQ5e8po1C6Wj3ngzq8MkUqxXrAmP54SFRsKTCMsve5hofTkY7xC",
  "key37": "DD5ojZZBu4HwTgztc6WfYA9BbNWNWsakhMr2akAK9Hw6grDyPGGFrq5HU1vFVYqmpvATUANuL4UicXYqikEU8Gw",
  "key38": "65vGmPB5wafja5pvPpoLehNzdHRqUzKNbJBXfuvdHnXsMyZsa5zjCMrbbjuoRx8AKYaYE1QfdkEEuqcMTBUrno9E",
  "key39": "E1yyGQqXBWq9FGLW7GgBAwwFzjuh9Rt9ijJBWNEyH4g2FtpUWdbo8WXprprP2m2dURkT853SvwSuerNX5EFF2fb",
  "key40": "5Gzx8tCAonLs6EFRieHwyXoqginM7P59MVM2LugUZFr4bQWSCYG6mWYHmkHDKEXdU5mqYjmhm9GJszDZgFUXpNYk",
  "key41": "qyNmW6LqBTZ23Zw97CsaL11x9P11g8jyaidpVfqajk6FCdEtBMg2xbhewNtoYn8ywmvJc4YZZfku3YSxR4pCznM",
  "key42": "2UY6sPyioVpr2tSv4R5LULP26w1ggiCQDpgnQbnpMgzAT1jGJdAXXumKNwSPc2Uqcfe9VJZE1ienA5zyLQchqhsw",
  "key43": "YjoYNtFFquz8iKwsDgwWNiFvz7j1ZqvqRAyffrZFwMiQHm5mo2TtBgEuZCJDk8ixDjtftZ8BAugJtNBVkrtxd7z",
  "key44": "4wbRWWa9Gfxg99AvFNJKCtUDkPKyrBtY46rbrynsUiugzXecXuFsNstdCek2d7x6cGXmifAsx7Ucm1GPuysGAjbS",
  "key45": "3ivqYFn5kaK4HAWQ1xX7KH5VDRpaji6U4uRrUn6Yqc7CgQTBV28Nj6TkT79DrtUAA5aigMWxzgBhUWofKemZm42y",
  "key46": "3ERYgqnr7CtoTHzZWDicpGWjadnFTuZygRbPLY3Rj6q61tFfByiP2HCLjFr64wSpybG525t5ePRaePdCpxeL5D3Y",
  "key47": "5CVnYXDmFHYhy7cM2dLLcNcmt4fKDpGfFtEdVnfzdBMmVDMVv7PireGqanPQpCQz9sNx6rPY3nZ7W6Pez1z6qN8u"
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
