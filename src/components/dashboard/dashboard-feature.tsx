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
    "3Ls2mKj4UUnX2ZcZSsFGuVkNhdWGKZWcpwMooGoesQKBAesCiuMZydvDLXmNahxs4n38UvEHPr7mCvNcgHxCLvBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65XrrEqaoFsjmevnaTyqJm3pLJpv6fmkpUDmv8dAuSXGyPL9DKULsXBmNVknq5Z96rBjX5rvPko2rraftGb3cbRZ",
  "key1": "2Qth6hoJeAQmVQcUiqL2TfUzGMQoMEhqAq3JJW8SwveoBKn5y35KVvWCxV1JEyW4cev32kdJQys2bth2GzjsBtr2",
  "key2": "5vEPa7yi3iZGYEK8BJfDexnuHjtoWVKCEbJEjWfS35YBQ49BbK4CnPfF4iFcz8fpYQer5ecniUh2hysJrGJPUXre",
  "key3": "5aEScEqyAV6ESimVMLdhDYKFmQJzMDw3xaWWagaDyZT4YFgEtJgQboXZ1yneHehKPUGm3ArY4b3ocVcNTPNAS1Sx",
  "key4": "5ofBnydpA9PD1ywKKopaqXkd7M9LuNMkDWCqw6TmtA9q8JAHcxN7Svj2mbeBo4ELMTRREN9g84HLJWH4KqmsXqRj",
  "key5": "5mhKdX69oR4dvd9BMSNxKQfxM2CbwJjrbV6dMiL7risRJaxf275ckSsjJD3sc8W3PMqYjyVP9DzhDg8zEzhRyYwE",
  "key6": "4jBbq35T6NW36BsfTzZcV1BpdHQJmZqVTdb6vpH7R5ThtVt65zL8HH5TCCsRFMVuXHMSPZBY7HTxcE3SyZkD12an",
  "key7": "2vk6pzbQK3iGkZe3WGT2rPkwdgUG1zXEjdencvjE32ZxLLPVkw6sdTMH1gAzATuY4Ue13nFjPQUZgKtQTKrEXxWH",
  "key8": "2tmJJqnjbt12SbAmQLe4cbnNE1wbyuK9i5YrJBhVmyxuUS1CcfUh25o4QVvQUSRtAgVABwV51dRGeBbAkZhHgoNy",
  "key9": "uPByr9sEKSX73tSJF1AiBfW1ijCWiokeMqcnYCb5iayimHXb89C336hK8ELStFkjCwmpW8M2AhWtTjiKW9x1Kjr",
  "key10": "4DMte5UYswZvnDNXysLiJqKUy94tMKPeLdzdss73TCmDEu8pJfuxmHiazDaFf5j2PLzsH29C5iqKbLdegXa3KVos",
  "key11": "EPMK8cfkERV2BoTinmQwcR7hfZSTuc9HFMUbfEwGFiR7Cvzo9bnaYu1kz3EFSsBf1vrpMBdFTWHh9nYeTygdvAv",
  "key12": "5gEDUwoUqRY7QhhksSJ3oab6aUvWU9MdixNzqB6EMku1QP3sDeb9nHAfxiSYXEyEqwKj7fADz4f23fHXwqwG3q8q",
  "key13": "4K3EcPYU7QszDKoi5LzMaKHraNRXRehTkX2qyBgHtBpf6ihkay7kiHuhhxWYNLegcMESbtcvAYvyGac2THL16h9e",
  "key14": "4DExFeyEg2YJyEAWHYGz3zYGxWv7ia3kq4GC1bExege5gnzNURPm97pFd7YLeLhMCX9Mcnp2BcrRP7vbJsMQT4zr",
  "key15": "3DcywxSY5QADwmJgCufbtQs3rzXVfjYShqQK4koznr82dWjbkfiL31TPtuX8dKhYU299ReUdJaNQCxpjJwiYX6XC",
  "key16": "2nPuBCV9wrQSQY27Mxiz9mfXmS16FL6EDy9n3Vxd6CGDo7diqPRwyEBgmJLbgu4tLPGRxuLWqG9EbEuTZxRzmxnF",
  "key17": "aSUr4GbPDMiBEMgX4yN9gyuJiYHco8PPkoCLLvCmv8GgwgL819642Pe9zyWd2q4ouBFGdmjACs9PDGGcdV7URqU",
  "key18": "W45DdXULVCyiA4ZjteoCk7x4Vv3nrK8jNUvThYwNLHRodTUe9DDbeURKSALtDX5zJr7AhqeMax8cgh7svP46LGm",
  "key19": "LiDJKQraKV5JMHYiQWzvQNSyn2J5XyPX6YoyBoRVkpGv2WEwHv6q9ehu87Rvs2WYWmnTAzCosjWBr7i85HjvNct",
  "key20": "5NppJEfA1zhoyKtahVW6WWo9UtBRPeuTgSm8KMbd1dLCSkidJgTMPrchv5Mz8Uv8dbMoWYhACshCrYmYzhLQrPXz",
  "key21": "4C9gWyWSVHVjL6Ltxttssve8UfHwkUif4vtQw3FtKLxjsdP1Lk6zy4nHY1t2GaN5pNELD2SrW6XHreMcqyUBBqaT",
  "key22": "4yJbRt2UcaTi2tJTHMrwyR6ThgoAp1RZuWvCbTqrt2hS5VWfxH9NPXmeFAhLRZwvptJV81KfdPG6Buo8c6g6NVsc",
  "key23": "5myiETVvBFFVy5jtvy6Ghc719PpGjTUhCPKs111kmHY5vUtxCbj4KzeTysfd5hUd3rsPLpZRF3xANV4UhHC2Ktz5",
  "key24": "BJn4izGHSeqXQrajtvwF9arBJDrGPG9Wgk7ynFpuDjdSyA7vtFUoWvWtaZ8LNog7hAuYxBAY59DYvF1tJfnjC1c",
  "key25": "39NXL1KmLF8d2rvJHfbM1BeA58P3uPZJRUTmf45hLwRoHcp4BcywwMF1GXrkccby1bdwSvRCrF3uSMVw8ufq5UJi",
  "key26": "2ENtcNwS8hvDGJjzge9sbd89CMfFm1hTf1MYgGxYRDyaRijB1G5C75qvMZeecJiss9MPm7q3ACPB8yVEbYcdkmhE",
  "key27": "5Psrv6FH1TpQkeLdHsuVpavWBZuxaDz7W5ARi6jvkgQeqL9dUnDqidacqboKPH1tiYtfoftRb65YZtRGrw7jHijn",
  "key28": "4XcGjJhLXVz6HqA8CWYi3xKXadmESVYX4wqWpxCAQLEuWR1SrSSmkCe2Zb8A8Qus7Bxc3PhAJHmrhKfvT57Zgt21",
  "key29": "DMNRiMYWWsABtVDVPwny8Bi9XPj3nVb9vLYjpVZDd1e7Ew3NVwQrhgfjmh4bbm1irUUZe17Eix37DMRsKjg2WjS",
  "key30": "3LsxPWeAtESzUaRVtMsCQMaeweNU31nH8mJTraNKaiW5vdXPN6HkeAknoR9iVQywTYPQPz4rPMkALbEvQeqq2xAJ",
  "key31": "2MctqZ46sqRomqbCudS7H8p7R6RSNtzMVnQmyyGHhggSuKKdzgqzTvZWV8eT2AaZ9yvfMi7avNkhLxJNu4Ry5UPR",
  "key32": "sipd6oVPuttTTB7SV1ja1Fy7RhCRntE3gEk7BdF2iNPoTr4BQTeBjbJCkRTbtRwAqLwEvhzKmHCLj7ybcPugjJ3",
  "key33": "5EjwxMv3jZj72qr982nRNJxHRCFQkWeryZoCpMpeePi9eiJU7Ffrhjx5foxWEQKWWsndQh1siDhdFK637cegiHbM",
  "key34": "aS3gcmZQncPYV7akP8oBDhnjXpNKS7GxUduAWjXiMwAPC2qHTx2acoBzPfZGQbNi3JrfLEEEXBDDJbomeFNA41R",
  "key35": "4WnjAvNvVoMZmmNkRUpy23krixTSxiUiazsWvApgPArYz6LAkKLQMUNBVeSw9Aq1xDmneVb8H9Xn9mAcKbmCWWzB"
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
