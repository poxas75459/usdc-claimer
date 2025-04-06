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
    "3LBDhKwA16eCHmzRRWVttYu47Q8PLfcxdKErKbcSz7UWayRWVAX43bSXCufGK4saZfnyQWte1AeRsMfdkeA3JyGb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JsPwLiELWYpAzLY8W7smXHdQmB1FfjFgqJXWAHF5QTtnhsNVdzWXUpfRtZZkRCHX8QXWpMfbFoJBejhcyZHqArU",
  "key1": "5mqFvb3DGtEQGURfHZX8CVz6fKhQgV4ePA9zSsWCt9ZX3BX1a6eurTkH1ndicy1xmLBDJk9wCNBeXd6X5HW5hUb3",
  "key2": "5GzWhVvLwFidb3TNmCaVcEW6aMfq9hFkmm5MbAVvMzfHBRNAXz7BnCEU8Rp1pPop3L4xTgdVyCzeyHFBr4bcJbGV",
  "key3": "N5sXFgHe5oYQW7mnb8L7GVpXeqkzCxEdfaryv9x5fgDg58SggkrSJ2ZvtdCwySf8GnqAVRgbt2zgRZYS6m9GMiQ",
  "key4": "2jHfpCdYmeDUntABVoWfBx2oR1pF8K6oCfAk75kHBBi9xYLpJyyz4499iPhtPATcViwQHNZnoX1m7EZy9oi9XNkW",
  "key5": "5dEAYXHBgFjTV1AVfvosjg2HrhrRepoMxZZiYERkFX2TZH8occHMDNnKK5ABW586fiaKDdjjvUs13SQ4KKDyKVfP",
  "key6": "2QgBGXJYt2Xgf4J94LKYL9sqTTtGvzBYTYQbKKAwfCcXUV8e5P4y9iTJmtJb2EfFob386STAPtfQ1kMqmyuXb71w",
  "key7": "UpSc356kU1qMS5WPwVM92zSzEuvAuuu9FtrhiftqJHUTudjMDKFpJHFLFagRQPf2qD4QmgVjL3jdu3tRxF9XVcB",
  "key8": "5Xn6m3qdDnbzTcBS8LuvfBFZ9fs5TCj9X5TvgZ2ajzFTLrRXm97hcjzEudKTgJY6g9YLuZZNFLWDqvCSN1zQWCg2",
  "key9": "2wzT67tVFf2ofdipMVNGTy3sdWpstahUMB9vqDqGVcFD17iMVhPxsPjBoQxPtgDbdM963gpqa61R7gw883aUxSfV",
  "key10": "4JwXPUBi46ou6D493gNjZVp7xqMKWWw9fbWWoDPNYWyuAPyAER4vV7pE6U6JHDYvFoAScQU1VCA5CvgcpyUshP3J",
  "key11": "2BSBoDUCVRG6E4Tc2BpsTDbCtruTbaBQRteMuQcstVu6hG6aX5XoedveVaxrNnomtp56ozt3mvYdPGnz8u7mDDmz",
  "key12": "64qxUwEg1xXmCidG73v292XU9Ng3mdqfBbUeb1RjPFz9aEWdc9bsU14TXNGjDcuNwkgFHBpzhQzogc5gjxfwgJpR",
  "key13": "3J293AtnkmPZYJq6JXU7SBJocpLPTATfGNDVBLTfvZjrpCHWnQ2uTNyi8DAuijcsj5T8WrF365Aiqmw8J2MNv1we",
  "key14": "3JDViBrupMDEjUkjT3bqjLtHwYJtutzFQmwG2oYuEGiXDByCm4LKPbmakxkZEd1Ja3L5TcF7ctuf47BEa9kdhXJ1",
  "key15": "7bMv85qougEYQixpt1kTyS4znaqAmemyUpPXnxzrwHbSF6jdkLGK44UjottH5JLBHAREquwjkAiVX9sP5iMYwMA",
  "key16": "4aUbSavcYWSssxhBfB884bgsUTt2n4Mkvb8NgkQQsjw23NhqT7AbQfTnPxVAg8YystEAEgs3sYj4pwdu8TxWR7zs",
  "key17": "3xER93ZTKdXuvhRYxpM4kunhbNXMxckjrv2Tj6p9nWh5wuQQfRpNbhKuD5VHTy1ei6a7AobX5eVVp3LJyNGDHcKk",
  "key18": "3BSaZSvKztWQfSjK2hW9EZYGvczxW3hxQH7VFcie1AZ1jsCE9ZV9SZC5xArkpwvDdu1m79bwgeyGz4PMRfKTrfZM",
  "key19": "2NEJMH593wbydYscnKwXrKCJNaGJHvpRJtkSosd8MBLyMgqexKqEmNRRQrkua7jL4jsAjPxRATaMVPAixp6qpRWp",
  "key20": "5TbqQkwZecLHzAjy5N9fY1JiwTk5UoRCHegnA61Mcjc7sMa8JaamgwmPV7bZVs1FakghsUgysfot5AoFoSsuxT9u",
  "key21": "2MppYNjcCqftv4KzXguaUfiZusCDvnq1fDCG3hULwvSSRP8gCDD8x6TjWgzqX3KfCuBt5zma4Gm7EUWmy4Qp2dVT",
  "key22": "3nob6VhbKbDJsV5BkbzsiRgrtUfFMwUFqLxg2u6tiPJW4cYXZp7dfBkZ92Xkk2kpnEjUmR115hsZPr9yuVQBvYPT",
  "key23": "2P6y9KzrAreuG8PPuhjQbssmXBkhLXMNw8RfWCyfznGH1m1mHu9kWsPwzAcUT8zZX33PVqeG8HMWgXLJ16MLX9Uh",
  "key24": "z2Rpt56r9HjaYyFBBUBkNWeP1H3yFn1j8pjkNDujR8B7FrFAhq31rHJsWMPc3suTzmjrNnt3HJKKmwzgVDcBqT6",
  "key25": "5CcRDcXguMcsDHJMN4FP2ASFxxegDFt3PQtg7CPDYipk7HjKKs2K3fZ33phrzSPNMJBzQqZNLczsva52B1NtKKyM",
  "key26": "4d6hM2qq8d1jQj8MwNn9UyajaMRcwGx1Po5iu3A6p3rgikWzysuGtHgipkAEQtvWj3naDt5rGjLCtbGktn54VrJF"
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
