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
    "b9PS3LE9A35rFG7KS919TqyAWHnNyyx1Xov1PG4krrArEKJkJM1GGx4kQDAGoZHDD7eZW8w8U1ni1X5sQ6QYPuo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CVqyQ4juaM9hTLERwxvebgX5CzyZaUHYpLmS2bBTB4MHxSBBfxuz2jCbRw6zCn4gDcGxMei4apGom94zG6pwcik",
  "key1": "641o18hA5e7XafHKj9CuU9J6vSMJbqKqLas4Du3k12fwowZ7VkbN4XKfCeeCwg33Rr9jSgJQGEWhgREn85jzHqCE",
  "key2": "3HMsdwj3NPycXZNjbjU2QuYht99Zu6czZn93C221c9shJWXiCveQiyjfuGVi48vr37CeDVBfVkT3BJGCxcFoaZ49",
  "key3": "VhRvcd92zEtKqSqDVmfqa8AXNrt5xK2Gyxzz7wsptLBLftB99X54LxFPV6Q3P72JqXBgkekqDs9Ge9FrxZqkK76",
  "key4": "41aAetpHyr8aukJcw6JqhSE7dtsZHx7LkbxwTEYE4wiMJvpKQxc9yR4ZdEme1qKjUvqbdGTQB1xzjD4oDWLn4P82",
  "key5": "2bGzcWmqE5DX7o94HcY1yAjqvnQ7XwB7ncUAvaM46jZx8GQfjEHhzjqswYCqGpL9P3wtNzdHjCqv4UGPoGic6u79",
  "key6": "5KJpUPAecfKvCZcUzPNTbZLnUZCyPfs7nLy4XoXcs4HXnuJsCpqPxemKFN13GUrbsQd9X192KKCWYcBseRS7Aysf",
  "key7": "CEdDbyRUtcRkodVQ8xRrVDJq9UWbZ18hQPa4Yi6CwpcWT2uQ8tg5r6AmpGULnRo2regN7hDHVZfgkvhaxQbw95K",
  "key8": "21QnKKeT79nN3q7s8v96vD3Wx3S7CNMiEA5cmv8p6fnSh7amhWHA68B3bX8bDY7PYNTnhSTikaw61u5LUXreqoKS",
  "key9": "2ZJMwQfW7L4vThnQZRTknN4QKVpwzDub4N5KftdCqpM5X1KXLpZPM7pyrTYjJ9FGm2Um2NJaX9CgrCBTzv61RFDq",
  "key10": "4BzcNL85pozDJimPKsUKEo3gApGQqBeeH6zAuBgp9pxTxHK5TQxtTw6MdCGXs4RzwHPFUyu9AosTyPffdkLfNMCu",
  "key11": "27RZ43Qgz9U3jGAxSHqFjf4T3YgDpZuHg5M6Uo6ztpt7wV7ZmXdMP7MTo2Ct9hRRL4YTPU8iHMtA6JfRzxHGeCeA",
  "key12": "67V2hrxaPJR1gXf7Akk7sv6hmMQTGjRDZ7RGrJNki5hdfEjozPUjUxGZmuPB78sKAuBmjSeNQS1GNf5C5Z6SsmBC",
  "key13": "UxEqbxn6EHjVMX8sg2tHfGMCVmuBNcK8JSamHz2munEoXCCFdUJFnL3PRAajpEed7iAVi1Te6gG58URKpVRGKqP",
  "key14": "5uQZ76iMvTAvdsoW9ismRRGubW7qHMVibQWEmjbUZoTJeATR9pwRRacvFSdNdrtkCtZdU6wNq3YsQqKTHQFUGFho",
  "key15": "3trz5GkLACW4NeLWwrD1SNQ2o16V8wkskQ9UqXmmCo4CYLkxN7EBQwFLX2sTW49ofeRGX2Z4gkF3hb6Jo1Z3QPLP",
  "key16": "33Rv97TM54UrZiLeHaPorsmM6fxdyTEKn6Qu9Zjn1tvJ4GAcLTARppWnaoKbD1usA3SCEUdmi8CR7fk8g5myMhgW",
  "key17": "2sJsjyk9vEpGZWrbSRvNDN1qiPzxsFvuA8fvYEWFAwWqKgLGA2cvsEZabNJAT9wKyvgQeZG3smB9opKhC2raiDsr",
  "key18": "5aWj4BDBtvLvku71vMTY9SuXoEv8XDR1r4FRdfNPwz8et2qm3k3qb4RrPfQLJAYhkN217DxTGG2GATY9iWHXdYW7",
  "key19": "3KGWwbbQagwC169fRNhR2sHx4acXFSTEPFMxfzLHhAQ2cwSC1MGfYzdTEN6GLDjrd9AmhU5QSTNw86Xa9n177uCR",
  "key20": "2pseUM6Y8eVuHLMNpJ3ET2pGXRskL7GA4VRUmG9Qu4U9dxDuJKh8KBMK6Fi4kgqFWpEpSGBffyK96LhRLMpsa8Bm",
  "key21": "3uQZVh33N6f5An39bsG2yzpwXKYFWBLHhz5vu3rFRMa4Jt9HzEGBHzELAVgV6v7LvqJxZJwRQRhMHhq2DZjyq37c",
  "key22": "28Hd7TLVwawUXzjVLqqJAgN9RJFgNhceahWLbE2eGZfcWX4z24rUVswgy57U2pvjW92uJiMjQFK7fZiKpEg6ECg4",
  "key23": "3Xi5fm1S5DNPdCmHymbVCkRPdqZjrF5gFNkqaT4FdtDikkRtsRXZLCpDrxScaCPvcXLfyNKpEhfE8ittNzU6fyBe",
  "key24": "vUL8UGKPGRrcj9bVKTW8iakXusmgLCp1piL1gnsVh2ebPi9Fbvvtm5ez7yaiN8naNumQZx81551YfcrHFxVz8FP",
  "key25": "4EEc4gTt2fhferRWz3sQBwArw1XSbuxuYWfNQgsff9sLNaPBvc6aR8MCKQm2FsGYZmAhsZK3jJ8tVLcp3ezGqaV3"
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
