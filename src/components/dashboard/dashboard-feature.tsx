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
    "5QSqxTEyxyc9YVmeN68m5sgvTg2LrE2ptzkF7JGEusHvtpF5fH269DfNz2AP5ZWeGQzK64ebU46LkskWJ1nUBHjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BZA3f7a2XL8hK7UKqe83BqufRCBaZHwiSgk2mzbW9UsrxTjYwPLRJpqLuVGcraCt8MR2kVQjNEZKszwHxXqNW5E",
  "key1": "5f8xFT2hCCQEGzXgNfzd99rakxkR7ekZrJHwrvs87xJtFzYmX8VLCiPsLjJ9Lf9Xg3q6KPCDHG973xE3XiyQrqc2",
  "key2": "4rm22gWFS5kRQW1LuYXuajmGvXUmZC3CG3wr4RohVMY3F2bKpSvQFYGefJZdbSbYEVzQBGginZPC5urWEPJPw444",
  "key3": "4Vz5iV4uaf6fnfnWgxJUWXodaCDm3UbPHcSE7WhsKr927ZHizVmmZKMEyNvna4yoSZY7JfGiMhfzRZ7LnNV8nd9c",
  "key4": "4VEu6KjkdF9tPVNLaWEX8ziYyyfDnyHkQm6B5EzYNnfb7eRuPST34QpqtSifExQb2Jb9h3h65TS1uZKHwkhPhmNi",
  "key5": "43y3oWA4osBLPvQjK2taEKoDymbTKxsVrrArb7hkz9dfW5dGHFYRSjLpyTuGvgZvNNVqEoPxsH1SyrAEKyWwn7ir",
  "key6": "iZo2K5Nakr6qkGzukKfsqxsnjrrJ6gCsYgc5rEmg6g8mXhbaxPn6eDfFhjGf8b7NcMxwTQEMrmeZPykqK3JWKAa",
  "key7": "5heF1MvgJXqHPBaqpTYdmmHhhrK7bBipkDKc4TGPXPMZsqWkZkN6vzQo5edL7ZWz6MtHBbS5AYd67u5isNMxxE2D",
  "key8": "3LxVRC3KV5Tj559EGuceHdyFXFnekuHTtYZCBoCdbi2fQu64Hf16sA8GEK2ERGmsZwZUqqrTpMwDexNyKcYuUzYD",
  "key9": "UmBoF3PvncRZpFDXENNNfqv3PQhuM6SzCRqrkjX9pAw9MPAFnVSHZ8hkX61QwtBCcHpeBKVLjHAVeVvs1KdwbCU",
  "key10": "pZRU8UZpx4vBJ79Xh59p51RdFhpCzGSqyJmHCM9VDpZWfdtCRV2o3bVFsGtefzQavK4eQC7psVsbDn9tNLgBsht",
  "key11": "44u9GZdSwR1ae5n3FokJg2N8HirMmWH8xy9iVp8BfpfcnRWV95YnNU5ELsNeoc7351piwt2NXpvak5x6RsZof88n",
  "key12": "2h9jT774DTzk5j9mjStjR5f27KwyuJNMYHBhA5CWZZTgnmz57CKhmGRkuFWqCngCSnuuNA4xso896N99Qhx4FXYZ",
  "key13": "3Sp8AAgSnT9fTupymGCbzpyujXj3n9kwMtsC7C7NDXAK4zpPAu7pfPYKpAZVNmhSLBVvXdR7te22DqUHuwvw4mAu",
  "key14": "67KG9ibbhtXM5kGXr8gNTgteWXNHuWUNkj6A2Usy3HWyjvAZUmKrhZhXG4N5zVfid35SDqHbLDw6bCGFH5kasSwE",
  "key15": "3XJtRtr6tQ26ndmwbjyMWT83MhGh5CqH1RQd87usAiEt1LYtiZ2xBNvh9cCvHoYYonQZ1BtUARYzpT16qcbD6Vsd",
  "key16": "5MtQDwAhubRZtkiNsH5AKRvYFrCqHho23GKKHAvLPS5cJVSy6z3KouXt6zrw5na4daGC95DNvCwr4g86LvM9AM5z",
  "key17": "4Dqw1Hk78L1gJPvsa99b8HY9W4krNLetnKBErZwYHQNMePYbqXvmEtCUqKpvQSkE5uJ5EgJeSKbNwz5JBakzV5C6",
  "key18": "4pz69TFvo2ezRAFo2q4vbDDWmfWzxbtAtAPh2D9qy1suLsDJEF1sQYZo6U2iCAC8DLXft3GxMVDvmJoMBjziaQQT",
  "key19": "DD1xJEdVPY53SVn8vteq52KK4cTfM4MkVpT2qq3orz6eW9EaXm64cSkKcqCC8hKb3sBQooxckHC3zuFKYLvQ34e",
  "key20": "5rBFzbPgoHoDJCWJfRP2PBtSERf3TShBMVKMNE2Q7fLSJxpsn3sNaNBepb8BBLsR8gsta3CErtKLfWdbwEXj5MMp",
  "key21": "2bcxTnB5e3hBqYucGiQQukWcYD14D9RbgdiTXm36452ayn7vpmkTszkTv5jbxV29RhcsLo8aPwF9ZJdFSjyxR7HG",
  "key22": "3H8jKovQ4pg9eZW8UJQbErezWW5i4BD1VDh8pk7xQojp3UM4XduZr2mUGGJaK2PsiVjkPcbKA32kSy6TaokHPGH1",
  "key23": "5QUB8gPeX8KeNr99H7sZFU47edBFjxpum7gB8jKVe2D6vbK5bF8CQ3rVaeny2KKPBGz5z7wcDbhjRMjUh5QNPeUt",
  "key24": "xeEM5RpV3s7poAATzHY9rBEeUTZuNqkwPsbgndmd9jgY7anqjgtN6TAaRULHqiYBwhtLoUr4Pi9SqRMBwL8zFNj",
  "key25": "buHB2P16uBY11iYsEa2h6wZVdbBYyTN8oYdiqWnDVXzLfAGspEPfo2t5QLjWxmzScJtBqhBihLrpgp2bY2pKVCi",
  "key26": "3D4ep89d8VTETAySahzCQ8mpWvWPnnQC1qgoEhZdsMVFFpSyQ15EhcRmvA31xt3t6S2ya88hTJz7WGmBHwBU1h56",
  "key27": "2U2pAEfncGLX8E2bikV6mDQ5ea6H9cw2pKKRTF1deQMoVUycQct2CWfHYGnUhdUKTLas3hBRNFgvzKGJyEh1oDJX",
  "key28": "5nxrXBLK7cjMs3rgeM1tGg2R11exGWWxTcGdmrPsGNPJQ77rrHBRyXB5XQrpBGpPAEi7YZMa5nUWJay1Y6e7bTQx"
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
