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
    "47QsMbi3gJz9uSj8t9FqWhe23AHNnhgbXbep6fpkynojcky5zbyzUfp6EYEqpfDYxtyVQLACVUNyoRSGZLpR8hdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nGtnnkmVmnrPox9iwfMqWiKBMyA42TAbbALf2Hs7FwZABJG4MQWNGbq7863CGR44QC2pUTUQXu8hmMDHtWK7jNv",
  "key1": "39HdqNhUxrFdzj1BCG9suW3B24egHtpLETYyRAyTW6dVsRsiPgcNfh2QwRcRtu2kETmpL77vzLTzZ887MtJqy4dM",
  "key2": "4QyqTXfo35ZPRccw8Hq5BgD1tYVhN2wjsztAcNTST3geG5N6LvZAoMd4E5eg7dWTEqej5HaaGBFyG5ZjRXfjJERJ",
  "key3": "4qYWjKaStR5trfZNV5pvem2Ndhp5rNLKwSMKbFvMWZmxpkfiwfMHe4nM6dTFnK6btQjSa7ukjWzcuRu9eKnf4MT8",
  "key4": "4hiwcyEUGTsJA7eJYPgTUd6vsSYuwsaZRH7p9qEEFTBY2mNmXj7qVyCEpJuiD381JNMaeXM6kFdrcoZRYduhFrsm",
  "key5": "2AwHrGb78xfYtYmLsJKPu7b9G5AuvZQZmQ5yHMqN2Vdzs6fcPbbeDV8ksyrVbo7pNWGPCvwc24bjfKDR8wz8iz6Z",
  "key6": "3JSsayPqF6febb1tLQFpd7pAvEAU1X7316x3SJ7JMJWu72fyDFexBeXC4Ke9tgzUX2LwxjTwSqoPFm9ReMHJggdU",
  "key7": "5XqNjeH3HbWUctagRxooQSYs5ViGU943D3MvjUTb3zEmfRuQpZVyBgk8QFgh9TZUQpEkHD1pcG3D3bgDM5e3Yd31",
  "key8": "2kc8Ju5T8voTQJhZQkf8Kz1ygEDqiqtAr6eZqXTperXacrWEFezFtmRAwEPw16PWYdmFj7CGLe16SeCa8q2t6Bfe",
  "key9": "5nNKgGHFr6N3xwUCwvUXk8rF1GvMgvmy9pZjbEnhqbAwgNYfxQb8ea1u6YDmr5Lo6SNXL4sK9gKJrFzxu41zVi8y",
  "key10": "5oiJRApAotaPQiXy6smQJTuKdCowp7gVJJJJs9CpAKtSfqVP2UVpunCpxzjafiFDWaVqi8N5ypkM52Z7Cq2yihLz",
  "key11": "7f56xDBPqQtw7arFmoNfEQji7i3eWScUa1fYmCoKE2r1vcuZkh676Ek8f4Sdh6CYWWRquMiUfaPvL6zX178DVmF",
  "key12": "5tJbpsaHCqkzFEcHvwgQgAfhcxeko53d6hPeN2t8EiGvxJ9WNrUhmf2i19LwqCdX1wa1djeQpbxx6cjZBJ1TkYM7",
  "key13": "2TPhzxiJDHtz5vqe1bofKUV2njPHHvNSgXuAXybxXgVXCyTkNoPbX5K7CdaiXmvU7QqGKs78Li1dDqTJ2G5exgyp",
  "key14": "5se7vWtSF9DhCeqy3u7s17vPbDJQptCWVxwV29qDjLgBV3EJ6n6MsYyjHURDoJufB7cNTu3u13UNo4ZHDPfyCbf4",
  "key15": "5TmVW6A1QwciQh6iZt6VjMRTwJcsgP6LhzkuBKmkYc34qpAzCkvVzmmLtHnjCxtNi1raMqTVo7niEjC4EvhWd3jb",
  "key16": "4rKu62b4PHeGkWC2C16Qyz1BtmTe84XLsT3UCqT6BkKgNbZiPHq38oWHE19jhcQg6qk6MfPGR5tXVREfCmwpBxhy",
  "key17": "47w5DaoQxZMprTHAq58qpFfjqKurRJMjnAVMPDzfFysULvtvdvvyGCn1Rav8UJL47aALzbZP3YDhvKDr4yp1k6SY",
  "key18": "5goQtRiagMPJis8YoKSaMiNwU4eVtYQCpVrcEHhFvC3xVhzT1gWuAfRz6PWWFe8d4vtBc35wrj29MsQ99stMURYF",
  "key19": "p1NKUrQVSptqS3unsiZjG4a85NGDSer4UjV4fML3akrpK3X7PXFpRqSyufjqRWizGLUBd6RR4akuK12Pwfqi52r",
  "key20": "RJeunx2xVLbzkxwMCN7UpvkC8CZavUWkJ5touktwpShuqSgwugsgkT397GcBGiFKJppJkM3mwDtzshasTESQdxM",
  "key21": "5jvqCrv1rroDJ5nhAvFaWL9Y3snYBcSDX3AH2isrS9MPDaWebgwVJqApGkzc5p6NEhGoV4tjh9vJQfnCDftXnvdm",
  "key22": "4kCri7GKJkjrXdcHGvk5fmpG8oxdEYArwuce7pR81uLqZjiksUoPXmF21CAkNpajx2mACvpZqjYYYRRZphW582r1",
  "key23": "5h8ykPiKbpAEq39JEk2k9aBHmDaoG87NBUVH3ZX5XeUreGfKALo7je1hRPb2zcaK1ZcqXn77mVwxYzFGVn62xEqY",
  "key24": "MWGDHTUYSmtXkzfsnaQaAwy68DFkUnbVswnGDyz3Ctr62puptv4jtBqxV6kKz4Uq6qMvLDNhvzNK1zqACXF7gje",
  "key25": "41yJHqehFmGYmAEUc2v5vhCMHtT59gTbdqBJDTM2erxo77A8TTK5jZDE1iL8xYA7YBfYVjKrb4wYjupVutj6eBM4",
  "key26": "3vs7GF4Xt2rAqknH1pgeiF9B25zKNBkGbtK87AJgqSt4GiKxsK4UzQvsNVs4UUsoeB9uDTZinku2VmrMS2cQ7kpy",
  "key27": "4BZHPUdDDaE2L5FugXQymB586nf5cMKBCgrAzc54bGUrUEobbXgcuAhHwJKmk9UqAGir5AGQLRoGrzwUU6DafRiz",
  "key28": "2o7o5ZhBi3eCaryYGA2kiTpu8K1CL7tqGGmJ8KMzVVUuKDNRsHFNEb74NiCbWadwCW4w13LrcdZid8N1LypizAPt"
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
