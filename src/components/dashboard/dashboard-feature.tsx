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
    "4W1fxCa52C8k6g4AYbAbvC9HFohDEuJLDeiuqgqMVp3izZ3P9F2e55X41JnjyrSsLdT8D5gM46ZX6oMxqHztat9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xWWmQSGasPbxi1xzc5gT9wb4DH4Fb5t55ieePX92r4wyFNMxUEFm9GPdFfYGHNg9Nh7eznzTN53uJrrWCY5HdKv",
  "key1": "4NdFnJYp4Y5Dy9T3kY5AEksBjbaAargBAMV8YTWwiHyt5QDEBPk9Z45u1swNndLZdZoMcj3gy9kABDnLd3vM9CQk",
  "key2": "WmvJQGASfBNtydxXy5ACWUGHrExr6cBApYoGirCtJ6F7bDQhBejMC1qpGG5gpFk4okvPLUzPU3uJai8KHAWt7ed",
  "key3": "4vL4nVmDCG1G14PZv65KdhMVgMHqQ6PALWwKtRvcZZp7oQsiKNGfCQP4J49AEafKMoNsmFVmXHWmtoWN5kEr8GpS",
  "key4": "u1jCA16Afb2GpfSrdiHXqwEqjTKA1RQjZQRqdCCgVW8FgxS3vvWVJfyZP3zMyDjNakUSJ8PVoUAucihdxpQL9tx",
  "key5": "xrn25GPscfCDY6uTrufE8TWHUeFuFS6R615BoxjAP1WEBniwwtgwFPEurBvsZQkjgsBwLQsVDhha1BoncxMxZ9n",
  "key6": "2F2h6hYnEZoAxRLQGt6DnKwhgLdKTCXLqWfaw8cP2HksejUwHw5Ci6wPrcyqBdGEfEsF7QA2uvhst7C4u7dK5hcU",
  "key7": "4j2ADRXpnfV2WHftkSfSUFsnsCorx5hGhpA5zeL2CufCUmRLmASpAj58KYEFPcTYahhDyZjeUsFDWsypKhgwDvaB",
  "key8": "3eZcyYgaguAs3k5Hs3j19mLxEE1StAu3T4pL5muBodrcGb6BYTk5p8pWYpzcwRNHo1KncFuebNkzVmsu8GwU6PD4",
  "key9": "4oSNj5U1BFNB6muMmVm3v6yt53gDQ3X9Z1yLRmMU4eFNNEZpqS7nmRozHjfmULVKZTTrzSVuwVByj7TrckEAaChc",
  "key10": "67GjsWVViuLX698bckszrSrtpPR7SXeGVpg9mCCcR9rtb1E3R53Do4dZ9bcS8BVBBb6wiaXivJs7ds1Z17bDg5Ze",
  "key11": "2yp895JZDabXsHhacUprA1Su9tshd4bKrxMDMhSpzy6GK7UByet8khYX89p823bCB37f7W9Lzoe9r825hizgVy4i",
  "key12": "2xze9Q8WNSyMXDFA15mzwHyB4A1USnY8CQJWYuzcHiAxmo3hnkvTaAwQDw8JEhCuQuBtoaUGyPcdWKvbWF7hfyfS",
  "key13": "15LDHVDTNEuiHzNB8axEZagg28bXL37fgDA7UyMSioCmeknsk6aKZd86rrPftjXCVP5i3Wp1u2Vj23RRnCcy8Hb",
  "key14": "4b9GgM3pE77U3XgqoPggdjePnCszR3xncy1S2uyuQGcc47BHsF1Ph1VMjTf2eqSJNPPXCeyyRTSjfNpoz7g2dXMz",
  "key15": "3zeHRTbKSMcr5NRPZz2purWueJ9KC1soF3QJeNVSdaHspnTPPts2rDfjwtk87QYWxEP4hnj7DSVUQmyVLga24Wiz",
  "key16": "oQJeCgNCvu5n1vqcuUAtH2zkQquqnHReJZnYQU2Zqpr7CqJnkc939PRS9nngsxakRs8oXpdd98ryBsb8Q6aNNSv",
  "key17": "2yP29s2Wouf9SvmV4Kp4Po1HDmWg1XZRpKPnX5LNmTrGofYwCPMe27yyYaD42zV2EfGmQD1828naemukTZ9mqyvv",
  "key18": "3AFTLkGVZyp8aC7Mz5zRiBUrp3heaXojZZMNQDTwQMnDLjncnb3cEjqGueQoGk2gNNHKi7PWQ3RPsgrK5YvV5LYy",
  "key19": "2NGLQSMi5qZnU6a1fDt91ZdjjkacJzrNniAH9M9yg4YoJr8cVURNHjxRjKKm2dAob7oTtwgyiVomTsK6bN1Mw4bC",
  "key20": "5bKnhQfMvExiq58D1z7i3JiG1ky1GayoLBk8RLPHvjrV9RAwSqPwsLmxoQNxXeb4Z2LsCRUo8SPJHNS4aYYMfMEc",
  "key21": "nxPHKcEVZX5oQhQBaK1tCBVbbmBvZs3ZY7Y9tFEhjwFNsYYVutXL3FKzgXLp6EdGsaUJAwo3N5uFVxhcdkJNSMD",
  "key22": "5afCENrFxXUJDvezuP1Kge1YTpaJPbM5gFxZJKax2QWVc5XyxEJDctMJxdyTUvLR9WGoT1ZRYQ1NufoqRrqHvGXN",
  "key23": "2sRwfHCP2jzc9y1SbTL4Ery98FKR6gwXnK9N233aQsfNhSPFZguHo8v5VoaqL3DeJvp8yQpPrLFbgVXmbvNMfACG",
  "key24": "2XVvoDtSDNtmDrbNXQmbXBCLEuZTBGeW9x6RYNDMcdFr4VEqddCQWS1WHNLhT8coAKygyqWvQeB79vn7yvsGFMzi",
  "key25": "rfUjvTatMtYuVadTn5dwBvQwyGShuWWcUi5UiP6UQJaiGjGBcQZwXERPcVdgSV81iCECEhiomvpcB3n6ygJWi7C",
  "key26": "5bwRxZ1idTuqUGpNoe7Y73Ajd8PCcpsNLKW7CyJETdxNhojp4rVu2UNks6n3EpVo9GpjVi2N6FnveyZeV44g1daX",
  "key27": "2Pk8Yp8z6zhSWK3vjgGbGUuTVtNiLx5aXpHA6AFH6izzGAL1LNeneWZXuD4uALJF4asw1tj6QzLyTkxvKXg31Q6D",
  "key28": "2WV1Azaa78d6mQNhorEPfubv327uEMa3D44zSydmXC21Xo9qr1i56YU16ffwdCBXyq89M8SnXJc6r9Z9RshDipdE"
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
