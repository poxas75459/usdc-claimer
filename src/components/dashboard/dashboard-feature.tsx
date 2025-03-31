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
    "4TNdCoMXVxbEyW4fknCw8VHH8y1VXzhRVp5xdb6giAJ9WPhvUngKFjyWLEfSfMX112XLSWcxBWEErEogREfKV1d9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B38sQrPQB6mPKZF9e15R2znXtBmDA9XiNBmr28rLcGHNAKeDCB2WTsdwnX63whkJovhgFkFS4EkAmLSVcXCHPfw",
  "key1": "5fA7znZgVJzbvg6t7c6fKRXUhbACPkEQ9gRUqjpwUaThqiQ9QfNUGPNBkSWeemexuZBBRmianjEn6kkaYRw7ZRBZ",
  "key2": "2fqN67qdEZrUWgwMX4CHBNzHfEP7ushmoV9niKyVrRqnMTC9nMewCf6pttsMgAEdXoEnSzbG8mZFrQPeZM61fxay",
  "key3": "23uGbXpUYr83gVVcemGPavomvq9DjuGhxZyrmrbgoWsATrbs9AFxgtwvx9snh6385Vmo8bXgW74wjzRfa8CiLv6T",
  "key4": "32ceaqsT2sJn3nNmKMi81XTKSwXd4mBeSQPbQ49BDYHUMSxvCf7hcsL3y54dpMe3J8Sbx27e1KgrPNh7QRNMGMUP",
  "key5": "2g5UfjY23D27CKfFDGrAdt7dFCqbSavMWc2bRkGw24odGDWsm6EJmY2c9Mpbs5a4jmQjBGjvJnxtGoQ6xCqHV6Ed",
  "key6": "5BCGS41XDBepWxVKKLv6Uf41dn6EKhrjY6UwxxUiCNdMUgWtnzsWv3MmaQjQLSj92iXRD2iq7donQgRHdgoywL9b",
  "key7": "23TbSsCGXraiKChBgDXfvyiUnvjTPbQvvkxMtTjvQ6HZrEm9gAAjku6sSzYwvYFjk2om7iEquNeKXpqZFnaq3gzG",
  "key8": "5fzCAaJoKinZzRtxh12Rz7wa1E4XJ3LxELXQ4r2Pxy6VoMqs3aZPaweSPos9W1mn2iHPpzUMKkLbYWsVKaRrimva",
  "key9": "4i2zExaoNTC6PZWAxALH4gWx7HyjXc1VATamEPoDYoCCjD258V1Cqfih63i4o2RhPpLcuacNKU2qko54C9hyNETG",
  "key10": "2oqq3uTqx5HFdPUQ2EL2gd2PeNT43fU8qFYN7daxJJX1np4ccpzQgEGdryCurDMkMR5CYFXR9eqfgqeoUCyAFFda",
  "key11": "2ykuZmBCrbAEWj56d3zZ5avjV7Ncktxt9mpRAdMY4jRWEnkTLKTjbSpdDeCRy94C49cMM9YKvUVTEmvNoB5BBUeL",
  "key12": "3wLy2DojSF3SGiFSJb8wnzMftWhhV4mPNUH2PKjLYHDrNdnEoduUykzs2w4ZsSj9uZ7o5nyTRSsUfgDNPEKhvX5f",
  "key13": "5YaTAtpmH9Exg29NxQz1JeSa47LnZEqyaPCBxmZnVbe51SRKWaZ6xjt2J276J91eEf9D2KPDMcrEwdwSivjqFXQD",
  "key14": "3VMt2dhyCaR7Zv8KtxSv96wzrS1VyEgou7u3AtKXPpH4gHr36qeLE3rfPefGPqALsHG8wtjbQdenxqYihcLsfSdD",
  "key15": "zhABQegPuFyseCDRZtYh2DWTxpnKiFbBjfipqhQjQ9vU5XmJHD1RkzduzchaqNnokH6QxXq4ap6cd2QCdK8uRdH",
  "key16": "225WufZD6HcAz8akiwsSz4qDu8Fe2PwRoAa4dxcBjn4nLmp2wZ3Y1J7M54vCa6PgT3xL1A95LE9H3Uvey4nDX93w",
  "key17": "3zPrRKVmVCD2qdE18jDj4qdxgF4JfLYyoXfLRKHc6CUngAGUamcHH33KWThgKp8FusdanUKMEByou2yBJBN1KjRp",
  "key18": "tBZQDkiDk6mWd7rPsYg16Hvt3svshAFK8mQtzyX72wfPY8qsyw6KTHohc7pQmX9eLv6uZpt86SY2YiTQdN3m9ZA",
  "key19": "azmPnJHJtfYhhW5SofE7JGjqiERdafScBziY48NgSMXRZHS2rtwVDx2dPBtv3VrNPM1kbcCqjqukKzWjQxbcAxi",
  "key20": "3Yb4wya1WmDySuViDyEKJ2YYLqg385bA95gPnQomeUCFgUzvwxWviKGdzVqKYuNKabriyYpS315kxRR2Emh9g2pX",
  "key21": "5iPfc9wxW8VcvUr7RQuDyGyYAHEJFRcUzEv2xQrvJCrdc8GcodFtAkiyYvWWt5HSe61detXFrjZjr4K85VFkX3jG",
  "key22": "nQQV7xYD4H4cfh9FQTPujDwkzb8Hy1CBZawpv4nndWfRGpCrnBGVrJ1svnye44UX6LuoPyq2v9DYZ5SuagzJKmX",
  "key23": "58m2CSnbHiYXEwRih33An631xG3ieopPaaYxbYJs4XWZWYSKUNzGzryTGrreK5vdvjc5rr2DYwUXqFV5RkJKD1eQ",
  "key24": "3qzgRWFeTekArTeLojr5RDNQ9CEEZ5DLr8nL69xNf8bNHPuQbwx9xbFqkNi2Tj3Mw3UZ9ubsLptSR8NNArNXeMiv",
  "key25": "3tigPMhQk3FWNjNELKELej6mgkQwXhsofeMxmvrRJy15Svf4FhB9ibTuvL832cgy1Zyy7zEZiYkbyyP4hNhD8YiG",
  "key26": "5YAQPQVHNMLy1uX7CUJGg8dUSaH4kwhs1nz8SGKdPpAbnkFbSQwnpynE8YEXToYa9AbBQn4ERY5d5WKcgMN743dJ",
  "key27": "XpEvrX2EAkYn32k4ftvedcGGgg9GS1fMSZcoh1LVUdwU7WVEguLb5cf2KH3ja9eaRbjZvYrbvoyWBSRVfATV2y1",
  "key28": "2h63jaCss1BPj5XjuEv1cZBGo3KfHvThRYJvYUuaBaBiiarTvB71SwmFEZee3gYij9usmTbjn8bLmcHfcPxiTCEC",
  "key29": "4H4Zzdxzzv7SHmqAenXifQinW9vw46LfMnx5jKdmpJjpmP7QBwBw4Fci2CkyVokZ8etgbkiewb4Viu8uZsoc7ioe",
  "key30": "2np4fnvXFycTeEzubYRd4asbehkK11mkJZeGrwe8fZfazbVkLMLG8gAFR6nahqujcRvx1dYXCGaWsKFsh6M8ZC5u",
  "key31": "2cGJqmzQenak2CG4VAMdABhsF4cHWPe9UAEBYY8hJkXjrLGGbEZyY6piL1erzBB4wnXkGeWEK1hU6VfEAGbF8Kpa",
  "key32": "sbQxbQLuQQmr571DGRsgRUPcEBDfgGtr8mgxmmV4kwKAgUnfwFomcYDYSUJSqUw5BF9ybYHrRjPcqRwiW7Vm4oH",
  "key33": "2sWY9x9297iWjBt5t2SQd7mq9t7Fjh8qGu3oooQaNG12FDD5cRNusHLGhUpch2EbsxpDA211WkGDsdkcMdyrXFVm",
  "key34": "63yAs1T2gyRNnYputSxa1BjA1wvhQUMPD2K98Kff94mnj21GxFDCBSZMNYrnTsrwEam4PNnzWnq91aHTMvDkZhMj",
  "key35": "39dyrN4Y6oxPTdwiLLwFYzkHTfftDoQs3RLcgwQ55BAw1xNoiUYToHM2Stu5cdQSgjpC7Jez1tXaHX9EZsdocGKC",
  "key36": "3jDDqzBUTLyx7iB3XsKR6n7VWK8apqwnFZdVWYbSFfENnYsQa6BQkhwMmbzduoohu29w48n6jE9dcaJY9sCrsWPG",
  "key37": "VHxEy9juXUqJotVpT4MYJWMaVccfiFkz1wPxDB2URiso977itfhoW4qHkhyGt5psVkW9415jh8EWSLd1SQqin4t",
  "key38": "5ABdB2eq76NEzRzGfC2JuL7GpVRTBxcMVe7GVVVKu3vqvgqxyMj5A389jF1GJXHaNogV1i73Pr9dR4ovud9RKbma",
  "key39": "2WSmb24tZQaZkMHoZHEvoLEgfLntrR5uZ29SYH7rJyp6nVWgnnXWuGsinXBptCvyco62jsqeBUPQkFuf4tYD31Mw",
  "key40": "5D6QGb3jYTLirZUfKPvsPCVdCmhV4RCH8Av2Prt3WTJAMknkg6o779fH4HZw2vqrJWz24EorwTWBsDC15fBBPd5L",
  "key41": "28X6P3sbVPNowQk8nChwDK1Y8j23RPJ1okoRyzGUi9cisxK8CRhjdUtkaJYUzgiHq4tqWv1bvHBjHP4T2mTKLuXd"
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
