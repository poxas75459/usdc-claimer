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
    "XCnZhgu69F7LVxmjD2j44uynxfVujusLNoPV38M95cDh2Cq6xzh3FAL5MYtgYWKXwTtx8HLFVM99f4fyckFgExZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZQDUmxYaiid3b46XgLViBVnqUTQQx5XUgu1nt48jTYYoqATWaS3XVojmKLy3cdyQnpHYwr56krBVGipRgRJo2Pm",
  "key1": "fJSvr2e2s9kSYvRurJCa87r54B2iTFrx31t56YmAF56CpN9o5w3TGcsnWBq7YkhULEqdZeBxWjieZuyrgM5kjcW",
  "key2": "2wRLYFMuHYD7g3a7PmiK7dy1f5mZBs3n9VUnoWeE3EbPjsQCTA9Qc6Un5y55MCbKYEBb9XwUY1J5vFmrsnDnugWt",
  "key3": "4v6SjTmxbXcQ3fSE4ngf2484vdH8D5ibZ6NzBhyiJntjuGQKbNeTwo1XJ466gTutYvdSrSboSefDPWE71E8Ap4qT",
  "key4": "389TPabeDsrHuzitRkTJXLzQMPdhqVUwLWFn63PmRYtjLmKNbZiDS1Rtv21x7i4qPzTQkDcoG5iNki8GkWC6V7Ye",
  "key5": "62c5qJhBdAkE4tLyMATCrNAvbpMR7jj5rCBkQDbwsmS8kjfTJwE7xGd9w3eSFNu5rKM32dVbwshPgshAeMGyuz8a",
  "key6": "4Pn5QBbgga9Q9rkyTBcNZM6prKCeyr6Y4FzPYSy9Abs6RGEyQJyXzHwBWBkn5DtaD3yzCbQQqumw2mQj7nAv7UUk",
  "key7": "4zeAWGpkKiECYyTxikCTBkRTxsoyKxyhazt3jRvkLTwR9wn91XhViQsuUz4zt7v5juNK2WG9k7chVPzGaLbQdH6k",
  "key8": "59s611xtpZJJx1bvor5LBpgr6AuT3xpheUgfCAXmgmfuzbM1bD3xr89EGmpmqLgnXF3h1edGDRgCXFhn44ct2erA",
  "key9": "4a8AA3MMdhmALgcxkkKu8v2CGjvfEDgd9VevEGuryB4ALWnywieRLfLnyKtVMPKXw4xBFrqYKiTYF95NvDfdSH5d",
  "key10": "2UqbmgbVTxa3i9uPFdiuoK5AKgrwws3fTS4FEK8YVKmRT1NLdTpZZeZgTNn3QfPftNVPVkEf4HrscVG8PbjsJZKg",
  "key11": "4Dtxk8KHEKe19QcFUnPJCn2TPciwszhNNvefLzZL7AmASwMYjusJ7TdJxrrXwBCzrnMkoqyGvm6dSXiTybyffmxM",
  "key12": "5AhjjiSWbqcXwWG5oMZjjYAYu7M9hYcdDrByHS5XpLFChnGCa6tw9SEAfb4XQhuqpUQ5qGKQT7PCmCGLuZKyZXLe",
  "key13": "5WBvtp7k4wcm4iufEAK7vLEC3HPy472fiqyXTwvtbc9rtfQimjjUgQ6XtAKwNyydUfVbV2Qbjxp988xVRFDaQsVt",
  "key14": "2ctcyAiEqMEPA2KGUchjxNBZ6M2oVnTvc6rpXEkDL3M4NXYohT493pfhFeFmmNG3AFdiWCTmmTFG2drvV1dVW16e",
  "key15": "3WecHHgZQmmYE6QNgcPx5jiHumDudxkNBYWEFuCHqqs7ozRxKwfU15YHptZT23HXeTNmJnEhQEQj7rMa3bXku4Ez",
  "key16": "tcxPcTjhMkoNab6X1q8p19ntRQ9B8A4kbAkBok8eoWSTPzYhJmrJJYpXkZNzSSMeuoMDzvq5m6TpiRjT8prXMxU",
  "key17": "545HzUmRGfCAWRKvUwqVjxa7fm98PXkk9BRdnepaDXdVbfXyuTcNhNhuwgSXexVNtFqYenuq4maBfqm4bWNpMNfP",
  "key18": "3744i38qsa7G5VNoNdXdEAWGBZJd5SgWZCHtVje6jtF6iWX56xRMBhdsX8rdgEZP6TRXEuWjp7yZxbVHpK7RRidg",
  "key19": "5nCb51y2VqUs7He1T78bAkBNw4YrMMbJQVzH2Af3jUvz4jzaX7XfeAR74dFBy94DJzxH7pjZLNhy3pgzSw3UKy5v",
  "key20": "5jn46fr8MuZFQek4sVd1d1uAd1qXrpo1sfuprnwo99enGRx9majbRKByTzwfpnAX2ftKhvkZDKPiYz4CMkMda3L2",
  "key21": "5ZPHM3jffGwsmCMeGvF9VA5bBywbtiiE9Nra6vmQbDk95Y9w9gv9qoDn7mMr5TzttpYR9fNyqHYBHKd67ypxTgVq",
  "key22": "4HutoL2LDFCvFA2RSF1VnTkKUvDipiVuYqNK2D7MYeLj95qtBT17VZuDqD3H7YYtWzpidWCx4iYUVxzhqeLGBs3H",
  "key23": "5RMF9kfuGfrKL3FGRGb1bqueJmKnD6h4PXDLmPJwqoMBQDPvV6edVAmirKvisLRj4ytVTdtWxvaXn2n1FgRtHmQC",
  "key24": "4EcUv3gpfc1kFe7p5mA9vr149vLXcduXJtKFcu7YjL4Syq8ZJD8SxZC7LNjFMosqAK9Rf6bWgosDN69ZEn8fy2ih",
  "key25": "2x6z2sctxMV9y6ncqnAkcybqckwe4sPAbZdyNALGZWA9ouDB86aLinfi5LsDQHH2FfxxVBz7328sBKvzK2Y74tZk",
  "key26": "4wS1uEaRLw3yaEeCFebXVD6WCHTZBRQxVfPCEdND9ZgSxJNHucjjWQtMrgMWwTcLCtgDKPzovFpF1MGeCSgUCYu7",
  "key27": "5oyd9JHjB8Csw6cyFdzjqRWuzf4AiEBpTLBg7Gf2Cwh1uhHrK3dQH4twY66UQ4FcKHGX1AtA1gEtPCjepnhA84Mi",
  "key28": "2oyXiG2Ct2Zn3o1hvMTRt5yo7UXR68oBSYWx71H9JJztDM6CFA63fuFd1LxqNBzXMSDJmuWBVFqp1sDtCC7KSWLp",
  "key29": "5auVZgPHpaWKC2aLRhF5SzDEArHUei3XZv5S1nJ6YhA8uoMjawNBC41jUg5BhJdJRARWJ5Eve6X9babJeHNovr13",
  "key30": "2biouCC3pk9SBJomKzQYGmji3hFcHfHEevVoPUEMJMNSduqVQmtPmyNX7GAy45eRN2ooRAKfkKi6Pt4kaCiccN6w",
  "key31": "4E3NdTenVXn41jr5Q7vvTNa2ZCi6FE9RPfFK4Mgy4dGv49ijiokSuVSNacThfmJqDn336rVeV34BpdrWhMECYoVe",
  "key32": "2C7Dz67eAjN98tgaZM6oXk3r9ykpSRinkbngS8zDfcbaSXyJfRTNtiY79mvJpV3h4AgFjpNGNi2dtP36eSQDBuEC",
  "key33": "NaWztCGZS9nQHvVSFHQr1dgp8rz84oSMiVwXF5go6ziBz1ZpVV7vhfPb9e1bVWUAT4xxyKiCZQeH1MqGjponVMc",
  "key34": "3YaTtBQYeHmP8x3ko6KHHg9oDJRGDJKgbNyeJymtXputxGKwP365fPxuYuRHq2kZUWPvYaiQtRQN3oM8s3NRT88H",
  "key35": "2nvtMKfpeT5xy1WmZjpHNBto54cpQCTTD9ALm7oMRnB6Adw7WGA4X3ymQNmHPhFKz7CHhCe3yBnvjQEvSur3RW39",
  "key36": "3AyL6F4QA7RjRFVxK81csb95nooGpnyTkW1Y166q1Kg2r71wa3ijF1baRjUW7vtRcjTzeKjSrHkrogmoxkBy97zY",
  "key37": "3Yzvr3CWcqaYJE2zzP1F1rqjNpV3TxF4RQcdnMDMTwjbr9L5XZfwpNx37R1q8TQYH3g1RypPhbEEmufyhgSeeW5a",
  "key38": "4pnFUEt28d61m5RPUm8r7LubTP7g4GV82mFMq2RfZ1X3Gj3uu5omH7gVeXAvxu5nEBGHprcHcMKD2sZraFvNAjis"
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
