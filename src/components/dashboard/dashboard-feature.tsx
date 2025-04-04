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
    "5Mi1SJsLnx57MjKYYBghu2EZtf6RekKinbAudhXLoUuMhErn8j6S4AjCuSqtsS6CsF3nqFVU3R5rvn3RfLFcmNey"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tPfPjwqMwTdxLJPEhCSEhdC1uxqYSmYgbJ1ndAdHVFiSV3CJen5zweRHnfs7VegK5R48K9xsjyi2hy453GwVKoQ",
  "key1": "2NSA4rjkw2HsBn1kVhASU78YuF85Q7pku28kNuX3MCh4diiJNzN8mWMdirNnxbJbPD6cer7P2BHKwEtvg22zWkRw",
  "key2": "3aSL5c2HDcpvXPXyZdyZ7wZMVyZRwH9weKgZAhCQQ73NcNtfbWzYmnYZLTyyFkpJ63a32GVxgzPQR2MoaTXcD5fA",
  "key3": "5tyQUqz8uXPAfrJKAihiNi9EPk3yBH3PLsrbQqnti9BBpUUgnQVtEnaFJaG76Dogk94yEaK8gWPWWp5wfzGq2ayk",
  "key4": "23mN3GdkiMyxTswa6Na1v6gEyDZxG7ZzQA4uaQvxuP12qNdeV6qzBfzzSiCmR9DZiENM1Vuv5rcdEVsc2dbQWLSi",
  "key5": "2WZDD4NjzbKRPznBevdYihXJmtYZvWjytTm9LRMwyoxntnHCbVfnTQ63SBB5oCa48B7yz6uupd3Dw6xf4AbTcV5u",
  "key6": "4dAnYMz64h428nKxgQ32kNKczSyjFQFYUQ2PNHALdgLuocQ7DosxivPomvJmmdaZZMbcuKkmvgbec6a4Gfyoj77y",
  "key7": "3PzLkesPHLtGYF75y4qz1avjJiUBaWdA4tNxWb6XJXJ9yLHEEAdBCnBSt6dgAoV4yHqVDYHCx5bJvakLAKaW3jEH",
  "key8": "42PovSTaucuDzikn7N3U837imkxj9iE7n5cUbpyY3C7moei8puWNp4fc5Z5f8aY537RVWe9ovRXvXcB9pKXLVYXE",
  "key9": "66nqz4RimSqkRy5WWTHmcX3DGGY2DecuX8gkMz3cwPWHVzZNChQD1Urvc3LCwML2Q3RrttNdQppVxaGP6B1Y9dJM",
  "key10": "3rMT6YAtHASfquaUVtabuQTwbt75josfrJ5NHwXLCpofbQFsjDdRGLyMr94icuFuBv1ES4NpDihaJUw2pG2en371",
  "key11": "5rdk5BmAzLxJn47rgHBmVpA6ZkFRNydn8u54UYxfzax2T5FF8xq7mMtJY2dJeJgpJcYd6HqxGCisYQ4dUMPbYqcE",
  "key12": "2qyyF4RudHTUdVymxXvDhA7JZAYPVuayCJFt1YzCYRgNozgyyYRfDhphH958u4agde37peTJPsGEvMzMEDnoAjW6",
  "key13": "22V7staqmaCYYxouBGp9U4kNHcT22v8j71pVEEpMZw9gh5F4ZcEMy4MEqA6ooi6nwoZV7EpRZKFWdTuCN4hiqjgi",
  "key14": "5PbWt3pzGbBAjVQ8vJnGo4u7eRoAWKfvtagQ76roqjaFf1rNjydac7nAYUmfbyi1fdc5wQhFjbpFMWdsx6yBnsZV",
  "key15": "5jRJrM7WCqy2Yz5GkF4gNbJLn1a5PdYTzeUUWPTv6sbWX3xQBVYyDgp2zzBKiAbfajkhchAxzxTFbAtYTtHYQbx7",
  "key16": "5jtYrYq3FxodxxDfCiaEQYBLARzYfYq3TzkuJJ4tqfy4ziYrQgjMxUgbvm7rAZ2bDK2NcHVB83BWYEArHRT7kjEe",
  "key17": "2SXjPedTes9457RKqCLBmfMWr5BbCjHAjiV2BD8peHYHjYzKh1u5FThuospKdySAB6B6aKS2ZEXmZsd9XP48F7vm",
  "key18": "TDF2Dw4KTyy4kdm5TzAzWBt5WVRYpg9QpP8K4oCDKmDooubKjRbmFyDMN9Lu3UnGdcEn7dyw4ixrsDE4NJPZ62s",
  "key19": "32HGyEeMdnBgg1v6mE4SKSQpoyzwdN2nQ8Legqa3onEGCkwryr63b9tDRwjtDRxcxj1rWLu7m8cvDB9FM6HkBcGp",
  "key20": "2E18fWJcHN4bCD6Xmjq6rdK1qsjtsZyENc1bya8w2aWtFQoCipAQhKE1kK6PsrtTCSKRfuk4GoCgUVMTz1y2ykmH",
  "key21": "5VeNXn5zYgfmLep4hqYK99vJdGQDcRSeeXcqYuAZc31pF7p9zktxbmXseNuDeu63PZQYfDHwPUDDRXxRsobYxAwg",
  "key22": "M1wcroE8pkC45sPfaLpKgYR6QRM5stTgefJbLU7Ef9cdwkBvpDuLoE1ssavZSKAHBVa5atCuJBPovaw32f2383W",
  "key23": "2SbfYwnjJKLukhMRBRhQxGEsEp4H4yvQM6MUK8QqdDT4Spr79ESYoMY2LdYmXjT1pKz7HhxqFMHsJcZ8vzSi1enp",
  "key24": "3rtfH67KYfux8Pp6u7kTuMrzQdYQKbUvuLAuF6edJEuMGrnigPkPv3rCLVqvhX2S1PTnD9bCZBTSmjTe7ShfQyV7",
  "key25": "3VpCHn9YTjovt1T26Q3fGA5STED1cpQi5aHAWq5qm37iHE8Apu2vMnF1uDFg1g9EQ1cCXGoJGcLx5ZgYVjyrXigW",
  "key26": "2bs4oUDhfoQYYp9YGphckHduJ2JH1eXCFRZ5rTcyPvTUACDG4aA8Yca7f4cKxwCsKjvr8eVDYpXEMW447KPnqWms",
  "key27": "35ZXMJeaWtZp24WscDqKSn17CoF51DZHEvjJEMXydJugFkbjKvGtwvSP8mQF77h65xrFRZH5Jw3QRNsNBUp7aX9a",
  "key28": "5YsJzXF1obEWFBsvR6cAxpc85TWLxWTgqYhdDBwdmpEKg8UCmKyZs3wUYaWEULWtuz3q9EqJPKKvtwUvEm39woui",
  "key29": "2Q8EyVGcxRsszHFeo7ThF3xx4j2VRkLphubnJtm6pkqVvsY1Tn8kXULYFURR1fTJrUuzXtievfEseodyWtsdkCyj",
  "key30": "398zhyAwa4noCpY8Jb4WiUAVZS1By8h4krxVDH1tXtL4kmP7Y8QNADiKHF4RrTJtQ5U6BRqMFKhwZH7xdxRCqAjz",
  "key31": "M4nhmHDanm3mi49WW1AcReEYvhiHSUrMbZefyj9qhPmFwYUKtShRH6xX41WELwqfkB5b58VGQm6NjKHvU4GV3WJ",
  "key32": "2DhhqmyvmhsR71wxSHPGiAU7secxeohDL4PMFWj7Vwy6kVLtK2ZjWPfttfGd96pikyL5DBKyk2YsedymPZpYt7RK",
  "key33": "hmjtwd6JFB9pF6fZX71E4c6CTVQW4FE81jTXiJEedPRJeaE1NZNcFcyioF26A9pnjnxxCHNCbB6pBRmyfmUqnEk",
  "key34": "MzbvKfJUdoHhE44sVQS6mYyhmtZ7fVRKXZ8eEqMhbSu8upxeBKMRFwize9phMzgDdYTnosCbefahYcFCPNaofRq",
  "key35": "2atmmunoy5gqPTtEAmmxVKazaza1i1u1uq5GkgmNUXMGuDkU1BHGKK2SoEWfDcMzevjsV54JuqMye7bDMRVRBNYv",
  "key36": "5j8EWHetDymX9d7Yzfv5oCJEE9cMbpie8o3nLoTXfkiXjzZdd96M5TWKTGNUKvg57WZS9u1npTXcmF4pop9PeuHA",
  "key37": "294KV1VUJDMRwsDdJbQotVNticPTiNmtVevQy3kapFo7wR4TUqY5HXEEv4HCZqtGo8oMSszUSrSRddFRn7qT7Ao1"
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
