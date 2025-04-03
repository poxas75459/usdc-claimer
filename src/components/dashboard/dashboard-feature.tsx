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
    "2Y7XMDjSPYiwpzLzfZq3n82wmPpPnbHFAcUAvGNpcFSNUd2V7k5gv4MxRVD1wWdxvg6SS8i9nn5qetvukHdGo3hM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "beJ3nNYjDM5Ek89PWBNExm4RRwfs7qCsTbBCJjYQinGJy1RSBZzu97KgZpwSJ9VpcQ6VX4qzoziSgjzqg5FPRd4",
  "key1": "39mqu24SM5NzcBWXYbB5vn8vUa3wLUecS2md2Pj32whHEEVcagZbpsa3wnheJEuorDrhCrWRpoTayRRgsbBRS1Jy",
  "key2": "3HAjepUNfcsic7QWnVs1Y7XZuWJA35tzJt7BTNzx7kKhvpHMxfi6rK899awSqNiteE3KvCcGKjQxCkQWLjxUjHxc",
  "key3": "3P7jdfJcSFb31wFb5B5VhdCrKxKkRGvwWXxGKuFKCc3Cqr3Vu62T57AZnma1eDDFoomE84PYEqzSQD5N3AMN5sPT",
  "key4": "5siThgKmJA2SzRiB5aLrQXkES4JjEA5pCaZTPKXwrGqEf582Ho44Vaa6yHtmSMhcYB9WiCSTDZ3iw2aqmmsBowDE",
  "key5": "2HDmhDfTX1zArpc5jyA4gnyppEDkQnjAw4kmSXHnk1PmzvJabL6Tfy7kYV3U12LqgSDRqqKnL3KhHwTfNkwjfQAr",
  "key6": "5eCCCvHocThaLn7Z6QHGMnT3F1qfRXmRh4SopmgykoiT3K9aaBDzpeput8tXJcSSFQQxyqQsRnBYmf4VhqFRQc1Y",
  "key7": "57VranPRd3YJVvjqtBy2e3jSnJim4m4GcNhJkmwUWHzST4957dwrfvHLyV2kiwC1rRyR2LZzJBxM6AydsLJD5mdn",
  "key8": "21rnRd4uzSB2kPqoBCuHqKWqpNigHjRUZ3WrB2qFhhqeSwhWZvdcKBcjM6kDPPUJd7oT9cAdF4Uyb6VFGqe2gD84",
  "key9": "5N3w22beKAC3G3HPLKHBiQtXPP5BN15eTUpYDuAeTrbtmoN1D4KTxtfH4hReFkdzF4k5oCG4MmUUyhCtM4S9cxmG",
  "key10": "4F4MqBJEgpoRyxrvymmMKUqc9DVwneFAbS7zZeUaMYBcwDN9brADCPhpme4mnRLXYHqsHWcMNr1y5w9tpGuaX5J8",
  "key11": "2EDU1z1zm715pFNwsTUKuVFZUJbQib5ndtQCBbrJ8pXAYche5uMEYfL4LEinzJ4SkL3YutYSRCF2GtfcqDUPGdED",
  "key12": "65QREAYGYaAwcmSDVAjRWSPSq6S3Q6SKEYvMQ48BNsWks5xDntjU8CYDe9buk4a1NoozN5h5Gs2AzsPpnQxuHRf3",
  "key13": "26Pz4vBhsDy2s1M4Q37cNpt77kDRCRwYSt8CWu7nYTU6AEXYvyKcHTMJMfFeY91sCwzEiDX1z7uhYDZR8bE9MsvD",
  "key14": "5wKoUPPRqQD6s6TzKLiWJ4U1pJhKvHdajAmKNUBow3gM2oELr7QKaKrX5ivcPsuu1UrhZyCTSxKwvPZweqLCYyVm",
  "key15": "wiNrtXK1m4jKJ2C3tYTT3mW8t42dpH6eVyDKXcZFVYrZ4m7EE7Fi8cyPVPJZBbMqndtA55BHeUaXocPiz4zHrQj",
  "key16": "5KEYDwgfjZDAb8GM8BZWtrPk6R1ThNgbG3B3v24y27KgEjQW3M6xuW2Pua5srvAZ2GeLWWmmr1kP31VqMC6MDYhE",
  "key17": "2rnTc3R3DSJ9bkYbpT2t9fxSEPEFtpCxMArnzUEwGgWaafgQ9V3bh6WrvjFybyoYfpSPdXKqpcAauedmXNJiubbz",
  "key18": "5rzqyv2mDgqtAKKBQ37szHrZuysTRvDSc6sSdeQsBNckMr9SH95xBv2sjdSLgC5Rft8UgGNFsh5jxE5jUrfeADNp",
  "key19": "2wVk7Y6yvrtSMrNKJyHT8tt7sAHUhGqYWmeEp9sqbdhAQC3FWo4gDb4Hch5hxZGSffJgzgvsbUfFasNjd2XzBRKf",
  "key20": "2SmyBuFM4HxXoDfUBYahorEyaS2DKPA4PfhGWh9omvjNSu5iT3Mt1kSbuQMVCJ1BdqdNsAnHpyJVCY8hcHc3BJoU",
  "key21": "5GgbqPVtad5Vq7afZhMA65FVPay3MSjg9dgLZE8dscVrcptSuQycraSWxE7A2EEQ6ixtq9PjRGSy6eGb8RyDM9cy",
  "key22": "4jmtPVmHtmtc7wAGgkeVJzjp6FbRJFSmsSAFbEf9p9kWvv9btgFf79QDcrmrWk3q4YmhqbjQpW5K5dWUA2SvqXf2",
  "key23": "tpwZuqDWu3247M5Dpw2tB7DfggP21cbDUT47pf8TzVqCVxqJsoSwRsifhcm8Spm8LxCWridyPtTq5QKyoqgQQTe",
  "key24": "2TSdqMdR69nb5LvVzD5n7JtVVetT6Kz6Ej17iryH6osJoM7iEHCj1HHxi8mktCNK4qRE1w53ADNkhTfPuxEuDdTe",
  "key25": "5QTw51QqhHcb1LsXYnv1x8WnPWaYCB2PGgbdQaj4vDyyoUXfZVdWSk5ur2itiKGqE8rqEAG3mvBnhWadti67EQHd",
  "key26": "Q5nQVBrAih6JvwpFy7LFpWxb7sqtufU24DyVwbPwUqQ8iKSFuR9KZ3xLLGHYQZG1bHwGoR4itmuDmVpFi45mRbZ"
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
