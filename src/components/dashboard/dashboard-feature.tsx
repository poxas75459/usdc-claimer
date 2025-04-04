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
    "42GaxuDPmqvNG6wptL8k8jaQhL3E2FWzC7LjvAj4r4UiSNwzLLzw9ncWZ6dEs6yg6EZnMra4zQuahLiAk9ugpcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MnKfA9edf4Uk5oXoFwBPguzChA8FNjxBidpLC2zZogv5M6BDS1fDUjnMBrpUuHZsnZ8hkkXNH6zESMuTUt4oNiJ",
  "key1": "5zVJ3JhDPcgd4BdTp2jM5ZCmZQUUFL5vbrYfEDCRuNpMuQLSrkQxbBtwfVjrkq3yvJoNM2FUWcxa1Wbd2pFpS6bp",
  "key2": "nY78kbaYP6WFcyDpELpKhheb2qAfFzEMMwKkY7hLZpnbSJqskDsBSASHrUJbzMiuvaqiZFHKYwCdd3Wn6MCZmJb",
  "key3": "2sPzncJZ9jGXig4gz34QFkspvJfrjFjVcbPtv4xzK43iEQcY41U7Q8bg8hYpTGf3qZbmDsWF1ktTcNs1re96KH9G",
  "key4": "4dQsDtsweMghVKkHrrR6eJuc5Vp9jrWj5P1brkTC2mtQufhxM7A25VvYmE3sziVCDPZKGw8a25p8b3dPaXjG9UxH",
  "key5": "4QUyxSyVzkqWoq6qt9cV9jGKV2xh23L6EibYDwNX5bNJzeNoWNbVin9NaHfnoQsi4JvRZVuVUyVPUFmPQ8wk4e5C",
  "key6": "66sX1vwPsWCGV8ScLFdnuLwx7dNrhym33EZpatEkue3x76oiE5nf6bwhFeFMZd4bjQZRw4ead6iAvy8kFZpfDEPD",
  "key7": "51zA82nrryC8cQvuJs8vbPPvVyNHexCkXU5Rk7HZ1oEMNanhWB1ix7aoAJSqRyDH2SVFPrxcEnEXvHDjDUjYob7F",
  "key8": "4w9xeW69rseoEZ63DoxSrv4MjN63hDRcqqQYJTeYGwtVeBTkS1FrZ9vaSWNkfDjrqd2ATc398NPvvSJCQd6LWLSW",
  "key9": "3yY89BViAZv5Yh2o9DVssXnD4mTejNug8uc38VCnM97A9YVvC37Mu3GMTBsseo79Z69e8ThXa7vNXadKbV7ujETD",
  "key10": "UiYJNitiWRnBkfMKz1ncwcPj1ruCQ8wvw3e6DArduYyYMitCUCtDoPqX4hNz9nGYHg8PCaA65EjzR79krF52HA2",
  "key11": "4d52uXeJn2ksv6dmH6BhD9Wr8ygh7hHcsN8H8PGaH9Ua7AttVo7sotpHJQtvfwzb24RHdxiRNczVhAaEHVSHNzZc",
  "key12": "3VKFCqgrKsDhtCPept9v9WtEysH4bgYosja7vbeZzjWcyNJ1an2oUqWfTqHeYWcuDyFi9RAx9VPot1iEUWCEabpL",
  "key13": "3HnBvDbPhMTB8sLaKFwp76J9kYWUJuzNhLYxjn5Tnj5qa4gDHv57sikQzzBzs8PEU62Qt4f4P4eYafKrw99zLjwv",
  "key14": "GXRMGW2yq7GugdVk5DshAy9BCNouVV1pB8JNYpj1yQr1zCBhiFLibKs5D62mx8rW2v7iyJF3QjZMRzF9Q99HXub",
  "key15": "5f6nws4JCXEDUxZyjPmFaX87tUbJNdTcWY3Y6HxQfjiaDa8rm6kQDj9saQJmgYAjRd7TdzSL3YTXTVPXa1WSoeSY",
  "key16": "2n1xJzCBsLS6XKzFBN2xk3EzgjV9nuuDfdT9pfonq2NHenfL9AYikfpT6QM4oQWB5HJTR9KpaaWHXPfsWsSyfff6",
  "key17": "2vijYgJYFrxwGhHuHNRFhwgyyr5GHfY66MTXtzgmjhdtTs19PqXXVaK5FTSCxYEtBzDP3RGHFSJooScaTavra8UX",
  "key18": "2SYqxSLLmgftoY4yKEJmUK9JhY7CyXY8WrPVCZunP9jv4KuqC6HVVt4ykjP9RaamiADe3HyZkpYuUWATVHRUfxc4",
  "key19": "3YSHx3doggKdifHpxTZK8pdXNjnP4DpHqMSysEa4uZtSKGsFRQFubU8ZXahq5siGDxejqyGVpsaK1sjeeM32h2g6",
  "key20": "3M11KtG9H3YA1cM7ZRmipE2AavG1HLBw5ZJUiMk876P4HwWEt77TMybhfd9nGiHZNsnbamDBH3Gsnabdh77CDeSF",
  "key21": "22DabAZ4oYBgL2PtXPaVoRbTUTndyizD4u3XtH3UtDrkBX7KL9qAantexwe3BcD724eJwjAVdZHDpSnQbVwPuKV6",
  "key22": "2TxbyHvtUV2kLckPxKDqJaRqSYAHweJ36KYPEuDziWZRNJiRWJ5aC7qJVZYdiFkR14AKEJ81ABF8Ayxpi9ays844",
  "key23": "4bhfDyXmUpJziZk4LFMR77VFUdYyEJGeb8tsTS5X2WbEMSofwMf7p1kmZ7LXCvzjW5Ppd194uL2owvJDwRVPLV3f",
  "key24": "LDL9hf5gRLqzxaQXUAAE32tgecfBbWAJ9UpzUYsSunSRh4gBg14ZKfnEctBTmcdHxQDS2RZAMNtSSDzk2PmJD56",
  "key25": "3MPy7HJfdWM9uNsWKrUsHymEbLGp4WP5qcvCKGwajeSoeWwUyxUrcsczATomCwykscsVSbYrxvP31ugYaawzduL3",
  "key26": "3sXYLg1FzbjC9e2AZXpyBQdHiZYjVP9XKFJAXnKP5LR5fMPQj8FfDjBw9udtRWfBeky9siKLkVF2qG8R3EkgzWx5",
  "key27": "4Y9mfmP93s7i7eSjycGw2fBnogwDhRs5vRijSWb7G18X8oV65wafiwSnFfjeE22ounoRXLQWuACorU7epq4oMWLj"
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
