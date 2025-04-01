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
    "5P4ppLoNP3z6hfxUesjroAYY6adejQSECSuFHxf29KBQt1MP7uLUv5K9x79RDemmH9cHC5KzrkPbtWrv1QnPvWzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BdUWg33dm8xvdFeTRftaTGfuzBsEvPhAnnYCngwzjDCL1TAovUMUqkn2Ym7K5tgx7MqWQafTFop4k6xyfcZzUBa",
  "key1": "31TM5tHFe8cMprssmSM63dXsLiMe5LxhTdY85jqU2fsRpJRW8sPYq79QDTdUXXmqVVTYNtzoKGJtaK1c1XFbmPqa",
  "key2": "3RyvLd7r7EYseZAnqbGqfQcbhcEoX6gzH4SZD9sQmGte3RjxQdWMAjDR6nJPFZ9gQ8WKE6XQLfZ6PRxfj3fnQK95",
  "key3": "5qmwaENHH7KEqubELG71KpPhYkQDnbCvjAKGK9rM8BRbH45W9f6Mr8BeAuuenN2dmNuBSbV4GfJYqvmjpjHaT3wu",
  "key4": "3hrXtjnBaxznd2h6JF7mUZr7xqJuafRJW7JgA122ju6naYkuTFFk8cMSpcDPuDZMJoMuk1Y4NxJyfTLxhRvinGvg",
  "key5": "4rZDpsrRVRKRHktL6MPjNoTBRPFYLwaz65pfsP4w9tSzjvPNqqMLhe8XcxZwkt3eNeLubtid2W4neCXEiUByuThc",
  "key6": "88LhrTXKomyZGDAy35nT99s7gCCKCMsxDWNg4AUGEg8iZBfUxAUmCi9WaqRw1NYKsscVyKgQbQmmGkz3e9qzgwd",
  "key7": "4iUbC1y1K5gwaKd6VLEpm2LSfLFVbvxj3YDN8mUdchWjp62JsHaRT71PdkRdB3QLzqrzuu8YTRav2P8BRsuCSQi4",
  "key8": "4gLsn3XgShdspgVEjN3LR2ENi6o8JVe8hJbkpiqqtf1qcNRWtmSRiiR1GwPek2nwNw6jwCxYBPp2gkurezLvmiHs",
  "key9": "2rktfFxVY4y4h18hoNBKAUNbnD4J9xcgFAWcEwgAX9c3S5VVQCZ1VTRQdV36MBr1jScfbgCFzKkPj3gSbQaXejrH",
  "key10": "4pxEApAZCt2zypGV6gmd4X8QBpjhkZBHF1Z8WwXjmvfeYvNeECnjexj5z9AqnUmpvez47X8Kz9s7R1HUndG4H5Qs",
  "key11": "26Dj9pUgBZi8uWt8u3d3rPsrxCyPpWkE36Ce3aYDLgEjCJyoVy163MRdp5iP9q9B7g1UPeWbBS2Nkt4uWRYKwbdW",
  "key12": "27cykLgaxB8kEBhJyGvfnPf2t4AHtzBiEPHEHZwd1b9X4cEUvhyDUFHSwnkPnsMqEPCf7XMNptWdqnicotiRj667",
  "key13": "4Nu2DQ9x9oxhjooVL89bku1B4PAbsLyoP4NC3AXTU4X55UqUB6DyncqHpZrWdAHgJAzo31m3mHziohXnJL34g5e5",
  "key14": "2sRvYbHqB68WVX5MypjhrbEqD4rtbdETZMXF12irgSqeDiLcEhEYjtTCmbYSTdmRAmFtNiQG2LcfHNfr1ELrJMRH",
  "key15": "55nL2rnkXYUtYZrbVpWJbMcDNBcatn31jZ9EJvcaPNLMrmVNG6bKP8u78MV3pvpwfSir2s6dji4ztkH5ZrX3MB98",
  "key16": "CrhoiBj5ah6k8B8N4QQnUjad3ToFDJTx78tdHTTnBXan56QyCCZYwMHhK53ghnG7DVHq1qwiW4wKmecSXP5X99v",
  "key17": "3j6bW2xE51sHi9XzYsYZShWwsab3DbbCStkyHZ9E9eTJ4DVbK8MKSWUk7FXChywjw45SKAz7rSD97hrgKn3kJpyG",
  "key18": "VW8jiw4Erjka9iVqntkcmBtWVwFyAnjC8QZs3dntcKTqGBZFt6F446zkAcx9EBYDV1yo1J9WoHh6B3fVj3GHkD2",
  "key19": "2C6oUTWfQFvEHtAS3bvGTnyYRjxrgDGwecbLVgDSYxYLYNK3SyLgkRztiiuyNAQeVFxH6QBAp2Tu2LoXb2wwFTDb",
  "key20": "5X3mjbtgEDRGi75Z5bCMiuMD1WiS5LMiTb52kR5fZWW4AdSGR2qmemJ7GXzTk9dsvEL8cB7EzPu1bf5j9jjDiU2R",
  "key21": "3b915JZgRhmskcYEdX6YPW9entiHWDg18Ty3Mbq6ufU1WQXEryBye7NiLFPpkfB5rrT75nwSvwcXY82RJ4Ma5wCb",
  "key22": "3LfLUPBNXFk8v7wKwKQk8Sp1SGiJQrgstpSaU6U2VVoGuYRNXh3ebjLuHB3nigPVE5BHWQgbZZzwiDHS97RC9bwj",
  "key23": "L65ZNXDh5eYbzbe48qV4mpq6A7k6zvtmpM5C17Ma2sdyU5dyoqdF4a9i8XxsfyRRuYegpGHyZg6zzoFRw9MpRBs",
  "key24": "2SuKdFBfh5x5Ha9ota38LqqnkECnxzfnqKPcBaFyjP5XJrzV8yvC6NPEjbtLQvf61e2z6fDGqoJFHKoMVxBM97Sp",
  "key25": "41zsdWCbkMrf7DFFx5LphzDUYeKiBe1rbxFsEwHz69bBasa63axAMkmtr6juHVpqNj5tshEM9F8jQ8pEDYvWrFtn",
  "key26": "2thBX1c4bFfHRJRwGBBRsVuZBxmEiLtScXjg6g1Rrhz1Cz59nDN2G2UUQSZKDD79WkyvUePajfiKQGEKyCULmDWB",
  "key27": "4nVU7CoCvWQp1B6Xvvtv51Fc2BNpUSpbPFxnBTKdYboqvFqUuhiBVGJ4TbMxXdXj6i8rPKqSziQ7HLr2aDGjaSyt",
  "key28": "3mY2bCfeEKSCyiqvFXjFyzKcUJSZBYrpnvK4rcnNfkkWzvqbGwZjyoUMH4Sdn13yBREnEDV6iqHh8L4GkuxxkYgF",
  "key29": "2vK69PW4dmL4mDGZ4n5Q1KjvWFKZfqwMHmiY9YWYNri6HxyGH4uW5idAYHvQHDzMG7MBHtmj81eKWndNuZMtWnyY",
  "key30": "iPxnJyVWTBLLUyg1cT9xo37vMYzfDezcBEBDHQ6izcmkX2rt6u8cWikDE5jRDm87BTcnkvqqiWTyq2e3jcbCUQT",
  "key31": "4iFXg5Nq3j7ydKBBe7tcZSeqYMBYNdJ8uRA49CXup6hXReXcVyRDVgXrijhdNGV4Uq5ENJezLGcaQ6F7ahunA5Sc",
  "key32": "4mvn6A9dnyJBWrwdaF2og9gEqKsCf51J2RpvZXbykxkSvxPqoUjtu88ZWz2CroNrHiEhwNLuNsLPef8XfD49sfhK",
  "key33": "tRg8ei2zvyLQhwuJB6PSCz73ozNtvV8Bo66mRneUExWkWwjgtu3D1Rqu8QBpNMGo4Vx5bgfajrj6t8HkxhnYrRm",
  "key34": "tKWnCRvkdcdVWvVSTbv1gEz5nmSzKNMdcptfJkeRcLPFchpA8H2ReLQ6FabZBWmvsqLDGfLUSdaaPqFUtpHLKWS",
  "key35": "5B9hY29zWdFwx1mnp6qciPHhWDMg1nTq8zHAruRVNT6p2GZfeouqSp3WWYeVLspYYC6P1B4ETPKVcCLjFSHKRTxn",
  "key36": "484wqyd15stfmCPfyXuyJ2wAb6eSpnn4MrGqhxLwCdM1EsssTV6y8z3LKoi7TE1UXDzxQEtoSYMmmLFEQtRAGTCd",
  "key37": "2opTbMVvqDVXYrm6FgAGZ41tZ5VMJQbZ34cTTyF6X1yt6sSjx7QhXF499fJrB35hqaAM5vx7Li8JssdRwJYVttcf",
  "key38": "4ZCfvpi28KBFvuLMYBJtTRpfr5NmwLB4xJz4wnhQyE1mhVhc7g7G9zYHmu7WHT8kC1RgPbmPRCaZSQxv6CH5PzRP",
  "key39": "4p3f11MUwFwAaVDHdVQdYrrjSTTqSJRw7bBuH7ixN44S5iXnASQob6grchizChJPtzFakou5rM1TfNEW2GiJvPbm",
  "key40": "TSkjFamKkSXQKGK7VJhdrNg3nFYgLHDJdhPuAH5preBnqUDnMRAV2gn4cdCSbxGeKPuS3tfyUmBn2kmpArpaFKr",
  "key41": "3CZ6ge9woQMZbGsXbNDVStjVGXCVLwq59XocRNyg6qLDJ29mY5gRVaVxh7dfKahu3KnMYPSkVFtcEZMKebKKJqgY",
  "key42": "3gpx9YasCsyBjXMqoTD4rAfDFXgxzEccAgwiX47XjNsVhuFnH7BQYk4emNQmvnL3UUkTtY5Vk2yhazsxbTXaU6j3"
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
