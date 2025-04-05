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
    "2SmU9Uz1WtLrCj3oDvyqdPKqdZdY1N9qDAbApwD2hkq15W6Zw8FrwQQaXuU15F7TqR8emUu4rCJdwA3mFR3iAwEk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t1W1FPoDyxSJSvxK1JRa5ThDaTDFJ6Q626vEaWQX5ehSWvo4L1oMwaKD5EpCHCutq7j9QeaeayssJvZjqLogyd5",
  "key1": "4LJCQoP8Yw7Pw2mi6fMx3orDgAyf4YqVjcCAPUu63Fdn26CBr9zJzX2GoTgGootvgqh8ajKFX5WGMwCicHoY2unB",
  "key2": "2dbbs4A4CAzFDer4X5QgNN24Gm2N1V5A1ytgQCeUEGHH9hqQtV3FekmbKpv2wQTeLEg5tWztLjRqZhbRMPbXBVZP",
  "key3": "37qyyU5NFp1c7NJMqxrzcXXnudZL7XbtiGbehEon7KDxZKGJCMBefZLJPPmzRzVBuJ7k7sWru11LDL4YgfTFihho",
  "key4": "4GyS5wC9gsbZZE1Xa7CVvqKAEHBAwePoXH6FwWgdnjzXJUrf4f8ytisi74Hsiok2C3gbru75tigPfwAUD2g9DSAk",
  "key5": "2svuoAiY7Vib2md3Qjn385djtY6xts8GatgPGNwK1oMcZVU3JnnDY3vmZdigXFWJp3Z1s25nu7envbABDqkXbw89",
  "key6": "2XYADDqgVyoueQxFuTYfQiUCUzDmmChWZXtow1TQGTNqBDWKxnLiJZf9E2scmfgkCJBbLFRyP5EVsRouqPuZY5v1",
  "key7": "5PW6ytY32bpo8Vw4CSwWsgAtSK3jZcpU1N1bRYV1pAudt1fMVkW16X4VG5wqrUi3EJHARv4LVTxpjktCU6wBGbz3",
  "key8": "4GEGnc4U9UcCdW81q53D9ekKMb3Y6EePahXYmJZjSwyTAmfHT6mQXQqgKGHr2L8khwd5XQPZ64amLgTH1Dq59kvw",
  "key9": "5X1X7NwTKApdnc1HW9YcMRBL2LKEjk16LD9qvBvubt387MmYj1DYVGxgxpGsk8A7wXb7nsR1xBVU4FEf9z6rBZun",
  "key10": "2Nvg2iCySkpUB99roPkMPS3vNeJ3joiHZ5gGatyC7BSusnD1PFq379dz5aj2hUBr39WpC3ERR8GSPHumEzsd9xpZ",
  "key11": "3HgvJtzzVzjFqPVXK8hx7vg4D5a8DdkmUTZiBvwfdAYfUYmy4ZPHGenukzBsmNaRnd8kEoG1GwhxnmdZg6dQrcj6",
  "key12": "3xVKhNbpQtqTbjpec1EFLdZdgJvuvxH8vhuSi8jT64FREdQHpAjKpSnUAcyzgYhmKMGn84Kd2vtdazDcM9RTVEs2",
  "key13": "3NvqvWw4Zi2PLij9jTVeSmz21CLWnT39wZBnNb6EDDxC9va9RtCaFFrADUWbPiReenrRqP7gJwB78peHWhRgbDLQ",
  "key14": "ML93tEUQfNijx7HeJywR8hF5VUjDJViY2FbvjbbuCUtgCTJ8Du9z3R8QN14uQQ3WQjtV1MRajy6ov9YXBn3vK6N",
  "key15": "j57WoTQxWKXM9juxNwXLm4kBkr3nSb3q3g66Pt2sm4ud2GU9LG1AHEge7t4GKi3AUDSx3REhKhSwZh6fREKZxSk",
  "key16": "3Xc6qn6erPpNzi5zB2CsuVn2mFTYvT9FDQhzXjyQwBUi7so7cJVFw7gquLkDjFkhowXBayF7H7CBqGXN1gC62yeV",
  "key17": "256euxULrWgi85uvwvwE4258zv9M6cEQ7KgBG1BqUvvvGdbjAFJpouGzSAkvNG27YTjHExnmiZP6DwyV5EAv2kyj",
  "key18": "5hr4ZXtfzPD12dy5SRCiuKNspDZyzwVJVh6wRdpyFxvQCHinxEnAM5wfNtbSNisPMzfRRNuE9aDCXweyBTD6PNQ3",
  "key19": "5jkkd6rftvvMcJVbTKZZPiNZNUonYoF76mLH2WFpXN43JJcsqgmFUuo2gZVfR8w9yGd6XUUj5fKunu5LTtqrUEAZ",
  "key20": "3ChR8XcchcuSmP78U8YXhhBXXA9Dj9zZ21sAAbAc3SoZfrfYbfdm5DiATAW7fpscCiXBVHmdiWzdctE75exmv3qe",
  "key21": "5RPt3uJVmYHZnd1fcFvRUP3ErMx6MqQspV7SGKFANFui1zfU5UH37BX4XzV4Q3oAi4H6311zmvvqoHj34RnYmQz3",
  "key22": "34ZdL1nynoEJeuBuDEN8e6Wrt8FAYobKp4BWoM6nT5eTRjLZrzW5TmL4FGmjEzaoXAtzNritwe31T2rpwYFdZJHY",
  "key23": "4duE961qxF2Qy6yMXAQ1C4zxBtSX92mhEumAD5NRvsUpCVsAaWRXpv6Yoowndk9GnMGm5JzWd3zwauysdoe47vJN",
  "key24": "jveqKufQgeT1zSyuwUtQWyNaUd75sZ8dX4jRxPRBFF2DLswYu747zMAkcHh94RhATJ5UxoxEXQTWXQNGL49imCW",
  "key25": "4mFDskyz789v5Mv8DzMr76jwtXA1sMYrnnPD3sZe9KDQyzLd9LNVm2vwQEZWK1APFsjtJrovuLopFaKey4MraB63",
  "key26": "xt33cvUp2c1rZ19ZCs98vJgDauJauS8K9JLDwshPo3XKEjaW2QWFfeW6ZoKvJzRJsBD4GUyZWb7MHJqMWM6vyAE",
  "key27": "epBs3aJycUEdgXipXAvgVLub7LD3aKLTMccr6BjCTB5eMvsNtJwqiBndshvCbLvAawJp1uLwU3EvgtQ9cMHVrDx",
  "key28": "4RLRstwDURe6AupTTyJieVbK3pSAr5BabMM6qXk6LSAradkVZABt6Cr5VRfkL8YbJaK5KmZYCnzifXkcy3xzr35m",
  "key29": "3QV8kwX6BSKp8Qhk83VmNCTNLw4FAieiizdq3WfhQ13rh3nE8Dj4gNnwVTWinyFNyQtPJ6ofyGSAMZaEQAukLPqW",
  "key30": "5go9ige3fbZynCPeEju11cH6zyCeQhWRPFCbCGujKFZFVKV8JLopQ9oHnyGKQ8cia6QFVHjHhkJzM85dbsirUUrQ",
  "key31": "3ZQpdmCyEFdD52N5HPzJ4avCMwqUM6ppvSuB6RFUbLt1fisihGt36zi1DjweBr2vJgHjvF5paxBM1AZkgb6diZWc",
  "key32": "3ezmYt9rDu295TuA7fmihNwkN12XpHisKFTapPEAkhWWeQwH2rAFRnuRxFfNFYLdELsYMrK8whLLTxZVw9Ma59oG",
  "key33": "2shsorG9yDAfgTQuUPVEKMvmK4RNj1R4Nzm2wFF1gCUuzTpEfUwCwWFyAaamEYD7D8Pc8RRqnzW1ARtq4mLoBCRS",
  "key34": "2BFPdUip2xNh8Z3biH2wQNpZNjjxDxxEzNymxu5C93EKCFL3bS8GQWkeKPBoGkfwH3qbLDGrinX1Z9aofV3w8JRL",
  "key35": "2EdKMDFcYNDTpy4tb2juRK3QC3hHHwDLvbBJzAKbwY4zbV6oXN4Rg168Bwkx81jRUMDySh64xtmAaAhAhM3JKyP2",
  "key36": "52HkXSWhXEAhyuvHApgm12cpmTF756vJf9nuxNe2CzwaKymJBVyFkz7GVkyge23sco5DGUKGcjknDcm9kMfkqcBg",
  "key37": "5W8fMutKuC5nCyGSGQPT9UQojcE9Me76VMqNkGiLFZ9w7r3KSdNDBAoJahHtBvBXTGCgJRGG5uXwVeNdjYJcnFs",
  "key38": "2SjJVFVtssWkMnK9tBCqEF3gMMWo1CinRffu6YM6NdwcCX1nCYUC6ecUKshsACM4ezZ9PbXD6CBTdtec5ytUBU42"
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
