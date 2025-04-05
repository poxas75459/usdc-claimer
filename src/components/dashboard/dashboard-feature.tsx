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
    "3yHAHyYDgKwmspA4tnaH1yCu9dpPH4K7pyWtRg9Zp8phbjcUopyiu4wcLrjjcNnv6S9oDaUpfa8kxmXSmsKLCRv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PnP4Vtppxvj94xpTSWoibTNT4Puk4JBB5UqRv9cgvg6PJ1BXUznjjM4eNhEUa7tyLTP1sGoqgdThCXLJaQu4Q8J",
  "key1": "3oetZ9d7T3aNdkmH1YGnxiwv2wS8yAMqbrokxS1P4UeXZAHwqfvvDunfgxv7dCT2aDqnSMuib3JqzzwmeVNC6Zh5",
  "key2": "TmQaCkuSwHPBGUUYX5simQCieGQyTxbuqN54VCgxwVSQXjLgB6woadr1LoKJ8ME37qshQsmMT26MCtjzxWaY3FF",
  "key3": "2rTA5fHqMguxkkH12U6fvdsvPGo3ATCY2CUSbxujUaa12VBmfidbRWT9XRanhnj7GgK6HEWVPqcGQUkQN5h28CYa",
  "key4": "4K59iTjggZeT3Fxv66sBe7y7sMF4sxowZP5FUc3371kkiD5awEnJMGWp3JGk7sD9BrpcCuofA3hA234rMXeb2dua",
  "key5": "3M76ksTERVgbX172pxAGwfMmxV3uWnS8a8R5UsQCeM454ghA4gaD2M7ky26AcbYTrQPx1QcCawjv4D2ts9DfrBFY",
  "key6": "4MbvhYqgjeBTy8Byq9rYwNVC4ow6oKkyYqdhcKxMae6aXQNkMqP4YQhPEvxbta5g6qzLLum9fCvn7mMApsmcMxyC",
  "key7": "59uwdeNc1HuVJPD2hERGSGuLMPGugdXZywDKboKqmxb5Ef34VX4Yw7QCJYA7gcuhX9MmpAzNVtTaHiMzo3qhZaZM",
  "key8": "2yZxGqab2UMm722QgxskAMctpYSiaUe5UEEHdkksqxNDk2zWc6eFiJkk6pQ2oR4qdcCt8ixCnLogRCR2UcarvJWt",
  "key9": "2kG8xWBMM6f7etP9CSMXmCp7cchtzKRT4Hu75qmJDrDsHNTxnyQXFQxAGW7Y8Q8uBE3NSQ9dbyY4RueEwMY8Ug76",
  "key10": "2HyCnq2UWnU8Vasom1tqesGye5pZZ2LvZVbN3kZSZdvU459Xrjvgd61Xzxu64m2cFb2qK5BVRpZ9WC448u2y79wq",
  "key11": "31cwkXFtJPKtrn43FXijvExPGj8EJYewaaRQ2tQRfBXwkvBneogyahaAuD8vWwuHSc7YYQyTZ4zDoguEUvFxpsHN",
  "key12": "395MX5GK2wz1kFixuSxksY5jST7uDGjQCuCiNcFTXJgmWxuPwGmU7PXFvUHEi9uCbsmvDwYB3oaS2ju1wSnjCc5N",
  "key13": "4q9huKKWfu6izGCLegAE1FZiUbd8g1DjmB6KZSNNk1JQZ5GjJGMCQWe4h7mZwrRu5iH4to6EcGDqPsBViBsNCyid",
  "key14": "4iHAMyKtmyRmeABMdNuboY3MELcK7vRgZhudQKbsLaLAATaRQVddG97xb6tgaarQxCURtgNF7Jaaek2ypuN8SBsZ",
  "key15": "daHTg5e33CTeXipBhBtkfYncgAiUau1HCSwJtqKxQAUQh8A7io7FZ7PCNowapZx1FE4YoWRPCNFt7i81GpeX5B1",
  "key16": "5Fo7pgTyLGnpV9CbZkShwxdQrLunKNgLH682GRyJZC75rD9bwsHL9xnEJ9tGoSzBXTvPf3ZpmQBnTcQBXGp8csJs",
  "key17": "2N4sBGSd5PnvYMLYN3avFxNwidg8NWf98qgZRukhMWBUWcBzfcbs3UwERbd63z2zKucbPDwyfWGvkSX38CaBpdUn",
  "key18": "4PmB7UKmg2xsZRD8QBVazGd2Zpfe3DbPSShBDNp4MhepiEuJsejTjQ1mscmpX11VXJPq5RwxFouU5hiVqWk6GzYW",
  "key19": "3YUvKVdtCknNa1M1iWUT6UzH4GaBq7nAURD26YGzUJLySU6CxMxhYK8JAERkWsuoZv97TVF93ADy7n11xufHuSLz",
  "key20": "YWgbrH6wWYTPtirSDz98UGAxqvPVL5DFEmJ63nRLuweS7XYJGNAR8uZ2CtUgkbWYqmTDPtSBRMgUANYD9dUTnjr",
  "key21": "3kqfbZMQFziGb5zPNfCHM3kYZcKqLQ8Nmn9sbvXZY8DEhbXHyUVcwaNrf4axqbhoDVGVWdPMF2jmAppHG6TJb91S",
  "key22": "AnYXbpjLZvdRHivHxob8ABBtuRtYFXxkdTkgGRAP28nJCsF3QNfEe4Mcr38Hwz6GDhhWd2D4GuHy77WD8WesrWt",
  "key23": "2VVNwAUSjRxkRDGk6b8PpYgWYfUMeE6hxcUBwzFW1mQwKAVordhqGZFH1aUQvPAUycxrWEHW6vEK9SEyeok6hkUh",
  "key24": "3S4k5T59VbVBfGiLX1nXJpnEYH4w7axegWcxrmeiPa869abiWVR16JFyVcu1j4XXf8fnMSn9FVbeyZZkATpiBWX4",
  "key25": "PiPzuFRCayB2uEz1nQU5Mrs4o16HH9ZPxec6pBRgGFys9MR4n2zBwdSVcoJ9RDA9zQU7z7inJ2ffzsYwexeadtf",
  "key26": "5aiCPcmSWDKybjiiKyZCH9Bfo5NLe2kcg9zWVU1EFUpsCr196sjmi7JXYp2v6e7YsN9Bd9UBeGdByptLjrfHuCVs",
  "key27": "3tpasvWuPa65vQTZ2uXAGFF29M5Z4iPqqL1p64a9xMMk8MPEmwDGc162hMUvzH3cyVoQKQZ6XipfpYMagD1SwYkP",
  "key28": "2HdQLhbjkavPGaXW39xvPJBwnzEs5VsPDxXwnp4dcg8zd3ycx7tiK7f611FNKwbk8GgEskZr1sopeH6bNA1NTD2X",
  "key29": "4uGeyMdfLYvyzcNvTQLYpvUp3n6m62U9ECqwp8kkg9JA7iTKSQZXTmmCgjZWbM4L8TUWBo9QS7Jik2Xg6vSGFoVz"
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
