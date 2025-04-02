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
    "3bQLzJjna9zHoq9dn3hdJFojULQchGvr6QEDkMoDkaKpDwJXEStn2oAURdSwTVZAs5GPxQpzTH95SAMQXy1f3UJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YXDAw2ThuqBqH4uswYkVPnsC1CVfFT9pumXRhp4z1VrrgqypaLWvzw2ZSPTKxqvt4nWLRvmp7Sqn9oG4SYXEFQA",
  "key1": "fT3b7nD9TjT3ZfE9XyDLQRHzL9ofgppmJptZ4umJ6AXgJn7ZZrxnERuyix2rZuNuaSinmZhXCMw8Y4cEw2MgxdQ",
  "key2": "dvz7kEXRqkro9FkAZDaEG2Bday8nSLsmTuhhPhMjQER7HZqM2Vc7mfHq18jdtMwRQMkyMhrHWUkNgbgTxdiwb1D",
  "key3": "DzTvKT1BQrX7e9dDgnXx49NApF1QcdvGVoRbKNFXHK7E3SL7mw7Hbjz7yqwA8RYuStYqQrFEvfHwPsiQc4sRQHM",
  "key4": "5jNr5exjjLVtyMtQmjnueN5q449gScM9mXHjizRgF2iy9TNmzCx121KaSRK5UW6zpNSsaVsX4VXCP1sY6pB9cQWj",
  "key5": "3bdBZLprXyHCd5cB34ro9sdL18Pq2viYRz7dh9kev2rjH47DwCC4v5CM73Bk7jKgBpn53BUreYW6UcC3BUCjfJk9",
  "key6": "3GWnLbajf6c1we11kLoF7r9cSjzQ3EXjR4QMzg7UDjFSVY87WL4Tx7buXwDrw8MMnqpCBYK4u6ze3zyMm6E4nAZ5",
  "key7": "4ovuz5kSc3wfUr4j614hsXezTWD2CrJMouhMfzvApvCsqVFUbsHSFdAdqPBQuEn53e6X548N9NBkiEmGM3eDsHUz",
  "key8": "5oQyFAH1VJ53nmFvYenZrvyS1Dhd5uktRgroT1yB3nyBbVjq64Humn5KB8ce5M39uzgpqWuMeYVVug5Z5W7yptEC",
  "key9": "5c4sNjRVP6dcYwESX7dEb93C95d2T73r112gYZP4Fj5YE5feeinTCFQxkfUqM4C7SymHDn2scuHKTxj7mHuWrC25",
  "key10": "3Ht8Y9cERAKqBxK1HKNLqYXpfCFQFETpSTEC6zskCmHJXjnUcS79fFNxPTMTrF66f434cZsmYVt5qs6FNLGDh3oo",
  "key11": "5NR7JbUUqADDioD6S1PpLDxEbeTPSa2t2uc3tYgcsSmioFM6aScKqXrsuWpVnPcXWmw3a89nefQbBMCP6krAdCoa",
  "key12": "mXDSmUFCMRoYwv4xQeQ48Ug2rBcCr7PKx6Ts1KMSfEba5nCWdSURg1nbkvJdoSWRFX84Usa9yPmDGp7mgXgeZbf",
  "key13": "mcMDsJgKs52tgrzFVojSDLaAxkTKG8pTYpdWiHuTnhaWMpyjJpStvFYTc4VxuaxuuDte8kMeiPs1bt6vYCxJ38j",
  "key14": "5tCLUzm23HyBphVJgZbi5UqRiktGAyS44yC1gRwAUp5MMrA2wtGbcz1Jcz7ZPKWuMAbD6BppzWapXAPv7xevKeRM",
  "key15": "BKY6b7Tz3svmXfzBe1AH747sAXGkqVBRrUuBZHjc6ZCEa4Ci1chxGmaM4wP1NehYFD6SYwpFVHLVHnJMUMbxQyE",
  "key16": "E43HvYf5zx7ByMPAQrV2g18pdSFwv9nELSwnMQtyySEuhC7nd5BTbkbzzvf78TPYjhj2AX3dR8UHGM8ry6zJb8Z",
  "key17": "2NQy2cwGXht7L9GhqLEnQYR6K4p2xJAV4mwqG3M4zQrPW5kafTsG8yar89dT2uKGiW4HQxaXCutjkSie4XdXfo2N",
  "key18": "4zRpKNoxJCYthtGXVgav4c1q8zCEZUVRdEuAv3NjifwiShLVa9YHQwnKdutFf8LaBCXwoFddXMDuZQoYBqFjjKCp",
  "key19": "2PnEDV2pB8yUFPem2gwjZZEwPBM58vgtQUvYNf96Dy4nmm55FApVTyJvq9N5GCLwMuWJAHyhcb2KatwyNYVCPPmp",
  "key20": "2XH9HrLsVkKnnBQJshKNbswrFZYwncHA4PBBJW74PVSkxN5fSpTqs9zES96PyPBi62Tk9uSfFgx4D9PFALC8vUoA",
  "key21": "5m6ETh8CN1Tebh9sBuZnJyVPXeLCggAyRBxBxwcC8LE4rxEGuBJbDGR8oM5HKbNTSFdFEQkTgdGKu38Z8yqEq31a",
  "key22": "3cFVmxmGcxWenRfzmxAmnVMhpT4oL7B1XoZVzNKp6v4oszTzWd92HtiEhLueHVntLjrWdsHi1GAs7ewUWKeE6rmY",
  "key23": "vk3BVzjQzXosqMarPhW7dusVFBAHyVVhUwFQk1S65xhWJ3Veg5XL3BL21jxxc8ucDnSnoRfBR7XFxAQ1bfpTKtw",
  "key24": "2TN8Ym5D9AqYRqun78mhL9d42Nnk4Z24gqQGnAYipLWTVd3oss6BK6ZqUVnfEvaMG3f4hobvGxPxWd7NKUYraEUT",
  "key25": "4jptSmw6ySiJqDyuYMsZU2Y2EVzY1RETBnhSvamFqem1uwNFqa8UXs7becpqdU5dbGpwWjwNWuqJXhSvH48mR4Jp",
  "key26": "2stgHzDBzvwGGXz42cxrFdxRuc9mgmzowmdmCakuewbvoZ7J9ERbPtn9g93T5a4fqipLjjqomKNQZiztms273V8d",
  "key27": "5tjp7eu5RPAJ3ChjmZhzJ1FbpG568UNbBsdNZM7FwqX72FigTSeT6x1mfX3DVEFcx8zsfmhZkUt4uEwDydbffekx",
  "key28": "5gFvfAxH1so7ytFCHcthwf9gDBoM787oX2apuwX1Z42Z867DmEsxC8u61vNLtjkZ5Je932LwhrmxQtVhyHpn5vrd",
  "key29": "KWBt6H32SdM17M5rQcZsbME1guTwprLjAQvCwzpgGWifKGVBDh9Hv5LBYMz7CtkdB3AQtGS1s27uop1EvhgYLtL",
  "key30": "4QjhN8GejNtJhHCSNJrsTUwanLefW5d3NdcaPrq3YkZZ5fGm61BnG9ZmQuhEEZKb65iuTifPmNY7QjvmZwAhAHCZ",
  "key31": "38X4ZRtqwosTAjXERvvQx4RRFEpmrKsstrUgyWxG5qvVk73xGppiH6pAxUopG8LnrjtdjE1gY55CjK8N3xRpMs9Z",
  "key32": "5MALw7yF4tKjAv6Wcsa46XSR82RHN6WGWrFdMMdNwLbL1WaaWUP5jiJHckYZtQtMTovC78K2D6KCEGuUuJ8W3vsL",
  "key33": "635v2bDJEdkcmYB53cHjHby1LoUDaqHai7ZRCbxRfL5vuucpEm6UpoYZp3VYwSa5uyGApKac4xcC4sy5Lpgx9tA",
  "key34": "DqtUTJh4F8jcsLWv5QW6vycetVmzQeE3KzcDUrR3BsEivKnoTmfS7MxYssUBigv9TgifCZXZqTgtG213SVaiu7f",
  "key35": "3nTzCZY4cMut8ubMFBrHupap3qRVzqbeKH8YyoXiJjw7ap9t7H6c9Wr79XaffiRkFUcrmWg1PoT9pmFhTWzqBhBJ",
  "key36": "53a1jZraafWBvuQ3fMysomjskWVhegc9qv189SdQQ472DwqVkZCeDUuVBLKwKqXfVkqZiZSBmQmnmR4pRjbDyMig",
  "key37": "2LuQTntwXuXo18abPqNV6m5x5ns2ZEtfxSkJ6NT2iKXmWaA9uwqki3Z5i8qFyAQb8AL4R9GWfGRCScPETYtdKrT3",
  "key38": "2vkeH7UfEgnipw7dTYvqjufG5sf2kWAGx9Pr5ZHPf2YxVzJrmhhLN6DfMMyCUtPzBzLDrd7CPFm2rZ9yPEQdazVy",
  "key39": "5xdY2tYWZX5TRk74UVfX69Rcz6oUAdZxZFsebcRKLFiMjyH5ttkyDEpUjHEcmGZDpAYBqdx32bFR7aen97C2QuyA",
  "key40": "4C1SGUFMne6936MoSS631cvZof5n1TXDGMT89FKboo27paADgDaGxCM6xGNL4AXP71dgY14hKuZUxLYtxEzUanNC",
  "key41": "4NNN5pQio72DFYGdzK19goRGiez8MfY7do45xMndmtLNkHJ1Gzj7VXavSEcoij3wtWjp1R4ooDfbbeX5zFX1vB2F",
  "key42": "4M9GZnNZBX8sSCLh4Rz2b64n5PcBysQJNDJ76p4DMDRBhJg43mC79rPbgGepr6f1cGycJGA7cMLo8Z8oKJnJMJRb",
  "key43": "3ppcsMNUoSGC3KeFYg516tLmkWkJS2bsN1vrXkeftCGSMRvUwW2DLYwh5cSSseM8mCHEkzs2W6MzLdxvZmonpsas",
  "key44": "4Ypw7ddeMhpfpeuFmJMX8pkjyfW2M1eeDRVvogaddASoGkFCNvqDn8vn9uahXJm6vRkv6JdX3sKbAADKhPxkUvPM",
  "key45": "3XkVe6vJopkGf3rNYyb92Svy5g6JcjyYdZfT6ko6X4d9ALqZxdyTkJaDgYyoFhhQv2QBhqUhyDn6diR9ArXZ43VM",
  "key46": "2LL83D2xGkqfqdHPYM55rkwLGRzEASenj1aqDKZfWak9aWsmL76RfWdQ7oeHfk9PpUmKYqZEAXZrG7ycyCByGwke",
  "key47": "P6zSLC8XdFnXLt8kUs1bKtj5n2AuevL21fY4ZdeRU7ocPcTXbfTeR1VEbP97fWHF3ygX9CDw2o1Z4yiA7D1u4GP"
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
