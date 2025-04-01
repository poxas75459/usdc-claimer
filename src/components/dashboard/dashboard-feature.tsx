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
    "oi3kxv8U4biGTvG67hSq5TQSRjS4Ux9mUUPJoeAvE4vmqZyPtkYDLeE1YxE5JWKzWyYoXm3b3f3VQVLnv8bU9Kf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ViFDw8tmjmResC3mqrTLJ2VHjnAByvbXPihbL88nFjqNmkQAmkvfcpTEr1oYXxCTqTkk1WvN114GbrmZoRXSFXp",
  "key1": "4u4VXL2PBHus5T1jC1JyKqAXAkZTitWKYyfjzsZVVh7GmXCFgMjSEWmsRJH4yd8sdtgXcvk8z9U2BW7FoiNPxGVN",
  "key2": "5hZjGQm1XX3M94D9AVJkFPg6Pe9rYyuRrAm9Anw15LEmSYHuG8uRnBKa5FgpUjJDnWcFhYQuZR3TQBR71sFPBr6j",
  "key3": "5sq1uQega4DyTqgex6AbmmVfg9Kt6tEwMzxZfRjbNwrmrVAk97x1SKKYK9aHthEjjtWPWymGpJm3kbDj99quwFLS",
  "key4": "2F8m9c9h5Yyhc7GAWgfHP14du98wXknoSKygfnMJKS1QVz7BNA7aDD1Qgpc5zzVYvfpNRPU2jS7WXyGJvk63Z2Qk",
  "key5": "2zLLDaLKe47NcrUyCkubEN9yFXnqNZPKFFCRZUiBc9MxfUGcxttv8MbnXwsBaBnrMyxP37KgkuZqh9GQoFiFP6aF",
  "key6": "29FKkiQgVwjAZypPw5uUX2twymSsMJf3CTU1rHUfA6tDj1jMgQFA1mtJjttJ7KgoZW7NfDfv4qFTdfrMiUAhniXj",
  "key7": "5tKrnP6PXCfByEwuY3sTxyb9ebMn1obTpUAjMKBns87TBL6hk7Zqq6PVrmj2W51wk5WG6hzjbWeeJafjP5ShdaPn",
  "key8": "3bRf6cDDwStwYtob4DvcHpLCpQbqC3wyi62iB2pKGTF8ckwEKi3qUBmTQsxpZK9vxxskdoByM5dndB5acW5W2gJH",
  "key9": "kK312zDN49msQKCrx3rGbzPXSEPTo9ks78XS9CV4D3HF1SbhuhXYGTYhvjp2mNMNL6mDRQUoh4r12viLejLyCQA",
  "key10": "4dZNwzmGNaCeNXpDx64YePuqTJiy44k1VEvpeCRswo1K4Qheh2uA6NgXCV5AebXDtMJ176iJocM1beGGnykvhhh6",
  "key11": "2ESD6viZPQQRCEo5bggdYVZsJndnyZMTgy6mPJP23chQB7saigVcDFSGnH1xzscuBAqqPKuMULNpaUnaMJkXucxX",
  "key12": "5WRAKdygGQTGEsUVZCtqBGJgkwK9MfNLsgovoKfEukPpyqG2HTJFoREpNoRP6x34dpqdX4E7MBZuyG675fQJUXqD",
  "key13": "XPGCj8wMKb7fXiaus42jkQmwGrg4TQxFoedsGRW9ah2SDPH8KTimRSm5NXwHWhFMA3Yu83wx2PaYk9482j4aWZh",
  "key14": "3o9b2AFcpY2xZTFeakr2mW1UxM3cQcJhujEfo2iBkjeoZYwsmughpLd9sNdLnbDnhFcGMb2MxWxyiuR9oEBjqhrm",
  "key15": "5GFhtfdCRvVfeZtCzmaP3xDYeVLD4X2o8SFWSH7yuPrdBF1ycqYojAgTiwZQWQaC5NXVty8naPgkVz5B7fp2Vajc",
  "key16": "5gfuwPrUZmDh2Nhds3eSfg62KLsf4pVLnvqJK45KWvnYqx6hYMDADSth7rA9paS7du949W9U6PxiYZbQ5Ahmi3yp",
  "key17": "62VP1VraAQnpVuM7eG1k2j1ycLG2zxtah9JXagjQ3heKPdXkPZRjqSdB1AVDGdojHUm1UgLLJWpCo425AgeD9osV",
  "key18": "2jgE2kvycqcp83CqHXCx1bW2X7qJmXAU3bjEDfsdbd2xZQN3oi528AM1TGNoNMJ6XMx5UuNY5iiBQVzQwErZZANk",
  "key19": "2NR6qCe8gKZ1Rx3BnCEs8kGhv9458BoTSUuyGMRZ1KdCJoxCfoX44NRKzpnMHMJyMXasAC29QpEU8z4NhpvWdTLs",
  "key20": "2KQSCBGLWSHFqgZboSsAmwU3KAeG8s6QryX6dThF6xkYN1x1ZoypELZv5tZSsp8NWD3arJGsndgrpmodJPDizq6y",
  "key21": "3JgRAKyjJSux3mCd4kUMCZ6sRYWbaTBR4AaTWXUMwEQ4xYGhTS4bvsB2nQjsyG8RhVG8rRpsWjA7wkNpBa9Jkbpo",
  "key22": "4CdipF1jBnzhj2dSCeVrMTA3HPbuXfqfWWVHh65ZdojWT5NbvcQeK4n6BWUip7HTrbZ9kkxeNJMEQzGkwxca8fmm",
  "key23": "38GvVhRW5sTV4qstotkyYUzEi6MTtHUH49kg1wwHzrtb539weVXwrrorwBRYfFvN1X6k2YnoszdrXbxuwzPnyuj3",
  "key24": "2cFjVbJ83wKU5rsMnobt1Vpb6tnt4nCYrk1JaQtXgADevMVU586wbbxdonEbC3HteRdz8bgrQztN2naah8A3VKhE",
  "key25": "5rffqciB5ZG2epTq4xpb5JPiZSM3BK2LsBgrzXpaoJeMaYTN3f5KHCXFKo1s2pnmpgKzZbjVb4NsfpTw7Nk5Ybvn",
  "key26": "2uqN1jQHYZcoVwjFNB2Epkt3LKH1E6czx7THpsHns963EnwHa1SVviswj6mo7KJaHPSJHSzKQEJrUX8vYjdQrLFU",
  "key27": "2mc1qm2DwEBVAK9mBA3tA1eKn5X66kCoAre58QmpQAdyQt2Aw8YMWGF5t22Wg6hBnMzgqabtiGgLceDvD6k24yPK",
  "key28": "3UmXfDCJ78jugfc1UJKMVFpX4Lrbi6tTAaUgxdi4PkonoHY9rVKeLyuZroMGATTjXAnb1XdG9HS2ki76py2GUofz",
  "key29": "kx6BQrdtr2BrhqoPN3JyU8mdo1CjnvD8UnaXD5iHhZU9B9o83G4iXLbpdNpnLQqBRKk7FdrQnKmhBAGz3XZYuRa",
  "key30": "2tAo6vZVCA41pEZMxVuz8poN834RXVHiEzFeRH9gd2adj1werJY5qyvxG883sqJ4bae2XLVUDx4317BdRiXsrgEN",
  "key31": "5FcEzDFGXSRX3nZH4ZhwBoZgNrUNnKt2mVgQ4te1MjLvhxq9kDpRYXLWzmdKgFU2AMTZSYnA7vgrWfbWWj2ySCtL"
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
