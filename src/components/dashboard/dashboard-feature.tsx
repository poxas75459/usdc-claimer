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
    "4EpuQ4nVQPLYJzSPqFsUuYEh19qpfwaLd6KSv6HFyZ6UEDnCBVnrHHvqpe66p6yWUmSFbws2L8RyoLVBhGuyw6TM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AHF2bcF5HWN8i65fYpJJ4XWT1cH5CfKqdngq4jiGRqynJLmyKSxxD1VQ7LMLBWYYa2acVPWKXPcs2xdWGGSkvFv",
  "key1": "3MAHhR2du3FgjqCP7XChtrMobK77fBzjte4d66j7fPMZ4qARHPnjV2hJFhsYLEv26j4MSv8KzoFoLNQLqn8VD8SA",
  "key2": "38qDmto2TkQgwaJdvUfNupXWs3Li6fa1HfQpWWyCNg6vfgfbnEKeoX9mBFn9W2D1FBS6aKd28iSKBJe5SHRBNTi6",
  "key3": "3VN1qFG32H4J4ndiP9egQcyRW7vVZK8VXCx15jMbyLPA9MujBacm3hL7nBkcGjA2WtnScWGCLKqA5qcakqNk6tVk",
  "key4": "4sk26mB614jXWMJ9x7szWh2RtvYCX3zk8iDK6dG9ZhDTwdX6tp97RP1jZRycErziZXsLgDDgbwcaKuEqt95Rg86Y",
  "key5": "56d5zQz2rgAQJF5SrEgPm7L7Gq4noYSHApZM7S8Q9KjbsFYSQeZaHZRPai8bdLoRoXYzfbtSxRYa92iXZ7i9B2vr",
  "key6": "32Nss7unjJRZasuK3ig7xsqzw1GqG4SGbnoh4jWYeLWKSLcAybb8RhFMM2DnCi4PR8c1bvjRakw9fXT6sZURgDfe",
  "key7": "4EvburAHXPsm3JF9JgUfAuuAwtaUDV4a2LiwFzWR4DhH8vfD2kBACMEDcJUzhKmjuwvZP9GqCpcZxnFfLEKfBQg5",
  "key8": "5JkYgTA2EKrZvM5k6JZyyw8zNNtmNo4MMaHG15NdNprxH1rsjSz3dqjUG6uhDGUNx11RpcnSGHF8243HZjjWs3k8",
  "key9": "54Rwty8MHptEyHfe7aFQzLYjC3oTfA8UcF8DuuJKhkb8vRWEdL5jdQz3YDYLJpkPGtKyUgNsMiWG4qgDsAA5CSFX",
  "key10": "4VpsutoVF3pkZSRq5KzqfURw7pyUwmPYKbEco9citoUWc2Cd3d3aX2pZr9qrMW4aNRgwcDqZqiadZg95G5b2xdXm",
  "key11": "4THt2s7TwMvHP4zcJxdjKD1dJmyk8VF7LCMPKH5hFxAFud39jhKGwn35Z9GXn5fxne2Mbe8KM2cQidRSu5VzneTj",
  "key12": "3PTCjhEP7ZP7WQnjYJVKx388wNubCKU6BD4HLCDVge8g5ahHpuMtqBC6eWk8K5xDzKyg8a3GLL5pDRAV5VRVZpQo",
  "key13": "3K1y3uZqaoSviisS763wMGfZipN5BSHktxKRiidFtBGGUXgGtxBEAhymMmEK9ScwsYvZMi1nH8fDzgUi3YK4DNXQ",
  "key14": "33WLkxhwKVD365vjsDtM1vFiVC3aZG97LfZUY9jBmoXKsZQRDzixjjZK2ScSskBJie7yV87Yhz1WD8QXPYiDLWpr",
  "key15": "5xm5op739yEQas3G7AKfWYJ5HfxKhVm5uugFNZxQuXSPPYNg8Rv9FYokmYnbwkofTt1LiaVcKHA6xqpBWD77vx9w",
  "key16": "ysvDvrPTRRnnAugYx271iXXoJ6LNzJYKfLr1HW9xsFGcWumEwKj2NWu9bYhVrECgGBFiSMTVSLTS9Qh6Y4AeneG",
  "key17": "3ZFsjSKdHCTomjs8cffFcjuEx3A4JTmRpaFEvXUVTguafnPJbPs79oig3pR4TJKbaw1vd5F61Gix7XAYWdaZcpRU",
  "key18": "8fjeDcQvQjhWBwabmf8JxrMUiUb35vF26s87K37RysyUE7t3Pcdsqka3gHxafVz3sSwqroMjftt2RJfEfKnNRT7",
  "key19": "3u23dXPTtbovdUh7NDi4Yksiw9dMW3VsxV8BTZJ9V4f8ReNThK8XeqrD8vW787j26jxy6sEaHUusXuwLqgLQAGby",
  "key20": "58jrXm6j6mZjnYTWS2dyMEjmxS6HEEbSfZ4meRXoMgAoycC4WWpJLkHMABupyeQz6n2k9SFGGdP8pCJ2WkFfAwL9",
  "key21": "guyctbDQp6vW2MbCmvW23SQCvetZXYGKbjQJ2x4dL1cbThfCXPM4bkx83SUv8boLS7CVJHStgHW4UcSD3KPtFXs",
  "key22": "4S2xY5N2shSYu9rdNFUQcCtWEoDiZdAdqUyC873xZ5EVomD6qrmegvG39T3gYgUuupNy25hP29NLhm3kHHJ8NKCx",
  "key23": "3MPcEvhaRpe4jjSj9m5UmqqDJgnNkFssz7rbMQhM1UtyThvF21syewFWU4gNmaz1QdQvth17PXznQt9LGk9aoqwD",
  "key24": "2exFwkRxaUum3vPgvGsAC2E9fA1wPMuRFyY9H8nmoXAyX9JwmVfTe5H6K1SRay4nnvxhS6FbeQSbfcTy4TTYyAyk",
  "key25": "2zKkpZkUnxT6dwdqw6vtKoSvrfH7i9dfGSoJeMfHr9huXvrtcKXBXUYcdWPEr8itt9dTYcntxtZcbiaG9BNhyZ3k",
  "key26": "4ojWWEDqTJEZySYoXQsFjFWxpPq3xjzp8nAs1Y6S6aE9DgWFEuoiRaJ4pogGCiLqPmvZP1LmeiTCwoS2Kpb8xf7T",
  "key27": "5hpaoiszhrxmLF4tc5QyBqg5m75MsVQQFduVXmxxxWXXKombTGMRasxym7RqEx1idMPuT33BgnqP1U7FqWZbZN8S",
  "key28": "xbEiXzFmbNUguDZMWtuKys9jMbGpGDWSkBDE6a9g9qoCGyVPxYi6zfAv7ZzCGgcaBbMpmDvx8fjepLshd6jzN5g",
  "key29": "44WviNAGF2ypdvG5F7VaCYDWvqq6KXJJg7dfb8GAAzSocrYRwb9HnjjTw6bUFwUSLDu3znDx75MLhwSgRxjAjL6Y"
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
