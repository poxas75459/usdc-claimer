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
    "4pnThijT141WybgaT5wtthVb2kk23SKB3eWUFdPZeaMcawZjKp4XQDxJHy9241hDPsWeTaqJTfc6hcFwBUGsrxSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XFrccpAAF2vM2dk9yG5TwynBZ2UosaBya5EX6oVpTH3xocE44tixdUbhgzBjrGitTDeWdUv5NzhGVrq2ATG13QB",
  "key1": "2UB8LPpB5K6rMKnn185WUiWvzn8CiDQWJw6fve5HXReZ5uHdD8n9mNGfManFcpbAVZeYhPwahEXyxvP3mvkBRDmY",
  "key2": "2HkATmk6FZbL3VyK6vLiNuHpCopjzJgiBeYZzMp12jEbF4st2FczbvK8gAf35rDXe4Jrmu7FcYGKmuzEFqoCyQ5U",
  "key3": "2GUD1mMbidkfwQpejdu3zFDTivAy9HT8MqgpBuouUYv6bxnMpoNjScndp2vh4Zh9qpe2WD32ZhjhyjCTa8ys39JR",
  "key4": "4GwBK3Jhk8KsnmobJ4rPJk7wkYcofpe2Y8JiHbF7CTRs3do53T1GqtHfLGcuPy12RAWK3oeJBub7dUxyWuiEBLvJ",
  "key5": "2bU9FfXNgBt858dR1yMe75auRCpKRaJ2boUybLjeqWZzJRKGhR7fCtZJEuRRHihvqtNe1Gpvja7qcHW2urgqAWzh",
  "key6": "36BsZrgXE1Q8onob3WZR7A5ymbbha2bQuxnk1GCC9fmo7Wc5qu2g1WkjwhUTaG8iTFYZt5DJZTiL8VJY51wNgixb",
  "key7": "3SPJMoU3sTfmA6TPuUnz1Hrp9b6kx18nzF6YtSv36x16FbK95QpDqgB6MPFgGwKjwRzMMruthyy3FtNohYXGyyha",
  "key8": "5gsjctzUeiqVg8fYhZ3jQSohuapX9WuN9HwfP5wAau6V1zPTCNjVJ6Bbt3vE6e4wyiib9bSCTT1JGgpoV5Xntm78",
  "key9": "5HitvH4ZtwMgDzx1Uu8gGF89he8fVYo28rjGVhwMftnw6GvijXfwGdmsE4BT5aNu4uHabbiEZkA1Kn2eRzJyYWRd",
  "key10": "2zcU6heGzYWFSwsYujPDune6jfegBrPXh74QR7fqTejQa57UeYgxieVvEDrDwXiKmYWGgEbAsuKNNCmbXxvz7phk",
  "key11": "o2gmxUcRAxaRJFQ1taiWfpoEdP61qXEka9hWQpT6cuWBK82ffawQPyjetuGJytS4CsYG3mdxNebskt4Amj2ABbw",
  "key12": "59Mka3hZNxCxu5Z965mdT1HQdHmnxcPLTn9s1k78Sxa8e8ZBJCkjDHriBexcYgMk4h73XmBtcqYFwyH6gXZgjybC",
  "key13": "2MbQ4bAe5p6Y8kEMsz94Zwo27E6N8ZmEdR2CSUfMx3ZPSyvaCkwtud7BzjYL9wy4bmJEgNtCZRvv3HWQCEqxUcnC",
  "key14": "2bnz2UtBYUXL7W5tLqatVWgBKGp27JA7rRvczptz1nC3sosGuNqdwrf74ZtaNYhag2b8GeT87gRXe7REunEhiXbr",
  "key15": "5Vg2tzk35ZfdZ1Nes2pK4sJe7suWbekZrGfTx6asEWwWTwrDhr45RCGELAUfWaaMxMg8xicr5sBLFgH5zFvwLc3k",
  "key16": "3WHksdeiyzQo7A9MeYECNjCCR3vS4U8Fm9hz425VHy1VZGNUF1PUiyEr2hhWywnoQ8STTyfEMBrkbtnztzu5ktpJ",
  "key17": "8Ju9xeNDN7ACw39CazcU7kVfMeFJbLzfnQouWEPW1FPQGNvqMX3kuPNGPmsM5vXxQjgxdtD5oBDtgqTwVQYnwfT",
  "key18": "4JAZa2qGuFao9FGA3ZvHNR6aw4nukGpMXfeMrUUN8WmtwKMhzss3dEeTn1yyH1gfKp17YDSQ2d4HSY7Bzt1i1hHH",
  "key19": "48vGiZPNiAfdjE3C8CgA6yNmkZVMVCmd1UWJ7F86MUhQ5UknJPNmvvsXXKG1J5oc8U2UiP2Ab9Ghm71gKKxEzBB5",
  "key20": "4XuBQPb527brCXR8vCYtah2E3LL9RNrE9pFPJNSiyoeYcekETVhoidgn6bN3kqnfkrqGvYtHtviCv1YuMAx5vPXf",
  "key21": "3mKmGgmda7FHDbXJyAQxuCg7n9HYe7tPxxufUbu2cy5PXsHNGBt3nj6uVxsyuz3virzPDkhT3PHircRuXDh8ymqK",
  "key22": "4n8mC7d1XFdXMJpzCbeEjrakFbKYkWnH4gTRmB6tk29PcX3xDb9ikAx8qQk41hjMktwG8yqprkrJvZYvutxrxH3c",
  "key23": "3fGAEz9gfvVtYHwPNjae6aiReMswGptRxDEcZGBfRnH29NnKWfmciXtfTCDrxDSMkeAZDihFjEt24afHXjSqyK4",
  "key24": "wyHGnjFose9Z8e5N5fmvXP3fDsk7kQKTbbES46MWZFDiA5GcS5F2nNr3fq7rNFtwhAmBp9BRnamAeXSHfPUMfXQ",
  "key25": "JfMvDeabNSfAuLNzeZf8uqBL5sTtScdjYtG6gcQJhAWExuAxqxxPAnawTdHady24ZP8o1Ny8ZQ1u7Zd1sGXCwXV",
  "key26": "4JopXt7JArpEaT3yHvzBQEBRBoqXfjHMCv2iMr8Jf2ETHWdSiZW7wiAgvzs4e2apqinqSP9BMXzLi6zZ4fhPFXMo",
  "key27": "3tVP4VasjKSKEMJC5AfJEHXLh7HynnR8tVALWRPYSzrzZgqJJkwECWikA4QN81A9tq2s8SZnCSP6VK1H9fajcZon",
  "key28": "3hdq9178tETahXZUB4FZ7ZUrnihnG6ffND8NPBRACs5zDZV7RgZzSbGzHQTgkVCJSzzwqSDHKLGhzmUj9u5ezU7Z",
  "key29": "4h1jiFhvfQzKdk95nyM4JJ17ZQ4Ve1EuTmNsruYUCLmc8kuhKCqTCJmpFQfRNNBqWYuo8kpsvKr12Qh4q1v8un1p",
  "key30": "5HuhP3eTyqqq2cvjbYugDLFo7iVMpDKfTmYTeuLdwwC1r7mywJDxU1wT9TCPqBU2NNwm5HhKgAN1pK6hw8TNdpi6",
  "key31": "4dKE6YuECdEvGk6o4psZUQiHxxrHD1MLVVnxAhG44j3d174idvispPuBJBWMyKELaPhbGPQG35xJTUYtxqhDK9Ta",
  "key32": "5aHFvFsN7xv3VGR3e6htSB9etYAPsySKXDv554mgMjei8fafcsdMXqxNsL6XFafXYB6Hfuzei3jKhYV2LvyG6gP8",
  "key33": "4jrE6jFnwCB4ffVuuCpo2g8DpSVXiSNjrKVstUPn8BTq6PuDQSMtuovPab7tMhW38Kddyuxgtz5RWBbwZ5CT47Yv",
  "key34": "4E1SG86QhCUACGRFeUp9N8jzsXSP8k5oa2X5D3p6E2KMMsJ3Xgms6h2mH5gDFA17E6hkcXMETsmXjZchvkw5bmRz",
  "key35": "37uijTg8KWTwQn3WcbUn8fxy8uLDgXm4kJ2BJztJq9HffR53uMsKrrWWtpqFHznotPatmY3vtYx6DAiKipwXnsM3",
  "key36": "2ttpBr2VdNwyHUZX8hKrXk5WYSUAvaHrYV2DDWbV4X7EA4aKhexjUhecbCZywQx16G8N71FCnYaegQjzcWqJ1qzk",
  "key37": "31FJCwU5famfySbJ93UsNgeQEHsz8npuP1rLMLSz8KGDK5K4BADjm2pu7AmTb63mRcvWadJd9edzwbQou87v2U2Z",
  "key38": "2pjmV7aV4DzpSi1oGt3rV2r6Co8evb4fXoEryoxhPuwmE51o1A8FweYYfotuomMiqtFhhcWX38k5V5XAJiJypCuC",
  "key39": "3iWRhp62gPAWHYGxDhNZNV7FEGv6m9Cr8qzKqKrmkR4aLmcfaYR9B5AdyhLyM7tqSU77aRD37gYcmELtgW46F1jX"
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
