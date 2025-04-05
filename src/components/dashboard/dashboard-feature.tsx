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
    "247mjUv3ewv5p7tFBXbfjp1mBNK7JSXNiX4vZiQJcLhT4kL1BZUwkKACV7Q95x6YoWTAZQT1uzqqxwrynXykZNeR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "onysCAFc4isfz8xikrFJP6hYfjiDnxjGLhYskfBk2Nvaax77jTSzXaFeUA83pH54h4nSU6LgvvEi4caXdwu4sCU",
  "key1": "2VzyzQCiLpYkko5KoBxjnu9qHZYGHdZRyn8iEka4WTmsGPcZTu5uNznMWefUswevuWq77hhJ128mUjHG7sPHV5Hw",
  "key2": "VNqnnrY22cpUTwei1vppLhtoWmVvkJ3wTbexPRyhi3jNAeaj4XhXyU3F3ogLEVrTZvbpR6P5CDLGFrBoUHnfUMA",
  "key3": "314GKQxeBgGypsY9Hstf2wEkFuHRhU3sx2yeqXEsCDfZRdFYLDcJq7ggvE1s7t7K8E25owZCAnjGXcKXpbnFMXTd",
  "key4": "PFXPDCuCwbbWPS6k9JTDXrKvumXggZFxnq3CWQzVzNeLP1pfLeYGQDdMkxPsyj3nBJLnFyFDqm28zTzMaCfyMyu",
  "key5": "2Tgc5ZE9rJ5KicN1t8DtrqwDY2ra5Ef15D4ANdTUM6D4Sk4MvpVtrphYLnkGZ8djLxJMJVbmeVpaS1uvd914A1FN",
  "key6": "4xH7yzz5G42kehzSw9rurS9sZCKvWuqvSXvctAQENFQnSGjmnRaWU9eLxSQZYwjsdqi9H6MEfVy1g4VZ93VfJHRa",
  "key7": "5ohA61rUQuYf31AVBCeQNDgyCZ3qhjGGaQC8W33vRhoK6T2C3D225bmDJDeha41BEiUiJRU7Sr2fBC7sdHFhC4ko",
  "key8": "3QykbryomFTXsNCKtc81kFrKPjVvB1Dz86mVgYKokXSgKSjfN1aa4hdUc7nB9BJ11aouqBHagoMUhmus8PswYZBd",
  "key9": "caCfHht9UeA55kNewYrYsasz38txZusC9rRHPPiSmaWdyDjPB1NuctUAGg8S5ch4XKREQpjtGoSvVj1ZvJSxgVu",
  "key10": "48DH8uENpPcj7WCdnDvy8rYvJDxpW12HEp6NYsDK9wPHtfSsgB1J8anZk9spovXPFmoUcFU6vAkzDLkgRAEHy6B8",
  "key11": "37mYAe75HGVEbt2u2baXVJgCS4zkUDN8TKohCZ5Sfvo14p4KVVe6MErb6bWBepSCnVQ3WTobJVBpMhCz6qkJRi4U",
  "key12": "23eLDw41RhxkVgAXMdu2BPTEdKs6xtRj8tL6XhW6nRkc55BE6KhD5f2f3wZNVYJrTw34KZDZfCYxe9CABTuEtkzt",
  "key13": "2njs7j2bWGpQbQvfy2cyBr13A5GRfi9yy1FJYtckBF3sm3wtFpxck8oBTsy1kGgcAo99vBtZd3JgqzYkofKF7w8e",
  "key14": "2mF5m7hSuRRrwhwafbMSsHMuvKXftkijGKFoGJdrB35ag5W3Fi8iFdZCL1FtrjguePb97DAtSt9ZV9JB46dNwpCk",
  "key15": "3BZutGo8a8qwGQZ59H3spvMNnp1pbwkC8CFYsS18M5LCyzPwUTHXvxjUspC3Hqs1GstLtpHTTdsgA14Yw7MvbYFi",
  "key16": "4XGgqHJsomfxUfVvgi6LtDjgzscN2i1czvT2horYdGVtCZWULoycbkXSPGmg1x1z3BJ1DGEQVbF5xK2tSjZeHJa",
  "key17": "2duHJm22C3vLEev3Wm28pNWwDYTHHg8rS97HpBfJCESzKH1LeVoqu1oLakebxtH2MUhjKp4gAZQBQYt3y2M5m8ga",
  "key18": "3vHfZ4ZrYypFJJqzCzUwzM1Sgww99UZKH5TSYzcxGbbH7kZspHNM3vxNTTs3xW2BQgzCVWpxPU9yCPc9Sw6q97iS",
  "key19": "Yw93Qgv6tgHysGquwf922fBKcESYk3nsPihn2zSiXTRCQDbZEcZGKGepAEXFGwwhWHS7REqMisESWUZHYKhYyNE",
  "key20": "5Wr2WJFqyyXEip2yWCHqeDKAozTUvAzNz3iVtMyAoqfFipdCqSk9pR15fa6vVW5aiGQVvXcQStCH7QFsWT3N2CnH",
  "key21": "5W6V1FwizocgiAaW7vWDNL64AfKyuVeYAJ2N9RQy11hFXa6HtVV9wBGZo3w6P4ZWhwN1atFx8Yy7GkAaTWfe3Vxe",
  "key22": "3eLCGN96p4awv2d6iGSKMQ5S8q7HELXapaNkquJgGX9i57QHAamRCNmeFbrANPpNHfFMw7uovnpj8tXqjKTKjt3v",
  "key23": "2iZjCQy7CnA8LnJ6qCyAgaJsnuJjbwuw4SnoQxM5E7PwRRqwUmsxxkRiwPG4yVE3CYBSwM6ncDm9zbsE6sSg8Wy5",
  "key24": "5h6LENNbCz8Fd9TBZqw5zxgi5gfagaQiDJykL3zoJXYPx16HbPoUnEkFy3XKHQLB3Tu7wmvWFy7bAgd35vjErcqP",
  "key25": "4Q4JhWv2WD4imbgxVdHSvwQLSte4ygo4WnGvTDqRUEnynb9AFsvKBqYzPxdTics943hqkVrg6KS68wBJhfmQT2QX",
  "key26": "2LrR1TfrKZubGYXJA8PVhPBkGiB9VM1ZeekTp3bcENTu4zRwgCs6EUHmbnnBu76YiYnEBrYiy5sXaNRnouYFqQYt",
  "key27": "3SzdGfqTC2LXxPVqruh7YhvZoWqyPrxNCmgLH4AWhvPguaLzbTN2ZwtsMJmUgXRYgsKQwye675sNJZJMLYr2UbYR",
  "key28": "4CvaqpqKh1z5J56wFdgMmimZ3PUKCRAWGXXcqTC1RAZFd7H5TU9wX4D9UtkHq3LWY58szv4cWdB6TgcebzwkmPhZ",
  "key29": "4BttHfU1QeQUFDy9j2JZTXEiP9StWwoxStsfvGBVURD4JU2X7yCCnhTnGZyngxcVAhM1ynbbd9mm9xJp93miiri4",
  "key30": "5apFwjG7u5vvhzeP9en3z2FSZW6SEx56pEuCTjmtjN4zSdVMSBGxGyU5Wio7wB8fJDKtTofRUHaHrHBgrfD3NSKJ",
  "key31": "5hQjqR6wVgWn7BWdzgcdgDx5HaXFWEXu1ire5bLbXoytTrzCNgLyLBid51UqgthmZNNfPr1VQ7mLKoPURYye5d3J"
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
