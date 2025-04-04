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
    "2PJ5P3ZMTACZ3dXAL7GBa73MEAf6phiz9dhSBLoyvjeRXjBLe91qzb1Pkf1FFFGtM2jXge2qDznV6omsEJj2TfFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "566ev6ofHveNVPx2jhwwsvNbsWoFhgu5gDVtUEcsxHSszqHDh1V413AdRVVtBbAEes8eYUewQrXi6FVaxVUn8YfJ",
  "key1": "5zMQtK4dZk5pcL6Y7pihH6PHQWpkGMKi6yjohbg3ZkZimLBs1hcv3dwsc2TKDvJvgkHRWDaCQHVm7ierzxWwuit9",
  "key2": "vKbjwREupzzpgTxM9QmzsJShvNDuMz2PiCgqeoY3uCTsRFA1knjty9htojtgPM6YXuLoNjh6bFTdsKSe2fMuMy6",
  "key3": "sy3VVpGmmGyt3o42baLsvXMibXrpoV6dApKp8BJmEUn354xMknVHbRBHkQvEFVBFTeg2UzvTWnjW3z65FHv2MSu",
  "key4": "4MQ8swRevFwGFm3A4h3zRDm1MA9dZHQZPtpuizksXBhyaxBBXqMDciYcMvY7qUuM6eT4eGqWFV4awEHi5ChWDQMy",
  "key5": "hmGGBMZLyFep3GKqDe4LJKznwUZN6fEpHvjJbS9dwMheGqRwvEA57ytFsckWpDJmYpkSyWT7XJyoerVZiUWVUWk",
  "key6": "2npEgrr2AX8okbEzWbcxiz91Hbh8PRshCAGBPRt1qXwoDHmsWiDYJraJ5k1RP7Ch7QK8ngFkbTsiJZxfauUi9y89",
  "key7": "4JJAhJGoiHdcwGSq8xVJzZkqQ2DAnRcDqhhg3SrcDWMB2SExp3fhDhoK2cAJcTJb7eZmMxSUm87gHf1JDGcnnJf1",
  "key8": "4LaBPuz7Usp6jyUt33RCbTvx9WpPJaaNvmk6a942Y3xCxL3awEzLqA4VWa9JuVwWTbgQpcfCXA6eaQ6nfPiVQcYc",
  "key9": "5TX9QKJJrB6XV698nJYoyMBtAtXpWhba8b5WWFBdDL8gufVdAwWD6XFRzfctKXWu3eLCV9LjpKZE9XvokaAhUvxJ",
  "key10": "Kd8RcUoVLvHVqxYW7ferQS5rYRnaW7CZCzs8qjvLUSEE6uEVUVifg8roXFwwJhTFECxXh4QGT1kZfXUy8jJGg9X",
  "key11": "2nKJD8SF42Qo892dqfwJwLLRSVkQomMPo4LWLeGr1GheoRAPsywNjknjZNczAQa9nmZ2CkRdET3RZdT5SswDxkUk",
  "key12": "3aZwnQ4fT2oiC3fW7MXsYTPtcb6cR76DY493bqPVNtonre6f4Sph4B26ya5pCiPVeb6bMKKkw8MSFKxsZw3sgKrp",
  "key13": "AFf1FmwoHNvd5zFEXF9FgfDqV2qXGU6Rm7fyZCK3Jntu2Zgb7d6m4Xa6XQGypKdpm8vE9skxsP6YSwV3yLu4s68",
  "key14": "3oeLixpFQ93VgxwJqcGGHGk857dxT763VZyHEvb39teDJsrFo32e1NGBjFcQsmo1cGjjyuGGW7YWX2W6rZy4jC8Q",
  "key15": "4UvqdGw1q1fLc82LdJQxA8EFXoUbT5sFb6Wa65pzo39jshhc5VtmhhhAgPxFz6xU4WjAsphQsQYwq9AzbjQHDdNv",
  "key16": "27gty3uw2k4UC2VdBPC1i16QpzN2JpcHh16MEHZz4yKdRvFtDzGVXh2ZPBt2JNLvRFfqLSG56MECH6BATYVkStKK",
  "key17": "AfdKb9Mzp55QPEWctirKz8XFS9XqDSDR1GGaCRspCWtQ4HzCv51ure48cbYGcqhpYUD62QPQLeg5QVXXG9MZBji",
  "key18": "3zrYGsXBkSZ1fxuDCMukPQP9ZQ2T832k4a75t33PYdCBQXewBdhnjRs3x3nwKeordYmioLyWXsu5veYba96NiN8u",
  "key19": "3uUyTfBvv6dsK1CSA1s3R9czZvRspWPy9HLNanu2vc3dkxk9aWfFWDH5ZsB19RpvJWQYAQJCtzfbah95wBNoGmaP",
  "key20": "4FXArVTCjLZu2af5xVFiEJapvCg9yt7rHQPNHDi4bKiDEM9AiuxypmB5TwcxJAjYSqYcFp5U2W85n93mwctDc2z3",
  "key21": "4BVzZRrDqHTNkasyPcDLDm423CUY8mu1pY42uEDGQrQ1dCVpoWa5JyD3WH7ntW9bbvUxQ4xVkmoUcevjP9uvL4MD",
  "key22": "54qbtPiijQpdUuS6o4jLs2sQVPs2bHp15vWgrn1SKzhPfyhqN1xxRemFKKrt8NShXJtdpf5MqKPCA2jBpkq2EqQu",
  "key23": "3JQ4FGFr5KyKFBaEtovENFdGKCAyMHp8J54dsJ6NQTPJFSRehoxgiNnr4EC9aWQmfX72ToK21BshztDFLYXyTd95",
  "key24": "3iErHy88qWiASTZ2JqW2dUCVGXWvMkY2QJhWo6bx6nh4a24mXuQkitYrgbgvBGgyoYQSXMuwGWm5J48GADhPcy4w",
  "key25": "bDT63KQvRmfZBqQ2KCoJx5XR5yUW8YeWdnGpKtNR7H5ec9Y8NzDQgEW8ji4hfcPy9DyLHQHvqVVArSQfuS2zr2j",
  "key26": "2PaDm9MurtgfcfG8bTtnNbJiF8dd8qwh4LnABK6nJY7VHj63UouYyKXLWhyio4XZ5N3sLjKBdPCRCufXZ7aH4UFK",
  "key27": "4b38DLXztEgzFqpN4aK13AZNffJGVkwMGVe8cfX798AW9bVab5pvXBWQQuKN7kQU2DdntRqfYq91nNvP3o56wCKE",
  "key28": "3XyMPHs1rVgCc9ZkBQYLccQenWx297vLXaauk1msnc7wFpoD9th8XtJ7zaLpJtZoHJ1BwrEgW2SZRcNEBowJH3vZ",
  "key29": "5BxvLBvWS5z6qX84aEKmQC564bFqGLacV92QaDFArBvbCCgph3NfhAbs5GJY98ocBY7NMEjj5ww1fMXxGvmYM6W5"
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
