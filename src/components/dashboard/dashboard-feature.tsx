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
    "LbyZkAXmTU6gGT6YK3dq7FRTGKVSFbWTBTKUDFVLF3qfNH5Pj83VgvG7Bud46HkrRS625NMHLzgSHJBwekp7txX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i1CQuwtjdbXDE4hBhXZmS2n7usiZkVwPSFFzhotkunUYPgLKuQb5gU3X1W9F67c8udhZm1Sn2p282S62YBhmgee",
  "key1": "12tqU7Kcb5xj636vmpviJx7jSy1acaWTbzVXZi9gB8PWRZXFqp8PfXFuE8JhdTUZq5Fehis4DyzwfD2JoXfLV6s",
  "key2": "3t4TcRKmeakYwuCETQB2LP3RAekDxsFKStACrfpUAaqV3a687fzGtMgcAGZVBF8XjJPXUcgDjv9qjqPfdf1fPFHP",
  "key3": "67b4KBFmNoCsFKDD9LxtDU4y75a6GhrLgpoRR2bibgEttAJTDU6RcfAyfBmVajK2YjaXpqxoUy85sWCVmptHTG2o",
  "key4": "3qYd9p6TZQA8KURUadjcGMUYj7WjEkPoa47Ac11H5591SMpGW37eA2qCvq5rcBHWnrtte5w5kyhpbbJLi5h7vKtA",
  "key5": "2M9hUa7ktC1Rwdoea29YK2kAYTaWgdCFi3Vw6W5USRqoaKXGCJEHcPqayRX59VEEYnjyrQyCj9DAuSt2eXQLNm7U",
  "key6": "53ohk1vYy7QovoLs3Qfmq7j1KxPo8gQP38X2KqdNt1uJG972pTsHgCYB2KL2BsSdPtME9WZdjD6bSWFnWurS4RqK",
  "key7": "4hXoGLiwPddgQAXcPE33RCFixRcXrQscHEzhH6Pp23EQTY2wpAmf8dZ2dcLHyigATJb9t4g7piJEakyasQ9JSyYH",
  "key8": "2UaMXugwpCFPksyKJ7bPB8GfSvw5BG4CkGAFSGxGjLjL9x8KvngvykddEW32LgsPiSmAQhojAf51HvngfDQGwpux",
  "key9": "Vx1tz4nufwy6XGctFBhYy6jXkFU1vPsrEB6iJZnsKsxbQm4ap9dxoLnEDB7NX3ud9xPWg1ucXtoBrpeK3rr6bAr",
  "key10": "5BeGKu3YitdTQFZpsCnCQVUudnrYYr1qsjjGunV3FAKoumikNbNrs1oD4FrcMLQmhJ8aZdnS8gkD69wa8GS56Vbj",
  "key11": "4bnc8hjekYRQdtNBDuxEvknwnmDeNNUFD1sYJKBMtNjcA9SWZyjKkdoGMkjF1gPT8M64CgDHZJsggSVCKVgUz1aF",
  "key12": "4WtTpaJ34QRkwN99unK4JXjjZPmEKu8SukL3DcbN2hRAAmBpMcafVBZFRa3dTwwRfws4WJokgTvdrVs9QxXho7yP",
  "key13": "2bkGynbTwYTCxtd6XBwn6RcZy1fQsz4SvVdbSdwTBpp82JGDtqDL1MykRPH1ap3WJdRndjViByqr2sydsmEEPddp",
  "key14": "raELrSHp1QRBQmDocdb13QRGgT4k3ZyEv9jxKbSztpUWM2eDoeEkQLfTT7ys2jYAd8zDjLoTB6rZoV4jnjntouh",
  "key15": "4UUyR6dY3z6XeJctDGrYnQGwMzrLtw9yudnhvnEsoavfs826Wq51rGjnhrAmfawRWcb9XUmmdE647Sw2TDGuMNET",
  "key16": "vSEVezuXuH6cui8kuKbq5NSGZjEWS8YzLuN1W3rSmurbyQHhoFvq32h6qvX9TbdKmt2ATMg3RtH16FJxtxqd9y8",
  "key17": "o5vMpivgSUcc4p1CSBrNxHKB3j6LMyv3gY63Lif2jjoAfjRv8e2xQCU2wckjfiJhU8rns9WgW2MyqwSaQhoSEpL",
  "key18": "Pw4H3VjtSwsBiHQATMvq9dBikw9cuGAV9febN4WtH6DkDerTnauoAWXFNnyfV7i7gP7G6FQTK7Q4AX4QLYf9D7R",
  "key19": "VJDfRX8RHXsRRr5R7stUVuq9mcd1G3vxFcmgF4CrGnqFhCdxn9zTBBXgD4VpywThB2914dyVfwF3G56oJz7ntBB",
  "key20": "5VBYBZj7RUbGGmnREM7RWVrEYKMVT332gTtWGHA5BvTLZ43Sc3kYLk58RdmdhyeWjsWpdTkNfaQ5MfLYZ1WmBdHm",
  "key21": "5F94E2NeSw11u8xD46GGgSE62q36mHusnJycAkpcLWXad7J8QA88PheXmnBrym6oYn3T3tgnHngQVootQmdZsCER",
  "key22": "2gLJvqtp97PGGcmk41cSecsppaEfPQKRKUJr6qPSCcPhKZqUpjAjMq7U8D77fuH2J4oUgZ3G7hRqPxp7B8wAw3zw",
  "key23": "5fFiz1m8HeX8DmbAzEvgiMxpo2GNA7p8cMfeUchvXFcpea4nG2vZdXZQd33PE2jSVpLESrbBp1ziy9BMQSiuREni",
  "key24": "4PHMmit8UPnPknFiYAhsAXy2FJPr34aa8UqmWYtXj2VBtggYFAfrpbnmYzi9kEAFAAEfseQyv4bBgKfJnko9Qivt",
  "key25": "5PNj4WjEALfPSac78XJ9xWP5dJWYyehqqomHuoER6BNzqFe5YigUd2u6cmE2ipC16j33Z9ytik1gtbcPKpKxejyu",
  "key26": "35PzddPLzHuB6nVzP9UeA4BkX3QzoVyQGY1Qpvk2e54u44PUhY77dffDrWWeEaCSgkXF8mWB3sPP6rQEcxKWnsmv",
  "key27": "48okPYLCD4BaCtkiwRruFB3rFC9J5UWr6mNiJwpAb7xfD6PCB3f8bCgxrfDsjzDAsbNLPhx2Lndzubx3RzQJV5Ew",
  "key28": "bCKqxxGVNhdPDHfu9pK2hoG5JqDhyemCNmyMZDV8Xk4kUvL9yQsStzb6hqasvBZhodstsEdC5aJpYNh6tZAXhXi",
  "key29": "H64F5V9eqM5irRmysPCra2SLW9sFomLB2VdyrKVqxXhhyzJs6ot5bbH7U1mSnDE4cVyE416rabCdRrMpkxYeTjJ",
  "key30": "3r6XitYf4pwsefNSZNgnpX1K1Ehavh4XSvbuJBu7mfbztvgMKcKcheBThWhM7dTGVQ3TPifLZWSb8DBc1e8QQurT",
  "key31": "3f9TH5smwSAzPDECT9BcTaNivPK5gR9qxUAUGSeopzohPq4dNHeDVoJUVpMu31wrKaziywtimouRqSDdofZzK6Vp",
  "key32": "4krkmEtJ8eS57cnYmZmP2vxKrr945wTJtQ7j1vQVbkt4g1ZsWAdCnotHKoet1gmvizRypanQe7kwmp9F38p5c2kL",
  "key33": "wXwHQ7jhog4naKDcSifrnuJQLLboLryYiahLwkFHMiHNJNBevTGrQBmf4L5VKUDhWnwdKwFVisghUHyZcprC4jP",
  "key34": "354BowhDDQR6sE622rKtAEYzcJgPzbCCRdyoNw3qFE4MyhtTv4nnEr4E42rci4T5tEYSAWRuwdEpYPiRZCGBFcVg",
  "key35": "i245p5tP8BDQV5fvZyKbW2vnNmcnUVZmgePbep4pQS4YKQdQoVU5qko6v5KfmTTGJ2p4En4k2QpqkUCLnc1hsab",
  "key36": "3hmfum4x6cMGCauToUS9pQhPz5zYTPh2vPpi1RR5AHKsPoo1wPhypwCMa27Pe3nEcCZHonNxyoy6uMDDrmLKBMAq",
  "key37": "JMJcYenGkp5WCv1RhxpJKrWN9xDm69SAkiRFgQG77BGGyyEKdWQ3sYNB8Zq9Eg8PJZufgPho45KhKUuXRbSHi6B",
  "key38": "4j2PwezmRcUUGoiejgJYamDrTjCSVYdBdatrJ5VkMHLT32HnvN4PUkyYu8BmgbSbSkpdnvrCz5bRYFLZLVKcr8cY",
  "key39": "5mdXKrCvAVXKbc6C869DUffZ21gxvET4PeefPPA6mKXdRgmPVAqg8vAobthTu9HjBLN2q7yiSNYyCva9fLRzG6yv",
  "key40": "5rYipYuYgufVaGGr1gbWPeRZuLXTMhDHJ6zoQbmd1z139f4Udw7Q3rVeWrvy9CSuj8BYi4CnC8BdiAAcERhNefHH",
  "key41": "5dA4Fuf1qgozdyZ8hw9gpRFN7zZVfQNfCJbt9xYRiyV1T955bLd7y27jD7A4wSveW7NbyMt4Hx9SLftPXgsWBbgq",
  "key42": "5RfUkyFWTfNzeDPyEzEqzzQbNxcS3ByyXAZK4rXUNh6SaxjYyJeY7oEtJWth5gGjcQnx7HbbkYhSwnFMc5RQtypF",
  "key43": "4fckCtNBHNhiYzwMetLBiuRrGZEuJrXrVgxqS7Wyws93kD54hCL3K6BpHgxevEWFWETiiv2w5iteuNbWgTUYy7zz"
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
