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
    "XQU1SgBoxRZjEpRcd6fq9MYURwp6w7pit12XzehPt3bHsGLUpNorCcZWQquVTvhmbRkzoqVfM2XFZdR2fxxmfiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FjeiwAh4ChLYSwJqu1f1BhZfYPrpAsxgGNaagVdC9RWMXWCNviTPFKWBTgmm2sVaPdrrbxW4Hs9t9vYvhbcdamG",
  "key1": "4AnXwzRYejE8D6TVJiBWUDNHyLJTk8SW6HHZ2vKTgdEDpJAxMfm1wRagbVhNENaq8sLb2nBWva44imKT536K2p3K",
  "key2": "v8CBRehxHkTjY9M389rmtJd6YqeJY9v7TWeYT73CsYn1B5KwKdTV7Kfta81ZeBbXDJCmBvybhJGRFnnerKuDJH2",
  "key3": "63zYaiRAw5o9LpZ1xfwn4HbKpiaksUSBJygCYyev57sh3PXa3VUxiE8smHiZiVVWs1AmUo9rnRD7FyRiWSx2akAL",
  "key4": "4t76YFqcUBfnom1NkhzcrAG9v3qn9fioKFrwMcYuzpCcJDZ1fHWT5VnDvxmSUkTQxf8uknQD4pxKpPUoQitScMWa",
  "key5": "3WMuxUAqVGqf4dLPsjLKssyGfY3RWvozTFD7u7LtqDVx28qu78FjFvWrzXi3ro5HQmiLejHB2NWTePKfYziXC5CZ",
  "key6": "2DpH4GUfjq9YvFggyydm938CHjPZWhCZvsMxDPLf2rmeTD2TonnxWSwMoJRMDFFZ1f9DJWj4zgqtBPsthamAoiEm",
  "key7": "uKGfdvdwx7GBC64pt38M7vBpcv12Y5kpBKUcKNACLRh7MRcXuojvpk4irvA4ADajh7aGxk9Qq1sZRebFKtwvvPp",
  "key8": "3vkkijHdWGKjmTkatEKDSS8FPbx9ZHAniNZSmyV7vnAFmweSXq62qXKz6muT426rXMRaJi4xiS9RhzzcaxcyLM6f",
  "key9": "CiNCg1K7aWnRYU5gn9n5MqFnbjBAr4LgbzgtrvwEtae4hcZwyXrXoFUejpCGX4rTiaa6jty4Bs2Wc5mNzCpKZNA",
  "key10": "63zC2jtL8t8rDewQCNVn8EWWKCkQBGsdJ5e7jbBGwHFSCDGnhdGiFsLfXxSWXCytqxgaLLNmpzWHAZrd6CwkP7F7",
  "key11": "3bqeoqHsfWK6k54psffJ7Awv8sJ75fFZXwRjmeTCozYiMG7zjf6dTe2YW8yHynDadedvkDVbMcPoehoa9DoUSawm",
  "key12": "3Lxrs7b45YPr6xDi35g5dawfHWY78aoihwMxx3YejniqN3SK1Gw8JsgNbvA2LmuUc1PLTL6P8JEHif1z74hAeYok",
  "key13": "x9GHxWfqo9cVFpHGE4b57M9TXR9vVq3uhVjMtkc8yypsnuLmkhWM925BkbrLNsQSAW8ADr6LxvhsVq7kRtw38JN",
  "key14": "nJSzBaWhe1V9dAxK1FUkvhvuvLUDCbZ75nDXYrqHFKPhRQGgWBzHLn2Q6DnwpuqMWHC9Zy3SEcxuaXuW3JidMVR",
  "key15": "4jM9DvkpPEEiAMc5uJsUFPmk3Tgy1H5yto2jSKLMkdsyauQC9RZj127FbtUCAjKXQCLoGcWdAbq6V9A3qkYBu9cw",
  "key16": "4TZxkqRqzJJr2wceePDxgJn8YiSKjstaM98T7oSi9g29UjTVPmdurdXtubMgy2ZQvZ36V7KShSDzH1afHhwXW2JW",
  "key17": "3u2663Tq89SN5trvmPSrx7zAjZw963xU3NQUdWFn2ZR2C71tv9vWC44FW1jXqDH6T5JFA4zjjMCMwwVMWu7mJur3",
  "key18": "39P86mRe5XtwdHLxV4NLt9vacR9s69BGvzTkTpuzaTwtheXFGX9FwCtSgG4b8um4RyrKrf5CLvrSSG5Lm4UR8uGA",
  "key19": "FR8VDKvZXnjupes4BXQ5YcDe8euUesmNXALy2uhjvJrc1C6gf1vQbe8SWn1HJ6LPTCm6t2qC7iH7TeUmvfCz4SZ",
  "key20": "2LRNCZKUZjya3AqqZh3RRaZV2pe4VqwtgUToS4qti7XxmN3fZnbfgqbMDK2WutqCBETR2RQ7mQ2fCMZPkdg92nQt",
  "key21": "3WaGXGQ2vRsQXycoLfJRuu7JCGEk3xpudhCkhEBsdLduu87TrPuxCJJm3cYomXfHFQ6Sz1WFCZswxJmYUgvU6pgY",
  "key22": "4R4HXKfoRkH4e2eqhEFRyhB1qrk5dG5V45AvuunWQkrSknsXDGsug86Rc6XSrLQRCQeegtpfna4jKRuDxP7Mo5Ad",
  "key23": "526u3wDB6BGEpiNygu14z8SrvZEZaSzzfvmAMj7HdiVw69bk8H6nHvggWvz6sHfogaikZdof8nEDgGAF18P1XdTN",
  "key24": "QKCWmcy4hvvF9xU9rPzqqbi9uCymXK4ziNkC7fQyqWaX3xhRhrxnZUVQ9CemshnqNror8tVRwX6t8JZbx4jFovX",
  "key25": "3Bjgxzoc7j7vnKtRybZf5pgRT9ADkTZRbVd1Pcxi9dPzmSmoo9ZRiWhEAS7o8Lksyy5NhxaPNtpwVv5qFiTKf7ay",
  "key26": "5k92JdQiXRH99BSXCCh68CmvjdCnkrVzhqxLmYt3KB1Rk2Dy3dyyxEX1ySToSjh5tVVW6Z9WwZTDfSE2uzHySgR",
  "key27": "4PmBrHy8P6ungkGb9zAaFQ7faf2rttumk4qDWL8Wt76nbNovN23fvpBv8wCsKiqMTWT7TeERKwV45cpo7nCwXGyS",
  "key28": "8JgwvrbrQFmo4HaCUnyP1r39SVnhKPTsgeSC5Zy8EXHCoLHuwouUbLPPjnz1MWW9FAJv55x1WaX6vuYaAgRTMCm",
  "key29": "26eBACqTqwJ5PnHFW5MwFinGPjer9hCizMeKpwTx7daZCDuVJpq48LhkrGAD1kBxNBq1XTWxgcVaqCcSpYvfPFqX",
  "key30": "5ZqqMbDKoAaZnHkDN33FgRMSCCf8GL5m4PBeJvm2xrVtt7595rLXRkTEYAVC7MZ15uAcFbrPevoCb2PW7kSBEgG7",
  "key31": "b6sSE2fE5QhLMQy2NtxmmwSLEaLeD2LdaMej5FAgxoxnXzsL1D5tver8qsVKbMZJEja8j4f9dhrUvGyn3GnMEk5",
  "key32": "DE88FqrjWdL5rJU9TcmLUi7tbghVgks9JmwyRSyzREuhwB5CjW3GuqrmeJYoe4PspEcrSPPaJX9tMCzfRForEGb",
  "key33": "391grSA24wnFXgufDDse8VTiWdE1HiNUCWiqDc9s7bsqtreVNRPNjamd7aMyoHC5GUkQzi4MmBzGEcL9AztacgfY",
  "key34": "2YDcGefPXGuDQxfFR8pqbE6yj1NEahm4mHkYT2aH8oQPeRovfSAmCmrCygHR3QTzutH6cfkvUrioXebHRky1imgy",
  "key35": "5dXrV4VqxptdPZ9ZFzCUeNadJLh1rZhBAjcsf3NumK93Ykm3wE8Q9JfApd7NKFvTEZuF4YvU48NHJ5LyF8vvR9h9",
  "key36": "3tNHZkm3ZYnUBeibWekTpuSasN7ZqNKjveNtFVvjRGdcB974qUxkK9fstz5gwUbqdCNoGr5NkR4CBj5am2uYLNYn"
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
