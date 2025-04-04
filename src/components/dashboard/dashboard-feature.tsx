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
    "3ZBr14V1iSWvFSdw2dApo57ghKsAHGpSNJKH4Zm58FFq5EmQN67b8fbDHJ2UnqCeTKAnmae64LGyQF3c9HC7w8n8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GEhKRUb4ZarXvJGF7vYkxFKdg648Ng4kbm27Y3yd2msAYxwuoDkDiyMrQcS14aFiisBZhsAzZpKAJL57MHDub87",
  "key1": "aPdf8L8NADkqtwsKjDWeRbUdQnVvJE78dME6YGKNRxjq6BEb2JerxfMdpKReJaa76Pum2s89RrAyK49Zr8HVfnt",
  "key2": "2J2b7x1FMomsWQyHDGoaUr2r2979oHugTGa7i46Dit1ttciFnrmXKZfKjmTJKgoq18jMJHDWjjszPuVkpScdurGY",
  "key3": "6ggbxipZYH4qKdD3o3whZnabJzbWTgCBfkv6XbBYQfRCM2r9bvAxdSCuVX9fDsMREYN8SCBpTghUWq8Kwmd1v6K",
  "key4": "5K72MpPa1ckPjuiHi5pHBUxYkVwE3Sz5zHk5tiQkZUtKNQfqfXrzxsYko1QPrnopAmii8muWzHqgigSt5okCyyT1",
  "key5": "NG9hUFavKLvKN1oHN4Ep2DNiMebMAN6XvmGzwfAAMFkg4ojm5z85cgkFze8JfVnPmZpYF5uLsSU98CDBymb4yfF",
  "key6": "4iiwXuAG789RzFCvpPFVev6sPnjTd5VXJpWLUzNVkdKAa6NS65PyRXyXiqFU4ouwX6RwLY7hxbmEFdwG2kapPEL3",
  "key7": "KNJ66dnrtQHDGQvi3TRrNsev42VXwxcMq9XN8Dc6wtGvzaEFvAreV8ErBepLdNKQcPXVfnV3oXSKGzoSaTXY5r3",
  "key8": "2x7r6xyegSxkvkbQbxBtjKzVNUpMpLXv9AM3FBvdSfLCnY1QaixdqwGtsUUSx7UqtdE1EUaNrHS1daWKLwWAWmq6",
  "key9": "ijGaC3JyxDHr1hSPMs88n5YYL4XKxoz8hFtBp5s3CYomphJ9VnLJiAL2nnH8SgSdQRATsMdeyBgwRrYwvmxwooa",
  "key10": "2yWuCzkt5CdCmDT318Nwhce4dZ7XVyKQHwDuKPY26zZFQrEZdap7XUmHTobVVHHk8qzecF6FdaFZBkXmC15XATbw",
  "key11": "49bUDEtNoiuAYMix1RiTBB5xe9AMJKLgjTuWhLALqDAhxzw7E1Ju3J1iXVNAU1QHUjB3AYSTq2sob1iWtfJPHfJd",
  "key12": "21QTQr4TcKnMRrFDSjkr9SApboVF3VWAjCF4Lw49gpz6Fax4vjXCkLtrTZgreB9sd1Guig8s25JB4mwpJ4nwC5Uz",
  "key13": "263uHnSvuETsde1fy5DHYQVe3ZQ2ghPFQ3kahSU397gyTuipDUNoysHZUEayRZdR8f575hc4St3LqeZZZz5AYHRZ",
  "key14": "V8caq43N37Gy3Q5BHf92Jz42dyXZsr3YSrVXGMfC36Cbk2emfz2Tsm28EmJqRikJenNq8TgKhjUqUuL6r6VtGBX",
  "key15": "5VeeFLUquaLXLSjttnopuXUq6C1RzBqisR7EZ4VzCx7FU8zzStJ567H4JCHfvFLXuo9eYfnhNzDZozxf8Ap2ibuw",
  "key16": "5mpprQRqdTEoynxqUd3Giw5Vb9w1h14WnUzMgQsJmDC1rajhRfnyziZdRQLUaoaCeRBXEQq822yaM1ypdfAeGT3A",
  "key17": "2arjPUeTvcnVAGpA8EiTjfPpsYnuf9CQ4GFwFdwdnet6C3a2EdzVB69ndnJ56CMUCxRgArofNkE5BFRugvTV7xpf",
  "key18": "3dHeK3hq2HjozQ5Pmq33ZzJ5QyoQ6i5ubctwyDn9wsn6p4sxop7RZfkJdRKrnUPRhDH5PxKuRbQsfDAvtUtRV7Rf",
  "key19": "4nYi6cVSbQKNcsBoUisEHuKXnBsYwkJjnvkrzV2KAqivjXwLHZhyK8QQQ9iKBHWnaobNdGiTV2kXjekSbSHFgjd6",
  "key20": "dg2Bi7KEY8SZw967wQowLFSZ7qqFFDe5KKdv4LKYBFk6HoP5HDKYMZVp1TCPDJinLwF5Rc2bmY3WUUUkCqqoL6v",
  "key21": "2ZAjNmpKCg8FtZQAPsuGp3trVmrpSxd9iiGLxV8obTfJpiUJn3WpsNFSuP9Kc8jA8dNhD8trHpmce2QJs9VL92a7",
  "key22": "4ieEEkhwQVCpd5KbxdbLAtPmKWWS7WsRbdbbQ4KNuThSgpU9VLwkTiJW1bewBL3xVD9XVJgy6zbTMYQguMcT8Nv6",
  "key23": "5ACmceMFmeSceyaqKE6C86XEbhQWkrgLQ4gbX8r1DVArc9in3qasepJDSCVgHZfvUeEaGk1sBteAz31fwBuJnzBn",
  "key24": "3m3nKxHoZtGzAraeTdy37ArJDVqmLYr2kwVLTZoqwqhhVo1hjLsiqHSha3kjMrBB22uRLCB3qiw6hXC4oFCGPPud"
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
