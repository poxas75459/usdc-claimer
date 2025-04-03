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
    "3XZHrMiobspagX5LvHvz6ZBLTg4VWgCwzNDZn5vFikKFjpuvTF6Yi6SmaC9FUWcVqd19BAxPsgfcX8hL7jxdMfNT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MceA3spL3w8JcXNTVZ26fVkrcUKUvUqWBWMTvFgg4BEFYck8BdKYWwafSRjtVwFNvGFXHhdnK8oWMizRVL25TQV",
  "key1": "3dyrikLQmsfEdQQ6KwQkpfzY8aeni31crnWDJFM8FWPCBm2qhVypkTGwMF8uDPR1jG5TSLghTK7HzfUDJzGdCsSu",
  "key2": "4KsDS1ee6XR1YWG47WgS1qYdyYxrju6YmMDjRdFAbJNC91gWQWQ2BWTvCeukC3V2Zih1fCJbu7yj8MY4z5z7EUJF",
  "key3": "2kKUCy932336MrEmuQqPe5vdyGakx1Yxe7qESGyba44Pd4pjp8UsDbofQHvMqeA8jph3kPjfxtaXmLYJEsZ1B1QQ",
  "key4": "2nAfQ6QC3ppXRcq5pMyX4k1MKZuJfczDA7ED7vyBSe1pYqPLprjNgKEcSFFg53pa2QH24kWfbavkm3HR9JFQE8LE",
  "key5": "35wGE2YhM7K1x6WpB6d3TBMgds4USxhLBNihpGMKj98q7GaGdyYhxvSUnUyisz59V2oktFuFHfns1v8hSWVzQS77",
  "key6": "61ox3z2vzGoEzwZKrbGDX5ZaRyU3hYcEB89XFxiPW9NyfLCoEuhvsLjGHyuTufviCvFQZVc78hjTfRkvat4dfBkR",
  "key7": "hHCn4KmA6sv918gajj14BHBgX7B1wudaeuZABoGbLmSq3qYZUafUkoh2rTcSJS9SxJZH8gEx66A2JpZ9UjvGXvq",
  "key8": "5fkacJzgFBej5qEj75Viw6JXermQ4KTL9ta45jhiMboJcAUv49XYE8tjPwMKahtrKutA8ZNLECkju4yxdVxtkARk",
  "key9": "5RzdRTLhVFc6owePpC6fXCaySQ5iG4z6LKmtJ562NGbC363K7t7H7iYQ45D8xKbLUjxTpDHh8kHQ3ybQwTVZvSub",
  "key10": "3CprBWZxcwmF1f1267S8bavpVMNChhDYymYZxEvkkiNjAxNoF84zXK7LxHEJRdtWgzi2vH1QoDz8D7FhUtN7CUZM",
  "key11": "2BbpzT95mET4hCKt48CdhJY1rQBsa96upQRr5MyWhXAU6Be5zJQM56L57F1YvofDuK7CYMm85zhz4TfftGcsmxjF",
  "key12": "4sdq3LYFU7MhnK3RkyG8iGf7zA54tsE4vieUXVFt7AUF3XcWDQgDARY7dykafRRnAZZitGCkPQ5GPadXnY6nSEUD",
  "key13": "5fmq9BtTtWbjEisfRYcm1BYxTWsTjKgJDyVg411fqh7UzzqaN1TTRttjinsTNYk7FZ9EtLiJ64rhpyM1wjYi8Bi6",
  "key14": "32iDoLAhpyFhPdyUunNHBZL59j71nfgZKLkQZtbMmYCPixJLB21CPTmv9krUhAYFEKF3vjY2sJyavYctwgpjdyGZ",
  "key15": "55y8EgS57qTBnTGmY35Xu8PsE5QiokUjrgmUNcWZ1MHUhAE5XrdFVbHG7ZzdhaATzxpt4ULQ1ZqY6HFyqfxvz2VS",
  "key16": "2GB2yyEYG5Mb9Wi5ZbzuQ1NgV28VHjfp5gfDDyca3o6oVDoij4jijps5BoXXzoYVGvxQJDAMr3qt3NqKz8ryrx69",
  "key17": "5ab1UpEtswJa4X43QLSddQcykfWMumux6z5vNBXCfuLmgC5FYq6RCDGQwU9pNPhPP1PkSry1zSvTb6GTmjjyQB6b",
  "key18": "4irUQF6Ttr823CkqXQK1RXW7V6RRtdhAFPNGgeC6avawDrKmfkAZF9e8C676F53EREUrd4bJYd318N6mqULVLwLt",
  "key19": "5w3QH3S3ZihBu1fQ9Y3QJD3kZHWe3F8AsXc2bQu4b7wXmcAZaDaFsFGcnqg74fW791KWcfWZRPfn7faAPB1VpG4W",
  "key20": "3Ux4tboF9RV5izUjgRBuG5h71tAMgRRanVbnAnSFnVr19NCm7N2bW111T37uTLFYHJznAr9hQEDuVNgGvgdcND9M",
  "key21": "3mfE815x9JUxTJgv4APCFfKgd2Lw2Y1a6XkvbBb2MaLrJfUwEqLtbRB4k3BEfm9D3vWDjo4R3RLuzRGEMUcjqUmT",
  "key22": "5U1HBDCTNWX6TUs9S15Dw5MRu2ETQxs25prU8TCke6DTqAp6RQzExJaq9Y8hkbe5EYwb8fRNZ5a35oATxty3Mevn",
  "key23": "2avze97jQZgwgY7qK2KHo9eYqHMqFe97SBrDnGM7Qu5rKcncEjmg5jdBDHiD8g5bwLQ3DHZoCUPaD3SBJeVLuw7c",
  "key24": "49jpj2V7zaskXBnB6qojYgYEhcFzs9gaRfANLCGdp6D3yWq5KicRpyVQyGRGh33r7aGG4MZDTRs5gddAE8MthauA",
  "key25": "3o3D9agSBiWfncWtbPML6859NrEBhusXasf4JHnfyAdvNgC6z3dnSEWkU92J66vK1A7tXtpbnzSQsPUrF6gZR4Sc",
  "key26": "3qopNXFoVLnyvensrMeqmRdnUtXhfv9uBAiuXJaq5heppT6bwdSBUCZiZU7WhL48kRecjcSaJRnEtcGVnwFTUiQk",
  "key27": "2M1dHik6MhswmQZ8j5QAMpKatD5V28Zmrq8yMe3hnMMTxt2nVxbNJXjAuQbM6yAgq31cyBjdiBNdxj6yVGbCL49m",
  "key28": "s2wXAAAHa8vWfWJ89WTBsQ1KYwH7w122Ui9be7cUH2so8d9dnCFdgeE1e24igUabZMM8LoPsEX9c8ATgafih7nm",
  "key29": "L55EaDNgthKtVhBuDdo3WFP79EHNpkJMStfGKdqLfvteonKZGpiYM3L7qpYDQu6sobfKUKoNrYyEiahLSmTuxSy",
  "key30": "447uUvX9doVhJYWt4SmxqKmDZBXyeWDQ5P8VJ3Q2vBdNxCHKz93FcZP2QvCYZcWsMg7u5brxVEaCgHxg3LYqDZNJ",
  "key31": "5RU1tM5JtYS7dZ8AaYUDrGsUeyYnWefjjFzWDqtQ6WSE7VJ4wkwMc7S19zGweGKhc5thjp5cAa9kCFAMACrgXG6T",
  "key32": "426sv9jzatqCdg8U5icpjDJVtxV12gXZxnZx6isHLMnAw8wGXJQAsUPN9h99CqDCeKWPoTFY9rHPP3RFTxuSzgzp",
  "key33": "57FBMpmQRfstWnpHXEcjrpgHVqJsfDDxnY29xGJiJ6LaHWLGhNnArYLcgJ5MT7r6wooVof8Rz4A7UN7tu4JZcimQ",
  "key34": "37g3gPLRcQj11ctwN7ttWB3pGmpvz1pXxJAUHs8ZdQkkgVDpKcR71yb5z2EpbKNzfrra4z69e3zmZFdqW38q9Fu3",
  "key35": "3XZZHgMZhT9NDDcyFzasXofafQhz6WqfQWbvZohM5q5BdELH8HbJ2icDb6TQJdpt8uqtvZhiXFxr9FTC2joWLi42",
  "key36": "2HpfJGZkxuc912YL9JVZpHQCUHszSSc8H2mdNNT3whpmgXE4VPY47eQxmRKn3NDpnLhPVG4EF6m1fpCsVhovj96q",
  "key37": "57v4SrVqDiD1URhtFafa8Y5uhHBwF5Vh1XnkHLWiio7ksnAsts9C394iCbbSUJ7GTML5eUM6k7jhbQ3gYp3JZSFb",
  "key38": "3bmRt8gVikPxxchBLUQNwqXNdNDWGq8ED2CeyeXYTHrBAQHL8jpRkMHeg87aSVjFBk1nu3jDTKyYuV58imEiwXrx",
  "key39": "HQZQgoCc7nhKu6YZN6ejWgk5fe3JcA1ZF8D2CVizJRpPQLGSso8323VAEKixxSQRHpXeuiv3jVnbmNwH2Zebnis",
  "key40": "4tFdKeqmd42KonXDWKspa6sgsrqeVmuqFytJ36hogdJ3QXb7fRWVeJHwi8xVACv5EPdD6Y3MfMKEpKHdcF2Cvq36",
  "key41": "2CPUasV18bsRoWBjfHFJvUkEUQkbAsncJfW9MgjsLVx1BNTL9nwtF5aD6uZRsdyqGJrFsQoaQv9uMWbupqTNK2sz",
  "key42": "61xBeiNQmqVRTuEgw4jyqcCnGzWrWEa2NctA36hTH6tQ2iNe4DvH2UuawsBuBSvfWKjpf4qoc1ExzbmTupZTr4hM",
  "key43": "tgC4BVXqYdrfeVQwKM8u6ruLXPw8zya2XLYgNBDaeAepG5PWLSVDv5ivXHZatUSRELgAvFmKmkpyBZZH3kvD9yJ",
  "key44": "4n23qzXbPEPb9SevqR1bnuF1ZGUPzxzKSTvUP6ji1e6mWMb7nHBzTzfcSBLHnktJZoFWLyBYks38yfXiL7ec4GSr",
  "key45": "5Jv3L5PhvHkRTj8L8Z5pWagWCG7h4LBgKdvN4Z9xAD9eaNdRiK7iQVzBcoAkZaqEMEkQPoQQA2ScA23sYsuwSPbL",
  "key46": "4YrBK32EUWAgoUyCmYessNFXTaD573cJYm1mPEnaa2okXiY3ShSbSSfHWESDNWQzatDd3bqpjP4yoo65fnz2GB5c"
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
