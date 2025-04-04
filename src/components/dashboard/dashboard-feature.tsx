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
    "5miPjPFdjVqUMEPXFKC3wgsNhQuMgoyhrzeToj7wWDXx48QvfRUJpGQc9BYyvxT76mzxsrSXsPzPdveyRQr4Nji4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oAgQkMZXsnARLSHcPTyHZJkbvNzBhic1RV2DCEFGxovWZkELaZ7jHSPdvQhRgm68ATqvxVHp8pmwdmm4JX2uk14",
  "key1": "2hzTQMWurRzJ7nk6GZ9eeJYxKPD9LDyyMRo2oHfrSJv4RdWd6nrgLzRGfpST3EsD5HdSoCLVGq5Y3nviEuimoQ3t",
  "key2": "31HA7LaZqSBWSyv1pgrbWtJ3QitnACuF9FYzsPKXpmxdsUug6CWdgUbwZbgCSfmimUTYUZaCMzaP5nLLjcBhborQ",
  "key3": "4QVukrezxRM8ecZd5vW1U2E6PhXEuwpsDFFdHqm8mBqVvaZd55sY434pxxDXN4TSZvBBARGcRjM32UK5mzTJszZy",
  "key4": "3dpCJG9JDs3t2E3o3m3voU6XBXCWVWV5CSABvXQNKBJuVKZmgfZXrp2tMukU1EJDvBakgXzpA2Je419zxYnafL4u",
  "key5": "3EH1x31PFikDzjskow9431yBrBMrS9FKQ4N8SVb8R9ppocsfGmtebsPoJw32ReUan4dJDbGG6zMfwTwY5Z5g71Lm",
  "key6": "2R5Zn6f59H21rnhSvvXfKy2sPdWVF1FJP2bXUXakaTNLs5gaQvsXzHXZw7BCkQujzX6nBSBPqx8ZZf8i9szEYb3N",
  "key7": "mLyWwTQ1FnVDDsDwA43y1dtDBEvNRsq5Bb32LNgzZnQMKAc5eUnkGrjVbQCPSZAQxuSmfqLbuwJ9MJrng9BmBg5",
  "key8": "2eHYog9Lr8ViMcz4LBRXCvBnYC5yARJFf7c3sdkABReHL39L56nsaZyWeHHPJuuprCGaPy1yL9kWaxstHCqrCEfM",
  "key9": "eAoa5g9aXPnQM3PtD2oTZ9ELEL52M11kwxrNw5vUwQGjDZ4EAokXGWkaLMPERXUoMZYrput1vb7yrtzDZhKa6Jf",
  "key10": "4sznG71CHHQVwm6FYEjAcFH99vwPfdc7qUktfkZHvoKZxar7fnXiEUD53XBrnBKhh5bn33tcKGF4aRkUKEaWKChe",
  "key11": "VSegMHFoL3fnqsEEr4PjoZetePF9iieLAWQbnWhwvrohboagGDSzhGRgXY44cTTEjcmKh4bwq6WRjPzs9T5QRUs",
  "key12": "3L9zbFbSxoePNcMc4xGeMEKw13Yj7DjEgpSsr6GjphwbqtreyT7hSXR8UMyCCne15i1R1Vm53WjjxsBmcht62Nr1",
  "key13": "2AiPtFi1PzPN4dpTfi75fxBQCYJwYyrhgd9RNNEGztuqLHnkXAhnM3N5me3noPUxCcCCT5MJhvLYFHzwhKD4dzgR",
  "key14": "3s4MgqGeFeCdthow4PdrdB4X7UxThe18TLVZ6LoULZ1xqLJ6MtwYzEQaF17uXV1KzB3C6hXMD2aJzGoPG5js9db4",
  "key15": "DdFKaUKH2Ru5ydtdvQgXqMU4t6Gr2uEcjVrNvFwVprNoVsPk3G1FmHTD8jsbpoCyTV9z6NoaboCz1BD15RYacUU",
  "key16": "52JPDtTE6f3kedrpMrxfX5ZDbQ5tKw4eEKruTbNkn1arY1KR38GESeAM31YCxmRS73fYi2G66jxUAhkGeSfCLWLH",
  "key17": "5p8Swcdf71quNhkTX7uYnU7uRnDWS1xihB9RWJXKh7TaiXJ3ogjwjJ9GachMyNW6bkBh6T6DaXJrHDs8YhkyX5ed",
  "key18": "36sZF7ifvZsQAJ2yaPj6osqRdujeT3t6JRXg3pfbAzAXtvN8ZsBD3E39TPgJ5yKqz6rc51JVEewjPrJJ99Akf64q",
  "key19": "bSgrgJ7UmKz9Mmw6EVJUCvPz4UwbaGCL8VxrzHtCHAQ8Fgsk6X4q21ANqykBqZskGFn333BVEatKSgUPzYwdcqn",
  "key20": "5YHqT7jCCkbca4VEJ4uYGQnfKQcE36sLP6D9nB3JZJruhrTddS7wN3RCfBi9NF7fiUtxtG2GcF58YagrDDf2KJVX",
  "key21": "23FW2eLpaXNafNu8xLjNSdgKBsdSJxBfgo63FebMFb4dWmWLTpruBcSTwKLb5xFP1rmedrw3UVg2j6psDs2knbse",
  "key22": "65kfhK7xm8G9zxFpkPAu7DGtzCpzx7VmuwrYZ6wgwRPFpgZTzxFeFbrMRxJqBbpu2m4kyEMJvbBGZijKYCsWH13P",
  "key23": "5xEBbQB8MRNeZAeoHZpLUZ7RTnjxS4oDjUqizJbm43orSUCjHjUZuBTfyRZMb3nGUkA7usLUy1yzdyX7wrvxbiup",
  "key24": "53uLciBhoQW4YU8vsdHUAfyaE7WkZYntQ3i2KHfksiiMRKQ2nEeuczwG9o5KCRrDEocLPfNmuCYcqcEmGgyPtazQ",
  "key25": "2fJFicNpJAZSvhXmSc4tSwy1j5BHsNuNNLNMpxVUxhwLv9Gq5TBBNPBycFYhLbyFJNFEC1UWrW96ysLcwr655682",
  "key26": "3UBtVswVMZ8hebeDKMnBqP66YyaJnE1sMmoRz52DXSQpKRXfmADmHdmJLC8qz7Nz2yoiXosztQSiNjoqbaur9xvZ",
  "key27": "pYf1VXXV1VHJrU1DdC3bUWxZZzpwxktQ55GYQdahfBEh2AbP2YtqZWTx6jrN89CFZ3YhvhCxW9DH95wTKjyVGA3",
  "key28": "4hgd9BMPtkLbo8yJK6PyMpPm8TpLnrqfTTkwEDvi8WtJ6NM8uVmcEULa4PJXrvwY6Qpf4wNtePbjZSfJshppTT57",
  "key29": "3XnEpbKBfEfCzSAY1eA63geBGXWW8YwXFuTcwMAQ9zT3kRVTNbxw36xYGhY2TDRPL6p6KWRy9mV22VKbuzQJe1QE",
  "key30": "41Z8riZzo2JV6mLMhkFk9zgwNTPL6Vvs61sXAWFGpfP25YUVhvymg1Gdhe5Xh6sGn7VThK2m77QkC6D1qiGQQSoA",
  "key31": "5ps5yFLQcEnUZm4aD9ArgbUsB3QHVjgYzQi66H6Eef747FZtmDooKQ1NxZd8MosKqdLXjYpc7Udas1DAQ1zcCpuj",
  "key32": "5cVCzGaCbQFdFtdsaUCLgZoSju99LNjasWrWq1Tv6vXxZ6CfLr3mNjSHH8tpiUh8CLzxagSJQBsgq9MWdAsAxGKN",
  "key33": "2cZ6oxxZDAYffaRRXpDoNJSrsdMM4YD9cJuAgvGaWAy981BJTTf8mfxhZPP7q1L9bSmrbqouF2FZ8drfGw88rnWT",
  "key34": "4DefvxNWENamL771e8ZCDTQKjWKb1pzFVuo8QgiLNiNQ3Xrp8N18ds1unKYwFHJsUuXUDJ5Adz7KGsEj6PheNcVc",
  "key35": "3jafCwFoqYFnT3fbtm7wpnA6WivkVUiGbR6avGETKi9ebskZZoKfWBvh1Bvsf9B3EUU5zbzmwNFQsnczmMJkxoV2",
  "key36": "4pGkCcyUoB9hWP7knNYz9JbbS6hFfMWvbem7Xu3aMU4YUNB9hWbj99jRnU5EaRuaV7RemzQNFzeKTkcR9GqvXVWc",
  "key37": "5DHnL1GVWBpDoSDQpDrL64ees9G3y8HkFDSQA8qKAM1v2GWj7R2PKPaCbfqtnd64knvqYQ6fKcFjQRbhx7bmb6Jo",
  "key38": "XLAH9omFfpkuWuRd3pQXoswCd7aNYJQRg9znLhuy5uPMTVixz83pThNezTz4xrNUdyKnDskwv3kvAbHY3FgP5mT",
  "key39": "63rSBuac6MQgY2hZnmTsATY1kvdGvgX1zq6EhBfSYK141ZJgqLF5sgrEbEqgRULdAnyYHbVS2AjpzXsshhvpqeEE",
  "key40": "26zjLLMqrbVBj8HpbLYGY5BNfMPXwaKPqyooxEcy1J1yGXDrH95mF61eTDqXBnqj4SWTN3neL9kd6QBP2KdvH1jr",
  "key41": "2khMNo9pB37y9PuJ1sSxYCjqQ6vEgaf8n6FiHgHXbSHp6cCT53ZebL1K8gC7A97bvmfdWKVkRZgUNnJu4pajbVqw",
  "key42": "4gCb3KWPpokmL6fVQSTb3gCqgW9SVvvstE5PzEt6AFwZjNfLb918VkCBTUQoFj5i2UQyNx87dxt7oTbmGUeU1qvV",
  "key43": "2TuMDAEeVXwtXn8v4xEyXqTNnKzmtdhkkaq8A3yJTWfhAy3ZdLya4TThsgYWwKmAbZatmPVzhX3KLa67FTeXzvP7",
  "key44": "5UKpYJifJ2aQYAHSrqyYqAHZmLeyXrPvr5fft5oZVW1RzcAyzyPwtD2syAUaKYkR2jqtqbCQSgsu4oVrXG3phn9Y",
  "key45": "4guo9NXcFtxziSk46noxMK9k5Cg6xCFMqR5X8eJLvZhKYgjBLEHEijs1auFBhwJyaTY5RzQZfygYtdRUo6P74z6f",
  "key46": "518PMpjdin6yxCSs2k7p7KiHig8kn6uvwYAr8GMH8LLTQECaAENFk8PbXwNKXXnoki2peUoWWKqERiVVmL7PNm4u",
  "key47": "5wiXsQrmqE8rCi48wA1h36eefzyABvPJMmoYfVLR8espAyEPHTGABRkTb1kFgxTiyJny2bPYfdW2AttJcQGfk6XS",
  "key48": "5AzxoDE3SXr79ESqBYp2ExHKunRQiByt3EDxUJKP8MWwL7z4vspNKKPxeVBoX5jp6u8xn4WS7T1Y8L6ChR8ijCQL"
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
