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
    "3xstjeFfLiK8kURySTZ7sMMXT1yERTmzv1GQKrg2cWAhuVEi7Y7jid35f4U1Gp54f4xZU6d3P7XtqVtH698dsHUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yegcTMZTmJCptFTytjMAUZ8Dk82zzoshogeDWFrEFyBVG3uv2M6pRdR6SoDcmvKNGGtTobHesK38hLeNjvZP2St",
  "key1": "4haLUHb5QatKYjLohJaeVeckLXJi9HWkBvfESVTqihJg8nzLi2AucA2mPLB3FVSp3kPUb3aUC7KSvdMuGxa3tH8X",
  "key2": "3dfzzJbhbpmoyGDqdjCajjK57Lkdg3QkYXyStNGiCXXPuC18pr7SF1MXPJPm2GtzyCoxhrBF2heacvL6usHk17Ae",
  "key3": "xJnVQotzzMaYCgDXCJ5dPTJEb6C5Ed8YSeeru1utYhreTTBsf15qUsZpbzoe8ZcjZLzEMbDUVoifPDegGFnqnQb",
  "key4": "2GLcJvZedU8FFVQJ6Gpz3j7HS6uqghJTcVy16KG9N3e7yAhuCnUECdkMjEiG8bVaJnH16gEeEqVg7mp34bYwRASp",
  "key5": "2PtD8aZJNofBY7B3LiKshaU4YKbeypbbHTXXdL8dVK1XBGnyTqsxgtLrRKWbdwaU8mEnns6ANs3L1oBLjSuiEci8",
  "key6": "bX8P84RgqhM7jYjjy4jEVo1kHt3zJb93C11PMTgK4EKHHAvDRWQDG6jned4M7Q7mT2L26SWTYHGrtfhert5FtxV",
  "key7": "2vwAyXgtb7gyBFWGCQ5rg8HwgdSpBMj77ceNrhmQ9z8r3QbqjtW3ko1VUTCCQfbQ8zvYMPsTgYEkAokK9di6wdbw",
  "key8": "2BHz673sK2sTDHwzcAwoBJitxXrMftHMKUikAMgTuJv9RXTPpWBwgfzCq1dLZPcpGMqGHjYzPxEprt6bocfczJLJ",
  "key9": "3BMN1xdo5YwXyX5N1qVKbuKkUQUUMFMNpoJ9XSL7vVM1B6ESPp2dwJ5SnhY2tzgKyfW5qkG1dHKkZtVGWuVL1z7y",
  "key10": "24p4wZVVdoh9JUYYiC58nc4nzHqF8aY616csYpaXbEs3wtuzRu28G7ybwjS4SXhT1CWd31qv8RpMVcwrYUWDDMPf",
  "key11": "MVUtUW4aM7rbWGJAuC5T4vSmD4eQvi1wdz4DngMLJqpPMuiP4isnK5LdKHaK56StasPMxRu6CooHdBRV9ZJtopv",
  "key12": "2bgrbfTR5BK12kkqcdkoCmCFXN23bFzmSWNbyFKMWYkQ3sXsvJjDHscXYWVmJ8qnhReakLnzaE153zrCfBXPVoRv",
  "key13": "4Wi1Gdw13Xcg3zREtmkoWS74xQWU8ZvTqLnNLEvorXgxYvTfBGpuVF8orJXRJV5U3cR7aVYFdPRDeHpHcwTcnjmP",
  "key14": "45ohS8urWCvr3PqiDMDbzdMhgdfq6Y4c7CLS2fnuChNZoynPeaorhWe3BAuefa3EUCkSb6kUdYd8QLzZRngAbVQF",
  "key15": "3EJArx5K3aVaDYAjCuaQr6cHccgyeiAD4TyKJiUGDiTsJkjtpJGNu9ou1o3mo3heh8cqwUdHuRKk8Whp2s7BJUB8",
  "key16": "4a8rVbJtmCPBbZovzYZZFy5PKX5EUa2ooWFRPzH5z1Uj6DfRGkHcNupBKYodx8DZrWbALdca8yAr1s5oSVeQ2kZo",
  "key17": "53J29a8st1EBoqRhb5gNtczH4XWgXfuzSfjspR5GYY9s9m2aBHfK51gEg6n7WYUFVJiskragHMEHsvvtn6vL6qZd",
  "key18": "pTd4eeg1CJAZ4KtEVa2v4JvHLhKoR2wTtiG5c53HWCHnMpoVxek2mVfh93xFKvSjEdkvyBoxUoZWgUtePmJdVHG",
  "key19": "5WpwrhWv5rnEJh5mHe7qKCRWTca7SBRRNwLZjuEKJkjYazi4WEGN8zhe6K9bXAZkLoHqDFhZ5hbMezR8yGi3HZav",
  "key20": "VXmUDQHjVsyV3bLuzt1j9pD3rxLcTn4paaPeHNrZbe81xrXSz5XpAUbVNAGhuCnfsaqeHHpKgTQYBqmhtR6H8HQ",
  "key21": "3AVy6pSvW8QE69ZsbVEjTPj41trYvxAppdjLK3kKs8eJ95Ni6PZjLMMAJjVmSzCb5ru2qZUvwLMmWLDXJBGQ9QRX",
  "key22": "3fXdxSQDo3bAgVo7BX15fM8z5u7ycPZe5P2P1bQmqeiPGdB8hwv75AKEaBvMTqw4mXjFRwHiUx8f1PjjUqd3cXDd",
  "key23": "2wUeHToEMG8Vzk1istnNgr7J2EhdCouVU9HVxBFjBCQQumydcdxKmpzERnXF5LP8Z93iViNxAGXwixXUs4DDiujs",
  "key24": "4n9ENY7edzciBeVB9SVafb1Kw9Lph8docLgU1hbciHjHFpuvoKLqPMs3v7UkVE4x74mmCNvi2KsN8DsBJMsakU5P",
  "key25": "5W1xirL6MSdWtwyvX9yUhbdSdj4djCdzX7KZmogkRRSDUpkYvLGYPAMsppB64dpjceYGTS7ZeoGss3fApUG7wwdh",
  "key26": "4PpJCRFkNtHUi6bBG5KG9a74LExA2RFEGoUXVUdxvzJj9L8dRWYQpGQAFE4zUchFADZYvZgJV6J7fY6c3vCrLAoP",
  "key27": "34GuooDns6Q4rs2hqpokKFdaB4axCxaUVthEnUvvwjAp2mU4GAPLGedCUX544TpmG3WkD5YkzxVWDjzDRKjftck8",
  "key28": "4bUirHcJKk4Ad7rKCNviCMgEgoCwVgNyESWcLCiw7h7cWyNKWbm7dutknxspdZ8irBv3LtW8jrx8QcpYEo5zUdve",
  "key29": "5YyJrZXxg7NpM9U7vNke4h9zRAS6nkXUrawdd4RZtqyBsL3UrxpuBSSjeVp8VJmw1ByHrwtJ5FNhuQbdBiS3gGkp",
  "key30": "3eSDPcF9qn7ostJ4QKhoqMDbheTA9cmDHz3DEvvDaf3P3hiAmUgnfhrDNntMmh8bwJeJRK6fuNvFbPruey9kKwi6",
  "key31": "59QjbToBKSWVoBRaUAQKKyGAQrPZZNwJKo8XgQyd6em4YmzaofQKjeAsjG7VCCMUnthMjKZLWQwuzBiMrtb2WDhY",
  "key32": "5RmqY6PxiBb7peM8pAbFSuku8AyAn2g9J2ZqeXWhJyTWdyEhvTKQwnchpQ67XS7ryRsp2oQZWcYQ9tVrKxNHWsoS",
  "key33": "2MPZMo9HLbn6XV3NPdVsLWpb8fSvXmvd66R8MsmtPbJQv3x62FJD6sMcLegCsRYdEXAFNTuQkPsSJ3D7NQMe1C5d",
  "key34": "58k8QcA1jDmCpngejQXc4sUpQ7BkQwk6Kzwbwbh5MeaFwJ51PEsUWhpy6keKwk3KsUxeMVSELhC59cY9nhBCcMvq",
  "key35": "5oyHJuuLjq3yU1Vr5ZYcEygY1hYM9xLHnK3yuMhiK57TGqJCRyEJpR5d6vWfeC5K5QCDBJkp6izXssrJsHAwAH7p",
  "key36": "3xFN23p7dtdqSbZYTVbYcgpKB7Cz2kzoRYrBvoQ9Uznc57HiZgKZoFidcgAKnuQ59vYtDNzKUBsMn3hGPKo8prGj",
  "key37": "t4h9yR6FGujgmJg3QuHFakp9CRogzVTN2HPq7SDLKqb8A9w4h3iwpPQj7DbLTYw2y22GFS2CBK4dKxbXP1kzXEe"
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
