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
    "5BBYk8jqKV96xrSWFonT93Rf7gf6TLYUt1qQujA55N1QXk8vYPzbw7c85ANoTLzyzBhbne4v8h8KYVoLQrw6AxiB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jV4TQT8bP6jgzWcPD2MsVrufjMNsg7HH4xu1ksUd4wKPQcFFhTu1ZzaJnynLsGH4emJkngwC1DqyKPQeqCUU98J",
  "key1": "3fuQ7CfFVxcRFFuXhD4LZuoWxpkq6cEpERkGP91pNJs4ohAndLQNL7nyXiJExAY8Bec3DMfaKzUxVgEa1nPPiFTJ",
  "key2": "4dPcs11PZVwnNG5tjfeL1KrABV5WyCkBWJbUN3L7LQVjUjoi44vDiXNTGtkxSeQvg4ThCUqdBGhB42GTe98zEk1e",
  "key3": "4B8QdSCtU4ykKYWW4JYodEmq868v6xFkkimSenr1XfJPrT6yhB1zwZscgxTLA9TDxjH7X3UmVxBNFvhYVnS4CAMi",
  "key4": "5mMFMLHA8FPn5u7RDLzXe9ePA8nVdNN1wuWSUYKL9RXSwib39iNRTziKZvSkcospk9rmftjneuwuGPDfho1aVMEF",
  "key5": "523yhHRtRkrNCccm4bRzKTns86iP21pCeBB31GdwFhVZPFWaZVSnJXvLKXUvK8ryZFhVtDU7hjXJ8UP4fV8sFUnr",
  "key6": "2WChyWjPKDqiubVXTvmYGMkPwzP3iGQiYpcHQvhe5HCY3mi7QQFs8E5CVpkPa8pD8cNEv74A31mqQubD7tSeHqFz",
  "key7": "4iBimMjcr53JA1Bb1otVC6sJfudJm1fRXwzvR9TGBBfk9rRFWJxpcwdV4jSxUMyEfrbKTW5yxjV2k8KqTRUamoPA",
  "key8": "29zYoWY32cpkyk5HCTBwjVRZyHj8mbvbZv4LenPu5WvbdaV2kjJJsmszGDybY45sGddCyPftYoLgKbkbHtP2AoCo",
  "key9": "27wNSjmKPwCwmn5a3hR2wKnP5G1Xzim4esztSf3xRzSmbCoPsbmzNJf7MiyKNQgA1v6BvZbS7kg4eLEogEiqoPyw",
  "key10": "3upcivTRSfRxkETU5YvT8PkBgVAo3tcmdqjjczPW1pHc2uPaG9W5iKwgMCrkeu6YCPoJwdtWeHd4PeSTTgAV6N9Y",
  "key11": "61h5RDE2XVL3yQwQBHSwWqn8odd6A2PLTU9GAdRomP7JnsSH3YnCM8SkcmWiQu1vpfyr1rkkWCNaSCA4DwtgV4gY",
  "key12": "63RvJBYDVVNRWFoDWzeuEuEYX2m3kLWujLhiLE7xPw89mQ2yAuw1yrrN65fyxQM6SRbEsw27ZCznM6sSoc4ghd1S",
  "key13": "3DxaJqdmGn8HEkVsNenKHevC7cWqHKWMjvqRvUwqZo5yDCHrHhC8FtCb6fVwv2Ah5GiXB3J8vLbN4cJvfd1GMdR7",
  "key14": "5zFqxijjoCrwHLwTJppnWbE2yjSahPUfZdvDPZEfrQ64Na1XvpWhgoyJpwcdY8XwfuwuJeUHsnk3tNx8tDLARTHE",
  "key15": "3DGfUVTSTparbsc1QtSixHC9g76UqyMsudD8P8sDe3yNXk4mVkCDGFmnDs6UVf1AM99LoGcxqtkrN1hQyoa2imjL",
  "key16": "5rV3ePHkiJL8DaFoyPRBvYyocyfcNEXkw62SkPbErkDSXKx42sV2wAKkuMZj6ZwUZDmns4v6MahndVKFkgS5VUpH",
  "key17": "q2bFonqdNfUWpunukTrvWfSYAmMTNqCRv3qizMhWkrMSi3uHhmwhVVLJKULDrQFJ8bSgALNS4k1semtSRBBe4X4",
  "key18": "43GRT5fGkLa3hLm6JDiTYzMvVGokH3BQKqyAH17AiUTk4RF9rYe3Hai2BufNg5wyg1KnXKKsf43EYiy1TK8NXeos",
  "key19": "5imuyFE9z6HyfiwTVAN7pxUw35guteCrmRyZEvXUbvq5xtJgRKifwX1sf8BeudzKR6tGqTiGTJtcHgRzwkqtYVsw",
  "key20": "9gx2MWnHC7HHH7cySePbxjFr7E1DHbVi726tZbeS7NdG46xpuwYZ5GsAgUJuozeihwdWDUfDF5gVDBkwEKUrCpt",
  "key21": "5bnVePAkmxSNbYxXW9UDkUoDi8ykH7X5GrZFbC4LmEvscvoiPDpqxq3bDrMfTs8FPYdvWa1eh3qUg5NgkvSZZ5GW",
  "key22": "CR37zby7VESDEn31xNtS4T5PkBivmfs6i2s5YsjCZ1igzJeMUEEBUy39eNCzESyk2yCioENRq6tzxUZ77eWqyNf",
  "key23": "4TxkJVz7frRwDsYvoLT9CtDbUfTyyA1pEyKM2GPxT9wyHXiramQVSASp8M9W4aP2FHzqahzX8KTgPaFTo6b6xg4L",
  "key24": "2soc97Anz4StWLaqeRyToGkK6HKrQKdQG9kc8ug4rZpRsy46UjnR5vDV6T9Ew43V26ufSkmgLuEaFpKa79n9g4v4",
  "key25": "2fq37z18XfRqs5PtdZNT2BqXBQ1fa2fT7HnGTsb7ePfW3TzcB37rx2CxoeTKvPGDdh1M5icLHBiHFx3oiyJAxQir"
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
