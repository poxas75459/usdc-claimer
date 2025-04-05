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
    "2AcJzNiou16pN7Ti76mGgHgcgrn8TWecfwWfEoL2kFrtPLkkwp8b4MCvVKGmDS76ey3xKNNRe7HtfTmuqz6qyzfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26zGmtPxDWp8H5jWcjt2ruX6yk1Ww3y6U6rpmQ2FPErEvCy8Y93EdXUJMmqkXPhXQdJEv6jSxgK5dzaSSnEKpNBC",
  "key1": "VJzJYJyP9hoWpPSppzc2yJ1uKN5Yye1yxXa3LdjeWscsy8ebSHw9tBCsN6RzTYiCPmTFuT57Q3st6JBzr3x2ErT",
  "key2": "2unEZoGpH5odALeHwUr7neces4BH5uwadFHG6FWH1phWL4PdJCfZU3ApS5diL1GC9PDd573KkMibd1hT6iCnTvg7",
  "key3": "CKDa5HHbrFZEGb7is9K6c7JiViXJ3g7pALhpmx1rm81Yed4St5sCMMKTTuvqYtmRkZPiB6S9okg4AcHZN6qVesL",
  "key4": "5SoCTFZykdkXkDZrXeH79majLJoTC4MUpnr3cG3zoj1xxspQtGcge8JTNxTL5znMJTQZ8gaLSYuJAJrGJ57bhuTZ",
  "key5": "4ntAFo4vb9rbpyb4ocx394ZyTSyeiuZHV1USGQYGJ3DpjiqTwhdtQS5ZCazjjuyNhke2n6HssSxRjNDHvZdtXoi9",
  "key6": "2n4U6LEe7SSsxfCDy5eXb7ahwQQrWKQqkSiuNX9iTfoXQ93BY1Bu1WN1KtY6PRCJzwjPnxuvKDmdACdS6vfeYiLE",
  "key7": "ibvbtuQ1rJz4ni73rEeVQwEWPRMPLmmNBFrhFuYrPaugxAdCpNEoUTDj1kitg3wpCeBUr5UoAHfmJA5Q5qXmiEJ",
  "key8": "5Y3gfgqUAAGBSNAtZR7Kee3St2AUSgaDj5p9Ma5HGyMHcBNERDjV3iYGxjTP5xxxeKAAtVZwh7frs6FMLJjjaLY9",
  "key9": "4KmVinLhFGQpc89fj9K9Dfm9b2u53iMpoHjL9Wov6wVFs9W1NdkYC1uXeNXvkKvAP4ywWB3zUP7SSktxM6Lw62Tc",
  "key10": "4LeJ2mVApKfv93BAz8cZX8VK1jjKnXniXX3mNZPgRBufkXLy3c7JACthQy18PRneM5HnhzTtBrQNwwAarhTc5kQj",
  "key11": "49rMqc6NUB3bCEYaadKT7mRZigEGQbQnQk1HqbsZ3o9pcLEk7owVgnJMJGqei9wda2fJAvwUFDR3fARUhTd9C3JC",
  "key12": "3X4S8aDWftDwrkanK5xcotv6X2RPqKig22FU13yUSgTBJe1a8it15DNAXWyfbqLTEUB8vDAqFKh8GXrVtpa94ewZ",
  "key13": "3p9vXrh5tipsk688JjxKuGzqGzi72YvagwM4WonkGszDyuuEwSostBvyz1rfPQnXPou6L13gAAAZ3SYwHukmmsBW",
  "key14": "3v2ujjk2srgokp1tm1CjAxkeHEdnDkYZ9bji5UU4h4Cvt67MehvgsywUHFvibZaAqaHUtZkdaLpEPNNV8izhXLz1",
  "key15": "3gry9G4pSLMecNSRLAy5mZ2LDMnkiUeov3TmR6Xwy3ettTL4hKkD6PRinjyczanH9TuqwL7t4DMwBDrtnuk7FqQo",
  "key16": "2x7vTi5S15rfTvzhXrubNEG3KVeLykVAmtb6YVaw68cFkg3QaTVc5Pa9R8Ay6t3uCUSNUxN4xzZw4yvvUvGBTUhU",
  "key17": "41ay6AudwCNHkKEgKGrNG8JM6FmDJk5NM82q8TDXfN6quzcAEuEfKFD8dwcgdUM2nQp8DZ9TQr4AzZ5NrxBSLEuQ",
  "key18": "3rUWHBqRmBM6hon5SxCp1C46Zv1CRurcsD2ugVioLDyv9h5osf2t6tnM9ehcr7MgYfBmjVZZmsmcBCA2q3pfjxuw",
  "key19": "4jzzG5rYAidKqx1PqUibk1H29Lbtt1zE5QZ2zMasKgbavvEJ9BtyxPh16oEBQxGFuQNtdDmg8MJv69eZjDnMQDha",
  "key20": "5N1yoCuuAjeNhwG3cW8St8gxhZUQRabVADvj9B5kw5xa81vVLFSbFfaRd8BusytLeBQJbZZYYyTZGHjXJjB2fgsQ",
  "key21": "2dXEhzxNt8iHRKkNE31pEircgnBEorWVuu1PgQgEBLapqYgyV9EEgnokkQtPgfDpvvqCYp4kUCbkWej6LY7zvR39",
  "key22": "5VaFVS9mw2w9XrL2ngvoGmDWnuyBnkFvkNknGb6FzPsYA4YJfjv6RSm7xzXjJKh1sNK4GT2aWYKbokgLv9y9smdB",
  "key23": "2hRdqB2KNMoZZfJYx7z99dGgR8bkDLEFHb9PXXZ4eDGb9SvgM5oe5ZdMdXcj4RBkUDz5sMeaMeR8uMjey5yRHyoT",
  "key24": "5QkMksYDW8cXdNjh2vYCv5yue9px4pYeVuosXtvnr9PUgPVdYNTkrnHJBhkPPQAta23P8F7Dd23BSAmJPFyWvBYg",
  "key25": "3zd2bKrbyVZRKbjPnmRzWfAGGehi1ZxGotjFyBtMputaa75H8Va4msx3xqhg5hfiSi1ib14Jc2hPWjfN3KTsuRDE",
  "key26": "34FPkt59PhhjSjUPEDVrrc6gGHeEpm6tDVNFmFQphi5hTj4HJya5X7dLxhyCduPfioUvtWSBGFEpuaAMswa43zAb"
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
