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
    "4sBCBAH9Lg8936FrPEQatPyy61vYT3nofRVd4vtefM1jGfeSycqJVHztoKgADRoF9rrK8AK1o21drFvauY9p4XoT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46Gj6s5rhJ6HuF12jXjFQqn6hKiy4QQZK4nHSmA98FYBBZ95pJmRZ8mjQDu5JXEtqD2AtZrUvuPHBpRaZngUnNTM",
  "key1": "9NgZLEquT55ZURTKVp2mhfto68mSSTGsUTad99bG72s6L2fPGX8G4LUjgCHByoithMSJxnWS9TKFQHtXNMe8Jh1",
  "key2": "4N4f2ojhKnTZvjgn8Aovzoy1RqoDc13LgPSw5nVNUCZoFApJ5MRQHRwbbGTMgh96EBYriGuDuGkwM8w5cik4THif",
  "key3": "T7zijDuJXpDkizhekhHEM5nA4VnUYyi9wWfTJUuBAwQfdvP8vWwy6uwKXotb6Su3hiuqTbmwJvzxEdHX1cP7GuN",
  "key4": "1L6Cwx4gGJ8WnH5pETnSnwNhKPdCMJn1sYiK9bmZUS4W5UsfzPqdR5o1bgDXBm6Pd5Rtd6gwcfKSNRyhJKjiBDn",
  "key5": "2ZYGGfXsYZFitCsezWaYkAdoNogVv1q7kmfz19ED8VG51kYJQwJTqEikbR5xRwCuCFVyY3fbKL8HAtsGqqgCSFUM",
  "key6": "5oz94BbRNxSUJjc7kjgukmDiy9ESwyx4tPkW1Rv8DoXusSZ9Un3rE1DPSWPLMdTUTF4mYvXZ7GrLY3fLpyhRtrkD",
  "key7": "NHe8qktRjXfpBjMpATbM4Z3xQzmdY8H9EyyxARWQzUFjBhQhMdYsyaFwnw4bZ8snFX7UGUbMttmcsZb4Bc7SUJJ",
  "key8": "5zhySNK7vfnjkxjxhD18gDaJbhgMpyKyyBH7euQRGzqqGqmSpmXhob8akEAGFRou7ctdpF8rbwpE4FFVrS34pEaT",
  "key9": "3PRpTvGPo9FpRQD6dBCNpdqwtn6fgP7quZqUBVWKxHUUDgkpaQ5AFGZ4Ym7aiRYvxVqt76gGSHG8E6rin6R5K6YR",
  "key10": "uPPrE2yDG9Rdyp3QDXyFA5ebefpz9ZMyGGka3jXaR1h5LQsiBGQmpLarNGEuPMQFA8TWxszGFNWTznPak2YqZGe",
  "key11": "25hKydLQu3sAMPTqm1KYULiQUWPUPiT2mYhCXpm4R6MP8q62qn3oFzt7pyi56wKebzUhHBACgL4TpNjmn4b2vxCS",
  "key12": "2K5w64QJG1Hi6VbS6ZmUQBb33MGsQQiuK1bHSAVun1u7Ppk6CPzTe37wdaRH9nn9uGeczofJ2oaUbQskLmscjQa3",
  "key13": "4FespVxNtUAxoFZUbfFaX37tfcugtFFmZxcGgTRzebvoMGe9q4oCn5j3tbAze1SFTUHJbWRaTMY46LKfXs1SnnBD",
  "key14": "2xERs4vrMpawZ3BzvxFXRKsZbjm9v5fdFxcGXyYBMYcceAUzN7mdG8Tqb5TQsBojWkG9sAygKXd4hr82TJCbXyMM",
  "key15": "hiaqRXDYJQ9PRNce11w35q6hXLR1u4ujJhmJdFqHs6Nhxvu2FdVndUqPo627hjaGkUS5NB6kHF53kFYz8sFsTsn",
  "key16": "e7wpND6fyiDi3nFtrkssomTyyTtRXmPRLetNFpArXonNjYtVEzhxf4wm3yX4uP79Qie1Va6R1suzksceenrJPRJ",
  "key17": "yie6dgoFHiYtZev9KyW3TYhtj6Wy2LUzYpcuABrs6r4TwAvvAMDkSGaaHTchA7nJ3YhHNzQAWCan9uygdauwzfW",
  "key18": "2kFXnLzEeYqu4U1oN5pCsUgu9Do4TnUVhD7VDKtSupn5MX5wytNso1gjkSHSvMFvMARR9Tf1mwBwiyUg9t8KgkhZ",
  "key19": "3DiFnNhcuPMraRyMfwgruvZfnnaaR5th941qNUnDxaoXJZ2DQF4ykHznzkZCuQk7MqB6zSQUyTsY9iDzEd6ksTEm",
  "key20": "4bYdmVrEg3eZodWCe9DRPddFdHVsZPh1etGBYKQ3WCrSPXP2WTtDVX8NDrxB7bdz6fE1HenCyxhasq4eH7zKckEZ",
  "key21": "yx5QmCfrNGzTdUZsUxG9YJBE1azMa5FWeQb1mkasSiGPp8dser1yzwDUAihWxJ1TMcurFDoAagwh92AMwepb6dw",
  "key22": "5JGfxcz62SwnoPjKz9j9A1Zgn6tHpUeQs1bBDDZBgqyzfVZ1YR27K4fhWek1smJWzDuXtqqENEQeujjhzUyp8KdK",
  "key23": "5DpLvnnQyg3qF4CFfpeYE17zCKx1nvomYu6yLDybx3w8XjCVSkzDbHcVJ7rrSHWeuzXsFsrcxkqYXSUvaX7WXhRd",
  "key24": "5yJTUZK4S83htzA3sRGyRegKMWS7w2av1vsEtBSM5BKeYfXL67gifyPatbAd3MDtKxi4AW5TbgWeYYnGCX8c1NMM",
  "key25": "4uV2n3FE7ep9TV3Hwa1kvtYdFscDK9toLS4ZuDB68TnD3XKSDbgnFayGbP2VUCneYmqXpHiWavWicjFYeUZuAdr8",
  "key26": "4gJ5ZG6XDTdevCKWUxstNuMFnA24gKH5KEK3Tc8r6641BfdTvhEiAJPVgXkHiZwJYuy6XKYWyuwekmDuRmsGUr1q",
  "key27": "3J2yWdWP3ffA6H73Aq3rr3At7R2x2XtSz1E7sgBq4pgoBAm6rbAXtDmLhXyUhWEXN9QTtRaB2rJTKLdadRmW5ash",
  "key28": "4xeKo4VS7XQMYqigKPabKD6wY7XU1socrKGmwEzRL9vPXU5vrGq5HcPxhxMMZjkEDsJ49C1qM5Xxr8fjRoqgAAyt",
  "key29": "3fXWCW6fvAz8dcrNg8JqNZgVSWUbbCBP4qkQqj1y57CpYnGqjhD7LN48NKoyiTGPnVCthqfWb4zbtgd5YuVa83jM",
  "key30": "3ZNZnf6pQfLhPFqYNqVVgo4ojQsgPgvEmMVmfjw3RXLw6ebXd3Yj9fa5jZibJVF5MUEcCGNTkyp62HBPT43pDAVM",
  "key31": "31hezj6P1hg2w3tm1sYvojLd8dx5YqabgXdQpSdnnLW2JK2JdbNaYfkjnnFfAG4sEWRq9jGY4qsKVuXAAtazqKac",
  "key32": "3o3F8c6HSJs83Ji5c4kAVLNM67S7gMLJuB4G3p1Tqfff2EyGtK8mNz2L5nKmkWKv6CAhRtxbZuTFmrysd9uvnt5w",
  "key33": "5ZkiAWeVTGxeeoGa2XztANbZnQ49jVNaaP91uB6yWJ2zgn2FP1PB3yC9mUpbc96xYSVaCZnXV7iA4FMTupag7FTX",
  "key34": "3eSuboHKiMYAzbsBiAqN7KCcfVShvBLojtnL5xQTwTuroY7U6X6bhmqVbjM9VzM75V4tXbALi54JgvooLTAtfyeq",
  "key35": "5AKFMqMX9mNMDyHmJ4xVRXe3pbBMJBeDqxViZ91nLKKN13XbF4t8tsmTe2gby5MtYzN9PLuQMcd7ciNfnoTRCuSp",
  "key36": "2JETBArr2pc3f5FKndMuA6RMuApEn5rCaZxvr2Jo3csnLbD7XyykfTrb2yueFFon2ZrWA7tjug9CsREoU67pj1wN",
  "key37": "94CrZpyysyyD6L9offhGAJ6vzZfDiqMihPagxzj3Pdr6Ly9JqytoCWwx3mgpheuEU227tc99Ar1YuHWecNhKYgx",
  "key38": "bdRGzZH43HPJ2pSkG3Nn6N1WVV44ceRW1oCPHin3B7wg9PALua9rR2kC6XT9KqwHyRPNMDguJJjhAvTriRt89wP",
  "key39": "RRXcTrkb8Fis5pHtqVDDZBzR8bGxzwPo4TXX7oea14RtLGBHoe24bcY3dFBL6Zz52yYm18qpjuQQ7sJVkhwDdGT"
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
