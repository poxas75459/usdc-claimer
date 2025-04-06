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
    "yFSGkTS6YMCyfJwj4p4GWAEUGxwA9Lt78MWCdMSYmhPvziCA7iCkZ45LHwUW1td32aUazovM9K5qrhtHRrzpVdx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hQBEfNSjsA3upUHPUaoDqdzCHDmNfDbBo17PTxujxMECYnGUzyhZzjvZ4iFfUuFMzDT3CMwe2Eu3x6Weja8hcQr",
  "key1": "UScisqdjWKgq2jjAeMfns9C4q85BQEGgNeyReqiCsJkM9MeYm2UombMRr2Lif886DdXAyHXcjTjKxGQZuRBHULF",
  "key2": "36SfpdDWE1spKuBrXeqifevoQMXnhkzwEC6VJPs7veqTawLw17nNdx8HLuNPHo9QmaKGoeG6n7WF7GVhbj2EhZNb",
  "key3": "Z4YU4tu4Q6R8CQha1v461dv1VAnXYEGE5dS29kW1e9p823Vh55DTQz69TXrY6Ta7fzDtVYd3dTQUgrGq3kSUBAT",
  "key4": "5TyRUBNTw24yweKrnXjQ1RxXPbAPhka8XG3PC6rWQcYFWmwAofWe9q25rcueQKBCnBMpZPGHGkH6vmKRh1cuhhQ4",
  "key5": "5TZ1SWBs81YNAC5ncZ4DQ37FY5BnSoeB6kjejR2FxDHr849DQsWHMoozXQsFhnM4q1kPdPKnwNqC6uBuk6YJNiSv",
  "key6": "eN4oxQpZBzkPGQio6eCcadmR3ydN7sTuhnNQsDopYEb4w6ddpCb361RJPwmndeQ9aWoxRZku9wPLJHmUWxGo4QE",
  "key7": "2JJiVXwSGXRZqahcKJs6Fbrn7NTJQbDjLqJXG2yFsvB76zCdtqASNgyYQ74GfURUGn7R5qU8uU9miv4UPpk5NuuG",
  "key8": "4i4J4mMb8TcumM1LVFNBkyFsHS6xuLScfUMtKLJ8p9CgccuVNo9t3GWtBN4bSZxt4nYUdrLftt2Lmi31voJbUyXf",
  "key9": "3Q1BuPugbBYoKGAP2FBW6QAYfhv8cR4G7Xzk2saTexpEciKR5s7uKXkZ4b11XvE5f7v2JZkngzk43AJkKoNakU5D",
  "key10": "2xdxJ6DEFRQucpFpa1nExudkYgt8Es26RZYvnhCNq6WoKgRaR1CB559CboZj88Bd4yrobtvSdK9SkMYn4Hk2bG92",
  "key11": "3NcyiLtQKUuHDTNomBQdxss8GkE8ZWzgxUbeotmwohH684sQ2hcjDnGjWRPWLPb7JrjcgeAdtLNBPTRFNgpMjcBc",
  "key12": "3MWQWB4Y7Z8eCBwNvfHRt4hVUtzZCd9EJGRQeSh587g2dHCssgGvssKPMp1Y8a7v59x5tV2qEiL8MmsAVg2h1oqm",
  "key13": "27khYFbPB4ea3gLKxkvVranLWKsKNaD6gSSadTiSWKE7ow9kWyA1a2gACCDb35ggxqnab87TKKt7tXeLpkzCnRcv",
  "key14": "2N96FSzNtprBbELRtzkkwujfMNujp1Xtz5PUZMs5J2sR1NndcoFVxiG4ghyZ64Fqi9rXYvuYvHXDXLqSU5NGV74J",
  "key15": "3PQdxPPJLSdFHtuLrLUWyudJK8qPgw4Lp3HXNSccZ3esdaTDdmmyHWYYANu9oayDTt4TYbFNWBNEHdJeEk4s9ArH",
  "key16": "3itspiRXcfVfet9MzCBEWVcVVEPJwuf66Zi3r7w5FKGHELmzgwvR9HchjoXoSFdPfK42YR8PBfBPDDhN3pheWhWR",
  "key17": "37f7QpMqGJzzuRxYqDGYFooqkW4TZ2aH45FVMJXyUwH76sFVocsaCG4gu3JGhXYZGcCzVHeYSLBZEYPwRbR4SczE",
  "key18": "42TN4YSDQcPuBBKAgzAyC2JeBjMP8ry9nEVMkManZgKQTod4MFkS44ezcrc9VqR59A5vhxmTLNvyaGt16zoi3bdo",
  "key19": "5vzNTkdyHEzcGC3JuZoMWVKz8ciATWnNby9ymrw6XJf7bpo78qnyPvko634hmXAUJnv6SJLVYGzHLWoGxPKt5DdH",
  "key20": "4yGxzaEewxLNPhnc19Cm1FoBwWELin6tpCgZqQWRT7CJzJSSRta7BSBMNs2wt49kHHm1vA73CZv2rZMGePE1dgJe",
  "key21": "3aziAd1UwstZ8uyPYAjix4JfEeWyjefv6BUoJGW1zFSwNnJuMbgoobV3G8c3KYg819XAptthV4ySWpKxFy3ZmXT6",
  "key22": "4cjz6KUGxQKbvUEEA44G7aKWVTu5srXtKDv5vgqvCkEw8HchnHzctbWcybey1JzQHpSSWTQxUkvow89twYNvvL3y",
  "key23": "4PvAxPNt7fd7PL6Zy57DhZyzyCPbqh2C3UKqsJkvNks7UHB24VqPM1DtXWymVpD96vT7H45Z4HykJTdgAE1j46Rp",
  "key24": "5HFZuLvPYb6g1d3x92Q5mrFUgbfXEF4QZmRdcSufrHyCBcskFNL7SGKszWTsiVtGEvg4DPmLps3WU6RUxzNAysWb",
  "key25": "4zh7kbRsn7otXMw15zvZ1pG1Um7QZHJykN3RfBd6NrJHY9x7hkoFnZWvqEGm7qm1HT9FUrxFnTTdKsE5Myn8CAqD",
  "key26": "5xXWSnHJftfDcYkFmEHQmMvnoP1ryMhEGvFwDoNLcRom8yw1Yg3hkCb9w9zHp6JK9cRop5SrDJcD5K1tDXXxNnTF",
  "key27": "3dkFr4Feh7PDHafiY5j2EaDoJPDE8S6hsXVZAjigd2LVC9Xc6FhWVcYbk1t6bAbzmqKqEze5gT2ZAEDjtasc62k7",
  "key28": "4trku1J3b6mtkd5dZPUMdKxPFzXJDbi3yqLRSo6yEG4HXGYaE7sgLhrREZG9Sq4CwNKLa7BVaYwzop2SPWMWU5dX",
  "key29": "3TJxLUvS8cxH6JiwnScqcLm9pLqbEJjxuaPTPjMsjxk6iBGtWuyLGDzkqWdCA9bvX8XqUjBef1nkJsv3CuAfrZ7Y",
  "key30": "4g7HNQmyecJFiYFtRZNCXuH48wvRpXNX6qVzkMCGBjU2zejsxwRzNaff813ho8SnTnekc2367W2oGqb1JXoJsvtS",
  "key31": "5URoViDnmzAX3ERLoQPGaiCdqBnDzmD8FnASqUbf7vfp96rst4FVcqub6VT3FCDbYnF5rmoz6QshvAZVTHoqGWSf",
  "key32": "21Dysbp5zdcGgoxguwYDUbQWoFLJM8ky43AS29piVngs3VnQMAwivq4BdAVLCpqXesDuL4MRgGoNmMx1obJ31w9N",
  "key33": "2KvmZts1xe95UCPqo1TfwYgYiFa4bYntXeNMAfJPoZ46eJRKmdWDmj9qgcyhynd5yYBfvVvErknpZfVKxv49p5Dj",
  "key34": "3D3KyAoyNC9RTkuXfjngywhkQ7L7gJZt1Fg98N9zHA4KZjW8XMttzCRoir9S5iaJAJXF6KfqttCTBPjCezZxTQWn",
  "key35": "2zngX3RM2CZ1KCD9YwFTWw61p4r7ZiQuZLAg1xf2muQRm8USAZ1GaTxFWBhNJgpaQxrEJHpTXpMn7K9zcXos9uZF",
  "key36": "2XAThJqEG3NkLh1ZcrdpAJzxCMmBmqNrrSqZbZiosnW2mfesQ6rq8wMLzSivZ5DGG2FugJFFhceSjUafJDDnG15s",
  "key37": "2QGoNy5NkQva4YxuKMHEs7LTxQFBY38GVxBidcRrFtwhT7Lfnmsed4WQp9k22XQhmd2nRBEvyKbv8nL7L5yoRpQB",
  "key38": "3yt9RwYoA61tnwjPpkg4gDRqQ14h5LGJVbQGacRNtcmNHp1qXiiWJFcwhyEMSi3P1wDCxBqRhERfWATYeKVNyKgS",
  "key39": "a2Px3PKkrUeQpPCfL3demC8VZCMXkaMn4jxLuAv2NK58rJmbmhc3MqfbqXmjsB3kcwHsfy3K4rs7UHegaivEEWd",
  "key40": "2GxsPBGoQ2bayQrh2qukwQdHXkkPT1VQzmPWPbjR4R94XQP8hc2N8opBdWrCdawLHdjkoYVrWt3vHUXCahbDfQRs",
  "key41": "4uhNa9CrFdeVLqanCdo6fhmwndCxP49JUav8dPgiF1EiQfqLdC6QK8RJG87k2c8NRP14bhtDYpYiKTobHeXD3CTT",
  "key42": "3QjdhEkwuy2YQrMioaVZmEFtUb1iW5XEmZDi1sCump5oPu3DmacaiHj7M5jgJVzywxt47hYAesMxXAxYgRE2NSDZ"
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
