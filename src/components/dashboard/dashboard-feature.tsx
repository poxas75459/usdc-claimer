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
    "3KaZVrSkFqsR5Jf64bJSGiTfEsRfuJwGfYyok2j9vNjhsrWwitJ96HVz5uahQB1UM8sK6JgbwDYVvMkXHpNbHU8c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jBq2CfMTxFkSYRHwhtKNcXn9ZDUFS3KPY3Wapv9CCx3NmRv8PN8eX7dq2kDhMb21aP7XBz1ejhQvhJyDW7cC8aP",
  "key1": "guPB5X3VWdsxihba4zdFxearcGwyDcVcG3YhhQAXCLuB6ttUizjYgVuw63PTehYaFoeZXqmpSZhso1Bu1XPXjAS",
  "key2": "3p1rni3i5UmYCWNV7HK1xxkEZiRkvhqcue66jpYv7zF3usBJUVrng5HokVjzRKCAeFkUKhnnByW6vYeN2ptE4uJb",
  "key3": "vaux8ZwDTCyiBxE3mpKNrdLDqxqYLau1K75fkZo9QfMoHaCi9pbNg98QytZK8jcWbhVSedgS5eDJRhEuQ1c49ES",
  "key4": "2GfWCLEMwnW8pC33WtEs4FmF72Ti1YgF1v3P7rW5JF4DooTwbGQABJrACwPXgvoZDxjprUZeBYMfkKVv4x5zqhNG",
  "key5": "3TXQvoQV5Vzco1og6gTshPgjnwKYuw713e984SASfgoT9rv2TccmgE9BEPnfv29tRYk1m4ugBhHzwqTUG5E6aGYB",
  "key6": "36QXXbaUJrB8HKGsRT8zCNkhxToPreRpQhJgaZDHZs6d6o4CzYZwEcvaiDMUTqVeN4s9eQB4BTcYj1TQshrjcXER",
  "key7": "iD64TytT1Ws7jGCQ4KR4Yiki14CoiD4u4E31533V1uS2ehUR2iEcv3kL8CbH8UYunzzsDk3VYtBKzQuS7ytHEG7",
  "key8": "WxzMkTgBfpVQoq344G32jaF6z4CKprdZ3QYcSoNoucffiwX7yjEXH4xkneTQPAkTcedYUBAmzcNJPRkr1zDR68i",
  "key9": "3GPbjeg8ZdAWu1y5VRjGAnAwre3bMzjTEMy3fbRDkvrT59utStx7bTouEhJDgDv4UbAgppNo13ed1d9rTj4oroiX",
  "key10": "5SXGmpTTfKwor1FQEWW72WoXfYbK88Yec22dpGXUX3aYbmQ3228PHqkTo8cTkfEwrTACHf1hovsYPwNMYMc5oMLm",
  "key11": "2wb4Ufem1wPevgsMZUmEdiAM4CfBPBCNrRtVtHMgqyEJ9Mw1JQEBSALvxYxeS7RwP3FXcZfcbRT9GQbqkLkzrjUk",
  "key12": "41WsxhAh7pMwjT4A4CF7vKGi6QZJPjzSETR6aMRoTvuwMZsBnye7c7FKmiaq2a4HVvSmu9dFG9B5mDnano17zWHW",
  "key13": "2BevUKL2GeRNfoxHn6DA4waYoSTgLfNAsRFLCA7a6wz3dosuaxqRxJpV8UZBuEDrCUpwqT2Z8ukTsUkqghEmz9qC",
  "key14": "Y9wLHf1S6F3i3DA3aQ7y13vbgmRazy6DsbqsgjeWQPd3bqxRN4F8vqjGwa8qdpW6K1CCfZBnoD7oER2uB3FF1Da",
  "key15": "2yUbQpgz2EiNMHBJAANisKe2rVYDRBVfHoBP5DQkJPMwGcQhcFvqnroXZ2fN4gqw6NE3vatpdHxKYNX8VcCKEJbZ",
  "key16": "5tf9CSRHTPaEENrLLBA6mRBLrELtzGxNeT8dNiZrJUB5kL38vqZZWuKQRLYuA6gB9THk5napDuMbo6pD5n4y8E23",
  "key17": "SRXtwrL7o24GdzvBXqRXvnYPJSDg7czejFdgmZZSDNEp55wxB5Qtuai3XZoJWPmFGQ4WkRsnttp4WkxitfPogdb",
  "key18": "3yZQbiCVHQ4oJtAjfiSxHTkz8B5UGqpUXtGgK2YKmu8VKAyaiyHjn2PDsHBTyfdtNv6S4GhjeBoHh6C3mRTHA3f3",
  "key19": "3i4fuwAtD2BdZ8iSg3ZuxyMZ3BXWFRZcMuyJfhSFeUhfFGgJdP7dtoEd3JpWkiuKcmUQW4LESU8Ksi4ZYYSs2LPp",
  "key20": "4Mob9TWPucqk5YRocezQEYDbgoR1imb87TFUcWxRVxDkLPnkiiUNrzv5inWJP4aKPX2kN527yunopNBvDRSkkXb7",
  "key21": "5oaGbHX8G4FPxnvJtUGb9VE8wrmwQnfetyk8sf7oEdtT5JDXVaNMGNw1PjEwKDyR8rgCpTSAHL1JzLVVCzQs5zaD",
  "key22": "5tocmLTQGuhmbeeccwDGYe1QmBSr8W1Y9s1bxrchc7fEcfksqdjfJToRRDRcg7A5BNmdhfzCdZyWbsfLmuTQKs7b",
  "key23": "5g7fyBAvZrxGk7i27TUyTFeTpG5SNdAmWupLLNeJwbGpWm86wVDvPEQxAgEAPaGjjSZfvnQQCiUdeCqhLmzUpLRx",
  "key24": "dYmL6tqZodW3iBDS6xFNu4gzshKXdHR3od1Q1FVvEL5kknMVcyMZsv7RNUsQjDG6MUPPKnK9UFpoc6ToeaMVjJF",
  "key25": "5QiHG1fJQNUTdiptwmMef4wCuyE6jJBhZZXFDpPHzXo3aEn2CmKpDjtWV9xhJrm6gVDyrBRKcQwxnAd5Gmifr5zL",
  "key26": "3RLrBh239P9z5bKXadSGbkrnbWkzGVpkE7NuHm4RUoY5frKK4jPQH5Wdm1zW6QVsjhygUVn64gFmMBre35sYYWPN",
  "key27": "5SBtmvVPWKN2AiVxgHkksUh74fdG9ZxpxbC4SMjQU8pTDAqy8kqerAYddP8W5kLZ2E7jvC2dHBWSVudEyBvAmktz",
  "key28": "65LhgxA7JrygjNNdDSfPvguaPqM8KFmttVTYoc5t4ppqq7JuhPrkAQHrP8352hLsffFe4LhXUSGpzP7cPQbBVQFo",
  "key29": "5KRS7yM563S2dwF2gMQ3vsHNCwCPEtTy339FYjmc3KyH42WNCqgxNEPLa9QeCvvPPkD21dvi35SWNPGPT61bZHF5",
  "key30": "3M8BwjnfmNrvC8D3tubftZLuMpVv9hPgRpZtTUsFuFbDRdn7fUBxSj6GnY7QKPzc3zrKNEngtvoRprGbHhxs65RR",
  "key31": "5gmvMx7ahei8feRKfxsK5UgdXCD6m3h6g5PijCVymeBfPCA1FGxUtyp69nnnCS28Ap66ndmuWxW8mVnm19rU91n8",
  "key32": "52tri4cNZWnMbvV9tyRMa3snmSwNennbQNsfgX8zWNFCuyfcoBR1zptvv41KaX1aMsBVvy3bpJSiFQzd6kqgMXHK",
  "key33": "5QtM9BWUvYKNXvP6bQqpvKoLd5ZehXKmcjhadJkrPdEUHoWWpm5yBmWXv8LBBaaxgdJEwCqGVJwvk6AQz9adZfNN",
  "key34": "3jBkepF4XVwQEocMcmJgi9XeSzdkovc2MiL52Qry95GRPbaNJHpJRrxnPHtKvg45uxzBPK7Tk7eJ7kfSWftaJegC",
  "key35": "5Rcwv2omtppzKXtJwoGydRn1DCoLScqH67JtiEszQU4PtFBRBoeS5i6VozyAbHRWkqscZkWegfzsyRUXTLZwRYRB",
  "key36": "5aTgFk5Yu4RDfKRLAPyEHNxC2s1WTzDXWpFQ6CQzFZ6pCftuj2JJ8CGBUsgUGQsCee4nUKuafV13QRuvgZKYJddX",
  "key37": "3bFucB3MukEm7FSWDAToE5fErepdypcby7n7rZkHyCL6gNPrhuh8BsQW7242ewZXPb5cvscjbxhnKNoHTGpPL5pF",
  "key38": "2ABAdDYH3Ghp4qWVyEGFbxBJpFLg6tgt1pq1uTnPFrQURu9xT8GSg5Hf4M1wAbEemrCkLGiavnavB3BS1iwe4VFF",
  "key39": "5Tkee7XdsTGDhBoVHTiuyErRdn1Zr1hzrLe6u16sEgbRPzbWgWxqS99bmhytVvTgA4CrYHyBTqZyETKg7MyL3sPr",
  "key40": "4rWARE4YELMagAPu3EqVWnQsqDsGFXxcgByCUiasdU1VxwDjw3BfQgYcpGkqY3yJ9J8HWwQBpkBkgPsVVaFm1tfP",
  "key41": "5FGCfVSwscw5QbzgXUzPmHcdKAreLNi8FnjV4hpqBJP7kQo1YBM8XFEpg4CsEjojvUZV4rKxcKp1AKc8uXQ3atN3",
  "key42": "4YQxnV6NRkboYgSN98wELumZso35NRhVT2hsVQu87JWHJPqDevZk6xR2UQ1dY6iG9nqg6fs45qggQgLQbFcCR9xi",
  "key43": "2Hrt4gSfNUtirnVs3W8F42wNsGuvte7wFdTihW6wdpiNv8Njkv7R15N7vjMd92KvW9UTyb18JoNwNzzkqkBaZzWt"
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
