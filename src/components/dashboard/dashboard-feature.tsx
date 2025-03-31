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
    "YcDPv867gG3GsTDXLKJYp9WEjjaNn766qWiw1NonDdo6BtwFzdoR6mo7AeB2pE4rUew4BZWeqAy2Y3Uo3sdx5aA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dreTbuv8bZZin8Nyjx4R36r1nFRaoqM7EtQPe7thM4fAWf2rVn7JooNHSTnAiSoKR7pNao7FiDe6eEvZcifuNJo",
  "key1": "2zTKK1JbPwujnrths7KbP5QfMqSULBatfoM9JZBg2cHLKLRTFeVfwndRCx5JeN4Ho1ekoyU2T2uU8pirUYiJ2Xn2",
  "key2": "55MNna4XmBRt5KTd3FbzDqW2mLMHz2AQG1vBA3yni5zZDPyN2x1FQ6RuvJE7j8Sh7ueeF1BWUuapewPYCLRCsJPJ",
  "key3": "pcMhCugTEoXvWzK1AQ6HMjsGPuFFUh1bT76wkauRXeEaBevvquHrpTh4Fackbpn2s98RcuD1iUrEuBWBxLnb3sY",
  "key4": "5PdPQJfQbCjVnik6aMtYrcxFyBS4C7cvSGQsU2ty4faM196VQUkuL15rN3EyzQ5bnVHvdQ3LTTvYaVTiiVnDdfGD",
  "key5": "zfUkXB2D2ASwNFPCo6Yr43TziGWLgaeYjREAYhGYpd1E8hgaSx97t9Ar7rv5h71d46aPnThVdZtSpe2oQxiFVUB",
  "key6": "2ktSSGP5zTzjFtWskoymXw3e3Vyb972mTQhn3vfM6gf67NGJ58XsRuaAsp6L7gdfDFjK7mUoSXyWB4qj7yDYMcwu",
  "key7": "Nk744SHgchadQFHnNLdPXjXz4ytvhMTJ6zcAVpgJ2r7t4s6js9MFchmjtrXA4reqCUJunJNN2C8ZfRSxeR4YfDg",
  "key8": "5TcRUWJZxSUfijjT9sox4dFvUEe4aR6787riFT9iCmH3mnJm8gZQsj64gQbYFTrgoBtH6JPuTEpp9CnBCaF9wABk",
  "key9": "4kMksi1oZZyWQnDC4MNqCi6sZKY1KzTjAoDNvLYphgDC8oHxtkEC5Ao1DCvUf7Cipf5krRfodByE8m2hshz7iqkh",
  "key10": "4mnmuJYXVbMY3ntga9yUncgmLZ6fZZ4xvgBCAt7nzUw65H5iYTA39QsirRNgDzdjZ5vN2AxtCHPWTycQBvHtP4pz",
  "key11": "4xnGHK8wvF2JM7tiBhRTKbWHCm2ZcAsTBeRUXTaCK3FtRWG4YyqjGJE1TKNWoGTWqcY1bTqjA7JpZ7hzsBRJTFQj",
  "key12": "4N2G5Ug7YQaMFeCMBHvutNBXNKspiM485m1H2ohakgSa11aUEdwMNQV3ZKFaykRfagtpCtUxni2euukWj7Af9HPa",
  "key13": "3MeLJY4fcKLyHvinsZaQB7ciwCeyUgFFD9H8cSJnomW4HBX9XuXx22QoUsCTRn7rKB7Rf7ZJWxdQynWaTzD89bbJ",
  "key14": "onXDMuuUP4C8E9gZWCU4xM97qYnyiAi9gC6nxfQJgeg3g437hPagheAAUMBkz3UVxbAbYLduNPxXLigXnuwkRuL",
  "key15": "NRZA4ZDcR3SM8QFKtERpLZW7YqoKyc2Yi1gaknjfPTrCtCZmkr3eP7Di3FfcVuXc18BCQRCzgVoR4wNekwtnUA9",
  "key16": "2gH58qgM8oBqwxsST6v9D99FXEXS9HfMJJDmFLKq1M2q94auq5e7tnQM6Lfn9MqVFE6UL8zA99cVbKHTAnDgUfrv",
  "key17": "3dSRPF4uRkhApDde6fR6in9dGJMwysdBzVVX6URGqgF44z9zFySo81th2rTZzpXHDxXm7Jf8xacFCijQU78GgwU8",
  "key18": "Z6PNNkF5yVEVzGGtHgjrj9acqgsQ88MsX84UbUx7azUu8MwdLUr62ZXTZqom2WdsDUoNUUezESWPr53uLKcXe3p",
  "key19": "YbdmSRrNEgKsjZG3Njmu3BoqoNZRtUcARFtXiY413Y6CyZZ7k1wo1tkcr8eFk4AGGky9pSVotyTWiEx5nEowqTB",
  "key20": "LfcXNE2HZkpw7p7ZyzJJNzeWCEfzekyJjHrCRskzw94xNnqEYY4Jp8zm4qGbWUVs1hRvb54KzUMj8qUG6DSKWMY",
  "key21": "2bj7owYFWPXnbVWyKUt61SEvv62iCnroTPnQ9s1JvCiwZdZ8dQYQYNAJzwEevhPnU6XAFioyV1YeowsxtXr1s4gP",
  "key22": "4hnGKhhq5ZeTjHzEAXiZiDhG1ccraMzYUYYGHZWpzziRRoaxMQrFWzVqBQ3VrBdc6d6iHDK2Rm3jR3ygQQbNgA9P",
  "key23": "2MJ3Lv2ArCh7tNg9UN5MwLoaPZew1N1XfmZVSf5QjX7jWrtfrCCQWDLkSZWBXBFv2VZCHGx6cyKuPFRnjG1RNKxH",
  "key24": "3iJ2UbRPAzRvLb4bXAK1rWghyUAGDxUtxe9TSfTYmnJxsiZTzKC9pyrNWv2as9f4dYZQMHNRWU4iDLVdeAaWkr5M",
  "key25": "czwU6P9vKibEWwmAHSCd8Dk9bNbMGhvg1u2mu3o8wzJ2JSbZu7QYw1QemuoePSE5o6ARD1tfRy3dehqcNvapq1r",
  "key26": "53QeSaDUs51181XPa36ap3M83gSmVSsjZ76DYo62jyvP2PEMfDLZcXkiv3oRgsuK1BLmQN17SgMniTb5Q8mxgtJL",
  "key27": "5gb7pKJVbEubgjx6C8kXnVPRb6hYLM6uJVUJ65DFk1EjTcJmcLzTx8zNYzKTXd8kJK9a5M4VJ4uXY33bnMAx7vxD",
  "key28": "4BxhUxwL3y3Mh4ATTavi5siUFpV9MV4Zij2xNZcHjifHAxKiyAevdB7A36yXdTfcp2CUK2So3zAHm1SK88Hnigi8",
  "key29": "5J2txUFx5vTEHWTQ5XereLfvYALBtsztxyFVBJr7T3KJLyXQ6Ej3TbALKfzsy6EnhHUWU2vUfrX5szvGAbvPh3DH",
  "key30": "2idkXsDA3Mnurae8fYLnVMPTNqSkXBfqb9C796oJZnXo77uACyAUJYXma3ePv1PmD9VWRuX14s1eyMeF46pFAR8Y"
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
