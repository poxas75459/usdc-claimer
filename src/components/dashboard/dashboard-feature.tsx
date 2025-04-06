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
    "YueG3juuAry2sd8PFrjFw6xk1hxFBeSo2GMKH8a9zM4cQ69iLxpWDPESoiyqp7TGWxMTZbkTkwhoGsVdy86SuBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WKX5BMkMJJBTkFADkbfCmuD68pNFzrTmDEWs6qgG8ha226k1JbU47JSUsu9zKtXASWuxx7EADDjowGk4L9PHJbQ",
  "key1": "2vWpFFCSxXNE1qJWYHkeru2tJmvs8FEWoR5iGtaTiDUTCfSwBvN2HYTE5t9n2hqhMKPbi8aze6cuEY15jmL7QJJC",
  "key2": "FD9C8f8ZpzUBF4oq5VKmoTrVShwbLFhb42gWvnRXcyMAX94VbaqsA2A46qpMc8QcWavBXq52XJFusfXibHj8uJq",
  "key3": "4SK8pRuxuPkxV9eMyQw9Y7gqaYAv4A4GXc5dWn3m2QYch6Ei4LsYFvHREArFjc4486rWQh57gAFtRVN1oA5gSTM9",
  "key4": "4SRmE4eXB2fztVu3WJP4VkHLTnQfAAaWnH1saxTBRJu8THcAnDGppSdrYDqRYwFHe2NLkuziWLeiunDUgLwfU8Nz",
  "key5": "3Ayq7Ekamv4DWvUzDx2CPPn5wSJLzSLoTNL6FNBowY2iV1JVKmtTgEVSo5NRSaEvNfiDC2oizh17JQfgu2go4uqj",
  "key6": "4d1DatD4xYAg67SjCFhPEKhUNuAatiwD3wXiCft8beGW1JsREvzazXe2aef9sXWwnQgFCp9JheGkwQZeT841yLVY",
  "key7": "3ps3wCMW6L3xwTN1JBQTTips9da1TvNC9WpqYmfsEH2UabPAFYbLJxUQQA3E2qdknBmcVTdgDpa8usWthRN5F48v",
  "key8": "2iuMm5EcQ6F5du4qmV6z4tAowPJ38MW4spWTHRTnRLVi28eVLDi6F12UqEoCE5TkDtomvUjT9Cer5nmP3K7hiyCT",
  "key9": "2h4mTYsSn45BpBYxepMcXAtorr332YjVuZTSD4xDcz8LW7WeacXUCbLi9R7DGTbsqepAvdsSb2Nuj6reChnPmXgA",
  "key10": "3XPAT7WP7Mt9y2VqVJduP8zwFyDK6c328DJUbYmKcmU8uWWU25qNgdkC8HxxXzm4kic1Cb9spx7C5LpRKtdpxKL6",
  "key11": "S4sKVEnVTS7kkfadFQZLauSAsPTpXiQdbcgTXmrCKY8X1Crm7bAgauNBEgVV8Zmvpam5jg469mM28TKUZJdTigh",
  "key12": "4ADW7Bo7YgHCSrDGKwJVBDWZ8Er9DabGQE96DV1HbnuL2maD7uMFyqGou73evQDHUqHxXRtmA5kkRhjWiMgTA3xg",
  "key13": "SfwxU5yHHpwQYaJmrdqCGFf973mSt9tf3qSGTndi25TCfrQd2GwANW5pWvFL9kt6hwB4N3d5BLbyMZXYB8fvo62",
  "key14": "2cFA7RnA12iKrMaySjR3HUwsyeNmRU7aPjCCygqSLyQ74ezudtXEk9x7RdxkKFvYa5EcDzoPGaxwqiymhzKiS7Ye",
  "key15": "57Nfg9MwAYVZbE9dDhzvcWJ83sX3TZKyihjXNthduJaUcnR6onJHH6mymzMMunAgjQ9nU7epZR8aWA56sd44yQQy",
  "key16": "btxmTBdSME9Co4SwexiRpSAHZRLGDTqRiDptq3xbcqHZPVvga2KscGMsUr68GhBcxtYJNYnJ4vFWaWG1WHUY1HV",
  "key17": "4oPAoc6fhHoe5JQJtU4y3eFueRV5ZbwmrN6vc5XRGVJ9MKqxXNUhwymFX5sPhaBXAtSFEa7iGLKBrKuABFShFSMP",
  "key18": "2zaGXXgQ8T9ENZYFqLYVaiV3u4pFBiwkf81VMoPN77heJHoeUa5Nkig13cD48GxPcrWoFstr2TLeVTfhQtCQ5YYF",
  "key19": "3sSSPBsRpHdkeCUYJFojxdZDkGi3nXyNhkFFA1kKtbG9TXKZWdUK4shqXSt9GRDzHj5x9VcbGHdftHAYaiSFd6qG",
  "key20": "4nECuA8nAxMtF635pbNzzYHErrKG8aDs91moabQJJ2r437w1xfWehW8AuDg5q2ymMUg7baTsHGV9g9gFPrw4Lmjc",
  "key21": "2Ct8ySrpfBg5BiqEV46WvTqh9yozfRhe7p2AiTsFGCbA82UVa2SFfngM6s6XcQsWwTbAtWC9GHjDPbE5DtuZbArX",
  "key22": "4fqPjibHpm6PcttJxat6QZSUyncNnZkh26MzA4QQv44SdZWseh1YFXfuAuaxodqb2aZZ82bz6DSGZHyRfLto472U",
  "key23": "2QyhAxbBqYSoFeP6UiQXEppuKoWFQ2T4Px3yez5YWTqSi6j88zxVmuPgmQHka7QR8pyMWRikjk4fTR7S4faLEFvh",
  "key24": "48CydR4YiMNXFi1ziiyQWHikCdtuKX6nMns6wxUPQJx3Uqny3o9woT1rLk1ATVHxm1QjEy1htFaJCNg5G1R6DUJr",
  "key25": "3KCeFdE8zzBUoJ8nWcP1d99JWmg28bdBjc1d5reqo6KxSbgRZgxEN91azDEjBku8g8R2RcTFxfCMcNeHcNUfsBQd",
  "key26": "2NGNqcEk7BbCpbAj9ZKRaFgGLmpup6D1d2AgAaGCg1LetGaQ2dMoFSG3GowZzsj2wHiiEoZ6WrmkaMio3sn8MKjN",
  "key27": "3vsTa2XCx5ZwoEgdNRKPCqLCUqy1wJQq5i8paHsy3SdPpsFe93ZCmTtyeYgkdEKUzdL7euqwebQGQ5adjsvGD1WC",
  "key28": "24hUmT5rsRwSnksJmV2BEe3ECfoRdcoLuj7GX9xMWJJu1rjmAPTcDZi8sXmjvxdS2gEiTosDnphUHRwokq18RUFs",
  "key29": "4JBJrzgPWFQkvZQ87v7XFLJX2gN63mvbkiXTdkVaS9ZxtbznFjQG6NSE2f84oBKHn1J7KfrYp7N6vuQCVRz24CHo",
  "key30": "2D6CMUQiehJZfAV7NGF7q2ENMP25tBzNr5vd4ZkdBuHUb5AjDk33E3dwU9UoSvZvUHVikY7KuwuHf6BVpXj6p5qa",
  "key31": "33MeKCLohvgmaS5swRhaNNyyhSaJew5feCMFXBoCNH76o6j8oLD6GT7n8JcPkBEaM5p2nwhN9xTsVj9zL5PkZQFg",
  "key32": "HjTN41fb3z3Cbn2k3QvBBPG641bREFJJHUmNrCHGxQZfpegqpDswsjp1PCvBU34dYD4f5Nq8G2x6DVoNFtpNU4w",
  "key33": "3sDeNr4Kb2jocAB94wAFXD58LGjyQWrQtqNgJ1phVNMnDyxTsdNY8SzxBAsSrwGeU1QdgFntB1fG1Mw7kAbmKoBK",
  "key34": "2qJuEtVcpvwADkeZbwS3qaQYTY3uYZodGXXLqh9VAavYXruugTrr2pZs5kF1eVTUwJvivj133ToyHQundSUgqZCf",
  "key35": "2JLmg8kasYbJH8uD3gSdxNppMgsJBAqzz4bW5hk2rofT2j59DHvuRiNj4EC4LdmTuS6sEnDvXd6CCd2nWk9Uz7Pk",
  "key36": "295HjrYTwnF6m6DyzjoMWX5W2Neey5DuvpiYjuvLTGYPi6GzEaLQ6p3r81x5TU9uVxWoBHkZrPdsEiSLiGXbjixk",
  "key37": "4yEKVdPbaTBf51XwBekh5C6mJJSPK9UUjRcwmiuUkE3bWs3uuUUVboLLujFvP9A7ckJZWC2DPfqc2b2TXd6H83i7",
  "key38": "2fW2U6xD6XmpdHDrP5ekjDbvLKSGsyarhaXsbPDNU2W51cYUpAFtscWFrvRrHxMc4U6BTkqD2Y9o6wPq5ENhwM6m",
  "key39": "5CTUq8BRiQcQvopTR2f1W6cXVWSyCwxcBjmH8VUz5MB9ipXi9uc2UsGtHAuNkcB61SEJwiPbTiFCXDDkqPxP8UJP",
  "key40": "3HATa4JG3rRzeZbdiYGP46zqvMwQTA8rDYgzaHiPW1fPrYwW2Ssu6MS6GrjgUqoCFf4P8MYZJ9rKxw6How5B92BL",
  "key41": "5pqTWT4ZAqCxGuUyLTuhQpViUjS1wJfFNwGn4H26juVttqw1DsD6ipD8HxnzxqPXqrvNCFjMBGJY3CDhqxf3fnYD",
  "key42": "RhWLg7rg7cQ99YZg5rrpq1EPYuTTU68EgU8UM3pTMGCdEzGMF9BFBHTF7Fv9ywaT762oRkXCpBfpzaA6ZsnXANx",
  "key43": "24T27rV47j42g8gTCBDycwmgVD1h9QGAh5t7vqZZgbCwUdn5UPR1LuhpyDm2iZLZc4xedeK6iCAF43xchETWtEzY",
  "key44": "3A4w1AapsG26LSCb6a7ZTQwZ4pshJGaiYZBSNA8JuW7PCEvyH91mEz7QyrFvfPXS5pLMTjaEvrWb2mTzZQZgruPz",
  "key45": "2puKGaM4gc13cWrP88TZu7Ye9hy8hzMnnSAwjkWRQDijindEVLjUsPyNKjE94fgyRgyTT1enEEdFD67NGnAH7xFX"
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
