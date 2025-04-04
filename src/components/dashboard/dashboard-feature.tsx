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
    "23UQzFNZkdbzhe7CPHDRQLmEbzEpetLsVmr27W3T7kR1fhfoyJdNuzCfeUx3WfMDdX2E9vdihGZwQ69RSo4F6ZUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QmLFtMcFUAFHCAcCBKuuADVu5yXZcWu5FWRHmp6XB4T9bmiEEX9yQAYbrorZadS6rZ7meoYsbWE2j6mAqXdqzmW",
  "key1": "5mkWad4Uz3wADz2TtELanN1K3vmpGVS3RHhfEU9mtmd8mDZtgu4DgCattmEdjaZEuYqggevoeybXKsUJhr2fBwB9",
  "key2": "4RR4HB6VZNCJvrwW3AFuDQ494Ppzt2wnxZAjamUgnsK8Sdr9azi13zvoY9J8ZsGq6mYeK7AZ8QzoCUYmeN6aQczc",
  "key3": "5LUwvNj8wFR3uNDttECAcnfE8AmVs3nf8YJFvjruNh5sgGBtoYEY2qd1rWj8pr6NzRn3kT36hyGxHTfH8hkTP4Km",
  "key4": "2FAqiDKoR7gbQ9wkcfVFjzHPQGLgbeuxXQPPkbiysiSUHuLiCfGDzUhbRx1zN6jU2QtibbuaghNiPFCfVEM8q6b9",
  "key5": "5Jb99uMauhgff3pNiiDJNjnP5KwyWtc4W5SqUqRyVRUScUhfwuMdjDLhcWka2CRSqyApCzVqpwj7PHQpXciUTtGz",
  "key6": "2PJaWXEk9rWYtXxZ7AEz1u2MpZpnNSTCptCEewtRcrbMx9SwxCCgJz4gYM67TUme4QTrBLcFZc44yzrJCeW5UAkX",
  "key7": "5H1Sv3vyzHdM6QreFWCBxLUGS76x9dtbix6kBdeWmaJdDPYJ9nHU3hPLuDiit3ARJhGgUnsUBjZMWGbhvHcXgfLM",
  "key8": "4JgQBRszDavixMt5hgP4qQrvn6pq9YLZbYwVwjQRzQSCeHLczWJEcgW9tz1f6YjnfBCYRVVjguDK9y6k8aaL9Dzy",
  "key9": "57aJWcg34xKJhPWvwUzgP2fVGpBsEmcVeoNbpp9iVMgixNW35xmiLZE2p7vRrDswKY4pXjqjSkFEkmrnKekt6F8b",
  "key10": "4bs2Y6vyk1zfSv4FMZafD8FegHskxD75ZivxGApDhL53ded8x1M41EkjydzUAbFyQwod5tMvBqjptLsZgNLMF5NT",
  "key11": "3NtF3KJkAs4xf3Z4USHpB4KqsxdGrDCyVi8Vf8h1g2nEaqW63TC62hEMR3gS5dxr9vsN9UvKYNAmQPaEukSc2Qsi",
  "key12": "5VyLU8ruSZqJZr9CBvAiGGfT7xNxtQcL8MAkzbrbcEx1euEQ1nRn2iqS5d1rWKQEF8rCR4HPSAJLGJUaDcAHotZh",
  "key13": "5wibKfmU1PAmytBoLW5ei1xyLzR22Nebx7PjZwPt6Gq4CjgAcd1vQ24bf2rZhXQoZ1y8V5NdrQNTGk5BRcCatRAa",
  "key14": "4fR4FPbXuwcmkigKJGRt1GDM4agMxwoR2sAFu4TgpZT2RCo8tdNVzPEPK4BNghECwZybgi6Vk9DxJ312vmDaUJKs",
  "key15": "26ZvWfAXkqgCLZtg1Jo9La7xcfxYVPZnjtR9Hj4ms7ENPCbDgvnTB6VEfPkiG1oQTkpDFjcSPDseL6xJHXjFx2vu",
  "key16": "2uVx5x8iAJiMnHWDk84vG5fpBHnwSo1E6msYZ47andHi7pevHK7F9QdvnonZ17MwqRaRBNKY2dsKrNbRAAYuS9m1",
  "key17": "3jLZkrKnqT6XJkWoW1PEFnqtUgxveKCybpKDjpnfrkyzECh85gCEjUuNWT52wqmBuiGfqtWxNLpLi1BPbvjv3D5W",
  "key18": "5iMXUikXZx4y2iajuP9h6RjVcjmMb4fQQJTXBaSvvfoRQ8dhKaR7pQ5UibxSbdabkibEisRrd3PNCR6J1Bj71vzQ",
  "key19": "5WSGFrKhrLpYDXwcm9zAasDfJQyeDYb733bi4rTYqKKXthCcvEmgyum3DMx5Zp9ekm4XvVE2GMyvMbrXSi12WYoJ",
  "key20": "2NqrRX63HvRjU4V7NzBD3M8jYPZ6zrq7NW4SRQ4gHEwHCHrmBGs49i7sDJUWUoDniSQgk677moLVjYXCGR3GWdj3",
  "key21": "5cRLwznLgkhYgwZSbs5Jf16dnggEEV8z7DGZEjDGp6zHagJXR791HxQb6d9fQa8wdWZunEai8mhLoN1yzgVfkBL9",
  "key22": "juxCZmZcCUn2HcnuPJh2TCXwwidBg5HxtvkMy8cY6Tqfgwbr9Ym4gm3ga31JekjTo5C8aohQwXH2Z18rKVaYm8T",
  "key23": "64XtPBpW4AEZTAEp4vFSKhkAqjQs3g8S1PDvGamCJ3o8iM2iHVSEkMGZbWR7TXknPW8Y5kztuYuG7LuhVDr3RF3h",
  "key24": "2CePaHnuJ3RH4uv8Hg3uwNodrmUsnaYbtr3mtzRsKrw4qoBwBVqpwtF6V71HkK1fpNmBH6PYCbskaYwXC7H6hXNj",
  "key25": "2gVZD38s3u35KAciga8J6EJ9iE8fUV2KKEuzAUkLUtzXAFxZj3JngdwS28vPDg2kvERHVf1KAcvk47zkPNWSGRCJ",
  "key26": "3NGYHtWXnh9vqQs7ZEeQCyLfEhizgneSc6Ha6fgEEyWwuY8S5gvS26YiDTeUg6Y1eDUV1yDj3roSFBiy9Kbpztvf",
  "key27": "4VosARbmoeQJc2j1mP4MXHaFmnfXJ5eke6StgVq9vNh9GjArHT8pNtVys78bjWBiim5n616rRU5C1JmRVeyEZuQg",
  "key28": "4uc76rABwmQp3XtsaLWtQtsJQN9GHvTNs6Y9jERGhTf1VLfYwTLAGqt3veGe7Pw82jTCmgJUTXUt5PwEeQovQBsN",
  "key29": "5CJqbC95xQebQawCQoEkL2r233kkv7P1JULBxkLn9b8RanmK3te7R79YpKB5B6hbU6HnuHYv5DWZ71q4nSmaxvTM",
  "key30": "2vbMqH8QocmGj3SxJm5SUAdHAssVn6USJgLBMUKkinDQED2TMiioKQE4ziRmEwZjPF2J94waG1eyQw9wbstKLFzs",
  "key31": "3hsMvWzt4ZMaHTuY2ghp72bp3Q5K5atGqjZfkZCftAfBShMf2JsP33B1U88ENtVaBXtvKxoe7xJJLhJGp7J1nvTu",
  "key32": "735HvRsoG7YYh2BL9YxBXxA81PsfSuDCpDqEgqsvuBk49oB9XrWThfBrLjGdLXeLDYs9VmwCfq5qGP4m437fbXT",
  "key33": "5E2jcUk2eWBG7moYDB8b1RNA3DNXjhaaftfWDN92rp4sg1NYxQsSCbHGxsxqEoP2PxoXWD5dbM9zjBfD4kU6STVq",
  "key34": "mCD7L1HgB7dhbU6vwEDLhDvtDZ486HygbcbmMSaoMmm7goMxBZD9t8X9YqtEaMq1ac6pPS9ZqqVFghE5cw6JTJZ",
  "key35": "4DerjZLrnAvCLedtwswRfakxg8io3CZABXdzR3NNEGo2T7uR9VE2n3suUfc2HLHokaq3eHb23FcS7y7hhAgKxFNy",
  "key36": "3byoYSadvRWVoTY9kAb8sZ4eCmiTdLBF4LLGsy1qwScc8tA7TQC6CPN35duPpUWk7MGSEQy7gAynn68vudHfYHe7",
  "key37": "52pqUn9yBqDRVvaK3pT5oHrhPzpdTNtW2FFdo748BJK2c3kCkUBrCNMgj8r1EYJUqZt3tE9g9Evj1yaUsdpS6jL7",
  "key38": "3bRgBdWL9BWDXVizW9Z7yCpahJ5iuFE26YvkknoXH4DrC8nwk3ohqK5iXhrQCwkA7jXEvcRM5P58KdTwkMQ7LKce",
  "key39": "SiAJY9PPKfsqpCG11n1DHpV6cikxj5BFLZVPZ6H7T9Ew5xoL2EkPG41AEErHk8imNmqCcoSn32qTy6uGdkiCVxP",
  "key40": "5xq21SG9bcFG3RNZCBar3MFUpsaPK1xMH6NTjwgscFkz3SERMTtTbDAhQjPJbsjE4vRzCXx2ow5EogSASXkh35ed",
  "key41": "3DcjZ7rdXgTE5E1H2eS3jdEZcuq4f9wa4z7empnoQCPXuP1gUX66gdc2UY3AQpd7my6Ln1vTQbh1vAAasVP13fiy",
  "key42": "AG3eH5uhqvriBD4gCR2bV34Fn83YwVUth8xsd3P7DyTnwdpMWzW6JE41Pkq1KaPSKELCqvqc9yzYFzb2AaRg8L8",
  "key43": "4mRYGJrYRQqDtMLT4V6cfm2qTM14JGGkhrSeJsWz7vAwvvaPvsPmuk4RTmdGrbUi9r3jyAMBZV2jspL3UJ9krx8f",
  "key44": "4tbsy4hzqqjmfanFMSuRNqkmBRH2LXNYHGDJMukkMunP4AEXGFVEqXSbJwjNHbDrSyDAbcNm2uh74KXUvPQyWDeA",
  "key45": "3PZJkLoXwKM8GXNLtWX4w8mHHXmKi42p6MFgEkSz8MNvRRjk1DnuC1pyHb7fnKHijjPWP2apQJbhKxHg9TTrtLY4"
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
