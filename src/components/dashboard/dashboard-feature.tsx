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
    "2fHRN5dwfP2QmKShzb5FXX3rBHSrQd1qC5Xp7Hrb4LFy4gG35thFyXWBcPcniHDX3NamPtPBfBYtyS1XDRVUs4t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M67FdckMrP9SaUULL6aPBRhaSAVfPz6td5V5xBkwZYMaMfT7k9WSagL3QTdJn9nwepHJAnCCAukpRCUs4ngjVKt",
  "key1": "xgQBCzzJ8BgyaW4PbNTMKKAg8EWQ137hW9a9eZTc8SD6CiQNTeRDcfheXvMePoLu94WSTWZ6nYpFfSt6t6z2mSL",
  "key2": "hypxJYFxhtqdW936Sd5opfb6TofZBDpFN76LCowH1HJ47tpmdoD5UrRcqketBZud6nBgsyHf8vgcjiiBEgF9vhn",
  "key3": "5BFM5nuzxKHSSJmhfBRRbhme6wXbjG3q6YNWRBnSEwNX9n8pTUPbb36SeeKTCYm4GrermucuP5jorvQWgyn9e2Vc",
  "key4": "3V4KpEVKu1GtDq1frtVDK6yCYX3G42domjo9HTku7kAwAzLHH2vsF8s7QERdFYcKNQJFKJM1chkqTr8VTUiAuTXT",
  "key5": "5mTyuaDqo7HK1TC5Lk6xZYpzmekVnSwTvjMxMCtVyCSMYXhCDFSFtq66bynqkVYRNBTKzUEaGcg5x717cXxAQqF",
  "key6": "yPTTYJLwEUtQ713HQyTPfVFpwXp7Z8RswQV9yBj5TgmA2sbV4RKcFimbkMGnSrT7g3hEZ7Q8tZBaNnVMtd8Mwjm",
  "key7": "4qwAjk13LC7y8EfLNyq8vCRZpMjTPwNXh3fXBtJgwwUM3URZcTC6LczW2prV2DW35i7adNq88o6XVf9R2bmi3Rr",
  "key8": "2uBcLp6PZjXSoDi7mkRW2ggXo8HKX8ygjSjcynNgJBBSwQMLg14syyp3aTCVKYpHp6TtbHGLeJDZu6dGHfKCx7h9",
  "key9": "32g3sj2eVo2sXav5cjMRv47x7vYtAXba5cRB6mHoMgPFVPUgwnVzJCsHPoWdRjThVzP3NmWjpbXweZz8zzoNTwLX",
  "key10": "nuxA9bzZTfs19ma7Y8gyURPepYWvUaqCRXs3fwAkKGNPhW6EiqAm6M9Sn7n7YY3VfgfebMgVbKG6ChkoVPucAo3",
  "key11": "2nsmx9bQmqacwHXKYSrurS5P2tAHk65XF99RUJ1nmyirA6PMheSVgJoottBq7BWNHjC6QKXpYKw5sm9uLnxiYj5m",
  "key12": "5c56Dq5A5kWJR2oTC6NBPiXBNSA8iXDPTEHgs1sNDQWQV5saa1yppvJa3Ug7Nt7MobnnSKZhpiGYkXGZbN6uZ6CG",
  "key13": "wgQszkQJ5H56VjGiQWF4ScHLcUv2fgvYSuSJteWtSku65r2T7Mah4KZjXHyvJfsqvdPJ712UVmFDNnSt4Hd7epo",
  "key14": "5dv3WrJ6hBwyEhFptvdGXUTDqDP1oiQ6cjN79uAfXVf7r15CcnjRD9ZE3gbHQt6rDjXy4oU49vK33PUG9VkPWNfK",
  "key15": "3oJj1E9uRbzRs5M9C8VCACa87J2JX9FYoXu8KfTqvVCcfX4Fw79isuxjpHcYtyurGJoo7Mw4gtwXg1QPw9tCt9Ri",
  "key16": "32hgY9JmjyckqT3Svs697wA1rtcd1utRQCSeEfFq6KXRFF5dFgZPQZBtZhnJF34dNhgSkLM3bzsbrYDJ41ozNZri",
  "key17": "4RDYAAdYu2xPaiLvjqJEg2Ycg2kVeZ3r4SGq8wDEkcnAKGBfLFGw623i4eXXfocsCP4zZpbYup6EfiL6zBhuL7hZ",
  "key18": "5muJi8ZXPXS2XiE3VfHe8eXoASEr9U12ruDDFWNsyGY3ajhq1VVYs8sDb1ErWo9HVoWx8iZktxGdJx3AP2nNqcHt",
  "key19": "21jn1g5anT2o1tknw84oTGKoMjvNYvGo8t2Mk2q9HLmdZjNJU4TJnMMeySZ4AvaNfnnsk9YcfpxQDQgPKRma977h",
  "key20": "3jdmb6bcMxawwDzyi3RiHJorDXn5kGFxhoabGNymJtFFsVMxj5JscPy4ubuVbyCnJksjYKQpdH1vPEzxmnB6GY3c",
  "key21": "5FMiukww98oRGkUGNugNyPXZnhut3qtjoURLszc7ZSuWuum8V8oWH2ti3utr1mGuhEH6p1MqLyNYBYF3ogvfDDez",
  "key22": "2wDyEJS7zD9eqiE6Q5Z9twXjpb5a91hNmwWyoZqRD1aiGCB7LUcsuGGPgEgD9wvC7RLhfTc2phd9u2gFMJQZYkSb",
  "key23": "4NzFTTcns3RHpvXcL9CaQJinhiJr9HbxTDM7iGzkmrRSj6a7kL4Z63TcyQ8ZCNCRRsK67Ceqhg3TkFz31Z3wANFj",
  "key24": "b4h9z9Czeo6DSgTnnLHZvZUF6fkntM3SGJQ4L4X18n1vXnzCjM3JroGJNRpuCvthxUP1CsFor1jzszYgQXLUctA",
  "key25": "2yKydefQ736gTte24xyJXNC5RrZWc5j5RqK2EFANyRDHimraPwnUi1pFRZ52zqBKMpjcthuCwR9vTX6MtQRxLx7T",
  "key26": "4SRANJuR73TcMgtJcrFqucbnX1WMeZKM73dKNAz9zJWmzcy5AvuXxXD1An8JMNXuUyMJXe29d7FVeowHYLGswT2A",
  "key27": "3JYEVY82Znh4TzrXNTX9YS6PoAvE3Br3Xs8sypHTdJqEwXT4M6vVNfgy1XrgVfjcdTJqE4DYcYcXoPDs74xBAaqH",
  "key28": "65DyL74Fs1fYwesjsERnkfc4DufZPi54DwiwH1rXbuTAWfDtPQjZivWXcWkXo8YsNZAPsE4c11fZ3WskGwQMm4xb",
  "key29": "34LiF8ifMctqTzVgYmM1tQYYFcCyzHwkWSCyjMgkcaDyddrdArDVKTCvgiwUHzwctUyu3uRBwQRpa1nbLqcFJQrd",
  "key30": "3fuD9Y1FJ6mDD6Qton4S3KejmqzfXKsMuQumeZx9zWXNaKUFCgWSzpVTQ3ew2LL2UeWyB4RFVkcmsQE4WWekHYYh",
  "key31": "2saVzAKL8A7kNnfJ2j24xyQdecdSMHdsxL9gtrNQpkWmY86DWQLxEmYR4jDKvNAUU6aMHUETZSMDc3PcDhRPTfPX",
  "key32": "3qHgjruQ6JBpRfADsJyLXDeBqnQcAEQ3DHYR61ZL3Lob39on8isWmWK2YLf3moHCj49mdHYP7jUbhfrBT3351vq",
  "key33": "3pHkxKui7Roha8mcFkQEFhpodZ2MsE3pWdZUMe121BP77TR99FWhLefDxQ4G3LKocieczPSUGhN1eAiVWXnPQedR",
  "key34": "5npzxzZgH7xQLJCD4khiRZajTdTJV4xLcbYAHPkD6N598wkj6iuontCXf9U7WTdeFE57zEqP622DakJ12v9yXpJd",
  "key35": "5tr32G5zqnXmpXhTyBZ4gWGptBt8Pgepj2jGmWdecZsdr9Sv8fV7aSm3FNzzDcDEMjy6naE8T9w9isfxwoEJYDgh",
  "key36": "3aJqo1Aj5qhQLisGVQjtLSpx5NPnMNLemZpoDtJkdbgxJh7zKDPVCXL57kzKNsxfLMqsgCbZXARB5pqFPiTL1BCf",
  "key37": "odqBiFhDy83UnX92V6FhxtZBN1WkgwGq9aFhZ6t5JpYdfsKR1vQMxDqUtvWMK7Jku8g1BRRvTMyBeRC3KaQYqZs",
  "key38": "37GApxDDs516go7su41K9AHWVgGqp91R9ReLAtHFvqtjbpvhmoNHkLHur56hL3rdTW18fDuRiEo8LXQKUknUmzQ6",
  "key39": "3QtMVmWN5jq2GSMYW2NhY7xQKSpHeYMPPvWa5oT3JH1RwqiY5uB3x7f1CqgcdyySVqGfcJHq1gKyi6jmDNhggMuM",
  "key40": "5v2mTf4x4dJHha7Uxo8P5UAV5uKaEEWkt4FN7eJitfsjV9KGKNvb9dHVRPFmh4oZ2BtAWG5TkAbmr4ZYiX1H67vo",
  "key41": "MnDc6ueQ8ruzjpTzCPkjwTFzR7Bn8mDqjpPMBRxCVEfeprsHwGMh2oEwiwQS5Xuy3kuHitzviLSRP7EWaZt5oDj",
  "key42": "4dWeBgWCzmPcXWnZxDZnRbxiY3rRt86PPJvNCEZQCPXnDESyJ2bachcCvtPy2usp7taryq9idt1R7vFEGAsV6X4H",
  "key43": "3St2YomoEHRNq3WayfhcdW96LANCSFDvk99fidgu7YuWsNkpzgLacQojJ9CEfpmAySoVMtPew8raGQ4TbvthVh4G",
  "key44": "65vUb4p7Ga5ethSrictG9RLhNC5UXnXh9nMmryDHYg1AFegth2pByFHdRSzcioZRi7C1yyjWtLHgFCn2LExnVxk9",
  "key45": "8j6TJioKouYw4ibxkXg5m4ef82A1G1DEkBZwHFMCJJ2AhQMixGebKCN7nZK3aj5mRs4fg78pwCR47s99joXF7Ni",
  "key46": "42qnAp3Gf7XE6x655gvFAGxoAvoaAW65SSNXH3XDdV989NUuEctgVmgHr3CZD3PBvGxYWNBB3qnrasa2QRdrhGL3",
  "key47": "4BoziJ5smBrShPFmM2nMkFZUevBme1sHk3tCp47Tm8oNmWwPEn7rWPTiZauXGWWC83x8xe4FZkeQobByMFxwEeE6",
  "key48": "3W9ZqxTULFi66ggoRjtKo9GBttB1x7MV2fNdsKDw8jRmaDy67V6mGwft8eDYjUpuu3kz5cLSQXQg9R69x2YXcnas"
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
