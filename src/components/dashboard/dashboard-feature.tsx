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
    "5utVADZsDVibKERQDL61gUmdESKM7n7PRAkH5aVNP4M4W1amX3AMi4joQACi1hRNihHripgGJpCs62TpjRBeA4Jn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TGAJASPnbzXhvRQFG9LKGza8yShisbkHUbZDrkFdepowyQ9wSSvkS1ZKUFVjGfkEhox6qVdzfkDdh87UeNyPDoY",
  "key1": "LtxfrRa88DcpGNqsZD9CtQ7RyFHtavUh2B8ZwqcFhDjJZu3TRpbchkLwKi6n4kA3kkZUpJwXDy1N87WNaTgFQFk",
  "key2": "C3acSq7XXuykJH73dnTnnUafPyBjwc6da4ocESooywBEYTD1kedPGabVjLPLjkGa88f1fSQKjsWxxDSF3TTXHjE",
  "key3": "5QuthZPpkbd6Yz7KpL5RoEdiVoGbTpGnERPjkS1GyiBBxGELx6x1o9iGug1nqEn5pUAYhrUWYuxJ1fmuwHv6dNxb",
  "key4": "35cZLvQGtJwkAcANdptZksgrJJ2DUN5ZHwNQbRZMrYPpRvUs8END7DB9DEYFu3VZP8Bd7zx4o2e572mnkNHjZwZP",
  "key5": "21rC7EYUR4vhWYA3pvpkk24vnXKsRuxZeAHDsaVznJc9jc5ZivjgnqRcqNFRJmBcHk6vJgqLVq1xUAjCMJNW3c1i",
  "key6": "3TS2chTybh5V6rnEnAPpUcf6JoSHACjPi6VLYZpJdMY9NxKBRu9QK3HqUmjvLyNT2Z13vBcPn2j6Vvry7whb7sZp",
  "key7": "2CmKCPGc8HHf6Z8BUnAbActipKfcpxBsYv9p3uRqTepXDhtg3NLBPyTBRzDWrtww6uRvkUY4ZE4u8byd944adM58",
  "key8": "4LWGgBdno2nJE3nxyfQE9ZDxzFxx7n56WpWKJ6frH9hKoPSA2H4GdtMHjzSDarqJ5zTXtnX4DrwtsnwhvRJ49C3W",
  "key9": "5Sr9W2y1SFXVqRoe7gzNMvQFxh4tii4EN84sGZwBd3C76KWa5XSfoNzFr9rDkycWtqy2rwh8Bie2vtUkisBVmCeD",
  "key10": "5MQC8xk2VtpgRkGEe4oQHwgZ9WMnfCYPPRpP6W3hGa5URNQRV2koasUyMLNV6gtdzLjgon6xx3UyxfYwN1xRY7EP",
  "key11": "3TA7kr6a6uV7T8TKrcsbHyDKiQxgu7MJ3aHVThVaKfE7BYtXvscDKGZhr1PF8kbyTEJnJdtUjZGc2j4KcTpiCRjG",
  "key12": "3WybVFoVCLHkgxquHeJBinysRv3U71rYrSeURHZSz83PKKXujv6345zWAgTpfqZ9MzCFXY5NeviUM9pSBRjFSv1s",
  "key13": "66aEDvXVGsHuMZSD3sE9k76wi6LwidADmWwzWVQ1KU9D7zb2Vq1thMGXKp2ucVJpfFvD8hT6kyjgjVgjToqPBcoR",
  "key14": "286kZF8E3WZjTayKzX6gxrdR2jxRE3uDMFHriaFSmyPX2MPUagVou6Pf6idjjvLiX7EuZt8ij6opJJUrz58ttLrW",
  "key15": "5FpVVNPbtEq8iYw2vxRCsij3dLnB6zP91NMEd1U4WPoSk5AgNXLyj3xNiq4Bx9wfm7y6pvbzoLv9MtSSEwDqPVQx",
  "key16": "2ieP392SwVdRvespXZrN73tjBHbnzofTg2ZkeapfXGAZXYPYFAY1TAZX5ytEy7UVmMTipGzrutXoowitdBRCzHC4",
  "key17": "3Rvnzs3x6ovpTyhUFjRZbPBzap3LsMYocpWdGZRouEYHGfAU6azp19sVpD3M6isfzJD1jHrm21nXKacx5Qw7KGvZ",
  "key18": "4fxN2H34TaRYcexVAUQf5vEW3qKEWDoAzYqxFbAJtdoH2oPSCbJgL4kzaiDoVH2qjJr9fJWPigzZiwavenm7QAYY",
  "key19": "4q7pyfs6k8tco9489q66BFMWh6RS8AcNsrNBoTto1rAbzoyhj1HqkZAWJdAhjCHYwzyhb8PcsTL8EDH16r4NZock",
  "key20": "2Wq6Lg461nFZe7EV8cyEEHhXZjKi4w9nm7riupAGLWUMpM9kbATANniAWnmz8XijAYFqXQ5k41nGRUJ5JP34DbuS",
  "key21": "3a6LKwLDzBUvyXuYN2pM3Zn2XFXJ6KJncE2aHPJwb7xAxwr6n8xHmKXgi1NdHtR19NQcCibKVsjxMysKZAa1QWCE",
  "key22": "2hs6nFTMoTyhL6Z9oY9RFKfQKsraQ2shTU19HYNwBDqf1T7HdxBXJVGJxad2rZnTMjLvx97MrSm2wNVvMJfdQqbD",
  "key23": "4t4v2WTr6G3i2adJZ9q47vnSQ6VUV4SnB3VDNcQSmeAZs1eFuS4NH8EzfwNJtZ2x2CjRx3Jgku1a9YNftZ4CKJNL",
  "key24": "4VgdbgLsdn5U7azbFjMhhFVhAx8NJR88HsHmUSN7ovzaQc3LHve8YpNQqkWgYgTqksHCDbFJSDBCEvPhedGiYEWU",
  "key25": "2C444zGnVMiWA9h3WzaFomCNoyzDgz27r7EokSF4PXwMNih37WNKxr878Dc5sVitb8vVRzPGwDLDXXsmJPyUWCjx",
  "key26": "3gDN5b65FaNP2viSFj7pmbNh7pc9zdefUHXFquLu1TCH5sgfURUNWwArd9VwAFVVU6NsUeXBZAH851FQ5C76bAYP",
  "key27": "55x8d6xUwbpe6ig4KCY3pbq4aMf5G25WomEQ5FPmcsLEgcJBGGah7kW58qUyUTJYYWMFcCA4SYdu5TP8xVntetau",
  "key28": "47qnxm3Pv8GZRsEp6zNH8Jfmyytn9d3bBvrxT6rH99YmaDT2JscQVBFNZa3XergFTD7MrZrkF6iFCVuk8vpHWHro",
  "key29": "uvbmUuhHvmvkgXTYNVYyEhMcNe9q9d8k4UKjVt2DzFARQqnVUeNiVW2wULA5tby8u6RbKeM6brZfXuBxSGwzXqS",
  "key30": "4SXNYFkkJ854Gg1a3DdUGcwSHQpDad3PZuoeBFdJcvNAijjR2x2j769zoHSQVbNuh51mecfhFY5CC38hZHYfhKAu",
  "key31": "MJYtpYbFnFwpFYcTLVW1iQCy9qsNmbFSmKwWxjzBSfvtQkmYw5srXtjfVfsxx7MSVDu7GfZJnXxscCvTs4W1PtL",
  "key32": "3TQdB59sS1XSurnBTCDvVbuHC3zghDZQnHWiZRegT3sCJB66PbRzZyttjQEerpeSZ7VLN53AVkE9gn1SsGXEZ24J",
  "key33": "2j98FJfMi4U82JVy9ULFfgivsBYXie9w8hGBF9ZwMnpBznPHhcimpLgdHPCXPGxG182jXrWi9R7Hx19UvaUNZAwv",
  "key34": "398FQ45FbBBaLnoAuYTtTcY9EK1ym2Rshjy9k4kT1xuSeFKKFpbDjvpjBhrzq2nkjt7onZu1gD7VjNvwRrWS4BAw"
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
