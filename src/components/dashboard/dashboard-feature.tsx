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
    "5xGUUU1CHSvvFidZdpFtyd5xBLBYaJK4njNAW2MeGkkb8RBZtWADydxSETWNViqQW8pRfzLTkqeSBpEp2GmF1vhC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26qUUMRFbjmveMy1UfsbwTkEnB7ue8TNbNgynLzFdVCz4uuBAFM4MpZfzzJZ6sPJJptQ6mmgNyZLQuYBZvjD7s1y",
  "key1": "4xv91gNXTt3XtPtfxB5syL4wGFjzuop2WaNAFYMBfhEmzSrJPBDep1Tjfsz2tfeBkzAQ1myG9H85if6t4LPJdY5z",
  "key2": "4hpzWvq9L6pEvh3kd92s8VzSq8E7THWzAaiZ4XtGBf8atieSN4auyz7k9eKSXNbuUfd1HGzCQpZievoyUE4AKEX5",
  "key3": "5UATs6QzR94u3ZyC4xJZdArfHYLvHtNDs91k4kyrcmqZimQqkoyBLVCMJ6GWrUdBWBrQDzXT4NMToVtZXD41ZS8z",
  "key4": "5sH29G31VimeFdm72wt2GvH8M4SeQxFNietPjESzxrSU5p5hc1LnKZNXQLXPkpesFWWpLvR9wero7Gv8mLHwzafr",
  "key5": "2K3sEKCebaEp8ZhqHvgwQjPrj6SkF9jbQmHarSEJq862QqLveqmhTBcgh4b2kms3gvRMcChBYQUhioziP7k2ydWE",
  "key6": "5VxL1s9G1DY9VzG2PqJoJoXu3DHiiW4Rr8Wc3y2uZkze1YgjqDvg1my5162a9ReX5wMoMSZEqvN1GjipscsXymJG",
  "key7": "4ngtGW935wRk7JiNVRSNP5SjCpbVHX375zy3jNTmxxfWi3n8FjwTCYdTQf7n9d5n5A2z7veaeNS4uuQydDsNCFvm",
  "key8": "RaGKS6XfoC86QBGDs2SZukKUJ3mMqZiVFVxMRPNfaaaN2Xn3tMiqhewKLb63hz2sfokfJnZARsPLxkARm9DLeEE",
  "key9": "4RkLso2wynpViQmRoT5ZgnjPH8uAy9mC8qk86txMiaHmZqhjbWcXXx9iZunTLfNsKAThX2UiDXpJ19BJP7LXYSqd",
  "key10": "3Rafjukw5jCdtt6pLCUa8Ud4FcN6QYj69Hpoqs5BPAVYRihEFpTuvYZ2SzNLfqCwApV2Q77guEVdJfuFe3sScKyy",
  "key11": "47R1dDuk99HQdupMnr9rkxk3RrKsSfPBzcqtuRpt2nr8AWry5NPw6P7XyMc1oe8GSrSbksycehk4u6hrYeuUr2Jx",
  "key12": "pSG7nWbbs61sTvLg6AjZM6ayPxvz4Ja62YPmD4VTvZCrLo2piKM7yg6ECFSA3thvE46EGLNVZW1YZ1S42r3sMaG",
  "key13": "2rgXmfxXF2FzJbvScMJZgsgejxvaVUV7dUajL81Hg8BRLdxoY4N24NgKStSp4YCGv4AzeMYCrKSn8nxBNAVdDu42",
  "key14": "b17jDqjUjU9mhnvRa6LfYbvTyjdmW2Ssg5CusNzB9BxSWXBEpvMvxbbZjXX98M8KrKCfjctJq3EdSda9ZANyQmM",
  "key15": "3kLQDvybS3aTGDs6KZujHP6j9KAsKtPZEzk1NkfXJXetCo3P2ENvWv1oxRzWmTq7S8Y1Q7CPA3NaR9UuJU1vJ93e",
  "key16": "2oYJGbF9sovRdEiL2ZhfKxwjDcFkWmQ5t6P3ZTrcn7T77N2R6FSEKjo4yRy8SJU9s8uMxNruD16fNh1hnPQnNgmG",
  "key17": "32c6gFd324fXUg9t6Xq4tkLqt6UsGP6d8o3LG32MBLfaC9rX3tppfyg35XCJGahyRHb3tHZnZcW54hN4cGSJhqn",
  "key18": "62gJtzRnLLpqp9JoFEuvRE4jWCtrrG3SnvdUo9oQVZumGnYPMEbpmxQEruaiSg7qtzrGsJKVfm698fQ4cNr8p34C",
  "key19": "gyJD3UNsa8ipFgryWunKjX12ibmHVyzihwaT7b47nZJ1houEszgFvJdw31Cb4gJ3osYgtnfJvGA319JvbCNJuTj",
  "key20": "5LzmX48WEnKFi9yr2bV2n5KCNns5NAWcjakhVGvAbomck1CqZwV7UPt2ytqxdqxBHknfXMEbbiE1CUzC14jupQ8i",
  "key21": "2cQFePBVwvwktJ3NZWJc78ZmqrTH7uYLgTBNmEkhRro6ne394XK4Gtv9zTuhjb6UZfwiBxHiKTKMUNo3e1HG61SF",
  "key22": "2H6GsE8mX3rDnTaT7qYb7cxyzwGGXojdp41zRhwUZtqxsTJfAyE1RcdLnVyDMGzwvQ5swnu4D5ziNoopSCib8bR2",
  "key23": "22JZVyMv83D518x62TgMVGxXu2Y7jat1ZrCP93BJE5tBqE2mzKKE9gTmaPgTeV97dJ4ChXcDhz7SyPHmq28ya8FX",
  "key24": "5Ju7tU1HtpNcsqJee97MY8vMBczVoXuNJtEmWgpW9WTWJcAMEpGjtRoMikvNcA1vaQrQDMs3DimM6CaLTXER7dLK",
  "key25": "5a8iXoiKThhhAbtb4N3XkMX9cv4KaLu7vXrTBaTPF77vYE14HSrQyHRY6vnA2iG1HDGxP2e4n8TPgW5BNk7sevpJ",
  "key26": "5moURtTsnvJszg2cX8ArLFu4hNLjoMNmqDKNNtUSEL6y2SRvH3XsMDkyhjftox4VhkDy7vTViJNAA6PQT2fpVuSB",
  "key27": "38hTe89rWnEvwmgsqFVsoJDyjqwZmFTMhqS67tY7KY8j5ZLLZj5LSoyeL8hmjUCogRns8LxRr71sm9GA4Pz9LpeH",
  "key28": "2DmR3BEnExxi9RMjpcTKqJh9zJt3vae61Mhd355kBfzd9P3YMV1yNAbirgYWTwYSL7vtGnw877cQAR2WCskfbCpf",
  "key29": "2kYfkJHG7XHS1c8e8iQWdq7tsaGjKcEPmRdFWi3EmSzAq3DFDn2a88Y4JFCkmxpYRzwfjCFESznSbz5oRMSGh5Cc",
  "key30": "41377H3a8JhQGBhm5pTdMxLi3BVp2PyjTLur61LLtcAFVXUeqGc6NvfMqdxinuhMqQXwQZbaH5iK428wUDgsXPCs",
  "key31": "qM3qj1ieG57PAz9SscupruuN1MDT2Rp5H4S4Z8C3RqY8V7irHKMdBdUmVnmoNAWRkB36JXVmjuN2qkoTsAjDmFc",
  "key32": "5uksXssAPjaNLR7p8wGDJzRSaTrXsrMeLNxae52k79EkeaH2VHX7o9E4u798LVKUTpHJT1m3Uniads3nVLPMyqxC",
  "key33": "4kELWKWFctCRR4CM8kUf5DLCHCGNtJeiubwHmn1riBDCDzHk8Kiutabu2C9xo2Ag4EUphnTDdT9zUgVeFGK9oVfe",
  "key34": "2vnrZNhHZGVSQAc8mFJm5LJJ1wZnmcNfgWuVqdvmqPN79bQXjuFNgCnfBNSHAmr2joLiNxPM4BHgKGPiRUDsBqEx",
  "key35": "5gPsG2QNWBB1TYW3HaLMwKhpPHCcA4H7Tfdn4uSs8aNvjytaHrq5tBx9x8JvyAztPAiHniP7jKYh4uptQDAE53xJ",
  "key36": "hAS7r9KULgssbkh6cKDuAksiMfEPMpGwciNczbRK6RjyndLPotjuKQniRtECahSN5cR5vUCDQRPRDGFAbPjpMuq",
  "key37": "47zehZz7V6aVi3UCHL1nmzcGzQdtMUDWfNQ1a6wedZyT8EVV7WgpYyQnMkVP4qAqg4sz9PzrvAyxBhZXjnDpzJXW",
  "key38": "21p5yvVtCzZ7NtNCXBiitem7JcQwDyXnuJXRSco2ZAi8krXnJQMawkQk96smmihBNuWBNuqCzCVMVQEZeD5iPHPD",
  "key39": "3D3kmcBD3HxTASXPY6QXjQchKRrjViJCbZVJffqyVdDpPFLg9RriNC4T9KP1mPqQC1gDT6J2nQcqWLDe9dBwaBki"
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
