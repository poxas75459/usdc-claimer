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
    "488QiJMX3X7f6R75aWicc9aLUwNwmeJsdoc3Ek6nreqsrtmuvSX2v5bsQMaHkhHYxnTarVfkX1oBUrLKemXieckc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HzAUyo8pn2xE1VfEbUDwmMMdrZr9jwuUS9JS6jkXPutxc8v2yax3cx6HFirago9tLVjFXhmM1sNQZNpRTLhGW8H",
  "key1": "5Vd87vM7kjRprPitUktPMutkkv6vwPz28HMG4TnzvMc5vBzSman8Ki8Ai5CGe4hjv7Q5yugFyCSSr9w9EvjhfBC1",
  "key2": "24FtHRobdRAhpFD68gd2ZPwCjC7gkaE8C4ckivGhGnmHMa8D7TDLjoXyoKwxdHz1YPM5e16wcyVjEwjcDhjhz92b",
  "key3": "48nAtCCzQC8U31EMhS8WSzoyqvdFbBn1B9Tkh1SS32xbK6EksZaPcgCjPTi8JRdTTFGxRtagsnZRg8fgGVHHLZkq",
  "key4": "3W3MVoiMb7wsPTmYVRG2zJoenpGgjMrFgCWpuDQjFMPxV3xXTpYEAm8shij5kcgaU3QZLFoFTS3zmSNFUdfqTLkK",
  "key5": "5rYNzEENXJ4j3oEJ46GUTzZP8y5pNXdKZDoZLh8XunxymxA2mQprdXZrtkEviMpqNUCY4rdzwDsa98GMBR5NPAGx",
  "key6": "2Q7GTtDThtDRwiceTYnKfjVkdYtsPwnmykZKPLZKpe7FaRfmduLbtSLrfqBwuGcJgGC9CMi9zmA56DFSvpnF99GM",
  "key7": "2KypBAZSRY7BPa84EC4HgtKzPxV6KHr88yG4kv8cMr9e9ybz9bBhsL4kXuGruPEPeNQDuoZJ6hY38e4pVeKYLFqd",
  "key8": "3J1rRfGkSbjrmzxkgFbT5Pyhinp6DR2icCCTFahhXckPwH94pHuwVqVyNEyzMzpGeYa54kh5tupvMbRxmQn3xBnj",
  "key9": "4EAqEoPvsosuCrsg17arcUUVWvYCXjEv6Qawmposx8hQv2eqK5wgGUDFMfT6vBe9JaoHWYheS8jM6ucLuSS91bHy",
  "key10": "65arYK8M7Fz4Z6jZhGFaSPaFiL4A99v1PmdC9PdnydEQYUhCzoSBFGSbVqCS84AbXFG9t5ENj9MPkLCUrzKju96C",
  "key11": "3KkioP6NCV3uDMJmVpsyiQzknp92HzQGH3tGsHvzdaTofhhqaGQkThTiYZLGyog3aqya4r7SZUMSxrHLkxUDTPGD",
  "key12": "4d3QRDjjr31amf8AJr2emfZqotFY4DWMdky86Dikq2hHzB8W2MtoXRYkmaayigQxCK5ygEC8hWhE9TpQPgRzsFws",
  "key13": "4zSLqBWud8CJstDYxBP5Cvq3EZXmeDwW7RCUAsV9UmjAva3So7eKsbgWnroXidTbgzKKDF6KquTaHihY4aHigQc1",
  "key14": "4WK2LiXtNuqgaZRq7HnVra6HqCpfgTeWSp6AeoTf859bZfaMEkXSkg3qrBfZn4oeBiJPUr6Z75UYYSucYGET4og9",
  "key15": "RK8GEVEqpWh4P9AntX5WkVMkaeQviwegbeuiNZREGkad3A1iLrN4PkwkFgWTHgMNnSaNxDDp3Jn8ZZT2wdu4Rqn",
  "key16": "4TsUrHA7DtTiC33CKDxpNv55RoVkLingo469bR6YjL6jpeDk4TCT1EoKkpsfCCPEBaEWj6hZyu3HSeeS9ugjd43d",
  "key17": "4dh8VRoXPYZGQpLMiu7WTtdDE5G4T8bBfTXtFvFR6vWdWAXoXFWEdQ9uSdh3BbnZ2ufV8BWC55e66ojcyX1SEj1G",
  "key18": "5bbmZMeZQ2AWtjvif9ChrpHSd4TZYKcNf3Rxh3j9RFyrJxTMxqHe6G9wYyaGYXv2mzx2wNeuXh21Eaf7ogHxqYvz",
  "key19": "3t4fSfwjhtExZibzywkzqqt99Q7cjrE1rVgV1DgofbTrQBBK63tMYiV752Zn1HtMwsbtP4XzJ5YGjg7N96HWcbo6",
  "key20": "4Kx314qD81uKPChhkKq9hMHyNwURhFd17VGwWVS16jDVQEtK3WUKTrEArMeKuSjp9vf8et8mHnm2DxijSy2P8Db7",
  "key21": "2Dz2ZnA5Adodw615Tywmx2YQ96VYkwgvKzVAKnApGrU7ibgwt9ZQEVpmbhHGcG4GRVb82D6F4yKAomvV5PMuT2n3",
  "key22": "3R2wpQdCmweW98kF3cnA2F7JcuUiKDUWLgkqcYSm24oki7CecanqqSYBRUTofgFyws77xRQgdhyfYqzhDkHDvWUq",
  "key23": "4MuXnyVDmAc6YzkGchB7KDegLj1EbEpeTyrRBndzRyuLWJho3V4Ra28no8SbJKobGSZXbBPxPkZEPv22Gw72QKzx",
  "key24": "638b1WGyKpFfQsnbv2rUdQJJqY3YG2LPovgW1bZQAb52byJgYwzs612txd34TgWKsvJKJm4bDmgt1hMX99zP1E8D",
  "key25": "54nk3md4kFadM2ajLCHL9kWRBMDHx5gJrfeBAbxWjY8bcKmZzZoZ9zJD2wQz8griAj3GaVX79deWnEe39ohmvHwQ",
  "key26": "5seNpPN1wJ6hYmMj3eVQ765mYkKymPpZyLRUD2ETu9iF7c2SEmyNXokrt9wjJhqPz8x14p5xoB7YCXAUwughe6Ah",
  "key27": "3ZSXUYCi9B1QjLXGzpYA8dhSXTTDCrSDbdqT3HS5CYpT3Wz8rAtUabEVLx6FFAWyN3ib4YPK1uW2F7PWAkkWcSmB",
  "key28": "3RC6XHYvmHK2Tb3Soi7yXHacLVTB73GMkA5oQCiJyb8e1ZEo3gFJoaVgw43vGotdhhLTGGxLMDtks7JqpBM44gpL",
  "key29": "4C2ZDvbqjRz6B34RjCHr4KuxFECTYFvsNfK35PihtVMjyRDJ7qJV2EVneUGhtfkQ2YiLZbuZzSS4j2zsTzd2zhsj",
  "key30": "4vVtAhJmmKHrq7tdYxQwtFBPaGmkSJFSkGr3Yi7hjgTvsF9Vf7H6N7rmYHQ5FqR5UsJykYyXWin6ngfDa67d98Yb",
  "key31": "2xpEq6d32V2xmH3UueeP4wCRNUnK8KMX8cVjaydkYgVfVf8NStdQHRUnYJaUmmWoyqrqki7ed8M6a9SH9LyYWoGc"
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
