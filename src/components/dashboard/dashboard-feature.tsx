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
    "3s9jSr3BXagmyKtV36ueEzsQV36CVZmoqf4jEpbcWQ6yvY8iKXhAHb3jx9L9sQ9i6sqc42FUsyatJVfscowNz1Kr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42phTw4iXd2743mytYjsg1pRex3Wk2kYXeWM7j1QQFo69JhiGyXm6HdyhbqoFsJfaGNRemb5T2mVVWkdkoxmidf",
  "key1": "44ZcBP2bt8ygVvFRnBjtQvMkRL6fywqZPXRJJ1iVAugqwrhk1rn7nyEVWMaKzADPF82rnyXabDsDZQMp5FUX1Cjr",
  "key2": "5K5Fw9seRZ2aGP4FzeUXiS88mB76hRvnhq37b46rRf1TedtPVvPTnS7fuXUQQYqwTp7HxWS8Y71BXc4k39ZEdy9Y",
  "key3": "GZ4mmu5EKmGvdndQFSSrciYZ5VNFpy9Ro11Y1baXHPQsDj8cDfeyMCzzn7miyjCJunsMvPrmiN1kqKXPjppktLc",
  "key4": "2HSDBjX61eTc2EQ3dBMhTnPiaJTYd2sm3hBmyc7F7kGpptm4nYC3cbtf77ALGkvCaaZYD41ckMoFtBGGVVBpnN7M",
  "key5": "2s7N3vGbDCVAR1hQVUEcBAnMb7AhHNRSFncvQ74nXTCcXAZc7dMmvR3aN3T2ejFWUs6v17HTLHM6ntstzTKLDYCj",
  "key6": "2ZyJNUgmNMLiY13GXTZMs42FJ8v7MdLE2mXXXXGtLsMgdeYqkAstZkkuiYYGjuAnPdchiXjBnxXu4FvMXo2toByZ",
  "key7": "3Ci998u39Mg1D7X5DtnjK5r7ZxkDMseRRG49NVjYoztpr2YC3vpmN5jcK2mN3FuoiwZ7FjkjVNEHn5KWRxAeyqvW",
  "key8": "zPMvkModcdQcGCpjykbw9EWLnZMqMYu8iFb7Pw1TP17S5camnyPVn3kuTExXh1FqagBXBkcHCsGz5aULoFWzpX8",
  "key9": "tbx46F5RknXzJ9T1S3SwNreeewaA7wkpiiiXrhaBzhz56ggW245yaCYAKVFrpQbTmFaELh7gpXV5atbXt9Xe9Ed",
  "key10": "5MsQcnPPRQ8SxTuhMND2VUAw2swLXAASMUWVzUoCqXkMWmA9tuzkMpW1LZroqRUZcQrtYxm7TXZV8GQcxwfoKzYU",
  "key11": "2qaB3hY68GJ2Xxe9m9F7KED6tRBSQicyYJEfbydVmC4NAZGzQNsnB2zRKrAhbFLj27esVmC6NoB4WebFJMC9vKvH",
  "key12": "g5iVSJNiiYYxWATBeXTBxCCHyfBXzYEpBKHu85Qsp6B11AthahK47EWuWdhjqR16hM3VU4fEECy5Y8TWE3473ib",
  "key13": "m3emuwU44KDktPJuCShNu8PXKMvFqBFGak6sYg1Ft8vxP1VKNR8xzDT5DeYP3gwNLqWPrQ6DihU3mtRkZJxt8y2",
  "key14": "mUQovTupdvEWtLPQJFuZZDjBWmYWd2FofgmSNBMzBkxrzbHFHHzicmafhiDMJ9pn6Knx8mVchFrD7XehpsixSFF",
  "key15": "34dVETJUonmR92qQmFi2AXGcRp9txykVMcdYJgYSKo7G6gNqW4C8heqKwjPWDYskrcTTdgN5GzbiDE2pnwyw7uK1",
  "key16": "2ks8D7VM8q4sLbzXkAxzLKd1zndUpPfY8zeThB7SH4r61ftGXyyAjrAoZsBHXZW7JwL6qxWg5mHFKMp1fgVCAsJr",
  "key17": "43NdGh3HBLeX7n3FyZoEZZouwRC7s79j8FF9octee5MkVva7ped1QfcWJCKmnnfe3HrZbb8am8w9V8gPNHL5UCdG",
  "key18": "4JYHvJKfRUpuLhsXBmoWgTMSw2N61ZReAwaPvYni3xZpYZByGTtfVZKDimsTAZAKP6eS8ibTik84C6pznJdJVMAi",
  "key19": "3Vo5JoLDwuGAg6a93Y5uWJRoYuS5uD4MhNS6AUL7iJVKNHtis9fMQzUBZRVuvyNJcQ53hEzEmJZ4b25fuPhNX5ZU",
  "key20": "5SUXUuY4NXXzYBecuTLRh8FemqXcKVyzvVMoLoPAfBRuUpZM97y5voLxRWMjr1Cck2kgGtv7cnuwZ12gKgSDZ7Ek",
  "key21": "2WZbnHCRRqN7WhmX8eNPE3ugESpv5jAsYx7Ky2VoHkGx2hLKJbhtvj24Vi5kzcumUE3S5JcdRtRkPVy5QVRrpxQv",
  "key22": "5ao34xrHZj9zyn4Y649YMbXrdBYZ7P4bBb1NZuJwARqeoM1mjRatnpCASiJXxy7ptY3ecKTSz8N6rKvi2QnknnFw",
  "key23": "3zAHWzqjR4gzFJpA1brjcEYMBe1D51gm6NS89tt5EY1CRGAPfDQXcXCTP8TKfnkE1LASdP9N9zftXxzBqwJpuZub",
  "key24": "2cx2uphdEKZpHrWchm8qf5656hMdgsQxtDBPUbofGPEHNuzipVixHUeWjcXrDAvi1r1DCj5cgGDV74MQDG9cZ7Cy",
  "key25": "5W9Sv9sJoo4FyuVEDqmTSN7fUMncXp8xu1YpyfvdJn9vX5Dhtdu59nzynvZQxDJd7iCktByHwaPUDmTCQr52sfux",
  "key26": "2eu7Xie5nJrw3M8X68dyDkDTP8xSD9DpF2Kwc9QM8PTU57crr6qsqHk2sZyZKZbYTM4NN6btqbptzfK5NbXcPZ8t",
  "key27": "2DoVgacsMJ3UK2YpsLagJS6LwqE5ndpWjaDiUd4Msz34iYkETYC6chYCz6eESfRvj64wDvuF5VeNcM9NinyXxKPM",
  "key28": "2uSKZGEEz167irL91paVucb4LqhUvgVHA8Jq6kXWACuYyR1kpeQDmrEmKADijytThJMyn11KR4QABUkfQF7LTwR8",
  "key29": "3TN2dVpJSgubJNun1ZYcRgcuoFSmf4ccpptLhhsWtPKY4xBqvoojr4gR2hoacgMac14W27iQXpDyHpdk1b45RcHu",
  "key30": "5btMZRAFan9UaJXG7WbfWd3e1U2w9f4L9L2PLpFJu8F3TKQMhuGHvKiCuEm75rBzEhJqdxAV2vjbq9UMM3DDUd2T",
  "key31": "29uvMewDHMw2Fdwti6jChpH4Z6fobK7pBwi3mXTqSNAyTZnNjg8SfNYN1TBd9NYRFEDFWR2DMeyexBrahyWZkGVj",
  "key32": "4MbEEn5zpttpTTaDerdcMeSFmApHxUYVqQbq9AWEGUEqcd8JFFg7bV6bvzutNdBAT2viWEGTbJuNA2AyHZuvSffj",
  "key33": "2d8Jc4aLsqEWSArRdTxtu8Yw2mGMGwzddcertM8YV9KyVVfbcH4AzwWNXQve8zfU6oqEWW34pFeFovAEg5Xbh9gH",
  "key34": "3Ei5frrrugWZmpdoS5Xn9Zw6K2M5rW3JTyHSQJjycy4VoGtMnuVvcoCPpgNbYZQLzavh3hsXgsZocNFfax4nt2MU",
  "key35": "281MnUQq4kMavHitdy6kZqsai3ru2RaggBT6Pb7dPjr9xd55GypwcwoiMp2Q7Goj2TePgt25DCkNxxs3fEALbgoG",
  "key36": "52ae2oEZYgVf69qZzUHbjcntcoyXhKCb3N4UACassegCU29KGKLrUzMN1iYZT2Sb3cUFDL295TfmF5NrqiKobrmg",
  "key37": "3mYu5rynmSX4qaVpQx7w2Bsmsi3NpXAeSnTh9rZB71T27QLPVSsi7d2tzBRZYqg1xYHWEbrHWXVFSPCNKRncTsMG",
  "key38": "2JYyLd64v2swKCPUDNwp9mKnfKSisqdhCnGAWmU1TH6vx2k3P2U4CXYft7GPQj15Nk9ZTEQvYHH6PVy4n1Qn1CX2",
  "key39": "3EEZxwrDnH7fS3RExRG4yxe4ei8bWhteHYyf761EmHASoHsDrrKxnQDHTyHdU2SjTyZwm3KqMMnccibEdeoebAoG",
  "key40": "5ECdkvKXk7ePVUkfsM3JqVYutQkQiB6pLnqhCiiPXsVjmdevBpPshBgXBVcR76DBFKPipKZRdMAYNVMMKaSTvHg1",
  "key41": "h59v4YD9mTaLHCuWZuxGF98v6A1k5t3S8MWX5i1rzaYaaqFGtqgXBqjQ5j6gwfUYvhy4hT5TdDSnGBJqMdcre3B",
  "key42": "4W7ymYM6VZDvPfQ7ksgD9SkZk9xF7GyL3gaC4Knvk2cQTXH3aga2d58hvRPq6HKg3np6GesuW8tZYHA2ennN3bAj",
  "key43": "4fu5Gff5PsN1A3RV5jTVYpsjmPD1GWTADkCLJPzVYDQM742ZB9ceNfpKUB9qUmYRv9aCm9LEA9fuShkBhxuD4gAC",
  "key44": "4Z7RbHQzTyEANwpv29Q3ziWSb3dceQsWFWu2PjADx2WAoQzRy2wnU2oz3dptaftu5LrykuCrBqugKAGVhUXfNfNv",
  "key45": "2FBw4acARh4579Mg62DtTgaAUS9sSAvFHcp6dy5n5yuNPGmzTN7Cu77UgVuVTGqKaRLVrztMbDcuq3P9p3GcPgde",
  "key46": "4xnqbD7Pc8EXh9zo8M4va7NvU7yqT5E28dneTsKMpQ3izAqnLZQntPG9ARCFv6diiz8Rjv2iQeyzzbF4KcYEz78K"
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
