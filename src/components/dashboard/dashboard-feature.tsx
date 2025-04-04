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
    "3fQXc4SB7UCEjewdRKb1Ym9ATqFKMh25hXxyXdQYu83jPE4yubct3MSpUV37cPnjPQuKeascKrBR5TXw617QFgU6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h3kV8iFaxHcsn6YnhamQPdRSZVVD3B9No2N8MwRJ1yYLaRk3JQFSMQ6ttZgVvueeQgAYRtf1MyjtZRvnRmG2KDA",
  "key1": "za78AHi3v4CaaraCmte2a972xgzQ8jFm7NuK7pUM3PntZpDDa16g34tZ9hgZZq1CoC9cmkCBD1AE9nhUTBgbGCY",
  "key2": "5uDBYz3sME1kvVp5xu2YEPchfadn2jF5ambQa3GB5MFuGQCM7gFXknThKGe6d6PQHJBa2rdSaUDxWpo3S88oJDo7",
  "key3": "39GaZn6PrqQ3SSyyot93d5jUM8zojfh1oPG6D9fahqwZWfuGG7CLr52o2yzrPJZug69JT1fQQcK8w1LeXwL8UZtY",
  "key4": "5uXayZyQJewS8fd7JzQbZNuh21a4wYv8eSBqsB1cxxj5jYzrxbHZifEZph2KrAvbRbY9XHFQQB7Vm3CKb7ehCh8r",
  "key5": "qUbFsAm1YnUDZEYEAkQ84CycBFFM2JK25fXicKks5Lw8mjm9pzfRc4a2v5qzL5ScCcwekKsggQnPvZMCUtvuumL",
  "key6": "2TxFYGinMfxvzBBFywNJawQtWVCDVNMWinwGBjHsSYdjd26wPEyLR3ZG8CKdVcGZuunnM5q9uqC9Abvztshj9RsJ",
  "key7": "2hPedaznMbm6EXLUoedPga1FnenxH8fMMkJ12D6thodu7s1K39WqbszDDwvYvNjAYL3zG6oNgQbzFGuRSBnEH3k5",
  "key8": "5vFzBYWrqN3LWbLyhLpcEzfX1i1REYMFL7VcBDwERxMzeirDM7jDg3zZvaUvJxPV7NB4LeCMFSh9iWY31GdFyx7p",
  "key9": "GvaRq4b7MioXEfdWUqsumkh7qmpaQNHMUUntmyjAnJMRBRbFpW6KNRkkm7YQyEF9QHqR5tWoVR6xb8d9YccDpF6",
  "key10": "5V9ZMQn4uupCjzB32X6KFPgPAWAT4ghvii7Q2jNn3cUHSvdHzdbn1RbaqinpdKZ3KUKAvw2p7rQVyMGib3hBWzY",
  "key11": "mGH5Ru34nKHira9dQMu7xDauQ7Sjshj5LvP2TTA86e81qQwJFofpccqcUMbnVPEGPmLHvGijSYvidUL4PywLDks",
  "key12": "2jbzUMdnHJe3eSrQG6e9PJUh5M6YrQPd8MUG6ghyEhMYHTYcLHwd819dHoB5civBtCrbehkru6FgSSkdAuB4Y6As",
  "key13": "5DfS28sos923p5hv36u6TDAoGca9tQTqcHKBNbuPQn5uyWD2SvVWPHDm4G7D7LCYqYDLHhXqqS5tM9StHbqvBB5S",
  "key14": "5Gfzgy8gHB16LCNBy9ud8LbnmVNgCnhUiSkpgyuEYjbMTMb2N2LG9ZaRtmdiHVN35a1JbbuVPeLki8V2UhGtRYq5",
  "key15": "3fUp4P1aJt3NtoVGj39M8wwGGt9yNMRqU52Acet3x88VPWWpHikotYzNJE6iPmzwaVE749zdbjJnXWGLedso8nz1",
  "key16": "4HttqvoDTg2yy2QnEN3hEogm1TgybsRjBfYE8k57iGcHJmBxHasRUo6eA7AXMPFCyg3JBZejyfvR519yAcoj9QfJ",
  "key17": "4viPnm9kzM34HgqLenMVDQ5v3SAy1An4LmwwU4BLuAgPyiDgKSw5dm7Jf6Nd2ctXZCDVxfGLdMtV9Q4Fz7v1Y5hE",
  "key18": "VK55WCitoUvq3q7UCaVzLeV6iZVx3j8HsH3Am37YLLVsvcLK5aDWgb9tVPTeyUzCdSHV9jzZZ14AU8kUqtV1rKQ",
  "key19": "5dVLyS3gxzcjZcV7tF9GuFmDT5xxpKzYPBJudioTAzvayhvtPt8BkhGhdUjCBpZTBwnL5ZbHPaPkhQEEmhjmuWmP",
  "key20": "5QCmA3mB7AnarkWf19cnGcpDZBfBM38ENXGZx2e7Xyvnc7EanMAyxDzFRvZu9YUeiHBrhZ4nDonqREzr9WtJA5BH",
  "key21": "vVy2UVqjdPNJm5D2uS4DL2D74YLGGYuyey9d9cCM8j67qnESEeH3cLYPv4NL9aR78G5McECKumvg9CAxFeakGLa",
  "key22": "2SxHE2SprhaMZdw4spMAAZRBXL2KaeVw8kBDSnZZQaGnNuFeSag9ktchv2v2W1zsDij7Wvu9uq4gWLJsvnwNF1wF",
  "key23": "Tqrfnxm5t4ZMn1YvDgqumqo9xpxzTsKiCWJahmXaoju3aZNacBjYPhahhSNH9273Cyh9VLNxSQTRV1ZFy73znD8",
  "key24": "66jJbM5WZpmfWLtuCNwYREqpnf1YaDkjvGC7pv43exHff48fgpZHvTA4Dkcuf4CQmLcd8N2i7eZ1FKLxU1w6neGq"
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
