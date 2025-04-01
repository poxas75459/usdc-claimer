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
    "56sNgDkJw4XpkHXCL9kCRvb7cPk7kA2BShcw1RJGAi32BYdxyX7QTNA3gQgjF6NcNojuUm5kQmeUgGKQNLhdZmnu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aqWS5CRUjnDt5KqBKXnkKdzybShaxqeJJtvDVoiHGZ6fj19qErR4zfMSDNvsw1SQVqo4mX43zvzy8T2g1peMKuo",
  "key1": "4hyEoYLktFJTS49zMtrgEH62YNpJRwSeRwBRwzDz2f2XdrQ96Vcq5JMxShkzPN65DTBThGSeZb661cKNtug6gtD6",
  "key2": "3BYQxxCGCVEVcCA8ehutojBrnzsWY7m5ypjmsqXxwnwcnfKdVed7F6rL9xaMwzDvMJpNxpFSbQdAtDEbnuo3QzEC",
  "key3": "3dp7agouoNJauBzXtsAwbVTufChvHGfDMB7nfNohZmZ1qsaYNqimQdpq2GjLY16t6umDSCodgLXoT9VKGooP4cXR",
  "key4": "xAwPCp2z6PedQTHHZxoH7tyMZubymg4Ejpic4tSx3zsipvfyq2u9uDEE1oN9uw9f4UEzLnQjJeyczsWzZDcEeod",
  "key5": "2ENN4P25AeChMpJzsN5UuYrACsKXMztoA471S6HcD17th2L7SdoKA7ghmjoH634P6CnpRRV3NW9ejNcpsgS9nW4H",
  "key6": "2VcvqnZV2FthdASSEmRYz6faXFVgtZB12kbUjExu8Nf2XXrAs1ywf8hYg85Er1jVvT3kdXSC2WeRyQGbUYVa93We",
  "key7": "5o8eubDa4trgGJVYEHqJZnXB6sKtRJCNEY5ZXPmYpPrdXzJNZ14oXJNgsy2Ffb9i4v2vzd4LLUuXXUbA4LH3fMP2",
  "key8": "239rtW56CmHqWaCZK5J78jVjbCypPBT1iDbaEUxaHnLJSeXNa5qa7VXBhSPP9cPYGKvUrndBJ9eeDJRtgzorTSCQ",
  "key9": "4DTd2qimsH5kgdpxZVWGjFgqy9THisteqyFRi3HDqJ9zxkHECWEa4Q7fSt41SiHq87xQRyxkRJazUs3eCxNcrLTA",
  "key10": "58kXixPGnz46yrXbvzg23xefNeDegjyq3bB1pN53cgK2AQkDfHEfJ37x2t1wzpHhuginR6nnPyQrSKfdJSXerLS4",
  "key11": "21wTSHmkHuGjo6XUcbU6G1p4x28xcoKcFtmQ16NLuzbMvkeYF9xx79x3DRFaNaEcxLvVW2ckDTvCSKP2yMz6Syzy",
  "key12": "31XL6w5HzZ8zS79YjQNV3cVeaJxkMHr7BJfWU87gjpUHRnNorvJ9e6LQALC4bJEbpYpbNzFCGPzkcn49YEVaVezJ",
  "key13": "AgUU66R7qLHTSAdFGRCwAiaVTAUY3d4tUNtUgS2RBdsv869nPZsc5E948sEAeeVWBJpP4VEqxBWf5bKgBV1rRDK",
  "key14": "2m7TxCn9ZAUcaEoN7jWaYvJy9oAiEeGSQSipaTH4S6BEZunqoAe2G3UBctnVQoVdNxwBX4Mc3tT1ehjsqHd5KGMZ",
  "key15": "3SUCbNXxw3ZjB2N8rsf77DU2ggQkB8v27YLc7BCudgZk19qTtRhQav41Rfjybq3T8qV1rfWxtghiQwENdmmusg41",
  "key16": "ktxABeGQokEtCYhdt4NXrEqiUHzMRWLv6ZnxRdsAvYRQ6DZEauNU9TtJhgtt6sV8t18jwh3eqWQmbWr9m9mEbng",
  "key17": "4vwKncGhNiCoXvmkEm59DEadz8UiRJ7yfu2hk4N18zwVG7hcm7CEivZf7rMJohvyAcw4ApfAau1foim8vE1MUPgv",
  "key18": "5CshFxYyRiWLzcfXPqym2ZXzZNSRnqphsTBTGfF8y3edtbk8GxQC994RusW32QX8hofXAaL5caKo135JMs7ccJXo",
  "key19": "4mJTkWAE13w8GHgYndEUNYa9KS7wTxrErSZ4rYphe7WD8YFx4ww7iSuJMHY5WopH1UWgxA1F9ykqShQAzsACYPDX",
  "key20": "fMrMaMoxrcGuB6sPLABuQamCirpThqZzrhMDv2ux2prnxcobyj4AMPUNdWuePnXhmF1J94seFYdU89qZMxxSMFg",
  "key21": "GYeWQ37QN24eKannDHJwnbfHy1x1uXoP82ZSeBqdzywi6G6gviXwqr8goy8de9WPj15FATgAqLMZCkRJzNRn9jK",
  "key22": "5fYRb4a9o2356SpWzibibjP1apabrMC29nv9t1jBfmkL8cew13tCYJrRSJogWP5yoaCsh815748XZwXE6Jf76LZo",
  "key23": "4zkdPU4E9mfErtehTeVbT4Zm9uwa4wi7sY1ZzUh9mR6EFrwK8bSe6BUvGyLvWtAcWHnYbjCuJBAG7U9s3UgGn9xG",
  "key24": "38C46rA1zrPo2zbBk6wRAvvSrqDRNXMzsATvKXF8P3nGBcMEyZCftBm2VsxyW12nWNp6yipUy463eYeSJa7p8StL",
  "key25": "4tZXCMJpWAnYqY5JGAXKyuB2gqKcbQJn94qUMvfVExfjLoqRgWncnA4usgxFQguM7d7jaJBGZ83EMKpwFxVTcKY5",
  "key26": "2RUniHg2PMoLdNXCb1LSRm42f2aiW5zAVoxdDkNJDMb4ZaaQHZ6QKL3Uy4u6KpCiUXWWvVF3DbQStKK89Zd6kRr3",
  "key27": "2o5snWNfY4e81hqGtJqDVpGHK65tvLaZ4hTbcPLJ4QEUkeEJVKpqnXCw5ojdvshasbwtnprtZBrDHMmmiRPjunbA",
  "key28": "5A7TcU2AyURrmBSH35gG4fP5TVYvg84oP41ftvzLLuBzHEURCKbc9N6mBVarniGd9qBrocFt8t67Biz7AeFtt3qU",
  "key29": "4HMw7NFwZo8NQyPcJpm2zdgsSirawfHc4UEjq7rD3vrzpTWkiaqqV7iH7LNDRyUwR6T59tbJf1wSzVLTkNn9Dgfs",
  "key30": "2GskKmQRYtLGufL3AgBisUaBkShzY8k9m4JEaUi7U3Y41SPHg2QBA1Gv8cdphnUd6ExWF6f2dKR5uugneQXbLDc9",
  "key31": "28NsssrrdDSQUGoBbFaDi8fqL1eBgt326Pbd8dZbEsX4mmNnrB2YCX3LmyDABb88Vr4Zgi46FigKSQ3aHhip3iAi",
  "key32": "4rGmLaT8KaVogUkLp7mVaPPEYpmvP5Dtg4CF2oWSgwWdYBeZxuhu41rw97ym45aCVc8coTKkzXwvY2SsbbsiBBjr",
  "key33": "4SERmis6gsHjXCHmdLW5FwwrRWhXXDpSXNBMvL3cvZSQvR5vsMPSLJyZ2FXGz81Uy7D6vG1q2CmBTxMUBDE9bVBM",
  "key34": "2iGJwKe1HaHKLsFJ4YGWNLxEourFs17ncwF9w9a6SnefXdnJSdyuKz8nXy4RAQBc1L7D5hxrfBjrKL4pkW2Tjc8L",
  "key35": "5xHmc1rjQitFMQmL7Y23XdPbawGVwMXoCxcqi6B9Vwm5t2oBzJkFziMW1A6dSMrpgU118edpMSm7iEx3CJBAKant"
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
