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
    "EUC7sWwFhTBXQm8yGKfjqL1f8WqH5fiLmDqDKSuEv6k5rVmoA4fEdXuuNhRZQE9Gy7PnTkMfSURx5zATvf2nbYR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wa2i81SbQ2WSpZDEKMfDvEGEKsjEwYkh4cVMbKSYdqkKqhrRATuGWAFGmbX22DDg2Uta22jWQmZ1Krinc2B3iZW",
  "key1": "45AtAs719z3FGhyT6HchqFE8YJSkJWvXYBSA43gfu1pcN4GiEibLzXBSPy4xuaKt8Jbxk5frYVEwBcVtp3MtSRYe",
  "key2": "c79V9DH1Sp4dNTdLmN5YrJPnHmRzsfFfgQh2N1tJvN9JhmwsmnDjujzurWi5FA9ByHW71U1okgYRzid5GDKH7Fj",
  "key3": "3c9v2ycexAE4DyoGUkUn8casMU3Kk9HurYR6A4u3ZyKiDXDDmUwEQSFfXDCU338r9yUfh82gwjRkGUgLbXVBmqJ5",
  "key4": "46PXJWhcRgtCC1YojScnyDnWtMBW826Ep9fd2kNMz4Pb6XpTSHbciwxmFdjjYCgpMf7o4f3vPEkQERpqhtDGPk6V",
  "key5": "2mxSdXtDRFYjUeN26gwSCLKvk1BBzakVbsHoCcPNbB664MYMSAqKWdburW8vJDUZfPfXLtK15AeA6nfHd6gSTeK7",
  "key6": "UsUSF1sQupXvm7fbKKvvakeCUisqRNMa5uLU2zrGbvxcePFzJBNdVXz8ZA7MSJYWDjA2zPANjENyhvzZkgv4Sdy",
  "key7": "2M5kbrDDDY4dp68ZwaWkJdPdC9KCci8tE341iTPLA9g2A8moAwKgqXVo94mLAK2Dd7RFPBcD7eGdrceqovZ1hMey",
  "key8": "4JafagWMx9hkoGge6o1CP7wsUWbbmjhwZjgFegHULjBdiJY9ND6Moy2CPhdwnh7BMZhqrTNKF4gFdMaFQZEZwFJM",
  "key9": "6Jtpdb3xZ5CYPB2fzoSYkxUqLSNHGHkcgXFvkUCWtteRwrbagzx4Ft11abePtBCB14QTAPw5gVPnpyy45gMi7py",
  "key10": "3qzaqniZGYNvTCMZzEx5bF6yDNUUomNPm1AcpV8awK4CF5cvhfj4pDTdpfpd4hs6nCpeQeLaRLvHEsHQdJxeQVQn",
  "key11": "4z94HzcMVCXreYEm3FmAz5xKGwbTD3WUsHGab6CfddEDmUgfaWWHR7bEEukzuHo57P4toLG2qXp9waz6vHhJjUp5",
  "key12": "2KquWj74BAUZXi59FgYzN1Ez7DojT7nh1vMN5WYjMmsgVGAwYu8ZMrhm4kZqzU3QHTNz53z2UGK6xBx2Ek4JA6ty",
  "key13": "2qpMhzy9ks2e41cwmPpiFzMLhbU4JqjuuqKBESAA4kh6zawq8QWwiNbYJ3rCDB2F1iHeiNWYtc4nx5piCGJqx4VX",
  "key14": "3ULAJjoL2VzuN18L5kqZwgfL7fUHVo3WQe3hqELFGGhwqme3XjaowMYQsVZXNM2vRivyamGVeLvv8cjuWcmWVUmj",
  "key15": "2bz8qXt5o6JRs4WSR78EJL1Z8wNLsfiM3zyBLxcgGjmt5R1VdCmWpvdiAKcmqMQ2jg4Tkz8WnF5FZtNQm3WbMJ2S",
  "key16": "uxtTe14Gmq1AXP8a3mKYmjs3Vo3iiAQkRAfZM3WUenH3Pt5w2F5BRUByMrS6psrtZbMY8XAyLgzyApTDz3tkjvx",
  "key17": "5UTx4dZQohNER2WCqkP7jQyERuL6RPLJCForAh4u9Zfruv6bVMsbAhKWMq9p9tGpc93HH33DgA2pZ7dho47BKC2p",
  "key18": "EViV7WNo2MXPyxf9VYQvabcukLjKAXrx5Ksw9dba93TVCChH7V9DFKni4Sqv1WazbA575DLAjELJcNpdyQM6yso",
  "key19": "PKrv9DpaeNeaPSwmVS179PdUa12GqZF4eqJMh9cW7UeMvwYwLiAiAoko6zQc1PtVcQH3JRLWdmZrfLwcPwH1SRj",
  "key20": "5NzcoFBTfrpiwbuEEpwh1cNRFkMtvj72LEcsLvSAEXo3QKwq1vEVxtm6MgLuUsCn5Tp8PxppfetxkN79cXN4HETr",
  "key21": "3Z2zDP2rB5RcWiLWDmoG3wQbX5GPeuJkQxCFPFzrcP3FWYicYAkt4DCB3SwXBKQuVzXGEXSbgmehrQ53tkbE3UuS",
  "key22": "3wU79xk9ZLwWsmPDRkFK7tzJUp6YotBDN3wzcZzKv5MsDuhTaY3jU2gXVWKbC33hRu1sA6M8tETZkGhrdBReHSv8",
  "key23": "2EyYhGE83HFACDByAozS3Fx14tLWiZZoSQRNgAgsfPJDwAKkEV57cFcJQFHK8EUseMBdnH9WiR8zveoieyE1CEuo",
  "key24": "3XWw7XXfWupN6wyC2XyeaQtSqMGVZPeuUrk1sdEzdxeHPp1HyERbitt5udm9gFirFY5gd8QMPnWV26w9zVywwASc",
  "key25": "2NyDaEEDBhMCitLvdmKetwB1TUKzwReM6BJnGZVGtrSMRLkr8DVL649utPiJ5MHTLVQpA4zCBY4sATHoH3qoa5uv",
  "key26": "5jfchJFt1FTYGYVXyX92d4YPgSrg4eoQwgvpbnBP37ra5wZGQ1ueT3eGgBgkDAYbCfcCE3nhX3hp6eiV4GAojbn6",
  "key27": "52WXTZp6Usa2NwjfMVNrhEq2wATjy36Hw87FySdHipXQm7mfWhArgEWgxSJxqmi5sZsFcETToa3oL7xRSwEkYR3J",
  "key28": "3LQQtgsTbz5jnbsenit6a3p2ieNauvRH4SLNtLomzxWzZTYNMVq4nVb3fhYRQfV6ib4BT3vWb2ur6gtRRsY9do6T",
  "key29": "2iBSzPencBF7q44qLRgLkZHSCWmy7jWTTkR32EtiThhMEauyjNbHoDWBVFgSHfxXNpr9Rf572D3eURLxHYwpLPPb",
  "key30": "4qS9znXEV9nN1auAutSFdoXD8qXWCuQ4EHXUfoHXEZe6LfDQ9b64idEZvjqCFwTW13cxisiyWj2TZG67KFXq184U",
  "key31": "2QvT6kshefC3hxd6t5iVdfiXyHZTsAvkZRuDhBEwbFH8nDUHe4pGmiJ8dwU3AkK2BmpLkQSnyawUraLsuPCm2Thh",
  "key32": "4a2Wb2EeXU7fhqxrvjM2bkeg3gf1xXyjgpKjyx4NLVCn7EvnZVoaPi2ddwozHeP1yYuKgxNVu5iWQR7wsDYg8QXb",
  "key33": "3oqbaNTcecdc9vXktJKUMpWcizs36BznQHEN7HWRPsqkMpWP3jdoyJ95XTc47ZVbdNBPKztF4fThsqfVhuJWHDib",
  "key34": "5CHt14NPCuGxkg5J8YrL86VcZQNoPmxbVpV6EMLoEyhF6gnGFqyXAdu82755afswdccEw5M89QUgt2fXBPnfHSoY",
  "key35": "4xZtiKba3TuoBQnTU1Gkg9pj1rMv8ii6sE8AFVMLaHRzP9gmVnQfR7aXfcKWYyzT5x5pC2FQm8d2DvMJndsSmaMW",
  "key36": "HSZcPLe6Mt9kiiBcb9rMSpq9Co2x7EfoYnkeB1YhzmRLhfF36gtqKfnMFS1xLV56iMsfqAD99HSSSL1tnRZh2d7",
  "key37": "51j5p1XoaN2rXzimPKeQbCgeWRiEhU8g9W9XmYKfC9K34cwLeeH4igyUfCypNRg5Ym8BQhJvDTFnQLFhJ7gB58fn",
  "key38": "3LJ8R54f9Jak3tbgs4zUH5kNhHzUYwSCz2xXHHdyGcf8w5MKUt2TmPVqk37yg8NBBj9HuQnikwqgzpiHeyomN4Tw",
  "key39": "3cpZNSq3jLj8t66UWj21hJugECcSyLokHeoJD4hGwySV8y8fLBHhPNfD8P6v2k64Hwj43Z7GRQiHrU9MiZ7ASFLX",
  "key40": "2c2fk89Vfq4vhhnszZAdavPjUe7t24YtBwJN6PLD9ftwyW9NXiH6qrsrdk8KPLHMCmiodfA1HVHEqTwky26MQLub"
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
