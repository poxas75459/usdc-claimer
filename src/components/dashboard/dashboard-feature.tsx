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
    "4hp3GmDTkcJJUmyrjNthNTDMuHaedWZuZRYNVVPjgAbVskqL3kQQbbwmKKaCUL4Yr1QQ7C72nqHPNSNvp7S3zfHF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PFAAendyGCXAXDtPDFGhdQWnhhRhPyRiLZDvWc8bH2zPxrK388sKNZHEyrm47YWr857M9giCTL67crUAuXPthXM",
  "key1": "4iT4GdbRQ5DwJUi3W4zmnmkGxNVXJJtA7AdZp7QmRvgUVneTRoXKsioMsPUywswwzTdexJaixVnrqyTVU6WdbP4m",
  "key2": "2K32avM2i7WZ6MJu8Yfgtm6xWSNekd6EYSt6BKEcU3AYM8bzUNVV8k2F5QP7DXT2v2Hy3rXStozqySkUa693qmdk",
  "key3": "uaE8UqGtVzp8EHUrsLNdcaefWezdXHz7e6iLQv87NsEauhspNbbSUzQEnXT8nsh1u3qYFKguZuEXCwzrvMGU5QG",
  "key4": "5eGHb7YzVcH2ch269XD5nHkv2S3iZhcyagmNTLU7Q5D5YUqvcfe9WGQZYiA91DkiQe9W7Gz5vzzp5x6e5GgqQQzo",
  "key5": "3nZ9HD6Fca7Y5UCBA1yDczeJ4WMz8pW6xmd5EbbbZxQLKQS48i3D4exJqzgDs7BKKbzS2moTf3Q3oGruuFw7euNE",
  "key6": "4q5CUjpt2QCNovrGoDTPwSnAeXTpoqvsRGQyuPyDdbAg2dapnmfahSm7qRgsLZBXt1zzRvdbafVpxcnLdNJCNQB3",
  "key7": "39QmFZfUZsRG4SARPjyetd81p8fvemMhG1QzmuNTsQZnkLAYFVDk1jnWzrv2eJKpRftH4JYJcvd21W6rYZ4WQzU1",
  "key8": "4KezM8DcDDf2HRCQcMC5yGNvA1LVV57kcT351hdcNJndpNVWWTawF1eXG2ahiFT2rtvuG9y76mRTcPbExLP3sjW3",
  "key9": "3pTJ4fEcFEmWH1VBY8LgsF529DWbH9Yig1ZkcxTq8yAPPakAbULfWXanDKzCJfL9bHddh4pNUKeqPwUtPbs357HL",
  "key10": "3X2rHyn8Y9Lzs4DAeuzzGsdigNWNUwKiFg5e6THkmdLpRdTPzhapJPs1BB8wwy2jvypGTGtYTWERNjY4Ggs4PH3p",
  "key11": "2mUEhfxVUa1nR4iyYnMCB9oQxCEK91NYGumn2nhvsjxQvhTyruAx71iAp2nARmLoe65oyvjHWKKPmRJA2sFYNpSY",
  "key12": "4ThxYb6QSaMCPtQ46MQNYb7NuNyN2LVU5DVZiMrtFoa5YyJGu81jEdkvhnXGpqhM6FwR5WqubAxUAySojztZAZkq",
  "key13": "3mpB7u9XPDDFXoSaWfdvX1KHUMbVL9fLEyvMKN4gZdZzar8pagPEdp1TU6dJaBugGTSvn8rS1TftkCmEd7RTHJNr",
  "key14": "4jHXDyPu3dHz5hExBC9m1XfHsS39iQvzGoJdrmQ1NxRNfRS3HPYjqxtytpZyyKoYpB7Y6iyjP6d5eHWEq9hVoSSP",
  "key15": "62Wvzditn8h1z8MtQA1hS3rzW5Ui9VxqrpxVKTbVym6Zc9XLHHE5mqQ1AYKprJj8LnjWNp3QUU8ksHSWXw4Xbir6",
  "key16": "4n7gmecne7xBe2pxFKr7MeCFAZKXfc1sWBGVEv5bur9MkUDehpQi46h8tRjaWA7aoSq6tT5ASdhoQrxbHjPZdzEP",
  "key17": "3MvSBoDaWr9Zy2NJ8gkppFvMD7yud3pBGmLyfwLddAZnNA9XfF8Ap8cXMhAXXuZ5dspdHvy1myin4rzyLrAHhPbQ",
  "key18": "4Vce1FLT6zTJE9wbrEKffFiGXrENJTXwMjvvZDuKSxzhXP4RX3qhTgqtXdkLNRFSuhuHAoXAJS5jmXZnQMEpCP4W",
  "key19": "3GPi5UCAHdGjoTEtwRvtyzk61MfeTbzdgM1YPNSWCpkeEZ5ExxDW96Zg8nBpfn3J38jC1czJ2uvXFrhmDDNZKZWf",
  "key20": "EcS8jk2dhMSPDszjdpMaM3ogRN9dBuEu51qWaW3uBovABbNGGSNnbLrc3Tg4utpmwHBDFRnCVyzjQTWuMCdGjQg",
  "key21": "5Vo6yaQcdpo5WScnVA1LUUjDLNFFKRDaqb2PMssq8VQRRTsNfi4B5SD2SfvTWopzwG7Wuc5xSb51TbkJa9735wy8",
  "key22": "5qGi3iFQ3tsVvkyrbmVQwxWsSuasHvxQ6zfWGWYbi3wkT6FQpPJkhCbNc6bVgqQqGC7FtcNoXD9QxW5tq7ToHh9v",
  "key23": "4iUSBKFZkVGAN3H4tUrm1wjnwNNEtszAmgpfTK2YiRNf9HKGtwZfp7L2y3bovG5VLHesFhtnAiJfdgvAAUd8d8qt",
  "key24": "2tpGwiWWGZADQoyMXNvjKPfncfVcn4jxkkcdzFA6kUgew8j97kPg794vfUbQqGQMdTWpJcyWfdrFzgo6334NMSed",
  "key25": "VtARP7oUuVLtdi5MvQj7sZk7jezi8zbAQ9iEyCMKrXvt8eEGo3DMG8HuRmBB6T5vMpkxGmPUQJvFb4st3kWW18G",
  "key26": "62KsY5t3YWtjTfSvx2s9b4fxwa8r8w6USHaGMs9BSD58ZSZ2Tv6wfDbABmWEdFyTkAMWBxZDbDxmQwgk8LMd4M18",
  "key27": "2PRDF1qEc5jk75n3s4KYYfACq6r6Vhf5mE2jWT4VatvDLN9DhqRJWASP3dGUhrnNtH2QGMtzkkggjXSstoTwzCGg",
  "key28": "4Tt19YqiUg4wGpgDjESojg73RRUzZf9BRFAitMbJ6F5irbFuFT49hPRDpYpQmcBSybSRcS4jo3p7ePvjfGeRjdhq",
  "key29": "3wEiZwzBfLBZZRo3Hfps3JC6pWyEabspJMG32GAGNTAtMVzUPTBie75qjqmqRXNFvViHQZ3DNqAvgmnt5f1LEcxS",
  "key30": "FnWg8QMbKdRVkhAVmjitQ36reqgZN9L8W8FWVZmJh3Cvm4AmC6BFaZyHxp5VZnXhWyPUsbbciWZChu1rrk65th2",
  "key31": "5GdPrDjuZwwY7dAfddfo4XrSh4SmyAy6GCEbGNuumpPoM4ggsFUWoipT2v3Y1pV6LDDvLhXch6VCZ6g1E5EGRGz4",
  "key32": "4UpVMtF6CbAcbLGjFWi6ANQQJnYes2jkxADCRJqgCKzac9smwBzxmaXxACPAsDSeBHxPMuEg3sWYgG1A3GhE5vt9",
  "key33": "1LkoYRDvViS9yddjmYxzJLRCnhoyxExdBXNywd4XfZXkH9GB1HmX6deQN4er6723NJjboQ9muwS6z7DeCEZNk2A",
  "key34": "5xdcgupUoCBAzseKbQEA85QoHE5E8ev9E4tLK84vBxAuCKmfaqLv8WXtGb4pXr1BE1DydLW3apupRoZQkRxGzV1V",
  "key35": "emwQojXc1AT8YbrtiyboQpRaiPiC7kSAWswZrDxQP5TW2bs1rJpTRD3D7urhZEhf5EHxoonw9akpQSRmaUx3Lw7",
  "key36": "9mkTPqnS7YQ5ehZWDM7VFXN2Spf2JYumKBq953rkPJ7bo46KLPhB9BbaEWmFiN2SReNSLnetdkFaD3adH6Xa6r9",
  "key37": "2jFtY28neoJPAV64af7ixwtgdZ3jy13SQgzrGhLmqzzgpd4PcUeUh6qJQp1Qvoc7WhtWr2s6oFCBs2pspZykgdpP",
  "key38": "RcLx7HAgKFgudTufCmWPmV88VsdoR4biwHm5bur79LJxuw4japeUxzJHEo8NZXmrYBbchJcGyLREVo18oHUb5Tj",
  "key39": "35dfS3Tx7acuU6QP4KLAiwKqdVseGg1EYdtKZU5y6RcxM2h6k1nRkE3VQTwFVnYKZW4pAuyrm7ViEsrciuNYXGtp",
  "key40": "4PfDKrGUcFXShhSkjMhnNAy2n4J8qzNHHjQYbvtAW3HwnoKas8G1xHHyR7xDNAXreBeP8fkCHNAi7vbvvMXGmUWh",
  "key41": "gLySqYkn8Csrw9DdTRUAmAoj1zksTYys1DRnuYRwpJJCQ1YTGbisZoVpBy2NSgnCRDCSNftQRSGqYVxuGybZxPg",
  "key42": "65oheosZo3KUF7hgXTbrqLR3e6aH14Bw7echZ2WBn9WHSUxES4YeZv3C2WpwV9F8eQsS8NYrAn2vQaPXWS4xxhQn",
  "key43": "GLmUu974fVUjR12TvHAzJfT1DsyrrgnkTswjh8QimPmiHZ2zKnbG47mREQ6Mjfc6s8YWsmnM2UhbRpZa1LLN4EQ",
  "key44": "FGx7BKMxbL3u2L3LADa1LoMoxWMabsa1KDHeuUpLAyHJDemhd3pDoFNSpNzmH4wqbGahyX5bYrpsrAUaLFtbbo9",
  "key45": "4B2rDxZ71MC2RKwK5opfUn8mWStLH9KNdgY3Fm5bvkCYP66xMrbPZUzqAF72qbJd3hvkST4zycETMkLvDZZ26B9N",
  "key46": "tFqQxkP3UNajmeg2KRNc14kmBYVHPZbvwXagn9Rmh7kggbsFqz8mQmdnVrd4hbK8RaSXHDtfg13a3yCKLe9WP1V"
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
