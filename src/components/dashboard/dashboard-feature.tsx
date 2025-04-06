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
    "52Xjzh24bTgztuLNkvsvzdM4kJPRUCD6mKDj1RjJxTNxmUKtEddDwvvsNDDF4p5VfUniZVeKkRywRMbQZnezR3uw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a5nyYTL13XKtjAfP9JHayZgMBTPAS2b2a94GvBHUNY97Pfy1w23J5mEos1q8f8B3etMjcqauNCcC8Ti961dD1n7",
  "key1": "2GNPZjeNZHCo1jSANSfAFXqhpn9zhmniwedoxK9P3muGcbDi2zWm15hdp5qio3hLys3N9bhHEeUCs8ftk3bGN8cR",
  "key2": "3DuwJStRJpUouKU9jyBuSQqLit94aUkWWSFbW7zsZiLFxPSsPDT4pKJ2td8NSN3W32FUeB2Eony3RhxdgSoBGULC",
  "key3": "4siGbfQXTCBGXKUd2pNSFDLQQCjmVzueXd4o1WtkSVz5dzceeifGPeALRjs9GDf7DGro7S3aqoKXC5wJ2NqGY5S",
  "key4": "5gXGTCjGGLhKFErBowbetNgPNS78niCesd8KnhdKQPiDo7andeuML6pqr9v5h4NkgPM9barN8W65dfGnbViZyFTg",
  "key5": "473hPdXcgLp4KbtgRXNKBnxghUWVMWg7jHewi4ZzPrxuRPCHjePQcAGS6Q8BNiepW86YQ6pzLe17PqdE4CLNMNez",
  "key6": "6Jc8LWWXV6qtLKtqbKupRDCCTuR4VDRhkLKWpJGrBgMebwB5Re5USEjGBMNi2tQaTeYdmFxi3igSGva8QNEsAuv",
  "key7": "RjVwF7jMu1SZDXaTu7FPgro5faHcqpr4FNQvp4zrAo125RxDhQZGD75bBr3HKha5m7TvAY1HoAk6w8GgdmqZ3XE",
  "key8": "2VRYtT8NbUDmuoLPL43XL9XyJ3QfFW7VSfftqz9pxaB8nLW1eY5bxn38y53c1JXxov2qPG14Gsff7qAsEBd5faUu",
  "key9": "2jRWRLRUohLHWrH3r3WqYevH9SRQqyQ3GxcMv5pqTJvrLxYz8JY8K4Re4P66z1p6hwTF9r8xvhqBEx58XDQHKg18",
  "key10": "4vtSSqynB54ZqPH5AaLX2Zx874gPESrGyXt1HD38yJ32iwAbxvY4bRHULzDKyBbpfQXPWm4FbYr4TcTfQRLHKLpU",
  "key11": "5emEd1Q6PPykKF3YZqziLQGxAiwZiH26sYF6fpJTHqgRxFyYAa1f1kf3CENTzG4xSEoE7feVEwcBdcMaRjWS3TsS",
  "key12": "8rq6rZFfidmjJb8o1HWm7HnMtimE4vc9pgi54QwYurmL4VKq2TPMYVwaeaC5FYJuEERZULFiqbf9tghtTUPAmV8",
  "key13": "3tvydVyiwq9c9EDmNACE37KbexjGtW75Na18uSrMkVKi3RyWNaZy78L1jzRmiVEqSX8g4MqGcb46tDEPw4vDDwxx",
  "key14": "48nw9sbdqQi8yzuzsjsGXp3NRCVsiaUA98isYGXSqmr2sBzNnTKsQ7Z3RATKBjYECYv8695kmLWFE6beGKVKALAs",
  "key15": "5NwJekgm1P2VnuXa2DLxMo2VjAtYaacvcg7WPSEEPasqmiTPoTDDUNqAsSPEzufsVsJnzjxGGo18Wx57UmETLoz2",
  "key16": "4cf6NTtjiSAbbvkXTWCisg73FYRuLzKL5U1x6LXnh357RcSwVp8vsSCdXgE3tYEPpMiKH4GSJ77DAL4rCVL5YNJX",
  "key17": "4byzSEfyjJadCnhvXNTpaVUsAQm24zY29td1xWZ5rgTJrCnF433WZoLdYumhPS1fe5vx4mz5x6QtwJmrW39ASEys",
  "key18": "3LLUYfz8pvmHvR4BVyNx65y4E9W8ExBqWEWWVUWt7ceVKuyxss99eAUv69nC876xi92m27EeE56e4RYkqFuGgdwm",
  "key19": "284VTHyGJo6L4B9akrVMsFefpjEpHdfzwRapwM9syWSAoFbzvCLUFV5HkV7mtsVDoN2yHtcD3xZH311mtntKDZ7T",
  "key20": "5R4jTKihUzjMfWUmryo2eYcHibjGcLVYUpibJspuoiWyASvMgqLF6BKcc1AFsGwiGTocj9cw1u883SKiHGgdmdVr",
  "key21": "3SZNTUCpgwntrNsETYBpLzCg1mkKKDco8Q9qBLQ6mQYj6g3vFpBZjxjRfpVStwotwwDoMzFaY8GhJjC8Eo3P5rqy",
  "key22": "2jj4GvAowkDVre4XjNRZKmLfmPBKs8xCrhyhLorirWfmR7NmgFyV1kRsw24JqrEw3kTJSV5MAyxAjUU7WBtbwZBX",
  "key23": "62sjSbTQtGVv6x2q8tpjb1LNd9GNr3kDyG3GqdbQsh1ZJAyqXzFhCDkanXApzstiwffX8AyV67qptDMoaWozvyPn",
  "key24": "21zwncs4DdLUELjEEFi4WtQ2GoGS5m7sCTmrcf1u5BdL2KTRhVQLpx1SNFAkb9Nn1Jm69Cd3vTkPYGUb4X1pww8S",
  "key25": "4FuRrUgUTnKgVXQndXh9YCMQSyqH5HkVTFDib8CHALNaBXgRxHGiPVkS76QhtScg4o4LLKaa8wMadwWJ7DQLohEx",
  "key26": "3us5o6pWe7D69xXovn7sVBcmsfT78swcHbgF56XXPGFJPF8CVsNTXVu53fd5bTsyNUTJqqjK2b4pvB4FLpTGCT5G",
  "key27": "2JXieKHwcoyoADGhzjAqpEA1cabxkksBkCm2knXr4H36aV7m9mMK4HmFfcNurZpfXC2b5CeyrrdGAY39TWMg9ZVZ",
  "key28": "45s3wbgdPMvDk86KGqoq3vT16fnnuk4B6Wb74uWXstgdUBSDABaLWyLXaiq5AmfrG89yiBjAgYqEoCF5sq3w5nyJ",
  "key29": "5ErCRaUBWPQmaS9DivGjoVMMVebToxE3AmkbpQfEgh3pTuqMo5editBKCap7NV1ju37vRe7WYr8uLUk1RXYDnR9m",
  "key30": "2LFpJrJeFWP4CuVtnQwEE4TiooTWLwVhzeD1TAf5DnjT6wMxpDstazNveh6RsuYaJjiB2NHafHnoYNwGyPyuXGjg",
  "key31": "2qqP7PSX1mQS5HQ2MzfTAAhJ7g96zYakBZfs1MAzpwQqBbNK8MsQtzcgXFxtESFfGfuYnXyokKedi7GfUZaLXrJs",
  "key32": "4UUUrdekE29q2daYfKZjtXtG9qM5WH2isA2mfbfirWd2JYAx4eMajQiKVKN6mAktdMbrcheGT51nqwTVi92hfTrj",
  "key33": "5aj3H6pEpKoxBwbY7XM3f8u9XYL1wPT432nXfLiTqLTrx4XuSp8nsTpg7mxtSUNy5GsNtZvFtB2xaeJeF3q6apGy",
  "key34": "2hh6nCVwqZBdz2VDVVULafvbTwyTSeCSu31pEtPvpAh721eWjSdXDoq4DHEJRovWRQeQzKysLKJBHUM9QfNzpQs6",
  "key35": "VgPBsH9UurrFUKe14MUvNVsZYs9xXSPV7Xg7TfYK3qNHnwfP7R2tC4Rs53bXMZX19fboVegAy2x4GEjz34xU7CR",
  "key36": "2gH2o15fvJezGpFi78Auk5oaA8t1hzTeCtLBSsj3QZfPpTrd7qm3Nt4CNeMkrWkrcDXGeAPgaby5Le7VZxpQHsoa",
  "key37": "5QjixjAwXcukmsnqKeNEdTNxpsbG6kYDFcsCMf7VvsFE5FuY6WrePjGQY1918EiLwHvGJyafPKo5ou4wcN54Rrw6",
  "key38": "5odAdV6ipLMox8M7Q5S6xpDGCAKp88u8QhpmmJSMx2BTUjqRKwqqY5z9HxU86NhyaSRHuNKdtT2DAJm6LnfFmWX4"
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
