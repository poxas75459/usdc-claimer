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
    "3KzLML2SGEaiU6pcaUrdfMXiNkgTg39hKVTTpzV6oVE9os91bewMhu4CoFvdM8amRpSzynnYtmM6gyvEb2qPdtK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DWt2SYitLKWLtw7owu9z2gy9bvFRoEofYzNQfinEwYfqKjJyN5hbH9cpQ1NYZyBtBMiKU5jEBD1MEUMT1kCTC4M",
  "key1": "4jcEi5BXEBwUWQdWZJSUkbWs52dYFp6Doq7EK9pVhTELC6Y6zRnFDFRq2moWhoqNFKqQE6ytwE8ayduVUxVTxDBP",
  "key2": "3k6iwJbsF25bLsviTBMS48egwmkK86TgPTiJLmNaE7EM77UrycYvqxE2VgjUx3sgfTCU1u5qkYjf1a539F2F3RKQ",
  "key3": "3eXWsZ1XFandrzd2sYB9tpErRkg5UuRbQTicZd8nb3Q71vHSzu595qjjLv3Rv6XZPSZGgJLxUMTExaaMYnHdNC7q",
  "key4": "2s3kBeoQbnjzeum371QEBBLnGT2gG1CwQe2DSFvLnXx8N4YTjP2WqGqFR59FLdkxP2dDrB2exBbmBox4zyqsEngW",
  "key5": "4yVfEU4ocr43d61cVahkZbVNHVZahjEsEWPASxp4Q5ZZES7HZJPCLDs8WfgRhfcS392CvNDWBDTX1BKg79U8tDAa",
  "key6": "2p8mNfd8uQ6tKszCqhhTDREcRdZ4UBF39m4ZH73EEFv93Wvfx9B1czYvU4iHc43jBocm41c4gHevFyqwUMgVaSp8",
  "key7": "2xqSkpHEEe416PjxBwMoYiriLKww9G7QmWktV2JyDUzowKm6aXEPvWhV6Mq2CuR9rA1srzzK6m414JgHoac7MS7g",
  "key8": "62GSmttc5vzxFvc9N6KDajH7gnLSmZXcA6MZRqC87uFEjVc9neFNydfwiJNhAQ12kkaqxahTxdF82Fq87imabenA",
  "key9": "3gZN4Lhnb75ELLW1wYtZjtHaohd2XmhdySJzd67oX5Ys4m6MQoDp5Rnnk2mA5qTLKoU4AzsgNmfyBZCUjoNpVgDk",
  "key10": "5sfxHKX1wTXBrWmXWyQKTeiz5MXLynDRPRyF1UewQwELUXKtWuMK5e5fC6a2sAR64mJChnkCLMj5WtqLDk9gZFtr",
  "key11": "5N9PvT28wi3Mpfyi5kEmKhXrs75zjEndQtJurPVyTCTRkRsrtsz62eYdqaEeYZ91NzVeuaqjpeRvANyvS4sbP4Yw",
  "key12": "4mbrJASH7eex42AJBvAuUwZXK33zNQrojZR8QHD59uA758Gscm63oWu5Evu5sKbduSmxbRrsXwyatYrTw4KfDwLf",
  "key13": "2GuEn5QpwGAjafL9GQrAHMuJmEvXhqBTSwaahcyjaTY6hS25MYSoizZUyg2BcUn9bXr8Q4JFCjSJDTpxxnEwFoBm",
  "key14": "5K3UUyypjBKTPAPfixKftkCsUk79GetMh8Ro6QVimpZACoFB6jutARCEN6AZm56j9SEHwpu6h4ZJfj6b9C3z2Uav",
  "key15": "5CqrWgKWHMBdjuzSUtiGRusYQZn4iZ27CM3WsGkL7M95FtdEed3SSKjz1s3GiJw1hGAuDkvxy1PBxmeiUgdvwMja",
  "key16": "2gSQg5gdhQuJ2EygmdExTGoxyRkTKvTD9Ep1tgBEGqRB9m3sxyXXQwVbkeY71Hw6FR1BrRvpXax3etEPvUfT6MFc",
  "key17": "4YD2uqdF95T7irzekhR6KExPDT2R21X1Ars8FZ3wcWQ2K6VH31e8uLELwvBxf2Jw8br5J67PTackgTGbijqCMDHj",
  "key18": "2BubS6AGA3LK1nANKdnK1TTceiFS45ksb2Kbmb6TSXvczQCJGK3Yad3xzB4Z86gVDfQzzzYcwscxsaBpPtfmiDqb",
  "key19": "3gHy3XyLxBh23WyVNxwP6UdM9ttc42kh27dn5toXpzucTHS3CgpDZbtNzQwckcojfafyaCXqo6bwVqmzTWJVshFG",
  "key20": "4KVxLXyBpLq7C2FfeJB8b4b7NXsavRN8m2ABXPfNbcryeWLGhEBNNiE3FiSMiq5mDU7rCkvuz51iDAPKGeSAnnEj",
  "key21": "6CKFjCFL9tVMQzwxjwpNGMyP1UHUQBiJKP5t2ZAcABZfZisDaHTzec6hZg4C1UmGe9z9yteZwwhZxT3SJ7vLBUg",
  "key22": "23kUoZHq7RxyxHS2pyPauXzf3tb7XYq2GscgGnZ8z5DamBDFq62crCA8rXsLxFW8b52ujWX1diTTpLE3qpZ1ZZTB",
  "key23": "4acz47nmoAM8z86wXHmL8WJY5EDxxVcyuA1SgyMZLhhwm87CULHTrEamTSbvXUAWWtYz3JfPFzDW9WsJwirdK1Ka",
  "key24": "BKtwiBm2guWKKv5vv84iT2PCCRDCcX73mRhQpjsxn2g2ky6mynytNbMk73skNoCDzP85tFZT34Qtag2mXxGpuEy",
  "key25": "5VoQy5w5z52nBmZ9rsrNPxD3dS67aQsrXo9NTR2LmNXmCq17LqyLfWEJyKwGE2E23hLexhwixvqiEErbKfbDZ9wn"
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
