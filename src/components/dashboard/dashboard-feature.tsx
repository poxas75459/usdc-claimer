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
    "32CzqQs8GYVbrzUVY9pNCJguZNgdGkHYxCK6xP3FtLY9sTA1E1umgczgKrmionpQcUeRi6TVS55AtHKLtp1q897X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XzbZAigtcwq5s2NF8kAqEBLSvKhm3icF1mUpp58vvyvWWSzyF54ZwemrnRHyJwxM8cjBpthpGgDPLQJfbseUL9X",
  "key1": "21Btv5KQcQS8YC3C74zWVQ2gzwgXcGixvKDX1YbWQtM9upzNGDTKudLPQG44wU3rTkugCXJGxMY941os3BYQdT64",
  "key2": "3Sn9TjZCCTxywyVHShoTVWhnj2iAq3zzgFptGDYFqx5pDYmzmeNMhodJBJyToMucRAT437yTvgq7n4MeBBmiyNGo",
  "key3": "4AbsEmosvZNqcNZnRa7q3Gpr5krfmStfBzdmcztvzmv9mb9GEFz8xMY1ocwWaNGcfn8P8qoEwPVRdW2xDXQuxz3C",
  "key4": "29V1pKHXFUjkx7twXCenYUsrt9PdGREgAZeLKFPgjdzeweaJDbdHSBWvqTQ1T8sSAovgz7afgEUtKS21JNqtPM4v",
  "key5": "2t9dakhkS7xaFf2hRUYh6mSwWeJedhtZiBDbSJK2XfZBwdWXoHKoeGpZ8J1hmxJ5WN9QQ9tYDi8qfP5aWxVQgAjR",
  "key6": "5G9kiyNK5n5wTFYUH2eeMDYQSrve1dcpVPCYhFqbe6pouRYLdeJUPYQ557KwkZS4u6no9qMjM88ZWG921CDKyba5",
  "key7": "2w7mbfsYknBhEjLbY1ZmKRAio9RbEQErqvNPKoNjvCvhUekdnHq1C9uzrUSdAjAXfBg2D2h8VEmMbYrV9c1wVWB",
  "key8": "3GTZLaw4G4KkbyiGVoRchYZCoCAMgET6SVmBoX4HM8ZDZDEA7ihfWDZDNcS23YMQbcmPp47wq46RPMD7mRuhTvr3",
  "key9": "5JBEhr6NwEd3C9JWkmB6NNukyTPXvcNPsCRCcrKQcfKrmvM2FpJP7YR2mN37LfahpVGMyCCQgSHMDM69dT3HGweE",
  "key10": "2buDZfopLFg9tTd7Jvh41S7AjxcaRycEJZnxeQc9xiu8gFs8szNuSkb2BsTfh3gVmvzdrFWgVoLxDrwZAsykeCnS",
  "key11": "4fmcmZb8s3YMD1xKQ1dE26EncJcRmRwDeTV9CPF3SG8SvcUddFyzeRdhswPGg9BXdjepbHtV3rBygGujAeAzFJQS",
  "key12": "49WcNZQkFoswd94kjC6GVjJNbninEC8Q3U2cJhqmQt11mYqRuWP7VqwKS9Bdja55U7qHChVDoBCPy9ic7UaVc5sU",
  "key13": "5ZtXiKic3i3eQK7gdUoLjyBoVHqyCXphr77niG4K6t1BrnbisXCKQxhbSvqNTp8ZTB3GptHfeAdfkGQ5wJZwJj8Q",
  "key14": "MbtCdtcpG7sB5TCgvgX3UZ1VGGdqAqVje3xNmrKwFcGL1aaPRMqbt3gxY8nQ7aXhdiTeyYVDq4vLdAXENu8shZx",
  "key15": "4MVNnH6Cf8oAn6xHfgj5P8kzz8ij399Yb7xRvLAcSk6wFAPax1adBB1Ag4swSyx4aYDFQEmSL4MZFasinDpCoVpq",
  "key16": "pmfkpS5TuGoyobyRr34MWfoQdRayX4eZCMhDnXUV2DBQXQXLydKJCwe8ga7GnDUUTCifRJkbqJEWkV74j1CaxzY",
  "key17": "5zf6s2WBYDs1cC5k8GsdhfPgiEZiU1Zx5qYXMmruz9eoNhPSmxPuKc9JzYziTETp8fSFnPBuiCsRiihmziUwtNTh",
  "key18": "hDxvr38nqvr7CrwWBkW4KU3GGFwM6KFL7Jbe1vqLtjGVGYEC1ZymQoFv1VT2nheQgRuAJz3XBggSW8Ts3SrgGQV",
  "key19": "4vg6E5LPnzGkUmMqga86cKrVMZBLqVYqtazbQeCKLmvMhjtGJPzmfFAwGXjPBPbo1txTX6AuhudQb6RPhAJM766U",
  "key20": "24ZProTockW8sTSf5PjCNz97fCUKiq1gQ5z7NCiSm9394xxXm6S4DY3bkHoXehwkTiZC4LZiN4Kggi1ZHh2VDQAB",
  "key21": "5qm29bSHWetcT8gYUne9ydhJ72SyAPDqo4yWd7DSuhz2prmZYtHMafwtoahn3e6FhgwMycU7UXdE7uW3NryE3bRo",
  "key22": "3JChY3KBBM17uh5TMrEy4YhhPThSeM8Xne3JSbTXqbHMSYsJ8KTfU38mci3CCvt18eB9TXj9zRcDTiWsbW1TDMcW",
  "key23": "WTWvbF4PkcXShV8DhZsVXVF1qLYaapCvPiDC7xCeuDjRChL5sbmWSyGBW3z9ifexkyapVY8eW2G3NuTHzg5PcKD",
  "key24": "2kXShdL8qJ3rgijrPtZALus2rtRwE2WboqcQWYsZj4VsgzzKeqPhtfx2BWbfD86ScqdSAaqxXTPtfywS2hHaDgBU",
  "key25": "5ja5MhzhkkyqPoNsgDVjn46NJm9dG6XDaqe5dvkUBLKFpkrrCbhvb9AMpoBc4zpeH5pp8nKDhykLRFiwATxfarMn",
  "key26": "262Yki9xtSn7gorWNHLUtczDtrGATizUQr75QJKSd5ouvUPMjh1G8qXnhYQ4MJk9SGvkuGvn78r7QwzHhGHui57Q",
  "key27": "3n89Z9QugXtBcfqQPdEK2AesBfPAxhFFzZBq1L5Gc4FoT158h9yP3v1dDt5j7vWiuePNmQrUmz1un3p6PjAE4NPc",
  "key28": "4ZKgTZvgixhT59uWVsBcXZPDSofdUeEkXdW25B2mzvtXKBgXZGK7SHhYuL7J3jCqhCR59HVAmjQCnvVuBrUH3sMS",
  "key29": "4TGkEUPFhcz3YuapW4Rrm28BGMk8x4Wk6DJdTxVS22hFattYnQ8umKwJiZaewhJ9qtPtUeds9zqfzCXpPd6ZqQD5",
  "key30": "3DE4GHafMfq5DzB8v1v35DodxVhPEUtMQS6f9QwgEngZpQzLUY5pLeXAjzPKcwJY1mSQuCA7MiwArRtQgREAifht",
  "key31": "2HxK3VCuhdYjshSv9yAzyV6Pm5qVne8BLGyVdBDpfattqvsjQBpocEuvBp1juR8shp2wCgFBxMJbBwg7xTmvnAXn",
  "key32": "5KksfxoaD3Fxy2CH3ACas1jV82K2f8aScuW3agGGDfYTf6P9Kr47BhTBvZJPspx3VfmuyfW5nH7jdefkfqrdwKUc",
  "key33": "2cNSL9eoDMnVFfyTAdeFqiSbaM4QbhSzGoXkq5zotLDZ6wXNfspsXVp7h5zt318fwgt4GPj846ucisb3u665HHfc",
  "key34": "4ZyxMufXRGPzf5GXjoQqjdSuKRuFscPSDuaMmQxPAgY61Np3tMbWwdGtVPeRbxFGe2peju8t4k6HyLp53VdbxNJS",
  "key35": "2ULCeqWWkgwBeUxBQBVCKWfcsirnL1ePHR68LSxivjwiPXS7Y8zjLyu6Dz9GWWgqay2pqs5J32L4Ct6b9pqy92Z7",
  "key36": "3AFhe1UEbZWQJBCUQ64egzTUMcVoNV1JnaR3ZMP5c2oRT8bE2YJVxgsAL9p1fRMrfsFhPyAzNWmUAKGxvsnU9NX8",
  "key37": "3UZhPLtfviX42ckP3gktnVG6u9pSokR8jcW88qewWhELAWTUthWmjYuekghCDEF5uzc1hMUy4JBGtZogvhLSJppZ",
  "key38": "5CPd4y8e2KYsXTkYuMTtDGMVeHonh6zAR9mErskDLzrZQ5BdHjVXnDhF5qweEKWMb4TYsC1dGF14TYKBcyL7ocJb",
  "key39": "2oamjEonuxXH3mCtMDyPY6qQURuShwagpZvejvoxmAu56yegq6wcp5h7LCxW9DWiUzxAu1kvmumfVnuy1FWRv3GD",
  "key40": "28GoiAzoi9QZ88VB74JUYtHxP5GCNWKKEbH19WSgMsPn2kEEvPsnbg7jfbZugwy4RByrKmEYnLsP8HvcX6xQwneJ",
  "key41": "3yguGLX2dCRvKvbaPbRSRX9qw4GuDS4jDTeTV3GfYLTTQcR8SkAmv8axo7Vt4WNfXKcdKs5yZQr8P7b2AWFUhN7b",
  "key42": "3JVhSVp5GCfspKUc8bFrRcENz7UrJtDtddKr8B5epvHy5EH7tUNDfyy2aC8V7GqWQByG1b5PKRs15gNvQHfA4AQc",
  "key43": "Ns5D8Ey9T8QBWBApQH6QEhyMdp1qY6S2rhyRr6cZMbYFtjnhFQYZsag5LqdE93zBBvqVLyfTxsydgMVxE9uCFCQ",
  "key44": "2kWQBGmt5g1x7GUGPNSLNKhtMRcQAFqy5tmHpuLHiSCX6FcPRryvQipmtqueTb6r4PsoB4TeB3pVULmVRQ77Gra7",
  "key45": "3faVvAiDGbaiy4HPg4Qd7WqeGhx4rkn1pqCwnForuhGxuzNuNYz6ejLuBktNwzEZR1ng6eaqCSPRK394yxwp8wB5"
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
