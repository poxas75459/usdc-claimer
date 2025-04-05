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
    "3y5DU9kfFWMm7BpD7BtWvp7vhVCGr5BjKMusvzWCsvuZZCd7TiZZ7zfGnN6QrwjDasgvhu4kKS7fcVmYkmJKKqyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y6mvRuXTRic7DuV4RXqtjwqAKFS3TNh57WQryBJysjhRw2Yp4aogpaLr1vNX1KCnVFv5rLaoAjGY9Q7MjjwyDCH",
  "key1": "3PTj4kQV7mqyd8ZyCJxiqHth7EkVpVxfGTB8oVxTKRaJaVgXv9kfrDj7RsAFZwCugwCfcQgRazVqwUMYiNdq2gcN",
  "key2": "3np4hsicMq8we6qsVWfhTQhdoEL9eXnuc4Vux6XuEQko7S4A5AaoF4ZghrHgyN1PdvmKg3vzbooS8gTvJsSFRSSw",
  "key3": "32KB8Pq8fmyCN5PavxnwzpLGRhpP4nFNf1MG2APMUzN7X48tZMtBRW4LLhvZFpxc1n9ssJ8XzTdADx5N4SzTSTgU",
  "key4": "52FfjKCKge8QryjwFCW9YqnKPDQLh4bJ3zFjnrQG7TbSNvGDrPuZUoSiqo72xaPrXVV54u6uP5W9nqGpnkQBVGD3",
  "key5": "Rreg9yvoS6AacaxNZfpm3B4dLQWqXMobsQzi2x7gX8D1uBk6BZsuNV2ezP8QjLn9pMLe6uV1s4WCrgwnU5nGAup",
  "key6": "5xjFxEXtKvFk5YCdPytGS7JK2M33kb6YNa6ggRowGwTxjNdeiuQiBsFMm2FQy3gYjQLcsEnvgj8opaZLZPorLaWy",
  "key7": "2tqHaTF2mgopZgyRf9cvNnRNJzWgdeaGucQ6QB93jdR3A8Zp2xPKwMwakkmKSziptTXbdNuw9Fh4BYB7568Ake9y",
  "key8": "4c8oozKDHmoh31iNwg58oPWU8BveVJ63cTQVtHreMmd6zTZGsTQg2oAsdz4TXX6JZbsz9ioUEvYv2HApQzNazWgk",
  "key9": "5drxh7yFp36zNKvYmQAxwTAazddcuiZchaPEaFUwkFgE51vAgB48BJQkZtyCxh82cqni9Wcq71YC83Cbb3S5Ay38",
  "key10": "4TpC4wF4L8N9r4DevMTWPpasN5RxKB4dNhUkFrMyAYgg1ZDUD8pAZrchvhzDT9iHSiaNEn7eEszZSpYHEY9MkmRe",
  "key11": "2AZbU2AgyigYE166cvV3GsdCDh6GGLhVkrqoqUzWnYMAgixyjRch6DJbzLg8vLb3trFdftB9noyp47RfJJGTKhPD",
  "key12": "TkHezomsUCg6ThU5zULVTQXLkexNyZPLchqjxXcVsQikLoLkXrhhqwtQ6X3yppW4o7JpjcFo7ER7QDbjAySSqkW",
  "key13": "3RQbgUxnMiKy5wZM88EyxPMhmTVWQvssh6oaNN7nBNpLJErRsCrBzP2AtXHnY8ssLUyvoctbAUL3hXj8ZTk3WUP4",
  "key14": "4BwSiF3Kf3gx2duQyXxdauPnFAU6VqvY75PrdDNBD9NV3L7AD2b7Sf5GiMGHTAwqfKU4J7Xq5kFjsjnJa1myUSbU",
  "key15": "5avtNtTFCQ4Ga6DGuUv5ZgbVxt9kETMTfvmZyrN8V7ASRmeFaoJs7tAR4g9KkVz6pUw9t8R9s6MbyL3iKh1i3zdf",
  "key16": "5tFEwPKFANYEe35r8P7oqHzvH3MVcBGi3ZASE5JMCA94hzLtNgyWXF9RNwtExeXmtRmzQribzPUfCzezqC22UAwE",
  "key17": "7HLx4gGraHTPe4KdnAsn5TNrHF3pKTHVhAHT4gLaK8tNyxaLQqkB3cGRXLnm2A34rmFL9gctSHigzERzSPMRpz8",
  "key18": "4biaRoSRmScp4pfjkfxDJ9MBW1Un5kr6LcruH7mfxUFLT9sjyHeTerpDecZcpevtgjMx7YN1kw3xHVGUWqQF29q4",
  "key19": "2dpqruaZcKw95pzMkDpFLdeHR3ve7Jk2tHyYcuNNSyPtmSMoCyxajREGhro3szhA9KPsRbfBJowto7hA3ftVu7J",
  "key20": "29Jd88DbpUXSTpzFwRxAjA95nv76mViMFjDWorFWHDzt4zoVybTWSKua6RshjLhzLBNLnxoYFUeJtDSHMYUAtvtN",
  "key21": "39pGkgxL7y3BiVteuXAfZmvbag7Zsh5gkZc6Qpoi2qBT8RwoFvM7rDVVvxFRHLwBMQH68chBcgNAo9QYkZNQCL1B",
  "key22": "5PbSD6oVemZtPSYUxQbtFtWx9cvaZStmLY4QNYBLuTbJ3A8y4udx3E4oy7zraFvqD3EXnbnmVApPpeWkUUB6XXnB",
  "key23": "4qn81UQT7isYdrQA8qWapCMGS623WjLHyP4byfCr8wsZobVrJPn7NjfGYUk4uyY2zPCYpveRfhufG8Csn6WPEbh9",
  "key24": "5FAbC6JgBNW8hKQjY9Q87wneyQXQGcgQVyiWhiX1VikLTyoc7b8xiwj8fm3h9Vc3AEpEmcJF6saP1xeXsYraVDoD",
  "key25": "cAKhXSjfS9YnbjW1g2TPWa8ES1Rct3X1kND2qJVobH57hKtKxDqfkjZbnDc6xnQvtGQToPkNUAgbMeUWEtNmVD1"
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
