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
    "3pY5h93ifpgducxLqRmZpR5s8gibbTSnWB5CQ3d5FAGkdz8HmQ8TDobiW223fY3knu3Yz1LmvrM18CCF5fspH6TV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fi6XhYbjTUW2pUgjY8WftmC1C7qLbYSu1d5rqiPtkrLdF6GpMJCe1A3ApymEPYr1upSyXp5sd2BxFyhTsXjjKRt",
  "key1": "3WKJ7SVQXoiC5XsRVkrEbHyVGtMkiR5rxpyU8JLCkqr1MKrAyz6TTAhwgFPsN6ytemunqLTdxS86Cm3bRGV2F62i",
  "key2": "4MvfJSbALrpTT94641dKr9cZwTfkcX32UrfaMKWTqTU2TWzXVjtJUbgkwTS6RCu5gVL1LaNUvrPGCJNfMKA2169u",
  "key3": "67UuLESbyEtRfrb46vTLdSDYbLYe8RVDiBpGJjnnEP3eY3HZTfTWxGCsUayK6qcjvXpBa82U8phPePvhUa5z3DAy",
  "key4": "5bf1K145JE1zWHVzDkwxrw5FBzAYjPo4G1BQNiaVgAd6jivmm41zTurVu2tpAa4E8YWJruasXRA56yec36YoUnfu",
  "key5": "39CPWrCny2V5z262xw7fMPX8uQv6ZJuZDUHU5bXDBnexqozJsUgGLbYPDV7HgT2McPoJxo9DK7CAVwXL36qsp4jU",
  "key6": "wxWPvnSD7yCUDWtSFHQTjYfNaaNBTUYe6pga75Xphjw5kBG7gKA8nevMdompptq82BxEphrphdxSq62xWLSdSrg",
  "key7": "NbXnUUthCWuydeFRiqhExPwg3zGcrZ2RnfJidYG7qcUfDvdw8QxGjR5JR3GE2nYBLfeRHhJwC9FN57sfs8tcu9u",
  "key8": "65rPwfeYi6p8nnr5iCfo9gWLGdWoMMvX6LKjn2DzjWJgpn8QG6gpwDtj5pr39KwEX9pkXCSrgfLXthb3YBWnJMVA",
  "key9": "4wXjYxVHyx7nKXoikUf4EWac38ndDJ4rE3we7dj59RUkR6iUCJ6usEgkYXLep2MABtcojhbeLcNxLKAM6RrVzhmL",
  "key10": "2PdHw9jKMih2CkiCGuj6ecgWAobGsQe2JxLEtvciVGfJJZGPT11HXcMd8zP3iW9xK2UqbntDky6pzJXcSKRgXtb7",
  "key11": "3pSPJzAq3gdS1xyNnLk9scDxvTBrMDTgbvFjrHs2n1gqzNUL1qfCd836CXkqtN7fk3u9jToN2LmWqcyyMeib65au",
  "key12": "2Qy3eaBDWcKA7Zd7RHAwPHc4XhHtSZsw8CF46vdqJgPbQZnh2TCRPbPnRD17KFb8kb75FrnvEEme6puh3VjcRVsJ",
  "key13": "R8w6V7UEqV32qmmCqP1vPhJCQFK1CSPS5esH1qb8zcqrfv5cAqixAErXJCE87SiedwPnDEQ7U7jFkCpNBiVQLF1",
  "key14": "2R9qgcwfJaTvDtpuW5HCYMTr7uxm5DokrMiYXJ6vFKeJo752iusMtrzCMGx3dvtaxeDsLv4XbXb9eYyXU6RX6VAH",
  "key15": "BnbeAENMG4iYoa28fN57gxPDY3k7Vi2DLEJacCcW9fTGLbZvysmn7YA8Da38MscZ34LQ9MChA4wo2MN8tB7HFUN",
  "key16": "5xpXfBN4mEo8YSftja4P3uTK7PrYV15gFYjCoeagNchCeQWu8b5D97KoQ6mc643kLwCazcd8QXPmjHmaT7XVoJMo",
  "key17": "4S1v3YJKBvmeqnf6ZuJFBa55iApz8x2jP5BG5qsAvJtaAL3LVnvUNKRfEJ8kAhq2BebjBMPrkrfHDh7vuSXARMqg",
  "key18": "4zeJ8JUp5mjWsy6mjm3NryAhbQiEPgbZjBviC8L9nASpWifRcJrzgjVtsCtdKsTw64ZxTE9wBbQyLUZriZzggV2Q",
  "key19": "59yzDcxmAc24JH2fqj9evNZ3kJBE7jCcLsdekYKRm7YVGLP7Fr3JuF33qDKuVoWCNL4hayH2P6Gc6wQjwe4dt16o",
  "key20": "2ryrYL5Zj3tU34WczA8hc7hgPwB2UwcFJe913hdjdA4Wv41KSEcakfjM8o51fwHUZ8wpJfJ9vDyuHwX4kzTK94KR",
  "key21": "4fpGixvdnC8TLRpA1RPXA1rCPXFcNxmUzbqgRhEmwYApsTqMWf1CkQQRUEUw17xwMntKvQWsV7hEFBKk77UCafTM",
  "key22": "3XmG5i3ag26VJ7TxpTRALe7S61j9kgGkf8vjRPryDnQAdY3BzGZUPyH13tKauUwuM5v4rMEjxjqXUwwUXy1CNoaz",
  "key23": "5KJf2BFzPyBtPa3M1NfM48b2juqzhmzm67GScPUELJaEDiry2BJf3wpgsHnb1ty5bdJTh1GJrDWQjhsrRqKYGrwu",
  "key24": "3hr1pif79xDeU9BMSPsKpsMfJFFHRw9sd94SP6btpUQvdrZSSepsiyFCKPmMFL3uuATxrGjrgriKWAjPfoToW9Mf",
  "key25": "21v9JgRKqJ5w8E33CxpbzZ8M6Y4bE4J1kBs1wXo2LZV4Ds3fXpQ7A1Xv62NPVZSWZx4tpWPK6oV4wNwS2wtEYN22",
  "key26": "WuB6tDtSyBYoeUwL9fPNzDJL7Dnb6kqBkPdkaLVE16CoMcuifhyV1XgwAYXYsMtj1VZmdXCao6HHfd6yGgpqNTi",
  "key27": "2kvkkzdi5DMBa2YZGWBUpR99pXtvosEaDZ655h36yTcaUkMLyvzuyYue4pV3jVe5CdEskagyR8fPSfejM3hZHuwp",
  "key28": "4DywGJY2Dp96wQukdYDA58nNuwXYjFPt2zEJUvpxonBVWRVe5m7LT6WtdB4TuShQagVympceFy6jAXgT8nTJu29h",
  "key29": "2A56A2p5V2M7W9htjNV8X9NGfCYmxMHNe5hqFtzaCWa6XqQgkTMdGVUnhg1gnUYBEggnqj1eN2M3D1aoMYx691Lo",
  "key30": "3VM7Q7YCeRUT73oVTzjWaR4fSW6vuBia1DCVqKC5sNaHi8Hm4FMrYACSExico3WCCDpGb86QgXGK8xvvL3g2HD5g",
  "key31": "4jMwRJJRXW7JjWxhV1VYMK46qZv5JPTXY973USAByzcdV1RVUKGBfoJaucohi92cfWigiCEye4ah6Nz7oBiHXCp6",
  "key32": "yhLK3DyGsxeiVq6Wx2pQoueSxApALJ3VdtbXEW1HHryfwiqraLsvgYSGPV2KHoZMRCg5Np6rntQdrSFuCK8YbKc",
  "key33": "5JRYizSZ4i1UzekNG1mhM9jkGZAnByBrnXjDcg2oAxwnfzfsr3NDV4LiDWM6KcgbPM71VUo9CF1Vtf3XGfEaULiZ",
  "key34": "32UY3vcWmwXeVBfLKXBfgmfUQHZsZSHQ2Dc96ZA9nGtQgxqxAvPe44jqULUunmQzrAoLcTui72BRi6ZKQ3bhGq4r",
  "key35": "27kEzNdxkGdgbpWCan1HUs16wK5RkggU89WreTRDc7Ff5jfJD4TB8RDJ7sXNpMWFV8ms777uaCZK6AeVRExsam2f",
  "key36": "58e1Wto1oF8d1TFtq9DfyifodhdBkmaosyhD5KNmtFx2po1RdN3PHVp7rXG7vrVFdPX9iWJP2aPRxS27UWzpP1kY",
  "key37": "3XaCV4Dah6bvFGA53maie6v2bR1GTfZ6MK4wEtp3txLxX7MUumnEtRCtSDUNCRKDKXxucYiAnH4Ma5gxua2AC2gU",
  "key38": "3kr7t4aUKDPVNKvdUeaQjFeJLLArSpUDwNMSnnXvTqPpAxdbHVaTpmp8VJt97qFPQbGdu4hZ8eEGq7kE1f2PGtNu",
  "key39": "2rUb74cpq7BKatN7Hkie6Ut1NXmhQTJ4bAW6nJVGHv7DoJ72PdAC32ZBj2kfD2kHnmbAW3Pqgp7QQ8rWYih3wwiA",
  "key40": "3PSwJV4Losr9go3b8LPqTDeVbDCbTS8FSFKA456zWtwp1PgXqEfXzBDWfqVBBLEZnAvAmMWkLRNvi2MCnLQMfuba",
  "key41": "2prE9tV84XU6fRpoK9SXfVHC3yqmfJcKqy2Aor65CrYsJoJHa5f4WwsEdDYx47pk8nR4D7u86g49gkvzp1QUDDCw",
  "key42": "3YX7hagKQqGwk7pFAE18K2G5mk9CXCwC7tgbar8siwVMokGQk7wXESvSAY9WqB1vTAiAYKoXGpTRzGemx9fTWhDL",
  "key43": "3XzKjKhM89U2U2vVMzctEYLykuQLmcRKEnc1b6MVDhu3xw6Hg74qSykJWRQfw6N7NWatfbkNi2Z8nEvmucRV8wvK",
  "key44": "4UCcVSL56kFctJLqKT67NHEaRehF4NvCCEVczRAu359XcJsyLV2TzsXRSxaKALFmQ1NewRK2LBF2ZkuW4CoP8oPj",
  "key45": "5N8KeKuw4VVJfWTcxuqYNinozimt6dy7erSfER68JWW8BmAoRnkPqL8ZmmT8pvUu5KgKnLFDxBTw3SxVCYdhNCfb",
  "key46": "5wyvFAeTWxkZnWhZqQGeXnLPNuv9NeoqSvBwYXkAFizhWLx7jfWyVgHjCf3MvGHn1NbKTPKus3VRA97meCHS1dLV",
  "key47": "5zjSZDax4mjdmQPX9eDTytjdjt51FTeXAVMzrgM7dTKpABfD4gCkcWUS69CMHnR7FB4mz97FRffQkUeHsKuTRBJ7",
  "key48": "66Q4GCzXfHjb81uqz5xUrVTEE2nrHRDfyD9DXhfAZet14EDiu9jDhWhmvj1MTzz3uEX8EVi8eWLsX5mezXx3txJ9",
  "key49": "3dB8q3LeMHPNDP3ex393WZvQUwomdiaJSih48krEDc3qhoyP5NPDgpAXTu1iFN7TVyzRnztB9jD4Reu5S1fFoAWg"
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
