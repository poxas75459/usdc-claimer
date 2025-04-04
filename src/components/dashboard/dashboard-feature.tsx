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
    "4iWPFXZ6aMDQY5AewEGhNqFFgm43FcSbZzMN8xf6bRGDfTm1ohejoQNzepjNn3v8rXXjB8ADLYQTkR7DP8eQYiiM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k1CrfpCGGCemwiWbrPrFqWXpAVsHbKpWxGEMKQxaxqtm2dHQGoGfA1XU5KjUyvsVhGhJCv4LDzW14mECyKSzrvV",
  "key1": "2BcjvDF72AMWYLFF1oEqrXNZN6vQGpb7f8qZQ899iKFFDkpihzHqgkUN5dGrgX2GEN7Y1J9zRkfr7urRGfzfkQrc",
  "key2": "NgBGeUcYRaGfU3kycXuVSBhhtQ62RqAjdYSRMEiGnyeUYK5RpG9hX57Pt34AXTcAFXSLaWwKjxLL4tjyXisRhxu",
  "key3": "3i9JbCHkeKx5SXsmcSTrPwwDu9GE229rTaWTb1ZCciWNHZTaKj4DVvpqrNYGtHb9H7MjDQ469Xbg9QHk4RVmcoNt",
  "key4": "3qUfyVMAnw8zxC8mYjn2fncnbGQb1Z53uHmU5f6GGaEBawM7ZtqkFkuM8hChQGoZGyLvrsdib9ZpVE1P1bEZCXS1",
  "key5": "3kxUsY491kZVCmCxAphbaoGbhpwSj8Btx5fhkRhjH1uADTjE6UvJSPESHeUAqgQvUHoJqirXcBN14abRftsCahp4",
  "key6": "5xTJ5dUBs9inbptGQeT6B7SvYzMfR6kuHcA823jGrL5qgG16XRiWmDrKtsNRXbHA6vhjyQKYySRoLH5YbuoTQ8SX",
  "key7": "3mSee7hENbjg86QTnHnWYrkUw4DXZELUvvn2Sq1y1ZpfBUtJWUXNeFSD5dJD2HnjTC8Wfqyc524bdGMaYh5N2P3q",
  "key8": "2VFR28WtqYkEDu8qakYNnzzUc7fZm5ocmBKpm4JVMFvZBeBRW2ptq79uE3ZqXB4NuBexWPQPrqwXc2hvywn1Abum",
  "key9": "8U5cESUTThC4arbnScJXrj8Rrs98CobufcrF1vjAALXWwBHVLRS7bu1BYWDPB7Yra7MXAVVQLyeGEJoNh7SUiUX",
  "key10": "BR2oRd8sRgyDfzRQqCdw1PqKNs2PT9V7st3fgEKjSr6og5SW8N7DUrn1E3emQ5ui8eMGbFD5NneiiiDsu9Y4wmX",
  "key11": "3NCQtwS5qZ6zQqqeADnsSLFiFiz5j8qvxd5YLmLBxLU9MsF3raK3VXSYkPksixBtiSNZXz8KjcgHtq6CVZm2pdqE",
  "key12": "4h7BXCpuL7bobkd1BQ5sc3BqbQGTE4brdHRpNkdpYd9phT3YGQUYQQBpLuY2mQrDfarF9BK9hXNyB3QNd5C6JJgb",
  "key13": "2xSF8VCv5VyD2x218Ac3ZTVfr2a8LZcQojEo6Dq5hyxvBtHyUCArkDqNA7aCdcCka9xQvswk7T58Xx7bMF2xPAmJ",
  "key14": "2f9su5UVrP5y14sXnq3vXne4LsJHxKoc7D6YaLh4wgmFXtoR8JH5gCXpskfMXTgYTKRC3i1JNu67gMaMpfNtF9Ps",
  "key15": "31PjVgCwPEX4RQXuUdgUMGPoHWfGtsfZLwnxmxKoUsbF3FbHDF9B29EkH6K5nii7hWLsFQ36juaC2aRdsWAaC6mm",
  "key16": "3uCC88NumGtwVaVD5fDZx6F5hhuJKTq9w5opMghnrQfRDTL1e3Gggp46V9mNpHuCZuyc4AuPXwULZ1ENkhYiUwcn",
  "key17": "27SE1Ah6jw3xeNcMft6KKbXRz95VF89v2EBBWptQ2jogx3qcerqib7Y5fEcdHB2i7mgwPwcpCwN7LfGwsWEGDw92",
  "key18": "3TobLv4ANKHZRsfbxfzmdoajvDvQV44LX3mu9wXYQg2wJqUTYgBiPnFLNr3VYbC6Yv1x8YQD3uqWeFc6gEFaGekQ",
  "key19": "2cSzGNsMam6VLx31B1ZYdGoewTFmqiE9oboChdbaSBbXpxLBgbhiN7CFQTGYdMmRjUAAXH37zGE59zP2Qjmmohsj",
  "key20": "2Lz2GLjPQSyskB3uJR7CFGmxZNxnKLo7WMiDo9Y4KbEFdMTE4oCzmXUycaN2NUidmmL9DuZTuuVuA9A9CwVG8DaP",
  "key21": "TU9fKMt7F9NWjZcc5xY1GXBp47D6RneA7XC7pQr3hpY8mTFMzsPji5Z8gy71nn6ZDS8QfbrEi8U75fVetHYLJs8",
  "key22": "o8c5EEffwGuewtB7kDoNoXqpSAxFGaPAENVjP427juZAvUGGLKtMksegMUHKirZHUQg5CPtba3KjEmCo5irhMLc",
  "key23": "2Eg3pbhE7ZKyD3yV6GSn1rw7aSD6uCkUKqbCb5No1nSSiV1Ddax53TsSa97wknxKWgDbMw2cBpqEiaL6vm9ZZgzx",
  "key24": "5paH1gRmb1zjpRa4ZvBLJYBbExnW718mbMbSCnFdAvATBDy3eQhksNMhHpVzcM4Zdc6ZxNcmBXvRuVbVUncz4DCL",
  "key25": "3aBXWfqtumfiAx7pTqFZobrK4dCsMsBCrmj1AUp4X5hz5ruKD7LTfsc3xgpT157dyydWtsq2Qjbj6ch5kPTLu6kC",
  "key26": "3dJRe6iorjFUUmMRma3DgZL6CSFmWV7qtRoiGYsP7jRBp1hB8mmcumhmSb9acDTqdhLZimWEeM9fyijL5kPCarXN",
  "key27": "5fUWExvarVyyU64zwBgrumAAX8NrPkeJn9g3zCmXRr5oQQvtVQSsZZXHwiCqtrBnAeL3iozHsEQ79Poa9DrH6wLq",
  "key28": "TCgyhyvMfRAZjQzQxgiPvFQd1Ep16hEGEVRkqV7fHmuiECcUUPGwxrhS7Skns1vWRxTfQUSCRrLHLA7eSYyWRFg",
  "key29": "2t6q1A8hiCjzEGY3W8ppuJYhzvQhm4NocrNZxoeioQDfwTvrFVSPQwvz6t66mCcCaAV9aL6MnPxQkqutCT45hrVM",
  "key30": "2e7SKMnk2CBfffxhHrLT631bUMAFEKsQ65VJSJxf56P2ZLuUx9gnSef4X5uFw9eGBE1FedVXQthMV8D6JP3vMYPW",
  "key31": "uKqVUavTRBHCEGr4pBvx1QPTjDNpLFuRjP8mqgNd8ieaoqy3HanVvzAmXtnaV1YMeAVzfFKHGBgxhtQ7sbsyZkG",
  "key32": "54q4SKTjhXgSPnfVWLuBPh9Z1qvXtU3rSkM63hJbU9cLBb7jheb1ETaCA9zwmiSH4FCyzRiM4TEGpEQeCULop7yc",
  "key33": "4H95jXfVnjPLx99Cz24iW6UdWneiKkVrmm1eCqW59weqe63HJWYpDoucdKWRrdQ1cazRS3x424RCod8iHEYsQRMt",
  "key34": "wofoDyXRJZh4KEwsWL6ptN2HwkRR9vwKUtMg6VhsJFVZfbAok12URDVHAubYJ3wsgCW2x682cwPdWM89wxhnbMW",
  "key35": "2hLkX7XtBvBfhUTHR34vXDwyoWiw5w5gQkWqYynoq8xmE9NDXGaz24fitXEUjtbK9iGPxsisNkytiBtmn1AJvNoh"
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
