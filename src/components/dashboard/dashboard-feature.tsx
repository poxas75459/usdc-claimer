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
    "54GjgGbZWYXiVLMggL16vfK7q51cWzGn1Aq7x79wzHPUqgSScKSXTiLZXsUBmSVfR9MWcSxdXm3N4jAMcMrS68En"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HZQKu7RdQXxn5K8njtS34uJDwnGgUZwiYahKfbVSdx5s2Yo95hyZ8zhPKbQeDCGxo3dmKGdMoAY5rRvgNwJCqwF",
  "key1": "2AYzG4EWbb6UtcvTgnip4oqQreczajfP5BD7HefC2er6mXTD4B6q2LyEdRMHp2FTgDh5Cbxn1R7j5Dn1Zjea2ZWW",
  "key2": "3nKHKRZjFN7fxdG868MufKXURpvUpppbK3rV6kAc6hEVUUJxSEUJm7ryvWcK1rJMECAKwdkMzBHFp3X6CR4rvLgn",
  "key3": "3DmZXsAT2PatiKn7AM2Uetm7SdoA3cHRXAXJ28WknGwHQK8LeizKCFXbusZYzcn4bZPuxPtGG9YG66e5ASpwwLY4",
  "key4": "4AqMKuWZQoR4y3jzZFMLscjw31Fnpi855hRkkgcYoDHymvRJZedMhm7bGkKZJhRVx1ZhRveTk9pKuipjEEjggpNN",
  "key5": "2QgnRPGLECzjvg1MLKw1QZaZ2ST6i6YpMMzZv7wbKJ28KvV2t6vH5tXeGESrWcJfU6ytjrWepHMs6SwxKkk2FEfT",
  "key6": "5Fmy8VBi3EA9JpngYEQtYCoksnk9dxUNpptFwsLTr4hjCTqteKJuq399DL7gsV3Cs5CCYwnJgU1c5nYawp3PPsiZ",
  "key7": "2nrfrbiNWXgmRvxxzqhJaXAa1221nwmRgdjLy5ZH4tZdPY2a2iadztzx8GJ4kRv8iKUe7ycUuUTHvkzp5QJaQ7Hs",
  "key8": "5pKdqKHQhFT5qe8DMAGbRuXinpjfd24M4vnJpdprXwj4ZW7qXkVjoEEUbXshYXvdMdvY6JtyjEarJgWDHehSyVux",
  "key9": "VzxBrqHf8rpErJ8zG8onxnAa8dk1MDccRdt46r956XXABssXN6pLb1TLMu4fLRx5Kn1w4AKg99JC3QJc3pBFcXf",
  "key10": "27iPgiRVvDy2wAgrx1GjaPTRBDCa3zop1W8GPfNHx3EQz4bntPanGTYsow6F1FiNuG3PtAjvLZoyMZBSRX4ZkCKw",
  "key11": "3EzPtzg7SRSYXDXZj9PtzJKzWzydiviKz3dJbWYNanXmj58Pjmqfh5xBSBG623tS1PALBhHANvLxPd3jCsbgDMYT",
  "key12": "4Fw48GkMhrs1cydj5nHS1WJTDD7ctwTw44JPfxGCiHTzneDVXRX15f1GiwkogBgwr1bENhXbBLyU94B6cLSNNixw",
  "key13": "5WfqZ5QF3bBbiyzHUoc7s65EhXvV8jbVR4yRRPEMorEQJPzWhMoJktcv2btGmkkkZzLbaCjkSxP924euomANDbWU",
  "key14": "3s8hJy3tm8WGkqRtxBYce485MuuYR2WFRteghYydgXipzZ2Ls6tkuKhZSuNLkkeQJJY8gpV6JjrJtSExNQXeq1Zq",
  "key15": "3xTQstFmdHwAV58ZkoYuksaNjPU9egv39iP5LPbCNtNc7NioUVNai8QxiLk3EVrPUjykGUU2ME3473ULDCzArHro",
  "key16": "5f3mzKwTqqRUoLG1uoN2xn2d8S5uovsPbaGD4Rd1boeqD21k3p2TKg8rGnjAKzmbHoyVZmxFRJ5ck7ofso4jdKnw",
  "key17": "yvKy9eSgpVah1vvUWb8Hy9xrU5TCum7jhmRCKVnhYpqCE6gpjA82gYwciZW1e4TC28CF8wWcKZN1AafVYP1desh",
  "key18": "6Ft5k4WfsnaqLkh37bBx4AoGAkkXTRdsmCbxnvuWNxTfCAG34kvPNNs4bWKsbQ9SMHeZ6GkYS6r44CyGDzmDwDD",
  "key19": "3ARwqXcfyuTStjUgzLhdXCaNM7sZKfVW5Ugmo6qv361neVcALeKiJKRbvQkxR3E7hPuStLm6zGw1u7H8sf7LJriv",
  "key20": "5HfC35fKL1atE2GPLfQxxd7UwDcR9kh3bmqf44sjrPv1AvGyWWPRriFpiAUAZRZmWiVmwHkChuAuNT1FHeGUmC7b",
  "key21": "3kiMF1TsYYij62nGkoKW1Np7hxaGwKzi4Bps4wbKfWUEqfFgRuhoUTBhRFKBuHVRTrNbjkYVekxv1xQ1dW6Pvk4Z",
  "key22": "2iAZtjKe4xJdBpwbNEk6FsLG2ugYp7GUVjb9HFarfb2bYsa6Dqb339d3Gg6nEnBjG8iv5ptCC5Tgj4gmTHCKptjN",
  "key23": "4sb6SA9bj1AfkW99y9DxZtUogyyaruSyMQy5ahcoks6KxezCwjfu8qhaRDMyHmN9CyE38Y8PG614nsfGRB3urxqZ",
  "key24": "9ig11i8Be2EhGHyvWsqPomAivQ8rpMGM7PKoabS4M85dif27gcBpJoZap7NaMQjpbxHr7x9TdWtjFG5ezWV4MpH",
  "key25": "2eB8rEbYKD3u5Xsbf5BzURkabfAqAbuQnL1WfAuDiJPYnLyjJxyHqXc4ekbiTcyPYjn8LyEm8tzzqpkwsM4fdY5V",
  "key26": "2CNxGKMgWvgz7bBGEEhfXNLRsC6A4DYhnQr8TnCEwVBQeud8iY9Cwt6RipgVDfvSbRGxND6XuveNpom4F63TfWR8",
  "key27": "5KRMFdDbPjXnpd6X7DJgzT8F7s3EWrLcjCa4a528yUw5x7u9CP6bfMrH5X9yT9Qg5aVdLDZy8vZergbWvmazg2N2",
  "key28": "VthgtZbWzxd4EVtQqQ2iswLXpNMxLCxGiYFserKgac8q2bWFe9QAHiVUdooCbtG8PBeGPshuL9JS3wZMi3RmXwE"
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
