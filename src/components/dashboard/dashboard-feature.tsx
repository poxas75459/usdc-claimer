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
    "3CBTLgCgdFntgHDUxxBFCQvXiAM883jFtrkNw5JLrPMM5R8bneKJPEkANKE849MaM8T95NFe5A4Go148EQRiCBdm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24woRYHJZ2q2vN4yDCK98WqbDM5dahU9Z88szi568Trp5eJKcG5gDTZgHc7vABEFkScRXf5rGtDu7tAfXbQjGNvp",
  "key1": "PupqGe9zDGzX1E4KY5VPpKHkbcRAXCikWWLammdz81n3D425AuSCCpL7S5zwZqsDPL4N8ajjb5gq4PQ28EFaqVg",
  "key2": "2JxgaTKG7TzZok2aWwrDRJLC5nnPKUapucsTwQY1zkJDZDoK2ZPtgYqUzFzUiP4YSduT3M3VjgpMaBeJCagcUfot",
  "key3": "2xWxuL8R4ZBvYn5pqu2X3qcpSk7XsSjw4fbnPbBau92RnSgmq8ayfV6uyimmuEhXiSDDVuyCe21cEPJDBXhefQsz",
  "key4": "4x2wqM2JTrGNPBoCFp8zErXmtW3bUVy5LQGeD6tXGaDj7omHidS2qnG5GnwDihmgDcnprTiJjb7xdJ4fh3rQHuRN",
  "key5": "2E4vf8r4SQGbhRShf2jUCuPzE6tghFQWFF4gbjGxSBK3xhLp8fJaNse1nL9AEKjXzsmuCSzi5oHGB4mwuQaQfN1M",
  "key6": "472KxCufCJU9rnzxKufiT3BofkMmpHtfJbVEXfqpfahY9DRYS6Vh2vRx2J9D9q8GJAM7n4iD1cjqFEyTQ4frUkJ2",
  "key7": "3cp1YZ1ugYyGWmRcoCPTuvfzoMFfv1q3kKtxppHNKaAuu143M25PXU8Wx8Ed2kaHZWNH6ykDzaVYR5pmPz1Gax1N",
  "key8": "dAiUEDHuc3ddU8xhc988GKXjuzCWMTMKgWJPozcL5DDPowoqUi77i5wQCSZM8XpL3BkcLAVfn9Y1bMJY1CruCU3",
  "key9": "4Y9xc1vgq3B5KxobGM8rGokv38mtKHK2PymF8EhYahehErwkUeMModWYBihSJCzBgnTmEr8k1ExTya8eNbdyK3Z1",
  "key10": "5GVFk2k9YdHN3pu4G7SyXCkYxCR4gygAogin94RTFWYR5AYE3xEh11HwapBTrysiRZULcBWcpUc7hmBE2iR4w2Yo",
  "key11": "46oeN5Bhzx9bVPSb4ur7oKWX2Tps5UTMY6FhHW8yZuiaEHPfnSftoUVtcA1QRtQxPi7gYsnVW351GDSByCyotmFe",
  "key12": "66XDqWtofrMHRUxQGS8apLR7YvfetoDA2kFpZNpjq4fgBARTFJS1JHeHxbfUChkjhmmqBPmdTVbcguc3pJZx1K1d",
  "key13": "58hmhB35XEn7V8posGuHuXdJWQD9MChGEsxTaH4WgFMqx1F6Kr29ky2LFd7kvFFzNmiNa1JktmTz3uAqowRMxhNw",
  "key14": "2MUV8Ur689eiYGTHUZiewGkyW3fcBVJnazL2Qabz5DoC9ivXpRzFeVaTzG3sJuN3M8GH1kNxPja1ujPqVvMxK4Sj",
  "key15": "2g3KhTwA2xmBt4rHBtN7Bc6Lkhjvs7Jqq6pJmGZJKJJ3svvXsmKY415ZdXnTbo4dgoJwpyjNqzNtVUsajKLwCqYu",
  "key16": "EhVQAtS3DVxmJEj7x6sPn8rZMnEdqEDbVkfes8YAvgRD6Dz8oVUi8UmUmTZ42aiWxvCh5ZRzVDMR2KBcDjkfR5S",
  "key17": "2NMtzyjngbC3191ekFXSzQhqXERfk1NwBwsM7P4pW5v58X3e8YHtwbM2Ex3bSHrcrLAsKXqLLQaaNpnmELdd3DbJ",
  "key18": "34M1Ge1fwgfuvoAGiLKkXc9rdcVTkUy4aE38bwPbLoFiutmj663i7LENAkSZYW35u7ikuiLbeYVFxBATPGHXLzdu",
  "key19": "9GFqE2gxKnbMfWV4JxyJctWwi3ov7NMqyw1ofLvXDxpoD81wchdFXLJL6Tt4B8YZHMvCwtkT2HbW2W2pk72otrR",
  "key20": "56z3Dja1BpNkhiajtgu1XSeEvRNJzGyRXfHeWgKYDM1KfCCPifVy2G3Qwb9R8BoMEAHdaotXVD8SbkSTNfu3YMhC",
  "key21": "5spsrsaQArEwCA182qW9559uu372eSK5ZMg84f21VmygRA89XgxqmjxjBQvfqizZFvovpLayLyvNhoM3AbVQ5ZYw",
  "key22": "5tmmt2GNX8n3SCDGkCtdvj615UTgBLRzvyNYijtqutdJCyz6AAJuRJZYDVDLmwpfTitVikAKgy9rxQkH7qmnTh9T",
  "key23": "4bfm6f2UYpsVuSCTYjsMZNc5nBTLu19TRe53Ke3A2u5VQybqFnxUg1pXZVW15HJ3syfib6p7ZKh4BW9g6HaDcibh",
  "key24": "gxJRJ7Fjon8Fm1nApQ8brAVLj7Azy22Bb2fuHqkUiMnDCCMrHckuPJjz78tmxZsCzHUwLQS7eajAPnCibWrsbBA",
  "key25": "4EWt9KRCMFB7RbeLf6SY3Cr3gbWJexgfnhZwsTez7eHT7RKSVKYVtRxKRZowbD1rqqXGJRFen1C3NVLhHDRNPnd5",
  "key26": "5CxxDK8yX1rwt6XbJd821RdZ8yw7EHhnz5x1NwJzgw5XKSYsNmcxDyEUaHtKT3LhmtHRSVud11erK1bGzf6N7ENS",
  "key27": "3DbNU5xh5cREyKfpvbRawZC6mwXpJNVsFwWXXVuDQ6BVuGeM38AD53qfUVPsTcQZq3dEzQX59uNNXXLTpC5L64kv",
  "key28": "2NqHKJPccr2StSbSMxaJzaV1fDm2NGdjNQZxq2WJae5s5iiFCcSqpxr5Em6S11dDBomqzcxPWaLrukPD8eeARtqJ",
  "key29": "58r4GvbpsY5KMuTxDuoUtNUxFCgzx6YZ8h38Zg8WyqW3pGd37DYxEKfgNaGV7MtjwPEBNcT9XREm5cjrWEiNBGKi",
  "key30": "64eV24HUaqjfRUqxPXv1qAq2M8STisCE1XRektBm2G7hZu8o9xVaidMhAMkL5J9GvAfjYfsWg1bypLxUmbeMAQ5E",
  "key31": "P7rHDsGqUmYwpBumAAGrLsPCoofNKh2y7dxYMcDbdpA766PGmNkEz2urXKdJCbY1cwGkRjxT73yNfh8MVzHVyhu",
  "key32": "2kYcumtZtuWHBp3La46t3NfcxbatXecT1Pj2P1eSmu8y6LWMKe5WCcHwUi7YBEjQAGQQV7D5KSBixtwRPY2DuA6W",
  "key33": "5CdN8fbVNL4Bb3WYvaTSGf2nMRLRJWLPEx4NgZtYrxpXDHXFA6LDxEArtSQwSFtwswWUYv1g14th2UwBhpRqZTh2",
  "key34": "FmrqEqJLXGRWSKF8EUgPhVNZQSizR3f4GZWaZY3SseJKXMBAVnWmLGeq7VpHL3zejECiQ1k4MqLY5jmy9oQ7wrQ",
  "key35": "4UkpZK92P6VrQCMUtpn3sp8Sqrz9sFU8zfRrP2ghbh9QUjhffnRfSW9CYLzi5xE9E6qPJDaD6AR9wmtP62pKsxfY",
  "key36": "36MsU3kiTrQnS6jcYsf8rW2up8uKWdqFbozHw17YVDhijEThykxrqye5dKSEUYTm7nzcKRcMDDK4wfRVHkFBn8Aw",
  "key37": "3252H9P6k55r8NQLF3N6h5cAL7ypCSFwX3LYTNupNozCiz72rG9Ck6yoydPzAAkbmP7imJ8paAMxAcq8Cwx5uQFR",
  "key38": "4HE9YcXMNomAj2oQjBBzTC6B1fWjPHXQSm89svgkHCksFeqW9U7bAujGtjQ8bqKku9WiHqerWGqjcV6weYw38Mwd",
  "key39": "5ei2PRXj62k2vBFsvTRqmCaGiy8cBquvaP4sbyKNyMMvjqHXvjhq7g4jyn3SgsbV2EjjiYb99zHJq49dq2gaKQk",
  "key40": "4uS87nZ9y1ANfDKfH7Q6SNJT2uofpsttr1RqsFaNX8X27UkHNejhrc47frFByDMnpMtTdnaQn3dSizNrXyKdhq2G",
  "key41": "4mhntsAbdYFD6WmJDFYCqUTtKox3wMMm2qYDRQGkwCVU4T8EJxQ3CfaHqof5vRfWu7vsuvr3pTC4fVYubLVwZiDK",
  "key42": "3zVy7ANQmsDh3sLa1AuDnkgMEa4vCwEDoA3bpV2ZcmdsN5aUbt9dCm5rpHTZR5SF4fv7CgTUuHrA1zm4AoPtDMEV",
  "key43": "6LccQRp1AyCPQSsHi9LGygTLPcbGxLXzhCrKUmkX36aGTLU4YyPNj2TEa4AdiN6mcp2YQpoFkJ8tgiSGkmQuDUS",
  "key44": "UikxLgX5YJ771njn4fXmoZMGMsUyAqTk5sgaa9hqxHfzii5HK3AFHfyGccDEeynm9UXePBkA4vqwXEK3HaXt7F8",
  "key45": "3eUucFPhrMDrCBjfEQ8q2q9FAYCXvF1HgXbs5n1Xjh9h9vAqxXxxXmztukb78TUBPCVpcCa1wDer5d1Zu2S9wWsA",
  "key46": "38gkENbgh7XwudS2a7Xqv2XZj5j3WUPseyyQ2CYJTZJMVme9i4pwekUWF4qFJCRdKrgkMqE1XkcCgUWrUSHHtWY",
  "key47": "3D8gGEaaP4e2G4iaRAmkHftCLtwKb65LL6qAV3M9we48VTBWX9m57oeJhCJjXtw8X8LpLwkGCNiJhaTcVeUQYq6N",
  "key48": "4pDyFhq2aiChwYz7nnLSfXP7qzcvFKMnePMVmf5chbmgFigufJYzE2CGbmz47RkoL4qAZoyFKuphUycCagSQH3qM"
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
