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
    "47SWtUe4yQrXu8q8pZuPa5ZmyupxQkHfLwNGZWcpYGE1HBTWMFQ8k3D1LLb88VyppGKF2hszdZzYgeTDDim6c2XN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P8EQ14fo7SWroYGXLA3ProW9xqS28uEb18RFSaMdp9VMnoAuy3jgAbA1fHLUkspRcCWJw9qesDxAN1z81esqdJL",
  "key1": "5z8YZz7AwTFuZniKhihnt25VzWxuMgRdn7512odfuoKxu1cntGAvqTJWaT3S82AUgCEHozT2KjbKSq5b4HM5Ay1D",
  "key2": "3GQDqmbmhRcw6766pkpJPy3Mqn57FWS6wJi4ukcbq8L8Zxj5ncpucMx5u9GaVR1wbncj9bbcrnVT51hJbrvkynAN",
  "key3": "4uVFG268wbCKZP6qyTvaDcyLFVozFBP1Zy6e5rvpqBMAjKAdhXUC5kdH8jqAARcxXoh4mUo6KMcSChuFTq1whaJW",
  "key4": "3E2Da4a6Em4SnQALpBRGoubwFZHTSxovChzEWr9ifrK29jfzZ6b672Kxk8SXMtAqD1xs4dfpwxqoPCrWyxhhPNHd",
  "key5": "4s21ZRe87CH5Nvko2NoWinUxiEu22srsNKa39fmudHHPZteFYtMDGwZfV3bVV2yVSaGpjEpwqMSMHdXs3w6qzD8d",
  "key6": "4PmAKkgaf1uqBf32TWGPJEccNMZkVuj481ebChVtVDZs8eabCRj98coyMUUH7E2C6N72RNpR64jadZxrLaMMe3aT",
  "key7": "31JUDrXUajbHuo4xsare9BKHCPXXouq8qAwwv89VSUEw4zdEjyNictU2DAQk6jxpgFTTjSEFnkrXtF13GbrzmLZV",
  "key8": "64zVFPrVEJ8o34CEY1mYpQLA25tp49dXoB9o26pGrsKmTCa5wdfteUAt4fdFUsSef5NzeUbkB95niPZ6hQ8gnnsJ",
  "key9": "4piBp5SnVi1CFRkqKEe1LedFG6qmvciBbeT8AHHY1ibANUw6JFqrsoXWif1HrLyrprkdJRTdWDuYjpXGr8yN9eXa",
  "key10": "3nedsw4vKNARrebCdKqM9eyZ3uymVebQb4LHQU7HCpbLASLFYR74Abc126B1f6tethWq9NFBg9zuAyuCatJ7Qxm3",
  "key11": "3TMKQTdTHhSiJin663YBwh8EeBBY7kenabeuBK68Y4WvUiMWKciSjwmnb5XwMaFWweJDAvJpozWX92XprNtito6x",
  "key12": "5uSLD2uoZuFxRdKnKnfbGrCcv2zff36RQuP6Ur77AZGuzCDqMifGBDRySBz71hkAx9yDgnenW1LBsgYjbQJ7fX8G",
  "key13": "2wSn1zPh1Eyu6nja4SK17MSNAuDx428zs14fHhiagwGENJ13vJWug5XP5zgoVAg2AD34xqaqqnKHURcdQBit14jd",
  "key14": "663PDX1qcGqtniJJbaJb26XkZVHirg5R74r8u3d7fg5d6kpm3nuJDJvPwGLqEjaNuP4qVAewWBUKWJbR3UrHao2Y",
  "key15": "251RF8fyjAK6Tk8LGPe2ppLZytFAHZUvkX2NAVMFraHoR4dT7y6LBBDAwG6o6vVcZJuJMZHhGQNUSgMXuXiQnnBq",
  "key16": "23kM87FxFJ2wiYcmEAL7yPGPKuhWaTu6CureMdswPkgq3pUj35gkjDh5f8k52sc19jfEWFYUKNDqfovh6UG3zFnU",
  "key17": "2gn6CMXUULa9rujRfJ3ff6dwcSjwtq1wswGRPQRooJGuaM65BWz2ZNgUJcfffGa8v29vcetbMWLg1daNEwzgCn4z",
  "key18": "5pqb5obEmqUMjxZfMWiCM66FvrgKfzWTtKtDPcK5YcQpaSwTNSsUMWHwGdGXxhA2G9hFdwfqjiMC1VemQttWXFwe",
  "key19": "5yYvnsgqDhE2b98mkoHNm4uwkUkDb7sjJdYpjCDzoWxUyW7Ayi57k9t47Uaj3fRnfw9yYzVzrxH1kcybhVtPs855",
  "key20": "4yj7bVGoj8w9s7ky9ig38Cczs6FGreKjArhKrsmoLct6hBomdEbBgGa7KtViqeKK3cqdUzeqtJVRbgoVXE1cWTtv",
  "key21": "4kkqL54FPyTgfxoAMhcV6P19DwKQPwY7kCSqWgr7GLxA5JqQ9c8LiDHWc8DRPvoAea26TmqmmSD7ta19uDMGhd2k",
  "key22": "6LUVBGrAZiNGyaPWwqABJcvMAk9zocpYicfKZG4cWEmnpSxqjmXBX9RXekHofFC42skMjwJV6gZWUjSs25uQTZx",
  "key23": "2uebEjvN44VeMDMKMGKj1KBEBjnUUMiWZgKkcAxAqyhcxuMMq9krR4WvCGUA3xatPA9YkoW4UHFpqNNKSbLNBXtd",
  "key24": "2RMKLqXg5EhNQoY7nBbS7Pe4WxaQK2WubpcE2rwbzBAkmK34xT7iSmGMuBxkFj2Zm1WceV2TF58XAkMPnuggNHT7",
  "key25": "2Bq4TEQ98y4togcTEqbpbj1UbC7D3HiRBRFanNtKmRxTEa1LebD7faDhVWMAsR9wzPkRYJ7e22ah7tk4n49nABZd",
  "key26": "4dNFEzeEq8qKiNZb6M7bnUW3kRaP4o2pa13QDaTJy3nFDAvWup6UA8PAPKzyfUDxreb3xPaqfam1QbUFzuVwbjr1",
  "key27": "2KssL4XVnTwVnNZnr2eJz23ZSRXV5BHwyteKtVtcyqdcNzQJexBLg3HSppQeAvVQdkMKEkPSh2LfhunHkpxmmdP7",
  "key28": "NKzcAUDTEukcFFmvgpthYKvaPUwthqhTDfoizheVdHft3ZRMhBtECiJM5Sxxjnc6pcdCa16KT4i6GExG3bk48r5",
  "key29": "4AWAyTfuc3AwdwyB4q6iki5GVeaQF7QWsDL5VA4oWzZKYYq4hWWXavdLNe1cg9a2JbkKEkD4NikKpg7EVbnE8ZES",
  "key30": "fkZkPfeCvAUWhZdjaj9TZ1nsW3BwsoCnEdGwrbt94Pj9cnP4vqYH8ULmvh6pDznD7AJXARBmmjoHWedJKzbTQwa",
  "key31": "2JtYoG7fzcoGDLKHtdJsawPa7Uai1aMgDUSJ97wQ2i75B6HLhw9wMzp1MqQegmjSkHZGGYvyofE2UQ5VtYDw5qC3",
  "key32": "37XswPXg2sLRKsBJcKZdfYr2UfKXwkHGbZmS47MG1BpTXJVZQaJJtNKAUzrQKf2qgT6kiWAh9C6qTcLr5b6CATLr",
  "key33": "5yVjs2EkzGdRB9PDp2tWsyKyAp4Hp7wyhsCCjBTNVPP59druxw8EMPPadxzwWHZC5LAvWFFYhegqJsgLnSyjfDVp",
  "key34": "4jGVe11hPBG16nY3QcCemqezarJHxoJnh8NbAhdksCNdjFC9XZJdybJnL2GA6mLJZurgfzDvyQtGfQoT5H6Kjdzk",
  "key35": "3EWaA3c1h1fWLcKFrDnoVqsJ5fRZNxiSuLzWQN48UM2xsPsBE5TY1puN1W5cBSYuRJF7zBB8Ggmm6xsVjGFdYdcg"
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
