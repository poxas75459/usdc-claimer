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
    "3jG57bNRg7nFsX2oVUqNpA1ZFXofxrfEyxFs2kU2kLQVxDsk9WEbUYnWh4CYeDJhENMiLSfMvM3EhgQAnVuzZVLL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ckR5vejNyfESFdiEUMoxajzZ3smiqYk6o7w7bNRtEnpcTzBK1Nwrgh7vCWvzGT1KuB6wJ94BYoadYhBztW2RH1z",
  "key1": "3Wqb2wDh7oqHTWiWibacrsu87HfFq9zLVkppxxe6nQjjkhcwaumLMppudTgZ5v9YWtdmqB2yTy4riiirhitRXPxH",
  "key2": "q6waVJbk3Htsej8MGCKMocmCbVb1WTkDupY17GNXRsZfcbU2Fqf9Q3wqVsBBFjTjsReVTJQQAfsST9dWo1ZVwu1",
  "key3": "3GxnA12pYNww2tWrpwUGHh9PttZu1kADqVvzZxahHcbyQL3i1CfydM1cRGkHPxqHrUxYCXuBsnGAFg6KDY35kFRT",
  "key4": "21FfA4bQZv27xnJ1xSzFhBdaa2KxDmrf8baw7J1h9gtZiFgwtAHT9f49vhjrLdfhmMXrSqdMDBLKB1JrtBUjur1y",
  "key5": "3HavWcwvGSALQbKy8b7KgHYvdNoa1VFjrwMJzyEtRSrBTEwdZvQG4TmXpGCg98cT3A4z76K1zUzvV3GHwKZHGTor",
  "key6": "3UFkSBDcSJ8iFCZEWv7LBg2WYNCLXNeFpdZGFiXetC9nSHBjfXt336VKukSZsCXogB91QN18tbRb2gSwSNHKpJoT",
  "key7": "2ene3YWuYS6kfwr8rPMSFX2GkuL3RnVyeFJcABPxsHXBCdtGUBHBPduiZvspx7J9sMTT5oW9Goo2gJG6P3HsvLPP",
  "key8": "5cEzjYujmqGwycVNMjAbYUQqcWeNBrf1JNN1e9VuLwyp8HJSdgVbQgHnwz8NMcoNmrhvXS1VujjgLnXWKBYFbwML",
  "key9": "4xKvHMnw6QYb81jLWtbFHzNnsdHMcGZuFQ9ZE9Q5urvpoWLfFCK8G89ZoitimicRj94NoeDmM6w7pDAcAxc4WqWZ",
  "key10": "A6cPySjB5rtSrMkbsBGjXyfeRYtFGbTwWtSJA1WLDctk5JRP6ZWMobT5SmFbY1d214HRg7YY3SVacFKW6zTAjEd",
  "key11": "vPDfHWBhS45kCqdGJE3NVujE3HVJALcN8eKTqoZBrEfeToGxPp5vVJjY7LtwJA1TAhE9ocE3c8KZPeC87MqB9RY",
  "key12": "G4HMY8niPMNFDSkyiDssirNxYrhgaDWrcJGXWCGYUz6XVFpBLDip4yYiQkKBPuXjDGsEs5M2n66XEV1B8cUDe7y",
  "key13": "35C9bVJEsQZp2HAQo4xzp6UhV1Umoejr27bNDU2JiZq4NQ3L5nMmPbaAnX1gypAWXs48kGXmmrBsYM6Ai4ACp5wK",
  "key14": "8x4XPNuXQxF4uz9wwQfMvqojvs3P3qECsHyh9hXzYZBykxP2JjaXMHPuisTUeesoKCCMC8UtSKnARLbrUHzxPbz",
  "key15": "372cCva1T6conK3U3g3EutY2k7Ljhj4qxQUvPN8wgWMAzZE7T1uR7Z2ad6BYPrUZCGrrL3dnqbWLYQn5sQ8J3m5T",
  "key16": "49PQWqnbqWHVD4snxU5xKAFSbfKvRjRFopq3odHANA35GRoqZ7dEvzpeHm8J1WvjBsbtRgFBuVtPtwguoGGafLK1",
  "key17": "5eDZV98xPYSRT5CoaUpuYWH4kqqGJ7pSuGQ7EEuDa85DVFsVnwtfA8bBpmMp1bBDVEMSDP3DHa49EmrwvkQG2c4a",
  "key18": "2DskAC3SXpxr2gTnQ33jPpGCh1EnZY6ukFnKSXYt5MZKc68wRPxxSkXozjd5wSwya1sVs7UX4nsPh7xjXTWfkyG4",
  "key19": "3FiqB95aAs2nVWVDxjFaDU1EjtpKVqv1NvEPnhQVHtrHsJTt1jS1CXhi7ajQMYNWsMm7kDoHhQj5aFJaDL8kpDqZ",
  "key20": "3TqwERo8ptC14QGEnt6WvHr3wtmTVrx69vfEYPZzUfo8A6dckqUyZdHeFSeoAgY8yfnMPuwXCZtB3CDDZnjD8hZY",
  "key21": "3TXfH81U7HA79XbV7McesmRsZtHW3juZBztpYbj3f9tatiyLM7wAvJfD8kEy1VzfQ1ERKaLERMawYL2cAVsJ5ed9",
  "key22": "3xxQ9syXFZf2xZ3Dq433Cjhr4EGBGZqWQ1K87drDL3cvf5H6qWkWLCt4h29jpNHZhRjrf255WzPcDpEsKCeK9ept",
  "key23": "54gTypNiwg91CD1nYnRukpyTEqWy2KtuXTVWa5J72U415GTGs1tKwyTW54zU3o7fRWFrfL5TGYXMq6hdiiLRqQeo",
  "key24": "2xC9evLWZEq6wrkNW2mXxyXGW52sesLy8rFeLQc7LLnueaFG7iLnnM6nThcYfKZLosjLhmV5ewgGv4J6F7MN1SK1",
  "key25": "566tbhwEunLfHG5NvwvgWGthkVyjPatD7uWaDdJpzrkv3ZS48kxLRu1pya2k6szqGs6ZAc5sNkwNE32YnxjrCZDf",
  "key26": "2MHCiqhAG1WsfBZQafhe6GBSTp9k1nTz8fN1hrPG8ztQ1ZVgqVm9B1Trwfe9PzRTyQLZW1CR3eWoKw4rEnMHvZ9f",
  "key27": "FZtP4xEHw5QN6dKDc1Qg37gZ121SY2boH3zRe2JCN2QXKj72Tw2xQcpF6QrMmmaLEv3gFhsFHHpTeNdhCGYBQjp",
  "key28": "gUFEn9hbyA8WQR6zRG3MudndBCUoMhFRPZcX8Gqx5va6ViovwWzkYAEJvDZTWtqQ8GxPu66due43Lp1EUa9JTCu",
  "key29": "PAW2A8sezEaoLcEXfeKmQuYe9rP4jpqRTeWqN2Y5neTujUVQZGTgeeCTdcYju4Yd6NvnNNYJQdHUF7GbDf92yrz",
  "key30": "49miKJwSAvHbx639UW3CxeM8tHr94UtH4FNAeTSkD2zFG811y6c554VkoLjTDCgx49Yk81HZKTyxZKs2SE73Qw7e",
  "key31": "4rzxD5UFU1e2MPQY1WemLcK2jgurifgizNxErzDkzS2NDbbFQHtix3yt7SLcHVc5PWKVGBFSwTyfu1AeVeHLisKp",
  "key32": "Nzano81t8r43GKAbZgciwsH8qbKSkTHSrHAaVWNVTgELrA7G5kFSkJWYCg23Q2gF2fKA2KKLD2vCoN36UFRoUbj",
  "key33": "3LxFcL9rMarSXiu6FKYeidBvwHGPfJqNFs6MHhRzC74hqs1rZqZ17MG8LBRa6eWy8rSqp677jQsrzb6M529D1noe",
  "key34": "4xCa4dkLMd9T1fJ2PtbMSaQzNJsAnFgsKqoecCCmXBKSvnsBtoM9kN88J9vkaTeCMkYo8mRkczZj7nQUTBwL7xTc",
  "key35": "3kibUwGxNWXkRCVN4F8SueMrHkmg9QpkKpMRpXtsQ3pXi4NrUtDpE5VHqAQtSztAbcv68FsK2LP4qmX3xdnTa6Xv",
  "key36": "3exzcBMznFSN3FzAX1mUNySWJqYCGXxo3igFpXfL3mmjPSoNKwkKKt4vBjv9LF1NLs1LxzH3yTGYnC7HXPMpQgPF",
  "key37": "h8DgepuqXUK7VZgv1LDRZ8kh8honccckcsVEWDXL3Qkt6P484h2SxJimRKN2SjuinW55y2wS4GR35Ru1eaRVnvm",
  "key38": "5T7crKdsfjZoMuBxnwjucg9AnArSBNgakzamZQRfWQCGXdAhGSfXGnzXdSZKF1Z6VUE4FLbHnP97oM71qkk14Aqx",
  "key39": "GMz4pN552XB8HQz8BEFizrK7pvXsHZQPhQwWmFYpCW9d6pKS8DGz7rDVkGsFTkLVukRDzfH7snFHouR8C3fPrFU",
  "key40": "4w4MDB9qYEubyJwL98Lvbi7KykR1MAWE42nmUdeLwVqHtnC4UhXm8HhHPM9nGZUuRSBtf3ex6JVoH7QmYbkKxbL9",
  "key41": "4Jj4gYWSGhSGw36KE9vvnpzf7cHtLf19c3ncj5JgubHGHrsjJspghg5WmiNWMsLUHrYS5tmp8vA6cQMKrUqK76c5",
  "key42": "uipoBFff91DhSEynfmkiGzX3XJ85yPaQef1L2JUQ7fDMP4oGamw3he87w5eGRuN3nL7otE2jT42hDxCfQwjDxXL",
  "key43": "2s4WzsMSFyAbkxiijhpkVbnsBDRm1pSbQ4VnuybAtJdV7DDHaCw6EXBxfJHEJ7bBfTjPYGcy9HghDe9XJ8BDCBVk",
  "key44": "5cgjFeDSA5KAcchfV2mLvxUDrUnx8iHeLTLiqDjbGxgh8UchLVqfcQz3BnU6vM7BGa9qBtnVUPkPogwLBMZNX4GZ",
  "key45": "2v3YzoUjhmgRwPqy4YC9RRJVyRmFs6xJTayX4KVM8XpA8xcCg1mkr3mqxFgRgqL8WtRFUi4H33VYsTL1UKENkkMB"
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
