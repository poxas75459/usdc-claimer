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
    "YCmvUk2ibox6KzirziLCo4TNioc41iKdMkGXb85nrQiDJWMT5x2hCJyUZmMuVkvWpawh7kxbHTQvWCzX4hyinRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LBq7grb9HEcAi9aofnqiY8yti5bvr9cCMHCdtVpumDJfFaz2Kr1JhZm1ZFHjGrYD2xaBjsJNrR7RLimFiGVPPgd",
  "key1": "fG5ufMgFtitwgGpcATyuY9ciGMRShqj6fwz5PDE3QC4FVxiWAj8Rze18y9RiG8tXLLsFJU1r8y9divstRegGnP5",
  "key2": "53spxXeTyE22AY8imThdPmdZWwiDvd4KgZtG1oE4LUh6t16Zv85uCoBsiQBUEyhdEnHy4aqCtoasWu2syi6wENLG",
  "key3": "3bdLJgGsg5haHgQyhc4xMCE8H65KsZSLe3kd8B3yP8bdYeHV4hCc2p87gDXJBntCc4DywrEzc8R7MardHtADrqfg",
  "key4": "3TAQdhvDBpMYMjF9gaMeQXLdAQMvW7QXYLPenSKi4T3EpxbKsoTj5gV9CnUUtojG7QWNZCV6WqbGhdSLgx7YaWdK",
  "key5": "3EgWnxg2ZpH64zWBSH4ppTgeHLUPzuRaZnoaBVAdomFot74fRyj6i5j3EpHAuuTFphG8UiFTg2AsJ2tew6pJYjZy",
  "key6": "2bRRJx2ekdudqy2wcAvCxyTLXypmncLuDG7xPgWSRtvchitKobeqDpJLfLwQoxcV7fNdV8pEkYKM55ag2THPdPpY",
  "key7": "2Kki9GdPsfK5DRqYChZsrvBnFFPvYkWco3tZio7arEXU956znC4aK6G94vUswj4887uwHcBxx2v5H8pd9YyPtVp8",
  "key8": "34W4b3YcrA95ZEpBWdDVBFYfshVpAaKmH1svAZ7mbttuabcAXhzSyfWwuZAHBBkvBxCJFT8uLzHmfEF7KsGLN9wi",
  "key9": "2NcAjgPGVXZGbATteCG6HTpps5g5xBQWsnJD88vtsKdbyRkjSqohgc3cL4ApqjUhkmirddk2656i8CzWDyV3Zky1",
  "key10": "SJYF4HzxqXrdR2ptSfxfDYCHWEco4iNXMSzBEeyEWpxR2vtnb6cpKzshXXr67FaLFrwbHpbGz9PDHGG4J6BxwGA",
  "key11": "55aUaSGTM7kcANdF4cpc51fhSWZ7HRXUUx778DEJiorCbGm3URiM1N1BJdafP3D892xVa4371c8cwM9rfgcNgYeG",
  "key12": "3M3cHJwfhHkfRBnbxJ3mSYtShjndLQJYm7YYkNJuKnpaAo8sTyzjpfwQPHeii1mLYBTQb1PPUT18Jg1DUy9uRuon",
  "key13": "3DxwxGKyu7XWpwDV8B8brVs7RGSpqaQW4i9bf845sU3ToDPV9b7xEnZpLRt5rzSnxh3k9MZYgSZYr2PYnfpEYQDa",
  "key14": "2gkwbCKgHABoruqFnYQL27KUUAtAcjF2csr92oQrhk8eWiR8c9B2HgA9c5gmeQu4mJtHuHrP3MLSrAPKFH8r1dEy",
  "key15": "4Jc3kWogish7KSmbmkEQANfMpsS6R9uUnjTZ25YmuKpAkCztsrvrx1qxP58atVpx8sFAs6wTMFcdu2bcVN5E7Reb",
  "key16": "3eNFpGR6kcDnJ6YF7d89G6A42uxEyigPUaM73fQWNHNsEeKj8A7SgxKUa3P4wjdMiaNacUJHb739hceeQrn2tvGW",
  "key17": "5y7A2xePNQBL9Yzvgooi5EzajktkewuPZSokTrtw2jZU2FCs1eVmeuddbAnYuAWQGNgievwbCTNGS8SpwgjpyAXT",
  "key18": "5Uxa58rQraEZ5qHJpFj61NdjwBTLVms3aZTfUKU5SU9Q9waBXXrGD88jrcZ9K3fH7GPnhGmipJQvzUmrUkV7DM9V",
  "key19": "aHiKNEMwXtKnaBBCPDFVwdvYCRrKqtrfMahvykGwZALBNoEuMjp7HCMACZjaJWjBK8E1h9dhcCUv8aCAkfJhQE1",
  "key20": "rsGkwkBi8ReD9Me8GM891xUeLLADHxYinKGmQ2CnmwEda8oGNFMcZk7fkGZbXgGzNA1ndrmPpiR7A829GnhdzRq",
  "key21": "2haTjkjfZaZUEBNvnax1y4zpm5i733tgiB7XBS6FCujnsFBSMNRAGeb3LfE1dx6FhdoxBW3Mr2JE6YoyohyRvqxq",
  "key22": "5febKQoFHFPwcaxg8qMhtzhcP4uL9fdkf5B2QSA2RTqPrQQsmX4NY4W88npY8cjH5PdVr3SRbXXa7VUuTBSNQzjn",
  "key23": "2cqnkRBTRDWA2kKrbR34RrD4am8z8XoPQ6YV56vJEK5syJ4cgFPrxY6Pak5hRBQgrnBdbt55AtyRsyU3WzfoWmXa",
  "key24": "dPFYWwRp1dx2UxuTEdbpJatuMHUK7nQ43XbQ8LAnN63J9BtqYZeE8vKy7AQZZKct7T7z7aja85Hps8uXdevUUPm",
  "key25": "2o2x9oCRSgXYxJPYNzTAh8BTfA3EZtpBbSf6BPySbJBbvptiRxFxoGmZEhaYNYPgJwpkrqCmsB3vMLvLuFkjakdk",
  "key26": "2yiE21jmgBR6JDq3WnUihtBUzMhjyc6SuEVeQRcWjFMeaiN8PanCarSf8qHruSRr6gnt5RZPuLRJJEApBAaoyYNv",
  "key27": "5DsCXtcSdqPPK3wBydHx1s35vD82SHeKjBRyANPtaumS3sMqC49BYF7thSfyHnABzx24caCoyrp58NUCwBptPf7A",
  "key28": "4RXqNLb5KY8R3UZpR6KixNpBySn8kcx86D8xwQivef5v5NurvN2zNc4NBxTvA7cVAfyYyUasQ79Cmn8fk6gsnYHj",
  "key29": "3tnrsSwQVz77W6ewJtVcJUGyrMrvxFeDU3YSeoTJrVCxdppkAeMXxrSZhQxjouuUFhJVdH9u9yzLocDyYFeHxUnT",
  "key30": "ygm5mbQ8PkNFJ9fdbxYtzGH3v5k7eEhphur8S4HQWBf2RXgk7ZZ6xETUWzDtoketpDRWQ5xUvVE1H5d9PdgMV7g",
  "key31": "AGtsFCfGb6wh8zQbWQSJ2VphGoKv7ubj571rauBD9gpxp3DbZoaWyNd36TLQY8CtL6Gj7Xtnnizbs1UPY5XJ4U5",
  "key32": "PdWEKf6LV4xea9sXJjTFUhq5ZGzfd7NuXUuyx6bDFmdn9xK4Y9VGEbTMQD1Js9R5i9tDpBXoUzYD3sPH3VRBBGm"
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
