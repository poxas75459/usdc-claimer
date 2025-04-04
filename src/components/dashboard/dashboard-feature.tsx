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
    "3xfeLx5WkWwKqr6CJFmPmvUZwWP61M6jgUxYx1izFbQ97GcuBgvb52NxS12FcGLh8jzmJN1Q1rTsdWKj92PJhuYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B3R2cpRsaZsKd3akyEN2rL3EgoyF5QmHma44ow1pKcpiTcfe7yQAwvpTmbymPuALzic4G1opUtfwpEX6eWw8FDM",
  "key1": "4VLAEf4oWNM8quXL4LR9QVSSJ87CJdEyoRsczRLS98mDSKaALPoeMSGnuCVAuACEeXEKpZfMpXB8hbPgsSizoqeT",
  "key2": "2bPMLaZ6kP27uRVYnRWLACib2oR3YCg9FrHrrDybuEYU7pm44yvFUig5yjjnVFGkpyTnbvfwNtN6Bkax3wzUZ5Rb",
  "key3": "3baM5c3pZPEpZe9Db1E7YtcGAyZe1fCVFxGBDcHutzk1cA7cnKvNjSgKfEPSK15hsUGFhbLnmvGYcA5tMGvgw1AW",
  "key4": "9b6NFiy2sWUtR7jyF4F9cuWXpTXy8TBZoJwvmtACs13M5zuib3oUynE2TwSpzcqYTTSyWnLsrpGNFXaFHLxrcKs",
  "key5": "2XSTHA4kFYWjG3cLdrceTeetzBPxAD4vewrUfsez47qhZ8mvH1HQ7Ak4rm74pqugFEaVeAE4GX6PVjYBhG8Gx1SH",
  "key6": "PzEMHxUm8d1zdvSTDMYJB2LqNVZS9LZeSjjCEoEEKaJDhST7UCMsteCig6ieYS7VadPKi54p3MmEVJ7WN4a9erM",
  "key7": "515BE4epC5g4AZo8U2HsgQvAW1EyF9B8PS34Y7RPWm2PkxcVskQn1f9LC2w8WrB8hVchj8kgeMdvXb9MJZpDdrcD",
  "key8": "4PPGLrtnu665MbdsiUMSxgRarpWLw8iHqDaEUv1CPBezkXgNytmNYSAG4hQXUhHHyJtGo6A5kvdK1vwKgtwBBouu",
  "key9": "67Z84rSwXorrV12EoeMY4bWqdYyW7wtA1TjrzQNJmDfSvgNm85rufwr756p6LYbujzss2GGxxuUjhLisFuC9d8bE",
  "key10": "5mRetBCn9T5XPnhxzWTvZQXYQ1GoTCa1NmrpTu6hH4ioZFJ1PbwAxiZPpoQuc3q1rS7FDTQSF4TF9mrUQ6guUKvu",
  "key11": "3sPShphTNaagw18z1fQX9LbPD5Lki96kyCUnfhu9pu5LEdea2VGhW3zBUHXkEHjGfgSagfnwu8d9CrPx5hrw1nqN",
  "key12": "GX9GGa8ovfeeagcjacod2oFtfSJAWKLBHioxZwamN3aVuPZeLRZkqVxNpGAKfzDyfE5N7z8XSahWstYaEp5tpeD",
  "key13": "3HgEMcTC7rrDUn6QvpW8wQkMGNmogMuMtLMzykff6EZcTAZzKntoHMkBie5kyA8y2bpRgnxtbfAQ3kUx7cUEgAsp",
  "key14": "4V7J93R6sA5JdKH9SudEKTd9wby4EsVFowismuBhdwmJ1scFi8Mb5dAEKXjskYJW1fqUK16ZsgGst1u8rfsqMA8g",
  "key15": "4LyKXHJdiw5fZK3Ye5DwVhRnec8fX8XnMNvVLTrKZK7HkQM2RnqvYcCqdHYJcf4ZX4kT2irSe2z1gxPcWdzE26iD",
  "key16": "4qZboLSsyU18b8wC2xoV1x9RQsTj9gaWxrpcbNuBAWSYoVduCVDvn9fPB5cZH7ddVKqcjqa843qk5TMUxu9P6vo3",
  "key17": "3n9EncvM1VdqBfw2bWRKUHm5LRbz7czCXvK1hPPVKxkE4Dps81MzpaUD6dqLJVTqRHrS3kHuKE8tYPS1k71RW8ph",
  "key18": "5DexeUkC4rqubPViW9D65ti4TGZMFonvWN4PJXJsicivcMD4NXHs3WpmySNgSWot4KaqhSGivgpofuMAHC2dntrX",
  "key19": "5E9fWSZthvpnieR9msqkNhj8QD7Fk9UX5phFzK16zXug8q8u9yrivNaBfp2YGont58WZ6Mghq6vfrdi4xCwEKhc6",
  "key20": "4RFgTUmRjqy6ecBKg1dkpUuMtUG1ykzZLwzQgGnsPoT2txnsgNfQhR1psi5qMjyMp8FewMJAgEEjLJkJbjMNFX5q",
  "key21": "4EGRExjTc74tYTnfEHwNKWEpQg6P2xPBTG1F54SfpQcF7fdMptMNDnpiahkgr9C1fHhdGiCCiSxvet2397cw2KW1",
  "key22": "5dpRJhv13dzvzA3uRibtgvPC1gJmaGEugSvqsBC9azXStFUnFPfzdw6HcxGwP2x3A7jF2vyim6NXNejd6x4yBE44",
  "key23": "457AMt5Uwiq8NefbD4SNZK9EjyvbXN7kiBoCdVtF97gUN35Lf5M1o9WvwXnCvFFu1mXjuVmWL6u6K7TkWR6ZiEA5",
  "key24": "5MDrM4u9ZpfNCS5KFnMR2GaixFoxxKzxuFxKcZJTTvJFNchsHqWhcWh5zqJXkLXBbAh2vzbjHk9HJNzrK17SCN8F",
  "key25": "57u8TrpFj4SR7atKwQ28YnNFoKeJKCxuQwaa3VydgyPdFhqmJdpQccwmk4KDaDtgMjcEpeEXd2YbsrRutqDpChZd"
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
