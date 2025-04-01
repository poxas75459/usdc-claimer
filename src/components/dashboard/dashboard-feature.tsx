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
    "2m56ofhVakvFXCe3B7dkdeZCiSqrKZLJ7aJVcdLi4MMDM61wbiP3KbDquyswyhZyjFhuDc5vpTTqqwvsaqV1DBKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59XauQB9UgeZkg7kvjnfJUUS6L8ern4WLZ3Tbm67mtuNU7n2MfjCJT38Cz4bQXDzUaijVSH4xfmPRprYizTJ5mqE",
  "key1": "35rduUX7bf4fCzxUgfzRxd5YNVaiLhc2qpCeasEvJCE8FTRUU55GAHWivifHXz2kkf78TzeXYrogYuj3tNotx13N",
  "key2": "3oG1y12NmiYTdUVHt63bgEsN7o92dnDDzRj9JPvrPBLggexusM1s6eUHErwrPGqPG4F7p73TxY7PHzNRkMhHdsKR",
  "key3": "2CD7Y5XEb15zpW4qjqMsfFyRkBPMzrwMUa4h4XcWNtueQBjdTwTULYVoNZYPs8WuWWNWo5b4TFYn675Wy1wY823f",
  "key4": "4ynq2DFaQWh9PoQm8QjtToF3LzCvNwG1j8q1QAoR4F1MkWq4iVAfu6PuNseGr1HAz8WnDnUPmm5Jxrxi74PoYCb1",
  "key5": "2SXpfdmbVke2W6gh1dzF7Ecnqik8qFqZB4Ly22qm4Dw13xPGqaDaad9rokQWPfrtREpam3JFZdFVPnKwCmdSnLBw",
  "key6": "wXkt2Fy8cwHaZGzDUTMd7LTuBQJT8ahT8fZv7A7MUFEVSXwEDdBAimmkihCtfeWxZdZtDTysxZM5ea7JmyHot7z",
  "key7": "27rioPxNyAivoHJUnjMhxengeVoXvaQAJSRC6G7huVi4oYX4A8FwedVAJoLsMP34EoGZgWVxKmQbh3mbQXmpA7Z9",
  "key8": "4peK4MmJW7X4jReH8qMCbgJFzrrdwD4VsCWs9N7jKUz96mok2VEE7HFUqqzT8hfAGLh46xVSFPqa7oiXWYhAgf96",
  "key9": "3VNxVaqcPGmNyKtrbpV1BcPNRRsr4gg6uPRQLQhAM26KfVst8NDkjQhx5cMtP7x9rN2Eu7DTh72MyrVqQziQYcuj",
  "key10": "4mKDm58iMLJbruFBWH8JckzNX1YraiN2dwgGGxdb2GbojTpgWfYgQh1Twn4178728DXXBqNStpks7etnxx1TYxPJ",
  "key11": "2sLyhqWMbEa1XMbhmz9NmYx8RsR1jECUsYVBfEeKvRPyqcMNjxF7yQut5HtAWSqo7n6CM8JF7CmSePZLK5oGeyvj",
  "key12": "4AjoCKkqEuj55dYDKRAysfGZgYMfRqrYTHLZAm6ocKFB1sLY4yvJ512XvFNZYqQxj3yhGdcPBMv2pZ85XZKDS9ft",
  "key13": "4oPwwybmHCtQQFSrqhGGr1gtvqLUF3xDan13AYAUqqRPP2N4uT854JgELfr4mkDReZWkwDeaLBtdc6G3FFNuBZsV",
  "key14": "8jFYmj9dAH1v2p7EDVDRtCxNwW2YWZw1Nnb86GCYEMr5NmALmCfK44L7HMLHcqJJdZGkKkDsy424kq3HgKzPgou",
  "key15": "5rUBA97WP5qxEADxcMoLc7H42ivmBsr3xeyzUBpUrcFeTUZKv2nXixy4fwKiUwAFLiAsJZ6UEZPcLe49nn3PnffZ",
  "key16": "37yX9XDfJBimGbo5pNDNESQxvc8KAA25RNLEptC24VFV1iSjQpWEzxM8v3uEZmcLvFdgt7gPFLpb9j2bcsswUQi6",
  "key17": "5qtAbC5zrdw8b3QiNMW6GwMHdxYG71QRNQCimUtgYeK2q8Ztxnef6GVNKqtEKGnVv6YX95NcrpYAHK3yiDhQe2kE",
  "key18": "4AM3BQMteKhufG2XNwgRV2EbrmfN3dEdeA2JWMNmZJ11XTjQYyWMqr4ukn8zpQKKTy4poCvJZNrSZJvYPbH9cBUR",
  "key19": "3P4CjFjLQF7kWKwtekG8T6Qmj5myiDVRY9pGy23WuEmaESCUii7wyYZAKZgDBcr9U7Dci8GP14KfaQN7cCV4Judt",
  "key20": "3TLk9EmpvRnRSQpSqKV1dH6heirC5kVg8ah72ng7En9JW7aVRgxHrZajbaEzaDhWnheWQLA1kGwdfLvtspW5TJte",
  "key21": "548FLvRuidzw7HSrb57DoPwvMfohVgH4pGFinkL2JEkWFPPtN8SSwh22Pipc13TwQdhD8FXJzcLXWKGQymtaQoUu",
  "key22": "4mJYSSG6HKMx3SbS4b8zrYRak4A7eUpgUhzAGYAZ934AUgN7g97922BzavHzaCcEL83b17UinZ7CgT2S2ggCWh2V",
  "key23": "5Eepkvop4TsivDAjo7sfFyYAVub7WKz9okDtpDg8AaXdDicVwW7hHELfWdiuyYanHXmbCia7Pd3DAkxQmyEsmdoS",
  "key24": "2bSpEu59WPsNJUwfi5mFAV569SPRiKd5EucxNEnN1eEAqavyZ2nEWMD75VXtefkkPApHLHMrbDkmoUEJq5cwTjTj"
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
