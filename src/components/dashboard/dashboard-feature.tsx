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
    "5zD2eo96v928fP9aB5NKdPZMpo88n8iYkH8U4gynVtcyXdeG8Qhhw4R5H8iF5a8WBWVtVVJfohDR4de3o5GgPgSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mpCPoD3tLusfNHJasXKNptCBavUhfw1X4N3wYUrGC2jPG7zP2JfSVZbBMVsTLPQBeFf3nVeTNG21xhaZrZuk9Md",
  "key1": "4X6Z2mCKsbM2gxPN2Qde4yJrPqv4US237deeHzLgs7RqaMtgYvqn4AiagvA8d4XpNSQwzwCPGcNf5wu9vzJprGiC",
  "key2": "519vBxqH3sz9KyVT6Mv2qeEEfPAv7Ec9SNW92NprHvVArYDUSA2upoNhhzut1xZcWteFbfE8K4Ppt3jxQBSgkgbC",
  "key3": "3M7MqcXpNc9k61s5GKJTMLWpW99ShXY5KMhjFb4WfMuqzUoc7vNmhEug57FNyakmemXaQYhqz6qUmYMtg8asaBaL",
  "key4": "56TwzpuzqJhTqMKeja14QSJQd6PCmSxnLm86dixKQp5f1knTjUKkusDV3vXfjXWWGrTsuRCR6V6vFKYXR6FTdDRW",
  "key5": "2JptAFHBZtFhTXqMHKAp2p63ARtKrtrne2wqyuXdwhLaV3mx65TjmupEZwM3TkN4wKrFS6gYNrAdN8894i7hZ8RD",
  "key6": "3N6EzjLhVZD3vVQ6BMu9DxDNgijV4MMmWrXMdPSfTETp7WUe9Q3X9ddx318p8f8GMBrYwMKL3UVydEjBfCK5sqXD",
  "key7": "32KxqMkydXS3kvgH3tbrK2QYK6CcrDYfTqFs6tyig7Do7hh3HutfbTitBioxnmTW8KgXF3Grdi5dhSGyuhQ2bHgR",
  "key8": "2zL421EeWTGQNqyLGR5rqQjRrd86gguHDyGWgdiyA9h6i68Tzrxvhr4ra4Q1X85VWKZ89iq5jv7sQpoQQtMkbHSq",
  "key9": "65ted8GptMbxzPNmaLpSpZvcRDzR1GCYXxWoEwsXdW4ZCPF8PwBQAiK7fMrJmLkGAJ3PsgHc5GtimU3GR79e6nCB",
  "key10": "4pwBfDQFejm3h8YHRFeEhzriMkeizFHDuJbaWxVtMFyKqQq2NK2xXrbPmzM1wcR8jJthc2XdjqZj2Kfepc5Ya9zY",
  "key11": "2kQ8PFCzhn2CCnJvvqGYi174CteQetaKjLe1EoXguijZzjXXvR8BVWb2qHuwQHszcMTZkLpTNaRd8KzvkNP83mpq",
  "key12": "4TR9HJLmccg3SnYsZJS49UqCQbAj2bbtXJocMu74Ey6tuq7wR6E5y3Spvh4WQWpUFxEB3D3b5JWKgFHh4HizPERP",
  "key13": "3dbZp2LmXs1QozYJnuXyim687AY9yd3RXbuKeSaJLw4kZT7hkVdHxDawVfwrV8VjNi4SJCFojm1tCHG2n1dA7uPb",
  "key14": "4Eo6KoW7QNmgmhc6SJZfzCQZwfwiEascogSkLqMBmYSBQnuPuNDq6J8QfuANQPXdCZfnHA83vwhsvjbnWjcdymdS",
  "key15": "3PVCmPNDU9F3pFc3ccYJ9mErVLLpQPpE4kkc4aNtA3j2iwxhCbp73eVkBdoFrwy5ZGoJEfNrMXaMu7Vyp5kjFLxx",
  "key16": "66tJWFqVKxyMeXhoq5Ttm6YQUSYz8C8S7wDxKnvCQcx4EhpecFNyJYExsVrLC4zhzs4aVKsnZPS4h1Y3gXPVvKU9",
  "key17": "3Z7YKWi2Cs7tKr3sD2qXcg4CupmoQj6PYRbFJXuoY3pbLzQRfKuwLCFrhQaTq7bzgfv6Z1SxkLxfaDG7caAmQsxb",
  "key18": "34sMT2jaqc6B5D4ECJoUPwhPKzndG4UCsimDGKwiwU9d4u7mP7tX97HyTYQ9xAchQg3aCEzHExVeruUMVBvqcfG9",
  "key19": "2jNtrYtKZGzg32gtMk1HjPEJb4HNXKrsayRGdWEGAv15Vd17ieLpfmwB27NU6z2xmH25BpJ42QskkeZw1L7H2vsy",
  "key20": "4cmNSGYpxLmqbJaVSGDdZXbCdFuUndeqXH3D9T4GDSrLf1rzqU3cmv7jvk9NapPsEAwDnyYGKoD3PdypjijvaRiB",
  "key21": "2pR1mUzSD5r81pQy7k7Mbej3XYQGiEznfJTxdswkM8y9KWWmeW9fMrvP7AcDhjcJVCLguJrPCfXvrxonuEb3Kczq",
  "key22": "2D4wyYzXcAkj6GgkUWUG9h7gHt5rQa2U4mviWR5Jx6JEzJZpkE91qt6NkPy2Dx4jTkHMeNbRf3s8h4ybB6r7U2BN",
  "key23": "3qA8oQp1BdHeGgqR1PKDBD2VSVQZNgJTJvBZZkFju9dDpKXdUEPcijEtPHJ5J5mVvniDcdkQ2D4hDwFvoSyJAWji",
  "key24": "tGaTEC1rZncGVzgr8Er6xAqUkYkDCxeXsWz5qKHzvD57KGpD8JKKfDt5YDUrjU6Fhv65Z9WhqWprnqGtoWkyDRT",
  "key25": "3U92cfDbFSEidZVrCAgYFansVTx3CYYNjPu4x78Vs3wT5rv7t6bx91o1kzCS7TuSFWn3uaKWyouzpfEAQxsEA4Nm",
  "key26": "qSB3GztVspAAtF8rgcomrrUnDXB8d9XD6qcwEfeMUy1UbHcSErenkQgh7iA8DmgooTEzS97Q9kfJQRqwEWJnnbH",
  "key27": "4bKtyzjvk17CeNTrvn54G15mRW77Mtx3UtgxYSqYuMBE26P6CRX63hvanS1J48gMMR5h9Q3QSavPMkRpWWLTcWZx"
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
