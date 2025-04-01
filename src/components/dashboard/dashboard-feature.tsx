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
    "2hih4RTxmK5wVRtiVs1Q57Af3bT2LCgk3hSkXESu1u3YcsbA3BC1b6FLYZ8GELaoHGjSVptHm31muG73ehcRxay2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UoUaB3eR8sfucHmTDSDPJuVzYaqAvPf6D66KdtyTtgypjFDuBwXR6YsUG7wQFseGSvXYLDwovdLunDxCgfKxkBH",
  "key1": "3sEkZcruKfpAB8pAFNtNixkASkVZhGHixKuy79WoVdajdDCqA64hQwvBoYq79Xxinr23qFYNVbvAZEadtNpqCrF5",
  "key2": "3Jaxq62JbjCyex2ey4bxVLo3jBHVnjMTKnnPUZTzFEK4GZEpDaQ4spw4U18qFdGJmWdy2iNywpQ2yD2aiUafrd22",
  "key3": "4Vrn9t5UCMCzpDEvicRZGTWyswCbn8Qw7xzn2JqSvEn1GQyBGXa4Fp1zpjigvQ1Qo3V9VAD7a7Rdwa3ThJWCdMWQ",
  "key4": "4UsUyjFCczgM4r3QiD9GMEHRjjhjbaKtQiFTx8CqQEnguJp4X88Mt5HaALU6zxwDUC3UsHvCB8SU4ZxAhCAehqrd",
  "key5": "3J2EydU5azmSwo9NUXjN8ixkgTGqqj5vi1FW4p1MwJntVKsuF77LCWtgyhQrnjf7oFarNCKnWWk8ZWEeBfNKCgbD",
  "key6": "5coR2xL16Jnx3ESjbnpvBdiujfmCnSDqnJp2cq5zKU8NFRiidS9b9dQLmNHXkeGrarjofz7bbJj6VJaoSjS7Kn8U",
  "key7": "61aQpnLxJP53kSLapTSNz9LavtMtZZX6h6AgjCs17xQjh13vLS4eBRUcXJWaChSxYWKXXdQtVSURZyXLQVuLsBZd",
  "key8": "naQHPZ5NqbXkjRRytfR2JAhWUyYB1XRpKPFNTgPpRxkqJTmU7vXELLBkrMXnySbtAB58F1inZXhB3NM5USiXVw1",
  "key9": "3MCQy5Hv1xTguT6BLdaTpLDToqochpYUqkqqSN23YRCNwmshpnw2mCWjBBEV4yyjTtTUQS9VHC6cZThhKkacNc9N",
  "key10": "5eqrhjayr7YT4YhNMJjsAMThPXcvR7kxKH4BMozHyorJYZtVWMecXpcD9eGQ6BczjJDZcnYQb6vrJrJ2EHvXJnHm",
  "key11": "2GLXcwcFuZMTn1rEkyEBcuPV2NuWEGTbhjbwcTvL5V5KRrAptbeMG5fDFpfk8u3jsDhqMeLoq8WEtgZkD74kZ4ZD",
  "key12": "5bkeqeGHZyMizkBGYKyyuYbPJxx83EvvbLwdSpd3mjJRKMv1GLzu6jw3rjq9yKQDQtTPfQPePEY5H26bWk32heZ9",
  "key13": "3ETqjZj7AKWGf4HBcPdeipH4GYVVjN6RaHm3FTeti1iCtiASfmjLgF1JLvB6pJCUbxHV7GPrZDPXbff4SNPzE581",
  "key14": "42Mfcux97atK3Jn8cDwix4DfaSSCNXTr9NakL69PPGx7ZqyJzCSFHtJJWNFmZbXqbPB56xCRxCj1BoMZCc5qCxNr",
  "key15": "4GT9CZ8wuYq3DY3U82y3cU4rPcSQhNomtdcoEieYVDbMpve2CnRTRHrjf2Cy59qTrbDxmEXtxrRCSFQrfZMkz6ob",
  "key16": "3zQdix9MbNyqsxX8SWAdirfpPEpMprhmWbfgGoq1caSNghzcsaTjZ59CVCjLm9v6XFTyrMGR6wfP7J585qgF7WhM",
  "key17": "4cQyNuVSFNDP9NcpTLFPee937dNRGYPXYKeqsRjv4SzpDnJYehbfoV5arGhB24yvKxdJCn6P59bScvpwZ2daQe8D",
  "key18": "5LUu235TNK4Mexnwi1WAAPymzYqJw7WTaAtgdGzhBxmgRzPchT3PksFZ7U3whfYg5FoWPGboQDCvmnnvU6yS7tH7",
  "key19": "5UxN21UkeaADCGvRkdYuudtSSdexffk5cAxZrcaaJGUhUK5FXwTMvP99HpbYSe2XuBZNGZfhNrdQBSvZa6RGMKFg",
  "key20": "4hTPQqgLYcKT1NGNgBDDbDHwTyfWYjqzb9hu7NeHRC7vbwoS1MgLbJZWNcLNJtnWRJ96opudfT8JqKvGxRfx9Eao",
  "key21": "3BEvWMEMqSPWi9Y7dERan7mk7Wjmzf3ArqSWTFBmSff6RMqVc6DNbjmVJrenJypx7ZHWMArJ88r1yzXkwFp24aP9",
  "key22": "38fHPhLaXjvaZZWgRq5Cz6UiqhWEVr2BtiTQ4JYry7jY2ihcoptziXp74NWfNhStYXkpVfshqsnSd1VzDB5ANFAE",
  "key23": "5sQtwekzKRraJFihH4ytwgeGki1DJ8arK8rmiYuP1W3Yi8ALvviCBKPB65m1stHyxwzCEiYmhjvrfZ4hFc6kAaGY",
  "key24": "5vH9aDDm4AewMTyQhNHrSnxmQquiXpL6VbLDtokH6MCvzGBs5mc8XwvSyMzRnPuATh6Jfdbn197oVYzXLgdkvZHX",
  "key25": "65sfhVVyasA4W4h7oSAPT3auEJtgdQTJHj2gK4cXxKDB3gkbqrAxcf9CmW4Z3YTbUHqeFu5TFhEsmsr4o1yjkmHZ",
  "key26": "5AwTJh7xwg5x3SrinpD7NxmJAiPf8GaN4Ps1xJBVXms227wEwoH233zNrMRpfq9wtqmGNMaWQRSthTJ5uYPVXKYc",
  "key27": "3kGEczttL7fEfqcQU4dAHsw3epBEgjbH7XdzTMYJq69EcbJUmN9yF9kB6bxkdV6z6gPyQi9uZA5ErvTVSNQ5Y5gF",
  "key28": "3rLiG7oW13etPnoB9L81HUzpLV2DgEvphpWvU9PAuFUC6MU7cRYgZG7HFaQtszFAuGoDMU4oPxdYYG3VgmZZAGb4",
  "key29": "4P3oweVffJntRN8N3QEBQy94h8zEBA4VTfgdUTfpBSNtoiirmc1NttFen83Fvj2sFZ1onBZUV8pT8rq3N7Mtd3QG",
  "key30": "4fhMBpSc9FRnghrTfjKzscLVhkF9gqhWFeC1uVz7pjGv9jxhCU8bFVKNXJcuWpF9yCZjc8zyj48RWtSt6tBro5MT",
  "key31": "2DJ7MQAGrJyuPtzeauWWfziYniPU1uePDiqmekJAZew8tQ9MmQ2eMPGfhtibJqDPXhArxwwamoadxp2D7m63iJMv",
  "key32": "EQbBMEpfcSFd9Bizpdm4gETPwy8QBp6PtsYJx8ZQDTXx6XVezkhJGDpJ9QNDcWMpW3m14qQaoZGKvjEJKc1bon6",
  "key33": "4G7hv1x4L3RSg4RuT6C4e6UMZ4q1CXUvdP2RUX2dr91HkeKrthrXnimKZ7R9Vubdxn9SjEJ6kb7dZS4Yb6J2dCLB",
  "key34": "2cuDGP8vN1E4Y2LcpPkVNef6dE3NCQ5ARymaUW7t2YQn6F2jpsQGnp7nqHf1e2eYGarQ11rNVjJsfhGae7krLnaP",
  "key35": "5D6zpcM415az1efYi3FqYxRirb5B2795pNFSwdkHMzVCZXT6wR3QZvXjuFaiXg6mBc5ZNta4hozWQNYWnnStP5SJ",
  "key36": "3dqRJoctEAbp1jPqom4daeM1Psx3WkVWHXNmuxW2huRHhjcDZJkHmYwpHBWnNM4oZCB9XZmo7mYerd2CmkUPiHey",
  "key37": "5kgygCUcgToeUsiJRVst7441iWhJhJDyfd2VHByw4K3KLxwYvNTJ9dLCEur5RL8FeY137krt4zAC4TymH2Wa5Fwc",
  "key38": "vYvT5837EgK1UP1PMWyDavHqyf9o9yum5x6qsd4TvnWfUEEEPGqmj83vohUXWWp4G8zTY2qz8miG7bvbAbpBkqo",
  "key39": "4antuMXhj5TAeiDH7Jk4G5pUV72665sPvEEzfH5ceYwZimqM6Dwoz9oRghgiER1UZpGQwj13waLvnZRYaHybNGz6",
  "key40": "5uc5DFbrL6kcsJhcXPV8NYW9o6kpr7GQCRsmWpSnRyrvMyShr3mX2CX6hhAg5KmSRw212Gr99kEtAZXgvJeZJnsn",
  "key41": "62Z29CDyTLLZenwourn4TimFU2NiBg5Ds2RQJmPYeEjoJXM1qrNyuen9wEF46ATE7CuXSDH9UaUEXZsZPXL5TrGm",
  "key42": "4pvdLPZAGsYaLS5PCnwArncphq24ZkxExjHEnSDWMsaR5h1KNP9RzvFwVhD59DCTSLYneTZWt7Q3YDnY2trkdtfB",
  "key43": "tXv1YXQYVcAs63ifxLvS82nGWjxtHDZa4aeyb7steWZYwN8b9ijNyARuaTJRX46HdoZRNBZaZt1EvcfKCEQJK5j",
  "key44": "67MEzGdsBGQsQrrxNJg8WpX1Z7YquT1ky5RvcEELfZLNAEe5XaUP66JkkhhvLxAPKvZUz4hysg6ExbpmUxpwqDZK",
  "key45": "3CdctELucGSts6RagiLiRxhys45qfScax24wQp6QPAno2p68A3nu3ajTDNMkaahm8szT4A8Rxyrs3n8HSYagB71L"
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
