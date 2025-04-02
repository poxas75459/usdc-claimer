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
    "3xjkf7j3vf5HQt7JuosUAGMpqZA2CBTkzkbRX4Dsz585UZKFJjQcVwt8MAEKmMNC5PmNhZHe2VKP8VLtZXK38nDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gwhe3fJUwJpKe3ErTGMYLhJgonVwhA77ictMoVE8nFRqaC32yKmkpxNcDrs5Usu2eGkoYPF67t72979M1B48mvX",
  "key1": "4psVW9igeSMYV1eeQ7Y1JdePam6H1LJx4o791oGuvMdc2pcNpjNHZdxtS8GeSiaHubtVxkEDqcbRMkS89fvpadPe",
  "key2": "5G9qRvssZ8RgC7exW8bFhoxeaJxJDkqxEczRVsxK8a4VNi8Vzx1CT3cnRFzkFfgy7iPR9U5wZD3qJUoTPauDgqxd",
  "key3": "3XFH2p6DL9rAs3GXLVaqLyeTdUakatpNk7UQkZH29jqkkyZi4nQpWvPwT9euMc9na83GLup7vA73iS2urU8k5oNe",
  "key4": "31QUoKxNkJEpUS9VUtgNRtG6J5zsxf5zLspNn6dmX1Dr2WDyAujqkcZqn2skqAAroX8zqKt3iiGUAAgy3bibYcpj",
  "key5": "22mVNGMg1yx237TF6pSTTCAdDYnvrTuVigdEFTWRwwo7xcig9LNXKnqyeP3H3Ny7NHy6Ga7i1VCq1Uc7pDMrEwSF",
  "key6": "4Ajwuu1WhPZ5hm3HsbgM2ccvcNfS5NEbqZEbT3orA2Wb42ov3hh3YqN7ssxbZDWg73xvXp3pMGTtDxexHjL4zfwT",
  "key7": "2qAyUrZU7pyKuijMZ3cSg4vbbqsBaKYnkqynSCb5B8dUpWBoyL1mrTnStA1Wcojq4aoxsMcX7YPKgJEvipYDou3",
  "key8": "PXd71dEANH1twuzFMjgj3NvyDGaYQp2b88YQi6h1Vie1Ci2bf76VZGKxvAxDppbFX6WmcfaQhtjpsyPFST2H4mN",
  "key9": "3pX5Q3a3gYMnGmTnaCRhL3EHmrEoQXMt59kvDN8LPnbzMaohvVUKQrH9p93LpcJZthAGDkFynUe9xdipyivAWScs",
  "key10": "21ngyCYhDfBjDxLtH4kxNkJdjUAn2uBMsHMYmDHcNdrv3c4iur2FjhxcG5TvBM8zDqPebuANvYmhqvWFCgzThioD",
  "key11": "2i5Za3o6mCfRD5euqWuT5BCbzHQfW8rDQ6z4amRe6PeAcAE6H5BRiPvNza4uziRM4UsPeq58LxjzDfajNtTYrDff",
  "key12": "2cMEnF8LJ9sG9LBYNDPkhGymbQXZaGE7vPzjDbJaxSwJ1859FzF8c59AcZTFB7jvHvavSdo3pXb7vFtZLMkDywTT",
  "key13": "5DcjqojuCViBCr2eTmiJDiVuAzpkeeiHoLKbW9gcsbeCHqt3R6JppEvhYpTFpVxBUwqG4F3vjhnHz41KRRNHpV6E",
  "key14": "2xerw5a18djYo6KHHwdxCXMt5DtYTuSC12CNJeueWF57ukpp7sPCd5cLRMdKkgpU4R7Rqvz1acHtvjbfY97biwGK",
  "key15": "2Mp7xubDzViRd7QuPt935PwenAwKkMwomEExDjyV2XxBeEpQKTXCWHaib2xHfSMQZf4dZ2h6YN9rStE8ngLSp16R",
  "key16": "5G7xaKhVAgX6M5oJiSWZo4w9gTgVQVrpDWgypcSzY5ZEc2gHRqjvjAHnxKRPqvBG4FJiBLjkAhHHgCd2tEi5UMMA",
  "key17": "55xp3CUnenpojZEG7PnJGs1XLAwzAV41smtdBt9r3TCishVn41v4PCiAST6zXymCjPPrEwbH6xoCUBqzL2cuNE6Y",
  "key18": "4H5PYYz4No2naUhqZqmXNJt7d5imSxvFbcGSeRd9S1jEWE27opxZ7PPxQe1P8fsMWtGFeXTevSv3P7xvVwbzao9C",
  "key19": "xxakWDjr8WU134v1QgSssFaMkZMGSfDTkxHrA57Ur7SaBzd5A6kKVZNU3WrAAoihx3JX5QA8UeUqmwrmGe27Cf8",
  "key20": "3F3W92Xnt51GdXXC3NaFshDXhesEnLgQq9k2stVxkgcvmDjYMtwmbdZJhE4kPPC4Frf95YkU41vsXZrR5y8ixuxL",
  "key21": "5YQRtrMCweikSSatasZZpDRbKRGG6gqWvZcHrD3H9DQ2qcq3rjnJw6PGMYoR6k67aoHazUh3Tmq9Cn2JnUPWcTux",
  "key22": "4Mj4szRaCaCPQjmZhJdRPDMAA6qqP1Vjc34xTjuorgWKZ1McmpL3qiRfePMAVrX1seD1k2zg2AXKPim4TMto8Eq6",
  "key23": "3Si2mMaW41NxTmgJL4xThRUEgLtWxNovuCiqVzg82KotWrJNkcKccwo9Cs3wnHDQhbELHMejwbki96w7CQ8urxLM",
  "key24": "5LqoMRjhjyXMtQcLpMDWEpz7kKf5t3yeahmGzmAeRhrK5hPmTDt2uNxVTLyg8P8wWZqxokg6Hwgnk2RsU4ZNtXx3",
  "key25": "2roeWda7MeShRfAPn93GVKTnzt1EVR8kcdPHUfuK9Kqi4URbgcrhgQhSU1cEHaGU1tjFA1pUj9cNhFC3wd24tTUb",
  "key26": "5BsBu66FdHiLi4rTG1uxRSZaayh4RJPFFB58FYRXwEKLsiJ9r4otZfWLe48a6y7LPzHcTH8FLZgFvhfUR3cA21t7",
  "key27": "amKStnVcdHfZ6UyJpQLgxPEGMcBW1b645sLAnsgnH8WpdExLiBdFKGnDiS4gosbSoxqBSnTEtdr4xGH7ctkx9m3",
  "key28": "5GuZQ4KTScyJQ4rjgVRcqY3WmWpSbpRuLuJWhC3eopu6vneVb2pMC9DTrtHpUmNog15h5GKurXnrogJe5VhA3ppM",
  "key29": "KVcYwcAQ7BHNAuouP4uAADjpqKDXsA3HzF9jT22pAgim6un4hssVY5xxZAmdgSewPHrwQbKnrbeaLNGAMnnGpDy",
  "key30": "57wzj3jzSmK9NzHE39WYz2KVwzzk57Td4QJXDr799hdDP3HLuScauyLLh9JehJHe7gw9c1kyCjwjLb4ivWsC6wFN",
  "key31": "2pEoNW5MmyVhKgNwrVFmP34oD82guPiK49jexyeGBiyQFAqZ8XTnnu1KWATEYhbRg3BUxtybwkDBBtJahQQCsTbU",
  "key32": "4pU822V1akwwRm3i5SfhGiw1DLVccqhALbt3jCnRBxbxPEitN3mAasoN3kJs2F3Re2vSvtdgMHqdsVzQNAKA7McP",
  "key33": "2kS4MHmxqAZSh8GsoHfQTLh2XbhwpAYnEzNb1WRP3b3jzdoNvuWNqxbmCRroHvtvUxEu3vd2BDHUnG9VUF9FmXSv",
  "key34": "5TNY6Nj1UVZjVTfXiJjfbMyDWUEupQKkbDWeQ1rHYeDbjfgaYWb7X9eUZU3Qc42rhiunCTH7jx4vqAv8AC65iykU",
  "key35": "4qojKX1SBzeZPHmUE7FtDfbPbYLUBDdFhDpUb5X1TGzArFavEQrPSkyE4RYXLYEeZbmpKeXLYcodUFQJEBEmxouZ",
  "key36": "LFJ7N2KJYTgRyyYmYeDiAVsAsb8CYrh1mqSseKFWt2Crm7N7MGYUcXmfBcmfAjbdjVwCKY8zaDaNozWoczuyq8h"
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
