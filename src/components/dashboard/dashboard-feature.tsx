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
    "54aq3tiWS356gErbLUMmxPH3phxYs3DQC1zQhgKfKpNdLKpPsiCfgA6gmeESJWHh3ogRWkn6iXCvfbmPa7H16os1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bJy2FYbE54CAvQxYextFDr2q8dRgYMSxivycyPNAnqXpkye6kb11xCCvHtJZ41cA9T8JKcSzkpafpTFnnDud3UD",
  "key1": "4i71YCL3wADMZor46ns9Q6WYUcqypWv8ZaxMpHNvQMV6u1RTKbx83vYhU4k1anVYvLv8GxGptW3i7aWZyR4L326N",
  "key2": "3ez4ToE8YqK9H8LWuuqv6vV1hjGtmRPvnfZAsiKk8aF4qqKjEw92vyqFbG9PMwbCEiXRXs6aed479mDphTxMQko",
  "key3": "5oTMwpz5qEWEpJ4V2sLBftpdNF3RgqR94nEpppxh22mZ7gYarUL1oy5F1dGmR2tSc6ZoLYCvxKGvPiYRzdvyPmxG",
  "key4": "5picAafEuHVoDbXJSJeSH1t2BbgLA2epzApQhnrVAckY9euwksGRiCa26SNZ5x7YLnWeNTaeBbMvDDnwRsRtyYay",
  "key5": "5gRKLCwFpTTQsJFCx57pfsCqWv2h4r3s3aZS9JKfr3DSq5DJUFBuadAM98sroDtK7eFHaoTVp9jq1LkKVoGUVQQC",
  "key6": "3VheM3PHWGUgodpgSj7WkFNb5kQctfHCWSYBf8Dkf3eMqa4khkEuQZZTHNjUNrz9E6e9SXe3nbZYhWhFV7kBkmxr",
  "key7": "66kXujz9uQiSDTeHFs7PyRj8mWtHg6heMgqtqpXfk87An2SDcArMfYWJ4JPmcbgrSMYTpZAuUJehGKc4xk84Qc8Q",
  "key8": "5HDHe786fsn1Tb6NJQSPUHnVMyFQmvoWGQ1KU3uUex3NnLGx7qFmeV2oxnWjZ5NcwPZqDeeyy7MobWXAWt7dm1m",
  "key9": "3FKP7hX9YHq1hB5t7ZZRwYpNtivmH4SoYpMCPFTSW3J3Uf7sJeoHfydCYA6VC6QLKwV5Nug9kZZdxiiuKCh8vTQV",
  "key10": "2QEFXCYsLwSuiZMwM4AzHQrxvGdZxSfLwrakXSaZd1MbbBoUgB1D4xqYVb58EoPrCfhEe7fpzedt1ocucvdTLVg9",
  "key11": "48SKkrQNHyFJNzqdWjvTXxptzoDpqvL4pkPXov12QzMvrHd4nYWWxWCaVEeYukFnDfiQYm2YJAcrqKWVMyJQNFGX",
  "key12": "5y3PHpFCpFKfLCQgVQNxUwYFW4T6WZf4Cv9M4hHFsR7xNmpa77i51hczQrgNT11jXMuucA4vYkgLFLwYHFzaLkCM",
  "key13": "45FHTe98nncNV3pr3VkF4xdg17QLT1FX6Un4N8iFeRe6egwxkpozGzmTLvRLWTwuAmqBUm7gua9DRDuT75tJFcu6",
  "key14": "2RwvEJqRmvJnLp9B4tcxYYSkvRzLL85PRizJvaimzB6s1miB8bUA9qQmDaSfezRpgTuYeWADusSQrrrtPenjsUn1",
  "key15": "2XJnW7Ze1kFCQFUE7LKdSSo2RnFnctidwKXBSd37CjpDeNzstcBBH2FDL5BtB4qE5sGndozhxLH1xMn4FvcPfGeV",
  "key16": "4EKTkYUabD2hTDo216u7boHAqWZLYWdvHX8QgtL85UtJYkbNdeSJcuEvKovp13ZG2LVfFtpM9Ue6FRMwyvHjU7Yo",
  "key17": "2aKe6kFbeBUcXxzJwJZMvr7xFs9MmDgjFpNukrGs382pjJ1G91Hg4ntbeRrTeyWB88M1xkq45WUDHcjJux823V7s",
  "key18": "5eB8DvEAw3UnKWYa7jCXLctwexWMTR14FnR2b2UVqbSxXbAmVMEKfnB6nxuKoipU95DiPXsw559XjFjQbAjBZ6Co",
  "key19": "61VSTCCRR6yWWg6sGcepQD7nLYgWNvsqyRLhybdKRBZwP5ux48biiSpRuVFqHuQYsraXV32rjiBsJ3j4Lcur5ViG",
  "key20": "5SEwiduYRg4zndh8AzqWjJLNQwwQt1qrNYYiQVRadcjhYTwZERjdrpLrUdhEYrFcAEwGgoDcnowFVKEJ7abBopA2",
  "key21": "3kwpfwkiP1gpAzFBgNDLyTqDgNQxaQbx2dJNjycHdv7zCsT6MnsLfbSBzqN2PHje3grNVyTUFGcvxUQoHqZ8GZwZ",
  "key22": "5AXabzV7C9XK4YzAfrwJUPHU8ahELsn4wgZ8xnpKQZdPZfDw5LVMaBRVcJmSQCbjjBc7hvW5kWnUu12rbzMxj3sL",
  "key23": "4Nx71i4GmLafHGzyd3PVZTZjMS83xx3pcosyF1rTPbaz34L7Vrnr4iv23sboAmrKGjZgxJn3u2rPNoPdv2rUGMtu",
  "key24": "HfdrwRXhf2UJaYE89nuYd8Xy3ufNtuwWyPi6YqqZrdZF98tvDM7W8odDdT5ZJQ7TunoWGKWcA11h3aDzxeYegtj",
  "key25": "qvUgY1ioW9M3nwZbuJMpz3gq2ZBfBLX9pT25NW9Fqh7ayrKiMfLEPuHXF75nJ1tDqCCPa1g8oF8EfT1AH9ywDby",
  "key26": "5ifctt8RYEMLBjp8sFm7ruw5D12wwmcAEtTBzQxfRkudu3H7cqN1DgjMGgycSX8TguXndVqmfZyDN2NWkRC9zpHv",
  "key27": "5g2TbdjtJEBbg3s725HTxRrhFLtHKK7oRtGFingFRBVU8nJPxFBuG8bYMdqzJM3F8FVReRLaYmWnf5JLaLLLiJuB",
  "key28": "5GcoXyZAckBShGmuXBbSJ4jU6UYMFEBkf5GQRhGMmJAiQWgNX8vwJjZMSnmFPwjfmgErQbbYiPYwRScTU6FZ96e3",
  "key29": "3zuiUksRTmrDQx2PuhX2sFRzFiFbutLJUB2mZ7V84yhKDZoxoWkapNmNcGk11w3tftLv5rv6QdGGcSkiNCNoyA7D",
  "key30": "M3iERBJuXHZhFQVWGMTa6523hMokRVieTr2T258WafuQJenA2RsxuWWPc3NyZPJvscoxyk5hwGBiKAWX1f73uFG",
  "key31": "2Kgb65idW21X27griakizoKL86GtRtmXZ7aLDvPriUjpmkG2LHtypXc1hWGaEu9ikGeKk6VRjCdSyPDK3s5oeg4y",
  "key32": "258PQ6DSRDrtJJEaEWixJ4nLgCTmuiFckiP6e9RXeiXE55UZFD4BkTFQk8ri454cJi7KADXmuDvCqGUR9FxBr2KH",
  "key33": "47LqDQ932ZVNRMsFzUwerRprVk8CUpQcCBQjynp295ugv7rN5qDkyKyf7eL7ncUD1uK7cxRnkWPk6WA2UEXPakMw",
  "key34": "528gjgN6MFaFcEVaHM9pMmz6GyhW9e4TJKEbquMpB2wT1EgkbnyHJJut7KyU3G78uw9hTYzkUZznq2CUs6kxvKFj",
  "key35": "u38PJ3ZJjzSzrqWrgUT5NL5LwmvXPMo7KXv9FHfmKgy2MR33nJoquBLRCvpcii5RQt2esSwLYbifkcambMEY7sw",
  "key36": "3C62qQuWdB1D2EhTsD2uMPbsqvJEHXEj488ZUXfyQnCNv8AmzCcxdahLgio7irf5gmQqj4ia6KRXjxQPyZCJMSg3",
  "key37": "GK6LS6noJzgqbiiE4cfT3eFQUFaFURoxjmq76quJzCpXQwXNMkgGRLjaBND8uVf6h9LPUm18BxGKujZkWtVK8Yu",
  "key38": "QDGYuaVAyrX7jsNDzuMdFpivtwaVj17Y6au21PcusgHauw3AkLTUu8PJrc6pnjjzRXMLqWnngSZ2XxPJqhM3hSL"
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
