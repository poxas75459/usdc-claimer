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
    "5nYJFDLgthyvfX9FTSFMavhbVXs2c6Fr8RZCr1GafafriRTX5F7sHD81LdNHYXan839t969kHVmkSQkqK8s7MdTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DWgmAtTu49P1tGN3PXtxbpD4iXq7sgDpDk7kMzF9aNi8jE9vQcZirmYnAmJEGJH1CWRWvmZx3gBKxhRttb8avqd",
  "key1": "1yfX6f3k1DU7XmH4ZdW2e5QEYWTrESgcU6sqwUAwxeh1h5xhH8v7jNdApXdsCyiHwyASbL7euDydvpw8G8guaBv",
  "key2": "2BJQMZBCSuVCpaYB3xDkAkVwq2wQaMCMJGSt6ErrXC9CYj9NqD1oWdfxJds1V9Ec8EwxbSgntBqv7giufY5N3V1j",
  "key3": "4ZCP6iF9uoajwTFpELkmZJcBLFUqxinfhjxcCGfYk7sxaxkyE9CDWL6X1P3xP33j7W5pjtQfhzUm4gvgAXmqHzn6",
  "key4": "5SEePLWoZZGKfnsq3EeaBtRLY3Yw7sHiEUfnYb1mtaK97GnGNdZKCbtYUKXyZkW1pCTH34zbGsFhJBq867QUthD5",
  "key5": "37FYCf9cKLEs14FeUfwZRitgD25FWPV1vA2V89QtcsN6SjJJUL9Q431snA5VzuhruLUdQQuNeDtZCy9cXbJake4o",
  "key6": "4GkCzYhpyRPPkbyK2ZdXDeXR9aF7tXy6gbjgsZkLR3AzqR2X3cC6gRXftqASL5eTmKH5LHM2ye5HQsuyQXqeptud",
  "key7": "i7c38vJAn5JTitXdUzSvx9SECDURwrxRJDpsXSQJhPR4K5YdT855pChkAisN98DK3kjG8uc3uxzR6smy4TQUXkv",
  "key8": "4aQpDiPz25JLvdocBSf5b4GceWvPzzL9cgUxZoUgNXnHcNctbXL235qSGLoAfB6jGiSkRfU543kJ1dxkxaf55Exx",
  "key9": "3WtCJ1Y4Vtj7hGiPPUEnzwDe1nwnrciwmiJjNjX5rmtXpdPde4aCaXXpdA74jTQg9vaRESa5cjUxDVuVaEr2N2UT",
  "key10": "XWDjmSedY25eK7n81TK3rfWdENBSYCTK4wTqgatGPBm53jg2y7HQ5GfUbCTXYsszwcBrph9aELjkUSMkkAzWvJ4",
  "key11": "3BEFvrzmeBo8ANY3YzWejFr8G8iJrqqyomoDV6gr7uxLZovLbUQLeJduufKKubstrotvua7v8RBDtq1sSWQEm5Y2",
  "key12": "3QebpzWTDQ86QR6SfADPWmmPe4Z2km57goNLcoL98NcWgQnBbT9vM1pQDp6ZaCzsTyex7muu5ErMF1cLz3eFKc9X",
  "key13": "3m1tHVUgRHG45wpJgmz1Vt8qsuxusrFxoCREopBjJ2ENA1yRf8DWJk4yT88AVcpGxNpFACasnC38PHzi8Ez1UuGC",
  "key14": "24UD3D7EJN28PEw45tr6FjL3kd3f4Ni8KW8PXqpVm9o4gZ9f5n7yequfjD4msKjY9VaZHvi2yLrHWY6wGHAJDsSy",
  "key15": "3oXDq75BMD3qkGrUyAWDbHkGDb6Te3MFg7wBqUPoMAjAnPLoEm5B3pMq11Zq32Etk4Ezv3i1SMomQFuuWrqxuXEo",
  "key16": "3yaM5XjiLyK4MsDKAjM2kmaR6X4x1WEDKR7jGAV3fkZyuDmFJpfVSAUFxRBxBsVJAcWpadqxGnYRPHCAM17YSyfz",
  "key17": "3MxYwJxsoPLnM5rWRFSHKvFnDT2Putbw5mXpxZaajJZe6Y9jQpSCbFAeEc6tRw1wtE39USsPN8zXhgqp6AjCEyGn",
  "key18": "2wxbqCRra7g4PFg6NyQALD46c52uWvxe8o5BW53BJgnACYGx3ZS45LmhyVsfYSqEEMJe5zxsZ8Wgi4WHnfwqJTzX",
  "key19": "4iJnyrUgh4afuf5CoX27xksyBy57f2fWs8RZDGVG91wCkQFUKTugKCyoDDNMFsaJwB1khLE7E1qxX1w3QXG5FfuU",
  "key20": "2H9XLawTjLR4TFGx4weZTKDkqjnYK9Ww3aUBiRdJbXV7ixSi6BR7RwZ1JZGBHBjLaziUnNumfJ6kC2uvj7Pm97ea",
  "key21": "42xBVupiPqnz1bHwJEfgLKsaDVgG9eC1WeGrpNotcy9FKX9YzHDdVK24yWHhMdZrKjsDVctN84Lcaa9LUsB8pRyx",
  "key22": "3tSkK5X1WRkbaWpLskwRuJwim3MTeKWnaPADdDK5v4gx4ePhYknA3y1M6c3Scisj51moz6XDawTd9T3Sskq1KKUo",
  "key23": "4TMskPe4TdVYsG1kDus3rUPbcb4nvy6L9e6mXwgBQvcZ9WuuSn4pigX5VrYBfCuBRn8iJXFw7S6S8yjFHqmgwQrH",
  "key24": "3S3EHAVpinedzfeyP93BF9Y2ZWWKS5FVGUApqKFMfp1vQGBr94kjH47Tq8RgoZDhEeCaFekEtEi8zKGw1rcNL6v5",
  "key25": "5CLYQqGMD6ueMmsnrH9XZX5tRpQpXBf4tr7ZCauavhcFaYZeyxjr4uyLrhdb5uu2xw74uwJfXJDUCNXxqXCnhDmY",
  "key26": "27TKvwgCd96bMSSPAtmp7hRjyV2rPS1KRMjJo3mocHRpLJqXdnoZUp2HfHBr8xW4o6y7zC2ocPhUyuBStfiTNAjW"
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
