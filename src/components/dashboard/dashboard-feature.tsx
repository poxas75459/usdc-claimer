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
    "45SgTppTBoCFoJRpravQea6BJUFSNsvRuG8v4BEb5G6MmXeL8L8VQN6K5BuijhZNrDCfwfciccbpnpmA9BFxjqJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QjjsiGWvfTqSwSJcD5AaPsjo9VFNujn1zggbKZnc18ZHWbWBboBrdCGQdnopF1mzzh4D9W7we6eRwycycCKtwSh",
  "key1": "3tPuiV7T9AYCeWVhRu8ihdUG9KW6xHmkueVfj231Fi3pyQYaoRf1pEd1tBGFeHcw8PbaSMTRmophRhizhszikvC",
  "key2": "2XjgbVhoPqczRT5GuaEzS5yrr82GV42Mbb5srdvSXvusBfcAfWknmV7De1BWSpbWV8GRAQM6F2gsDXRRFkf77JcW",
  "key3": "4eV58yD7y3BrvzE5Bh4YQSCDfA7P2fvjnhh9N9CruFTA1w9TAHx934xjaPBeRehcUxbKEq8J4AHD3TSL8UFsiGVb",
  "key4": "58vjUQYFj1dPyQQQSRoK1ncpTFJzHZNKDWxDy8S11PogcqbE5AKVP2NB2doCsZ1hd9LDae6zCmfbBuYs2ZC32XKs",
  "key5": "2yht8QaquhksN6fGmeQZFjZ7L1KqQaEsFA9NFbJdcsJbtmokXA7utZVXNTqpT85zjQXGgq8GAB9E3xeQEL2SANeU",
  "key6": "4FZmrEkXeF6CBHWo5HScHeeBomN1xKLfktpXMW17mcXrwZ8pmqvVqX5fVxW6Z2u8WLCiNCU9gR8w4wXX78jX1L9k",
  "key7": "2da9tdPpngSxeUjs3Cv8M4BLW5D83dimZ8uZcHHybcUHg6tFM8f37Rk1yGnRQRYjARLZfyLxiw6B4HC4F4Jbk665",
  "key8": "2iXV2sUN6FJPBFHpmLZotv9xcMEWiHK8noxwiEd5PN2tAwyhREynm6AriqsTjndpQCYMpBdpF4cGV5FYXFHPJsmu",
  "key9": "FJUXf3JV4aYKmv97c5TjLbY3cUXerRFLXuftqLc4SLH2YVXE2anzJcV7N1N31TMg9kRBHYVaK6MYyEtDUwb2mkp",
  "key10": "3VGhDwgMzXFceuw31jds9RsJBfKvPUgZ3RnV9bu6GUXnCGx7Ce9hvdH5nRbqYAV93Ev9WaTYQqn6pMKtHMCmDxyz",
  "key11": "3Vpe8bYkw55LdWSoUAoh7ud4pJEF9wk9tgPwhcFciQz9PVfikdow2qHMLRCA6E2rqYR1YU64vd7KrE1QHgySq9Wv",
  "key12": "2tDLnG8inDx8kaVHSaLtPP4pWryxtLgX3z1s6GD2fSCYcd3SzqYTJSEWSqFF2v6LisbBJbTkaFhypWbPjNJXUYH8",
  "key13": "5gi1DXALcHS2RyBMBhbu8jRExyxun4Hfdt3VvVuSDCcuiYoC6JUCZrxuy7huUzCmsSsW9nuAngMBukExai2N3ygu",
  "key14": "3SghaWec3meZ7dhXLPTbSWs7feottVF4oVppAPMNBEtyVfH22uZC1AeEnb6SJpLxnA5iidTimJQwogWSeRxzmwpg",
  "key15": "47xFzgccwV3AP5F3zWfUmhKh2x9b56AzMsdJ6YdN5gB4hC6gnyDz65tgtaw43JsaxLLDFTtSDL2czZ5hNo6ngb3s",
  "key16": "22EaMncPzkb8xsByy9yZyZE2igYrEZvDofEsTdnD95ruUxsEyVUMdXYENE6gZxoCtr7rKP7bvMM1oaADjjL14LrT",
  "key17": "3Dru2HuCeiFMiTT2uyL5eUkPhKwSPBXLRButXGXSZjRiGc1LDzPu7HSqQ7HrrSVXfcoM93QPY82D31te4yiKmpmy",
  "key18": "3qhQqZ7rmqLjsvNEV8bsj23j1sQiZLj3RbbYEL6cx4DHdGyPbotpEUYtfwmCYoEsP6n8Nb5t6xMttH1qTd1ZDbNW",
  "key19": "5ZEVw4KjpYdLFXysQ51ZiS29etbfEoxKqgkkzk9KuT2uUsrHyxhEjrY8eHHV8J9PUmSEwfdwdcWeJtFKEPY9Din1",
  "key20": "2d762jcvjha5GDNjEW3ziMPNdHaipQpSo37jqRhKtp4domhc1NHZaFMh1Bd2oQ7piUwN25CVqFSzE6oNm6tpMFy8",
  "key21": "59dq7AxHwg5EbNo1vGUYKFzrzqwVV6UAoMDaXjsp5akCiYEGgpEXLVdPYpiebPQZNNXwEk2hox9avrpn7B5nCRZp",
  "key22": "i7MxCwvN1c5B7BuWPyWWK6384TiVLRS5oKL5Ru7QKKBB3LCG48yaYgENjWFkYwHpYQ9ahfSNwEJgYbYLB1Lu57j",
  "key23": "4X3T8AG4JvpkM3tcMMj91m4a65myh2LSgs4z2U37rd2RJnDwQEfoFXnbZbnFMr8KoW8D4RBwzDZRKznoe1CJpWtq",
  "key24": "3pYa5vwgwrUMFGmVxE4DYCfHsWxTEaajao69AEz7NUwjgJDjd8zqpFdvTb53skYENfvL6YGufhRNVT3x2Fy6XVwB",
  "key25": "7MmuV946ymyWoTcAMiEw7vLziCDzMf1RXiSok6BLDTBuc1NGj2EnYkv4wL9EGdpdB1cvWT2iuoahFG1toSZCA9b",
  "key26": "2hWDA1QZ8xXBzSyRGqqrbcrVQu27PnENU84rGDWnUVAuPoutP2pM3zBD7WWf8GeQGLMLVMKT3CPoASv5Re1EjxZh",
  "key27": "2dFqbDkG6AZPWg5vtwkUpWr1LTMAdbAFTTeuSuBkpN4xr4QcgT5U1gRCECrA1C5Z7fhc3dRjtmLdMJuu17NPbvLz",
  "key28": "391ozLxRKeYGdtBjr97uwPJiZsMraoqHcaMCcriM8XogyDh19GjxcR85p2dyFCenYeWu4bPcxFH5SzrbKfgHuHUa",
  "key29": "3zr3bxjmnimcbKs6exsFbfQ6ByrBhPAsPYvReCDAwV7ozkc8J9TH5A5rUPh5qN69jfLABL4EoEDjBQL5zwsUsBeS",
  "key30": "3TsqqVjGXt3PoR4UG9M5njgzLT75qnhMuyYKYzac3G82aMP41bcQbJEPJ1Nc8VbDyJSYjqMUCQvceK3MmiW2ujiG",
  "key31": "3rGySxrWABnXPgYDL3rwGKT5sW7JFPmZBbWCZgiMhevaxHVq24o2Ad7k473KdNqnU1SKxua27j37YwqTTPJajdkj"
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
