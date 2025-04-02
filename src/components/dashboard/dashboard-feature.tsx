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
    "4LSHPiSb26CC2kDB119YqLfRXRKLaJSuGSmkJ9DZSz355dYVpfDZKajjjsJwJyfSqzXCbCvAKGtq2imXtDXGxmtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HakjH4sF7zwYjh3n8C3UuVbkpycBvJRiykeQ4rrXfVVT1apdzC28uwGRdUmpK5awVCAKNrM1cFgpPbjTDcnEF1P",
  "key1": "2M4N81PfVu854VBaVRr6zMBx5HuqZB7XRAu5RnZWDZATXyLtnzZyX4HVoFLpXN59LrYqvKwNhdHKfqXwJBqoPiis",
  "key2": "5w3uqVgt3gHtmsVoPUXfEWW9CSNgk2i6ZVTW4QToHedcekqKBYC51AgKgztvwt4UyjWK1t7G92kc6KBfxFtLVZWL",
  "key3": "3kDQSKVTsospEugFivGWAFcggUZrhpHM2qpr2nbMCWo3y2qiqXvckqfCT8GrNUhN9PLwiz7qo3eU2udDWo6gBVrc",
  "key4": "4hQdLa6nzPuWosyCawG4dooeaPETTz5REXFW9Hy3Dmk9EDcsMTTNr3awPz8CiiNza3pGWpo9SQtckzvudnZtWuFK",
  "key5": "5SNijBaPj3ZGwWANHKVoNYFfVtQbEATqxViUgf5hdAUUE3oSQw5ceSFvQyE9MLYEUx4xnnyJTA5J9qsiBuGsmSFC",
  "key6": "2UAMWbxz6f4eAHP9t4Z9UquioeY8XU9pgxFUG28jSPJKPkCzkk9CrCs9bn6C6zk1PaBunZA6MJ3V6J5D4LwQAhpz",
  "key7": "3c6n6re4862Bq6jKsZhsAFTzdGUiiZ5ip82zZepGcgARL29ZEDPzUcmwhL6H591Bb1fdRPPs74hpP5k5w8wmEvVv",
  "key8": "46aMkmT4vXTAUSUUejQUyrYM85mBizGsWvo8WkMxspPkRX2dmRTAKvCitWfodwAzrfBUJ6ZJsdSmDmGVXHczM6fx",
  "key9": "qxxcGzJSVY8UwgTf21yiVm5J3pgTzfQpV68ngoJThK8CQq1t6RCdQsXhdLcFGwuaET1CaVtPcH2Yz7ssANN2q5M",
  "key10": "3PQRN6VRM57GZpYNiESgcXpwtRgFuHXbUBCvoZYkHctFabWcmGcpovNqeaiQf9kCtnE2n9Z9kmcMd6zT5nUqj1HN",
  "key11": "5BMq9f65aMF7GyL3p2TtUgecg6gtHk2SB3iwJYH4fgqAUc1GP3yfjkEGRVZFeYEnyYzA4XanyeiNzevoSSn5rHkY",
  "key12": "4SrAq6L3bynHNwTXSx3V2A57E6UabGv92TSSwRQ2NpvWCD2L3RAUN78N9bpSKJ8v3MBBM43pyLcTftKuybi3ceM3",
  "key13": "426mU9YigYQEkPo4eV9DHnpDbDgbV74Rrm7peWVwGyFMpbwbbLMBarPPJRmQTRacC36NFnhjBfdEbokmmNkhkfeZ",
  "key14": "2DRxc2PunYXEP6QQPv5H8NT1mo5LCJhhK1teFEw8PgNaexh9qEKJkRxetFmrTR18sy8AnExut2kb8QdZHtzUuK1j",
  "key15": "1c2CU8N1f3GUoFrXzcbHwxuRCboMdwrBG57KefNCNs46deAkZLWNXEcAdbtRNjY33Pvy4rLewtHbf8c355SRczk",
  "key16": "43RG8oZ78mViyCYaeNvZ4beq9RATFYBBFR2yPChpQCYWSF22bomyxMFgGdsgjf6kYye3vdesA1SHHpfY2M9tsQdX",
  "key17": "4bt9AKBq2ZVCNUGDgD9BCWd4dqKB3rQcrKadPTUWQge9HLa5G3Lh2Q9Xo13d95barqvqubiCXF864eXu3vaHR8Ka",
  "key18": "tdvhxNjiZiLAEzhxzuQ4dFxCdbNxrwG7R5Lki3PGhzEK3n2WxWkaZ7gCw5g6DkgZmvwAGSpYTEtMmNQTjugkX77",
  "key19": "vagsDNs7NXt3tbY5pGw9kDH7zhvHNUxt5vkX8HkruvQdFBzrukr5zAxngYGUcmfi2csr33FrT5C8TzgLXmYR5S2",
  "key20": "32ppCb3wmXkrwwobb4ck3qAep6eJxBd8WEraZ6zvEHJmBQvMbUf3yoCzRUYMmsn5GouRu2VQVNEM13ua3RsEzVd1",
  "key21": "3iqFzpvkrFP6ijfTjwyuKdN2cEPMquU7PaowZipZ3STKKbtFiG3x4WdPpDpLM58bFvYei8sSkSVAA7KvfiUJMvpy",
  "key22": "2zsZzJCVhviBnPcxaMvPDncsiLugQKcLLFvNPJpa4UTkKEoV1BMdDm1sB1JTGUEjKiGU21Kqf3c8iT4RcxZuUk9L",
  "key23": "bzKDFsowiRz85X7f6bVDZZG7KuAcMpxFrWZxH3pYmyGvLviWd5r9ZeYk4rDMDdx9vyubtLrsnH4faojee6JdDFg",
  "key24": "3itEgLUSVGvkbsjag6DYgZUFZ3upLuLzzjhNpji5hsMCewnf9qZN4pSWHFXSFkAjGcYC1BgVRbHfUfPBw1jJw23X",
  "key25": "5Le5T3zWRHEUhQgq2Tj9ADgtBRYGFmEF6PzYwkHgHDERyDvBVAqtjknpiYpjB3wjQDdVvWgh6VZTSi6aLQ3V3fB3",
  "key26": "3W62aPVLXkpBan35QXt3QMCwduAaijgQCydoUWskL58qUWTphwk2mXVXqQK7cTcGqgB7wUPTe4F3i28HfxRLFiwL",
  "key27": "48b61oRaKCWxTnDkwNaFGPnrQ9d9fwVAEG7hZk5wayTZVq2zvBceziEhuxAPbodYhD8W2BEw1YF1rtj2ZSCFhy7n",
  "key28": "ZrYDvtUVrPxJvBAZTmPaBeytWR2M7kA8TCzbZF4qg5Ch9iS2aRdJSiA9RLXMDrx3f85XyibXSrqKShJxkvwCLmF",
  "key29": "3pUC6sn25NKWVwn25GfxBgr5GBX4zxRqqf3wQkJwP75oxEu4GmFgeJSc2F8huZeE36ySgf3t81T74QCWiYGGCxza",
  "key30": "3UJjp3B5msP5uwwxiZBnZy6ddX6eeEBz5pEyA5o8TSWCWthPxpT3ZGttetBScMBT5rLXQ7ofBDUbpJoYbY8qKZY7",
  "key31": "2BW2itp5VkFqNK7p2kNPTL2f3N3yNvnKVyiLbowtR9a9ZPbeZGoGVrGqvwweFBWCGVYgX5YsLNvnMMmS8JmdQAWr",
  "key32": "4KQQTWYg3gX7BZHSetPGdy7P3xny5oqqxeTsDANPxAJUhpEBffLK1R2LBpP8jaatDD1dXzkwGANHTgq8PGyjnxdR",
  "key33": "vn2JKdcr4SVNmfmyQh7sNAx9zTAhum4zMMPzhQGiS9dGwzayH96yx3JJfVB4NDg1jFi5TjVLp2tfwdXSo7iQqz8",
  "key34": "43PatJizm2Z8efCqKMbZ1dxawvc7M7mMLtNLqgWMwMwyjg9qyD9NU9NRjU9oSVwFzuRt3x6hgR6YvdjLaNmFtbMc",
  "key35": "6425DCf1FnmoQn4yfcpnEQGTf45yhTmcq2o2cJzAD9Xhhd9P7SRcbMifRBjpm63nSin3y4BgPtGDE9LbH4ELQFKe",
  "key36": "3uTvyBW3zCAdo7feQtCZyWp2TSPCTvT4wEwVzkCRw2aSGKMSyqiBKXqyCha5ecZMRiBTH3uhHqteasZ4oK2Uc3wi",
  "key37": "3RqTSFRSKYy6QmeoWm1iYsAin3PxP1SBVrSPx2zwKKGG5xqGGEyPSS9XQyW1BTGc3jvqQX8MBNAebETkaTYkfqFP"
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
