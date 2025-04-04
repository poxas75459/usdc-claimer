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
    "ijvFJGxKbMnJT5E1Gaob69eXTUnYabavKgK6Vipnh42MzurjqTPiRbhzyUS1ujuXHZc2gDqFUJPQYDviBLPRWKu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xu6diCwoh6UZfzEehgwqc4kU689oEnKKbVPtPSTLMJKDLby7RoVW7FnsoiSfUmdUbjxwSwMnAyeLQv8Yz2JHSKy",
  "key1": "4qvAqkD1LS6NszBhtZmA8GFF3F9EnYc4XE5nuvh4WCVDm5Kd8wRMRS9GgkZ6js5BV1rwxFffzFPfP1y7yvWSs7me",
  "key2": "8Ygid6s1okaBM5iivuJhqkhrpQxepeUJNUaMuCAc13teVsSEZDs8AzqeVaqPBwzUDWwHsiipSRrETyY8w7HEqpH",
  "key3": "5QuHkAZ3ozp9F4pXrVjWcM91ZB6xrZB2SDVY3qfsfYCmNTyDF8A5zxMd7WboXPxfx9Uf98od3cHMbE9BewCY1bfp",
  "key4": "RbbhafHGdu5sQJi77wyTkDikJgh2rWDGuiJaC6KLdB8wnGewsLmdpnwxJVgzynYMpDTmcf8ULA81XSwL5Ut5Pov",
  "key5": "5D6ZWJQuaioRjzK7ppmH99M1csfPLpHmzk3E4vrw9AE2LG2agH8t5w2vGjQgPuMjz2AXjTy8dfPE5GndSjqUjCVG",
  "key6": "5bhZseu9VAq6TfAQoUywFaR1tGd3zq6MJvKmZv5WVxzWGwsXh6SnDX1d5FMQs3wpyX1frRhsBwqzzr9X5jwVuHEy",
  "key7": "5JHy1h7ghfXhQHtXDUbQdC3ZnuMGqj5Jv5BoVBqTGQ7BqF7B5gigxtKcPi6AV1qfrbrAmfz3CVr1RFifJu8uF4Kx",
  "key8": "5bHPCximhf7AjQPnXBWu5YyZRh9viiNAj5bCbj1HySRHSc56yd26KHS4pkyvE6RsGQtaivWgaM8TE5uRouzxJqiA",
  "key9": "58Qz9zCRKYWoHZcrYh3XEJ6jADx4tM5gVHYRtAQSsv2RQ1ojaiTJrwrBRZH7yDBqyuYkHv1imbX2FjXvdbAvzNjz",
  "key10": "4uWjZKufN6xqZYDENVDMUEgDAju6sHRefz3pr5u5wB74Epi6qbenLRwKtNtJfvgFCz337TEgwLzcwRQSfAjcdVyu",
  "key11": "2XBo4MgemgCdKLGniB3EcJ7UeedFg6fjFuEB7FRhguLLiW8e1Tr6mWLYWkDeekKV8UgT3pXRtSLkEGG72X8DgfBp",
  "key12": "51sFUK46Pjj6xdF2KLV6vEzsvLLZkRcF4gpBQ1iwMGPe8ge1FJKPd37GQrBsD3g4rwvu8NCfTjhb4vDXAwFBcboq",
  "key13": "5HXT3mE6mfmG6FABjrBtAco1fJ3V64PcmhZP7RrpJyYPMUdQSK5bbEa2SiLsfk4XbRNy5hiinp5uex9uDc4yDhBV",
  "key14": "4qDKcHu2D8YPHQBqaW7Kfq5TnQVHDAtnm4GJQmfmA84sK5xDnUXodx1Bcv3m51xKt9SSB5adcxkQoXth3yKxbxLL",
  "key15": "VAkv8Ne2aNtBwTDxdMZHLa1VWRPiiGT85JSkY9Y3kZWXekuPXJ4aGNft6riP3yPLbLyezC94kVNYpvrYRBLFrJM",
  "key16": "a4mP4qBcEpdB1UqoYjeu6gdgF1TgmytynJxprQw9iHANrZihBP5CBUsXVb5CP9AZAZTvibr5X26aYqLGtFYuagM",
  "key17": "5Fc9SVwFS193rR7GtUiKzmNppHQFL8tvapwfCFagwgnj231cew6pkwJJpCXuHnX771D6QX9wskHg1WwyFRSiazbB",
  "key18": "8xZMGuirFuYaLFvGurB1QDPW6RGo46ZzAfDjsnDKMKVvd6q6ZsiLbuir9w2ArU9j7izBSTE28hoVsLK685PAfdQ",
  "key19": "2zD2rConJfFsvH3FtCystoGmwGADiwg5YQVr41wGizsbH7i7fLsXDtRgH4RR6LrEAoEYDDAHewtEt8GAw9gdQr3g",
  "key20": "4vviw97dZjetfskNv2bukLpqABR7ajUBQSmFMLGWgjoyP7qZX8xrgdBNQxWSQrBPriapBWfoAgFuVfY9Yyx3hNmt",
  "key21": "4GTNMcWFKxx3rNCnuEsVzqF5H54XfFmFFXPYfv6is6YMnCULSZYLXgTynXaiodMawwni4kePEQyyX16WtKtkXGrQ",
  "key22": "45cb8abxkjdYw9sBcS11owT8pcN7pmkuPUmvNq1Jgv72qhmhpsWqdPdXdgDfC3VRckrtm4ShwRcJHt3oSLzDTDdY",
  "key23": "gGN7KkjRQdcwNvscvR425Nq32TYrVoHriSvS34qx7gSfCAUR8tEjusL9JiyUCunz9SHmwWideSyBMDDbDyv53zG",
  "key24": "3yYNNMwaMyE4f4LHR27GHoBHNVExDRbGh25tyYiXmRjutLeUPceyFb74Z93Tnjr1qCSeNPe5YZrS8rmDjGYkVUvQ",
  "key25": "2P8a9hbPJ3Bv3n2397eHf6beUmo7JPAGAwic1eMPNH9xZJmigZvWFxMh9SijgAeemEEpeBFxTuUwhATxrwYhb388",
  "key26": "2HeHa2s6G2WN1pPrGeEJT9RRss5ZjkhFvHeDuhQEQUS7WXkYYs3S4rSB9ze9orLGJBXPgwUERbyQZWCLMnJY83nm",
  "key27": "4LThQChgc3H1f32bpGYifavwU73i4rCvQTAD4vzaaV4v4h8egnMv6UXuBrvbi61iLnvDYL3cXVswgeWW4HzSjc1E",
  "key28": "29qknC6DgvN9mougSFde6NWzgC1QmsF1MiKBvTTcNmBw9BiHxMLduA3taEHS6LNUGkq7YT8omFwNSFLV8TswHcU1",
  "key29": "2Fv9e5TmrLPeFujPAsbmKfRGbtzRaSHfyxBVPgKgTeiCFVJYrSryygqrV2sJ5uVNqhD3zhvDjFksA2oMjDix8omD",
  "key30": "5keyP5BwdRbiWV4n4qRU8vGdoxMiHqGwLefXp2rFca2uhFTxjeqcrRtccgGiiJYXSzabfwBH7CvPcTTuoErS4byZ",
  "key31": "2gBgCjvgRfJ7vpLgn7pqZe9aNZ8gAdD7NRCuEgwTYhtpwbV6qMCxCaQYUUeBR51DVRL3GXZtBU1BmSFEdmw2hEkW",
  "key32": "5cocatzHHPmqVMFjtsKtp2weAah4eqkB4eqmjgDNU17oZBApDXUenYChvz9Q3W4Cub6cPzZKHfbRN5onxmFziZLm",
  "key33": "UU8Fmmh1ajkYHdstvynUqWhhUkfJ7fCPpoNuy6s46tptiRYa9b8AagU5pUYdZSKmhqUboEe5sxQagRsWxT9839L",
  "key34": "2BYu492VViz3gyK3dqaJVcZSnnv5WzW5hZ8UdwKU9NaKURna6iTNDJNHYNs4Bb4HjKfGubKatnvnDmEqxg2z2Vvs",
  "key35": "4fh5BH7gLcudaMXwWJwNoNp4q4dw9iWzvCc74Nyt8s22dJ9wha58573z4DEXfL11s3xYPvNkk5ERWsV6g8ECzNKw",
  "key36": "2ZrysuoHM4U6LN5cYZj1GtBwYbcmfM6cXGXutyhSpBUu6PVkhiftnKAVDr6Wap9wewgGoSUdBB5G8kzzPhaF8zSk",
  "key37": "vPsapJKySmW22dxNtHomwKHVAMHgo7Ywddy5R2cmEyXEsyFaQFcC3aoh6KgF7cnrTrjXWqBEFCu3DBVVcRXTnBn",
  "key38": "3WrCZyQFFxh4RLG53eT1zxUSbzVLDQhdFcwewQdgX1JLoUy63oU74ZF7J8hBwJ84XX9KUj9Zk7hHSh2cK1WpAhcH",
  "key39": "2Sn7s45jffqC2mvJRKTemHspw1VU4nBG1a8DQygNoHajvZgoUAhQEs47S8gmMJLaz6zyxxA9WMyiF5cPGNBQXieE",
  "key40": "4WYu9P7wuHXRBTu3zmXtYV5Zork4neeCfFhN5vwrGDJ7dzbkgy8KYZQxTYSPVUwJbL7Jz3CeNC8uU1udMCftNVZM",
  "key41": "HpFsf8P1EyBznPX9oYmT1XKNv9gxbd1jeJzfoFGmBV5bjqwwZinqTWm158w1PaCycTaDATusUQLShvzzK9URs9o",
  "key42": "26prxodwBn7t9h8JqB2iCc9sc6gfEYgAYKUbPAY1MSDYoWVS58WDW4WD1PCSXD6LToSC6JfeELUNPMtRgSvRvucP",
  "key43": "FRU3ZhHbAMQWTjvYCViwAS47DBhQ1WXD7UeNxSfvQCnAVHvdurEJTwAcG49RJHWAnAynbJDrfaQ4K82VqEzfULX",
  "key44": "21P4PaKDw35SB5sy9VrmU5cEQJurvPJQFPBZHZ2AJiXJaSU4hXL1mcGXHHhGFyebDFTGtg63gcNqqrv3KWQGfurs",
  "key45": "5MW2LPSCojvRqZzYiwSYGyTDiF67LyKg8CM9Nfnc4sgQSsJh321ia8gs77C4jAJz6rPfnrKCVNde2Ld2kFJCrYDL"
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
