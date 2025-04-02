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
    "3VwVYP1KgJ3Vv7W4iTvyKb8ycuZ91R63gQYZq3EpTG3dFvtgVS5kZevEP17JmpzZPpBYLv3bMZL3RsRfgn9BdigA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ffF1GeXahyBKaGetZWbSnTzVnnQEAkMRYn86fLDeSGnNZMEFcHsWNse7PzeJH5r3qcXVDGFC1rbSqbZVUa6kEE7",
  "key1": "fdDFXs62LvMLrShC4tYD6MU3JGspeUUkAUYThatecKAPejLSga8xiyasryTNpphMHPGACDDjzftgUUcZT9WCRQw",
  "key2": "3df5j68iiRLRd8rq6wRKHnkaBt16hWFqJwNCpGy8vET2SQ5mhoEsMw287A7FSv8LEpJKfLgaMBekQ3oJSvXSogvn",
  "key3": "2HTY8FPpGQVHfrxY7x1exA6RFxnNN7sznAjrw1UZ4dJHfPtdxGauirUVkzi2yq3yCaD8KE4VoFxrZDXsxDjZrbuW",
  "key4": "64hHN3z3dgktVYJYAyfWt7X7uGrS2TaSGBb3gGrioxSpqhYw1CpVcmjaTif2qhKJoCxiSNtNXkBCXHLMPVVSwTrp",
  "key5": "5JzKU4mwTq6Wx2zoA6kKsJCpDkN6DHL2qgtUTnjjCaJSArM5Pq5r2NMZwLvEwhUjcgv7VWvkkroygsvNsxUGrms6",
  "key6": "23ou4y6UG7jDS9W9PSXbJuTRPc6qckUn2ba5Xc3GH8HMVZVEFhEDCo84KzbbtXp596P1xMxkoh88U33ARuUGXpdE",
  "key7": "5EPap5p9QoCrFuv7VpPHZoPRfAUbqrMGRMtHG53BXiRdFF4u4pxzE9qz8fXRgMSgqPi1y1myJiQjq9QdVWrEHF6C",
  "key8": "5djtehuRwU9P4Wtc4A6PvMSQanfMWpahaWQ8j2r84v1HAETGv9qtfzfKbEfUWJTuRLowbHaKWvg3ptKeapZSuSd4",
  "key9": "5Q63QPYcZoxzquqF1AKrJHpKy3ufbV9EkdeUsZukkK4UBfkTzdx3ZqjSNDgxrHw4yJQzKtangrUxoR8A73hVfqZQ",
  "key10": "4mQf6eeb6qEHAKSTtoeHpoHtn17DzJCRh7rMWCB5poBKd59B5xTvwuDgFLVyGN85nsJZDpLD6fWwSDZ4e4LioWEB",
  "key11": "4A3EXSvX1NNcimLtHuV5sLECnHAjAKNTLScRTeLWZXrn3v1pJ6sq3dZM1fczj7U4fFwEcQagcmgdsgr7HaS6uAVx",
  "key12": "3dyFx7doXxyZsGrMUKD4XAWj1CR3N6xviefcdyWqvMVCn1QRymqvaY2WPcJGA21cCJbB8uh4ueShhGasxBxuDbkN",
  "key13": "xipYLrhWXqWHxHJsnvf3WsDkjTRJcjjyuHGK2u4YNg484N9r1c8rrxaKWdPgUyZrYz4nF3nGmVhoZBFPAQJspWj",
  "key14": "232QpmK6oxezJv8tHS4N8TGHRbbBEDn56mDqncLFEKJQtgTWjfF75HkGCp9Y9ANr1GredsUEwFXb9D6hK1H7iouM",
  "key15": "VLNUjoJLGUakYALpy2dqzJYggSFueT3gSsdhdXtdNpLhhdNJmSA3do217v1nW5t5jyKkoQ9S4kGD151bGkuuoyy",
  "key16": "3UDq5TCfwQX9jLjuS7Jg7ddJZHPWagMtY77qHc3rT6JqFmNu66MYhJiZsLSCKzErPcXS65eiaFoK1NQLawk84vgE",
  "key17": "2gEDZZcFoZgYK9Pjo7kC4oBqSZKM5MppSJecqYhC2fyAsHayapg3fC4Z3Qm5H4XqUKt9VLwZ8J2LmoUWPgZubBzp",
  "key18": "ytcgFEUtR1XH7QaWgpJjDZea5i96G2jHokMX24FsCsJi3d8keNpXmXDDmswGDDKzYGX9NTMjct3xywSdnZAfGH2",
  "key19": "2q6id7vHQqehdFEX1ZsCCHK9rBnNeUMbxX5kHwfB47qC3iksP9xPCJumA8epnsFWW4dKY6U2hQYZQXoZMLsRR332",
  "key20": "4RGszAZSfiFKEjzJzZH9LVkFErnddeppo5dFkdW6aLECbejqFVbbxMEsYtNTGQ2wZzhiwKQjzmtViwXvV7xNYqj3",
  "key21": "4E9NLhbpEW5ZY6W8RK1GUSRn5X2dr5B7xZ18QCPGgf4g5szuR1ZPKJKdG3HjMobLdRap9fYC7bbGYjrpwqbQeBot",
  "key22": "p2ua6etJr5JCNTNNAi3jSJwM3KMF6QCQdtiCpdkDM2CEUCfELQuZxxxw9NR4F2ZD4Qsa3cRT5nVnwyRQp5sqUaw",
  "key23": "2PiTT6R9vVnhQmoobUjRLS3MrvowsRP5L36ydMAnoRYZCmwbacJ3H8y3byDYHJ9DKdADdTopAiBph8aNE1H7xzpM",
  "key24": "ajHhfzKTWHFBAfHvx9KJWmrTFejCWhV1uTTVk73j5ncxBYvQx84udpVox5xWLafMCXU2DWw9ejPKpVtmbDGm6fu"
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
