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
    "2UXWf6DVFx5VUJkc8YdBxruFzgpmi6d7Ryc2EBreAtobmu8SWVBPzGERi4GP8pvwh7648C2W7bxvoCXnTYAsZKEc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uMnafAaQdmdbYrWtDqizkZ6n4n2idLAiWA3GhbDjyQMeo5orxeGywi3FgfDdxUnoV7P9FH5Tc79x8yE81ih5YyQ",
  "key1": "2ERegWT81PHUpBSnULy6Y97nqGaag3oHN3wCbJjA39FiNnWwY1g3WU2w6fNXH4PpyrkNWxApDeXpALbSwfscnphT",
  "key2": "64pAte2qsAyACpWhTbxSBTu9vnkECHW55aokcFozgxVmiGS8xo6rhNmNztcQC5pjvWZ2QqiW2CnkhbryLyASsfx2",
  "key3": "4gL1mMiYy2w9keHec1XgR6ZzWbKakQaKAQ75CbSToUNwq2PmC9Gj5o4M8hWHKhZWmDKB94NjUVgxSVSSTvNuU6Pw",
  "key4": "4Vd8wLQswvi71XAZaJscLuB5jiA23XjTox9ToNFosvEiYnhAxQhugdRo66F5L3vVAFxrWZcZhBD7WJaSFVdtXf7J",
  "key5": "HUZDDYLZBXmgmLnSuoMhtuvpwAAAuYpY1jax1PNdEnuwFNM5aT45KTEbTZLJ1DpoLbspFzrX7CtFpH1qeHC1kWj",
  "key6": "2tSSCQLJtE64aSnNGwitP4Nds2vHF6VhZXfxUmrnMhWSM55MDv6ZssUFgGz8DNm9zE6sErryGhiKEF5Y75eriME8",
  "key7": "2HWWoTM9tSVLQjuNv38z8PyaU25tuCVYG6mN3Qn2QTQLsPJG13e25XueATSvp3874ZydKDNzVdVzPquPY4hNTfXu",
  "key8": "61ac1TcJSJhuZZDXyCy5Q5fBeZVsRfzD8B22xm4Lmz5Z7CbZWQgHXAZcE4w5MNrYRDskfAmEZ2FcPCtajK8mxs47",
  "key9": "5YvXuQn6jXEREAPcXvUTaGRyRWjqCfnfqdw84JwAjVWa9zDyFKFLjMygaEXVC5rSHxLkA7PKsvmZzQ2nJwb7jW4n",
  "key10": "3zsk9X6388yPEYGMqsE6eVPPw5m5QDzHg5Wypc1e4GQRpPiNYt6UDqPfmDEBPAPRaKEUnnRfHu1utMy4QyCLh2BM",
  "key11": "aRTCLZoub3GQM19tuWZ6V9AYTXVtQ4bscWxVNLNExaL3dufcFH3BVcfEJUD8m9oMKSyercgiazJ3JxDPZTVTEWz",
  "key12": "4bSTTNp2XRnqSLWPtpEr5qKbjnaqqPrEuoo8kwegADLbPrYwMuW19L7gnLzde5au9m61Tns2bQhYXBkNPPKpXsVz",
  "key13": "3dpbHmWiVoDcY4w4P9krcDnFR1upiwSx9i9qcCgBg4ydxuFVKrhvMf6PYnqYd61hJ6Eboa9tH1U4WTNYpoYx3csd",
  "key14": "4QCBMmcwC39FbdbiSjzAadBn9maUr7GpURv8hmopxkeSMu4uh4ynmDPy5cfpnkXSA9tkCdKRH68SoWm6HkPcvKuX",
  "key15": "3LkZ1xK7gUDtqSK8F4Sm6Z4qyW6SXDE5hFdAuwRNCZtCCt5DVZAH6TFXJLaerYKL8ex8KaYWL8dbYTpJEmFQpdjL",
  "key16": "44NJcH2mySaSqQisY4Qp98hWRKJPyy8HENHiTgni2xVynz4PDPeVCGUAMU6mVvtE39RRV1ioAzuGGHxHWjdzjNMX",
  "key17": "4FepCBtijhkFtZfnvMi7qQttLdHo6LV2bBbeHhvFjXpGFzY6Vn16CZHrtWsKN3JU7nVLuPxZ88ffVefaiGzynNAk",
  "key18": "4LS7FHhpYXkrGrbGo7BhuQkdeRToNT52UmUAQUE79HHm7oaTcuaX7L7BztKac1GUMNGGvSR1yyDaTKWqWpuREBms",
  "key19": "381BGnct2j4uS9VFHhwBUnZg3DNFLjzMq2SHyQxCqHzSQwVJmWerZPw9djk7FnNb5wnLPmovckWfMksqnASKfm1e",
  "key20": "4XAftFqZKAAyoDEdTKSfAvBpP8sP1fUwC7naWN7QzmLvdiAguLsqWV9Sb4a9mZgyhiEraSuPbVTXyNQVQSgCeNrm",
  "key21": "2jY2LBCtaCLVMkXkjYqMj6xTTrpMGRYokmwU6AEaZhPYjPW1EHUR7HYPsPp1WGECvCcjmr5ix1MnUAbwGvnSU6b",
  "key22": "5Rktgh9EhN2m6uYzoPD8CPmuwu5mE5ra4T1AzuXNBzntAWF3AH9Z4NjtHZioShsayjrFyFCXBdaVgNnXT8gRbBQU",
  "key23": "4nBRQgxzXnbf45hs1XxFpWDz6ob7dEC7JktcdPFrbLmJedKU5KaUf1t8xQpVc8S8KL2Tj8TDW78Zf6bfBw9Co9qM",
  "key24": "4sEirR8zp18VpUQqLjMvZHjkhDCrxRntcVn8tmdLacxNt5NYTDTRdMyPTKgGdqz3zeJkX86P5CW4y1t8kfZFpc34",
  "key25": "2JZRnsE9Mw8nvJhGefqjbVhShQzL2ZZri33f92ivrQHHUcMwqiFng5Z2A4EuXhw96rqAD9rUDFF9ZiwoJD1r4QDF",
  "key26": "2T2YbtsKky3hJwXL3mPgAUokupNCa1v7vG5bB61SsuDcc5mgMJDoM4t4pte8EJA8wkFbLPmdn3Z3pieH4DexrXF6",
  "key27": "3cPt66aFADEXE3tcpiWQgAmhXA2TcELnaSnHmEkVjtGo1K59i3rx8SukKLwmiqpvA8GYn5hxfmpJ85jTP8jUAdcn",
  "key28": "3NpaKQVua4d7H6WPi6UMgk6HHGreKqZNNzCiF2LDG9PQKK5bTpKupBSEaGZXFpT2h42YRjwKXzTLKyBeqrKgZp9o",
  "key29": "H35fTXgtW9kXfgo4DpV6CkyY289oNX8A4NuHomARfcZ3YwLKw2pxyZ3SoFQKGaNGgxAC2ouGxgWpHRWqF8vGw3h",
  "key30": "5mmT5kPQU2cnwd9SShX9UtJrcdAZCcoFLJSnGy194ukzbBpLZCsR9X7SVvupKbpR92t4HRsCeERKhfMbEjHxDRyi"
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
