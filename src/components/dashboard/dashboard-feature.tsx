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
    "382HUAHmTtUC8HyKYoq6Wwmtb7Gs4yGHgvBf3fV26qdJd222wKw9Zb4NoGvfG7AFEzgHrm8S7cVSNBa2dsNHTD6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53wLjcS7MRiUDU6VfRdYM8Kiyf3jbHLp4eEZrRWxCPHXP4GnSRccrX3uzsPNfDctxRKofnuDCAjttDJQQq9WicGG",
  "key1": "3ssw57r6qXw6TDhWrbAKrhJGiMAY1F9CZvqNPUHwvJwMKZew5C5gLMdg5kXvGRrY2ofvJWp5jkCnriXKGZ97dwdj",
  "key2": "iSYTT6u9Z3jii6xc5LZq2auPTPnLaFch1gTvbcfsda4Y81HNtgxFYBzduDCojm93e3vMZR9GswDZN4NDY3hNABx",
  "key3": "2426GPPtPyDq8veBfLYegEPiLpuneVnq5yeR5LVJWa6mAoe1TNzeHPXJsRdcNA6BiFn5GfJj7D3whDzVP4kyVCjh",
  "key4": "UA27wCfmvJshLw1PRKGvgT1GFptDC3HL27fYJy225vK79L668KQbfHDJBhT8PxccFTYR8ReytzsTpTRC394DjMX",
  "key5": "4RipMGRRfaYcUuhvxUkKPV2B81ARZHtk8MSCkNbawgPkqvbSpA8v8b6Jn27CMxq7wUcHdH5k1HknomjaU2SsBhwp",
  "key6": "2Ep9Y7rPd1T37xRwio5SVvU2whSDMogFRCrCFkUs7nwsMFB1NcuufeEZ4Hhr9PiMZGyEAHYCsLkKeKEJ7mj2wzsB",
  "key7": "4FL3jxgmH2HVG5ZV2n1152ZtDaHhQe2fb5W4L5JRDBNzrCHCC1cjWKzhJ59iSHei97c8njLf7S8xvdGfz7oyg3J",
  "key8": "2efUz7wgqKJJP6qKP482GxH2Hm9Ee4uyYSxpkaWDJAcrZ3gRoR19d9uuxqFFKmXMFtqgafNTKrEAUUni8eqVZYtX",
  "key9": "5kJDV74E6fehihz9QmrVNY82KpwgQMkG53naPSx6RwPyaY8wGtnXpqtuFPgVtQzxgvbqfKvX3seHjrKfeBKNn4yV",
  "key10": "5gRLDCjtKWZd8NbH8iQXg2oyNa9sQLBDePcn8kMwtR96PSX5YLgATc4pD7u8KTBepp2QeuWTmEMqhRDs76SLwVAZ",
  "key11": "vEP8esGGNDSvgHrqPiJWq2HbRX1eESFE6GCHs9ZjsPaWZ2zbRKrgMJdnbMTabxpYb2XyHgTvi5x2LL7T28UMXgt",
  "key12": "4uKPrTEJG4Ucytd3nJyYWDMbLC28djrVyvPbr6DKKHpKMAsjqYKbu2VNopjSDTh4zhCnowt4oVixpDUcusXnK93h",
  "key13": "wf4NGn1S5JoPuS4QmytokP382FLC4HLGn9Y9LMncpNYPE6rKyvAABSmcrLy4pLBXKmvkPfMWsi7uBM2TZC9HGNq",
  "key14": "3M23Xo15o3V1NstpUd16QhYRBwU1d9wcotKq6MUhCTvTeg8ncGJjsDgCM9Sa1FZRU3kFyhXtAg9M2HXs24eTq4UF",
  "key15": "2KtwY7VyUUNuoanAgrEU2rpPhCX7ua2VYzrhBW6rXGKfCoGXiV9w98Hx5ArPUzFRw3DGBbF9Pz3FUM73PuzxgKVf",
  "key16": "2dGJ2MPCy9LuyTK8M4xzqTb3nKopvVki67wjbYCKN8YwDdmyajo5i53jcWG8ZAcWDB7vwgs5WaA6fTMgNn8kgo9e",
  "key17": "3Vgy7eYYmL75KzNb4Ptg6B4moC2kTvnEHuboj76eutzTqpeBjN4RUCZrWduyBSdwceLtFtg14yGXvPd8LHH2Ktkf",
  "key18": "TSX3A4JqVWfXjjFy7YHqcPSLH5gVsgFsjFC3Dg2UGpJzPzNVd5xSxyR4YYVUjtiBV9cD5bgvV9Le6WBcpJ14h69",
  "key19": "2eitXmN9FHRJQRPKcUaJ9rWY6ijqeBTQqhfB8JFkWgXxqzhHLfma7GZw3iTeiBhNYMkcBhS9VYserR1qeEqxDeG4",
  "key20": "25QWtBDQLnAjELyqVkY8qE1FMhUHtLTYg18v1cHBXzW8JscnpahMTvan7QhVgv4wNYLFJgR7p3rG4aRm3v6oSL7z",
  "key21": "51nD5A2ecATrk8RwRsrQ3Q9FY6EGGYQAjSYdKsLsU5E89onjqzJ44GRpyc5y6p2R3xkVuDk9BuSTaAYafu9qhViP",
  "key22": "2WborFkg3TjvMgSZUu1z6aWMv3F2gQGVhX8Zj14ASJ2edmeQYwPjryvqmHjCddnuY2dhtpwJNBkM2pAKw37qZj9w",
  "key23": "UgNJzFPFP4odqQosLWB8jTcVAphmujZcEX3b63hM5SanuvfY762KG8SYCTS7xoyAigHw6Ag1Q7FgLycQZuvwNgj",
  "key24": "39uYwoXMneFTKizL8QFBrULAxYULZWgDzgYbjfXsEs2CSnwcjjaUnSMEK2Ko2xywTQ1uYW35KogZwBKZxmCGkVj1",
  "key25": "4DsQ68oQFxTHSMqZZbJJS4AZagMGNgSvwfjgYn3eXTscFMxMV5zK1LSGEvSJaNLChiDNhpgiQ2jCNbxTFTbuKAo7",
  "key26": "du5Qm4mnutHtqNhFd37NAh5mNLW2hasas9XfTQ9F3poL3gsW5M1hkaJxjK2dsCqBN2DDZcWdGnU4dB7Czibfitf",
  "key27": "329AgNyu4jm4AEoCv47CJ7jcRaqTBydk3CsFuzT71CypxaxV8BE2xpy6WY7bVBPZYXL6as95raMp3DFpADT1CrwS",
  "key28": "4GowgZ3c2NLV2dF7P28WC7ojCYuWVcbtVb1r7Q7cKgABN7wPUUpfcHm6AFWah5Ugh5WzE5UF1fU9qcviCG82fUpn",
  "key29": "2ZpAr8xfbeRgQ3SCAnbc9mCPqgCHvVFU4GYwBrL75dsaTCo8p8hbeA4Gkn6XqqaXehrbwSzV5TuvSxaAcSQ5dCyk",
  "key30": "2Zy74N3ipe79rJNhHVGaKov4H8pWhW9WcNjyedVW411JaZL8vyE2RNkR712BreteRLF6vJuJGRmY2Lo8T9bPrdP6",
  "key31": "46S1sRkUZzMHoC2D2aDqRB9k7cTPZNzSKhLCvezcWmeDomuWNJ3GVKDCDkBPvxDL2KqhKTXKYKnK4GZ7gVbqvd1o",
  "key32": "5wxSTWGyrfk3wcFZd35tisDcCgj8fA8NAq7jjHcm2NNSwJC1rW8R7FnmQ83XqC1H8w1XnJW2qHvMB3Asvxm3Uopz",
  "key33": "3qxuxDLy3QfDMyu4q8WFedN2KBdZpTsQDejZKFuoqbd8GrUs9XmYu71Etwgj2m1t8caaEvDxMXqLZ1bKntS7QCnZ",
  "key34": "3hzJJeH9cmNzWiadJ9cjjn3KX3zKPER1qopabqzMZmQyAZBdJXSgSqgXiiCvyUcqHhYBtQ23s8iFU7baVRLNBg5g",
  "key35": "4FHpwETZ8M8vSjt42jc1gtF6axRET6ZnpxEsoRr5qdvCJWwEhejPycLpJNcazQdz3cEqu41pa36fuUeR9XXHWDjL",
  "key36": "5nxBv2eg1zazxJ6CpsWNbQtxtzegeFFjcrkUPKt9bsG3RYT4uB8i885MgS9k3QywfhqRba4xWe2oRPgShZNvUnd2",
  "key37": "5Kox2DGkcFkWcihxRw1SF5xpkhJebpoNLczw64uVQAkAsksmG3D3NkPNWHdv2FsuivctkLuZx9AyGVYWcyW4KFSf",
  "key38": "2FS8dxi3Jw5nHbQ1koNwtRYYQK2bpUZVuktXb5614xd1EFmhVzuNMHGf62HmxZ4vkbRikucLkGZH32QZdhqpPRLj",
  "key39": "4yGwUc8gg5ERgpmxTrJhVe6Qzqx8c3RzwXR1nUotNWFX2Ws4NFdJxKFfEqbcBDU8vG4egicu7XVevX5RcgTto5Ch",
  "key40": "554SCKSgV2F5S4gZjyLVud6tKNZuF3SmKCrPeL5MAFuhBqozF3F5VC2NAb6KPoe5bLqxoNfpHTBexxTbMrpryYkq",
  "key41": "2D86JNds3mS7BWryp7V7NMiDn5wrbPrz1rPSQpVoBkNqyWxd7akGB66e2j1DT4Jo58knpq8CXLDPLrVFTLs5Pfvt",
  "key42": "37VHq2XBFo6hyWLGyTCByf41Sg9cjoDJQqrErkuykY9rZgDbWCys5iyDAeTg832C6Bzv3KPbGbETBP62nonPe8Df"
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
