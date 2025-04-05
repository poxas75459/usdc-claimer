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
    "2gS8jqkt3FbCrY2A41RBs3GPZbxeQqXVbkXu6w7tnXPJfJz8ADA2fMVNRe3LApawb1uCsr8iYgCUfGGSiEPaRut5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hwZeXMy6gjHbmfAm6xFrENMQu1uHRCUBDjd4EhYx6vbqbrk8fihNUjqw45NAMzrwiCU2pXHdQaSdpKJ8wN2eXxM",
  "key1": "2zBtJioxKU2dPRSbBmDjGyxK23XkCvrmQDDkYefVbhNwx54hzQeCLbdASS6UokPUJ41u6RrCn6npp2ovWQ7T2spr",
  "key2": "2oy36wRbNVpXjvdtToboDiC3Hs58P4LCrDcc5QD9Y87yzaxZxScuy3UuvxtMcMzkxCAL1szruQa3he75CxcioZ29",
  "key3": "4Rqi6bpTJPTAKQoA1RBzBBEBNYMhxuErWXu2Z6Yd5JmJa7GdpxqN7AYZxDBwZ7isWk3LXkrRALaaJ8jNbbHsroWG",
  "key4": "5eT96p5bYAKaEqCbDF2xgNUAvTJjRXGNtx54Ek9WTUS3NzAWZgA9EGN4gLcqtsSNX8wKzeU6Wfc6JsKbPV9t2BPb",
  "key5": "4nfeRf8CswVD1kvS3HAojTwDqKQERhPAMXEyDkbB2sAz8CK3eULQaABRKcuTpaWe6xfQ8o1or5Cg183bNkxtbLDp",
  "key6": "3MQ9aSj88gXjo2e5XMsW7PViT4tZGy5EGignjZRaPZg6wVrGnH6cntmgZte65Y7dNN6VTfpwGutprw6QWVKJc5b4",
  "key7": "398Jpzus3mEZwWJ8PYXeCZcyvHVw42iCGpr8wNZa4ANKfQ1d4S26YKvGrbuk2XmaFiUEMnp8SGSpnnbGSSCB51vw",
  "key8": "2gJyGTy3882dsUyLM5vRJmpVAketMDmay1M6ocDHXveYoM1tjFuGoHnWuCPCpGr5iketuUXbJEUEgQv1kuy2uwbt",
  "key9": "3qKPn1vknDJq5yyGBKNVxrRt2UshmwQRxWTqfT2tMSPJTcrrCjYyfqVtwjgXtXAjBqTAYs2bWftd5M1jJAQXBsmB",
  "key10": "2oQT2RVrmEUbce7LXKX7bN2oGrL6AytEfA8JwFod3HXc9RoeLeKTRMCiL3qTYtAUK7b3ixGMg1atLocdmrAYWJ3Z",
  "key11": "3yjPibq1Pnas2upZ6REU9N9aW7mmxXevxocGzfuo2Kctr1DmVFVVKUa3Xos7RXX1htE6AddF9tWBFk6vLhjNcXjh",
  "key12": "WCjxtevQcRakQNgikpdaukyJLYwWMmDK6XuKMXckuw9XNU3fLSXXE3EkHTkbdRQZopq1ngsCisyAuiq8D4RaWfx",
  "key13": "52buj4wWMwaahmZwe45q1jxfSanQy1xDbyNXfKx86F4w67VK9xpiqr8uRXjMfHPNyNLJG8Dz4PwfTwTtC1e49TUR",
  "key14": "5KGqfRi4FKHLLMoQFo9FeHUKBMSWXDPKRjsQKRx8dgcs4vwhGhoSysFJwAYgZdRtfBLYmQhGLYsxLTZJpNacgmGB",
  "key15": "31WVvAAbYUiAg9ygzhkXiNoRGxrz47NoR5wJaFoyyMSBMQF5mqvTsmpdxAotRZ9rDWwxpnbCwRkSdcJrXzWUYHFH",
  "key16": "3fvsvWaoVS3ebtUvHUDq6bPyy6poqqBjKsqRaCauUxMjXcVSJKGwyrQCFuAQUvZzKbQGKuW1UpddwFBZqML7TWk3",
  "key17": "288uHBqafrCwEURZgyewyxm5hniGqEiLnkJzrSPayd41Z8m1uPfQijGokJtAg6k9qqFFq6diNharMbBRMZYJDycL",
  "key18": "4uhXeEm64Q17PFEZPbygy2tiMrt9WWStmWQ9N8oqzm38c1ZhESBP4mdPMDrE8fSn7y2ViR8Tyoh9MCZqPCDcxD5i",
  "key19": "2L73mSh7bSDxhRx2VqRdasybJaHaZwRFiUHX74LjExWyrDDpU89mrbwriw4pPv1yfnhG5NZhvz9hxporuZ9DHXsU",
  "key20": "4wtJYG8mAHnMHMGmyDwPHiuzucUmEAdxjEzKSaS9xoLAub4E8kdUodGx1qCrmH1EZTU6n5bvjEd7XLQowKyX8sX5",
  "key21": "5vk1CGmkwv24pMowjrmJFgYYzCM27fgzBCbMq8TRmpr86gTVPkZzefwGxQV2KyTMek732hU7gKREgu88ksDDdPKy",
  "key22": "38dULR2cCjwrrxTTRiMLnBDWrPiAxyNBKjdqq68donSUgLkSpA7w1ygYZo1AJt6XKLMDsuVKnnjdBdXdu1ZxdmkH",
  "key23": "55qibCTKVNwHc7CqxeG4FtJV6JTFWLwrkJCRzfs86WEyWgKjVmjDPmy55k7Q5XPTLF3Pck4kkpLjDQrJh7X29F67",
  "key24": "2rYk6y7TEr1gjKADCADrpHAcw4WNNEjoWhu4DEeq6MXCxW9g6dcgbVJ2oMWwTK8XK5SQv9sdD1AJqcUvuNbNk7vC",
  "key25": "5NsFua1x5pGBv3qtwiSvzvdRtXtQfr2gFidBiDuxNvPRiw2nrXHtdDW5MMKHMgLowRbkoYQSUSX4DriCjesoWfMK",
  "key26": "4cjptyg6rWm3kbVC6EnkN8th5rTYz8Vyn8eYJqAGXSmNqasw3btT2kzXbK98HpEXWi5wKfvxGJbAd1Ahk2emAkU3",
  "key27": "4k2MGP7E1aTmB6qZEm5qah69AbpbiorMJCzGjKwmGXNHMDci8meFPseV79stUzSUqfDz5a6KKRFNFxHiPReeZPPR",
  "key28": "3BeoqW6FSX3v4bspVMRMK4fvu8G2SM3DMaSxwKMbmdhw83nh1t4tP43bmJF9P2K8MaHkDjpRWU85a8S7ZrHFXYMq",
  "key29": "2qPfeKvADTBgEmo7k7B5HAPLQ4aAHnfM3n9Fsjt6u5aS74EeWdaa3r16jNUUG19cH5M6HguT6YMdv9JBXXy531bn",
  "key30": "2dZ7ZHZhQkGLSwbGGAdGJeknmjwbgQQiY8pKBNXg7svKnNvBdfeKqdBXW9LnXQUFkCTW8HAbudtWFWhRxLapyS1v",
  "key31": "38c9MDqSpkmi41HWhwGhuhyqUXteM19SzdrTo17hY5hhNGAaSa7GKzsVDP6W6vRYEz2EpUWzaamSE7gkunHAfyGo",
  "key32": "3TjSLYWver9ikKMCx3AfxC2nXTJVWM9ck64h2aePgifJXK1e3DJRAKUbb1dXFMRCeXPc7vpjgE4xF5CAJmarSTGg",
  "key33": "5w8t7E7F2fuWj92AqGHY4AdezHZ6Yybz6Yzjmdypfn8LyeGL3b859Em8a76bmCspEgikTpcdN85ZuVbvGse1QwRM",
  "key34": "2EfBBjFAusLVgRhKanvFmNHSB5oWUmdBCrqLh8EDADFfoAHEjN5CgjYTw1Q9JR8RxYZzjuqkC9ELY4VAG92tcAxh",
  "key35": "2sEBdsTBMrAqg3fjwWR8hHQnNSp8baR7r1mawRznKvFpFqcNB6CQ1cWs9W5xPm5UA89JNmZaqPBiE7gn4f56Cv3Y",
  "key36": "R1wj2WVEXzHCM9xCBqusKEiH2CZ9BHaB3ZLisqGh2XZ6oTAALwPPef5Luyh1oVy9BmFtjkDUnJN1r4BxRfX7UAA",
  "key37": "2nQ1dDeFtcDSmGZ7Fw1dodcFunhby95T5veipGENYhhq4giyPn9dPge3BPMTKEGJ9VRVd72YiLE8XzNFswiXCDi3",
  "key38": "3ZmsR4NgZJVtoSAuGdVi993SJv4E1vBQXpbNqE9nq2gz6PKH1MkNv81JKRPtsortgjabX9GUu3VdD8D9rfFtvFfx",
  "key39": "5BVyB1QbwFvbx1MXCdA2mrrxJcCKv3tT4W3TqTTvCF9FhwfR4zkVu2wtejqSZSytXQAhhsmsVmRw7hhsB7SwdpPi"
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
