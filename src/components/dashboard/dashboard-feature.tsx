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
    "rYMoSjgrJApb1eDPdWHNAUcEHXDCFj6ocy8cTMPQ8ikBqVyy8XNFfKbENMu2w7THXwRgG9RLwTN8Y6Linh61ebd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YzrENA6ajDjShSvxd27z5U4LCJu9wpWUeEqgKUH7FEj6Twmk45sUkJBXBXCmhpAQyTgyjA2YVdWbgDFp1pxFwum",
  "key1": "4Xr2ZvaeGawzTDn4wjcxjL8NByedbuPXpEdtXm7BhhQV64K6rofz8k3BFaVJd87Bsg59QmVh5tagBaLAbhYzZNyq",
  "key2": "5wUnDHkyE5CHMu6gvDQUowFVHrfQdS3vn1H3frvQq8GvU5Ym1dprndWZfDhjCUcGyuzYs8LSF8P2CcNC4CGcMUmU",
  "key3": "2CEVfC8pXr6FuM9Lxbw4ogTp8soF2XTUrpTDxPKiRUQcFmXK1kkM3Z7JwYRXeop138oHWJdJdnJbJqmnwdUavkeC",
  "key4": "4WRkjzUrSGmYXx5Q7MjfRRriUo5X8T972txQuETaXLERjD8Zn1BQHp7xKT4y3K5CMrJawYQr3QJerG1xTU7xZi6U",
  "key5": "2Qdxa48XzGP5KWb4q5gfNan8D2YHs6FaqGHqKcF6kVuoHud6feoJuYMcN2U8hN2Kb3bbf4BgWqvNfXqQviKLkELz",
  "key6": "vBMy96LVRiYB5tWweP1yUtRu7ENCvvY6oH7STXRACReXNzpbm6dhWUX4PBoAX2uHPAnr7XEUjg2UHG1Ca1VXZdx",
  "key7": "4WzNUwoyD54QVx9DvGDdPcPWzvZnMR2ELqfNe9pTGKr662gX4ywh6uY6X13iuKTNS1osFJdyhsE6PFQTmdY3yaee",
  "key8": "3nZ6ooEMsmhqqDAEq4NA54fNW5qsSrAawukRNgcgNc7PKJyhfeRbt1a7VojoHy27mgBhC95R9kEMr73aHMdHAdFT",
  "key9": "37MqYcJpRtXzpXG35CXkTvcJoxW9Hovh98cFyZskb4cRjoGnGkvnYLFyZFMDaxbSiKuT8PNX5QHLzAdkrkGh3aTJ",
  "key10": "4Me3mqibigbyKf8ncVVSs5KU6P7xYKDRgjwJ3JBRvPEYWy7h8mx2i2eAAs4XnHcaWDw5fPCuwXY7SRqWcKLb5xdP",
  "key11": "KnRC7majm2YB4Dn5E7qJW8aF9Bvowh2QkdjMUphYoKsjqWCcZzA8FjyqC6SfEXaHyF2jToQxZLojFjLEcTptPiV",
  "key12": "7FGpLjz1Mz1yQj59jP4oZJbHBB8KPof2wdMfQuoXrjQzouvTefP9u42pNzg1HXf57kkbQsyri7J432qGTXXuE5V",
  "key13": "4prCgbL82ng8itAtuH2hmRtbF46CLJdWxFGL9q2atWKPzwnctSVjAhRKy5fLdVbUDRGKRUuCtpPmXjdVLqNvvpjc",
  "key14": "4uytfdfEK4c7mwfjpNseCvK8to8WrUAuuh6RZLVY66xiVAxny2gHcNBc5g8uyZtiq4mbd4aBDS1GLhHYXharG6uH",
  "key15": "4ozQyNNnYFkxfPU5GERZEucu8Vw7p9xsaz3zrBCLV23vtMH2EEb5RaTggzGoWVK2zNyQoax6U85s87WAgdCWuA9r",
  "key16": "5cJBnMDoK9ZdCFFt9LuG6PRXXrNAZRoVxDcTwN1Sm4iuruT1Mg8hyJzo1aNTafQMFWsEVwYmRKn1KStNHQDeJwFQ",
  "key17": "4FagfFPxt8r4SFMGLVjhddGAVgTMsZH9QhKuaEV62uZgkxQvXwBNNW1zXYsmAD4Gn1vp64CrqthbxtkLw4tcNbtV",
  "key18": "2TAZ6eYr1QjhBTQWgpxDUsLeNdjKCRbU5Gztiwr5qmrcg9HDDohX3z5Y8hKKTSME5KLv3f3f44TA5kNUf46tCaj2",
  "key19": "2u5FE5qXbM7XV1fL1EKiNntFnGtL2S9ukgD2Vx3CDW6hNXEE7NVvHXN85toZYJ3QBHX93B8pUiC1x5Gc14giqA84",
  "key20": "u3pCRhiiJD9Ug9DAwZSbi3cR9Mr43k4MUMSV8DNaSt5WyPPEBf8Cbp6kq1Bg4fAJdp8DiySXyqdSCBWTk2ChnRi",
  "key21": "4DiFVh97LG5UjMZZvgLGZH8m5hivbKaGji4Uxyd8ruzv5aJeHM7UxSKo69MoB64D3mgzzkoz1YsBciaUtTYtp1EK",
  "key22": "215g65FcKxR3f9WySvtjL4wRHdLBSTgi541nUn9HAYQKet6WUctBL5nTfjKqhMjNAiggEF5jP5t8DWMfvPfzkrKB",
  "key23": "3q5Hb1Fg53keUPPfmrzFzF2YbA7sUXdV1upazqeK22wyf5x9HZTgtDbVDyzZixTiyCAEVGEM4au23GiJsNfoY3xU",
  "key24": "42kNE3JHWgGRvCnpHFUx9Y6TBZMjnQcv8LidNswTZAAmYx8wZ9cZM5Dn7TnDXUnU4MajLNiDDEeB3jPsTvkPKpGP",
  "key25": "2ubf4yfU91q1EQovwbzwEEBmtTz2zmM78qWvvWw7YeR96pdhNg8GKbzTWmWGSz29qxzxmi3QDHSd8CY1ZK5j5Eiz",
  "key26": "ZRRksmwsbuvbHsBVF9kNRnYQPrZTYA987nUcLq395kh52tT3MZeudMutHszCNhtCw5iZXvgBTFhpyNGYh9Ai1sh"
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
