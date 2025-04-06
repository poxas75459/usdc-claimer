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
    "5JabdnZCnpyfrH8CofSM4fDxyzxJTVrnuNcQTcJFWZwhTUzcCdc3Kt1v66uUwNeTa7krfYeqKfCFEG5W3rbQPAhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YoxfPK8ePP3mtNoE8VHo5SmDFn8jg5rk4Fx6WzfeTZRRZEDp8jQnHeUs6iT2rSKpRSqfzoWqwuA4HtmmWxjftKP",
  "key1": "H6SQTc5tHPPmFcxovh3F3qKZKqUqfZqKBFd47xeqBduZXWPqLTQEfPMd9JqG7q7VNcswXPbZ5ofym8DSMJFXgwF",
  "key2": "55VxnF93CFmdmzPvdEPdakkVyazNcSga5k9R1j2KVcww62qmAr9P8BmPBEb82gWkvrCQfKWjYr7fCVwkdttec3Je",
  "key3": "3X3gzudPsGeeh8Tc6nArnPn13iZbg11qAydCVx7gu5QZii5mcbYEtwbyx8mZVprjaR2eEpE585gg6B4yCUzvQLqY",
  "key4": "4PhJjHLaEt8L8k1mE9Ax7wvMu5XjL1DsVxKTv5ryDHSm81rFPG4u81hKfduQFoHptRjnwpX5gk3h2eny8B4sWR3L",
  "key5": "4TFop6AyfdaETFZMKVzRKbUNpSQL3nX5rf3xp3rzRt51d7fx541AR4oFfbjfMoV29XwrtpF2Jh9933P1V9Rqthsm",
  "key6": "3qhD9cVLvvcgY8A2uU7BYQZhtsUDachDFePrMvQGajTGXvf6jWE2S8Le1vNhf3QieCpVDNFY8ouYGgZGztpX7WNQ",
  "key7": "VvqJBaHDNKmGEQTtpHqjmuGS5oRaMEHPABoJhJyW1KBhsrsbYzdfzeC4aNYn3ZXP8kQzbn5GiPCW4FHxiEVcsmD",
  "key8": "4rk3sJLYEqUyu2nJh2UpE394kqr5ZSj8zZpyu3zuPsawaf3CFqpYvPT2pPB7jhKLK5KxTTbrYiojhraKxk9iV3Ag",
  "key9": "4gz3ShVVgTtae593ru6ccyoa5qCYNaTc5CfGLz9sDTiKBo9s9K9sMe11mmcACMedPTQ92eqfWCNR3xKP3J9moont",
  "key10": "3xXK33uQTQ7twJMkTXEPmxmz8yZvHr6cdwwJ7DHquAJNwcigJwmgyPzrXiCtP3PCusrTNzy7WNUwvqLdEnCJhuJQ",
  "key11": "5vCrRZByX39MiThJkgLQGcXtBjQCirKfWZhLDKVNwao44M2D84Mfnq77iRVcsXAYrdWX4F5Yvze4jvgSYKZFAzsY",
  "key12": "4ZAaKx5RVJoK5uKNZkWFJuLijcw2wdE5bZGrzKHwyKgqrPnvmJyY4sus1LUbxyH5Dk8SrtT4aGXnwPtCYFoySarA",
  "key13": "278zaoBiWDxc7qRJKWUE8oPhMCny8jLQaQTCXfEnMWcGDxpUaT4CjGJpLUDNXMfWbnuRvL6MjA9a2NW47ei5VzJv",
  "key14": "44Qj55eETAwEtHXPtH2nt2hFYANYrQ8YWGyFtEo36Zi2ZDEj8DgJeVwrskCZeSHNCqa4k98rbV2YQ7yqy7wENjrb",
  "key15": "3DtgW1CB3f6dymyKLjfrpRrj9NKjsrvcmcviuyMJHNYjwVZ8rCiML36HyeGa4nKG6gMTcpEhpUSWcbVSzMBi4asE",
  "key16": "3D1gJqs6v3T2GBZjmuPVh2cxWw4cQV914syAFq29smXEczQdpHStrARY2DgsunHqwNwNQ2XAEG2sfVsQKc4TPhor",
  "key17": "5CMLszHmnZkWrTxGmv2AWpiENkjP48zNXYpckRBNubp6Hem12HZEq8XoGbvMoVnJrsEv8Ji69Tr4BRn725FTDbgd",
  "key18": "4736CpjH1Wgyz3ictxJGUCkGFxp8pYydfAEswbrGx5bEUU8YgeaZiqjrUwRb82wEDacbcshqWPiWwiFsRq6zDZcQ",
  "key19": "ZXrjdHUoyg5xMSRScduhvvNyCq9Rr7mrjwAJVFh9ATHhgC95n9QQf3BDJgXbhigVhcbdiUgWAvKeGMA4h2teDag",
  "key20": "599F5Cei48pjrgPHgK3kLYrmupaiRpN3Zifq15zQPPfmeb64gJpW5wFKTPVNTsa97kxL9f1DFM52r6Yxdc9pTp6",
  "key21": "q7wb45QUcj2d2a4ackHGRAiYRG1xzZvepDCT9CasuZwUg3b3ft3xWxPsgEV3ogBYSxG3Xzhys5VbsZeFdawH79L",
  "key22": "4whJ73Cjk62YG3d9VXhjvXC2CNkmdLtspVLHjeVZYgh2fAk6UZFwQpAMKBRi9dbHqiHG8nV65zZ8RNDvP6woVqZT",
  "key23": "2q4atv4JeY8qxSQaJXqkANbBr7Bru6779WPRG8R9maCCn6bkgrfFXLCVMFP2CdtoQMF19TtniouaMC4NuXFjtQu",
  "key24": "38MvNAtXWZbr3KMoWJrRwocEejbKBRmLg8bdVje7N8fHXumB9L7y3h6NqivBbz3xAynU5Gb2Fm1GGmbCyVovuech",
  "key25": "tRmD7ehnGubX7zgky1o1ZBxvsX2wgWqbtfWrAxfe7F36pd3eHX1J8JdtwrJK9YFuXbURpZLiVi6gNr5sQG46MPc",
  "key26": "5ZuEYWsaU5ee6ccMzTBk8N8PoQw7CmaGeVDn4k3LcSW25vySb4hcvukCSiyf3oB4wcG6YRdbWSkbWz8vzZ1qrvs3",
  "key27": "51K8sspuxd2h81nKoeiiGdUXGJzmXfLeJVvJtFaWU9tZhPUnMeFL2JaPGByp5hY6KkZdBdH6gHf8LhjCK48DNyeU",
  "key28": "3G4NTy6TUD5LxAsUQyXc8eHvJhouQiqNDPHdyMQTsvSkaD93f851iTYAuGSNWmuoeEnGu6LzhVcbtz9j4mW491ST",
  "key29": "dDbf7uLPJfzp5SihutAY9iAmfUzemHpP7bPoT1yTaC74yv4c8dt6brsD3ZgHbykZvGpoy9bDmLYHLSJJHs15kEF",
  "key30": "4PXQGE7gPotmek7nSvZDDC2nxoto3zWH2PbrnVAVaRvJsiw76WPmJ2J6AHLtiQbNWTR4ADadRvbLBrwnVNv7UsoV",
  "key31": "5hinjdGXAadjpDtdvjZT2ZNb9fshQ85edsTieGnoDrveLsx4Q4ThSyT4qiu1aHnETMZTZuemeDTHMZdTWxbgduoP",
  "key32": "5gcWPA2oL8uN6HarfzizEwV7MKuYBn4AZiPyecGfHWryupYYPdNeeucRMux87TVA6YNnyEyDzuybS86o1prXKox6",
  "key33": "3RefjVbikC1258uKs7DwpLUjU8RftMHKoy1xSBmntyQDdZqUBz5tbTxgD648u4EvHJT5j5rU7sMpyTjpiJnyv8jn",
  "key34": "kCRwSg4b6b5DpsBcrE3Qb4cqWzFu3U1qhiL9xLqFCwD4NRf8jAyPU3En69L86Rza8MdCVwqfhW7kv6c41va77EN",
  "key35": "5KmEetUkZU4qYJNdUtejHpkJjUUMj4tSGhya8sg8ghdbXMQ2VJcqb39hvXTvWRwhcJDXbCCojQanpFz4X7gvZPkZ",
  "key36": "3uuCno3iAQFxsBquHqjWs5ggrB9YxgvEsETcWtf5HG2mhasMQ3Dn5KuMu1YB85fuNBvt86xSY1hiBtmXpzPCi8PM",
  "key37": "uCMJ6EfXCtCXy3AZTxeGvQU8ptm1GX7nbsWdgukiJrnEZVH39sH4tGgJ46gc8cHtszSji8Kw5p6RAczcKExAmmx",
  "key38": "2zmkyZxXP5jUksPzmG7SuMdqxXzzh4E1JSsc3yJSZKST3kbKtbAm8Z6YiyCD1QvCpic8amrNBj8qLtXyEbjt6VHc",
  "key39": "pGqG8zye1Z2yKu5XzPyhfYvvFY3CdqeJxbMuYAKbkM4ejHvv6SfvmokXriYmwfi6yQ3T5wR9FhXutEEN229LVUY",
  "key40": "5xThhNXxqV3xxEujsruZ8NFGFKDABcxhuEGu9DAjvKhuy236RQNrqD2dqN2Y5hCYmS23kM6q6BxoPpThmvwkELgM"
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
