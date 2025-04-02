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
    "4jbPzKjPNYVCarusmYSisVKL1rwr1Y89e7CJ4FDdcNteRxafwJsEZJvadwh9nsz88LC5eDUgcXVz8qq7qAXSzRTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gsUxtErjiyaKh8wCYkEyabkm6ZGtBETKqpCq6jGee6jiTFsHqBf8mKhMLLCVPWvdRqSepMzzhSraz9zvwkZkRLw",
  "key1": "S3pmSDRk844PWjtTkipgMV7qmVB7k1Xho8c3t4i3LaNdbj84A1BnoVg1NqCWCHPZCBV1NPiPvPFNC65KexVyK5t",
  "key2": "3VQxeYqMSfuKRyi6DpoZsQXRzisufxnujG2nN3Jc2KE7hFsRgceUYKFa9Vba4pivPEHHF7Cn4kAKnCz4pB56UVWW",
  "key3": "54HqtDcznqXd6tKjjuZyfB6GneCtsj8v8kLvNWLa6NtLThZcH1MB6yde9gDvPDYry2VEd5NnXB3b6oqkR4LW9sGR",
  "key4": "2w6PZUtVNM5tYxChVnuESDGvpVyD8Ryx6e5d8otFbxbxqvb5cANjWat8R3S1iLhYT7KZqLVuepmkD9bPo7QMcwj9",
  "key5": "UWJBHM5YY31BhtmLnW8gkqAVeZ4babfrwYPWGg4pQ1MF86LwSxoe38TXSPq5EzrTEUqUwVK4a4kw9yMNhVbQYCM",
  "key6": "5QVvV1bm1kbtwg2LJ64n5rVThLQKQ2EmRBJ9Fi8RSJG76YmoSJuoWcixJCbLmN48qd5kE5VZeWdSadacSWGTTPXp",
  "key7": "3xfxi5HNeLg9M8oJehW6gRzwMjRjqznusmZGuCxACwmwDX776hhjmheiyX4tstkVZadqZoDmKJEjZSjecN847hdP",
  "key8": "Q2gs4kcJ7ZbjchiE52mJQw9Kvh7kXFqCH7yENrSQqJfAn1LScJxarpyy3nhF3vGXAFxDuS9qGj8igyUZWyuhXFv",
  "key9": "5FWJ4UCt2EapfexF7xWTHz6FYLdVQxBpwtuyqG8b5FDEehkTnhzYGRuTaHtTqooodQhuac3eZDTWpoxet638rZBg",
  "key10": "2Bovdcrg6jNwGMQaEFbPDXuLr28k9Rpb6xarUrGB7uiYTfPqssC4AUQi1B7ZbsqEZ6gvSUR7fLxgd1ZgiRMWrjDR",
  "key11": "3ZFvniHk9KwLiutBAKTC8Y4GCTNxDqivtSr5mG3f2RB38ZD6GTtDgaHCfguGxjNJCNLvUrzgTtLp17zF2SUFWxY3",
  "key12": "3CMSR13EoeZzcNvD7R4oUREQfWjPhQGnpSTS2tV41ujnP4epMMCfR26iXMwpkcogf3Fkqccsa6TArW3T7QsHRKTD",
  "key13": "2FcsBD7JqCSySZnNTHAn7nssjQntbXNuvwwAnN3jMaoTP4TRuwft7j5Rk3SbKWVHd5pYRBomPUp3BaQRWzEAwMjk",
  "key14": "5UD5sn46MQu3wRRkLwYq8WK7euqP71m7GeksdKSJnxWxssabMBoczjxyXPT5dPs5qPYDbtAeQoKbtj3oav4RWxep",
  "key15": "4ftvcBzA2tjbJdjnNiTeSBD1VPScDiBewqQbzyMbxYX75xuryVu6R9pE2NdYeGFNiFyyAHh1fSHVCp1zfgFuMAmV",
  "key16": "4ao1cD8cA1MARuHUde8gNtADvZwM5QJvVqB7ekQwTtg8WJCJS7w3dRJ2FQWPbPBd1PzNb4kR7WJLoEtq6GVpqwV4",
  "key17": "4dEcVZwPqRs8fTTHAWedJAsWNmybokyFPpvJ7J4HEubiL9syHgXrAVUogarraWL5GDJEXEercRXoHSQH2Z6BQaVp",
  "key18": "3q5ndCcv6fzs5aEHxKGNAwW9uWJmV12eqw5yPJSxdeSsdkhJTWkTrWPGaVTLnbKuicvT4GtTz9LGx4ZPoTQhoxfB",
  "key19": "5FE8TkrmoSpc95jXEvdyyW3PxojtJ3ue9dxzpL5xLAaLeUvvTjFU8DjurespaHzxCrcczZp7n7qxzGRtCuqYtNvx",
  "key20": "4DCZVFArJT5WaQ16M7RdqXi66RE7DhsnESwTRakFwiB13RvpPvEWH8MnKeDCgoziR6DtYDwrkjAAND3FY2SYk67g",
  "key21": "2EAT9DFNiERWJxovFwqoVhWHV1aSFKyEuJf9xvuPZvif7BbjST9TbTEnjUAarpk2D2f94w4ZSPDZRxuszFkLhU8k",
  "key22": "4JkrjtTiRZV9qPNX5MiazjEySciAKit8xiWnjrWPqQMRJondjZXpw1fxLuVxgHp3BSSduCcTn9PstozhEF3pTXHw",
  "key23": "34qVXNYmCFVZHV3Thp3iEkaLSxaKCbj8v4MVPrZBVKi2tWTDCUWdjqa2eRU5Cxn5Qenknqa2Lg2tdhnVP6zvv4sx",
  "key24": "5bGeTvPCbCwFZLFipCD26LHn2JM12bQt27dnenndjGLQF2fBCyXfMdeTE1ZV9jZzishBjCXP7bUr5aTu1rC9PwJo",
  "key25": "Vhyv4vE1VKX7zQmSpCx3YbSbKLPynMxEhhqA8R8KbptFUpu17ZKonh2tu5vUKswHTpFdRe6KqHWQfkM4aaBA7x1",
  "key26": "4ECTTcfPiLUi1rD41Af4bLRa5TA36urr5dMCmR3d8t6Qefv2PTCT9daDETnuzFDCRCpztoozWicQuqLtCYFzE5B4",
  "key27": "34jPrRR1oLCn62q5uAxwC2kBNrK5PsqpgcjyMdsYgBfiFqt6mXBHZhMAFKWUSKhYJ7yegDMtnPNBcWvLaqg6AXsX",
  "key28": "3LpqTQFfL1i2aUqg4NRxZpz8NshCQDdS1P4D8HfZqPfX62CGFB6mD2A5EwdakDt3AkdxSEZiVc3M62szhPwrxZDX",
  "key29": "2PbmXtCH8pvTiUkDupWJyY9nYSZktWMajALRkQG9Eyw1ewCSzSiHeFdrt1mMWGYn4KNuSu8CnQo1QZr8pdDc7iK6",
  "key30": "2HuWSugXewnnKUqE92kts3Ke3YWntTQQ3vDTFYfPvtvMpsgLypvM56rwiV8nneo8eK1h2s8PorT9LDbMEgSRnEGJ",
  "key31": "5qQvBxjheLANkhscGNDRKiZxi1kwv4P9z5tMp4t6Y8J9fAcpDQauYR7XPgqPYHh9AKqhQagSSxLWqBFJAd3JWsNn"
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
