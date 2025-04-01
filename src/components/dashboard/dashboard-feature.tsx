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
    "VE5AcikUkYRLXpYJXLEEb5oNGoohNXbpMLatnQ3oyihEPWkSQbnNrCWkCyCJXjGdcFju65yiDNc2guEg1rRjq6P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T2rxZM2FDLQKSH7gvqBCjBmfS1Aw1gcJbvcSVm4uT8api2eKzktcqvS5NZVa56k7o1wTBk7RjAo5KVUPb1cEtaJ",
  "key1": "3iKeMsnXc66K2pLGD4g37Qd9LoSxDD8NPMthihgeuKSsZqVmkjoRHoBGbngmg8jtWbvUQJ2vw1vQS4fPhvDb3fik",
  "key2": "28ZbsNUxdfuuRU9AwZDbxhQ4yXWeK6jAjc4mQtknHeR1urLSEV6SS6sKTqgxnBXvRXGj61L51J2oVYPfYUmxfoKD",
  "key3": "5j83Cvv9MP8UKrqBv5SLZbeomt2WCBDcHoT418AsT8jLf2rpjiAn8EffNWFutwPQwcjcwC2qC31qM9XaL8MneZJR",
  "key4": "34wvVKtwdyHHFndeQbjBk8PLAinwRcmGgJLSeDtEfghvns5niY4JQqzRSiWsEB7dHsMf3tKzDhK2kLap9dwCxkui",
  "key5": "5UEVYWsVSTnJkEcTPWvowMUyi6MX3SerhnhmnqRvcD8yZ6jeNmstziRKCHMLvC71rMWdXdgaFQcP1H8swwBk1jmK",
  "key6": "5J9dHRXbojtGe1YMKBSdYYr2EpfhZ2LHTWoSS8eq2g3H8UD5dxUXaQ6iArUqdMV8yXseZjWL5b244zguq72zB21A",
  "key7": "3HYLgYnWNBDXGEA8fAzF1C4PvX1fnNCE2sGCZ6hnrtSNngMUAtkRQwAn64tkEUCqrqfcENiwdvfadGNbXRBrx2p6",
  "key8": "3wroXvqQknuoqnBj29V3N13KBfDWviZav23Kpu5WncyKTuKB9nAFiryrddupd56828tPVL5d2ex1WEsStnqnfjxX",
  "key9": "2qnZqtu3rH5wCmjJbrhVunwc4vhUQ9fRhb5kNyG5TbNyEQiHozwYhxePCRzqThsFhLxqqKFEPX7pqtsBXyoeYeXd",
  "key10": "d5VUnz6yufDVePG9NLzF3Lv2ZNGRLSrFmtHvyk6ENnqome4X96PBK1kzdZsMotqtUDqsLAFzcWEWfoQFLPUSRoi",
  "key11": "fkizR2PzBgBSi3EowFkMtCDjavJpARPySe2jQ87BoeWpCoDEzimzoi5kHvdG5jgWk8DPxaoP2MwF7ahPcapr8i1",
  "key12": "3R1yyJ7ScUtJcQ9Me2yYrWyW238DR8xHKUQPjmVxffz9K6B3s2cMsqikXVVFkQJrM5xEQ1SGa5PYgaiHjWprSBbU",
  "key13": "4MopLaugBsrqyvh9F85GLg2D2FyCkcncpex9NusPHaUiskioCVfxJEgdgmEVNUYdYw7omHc3EdbJdHJyn4QQqbtH",
  "key14": "2tiPAzwuxedMnzJtvC9uCe4f7avmib4MZBUZC4PEN8pvXAVSBxRwCB5DujF7eELcxs2Sm4eZRX7zNudeZFHq4gXP",
  "key15": "3eawuhscavx5St1BuBrSMJJNSWUGxj2CGTB62vBn1ALyG4Gormg5Q8D8eQeXpKGKwQG83PbvZRVzikZMuiyjpHuL",
  "key16": "U7agBohq2ALGp3JqQgjs2heY8eHyecXi42UaRR4WTtAdo5vKjbnd1xNch4McocJA1APjk6mngdifxAZxcR4uJk1",
  "key17": "3DTBjwq9jwFSQJhnBqUWKwkAQYu8r3E5AMqXzEBTnJdCoogxFVpXHw6gbXKLiaqrkFwo6jim17whBco3eqTTRn9W",
  "key18": "3JJRXApHJhMZUCPz8vjLwV8sbAmoScPjKZ1sY73RquwHjAfUtS4Sp2aH56aJU3yrDm6wBQBck9HXdYPvTk9HuRNw",
  "key19": "2ks83oudQADhS7moY9Ctnhy5DhGAVC8R49PKU2mZmDyzvMMXKw76JBFLALZSBDR7NqxEL37vw1JgnHT3ZiN3RKhX",
  "key20": "3WQCGHWWwh5d9MH7ghVoe8a7WPjFTFEF6y67xKRdfos7mtD21UPxRywXFLVxtNeUhoZQR9VZrMBwYrt8rjDvEuFW",
  "key21": "5c1EXoNA1D3QrujB1anwY3SPjY8LYuyFZGVXJS9YhE8KgFaFiiPDNCWqZZNjuzqWznuc8btMoUVZvFbfmzd5FudM",
  "key22": "33gp5ZRZ9KcqsvdbrvnP1qPstinETggDzWimsmHmmwSR38kvaJ5KvCBfAMnHSMbJimHLao91coyHnS7wSRiHrf15",
  "key23": "57Gqmeu2e3DcVL9vcQrVnhwKxNVfcJongPq2d5TnWV4dogCMWqUbpgB5V4rnTfCcKg6XhgVcXHmYztVtqUUQ8xme",
  "key24": "jCcPhE5ceQjQ74AdiGpbspGsJd8cawcFkExuay431RG4yVtxEKi6Au3X8DDRohYRQddXJzU9KeSv8jjK7JuSqsZ",
  "key25": "4f3g2VkfZJoypeDKH8MXSRvFikUNhjehdm9VbvmChM5gebdoNzzrrGEbCAdN5reVm5KusAkaNTfccSizNs3SASW7",
  "key26": "5jYBd4KR9istE7aoJogcZQwvTZjRFtg9J9CUu9W9b7FVPSz3x6151uBcefQHxA7UBhWEY6eQm1RNAsFR8RCnTemG",
  "key27": "2qmV7cCtwqBTmyFTmYz3GHVYQRShzvmzCpS5gfvwV3bPKLNAprirWZ8U172UkXJBrvmD8hSsKJhkeiqBgMxBVmLV",
  "key28": "4Lw5hzyRb9Qrm7a1NZkuqEy7e4LqDWoLyXSiK9tyFX7vBgNTkKRrarGhU876VSvd6ebHdpCoLjupNHVagbPmhP1G",
  "key29": "33GgE7LD9EifL5zYVub6rkFYAWeFaJ6Avuii6ZyctzdqFUEgybTirBdFUWwxX2AciYAiExwjnQkJYg9N9QqMCtrE",
  "key30": "yi1zjiPgdQUzEc44vmfLhS6bB2AeYbhroSTnKBduQRbpFwAiiRiRa1h8jByeuSpxHPJ7vvhRyX3b3U7NvvmRiNP",
  "key31": "5wWCZyS92HxJn7mBTu4oDf5TBArhLX6GGuEAZcTQMrGLKZra5Cqu5iCbi474zBi7bK477aYi3E9CLDstAe19ZQZZ",
  "key32": "3sJ33ghtUjfBebmz5HB2tCQpVsSzUxqApqfVHEBoLMn9yVqQwzFaXwdqhHg3K5ZbBT1DXRezd1PuHZc5uT5zJvo9",
  "key33": "5c9vY9uAEkznkAmSZ24kWivwzabQ87aUqyMuRMpBDhXiym7ykokvk6ran4xhqefbGZdsWNs9jathMvwxoAPB2tZV",
  "key34": "4qeqpM1x2kXZRWK8UySjrgHB9uPnMGYk4dy11QUCXJoH5LizZuonLukRm6FEYN1Kjsj8pLyXeBf2G1zwPDKUu5wB",
  "key35": "456hN7JbnHstHcKcxUUtn6K5gMnUqPxBsNqWmPtLpA7ERtGkdffRNFtqzjxBufJ7p1dHFsPvESCkiKFYPQLqicpX",
  "key36": "2xN2w9A2WZGY3L9RohER6esfygSdndPbFHM9Lg2jnajqpYhEzzPYT9a6LWL6LTRbxVtLZJKWseWdDyyC1wqCpy1D",
  "key37": "2G1PJaGEzEyyJikTBPo2yRKqQxwb3Fd2Eh97RiovWAeHdgYF11P8vEzTh2n5FwJsjEJesLQgJaijwAJru3Ef3sL4",
  "key38": "3zHbWSL5TpQfeiXTVG66uVdvhMu1JzBiNzaR46hg78EWY3h5evcFdPRudRswfN2aanjN2RtHYc2UujiVt3GjEzwN",
  "key39": "4Nydke9N6sLm7rK7CvEkb2GVNiYRkPM8bYPMFi7deRg1V75KwBjRfeGXVjYU4BWgMsNDhGGyy3Xwdco4dYGSSpgt",
  "key40": "2UTgFXZRWX6QEWumJCw1sxLMMgNSetcYBQRb831XSdTHPEVfDHhXnTSpJcgWiZWTK9r6prNNnAmA9tw39AUxroH7",
  "key41": "4hj52aeZg2b4cFturoofgz7Z2UJx1PHkVKG3GrjYxxhUzoeGrpoBpcp52oNmYN92BpnjqMTk7DUtZz6Ho5uKj52",
  "key42": "311cHMCg1R9tivCqrwjCYJN7841VBFSsWcpGsJ5Z6wQqCUrBPu6AnQbZbYo2ywuY7v1AMizW756khrDktesRKN4C",
  "key43": "2HgsN2dBUoyUhkgKovn5NHVmZBft6b54FbY3HA7H61L8x9sHD87jbLganSf4eFmTetif1fLZcXErRTZ6qc4ktRg5",
  "key44": "Wep1DjVWzvE4w7KfBecH7vvmFxdDzu9zVmE5HgE5uyCEbWjUJwydUsFmn1KCwawBdcdCxC3YQQRTihYkH5NS4mf",
  "key45": "ZqRVUTFYcTsFnFDzmeBm6tidoYag6JA6JQYmZBtGgUB2a2DmMXUsyGxrybb8mgRM5GRAPWM2E9dTHR4G1WR4ubn",
  "key46": "3ys8HsaqsFySvutfRw4gfdnQZcdXixLRZcFw8cgNZx4qkvWmXoDQqV5VWK6AiSVzK3gr5pYmByXGhvAA6mWxmEnL",
  "key47": "65tFgwBci6CuoSXZTYxhAMzsQjrSFHo7NGnxutS9b3We5M1LvsNRYwmvTrC58EKqxHhGmNGyrXXXFkbxbcqoGmda"
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
