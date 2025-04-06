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
    "pvgevrZv91veNM7gZQh6xxFpQxScDakbdBKB4rVqJKiU9dsqjppfKZDVdshgh1vPyXHpKbfdw2oPeZzD1zk8Sym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zyMQTPQfUT5L5sXqu1q3zHhWgAFys1ms2AysovJdJhtreCfasMRdK5fSa4Lp9rvbs7EfsEzthEC2XSYmpp6ebAf",
  "key1": "2KEsYwBq9MfCn4YYTB6txBRmK9XAdVcwQ87VDcxRo8iahhTGfxLCpwLL1kbugqivqkzM75eEdQVfPKXpnk5Lg1vL",
  "key2": "66WPPTP7MJX7vtPdZBoEiipy8ZjinX1qmEFabFPe5rPSn4m4U6uvEKCpjPrSYxJaNRcoKJHZZbgoa1pogV1qfHd",
  "key3": "3zRmg2YZp81EYSvK8jk4SS98n1za4kDwaWtdLYoRU77q44wuz43uPB8MstyjgeeWMNoPdGEfUBbZJdjnnd6KJwVU",
  "key4": "4rPQW69NvgBHDpPVSVqKPBzrmu9S3ZznMvZLgPNpR1YKoyzgQkZVwHgZbpsbX4HiBdFGRYz8Lfc9La7HRCnUs11k",
  "key5": "3ARHv5PesLeGDKfSkkWqKh9h8EGjZwDrteBqatG9oF6GkyWa5qLmurYzJN6XLjCR1ECYSuhmtMD6wN8qcupVB1pm",
  "key6": "3mtHMTtj9i72fKiNiXmSK8uJieg4Ebg85Ci9oMofAYRqhAs1tBEwLQ3uvRkDY9bMnvMR1neA1rkomRYk3wC3uHHa",
  "key7": "5gGuGP7F8zCy6HagwJr3nT3FHMxBsadR2NwhBmtLRQDmLb1m8UE4C6T4xyyeU8K31CdkMVgF4xiEBgG73ehkdceL",
  "key8": "4GcVetgWvY5RNoGheDMbEhzcq519TMFtQGF7Yh53tqguky7Yv1fWcJLgLAzZuhfanRBuWeE7p9T6B95fATznJWQr",
  "key9": "55zpyWaWbiW17svRwSFdy2uxmhWvhewDEMJAvQqyJ6fvo7j4HmLmd1NKNTzTDmFzSiKdpSdrD1FuaRKpH6t9y7Yi",
  "key10": "4g8twJooeKTAEb5w2rb3ryGwFLNQhyTqtDUtNv8r2fTToZeTPNwzjkGKyXvUEek62WAkGCnKazXLKLw2gAnz8gAP",
  "key11": "iNvgdwPb4RZCiUS4NATBmicxgUp32nwDHfineAuGLwgC1k1M3jFZP5SXcFDULmsHnp2vtgPepUUdqMkXK6iKwFs",
  "key12": "2K86aBePEjUsQW3a7bkV4k4u6o1BP4qL3hhpR8qZVRcwXgenDMZHo7WsK6mpccgE5bC4yAoM61xmxVrd3dp5M6Yu",
  "key13": "5UVBQ52xJo59613Z97NGwXH5Szs3FyKL9Qn73vwmi3t9bs8ZYZVy8towGETq9WDbJzysakAuEUGPWxBv14fbWoBe",
  "key14": "2X48nvgrpt4MN2GfaBKsFPaLpipRE8W67yyr79kCLKJz2KqMqZAiCQvyb3MmNQjm5JjkfFKge4bwktSwo5jcCFFv",
  "key15": "5a4Eusnp62iW2TXhHwMnfAs7bF8CkKvWemTR66WmtjTVscZm5A534btMrFMMECjmBf39qCc2eeeHpPGWy7fiXBss",
  "key16": "2qonzXGJpyXN1jTHDXqXPyZEwPpWqGuPf5yqoxz1YgLEHyMHXCNxeeyPGuAmLqdKb18fSfuwaTLVNU4exgdwgED7",
  "key17": "3qHJUGKWDzT3z7KRQSZNxVDU6XFMRNkQRjpbfFy4RWLwCXz4czgDkAUiCgrjL1sN9CUGb5eWPKLiqtE6JAiFi1L2",
  "key18": "3bUdiY5h64pJf4obgV4AUr96sQUP4mwYswt18oNPsfCu1QfAeqHEdTHPU2aFABiooMPaTxWQR2xp1ZaTVLhJLVVF",
  "key19": "PJc7x5JwZxmsvd5X8bKjEqxXmS8sztgCP5bVkygemA6dE4fDjuMcq7aCCS4fzArCCB22uTWV8gqD9UzN3mTWkaQ",
  "key20": "gtpRy5hTJdij9kWSHJtGMS4Uh7NMhnJrAJpf3e2H74mXXL9Ley8YERyn9R1SjBdJiFT4xPJDNW56xP7h8bpfo37",
  "key21": "3ZzjjaKUabsQejfHBtXzHCWKMZdWT48MPUQTDaNen6bC9sNPFjxuu82JDW9iyrFPuiLhGrVs8N6NkKGCkNUdzSm1",
  "key22": "5iFJEzfxfNhH5qVf72J1FWBZyrThbipDLm2HXpyWnj3SemBiAt2wmGCE3otStUknwkm7Po7ysz5bgADA6nG16B2K",
  "key23": "2rvrsJKzkMQJWA1DgqEES4cgoh1h5zGDVZPkarExSFWBWF6FscUyspcZV9nK98BT1epL8LNh7ULacTvTviNdTUYa",
  "key24": "Jy9v5Ato8vUic9tAtbptiey6cY7W8iTTHFSnPZJisHhFJSFDNnngZ95juQECzi69HPJ4fipuiN9Lra74rqkg2We",
  "key25": "2P2K3x9GAj5uzvtLt1nHtvgFky2HW1tj78jnEU2b54hVA3bX7HL8e7thXXTy23GLSaTsmNfsdkSV5NaWEW7f9AR3",
  "key26": "Pn3iMPYqHEpTJkNqHxKhM49ZkV7CwjhqCEvMDoczzbgSu15WdfL4dug6aeKsimwfvBuEuoyudfTmScXzQLV8MmZ",
  "key27": "2rVLAFS16xMX8nQfLsnFMTbtKRpC6UpMApgstfGxcK7UNYTpZN8R93sPSVdiBpLhKSScoAzuJqwW2vvq19RKn9FZ",
  "key28": "SE3GDdx72hKu4fPepyTpcjbtC7cYTNLSv8oq9Na3K8uq9Ch7gN5GWUsJukb1Q8w1jRiqfJphDvPaaMPGhmh4dXQ",
  "key29": "2HhXMxUEc8yfWgsGjeBxCws6Bu3oTnYDxdkK6fHV25K46RxBgtXSAwab7HZng2EFp2Sdy9YR3ubYMu9pWeoKWiKy",
  "key30": "3AooDzniygsbtaduink2QnGLZ82zdtsMaeB9TCPVvCug1FZtvNMVfTwmPwNKJLowwYdgondwnHeb56JeTRg4vM5d",
  "key31": "5ufmhxLotdfoSHdfqrbDb7FMFsvPmD5XdZHfau4MKqh2aZni4sUbLNv2TvDiuCxaNYdpjUdEa6zwBTaBqe6gDcVs",
  "key32": "3Sqj76cmwkLxaWi256UWu48BGKe84BDo5dm2CqyCJjT8HK54miWQyoE8c51jQqBUvW6cUz38fScZuxanZZv4YQWd",
  "key33": "5SBJMx2TAnQRFWgJmQMGjqkzR9vqvzwPoXF4cFiUQFzZH4gMKcg7st4TTk6jRcVm2sDCq3kAQoHSFiFYEoMUj9y7",
  "key34": "63vYHpymZeXhL4rzAG29PEs4eDGUtLiCcCQeCGcFSNtfksyu4eUqnGTQXFixwwL54KFrugFThCQmsAmD2xM7XiLd",
  "key35": "smK3QfhXcfTe7FAseErpYyZ571pk2w6pMrYXXo83CwS8FEpTgYuBnSn2pfVR5gLGtpPuBoQCkDGXtSvTc4HBEQL",
  "key36": "xf8qfGKNvWA43BtwVcj8BcD1gYLV9CdSjicPf5Wf1f4B64GVeAFr2xkTx4P4YRuZ2UWbVDxC4a2yeo7XLU9Wfdb",
  "key37": "eJ6EKeksnZNYrKQogXvbrbyRsL5dc5uQ8hvrB8wnR1AZknaBUdRfEQ56TGjCezKMXgUm2qRC3e1zdo6tkYQPrhB",
  "key38": "5RrVsgpusCvtKgENgKmqAfTGzovJv2tkiR3pmiCG6y3uqrHUy8z3TNz6ueLvuoGGc2XEvk2vbBdAdH5mHPkRsKYt",
  "key39": "mRnsspXCJmk3WhxdgERB7YVJbMqyC5tF23nKVfTm63TQr5uafWnLiqFXYrHAwSXGhRJyQmqAZ43naj5nG5LwB8Y",
  "key40": "4sbPAzW53P4YyDghrP9KfeKAgKhr6eYt7TCYQ9krF5x17nW3tShZrvwp4LqcvgxSUrP7iCrSHwzu4CQUr3SuWKiG",
  "key41": "8va9sajVG2aDRDrJ53WiUQYxCNc9ejxHLgaXGZZeXAvuqC9rFn8E1Hozz3vU6Wc8sSEUhgVqnA7jdPeXPAd4Zei",
  "key42": "5fKCTo92qb4QWn49wcHj3Uku4EfNzsjoyjRcrqC8y8ji1hyih39CxAV8xFgk6Peu9ysxy72vJpUw2VqnaBnEosv6",
  "key43": "2ihqSP7765uFRKFAT5QFrifQ3SDkHcT7oCF3sv2713NH8riGbr1evrgzsLRXekG4Z4cMnWcmuGwvzbkoEqqBwM5k",
  "key44": "5nXVu53nai9zVeneHQpygTtCcFXGAtbsdb5JngnPnR9J4FrtjNB7rSPx4Sc4dbY1eqynvwkiN6QziZ5HZ44Agmd3"
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
