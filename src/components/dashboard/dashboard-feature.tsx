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
    "3jXvYgZGxRoXTWQ2GVmmvEa2x4UcdHgJsz58DWudcUjzZUrA2MXRnYeh58g9MNMC8iuDBqF59Jee7Dmffe8q2Xt1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BsmDbWQmYntd6dMvcDRudRcFqaxoweXyJ7ykkqzZiyovvxRdCSSyxsUcqzhtihqjmiGdWMFVv5qRDzfHrEZKiif",
  "key1": "3jjVFnr4BCBmc7NhpYvX8qtxWXC4b1YnPUJ5zKbczMD5GcRE6rpEPaQmHnBofPPpR9mtRQRvwuDxTS9Kk22uvdAa",
  "key2": "3TPtnsEKSXnPZorVhBWShcMjnfsHvWBBUie5tatLg1pkjtpRLZh7YJQwBmZGKWKmCTdURRPzK9vETiSfnmQ5ura8",
  "key3": "4X278VnvCG4xkGv19n1aEXFMGDLGc8qpvbzBjL8bYzDbBtwVUVURJktveRFyuA9xFryi8dQPdBCtk6mstRHTMyFZ",
  "key4": "5GZfeHNgmZhiKDdE62YprNn5ot5GEbqieuw3RBrucVTzWcuEUz5qD75K2raHeLSqFn6FD2gCsRyKxQRs19J2PjmL",
  "key5": "4Syy7ixkLwaoitV2Uwm9MR1fT5zodaYmw6hXwwFw3CLNv3CQfbCe9EesexVktTLFNLvfnQek6dxtjJPCoT6v8Wa8",
  "key6": "4ZGQNVB423fFyKLEDMmo7UbMagYGapvu2GZwAFobKpjTYG2sPbWHGVxeisktHXLvDQmSYyxakDWxcVjBsKXd4LbJ",
  "key7": "47LcyF38WGPY1WgqwRyBk4PiYfGtiZNJeQkck81Ptw512R7a8GgY1JgJHLzS7aGJ8p9qyk1D5cSEg924GmYCswo6",
  "key8": "1w3Tcd4dKZvJH6afCfgEz5b3EmwgFZZukp1MUECCe4xHdoZ2kj1xUCGpjvkJZD4Kx9eJiRhijZuYz2GzQDQ3QbK",
  "key9": "2Z7YojKGHB5ikFkB3ur6ABZ3KAvjxpDzdnmAdCVfzpktkUqnGrLsCfe5KGqLLRkynyi2edAV7k32i2hsjpcZCcHV",
  "key10": "5xkzmCAaLoKkxhKbqA7wr4P91iEW7TCYdAaGBcDmyARyxkxwqVTDagZVcHUecLsduqmSkj7Hkr9Q7XrBKD8muBFC",
  "key11": "5xLjC8FFwVxpAh4A8cnYSoZPtDmFZfR78q6Wfqmf1LqFjKNVMX82oefn5t4Yj1MsrvppDgy1fZAm3v7AVjwG83hL",
  "key12": "4YpLho2CU7A4TEvXGLQEUqrwJjsBuw5BuF1AWXRD45o6KBg9YXBwYL8LQwLt99aeAKsTmSFwvs3CZYRUNgQ3XFZv",
  "key13": "5WyWjTBk846TZmYV5u1bh96vSqUabLbDTxDwPo8VPaNERPGCWySejxMuYuACeirRGkmJtkFwQMK4c15dGWRwtiKE",
  "key14": "5Nu21PuGDftCDTQLggLw21gbaPX5vbZQxwVwDkXwEJaaLYLWPEhsCS39fAkYaGPMDXJjLeHhnvU21USUWYv8eHPp",
  "key15": "U11U3WSghe7yH8bukzYmGhgzynEeGYGzNXhS1q5aFie36dw6zRL5k6GTq4XLJy6SFyaWjEcciHu2P7hkgDhFyRJ",
  "key16": "HdCKhXb2VdZfXUBB8jYtFeZq8fc2dpfgCTDPahKx8fEq84WzKPM63ss79ZZsXdrQYEqt9VFN4TWuQxBsyP8MxUi",
  "key17": "44HFyrqj9ch1ZNSKYB8NvB8wVemrJsnPfJ2AMubQEdnA7VvSASh2WN95NMPUBYFs755vKvqehYqQGc72N6MWEawv",
  "key18": "3yT5417RHH6koqRp9AYJidhEpfcNJqE3MLRyXBGz8hFvmSEGhTQPJU9yc1TpQfVC8L8PjFKZLy6mAcgqNnAPCiKk",
  "key19": "5c2rr838K8LvnRjA8Kafk5R13FGqCK7d9A1GEnfDBqdp1iqgtkN8k9e8DSHabkz4TpEHnp5xWHowN8H9KcFfjwFe",
  "key20": "XsbMpdzxDnqYvHHbGdYcDMY5vgFzvX5xGGeCKdnAMYBTB6KX832ie2ffWV7M2yg8r7mQJ1xDk8dsT8Vo3i4hb4v",
  "key21": "5R6NeCR3XECEXKoaDJowkVBEaDMFjgMLMpfEhaJTt76j7KgpQ2CMSc5QRUEfSwVaoo7Bm7BdHeHW6xx8ayExFydr",
  "key22": "5hKgpAPyrbHoEhqkQFrkqat9iVKbZhvwSwucWtB36yqmd4ZLLwFyaoz7qF67RP836RcVkimaYztRS1cJhXbRgjZN",
  "key23": "2cqUPpapYwdUfwnMxTqMdgw9RALLLDJ5jcm2vAonycz1V7vH4VeiKUcx3spbgnRKnJnGh2hnhK9Kb6a4abDvYRr9",
  "key24": "3D4fVTR5bsZErmcG4SeTa495U2tPQDLgppQ7kbkk1uV8QrWL9HDvFbV44Y7CUJd6Z1Ejcr95TNxobE8RzZJmgtXe",
  "key25": "211nJaqBPQHVtc5KxpFaooYhKftXxD3QsPdxiHwD6N4oounXgSUGuUHXESMBWtbKqowUGjJ3fGEaQm5yy3Ftey8w",
  "key26": "2yrjx7WYN59pDSXDegTqA81BrNmvm35u7B9YJjikkEtAALgXHPTFWcrA5yTeMgZwdnLRfDQZSkkhCztfYb6oRNLp",
  "key27": "5kkN2ZeubxZqowBUDGD7bat6mKEHD4bxjAmeG7CDp7yziRJ98qSDULC89F25YcVSdyHsSJ8G2KME3J89qB6e1jJj",
  "key28": "5EaGvLB9Z8ofddc695bgm7dWvuPrxqpGdB8dSc3Vp9Ad15dmHhjszSmgWk8DZnRn6BuAnQJwMhvgxV2yy93KT3Lo",
  "key29": "2kTayj46Qw4gESicVEc1GRdbYokwCMSgyBcELiuMQ7nAkcTH2uoTKRGrmY2sws6NfrohyDv63YwxFeocqNwPbJEp"
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
