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
    "2ffdYx6hBxhoU4ovvraxWHJw71kSS16m7UBwwUqAkWaemA4boAV7Vv6EWaiHELnqNxqbEFxdgSKYfGkfXYFPJAWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vm8Zjh6GrPNxhb9KwX7TV9WjJjwSTbk7tN5iGj82cxPCbFxwxqpVaLeuGDEp6yzySQxxmndxEGSoaAKzArAzCgM",
  "key1": "4Nx6jmv9bCr5fDFthpNA7Pry1ogXNpGmxNdhKjGvJz9PzTK425aJAdPT2eR1SBQy2Hu347czoPDAo3wFVbmWdkER",
  "key2": "2M32nkJhEJ7AJU8Gz11eizCt6j1NpkYcrcB6UY8TiEdEVzsw2mVrFFaJbeEUQuEnBpsUhh6AqhEdi26qRDsRF9aq",
  "key3": "CS8DA4fGyZeku8YrUzrevUtqMQAAEsnVuYPZ8vSJRWzsUheoVfDaF3BGves9b6zPkXdc7NU4Zjj7TxjyLeaLzHQ",
  "key4": "2igKT3ecGPRpoeMBG5Wrp6mRWUw5Cs9FuvAkKK2WJCRhiuhBPWKut63f2voqM1T9FBp3U81Xvt5BoADTugawBYEF",
  "key5": "3rMpsVecM35nf8QQRRt83GFgsGHc5Ap7vvuFnXiDajnQyXCN41QQwZSfeU3jBPa8xt9mcoXfmgbatXMCXKLhYFep",
  "key6": "8J9EU2xNoVNe6MDJyn5J6YdGTSrYixvaHYMYnhc2EPZiEwLceDfAiMHbzFhv3JBB57Gui4RZFJX5SeKjp4EB8qu",
  "key7": "5ZZ6BRmVYrndp4RykMvEWQTdZUExR2xTzSHiXgXMH2KJGggMk4yfe6Xi9UQKRZFsSLtpWH211ozBcxyg9ve1skx3",
  "key8": "4fk9faENqRF7RD1NWqFpLtwjjPmgyAvy2cQ2tLDGiG39daiydgA9sNabwKNmpoiZyQv7Nj6iMBwt9RD3eWfQF3yh",
  "key9": "1jYUfsxcuReJrk5Uck7xL4Bo1S8B9TWE7NMW4EbjxHgPHAqw2zuBotrrJongg5tcx66HMtXkvKCmMWQpej3Qidw",
  "key10": "3wGjrxKx5rYH1asKH8kubYu5QxepDAcog3D7gV1f24vP62s2MMsX7udQR8qCjXYH7m9qMediZHHa9NKp588yyy7W",
  "key11": "59wcqbRUxjfK8LXB8LrqkTCrrPKnzrnazcUganPj6xoLmFHqkuHxba1J8oFSLU5dcURVzMdBdrmC9ZmjL598V9AV",
  "key12": "2M41b1rqgMhAPtfv3nKHqbzSZ25gZ7XkfiHzgCAK7W7ZdTQUFX73bKmGbGZoBat1RKQN5qi3eGdat6XgBKTbJ3Fi",
  "key13": "YCBSmmWCYjNksQTe3qEYcpmuXm34NEdqJB1uYJH7CcM96v29Mc516nuJU7S2tb3bnV39emKPvV5gXKS8FNW5eca",
  "key14": "AAcTcriheuDS3Y9j3a8bcxt7HgFvtfRiSX6MShk44i1hD5Xk787wq26Uwp93xSNkCwG1FUHPnsjU5tCDGn15ers",
  "key15": "3t9AF76nVkR7UpmjSQ6ztnsofvdfvrExJ6QrvgcV17qRc3gAf7LYfE7yaYqQcxbkvPiLA3UDoQzGD9wuXsiMQvJH",
  "key16": "4aSofEtrLKcp14ufsLS4B8WoQyG25kketZsGkkQKD6U2QVHyV3CrHVGz3rYsg4GDqQx9QgahJXbNtRiAC56k8ASF",
  "key17": "4pqcJobxweRXAG8LQ3cxkVMD5Tg8DSjcf74oZeoK7NrMU5oQ2faiUN7XnjohHPtKHV1AYwbqSPquPKDg65uF4CtG",
  "key18": "2yqN6deYf9faE1UaSUf21tVfpLmHDdttWvupvvKcdnTc1EnkUtvqUd33pd8S3ZywpCcAeiSARmC3KbsCJXBvB8Mt",
  "key19": "VFkN5iLkx6kxq7GULrUrrgzV1NLZZLAo4bszMb6e1T7nADMjNBbJQjEo7ruUj4Zpt4UhKCeF97e3cyKjfQtVhRr",
  "key20": "63vL76Tx5TfT9TMYdd7UPo9emyKUJtPZoA3e65sbpccYc5erjbmfDeMJSpsqPKhqGGRSVDDvTrZcp1gpvKK1n3PC",
  "key21": "5Wc6rtZeaX8DLwpb1799hXkVoUTUJBQNtdbDqC6kSb7UeYqvTDpz6Uowbfd3D4NnTVTrZnXN5VFdNCVyK3Cg1hr9",
  "key22": "GUQDqYuXpxcjhBVGyjjZBtGpH1fUAh4pumufzCAepARpnHfkxEZiJ57ZMfiwocXk2iH1jCdzkQ24mtrxeUdqMXo",
  "key23": "5RMkV6R88S6VCeTa8dUHQMKSQ386FaD1xUb5yeg8w2iWF6Awmki5vkDVgXqYQfKfpsxehqz6VEAhxcskVuyeN5bF",
  "key24": "4NUww3bGFUyVfNkqSs5pN7wbkWmAadj7R5QJ4CLVSZ6w8zsMcmJfxUMd4UmqQM2mDvM1D4YQqqDM5Edw8ibKgC41",
  "key25": "ZLE1kuDjKurGuR2fkz5vDCZLuRMiYRfTCFKquUJgDwWVUY7Ygb6yc8tbKyqzvZwLYhBdRKXYgrtfwSd9BDJH27q",
  "key26": "DTK5tSnymrBEWBPUcMaTkjebqGwQqyfZiXLPkwQcSu9NxufrpaZarn5GCgoBPioaxfhpkn66j8YwvPGVh4AnzUM",
  "key27": "TtR4KUq7YhiaAJrCyCREAgN9jK4L1UbMGKTMvNrVovtuCdJhCeGMk7GjssX2f4r3QC42cVWsnxsujS7zjc4MNfm",
  "key28": "25Ssxs3Axj536Yh6yvodJseBbcqBP4Vo5x7NypATikrdDdE7Z3jiLAEpBv6prNyBuTG1h2a7uYtPTRtW5teJVfpw",
  "key29": "fCpdZN2jV7zL3waPkxaqjBGrVrWT3kTeXriwFcjwGwSjxP54CZ6DQcXYyzDyQ75VBVY8KpFRH46QjhNCC6hWSDq",
  "key30": "66Wp3AGuaQfkkhmi1V8wAvnmRQCW7ahbg6EZ2Rra12aQN4Hmu3mur4HXBFmzPWLMgFS82f9cQ1PHMCZij5AHsdpv",
  "key31": "27aLaQuaR5qUPT5jT49McePTDDAME7CYLsfbPDnb4pmX8duMpXTBrkDwwZU4d4D2nCaVJ86k3whdRSN84CCGEZT2",
  "key32": "wYjBTiB3Ao7mwEMafhUoECpQyrqAHWhcVtjybqGYyAKE2ssEPawK3vg7cEwxMcqpwn7PR4Vun98pZdoiMJPBFQx"
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
