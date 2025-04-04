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
    "57TwrZHk9nGaB5WppXbu1AUwdN1gafCm76fZMxGiLcPzEsuAjMJruVcnjwZWCuybNt3Tibi75c9yrSMYw4RWBGwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dGaVnedzYp7keWjacJzmdYMbC7PZSxdRP1rXJ1UsY4DS5sUtGmPJ6QpgfovxMJ5vh2mZ6xiXiR7pSpfN5aaPFrt",
  "key1": "5Uw52xnEtcP6ogZp5jV9pzUd92mMqEPSyouNxuPbWRgDQnC5RxiFJ4EFKhqmaE9AJUiQyDUy3QaMxB7jrkfdUJfM",
  "key2": "5gx6J9L4F2zbAiay1mEzUrdu52NPRcFigVAy2ueyz8Jgx5FBTD4Zcs7KffifY19KEQGUm9wx1e5XVh9y8KAVCx3L",
  "key3": "4CUu6n8CRvW8NxghtpDbrhWQuh69X2oVEdh4T616C8UpAyL1a1tx51bJRvt5DKF9ZtwKToXH4pSDhTGV7HCALG3U",
  "key4": "2PxJaGkm8otTmVYuTGyTfGAvJ4wtSwsL7xm8Za8xGdy48t4RZhrSiDhL8Dxg6dAjMLQvoatrd7ZNjxbJVowCZMrt",
  "key5": "txTLJEJB9PmV5qm7xmhrRQJjNpygP5HfL9QoJc7XgzDZzKcxM3RfCUHQSpoPSJHP8eQoqmPvS1HVuQvn1yfsF8S",
  "key6": "3raAzEe1mkwKDx3ZwCyCDNGJsfQkXb6oDsA3fuAoBUP7TqCKU4B9erzr6PFYcRRch4nRFexmUY2BYNHxLnH35FSj",
  "key7": "4hjKD35Qy4og1FUM5zKPngPGqMK94WPMd6f8cBb4nK1h63pRaVWFzBYQ78zSswEUVqFdb4gW1s92gtbyUjxbPXER",
  "key8": "645XCjwTWhgvn8MJzwBcxY13R5y6kor1QQrZUHhanwo2jCazt5eT3o8usw4qTfoEUmHf7YCHNSRt2EAft2hXuLxa",
  "key9": "4JxrBzz4Tm9hyqPnE9FniXeNimGuw7LDyskRGsM1fDJKqtvoyeSVv8mty1UfNmNBEVJNSp3nMbgp1btheyjsVCSz",
  "key10": "5PevATiofbMByj4Ux8vRZXrnGT2Mb8W2VfZF8qTBp2mT5sTJVX6XtKxdYDkkufaBiJiNHhm1xnsQQaSzAGNTREd",
  "key11": "3KPo8E7u4QmzLGRjrwNv5a7JvhKrp3zGLJB7YYLNYy26VxNUYHGvjuQuXLanRwKwYiLXXLXuUHm7suFRgzZh4ufd",
  "key12": "3MDACvoPqtBnEaK2YZv1oc1y7WkjTGTYj5vi4VpY6Gq57KYD2C29dJ9cVY3Wefe4BnWhQWHN8rUWWh8oc2JDvBiS",
  "key13": "3PFtTBrXyfvx4JZP1A6aaKrMH5XReWJM2sbYjaEAK7r1duAFKMTZujn6XXcn8PmGVnhdoLciYmdwmoenVycykkVz",
  "key14": "MHQWpuHP4unHLngfuqkhLGU1aujxvEkgQd8ayJyHTaJww8yeHwWgvL6q1ApeJLbAqC5vfuwghfeSLQY9n8LeLnH",
  "key15": "36ZuPpR4VqREgfLCnrmdfbHC9gHsokTNb7NwbPBp8Zx5jwgPb2yCcceeXJamNi1vgwYjFZq8aFS4BcUXARtJLujL",
  "key16": "4hMbfcLPCE7UumSeyQd8vXNBjvnhJVutZ2zuM8hs6SLiXAcEWv5zKvZPgmsjy6CAtKfj4JJEve65yTsmNGCudiVu",
  "key17": "2mP3Lhw1LhbGocoBLdN6W5oeia2sdzPqwgj9HCCttqzqMLbcivum4jraP42oFHrAC6hQfXayCs4rxneJSgDW2vtA",
  "key18": "ErD2mqZisfse6XmCNU4rDB6YrTxKh2miipXcNBKJuVijmNabPhW47Zijb6ee3QHH5exTF5N6SorMYP8ToroDbqY",
  "key19": "5NWG7XRwDq6MmbQcBhkuVFjTnxby2ZNG7VedgA1dFboMB4WxCDs4eLKtLkZevxrCX16Zk5DEBUJkUSxPFnRzXZq1",
  "key20": "55tofiySydjgkmnKXe246ZjkL2XUTgMrwpqAzKaWLCZsqH7T5ke2ssdhS1SnaT21jMsdpcGFu1fwadbWgGkTU7to",
  "key21": "4R9cJsLwN5h4ej9CChLfaJLJgSvQ9CC5vHsEvUroLinJrCHP7MzAh44SxXd8aCpEpQWHvXTdfstTBDrpMwZ5zqmf",
  "key22": "2zG9pnD5vq5e5hE9b517J1SkAV7fYw1AVKq1QETQZgNKQ5VVTbs241ca7Vn1mxYAyQej4HTYTMj67HxY2TiJzvz4",
  "key23": "4CcNthdrgLoiShUaKgoPRz6mX6KJA9fpuYHvSvk7EsHeQB5iTWNqiZiKGFPQyEvtAQGpUWQW36yYqWeaLg1sUFk9",
  "key24": "2rsZrWA8K4N9dRSAY24Q7yvhqcRaWGxsKtB5apzsYm7cEVM2yKgt14Uxd6s7VZfvBoW4jSHLwEMMF94YNsBwaieD",
  "key25": "2UirXfNYwDHohoW9EQss6E6ha8gBKfhFrgQVoqv2maNAZW91ph5Ngi13S7dFLirj3KjJhgy9ViTXgAWh4KbeVz5T",
  "key26": "2682vM1tQamm663YQdGhWzPa68nJ7MaVyX9fDvgdPernwGV6UBrWgpYMRk2AXZQ8wvxVzKrY3DSTimDne1iT82zX",
  "key27": "2kguU6JzbZgZDwvRsmPqL5XFZZbCuH37xbeJvhv3yCz89wenCKJ9Tzf5dTuLmCjKZmmX2ecLJpVrVyva499HMgW",
  "key28": "5fsiEffsLa9AXww1LV2FL5A83P5JAnaddBqPPzrmYmuH2HRQtTumFTJmscjXxfiCuEaWf6xk1gPAJf1kzvePXSGn",
  "key29": "3wNZHB8DFF5UScyAJw8V3depghcS9obvfsK2b164dCPEdYV6sTqSixRZrYGP5M4kao2Smg5Dy952x4T7uB3VbN7b",
  "key30": "4zN3pxSZ9JaZmG7oiWs9mM7R6tkBqpeic9ErCd3KFZxdetkwJ486GUymegW6x5z6EDxvhaxtP572FjWtsziiB3fN",
  "key31": "5vM7MGG3xhuMNNbP9kb4qeQesPhrR9K7cURCTaQZZGfSJiBX492CYCKJyZHojc96n769SnGWBChuWKCc5MbV79LH",
  "key32": "xUM1a9afD1iNJsrJhKzdqZwadw8vcacPgQNnAdVCB47rX334B8NBD5xeCAbr1oQ2N8in5FoNuwUp7DrmcQiexAB",
  "key33": "3ATUB51YsZbWAjwgHa2YNP26Az2ydhkBvrQSyeNKqVeCBv5AmD5p27mDH3XJag8h9tkZVmehPvAdqohpxDZ6oZ1k",
  "key34": "4jSEfPERhwpXoSJ2pDEXAMtCj4CHYFJopxfj9RNmF6NbEnXFrFcACdxHneTdCsmrB8Vy1shgTM45SqzbmCktSM6G",
  "key35": "41rNiiuhvqbmjRZn8vjPuGNBzsm3VAPv7xNhVBNUXMdvn7r2Kajs7LMxAmaJVz8BqAcupsHp976Df4Fet7e6Lz1E",
  "key36": "B93id4UqqFbA2pscowc3nJ31Xpdibw4tuLibkpeqFd68CuNKjUBzaJjemFwsdU17czXsWj2iCRd1wGBQrYa4sY2",
  "key37": "XZbguBK4mspK84Sj5aogNY8GxWx92rohRHjhmVMYLnzhU1ExEkVXMgctu5v9oMkn9TQF5nsEHnPEsXendgpJ4Rs",
  "key38": "65RQf7BxUrtc2iHkcXj3CJpgDCkyjUjFUTJBfFyPemM4aKtzx5LcF87jYeGGhdp9syYjsmwZzArErDDfguRvKQu7",
  "key39": "3wUNt5P5AwWk9m62Gn9tGAYs9H6yXkk5uRGFojjSiEC7UfnZrzDETp4y6Yp3ZeHqdiediKnqDP5uwYGBpGDKniRb",
  "key40": "4iWrVjhZj6Eyqjh5wCUca6565e5V369VxuZRzEToW7SaaUGMJuj5FNjrmhYQg2HCvYmfNBePYtrHCMt8JxfUU2Hh"
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
