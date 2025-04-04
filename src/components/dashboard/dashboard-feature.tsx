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
    "43AbXGMQAjmdQreJwtkN9KbEqbaC22FZWoBjXBYXixK8G6aJcAbsHQk8UrdurRYuu8VfECyZnxKpcwxCh4cR8niB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N2u1SHs9TdgTY4Di6dhPo7gfpKDP1qFV1aW4BeKjVWD6GDCMX1x1Wy1zG5iP1SEzHAAGQfqLvyKYo5zLLXsQnMW",
  "key1": "2Ubv6LrALGBqUpXJBJkyn5vg7Lje7nxF126BRYTkJWfsJ6p6PwtXcAsLNskRTizBjkLDePxR9JSakTtQH7Rm31UN",
  "key2": "5pFG3AmdphJynQ1FJVgZxvqkw7o5x914qvzFn2w2sqfZazPcJsMQuUHs35wUd5Sb7onu6B3XRwuY1tR63z1wS2X9",
  "key3": "4h7h6ieny3Xuzicfb9yUUPEwC7phYG4YNTVXDamN7MSG9SniMpYEV6sH8deHztVdmJVULNvnyCn68rurz8NauTzY",
  "key4": "3AwA1aRKQWfeaWvNwtd5JLPE7v3D2Vi7HEJYSGQ5fQU4a8JMcoLvvNMNiDenQKfz2uH3GiWWFnTZ3hN9ceeAptJa",
  "key5": "5fDN5n7iPbQcbFsbHFiJURwnRVZwcSeB97mWJ4ZEhx4nGJ43R5TYNKGjsCRm2q5Pkm31YArkb9qETELXARZVqCTi",
  "key6": "4cD4T3EdjRXN9mzpU9WH1tMbJsxexKHnfqCdrw2Jcgo1NfeUvuoJnrP2BLeRUSno43Y33CQjT22xyTbB9bSFLkTR",
  "key7": "3vo8SNwbRzQd7r1Bz2Gd5uoh6SreT29TECGsyTPupbw1bRq1oY4s2u4R4TWcifhxWoogfU6HESVwQp6BwpDCGVJf",
  "key8": "2ZSbzFeNHViHSbEMGBaSxMbEAdhsDFnKwt2WrFQGTYAd8y6Nc2GUmJis5rqLS3EWNP31Wh4zsUYBikxNMfpDZPea",
  "key9": "343rv1vBBAR7ShPteWaYuFpcxL4dpkyXiGu7Dxogc9T5N9HR7kAcwimGQTQ5W3jBfNV8tCcp6vYVA7SyVGZMrQcA",
  "key10": "2KYimDdyPcm2pSkNM2T1sYEViyZ9KcpoE2acqNyfuwyM6VcsZRBojEZWBctqkNr4mPkmhKw66JuXs6xDHojWnerL",
  "key11": "2vL4s27XKr3WCWdgwPD8Y5Zpzg3sHZTqHQ9PfMq1isj26JYvhtwd1kwCUgpRHDkQzTjZL5HaqWymagzuvPYLmiET",
  "key12": "yDBqQZ4nicr4oxjrT29ePcsVk4PGQjiNGBFhQ5tKMcr5PDEopiXBYEaCb3pRbv6mKUgTU6cbCpdkgPyE3vsSZn1",
  "key13": "3ehLsjqkTGbDXmqGDJfbDd6UMpF1ZFd7UNyjcxXC1znni5VdzjrRykjWyRvikf8gMjrWLvYGgPu3isRS8ZowrtNc",
  "key14": "3yrrxMG51uzwyMQRSi3e33wWwh6uAy2FcRLfo1pYE1qKDoG9iFK9cgAxkbo1mkwevNVUFotq4wRjGePjhFxwDLfq",
  "key15": "5XkwDnA7eoRmoAKMPJAEYM4xkszUJXkzKeVnzwBTJXMQv7z8JnZv5hBhAZfYKaCrTvri73zSNKVk4f1cXUVN1N1e",
  "key16": "5QjMccwhr1CoHncjbYqqiBqyRdisWhJB4qpjNBFQvdBQ2hwmghsS2twXoYX7urPvXR7sn9u1XqWMFL9Kkhz7TD3w",
  "key17": "3QwHnvp2riTSRRCMAYpC85xUUW8sZxrGjepbK8P4ZxXGbVym2wtejx1naSyapvcURJePiiSt5iypfMBCw48JQkV9",
  "key18": "3Zzknp8w45Fs6aGqXb3yP3w5PGPfWeH5zyoo1ZmQoDNVujxQEMedynQUErDbRQ9qHqfFbMydE4yUmWqXWUazyZm6",
  "key19": "48jigGGVvmYugKBroN5ktKABmoAqJWh5uHVuQcWxDGeorS8PidUKXgWroucc7VVKQRSMJ1vwjaiY29gJZ7BvZDRD",
  "key20": "2otCxm6UHNTyeY75UAwPBzSLdkK3P1r4JNR4X3e9Aj9cAaSktnYFziCnYq5z6uw95EdujE7BX64wQitz2K4TxM2k",
  "key21": "4BYXGeoGciEGALowfKntbEn2tkKvGEi7rHJJonqfJJ5mNnGEoHFAzBoK38ZGcLbkwk1tiAbCLrbH7JqmML7GihU7",
  "key22": "4xAByWFA4HHuwkxvBAdGYjAQtAtHxwugNV7UnxBPdHmpSbsJhAoJgSD1o6jbp6iLSah9vzZmDQhHjk4Quk8hPtrM",
  "key23": "tH2gdML3t32CmFzZ6RJZrudPnvYPY61PKwC4h46A4c4seVSjGTWazA6r5MY7XKJDz59hkuVS4ey2Lf46j1EjdiA",
  "key24": "QBKtfyesRhDhHrTrTfRdLYZhyyofiNAqJm5Zwgm4njp9uzZ21SM7MNqDwMVHzdQCV9duvf5fUp3Wgb9xUUGrGjr",
  "key25": "5FKNFXa4L7NZ98mnW3cjjLNKjJEk5pPRDt1LiY8Lo93YE9ghX7nZ9xDLs7Hi95DJzmvhxdwuuPPs9ebLYAWQ6nos",
  "key26": "5MCZ9Gs76J433yL2vXSztDnHPgwBe3QmPnQfRqhCYRFhLJeoBXpciFTGD4txvZzBMQG6mYz7y359Fb5JiDV9FWf1",
  "key27": "4kz1LYmnZPTbfQ6vB1DBLKCLrAXtAQ2SosET2M9PKspJPfykEbxmjnK3R5ntteR36CAe3Lp7u9NyQusNTtAcD7dn",
  "key28": "BAEBU4y8cPg3ndKHqPqA2yc5HMe3xonBbQoRnBz8qcpN6wmKnRSJXP17DPNqxqg3a9TzdtiZL3hRSnqF35P1ofL",
  "key29": "5kR88uifMyV4udbTtEiHmGVHG4GCpLdjXUyFqiFk1cm12xpy8xphn9kc7Au26NTqtdbVPGCVn3y96WAthvHZ74cB",
  "key30": "2SNswVwrtRVV3SMM3hjt1S3zmMfJtHJvvBAJwf4btDNQWtHZ1tm9fmYjNz2k1X1L6WEGLVYW3zssGj6KU5XYdH5W",
  "key31": "58U9dsoxuymor8py4uZApyvuLjFyv64c1mfyR8D4BxdbtP2HY9rvvSReoKrwMmTKX2NnmXDUC8K5FiHuHBknoDWq",
  "key32": "eT4HKu6NQ7kirwdZWfHVHqUrCALup29YqaX1KQMitvWx1tFjK9ig4U5V5kK8ftbeTT4chJAs8hfbJRkkCnkMT5Q",
  "key33": "gXhj2KT9qntukPzQ3bFR5cCNSoVThXs3fsMX98bFUb57fRsKjm4zG52WCKqQmqejyWwKyFHMmfsvW7jJdcx8ABJ",
  "key34": "5Cm6te9J3fhuwvTW61m2dWhaNp5y36VtNfzkxSdWLtqL8SS46NhpNuhtMyVQN5v5Yn82HpivDnjxLDKrG5qihKcd",
  "key35": "5WKnsB5heYPrAx5wHQWtdH67wg6gDs2RYAzighPMfgTHjuZCGU2vxqJyFFshvcW4rMLZuTXgutHxVtULiEz2yDkr",
  "key36": "5WkqNDALnRCN43gk28pUHj3bhGYvyAuhpjUAa9b16gbJR6TXVQWocttkqrtk1LmQScxDFTs1iNYrNwQXg12joG8g",
  "key37": "ZqTrPvoiVT57GwiXrbZWq3G7d9buhy1o1rADsd857RwD2iwnanV6GLFirX1QywFNbNCeNAbztqxjCvehLA5GbuS",
  "key38": "3aVBcFpdEnevDTPHJZtFTqBLRdTDng7hv7KvriqcvP28Hby6h4FTqnKVBHewirDkeUdhTTUAxxsfXriH61NpWPvh",
  "key39": "3MKsFqUVNN332sHqVbjAcDxj4jRqbxazzomNm7zWKWo9i1f326PCX1NYjeC12T6xfQVN7aNunZMqCM6LYw9hrGvt",
  "key40": "35PcK9Foq5pnbhhZSpi8pBWqg5ptEDnDMuDYwa1ocUmgWZJV5c8R8PyCbj6NEo9ATVg7TQ6v7VGQEhF8ZBrpJKbb",
  "key41": "65gHRouyncx3dY4afmWahKrCcadZWg57m45K6adH2K8vjuFJMFTPFAptY8sRW4aDZ9KMieYmhWF4PksNPQxEAzkj",
  "key42": "szzsdp6hg2LdNnPGX8PLjpSJUB8DGMrZM3D5767cRB7G1mjK54hMXAvZFCKmMy47W6h5ESYTNdBMqPusQ3iKTrK",
  "key43": "4VuL6Uq828mK8aeGGX6C2Wzt19nUe9S9xySGzzeCtjhhvr6NrxYfqBfTsxG2bATpUkepcMhzMhP9WSebqR6fxVNS",
  "key44": "2rr4T9rcpuoMRxjAbxPi5QDixrYBaUKpXBEnGofdJsRJMe1fp5mKCugLxyfFV5PD8fWEH9C7a4ndq1XZztEVKGqf",
  "key45": "2mjJ2qSd4NN11nHLg9Fz58XeL1emUYys9bhM9ttV5ZQkJb9C5h3K8xdcK5yGJwNrbzLU4MRJBBULkxzA3kYJzsi8",
  "key46": "2c4jKfk1a6gyRziwaBXYKPXm81wRZ3bBpiDdHTV2sCDdWxSadMQi46v2FuM5HhMrCJjxUYgUKh3hvFti8N7XHsza"
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
