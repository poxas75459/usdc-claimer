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
    "66fwtz8Lr6drQDmt7Aj4hpUzizSHyszcPAfHGA2sqRNRL3W9Jf4JJJh2g2uHcfi3BKgsc3y3AN4bXuJQJGL5kf1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y3P3SaFnGyzm4bPRydxikyrnkZturH7775PtpweUF5wnMWFWz1aey2YuMYnQbuL4PA1Vkj5HupCBS8wPa4MUQDj",
  "key1": "31QK5TvGKADk3Y7EpnqtFUFyjW1VyFvP6GQ8ffthZG3UYBCVp5RHeytHbcEfKD7UwAZu7gM66eNEkoST7UCoKq4p",
  "key2": "2jid5spkGSp8R24Fjxzd3rsibvXjXzgTzhydYUbXwdiVwdP9djf1o31hCXqJwM1yMZPoGU8nNTQvuirBEwjxKjkp",
  "key3": "39XJwpC5B8SgQA1YC43GqkThcGWGCTk4ej7o8K5BAyshfWmu9RRexPzn2jennKVTv1wUQUrJprqzGnHqcY2UMGGz",
  "key4": "AXDCKDn5gbesnFbVCqXCKbLbHvmgTLVPyGaQU8rJLxG2WikgcEeLjm9uYMTzXPkU7411yFhpuHe1UBf4mDAF39z",
  "key5": "s2zY1fu5ExYmWGDKku1n3zsGejr5ohey2q52cgH2ERvTNZTGFiSvfDWdsUgsQQ4NwimccuKFmkEL69Q6LDLqY7i",
  "key6": "5Uc7Ub2keGmBzgxgJFGssNEqwxVAMhkncZPTa7c7DZnnvCicyCFGdFa4pWM8GStpy6fKJ8FqSMQNzpgzr9D2z2B8",
  "key7": "3An5qA3sSdaZhPcxUnLCzzTMnsVqsHG9UCiPKXy1zQ8xYN7uS33tzB5EYs9rTq7sv68T9qjNqzGCxefZaFBbQfEQ",
  "key8": "4rTWCP8vxovJRyYoHVZQnecvmp8SfJQuCUfxyPVuG3pnUMNFaV7yA3TrfYc65WsnUqUSyB5rEG1TX2EWTzRcRaX4",
  "key9": "5Zr5cNRuP78YuSDRKsLR65KqAHCsJabdnCBghTfoYt5QbPJySrSKbgp1r3LArAgmggCpYP2yom1o7JicLyYAQQ8f",
  "key10": "HdH7AhLJ8SizMGMeBQpAm4N9hPgdP2XiDisr1pW8eY2SNc8e6vHspDj2brJii55cviRFZMGbGeCfxfxXuvrfw7W",
  "key11": "3dFkx5vHhyFHueBiT2d5MpUJu4WWq9H5CLxp6yUYrdzn7XcJdKzK6UJLF9mkp2aeS1B3U2nLZQRPJ2bfty18gkZq",
  "key12": "35gwGQ11eEQ68ZB5h7UYzcS8gYttQL9uzDCTiBL5MDSgyDo6eJb6wa8ukvxZYEJaBym1Gt4XjR7bF29AqNNxqUga",
  "key13": "2QBVTxFB8ZnSMwRmcL6wbruk6dBKWHqw7KXmDhiRpvdmkjovTpnEqsNdVqkxcSWDM8NTB4ZzUBjM9REiY4GjjXZk",
  "key14": "4sM7AnM4PuqGMpyhMX1ivoySpsE4GbsfDA4aw8K8TTsPeqHKt1TR3pKneV4TfJv5oniqifuHENnSJSqxieQZ8FwF",
  "key15": "3GY1tjf2C91wdmUAehytrybpdJx6zeLErmoPpGzTz8UCyBFrURwa6fttDhXpeaZjYhxJzdB1Ps4xKBs34SViUnRh",
  "key16": "2SXBLCCJgueiq3wgwNVe9PejzW4hwiwE74qoRs14uVytm6GWBHjAop1VTyzFYBnq9XFm4b8RdnfJ14UA63kmEy13",
  "key17": "3MUhdpj2bJWyWrngR6WFGucyJHpmnHcoBLLXcffqSfpQCcuao1cZ2q8zZA13roNCzoHhqSHBoedPfgJmZbu7mQ1b",
  "key18": "44UP2yPqKiMRLZrbP2Dhy7aHDbTkbrdRiibwheSVPkwFwGg2Fxax2hvXpr2sLFRgSjQPGeL8He5fPszjLoy9psL6",
  "key19": "RR8JQg42Jk9b8FkTb7LpiVy4aCvDWpLCDSedrc8oxJKMRZRq2ckBw4ZEBgraGjLZbNeFQHcTCnUKrq3HG4ztbSv",
  "key20": "3v4BiYS5aUtMFk2eTDNRektpBwcqs65VdxuyffekU2z1Gxq6BMmLc2Nm7vbRococvEcrEB8X2eTveJnsqY4r7FNj",
  "key21": "42m4E8RE8EtxCBHSxHq5R27Makjc1MLHEkvzgFDkJJdGAdYL8wiLtBPAU59Zypn9H5zaG7Eu2ZhwEyCvph1kwmLs",
  "key22": "3NPwKwiVbLDKy12vtfTaLkkgLvEvHXBiR3fDhTerCun7Q2JF7hmyFGGQJEHkrpL4B3ixLTvXTXVXCRQ6FG1r8UVo",
  "key23": "5KHJreAPFxK25hmLN9VCWyFj67csT1TpmxVPD2Wz7xmQGvS6yvT329oepvCzSkrYxXwQ4Gs1TaKmUkHn8uFLyjM1",
  "key24": "58Jm5pqSC5rtei8R6ZbXFfg7Ub2YsvGCNa6g5jyZZwo7imRUZiouKLSPwn5YMhpBgrUTNdbZXG92DdQuxYu3fZoC",
  "key25": "4iatYgzefxbVnnL5uni391rhNfSfoPiqYg9szywjCgn7nVKA1EtxyVtSwBQ6H9MHTeqRXT2Z1zC5B5UiKrQVxi3x",
  "key26": "2FTmAz51aB8eFuyx644Jj6ek794BSztaFngYYhxiR7xKHvSdk4wAWEPAXQ9iEgugmtDvTELQyR55CujEfPq9ziBP",
  "key27": "4QJzWbAQ427WSWjPSgkhfjMLRdZWXCW2Fq9WEoYM1RYitVMYZF27nLVbMbmSEZzXwzsSUpAmoQce28NamUmgqoHA",
  "key28": "fTAksRBoMw1ZQiSh7413JPWmhSLW4iz5Pm3uUtaozkzYJRZmgqgtHZM13eWajpFBwAn9HWDvixm5yGw4VRZySZG",
  "key29": "RGvntDGMM3gYW2XXGHZYQ1tuza2tCRp4SAASkdoXEa5H6me4Hgms3n88QXKekB5b8FXKXhUM4EQeQdbPu2fUvSo",
  "key30": "4Xigfe4aLBhVNDRkp6cqN1LxL7MUb52P45wJB69gsfZLZr8RAJnoZcjKemHaAKFZ17Y2MdK6oZ6MqewZD35r6HSU",
  "key31": "qECjvrs6st7hoQyV3KvukiSNmApwDxAZJ75sRXoC93THx1r5RLL5vMUymUbRr6HqXZDqUgdAmtzRNxMhxL6aFne",
  "key32": "4V1ByujWB6n2AqPxSNuK2XoyEtqtzQ5niuKZXdZe5AjLWrzfxFcJbProUmbGhBBzY4gRpuqsrsYFh8bdNFPcrbqu",
  "key33": "3HiDtuoQNB1jouEaejLt1StGZxHxskcXL6xQn21hVh1LZyWfD6AepTX48A8MvUiqHk3NXFLhkdNLbNbGcuQ6cWWq",
  "key34": "49GwPGLrPDjRdyewxg3kZDW336g5Fbj1rnsCj1fgP9Lytah1rzAFWBPwXpBuXj67WJvZJeWf7JiTUsuKgpKRH6hg",
  "key35": "2daWsyH9smrenjga6cQh3JBHyVZzohupifBDxhnQeN9b2SoLZe7yEGg5oF8GYXXRcKgqQ8exRPGH52NfYL3R7y6d",
  "key36": "32WZW1f5NjS6iBpYPZTMMKhKqeUN6LARczTz2beDKKP36iMY3xMtqNmWzi4eiv26g41BkUAfEinetmPK6z1QXBXn",
  "key37": "63D6y6zkng3QX2Ztiq6vorghzo2a2qRHPynErxfmvaMaCLvivUbgijYmuLdZfsKzHe751CX4i1aReni4bHTp99b8",
  "key38": "3mFfPGWiS9oURsYvEoPmd279FaAZQZQPpENCXdPnqvaBiUuqiCbw8NjRmnFXNZTUixmQM3Sb3W8HDSB1qTqVL5wt",
  "key39": "23HNVtpTFAYSCffz1AsSR5bfsN1zi4LxW3uFsMEwD5jpL2XM7zPmdA1G26b9U1ye6PTuCaEd217An7AyGZVDJTk5",
  "key40": "wapuzrZmYcMsCKh23iMeyJ5R3bMcM4yzQKFai1ELbNrV7L9aneqfXbouRKis9Mv9iJwBUSGBijaxNr8RrEGdr6h"
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
