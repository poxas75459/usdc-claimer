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
    "S7pwK5EvCV4xRqfH8A8U1bLLVnxoNMvac68brPfb9jMcKKjVBzanm7aVYB16zoLGBxd6AQsSPxPaiS3vfytKXcM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mevL2rfUYMNfHpHN72USigPEouyRNqCtvPBVcE72vg2hbnFWcccXDk8DQNq1M7jJpJsiF9w2d7SiqE1rWYBmwYy",
  "key1": "VEu1E1ytj94NNxnWAwoBjQXCdpETp5aQT9UF7j5PFg6oxwo2LAYQvVKRE6Ufm4qftRV6ma15JiCPtiEWUTLVESU",
  "key2": "5kFi3Mk6Ct48Ls2Jus7tEK16N8UpPNwWqMB5AKyZcsGdDKuRb3RjYYJaEijXsq9S3hF3MpxG3YZLj2KV622CNB4",
  "key3": "25DskBcLWkSc68iEjHYtUAUr21cShGAkGDT6ar4N6y5f2kemFeG49zgF5HwzUp3JdJjaw4VN8zbfJBeQwKij97tZ",
  "key4": "53hHYwvC7E5QfQX4szcS4fX3dn29C3xAJehmidgSE8EESw3Buxhc2NxKttGcaVSkUUUgW79Vt8UqvKeTEdDaSFb8",
  "key5": "5KhVhYTtjw3FDtQP2w4p116DTtoHi3GJprjEdqh2rCu3aoyViLrfDYiqPUCepYhiFCF4VBqzGt1ywGunQjmUVWeG",
  "key6": "5YoA9NkvjWZixvkBgMwXCdr5TCZb7uZ6GkdAmVfum21YrhxoxqL8zJE2etqkrXUSLbwvf7SUV8VpXmVxSj6fEeqJ",
  "key7": "41LXNdbirL3a6E4z4Bi6MnStKaMCwQ2fzAXK9bwPQqyzpHqrK1zCZQMow55JLNmGYdReAvprMtRBzoPp7DumEAeB",
  "key8": "2ix53JcwEUgoRW2rSuFJaXefT2eKrDCSCofsiirb7rARNNEeQKYxUtroHXq1jSxV7sNXNZKifG23Kq2CzEdLwTgW",
  "key9": "2JCRjTRbKK3KzyGZsMKkDsDKTx2iaqEmAVYPEpJ8QygpmgSWVwGEyzTYtFbr431JZAe1XWgAgrGDvhPD9JtP3HaT",
  "key10": "4ZXvEyesB5xEBDCByDAgj32PLtqZ4xDjYXRkCYfRWoZvHmmtDArgWchTdwSoSp2ZvdsRHhjLBKBaMtMN4n7qrSPW",
  "key11": "TNm6V6GR48gRcqxicKKhQNq5LEwrwNPHxLJoxnY8CKWpc4waHwtmyHm3s6ob25tVWU7XfHJh7jSaCTru7KPBntR",
  "key12": "2C3xc7CR3YFSquWjX4jpu2B5duVG2J68AZxgPrtB2qQS9tpxp4VcadiQajMsXVAdVY7z8oCskfbP9T3yvG79hZ5g",
  "key13": "4iiQdC1d9aqBpXYrGLdQ7G8HFSNgDvreKqMwiPwPFxszZkvS3sogtAFkRDb5vhcQre5SdFVfYPErapDr7BdF1stJ",
  "key14": "3FnC6s1j1zd7SFfi1J6Gh8Hv7fqDCzvdYivX2cEKBYYte6VxSP8ErQWZSLbjkXLJjEkY6WXzD1CDoebTooR3Wo8c",
  "key15": "2YmNWfQ8r8dN4Ldi6wSGJkf7xzxfhLCqBbZUmFwXxVoEe2Khhi9R1HtGyxVvwLKqKu7K43JQNp7CDDcCFAhkPTdX",
  "key16": "4U6V2Avn46nRHhopu5MoQXkcfZBEtyV2HEAv3qyzGDsryTF63jQ8MspGDaX9pmEeZ3NuSnNS94smgEyz549rYRws",
  "key17": "58Afs7PKnDYtBG67dNMeXFpdczxafLxZaNVNNHML62Mqvfq2W19rWKSqCsDcd7bTrJncgoFx1TSWBknsfeDfydmf",
  "key18": "4cMC3fV5dbjh5pQZLAsafUm7kTGQVcFjqN4Z28EpU4tk2dE1FNpZ3GYmS3TDBbsKHrWL41Jks1LocVjGHQHE4i2z",
  "key19": "2aZLCDuffLKVsY8BpGjN4qfnd4LGFr7p4KacnpJ44YQ2ErwvF1r5HcZgapiEAuM8x8PfyaiJyNRsVf8mnvhoK87W",
  "key20": "43YLFpr5RYCqSCMUBSswe1HAaZfEs6D2MhZKUBXcafMqm3Vbb1TvC5aTaaBLBLdGjWYHoF9iKodyFWoBndGjUwmp",
  "key21": "4TkFyvCrezScJesgBNSBCYDDFhQvSud9b7yDMSAsxwphpakaz2AFKJAQ9qrbssyTjBZRabtfM5j5Jc3nEnN9prGY",
  "key22": "31NG4PoWCAi5FVWk54rkvnnTV2c7obJovmXJzr95rmopgP52VgCHZHbZkAo4g271nSpyuAqW8skzt4Dazs3t9dPN",
  "key23": "4N3nNG7U8d5JX3XqXmMMqP5rB6AKeX6iGmXvGXFqLiJVcrx6gGDHU1E9u7QpQwFowqB3E7msievkNNuYsVu4TaZE",
  "key24": "2SM48xnrqEpTEUiAtzo4XKVZ5z9bp7m2NeCU2GNHXjEVCGjq9bhcfVJm96UgMRXtaF21xVsnhga9qZXr6ffHzGnE",
  "key25": "sS4oTew2wETigcFwBhnjXDTCnJV1DR3kPnDmL2UCUvcrUwUGA354dxQazz6LsmXuZ9ew51FeWncQrJf7WoskjNZ",
  "key26": "3YpSeGZVuCEf66LyrrdKeyLk1mzBGtj4Wa38v2waKmfEeL6UpDZqqSAQuN8zmeHPs1T1a7N4souXRpZBwNxi3KuQ",
  "key27": "47aRj5mjbtcoAAgf27DhnxwVGhkXXBLKqMV9MLmkQ7bEMheLHHcDCPM7ycnASMzbc9W9UWKjtr6rEzNgXBDDVZSi"
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
