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
    "kGzt1qRMuvGbeNxZA9rYYGoSbwZgsmX1sfV6HufyGZKVhMKhmrTdHFrqJihL7FSzy2a5hpyndKhCrBDiwV7sFmQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oLfGBQ7XMq8y7oDBxE97Nf8osgLEr4WosxirhhAbPnejUnbCwoCJT9Wphc1FgViL4vgVUgefiyXbySiP2fN1vCA",
  "key1": "5RkRNS1uxFGUUu59Af4rxep3ibm17bzRUEdgvJ2eHPjpyR866AhnUmjVH8RkUDLshtzq3zDRUw4ick71eRBAYhNT",
  "key2": "5vYGfEpXG2ZeJMQhLMAgqngCJD9x8LFnAjdB6yq9t9on6tnEbZmESu6Z4R36U1XMdUVWeo2hgdaFGvUKGhyRS4XN",
  "key3": "4L2AQ3e6t6DTwuVnWeJYKwZ6tn98x7YtnuGJnDrWKq7PCdwUwqgKcdan2LqEkh7Uk6Ru7udYD2HtqLqHxzotpYXs",
  "key4": "67JVVMkXGpoXLg9nDCaGDbyujhhEzWx38KFA9w7LbtC19f7ykTYwF2qGfFWsCfaQPhEyy1j4xWQU4uAZTipDoHU5",
  "key5": "2a5c2BkSXsCBDUt3kk64CkEuJa4cWTqTv4jqZkuTmn9ZSfZbnS3d11nRtc3VaLUKDEfMn4XQHYCKCjJyCzAqz7Qa",
  "key6": "23yeFc4GsxSXeGVzmwe8LVeczbrJyFRcxiS8cv8NZF3Ht4v7e6wpsakGL7BZt37nRAZoX2KxcaQZeLU2zsPcSg83",
  "key7": "35xXZD1aVTvdxKdw9PEMRoQR94gYrtZKSESqc7XBV4hza9asLrgPHKA1cUyZWj6MdREWc7vzsxJPWQXpAuSdNNkw",
  "key8": "5KzBQ6iKM4yVpeLeFwQZn1WaxaXs1sLr5mKr175S4pgbpttnCgoHEiAn4v3EruMqGHHcbVpGJ3VoY5D7DL55BXJo",
  "key9": "YVAq5KZPCJBLVs4bVox7bRj7qZSR94qQatYAqNnGg4xHQFXhbmTyzjQzer9vdwGQVyUY6PPgpoJkYhizPsbDPuU",
  "key10": "3pgzYAxgkAFjUZ6yegWqngfxESHPfYfFaiMFWD1ZVoV3XDSMVx23tNftGXNweQJhhLEgseY1j1kKTnooNjWYJd41",
  "key11": "abMKSbVmEi3hWiLyEFenAgXy6xcRWETXDvRdv7RWHUDHh7hERsvN4JLHZ9otfejNTfvFEbtJTwqeTpR9hz3J3Db",
  "key12": "4rCTTYE8i6gRiSpxupfd75RMTLMbM1wfuwGgWcsPyBeYwSPChZNMWjKK9a8txAhHbsG7su2by3QucK8fUNFSYkXY",
  "key13": "5tvuznfDWPrBmte6UWuj7BpAusAfoXUbi7nPzr6bvtfNqw3At64ZTaJ9L3Vor2wuPp3M8qubPPktpeEzX6JqtWcg",
  "key14": "25GjCAaGGSD8YPHie9qARBUkb6c74FjLmGLd6K23HzVJGbpHtfeup4fQ1GRLSy8zpCDmdGgG1LnLFGZaiCKJ1TNJ",
  "key15": "2PJfZ9PLHahGkGdaMdF4Q6B3rk64RgDeX5NiBZyzYZwJCydEhvddSJXA8EqYwNJM6w87axaqrFv31zrf5wyiMHa3",
  "key16": "xvy7z3JVzDzUCpiNrKd8mjcGXAqweUEcoPes6Kbczh2bYwm7Aag919ay2mgbgnihgq8Fa9CWjRQBgD8uhS9Lz45",
  "key17": "5KG4KRCBTgGbRWrAP6t8TKptRuPBJNJJ5PLenrVirq2gwrczBrQegL3Mj2UmCc39K1FtBLhKh2jaUnmkSZpw4fNi",
  "key18": "5E5tmG1ybtU3V3qBNzDVuDkdSPH21d56L4TziZfQpdMuQw5ASRi53WRNL8V9zfynH2RuZro9VnQFCfQWbkpnLoL5",
  "key19": "ZSq5gkdUFUjpgLWRB4twP7Sn3R5LegPkAf2yWEjLvd6c3DfVrmTbsmkxxwZZE9zwUgsCZrLvsig4yPreKcW3Buh",
  "key20": "2AAZaRvXga6gMj6wRs5BWU4f1hPiyn6n9JxVjY1u9MXYEwPgwWWb3Pvn7i5LbDqCEpxf16L2xQrZAHZ8sQcae4Wz",
  "key21": "5W3crzFJmE4bd9mZSWRHv3eTQoxBdRoMFoD5LVo8j5V3cPKZmWaEh74phVQZY1v8sYhETMnjWJrGMdves4FHHNWG",
  "key22": "4ThrxdV99jguqrtr2wm8sZmWz5FBrUZtFDuvo8fA135doDXjJeELuFYcJX5VqU8MQ54oqJ33SHhwjdADT6ndtfPA",
  "key23": "2Bgs2PoTnFqZGD4S74bawYAmcFQTR13jFLqfPRPM7jgXDuaPARnahA8CmjsJ7hTzLEZ7AJ8zKjhy1La5Un7KW68j",
  "key24": "5GmDYfF3bnHhr17P7bY7WiduRxe4taFZCGsCZXUhVn84aWZhmXGumbHLv7rhoiShZQbosRsEEXp8pTsL6zZoKwZh",
  "key25": "3L28dCJ1RmBtuArj458oT9J1S2NbkndpibnoEkXsJhfRJVdCWbnfKWjKLjK4SUUzKf2rQEyowAnNyL4CQDCMHHXX",
  "key26": "4WuHzZAHTAUijhqAL7vF2f9dUkrKVLYu4tKnGNa491bbRynuY81pKbJytCyXHNBZBCREvMztQiXXM6Gru57KEVd5",
  "key27": "4XTZAhyMZTqQt4ej1cPSPmu5F9D7bjJd4cZ6NpRL44fmKemNLMJiJSkT43Gu7C57PQFcg7y9j9trbdDb645hwFgd",
  "key28": "2eE3V2KEUd3exZfB2Aj22KSULT2Z3yGWjbZEVhjcCLqfahzhoD1T1ZunfMJV7XLRcx7gVo8PVwRtLULN8H6mUMML",
  "key29": "3RjQWyERk85Da9ziMNovxsxT3GWJ7AHVkUkaRHXU4fZzTg9EVAodmwrcM5jEpBG6MNZbnpXU6pqa5C5qy3ZTfwQr",
  "key30": "53cnc3XhGZkJYMX3QCcaKEWVsEBb6kG2WzDTs6osST1hEQyauThDMmytRs4MeiUEndAE2gcKFR6F6oREDTDtEfjk",
  "key31": "4z4it6MnNNeQfxKQ7r4yvoC1GBNcRzoQrpG2ueRNtV7E7c9A17kL6QRoEyxFSnH6ZJfvi3cRGjEEcDyJD4ZgT5GL",
  "key32": "4JTBByWBZZme5XExwHfTWze1Suz8da6LTfo4FkMBm4nemoaCYHp446PGLur7MzhD35JzfnuFz4NtLgbg3ipfm7W",
  "key33": "4UerukWgffV49g7KcxAAphDpRi17EGgqKM5trcGZDW9SngZqSu6XZqGtQ15eAoM6GA2PmDjPJgQzxkmj4Qr37qVP"
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
