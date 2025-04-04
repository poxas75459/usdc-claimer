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
    "63ZYbgW5vGF6RLXVMCgbjvqmmPejdqbg6Jxm3iz26Xopes6jD1qDHiom5KebAkRqtfdCkbEJyaks1XCwHQYridHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nQV13anbVte63XHKRs7wDPgQ5CRoZPbjKN4DSFkFfAxuttekXxEwfq9E3XK1tYkdpSiGj6yuxqHryJnFS4phKZK",
  "key1": "5w2hiNdEncQwJdjoHERAxTJMhTLS7dMvsMht9No3hDiEzc1KxpoCqmYXh7cUXm9Fp4V8mdwf9q9JmrYCPCqmq6se",
  "key2": "4VHDBQfPYepfdmkZch8ZXRxXpHJzJvg4qKzNhz8W2NfPLVQvE6MmKmTfjyjGzt7eroutxx8TdiKXnBA8o1XwpRF8",
  "key3": "BiJ9tSA6BtcsMrop3dexN6o9CgdcSjQHa2DaMucVsGvuiHytysNE6brunRrz811YDEc7nNHyf8cX8bY8KCaSafN",
  "key4": "4gcEYsbHbEbbyVf6RDgXpARFmk1i2oioWU4gi3YBeQ8wEPig1mWp7j8N3LA3KGyjHqJK55xy3hHp31Ex3CnND36K",
  "key5": "31wfJx5h6twej3WRxeuZHhuZicWQGyDaaE9pqiJu6jDwvnKWTXpXZpH3cS8QVCeHQdhNq3sYL413PN5Fuw2ZKUGj",
  "key6": "2sJ2KqhjrxB2CZ7hxCWrBe1KaHB4hu6Q62V8ePj5kVzv5ipUdSBdjZepJ31jiS1LsRSjdy4mXk23wpsy3Ckf5BBf",
  "key7": "cHcJzDbL5sTHUVKDDaQEb6yqx68F4hwom95dRzUDSLko3CjJ51ge6PjNykDEsUx85gZQeCMbMWwwpbEze1NZ6fV",
  "key8": "4iB4yaDWT5wRCXdeaKDFbi1d41w6EHZc3PM1XBnDAAhckT3tMKTPP5mqpy2TKyp1iSavfFX9s83sK8yv8s95Rfdg",
  "key9": "3Ss5o77upRyg3ik5mMaLymbc6HmuYu2bmeTWWP8wDrGk8puKFsraSMDMWAA4i12JEcMaPamUtU444p5qdMLqyWWz",
  "key10": "4ybmABuXB45Njjj9XsbMDGGoCrrDTCv7bMtZAgsudBi9r3JojqbVZjSuwd1QcVNJxrbPyCH5rvRRqpadfNRBmbjV",
  "key11": "39b3KTXWhzXMVpnUZ18hJCqNYEXV7cuAZFrWFWdsXZwZPJpH9v79Dv2dtgMgF6yLwxLXPHL1BMtJrXjWQHDmva8L",
  "key12": "G11tpyoGTYiBcoF9Zy4t21nG6fW1mYZJhsSDiz58A2bX4YFRdqq4CQSyEcn6UYuMxZqz4jMCysvu5u3dh2Sj8mE",
  "key13": "3jADx1U1j8HfLiTLrJ9RciPjBuLYp91MKxkShCu54MKnF4jks25EGm9YVxrwZydJF8mKDo7qgjkXHNoh2QFfssAs",
  "key14": "2Gg6rLwoeiYr3V7QM4tUZKrox9yxFArfuD6HeRkmef6AjG4RBv2MG5bvXxsvFMCccMmnMERzhvJdCNeq8GRv8md2",
  "key15": "KFaj7swDJRQUURrUT6nszqMeM8Qc2Sq1ZRwaG1PNLdH7rvTVQP3oQpKSqVdQxoh85jev8MXHC3MxpQcSukph6n3",
  "key16": "4x5y3nAQc3nb6BUL5Z4KezTmcxWnSdo9t56DcgsUF7K7R5Dz9nL3V46nRbbuC9RHAvBuGDPDzeVCc7ZLMLJAoZj6",
  "key17": "5d3SrBZDMSm6XWrEurwBSrhxfgBzmhuDg1xrc8R9yoGGcP7kqDvgGEyodobKTMVz57jnTcS9AMdsueS5SpE5iFMv",
  "key18": "52ZWFB9Rc9Wur3K5GsyyJJUQZLAtFaajxvVYA8dbRBHfUetuVNHrdHWjw7XfxrvfN6we5UspXjVVSijsaKhCmf6H",
  "key19": "2fspyUrfUfwNoqdByM2UbFJ1PrACsUKmuSWPfF97naeJ7znHPa8cN8cQVx26RE7KLBDjSfLAPHVftKzhMnkWU2s4",
  "key20": "2asGg2gvjXvYy3oYaUHLaBQ73m9jkgDk7HiRpgF43akar3ctJovQspsvjQ9NG3mbP75SwcABT55Qt16GjmwYRWVc",
  "key21": "7nbC3XvvVX6FHG8QXhQW93SWFFs8YcKuXt8GLiCbFBaCszvHRDJ43GJEzVj4CcrYTvW7DczcYe93eMVjKDaid2H",
  "key22": "4pMj9GryTMWiUk5ceuVzeUEUxRK9bWWV2dQMZYXDGU1ARx7PXKeHNwBuRj8vVGBLw9nxRnKxV7i1f6zi1VFm84io",
  "key23": "5crULWcprD5WVoQgsQ4WCQXeQgDAzki9w2DfYL5ZX1jUWPmhUArJDMZXL9Em6mSdmr82AS7WUJhP3Fs6fkFU7s8k",
  "key24": "4sFDUSAQvorSL2HgRinwbED9nBDDokCkACTKrkVFvLaPnLmn2ZXXgABAvgiTNcomDr7kr1yE2nDrAvhgMtNBcVbB",
  "key25": "jyjLoyo9DVqQdURmPGCF8QEDFPSo4xdsEDUMX4BTuqc9yrDK8buEt63GbZwFRViobMXLFjGmDem8AEuzCgTZ1Zf",
  "key26": "5tXSDDcbwiE8Wx7zeWTYLDCtqg97WsD4ePQZHXwTVZDH4w7km7SAvoJpc8Uke37MDrpkwSFjUnotbEoJPgQe2dMw",
  "key27": "2A2BwFsKEWXQKib5Y8yNreAKMCPbq5CWkcg3VCpegdvWsn3G9DFG3QDTGXX7vvMKBaY8nMwGzDbF1MKFpEhBHqMP",
  "key28": "3ZEnGDwJKkWWvCUGZK2geFJcuZP7cCaDH3MdkKncFcowuk9ufibw95T6jNajeXXYG3RfXj4bKgn9ZrBjs68LXjNm",
  "key29": "2NojV37CTuknjHpzfjkvKBD4jEWJtvWq7n7saU8QkSK2KXeX9Ut7n33QsfxGrdBvXGm4bb9o3VGHF5iSGjPe3XEe"
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
