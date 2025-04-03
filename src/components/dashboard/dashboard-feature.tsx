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
    "5YQZwkXeWW32aSQAUK2ZPZHVAhuURbYUj7vvJSbZ72StVt1AmUpet5c9LB5J2rKmDhNbfFXKZkTaQNeX7jeERkuD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bnXkGDKJS6Be4CWgLivEBqAUMa2BNZibJyF5i5LqJ4swpkW6Y3VdsesAqbPwnD95oGFgdA9U4bC1FJiNnRxRa5J",
  "key1": "4b19fKCBRYogDJdMaujLSogrCXfWiHit2r79t6BD8PVFT3J1G2nXFixtXrY477iZ2Qz2NmmaSzLsGf2Up2PatvRa",
  "key2": "3Xu3Mei26ppyDpcC6cSzm2ZUZS4rM9cG9bKiBh8McU3ywFnpTgeXPWGKDp8F9GD6VVKxpuVsBcY5FJFDWceTfLav",
  "key3": "B3gDV8L7UDx8NBmHiyVDVNUeWHGafrURM7NXJSvou8ouf4Q7VsPAvhQJMDN4R79JzXPu2ZBBdEzXCk4rTsiEAXT",
  "key4": "2tu2v1r89SCQxNQPp4pmG3apyfD3TnSER6LN7xMHhsxfWArdDsUp4Dqed878AFozo5GESBUiC6Fv1smHdn4sF5qU",
  "key5": "4quFriTR8VLs4tzPW4iJC1FLXTJmEmSiTLBtm277gr9r4fFQ77sZcjKqAA23EAG72PhC7o854SieCYdynAzyPuYG",
  "key6": "4st5mePQVBi2L8wjqLqzWXUCqBPiDvy7bvvwiz13aUBsSj4N8QJ28n6V924MZMD3TqKY2sMHV1rTgs16aBywNYRe",
  "key7": "3P8DhavXKW1GRR8hsSQYfaNHkJPtrn8eUwAVvcJ1HmWEUxoFnu3k1mCYaF7qsssRtXxhtDKsbaZsBRfUZSBxWkLz",
  "key8": "5MheuHz82AnLD3kmPp7ystTsxGFnip88b4rHj13K9CbXs6zuS5L5zRk2Ajvbqobau44u9bg2QeqwEiNbzonHC886",
  "key9": "jrHJvWrKDzEQL9GGDspF42CsqspxNghQNktFRzZW3hGhBNidgoN5XgyCyG6WS9Za6R2DGiAYdvqwAMFZTynFTFb",
  "key10": "3MvruGy7N1sAc84dJHxcheQ3hoAkPDaL1vvbB2zYEqkYkgXtZ3cG6ZD87RgnNwNqAZWwmeCfiFMNbTTCh4KkGj2p",
  "key11": "miEJvcH79UAcfNDPm2Rg3iz8BetSoAUkV9xqPcjuUPhRxVHETdr66EfULAjSH2m4kfjhFXNEfoY2wKMfg7EGpHi",
  "key12": "5xWbQBvtcb1WbYyErWnwTmABt6obXJWfkoJ3md6bChKJtcrxrkdhZ7NXag5DW5G8CGp7ZN3kk9vt3e3wX1h6SPiS",
  "key13": "3PtCjNBgehtVNdf58GRwaJWt6Wsa4NXgNUrC5g6GewuTWERXtVyMv3Qf2b3sxb7wfvCYn2EYCEh5XrqtCEiyT42m",
  "key14": "4pKtkZuhPnj5ST8H86tBPHwNn7KRDEoRYt4mmMb1ewSqQi31tQ7fBxkeAEeJxMWvVHyLMHvFWfV6ctJXTtTrRguZ",
  "key15": "3dsUuHsZ9WmtMTRjn2b6xmZpYPbVCgKJhtHX38HQ6qrbrS3KRZwV44L2wtPrHdh5mJ7MxccS3oBFxpnqV2VNy35w",
  "key16": "TYTRzrPBw78LT2fsmfgVi9F1sK2L1YpHG7mBvm4tqHaCLey4vnW5dWGwVXtBm4GxVfrGj5oyFn5R6n9zyecVeLg",
  "key17": "4pVcvEQ7o1AzLPt6wqDsL44QmymYUbLabmWCAPYNnVSjCBWs2poAYZUNf36CgQQmEGSJ4aoxvMAaVnJ557BRkRTj",
  "key18": "59xaXgfqzeE9R35dwhfFADZsyHGjHL5PCjJdRAshuwDKFFTbMKK6Gz5PSEavzsRhDtRSPXLpLx5HTcMoLx9Ppo1U",
  "key19": "MVqbobyqsiXoJe6zhnuw8fMCtPkzHKvvXe4sCzBX2fnEuwj7ZVdoc6MUSCEfjLrXSvoq955FR4u6uy1arGKmPxy",
  "key20": "2NkFkqjxsXN7gXwFqFBjzzqmPfm9J1uF7jk5dxu4gwMeQSsiV87yGkNEDRKooSmG6DisA6kprDFz4NSWdhaeG2fS",
  "key21": "5odFjmpw9BHc65YwZ6qKZbNAt98We5c4ufSjgNvetZcDaSqhvzhrakSq63sHhWdkbuZPigVvVXoMuDUjsd7eZvTv",
  "key22": "3ww2ipcgKMC5mzdLnGYUSNR7WYX5W2SRaKhmCm5vB9HCaskyqvqqbRgJJJCbQYKpgbXeEiPZtuWsMJheguucBWGm",
  "key23": "37u9uZHaAgMJHf8tZNLyctPufAwXZdANvggFJPR5Hg9uXUuk3uMkjnu3KuPvkFEcEwGNhsZtjr6AjSiK1twZDz8V",
  "key24": "5hkD1faTnVy92QXrhfcyq26DQcaf8dF8BQy65kiz9aXomxnf5BKTJ8UfA43m2LnbkoLtUaqWLp9iDKEWxt8Vqssm",
  "key25": "5HLEfVgrPmRSip7uZQZ7fPX64m7tFhQibJFHxCNQrcAZ4NFSrNRRf7MGYoMVC4aBrFhfuHsiCrr7fyBe6YX79fvC",
  "key26": "3ZN7gETKgShM2S42uXt4g1ynhGmGNQwM6bEBWyJHdYDE9oKNk7WF76XhB2oUYaav6PQME7haUUkxAXHhNkbvvL1v",
  "key27": "ERLNXuU6SRV68rMsPq8BfSqNcno1SSLjTGYNNXbKxWco3hWhj3KVvJ9T1feNEptfHybS5aBJxk1BktBREZ4FuTU",
  "key28": "2RDDAK2xdovzvpA6FkoUAZGKU4c3DYMVwoqCzCMMJbZqyHkwmCDCZjQ5ub7C3YzwkmrGnDucUXRNuuis9mNeYoJL",
  "key29": "ZnBJm2gkAMFG6Xenv79wZEmZipbN3gBQA36jVrGmnEpJ346THG3og2dy3PsaXEcpSqRdDPb94AaZKGhLWig2Cqr",
  "key30": "2dMgN2h63CWf9w5UobpeGYQQPnHGH4W9s7bc9BxX8gsgweBsoGNThmNMmUjRQiSYQYCKfoeqEtG7RAKU2MxnUydM",
  "key31": "5xMKB8tfnFTxNiMxDt1huFu7MzFKtzk7dkXpBbCL2P228WwTWKBD16eRwrJn6rDj7MzjfR4BGAfE4LHRvho3ND2U",
  "key32": "3QvdPUtq5D6irBdfcKsmdWzw5wxVAtbuaih1EF6w3nZz43uPdX5rEZB9uj1pQECe1b81UeNvXQJQhAi6siwTa9a",
  "key33": "2ffPzCWEjQD8qhf9CjoPeWHYTcT89QpbBJiRfk6rUv1beKPqigaTwqEascDT4RnxwXsZp7WVab255YBtMDFzX63b",
  "key34": "64KoJGyQiThhuVQMtkq7vsB24CPKZ9hPRnW9PB1LW51NU6CgHiPnWt8i37ZWRotoFjDfR7sdmMq51pkEovPwfAMP",
  "key35": "2JYW16JMZ4QEPMb524MXR4SmLFGFKrdRjsJm2QuYDGmdHq7nrucnGvfpzp4sbk8LDQkgP3REjMgejSt4iYMbNQvZ",
  "key36": "j6Md573hhYPNDBrravu7kmhFKDKe1qnHgaawd9evNQKW4QhRQcCPoAEbJezbVS8QTAPFnJYXpsFMkNXQh2bXAHL",
  "key37": "VwkdwUyJd9LvbXE8TqFeLkB9AVCDMCMik22FRrFS3gH7oZBxE4NSADdNny33Vwe9x6mnkK5ZdfpSfruJHFvWJMZ",
  "key38": "BrMpqcxKMJgsjY6tjEjug31iHRxMpsv1XdeCAwxu65qWMshjWjowG27VaEPPXWG5LBfdNhDJDLddMeVkRC2ZY5h",
  "key39": "5k5r3u9ab6YtoxHdQSXaze82YkkHNceh6EHW6b7kcTRMonihmGS36Rocrvu8Qk6EHXcX6q4pQ4k9KkEQRga83Ncc",
  "key40": "3Ufrj6pQE2i8PNJtVmyugPJBmPWG3bivr9ibg7PncJ8FAPsJoTsPbzQDwrt5aT6mXxqzhSvSLYiY4thJuESoriRi",
  "key41": "3BHF4ikRx2KNtbc4fo6QnLSK9SqLsoW76CiAkpe3o8ADZ3wJei2ULqGZThgrkkHnTW4jkYHKZCcKxErXkS96S4si",
  "key42": "7ncHzpT6U4Da5SmEXxo8fsqhgmnrvvQAYbczjHvCZLHozEBUW6QWeF5JCPaDp72E7JaroQPsY4rhgtoYerA72Sn",
  "key43": "3Q8HafckcZ3kGQ5TKMeFLoZ1mTGgR3tumoejTTvsvFkmSFQ47w4W1YFB8tqMGCwdPgS9kLdiu8PGCxeVzsBd979X",
  "key44": "5h3PBPGQZcrZuLdjLVDqT7LDGYN73BVYvXwQWuS4kMXKTCkHh2G3Dq3ykuvfZ5FkcYabXpCLXzvYApxNLpTkQJ9m",
  "key45": "5imnp9adsnw3K7VeirnSNfAAAzKHjvfvSAGmnBDYKSioRPBJHGj77QyFr2YQysoDgZG4hvNrVAU1rQ5yL6DCy7qr"
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
