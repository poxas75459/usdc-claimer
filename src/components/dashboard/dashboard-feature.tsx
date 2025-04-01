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
    "4hTqsKLfNT5DvdLhNwDaC7M9n6n4XmjhzxDfLZvSojFAmMriSqa3fi73dwSceq1LM6FwTz3wjubwCukUELdRjTE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aFJx9mSpBV3muuXMQQjWDSUUK1CWmY2yHMuU3SPmLziNZu2LtKFFLTDCiSJC3AicCUBZcnKZPxHSsL3o7fWmVpH",
  "key1": "5ahNsL6oKTQjzPRiLu2kGSftpnSGGeGQALG2EgyiSDzqoBYUyfpz7hkWKEaGzY6nNN88D7nft2d3qqnUemkg7G3e",
  "key2": "2QMvAie9yWF7Z5vx3cQJ9qHc22TEDK7AVrwG37eYA22iQQp3yr3kXc4iCg54Hi7gyxRsvfFsgf5y6Jt5P2bmRjfN",
  "key3": "5LA1k3MBuoBhbNm379dM8twikzbk5zUNBuac7dRk6EuvUxRQPLE3NjeGLrQWa8Yscs2rH9WwZFQCajixZZzDcqXA",
  "key4": "5GbVanma9WSCFg4x2FKuvGkYJNrih4yep1c8Ye6BbpbeWoC79LUXdrDSDA26qdY6XVPyatGMhWFgfZCvvdVgPort",
  "key5": "5y6F2LnUFid4nHkFjbG1c3ZuN859aAS7rMKMSFLEEeuEoZL5PX1bqVMEy6ny9aj6gTjSXYwExxHi6sYXw6x6ADtT",
  "key6": "9ut2WZongDc1g1899SSYtoBQuMLaSNREWPSNDb1z86eqYBxnEysT1nYR3e5EmNxB6o9ZzVjKyN1kXR62AfzQDuo",
  "key7": "2153cW294AFjvrZH2MLiLRcU9gCrNrGinbKSeyrvSqrGjd1WRqNBzdDfJPf1i6Yi1XPPKJ8ExT9ffNjQvebTDYTM",
  "key8": "5YBcTYs9QN6Nhs826ausZwPdudnry9Eg6f1G5gHAG4Kb7UGbxYxyeajWgi4FV1vX1twSXn1N8fWmf99G3oxejWYJ",
  "key9": "aSf9HFAvkkn5EQkuBtE9NmXsGk47MSTDhWoGhMp2kji7dSuTz42gKD1aXBjkPJCkYrxJA49H2dRqLcCgeiGJBiy",
  "key10": "GX7eotGn26ttnvqQsGhqHzQ5RfK3j9A6QJ5jJ4qAyr5CdjtcUGwuUfqzMw7WrKbgMdneiZ1Hrc3keL85P2MhYgV",
  "key11": "wvpiGXasbQdhWbeMFNUBD4soGTbF1Uz6ECa2cyXVhZanRWHDF65vkoyfUD2cBg9mNRSnQrcrX9ZxnUV8Ei7A11K",
  "key12": "2ZWmyEp5uj6Dh62oSuWBUzLfbW2KHTNHJFeaRQT51aPnBrmncujekNEv356jR11QDQ1kBb9YjkzcqcRVmk8HCDqy",
  "key13": "5GGz8bHWDMeNJhkNdybGbvcYSUWaNH2a6XEGStLuu6sQVAXivbaspAYmYUu18mQuzaF4KUgc8VHRCKHsthmzCza9",
  "key14": "yguSXyMecjz2FSar82gKHa3R95CSHL67Z56io6q3PXdwC9wGcSdZU8R56VdmjDt5ZsWKLVn4Y4LxaY1SQvH8E7j",
  "key15": "2VjogW4RANX1Gsw8M5PgAHLMB8FxeNcPHSspURgoEaDdWaC2uxezLrriC85Dax7RNQhK8xmcAqYEM9sYQx9PtAMo",
  "key16": "3siywkHmce2gho9oFkPBAxdaxdmsgg8Hh9eYRhmX5ebgfFVMUdoA6z8yo9MrbehQVGuMJbU3MdXGLUi9WRYgRrww",
  "key17": "2BuJxqXovXTnt3C7cLeXUhWtDgaVbekcbSCrUMvMCoNsKXfNeYHqqJ7E6m7GZ16QaHBYsLnyGxxtWT9L1Meztnfq",
  "key18": "xVjWw7X5kn9MgXHGXRw2qEd55RoQ4zLHFqz6skLtoYp81ETirbw53SgsccFDzqC5dTazsBDvvkEBfuovG7yz3qS",
  "key19": "1vdLdpgggpZe9roVpipD1Yxkfn729cgELcWi83vtqARrJY4cwVSKGSp2m9kL2TMFyjSzZuWpiLENtijErmE1BTT",
  "key20": "2FX6zcj9MpMd6YTgiw4nDGcZoMwJJZpVpon7eGQydjfTbpeDvcQycDDUgaivVv21BvAjChFktAXAXtZjbKThdaou",
  "key21": "25aYrH99PqhGsBKfQorXtvB2zCnfM4NLaNuwL48kpSmqGWhWycUBdMwfwxvgvUYBU3sb7i5kctz33SgaSoaygTKg",
  "key22": "59VBvpwArybTBcpDN6BxwyWiWt1bWNtugzvqhqnLnsBSe5vgccPB63LFQGMXEjYJrZpTNzc2Y7VY3GhwUmsjDjcm",
  "key23": "4VpRsXV1BpthKr8TWsv9jNqNpZRzuey6UfyndaX1T3Y1K9fwbzpzn7wJY3nMHCqroj93u6HsQFsqhZkSCbCuw8gW",
  "key24": "28oXAT4BopzqJbRmqBq2ECm8UrGq9eQW285tKdgyQh6pFCctWwEG5nAnJzNca2vePghAVQ2LSkqXQVrEaX6BzZER",
  "key25": "Ld8wDduH1HGpwwDew9zzQeWbKRwTPs8iPjcoyxekrxmQKginxP2NTuYjjgPgLrn4EaiFpLqbQYn3uNgNQayemvC",
  "key26": "2y3rymt3c71WJLAbMZG9TNgScJ1TvEPV4h4LWuw9mXoXYkqkMMaG1RL93HKJsiNDSSEfA6AzSK3KaSS4yAriiA4m",
  "key27": "5BPmgFGDe2JfUYRhUUo2Pbt7mvqGrVgBHAcrgksuXxJ4CTgoSs4izkoVA8FvPoPUZ1zVwPfkvuuUBSDZo1eZajJs",
  "key28": "52PSyP5UZgYgBXM9CJyNqNjpLaxCeSDsxa5suLAR1Q4yMvCEfncuv2D57qnkhwC6Y9AcBcJZTs6Vz7xd35T4uKWG",
  "key29": "2Vh5fwWy84pNKrCH2iBs89QTxTj7Qf4wXkKoopiEci24kLPVWLx5aB9BgNtNZsurMMDuajhw9ip7Drvdt2cKggvw",
  "key30": "4spArTL86Tdo3c7prUq9zgTPUkqE53WS2MuNKrbuyF6JVKX5JeVorK8aNbAX7sVMna27iDsxxNcFYWvTVHq9QJZk",
  "key31": "3vfUWUS3rCKfuPt8mmtxKnge54WEfZNTRVQJaUQcUEeACTJKkSRVa7irExF9Pudjj1mDj63FWTAYt2d6EJHhWmcK",
  "key32": "5tXx5cweYvBafRY7pKsMa9tm3buo7yBfuDiGBrVheEr9JRbPi9ENGFpWQ7RimN5dSDrWXi5ggNxfeWNP6QXDQS9K",
  "key33": "vT4G7Cn1qJ8hA9WBFoTJCrtiy6bCBhHo2hqW8VqSxTJB7UXpLRN7NkB8VdVjHhhvXnA2rhmu9frnPGLtUZi3no8",
  "key34": "5ydUoJVFvPwYt2ibJaEoW1SgHBbx1A7beuTUbNVzGUJ8eFCJc1HAQ4wUPnqQ4GxQFnPtGgr5sL5PXEuZxXFfBmsE",
  "key35": "3ECaorvozd9BVjWFSAk7apU8d3QFMsKg1SsHkcoHRE1cVbc8Uj4m4Etpam2Zp37Art1ztzbC4ZAJbNEovhKxw5bK",
  "key36": "21Dm4bwW7trKpu8Btfu8kCCT4MqtP1HwPFDwtoUL9uQqAwUUNcuvH4uk8GGZRAK8UGW1dj2ussUAH6DvsBKeXwKw"
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
