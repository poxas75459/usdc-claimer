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
    "31JCQ35CDHzausfGeuFvtWCVkBC8SSFA1CxD5UwAk2QXABozLo8mbUEEtNWbtq6wf3yVDfM1jiGLg66FMzwy2CaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SNn3WqpjCsSfn951ErHwedeVGwz4zui9RcsQ96MvhZzfB4wtzUgGeZ67yh6Y4Up7NcCDEUAKWezLNrkGbo6T2Yi",
  "key1": "jNw9kycVYmGh97DNfu6DWYTLDHmphAi9WztZtdyj4VD1eAoY2UFWULqLLK5S2LwHxnBAa1NHrEYvNTaNe1yFYdb",
  "key2": "2ieEongzQthAMwjaUdu5JDwRMikD6tazSzdc34sARPY7fSh17Gt27k43cVYR6q78sugbdxCYKo8Lox5tgpC6mKxp",
  "key3": "467p1jK7rCkwGt1xVcst1BGE62pVwDhsBXiNpdaE4XCJKLafjdnL23evLyfPTPQBcsErK2sD75WazeyPyji2vC1y",
  "key4": "3KiLdYtMBrizMJbWYmJHqSiGn5TXs9SP4gZ5jKoCogvf2ocsXz6gHte6zV5tYyNqzs1nFaBeRs6S6CbQkXdX8u7s",
  "key5": "4esegHTqBr4865MG6L2CXQq2LYLQNgNjMrAZQZ92PB66pQ6j4VqYtqfJt1vH6qGXoDrPygCjmSyo8MPRvmNWWQAx",
  "key6": "5PKuB7qLURv7um7uCkz65wBTH7UwSNSxpPMhsnFa2PJ5xWkgoTC8tjx2qkVFHPUrKoQvxKWNaEGwNW6vbEyrk3YP",
  "key7": "2VFJainqNpGWPeWjYdjF6visNUAaArj53DsZGJ9BLhiB8gJ9NSLBRMcUP68VKhau8GNsH7fy5PEfgvxVnGv5N8n3",
  "key8": "9rKEyvbrsKXxjFhCzRr1FzuYXXnWJzpQyAnyiivdj918XXkZgJKsvcTdjAwUbhRPvjRNvRZcVgz36p4yEac3mhB",
  "key9": "3iXjfhcXuktXHrwsEfS5xnR2vAJD1whatz2K65bKgyTmmszeF2PbsyJjM9n66k6Pqc5SavWHoQvPvmYCQxWXgNPx",
  "key10": "5Sdc2sfh9LgfKodpLVnoSBwpLQY7USYYMvLjH9hAhxBAUhyA7oXBYHy2iUbSQDNjwrcjmDZM5jwUuKYcJ4pNZMZ6",
  "key11": "s3sAG7SYYszWgtHTphmGdZepJrVFvAuAkMapwPE32WjyNnhELo87aMr1bCAa1Xjuvt1aeVc6xp2YJpc94or9bK1",
  "key12": "5HHaLkfJzZ1fHmM67vkMvpLRPPAU7sZkFEeBD7ENXrLavKuHt2nreVyXfU1EUy2BSDVeWxAW9rfVXFLMxQQmHMEo",
  "key13": "fpsuox7xA998RYKAfYJG7gFb4ph3bhs6ATpEYXHARTYni3mYVCCUdavi8d88jkw26rMrCJcz4krbUUqBb3drh31",
  "key14": "3eFkQ9i9eSwcQxCdp9Jz1DujGy4zY7NdUSK3AaDVuLWzFmFSdzBzDkoniihRphvFWLQ53uDRcvM1NAT8jkAYZW5k",
  "key15": "3QFz9VKLnR6qnY6Z75GLwiggkxBRia8XkKSaa35FoJqiHwvBP2kQexZ7riLbHUQtao5S5EFGvUWqGYMTTtWAEjLf",
  "key16": "479rzW67zZJrpGJQHgoiXkwdA8bWq9SZkDuhNd9TRkSHDXhPqR8DowXeowmH8eBogcNwPp2oESU7PnGaih9eeMNn",
  "key17": "4m2VBertBwdFr9EhBA6k6pEvZJhBMwEVGh1XWnyoaiqrX6UDxUKBMFrfZx8u16m3UJLRCuvuacWgeMq3M4tZah9S",
  "key18": "2V2AFFeVAqNe3pJFp5kdo1orHVEiXvmxKPDSyN7LixMRTLMoKQRSrYeb8rZGF3Fxg7CLGRnhTvG3patdRaaXeGph",
  "key19": "21VkdV9QjzvgJNxYB31EGuF4WpzZrn6uL5c5nub3oYcnz25VuJgdvkittd3gF3YbU1Tmd5R85MnuQybH32NP9x3c",
  "key20": "2yeWEmmv9i8Ygxu1ysktFgcGq9qZt2n2hBWw4PWLXDzfcYyZDtPhkyMa9M4VeqEZrijBjiLCNkoYkNDh2erVs8dy",
  "key21": "3S8JJ9jWJqhBzyGyLhvCEh2ViAyU5NvdYGnATxua34LQQfdJ4jRJF4v6NoqA4LRz7seHJ7QRcKgm5tiAHCmj1tzd",
  "key22": "5TPC55RzcDxv9kBs4ypALmcfmAvU9P7q8FPvZiGQoXZCrFktTQKQgDPd3BkjvqpPantBroXBYEmfeePMgDRpjjyz",
  "key23": "5aaCLPdtJGPzGinSJmB6n6LmPcNMyo9hvJF6Go519P8Jr1fscNdjBejV59ocXYYgCjyFPubeVekzADz1pYtFnNZD",
  "key24": "4Zjwy3BaGxvBV46kopJLFF8BhGRkNSo34LcX6qrRtAZ1NVv2zWtpANav6pd4jER7tex2r4HmcFV9qtz9EiU3KJww",
  "key25": "4tbtV5cpDHmQJju3wAVm6RBboi4RRFcmjHsibRudgK9ogEbjVbcXHV1cCGgpcAC5DN1XUMcMz45CUV3GcmRt5heA",
  "key26": "5M6HNoKXxaAcFYfhrXYD2muve7nk8MAtqtc2KaLrToMXrV7p98XGGaGHqLNNbXaxLkbuveZmwn38ouXrT7qaBaeK",
  "key27": "39W7mzx9szBcqLgYnYa6SWyRv5sLicSjZu68GZBExQeexhRe6xJL96YsyqSCRpBDFBmy7Zg2kYYuEHLaYBdT2sTp",
  "key28": "5jVHVtmCiNHnAr3ssHJLJ35Wuxs39bzww8yF4ebcWesFF2xH5dpHuJ2ky6aXMHAscitq1KHWnfTpPgpRdb3AyaLU",
  "key29": "UgydDqsvFMF85v9RJhUvzRCoXtUfJ68GwTibZ2ucTaNgBdGRCuoK4UkAnE4jZau7naPtcVKH1Svmwu9jwS17Eio",
  "key30": "3bhRk7wvCLjyVb1F1uXp3WZ2zfcHD5qAMk27VmxYfAjFkedF3wajYd2uxEuoWkvFNgbFMyd5iN2YicFdpKqp9NuC",
  "key31": "5y3mhvqwXS6QiQTBPBAGRwVutaAWDFLQ8dXxK5sbGScCnf2uMTbASkcWAu4dZ8F1p8EUouJ8GLXnKnnRDZ7yi4Wf",
  "key32": "3Gv5ksxrAtuc4Z9rgocubP5gNwZWV3aJEauQuj3SfV54dEpfRFsMjNeeDYSvLhHXe3xZQ8CTPN1yipZMpdzSUbs6",
  "key33": "3zHsjd9i86yVnj19EvsL8a5gTSJh534xUjWDyEzsBKqF5JpqXGj21ydWxz13T1PxMv8jPoF6iHDMM3zEjMR5iPYB",
  "key34": "4YWBP1DNkgN4w6HQTfHWoRiR53386TpdfnUWuDYsoXasXpw8qsteKSspWiVzAk6MdrREbkcSDVxYbRhFZcFFss4n",
  "key35": "2f2TievkTUfBPZNEtYyZrPEkuGjKDswRMYujzPejc5PbaQWrPA9vZaX5zo2PYnLt3fCZqZhZfNVmtVchqYGzDb9z",
  "key36": "2Qg4dzqvUsksyCCr9KW2GQS9BSXjCVdmtfessSfi5euGkCnc46Cw1bWBSjTfjHjUG23BpjnBDry4QUf64QMrLzfx",
  "key37": "3p8d2bAM65QbUV4aCAJN66fEkD2z7dRRERVmNwAeBCjo17BRqN4v7QmwbEa3mcCh7LFN6vqoQMEWExFm3arZRyH7",
  "key38": "1AE9katkVUt8hyApquyPMMTLwdjMeCvubL1iaUsfv8y5EpBkpymTBF2vfQDJRdHFeCUmZ8sUKZurq5zzM1eKHYw",
  "key39": "4UBDeZdze9FMnSd3bE2qeQHz78WRuG4hQ6RnEiBenQZSZvQbrzwGLs8brdbNajsJ71TeU4HtxQ2tSXwiUyHgiPz7"
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
