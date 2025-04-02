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
    "4ErXXxT36ePsCx3ykuvr56pA8ZFFVHZK47pZm5ugGsshJcgi1grGJMJKCsyWrPPr8EwuUuib4eSNamhSEMxPgzJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mZxjQPhn2VeqEhLidwC4Z4KtGo6YduGGA3XzYPovjsrH8BkGEhdjpagktek6HMBado8yPeop13DAfGXSCWe8qrY",
  "key1": "54FwJCPJgX8HeivEQ1cTrfX4q4YE7WwQXC8bRSa3SfdFqAcZ2YTG3ZQXTC2Pr1bYUBq9VLek798cE2LYArscF3fz",
  "key2": "YsFpvs4giqazxmEgY4DVKfuWZqrWyJdfPDpPjfs3Yhg2LY3mBUagj6o5tbsmgxCKfWLz2FjJ69jDtBS9fNBHgZZ",
  "key3": "32WbNFqntpeXhxtwz1Q72nmrqfYh9mm9nyVMBaV3SbZExkEfvmTZNtjBcg2PxnEHWvnJiMbbiEGJtn6FRHvsbxrL",
  "key4": "3MqmvRD7NtbjWV3qNt8yEd5xGzYhQqGdJ8ubgWPsDhUSaS3wiE4cagYeYrRhf2mFDxZNXrnp7rppfwptZUkQBJyu",
  "key5": "BbpzBfQF1M4GCJDJRnT1dQDXPN1UV67bCXWNa5RiGfEXeAdE19Ew5hbRRmttjTtVyjRXPzSX2aoJDaBgrwDTbfH",
  "key6": "4KbMw25YoxMhRgSSQjbUqkJUgSvAQAhGKi5dNKVL3df7eLsfnzgFmwBPPi5BV6bHeX5FwrxyuQAEko9TopBaRdvM",
  "key7": "653NyQTSanfdzrpZTgDWpSQmQ6zeptCRq8YNUL5dL2cP3oJGeVzvzZRq6Wsr27bkyYUVDuMudSoo6nwBgSUCJXU3",
  "key8": "5U2PX7NKuobAoNymLhx1cm4rsTq5ZWYezaskRyUJmhD12hPCC9wRJBXy7Kf1F54NNDBU8nHXpzgrKNRpRsAcsDxZ",
  "key9": "2awv9u85VYn6Nh2gUBWMeYSfhdVXGVdax5z2Z45uiKBQ5eCWrMs727TM75RHEkNdCWbkGPPPuKmBuEKZ4XRQ9yg1",
  "key10": "1CZANNDwoTpbQBZFuwiAJGPqR2eEmZ49QgtdL27avKEa3u7oAamggbHrnQ7A8RxrFqNGpbkGWMxS94zzKyqC7tH",
  "key11": "3S4b5wTP2FDUmDDXVcXmtVLrqLgUcnvAQ9fN8B4SjF9Nbw17dTRfvg1X541mah6xsWVNwwBRAuNx7N7sGuD1cHDW",
  "key12": "Mx74i8pN5Q93L1qRURDVPQvqoXH5oEdQwi9aHPQkAgUcPMDnvrBpVzNSoVzPnKqL4oe6dk66BZwJ481hhbvDWyr",
  "key13": "61m711oa1bGm4rUi27iZD3ijfFukL7rdWoWuRq3noHuS4x4Uc4vTrces6YVamAe9hwnK3aFRQDFp7gtpAB6VVC9o",
  "key14": "4ij6gs6uqmCptwJBrajmc9HRrgwG74k5D6HSa9XXbKHHyUrwQgxDXN5LB1vR4bwhVrE386TbRki4V6Ded4215wx3",
  "key15": "z15qjX33DyFkZrLqjwzL2fF9BR6DmPkLrRqxpDGoE67vDKNyHTWFiLo5uG4ZHq6qVgzNtMsGpZfapQQ9Zu1AW26",
  "key16": "Au69DxqpEG8xPYLuCXqgHUr6s8CiGW12z63SfVRXVvBsnkFuUpS3zmNai97jrFonuEgCpBYuBdJgwwWo3QT32fo",
  "key17": "3M7ZkYJFkbMdmKaLQRvjSXA8SpanoDBs2v56WxbNYFYg5h3MC4Kou6YUJqz1TzUWithxfA9Hsi4jpXJ7Trh33yyg",
  "key18": "5MSHSA1gFE5YDE6dZTTtuenekfJuCeB4Kb5rS7No9uDZLJxUrgsG3Goq4qNUJCqoXCvYxp4USGtegk6fsAwMeENn",
  "key19": "49hibmQiw5jKMJg8E97YGoZWW3exzx6TbHXKCbPboceVkpj1HPvEwL9RF7hmW7NqY9ALMgm7hKLxpbpAovwZbMpT",
  "key20": "5yUJz8iqSm6E1MNKUcCjrJFJS42Mc1GndAVTa1McrET2FpMEzdCPsieiPtGpEincMAQbHJzSVRUmzj1VYb2RF7mQ",
  "key21": "3ruZXNajmckU8u4ExfZySeEu3y4DbtZi7YreyRrKub2xVJfW8bKvW24ddGa7ueLTaGV81CtAXGiD3C13T2JrT5dy",
  "key22": "65v5CSL3fqqXPqxm1BVNn4WwGk1cmW8ahoFv67CofheUCQPTZ68bXrKdLgFySKkwEzeHD3XdyPFHyGudT6Lt36JC",
  "key23": "xE4WuJv4wxUrechtaGFGfzeXQNHx4qoYwLi1ub4RtzVGLsegdsA4tZPJH2zfbBcR1prEHT3ZvwrqtYj44SSX8cM",
  "key24": "5jokUxNiSJrhKRZJY4pJZd6pbdXrsgoUqwpv4VJMrYz7ESCdnjirrew1kkhmwUAHLuLdvkz7JSdHSNa8uAoGShNA",
  "key25": "2MAD9gnF5sGX1efrV121mzK2KJnE9q67WqFpdjJeWdEizvJik6tCeiBxzcAJwhXL2Ro1bwF13eAD9PcRVTYj25XZ",
  "key26": "2D2sW3cJdwomNrbA4GDXWTEL9xguX5AqRLRgxMgeRFov6GanF86bKPHEC5jmhZiLDLWzjgeuMVrZGYmam3Hkd5uy",
  "key27": "5J4WcJjmmQZghQjH7D4666pK1NZNoLxWfJGkfweX8dzxgs6bZLQ9GmTtcNrf4pr3wGWh9W2yFSjY61wfgVxeUZ6u",
  "key28": "2DpLzjFNibmd7AzjathMxDaigA4n2CnMYJCzPoZryTKXahh2fjjauezLx4TuCtX5CjPXn2UrmmqZnrrNkXNctmUS",
  "key29": "4RQkL2QrsmSkCi6pC1XKx1p8DuLsU5epG2WfmxzHoowue5meamZ5ESACJJAJ61ReVPwKnYKgsseuwMeZshYoV6Cv",
  "key30": "4MbdTSPzEMhfBytnuo3bCZrEMVgDrQtNksjiU1uN31nN354oXS4QAcV2rbVvLzRo8mEfLwqRR6ANcaqkR6qnd9Jo",
  "key31": "2G9WrWakd5Vt9phF4byf1zU459UQh49L5FQ4YaGxoKtZy71JghZsRPVwtsD97RuSScy4ZqAFDzvoTyFr8DNPee1C",
  "key32": "2zEWJztHbqhqmgcrhcYchCQf14oNswMbhTfF2NFGC4ZBasdfjp8bWWbsrz6qsmtMxZQjEiGpnGmikS8ds52ktRfH",
  "key33": "4uuWZqfkYgQ5pCB95GJHxFECYBg3cu8pH8KaGUz59GN5wuSKpD6xo2XPDVNjQ7zuUdx95XCYs5oZWrKYTQAj3nLE",
  "key34": "59s6juxyVy1Svi337yynoREseJkgaf8BeQhMBSuYfj8sBAxBjfjgSLmrSV6HoqgXBSpssDh3Rono5MHzFX1X6Fdm",
  "key35": "2FfvEPmTtKRfFfSxXmRu1x7pyZWQkY1iYU2qwrkEBVcazgbT7uDvtsHL9zyuUPv4aFr4W4J7eZEzy9AmHYHHEGPW",
  "key36": "azd52UD3nSnBw7r9wTjf53kK15SbKuQqKcJNncKVzyRi9t7joT6H54K3zFxscitSUPah77qRREZKQpa21FehEiU",
  "key37": "fuDij9ZdK37dPsQ4m8SXgMQPiB3GkWV33yAZDHtK2YnT3UNcnwiQq7BTMYHiDevb2xHE8DvkZXRQTMwvJdZdtsi",
  "key38": "3WnRemMixk7jYXHBZ4EbgSqTDpKpVt5QVHpUn1ve9f7ztWkFNwawddM3bw4JnSvkSPD1oaF8PWcMdFL7SZtHJ6Kt",
  "key39": "3933rZFMwdRqXxxVorkzDffcgzqAeP4jR6ZbKxBzc1tKc69bc4S9jhHYhvDpRhnK1ws7YYxG8i91oB15NtARtahN",
  "key40": "2hAPhCZoawS4XmyRU9uKwUdvTXj4fANK3kvqzXwsYhjpHET1igusw3kHDZtHLufeBEfKZniV8PbMkQimKKAiQyEo",
  "key41": "3k7KW7Dz6LQwbmhWy7JoGNXsCNFo1H86son8rbgYdAkuwo1tV45zzFbtHwTA27MAAwqupPqdw1hE6aYRKDYsyNWV",
  "key42": "5pzYdT86jhfcwwMsZndvaeEVeXxZaWaj3fcLzsL3wWzxEZ9FMCrHtEp7kbSiaY1k3AJSfwayvgt4tPmzZJ99PdoH",
  "key43": "nnYj365Jm1oYYjTyQBm9SJ5YzEjH6dvpRAsVUB3fnUDVgamzd7oUthvxY4fNUzshh2pnr9jG27PXRdesNzQKio9",
  "key44": "4sz1BNc3YeRcGXxEeDeEZ3na47QHF2uuQ5H1RCd88gCgpBjbsyNrtn2brwJgpvahd1QjwGRYNifCgiJK66LLbj52",
  "key45": "2Yp8jSBSzyKymErP4CTgnX5joix7BD5tLxPVk86zTLBK539hKAHyZeLFYwhy36jjU1fXnbqXLXpFqXNhwjkxCcFv",
  "key46": "3MTAShmtQx1QXNjBr1Ci4Bic22R5rJFFQasjPnyqT3evw7ZRnftLdiWkqsutuKaAmfibWk2mm6jyiJwk4LdDnrP8",
  "key47": "52bG9kY6KRmNT1nMpX6drSF5xqqPJpJ88bHFKkF9nTxopqFUiekYbKSVYwkhK2BKXcB4Yjsye3vrG7M5eh117nU",
  "key48": "53AuMrCS2D5Tq9xZHUPH32RM1qUzFgGgb3GQ4LQ7y47qGUTmgjfXThGMnThFYyDiavCPsNgTroVooWVn3Bi9UZSh",
  "key49": "5sYHCF3suz9dzmVs2EbjR7Nfop1UwmbbfnBFsAwPhVUG1F962v5AJzZXbPcwAGBgTWG1jogehYJtHSh3e38hNqG5"
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
