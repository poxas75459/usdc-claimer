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
    "5UdsEZNUxUHMbyhbR2mWRAjyxampBX7gX1rrAmRcuen9TDbyyUQBE6xnMBrUXGzay81dgUimSYbYsYH7GxkDEmt8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KTVtjtDa9is1F5VEMJG7JcUQ2ReiLX8xEAL5jzVZoKkST5YJoifkmUXCSU2m8HF5kEek8JdM2ytLt5Wx2X8xV1y",
  "key1": "3yXghgmtrQK6VK6nSVGCkRXaXg6E3qWhqkLvWMSjn95VQ6DG2NBtWsrqLhA9YhaUHN1Ff7N3RSxzWTkAZtfobduA",
  "key2": "3n2kCbrMsLga9YZ3QesRUdVxXRLbnc3HX27nqdhwuZMghwztZ34A2aEiPx9ysDzV7SQobV2rf8YWYDRnDYu8wLKX",
  "key3": "2n9sMD2pZms7cVVKaR7ExeZnXej79sUE1iDUDobYcCBuTYCuwJBy7uJyzdGs118Zd6ZSRWqbuoga6pgLpRfUoyKq",
  "key4": "4Gj4VEirqr5AN5Tiz3SCSa94xXthkAD89USggT2DgNcowmxrCGA1WSZJeSGDTHzZqoVC75uyxjT5GN7cPNDCc7Gh",
  "key5": "LSh8R8qAE5jzjYtH3RPWkwPoK96kEF5ieVdj9AajKeezpStWchxxuBZdx3DPB83Foh3xEiE25wCz8FgLH2H7JBx",
  "key6": "4EkYj966ZzHWwbmKtrB9zfPSzQ1AhqmiR8YgwybEP6TVuJByhzFTpjc6oyBQUkr2kcVdJkowPYuZZkfW7vn8wJfD",
  "key7": "2tCyC9i3b686ReuB9FQP5c6mdjCbzQWjGGGXCWc5PrJW2pv3SFgqxFpcsyEQLq5fgCe7SWGaeBHwr1DTQGHGh7oA",
  "key8": "3iuZXkgjy5PiUQUhGBgVxpoFSu28VbSDvP6D4kWbTfxVnxjCMM1n2ger98Sz7AK8ow89A1fJC9xa2ktswykLqV3d",
  "key9": "39XzvYjnrxP9ropQGCU4eam9HLVgLyrMZEeEBYjZNfzffKxfvizSdePuVMyZpndTwwCTpS4pSUEfp1JUXr6JjSCr",
  "key10": "hGqfZ8TR4yMeWy6321kC9fk2XXTuMRTk5QXMbChPtVWE4fDZFqxhVf41VaWruyTVxx3Arq7uQSPavDsdE99fwVa",
  "key11": "Fd2yPaGWYBZrKHxFZUdDhUiAS6yyi4Xk8RWhPoGzAszkhHFRawNk7bM2QmxAZZFwdZu9cp8ZTjpmSm5SnJpSjAP",
  "key12": "2meeduTLBnN3WEJFkhZ1mbfDUs3bvDmmyo4Yy1a9hbCWJouWM1SsjuYADSBXP1igoGW86aj41iv3RGMUpKjf28KP",
  "key13": "56p347Bym8MynE6BRK4kaJFfp2emU7zU37zs1dEBm4XD8zhLizSKNVn36FayBDV86dXFSLecaNWgfEbcw9HymupH",
  "key14": "2qbT2MCQKCa1VhsypprRLQ8xGXFC6fZRqKvpEhTjE8EymMF4Wads3fRrkWguV8dsEBRU3Z4KvRA9aWF8MHT1JefQ",
  "key15": "4VpwSjbPnvArb3f9Tp5Lvmc2mGFsQNCDL2vkKHP3G7dWh7zZ6cABZaPnDMNouKDVCuBKrMx6uDVXLQYuGqSwgPBQ",
  "key16": "5hthBtiTFSfjR1cbpD5e3Ayt6mkqqhEvnqXxAbJ6TeVgCQiKCTCzbtUT2hjHst2iGHcB1ikFFrm1uqaYjxQDCHCb",
  "key17": "22KeabAzFFga4exHD1Mh94KjKn9PNiXBAWuk7NDAm2FM2p6dS2fV9HJM2H8JXEoBaafufWZrMEnXeabP23QwtyJi",
  "key18": "5hMAfvLRTAjAzme4QiCo1fjryFeBSYw82LyYxknsmB9sMqtSUvti7R5t24Sa6VwD1mUS9bAUxHsmC3Mvc7ha6PMN",
  "key19": "5buYxJaPicTy6MHkFoyeKGTNFZWdG5d11TZH2RKJVDs7MJ3v7jzmPLdLN9FVJPQ9JpsBnq4qGXatqBeehzF3A9Sc",
  "key20": "3RYex1N4YbH3MTeMehJhCxz8hvAvQigKvD9i6d4SNDfZmnWiJatL3vTVDGuf5FPxFUPnu18m9METQiFMWpyWnZSn",
  "key21": "57SRzvSyTySNwqcm6wmfkhRUeH6N73fKG7E7gFddh8RAdgDNbwAmqXvxqUvpWzVdVYVvbARWXPDmtQUcwa52wSdP",
  "key22": "41sDyys8ns8sAQ27cGCUzraqLP9rQMyzHVrUpjxEhSLSpDmWv1EAcDxgbnhKuGkSTRu8MV7fAtJBUfFsAqYvzjku",
  "key23": "SdL77dKza4BsZfGE2oJnfrHfAvXjYpKz5yVbDncRtchoyA8JKTm3ENijqHHJhgGKKtC8zKoCZDy7tSxc2RrPuLV",
  "key24": "2SYKfUe9yftysWFAQLAzqfJxrAQyg3wAXB3mvadUPVNHuG6ajV2uKL3WgzHbHSnN47Di7pQtRYrYEDxejEG4HxQy",
  "key25": "5owVAEgVN91uoomu3XiTfiHofEQtCaE8yCyZG2ZjgdBWZJdm4qZtHovtS41bt9Efq27mZ3YKK3E3PQtfrkvrKbtn",
  "key26": "52PKTYNEY7U38wfgGtpcWbNwxUje2HzExv3fZLj5Gf64QWYNWyxENvhDgFzXxaAft1ZeQMWMtvqWVCie2Q5AQ1sf",
  "key27": "5NKjrAFUb3P8rijHJLHdXDBpU9jRP8B3KiW56QLKComH3QYWLhCVDtbaf9RsvPkTXG7AWXDU4Nna9YJfhyYJM9GW",
  "key28": "3T9Leu7HzDGcktY4qQhKWR9UCuVwu21J2zVaMDL5zLQDkunwHKhHMcjYAkmhdhN3h5FK1MCvdVRDWNm3JRBexqfD",
  "key29": "4Ypwj6WX6yXgQZWb1nKonQDcvrPaRFuMCyc7QSvd4EbcApE5UKLdexMuxu6WoZP11LmYyEtXDHMVCWebNEgU1EA2",
  "key30": "2bYNK7VRrpmXSAqZ81dizsJr9dFsgxFVp2PN4B65HetRFLem4ETeNHjjNmqwFkZPd8cMGPruN4j3Fowbjhgb3aHr",
  "key31": "5UqRWHFVCrNWytag65F9C28yRBCephjGgzALMu5Y2ikRJyuWQv5wZRUZefkLtm7APurB5nEtQo9bN15Qnpza6rJk",
  "key32": "5uKUYFmdXc6AfAZYpkf5jQ5BMYy1R9qJ9H7TXvg3x6TxskLaYFxwv5m9WCiYoFkVoyVcac9RCqAKwCQcJ67XLNBZ",
  "key33": "Skn8fYqMrDGP2rb187XzW2PQD1AHW2f8awfV61ZW5enX3tsU6wBss2o4DRJNDuBKtumHtZtLYgTzMV22NDWj2Vk",
  "key34": "55mWTzmfXmpr8c3PEkwnXRS687KxibuGZvqdBqeRKwYohFMAzsbbJT7ZxtbiZn7GTgDQeBawmNdCTjNMcseRai9a",
  "key35": "4D7awKQtozVBY4FQh8NDWsAmK1t8osNA6F6sGYGfc4KqyWsAgLT4yWbP3XRw5QF2vA2pp9dcvh6d7J6dMGNEDmgP",
  "key36": "5ak6cQG38anJhqgvaURvFd1iE82YFHdDKXCMznPfVHFXFrYQgDqJsnQrY2nqdy4xWXy6bo4w8YNBH8eDMzBbm7fT"
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
