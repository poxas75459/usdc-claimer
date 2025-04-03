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
    "5S3EtQj5YTBh8xZJ55wQTyuqJUWtBHM3Fp9DZyMNpn94UNMAaJ5Mx7PR3Tfef8xvw6xBvxs8u26E1N5Lq88ZozzX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FxPdP2JEUPKQYWRTs6DHh1rGCARKbQAd3raFFnG3WWjrFEtHmCN5brxkK3zMLchN9gJehU3XrJUF5pkR3KduiBW",
  "key1": "5Yw32fJgQqp1gZjuQtjPPRgzqm2RJBNs5PYH8jASNFt46aPN3CaDuSqMjBwbGgJT8kxQMLws7bY92d651PFyNzm6",
  "key2": "4pZYb32oDmmN5iLWS7obzqP5HMh475SdGu2ZPSCuMhJ8jXk8fZD8kw78yJiB19APC6qEi4pUxb3FbwPpkpNeLmn8",
  "key3": "5WG2hJjvs3aWyFPbjhNJFwDi8dBTsXqpXgH8ZvdHiaS2TMQRVuMnX9uS3SDGZ3hfRKLJ4q4k9pe5ht2UGq1sakLB",
  "key4": "48fw9xT8vdVFg8nWPTwUv9RMsfL8cRTJmSDiPeoDYdqYx9T42u7tNya8QU33zPfiJt6xGADv1cuogUqKfbGiGvri",
  "key5": "3YmnMeUCpnSdzzb4ftyzuCyfGfNHd2tiRdFVaMsQVQ4DLWimYcaNTyMa8v18R1URixyxQQN8qCCsE2BmZa5qgTaZ",
  "key6": "3DucQTE6XadWV8nVGZYaNXfr8TeHiseotaT3gPjJtP11fNobmbeMA6T4qHBRRJLemBShWc2BJ1mDyVf71SGJZEcy",
  "key7": "2bsAnZcQbtWHrSvFcB8eK8nYcSsYZ6LsZkoNh66ddm1gQ8Gj74PJVsKnHfwkGpVrC1GMbeYitXsc9FP7rDthVJwQ",
  "key8": "2odt8P3xA3eXSmYdy2K6VhQALbCs59D5Gb5awMfiHsouc39hLDgQpA6FvekZhLbm8Q6DLcPU5VwAq4b71dTXhZFc",
  "key9": "sRVWtSBMXGnP8mrH9mM7v8TZapLEeM52fpqLr29vBH6fyvp8RogzxKeYsdneYgWKGrLdJZM81MMoj67zJPBCYkZ",
  "key10": "iYRSuA1fhMcnTqztVoxs7EFRmBcfxPUq21Rkob9HyewxPtCTWXXi9juGWZ2xjDBzfxpZwj9tVk5KN4NXmNZLepo",
  "key11": "4KwgbxN56iTRWn83R8rWCz7AR5t1dKqSTVfeVrK4frbedkw2kpexxQT48D2NWxQV8cYdMT7Nh2Q9aECjZArZFqkU",
  "key12": "3fiUES7EauyqmKevHXphwcgkfBr8bVMACuVdaSRCYvptPx97KtihycYshPPZJWjNzpqmjtKBawN84H9VSE9uq1NR",
  "key13": "3DQ6h4xN9jMRQqA4VQzbMJHTwSdyoBzuZGvouqzY3Qc3ktnJZVnBzNRhGjGVyNTy4Sg19GpHDveqQg4c2hdhmdsq",
  "key14": "2fbTXw6BwHsywwecxxHngviSa76yxTfrhVhZCy4WrqXm6QBb4nFAouKGyuVVKG59VgJcZ3BMxxGs3bSgk7Sjuwsj",
  "key15": "3gBH1AkweJoeZjJ19bL5gwRbzRxyaRVUxayyAJr8Q57zdk1NU88Q79tcGBNDMGjjswa2reT8TExEFjs2tc2phHj",
  "key16": "65k48rHDXHh2WJziHiXDzzKkqjWJuym723ziaTQW6SK1w8Vwm2nTDihzd1Spusy6HXVy4zxv2ectW7wRBEfYLnn5",
  "key17": "VfnVz9Hetj6vuaFL97cG56rv2q2veYAnGKukUofqacwD8wc77uWewv6ZYJ1w8g23ntj5R7ikVEqBnPVUiXtrezH",
  "key18": "5jRhxFp6gtDzWgrcfSEWqUC4Fb82C9ApEsjrYzY3k2QDcxeMFcd2XJd6PHNY5KjNSxyv7V8esbxxs3zwb823xva3",
  "key19": "4rfidkqA6PTzjM2qsoa6TjNRY2r5Z2jm1fLsRDkrdRDFPXLs1UyZw49us3nLKcgG5mxKRENfdLBuiCod4bxnFqNK",
  "key20": "28p5fFobwinHPm6GtoVYehnthSnEHtJGRcuU3W8SvNYjQeGn54Y2ijDUC4Xr9F5BmKkqdhm2pK8Czjui3XaRahQH",
  "key21": "2xpjvozUzhMfT6UtSM1nxL8SgDRPVNUViUjT91nqrbPgJohtC4DefZJ6YjT6VuCpb47FQ1mYTzaV7SeM78ecoTtr",
  "key22": "dWaSKBAbYdXTBvXNPfGDZDeE5Q6BcFmLFLb4M6JR2HjewXFRND9QUjwMiAzjqK3FKGcJWQbZrHy258wB8xNrx4p",
  "key23": "2ZUY2VypepqZjuhU7YEcAyQcyPhRW3DcVhVNUSsAjZSgWPYXmhyigYmZGE7xYepqfXVmVnmfmcdvDJpQRcvkFsKR",
  "key24": "3Ukz1Buux6Kvh8hR5XFsDs8xMAk8nWqMTwoo4Vx6pyBsJW95fX93GkfbRnuccfyEfXv4PYyzZ8fRVhFU8LuHRGt7",
  "key25": "4PjfMCkXjv5RTQ5nKvcS8qderTnMuHfm353mkAaiAbBkF3sSST7J9Wn8XZFfByKUpvEU9aQuguXtZtFWDeSDUwGW",
  "key26": "aH5yfsRQZLgiYkwAJhPness8mwyAqRekhRD1JuhkHhScmd24gvGFLMnKcVhqqgMi7TCACikWGoz3f6PPHjDL6zS",
  "key27": "mNu5H8eSb3mN3PmGdx13tU91j2vYPzAYamiKMn9gUTgidfUAfhKvb4sYFaW6pux3iYefRGCtPL7SWisDips6PGs",
  "key28": "4jhTUr9Ts4o9fmvbk1zkv73HJr1uteocB5AVQijuH9ZEZx8BwyxhuypinTbKYVAGzvDj4ejzCUCG6Z87ywTdjLfp",
  "key29": "3jogxQwikdsW8LuvT2nGHQbDvAUXy1GohQuRjhcGYXPViScLn3Epc4hWyhMVBusYWESbDaojvZ51b1pooz9sGsTk",
  "key30": "4CFutW6DTKx2BWRwWsKJ8ueE33asYhbTTs7znRh4XYeitdoSABzW3NEpqXHMYN1X7MazDkDdRMphrcxWgp6c4KYz",
  "key31": "86Yj3E1UFgy2VetoYQgRmC13UrdsWHHaH9nQXvPNAqPMfGy7w5m29nwmJC7H8KZgVwAuZfzYgHKy6vbdHq5qwcx",
  "key32": "2JjFXx3BKHp3ay7EQDatvXdXBKeGohJNNeNSryoaiGCFig2HZ2PRWPTGKLnVHevbMBoDhTpvbhiuF6y642evCwfw",
  "key33": "3Qb8gjmVxTxyeZbPrJTawoAK4aLcjuiTFdDgnyJ2irxvYqKj37H3MdikHUkPMWX3Zy6Xt4ktU5Lhwb6rPYz8GC1G",
  "key34": "2Q6AjzYrzHtsyJgtaPyaZHgARDkzCL4oaMrcc73n52tyhLaPvjMxHiCJncrbgmNe3f7eazWu6PqatAh9jsJZgc8U",
  "key35": "3ZpDfmKPg2KbUaF6i2AuXF7TVsuqs6sHKEeCmwD2KwMQmSKfX98mKkwtQ9d1ciCQwfaag2CA3m17eUaiLfbC6GqY",
  "key36": "2jHSU3Eis5X2U1sz6yBpvdumiW5U6oDNVocvQeNBCsdHowTxw4T1gD2EKnumAEQb4eqJuc9KjW6cVh7UFCGxfBs",
  "key37": "3vsHCXUvp5riFFhZ1U9fKP3JE7aH2XwyRrSYE1tfBFbZ2a7PKrx9eH4TQ18pFxbMWataRsY5zhPZruuWCcm9eRRC",
  "key38": "21KAnYbW3ShRh4xp5YLcZAb1esmTQGNDVkdJmx1NpasUYodtowX5oGbbnBHyorc4FQcJCJXaoJrZvApSd5ZTcrXc",
  "key39": "ozdSts53nCSYEPBa4vGjEyCDa8qiU4iwwzqQygyX1iS1MDyAtuRnzFasRhmB9ZM5QvvfQGbjWo7gdgsX7ozpj8x",
  "key40": "53mcNBHTFTtF3APENphsAwYSyMYbhmh5WvP1JteQEpCJWPksHbogtuvCvGyowWqxuE1sfi678TmsuesSDobeGett",
  "key41": "2aKrvU3TxbUaCfka6uAtCt8CDUHeMaAEbxdWji9rnQe6E35KUhiF7MCnB1u5eZyPG4zCZGMjpPdALyhjCBLmapek",
  "key42": "gNUC3VxXLfoWE48ncQxGk6AiDx1ifu8N919PxyNtNBSytWmggJa1ijHW5k4zdYiMMom23ADFCN4gTigxTENHtQm"
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
