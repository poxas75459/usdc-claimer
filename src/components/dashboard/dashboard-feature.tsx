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
    "5uDQPPu28wXTtNdTyguHAUuDyXUzgA9AXDjgiJjx6ETxzS22QvMNZmyrCbiBW9YdrcJZ1uTMQwcr7iQQQHctWTQm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sXxkc4nYp6CyA8Q1kQrdojm6cMn8iEmvBnBV5zWTR4CXWLsMpzCtCkUT58p3uQZzDckZE8g6KAtrzZajkmL9VZm",
  "key1": "5cT1bEwSJPKBfmCtajteSwusjV6YQGxzUm4ChHyRnZ63ZaR5nEey4heSNA6etpdLDSTHiFbuKJiFQd4imZhaR4Rx",
  "key2": "2pNvWeMAUw86eXEfe2pJ6wXupKEjrcgjczDTa2jyGBpLSnjqEz4xtAyevhRFLTz6y82MXDBjNVMQwNCXrCyR5aKc",
  "key3": "2s5i89et6n6HhQgQbdTsrAFkWAMr1XbQckJeW3XkwwTuhAk8engojeKqXRTGJke4p9LdWyBiZVeHYszcpKfF5iQ3",
  "key4": "5mTdXyuMk4WdB8aZMfLTAjvaKjWi4mx1rUFsGwnGg5UuudPJuBg6MjEjDtWQpSoNCq1rZ7fVDvZCo5hPrYFuQn5J",
  "key5": "3dyZfhns71qhsYjN5F7552c4d3Fs6weWK4PGmTZibPFKVSrGwSGermtwarmtmEAn9yE24djnvAhvNpguoFaq3gGm",
  "key6": "jN9RdEJoTSKyZUN75aCaZPt3N2ETQQfW4CgRDF1N5vKFVeTTt57aVikjwykrXoxUKckMLxdyoV6VFFLNSuqp6yq",
  "key7": "5zs3cpq6TaKsEap7TndirAxwraYyzQ657DZZc2B4qNWeMsj6zKMypjZS2nnpKC4Jw8nGVJiSnRZ9BzQzkk6qFsGm",
  "key8": "q71W1kw6ZwinzAFfP1S4TpS9REaTXJSELSCXgsiMmtBWWgh96m3cAZtw7KRT8rhE2BaGKZDnCdeZrR9VVkAw7H3",
  "key9": "NH9esyxfihht9RkncVWGB5yn7tCGQ6dVxobvygj6LMCdFLD2rD8vNhcPtBcnHBDaQSSfeBDnVNKSGwsvskJTNxy",
  "key10": "5Y2fvcp3285oa6wkGcnpcz21xC5q8Lb2hzCNNSK5fcoRCU9sv1SdnSNd9vMxmKK4N1iCWcL2YpeiYMVAaTncVPTH",
  "key11": "4uPNMskpMXunVCgLUSHTabTMNtVXW8rRBdz8YJsdb4UnZbKdwY8bQvky9be4dbo7XJhYodaGrusCFzWJ8mLZZPBo",
  "key12": "2FZpCDMh87VLELZ5WVAWkmQyx7dKUCDB35WeZC7vnzMgoa4UZGR9b89UBYsS8b4kaxNcZjLxbsg7nywtTGHC6kiC",
  "key13": "2LHkuymfMoLUL82BmMgLvWHWcEWVyQcX6Kdi7tTzgDYhFJW1RtPkC99oyGrybdXD258uXtf8ptXwJujHcJhT2h49",
  "key14": "581ty9kH1Q9oGNeBRWPnm2kkwZKyehW6eB9QHfFCdKj3bc3t32xx8XAK22f7Tr7Ug9iZjavNEqr89HSMvSt137QW",
  "key15": "5HEBSaRYgN1WeyDyiJhPdZp8a8van5wpwEjr2faHsihJtCVVEkAjNFwR639ST5ZjB6pbqTvi9yn8oc8SmVGVc8Uk",
  "key16": "2wa3Gej9fqSvBfwEz5iXA6oUkGWUzzxZcc6msoxoJWH99nnNwQZqF9FT6CU6eBWPDcQuNZnFof3fMw7hfu2e7KY4",
  "key17": "2HqcCeCqkbuz4J75it3BfY2hgg2t8kctu8NawbG7uE38PgFuZLtSa5ckHTLwvdVKQXZb4Ed1VMxw8gLenqRzQ8hM",
  "key18": "67TTrJCxaVN71hPzyyEozaPwDoU7iHmJSqtDSJsCAGyKKDVUjjqJufRJ8qMranV5y2anfUouHX2LDxQcBz9rHigC",
  "key19": "3LqHDv1d47AxADEixf3QH2XachkQSmzquaRXdfDAxMGnh24hajEMxpR5fmiXeZVVkHbVh6KrSAqdtvQuqAWs9SRp",
  "key20": "5Bdw5apVRt8DR7QqBfvcJfyCQTAY491QQgnutaGbCERQN62NcSfq5qtoAGbfWwjCr8sxDWdLDgFD9jimtmvhdkxx",
  "key21": "21vYYFQvxhvhFuFKJtC6hJ3DTL3pGWesGa5VjPjwjLt37Xza5PjtTzbzX3rpmdYrnUwBFdtV7Zz5SZiBSqApVtR1",
  "key22": "3xFjqna1ngfuBgdukWkaWKc68FUkC54zR9qDGKShhFV1Mk9yhYauCfh6ctCQicGV4aBL2kWDTioo4Dwt5ycuuzfY",
  "key23": "55VrNxQ7fvmWJMCbUhM3qUvCEmMGpYsaRsQyKun6yhh2jedHPsAivJVbSjjaE2sUU7UaA6kG7X8xWFeWKHzDXxfV",
  "key24": "3tPbYZhfu7hxqE86mkgazGzqmn5YaTn2VTeGEqtFxT65RGG8e7dE3MMt5gqTKa2GU9f4QB7JoDAUXF637GcaJ7ry",
  "key25": "3xfZHtzdRWJ3vDhkp79f8PcDSKzcUQ5HX2UfGNwntAL3jJ2YyYnwtYxHx83tgQ5j6tPbUFj364qhGKndAG6nTJ8U",
  "key26": "o3acnLkUegVbFajmXRSPocj9r3seW3C7CckyWDUJbMCUHGWziAJ78F9ZsNck7banwWK2FASaVqEcJGBRpgSHMkm",
  "key27": "4DEK3GPtmLLKMPFbNJScMMwK35S4zKC3mvAs22xiAHKWyeAkL3WuVtvaLALSvyiUbebALbTicbjo89Dvuvdg4umN",
  "key28": "4oGJmpT3cM5fAqzxuHyp6PakPnMT2j9tEcPBDk4Ecp5snVjcXE493UJkQ2BPnBB91uC2N1ts5ouKeRadsinrBh5v",
  "key29": "2dxiYrdchLNJz3oomZsk9Cxea9WoLB6jAVKd1b1BD1LiZcMTUZ8f6Dh2cZEFfiNkipr8JYSrpPFcqfSbusbVVmCq"
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
