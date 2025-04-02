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
    "5nuXfveFtB2gMvUeSZMAqpsHZotrtKfcZV8jhkeQdRqnsHPSfFkhqdAxc7LzaUZTD7cwVFQXH6U6BjYHdsFFTP2m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kYWXBJPXoWTeMCk4hw4iyat3tA6hqpcxzF4SkkKJCoiwyzxgrhn8YEnGrn8UqaBweFnHE1BSLzoFV3TGF2pcV7M",
  "key1": "21m7TB5uDfzDFtrnHmWXU21L95VQjtkC4BtXowWMDTS1nVRx6Ena2J3Zddx5HGx172joabWGM17H93UqEy6wcrnz",
  "key2": "4x6VZ3d9BgfqmpFsQ7AUkPc3CrdqUGYfhLkWezMAsjrcbRJujJd6MiMxpjdXPm2Puyi9FKaFBQX4ZYWE8oBrBb8A",
  "key3": "FQ5AjbeJrDg899DjhHUj4qTCpmo28R4wWkQYsM4oKu2zdNvnHv1mJ9GCWTFBh2RTcj9EDXSVqVBSCAqGMgA7Z4t",
  "key4": "bUYXiDbRrBM3SJy53NbSUt9TxV2GxjAiTXE7KfwMR6xCD6Qs66yVPToxnGAkZBRMXMLUzfXAy4Tmjc9n8tx6umd",
  "key5": "WyKQYyB4XhziXoJVrpb3xEjKNoiMRHMp1sytyGWbeWDr7p96g2uBcEesku28LAZ8SQhDDk9mVsHoAcEtfm9B7FF",
  "key6": "BKoZiTKKA6sQVNgCvt4veLngYyNXoWjGY4g65ihP6yP14cKVthozxuadc5C86JBNKhwJPfmjJ2HT2ihP3KKXUEU",
  "key7": "SeNHmg7gU24cqCkC4wkNhYAvyLSevDxnT9LqdRvmJ63Zq3aMd4sernPKhWvecbWqMN8QfAbkuwUsGK7eadGcopp",
  "key8": "2jnkUHDyNk6N3pQbo7iHui3ckLDChVJgY8Fqir3TQrj8XDJ85HeQL9X6gvUWp7Ngpi7tQbLWy6tcNE99kzw916C1",
  "key9": "3GoWEPhYLAiiYwXaLzYZKwVTbJ11VfQKz8k71JdTMcs8mv8vLFFYUDJajr14WLkfzGY8nxmXXrTnRogdkcCRFRan",
  "key10": "2dDmCSrefvj9VzUa5Rhu8suzY83L7s1qKeenf2pzt5WFz62ZoNMBU7CXvV4VSpZqZFFCPTjph1QHJT1Bhgk1sj7V",
  "key11": "2LAbVvDGaLSmXVgG3GKkQx2mBshLFCnBdoS1zQo3X3HWoF8HmKJif8PCx6GcGqQgLzPK2YcVGHr75X5hn4WAc24G",
  "key12": "66biVK9S4VXe9W4jjYsSM4u3w7NKdx82nzDQeV5nCXWThPXRS6D5Wuv8C62ccRmnSkgZ6DNktqy3uirJ1WmTZ1oe",
  "key13": "3wR7i8J8Wdkc6uwQ8gRmuZCmsegXvUq3XXE7zssEWHjJTZ3xUo9wZCfqqqWiqsZ1TC8WY1GkU6oBZdYNpnSNJs1Q",
  "key14": "4h5d9StdyUKDWreZsWr1ZBP1YoE3QKLuREYWsmyQjhvCdpRLKE1m8ib9Z1SEYKD8dRjHp5gmgfEd3CL9KLHpGV8p",
  "key15": "3APQXNJ7FEiCpcaQEgEDYMdVMEVDfS4v153KyDxEdHdEaHtQbGB2uETqDwx3rZ8pPBNjCbXjHMWpcq8Gv9YfmSS5",
  "key16": "4h5tiNY98zqzdYU5cHW8zK7sNN4M79jZcpuypnbwAw9VToF9JgpFTUP8SQeEgZdUZTFHESc3dixY9EQgedqRgDaV",
  "key17": "9W572KbNgQXkpyFPDeqRR9k2mC3Qkk3mBM4fXADSpQ3dzigdipMQDY7QxFYPHnAbxb6urh7KRAyPGW47HTHLgk5",
  "key18": "6nvf7NmxMNEA9LA9wkD3HrPJb3gvrd9Jpm5LF2YH7McDop4MggK5scy2kBuXhupRGbEXBCVurKeffKLJsg67tat",
  "key19": "5hYqooHskEnD65Gz2Ue5LEGW1sKMtDzPvw91jnTydE3YqoTXnt8AwP5goimuFs4gxSLqAstsJQHW5PRgjccFz2Ev",
  "key20": "66R3t4a6Yvk2XPaMhLW7XXzXCBWdvW5rL6XttdWSzB5H6UxuwSofTQ3F7eXMBMFDxxsmRD13nfxUoBp3ioXa93Sq",
  "key21": "3yoXNHNXFsWRGZgduSqS5PF8kXo3kFac8TL5qBiCoCtmt1fDRqqvX9Ge8K7LsXuS7ff2SeGHEcBBEasiSbkGNkhw",
  "key22": "37SQ6gopDN514xWfDjUeot6nqge6RkQpyZtC3yDgeZ8CE9Xwsza1Z7ekBdZnjCZsrqtxpM2PZSjQqG2r2dMqAEGm",
  "key23": "4TdePtAgv3RiA5C43vKNKbd8eK2WWCUZFrCLSmhzZKxxw751YNLU6xruq5HdTzk1rZ4sW7NzEtbyWZpDpzVjRYLx",
  "key24": "2SBVoFHc5KrLr6nQUmzngt2yHcoozkGos6SWBhVtXTXWN9ka4QLLehcePsZhT2Kp5esgu5tNMYRK8eJa1LqUyK3w",
  "key25": "5aXAy9DsWEr5PMMLnxiXzkdaQkQcZUx1SSNq2D37ZX1nR9gfy5ardCTbzuUwsK9AQWXCikyjh69VN7QusnZBSHSF"
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
