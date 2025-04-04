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
    "2QvAp3Zwfua27GtBnriZPCxKzSL2fPL886p5qEwmMa3XfUb7hk7RdYgU3SgTFVsBe81iaA91m9xZvmXxuFgikpyo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sK7wdU3Hm5dKfgWEfX7RDU6rtFngtfAfBz88b1hRApk4hEJpk8a2X5QVY3TLKLga5JCT8GRP6eCroTMQy8GGM2j",
  "key1": "65QgcxbQFGdDSUxxR2BqaRQhATBdpZ9dmpLVH8SDYGezGmwZyqGre39gKKfJPoyMGv2WY6kgSYqYSyoroFNvind5",
  "key2": "62AYLxUhg95XwvD8pCZG6DCPRnyMS65aE38pC5nJbUxLMhrPh5cz5Tka3eN7aDnUqqxrGXeYfru1nuw1ANHrF2FT",
  "key3": "5ENwjEVt4RMv1dPo5V5WHDvW19SQcson6VoBjztK16aYZfz5X5UF9Q6cyhM4R2wTff9cFAhEmhWNQ42ZYC41b5MJ",
  "key4": "5dPuGytGvNTSAGr6mrqmLb6ntKvtedoMadimTtkeCF34WUtz4PvmXcTKSiUneeYUA5558rhsiQwCfgKxvqauGsZH",
  "key5": "4jdVwhgBiwz1uSueRmgUVVeHw5FsNNeRgjk4mpT5R5udMQsdW1nWjxzDhZGe962wirXDzmYx4GNnhZcKRwWEAweR",
  "key6": "3G2vtB1ReLc3rbvuK5nhBijF2NYMs5DNnvuiYjWVEjDgrXUk4mcwC7qPHFV1NdCS7AuVn2txbkVkSbk8TrigmWw3",
  "key7": "hNohMBKFnnd2axDn4gzcR153cNVPzs43P6ybd6bXxLyt99pkEZzzsbzaEDkfDRvwURs3BzA7U6Rh2647MJJk6hc",
  "key8": "5SGsZX83fEEFJgx94XWoPjofZBPS8YcDcrN1TFjxvth4BnsGYo74BB5qQW7ofAPnHjWBjQyr6MGjF4TA4e24kzRq",
  "key9": "n3d9LRMns7Po1oLwk5vR3wx8j1HCuaoLsrsXNH3DTKZedWg5tmG7Nzb2SmqkLPqxHpJGjGWQhKcRAmSL4HDDqgH",
  "key10": "3ype1U1VGPC6HMrDj7yiqvKEX5v8QAya31iiruAW1R2eLP2fxqfS1mfs8tigBrUtuQfcnr1sGaTKhiSE18nHnmzu",
  "key11": "2ZvLwAkc8jcVmXExRviv3AzXdakJYaHoUbHvJWQioYsE2pjTV8dHbQYPKg85zWLhbRCrKnfvtzknTRFF1kimZK16",
  "key12": "38rsS1RZUfrFLNjD55CzndbmKQfgr5vyMTuTd7rHYE3kGKGVVuREBY5e6WzeT2oNkxVCHF3vkXvdMGg2oYPv1jpE",
  "key13": "38yPB6Mgxm9kcN4Se6jLJv4PUw5nHV4bPajiFTftkPKeJwsjc1Q5j6pjYKRZV86zrBaEApm5fN6xsTrPVhrtgo21",
  "key14": "2gxDah8xM5UJjtEHXMKcNocL1c8hR6LbANf2z9TeLGkPFptr5HoiQv7qtFsoo3HLeAPpZVuzSEw4gV4Wu9zgWmxu",
  "key15": "3Ac4WLHoff2LeqJXFAiV1NwiUmeiHvFDxfi8VgFiWPtv91sqGFm7Xs2UbDAsW2muMtgveB86RPxAXaR6fyMZKJ2T",
  "key16": "jiFQ8nkMkfCNSEcbcxGpWGyENaThMGQUHNqbQKvk7jA3aZvhGeAWuQzB6a47nRqmBHdHCxw8nzbjF1A2XCrmWWL",
  "key17": "yAQs6af985Dgz148zW59gU3DDPU71A7unKH7QiDpzKkK4212MHdWFrYVbKiFBqGSLnc9rDwTAmTUxyAvPvyJM5N",
  "key18": "2LEZZxTYmjxHnAsnpLVLVNNuJGNGKYkRB3Q42FxpUivZEYVd5CJGxuapZVcaBpafk3PfhatBkMqWZTZgMoyzhWMS",
  "key19": "4Xv6AqRAUdb2XibZbUWF8UXVh79rBSuLmQj2YWYVnjSZ2tqNsBaH4CRiez3gHfeHjNZ4urzkKLFh7hF6iS4o9ciL",
  "key20": "2HzJcUcaFdwLkGDmKtrzQzaY6Xb6TsALM7t7vLeonbHBDGA5CdyZvZUvEK7jFQJPLdRCXC8TvYJ1XatrBfnBhjyp",
  "key21": "5hQD87KwBQfzbeuesPC8Fm6jZhbtrX6pEHdJ63MMwoz5WZTtR3wbFrdk8RLgKe1oQtQgDsKbtrdA1qyNfNXXPfAY",
  "key22": "KKqPh3gfxgk39YKzeNBtH56ih19f35jazzt8WKSM12Q5VMKCWtoAemBLt6jDYoRNQjBNauLjYecgeL5yHkMQGpw",
  "key23": "4z7EfL7NdUXunDERuhTjMWWuxDJ5KrPsRK8KYMnuiWZsGG1hNP65TbMogY1JRgPKu4tBVNJYZanMMnRdarPPAjV6",
  "key24": "KRnhks9zmhhHDitsqjvCv8N5jjYe4NXLeQcuVHWJf43oeMCySQ9KkaRq6so8RdQAAikqa2kcHHzjHjZ6Qi3jWmn",
  "key25": "orujZyXCbbok36b6LYtXXQU1vdPkuz1MJGvcggfxSynqDqq4QRML54fyucAj8UU2Rk8r5rvxSn2HcP5hNKe2kkA",
  "key26": "2uw1k188zHDuneM9cJseD32mkZf9kQX3kgLAaSud2tUhrZGGApXHjjb7hA1PhBdDF1CbJB5FNC4DueZr2HBhUfzq",
  "key27": "24jaBGE1bJsJsc7Um1DJdtoB9z7AHzgFWnvcuzRun1wJZBtgNwSv32SWrs8sNVK7YeRUkqtDzmQeM1uk2iAh8jYp",
  "key28": "3UbBFChZ1pxQFMkAwYuyQFW1JXN8PbCpvtjRkaXjqcRwtXuHRZVqu4fnRrEBidaYDUkTAXQrYox3cRNiJ7sTRYiA",
  "key29": "2Acdd5PeMsa1rxda3dLNg1dpJQtHD5vfEywENW7nTNABXdKHTREeX2kEX9ApnJoHnPUuDGVPc6fmubVMXqkdV8gs",
  "key30": "3pHZGjvpBoHwERy4MgMrYve1FJF18ioHHmpfbCzaQ2eAj1667heuYd7Eb1jBzhLKnqvAt5s3FAU76mYCQ88qqRi1",
  "key31": "adUiHz52CPnnS8rBxzG1JNZTKaxYKRwNUEbRcA5FCCC9XuysQy77Pwo5L75vT95cXQpbdjUks7xJ3HrfTwQsfkK",
  "key32": "52APTHJ7XVz28593YX5dVaTsF4eyMrvAsKVM9Qf5vW3Y4X2Pi7hiw6A8VqMqqpwq6fyb3wVuUjfF6UrhuGWZFFF5"
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
