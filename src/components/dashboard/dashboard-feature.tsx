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
    "4WVtGdCFzesC1c5EaNorZNLDiHCbsSTW6fofcZP3pouP6rzaPNZL9AESLwSPgfeKXf6iWmqg6GyA5zc1JNBY7ba6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bT8ceA78FQeQmD7fsfyb6NFiVaq5CmxuxbtVeHKJcbQfdoLoxkxGjxPWLsqadhQSXbvf4cPHG6uPswoEaifaS2Z",
  "key1": "4hpE3eJdbDmDRdizGoP5tMPTk893yz3PbwicKukU1RzY56FApp5V9EML4NgTUiqyLc7WGRh47cevkBVGPeoss2M5",
  "key2": "2g3MTuJrfQU9cDKgcJeevK6y1xC3fQnKp6K4ZA8NArL1DNQeSSmv8pPE9XgodbQCijmdw4DmGnJNYNxjgGXqJyB",
  "key3": "5uYuyEsACag1og9LWs7JiJNfVLpqQSHKJPVGvnsRrHpihA14q1uaVykKowH64piaY994nTLaKUzJ1Ufe417rtjn9",
  "key4": "2CytumCCE9fcWyRXnYVaoYz1bk8JJdtXXkSytNr76KYAX4HYY1GWGsLBRJsxnuGSYhGfZzYsXziUrFQPu5B1vryU",
  "key5": "2pohhHziZqG9SZHHpK4PF3A6qnPCo3mfMCMzQCHmR2u7bdCrycVvEDF5XdUPqfY52duissmLciD4z4fdtwgCbTjX",
  "key6": "29wpFZ48ozxgdwMFrZLZoj8ArdnAk2kHqR3uqog6GqnUbQVZYedQgnckHTqywwRuXtr7PJSDBP6AkJ8cTTFVFKnd",
  "key7": "n1zKXVfWdLaATYfwiLbdAb5dJpFMJAXeP1gySPBtXJ3HLWguGUVwX9LiWMMdHuwFsMXzGjhNCZjNTsutmqy1AG8",
  "key8": "3fJGQ3FM5JQvf9xSXHdQmPGRyMpNRcdotJX4A25BooiafDUT9fN4hUMv5GycfE8xYP2akvprRXAMptAti5c3dsb3",
  "key9": "21wHXjemajMnUfr6HZfJfrAWZYtEvkuBRPB6P1Gn9mf3qgjBWz82QCne79F3a8qo5NUFGmEXCfeyGLRGv5oMTesz",
  "key10": "3Gj2hbu39NKELbdTjC15dqyKRE5PAdtg9SkEB7em2RuwaCirYTWaw4XRWEsQG25bc836ZxwMfpNKDDXqSfevwCbT",
  "key11": "2hTWi3hnanr7K4PQ5wbbmf7cQUnQ9681gFMpKfKL4MA7mhpP1UbgR1cDTKJXiuUCyr5H8w3bndnwjvPjR3fk9QEc",
  "key12": "3kkBPyo4d81JAJhn9hnn3cu9sASXp9GKPLQELTVrjuEik8zPrPUquFFJSwwNAXaQ2Li98bKnkJrFSqAYBgHftsmz",
  "key13": "Xse8bdTEmXm3QgNaAPN6L4i8ddbe2bk6Mac38AzZdnVHZqtssAWDV5ekhouSaUgKDjy3b3Cj3ZTFG1avVm9AiGS",
  "key14": "2ZVruqXwMLRx6aG4HS4g2darWJLyb2kRvvQo8jY49jBkfm1Cnq4v13ZbqZ5t1hS6p1tDayPyCVFpNpt9NEQiiLLm",
  "key15": "32m35NLFEg5Ee6nHeYao13imnBbVH6smpyG1CwatouGGhqF77bARjYga11iTuwzV4CkhesetK3PwwY6HAVGqJei1",
  "key16": "58Fk7seyA3D5BSQQeP975cEwra41fV1GkEUp9WoCdGic4G8cKJmBMd2i4ZnaXvw4og6LKxo3dBTs318SsH4o5oMr",
  "key17": "2DHSYZRtuZV9C7W8jcRfbozHbc53iAp77c1RHChL2dMBnuDUrZiEZNZvURKNYxXuLsiwSZ9PSjkaP25U9eWpWtG9",
  "key18": "4yp1ioFFesP9NgM8RdfSQBs5med1xdBfp6QPTqJMfsDjBvowLFvMqMkaMG4qXSD5dDDqyCYB9dBGdDqUtuZrs1qt",
  "key19": "2UXJPteXw9zUHdkehLbj6dNQjQ9YXQXZBcxe1GSANWkUekXpgeat6oiVZyZYHZhdWcaQ9KgPMmVGk5NrmQvfJtZo",
  "key20": "4pXZfZqgXDvUDqTbUBUKMo2GK8zjiTXMi8qBAfV26NPDShgEq5CWViKrzmPuKyKMmWMoFRbvZUMZoFwZUowzbrVb",
  "key21": "4iieBHUahfLzGgAnuXnCXfLAHe9oLoTNTov7PrA764qCdkUugiwE5EUYEuRxQVoXZyMXQS6uuhdK3LYouMa6AHaf",
  "key22": "t1vWF7vDhAgy1xLfWJ81s1bgaLgwkFGB2jqQS5Uhojqm2aZT8AXuZrpEAz17cksdD9SPSuMgiEhd9UD4uVHUtTp",
  "key23": "cNNJ8zUHsSD2JJhGTkSqKjhchqwyR6aTsiRAKHaLPeTjeqbnuoXTtQWvG5Hv41sGvznerfHoZZ8L8LQ54PnkDzM",
  "key24": "3vNz3LmMwxyG4FcFa4SXF9XUxt98aBvt6AGBty1k9xqQxV99AQcGQyzsdpZzhYJJCQDGwBaMVRY1ce2kq5GPa1Ld",
  "key25": "3Ai8EMiUUKctx4mwrtBtNovwZBNHoS5dRAmoRuVYccgWvroXyjytNEFVzFbBGq3va1WEyLFH2UWBcd6iSf4ZeqSW",
  "key26": "63jn8JDX6EczZeAeyCV7yGwjsV6CDiJFnRPmGbpnGFfkouyrN9k4cZw7sr2J1dRkDi3FYQXDUwKU74mwHe6uPHLV",
  "key27": "4NbLkLkKCBDupjjS5TMaqEX6AwmcTq9jUv7myfn64SvNGgAHoXCuGApxELzeSbABYM4XQSJepvY9N8v8LYyoxXsz",
  "key28": "3yGRYi3w7aFxr6JfjrFnKV1o7maNkBWc4eHQpPL4MyoKc9TmTsv7eyXXWe5QEqb1TDoykiqveh4gJtQoxDL8KP6w",
  "key29": "5cKFYwmhwwfsUzKfbic5ezLtX8JUfbRxNSgYqLi6stqgymFx1489wCcUFycNCUuowik9Bz6WNXgfmsos6XVcmZCH",
  "key30": "4Fwx8hkBAGRuM8YkEQTofQBMXtETsdfBYpuzgEDKx3f1KQL66VTQWM3gpnrx3UqbHfxt27Syy1Cr6GsU1nmVx3iV",
  "key31": "3tvHvkHnYsKPooHtVE8z4iSeFqoWm6zoPxaaszaXJdbBzrBjfWRZEbaJn6sqrUp1dRqj7os3amCxYpsY8cbFg9fR",
  "key32": "4J6okqwuy9VdJQVQEJE6SXN3SVhRJ3vhp8YxuA7XBLPoTwwz3oUwzJExQK9G88ebUxkCtPNnaH6vP77nHp6FQ8Wb",
  "key33": "4W27puWuFGLQqmf9xcMuffNeLCeGar4jhbKVvNaSNGmbJrA2nSAFwEfYMfnbDKhokK1oQme6gat5pBjuJkgo8Bmw",
  "key34": "4TtpedV8p962HxH1cPJPoPXFYirdpatzkx7waqFYwgCqYPufAudAZAGxS2KKYGKgJVwfu11eihxttLZhu544RHeP",
  "key35": "5FoNexUF6R7YBjB3ccXWdYfo84wTkwv3vBSgaPZDePcrPfxNZV32aC2gpi5Uwuhv7UUiihkvCqjcoRMgzJNSHu1N",
  "key36": "3hoScCtiYZamBYm8RH4YciUxg3TwntVQaMKvkSS9A9wZyUkmdKhfqX9voRPqMjFZAA2DAam4C4ufjLrw27MVKy3z",
  "key37": "45ymr1BFMRKvVRDupVNoPj2Kzp13GN56sG2TPMARdNJyCz36NUJTUK1F54zBjBLFeLSvr2aqBNwodDRSghUm2WaM",
  "key38": "gDFGnvfwfe1wpa18jS4xtWHcnZdgZi6kgSiAGgC61yVA2o8ssDhNVThBqiKQgXBF1AakbyPnSLQWhWWgrZvNi49",
  "key39": "2r9gBtnjZmegPPxrPQ8WMQgpaNN2yqU2ovhRX7455Sn8AT8vYh6Gn26DXRf2D1aJH1WG1Ke7poGFYCxqKB74xtaU",
  "key40": "4KkdiuxRgAJb1dHrEwT7j5H54Aes2VWoHCiLz7bRLwFah8PwSVAmPsHreABJrLkFckAgqr8qFnSo9zuZzqPyfMEM",
  "key41": "5Uud8Cvd8fC2vTT9P28HQkXSbfs1ecDA9DLtmcMi9tjEP3acihngSPrBYbssofXTsE8z4pZeXwcZM1GwdJPfZ6ao",
  "key42": "48e4T5N6DyK78bCFwpjfZbGfJQUbzk1cFa49FGap5w9ycjNv5HavpZfkAvKcmUym758F5Sz2dmyrdms6WdLUbbpi",
  "key43": "2BtMN8NmcrLwnxR1FXUFGYQ6dKYK3zkApdyvAugtjfSWJkc9xvFKKEwEovkSx5EKLTb9MiXi4RnaJREH2MRSt2VX",
  "key44": "5JYMQNfu8L8m6aUGgJ7p1zLPkU27mkZVKifCjS1ih8H75tE9Q8itpchYmSzayg6SjYkVG9ZSCEH9qHJLCAz7QYUU"
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
