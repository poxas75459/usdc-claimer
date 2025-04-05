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
    "2Ca4ZZ7B7rsJj9c1CCfWoKm2FUTUN7p4FdSpiKvmyfDkHAWykTK8KkX5qeymvLvk4kuCBLD9m6UUE2hLQg6rykvk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kWVWgvtyr8CDsb4xv7noboAmJBjoEjARWfCYxX1a8qWshsDtv5p47YsmHA46e1hi3m6FgY9cpB1qJw1n1aCsBtn",
  "key1": "rV7imFuyueZUUyYg3V4RmyZodbupzjweJfScrqiuxn2tczJXHVPh5K3zGob5NQMb2kK6WZYHwpdTNeeEpWxhn8D",
  "key2": "NZeFrmpmkYo2aerna5WYFWxMZuu9PZme3QDENZs5Fe9ffZSPdturzHSJzrhrZoTxbyR1WWnEV2SDkoG9WMXMhQA",
  "key3": "3i1Qwdf21mXDtbhMYN2DR4ZrKEaXMpocPatB73VR2qwhZG1YwGD9UWs8BMSYV2xoFxLPTY1UxEKiEsZQ4h3SYbXM",
  "key4": "2fPs9WB52JfAwmsupurW8Ur8SHGsntn7EaqcbtQoi2gj3KZmuzo2quDed2teYgRb2UdjF54T5bt9f8Ud56ZXFnDz",
  "key5": "3xCALsVee5ZoLL11nvVED5NzhVU3XoHJtyKuihqpNL69FhvWsZC72hReqDuLSpMGFcAgzZGErU4STXowT63JXRK7",
  "key6": "3Ktpv3sPnkpqTvVgVfj7ZDu3KGEyrWbKpGGPDaPEgqEUrLDrXNGr9voefsU1BoNFUg9kYaw6JwrfxvFN7zeXfRiz",
  "key7": "6kwH9Vy4ZwHiDx2xuZkEfP9fAUorTrvHPC3q5PqPZo6moF5CKAZHF7yyrtsKpLLyCnZnbHzDD56eyYQ1E113A4P",
  "key8": "4jCXrBiKBnoyuFW7jRp44ddwL8kmPZqQcaeaskGBQ7xAP8SRMcZrqcxtnf4hrGLc2cn6Vc1DfAYxJ2d6ZPHkDZuC",
  "key9": "J4d6Y9pufQ2AseU76jcq8ArC7taE1PK4ny1k3GZvKkmqU1rd5sRSXpVpzNXynJMC8mgkqfsjSQ9mRC6HEdVYfGG",
  "key10": "2DCmYMVkmXJVE6bTGr2BRnMwvpAZmfM4xwuwKSErRXYZPshneYB4GnWvFTUBNAswxZm4pKgREqDCvT9D2xawHGHr",
  "key11": "2uj9BGUBSyvkTawj5Q6SyN7f88R8QeVp2AKdF9s5EUNzdjdAyaFUJjAeEp4e7ApatsuN3uGYGN4Rj99GyjYZdZA5",
  "key12": "2vieLugSGzSyCtcXi9qbN31ANXfYXFW1eBZyRcfRBmVHRwaU8bS4ojAMiR6wwubosex1SHK2S2LmnEHPq7XsusR9",
  "key13": "Z3y3sJTNeGxbU1Yhz2zRCX5ihN4zqtdzAgyW2x7eMZodATc6fCM2ZS1Zx1NrAtDVMnEFuzexnp6ysBaBrUMqrsG",
  "key14": "tZ4CfjFZt6dZ91c6aYmdW8vSAnt1i3HPAnXP8e6Wzya6fVJ1tTx1wixXYz4NdpDSNjGMJdV3Kpkw4gde6F5wLH9",
  "key15": "5FPCaJ1mrFatUPuFZumwPJCZ2U6yCeMWv8bPgBCCaqf9RfRbYe3DryYybG8Pz7yJGgZuhjyKp4XAyHqsYumn5aZN",
  "key16": "582Y8PJUMDpSFagXqD7LDomzpdFbMaquRbYDwiEfhA7rY4tdBLchDeEfLqQqXQDCQARWC7Zi9JC2TX3aC6XQwhpL",
  "key17": "3cM1VMKzfk38yvm4krLs1WFuyve6eKSMHWbvrUghTsGZbrb9KhgxM2GwjhbzbViwUFZrzbpZT7T6M4eDnq2W4Gzv",
  "key18": "3wLDs4WviYWheEYerM7rR2nW9LH7QeEoYgoZrJUERahFyHGuPKu7GYqXPMxhwGJ1BmZXCXVL9e6CmMozjcMg92ud",
  "key19": "34YokkA4X21K4YukXAFUdvvWJ3fxF6C9Q3S2Ezk5EJ6FSLEfwbHQy6w8SE4z78SMbSH8sYbo9c4ii21CHyLgV3JN",
  "key20": "5QegQMNiFqvwVjakFmgPoaCzrpFkRDkrewHETuHVyKjFH132R5gDWgH4nDBPYB2grwwM2JmAjBS4ZnnQHidekMDp",
  "key21": "iGoC6heq5UhWVQtU4oiFjdbmYrfmU2LoBJeEHkxGcFu3K1QUJ5w7RdTgCMHPrPn4C17gGVrmYCnpwc49hXzbmKc",
  "key22": "5mKm3gQ5vtMDpvmnqYVAoPbzF2CfacGJXMAmpnw8Cq52dLU7W3AFmAeFwgvKteVccZyVNnjmAUu9ZCvz2f49vyKL",
  "key23": "5zwk88T1YWRnr8h2TEiXwWubpteKt9Hjfs2YZxPUCcMFuYxTT5dM8XECzcZTeYpbNvUMKFUNXFnuF8sfTVt2iDSX",
  "key24": "64ha3gGPt6RSYVvjFzJ7vstFiNgKFum9kjhrYCLNF3w1nRhrwWDqyohP67JtNQomPiHwLRDYELT5Z1DpyTCKGTMH",
  "key25": "3ePtX6kvnoVV62MndoXUk3AapsvS1WuBmQEHm675ytoRUbFWLywRiVtRv64ueoBK4g4RbdMjbwPFFLkgtW3nMosn",
  "key26": "4JuE4jdg9FtvnVJYAENCKLWne9vyGDbHRC73dQDdQpEMRw7mzTHtaJtxQFa1jnHXbRDHFaQUyuQEoSFw8SWx7vHL",
  "key27": "3CsKCTwEJuxe9pogp8MeVZC9n3cALdbizAp6h6kJ6J2N3Gia4odWgQfBoZTgE39dQnc4VULS5kofqDhJhwJYH97v",
  "key28": "5BLkNz3LcbAkkqevaYxhKMhVRTTwe6Jvrm17YT8ziLPHiNw4yjyD71mVEDSQbzURRTTzXdEMjKEGKMxQCRfmPpDT",
  "key29": "2dqjNxCyR4mR6GmACzUVdztwfrpvCAY8PNp63Jg8FJkBWsVddLEgg2fibWZK5W2JWUuSAc38xLNqv3bUSUbCJVyf",
  "key30": "5YuCvNsQeUHHEJ56YiFKM2RFywXCPfPAp4GueuCAhqsDo9tFV9JXqy79XosVE3jd5moJqjKeuotoZneE55dtatvZ",
  "key31": "4tjWB3o6hjMeqRxDPRyzQo4VDop2HE2sVdvLGp7mPNdPyG1MLX5vKvHQ8E2gCXEmC9TBxdVzqVgXFncSLSukDXaC",
  "key32": "wn2cmTWzZFCKDTLuhs1dPy5qMXMu3T73ZxjznXL8Z7Ug68quibB3EhL4N1BCkNsKFheNvRuJQUnKRZQkeDNU9fq",
  "key33": "5kLwV1HbQ8349G8UyjhgsGVDLupQeKFyS2tMaBquk3C1pr68jSaDyPnFukToVk6DQyFeDYiCYbtDx4w4BUbeEKwN",
  "key34": "45FWkWcH53kfRwz8qisUW8eezFqJi8czQQEGY2vUPaRrYJFQqbMRcvHcRKHHhcToE9upct9MDTLuFYNbRDngFtBu",
  "key35": "52BvkR7ZV226K3QEkGim29b5tXL41g5iCdKAanT6GJhKyRyvofZKEHLYPkxAJHqw7rXDjwbopvP9t4yV6QfANwiX",
  "key36": "5JXqWZ156f1ZvjbhA3bTvGUCoAAFsmJBb7yisnFU6WZcHMKDNnpBe1hqeJSrWFDombkPYQmH3LmJru79SExuRcy9",
  "key37": "3xVrjpox1h3wNe8zedPisjJ3sdB2Tpc9fRfVD9Sty4Spkj9V4ZJSh55WTsTMBZd4ByKEucjD2MZu4XYddMuuQvzH",
  "key38": "3KAkyxx7VRXKLuyzBMLhe2dNNbdzdwCN5VcvdHEPUZCrQovRH2PAQpMT2UgybvRXdKqzUJb49zrWQonTXvv5Nina",
  "key39": "4THaFLLznsXFkCMekVmNRbF1VaRRNdGgG5BFGPLBkVkJeBtnkVv5mw6U2Aez8fW7YrDemHHSMutGFZgKGCbX4wAh",
  "key40": "YffxXq6AcZLgK22vS1MAaQi6TLgUt8uvLBvXeCYKacRsBc6iN7hGZtCeWJtXbmR7tqJuT6cMpMRxzJaY558iuji",
  "key41": "4ASHfrwsVqVxq6jF4ryCgzpp43LxtTGTUQumYWmLGEUoBiNyU1bHpnVWFNm9kYn4aGrm1yXUS878zFctCz4MbQeP",
  "key42": "3LDnM83uCCViNKyTpW2PZoWy6Zkj3s2rNHkk1Sj8boxG58tGxPQBnefP2PEKqKvbFytQtaT5XxPZ5oBqjQ8VWarW",
  "key43": "2ZfaZC37D45Fp9YbRGbHF7fZ35aQV5GwWev5k3uVGnM21XTh35FSBX8nv6XG6q4iWsYFcyHy5huict7kzjpgqpxo",
  "key44": "45K1Cih5Gp7NkXn2oVY1fL7vzhxutnb29dXZXbcLvKKb1YSqWnef7sPpFZThEDLH81KFWLpLGL99VwfrnYU2Wh1h",
  "key45": "5iKjfSeZhNhpt9atkKVn8ZjBFWJRBy2ge3p7YdauduG72PuwwTtzNE41eLeJpTTXKZUxetbAS4Hn6KhdwaRjirci",
  "key46": "5BwUdEmp2p476zZaDdnZz8F7UHLrPYKgeWpm73qF6GEpLheCdmisGUcY24k23avmc7Dib8QodAaTsLEKZLADfN4v",
  "key47": "4yMc5xGKvKmPLyqE7BKndKmLiwsCBqwgpPvYyQeXUtoDmbKvtPCNcrfRS3Ye6MWfMspGHZE6Gc38CEDM84JEMJoa",
  "key48": "364auLRDN93AaVXBi1eG8oiaSN6VzbW7hdgsJC5NC7xqDAgWknwkWukqHtKUATX91bUVmvNUh45UgAcaEw1dHaSm"
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
