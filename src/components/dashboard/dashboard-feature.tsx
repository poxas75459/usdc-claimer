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
    "37AvxNPqrFRhDuojGoPvtNQTSpRYG5HyVmZ8FNKDtqyKbvAUv8gBUKwsJJv4m7AAEP3sPVgrBWgPFgTqGBqHu5G9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8qwVnEZNwZUWkMWfwowwFAVYT88KpkGo1V6zqgETfKnkVhkZGhYnPT4ebtm79XTBagD3G4BXoj1XxWTLr9R3Yrv",
  "key1": "37nWwehXLEzjiPzQFMjVXdGYarBS77KTwcL8Mb2qFDp39dDp6tGrKoNgjHYVnUia7mQpJFUa9JgBqFqqXwDuFbek",
  "key2": "5DjC2x131MmwCzsgwyYG5iPMk1DCSHjajxDmvDkZqbvZAkMQVVGrCMazT3qPTcuoju1zgvvrwsMeN33UaxJ2mUj4",
  "key3": "24FSC8X5dr2DLSUPNvwQggKdoWN12fbHbsFhT28Ff7rop77HAKp1oiJT5waCYQ7E6hD8PPg1zBdeP9TBmTvxhCjj",
  "key4": "5BQJbUfS1esabqguMXPesy5M2JkiGTPJeS5RPMrMu9vQTL2cXjZ35brQNPrC2PJ5h9vVXAH5ekeSjazj3HBgCoe1",
  "key5": "2VpCUCb9bSxCKCS9gQ9WFbyFia9VHuYXCYxUemMZiKkNgy7bMDE6CuSkpSHvj8LVVH46NQdGX3umkgQtfVaXKJG2",
  "key6": "gk8YDvRKC7AGNfJ1AGh5TZmrrK1GyTG3XExFQy6poLDH9iJWfo2RXhEsRUB2H4rp8oydtwir5gngSHTpq4xDtpb",
  "key7": "eKQtKCZ8BK33RkBbGUs9vnnSuewm1LLR9jbrZcvf39PLHXhN7FC41tDrJookNHZ58tRSGjKb6b9QDj4iRd4bg6s",
  "key8": "3gcLfw6DGfBpcd91htEKzPbku6YXJm3B2m17Gdjx7oVZskDwspfvWR6Jk2K7zxsrUkN1pZediVK2K4aUPmtBAsEf",
  "key9": "482fHBbbxcncnbTSdrUoX3XZR7z6jFobbvnDkqTwRb4obrCKTTdFRyxVLjbffv7kxvKWHnLBfgx5aqN8DHgh6D9t",
  "key10": "QKRdG8WkgNEYVbxogNrgKzLK1MpNHXLCy6a3cT9yvB5UxShvPqUBKrYHcBDSq2gJ3hLoYT5xWryEmCquQhSW8ih",
  "key11": "4uWv1ibLmtWZdheMatmonR3VZXqAsfWLLFwsSZ3BP29NDpdwyBD6HqtJkF4eDEU2Uq8y7Bre6xY3D74PhzcaQicf",
  "key12": "5qmqFewpk4bucrLuyDBYXWrSREDXMVad1HjdCUJFep6iboA2w999kU3mKDMvewMeBWeXsZJyjkBLZDwJqXDH52TD",
  "key13": "ixr6mRXwpKC5j8BqovcgaStMyHXmYmG5E8GgpWqdTDbo5oWbphyi3nwHfyn7QDWFD58pSjBJEkm9JWvzCHgqK6V",
  "key14": "jg5dGbHYTYsKp3gumDpame8LXUD4euVZYZ6qMbBjGiSL1jYgiRWULCA5KBdM6713QutSnJx7tGAz6CdpAVokQtR",
  "key15": "3QnHzFonhZ2TzvKNUj1ELC5SMo92v7ug9ETzWLQLLxDtzpNPUeujkSZfLtCPqe67VGd8zxohsEHqULwtcXa8SNGM",
  "key16": "3s2VmgxVbEG73gq5T34f4QKV1hN7pyen19nEte2Vzh8WoeyPdfpRea24GutXkh2XRfjeGWCdy4xsgZKzWAumg1kp",
  "key17": "2A9SNTSaRtX9D7DWnXrE6dSDaY7qyAfoCFkqBA77FnZmbFMHmKzA57MCoDK9b3CcA7JiJFqsxLeWTkEBdhpF6dVY",
  "key18": "3TpydN5BpqY7fctmCwPKUgod2wFwzUUdLvSgPDTmXLgPaPomwVC9YXjDgFnxTFa4ZDVQHKPHqjQEcJRhSfnktatU",
  "key19": "5qLJftiM8un4ekRSqMNdAVkvxChea6C8fDL7mXC2zF1v1udDJ98BhMBKP73U8nGr4MNFH9Z74r6f4vyVPBjKH9jB",
  "key20": "2pMC6piWRiDVme1VHvTCAWGmzBdNrhXeDseQBxiiSoxzJFsXySqEgj8WxKwb3UFn1rPLDFjJwrrfT7qN5rpVCfSY",
  "key21": "2kdnwknrEVjqtnRnfiJdLdBgZFe2z9dYW1TY1syF8Cgx8SnDpug3HjbTiUEELCHa7eqARmPa3YLX6yPkjpKmVCCM",
  "key22": "2BjF973YbDzP5cdyWbH2QynUzWAY9MuQsH4JdDrgHQdN6DD95YVaRtdf7T2uxKPuErccHwbSbZ6WaF4QN5mjiqS8",
  "key23": "2dcuduZc2FF7khwNf7Z9VAHfCnW2WTCHstn9oX3YAgZyzYfkYdw6avhcQry2DiVjLxkj17yP3FWQ4TYntkQupPFs",
  "key24": "2TzEmjFMVaED6QyrFHVKw8iqscFF1q4sZdc2LLmmmmY55hHEPSbHCAuFpnYiwLDmU2MVzPYuWPeZwS4vRjAKMJ9B",
  "key25": "5LKZt5eQohDHGisPD5GGuk5EVgeg2rBWvBTjC1gB2UfEnYBYPZFnmCjhi3QfwK5RjRgSsxSsyqH7yAf6zUppJuCo",
  "key26": "223grP951TbBZDbT5323QcXR2NSTPwaQVvLv71B4wwbJqjBjAdsTeusWmimDwuQBzLMCvGKrFVumbMN2zMpfRqBD",
  "key27": "5Y8B28dXTiXMun41i324X9Pq6rfJLomzSnfyqtNHWemUHReJzpzi9TKo649KYWYbV3PEYVwWEnzs9PcyFuNKzUoZ",
  "key28": "3soa5Avj46g6w44DRhtytNFf5qTLcrAKtXtoAS1dvn8QKmssoswH6Fqj1S8a4xUCD85V7Nrj2CMZVNEyt4rZzt5w",
  "key29": "39noXVz3CX1VnCQbXdcjSToL8gHaECfXUH6NGjkqnBbXxHZRGbB8NtjAkxgn3Yvntk47xfj4vxnhAQEfvQWLaCvi",
  "key30": "4EuAU1BdGVXGcNr5rVWcxxX24KZmx6Unxn5CDFHACyBgd8HET1n28zFLsUCSpoVnrAX9YYsxSKMQvdmqJ9MrKENU",
  "key31": "4c92jF2gXzc9BLYnrC5g74vBJqrvsDS1wBuUqzQrk1VyeFQZk6ia2Mf9mFh1dy8q3SngVyhrDeJJ8T6Rpsci724x",
  "key32": "d4YD79wxd5LJaTXW9GdkgkZa8KZ8F53UimPPqYktSGK6gsA3USVujKc7C5d7qT2nfvQHEbVZBV1ktk3YJpvzyg3",
  "key33": "qMuRFwQsVsYkSDUWk7hTH2SuqR3JJd2gd92zANLbEgizRmx8Pm1pYSiwf9BBsTVa9urvUAAx4HXvwtvARSdJoQS",
  "key34": "5vojx8hQCdSPJoWawGdy2QtnWJjcrkDgQD3StuEpFrWdHZDFEvm9U3iGsbABjqts5gaS22VPUbCtABxagapG321K",
  "key35": "4ke7bmdWU7Nwgcr4ihsjfy365zoFTQoEF9SUbJxqgxYWqYejaWuFKyDG2HMLZLNPc9w6GZrtES2JWWYXQx2eX99y",
  "key36": "2cfUDExtmt4opejQkdXBY2c7exV1u5bkB4Wz1nVGFqzw5MrgL15XSZfbHxviKNfCjHfmxG9AJcb4wG9nE6zX4Vbe",
  "key37": "5upi2rDHm7uguHALgdPBYA4KFwQ8gX7CBNEVJBn5jGf4oyV7kMTHandva3XhfPuxRnsqmuMceEim1J8rwA6zKM8n",
  "key38": "2yJXkkY9CCNQDGz91fbdMB3cjvAVa3jVRaic4Xw5Y4jax4B9oKPpSrxLrYLbEn4oq7RV5cQsUso5uacxBmzSossF",
  "key39": "2iJ85SN1zrgJLiJc957aSZ3nN638UJsYq56NXX5QJ5odMgKis4XthdYyeAEBoWRcbTohdvQV52XM8KDX59sgfsxh",
  "key40": "5j6PadCjXXVWZ5HLtubqnxXjubEZq4ijGMAfTbouwKCDwjg8g8JrQJ87HrdJEpFYSGYejmTJtewS1iVWEhYBDvad",
  "key41": "5rw2m9PKPsGS1imip9P2RdD1AxpdU64F1PjNshfbZwpTgG5tHpNqFwcEuj6y9kyDHvMbHFwvhBY6LqjAXuTQqRXH",
  "key42": "pprFmkrLpNDBUg2QW24joFUgiEZJfJEpGcwKSz4fTJ8bSwwGyBDGF8UBV1pnGxHZcQJeU8ga5HFeDUW8tF3DJR7",
  "key43": "2igKyrnS7Y7sLmy6RD8fhU1c4m4kydHuNmHSuKL2oUhkrRhZjSCTDTWTP8b5NWWgZ9LK9rhX2L54g2X6s53RB6g1",
  "key44": "3amXvx3RKywckAueSHdWXzdWU4ypYzFuup6QqAzGEjKCbbqAhtrhPj9x3rdpnQNsRp12zKvv1AXCYdzTzRPtvKoK",
  "key45": "3tW1injVnALohL8GDo6P8BvMv7Lo5Pv1HTWj8eizdPhW9osMmr4vcqGnai98TcuZaBCk6mhLhQwn3xTkTADKRMVA",
  "key46": "3ZV9i5n3gJ2hv8gjQ5yrBRETtni5axxh3atMyAqSa8drQvXnAepAqb5LG7TwtJnJNp272vdEe35dZfKwRuy4hKV8",
  "key47": "3x3QM97nw45xpPFUFRfyYu86jXSaZ4bTEGFA4rujZqWQ8KXmAupeFZusrpHjroT5AyGbCexqtwPgLRmwaJWqzFuw",
  "key48": "bt1E3DfFdjhjkW3CJAVAWUnkamKNNPJJnY8echgrJh275Uaw2LdhjrjhbjA5JfNkHpQc6bXjpuQYuZPgBM3dm52",
  "key49": "2qEHbVSA5dvZYNHdSWEfXxBiJdU5hKKSb8RckpEoC5ZGCkUvzLahRB9v5rSc73e6TrdY1PBYZfURsD3HgdRLYUUM"
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
