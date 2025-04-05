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
    "2RCinyGNz8WwnYrCrBiBKkeKnaZgUYosjXcqA7uSNmVoEpHTCydc1aDJk9SQuC7tjDWvDe9Ku6LtotQCe5EJi69j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A1xNdDYafxndqTVbM99KtU1MUZYzz7VqpNoWyDiU8h1Jqj4iB1KgGkS2nvFKLKEjdefwjmn6AYJoBhtWUj91KJV",
  "key1": "47Y7tnuxi5dxxLeL545bQkAgDqcnHnZsg62rsHb6cDn9CJzMCdXo2dFuSV6s4xAxpvYJ1rFkQ4n8qNDRMqhoDTGq",
  "key2": "4XpoLKs6MfkUGMKP1T5Rz9Mifug1gYGeedWFHqqndi5cMSjeBixmrGhFrnvPkjvRvABEgbeWsF7QFiUwmJ8ge7XZ",
  "key3": "4Wd7y1D7Q1d8PxNhi447oLBrearRLXmj481ncP11RG8jpsgV2Qr2w3Lt1zmsqD5sXFeQMsuMqvQ2Hzr2mpzPntsQ",
  "key4": "rXeYWsPavytpGJAwwC8ZdtYmNWn8cFZJdRdEVJoQSYiYKkp6rDYZ2fS4QuQn2i2YvLPgPjE6KwBpqgyvDzAurZK",
  "key5": "4Nqg7RQh2dPtREdKTzrY4a8XsD68hGj1ATNVpBdwmDZ7wb8RDhqFKWAAcUpyC5ybTqw6C84NJ8FBMB1MxVVELAoJ",
  "key6": "2hrZFHR7BPCbsCcBAcdPgFbZxRdXEZmxFWiu4PjKQ6NhxHHHNYNrzXHoL3MMU9jj5ALE4QFPShKh7wWZzrjQ7BeX",
  "key7": "52xbhmENgevcpVPKZcq9n9TGMSVY7qc9EDxU1nXVPTpPUdibitCqFwKrL4YaiVDDX4jNGc6qjkQxf537DLAvRJCv",
  "key8": "4qppGJkmm8aGWfCEwTreUb7qqmQcJ14UtvzqFEgDqQiFPUF8ziq1RpJ2AQvoefWRVsYs9XuFFyKaLzSEDK7Z7tdD",
  "key9": "5K6UWC2XfPtb57htwx6sXZxZEVid4BMxgshbggJHT1dDe9xz7A29ggbEcYssZnr5sTvdJvyHUTv3BxsGKJxBCh17",
  "key10": "3bSDwSNDh5oGxsbLsBwxN3JEV76AcP9r5t6Px3ibqeoCH2ffWdbmYdLfgznF31wrb3oRSre8QzgfJ2AbX7RKYo6Z",
  "key11": "43t9517e3v16d1i6DMAeSuLu7N57sgCTQmEVEH9mBDxBnL4DNFMpPUQMYcbCy1E5FUyMnSzXko4YQziWNZb9KSYs",
  "key12": "5xiVyeBjSECPsGU7T3QLsaCzyDKky2MLvP2BkitzFHi7dHVbv7aYiMTnai66cBbhUt7YJa1UyLkiqDn7gpptWQD5",
  "key13": "5YrDBaaPQ9JMwQjtj9XgNMdqRVxKWiRWUGufSd4b36SVeTPp9gicoq8EWodXtvkED1xTaNXw6pg2fwZEsZr7oGdC",
  "key14": "3QDVH3yThLHq93daJBSwhk8frdEeoLidDu3j4LpHSWJLdTBHDNQUdmeZ4ZVW2K5hJSsqPupfEM7vMxJRxeS1LjNP",
  "key15": "2RYS5u4pTMyGxr7ER8bTcwAhJ35EtzMnZmooQ3coA3h1TqVQ4asoaARWhApxdL9qDQRbQpo6qwPx3fWQD4oLY9KK",
  "key16": "4yRx529WJg1q2Qw5CMCjHVEmHyJQ28uUG5jiHmscgFvauaCNMKGBPUwqVuUwBBxHiToVg9majiGngzWBXnHGbwfb",
  "key17": "5a7NbPntB4627KevBP2e8yMxF8CR7WNBSeuhKLLbV4LuR6Lq5wcEiVjNmsbdhETKpRaGtWEWgYj499oAWdXTNb7J",
  "key18": "39DMqW44a4vpLmadSNVonrMt3ZapGmd4DUcVSt5NHaCQL5KT9vB9J28oK6UKYU3MTnN4z1MQp3aFRbkyMwVxFtbr",
  "key19": "31J85XCJKm3vVj3SSfJBjXdx2xbBWUQdxWKLWiET3XjzaxpX7rzejewqTm2U7Lt3EhwMdYDwzfe8GW5xaW2jdkGy",
  "key20": "2Bk9myKkMoC8SFbge7i1fkEApUsgccv19WdqCqSwGUFjrjaKFb5vG92bQoi3BzUh85YpUrsxsm3ThUTPVVR12EZE",
  "key21": "2EUK1mvsxBepQWMXZRu9T2Ufhdq7yDzEmm1DqFxbweaYRwqTP7jw2mB4C3UVgu9wVCqQFSTtqGYtTER7FRSUtxRU",
  "key22": "2sTzGFp4U7Q2XNdcEWQR7R459WXKX3yaCPtEnxje1NSjpHmLcFuPubYCCLc3mfVmfY7KUjQLJk6ea7aTX9MSaRV6",
  "key23": "2Wrk5HDXnSGBSYBJBkJZaXJ4XBeG5tktZoMuA3q154sYs9HHuVTGo6Qz4Fc9T1wvqhznfec2E8MPNAJGuSTCCWo1",
  "key24": "2eHHtsjpBuJXQedmNmfVnQeZnYrNGyZZPNsz5Pkw7kEX3NXtwdxRZt4uAMqBVwDBLwFSsSGdwE9kszr4VNAWsZ3j",
  "key25": "4FeM4smPPpTWDAJw2AfcUfvcSzSv2dBKnmmLzDCbRpC9D9M3onctb3Qa9LRZDWRiCiFoc8GGYRUabuaC26sTQDTZ",
  "key26": "oAiXnxQLmHXHugL1Hd73JNbZqfHgWiM37RgXnHwrpud5SvLWc3nzYPt1XzZwApSCgLP6K7KXLQ63TCz249hWpPJ",
  "key27": "396gpBwzZSgcKXyNhG5GnPADDzDFW5YZ1zmHH6DqTiY4YSQfYSp7Ep5pZz2C5GtbpShy6NN5EYCFMkspyaUStZpC",
  "key28": "5wqF2q4jXg7CUnLtXmoXvWGyjWQMoiowTtjRvRJupUygo2D8xNvwQ7c6tcukhqzMXDq38JUy1N3REodbFM1pCsVk",
  "key29": "3HoKdie54imNVQ88c4AouNP6KyaabEPyo7hftYxnmUUcm22mLm1yrYHHKE7R7y4oh177h45exN6ppZKEJ4ju9rTb",
  "key30": "o1NPQRPAceE3nVKdMbd872cYsNs7wdqzomDYL1xNiWw5G8A6UqMsRUSRc1GHboAgWJPSSUNUufftk2C1ghEjuRx",
  "key31": "66k56dEUFktuF98P3n1aMWN6ZxBSpC4MWqxQ43AMWaVsJS8rmXjzNk5LYnzGLzLUqMyo4YkzrSmnZ4Btuqm3Dc5s",
  "key32": "3tT8XfWTcBtTPgNQeJk45At4fFZDKN7uv9nTXAFgcUEpphANvhVBxDR3qUE7KfWBWN3aHrx6u6aqW2j5gYDE9key",
  "key33": "2BXCaMMVBvppYz6RHYzrjU5eTJu3KvctDZB8QtF2dEkYFX7rDMGhKbpQPFYHr7ouFyRSARGjhCUWfEvb4ZEJ1Wts",
  "key34": "4jpJN1rixMTg4rpP9w3PkLg5f8mjxxeSRdC6Wzo3X2Um7T9VsBkLvM4gWK7Xa1U9qvoqBvdYsupGgAAXwLdABvpE",
  "key35": "FM1knGeCwq9MNEHW47jrt2tmcEfiNtg5rbHXNYxKvsmihHqeMCHuMFnJwbB7RFNdKn3xXoHpSnUYZHZR26Qs1jz",
  "key36": "29NV89dmhWWHQky7obKnJeGSCGHmSNAnchmvFSZMfiEeG6m2JxdEruYw4gsCysBN4huRei3n624qh3ikp1bu95uc",
  "key37": "438eRgWTK6zL5w5cEgyhsvvUPBeNoJdhi1bCMcNXvm67D42QSGmxZnJcTVJb3wpcBT3VE5d6m1zzmnPx72mxaR2Q",
  "key38": "5LhJ4ZHrxFtY4QoFfyjgsehT1JsgmhYVxjCCSe9wFXGKiijc3ohZyvYqMP24nG58MaSD5cbrVGMEvJg6UciNtmb",
  "key39": "4LaVsVRbJK4SwhAhEx5WR9KxZhhD9r2v2rKVnXtVDcqaorjWCxNrsjTzCr35A5Kcx1eCouY4EfKtPRFawStggx2x",
  "key40": "53qXsdDCe2B9phZLDHk5hvaJbd2fWkeTVVkdZLmy1HFGayWoioeTGqKYcSuQ81QQyJYZFEaLHvXYgoHvdzP127FW"
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
