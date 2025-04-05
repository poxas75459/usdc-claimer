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
    "4FYT7wjSN31wE6w6P4SnuXbd2tV6nxJQd6bouGg2bDwE1JZCUNkBSjC32491zi96X7BUdogBuDTWYnsz3KXK5MEb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qfg9aQE315Ya4aVDfq72AzTEuwE2t3JXc2hzTTdLtCBjgHdPj6DAQ35AabNwrjSZ2vZm8ahp1ULhogSPui2iU9D",
  "key1": "3D7Ke9Ktf8NAWMbT2qaHwcHDps3PZjVazKnyXd92hpqwYniaSAzcHE2ybSeVWeoLwKumFsfa3scoGtft4h5rZbyB",
  "key2": "5NGQe2XH6d58M2e1YXMY974Mp5ztGaUQL1optcRkd4BEZA3xSpXx9SVjU3fk3mRFD854p3SSUop4RLTtntgQNpZU",
  "key3": "3yy13188ospsR74dqA1dCM7g6mgF229RoB66Y763yKxxSR4oD1fiqKuuqrFJnHGjyqg8TFBXKDdPtpo11XTEswwa",
  "key4": "2WszNUy7NVXyw34X2VQnJEcGr6MujvoVZPzfmqdLzjDZww59QGvw1uAymE2Xwr5d545FYu9ytJqtEbRkYxKpWtrQ",
  "key5": "aafDbbBzKXWKDhAu9pPcYGR8AJYouKa6UKyqxqRyspYqeDC48ZUwfvaKbaHDRmVWNWSN5C9fsKDtVvqyjwCTzkm",
  "key6": "3JpQbZNcx155uLWga1navzjoxqpw1LF8NpSMyjU62CGxb88zmvWx8yYbBLc836FQWrvRvZrcCpPLC7AHknyA4WcU",
  "key7": "YzYB8WNWXWsRqS3FEmgFQfrFFCr3K5u9NVxKaGC7ZYXQZ9tDU3kz3RD7y3kYcXCpuvjnpMubxnpB8AETSf4vyob",
  "key8": "58qd5d26JpKDdySdUm4n55nWuZ8gqH3Pzs9cBvCYGWz4w3zMPKScHhdGPaTTEWiAZcXGaMPSWuMx5e1xeJ8tHytP",
  "key9": "4VDsbGeMxqiSoVcnLgJ1r8THu3dasC7J16aH3M9gF5GNNDaypMuHgUHtwPBhMEFdUAbXatuFndPYm3brvzEkGwGm",
  "key10": "54VDXLWRr7GHDYGMaQvSbDsKhu8nrEThH9jW6KgzcHiWayKLDxLfWKmTECkPe9WqWPy5nkHAe6yTR18UtJLGmGv2",
  "key11": "5LHmEUhxf8UdTJeHoBgVv6fVGZNmVSSdZ4aq1UFAREcqXXUBEZHJw3VAujkEonZ1bFaWjPkwfQJhgcRb8e9217NQ",
  "key12": "38kZWfDnxGHW3iUHpULBLH5c1Sy2v3cqZYqUieFmwhePmzayS84ZXgy8PpHYeqrbWVXQeUWeB18EnsvWYhATDwGF",
  "key13": "vc22s6U5gaUr6dqHQvyE3KS786SMM8VaxNSyZpZoN9wvE5gwyYXjg1DFhVhqrno7Ccpfhmm9HWRzo9E4Jss2HXg",
  "key14": "YZiRfQkMynqoYrdtjBCVgAJcznMkYbr1eJDcQEqQ5SXRtrUjhSNbZdoXxtZr7tV6sED2Dd15inzCpXouWQ6n6bA",
  "key15": "5kambGhcajJDT7g1HEX6Fg7jGK5GZL2vjxUdSdX9haXCfMcCo84kuxs2BqmxXpDTcEdhuVqXY3GBbGXuPkyVrfAn",
  "key16": "p9rzdSVCQ6pP996ejmTmGFXcVzGydxXocsmzqzqfbMPgaLvcdoDTss61E17v9vAMcExB9LjXmdFK62BBJCYuhYG",
  "key17": "5SjBftEeUWfpdsXBkSm6ByhD1dRFXC92aPyiAYceAYtq7no2oLYLq64UP1GGVoTjAMe6tVyFvrfBSzaCNozSXpcP",
  "key18": "2sYfQ8qk6z4gMaZvzAhidQrdshiDPbMxFHAyTvXH2oN7ksrdsePVCyKHVNazRTBrFbdN433NAQ5Fwoo8h5rqG44x",
  "key19": "2n6xPBmsuT9ckLhLpEE6FZmdTM6rSURxjuFJ6rhBLQUqBdhUNmEmyvS9FNC8UJB3wbU85wLyqsYTwsYV4ybyEEFP",
  "key20": "28HWVZCPVhwXMS3D7gTu5TB7qzF9AQQN7cVwgFR2oWSd8hfUSUcMaBYpE73E3e3YejdHP9b35vE4mUfDJVdqNcqu",
  "key21": "9GM23Wh3Dv3iE3wwdx7cbx9nYM8quzAcevmizLVZjqiEjhwDJjY1piMuqm8kkdkYXR3f9NGHKBqebvR4vLJnPVB",
  "key22": "6493vhbcpzEWLNw1bEe4XWqbMazm6VAeq6YEffe2pQR6CZyGPDmVci9n3XrHgsXCVNQEw8pvr2snXtUQEm3RDaSa",
  "key23": "5JYff8F71hNZ9GgpPSoKTXzD8qVNimFBV1vDjETZnpTpcaCtKZvMEtTRp9E2wB5fHWjZxSgzeLhpqmkiTVWHTVXH",
  "key24": "4TqVQ76BwksYgLJRz4yA9surtNo1bVzNPYEdoKzoLSJvjUWbdLkS8T2L7bro7uLLXyQc3uyWqkPjxEbua2up44Yd",
  "key25": "2iHJRYtUZQNFDbnmLoUHpstjfJXqvRbFaSZkBxrFzTzPGQumzBFPbEABYFewWyHK46yhQsFhFYyuVpbvBamKgxyQ",
  "key26": "5teqGeMCiYW7LXXVcFDZHaEDiiu1uRr5FNv7qYb4rzFnEnn6UT2HJFBgybHF2kWRD4ZPGUDi4txs42Y4S13rn3Dm",
  "key27": "5r959YagPhLMzSiy8MMBZbmyyFMFUPqKN5s9VEP8vkfPp45Z4pfkUKCdaguwXZ1RKEeJ1YYwKhQRUeoKCvv2PQCT",
  "key28": "4pYCi9JXUrKLh96VecuH13mLdA4nyLuv7rsu2KsmY6BCV41fVvH1VWZtdwdgCzLQSUDxU8E76KnP2n5og9devsgk",
  "key29": "2B8AHPddUNR814MQiFTLWiruv7TEEWnwfvRhkw3NVBUb61LX5FHtLESLa4rM33HjK5QGyfH1Y1Pr7MwqJwHtumpd",
  "key30": "4MQBayZkcJ5HR6uNcxMbKCw8WqMftLydFREN2u2jkufee1vKFtUEahNk49QKLyWJc567fDRNrCU3rHy6N9KsdDCk"
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
