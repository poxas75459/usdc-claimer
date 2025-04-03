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
    "DY7u1n1EPaaKBHoahEaiMj33s4VT5tSMfTx7RdwNEuMdBE7whugSKmh4feH7TAPHY3dLGTL9MhwpsDQFz7d11A4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tJ6h7KzaGSLYUnSWAsbREG89eZNt8qWrYyCUhE2J9hJGor1WqKABFyLyA9YoFS1aR9SdghSMvYKxZoGqh3iiCRh",
  "key1": "4CQWAriKsK9nFhVcfozmP3CYmgS6gYzoWuH6VXtB27XuM98iGLt3HpwiSJ4LxQk5MYF5YDp4sud9YZEF929SFfM1",
  "key2": "3mfotj1XpzXsqii2GGhd3eRjuYXHEv3scAbzbxvaY5J9Ki5EfbkSnFHC63sYi9tNWd8sp86N3PGrGe1dCgzDPUdJ",
  "key3": "22hCv8wGK7jXFyU1xBkfZj5JU9Ct1gCDZPurhJDCHCP5qa9S5uit2eXJH3g1x2e6ztv2Et2EjXM8XhVpXcwJj7bY",
  "key4": "126Nbio5nViQDzVwrsFu1aE5UDBMtjp83Tvxyz4YWPpSjocvgnmcTKzr9RW8jZpTAzS25G7G87sqGBJfcask3Atx",
  "key5": "37F7kWsm54NLaZcJrHtb2ACNibBEpNwEZCL4PwmuTJWhsechnx17G97xJkK3qpzs8y2mk4ABMPcwwdwWVYKK9Aof",
  "key6": "vb2NjJhx8GrfhbYZq3aqGjTfTbvmjpFtiQNc8gLNjBx9rSANhBFr94Xdocqj1ea8V7tY2xRrEEv8S9Zvaq6Qmhh",
  "key7": "5EbZ5Tx1is2DoEPZEJrYMBXaKAmGpq8xbE6zEF9mGbQo21a1zUnetEUmFDEPYzeUbHfhPQewAAR8f8Bvk43FfXcg",
  "key8": "3SuKZvSxFXJPtZQiS8Bs3jbc3X6ebkeBML6aokxebS41v6tCNmnX8Q1dUy1fsUvd5k8WeHSdgyRD5RoXPtuTtDr2",
  "key9": "JKGSjdtpkNhgHo6LDP2oWh4rrMcs6AVULvcNnQXriikzFzH9p3gbiBpj68ikxvkvyGciXK7SrwwCRnbd1VpHyy3",
  "key10": "46oGUzboEJ9XZKdmcoSnBcRZZpYmBns6D2mmXKRXvFUNfBqUZBDFAF3TSqP37G4zSQE2s4fPvdDj4FxCUbnWtgDF",
  "key11": "mGYQXewzbS6zPbGdkmc74q1czK12ui8P7tEtyKo1xNditc6oP6Lsg1AGwrd5zWPNssteX5ftMSzymFipT7zrYLE",
  "key12": "5Y55oVeUDtG4XNhF45uY1dQwJAkXwffKQZueH2LbjY1W3yXNqMRartq3iyKgwgAxmGTpTHc85Rj2HuDp12J4SAir",
  "key13": "mH1VQ2J67dfiAeRmYPsF2PUsm2gk8RL9wcDbBqniD2BLfabsYWXxezaByDRx54Q1uRxcTQW98bn6fDN137eD42W",
  "key14": "36ctU5XXPvSkXSFs6yU2MtE1Je9yiQtyC1HuDU6iP5Qi5UUUUhn7AN8r9LEke4oAQBC1W3jksd2zQEG5PxUkfsM3",
  "key15": "39xQ2bC3sRFayW29TDA5bVhkvAPnFg7YjhuEvPxmF1dMiVA7p7brgpDKMwCi38CqURDbGpCtot9XVkz9xzcv9hGG",
  "key16": "3CseX5UYxrhMy1RzgtAnwKi7gF3E4PvmZBy6iQ69Zd7BdGQcmYKPfsD95kgVxu8qX9NUrjE8LvYxc65ENYpr413r",
  "key17": "AYAF1ruc38iAAd5R6h8GHTarNmFVWioYXguF66ASx3uCmUqK7nALo7t2LBH8efGRfJVLcP46UTsupqydSNEWgjp",
  "key18": "5RV8wgU4bo2CN9oFCdJS1e3NVKDzpPKXDJpM8QJDKMgmiT7x1Zucav9LhYkcHjh7p2MWijkp2t42wwotW232GR3L",
  "key19": "2hUmC1mZDnfrc6szRrHF3c8pbF6SrTh8LQg28Bu88Msie3KPkq7qDaZnSNKxsJ1huKr2eixV72rX9rZ9brA9LAs5",
  "key20": "2hK9575irzEknUySfEf1mUsQwUqdMne9XQCfPcHXc1i4WqnhmKGY2G4qpC3CwfZgvSrnPUyzgzVTk2qg1jTV4pKK",
  "key21": "5eUb4RfbWaV43NrxkiRqj5ozuxvkjFCWkEaSD4FQEZRh2W1n1ik8YMybrU2r3xqbvGnVqhn4vEmg7n3mnNAxZemY",
  "key22": "526zkxmRrYAFs76ptyxqBCfUyZYVuiajDhqspcRW67TVyGowtA6guUnsg8ypcU6UDscWPhjQRdAF1Yp8XX46M7Sh",
  "key23": "WvRVWrk2qg7Yz8CL1ScbgcwNK7CmSyPAm7PZ95yWXvNofQKxDWWGuFXE5RCrALufX5bsj7yxmYSKpuzzxKg5ww2",
  "key24": "3KQVZuHGxZp7hanEht7APaZP4y1BPGjCgkgKjhjwTNhWYSymnjzeBz9gwKUvarYhdM1LmUTy6DbNtN5pgSn7eMvm",
  "key25": "BSoWC35T2rXykQK7CEDWNChxNV4EMtqXFY1qJmqZLz8zPptaQy7AEH4u8vhLZWbt56sFLAL6Qei9jCrgiwLhrxD",
  "key26": "4ksDgWb3bjsmyzExRhvyyxZqAgWbrWuNQTkiXoXFifQzTHEaudbQBftNWArszyWWAxLnqxXrrkw8PZ3GQREQP2rY",
  "key27": "TKxg7cB81dkefejMKBdF5rMi5darbh2aSQkgPXbsvLzbpMQfemuKHKd5kaagBbaXNX3ezhaYkXTTkA6TP6RR1Rt",
  "key28": "2ZPPoJjTYwEB8J7GNnyrZY82xHxyLhMHm4Fykuwp7NQqFkSFvKYafctvgmcWtxe7joGGmx8pdjSxM8AYhWcQzoq3",
  "key29": "3DwSuEXVeo4xLxvToFKBVX3xsQoCVFEHQTmjDqd855uMkd3C7KzZqvvtSSMMuYwSQb57sjtBRJDKe6YAGQwgpcGV",
  "key30": "4WfgCGj5V6uZPq8FNMSe565RHiRLZwkkpzLvTfEBdXXqyWdBwhiY45uG1vkamGY2NZS8RBBYDC5dtQnTnmFePGJC",
  "key31": "49oSRV22pH3GqgNTb3GGF5GBQw8gRGyj1JSsnb8V5BPtEurdgUmicBbEsvfQCZojEd3pqqX49n3n5VB4x6aK3rFE",
  "key32": "2cNZj3sapU5fxxmd4rrKyiqTV54HMH6RCnKhodxpH8JVHKda4Px9LiWz8kESLeb49EkscPr5E9mmaBcYzzXu3aEW",
  "key33": "2QFJhZyAeaAddUpfP2mAzGXZj2umC9MoTFeXxDsLVpSy1Et1pszi5SerU16a59f3A3JJwn47R7EpbzVrge3p1Q94",
  "key34": "3yHRPCS3bQTeMrufwJTM6YcVSQjbvtF7McFdq3xRhxrdoaX7dqeiiExbRdVob12LeF1cDheGxXWYpxjaxRfYMLdL",
  "key35": "3vuzd562BmjtX2c7FsTpZSgSiTMndBmZLTEF7mCiMKux9avEE9NSPzjGxxFKGuW7MkuajHELS21jvTaf4cRLtGBy"
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
