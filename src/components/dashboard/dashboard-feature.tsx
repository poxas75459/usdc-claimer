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
    "2dA8NY3P8sh9aJvfdYuAGhwQijJmezCFgtLdVq92U3tYYXz7VddH8bBCTD6pj1KM6TnpaSfX2W5xWcDwQDh4rJAe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "443QsqjQQa6kmWEWu1ywmKUhBb3LNpQSwRDR2roxPnb2tkZVrJcvyDDbPFuJwzqVQxCBKdQ3t1fP3EWNvW4J7Htv",
  "key1": "4dppgkvt7JnQhocungYLPyCvn1gK4X2BwLFTtNY9UdjEFPVvNPUxrLNbeQvD8C2X5pet5Ddi6YNeM2gaMzuA4FUj",
  "key2": "4tY7qtAFrxKndcEfaZJApFQCCurWLMNswP6Jc2JEtV3YbHTxVAFkEQ923bPqxMRv5yrmLvo1gZkbfVCNv9ygAXr2",
  "key3": "VrhK5A4kKwQEpFym1YmdbCWn7shXNrUPAMCm3hMrLhEaG25zJGGCNaLYTLxuid5PPfJsgRoqvCX8dW7n2JEDo61",
  "key4": "2MBXj4P2Gf6659tEn9NYq51tdyciLhEoK1iphFJdsiDgiXWoypKvsv9GkPFWpjE3HkkjLuzdogk1rSLQPhJyEeH6",
  "key5": "3e9RDsPHYhhe5HZpHybYtVkEe636AGawZ4wGV4aN7Lyfb4XGqqcSQF5Qde5fN42VwVm7qbsazfQ5nYcfoJNnPk5N",
  "key6": "3wbdJH38SEinAdgbGShh23jKJdvc3XHtDYJ2Qw31SjS776YpgeuJcD4zFm4Ak6hZUT9z9nErzu8GSgGzJavTSpFV",
  "key7": "3mV3ekVdTtSrijSbNSpuqtgFpZpaQbTnRfo3gLdyW8xwTPeAaBv5RVCgQiz93ha9YYZW8edXYJfW6X3124xe2QLx",
  "key8": "5fZhLL6wKHoAvjB2pgybHXdwxyBxoBV52M6xyTpzasJCrYPCGcyygx11UgmMWzMTGrF3muvXeBzrnzC6PwXMMPVc",
  "key9": "4Gy5uht6wzRVN7arruyVMuYPNFSZwx4tg5aZNmqNtMw4VidbJH1doDeGxNhARAmM6uf2ziRJRnAiDXR5UPG3PfSi",
  "key10": "27uCJfwBVbFZosvZqUXgsB4EUXMw9rPSamepx9F8HxrciBw8LWkPPrZQvPEMC1gxpxcmDFQXYiXNchSUBWzjV9Bm",
  "key11": "X9sePCKCADuGnT27HPsgisY66SkLTuyJFQbKFFwTr1HMZncQXoT4SD4fARSXrTBYCuQrD4xyHWzs72aEa7YaSH8",
  "key12": "r3jnnErjPeaN8weVBG8BRa8LzjhQ1KwP8T9rgSadSpidYwf9W9EThrrfnrLfu9u6qeQUpoB9Mtq9p4tbGU9MypP",
  "key13": "WXtMDtu8DWoDEtU8E5fRVZeKnYBsSu7vQG4TYAzVn2Q5xkECw58ZPCXdNeQjwben1udjt2UEuvz2XFgWR8GFNZP",
  "key14": "3ktjKZPbdmpZC3M6GRKnT9XdB8Rs9Atqnpd4xKnwFt5MdHu1Q7pJHDiaMC1svYPHoo2Qc6fCjtZwAD3DTCFkJHKA",
  "key15": "2kNcFkea1PBdCmeFJBwVGcjdo8K6Ma8smKp16Z7BMQ1D3AZtqVwL8tabxnHC6exQhyEYTcigzHz75S2Uby1Lqfty",
  "key16": "5yYaiits67vrxNyyTW8fY7jC3PS6Uite5w8E4rnXS1AxB9uzp6cZQdCSRS54MUVABNwLUG5AJuG4xVW29fz6953K",
  "key17": "3mJ6P5CnUNRNL3vQyEuMcznvY3XSX8AVKVpozmS73TaqU9qRqCVSTu3W9EU3sWrzRCc81Soa2XSKHCAewpxg7j9k",
  "key18": "4SqZxN6DWEfD2W2AQDypgQZG1b5ZNo4yE8kgVZLzuHdvRWKx7VPPmcVvEGLKCHS6ekkaCRfEDaovXcAeXGqeZAVy",
  "key19": "564qyqKVc6NNW9iQtkDGexaYvBx2AePC2vAv3pXokG8DryQ3M3aPN6cofvWfQdHLTUfMWgpx8kWnKi9Dw7H3H9H6",
  "key20": "KPtnS73nydgjPFkx3QuoBSAr4gVGpPx72oa5wNc2UBeEAuHiZzKtvpxBvsnwtuivH3Aa7NZuWV4eJi2Hdt2wWAQ",
  "key21": "3VCYMVdMexyCVCkfDo9AqW9uiqbn3j3U8Psg5hbmiWQXUP1QuosypdJdyi1QXiPPEZuJDnLWXDhsL2e3Pz2jMf72",
  "key22": "5B77csob4cwWZzbV7t2Bgj5huJvaArJ39rsahn7UtUF7KauE2hQ4EvFqLEJfb9PeJfnRjM3bnn9foWjiWQsqrV4c",
  "key23": "2CK7RZuvEZG4FWxfpaCcNQqjqumgetfwvdzfmHmBErZsX3ivpHQsVgYh8DJ8486eAYXD4TDG3tSEYKAvCg5j27Nh",
  "key24": "5oNUp4L3m4NBrK9uwdD9K3dyCzNDSi8eMjqzEgdC8h3YwkmAR6A5p2bigp9idwqU6PVx7pydcdKzUhCeX2TH7mwY",
  "key25": "dzuQF9NwVBhWTm6tm96SXkjRtE3xNPd1Y98eb7417DFkP5WmK6uaP6ifeNnQgiKWqvK42bM3E4NJxxvHTJvRyHF",
  "key26": "2rH2avipd4ANmMZDTdkdnwwVgiSKVsT9eXvCuyXTegVgBa5FQnN1M9P7dUfzRsKPvVERwXD3KGuoHPtcKoLZX9iV",
  "key27": "48Mbmr3a2TCroFStYxcqmUmEdsfX7uNu5L4YZAKBrw5EXko8qoyPsYYwRhGzabhuuBSHScSmt4pKsirxQxyBXXEC",
  "key28": "mVSpG5GoJpoy9Mw8cqjG8Joepe3hDELzuPtzoJoAXMdmbxsUgqcoW1CkSvyH2zfsTrAv7APTujip1pVqoamphuk",
  "key29": "vtqgCwptZMyAgZGQAqCDqxRtTMdRS6d9yRo3eYKmNmzMaY3BGfksgE8u4amGQqKsVxLvx1tutTuPFQWvGTwEgo8",
  "key30": "4afr7au7gbxaFkrYMGdMrswEiPgfcUigM7EUw3u1DV5JirChaxo4K59Uf9s5hNz3vGPu8VurTDzPwTW5oq7gwsJR",
  "key31": "5r97ALnPNd48MMNfnCVuA8Z1NpxG2d7xgNXDd8cxzsvYrnfsdMpnSRuf5BcwmfY2J3ez6LVvYGF2hvRXpt7VZYSL",
  "key32": "vsTXEv2ZG5tzE3GQAqRdqigP55wxATM2txb5YCaK7bNmAnMJ8Q61ibmWyzpCaqHvWJeCos35z445BgShFcCDLgN",
  "key33": "5A5vBszkCb69DLmBzG46vzjVr8uJzB13pxeyGrSvVE9PD9r9R5p3P4sdkVfYXXrBU812sUygeQqN7j6mVaoHV9Ch",
  "key34": "3aKwzFT5DUKGSSubmYFqbtNjGohjfJNLoFvhJJ4JkhRGuxxXDLwr8hY1ZMBHcm3TdgdGt4huVZcFvovj6iMJPnCS",
  "key35": "2J3E9FRuGhpHfLiK1MaZ64XJ7aX6AC2RLMsRghu3JCoi5sD7jJxx3f55vk6NvaSbJXjTU72o4hcV8ffanPAN4Ndx",
  "key36": "5gZFoRAywumqZS3A5pgqa4ZZ7gvr3hZuovR29rSTizr2q161ZjyaVorpqHNDNcDN9hp5AN27Dc73hsfAdPhbGWg9",
  "key37": "2p51e29Jx1g8SJUL4ZAK9B76bj8rNTkmT3DeGbR2RkNFFy9Q62TeKqN2zNf45ZNyYVtR5n4ky7X6PJaBLuNwBrXv",
  "key38": "4sAiEHkGF1XNz9cN1uSXYxC1T3Qb88Y7vUySGXuH5JwuGqFPdvA4F6pQxVSvJuRr4yTysGyUy4BmNrJ2QL4VcQ3",
  "key39": "4H6rKvVVvkRMfUdffc77jsRMFoKZQJRqNJxfxfbbyT9M2ZCHSrfRJUZBkhgNRaZFPZLmwnsCN4DRDHSr2FW8wtxZ",
  "key40": "3aAAkUuYqhL3itjDEbCccSeej4RctKSBQFrediwzsEQDnQnTCtX2e6pbUs1VX7Ac3TUk5xV8snrA9WgBkZUScSXU",
  "key41": "cx3uTvFGM8zawiXHiQQpTea9CWbnSacw7wCXwKE7LH4K8bsqeKVTSJaCSkN6q1BLWBZAhVqWcaicL1hThXUqxdt",
  "key42": "x6UpbyN5B9kjk3KtgmQdmenidoNfz1f1W17U2zqx3ngx9Wcy2CyhT5L2p1kAhSfAapbvF5HWMDCYnfAC7Qfpaxk",
  "key43": "4LSEs7HrQGQZs7QRUMMnwrU1MqAyTfuzpwzEv8ASv6pLpqzVAKbtQCte3sfQbdkPW932KmNV2P58GxrN7AnkPHCS",
  "key44": "461afeszMfvX54KeqHGok9UvCn1YPd35E7KkPBvGggWQhHX3fhXiUpprAm1oP2Fp5TWjdptfAu35ErMN7f7eriWz",
  "key45": "5XkvfHYBdxXDMNjtu8Pnqyu98c2D84HeqebX2XyBCQr7z8Qixgd1Ekp7D4tQziRcq58DTgfRvBMgAKNhzXnLedxY",
  "key46": "413QH95jA4h52wiDC6BA2eXZbuqw67xbBtf9qCAkyG8dewZKewPgfa9rCR3kMq2MMaeLiyodgv7BbNNXMdm673y9",
  "key47": "u57rfAiZi5sAtNG7BhtF3tGhncLqvHGAuHNzacztvzTuYFLehLZzgMp1sVn5uCsbgiqKUZzYUe1d1jAj7xWLnrM"
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
