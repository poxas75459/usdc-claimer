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
    "2hhtm41CjKAJBDAxjYa6ZX5GGziecifKoytzi2uqznCMrq3n6kKtRAsC7RBZnB99JP1ym58tgtiUYEPSLH8kRGj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZtVsGFZS2NmgXDL6tGpRFkBxqhmHjVgwL89bYw6FH81j4CSDPwMC97r1zvYebN2vq8wxtJaZ3PpgkpwjH8jGVvS",
  "key1": "46bKKGoRNd9CHEwmZhuLhZdUJ723Ci457rxhFSoLkUC5tKcKx1W2edt8n1NvYtKNVyAL3kuGLNntooEDVMJ3b9Md",
  "key2": "2SURf6BDtVgrkLZHBVmR2LE9wegHSCqt5UhmDDDdknXZth8KYtadqrrvj1EMJZfsjdzoCD1xbPkrSU2QM5ybdY6k",
  "key3": "3ZrsxPBkrT8DtobzDoU7tcLJfhAekrccMQLwnzF6BhtUhUn9pAgMy2kXcoR1fA6iARL5dRpDizMumm1hWUFj5C1K",
  "key4": "3x61j5BLXsDACdaXgK41ngSoxPDQpXocSW4Uf2RuYTTRy15MehYupGDw7o1PWoLm42ao8xUZ1GpGDgeFuTYZ1viD",
  "key5": "3noCqEvqbsgFsd7ej2W4ZPg3mmhnMBiUM7h8jCS38FRFS1omHMHFDLPubzPAo6xQT7DMBf9Q1SFdr5WM3oYdPhng",
  "key6": "32dD2Ui442P7hADTNG1ZRchETHFwTDCWHWBXX49kDvRzHbUBGwVVghYVmEbyhTnUhxVP7DkQLsSA6S2Z1YLeqeEr",
  "key7": "48gU4k7pK9YYW2mpykJUBudgRq37uEHjAq4ysksS79W13rx3o7YJ2U6fvEQfxH1K3QrG4H43iXZz13ozKRXoTemF",
  "key8": "3NC3PaRjePRwTGdqvp5mxQG2czdgXbXPvP65BtCXHcPeD7gJBbU4fpiepUeK1sUTKxyuq9NVuGkJjA9i1xeG4dVa",
  "key9": "fEgfqeQ6PvUBVWU5mK8sB5Q9s9FTxWYUW2ejBtsKyEiBafof5qirWLgtMNqaie4o4hoRYFscqmP8W8S5jtBxbjS",
  "key10": "4VNJzwbuKcEdrTjzNGJEbo7tkChe5M1p5W5VxPExDP4Pf7EBREkt36PaGtnCdTBEEqFXZNzPrVbQhSeuMAZFg3x9",
  "key11": "44T7CcfCNduxc1w7zYNXqf9mkLGwnueJNe8Jipb6SqjN71KdQK9zM4xq1eSgTvKMSTF8r7pN3rmdwWfj2PMrjU9y",
  "key12": "4E6wFmtYiLdMwwQTxZUNzHXUeYhdivNRFPo2aRjyJrajv35dVXbazXkUPPFD5EVFRNGFiTYFsFQ5mjfZsMBLx7qm",
  "key13": "VifdVG73qxsxGpXUZ9dsqz74JnKMGiuFrxGdC7JXkEVuhX9h8UMEH41wiBL6Vff4ZT34LLWsuMGeiRFEJYDUoAx",
  "key14": "2Vcd13ZJipvPEGtb4dbSvPBcMqVrh8KNSMU8FprwrdifqUPS1xTRvpQe4SJt2FMk5QjiHj1SdYn1gNcXXBpxUcUh",
  "key15": "cQpsLjQFPxgRXmLVXfKtpBy9ugE3RjdhZL6xR7ydsRs9fZBuSd5hTuHbLhN7CMLBcrX4pAZBxY1C6UTXTWicmjV",
  "key16": "6VqbecN6iJ13vfCQGWcQEYaPdFSVFjE4L2nmnshBSRFPv7zw8s29pcU3ZTVMQSS4J2u29GYKcx97zSVgH4UKJfm",
  "key17": "3Q4hbJxauLPG6JShczHrQQ7Q46XQk3CiKeRWzf3vKfKjAfns5SDfpABoEDTr9YYpQhxJ8YWc7pxkbRiQ7rSsczx5",
  "key18": "4jE7EC6qj2DayCfe95MXAb2SaL9fXptgwHF6KpbdgC8CN3xWjqNfM5jdGFxAFyELSSdQxisG27ndzTs6e7G678cs",
  "key19": "5qksCsCDUVhi5b5gAjYGkquboK7tJQh9rwhtEo8BNjJ64JRbaaXVrhdEnvP1upbQ2PdpgnBYs1ixQmK7L1osKKTu",
  "key20": "BmE9hEXoLCrXvESahJ97e6ugTwLfZu4o4nnAgXkhTJTeTtewqgeQQXq4mVvREudTPMF2ZUr74NUvqubzuo9K7EQ",
  "key21": "qQu2WR5HDnMY8JGnV9yudSANosrwokQUNrf3hAdyth8dEQodsZ7vaa2Trv8LxqvnsAXNr4epYsnJtQchNAPtCdB",
  "key22": "29ukFrJGqQ5wZ4xSvg7mLaPg5rUxxnzzdoWqJfupgq84Wm38ooRgWACGRnmcBWcPDCVCJXhH1BsDwnGwBNiM3VsG",
  "key23": "2AZTWjrR2jsGxjR1uNynRbKhFHgRtew4qYfxMgNfDii2LDcz6F4p1Sx3Ua1VcXRfCPgT8HHie9U2pBxvAs2tX8K3",
  "key24": "3RPQPgwocpuHuGWqzyHb8pobhSv9dKprYD1ZGU6bU5eKX8RqGmGt2hk4R8K4v35E2ufNpCPxn9SF7at89CdkZBN6",
  "key25": "2GVwqNRsEzXi1Q1YMVgMciXTghNdsMM7Kuy8s1NL9cvGC8ommXSBRCQ2mjHiSp2tLWgEQdmkVygxKar8TgkqLR1z",
  "key26": "3AEKnZ99WiirHuukbwdCcJj9ksFpLhFZbavtUzZ1dUAe4PvaJqPAwRMmP7gSFock3xBMpnEJeboaym3EMuLbKyYA",
  "key27": "5zfagLpPfRdr4w83wJ394zGRPjoJjZghvoXxqxJ2QZfcKJy7WpfSHF4bhCGKTodv7cpZPgDtfFkKt25Tkzt5agYw",
  "key28": "5eVXAc3dsmgkSkzH5wZ7ZTeJiwuQJj6eG5XFkBAXvsmXtbYbytVjVUW3gabyFvh77NcCTJHQgM6S1p1aYST86B6u",
  "key29": "4Db9wzez1dP8xN2VNG49mEmSrwt43VRzG4GBV8RbXofCW9svMUScKHogBQe7YWoDeCRe8AXKaZ8FKKYULLNfbfrB",
  "key30": "4YAk6p8HsR3ttWAEdGDLaAVg6rirj1WZ4gHPJAoZjN5KHyLxMeEmHk9vWGMxCoNPFKzCEFt9tZEqaDpZAZ44he5K",
  "key31": "rMxAa2QHnZ8fJbsMM9DZj3wcBryzSMyUHsLCNH8y7BzRRXQRw9QDSDWgS5Mj9n8s1EoopRNFk7hiNKsi9zdD4ks",
  "key32": "2bw9ADqfRdbgrCTuxqsMqTMrQZWBvR4hRgxproBLTCLxSh47aoy1eHSV26fwqKLYqxbb3ESheztn6RPwKCiwHvcL",
  "key33": "3SqkYR73J7yU8L1GZ9os4M7Cv2KSvNZkrhvijKj7fdTiFUV9Q39UpKDnsnkxE4YY2oUYGqXKWwGaMUXbmT3gwp1R",
  "key34": "56hqoDtuEbyDv6Nv1WTLPcj7vr15dWo33cNkMok5wDEnDHSwAUduKYuUHoSnsCceRkL5HmKDH7SqjG3CnZE4enba",
  "key35": "2gCk66T86ap9B1Mc6PrRky56C3zJ3ZLUH5juKKqkAEsgGynTftz1vqTYTGfDkKBDRexn7p28vFoCew2hsofbGZEo",
  "key36": "4YS6CxgBdeHTLCS2MSFjbucJuCXHwjzAf9AxJELmEZM9msedDCf64VUMbVKT8abBp2yHDUf1r8zXMvpE8wu8FDPp",
  "key37": "2EXtWoKpwt34pxwzNeHLdBNrvTGoGW14mHgSebp7zzH15MeADmux2hZkqsXXm5tTSt7FJENiN37YUdSvmG3P3LHr",
  "key38": "4AGgx7fyXkj7PXjhZxFJWkeL4GdyJdfrRPa8qGz2RE4wh4LwHYPfkBQrHevUR5DChZtkjXpwTdYUVnw5Zsf6YobL",
  "key39": "5vHrzzVkGBxCVZ2RRx7uxDfTsfoxicwgUvKr6Xpp2hojJ8D4WgMYdB4oGXYmGTMfUBPYaZ9bT962QDbhg4iFaaJD",
  "key40": "5T3richEZruRoDF4GPx2mE39PQJR1KHpXwTeTvSS4ehZLAfxtqmigi5zA8N9ZiWmey1ndGX6HTBEpkBseywwwwNs"
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
