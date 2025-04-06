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
    "4Hd6MsaV48fHJJ1jkjphoQjV8K5YWZJqHEvVnNJGRZ9ffni3kANyVhijWGxX1i6QjBvyxrzv24tu1j5vBTRfM24z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sMaSP7F4NVt6FvGjwiXmkbQYREm2GWFWg4p3GLdypZ9pFcskzbu87PBd6iHNHDVY9WVv7QpQcHuuntL3yFpGiYc",
  "key1": "4zQgiiZrPLbncb4iLPQMtMDyadedZEQTK9TCYqj9UudvgktTg6Lc4nrhZAxyqqWgHH3Ue44G3dvDJzAd9hgN97Ch",
  "key2": "vCW8N975oDkTE8shiYU1NmtwVZb69a2CG958Hg7q9CeZxDuzjNTtR61oAF15jboMHb179CN5JeH6Pen9vYxmprY",
  "key3": "EE1TbGUvtByNw7tVowQriFzFJN6Bn2cMppRvwoTjGeW8vKLkWad799v6bfJHckRNXScG6voZLph85ZC2iGRF1AH",
  "key4": "26VPT9NnLghbCK5Kdq2HXCDzsAHq7SJ6x7nLNJAZnRc15sH9izBoj4NVXh4b3xJUbPv6H8qPw7p1uWw2MryHJCkX",
  "key5": "57zTaYpvWgV2EWqxaSXRBD7gPQ7zb5AJrNErY4PcwoPK6Wh2AT8ZTavT9d4QERBsUskxJvQorc4nHfnR8EUY1dGR",
  "key6": "571fCgjSEP4gPU5oo9qLP7UxrKWzZG9YcBUtAqNnAtASUCE237rqjqw38oGjhq5R9zQJnZQCVXyyLFx3QvHCzwtb",
  "key7": "khMaeAytBL6nZ8hxFybPsnfQMGSqgV5wRCqsG5EZYKbK58jaCwRHTp4GpjNQYo3gBKkAvrhmbrFrAnpwXhtZk1j",
  "key8": "2sZcmGrerwHXeP1HASZ3ywGKxPoESC7UhF4FaSAnTUh2aFJs7T8UWkJUAyi2h9pbwCHB6kh9gKesdXMCK77AnR3o",
  "key9": "3HoE5T6YcvYG8yjQehQ6ZHLrrqitniYQwfAXHtjC3hPFrzqopGQkdwsdKpCBLUWQCA8Kb2g3Ph9AvZ3R4AhfvJci",
  "key10": "mczsAbx3kcvvKvnpZN3faaTdhbVKiw6ujA16yC32EZHCCpDFtmqGA25cx46Bp1hoXUTFfRYAozZuNc67Rvhebvp",
  "key11": "SkRdpnweCKyT4kv2g9LCSwzoFipGPtpzw7TtyuaZZ5U2SrYwjdUbvU7oKHABWdfbWFh7M8TzvAeqLQofoytwDn1",
  "key12": "5PoM3xeF3LNg5jHKHWk9QewFR6n3LypngtWED9X5Y73vryhS8QxVYG9NCzA9wuim2qrqM7eBCtmh8r63oRDTFSHd",
  "key13": "86EbUYd8f1XR8HwqgAEBbUiWMgNK6nQ2gATLDE2XhRL8dYekDYsCmFHNJz16gbXQqN5k9QWAmCf5SzEFDGfme9M",
  "key14": "4Rrw4jm4Dz7WwH5SMH25VUYVSFkBjaabXq8o4S2H4SpxQcej2EG4HbEdE1q1rJCZzHeoBCroAGLxvtUkjt2Vs8tc",
  "key15": "3MxjwsQZiyf1yyZnmE3g85jQm3cyb2QPeVSwAU43wQdnoke5AXGxbJhBpWvVhNC4tYJ9Tg9Zvn4Mw4GDXQBEPCmk",
  "key16": "4pSBvrA8d9RiE37nLf4ykEfNhEKzPgBeT3eo3tSY63JT6Ng7BnhJcyZy16rF38Lgfc2pq8oRgMdjfpcC5mLdMNTg",
  "key17": "3PjzfYzmKBFGrTSU9yqxHyM2jMxoTLYAu9g4XYqLZAgujLAYUwrQ6EZH8hAU6Vdw2HJ5dBcQfoUiNPk2hae2NQNX",
  "key18": "2r5vqsVPZyB3kuv934npegTadThmdzY8o6YHUyRcgkAagBKTUzuKGgJwFEiusgHfnZqUA6nHYgFMYBVAvJymG1Qe",
  "key19": "4fhTsftWm3veMReAVpFeeDoqLT4ggKTJEu3zcLVVda5AWHJAEVg32khVxY8U3ZNbymAWVuHy1SGkkLaAi5ZPLK5W",
  "key20": "4hgowsiJ744RmrnqCamz36UksDZY1jZjaSPVXxPjNw7TjrMzmme9nJeZYb8YCwn1ikQrnWqdKfKCZFyuQ2zPvZzd",
  "key21": "22MTD7SXhTE86h8Fgj5GuZR6g9m5NQxpfaznoAJxpQxcwdLswfrYiQZWnFmXAEX77Wrt6KEfNnLPGBrMfd2JdHKg",
  "key22": "3kfwGEehJvLnN4PMDQm7MMaTLuZFKYEZgFYcocdDsd3Sqa3CAU79hzpjfVRQipRGQRpYGuetBhLVSCx8M6nbit2U",
  "key23": "2E9e1SMjW8xv6g8Hkrdwi49AQ3C3LULEgbd3ED3BiCB9heoSejUwfCg2zrCP4X9poZp4DDqJ6mWf92EJ5K8zvrsy",
  "key24": "2Lkt31TQ5TYVhfciVH3goaZts4LgVNtPWhJjiA7vxPESG8VH8kY5ZYZHTo12fzrSd3mxdQh4JyWd9SKUnzV7LN1e",
  "key25": "jQkeBLY9zNteFgwxkKU9L9NB5SnaKAT9cqvbVWEUgXUEWd8dADJpn66CoeLhX2W8aHquMHzhtmquD2TqgGZy67F",
  "key26": "3Q8EkS8sgpdL8SUsWKnGEbiCrm5NcouaNH4kZd6i6fTYKS6LbX7UNSvBo8HAgBWiSH472yX8YBkrnAu9xTHD6NcT",
  "key27": "36t8EDbKRab6iJG1WonEneVAPMXTMqnRb2Kc7BnyFFnuP22XdkzFHB614UjgfNVzsky5FfhikibJjg6Pdnjz3qYy",
  "key28": "2vEE6F9XnVwqBRXQibrtQG6aVQsBpqJ6HBgHKCszJ6eCaz1Af5fecMaLEjFy2VitcFJrVkR5oxHy6FxAkWE8FMMp"
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
