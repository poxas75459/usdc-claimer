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
    "2tmS9SJTRXcaJ1wX5K8i2VqjniFEAHWK76WdcakGtJWz59PD9vGqFzdhCkL2EMcNfKxmvCBVDFbZTGFxft4Lk5hP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oMTk4gj6rmcz1T5JfrFE7DK9EumyiehYr7LuX1pYi7Fas4oCKuCkxg75XY7hMC3ioSorgUeSSddLk8yJGbJ9NTb",
  "key1": "2D4p7EZfw4TbfWWTpt4aiAxmWAMLaPGUNJx2LkHv6RgBPJwJZY3FTUF5ZGdt7i3UPq223aeKHZkqXTKaAfZp1ZUz",
  "key2": "2MHFUwn1GUbpu2R81QipGgUnrReYXMcLUZuaAYYay4VnTLUeHNSnbF9sEvNh9YuzWn7jZt4DzSCsd4adFMKVFc8A",
  "key3": "2idLFnqcSmnwkp7jwYDREq53RYqYjjs3QPsQpwcmfV3WWkUiorbqeoejSop8rSQnH9iK2iXh77w1DezwcqPfeQw9",
  "key4": "nMTcSCHg5WuGDMHrh6AcKFMozk7BN8J663MPkX6xMK9WZcnd94fPYX5hhiP3fZMMcEKUGZkND6LgLv7o4i2rmh8",
  "key5": "2LD4bnk75BYBBFbu1WU76wvYGeetQ2b9HhexGKdpokEUGDkugE18jZC5S5FDedtReiMGmaEfmqnbFLz9KYr6hWGT",
  "key6": "4TF3gc3BCVZJ34RYnmdkRH6igJ7gZ7XLbvk7rCSterowhkVTbcZguP8jm8sBKbsddXBJM53vfm4k7jA4qf2oXKRE",
  "key7": "FAcnqXVTVME7ntkuW9iKfrTiVVVNPeoCSMYvCaMbFpMQsgbbKdtnZh5UJDwYGBSuXR398qdfAzvL51JD9NZC5Mw",
  "key8": "32uJGo23M2pSthGX73mLmUGL1DRfZMkk6xLYf9yFrwu1vNxkDwubeNgCqHBPNStKGJSJmKMCxsCQ4uAKyp1gQBuP",
  "key9": "5kniCznvySne88dAP4wS6XGLEnuZrVG7QnkDnD9wTYTBwvXy8cKQm3dDDjuRTnGCtreufnnnVQuVYwxGdfz9E3GL",
  "key10": "2UnEJwHMm89stZ94CnBGQMTQ7TRhbPQfmuiAdtZgZSt4RZZVER7T7pLy1FtopEJBU1xNGD24siX7nkuaag2uxbff",
  "key11": "Lyo4wYNbMqEveWGgEFHNaSYtsayCdJqN9HwdNRe5BWwCE7CZQoCBUmwfid5L1NTk7KZCCP4u7GPtHBNonjUXaMB",
  "key12": "5TbkTXsvEeLTPChKmPTrJcGqrzbaJiUTc2P4G5K81gkNUMfEtc3CgbsNJwLXvm9J1Eiqm6JS2sEX16NwMEPPKcHL",
  "key13": "2rrFKzUBsi82dakCyLDwWdm7rX8b6UQMVbWqosACbv71rDk24im2GCg7WRXPM1QJKWHVc19vX7KN6QTDniKZBvTe",
  "key14": "5HdfdSxyt4DRUZ8xSgeSFpRXToCRryjbTbydcY3PK3ssi3JaGMtc11KkDHbp153vnYMT6kHKFbp74GHSx5HTgxuk",
  "key15": "25QJfDRVaX1ggFsspxJNdpet1hsD8tnpqXrYAMedmosuuXJLG89P7TRsGg3mpRRedp4KhExuiincEL72fR5MFAFf",
  "key16": "yrVRWjtj1wZP7txZPmd3Zf7Qgskh7vTuWj9PpmmsCMoYEi1zX96aWsqUPRtqg2wUMgkPHWTojSGsQFrusXtnZuA",
  "key17": "2sbgsTJEj4MmYYYKTGdMBHwZNKzAuzDCBGJmTj6Mod9khf3YCGWuqXSxVe3bkhS8VRg5TgK4UAA2PTjXzCn8FAeD",
  "key18": "5QJg11gnaYgWLzQvBFXkon6hjUKcvtBVxAh6kQqJh6rjpcsqqcTPP18NF4RUGQSzcFBwFkrLYfCZexS7G2nUs8WK",
  "key19": "3VZQfa84SVAUBGTji6UML3ZPJPcAViiCcVFtX288TGxNuk3Xdfqpk9CLjZQhLgFngnnAC3YMUmpPFTsKbFBVJjYA",
  "key20": "2oARFHkXtMJWiqJMHdgfrZHp145TLQGNjz7JwKxjRc87hSdRUmuBMBD6ocjTpok6AFrMuKTZQ6cRf98bJfPx1qV5",
  "key21": "2LumF9x7Tei5vU71nohzjN21ieR3p7zTHitVXGnWRALaYhBP2ioBZkMpF83SjjBKmPyXLkB3XW4oP69RgwnJDvmG",
  "key22": "gBeS66tgu269L4a8EqyVYUzGZ5uCes2FCXHA4qc5oHU6dydpzLoEuNCuabcKja6HTdga1z2eTyS4osP3zh3KEQu",
  "key23": "2nt7fVXWrZnhjuYJxmzYW3xvFP1ANMkisJcX97VNYyW7Qd9LysXyyiNZuPDtYPDuvZVNZUhB5pMvJycQ3xd3r5Vz",
  "key24": "5braGgbhxHLyZLY2JKsqpqqYX69LsTzpd2tXoRmD3zeUCbBXqqQXWNKcvdeQF4eHSZCaBNXN3eMepKMr1Lba3A4v",
  "key25": "3Erm9ZLn8C8QykmwRJtuZU6J8HpGdcJNdk9MWMiDH4zypoarvsnkjbjbPQQZnNfuH88FqiZVUF44YJiGp2RSCxzu",
  "key26": "3jPyVQ8mnoRG3EDvVmQmGoeXvnKK5GJAK3TDFEm1vtzgygA5wnkPVH8gnEU73Eo8N9jQwYtCBSgDMqqrcXGB1Tss",
  "key27": "5Nv1SLTez6oRWoaEYA4vZqZjZ3knmoHBFfq1orQeRopS6L3B9h7h4oj5kMB7b73vUnMe8B9oAFwqknZvRQUD8n3M",
  "key28": "53sUWZNbwTmAZwF2qomm9BPsjuZsJPNjybqFd3QV2KGTBrcnMAXqb4FabuPzs23HadHXiWTEX7Sy56vUnRi4bBNF",
  "key29": "Yr6up1yXa19sVg8x7FxQapabKMj6TVYps3vMnLTppaMeqUgswNjkDdAoFHAMpHmYpAFsve7mLPDUHbPys242RJF",
  "key30": "4huWvYeb3Xyj2agdN9gSSj8k5n6FMcwatMaAosZfFQGfjykdqEsgBoZfTAxxkMi11SZQU7RdSwdLhynhjmh2SE6q"
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
