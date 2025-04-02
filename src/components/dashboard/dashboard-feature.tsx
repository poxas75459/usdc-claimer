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
    "2yM2UokBPtn5NaTsdtGmvXG6s7sSzLtwoQJRMKUNKfSde7aYgquSy7Q25qkYAd8dnnXudPGpgg2HSrSxZTzbo2MQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5seKFnWV3fwvWMvneggstjhGWbydwfo2qb4LMdm16AY1Nh4XGzpFqAELuq21YqPY62x6yeAnw9zgWBGaKaoTsoj9",
  "key1": "4CsL5UTTkyBB7NGaj5TZEf9MjGWHcEsn3ceSzGq2ToSQ591gXj6wAbuCSwBZDdyZZoeoiPaB13Akz3pt7jfgfsXS",
  "key2": "3gkvaWaxC9bjDbu9qBKAT4b7ZtNGgsMxPfAgQ6yai74dBtN9F9614ju1Fjzua6EHgRexth33ChWnjoWdGWjabYum",
  "key3": "51xDHg16RQHPDAyR3vR4rctYq2gbcKDCeHCxUVtJ4P1YmjpWbkikLVUyPUGDJhMfVoVh5ZSxiMBDQpEKNa3Q1AAt",
  "key4": "3TaxeYcTXKS1zagz8MjygxqyqYQvQQPNsUMn9EzzStr8FmzNNYqgxCpaXTHAgmf7MzNpLB6CiEMHBFve67RTeUpW",
  "key5": "cvSYhSErTXbDvNqigTu1M9HNqj2enRTgFMyzpXUm1F6rMaVkstnfHH5jnthrBVMsRr2fgr4FNT2xNbh69p8jDHb",
  "key6": "saejQcUDrkZNYoBN4Ln6EjaBCXGFfNpmKdbashSjXYYrnJSxWqx5KZLGuh1iXHDG7dafk3WZ3DPPzyB37fQcNC8",
  "key7": "u85u1K1VKJEQ1xuqvaPDXoAriq3g347jXXtYjCuUhcGCt31qJnawBCvdTUFSzwqkroK9X4MJA6hBeUQkxYQFYkM",
  "key8": "5JFdx2STkHH4BvS8QPDNny8PAvWj979acVqPkbF5ffxgbQxi87GooFzXE6cd8GoxFmn44rXua3wAZXqTMyiXYgnG",
  "key9": "RyFkwAmfxqBTMZ2kLNB6vVFBM8MRMxxQKYBuhiz7PiqpJhJJn46afbg9sV43F9yzd7oAWnTQXPjB5p1JfE9ge3n",
  "key10": "4oyyj9hxnVwWAuG4svSpD5wWQocopvhDycZgTcbbHSbGdEELT4xxWh7sdETEEh2r9RSEuHjkKZRbc2VEgJQnj4Bf",
  "key11": "3DxXuACmPTFCHWZh59q7McqvAMQqtGpds7emJsMphYYyMtAeCHzDYHrHU5KtKKJEQtp3JhkJMUo6etFG45ZDYDG2",
  "key12": "7xgzUMYs6VhsUsfGjPVr5wWGb8zraCbmDVDtUbK1ByThzw3ENHntdiqJ4DVku2UM1sLAFMQ9HvayqMmaQE1duYB",
  "key13": "2EWYK53mDPV4wAtscgLHxvPGAvhtiyPNKFJmz6ELx2remcnJ7AoH21JmYPPkFF5jsG3VLeXm1LHsnPTcGoV96tS5",
  "key14": "4LQLTj7Juk5H8ZEsAsFLFCZKTRNWHx9UG75PcsVLhsxubpN3DcbDAwzpgv6VxEFmdpq63xYhrZA798QVzo1Y35wM",
  "key15": "43x96DiQ7FWeJpio583qBzX5qj2HV8vtQGbm8KZEQfz1TmuGKaeb1HUgj1nqty2SNCejAjbQ6kipRPz4hTvEDF9g",
  "key16": "npJzRW1Tm7q4eNw4dJiTgXNq2x7igaxeEz6ppa5vo2pWmGqiKu99gHeE2KqNRZnYbe9GiTB4TgYovSTcnQ8mbaH",
  "key17": "pecBixPemZSaSShud7BhDmLecSCj63QpGXqyTuirViJMmDtGwHEZi7CpsKXp8P7s6dMm6TrEAffbkAdYMMyMmpE",
  "key18": "2ubsiicKLqHuwe3Rhu9fc4AeDxWFx7za6sMvFYaW6nGNjPc9mKmc2Wst6JcjYDSqbBoZNXgB5SHEnxdtNinTMH3",
  "key19": "5Pa1buUWZb6rFXedJrf64QRJMRn9JvQryYYEXDnjsBpv6zwT9hoXav9BfAHwvKLTN9jZfEeZFo4EgWE9N1sCUgwb",
  "key20": "Ksm1T1iyS3NJUBaAzVCirC97LZkqrYHDauLtvDRdmDVvwNmLwiB3fhpmxUm7TXNHZE6Y8Ra6MDPvXKwxm72D1FA",
  "key21": "8VsUG7KpGZpF1PLLSQ2eaSF6y4ZAew3CUf5fkvJDoJEQDRqzhHpFFh2X2AFcJDKfu4KLiaZ14Q579aFzgqUmELa",
  "key22": "622Nf5kUpgTCwsB78JjYGv1VVzqkVKSzFzxrPHhri7QLLVRvThjrU3ssWscwjxJ8iX3t56w9ZLwFrmUrAGCBYZFS",
  "key23": "gnhDgyuyZqBA8FvWKM7z15Wxm9ngy5K3sJBTByzzneg8fHvft4KngRiXE18gEBQTpZc39dm8cAuirJ26Rde4CAz",
  "key24": "4pn5yvDFdgJymrF3nygj4s1oDQ2CimySkHRXusdxBWnoFRVRLbf7jhem9baUiJi2GP5nycnZLKSR9nya9EnEfjJE",
  "key25": "25ooCRRNuBunc4g9oYij1nEcNSfri823yJwhwjRXDLEJK6nvd5FSojyLBjAt2UCoSThFi65iSk3aEHoaENCJWU7x",
  "key26": "321rNe4awJMZerRE89nSL9mCYaMV71KtQwtQJqYJ3tBwZEdg3mxrXi7KjAkc2NnuUzcRgyL1XGBvedaSMYWvquVy",
  "key27": "5sJ6mqQMp5wUdPWRawmd2JQm8bxWvKNmFQCdAxtaWFqyLYZ4QCTdbqT3aphYuiNPN5RAxTrTYfaF9TwJ5E5G7Tm2",
  "key28": "53HGXs13AezmAxSFKBT5J2wLJXfcKimYNdysuDD5BtiKmqtapFYifLV9ej68hds5KTsDHKwg1NhWyj19nk4SrMDA",
  "key29": "FvM8JSyYbEAZbHMCKFvdexyVMcL4SiD9Hde2NRTBgEH865H8uGwQmBJdhhSb3Tr7vX1Fcg8TzJSmLvSa2UuLq4f",
  "key30": "38nzjsLuFwDZWVN1YFGFEa2Jh52CNhiKcEoq7DM2d9CARqgAJVvo5CRNNsALgeX69y5JbG7YxpVBncon3kcUnto7",
  "key31": "3FUgnw8NpgkS86bqvgo6greLVV74cXm4dinhNuNtZ4bmP8T6CbNnH1F3fHZKKzhnQUyTDCRATkhNsQP9NNTH3hk7",
  "key32": "2Qixcu6UfCjkbJN6YmzN24cJmMzGEkCJ4sCTNH4VrpjPe9mwX1SVrPXaxa2jBp5AGotnoMdQDghVD6YyEpam4LwR",
  "key33": "3bof5CuaXV94qKsywrbcz6Jc8u2szH6LqRaNLpy1o3EP8AdfZuoXi9GiPYV3qwPWyXvyz9WtHMx8W7uwRZAqeEvT",
  "key34": "3QcBMJhxbZLfZuSMkiBWmebPApS36GE8E43sLeYKFEyhDgkgUKEk3pLguHpsSsU9AuA5sDXTNZVtL8jr5B3h5rfi",
  "key35": "Huc2gBGAL53WB1YFjWfwL1Yg4RMFchvy28eaGp2v2CzkzCjSivaAZRPeAqu9foZNzXPXSWYy9SxpQuLKbGEujmH",
  "key36": "RtBaPfu3venQbRRyxzJz3M17BLo1Lhh94entZL8otCAVNVbx5dHacwoUoWwu84rKt11HE1YEV1mUmTegXx9n96w",
  "key37": "63Mj731LhKjqZF9kHttVVSU5pZ6hWmnvnZYcbAaf29YWoxFwoh5vfQSa8K9m2ue69JV7BUw3kmmL4zEKDSMi9eag",
  "key38": "mTg9Ro3ArJZWKHCcnaQ2zfvzqd1rtxrxc39o3LvexUZyBxHjwwG3cWE7UQkUWSp25kUY7pL9T2YY8z2ufFnz5q7",
  "key39": "478Tdom7kkKR9X5ActjEBxocc5GQH7XyyvgPbVtJTrjPtghjeceexdEoYGosHwKiDpXgq8X3FWSjRZG1C3DktTd8",
  "key40": "4Z1q7SAWndggVenzvD5YdfvboMpS6gPGkMwusE1X52ASSGJdoRKvkZG6TRE744vPAmFRoQe7qmHPRYCHentXACNf",
  "key41": "Z1kVFKbKgRc7eDdt3uR19S2iTHmCTQk65EZDLmRRbmC1DpogH9svHYXrxgtnujdeD5DAacbaj7P8TJcLPrtB9ob",
  "key42": "2gnjQoTkoddc93NSBiaXN64xJJSy8ao521THJV8ZoNZefZ6XLFw3afLmG1eunPyWfsNFunXGP1iPmcs8QaESrMoZ",
  "key43": "GmjyDdvt3ce3H3taLQLtzyysW8X4wTrHPqaqGxjpkcbb6FaMgxUCGmq3g8H1WpgCoAp8vd5yrTGFg3DmvJu9npy",
  "key44": "5wj1weY6XBCB28ucj3F1mcm6uaHawT62Cbai4DwL8RdMRcHikQTrxeFhwQYWP5Y4XN5KK232tZL8X6CMjtXkgKL6",
  "key45": "3hAZvxA6j4FsMacyMHkTg3upVnWAf8ULx12kjGo6RvtfQEMMzXGAh7DwjVTSRuMvXP9ZG9xzThTBDiYqy8ksaR4T"
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
