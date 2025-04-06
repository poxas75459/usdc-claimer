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
    "2v3qkZkGJa5K3WNV9WDUGvDTe7VmsJ4xp55eH7hRfUX4pJxv1F5AFno7htjwNUzR1kNzSBABhPxgKfyFWYumKNvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67KQf53uRCPbu3UdV9BZfY3JB4Fgbf54aHbu8dShQcrfDUJHoBpZnE9MRXwgisRDZzmhQezxvGCbBZ2JpvZBKVwe",
  "key1": "2xAe2HZZdfyWbuFG84jkWaan8ThZgLjG34Jb8HQX1ZWgb6yTVNyVGJhACLswHBRqtLQootzd2tDrn4KfSFpfXhqj",
  "key2": "4fF7eYUiKpaPfip1pUobpoXEghuJEMpNhxziUWASY9AMm2c7FX5cAGj4M9nCt734gm62Axx2nycd8MqusPHhYqhq",
  "key3": "3qPpJZ4QKNTYpzsv9nK5ePq9gS1MKhBSz97jHbfv67YDwMDdzGaFJU258MaRwJBX9RZjKetGp8SUYmFiVWcX6i8G",
  "key4": "3LHFLwW2pag41cvejY9HsW1eyeFPwe3fwzY7GQzAtNahFz9j2WjZ8wGRxWozEQwikw6Q6sH8UQwGZQFRbFJrDWBi",
  "key5": "288gLxPYVZPhqRWcQi63oYhJaAc2YjDTz631jioBZ9TWhLRpFvxNJ7RsHXXEi3JLWESGPkTi4FNhrbqKH8JjNdb8",
  "key6": "21Gr8YYwgXaNMBw6WojdGvPS2HZY1BX8JxxauLBpEavwSmRBG9iNsqtuN6oXwxkBHK8qCjeDPBUPjLamFuKcuhVp",
  "key7": "63VML6vc7YdN4r3iuy5drdoZ7vG7bP2yPjCzodHdmXBFszknGg7sThyM1hGHCkeS3ZRtgEKkatWeyAd3LARPUvy",
  "key8": "rodAMFyV3QKDvSsSAXKweSHCgtYVsAYPumYWd4snsFQprLS1K1rinQcTsY59habXkdS56F14adAPdtkSRx1f7RY",
  "key9": "56rhyQ8d3tgkYnDG1MGDMS2aoNJ717Gf94KsMUVLgyFv3LazzbTG5Sih4Qq8C4MSifXHbzHDDmwfi7Q28p95eZYZ",
  "key10": "5rfNEndHxZfYm6quw3uPpjfSyAYF3jwrqeaA3Nsn7YwoC6npd7vEFXU1a1qX3Qpa86rBdFqmbKcRcjSqfWNr7vqV",
  "key11": "7kW4J14xQozGZxHyyeDebmvCAZ11j17svenVbWZLtrfq7Jem6D7zhZGyxmfLGyPvce8hx1w94JRxv8apt7RQbYj",
  "key12": "2rNRiM2M6ieojRDkeAFzuky6Zd58HqP5i5fvmuZDUVX3yVy98zdvgBTRSm9crzbafpJJjGHUa1voqCGrU9cgioQu",
  "key13": "5JawBH9GW48BCfvUCuC3Eee2MQL6VEp8aTHV4nuSCt2bjATSCpycwXBPKbZUDTUomNftPKWbrTsqJZC1KSPSGMa8",
  "key14": "4CaUtTWTbBA5kh7r5bmjvCot2daJbqZWmK5qE7WRZqXKRDvtfeZ13PULUikdE9gK1bsxoJQr2EA2Fmq6298qDEcq",
  "key15": "54efFtASxGd4femFCgBSufsB9dTvP2UpGUbsKaM9szd1rmV8bmd5LAmFbM9to3i5dszddHWw6Eh1YXrrKehpfDvG",
  "key16": "3eJrYTH1zSXif9Kweu7U6nxAn4dZHhmBwhVBczHskCw3XxgmXBS3w3z5Znqy4h4Nznf3NsMSVaWRT2hmtJkfmMCq",
  "key17": "2eGC5AHig93BeSRFMag1hsHCMp7tywC9xrZCbPBk1HmJvKKrbf6ibty9TYWtX9RKNjTc3LDBnU24mtENkSGizoN",
  "key18": "2TVjWKB2KJrgT6XNCXbadN7hwhm2tKWJTPAnw2fdRwSVPbQ7q5j2Qh1p84jchePmbH2q62MWKL5FC6qteavMwoX",
  "key19": "3QnAY4bUQmw2JHmMGarWrJp82qLbhU9n2mt7irUrnGFHGGmKeHGaaWj5CrwnNC1Ckm2vcEXcAzxigwTgXvKLN74Z",
  "key20": "2T33zJzXdWhWoxLhZtnguKi1ECvng2aeaFKYvDG97hnhcMgSD3xJwyrvWKpqkHy4Zb8R1QdvwFCpdN7rDNpULNMU",
  "key21": "4wXdMdZAe7MXHSLThsub4vFYPeARNKcoz6N3PMxuCQJixkqxwmeB3tVK8bPzK9XXews288ixCWHLvo77nCcxJvAS",
  "key22": "2QzrL9FbMqeSNvB1xiFZeUbSxfCtThpiyBRs5CGPcW1DoXNCWnHXb7KPS6jWPakR6c8hHDPQAAswg9ZogaqYNe7a",
  "key23": "2Jzno4UnLHiB2zPZU35YHBKDYVnqHCe7gGJwUjSmQcthMxQYLsJUHAz9N2LwmAxYNYHcaUG9Jwzrw3waPX7y3wjU",
  "key24": "3DZ9eKgMpA8verfaa6ZGv2iNwctjdjGuKZhQLbMdAQfCLAD72zbPzsP4pFh2HmYmxwao7692YeNRmAwre6QNAAMV",
  "key25": "24oC4ozg1SuhHZuhjdCNcpsjuyQNhjRmjGiWBHYc9FFjRJUkdJgzB3YworoWj1JnttafTfTL8fs2MJAunAXjBPzD",
  "key26": "399c7Kq8W66w5VnVU8jYncBT15dTpb3gbcV5YHFNr1n5ygdAyZbZoQ1KT3iyKT5YSM9uPMmwuarpxV4ipJAkCccn",
  "key27": "4ZAAwCkL124SADXuPChYwD5FwSKdB5VqUi5evCsa3o6YH8qG4wKAKkihPnUMGoYvn42rfpZ7TAkHqE8Bv1ia5LGg",
  "key28": "49SjssswsM6qX6FHxZgVJpbAUp9jTgzWsMuzQg8WA8KVU5XuaFB74BuRdd2DboCuiFzCnfzuq4HGYdHmHPKNHBTJ",
  "key29": "2gDLZxcvhDD9M8EwrQAytRD7SCvS5X4kHnqZSzznCEzLnLoqcsAHnyxotXybQ8QSb4dLpVqa6etmGJGkM7wSjhch",
  "key30": "43UXJ4Ff7cAw67UHBLSbgDtvnJ8iiUco5RfWnrxiSTuvGHXvsa4PWKGmwAhtzyLn9wecJfzi55FwJ1y3P4U768au",
  "key31": "i6c1A7eftdFScurk1gmvJuDMVHiXAnnAdh26PmqmE41bKpzgRVSzuWgjhaJN6XVvGZCoHUz7mBvK1hF3M65ibir",
  "key32": "1nSxNkbRAJ1Vd6iSMJqjyCajZtdg7agaZKvVmEso7uH9SkFHQR5F22cPMr6jszPPgpAgfrjuy43Z9VFxK4fqn9K",
  "key33": "5Mgd63PCNm1iHDaxkViMYxfrhwamuUK7rLgwqK6fNewdiJugn45ap9yo6maYJW1ZdAYVAEM5f7ApqNwiCno6Ajsh",
  "key34": "yh6nJgw2jF6jf1M9MWwJRiNaYmReRA5uW2AXz5CCoiWM1o3tJxZujbniUM8yPp3YtvzvPEEpr7bvz8HZAyJ8uVZ",
  "key35": "7THdaUNBfW13U6iAGfnW5ULdhWrxqrnTipzcASax277rDX4c5hG7k63jVM2oFnNTmskLLcasR44cNNP6yTvwVU4",
  "key36": "542RnZutUvGMRRQr4SyjLCdn12S1vageUpHzj4D3EGZwcu8TG6EXFiXpnbVPbZVUPXy7cfA6mXkkt8zxMUAaEK8o",
  "key37": "3aiJrY7BdCZHiFqmuafVwS9P3ifqpd8ptUx5Vr9bNQHk7aMC1PbuZ8qfk3pWqvL3VQbTmWU7H6ZCnkA2pZ7NqPzL",
  "key38": "4ThybY3DELqtnG1LAwoRsVhZVk9dKMQn8e1DkA4U1TVDiebeVACxDFEcymevN1ccwjwWBca8Jce1xGKjP1hufdxQ",
  "key39": "MyXT9G6b1gVpQJPkYDvtWc6CU5zxqaj21Fyo3cFRQHuGC1WKJFhvYMWCiWGxue8DFnvGM9jRFu8fBWGfi1WDsK2",
  "key40": "5AMnBYdPd19oocSxbktk8bQ64JfAzAsPhCZ3ePStc3zsWXZxRyGskuUwyJ9riW53estvYpRk6VoR3AbsSUp2hY1S",
  "key41": "37ESZ32Bg1X5opru9v7SzfpxDaZHuTyR1XgzbySJqodnFU2xBA6FPsXdrFkHfNxTbMPbgK83AzhrJM45FN5Y5h5z",
  "key42": "pZBSLicmezGQ7TB1M8kfvxwepmv4LYVejyVyLiBZsARTaR1pJ18ne6ugzYEAd5VLZRkyXHh6MT4pFvYGeL2MKPK",
  "key43": "61Sv6DQJeRheTcFei9G9KpbQzEFX943VftsiRUxBDk26gsgSnJ8CZcrpU6XyKtJhU8gRSRrUXHuhTBE6Mr8hsdSF",
  "key44": "477EVFqDSf8oCQDx3V81TRGoDZhVAS4kMt2yHMFYAizmwXVwE7j7VUgucJyxNkx1Kq6Y1ox8Do3KXc6T7LfT4dhd",
  "key45": "2KbH8pGGThymnS44rFpwtQWmrooVrXahv7HnW4g7kfauti75AoYGsHTriXdaMYeXVJhPAiT15yNdnkj41WZF9CpC",
  "key46": "5APBvzP2Z3GTRMipchvCYCN1kzgB3iPRnehQaAGR7oJQqKQnV42w6kShHbimpi7nkmMuVSSDDZPDSsrW7QSK69FK",
  "key47": "2oCMTUdN7hSLs8smtfpmHvUwAy6DbAdf9ovYq3Pi2wPbVJqLmVhfWxMSoqgCVsvzj6F8g192eTnRuvbzP5hFARNU",
  "key48": "2SxuJw2PyJXpLYtAos4PiS6KcJDJeT9jmNyp4vHCGv1cBhL7h7CyhkgadhuZoAfkC5RcBxNTpZgNNsr3yr8hLfQA",
  "key49": "3CuNsmqxvoMYhm1zshWupaAkDyDKJHJ3AvDzdGaPjKFmgWUf8iMzV8rBxrrU6koMbXdmfW4bTDfZJzusHGYqn9NV"
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
