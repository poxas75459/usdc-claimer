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
    "2Zd8GwTjzBfHSDcaRLjB2xbjMutRz3yBi1kho2Q9R6M2bUa8LXgfFqURhjtb8beAjG7KF4EPAY8JYLo3222znehX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jK2SAVqXtjQy8ZGA7aGvKyET6zVPpWq6wodmPVxzG1TW4Gdf4z4otxEfbUG4yq2GZr5Nw7nr4cuF4zrb5K8a62k",
  "key1": "4gFXttSMFm4927EFFUZKcCgzGGWV86mKsKPE6xYQj6MUfoLtWhQtp1T1fWAnPGaZ4CrWNiqXa75bTUfrZjKSLhnP",
  "key2": "2nuKh2Azpe3CPmrXWc1u5RfDc7XXKjfmB6J9aKnMarzTR5FaDnJF93kWkvztcTFybWvoU5F45WhxLfTj4bZG6n3G",
  "key3": "4uz8XBjbZZc76fZUvUKWvgrTUBC6muE1emeygAHUV3v2DQM4RRqh6AH6tawihHudKnj9E1Sau26Jh21k5aXZsSSe",
  "key4": "5eQcQbQ1uBjhJ6gC84ZiDVUsFb9AQmuffPsMqk62Na6KgtSRbmpigqwLifAy4hSppLS5P93bdEMG3vNQSxi4E5j5",
  "key5": "3Qvgetbu6G9b51qRL7TGTsMArUDnovmAxNoHyUmf3ss7mN7UL3yo6rypdzEcLJTpLAfcMxemEMjw2oXsKuUwfzWK",
  "key6": "2xvzCNG15brLtMgxC7WX7bDccvXogwXHMbUXp5NUWtUMWkQW4rLwiPwjtBhP11e6djdooNggqV45Zmi45a7Lc7zv",
  "key7": "3iqQtQQzuS9EaNqXSPjmRejNwcVdhYL6iNRqMHemPbG7pYyNwgn6R9BSoGxrxB9ejUsqm3fiYy83Y22HcYfn3Qqi",
  "key8": "44BKN5iBsSV4Bjc6F5nWnAbw5QbAmL4B2YBJq3WFGHV2Lqi7NKmnqgufSpVADpBrtYPgwdUVhdPeg9AcHCmEoqED",
  "key9": "QFhoAM3ZfNb7pWQQKxPuviwqb1cBcMBzuSiERNBab1FDDSDmZcEBG6yURYb9Rzy5VSYHYPAdzdgZ7J35DMkAiiN",
  "key10": "2qceqeiGcaoApzfdrDTekz73hiitAtJtusgPrjFBvs284rqD2Q1daiwH5MUUwSXY63Z5hMSWXDpib6h9Sb89sgAW",
  "key11": "5ReZD9KhL9CbRHnWZYbGuKLdS6Fmj45US2AXZa3ntoNuNr15ckRGVxKnTeJ5ns3ewfM9xk29K1qyFkNWdRZ4suAs",
  "key12": "5Mmuuz3YXaLYDYtfD5CwbqS8CAJTZz53Jy7f7A6tdz2DmkhNLjnDgmuTbiY5UgsA1VmkEyN7jWCWHop9auTHx3bq",
  "key13": "5sgtETpwowZz9XEAWvv6HDuSKWc7dHHyJ3geeEsp44H4hW2f64uV98QU3rtR6XZdmHpLWvFNB32rjxPwjbQK2Huh",
  "key14": "5pbZJiQDaJFW45Z6o49X4Fv86a4nE9g3T7JzqKPppt9HNyPQW3xt5qdjHr7hLPUmTNWF22qkW5ja91t4CkKATL4A",
  "key15": "4HRhtymcueGG9co6zyAP2cGysX1jZAqT4yyWBWkY9YqhDQun669u55vNdkXouMX1E9KBnUkPuJUnnuTdxBV47JHn",
  "key16": "5YuGjLhqtjAjSxBxTMhwnQ4qhcJG3uPuWNhivJoZJTBzbHyffw8ZaM7749pcST4Bs5YJvUEAcqXnuwWWRUTDdexk",
  "key17": "3aWAfXNJTJDZSLY8PHufohQ8TBVg9meVTfJ8XbvoMPsGAAgQUAoVQoc3zZ7sxd5F3fX46SKW9KjfutJBzsZN5vJK",
  "key18": "29XanQ7yy2cmZ6YLBVzCLHSHTe2e2rh7WYLKptue7wMA7RFrqbGhGhKm4QhgDF1soxPf6ZAPnotfER2LHuj5DZ6t",
  "key19": "274Jd4DntiYmgZRQi3F3WDNG1mvhAnKMfCAkxj2KULJFH6qztUeMpHWGeLW27w6epFZTSgdVzEiLkb7acA3XCPVj",
  "key20": "5R6DTeT33Ge11YKKN1sAcxXvpeeFCJt98W4VSMHGZECarMiqEpgEP66Dcm9np5aT4quGLs1zDVnCkDyeFtkU4gYg",
  "key21": "5fypSywgvhfxpshLtWhyqdf5VhBk37o4kxXCSspek4u5VFDiaz4DQQUn1FTqztV5nBdmRXjtNGLnctx6f9gUBMEy",
  "key22": "3K4JFzprCtTN4qdfPsPurSuxQzbFvjRNjxEAKXY2iijjPPTCVP7FACWQ8BHJfDqoiYBChECamK1GLJH9ZQdLeiv2",
  "key23": "5ufcMUibNJsKGecQonsJKSaKEzcSKqZJmKnwakGbCVPbwXvKLoDMMkZ7FQX33M2UGsnekBE7XcHYHhraSg1PcbhB",
  "key24": "2dfG3Zw293oB3vBCtZGuCd2g3z2pQoVNNwZiqBenkesiCodHbG5ckMmeqorJeFmm1e5K1t66M4tiz5KTe99B4oLw",
  "key25": "3xTd3J83gXZZdC9Hcq59eHU7Jem4PruRLGUod6wgsb51KdMkQzF1sdfDoi7RBqR8pvYBNhtLQLWUVihfMTYiZrRy",
  "key26": "5ceHfM9JXkRHfN4JuSAonPMiaX8U5WzKDkFPxw8mhs8bpAfjYP7eowdAGo2r7nASMk6p9AVyJcEX9ZNqXgwixFdZ",
  "key27": "oZcXFahwUZxvgUkiMq75pUQW9ndjkz34WeTi9cpM73LHApzrHaRWbd8hmfkHCGY54KoJ14jus7PB9DwE1Ko83j6",
  "key28": "3BAUUfmxKtASsHthBvsv4E6L3MVY4sPtMrnYQ5kfUSTCvqrbjQ5MgSjhJZdzifTWXfinExjpJLBz1r6Jj4W1AF5Z",
  "key29": "3PgRmzhSmf7PEzgevEU7w97GbgKikJyfAULjFRV2JKysVBecHEiWNWZz177YhNKZJ8wdEYzwZj6Zia9URmPsyFcp",
  "key30": "4RLHoHWLFT75h3jEkMb7kHU6nCQT6iNQC2cH2aZz5RAkDasxhTGVSKr75Er3xVRZuFpmcJF3NEgR2TYxfEjU23XA",
  "key31": "4GjrN96eGP8e5wC2kNtPLoLy5eWNBZXG32c1YvKEjtsmDphsZV7B6iQ168CeWDVt69NDryvSxs8ZN61wZbPGYzFW",
  "key32": "3tXqW2YKAi8hvDn4B57SdxDeNU1hpVqQ1YQj9jDr2HaESV9N52hGtTzxQt8pTEfFqVS1mUMWqx4kQFzoDokGmZrR",
  "key33": "4FgLzxA7YjC48XGtKKFWt74oCeF9swvzekSPRnnQitJ7ZJBtH3Khk6hVxfPRsjaCuKwoj35ygBhn1HJZ3Z9fWytM",
  "key34": "4cCPxoqCgFubMi1HMeZLzmuvYvy7vsALuUvqjs1MUFvWwkBmmzsmqRa9Pv9bxgPz78iNK6C6B8fV9nCh3r3n1ig8",
  "key35": "3J19GitywFdYTEocFgPQK8SKzCrmBi35iTsg8ro2XS282jC2zbUU2CPodsqZkfjpaCsgMJALd5KLGDAbVnmn1y8r",
  "key36": "54yU7QVfSuVE88nWdS4iYsEiqdzzjNN7ZhJM9vakbdNRhNoyCTsbeRXS9V5wfHgJE656RQzPiSSDU1wPb8HCRpRc",
  "key37": "3c9XqghLAaUr8hePvkuLgfM8pdkmjSB2GxXQiBwWmVSEjU7gUupKR1aHiXGXcxxNaYmwsVBTq6Vmr7pTFe9FYFX3",
  "key38": "vZeGfMm4rgtrQzyBoF5pfZJeqjTv9wyEva5YbenZRipd2p3kB8jXvRi7U8NuKBRC1RU5Mz517F3LBT88dJjt2s4",
  "key39": "5qi9pAvNuHKa3PK5Kqoat7xgHfmWV7DHymDuuJFhHHKh7TBvZoKUQ1PL1b1uFSUoHGFETaB2KTnvHREAgFG8ggF8"
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
