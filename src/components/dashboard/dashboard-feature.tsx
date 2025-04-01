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
    "ZFHCzAaYZXb2hvvhkti3wdQuYjqDL6EJGMZQjTnsAqbF2cWeVWPUDz58JjgNm94X5VCejfDTQZ8gjwXMUJzBsvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wf7bDhP3W89hLQ5wd8csCUq5d2q7eG5Ak8coc4RzTGFL9Lsfanifg2JxK2ZNyry3m9Boti6QWrVGJ4BoibeMjAs",
  "key1": "52U3JbMKDLitQqCnKwQJi3QDRVfueLoso1FrbcPoK78fU4owkmdqxckvqHju3sMyntJvctz1obwgxMjoovCkQZDg",
  "key2": "2knqqD49SQfrcTctVxUPfEnj1zne3Bda4Y35FUdcTwqyMKnpYs9gFy3vot6Z9j1PGaczDBZomRPYYJjBUhuBSWcx",
  "key3": "51k4yrLdopoXvCXTUDwDJSjnKbHuHdnr5SYgrQ5g936zBweq7gNbBNd1GTupdwJ8MzNALDpyuXpHXBPV9z22uqxW",
  "key4": "3mzW2pCwrzeZ6nokJ2amCeMjezBaAzPZny6U2MZeKdMogz4kTzbG3V8W85M53THCoenQx9ebUJLUpejFoaQXrBJm",
  "key5": "xwZWFsUPynJjnz5BpQiCtJ5uZkJknpNpzsqXMYia6kLF1JoySu167iZhWZPPhKmM8BB7uYFHBeTY9LsoLQC996o",
  "key6": "2yDXg5vgNvoEjHsbo6pVa6TuBXXB879bW4D1CXstnExJw9JMJixN941aZBuBPLv6jFp9RSzhouKmpjs6PnZ7xEbD",
  "key7": "4uG9uxDjHk5haxkw2YDbNvA3i1Bapyr3oiyc8YL8T9Lmom1bk3g2gQD3271dH5B9gH62BraVEuiH4VfbNZM1YVDK",
  "key8": "4PXTcpJp7z4HBUwhxvENvbwKLeq5MvWDCWZahf6oLw7r2VMNdRaxf37fQbYDSZT47Noeskw1527zv62yAYfjafyf",
  "key9": "3BFJj1eqpdGoVrK3FG2L8LPed2oNVc36afcvYMNEwXLz7YBNKjRkHEzpRv3kKPW3NCi7cxH6ssgTdAZi1nNzPsah",
  "key10": "2kLb8G6DCc8bCvtaCgSMVMF5SxexBTxQsehKj9tAXi6g6KsRf4n8Rj4j34H2LX4qPZQnumDNtCHogC6Q5aP1xVy9",
  "key11": "WqGUp5yGu481BXbqvfsHsQrCmqTkFwYroMpxthWFwe3TQMPASSGYKULjyPvmtX54Uk7VyC5aW1Vw2ptFctSzZ3P",
  "key12": "4niHNhu5kuRT5GvTVz7956iKbxEQUpooGGbQcSWE5zafEQcb6BTFzaHfsNsA2RFac5BwhYDb7RQeVt8vEDr8xk4J",
  "key13": "4MzptRmQbmWtK7PhP6CaDrkJtCiJYnMXURxpqp6tjvdZtMEpSTLPGHFiMV5FxxdPfXTVSmwE4VwvBsYKz9Awm4Wq",
  "key14": "2d4RzSaGfxjoXAZ5YxG91SU6xPzzEJ2EFMXwTc9aYmbYRZyfA63c2fqSNdh3k7TRGeR1amD8wqV5XjWGGigi8fAN",
  "key15": "suQBhChpMPX52ofPwPY6U3kaEVjVFeLxRAm7s1yZRoZFaVDV5bpGbJ8HVVMrzb2jaikgUXyEqSosANuerurHMdY",
  "key16": "2femFizSan3V6r4wqrkoEQBpr9KgvyMvRTEDinQsNsm8mmh8BYbcRQFy11nzsm8ZrC1oouHgjifQzUg5GhWiFjpw",
  "key17": "3NqBhAXoAsAucNBU43n4jMHUR3SFThHdxic8i5XuX4iFS16NRFHRHGHe4i22XEdXApEez6tPMnZk9D9P1MELN1Np",
  "key18": "56V471uBfqaUioXHT82G1jpTmfc4Z3LVf4MbqiTueK3fjCFzRXZGXF8nMRa42yMHKVzhHZvPNXFZ2cr5ewKdW8Qq",
  "key19": "3UEgX9DciEoQfxoWAtpZgUY7wyWByrUKp5Ptgi6xHnKjKmM15gdwaykhX8ER96kyUcdsmEb7pDajjEHCvNTkPb37",
  "key20": "qXte9oonhMRRktqR1saWCL2LnCbB9VuuQsYo7z3dATRtxBcrt1bj72LfP5ris1H9Xkt428VDmyozCQyHXLYdiew",
  "key21": "wVM16NjzVJcfkjV3dTmSe2vZaEfBbuAbjKeLv4SD58o76rbZVziWufdhXDReku51VGkpxfv6k7WAntDRv6ntY7E",
  "key22": "4yhN7MKPKn6QwT5KjtjGGpJZW7aPsFSe2DthioAtuZhyLEV95tAz5d6Q35u4qPVvtE4oGc3PKrj5iRodxfGPww51",
  "key23": "2gVhJU61xBmBuamwCCDtXN6qwT68gBkjx25Rf4fa8GFbGquybQ2LvFkuLQq6fibQYZZKCqiWfGPpBGk4SPDaGp4y",
  "key24": "3SS27rNv2QuoVrEYXr4obcafWW7JKotaEnsmYNS22FKHEKVzqJ6TPJzHZL7kaG15gPcpQztxX4t7E9LoqKKF8Nbg",
  "key25": "QZCaj8Bambxc7Nm7yf8tL26e8VwFSKTGURohWWiEUrqR64xr7zdnVJx8csJemuAWtFoUUJAD3Ejp79aVQUYnZm4",
  "key26": "2DkeTQjSdFyys6PFfw4kw45ocdVsFKqp7mVGB5n7bbpGcUqyqQZBUANyBzn5HibzwFVQTgor32HLzZXw1daoDYaK",
  "key27": "1FkFkdXw7ZUNJ8ypkiQ2WHbXsYGr54dMVRvsok7XfTyciMnkNhUsTX4Q9XLT2NCzPQL9d6fCVin89NriZid1Bxt",
  "key28": "4TQRRbo5xbm8PdZ3cWF6qZj5NTB8K6RWNSkWYNBmZfPWUjv6tAjkbzxJ7VXZY6v66uVJSCvF7CCXNduryxbryFt6",
  "key29": "2enMiGKQW7BQhHCnGXLYgiBXYdCnQxyr4tV32LAA2icYSVVPUV8ABYowYMvaBSHquXWuExCXYWGjdZRraDJPG3Ne",
  "key30": "4ponpXAVyUxsoXWcA2Rafj4Hk6c5vm9nHqTaZPuRvGnXXviB3EgBQ411g6B6fHF4bDsq1r1XiMEQqVpSADCnYYoL",
  "key31": "5n1tz4hJQ8xAKFvUw2cvWKAha5SrvLsSm7oPL337vyRf9mTw1wK3L7rSfTigN2GRWsbBE34vzhh2VSPkbcg9jQts"
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
