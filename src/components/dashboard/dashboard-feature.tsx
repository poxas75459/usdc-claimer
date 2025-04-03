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
    "2cGiiGhGqTTH2BrcCzpAkmMRRbjeiaHz6gzT1rkPQR8nWCoE4o9CUVrkffURcJpDnPo6yrkmTn9F3Kjrm9L3tby4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LFnaauJgheCWu83zsbtC5NvHtWbWVr1D2i3whCmgt9Zd1NJwGUfMUKsRzhu4q5Vzzgfk9rYzh2abqj8ayKNFD6W",
  "key1": "QnutKukWZtDCsryBw879DG68gp3eE11q3Z5wd8t8sTCrGhtj7RMF365iW48E44HsTy9kr1ARmZ2G5Nj2EKLTb9S",
  "key2": "5hLj5TnA9DeJ7hPNfwGkXbazH3ajgu41HstHBTAUp7XaPDnHUf1qRvBkUroaMCHtbJ7xd9aBf89r526F3HPb2bR5",
  "key3": "2JeEjQYX2KL68ToTpQu3rGzobf1wTM769vWLS1R9yMqKSzQSFRyyHWMfjQ3edLHESbs7X2zFJhA6VCH7gWwFnXR3",
  "key4": "3d2Y5DQbeovdBjyLY4t5cejCa7EsNfhqnvywAifBKrNNT18q8PFtHTbbvZN6kC86JLMX6jrdJbE1sTYNshzJSyAg",
  "key5": "2X1iE13zqwYb5DwKCRzaSRBDL1S3ebhGihzBv8x45UZJQtKQvWhaPzm9asmSvwZGyDKRomsDgTgkZNap5kfbyr2W",
  "key6": "56hG6prwqRANXUMoHMYLXgBkQ9p6ZPiCpTk1E38eq2AjVjSTDYoimRu3KZXK6b4R3mWTtyE9qs3R1dcN34HxXMyi",
  "key7": "3GyqW5tYicvbF6tWXthxkfjQhpWgFq2XP87Lf567YUeVuQ1bfyBDFwdGySXp9TmSxDE7zZTNN8yWTUNpTt7JA4a3",
  "key8": "3pvzEpXm4ybcfsNkpr81KnDaN3wtTkU9ceenzLikscUJLJUgM2GnDK6YUeusfWUrVDV3dhUUpQFcqBMmuc96iGL2",
  "key9": "2eDndWv2bojS7Kz9jVB8hnurDkg9yHKQYZ26gPiDuUqZcG89stQV8rYG3ECTrvnzMfoQzYtRLPV6rVD897JtQ3te",
  "key10": "5WhwMF8uDAARtzAVeZbfuvMgZy9mgZ6ao1QJAdybRVShP9Bu4sThEig67bF3iT5cVXtp2aLy4DSdXrTBTu5B6BAL",
  "key11": "3tDqPx6D4oQ8Ze4UuJQpXKukoZ53pdC4MgY5chbDY5CDmbowvVrdAADUfqvajLSgawcqG48K8UPSLiRXvW51RTTX",
  "key12": "5zLPSRNsSjeo63KfCQD4eRVSM9QcUoAejJYNiEYf2U9wRVUj992jkdr6iacpKu9dypR7oJLmaLXEa6FGrgWFMHNL",
  "key13": "4tCXurW9DARzCpkAJZLyaXPXWLdPGzFwqJrMRYUCide2gk18rFryyiWJxKBwh8B7eUw25xh9SfxATFkHvwoEoNjw",
  "key14": "4AvMjaWbTmyyqThLHMm11gj9HS7sR8TybV7wQWh4VHozDAc2dxfpjGpzxk4QYetVCodhDGQgxZFpRAUoE4AoBRd",
  "key15": "2txqhgwxLKwUSFAyDKh89Ynn2FCHPZ1dtK9pVuycMxPf4isyWyLyh8AemAn5zrNqyJWJk1etGCTBv3GYJfqEvBh2",
  "key16": "5XVdUBHXvcgu8kikbcZ9KyWVBPn9EtEfo9tYqsAFv6Ka6PvctuVMJVqCPH8GVXZi4V3FXvrzeVg1F2jQqhm5uWYf",
  "key17": "51Gy8XYbhoppfGNqpuaWPK7Du3v2PtQX1ipabnMijVPoWb7pu9C4jvaLYfitjzhc55cDAddh8Q2ECXayRQzUsSmH",
  "key18": "4foFGkno3jKfY9Ew8nZ4b4fJbWsJx6n4H8tAKASoG6ePuU2cvb5QBjfLTdhYfQdKmDEKZM2WDb2MUAPcNKEg78Mc",
  "key19": "4T2hwvVVA3Db1mxgLsLFNujdU21sRhbrWQ63cN4yS9qXsRuXpskv5Vi3mBnfJQAuVUaqCf7PjNk7eUTX566PHw7",
  "key20": "HJRuSuHk3vym9j66FtJFbBc4btyoBbm6dmkmr6eR8CJ1FZbY1B3hQxWUk6XBjY7tMx3PYZ38ZgepsKiNh9MuLay",
  "key21": "2T3tmPqmYstkLt8Qxgv6cspHFiQgyWwWgLPGHn76TjE1uQAnLAcLi9qtLRmuU5PhUmB9D6fPs7SBNm627HCZiXTF",
  "key22": "5AvTEENgh1TETuimeUXczRJq889h5uDXM589rGxK5t2MKhpHNyHCvzo3VEpHXadx9sp5TmuiHGAmMbzz9Zpbry8w",
  "key23": "3t9jzKwGBhkW2BMyxdJuFcHLJ8fh2Jdn3LM6YLu9GacF7wWCTkQcPzXPoAjX5aKRr1RB9PLJMRPioi896S8UuNU3",
  "key24": "4dvJ2io6RfHx2c7m8AJN5KAt8jpbym5H5LjtxddqvG4Fh1XSHhrY1vGSFmCxvhEHnCpt7b2tDM9WDM7kcFvp6cw7",
  "key25": "u3gjPwRjt6LQk17wQ49HFKV2vTaBPihzvzJm8Zy7io4oh3uJDeuhszimmHK8umu553AccNoYmJCBZmzL1EHUT1e",
  "key26": "3hHHstrQGV55j9jTzd2z5P71SHGTVVfrui78kJ51PevZBFZtu7moXq68SHxh3TbTjxg84yDWL11EGVchhnVddBWu",
  "key27": "5JyvMtr4AFtvsQTc69kHM9QC5eva2SrJBtAZL3Ei7Fp4gtXjcMgNBsUHyoKVLFecLtunKPPn3ToU6gUKtFPXujX9",
  "key28": "ZSfiGmscT2bfEuNR5CeGHqrYfcr3aAsoh8PN9VCqYXhK2R9DNx4zCjh4o4h67nHEqTkKXGzUhMFRVws369uCD9N",
  "key29": "4XctipWzQN5e1Hd4AzG2bqkxuzojwHaA9NakKvTqf58WTpuTNU3TsvPHjPJAjK9SAHJ5YkX74ngLxmDvvnX9ayj",
  "key30": "61Ch5AWFvKUau67hLuyVbmwxPgMzSo8fmhZuE1vnb79UB1TFXR9i4jQZ12Rw92C4TAH2GUreD2hXcSu85BWdhuye",
  "key31": "3W2yzmqbgGid6umr8ajYtRsX6QVyzTvMvRbkQ6KdaVR13wJRgUufSKRnk16YmZZmme1wRFNdU16ayfnfJ3SVMex1",
  "key32": "2i4tHgbLiPxUfidWcmiNNGjrTfq5BhnQSuf62daAYJNMwqvHPYaTCpmkzFauN6QRdNFnXsJbAwvGLXBonDEcX9DY"
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
