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
    "5PoQr41AEE6QHYkrqiSuoRCCa6qCtHfcZJuafDm11Z9kaptg6H7jaPuDtewZouSVSx1Aa39LNJ43VZo1KQY1TR6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SCTZhvsuyNUYAhxBqkhkrjBe7VqhxyoxoYc1X4zBE6BGeDHvm6i7yaK3bjH8mYfCcmJh6FKkJqJJM84x3729nca",
  "key1": "5aFVPsMAc8vou49aQ7cctRsptL811oQcYriY3PsKQwBvDGGQXJEPjKkGDuKc2tUUKhakGxgBY9zTuQ7xU3mZtCg1",
  "key2": "3cCDyRttq2ChzAe2efpWqJL5tYVkfzU6ePRNdzUJm7eU1n6QqqtqSGY1YC73qD7VVnYff6FGPz7n7dHqRdJio53t",
  "key3": "2XMXctd7xV5sHuCfKrmuAypnWFuV4jeceVGrWYULut4hSWDWyivwUy3r26Wcv7Ryf9pWX2pPaCsbbUgDtmNEc4wF",
  "key4": "wDwsc4sRTAkTWrVC6bHe35KvyGSokd9H1ggeQDnubewx7mrRF3mjM9tKdPFKjJHYitMViqxeHa8BoKFDH4CZY8E",
  "key5": "2Ge6ZCiTn4EYCKF3kLg2UEBaK16SPbXUBYJrCsN6xmDWcFvXUiA4Z9wGYD6LV4fVHSJ7AwmZK2JLGk6wkCXCrJba",
  "key6": "218jRZ8MzeuPiPAJCovaQCndLGhED8eC5DTjZua6XMUHe3RzHchCxRVemt86nXNtsc3M99m7tviQ1S9RdFeX4mhz",
  "key7": "38xjAgspLphRHqkEb8EFAPiw7peMGvF2thYdA7AyF1jdgdGyFyLThFmo8V4rAUmaKoc2NBd6WBAQFtpYNDWmMoAZ",
  "key8": "5B6SSEzHKhtAdj55k7PhPh2qPSpGLXtVPx7dDAkWydsQGxCWZ2MhEwHvnR7HLNEdaUZFpFv47QoTqba97GnVJpQQ",
  "key9": "3UJVGDrU9wskncbiws4NL4zsj3fKqK97jSv4oXMMNSb8aj53vk9b84VeArqXUnrWtSB6rFYZM3auKiDBv4aZk667",
  "key10": "4AEX7gPQ8GtzhRzzNKZ25hEn4bodZwEu4TKtpdY7c28qnWxCdz2ZigTZx9zyrimbcDnceNMEE8yPucYgAXayGqBK",
  "key11": "63Vd6vB4EJg6rtopWRALTq8icJQBUby2cskxou6AJSdVD7hYmmLGmHDg4KCQuzur5JYHFcZWNKko4NLTpzkzTrix",
  "key12": "3BmMWC2qXtGy7FhyiTokU42hjyxVE4VH4NZgEfrpHKQAUtzbEY13vZvNSDjZ8kkcZ9w9ZnL4SqBKqBSmT84yup2r",
  "key13": "5sK8jehrUzkdEhrYvH7ymw4JFMQsCkDGx6214YLASACJ8bSzFtZH1cGg4rBXxoou4q1AivaatMRcvL1PaHLC7U1o",
  "key14": "4zXCLcdp4bGeUfa2jDYPfAXajRdgxhH5UNJoaS19ow5qBzBDMv7uYruVE5EH9BAhV2deRxAjE1cP5QigVj9GzPnP",
  "key15": "C4oz7kqZKwt4QwZc7HG2LDJvDGQwELWAeeUB7pr7EKam8NEWeQGJVCq88niNvDUR3tc1KwNd69sNrTCvkTvHrVm",
  "key16": "5TBWAP14kWhv2AkDpYAPprA9Px5A38SdCiqnnW1qiBzKntTkf5jcRSY6WGMB7BHdU79AWAeFZo5rUvzsgB6a89kf",
  "key17": "4DatwynPSvd2oVuCTBbKhnaEFxT31gYksCKowH919ptAG8M557h6sxyknJS5t6dpgPxHEZPFdGajGKxwnBMEskBk",
  "key18": "5ELgGgja2ntiAJA8viKrE6LKBEkZ6TpUU9F1yXmhncuQ8kV94aUiz5cXEa2FbeHR4hCyG5MUaos5ezP46e2tThXp",
  "key19": "67TtoCUocgoZ8jeQrLQVzgzGx3veATrhb2ut5cB4CEXHhnPqXcEdZkhgmf2ZzgayWb4uKAzhrppbnTJ5Gy7izHMo",
  "key20": "33AtCFWdDW72T4nn8kbqhqpJpLAddg8s1dn9fRrt158NwnSUcXSmmVycvnw3LY7WwtPTgWsvTh5eztqBpnZoAERp",
  "key21": "5bXBPhAcdFJoJxhdLDtG6pZ2TdmFVEf2hXvyCo5XPHDhiQ9NFxtB6SqSorX8USHm67iBfxBo5cwmNwGFGhY8Q3R4",
  "key22": "5RixMo1xGRY7LJYGjDeLgpPPVw21wqGhhEmxwzPuqfmkd5Mnq3G6EQmdWppQXZijVT4KuSPi8veKA1EPCmznjrGu",
  "key23": "KNkhpnHkKrB4hqqtCWMBxSKKgxQ8jJPBzk6ifUp3hHZ9PRudz8nbiZ4oKtpVTGVw1nhh3HgUEtn5FwFwry7AwqK",
  "key24": "5MTKpt5tBT96P2Q1ZEG9YBXMTwqeUeHzHjpS34bq7fZMvV8dQ9i6bMtY39EEaSDcp1Zsb5TFvRJpouk4jNokAaKA",
  "key25": "2uQjSAv4qSMymUC3jitVGD5Y8jkx6KvDrQWwd7SRk8pJLmkaXYsAAiyCziX2AkZeWJn4dGS7S6wHTBzhjjvd7eBB",
  "key26": "2ZCoFeBccZ4VTKj6KCoKwzpxqkqtFdjz8vtjKz8FeGC1vGhAw3VZcK1UNJv9LuwxjbT7xN8LQCTYz8X722SACE22",
  "key27": "5aeby26D6C1g2Rn7UnQc5zW8PyA9fijCW8NJgb3eb4qYbh8fYGf8z6MxavDpWkgDcABLSVnqQVyK5PpxDDhfELpx",
  "key28": "4Rs6JWYDi3anVSmxRqDmoB1K6qL1f8LzHg3Tk9fMHFZ14y1WtfAc8buAXStYpxcdEfbb2r6dZXRtxgzzNo4gofTJ",
  "key29": "TER6tuoPmdWeMz9tPX8b3hBZ1Edm3MavrVaGLxeG6Xp81pW7e6BGHfhRQpzaBp6z64SvGD4wYxWrG29sV2bhdSh",
  "key30": "35gDFSnZTtqogUwGQhsHyVvZeEUVitp8HpPdmtXkJKSiQwAbp2x2XhMhTwF7srK4AboNPke934zUu1TAdRAjA2zQ",
  "key31": "3iNTnFEapJee2FQZNUi4T7E3ZeLQcnHAznPWKet9FtCmF5K4PmK6fuWw45iPd92WiNzxmY8hwKdVnr9gMkoEd7o4",
  "key32": "5F5CbszcuW9Hd1VJpqNa5rrs5TBmx2ciF98vhuBAJuk8cPL4Kywuq8mccparLSUkDokJ5QAycM17VdXjjG2tbkXt",
  "key33": "4tTEoRLTJzitGRuaj5nAG7V5UR3VGbsoJUiFY5GquHpygumDTSmMvrdVGoQ4bSWbfWA2VCoEubeZZX8JNsrsbcDx",
  "key34": "3GGsgXUPsg85JvmMHEvhSQX4K7GfrstgtZERSJV2B626NY3UJirV5DZJqBjRrwzQP1MwMK6NvjJWKPXEW1XT22WR",
  "key35": "KysjZz5o8oGXt4wvSndLNY5dvLRqZGgYjZAc4DESSoegpGvkNCv4PrB6D5ogszUm1xXZkTbNNDKJjrfw4WC24wr",
  "key36": "4AtnrVoA7DNDGzQUdcApHCguchLp385MwVE1nAjwsMBtvsi5wgwgj9ycRy2eXaNwy4cWScwdYXqyh8yD6fQSZ1kc",
  "key37": "4dHvV6DLKduR2qHRS2ZMWUkWRwzByavBos3Xrp8F9fmT7ogSiuVAVxXsBaEfMDnu1hcXpZpsHsmmZehmvVBHyUVm",
  "key38": "RqkkG1YPGtriRhjzt2b3sEoxRAvVKCyer9R5SW2jrtpcUgo47b3rcTv6v5CBckEwEjUzbcpYyW8N7mtnUmS5iau",
  "key39": "5nRe85dUKxPDgcZST7QtXQ1a7R2Er8RDR4QfmxfsS4gbyF6pGizaJbr961oeskfaU5RPr357h3drQh4Bu7FKoR51",
  "key40": "3q2Hfo8WTKzU9qCAJEbBB7L9wnQ8XCS3MRim31DVacpj5cT4eVDgzcQ8EHsuYRrFRuF2Z6UEshBxzxrcDg2ojTzt",
  "key41": "5b89Ln3TXwjWmuTZzFRU5H5rPmg1nrqBLCdF8yTUptHJ675qqMpzy1ypJ4JHSJNJsigWdcDxky2D7Fij46AchFTy",
  "key42": "3g8RedzG47o5SzRUAFHncMCi84FUkjnEXwRCjkqURCc3E5gLUM3YhbPtSzBBUBQnquN5sEnapqHyCaE1rzUL2mH6",
  "key43": "4Qz3XDw93E4Pp6FzLMxozuFZrRZAgiZjoLVnRG2VV4KnF5ED712hE2V8pudr7xgxgnaQAQkPKyJ9LX3NUr1iMAp6",
  "key44": "4j5CizEFWjWNWGZbWsMeFQbzXVrEQ94gcEBejowhetFSgioTsTsEY3ahE4jJfgh9VBkm9EhzN4eW3KnUNQYxT5RR",
  "key45": "QmMEvoguY7ofs4YKg4Gc7a2PBjmYN6QZT6NxuqMEMpEqduf49cjybZMTwnAgiyxzxYRp2ehQTzRsP88TRacCQoG",
  "key46": "5uCCQFwUsYsFUX26Y3hbJSGBmeUadcZ2E5sCwkJCRyx3wkKpcS58BPF8biUMR7mvw8ob5LDJXtF5CytwM5k4F4ac"
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
