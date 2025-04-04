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
    "3Wno74XKwRQzQNxajmrdwEUydoHeNwkD2F1a3EiBgFqsa5bViV2XRr8mPpXNC6bHEY9YoHAB4wFzcS7F8Ra75EXK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HfdnymnhXxmXPsKHtRxngaDvL1rbM8zHfunqqftJmiv2T2nSVwcyhxCLgCAE7oYpnSQepVsTFkHJkhT5LjesyBN",
  "key1": "2Had3tSzLrvCs3AgvQrySih5ppds9FKpwzAq5a9kmK97LrvmUiuBZpWEVCSye4Nehw1S4BDxkTf51xYMeabfBAY7",
  "key2": "54Uo7BCo9pDvtVzqQGNx7UcEsZxaT2GxKkX5Bitnm3TQpvSitUoevm85Gyu4AJjXnNsCYnBjf3akBG42xz5mBtDC",
  "key3": "5RpNfxVwD2wQFAvQZXqayUJDwDt5PbsJrCCE8RegnuEZVrJR67dJw834Y4NzoRjyKGg8geo2tJSAM3KiaFpGKZmR",
  "key4": "3zGzqNnmfQn35VPoLu4kTRzfBxGqvwviVY6vnXzwar8qnAuuu6CWyGDLTQZ9Xmoo6mzkqbeSSLfYmSRDv6cJ4ktA",
  "key5": "27vMNjYNNTrnXz7uYcxjj4UqF3C4mhfErBBERNRSHqK7YdTouZ34w7sxS8pNdmVre1WHAFCyNgx4GkANNFVdoP7t",
  "key6": "JopyJx5DpZoyjNyHnzpv9kHxacRV3fhAuoptx3PnfDFuvgG258xrQVFcCPnB9RAkqciuQf68dJK7GDYYUEgZgsr",
  "key7": "3DhphwG7UhjYsYkUWHtENQMYx5P9GDr34M3zYENG3h74zZgdaYgNbQxH9fGa2zFjdiz89bJC9NhoywZJCGcGJGxg",
  "key8": "5Cp2Rk4GuC834hTeedH8k7mhnXGMrUnmKo7ExgTgVvUNXbmGpqZYDqc16uvngATN22wHq2FmKNZpD12mRrwkoFd2",
  "key9": "2rBTRYShYKTorYvgyqMHJy4Q9CbccSsGrDAkTuDBtxQ4mbYLutwHLqEVf4nVsRfJ4gDVUPQPTMPNhtsRsRjvB7F5",
  "key10": "61vDaLCeHp1223V3VpYkWxS4yjStfXtEQvtVxggxzuGu8z1AZcD6PV2CdSfJvq9QqcK369JUa6HB2Du2Ss1Ls1jc",
  "key11": "3ZyH9gfSpC8b33T5G31LTMowVSkc7EtDzF24BRLNZK7g8jnKKA6XCNToMm4q6GDtY2M6xici32vdkDCvAAC8oK6i",
  "key12": "4PhUUWAnTG3Xab74KCymt2BKj6tNG9oSggjMfDHuWohdhsmeUsqXx9mstfL99L7er3FratFQ4rjTDFPjNbxrvUiW",
  "key13": "PFHiku8i39i7rHT8Etsc82ctekeFq9VDcidMVHUpCFUfdq2682Gs1XMTtLkQcb1pA1hYeuRG6Z6LTJ2M3NQdAdL",
  "key14": "49gepnFjcVFpvLs52bV6YU7CSfkiM6oh7KULDab9z93aZe4FQ5RoWy2JzcKPZBRMerA78uQqQZhqwDPE4Pgfy6UN",
  "key15": "fYXYnjwDZMg4CNSW1hdV8EcJ798PYLnQ815JLt3tRuqJfkW6dJdk81J6gZ5HGo1bHMyRTT4ucV2CXKgtfggvZEj",
  "key16": "47HbkTxb79GATigSBxQikErxpsrgidfgbAJdEcYSbSHdV5c82bbc6uBX6eoxW8JYEQv44j813z432vMpJ9sLi6yw",
  "key17": "65cqm8UxGnpjkrefZEehiw1FyARUZjstQoczUBiFgwHjyca4vLo4gdZZrTWzAx9MtB4uPXicExhegcuDNg9WxNtk",
  "key18": "4C1BKoMscpGcvcNDRG8jYhZvVfRhTKoUf2XFgnKX5wQN4HK1S2NgqnyzwJYo7y3tbkjdbQ1VSzrv8d8jHFLqQCZf",
  "key19": "3aHnjm18JYudznCGzTmBgf1Jq5Q2ARdZMiNAvNG119Q67wCLbJxnfxFQfnEbe4Dm5qvsg7tETxa2UC7U1keF3er5",
  "key20": "FmPsAVfkCujdtoPrjVMT6kSFU5P5hrUNJEMvBcWT4bhXEaQvFyN7SHw97ya5vxGxY5SduUsEgUskiVWx9WWTh9A",
  "key21": "46xtaaDuBCRqiGnGiAVANnnaVz7YLVg5skUEeLAkDgKK8ecdMPGBziRXLtKS5SXXMGpyHZpXqHL3HLbfTBk2K28D",
  "key22": "2cgR2NZmD4pbyCFD8cTyWeGNwzhnegN33mKbaeR9RCQwK7adutwXWkbTUVZtLuupVgogaXs4DTgiac7PaSQRKz7q",
  "key23": "4sQ4dJ8Ao7gjW4LbSzSHA127SPLCVrCxeRoeKvL3G4oXZV48u6na3v6YE1XGUGhMMiYSfuj7FSkTfXB3VUKqXt8B",
  "key24": "JibiS1LEdoXgoLKzRUAwnPUYPdAvfmHr7F3iUBxeZTrKVnYF55CmtfhZo3Mk3MHPZrAvP56LuLgYUB2mh5B6gbx",
  "key25": "5Yk5o3SiPxXNgyBQYTn7GYareW6yq6raKUdRGVWfQQtNYzZFNDzWXcAmtU9LQxX7WYUTS88KDbCZQ3QNKBtbjpGn",
  "key26": "4Gc7aVVVSozrzRQaX168X8kCAcQ9MRpxAiBAyGSMp7AQzw5j7rib3RJmb4kFy2A9EFBbspecmFJVpmW9S368sCMy",
  "key27": "KgjZu5pB3fEzRmyVaN8Tf35GGqKTw8QZn7yyBxsK3qeyWYwFdUvBHntMriAc6DWP3QCkhGzfzDFtxxmwcmd8rQs",
  "key28": "3vrcwk5zMY6pAWHFhQGzfy1YeB4qasRzVPhMTvbjfNP637fd15FtmEbjQKhmRNu3prM83QwDmQ3VjNtuhzjeYVSE",
  "key29": "3chMZFHJEz6CbKLkMUGT1a1YdHFC3AbyoSRKbc5AEvS5VUhDg4bs8JijABg36ZNxRCcL1Jg9LKqPvfom7DHW5zQ5",
  "key30": "akMq3gCQiAonn8Q92jgnSftUZZ1HUWg3p2Wr4eG3p99TWEYWjhvn9MbvpE31zuHjMi3DLSwKKY9zPJ4YnmMWoNy",
  "key31": "uL5rjZTHc7DALkdo2Zpheffpwn4nwiqrodxyVmVSTrPyppAQVeurDEMAxmE95n5yJ4ZKFQuseWoTVZ3TvFua5wr",
  "key32": "54JR6ETqsjMqGbNdmaY3qv8fahc26Zvm3eFmtLMcejff6noyac53A1UCNKtiTX7acuCPqrQd11tjrj6yiqoNWzGN",
  "key33": "3xXkqF9Sn4wmfWHgK1K1kWzYvDPst961WFy1EQgkHtDJFvE4JMqousVGwWvnc83UaSPsrATydkdCP6JpMzpo3HJL",
  "key34": "Eiw742wYTyvZ5HNG1JwnPoBK28wXfLpaD2Mpq9WXdWCC98ZF69Dm1sZwg1FWwjbaZAkVacvzc3yvEADTa7CX8R9",
  "key35": "3qM8jN1TzQKehJHiJNahS91RBGQ253k2Gx5Jg7yu27oMqsvY9svxekEFKEqbrgTPL9rFnhw6KhG48TZ7Q8JCaiR5",
  "key36": "2j3Rzdfjxz1nhPNthTmqSHC661MS1K4XV75fjZPUKhcPGEfgzSH2XfNUHVqgjLkBdRxPuVX7p3JA6TLwYht94Cgr",
  "key37": "54dQWfhMm5uMRiGNCpNjcH8zUscLWBscCVqXiZXUatvXjHMSRtn2qo1fKZ11EGBkSW9dETjiAm8BBZ5D2MLaUjep",
  "key38": "48MUTtA1BEiSsXGFnB1xTot5id3SEKBRfPqexAYT9ibwkuMUidkn4LKXRnzsr5WCR2hwU15uafXvNsJvV8LKrFRj",
  "key39": "5xE7qqyHAvKE1qqh3wCyynCPCASNikW633224cPkopqQMNoDFgYxg5zRBBuUUaH7NTDhFqX4RP2nypHYj97CCAru",
  "key40": "44RGyPXSg86fKx5SpMUySDHuN9kggT31F8NX6Bj9NjsB6kenPxKRD51nkwVMPYcbcL2B5becwg5qKWiGLNw1ZRom",
  "key41": "3t8UNXNuyWbCH9qF438znrerMh5uaf24kx1ez1hhjH4BAuSsQR5S9GvaJhTri97bhrJnwzDPBBYsszcXeHJpw7ex",
  "key42": "28y58F654vSQumymxKV1MoSaWmobZ9eh5bDmCrKGHnp4udfin5oy9Gx65UxDDfJEGtSQKqntSu6Gy5DbqisWcAjM",
  "key43": "2VQGxgyHSoUeU4ZR2w8kLvPYzG8VRraBsxjV55pnri28B53tTZ6ULvpqMr9umYfHGdZWBdpJJik1tdPZ2CEWQQvK",
  "key44": "4DpjhJEf5hxtfyLFSQ2ZxMVP5n7Gx6hLbZJBtggKFpngU8ThmsZh5vMPqjMENGC9FB9E3aVaUa8jdh7QPv7nYwSV",
  "key45": "2tyuPzGWcdZzeQGeWKPkd2nh1CaWLeNVNwKK3of4Cy8DNmjBwJ1sY3ABjW6WupDaV4hPfRXzDhpFfbTo4w6Rye4Y",
  "key46": "4xCac9ZKw7hBfeeaehU9LzzxEH1x3Z9EvV3X6d6zyJ6KBffu78Dv4W1J9rhEs4uuySJzBPui745tb621trzYyE7E"
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
