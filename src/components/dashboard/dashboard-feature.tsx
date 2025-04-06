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
    "3ciGjDbu2ADNoF6mSdDCLnR5LP9NUMpH3uzZzgibXgzQR2UrK71B7AVxveQyuZrf1pxd7XNweaGfxTeFmfq4k7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pBmtoXYrFRaifrfgRHfAMGhMEbB8W7neMXJ3dCP5V4TNTRsj4TAjVqB1QVLhFxyTWMZNc9VCWXwjjoPaQwTvdbo",
  "key1": "2oD5SYXwY4NYiPTqSG8cv1Cc9YguAGvbPiF2deLikGv2iB8nsUpNvecmgPRatYe95x48ZXZUJzi3LokJ3M7rjzm6",
  "key2": "2JSn3rh4FkE2aby1ons6LrMi43rJtb4pxuaZwcP8VbSH2pko1zCJrqqpYy7RXCx2v8yM3JdqmdBM978ijiwsKrZi",
  "key3": "46oeZmjo2PEESNGBSJrJWJLPiUtaJQF67sB9QpDDUAuRRAXwRLz87myucyfYdu3XuRKQxpXjDAMRGZ7TkivmpYWT",
  "key4": "5PfeHNVhLUGDU3Twjptocx7RoYiN1PkQnQS7rAkqKYkh6HXFJgJxqiRhY8FMGSySpjF6L34C45iykFrYBA9x78Js",
  "key5": "5TB1JBzYR1MP3eYz8JRiWcKayLAH3N4uncQgamYL7NEt2KVGYmaAtrJRoYXocCBGSxt8WnZTroq7B2UaJkEjwini",
  "key6": "3ygHKx8HKZNwfpDj9vSWXAZdxn2vKjUGnKgxNrGdLsYXbTBgqhFPeRLrSR4mTRUJFerGDmkrDgFA9YfSUCwEAmgy",
  "key7": "3pA4pAAjtHWgtnTyWaQWMGHrqhrZUV4MTVYFcpLArAHYQfRM5eScG9hKG8QYfryWBRJJfkr1FqeB7RF6zeMnywhk",
  "key8": "3an4kPhZKfWVcZyPiPb1NH8eVRYFmzvHMt5BqrQisAMfDHdPhMA4Y7s3qW5SMf5U714ArzpX9BGZpbhn9wG9jdDr",
  "key9": "55jAZy2LeC1fk2JcgW7DxyiwS1R3GPosuQRsVWHdpbWAuxuGBhLvVvHYTxNFVqmY1JtBpUHz4vLbc7CuCozSx52t",
  "key10": "nwxQTnxniprBSxnTknhuqcjj1xynxewRQeEAWZnia7a8HRD7AmjFospaaU6j2ym9Xb5bzh4PMaspGaKEhDfinTi",
  "key11": "Lnw92NwkRSZ7Spyi19TW1DZ1poCpqu8FNNboBa6fpn3mrzfaHYEahtqEzf3A1WMKn1FjkjToEmg9PJ7Pi9gs2nF",
  "key12": "33KH5BcTw5TMwN7ocrTUKJzJAC5gMMYEkkFkqqFsG59sD7G79gm3szNPgUUPYeygxkpptYmw6akqxWEs2Q4o4pKr",
  "key13": "3uGLAVx4dcxMPny1waeMRAgTswVHAPW8ypzjbBmcsuDz8MrHj3ULmtV3c42bSjC1qvxp8LzQEiq2vRqUb4No9Np8",
  "key14": "2NZFNhfgvemHwtut8YQoNrfkRzHtVq3D7jicqsdWNfziwt5iEw6SiShyTgBnNbgY6HsrBuVtfwYajWLhCZFCLDVW",
  "key15": "5bxwBxMqnXUvuGsSiX5WUPitvgsSCcqp6Kxo99uP4PRJKHUAuwQzgnjCS6j1iujFnTxPX4CRAzMBGkS6msEkVHA5",
  "key16": "5TGM7QeCsqYZx9aiv3tYPPRfvBzUxW98d5imnPjRMVH6eXcHMpujpCuLhU3v4W1wkXsfgDYbsDx8gGB63Y6bK4hN",
  "key17": "21Q2rN4zy6jD4Zxot2wNdBFXZKj3xsNVWMdXwPjb41AV1XGfod2apqP78Z1zGixFWvcauFWpa2EVVfncogjuujtH",
  "key18": "56AMyaQqKBFWutjfaRLfvfohvHQeCBKmMgDRpetgtcMAvS1LXQt8rZf3BanV6DBQoxGU5pbmPdUuvBauoxk3RBKi",
  "key19": "5x9Hh5HBFTw3skF38Uwf5JcU9Tuau4caiYjrjGj57vpTofCMqT6rAzTvPir8nEP2vd78HgJxvzTAQjwv3LAGhAzG",
  "key20": "37TFoU9MZPCZ4cPckdAuiTN8Nbyy52KSWVn5A8byG29zRTaj6T35Sm7FB8n4yVf415nhAm4bn6MRbqoLWvrZ9GCo",
  "key21": "4GKjFTGszdgH1q1LxgJhJDFmWxw1SrEbYf3khPPM7MaiGsD1r1NzEyEpnZC1qb4GU5R7G4xVTREGkxaU917HmB2x",
  "key22": "5nEs1JCBpfg4QBSBkSP59WeUj8GM9w7ow3je2LmtPiQ62STJUf95BmSn36MR8suF6RZkApQ4qgxZN8XxATkg2BaD",
  "key23": "2yTVSCSRczggopmGPDqZBEDxmkPVPYrpP1KaD14TpD3QRTSgt6jTB3cYg911qpB7ZByeREkjuVkhKKQtvhW8gdgG",
  "key24": "31iUCfmygrxwNPKVZUCvWRanvRC3FAYG4aSvEudrfAHTXofYfn8vJ7iKaGjakGR2qrFwgv679M4cuiG15DpS3cRR",
  "key25": "2zXYcKg1wM1bU8XNRU168NoMM72fcbNNPvuDfJ8MGVuddPmwW9TYEp5FL1HLfrniCzpJKmqtiFLJgv7y7B3RAMpv",
  "key26": "2KQPPncrNGHLUU6SQ9PBE2DCb9yJBWmVxfRy1tSqfq84nFTL3U5aLsA6KBDDrHNextMdYtE1hSgCZAhdyyD9LHBo",
  "key27": "B2imkVtmvMyA1bsMx33GTngJ5C9KFoRZDNz3ovaEk97vDbGzxVE5VFutCg2VZSZG4KhMBz6hPaQSsGuhU9iVqdw",
  "key28": "54peFKVfmkFwPkkZzr2SdiMqJ88C9zUtQk4fM1ntLJtzy59aoMRxhqqEw6wd8vFxb169zARApjUv8NbJgmdpcQtp",
  "key29": "5NKHZjP3wy6h6xhMbd9b6D5X2yGwBXwgwXX8azpCZtsGYNELPwCsPBQ2nJVPZGCibrKTxyARuxhknMRfZyW2mHEJ",
  "key30": "59n6reyQGyuf4y5raXDRq8aRwQ5YqWFvHtfDNHFjXsohtT8S59AiwYiDrzfMYYFkvrUpwqBZLoHpRYBypmTsYkpm"
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
