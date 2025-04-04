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
    "4LW63bwk8htxZ4VHEjbm9oo4bmAHUZk1qP8L3bgZVEEMGdF6SsQiSjMSie1YfT2FVMBpE688NqUfqQpgVP3WwzQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MzVaPyQNQKZ3nz6sECVFu3vWPRkhXGEqaqt27QbdZfAJk5MiGbednZyaGEJfcini2FPREHvD9D2wRx8jEtDMj2",
  "key1": "3a478vumQSd4j8wYnFxGyQ4BX9fKwyTrS9P7Y3bMY4D5zp8DfrxUdkcWWCMWqoLo3SDf4MPmAADmzBZebLFXwsX2",
  "key2": "5MuLQoHxo6NnujKCxWbTXjSzBpfpVTM5XNz7437e9qVGKvektJMYxRGWrNwzTYZWt4Q6AMSKrHp6KwQrz5kJ53UD",
  "key3": "5kepWKto38qe311MMqkdiAYvUDiCGFCV5JBcXgibLDmybpnNkcCx6C3JCAD5QaAMFRbC3qX7AjVqZzCYg35jZZBE",
  "key4": "4zhkuf9soF5EGQ3nUCtPqrxJsYYxw3axEcRQ8nTz4AC9chQpaMP66kVFojgMKULi5YYW4MZ1Z7KsSE4Pv84iBgJu",
  "key5": "4G6Bg6LzfsvDbikXHcwyEvs7SswvBX4qMPixkESbgT2FTtDSNoQrPUBvMombBtA3rdwjJ8oSwsVq52n5ATNn7awp",
  "key6": "oJG2D6wAj75QwGJwCamb4SzPHPzopjStkCwtJH5AyK8s5TRMyF6aveQ3gMAazrJQ7a4xjFd1p4Z7EKrNvnr41k8",
  "key7": "4h9G7hWBt64hbEypJSZEWhYrT9QUWzB5fPDu1oQYXpnBMLkaYcPA85EExq74kSQueGDX7CuhDG5eY1zNXoUvCWWG",
  "key8": "3YUzUMsmuPFBaLSRGUNwJeTAh9fu8sYXMpFnYNbgjogF1o5WD5vHGWbEdogxwvjCHZJcB43XZ2Wc7fqxWw3gqXdX",
  "key9": "4E5JRzm6GvuFJGm6ge4PNUR7XD7FY8k9wi5ahEQMPVf84FLox3USAdgiJwQrr9m5uK78eS5EwnjgMJNeg1ndjZCz",
  "key10": "4XifUGbSpUyt4ksiRwM8FdkXJqvnvvz7QZ8gy5XzvFqX6WQ1fqxXuc7m2s2wt6iSEQ6EYsDt9jd1ne1wZ928x22r",
  "key11": "4pkp75Yr4jgsEEpnKFbB5ASjyKa61S5ZwhtnRFhzWRPoMTECFdYaZJWBdd76LqFBYJKh3u3LHrPqHLrG3yicbadE",
  "key12": "5TJ2AC64C4a7znWNKTX5MZaE9hkLkZP3Lbf8eTUhrRh3eMtH2a1Vp5EmbJZVrJdNXpMmsoWJJ1EZdQFCjmJYg8kK",
  "key13": "3uhTpm9eAGiFqxXsi9YMFZzXbBLZXUR5FeE3Jx7qsL5Ku1PkEDyJ6PNkYzaiCj8CmTtNQcj2eEEjbmxnim8hTfkJ",
  "key14": "4XBXzcqjSB99LXQLWKTZyzHVUMLC2QEVx97Dv9tCsnb1gAsAGo1yvqF7PkcmkUs7DLP9hA3uex9YhEjr3Ma4DrY5",
  "key15": "2C17p3qwaoW1wvYef5PqEwfF56TJ1Ds4LYvKDMJXaoCaaqUJnyvoJBX75vqDpppgebhfx8btYQLQsp2JDEH5B8Ee",
  "key16": "56gS1nyXTFqkCKUmdjxPybUV7XPTspTk7Ttn3dXNxQYg4pthfv6PXQFvTB9iFiNdxToK21NPNTz8AtjwFQNJdcvo",
  "key17": "4dfkQFzPQoDqKq1rRwKsaSzY4TWaBSWyQyACQSuN924ggdWSpKyJsxtmZvBD6DM6GRDkRnJ5V3mRdW282B5DU4Gi",
  "key18": "eWpzPwNaxAcJt6sq7dfkVRkveMe2x25UbZF7H8MaMCP2FEFoXeZbKNyG5tQcBdzVJxC2uFGVkgmnUxGfDVZ4yTy",
  "key19": "4k2d2my8RiXVe16un5CJXMoeyZHwdfSTWj7XACEZ3CevipXcctQf5dTq8sfEh8oMHUSo7TJr6o4dWN9EH4DYmDMu",
  "key20": "3ER97iDktPVRdDsrpzoK5rtgNYL5PeVNQSawUtFJLaug1yYzbHmGNV8SqZQ3UZoKkgdD15eW6ux7YaYsGUp15mC7",
  "key21": "5WFeUX7ND2pkXUsZZNamPYfWP2qyTp8iiFWhtPFykhEZdtH35CC58g5XwWeditEVp1GAQqjSBwvnzfbhJQt5VQ8o",
  "key22": "DGkTHXvLtrRxQU7wnXbBq2CUYepwieFkCAXE5DCCqnfZYpWPnUHFAADYtz4VkKmcZ5xEXauc6pyuNWWaCMmUunj",
  "key23": "fym7SBw2AjKXPbR6zE8NKQoSgpwuXdgoQ9JhSxfRB3DLnnwTrHC5Uh9PyTVeB1vS5RkHtG7Mivt9cpAu5VbTqh3",
  "key24": "5qyTHesxkTHjJWiQrvnrJh4NgJqnZdZsLMYEwDZeQC7QzmKuWfVjZmNq57NwKpPMgiUGaU8phBmr68uygkrFjfXK",
  "key25": "4rAvm7xbriEL4Jq14uZiadZGcmW6PCxuquc6GKTzzRU4XyR287cjt7LVjiJkmbN9aJhES7s1xZGiRxkXLXpDDhXE",
  "key26": "382d3PAGp3DZh8qoEzQGqj56oqndXHC3W6xAmD4M6cD2bAt7owpqCBDQyAd5B3ohmXL7Xkh2jVjBUWvvW3kd5fEH",
  "key27": "5rscxbKhApq34WnGnALdQzNByUvpfwo7oRsP7Rt6SWt8uNL7RButPGqSkXMyWYXR5cSjjQWDv3LhGAmUPUDHVgr",
  "key28": "2pmPbKAUEV8XqDw26V7CCQ74cTGuhyoEm9Vb8a2hkuDCjQxP2HybTUaRqz3TspYo6g5VR4T31iRfq91cZKHrnETZ",
  "key29": "2qQjKa4NhyuuyXCrMEfZX4tCuMXtfMVy9b2fmqoVTtXp2gFE42SF6uxQaNWdioqWYi9tZHXcGrkLi3Ne8wdAGe1j",
  "key30": "5rM9DaDFzTsoCXh877KT88epfMTGqHhxNvsmWwyrTyAmifZP5rGJAUcz19EGJYPwoZ9eMQPAga8A4ecc4f8KQamj"
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
