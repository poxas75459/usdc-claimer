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
    "5LZiQoESRMZn4yPuaZwRBxGZKiGEUzV5kNv9EbjRScgg4XrJQR7FbSHBJqtx82jUDGC4ceZKNxmMri9SV83TndNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BoJAHcD3R16YRjYVjGWgRQ55RrqwiL7VB4zUX1igcg58r2BAkDRM6fMXT3teeHg4KpFr7LzDe35SyKgcp48Eqpf",
  "key1": "2j5tS4Qt68dALYrGkvgaD5MKhhAWW4BkGJZNg1W3owJ9dTQhKpwwi1kxEeKcA3SFJXwxMPLF3KjGBGckRmqasD3k",
  "key2": "2qkCaxz7fKoPDwYvEYDbMYVx5WvQW2TVaAc9FSEoYuiQvDTCF3XKajVJUPofLCKJi1Bd7qQEjfcsmnWgDzcs75h2",
  "key3": "5mhM36ASpnacgycVXFZd3ZyN5DTYTMqGHeSzACURmRGX97rFsDq2zvrxh9gNXTNR4csypUVoc3DD5Szy1zXFue4u",
  "key4": "3QBK7pDcib8NhLdp2DsiMAuavuFnnqK4NQxrU1dKDrGvSK1PDYLM9Jn1zoLeLeH9m44WsfvYLwHMgbLMcfgqp4Fg",
  "key5": "yfn7MmmK1YQHbj5wbtESxgrZH1eh1UBiNPRtsgPTF92yErZshMiUEwrB3SsMz6ymsBoHpKjg6yiJN4ywNRM2CFJ",
  "key6": "qK84GqFXYQLWGQisVK4T1nkhjJaoxjdwZXnbQLUjt6BpFURUDQDYXD48tfaz1ammhCr75thp3m2YhZgNpU4iRzR",
  "key7": "H3aZmEZDy9ZvQsVHLfpGB6Fo2QyWua44FxWYgDdtgevbpSbxjyWnFowLj61pcPycTKPGBq24Ft7Zg8m7HYaWZ3P",
  "key8": "34TiWcaJhKbsyUMsuYbXJSqaZwWsan9mjxoQp13r8QUvg5KTuPiH3hfTEywVCq112k3mXkYDXrmJEGgPv1gtq6oX",
  "key9": "3jN6CLKtVFkWHoJL8eMPZapKPY726LBmigcBgcrQzztRhqBYHg9KvKtiZkYJhCsjCMYbdiJifc7pJWV5xTK34rbC",
  "key10": "3R5f7EadVYp7HWhNktS16S1EkW6bbHyez5RqFCbCd3QiK7Z3XNkJWQpoDYNdyssABFHGBsoyhsycYHYXKBnEdARg",
  "key11": "EnTxmT3KMkQbpLTux348aNQSj3q7oY5e73GUf3diBfW3UTEG2bqwb4rDirUo57S9Grd8nfue4H4zDPpDqFf9o4E",
  "key12": "38kLQvnjsvBZLi6TYj9FsVrDEhvEvJg94graU9dTDhK7bozNaanpaaWF6kXEiyS2gBQnB5AREQwv7Gkat9veCyvm",
  "key13": "2LjPHXF9KxyJv5oHX35JjUXcKg1BmGdyHvk9MM7KZtCsne8QFhTLRfMn5oDbcUSAN24W58uLjVEFTu14tZ5tTshD",
  "key14": "3Yhgws6UGF9N2Uj4FWrhnLCaoFrs4Xcs788tLaLm2HUShLfKQAJKZkp7ap3AphRPmpHkyTSqgeWYry6JNfJ9PqFL",
  "key15": "4PGJdEjGXjYvoU26Hgz7en1tGQr67R9BMYk2ajP8maptPbwmu1QfVpAKYatrE3nCxHGHAsNhZufr9rt7ZnUfxGbQ",
  "key16": "2SAH9GRhj4gukPT6z5djj8QqHcsbcLcSYzSReQdaq41Gz43aDwHLDHnLco46vFsfSu4uLujrxEqzwmMpieThuG6g",
  "key17": "2gCMhZyyQJTfSVg9dHMt1dWcaiAMHUmVs4qksE667RHZZBqe9eXKhXZBJua3JdbRxK8VbBPJzXYcssAHS8VPhDoV",
  "key18": "5SvveV6fwtq5weuT9JBNRjV8hACv81dAv1zDMGmzR5RH2rKbTqy4N9nLSYsT2BRFVADdp3cnNytLrQho7BqRkyBJ",
  "key19": "62H8BYQGp8EkZGFqSQWD2RUfsnMWE3JJYJEuxswnMyZprkqzfnytJEvA7iBCNxpSkihFJgRsf6k7QFvtRPV5Rp7U",
  "key20": "5grdf2urMde47Hoy6sVQouAdxph3KaNYDroip9rJCBZFACFsHbjgr5GeQ1M4Txrmk4Uq9WC5HxLkVGTfaCcBfZEo",
  "key21": "5qoEdfFsc4EVVWFzrKrg1JZfPxRSznQa9t1J3NnTrFCg56PrTwCQL7yuG4vdgzeJeurjEXHgKzkZ8R6vFjS9EZxC",
  "key22": "36wwRf4NermBvw4HQRKFuF1TntaVjujMwY6rxezHv2eVk8sTnyo1bimukQvpTkNKDNgpeXuiLckZFBQz9CQfkgq2",
  "key23": "2mEQRWFqhhNhTAnnhXteeLTMvE3nQTdzAcTRB9rchdv5YGMS65EyCV9mimXmvv3DVtxGM4vrs9VFfeotr9qFva9F",
  "key24": "4geKohAFs6QAa5szWHEPP6wpwoACqYtyZhntY2tZZZLEtpgyKMfX1d3yviLKCSirSaK2hX8wASZLsTKyxuomU1NX",
  "key25": "5ydcstMJXxUWGY4uXNoWi1zZo9RcCkCQt5xR2SVqny5gsRUoJCtDxVMxRnLm4Q7g7HYdgSRUgbGjq7WotMo2mwb6",
  "key26": "4wkXobNJdTjPo6xTPKkvzzwzbx6c7nfdGPxCSVyx2T7hSEFpyShh7wHbMzhKGvqEGmqsNiEFLtuG4HxwPoTV6KHR",
  "key27": "5JGrHAY5Sq7Ms1FYm3CtjpmgigFMUseExuBr7NJSJoMSNcuBymrq9EopgKpRZx8zwHGS7hYmd4NkJmze67Kmm6me",
  "key28": "27oRwZpSmJYMw2ESWV6MABPTmkdoKK9AaNzT3jWfB4u9Hb515osxRmHt3vR3B6reb6fRaBQgbvm9uUHSvvHK35zA",
  "key29": "2dWz1Hz96JbK5dteWeeZm13QZW1H9fURBn3hUCeRrF43et5PikdRaqo2FhaTu6PGjJgMaVeLGXUn496qFGkSswG4",
  "key30": "4GqMW7PxoasQF4sH6fZFriD9vtotoHrnNSPajUDk7EiqjZUotyF3rYwYdWkGoF5XNUZgQ6XcG1m91YBWWsbqx9pT",
  "key31": "5HCCxWNqdTQca182om9rThrFEMB4DuXqYmVMSDhAeG9nF3u8Jm5n39FWzMYZ4vtrg99i4rZyJc47WGjXnWt5rQkG",
  "key32": "5Uviv4a2GwnGkoCwU5MusgGGhrjaZ45XF8685t52geSAW3bNiZbLTZnsg8DRcjKpSpstHRCM49z5kPyEaJKhDBVx",
  "key33": "5gsL8NNSeamQDV675RBH2qDkLtaVWR8ENajZuRjbZEYXXjWEVurJfta4WHoopSTKjGyGXyeCEsV6S4v1kK2vCyNR",
  "key34": "dAudjbFdiF6LwHXpXpLTTUpq3k47dLLhosMGzYXus1u9h441FG4LUiJv3udy44X4AfsAzGqgaasEte2p23pEwhG",
  "key35": "5ga53cfNFVic1HNRtkDDLo6NSZstBV6xorLSU3XPynsKXfpCZfCgXNtdsvtgCYi7hqrKL6Xqu3Vodt6sSMghcfnS",
  "key36": "4mEZz1Uk5UopM1wtutYLkBjSZXWG9RTkxFzSyJiwUDDbKLWzJh1MzBXCnUynG1GjRieCbhPi3YpAmsiXZ7pqEkKv",
  "key37": "4s84PUctwFqy5stf3Rg9vaf5qJstwQcT9U2N7jQGd4VsUR7Y18mGkoprh3mEbx1dc8Zx2rJGtHW7RhntewSJQY33",
  "key38": "LnBCvUJFpu74DySDT4gGmUAEaPkDudpv1YzHnUerjb9KJmMwhZyYtP6oQRHRQ4GHTFB8NHxPXJC36baUdrqn3H5",
  "key39": "5pQntt4wChRHKv5A61Yucf9zVZpFr3DvAs5WEBjcAjhDK2F55xfE7Da9QKwmtgQahcyYbEhb6uvKt1YqGVp7ajbk",
  "key40": "3UoXamz79UsuN6qXUNGiWgQsGJg2xmWiMn8SrjKuZ7BU4iPT2ra4jyxMmHoFrUbmZCUTCqP4YVGabU1tdGjBEoRw",
  "key41": "2o8Nyk5GctnbLJkTQfg57dB6VYHvNbTyJj2FmnQm5J7rbujtfKKbKQg163QHZojTPfyGchrVf16pbejCscpnJ6Fd",
  "key42": "4z5V8aRQgzaaTV8wHu2gHLxdPQRgSCUmNYaXtnrwet7zkwRBKsgLEhBkaCNULwZm91SXKWAeR26rBRLLZxQhfW4P",
  "key43": "4DVN8ucEhdzJLGyDVwjc17ChurA5CxnAsNPj4DGyp9BVhWa9ZWFxJwR7BLuMo9AavAACEJvThxtHhGHcAT2wX3zb",
  "key44": "2FgAvrzs74VFVhUPTQT96RQx83ESHvT9oabR2rofdat45aVohcf25U36boJYjN9Pq53u678sxQ6NgohgQL6kiZv",
  "key45": "37pcWPKKZFpZoPh5Ua1C13v2FhyLsdRhmieYUKH4hXqxtsVqGHXVc2QrWkNqBHwsitRnjR3FNswNvi72Yk5WjJbC",
  "key46": "4ySu5HZrfnw7bksLQYqzzdqEucdeNNKzC16VpzCceUQzjZ71yVAhNR4RYsqRPjCqr8WR8ERm6PbUnS1jXY1EeZgF"
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
