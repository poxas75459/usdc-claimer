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
    "4jn9hpAynZP6oyEA4vREB122rCfpj3dXw7ZbLXo3mjZLdQXrGnSAMskPVEgzKfHQ1ukeJ6tCqYMVCfseCiPX4e7G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eJhmEzFtospkLpp8gKEky6ffdozgoa5HW26QNeNqhFhxF9ZwWyqbPNAsnR81ma4zYUYUkkkX3YQyuovmzo7qj4g",
  "key1": "3ur6P9uatuT37or3MGATyWhijSRNWKnU8AsBwNnjvh1DZnXLoVtAYBDKxKE3KDL4nEVydFcqR54nvj35KN8mCRPb",
  "key2": "2i5b6yucdL2y1hYKmGJQdWJyiimkDEXDM6Npp5gLY3nRzgiMZ7mLFQncatCxvoKLxqAZBbZcyZmfEoTCEEx48nZ9",
  "key3": "4AeM94RwWbqKLe5Q5AzAv4o2SuKvZgjFTQmWFPcYPoLQY1RPvcwB9VNVKe3hVkyQ8iX4vu4EoQxV3K31V3m1Bi8f",
  "key4": "37EhyjEth1ayay5jnuW6eYXTNJoCpz8muxW6BpwPphjydyHWevqL2LRTM8sb8x2QcRKdP61i4upL3U7thvxsB3Kd",
  "key5": "3v3vm9S8g5j7DWgDzDFVJTEKQ5jgLMfy9me1Kr9biGj73MEK1AU7cWxDZaBZwQbaMTUDknVM3YtJ8aBtJYStpXLn",
  "key6": "hWJTyPPiZ9G8CVopPV2GkAtzYKX7EB6PXncDqrvTjTYKbspNnGQCKkieHWvBXSESrP5iCfgxgaUPnmxNy8j1PXF",
  "key7": "29vAfwRne6gQLhQDPMf8SCn5cnNhBVmpnYBMxxHJGFktQk53sakkLwKLhY35tzNkNMtRKti8c1jiccGDqruShYt6",
  "key8": "67YiqvZWLApvGKuD8uw7k9w6kK9TEB8jSWj7RdJ4iML9TsNzVdBnLp1RsooeBSAtQABQDYCYj79kcBSnxM9jcAmC",
  "key9": "4WXy5GHSRYCBBh23LrXq2Bd4cWetcvwH9a7YgwUgA5REGbVBtchcw9CymNqUBhZYC8gSJmdDBdGBD5fdvEAaDaLz",
  "key10": "2dQn8kDZfmiuegLKazTHWap6GLsSa7knQob4rBaQ6CsX6jh2sSwbRCazpeordMtHvvxtqgN4S1B3uFXNB1BjkrrQ",
  "key11": "3c1TvmtB5ogpMXHsRfyQ9SCdPp224Lm15jqeRp7bsyUQvZ52cbp8rk3TJpYwRibrYoMoNNeskP9DpTV6uvQoY8ub",
  "key12": "2hp9tjw4wB4EPiMF3uAzZhmo7T4uLXaBmp6LDUBsHtzXeAHeNtYNtbtffKsoR3CJaP6Jz9mhRqokiSYmCZR4P6VW",
  "key13": "2EsgoemAd5E7xgfhp7qdkuJ52JTYJqqTc9jWH7g3my2FckRr3fCREsJKNoozUUrg3Zp8rBZgTwndfbpnRawMvmcM",
  "key14": "5TQV4yaVBVT7mTiA49q2ym6doDLaD8zsaGgYNXSoD3B7yS534AzAmLwS7aH1TFa5tqQEFZwAzM7AuJGKk84qwRuL",
  "key15": "23VDxXxM5V9Zn25MA2YeLxFhEJM7LsmEXeHQgdUA6qb36xDaUbBJqKx4m4kneGQeP6Wik4fshkz6VNUejHDP3DMf",
  "key16": "4X1hbnoouDgHtSpLyBJEDT9FYkGrTaSD3ow6uVjo5z6isoJMMUUPjgi6if9cPpYj8q31GLDj8ZA2gXYnSoJmDKAd",
  "key17": "3Q9f3QQ3aUPzWkfTy56Bm31MVbdZW69ehjz3kkX3gKSFNr5jYkpxVVENPgaKZ7NVQoiwAqse1Pdo3Liz1zB7f83V",
  "key18": "4kCgTCPwUpEAbEtrkrh4puuh7eKm81AuHUha6bYRDkZg7rE1wYoEZEwaxqydGmFA74n8mUrdAgi1HCweYVjzRjVf",
  "key19": "M7RMzaFujHgecp7B52ghomPZDQmHGoG6cMPmpomSQD7evZpUKGDQfqGWJKsCKsM7J9ocL7zrFLkKvgSxpF6F4UB",
  "key20": "2XoZQzopyATFdTRbm3R8oa6DtuBCPJt3dX7zZAj1fxz3PmnPvu6tU1TyAK4VYPQ6NmCpTySbdwRvCtXshbpHiCph",
  "key21": "4w2gXadfYZugwY4cDcZfFqU7xdncCzWMiyebRg4TkynG6QFVR4kjSCT9VTU1TzgiMzjS6EKKJZnjAXpQeBSKpNHz",
  "key22": "rNUU9c8tQ3Mh25NP7VMP1SMagVR2KcBTnC4qYVLRa6JkBeridSPp8duSGv1A6Y2uL1K5YbpYS8r9sUwxCgLnDvv",
  "key23": "62veXPWyxGJcGEh8e791J4AMLC9mr7Kf9WhJUEWrj1S59uSBL3CEmZ677uSP6VrHqUuSzZLjPUCL9dD7p2FY99MM",
  "key24": "4K7i2t5EBt8xd6DZQ7YLA5Ssj7oVFRJNGMKDiqZd5V3sqAj6QcMFfUeskLHGXfoDMkBjJki7a7k7cwZzniyt6MqK",
  "key25": "4G6EpsfTg9kChwLVemPgGrM7t3TknVKRar18JAgo7WQisTSrnEHZdTe4b6xsP2evmcxq2trJGLiqprZsUw2zetwz",
  "key26": "4USurwVsjvB5yieBaawdxDbB6pnTnB5ET2HWBaFifk8sWaGktEdQpJZBRgmzCvWJkosTgmoYvuQSoZtrpr5XK2tB",
  "key27": "4CPKm1UqXER98BHMnxUjSX8pfLcmwWsBqx4XMH7GVWVTqW3PQTaakRoE1LccSAiRMnfTtgpgxLCaQN8dU6Vv6b2X",
  "key28": "33FAsaAyE4hxzHbU5FuRj8mMvCTZZRdovon26Bcrbv4ysEagvfQ7V6qd2c9GXay32DB3jXUEtrUgKjmtEPKeEBFP",
  "key29": "5Q1Eoi7svMf11B2dQftzrWeFZsig1gTkQxDhWmzEjE6V4y9ZdCwQWodBoGFLN4ryZbqQRKMUiGJRnKHxqBHx55VY",
  "key30": "2j3NRXuhuTxb9WQGdgBpxrYrirTjX34E7xoL5aTFbwUTjQ9kC7GZ4pt5detmEe2X824FeE8UPSY5HJgxEey2JUdX"
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
