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
    "iSeaQF7QKoFvBXdZQSjHbhRopvaDP4TAPLNBY2hkfg3GfyoJpeLbHMq2SvS7M3vjbUAmpz689Bg2nquxUjEz9fA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DGCobzmUPskf9UWYVgYySfe3FW3k4ijMdYK4TeRJgKVjt2rf3oTvHX7xihe1yRnYQCum2AJkc2Skej5KywFq9j",
  "key1": "5gLc3vcT9jqKyjE9wn34E4HLB9Vmyshwipep7JtULJc73N3RvB4msrDH72j2n8VGfuhS3zDEND2y2seUb2YkgNpR",
  "key2": "3Vk7YQ2uEBFRzvZTMYWuCQuKXAzjvPXFE6BTroQEX3zt3kJ9rqyfnWHz9szQ24pLTL8chnYefARzdvohspKh2N8T",
  "key3": "4KWSUVAYKFmJMYQdLw3jb8jpY3hfa9mjifnCZ782YemfX2g1VGU1UnYMSp36y4Vs8wmWsqPoRbZwQAwErgRFBrhn",
  "key4": "3hZvC4RZzw3gM5n39y1MoWQx2UDcZUHdtCowPCcxS1uusB7SoancR5G77hWkpYJ9Zx3tdrggSmx5LDRCZ3AbVqmH",
  "key5": "3uG2J4xLSyMXYsp1gHqXidRc9K2hnPBr57BznemPCjUYVrc5Kei3cjDtQRFxJxuwnyKqEECP3VmymrbiXG8Yc83c",
  "key6": "2vYKa5H2aGGBq2HrYjXNA2QGHDrLyC1fLhPdKnstuU8MC3DioLC5G9TFnXptjFcaieykPQSm1hNjU8XdgtQdTUYm",
  "key7": "2XQLUKMt5KPtWVDBUpdTKorA6mxX7ZxLcDxM9q7H4TzTzqQ1fXxm999hs2MNxMFK77UX3JqFK8AwyFcQEY3cqaT5",
  "key8": "4tUVpSyoNezLM7C7tqb74ABiJJDgQEqwWSrEMhgkc8VThnC9pHdGLqdTmnEbDM62HGev8CZbhg9scexfS9idX8M6",
  "key9": "3n2kvc2B8mAEy7RbgzaQ7kQm7RxvcuaZhB7mNJaz31MfTXWPPyrL4zNSz1uuovYN1mBHdVEB5X7tYLzHx7Hh72Ba",
  "key10": "3FqcLx19dbzxUcAvo9ZoXFtjGapBL4hCWaKcw4WC2fYJsdokbFemzFGcoXcFCKpRGhMBadc47YGE3nAyDBYRg8FK",
  "key11": "omHQxJHHPSUFLCfqMs7CyRuEJQrhea7PvKjPBsvMugt5sEpwYaYarE4yWBoSgtBFDcByQuq6jQPzB81pWueLpgj",
  "key12": "2jY8qJhhbHMeieddGYniC74gw7Ae7y8ZBGwvQZ4znDnXwdxegWDk8Kh5k6mNHCBQRZDpzdwzo6KZEqqQccDwpwb5",
  "key13": "4EgB2itrsTyLZVy1YsdxPXdJ1UmoYKtcQaxE6F5BjhhjLjf2dUc3xCZovTY1BPT6rL1CtvAAg3S88tGHUYBJjjcc",
  "key14": "43yCyyCXDaQHsfTXdPnLap5GpDedhZkxYVokWYpnVVViuuAcKbzSKTBC6WZyTsRwUCiVsDKncMoKU3irndmyhtTP",
  "key15": "raBYReiBijHJSxUPKnzMiPvHeoLFAnUFJrB95GNX4sRkCcyodRSLqo1e9nbNhm1S2mwo8CSKuBKFngKziVipgg5",
  "key16": "8Xn2XPgGBPxc7WhqJ18BoTJRSJvAXGgvKauR951wpnNXwmFYbqiYKbFqv6YWnFhXzRgXFJi1X2Ys26VZ5y2dPES",
  "key17": "2izb1JxExxWN7NdWRUsBPMQKyqxhFLmvdBGDRANgLvvPH43eALquUomdE2y8aYRWq5KAy9bfZs1dxwNRxNfaoxEE",
  "key18": "5qPyXUEotm8o7M8eypQuE1X5wke1TEY3fQFtu8qzwfUFi4z3Ge2dN7mQdibp84Bf7FqN3tPFo4N7nBcLzGau1z5K",
  "key19": "4VZRrbwquowDAhRkG5ZAycUwvn4kquwCdydWAUWkZaLU7fJ9k4CYsZq8auhK5cTPXSpinWGZPogBNDvUitmyTVpU",
  "key20": "4hQ6ZhnZW5DnJbeSKys6PhFP9nmp4kHkRqgL7K23Acj8mWSpKaUjEEArxiP58PNm2SywBUzyHvuqk5StrHh9uvSq",
  "key21": "7117Zf7ifjcvXUjFsJwNQFirro1HzjJSK1bufJsLbBzGPdLPGoh7CpbXU5cztWg1uGctEEX3dUfWdLqcT88P7cp",
  "key22": "4bDLAypqBKztPC1LA3E8sWqrCrJ5dLGc5bpXGerAMZueyLHH3KSGxfD2mHGsCNBoqQRJCLoMxAUkuaPMWkvhKc3W",
  "key23": "4inMYLrq1tHdasin8JYS9rFJsrf5dA4KQ9kGLZdDQSpnRXz6BRMYmYXAWxtPuThvcFQqecHqjQ3CUoUBWQhQ3LEF",
  "key24": "ob2MSVpCBjc64P2TkEmcVgqnEN9mgxeq5cKrv25PKirSR3vx5PkRz4p7rXLoPeTGPdVL37pTsHXQbHxVDCfyMGp",
  "key25": "5HdttpRmNXEdKPhQFrShnaj6HKbPuXWM88P6EdMXKmdMBdgmJm4DiGKAAS61mTNR1tofztd9cyHhx3ZiQyiv1A1w",
  "key26": "2BbtyPGYTk6wAgsczqQdjMYPTWeuLBVnS1U5AFuwFZRjKYruBoQ9C2aMPv8j2wmsQYuPHeEjjXcRCkyFpf5noCHj",
  "key27": "2XcW5KnQP1BU6fTahig7RTqpEVMeRrVxrr2i9s6RFenXxKs45PKNtSJvzasM7GDM2N45zp6nTobp1WBYKFQYsmg6",
  "key28": "3x1NLKxLdrNiDHU6jgR4NPC86q9Mfyys99diSH6iRaPurttHFJwWrSnqDVsYbGZneCRjBCvThvEUyYhcfMHmgysE",
  "key29": "2FP7aEg2qQymn422VrTE3FhR8s84kwSHJy2bqdcvjKsqM3YWQDtSJrQ67J3C8cCCHGFN6rA1SqbvXWE16sJqpmL1",
  "key30": "65bkiEbrYpGKKXZxG8haCjTrbdmQ4PeQUi8GNhVaQD5Uni22wncGf8iQuJPS3aH8A8z94tYBXuT2wNnYUdy7JNy4",
  "key31": "2aQ2T2isc5BzAVFxc33p22xEiyepc6Hwv9WFEsxFWfUCznNKeeS1Tp5gqDFHyHehHF5swyD9HjLgJsnhjdJkkt7B",
  "key32": "2Nk49N7EFwqB6CQP5nj4X933Nb9P582kwHjxDgMW7PA3rzLGiURmSdAovvcxbDKd3fbNGwukd8LoSy5J86dvbatR",
  "key33": "4AAREvLQbKV8xhpT64UoyNhxHvnJoxmsmsNqpFnxwsKHniji3qdnczypWtz7fVSuxeJ6zsYqcE7i82o2cPZ3nSci",
  "key34": "3pHhrbTm8cDE1Y5arxAW3Zpfy5hAotRACjc8tb9cDgV4QF5wS5cPmW9hG7sRZuyzG2neQU8MTaiD3nVCMY4dcyXH",
  "key35": "3g6uEiwjji7hS9DSLyy8P3uxsCBH2ktfZmNyaijLESFCixirWJpcMRSZpcjSs4xtiqTrnZVj33jzFu6pPpYwAF2Z",
  "key36": "3vbgboePpmx5xpYAiy3ZcoMXKHmoMpEQ7XKLR8dF8Tw8shD4b5KZGfaiSuMtk2gxVC86NZHEuQRwVWAaCBE4DwCJ",
  "key37": "2zn6miTtTvzqHgWZLLPopqMs3jSQGDDqqb2tLsrqnZ135SxQgGdoA8LDDJE8nU86Baw2YSYTyZfk5yAaYAuqLwvD",
  "key38": "4SFijibr4B8ibr3wNJLKvWsnaymiHdpwev517cEU5yhu8Xk9j8WmpUDuq3oz3m5VAwmeSeeqFxrobxrwcQKwbT8u",
  "key39": "2rmS3aeQd6XbiWzKtk7TBJtsiKDpsAGF1RbDxGUs9Ga55QVM9vKyQYKtFfGYwLsM2trSNEkt3gCdLVLQnoUng2Vn",
  "key40": "5PxE7WBSYDJuNYW8S8taf4KMR8uJRoeBJv8tQya9mykXzoKzXifrsqirvuDHbSL3FKNA2fktRjCbvZafNE3YkCee",
  "key41": "28FBVt4gnVo76bAhHBSRujgd2reKR1PhChx8WCd9FRmoVqjJ1dyEcaruwn1qgnjGibVegsAGo6G4fGsNyakuhBqN",
  "key42": "3nUJS3BQQj6f47jP75KkrEFDXhTkT8eJD5xyuDrLERJrHd2KYaAZeBX4kDk2j6sDQ3tkaYiPtxAiGxFb2KpmmRQB",
  "key43": "626tJzif3KbyfXoMxz9ympdEaXG3NSWyMeDg5tVJBiaTbyc8Wv5sBKv6QjRQVrZtAQxnnZyKa75Ln66MhhhBF1C9",
  "key44": "2TUrCTDNrGjqS5Ut4d47nmS11t3oU3tHaTwPgcWEGtEwBqLaghHYfD3WzDbuWQPioquBRqa56VjcBgZrFPVDyfcn",
  "key45": "PZ7dJeaQGNXAzGb77JuUYhwcCH9psHqtZrcGUn6n4xmjPf8JqMEa2og7zVQm6aRyAbDyNLrvjPqXpxGKJ3GEy78",
  "key46": "2nqfjkD9CcBrA9n6aCuboibkNf6CJ3QqUmFAwgCW9emrs6myk7zibkJVTm5kgG2qdbMgo1kJhNtxWPcxx6bVHZbB"
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
