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
    "dXe3qr13pEDSSYKy989uApAN3evwWDCVrfTfjRKeqJfEhV7YWuLH831pz6foYXu7E1uZjYTiiRNiXFhcAfM2GCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kZvGksy6WEtdpoqaYEdHtaPLn5UkuJb3AZh5X5mMCTsUGdhK6NsqhpgN4zDiL5EAFyeNWxd5LfPT8d7jhL6Nvz1",
  "key1": "3fbxjuosDR3J29tUVXBdACWdNTQ998PgmWW4H6NUQGGAQK8FtK8kik6NUSZqHJVkbh6ywRrgExF9wA1JeQ3b9nCo",
  "key2": "4QwcTNtWLJnG9mkwZRe4mgMsi953AiNx9EEC6dDxsf4C1LEkhN4U1kbGSZ1Nw9JqDzs9LzSJ5UgQByoB1rPHQaho",
  "key3": "5f81Pve6NjvAt63GUw8JU9kQMh1VKVDMG3kVECguEK3YU8SFrfdmnK3Qy7fGm8wEcmgjwv2RrBMrzsRZiYEtByu9",
  "key4": "RYZKNSXr7LPfYgYAAaJ3VHDMHqmh9oHhyBC1S3xoYpdiYiy8zbfw3dy11N85uM9ZAUfwwPxSaJeCN9NirooWhe8",
  "key5": "63HgsXY6YwW2db41fzHX2FUR5ofhBQDEjZ98wgaw2mfFUYD9SJkssYfY9Gt4D6yKTwtrF2eXHUPKqf5Lxa67MDxa",
  "key6": "2FcmhkNyXYMYsenPDs99zu9ApNLAsQ6iX1vCUWhkBC5YBWVXGTCwdQVV6PWmGcHekLEx3rDUMVE9GCFgKpBYeLRV",
  "key7": "3xzJuVuKjAnthYuSBuroUigyH4v2vbvTrFdUmrbzhyZ5qMxUct3b4y5eHmGPfR1HepPqgkoa3PwQLKfu6n9RxDzd",
  "key8": "3A5oQxtdAtz2txTNRMKYBtN9jwYdS8MAbVauBA4NvvNM494PV9uRCW1Mm6GuDejMgA3TZqB83y66ikVj3KR7M2kP",
  "key9": "5sM77SJjELTTcpormzk5GcJobtED68eCcwYumnLrwcByxZ1a6apb6YnwWhGnLrNKQfzjJeHF7QzsRkFoyE98rr1d",
  "key10": "5CcZZqxkzuUBuYfhXWtpXACrkCLsqwjj79c1EEC2nBcZ4BEdqjhkyExpY9xWSEF1F4wigEMd5GuMUPTefKEW3SAb",
  "key11": "DL3UGNptaBz3N6ZVQyA4m4w3AdmVvyvow13CBArPU1QZmVTMvjz88h7ceD3HDqs8akShrRUH5KVdHv8zFmbTQPc",
  "key12": "2c1eThuFqsnvb8wYpDiJE19sJvAxPPgoWP54g554NuNbAwWPeC3cCQycGDvrHnBNYQxZbhpbqCJ7c9KitLtqvmEs",
  "key13": "2WxyzK36BVsuYYfAfZ3J5PVY5gqLBbwaPt1c9GVsfTdyfwchK5ZewxJkz9qZxWQztzK9mMWG43n5fySeVMAkNoEX",
  "key14": "5hDcsQyx6uyULbT7w5NuXVExrxtTcFcA4UghpwEGqbwJUJhvCRqKZq1EsYd4BLNtbgnD5Q7gN9d2mbrEe2Z4e9eu",
  "key15": "5DgMrfWkjF5kvar2JfRiD8eNiYZZUkKv7phXDmmpDWseSPdaUVG6Ak5hQs4m4gZkg9UQnc7XEwX8wML7fD7y47uk",
  "key16": "4jpH5RaJJRkPu6kKrufp1w6HSCUs9VAGu7wJ5qmzzUnJWW6eo1NxiBKpPKq4PRnoWSiGJ3C1y6JHcaur5YVkQEUT",
  "key17": "JfLf56Er9Y7d2YzT7NdV29NdKZbM4j2JD6zUQx8jv2kHz1mufC9sMp5EDMEupXd2JL6zBufWevKeEP9c6dGR2RF",
  "key18": "3V5UYydPgo65knEDqZK78SA83rEUu2prBmVaKJhowvFg1Bo58WFYYei2SkvPnn7RvnY3rDq6RNez3gzoVj8MnFZr",
  "key19": "3DJfoAsjZhWCms6wXe3DqrMuyLCNdUCUN4aJ65zhaLJVni3TUGedyhW1zCGr2LYE3QKuftKiKN38E1oFfEuC4U1T",
  "key20": "3rbP4f1pzbbEb3Xrum4mhBb9KL7VWAi98E767a7cMd7mXNjEFyXzjP5wiovp7fHvVyF67wMGTfB6ULaqKhQ4cc23",
  "key21": "5zbk5fuCEd8gHPPitsk3Ps5Ssy5QUBQq93rvUa3x9p6hjRdWk3e41mDYyjbTodJhbSXKk12fyJAFy9FqPsCANvUh",
  "key22": "BKKkQ4853N8JV7WBeRRFajwGShracfv5ddZet4NioffyQPkVdhVYKvBoeoKAZBmbUuZnr7nCLY9eqmTM1MCuLCp",
  "key23": "2p1gpJge6qwAPY1r4Tgxs1LwdV5ucKQ8eJ3gGFHxvdzFszAtjUbreJN7yr8jCZ5YTLemcfs63YYTC3JqGhHgRQfW",
  "key24": "3Het4LhATg7yLLoR2pTBZL6iim2c9RCe2ghLsoNkyY3qQdLVeW8CHDcRZpCkTKS2PxQn5LUWubn6G14jKLaKTyac",
  "key25": "aAdgCbantKXqaoNBvJcayk3v498iWuKLZqTyWRdHzg2NWSkcDaURPZae5Ywtctp9jKPqWYAjzpv4f3HW6Uboih6",
  "key26": "3buY5nB1Szqu4sM3dkf9jTFNVpmvt1uR6L3atwJJK5ePvSUmyg2yLaT1aZPRkcnxbLnb5SA7ZvcNx8snuVRZa5XG",
  "key27": "3XsfDoX9BTrsa3iaW7WcYjbwkSvtLWW3MP4XZBuxNn5ek5QyZimpesrCBYvqHBYmqsZNXrDgcQxiKV2YCsm38sXz",
  "key28": "5GjLYmp3Q4AsnR1SzJbZyN32Vwtt9Fdn44p62hWP1rVigtA5CWAt5CEsAKZvadpgkcvSu4koY1Q8D9FWCiguXakM",
  "key29": "4Bw6u3TKUFtZwBxj5M1dJ7pzPH4h92ZMEZqFY4oVXLq2uoH3S3BQibwjEL8DXipHqMus4CqstDZRCYbqiP9NhjNq",
  "key30": "3FAfDV4e8ZnQngNRfEFKDJud29B7wcE3JE5TQopMBWs2LKGh7U855yG4qqvYBoApY8Mr7CxMnAoX2zskZkjkQqyW",
  "key31": "66qdCQ3PhNZJ5ZgTAa5emQ5AVbLjdTnWnVvTQTobAEq4FymxvwrPd96yAdiLo2TThFA4Bkon8edsBStJY4BFJ4wa",
  "key32": "ap4Pgr9VyjepuNyTEVGTWY8jHxazVGPvYW3rdCC22h19zPhn5rAqESuDFuT2ny2oVC5chkvD3SPHPJi7pjhe6HT",
  "key33": "55FTR4Reyfc826EWtXJKPKrc1i6izaY3c4nq68Tc5cDA9ejkgxNFwyesqDaZpqF6wpa3VqbEhhqApx2H6uJvEyrf",
  "key34": "5uCPqL2BPZ3HwKGj24dDpCtggybBz2e9A5CAxxuNSeH2ct7Pkk6pA8MCVqkCxbBYwnzuW6SqmBQVn8uV56LPifAv",
  "key35": "38tREyAWxa3rfW55DLPdgwJHQrpWmHWM5iA6AC8m4EzjLQVX2KGtaSyW8WRVX2HZdDaaGAfkLGqsFHdHRuy6P6p8",
  "key36": "25dQPSq4qYYPFDezWzfGPC9pPM8B17fsrA1D23XWgDYLQdgdNUtmbb4uCGp4EMwMEXNLBEQz83efEumSujnG4f1d",
  "key37": "2is2tpNvo4zNoHdb4oCiJrFama5Z7iDSc8NMqs8WK74KRSd3QdG5Ynz79eLnGAxjhrWoCBMSrWdcBZhjMyaAx4Xm",
  "key38": "37M6bowjJWsxmqE2p2SLsQj75aigyKnc1eqQ7YcxqF55HykegumH4nUg6kyXofU8wG2AMJnSrfidcypVeLc3SDCA",
  "key39": "3zcvNvEBjE81Mupg9nBgFRAdtQ7Y3zyKhdVCjjyX4qassNg7NXUvs4GUDHa9FAKiS8EJDhe77XNsWMeYzzjPAeeD",
  "key40": "5EtF6fQzxre9EQZ3UhrULuQSTBZUnS33jBB2q7wWSpk1oikfpb9xcGsj84jNDmVPECHQ7N7w8zqEZpK1fDzdCpLW"
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
