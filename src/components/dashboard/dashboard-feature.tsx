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
    "5icNnyq2cBuYQg5jfm6oHHzbrZAoso8DPSFm2B5M9wjRcGj5RR11oKvWH5cZ66LsL2JWMHD7vSU2movASfvs8tyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38GtH16rmxsbuah8fSSNqqkqHdojttQYSuTS9mPMZ58KeEdyMRpAJqxjYD2fwK1kwo8RTrgXeqRsmF5GQyvboeS",
  "key1": "742ccCEDeBhBomqjMuA5QdjttDaiXwzRahkorWvZfDPQvU4TFNr1a1NJKGChr7u6e3DjCbabEU9guWhHqvayd8m",
  "key2": "3iqv4Y572qpVQy4WFiExZcqydFmz1ic1xiWQQ2xvPqK6iV5G8mKQ2SfPCRcMZA8KHcnL43bVVabogqB9sdSUoM7U",
  "key3": "4A7mDdeHAWo7CDHmmnL8NkqgcBjCbRFhyeb6X9sGrfEPBYTUXYCbm62Tura5Xoa7z29qdV5RjVGVisirPkEhqWrE",
  "key4": "RoVB2ABhoV9xLTm7iysoKVQqkotypCj7SWvoZ8FgMzTbQN15vnN4haygjzLdknB4KpcCBZuhXez1a1BWgpDW1cT",
  "key5": "5XbBxMkRb7fnPAP6wMQkLFpH7Us3rs5bvXhTM7sqtgPQmM4TMHvYpyRNTLsPMvWRjSZvUfLBrQfz52HJ6GT6WJJk",
  "key6": "4aAQEpcSXj4zsnr9zGnfhtRac38Gmv9w6ydUeu4qYHoeWb6LMVs6NpV9YwybMMtQyuZ6uRpVxKEjdLdeFzRHYwAH",
  "key7": "2VCUEt8mebBfnCGEhfj7vxVaN5fJxUo6PvfjAmRgwGXeUKHd2yMRL2f6zHRShCgw7fUH4xL3Qk23ccRB1sV1cKfe",
  "key8": "4KxJQsAgxC7vjoZqBQbfUYagdhALLbNHrBsBK2Sk9jdiQkVy5Aw9WC7eRMHc4rEDYU6L3GkHBU2crjpRSFWZB46i",
  "key9": "2fZtRZNMf11anM5asy4hMWq94UQakiAe8cyHXctHM7KWdngrTbQ3vzEiDMcep2mm8oTrmfXhdmbTA7e1RnT8CNrR",
  "key10": "3sqjgCkBYuEu3F5wJ3hNzc9pTJKAEXbob7Yp2UzSt67BJ1oJgFwrUFuoRhpd7oscHfH8VAyt8JPqxqR6NMHjK2Rc",
  "key11": "3VSdtPLom4t4EuBS4sRFHvU9JCWXbgH8UzmfCq4okov9o2JJte8KPKYGQ88ib432K8uxwsEBNraT5VwgykyQSHQA",
  "key12": "5uHJviTzN6KJiHCSAML3kbRBi75UJ8Bgh7HmosnFa5MbsKd9a472ZmNK3pQRpRJVrHXpmw65EARfPTWmfdDxYBYx",
  "key13": "5bHtYWwiV3r6iJ7Ma6hETLDBagu7RZo9oYHuq3ixv2kMFBDccRhCNzsFWmJB4YjW3T98CEW5h3YqCiWuXkjv84J",
  "key14": "39foCj1hrEoaVHsqz7TKGPA6UBaQJR5SBrvUjNjxA3fLzbDeeMtkJs6SXLq6bgvodM3Pzfa47rn5NicAZNStNkqv",
  "key15": "4FamtoJHVykuamnDC9SvWeuCsqbdjFWXo3i2t94nEaKSAXxfBqmjtAUQQakkQ1aqoxwtGF5ngyYoAgGqvq5yZYqN",
  "key16": "2HVgQNQ2DxCHTvAFvJUot5sjvATUF1L9HQMQAEaVXmyFv6e2JQ3ZAyjGGhwA3KS8GqnFJjdwyaYEJn2uodQW2NpZ",
  "key17": "2bNCgrhRpeKmUepxGdSkEinhdTgoy9asYA5Hwxzt8djufacS4cJwWq8qJ4wgaRURE24Ug7hD4ZhANrJi783NS4de",
  "key18": "524gEKSf1jwh2EL36E3CBxmGNn55qWAQYGHPEf6YvAvRXfNE6SsdBZ8rW1fYBnrRSmaK2ZFa85ZGo1i6AJrdSykT",
  "key19": "5sV3rPvHyEF7FwDMh9eQsKXcyoLUfG2Sz3zdQiTJwfDoB4rVgrCzzwcrwv2xMbBVMr2EQccnQFPWSXs2N5DzpDv7",
  "key20": "3iwUq8qdHJDYc36hkvDyanWqgu3KwjeYkVane1wSZhiKTMz1af4XkRS9YPbsQv4z66HHXTKsxkugJumvbt13jTTM",
  "key21": "65isZewrPKxuDxCHHrwjx4t8nh4QWfoKiUk1sBh2Z6jiYoymLbEMRzyUJffVjQmeeoJWF9PUQDRwFrGbJpWo6aBX",
  "key22": "XJerW55vd9HtiRqMY3gKg7yhLHp5yFEzaS7TDY8og9tpLzYkvbFJvMUEsXVdh2UK1y9A4Rf8yKL4tFUziBzWxMi",
  "key23": "2YBXyaL7AJtoucAgnonLbmYmMuCKE4UFVReLTLNc7NfFgDkgs4KmMgfKANizVTkyweihFb33mhNEeNPAEADLbGcK",
  "key24": "5Ut1YZ1quT3GiK7TJmjoR5rbVJCZyRjScQtvfEFbedZD6TzzwtLviSaexdoTYancrnwKhp7AWzbKv2jMDZfNdN9S",
  "key25": "5iw1oSZLokcsPk7uqLMrdJYVdauuuiTED2kipVERYykfW26hfH2vpuWFe61iw2piQ2yK1TiGVpHkLUQCqBkEFz5A",
  "key26": "5mMARDgLXWHAtsGBTEwkmJzdUDpmcENVDTTp4hh5TdBxxJ346gZggEyWX6jWnaWzLH7c6LXB76NzTxhPFygD9G7M",
  "key27": "2TNtMcMS9QhrsUv14j9TDyUDVn4kyBc73KRSo3sCVQoFHKuo9S1nXqFj7CW3t34Vuz73TWAp5Ee1rsRzsuK27WxP",
  "key28": "4zhCaj4hKQ12WmJUEupZMkvzwu1xJymLj1bhJW34jhTqqwMuc97bErJDEWRrGZ2xu29cFHH3nKNYuBJzndqozERy",
  "key29": "655naBTeWwBoWEvonSbKhzPZ5h3p5zpkVhg7YDpzbDdhCwq4HUtCysynAH7KeXNc1dc22v9RNLE1kBAjNsHx8hEi",
  "key30": "wGjbXhX99i6ifPELVcHh3xQpBeA2yoX67S6bMAi6K1StK5kmtdg7zjTP294C95dMG2EPdqQGskXCmbCvbiMzn3L",
  "key31": "411xJmDDtQjFNWYLcB2nw3divYia3VtzFQ6Tv6n2yT7aP4CpFxhQnoNygSTZ6msAomwmCUhc53ukA52hGi6DGyu1",
  "key32": "5MXXeKFL4sdSuogMJeBm3gKtFJmxax1j982vMqNw9ACjcL1BF7h3N89pFNLs6gazwV9x6e1RVVR62UVQ2yS8Jw68",
  "key33": "2dv9SXhMP7hzgUvnsMZXLRbDiM8eUaNg7X8LVPeh8TzhQDD1GgKka7ACbMyebS1vpouUVL7zpX2sF1mz5ZjGu91W",
  "key34": "4WEdgjwng2G6VRNpnUuJqQU9kLuiEysbFykiFpnQ2MkaW8W2q38raGLNQxQN6NmHhyta7URGrUwjVnXzwwjMvec7",
  "key35": "4cucfUSaP89rgPTcu1MNBQYR5N7gjEafwYvwRrftDEsPsmdhMUKQXtAp94pYiNx3EJwTicJNt9bf3h6gXEhXgLpM",
  "key36": "3LYt24ABTfvZVErACUHeAVaSJcmQvkDizP2eafc8oWP2QKkp8YvqcqSXcCvBgh6Gf2REvEd66T71quye3vC138Db",
  "key37": "mN8NoPb8UcAfvif8Egt8bWzLTWVmDq1aXydwCkUW58KF9VgeeBWgU5h8hausTfoHXAF9hQn8xAjYaUDcNbGb4Sf",
  "key38": "3cFWJ1K1ig3DAHweayuaxyU5vT2cunSa3wcujXZZkHxuCGJ9HRnRbB6JqT92L6uQb3a3T7othiw3odKe6wpXaqHV",
  "key39": "5cTKkry3JGcbaWQytMMHGGebi7k91UjyYwv1oyjwQc2tigRdDBHzfUjyTqchBG1iZT95rZJ1jJ1epFhQwYiWQBNX",
  "key40": "5SRjYCkZLAnKZtpCD7EhSo1SYii1Tqa39fFQPpHFF6nseTKamu9VkFB2ZWMyn3CbAqAKLFH4sPiU5nSK71Cwn7rv",
  "key41": "5pFihWR85xtjDuZ7u4TgGsVQbB7fFzFjnfXTkf57WpegqbdoLbHwByKru3m5J534tG2M9U7egCTXYHbX4KvHoAjR",
  "key42": "128A6xerBJ4RxvFBx79x9mS2g54Ar8CA1568BjkFePEShJ1BCBKtyAW3QRyqGSeMLGCfasyrXYn2egDUYVfm7PFc",
  "key43": "2gXW9STXMDBBhkAXMyvYMscN9KinxTvbGUaV9Kb5FNf2U8XvdVyStm6pf9d4JSw1Hxeg1bzsQUH7cUboM6vRTVNA",
  "key44": "48Y9TNh6APGSDCoTKWHAP2akCLQeje7EnSBgbweLRasctErKWYEUcqf3Uhgw6wLyxQMsmPjh5fwgm6unQ4UxsJP2",
  "key45": "2PmeA3W1MJSpEPFwmx3gRViMNvZuypeAvTwrZDfQJLWZShsvhF6Ecrmx93yAnYHNPveR6edHNRKYtNSbvt4vcfvx"
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
