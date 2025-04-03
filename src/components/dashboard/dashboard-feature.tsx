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
    "26SfSmwJXpYoZT57Dbv7WDC7gmjBsz6zLfsJ2xmRw2Kv1gjfdwFCeZJXkaRp8Di4MxxiH87rbZgpfJuVpiPoN42x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6adyFxvPKjYb1TADfxVR1yjTaRLJkEvSjT1hZmgqYAa9WoahwNfHZmT6xRZAh1rn2iudSazrdcwdEm16AH3Z6LT",
  "key1": "3YqwAtp8WdZ2TNSkvSbpkA3VWpDWJyPZuTq2kXHfSSb5iPtyXXpG2nE4hytazGTJ5CDaUAp4mf9omMuDzigyat8c",
  "key2": "2J5vsotR7isLKVW7A2FMrfRR2FDkqZaVMcRxR2HTqxCCUB7w53HVSxgDKKGA9CUGMwB7dzc3GmcwBy3fTZ1dsnKm",
  "key3": "xSLnZ7wwK5NWk8sEHY7BMpB5mcjVD21DCjFFW6MQU8sk2MB9a6GDXubxSsxCjQL8qho6xT873r8SsHwjAsfDSci",
  "key4": "R3qv8U5F9jnnh2bMA2E9xZtDyChdZkniE6X15usB7ckG3yF7fNcntgLXwdEzEFSmJrwjW3ePyEtZa9EPYotQDj5",
  "key5": "4uCy1EKeJuNnmByAuZ2jy6vUzdbgZHaFwdqc8C6hoCpJkCtVsTzHzVLpLRrVP864RK2okYu8ALtnCNZLVuH7PeXA",
  "key6": "28J57U5NbBsz5RVLCNKNf4bYvSsFerYrPMGqFy14p5RRxQFGMCU9VdKyKM9FJ8Vimk6XfsRrquATosDASp3x7F5g",
  "key7": "3hCegMGEkWEuMJ344uLQ4vdg6QSJEY1Hf7jWeVQfDciL4Y76xvoJ3tZQaovwgyR1uaweEKYXMqJ8gCFvqsVoP5Rd",
  "key8": "NHm9XTtdEuyMYuZqTqDXkm5VfeuNxDQjgN4CLhdPFdQz7tQq6P5qc8rZhg9HAVMfV7RZtERA9XiCxdjTQzmt99a",
  "key9": "5rneA7kZ3DF2zmjFJUzbzKKbgvsGFicAdJ133VKpkBCp7uKiaezVSTxBAeEfCSJHCYerPZXNwYW3QxhCPPs55BEL",
  "key10": "EvaqG7LGMHDJWrhgapPf7EABbRisVwiMp6pNKutWp5jcZ4Mzk2ZkKxFREgyosvRUz1kW9AmyCtBCrc7umyZatES",
  "key11": "2XUA9GpQcUTEmits5UzddGjWmEBAzWGBfoYjYEVNqfDnNn9XRpCVEHMLBfVEZL1ZvtBjdSGZ3BFPQLXFwBNhB3jC",
  "key12": "5JiCfw2NFEDtfrCMXmH4DW2QCbxWZv2P8PcKQJ8u7rUNhBsihDpqkU57coBS2RPgazCqikichuwFUJvN8E1fb1Uq",
  "key13": "5TKFtLjngCEut5JkQWEihG3yozTk37LG794J4DkBYtV8dxJjcWWxt56gjogNaqdX1hZmrcFa4p6weL9hsgBH5mFg",
  "key14": "4X22ugtcDRJpLLNsU1rLKEs81uPVTDpfSBN22pq1bXvoiEApphA1mW38ZSoTDJqRj6J2LJao5zP1zsNYmaAwhRjA",
  "key15": "5a1CjafEQRz89kBTWxbZHiQTuyGdCmmrPzssSs8Le3AJ6GEX232b8zjkv2cpHxWsoGkzPyneY7HRRLy9tw5EM4Ks",
  "key16": "5ZDEWuE8M13ERrgoBpQiotdC7C7mfUVP99QN7nZ2N4g4ET5k7soWA7ee3wmv2irs9z2WrAD6oUMj4LDXdpY2bWGw",
  "key17": "AREmDiQ6JpuipDqihLaLtTQeagVj3EkDKJ4WapfNYe4viY42iFpY8MZyfGHh1jfeaqw8e8PjDmKZ1Y435cFQkEC",
  "key18": "5xQGjFYtcnwdZTtdXwdwmaQXdqBaRaNuqx3azPjaaAtivjVWgao96yJdQbKSxTpX7jSJA4oYAx7YH761VDBYtM3H",
  "key19": "68NoNFEs55TjvTyrxzuJCyRXVh7WUtTGtcHMN61SBThUiv2WfKCUFFcYXSw6xZRWuLXqdSrxPHBNmrmPUZkaVbr",
  "key20": "5dbn7QQnz4ktscQV6SmWHoKWAGXeFScFTKN52DgB1vu75kSQNtm7gbgG9UhfwqR8kFrYLnGFEmbKhkeALZRATf8T",
  "key21": "5AnkjpEqv4zGcnEZgcJmVZi37Z4ar7g7WcHf5NCcUDq75ZuiuvXexjz2EbhheWdpoMjciGsftQrMqNfzkEGPbBWN",
  "key22": "2DTbvMotJUifUx1u1Mzy9kojbPyBAn2iqBszeEpotiVJ6g9e1RT6EVb3MNLSysPCiyWKTS7Rk1Nw6dhTRwHKKrxS",
  "key23": "4exMYDN1itmHcyQdZviuLBTkQzbK96oXsgKUTfj9EhmqVMjCNmkhTUiBLL5hAeEmMEdC1SRpMKcRVwX8gwWVQhcH",
  "key24": "3VtnDvgjvg7r7ZdLHg5GC1NMFpQb1CpFqhX2CgMaesh6DM8PA6Er1BfuNK2XAJYwp483UKcnJcdiZmqvdKXFFgGQ",
  "key25": "3ssDkm4fCwU9A8GtTixYwLSFknoWfLKt9jneYKoRW2MZcLBhC1u9j3cF7dgq1odys93UEmXcabYz7PoLKaTBspHE",
  "key26": "5rg4Hd9GT5HcBWdWPELiqLE23Y8kCz9HNrJmeANMCSYsfvNApPLJzd96vwo2mzFjsVchMYVzKBJMygzNCx9d7FPY",
  "key27": "KXyEURgWhCTstv3J67cti12hJeSmJHHSzU7rMiqcwTvNzBdPnYKgi8fs7oNESsakykUh4CPpeiUz8qguW2c6BTv",
  "key28": "4aze21fg5QqhYAJqMT7Db5Rwc5tHXNqm7iNhrjP9Nk2miaEGBFkkgB4DoKxpsfRjvkqF6SqVVgToMT2PfA61d5g6",
  "key29": "4dqEHtof4RRTrvgGdJssbHyaMa4hNuNmh6EWk2Tv9MayKYGvr4RqT8aTNVQSFaMufbZN6nKSy3hBijnXe5u9AL1K",
  "key30": "2BjGuUEo65PHFGDPGzu3LrFecpmB4sANvc5hsBfirYFD4Ux6FF6JAiNdgrNm3dfX2PzLutkygBEuxKn1ppSgu3dV",
  "key31": "3DwJHfg7HELGKNodYb8wZvvUiYYzYL6JyXCcTdfsQn63tusj1Sh2yChEzucYUHB8WmipkCxXG6QRUQLKDdh3kFdH",
  "key32": "5YW9AkV5NLtemuDVCf29jPgQ1oH9dWNzFToFmcxZx2SJnWVHEKmPm13Szrxa8NVMnnHcd7Kf5g8MG1EtpHLvNRdd",
  "key33": "4HtjZvDEUf1VeTbhbctNMKac1zfajJz8sHXmMcoGGvF9orLxzpex1uyRW89iXmJnYmZUMZ4bU2cv7cpJWzYqXmdL",
  "key34": "3rGFuWC9FUDP86DFt3vb6qLXnGy3re62bRYCK2wfqHtb5b4ywA3wuJGFjNVtRthTKMke7cEUm9U6N4mZpZL72hM2",
  "key35": "WerhxpgEbMxbGZ6iAAQz2F7g8Dk4mKiydtN8mKz9C2xkpTFdXazSn3vXBmCEofzY9pqR7wez78qYRo26ih23gmK",
  "key36": "5yBS2c7AerCaF7JoK4RLT85rK5m86GwTTCLdoY4bcP8C51fRF3nXBDJrwpDtWJvUspvY8cTB6UQfe7zVWreQM6Ru",
  "key37": "129N5mMRUDgSdHrRYbuwWZZZW1CePoo42ikXeTbY42kU9neFCwU2aXgHVWUFxmHLBbrFsxSAybNhXxWro2Ka9GsB",
  "key38": "5EJokhJz74dBD2hyKXnLUNXm3LpSFnCcz28Ts778EN6Z5QLpJjRraMEG8JL7fvF4sEgsKfBeFbUEJBCSyU8XLik8",
  "key39": "4oAm4ptGcVx6gya6reCR2SmLCBYjaEuwgtEtEPsqKNAkGoik6GH9k9VZnJqiQm6dMSaMtj2pNPxdqdcNXWSJB9id",
  "key40": "5daANxyRmqowbnkZDsF3wdewhvi7C4WgcHSoXVzk61243YjSiqvysEZKiL87ZG9HwrCsvb4tBaGLcoSsJmzY47YJ",
  "key41": "5hkGDKYm3fnK1qwdkpTnjKHFz9fRY8473hWamrCvP3wBVj3sgJhumbc9gzCCsTaHeRWexePRcH6WbA4v3myJzmKR",
  "key42": "59sMZxf7swuUZXSsFmm9qpm36ekQwc7C83da4DCVmLRjaP2sQg5oZC4uhkDpm8BRxsTFb7kJDgdLbfWxbfPqSogy",
  "key43": "3udZ8ZJVB4RqRcCptnRLxbep8p5HZyNxpg68D1PennaSsHtJaD4ymj7sps1Frw88EKd8Uyq6JV5q9KD3Efy2RJML",
  "key44": "4e1AvxxV7QeQrQw4vJW8wguntNBCnhkVCEMH5YZs5MeMbtLQQdvG6ZwE78ggKXAzCuwzDCcBZoJkJRLaVfu7ZsTQ"
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
