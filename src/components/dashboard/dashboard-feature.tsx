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
    "BXGDkTwXMqDYai6zSL51hNVWY9y6curDdVLS61uNx8WqiKUw4mnHU1apBPYfTdtNjLMzhJcMrTsCgUCbW6Te41p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v7dVyKESatb2UsZzThASnS7481YXUhNoiVij9hpDB4HVn36fxF1GDVmzB6wvdUvCog2GwJ1LH5W55mWQhSX2YEX",
  "key1": "2k5aSpkVrF7ttmhuy4E2DbSZXmwtVXK4aV1BzKDeHMc5SEiLBojT4zv9Tpku3cKwgqnhxx39NpmtFo5GGSp6uxDM",
  "key2": "53iuocbk4skpiQGVxGb4jpFt7uTidfZSBN2P6JzphC27ioFDT2aXUte2F7oc2hqZqpvLT122Kcn6F582HHqzjahs",
  "key3": "5pWdFoRT5VkFNCDWunGmFNFtZ3AWRPwg6Smfhet9idgLt3ttGAK5TLYmenRQXMRPrJxox9bUUTxBmfqdPMSMYdXo",
  "key4": "2zrp9eqgSSmVMRjKUfVX6dUztDTQNbsAPhKfHNLpuxSHxCHgGVCX9t1B6KCUGMJY4SuCn429wQhRSQVyNWLBgikz",
  "key5": "5QRRaKja6FetSP11mhV6wyXaLb3B6jL1t2PH9crCFCHUu2aSht6WTTJ6y1uhLrFtyVC4vWswwiNYGXN4iDoVeyMA",
  "key6": "DiKBFPVGsrL3FFm7jrS6G6RpwqMnh7ERKdXjM1n8y9cxbnuLHvcWY5WJzpof63D28PpCNH2znEczWUkFAAuWo7R",
  "key7": "4dFAGPq5TeHiJi5urPDX5zYEuZB4wcTZHLEK7cR8SPepKvQsYKnVuQDiNaKiDLvx2jeBnVUcALnmuzEAcqrGo2SQ",
  "key8": "4cjjE3jKwdb8cwVjVNJ7V1L5ydfqvLbw46vvY5HkoadHJ1ZuWNsFoECv3frg7qpmBJAkQiB5Epi1q9B6GWP6JrAE",
  "key9": "2SFaWuo7DrNcUFVnNDQ5JxxVCKmRjTZN1avsVhpjFtqJUWVNxDvV4p4hrc6Hj81auE9BGARkbRDZcJmBWBnN2Brw",
  "key10": "5zL5Uhv54qV3HG2tmcE1vd3KNmdSt2xx2TK1UtFoALinWruz25FZtUAzJHrXgvH7ybcZsNP8VcCyEGgknD8gpfxC",
  "key11": "61SQ5XRY1WtWQYbCodzbfHMjmZvViiv2kDAxtTVXF87rbsKewHKQeVHrRJ6SLH45ErvG5PXbaa6S1GinMScFKjjx",
  "key12": "4JCxeFLankdARignhc9xL1HmNxhuiTYSX7SH3j1mi7qe63JLQ9892Qov5NhAga1WzvNV6pAo2cqnNfTKDfCedB5f",
  "key13": "5vvX6onHVaN8F8kdux89uYrTCrZktsgpo7wzVaZoeLQceSJhpTebFeWsdpFLV1MAUDJVhY5U6PCLn8qbAJpb8Qwi",
  "key14": "5myfE4TnnruGa6pjPjbccmiWDmVNKUDCqMpo8i4DAu3sdKgjwsmrE4qyGQiaFZ9QXmmjz4VaJBeZDp1ez1rjM3K7",
  "key15": "22wPBraRoszEMcTLxQrR2AASURsYzymdNpCfTgvvweDG8ezKhUjDrZ9Wfoqni5xKUM7diHbQwFgbixYB6MDHNBcd",
  "key16": "4xDYnfNUADaUscoyKgiKb92XFGTvwtpkWyPKWqkLrRZbTFba7K3KvEBgaVTf9cr1vt8gBS2K9UvNZg4m2xhcYP5S",
  "key17": "5tLiem4oXpheAfjJzKfD9P4FxMQHCFj1Vb2xdCwsuounZjm4YvHrHKi6Z8Q8Rf29fJDHHAyhh7FQEPfT38EkpeWH",
  "key18": "4qM3gsK8ucH5oCpd4nGr6CLJmxwqfdmvktJfYuhfW775moj889xHJhc59h23A7YTab3gZ2WVbyfHHqe3dyBHh3Xw",
  "key19": "JbCS5EFXjbQMmmhVSvfRVHK7xdk51Huad26rswGiwurTKw4DyXxk6uM5GQaHTo1CQZ9VdMQCTiYR6vjbcDJ5bZV",
  "key20": "34Ch2tyeEypAhcE9gf2D12tWXW3sB7WtqrCypkpbbtfsZwerWba2QkWNfJYL4PUYNCpFzamtVJou6RtDc9bHbFQv",
  "key21": "2vJpk5pwBuV3w5zGhAW9mQjgYbGQVkE2v6yfbAtrJfg9uyXSEtWDEecqoX4bauC5MCiNotCuavAFBqiwTaUndpkC",
  "key22": "5MpzNsXADLZowoUQQub4aPjdeMC3QaQxTixgm9UxYiGsS2tvZoci5FLdAG72B5JXFyBnuXpkniTrmd19Td8RoHM5",
  "key23": "2uU2xPxBLL9CdFnX1bTQoyq6aEFeDFfqiiBujyCXpALdedtJDheQNZ5sy8Ubxdz3iqUwxUMkCZW4DnGPFPSvSK3Z",
  "key24": "2QoKB2vvW8tzWYnmFB9sBvjY7e1m5cNFo2U9wP1uot6nKzzAv2Vk8eubiaKp83hcu1Ahe3QDSHuuVDVtftK5GuyP",
  "key25": "3EPpVYaAB11RnQ1RsxirJKtCcjCDLxYoGkvjiCS28hWoUuDZxXq1aBwbCoEVDPgJt6Fddao4UotAvFhTSp6W2ETL",
  "key26": "45XmVcW8PPT4LjNARrCY69DzFUEhKuRs4HRTyqMfn98QtXCpEbgmRohfUhs7mherYhR3ezcrHfPfGFzjEQSEzfNz",
  "key27": "2x1HY5XAVHh1FXTkM7ssAmcT2DiSF3X4jywW3DLkgFPu3FdZjXCdaFGEfSCibAsyfRf437FhQ9LUXFN25Mtqp1nX",
  "key28": "2wsjnWCtFeKSvMj3Hk35icxUwWTsz61y6umV6oqWaaGzhtttYnTN72FV3N4ugrWE3TtSdfyMP82L4bssVebKrLLd",
  "key29": "2khM6rqrYmK45bmWYsUMXo7M7E9hZVjN35jeRZCmP5iGA3nHNnKpcEd7JWvuoYF9AnnjULEkr7DDofnt5HVjUu9Q",
  "key30": "1BCAgtE2j1AtaDp3BcZVkXBzUvW2ysrFXcTc1ssLC3kG7CGKCfJMScMXgTpMBpwfMjZ3Guaf34dZ3tiWJT3EwQs",
  "key31": "31sun51oR6Rro8F9CU43FwnPGEwSPp99rFm732HUGsuBwusAeSWBWaL1B4oyJCgq3Vzdc2HLMv5bEGbRKPxNeQeZ",
  "key32": "5Z1FXJVeEkdVVUJbEfFDffyD93caNLtctaRoNBphCcLfZ1zDQmWbyycVFhcc98PxYfQgTeciPv8FsnWiwdP8HAQ7",
  "key33": "2tNjvZLqdLSiK53xxxTvBCSMu8vYXGNs6yJ96ZB86QsXK1ZQ8sn1dVVgehdz4APgRDngpT7Tvz968CET3wyrsE9D",
  "key34": "2gVJ8hrw2FviMxgHA9n67KFJmXb7DB6JcFot2mgvwtCt9Gc2hKoihLvMk6X59DdSrf4ys38CGQPWEo87Qa7n3F8w",
  "key35": "2ojisCzTLdSxY5DK7n8GB5VqTqtwZMrJrGkWzNCidnZRK4eqBEs1e5dm9KrHdt24X4Fb7btQ8VLhRbQandX64DM4",
  "key36": "3vD8XjuRssRRtd1DWDNTgSmeJE26iJCsHQPmPdKRmNgdZ86LGMRKhPnbvm8FxCEEaZrTmrnFqToVrGfvErdGM35m",
  "key37": "5Uhi5vDWfqCciNeyoxA8YTF1vhKjEFkNrgmk91ACTHJow14PkGsxSUqNtn5Z9gZNnDaw6zsntzs9uRRNXJkoJHap",
  "key38": "2ptT7oukpGiV5vXEQpVx7MtPySAVVEUMSyVkEZPDcVDfjiRK167wNunGrj4rDDXVsQqqcQJCZ7MooEopyBb6jCGo",
  "key39": "2h6woyWVnqyNHt7aQnCZjg24uCd7D3LjkEhi8nEbYivBTZues1hMAcCKnPpW2VtmJuCGfZ1DNUmEB1HKksWnLH2y",
  "key40": "3Dn74HWPCAVWJemSNeLijGAwjYVG649rYGPVDWqXWPTmS3GqpTv4AMPPvWapoxe2zEFNVmn3cfBe3RXVKgoMBZ6e",
  "key41": "274jjv7fueSsnEEDLs1AnfpMcRVWXrE24hUXTeiyyMtgjPzvAL26VkUWAQW52To9KsiGy3bb8xYDCL5RjURFLScf"
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
