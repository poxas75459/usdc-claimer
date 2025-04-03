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
    "3Z1pMKmyUJ67pvaqjhUe5YS5vnTx8x9fJGVj3EPTSk4nd4GucDsd1oh9pePWUquaDbVHiYvcRzNFb1gXdQYvvYTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2q4SyY9wEYqMhsSgbfkDZRokLPuMpvz42va3pjWU4PtobigRRmcmCE4M3pwdBjwQRbCuKhxbVLcp4e9LsCrptFbC",
  "key1": "5NMKhWMMyk4yC4cBNfaFhTR4A2ptbeHi4V6K2gErvvsHCorCEBCn7sYX1M1N3MpgFPLgHKBDW6bs7KSSTvGvwAr5",
  "key2": "24N8rfnARuccCbodMQ4GMD1W7t7h8cADHWG9iKUQLzT1i17Rv6sA9hQfs7HzEazd9qkmFa1iJcYaRW1eDrfR3hwd",
  "key3": "3KJwqQJSDkxN8KNhdTgB2W9JvohYGUtyoBKTgmTxgwVqiD6XzrF21sDHKugz7Bezbn6RB2fkDJLvpDve9DLU1DW6",
  "key4": "2T1zfLa1qCy2S9xzYQfvhJVvDJ4e3bytsnAVXyUCPSxyr9t8ZCowmohDJ9KCmRPGPYCcuN7Xm8cZMVEKrHMP2yNq",
  "key5": "5ic2aZqfJ37g92xXJwF3Jcww1xi2L9VPpiQaaZJXZ3nF9aUwnx6xMKjaVCELSwjCjB2K7knBRsMxi5kACvPCLYu6",
  "key6": "248QboBsvMroULcWf1WJGt7vh9YDQgFRnJxNJWbCNSjvHP7qVnyL7v3J4BkfHXVtAmUZPLs9w6NoWc8rJFdT2NL1",
  "key7": "2SCxtM9scDpLgCss9HrDg55Ebk4kQTV4bf25WYaWYbezwCmSexR2Wk9dUxiH86Zn83ySfw3ebn999YXLWLJfqcdC",
  "key8": "3KiWB6CdwTMPkTyUGxnCx7q2CPqtq6gzQFB4f2LfwCErKSCm4fQbCYuMZeNoHf8wfMjnw1rQEwfXBE4JgBe1AGq5",
  "key9": "3hT4r9WjLvGu7koq8GCoUZDFZFdp2oHBrSCByZ1kG3XVQYgRrV3PB8RErLS6s8ZvUHSiXv5DgvgLyExmXPHLeNPG",
  "key10": "G61HKDScsaN2Dhd8v7eoUGsVorMVVgi4JZfT8mnEtbn9GMRGadziwRkJJQoAsDhgXETZNNCsmA3KLSHwxHs76ec",
  "key11": "3AxMEKHbhwiXa4VdLBs6F29SeVPUDwfY6eudai62SPxPwzD9FVjGFohfuLewYpfXTWtawzy36pSQDmtKp2GDCWEh",
  "key12": "3sN62uX38H6T2J6fLekCcCwEyubUUhw2vVy92DXRLLpnyqSQxzsjFN84dRxYjcv8ag6DD7VvmHnfeYmdRKyn5HdY",
  "key13": "QbZ3V3rBWDebuSiKFpaq88ifMACnN3BXBDuwhZNYmFvUwDkDqxownbS8XW8Dgxi84snhmq2FycvtS6GQwvMYX4w",
  "key14": "2th5VU5T4DkeaZYjwY4k5xcxcN49pu5Fbf87EKya5TNV8CdSw2VDfayJMor5iRAU7MmADRgj8D1V387VBriwGF3i",
  "key15": "3TRAZHJZAR2DUt6MQKUx5B2rUH4BUvfrKcPVNN2m4ATuDsonw33zDqebPQuPDHj3zkoxZ9voR1TBMevHHJjwy69H",
  "key16": "5Mk2ReThzaTaz3BhQdSBSBmmty1UxyihfbjrLQrmYVh9rPw8EFDtjykak116PuBLxj2TAYDiWUnn3Af89Wo4jw2U",
  "key17": "3W9oiuaaQcJNR8mPZyR7zdqFmUKvcyy4SXv3LSb1VRm6c2mFpTXHvFmrxNadmPwhuPV8F5zmNWKiahwWTkzRsrFD",
  "key18": "6y1pWYAQAhkzE1634XHAZ1vZEfmayQzZ1oPyuYiCS86UEFvanqfWPp7n9U8prbDLjkX8TSbzeKXoEqivVhugG5Q",
  "key19": "21kx3YB4gsU1Ea8giDCDiJ2M9wGAykQ3wpzJv2J8PPNDVaTEHunD1NMoS2BFRAQ3bctD296JDvc3tHkS26VWzrSj",
  "key20": "2xvvwyXi37P4kBZzUWWK5KTYPYFvATVqgua3xJrn7zdYQL291Bdfh48fW2wqACALdS31hBfLXWTZLiPka2gNyDa6",
  "key21": "9cgAtN9xrpNeAKCyvigK2x6Q19otHqUWa2DdXJb5Cvf5nJn2WxQirZr148s1bNfdjLSKbPtLVkrQR7p4RQv45TU",
  "key22": "4Y7BCitqUviQ6fu6iEPPtoVXBiDi74SwJG3J4gYygteYpijWwgu6fPHu2KhRV22v53j6mV69yKB3EwM6naFpF5mh",
  "key23": "44zdR6CsCVeGDAFFuejHCEGXMhFbvv2WW9xGF1rFJ6UQC2TvVpGpeix2ApXzLuNa8Hum7yz2Na9zGE9TtrGPi44M",
  "key24": "4DR8ZuXpqy3jLhpVBXKWqY1FpVeG3DRYpk75SVBdmv53W7Nie7uShR1HnxwM2KTH4QE5qb4bbHDshefqJEL4SfbC",
  "key25": "4phS47QUMPXgGCt3jZxY4iYCr1kXBSKXFu6viQAZPjmzcATMh5MQNefnVaJDTayJ631RkxfSMdTtq42CLHVq9wHP",
  "key26": "2sdfrD4ZsmDAFr7QbayKfQhGpBPDuCQ1MZyCFGYnhtiZMri7C9BivSco3UrYpRAbcHPJHhqYkSY91tW5K8tHP96d",
  "key27": "2is1X3MmDDDptgVDCFh6D9v1t2SM8vYXqpxLkx6U9F284oHyrZNsChJ8Nxjjipv7MG3Ppcw4xKt6bDabJmF8DsA3"
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
