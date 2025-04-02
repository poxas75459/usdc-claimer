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
    "3bqWADkuTAJPQrNExqbWJHNmcisyH6WeFBoVJ3u4bwuGF7yxJ2FPkEpdYFjggUZBagffybFc3FMG5bhGNuLEW9yk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uEBTwDhdbBJZEEyqW2Jnniorxz4zABjsCcFKSjLsh3LC91WJzA9qZNiXmyWZqmmcy8xtiqjAex9gov7bHbQggJU",
  "key1": "2q6hYqTxmM99BjJ644VpZPxk7TWDbimkSDPsVLqkJ9bWYTsA6asFDPYtd3WzKB1X4AGpDt9ZmdTJKCZCF5PyapCt",
  "key2": "31xAe2AG9we6vg7L99VGgkKdH3qfvnQrJq873TX7fHUQfpMxNga6VpW4ufaSbtfohsaMoKe3yiCYe5W83rSsLuab",
  "key3": "2SCHj4CFy3pH3eYCKTUK3A5qy6w87PK3BYAGyZaMwdBoANCpfabZC5LiGP5UqiEKr1uMsfGwEqwP3vg2xuvWYGXw",
  "key4": "4apTMt7mgB81mqFLwXnvQ5Hgm6mzcaAqPbLNTheYk24eADitjBznGpicNYwNXrjipKsEBWeEzNjnuahrm1pZtaSv",
  "key5": "4gzk26FN7ea7ULjiFPZBMssoSQea856jaBEPjY7kgy8P1614duuMoUxWJiNxWftx4WeGXjguXKqfXaou98QXRrqk",
  "key6": "57nJguCY4TpuvJv2RXyyfyFqN6wnhXoRymSM2AATybH6sCWQmcGCnmqnTR8Csfjstor4QPosVfSZfkRKLj82ohcR",
  "key7": "3kaC3TeE728ttrfv1h3Qn1XexbjxFwDW7rUUSgo1SWrxoSzJC5rqCK7WamRSEhsoMgXmTP5nka5zBgidLHxEUeCn",
  "key8": "5FXWdJLmvnDi6gr6xC13CDEuw6KLY8UwCvSnnUgiUp9SGywxFv2UpN5eh3yj64VSPC8BvT5KpctMDMHKY61guBL5",
  "key9": "3JB83TPDjUyW5wCcDSEXsfXRewArUUPsq7kuHVtGgpbj2oJnHJUAVJQvA2mfeBPWGUwoMcRBn4smgviFZC2RFNDg",
  "key10": "5mWL2rJraPiJv6o2aEVCWbVFGcYQABraeK7uw1tVAQm9yoXoa4kXMYZcLumGTmqG66mKfjRqbMTTfbKGu9o7wY53",
  "key11": "e7ffnVhdqwz13XAcSXWN82qRCqoXAaS5MzvVgNB7DHi1t2f4iUZJWLStLTY9AJqQatbYfyf3GEYC3xojGt6eepq",
  "key12": "5MGQgHjHYNuSPWxHPsBfrwPKmctACVoddp3MR2zYnSoZ4Su3tzVRVv4m8VN8U274aEuGCSob6oz3LogETwhDuCPi",
  "key13": "3JeUzkHhzgg3gnBw3cgAUiepLbKyTAKpetq99SiKMaA9jTbFw6tdvuWtW4uzZ5smeMYWiaKZx7wg5ZpqWLDoRjWC",
  "key14": "36gHfq3r1U2UyptYH4gqRuxmxTXEX95K8BNVWDp73XJTso2VbEqsKMxdXdZqFTHKbo9dBdHzS7sPxWatQg4aYEzg",
  "key15": "iPQ9M51zpqmpxJrAs1XAmSpKSD7C8Xu9jCi8MmFa45NFnr7LXHATT8wL9kM7VppcuFEKnQ24M237RzzBaUURHsL",
  "key16": "53sSLmoL4HCXk3xLjRnHe4rqseuKrtWjrz1ayhQjyQRzkoxPiDBuYY2GKGbWL7kmFUNDK65Szbt4PXhSHZBu3e3F",
  "key17": "3iLDhFVazgZkNoZUPTjJ2J6rSKp3L4NLqRofMycYrGsjG3UdUN5sVZpKeUpmUEuV3dhaJNCG8cqsgRiUC5p9jnVN",
  "key18": "2GKJ9gHDQZQQFeAHcmdesQJEUoe7ZRnATecv2FJKsMtrLYveisy69L5vNBa2r2UP4td7y3US89JpZczaYFdHNSZs",
  "key19": "4sySEiie7FVtytWUrbHVepTMeFUcy24EJEHZ4gjnYBvHkhfbnNhHVfsAycMUYnSPuei62x64fDx8GrczMc2AWt6f",
  "key20": "3S2nZDJ5rhuDCvmpEpte91CULkGTgXz5UBqT6KXW4tF13HWmDkZgcpNZt1N7oVgag7zLaZinhJq38zzhMrdPymy5",
  "key21": "52ACEGmmfXBvKEPPw7z1aQkGYSyte7bxVeCXDy74g1QGqwLtugnyV6fHY8NZE2HehNaUvn8fiYYbRPKdpUF7uknQ",
  "key22": "JC41hk2yV3mizzHE5K2Wydny6K1s27Db1PCUiTzjDwy4Y2UR8PPMQEL9rqxrSjRk3E3WV4SAzwHZaFCSP261y2e",
  "key23": "4RXriBdz53hcbY4WtEqn1PLEMzSssjz4E2FgEnsDQbrQQGfPeha8ovWebn9MRYBkhR6nCckUm4V78mJ9uAjckTWU",
  "key24": "4CVJKP9JXU3iWmjGeb1WX6D78uxXGS3LhXqmw5FvFUQioSxeSqg2YHfC1nx5JTdTtUCd3sGvgctmQg5cNPvw3tBB",
  "key25": "62vbq887YEdyYzHWrPVm8s1KCu73fUL9qwoNReMjHNkM1DfvV58EXeuHcder2pHcVGMosbRscUNFM6bHntqJgChg",
  "key26": "3nfP7gAeDm9ViVsz7VM6JfsCmUkRvNeBFLh2FPS7AT5o6b8ZLuLeMy2X5ESF6XTG8Mr6YnQFhqurZ3hEwMJdZWzN",
  "key27": "Un4WbNvvMER7Vp6EcoKYXdjefDV45W6bba28Tk1fWHrvV7nMQg3eZxnGb7sufmpLV3wYx7Z6XgWttwDrwKu8BzE",
  "key28": "3oTtGoLTHnYCycQvRSfPyNF4wV3n54gMYmu8xNahu6vKVtPrqJCUQcD4DrJqrQt9CESmPa4C7kAm52d4aTp7S5PZ"
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
