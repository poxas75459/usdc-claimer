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
    "tBFprebwTPq25PWoAv4Fnq1cSVpqaufzUBCc8qbdYUz7qPBQ7AjBoiuXRFwgFcP69QuzwSJqwqKbWdp9dUerHcU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Da4xrxWugF6AErS2ZBw39fo3WCuNnkPRiCLzGAEeWe1X7VYqWbUpvywJtnpAQsbEkBvoAULEDHcCopv9L29wD7G",
  "key1": "4y3Dder9vUw7sPpbM39o78G4HP9t2vxA9nUrK6taMmZrbLmgyAtzdVKEEELME8RQkGG86EDyg7S1nwooVg48Wypu",
  "key2": "5ELPNupmuhETPZxjGqVP5P1wpMXTFRuYR5mskyAjdzbEB1nNzDCf7h7ntW3mBkQU9b3etnimwkAeca1niKoPSL6o",
  "key3": "2wsGBTzbpGW2MG3TbP9ihsvjfTiYPfYfvjP92aepS9h2LmaFmcrRyJfyM6YQrgB8M7quTFPnYDD1s8ifH8H1ypCU",
  "key4": "33BCsdpdjEakw9mS1hY4Kn3onUyCuutxEfcGsnhSgFZPth7FSg7H4HmcqtyKegfKjX5q3NRoXhL1jv9GQYbWNwLt",
  "key5": "5rfx8qFqv9TERDCDdyjLsrCPGib7juefGRGZvG3GBztZ8UtLjCCmoF762B1xdtBQu5SdaRbqQoPNeXcKJQ5rthZ9",
  "key6": "5y9atgUujkAh4gG3dfELvgxKNnjyTasLGyd8ikDSkx4aSAQD9yDNFQnesd31i2TGpQgMrQ2jbx31X1wjTEKjNpDD",
  "key7": "5G388MJXVsnRjcUFptZEdEJZiKsLx2hkVQ3Rz4ctEqPBPXXhPdKf4fK9pPjYSwAaBhpRgyf3aPNqaPpVdXtAySTy",
  "key8": "5iSPbwNZ79Qc1Pek2QXxMTtcjBCRz8r8Zm3Zfmn6LXJ9VrgZF3mQm2yqooArzzBFyeBoTwZ7fk7wDebymx5wVkgy",
  "key9": "2e4AM2Fn1KJ2jHFfL44j8KJxZNhzowP5hKTANiSQHP9NobLnVr7G8pSmJC4F5hib8imdf9waYoKCagVkTP8bKQrb",
  "key10": "4wKJvKTNrapWPe3guwirUHEB1YLwEvnXVdDdrcFuxjEY9tfZDs9QdhcodWgtXdUM6HT47sFjEwDVeBJiXseKXFXP",
  "key11": "3qw9VqXTcRf41g1V5gXbSHTPyG3Qd6fNe2729uNuTKkb75W2XsHoorGpb9V6gzE3dja6y6qUwt3tWJTTaYCn7LKq",
  "key12": "syqRUJSWCgR3Sm3RXXAP7t85eT1av3SRTqQgH6HGEDyDXwiJs57mYDoDRU7ZgdVBFkFdb2PzweZeq2YaB8gaoet",
  "key13": "4hmPt1s7T5McnjCmcSavggeTUHbKPMxUYGo5kP6XZoYAvRLqnSJqftmi81rR1bdCRWsG8VpAsUgBZTW8vYS2GXUq",
  "key14": "4HT8zAC2VtWESRLQsAf2sJm4SExqu8Ci4fQKVUc3485KMdzxKqo2ZJKdX6UsvbeYV5J8xeUUR9QHYrCxzeZsPEfB",
  "key15": "3Rw3RuoeB7E7S9ZZiMM43vZys2ozF4wKMzVgrLD48Ry2wSp16jVckJEH8yHhNGjpW9Pns1ddxJfMPcRZLsggsgXi",
  "key16": "2HAuFFmL7hJJXAv6bkb8Q8RzfRfSq3GEsnVyWdYUpZoVR2AfQwFoszwC2YMH6z5WgbCWtizQvAu4PYnxrtMDGaV5",
  "key17": "2Y6g3QZx2PopJ8TjRRs2ryEBF3ys3MQtSS5YkiB2ufnH9zisaKPFgX5z1BtWR6SwkHcqGzQAvrrBfEtnASJP65yr",
  "key18": "A4KCXoivrUArKoqzpntYM8diqm2CtQxihWiwzrMniHQDf2m1DxX4oYynnbJSyorD9hgUEe9QPKgQD11MBP2BAmn",
  "key19": "Pt1QTHswgtKr5Parw69Q1y3Ptr1jSx38eNpndutidpX81Vx1JqJveRJL665FgNp9XQuyUS7G2VavBvxT4mL8gZo",
  "key20": "2A3cWQP5oDgSVkJpoBDyBd16xHTkTThTeT29UD9PDUQqBP5U29E9jtAVzD25QPQ7Tw7rBVGKVFPA46Hq4N4d2gSm",
  "key21": "2DKCRagpwnqbP1gGvquqCmS8au9dfnVuK2Es4E7mdgh631tYn42LMTwaWhhLLfipgHe67acWKceFpkuJ3W2MjiXC",
  "key22": "2MvrJqB4gw57cYXnRFTowap7MjBxqp9KsWR9xSKQWn1y6GbqzV7kP2BRfy42srjWt1j1aSQGn1hd2NVV82tHzzwJ",
  "key23": "3Ydj6cRKBxijuFodrrmVShomHUfpjh5ZxyLRwf8h8FVy6fVChz21SUv4ktYhzKNDdrBEGqjvXzFQ5KxPfodUUXm9",
  "key24": "4UyPHojpMukUtZyqmo13RXYRMkMvNVeUsbPhCmc86GcuDS9yt6wk8JbSdtoNs18ZKMxRa53PFh3tkubFMSLhkvNG",
  "key25": "5XtnSvXFhaEYADVfDrHpbkMYNb2F5VkshNmwQhQ3pXnuUVSxsS7YfP7NdT8wXoV1QZsUZiLWXvixsed46CCZa8hJ",
  "key26": "2367t8a4MhSHFERdVjvWa7aDHVPdhzg7b87XrFKfUnWPL23hjrLtH8qcnAQjb7qpQKP62Yk2vhzr5C1Rd6LQkupG",
  "key27": "4H1iUWkkMuSNsLmjLXqhdqKm1UWz7Ax7GRFvcFUHvjMYCfvcjVJMkcaJn3St7Vyp2YARBTmtT7KbmvXNGqx4wy6r",
  "key28": "41eBEKVNV4DoMHYmWFuytqYjGfqgsrRQRwAxby4NEtX3146TPzo2zm1PNKLAs6ypAYwLfsXuSyfGZmupGZXLXDhD",
  "key29": "4HPuXm9V8ooysmzUYQsNTkR5t2kLNE3dFhTjuprPJ1bhpnT4NY9uBqv1ndYED3Gr4zPazmhkx1SKyAKr5bmHQVcd",
  "key30": "5Ec3zPg1HkL73HzrSEbEzB7wTNhLtiuKKwUHT3NWYDRPKioZ8hTMPuZBVSz8XDAw5KzWhh13Kvy6GZUvbfPHZHYR"
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
