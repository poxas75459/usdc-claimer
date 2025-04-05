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
    "47cKy3YfqUEL86fq1JsUYs17ekUQEviG7h9db4aR6GQWQNT1s9iPZKqHMoNxBjdHzCq6N8yYyBwssa1Noy3TNDqT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CcfeNr3LxcnhdTn52Z2BudUfVoi4Q7jRF7PL7hyDzgYhmKQFXiwNS9GgSK76hNdoudLrN848amUnz567Tbk5RaG",
  "key1": "vzSrxoVchvT4Bth5nmQBU666z3TxTSzPi673BPLahm5vVRuMFSw8KpWeE4rdtL1fMMHBwZ4SwGZXUy4X7JwhcEd",
  "key2": "5oDfrAWxWuBHmquZpR2LvKTt26B9dYSK8mu49XKydp5LPLkyC9oAg8qh3bVXJidL95cYVdsEhDfLzFsuK6UaqqDt",
  "key3": "5iJdDu7tLpoaXxes2dJGpw5zARarsDMd1aymZK7JFe9aHydWGYFMcCc4mrukom9Zi4u9GucV4wockAbA2oCkxjRo",
  "key4": "3Jh39i3ExcgoYpqeJSV8pSmzWvRmccXD9oTqBP9H61hMgK1JX7LCpWHzNS5sAdpqFrE4pbBAAGAALrTDx61n7KLK",
  "key5": "5ttz9DEfA4XBqQ83u5vdeNFBXMkSLdZSMFCEhAkKw3t6FFVsMcV3wauS12hSGHY9czwHGAY5nvCUZ52V8TXRW524",
  "key6": "2f5nLJTyz3z4X2Wsmn8qLFx4fj78HYEZHmK9MRYjF2Q6NNwFurFW69miHAFGvtG9qwA9JFb5KPVcwTFX9Hu1J1Mu",
  "key7": "2KDtFDVYW4kQtrSgYC93iq4PaNJ6oWDwdjNBhds8GS18yjShwYSz5hAL2Jp3KaCwHhHM2tTWwTopbzyapxXaEbJX",
  "key8": "kZvcyFAFrpiD7wYKbWgXkWtR6an3qD3ERVn18k4GJbF2BgAsJTAZ5cMXhDxy7DRUz1eobEU3iVPSKWfxi9aXyer",
  "key9": "TsnM2mUr1M6TP1iaSkm642tjH88hP38UKRRWKMGBkF42on7cKrC8wRLcnmcXMpuoKLwdVJWfNXyeqQ7hU8JnpW7",
  "key10": "5LGvuehxmp3RNA6849gc8P6zdBeWwitZ98yKtGYAdCpmdUAC8VBDEGcU6rgkWjqUyaW3Y5AAqMmgv7kYyPAWBzRY",
  "key11": "4diZiLojgoELHSbJgUTUntHAxPoVAnHSj3u4KDH6zyMXnkxkV4gAVCxWbi7GbSWpUHmz5X2qkjfNXKPp5GKscc7T",
  "key12": "5Jffy8nWULMj5AXJL17Z6GuhYV1imbnsKcDYery6fDMpZaK4wBhqUgpsJJfGAZRB2VpDbv5UECfVNsna4raFnk3r",
  "key13": "3CyBprzmVDTsxxyMARyskssjKaAYHYWeJpHeTqKDaoZJW7RtEGx1DNNJYg7ZWr7dns74bcNK4L7sjRc6R3RNHWGW",
  "key14": "41omcqKMLhGBoJ94zCECRapnSFc2RY3KBN4Nm5PJAz6x5iuQBmSkjBPaoyXffjVqV4DFJxQrThTcXi7aiwUv2dAD",
  "key15": "fbaRCXN3WAGXfUaUjqthK4A9grRpCsuoNKfULqNyXGoTT4s7PuZ3xbHsJKk2pqsU4U5fnMsY22VJZgkgvkU6wN6",
  "key16": "RTEcsbqhhdAkMwjodxktWzWwE2Zyfe8LzYXddHfRuybLa8jrvX72hmecKTURRr6mUsDHosfz1ctSAd3zL3yizEJ",
  "key17": "24fT4Ah2PJy1546XFSEeTHYevkxgQfcYTqopBRQkshZwvg6NvZBfxuJey35qhvZbhRPa41fv4Q44ecRJJfuK6jzj",
  "key18": "3eRsiwiseFetrBHAyRBMjBhFgusYBCSr9p79tEAHXAMjexa2UNYZvRz5D4qiUNz52k8m7hGiwTrbR1xuQnLqWCUx",
  "key19": "5egjwFZ5DMDMZ6HUb6F3vah5uRcSiMJgmBmdJ2dxBJ2CqyAZUtqLB6hFVNW1XNVXMf42CfCtVUaxjSN5nqGYwibd",
  "key20": "5S86cTKJp6krqM8FuLhJc7doyBpUxY9sdaqSSukkz1JZsQbr1wNZyGiWRamyTMyJ3JeV1pVWbSEohV5VwiPEeeQw",
  "key21": "64Bv2Ey3ehMCWxeeA4kfn5bjkLcPidn4S2WJHXhefJjmAxw3xxn7GjyUAMEeYPadf42jJHWpfFrNd866J4w2hg26",
  "key22": "65QFY5RsBw5T6xGE1i9tWDfoAkG1eJYKohwMXmDb3bU97uRbfDvReeUhphWNe9mvhVoZKNBthuT6G9LLELTNYaSM",
  "key23": "4mpMvsjxHYuk3ungBLFw3Zojw2XtkGTuNwP5dUuuDTf2oHLFJDzGPhZWWMakNpnu2Biw3pTTN4tjhN3hssPEbFYt",
  "key24": "3EU8TgMmrQ7Wx33gLCWsLW94ETcxLUWcB6SD2JTvKk3FhBC6GnX2XyMaMK1sePfVc66CwDFWwCKZnkFvnwej83k9"
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
