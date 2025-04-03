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
    "45aQ973kiCAHuqwSPGMkqYQK3tFUpXipSrRPnXMWEYSkbvCpjnjaPuWRtJ3H9VG9MZH6CTGkYrHtuWkx8GRLNCT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5beimzzzkTUu158eBUEne6fG58ffWCQCrbyouamQeYX3N496JNCzdD4ZdgqeZk2gzNSzXip7sHeACaEx3PGr46RS",
  "key1": "4MxbUJ2Fxq5LzYEHRt1wVTzvcjFQNTMhbEKRqngWcbwmthLtKpdUz89Am6wBJac8gPh6vNMVh25mTBrJ14Ltv9dw",
  "key2": "4JjbacACzZRWMCPGw3b2mmSJxVUEd4rgTjKutuH4ZAhWp3bUcXaezDeGsHfdHzrKqdZBLCPY9BiYfoaCWfYthn9k",
  "key3": "4nN4m3PA72LkmbM72h27kVUsAdfDSprpwmbAzzisUSRdwtCBXywYwNZvqR4EZhsX41nGJYWMabCvVh46jehXZKmh",
  "key4": "2irQG3gV3w7GabiovcDKPPhbAgDDrKSFL1mEJWxkqYtNwgtH6AFuhYmFHMkEDQNrJPVvrsqxgTmwf6oMEy3d2XsW",
  "key5": "33JHjtyaATsjbTYR1jJGCpbDaA1CihjRAzem6zgwcTR7CFhwQV1rF5a6X8669TPtcZ3QN5Hbk5QEWssRoXgodXPL",
  "key6": "3EPmL1RNjSWdkh5dC6BVFfcf4d179MotYnWxj2ZgC9Kk8hxx9gz2jTCq4Ft89B4juJpREuMRsPbpLSyxyCRozUMp",
  "key7": "356gUHNcPB6ZVEgGzbCV5e4GNrBPEYYSrjwPRGnppGetFR3PPgar7Th3dFoKE3a8jdRBRabd28xzpzNWEC1U5UQ8",
  "key8": "5y91FMkmoTS6gWNaq6HThfDAsm68JoCPbbWYSGrHkfNuEgwUWvngkfvvw8bS4ieRiyhFHjiAEg7XZj6zSArx3CDz",
  "key9": "4msHYKsc2RGpeH894RaJ8SAkzbGKkTereiViGAcah92DA6zUZoUJkMpCATMrDRG1NcxSNbaK8u6wPXUqE1mMTMxe",
  "key10": "2qAHYbGJLuaiwLN3AWg2B6ncmPyn9HEabfVyqzwDQNzZtb8bDEFDoYeJKgYLc5fkahrtsRZxHA1mQ5SG6cmuPXwU",
  "key11": "4gUxGCAs4ToH64YHEoyh4RpH2sqveFAa6hHkGthxRuB8t1E1Sn5fDqy8bmG3dt38CkLkzRVXekBJi9N55pbqDbUT",
  "key12": "2DMDGnSSvRwntZMm9DRdq1fJ5Mg4ydUc9LMinZVY5Miz3uThsZg4FSyo7wePuRmcWU5uKWuirbAGVCn27ERz5xdE",
  "key13": "VEFEe2BnudZDH5zY1pmbV7QCagLeHWr4mBhDYNoxswc2PUNtN7FhiZfgG4Z5tohgGAMqofZK5GBE9GNJnYkosQA",
  "key14": "4QMsPdtTZrtm5mATPE1DQAeHN8SRcVd8smrZB5iaCfMRS3k4DnWrxrE61rb4NuJcgMb4F24U8pKTZ88zaocqVuDL",
  "key15": "59UDMwdRqWFvaGPbhQyeQsZaxpg4ocN1Vyv9KQ3ruQhVFveCxgHUDzcrDjgfrgh8Hu3s4PGgq1ZjkRBeWmqT3fqN",
  "key16": "h2cMgjcwfgnhxamoynVcTU1zuxFtpTH2c4gnMCiKSzQ9CCyoP5TfaGT8ZvrApLCGRWUR77kUSXm1j9YaqW2rRiW",
  "key17": "3nWjWLHxKp7CDG4hs9itYXfy4rYxnh8RXnCNmrVWoXFarXZydCUynKBcK3W33YCBrwFfSLF6MdfCFF4ffVMudgPP",
  "key18": "ZhnfBha2sCwkYvp3naVqKoFsWGTddDpLZV22HAABy73EvdmrKHenS4k4DaN2jcGbJmEx9ZniiSWRcyziBUciTef",
  "key19": "3GFD8M72LpwWhkHCC5SC31NmX87KQpkCEZr5UHUcsVzpXqbsnbmXgkrqikuePYRhGv7JxK85BxGippKDEHtA4H9X",
  "key20": "4kFt1VVxjhXViLXze5r958wbYms8pcDyGKERBUm872vfX8zuExibBW7wcVAGjs6HGgxxovYx1tSH3QeN3W3kHnfg",
  "key21": "3TLiy5DNK67JTHsjZAoYpeDbYCzw5NkHVpUqJvnDLAAoWBCHbAYCxVjKH19JfHd1QPnwCwCvXS2eYs44w844eTJx",
  "key22": "41KLF3zJnsFP4GKwk2FvHSXWrUS3EhqQUijWWyMHJsztBPbpaX9E9pgoPjJyiXeREa7dzqJCwxUrqQZwRdAu5gCB",
  "key23": "2aoopCuJYdp4z1E1atpsS5kdZD37xAcrRryEvHBfr2PPupVd1NzKHZMbBx45cdNG2M5bMzhG6H6FEtkKqNcx1AgL",
  "key24": "dReUBA1G8C3DX98uAbAUjE2ifbE8Hf3zydDbUMQYFhZh124EQ9VcYnxkxNofyFhDTVXozE1NUaTT7MYrCb443hj",
  "key25": "KHQuto7Fg4X6Bikvjr5CM9xyPhjiaPt8Kkp3FbPQXEHEExcKmcEBSoJfKjMNHpdZq7C29Sy1hTFzmxQ8y8zaneu",
  "key26": "2R69uhRjC7EZQh1LAR9i5ZkWPxyuqSkxb3VSfNXeqA8vpJnJYLYsuPkEVRuApZiBtstSVSz9BdjZC5AdFehSis9E",
  "key27": "4S1mX6MdCZLV4X9ASGFDephKBc4kPFWTDQ1UYKDjotfNpemsRoJoAQvfAnhr9CFS7U3CK1xZjGzcbc6ktE99RiaS",
  "key28": "2EyyyQYdreGoSDVxU71yWgW3eCjsh3gK9E38ZmoK3gXCgJxDvuEdg9TTyTa2VfCJrYqTPv2w9AYVkJth2dU7XZzu",
  "key29": "2TDZT2ihtGXT468k2nVDWag5hhrZSzxBAuHNL8bgHrSdKVacCAEuyi4QhCixVXxXq4QdxSHfs5fPYRndyzRnQ8Jo",
  "key30": "48HVg8uXTyMGZYFtU8gWPPpBn6UNDJ8S1LTXgZNER8BVXbLuTy6qvzKGEPVB3bZXU1F69M4oCpzdh6Piccej8Sf7",
  "key31": "28s3p8dBrXRoSxtttg8z6tHonSRHNHbqyFHFs5qBZNjNy1ec5y3Sbyrh3TuWhj5kLUVMUyywqWmNXxQk37nDUxz6",
  "key32": "ZMroZCgMttmRYE9wpnXYaUgY1ZBayVjMQEdSQ9bQbusSdxu4kJLEcA42ni1eymGE6SRfEJGns5gMBZUTHvyWJL5",
  "key33": "3caVKGpmzMyBpeKrgiYQrhooBDj6cfktMdCvtUzr8QYUqFwWiEbxdaqsQWPRPJz8FXQLos3bLER221L34tgoW5Ug",
  "key34": "ACNUyX31d7FMXcRRcKNagFCMQqoSB9ontZ23xcdRUmVXKK9XBjFaodwoJ9Pt45fMiejtYA9esCVQVT2Usd5UJ3n",
  "key35": "3s1tQrh2PwtZ6wELP8YzLT5n3wgLD67C5U7HrZNXqSXdAV6S1TGnXyRiyDU5z63cMfjmuKDg8nPxUZu5e1KYr5sZ",
  "key36": "4cTX2u3hfBmcTjpVCiUhdY9d7ohkSUhkBn8rSGXGxC234pU4aKxyvFp6beyc2XVWPBJWsUUmZ4MvehLL2hyjZS1m",
  "key37": "2276LHaLCKW4DU8AemUovYPJTkT3hVdEi2Zjm7EjmhBVaq3PdUDxxaJZjyFfRU6Thzw5MNemy81xXUso9GDjQ8ED",
  "key38": "3Rrbx3QHBac5xQa4DLCEAzEacPqFHEWQdJs6FKGWBZWq2mwS2rmXvepuTMq1BpSdGnEX8XEuEtSfFWTHmquDP7ni",
  "key39": "3PvvWAAY9VPHN3QaVZZxgmM5CHa3kyZqcbrKin366eFSd9x4JBKjYS6uDHk5kZDWSyxXD5Y7otJWiHMc7igXctyM",
  "key40": "5UWLjEQ9VhTqBEyqeo2NhDoiGKb1W83CPrVXSqsxDDWpiRTta7P6zAxbH74tKezvRHQWTX7fNza8MkaitS8KgyD2",
  "key41": "2aoUy5ZUmVXro5rHgvXJeHQPQC9GrSbkACXS4EmUeaJdRbJ3fc1F9zZyQzrAnpKbQU4Bf7EYCY3nK3AhDw1yM8b9",
  "key42": "469CNbzUXg1MqcdrvrRSs9x2n6CTufBZDb2mEdMSz1JPJksQbLUvuPRPuFrvCZavmbj8jKzuq7yDWRtHoBsokHA1",
  "key43": "3fneJEEM1hpc6GzfCavHtytUCqVxkBgYemNN4aCitFFRr34DpMAsdA1KLaHEUe59cpvZpt6azXwVb5VYsmDyhcZA",
  "key44": "5rLGJmyo34mMwcxaEjPUyXJULPdNqiEcSEtuDWD6KQWjSBXjXN9UvZYEtUzqj6jECcpQEsuxSdCAJGUHAkkMTw9r",
  "key45": "4b8oFsozY7XQR7k5RbdSo7QhWyQWsL45DDmqMzAm2NeDEwZgvMgZBFCpEXAeiNCGTagFhNEmDxUekVSfVxaSLdrx",
  "key46": "4u5zovugNjyf6VW5rxnehGeFdqRhhCGVQPVySWMaCmSNwb6SLUmrfJqwDV5BupGycZrTPHYDPtEVENsS9BRSxct7",
  "key47": "4gLRSixFMM7VqbfMMDikatWAf57WNE5hCmH56TfqjoZfqStbRzWDfEi2GyNnpu9h1Hj1KTJzc1obpourEqXJo6dW"
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
