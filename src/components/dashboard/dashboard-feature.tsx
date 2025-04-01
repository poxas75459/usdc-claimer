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
    "4xrdgErDqY5mUuz6wqxk1esWwk9fC2CLsBCtiUPE13M9RwSQ8ADek8BJVNSwTqwdVZK21AnQEeAdiRCaCWdFpESk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nCWA5uxiUdCP6UN7ENY3USLLfuevUktUv5Uuqf3GHM2FcGHHv8xC9dhpj8b2ZXvt5UpSsAPsU7GjLatGBdjDjMG",
  "key1": "5kMhD7QPjhAWCD9xzos8EaZDPAn4swnNAKYReCDotQdV46nDEmBrJx3ZwLnW5R2fch5r1G9Bc42UM4PwNtRfnz5h",
  "key2": "4czaWa7utqvXYz6ht3K9Jjuigg9afocR6H8E9W9D88c7i7dYHhmqCRxZr5iPoEdJ3gruFk7BEScWTskrmAGj8tHp",
  "key3": "4u4K4ehvocpmBHzwd7xLwh3NCbVc5ejtABhjPRzkC8upaAX8RahQRtg7tYhm133vgC5W1SLuzk68g2RvK1BnvA87",
  "key4": "3XvaQRic1ngoZX4SChMPSrpNY97ngkp82xfCGNL71T1vwQAHzZaDc33ozAxKoEiNCqsUXqjE7sfQmzCyCHSnJd8q",
  "key5": "2p7zwuU58BYvyiw4tYDpdGTHJCCfA3o7FM4LchUEwrPYs8zxdu97M5kmH6mC5XMfxtmk3aMk1gF13Hsum7GCZ7q2",
  "key6": "5tm3zjpzSDKYC4aWFr9kq8D8UnoyA5E7JvZtNKyvdoqJPMLxBX9uoiWCYbRndMKGyPt7XEqUV8nJTbbFdU7bdt8d",
  "key7": "2MD7KFRCaLu7bMWSEAiTKh6QEu1EqM4nkZkZvo7DGpe7YNmZSWEPBi69EtTsYZsY7hXpmmifNGEp4HRmLhrehXqx",
  "key8": "4J71Vc5GNsLFZUaTaM7Sd7dpuACn8e8WmcXnVk2ssaW4co4hdJ6iA8pRV2QJwqaak2qh2ZbVvknAQsoHPeEp8WKy",
  "key9": "3Cf6pHdKfJabPAqg7GwJ6NFTx5Kmk5f1ECsG73y1jSck6XYPJGoVa85jbytCfeko8TJLomykLqNf9HR8NS2DgL2K",
  "key10": "51urruzGkPwFwWop7hrSDbj6Z7t2MyhE2kyvUBS1YkPzUce7Xkvx1g3Zy4GeXkXarbMtNeudeBmHx8v6nd9QqxyH",
  "key11": "5t18zWmppkQH734BkHkgjnQDgtiPbjXHDnyuz5FwD2SqHkSnMtygRTQwuYaPUCgsRXz7D2S1KNRroUXs5ZkUcxF1",
  "key12": "649s4oXxmCJDevG2WLqMGJuhbVKLhTnZ3rB7A4hErdshvLiQrJf8cCeTtoQCF42CJDA1hK66m9ncu1WCBkozf9r2",
  "key13": "3pLptPzPs6KnbH1UAjUyDkvHSw1XYpE993HscSK64wPC4Skb1jPbjwqpB2ALKoyA8ScDdt8x6P3k7wwFZKVgt1EF",
  "key14": "3wniGW3s32i4gCigArPRdpT365vyPchcQomorPLQFd1Fe2gP4xMRvLYYZ51W6KVHiisKjnArVrJ9uC52NaPoqq7j",
  "key15": "rvAQQuCzS6TbH4DwyCNooSHeCBpApMJGseeaN3RvcaqSJzntTpGBjaQkLko66VTJzXYJPtdm4hAsfTJkiWw7kUS",
  "key16": "5j7deFMyHH1nz6NzjMWnZpMP9KFzPLsatSU6EZrPRu259zcv1TACDiQ5DFGe3oSK78dN9MpA91DHxDNa9GrXiTTC",
  "key17": "MiiTgic2vJcdt2gBrAkkT364xFSYFnPxyRk1cPagLFfRen1GXPNuvvideaHPzCzNyGVvZtgKq1C6yMbMk62KSr1",
  "key18": "4QgEgvPwLexDVLvsRxjdBjEtuAPWPqGqGQJcnsS9SS9bSkYTfNa68nma4LsBTXWptr6hq6dzDBXsKAaXhs8iLBqc",
  "key19": "2DUUMVy8kSwXXGVSNneJPd2ifuG6QCLKU2F6MGrvRD7rWtvRK3cht3URQLmYFsg86YHhtWBiFvKzJ9xg4KR4NWae",
  "key20": "4HMQfFX4dSnv5Ab4WsvUJyV5L3dV2zZ6CuzD3UeuvqBNTUktqX7VRzvP37BazQYA1ddBKQoeTHyFxZLcrJ1wM6T6",
  "key21": "4u9JvuA1Q3b8LPtm11YTeo1T3TFGR3y9cRH6Yfh5R5HT7YLMqo5gjzsLF38zWAz869S1QdCz7WTLSbXSEXa6sQnX",
  "key22": "4u3cTGQED8JFnmmuK9mi3L4joD6WYjNxPNbfVuHSrXpbLCQ1eXLHs1Avh5XXDAPaYSMZPbtTNx9fU55qGbQwoikq",
  "key23": "4MgB5V7Z6qDNFyXNsksfWWH5V4YnuASywbzmXNe3CxPuSLGpEFwnKDoC6wUE8GJsJMkRnAGddqimpemUARueiYmX",
  "key24": "bDjN6o6tY9KoNYzXTDTKSMT7bi2nza2RtVadYYsoFtqbNoPZBpbqknJD9hVy7RW88GxofwGC3vKC1jEheJ8hAnk",
  "key25": "67S43E6K8xfjvBypMq2y2S7qTMVVU3xjrBe9XtuYQfJ3BaFEzchwAbGmKVe19L1hQCYb2G3XYVN9k2zQxf64iWCo"
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
