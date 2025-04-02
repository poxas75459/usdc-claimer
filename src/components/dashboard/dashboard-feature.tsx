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
    "2sjRrViJYyTpsAa5jKSQVsqTuZDWVybk2pKWaLdYbyrU4344HvraApfSsWYDHuEsPYSKwYAUxR6CJuB1wDYWc6N5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a9wePUzEcu52Bf86mswUKzjPaHATZ49XvsFS1MQgkyRsLDeMjJM6ocszBskzkRiJNrsAd9VfynJ3Bq6T28coNqZ",
  "key1": "4jFyS2PZ5RRFx4Rntu6iQ1jh2183RrHeZZoEqTHtZj8rXBij7iy2tXmMBQTevuww6Ua3x9rR6pTUaSY7bwhrJUQw",
  "key2": "2hEdy33kW9zbh2GXoaCeMddJHDMLuZGfsBQSTFwaU7VQzhvG8U9PunEEHv6gS2pmoHQ4QBvmWJ2yumwNEHvid5o3",
  "key3": "sBbeiGTeCNTxvcUTDozjPPTEcHjtpNfePVQsb3jcsfYT3xdeTjFRich4k7n3eUKseqbbmS161GqP6zPZCke7f9k",
  "key4": "2obVqaAQ4H9JoAsLF9nnyytRFoiCkmGAt6PTp1v11b8VA3uQNVfwoGrQYP3uAwQ3B3sjWSBpdLD8XE5uRDNE4Vkz",
  "key5": "5qm1YZA3jPRddZbmfvojRThVMFPghTktf8mJBzNS42R9CS1JDKAxNWFei9czZiziuXR568at5JLS3eSx578sApkB",
  "key6": "5UCMMDayxPW2eB4rYFb15163iP65KFQMMNc4Pdksiej3VSSjs5YEo14RxrCkk6t2bWA6kAUWk5sQpqFQtwVjVMg4",
  "key7": "4qwm8C8ptZsqQbszAD3Q9ubQWa6eaboDkSLFmdCk4ozBpDjCeWphcUd8JzdWTmd7eFbjewBmauFsYtV656ZzTxZ2",
  "key8": "2kcMCJEPySWcZ5k8KtK5RtJYvtoDDcduf7Tu4ePWuDExk9Uf27ekzJ17mEbCvMKpCi4c5KcQUGYcnDPamMcjN86e",
  "key9": "222ovf11wbLJN9phzgTTqEqZTKxRrbFrZZA1BZuxHUnpFpGtRemu4bpwYHkvERisEh8PaaoVwrbeKyAmkFfe1a12",
  "key10": "5PGonr1bDopUmFnkEm1tzm4GSTG9FVrqcFoDQiGq2BZiwT2Q6koZheSuxKHUteP5vGWqZSoSDo73sVEY2FUr4Yjw",
  "key11": "4k79LcuRCHrKWLRugh2dX6GovVRJtuNU9EV3MZmMBtC9Tysjv3k7mPqAk2H5297Q4rZiZtR2WRFELTtFUfRAwHGX",
  "key12": "3zFDaMhvwEev9UzrZoVyiT1evv69StRkPp94MtHgB5N1YpM1DH2YgGgoC8Rbu4bjQqjzBWi4C7gTQ4nccpTnXoGN",
  "key13": "5gQAPJumgAoDQM4Uywip3hAoj2p4WWEoAqdSoWKce2eGobQdhyuoBtbn7mjP4CUQTJLFFWf9vfPfaUzSKanCgUHX",
  "key14": "4a9y4DMUyr7y67D2mEcYZaTXmkMx4SLLVpbctVKpFerLrXXC91FugsX5akn7S7KJ9Envk4qz9piaisPUj24fHz7C",
  "key15": "2Bfj2qZ3YarV1VPqvqDmrafdz2zG6eDohjprib5EZaMmZKHd9AS9oHqzHzE3NUSMDXz7M1ZY1T3Yg1LcHbXjrAMb",
  "key16": "LboFN16szwwecJ8Lmpd5XouKESCEXkdA4eYqAKvbBp5vjGYZfBfwZ2cSn2tmwVgJsVW2bEHnBhwiM78BZHmxxfk",
  "key17": "3ibZqX66MWKCjvgfjT7xf82vcM1a3HQ9eDkrA8XbVAkpBjserHW3VhVx7Xp1NBGx3EmFYrHzhEFd1YzAGk8E2VeH",
  "key18": "1KR9cBoDU3GNcnknF3mTjYm6EH2UDYVEgUdM2FDdFGViXmKXRaYfuw7d2oCmyWtorpj8ateu3knchp13B2Z2tGm",
  "key19": "4GsaEeiews7B1TAKcuYsNHWLDQwy6yEfZ6rYwhX2qqu78udm5ZAr7yLR9iXL3Yo18gB26DTUghkMkirpf9D6Nk7R",
  "key20": "5AHXdy7kPyqfEQH86kAbCFt3B1fGY2aFKd5AQA7ZKSr3E3kEvRPRmXPpgg8GUnxmUq72HprmdoQwMZdWDipJvWDY",
  "key21": "4ZGhjd3vtetQtTUWw5mATajAthdqpZPfcJ2LZdLFR6RLQtEsmaUoWaVZTR9gPeFTn3PQtcVaNGkH1WHPvZC1nWLX",
  "key22": "3XFMrH6mFHuUnsCEfFXw5pMn1ajt7gHgAni1TwvFWVQvu93r3UYqJ7FHjwxvva3k6g3qcTWcvHKYY2FgZJu2gTRm",
  "key23": "4ysFKSLZDqLCsUPydF5KcAXk1VPfSifKa9HLqZGAyppyMw8Li3zzTA5x3imX9KQsLuaYyCCaSmCcyXkVUAPEymNH",
  "key24": "Sw7DM8vhQ78yJiHn8Msg6UnaKdhyY8cHFQuUuXMy6F5xDZsdPsWdPfZjP2FUGjSrhYe73TDgnjgZZnfRRJSWj7R",
  "key25": "4yxabicJ7hA8Pcdrw872aoRDpRijBjFxHpykSnEaipUkADNa3eCDNbkpdLvbMMmmEKFerbtSeegxZcg2J57HWnv3",
  "key26": "2t1Nvm3zcRtRGQ8a3UXFU5StUKVUQsDyZ3vrfzcT1ezEBfFAYTfNFgdzdfFnCs33eRxsGS665RZDcQ4X7BGy7tV5",
  "key27": "2qRpnxU9coM57n7bchLqNwz7pWBtTAWVM6DG4CgNPsojUj2hbWghBPrpizy5zmEvWUDLAVdsu9zaNA9JcfUKWhSM",
  "key28": "ux9WM1KCArYCQEqrPm4BnmnFdWLp5RpL1sxwp7suAHLQzXbpXUnK5A2ofdVLNYguM9yFmnot7WXbd5AGnNMMmSD",
  "key29": "4YmDLWgr9DKw31qyPtsbstmmmfgs2jbnYigup2PiPKPWGKLRd63Dh7b9DxskrtWhLH9x8N535fnp3W9ftrq3VgH1",
  "key30": "4x4vb3vnPjEG16LpQLZ2dTGxvTxRxSKYHHWMUoK27qVYtFJS7eiPC8BhK5mw47cvFTHtqgddi4N4JsT18wafbA6S",
  "key31": "RoMrktmooy7TK9ktGioHgRn84Bm3UK7GoeESKARGhyByS8wJaf1yEXxPxZQAJS29ZKSr4q7m7UfZxdHJH76Cv9X",
  "key32": "5m75J3eSMuetr5e9ctncSajN2WAC1XHutLRvVU6oUXgzQv9mefms9F2CGmPFoRYfJQPtAjMZkii2W5h5HL4qBYrW",
  "key33": "2CdVoEd614BFmjSh9bSMooBqknFgk77d2v6fA7tFA1aBTMQKW2Ukxn5m71jUtNL9reuoh6nzNY7LJBYK6pSLuuVu",
  "key34": "4SfBdt1p3Kv4VhyYnGzeMC9D7fkZgq39bATuP7af143CqwRycQ4vvhf9Way4bkXN9aK3ot36ZbfLiNbCqSqMiKqW",
  "key35": "FsTj64v2GASFAX3PFC6vCKFKZNA3HKF4NJ9D6vmByQhcYu9RYMtQaLrvzJVuRKS11r75MuHkUkj2RQpdjn8KWs8"
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
