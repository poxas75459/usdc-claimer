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
    "4mbYwAgu81zUomhXezeS3JBdPbpd7sTcCReHxkYXkyN1nVuinDPvM2jN4tgFDa4pVbjtRVnRizapMmtLfwrdgkYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35mCEm1Ld7qh2AZ4hCh9bZFjKBbVr6gMUnhUH8p9KP7hfSu1qYsvTSGVxXTKsW85NQp2MP1kFECwsDaKVwEydGSG",
  "key1": "494yhdhBEKs9HbkWEziBpJoWoheob94YW6L6L4aZu96uWcrJpmtQmuJGYKXvBgRDDhic1pBNDypDxNMzoyhZNavJ",
  "key2": "2KTRLniVW317apsGBfQU7pLeUiEoR3wZ2gW5HUwS2YsKZDeyqeFbnmA4mqwbpCgxRsf9x1XZmUG8VdREC9veRfUd",
  "key3": "TY8o64dcPPWep6wX68ViERekDmusR9GyKYMR1SKkU6j76173px7VZdr6tbpV1ZWfYKVRPtowN6suWxButk97JuG",
  "key4": "38FL3yVyfWUJ8fsaAH5EBkvtPCYk52Jrf3g8LEm8hUqkoYAHAFEL51asdP8GaKAYMnHUS5PRqppH2CW6Mo3cZoYX",
  "key5": "52ADy669uFQk9fHgvYNYURbJgTx8gFmNSgo5P3y7FTzpRG7k2VwZrzVoXecWYKLHQWcMs9C9UX7NtqqT23WUmyKW",
  "key6": "4JxytNqzjAnRRnkoUbyWpLbmNxixUudFxpWK1vBDiCztjFve7WJNqs1a7yHEBSSAuuQdbGNwqmUfARg7CFSVVqQz",
  "key7": "z6w3VdnMPeSgucjiRtBaTcnwzLoLdPpUvmRa2PVEDzN8xUiXqCK8obMsodXPvnyuNWFuL2RykLgRNSSBfy2hnbF",
  "key8": "yJ5rxjtseYm7kr7BmFt8Ttf8sbbkqQrHCSYhCBvr1dUUWjd8j5SLqX6nRBFPDbudZee12B2nucS5Y9vZXd547mw",
  "key9": "5sEP4YhuUp3KByL8RVM2JgzWWpEvzC7fStqj1TF2GEf3MnetS9QXWs1zotBvvnq33tkFDFjo4q6fuTTwv5XESDvR",
  "key10": "xNfb19UEP4XSW4vN73qKd3kAVYjSRJZMrnebjnbaxSWxj11ZThQbUhif7MvSnk34h46wY3fadN4wZm6ViHsmf65",
  "key11": "2oMxKHh3uKiM68t91qZUw8R5Uco5Psb4nD3jFCbtjjkJG2VzfEQMByGncsGHYt413saGBk4eZzdyEBQsFjRabccp",
  "key12": "3DmHMAF8s5Mii6kjaRco2uQT963M9MYvmga178uHFT9isguEnDoGNh13JeLp5gyuL3utUketyBc9SYNnMWc1X3J3",
  "key13": "5u2SPUsmfKEjwPcmZGQtSVbiioiD6n2QhaTzNF9hdhDX4VkuacY1s7P6PiNKRWTmkX9tcfDZBcWw8yrUh8zrZTJj",
  "key14": "3WKnKa8mrnp5LTNpde66CvN9NvMkunBxqWwgwYkMY6zbeDwbyD3Ufkk77df9DB55eumBktgLvQTNSsxuAXMG3Nkj",
  "key15": "RQYvANieHnfW8xnqG37XAdfJrzhA4rCmnKcxjx4iKGD6bQvKKuZMJciyXeqGP6eEjqBEkaa8yXK4DQzv6r8KbJV",
  "key16": "5JU2kwmuPJjLE8he78Ksc8GZzzhBUsJHUqiNGxX7JMtwv5BcwCZojfhpny7F7qC1kqhJTwnz1PjP3QRrX9iWRtHT",
  "key17": "4SVJNAiBpQYSqojfHRfuvGPZjSy95FriaBA7CpAzpQdYV4fQXBDmr35Z3h2pjMN3QTuLWc2Y1WpgbQKFBYqTQ4zr",
  "key18": "3im1b61q63MJGbXWBYAYuKp4Qv9CgxYViMEGhiK4Jw6sFtBQ1AmCfUyjV3RhtNTHm14VswU3zDFHmW8DtXgAwL6S",
  "key19": "oK2MY3V5ZX3ErBeuYPiE5qop2n4C4ATcakbptcQLbgNPuA6EhmFphRZnKo4AMvCd7fUxo3dqR1NWtUa67DgQ916",
  "key20": "5oR5BoCLYKrSwsS1f6swCzYVVuWvD3AWNxPykCFc2VTBVz8nMhRCqCS92c6NWPiFbdqe4PU1JHDXRds32TrVFVnv",
  "key21": "yfjEWChtevHjPN91ysLsMSpgYT2Sj5KBoaUoc74E3wNzmbM6bgnXhA6c224Dns8tAodLfDjn4a6XYqn93JnEMdR",
  "key22": "3tgshSstcxSBF8K66bwYkDafbzJtBxz93RtskBpTTM91jUpeP5TfKUc5rTtcXxLQatoBoUBbSJWVbFuDpFKZ28Su",
  "key23": "3WQnmLCKAgE1ipzKuJRVHCtyxmtpMoQevUv7L7Bok7kn8ietaLG4bfsfjxN8AvNkTGujUrYuDcMPs4yKJnnctLqP",
  "key24": "3EuMNdinLKkedaHoZ8XfLSm2keRH29kC6tP7iwZzETVFBzGNa4KAWFWd2NixcU5iLdva8iyvZwpfLyVjvSnWxcj3",
  "key25": "2kTvY223YcTjVdbqmBrXYG536gyqjEJPZWtrpzwu5afomh9gvUxSNvtzqQ58FV1wgKqjfeLGp2z5BqcMSi1SMaba",
  "key26": "121B6F1PMowtGX7xqXbSC3upFDKg9s22UQpE7ExquRmn57ZBvZozXwJ8Ny9nt7JYGzaJiCXwqWwDjnRAMZhkCL5N",
  "key27": "2Ah4JmPhf2veCM7QVTQE5qj4HHTn7JSmi1qCAktZQywffuijs9ZgE21WfkgtJVqJTk9eUV1QPqBrAtaJCCCfDCrC",
  "key28": "3kTCvLr8JEqgAgH7Mstv2ngLZTqjrQgKU7aXivSLWgmWfYdrQncqpzozr4rX85fyof5hbhTCwvUVWHv1EPKBJ24c",
  "key29": "46Brqn7T8VUgQ3HHQzMAZJRaJfUQxGSuA6cEEn1zzu86MMgw1tMVTtSPwxEr7nCaTJznYXARYYNSX2iuV5jHEQue",
  "key30": "Xtk2HfkanhKUnVgS853yqaq89dMPP1Lb2ssMrm3g6EWPVjCqkSqfrZR4nyRJK45L3nZkPviLBc5t2GbgVnR3e3A",
  "key31": "3EBTs923AibfLKt46tiUUy94TnPhWH1EjupZjFV5KeXgqsQU5Wr2Hq72qnyFXdfEMZW9TPEqLHGM5UV5VECknvRG",
  "key32": "494ioPt1RQ5D5V8wtVEKDQfDMtY5UvEY76yLVsZa7hh7j9xWre9u5ZDVMmzZSQucgcvyBtUeYEpAvwaFtjA1iF2b",
  "key33": "4eQyvb3Fn6QAFx984dgB4v8N6dGkJAse98hAE5zHqsqPhJSRRpCsWhfBJ3pkjkpsQjohTQf2QsP3AjGgfYaWqiA1",
  "key34": "2gXBkidoJM1JwtscRVrgTcA1CRUXLuGU9eoKP15b8U8C2egCNv2Mq8htJNxYuZ5xTZQ45XmBSixoV13B2LJvTJ1L"
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
