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
    "2J7P3mpLAm8bUXg4CmXEMTZeSuM5GjQ94kCVrmySynMZavMMuM8ddt4VbuaMqsL1sA4giZnAi3ETdneKtDBHnT28"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZW3jm1kFe5yZWHwJ3wtKbj7KaDE4V7icnUzH3c9UpqJUr5ANxvfN4DgcM12BJYJyfh1S2G27n5U2z8aggPkoSH4",
  "key1": "43bdA8XECTNLTodrC9jNwr2uRxqTjKdjzMcXu9CNxGin4FwMrLp1sF5tjpp7NhGE4ktPzjizxjgMTEQLuenkGPYg",
  "key2": "3zUcn6joDSqxY6HruPhDv8QMLrPTzfdGokVFpnjqaLjo4uxvTy1LRaAFmyPn8SgNXUinAcVDRBnsfiYN4KrNu2bj",
  "key3": "3hkUEZomn26uUa66Q7XD3P324m9zq5idEjCwvSD9GuB7zF6u2J8oSRovZFJRXTnT4676SRc1zqog8Ws9WjxvPNw8",
  "key4": "5GoSwy5JQFovJPmp6gNogz2BbY2h4YBurkmVZvenJdN4Laqqy7dE2VfnNcmbNbqQLMJkSef5YuPE7Muty8fVz9B9",
  "key5": "kZHAsWWcCHSE6xdvwdPh9rfANnL5aT7uLBhMThmeECVtXEuBJkGXfe8LQuqknAkQ8WiYNFP55wAhboy9hJr9G3T",
  "key6": "vCa1hsH22eJSyrB8X67cAcxiYqh9ypJFynsgYVoEU6kCD53qbdiPQ4nXqH4VjZJQJErfkBXmDwuuu9V2E2L9tM9",
  "key7": "2y7M5UGmcJzDsSvKwJDu2YdND8QiY4NZZ7htGw548tTK46qPEwZEhTSEdc2HQq1AWPoncto9GnJsPUX5r19uEDkx",
  "key8": "4gBpSQXkE35H4r2hK82guxVMJUxyfrL46kzZHpHDuBUvYHZ2FztZjkREABgnF1XYPr2mVKTHoFY4dzhCjURa7jnz",
  "key9": "n8dngc9PaCACw75txMMd9oDr4AyjN92TdQhaupTkoWrZAsyhB7q9VNMAEHt3y1pKPHN8NQSwWCXmduv4kjWZUzu",
  "key10": "61HbtNr3edaL31o4T4LV7K5CpxWvG8SrM6bi6uGhooLH92kUbHNCK1hgbRAQwqWFVCuhGqYPkAENBjnN97GUhKz",
  "key11": "3HLZNLtYqEx8bP75sm4Lf9C2YCe6eqjN37899p5Zw9KGjjK8PdhUg9kyna2phrVjBHqW3gVeSVmFwwvPSg217uYJ",
  "key12": "4L1a7R2879JMCiLDy3hfJV1GjKsJXjMXqk3F9uENvsdBUozfzjtyiwgxPRVwqq6uQWQ2fRNda8gGC318RqsTnJUs",
  "key13": "grXDxaePx2zfoNW8pJUUg7JBS4Gg3yxHa7mS7Bm9uKebuYQk4gTQm9zjVAfm19Vvwu6j3HGV7kzGd2LNj6x1amu",
  "key14": "32gakZMSVhN23o7m5Lh5cUCRRxfeM8q5d6kfDEEEU1DrbY421gfDkH8kfAnxZgkiobzbT8wxCQGFBrTaBJYA1WVd",
  "key15": "6b61uhXeXkarXcanad68XBQeXtuYonrJbbMzJaF8HLe9Ypx4ga3spQChhvJTuSh73aGETtyjeSrFddxXRvQSoRa",
  "key16": "4EAkZmuZ8ESaRSrtThKMRUbVb1iphY714dKsj6GnRG3Y8XJjhZR5VbHgPHsxmUHxfgeB8rPqTvLW4ksm8QJVqmLi",
  "key17": "FLiJu8iWv1qHoAYGcS6N1bo6DqQhZe2rWyB8EmaZK9NWBvEVoZnscKH3mQLfuDfJouGvjRjHPn8w73e5SBp67Bu",
  "key18": "5LcXGRWvuR8dUpavJ49GotHZSjsexFfqa8gitR3z8bCAEJD9DJEFh7DSik3DomnAFfYNyVnnygtSVncCsPNbCFUt",
  "key19": "4RRqYr5WzqiKBW31tBme5sbLDSkGGAgZmM5HDkPFAKZQomyrCEStcFLBsu8G4TUbM3GNw6NUGWNPEWeNLUc3Aies",
  "key20": "w4rWZLsWiqpk8VtKiLo3xkSHzsss6ajfJsvsrEhC9ePBj2RV4w2WwKRnFqvR5squyeTag1fAkp5x1z9pWMhzii3",
  "key21": "3UDqLekdsgYtdJhWUn6fdguK27rPQrpfYU43tMt9SfcBYydfcJVzLaEww2kzyHnsRwkn2zWe76BfdR9FK5frQfpZ",
  "key22": "4CFr2nvHQZKWN2CaP5Rg5KYXCvd94t87qNai1osMWakzq55eBvqF4PC9iEvQ9s4nwYn27UoFCMsRb1JTfratBB8g",
  "key23": "3aXHLKbC73K4kjW52iuWTdGCkHbUFyHX7wXEcLhSPzTfvBpjYVg9ngniex8VvsAuYM9iukFDnFao3uTeraeVi5K2",
  "key24": "5SxihiXAdrkEejAFhJyAiyi1PYacXaneyp9fJpmqTSRFeE5hy78Xnt2N83YNSoWfQ1VyjPCr5shEpkZN5pQTE3S8",
  "key25": "4dr8hnTC31eHiWtjgP6Ywj7x7Nu4UxW6oGLTBWxnmtK8rf9aok1NbtegGuLywZiReHp5v9Z3GGAL9woZPJBfSuPA",
  "key26": "5QYqBbuixsH511kTy4p2Joxiqc5H2XhK4MJUQ3wVsMCt9mNVumjf3uchFrRfMm9zprWSrtingUfJ8Pk2FvhAYY3G",
  "key27": "211K437Kp7tuQaLRZUZXnfPV3wPWn9pm9QYg2AnqGVLgd8cheSuPzqGCNEJ67u1H1z5P2ueuKWv3zvDqiWdQAqZx",
  "key28": "5YNYqh2TgH4cVPX3e8fubLYLEb6gNvRGDqB8hJG61ejVqPTQCXnRTHnVVfoZvQmEXYkbUBdxHDHgx8yK2hsTR4X9",
  "key29": "35t3hWSxJ2ecrUhLHWCUQvWgio6WiFg27Te6e9iormn4BAbyBrsm4c25fTDJ5i3fu4ZPzXHxrRXeZd1qof8XdbvT",
  "key30": "G3oeS2URYEXk13wtYGPXePCUdRDQsReNuFShDqweLrbWf8NCWQywQU1pFKLFqu9tvQEpSiLheVFUGdqt1CshWCg",
  "key31": "5hziLFHdnJZJfrP7hNsiUoKRMvEVc59GtVW3aFuHC4fQmUfS1weTNx2Ja3XqGSAzWzPVtCieKYVcXTsTakY65L3L",
  "key32": "5wzHivm15JmTCpS31yevwjPRybFhELo2LdVcyoFYYScYLGgoXuFtt8wJT9gfqVbcF9YiENpUjd4vcwDzEZwjRePD",
  "key33": "2u2Qn2ZFQj2AFEvNjxEmvDWyp2yWLzCpYnbGGmoq7uGqgm9j6NiDrzSHpYitSoo7BCrF8SsVupsBFrDVnxG8eksG",
  "key34": "5u2uE1qf75iUjiWBFMGfq8bQh1pNgdZzVUuqJP6uYD3ZVgvVMFapAGDhD54PRJkFmFtqbRLNKDLB7y2BassRLXXh",
  "key35": "3ZZQskRt2isi8v5e814R9i2TN61yJwQkdfVxhDqGiXJt9dKGbihPKQcPgZAxYFqm61gTopEJNHNQmjk9YGqmkMjx",
  "key36": "5J4GHFn1PaUEEjL21LqWYTecc9yDpbRnTSG1PAWxv5ahCimeLVUszen7QJyxVJvCtyLRsAJhmQmnY5w5bqYDEV3a",
  "key37": "46t7cBAkWsawLNRzvjAWx1GJ9w82ZkugD6jt479AxRBDStZ6Ga4hR6Eir9rpFHddm2F6rup2EsJXmbuNQKkh1gzs",
  "key38": "3WFTiXoFa5PTvKVh6UTtsj16ULXi1XeM5C2Sgm3X1TKaDbWYSSyuKyrNp7rdv2YWr9nusUaPVsw1BhBX8CsKFj2c",
  "key39": "4z8S9D3Ju83wSM4LQX91WhmeC74G11T9AE5xNQJkWhSo8Jp1u3zjkeAEgwu781esUidpMfSwJWsBnmrPmANhMuKS",
  "key40": "44xLCTR6aTMaZQn1GYQiKRyo97n5YoH2SAgdMbjqnuTxwujsWjZUEnhonFYLV198gv1fiTda6BZSRdchqaEXoinV",
  "key41": "jy9BCa8ajarU5hVk6WPZ842ARuo6ZcMRCj8aRK4j3kX6vuE3fUiSFK2bgGh9dUqARg3gqVsTc95VavJVuMoP6hN",
  "key42": "2Qo3vcjDfAeLsow5DQNfGBL57YVSPtsGsnx6KpJhsBhHvMRPUK2G9hRfc1ig2XqwdwtempytEWpt6xjRxqwWtCCk",
  "key43": "3biFrT1pQCAcoVrgZhJExBCp28zQ4gQbzJBD25mG4sEwz5KE1vQiWfnFhgpKphUWtcC2eJLbV4R3NNQfxR4Xoh2N",
  "key44": "5BMU2Zfj84fJd78ZEd8KCjXvVJpaRRVHouwtMP7KVDyyoa7TDNyKr1FFmhtCtU8oqffsx61XP9by3KuGs4T2pbPA",
  "key45": "3WaV3jqGJtqHDqGaNWcPPgdDRDRqPjnQHv9CjrF7SCmAYa5Q1BcUXr6FbaQyFjEZJJZgbGUU2hY5CxqNeBcGTpzM",
  "key46": "59ajZMEojdvJTb7Lb3aSskMc9XQSsQdzZUJrLxRoEnia3vqJLTWuibrBFcBQvTcAXoL35xHqogAEBVfhzGBCx5eP"
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
