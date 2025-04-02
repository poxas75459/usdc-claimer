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
    "czKtzW5CHKUcQW6gHF96ARLuWY7KEjnAkkAGfJ6eM1DWSDsWphUgRSpveHAaUprrQbVQ6EMsBpBMxeezgRRBsUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p655WpkWxQRE1zVakwZqumRMEfrQ3EHzph9MeZv582fMMsRwkM2nzwHB3XimfUN1FkxpXQXmmhxv95qVRn2R15n",
  "key1": "DHu9tDXWEWctghuJ8v7j3BCg9HWedHm5dv86w6g9dU4sRUWJuVet2DMYUym27HStnCP81XaXRTc5qFuGs1baEQZ",
  "key2": "3xnACyPLRkHThTcokaLKc4TxR4F71ZRsZETx6ydSbvTmzYesXRbUhoKEhvLonaxs4txSyJCMY2mNPKQr218SHt5H",
  "key3": "5pqtWmzZA15TBingU1jp8cEo6p5R4eBrK6SRkH7VQbeZZSv3nc28WS3KtYzXUXxiw8eZRcHyGFzHTFhtVh2AT4pQ",
  "key4": "4K9RhZ3hmBVjzq2136npjmH3n1ohdw153nhDefFRF5UzFri6MobrzVDA2YdAqtDwABpYDr1LsPEY3JVC1SiWShw5",
  "key5": "3sctP4GaKWEoKSJqVoD1hJUKu4ksYxhkPVZvmhKbEyiaShfgMPnyoQ1wxkq9h7XxDa6eVGVW7Yjecv79sZ1VecQk",
  "key6": "3XB4tPvmq4Xb6N2WAe8x2mYmgEc4h7khwdszZgbFj2ZG6F1RuVq4VRUSV7vCQW4bEe8JhGaGdDzKA1xHgioN5S1o",
  "key7": "2vUePQtWJwsmYNJ7PraEg1oW48wwBef7CFTFNix4qmWAAHpXX4LnJe8PXVt3KsG2BZmhUxDRUc7cxerqvBpKVEJp",
  "key8": "4q5msCpuaJtwDwkZdt3CpUSGYC9i2AoZ6QQnty8rQFGtwfrmZQyHt1uwba7sAbAY847HthjdseKNuJoayzVghodh",
  "key9": "27N4jD4hhiLYu187uvjF8gm6crUFcpSim6rXfUjUXfPX4TLtaPb9GchgVhLGMfH1BfJg5FW2YS3axaJDctEihsoY",
  "key10": "3Rm7EmZQSXDCdbmSPPQR8R5YkaSw7bK9rYgGXCF4RpvrtgzKU7FtyApn8Wzutgn7MQEBUyhBAbi21LvW2W4u2fog",
  "key11": "4Vfe3tfHX4mCA87WiENNsdAexrV4MNb4uf13huKE67PY4xUNWpUa997b6cS1EwMkMo7pHEEvWG5dzVwvE9jy2wxf",
  "key12": "4J7A6NZYDP4kn7poijqUE3LM5zGgv7ZjtT6YVb6xsfXLP1Jnz1HnQwf6ZTcgtL3qnq1ScMKTr7ZK2h5dBE8JhWPD",
  "key13": "4HyHm1PLuLxFuERTfagqYa7iniQ4xTqUbp75boPUxcxQW6fAQJv4bg3hfZXBCyPUju9meA87cifb8vqMzxwENjLe",
  "key14": "5EfVtJeMFYj3cvcXfT2Rqdwh8zPj27jSgtzwCPm4D9cPkb6V8tDWi16aey7YQ8ZAJS8XCxiqF27EYmiACAimkkhy",
  "key15": "2vBv27tPMBNA9idRFk4SaEb23rshSScgJYHuVToBDMsRLYoyhbWTTnNrDj3v4LyFaN3gye81RS9Lizg89UtLNg7u",
  "key16": "21fEkRGEuvnMxq7dvMidkmSQrY2343HEznyCp2TSR7JMWHvtpkonAWnKW9qMdDmM7N2dZD5WhzjUDUdSTC4CEvLf",
  "key17": "4Y4w3BDcM9XFBUo3aaeUPBun5Wq5Ep7qPE59vMhy2D9hXQDL31oUSUvbMZaf9GFdA6K7irWfPSjTZtiP4MNMeQaT",
  "key18": "4p6JzV6D2QaLa7X7GPs2j6ayyMYXjV4z2dx1WUomXeAw9t7nyJV3x5j6HwUJU6Qrse8pT5P8q96w75H7GGzZt3SA",
  "key19": "2J8wm1oCcjP1C5bLds57JWNo92A25UALPcBKHG4cpctMkDcf5izFJdLZRdMyTVGtWqRtCmtWnGENi4buw3obfaYs",
  "key20": "2m8x8Kjy75eyY7g5PXKuL4REdVQ3ChAgo8YH9FFPu5B8hDuLyFoyKxZtA3BaaQfDcDZ249AWkWW3ENLyLq1ARMK8",
  "key21": "5ig3upR5vf3ByfFBLbeFBu76urF7bTaqyeb4sYqnHJypF4bLiA1GyzzayCE9XSt3P7CJ4KU9QwnkJE4hDpn86RHd",
  "key22": "4Jd71sWnd2nJ78Bqcyfo4Yu65GLz8MZdpeD1FE9oFtQqNPWSgMVxQDctSDfdK4AZbNdyhzFC25ifptoZzFQeTfnq",
  "key23": "zBijagvESFnVcB6NwHceSEzbFusqEzVzPTspz8zBqZYUV9871AYsY7mNd6SAPMVpuTQSyGdoBYqMFBBFsNHk8H1",
  "key24": "4ajZaEb6SHrb58uBZH2QWm7LkKwxhLTWQVMDgyWL9qQbVqzQRA1HTxdykEhrTcW24Y5sNxVx1T26tyCsebxmrYtV",
  "key25": "4hgrSWFn5XrLrzzUHVBAy9r26qJL1dR7pH3a7icr5xcuAUnkNVMYCyd3SKeiFkCsgedqiE7bXq1WVDGMuLdWPAhF",
  "key26": "4jENXVhSnoXKW9AE1U8W7P8ERrqpJTDCT6yzpRityyAN9TJw2w772isZjS4JzY9uhKkLZjPebgdHwyKUY7hYY67a",
  "key27": "48sh6HD5deUYgzpTYsfJVMuCPhbr2T95WWWCfAsE8JoUUoADAGbLq6CdWow7qbhfzg3dEM7yK4KT1pWVLQeLQ5Rt",
  "key28": "5hm7yDUBFxHCTWAYA9tDWWhFFFuJnxDWoJkw7JkabTija9ZCm5PHzmUGrD1QSU7BMBe6DaMVv3nxNysyecpVWpAf",
  "key29": "3m6okMJCESJpkUcNf2cKo4Vt7rJx34AHJPtECD9t8jnRdwSeRttq5Zm2eYKGepP2xXHyAJiUzkGt28XSUuA35sE5",
  "key30": "4Tnqxp1PneQruR61D6yAeTEaetFRp6WUd3LyacP5pTXT7eb48GDV71ZPLzXppdSvfwYDi3MLHwRZNxQXCAP3i8Rx",
  "key31": "2UsqErZKNC1LyTcBngro4kx8WY4SMUKp9aFiayqSXiUuo4RGdJpirsctTxzSFUZnrPbAkHUeEHpRTWK34P5GsiTK",
  "key32": "rUErVdjyztTNWo3nzy4fpjRYg4ykefiqufrEGNGrMUJa9JZTpzQbtJwJBxT7dcfU4qTgr7AJ58QgCjYGQ9wvFAB",
  "key33": "3qjR6xgVK7su1uKL2kyR8H75etZNPFQhpjzRKx1cx2RvER5Zc7APXPt74SDZxybrNb5uebC9dfQCY3ndBmKYTRxs"
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
