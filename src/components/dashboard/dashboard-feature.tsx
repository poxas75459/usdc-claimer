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
    "2DdtEnoa7EmPNGxVErvgCiZ4Cyz3uZ3oUvxvfCGg1mDV1RWshQmAQwJxEydEg9psBRwr1x24cVA9Zw25FMf2kqqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sfEX9p2CzmEBh41rteLnaNak99Es63G7NywRuRnQMtaeMhMUccFb1ZyGuBkvntLq8KHF7GAMxGJgDcUNq83Evqs",
  "key1": "55em6DvRiHXeFpqdPGnWM4bAxPt5eXmRVLnUrinm7eko91XMuEhtb4JHztV5ScxEk51A4Fww1q3jYo3dup9VDgVP",
  "key2": "4aNNMnDgr2FuoLAcnKjQeWpAhoMtBsFh3NkKRxNkNbFt2m4hx4dYNvo6kXL3RA3REhB3uQYBzJHm75H1hfSKYsuN",
  "key3": "3uy3cmxQtxEpjC3EMQAr69Dkoyyo3hgjE9z9KAaMHRhRq7udkxyosrLoDBzxynQBsPGgqdxzpffbYnbuFF264oEg",
  "key4": "2JX2UKc2ZJCF7WKRr6MJWQdFKmj43i6Qb5SHFC2kRss5s73e3uvtRCvkDd9G5nYR2naZfSMdgGDsKN7P2NfZucJz",
  "key5": "3gfzaT4mJKNt1QqpMWZ7TqgzvVvwG5Xue3u7Lg2FXvFJdkrW1k76hVXH3LfmRGcu2W3yZj6vEvQNUaSMrT8JaQdg",
  "key6": "3Z4cQvZx2tckDY2VCdMXPQTijKsvqk2vYu58M1YkmkaZkWbiE7rMa3BCEn7jPdKUnYnAYLtntF3Fc8oJ5LUv5YGC",
  "key7": "4G9qhPkmNo57F4YXfxH437oTFKr4f1B6YTA7zH21g8g6AZr3CDwaFTQsanxzAD3T38Zd488HT2Fts3pykqqEMb2r",
  "key8": "2fXMhWHjUFuZbL6evM4ttbfebD5iEAL8nSm7QjUUT7VWX3XJpKQRcJJ96zkGVdNDkWX8X91kPtMLt6y84LeeEN6d",
  "key9": "4c2bc5gemWfDFofCZmCAn8fKuXNevjUYkFfk3Yz1bXRVx3CRvasdUagRPXikQj5yX2vXmsU3qaZGSD4zqSeEJ1jf",
  "key10": "2NSKhCgV5m1nJbYFXamiNas4kiXM59Dy8BYHsyUZN2ChVbt2JxvHwtgPexZ3dzDivMNQU1og4aiUCwDfC8qzxZu4",
  "key11": "5NxF6nCMCPv7uDPd15Wt66HarpQ7rsAN9ACrCLv6kS2juyH388syfzB8sszee885SpiApHmq4jdaiBUb7bz57bWR",
  "key12": "2HgkWcK4NZLiCZHezxLoJiRThi6FPGN3m5R3FfHSfQQSvMUetFQzX894eSyYexk2FDMxoszzu6BmEQm1FGCwdLdj",
  "key13": "35hxkZtdAkDzMBLZB7zRmAip1ePenqCtdBuTUVrQLspKLXC191zJ8TTU7us8kczdjZTmqSsvwtdF4FBWXUW7BLVP",
  "key14": "bAdFWZoW1ZyFEEDrns6kXWHtk6Lw8TeTEhd3hYwiGbufam8RVUAF4YeLyCTB7PuZGoasov9qJG9EXZTD3cmVRBe",
  "key15": "5iYz1GNEBvsmB4JeSQwJYJUHGK188D1q4U8MQkXyt4EoUcSBjAXMzWVfYS1FvVmRPaZ28aLMDuquQDmZ9oHX94CE",
  "key16": "4rxwkDUWoXLM6TpuDSkfPk3YGPLLK691ifW5G85V9wGd3WhqRrnWdvmMGmDixtAJm3pAksWjvbxif4UYeQfTpFUf",
  "key17": "S8QEvvnB1yGYqmQ1FREDHYFzjSieXoej3ryNdffCFnEqF3Lt4LFEEiCaC39FG8uAdRW9EdYhhrEj9TDhXNCC4wz",
  "key18": "pJN8oNo9VEVNhanntrjw2XPQgJSCtRG7auVhsS11UtFzncShRv7D2PUqm1iaerbGUEuEGHFpf2f8Hufy48kFRYr",
  "key19": "4R1e16m9TnLQPBKenofo5Bo3T1T3BxBGVZbD9gje1HRM4286sdVr2qSnWF1Q16TNfXEbw94cfKf7hcppsyjcuQWh",
  "key20": "5LrHmVM5DW2ocGvKkzSvWNuUFjKzhTkUz3UANrH3z3JmukVw6CamPXJJy9CFS7Z8GVQWL8DYYpYq3d5CKSTBqbSp",
  "key21": "4TinUQYbwe3G6TosGHSPdt7hT9rVARCVoJYNQ1BE1sbHcZbbrCXn9fnhT3QzExwGzw99uEEWmLLhAvjYS8VZte1E",
  "key22": "2RJgsSj6agqLZrZF3P3nPZuZkdevRfCytG4jygn4vXxh6pbfyesjBX51V6rahPtGpkTQi2swWW31sSyyPiLDRcNE",
  "key23": "2DDb12kGG59U4ZCdzdBKYY48Qx2WU8b5uFXiKer2dKsp16t1kTY69UC68e3wXBuwoftu6yhbhsHTXx3PSEGKYvZr",
  "key24": "2gTZifX1v7Bukx4MvfXHnmEuM8zyREcmB2kudwNHxF3DLiztQ8xqvampvbKFYVtYr5sLjkRBfvbw4UM7UUzAqoLb",
  "key25": "2tcjCEAMnEkXHb8bfRDEZ419hpxP22a2vuEMAyB6fpBYSzA9CsRA3zDif9PFdTfp7bpzLaEynhszCWMBW18eQvDe",
  "key26": "48DZ5FSnjQjAt6HU5uk8ppowHPN6ncBtgdaYM4A8hHzeozCEfpushzJo6BX1iT1HTv1UXanMHcTWwMWrK8m9qo3g",
  "key27": "3JMCQwk9mDL9UmF7cHv92Gus6yJ9ZCLDPoAdjFAGnGUc7jEinBzFuK2yhVhNbPvCSttjWLckrxw1sW9MVWUHLaep",
  "key28": "eoav7cLawHK4wuLW6hTvQrzZJJfJWibYeowSVBN5mETE39c2q9cqyP5HTohkUpv6nCihDsKnW3sFoubdNzNpXXf",
  "key29": "8HT9YFXC6Sq2amktSt6V89AgJCXVbFLsPVbfhSCRokQdRYidpenvh6ZEzU9Y2RkcbYpYAXpzYXHNbSm1NpMW39b",
  "key30": "3eHC4Z6893CFRg3NtG8ZTCALw2gbKtpXbmDR53Nv9HrkbyKocteGq3hGDBMJUG1zwYQBQp3UTw6oGSa3dgU6c2f9",
  "key31": "5UVqRPAV4SPdn3GoHkPNwVAXj6V5kfFbvgzCieQRv51YwpRw7DBZMpPjwysNtZr25EpzSXKivz3neCqUWhWC5B8V",
  "key32": "2y4sru36X8mHBtSU7hzxiHkANuH5h4egLeb2Ec5QCT613euXp2BxMj5reUSS52dD21564DpyiBFDo3QXcEamdRgJ",
  "key33": "2iT7xHqLeqF3n9i4GvjoPgMiPpaMkrqLcWV1vaVF1GPirBVXza3Nm8KRa6uUFAZ1tfwEcfPsrZPXFThvVcc8uNec",
  "key34": "3hH9hXQygY12ywwkDj9opnrHLECjg6t5vJYMgKeTTLFmqh3nceAh8iCjLx7ukSKB83AwSoLUZx1r6V6wnXpS1Pf8",
  "key35": "2ZEZygreFxvjEahJYX5nXxTbw512Qrb7QiAP4Q1wwU21mH17XrQRxM7Y6xY8jCrM7BFDsNeWTB2pKD2U1LZeY7vg",
  "key36": "5GUFTE1VLXZ7JQitKqcKYUuor9zSPhZByWN4FH3TYhzMtMhSfVF8Fb2EywEuAxj3FHpifnvgvNrVfD87dqEkAKxE",
  "key37": "4bLKeiWMN8KgPHCdh639JVfDoNu7N5tJ1tEUWgLgRoW2rjZtARXVqA4SHznKgZ3ys5GMKWdDvuzPEokTpRzHj6XD",
  "key38": "QJ483T3yzXhpyXheryK8yiXdm4n6BjXMidxAeJWfMfZUJhsLKG6WiMESrTZQHysMLLeUisuXChCHE1mRsJfgPF7",
  "key39": "29itw1dyWW3rs47unTvZS47Eyjd41pQHhRxPqXtTAzpHBkJZfPt3N5stqCjM1b3eeCX7G1ePEhxymton3vPdhnGf",
  "key40": "4KzJywAjNPeVDGP36JwaXw2VDKytGJftgvtHjDfDsVKMSxnu7HincgjcGYegczsiViy6Sic5YrrZ5QF9qTd2UH4Y",
  "key41": "3Gw3BZ4v62vpaozttjVAt7p7NgLtnJ3TZUMg5Cf9VDAFh36aGoaxU95hZ5ojipJwb1Dq5Wz8r6cQgei5V6PGNu1e",
  "key42": "2UjJEN13zu3RKGDLtW8xnvEtY2GCKLJuNjFmRmTExXry4s7VxeJkQN45zniB91DHMib4kHsCig3wfxxStANcresj",
  "key43": "5dtcDNemTRTdEUDduTcxxrDVK59ZjY2bbnk2xHoGKywY2sKrF1o56WddrNHtAXJkYrEwkorpPonCNr5xxvRBDM1Y",
  "key44": "3D6Zo5F5YSAWyykp3qoSnv1f2KFJS6o9QFt4fHYSqyjZURiczhsy9ohbMonr8NbD49dUzvKNXJodma8N8gUHbCHS",
  "key45": "5pps5ZPxey7sUSemX2zc9n7KwsgPiXgFqm8hKmy8LUeeE5LaCJLndHXq16usn3UwHnhUJVyA1NJAcdk1arfcSZqR",
  "key46": "5mLB86poouXayKnW1XVQrzFMUTFKPdDaDKieRW9SjUPt49UG6rFZs5STfNGU3NZz9HpJCN9bhiVgT3NAEDo6EqsB",
  "key47": "2ebaTrVcJ8T5nL5AGti9Tqopuns5tFppQuBZ1HxLXbgmwEzgsShYwsJknKqbLwpyUya5F64Xea7HReti3spNXRtV",
  "key48": "4iinUcZU9HxNZ4t9xzEmibna5Hnb518KkaUx33AjHq1mwW2tCbr77b8GTjY7qpJ5ZRgU1jZdTg9rkgvxHt2j4DFE",
  "key49": "3w3YZm5c8WEikQjneCQLDQ36SeX69WeanfJo77xDaG41bmnUNyDphYcSN9YnRSb6RE9imwzC3j3qS7Q6MBvXZLQx"
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
