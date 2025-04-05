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
    "3s3CdsrFKFMuJgPWUqKf2VNWnLUcHTXcRiuLjNQF4waAe7PVxGkd4pM59pUipVRrAvUayyM2yNp71yby7tvWyCC5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g7xcCfzYeZ68FpRtDuJRj1ASXoE6c1ByJKWMNKB5PcTA13ufZMXtELFBxqczNMfZWfr9iRqNa9hS8QgpRH9d24s",
  "key1": "3WAMHP9642Vms3vo8r9ipoUZgaXpYBUbRiUhUp5dY2aP7LWbJixSYSHRbtUpumDB6CvEKxs68rKAty6cNuFw95YD",
  "key2": "3mXEaZNPfnRVWuFst65cfYtbQyZ3JjywnCvBSZmfMQ6ptAL8DrtTDLPXvJ8RGaUAcRVH1SXNX9RxvJ6CgvxbrRYs",
  "key3": "49bmJFhhQJmMQywyYPWgwtCbhh13HuRWADRzvST3eqZageginy6pdfWiuh2KgikzKBJeibGFRbtUfvLM4Mis7RrV",
  "key4": "2sb1g2zFhc5pnntvRpVjHTKehdCHK9ZwFNynquy9a52txP8jb7GYdnvQheaJJmiu2g2KmQhwh2NLFPZjhLdSerLo",
  "key5": "5crgquit8QLUHJ6CaFaS9WAk5AKoQaExM7dfCiJE8EJ8heSWzYG1db8mJ6pG5T8fnbAsBJpbEkUvJRMg3Famdxxb",
  "key6": "5CYBCRMszJvZZKdyjnjMAzvxf73h8miWgyewywsi3PHeUh2eDZUjF5sp8tjgweBJ4g22J8JqR1juk5uFUPaERR5C",
  "key7": "CGGRAfWgWpbNhJsf62XkHHLhw6ACMpfwEBXnZFL7WKiieHCNnSTsVQXT6gTTNAuE8QDXeqCvtWK9iCdkvzgyvbq",
  "key8": "2qX7wM1VGWrrcg7dJkSADehY2bEBi69Ho4i8uz8tFxheouQbMZRdpP67Y3ePckXJctw29aQhrg27SVhUP74adGfS",
  "key9": "218uP5KQy4jVnuwPiVxUwK8JLJAxrSB8vcUjQJvDDBTZT7KP38H8PsA93AzZMsHpqjQXn8jH7eLJFex2eL72PZ3x",
  "key10": "U3L6pyssgVZRMHx5CRTnvWkBAZMWgovDv3n66pFXtvmAyJKLfhPpovYb6zLHRUg81NWjVjWrUmSBbG7WRjnnKCJ",
  "key11": "5NfAFpe9taEXSYKs5vP1LP23THxappWBwFmG9P3684ZXccnnwVG682ELmw7HwG3gF9iSQzoq6ZddrYNCBdgRQkwQ",
  "key12": "4ZHaBFcKZ6rpFqGgKrMa2eM6qWEEWxaT9W7X9JoyD1s6gc5ijadKUQqfEiZV6RnSuU6KamugQCsbkwHDvLCPFrwF",
  "key13": "3RKDxtue54FwJGKUqiYJyFBUsTVEMQuxugRMvC1iJtW5aWWf5G2rrMCrVoUCLvLbdEgq6btX7rMZNrYjXd1PDyuv",
  "key14": "46LMiTmwmSQkamAFzAHzEugTzBBQcyd9Aksa2YpnfmaRTt8bhJ8N1K2QjHfcgFZfwFcXWXTjDKJyKPdS7WJUg5LQ",
  "key15": "3oA3wqPPc447iJF9sxNc7dCkeR6dFXKSrKys6s1h81WaYTpHNXGLY18rJN1cCUGcGhsEDvk1ZYyqN5iEw2T8XqK3",
  "key16": "2DADEkEQFLbYgbCxAwix56n7mABePomDNdMCn48T9dQdZRwMnLSVgMB2t4zNGv9wEYNii1m6r9og8my6f2tZWu2A",
  "key17": "5CYNfzeknwBKTu43LPozpUCmLPANDFToXooo1jPaMWJuwBrgs3viZHFWijM1Keq2ddBsu4hDghSLQ4qegMPJmacN",
  "key18": "458K16wg9zvJoVq6WqNmiLLMWd3CdU5pZPW625zetshZa87ZUHoHFrGXnZU9a6fa37ouSFRa3xUVNYpHCmLwyXiN",
  "key19": "51U75ELGvspr2wMw7jyPpgCnYFYecWiSzWscT47f3wWUHwLzWiQeqXUDteugFdzbHVjyHz8oTmYfV88JYLiZwPPh",
  "key20": "5DbfkawauRndeVXgHH1ufd7UPy9AQM39ipjaALzQWue4HKHB4RWeYutQZmqaDdKBCXquoDSnBcX35o35vVHEhQE9",
  "key21": "4hQmTHmEKSrwPUsLzjvmcy5aaGoWLpB9mNWqcNBnRKRvwp6X7ku1USsZJEvyzV2BUABs7vWbLYEgt6csmNpNUcKs",
  "key22": "XSvFWnXmaFKFrHffJ7ZNei3HPpx3gfqYXqZ9GrykWmqae9sjv8qjNRwwYzibuUPesorC9wFUFgGkAqPKoBWjLZw",
  "key23": "2cmkHhHGnjEyst5Z9QMrxhKU4CoGTDiZtiEtPL8jxreCNKNyzuk44qssMBzFYvpM1VRdpMkg5GGSofAiw4rtPuYv",
  "key24": "5zKBZCa5U4Tq9SBGQuDQUiwDw8Hy4S8CPWgYg3xJMaDX4EkhEpBvP8u5qqGUqHMAe9Sd7asj1T1uiXKgQTvtw347",
  "key25": "5PzAGv7RFGAuHpkHDdmRZ4QSnjTeg3nu3vqGDWDvLgQt8rgWu4VCRnVFjNe8XMu4yjbdmqy225YhMcjjh21V9kPN",
  "key26": "35JRvNfiAVbKsivrxpycKZe4qDLaD38Nk5oURwzgnGyFPGeVfANDkCMcCCZSaYUttm8rML1GUQEEgxUGVHX5cmzK",
  "key27": "2Jxo91U4nAs1RyA97pKzGZP6kq41ovwzUmPTRc51eHuEXvV5cqoaQq37baWcpXsT1uVubmgHgoUXqmZtmaYd7sng",
  "key28": "4yos9tc2VVXYkYDns66h6GVKs9bfXPfZL58zcDEuVaoQDcnMEdudsM51CEdYPuJfufCGuk5j8HkyuQ54XpjqPPbz",
  "key29": "3hz46CyB2WkzWp4Uw4emyFe8kERHSLes5d48b98WMD1SnH29vjAd56qwz6XFwBraMvA4ETCatmQaSzYyCmzX8ckV",
  "key30": "2mWhAzxFqYpuDV1whuqar9kCZRw95HLym8emE1QvB8HEueoqmHDoDXGR53Vebf3qvYHwRGGDm6JwX6fj1sPc4iNm",
  "key31": "5UVjcyK429qB2ApiHKj8ADoKpap6zGyzaAJSMmodDtsRPftDpBamycYGipr68aoiRMKUJpNytWd9ETz4R1TZmjMW",
  "key32": "3Wzprx8GnX4ZtQ9AyidQfzew7qe2VY9doCtRA38wmjawFyfU3o4vPWJ34UppY4ee9wd9LZyoYY27QZLLogXEHkZ6",
  "key33": "3Axx6mpySetQvJVgqUiHPWJAE3KmC7CCLQkUk3LqHRXKXa61uwrz8cj6zqJgbzLA5epnmyf17NViPuee8ZGe21DN",
  "key34": "WaiztedJbj2tZzPdEE7F4RiLNyb8avAwpH2aynVDhG3H33WHEVdUUzfWAMibtggc9LfZUQNswoB6fh68CwbKz2w",
  "key35": "2dce6wKd99jYGPAFY1zZAQeiMABvthh16HpoXCQ9fUX5LUpGepwQhGZQw6BdW172hMk23EnW9HV5SrJsB7fbLLgh",
  "key36": "3Gw6f1mxvbrcv5L84iBHXBtKwiLWR5EBAn1PuxaHVUDKas7WBB7yf7vn7h3kYFXqKvF2GmRqQVn1fp3XcjsgW6bo",
  "key37": "57A2qj1XTpTZR6hqpwAJ5EYVH72V29ujyawNRiBz7wVwYx9BVykpneiQzrozMv76ir7ho2SWHezPqJ9HEXN2q5hS",
  "key38": "bLLWptANxG6EhHd8bhhopWuxt9USdEBV4wUvkSL5uXjU8u7cftzf1hoYJKPL3XBUR9BT5wk7QTcosoNSQkmz4oa",
  "key39": "44o3EbVvRmqs112WxbGzggb3GauNz73tKGzPL9ZoE3xrep7PcXJuodNYcHXtuW8XYeqXaHa8m7bUrRQbR7CaoHnt",
  "key40": "3CJE74pVpMKsHmSfWajVjTJdbgfMBXsfAMuVEZw78RrtLsa9GrcTYWnj2yTAvEqrA1zMMrndv3HPNKrmAtujqKmt"
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
