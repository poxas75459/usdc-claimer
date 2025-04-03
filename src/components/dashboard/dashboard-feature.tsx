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
    "54kwTu6J6Zev9kPyKedM9EAGoik97ChKBPL1j2iR35pjiJe6KD3BNejqUEFSD7ijXCyp419bv2mpJNPY4Sj9thTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rNNiZeWhEvvY5UDNPbJ2dhWtzyagMGWPW3L4vbqsrcKqRgAeikv542tfWJwK9jDpu1zwKpnUgQFhAFPbHUK4467",
  "key1": "43nJ6TT9ua3czyPn5YY5MTW6ESeWrQBLDU6hP4MhLUo3VcDzBph9na4xq4fh7kkGrvM52BeWBkkALkndFMDpCxTW",
  "key2": "3pfSXoQu4tkKUq1VEhRh1GEXBUegC1QkXFTWmv3a8PndLMPiArazn72M3QDWkaXMD7s4oZKgmC6Qp4YqtiNmz7Gx",
  "key3": "5QCzTE544z6bfamLRVrL4UTYnDV1SuPfsXoqfykh3J1S7ksmRJH6rLKoTWbFBZEN4Z3PaqdoWrkpKuQodYgefHdG",
  "key4": "4AV4hxFQSQ9vRe8pr5cEiipmuVBUmekeFHXbhvmAiVZ7iVAy6FC1T2KkaPw4m7sXQs2CJenFNfpYmmMHJ7q7FVzX",
  "key5": "2QrjNQf4z5HRL5fwcP2rimhXZfSrgFJn7j8avSgSJFxEv8QYZWDpvRGyeqwwLHP583rrZdYubUmQR9XQs4ENRfqQ",
  "key6": "oAWow3UjGErACUfhvTedCjdvp3Qap1DQekYVjpgTmL2ivwR9A8ahgG6ywRSqs1Hcu33csztrG3Y2VvCi8Je9LTQ",
  "key7": "2mJA9X8ASmJAv3piCAbwNyWSeNDe2QgdX2dtgQE6bWmyYSb4hV9zYMNjyBxuJ3W5V2u9C6QQ8LDPnJc9RWU8NXzT",
  "key8": "ZYDiYZsz8wLExR9EegbFDbJeA9NjVwzusx14ezqmFnDNDM5G4YfJqfa9ZySZ8B9E59bfCfxUJ3S3taNRajqS8J3",
  "key9": "1NoYX4QsciK3jJ3pkQKtnYijzbNdLksbYw4FiDje6mpqZt2CA41BiefMNkjupQKqRPnGfTX3nAzLeXXJikVYhg6",
  "key10": "3yyqvsz7V3NiWFe1Lzbxb5ccd7st4Ce2zFZeUTfhG2czTNhYpA5YdHp6hxDU78somtSdenb5LMs12DJ3BaPB9VSj",
  "key11": "2Ygs6pQPXeWmeynAN7gu7KgRTZ2jjfZRauq9bCzFDcWSTc4BiJsL9U3U5bMk8jdmMrDSVtBtha2gmZjCTTYwECtb",
  "key12": "duJ4KAEuiRGU54Pv4ifGKZSdtNxZPW6u6BTUNU5ER75X8tLd6jcmPzjFtHkNR5SJKbaU48FhHX1uViwPU9AvVdr",
  "key13": "yvR9mHAt6YHgV2PCe1fQFWXTmzfAjU1JLug7CRi3khzn4eixBprWXpamCw6XF3FVEdokLZGuNraBWx5oA4XoNEG",
  "key14": "3qKBfg95PR5ibGmMt4Z3KooUr4VK2guRH18C5FQdmrXGFpWNiBhfuaTgdQJze8mMQ55qJWQpqjn3kSfYf5CYYkqr",
  "key15": "22GMTZYLfxQGtHaWzhpGvZ5FkhLKMAMSkGi97cD2BG7QEkZAd8TcNpitoZJh7QwusiNok6zPdTbfjzcGt7nAqCeW",
  "key16": "3pfcjZfE6rL2NUZZLbF9PcYyYM2AM8mtQEwcewXyCSDKwT4Ho1JEe1FubTnTbSEkPqydzmWbVP7a7j8Q6jdiHuHv",
  "key17": "5rHN4kESqKFVVi2QtH21QjdBncs1MMXuqwoFZJ4hkfGQCRh8ZNC5Xp1ocVYBKYgNzoAMHWMhnV2eh1NVX27xf5ww",
  "key18": "47NwRav31PgyM1yGmBf5jogYBngBxmAuYDDv6kyezP7RrYYF6YiTzqf4iaUzxrkYjqxTyrdzzjUKvqqbJMPyqARd",
  "key19": "42bLRd8Fj1nNeUuRX5YH3KdSec2U27kWSgcmTA5LZKKr5ZTDds4vaoRvQxwnRH88bBckCY7g9QJJrxvT8Dz5ybgf",
  "key20": "5mWuZKJPzLZkHH6AzsNE35iYKjSDWZ5s8ogAusxCY4gesH8HD8NagE17VYC5MfaRJbwBVamCpujo1qPuVGQwDxZr",
  "key21": "34N3kcicDi39cJTWbocRezk8VGeifqLUbfPtJGAY15XeYUagbT11vVmS4zYf4JcHPdfBh9bAVTs5DYLGwrXMeELJ",
  "key22": "64BqREzvfQ3aKFE7vnRoJnPozKVqYbWVccX7qfdHrJP1gjfvvRsejZiwETzb1jYeQ1ZGXcpEVahCaUDyzU94WGK6",
  "key23": "4Sdvfuvb5FHLDSRSGBbS5KANnHFkdBNLHeRvqLMJzX9bdyVshFBXnrHHV2wrctMUrPHmoe815GRRLhYndGyDo36L",
  "key24": "5ZYxNAZdbPKzswvz8spDyBR1yYjaguPpTHjjPV9uxvgURd29cX3fKXquRpnNubzLVo6NFxvUJ3xuc1nwoxKtSZiB",
  "key25": "4nSL8yQxZXKxTQJtjWTAV23wUawwAzmfDA39DguZeiHAVbJY49tVGhoPcxNHkwGyryn5j2BcT1tQjN5C9SVB4F1f",
  "key26": "4iGjfbffwvu8oL4RJivWe1gNLaGhP7jnWNdag4vhFLiDpPJe4aKcoUnR5ee5LWo9wMC67TAM3Re4jb22KzUT7A1D",
  "key27": "2ngPNPJAntuNiYkHdeEbxpLfEuwKn7LDcDvjZz4gvScMXWQGthzm2WxDuan24N8NmFvqi1exkbfJbYGDrqrkNfyb",
  "key28": "1XZnysFCMeSMCHwi7qhQF9jrLYDxzk77iw8ArKrCSbDU984mnja2YoSvKBb3x1QzmSG4vS1idcq3TeEyGtRrumk",
  "key29": "5BhyMQTVmVoHggYZyypqkkYcPVhEfxpHAP9oinqHFrQqQKTqnj4cV4UC1DKaxDkdKoSdpn1WqMERA9rbbos1NYmy",
  "key30": "o6FEJTiuSAzDdFiLzYkNdXW8FKwgMm2fYRtWh4TtSoFYoRRTribeCLggfkA5dtS5RJkBd2xpLsdTBrfEoz1kMEJ",
  "key31": "3TUsSAcXNG17V7E7MxbPgSLphcGHJ1M4BewP4cUyfFFYBZxH7XzHHd1fKF56jKUQxe7pi5ub93b1bUHecZzzodCH",
  "key32": "4ZVSynzdPjb64uwr8K4mS7iS6hhPzmmeedP8Y5iDLKTpGF67UkAZbdh1fcrfmpXnJnU2CMSN92BtXg6sNBsC23fQ",
  "key33": "5mVHLfhMjkDAnJNfMmnjm8MiDBRM6XvvJ96QPCeiV8tEKCoeakEuebQqgXcdNPh97HtHAPidKoJ2skMhc6x99PRv",
  "key34": "4zxESbkmnv9MXhz7SVoKzX8GsXajCFGggG2nkRKfD9GBEEds8aEzPUPf4p9QJWU3YSs5qPXGKdzBE2u9ubRHr555",
  "key35": "4qN7CJxpPKuANH1qcWshC2VZmDBA6J2rPY7SM7SSng1kLi37ASkD8YTnvapGfd1DhiWnYJmEwvC6HJcG6V3hqi3x",
  "key36": "2EmaZhLq3KApkufZQhjFue227U9izVBjUiKARyFa15FSKkoJkL9rpwDb2rN9CLsHf7hr1G8FEK5xhH37zVdRG99U",
  "key37": "2nijbr6HrsBfKwXh3Bin9zY3w51o7MiqvKhUakurN1gmewSWDQMM8ViiTAfjZBYc3NyrZCboeuqD1j7RUH4sK28V",
  "key38": "2XcH4yHHU8uNbHdeYD49PmEBhbBwaJ5XtzyhXbPtt56znepwiNkH9p67HGn5tBGnu2V6fXcE7hGDhJiMHX4j9qnu",
  "key39": "51xXUoFyPFVcLAZGsKCdHXTu2wrygoC8WN83SNwZNvxKogy2aXRCR4S2UswBTZRB5FMdcZuSSAG81qHrBvf6BMSk",
  "key40": "AgbiMVzQnmaapNUZi5aNPowuhA49fUBnCaPWdtyz22PCX8LCJVzme3JrfRAKqShdLL2fdEuYwZYrBcEmR8nj3PV",
  "key41": "2uX5grtCMCQALysBdgbiRuXfJKzZSoVdbRKXCcSwVkx1qAJrNg1mKbbwA5od93md2EgVEqAYTtsXLQwnS8G8A5D8",
  "key42": "5TN96k2o2gLgQtZAFJWRxF51VGBP8oc4guE1Qd2qnJ6NKzfo2rGDTSBSofJBfnu3xdcoYgxbeAGjhjq6TjgmSP26",
  "key43": "21Knnau5XnJLMR5EqMGMVmVjVg8pwZ7VcqXZi4BCRmdrA6grZ6F68mmnqZQazQ8vLBXNU5wCfgX84fkhuetVQzCK",
  "key44": "mg5L3HJP8kbypUXb27s9uEBpPJnd77moSUfggiSkXw2g75oMTAAeA48wNr5pKtEn997s6zxZ1gwuip6n8TJccsx",
  "key45": "4LgSh2WwJQuWgo2uuuX5f4TSvpPp7uJZfPrvVgUVJwSz1BySBp8diRF39Q1pLMYwgSmum6iGzXbM9uWZ3VDGgSdi",
  "key46": "4WXCJa3xSvi6iueNCjXsdqwBmucJqwGqW3SZJTReqejnesYf2kqRYR2QussxVQsgCD3DC2WHva5m4YKdhARcfvMo",
  "key47": "qmdtpVBTbxn9SFuj1xm7ogAptmdBMszjdHUkS6hf6718kzwfqaMLV7wDniKD1KMZNaUJL46cQ5YGvQmCqAeSbAB",
  "key48": "fwQ3wSNb59zXsoGF3W8D4xjAbtvLNzRMs2CmqzHrVRkCELFoHT1nmwNKXMeG43FWpRURiEZ4LZoseCZ5AiYc26o"
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
