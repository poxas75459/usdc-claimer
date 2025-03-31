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
    "5PhT3a7pzwUSQRsjdb4eyPaWaoCYTEmgNg2XfAUdumyZSmDboAapLKPbp1Lxh9DDGhXKFGqH7oH8umyCytF7ou22"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29DELLB2xi6XRaPK3DJ1L7GYAS2wULn6MFPAdr1EWESA9CG3g2b7KsV2grmFd3wwnodwj9DAKk69tRUiQgCS446E",
  "key1": "fhfZhyzm5y2rP3TakavCuyA4nzJVhkRj3EDhf35Y8sWkYjqjtg5Sd5KxXTwuMkUFfQHEwX1xsuLwsum1G2iUsjA",
  "key2": "5Kz84ux26PGZEgnKuwknLoMspufmpddGvJom4XZRZbU6snrv1yGaVeoLhYZAVca2j6QWDWbhZFRMv9HM35cu4H7c",
  "key3": "3rKWYQRXjuFDH5HGxBwbibmYANPvZZx8oyADDbHcwmXRXk5Fgy3kaDkZHMN5W1nxpvJQFpNmU8rVwB4dLT9ThXGB",
  "key4": "52w3HDeoEcRt9ifidRAbGMUeGKzyYPJSodc5NAS7Y8rv7mLKzsabD7tktWrfrXX1suFy23pEVqDeTwRfu91RV5hK",
  "key5": "3kRC4679M4WZ6JZreWono7yKXPxEsrT6q7HZYbxJ1vuCLubtxpNRS3YmfMtoPozFWVL7Az1qCFB6dwrDBDeSn4Ys",
  "key6": "3otdqPAnW8NuSpN5KTVZwdtAkfBYmifWzyfzogcLBmjTjCjC4i2QLq4dKAgjEU9rsokMw1nL87aDwDDTV7xADvDg",
  "key7": "2mSEEBfNxixT2QPW3LQAJExBn3FjPDdk3brZTGmUr9ARcZVY1NsLyTvAddRsAJew78c8PGjMU9M8ofSR6fyBomNU",
  "key8": "3TvSChi4iA419LyMX2QkQbqH2ahQK5VZDwELDkCR1Fnr9c5UFcrNAZikbee68o7SDFxLpaQWNRdemh8B9G5qjTsN",
  "key9": "3yjHQqXKecCTjdVKHjzyG7qWPjHpGSdJ2Aj7b968ZvetT5DmzGZFeWXcE624osricT1c6D5W9LtWPkJwRTdFveL7",
  "key10": "56M2xFvVGSUwdQVP1sTnMucg2z4cEW1qVFthJBSjxD3xCkCSYpHqXwGrdwT7tSZKaN6cPNpqvUk3gQbKRM8F5cPs",
  "key11": "4cgTLu3hH3KYFyD2odWwRDHLf2GDymvh15eqzhPW1ho66AbMWKYTTV8hf1rrxjkDE8fUt78hU7ZFamJuanyJuyqw",
  "key12": "2MGdjyLwQrqsMt5ziyxC98vKVxk2yZgpF6eURdFWv679481PPA6PnnsyMtx46cUHUjjXQtkgKfSy83yecF5KicKR",
  "key13": "2H74rARrR6HXPcRRj6mJVFDDeh4NexnN488SoxPt6rn14guqXSXdPdCmCfu8CeboxjyPVzx1gLtghDZx8K96FNE1",
  "key14": "3c7d4oLSTa2WuVjbrfPLNUrjFs43FYrtf1ZSs2Bw12dRnC7rW1KJjxjzB2H584fwaSnVogkzpdMwwJdtgj4DQcmw",
  "key15": "5CBptFTSyFCHbRoFBDZk9GRCnuZ9wbxSK7RNCYXjdQxUz3BqYumC7Ffaj53bEgLAENhbusmR4FLXwMnEQA2dZoUe",
  "key16": "3ESSrez3hDz8yH99Pvco16VL8yZ2EHMSFGNsiWAqcZDZXMsxXSrmiKhHX6tJQj7mVsoW4ZFStVbAapketBKk7iW7",
  "key17": "4hjPZHAYdFffBsEz6BMaMBTUd15TkF8Y6B16mhs4NzKWyLvWEWmUiNdjBpM2W3YvpZRbCF3C8x9mxR9jFRGxa5TZ",
  "key18": "45Ug14ERi8ZQh9i5ETufFfXgD1hez6SNNx3mHrSBHQh5eioshgxHavYcp5LLXPumzNWLRyibGjveSN8kg8U9xTSC",
  "key19": "3uaBtgv9DJ9U4AToUgTvegY2yLzaag9sxCouuZbot4yVyAdi7R6DgpN57oHfzEHzqfKWGxvnh9Jnjq5byeLidmgA",
  "key20": "2BNnJ8sNzgWW5oQrr34HPPrRponj3zqsjKjj7VL1v2ZKhTqGzFy8x6L15y8aaQNH58DnJgHy2FFyBUDRi7KpuGFG",
  "key21": "2WfdrnVGgsnqZ2QvnLGSfjekPRtZXj5TnrpujytTAdFnZr8j8n74LpgXJkTkmouSJ13LbzvHjT5L42xKrpxNZ4jm",
  "key22": "3nmKviPjJY5UrkVKKcNZUEt2KJhWR9VVJj8PuUbpBA9bGr9LtBptrQu3G414M8GjtJGkN7AZ95vRyjS78UW9DFPQ",
  "key23": "5cp6NwQLv7WdhXHnj4g6g96zbL3k8waLwTsXZrt9SS2b79Y9wNqg892F8y9gaTefgJYKCevi8nnFseNBqqwBeQNB",
  "key24": "3ayCi3B2GnZSrSvP92jCpgJf5g8T9Jmz79U8SDyCSBaNC3ZBCaSoteHtB8xe5GMAyCSMrEqZ8iahrLpzYic6a8my",
  "key25": "5FSpK1KJDJqcnZmwbiuq4JbYKghn9p5519Q5TpCSth7Dnwg4QNBWNHytopwnhouwtWnWjnX5nXHXhgviaT2DvZqk",
  "key26": "5U8QCdzeBhB1RibWgGc22kJdgW9D3v2LBE3oXN6Wx9bwM78BzKgCqrvLGKxvpxDsDUvEdSRMvzRstxVU3nAkxvCk",
  "key27": "5Dhe6ytwL6Kqtk3AZAAxP6iUBirz2MUEMdZCf25scpxtchEXhDP31k7hEZqpWZyzfkn1wom2EEdDqVsnvEcQvSJ4",
  "key28": "49UyJoiQUokQ96hTgvTKsdn1fLukQ7twhgYzNMhgm4NZ9KpNFkGZ6b9iB3UFBiupNEB5xBdunGVvA3tvw22i2tZM",
  "key29": "5KT9nMqnq7ukrTJMnvLP5DxK63bpfEDCuj477GYnj46ExhEsMWbaMT2m1xUrEzM3Mxi9bUG2f5dLbVC5N2iub6RC",
  "key30": "KfiipP1Qpj8Dkw8MKwHwWL288oXU8qkrj2P1WP4RpTdNuBKKyhczVresor6tw174rrcbJahd32Yew6CCPo7hcWN",
  "key31": "4vArTc55YB3MrNB9hcbewgFziZaw5mPifadMytUs35Fupfjnf84TVKiB92JJ55FEd3LKwz3NExFxiTdYLdC4iZax"
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
