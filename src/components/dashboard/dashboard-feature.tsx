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
    "sJRzpYDpyrrYHEWEfUGeffw4GVyG7eCEao6CbznTSFUuGJFWdp1a5gyBroeAxWCRRRvjiNJ9HERAn74cg8X7UqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fNepfps9cYAZbk8yQV9UVyzoTSTznP5ZhDHpJ2somzWS8ao6CkPympbEkVkWpuuSMG8yAFNFkC98yvN2xTc9eU9",
  "key1": "4AritLkVHc2pqz7wtyu2cH7yZtQBLTaBk5SdJjSXfp13y3cTGPk137fKTZMaQPbdERZHdbiLwCSuQNQ9QoCyHLon",
  "key2": "5BGBUNpUKhgEMvGwETSB85cyrTP8SSoWaP8YwqnSRrjg9XJdVkifXFCqQNt8BJ8Lq5jityB32PjiNEpMvZJp2ume",
  "key3": "4BwjCotj6kBB98qFhXCo22emodHAaebfMsXUeZr3ZHJqJupANVvkc3P282ftkX8ewyf3z8ndHKQSaRMX9HHv9bWo",
  "key4": "5WYY2vxQW8VgciSGJow3vAeF1nbsChWe9dBehBSUTStyrV8AEf2rycPMWkkjSx6TZx8gZqaA77Fy8sHxi123VFZy",
  "key5": "2rHX39j1mQawQZqFMWUawXrBmPKFSmn3WvAhqb5ALxnuBuM2z3izFBhRWrP4Qk6wE9XDpbr1MnZAApJxsoHynUrA",
  "key6": "4JpW47QBCuNNP4Gs7zP9DhKPdWBvYBujrvhc2tjvs3kpeuXpdoEYmHL14TMsuWfeEjFfxMGKiEeyiDiauSB6DQD5",
  "key7": "5gzLBkEmYwy2XtGEB2cZfrzT8hrDHd8cECMo3ruh8cgf6NU2nWLDixc3RgNUa6Kz1LipAM3N5JNBC2bDJcugVJ1R",
  "key8": "4MNxHrPZN5XcULpVZY3V5KAWr1WVBVDm1hDczu5rh9AYdqSuuHJsTS3uymy19epGUyqg6vkSgs5eeqsHV5yZ3M2R",
  "key9": "3WPE7oK1Ucryaea6c96wX2tyE6SJhiYcEMqFagteqsAfpmPrAXY928mFUKoePM22bN5nKJSjfbXKSme2v9JA8DYc",
  "key10": "4VM7jt45afsBXYTcYigXHG5xJdu5hjL1WyVYinpLPc5QvUYbx8xGqMjY4xffWxWqbZ1DZ8q8MXG1SLWL77n8AnYr",
  "key11": "4w2xKcdSbRq3g6ZhZFg8jW5J4sCr1LDegPL6HS4CHwjsxMt7C6xDCFKgaFqGegNLcAaZCpqEtZtwwFaKAyou6qeX",
  "key12": "59RFCBFyZjXNFNSmDSWvxqDvLKM6tAftD9rmyTYGLPHAnRJ83umnRroHeG7qmASpxazskpZdGf3DyY73jHxzMnJQ",
  "key13": "29PHCQwTZtWh3wiqQt3yCd4cSiLrxwZjh5jqj1r2PzdPbkKnRUK5tvbxQDhoPBzapV5t64uNEkMyPxSncBVWeqXP",
  "key14": "4YyyEB2csW4ae1tGwTpruNMWJ1ETXMVygzDtoBiSXXwAiSXEbCbPfRgk247zDioSP9wHqhQSNxVVVEmdZ3cmtJu9",
  "key15": "4SuNaTW5Xhr86JMoLio6YEcGcxjJg7kwWU2TS4F3943JzrtbYRKCv5hNuuntV56fst1y3ucMPxuM28B7AGdDxNDN",
  "key16": "4VTFSd2KydxsoXE9tJbDwjNJ4EhLmuCTriLQoVv2SZ84Cn6LCcNrCr1vKRbno1GK1VqMH7WrHYpSUBLdF23XQZWi",
  "key17": "66ynFPAvqqQhg2Xkhxkq7wDuaKftjTUMSDN8MSmNqpFDCtotpxX4i2h2RQFY6X1hv8B3Ua9yPFHtSRXkbuhKAhNN",
  "key18": "3GEaALx8kvgSoWmh4dKYeeVqHmuYVTpY35EpE1RZLb8tGvZQARr8vag9FBKd4qfd2essBSgpgM9kY1YsRhfU6khd",
  "key19": "GUr51KPYKRvZ79P1srG2KRYWc8dkzjtVULY7WHoLbMtuamcsAJLfHTA9WLSnm4gquHHU6GxjyjcBsNsUgZXdDwk",
  "key20": "36ypYrJGCWdYbh5d9TQNtmYgynHhTnpghFwB2M74DDphZNQJvB1RcUehoy4fjKEPuuZ8whfFERYkb6pxKopTF2ro",
  "key21": "2n7ePRnQetZPnkaDoUWyCbnr7voiejZFUjuTvczMoUTDAyB3uBaW8UWcRqZbZVbqm7TciXgSpXck9Uzdt6fVSDkc",
  "key22": "3NFpKmePNYpDiTvXNQLjxfrEL1F8ktPo1PjNirqSbzzwc7SoSF9Geywd3pC9K3emK9HSdHpCcdETL8fwbXwtAXWH",
  "key23": "4ccTkJyzu4exQrL6QYmyDkHfvMyFLBcC4stkM1yPkJ7pkNjYErg16aHXTsva2tBMCXCtXf4aVnBzAwSTQtj4zjoL",
  "key24": "4QWyFWB5jQHoNE54FWb658aL4yRa4KHhWq8k2B763Q9aydKrVPCMRCdE595Yitd5y4PKLTcLPBihNh8apxb8E4gU",
  "key25": "3z4NvXrNZfGKsUZTgZwQnNx9QmNNeArAdyUp41tjUDW1KS1GPzUwLQsxyYsdpXhrMH9LXoRzF6kbx1VeBia9VBYW",
  "key26": "2LZinKRA3hNiH7o4De9G3ZZeM7tA4KP49eUC34e7F2DiL38NduViC4GQJYXSwBCWH2zYHHD3UMRNrp3qS46gJphu",
  "key27": "3x2EqVfvqCpL5gjGvrUN3NYz6Eu1H7ZtNjEpHSrHg3BNVnC3MUTG1jiTbP6wyQNejP8AepTaNRoJxAh9oyVGndu9",
  "key28": "64PGFXnP5SG3C2XP38EPpvRBZpFghHorfVJAe7Ta7un3968AiE3eVgRb7AmtQ9H6qXFRdRPdaTy6YYf3Xz7dHuwr",
  "key29": "2HR8aA3EpqEZMHagwrkXhb4fbx8EWobm3zh5kbwyhWsTu3nipM98JQKeZXpfSjggQzpLCDur6g8Ve7piGJWB7Rkh",
  "key30": "4kXJPv1tXYjZ1ehfhbZEHSV9PVMATVqzsQVB5wpHwFNiXcKiJEJYhH2BxcNGiJ9oGPsHDaBv9ENV4jjS6vTPx9Yt"
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
