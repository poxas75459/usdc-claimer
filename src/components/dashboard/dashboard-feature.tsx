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
    "5NXwLeP53RXryQkENQ2EPZe3evQ6QnfpV59ZaNZNdJcfunGDZEQqZXMrXg9yxZT7xC3v7nAu1FdxtL7ycWtdimSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k6kWFN5ciewcAZSupqxeCSCrvishceBaneV7eioyZH6iZy7WeXbVY6sDv9wRJzqGMjV5jGdYhvLxc1uMyRjD1f9",
  "key1": "5dcuMtUQBm51BMAuahdSd2YYwNdoworSk2LNiAQfayn4bApJiVXDXT5PdocpfjGuAm6fqXKSWjcFqSFgmdcWN9MA",
  "key2": "kAFU3TSAwcKJaX5yhu1j25RrLecTYKgS6rBrUwJCWNfw7voax3PPsaZuMfdvaAEpmtcLGdt65bPbm8r65tsGBya",
  "key3": "2Q4HSY8MYJG3a9DYwo1q1oPQRkwEHz8HR1A7XdQa4p2yvLM7JpzSHYT1ZCua6UrA8G31gUay7aFrrxLF2hoDCSo8",
  "key4": "5U7vRtueaxtpL8kFJpg8bb4mHHvx86ykJWd9obG1oTBAbY5kFgYVj9jyMYVwVA5huSZLttSE4yvyTpRCXBDEnQio",
  "key5": "3DxP3ydkq9guGuo3jzMhxYUtr99xKjRPY5hrThWZzHaUy5r1GnuwvRkPBJpUHjPA911uBeMJSvP1zmuvtort163",
  "key6": "A31qB3MkY6DpK3ewMgTkASf36S4AypY7MrXE3UrLptVhUoay9sXhFMzzsUyYmtjGei17fUFuS55vwP3cnGNAcFH",
  "key7": "2BpaRDhHWGnNxBMdYcL4tARHRJQJnTghfPS2c4KgNoTvQdHAZ2DCUpP2k7VgVmSq7GbH4GsKw2W1hqphg7M9WoiB",
  "key8": "4pjqQhwdaQZguymnASQAQbskU2x7LpYQ87SMsA9kibogFohsR3pJExdG2Cp8t1a1BV4rWcAuUTaeagK1e4eAaAEC",
  "key9": "5gkvpNJSHsywBu5pKU2hqdBnR5F9fUB4WrPk7PcZurN5hmD4dPAsHeK14FMXtVv5ir2Qud4wSzSL8QRhqEby8dxY",
  "key10": "pdCZhrxXqHM3X629xi7FdZnnfXwCWrMJWZ5LgX9SJZojijJj9J3ucAV4tJAV5kByjRimqQF1kwNnzcHSea5WPWj",
  "key11": "5oWY5ZrrZaKX4oFuzknw5cDU2wGeHPD2QaXhWut1tQiUJejP1HUnR9xeKQikBEwYeaGZwtZHkhnAi7x3Te11zeQ3",
  "key12": "3CBN6BnbSW5Egh4qmq4dYHikfHekVr15gTwmRTQXJRDsGGTyJHiv5HMNdEwxhes4u7WRLVwchkv1wT5GMGd2ZUWs",
  "key13": "4nV91W3UsLwagsQghcboHZVLvH7J4quGJXDf3TQj7zuEA8zEMB2dStJ6JD8XyFLTqGk4F3hn8rfWM6xcUkV9L9hX",
  "key14": "2dft4gDMeG7i1YGjCAtJ3cdYwSerc6utvT6AZY9PV1oTMVcBsBLvkAogFH8yosQqd9s76W2yryLuPWyjzn71drLJ",
  "key15": "5Fe9dX7RLG7f56dZhLNJ42XNwvAhpbTpvBn8XDag7D3Z6wi9HQ3u2UVtHMMJZYv7msfeyWBNXyqZrsmHbEfquhES",
  "key16": "3kuaNuEEfrLW4PN5iHpaGYAPWhb61T3As7xAjk79VTy4qq7xUSSWCibzsaMo7tjmHeJSW3eiWYzT8AWvUGkVBZ1C",
  "key17": "2S5Wh2heWaMruFE62gWNRFcGr3Y5XBrMAPJcnDiJggfuw3JDyRh1T7ZDq984gjkZPmYBYysEEuecyFfCMZtmp6Y3",
  "key18": "TZPu11z4C3FQ9wtfeeZoPEjU3h2PvvzQMJbgSFXfkCganCRfxmmf6qUzXSt8Bk4ScTp77osCuLmnENtgcV5dgvK",
  "key19": "3rGmYLKXoriSoWDV3F1G2zVUXVSLhqiWEYybUvnsPEbypMsazwAYAGH4ijLPjkbPE5X2WdWoxaEmy4Y2hRi8VNuG",
  "key20": "4foQ4SJHWvrfNvEGEqxGFVNBhJiDjdRp98Y6CRcp1JbdZyyq4tCKpLQUwBU7ZzvxMvYJWjDpLyCXFEkBEW3MkSV2",
  "key21": "3iLSgeoLEkpaffAzKtqoSRFNd8z8ZWeFx3kz3cpy1vZEiuMFcqvaJUaaQqNvroqA1VdY5Aj1WPkWLskrXCeA63UM",
  "key22": "2YhdJeYkc33mKk78WU2TgJ9NtP93fmXmaUxL1xaEFJaESUJZQpCjdkxec6TSfSn5ukcuwmseAehmsAFvrBqe3GCE",
  "key23": "4eDEY9dSaK5iV6B3xhG6ipN9caxtFpeaPRDuN9BNPzQ9wTV51iZYgMJxTSw1H8LpzWP3xV6UzSu9xNKnz7pVVX9x",
  "key24": "2qtFBFoEwkVfNAhCFkyxWGPKAUvU782sNjf48o7Pg5u4smx9F4y9jy1YvkRPz38pHXwpwynBDjmVAjzabnz12zgT",
  "key25": "5jJM4EZnKaaibvimJ91uARxC7JbfCFEGHVaUYpuQVCTPoRWGYh3kn1SkcPZvbYP7RyhwvcoyY2ukAoHhBEhcQDFF",
  "key26": "KFhEkL5tN7WsQS7FBkfukZqjLdo9J8nCqx1S2kWktA8tRFveUGbPvae9HB1KUMPyxCviY26PaaMcENBSChRUZrU",
  "key27": "4BguydZKZ2zGst9n1bB4bV3koA5FkZsLbnZUi68KTbxNhDoCS6cnBsymH953HYAeurH6ZWVssNvHN3opXuZDYmCL",
  "key28": "2JEggfip143exb5zsVhetdNh7mzRc96ysZXVqT3PW2NCsWz6gzeq1nXaYYvGFKtwst5jVkPEQuiBWywGHxBVz22D",
  "key29": "GBBkee4FehKyxLNp3atmMdfHwuhAsH5wD85GKnVDYjkTAr4G2fCxiLLRtkv5kQyvwszVR8VkveGKiGVMfGFUxB7",
  "key30": "2AxjzTY3z2d4g4ZeWCsoNifR6hUiRfrDbvUhZsUY3zsGzjNvRj6g4NB8iEeSVs7mXrM7UKggZrMhiXwJSdbtpVUZ",
  "key31": "3xGda9o7LbwRHNDZ2XPm65NAVpjdxhnL2eVY2mcbZnNLXw37hRktteRRqCMDtFqrb8QzpCyV1p8Dx9Bwa5UTq3FS",
  "key32": "3PY55i64Y2QSDS1iaqxwiMK1VCUvDhnCbq8B7NVzCuEhzktgTfCaQ8DYa7h1Cm26dXqJkGt5trubGLTpvJ98D9He",
  "key33": "267MRrsEA7z5LfDWDX5frLuQoLyHsVV7ZLmfVogxkXp25XoBABtQn5MRtwvuTqLZGw76wCyzKCRHcc2FsJmK8w3p"
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
