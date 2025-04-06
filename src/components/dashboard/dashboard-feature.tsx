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
    "3Cs3Pz6PMk7Z4EFDNtoqKB7YBKA8t8zUXU2J2QyZiWCdjqUYwizYr9G7vxke41ygM7W1hwYTt965qnQPZzSyXeeP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E4Nu5v5k1FoBccGSQxCUsNr7xvW6d9qKUFCkPZMJLLjhKoeRbkJf1mSkNycAfF33PnCMRaKrDVTedfP3CoMuKve",
  "key1": "3PELkXVmJZq6y6XQTkq8BvRtrhxbSX58oTzPMm987CGYC9iPUqQZtf5co4mqWWumdQqAis6Hxjx1VecwmzAQVPUx",
  "key2": "3apGoVmVWL8pUfNZJ24Lgn7eyDsAUakzYweGSTpmHUboTktetHRWHE12MH77D4tQGPueKAFZnWky4x6TxDgKxvqZ",
  "key3": "3nC2LYjC4NwW7p32YbJS33Xz12fQeAjvnWsLmDUvqwWFBNPB9S8eft2xiiiV3dufBjj44uJhHhn1BKyERaDyywjw",
  "key4": "5hhH5YR5FwFRcEuSNKx97NBydkk78ABXaMXS46bywd7hEn1f6Vp29fEojd3g7db95vc4wrv45JKXaU48QzBFJUD3",
  "key5": "5xq91Kzk1aS2ihrss6pchRBnuHqAVrEzxVo4hnSZP5W7xD652mEW93y3AbojbTd9T84J6zUVNvhsJ3PAj2FHytXo",
  "key6": "2TRvasfG5gJPde2Ywq7n3UVGTpMsobir6XdgaeEsdNtvsJ8XbTro12DF2P4tshJ7mUheNaoBMugytBKKDJku5vM7",
  "key7": "3sgx91B6LADUoNXHoQJUopowBzDHYPTzKvD1twnd8qNviSoQ22hRX21qexr2ohkJFUJKfQcX9A6fLDoFC8EuySWB",
  "key8": "5moGte9cWq7bpokFi5icrMABgqofgG2bcDak4kzyqsdN5qyydXkzcMoGpB2Pa2GTEj5aXXn2wL48nrcNemsd6d7U",
  "key9": "3aTQMMqUQGoCoFhD48qL35uRfx6YtM4b5iVSpk6SmbNeSyV9YYHPo6MaW2t4HKiWydtRMLF3Z5y94uYAJ8GZ6cMN",
  "key10": "3WrNfmHSKqiFcSCRwwopPvmxVwh1egQhruQwn8QtxGbpDRieaXsY4UKKayTJ6r68GGsz6GfcLqEDXdjSf8pnVwdx",
  "key11": "nHyUsZ7tK578zGDE8yJQXKEF3MMsUsvrKjqoYA61gY8xDPDiyBmn7KAVV886bzhNqen646WBoL8pmbUQJwAChAa",
  "key12": "4uGa4zBrKWKbnPUPNJaH1ZP7oRHFpRj21vJnHCpnH6qLThFLZLPizTBT9Rd9bApRPpCctkvxrWVyB6173UDp6uLQ",
  "key13": "2Wh8smc2HvNwpbdXHDHAbyfaaoBNJSbpX2NVubMgDp8RCvxFeZgtJKeV77v6zhjULvLefLvSZJTpnZrtJAqUdZCv",
  "key14": "63MLjrPtQFvM2BQ6NUkYyoR3WLDs2aTB3wftCorsgjr6bfYKwe1HVhzPk4hhE1e6usCz6j14RNAL9KD3AoK1kmxW",
  "key15": "28Cz2iuJVxcsAHhfMTXMQZGVWcDcERbrbqZTBBPDW5HAGLBK9LJAxPKFGWao7PBTatMn5zqWV3pTRJRoq8VuVk8W",
  "key16": "5PpbPU5JRY49RpvZTo8iUFzJLoWtGTFVDZG8rA5JGA1bbKGiYZTgaqpaSVtm8m6NWC2DptH25JC86pEcnN6ktWKe",
  "key17": "HeVteAT6DgGs4gFJKMS5MTDukMvLdEKqTfjAPi9cyVB1aWqsr4hUZ4PKYFm8LYZj9cxK99qfpDttPp1Lfg7KSaX",
  "key18": "28MeKwnpLdxKjg9XZ9cH2EFvT7aCjn7DEmiu41Rt8uBvpNreCfcfAcuQrUR5i3GoEt14UamcWMsH9oxJMjcTQKgs",
  "key19": "DQH2YXwSBQBJA2apSLqm3JPzS98aUUbKqhMpK7uLEQmMDUwgsZ5ACnjZXUJGfcHGufjGu6Wms8U9SgXGz4AqLV1",
  "key20": "384PqgFdVErcq1feedPD3ydWijH25GZq6kYQHgKaWoZNZXRMvbeBuzkRWZKZmiJgCz1DoWkcuWWy959af8fCCGLF",
  "key21": "3nS7dARe6GZ5iMrHbjAtEj4d2E2eroadsPT974htMp2FPN2HtwWW4Xp8DvdJh1pgkebpihZtcfcr3uSbWVGMAK33",
  "key22": "2EvrRAx5smREa2zqizG7R2dCWJzwXwzM74PizUqQoXDSzM4xc8ZYYMfnG5rY7rVFhmXsRS1AGFcTXo2VVAwSY1HM",
  "key23": "2v1JPnveSr35dTZ5fAno9ZV2A6M6ZwrVPmu4sWdETZch8MFX36VotND4XjKA452A5ps3vEUNUU2LnRSMktCaxc9G",
  "key24": "5VitJSEBsxViyrDKcQEwsLL4bDCiz9T4GZtpcLH6xT4fyLvz8hHFAPiFvnmdBUxKXsjS4pSrMLbKCQtZPmysuZST",
  "key25": "2YBXv38zByaPf3eXVVM7X5DR8WA4ssfQDuoNTTu9d8BohCgF3QdfuwFz82c4J2f5AhUqR7EPxvpybSx22tZhUAW6",
  "key26": "4zWxnyTgKqBDtDZwL7Vr2JF6UcDbr5bqnWwH92nNr536PHt4bbumSizC7moFs7bNbAxPYgtPhQFsV6ChxR9hk1y9",
  "key27": "2a5iNjhPHNDgCn7JPRYBaNhkX11da5DNhRWhABrrFoVfViaj9kwSKMNZeT4y39g9mtv11nRTxZjqWCkp4Lu2nB6z",
  "key28": "2DGjNJtsdG3REhhBUno3rxu3krzWHJE8MkZwUYfXXLQncw3DhWyVBUs87V5jb8Qid5riiFPsssQF5qq9kkT6t8mT",
  "key29": "5jogPkWvbdJdS7DohHpWVWDBewnsfYwxnmrHzXyVE5GrnbEZTSG4eWYNjJKSHGuXEjuaCY9VCrEZLE568yLSN3tj",
  "key30": "3jTEg3wEPUv6p4QK6xLRwG9AGaL814ioW22m4XtpbgJ6xErb3EgqzbRouXvEjMg3w2NmWF36Qzbt98pc5zztS6Vp",
  "key31": "2EfBL6RrHxRDPDUGtLfYdwDNXoUHEKxpWYHPghMCQu2Cabax1u8qv6omjevcypDdZcCYS6fymwPpNQj1cRQnL6uw",
  "key32": "5mA3E28QN2ovFKsU2MY5KByJPwbrfXdVNyPXeQSYmzQbRQy2U4vZJ9AfjUqXv3vvBhzCCSSAW9nm8bV7XbuAdUU3",
  "key33": "F1zkPJKcCfcFLsh1M7UgvYTu3TDqpoKKC8R7LhM1zh5X7pkMFSAoNYzdhrDia1XaU3YtKiNVchhNvjtGFLeEDQM",
  "key34": "2daSNQ9wmdeZyqYetzQrKV5Q7PVydEWXbwNs5uLE6yvPntAZgXeoP1DNRqbnVtbExpzgsr14ttLZbo69YJgWdvkZ",
  "key35": "2MPDRsQjjdqgcXzWAQqGxonvMCs99RfHeMFRgvp667pgKuvAKuAMt6JgfLy7oLKz7hX6ovABLoyLf3umBG3kRvtp",
  "key36": "5Th2uYZgoTxixTys5Trku6CxhgeFwQXQkzk6wsrZ6qnQ67jBTRKLNBVP9FFJ7XCAQyKHhuN9VffGW6boV16Q8wr1",
  "key37": "25HCS6zWQUQecfq64bBx1P57fLu19Uv5A8rZKxxauw3JJsFWG7xSqa7MQXsJ5MJSQHKXkAB6RoYjsf4fUvLMtyrj",
  "key38": "2toMy2BzXbHzUW9gabUBiy6HvsSVoXJxEYBHG6kdV8aCzoy7LBh5bpQGPXRrnBztewDMGUNEuycDbV7hCVeMBxQ4",
  "key39": "3kLmeezPDawSD2LSqhPkncychDZKtt3MjQWjgCaFNY3voj64oQ3xXtyjTCgH2BhnVPScxC12FRW8Ezdasw3vCtXw",
  "key40": "5KEWADPYdxN26mHwdD7faDq7Wf7nJogMU2caDRM2paoLJJP3dBMHat54uRFnkTNe2VpxPzTxVRT8KENMPeVoL4DV",
  "key41": "3qPnAkdQN3ZjbdbTcUYo8aQ17i1Bjtqmbp4PJTLyTd1hEVoZLEWYd4oqwFu3GSJD9F1fU3GEkyKUK2tP9RUgCzk5",
  "key42": "5YHZnoKVejRCeN1iffHzEMPRmMwxmvHxTasH76X4ZTKqgCfdk8TA8W7dFXwg2nXhQSwTetoaCfyBs9XVmffs7jDQ"
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
