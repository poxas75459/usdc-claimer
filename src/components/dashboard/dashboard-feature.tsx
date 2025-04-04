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
    "4o8ru5ZvKYnd6Hy2WAiQJJcjjmcTcyU9Vv97UGHamcuA9xP4pfCVj8Y41hrpjcM3RpxUrfN9NHfwaEJkQXxBg7Wj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MiDTnRoZhkuUdE3o1iexjJYUpsN6ptVSxNZLYTsfJMiHBCgHjuDaF8K8iXtF2cp9JngZZR2azaW2CipCgLRe1jT",
  "key1": "5zjS9nHqRm3Yxmuc6iyg4dKiWQC7UybpfQkxD1jskD5doiWU45TVP1UHtmPyNjib5X7P1Mw6kpK1dXrwaUHQXLdk",
  "key2": "5U7ApawG71xoHr6ovTjCnKz4PGvuxTRJQW5KAsSFS6HPrcf3kaCHjJoKoxMz8V1fv2WMagjtRsmt44jUx6Yw5H7x",
  "key3": "598H9Ugg281YdLSa4sU4NeJNrhFxmPdbb2YaWei5Urkigq7FCJwJigKbY3uW6NGsRRD5qbEeJkXb2ZykJ34tK7Hx",
  "key4": "YtPdLWPHbjLC6yWJrLkwyBSfkigZoNWhQrUFusa4KRY9fhJYEqQjGpkiHUNbaivVjNev6wKyH3ysfghVziACHyw",
  "key5": "2y6UKVfMhqEmEKCqxhptzYpQnm9ehJKap7jYontQhcDu7CbEsBAzekKPe3XkJaXTLZuK6mNdPhh7QotUmtDabhXF",
  "key6": "4AKHfrpCJqETvmve5BVGs28M6CUn6TaaDXZ7FwxyjSWooPtP3hRTCjvbvwVF4V9magAJRVqRutWRUqrMAwjgJJCV",
  "key7": "3NVLuQokt4B8NKqkSQiqN1FTMcPsq3LGxJe2PjNoP3jdPehDqJfTZPkSUmXj5AvFwdfJ7kfuk5bjUhnt2uVa49e1",
  "key8": "412eEtCVphMibmdzPtNTHLtbj1Lb8Lxzg9NukHcQSph7U36YC8cvYvE1NbnudMtqnm59dc9mXR5UvgLyfDL7sxPQ",
  "key9": "RAkNawHgfqcEEd8tpNkGEnhFbAf6jeQivbKhKRG6ExDuyRSmaNPwSMJPD62AyH3b9KKQP6jaDp8nrzcrVJGp2gd",
  "key10": "3B15HB2y9iCUJM7x33mzVRDJoPpakXma8q17FakZxzgys2nH5GtFtKhQ2KT5tXV6ch9jYCLRc1uGRL1SMGdeCNkU",
  "key11": "57QwQ3H2cS1aF39jZo4p4HXu2SWZhBmw87JDVHM2Q1V45ovb42Y4vZhX8eMq1VrsMj7oTSKuWdo6WUtVe8x78YUB",
  "key12": "3isHt7GuSD3u2kSSdX9aa9PZVpqLUcSk9L1ZfRAnUez4J2qdGBH513A8Pj5r13Tfuh3nuLB7htnxqo9nRecCzx2P",
  "key13": "T7rQAbCtvR5hVhwuZyEPtfVnZQqsC6aiyuj7g4tFTFChzJ8Zcqg3kuMfNAVSjnaQQ8Hgqh2NKaeZTCj8ry76jkc",
  "key14": "2kxx3LHLNQywiBQ396d4aGBJUSwm7E7sZDYu2vcm6LHmp6P1vMU9cenQLRkUEDNtnRPmYM6Yo9GWrPjZQ6WVcCNc",
  "key15": "5NAyTukC8QVVGcG5UV6rjKGyKcmXNadTbxJXKDq3dCwrYYJk3Byj4TVFcr24mYcwXGNusQ9c6vHXLnCsmup3EDKJ",
  "key16": "3oRqt52h9w9ytQMME3nZYgU8ARJiqKieeDx1pCzDL9ZbrauC1rufWQxVn2uJLPBtgcm8Xzsx1bxA1oAK1yEum2Vp",
  "key17": "2Ny5Um1tUYHDygS6FBbaVn5zrTzEXDsCVQRYvZpcesWYkdJy6nM9hyJf6ax1AbUfqxpspfwNSwRNqJiZKFpmUjpY",
  "key18": "5NaBSSqzEyvBr9ZVnDX8z9zNoLVDUaipFXyoGvfSgGZsnLJSh5zT3QZmiWH27RoVFyftuxhg9LfDxCN2BeSKPYT7",
  "key19": "rA6ipJKfoWrrRzyPojDpetkczmefmJVxEyiP5n8DxmsHbe6syJdrssj9amovsxDjmzk2mSJG1k6S4fBewbGG9yS",
  "key20": "2kMgT1NnRC5P7WsX66XgbQVHptpUwPFMijCW8rY1pZBbyYyrj9KSb2JDBYx3q6L1fPBAZmFzz3k84rFwvk58eeeq",
  "key21": "4nFjEuuGAKhtJEJide3iSahy4U3ySBPdBdbLCaBrjTSH48WLZdcLttEWiTZX6KDmrQqzH3AsRFeetcf67F6JMJ5d",
  "key22": "5P7nsNYCGFe9p5Ju4ZvcqBGnuCUF9j6LNpKbRhCekEUoRkihcg2YMT8K6RpjawPNPJreznrJXrYxK7k7NPToWAT",
  "key23": "4SW7XbiMHawGjpANi4ueHCPVhnDAqyx5U5r7HEQbi5JoKiAgV3ehMHphwVZ1ohKVG44ABx8XLiy5brSsZxhsG6oy",
  "key24": "5BQsiRFLiwr3AKHQHRsTm87G4TA4BkBiptzgGAbMpZ8yTGY2bWSBYqK6efeHL8Aju8Ar7t29dSXAAMVDNUChdEvy",
  "key25": "3baUxy4GjKw1Sn6vtpPAPwzZsjexS64TnUtSWTHsmjKfacJoPYQaGVoMcSaKDWN9qrugJ58e8W8GjAMj7aHNGq1X",
  "key26": "3MK2wmuzYSZHPHiMaoYMii3yq5HC3qXmBE4y1sBX81kD6ntAA8UqAMr7nz8NScBRGnCycAmtYTJs35CiAqDGpCmN",
  "key27": "3ni35HsCgrPpru5wWwrGwSZy8uBq7EPX8BzpqCEHGXgEXYcSrKEVXdaSXrC1fD9q8ERNPerbX6UaYHSgn96rhfeJ",
  "key28": "dU8qkEwkh9QPmqG5SK2YV3sEn1fgwNuq9aVRbUsXrgFxV6E5V9uYyUgvg6Mp97rWF45qng2PFz9oe3yD7DHBjiv",
  "key29": "3NYh7sY8ErLHcZwuPta3wMTsbBxVKgCLwrKYyfcntjdq3HZ9c15FyryaTZy2f98mfrokpYe8gHhMJ8Y5kZyNdvP9",
  "key30": "5NBH9diKeYKKEE77fk2hy7RHh9SRsaRjVEDyj2kqs5SfKXaJwgPMgSKVic5kVcmbouigsDkFkrYWSagLvLso4TXg",
  "key31": "TNnh3dm1x1JZotPaUsKXeXeEqWWL9G7A2Mf1nZQ9uCnMdYdb6S9FNMce6wyhhFR32q6P5LayPhSnH55sACHKZfb",
  "key32": "4kE7ZuMyAThkXDm1oT6QwEG81mLyjdGNCT9zELWMuAZiB5Uuy9zbLN85AgULWdAQGknKreM46Xi5DRTiucrAdYXn",
  "key33": "4fidEm3Ttn5omhC8FXPfpr39YtAnEPM1EBHueHWYCKrFVuaegQRmfRANgRHyF2CQJ3NjtLy4WVMiuDBQEHyCquQG",
  "key34": "4oMVFkSG4EGsx6xdmxFmXpRjmqAvB3AUadQbQAyzWrCAU1rnkKqfZ5EpZ9dWfuknPZ9PkqMTMj5K3Lgf6GkvtP7U",
  "key35": "2wWqb6jssBy1LW9kg3PomhKdWkDrDsJktsQXqhbvqu8TqgKh27EGCQKUeN4hAtNsunL8Bq5ehqi4AjbjE36TBkmH"
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
