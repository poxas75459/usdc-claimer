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
    "2G4J4jbZAhi1sGFkdTqxbJhSFUK2sNmCYYzmerKKDbo7dUontGdPJBcB6tPhchxqhEDzZrm4m8FbVEBok9KLJYWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QGNxEKB93VXHYjuVpN2CiUABiXubmJeLdduabzpDhLYCqG9iVuFykz4aGeBqdqj44NJhEM2Lf1YwyQxfnucMLf8",
  "key1": "Q8jqCoQ8JxvUv1zbHMi3qH8UwHsdKCbURDV1PtExYr8E5GzyRBmneFyXFPXR1gJpT9FJGhgZZY5LWcfNj493WVP",
  "key2": "5kp65mFrrgqWrh1xpFfXnZMah2q3AYLpzoz26SUPARb5bv2ioHi3JKGhmK8eM9kwFA7w2FBBcTs73u4BGAJXNqz4",
  "key3": "43MCLd4LU275x3jr4JHE3t7iamr5Vndr5HVa97n3Mn6fj3Mbu5dsZRnfWN87W41zUPhXbaZR9ePYtFVMfNxWn6ib",
  "key4": "3WW1jSRHC5CdWuh8EnwL3nUSdq4gZxCfoshWVvA22GUVvNXeEuyL1LcQ1GhPPZsjknNgp7Wo5VGELhABSbEvhz3j",
  "key5": "33sA7PQMDRzpgYfQ5ayGkGmhgxpNxAT3xgKjgNcMDEWDD7o1414TxgnZJVgEU4RSSkvPpSbDZxwNSD4s6XgEf18z",
  "key6": "5Ht9f8eLMpLKbubTYPCRyEPqHy2bsRkcatwz95qEUanpaQ5GXoP1yRLQzTsghGck8w4UMWMtGp7dqcMUqJsPwKBS",
  "key7": "4TSzDwonW9X4RyT98WH34EiUfRT9c5mi2iCjuoqrER7YiZfi3WyTyWUTQB6XLfhVkbr9LZLh7j7kYiAK9dAGVTGq",
  "key8": "r2KPhWHmuYcP7nxgSHLR52wPx14rFXHBSeXAwUw8pLeotU9iZ8ho7NbQ3CgQNGiho1NwrfSTjVzqppQNFV6suB2",
  "key9": "nhFWxz1mq3Cg7e5D9XrAaVh2YYCffmbiKoFswXX1C7qwFGGK5MrAQwp3Wgo8Pj3WbkBL3svtdxykzm9CBSkYArB",
  "key10": "3vqndTvfkNK8EbrA8TLmCcocsPGXoheuoPyAbHUtvNzJ2cXww3BPkSiXCprc9odwTZdiG5d4qPPstB8qRdg4MR6Z",
  "key11": "2oVvniwhcBckSLb6jx8LeWYxWCrhS8oHTrkXwiXwqEhifLNk6LXsXRQUcHceZLov9tpxmK8ypnDAEV299RJ32AGh",
  "key12": "65kAxHXfuYGtawnEZZuJA55mAyj5kyFCLavNiVMProGQXExLRZuyycdSYABR8zHo6AkfZ97VP7sKtzLiNfZLah2G",
  "key13": "5kYxgY7KXrtB7X2RPQihhx8fX6ASyHeMK2kpmgGGonR2KMzYT1YJ3wuUD9gGE1kVU4jmXQaDbHM4pXAgq9g886FZ",
  "key14": "WLhwGwHZ1gC6z4f2FN5EdSHgXar2yTJiTgJvU4GN7rYZ4agiU35zooskmex61xKcyR2jEUqSXkLDjTiayAEQnb3",
  "key15": "238RnaAH9kHxFqEtjR6RcdxPnYgA2XQw7Kxsr9uAxLWahW86y9yewRoNyNFx9Pg4KsHWfd8JcDk3v5Qdd8bXSyna",
  "key16": "GsrpRstjyMNgpR3wHcDRTafmHKCJEUinPRsQm6tSJdZpF4hCDxciCSoUMXUMKZ7V3EMxTXxKMy81nrenMZpyVk6",
  "key17": "2nu38qqn4VfSGzGcCucPUwCFR9SgXbxrFyftAqJpuynacZABvkPjdLrnaZsKMS5YKRVGq6sjThX98nzrDq3AS1Uf",
  "key18": "2Qk4otCCGSxVWkBLPD7UcTDmVcZkGcrWLf5GTbuapPRXSQ3qMFYidjFgy4gYZW54dYSoG5r9nfjndjP4jMPWHqvi",
  "key19": "2tPNR4vLPCxwJvvoKucLyzjoN3c3jJ6McWCRV9fdTGE5PuW1LBZM9V1PtMN2gExkNKipBj3Zv978dStGx6SeamuL",
  "key20": "4HLNKhghoZXBzygvDf7hyri75yJFDgKL4W3S5kQRc9ApmDKgfPNWzouacP79nktQqEiY7Pb7XwMmdcAz9BenSksJ",
  "key21": "rz6vyxJZ8xotAYyGsD2uyE9xzTaR8asV1Ei3te485xsGk2vkMPgDjdri6PLhbWYZUetNuzHS5xbmxUkDAjeZaJX",
  "key22": "3wBnCmsz3UYGCkErVp2oKGw69Z5h5nEygEEBhAK86EhR3mYbM2Y7gj4y5LYDCHfW84FdvnQB99jvwiH3wJP2g7qF",
  "key23": "3ddrKHyDQFgrvGFsbetVGjhweeFFriXN7N4FGvX1xHbcTVgYYuxhH8JKyXQ3vi5jQ9QXrJKPe6FRMpvvMoRLbwC",
  "key24": "edaKajLbL1D9piJswxMKXmQXr2dksTs3aqLrbYFmj9KsiJWFABxyubF9v41BNmfPBaw1ZTFdn529VqsiGWSDscB",
  "key25": "5z1SveejJXtoc9XHvm7X8EohgRPasg8Gbizxb6L6Df5AU84cm7vZhSyLm9hmmG56MeNV7q1f4hyETox1fpeVmnqg",
  "key26": "53fFgg99i9m7YS2127ytEVTAmErBsmTQrYc1g7peyRuktLLqRwLLFNtyRwSpdK6Go7cGVo4GENQmW6yexJ46aAGY",
  "key27": "3hBiaS7KZH6jtTnBP3hqVg4CjtFaoZu6CDxRveh6Lh4qbDayd6rXMyag5qMwPpfiMSCzfgpK9b2qh67jnAdb8QRj",
  "key28": "1ADsUV7iSACjAdXoVz3gT5pW31tgshgdEy8NzEPMqfR32QLyPVTxz7Thug5KeCKRp79C21Fk4UMhEnvRZ1wHEdB",
  "key29": "4Agph8287A9grMJjTMHh3X4WNdpG7RcWjBuFruytjfpSrfjvnWR4tfeTn39Dw1E42wJsVuxsfA2CUP3e49mMR5MY"
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
