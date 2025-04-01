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
    "3v5c1aCCxfTm15bt4RyHKhmKXigWg2pjhdQBBLYZu74npYeEqzw8MhAPmAby5Mwk55vpo3QyeCzePy8qZziKxbGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25uAFSAWmeBLw7eGvUHozXT93mQZYNw5xM2yi3kZd92KK6xCZb3dMyG689CgK5coABmqgwMvHMBViyFebmLdiaJ6",
  "key1": "5NjKhEX2Pneqshues2uEg2U35eVt8d5yho8tjxAHz9abW4SJPZswLQTCsokhqLRbUgXsNBQdwACz6o3ZKRnL6Q9Z",
  "key2": "4M6zNZnAWCKE1QTB9ggpFrfHMkw4kRDN82PJqSUnzc2MafcvX8N8XpUruoVAQvPjuYnJ1y9dZon6SCZapAthxGfP",
  "key3": "3GDTYKm2KxTo9XFgVnGxN3jKxh2ioRfAQyNzkzK4PEF3jSwjWNcWTKofJMf5rhU888T2qHekzhgKrhgZraz8LpKL",
  "key4": "UYB8mKc4qTLQ28tTwbF2barSzFiQqbB42j5zRe72XiFSpMCcZc3r2k1Xg7SaQsFaZpfQeirBTP5QepCU3KspBor",
  "key5": "sPZ5vutgRggrAuL28oYGTVaqVjfwzGRe3jdYdA7SzFMmqmQ9QLFw9Y4aEvM22PTXnD8u4BeFJictzyuEtoZpha7",
  "key6": "FCNooT2yj13tBpktC3SqX4YdB48xH6HBL14AFHwX1B1eX1BE9mPHi8YvTy6ksKqc3QK4jRsRtpWUq38sukvUmZ4",
  "key7": "48XDoqSM8herVsDs57Sp3mGvn7igdPi2TAzNshSGVm71322n6NwA9Hun5LwxVzGYJvGgqWHsrALcNEuB69NdmW3q",
  "key8": "3LStKL21gyUkiWcyPmhy9TKMyqxQpJBwBDQTbW7i6tBBra4LJvvwvV6kygHp7dejuK71Juk77p7Rt9pbHy7tympw",
  "key9": "5nGmVpk7v24hGQJEgynHR1uUfMWRLzMg5UP6jD9vfTYifjebmdWz1Y2vVbymLoy7dMtmgWuvfPUd5TD6dmaFjo67",
  "key10": "4L64qLJH6DuC83Dikbe3TBTi2RN6kNmctMBmp43ZWWpcKrud7WyTSYFfmBA3qghBi2eCegCaAnKzgoGYn1aECF1C",
  "key11": "3D5bUxZrvybuNMi73fZNLwxK9u2Bsk1gxuKrAR1iRV2zmo8H3PfsUR5s39nTxnVKJAGypLF8TN9egHTpGTuo7GW8",
  "key12": "4HMA5brsKFrS9mgntRz8SvAtUW8ssnFDF2pyei9X9PBQb9t1c7ixmjDWbgrH4BxRaaNDF8rnVUBziUksxGSZvUpp",
  "key13": "NSLXfQXNmrKmY2FzaFNsfN6PMuUbbXrddEA5bm1xRVQ9szrgLCLnAXg1PHVzxX7xaTJXKdkFnFmmvZ9tJW3D3Pv",
  "key14": "56uqwLL86RvJxFU4XqnDmYPZcRG1znJK12oobfAjpduFxXujyx3p7aPg4fDLffMCKxCcmkzoxdjiHMiK9BQMw7s8",
  "key15": "2Jy9dh7vzfcpRFtC6vYTMcSQethkeMQPHRcsZGP4Dty1CUgYC2A1doPUodoqypz8CGnMkfoUtLKCpn9k74WrUqTq",
  "key16": "3SaUPH4q1ZT2BdvbRyapjzgV2f5iHUDQdHFP8ESf96hbPWnLwirJrLKmNamDaB17kP1j86vTC2vcQXgw9YBLPrCS",
  "key17": "SqNyQ9ekFVeYXzpRaqnWr6WbfAytmthk5coPhqWSpUqMxZpoPjQ6TGsEz3g353VBoS797DoudqbfgDQYSjMNFVs",
  "key18": "VLmowdtSuThSF6gmRjahVJcHLCVg6hYfEDNqXzszWPJ9yWS1cqxGW6jiYR8tpEGq3p5WWSVy8a7ZETFjMaxqusr",
  "key19": "3qyNAR5VyCUpjPiiEH3rFFrtekM4CgbKSrNNMXRCh8YWaLfbQsUS1yLebh8nEioRcvSjH9VARmmvuFXvTjhiiCL3",
  "key20": "iqZLEoJksvUkzaZGdcUVGV7Yi51wpJzjPshu4NhSdKZQL2bbpqByZiDMWAnkdBNb9bLAz5bSpsE3crNg4uWk5te",
  "key21": "5yebqQ9ApyBtymTuSL5YvDNBW2a4JVcxjUPzfnZh4NjSFVHX8XZjPZQhJtn1hYjFvp1aLFHo8tRLA5b9WmdGzjpR",
  "key22": "x4BSCDkYDQswb5E5f63BtVWMr4c9k8FwkgdixtFrVb5YZyNRB68Hew1Vn2wTVK1LapC4Ekj8ZY8fkYcZGfpHHiq",
  "key23": "2jMeMZDRXRi148anvusgh2hXqzv3XTMWiXZ7rg3PNspntfpeXSgaBguMchhMak4F3UVg1iMeq2CK7ijNWeXrJn98",
  "key24": "4TTbddxQYskNBtfW4TDQFo8JcveZFz9cwo9QxqMauU144QXvJGPxC5nezVNWUgFz1Yegj362LoNjqfuG4TDe2GFJ",
  "key25": "75U64MVAjPLNxypUBmL3KF7Nvz5zXX65AikCA2oG4RicwCTAAuraxYC7pL3KfKxGYUxJXNDYQ3KuzJextsE7zwv",
  "key26": "3kjr7iJV4tBRGRZPkSg9soHGAmjbFedvtJGV7PmSK5mQ3pjRvnKUR6zK34EvdDMiuEH3yc9YjFtcfhgdEB8hkb73",
  "key27": "3R86rY6Ecc36X9JGNXSHKgdD1G3zFTSQPju98TyqtWPiqMg9sVccwPsFZpxkC9amWqWMgacAUfXUg2NadYpcN6bw",
  "key28": "4dAhM4Bt19HnL4PMBkJj3HmKix9QAUHWvGzWrjeBbFKVb8U7iPFt6tPWFKrCC94EBx2E8Pa7QZmMTFU2KPUQ2n7F",
  "key29": "2vf8HZHFJTcuNS99sNsoLL34xiATLF7KVoeuXtwdSUyRM1E2UQGuoQ1TKbsTPxMtTzF7UxWdTzSYjN93xEm3nghb",
  "key30": "4AbLU6iMhnwYaYDsxrVyqEgVzLephwB8CHzKs2oQVJfvY7R2Cv4UVtnrD5A9CXn3bXzi2njGZmGhTFVDnFuz7WkT",
  "key31": "zYn5idG1guPfLLu5az9hkmRRK7y7S7nRX9yNSj6AprRR12smKvp3JYoDzzJy71ZFFG9e6kSB115JpbmZ6vQR4H9",
  "key32": "292Kig59AAiMNWUmgZEoDzmN1ozUdyMf1rLCfDhcBhfy6Fv84QnahXKLc9hGVn6ZgqNgZCJNWG1kWLJxLg5FW4Fk",
  "key33": "4ZBPnCtHo3uW1gsCgLzS8ERgZ6AsXoM3ZEfBb8PaHAJQPhb8BuVNGiHd7kw2NsrSrKAx7eSkRQ9ARAyjkqa1KWSd",
  "key34": "63YzRfqmasLPAcbjqx3Le7cwiKcYeDqTGQkurPwzzcMXgSn8bPK7WLQR2E78FPUM7kqvtxpetTHsAFzRn4g9QDk3",
  "key35": "3NBnQ1MUw2qM4yBM6ShonzNTNEfJScyzR2neoUydZWfS6Z12tMkhdRQUmYibJwj4YFHD2f8X2DBDPsw7bZQVK43V",
  "key36": "4tSMtuQihXkHZspnwuULS5j4jMJzGneA8TN4vaHtBtEBaMea5Syj7HMpeBHUJduB3MwWsxqZTKyUBE2myT7GtvGU",
  "key37": "65YSaoaZ4fFT9JaRz2mf9cTXSqstxjByrTYMp54AriWCuyPHnBTzXCgbvrpZ2W7Rg4WjrvYzNgVEBxeeQ8hqE1tN",
  "key38": "3BbnUs5EqadF6PRHfKNpFYB3w6fDa3mzTTyeaC9kdvsS9mbGHexnjwRt9xvzTXCHaAdorFaEZp65BCq6CMSHXG8E",
  "key39": "5LNpPEK5aWEBXLWxiYVY91NrJtjmVb6A5SpcDpgYkZQtnCVPYctnLnHEovJpWPduhKNbrveTwWosaepJmQG2TQnf"
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
