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
    "4vWxkKmHJMXqTkJmcq7npi5M5CZEpqUGxmGzUUzevS1kssd8gFtZ62vXZwuwmzwcXs1vLZ3zTrar76Gc3iyUzr5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sRcUPbB3iZ9B5x5P7wgUHQ9yZFgghj9BCoQDJvzPyCjdxL1ZRtMrpsiFH6sx1TUMFXpHtBXGdCCh7BXwN52adkE",
  "key1": "4g2oUTVQeZzcFDep9MSx4Z2mBrRx5pSn4RuFKfF3Gbotd8TCS3FGhTFGD3prGMkuEjKzN3daTaLtoCTwhTJ5fBKu",
  "key2": "2XUpR3aTAyb9nMiBmj53W3iGzkvNE9NGGbdz8tKVdn53Q1c9AoZ4uACjCuXKhLmwchr8srjtwLoyYD8qBykpCs1d",
  "key3": "kcwgSqXMCvouBCPpy3t2FRtLK2ZM3ZNHcMCLEduH5DCADViGzLKArKADNRofJByPLN4G4eVC3YRUZ4pzQBeTdww",
  "key4": "4t4VaPfiYHq42CeevYG5uwwyfwhC4mn3ae8FRKLHCdZHW4tzv5yscMdxhYW1hwvVzpnfgyNP9Jrb3xmcKL8Jjpnd",
  "key5": "5uujb4Tdqzhn6wLXtmqhby9DgfVHV7yGqyBf6JsATo2AgMSv3fcuwyqRwpXMmcLq3vV8vibohZ8jUWLMAMZQCocf",
  "key6": "54TiNZKfEUJugbNeWxtSmJs5mXU2od9tHP3SMTZw8qQAPTLFrtyjNy97YRUeyt8G5M7Vkp4z6RFTnwD5aMxkcAvb",
  "key7": "uyPrr1tAUTXjNdiXsdCQj7LZ1s3jtj5vgAt6Y8yAYeJv5cmdDzQRhe6zmNwpjS21bbG69tr4ZnqS8AL6uNp6XFx",
  "key8": "3Enne7snKehAyEW3Xbv78L9thZ47PaAG3MJyGjLeACD9fz6p7u2JcTHjMGtod4AiXo93AnEdjhShC3NhrKvyDHZG",
  "key9": "5hu92Ayk7FnuEL93koEDfWeiNwMHe1Eb1oxZYy8vWiZXvu1WFCUJ6siYLwuPPgcmG83hJ7sv7xj4ufnYukNKjFDg",
  "key10": "3kXhkvFgkkaYABC6r6wDjFnViRFVW9zDGHFZcJGbyADmRbftE4rW4qAZ9oHS1svbah6ZnTxJxKf4dUMtaKGKZogf",
  "key11": "2QSbCUmMR7FMGwSQb5hPH7zsTPonL3DijrH66HwpkejX9VdVAjxLDByix31PqGgxd3uBxjazfiYedfAo6Hmrcxav",
  "key12": "tbm5xsytwhwKyoo8vMkSS3to6b3G2eXfFbX1VeGFb3kcCwh8Bcs48gLxMrdoboi6MpqmELxaH7vq9ceCakhncEF",
  "key13": "2JgGVgZgtbUFZg7okT4UkFTcwrX7jnJ5cM1YXKxVvbVG5BxKAsRs442eKDSaRscicK3bb7fw2MrpeGJmkt5XkccS",
  "key14": "2KpAd1Q9qw62Qi16SmHicwj3E7dfFgJPAEG4bBtHmYU5wq3hsj5L5sdHdqfCC8eWK2TQ1vfLED7MjRqR6VtNm6hN",
  "key15": "2YFzWy4VJhephrunhESsfw7wwKNNjgGS814joXwBfEsp7bJpEgkAUQFpWDmjcvRcyNuNuM2qideHBqt22WbPGRLW",
  "key16": "3cdEctL8XbzoFLGHoV2gV48ZcqYQbetWfVHiGLwtQMEVWbNYueobRcnmcw3iDuBCczXroj9DyEgMG5uFH69ZvMnN",
  "key17": "49PJb47n6A8WsUZjQr3U9eWArBrqkiNBiL7WmwkTw4Qmnjt1DouCcfxWWrNHjb95mwxttnt47rN1jjLKYndaDdQz",
  "key18": "3oPdKVun53ZWd3j8Bf5qox2Vdyjwczb4S3NWfw5z8UwkD5pVSBqkvu1q2RZGjmaSqxUMV2oXxkodS8mC1k8DCDvT",
  "key19": "438UCKYui8CKTXFBJdPiQjbBR1G92EoA63DUawh7osicr5KtJS1owSewg6iVoi8fm9dfWNsxY8gFjeTe9nvqmzym",
  "key20": "5dnQZx1zR7xs1foavaDtE8gnwsRTMGEqEgKAiNJjUtxNBw9aqKvZ1cYpkFafpqFFTN5zGqgedLeT268VFfL6j8H",
  "key21": "64gTxsGKP7PLGvmfzfX5qTLb4hJrqP3hfFJMNSHTPMezYuxpmjbxHh2EeANwKGTixjr2hqqsbpnggrL7755mHRZy",
  "key22": "4dWsTmRc7JNbYRXAtCH2sM4pVgr8weLk4zH2myz6m96p6SzRR4TqzXmh8HffwbWRitjEh3x8rd4KLZCP8DzBnq8K",
  "key23": "3cSnMscfU3CVbu5hcY1cdurfREfxFwD8VQQZd8VkA3AKvazeYjEfiw1M7gxSmnMbyu3zUBsfTy54cSUdzzkKwNnp",
  "key24": "2LVbrhkYE92saanvCFR8zsEHVEJ4oZHKyLQkA5BhFFSS2xu4kgEyUUm6fn2DGLs1s2TS3j4ZpY4oQyDj8JjWj3eH",
  "key25": "2J78q4rA3qDZMG3JEF8LezWKRkayVQ51q6W3ZLA2a8TqGxX6UohtmZcQXYs15TsQgZrHeLYcyvqgyxJMkM5Aqeks",
  "key26": "5G73DkFeR5yQ2ePoS2F36WmXvMyP66uvGiNYg1w1MfVtvHNe2rZFUrRJzvCdvoUBe6VTWQdcToDsLWHAwYww5zGt"
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
