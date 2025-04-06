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
    "2cpyzkYdWoSRQTh9GhHT6L5te6EiDEE1KE59vBK3GKoU2ba8rbKHr7zScCQ8FtM2TD6yDRBqVTzBv1nACZxpmkAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NL3SvmHTyyxGG5X3LbcXmF75M2GoBf6uEht94pXJW13yfZaFWtnt4TAPPiere2aceHf3HxcSDfPSTRKzvuvgNi6",
  "key1": "4zDoqAqjqPUiTBTipPMfah43eQETfM34qhxtSa82P8JjW7w8CanGHAXpMhYTrCoxLnW2gT4tsk5gAshVxKHB8sVY",
  "key2": "2Tv5Yft2YirsijjfPK3opeqs9UGBoYi7RSQjLn9CfgKpH3NKAMp48hDiyRVn3M18vWs9NbREcZMZPaL2sKsQFKHR",
  "key3": "44QzS6rZZcaheMyrj2vq3i9S5yPimHmf8TanHA5yJJ2bEbQEuftRUMe8VEVufZt11srxUYy3ZPAHZMYTyPm5M9uf",
  "key4": "2j6GP3ZfHEFo1tFSBjgMemyjXRu5bfxqkaJS2nKVT4gHzW1SMLxmUe7qvEAQCpbJv3eWQa94EuxmqLYyRJiFc9Pr",
  "key5": "4gRhZqpdqhXacy9XGbNy8Y4NHvWfVF6cYmTG1Tu3zSWXXGeDxB2dCry8BiFJvuqEEZgnkqBGt4V4gTsB4NLMNbC4",
  "key6": "5F4CFXgVWmMT1gb71gdYjfoo5PaBtTTwwV6PffN742Kiekx32srpfp84UADjJNtBjKhhmLDrNvBaBTyWMRTBbxzn",
  "key7": "2xgwJ6BpjgJfeLKgRwsoBCRXzQezoEeoRBKcofszePkPkbHcETRuMueNrBE8UN4Zes4mVnftrYiEvAMQtAuKXv6M",
  "key8": "3zS58t1Mwqk4DLiZkxGNrkLVpzaQ4CqCisyA6gLoYp9rbLauh4FzAit2A5VNfCoHfAw3jeKPf4mFjcccYMSgHg6Q",
  "key9": "47EuhEP1VKKSTS5mJNR6iNptL4aJH9axFiChWDSmjWHkBTmeoTFp8xK3ekgRsNrFeyGbgin5ASZktC61wZbDHJ5A",
  "key10": "4hw4sjsZEGvkSDTG3ZwF9YW9DdNpJPhcyuVVtka1UcVAE5Fc6AVHVYVR86a91tyzgHZx6vQVcTcGyyPB4nUfSbXC",
  "key11": "4D1v3bpn6RvSW1oFxDE9N9aRqyWX3sSWsogHNw6pt5SzTuGakwUZ5pmAt779gF3FCyc2pThk6DuN1G39SGdK2dKB",
  "key12": "4HFCnhKL8AxjRVkDAvakmyhPYh9f6E8Hb3y6wSdLrFSH2BuTWtGGs49nHPGDXPVvhaR3eSBcM5Qkty4RxdSmiqoN",
  "key13": "mpXLNzUi7iGkLfBeYwVwKVvZeMdS1ZDWdNrUL93AvAo5De29fy4UjpthyfY5oc8hPmTN4dh4FV969z3tvAoj9fi",
  "key14": "2JUBjbmViTm9GymeLzXWnQB9G1NfubpqvC1cRWiw33FyVz4bTE4gpyr3NquDMSVprEcjftjsGfC14hW1A1fP2vo8",
  "key15": "DdFFLFhkYfxqDZZnBbGRAThw5i2h8JFd84Efn8rTMAgtAjLAThmkTf7nEX8d1FGHAUibgSxQHhWngfTqE8FiU4q",
  "key16": "63eznxiJAeW7oqoceH61SmHHAmKPYP4DaJ9YtFT93eaX6x5R9hwSrozQzwWVNVsZQLRdwrrJCKVDG3cByvcr2ySx",
  "key17": "3D5moEoVheu6zCyq1RFYB6wiyyssfBkDHhyh7o2H9wb7TbVAypZJd8vjEqc1NP1GuUKzJWd51DoB3oD8oaHqfT7q",
  "key18": "3v1DBcyvmXWyoHwv4rSSbAKtFDYkb5sq5YJAEFhyUSyNGKtMMuLhVJB1GEJDQ1YfbdHPWQCUWEerMCgf8ue11j1j",
  "key19": "5k4mpSnGA2dnK71bsLCc21uLnuTHSzHRKe7SCLm5bpWrYemzuyNoGQu2KUSeVBnTi9xPPybvzEUsWG4tFefWat8q",
  "key20": "4GY5cYKe5xqn5weR1GsHdCvhkVtCW3eWywXostpUAFWZcoLwqM1uXYJ6eNA8GbUGiaUrZfvmczR5JetMhDyC9rjK",
  "key21": "4fXEzEkTdAvPJUbE9PWiEMadNiMmokFtdcbH56qBSXxWySL6YuVd52VbpfUfjmY8HYySd8db7UmJMznFruiS7HQK",
  "key22": "42UEf9CRFnCH7WTSE3VW4mgcTa7J3xAGqRRsBpFrnEvcLcyYpf9vpRrZoAjwPCjD1dwv8p5Urey6Fo3iVumBQzxF",
  "key23": "2vkMq6AzmYEXMd5Bfx1Fr4Sm4fRYm1TjSfcm9X4povorifQceFHHxcq8VjvKLhFihfUBqsXk4aHgbRjwFH7wWDje",
  "key24": "3pv64GQrdoSDbVggm6UuXZbMFNPuGRUEJrSot5FCAAAVwuh6per5tuuUB1VhqX3nq5TvQ5CDU3moxzSDf8FB47GB",
  "key25": "45EfvUKqQm3W5T83WDwdrZuyLJgyhoT3rALDfqSpGyTqg2DV8Nb5L8ioLryuAfWgbMiY5zKab6TGuvyvjcYYnrrt",
  "key26": "5gGx9Mcx73RNioDeqrJxsgZbiLJKbQVYqY3ZXbbPY6P1umssm4Fm6mFdJqWp71KUQpncP9UqLoKYDcv75q5rftBP",
  "key27": "5Wc7HDZc3U6WnKJV4NLg25ustZm2WzR7peocWup6nq9ts9wXQPXiMdsYP7zBAYgUrL1pUPajS5jyEFN3CkUGnBFn"
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
