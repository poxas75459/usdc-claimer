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
    "58LxKC1tEWoH4BcMfpPUavmH2JBwtstuXMdw8LkbwAWpmRjCQj3y3aR2hZMTr6cAyYyMVGG52Uoh4ZuLEi4dECuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cFforpBwTUNcYmGy67yG5QqeYMJw7PysSVnvojSSnDHk7YPAavLt5WwgMVn1BNCRskMK7NtPvrDzVSN5tgUeQis",
  "key1": "5qErL5ZPgcDP4t8631F9MK9LVq5aJz9HTTTWuAPQnBR9782azHwh88gDhyjbor27Ez83pJBrYrN5m9XP4xZTDLV2",
  "key2": "3FZVS2tP8YinDSVcw41ggLs5VMeXaYS5aWgRi9i7CbJbwKHamiXGeES8Xy8N7vxUrScouLpbUgwQAzwLvk2zQiRC",
  "key3": "4yDxFpADucmZsKdubXD6V52RjyRMdcrdyJawUmfbwaWGARmKpe3k2KRVTMTWgBjPAAq24C7hnJPZPb2kxh75MMiA",
  "key4": "5hKFHzCDQNh6bhaExoyDFQymKGNjTJN9MBdTV6qeaAMfcnHT26bzoPkgdW1YShL4ZcatHDdpz149Cp7eSs9DqRUh",
  "key5": "4dotCYqKDziVvjDiKsJYNCyLd7zrzBhPfforPiynMXxcvKhLQG2xAaypYk7VtUxEZkzDNrNZgKw7fk8SmxjDSxX5",
  "key6": "54FDmxpmACq3aR1Vg384W5CCq4cg158tLJ7tP3VPkgCdVPAtSVVGeXYx9iKJp6rm776BaSGDmoKBkw5SDEJ36z8k",
  "key7": "2rAMKUzDXXoEH2k9RtVcTJLjnEDBCaTdewiiPEAQNq7jp4k6GLLLekvKPef5TxarRTqJCg8zZzV935LakXHtUWUh",
  "key8": "45foo1ZvVM1KAuqpumbvPRa1mMF87UZrzTQSm5AJqWFHfuvYs8aMZS3S3wWmcH2Qwr8qJNbkcZNseyF4NYCvjjbF",
  "key9": "5j237pBpY63LEmFg8HCS86jeJ4t1qK6UB5ALwAnzDyJEdmUJJvJNjcWkxDUTdqRKX3UrnqhNqvQVMwBQAoFhoCFp",
  "key10": "5Sv2p33MKadCspknrohQLWjMUEQw9oPaQd7Wefmt1oyavoAFDNEukxDd8kwgdVmquadcWbBjKo1hPQfryuxDvkx4",
  "key11": "65LktSXzqwgahVB1dHJo9WaWr7XsJim6Fjcro8KRFCBQdsr89fRSToCSsNTA3R3sipKK8rADkjJ2rJ5mb8FV7sTW",
  "key12": "65b5UVsypyjwLY77mKhzxUt7xQuhMAQKWHFa7tK1GKAB2RyhwuBkeScyFi53GCFdfAuy5oYYuYnVSZVbGVebWk31",
  "key13": "5gA4emJiPZhZz3RsHZn3seNAbrAW5dmKtWJn5PsSZLbTMnYSPnUPPBV4Vgp8oy82vQF7DigPgEnY7z3nRHSwy8yr",
  "key14": "3YgxXy7XErR1Mf6mZ4XZthhFWMshAGo2nptg3w7X6Xz6myjaNRopLYTGX9LekE5necLdfJkYf55PX8W7jTBuVeAu",
  "key15": "4hMbCJk6bnSdWX54sKU4UF7aj4DQ6ytHZCPYuXBKSFTdZJ5fFqVMb8FADQrHCoPSnZktq8wFfoDveJcE618bYEx9",
  "key16": "5gN2r94P19YKaEzRuyX8DBoefndjFpFuUhFP9AAAge2sm2FsSsFZZbAFAsbwLGTQZYXCpuaWa9kq1NgkmThCXRLz",
  "key17": "3QWF5Q5VJPjZWhLJKcrdEaAUghJ2E1V3oUgkpfbB4NVhKTLpBQxYKyupQLG4yEuncXbUHyZnCojGPo1RZ2qFJvtQ",
  "key18": "5z3mvBJt9jtE7kP9dhrcYvqD4zo7M4PWcCmGRABfENr6XwbA2UX74qAttYhhcLdFhUvmPcnWxFidSk4WV5wiHCQP",
  "key19": "2Lx4RhhYqbbsJY63CkvzQWYPQMsbkTKdY2zneWPTURSeLjjfucgn4rRzN3tmhDjB6YcKA1a6UYLkAidpFYhiDwFR",
  "key20": "5gbYoMGLXs4eytE3NCucBLjxS6rTiaPbAtANhy1QWeW2NeYb4RSuCRMnmftDrh9CmstkWQpgL3hXChRVRPNPoP3T",
  "key21": "26jgWEMbqHeidrR9xaddj6iXUESHXksVE1c967AueaMKLbDGnFA5HTN9ETVsAGRK6kPeKRtHqNpyJxdefkNDjXb5",
  "key22": "kNaxsKKS6W8jb2uhbTFKrC2fwShewwPUWNep1FMQBWfKWZ42QesaR8vA7RyE32Z8StxEqqpq6ojEpkF8UmcNUs9",
  "key23": "23Ki1ELHFEoqmXgcbhbvhSnqXHJcjLR19qUqzxneSc8dCany7ktmM6PR3RMH7LE7Hn9a3cHVVM8JoUmFBgHzLAM9",
  "key24": "3KV2BvUkkDkvHdZwyYg37E7vBKKKjzP1SnkuAMnrfpDKDEsYtPAGLFSodSkdiixASJEu7gKKv2CSqXkg8mzwYJcM",
  "key25": "jgmrYx3WT6s5pXVUkvh77WxRTgxfFx2FFdxAnUjopjPPdBNmiQtTDSbA8rb3GUQhXUEPB6sb8CZfJTJoA7bRbmD",
  "key26": "2SiH39tcRSeMWMvELNa9eUkNTvJ5FGMnPpXGSJbDhjPmVfMpDYBuPqfJVc1bErfeNCgi9xiNK3eNwLnTYRfHXNwJ",
  "key27": "26AJH4cLsUDbBAQmoQ8DQFQVnXRXNrBiZZ2WryaSYAhBaoRD2MQph1Zi6k87XJDy7gN5xzVrhcvzsgoBpFCKLBwr",
  "key28": "XbubsuarMr5nWpDwa8tCwX9LfvdtiWcqdnxMNgcWQiaG4Afjzj5SZYAG9ZM9xSKrxVvGvHLQuWv6AG4eFD8NFd5",
  "key29": "5cnYKjtV2t9ipnHetDHyUs3BQxmiBqNoDD39fF4cT4yM3YuiqmyMEsKKFhTyZKcvfxcBvzeZY6pwxXSRXd5mLHaX",
  "key30": "3G9Ed63YrGefxPJ6PqMvnnsRHbMUidXoEnENduXZrKRvXMMrUkTrFRbWN247FmHYfgU4wxrLrUS452aqb1Q4K8T8",
  "key31": "c3DXkBpHZgG41nNjZg4neFrwG5RyMCKGbBpmQ61NvhZqp6r9SFL4hwq81zQqTkWjbMRD25EMg1QgAjF4oqcP5Pm",
  "key32": "5aag8WHrYSN8vuR6D5APiZnXy8psj9xyXkCJTYraWPZjqmjTMZ8cLiQ43xLVtbLh37wTMWB34eG9rpkW1LjTP7Hc",
  "key33": "5NyQS9xypErWXrE5BRiSHfdxLY9ytnsrbf2a2SMDLm5EMkgTjxv7jDuEMP1wthCjJHDL5kPWHCiWV4m6W4JUWwt8",
  "key34": "3LxS4qA2aXxHYgV1wa7UcVP9vD24Zyi81Fp8Tm7txvHuAoyeResg4aMeaR1DZ4iUpknRYaFtazhcFoxwbNknSery",
  "key35": "5xvbYA7k8hgfvc5csdGQzG5yqMDPR9GZv4wbthrdw5CifzXJKYGgchAWBdh8KNrrw4D49WtiwMeh7q16zyfZ1tah",
  "key36": "3C5DM6R5M1KoDb8MhE6nouFXg2umuud88qfpD6UoZVLKZRTPbHBN1visQwsCAcfGKii8JQ4yGMpvEqFudJrVMDHy",
  "key37": "2TYJtR5CPDRefPRsfnXAgHfNP8JLtFau8bW7jgwtPFsGDW8vyYUh5suAy52TFTYtmPEgUayqreZW8HQmDRQAg9SN",
  "key38": "TbwcsrczZk1qBtmhjzrNQmsQtTFJcw8yqNQ9nj7FDmdPYiEDUmLrGneDdwhXeFsgtmNBAfnXycDgBqSv2FcDuPE",
  "key39": "2Baxu5o3BTVZPidqzHvD8dNfGYbmHDDQ5qQwsftASFApgpnGTJ91VPW5NJ48WGB6r5coGT9BLbo1xT6mHqQF2kTU",
  "key40": "3tx2yKkRW9bsJ3MU8Zx7afAwANko3Lw9XDeoEyRjqpC87xG6845H7m5PSvtBk8vkmUZRbNCYNFp6YbHsFFdnCTVD",
  "key41": "5VHmVrMHFmMFdJ6FMh4E95nCAxzn1YFNve3dF8ULCjaQugri26NJqVHyPByoEMn6YWgVRFBzQUph3WnoXr7kd1e1"
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
