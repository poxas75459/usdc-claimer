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
    "3RKkPyF3NjvJ48kZUP8rN5UN3HXgJRc5ZLHXs8qYhGSsfpzMsU1Qt3AyviHkpFeNAC7HDtpd1Yfohs6Ca5moZdLD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n1g2wghzX63vBsppSEwTXz9oVMEDynBeDn19XxCAFo5JGBRDd6LsU6YjSQpKAnapHnksLgN6DnbiZx6DsFJcPbj",
  "key1": "4TMeH2xQMaZUrXmuzjkRBP1gLvvFZKjXQ1xZF54UmLnt6T42dLq16o6yQNBj6YwQcvfvPNLhZDyQGuFkEZG3EJnK",
  "key2": "2EcAekRWAp79wv8Uncy6bBhoW57bRjsQEJfnXnPgxVh9kuNegTLdWYnGZg3LCCtAX12C68viDjdJLmAhrMF6uQda",
  "key3": "4obiPXuP6Xtk41BgGdx1ieA9Zcekk8aK9Q8s6ujybTG1qyw9L7VBvfCyNWnLaKLgD33M177wkVNXygqisUp95eyR",
  "key4": "avWh4Tmpaa5cRsvghBAEmbkEiFecexR8KQXNPHRiTCBfAKLBGk7Sjcg5bv5LxgBvySqTfrZmt65xL66cNETFRou",
  "key5": "61NarTLS2hVLbeV11CRo2SpkbDieinet7jtpv7zUBQdZnTBSsfHrPMP4S85rMYmBBa8Atut7HT98NyiG3poCurxk",
  "key6": "487ekGpvUXNoNuC7tKDQkVxbAkjtdQ61WtwuAvEn9U5QfoLLm32GAyycWPo4dGmKBPx3oZ9c1wzj7SQB7cdhuZyj",
  "key7": "64Sf7nv457SyTEgjrDwjXNziFr3SRwdFJNVbanNg6Y3CZGxPsqyYB6gHaJm2oR9YWb59AX9PJPcPRKJvjKbb5rKE",
  "key8": "2QJSAQKEM1sj5KNKm4vsNxYNYo5TFBxx2a5XSQ6VLp9P1SaBkNnT8RqAWvPuQtTyicptxNmtwQwQqzinA4VQreZC",
  "key9": "3s4P2qukHR6d4bBxSLtZj9WBsqjYFCra4zPH9wrU8zXVqDNcD4VZEcHxmwrZhHcyahNApymGcy5g91mWYEYyZ3n6",
  "key10": "LKaWSPuTCEfuJz687SRTQkpDVzmLy8pX9hFrKC7azoiNGsfqLWQeRbcsbmPNsHLCiZCNvyfTngcj5pgybnAfDza",
  "key11": "2WWvjum1SbDGWQvUXXNaDdug5VpH4NKYsERUoXN7tiSS77YWRBMby7eCsr1keri4Uj5oVqCCp45gmuSUaXXW4H49",
  "key12": "2BcBtpAHSxbN5F8ouF2yrzucM2tDvgPFNK2pgugqz42ecHh5uwfaiU5jiNs718HQ9ag8GXkc4Z342dDHPhz99GFv",
  "key13": "2wZMWYg7D87wfb4Gt9aedxabPXfwMxXwKKer2HcPCsJ2g7Vk1k8oFyRzK42CukrZgTxZXtoQtkDnF8e6VbjLRfNb",
  "key14": "3QPTNJgY39cJam1r5Zn6fYtX5FamBx2a42xepdSco6A7Zj6vSQ6jKnTeUy5PUHju6g421iCxneQikFL11gkwEzfC",
  "key15": "3UfT2VcsK3ewg6HrBDe6x7bDw856xsg8otckRoTHfVRicxdcxVmXWESeHYfR3uzbbNTLm8ch2PBtWJmj3Mqn6H75",
  "key16": "3zDwthVgWXeeyVSt535sZSyxqsXV1K8MM9VuLJS8KkcZp42PP2Uu2DiKmcuJG5fQFmwxh4RZmBa2wZqbamxY1pRM",
  "key17": "4fR1EniZhGuofShTmBgJvbVfeG4XWkjGKT2a8BDgGua3zzFbGccAaxBsaBwgn4wGxiq2ookp1VxRL2tpoNV7JNRY",
  "key18": "5twcyKQSbZQVjvqUDjBCZV9WK328pzbK7e8DXw7K6ftVd5RpisHxoecvG56FWXNyiSSnrsoVjDAe7MfYY1K7faLJ",
  "key19": "7R8JZHzE3NLKrMxpsREDE5yBMA74Gaazy5YpAf3PoajyvWPiXS7WVVoVft1QxF8V99vXjBV9iYr5Eg37RpnMsAZ",
  "key20": "42aeYsekj5941SyFHZ3agyW377vwGDiFoHHG8gPNuUng8VCWLKnQBXCfe4xVYRm9PWctNroQxhUbf4txcVNQsAwW",
  "key21": "7cxEqnTY5C63dEy3tymYSMrmHiCyzQ5cZrYts6Xkz8UURnLag7RpRf2dCYnKmZ7s51YqQxFWFNRkWdvLqrcs3B1",
  "key22": "5iEew1zZPamxhipxVSjLbf3qR6aAueLHFTAcmVvyRjspKg42mFaqcGXddSpWiG3NQPDU579v8JxPcirB15ovNCwJ",
  "key23": "5Guqex5iubRNWgmHYVmaWAcSEpNwcYk9uzvC4ZP2ecycuSAZVABYahJ69m9uHNxEVdsoZ6ZtPYPCPJ92bPPCjLeW",
  "key24": "4ATnJGJVuD4daBgGr4MnbXXcbP4w8WyWjeQYZHvYyUPt9UFF2rxWB3K9g2gPFJCwpBARZeUi1pyni46SeJHtpHTW",
  "key25": "3ZR1Dw72YqemfJofidhSmaU4WqNnWR6N1UHJzjXvyFu65m5UuzpfGHFnuQaZqLnKdDEkzjRztY3ZWEPNyGtHEcmK",
  "key26": "4kSE3rYGmfnbhZYR2pXbKT1hhfT31CyfXRxaAVSGX2rhn4EPkqzeiFatUsTa7UzyNBav5omB5LwHUAbPaNjUMaWJ",
  "key27": "34LnsMGAcAgvhAkL142HqGbpwEPwTQMv6CGuPQNHdwsoWvJsZHriMQSAu9fJpTJHg52VyZnwsEgXSLKXSZAE5Qq7",
  "key28": "3deMTvimWaNc7DqDksJstxhcX5CFU6aMJ91iUjbUyaPGMpip1Ku2CMMrNLMrDCvvFFxQbsJDSSjvsX82vbkj1xhi",
  "key29": "3njMfgCYxYN7SnCWCryBUSFoY8cvSsWpncKXTQz98FchAoaQTHc78ViXvTDQkrtSZunTUfbLJByivuPybLtm1YML",
  "key30": "xPtKMjhQd3fgVdpYJj3TnPqXAnuwEtTtawTrLhpS8aJDrfeVfvfXBVtBk9zEUdYXLjfTFCu6TwFX8y1grN8Epuz",
  "key31": "2tXw44ZHadq48WhJ7aKHLBi7YTkvouyfvtRbRw3c7Mi21e94qVbqx2Z1Y3nUPdWxXAHseR4jQZoUZFxY2BAUFSTe",
  "key32": "2pbUPm5YvM97mZ8qZZx898U6xGNhKyCyraDpMBCAnuctutGktouNF9HSvW1ntDvfMgwGRo4qMe3KdbFAMxJAB7KM",
  "key33": "TyoRrSyCkgDHHHdZrfUhaX2BMYQKsZV3nQhgvB3bWmxCGdNQpuqy6UkkWbJBTg7TnDzYwCAtnXHsjqQQ6QTECUn",
  "key34": "447QnL5CUiWhKr4DTcbQPbeeXdFQCGjpBugYj92ZF79CRpsTLLyevu2NsNcqAadZeEu2hGZEjPsjMa3A44X86djz",
  "key35": "4ANDraXQ99T7Vnf8iWmzHBQX3cUvnDz5QJNRwQhbfC7SoE6pzXPae2cZyFLV7VMQt8pg8GAW4S3ivQSkRtqznNxK",
  "key36": "5qrTw1L1k8QkLkHshp22dG2rHUFQdgSsC7ba2k5EtnC7oo9DgKkXaoakUdU1oV7tjHqAUXyYG41FtJvZ1g5GUAAw",
  "key37": "2GmQgtwX9xhFHdVVfDsfKu3rexjX2nhtuFqcreJtuviTxMkq27qBrZ7iHvm63Ww9m8nYmtZNVAphTqCnpyJM457S",
  "key38": "2XTezDcTdRuSVHCxsoVRXA9FFYyZPsXKfSy3MdBs7tcW8Wtousj3gHbyjgjHeMM86WP77YfgABpZwEJ5CmwhQoYj",
  "key39": "5W4wTSnChz4GDtwCt44AmDjKBU4PQRUGd5aYpVVmWYB5iUd1wugWz9yARfr5kaLYqPBUoJYzMq3YZkbbjfPhe32K",
  "key40": "2iJsn7yn3aNaf3nvhnEUDEUxfWwQ1WQ1TH6dGJLYYErD43R3HCkjVsRvJKGqqEzVcGkSLNyCCsS5Eknsg491LY5g",
  "key41": "3aMGShsiNmfCV4grqLA78KWmWU7AvKaGjqqjxBLbQKfMRXcMnuWd2V2RCyPpvkkRcEtgaGDuwU39CdzGAk4LBLes",
  "key42": "4NiCQhUyGd67dLmz14uqodvua73gpE5DGyuGDBpSi8VfRChMBSjuPrh4iibNeGoqfVs3ozDNRoNC7UKRAbfcW1Ec",
  "key43": "2pT4X6LwHfeXzaKRzTNJqxHpvm5yCB4vvkL14FgDVG7m5nNuCScLH4CyFu37o386rGC3S7kJWKs8hQ9hv2birSQG",
  "key44": "5DFtftgu2wXA3Kk4kro7y5wmydqpNjZWQ6jfqqLdCBC93CbB8ymbEqCvFPCoWUgnV39NqUfkU9GJGSMgU7fEixtV",
  "key45": "2C83yyZSs88mAuVGDhYbgeSYYschqGGPVSccr1HykFnxTkRGradC2cZWadZPRhJu4moXVxhAerVSFAMVcBGKxReA",
  "key46": "pbEpN28X9MxrXJFWzVbhNdJFFNrBysMppyWPaaoXeiWiB2maCwWnWqGm6uk2QzxZ4EWkktj3j6TfJ8phmX5egk3",
  "key47": "52nPxYeQzmXVtGk8ZcvVhmxNZRSVTuLNmu5uhZpDMWDeA1rD5f5TzUMErNBZS9Q99Wy9njFVS4HznBKbJVAMZPnW",
  "key48": "4vqzov8fxoSvPLVt8ZvuChNJG2enSRyVseWZEf7pRHpF9s8PnFHr3Bfh4yPSMPbEFNSiFrEidG51cnuh7Le8R9LJ"
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
