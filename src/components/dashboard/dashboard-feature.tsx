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
    "67qrArML4ij6Xy4YrXLEuhUMzHwdGL7171LLaUGASCHuzYe6HnEs5wb6ijUgzxzwhJEWoRmqEXxF5VUkLfKH8nuY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rTXHKfZwW46TPStfAXgnmucAC922vyPmZtUDd16joj4DUjGdcuvAtimnsUvSLhaAQazLFsKtVMnwPZbGbPciwUy",
  "key1": "13AHF7CtJjkLK58Vga14JmCfSZuKg9oDQ76b3qkX8gXvikUkd8kFT94qxeY4Z6yDQZFbmA4CnZWNa2jA35LUK1p",
  "key2": "5JtvxEXsxrE58LkmiYrTWaGzGFu8wJELMKq3ARpTyQRjyE1wy8kkfViJRUNC1m9bfHrLesUayNmzXdp4V2BsWGE5",
  "key3": "2XUQn5rA8Xord62bHd78QXrTwRbewiuce38jXCXG6EY4NDpsEWrgw6vqg26wkm5uX9NaMoiMB16Kwku5jkqGPDX5",
  "key4": "2vq9BeVis65U2UbfhLKCTTDQdjSZ3MUk57urjaQpnzWpjVRbv2jYVqm5QynkzPCRBDCRFJ1J6CwmGRFBhdvpG79o",
  "key5": "3g2GEePd9KWmEBLuBwoGgWJVbBAY3G5BzqSsh1xtj2LYm6haK72yZdCfJ34hQoxVv98PPNH2yQ9haJzYJhdqjT5V",
  "key6": "NjBsUougbxLPyZ3VXX9ECxvEjD3KKxXjEigxZmq72QAwL1vHkVxW2uNCg5gjVniN8XCBZ72MUdFYnTBMqi8ujAN",
  "key7": "3uaNZXeSagCjSaCWPdczJHmtFLjWUKk9XqpnBNfcGMwqrP9ziorjuVbyc8d5uENiSzL9pAbSqsU3Sy1RKKvUTYbL",
  "key8": "5FuWsgeQAVjipfbvtw4nDQGs8QnSBaVL549SAiZcwApAUUEuHQWVbf8hvaHvFGAqqtVQrypYnxHoAbDr79K22gUY",
  "key9": "4hBXZJLHVVxwPzDTKpC2MUY993sCJaqcMLxRyoLwoYKxGVzS7CEaRsiNcLoR8ZNS2wdtsUXZoTx2PrmmaZZAetSc",
  "key10": "3wUia8ndzkn6PZ8Zdc7sVoiPDHDBkG9Q8VNAxd5jt8pKBRkhDGUogu7VvnnpwjjRmbmYGheurHKfEfiRheoLSi7j",
  "key11": "3y7hTiXsm4sKzk3Zg7o6W1qkUDRX7KE9QKST4eZ9fNH2zcZm1fnk7HgJkqbpikLi96Pi6Ac3ykAgEm6gmzgByZKs",
  "key12": "38LJHfcyGTXaGwg3s9SKjpR81g9x5KF6VFexjeA7shQhSRrBkMRQwWpHXp7PCKEk8yqhNCZeDxnnCWEXjXN8zBE4",
  "key13": "5GqnQCDKPRnaAz92YJ9KMrVdQWdR8LQr8oZm9jR5tS2Kxy1UTCBRmMCTxjjhCVwAeS27XnSvFuszs4gd7Bg4JHLL",
  "key14": "JNoBonW7NiEi4jNJ9Ta2EgFMpN1emqDKZXZGubfK14U4mA7PgLiaza3UgaE7c1Po9dgDYTFpg5xn1W3sPw3NkYp",
  "key15": "bMErfaxawgcjMqq98tLKxZUCU55Ah7t5NcqNm298g9T295NbWkYJARBUwprgYCCMxm7US9CE9M4uBWniyfMF5qB",
  "key16": "4eywHe3ppSA5z1aG1mDsGbkpxpfiQojtCDZU2DkUxzuXyM7ch53zsehnCjYKBBqikxmwuSanDxjS1ePZJSt626KJ",
  "key17": "PVanr6RV75HTzXKJCoFS6h9z2M1Fdtrxhcez75wn3ra5wPAvK6Ap5s3PftZ3qng1dr8MjaMs2GiXvMctFiq42Er",
  "key18": "N3TUCb3ZrTJ2wex5dkfDZf8bPtb8zLJEspuxigHb2B9iDPPCrUYjA57ryfCZxkyPBTbGr79Vfkdqkzpf7ryciJy",
  "key19": "45LXWMo95DK3ki5QQaAnLaZn2nPK4qjgNBXzgpnkSQRy9zuVK9fqauLrsoXa7ZKfygCmQ1x5AhnPUjNAsVP4Ly3m",
  "key20": "5fZZpAz7MJEQw5aArqvrFKMUBrWuC8g1PwTwe76UHmEUM3rwuNKPjf5iVYTySP9KRW6QF5B2k8ALxE66XoRbDNCj",
  "key21": "5xzjHWifrQXFgQUe6L5SG1TXPLjKwEn3AH9JB1djA2GwZuwhz6KSDG5MSDFjnkUzRVDF4iJa6vrDWq8SxpJvhgrP",
  "key22": "2ifQ2JGhX9b6YbNJeHhph39nHzBkdnQs2NsGS8eWN3Y7mVh8kmphnHZdJA8UKPHCLHQ6A38n6iKM4HjV1c2ppEFg",
  "key23": "4cGn8DeHbengwQnJ74eYhLAFiMsyGYn1RoEFYFj3fGSfkYBEeXvc7jcPDoXjKgSnNH6C4XiTK3W1doDVzMxHKWbe",
  "key24": "5C1fEX8NbQrYXX8y1SGTYvsohWG5K9oYdfvzNyQ8u8BB7N2R36E84y4c2H7fAyFS7d8N13CCvGkp8669EXvwPNv5",
  "key25": "2f3oFk12WNSK6toXQGfVpAorQr2bJmQsFN23royhPjGHuUrYJSkK5kyJ94Qu2XXQB2rR9dhwWEKzUxEmqLdcy2Nv",
  "key26": "5ukFGrEdccunRSZVixLPwWRD8ZFetxbe6bCSA316PESmFg4tvybR1qtYkrkUQD4eeq4ncNcNUxhWPAidBbREqbNy",
  "key27": "5qgiUtShEj15CU1kvvaY8pGh9qm2CFwEVaE1hAeXJEpNgqH1FQuWxiNmmz9roPKcDmJyQR4rEAmo6H7nxaVVY59x",
  "key28": "2mCDB3gnrPP6s1V4xstC4QuvAGbQmRCRshWUjbc7jbywUEctKYkvhbMJx8Ct9tmEnzoisuJTNyXeQ55TMqbCzWgG",
  "key29": "2UQVVw5sU2uJ8x71XiG59CGWd5kkVQNuCqK7HyYMeF6Z4pmERewQD3ApkFGWZVRryDz5VRkzggJaJxG3eB7vr3Ac",
  "key30": "3XVN2JhPhVDkCk63jY71G1hxngA7kUwEmKATgaWYCYMzbjaPsA73ui4HGh6ocE4FmAwYGqsRS8exaHUf6ewJAuTd",
  "key31": "2kTQ4NFo24kDoSECgXB6mW7zzSCns978aeXLsyfo5SkB9645FyEftxnEoBmT9dbK5x9zoqSNYPYkf7atd8ZpcEZ1",
  "key32": "2svY7MM7VKRVyai9ycHPt6an92efWoJk3KbYmSEsWZ4WB3ehjJ3xj93Asmh4tCFBoyT91Td5K1pPVGJkJFqMkEBJ"
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
