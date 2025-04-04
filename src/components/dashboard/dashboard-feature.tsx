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
    "3ogqfNqPBgbHKD1Eu4MgSt9D6SSWJ2kGhJb66bFUqJVJ3G7gAmMU4wkU8SztSiaZFAJbTKHkWft1pdymQLsdhdjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m9XNcKzBn13EybDvhjXLRUtMPuQBJ8urAZn9smXXAhLEuJUBsemTu1eLhQndaCcnZSqrKZkMMeG9dYX7ZbuZcs4",
  "key1": "3v5rkzqFQZ1d7SAPiHi3sywagAWm7owDvyhX13DbPD8kXN7qaxAH2yozT76uLmdUctDPAkVFgNfxfWmYZ6v2tuXS",
  "key2": "2smVmjjYzTquptYJNjYQd7oi6SMZ2cWB7PLk5wvosMd3Px8vViJ5nWMrWnyFzS6Jpu2Jxe9Rnp3coMjW6CxTjvme",
  "key3": "263477dm32iCgigAds22tGutozuNC2dWmZdpMSYX8SgAApYRjXXxyaXPtwJ5VxavHF3s5hm3rdAdGgEZ1hB11zkK",
  "key4": "3A5E5UMbgU3Fayn1LRqGSG9CPLDLMEixYuQKWiMzQKbEnZLXxfKZKAg796TghBNEmNq8C9NSuG81RPqKVxmmNpe5",
  "key5": "2SKMbq6d4ZBiiTpkgiSxhR8pyiv7ZP47BjeV6qFNE3gbbfCfxpGonCEsw1gcLzttjpbXEKiw5CHhy3pmzr9TtJni",
  "key6": "KsyLRNaeY7mEFZ8BMoDkEswQPD4jKpho5648LTuoUtLN4PcZgrR3cLKnkFYimZowcudwVvKxU4VtioJyX1bVh9d",
  "key7": "jntnUZwM5CFmoZUWc3p91L6bL9GieQHsrRJBe5a47v3QmieHQMdHVRNYcU36Q86CGhGZzVVgfczRru373Z8C1Lz",
  "key8": "fK4vX9oFNdbRGnhL2e6vJVeJwdUDoaTRAXixqE7fsywe5oXWQx39un6wDRD94o7yPYYGXcxegWytHMDJUQ3QbNL",
  "key9": "5PK76wQRCDB1ufnmiH4kAeSzeH5JichtVjY7inEGecxuuyapECVgNdnWbPjN9sa7cexSQy1EEa2Qiu7nTzS1e384",
  "key10": "2ej187TY5TPr9xgXuxMSoezvamwJ7tA9i991cUtKdmGsZLHFg3DaLLjL9hHQZNNbvyVZQw27ufjn8nTQ1F4N76L8",
  "key11": "4MV2NyB7JWSdguxaFMNuMcMHFYeE5ixkW4MQPjBF6jobTip3Tss3EbV6WsuhJog5xBcYX6BiANevtxofzogoxw58",
  "key12": "5H1RrrHfuxbUJyLcxGDkjeNBQBtcNoHKrCWpuizAWw8NCGxBPTSoMgeYNW56kh8XkLEmKhH4VCYir4DRoyUbfpUa",
  "key13": "2W8C79AZM8D7VaU2tdXHzz6KNBPWM2KsxWqWLqv92TFj9W2RM2nPLQMCN9T5sEzDwSj1SoS2NhWNGQo345ksTzFq",
  "key14": "4SYKQTuXsLougbFfzcmzpTTxu5CtEPZfAFAinFEUpLBY96B4vKY2kVob7Mc76GtpfQ5e6FxbPcKe5vj1j2M1Lmte",
  "key15": "TSd4s46Hqt9af8RpZXKTdXuE83sUxRtLGgA97nmn9He1qVyDLvPFG6sJE4aRYEPy2Gy1yHoNUhLdYV2hhHyV1Wj",
  "key16": "4KFhV1Gqa7H2HNvYcupU3fiRE1HsAxu1sHZpL7zt625SLaRDxS6osi6WPx6ygaBuwJsfK9uLHzKuTD33ezBWCZeF",
  "key17": "2Waxp6ZE5y2TZaNQStqVgXp53HSL7neucf3TB9Hd11EGHH1JUE1XeUnDNSev3MMStfVdSQKP6FChN1JRKAmT99Xk",
  "key18": "2RCovTx1uTxn1qkRdTvxPTLuCy46P4xcDtUHcAiYPksEVrJbh97hMGt2hQTSyGdQxk1KZT8pifn1JZpp1YPkVNVE",
  "key19": "41vPLBTigACehfnLrzhoN6FKRuihrhAF1gV15uLFizi8bwZSTtyWhkceTsruM6sHEaFXBaLz1ghMeS82zNJb6gF9",
  "key20": "2QQYqbMQi2RxdQ8RzGS4BoLG68YH8wDg8hgAinYxAaxdnivntwYSWQ4bmrjdiFTF6yhGRhzv4VVgmnbt2i173bwZ",
  "key21": "4tP4B592fHfmnZqy8vtFTzic3PWEpgGbPvx2tuVPVmMhvVDEgPLeM6k1J8GJizpCtnJTr96x1J4gEttnYHmnn1AE",
  "key22": "4LWn6iQadeZNNvc63Pyn4oLWQSCTRjmZQ3xC8FGsyiSTW7SGKzFnb1BhxoaRJ9H2umdpt6F91hM9ScEDZUofT5uw",
  "key23": "5pUa8gbnQn4jVug7BoWpvZYZJLgCavLKZz6KSBgWUautUUdpGuBZB9zsnJ9BJ1ciFu7pX7a81qgf8xc6teFY6nbw",
  "key24": "5iEbhjtebhfGbypFFZaeNankdonqssfGrxegLuDhukxW28YXoVf2ffp68NtzvvZyNqfoxF1LyG2AxNGs2JjD1Tbc",
  "key25": "5zt7R1WqBqf31D6CEiiySAqS1MZrkyM7AnBNtMs8Lyu1DCoR9YGxbYW8b8aMNBjmjpaXCnmWDaUwCysM4hAzVW52",
  "key26": "5cbRcnt1YhDfkvKTCVNT8xtraYsEgYuYGinzfeCZpSFAZkd4jvVrcGAGURz3x71NdWuGDHXBvJyo2K8J3a5QZjHh",
  "key27": "e1nbjc82eZorZVWJkGUwkaLhFvnnmVXFqQEtWQ9S8BXeTg8h5zqb8ek5EMU7zBNMtyAaHSPVm4U5RPxQTccKLiR",
  "key28": "4Th9p8zSXja2RxfLDjr6ncup72pEpnqBbQq5GTg8ty5FMKGN7KMCzEPTZqYX3hhocPmP6AkAvrNdkKWGd4M6jA7d",
  "key29": "3CAT35f4G7Lwmr93sbGRSZHdFQvMETKLwNuokDeE9xPFJ23DKRgyqWw9ekmeLF3DzD8Q2BNLowoDbffmmFymCppF",
  "key30": "3Ss5vNvRgmLBA9ePRH9qS1y66fnvvHmxoiZEeoxuU9HDEKTqH3ckz4SaAui2piQmVjxBWSee251BMzxfQMrBKc7E",
  "key31": "5uzoFx2iojmdVJv99LBnDiL73cHPBK6pJZPrZVrGfCbX8uzpLp1MZcSRaccQ9FQtsUWt55huduCVCqRHHgEgwnLJ",
  "key32": "4GZS52qfhnz1UPndY5m9aqkLocQv4a6m94ouKw94VSoYLWPUPL7XBPYqj2sUaHUKDrg7peKKC33pUL6Ko95dzaP3",
  "key33": "mhhobWukVRyQGpfJnUugCHd3FFNPtAgJGHdVHK7B7F1qRZzfycHWAfRHnyCjjFdXyUmQpmREfzQNbH3YMqejZFv",
  "key34": "2cosY9DYXhEgdPExURssnHyQ8y2AQCcs674Tvm2EhmPak1HLZiESu7FtTsGvFFoQNHAbtwwZCQQrgjSQt7HJjSeX",
  "key35": "2bkikmuz3u6vYkimVE1Wzti9KmQfakpxdajN4KmZQL5zAjwvTTniqeLrZGuiC95fKpoxsTajBK9Fqtn8H3rmaHuJ"
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
