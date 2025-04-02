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
    "kcFRQ2mzVEnRfh2HUn8CNvEBPr7UGQ5NoM3N49md4ddtZev7RT7ePpHKf3eVzHVN6YrkSjRejqDdshxv5xjbreR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W2ZLmPKZpJe9uS5wx3DaMaC2q9Ws7fQ9HWirPMb6PBzRmKLcDkuxQAKmipjcUV3AMSNQmuSYtY1z5hb92ooqSSB",
  "key1": "5MTHX86yaxZQ8YeEwN3ZmFBt42XiDqF9R8ftzqzxH5x3Sd3e9FsFDcS8Tq1isvVquUDa62MkCmRK3nDXxgkSx2u3",
  "key2": "4CHXvxL217RomkALsVPfmanhhLKUQWmUXv8K9PP6Y9kpPpcahQbNM3NcHvkVpmcDFzEuWF9TZcaL2qi5oar5d3JV",
  "key3": "2DPNAeB3fvLSTZ4oRUbTJBN6cfUcsaj1JfK8pgSC7cRCYuT5SWULVFYaQrUndrsv7muNxNLkm9kXMgP4rxsq3kdw",
  "key4": "2ouWxs3fxFyhLdPvV3hpCbvbJNaBcmYXe281sWrRXusUDH1tNERCFzH4yr5oKC9zpcg92DoNFwRHtyiUJk6ugHL4",
  "key5": "5KUuWLf6LRmSt2DEh83KmUF77wjwnaYP5sKSF6cP74EqLo8g6SZZ5i7VKXwdUxmzBUsYpyidygbMfHVERmj5V9t8",
  "key6": "4ZgH6LigdN3m6b2WZJnvcK7FvoJwALjxCjdskqEzbqoUZyfjyvP4iLXqXrfRbapPRzfx4refZJWD6TndoafiKjVU",
  "key7": "3SGXAAVC7TuWG5ZnD13C7CetfK8eCdVAur5MvGJ2EKAGcpkZH4wRCkq3ESYYxi97rELHTjkFtrHNSSdGhb5nsnxu",
  "key8": "2qYNYJd76fjcqxQZE8UcU2gvxAnTNXkjVgav7QYhuVeahp4kmHBu5ndnCpYBczXJT5Ssm8sKZHuCg8cCJryNrCG2",
  "key9": "3MJmCttbBWoA8HFJVY6xvPq9HBVHJDaGNfZfLV4ZQGnYe8StUXCvq5P6PLgHNMhwWTnQQe5Sc1pPkczzyWmpAPrW",
  "key10": "5TMDDsHuGK7PmLHF8uQxdodJ6SwJBBXD9YUdti8EBJ5Jq2SBLN79HaAQ4ZDXpL9znSUsfpbEZgL1eCCEfM6bgPpi",
  "key11": "5AcBSpmBoUv19a5DVBR3wfqMBVXgfLNoC3mpP1NN5XsuBan3tUwSu45Tve4Lh5Q5veNNfqWfKKM1EnyK3SR2KSdN",
  "key12": "3FTTyihKpfpSpmLFGtLhvycS8xser2y6MiifxHmPBAwvYyuoLeHenKFTNGgZvzTJrpR5V2vy5QdPxhvA7HRuTU1V",
  "key13": "nRpFgVE7L5fF6irdzeVQYEfdFVLaYVgZDWVULv1yVbbur1Pgjm1MVZsYGdqH6Dr47sbGEbcK4D5tSkJkJh3xTRe",
  "key14": "4Qg7rPnchZMxBXv5hjdmpZwYSmi8S4nSFFJ22MibRkCaqpgS96Tt7XuZDYq5GVES9poEWwocwVsX5KfT4SXWir2j",
  "key15": "4dFv8zPVZHZvj1tcwpySiHWDuGgYYhatv2a5RrN4HAfWWwtPzoxitQG81e7go1FBMbpXVKDhTXmT6gQ44P5MyFG3",
  "key16": "3QNxJ2AwP74xYz6kcsnJEMB7LgTKmpibc2rADPyMvE5VDgiVUdUCm7teEkiXyLXWLLQ9JCnkKSTuXW9e8RfLkvg6",
  "key17": "2JByoXtNd6uTe2LJU988c9pkdNAtN23YvqsQ5JTy1sKjykWD6yd9H1CYB1EbXK1RkRm2YwVEkTsq2it9yvo7UiFD",
  "key18": "2661YJK12cMRWEjBgHcEyMTeBe9z9yDmJiK7i1dcvkocCmKGq6ww5ZRqZAfgLYw5ZZU4R4omPvQAzaLSe6hyob8s",
  "key19": "4PhDDDLrGzU1gdepW3YTgfYiQy6vFha2NKytX5t3rKbPVdxwdUMVEg9BiyGga7XpGjSkQcMFGBkBXYD137A7g34R",
  "key20": "2NyvH86pcynT5vTSrZ72quZR1Fq8u6PCkzGLtwDRupjijvGC6XFJqoMGBjoLQ2cZqPgQCRrTTF9LQbVq4aNDXZdy",
  "key21": "2urniZDVnKo5MnmhfQSfTGH7Li3qCdriUs6ZStADRrRmBBgHsfRii5sJN8LdWBEy79gLEd8kqZDfu1yDqHZRsjgE",
  "key22": "4ZWvzu6kKmhy6ecLSYgsrjRdmeK6xpbpr4FP75WurrBZcJh7kNJqaJi8XrBkoLaCUUQF31hYvJAHSQQ3m1Y2FNLL",
  "key23": "5fW5uB6exuGQJiYGTiehogvcuA8zNL6aEstDniYc7nZop6AmRhuDZraSMBEWnBoDiQyUfmRn1pAj1nUxe3GNeGeQ",
  "key24": "3FUYTx2QZgDHJLcn3f4SiYRTkVafbNyPH3PskSyNoJw2rcmCQv74ieHQFadVDnZ2v1DzKpcMeD57zMxnsctTU7pj",
  "key25": "66SFjQLqG5ZjcFPiapMz6ojNYEdkZ3QpXAjaD2ZBr5fyxdKPuWjk8XVa3G1sEL6XpfwmEHCGnoq1kNFdQFj6s9X8",
  "key26": "3dFUkM97vjaaBNXzpoag8sc6249nMGtNBHFJeFAh7T3H1sqotdBQR9nASrRTs75G2MbiCdooH5TFLyyERnwoEGZH",
  "key27": "5wGXxHxE36Tv2vAKvqXKGXM9m7Crx7Zy8LbmmAifg3MmgWmkp9uzrR4ZZg994RBQWFrk1XnTYbaKxncrjiHVwCqp",
  "key28": "41VGjmksHvjcECfVeGxtuttjBDt5ApJcj89rWEdyeYEYfNPZXHtfNVuFvkAhDRJvHp8XRKuJg7bNQDmAXzudCt1Q",
  "key29": "2FZmK6oMTdCdQZ76uER6PDchbhGyF1T8q8juJWky2q6nymsiPKeW7hroWxz1tAYvbPzd8FHRdefELRUZzpvbuM9w",
  "key30": "3mTyvzaQhPNSKopi7uPPA5T1nhxyGPQjHXYbJ1aARWvxUGH3fNfqPUyTpzaqBPw4Vu1MCePrNt9ZmCxQjZ7vBN9Z",
  "key31": "61inpmuRZHkviPbMssMqZqStffCCJTVffqfDBhEvvKcBwQWzCG7mPaoaC86ZA8GK9wHwsacXASY6nQTAwEYaZi1v",
  "key32": "2Nk7XEBNUK93DwcZhwgsJDR47EqEi4dmWF7751dV35Lm2Hvr9Lu3DaGiiSvvyBsdbwqEcKPaTkeuuSK9UKXGLGUG",
  "key33": "3Loe9sxmiDeG8FcgBoH2NsvE8e8aXJsofRRfreYRxjD85omcT4kWjYf28hxXq3zLWymTXzeWXP3jqPhtrbDwEmx4",
  "key34": "HFaNMxLR8bfw1BssfPKpkMUHMmqkzqaRwVcZVqaFtX9xY13YeXdw4GHgBTJfCCyiYhwsEUzimGsMV8VKAnmC9G2",
  "key35": "2crVb2Kc2mQhoqAfiXUSUSoUrfcEZM9yxaWZD1LtbXNY4Vx5eTwka7GWmKqPXCiDJSTB4TEhKvcAyqR9xkPsBkkT",
  "key36": "54J1A6AMwPsmwGuwq6b7H4fNXSFgCFaEajbXnhZNer5gsxqVpg3QPh9de79eozo9tToMC8efN35yRVyCBCap1cK7",
  "key37": "28cPE2JrgCJsdZRYLNj2qTdAmSbPDxC8c1Q2W9vNysEzFhysWVUjWFdxksbggHV5QpYdckh12pALwjkKrPpRJduC",
  "key38": "22tsh1Xz5EZaTuQYmVX7DctL9f7Uqv2EWepPbHyUtaHq1vX7ZEfuRVx7tYK9fVPZpTmgMnAsmb1tu9SZaCxTjTGK",
  "key39": "3rcVsaZ9KQFLx73UGqjkQepp4tboeH4D6eGZ4hTqATVvknSakUMNz6NkF3SQ8KJVvrZ9hYAWykmpoYu2zB48rPqk",
  "key40": "212sD9RYE5RTn48nU2rVDhguKabj9LxPe2ouDaj5VosTSBhvpMN45L8MNhwtLMbJw6fUiirp6CNUo8LfRWE8Spuf",
  "key41": "3FRvXA3cUXvwCwKKurDuD6azF4wrufSseo6njJgx2TCQFeoJMoeM7CfHT7HRpuMpLudmQquPPqnbaBHLGwaASm2G",
  "key42": "3i7Fw4EkkV7RiWXn6NZVvnNdDxStMTdhuW8pZePtiZatwBzGM1S8Hup1G33KoCq5dMpUnWExtVxH8eUtgioi5YLA",
  "key43": "3SBaKEccAbJBacPwfpJHzRvH6n1DKFxW7AawSYjbQH57AtnQXRHxo6knKmM6V4xW6dfQN4p2F22xN2fY8u5peN9z",
  "key44": "gjgyjvE7Mqysp1z6JrjUoFpipCzSYEmzHnX3s1MTNAa2UGeTWKuaCDUpkSvqy1xK2SGmTJupvfaASq4vxdnF9uz",
  "key45": "cHtB5h6eCacJLYedN9h5QvNW6eV8DTXMpmBzNH6K7fYGMJqEB7EDmWPyeMmPnePmB2z6HPhjepF9ZbEMvQ3mZQ6"
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
