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
    "37kmdAedWnAaYQDcpKLvCFKtNYKtpRTQrSBJq4EeaE9HbwfH3TQYGxMDwasfCMf9t3Fq8MtyGxMqVRDThWAapcyS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28tHhYhxbLVRg4agiyCPnrSLkey2RpZpZ4UQcxyd4raA3AVxe4x1xNDXbvnGSu3RsY1f5qPuuYPKqy4ke3cnP7Pm",
  "key1": "2amKZG4EKp4M4HHgnZohobaJVf8bq6DmYLiYSQavYX4xP6CRZ6x7xDWSYZQxzsMTLB84bzZDntqbhEY5rfyUnBWg",
  "key2": "4qNJxe6GyCYdLfncYQxtMqTdSbRBQFSGz1Dq7AjzkTmkF4MXme2q7Jjgwpi4nK7GD51Rv2dwvXgnKojgJejWFgxv",
  "key3": "3rj2nJjke7QcMEZo3YPz47pgHG9hku7jhvQr9zj4AdtVRaqRaEmBFVj3AcZHY9349EQBEvLGRC8RZpTK9REhfPDq",
  "key4": "5nSFKEX7ohLXnRfnNgfq6jQHQtjPXkenSVe3kF1nz6zN57ojqaoM1p3uE3t1eV5xJqrG7mJwkw14eESS5gmEPxUw",
  "key5": "5VdRD1N5382yfYDM4HLzWxbgB6o5vE7EHCvEpPHx7C66poaRd6yPXWsdFjqXtjQXTnHs1SXo1VnSQFtnoVzuTsLh",
  "key6": "5Rgfg1evi9FPgNwUHDT5ySfZhUJUggrXLkVUWo87CmzM4ZJJMYo2ttDMSDVNenvPPwYXk8L4uu3ur4XkZxkEY8rL",
  "key7": "CSS7up38b1xYbuycim2qQSNrNGEUPMAChikqzbMCQa9UGcmE1wXrCutR1ZybVLjnPDiqEZKFnMNVpi5DrHWM6Am",
  "key8": "34AAcazUEohyX8d9AoQcaozwhDpUrj4k3GNznknkNVgWZqsCEoxACBp9gaM3JEQNbW3RU3fiJHhWoZ2tvGDvWKcN",
  "key9": "2NFvoR7rFVy2BEBVsDBmk37RQyFJAZfHimyPf9S64CuvPTAkVWU2ejuXsTve8BuAeP7wPeDN7vDNh1jL7KWnbAPZ",
  "key10": "27qeCJYDuhTVPzM34vMMiVUWVbKuqK7iXSi7x9r3cHBkcqYFMLwniFBvwFP3ABJK4zH87TZsRFNhXgFaXP7va2rA",
  "key11": "24NUEuehTtU3kQXJ9ntFaeghU7UpwmwWKqWysvukjaYVzwZfKmWP9pSqzrDQFrkGFoDD86uHUNekXs72nZmg9peK",
  "key12": "xXupthQUV2eJ8VX2mjMNnEUDBvoDwQ9R93Vjp5UodpaZRn1y4KkWGT9z97Yj3oqjH2SarasNxwijeqDzpedYZUk",
  "key13": "4k7HkwN3Yvzk57PULNUkBCFbxD5aX77JiGsq1EwsTJ5yTijMFZpjVbvF3QCeQhj8eAAKo3ppskDPffFqg3BYzAAY",
  "key14": "4zCBw5H7mshJ35YZKgjhE6qzT3srVXta8wBywU4MCtxVpYkSrUiHuosKhjsAT1UhpogEwmw2UqasenrGFp6WKMtP",
  "key15": "3to8ZJmPnogQfYT9Wnw2XgrZXEnDk7L1zJhhWsa4r1fPX4ZBHLjZFLkRaaN57KC48HWw3U7PQDQKHNjLiKMiAG2y",
  "key16": "3CAfEfsTdCC6EQ1EjLYaodeNwGLqWgM5MF3i9HsTT94nST6D7cXJQnYYGNpxPmoWUp3VR65CrUJojzm6WPXfDRmX",
  "key17": "2YV29EqPU18jxPBTGTa4fiywAYWQAUywNFZQ7HKPiPru6GgpYr5ns5fF8nyWAiAwnLkGGyEpdMhFfMNF8kBw3ZpK",
  "key18": "56aX5hJ5wJQcU5pfMUuwaWUmcVaCPymh9q1LWXSJiDYC3NzERNTAevRvBbpZZotjdYsXuLqtTnsoDjgrnbJWyWn8",
  "key19": "2y3abH283dVnEGWeQcCnZGo7A4tF2EEyQjSF9R2uaXPTQKXCjg6iVepbAPRZU2njbyuQ163NCTstzZsp667r4aUX",
  "key20": "122GMLH4nSJDaSbVYS4hoMFJsTj87nPoEK2KiAWiqnq6Vg7xA3nuErqULJvM1b9XLFKKF7xup9hh1a3WeFFcA6sj",
  "key21": "2KWuQXYFuvjxAgm72inLbjABgDraTnMEQv6CuXBkh7QxMiE7oTygRoWfjdnjot7YSPmtih6ymeLraw15y96hzLfx",
  "key22": "5pnN6KRPMypahSZuhEUn2L9a5H71HAmKLBV3xkPTaJybZozCiLpY5UCXbG9KxPK1rbftJLo7r9QCvafdMCQYfzDQ",
  "key23": "Df98hkPCxcA3y3a1Y5Cd4wySWt4rjCUzQkxD782Y8gZMLXsL7pmR4UNAQZs5K6TcCVtPQLXaA5361JwPmANbLeM",
  "key24": "4hMMaaFPRo9aMZLYZWudspLynUBuM4ivUbX8om44Kws8mbagEH7CbXmvRWBJgoaRsJt8eHQZPowyFYsGxpshRSid"
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
