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
    "4PNRK2K8fTa8hwoN5fuEh6m4ig7DLUuv4xB3D59SaQrbPtv3p79AZcLgcwn31pH2ixfo7KYJwVyMcTBsKdEjZxA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qar2jnpUsnsA3giU4MSHdhrwMwVrFKu4LLF16ihJ3fbyD3xSWwVD9YFXE3LeegcC8EJ5ckfZmLhUYJQYUcvBSGd",
  "key1": "53NmujSaCUU9uKBy4wqtxSCJBg3UQCZeCjQFaeAbUCyNJqvyNmkFZZsMR1AFTgoaLZeYe8u9kMttcxHPkr77o3eC",
  "key2": "xcRb1f2iux5kLdCVEH9HRGrMzsymqcYpdABFLp2Fbzkiw2tRBUqAYEbLVfJ3qk8NoGeeABJJqkLwPhFMsAjyaQC",
  "key3": "5TnQco3PJH6AMjdAWcziiHGb6Gqi8xnYcfo5kJB4pJXZDX81g98WWPSApMj1Ew3xa9Hnq1krvVLir2F6xjWh6heC",
  "key4": "4GquRdyS8UuqjoR2AtYizTzGr8h5xAF8ftdUEHX3yxeRntvXoc4cmnvXhmg2cido3LQLNHFGFsW5ivjDfefJWSRJ",
  "key5": "3L7yr6ADjorvhHQ4NCrzJRbsRejiMh68uCefZ7iEDuTkU5QoFLWkn6n9kr3DQyePE4CBXxpfzi59qagVRM1siSNP",
  "key6": "5cMYwYN8wDQq6AShUWseDkio2QcU5CjZePwRXQnr87Hg1pcev5WZ8hnJXJq3W4kxewFYCJm4mpgf4MvvwhRw3d3Y",
  "key7": "31bCLChdJNtAwKiwoEm3AGi8mbWuCgZzJUvn8XaAJhRPnTVpZrU6CLPFgiudUd33PVx18RB9y2gqhKqDdddv9qbj",
  "key8": "4QQycohE4s6Y3S6Z7b7NboXk72cG2EwXDWih4G2qeG7W891HA6Z6vTsmaFFf6cXg3tNLbm8GWcD9hBjnZJ9cx52t",
  "key9": "5yYYKEDa9UYAhN5tMnmMZEutqHPE6wu74kh9EChhsz1sozskRxz5V3RzFZwGeHtzpqCYtjo21KNsar2Qf3EXT1iT",
  "key10": "2G87DjTZCBuiJLMPBbcw1ZNqNog8ZPSNr7fW8jDEbyb9MMbHX1GgBxnf2WszhRfRM1EhZDAvRSCiHPVvZdG4J7Cv",
  "key11": "WzhaCMYGxMgo33W7pU2ttdKaGeLEAvjHCTbhBuFMHcEUokYUgQd8mYfMtPD5Z3eAnTbk7WipMEUebwXMrcsMqTM",
  "key12": "WcJXNJF69seL1pknJ9BqHwCaktLFi7eE8U9hb6gGUFU3AHDm6DeoQbKh1XHoqBTWfhyPGcj3LnNFe3TgZ4sLLmA",
  "key13": "5x2oJWgvZ1x8STjufJfnh1zKNXYv3UD4rMTHrUgweHdkG5eCmooLsjFpFhanCRFJy1xELHJK3YRxbvCXQz8gqvB8",
  "key14": "58ok7UcNJXLbsmdDjYu9kLDvQFHBXmK816DNctv8n5hjjXupCt7VQWB4b3hDGKMVJ12SmiDLUMZHxc4rtmNpX3BF",
  "key15": "2ofiVnaVkZj2t1D3WBizDwkLnzCJKFZFhixir6E4bfo5yHEaN1W61KmPWN9W4iaGhLiYXSeajsHqebnCFJU7LN8i",
  "key16": "Ytx5vqBPiYx2T6ooonLjcMcRekubSMPZY8ppB5sr3W56cJoLNFrYeYQcs6kYaMQxjFUAFgxv5qRZCs3Qi3V5saC",
  "key17": "2QcFXXc8kmeADym4RcDMn7dgTuXtnNJi6iBrsa9PCMXX7vSTPXGQkrgeAJ7J6yVwGL6PgWmf9SMcSLzabvoWirSV",
  "key18": "3kjHozkJX1N3Jt64dfEacTsEt32JmMss2beKZq9sEUoVJZ7Q2LrdQHjZ6zgKd4vuYdJxTRiXkbveJaDbd8xtiJS4",
  "key19": "4zJZ58X3WDrgHC9s6ajtcCcA16sLCnbmp3Fv6Z9ZqZ6F6h1EcTc2DBkUWRPfSXNnNfbM9BkEVkusjXdCsneVt3gt",
  "key20": "3DfX7Xaq7PXcZ637YEPfFsenaqyiNA8Bcbpqt3nvXykcdBwN5XCB6zY3xwaLpSGKmyK4fkUXkZYwRJJriL8MsrXu",
  "key21": "MXV8cRfcDNy4NzAUxH4udfAwaWkwZX6oxK4qfVsg9pgpKt4C1wJqE2KNMgJtqTRbG5Lf5PWs5MHxXmFZqJeey4B",
  "key22": "SngQTX3sUgDMyXbsESBBfm571ScqdGwz2jKGUN3TKLoWiUxWDvTosxmBWEya4kNC6Gx719zPmBddaBxt1UPp3Mu",
  "key23": "cEVccV1XL5g38ehDkHWnR11zgeFJDdEa796XVKYSRzHtUkZcjrpEFt3FBWGitPyvU4cZaUzxXz2GEFhDg4wGNHY",
  "key24": "3BkbNKNsSSdgwXporVy8ZJsmWps6Rajny85dFYEXJxgRt9xky4rZ2jGc2nmtFY8s66re791evdMK72AEDZBbd4cz",
  "key25": "4nCdQx5H5kuAKFnoHFJgzRsdLncJHm3P3UHwWmuuqrTGroqNHo1apufJjP1iQRr5BfeT25Ep1hTNd6foLCGTBXdj",
  "key26": "4MB6xY9atxuVFV8pjmwF3rmgsBh6EzHiP4R3YPhAakUv6nEUsUQfBgt9jbaEcotjfdRhtpuPW99hVjYzCAzkpQ3z",
  "key27": "41tyRfz5PxsvqfMyGDdYngcR3RfbR4btD3hYpuwqU4JpPGj9tiDvR6Ep8Hnaw3hqXms4toAzqYDeudhovCWi8nWN",
  "key28": "3cCgTgLLPMBNFsEwK7byLFgzXQbuRxNrcys9smEojeX1caPg8rU5rG9LacUVSxjsykDxZ61krBkmtmfWMiJP26AC",
  "key29": "3rWvfiVsV4iYztKKM37s4MQx2CkVMwEYnNgraNd53SkBsD7KG4gmt4RHAKUBMU5TUsKGengYoCNCxpFBHAGnoaDY",
  "key30": "25ZfadudiBwiyQZAUzdQzAfHLFi6eNZ6KJfYB4eDMLodawTa2kcBGX3Wfi38S6nLMqE61Q6R1yay5j2YJZmGrKj7",
  "key31": "5P8wz9dqKFDqpCX8GqgBqM45n6dAEX6QMBPDm43GBeTWtyqdmdUREkxbkxpdd4TMMSWB8rgBrJ5fjMop7ut2YG8U",
  "key32": "35qWN7J1AjSjPCDHAYFycTAcR7SKmHrGAcvBxztoiywbTpQSSeoCDjn4EPaqj6Hnpy6VaaG4Nq4pfH2VMKSvt5yN",
  "key33": "5LMCxnRUYCtmHMqvAUzy7C4qCfkQmtm4fPHDqqam1pfcgvXSEnET8g1A9BdZ9Ng3jVugQCS5QTNqxkMU5QrY6CKs",
  "key34": "2tYJyHmCAU5cHH8QeTTpBugMigoffEyNdxzpNLao43A4NZcnctrynNbtHMrE81jAwymGsNmhWVdGtdBJcGqBHWWE",
  "key35": "2Y2qD3wSHifKkLL9BV1YxeWRL6qXW61xjnA86zzaguivrMVJtjz7zTs8r47R8Maxpb9rTp9UYXJVYWN9TGuRxHyJ",
  "key36": "24oCDeMXMvo7A22qcZtp4uqzWEhPQqnuh2M53VJ4dDTvgoox71awQz42jCVTbi6o1WShPQDmYkVVUF6U2FMi3eH7",
  "key37": "3A11fNcD92A2mZenDNBBrG7FAeMuEyKcNKo3YmDHmvi2TprsFaXboUUK7FaetjR2U5vcTcssWDA2cXNdXJrYHq2Y",
  "key38": "3kWr3cWTDMULakYg1veYcU9ejRwP4htrGuUBtnZNw9uCFGMA7mg3FWunkDaoxHMC6HigYJn4divuZB2mncAUH1AV"
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
