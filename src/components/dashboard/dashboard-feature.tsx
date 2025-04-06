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
    "5bYPMZLJrPWiAoMscnXAEVGo3ehwETT1xFSPqorahgA76eQQ9kmMha4v5HAsij3EqyA8mSAPf9PUJ2W1ixhnfu8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A9GMZKB3bsEGEb1DUR34cBWwyh25beuYhtfcThJqhyLXBaKEMuXZUQcbb8qXNZQcG87VzEXe39ehaUPU4V4ansx",
  "key1": "wFckqAfH3T3mZGDuzZEmcpX85i3XSXRSAT8ygyMy3FWRUVUnQzEZpP19wc4xM6v2CJnw36mxYVJqX9KmDhYqCuc",
  "key2": "24YgEk3ojZD448gUuNiRvqBkJ6pyUUxVCik7QuqsxmZK8AmZ2RX87Vhqi1jxoJxqikS5gqnxRvYaokeLTWximQaA",
  "key3": "5xoZGjLT5Z4YVpoMAujKN7TCfgWtsSS896Daved2Pop9YVo6H5XTuA7W6dMxNm3owtBKaw6RkF42daVxKsgowk3u",
  "key4": "2jWsu4ZR9MBTjtAbVmVvDLZwddM5pvvR4ZZJZ544CgSHXbGcEkH17kAAvAaTcVepogXNq8mPjJKTtZKWMTPJvH49",
  "key5": "eEGVKm9ScZ8vyvagbRfeEWvFEJd8uFcE5HgiLXnd4R8sczFhMGEup18PhMkfeGxFqD3dn7NdZEJfwj2t89b1Be2",
  "key6": "3n6rZtEsd4GK2mz9FPRp9NJGmzvPGXT9eiF4TQawS6bBmDp3F8ZqAiGZpURF8X43SBHjwMoJUNu4gHSmSLnAmCHB",
  "key7": "5W48P6dGN3mz6tBHBSXMsSbGYwFcDJVbgh4YJhqYB1kQwcdabVwM82N8FAvaTpgeyrqvJG2xowjqaBDJBZsu3tcd",
  "key8": "26F8BxPvdCfgY6BEtWSzAjswsdEjHh7sc6mxpeMXjHxjXvz1MKKQjKz3MzoN1kZhq2FtGu8HZxW7yVoHbTiNA4DA",
  "key9": "2o15vEjNpS1D9b9xGftUnLZTiasoZXUmfJoGqPZvqvh9X6Tek3ehg8KEyYcJGPgypfbTSd64cnx36aXXmXGpMARF",
  "key10": "4k3CpT5LzXyvvFDykfSyRMYwsmnZbjzVyjyeTxdcBjGXQPALJyMMgojTgjUXX1W3T4R24pXvKNELDAGcat4hQwmi",
  "key11": "4XKMibYKXfPvrrYJFvPok1m2BXEv4apfiCmaRWLKmJfPSMZQV7kVTHP1zgRpGatbNUrhg6Srh8ZE8EitE2mVsDnh",
  "key12": "4F1qvg5XRkyXYLeoetUGbv8BDq4ZnXB9F7HQSfLvu494h5zdSiMR8fyd5UiKEGueXm6Tr7WRWBrb5QC4fn26ASGr",
  "key13": "2ERb82PghXdkF3eps3mkXnAQtro92PztRy1bmXv8sQwJWD1KtzYPFLGmFmSQPNQwxNDd9m8p4gQqHYiutmPYjkuy",
  "key14": "5ffDyoXFp9mpVsx4Ax5RJCYYddFKHHkywAjbzzGqHz3ZD3Pj7574aHocSUx1wCq6J1DrqZGDYnv7KP2Nhhoy57ZC",
  "key15": "3VNbgyg6Ny2VoKf5nqK6ycZSgYy3sSyqUKrHmzJJZpQJayhHPdmKaxSSeMTL2RhmYXw9YRBRJeV2bQ3RENMQy9oU",
  "key16": "2CxauV7yhjAGdbA57TzwrLmTLvhuG1Y6qR7qN1wkGq1ieotZVCcR5zVUnXMmbu1jpRXBg5Abjwsu8P5b4UJJ3UEs",
  "key17": "MqVhCocQip4oy6ZsC9kMiP3EijKrGXLcmvjTBwgrL1sBdjzgpvQvmMwNEvB9GRv7EjUDZPi66vHTxgUhiVCdZ7V",
  "key18": "3E8xbuZJKhS1CskASbNgvVPpJdg8Rwd45nm3j99EjoQ6eLmuKKNYY1VPmxjpLWH1KcEhKfjGgSQiqtKcPApeXBAy",
  "key19": "5mBC525WTbYektLEXJ5qghioz4NBvHBKEz7eKPNbBRML1HbnZk7dyZRKB2Dny5BwiM5H3kKbBiur9B1ZZR8VDGpn",
  "key20": "NaRiNrgWNouni17MfPfzEQGA2YScJS8M1kcKyguKq4ou4T8hekJttat3H8d3N1ZLttNHELiY1cJY4LZoDa3AQcZ",
  "key21": "23e4SLNvauWXs6yu23mdWxVVgqfetBX5PanZo9kTSJLmnYjokpFtmFWyZHg6ZYods6cZdrqQsW9dsnicqAfTcfci",
  "key22": "QSWTU1Cp2E3JsTHj7Dr7FFAoYEr3HmhxoRYqVzdFP2c3cfKNe8Avsj58Ejhmu3vEkYvXoub9FuJ2ztRms37H4go",
  "key23": "2tkEMpPSXBg8C4NQ3aSCNwnyyPe3gexTR1xzXn2YB1zfWEmQNwb6ktFpBb2wNePiKYERikSaA7991KFWUywxyjA2",
  "key24": "4zazHMfggZ7nHKKDB4sg7V1mR4wNVK6MxX3N111hCvj5rJzwtFqa3XZDDETM5352tCDre6Nyv83ewyVBQr7bQzr",
  "key25": "4we4rUi75A8bhmgXB6hk9QZNHqJFW62gh5EJ8FwRZMdrZhM9LFUnhe4uFFhgQPogLmbZ1VTcMTLkstUmExfyFBia",
  "key26": "Sg26vYKdjE2gN3X6no4U2E7yzsKBUmYGApL1Z8WAhwB8cu531mVDQ9MuxvhpS3Tr6BqitJ1VPnpsVqNrczX5FH9",
  "key27": "2z3eCMvnuVLpqZXELhqSkRxjeggUcHeaP4QvpwpAizw7tMk2KZUbvoYdpnPBYXdiY26SPCvooF9P5rTvmUoFLpgH",
  "key28": "3DCnRrfEA2WJ6jZgp5qzNp8GJ4DAXaKkfFKrP6ALez3xKXXRbJDpGGZjC4sqkJ978Zx8PAZaKn9wZ3LFxxPbwWzr",
  "key29": "2BbhyskRsCbmRzdwEBPc3RY2cJXuqQ1kHzrz4AKyLxja9PnoKw7LYwQASGTHKwTnLSRnf8qU7XuP6ezW7g7XkMY1",
  "key30": "4jrH7fLg1eq6vnTk2vvT7qz1Njx946yrRF5aW2XkVXsrxnVs29p9TpdRLqSkXMk1jUC6fP5x2woa4HSqp1Ww5iXj",
  "key31": "TNvHgEakYnuFCdUsGMuunM5tofkX98RU3Nh4z4J2SEq39kg2D6QMtvoRtEJ8jiynHmb2MjwddUrCjeTXx8CQCnq",
  "key32": "4LpAGi8HoqGwc7UKoQMF1y7CF8sU8J79HcusnXbg795dhsk6t8DyazBewya6SwY35z4P1YcXP37nHwCy9oJ6uUmR",
  "key33": "2QNZWNkjvc58WraDqL2V8Uo1mPsmxQZZQrSZ2yA6z5w6NQ4whq76iehC1rxvHN8hTKfzQsNoBnS7K8M2tbnGc94f",
  "key34": "q9AfCpfP6WknKPXdSDrezKmib8KShqUTMJZCK4SgX6fVymyimi4qynY5aPRLTPWCHdHjDewghh9zVU8gRGYVaNE",
  "key35": "28iuExdomPT23fxdBFHjnv2eb3mGCNwZyY9XV7XETaXX8MkCxyVNAjaBJsfEp99Jsw6ALkmMGbV5LB5f29V2fWKw",
  "key36": "3FvmuoovsBCM4WXtvm1anED7HuBDzATw5mibgh1kvgmpfyeHsa5kdS6XXhjdAQ555yQvyTYi2zNWakJwwy2KnQA8",
  "key37": "25HidM5aCayPiVEcwHDPfii4Ao3ZmyVE4v8nWMjKmBYgco7yAYK2Phc25pQUrcbAo4sPuWfQvzPLJSYbSFFmBKXH",
  "key38": "4qZoAQUaMTzq68y69pUyLgF3HK1CdsX1dCbxEj79XM85F7hAimEfkFoPrbtwmatfVsABrwVUVntD8eVne74Kb8xB",
  "key39": "415zWhiiaThWiVM4b8RkoePF1xsQfLcY8moXNny3csF1tmjL497FcquMjb9pz2wPaceGroUp3e6KNBEu52MmrUEQ",
  "key40": "5m872e5ZSzJ3jnRKUhuffoXEcGoY6d7pzbtSJDKYySGWZ27n1fiLP2auHA7SABi69nH2WEogUh4gBQmFFF9TVEhi",
  "key41": "55omV27zapzhLaCArhRXpUMN1wep6QWsxVbZ4pSwNgjekgS7QFYKTUa9BXLWdihnorXqp9Rvxyp4Q8EUvAZNCiPB"
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
