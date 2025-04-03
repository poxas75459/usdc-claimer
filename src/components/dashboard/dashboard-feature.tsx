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
    "5UwJBWcpJ4RKScjc7SdJqt6CD2z7yKB57hPyurCkXrYhdc9qjZL3cYHdsbHvxoe3wAEjun5RfocUMUV9tRQFUW4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GNHj4NMuCS7h6JaescwCJnQdgFUDCcSAhbWJY22GmkPG7H1zLuLjmRv1nbHACp9ZxSYZ6y1uNvt4sevdQSCGVpx",
  "key1": "5HhPaqERS3LiJ6TjbEHZhbnYpjfxHi3kzANxcCVjEkCnvuBTot73Has44y5r5vz74YYAzmb4sqrutbATGh6MsdCj",
  "key2": "2KtuoJdbTkY4vdEXYCQkoji47vSi2oZMHT6JxHFHKr3RwCHq2S54Vw8YB31EBoGQAdkmJipqDiaPWPHgogUouhUX",
  "key3": "2g6N6w3PLoH9zesyYw8ctFRVPubHKELMiLvguHtCFXDAkpXdNqQcpAg2F4pmtT9LMmLjd1JZvfdgfxhVGm82b1Em",
  "key4": "4QUJv8tMpdQLqV5RoPDZBsjDkv6TCUAoYhv4vKvDWs3JNzpzfA1Xv1Z64QphwbK2kegoenYqGiwmQwBNb9aazSQM",
  "key5": "2JxsBSt4vzLvCmA85EagM6JFq8a9Uw6GaeDxh9Q2j74RjC6H1oMbzKxnFV21MQyfvpeoNuAMnMfet4omn6XoAELK",
  "key6": "2pqC27wEsuPEy7KgoKsvoNV3hVN7UwpJRotzQvzQr69SAckzUEtnHLV7VAjJQ3Jw6xM3crDGV4rwYFSb6Ym1PgzA",
  "key7": "64soPcDXA9gsPB3d5ZuP17bY2aRN1ySyYAbVdfMRohdE8ULAK199Z3F2sJcmrCJzJfcaCTgbYreZVo5noRJHudi5",
  "key8": "3415zQfHccA1i4KU38zezDY5jWb11amuL9fJiVt576CEYDqCH7TmYmJ3inGXM3PFKEqyuRNUZWLzVy4sEJtW6New",
  "key9": "GyBGts5hLVMFTqKTEBWyP5F7asBQ1EUsooxgWrFCAEj9yLpXkdrmSaEr5jkPmizf88tkgRh6tABWbNxGQQMLURd",
  "key10": "3FbEiWok2VDQoVvoDqypEsr2ekJYgGPQDyH4bToaULx2iiMBVR9y1rEWDAqMBjNVV26tjjTYzVtnD63ckHcTZSqA",
  "key11": "4e4JLuEfBy6uuXNRjfrrmyazAEDwxeAt6HyKoDXmJinumTgagzFMrnmu6pjKV8ZXgVRb2p47nTJgLM3w1CVsdfrq",
  "key12": "BmHPHrssEC4XRfubXeQdN129xNA7Txk68f68KzhhvVCW2CM6G15Nfqxcp8dJ1mrruX1Bk6A8SYfZTCK7rP7k1KC",
  "key13": "2HxAJD9fTrBTJHnL63egoh71cmW2RjaDiYZZFUNFtWrmR9sgXymDQw71oqDFwRRrNZLALaLAXe4MbDdXKuxMauqe",
  "key14": "5SzXUNYDTSdScNHQBFkN7tykcz72UDN3WyJpSfDcoNUFTsvEynUnRzMf6p155CWdtqbuD83rdW8hTpFQrDq1cAxY",
  "key15": "38bsA4SZ6cro24bia98bYkAHYuMJ8VLYTF6TsDkLKKjLm2dVkLehmyGbvsnPqYFk4tCMpvjLDdQqjZJmt1Ckjgau",
  "key16": "4GJQopVhQaeEEt82Qvrcw859MyL9bTuyWGejW74EM4TMnYu43Chj95ZoF9STTkDWjpkB6EgwCy83ngKimyjiMEch",
  "key17": "267L2ZwrtvFAxnKT9j3JHVgGrPrkvE9RUWymPEhuLpmLGNQ5c56NFyuwPguVnnovhPABqpqU8xVf4tns8dMLXDQm",
  "key18": "4YsrfFDC1yz6CgYkUnXz3MXXFHvekyeJMa85gvb3kaCC9nqpqNhv9E9sB13JshyA5GxsWQXv6FMYixPjqad1Lys6",
  "key19": "381aoWYEzLW8MpW9aoXjEJd7RCMCGrY1E9EETzhyXPTQH5Dnw6ZnZ5yE8RJCDJwuZJfMVkERfy3TPFpw3yFZkvgJ",
  "key20": "2ffG291U1qhWDaZDDuW1CWVkbKnjBF9WxYCe7ZEGrw3jWoXq3BpAXDbR1NMGJVkP8vGmfWw2yfPXridfHe64ixye",
  "key21": "3tHxQjzSgfd3TZucrmom9Ws3Nuc7hciFik1hShMDa1RTY25qbc84ghWmw4oLpDmGb5ZY2P9ZDjM4sxx4xXTP3KaZ",
  "key22": "3NAw3eVEQWvAoUf7AthJSFr3SP9mSWuac2eLaDzCoJ24WY1o5L9QKHqz7jmFv7aPaV8wP49AU5oPrLaoBK7GLpwe",
  "key23": "5RgXXXMdj9CzmgzDvxt27Dt8ACfW8Vr6NEtQmLceY8NEXPhMY1oi9d3RgZXsqpBsBPPV4Y5wmjGW18pKmhzXgGEn",
  "key24": "2VpSqjL16pitTm9r4muabY9fdwbdwUG18hWkVoPgkkqKxbSsvt34dpDPErksUkWcEXJcKdQCXLXaj4AkcVkXmKWy"
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
