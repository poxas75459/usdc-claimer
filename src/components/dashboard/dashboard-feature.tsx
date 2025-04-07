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
    "2BpTCyE5gkL4kfKthDHk7DoLeUkXEccPQ9KP2kkoo13zSqRHCV9hWHdAYE2H1syE4tDuCRBMtLMxztmX55YrRmvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qLtPRDXuJQcnapkt2u1dd3p7amMWZCbSmkGTub3SU2fX67WHqWfx8Dq2PHePEVSzcav1vsnPyyD8uMjYbrqhNBD",
  "key1": "3oimmXt7xcSMFRQxd1jeAjvzJpJez2Gu9PvNoNnGUJ5m8s3qmZea9HpmZGiDricPn8eiyGNxGPMpLbedEns2BkC4",
  "key2": "4dUEPdbzLkGc5pp6N5pduyVNtuxhvsj5QkhgqoJb9DxZZE6uosvydHsKkLkgxVZKgqt8AyaNWhhTp3F6WHLjFwxX",
  "key3": "4dyYH8U6XAVeBgwxzWcauUfEBcBXzFynJv64y5GC6MthVViZnNTYX6pTbhyzzS9m52b7D4sC5EfdbLLFKKkAK8Q3",
  "key4": "3QprB1V22xLYEDrRHeGMybE84SokyUi5br7vrjz28CwiSBdUTqmDkvEyPt2TfYqAfC1N7c3QdVpe7KVUN7jRmvyA",
  "key5": "5ezE6PZzpGvUAZaYdAi65jYatStdgR9wCXd27wtaJ5yEthdhxLahDx8sQErcrH8FaG8AERN8BahJcfTTh6qvuACv",
  "key6": "4Hu48BE7WYexSw7mtvKcM1ovWGhiiTFUKsaDHfDVDeNrZyao3KyB4nwRzf7H8ydFvxQ8oSXXF3Q3WoR3sHUHJqaL",
  "key7": "2WKeU77Tfkesq62igMWZLdo8FkjWkVrpqCq4TzMpGVN3mxGAwLtCVZbuvKC9GGABXJh5Ah2PXESRrzVE7T8kuJss",
  "key8": "2At2AA6RfDXQqtXZJ1sjRJW7z4o45RnAZfBeh5uJDGM1z6xT3ZhPswkhS2hwP2VC7PyuUcequ9D911shB4XgfroM",
  "key9": "G7cMV3RH8Djw9bZJvVacZyQtuBQfnuapgxuCuPEnfj7sFRKRhuiFra9AkbDkjqQTxz81Jqt7jkyk416oeqgWR2A",
  "key10": "3rF6SNo5QuNLeKkXMSZGbuqTgUw4GeSBG5BvMKaxerEY6f6sWgcGH6jLFX28nX6pVuKnxEiZh1buN6UHkG3o9YYj",
  "key11": "2LAsdQYEHhJQKvJwNZZBhRsvjogbMJUV94SuyXTp5c1aMRua5jHssomSuLJxAMJ4dE9QGGsNX46fdzgSLsT6WtZJ",
  "key12": "4Nco6HgthAaJUYjts6ueoeXETrHnnLakRcPhgycNaN2mxJEWGgHCtYWVMR1Puaf9N6Qz7tb5jNUjqwTzzAvaqviC",
  "key13": "3DhTRjgKYBkPRdz26ghbqMktWaEsAz9ZdbHEqDXf6KM5v9yNG4tr2SfScc7ToT4vudcvVgdpsViW4yt4MdgJ5SGV",
  "key14": "61PwC2hcVp5Q4DNr1jhgdNzAkNSE4PLe9fLMQ49GVRNHCyQ2CzVXs5bbLu7ZpvhY5dJADJ1ZuH57MZ16K6hrt23t",
  "key15": "2q22YXGNDFy3cq9EtXaLX3g4SRE6pkqwPLR8tALCp9mdPo8cmWQcjqaR2jiJDLdUu18ybRQrKsEH9wTZeNCrAh7g",
  "key16": "Es7LE3A4H6ug5PkFFCdDXh75XRfMj2bXbUhixDDVdovgneWNJ8mtC5Aavnbn2SVSb6NChSvdJtPKSGFrqxBcpQv",
  "key17": "eZ1s6Qne1kU1ZKaAG87KNURr7xNccRF2ccWupwqgyqC7LyLqgysyFATvu62EEk7m55HGjNhtdfQSdb1CUKC45Ss",
  "key18": "NfJhvR6teVyrkmENY9crem813fJh9VY3wkS5xo6kwscEWArM2RReFTKG6yLWJ2UxGEqbCuUQTDQuywGp167Rkhz",
  "key19": "2qvsQKaZZ6XbVVZ3DzXeHBPS6SVf5yFTpX62JoaWHqi8hdHcmnsqYmW6B78ADmpP3LBs6F4WNHGjmwMASdPfecuw",
  "key20": "2BSrAeHfLgKd3CXszu3tuDs38QjyWTYF51XsExpAthSvEFZNJSEwSgAhWTgvvNsjWCAnnuzBxi7Hj1SZc1MvCzTe",
  "key21": "uqyGx1iHiArqYfXPJxWPeJZVGbE1HWYZqnZLVJQdkkRrEoKPus9iVBmbPrUezNRaL12CYCMeUWsrJvn9tbREARz",
  "key22": "3govX8emdMHmLaFtTiWaNSoTMPZeuGpsWaGRC8nFXvMpSE3GQ4jJa8vhBJ6BTEo9Y3fUwSh8hhyQcu399UVT9c9t",
  "key23": "5poswpm1KetSELGiwiHuHAZYPvd2u7cZ3pYftDSMeMm3rE3UJDhQLMtBT7TPP8xJ4Jy9krwF4hEA31s22P225Hbm",
  "key24": "3raKQ23qGvoavY5WVn4gLEPsiPKXAqUQ6PeSYi6AQmLBodwgWThfAqwP6wNCmbvvfeUZT1LwhpzBRpHYDLwhQcBt",
  "key25": "4By35h5M4NUnxcHjJeoD5X5VLtpDyDRhRbtEfUSJUVxDjcwaxwssuyEbQpfnQXVSqoCdjrYoAiDf6qYeV79FshGW",
  "key26": "4iPuJL9KsyoFi69SNbNBRRQBP8ou6Qq3RMyTTFLncxCYk9pg3V97fDafiqSVwWTkYbAtBLi46x5Mc199oF2YZtJ3",
  "key27": "5cjuEqFqfPxywTEaQ7ndJHqHwUJcoaHbm8FQTv6PiKTR5YxVG4v8jDkJdFkh81tgso7uaJhJf5fxLd6tiPv48n18",
  "key28": "C5w7bbaHSjMFmmxcX1WpkNVYYR5GWYMNFsUDyUtE95DUavVjEtYwm8bbPxfeP9T7HpazyH8pGYbSUfoxwFX56WP"
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
