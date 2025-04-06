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
    "6VBr5EDwaHQJuS7BE9678Q2V8GxBS6y5duQLXcKbFzRBkxJJvzzPsLqu3LVSVDb3iPDjeANi28zPn6n49kfMiAi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o6c3usDywNGLenP1P1qSFBi2y1CDxhHzomfoJPMZwPhjPjnjaHiduTpLJbxH9xpbXS7E3jJjdKaJgKTpaiZCCa6",
  "key1": "33vjgax31WbyivWNmvwcpN2GLVPncbBXJZ61tDr8wHDhtJ1s94wL4ztDX7zvsseCFGVbofmwBD3WCMoMXWVpb2ZX",
  "key2": "5SmaLSMrGRkfvNsMbt9zVUbaCWZARYmNddiXwHyr8H2GWFstbuQcWKfpuzcNYk55yTEUhpgriwMQrLqx3fqhRuqp",
  "key3": "4c96hbUiXEHT1txK5tNo4SuF9LzXFRxR6TUSmTSm6VkaQytRBFqmJYFrmARhS8892BDKF5YJ1SSyG8x5EBTChmbJ",
  "key4": "eJCtQiEKan653f94AMtYmZgp49LYbBtMPq58LBHYBXF2UbPhqtbyuji4X9DJgRm933mAwbjD6gxAdq2ut6vve3Q",
  "key5": "3q7gpfYK5xKDziUdTb9ToLzGF4yexRaSjPUdUP8GLs4N4qnAJYVn76iG7ihYdw1U7LbnxdWs8HK9b3at4rGt1v6g",
  "key6": "2MBiW8u3HqDosjSqtUrPCXYjmcxKnRs42hqD1ZJ9v1FEpkMK2m8ZGzQ5Qpddk6y3Yhn1zyzTugCWbQePytYpuBX",
  "key7": "2ggG7pUUmxXA9JuQXaoVHMj1MC6LbGxoFqdzTPFkDgCDzo7LdQSvkTD3jQN3vgMrFnSP28cJ6HuWwFLDnmcRpUhB",
  "key8": "tX4gABQPZBwiy1ZqPAUjgKg6oHxCHYAgeJPZH7z2JaBsCPTKknvBrXQCGxAS7zKwf6TgSXoW2AyDkkhFBK8nZVo",
  "key9": "26VRJSBWZWUDVGGHyhLV6GYSMqDS9Y6iRAUYLwdyPVX4ezDDbuK8398Vu4LpvZJ8qaq4rMNRCVXVstJ6RKwDc7AE",
  "key10": "q5CizgHmvTf9Sg2mz7cDN3TdeUof9FGic3JVJHDNxruMHV76ZLQfEcscBUDvtqNfjyqrBPT9ScjbCRQo8zeW89L",
  "key11": "5DZsUK5f2Rs4zwuoFgFXWDJ4WBNoUDL6hwKdW6doCDRJqnCDhG1HZsjruu1TfdCEiSjJpiZNhPRPr8kxTjk9J1qc",
  "key12": "56ymP72GYeRXG9iMyd4RGN9bbzbL5mTcoZEWX5WzvAgqp5uPPdkd1Kna7kHrbGKFtsBpRt21VwZ7GxFmAmZpiWpR",
  "key13": "2BXddHUovm3ZK1SUMd3cpNyWecJG1dAPPMefqCcj8mNk5uactnZ41b8qatQn1XuGTpgBAioGLPPTAkzHBaUB6A2J",
  "key14": "hCJRXVS7KaespnNYEPqT9RdcmcV9yxvj4hoJLc64FKd7q39tgn1moDFGBgMs3Eaer5ahCxSi5KLsUw9tkkzAkr2",
  "key15": "2qRgdXvGLvZhPeYcsn6vJnhzRNu5ppq5YonmwFRSz7KqkM7R9q61yzqw7q4bTSq7hEX5T4vtkKqeypsfQCTg9ysE",
  "key16": "4RC7Rx5aSu5okb7FkY5vZdiih9QrTuedkAkSaHg7ATo5vzmyCkk2JAdwSSsbydi2qG9LFERgwBgafELx6EARir1N",
  "key17": "2s8BYGLku8hdtnrQcahRd6QQX95WKmrfaqp1sodH5sxkAzJ44cDdJnQHkSY6apaY5otNLnbiD3FChzmy3yv3PaK5",
  "key18": "kYFkntQuNqet745krmu7S459MTjFeNkLU5ZAkUUZjoiGxvZKrurh8KkoPT6eqZDPkBmrjM4RBTFP9V9ewNWQAis",
  "key19": "3j228bVpnUczRiP4dFvhx5riY8z7nGxF3N5hhVmvJqJ6x2zmWA7dEkFjFqKuEKtdv77p7KKx7kt4V1Wri1XGbqBC",
  "key20": "4oE8TXy8mw1Ba1G4x1WdTQQyHGQt5G8zSrajHsxGCNhgbm4z54Mzi9FGhG1KeZNEqDLMRkm2Tsrq355JUVoryc9Y",
  "key21": "3uZj4nnnZ5B6BX87arkQgPrxEW6oHc2oZ5KjK3RsDboMccttT5e5us3hVRTj8XwGVFSPwNDwbQnpcTYtvM5ic9UQ",
  "key22": "55MzYT2bZpipKRKq5B3QZzMvQcbh2QArco166Qucij77y334bxjGAjZj83noKgPuq7vp3MjVijhoX52prGMLTPjx",
  "key23": "5o3w65Fq1NKm64RnwUGgW4PHSUqt4DFDroJgvg9tfud22MoFX574XmoqciUJoNbPjZnCK5unzQVGCLL58egEGv2c",
  "key24": "4CfFrfsNFEqqRgrDqW6r2m7yoQvMCmT75Zgni78jPEvMRjK4Goih18UzJ9JEoMQy1PpnByn6ucuykpUbHox8DYKy",
  "key25": "48jWEz9Hy8DbpvbWBBBbTEPh1793kXchM7EoxjeDK7QmiTNBLFD6ZBhrKxcpoLUWycTAqE6gQCWPbB351ZiqqiGD",
  "key26": "5NGtjDwUg6LD3MANXsnyFDEp9qNRe8domApJckEMDpDWr9U6suLXVPrHwRkDN5sRaA5hgA1b9xABznikYqGndQDH",
  "key27": "55AYRZPpsy28nQV1zHAwHYJgZXtGmKrgrkz2bjectg8xrwAsBsXXzavriqzJd28YBbV5Y2qTxhxbSooq4rNCnKGm",
  "key28": "5o78rENnrCGdt68c5Q7TJ6MJZHD3dZWLrEDu9RR3zkWAudjKJT5QV9mMdkBzMQrKPXgSVRDgvAaKARqGgoRhDcZw",
  "key29": "52hUw4YJZgBJXJ21FiVcwM2QUjUWz8RoK6P12zbCwCWgXws1FZrhLVABZCiFXzGjFGFv5Mdw9Cozo5BrpAHF9foh",
  "key30": "3hJipTvRHi1vP6N6R8yBcoyrZ2GHu9hRQnym6KVtKapMQBgo2xCVpCTW1ENzBjPx4V74rFvCSLha3SM8WdkJAavG",
  "key31": "5jFCxtCjqRGX57E5fSJ6pWrgpg3DtFzzypd33kNbs5xxwHxWvsJNLDnQYFpiNEYoTHBY7ixGovAr2Qd511C3Kp1T",
  "key32": "idXibnJzZGYatvPyHjw5HsJPfp3E94SevipcThomy87ZnQgLyu5rbvsSSc7aiZGtDFk8vZAHoEvWFHKHG4HVRfZ",
  "key33": "4NiWH714zC1sXSkeESg7qi9H5VX3vzkH52P7vXPAJkZG2WE9dqDFx18t8CDju6a3Kwkb2DcEFxqVYinSEvGeHQkM",
  "key34": "5hT7mBgbUn6bzdx1namAav5URv1YVZuhp5jgTvT8wVygU6uSA2hsoLRcv1cr6676iaq7r8AuxjT3UBSsLttdUVFh",
  "key35": "Xh25BFvzjVLY3cfFY77ZnpRF8x3pZ6zhchAsFuorprTpLo6MDozsfwByH1VxBWVsTmive8iYibmuKKVB6sB8Pm5",
  "key36": "2aAAHLF1SrYEjmxU41wEW2wLQ79ARE62YXmNgLVj7bYe6qNACBMssU9ZshYA1r8jKfCVrQuC43wgw3hgJ8xvgtJx"
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
