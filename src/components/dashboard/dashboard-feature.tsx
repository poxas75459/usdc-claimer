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
    "2sXXN92vUTXZyhVEjgznQEUYwPTHCWJFbeZQY8pn1enS5cSQhYZkjCosQZqJWBJUFkSCjW9F2ATvCfm6U51PpQNg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YiAx6epNzf8798BwxauokNASFY8rEtnUJvcbXMgp3ashB9oJAVo5Xw9B4s97EMUDLMfSp7EsQZriUJ7etifAYJB",
  "key1": "5fvqiK4AzJ9PGAGPcBNfHCpBP4UoQpoczUnQesUtrZVHThJ4cXrjPUSsgkLYy4TdG8jrgzg8AvUGtQsHLEFdNH1d",
  "key2": "2g5Ygh934UDktQ9gRAFLP7G2JyivWVkaFPxTpS5P2jjuyYtQDikpkvazrZu2gVsVWLVanZPaASjubuyYM7nKqpX9",
  "key3": "5zjHym3G6Bomn21V8Dr3ar7woee16DBYv99MNU7RuALzxRh77USpQgTLwJ3KQWDWsfjz68BAp91cEjk68Ga6qSuG",
  "key4": "3eTKRz31FQa2CKnNypRMDqxjMhCbXf51t655Hk4XdWnFjgj3vcjsU5cAw3KvuY1NQ53jFovopEtLXixXswXwvXVr",
  "key5": "51jFwNkZ8N5VUX4RGcrDok9fp5snJiphhwC35DQjcRLpVvA6MUJSwfqJymF63ruC2Zsnv8RPdKjshRUjEBhr8dCE",
  "key6": "2zR4YUJfLDqZjb8ddftyHQpLfDdDNBiXwVKZ3dEdyBAZHd6omQ4ZSeQv8Xe5Si7FMUSRLALK1zM6mJKEMrG7dXzd",
  "key7": "2s99fBhqrPZ16HMCzFXfEpnwpMsAJBSe3Mp4XUmrdGqviHLVSQN38jVepymHs5kb7448QQZSxfG1MHGRBTJcDHns",
  "key8": "5kyEGqDtfFqUho3GnN6MHZH45DY1aWNceAzbtNTSTN4pPbe2P34uHDpK2SoXY7nVPnCnsEatr8xMFkvDukmQaDNz",
  "key9": "2c8hNZyFcaGRnSHJqduooDTf2XhMymcGFwSRbMmUJHcYveyvfKDn6PpHWk8hYiPKfqFnnuCNAcgVd4L1oTyRHpq5",
  "key10": "4m35S32kshmHpVwjDTF28gGZzBTvpxgv7SpctzDC8icMCPuApVnkqfSQrcGHhLugCESu9dMPk8Prc5PsdXfHYawV",
  "key11": "4CaTc8Myja74kY58n6n6Jnv46kqPY4H3kk39mWff1PduLipJPmjmZNETUULEQYY99WoYxSY4YVejWJCFjn69iwxD",
  "key12": "CoY4WEcFKNNw6BF9CXGkpbp13hgwnVaxxbuCKpGafmcwNztsmSVY3NV13qAZcocwZAZMUMtUL32mUzn891hsrLe",
  "key13": "vitBMgrikg9PacoeaAMRqgeBditKJSEJWKwqtjBiLbirVug6qUqUyTzfqf3jsX5fpwwky7nawpw2mBY5LX7cpz3",
  "key14": "5FmnwTiCsxd72zna5EiB4asfxCJBGaDR2GQ4ywphSEPDHyT9xjg52ndyShNKF8btdxtWMbJuHL1wqm57Ak148PC9",
  "key15": "uVXbhNwv26yP1VUfMDQfQaCnysSPwxfP9P1iFPsrarfJoZBDnktNVV7FYvxzztaoH7emDC9mon4QUB9X2quLe1A",
  "key16": "H1chUbZN2bnQfM4zpJedanTavyB1kPvFjgtX1S4uFZB5ChZcHVuR7uR8bQc7BFN8YDMbCwACwnq1cpwEcRby4tR",
  "key17": "2UVUGhoqjbafRfNpzhDp1AZ7NXcNJ65nH7LZzWvPbWDZ1v9kmTbFGxynaJkouJQQPtQByPb2Rp2Ckee78mCXvVdQ",
  "key18": "57cubDMf2JUEqYvtpZnntnJCWtr29c6vLhKUBR1m9gotAkGJpnEUEvhCyLnirsXaZ8QfPCR5NykEP5HdcsxsWzbs",
  "key19": "5wZBwqWyiGkwZxkygMAgmndnB4KoD3Xq9xu2XXSJxBzDs81eGt2d49m7AmrcjdZh22mCxXopRNnX1sJwjha3dNkU",
  "key20": "5GU53Ru8B4HD4mV9qXpXwAEGV78eHhcDgbh2XKPRE4TFAYm2qnQUECVT8rjYZiZEwtZi1HvcLUVPmWVT86p8sZ2D",
  "key21": "35Vfwt1A3ZmMCuZZ2JYqBveiWvF7uRpx2oGqD35DZfaD5jMyS9cjARcVMa28W5fsbm41JCn65YvBCZwMBFf6azXY",
  "key22": "5Y25222ZNXzYPzRXMc3sgszPHpoV5y5N8MPhdgWgYTX8Jt28pWaFMry5eWezpSnPpZonjvrRJ1gyp19EkNvXkGXS",
  "key23": "5n3dWfMWj3UnzL1vYqkYaAfN7ZAEKw4xwAjNDPfKggC2w8stmnWq1umtPTUKtPCNcTBqP787ofym6Em5oChWSc11",
  "key24": "4xAo1ZifQoo6jbrtPNZKFXWUQZZMS95gjsf73yYryDxDBZcvX27h18eHKYjcSAVwP49wxApr4A5rA18kNNWz42Xh",
  "key25": "4r6stvT5AKxDgjtCwKc5yrybBt1By3oRgzqXQzKHQqDk2dQFagaeziux8RGXu53W8ndvXLRDHo5sWJZfgD6gTfPm",
  "key26": "3V4mx9gLVXfQ7FWnTWN7dQKuw9fHkdZsRByE3GUXfT6ZsGubXDvCVnCT6bq7xpDvcuaQHi2v2AfVQGHhw3zdwx6u",
  "key27": "3q1tooFuLvKoadhAQBQEVRPHXYtjkQr3HujypAtCPG7KQi2qwdyy5XnvzTFRBWdmhPkHDfM4p8Zfnh6Bc4dfUHgW",
  "key28": "gUnsxVT6WaYQfANbYkB72hZnSiFZzkd3Ag5JifUz7vbBLzukwiapWCHxoKYmgPpTrmbg4wuafJ7Levdqpo1p1xk"
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
