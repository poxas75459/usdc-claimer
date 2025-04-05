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
    "5B5LeXxnP3DP4M7YB4UeymmtAps6EXGxYCj1UCH8qDSdRnApxUyfxRMzQ3WGnajHSiBv9MdBF6Yjj6aP23v4sB8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5diaSBkc8pB3iRLiAthzqLVySsTFNh3z5ncyW3pJLszRWCqW8cz8c4WmTMd23zDkfTmHXPGCTf6MMKMS7cJHHY1T",
  "key1": "8EDZqwSEwUToxNoDJeaTpYea2ZyUdCB3wCT45TNzYuuHgfhq5NoqPRd48cGS1tAAYnLeS9Xnpike7Si85z46dM6",
  "key2": "2GuHecZRW827LHKAkyR3KCkLgP5mg6uXdKpo3SaWb1dda8YFd3Ek2epWMYP6Bg6vjpqvY5TQFyZTjuk8QToG2QHn",
  "key3": "3jVSwwRFQuheMNmnbQ7stEBmbRdaDXmfHMtb1rS5aAp33xep6B2MDDuvJNkrcftNz2gb8A2yYVg2MSf453HVzqgr",
  "key4": "3PPAK6RSANhFBZ4zvyQVypCt9frU9h5XdcEX8cpAJRyJEWddMp3X2AkvkkXiL6sHUPJFgvzBvs7mQCpVf7MoLjxv",
  "key5": "6zNjtok5qnnxkGkpyN36RcRmvMYrjh17mLmAmdL48Bcow4Mrhzo184xGFMLLPjSrFnddyoQXfXWjhRpDAAWeD3q",
  "key6": "3aBBeuc5SxfP8ixPJK3jPe432XNYyQLcwxACKQdiJeraJhWxQpnCcn272NbR3n7J2ssjYdX2SLHmsLKgyw1jDRFk",
  "key7": "2X4YhX6GLkPkuWSVf6FdnugVtXS6RQ4KXASRfPgpmbUJitPpLCeAacMkonYmCd5cmwxSDyAhuq8jbPsDvQJByHAk",
  "key8": "35TAd6pAPAX8CrzcDnhZL8TQAXznSY3Rs2LcTqdn78R1xjsX8AjFXf9gWvrXCrQWPNFhpFNfA6V3FQPejpPcmGJs",
  "key9": "5SpEeKnm92JpG28PtEGBJ8mR8LmT6H2xpLjts7shveXngjKRozgd4EJoosM5n8nuh5qJNo3c4PPzWZrZEU3ZLvFP",
  "key10": "5wAoYbjmThWTLk1E9WoH9ZnqzHuvuppgkPyN94CGn2H8fTQy3W8YpDggeowoeKtFMGGyTNRENJpgSNWthfGKeuvu",
  "key11": "4sAG84qYJZVNeijbMnanofmG1z1uo3XWJBQqM17MXAiXKg4YQaYrWgHCcndcr6uodVuEJkcbCRZug8k62NhHcU9L",
  "key12": "5aHLX8EjG1HpbQ6NxaoRhjsQsocsrc3seMxpGmxBMye39dEctWk4Z2gTg37tvP4Pxo5FteZTkjV6GXBHpAsq7HjH",
  "key13": "5nSxi7Qs1moFC76YHYq6AuLrid49UKqcjjZKZmjFFZLBz5RnQ14X2etdDRVYw3Byjny6z9qZH4Eiikj8EqG8w4fJ",
  "key14": "qv7Yizjn7Xgo5sk1z9geVevWoPXdUsj5qnR6Q4wFoD7nKTSS8JDeRAPCC62Wk52UK11hxtoU5dPoZanSMdwr6Ub",
  "key15": "3TS75hCxbJoR1mNsRqqUAzZr7QSDbHvLsBwEpmQYkCHx1bFCfB3BQBnJJRmnfQHQhNx5VDeKk7Z1HR2WZdtz6531",
  "key16": "3QTrSGEwSt11HS7sKC1D1TBHuqkJzpwoFSuJca85EFqpbW4mBvDYXtVSmikjMgxkG9k76wxVqHmP9i5BFUKYtpN",
  "key17": "4HqADSNcGnqU6PTL6QpMtQgnrn4Z955VLfvLQkQfaftodWK23YbcoP2hYuWHusVkEq5zXgNQkjahND7noH8zXC5W",
  "key18": "43iygXoUZWhVRLSMQhycbM4EgzQPFXQ1FPjkU12aCFacoEuQ5tKoseigJ75hojfUpDiRYsCQSYvfjDE8S6tjggaA",
  "key19": "2zj6hxx43U8u7LzH8pDo35SwVuDsyeLk7i2EyQ6Up8o1HJGpdEz3pYa1yGzFnfRTmqxddpee6kXy2B5MSTx96QBD",
  "key20": "2zU9JdopuWKvJ5k5QGwyk8p9gZacWkYkMzRbrzbyo5EigPxJe7pYz8aJsSsbs9o7dW4DhjL1KTaWKU4qAvKo78Ta",
  "key21": "5C6NP6K7SFKsn9YAG9gVkCPyHQaHU529gfA9z7kFYYHgRKGqH3kRKqLxU3rWMF26iN8JJAUUnCGbNMRyeAsXUmVf",
  "key22": "28nXsv5KCyBkpcTBrzwvbDYJoATU2bcYYLMj5RqmkPX6mNy4cVr6cvSvaKyVKm3F6oXNfxEDxicWzo8VGi83aETP",
  "key23": "hTKUPk563ff3RSyqsgNXzLongJjgiUcwaykPMZ7BFiAzbUaZoaYfueqbqsPWai5km7joK7CrEZxDEQkrTgNhSDe",
  "key24": "26jaMH7zNtcLnBfZPQikNyVQZvBiekYXSWc7zc1D2DxYC2LFZZJkeLP5WjqHHzj7ZC3d5ND3z47LcoSc1reNkJcf",
  "key25": "MTXXJ7UaHEhdQAFse32hEiGxjji1wdcVRMFtdzAwtQQwuEWd6dZhP4H43VF7Mj1hZEAq5RteHuxV32zy14qtMu2",
  "key26": "vCv5dXm3miZmUokxdWx7TntM9WG8FbqareMFDZKCt9dXFwE4E4TckqTgC6FzNFqRXCSm6Ko4gmouzgyA7Loavgp",
  "key27": "2nm8HXu53sLt1iKtkztQT1PECVtYihVtnu73N62zLaESv6a3cy1sHbEt6B6HRgfN4ca8twiYeiyXyfr6KpJaueMh",
  "key28": "HL2bkeFTnCeaKsYBkNmsc34TjzLTMXXciSDP9HsCjrWYJ1cHhhGgAwzQDREZazjAQxHqj9FNnmTGVGcEBB6ZS7E",
  "key29": "2dYhqve6nNNGoT3so58HGVT4k9prAit535MsEMf3VFauY62Vmpdti193YiH2JkmGsKBwec4LpaQe6Gd87ZG4VF1j"
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
