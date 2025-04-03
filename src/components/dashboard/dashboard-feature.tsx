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
    "K5V5UcobrAUN2Jp8hnrhtNWFBGThgEuEtZt2cfDsJMZPKAZgEXwLpysicZRR9h1Ga2MxQV2ZmrkyNTHoEwWYeWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WNNvezc2ukH1Ef9BwP2Yyi4x8k75iU1ssh1eUfyJLH52P7tYZc3fjTsZMS3Jj7vx9Z8xYmiXr1GPgxo4Zho1Hjb",
  "key1": "2BU6FwF68qGbdo42aw8ghApzY2WdCmzjjnEvd5iUT3kUoUS6bzDA86BGJhnM6EC3Jv2r1AtRGVihpnsNPQiXVtmH",
  "key2": "ZxCku63tkNice5Yw2eUPKjFyF3c778xUwu4gfGNT23ypnYWQ2DJCAXyGcmyU6ub98e2UQjyzu5uDPdztL29jz41",
  "key3": "31swUrtZYyHxA5wHehC775CvXdMBu1m5FeiJdfeAFTPX1oCXQrNzXR8yZxXqPjRVhKNXbTmaKj28n9H7FYESRGFU",
  "key4": "5ZdL7UAi8VUJy7cjy8mmwEgsvTWxPce52a2gTFQ1TXy34D2SWY9wDwTYxnQwh8FHdB8PrAdazP4rhhMcSDTz1Axs",
  "key5": "5wdQjVGWdQCjkcuZ5PjEthAmUtsRPy7CxuxZitgcMjMnnvAXSevydQq3pvpSsRufQuRqispBy45jHWNpxTWKtk9r",
  "key6": "Q5oEZoHQq1Bbn5sDHCRPg6Em5gukWVSxahpbCW1aNSVUCeNfZ7nUaTDM6Yi3jM2ZEiY6vQBJ3AjyymUjjTF8WPB",
  "key7": "5mVrotTH2GwcMcmRoaS6kifDSqsmxckd8kdjJeFopW2fQUsvSitEgQPaX6tNxd9t7XCf8D643LP6eV1xgtX5Zodr",
  "key8": "2LNnKmma6tmJZbxLNrip7dABx92vnepKki6PmKncciamrTByBdvxXSTYxqAXebMqUdBJ7NP1UPNszrUorADjL3gi",
  "key9": "3BLeVsrAmvXm6NyNpo32sdihVeaDuvPuoXMpUbzuzsJoeRC5ucEZmXpZLmCsU85iDW1jJ5ELRkEqhhrR9hUnr8uj",
  "key10": "tsWMLQE811aRkLHeHZUZvQbcpWPyscezf5EgRxaxHGqevz3pa2csoWEUSkDV98t9VWCp7eahd8pe1mqz4PQXG2a",
  "key11": "3H2vniEsVTZMgxA2FHrBNMfdTmUcETAjcHW2yNxt96jSUbuKzD2YaH3e9bqW6mofGx8mH5X7GPwBthXmWVnH1Jx4",
  "key12": "2TnnFZbJimWbqjPVyqwkpnVVPGivL7E6a1W4vfw5SwzVLbaiNHq5yRsCKVHHyxuSBTMaULHxvGm17ADb23Q32Qwf",
  "key13": "ZgEX2ej5GGBMS1tei8n28i1iTunoV6WmxBTBV16AJmfoyCQP5yooWm2DD7kTWytzMfEfpV5aZUdMpNNhHXdJMag",
  "key14": "UTFxPBMB42ZUpQGm3UbdeqfHfdWfWygG2o4jPUFL1PnBKFDXgeYsfZh6bDzG6nJrRyQ571t8geMRHosFtbU4RCG",
  "key15": "39e8ctX7d3abtY8ZYZyHkUUSpBzGQGuRERhxYzANEkcqDuMoL1yLYzhexhvubvKs3FSFEZVPgcSAKopBomqt3Ymn",
  "key16": "2yGfqZgGiQ18zFQvLNezxTqiLRRJWhvza3pJzrf5BbvjRnnk4QeVDbojwDNxR4JTGXZ2w5ZyLizbAD9aPrm282Lh",
  "key17": "5BpXYePrMZTL4LsqHYpXnVVqr1hoTb11w5aqPCzLHvfydMeaaHkJxW5Jn6KrGSxhSjZ7SFyTNxyJPAqp4fygSr11",
  "key18": "5EXbAX2eWiNe5LC1HYydxw81dx81KqhwrySr11rFynLqDbhUcXaJF7v8uWxzsAFuhDvn1Xsfxxet2ZzMsxhgHBmz",
  "key19": "4yGDmPNc3C19VtneEQiDRoek3WpUqSPuB5BVBbBXR6DW5Nob2g17LSTXAUNeRn6aP7EVu3z4whNv22KFy1BrHBcm",
  "key20": "spm5PGMdHQ8Uv8FP8nz7WSmfb3D5xJdAybeGN16gpoFTHMmvjd3Ca4aZayR7mMSuSgRrsJPwjPgbGXZS8UPsPMW",
  "key21": "4SDRkGHXWBuQigty118knXTfB5kbyMHgTLZVo2qZKjTaACxyPu4HwbDydpzXSuLs6q2DzE1t98mykUUFf8SExvGD",
  "key22": "3E4Cc5p9uDWaAtdioYq5hKQL8RBhJpor2nRvLJSCyMmgzMFHfcs1ZWWynbgcbSKsRNA3TKEizXgZfaqdetJyDGoJ",
  "key23": "nKRsyLLoD43xN2pJvXTZcAKEY1DVFokUTbmJW7XiuKqvz9bVDGCEef4A29yPwGxhDiMmrjBuKf4myZKWJ4bSWWJ",
  "key24": "2QzAHUd5DcbqVWHyusvthdfVFXutRxZg5MTH6RUttCTedhuqgV5C4LMKg9PsPnvv4tFwAGGgDPUcQRZbSJvb3BKy",
  "key25": "2Emhi5uRNPd5PpVY1uteE4CNNU6LAxRDaT7qT8gMjoPBfC1ESeWkR4XWB2x5ZhXNmnpj5WnHr3QEjGrUy6guq1YD",
  "key26": "3spHqotEMV391V5ADQY3UjrjbLxJKx2E8hvFN76Caj9nGGSK3K9CQGSCTP6h5nTPqfU2GpmCq1aTLUVRineM4GmJ"
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
