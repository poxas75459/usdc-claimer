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
    "5oUurrFhEsimUEZ2AKc26KNhrs1knYL2WXPLWELoANXF8rSFjdSaZ3PvWKVY4DhkcVfb2oBUbZaEn5HHcB44uXXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hGSVeb1f85cd8t2eWKXR1buUqVsuc1CbNArv567STrQs7S6btvQYhRViiPjVWmPZEMaaDFx7gKBES2gTSXpbSA3",
  "key1": "3ck15iVqHXvXbFZ38DxeDai3PvQCc1ppmMVEXLotEKULwDnQi9NS1MpWCXs1SXrxiwe9vN7LDgiYNE2jviGiNyqG",
  "key2": "FfggcUEwdudyFD7iUzbKVu34GBqxLtwaZ3tDSN7yJaZ63DRA2cyZCcCKj7VBMTbApys2gRosrrdQtcZKejVGGPq",
  "key3": "36RLsMtp4JP92oS4jxqKwizMvCy9Y18gENz3JtpaJ5G28KLmxs8gJJ4MZUio5dFV2oahHknAPPNA3fJjfKTArNhm",
  "key4": "kgriEyfmxTpTqQXbpQsgQX7Fx3dkZt7iB5ziH41dKFiMgy8p9L8J8Ypm7Jv6BE6tq9ozRrew498vtuZZzcRL8oh",
  "key5": "324EKjmZPQFGtMUy1PDYattuE3EfiHVdd7hPvavVSsxGKBxTSAwPtwVy48CQjHE2xW3FZiYonLkrXzVGWtqKSJ3k",
  "key6": "jqtsWV9Wsp8c8pCZdTtx1nuSEFJNfjoSSh42qCdP62WxidghNH1ZG5fnRNCnVMsZ4BFshAyXKqAFdPZFmwzbQqz",
  "key7": "4Kx2tDMyXJmSCUTk5n4occD6mH5Vt8e99Txjz4U8zuGnWSebKSNeVbduNzKQA7v5SP3GpigfiMddEMAonvCQvWdi",
  "key8": "9uEGW6cy5wEXHDWUUuszorytrCTXoWXetckZXu3Wqd96Cs2vLC59Dd3tAppzMjVh771CscZgUoFi8Ae8v1PRM9f",
  "key9": "5kkS6hYhd3zjdDnNgqKQ8x2AwkfG1vBGoxYh7MzYnXwqtGPai6b1Ro5ttpXnx5s4baEpDpKMYBgRJmoMvbuc1H4V",
  "key10": "5QgzYB8ESMcVtVS8pMY3Hvvh9omaHwFEGuCw7vZUfHXJammLoWUNQDkLUidc2kqP4RbSy2FS9BJBt7YPwtHkEAhc",
  "key11": "JPzXp2hHkuWdQVXwykegiNabAivFmEmqVJvSFa9BSm1EwctzaeBMe7xnnBRSvZTNh4tsYpmvGPVQ3ut3FQuXzxZ",
  "key12": "N41UdpHKfw8F8opEPVp5J4seL1RynZ3JX5hfRFtWqH6Ywj3wCdZFBevaCXqFGUvQjkShEjs4gHa8KuUyht2Qsu5",
  "key13": "iBhi2QqCH1on2bH9W6mAkAUxGT175LwqSuwsdjtPQVUDmQhUqzT1sza6sNLBYUYGr9wVU43gkViH6tjqFnorXWA",
  "key14": "5kCS5MMPP1r5EuqerRYUh3SHKS1uepH7PH8EjAmysG58cyrbmjEGJUwu2NPC4EzLEHcvhi9io486QNYT96NZxZia",
  "key15": "NvTtPepiCGkiAPJFmuP3qrPNrF6apgqvWoEb7CfgfHAZPatz2PwmVSowehNFArEoGyEEhw7QsZKM4Sscw19bW72",
  "key16": "558bZBU1efCSM5Kk12thFoHJt2pz4UWHnEvZXpssgVfBibP6rxjwKT54mLBy6Fmps6vGCwWSc4PeDFKQ5JJbNWpJ",
  "key17": "5b9zW2NmJo4T78LMfcegNwhNev2hXsmY65mjGwX2EoR1tuSmr7ZrkH6WKCweXf3PM1AWbGT72CXNPh1YJm1UpRsh",
  "key18": "3dMSv76HJ8AxBenPFJ9BY51tfcdB595jWMvD3Pc5q6B37wZVeNUAWZqq73egB3qMcZEzLATFaMCmUQB3U6i2Xhj",
  "key19": "3Npnfxfmt4k17TBBJM6mjf9R2AhSDyWgxMQr5cD4KiccPerwC3ejiU9WETZ2ACKMi64qnUzvC2EGRFJ6XzQePaCN",
  "key20": "2uYLqAYokd7kvFUUb6YVHqeaJDuw2hvGdbGAxGCCPHeDbxC7Do4hqGposZ7EubxBVv9LRcRUerF31Hr1hSWZ5Uqx",
  "key21": "45enPcATDBkquTprcnRk6vdYZnA6Lhb72gWEHGWr5k1MB9Gmpsbn9QSBegy6JwxtnVgKtdkuLVwh9DzCQ1MTev7h",
  "key22": "5kUP18EYno2CZYKdPitKPadwTNrhiZBnks2AKjoGTtaaZL4FYRWsGBZgDvLc9mP2snXXPZeSHZPfaes68noH6f2C",
  "key23": "4E2aQszgUjmAono6ytK3w1Z7D17wquteKK5ESH8VY3w8j54zukFeu3gaPkg1opJMroSqMHMeJHCmcYchop5ReziJ",
  "key24": "5VARK6RLQP1BKBN5Vokyezwon4AXWCHpmyVGHbWW6V4a38Fc7LxJ2MU6qbxpttfkQ3su6hFkfVydb7STQPRvmowj",
  "key25": "okfNd7EXJ2pGn8wBQjTVhS1NP5pTNFXov21DEnhp7WsDr5zq55bRHCVAAXZp5yNWoGDmV1NgS1oSC7kyYdo4B9b",
  "key26": "Rtxm6axTZUra6JrPCNHrv6rKEWQ3HLKjEcMKu2HzyX2NoU1x9e1oL46XfTd3mg9NCSsrgZXH34v7TszgKj4NKkz",
  "key27": "2CmWDXAsQ6tC5ALEC3uzReaU9KRELCQ1asiXWZgJPcq12AeSSvjxj8Wxu3Xuwy2uhSWvHeQfcrV58z1siErWPgJm"
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
