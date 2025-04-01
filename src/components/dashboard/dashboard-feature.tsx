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
    "3Ee5y3aQaMXLF3rtPxduvE6pcVjT2cRFX87mr65WkPntsaYxSCsUHa7oCby3VA8dcQiLHToyF6oZLN1ZByFDdASY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qyVeucXwPmZyDeWhYQkmJevgPYR8sGX92CWxiqBhHmF2cT3mNQ3KSVGJbUu6o63xAarkPZp321TjAAHDyZegzAn",
  "key1": "5UsCvszGrUmYfBuVgP4zNGsdwnByBgHp1h8Tt63n7hFAqSCZhibCZ7g5PiSMNFwsLvHu7nxcaHaYsPPuqA5DvfXn",
  "key2": "2TsAShXeT62Qw2ybk28PkezQ6mf2o6B7h8V8RJdVX3LJh9EzQuEm9LKPC6uVLmka8WR2fC24oQRshjdizyzfckn7",
  "key3": "2WCnpH8RqHJHrNyzZR33bKnUEbL9m1KfVRPfbBoVvs8ctrz2QKr9U4donxhfbeCYposgBiMNmzaz3SMXk3AWjhAF",
  "key4": "1uNmGn3GMLCd3RCCRY2DWvYukbFFf2nBcJBdfW9ggLigLU2UQbrFjBs9Sw8AJhDCCWmswsKPFh57fDsPqMPTpVZ",
  "key5": "23mcoFvaui7XfqKWZUtgpAqv2FEpAytz3D9o6jKC5fgwrgN8asiFzBCV1izsKHJvHWuN8E2eF3TkHZuW6r1FPKB8",
  "key6": "2Q6kgu71cMtGFUovJovhZdZnTbDwmgzwmP7ij4kr6ofQ8HD6heZvoVfQbmc5WQgTf4cuL4yiazmh9vgKg6D3g1ck",
  "key7": "21yjg2vMREYtiJpphSb7gJ7WdVmbtRbs3uoKhrGScGU2Uhw7Rmvt5guYGgX7sz1QBtHr37mN2heFT7KRU7fg7aXb",
  "key8": "5eXjzVWU9rCw6Gy6efaeTstDgQEA9vTNV8rLD2B6Ao9UfbzEHAKXej87eL378tV5mQNEpnJWQYgPiCwxeUdFWcvD",
  "key9": "2Kon2jGAXcCjt1s3nKQSZc2yNFmY9aMpCTCFuxdQ79MJExrMZyCJjmZmF69vqjLY42a4L7pJjfB3vjg6RnZy61aV",
  "key10": "M3wnvBzB4N7bJhGQXqdXbJmMoxjEprZGov53qvQzLmaAUBRDPJUHXJpCQHSrmnKUdvbKcMEdCww13joU7oSvzCN",
  "key11": "5sVgqPhdi5xFv2Yx7MsNP7ETk7Xe82NxWgcedvM5AUdoppYm2ZYa7e1T8q12bmrwmHjf8GQ7MXQ9cCwehm5WgKYM",
  "key12": "4xKrX34jwSMHvPSv8Y9nTs1MG6EyUwafrLVaAMMJJ8YCQx7FKacBW8P8HfGsDJcuQDq5a94MuA7rZ7gfDxUdRBnP",
  "key13": "4cwCyCsKwDNGCiMddnF9uvH3kG8DYXritzSdLnLcFSi5SBTExP7wtPFiaDec3nUprBC9VUf5JoxTtbSgshkdzoaL",
  "key14": "4SqvwMMFY5FxBgcxHvtxV8PVyQdft1w16yxbLZka1TZbUfpEWvmcvEbwmyGfHerajQZ19rpsQc9vbQSzg26H3bSy",
  "key15": "26SJuWH8kcmFYnjVtc1fA1vgcxdmZKQndjmY5aTKEfBwoapRw15HdX9znjLHYys6mRqArNLYz8B9CjvTwEQuboK3",
  "key16": "jW3BdU3PbcPtFe2zsVx7une8K3DfxzppEasVfdDeiv7PfGhBRdkHn4dF7FdgW26PJWRwsVXUk5QiJogVJcnDKVx",
  "key17": "4zJHzs2dGLAVjA9SAWnMkfoUSbApgns2JPba13xbDzLbnLq4UgXVdB2C1oaAidFHgBdkFhbX77RQuAUhxoWMz93v",
  "key18": "3h2d7gxS8RayrGd2jcNiU8XLWroCVD7Rn3GQH68Y2Jp5F4aUPtUiGqF8SzTwwoZCiwAoY5fcc8ZgTgjQY5NV9eaz",
  "key19": "5UMf7npFN1ngQ9b1xJfGqEBB3KY2D4udHgcAUfGBQKr1igKiMgFKKv41hPPTyebFDib4tuUZaHufMeNDU2V6JhRE",
  "key20": "424zw16KYikUxHqnwqgiygS7riSgBCSYM9Araq2WxjK1VzueYd5bZPS913vg7Ha8mab72TfwPzUF64ozB9MAToHH",
  "key21": "4NyTuA1Ngxvr6GxDctPsKzthdksn6XFoLCqZHNRW52EvTgZovrU4xERX4sDv6tgLkXjXL7RMCuYYGwA883QgdACm",
  "key22": "2rrPuG1rS4rXqqKf89AbuZGtKo85TgiM2X3LFpuucj7ipqotEgPhpKvSm48sscLpnVERJmFQmZVUeSyiaYi2smps",
  "key23": "3B41CUYCvpaucKi8M8PGAHi1zSTspT54sUwwebazrfYqSFYH8Wi47rPmz4mjKN7x5g8XqKKd1UHQRKtVZqeEAttt",
  "key24": "5PtFSep7dk7cq8HLmRLguDT8oD1dvBMxPxAqz3wVAp2ehcgP1bhHrTXQpd1YJJjusWQgzJgnjjFNyvffZpqt5p4v",
  "key25": "5QeuwMxoq2zBCuyqUKcn5DKuMPXB5PMoTLUYMidsHjtEtMBTPajH2RJrSnPwBohULW2qXt9wQK5eJig6jmYUZB6s",
  "key26": "2F2DShJcK4EyoxZzuB6nSSo6AFWvKjRLuqycRpwSBWeHmTuKDejNZpJCG5hFpVp3udBugbfd4zUnFxENpKwX71aW",
  "key27": "kNTKWeyt89vxYe9RmA8NbB4BkyU1T7g32MMhHLaCmiepgXpeZteiPN5DpXYnmfCmLygq2fGTFb6EYZEf7Puv3pM",
  "key28": "4NkWgN3U2w8ZcwEpLpCZkuu1c63qbefv7YdGAKWxWgNMWKcFKkHdbYrqEQqccw6bienQfVq4bhu98rAHf6b6fJCA",
  "key29": "4NfudteJcoWjRbumyniQPNBpNbd9MYPrTagBKCQ5xP18aCYbp78Qz1ZEAbyPN8bQxRb3wK78xkPk8QePQ5F5CRuJ",
  "key30": "2ZSbschqwgUjTzE8j3NW2f4ScNHYnheWvjjjh3gsbKsweghwzYCWfqNjmtrX1ydWc9soKFD8N2CNtE3gBqVsfbWq",
  "key31": "4xynoD8HjeZ4WerhK8ThbHJtjpojGrvva9aygRTLjsRrk3N2L7K3SMQa1oRkrHgtF3MbHM5EoihKbdDMREfdk3Kk",
  "key32": "57vwFZduAytC8oAS9NmRTzhAffkbECJkyBac4NEocPfTj7gnwCiXwUjKG855Vwk8N311MgbH1WXtVA1xuCVMFTJy",
  "key33": "4hLNuCZysZf9zYuBpswAfdKWPBjav93MvikwBR9ygJLuLsGeVQqECbZn9kdEdf6q52Wn8NnSPoK4tCsv2mM8gP88",
  "key34": "4gALifa6MeaTeyYh61n2r92aXkWCzsNQx33q7uCUnCGxainAU444FxZNgwM8dHhdFdxRB2cuCpfS9gfjSPNGvESn",
  "key35": "4XhLZtS6btLpXerqAJt4kyokrT432crNz4nBqKN45JMKhyY4qVyLVAvSYErrrHcBhX6LwrjQjhhHQmBEdJ8zgXCh",
  "key36": "2tc3gstL9bbFC4jYJdAAH8xEgM1KanrSZ64fwDm1KWYQQMnYCYLZferKLVFn5YyAQKahctfkFHnXDHxaUMom4MwA",
  "key37": "26qwgz12xDHLdahjmhQHnr6LC3xasGAameo1jt6FY7cj7rK3m19i2DiDM7ftcV37eGeakGbJ3y3PdeXPMP4iN8b8",
  "key38": "2kyPWwackowXVuNW1cCs4SxXhDmBVbxN1a3Y6Arig68JXaUA9Ssbnpq2YHJRZZqtFwMv9acePyHGa2hCSwvCETvs",
  "key39": "2AhQhc68fn47m5ReMeuF11XA1kPbpFnKGVV3r6VLZikbTqxDoNmMAvjoTnQp9HyEDXxs8aLpaBoCMPByqQ6oZM9f",
  "key40": "4VoQnvdV81a9jYVDCWE9qgARxHR92tRfNWEgPYq87AcEf2HhwpHU1pXzyLmb3crLxLYAgxHyec6rkio46DmhEAoQ",
  "key41": "5LkewWsTN75vLBE2DDMp9emSiypvujEy8Fe8iPRA2Zf1wN2LyXZKz8DADQund12WSjJ3LhFoHpVtMPrWASFWic9e",
  "key42": "2gkLAVEMFwRaaCRRyK5eMQa2XpjtCPhFCa4wsqFdrhfqqmJsHycKHeTndvAkJAiYLrJ7WBwHwLEmezyJR3uDo8YW",
  "key43": "3e2sNdrHM7r6yCH4MqzkqUXs9t3cpoxTEwu4uFh84dpM6GyxMuFKat6SwnGeyCZ3kSafyc5cEY4cNhzEcSJ9eizB"
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
