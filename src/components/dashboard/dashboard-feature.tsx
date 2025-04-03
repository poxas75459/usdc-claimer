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
    "3FiXxk34GMxZ1puKQvcEhLVu1i7ww8JQt58QCtKN53XKYHAQUhhhXA8CriWweHTFsQrsrwBPT6zpqbKKyx4fSfVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pxic9goHvGVKZSL4iSdB8sJeNvUkrx6QMaubR261McdhYMx6ZJu1ZoaHwwkWK4Ds9HVJTwumVgWpiTrv5Q9kfR3",
  "key1": "VKZ8iHJzueyzXSmvBsxoyqnAuoicqqVmw5nSokUhNxWf4E6HVnzNfLxCqpLmacRR4QeZp7wsR7LwoFBohmRczAX",
  "key2": "gdwd1bi5huNHjoWPYzUoiy9oq97FD1dLaZdzFqjA1oXuMCUxqV7T2KKKM3PDsuQuw9FvL3Vx8Lfj6FqeBhPBVfa",
  "key3": "4zag8fio4RkHVSDZAoMHjYgN48k6Ku7s59s1qarJH2UPdVPp1ALMu4ViQVoFRnmvwB3g7Mw7m8s2ELEcAdiZB7Qq",
  "key4": "2amK4zKqEtfjjEY8R9CYgyZcAMePtRi9jBrUi1BXRhpEbqREiE3GhUczYHWFfoKjXMTCTxWw9EcPfogS5wjKKszY",
  "key5": "5TZStfS1xHFT7wo6cm15LYhiEqwrx5B6PTNqeaSbPPobjWWBfAhdHBufBe29JQRyf3PVezx8WjvsuXgbc2Xdeyse",
  "key6": "FymEfA8Q1GXFtTKtLHojouP4wLB88tAjHSpLjikcVNUj2znMb9PCQAnanaNvLjns58YLEJt39bHmZdSnWjKqcs7",
  "key7": "oqwF6JU6xjkAE55X7j6kSB9mzYRd1KxxQtRjY8pgZJGTvcTkCJn4M5cScGC1eQuBsajHKvzeqBsp1miESpKPS1P",
  "key8": "2p2UY39MBS1z25v8hvPgJwZ7RX8VvyHizMFWtmLoQXTdqhYAixLPdt4PiHxhWktwnNSfhywemNaHjecsvDgezJar",
  "key9": "25QeiEdBH2mr8Hb9DSikirBHXsf2Z2uN2Q9A2igu38KnVKhHnx7GFpGL3Nrf8xWnzQUX8DCwVAd6sEv3fbCEsqvu",
  "key10": "3YJb2A37VGJmsEA7pzWbP2Vj3TYtDjcw7yMjkyFBaLehZTSVXcBhkYNGLUSqbCb7dpwwtu6JhqzZCWPckzYryRAi",
  "key11": "5kRJfF3tFScskZpWvTYaiZ1ofkWAkQjMnWTjh9CqT1FAueufeQhBfd7cfKYs35NRdL8CMEfj79zg8ms1pyD9n1Qc",
  "key12": "u3iAsxUhyvUrjUpmUpDm2UsKYbWv5duka5HfFSBY2K5kUgmdN1TQZTGDVhsKsHn5tA5ZVKoo9Ds71vRWGbyvBAX",
  "key13": "qW7bWLzhE9HgPuVgUfXmuuQuKcku68bHggZqhPJo4cAn7gSUKtYvft3HTmzPF5EaBeVRoTfb5YTHVoN6T9tnGXm",
  "key14": "5HRaLJTb8eju3YxTv5QCANyxoWGDpGy2szvpM5CJustCMsGPtYeChwwkPucdyshVMg6XRnYTUBTjgFy1NWJo5BL4",
  "key15": "4J83pin6Z5iQMDmSx2P7dTx7vZHp547YZBbJLKZLXgrXsVvmEiqtoXAa3VLjbvFiJ3RB2T7abZWVA3Q8TJ4Niov8",
  "key16": "4wUToDbhG1RbEdDxsS8AWrMMwhBPC4tPKaF1GoSFcqbgsCDmh3jg4PbyuGD5DE7DWkp6YZLUmMZuzC9kDoQgxFN5",
  "key17": "5mpZywWauEnyfLnzioP5WYNhkjZFA2UU3dXMyPr9pGSYQ5J43rupfX3DD5NmCXjbyfPZ6yrhQL7pvBawqTzF15Uy",
  "key18": "3LzZW6fsUFuY5iMeaNXZMKaVKoiDC4ZMpPXBpzjCHsT5hXAV3aFsa1HTnZTfwHSdr5ZjJTbDDMkkgFoaLJNUPP8o",
  "key19": "3BNp8CHKh1qXkcM1gQjv9xSHSUVK78vGkGGubyaiPNGgJyFkdjxfkmuL9WZdhNVhUo7ofTok6Uf2JkK4yHbiGAFJ",
  "key20": "4kAcgzPNxNh5EXMBVPaJGdH6kLjh1xtXzvFucbQGRSTRmpAShwW58KaYsog8m6a7vXBYcP1QpQbDYToTJFNYuFLV",
  "key21": "2qN9R3GitwB62N6Cvf2cA27ckqJZe4ucLLNcejtN5wqL7c2SeFUW8s5xKScyKr95x3qeRdSbft8Cs7LdmM5u3R3r",
  "key22": "3xbi5AmzUNFNiCvRXcmWZNqWSaPfoxgEUFidVGMhZ3sUam5o73Yb6QDTqArkA59HT5yKNVW2DwAidwv9qZL3mh71",
  "key23": "3nQaRkbGAdfw756m11bBVgjw6Qevp5rhNBv6PThNUrnJTfkJ8hjz65gtPuBunLcRPzfgrR7M7rrwRjgsLkgL6UkS",
  "key24": "5bzsRviLBZYPbL4r8q1iyyRZohPY9zykWskvvBpzk1WdtNyTqhets91TYvswSVMi9fZUJdgCE3JPUuN9zmTuFhDY",
  "key25": "htZAGvaTEjSXBjQfKLx3sPQboda2K8xNY3TGbxLirMe8U9QNRhyAuSewt1bWtCamjLrrSFTNvEYr1tuS7cWFxZ8",
  "key26": "5tt3E7Hex1RipWZhqLxaoNsqxWNX6EmLZcvr5Rjtq4E2RuNJWK6mvDDZYqJpJhYLeFCWY9NYrzVFkghG1mnjqaL5",
  "key27": "2XFLNy333ic7kzCnHXJGUcXYd6FScFyAZhH9jZH7nEVWnf5t4FXVBEVkKsMGqN7y5hWC9Ek7oTzoqPmakMHvjhG3",
  "key28": "4g5QBte4r4wYJJ2dJqk53U3EbUAaT8ChwqDsuaUdqwjKXMab6kaxm4sfbth8K8e19WFTqoVT2YGMSYVax7tMDD9d",
  "key29": "5JZkD9EKqzZ5HwzTyX6HoxamadPqRzn661WsApRhonXRMvDogTCyhBNLU3ZcQ93h9cwAoUcKJ5YgxmSRQ9BXH72V",
  "key30": "4rRksf8LNinFSpkMauM2Kk9co7PDpYFJg58dSh74EJUwa7hanM9HxhDWSC49LWsV5pXrbq4MjX9ZDTWj3b3gshQL",
  "key31": "5C1nGwcSPjRwtoYNKVJzDw28QTdv9Km9zJBCfWFCSHtP5Mxvbm8m7bwuye85Y5omQvKmDETxYFgeFXvd8CKN49kg"
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
