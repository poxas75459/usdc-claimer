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
    "4VDvBGwJ2R6Y5dKPB8DgfRNGqvynifNR4TXnjCApuUYmAnwysanDU2BKSzaNrWy7dNNb6XhdAE7i6xLE8hMEE8rd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "334j65hK7ETCsQPR4dd8PL2JnWK1XhAao6k8qDBj3JS9ghU8nA5X5RQuu6xa9mZ3bdh6AqK25JXi9KFFeURyLAbe",
  "key1": "3xYePxqxpXZWibw5PwqsGaMAfTZtuJ1XgC6fS5MJSgaD53CtasUaHQbzvF4ooMbBKvYt4RikhsFqkqYbJkoN4NmW",
  "key2": "4yxa4DdaTVGfiGyfWrSMyypqLJtuDGmc1MiQgSwdB3f4ANo2ouWmBjHEnno7HtXYLTnh2H5RpofrgfPTvy84bjiF",
  "key3": "4fzqfvzq74RkizsEwh9aSucx6Q9pT6SzB1pCp35wUwcKGGYswj38JCPfqpvgS6zdJ7DeMNTyq2rtXb8ab8778rku",
  "key4": "44tKVdpD4jhYAsnPCH9TYpiRFv5LzfHp45aa8yPdskfCwZvrQZxYmwjfjX3ncMoqqfX2UdHMA4vzwwbR1Jtaj8dA",
  "key5": "3ZNQK8CDGTL6gk1gwHno7XUaHs7yXY2ZVu3DMt9Y3XEtn43y1fbbnyAn5KH7vVgHkmzaSoGym6YFCrCrHrCaKwC7",
  "key6": "4KQF43PcT1TW33ju5Knssb7gjHSK72iGNyfibLcecXw4oqU6WzVT7uQZscrX1mFrdRgfRSwkq2EoCbZoZco87PmB",
  "key7": "5fK2Dek8qQDXJ4Z5eutnNxgaQ1xRxWVTXNLY1wsrqG6Gd2Fgu1266SDD7T7WNfxu4jX4Be6a67FNuJ4bkuQxQ8w1",
  "key8": "dF69U5ACcYDktftmRiHpQHELStWDgJgBq2FcraUSyEPPu2p55YAH29tPwXFChpRPM7KuRwu9N8xmDD6C4m2gQtG",
  "key9": "3AXsuQGWvcu4VpVTqBNZ3WorSXjUxZfEL84rpZ78Mb6YYSrB1GEJa57FAUB6P4xcEn9BANmeEfzr5sP9GsYFBDms",
  "key10": "bTQseiLxtAcdjMaAH29GUzN6TJ31u4Ar2EniV9nbtfQq3jFB31cYUYfpovRbJMZ1pXWk7L2dvPVSHW8RxiDuu4B",
  "key11": "3mFDEUA8zaHqoRU4dUsg4GWtAScG3eJR1aafj7AEb9PutCp8L9qabJywhR4NRzAg7TugnCGATi4TLYgbMFutgSTK",
  "key12": "4Y23nhFzYeXUvkUX11Zu11Zs3EkMLzSaPA6vAPicBGJDCubBDMHY5oS9ZXjQjjB6amRZErwWjVZZK4bNUJPx65nj",
  "key13": "3WC87Uyei8VbHnbwXwkgevJGEaPFJATFzJaGjei6cZDyB6rDMoZm8wfHrDivgrKgkfN9QoZGZiCFTkXe71zU2D5J",
  "key14": "3eJ7jGAhS1GAcTXVQnGyBEUkSB65nGoEjW4WpRqx7Xaf8dwNR5cZYDev2qZk4BKxhkRCXtEtexvXeCRkHPPFikne",
  "key15": "3aBVw2tLvBf9wxtp7NEYhkCyngMiv4Z6zMHNN1Wj7RF6To3MSdcPH9Yuc46HzpqsXxYouraxVY4K1TQhPWbHVbZ7",
  "key16": "uVypToT8DrAo8ehGjLTbwykoecE2zGrhojqvjPGATn5Hjm2nvZfP31wEtyurWoaSad7JTjMF2Z5MYitikqEacKg",
  "key17": "4e5egj2F5b57wfMu7f8Bgg6nFH5cDNGPdFpbUBQVmYKBAVHvALvUBhfSpGw7VzEf23vWZrsRYaafRgUyyHxnsmPm",
  "key18": "2aw8MCAo2EmtexmhmGdg7YKFtQPswLWL4UqCVPomgtyPHYagC5NBPz47L4DBdqtKb3GJTEGcbmwTnnJcbddTtJKX",
  "key19": "5e6fFajNAsMnhBnqv28jP5ux6ZHZ36vsoAkkHTwbwqHgQArAWCvLXGZSMsqxPaae464yvk9h8vyiMAfEzYYfKiuS",
  "key20": "4TuUH9WjfgFbD4ozJ1FkYyYuEz8tAMdCxzSUQWHxLjmcmTkHVpNp2JLnybhE1fTqAfbzZwW9xtbeNogcnEP9oSTP",
  "key21": "2KEVesxXA5GBKWJiknZzrFHheLdqAM3crzxfrqdJtaoi6se4Cfr3QsYE9Cpn2PNZssN9c5RZkC87PGHXLjMQJBRy",
  "key22": "4YpBFbvemjoocMkip8PnFw65fqnFt83iQ836zBSZ1VuwHmtbzXj6jASTnRhTBR3Arxgmn428MULmmQFRdSW7f8Ps",
  "key23": "4AaTuXuzFJW49KpzTkv3UkkWWPMnpqGxeqQEEoj3obJYJ3k8hYQ1k4cab97bbupsYnq8up7EG1Ymp55bgK15NguT",
  "key24": "5ULvGe3XTesrEg1F2HZPDP5FLVPrhn4dwX9TSJ9XBGt1Jv7gEAbtzbv3UMk1Q3MDYYoDxTWYNvHTVZ1jwGWsYZuR",
  "key25": "8k8i8E1tmn16nHnxdVYu6GydLbZbaVSEPmNv5ARQLpHmEsBRMz8Mrqoom664dJWwjNHgvBtvjfCx91ZAmc6RZAJ",
  "key26": "3ayBU5qkei6KeQ14vzpZogHRxsU7mpmE6gQNgGTmWJBAN7seQ7wcaQgPihZ4z4obLA7neTH8wyAviEfM4JoudLmW",
  "key27": "4B4M2NgXDHhD2BUAK2r11M8X3EofGimfvUPmKbAjnUugwAzuq2HNSvzXWYPFy1Qu4nxz7RBmzxa1kBNATwuKe1Qq",
  "key28": "3gZ2MzVTdMBnmG64iEunBtrULT2qSefAeH3jrhzsrUkVRcQVApo6CpFhNsFGGBDvJHh2Qg76jRzGVATbouMCEto3"
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
