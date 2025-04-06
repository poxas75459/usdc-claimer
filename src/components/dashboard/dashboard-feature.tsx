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
    "2eB2fAWvTFDLXiVAzPtXMzzX3hhvfmtL7WmZHq9JaMhu2Z8ZVhMnh7Kf5wAZzGtAgjxrp2koL1yivKfEsbpHzGQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ya8dxs9zbCh8X4zUDsngt89QVm3otdpVLNoJ2CptuZbu22KGpvVPk5E4BX13M6ucVtmrXic72DcQ5RGh2mpUJFs",
  "key1": "5zmjmy84VnffX8vmPM3N73JXS7saoWWsiFYrAfSHkVpf7BssJwXHUfQYqLT15ynDvc7r7LSVwTL3yHhXWJn8DZFK",
  "key2": "2HznTfAREnt6EQ43deW9pLC4B3z4625FvPVsSFWtZeaZ3CqgwpsWGMbYqbj52Evk6X4LdUmo7JmzxkP2BX3q3ENe",
  "key3": "5LyVLGiuytYrps6g5EkbyrjfGxA9gd1ubarQKoK8Se1MUgaNSFsLtA74yoXF9gcs2NPybSmoPbr1mvba9VVD67Ln",
  "key4": "5xwp5ewN678x76sWmyVN6AoSTQPu6GCzkKAxU1D4TUgyxNeWUbqSrtXnRyEP5P2dunmZW36h8Tj3tZ5GCo7epDTi",
  "key5": "34B6up7a264ZgZoWfAzdNUFtNzE8DFsCspHNqggSDzaaQy2GDYnbvQGtuTyzM1v4yscGMEFpAfoBzoaEHZKAe4eG",
  "key6": "2DqZnx3WZMkNmmMCi12Bd5vLbdviKAw6eB39dNU8GhyxYc9WhPSgFxGoUQQAbkR8s8BKkgu81V1XJHji8gmNqETK",
  "key7": "3bEXwCokRdR1BiezZKZa3fF9XLRWspnrLRmbbtK7VPUcp1s8tD9jBqqtU2eRAhMg3LANVU4BpLXDPiVNbnaZHBWV",
  "key8": "2GFVHZZeCCHoK76eZFdteEkHCS9QbPcrS72H2h2Vn1Yirpnt1n8VRUqfnhebwhHiQXBtwpzpst99kKsX5kSpo1UE",
  "key9": "5sfu3bYCWM2fR6ryn2dgTu3EEZ4aUCqt8cJXA37UD2ySM59Z8dYYFMwXxB1kiPMZzJMbf5T8zZX5WL788ibAGtQx",
  "key10": "5tjtyN7XhGhW75syefoCvPFYBU7oYmE3wiQg99rjGMDCoZm7kaeCt79VAE3Wfu4iacg6mTiCuy1oke8BLRs57hmn",
  "key11": "4SzuGFgUgAyFCmwjmRAZqj47WhQ69eVT4oamarB2Zz5rCYHUeeHBMyLpia8kr9utnoHfmMnWRTu9MMBrSrgaNwj5",
  "key12": "CrgpmFJgchCRrVFhH3fJmAGbUutiR3bCMzC66sZbeTqShYBqRis17ocpByLA9pAW6aJhGDMxXQqEDkDqQqJjo2i",
  "key13": "3DVY6KAkCx8d87sYNgFYu3YMwEVSvWp1ANbRxm2SKZJsKKeRPELQxS1mMQRP3GRvrUdJha54bQhwUr9VBr1A3qN7",
  "key14": "3BGxcFKkKVTwdHm5ErhtJSEkUeRgMBrtfdfHLQvZPrTFzJGjg45MnMyDyje7M4bLZHCpdbF8ZR2KU7dMVfCHsfqC",
  "key15": "3xFdXr5uFHbAmWCKQzt3KMkvk1V1i37V79xaUeVoCV3srCCzipXY5e5pTyPPJ9fkQ6jKsHhFetp6f1HT1ec1nS3r",
  "key16": "aic97N1jj66jkqpSkrCpEmL8DSwCr1nZWva9esSBXnW7iqm2RHzffErH21rFjokszu5zc1Chnqp6XMbHviCSM9j",
  "key17": "3s56KtyfFDn1NCYv1xFNS7ZNP4kPj4yXq1dQtLsafcQY8p3prNCF3ExfatDyccdytRHQyMhE1ng3HqoSUW6AMnXA",
  "key18": "4NneKgnf5Ka46ux63fJDXaA6XjcyVU63WLw3EjJYzpM86Brg8NX1yAnWqLM9acEYTwJGbEVg28DDCv2TriYivtt6",
  "key19": "2KWiNgAzbhEUQDMBa15JmjkTjRiATtztN41rtdSJDbkae34oKvH67FdZenX4XHH5ZH2EQkkDsvNdFvoQPzw8Lixk",
  "key20": "3T6WHmY8maoGo3hJG8HJeAFCkdUzvoBDVYNLy7mnJkQ7RfHfwM5uXEMVPeNF2DRNetrgsquYfrDUbbgQxrC7rS4Y",
  "key21": "n2nJLyBPFYtViCaKU1V5qbG5kYeFSDpQRfzmMswtmKW44SYidcPpwjLDGR3Ytp5eCVJHrNJa1H22oSUQHikxJmk",
  "key22": "2iGWZiSXhoBnZBrUCh4NhPrTKXfAAXFoPVLMPjfvotAAUtUpRJVrDcfKcZzQcvTXTSmdoRpjroX5XD7se538vyjA",
  "key23": "51pyjeYHoXX47wN3xP5gsRqs2zRV4wSVR5n7bPWRrgALCEDsX2DjoUnKx2uUwY1TGWZn3SQZsXSwLuvAbEznjH6i",
  "key24": "5P8D9QU8D6W1xobCGfS8n6s4cFerSNjY5PJuy13YY69CjcHVHPVt5MY2RbcyLqqUL9dJWpQsDbNuxuApyATo8DMn",
  "key25": "31eVWv6QSXU5uenmF1hTTbzi164GYg9vvCuHMTzodNkEhkyYZPbj3Qgg79KgyzXNy8MWkzcvuJ2fA56TJYR7GAME",
  "key26": "37SGQzBDoE1U35nZTHadK5GFfLCN6bYXz97jniGhTjixKAiBKWKejB5cc5fvUyKL5cvoaJc2MGGvuN7rLyRHcr6z",
  "key27": "CSEGUQwYSCxVtMqatzPBYT1LvF6ev8CKgaX9BQPr7z9qxLPEtEyCT1cou5XEjReCsoCMY8jnDZ77f6krUZHvYq5",
  "key28": "4BjDo7TDhXfuc3pnC72rt32WjmyRMMJaDQ6WQhdWbmXHpoQ1aKSkxZDDiCaVprSBk1R8KKwYPq5yyhnfewe2dRmH",
  "key29": "2fp62ajRCA2Cnd1ZLpLb9HjckRsp2CZMC9Mo38JuM51NZZFX2cYotzx5wT27ooWv218y3H6WWtmS8fMVvRX3e3DQ"
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
