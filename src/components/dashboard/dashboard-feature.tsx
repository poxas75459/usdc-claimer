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
    "2iAZtpbZgUur8Xb75Y8DHRtL9W2DH1zNYZ6xgTi7PkgEqAdJHkExFezLm7HDFv9yNzqD9udZggP4x2Zjd7zsZGMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8mpPS3KEjhmCKYe6sL1qKZJkEd91Ws3DLv7z7EW4FgvTTKJmJnhtpW3yPAjrQeSbKVEqmiDXjG9tdw5GPJzpu2o",
  "key1": "52XXCAgv96SJmArtGESVPBL1paGCGBRyNuB4nds1Ubzpi9QAfSKhB74EnRTbYnHbM2DqcuZJxUs4R3Zk4EkCuhbe",
  "key2": "5VuKWofHV9ZmaBN8dr4PhL3TBeo39kudw4vMY32ZPWsED1qpmQXXUanwPqftp5mt5cUXoCUp6MYpbCfb1jzrcjCe",
  "key3": "3dGtNBY8dmhZM5vGSe5hb196oEaA91ipr1NG3Ujsuzos9QMiDR4rf7YwttNyrFhn7AgoTQ5cn6Che31c2XzvfusD",
  "key4": "KV3Gkd7ubpekRgqwhK2dgBGSitgP6ePpQ8aMRtiGFkkm6bX52DSsLEkB3HXzqY1YdNNdtXhV9DmhJ7GHeSueAnR",
  "key5": "5EKqUD9v7s8m2dikTPenoYtv9qa3oxtEzVAzkLSy4zJLy5r8dgfjrabrzwkdNgHLRWCvvpPU3BuDYpDZDyMpWChu",
  "key6": "3nMdUNGhbePfYi9sGQFECsp4mgS2F1uNqvaMeV8iy39wJqYzYST56qjaBhvmTGY9QUTPYMpiZhcYMD19W7U6VMFS",
  "key7": "5vCNTn3tTJ4Vyg8QkRJxMxiogVcfpgoqpvHsmVmoswwQ3SCzJB9Pj6bPWFCqjiFphrezdsczMwcAuftpYBbDCaPV",
  "key8": "iRGX185EJzmeikdekY8KKsomNturxBYZA1drbEigzt3RArmNCQCkdrdTAUrwdsMqjPwWeqaKkEN9bVnjUtJ12au",
  "key9": "32jumd1rncDYiA6yu7Q2ff9VpX6MxKcQjpFNWdP3c9B1HWCT9A88orDbwHzFSiHtUCLgjcgZLgbhjERAdBn6y4CV",
  "key10": "2hzPczVtVBB24oGXsiCdTHt2TwEJH9tqj41LkMf7WzsQmzyuCDjd7if9BwmfF7BUeY3pSTosrYpkVAPfH4G7hDxA",
  "key11": "463wCNu6oLdstL82wMQrXAYJy6T7g2FM9pvJjgKoW2Feydz1mKcv6wmnGtB7wESPvaDoyersAmCHB9gCLvuS2ykb",
  "key12": "3aWyP1U3x44xtcN1GszNzjgLtshxajEb5BcQ2fsjUNbFz8KoBtJUva3T81SpH21kLNRcHCd5E9yjyDMMTLmJgs9x",
  "key13": "2xdwzcQVZLgwVARvEpJrsqbNXXCJx6spA4DCNbiWMZdSnB4mKuvDxYmanzPuKL83FqJdSHGjGZECeKSQgAdcvzTG",
  "key14": "3TiBKSpq7dVPcEs4MPt6dfmRp8b27ArCqHST9tyj1GdkKydbTj7bYNc13UKBT9Z3pMBhfP1EEyVk1HiKKs7vWq4U",
  "key15": "4bmW8iSV9VK4JSaNA66CfTN5wXhuy2GAZpDGkEFDQ6sEcPHuCeaGd54A2Lo6ZPBrVTCiUEcioMUU1fT1mb75Thdd",
  "key16": "3t4pqS2RnQuGAW1woYSbp8sFGgRuL8rMPjP5jZGUkKorq9fg57Pg2yeyL5w4T6kY9bKnrTyP3JZmGaCPt4wbGEit",
  "key17": "FAseyuJcNbMYDFSixRghXzywiszaMb2tUH8Hk3vRnxVvrqXavzcGHiQLuCz4mWoqR4WCWh5BvLMEwo8YjKn2GGX",
  "key18": "2DibtmKnb2gVp2DNMzAPgT3RiyTD6pmwdDeSbAFFmkVeu5Wbt7Fmt9PqPrandczYRaM8EUWe9BXNhr2GyuHf9scz",
  "key19": "RQHc3664zPQu2MEku8DVokuDaLtTAJrZ4HEAsxzoE6nWNit113d43TrawXgvirDkiZudRfeuHMtFi4aWCzYqpsZ",
  "key20": "3GC8MSADSgVvgYAPo9PreaKGqsCg4bmpZNGuK4hY9MJPE4qgWfb8Ny5WtBeumL93VGiUqxiwssCNa3SLbLdcWSnX",
  "key21": "2hdtYCRfN95R8AryjQdgCoSYfQL2GyXj3tJyrScHGX2LYL61Vgntn6gFXwsyfnEj3F3ZToZpcRbPqqgDpXH6VUHe",
  "key22": "UZor1WuQmgmKh2KPNE4NRYSjJYR8nPPxyv3GBGXMdoYGannd5arzQgazz9urS2ZytvcMMEXhJeLBPGG526Hn7xJ",
  "key23": "3b55P1c2wMJaemCaeKc8jcsqK1KK3TimD4QLuA9XCqnU1ZjKMxXdmks5yJSU656o6yhaDrvN1vbKZEjEZLQ2JBbb",
  "key24": "5VucYGVpekzGe99HWDMFQCsoozSgyiueaMwuahuo1SwY2pUgbV2QCsMNMwGsKEUyM5A42VqJSHGPbqBs8gSXQbP9",
  "key25": "EMY8ifG1Mom1aHCMLpV2LXot3iZ5Ud6XgqYk9p3cEC3YEfUBAdvViBvxDWfKiP4J1ZEse6Z6369Y24UkHGZCF9Q",
  "key26": "66M6Q1mmW6vV2DAY8tyJwa4tHrgTP3x52J2jmWyroDDkzSPN4eBKE9Uyria92eZY7K5kqRvjWE8EqfiFB6QfYRo8",
  "key27": "8prraHzDKEo9KkpncYajcCAiBccGeCqnKoUN96aosm7RAZJTKzuqzBx4ttLJgi8pyDsr6AawQCmggzM9iprpayG",
  "key28": "4CMjRP7PCchhwRY1BJxhVPy3PEnPQv3WWYjt5kiZyJ5uB5s2v8T9punqWtQuBzZ1ABoMCcaa5EaqcotcNZCwsbLM",
  "key29": "2bEgR3omVStHFUcWWjkRxrTSuHUqfnZhYR4nptXCMMDKypsw4sVbkQ38VFPLTgsjHiBRS1yY1YeTZRmKhSccAvdH",
  "key30": "r9XSkre4wBeYFHArHndH8C6zVb2mwLkfoV2vJDgUyLrRqPgXGNCtcYXf2DvnXJGqCsbYjtj68tS63dSTLNwMR7m",
  "key31": "tvAUnd1pnBpkfRDR3cEzPgkmd4b2NFsgEBgVBqHCDQBBwzQk7pG2H2qb5sP6Ckn8gEsFBJovcctpythK4eqoCcF",
  "key32": "5X7Tewtkycw6p8Lf8eUQdfHtScW8u4uR2xe6stFfWro39TYqsNpRd5PBoCyKF7T3NXCtcLGPn4WwSKLcSCTsCQvq",
  "key33": "4oBcedmueUJLWadFjwQHDzveoPNwvQSSbPer9tQFiSGd5FaX5ypMJr6sHuzLL6RoaHhHuWTz9Jju7eQU3DpqstYB",
  "key34": "2KVurFPLNJNesXZFHVHyAxyaaNBpdLB9oNy7cQunBZB7wd2qG8tZNmzBRE8Vcinf3NE6aR3X359oK4J2NACF49z6",
  "key35": "47jTYSNaqXWkzKX8B27xiyR9ULZA1G4VdSiAEgw9jwWVxi7NNg4Pq7uouNxANzStXoYkGtUiMidnQ3xQn4udP8Kv",
  "key36": "3NEJ5hd35zrAeyvMQHC5hXa4cLzqe9Fo7YDwfPJ7bcMBAR5X742mVn6Tz5McJcESai799qHZMqUF4s53cFGoPdqA",
  "key37": "2ZqP5B17XjHBKejXohbAWPb2dQpoLsp3NTEswv72fvZWgbCUc31UHdp5qS14sJn4fQfhD8KdZ2TXpC2tUA6iscBZ",
  "key38": "FEUiAJAas7wMDAiqWLgb1bRYk5UHcAkg89BN6sDbp8hhXLeBFbN6Q3tAroFxdRgBfkvdEL3oAwBF5xF2asq2vhc",
  "key39": "47zoQ1Q3LjMTkGKYDwUaMRn9h9wghaKGAqEup6JmtwnyGUwEy4SmUjWWATQ3Ud9AwRiSynGhgi68u7rMZjE8pGN8",
  "key40": "3zDyEykiTfxrgRJyopZyoMNNRdXUjXwDR6fmVw79sW5fByaWVXUjcwHkugC1moMewvpjL1uhbwEZc2aea1KrUCcq",
  "key41": "5zHJnB9bi4PR4QyMJHe37zTUJWJfvy7rFE1yL3RHH5JvgH4vQ6Wt3mTXBKGeUA4nf9ke4D6Ja1TLbd9DrWytnoP9",
  "key42": "5svwbuwDRXWemx3z3fsCZeQSP3W78nBPy5nkoMt6LSrLqktdCM4TGYrhvstVQVrMhXqQMiigcXRFiCh1988D4CTp",
  "key43": "3VdDW1xh5dNGmnxMDcAfXbWf6E3G9hv5YT5ZzgKdNqnb2CM777nHwk466bZ3CPuFsbNtYvNFHWSEDHgGNfB26TJU",
  "key44": "21Z2RzGwajr9WtzzmxxPUaEc9xvpKEYZKAcDxJAdrHvTahnMgXyycPzU599W4gyhKTeyfRgUjnCvQYMH5LB9i58x"
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
