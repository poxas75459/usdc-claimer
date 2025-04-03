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
    "5VBSDZbrmX1QbF4H2zFBTAxthw1zS1CfahKsV6qhkxVUocpzuM8yLDYJdMpfzNVpKtft2dGavi6CiMroA2oKmAep"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vG5aXyK3NoNseqBQap9MySWmLfUYYiJs9N6CiRa8HbUiYEd4GBrzpR9iMPbrkaeNQ4bHiuT92eFjnHfgxw96DVh",
  "key1": "5uzjVdZRpXNPFFuKeXtXFWRZWnbiPSwTZgTDSMwNDMRHUocXem9FMcbobJrsvyPNxAB3YFWnW82u1BRnyboKCRux",
  "key2": "2zWnanrMv4LDbjtyUWH7VCFFB6hUQ9uCjdnT9ebKBu9QYYxaRLrLU2vwFMhv3UxsjaRLFnDaP2mWG1MCshs7Rdp4",
  "key3": "sFs6433aib7eX97bg63VE2FguHfsKJdaJB2g75D92EFKAtNoEb9KeiuhmxHjTSz5vpqjYCn6nUsWHBWYMShjeUb",
  "key4": "4XtytGgFr4QyoF8i4MpnqaWo6cvr7gvsggGs1npTFzV1f51iGMqHRbJhkubaKWw47tJ2gcR5eE3knKvFEqg7g3ij",
  "key5": "2c25b22Y6oDMjYaYShYWDxV7SBiEnvE6ExSwMXwTjogVMm7tgw8gZg15QzdZc8ET1oFoFXPW3zTrEQVu1sfEqE4",
  "key6": "5uUAFBRNgnfk2drbsrnWnczKcQddu2cLGZmnYwuzTSMmF5FBp7ACHdZNZ2G7QTFH5fFcDac2wijmUmqj3QKsXvdC",
  "key7": "4sEah4r5dZFzMCqmTRMyBYxwsihSRQMC4eGE9dajnEzxEjgJVBEvcdE4wowQiaHjmZQmWrosFbNDrRgUfSY57btw",
  "key8": "5whQTCtGPD57jtq75Q7nyRvBMh3PRVZYR44bimKYyJ9ViWFVfgyiQNi77fXvbAfXF4gegtRfhkoadwdHBwamDA7A",
  "key9": "LdUN5AQaDmNWgttq9L7cLtoEh8TVCKUWZkE4gYuQJDPghkVYKdqRT4ZJ3R8R1uvNw3ycemfSpDpVUxpj4gWBqwL",
  "key10": "4jqa1AdmXyZGPRtMTz5ixsZbYxy19stMApXosoqNvFu3Jrk1pHHMqohmLiRSubzuFSgkw4NaTtA6NdQfscL5iVM5",
  "key11": "5KsyRt1X22gybWhxEa1YwQKpYjs3cpmzQ59QaqZnhkyD5paqRfkabpDrchmBLsJeitTGfmm4554EYnWUSvxrYk9J",
  "key12": "67mK9CavN1j9FzettJRWnaDws11HUrNss2gv3hJ58qDXdfvNur5qqbuHHdZ3VUfVtLKSpPR9EeuWL8UvUKxquPhz",
  "key13": "5dLCLo2monRyfNkNAocYJJPAvGfDrAbqsBSwvfegmHDCsPT6XPvb1QyLNKLtA9xksrXL6MDNTmcAgKQyLs8K6SVU",
  "key14": "4A7WanWBPpnBmes1A17aEassAoSsFnDhmFbXZVE44Nfw4FbZrN3QRJXbkMqPD4JM9MyyRhRVWoxKiQeuJ6hbmH9h",
  "key15": "5zkSPBMDgupfguMWetEoqhK9PDk4md45oFy4qMUyHiwZihG5jnVgCz8NLK485jwTWprHy5HvrQJ9ZCTBAFrnHTPK",
  "key16": "5vyRos4pStQRYLNMqC2hSz2Kefgm3JPHTUFkZPNDVYKspDdJegtaYbBdNc1DGmn8t16hpmCJ44sgRxX3TT4L4NkD",
  "key17": "mLqe1jZP1i2NSo6aDFPCV2xq71P4icpP3uuMUn9uKUkicHHaYNgKRj7MMm2wY1XBPJtf8u5yaUvCwkMeRJJfbNC",
  "key18": "3Ew8iFJ731u9jEp76q5kbc97TGkECa8stGYsvZAAossaDFnyCpjohoydit7AEEqJfXkDWnk6G22xmeouvh8wDxgS",
  "key19": "34v4GbKjxpspr9jmFkQSnzoKSUWEbfsxqwLq6NH8ZywA8VyXfe68fM4cSnr3JyaqyJ8ZQvgAox3tmNzzJMyQf4WE",
  "key20": "3MQCgyuRksxHTMkA8bjxfZwJ6vn8nYpwp3tEgxZk8WSdLY9xzTTwWQbEcAwtcboZGnCXqEXcrMjNYfmPUMKahpw9",
  "key21": "5aF1o2z1zXfHYJ4QH5B8U1YRpPs4rW3gT4iLTjYHB9g4AJAJB37DmMxS82N5XdeyPbB67xeVfLQmq5Uuf1TXmG42",
  "key22": "3qWKXc1JqRC2FMengQut9Rrqssf5vDWRfA5LqdDXv1247sXmUWzpm8FY3KCKeTjPNws7FzBh3XEcQMtBitZXirhJ",
  "key23": "37vSMbgVygPVDhacY4dSZa6si75mHaCpbAYDSQtoBxhzZxZhdBY4JShdDZ4F5uu7FMEr7kvPAEn1ykRSNTSEPuRa",
  "key24": "5UUjGhvZ1jrpptbS1xL61rfFvCYGa25NUWr77Z6BwnUqBnrX3n6Ms9Pv1pLB6mTJTGAPNRC63LJbL1tTBaHk2DKg",
  "key25": "5H7VNfoDwGKXTS1JeSx3HC9DCchm17xwQFR166Zb8nrm3HEde4deZan7C5djH9XX5L3SeDvdP92wMCEDP9KgthKC",
  "key26": "2XebWtgxsXoYx5rnSQqWVXXdZi3Rucypyp1cvHF5zvY4nAby3xsHEdftW7KLoymnkxmJ4GsvGLPPtmQgHK1zvVah",
  "key27": "4TussJXaXedTMi5hdgDNE1YzcGAzdfRzmbq1d8DmeAycb1DZmkP3TpUKDRnf6DuMZds2GKVcBNRHativ5vXBRHSg",
  "key28": "65MuaFydxTLU31crTB1uc349SL8DAh4VxyJVk6xfMQow8Mhiycn1FAUTsKYkew7n34AHiuwrRBCZ6SkXudU4Rofi",
  "key29": "3fS8qt5jzCozPF5wVLjpQp1ZUAbZxvGsXE8d9YjZ5DgFCPSqfbVZ1rGz81SYHNqbq4SgmsBVZZhVJymwqouMxg8R",
  "key30": "sYcJmzxMUXTBfczgoqmBCVRubYUTJf2Dey8D8FhiHJo4cGMSuwBpwZ9QZZazpKbRWUPF9TN8M7njQvcov3i169v",
  "key31": "439ZhhZ1d5ErvPaf8b3oS2xGYN5wNJUhsNENeDRQNDJM3j7RMLWoWk6hpTujDpZDsd2C8VCfdywtkpTvbjSY4vuU",
  "key32": "54U7vHVdocoQEyNJGb7irm74rNVEDWAdmAKjgWFsx97bf8nQkRbuVREDfb4SBndwcWJgKtA844vigHKejATzA9ga",
  "key33": "NKPkq86yAn9tjQfssPx9HFPgLeWdFhj32g99xKN6wygT5tk7taYgSeBXWrnNhPgTT9yhRUiEJGruqzNKhnzE3h7",
  "key34": "5hWb8H9GYnJdpUHd2Aie5NYZwRQo2pawQW9TSFvPjmze7iEeUm8nM3EmnAMojMHfP2SK2nioMC79opQvad3zpdzh",
  "key35": "44M939wcVkk28CvNSjJuRvxtdDYdUW2BEb6PShNgZodwcdJnigDqcc3AeyEeXsEiJ1XSfSm3WSyGmNGdDTTFZDNC",
  "key36": "4spYH9LDp7bX5xsBkWDFxFWfv9tFov6bW8UL8LyHGE1QpxmPsyJ1rC4ZexCUQTSCqiV8TXmcy7piXGUCdTa7cuht",
  "key37": "2QREs268x5Z26snKqeQjPDDRvvQetcxHfpKcZikVpHq9VKhQDQKwdpeHzZffyZsM4fJhRZ8sdAaiva5MuLRsr7iN",
  "key38": "5D64ZXptPTprUApSoyUStuTiq7eVivouggMCc12AvHxtzwxZJrazyduGjwET9L2xvZhSwDNHzKgjGVfzZ8dJSXT2",
  "key39": "5ufuzvMVoF1aPYn6uWRefMsCkory6WGGec39xhvMpmiPLecJyf7ejc4ZE1NLSPNnikpHDyxzCSACgUS88JwUygQw",
  "key40": "346hrk5epB8F6iQTevBwYzcPKpiheVwormbXvGvCkuR2BbeKnAba1bqLs8ZSxdHL9LDNGDPxQKdzBZsxBaCx7azx",
  "key41": "284HWsa2nn4HwSZDuQ1WBc5vUeuSdtRuLhtV7r1ENSHciUVaWjpKPiq6M5M4dnEWgbnNLADwtbuADwjSg9gHWmnk",
  "key42": "3T5rgiurn3SVb2F58ngUDs8ALx6L3QRCSHzyd3AadAYYUWgtQCNRQAC9zpHA2h3R9sy9tkW3RgkuJBMBeyzh58jA",
  "key43": "658JsPGxQ4TS2QYNBSCcikutQikbQjufgYVsQfTp1wTaiVqkQLFREEMq1L53VKeUp6WXuqDtxeNtHZYt4PgYpF9c",
  "key44": "2tdExdJUTZGHRa4AeDPgEDVeseR9at18rr3fpwSfzvn4eMMJqQJkfNzijnjvggFNquiW6hvNGWaDc7MHJDQUYsyJ",
  "key45": "3g88v5xMMJ4yKq2EUQBLykTXSGWQa2ZxuANvdDrcZFDVczjsZ1iutJkPa1STUYdSv8tkobT2AHaSfxtoFL2nWG9n",
  "key46": "638DDvpTJdP8MLL83rMjioQuaZziynYTQnZzLjNYY1boGLWLB35732WEs1xW8U5wFxXcd2hUR7D4VeLggqRetG7b",
  "key47": "qSW7GGvjFhCwDQRwyC4izezyEXhMvPnSBLBFfskSdoRfTZydiTdiDHGFHT5scraTMbu6FYV9TDe9PoSUAD2J1zu",
  "key48": "46jZM2QST8hEoLerTJtBKuLEQ5x5htRqadaBKA4XNYRS7EChJNfSUYumeuCYyotRXY5vt1itYF3EExSgpJto1oND"
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
