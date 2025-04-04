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
    "4kAYkv3tkni5tGEUppAh4sH7GSaAxhniMdrj4NvU9LPC2Q32wXUDHiBARGCNonhDq5cfqXQoBvrsJMG14MHbk487"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wfE4CNbxut3MEN2HodWWQQjoE3abHKy6xT74x47Q3aGmRzTQMMrxzMYgFdTWsbouJg3dUmfpDRVPwrNgwCXicRE",
  "key1": "5gqpmzaWUUF6n2S8Aipy3CAsp8HdxnFye2cL5hW1u2jmXkqoVYwWFBft78LEKvt8182EFY3aFc51vebv3NBaSEzL",
  "key2": "557pzmm3vgRGtGdyobJ7QuesxtqsA2vVeZRdk5F6iiK5XqoZki5vxSRdC6XRAjk2VBCNXkCJmAZLGo6NETbaKdGZ",
  "key3": "3Q1b4vefLZWoqzjTzixiGxZQa2jSNuNEdb49WQicnfzrFuecb6NJfDtwd554Zv7u9e5ubVo7SXyWQoHBPGWHbkQZ",
  "key4": "VYqEEKXtgPVS3JoquEMFpzPee4ugR3TP5geHVe32YyfvcAPgQ6fU4YzqCdy5xDHcWR125mkSJ44VJpT4EBaaWpb",
  "key5": "vRJQh5wbaNY9xbqdu68pMHcv4hzXGWqH6sAtaeGit5SdFKeLewLRALFnhUCvj2PCGbXMCMtuEdkZCogMZ8GnW2R",
  "key6": "XxQK7nXu46TPB16jSehEU76QD65FyYtEHTNY2mfwgGDyoMUpYn1tLC22sAbH31KWiwpiDJLzLi3ZK7ihyEngtp3",
  "key7": "263j9PzewPT6aqKPaFeMegTpDra3JqX11LdmSiMDh8wHTe5d2F1Mak1H8r3mQmzAweYmRHVW93SvunyScSyG9ZXn",
  "key8": "2EJs62muZA7Zbr1N8mbbQkoiyaZDBM2pgo3ys47BkmhpXUGzVS7pzA8nCWcMFBds975Dg6jn2yoeCCrnVFnvxa5M",
  "key9": "4Utt1v54E1GRLJvigar9HvNHe8WwsZNK4XxfkruBkVz38REsF7Yehopz3o1o3ZHoktPV7YGCH65xegar4TP2f3Ey",
  "key10": "4kr5pqVCcr7VS6BVoeuCtBtpTomvCwrZwXAiBnYKPgh36aCyknGFLayk1FeEaA1bkwDyzdHz6hzZhtK8MW56H8mr",
  "key11": "3FDM6JVTVd5yLWVA4jid4ryMn5eX7CBciHhgiLcNh1GjNuez7JYAVXir5QuonMBSwiVbFbJnbZU31Ngjgt8S2xgm",
  "key12": "3My8UdgFCQo7PrnimstVZyccUZVtHrhusjSqvE1NWar4xKgktm74R5qshBxYo9UHa2cndpVSgjh6rB5CqnNVFXgD",
  "key13": "3bGBpeJPMoZsWEmdpTEWagRbDED33j23qLrL4QRBjehru615q2uBVzQqFzyssc3eUd5dzpCDhRzQagXUPbpFgtT6",
  "key14": "5mzc3hKtaDeCL9bPcAaQAvaGpR3wbYt6iHWJL1bHJSq5DuAyKtogL3ddSE8poai9sKbxY2jjUU7Df4fJQAEFbmzD",
  "key15": "47XZdB5Yn6HwpAzXxDngrpQsG9gajffan8SfVpm65xjR42YgsMBwapexX4g1B514kSAgxJR9A1GcABGYref4Vy8n",
  "key16": "Aww7B141hwt1rQP8YDoy4r5bnBy7PMEVXRJEB76AUkuZMqs3E4HWT44SpM9Z4UmCiPTuWj5U66n5MdPrEdpgz2d",
  "key17": "56GZy1bTq9Y2eRmCrtnrSJFP2ndk9AfPJAk4bFR2cQNkE4ikcFGBJKkTnQzdzDy5Y4QhdLDsMbi4pGKK8TUr7DjC",
  "key18": "4EoJdZ5wXrkhUencRqyUbZEdqG2qTSonFRmCnYnWC1kK4qcWEP8eDG68QnDHpxjJkBRG4zTXSVhjhugdsexGkcsQ",
  "key19": "2rcruwneYimXh3cbFvHkkdCWgMGKFG1UZ8cKK4GSJugchMkswN9wyEzuG68WmpbPPWdqye3WNfQwha39B4QyAxWy",
  "key20": "5ofhRmejRYoWjyEgLwBYY12VLLKx7Gaummo3FR46KtZZvoBdYkMvQ9LYcGVwqazg6LuQivP298bpx4fcNSSFQZge",
  "key21": "rR4jwuxh1bLCCxAAubC9wRnJwKDHVZqT9K7A6UAxckK8FbSWd4V2MUjqJP7h1N3FwT8vU9Fk3NZ9QUSt7LUaCcW",
  "key22": "2CznWpZQhgAwShbFiwSmAtAKq1F1R5NWmUfAGvaC9cznVjRveg2Y7wp1SGcMJWetie5DQbTEqcLDZW2uX98J3iMS",
  "key23": "4ZtpqitDT2z7n1joT9kgaLjJFtfE7mpb4qouciqPpe9EuPug4FWFdEZygDM8dzo36sRBGd1LxbTUGbtesbmyL4Yr",
  "key24": "4oY4B82pJj7wxzprfr7vw6DzYeWZqULGv1teCxonLMtitjGKb3mawRpZRNebeP5cX4MfFPaN3e89WUr6piTQ78bt",
  "key25": "5pvad9uEh3mtitNgd6C98Ljo3gtv5qHyzvHGBtDYcQ1qsxygcUkfyNgvtAFygunfNUYDHj3semefg3dGgU4W4SFS",
  "key26": "Bii2Cf9yZARV3e7LmbQ2Jmn4L7pBfwJHVBLnPABL4MGWDCZNgBd5cx37P4rgFNNBbSyzWbXgaVgNpaipRR1pN33",
  "key27": "3LeWmHE878DUmRntcsYQf18JSsEioJJHCXyGfLuVyPCKJDWZwcPuvBtUBBPDAgs2zv5rGd4kFHK4SRrSL9teg4jP",
  "key28": "44aABNmeMr9ettEPYnQFYCXWx1sBqQA1CCKmYLH1XzSHyQQKP6tbumru8Rct1kHjRmbhn72mvzyb3vt87DwumHYg",
  "key29": "4R98gx5zwBoBf2t9uZ5FfosuVdgAnBdWEBMYjVPvBUdGrnSWBbJ72tV1qiyhX2Hw4huA4hFLP98RZ75m6aDbTwJ8",
  "key30": "4bgY2fh3RFpioZDbie2xTxE1uwkp6NgugKbUcrQEMFjzDSaKw3GNUnmUd6MxzfELomtx2yXRdm1vTH58GXqyKgG9",
  "key31": "4KEWkSg1xJiECPVWPfHDpVaC3RpnMNV5Cj6FxuBwSEMt73kBMNS7ZhDBVLpEq5qbBV3WDFrwUYXa4hL8ChD3CsLJ",
  "key32": "KF9zFPNy4zPgpeMH9C1ZWUfC9qkZiphVHPXYiy3qXqwcG65ypczbS4KbziqzdFDCa3wg8FYmWF973Jtqm89BfL6",
  "key33": "3LpBU8dtfXM1c8HBsmxBeMry3HTwKZWKPES566mvzSubUoaE986TnbCrRMnFxNUhwUYPkYubhEyjer73tBdU9fBc",
  "key34": "228bUYfgaGyqxqFknPLrbtTbzBvHArMUgvRdKUBJBB2Qc4emotPBdNtkfh5pXwVbvKoJJYMTDijWErewfDbYYTUx",
  "key35": "53rJYd8Ude13FNfMPrkCzs8steaz5DiQphbGSbjJXG3RAK7kq4jzsutpkx2M59HoesVKxcZr5YMz25uaotqmxszd",
  "key36": "uFPJbMn3gkxBmX7i42UHdU3k5s8jF8iDiEDX233KatiAu5aK969VnPDXtQADr7cX9sXyAwk1rFX7Tp1Vv6QA281",
  "key37": "2gasg75LwE2t4huXZwHfxrN1JYDVMGgFa3Z4fqXM9HgqoenrD6F1CWqRboBvuNiumvcL78o5hokZt6BaPmhSHR3f",
  "key38": "3wRHe4dASBpLjZMjVACPgQBP4ZRX1fiUTmYztbk88pkFRDBGTqFwYLFXdoCGVqH9gDtwU8fL5HjA3P9qNPd7MvLq",
  "key39": "2Xw69ssE53nHNf4a9wdxgRcE8GtF8GcpmdpiYF3MQ4xCSUJMhajiHzaMPYr7Ecju45Mih4pBAZxPDuK8cz874VD4",
  "key40": "3MzCJu43YXPf1UCGAXH6zF6asirn4rf6GZCshLWFdjYSksQcDJm63N9NkPVnwo4H3Cpe5zjdMxZbZhx29ngXDtCA",
  "key41": "5sBwKsyFB4zmy9QEygfs74HmZmEWQ2N11iXJCnFhK5KLbBiCaaP7phLXauCibJNALQkW8z6LDSHSuqnRc6k2XJrK",
  "key42": "37BqXLhvk3fymW9Uc32mcpendjJPRXbvhZAYSdBX66uX6tBiL4ZRxvTtxrnd4wpzv3bD8V9jCiEmbypkiD8uooKh",
  "key43": "5rf1uNLQFVRwunZaGdTHnptCApG4jDSY3Xv3StujVL4XNkS8ZGGeXDApXuw1jhZhWpP8By6iCJPrutyJLEu61uev",
  "key44": "3Fd2wRKWoGJfuEzjN5vvk7wUs6NcygNnqbmJkRa8nho3sBYA3TP9bkDdANW2ypHbdPYbybeg7yeW5WQg7njpLawn"
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
