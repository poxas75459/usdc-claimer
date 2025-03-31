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
    "4XYTJ4srbfRoxjmJqDTbMvzF8hpNY9dyVQthMYWRyXPFEZyK9G12Xm2BQyuqRBYXn8keXwW89b7kX8D2BmMm1s1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vtBPUqpjor52V3ECFMHUmXdBfBPypycryEw19hWQSDGwWEAXEa3FMRVkSopeRUNMcRZ9WqCBRJs2dchP2VBmCBP",
  "key1": "3abb3woJRNBQuJQuSdNPnnqCtCGhrUBSe8QpMHSYbqCTnc1jDSn7CXmQvtoyms7yLyi6hFhGnikJz4tEf882TKLM",
  "key2": "3tHt8eCLsg9LMkncwU7MwsekQUXL1EVnpNUHwtzoCQVYFvdFLL1LcuDDuUAwBZLHWgQ8rN2MWR82DDEyTtsVSFRQ",
  "key3": "nChsB2otLcCXD5Tu7WwPTsn2p1EpAuG7bkFSntxkWmNwDoSutcPsiwXFMNAq3EW7DTgd75z1XhzVMNjSoGXDAwn",
  "key4": "39QnPtvM4mvyZQFpQtrAzZKBXWU4fG1PHTDyzxNTCgvhi6DaovAxW2o1DDhXv2TaspPjvy11LVYbvQ1BfPeW44Xq",
  "key5": "5S2Mwy9azNcsy2JS467j7T8DLcJBWEiuLUhDA8WiirSz9gt1sPbHp3YvLgjaticqgd3WiPEfPE6LXhpW3DT1HsVA",
  "key6": "5qimgJmfurb8pEfTbfeyzXcGbE4YGhz92G1e4p4ZnxM34pYwYfiqys8ox2sZfLYpG61wPidznuviS1fY2TyMy4L6",
  "key7": "5PQ21FqnjZYCzErFs8W9U1RG2ZPDKe34wPqY9mqxtEnFbNiSKWhV7bghG6VFXUJvtqUR3UFocgbYqWhQebcpYji4",
  "key8": "2G7nN6z4r8TENUEfD9EAQaJV26gMmvKtSEHc8ib4NTh9XMmbaGCPTgYagMiz8MrB1YQCPgX7QnqAVBVAuk2Px8Tx",
  "key9": "5dfqzZ4i36A4rYRULL2X3Kyvddn6mrA2BmXHQkxjNEWfEBHb6SV2C1qSc2AbSdcckpYtFNQYGK89WVBAPk9VZVG3",
  "key10": "yRnLr6VUpidwfNGMenhqNhbGjKeaSMfvLkyWEszSR3Gez159rjL2QJzXJFNNvF19UKppBQhTwhvFRFyqNkASLog",
  "key11": "4qHEYr2gWagXZmNk6sgrEmhQ9z4YST1Vjkeo3sCKGDGiL34tcGC7Y9M9okVn9waZh6YU87EvWuKmrGV7gE8i1cjY",
  "key12": "3xkoYueDgwZRu97cNTXD99bSmrenizsw8W5UYC3pcgVR5RYb6jz1uGZCTu8HJEVxHsU8D7NZ7DBdZVh2AyuMY3oc",
  "key13": "9X5MWbBmNCU66aeFzvC9pAJ893kJY4xZn9RkzVR42m7eh8khVYRm6KoSbixD6joxxg9FD3Gu5dZrmDwhEKLm4tB",
  "key14": "21rBwDbFVzR9G8TutR1enqDt2XcGA7dKnKtVcBnQBxc81sotjgPtuxths4foPH2ToWEYSxFoaWxzSxGMsjviEea7",
  "key15": "RWQZKYGxCzXEp5LcVo3QwLmPVjdfKsQpwfNHRF9iE3YpB6tbvjAKH86QQRPQaWgjdWeCAxuoXPrx9FXYciZSeyh",
  "key16": "4Zbw9QHvyFykLksuCSwT3KSSjiebLVHGmCHyE5keFVy2Fs3AvsvDEAayNq3whmFBKUXNCWCwLe656BeeM9R3hxuJ",
  "key17": "3f75K4oWq77X4adhy4z4JQFbztucaC7J3zcNsrv6XRviCgAhEknnrNBNtQWsYTwMBcgu4pbFkx1RPgyfEumpgAZg",
  "key18": "5EjYCKc8SEo1tX8Vcz6sczkzPa7hvvb2nFvp2Lm3kuRg3uruDWJ32aWdhgR9EaMFk27rhnF9p7NCRSnDSBMs3VRm",
  "key19": "5ijucMCXRtBd2TXubKUtiAoe4RwARwgXSyphZQFG1zsY6ayFGS7Qz3kgFDEVzRi8ZT3Mdc4JGgGXmQTq4cT75ZUs",
  "key20": "3CzFxhi789nzNUKKvCGstT5VzMMafyzpvkzHVU8HCsyD9yjsCmEQ6mWzTQYjKkx3i8yZ2YNYHsopfd4qk38rzhRC",
  "key21": "5TPyKxqsUHFbs6bcSiJjnmRvR2NDVtX3WA3XNLVmNBcXHeE9esd8LYAQtSGNxSUhr6womiGVGT1ji3mMzTxA3hMG",
  "key22": "37yKrT8nABq6MDGRV32mSYstmKhNCA5jcfYufuK7yVAMnsAfrL9tjQEasHn14xme8EDJuQnQ744JaF8ExgMJuEnu",
  "key23": "AE6zR96HL864f5QFR8cZmQgjpBh81XpZhmM3MqJgqSZHRZvEEp4mgzaREtGuAwaxgM8Nud7EuHvU8P1R4N7cZuM",
  "key24": "5gQGRm4GUpEdqTXJQ4vTPn5kPWpiYoVP6eHujE9bKipC9PBeB4DG1p46uh5uKcaCTV1uxktdHHyuu2VASNhFhk3L",
  "key25": "RuEjiK4R8vocrELzyDDGreT2fJyTEuZVL9yccP9XFkWPsLj7t8AghApoJR5Uow6Ly9tmU92rec2NRuh6jVPPfcK",
  "key26": "2xEtvYvL4dKfFDF3vfoWs6jjw6U5Jkr8AF8wgqbZNkuaWjsjBDFn3WfL3AWHGDNL8zpjMSDMPFDaLqbA3yydPe7u",
  "key27": "5E3k2eXs8GNMJ4Ujk23LEv5fKfnx57ECAsPgLxRtsrfaMzSkPGNazyPiVEn88MMiFNskeTKvEapyxBRiWJrAp9MR",
  "key28": "3jqjtnLVFm8DrZTYt5AiHKy2tNKtW5me8dACFHvoJ5J4KfsiGWFEx7iUPddzv6HK8V9REeFPk9nJMjQrizhYM7xk",
  "key29": "4noMXmo4WfHJrW17rXVoG6N15SyGvSBy9vQTpnQkMJZS1vQ7LTKKS9bRbwzKSxoxAVvE5JVhujJUQXZTuMmF4rzW",
  "key30": "4uEr7KnbLFNyW27rid4b6ndyhKPjaZNfPMRrPPbdmT8ZM2oCYj1aBhpJ3VTVxd2Zu8WvhKs3auBPGqV6UBdJjyp5",
  "key31": "3gJqCgPDbrmddheF8b47tJjt6AoQU1Mhak8TxBPg1R5Yh8Y7r66BVxVrtpFK91hQNxYWhKpzMqzg1QoB9j44kZJ3",
  "key32": "3dmmYiYdits8BDNKsewL5qYvsTY8Muwms38NyVXey7d6B5Qrg6vHEmRyv9RWXC4n3eisKKuaSiJ4tbcP96BFhKkH",
  "key33": "pWUupuwzLtgZf3JeMsMgyLNZmeCr82tASUWGikhSgXA27iCpjDpvaXj3KisNq86RnndRwyroPLm1TGameBbxxr1",
  "key34": "3rAw2Bt52PyncaTmD9WuQBinCXhwcfxFynd2Th9boT62vSj8X1XZfQ6b2Qufe3bbySZo5bjFniihd8AzMd3G3Usb",
  "key35": "2WauWrZ2TcgWVQ3rkkYLsjaeTt7KC9SEmasUfUcPC3dmDBmZSvfNHxEUEbZcfXvfuxTRctcfnx9PEqA5dMpzSwz",
  "key36": "2HQKWKQSzPHYo6s3sdiZozVKdhPa8Q5fBpTM2tR1p7ZVUFSuDf8qvziWL2nSfQBndRkeWKaVNCfHTytbwFD9Ufmq",
  "key37": "oKcseKB1B8VSDzkEDKWX46VEpZLK3XC5872qLbCnmqXwXwMSCrFrZt7FwccWFroncisLU3oMRcjRD1yoNPfQuSz",
  "key38": "Pgbj7DxvBRd4PL9B6NA6ebYfBXUpQjU9wDti1VjvmMQvJgvj7jczpFDH1dzkpPFPCG8JffzM1YezN2B3xQbh7t4",
  "key39": "Pqam8NUj29om2698cTyjCKDxttC8jRnFg5HaaPegb4y2L4tz3dkBWG4pLEDPGBdMLD1emz6hyaYZDu6MX11Finp",
  "key40": "4B2xCaSvodhqFnoskRwb59L8AhRcz1a1oFFqxp5LwnemftdQ5VnVgCDVaeA7hYDKxKnJdDVnK7z9TbVRaDstdiq9",
  "key41": "2g4KcZCPufgFg7VAaXq4QcWMLdXqUCxCgiujdc6dG2tkjCQjVjYw2H73M1D6fR6RHizaYhQsK93sWYhx3MLuQrAZ",
  "key42": "2QpuHj68wgY6VWsA2zQPtK52ZxAbCDQSdKY8DZLPioPWDGsej1YJA1f4YKeHZ8amYipkck55ZHsfkgmQa3vYSdCd",
  "key43": "5rLW88qwzdbNUrF7bu3GKU6Ro1GPBdbVnVZHNAPKpi5KqqPFs5s19JKhBozMyYPMcTcWBgghe9zp2Mirt2t2zb5u",
  "key44": "2BVvcwoyNk3qboc8J5rpRh7ppxvPFPJ8BoKBvjEgjhLLmvkjCD1NGmADbS5r8krTtGmaonTJQUqcRsoficQ3SM82",
  "key45": "JNk7Nug2Ve4PqKjdmFsQTYvvE3qdzjQorGJvmaxtYU7YzF7d6REiPiPgaiVHKEMeCTQJNVbF6tbS7LY1u44by2g",
  "key46": "45WQJe4ZvWSRW7hVueMQYerBMfJoHsBYmije6fFegwL94GZvy9fch4EXfbtV7idVsPojqZBRgQY2kiT7q8Hk6jSD"
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
