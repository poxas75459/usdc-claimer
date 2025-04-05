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
    "4gFFp9fydodhDtLqHRdF3cAEtaSgVzRw52spV3CmgH31zhK2kD3VeYacYdrez3C5kqqV7ZD89RAQkSFTGWmjNobU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z8kD37ByRDftAoCX73kSmQXodLCUTb66WbKg82KSqzcP7WutVCtwhPkMiRcraSQTinXXBdHK3cE3bVRLv88pVXR",
  "key1": "2fQQ83wMtxQRhzPbY6tW2EduSpfMwUXjJJ9t4CibEAvL7K4rxizDYr5qqTYNKLsCaoCBgjwrkro1wqDbJAZ7xKed",
  "key2": "3jyuGeXEfquvXNMBMqT15NcSWTQDxek4P6Yiw7BZMoY6Dc4VExvrfqrmoWw3AuNAnQJacZZKc65WZscndyPacRod",
  "key3": "4VvhaHCmwBHs7bXLjLK5xQNGBsZCqJiDhwCZ9PzANcRLqxU1ZzDWcv7Wcr53oc33ssjJtTQPkWH5qerUPaeaGCw3",
  "key4": "2vDJmdLzLRQmuAiJR3ib4kmr21gY4TWKBkR68CyqdRtNExPZs4PRSZfhEu1n396er97UguVfqsxgVhzZSHjS1xyj",
  "key5": "3cm1t5tN96o3UnMLJRTe1UzLXud4wgRABMPYx8iPEcxAe7JiXTGJaZPz1JUVALEsT9cNVphP6ogdiXhNJD73J2Nf",
  "key6": "5QUP81xtzrWZwEGeNYBmtxs7zwPXHpZfYBhuno7j671g3KmwcB8fgpRVs2ECefuVZtFx9SKjr5cxD4E3ki5GUXj2",
  "key7": "3niFjQLVJy7n5YStf2TRizfnC92GQ6cB6uMHt7fJS8XXTWQj3mdmSVg3hYJdi3V9R5FNtNMgDuEmNXts5yVPUFep",
  "key8": "3SEoTyVJPk1kbKXPWCeQ3KZvs26FMBuGiMSQEFZotfB4ZWjkjWHkSzFN56jKVpYHdabDyKpMgUnqRSBaqN67dn5C",
  "key9": "ZcJiCBTHU6xgVoe9gYS6KcGmmEaK9zVWJPnqg7LqFU9MRrG2LTu6euULywXQ8ddR1x38kxsrjUaXQEjif3AYr9p",
  "key10": "4t3HzxfWpKqzE8ZTpP75hJAWsoa83FYzngY3EEwS5fpaUjC5kSbbyYXWK5jaPvmyswybbFBWUQNAR1F4TiGtgPRG",
  "key11": "67coRixM383j56ZqxMWpkYw51aUow8muGBGnJKRp4ouKJ2PbktRvFV2gx7j7EfeUMRNv3nR5BuGqxz3ZBeZmxXzW",
  "key12": "2qP5Zs3KXVaMuGEMXCXRhgGeYCoCWM7RYqfY9ifyWNRUcKfLgRuwJY7tb2mx1fYw19do1XTKt8k9QHFD2gMXDtKv",
  "key13": "32yejeMX9hMiaN3YHvQabiZyUSsVpuerus5142Xb9A7jACRJcd23ZHTEWm6FpjaWBhw5ngGvtdXhwLvvGHEsHbq2",
  "key14": "4PJpQY9CzSMLwYc5JGpWSsN1rFyQ3SLorb8BZ9P1B4K5xUpJA3KHbkboEQacJB87kW7Wa8o8nWXebZH5tnyXLyHv",
  "key15": "3ndRpxxJHD22MdQRGjhxR1fHViVrpVoCDLfB9FzheXbNsoSMSYuBDCiUKL1yZvc3YavspWTPYHXSSroECjZnTHiC",
  "key16": "51XNGPwNAzwec7tTvPhtaHPqsoQZYHjhss6M2DzBRbKAYrpAEuFa9odHVvYtM9yi4LjAn4ELVfiuEVc6QEb1Cww",
  "key17": "3qzmWr7jy39xYegjzEM8ed1CpNDJw7UgE8NoCWZCwNNKL8jb5xHrxFuyZnZ4KyMfH1gEopvyFGegoMJ9T7gxCTRa",
  "key18": "dPLh7xm29YySmHac8VgzgpKAZXCdGrwwrvfYYeEdDQ3JMJYKGATn8ARGDii2DENggLqtfp3PiUETpsCbDba3Y3G",
  "key19": "26vhUJYh8emReKmFFyR791R3FgjRdGH4XRbLqWQzHcaiU7p8WfZjkd68zzdMvSzr7xJfHVraALvnrY77hhuc6uD1",
  "key20": "5HBCSaioCg7T4xgEtWmk4ZZGSfFbnZgU9dvwQ9xe14b1No5bnifyTyqLab4MCE1YFGqXso7HAY5TPx1q4i6Bc26h",
  "key21": "67483WkK9LQ83Zs1kJ6vKfNCYaNtkaK6eVvuzD3LoVwPdohXVxakyfqWm3sceXx6QMJxwSiEBzYcSpTMPkefr24T",
  "key22": "41ThYU8wHCvi3nMVsSPHKTij5KqqFCjnFq5nUeUNTSEBzKCdkSUEASax83BEbaEqeCTQk6LFD43v3qNFmnb9suCw",
  "key23": "2v8gtm9LsZRjFEdxJ4PBB3znjNBQHvcb3SneKTaQUsFrCyfuprG3CQu2TGmj7hQPLLxPwDV7xR4mhmm96DKQ5EJ2",
  "key24": "4A5rqijHeMRCjuNESenMatpBcsZtp269Nf9TADQaB63iJVh3uAH7vbsh45ETuf4SEUAYJPVpujfMv8V9yVCYRnnx",
  "key25": "5fnYgu1YzgMpijK1VDMaHue38XxuosmRckgYSHn7oBqqLmbugTibMGJFRjbWZK7kEDLy3sxWPt516j5WNag6D1g7",
  "key26": "hgaWK8RZcoXjCw7b1nnw6vpyAAUBa2vCsqT13zbB5t53zwbottVtP4QatXfCK49X5CfQY8iG5zhyAHwcy9sGqUc",
  "key27": "5ffbjXK7tvNYuufGzcGHTfh6PQEZ1nRr28X3r1EZ4UENStNV8V2uTTAGgDVsxbsUBZHj8yo486J5XaaVQDVUdDS1",
  "key28": "2qxvjgCNMCLttZxgpkT6iAS67uV3wDRf2kaiW4TTD26m8mBdts5DSD1A7a7kJazUmiA6Fyz3SDCzcnHACG1FEU1Z",
  "key29": "3SDQNd3wzQeL14f6TPACarvEj2Mm1hkGbBj8gJMMhsuVfd7NSDcTdXXy1cZsxSVxewWkwXTAtgkw8WXvJCzr8QVZ",
  "key30": "5kpr23SppPHd5jCvWn7hVayk95gEXY52aZTfg6LYS4pRNzpbuR7SgHbrKoReenDqbsY1seh7yGdM2zM4z5ptBeV6",
  "key31": "61wAmWpZSGqCbNbBcAXvZ7TEjYDprp4N2SJaoAgs9GgLmsqSFPPzF48jcfMm2TtJHg9vrtBdvXWMdbZQZgTTTaRe",
  "key32": "2qW5eWBTBjwpKfa1CGJMXwkP2wtpJ3PWuLK73YR6HzhoqcbRUeUC2BDQByBFLSpx7ZZ4rQMY9zqu5EsB7P8nPqRb"
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
