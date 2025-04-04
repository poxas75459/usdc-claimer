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
    "5hsnxfCmyJTSBHjkoVH9SWg4hHRvrMzPp3Xi8KKP9dnSfLSect9qhfEeuHS2pqqEFneh4QUhC3NfptEP8ScZnkJ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iEnGefEqpnDXQp9StyTpSmvk6XyTTCnf4FiiHAtbwf9AmdJz8KLrRjBaUtuVN9WefLJg4UcNR3znicHdSunak6q",
  "key1": "3h8s2KbgSFNtgtkcoVQQoFoLdG3jT7LYVAckFa1uJZXhT164Q7XWY2fbFGsbDUSAaTU8R5AuGcxgckPbb3X8f89P",
  "key2": "7z9hLRRmwb5WbnKjb9gjmy2XrPonyXwaCPM6Q6kXvEJQK1XCDapCS9SL1YBH5sH9e2r3bFPXz7aDgpbSxDmU76K",
  "key3": "2ji5eqim3CxwHGx3F37SNrLEjgYXWWKrGq56c6eEPxDH6UjPeTanhbBCXD2qefW2RBWeUSPoSPCHVUcR7SbKRKC3",
  "key4": "wC3A7Me7csvJ7E8wWtADwE8hEiLpUzPVxk9K9veAbFA7eAmS8XXQgGiALF7tBdyjjRgR8B4o4UwmJz4JSVHY5US",
  "key5": "2KUvTq9G8e6aVKDYAPfrTCW9Jzh479pkchN8tf8A7qQMcfw4wnChTbKg14uaZXEnPHgbfjqTSxzbd1eh5HwWbreN",
  "key6": "RBBR8Bn7FrKnm8dUNLiM9aNGfkhLUnJLS1Ge8H6vEvxx2ERyEos9SxAr3nTysFDoeEEnCF4EwAxoYbtxxufYccF",
  "key7": "5xQQsRxn9LefSkLiVUEUVCbEuZy7WpACGtfgZjRvrH7puc7TJ5VVPxRV1B6yyrnte2SjmQLNwXzobTM6N4DuYHNF",
  "key8": "2mdyzYSaLTRGEYTWacmREaxbzWYgPWYzDu8SarCQnxFs2Le3DEtVKMJY54PGDpNXEwrFXFjsBMC8n57cFM6ahphV",
  "key9": "2L6iapnmcqSjzCd3musmT7WH5z3am9fh8Ak7mn2kDNUrWdKFvjS1LB4aS6SYcy1vrBowY4ZdaiD7tJh6LUktrd3g",
  "key10": "xgFjLVpgai4z47gZhn4nZAbJaTVkVpv4BXD8WmKwBJWTgPwiQ8zNGor7MLfBMgvJWQ467cNhqbFjdai8Es4iqgq",
  "key11": "46VaXUSNwYeWqdrqopyeq4dUDTFjYahtukfAp62aYCgwmtThbFvL9WVbN1Yz2hAPttrXU6PbAdzC4pUGB5n8k2WM",
  "key12": "4rcUkAJquH99wRVqZpRsmQrF9nZ6s3u2zLijRVPks4Ai6bm4qKqhf46dj7RW5E1e9owcDz3eUJfWfwH5k6m6mMh8",
  "key13": "2TCkC8F95jxWkNyNAQ88ecBzWPHSm3g69UvVvfitxnVF2Cqceym22RhEieLiFMAUM7eY2u6UsmChaBkXwWVgND4S",
  "key14": "5wHJpS8MhQfQRSm3mUDY1wbabNX1UY3cwv3A32jKMJwTNZaGPSf3fovLC54EhpYD2M5LWYruWtY2MghE8parG7Dc",
  "key15": "4wWvJGUQfaGUQSXbs6xbQN58bcApq6xpvov7rCCRDLJKe8yxXk1BeGquJmxSoEFEiuQPS2stxvrWPUvhr3df7RsU",
  "key16": "4duTRNwQGkqNjab4nXwYsTND6aK3yWMsDoggfiAtuVPfhpshaAAkxm5arx2B5ApZYWVoG1ktovqTxZT99a6yHp1s",
  "key17": "2JYhuBG3ARRuQRt2XZzZReT7ftXUQQNhDpW1rn1Y9zszghai2pyjAQEYefTSsGAY8yxGaTWbsVA3yDA7uehe96xF",
  "key18": "5R8jzDe6KwqiC8h19MNJxPwuwECTpfjxUEnFz61DdE32Af6qG28yhYAhriyzy21SdvPzKwJiBktQRCw6BHuiwkbG",
  "key19": "DqQDxFq2MunHbesKpUKyj4s5KKaJK8VnQrtmJTR6zkaRHNoLFNsQroRWH4PoLWngYvTCJbrc6AvNUFVjvtYaBNj",
  "key20": "5gABiqF668Un8XJfBrCg8VEPZJ1wg5cxD8mK4oJfFKrEFADx7LWfaxpoYrm1YnkRNx3Q8zrrnSmRtSbK4oEeS3BB",
  "key21": "38j6G8Y7cTvDSiS4Epd9vxQ143e8waQkpk4HisejbNxpeQf99cJbQ63YjpFbd7VsCTPd7VcGRvqYGHwEbRB43BV6",
  "key22": "4BLWTjSaq43jm84ftvsuPRCcbwE9ApyvhCdsJFRW698gbEy27WDjNfJygqYS3APQhEf6Zd1B6Qbs3xnDVJFyeM1e",
  "key23": "2DLNeaEMV3QS66sV7btyiDwPYpCf8udRahomz13nRioJ37cwPK7kgcFfhfdoSZJ1AfUEkiZDmPk2DJv6E38mxMWX",
  "key24": "f4jYQvrmFcUCN7NNrsHFkbpgg8R26MZRn6mrGDL5Qvg5JUtto1dfEds7QcYd4mGZrSXTmSXs5Vm9vw3R6FU1BH4",
  "key25": "4rYay32qBUn4gPoienPtFf8TpqMXMggGpxPkkfaaG6kr6jFYr73ccu8UQx2zc3TFD71sY1X5jiheLyuZqZKbqYxk",
  "key26": "1hhNP35uzSADFpjX4uosoWdt69ApVFPbYgt1mzvABb3vZ7ARLKyNdw5RvynyS3nznLb5QPbwxrtow8CqDFEeaEQ",
  "key27": "kJGmXRBrx6ZEqBBm3D8AdmQWKiQyQpjPgiarGKo6nZwNyjGNf1ayvDcAxEa5XTpuVxGSjpdJVhaoMzbXWeFGaVk",
  "key28": "QLch5ADJFJiHMZQ5f9ioWf4KiGgGqiBWo1L2cLr3gnTmtxw6GibRRZSr5W1MRYK93m5ks5tUXp4KU6sVsMLwg1R",
  "key29": "fgNS2HEqhi4y5WE9zi45Fb3fGhvPV22LKAmvEmKgTVM38htkFJubbzs5gMTxCuoKTFcpUYhUjiVm4yvCepwVdWe",
  "key30": "21dhBKaEbUZwYsbwbAh3F2Uuwr3A64eM22fzf55UNP5DgGyfQwSpgzEo8LBGAe7MwBGZYj1nHxyvEp47HCasuVfi",
  "key31": "5VtUjGZJJCPjxn7nCRdmPGq75dxH9iABbvw38HVmjsETp8xuZro4qRdrrL5D1E4Mq9hp3jwpLGgGuvUiiXG44Jsf",
  "key32": "2oN88HWRVgzj6ayniZS3bDkCXSd1vyefW8LnFggtAgWbgExNX2pfLQG1UQY8bFTrriKpmfNSK73iLrJcy5tR2stG",
  "key33": "B4pqJhWB9A3FdgpV5hpsbxUuDEN7sgFCxPWk7D5MujtxnF6jddqmbD3suUD6d5Q9NqPwpcmuChmQ7G2JwDQ5fLm",
  "key34": "4dowxwzdBzqjakMqJGapamh1zWgBruhwmcuf22nRAtp9yBCx1mjru3EUYrex8QptpGgZUmtNiVrCZ35xVvTtRpCj",
  "key35": "5tdoVVDbjSGd8h6GurAbYaoeLRd8GPuYg76P9gKBeN1gY5cWy1AFboknWWmDDWgiXh9NyVAdQViR2NXjjYurHEVP",
  "key36": "ZozLv35vnPabD5DDZZFs493BWWoDtHVntcq754himY3RB8sMURBvxtzVvy5h5bdsguDnSTrHY15u8q8co66EUH2",
  "key37": "3rdhurdTCc3u7CymhmYNstNp3fJuvtZ1yKQbS2rvFfkiPAMXhrEbJQh1W7Ls7irf22wdmanZ5cXvKrZ72p74zssD",
  "key38": "4XuSnzY7rnVSiUmx5zs1rbm1MeoyZADUBvjnnuUCGbksfG7zzaaj7YQCLXbCV4kX76WFUYqEKZRjf6iboDRZ3eRA",
  "key39": "59DJSiZGj7bhtAS7zphzLixkoK3Z19eVrQGkJYLWyECGWz8BXAGFUS7nJ2TXkiv39fD7VCcgwQdFk74EznWJPDjx",
  "key40": "31MD3o87YuXzkcaR4R8EMzjuNvVjXQckQgTDs1Li1pEhTrRUHEqPTp4Fmn4pKXmWoSKHhHdq85A6PPc9oXUwTAqy",
  "key41": "5akANdHfGCYK12yfnqBLoMKYfpmWpoQbkxqmhdcFrpWvcPMo9mbwao1eC7foUjuVmcNE3rtreWtLc1Stu7xqZN9o",
  "key42": "5uSTQkpvrE489iqBUqRjQD45US6ei9R7cP1mjThc4KGkxDyWQiqd8B86CCMMRVap54LHcBcJ5zCFv1yq5XgpeEBa",
  "key43": "com7iZw8x99QcNH79mNAkJWdPmKwGKhWW1smiVzkvSuGmmM7QBXQf4FLZWCYEWurT5c7hmbNKAi8KZxRh2epD8u",
  "key44": "ikKZsBvLdxrL3xXRnuidHBRCa8stjPapktJLuvzWJRc6q3y6ivDnNjJ4P8q339AP1pwy7qZhn1n5fK3hehGYsaC",
  "key45": "2t4JdtwVn77UZ5fEatqj5JwobMZPE3LQQa868zA26ssN9up9dbnwev1TMhxm5J7yPeMG5TqzbgHHoWv3aUyLGRfc",
  "key46": "3frNRwcTji6xoJgtvC2vqsf22LGpdCKP9Uqvt8EWV9Fnnyg7hAPaVJAsvCmtYBrZAT6DZy7txDK1VWkwnh1Svak3",
  "key47": "1wah7KfEJz6HZgUXvEKDkomdAQuaLp6b2LGv6JJJFiL8CPLZjyUPWBTWFnimTn5Nd3xqMwYrhv3g8Ed4ExjpLsf",
  "key48": "67P7sSXotKbW7NoJjh2WoZ7cdLgZGKYQmQtRsYHFbCGEWiSiL46vhRwEbtB8Q7cmj6WFhp7yA7NRhZU2xEtMkct"
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
