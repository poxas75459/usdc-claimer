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
    "a26Rc3agYEE8Rdc7x9An2imE9HdJyTm1ApHL9zLPtkN1tnTkhKYtRFVYZLLZAdXCbdXRkg9SkBoVqGsApM9zrES"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qnsnCynA9mnMsnbeL9uKXLMgq9WcunfD31vSbtzDtt5yg56XU3W8ebGpY2DdsgbGJRRmVGYdKBuCcV8JBJ1wUdd",
  "key1": "3UmuC8FeeFWSAsdNxa4xmRSjNySVBDmFFhczKMfj5dfasstgCvqKM9gooUwRyWwTbF7FeW39pkgiFyVK9KfWZifU",
  "key2": "57gkZkQ7P7MFwnLGjVr4JKNZPGKYooUL2yJPkABcXan2Diajmr8swu7V6brgDn9bAKE6UnB2KBGcnGsKSdkkgALP",
  "key3": "2daS7ZrAD2mneQX5CyKC3XwUvTFryExkDVnPbBcx4fF3dkuJmR4mRndxd8UWDn4jgix1wB82MEPV16JwQRA42Qkc",
  "key4": "4GdnnGUUHmmNVyNNhXWpi648fXb7cP76cxfkoqf5UeyXsPfy9MYY6sfi3git93ZFvNsdsfKq5WHnyHskUC45oi96",
  "key5": "2CUS5wd8dg6G6M8ScvsEs69p4MFM8NdNxH8L4gxmK3eYEqwN3PB9Qf5VUud9HUNrzbQEK3X9VQTffUvQ6WCvgkx4",
  "key6": "e3tEXVokvoZatQH8scToPaXiWna4s1D51Q9Go9v6UeGcJGEEkw5TUGX7CzC5P7RX7B68Ur5xhapFhg38wZnHjr9",
  "key7": "3z9UuVcw2Jc67bhLqtaZqBmRP83hA4sATvERySnJtJb2RfSnD76LPCpCnz7zEo2VKv69FFbo1bVQwpygZqdHgPmV",
  "key8": "4cTgwYuRunu7RVbvjQBip2yCuvoWm6mMNAtqbih7qAbC2AfkZnfBuVjTXAyksWJw5B4SMDYVermw1XzDqxBDRcRa",
  "key9": "4SxnwQubVJu7fMhaS4z9hGWPGVBSDgsA9wLWhuaA9WgRTqo1FiBWzZhypKNBopZ49Ufp56ghtQCXu3d6BpFJQrZY",
  "key10": "pvA6GpSsWNxvk8TZ9RxEBLgnG7ufS9eyzwNypR1ELrjvFSsVt4MsWdM6Qmd4ooKd4cJG8F4rznb3atL39r3cS19",
  "key11": "4kz4x7gW6siLGErZB8Aq5dYyWYR6ka3EYgWgj5H3dXXVQt8pxhQZ5wtJtKLutWUnqH84op1byKPPMNC5vKTJAyGS",
  "key12": "4HrQfUNb1GUrsiDAvfk7dHCnx7DvUpsquw3PaX3WyFfbvjhp5qRaeCHFHAXrcRvYvPLkjDazDFYgrXXMFHZeDSAq",
  "key13": "4YHZSh1psvoJJkqcjqJL8FbhAKQZgweRhS5xhZgNW7JjgSxBV5VYq4WDyCAS4i4B5gJERvPSBQ82cw1zteAne9cZ",
  "key14": "a2XXn6shxB7CvURCQUyf3QdY71fk8pxapvQ1WyDJ3LMaMJyrjU5WUeVExujb8t86MV3e6GGGrs1C2iMnwNLAH6K",
  "key15": "3AN7RisLfinctepV4hfZWSTkywLckgzDKBMGSZKYSD5ukBP7MDTXQRkwVd3HxMMwEA7u7hGc8de5Qg94nypdid8u",
  "key16": "5AQcegBV32wNxAmC9QtAyoyqc8hK3BovVQfj9Q62vCaFN7ezsaitcknCzGYdHL3hMN2P78xpTmVV7W5CowcCfMM6",
  "key17": "M4gBgemMQBfnmJqYoMEBN8mqkWGWtfUa1dPWWVNXbUznoRATBvAy4S2rHoaMhqLHf3C1vJMX2eR2eNpgAFwVzaP",
  "key18": "2WHPMiBLzH7PmQC6fu7Rt44BK2DqChzNHdnGfha675yauzER4CV5kb43KWoKYa2PcbX16pPgyEDJpjdjCxJrPB4R",
  "key19": "2neXSyPbNWirNVKmzBmzJLX35Kt9sCMfAHw4xGyfqaJgEgqUPGRCtUtEX1mFXyeNkvET3FXPANfHyQWTDVeL3XJx",
  "key20": "5PjbkyN6rhD7hs2764vK2uh5omB1VYNZVXR2jLXP3LR5vNoYveEszp3FTZS32bYa7HEJmLxatXXBaSVAUfbLJANV",
  "key21": "abtevwCaiMG1EwXK86fieEas5SJBUYNgEfH6jH5AjGvKtZ7GCBipCs1nbcEda3d5ure699YkVhfF9USbhtZqk87",
  "key22": "5APYX1i6PBwc4uVyD24Gt5b8sDNthny2UrNiQ6N8CbXN63mZQtgnRUikpeMRwVBPN61caRm6ZXoqY2aBVCHjNihm",
  "key23": "pVPrS9rgxYTq3hiHsciFpDuybkjRk2Y6tNAgQPxaEdCrEugxUFctJNsMPofzNkdoVsYRCyZUZ1kowu4GbNZKmsE",
  "key24": "MpXFpNE2Sds2GLzW1CNXK24N1johvbAyMgaTZacCjGi77JcpzBD6EEiDvaMNpWKhaXtsRJFyLCbRtnSYgSXMCS3",
  "key25": "7LhfbXT2sCaSzTZhQ5BLaq5D4221XYqBYLibGeyFDc4aVXud5ZcJySGfJwTG6kmptfCcjzx2F432VDRS8c6XiBL",
  "key26": "29yadp5otkgUD3aKcw53X77TPmPi6TVmzKzyBeStTEHwuaoJQLYJkGwAAFwb24d6HFsgXP3PSLYneKLtH5BScXK7",
  "key27": "33XSg5epf5gjM9aYsXw1LfdqxMCkRvP49amtYjN35xgqH4rBHqi9pXj7Jc6jzijNwSqju35avzv5d8bjce3winmA",
  "key28": "2XxJwxwsmgrzpPduGMtEDjr1K2yYPdPR3ebXrD4rmr3euhupkkviuS7jTpWVQWMia9fgWXA8H9emjxRgccZWRaW",
  "key29": "2AgHUnrzZ5gC8azQSDxwCgF9hc768WSVNawE5qumT1gcNA8MZAfzXo1hZsXTAnHKbYX9UbAYk5y5ctt3zZf93Kqa",
  "key30": "4CJQhkc5jw9UxhrhJRro6gTnxa97VrJx51Mt7cMptxKf4pxXF8Eedrr1t2nVVb4D2iW8oU12ZUdNrQ7jXZzEPfQA",
  "key31": "5uRGqPNewEKXoER5WUFGMWM82XCFVsgJeqHVPFgUexVxAkd7urXgxps3ixzGT3HHpRahnYwBEdbeNx4QoVgv9DcT",
  "key32": "2wUfJtdJy8iBXs3WYKxx1NQ2Qf5sUxAHZgQ2pTo8XhjkgJSLrLMk5KDfiJsxwRLViv8az5JVN5P74nSitBaCFzhY",
  "key33": "4qfjC5TYZYA7tWRYzEX8BqMNCtarCofF6GZYZv5LNger1bQZ2wPiWSWmYpPWjCjk2AvaZco6r7igfNbaBzCoWHCc",
  "key34": "Srf6cSALeP7FaBmQCvdVFakNUM6s9EdMWmXhEq7ZHfaVMv1d3Tdv1NH4VDKe1eKiFLcmRG1tp27r7B3bSo9RuAJ",
  "key35": "4V4czdac3G3KzrN9q15oPN11LJbZYGNoYnMEeohQsiCAhJT14kcxA7NoR6GchrUfM8tc7ScJVjZN4iRsLZUFfyWX",
  "key36": "2kCwfaR4rV7MoAUh7eGdB85qiyFXxHi4qo7iW1PJSxVJuTgKqLXWRHhcWsHkdwK6ZPKqTLYQWZP3LQgce62yAp6N",
  "key37": "5ZosPBqBFfB3VWF3g3fAwVWzL7zxVANttbnsGSEMLJBtq9kxgPbhzrPtaqixQ7pUpqCpsfkfiRxtdNL4amdDj9YC",
  "key38": "5THmSR5rKjXLhNg5YphJRbXujEcYoaURUgQEskSvUxQGzTHzoqfWVpGyeDyd5bi7Ka3U6tZR7MEJaSBjrB3wZZ3G",
  "key39": "3wxSPv9yAVFgNPxgkpqWXWfaLTRA2Rs3CSwCahNtpgTdoaKBERkZ4vAFJhDY31w8K8JLdAvFEtRouSKA6Do1jQXQ",
  "key40": "371JSk6BUqQUaMKQyp8JEVgTnxjmQo26NwrZd6fWuTSYp6RDAF7Lfsx9tBmpGYAacQN5SahU3qLTcAy9jqDEGryn",
  "key41": "554CvEu6u1trLH5WZux2uumSRYtzstx2Cp9LPTTKtat1hL2mvnN4Q8fnKDBUeXE6Y1LvUS6TJ3ELe5jHVF64tw3h",
  "key42": "iQfTEBZoSxebff3eth4V4CrsJZ1yT8iutm9GrE8aGtXETPU7rvQnxSUy57QBGV2Yt3BXEE9YzeqmknxCPdqdtkm",
  "key43": "KcywQfYAf5kujB4jcrgF1eoY34AFQYMBgooKPYacRDbBuQzndL7JFKE3SWZM5rAPrsGubtFQTdkfZF1HK3a8KHx",
  "key44": "kko7xTZm41GeSi5SPKo8tkakGqEFTmAPqAPY7NK8QD3yK5Qni3JY9k9x4DDWAmoKjkXDHXmyxpmjrEkdpAx4EJN",
  "key45": "4Pj3bWGYa33yohTgUDTtjzFgsXqXBhMqM5ozU5LoHdL46watw7iMiRPm2dwD3iU2uMNSeYAioSM2qUe73uaDs1Bd",
  "key46": "3eVvoLuuPq3koNiKeRyJSjgupTRKyL5aSQJtasyXEZf3eZFqMAoKUJ6uexmEpNg6hQ9iBDqQpgTzxfwRBzMaTnsB",
  "key47": "5P7oqmbDvW2YGE6GnBydCBSyj6dH5JpniVDBDWom2wYWts4dNEsw8MQX2NPJ6wsUaChY21N2aCuShZVYcgb76BRC",
  "key48": "4RFHjSoPZVEShww9Gnz9m2yrZMbVAuyPs19wiJkmtKdpphMgaqAm7dPUEREBu8MZvFDMkCSRQ2769zhC1GMf4Xe6",
  "key49": "5pTketS3zVEvSGDXyU2vVNY6Mw28E6Tk4nZpoDDjvMiXYWUyHUNbW2MitAPNVmHrKB7CPUnYu6ezS62tJgdJ8y5J"
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
