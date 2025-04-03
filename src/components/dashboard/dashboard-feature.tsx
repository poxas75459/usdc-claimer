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
    "3a3frhVcowzDYXqgfGs4hfHKgMvYphLu8ijTWPMQ6kzHmv71nm9dd3A9sBQGqooThhuizuE9fURdxuWGApKVgV1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EShGsMGAAaALHVsNw9SUoTsytiih19WWQcuL9Ru2LCs6NfnA2huvekynBjPUhhJMS6aj81wZEVgJJc5aX5rehpR",
  "key1": "5UAjEJQqv4R4ZyZ9P3SmrYnA8vterb7qqyyst65S5gFMxBun6JXeNHgmBzw7w2e9afox8MRyrQwknVH1fBRjmj5f",
  "key2": "9nVB9cm2Eu4D9MUraAHMc9gwHqQKAkFE2idnKm8fShtTfX5XRjVRGgDmLkZU5TSaWaUQYnJ17pFbKnuMMDLukEf",
  "key3": "3WEZ7LUyAmJfNttQrrQJEoLbmuKfhGzJYPWgTmrB7vUUcKtxw4jpxAkivMHePTHeXNwxkLX9Q8ZsKgyEjbYyJW6S",
  "key4": "5P8LkGTdBpbgg111y8sWQsZMjrAicG7thUv89ceCfeKC9KvY7m1e8S588yvFoQxDe6ybBHv52NDcNVHcbSjqwdB8",
  "key5": "5WP2zPWspRFS2G6nfZ3Deg1XuPXZZVNtbVNfhfhSDbG8pKsAsmpVRHGpwAz455PDzG8mWNWprXFFq2xsQtZKF4PA",
  "key6": "2HhtEFQjZVaPSx6i1qMb9tUcicJ1Ssy6dr6wWCS3TrBozBEAKBfcK3xY3aduGi6veiQq4MLGgDK9WNZHiRHnCvm",
  "key7": "38DLrDLE6KQ4EnreC1Y9SHSZQD2y78fTs4xnfuU7KDzQYTx3H7QhPdStMiqU6KDWn55j3Tf43mE5eS5Li5ttYD4F",
  "key8": "3PkFBYScj2emMLgvUYHCK3PmMQBRR7ovUCpQRhH5jQhq28PJ8zHuFAMKNB4jXQsrAaFVp9RjT6nN2ts3hEqa2Ppn",
  "key9": "9nNopHmuHv4HpkEzCXpcP2ginuWP9dxTuC5SdsfUc5KekS2y67vJeqRsjMRpXqU5jUsL5aiNw9G2fC7kEBUgUQB",
  "key10": "2NB9LrB594jsBQb3HQrkyBsXiGvRLHJqtoFRmhUc1Qfx5rSGyKU97LzKSXWNyfCenhojMuiQTu2LtRLiCUTXboNx",
  "key11": "2TeEzmv8c1B8nSb6AFu2aHEN47ro3P4PTLhy5VHtyF2TkpmTzTCL2CAYjXteJbdivZyNsYZ9VTRgyy4CYQ9BfEMF",
  "key12": "4fCFyYGgSXgonZtPZ9GdQi94GN6koUpdavMP2MGRpTAfPSJ9susepLjhn1YrkznVfb27w49Pfk88TddbbTPdgoLL",
  "key13": "5qjVaegzcey26hsepXinsYecMwJr4CdZXbDGp7ux8xdbQu5jA74Yw11uE2d6RY8vaH9vK7Sqhi6gwPqoF666RWbf",
  "key14": "5uWjsqb4cZsJWZTFp2ANQtSp5LsHnMohFx7F7tAWzDEJJMyUPwawgiE2HBXo4aoromMSQ4xYSTZHKhtCCP8Z6zPF",
  "key15": "5GtR3hNgPauwpoVdbbEJ7WzqdezTNSNkcmaCPx6z2aK81m81bgCKo4RL5zrK2CWuFV3VR1UNpE8ZQwcXPW594HDw",
  "key16": "4HEp8LvgYnRFEQSdEDYkdVJU5FfUzYQhNv3X6fQTXSF25tGwNLhCV7hKTk8HapFF2inX8vwgv5VgtyGb2uxduUKf",
  "key17": "34pSUBBG2KzqksUm8DxvkVsdpv8SJayJ3fSKLz9xpkQgQU7LzAKmSXTn4SY3gLdyruwRk6y2KdLkuSG2673wm4Cu",
  "key18": "4atahmxZadrM5AxHShRaCvG5pLHm3CYpPofdWzq8SfNsEdMqu6nvYJuaws8LTg2FrFMD8D3zmMJPfQ1PaHneCYwN",
  "key19": "XnLUDP7QVudGKWZ3tRAyiaqdbuoZhH2ch8r4nujt6yjNQAQAEvFMux5WvM14wJ9rfFfbCCUgGycH1bWXaAnY5YG",
  "key20": "52trsZNBLTsCPP8ohgKiXYCNVa9kj3pQNGDyXwLbMMNLHPHk5cviPaPNFNbdsRkFLKXUNbMuNG9sc8ThcBxaUubY",
  "key21": "25cbThzsKdPWeyRWUcq6qzmFMJZ996BYfnFn5Z5QTngLUxShgZ1A712o9y2HzE7s3HvJiKUMob6ZFqGeDFq92QVy",
  "key22": "3JQDCdPorRW5qqne3PTZJFUdtgyFPmGsmqqUALyn81dutqvBgQhH5AvRXh278XNbTY1WYB71agCZqxYQa3uAE2Yw",
  "key23": "5Ldd3q1bCsvuwYsc6ZyDHnnwLaKgGUZkSz5w5hGjzhP7uVgfTfCToA1RUcs56eL5h2g4C9wjCPgSy3M1espetf7e",
  "key24": "4fxeAjH46pLojErfRw9dLd8DZxwa1spW98jThg5EAMmZpF56yhr14NonD2Z8eKZ9ihM9mo6kwLBWvT8xzzBe9V1E",
  "key25": "3tofg2qN7wtHzzMobU4VfsAdU26uwrqA1okDXFCTUwyecScrymx7s2rfWCLQ6tGA5ryf5r4xa7ni17uTgWhjSjHH",
  "key26": "4DxJZgSVurrE8FQ2uwcL8Vk5FCtBcyyfo4vLg1rfQa2GTbqS8YFKTMQHkHpcowMdGc9rmbX3dxqSu9PNV48JmTLy",
  "key27": "58YEFSeDyD8RJ7kx2vRMFgzwejsSs3ZBGdnaccrUxMbCJPdzBX2M2sginjh1yU3p9L8VM7BQSRDNx2XRPJzSUZRM",
  "key28": "3vjpVvy7ts6yZQ8xzKT1CAJ4kzGwsozPXgPeTLWjGAz7DJ9SAvSeJCGoUbWCeF6HYqUpKFtYGAafjtPVdkauh1Ce"
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
