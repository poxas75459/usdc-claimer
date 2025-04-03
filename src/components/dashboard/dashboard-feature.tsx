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
    "5G1btqBYLo6wxqJvQdMpmB4Mg8qo2P7pWsss49kgbaMEXCwrGcoMfZ89ScsUu2QYBh1YgsgGHZq9UbF3whk1ny4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FsaK2JyRTwiWRti2q8AsUEtgWAXhSrER5isYXn3A2i6ULwVodZ1iEYGL3WnxHdHhST9kJP2HXcvdXKGEgqu4vyn",
  "key1": "5G8C51RAkNjaVQMyHzkeQb53iNspjc1Cw3fhnHDJoLMJaFCeVk2KVBK9CaLPj56sTNPTuEYkPTksBZkkmqbu8JsB",
  "key2": "3mcwDa7BjcQhbpY6958mnjUGbi7P2PvBt6EhdVUm9fbKK6uaubXY6MydCvTtdBboAausSfi58MboA58KQQi3EDrw",
  "key3": "3GSEmEcNdMZnLMtLthAr44DDT6TzxXo5bP89RL5MPWVwQjtqRC79Tc8YycHzkf519sfbhv2qFuAXmc5CB2usNLn",
  "key4": "3HJyuSnvKeb2U13sxJ1AdsyoRtuKD8HMCG6A8PbikZyRwwjmwepZMKPx9fmuHQYhYqhaWSGWd51JXDYXVbXHBKGM",
  "key5": "KCFZmnTf7fvHUYvLA8UuHfZM6B8wMazoDeRVFKBwonbJVugs6ZN35o1jP4ixMNLEeQ9TPm4YVhRgnuxB1pGgUra",
  "key6": "5vsMbAzgQ2sH1KPdsuGN8f3EDQ1bjQxyBxUUjym2q93fpicxxzoTZRnjZEc9t7WAchXgG6G7DfvRB3C4r2R3LcK7",
  "key7": "2hYuz92EqW7ifYtserck4CNpNoyN6kL8W1Ro48J2NWWBuiFMijXK5xeKLbizXuZFMbV9nTRads1f2PF34B7qMJ2z",
  "key8": "5ZRogcfuryGAnLGhKwtTZCCvBn99MgnGCrTdszwqn31bekv3A5ARGJKi47AgUm37eDkKpaYADu4WEWauqxCKSfRA",
  "key9": "8rdw2CokPhnWi1dNsmKo5rgDGEn33TnGK6C86z9dcKxYJ4zVyy78oFGMngp4BkhBayRHpepqxqeA3hUVJy9jSGm",
  "key10": "3v4jbVcdvuoXVeyYgh5RGuruHna2HjuYAwQQeifzhjtDd6ZmuhVsKvA5otRwPeKqfXcBhGKT18NWaKgv4BjbLDUr",
  "key11": "61RgiqoWeJn5g4TZXHcgQNihRQhz1oGSQM5dFQ2HBg9sNDiWSS1pzbwJTeDip9L8r3udXZaoMGD4o2P6XPoFrZiG",
  "key12": "fYPLzRTekAKVEataPjYZ3bEw5HjwzbCPZsVhnV8VZJAS45zfbzStpXKLsC4FT881gUqevVnYrwctjkwvYvyCqez",
  "key13": "63YVos6s9mtc2zTGZmFdCYv7PeZqNZZk6zjjmiLyoVFmzhM7navWJ86a5aQzqLVTfYMKXrjTys21BieAwwsQYJs7",
  "key14": "42Qk6V11ApfhkwjhLSp1BA9vhjxhUgUpYFp2zzD6wUeYPLMAEvLnPrRWYgLGAt6yvSTH4dgSCTE4jhoNuCkwhMa7",
  "key15": "5cHS2naU7iqg2ZDBsUYQimmYGgBLuTQAQW4D55JHrYkwupRJZdFdw5wjfMceR4TMN6b6bBLL4Q64G5icXPEXZSyk",
  "key16": "3cvfyKt4tTaUAF59QcaZyggPTGpoJ7UYbKPcm6MzBWE6PKPXN3XTZ9QeCrxqBK6ASwWLbcXwituTEmEB3kbsFjEb",
  "key17": "5AWrtKr4YkEoUPHgEgL24muYm26YADeetMt7ussDNV3ubSE8SyTnskACmAomZmdmrTmcAqLanJ8zP4B4WgnWLoZ4",
  "key18": "53UFomE6EvELR3tt82PhYQ1j6dPwdQVCJKPWBJUF8gje8BqUZH5pdpYuAXgTupPgShkV1XAeGo4FZMTHqTS5pxDN",
  "key19": "4LT2TXakRGmgXmjGAFhhpf4UUUYiGSg6z3WsxJ12CwJKem7T9MwT6zV5JCFJR7WKC1syQ25ktK6Pyrz62yTjh5MJ",
  "key20": "2rCTf4K4stXr798zon7Er2WMSxeg8B7ytiKPbTdcFSUZGW9Ft5J8K2PZ3YAC8ThYiuvFixYRip3qPq1TPWG7K73c",
  "key21": "5619SXLztxafvFoTjmFwAw3Am2BkCQjydxNoUJXewt3atDzNuuh1RUryLfwxgmmCdaoM9dxt4BXp3NQqtmbY1VbJ",
  "key22": "fDzscQUb8C1EnchqZrwnsM4gFxi5Ekubj7TKRUepK7YUEgrjtBVt1MNDG9VCDFm9y74LGyQxXKLENNvnc9Jado6",
  "key23": "2souWzpqkVvf4T6pCxRbnBo8hpn5jfzkN5ufpoJ4NtQpob9fKd9agRU8kgg61gvc3VA2MFpkgmm8FhF6DQvJ4RXv",
  "key24": "sfCMXwXae1vN2UffNPiDJ3k8VV2NKCaYFcKUf5J1CsfSBwf3pbDjz9JRxsbVFGou2DvcDhSagBCseZB8SoaTiGy",
  "key25": "3dpcyQjAT19JfKTPsrmv6MGawAqgBZDzAjUCLbv9KMmmCHNmL4Hza6F2SWf2GFwxwDmAXGbW51511bKdedJzhq4N",
  "key26": "24HM2HSvm5n6kVjvLHJhVkftdMisZk2y49WkXh5B2u2UTt1dsFiBQnLZRxMQzNLCtfi7q3CajUxPbc7ReSULwasu",
  "key27": "65WvBjbyDQrs7r9sYemQDBpRe9PZkQ2fXC9j4jAVCAs6bwhnQ3KfvKjR2i9b3fDoxYxQGd32iud4ZDDm7RW2NLWL",
  "key28": "4r2zsRF1uxPj53jKXUynfgXpgqqKjtWMdeV4tuhveH4R1DsAdPFqPkFmg3xdvDN3qmNWjxk6uEky8XXisb67uXz9",
  "key29": "2wqJFrdBz6WK3fbqfZ3XDzViZ4dQEoYi3KpG1CfGuGoqQAb22AKJsFsdAf5szuxg3SCVZbYG4jfSbByrkTif5Vuq"
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
