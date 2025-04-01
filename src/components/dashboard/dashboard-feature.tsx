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
    "5ohTsNgyN4KFYA51e3XEZad72muZD1bRAHjfgDTViCPT1csRJHQ77DMtYR2BP1WiMFn6CP52LZZCawvWE9DhvZ5Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q5A8pPAy233use81bPwTTYqGNKn2ucgNZCwKRVfZ1XUiM1wfV3bV4mPbXwAv4vCqNjMHL3GzW2q2acebwjXWYfd",
  "key1": "4yH6moAN87T2W1ZpTyFb22GDBsQvhXxVFD1wLhvDnGtinmdvegsZMfqAVP3dxC2oqj4NMGajj4Ckd6x9tRdcKaHb",
  "key2": "31BP2frgP3MED6Aa83ANWZwtJEQ74tt24PJYENZ52xVcp3PFsuNH1XFbHwuSygja2Qoh1xuYZZjSPu3iVuBWM3Rf",
  "key3": "2hromf5fynZSDaParwJjfQyQgKH6SatZEHht8WiqH3t4y3UTusaPBcuvFZqFRsNcFWKGEapc5xrqCJYSdwM1PoJj",
  "key4": "5jjRFPEQodxhFnYM8NxwMyFby5DXcccGgDNgihqgqWJh97BZX5M2NnUkqXFjyCDdRt9Eo5CKcT5NN2gAkTXRiPyQ",
  "key5": "bxzyGPcibctzZkqsJYmDc3z65Z6e7HDPivjp1ft4a16qJdKzJNFMrkAwdp5vpHvhwj1NB1EtwnjgB56zmN5x5nm",
  "key6": "e9KmwwZTkAQV7y2XkWn244xooNeCwx31y8opVMLLHSuhWbAhgxVrzg4EAjTs5vUERB9mCETVyxL3JecPbhHqrpV",
  "key7": "37Yced9XHpQ5vN3cfqUqqyau4tq69qCLUm1vku52EnLik66CuteywQ8s2pP8AWy6PWDUwmjykfSGe8QgYk85nRRT",
  "key8": "4q65wpMbApmTG1KEQqo1dieNwuaHvsibNn6a7HH6n1PtFa7Cx5WGmanPfNETWDSaNrN8EGbTjKqmrYv9Y49dGBHp",
  "key9": "4przRgvHEvRVpd9NKbXY9TpnDRF6B8ynfWEjLERxLen7Zkx1873Ehxp3sSCfVjMt2s6S7qrd9d8KehuCvPoxVWVu",
  "key10": "4gGx3A4zzhtSkWVZGH7K7H7qANAhHFjxpW4ykLn2nTyvmpVZFqQtyGJajxqWDJxwjJ8ry8gm7oEkAdMRuuXquozr",
  "key11": "2fBeGnQnQebwaTJptRPGcUKA4PYWgeiuAs57WV423RVBtPf96FYRoVupF552bWzh6DvuMrppzaWA4Zq5ZynxJgnL",
  "key12": "5M9iv8Uj3jUAMHWJriQvMMD9bSDy8pTY82bjReiWM2eeoyqcBJoMjBfgCvyhGNX7oEtaJ98gYBZuENQCaph9DKK5",
  "key13": "4LrRsg3ncjFkiU3em2jdFrh6N8aWobT2x9F7GFdcaifSHgvkathS1rkkujtsfzqnjgGWK4rLrQCqKb2qzcktVpFB",
  "key14": "3YXEJ67LFUC5rXpsBVgb8VQNySdo3PfP3nv9acTKyUR9HUFhE13yMPLW4zw2j2xuxmP9YdjdumpjGeEqTMX8wfi4",
  "key15": "5LJA18PgTrAg48rXjLKveJhYBGFqUTRswtbkSdhLjXsLQFQm9wdVWQKW7nGc657gJSg2NF92pjtgiKCPQpk6hcCX",
  "key16": "2PAdEfCixdUPTDcx12hDior5cwWmYP8HM1FXCXFmaxE9MSpbRxEgokMjjjZ96mxbBWiwmz9uwbjUy5rrVDd3P7cT",
  "key17": "2h832ygH8fFPvtKaTLJgKg6FhKvUxXthdCxGSiAbw7mEDT5CJvuSatVrejwkZvST5378ScnfBtWPUUxDiS3r1Go5",
  "key18": "3U9hxzxSLxoRs93oZRrEqPvzAAsBKZVtBKeBkRkWSRu7uXnMjow2n7grwkgr372iHs3x7mu6TDHEMXPQJ4Vxt1MR",
  "key19": "3kdvvnDJvKJ8mFrhZfHt4AaFhv56DK6RU5j7F9nzYZxfsKKFsTwXWFoYANdqfkskQBxfwepf6FbFB6oaaX5cuRoJ",
  "key20": "39RWrRCwnCA6XsQ36haxfdcdLGUXPLCbZFTyiCXue8Nr2WSrcqakV81cYH1ARhKkUeqitRttTWX1i9y9Zna5WnCj",
  "key21": "52NLFiMhUZoU27W3xrXpeYHC4ARKUMtEh7DLbrFTg37E7AhhozxyJoYfH9vWDthVNFdaCyRzHS8UgPf9JG3a5p8m",
  "key22": "3PjjokZWwUH49djrHC3VAejSiyQg3UwZaTvwtfmEUNv6VjqwtWNcTv4NbD4vCWNEXjfAuz2HEsguAymQ4hcqAKbQ",
  "key23": "2srdjrzSTzY7diz5ATewwBthmG2kygx3U2hphqk3ypQJLXHYrwqpkVA1gaPAAQJgM3cg39kQ5as7GXJYCWX7xwAu",
  "key24": "5L2RSuiwksKBtG6JXsFYrYr6FjNxmz94xrP2U5r1moaKALB5KPoW9QPxehsRMgddaeENw6Edf6NU92NHu5o3B88R",
  "key25": "2kwL2uKYQ31qFZoqGbr3pN9gX3TuCxvCDS4FoZgdCcjDzBZYyLgvmDpnu4Qwh1LYfJo1zzwMdAv3y38hYnf49X4x",
  "key26": "2VYDvyDdZJuve3Wxse2NKTpPo77giHF9VP3xCZGg6nQEZbj7sFGUKFc5js1p9yMG3TPkVkbPHnnUApm2n7g3d6T1",
  "key27": "4pqEh1voSJ6U7v6Thy2idEeS6KrzUF1M59FcN3miCQyhvgZpzy4bEMDcexeFyRboF3thGS68V5B2Luc86Ang8xa5",
  "key28": "3xA91HihDxqDhwQ6gWD53CUbzMKdtBD6Z9ku6unEXMhyZYJJi56HvSjxzazEGkbFeZqaRez95cwLoT5uJPzDCpUw",
  "key29": "66yURApczG3yJNgzpeunDtPeSWxe2QzHUr3rY5qqdXBDp5XDxzhLNi3AwYeP1asSfxFe8Nsn5Fwkje9Qrdy6Xqsh",
  "key30": "5qgBRWpa9nJSnaiN8XTeW3mKjhvoq5Cr332NPsiN75UwhrXuFYtnkxuGuztFGw2EPdbzJ3GSnmCCJgjAgrrAvUnT",
  "key31": "4kD6zFfEcPyFL3XaMurNtUucU9hMqznGC9crgTNPYWRbqATqqiTHRaByaMp7fetAUwQDb76qj3uk9usyxSWhfoP7",
  "key32": "5BzY7HC4J9iTFaa39VTQs1CqkgyDajVEub5mNdMqAF82znUvbt9NJZaAhsrBNnRHAyLm8D6ySAwiayFHxb8o48nz",
  "key33": "5UECkmQk9Tu4MadZuXnnyKhtfhLQVaBx6m3ztiHpp578Wh5yDXdZPerzvJawMimAbBXpLbm2roRg4LBdFvhyzSK5"
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
