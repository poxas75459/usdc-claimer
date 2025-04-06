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
    "3jvMoANg7Vt6LJ3Ey35yvFfwwLCNWXXfuWUjkcsi5kgwQv138fUwKHvW1cpQu6oXsHtUqJdWamzM2bqxBsTVGUU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wBLbwr79LRkaguy9DGvZ2n9HHQ741otrxGnSDJnqe7GAB2agJqC5Np1i8mWTfQkyBKNbMgBSEbT8es19sL1Fcus",
  "key1": "2wyCvkBP6rWNci3nTtoJfnUUsVjVRNyn6JNv5Twf3FceCWFaSrv7TUnwN8XxmnuGx5kR2F2Y6A6SNS3Zf5vT2NHr",
  "key2": "5N37jAW5p5b1ugHF3iy7XAgXLbHsofPaXpX6oHY5vB1RFXokiFFPeVXJyWJxdbHk1kWeXS2twUz7RdgsfcESXWdb",
  "key3": "5EWV37ihEAqqAF7WYrrHkg6tASRSgg7DToVKfBm8z8FZzd1ZJNRzYR8h8rMZ5TyChz23fpbXkf3MgDdxze4KpKer",
  "key4": "34j3UE3xTcx3rnXVzm5mbyB5y3MkWb4jMP6d5n5KPiudb8LHCX6HUTQufqCUikWWTX5akQkEDmEvoZSyzh98JCan",
  "key5": "2aiL4KqkFBUFkBnWXKDeCZTPmBeRmqkFgXdWCLjDUvoJKU5GNcsAvCdEo8BomR3iFnAViapUAu7TFBFPCZnPguEo",
  "key6": "4DZEpMSxuzHCSirEmTZw5du3b1w9tDvhU5zqmiCpNczU3LG7mdoP7T2UVBV7w6EEwRTQkSSYsWAMKgtLVRpgfdaK",
  "key7": "2WvNmVgJHhQGE4JAfGyYwJBczTtwCzyy4Ec8PHJKazMPawiqPR2Mp3rNNCbhDvCqyra4V1pG8yDu8HoBFeswoBXo",
  "key8": "43N3BqQfU6BiaCYKjCkFKs3P8j4kVuHcJej5BkPdjh5vVFiVGuW33skWXMmsYnmCh3rKeFUwQappHZn9iAZVjVB6",
  "key9": "5kaGf9MUuzhdkXWBf1iBugsvbGiLtPjnY3sSFtoL2Hpg8HRtkzMLFYDFCPFDm45bMfXybRCge57fTmKCL9huD76x",
  "key10": "4mNaQ7nPtpB7RAFRagpWEiUg1ViEh6HDJEWGBFcrkjxAwY2Wwk2KcGGAmW57zYqyNt2uVknPovmoaAjAhSgEsq1D",
  "key11": "2JGxb2fKMRVseaHY7FQqtYDfTf7SVbteVtCep13zjVQk6JmGKpApmTbNvdp4aHrF5rsLRWRQciodD1yN1sq4bmMV",
  "key12": "3asL2ytFcWazCYR9Q4Re8X6aYWxAboGg4iouUeTJUgNbyU2bvBQ6ZaYn5KDvzexUAGiBu4iTtg3sJUxumevoBzVq",
  "key13": "3GFyEzzqDM8TU7cgKkzShrYfLg9WDThUTKinADba1KLdMqtjLC7MYuHqHmcePu15H9Lcc5AM2DWkfeaxUa5QGqbY",
  "key14": "5aFvjgJLwudKYpsbLZ2RT3uK5E6Ma6tFcB8RApGVmQqYKprkKhaxeAwSMzJ5Ph1aZSf3Rt8xSJxNjkx2NyV2uNPR",
  "key15": "2x8mKCX3MTt3upQYfXLycxGVoUzDB3ZPtpEaUgmEdUFhHR3FzveE4j51bSHpYKo99oXSt2wuLyT6mpASVcU5bcdY",
  "key16": "4o8taE12p9BsCCW1DhVfq1na5Cm2meQDKsQt8GDhHk9UZbcAQqTBoVgPWGwxsXrtM78y99p1ctZHJgFLrq44kyq3",
  "key17": "5xfvZhaJQ5GczaSvhqtZowmt1xeLSn2MxGTT5FQKSmiUwvQSjCM4UpFebdu2pHupE8QARSdpGscxcR3WYePQrwnU",
  "key18": "QLjSYVrRVQdySUzYTtnyCCxPhNzdJfWeebxY446Va26PsQnrvGKyDEqqPM8YYVYNAMivSzQ7aF9LHGpKhGNPh9G",
  "key19": "wnnvbsd6kqF1vx21rwwprLnSA4RcmsUNkf4H2uNGmswHz9vHNVSSESNzNivCqGvi2HWqxC2xE2Pbnmm3nYqjaWS",
  "key20": "2w8xdWvghVkgMhVkxYs5PGDRzmzRM3L2tLesk6byPofLZpBvEYxzxuoqwQUjWdpxFW36ZhxKNPuCH5ffwcUVuLRT",
  "key21": "4rraiJVHcNQTKes3inZRqV8eJhRtBa58U7ybjSR9rGTeefptoVopJZYydyS8WYEist1kM3D1MKyeAPjoYiRbz1r5",
  "key22": "2PtNqPZEEduVZNWuSwrThx4nj6Fr8JEeodNt6FTzFXMXQZnYmMmZPyAtgZDRwWzLapfJDNkinzp3b8d2aKU73KPV",
  "key23": "5LjBP8sx9JBbxwA6wcQDzpRX2JK5GDPgKncckP7vdTTfjTHGEcWfjVMRSKgnzr7thf17jBjbJna3wQ7EHHMy851T",
  "key24": "3SyKCa6TXG1okZzMM7RjFnH6N3uo7BZn52WYZVgcnq6CPnLuYkhSHs3JMcD1ywhcXJRarC7aw7YHiKib4w2y95su",
  "key25": "4EWb4h5iY8Feq77mkDRj5shchQMg4v8wJUJFa5iLdBJEkNk2mrY5fAcKdRmP53QnRsenoPfFRNyb6UsUzUXcByoE",
  "key26": "3XCYZfW86EWDZ4Fy2qbRz8qrSjFvhrZyECkyj74XFjV4aDoCmhHyChNFPPXG1LkqodsDkaf6XsSY14ZQ8U3a1ndk",
  "key27": "se2E2r7RsWUxksc29BmfV45scsGjAdb8ekbxCuKDUezsrcZFD1Y2WmRogJQdnCQW2YpPRVZD8eBKDLKxZAbXnqX",
  "key28": "4J4Uxk3s5rESNXbEqPMz7S8cCzsL1JjZLn4SicJ4V4MVjMaZQfdw5ASXpFKHut9Tc531niKf6vaeiFtAXakj2VXZ",
  "key29": "UM4dyEKZEyZFimaMZNgVMuYF2Cr9LEZGcJYvkwRY59D9sDJt8TKVNTWFcPwjrCAWNcq9VmNbP4NQrN378eebqTx",
  "key30": "4EqyUbH3V9dgXKywGFYgPJNieDKvAL2LaKFVeorhN1dxUgdjjcaKo6RQWmFD4rb2ndMW5FmsYWtCHAxEtn52HPyW",
  "key31": "5t5V7RozVetQVYfEjVHjjD3TU56w1MBzTRRY2dLhohZnpcwDF4gofxYkb17bxsuYWRFt6V9zC8PEyMXkDrwxHqHb",
  "key32": "59uTGhr66tyQQnxciYnSgEPTKX5FDJ8saTC6r37KgcgUGArHEFjAmrWY5eHNFdb6cpCUSo1T3NEm2KVx75q6QZu4"
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
