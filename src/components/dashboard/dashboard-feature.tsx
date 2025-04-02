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
    "qojcCNewrdtX2vMX5FAgXoizesauHEHDcxjMYmQ2mdVy8rC6LAmSZF7rGpsBwdgBVEh9zZusC7VB78nGER664RC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mfDM4PnEh7vkD929KjbtKqefzaw6tdQ7fstWv5NoKcP6jLYQmNGK6wJaN9TNDdknfzRhjLwC3BzPfrChhWZ5FmP",
  "key1": "5UfXfvH1JgpCAwbBZGYLoKhxHdeZCVkgPm6zwwbsH3jAhH3YbdBnudXoNDWxxLWiSy1GmSMUtXP4MyZohQv9HRCk",
  "key2": "4hdFxzU4Cw5M4CzPewwc64hfSz2iEoHUZ8VRVSWgNUYF1A5NiGyCfi4HhtQYuk9AFRq1x7DYNtLXvV5y4wqzHizv",
  "key3": "5sV6i3V6r6hWprvRafMRApzpoJ6Tv9GAcsYv28VTVy6GdyrmAS42VNY98SK2qCVpncPf362svM8RZtQ8VqCyL9ox",
  "key4": "sY5wxJACd2C8D9pV9tM9FnpDpWrJaTX887VBYUmraQMfopfxaG6RGKy2yJpvRya3mvJiq6vSmWiZSYmj1Q4SmXf",
  "key5": "iisbjTTxoaaNUHVp6PrwYe1U4g6b3p382Y1iAvox2aCSM45S8MrH9jw8dPiezbNBCUxe9ye3XcLSx48HDPzdf6Z",
  "key6": "2fk9mnSZxWLUoMD4o3dHAEa8cYWRkUQBAjU4mToWSTXLSLgH8q3N19X8P4i61vnGj6YeBcpzeVRqP92a471KZVBb",
  "key7": "rwfU9eVkSxJvRikCXsdkHn4PFuURjq6hx3JkT8zzKm2qzJ957iRezwKUn8nLofTw3MsBrGshhGEEPPEbLSuLjM4",
  "key8": "5s9s8rQzKoKQWDNrWKhnZb98mDfx2pKKXCke8BVLV2rZu1DeMWPpC2QFjAR5F6S2xfJ8KV5yZbgJ9RGYFP4GqkeK",
  "key9": "4f1yDQQNkpWapNxGPCLpn9crtMcGMUKo7ZYMAHekr2eSKQY5j2DiKwPwQCFzWQ7gs3duxRgYC1SBjxeb6Lbf2WKn",
  "key10": "4tPwnFNp9CCWZ5oN9VAKT3Xa1mzozLKttQuhVu83mvUiMPNYTqYEmJhtmst5tPV119bQQoz5xJHrEDDWYYBhb62j",
  "key11": "33KreAHyUN4DP8VoQXfTcMZ3uXpnq8VA8pdDMXJxKaoBEDjocMK1Fk9cCHoYogV3oUKWCq6iUJxah83utjLpX7RA",
  "key12": "K3LSJhD7TtfhNC4vy82ih3fvXiLGsbpUs58tPBHeoC3R95SomCwkJQJkYiZibr26dWABMCXdVSiaLyQMKbABcwk",
  "key13": "4FqKFDt6XMaHuKTXrk2rvFSijgV1hTPVVpkYXRR2iQ7oMjGnfU2TWTLNGd9i3GzZnzddfCUZrGTT4QUYTPW6xfi3",
  "key14": "5W4aFZ8RbaWafFaernYpfqazzorHHpVmmUiwVEK8bUdYcenyAubnui7j1LMN6bvXiXjexDsHjLtsNtigvF8KGJHg",
  "key15": "37YYqCuDySM7tcDxy5nwzXgAD5983j6sdmnKVSqhubMWLeaUQRtwoSjT4mZrn7FGfAvp7Uwfr8exCfedxzPM7suQ",
  "key16": "YTiLkVfS8R4CtRmTMWi3hVXAWH9oLFzB7AdrE3aqQ9iK6CEp23eaZPtFjX9tyGemge1QXVLH6p1eDzsfxT8y3Gp",
  "key17": "5Jq4Mr7XjnhYARNqKWZzKKC1exGC3EJuUbwioDjqo7Ls4hXxXhyRwXSpVC28gzFRa1Gc8xtU47y37GARrqKmFRmu",
  "key18": "2YdUGHjHM8ZwmRCe5okhLTqi8jzg871TRNFZS2tpiHhfyyN4LHogrYW8FsS3E63KEAyYmG1RyCLd5Hnd1BFfhWQY",
  "key19": "4AWtAhAFCfZFxq7D4Q8BRsgxqLAFTRF6W7fYWdVNdN1Vb7xY3vdE4Fudq5kJrSKUztdoJWbUD8EafZTzAyrvzrE5",
  "key20": "LT3kCdXFXUHPvAvH2yCU9ERUfzJXP4g2daSJZvCvWZTdXsTqZh6WViDb9RnAKE24yuS1RN42YndYSTjZX96FUfe",
  "key21": "3ndvqVfefbKXnb7y4medEN3aJxNDuJKVE9H1L5RLoxArjGoeNHMtDEGov2sMhoBTyqnr88pKKWWyW4dQKWtdokbR",
  "key22": "2jUaEtZjzEcaZjTRmR41TjWr4fcKhvSRbbo8NS2szudSNRQcHECXxJEa8FpnYSnT7B8R1pqXpGC66g9je1Ww1yxx",
  "key23": "5VpemBy2H8yoafJcZzaJqhk7wxffaxdxYqzPJsX3QDcq4P9tG3UDvvBfPP2Ck74fwWBoN11c6HtNtqVntgV7sDf1",
  "key24": "5TKeNzFJDAV8pzKKsUDxpjbPnzRearwjxrHuNGDbDitNWR5fYaRmYrpjz5jSSkXXScteiiE1T9d4tzwXdvP3vmuB",
  "key25": "QtLXep8NaBfMZP4oEf1ep9bgxHraYUj2fdP7zrLnQEsrB3Hkr1FWW4qiqxoZurUpqRToNUBKGYLQK2XvuuUvAt2",
  "key26": "29XeqaTZnLCscMWB1y69gET8j4xYR9Voq9THWZdnHB1pi1z69kVARF4tfFwNSd5b17FcA91mJrf7D595zPe2MCWy",
  "key27": "2TvvdEX8T1miSj12YzEeV16oeHXMQPitetpsKZC2DoY2fBe5iCfxSGTQwdborfJ12oapMouAjCr4b5WVzhsWPrFC",
  "key28": "3dx6wKzEhtaQQTdYVqeFDVn3wCvkjVsRWPe43raMD2u24SxWCFmWaEspCKVyMFJVKiL5SyK7nJywS8owMyhRaTGy",
  "key29": "4rFymPPwVoUDfBuhHhNGzRVbupiQGLdKsJfPt63n1KshbNpSD1TuDuApjQj9jVHB1mmuRt457mUDwYwxYn1vqbBn",
  "key30": "3F1ubHLyR3jRiTJLCEk1H7YGqFnkXftXVRWv7YiASvMLSKRiMT3Lf6XdhwRyhgHqiKBvBWbXWZNua26SMMMNw5uT",
  "key31": "3ci53iuWuTmtQSc1GqDapPUxLFhDBpy1GtJB6SuNzRSsoR7nVCFeAGesJv2jVRvhBAPKrkXpPe7LsYHRr5M2mR8s"
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
