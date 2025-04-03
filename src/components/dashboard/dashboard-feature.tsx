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
    "34Rheemo2Bvyrd6G1cRvVe6NwQTsuWx3unqhAoSNLFm99EtT8dK5NSumPzRS8n4tgD7DFountfPcQsxrBXKhGuU8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "497iSttQHTZyrdgmHYvaKdMstbXiGR7X3N577hYq6RSE2GDBawxiBvkhBJC6ED3VGHTLeH4QGbPgVqkqthUjG1ka",
  "key1": "dZS7AEpP9PjLF8wmFePfarY9VV4SQqJ5mEEo1pDwHTBPnpkMb3KYa2kGH4xwdAZHbcV1pfKAkeKNHKzyCrgxfvf",
  "key2": "55CXQUkcKDmqdq5kkL1Q9HfR52fTv8rPHzwmrXh9bajvhb3ZtQHDjxPxtPzLaxpdqsKU8u91ggvPnF8XhTNVdVep",
  "key3": "4PsSUik9SLiP1uyWiA89RMk3WuHP9wZ3TG7Tsg5YPZTkhrDANgZsHXpyvoC95yK9ELusxmdN1PWLJcu3DmdA4TJY",
  "key4": "5ew6RoSRpBnu4VQAbpHczrd2WoGXjyMAHyaWvPXnqAm2LxbjVomVFwd3a32xnhBzahPs397xtLkKDXZ8YCGmN1W1",
  "key5": "gj88gkjE7GRBmT8ByeSBFirvRrdxpbFe581FaoVs2P8V8qqGmsBBXftyitsdmBP31EQSbHbGmcX2FuwjERygCiK",
  "key6": "3fPa3fV3DfjiYUiQjS1k59CDTEnrNDBn6ZhdYdh5yuXDQMCdtooNe3zPPyjKr75nLq57mPtiZnBKZUhgyN2wnwwL",
  "key7": "3oi2eS3i7AhZ692uDW8X7tHkYjHbgDKyrSCwd1ZQgLsVo1Txy2fuWnD4r9PY3zkrpsZpLCfebuqx2DrgVyo6t2SU",
  "key8": "oVhwxRKUhS6jVJjkNvL7cwfbis7oAvYS6WpPTGpHEVH4vALYDtVutEUAgrL2CTDuWPGiyMW4o71KohgxjGwpYwo",
  "key9": "3rjSr7QKTAVFDQPidM8W98cTSzLX1fJzuS4Uimmp2kfHEATh7gQWD24H6SX64WUDCBTEgty9wiMWMohPRNRMHyRu",
  "key10": "3BpVEgxWNr1JQNQhGaPMJkPjsYaXyhX8zSFy42wqJ4YDEqJKZcs4JLtXMcjc1dY8n4JpKyzn89rTK3zusiyhM4YS",
  "key11": "52WWUEM5usN7DPS3NDyMQWH16MMfFekZgr2BfAyG8whiDXBKvK8jMrfgtLpRS4sxKDpkUwpe445CsGvrTac6PS8u",
  "key12": "3AShMTqQ68bBDKj5khnXQ5kwm7bBaJxRxAa13dH5gFp47cvvKamDHETbgnRSjb7gXSmkwzw9J3mDrMjXfVM4N9oy",
  "key13": "G4X8moUtBMNs4bLF9fpEB6JByEQ3DCMZAanFTKXY3htT7AB3Jyzqu3mhwHwGx8qxwhGXbZN7ngnKrrsMuUMTEEm",
  "key14": "5JP24n5BJdQEnxoiJijWtvg7D9k1fob75g1zzzkLA5xk3iwWbbudiwX18yzkUTY3X7H29FSruYBV9SxVDg7sFXoa",
  "key15": "2GBEsCBnWt9AZNKGaAVBnXoH87pycSMdfuX8attmtXWiAJnnk1pht2BncLwuoohvELSzbYRkVWruPX58h9MPvz7",
  "key16": "4bD9RpYbp1bCvcHDCx9Ah13f3K1k473YztwtFBr7n6upf3uXLxiQy5cGUqpD9EhS6yQ6PaTYw7N39SAXb2Ho82SG",
  "key17": "21iunk5393uUqaQ5mDvMt1mFYPc8dytvMppFzUKCPehK8z8HQUhyG1mkk29xVnf6givqpPRMC5d7ct1mTyDBhskE",
  "key18": "2jm2x9XCaxDqo5daoVfLU8Y6zDJPwtEJxSzQhnDwYe85yPCSo7GM2v9ueXtXBWfb8r1yH6nVz16Gds5APYqTZdfo",
  "key19": "5YDKyrCG1SB8LetF6K9Wsagv7gPb72ivGPZRUzmjLyXG6FJRdmmDRyxgHk1KZ34dFCrXxrQXsMjuqDyPgs4atmWY",
  "key20": "4oXinMGLFjhK5ncJuoja4vHaJJTxJukGSBjtkZR1L96VF7LCewBm6jW9DqX6aF1RKovDqjtpUaNj5iUiVLbjmkqX",
  "key21": "59kxbSbYp17Dibux92XK9vmhWs6zngZFxdC5TrW17bSbAyNGcwpdVZJBvy6wkDnHKsZAR4c7nndRP2SvrbK8EmwA",
  "key22": "qw2QuumkA8uqnRfKKA93Y74TvmFnUovkEm5ZyG3ofN1aef3xT7sTGCsxTZVcdRhYfXYdPXtCRQSgb98JYpn2M6R",
  "key23": "5PGSCaDxaBUMAXLr3ngcrZH4RX6HBVDJB5qcA3fEmyPC3X5Cunp321ZYBAw7k1TTCyeRx82yAgzrxNmRN2j95bfA",
  "key24": "4Dj6rw8MV2zMvHAYcqfenoFmUAk65XZgfeW8civS8wq9RmkWVqA6aHAq78WRfAu6VWn6HvZrtB2tqxEPWbmw3pB2",
  "key25": "XUaiWrR56MWfegvMnDryF5GuLmxP7Rb62eYNyjDrtaWi6avD5suKBMEedd6UEaSCCSopz7ava3kaaGBXQqHoxyz",
  "key26": "TcgrNkuEbKsQmvWcRYQcnS6u6RNpCBsHeRLQnip89J6eSWK4FqiFAfC8zDhkwmeok6XJtgwZvybVzRsF73fY1zG",
  "key27": "21PoS2FXrwPkE5uXNPfxNjSRQAe2Yq2JTUADnf8kZNNyKcUYonbQaiaVhNg7gPfG2gmxaYonmL7sXRqx3pqLbqPp",
  "key28": "2SA9xnKuy2a6jLrmbPR2EkVNgm3TSPMrDJBYUZrWcrcX3vFmnyk83H2Ru9kX1LowPNjJdKRpQhM96wPGWEoKxS1g",
  "key29": "5tSAwR7NKuF9DXz8khdMMqG9Kvk4ikDijCuK1SW1WJhCWrYyZkqF99ch1tBm8pR5wnUXG4SviXtmENztYd75kEa6",
  "key30": "3JxhY7AJEuYwWXkatwBCsmfCg6tbD5a86F5p4suQQFDa8UwyDLGd5KGxU22j3BwkkUEKXEeQxUUGpP5gU9GRr4Rw",
  "key31": "53SS3SMGaYhFFdBhdPMLbrpnWTXpMZH6xPaQGau11KLDqyNfUrrysGUsguhhwHUDWefGsmtNsUiDvu8bugKa4Qft",
  "key32": "3gtJtkZxXPJqxSo8Hj62LDqymWdoEgisZUqvTdnddBLsoCuGH4nXf1DYg7sQdE4ZwdrNqRrPU813cYLrmgMt9MFF",
  "key33": "4LVHaENGTS1zQWPMNAWnWMy4EWvgjKZy8YmvWaNiXVhbgvrH49eFxqeHGDiXHos7GnhdBdDSaapJyQnL8UGX5Fca",
  "key34": "3BTuucatwcQ3w3X5Rt8DdjzfXytJRyXAisKxp3yzLJmGJfXHzLFTsRttNoaitQQseF3gcN7L78ud5qJTLzUHxMgk",
  "key35": "233ZWe35ExFFdvHHWP3ZX83ZU5249xsyyyUwm6CrvvUoMyinYk2Q17i6zFQbUmeyt2G9HSs2t3HFW8aX6X8epD8m",
  "key36": "2L6panifv856nVDwebWmPmiL71ayvyD3SqxWE1o1hkK9RUZziJ6fPwT1XqNPAfrwMUyZ5qnxf3A5B8vLZofKxMJZ",
  "key37": "65e7ogjauUumvvb8vMALVodhrYoxMwXUagZ9dkSEPykiL3jAiKo9JVoaHfLQusg1zEz6aJZQ15EYuGgde6J5cEkj",
  "key38": "4ka13p3WyZNsXkwwcGgWNmBgDwXH3zAp1qo1LsPvd5MXTxVsFVLnhwYgyLGeBKFuDW3xp5DVzhKGRzbRtKc24pxV",
  "key39": "4i8sRVNSRNkCAGTruWo1Wxn4aXHismtEybdbFpVxxPzUzyTMX5v5cPqomGMB3ZKeiCDjukSXpZgDb6ho5AhRK7n3",
  "key40": "5zoQCKiNdGBPDW9E2fo1FBtJcTQCVVmkQ5seVvNBboXsMvwUUZN1AxC8ye9VBSnUPoAFFtN6Nz6pykkkb6hVAm6e",
  "key41": "65zWBUTQQtJsK1kF6wdnXxiHcvWeLA2XKqNgs9U6ULcC86nKy4ZF6vyiiWDVkjbTGXCFYzSjzSvaiLrDpJuPGbZ5",
  "key42": "48CZ4dqMUGi7YvqQcpLUbzZkKq5Ka9L5joomh2Xd6MTLHqBwA5dugmCdmxpesM8svfyM5SMXQniJoassP63e9uwm"
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
