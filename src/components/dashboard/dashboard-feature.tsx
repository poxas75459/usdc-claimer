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
    "32VLr7EB6v61xwhudzhcN4bwV3rPFbsh4efhRB7RfbFPXJxcEWvmubW12umyvBP92riszmrFmf9h8LEeEJEsh9XH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yuwhfrdCU71ke9xdJNnutbbGfZfHyHjtDionpuv7RbSCjXhsk9HJN8EYDEdrVkfycYhsjHDYasB6vrkw5FSXTcC",
  "key1": "2pLARBTZzQ2LMMNWVTYNRG6gSqLhDoHfqXHjp9P9bS4H3omjcfHpWVxwof4nwArCjp28MoNLrrAZ4eM3n96SzVke",
  "key2": "2EUU5MpXZvMw2bVQYq8oaidi64NstkgcJTkM2mUPcN1igNiMhMjwKZBs39ZuS4qSLZxttanv1zQwfb8QMqUeVZwz",
  "key3": "3eFqYpaJHcF8iCnngN38KqDsBPV5bLdU21LQMvKQTWSSNeRGSFqqMsw7KiWT1g21eVYQ4LgVVyzkkL9CoF21NYv",
  "key4": "5FeSASRziN1o5W4RxjEPGF2pavDfB1SvhYsAkgUbqH2VnKZaGSPdbTQwTyjXznXsyB15oNu86xyMy6SNoCKvmdSH",
  "key5": "5YsRe6XGMwqtFKG1T3xHvFJnLFwGodGSUqkVEnPZXpCwVBfB1KeS2Lhxf1eJtsMKb2NLTxKqPSAgwYZvgXSus8j9",
  "key6": "42E3BtD1SCsYKRfTWNfFZdQQBcARuoJePPx8ywqbf2XMNfzeFGnQikQMkBiqM5akZp985exWKz7KvynHSTQbFEyi",
  "key7": "5YSPceDjc6a58u3bZQQeKSiPXbrt7kiqEpEP43nFvxWpv5hiHzSj71ja3AR1ocaHXrG6fanJpHQ75EBwK5iBo4E",
  "key8": "4iZLyjCjjtJcmXBmWZxaLLDawPLmsVkweSigswHc2gRAASGMKWhCiZVH2HFVf1p2eeGHc51z6cE2C7zzBLES1Mwd",
  "key9": "5ENADqzue3CTk4KNEkHuAu9tx2FEXU9m4kY3v3Qi4ppcDLuCEze8u4XqHqbRCZi6cF3ERTr6GxAuDuY81MeBH77X",
  "key10": "5z9cSCyBxftr5vahLg1gzLNni2Leznz1NXuMsupZa2kAfZ2V56bR9EUg5H25W6FDabcwN3fQ3Z492BUFfaoBCjM",
  "key11": "4PyPSw8FKSDwZucfkmM5Fv45EuPcmui3mZ23ABXDz1BEdVE5N5b3oZpKeNgxvhEdkbzhyueT9mCMs5gB931Tpcaq",
  "key12": "64J9WAwtpSAciqdG95TgMZkwFXpUoSeVEBptDbC9XiaWqeGbGxCzu744fy7Wc9MUhebUiDVJLG9GUVum3gLX2mVg",
  "key13": "3MgeRssrEGPLKq7MdNKd6RRdhCVMQhGWcki9qK3Jbmk4CrKpuwwoNHfCM7BWD423EpVjn3vvSBSWKnDPE4pFJgSD",
  "key14": "SWVymUhHzhZUJxaomMKhqRaHkh7xPdt691XAjHLKPVfbef25fPDBjU9t23kXqYVQ1E9g6jmRoLBCbWiSJX78gzA",
  "key15": "3ujqEeHR8cjYQzC51EhENEetcHMAhwfcFbGsSeLvV2DXcR5o9Ksm8oBryX9JPKvHiyzXjRbCmEka2xP4XQV8mTYU",
  "key16": "37zZ1KsugiMcF3q1aPPH9R1hqKhdZHxZW64ytSNmvJJJVgNQuYHUZp3VE8oFiauqwsmzkg4MzdqoJCTgj9PFhpry",
  "key17": "qKbJL3FnKkcAGmecPnUHeDPKmny81Q1WH6yXys1ZEX3yYbHzHETdLPP565oudKnNTAmHrnY2pnhfumGSn1X8nH4",
  "key18": "89b3kP1ZbG2uPKaDgd2b32rXLXghDywYUdjtdA4ibJnuZQZyQhsrrUf7Y74SWKNhqHU1znpqwRprHDoktyyUC3x",
  "key19": "3CgBgD8AuFj8AXUYPv8bsy1XRa32h5vGHYvTKEErGeSrD6ES1zuL7qXf12FUG76cznR1XWSgmDeWqUXBEagXrGgX",
  "key20": "25rP1ktG9MU2mpJuQKFRadvCxtU1qwjLnXvT5a8htfvvZQoxcKMeFgg3ZN2kHTyA5eR2C3jhnW1QvuRwEWgb7Wi8",
  "key21": "37A5Jvp8YEe8fZUjhQbFvuz4iSoRKWsS3URTPz2Zi6zntWbzdXrFWpNDQDkW5EGma3ZVm24JDUy9GtT5YLzWwDT2",
  "key22": "yF2cjQZsJh9r4dkw9dRwtX6a5NY6wma6z6wfspx69qFwVsPseLqp7U8nkjUriVU1943ikZ6qskW2HCLAJMzbnso",
  "key23": "HV7aobVAF8esJjfCF5R5ebKcbou4r3Vu8eJzCFJ1m4UAcbZDsD1h52LhECrptws4McVAYNMbkhTwNLRrha2M8By",
  "key24": "5rsiGnAzRUaCxXb1vCyB2TxPd257GCjCntJbQQKfk4MuABypk5RBQRRmthE1xKoAcntAkoP1VssxU6Rxu51ejPS1",
  "key25": "64fbU9xvtPqVws1m33wNSqibe2oz84x2BgLdvFHMQRpxucYE3B68BDFQMDSYMpMAncwFf9DTSpvQ18QQpa8mJH8S",
  "key26": "AERJFQsTXNepBiCGWrzMPBKGJLexyxemCMgezJCTGWmoY4mmL2rTm6Vnf3rNLsFdvJ2NQfJgnMAkeQEBB9nYd85",
  "key27": "2AZzpAKfeBAkTSb9Wm8PpmmDyc6hpa69L1EJ7wiaiKFcguRNarjbhL1ww6fxx6BDfNgZpzwMEKDjnFtx1J91GH9L",
  "key28": "vtVaxGpJbcoWyLjhXj92EQ1iD6xf2cjiFKgnNeDDo18SYaKqT2SEYbznN5t8nA6eMTqoTy4kaQbKrqsEcEYiin1"
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
