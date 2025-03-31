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
    "batmzGxKRZeQm9PbJoNhJkS9ueXtZe7nDaFdzcAf1Q9Y9kngRvLHyTCQuGRm6NBd1QQ1k5BdowLZSf48KYJoLqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XoK3wvEv1EnE3Q4V4AES7WWoU7XQbXFfoRhrgSbNwwZ2acxQxd2SWkr55CdDJz2JaTcanZK5giCAL2thdJkwu2w",
  "key1": "2rJFjpiPWxCVhy4auVaGP8DtAh5M8859Q3ws4jpcxYSGjrBFwWhPrV7LgNtGLZi7qLNdY4Y7XHHRzFfX4ZGS674g",
  "key2": "3WvACetBNbxyg2xSooq6LVuK7G8PX4NoW1qUt8Hnima4Zn41YCCQJUf9GNDrA43ShVRjGKo6c2EfEbpPJ4SvRNXG",
  "key3": "3te6FS8aUVh6PXmy5tssHHZZMpvA33ReWCkPpgNDCTNbTbsvp6c7VTHLadQCykw4XAcLLCWcsDko1wWvKPm2qbHT",
  "key4": "3kHdCXGHEzNpA6FzAzmbzGjqPxuXh6zVyDf8HTXm7KfbhotET15TrZE1ishZHpCxjagXUk8nws4KGng6YGesMi4L",
  "key5": "3Eb8MDkfeQZTfBP8GECbwXc3Ey8bbcjpKGwL7ZhQCL2Tp4qiwUAxd8Y94Qfr8895kiYMAJrLUfJWvevTzhCNRRrg",
  "key6": "3UKemcwT8gkPBiwjmydRfNkLvxq6daASkwUhwMBvzTB5PbPhQxuEFgGFjgEjMmrMb7SkFx8AxQo58SvSYVYCApuy",
  "key7": "NuzbPnYAJdC2NktUGxZ227R1Mo45rvJ34RYeVRifwjTb3xTmjLQUz4znvy6tcApW5NHp14L8JL9cyVRgK2Qz15p",
  "key8": "9XoZ8YzoJnnzojvgtTVrQ3XUdgk6r2w5H5se31pYH39c3vyF2omNfvmBPxGaLdAbqPJQYf3vw2rqYPBYgCkBHWo",
  "key9": "CCEg1HDJnvihDRbTL2xw6v11LyLXeaqMV3idKG1shuJGiWVeFgxJDQK2sZt2E4ejbj6dTsd6Qrc1jYdaCWYY3eQ",
  "key10": "4aus7BVad8pdZU24CLg98p9tE9XrEJQWnuScwZRwzVhVDgP1CbmpreM31TtDBhWwiV5Byd5Wy94iKGL7DhhH7Pap",
  "key11": "3fbKLR2LL5E8oNs8164XpK6RYDKTNkiuM72Ag5m5JgBjQnzfcqqPXNs7jgjkaKZfhJaHnNv8fRgLu4C6iP3ftS7N",
  "key12": "4WKAUfkU3SQ7SEQwbnTtXhgEVsGgGFqK3kMwSCiyfs17Ey5AcMhg6HHbeR8vLQvvriGboFN7g5ydgEQ1AVbjZn1J",
  "key13": "2PzmWbP4r8Ya9LR6YbbXBf83kr6iBxCqRWFPCm3R95eUcxVm74v3GVHJdjynsaGYf7o3d62FhrtdXXSoMz9cF5vs",
  "key14": "3Y59ay488CsX6rfRV1tN5nVU1KAJJvcu2swJgKsDeh7wWgwW68bAoB7pQSZVdQm5QqnBVdDBYTeL6QSzBdqsAaBD",
  "key15": "5tkFpWMZkKcywV2nisNMpL9JkJViq43aVLb2ZBsc8bkUbos6wcBXCrLvacx5Px672yzFTD8dSyKmEB3AQEm6irPL",
  "key16": "hx3H4LF5TbVGKG5KeEtN8unnFzwZeEqBun4Cv2XMr7J7JGnXjCaCoGsN8Lxp2HKvCZGGciXPswqaCvSNfkovwYf",
  "key17": "2dDSuCFghrjcJMrFCcAREMr4H3WVQDnmXxJDhqhLfcZvXzCVLt2HtpTh3KNhEDsTBBfA8YKdmxwvKG4uXNCX3oXk",
  "key18": "5kdZFAofcEJFdJG5Hn6QQKLsPACcKMEE8Jyxby86djgcL25dP9C4pj1X6t7fHHGJNuitUFk95TQrBfa9bEgB28uD",
  "key19": "2L3FXgwuEbAbqWeWuzCFWzdQ4vVShsVQ4JLHzYNAuCxFQUwTGWj4gvjxqhFuZeopbSr2yBRiUpPadHscxyfxZ2dN",
  "key20": "4bf6YDfACSnVFuAMrf2BCJyatknRbVKmFWBRHikB6mz7BcBcdGgUzRz8wBVwAhw3Wb4w4GYNn2M9BdrBKVELa6od",
  "key21": "JeRnriX4Miaa4aYG44nFRZ7uZuqUw4gFZyKUWYFQdxVo5wLo3bjyDLSB1uStFfpDdPmjVN4qasLQmQVfVCgA5RU",
  "key22": "4jTtBbQKtwe184U8cHAUxzyT9gFLar4BbHx5hf9HWPLDUXCPWMVYzqaXokh5gzrBcXkedTZiEztPK5DMkERNxXwD",
  "key23": "5fYtTnPsTLaRbnVEbntZBgiBdMeCMPBekcyagEA4RYo3N6CwhpMMh8ky5BYB4nK593SRWDeumPfvvvkSmVDeTTcy",
  "key24": "2Jn9yr1u7o7nRXS5KptUnQdWJMvUo6MbeF2C51K7sdPG8pn7uV1fpxZccF6Mam1qbdaiN6CbqjUbcK8XS8uRTmAy",
  "key25": "3e1KJ2dYf1eaq3aHN2thywAqfumHCBJ9CzpxgRhrDfZZpwZsNUr3R9FGWQEE3wKvwwGChoMaV9vYEDGzJ6NPWLt6",
  "key26": "5eZuoUHGfw3fWfMUhMUNQuv5UJKskTKstAmdrNLjCj4vMKc9ZnfHEvm17wEhPoxbPZvHWobqDbZHPAgZLhnNavbm",
  "key27": "2fFa8nDutARu5zznZRMEEh1qqsrr6RQZmDjGPLmv2W4jYVXq6Ptum93eFcditPuAv9ykhPTBc3F9mF1kDPWKNEfV",
  "key28": "aCvkFdzRBuiinEnekpDJD39hcevJCybn6rhafBLUZ5T2RZy8QomoiTaKRB4n72E9TRwjiinVEyW7V82tedkmFkb",
  "key29": "47ACobQGzg1cFXexKfvSdHEa5uPWpZcGR8RQZzFmegVei4iaLjCB5XyaC7hz7SwKPB3peiDJjRwHz1hBrVYzJNuE",
  "key30": "2tE4tgsBnoGFjxhT7JfGXDcMBZEJKa4VF8oNfciPsWg8mt3gmUm3bmMk2tUtU9cbY1eCudF93Mgxtv8sBkKS2dG6",
  "key31": "3yofNJaBdZdaCuueeKcKra9o7fBFFvRZrCMaZ71MVAHdiLtNBCQtULDPQ4CGaad7wf4Pxxpq85FKMGa4MBJisV8Y"
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
