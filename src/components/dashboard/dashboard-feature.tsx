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
    "KQzbH2N1TPsL3MdMCB41HR5mwigaC8J7hKYhzWqnBFd7zvV6xuSwLJ1kWLJ1djqSq9ux8qhogJkCQ7fAwAxk5vK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UcGkZWKz9dn6WaEVbxMY2oQmVjtRbYVekhD9V1qpiH7tzXZQHjns5cpzAwiMiFwZLLmJpFoYME8ZAu64nbDWmG7",
  "key1": "3v5goBEJEU1phYUy2FUu3KoBphVJUmorLyhvnki4gvhBh7CKzTewgsWFEbSLxATZWsuZgsUHhwcuRNumVKMYFwvS",
  "key2": "2zLDhaJeS4sEpjBjseMBP6tddcBkh4PHqfrvDGJsX1FB69A9nubjpQKQNDoLgdmgFqnpF5E543strxhRbGZErhHb",
  "key3": "593AsEgt1vPcpjxH1Be66z73TEX1DzcZ5NK7z1rEmwFKgmvZ1MipnW46cPtAeGBfN1ve2AVcxJXJ8UTTSAVWfYJN",
  "key4": "53yfSrugph5doPELBZ7vCXwy8gtdw1xm5FdXREVStdvh6kjdaoFHPx8CTnubL3zCLN9KaKzaYjA1ifexKWkQAHVH",
  "key5": "2wVpLokiheTwuicuxzHm79oBzCTtGdyMCFPRHa7GuaLLVcgtqy86iGa1UrhZVVnybXNgPNEX516Njym4L3sFj6r1",
  "key6": "SLwfXw8FFv1ZpThmc1J1bE6vENNUG9LmLwUJNk7MtwGQ56EeQpPjNvKJ8t1swQPytiPmjqcPXttur3aVq4yogkY",
  "key7": "5gCPyL2psjRL69kDLkF91UK49nFyWVfxC46JdZKLbgcyZcFycGkC48iAZEj7sQemGkTazQ1wwcQftNxzxLtBnms4",
  "key8": "4xnhqk7QEprSiLzCYqD5RY7oo565FURESwS4jPHQTpvHRr2wVjsu3mGAqP5eRJXPcBEaf32GHyN3wT77JgD7YnVc",
  "key9": "2pxWxoh5RK88QRuct74LWxcYMfNU8DYz8JhhGyBw3DZLsZXJfBPhK1G8Ewrmro4NQrLEFQiWrr25cTgFs6ELYuEx",
  "key10": "5wPF1idMd5EYU4R4SFeJErVfEfKTAahj94kSdyhoJbiH2TiTAjKgGMi3H8Cu5NjwgM4RRFPb9SWx89iR56fniKxG",
  "key11": "4nyL6gZRSuQPbJ33jkGtT8LbQuvNes3FBZQGZDZwhsU1Yyrra2V6S7ibsnrJFUbmzW9Yb3NTNeDHwqj9LMB67SGv",
  "key12": "4nXrUrpWJ4wQz1TucpGPpLcYGf45PCqYGWBCG4G215i5CC8Y2eLny1WdNHkNoMRyNYG9VY8GXRLidve5oq9ejqLm",
  "key13": "2PSjY2NRdcKBYMDTLrMJuniVrMYZ7Te8M8vXLbbGazGDdMqetVHGBZpCumkbFuX7V9oQgRjUGLtzcPPx7bJMPK33",
  "key14": "3jJWL5N8XPtxnqrJCQjE57k5DKuETvnPjqGc4LafbR6acZ9CtabMRmo6wsSFqevTLrWZoog93Uy8zciHiq8X4dUn",
  "key15": "5UnSYYK9Az7SEkgZKTTCa9MZyYeFbDA4fRszRFNru2mhX6hT8EM6DMMWzD5a93qJn91Cthc6xqe3vRXBFkWQ9nbb",
  "key16": "2rtXFHK6kjdmSQnCjviP9nU5rt7AQrQAwGrr66YLSMR8p8Y3EN9gXBfmp2p9wZa5dP7hsawuwr6dtUdjx9DLiKrX",
  "key17": "2cqK55ataztddUswB3chSz6Q4yVyWhSBMPMgNf4vVc2sDcVQBbaFaw9LijG6eF37dAQrRA7bozkpMo3GPQSBpGrQ",
  "key18": "5DtPNXwdSr6UkSeRTwk1RAyaCTJm3wS4TFMFdNPJVBHLWWekpmbL1hX8CvuN1FjFoaR2m3Pxd4si7p9Nfr4KNxYV",
  "key19": "2G9vWsfnoV9f9k5dWcEKYdxGzxukT2xzSK8CNkL7FHYzDuXjUJhUazYyev4fjVQzh5tiFW5g9eG32TBFRJNHJh3G",
  "key20": "4BW3JqCSs66T4AmGuDJhr8fBbJwBrAxL2QFQheiJjhM8fpQhNASV4onTE49nvJkqFZkYciDPV5uxobHvzUm49nBG",
  "key21": "5vVNJCLewXCsEJTcsPy3oB3yRJfhczbtdAk23mbE6qCf9Y6UcT5LxpDDwgwiHcyN6uJbeUkeHDkrJY33dWRm9gZj",
  "key22": "61eqv69r28aLCp9fR6LK2biGhs7n3rmT5JmnNxNQ7XhuqjA9vD7jvQEJMs1LvB6oPzRkT97zLeJZYLc9u8iAt9Hg",
  "key23": "nbDXSzoMP98tYu45bhtnWynvXTeC8HBcsUxBKGNJj7b82ZmbKuUaK95TZtbgTWsM6MkzPNuDLLrnj1R8ak1zoT8",
  "key24": "3vtrSmKWxJtb88oFN2i8dgFtraWYTN7RCUZs9SpYy2C1KHPg4qwg7qnpwm3H6Btvx5T9bPQFA8t42oixeazVWK5w",
  "key25": "45zXH9eh3dRnBAHr3VZYRtomVoo2eCQHtFCPHWD9MfxiNjKsTL2dgLUnVG2EmofCQ2zSKtSCYjcQFk6o6wSLEYS4",
  "key26": "2SDKcbjyX1EnsbdE5pk2txMuVmSegYQmvupjTSaLrFKw48h5n7s6dsNdtXXMKzNnrzMH9HaUkiMcyykBKRJHCPwD",
  "key27": "65pHQEvjvgFponjDYi813F2q1HjVjCX3YH5iuGNYyKjkNVWBAomN7tPDwgFU75SijG3VnCQkrxWKrQLno1G9xfHt",
  "key28": "3eLmjNzGtGNAeiDRDK6ATuFS7FsZ1exUZSmrFi87qxHL7McAL6HpMKiiiYpkeVZtYpnFeAfJFVHjdsAcHcQsvyVb",
  "key29": "3h6dMRJd3Y5aLM9ckEACtB2nsxsNNrKkSBPhTuK1gkDSBdKZvsCh3nY2xQw8QnnQjWoD5mNzYN4rLpmswbJhLfyU",
  "key30": "392FBvcidj5vRds7Fj1snEZJEwUUEFpGUPfzH7uwVyTGjAHoUmGNsqJb7aEBwT75jfZJq5SQDhvsqcMpR6uZzUrC",
  "key31": "3FGQx3FRWosoUdJRrcgujA6JWrUWVZ27Xx2YiKfvQ7Y2a9L7s1GhB9zbkV7WHjy7L6CpeAaAnf63JwhizBeYSRxR",
  "key32": "NwPPgtbhxKeu86CVFd7UnfhQmLusy3z97vpuv38YXxbhTRU69Y7Abv3on8jNYSdrDRDcSt2c5ULobQ2AVsYtXMm",
  "key33": "4XxCgCm61jGUxkUJtK4ZxaxqsuCpLkrMj2DrLstrNYUfhqcjeThbJZ553MYp9A2wNaBvYXiSvw57DwKGNByPbAxS",
  "key34": "3dtNfyZdjvjJsyHCppb5bLJLDiF5vNti5ac6rcwdDnffc1sghsaPq7edaYbmuiZygQSgS8FmpMx4TgdRHmiS6ych",
  "key35": "uXpe2axFrxCG5dqTscTGa73L326wuULis1A7SRux3nXjfPoDU28q8i5p9cxWeiWYYMb1wkXXPJG249bYhXQh2WU",
  "key36": "4T98mXF8KjLqnMgALsFzcZN5ADty1qWztyCEY9GUKta1t8fKKDSpyjXBtd6ggCPb512o7uMgwup9Yj8BEHw8ixPs",
  "key37": "4ywzRaKcj4UeSbCzutqfNgxXVQd2T9oBXamE96D8dPT8YRqY7rJ3HNVMjww5tqoTjqF7i7Yy28nR1RRNjMvfWG9k",
  "key38": "x4Gieto7yXEbQEn3MS7SfVCjH9PxBaSZ96tMwgQPhZt4ZAbUcTkoKQPgiSmUkBTcwu3o9LkNHC9DHNPQ89GP2kL",
  "key39": "44wckomRuMqx1Rsj2dhYcte1g94uMFVWjEWqVv5xyNGz9yRS1zdW3sqibWfvCNnTKUSHzaYSVEqoPrPhcLUG4bCu",
  "key40": "DqcaCh5bfDAA8auFBYMQT28JRhLyS8kJVZQZhrLPwWLd3hknpMVS5nW7E6PY4zhdCrjb1obsETeUHNEHeTzbEuH"
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
