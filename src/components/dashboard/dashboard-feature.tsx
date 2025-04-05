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
    "7QAe6yEyZZ9aFcmsh52V8mQThPTZ42tfkXFGYtUtd4xPj5BgRa6ToHFuvsPnfGuBfjwEFwBnK5WErDRDCRr3S13"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wag6p2aBUGKSmekPkMn4LetWjh98qPM8qbGFrLri7pGrpAPtK9c7wM1aWEFhCfyZi49MUSAmPE9Ns5yV2uP88co",
  "key1": "5yftXB8BSu2K7rrKXB3zY5xU6CKs81ULdASQmAkdotM68zSFr5RmP9nayP9Ad5vK5KdZDRHj12fxzqVQG2wem3qJ",
  "key2": "9mc5SgKQ92v5wttxqrVjtVNqS4yjj3XLajwksZn2VSGURR8zEhq1w7i1mao2pakcQ2aKim9vCy4xudk8EyanvV5",
  "key3": "rFXU6MTr5iCFUkxXSiUMndxx1BJBjNhQLswvp4kzpH5HascCUPPWy8gsu1sGWGs4WFk1ZhxszDFkdgEnPtwh9mB",
  "key4": "433sM9fMhL2xqxELkgwLtqCwcxCMW7pNoeeW2p9LtrPdha6CVPsxHQK3b4bhPFLRgssi2ELELHLuPceafqtm5xQQ",
  "key5": "KcxHvhnTV3qeGxZnTByXsfZtodFdYVzrqQNc6KbzQB3RfYdTRcphsNe6DVG9f33n4oGTynKq6VdT4hV1Jdt4G15",
  "key6": "2CNXHfaqaqwSaHQ5Vw2ie3Qb2QJTgHQcTXLsU9dUu3PEMdu28MYaJrzgwKZGSp7whpWJHnkougxmzzk1piSJZDLZ",
  "key7": "3NC2A8n1JYYuXg2qhtyMVg8Gr2JRZ7ysqSHDr3GQCr2MsRCdLDzQ6SGSx1EGVpAZBCaMawAz7CggD9prvTdtqAGg",
  "key8": "5FsK9zSEdzRDJc4ioRYzPURgtmLAQQxGm9gMMaGYb6d5f1iYa6KA3J2rEKbn8j1kZQZKt9Gahaw8yjyzJPAhRMQS",
  "key9": "5iinwfdxp8DZRE6FGswhDcTSqcaHgGQCfVGsv2bZ3XhGVdVpVsWdXVNUEBBeSAsrs3cExwFr7eoPft5s6UKDXYmw",
  "key10": "35dhWhtjakwtSei4BEgVXPK6gi1JkiKAdgL7HZJThFYTzdq7iVmAdTagDVZHHh7C6uvi9YG6WVnqyb8wod7vcVCY",
  "key11": "2SaQZSkL3tAJXy4XWcPuk5WnNNVDfqDeprmcByHCYXZcp48y1S9b5e2NEsSKXq69Q4MPDtR6vJkc1TFNz4zTYQzL",
  "key12": "AZPc1fF3HLAZpiFA8SuM2z94C3H4AuN8vN4dsDCS5xb4ybJpW3ZJ8kLJmWRepVDr1snyz3F6YwSrj7JXFT3SsSs",
  "key13": "2GKw38G713nLXfU4wxQxVH82MAz7dD82YG751AhTydsacneRPUk14WZseTThxATUDo3jeRuc8UiXDYEDPpFGUUJk",
  "key14": "yrXtoxXjTmCA5SGYtFoLLzeJkStVcpAUinY2YgC5ncVi27WJRbghyeax1A3NQzQDumq7UBGVYpZCwjV1pDGA36J",
  "key15": "5Qdr8T6e8zahtV5jygYGLfr36XLzNK4oGp4BCp5aJnGhXLN22TXt4PQmzY67fb1TmEXFxygecrH1L7B4WHgxFw7c",
  "key16": "4xFiAcCPxiFKHSgW4EeQXH2Y8pBtDTKJTgobDFjthui3bUrfWFEUNeXR6YcSxfgk9iAZwAYdtekbfygCrpuuh6py",
  "key17": "57gtTaWHzNGeFMbUonFaycZ9jwqvC7YN7fXHdioRpD4wwA4TDGnfJFBuqt5k16zeQ4Uf3tP9tmsQvkRMhZF9g4QW",
  "key18": "GVSL1eXBMqwrG5zVa2RwwAJWrGKX5PZ4pDZfJqbZ5tpvmfMzXwBQSygdsySMkBBVz7z7Lm9VuVgtQnN6ujQ9nNX",
  "key19": "2Rw2obuwdfM8rx4QnKuUKWxFRKMA8aebKg5TVffq5uYYeFmZihJmBALYx7opPMga9CqToVz24Ttn9vjuYP9wS4j4",
  "key20": "4XXxVZF8P3BQS87x7SwqivQbHHZhKosx4oQtC6G4ABEQXKqKDgPnFdjwhf7eJTaD8ecDKMvCqnSjBkC8dyxeLHBi",
  "key21": "4UjsHgbcXULxhAipKcL8dB1DLUyKv5gKtVkGYMyESm9NVer1RvZmrBWBhbs47U3yLq9PXqc6W52SeZUHPmxucWPs",
  "key22": "5KXnjYuUstrAXv8mJU9A5ks4HcCDeNsCpn5rP2y8fK1dpSKYVhCqWCqj8tqCMBUaQYj88sbZ7KjPjjqnjxeLFVcN",
  "key23": "VrGmJibZSTFZSgxQPqBaCsSUGN7c5dR7sFfhPyajNjkryoa7k1RTKsEVNfWr48wxNPboet3zmCUVdXoW7ETp9io",
  "key24": "4V55dzqcjG1RtDJPKGymYpatviS6HeeALSpppCPrK9SYYPoiTU2M24PLCR75p551fwYPdnnQS8JEEA7arDqHEhu2",
  "key25": "5hG16HPtvz4V45b66tu8mrChZrWYJMGq1yh2AgPmraaAaQd6u2yMsGDbNtxWX1SanbzYcq3jehDbH1RyKESf5Y4N"
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
