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
    "2vH3JE2fxPto3YJxLcG6RMAWo9WN5CnWAEPjyCtqnF3vPcstNnNA6sSdmR1z8f5WpKodj8JQHiZQKw2Qy9ASDv1p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wR2boThw8LKmEQrL9f4Q5eXwpsg7egXcdRDjxiq1fLVFR6ePhVwVXE9ujR7kYo4sWHua7w3VBvSKnmLhn9yqx1C",
  "key1": "5yYiKWo8xeQyChFRPpxyKRrNzA3apCdTphdPczoBkDANeLNahTZtaUPHbH3fkgfcjXy1yh8z1tvz72aBuEoF7dCq",
  "key2": "2one3RyotLhFBxakKAT6cUJ5B3enPJQSVCBKRyJpXPmNdhnGzJseUVRt1NrFowatgDDCH42my7FcSYfCchUSS1X2",
  "key3": "3tH55rDuc5y1rYZuzFTP6gMNpJeVxMyhssBCyxpUaRozUFbmhz18WUjDquuGyQTe8oThiGC8pnTLR1XXEwTYfeV6",
  "key4": "5owyx46CszaNZDNDEL9fPGhjSxDjdnHWRCHweL5MJM4nSVNYhnW1Y9xwC67KBNAyMvfZim556f1K2bhtfDHkttcb",
  "key5": "5i2dCeLrqDinZwYhrHynP29yUpxW5qvxtmYCGxbNMwqoeRTKGAkg215TZRcpMNLq7quMV5ntqJBNxtr172J8ZjKo",
  "key6": "2sHUkdT36S1p1Q92DhmBxSLdjeqaHR65znDGw3W5qTGia6P5nYspkM6mqwoksSDSTMNHHxDytxqpVycDovaydU8f",
  "key7": "3dn1eTyUKiq8DgXke2Kr6pp6pgLJDnLBqJnfVfLYzGrJk7w3iGmY7CmginNuGCdQ8FMDpiR8npVpz9rQ1csfAbES",
  "key8": "4TwCQCJyJGoqwj7tY9HwmYamuzo9nqJK6kuc89mdYcAPFcyHoSheMBLdeKBDnT5po5fywMuGswVXdkoM3J48WfrZ",
  "key9": "4SwTa2UgmKtCX6nMUKFBpuAyfZ8gw9EwTXiDMBT14HAuKXn5K3Snn1jX6DWmUiK7wBJgrfbskVXNV1rb9wWqm3Fp",
  "key10": "2hFfXNctZqAPnDAtSjLAitnjs1Sv3QmRFZ3eTRDPEWaYPia83PhjAmk6zWWR7FA58h43XiQX8sjFSgeSuaeaGkMG",
  "key11": "4evAtYkYHUD6PzYw8yXf5mokWQr22TtwCwUa9prMTdeRymLVzJ9ra4jvUd6zownJRV2a3RnrBFVLXukkSkMvXQqe",
  "key12": "3Ja5YkqFumbmBEJcmuj3kG3kndYHxvoaBXxnPHBBxvFBx34n2HNJi6A51XSDByJeqGsbNZzEXf3DtBzJsAhHWyCH",
  "key13": "5JH7MpzubC5anPDsHzQFBpwczfXw8C8rfXQFMmczepbEuxZjryhK7PJkvXXs82DF6LQH5gPs3F16Qds8V5CrvzTa",
  "key14": "i2AZWzDAZ8pnbJkykuT7yfycgRCkKFUK4wx4xZPwLvzGpsu21ciAAzEJ7dEtsVdBDUBJYn4p6hX3Ux9Y1j8GDCV",
  "key15": "29fADQu1aEpvAhMWbsTgLxNPnFwm68UNu5mYXK4zqq9Hu3t1xoQ8K7wcouSUGwrJjXNDskEUUokpiXMnoEfV23jm",
  "key16": "65jKAgNjJTLL12Ngd7e1JG1UKm3xHUx7LzemkPsERNaNfMWUw8jjsLswsV9psH4U3VA5PFC1m4EpyEi3j6iqB1wb",
  "key17": "3w93Si862kbCqyx8KFUMqt3rR5RJNuvyCbb5J7KDZAVwapbjrFNBoqyxdfTHfgxPJDJVrLZ1XvTf5XhyKE1rq9tv",
  "key18": "2KanuuCmo8y5gA21FzcSCDAm7ZmKTgg5DnhsyidcG45bACSc8BATyaFRNah9YpaZV8bn95Mc1pXgyhcjSMejdu42",
  "key19": "3CcsoSEvVJcLy78iJum9K736azhUYM32hcL2za7XvuHNkFLptBkeasGYn4qAKCAWPjFpKFdXGdtoXUN17fVq1HQm",
  "key20": "5xDmJXDNi5vLdjxcdYnibYpfYZQthQFoGro8Y8enAXo3mhp6jFG4dfYTCaWJYAusPmAuyEnUoAZbXrw4uKq6YLxa",
  "key21": "NedDD2kYMnqXtZ34HqiRhrmdJit2T7qqbGZYVmTai1hRSWmJsRowpFUejV4kv7pyNVCkBtN2MLN1ooc1u8NfX5f",
  "key22": "3cYmtJyZmS2sFB367HcpHGLBVJXErtee936e3MsdbKZfwyfr2FrMJYJb7CPS6f4RsNjbpn4RNHgQWCQJ2iGTrHbV",
  "key23": "WrJiZxo9A4QRvqVhu431rSCVbqG6MBYVKztXMaP6V18dnMgBeeMiVMbDJukKKjzJYUGkaPpnMNbcYNR8w9ag9Ji",
  "key24": "253SKv5v5SbsGXcSSMeRmuVbUM5CP66z7zMdXq1y7y1j7RsVxBSeGb5MXFgRrpJVYtbKUraNJt3ZiBzKLLA8BmpK",
  "key25": "4GNVmm5r9xpp94AtVC4htJP7Z66b4Sr9BUUedh9pJa5VfgrxYgnJpY8TWYCYddx96TUCVdpdp6NzLMw5gheaKGaa",
  "key26": "2eNiaHMTL8TNSWgckzkeQp29WKYaJfS8HzTonAN7Vk2MWdPF7BGUxV8FsKxLKekfHqaiqigPH294yMyJ1PJkkSNn",
  "key27": "4Ru397Duryc5XuZ7an1QyKtN5GxN5HCa8heYixyxQpErqzMhFCptPvLuPx7WV4FSQXU2nNkBqBW5gtqCghf6akti",
  "key28": "34SSKE6QejdavwrAeMzqaBECsRpUjoKG5ZbaBrfkdkGuTjB6Y7VAYq8BRzTTLuviLoB7zqTfbFCa9GxvHpnxtfLE",
  "key29": "4rcJTW3ePf8GsyWTCWxF6PBDERBdnVcByM8fZS4R6FUFgKci1fygaYMKj4gh3WubA8SoNtuUzqchZiec2mHvStaZ"
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
