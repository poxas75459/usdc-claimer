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
    "Km3ZuKPrztsdZanc9v2irzaCAqJwX4xWo6JGcSTMkAw6Zvzej5ktEHeto8s33Nt4549svWFKoFzA8PgBU7u41kq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cT55gHizh5decfffPTyj8sU8BeFPjUbfqK3p9LH9iEyCSR8t3Exr9Yyo2iyW1GcysAhQjE8ggrieKn1gm6qVbmD",
  "key1": "3xoBZsz2mGnwRY1KrwqqNBscKR2LwyHGkZBpVngBiRsPoavat9hkjxZHdg9wRdSpP6DjRuVx3uN6umRMjTDhXTFV",
  "key2": "3Ej5UJA35SGwbqkWSfrYAo6A8LDpHuvbxGTFWmGPXZgHqTFtZwZvHC5ZsHK3Mhj2mHBuSF9XELm7ZcjdzwcrSV6c",
  "key3": "5wQCNPeFyohB32CPX3Gapob1AfNgZGvo8yydCZZCTyThhS197ZTh923eVryWjyXCYvYgHZ3H1fVqMinnNdXV8dsZ",
  "key4": "41rFAYTB7DeZsAxNVHh4cPYm58eMT3y4od5NZEq4ZdgQJECVDMv2LZ5vbdJZ2FA9P9ao2QBe4KETsMtJpFrq2b9K",
  "key5": "2ddUzkKzqdGcAPMnSy7qbRQ2qfjC6fWGEnu71rivLi6hkws1pmU96oRcqapp5DpJYN87LcxJLYv6Pa3uM88UndCJ",
  "key6": "3h71185FRyEzVJ7ZeV9AGDGZofarzmpaArw7reqPuTGUNbvHhah874i21kt5XVcPcEYBmqC73m8AS1JPF4R3yUdN",
  "key7": "2tUGumFpefKnP5Q7mA17WqR7kn9DGrhvHUXrSDeyT3wEGbziJgxnjxpr2N3SHpSnF1Lv3zM5AXSGyvdLQqTHRnTe",
  "key8": "2LEJixv4xoRiy6jbfehWZtEozUYmG2tfCDpGhTLoKV1esXjVXfZ6jfE5yQWb4JAdabJ1B4861Gvz9byrs6cCbZVq",
  "key9": "53dt4i6abJT3JL9ZLkHrXFBwxKhX973GLLJEJ1LpuK6LL6ZQQ8UEPx9oijveCB3ro17VgFdw6nJDXHshn2RPZVEd",
  "key10": "3dLRbEsomYePQzpSW4HsjJpb1KHL38ACkjKsWu4kzZFRgd2eYeGCTugPJvC9eBs7gFjpXHMCXhFmRHiZjahtLJm6",
  "key11": "2ESr1W9VUMHKHWFjKCK5xWjjpYnah6C1gC4eHXs5eZdTRE2gV5NjhUmFjte8EZjgTGzAFY3CnnVuhiRX1jQgFgJ1",
  "key12": "2C1L3h1NWMGmuGRbm6wjxRScdmyhj41bXqQ7ehB5jAGgNprYd45hvnzBRY4nQ6Fu79bG98Ta66bAPTtJPihj296w",
  "key13": "4mhqhaWtMEdxtULm6bKVfGG42nVAchDTiSn1dzhdwGpgVcTi2rzknEqs89aT9tjRjRQYoyhnyZEijgLi6EaT3qy3",
  "key14": "2Vndxqr4u4BrRkH4uPQrzT74W2Uj1m2QiRyveFz1kFyiCiv6BzdMx5jJbWU5P2aG26H8UaNUa6Pz9oDmezYTF7UU",
  "key15": "3rp1Yrc9PvQqKyWt9AFXBCFa8DYpDZAVZP2S41f6QMhPLsJK9KkagMLyrTiDT5Cb8AACotAZfuGabiPnBm8AVdRT",
  "key16": "43gjQC7tZwVxhqQZfwXCK8FU7D1x3tFFirMWZZUBeiDuvvNGwZEP3RUG1HGrED5jwyFViqNrywSkigAFCrN7qNyh",
  "key17": "57Cj47qxM4yq1Jq3FY1hg46bbwW4xuiAWGe3omUo1d52TxtadYRnF1p93m6PwgKFxzJjkJiruUNhvujTFH41p1RV",
  "key18": "5NTeUaJZa2si6AS3i3Kzgo3bcWuXKdL6TTom7JtNUh6E6NsArkoiHmk26jruDqq8Y8ccDD8gGfD95RcCmQdhoVDG",
  "key19": "4Br992R29PJfpw35DjrPWw6duymSUHAHGK5dRCk3umPtQhNA5oBii5udVedrjFFv2CkJthduyFKjceXK6Pa2MKEr",
  "key20": "3caFGTNkHQ1pKxi2RwKrGSf47jgS5rYuPwQhhzPy3xhvv6RaX1mDvjedaumc463HuihtWukuaRdWVAuQgrVAHGbw",
  "key21": "2qPTkYiKwrPjcg5pe8HxoG2u6HZJGiXWpJoRqL6DT6qnRLhWrtJhA7eR2nNd4yDQFGuJwRWc57SnV57DPhaztbo5",
  "key22": "5S3x3J8NdEWL39Wq5ZPzTYiNJhpxx5wSV3rdfcGQoUkPcQJ9sg2bmDnR64UxTvFDY7H8c2tWGGdfPdhBiWvBW1Wd",
  "key23": "qLcbCAEE5pcin2tQJ1G9ExWsderfWEczxBS2bpDEubMiBGQ9vMmybpQdoCJDVh8hexbufD8PPCj5gb7aC9QHRZo",
  "key24": "2xyvkDARToLuBYxQEr43xxBnSwwSMR4abW2qWk3QdnUmHyAs1PRg7pDipZT5Upfsi1MygbZnAr1FHeovqdwxzAzn",
  "key25": "64DjnaZTQztyxAJyViqfS7M4XeEXzwbQX2QX692zdadZkfkSu46gpRZq92pqJyRRbarmmihgPqBK2SpeuvoLkCoq",
  "key26": "5D16vuD51sbUJaxGnRHir8WF9UwpWLqJ6e6sSHzDLqH1o98Dr6DmJereyuPV6bTNQ1FayXFRgv9esu4wE8gXJ4gw",
  "key27": "2PTCLnDGFkYmqVQZQ3Koswn7TicDXcd6EQbo4WR3nwhW3B1Z4rY7kt9MHqkAwgz3r6HR64tjNkKfBZdrAGGJTYiR",
  "key28": "4cR5RmmJRU2napJ5pc72SeXWSV4mA23CuR477c8VRCD3tzVoSauvnYF7VX3UsWDHfQkg4RDPd28JQnUm4Uv7dbCr",
  "key29": "3ucbMpsYagDwJJ42XHN369m7zG5wzFWFeA4UmfDHeyFYHxL4Tayp4LXaDR7Yf276YocCTCYvGefSDETh3n9LHg6q",
  "key30": "dDK8rTBRRJLcgporXe1ySkYsaUFqA4JNSxJ66rFjkBDy2sgCXrodWfBhWWEVd94M8K3ssMa8RJGwxjjRq4bCexw",
  "key31": "23SjFMsGQ1tTeDGmqmSYxLBZqsXFmk9fEz9ZEMEUchUTgy5PkGZL7afQ7GkjaUPD69m4vnMY6aDYYEiUNJfkSuqa",
  "key32": "62XREdFcchtyBJMzYpDq4jKnXPc5ENtv5aBP6JQeC6JZiC4Nut3qvkFDmEKnPTVJ6aqwvDsCkhVXAisVhkVfBSKU",
  "key33": "aUs78zPZzs7qiSsCxF9onAApCzoa2aqBKk7RPU8t9du8bQtGa5BLcDB3NmKUUmM4JfQoHxjmHmjqUVUeD9ETJZo",
  "key34": "4qmJdZjpNh4GtWYwLAJc8vTFdEyxExdDgBgSF8wkLXkkpBJhdo3G6ELcoMrKW3XegNsKzHvU3wJDGdbmgLcnUSjX",
  "key35": "2v956MHTh8BUaVHKo3j7z5AjykrXNNhEnbFL6Rn6LG8VjyatZhyVPgdpUc77294BA7dBnAt2pjxsfmg1eRa67kHm",
  "key36": "3JGdgkkuECEHnNSNvK3b2WKF5LBj7rcVSxd5Lv3TWybkuxhPkKxKmceg4qAXAXDtzm4KmXofmKuDX7AAyPUNtNXa",
  "key37": "4W6MTBXAgysEu65EWNbYswHeFgBTPcLjs3jP52iheHQCjqgzzWdzFf6UZyNPZw2XUXPTdVAUcPvYHdWqZK5bDEjo"
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
