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
    "S2rBToYDaVu7FXCNhJxU7WhujGbJMYtxWr8RXVad5SRzdLxtxvHCxBFUXjvt4ejMVyrbsjGbWNoZni93W8RADfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tudh9p2R6VuXsFshsW613ESvXSKdW48HSXMH933eeYQVyUDThKf49PoTzZuuQk18kGsRAs1CPufE3jQHBjUJZ9e",
  "key1": "3Fahw394HYGDhccS4EnhwUnMq8XZSaYzDw9h6WnVqvRaqwAK1jijTpHcGzavLiVEobUTd6uQ1Swi4K7pEEQeZCvD",
  "key2": "23Cc51Xcc9iXbEMDh4xQkJ7gvAgHYPEdywWtctqKy4YWwdBb8JXhxxHBAscVNJWXrtUckkN4KfwSphWWayTGQ1hP",
  "key3": "2VXrJXmvbU8CG9riok872pi1DcVyQNs7VmFjuWn4HiZJF1tpn8NrG8kw4vjCdTHFQEXmD26E96n7XTGSV3cNR5ug",
  "key4": "5kyohq4oUBv8P7o44iuKDuZBtGwd1p91DUrm5axKWUPiv1BMKegvXyzL6oVy7bGUx86nTPj6DchomRnhrcui9MQy",
  "key5": "UwNffVeaSh5spsBZ3UiYMs56ZVQCNi2jtckVkz63JfaoZY1T5WAiTPMzGeZF3sVT9hkqGxxnQEqnWWbF66QHUWx",
  "key6": "2JNNYVCavBFDH8wvAi7YMX4MaXwDsFYBkuMo8Tb5M2f5GFgmpV6rAwEcZYHS5P4k9HE5uTrx3DMeMiQmnQcMq4bw",
  "key7": "52HZUpxX8wyT4pkxw1wqdQbFeagrTnHTqN54UGcQ5TMZTu9ZK7kyX1JgYkk642iwcF1ngsw8fNX9kjYhX7K4Pkik",
  "key8": "3G3Fpy92diq5z6QiZU5jR1eLBN4dYycnZm1ZX1JXBBtxu46vdBJVdbZPbEmaHYQjzS4mQJPnZdxWzEdcUqmeiNW6",
  "key9": "2zsBYQAWk8u8aeszRGkCZyuAhUMCZLwfnKdcUchvaJdynGQSN32Xygcj6s6WnCSj2GDQn9hdPkeZbB9PLLoog3aH",
  "key10": "5NMwvJ23G1UdFpMExZ1xzm13STT1SfShzcZP3okJxWrQMbCD7LLZoVYodFL3uwTWJgNATYhEEtm4ezCZvxXeGocu",
  "key11": "4x7XdtTSTmiANVEazTQedRgiPdLvG1WtNwZyj3pxpVyijShophNfipsnWzzzUmTayatNoD9fPpK2VXa7DYDMhmVx",
  "key12": "JBgyXjx2h1DQfWNH4HbFzvoZWA4XfVWz3brnjazitpZjzBeLc9xbfVeFhRQmrLpDKqXRpxdEp4pRxkimfqViE3j",
  "key13": "EuPozigq5BtiYW61d7yzwv9zNfNjMptLRqvL87Ey3ZTZnRjYh4Lbet88WqsMGBXXfUpuABVVPpCU6Y8vDhJmC4a",
  "key14": "xUG3TeHZvuTKA4sEvrdqtSbpEXv12kyHG3nYAtYAyzWLKXPgRLz1VXLNQA73vtC7EMS9EefL7QQeCLLjbf3j8zo",
  "key15": "3HTcNFCGpPPmTX7T87zH1npKCwUEFJ5sGQNNFSBD1PAMnPwCXNYrhCU39sFtTPcVnwh94XRNaYgrnP1HenjQGT4N",
  "key16": "28c833HDmApVRsqDKAFdM2utxwA2VJ8pCdzYjZ6Q5WxRsrNo5HVh3FBdZxpfaycfkUytwvqomJxNYByEG8wnS2SL",
  "key17": "2gX7R6v2R4wBZ8uANjvHwUq2a17x1oFiDDav5UE4vwV6hkiRwGwCufi1kTMoYsybUKk5HPYiTAvFtnNdLifcFtfv",
  "key18": "5wK77ZgZCf2SW6s8uivTa468u6xUHTdo19Eu13WsBfzV8fYLd5eD4t6Fxq1wt7munqPsHBMbStsbR8HsGqVp44Za",
  "key19": "2yBQtkCuFto2dgHdkHMfYWcFjJ12NZS8BtvFfjZWFYP2XMLqCNZCRfLuTEmhTt2ozKri5BQRB5tx51P2fpiigZGA",
  "key20": "5Z6a6P3arDL4Trvb3TT5keCS6BdF5NGU3JnXqYczhKg8QLJsCZ65p9CaADzFQXWSbNGPzFvBc5S9F4K8P5yKMtVv",
  "key21": "2BF1kHW3evMmRCjB5np8CdyUGc3HxwWYqpJJvSBJKgTvQbjaqmvVdQ5Hu1w3mgS1Lq4LmcA3VGAWXmnr1QyufTF",
  "key22": "4HXprwmAdVs7TGQ9jJDYJY9VtgDNNVtCHG4YQYhLUdVsFJj26NvAxeGDkyM2brfTSSUKki9XdA1mp2g1FMcLCHoE",
  "key23": "5xueBnmsURzBjjdrpE8evKtR76XUfgNFYYrzCSj4guzkqsU94MAp5bvFrD7AgirRYCG7bTavA8jSkvHsq5xoUaZw",
  "key24": "2VtiXUomTQhk6iBs6Lu7XGwXXiUYwcoczvaWnSHhU3Sy4FRFoWMQSoHDcdQVnSK7y7Beu8gFN9e2gqBNZg5GgwLX",
  "key25": "24BSbLYqwskxbRG1muDoVUr8gNo2qrfrkv2az7pTqqZdkEmKPL7VhKCsigDy4iJaPLszn3EhuVgujoXsysnu2PDe",
  "key26": "3wGi9iEwEnMDk2FgWiV4X91mcKXkwPG6EgsMSbh9WnDs6msjGhphMvFccSNjfb8qocAGFKEByNDnNd23rfjQoPtU",
  "key27": "xACp7xrUMt4EN5bRMnBrAUEUD6qvgFc9dfbCeaUCZW4fXuzqJ1pXWD7kKDFVowHU2X2WvUPqssyDg1dSPk32rB5",
  "key28": "KE5nMCVvFmjBuCC1XyCoGb2D7syFQdkwf7M8HVMVNHxhvVcnGpJ6Me7Xeo6jbjhuycF8PDQ6C9e5p5csDTraGew",
  "key29": "2ZPzouaQyXrNKUPKKsvQyH6Wgdv6UckW6Kr31eMBVPbQQk2aGmsvKZJZsmJ3biRiVrvWB3zBf3kR1MDUPhkuhMah",
  "key30": "Pvqs7QMUKFLdANqkNEadvwZp67F8GKVwaoYnKk4ko1YzXTkJ9KQXGNB7dQNYFsu21DHZmBLiFQN5uwEiSk5sftk",
  "key31": "4aEDbTPkh88wrq4ZPVoVodEdJeAr1ofoPZqrtm9fCFsbQBAwqoahZbLLaJaVeRwpxa5vypo7mDnAcVaropGCioMi",
  "key32": "3N1cgRqhR2o2vGE116uF8zDXtszjmADXVYEMGDAohRz8YGBouUURQS66FQuNB5rRY9jevWdg33pUsrJQ2kNQgS3V",
  "key33": "5TveUyKUNsmaPGjqjtu4We1GNdGhxYanoN58bFsUwMGJ964Pdw9b3zxtTy2uKeMgYVfSbzMUyV1uJcKqERijGNtN",
  "key34": "3ffZgQzHzxe22YnRQngNCiQ5nmT3gzAXEJA7ks3VCGmrTS48o6aRayTHDRFZwJqhrej9UmbmZR7kRAiyCoC9AuFK",
  "key35": "21iz1LLwnqkC2YADk5bzcQZHhgdVzmp2iJeAztHbKhpWZipHrw4ukgzkcXBmZ3qsaY92hNFEqwFHQbTWzB19HKVs",
  "key36": "2PFkPySURqeWYpPVwnAEj75ucJAF8m7tERwPqnfWx4nrA4D7hJwMYkJFJffugHW1dAH1tU4j2E1f446F2kHf91LF"
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
