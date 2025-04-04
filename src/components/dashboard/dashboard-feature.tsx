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
    "54DTAQtgEwSb2Yz2KC2UXvNcNWq9qrUZoFCkRYGWqZs4xGnt3GcpvFfh48xrEVj7FAuk3thX5W4cfZ3L5KEC6nyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GAaRoUQWYS15QzRqTEp7R3Kd6DVXqdtFTKEZJ67L1guAsKa6573YeSHKpKUjnaQcJt4KZuFkLKiv5qpZt2u2tDN",
  "key1": "XbB6mwW3oVRrcunP3R7M8tDo4HNGrKoU3ivZLrVpGBCTXvapgULzbyCoUSawiFkjFvEoMt4NduJZGRrQkcGr7Ps",
  "key2": "671Cbqp1Uxhkf42GH2pFw1zfB8ZNjYyNQAbTim4qAUGbbWeLpeVGxNreaN5zqqqxxbSB9qaPsNrKoRKSbUPJYukc",
  "key3": "5wxT7P1U5DPzdStLr9Ha3DcYWhBD4TyjheYc8ir98u9knAJgGcbhKzpsjHfv1k9MW2B9XUmS4cQQu9DVH6JP2nxb",
  "key4": "4LyiabjuX3UmtxgS3jCmDz7954oL9FSntLk9za9g1DY3t2aLr428LcjizhFMGyFJkwcggS4qMpHzK4dA9gMofdCH",
  "key5": "VBZUyq5hBcQx94hauTd6edPn6FAPJ7rxFJFmZt8YBjbecx8bi1ba43gQ8XpDqphGasZsfojdjLVPG7qVdJua4fD",
  "key6": "4epBxAH8oB5tnW1Xc4M5WEeU56FoAVUCk1FH4weysCbwxwxFxhKDGfAq2Q9WXBSnSSWjJmKVUkpQtTErfjPGE6cM",
  "key7": "jYK2kmCSfobffu6CBBQAgRd8WJj2dRCWch97yicXuSAGvZHSzt5hrZU2dpHEP29NmugWr1RGDebJKphJukBL3ya",
  "key8": "rMTJAwcayizsMexTxQbdmsfveXkVgYbbhXaG6sLZaJKToQ4d84aD5xCQXSzY6VzU5D695nuu3f7f7NbuLxyQa6P",
  "key9": "mSw1vryp9tarxFj6fT5s3KuCHdwjxgXm3uXUj7nzLzJzxBGpaam2LGxRqpt3GbZ1y3dHLDnrUenwsjH36pwqevT",
  "key10": "gcxt2VgfQSukb5R2YqjaZ6SwfwEhSbxJMpk4q1afhKe8YJu4iBToBMJ5rGgTBkrLikd2dkCG6Gcxm9siEkeFm6w",
  "key11": "4KTAiuSaUEFqQ8XqtP5WfmcJ9meLx6ouvvLKnEEmHWsdyuC5sbyLsoARW4JK488NiQjDD4HCQ6Nsg5GFcVFGNyxR",
  "key12": "3yrn9fRPQLZRWDsgRQp59Xnvqs8dj6wxaWo9SgkvKV43rtTs7L6dVk32toaPFTm4hy2HVHRFPAmJwK7iTUFgavzM",
  "key13": "2H82g4b9wsdQYfUhfUKsNuLmWbNvNoMua6PLXAK8yUxCerzQ1PxvaPoC675X3ZJCnaR4mEo8b2MDoGJy2oHq5625",
  "key14": "465PPgnf27bHJhKd4CZfrPwgFvyrMheGvy67TRcw5JpoDBYs7oGcv1NdyATftPZj3SS1YMmFXMcMq1ULv2Wg3sot",
  "key15": "2UhxdJ8rEiB8Eo5u9hw2uF712EjGocfq2NystSiYYfjumzv6T5P7EjSJ2Ye2pQntnPuwdtGRztMPxQGYHhGBgreG",
  "key16": "54UXmC65oV2oz2cwKPWjfwLgCvcqm29YroW6XKeDHksaG2dM2PepRRCrR8QEuYfXW1uYjk9dH2d4t8UUecLpHpAh",
  "key17": "2Lyx93W5h1GB5zGMT5orX5exHGQnm5upJd8XAUpFcaGNBxmEvJ7Sk5aYUUao9i9PTABsEVd2xHTskKepYKKEzVwF",
  "key18": "29Y35Veg2UUXCwofFoWMer1eYWWvoMKnD6YY4AXUFVPQCK3BhwRC9CaczUerWyokG4ByizefLhfdmDda5hgtcSy1",
  "key19": "4LD1v597ingSy4z5qw3kbdGUA1bwNVM1oMZAquVjm7HZbDjxoms1s5rQammkX9jCeHhcJTsQJ8pkRQuhfG95AD1F",
  "key20": "3wPKtKDjMCAFhJ75jkXKPvjaoHZLZSq2DY6NR1JGjUQRzFbveriaUYfXjaqJhUigPbkXWgDd5p3pFDEQx1gUr3PZ",
  "key21": "2aCBmjbVAeExmFhKabpAYSjvkxKfZRL3E3aurPejRRMjgmAx8gc7zQpdREXe2qeaKNfq2usG4Xkp4pcp8db5vMgR",
  "key22": "48UDkHMcZGRYugarMJpjMkL9bD5tgdLfJj49qJbVHRy87hWMSrNmuqsnonXtUs5jGqHKd6ULH8p1MfZkyaxgiLnV",
  "key23": "4N8CV6sxQZGQGoLf7eCVN5yamF7Ew9zVtoQzw1kMD6m1ax5MARpfc1KF2wcJaVUoB6L7rgDpvSA6Xsr8Ahg3Dovd",
  "key24": "KuDpZgiVq62Mqz96xvpcHP3UdrsnvQVswj16LaPLjaf6nptc6txwR6SUV4XrJAQqHAHyfgAp69yz1rUhEse5Bwi",
  "key25": "3kPt4m8YJKvKvv3Qs8zCrJx8zDaCaXMi2YNEovd52dvM7JVir4qA42CmLrGTiFuQfrVRMbAEEVgBLyLSNS7efWvB",
  "key26": "5dFcyLro7J7bSZsp82TNjbuQuhXzvAXCkMAfUPcfLSJmz81XtRJTUM3JnjLHJs1sLQP9QJS1ZygWEMnrex3an4Q6",
  "key27": "fCqRJehUJzCUPsnVDpd7DysoK1BShdA1zSDJtBxtwbgcuUqKmXQyrnz7yuQdEntGrnk9YxPt5Ryp5dCnRag6r7G",
  "key28": "EzZtQTE1eqsyoyfSoHcbg9mohMme6tQmfM1myEv7ki8qNAjyJJnR6XGSoxUdp48gEkL6WG2kyhqLmfkQzMYxpwD",
  "key29": "2X6EBKLkYHqrFW7Q8VMYkpe4gkjhkd4zyuk2cGwMKhrR1kLeRxkHGPYNHxzbiR7UtT7AMHboSSv2oRngZ53CFwqB",
  "key30": "Wf7aNLmg85ao65iP7cJWGPXSvL3xmPWwNiSwoE23BEpuS6REiL7eoq5dArEdKirbateCJEYLYjXpb2yfkG8nWpn",
  "key31": "4716omBfPznES7ekSukFmAriiL39XuRwE9waovbHje3zYUVqrHSip8pDQVEurgrjRgjyDrQ3W9L97mgKBGyaLcTD",
  "key32": "237h2YHF2X3ftDxWfoQkXE4CAfugich4Xai76jDqXeBDhzjiS4ZxJJYqz5WwME7gAwsqMLcBLutbCssuUJwQKHfZ"
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
