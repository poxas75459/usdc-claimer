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
    "eedd3sjNbMh5Fc1TPw7WYcxLxG3KndB2YJDNyANBGpUmUDubeiQEsF68DGEGDZHGaTr1sc9EoUczQDC1jo47Aa4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gPwPNQnEy4mBPiS3UHb7xg3ifJm5R5M6BiCcifrPcTHqHxbMWsWYikFrfayVsd7Wxv3mS4adMbrDD4qvjmEWTC8",
  "key1": "3aorcD5AcbJZuw3QkF1ZpzGhxZb8DJYskcyNQAbebtWA7XrynGXXyQLyVyQdbFhgDsCkvuDGFxiqbVbz34T4Q8TM",
  "key2": "2QzgKYHNbezVbWXmahY8ZL5zpgZ8TxzARLG9PY7mN9RDVSQav34exQn8dX4fVxDjnKaR1qBDcUoCwoiizxmQqvk8",
  "key3": "8e6NAswSBEi9EAPHFv7xqjKjUhUExZ1bXQohzoWkZDRN2kL2ickH4YzqRPF5bbTzsEgvfeVtXkcyvbvixDicvya",
  "key4": "2gptmxgdiCzRQQrmVfKpa7njDfqmDZDYpNjVdTwxVs7QFaE661N7YuuGHEoPn9Sa5ZgWRsjo9jn9oPLVwbJvQKd3",
  "key5": "34opsXUkBsjcV2dgiYktVspG8163sdWeoNwrVJp1svGtoZwMsEE7EhV3cR3MTbMMhhm7ucsyRHUVQ9BckeYTFGHY",
  "key6": "2zho4mHuWDdoEvZM23oXjbpTR782VHwE8S7fyBFrvuUg4ZQD6p6ZGm3hdoiEwYggyRSQ6VxLG1MaPt6edQ6PsLLS",
  "key7": "2ZLAgZNVCpiAxGD7EbojG3Mqqdf9XT76E8Xf3YzZ9vBMGumdQ37JzScXE9w9xgcXqPDBpxbwCHZnCM8N3j9uySEC",
  "key8": "3ecyauCSmKkKjiB35CDZF7GCyEnEmVkRE3qEkZSiArmVnFfeooJMjHcBrhae82cy1qEoQJyjbg5hnxMwihUhhwWF",
  "key9": "5knWyPDhJ6MSbdUgmmyC2kCCGEsxhcoDwUWmEiYWHTy5pMqALgpPnErQ4B4248fwBULvT142HwFyVuFHvapyKzK9",
  "key10": "2yhtJSSAoMoCErEeXhQ4ktDE2xCAQDXHt4hnVFiTkcxcaukg7vGaFSoLsdXMGMywhGwNgodU6M2247w3wmbd7WGe",
  "key11": "5wNiMZ3UWMWTh3FbWVTSw1JE8JEgj8WGUS63c6oR2cSUa1gZipzVBHVgZCJCG2y18SeeEt16ggc5ryHdFdfrkSFV",
  "key12": "5MBUHfWeEu7c344JP1fkZABGx62Xns1cS3E4K8sMBrDDZtoo8HhLEX44hTnPoVoDNC4XAxYapF7LVpdfdTPezpzx",
  "key13": "Ti4Xc2zkogGnkGUUGH1fcXvmVYbLKS8e8EvvHkGM5wWojynLGSnohBBjojLtCwKjz3ZLoTvL6vFa4nrDsxbe9UF",
  "key14": "3s2Vgbq96AsJrEecuYzpXdZGv9TgiXE3e2DUFVNgc1sfHew95NwdjLdWZrkWnBVb6SHXD1mikjCCcKVASb2R9ELc",
  "key15": "28zAf6of2jmzbpPVRGvJzM5sg4o7tsKmmb1WHH3NZA9BHvSnr3upyM4L7xspQnTRhxXZhLi19F6pk6tCAUBsVBrC",
  "key16": "5pgMfeMDguyxUjQfRZFkmpYEght9mzDhNHqeMXKaGuP9y8tdh5FcFnNaygDnaTRCXxoAA68qwTpaY1LJtQKBizRn",
  "key17": "GES6nRRsNYm2ujWxzVUPiFyeTubZGP8Fz4eoC33rpUmCDvGn8gwAonMa1r3A8HJzBQm5ERGXC83SAXjv7V9L2kf",
  "key18": "5iW9xXWWUvC99sdcNDSfdzodfxgABmz5YoBK5KhBnbETe5cYnd4z7SJx9hvXcbwoYrNJU7vcEAzkPUhERZt7QCku",
  "key19": "3JyRkLHzKFTmRyBrAtr2vewYR2GMh6oSswqnJ78fPf1wDqmpocG5QxcmP6Tr32G34gTszSKxUFMcxx4tGgdXN3d3",
  "key20": "2yG4hGEk5k5UfjiSd6Yrdt7jSCUDALhLcr3GvUSvw9cgh6YMxfpHsYX2VAtj1DvswQUhymNE3Y7mVQ6F4Dvumahv",
  "key21": "3EXxAxuzCHvk8funHtyNRtd41y7mVLNz1warhpdwJX5VC3XDHKhKuptDTZrm9xRn5B3CGtppbvCjTKcqE9M3egrn",
  "key22": "2pNVdLTbDuZAAzdKoPuLi5Cu1TB4SWYpBzjL65W3qiREQDuLNJGHhHa6DSZVCfS76FUUnoMftYGiZ1MJu7Zysi7Q",
  "key23": "3vAhoxEjar1ZzLNSUXGDLpA5SQuGYBnRkbuAFDXfSSi5vHE5qKsPCnvZXbcX2CcGhqefFa8SqoTUnym2GFT9sAEF",
  "key24": "4FUoZcVcLmccGLkwkeo3bvewy1K158gi593bKr8vDR11mKyMvEvPE8ns5znA8Dotj35hUbnkBcZagYcEk1gkoiiT",
  "key25": "5QSqDCfnjUKRZxavUv8zEdnDJrzLckH26j6YHUf8ruqKSvosDd17QcqGwvHdcYXQ752AjhKpz3xMEXAqNuzXRjLc",
  "key26": "2vNvS7A41FtNd6pQUBJAMNpg3p6MQwjAr86phLLYaCTuN78c614e4BUwJY7ayxRSxQ2nQSCDZRXKkVV22v6tHv1X",
  "key27": "4MnwfeFZDeeDcStHgf8LeCxVQLEsstw2mjKkv6ubYrExv5MXjLJT6R4EyUUHo5bQX7TUFXAnExjehGzdr5j6TLyC",
  "key28": "4n5Hr2imuCo2suzuGdxXyDEbtmYj7vZ8bo8u54etsGATq6GmVFEcgA6q8NSTGddY3TZUCMcEK9DJWUMCZc58jeSt",
  "key29": "38d4WJM9MPHsgJuATUg95W6F2jfbZBQS7B6U8wTA5jMUN3APRCkhTWcDcf6vmRAB8nkCwN26Ndvk6K7tCSD9BVgr",
  "key30": "MxyaSwwEPHATfNEfJYtrfqHGTVW84rumypwypT4cDX1ReF4TQrnx8L1jXvfuPzgQMf9rYRMRbmC3gnvdFwhNY1e",
  "key31": "5qHJkz12KFtYkgeiRzawuppvED2qNpNQ1qZjBdwgkTzczK7C1Q2y3hADdF4XS6foJkQPFhfPdBMYx1MqDJDDKo6u",
  "key32": "72qY6Eghd6m7AQAyGceSHsRF2cvFxdN25MzKhxEt158mHVJKrS3eumdqhX5evrtXeBKpDKN5TzWYtCd7cun9FNG",
  "key33": "5Dhghoe4ddeTFHeyceGn2irJ8a7R57FMWxvxz5uyVCD33hvJa6rPomW7iMumD9wqddq19NJ9dW1L2XYxJ7uNK5CM",
  "key34": "55apG69ae76scuzfjUSNBpiyjgEU7mRhXD9EZUdN867LJJcZe9KPYQHeQ7gzysRyRfp8X7bH5VDrFPTqGeyfshzR",
  "key35": "2FFqNbs8oQ69RS1aZBjxK3HGrP1BCYoatfAAJetZUirLh3TYeN8CRaiJxsTqt9WhfroH55NfiGVkhcpmGXcya45y",
  "key36": "32k9Ysbap4La7n62Cqoy7bMLxx35zKSvx4wXX9ucPPiVqJSuUXT91Le8q6oir8cVTGvLJUwp9EJB1WLTVxo5ds48"
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
