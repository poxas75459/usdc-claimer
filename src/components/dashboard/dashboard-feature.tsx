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
    "4nwNG7NvP4aoFZJv8N2WSVP6LNXkGbezvQHyjMNbebvGM4gZNh57UgByDCefPHjm9CfCVhoH9Cj4jNVS29MgpNrw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5otq34c7u8kXsTNCfFtKqYtrCA3wJ9h2XLyfphznSYAhgzNULfJBpMmprSkB8uiq76ArDXf9n1NcSJ47b7WWntxA",
  "key1": "JBKQ7cMGp6USKbY5SZE9TrBEra6z1vb4VHRR1G7dLvFyqsa3KrpXr6YsUbXjGGd2bawqfV1K8B95LmpAoJ4nC7S",
  "key2": "f17jptWn1yPv3CMV4TC92SSx6agdPvAMkiqzZXShqTAZQLKiLtXTvGiENaaSYF49m5bYzbpxqnK7PKuQ3kHMcAW",
  "key3": "4hmJaLyUhVXKR75XKw27KpovAUcoDETCEMABsL6c4cvzyYZyGo8exPuwQpEXNyxzmPSbkWBkDZiHWiLpnePd62v9",
  "key4": "3PQbUXPneqmumfiDwxLY4FSYGaVRHX77X2xieSehzoGgyR77GPjmyjZ1YexRai8K15PqdeLbLf6YdHYRsqhwPqfF",
  "key5": "5USVr8QSanoy4ESspjGdkzamDmtMhyHRkGAgPvNMiqaEozLxq3ouger9obi2NXS7yLVUF2iDzEfBntHRiPExKvZa",
  "key6": "2MaUskbwWbLtWY4458PZ2y76GbzCvdrayBGZXGYuuGMvaNS9tpsXFZ91Zpuq412TugYCH9mJSVBxSSEXTfSuH7SX",
  "key7": "3E7gBEabHnK1xm4f1zXZFWLhh3sqoEFetKuQkzYdL33RafKaGf1N2PpLyu6Te4VmP6iX53r1LecV7wYrbtKQC6Fq",
  "key8": "5zT9hQmkSzWGFSrjQBaPLiJsGXnv9pt6AxHPmeGstw4VLJfUwoWHwWJjXGDo9ci55X62mSzHYkPhYnPxHuhC5KUc",
  "key9": "2VPbdQeN1n7LeH7phun23BWRtsyQh2LL43mWSCwj6sfRe36PneQ3rkHF4Lf2ukrfcayhVgW7qyqcbzVyX8ng8NNY",
  "key10": "4C3F3Pmnc1HdHwaVPvpS1NYgx87wmECYe8FtrUVX7gFjarxBjc7xAjsA1a3CWp7RNbwzjQWihqE2Nwp8o5NqtM4a",
  "key11": "2XbULeaYrrJGTSEsGaBcHMxoApCLeK8M1WywwHymtc5HuUTgJ4rRksPQa3rugLPkpGHS8rtxKx4dBPwasLMJvwPk",
  "key12": "5AwdQJuA7zSaW1GQU5t3AzEksgdku4eRvFgm8B74rxHVaF6d8mUhH5sDL9LmRKuSsNq6u1mrCycSYqetZsxgGCtp",
  "key13": "59Ym7FZguMixwRZPBagobLymSKP5UaCDzjny7qoee8DkVCZvdFFChH1K9SmTndnwruhnJoEkGC2HgaVNy44Q7TUZ",
  "key14": "3QHGeSETHgkhdwdWeNcsmXg63oT3a3EGUAv4HqXjG32co6jyjgeb8XZdnUobW14tJxe71Kg4ANktbbosqn7JVmxe",
  "key15": "4yvpiG7ChaMZQvsnbEXEvVzWAYkCc9cSEnaj4kdn9yn6e5ibgBRH4YL1S9q3gABtwFNKQdVh8YWNpjtpRtBzkQMy",
  "key16": "3NUyJxtnMgFk2TGrSwU2x3epj7qxzKXacXUw6PeKfU4yAcvoDJBtszYBAn1nUznUzBBrH65KKTC5pCWBENR2vSuB",
  "key17": "4VmG7mHuXRVJo5dj1D2kpBZ73b7e6eKatcLii5xhRo1xcoJwavRZncMaPZTLkvAMbJbUuNzd7r444jgSnqDdLc5p",
  "key18": "2V6fm2ShCQGNxhdYbYttqthtVeUWVfcAPTmfamgNR3xyxwJjBvXsaomYyCn5cGYbQgMNybNEPF9Jusba3QB8vvcv",
  "key19": "52s9ka36wyagvdtCeBagZ9HFnUsJg6bJ8L9k7aYZQRY7tT2vy1y3tY83dAXYt8BiwKPUzBJAFdePFNRHVL5My1vC",
  "key20": "2CZwS1qtWj7kgzPwj4A1ZhXMorr4qb17nE9A9xSwytwmtpHcJWkum4KbdgtfNLGk31DDw6tySw9Y57bNLroEe15F",
  "key21": "3UrQD3T53KmDGs7dJ9aXvyFFxZbGBtEyP39TTRwBEdccab1CzVrHxNgRJg9DdXteEhGLRdvvhndfbq5tf1mDQqpo",
  "key22": "5mAJnLJ7ukfkVckZjNGaSfYhJiYUbvdciVRmqnN8W1DUgm5qxoNUGuBULh2MkBJoCCB9kugPwMYwKNJEr6KEB9T",
  "key23": "3NJkHztDcChrXnYUJMNc5UVXzb9kZfaPGGu3r7pfgHHjHjNFC149aZ29skNAmq6TgusQ5DAuEYd3HaBdcPuYYAxx",
  "key24": "4UKekzmRwaJCVsKepDAKxMNSj2tDXa5ABpfpHqd7x948jqXubjfosb7egY3YLkuCe8ReiYRAEFZDu4opRpurL1Zk",
  "key25": "4aPwrT22g7r7r3Xq5f2zZKY1U1axJFmMx1g5LSuMJ3pYPqLbyzU6iJP2FjpguAxsr9vE6vJZkHX4zRzCnQPy4uR8",
  "key26": "3xm18CVi1HXzoVRaFMMxCSLJmWwxBAn8hiEvapy6zWpZryAx3CPxjjPDMvL85Ginborj7FcTVsT55jUZaWq6r6k1",
  "key27": "2Zko9F6gpjpMu1TjqepamWKgoQ5kDKtqasYzX9eyETHqQ1bF9TMMrkAoQ3JXygxTH4BmpMEtE7tKFpRoeKYkcaad",
  "key28": "5yQ3wWieBY5fXKxQG6y64XkWAFBFG2gmVsx5Yq2vurUdyNRDe1QRSQVd5ntoJAt7sySkgrMiE8ZWd7HgqADUnyVm",
  "key29": "3tbMPuCu65q2dwBXWXcT5XWKJthMHscsvwBaPiYVnrUv2ohQ6RtnNznEtVuiShVTkCZiEiZ6D43yexx8neihtvEK",
  "key30": "22EBGncnGqscb9g48S2QzuWedTDBGaLSTArjXBFBkZKGE9pFeC6zMpWRPmGN5VYKzhymAYb1P985RR2kdCF6zba7",
  "key31": "5EzHFteKFGeaC3SJYikJg797usZyHWeYTRysV9twvWekQ8pwfMTRiinUC3qsrwgk5znLieYZQt6kQJebzNdZheRu",
  "key32": "fJt5ebaa8imJvh4Ci8rE8TQAoD1PWm44R8aG6Noww1BKaq5cVhNiHWEntnTBLYeS4VxDqaLZampJhj6coVMhfJD",
  "key33": "3kdT6E3zc7CFFRczqDAvDdznWhBksgQK5Cy8UjS8487fqEQwRNQaxUDb32kwSUXpkbAUU7Yas9yvALdfKSUcL3sb",
  "key34": "4ABweoVgd5zGVvFSa9ac81oWTVqEtBdCXy9TY5zuWBGZybyGQwd6MZjJh2CjCqCBjhXQGwcbp2g2wp2REcUVZZ6T",
  "key35": "4iYepaxX8FCkvcW9921QjHqMrG4o8Rvw9M9Aoe2cHX1UTZeAWTYMBrKuEnGFauiNHVF4FNpnmvU5TMCD9BE3YuU3",
  "key36": "4MvVphVZSMpNeAtYzzQBAPGUWNLyETZswyGxY68o3knWaRd2YVfeHVZKtDeE8AaTYnovTkVL2A5AxKimPjcrbiSs",
  "key37": "5txfNYGERkaqu71g4ivDNfYHEv6s4LQT5nNvCkun9pRnrpVkvzPj2Hu4kbnyGzgMcq2ApPPHhDTmG5CrcDJVHQLT",
  "key38": "5ASBEtHmiA5eyY4ghT93GC1LHXKQwa4coHwaGPjxuM785CFxpF3ahnx5vPqbyzgCRfEFXBpZGsBm3gcbfymqQMQQ",
  "key39": "5P4jpbpor9jXLfLGTfpGCLRDqS6fteeKiCD5XCRGPpdxSMbSAvn7yMtcNwXCRoHBeeu4KWAsALcqTURiFZAQDb7F",
  "key40": "3uhCcCxNi9DRdaCb53idmQVGJey3ZWLb6QcYF2CyUhKfGpazV2BzaruoQ4AKUh9TKxpwpRramsxUJnShBRUkqpyd",
  "key41": "5EXJvNpcrwSd3Jbr2JT3JQQuhStRPo5WhvZzHQkuW7e4Q1qrUKAWx4Zk7snLP4n1mDibhj4qQC1pzd1ieoddBT8g",
  "key42": "3VTMeMizLxohwD1LhKFqoJXXsahsUPvkTegKNxKkdeyaVjmZS3qsze9YFJ9omz3r42XX3vTvLhjtBo5jPRppcYxP"
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
