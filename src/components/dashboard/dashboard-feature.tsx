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
    "hApz1gF2x2BhDphs6X7apufbjba9yDsYi97FbeoJLjfquFNbMy7kDLX8uuvo8oyBf34AHVmPF9KrxaiJpaBWMBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35vfutKVdPLyJnKoj216Yz7W2DmFSDgap5N4Gz1invFFm1tyaa6pq4hrxzysPmJ5YFTMNx1r6pZyeHPZG4z3ucAq",
  "key1": "4puMNKQB8R7cBcJhUMMVbBJeYfFpBmnUYi1itM4PhS1Tkqfv6hLP4JoxLU4UXAkQfq2381ca6ueFoSjTMcywpMSX",
  "key2": "3Mbrh8XFM3SGdstW5592uVia2ZHMzxwPHXK5gGnFDiF1LYteFDUJ7zfcPyJLNTAAJvCd7cLRkeLPi15GpRmSZwkp",
  "key3": "3XqT2j5bB3JatBLSfu9rKNPUEBreW6jSUvHzUqBzkMBcM9BBhsKKWvCKrE2nWK3ZR3YSA7zhPtzBkBwdcN1gpjCC",
  "key4": "5J5vnuQrUhtWxPQ5fvcgB9hccHesXmcFshLvCgYyoFh7dEtq1b8j4WoeWGxLswmu7C2h8oDz7RqCXTMCMzcV9VtN",
  "key5": "4cqjz6vpfCUMyggJuURg4aXKmAqRafCyBSNdp6uxyPa92FHvKdEShan32ndaqD2iHrNzPaEupfgYBfuWEmm6roRf",
  "key6": "9njnSoDAExBA3XQQbUAaAn8Mcz8UK5M2C2khruKWwGWdJEB3vh2SuXYebTEFsJjYNRatd1cAF5DD1eMFUeYpSYx",
  "key7": "2WA8FNra5hicEPqmpeBMXNsWPuP3jL4VfkFf9dMXt2JEBJEe8EgePy5Zb7Zf9EZaEYSv9VC7ghuavjzfEbtwWbMu",
  "key8": "39vxoT64nzhc8xLpCKv1Esway4716ePwzByEHYWNc8e2U64EAL9pVaUVwDK1AnToZEvbgcopppMgJbxnXxDLmmKr",
  "key9": "3keS39vHMXFus4c8v3A3cZKdWMN412BFsdPyscL5gmVFL42xLL227nGTNLKGrVyhA8cFCYYv4oGAQgTFeLTCiknG",
  "key10": "5grgUdemKtnTYou8RPebhgvgg52U6jUqnjX4LNoRqoi5pv4Zxh3BZVte1B4K4ncxvoGdzUfTWt4kZsrL14N9s6R8",
  "key11": "3K7GHebHxZmyPrrJno12rcCKB3ecTQQyUH6JKYBz24nHa2VQnbxyXmNkiCHKBvmDyjaJw8Wm12u9Qdc6CKZsx4WY",
  "key12": "4qhuvkAvR4ScdyUs7tbfFXx89jJ4oJdA56N4yqvMTXAAbAHbr2rNhTRTsMvv29nbpS6uvZJDy8Kdg89RUPhS57JH",
  "key13": "5oWqB4kcUMWG42maKZ52EsnwHEEpj36Y6ktSKGjj325LKnq7bZ2ndCRTf2kSL1U1yCL3dyyLfVHmVkkv7wuYsEhL",
  "key14": "2QemNYqYqXoCwUoVz2f74LtdVFe1KaRa89MiwtoGnYsRi6Ga1YtGc97p9KoUNgoYRe61hrA5PHDHXR6q1enBtRuE",
  "key15": "4GhajYtira8exfTPhmQccD9mUmgKBg4yw5g87Jr1HbSUsVmQc1Phkk68Zmrg7jdatnBgFEirUWgfQ6J4J1BJJjfg",
  "key16": "JE1MPNMRG53JuETuggjSFUh8JfxsqjbQf313nSB5atYpjw7W8gw6YdNRdZTGTAoTtUKuLmTqqMcUXUFJbdtofuu",
  "key17": "26mc6utgc9m4edaVYYHpB44ZSqECmXxBrcSFKjeZJ2pigxethCTuKxSXTaT3uWe3fL8gAoomM1kVkfbDnYzuVYT4",
  "key18": "2iW4dkQPHLaKCfMLoz15tJyPDtKZ3pFEznXRzFdgPFw2JivvT9ibs45RsvZW8rwVV3xskEpoMVpomtzX5UoxQCRq",
  "key19": "5o1dZL98CQihmpuNVucwgwK5ePqHpuawikbUEHbh4SEXjjUJLcRkgny7zkw7m6k2G4FVGbEmKStTfa3Shp4KVShp",
  "key20": "4ArHzKENzzG6wcH1yxinwWUvAmrYDtdT3w7PLL9XdAC7pqAtoy8nUujLmp9hiZc2XxdyCUviSjH8vNhzJV3PY8cC",
  "key21": "3hJtXh78H9nFjQy8drJPHd8v8hLsWFNDwGPGL8qojVHohLGjKLJSSUbSwqjhU6gDbg5Fs9T1hT6sinjGAM3359HJ",
  "key22": "5CtxYtgpHUBZhEcCFNMvavPRM7EeXiH6cAsMU9DcKSzeHLdsd2477DzfXJyAg9c9Z2AGfa8u4toRfbRAsf5Q7x6W",
  "key23": "4RvXCSj7STjuwQJRNt4rMc2ErytKHEBuojeHu9bZkvoe8AkFrr7W9i6k16WnY6Z9fCsWrj73GAZmPXN13HP3G4ku",
  "key24": "2UBCUTpUrqzTQ7nf8NREboDuZ9JWDFYJ1FTHwCNicnWNm6szxHJDDjR2zj8UYoxS1ff7cxxo3zrpdjY1XnPPUYDx",
  "key25": "5zctP3kVZxHfMfYzG9drYkiJ1hd3njtHaZi4rx7HomyqbDnf1xhrxrvtQYL1d2zTKNk4gSrFuV8q6LdaEzgWTSsX",
  "key26": "3NtXcmPsptouM1eoRTLLDm1mcYsTsfpR17NbPignk56M9THsFviDyvT9BbjAdDu1GG5D47an9MVGsFWWuF8a48CF",
  "key27": "5F62urgj8T88vhSBh4PC5tWxfhSNAd8rZrna6rFQFAWg8rf1JijdLZFFhNYRoa7cBbSjijvKXJE7uwDQubDi96Ff",
  "key28": "2jf4cMzDBmQdNDxPXBAtSR43vEHYUWgiFQ7ZzBGKnj8eHHd1yNAaPoKtfY7MaePQmbNuTAvXwe5CdwFkq6jCu1Bm",
  "key29": "5tbgZhq3u9t3da4jzmfDXko89kvhyzyzWhsRg83ghaFBsN7sS2yYdKXnNcois8ebjzqRTAq5NEtHqeWy7pJWVC2F",
  "key30": "eGSVxSRrsCQu1Eiruhqxv46VENu4oVL1dwFZx3v8PDb5447ZwuVjjv3PjfsPhMsLtSmWRSo1XevXmsHbWtYs5Md",
  "key31": "3Tpe6Dvn5WCgNuED9wLaFFuk1SZkJyqUGsy1LEdYnNsL8cjXXQVdgrb9YUDWULSBxgofVKA6AxY4Z4mTcAeKcyjg",
  "key32": "39LyvUYAvfdSPMdHNHmwG6FRrcXYKLfu1YnoqdTsKf7MyE34BmWPpbhwodFzrnUzs5DKJqty41WKi1VyhHRW3d51",
  "key33": "3PHj3vvxAszmBq58MLBJ4WGgfhwyNsRAHmXipWX8FqVGdgpmjqkHeq9E8rwdhgppFivwieR8QgpSE9dDaKSWdGqT",
  "key34": "Pu1pAu3QSjLRvnuRZfWGeQhThMUCXg9GW1PZCe41xkuUDWUSJvrMxm2bjUPBdokQnvYyk6wc9gZd41KVSZyRm1b",
  "key35": "aB5LjpWXnHXLvmME2JYs2dmDCxpWhCThorXCtb9TXaHQam8UYopMDRp8h3tJqDi2Jsdv4R19TYPsP7pDBH2zGZz",
  "key36": "5CqAykYoi5dmb3MnaQv9QhT6Yud4YFR1Td8zoLfro6g4Bc7fiWnB8yCbrtqrAFEfVxMK8SZQU8U3zTNiU12EsDCA"
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
