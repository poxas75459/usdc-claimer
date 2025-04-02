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
    "2oQHwqjwQqDg3Tt3ZdgunCj82JMGvZSB3DTbiq67V9opokzkRPuJ1kpmo8yhpKnbRGoZ87f9VdvGDN6rJ2DrEJPt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Rc1awfp6FF3NUCZQyz6sWMKYUxxNmTxL6Bi2TrRjPT9caN9DYQxoqmitrDNbQ7GP6DowxbRzA6xmhCZATP1rBp5",
  "key1": "4YqzLGahtJtFm53exHPAR9DRzXCYtU8JvF7Yt7XcQkJmTziwFZS6KgNEvPrLyoC598GuxbDhsLDtw8r5xxhCcRkT",
  "key2": "2BzjJxbFnt3X67Waj3oapUJkK4S42wH9zRrVkjXq4xCGz8iQtYFkVBkspyLpH3smRpkQEA3ZnJACp3Hh93qeji7d",
  "key3": "o2YLE2hNSwbQUNM6542UucZfv3UNfUAjt18KhziKpH8bfFRZGAmPJ7LLtaK8qJHsVX33ScodGnRYKrs5yhzwFqu",
  "key4": "3REYoS8XADczohg2gmp2TmrrBhxL6NSkd3HHUrAqcqdYjMojXR8EAfH9buf5cfXVnSBZNhWXVGv9o3vAj88GrxMt",
  "key5": "3Dg5wNYLRHqACswstdXvYqNeL5stpZFyUQXzUzZG63fX3ahhdJBTovNL41iihGBKGE6r4jpG51roFbcXDQDfnb74",
  "key6": "5osUdDWYuUcNz3bnx25jYX2cdxses2K4jHanb3he5cURvEyT2S2TYYYeBnGhUYcSvGH1K3JXFbMYYDxNFNvCuUmA",
  "key7": "318h6NCk49vM9zw9xPx5o8J6M263U3F79xcCLQypcu8qoPMgPooXvJkoGp3xo3uzddrYnUZcPn6jv87DDpJAsozt",
  "key8": "5KGsU8k2SkiFCHzdUjqUhzQZgmNbLZPAX8mzV8hgLNNDdvD8CKpnWLaR1ABR6aSNy7fYfy5jSf8ZPHGwcG6oFyJb",
  "key9": "2ffexwKuFGsaGujAXDahU7jDGBHZ12GcgWCt6YAZceibmU5YEFBcScag5uDbr4bouvXVKHK9g4hiXbxAMMxMWQ4P",
  "key10": "2QVwsiHxPZvRrqCHVC2JiyFAWzGXp963wqcPXm9UfGQE33c3sAMxEtZys3SUuKZT5wVd2knovk5si37T7pCLyA1d",
  "key11": "3uE7P2ZGd2ruhtFWs22UFwe75oTapV8x2fzpWSk7sVc6xY5tPc5aRbB4iKFEW93J3S4GaH8a7qEfkNLeiGAfUA1U",
  "key12": "4UJxZYpVyW8X8eb9kDF3tsmXW3AGo6kQbgx6iDbYkKAg22X2BejNG9sHvz2jDUSbi9ysXi5HUoHA4zixPDtokY6K",
  "key13": "2VTkpWTXEFLneGPb8v5RbKFzzTcsuBsd98fGcMgDobGsGhhY2rrVVtAFGRj8jTcrSsfvYompvuY1oSi8mr969aFd",
  "key14": "3mYVcPnMTedhtpPpbscAY2r4fNM4FGnZ1ek9X23hvm4eKwR7NrAtB95aitqEN4u5MZS6srZd5WcMmrRmiDKAsdfG",
  "key15": "5fkPokaJAx2iy3ySeD8AJAL3ZgoJ16bDNpNQGFxPiMHSKjZW3MBxiLqr5LAxf3kYtq46ZoTJ4tcYwUE6LLDbhHcG",
  "key16": "3rrqaFBHFko7CN7ZaL11YCyWHYWQHs4dEBMxAyg9FbatUkyMj2TjWNpnx98DcFi7qPMmcfzQ5F6M5w6Qh5P7e1ir",
  "key17": "eeghRfJsr2TkUsQyjHTXWhGwNH7vAWjCZDb8oGEEp93BDAC4nUbqKomHUn6Un1rR6Bwpqrv516YGMzje7Mi9mDk",
  "key18": "3wV18LGJMmstL1fJYxqcF5n6smPvhcSk8VWFswGzo1P8yQy9aAKMcSj8A6XLrHk4JoGuAkCTaqfRvfFBf8479cw4",
  "key19": "3jGNFCGH7zEmcmQV5LBmDUcrrCzMtEVZ8UGQ2fxMfnaG8dXnXpxWCeLjpHBDpPyXKAaQVZYzcLuR8zSdpyyTpqek",
  "key20": "jNiVdFLH4xQcUqwCnW4hKFJuC5XCFYTNpgyUGVjiykP5b3g65J1ByVyhCbVhMUDsRcsABx7RH2WBkrcwuHhZMr8",
  "key21": "3QfQhXBkQ76jtXsLT395t4od37SyUPXXhmGewzyWeBBLAvNQCHygkmsdRcPLjUrRs69fpFGnxsuFexEAcSGAu7hP",
  "key22": "2Gz85NpgtiwiysogMcWX226wHifYT2KfUDnYo6aw7mM7cecAW9HtEnDcS9mzB4bn9C3X7JwAibPbzjNfwzsWVr9P",
  "key23": "3oFKR2U1NoEYQyYA7kHN1ZuVk5SkXbAcf5v25WwrUgxcTicFaFmbqiEES61ksp9fha6hTpNNSX4fttabYKSNEBi3",
  "key24": "5uU7uqBcHJ67BcT9s1mAj3XaTe89MAe2y4pQDiZSXko8gUVQ6iJNzP1rKhjNdUjSeJE5vDynhV4gzBsPdyNJ9df3",
  "key25": "FfYbreqv7aQ4GFen3vTK8MdMxMe25Jmx7PK312RHuotA9e9Npt29mcerC5BKXEK8r1vWkskjDWBXBnXH5MYB2Ep",
  "key26": "3Tz5aZVGTmXxpxXMMKJJhFSAewXbwzCh2TiJLEzqZUgcp4176nMs519GYnX8ubCM6HbbVpPN59Qedeg9iU3X5f5s",
  "key27": "38T8xn6523Bf1ry9ekKdiTPd9Y7xGmFSqTcJRdafDB8AgoFnc1hXeXXzfDeHxokf3Z6cAiVwgYk8SNCwVDWpga1N",
  "key28": "5JL7S4CNQPfKiKZrWt8b8NYmzdhKz2FanrUDFNPXiphAcG8qzarGKK8mxXM7rG9DTyNnaue1UYXrC52pDSCLsk44",
  "key29": "3JwWqzshy3y2oQvLER6Bm6mH83r8mvigk1Csw1nEkdXrC3fFSC13jDV3B5s8RWu4yvFAA2ZerhQvYYMHUSxZg4d5",
  "key30": "24NwhU37bccVNn9nwxRFoWXGxMHh64seDXExQi4Rif6YBL2HrK69vBjX1HfnEnuAvgbES67r2ZXhh35oiDx5VkN1",
  "key31": "5uLFGWW2gR1PqbnT1Z4ZTbji274RbtX2sbTFHchcQmaRtGeWEs6ysqpwVE9YDPebrjFAQDYdz5hZhx8bSbG519ks"
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
