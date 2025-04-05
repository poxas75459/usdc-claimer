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
    "2RTCgw6eM2A2d6FXNyMyxBFPZ18z48QNGtoY9DrVeQ7duEaZNN2YYzweicJwm8QnC3fbaP4dt13n76podSPG7WN7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X5WG7mYeqoAg2Fg9b6u6iv7PCqcXYKGyhaCfYS6kLGt74UdKmKz1YTzAT5JbYKNbvdiuoqLf8e9NfojfV2RyoYp",
  "key1": "528WGys7RJraVBKRsuPYyo9VwKwUENyEHBsJvtvXPqYF9nqBrpsBML4NFgyG9oL8V4sfz6qUuEFUTXdzVVzpxHr7",
  "key2": "3HG3Doy289ADF6Ts7nYUVqKKAoJDQDC64VHNR3YRdBHZsH4rnj9hxkvf1HUgrqhPWvSqeviABivuA64zHjumsp1T",
  "key3": "UBvZvPEEwSZ23TT8gNeRHRjUKbgHS6vmWPnru1gqXgN7EPSgNdT1KDDJrzm1i54c8BprvhArMHJdrGCXyUvYgpK",
  "key4": "44KkMJZcThgwAce42yfsMnJZK52Nne3KZPqcqeFRDBhYASvpKPxWHwcuzmZFAgsqEoQpAyNhecNHhNvgHhe5vnp3",
  "key5": "42eqPiwqnQvwUxbDVirrfcoGnVoiUKJHaxYdjDWBP9KHjtzGcFguf1kdJSLKUJoXxg1N6q3JK8dp6aKe5Jb3gveo",
  "key6": "3T5PDLoARFewk4BkNgCEhAXEY2Hder7GKJE2pouVMojUstZmqAiNyNHAJZjnJuyHRr5bJ15WUswZ6kE4R5ferrA3",
  "key7": "63fgjsrYSFh3Uj6zAWPuu3qXF8zD5USTKqbxWib93djsPzAGUhii6X9zgCnXuUSfHMQoYZGd2qm1xWuYUWgwZjtA",
  "key8": "31uDwCEoxHvFmTbGQQVptyS6b9FRoW2UPmDTTNRey7mCHxg5nUGhGo9orG2yGenS7L9p3C5uhE7wiPykA9Q7g6vq",
  "key9": "2UJyNxGvZ21GkoNiUX3wTPjhauUxpHW9hM7bz6SVhUvWhsVew2uAeRCtZshnRthLvhJpDSJDghgBCpJrYgU5mZ4T",
  "key10": "2Dyf2ZNgv3ren4vpAHVAzkiJWjSWksK1wn3CeemiAmneZk8kwUNGrqdQhSgHkLNspp2VfY3BTVqUt49f5BdNCi48",
  "key11": "2cf3CjhMP2oHQ3V7J6dvcRvP17nprASkEcHQyx6xwRdBiqv6EQS95oSBfAXkPCqwvxst5hZVz7GsV8SXAwZys3Vk",
  "key12": "5SdtKEYj872t7R4DnkuS4hPVM7eSWPqB3dqyWDJ4HacNiSdNUXdddzcVkLMWLuVpRrZaaHNjRVrtdqWDXWfi7TVV",
  "key13": "64hkvLWQv1Y9EHJYfAhM3m7umN7w7C4whJDDpCWh3rWxUxfDFE5aXHa5UyPWj7nS36Lwbb8tT8MmhNveqg9qYBkn",
  "key14": "2kTEyvLEpPS1nbfMHoi6YX3rf2YuCEWZCYHxxdAQjSdJsbNL99hmdhbY37Fi3YRy16PcJXcpc8742tu3K1T837zN",
  "key15": "PqimZ9L8j6CaGDMa3cc24Qy7CJsUVCSGDFKcRTNSVgxLkvt8RfhkUcLXNEghNPZy47EK6bWDtYNQxbri9maKuLs",
  "key16": "5JyoeynqCrJ1JLxBKWcN6Ec9AsossNLHJaN5bRBDZaHhp8rNsxnBaYnZwcVKuUpdR8bRTCmhQAHLqWdrtc4TCngK",
  "key17": "2EfEhdro4LWd6wdtnN4YjkeLwiuLmzFNq3Bv2JiFFrN1byCYkxYXK3nTd3RnXJmki9C5PmarrjuqcxHMV375XY4P",
  "key18": "9LCsu3hgSpnW37gDtJs6oqGWj4bQkTgz55ybub9Y8zXLuQgJJHtkJdUjXce8BEWWCH7HR673sLW229dL3ZMp3nJ",
  "key19": "5dDWXbeQNSMoMkpVqUAvxesLRNT76w1N94aER6CpPwX7tAkv5mdAUSgLGTgntdsGcH4CMbKjxcNtu9Wha555gMAM",
  "key20": "51ELMW4fmtuAqFYHN44veYEN49LYRQ9RQmQ7aoRe3rRZjBiHF1rv4FU74bEW1fM3t6RmdqGpj59TmX5pFQB78TFm",
  "key21": "3c4wBKzzCom1EGhEmLkQEsw3oStBzVh9XuXvRvEGyZYi6E2CTLHVZYinauyzXZYoh2WcpoS2AoFUu4jVz64gXts9",
  "key22": "4CkNo3BggVq7u7wf8RUcNykcUwdFagd35gjsMJB2n1SbdfLEijpF6XjJDPUzhgEYS6zHYg2MJgHNtg4GSBwUqmCL",
  "key23": "2p2xeXECWeryXvDM5wwvhFbEuMo87PdpMKLt1dzS16VWdqVdMkPo9MTMKY1dBP3y7RA2w2uoCe6GffXA5yHza8mn",
  "key24": "wMUqvmfHw9Q295mp56rAFfynxpq8zhSoHrUcx8YSdnARkSv3FxbhMwEXXFBog4dU6WtkpQy6Mnu1VhV6yUanQTM",
  "key25": "2eFmmLU7FWMfQbLd8YTQuJswJNJrgzXhEGjzYZ1h6c5VjFXCfQDb8Qp7sjE2itAsxBagjfSQrF1vJ29Q1ZKBM3z1",
  "key26": "4vbNCDeEKwKpfyvDf3xfuECb6vbdX1Deg7CTtnmvtEEsDRx774byXf2D7ktXC2f3WyA8uTDUX5tBBd84wFzggfdU",
  "key27": "4b1tcngWwU8BJoVzZfP6x5Y1c8RCkEbJcAfiwJRwiTH17YHbCPyFPuLkQdeZo3FkJA9raJ9ZPxFQXoFTBwdM52EH",
  "key28": "5PMQwfsgmjiNZyqJDhdbjGx6SorcP5zGVFa6qdnk795kLdi9Ee8anXLBhcipT4p35yUNqx56NsVCURvHwe2X71jh",
  "key29": "giGACKLN5nNN3Puu4eojUD8wpBzDprSzczsApytLt4kqqTk3xUdX4NTJjsn2Edq4QZs4f8uzmiioVdUwat7RA4Y",
  "key30": "5wGRmnYq6mbbHniFcBQD5ZXRoqtTXGctqGpCoD3gMEQbKxts8yZn2fCV2yDt8YeSFHeTFU5YmndJnPDwkEmcVDS6"
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
