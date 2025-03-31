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
    "RbBMiU64ye41BxwRyF575jjQBuyFNgHTZEJvRAQEZpoRDpAPoUCGFN4AjBP5Lq9s3tQgQbPgRaFbAnbUfKZ2hsm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8saegz5pdhWLELThFCEfy4jXzXg35yUnsPDKiFsEZAEJK6wdJC54xXwSJxGp4tTYAWnH3tKUQXDJHVm6iCFxWxA",
  "key1": "faccvHFoFPhRgMuwZrh1wcmr9fePCUAvBMkRaNGB9UwDQ5S8tZs47csve4QMdA5UJDQKmZKaBiEZEE4x7EfwwEb",
  "key2": "ZmUDQdiTQ1XtBqiKtxEEKTZJCUdSogq31nVH9b84xti7uVnych5tyvL4Zkk7kodNXxDb51TLK5f4Cgqi3iVzz9J",
  "key3": "3qWFkwK5gErq6ricj1WHkv8AJiLk9z3FRhoN1EKdsjqWWTwRTX1NUtiS925FLZc3KNZh3ZjLefhyeu6DJqGpQbpf",
  "key4": "31h4zECbEzi3a3crDLGMV82SmmkcMJjbWULn6vxw2b45LVWmZ8UXAnBKVxWbyxofdidbACxTJfPzunU6fkpJe5gf",
  "key5": "4bUG3Xpn99NsQGVKZBkFs5vpYKZa9ViiBSdyvysxhpE3ems6NdFALnXvJFdy6rhBfafnp85VZ4qedAHLtadZRZNF",
  "key6": "24UCCeMSBSCTVfPCrKntxTuyp27eojaU1mb812srfnhGWp83X2u9fPM1HEV4YDpVBKzpaYnRR8FyppJ4dZQB2tVU",
  "key7": "4DDNT1HjaeG4NRuuvnDFt4S8RzzjgSwzcW83rHsgk6Un59zevt4mYuVuabyLjVRuVJgKWiPBJ7PhvL139Rd7cui4",
  "key8": "NkU36TDsbgRxp1Mt56TsKNN7Y6vVnpChek4ipLk9LoySQDpLUM4rtBY7NdUnzjsD2UGGgNp2hLxLf8cZazE7byM",
  "key9": "4d7mnu5zeg4LfZ16wFFh4MrQpX7Scvtu2Qj2SQoqqkZJdemugLaEwJUHszyPWzxTjtGyyQs2RxNWbSGgGCW67YnU",
  "key10": "YnXirZ7x6Q4GJXwSyTQN5oqDvbwhWN7HdW7Ljbm4YniHx6XDf47qMWarmKjsdsPSkRZWwbSkTnzeANb6dKvwtdc",
  "key11": "2rEXkU9Hz7oRq71kbBUmW8exWvBkX8rZZ7pBodWbBcBXnoejiG9kqNTY87V5PKoeqN5mk2HfAFTZ1CLSwXSAErXy",
  "key12": "5Kg9FJHUhUsNQfEV9nAh9yudWWQJesYTsdjG9UBqPAb1AfxToMMc7KaxUFqP9FqZrVa117Rpu9Q7V19ZFDqgKtpG",
  "key13": "3NFrJAj8FAo4kbDAXV7oiCVGGsupjAQCrjnbmNeJL5BJSg7jKAeLT73ABG33zuh6JBAGKHCK4qAVdgVoX8cMssWo",
  "key14": "21tpARbSHwN5iFYbWzAg6aAFMQJhcqsqeKsiNn1qUtTnB6LQ9UMTad8FgpTAxUBy8C6CGWA3Wxh9GDYJM7GSKJBi",
  "key15": "2XcBiqy1iBmXQqPtLEspPqNeH47ns9orRfMfAMiUwS7uUKTNtenzfrPwWJnf7aFuN1VwmSyug9dznJ2xnW7xkZZq",
  "key16": "P65CsmnMJPe5tdiRm4p1Dqmcd752Ho5ondN9zrWa8zgY2MZtwGrR3ceoQKS2XfWqE9TKM2qEcnjKsTfzK6jc1PE",
  "key17": "4bTbZd87755o8DkJR5EV3CXP1Nsm9tMaoKoNSYLpggikw2Zpzc98PZ9k8zGy3B6aUJpqY1M47JXkqt1PMcGUweqM",
  "key18": "96WZfmZz9eeJ7N2Tru4rMAhBNbUt6xdq3azN9pPoDDA4MmdsF1vQksrpFc91LiCpo6MhtbUbDJrY9J1sTT5R9iz",
  "key19": "4k7kGC72co5NxrUJaA6bvo8dmC8AySWntUe1rKYp8oABJXTEPNPepD3eXdJPP7tsR99rrp7B48rEPuDikNzFUqFN",
  "key20": "JTLcUXtvcGuAQ9eNzSCZbm2GkSajbbop2tMQudUGWYPmy8qPUQWzdfT9qCHkMLHCmNxeAUgPzFAxgsoQtnBL27C",
  "key21": "d13HorEnCg8dzhU1Q8vxXZ1DS1cKcMQkL2NEDfMLoe5QVMarftdFyjfT8SXXARVxMmAfZXL3WcKQYG8CRrQBAGK",
  "key22": "37soVawxX3HHLkHEqR4Ly9fR2DnnEndMzALSmGt8sKRmpAeWbcWR15sP9HDK3Pm9VDgXtWoujAe1a4mN9L1Lf7gD",
  "key23": "2oyuPiQvKZQxSSDo53nGkDoRvmH8oxNU5J4mQqf227rFEJF7Po6JJhdSG2gU2bMUqqr7gtgucp4WhUWrqx8wH3Hn",
  "key24": "5BNshimVRyDykZ9BasXqpqaLTRv6b5C19dt94NJzwdGM5XyiN94Q2D9SAZSFe9dX3fJvipbrFePYzwzdk7KstPDv",
  "key25": "4snBgdck62GZfM32gBZtyfSGrFkU3TjgUFV6xKQEKEr2ojriaASnUnu7BLYGnUEWLzUyv8r4vMdjKLUSSMQke9c6",
  "key26": "5FmdR2Raw6DKhd8oiumhRbtSxyHMqcaGgbTqJ87L93MPuJaNwnkQjGY2vwUJ7wjRk4D1pwhTHJQcDGs19uj2nWYW",
  "key27": "ExthFvmZawsVPDocCha4uTwjvj1mX7XsaRDJmYWD657QSofaneFTn92xu1sSnhfEXCfk1AogkjfnmK6hU8bpRG3",
  "key28": "45m6ornwuAt3i3mLKcGHKUD6PDJDTHz6FzwNVPgKfTcCLERX4uQnWa3y5FUyjFUJgTWvHAmV7wFvakZJiPBBSpDt",
  "key29": "oULJGkxBTKbRYVgU1N1c6Ffanacs2U18JBEberXhwzaLCxxzSTFumEiaXLoj3ZMj4mbJMBv6hNH65pTTrEaLcmp",
  "key30": "5p2zR4k8Zqsw6inQGgtxZKJE1e2YdM4NBm4V8fuoVsnf8q8EMHCrCiE5NmnycfNRV2SLGBsULvrkDTdTYtxfAvpP",
  "key31": "3FvryGpBiT3KRsnEBBS8mLXoXcGtBJUeH2KmwzC9c3cmrDCFS5toQ9UGQ8QCDAMRZSU5s5b5kHzQoVVXA5AGUuEt",
  "key32": "5pgQHdpsunFL6HczJtH1XPf3mkdqhQuH18b3FuKZxu5FnFUAwUhJSSf7sviBvYZWxNMjUa31vrQ1jM75u3is7sqR",
  "key33": "5gvhBWkj8nqRouHQXFJzYcxtWMbyrjzuDU7XrSa6yKcZj4FTAD3LpUhVhRhSe24ZKegaquGFUKq8mW9SiT6RTc1L",
  "key34": "mK4rjPUojZ6XCboDwDoJBD7M17BmgjW8y4Wt48LZH42mjEgTekc1gHUnjLmaZc77XBcwM5mb6EgN42ou7Hbb2yw",
  "key35": "5s5jyhBUFqBtmn2iBfamuBEZ8tJZLXkXbsprnepijam2svL4r6DiW9gu86wbSA8AkFw6gv3cBENF5wnFwHTmY5zK"
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
