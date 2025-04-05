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
    "ibyxT28mhGRCKzeX9jKcfVysyGZjf5gnSM6nqszcAGCQaCEEbz7Lp3jCwhzAEJd4UZhWbBq7WydnmKxYTKqDtDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oakgokNQD9W183THP8SNkZsyaTq7etEf4da1QLSNEvRXrkCenJ5vmFTtPYZefdE2EUwuyBtNdDvgbDj8Q1KyUpX",
  "key1": "2haFWPDRCK54dyU51BhQmWBnbNcCZQqnxQKYBKmv78shCUeU4ngnBtntaJKZCd828fGm9m9hPouG1eWhAKCc5pSg",
  "key2": "W6qZvNExAkmu1kxWn1Dc1wMwA39m4QQaRkr1pE86NiyAFRZKFhY1h2N9TwQr3SodK3hMESyubNwgJVT6zWUv35Z",
  "key3": "5TfkXfcSwLn8CUPtz9xH1LYCgxMFojzcLEdxdWxr4Fr6LPDC4aL2dNYrvATHNc9m7pauxujRRP7eQSiH9YbHRLos",
  "key4": "3UrZ12EhTJNA5q6oxdLChMZxL6z2nrELNQxTHRLyavFGCsGaGjx9r1dpkgDq1cejchapEL28RAJMn6ytbFrJSLLW",
  "key5": "3vA9jEGCAyENTGhf5g5w7uVFEvm4m6gjE5qyWSGaifAWV6xnVUCPBz7BABGnaGmevUAicyn1NcAtUQVKZEHPof4h",
  "key6": "4YAKiayFSNbDPwszcd45gjmkuhw4GjtKZVvfB69jeeA4JPkLgamoSG7Xm3aF9MQYdY2dpUVzVmrkAYGwfBC8rKUY",
  "key7": "2jNpsqK24YRFQyLQ2HvTp4knS4x4JbMiYVzWzBKiC1z8TAXJMY9q9PVHJJqEi5fghhHVDV6bArD7cgPufex23PiT",
  "key8": "24LuGmQfAyoVuD5548ZA1Ah5qXnJBjok8ongkTBdU8tyD97VXHjQhdnepUntazCUZwtv6yEqVQvmoEp41N9X6d7W",
  "key9": "2KsegcH1QsMPv8TjgtWXSLjgkeMn7EmS4qQ5a18PGMg23Qb2Gtvj3fSGYp3tzwegG4RYStsVZof9veAxoLyenKuC",
  "key10": "1USNGtqeajkoKVbYHwkQhycxPbdzo1S1mRAQDSe1ZGBmAkt1mZ6w18KrHfjisJzcL3T2uSHCCL2oqrdPjxRAyQH",
  "key11": "E4JeTCeULra81LVsezpSciyKJR9e2LvqwHbrew1eXyi4qB9VsZ3Jiz98MYqnuGMpp6gg4ZPVpfN5HnQzTZBVhTV",
  "key12": "5wDMac1YTihJFuyimPJEnUU34EYLobiRNaf9ZimqkUNREV4F2qAA5t8CvQQQMMr9tqovjLXbm66nGTbTDDM8D7ra",
  "key13": "65Ppb66ASqKxJ8sjVK9vKJnwFPW6kTg1DimS7nJvVQiwNyen7MVmwEfB8v4Kz74RGrMrvQcjNPnBXMefW9U1cB18",
  "key14": "5LSBSPffRwFKjtzSptD6uustyUp9obaqyomVwtuVcNehpjVMTGSSTb7jXCa324i5rp8v6aexGp2LnjpdKeHbLeLT",
  "key15": "5bdhYCF1LiuTHR5j6F4zEuGS32DPvqKSKubaKXXGZoHuzHBRScUg958z7Z5VEreSXFDjPe1JgwqMGDKRrYQjMrV9",
  "key16": "3txKYZHfmHsF5RQp5hRYNqWC6CQm6nfAUdgVGroNvZGPK3kXqTVTE64SZzbUCx6G5Biqpp9NiS7MgHbrMgY5zh7j",
  "key17": "gtzAKfCF38D8fVRWu1Xyyy9hUVDMzf22KzZUXcz1MLW19S2Dd7qVAVV6Q3TgYYjrk5QxeoLFEi73BP1Kj6Gb8ev",
  "key18": "3EtvuXzpmCCwcbpQK6t4t1PtPXJBKqpCGyJcfuTbcPQVrPQxnksB4F4Adf2yG7HJ1EnD5PLihHSsAogC82yeo1ce",
  "key19": "576TQjFLMkPbDcwioeYy5345i12EkQCfwvJTydzz3Cmyk83nRvTPLvePjF2pjAB8EqQiDPphAgqwg2uX73JCneNK",
  "key20": "2siuAUWaXB3XdGQVqKtnYsLu2eJsdJnzu8veMHecgbvW8EJ43g2fWVDAs2otzQERk1UTsLyTrFoNSvBpZorcWCoi",
  "key21": "5uvyhB9hqUjcrAuw6vyvuTj7A7ppDhJorfrK7jkFGcpRw7rW9YbsGUrGtBCkgTd3cHatCeHSYCBQoWuqpNBCXq37",
  "key22": "4qyyH8VHNES59h9JRsR3HqeG2HoknQZyyhUzdaMXahjaNKDL7C4CK3ToVCPQ42uTkAqD41DAcH7XCGdR9xKw7nuT",
  "key23": "4Jrni4SE4cwQ76fZebg6vkhMePsvXaRp11WREPc9gw2R4Wn9jTFTzugEomhbXBMfecTDkb9kYJYBAV24PuShZnaD",
  "key24": "5kFQY7fC2qSL3isW7pS8ZX6vbFLVfCdtMreRnDRGt4hiU11T4MMSQsDysVcrGHAUbGp84N242mbj1AwX8aKNqCW9",
  "key25": "62eUU72y747Xm8S8ySbSMwEEZHnFj3Uzma8iDnQjaY2Ba6daCwdWbUHLp5dEZTtm2pqZsFqCfrnDQSyvbGSbny35",
  "key26": "48rFo7CcqkFMh7N3Wk6vGhxDDBGZxeHKs4msFvHUdCTsgqaVvSF8JogDov5M1Yva7XHejeCQuCW5H6CPPThL99Rp",
  "key27": "3VzC6W7BDd1kawt5P3DJrMajo1jbkMxzSDxDJZXfYihiXd86vJ6U7LS81MN9peMTUFUczF6KzSsXED13y3fcNSfC",
  "key28": "4u2ZeMtJCEK6rsiwE4Qy87WTgqKw9FFoFxi1BYYr6LKtbdCmqHM8Br7sP3jQKjbJJc8NJT2CWcmbEy2k2NVryHod",
  "key29": "5Fh3su4hb4dwpDYankRRXVxoquAoQ6o5vjQAeYR4w1GdhQSA4egixwG82BmbS3pFGiX76Jj6yNvgHXMsyarFhXSj",
  "key30": "2stzw5KBVSEnAugURcWGXC7g3t4zRCb5Utx4n3yjsj8nQadLYCY8Yzcgo5yjdw2rQHdK5HCReuTinwsmEBhn7HF9",
  "key31": "ysVvjM8N24iB6xUXUfh422pndsGnXqf4fJzHo1j26LrauLXHnZdoQFnyeqCNgTmus8KAqVzQ8NzJbeqsJCzWJ5b",
  "key32": "5kkzmwFZyMrVCWFNS7AbcqXSAUw4X1oQTCNVrjYM2rmkZstcU4sVv4xDYmALJ2ZcVSSNUU5eKzBjMh24S8Q4RBgX",
  "key33": "2E64TMB2dnF9J1VzuYP6LQzWogZaFjmXmVQS4Px1gDZtyHK1r8i1ztv6TtoNPnvvDJtzHU2mJAfH2oXNe5AugAH5",
  "key34": "2TxhtYLVacxkkrSFz3ZUjfjTbS8Ahw3f6BF5h3B8fj4pxYbz8WgMCwgjrx9v1REQ449fRzmTw7jpJwmMt7PPTHHT",
  "key35": "2RE9JaLdCsEG37qiN4XLNvZMsnF2iDuHUWSFyNSENthaLHjefTDNzhR2pPgeTDSbAmPRLtepocuqx8HKaRReUJwS",
  "key36": "2VY6P1VqV6oVsXDQzPQtxeW44jbdZDnBHFoSSunvwHVHyUEh82fu1KQXkD9KHpXDTzBPQdvpQ7hSLpWDtZFLWLRW",
  "key37": "4At4jQWaq4CFmaCyPvBVgyEWKbopJthEzm5LkP7mVK1Jceu2jV3svnRTJXMMdKoFbLern9ZtpBkaXsGzqngQvLtP",
  "key38": "5ry8QDoY5131s1Kzqi6QNULbGGTQEEBVVGvZoBFKkUSqZ2C294FWaQopv9PYwJ3F1tBsosE34T3DzFTW7ANckSpm",
  "key39": "4E2yHXpZ1ZeMpdZXWxo5DtDjZ1th3HcKt4EM5HNkzrE2U7UE1zjgLJTM76mqv8cguGVztsKcPGdfsr4hTPJpkb5u"
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
