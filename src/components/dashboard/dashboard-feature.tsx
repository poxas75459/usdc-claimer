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
    "3ZP9MR61kghaDQmv19fXiDChG6yQ8LmzmS2xv5F53tA1Y9viy5MewV2n2EwMkQ8PRfvcdEWXyMEcKGVYVCXsbckP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tWZY4gTbdmJiNJmZvYyrAkofhhWjDcErXc8uoKAqA6s8jfUrPxoEPnoXVXrfuX61PRNuBwCpkfsYmiJsP2W2vpv",
  "key1": "3fBWX9iYnwh4jh4z8PtZGWSwMsitFr57TpzteRCabA9v5CdShMShBU8JtunCpkKd8sLhe9qBVtXwxSqBU2mB1X2H",
  "key2": "2p7nHLTH3MoZNBRAXhYDCLNAETr5mJ7V1jePbSY3xrtCDHLVNDMRwEUN8CRpwMVmgwvpY2XVMpVm3yXnWf9ekhxQ",
  "key3": "2reFBjwLVeHAqgoGW39WNGghncAH9sj5F1eG4extyhKpj9NPqgjJtZZ2nrafaaoqPjJwBxwDpXQJQMV4ZgLRac7K",
  "key4": "5FKEES8cmZWNZTY2ixQ8CXWMLTDkXYz3gRYKt2MYkctRg5JEpVe2QCRXX7XZFwQKNzgvREJGPZpKAX72wsNEgbxK",
  "key5": "2uoVBeWXARUrJQwJPDQkCKGnqvKxM4P4rLNQ646vbYTX9wev7F2fQfG7eibuK6Gks8AJtK9oEht3sPS8MdqsjgwQ",
  "key6": "4fy3mW7k1DLGSYCP2tjB6FAgdyeM5JmEMTcsC8V2hDE2tPRHUt9moHhvbdF3Up4zqwUjd4DMst4HGuxkk11iACAH",
  "key7": "2YVj96bY3RPcpssYBtBXYEqtrRP8tQ6jKZifQbhhUuGnUcgZEuYuaGnSYa7ru2cw1eW8X3op1hyaP3Nadm97kVQW",
  "key8": "ERtMAPNhZCZdSQmQWVSRHdFad44LA4R4qbtV1GpHi7L5MfYy567qfiieHPyFQMw2vag3pj1og2yGwRQM9RmVJDo",
  "key9": "3UCRTrxrMU3pfZtCjroBjfYhmUEK1CrdbzeSuNWAdKE5PjMXUrjsqVLS2Rb2oxCxCDRbbN8vhwwZxo7NeQsCgyuA",
  "key10": "2XD96moyPLx8aK6aooPRWoh5tWSAwjVQqTrRcFSmg8whMHxkv2Xd3xBiSG4PYhDKynhBHUqKWjvNyHecq74af1KM",
  "key11": "4Qj9ZH2jCpcDwPg2FrgsRnz6UiXcpNgqsRysvY8VDfFut5jzMDE1Mph5vTSKmUQZhKSuB6PkzKfDEBXmEcmV2upn",
  "key12": "5hbz7nBKmSbBRwPy7U7oqr7F8nU4iL66GLyefooRn5ZAyVowxxxoqdsfMpdnmPkABa9xJRRfaSKZRGZS89CXbte1",
  "key13": "4KdxtKmgkFgCasxQvJGtkfVdFG2XoVDHHGJo6UzqtBz4nAJuNnc3sEwBHQDwjQjzQvVwzbcHFxzPLCpU3Bzk4GEP",
  "key14": "f6zErf88yCpMDne8jyjh1HsnWshLvLZneutuCkmpChAecAWGnnGzjFCts9yFsN1KX6tD5V5dTHakE5FMUJgWNiu",
  "key15": "3wkj9v2gSuWmLJMGpG1JsM2CHLfFMST3EYCpBtmoPUhZgLicHZQ4UiGWLegZ3Vwr3EEujNbMWoviwJnfWswWRLnD",
  "key16": "s5EK8WsLWtJtQM8FTyEjYR1F24xJUERFo1wEHTYfG8xKPWwykVh5FBRtWz88FHzNukLSomA97HcnMAXYXNxEhLp",
  "key17": "3wWjGCXMd18qaYogYbLZKdD4TXJezHjHunLALiW7SoE8mhkx8QFft1HYkMsEpP2BxxZNSX3JKBxqAGG9gGX3VFjC",
  "key18": "66P6T43FwBiPAmmZAMBHMXUzHFtEr2oVCev9YrYH3ikhAeZk5L7KJxaFfTcenJvMHGJqMZHMrgqraKgCjkPkQGYB",
  "key19": "746HKkxPohCu325FjpLdhgQsjZaucurHVMB5kM22MJ1NwjMu3p52UxtJiCF9YiQ9Zt8qjeBqWC9Zm6f4EgtMn8V",
  "key20": "5Wwv1fjXuhgUpdF2jcgXYGcC9MaUpVJhB5K47MnC66SN5wgPJDQqy6QCWGgr4rdNUgq8ybsfSafUByHRXB7oZmPU",
  "key21": "35GNHUHqmy1UpnqTxrzi1kSm2TPucRapZYwhNH1pPMMaGJN9H8vCdKoQqVnh3USr948jYQAabBbzLoTYjbh41jWD",
  "key22": "56LLJLesKHJXpaXKD1jnUTm4vgKaYh9k7uLsT4tbLhEis7nppaiZdtf1YZBVWg7Cehu1tbag9426Czpfrm4Wxrdo",
  "key23": "986xbbWSc9eqBeSJk3r8vNJBvkwJnZd3THmaDVs3Lx3LZ3jG61YRtBht4uqirxbUQHrcPumT2svvLZRbqZRHGJh",
  "key24": "4iBwkvMUfGTo7pRVvbBbZeUGcbpRbQVzKPmGEvrJHw9hHubhneqbndrMQhWiNL8sw2BKsYt3jSJT3WrBoPGyWFsb",
  "key25": "2yKpmJkyyrcVjWaNzy9mTA5VqAkNAfmzCxTNeE4C6vAcQXMtsQNoD2KWQWt7Tw9pAaRSaT5UR1YXZYDxxxZFcFN8",
  "key26": "2ft3U4Y9dgW1sDE9EsYpNpKssHNK8dNLrvczxZAwvZH9jU96u2UtNpgDSChy6t69pyK5Z9RhcnWZxz9tdpKBVMvc",
  "key27": "psujv43LNKPSvX93dwGDdkjpoqs3buz7RkVnnndwSP5GcQ6FmGBqe8jSny6iZTjcsYQ9PLNzcQSpTRdRX4rfsnu",
  "key28": "21bemVvpX7obLKZd5EVRge9WbVpfnmMJkqPoWKGmruTdxWGYqRTKskb642XgLbvXCERvueQe8KmqE9mUnXyLtdLH",
  "key29": "UQEwaPhBirDdyZxfTcwvkJdyouC8v7P51RQgnXt1dc2ENaqBsdEYJK3d23MG9KekaRGGTmsLN3gqDNHufUrwq4J",
  "key30": "4Yh8bhvZnhbLkJXgnYTsfSu2tzBJDYiJWoY7xDmMkKjPsFz11QbC4Jyiy4ojskjN2PzkyvLQ7YdVqETzwgdR6xkf",
  "key31": "62X4A6k3ASdzYX3M3YdqqYXNQFRpizYZPPAsQ4x9Cff2pt7sDcjDskoJxbz5DZxVqCbNrd8ABaSXbMZsRsuLAdL4",
  "key32": "5Dvr4ikKsWYZNF7rxFyYQXmWmec9RRNTshNySw6akT9DHJaajbuTyxn6qMrREjvfVh7zRribgKGYTVobfsSmmowG",
  "key33": "33ijFfiey2ipiSxPn5xqSSfeis843qXSr7XzW1fZrjh1F9PBUCnZMGJfvPf9axz6ZxzxYkkZwXNY3z2ywf69Tnhj",
  "key34": "2z4nBniBAtdrAV6hmVCc1TD3wydGTNujLHqNpSCnUT4zhQ7wvPRdUuS6icdPKnbpf1yQ53zU3mNDRXJhk32D4ytb",
  "key35": "QYCCdpfwY5ZRFrbcYAziEdsBo5jAmu9cV9z65ZeGEkWEQ3sV44sVjBfikvy8AbSF2Qm7vokmsam5zpUyzsC6DvB",
  "key36": "kiFgsAtJLLRBj51w1MNeaKkwUdUhn1r2NDc43if32kzpoRsRBRiLEKtY8vjaWmQnWV9yh9cBwdkiUpPfRhVRDZ6",
  "key37": "4gFtwuY1gh5y8FDrurbexDZ5AFoe4yicPWFoBEphmq5Uo76631ohUbAA1G8dM7MPE9M8sdHnf6uqrNFPReinCdpZ",
  "key38": "4hPoYhUibig72ReRg9u5HK5exUcGMG358SLNqxd8arKLDTL1sBPibLt9X98rSVFZagUia5yctMW6H4TkwTAFQiug",
  "key39": "cjVLexsJj1HCxRTAo1baNmo97999tEZxhB7miVdpdCc42imxyaGA9Muk1tw9wPgsm28myWGMU4uvGB4E1G6YQTQ",
  "key40": "4w2E6nb1DgYumC9pJTMVqiHc8REwsBM9gWdwFX4BG63BzwDUNCNwNK9A1amQq21q4bCday51hfTbeS3ArMjd4oy3",
  "key41": "2goTisj9rYPu6ys9zr9AuhajVC5KcjgRKbK7LPaRhQa3NjCtS6MoWyjsEEBAsJvVDqVyMfiFazLAW5tCU7wqKcF6",
  "key42": "5vKiYPZexWCmPmN8EVb8CaRw7iaefv9hAykuWN5nAUcjgyNDMDo8FCxu5FgoUhA63h32HDNz9MFMRhYA4b8vanE4"
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
