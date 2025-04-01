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
    "2nyPyRWEPSK3gCQQ77LmYhs5mgs8iMM87ZzHfZ7LyG8tHtDTCDWb9UDmrn81DNr9yTy4qmj6zLSLNw2yqNZrxkje"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GhVhGPkLiyJLe4AT59p1wpzDdFpfeFBQy4s8vpxHZQAUsdN8RtGunqsrBE2hRT5dDiutL7NbjPGZ55DdXZpRueq",
  "key1": "3kuCu3G6LbwYroho9tm7dtKbhDiJZS8BZZS44zA4QJ2zog6m6avU7F5p5WYcWpdwhuBH6S1SXE1Yf4bASVb6zfTf",
  "key2": "4gmZHtTK95BPPN6i5JRsmBNpXERc7pBDGacsuz1PdEChrEme924jYmSVEET1Nj9NM39pHVfkAeqGoy8X4YufwU7x",
  "key3": "yhXj6BbPeLFj7pYCwkCwsi629qCQQpJUZzzc5up5FHGC2VPiEtpTgRS9LVMTBcvKuX2Kyu2yTjvgVY12RSRJEeW",
  "key4": "2Z7DWoYUwEnScuvPaBm3mN1dfmuEFKkoRJYH8HqswQ7Kgp5HoJGfsSDeXKBojcE1DHvtuAjmXBtvdMWVrEmwNE9G",
  "key5": "5o5izA7ZVakw9VaqknTjwXRHpBkjcHX9K9AkBBK95BejgHDKEQjLP3Q8BdEU37UXLYE1tA1KEtN2re5DZEXAWot3",
  "key6": "66dFHtiwEJU6r3nuykM84c6pTnj8CPWAoCbbBTn5rLmBtqMeGC7zf8ka3UP7uLyR4ybtnTLJBREKGKR2V7cj38T4",
  "key7": "3Mhg5MDPuPvDwHzB4FhTLMEZ4KEnQ4Cvo1f1NZpbCpXjZcb5q27fHsC3mcgyr53Dfkc7rDUKSx9KKQJB9ZDEMwdf",
  "key8": "5V4RrXaeiYkTfwBwoqLcn2HBCnocSn9UCFtTH9A6jM6wt49X1Wf4jsVEra36G7SfenpSch8M9ynqFCraE9EYzdKG",
  "key9": "3R9nXJwc2TmVSxyvhumMBuYAeD72XSAa4dmGAWb1uvXsG1JGXubf1ws7gTNL2dzzjpHfeY49R44NjiBB1jRJPQLA",
  "key10": "2gq7T1dvd7CaTf4AR4atezvsyxekXDNL9Gu8AkSBDcaW6PFSr9F7X8hSXqW4HCLxjVmfyazkhHvCP4jLNVxdv4r6",
  "key11": "3BeakNaubkDXU7yNf6SFhNmJuWMra3EriGYzfwLMoEttGK6JvVGvooAYHhkVad4tr2vtB4XcjXsmdreWjg6K4HCh",
  "key12": "4v3VBcF7pRQ4cN17TAfUXxhxrwLPLxEJsLD1i94QFPERPDYgT9XJBBG4VAnKrw2B7VSuUyv4mb7hEUj1jGTD9Evm",
  "key13": "3nG57QnMPCgjdMniJez4VD2pBkGQtB3aaijfxEamW2mq6LmnXoKk1AvMm7z2JMzhRm3rk546gDEHNiTk6KWB3Sdj",
  "key14": "oYUNMPQRrezfuvZVez4JUCxiVoUm324k3UwwqxBug6XmGj12TXUVXvpUGgCVa5ES9B7eGYv334ec15ajBsiJ9Ve",
  "key15": "56vp1xsJ3dcuo8v7LNvwfhCmbpgJMAgNPuoe3MnFv1pg32QSokNtb4QtS7kRVxTU6J96c27s9TzGtPi8FSBHk5Tq",
  "key16": "4v7MHsVF9u2uh5WNNoev5iVmxWwAvVBvjnyhDtXTfvsLv51E6ccgYf36EHbTxCo2hq6HFgFzPRLR8S5S65K2z8uP",
  "key17": "4xMMGLR9dZvZg4FvUR54fW4SvZR4a6QbLMkovuyJRqTAxJVPMmEm1kLAYfvAcDXQnVLAB1GQvaC2LaeTNHangMQL",
  "key18": "2qiEJNiuidQmfTAfpCTDrs71HGfi7jmXeKhKKJ6hQRWMcyDHdMN2TQAg1MZV9ytiHSdWpeBD9QC9Qn56GKod7LfH",
  "key19": "3gMDyGUJXXDvNUfTFbeSrM5RArZUaWKNFtfCfyNjZxJSSwWrEf5kayCH6mMbxmRWT1FS9qJ8GaniYkvkV3wZkYga",
  "key20": "2cLhUuy7KpxLkigyCPhkFdajcRELvareB2UF8krXhYJwXX2GVXSkDdLtCg1evMkCefgijCNcLCg8vcBadqaW6ZA1",
  "key21": "3eFNqjezuj1kV1kzoqfFVskY2FbPpnhj8nsXiRTrvR1P48hgSsw2deeiEbLoMPewkXgfmTeSz56d5UFvXU8PEsvF",
  "key22": "3hN2oB3eQEpJhgMZ9HGDw9eHpBntvDKgbLSPaJ2Ur4Ysk8vGgU3QeGDCXLE7ya7afx5WSuvYfNcv5HGcNng7umoL",
  "key23": "PZg6yWexPRhfhVe2gW2xSDwiekn96fVTTRKrhgtDTHuw4guyLCPEg6z7jtmDEM9nvPDDAEMQvYHYGwK2j9iQCuV",
  "key24": "2s5MsApuQU6vhDwZjmFjUKpnUktRMFuwY4kQyatF56gNc53YpZQkFbKU9owvoac4f4Yf1GXW8EDe3jKYwgPyS1NV",
  "key25": "NGBXbFJXZehRtBGRSgqq1Sy3qsiWufkRLxtcK3vuEtftucg4nvRG2GaRPqj3N8cYv5nL6F9ZnnaaeL8aqnefuMe",
  "key26": "2yBK7DF9F6WEUFcaDruS5i1QwbwAUSfgxxvU9Nv5KcHVprPzaJsWvYrYp98KHHutcftwyj8cZRkfkC3T5LZkpjrG",
  "key27": "P7vdP5AH7LtyPciYPR9ZYY3H6EUt65c7nHw3ABsojXqLGTtSTEjRtcXuKRz4Q2NifyRhPvavJdL5VRtiBko1uM5",
  "key28": "4YhbuWpis2xL85YKZWdNQzddcjqDADeDgQJgJPdQXnABkfsMxZuUFQUEmd7KP5uprdmwBYPHYd1wmKx9Svx5MvC",
  "key29": "39izwLjnUKrdvaP5ZMVG5J8p5ZGgyk897c7iihxr7nQsQ3spdoEPVTpbLW6YHHtj18KsrMDWMvHTfkQphavJMLLQ",
  "key30": "31uXNhx5V2Jwii9NfEk2eaTfwVwM1Jmxvx4rDfqvwcvWM2FrLPxNXhfdZ619bRMwNqibBV4qVVRcF45FooYP7mvf",
  "key31": "2F3fbUMUTyKGGARHtnMuR1691RQwcTR4j6bwyChTxLViMUMzqBV4s98co6DzREczAeGVkiaomPFXnd6kua8gxaJD",
  "key32": "49gXmBjTM8Bf8ea5sgSe7Un9nqKP8PvFSYttRhbAAmzfN4nYswwoVsayQWXvX5pyZogK7UPLNuw5d5rREJXmL6j6",
  "key33": "3KVTrS8J9tascoYG4P3xpsWxfo8kVGvjrCvQk6VDoBD2u8dFSD3m5omktbmPuY5eZNfT4MuVPNRwjp75rXxmQqhS",
  "key34": "3MXyFqVnCYPXSpNDoSuuA6zzLbFeyMtR8GsdJCtmLrskhmYyTDkgU29kkhooJxubEcYLHDuB8RvdetNyJke92WHn",
  "key35": "3aW8Ah158BGPGr8Z4QtchgfJmpoQE6WkaTFv3y94BqAkd54a3rcCPe32H8PmRidWTh5bJdFjkq7F28GZtoBkYSNV",
  "key36": "j6TtSTdw7PMitt8w36dW8ytYCNBrFGqwDrPXhseshf4KfrtBRSNxFEW6ao3sJB3fsk44y47v1qkDTeAf5rLBu77",
  "key37": "499GSnubQVMuUZsTKJ8ercwKQpJnF6sPS2JSJjpbocEGde7sDvcGkdd1HMo5tbH4djobQjHekLd9UPDA8zjcCKpw",
  "key38": "rU9imJ2To1z9S139jj78hhBS2hJayEiw5pRMRERy46Pt5oja4BSZHT4JBkMdb4f6uzyAZLbseSnMEP2zFvtCSVe",
  "key39": "qpDPTCXVmWUv2JS3SY57Pvq2iVpiKEfoDfM4yXUBGPMdPdLayYZwNVMVMqSRUCyzbo54ePCHpMftzKGuqvaoQWS",
  "key40": "2rYcBkVfd5MSkNRKcwmcAinR1pL5m5psjeCHrZDNMP4wd31UThxss349hCsD8BdMfq4ubEXJPuFLnYGiT9dPr2ac",
  "key41": "5dwsM1jDDB2v4UXzAn62X2cbGfo3H6BqTm5m7G6JBkogxMLDhPfzJQwuk5ChDdBfqm9xKEha9i56jnBR3kZWyksv"
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
