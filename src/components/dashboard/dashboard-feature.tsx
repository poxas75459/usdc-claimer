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
    "3EUr1Enu26L7pgx23MkRdD4ermMav3CF72xgidhonmHcFbJadLWUdU19xnrJGaR8aB1WPdQ4ae22KNQmpD2vcYXA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cfQkdwAo9PxyaZdW9pHY1XVQcxQHUcF57hPUop3dNehc1oCVQ2Nec8qbfFdnYZoQ2dW99TDAnyi3LruyNgMEmNe",
  "key1": "4VamTdvGS2GPex3Aa6iZ98RHf9iwAMbBkHS566zJ14r3f5h8ww6gHLmsqqFQ94dNE8U16qaAsMDiberX4obdVKGn",
  "key2": "5Bcs8xYkHnomypchAY7vXGiJGuwAzQ151Mace2TrDA5umLWa8iM5CXhv4TSXGQSxhMDhsp87BC1t5KZ5NUhfHZFf",
  "key3": "3nffidjCpUefnsjgAWXi4qh8UvGUrN29C6z8gicv1tyMTGVrz7vN2iSi7SHpzs81q9tHwNkUKanaafsda3m7fEvJ",
  "key4": "49j57q7oanjtWDJ65YMDz6yWGhxvMZYtpCNrDwJXAkuoKqaJKMsFkeAgK8UxzNcnPXGwHjsG5oDzx8SvfexEL3Yw",
  "key5": "2TieAGxJVf11eSwmyA6t2Shp4KdcoAm5SoXAFA9LJs2ZYcaeFdS7ZLPpZBmBoGE3VTgnn5ELCNHKAvzW9ptRwT22",
  "key6": "4XVtk8ihZaNgqnohYJ9SJS84ANc6DwbXgUNbao8zqEe1ZLW9EXENQ7jWpsUVVNQLA1HPcWarUHgsJSkk3xWY9w3v",
  "key7": "4AJuFLPrSso3h31gjGfTwHr72JWGrdXhVGGe2SaeRhBFWo9dw3hKNys2QoYcZuMRrErqVJMcide2b6rnpTPz81cw",
  "key8": "3HXBQBVzUKo312HZm3jxu4wRpTb3F4EwZmetLi9XAggTVj9gCXtfjRbY7dQT7hNAkLkPD6zrwJToubHAMSBx8rQb",
  "key9": "3YmizoFehRbesvmGcyyMsk9pUyjDUUFgdy4nPfr7YDNCs1BXHiqSGDfATjJYxjfVDw7xZv76ELWdhYdFdasH3U1w",
  "key10": "c9zFxfkMhfMhZGk9mFueiw39brzE9pZRJtuaNoJ4EXnXGdwZ9WJSfwGjjzmfi8qDxSRwNNvEXz8TfjjbsyMG2Ts",
  "key11": "3CMXv3iXShr4KxtW56PXsDKPX28HmaNg31E6ZPZcxXD4TrFMEpX3wtr9yPSdnAJPgwvcr1NKXc1xgvCaE7ahYfxV",
  "key12": "5qr2NF2RAtWaE1GBCs71kkyYy23vibKCKhLhnPYmS7AagrTMM88yzzby858FrduL75tGKtmncfLJ7WeCJ3Ay2Dyk",
  "key13": "49Suv32kostV7zAaDqUT7qNQQr3LtNrm4gAHV4utj4AgjrbuLRJS4yaNniM3K7RoruqBhQft6jnqDsKEhTwg7A5t",
  "key14": "4GY8YeaQLtzNysvGtvABW7S4RU3oVWErsrVY9qXKjG8yXnoVgLrnNi4afEjXNYZRj5YhjsrbfMkMtkJzBYgcpW25",
  "key15": "3eztqv7BK5qNCvxRXatBjjzHdmSYL3K3sXSqRcQDcerVsgNKW92icLc7zSMCp4CWDMcsdWBchXpjE2RwkYrTEehr",
  "key16": "2LFPBYMDEcaXL4isiv3dXGJgGmBqTrJnSsUoXZdn1fg64UMMoxKrAEKLxrX2hxk1VbcJXycSaGxC5xRqs4BMzZdr",
  "key17": "RotJzKgFgo6YSt7boKyW5YZgGkYc22DfS1WdrmW6G7TuEuTctUJbwccg3hQ9C6dn1Jgh519JMYQcaq5K52HSYu3",
  "key18": "47j5om92Mb12puGNdEeZTuZ4tQNQ2EJ6z2VhyXBSi7UY1itVF6hAGQUofSYbCG7M2FnP1eeaUtkvySF1rEvXZ52x",
  "key19": "PKFAe6SXzpuAQwHTrG61futV6NzBYnFty9u54ujSouVEKJRefYnejyJVu43ceDyVzZp8isRHZckXr4U5Fx3C8hK",
  "key20": "3pn5Qt6j7bCXJEyFUsygQwUeRsgNmNoFugiyznssdw2HBRgnrJCVGNQ4naFra9HLpW5X6rDdgWNjHzoHJf54yENX",
  "key21": "3HtKCs9jj9gYvZoxAEMfr8gyvBvRD4tzgxaLFDY2UYo2ghosAqvkATpJsSDKgFx3BpmTioiGynHTLW9AJni2qhVb",
  "key22": "5grhqsic6mywC45BP8h4rBpwbaNooUb1tEsXLtMYb76Phdeq14q4dG2bBWkZwq94U7W6Nzv12YyYMMCJovgiSgD2",
  "key23": "3fnNZZZxfkDrYQwJbvQDACHUNHYQ1sjNZ4utr1ch1riSJhU8kaHq4UurH3NBxVqVtyD6peeppQr2vxcjC8ZW2jzH",
  "key24": "2nfJpLzNmTukizND7ZLwYVqPw9cFe4eHK8Yhoyo3KqkWPejdCHNcMtFxpYdqfy7cvVrA4AdTbn1bzMD6AjHciWKx",
  "key25": "2bHf8vXaQ7pCRw5U6bZH2jA9gxSmLue6qFPZ9GH6C6jtSkcK6joivbxJ4ZNchwfQbUAnUmjcx3AFAGEvrnG2FrsE",
  "key26": "2MX1pgNvftqaCkFZyNUjYEc7RqELw2aBKAxpX6sSCmMp7ULw5oHatddLtSbdCF7K2i2FatkBKd5tNFeJh2GsYvXz",
  "key27": "5USuCMh8aQ4zBX5ZNtFUYKEmDnMnR67ANLGz6UTCyWTE6senXMgMM2HUS9Df4X5ETxP4bcaUP7PpREAV4Dn1tTVz",
  "key28": "3owU84Xpo5C5TmVoXVsM9WYNtQKDqQKX2AJYyjHCS6eBBGBUHKFcLzUyDckDomdt9ceQYfqnW3WWCueNrDqxgz7g",
  "key29": "3t9QscwqedW6KjQq2CNYoEpdPWBFR4R8BQX4L2F2pAL74hq2gGP2VLy11Fo34BEb7NzHs8ccNZspqKTCiJQ13Z15",
  "key30": "2aBJaQLrHigqSXvXRnNckPLdio5RF1VqMkvYCapuboyTZSM4u41K3nDdNyVhpg3ud14i2H6Un767MabEf1WTb1gS",
  "key31": "67SUFXpfCxakYy7eYVxzg97vtq3g4sueXBek6tTS85sVW239z1GsE5yzowmaF6JeUkiGTno7ZvA1TCRQ3KpsVxxD",
  "key32": "466JT78qH8aGP7iZrd4h6p6R1ZshUBAkCESrkg3jZSYSjz9wDppaoMtRKJqtN8caTTDze6vaAr7DyA3Fv7qozZCW",
  "key33": "3WLZhJt66Z216AvwvLSs6Ne6vmQz48zJPKwnkwnKqdCvSTNjxsjgsiGTB4bCyTckP7yAKrui6aJviHtF7Y8kwJuu",
  "key34": "649BDdAvchN19B9WPcESaLZPoaRMKjdxe7jtZLDwCnUf67ejnNULQHzy71VEc7qXuQe4ypJUqfEP2y9hPVmoXV8X",
  "key35": "55wAS4uWM937jbgqSxiAbv3mbSuECs7MB4jJYrSACdfDtz4goMxNuNuTLHRif5m9Z1UKaHMicBUrMcoHKuXXThiN",
  "key36": "39trPZ2Da1wVPGvV3CPYEELkuXtvq1AzrJEieoZXQx8sHz8fe1J3Mv52dZac81un6dXpSXvnwXEsDF4DoJMw4pJn"
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
