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
    "4iBVYighDKCuN3SGwTp4gwwHL2zJVdaKMDa5Rq1CHNVPay5MELHbwb5SfCCXJxqyy2KmfWr7tELYjADJMUY7icDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z1f147vG5dX2yyrFiGTykEYLzriKuxM3sXV5VGErPx5EumrJ7KkptvwzR9TcG2jQaJK1bdHamh6eaBhh3VKf71m",
  "key1": "3uT6kvjrK4ubA35DvQ3kGJHXykyG5FvRGqJNp8YzuUrfPNFvvKLM7D8LRB8vjFGVUm4D5YHEmz5y6oimC2YFmRQw",
  "key2": "27jBxWbfo8vdH8nxd1gqxXhk9JBifbk5EGfgciok9aPBus7Jk2SPjCUNFczZbsncfMyFtjW8QiptamDRBFt6Yg6Q",
  "key3": "3KXejLs1AX4pAssHSoXkaVSyHg4mytXTeMTA5Hm5ZTP9xZr4dkcxSnbW2sSoS3xdanucast6vJiVa4RmdmJjFNh4",
  "key4": "34qVt44UaWRE3U7YWF7zbP4yr9DU1PypbjoSZeTzxxqhUTzufwDouT2rZSNdzujt713m2skKCkjpiL7moVdfGx7W",
  "key5": "mYVpdmyNrtRRrGh1cLT2UpBsBCjEErB7ABX2a8hae8GCvJTbVpfVPoyCMd2SXY8VZu4YEGMu5kZEVCGMDjHi2WH",
  "key6": "4nRaVZzYvuQ1k24wuJWXbNKXv4fB9uDpScE16ZB9fkhhvd9K2tpdqcrPTkRDoBr6LoQi7uoNNDLNpiH1XnL6Vn2F",
  "key7": "2jK7uBBXejPLzcbupbFSaNqBdBmdVgVMJB4ppixpnSz4gzN695BgEhuNa1YYkztJrgi34r4TNAe1qipETwQ6j2Qa",
  "key8": "3VkqkE1NVmqTUrvdjJaWBipWXcLJwoUzYpRJvuqywrs8NDG5pFxKDVHGPpUiEzokqEhuNRxousjfmXUErdALTuqx",
  "key9": "595pMfnyf2P44XEpEh1bdSsay2upp71S5DnsFwggMECTY9ocBCihbBksq9E4XhpXdifCRERuM8NUcRqy8LB4PZqM",
  "key10": "4ksKoHpv17GYuFFqPEkkussWsY7PQnEvjY6JL4uadyqXM6rgG2PLxECEDMzdMCeZenL9ridqcwphA8rSpsTxzYnJ",
  "key11": "28SMuY87hRRBLq8DpDs4BjoKPRuJTQFu4Dyii9ffFwpgDCUiDH16u3Rjktk9Cct7jRxiYiz2Wrcbw8TzPDyWZmcL",
  "key12": "XUm9tvfxSAkZHRexXNrydX6vMefSq47Jr7pBCFkBnYFiYigN8LEu9cnWjw7B938fJeyXcf7TwMfgu4vXGDhBm3N",
  "key13": "nMeEkiWrkfwbbuM4hJo3mjEDbzeGNV2DYohSoGLknQJYEsb45n8KpTAo4hhv8bEtVf8CHJFGj7kk2Pevrh7xnNA",
  "key14": "3fKmDf7XXiCGBDYoeXoXuBa2Ppq3iFK9QQhBUkhsTtdnQpS9PENCodt76XjBTgxS1CKEUWYrYttRQHKw5ZPCCyjR",
  "key15": "37oTpbC6tHdcePGW4GZPwSREv4Lhek8X5vUQGTBTH6inRhRowSpbxTEPuTNB7wsNYZdLH6v8ytHFE4UoqMxRhjZu",
  "key16": "R1P18x3NruV6fAsSPVKie7WkeiY3tq8hiuZTmfANU66whAFizcYTx8YxAiCVAojfm1YPJ96oLbqH1gV4EMHCdTY",
  "key17": "cDoTfXjPSqaDJUPrKyq9E82YLqLoQLBrBgrxbWK2gr5r68yQax8FMuCGi8iAMJGhAQzhYcxMRDWEThX55bBgpVB",
  "key18": "fK44AJ2e4gbUNyoAGkxezwtrvThsuj1R3BMb1YzqJB7CsrfWvkyNNc4fauBxR4myfhiy9FMnCmCYP8MvrYEviu7",
  "key19": "4KJ86P4vCtwMJmqnpxZ4d9YSrLAzbK6ATVj29zHTyoZoKm2C6ZqdZZxrCSu33RrvtWmSpKCw9eXTi5k3UzgXv5Gy",
  "key20": "3tz8mBMzUbC3UEXycK25bq5r378Xizi6cygGSGiSmT5DhgDB9KAYDmW3CHejQHTFUMaKsSb7Jfq4b83bGATvLgn8",
  "key21": "5sz1hf1BJhFBr6wiAyg3kGmWNeyBjkefcRKCLxhuhYm7TP2oTeVp38Vtgzue8bfe33hVh6YW52rkEvUcwGSAQitJ",
  "key22": "2hkHhuz9bZFVJmwTsT5fxrnVZ83S2DVJ1boVd7tzZQVgYN1jD8dUn9aiFtFNLPmZU2AYKoP5QeANPzc3pSWUUgm7",
  "key23": "2whvDY1yUVbJS3g7EEnHphGq5oYSZVD6Dd1xTw1Fj49sKCskNccKGESpqfvMpahcoFcJLw5hjjZz4XogDQfxq2ZJ",
  "key24": "2jnaA2HgU1kpJCKtyJLdajKDTYfRLLVE96eERvWMUefsCSdAYv2anZ8WR7iKS6Uk3xGXzx6Yxp4yHTbTLRkAttFT",
  "key25": "uMhUQQB8yGYeimdFweGyomcKtreeJyCbUoeGGenqy6htDtfDytgkyMGqcnwEgR8za7GaeuskHpsofKRwTpbfdK5",
  "key26": "5fq7cpPKDQ8JRWXafWKwoBnPJVuEDkzdkPH5J3crcuKQdHaqv7hbrJ2yhBegdejzf9MniaLdr7V7SEu6D57UPcsj",
  "key27": "f1agcfTqhaVEStsYyyKzWEP5pSfP5viCY5pRFUSmdcAcvZDFWjBgaoLfHv2ZTLVKJMWutWL2PxwoEVYxPQEZFUC",
  "key28": "3UHrbgBT7V8SaEf8WCohivUFTEscb9x78GHR6CQUhnbZJPGynoeoToEM6QE4cMtDkcn8UtvM1B1qwAZfoq6hu5em",
  "key29": "3aqXLdDR2iFgVjnT8wqc7Jysd2M1q41yCSFpZHFuE5S2S2tAuBoFiPLfNA5FvL3acrZZm3WUNpCrPxT3ZdGGcihs",
  "key30": "5G6wnXPZb88yJvzSNEeEfNsbDSKgBqeu5GQ3YzQZtfCqrcw2m3BcZhXqrESMy1Ux89amZrxGDXrrLhNfQgWhawut",
  "key31": "4LFoXnpVYBkDVFA1HT7uLJtxfdQvb6j84gruTnVaPFmhr6kv71fPiSv6pKrzrxT1Z52jrFoWRckS8K3yy8kgWMUQ",
  "key32": "4HmE8pYS46qmpVZbCBWFEdChjd9mjQeMqXbH5mYZaMj5SpRr2NmC3pJzqHiVN3S9igHgqEE8dYMBQgFBaebnzUMR"
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
