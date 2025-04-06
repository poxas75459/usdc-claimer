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
    "5zWzJGnKPC7w3uh2e3tL7oMENhxupXg6wkPJUPX6Z5wE8ukfX8VmFbZaxs8kawwVVgJvb66hirScBDhCZk8UrSTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aJ8QawfnUdcbHQpXRdMvF2wma33J1Yv3SH7rq3P3Wuy7QUtAFRscuXsdHVXXwAHrPn81p7L27ockpM1rCc8snJa",
  "key1": "27YpxV9UJd8TAkP3ikctFzXtJED2fS4jMVxCUy6v2Shuw6ipGi5N36CcDNHcWmSHATBQy1g8Vhnm2CDTWXWTpNJw",
  "key2": "54D7Ka7auRPyK7mKcjeLqgHMngu9yUzd71sf6Q5RMkGZmhHPxL7wUVA3nWdYYVrVLHusL111L2nY4WP4rLdktUBt",
  "key3": "jknbb1Zgbibwr94Lird9xY5hSj2H88DeNqwZWJKzcu2xYqaMsYZyetUPB6J3h6xtHJmdDWNCLnsQf1C7Z6yE9p3",
  "key4": "5qyhn9uu6ohZGbQfCJPnY6U2uoQzUyexEexkAFTte7ZHPMjxvuV5e7WRtTyT6EBsb2Rn4koWzJfYZjtPnC4yyuqF",
  "key5": "QDjkqQGXr7pnnXFF8A13uangfJ9PeY1bZTFQXtbA3WeAQhyWdxfhi5xBDjyW1Bzk4vqWK3a24kq2TFRCtt5mUTz",
  "key6": "nErApXQ7Mh6zUw1qrDmUp2QsXstGa95ozfLgYFXR73Z1tYUMJHTjdvGUJ3gPVeNtYMKXdJJwdf7WcYPTgPhUUtK",
  "key7": "37nDxuALVARz74ipe9TGm19DZ4kLbfDSwD4zEpLxyAbRpmeHqtejNgJ4EHsw4JfgzU8FDGGhp5ZtBPHPQFN26WUw",
  "key8": "vhV2geAfpTbFooYuCfjae6BmStMgK1s8vZ73SqJ9Rcp5yYhYN5CSw5s9WRSuLR2iqw4zDPPuDsyrCWpy5d1gu22",
  "key9": "2vdd9ECo2kjJAeCsQvmDHcHVyXWqqdqSuroJGySTJWsV9ER8w5VC6Df6zPCBJFXDPXoDiB6GcyeEkfm63Ai8fvyA",
  "key10": "3jtnefuxhnrnTjLnheqQr5pZkJjGAXVeULnHEnr6YMixcPxtCTGUD63DZTddsBND4ojjD3iQ5qATkRABsQhHiqP1",
  "key11": "4WPgJC7b9yd6wfPvsvXbtQD7xsDXoPGo3cB8TaJxSye5nYQ6qBFqad4sNp3hTXbSdctoJATYRUdd7rVAwhHkkqhL",
  "key12": "CWDKKtijAiyuqoBsHpBUkFjP7UjZbVHBR3zG1PC6ZJHRWKKtYEToxntUBGv5DQVjABbQVdJTZUPSWRRsBRZXzVj",
  "key13": "hBmdF7EB41oQXVKgHQC8CRcDUEpuwhG1vLCp7pMEKaaGuuxb7wjrdrajj4VCYsDcKxaYhcG6RPvarWVDoCysVim",
  "key14": "NerP8Pbx7u9AstYVNhBXnwihXWPnNCANuKwwhBVydgnxudR79YX7jKVwTLJ8pWVRBgxyopSKnVZHAqYXCbCbsaY",
  "key15": "2ao3xF3KwTUkwqHpjp6T1ChEyAtYaoVgwTpJ89H2q7asyadZmyozwGTdsRBC6twsZ6HqknnyUsmKwz266Bog9NBB",
  "key16": "4BeaTEBUF4Wd37erH2bgzSTvGQmrNd7NDRSeTCFTDvX8pj5diUYY6BAJnXoSk6Sfwn2G6bShBBvzak7jXZ4CQJL8",
  "key17": "FEFA4zuUBiwJLuYHmG5FdVPRZcJufAK9MkRPt1cPssRBpsDxwnm1tJFvLwJuUo22TJ6mMBmUqvhBfbLSPTH82QU",
  "key18": "2pitYAbsM8v2LW5zLamFnQuCo2nnVjAaZA4FLH7JMYnXihvPUNJDR2euDrHQV3yLgEhAuPiwc6Tb4q7jHmWZFS3x",
  "key19": "5CWNai4J8F4sXCUsqMHRWp196t275UpyMTbg18dBKnLDwUD27tnif3mpdFwsKUhB51hXumB7NVR4k11WkSLz55iT",
  "key20": "5Mz2nJrr6x86ZrTexV9h5LWWMcNPj3c3iHY4uohTrDaJjEc8gvzbBZNpDw4P5pbLRGW8pkvNRRn1iKHHVj1LytV2",
  "key21": "5dn6qhebKybkD8UaMXKuQeBRK5ScLBcdjd1by4Rhp8EE7c7VZekqF3eiFYZb8JqDGiR55FoDYdvYEpwv5zAXpgqD",
  "key22": "2D9WqbLDSSoQZrfYHM6FJhgsbBo5HhAJC873jvyWQ7wFFRMwYb9NPFL1u9ZbwFspxPxE1X4q3q57X4LL23HCBNUu",
  "key23": "4hsuJXD1ccy1ktabLyKvTd5LfppbYpLnq3rLPFy9cQ9P1CZq2RvSSKFnYpmpWyGfzDQpvn34moHPETkh6z53xd9U",
  "key24": "29MZCN9cDqkZSRFUshxpS7P6NobuJxWWpaDyqyuoz3bLZSUrtyW1YN2YrTkq88aJeYf4AzG7k6XrQ6u6sFtR4akT",
  "key25": "49zQ2q2yRHMTN4iBXyM1EG8ykMkK7nXymq4SW8LrVBfUfpg8TtMysxuPwee4A9EfZ7EFfnofPDgGVQBnpzvGM3FS",
  "key26": "4uLn71N5QnNvdYp8oVMw8itaCEeruFt7cyCm63X45M5YYhNcWnbvMjTCV44w2H7yT7oQbgGy4DgsidCNnEEABjjU",
  "key27": "3E7hfLKWPjxbmWiFtZ9AWt8gweRdAz3PnLFNNcCNKUos7cSoCb2PBi8TRhZM2WPGAjqaCfXaZBaoDDh5JoEGt4sL",
  "key28": "2e8MFCmdy5HCM5UNLewxfsDs9ynT2heTsFtzypEFALzvTejsF94ZpSoEaKw6fidRG3WGKWBWy3MQEtsVLZjnCcqB",
  "key29": "543LMiEsrHWdPkQbomWSEfaeeVoxfqDrrcZ1KhtKedwiCra8K9fSyUGUeKUabz6K3xaSHeqJ6GxhxUnDrP2LyHeL",
  "key30": "5uF26NRoXmyBxh8sEkMQU6jFJuzkhgbhx2NbuhcfrPUB8g2AHrEqNdmPpHrNqdty8UcCKUQAsMBMeSNwegBW1FZ8",
  "key31": "2tamNMKmU5kHbiuoXnsGeSVuj7haieFCwKoVjm7NuWtXMU6w2z3vv2d64WPL5Bm586tB2HBBmVCfA57eRnkJ511v",
  "key32": "2Qj8pciWQp5NFbey4pKbFJ3CFfki2ToC7FmLdzT45WRjnFLpeU6fJcN2fCJhUhk5jX8tCf3WaDSLtD29AhXu2Gvi",
  "key33": "3ZkJCPSwyutJuzdRbkxgR8owvcWzaZy6ydJQXP2psRVvxrUX7Ybco1Kjvhkj2P2tf4vCCguZfJL8U1q6hZwTkVGe"
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
