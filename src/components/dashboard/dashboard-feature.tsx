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
    "5cQfSnDCmDC2pt1gjx9ZwiVD42euG718ZdLy2BQX31hoTt8MEzJpZ8sXZNgra5RkVzrDMibVQxL6P8SxH3AcMRrU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e2w2AGVQd26vLuKhHNea4AqdiuFGXZJ9a8oW6EqY8yYfWkmNsjA6u6wbRSxDLeZBXPPCid5G5KjthUaAnXsaAAx",
  "key1": "4d5ebP3vtWzMPbgjAqGb3MBfriiaTcLUuLNFMgBEvacVYqH4gGe5k2zuwuWZKYJ9KkNEFVtCKTTeQFnC3yhEUzxQ",
  "key2": "4WRTwbhCmt9L8DWAwW1Sf8bbnRMhXPx4u7apx8fEBbU6w2DwKyoGj2DKsh6DMXmskPhYDrLBJVHbaoksteAEbgRb",
  "key3": "2V1FzbzPpMWpYcDp6wu3rNzmDgdqHTWdFrCkSx59bsrmrjozdkGiex4MXdHjXeSZmhtVyyVNQTozAsxpFcfZ3Ge4",
  "key4": "4qJffcJgUVhjnz6ANex5krHGMZuMXn7EdANDda5b7oiNGufbY7wQfpzGsqDu667oYJ7xbCFiixmuuzxarhjfh9Zw",
  "key5": "2ydDdyxGaZ1gYeA3ByjfxNoPUMMuTed6RPTSJCzNYiHqsx8P9UMfvwXJjoeseG7nKnkfvpFodRRQ7NvUnc1Wrz9x",
  "key6": "4Pmi64rG7qyVVvik3GN3ET5jVzkQZExmY6vWcTv3FtH8rKhjTGNLJz7nWZrQhnEwpAFJ8v3jM1E8YJVcpi3Vbanx",
  "key7": "46h9gJaRW8HZhbTLUKby7DiNtr2TcSSH5AhtbdYP71FCJoqabuBdjF9a4diLWd4HA2WKb3xvo88bEeL53zRu6pBp",
  "key8": "5vZQu7RMiT8UsPDkLygQkgzbjYkQb9KKGFhcow4MVJdy77jCuXZKDLSyZDQwARLi4QQvrf1bRx6cUYWz97XeivEs",
  "key9": "2Hukd9mpNhuYBcMNjuQE5eCFjfGSU6b7scQp97fU6DC2NXLWgG6opnNLKugLtErVWa7Po8xc8Zr3mxkYV9rnGzvd",
  "key10": "5prwtoY97UwrvMDzKeG2YQU7tjSty9cmj8x7HiGJXx3Swga6BD2bf5bfyUPSqgYcGxSzwQzVmQAdsSaC5THTtfED",
  "key11": "v6yCdHHpHm8pqMUki4cMw8L3b6zYaWvWLTJoVGYT1FtviSskxmVNyw6fK7tX5vwWnTZmFmvYh82jfqtkR1Zfsmq",
  "key12": "21enbLZv7Xy8D1yHNHv8xa3dF6QxmjTYDybkDHVzB9a2nmeW77yS8TPqk2sDcVXHEAumraMWMRbJFhdg6Y1A5f8M",
  "key13": "5Te75tS19Z2NjCgsKbMBJdkkNrsg1qXuMfmxsmSoXbqm4QnBDa2rNBxkuGggMVK6HGbLk4HeQjcw7VQDmUXnzkeN",
  "key14": "595AKTrz1Li9WXBzwgbjBFRdarq2zR8cc9rEjahtC332ssgguWejGpVN5mL1fBMhyKZq96H1NtHz2hdCB8uiqM6W",
  "key15": "2R7mBA81MzXLNjBatXVFAHcQTJQtDNPjairW4BuxAUPvK8bLRRijHRezFh7G12Gt4RnoQMHWxfXRFjYpz8adhpGS",
  "key16": "4Tkxhuom8iHLn9H1gJyFgTc4rLLibXsqdnxC1EiphunuAt6fcVoNry1doXAa5VNmmtzXqqng9TTKXBDCKurNjns9",
  "key17": "NvhBjo97YYAmTiPGrYddyQRWaWUuSSrA4ygcpPrjN6BRHuKUmeLec56HQ3NsSqLCcfKgnN3o6xqy6MtU1auRk7Q",
  "key18": "VBzPehMr9NLYk65dHUgGzcS4vBbChjGL3Tp6x6CVBSJUribrKmrggPb6VimppHryzpmxxnLm1AxY4ZNAjZsPHVM",
  "key19": "4dLQg5BnMAk5NhYd7EGY5KJuAFEGute7GiA6E8mT13MbmPUiGYTUdNrfLJVMk7PnZMaeLUL7mptzg2WMNeTGZrdz",
  "key20": "afXaowgfPL7s65LY1ZvHWSS822yktr4dSmBAVUW24Yk8wDxihjfFttXXQSiZ7Tn7aK79wtyzG88A7NduF3iqEEk",
  "key21": "4ZB8zjDJyWk85QR3kt8x1phHTwAjVUAugsTcyg3NF8gtsPzh5Qh1DoSTeW9HFD7GGsWZgom5xCaPwh8qiMWX7LCD",
  "key22": "HA3NTqf52QGz2sBJt5ojhbsSrGUaKNdaJPsZ3yEmVWXrGgt3ab7fsv8ShM9uABeemQvL76M9ivK9xVyKUftEgit",
  "key23": "26tZWFZSfxS2uoLuEUiJ7X6qGfG7jLbEoc1AHm4RXNPBDvfTterMVubEwH6RExd51K9uezvxLkGvVU8Q8LgXYs24",
  "key24": "3ifxjCYUxCBkj8mQFn3YC8PC84QrK6VbzECQfuPWkvBSr9vvgYhGuwvPXgu9YsxDeepsEEKzGEA7KPxP7GaExGLj",
  "key25": "5TkMM9cZHhYhZQXR16VToBh8Zg9hQrkZA5TumwzTd6m3SkywERaJuAWRJhxKi1bE36PZWXqw7vyjhXo8PeLhDNhG"
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
