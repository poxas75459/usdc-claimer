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
    "4naednS92KPKb3sdc394wJGcuLzy6vpLtJN1WPjVMaohJMvr6k1X7cuyo2Ga2KNxP2D2otVCpSQY3SDp2Q5sDZoH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52dBteRVmcGjF851Z2gP1P6M6vF2ZjnzWrSrydJHsYj67z155tPQPohhJSQiuEGnCd9GASGiUy9r1UGdzdVNNNcR",
  "key1": "4Wj6SR7jpag5Q8WhK3MBoX1KCnXth9bsodt2MuLPJHYTvDBZyZXGGZJ7tJPZzqdgWP5SUoBN2yzAVvemC6sbpkR2",
  "key2": "2Nou1JGsLbYk4bB3dVdvpS8HG4HGajrBZeH4GQMGaNt6cmb2pBoJJaVB7KGixJcbgHPwCtrZ1NqqzzGhHrsefWDC",
  "key3": "RcoocZ5hJdqgdisej4cxe96D8sFKo2RjvQZ595XYW4coKdS4SUPCRAuQCVQ4yxtgza1JYikdWe6ocxCkdxGv9Fw",
  "key4": "3kQTmxeEe9r5Y1vHC9fGR6uwyiCsn9w2w1QtXwEGRnnL3SKPFZ87DUqNJ9j4yP8KetCukgeToEaYtNEaDByHACWx",
  "key5": "2vqT9hetPidKsik2CrRA9dFTFCg9wbnWL2BoEWj7dTAHdw7Bkf217iTmuYvUFwax9mbbqYyh1c37Ftgh1EAVL6CL",
  "key6": "2f7MKMaeFRe6ttFe1LKN5mX2iDd6B4YtrRBr7riYCsC55QXv2swGkpfnsQ6Cz8jSE5ppTNYa2SgWhfz9fbjaGpee",
  "key7": "3qwMazsLLkGovygiNqbxZyLkLchMMmVFbe8BA7AHVHefd2KSiVACxdJ4ojRVL3gup3Q7Yy1mgUFn9psyZnEVtFwR",
  "key8": "26XwxNQCHhizsfMLTimukCvUmYC7JxoTjsiAjyXhoMG2xD8nsgjmKUiXM82CNgCPHGCRxvrn8HzVuu2tFfgvTbbR",
  "key9": "2vR59HerYwMYcpJxPyDD1xLsHQceVyw5pzq8PkRDsmTgaR8wm2Gjzo1JgxsEVjakhKYE7CWiDRKVXnzwR4ziPNkk",
  "key10": "3xSgT6qQGPAcTF7GDD4nNYiJ7zvGjesbB1pQv8tPxRBfeaExjkyaxqma6etZwAi9h4f6L82FCDAkoRDBVz3JjGK4",
  "key11": "QcTQEiFDirj2CabGptYZZkLZf5jLKLjC1ikUXNeydhvThSonk1jr8RLxoitKK2xKR9Yjt4bBsA9YaqxDM7nZCeL",
  "key12": "wrc3Dgb9ogf8PmAV8ZE3aFMTM7S32dW9zDDaiiwxF32BxAuiYaQhqNdVQRi5RHF9USBWC2obKCXcZ6jHAXFQJpm",
  "key13": "5J9J2QLPWmGXAAK1DnfwJnoYhh5Cd34JxVc6Ps9qKVZZxUTJy2C8SLYbEN2nd4We7TPJFHDQufvjCmas1snJ2bJJ",
  "key14": "4ydUfVgZxyZq4MrnMJrddjaZW8i9gaRs18zh8fiEo6BbnziQCtZ6cGXjP16iDQWqVPzunN6m9dY4JwJZk3kMzpUZ",
  "key15": "YnD6pdK6XtU8Lf3UxrAvkQcqaaWpj6Mhr9MYudhtpuwwZnTT38WJMaqfQTnijiyTLBtp2wQbFfcXERmi1HpLBos",
  "key16": "3EyPnyPESDVACMQkMCdbpPAf7GJvo8BGW7i3iu2KcHYm48knhGRqwccAafmUKL6KKyD5ASViXdKobrd4TqNQy4Ar",
  "key17": "4cCdD9HSRHV369mAfwmS2JHRaiRWdBgmGtgAwS5X8bCgMArbRfHeQq4JEk2HT5MQYZpKEtCwmHW3XNHr7DE3CbJJ",
  "key18": "5st8TvqieoeVJRY8ZReyWQbrVokJg8zgzRSL959SZVKzXiZVEkHyfSzauFtGNUjJ7Uq5DdFnm9k8k8DkJ7u6oPAA",
  "key19": "wA7RR2fRgfmRQVN8PHSphLmYWG41BtvjwnS1Eu9hT2zn1btmrovyNv7csLcpV1RHrvT7Q1KfC3yECYRZkDJxNEm",
  "key20": "36ZfefjrcgNDuG6TWbpx6jPPcRpMy1vZGzGAQkZrumGGYczPLL6EaimZFKHq7eRXk2dg8Ah5dZpcYvxgEAz5R4og",
  "key21": "5JotuLYEuFbrVycbz4Sz3RxjVFCYKxRFJkcw2XrA6gWaXeUdvEXsQ4QuNFqhErN6uQCP1HUPtcR4b7rMJ3MBGa34",
  "key22": "HixU9HfycYBQWdPf8WVmS2uAmiznvfufJgbQy59kddGrn8DhG613eRKtDg8sepKcj8C8qzGD5mLGYePnKfU9ke7",
  "key23": "27dgBQ7Hi42hU78ceb2Y539BtJeEC9ZnY9Ec8Yxoq1kPXWC1vRXhAVscnUBF2LQJDCSNv2xYmb6DiJnRdQTABRZH",
  "key24": "5EVnH8bC9QDBLneUwHctyNeyY1Ab31e9sPN8uNTsi2jyn3UJccwtsFY7FkMYvNgG3E2uSWyFiJhs1WjG84eJ8oVP",
  "key25": "5QXtSaqiC366atfKGmmXfvEwYoRyk994zd2DZva9votSjkUGkYkpUGrwTy72NEnmMEmEBtm6qtVAaRd7ghwdiUVs",
  "key26": "579Tu4iCN85bqLBJGT66RiANsifxyLXVberPxDtYuMFJeFUWc9JkmnA1zXohEzeGtoSC8LAdpRapodXiJmCiiyHP"
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
