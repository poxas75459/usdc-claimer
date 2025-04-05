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
    "4pRn8CBRgjQGXhnW7QXzW6LGCaJkV8EceCqzRuD53AvYRsmtWdhW9zvNQ6npQCNjLbxWsxzgTP7F8pGeA2nDrsuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FPhwzSESMPEx5CSRXgrdwTi8D3tktHNf8RCMn7kHEFsoaD5qpztKk7zhyiG7RyME2j34ic1qMrWjPEvURA5Q4we",
  "key1": "MXUBWxChbB1AvcsbMbUumDiNzYuUevkpRSAmXsczZ2s1k9xbmr4UFM1AMeLoijinMFnLdMiK4M4mWVBi9DKAQEH",
  "key2": "2SCu5E21QEPi7B96DzjXhFa3xoCVncCzgQC8rNWvoJRHZXjrKnHeWXeNsYN7WKqxML6V9VcnyYsoZt4Dm7GgLcpf",
  "key3": "4Wp6YbDUb5Zkovb32M3z6q4rTcdN3B1sjcy6BymaFMtk2LcgACnFBbNzugiUx7nrvBo8bAxBcx5FmNj91Eh1gapV",
  "key4": "34dx3YuZbyuwKhm113ngeWnC19qhUW83YwMpC3f29dBJDMCVZCfxWWPGDt3LBnH7edmsHUyf2qH2uzYUHd6khp6Y",
  "key5": "wBZXCB8hLYw7JLDRxS2jUgUkLXN1dmTgqomeAeYaJsGHX9JgKFUH4mtt7h68FBdmd5aVfFkshTHGbrXTZvJoBTx",
  "key6": "3sRavkRrAcv9UdqJ93hJ8dcBLAnUEAnesqvVznVib2UGBGaKvSRe2y8MyHV8NFMF5JB8sozrDsj4AhJPM3EwQ325",
  "key7": "4imk6bYq22yf4Wdr4p41k5ceQhUWsZAipmdzbsDRzyomw6cpW4TUtqK155cpu2FtWzoD7PrULU7rYUEKxcrfDqEG",
  "key8": "3ZhVoTdfAzJiRrugTsvds2eNTcNRs17QDfChBfVYPenwDyRWoJyupL3o3qS5WdKr1WZ4HX2i2zgwewFAKqLp2sj1",
  "key9": "GCNmoAvsqsRqHmK1DVCjoqzjy3LC8aRr69NDP9vsUzHoPBc8SdZw26JSqq36rX38HWNyxnz4yf5VPEAVuVKzzth",
  "key10": "5JHfehuux9na4jfrZwtnZLxQYGJjSritKQHkKRnxSrdwZKkZehM7CnZskzFoEkb1WE9X66x9xHb6Yo8uRoXvcXJL",
  "key11": "25eSsEh7EcTBGtNebvi5Z3g7hdoESjyWQPBST3BvJnAwGfwgT9iwqbsnBpHppPfgj1LXm9ffnkPaCVMnvFPDWpph",
  "key12": "HzLuCtQkQ4gGsH2e6Q3SgmB1yNS5FfxbtNpv1WxsNqLeybCcjCbqqfaELjiAaBr9udHN8WimCgBEAU6BZprFQLr",
  "key13": "2qdyTTwf3tCRQg5djPdTbQMGqaEJN3Y4pQ3VygE6kaowW1HZBZzRmmPfBAPm9JQzR9ijYhvV7gSpQaDvgrWFWUrB",
  "key14": "GPsNcmYcU9vm8Pn1Pu8i7qjEjSUdcjJdd9cffR5U8dNEKyMNRRZi2kjNKDSDPRKiG2dn67M3PcFfJQVFZguigDf",
  "key15": "Crc5g2ezakimPpT37Z93E1BEqFMenjvU4eYJQVDqkyMjSmRPqtWVfLoFMSpvyr9jyVBuLcpzaGbomDJPe4kcqVa",
  "key16": "4jWyiht66jP6oeXvqd9G7BFPe9gMABrgk7F134Kq2YcqFGtTtX6haYtGn6Kz4SKQZsYZb6ptuidGdoEoTxZ4VY9x",
  "key17": "2oopHb7NrkzL7gVxBxg6FukSiukcoSViAPN9K53VxXkijpkF558Hvm3s6imw4UFBdASLmeM65FjZd5EpkTCSMK94",
  "key18": "4aDdRLL5kn9ngB9Gud61FtiPR9Ltz1s5ygQnwS7Y1As3qg4VKHbnSNynT1QPf6Fj9dX6j3K5hynmQJiReHbSSGFW",
  "key19": "QbqeGvpgqF8C9ivgaPpGXsSJuV1iSLsoN4QC2UJhSvy5uLQ2YU8GFPJ8GVsykkcesYs17YYrkqBfuTWRYtSdeNw",
  "key20": "5ohPxwPdwMzWCF96Aap6JLcmrP6y9PAUkimDqNPj9fUHhr6TjM7ngfa5h4fXKwL43NDXuJKWgzfGmtWJ5xqgVZrH",
  "key21": "33EzqP15VWcPrYGLgS3BN9Z5wbd1nyAJTaBJ76HVyZcKAiGThvXJsw899qXmsqaf1aBMkWEWA5HnSUxQMCPJfL28",
  "key22": "5cqTCsgQswB32LGbp1ayjw68BWdFLv7ce21ptsyrVWt1oETF6epHMBm6wPvR9Z32Q6YDFy617hd2mwo3HdYNsm8p",
  "key23": "34KmLTckYksYr7ykGc5FiGQgWQifqXjPaB4yUQwipkF3nqXxfzvtcbUvBbbMReu9VgUEEdXAuCydyxv291nrhHP5",
  "key24": "2xgFffyjbJQxDpoy6ggo6YZmEqtSbYox1SRff6D9uLioUUmYmHAKiPyLrtQuSLoJyDXG7v63mELfxhDx9dQ35ytk",
  "key25": "3rSxKYkNPBjptJAviGJhyAMvgXHZchrvhCQgUwh3VbnUCPCd9sxVQXyj8aFqSTME7MLsX81R2zUTeiCdLhiyH596",
  "key26": "2UbKH98rUyZnq8KimG8oMY8q9ppJit8nFLaLDfCWAhBqWDmN7t5HreKQ5R4a8ju9MUyynTk2ZFzsxDej28n1jfFh",
  "key27": "yjiLmYC1VQnGZin4U9pHVFrX5RQpceGVPqihg9avfuBXdNQKE2HFinpv5iw1Sh4Zf4S44i1ncbF6jDCKBTEdtue",
  "key28": "3qLF6ao5r4uraCKFpAPzky1ASemtqtPmmbrP6NHpD8EgJxGfZyBLHxS7ptEoGEbu2Qs6DEYWYZCE4PLhE4GAEpap",
  "key29": "3acA4jve14TTXhQ2hp1CYeteRihV3TursbZgQBM334vKAY68ThMwxHjYBJEkX6c2TfKi96LW1kc6Hp8DZQcTWbdM",
  "key30": "SsCEH8K1YmKv7xnoi3MxWyxtat96t34jStisggvXbhwXq6vkRfhiFwL1SCf1cDvN9i3BBpSU6xQAQsuKUayFff8",
  "key31": "5U9ghePihRdxdN53eeFvypbwpP4kZRFyxDq4N6YbkcwPbkBUL8uquGBzyT5eEkeHzJa277kVNtbnZdpgXVbzifo5",
  "key32": "52ghbbumq5qK6WT4CGSSMriukM9RQ47xpUKzox2avdtCe9NbFgcAZHWGBoT75e7ZnsvrnMBuma2hoTiLvAVRB6um",
  "key33": "3XjkNBiHvze2UbeEEerVjkSUxDZTRhtys4tMorWALSDd39DYT2NymsMEzn2UVnkJN2E6HjpgSBD4EUw8cy5NvpoY",
  "key34": "hLXuyAxZ2G6US5HwMTtmtSyqJDLttCZvj2T6UGawbdGaVaJpqwR8wUAgCV9t1E7LZXapND5VjjNCs4UEH6HWaAp",
  "key35": "225aQHojaW5RL7j83aSvUQ5Z1RDC9ScZVj7zA8RFg9Lmo4pAAvxsFu3ymgUh5W2PVcLYXPJdZmGSxyQSrVP81Xqt",
  "key36": "3AjckV3gW57KwcrZcigNSwcUGKsqDzkWufFtYJnMAk68HwaHHyzprMAGx6bjwatCVb9XgA9Vj8Vxjtqb4ifS8YnY",
  "key37": "5pToW7AGmdqCBm9pA6DVfcHxFn6XCeL7vRUn1bHzfUzogwC7nCvmmGPQaGE6RYr5rNun4Ck73ovBqbgL5SHudGs7",
  "key38": "4tVw6pkuPN81oFvzLFrT1YK4v8dTZTZoRknczqc1JyM2Y2ZWUa523AEAW5a2rkhXYzdDuRFx83haiAtXQYM7MnyK",
  "key39": "5tNbSszzxQnvrHCcKFDNonJCnayoVb3kdsrAKADUoHKBWtnC5vbhA7xjQ5QKDRtksEHECZnq2wN9RhoK31BXjKja",
  "key40": "MLhfG88ZTsubEVSqw8ErzjAh2X65DiUrCGRND4Ap4TKVbxBTS6Jd6fWKYdvbEqgrsxzp3pnH4MGPwk9jaXCG36Z"
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
