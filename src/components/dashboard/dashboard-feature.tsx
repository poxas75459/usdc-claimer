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
    "5mej4Ja8m79is8dogvfgK6epiLrfEWDGvcNXYUd4sJKVzU6AvnQNsUuSBp9VgxHUmxQ9YPXUnJaQcU4DFeafk793"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39rK23NDNGTfAbLQRSsir6pdxufXEYaeYBDXhrEf4rgxvYiqz9AzogVDJfSFWqoz8pnD6iQiJmZFVYghbL48qfRT",
  "key1": "42RtEP9F7bC3Kk11ZSfHncYffJy4Tr1sQRbYKJpUWR5nEpL5zWaWFwrxL7zyhmxHGsFFFGbuoz6XRtwVz7yvdxNQ",
  "key2": "3nuDHTijWzL2XdouNbPG91pBY23FFuNDWbZxz7jX5chxtcQUJDzUhezqBTp94c6jfJqQDXFSTFf1cuXAqMuDPDLX",
  "key3": "4ZokSKSytf84ZkRemo1pws8Aa2bQaseC7b4LDu4txsA5hXWU6SmNSRZiCwiB7sgkqQE23z6FJPPV3iMLMSrgbYyU",
  "key4": "65QjSV1SVCEB9FQioSF2u7a9rqmtUYtVHyG5k23x629m3xpCrmx2C156Rxut1rpyrCemEsScVRFGhBtDT1X28Ri8",
  "key5": "3y7y9TFDNgnp4AYcNukoofHjh8LNEp6q2xPPiNZA36cKkST83tTQedhbyk9h4zgPgkvvDWTAstvFsscWesJMPRuX",
  "key6": "2ahGwGvFnwy8fhBLVfsZaaFcwRrndFQBrHGAf6Gmz4w9Pd3cCRkEkCyeEXB5Q5JpKhK69LFDqt1esVX5YSCbZw8T",
  "key7": "3gHHCcqcSJBgQ6NdebuvQeq6fJu8dtrtvG5SuHG5a1p97qotsGKwckJp4tauZCsjffhXuJ5hkg63w5oCFdNCzK64",
  "key8": "4NdvXyzEWphLVxeksa3zPqfucdcSkPyzE3mAmbbTBhJJYNaqUj1tqPrGDzmX6iV5knErGBacxgnRtJ4tjYmdxARW",
  "key9": "3MWghpmXZ1JBuvjbXpTvGdChXVjFZWFaDmsWU2nh6KHR99VMEAvDcZcRGxXBu5ziE6nxPPoDCLDo3M22bxoYUuX1",
  "key10": "62UBPifdykHAXxiyhbckG89zbkjAVvHZw6DCR98u5FAZtfmxEEQATAYHDevBsyk6f7EaWbHTpAq4q2Cn62tCEDYT",
  "key11": "2GmUUgzJBjKrfVYEGqFpaqe2FjDfvDy6iaNBd4L2FxrZh6RVCXWp5t2pqEmnJh4nFmxVco6CRH6o72TwmsMdfrhf",
  "key12": "2vcPYsanH6toqVGGCsFnMpD89Mu1Y85gtP26x42Aj94HtXEYPGiCLTfRXWkeLwZHf5SvvYPWJSPpfPrkAAkysYA",
  "key13": "4n3mvMAKKTbHdzCd86zEAc1XdsCy9K8ydAQFZ22NTGS5tweQ7CzWyVYNvb7czmzQi3huSnGaAz8mV7wNFA3gAJGX",
  "key14": "58hdjsCvZFkk9Dew9NZHtLPCT4wzw8gnKHFH7LBwmGm5Y17S3yXPBALzEngdWm6tA51Edi1ZZhkhmkKdJe3LcmAF",
  "key15": "Y1hyutjEXiy3zS236MuUJoWcMZ5iuqJoWesFh8P1uQXCfWkcou7Uxfh47qCC3dPsgHHKTaNPhKhHosFr6VNfwBA",
  "key16": "3efbKbhUo8gBSNo1Tg3ZyfodPgNEBoQdWK5DfxZJew1eZHFja7yr4mMr9uapj79WVR4dkU5UtmpcBN2fFcxjVwbR",
  "key17": "3zGbY3nApSagv9di1mzKABUx7cDjyNqQGdHFDqgUuRgpFk29SS5Mj8vBgN6wZMxXtzjpUZcj6TPRHeskdKW5iS9i",
  "key18": "sGe8DTMYUsCdJXhPkf7pNhi3jLV9rg1BZWdxPufJdNRq7pVabnnjhiTkNAQoKE5mZUZCegs9J7rAvLdhksnHfhn",
  "key19": "2fotsntC9R8TGNmwCMPtq76PsM1uTWS6SiPAhKRxueAtq2HTdNWJnA1Z33DcV9ohkhSyMcuY9VCTtn9W4EZPBpR1",
  "key20": "17N7vcqgSZSfvN7mKVfeMB4aHtgW48Smm1oa6C31fFapPCLcYiGsons9euRNe5x16vPLKrotr1YFVbuxT5KidmL",
  "key21": "3bHs295fQmDZKUhV6JQD9jqJuZDm2QnwZ2vqcduZpg6fGgktRKXAjBc5DE6Uh1TGVbD1GAT77sDkssjY7B2wTs5f",
  "key22": "2R7HuADodLJSe636RjuFjF8VCgQvoRNWgAPRojTpFuUK5gkStEUxESvosv4BGbPZUcQsZUbsmjZR1HashB8Pk2Co",
  "key23": "2LHHkKmBzSP9R2sM4dL4MHRfW66d7tYnQWPpzWw8oUvuoJKT5U1Tp6REpUgXXfHrx7LJ32eCYdXmKspEb5FNBb6K",
  "key24": "4chz34kVA61HPAW8j4X78kZ7K8pbMKs8UQ5zYqoHvZSg5VuwKAzLUqeWSPMf81Cx41eCye5bBwadqtbWzA3Qd8B3",
  "key25": "gKzC5G7EYyPMAgEE1h7Nb1NBjtrudLJz1VcXqKA6acMgNw6Gi5y5n9GxQHJ1Nwn9C343Bccv6uneYDJ2wZgnccN",
  "key26": "5mQLAMffYsKmn7MrRxEYfBMjjdg1rZwj8mYtKJQk34j2Sa5jy3969NZcGLkHLYtoywYKVtPPmPigY8BDgj5f3wZ4",
  "key27": "24fxivsaaYM6ueR7jcgLpHF9zyHfyP2omVPXkXUBRHWW1UfGiLL1mus9ZLJ9x3tMfWBZorD7fjJB2sxaeJ6usQYh",
  "key28": "2HdbXJfCzgJf3zQFwFobAiVdeWhMaTfkwGT2YpJDStZX55gkm3shW9bbebpUrReUuqiDCaYrYe2m5kifYXZM6EiJ",
  "key29": "4CZompFAEsP5TQ8PbLRaLt5ffj1A5rH9tc98v8vzxTUbTqzQngTMC7uLFNp7bFXr62kU6FcKxP7FAMhV2bynmpZe",
  "key30": "61wnttmTgaM8FWx1evPWeeUwHZgLuvEmzKXDSGTCXicZNKyaSjShaYT35HvjPGFS91A6tdcTqb5tD3aE9HQiePce",
  "key31": "2mxfxy1tfG27vnUC97i9Sq3gP6AFqFb7gUFpTBYVMissZibPwowMrDrMipLotqgZBCmQBq8z18w7KcAwpdhbYy6p",
  "key32": "g5VVgeLoMjmYESvjJ8pkYTjgK2yWpeGtYH5AGmd8BsdPTjBYEXCkaKS43G7FP5j6rYnpTiHEphaCPnJnse1Syvp",
  "key33": "5yrSvBod2h6X2f59XZShjuraqz5zTKUAf18ZEgZnZCgi7ZCkB7FeKp3MwGtR9pAowF5ANUKyAAwU2j5FJ1oemxXS",
  "key34": "EkzJJQhMmGu5aHGYknKkaZRKHAiWBbMNRZqKqFxwjkqSpELgaCNipG1xhxRnVq4f5emeFG3KbHULpRtbZ7Avxc8",
  "key35": "4xY1eNUqhMQ2p1PXThDapkPENPTXxSqCT2Cc52fdX8p4nntgEhfsxoWNXLx8uSqKnPeSTt392KEDdYR2edxEk5cs",
  "key36": "vCtGgQYgmcQLkgf9m7gEG6U2w7MAn4CvEZYb8GBxK4k3HvS4NL5Bwdg4u3kbTEJAp6abC31Ymuj9vT3sLUGsA2g",
  "key37": "ijXLJtrEr5wpB14ka71SvNy8FVjN4sxqYXWHFcbFkcE7qpmyQ6s2EMbebAB6sFiLcwnzNaYYgkCyruKQTNPcJzn"
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
