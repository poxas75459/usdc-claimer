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
    "64FefnofSmMg4Ag4Gh9SsC15YWn1TanLvF8qf6kSBBbRECPSEtzCgb1iyHwgsP2KZRLkkv6cgSmfuK85NY1Kn4o6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wD8EpjwoyMB5ETRz2zJFYVih5VRp1Nae42Yq177shbyDSCXi31p7rcYWoMaX6kEgbbxC7eCCHzg28y3fm22JizZ",
  "key1": "3eeZnz5JKx1Byebj4WabHyP2vW69DcasiJXTWWSQmLt3NC5PfXSNt3np8DQwVYNoNFxRFfbUuRSdkSbv5Bi6fHLA",
  "key2": "4vE2Czr16w7R1oift3fe7aFJH2x2RefgM2nNwtBtbv3pcqs3iuqHoGyDLwLk2LwBdTiMxF5QwDiio4S9CN2o31B7",
  "key3": "2G9uzYB16ks6wimH5mbgEbcif7zLzXdwW1Yb9ALKKht4sKWh7QzcJEqMLr9sMPWu3YBJgcSYPPyFCPUoDtmM9kh1",
  "key4": "3S7oG2jicwjn5LcxnCQ2aL9HAYtxj5d6UQvVxxbWLRb4WnbvcBdEaHTse3Ar2AmMSkbpJZNVjjAzhMJrSwSp3gv3",
  "key5": "57x98Jr8TmSJaGFRfxF1erspZHe1SPShRRAjjKsHafQ2YqLBT2UrFAiVCDhv5anvjN8Gw5moCd7dBNPRYADyYQkt",
  "key6": "3H4vgizMRzroUiz965FEDR2VWyZQr1JfM9xkJAf1p6j4KeqK4VRH8soE9cUag6Hn3fDYozbcYJ8651hEsZjeCcwZ",
  "key7": "3HKsyn7Q486JgYg8nQiZkKhQj6rfeobFXszpJg4vWi4uhxjDAW6VjQVu3mNawzV66ijBL3pDVDhQogr61Us99y8S",
  "key8": "bz3yEc8FiBVqSZkFRCL6MaQmo3kKUq2Ubhunqt6fdK8BmfixDHAtGqhVr8eSjpiPMuUFDcPWi9AQiwFBYpafsQR",
  "key9": "JShKE2pzWzpGP26g7MaT42vYPqkPoJRMFFUtuKyfcuJAf7vFYzrAhYHeXEmMcMLxjSHtdULLveK7X8RxAXJC5Dj",
  "key10": "2LnTfrwvPDA1uk3X72nZSH2Khb1wY9qEk8LZD1YB9mm7Tx6C1zG3sjNe77urgTmtybBpzkwXjNhAxr412F4CLaax",
  "key11": "2J7K9MXqijhPahU5x63iu27M6kn9jHzXDr1UpErPd5uoVPPfa4LakheGxwgW22MVCSxdBbNNf8ReDVG5JUGnSLeQ",
  "key12": "3paDcytysgYHbEtXWfUzhux623SAaYhuwxVwjc86v8cgok3dZ6XFByCtNEXbjPvJjHiRkicfknnX75RzDMmpzvD7",
  "key13": "5czD2rncuBKWsF6BfUk4jb7v1JkYDnHRWabirjivwyT78U8C1nzozZTrpiVEfpUZRwu6mFds8csSe1T6iRLF2PPR",
  "key14": "2mSapGSjvxQDeUQwf6LagTyXbYnm4awT8nKMXmm1Uv9ZUUkQgHsMm75eT4XSaGmWQgpuRZAWT2AdLuw7sGEf3tME",
  "key15": "4aAY7YmV7BEohVniPimMsZfxX8DAm6cDLuaPVFz443vWbyBtTdfRTxrhFAXQDdjbHbiGKJDTViF3czLtfxs6dvcW",
  "key16": "i9G2NuBiBYBQoatwy4YjGd1ZWM3zjFrjsPkMkE7SGro17SSjk7eY8hqShP5vynj9GKBgQ5jFUUJWgRnHL41qE7r",
  "key17": "4mfTd6fWt9FvXTg8tpu4GxYGxfCDmYjatDwMvdN6CZdjxYXUdTCYRYnvtq9NVUwaDqBosxwuBLMVAdnVPPCVzHmn",
  "key18": "4tSkevQUzgLWz5VAwZS6DJzxStrCJ7yA1QTzVXcMVx8X6VeeP9jxicWybUGRNQ66mWG4GLBokr92MahbPS8hqAp",
  "key19": "2ibqjJyfCHiCcVCHr6bvaUMYXmhUMmDSqirzRFErtXEcjJkFeQNHEygCX6P4as3acaR184FBwdYMGj7MAWpBZ4us",
  "key20": "wiTN3BJbzHrZN2MUZwTURgFsoNp6ELwdfGL7adnSATxXhep2Z9cnW22QHPQqbBMvXQ1zsQYffdgpSAvYg6Dduym",
  "key21": "4g8bewskVMCLxY1KLmj7kQTtfVzQmfWyq3MHc41a46yEbRUFqyn2ATLvWSyBT1X3sjpXZWQGuXBDT8RbhQwuVqd7",
  "key22": "4fpXQ7jvdTtYK1j1BNZy6USxNe8bpyHjr57swQ9q7TU3QEZfKST8VWsAc2A4XGG7B1RrztCgNPrE9f7AVBsi4JMh",
  "key23": "2BFpZRiyxk2AZ62oN3Sak4KQJAxYHSR9GtH97gLfK65yV4xFMK2PuLh4aP2Zv5AkBEsrruTLnSKsEHebdieqq9Yw",
  "key24": "3vJJsgQr2WD61vvY9MKRf5frCQ51T2o4a7wfFNy4puoXYRFd7HKsnK7btQAguiu67oD9wGBayktbfrzk7MK8pozW",
  "key25": "2awVcgf9yfn39A2LdLeZt62Uszfrijog4s8GUw4frUrMYy6UF7WtiMdktQRdNhPccNyWywvywrgN7DVzgc7mCn4M",
  "key26": "2MpjmDzTAk6sXiXjWxUWodiGnzMRVepMaMxV5ZtqCDksnmZUBCbyYFzoE7HtL4eAygJ7ka2hK8B5qzGaUnwudpaW",
  "key27": "56WphU8jyBtK1UQnQUkSKM1XnYTf1SBHiWttmJGcwHtBykfP2BBgtGB81sgrGSft9gAvsbeGvn4g8mswYRUR3Gdp",
  "key28": "pJVGM2b654jh9JjAeN5WSZmeQxQRrqmbn5uDDdRJLnypYawHGVRwfxXXfYvRdDP4HdFJ91GpHMh7zqjszRNgHDE",
  "key29": "5Bs6ptg2Teaxd1gJXfkPBXU1caBYRYJV1uXi45fAAaAD1oVYAPyxqiG7TiPz6buSdsq5cjriHZMzgaQf53U3iHGU",
  "key30": "jSnTpwhmdW4WxS23Jxd3ZWn3eowzXzpHNRA5t8wyggVJJ7rARLBNhD1PmF7Vu8g6getU4whvJrHZ41UTJLb8rfw",
  "key31": "PQrPR8edhwhR9R5Kbmgz7YQ6ZJEh59cyfj4gPAhJsdF8v7auae8AD1xx6uns57Pk5K2snwoMjeSqxrawoFboPmp",
  "key32": "5K25goPBf5xSwLwtjC38wgWSVvUwxdKLLXbTU181zCRuCFzwU1xsRvVP4LEcXxo7eYYDVCowNUXYQHhqJfAFYss",
  "key33": "Pb2gdGumHgTXqB4n2tnTGbjU4YkXyCw87Y73NosHw6uxRRvHXAQRBVroNJCkoi2CUdGpXN1Hq4zjBz5vkPSjxXG",
  "key34": "54MRnFdhVho4CZ1iG7eom4b9VzpZ12o7NQjNWeFaPSAQJHpP7kmdKnPJ8dE8hVSxtozWgpQFG777RndkjhGghRsG",
  "key35": "65LDri3eDP9XzmK6PuizAsiGtHCwHUxsmNeU424UxLH3ennY2TKiZudoKTQheU8wHLDnjBNHNUidnkc4cxt4bt9G",
  "key36": "2u1rQrVEZPeXUa1w8MJYnQD7fXAX2PnWcDLffMpwxvSySY6BbYPPvQ6GY78WMUusGDpRnjxJqwRuZwFS2SopwjnM",
  "key37": "5czi1JY8asvsXKobde3PfdtEFsSTizQBPZA7WRsfsRDu7m69GieAPbUQxC2jw49pMEGqYeUwxB2UBqNWXtvk69j6",
  "key38": "4SkLPXjtAUEY91RTVszvD3XjYVU45SwfTj7m2R1c42o1D6C3HQ2QgA5MBNzoukr7gWMBKsJeRXtUvW93wnPNEW2C",
  "key39": "27KwpbNAprj8KEabFVhb8vuUtsw9kY8648Xs1xxsXEA14Lc3aScN5CYG4wf6bqvudY6hEqGA7247hDZLS3EtU6GV",
  "key40": "2aC9hZdhE2YqmZBc6neyzzMEfsSJGc4g3FJZ5nQS5Eu2jow3UbzwFCbbxNTSc266RdZbi1yT1y9LngM6snxdBrEW",
  "key41": "3Ewk4ds5LcKZoc4MXRMmTDWHtLT2TyDxuUKoSaTxto7r3evHTMVMiUFXKm2vuaV7y3LzeAEGCQQ93fAPy6DbBzqM",
  "key42": "24jgECBkkaa4CxNGv22oH4Ty5ddpBVogxBkxRNUFGgC2CK1qxGQvE6d7Ts1a7C4aPrNULtEb6C2RJcUYjgB7w6bQ",
  "key43": "2tZaQTWLEdgadXsp6tdQ6h2ALxiMbCkLMqXAzBd3HfQqcwJeSdqXF2TMJzYqzhChpVePw42KeVVSSe6Lu3njzqj7",
  "key44": "43v5SP59YTk7iDVAq4jdsS47Evenf4AL7V62Nb1RirTXaSgyijTiTFYjvKWTASZnpSBzSXAyrc7BfCjUunacjnNt",
  "key45": "2Cozqe7v3BRk98xgEQ8hEa4HMmRMw7KxiCPym5u4F8iVApHqn1GtRWB3k4AtV8xTq9cf6cLiK9V9AwB2miyvyjgE",
  "key46": "55Gt2XR9HweE1MTDPHxBV7rqBabq9BeKa6GTUn4hM7vCY2GuZetLVjc3T1aAsK6zzx3KaMXzooWoALB2uBE2zLmZ",
  "key47": "2pse7xJDuGN91LTCDyhL13RoXFFgoujtXjxPXnnhpnFMu8CKdytyJn5x449S5tSCQHEndawRdgwcsQczQbCwkmgW",
  "key48": "5oDyWjw7Eao61BT8fyqH9Pc3qpwzaSBhkRWLVPQmkSwRvYvfHb958yPoJYQkVsxKTZNoiAzJmNn3FgiQLkZ3Rebt"
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
