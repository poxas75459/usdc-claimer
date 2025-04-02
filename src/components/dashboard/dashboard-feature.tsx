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
    "2RDsbAuLsyJFDxNJg8JtJViiiyzVAMfHMDQU1MF3ejPd9q5bbrwzm2shYXVJzvCdUoayDShYjSTq3bBxQ8Aa4Dd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CZyGbcveseAanvasM7gXL9ANKtuu7j6sa7C5nCEk1vLd7RboGPRmQ3NYX2Xwebut5vB4TcQMKRAz6b5HNyX3aH7",
  "key1": "43xrLBWwtAq5MxF6WwFDc7m8KFB3WHY94xSp5W6UJoq5wKs6RM9HsdTppS2rzaiZp8jTrndmTV7uAvnxPsqx6ct1",
  "key2": "2fnkrnWyZoeUKdZHcv721vxy76huHLxqTw7KotBbRXuCGz73jbpzf2EBJ8CVKPaq56UiujWvuRh7tZB38rZvx5P9",
  "key3": "4xYhSKz2X1C4k5ot2fFKQe7V2W8PSNTgaspAWKH3oAY2d1V9SQbo1P2RsN4mYS9A9ikaPKH2o33SXB132Jg64Vn9",
  "key4": "3eM2Xhdu13esfDP2rAvC16KEeNCQ8hRsdFff6sK5hTUQJMsUwSh53N5aCEsrxG3GkE5TYYjSiTRNJjg1Y6Pwf7ho",
  "key5": "4YGyGB6jYx8jSPmP3G8YvTiM27ML6AJ2zpDtqaakzLGStpmYvXhsGehVutqXMHsdzvNCJej6hmAEKZqHmJ4vFXDd",
  "key6": "4qFRqh4885veTJeBdf8x5hbYuJgVyZfyxNtwgqgZ4qdpLdoYNH6xTBxPtZiqmZcyhrY2WG7Y5pGofGbLHphg9u1T",
  "key7": "3PYry3Ku6CrTBj6H1WGPmLSC41zXa15rAhb4LMb4MWVijRjjSJdoctQoEdeMxGJAb6HnoNPPVN5P7aCYcxZgY3qk",
  "key8": "44w4xpT8U8QmUjyDdSCZs1zg23gcGo22XU3H61nVG5CjJeUhHw88TtVwQXpqvq24F1zPt5EsXkEEfdeWC4iyT8zC",
  "key9": "4sjAwzHrF4PhPoJZNKQENBNqYXK46xR3YUJDcVaX7x2J2fgy4oca8SsWoXgLR2cJVrFS1cktJA3hH4tHCxioBBba",
  "key10": "62eMBC4ZTiznTGTAQWwGmjnReQ71m8M4j6v9G8Sq8uwrejh6BYADWZc7p813CRaiDDv9Jt26dzrLBJ2rAarKjgAy",
  "key11": "fKRMojaCk1nxhbZ5fYRn9rJxp9eVhvJrbaGiQrA8RAZCjo5oWzRmsrxMS2qgiGMcHbrfc67GXpMeGy7fM8eK39g",
  "key12": "22WCn6C2CCtRdHJXHEyRqP9ohhYL9s3xMFSJKJR8KfJCTVYnTRQfj8htxZjFwETXAZ52GVq9293bpShdM9RAnACk",
  "key13": "53aaxw9hRLj8gTsZ2FKFyJqKtJBCtgi3h2M9ma8dAAMKgYuTdZ2VRvAEDUM2v7xy2zRV8gxdRzkuWHEtyeUGqois",
  "key14": "5wjj1BysQP6KdMAA8AGr6Xpn5mdp7nd7hqGeWLvPbehx26h2wjAPBdu7tR2QKdV8wwfZADuyuJi7EQj1ZSNASE7V",
  "key15": "5vyvdiKaGvJ62z54A58TdtLAuX11ETa5rLNDjthM2z3ecJRW8ZJA8uWJ89P7L6XbpdyaEPst2iPjMmW1qahojkNA",
  "key16": "4taePfmkGoV5czXXaW8VYBDSqLrS2qcK3qnuDjNYfDyQWYXYnMmiA4YnE6sQ7A7N6ibPErvCKtwebACucXNiYgJA",
  "key17": "5DhLfRragHztD6N3np1UNPMUwJqUdZ2zjBYTKvXL1qSJjTBBwgrqYTKqx7SV7aQF6Hnu5HfMypcGaAuEmv4eQ3xa",
  "key18": "5Dj6QMC2SRtK59Rzjc2tHxTiGVThRmd4QFC4fJ826AgGq2pN3UJgoweGavS1Dizhj9s2g1D1zKrLWYBtzp9pGxzr",
  "key19": "5FFypgnWEonjADY4YGVmdHejbn7KPUYM6zBvibH22Fss1xM8zt2NHmrRpr5e5ECRC8wHJYe8ofnXVhcs3sepRz3",
  "key20": "5FgvvgWQzi8BFeG14xW3YMXbtzbC5JnQa7qpNErLbZP68sQGAV6Jv65Xg2wyXRn7wQTEyiHBT8KN7B4k4V5dmczu",
  "key21": "5yVSU4moUaqBK6WagaMFfF5neQFt4WNZ1Wvj615FvvzKJCov5j332EtjNtPHQsWtBrQAxUrq9BB7GzBUC3f9AZyd",
  "key22": "3ZwLJLMBXd2SHMtiHdtrkxHMQK1MRXhRVHdJQ5fqm9KuPYPyoJb55baQxZZF932piRvXWUMLHYEhavWn724jTL1L",
  "key23": "4HYt5Rcjhmd7gXDagRpKAmqsMbvqXL2gvkvWsgJNbVF88bsX134XhndCJByyJ6fZGspXjPEZdfzZMVUMB1RRXTWu",
  "key24": "ii4KoSSPSggMUA9jXM7NGfXXLhs9ud2V44YiZJ9huZuT54Nn2XT28w1KzrJbyH7h5dGHUXiChadU3NFqcAkrYW4",
  "key25": "3tifZnhvQjEfu6uCLbMXRQXBDhkshKvzistCZ8S9XA9eYpihVD9ZhS8vF9jbNbUBR48hG2W3VQzNMi9ARyMnzWVi",
  "key26": "5DQ3zzbkrNziefQGKNQGxc2LnMNFpReRcFV2Qsenx4dbmQyzk6uhkDVRRQu6CBjvtxWqbE7QaFzE9WTUV7S71m8R",
  "key27": "3kwwaYpGPCVd7xw1s1F5c1B5TsZ5zBS6z3RZYAHrbQ6PFikoWM5jZS1dwc6RNvvWHfoWg7yA8SsXMe52NSR8Df2v",
  "key28": "3jwrY3J7MBtF8WaHPhJqpbm9unAeCSwVgxgp3VTxSXYo9sNm8nwvk4jUXJvH9orgx1hvKrVGXHaK58tLMqjXrd2k",
  "key29": "3ybEd1Uv24urFSGRPREEnSwKuVPXJxbpBARrNrMUYC7CsEPkufFP2a9RULHJW8N7iZoRuPXTfpD2pFsWbGthZ6ox",
  "key30": "XvN7gxkepi4mvpMJcF52kmF7jv5h91DSDkxPWFB4ecBtmLoKJDX8Hkk8QqjCEoUV9AWe1jCr3RQK349b46NSg9f",
  "key31": "2aJSp81UHzsK7EJsYsmjNQjRF73e7Y6mZNtHZcJgJg4frxr2vCCabKU95mutod5mTf9Vmz6sN1XLtWmRSkmniuwu",
  "key32": "5ffDK4DAnheFKzbf6wqwLf8LiRJ2TF1DCmmgoN5dSPjHbnnwhQXuCXrDNnKTw2qb1EurHQu91C4dAKsU7R4shCnM",
  "key33": "2iJava5gjHofS2d2vvDwiFrV2wiyxQFdA2VRdhbQcaJnuzdVRiURXLstwUzW6aDnxTut61d7V1c71iWDsUXobgEn",
  "key34": "54Pfza2rtxhMQGYM2BnhKGy2ECcSvAthJfAGqKPSVeTJWR5CfGkQ42qsdZCVGeFhYf2ki33jYxM4GfGSPKaMH8VN",
  "key35": "25Ce5seahFCEjvUzs14WHVxsVGhmG3Q6ge3XrgpnnG1abZuoudUDfuvtUGeRDbqye8KWXFtFFbTzhR4cQcVD5wuQ",
  "key36": "5SPWsu8TvJmbuUKDGpzCNf4ZQF89ixZccjeeoMc4unUnsbZkf2hjLHLSyJTPmLXMo6EdkxLF6pM3D2bNKp3dR4Zq",
  "key37": "2gm1gzZydB7pPGJE6nETJYTb7tv9oXCArQoSiSCPPki9YZ7AAurabGFBPNREFeHS7Wiif2pb2nsghqhwjWpr3eTJ",
  "key38": "48WMhkX91topjfmEhrxKhyoL78eimgtXXMjK58Y4mad1g7QbXR2XFqBQJGeutXMgMSe35KvQ9ZYY4SNBdmvp9KVA",
  "key39": "m4ab6cA71D4ocziyFxZJJ51jCFVmAD9RUevyFYgnkeSU8t5jFfbLajTnhgiLL1rrc7Pkfz2VsszT6bb1Dzso7co",
  "key40": "5QRidX9zaMdy4xZgZNcMc1XPfeqmzPuavVfn5gBoULZa8zJcKwpmqDvp4pzPHra316tUBFGgSmcF35pn1BuCpfQM"
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
