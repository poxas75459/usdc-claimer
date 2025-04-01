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
    "3V1V1SV8TEieFAbxsnWQjMGHsA7HKXKCmuHmbz9rhsWUw6smUQySjYNL3gS8zBsMktzycAmFKXHr5gyComsrJkKY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PUSevpQJ75xjcCC1PjuHCiwwZZYj6BnRFZYsJiA8fKVsrXtRy6GvjRTXMG5HWkaATNmS5MFaE1rrjVDSyBdAaa",
  "key1": "5J7gCk7dgFnRtjZaRiTLjALyYFsaPybVZ5K3T7qYPnSY6fDbAbdG7VDjYm1dJiKPNqGorJYWZWS6rpm1qpN8eizd",
  "key2": "4YHdyvWnLEwn1JypDiffFE8vVncxBLc5NxABCaLhXn7cuNDs2eTzHq18uC6PLoYodoe4FuYuKt4C2ykE1v7HGNnx",
  "key3": "49jWUrnhFmiK1SZAA3a5nQ7BQ68AT6wUBUXCmjA8H1yLuNSZgYqkcTeQDtxtRBexZnYmG7P5cy2MC5URpNiRLhGH",
  "key4": "5MQ7va6FYhp7dduYWdwd9Ctt4QZ7uGExBGCBR5nM3azPsW7iDE7gUdKHejFnQL5N5H7jr4poexenj3VLcDWJhSjU",
  "key5": "5xtYndb4Teen8a69m2zDCgRUmwuef4p6BPQZkQ2NzdtKdR69xpnadHFavS1C8PwGVuhkN8h6pT2VFh1Lzk2ySopA",
  "key6": "31cBcKZu7Ljc3UuvU5HTsWW4G2HeNR5WAizKpauENfeu7Mu5ryrQqTu4eV5C6KofkuFUx13grxkTGnMuJcCaHBmx",
  "key7": "mbSh4TjHm4hUmfQA9HUevWHrmHf1caG8Y65r8uxdnGqs4Hvb5J8AipZFzoQY513h9QqzYu7UfdstXmNF37sJ6ho",
  "key8": "461P2VfcjvWKArzH6jCBV79BAFGdTxuL7PaN8dhRwZZQxML2rkC6LYjewag3XgzgYvuAoFTxe9JdEaUG4imHDzWK",
  "key9": "2A8XZ6v69hofQfNM36GXLa1NNjYYUTCvB1h6HEAJ3PosuzWPs1qbEfxdLMx5RievTWyQHgNC1YdfMG25evwgihms",
  "key10": "2fQg9QhTyAoT4tFj6GGdGsMdso8ZJ4ZFKCou1MNTMGZr3e5GeKKDGFPCd4VV223K188kWybWAAc5ktNdZMt3picq",
  "key11": "5ymH3ETphSdgykgFMgVAJFuw93UuqFaAZru6VV4xuXdir9dhbtm3gGZLW7WBZzXYJjKdnnLE94oN3Wo9JjacJUdN",
  "key12": "3dxseZpMuRp8LoKYzc1dYSEebF3mRd9ph6U7jG9De4vTQqzC3aCriFSCCMHNYiY8Yw1o25FPbVJgZD2KsCkCpKb4",
  "key13": "38NZLyz61TiNEeQhBcNRtAZNcrNHJ6ebRYCDpj8PYL2zjyYB3z1q7X8fdr4SD5fZzZxTi7cCrUtChqsPrJfmuo8Y",
  "key14": "33QjCH4vduX69GiN6d5GeUSfVMpSGQTfcsMj98GuR9sh6RYVSGckhdbV6oCYHRy3ghAx35R7RZPVPgbQkcSZSZRf",
  "key15": "5pr8N75BJiiXuZE29qqgysUiap7FK9NtJuCCM1LoD4Kr4AqDivSX1LzHsbcmmkdCLLQ8FFdbQnxtY1joQb9H8Gc6",
  "key16": "4VLZbHAtGZ5uuqw4gotdheZeWYdrBGdWpJ6Q6J4zkKtSFrv7fBPGWm81t7aTNZ9X1TQVyVk6zB8YSsCdYbFowLvT",
  "key17": "3FdQPwuk8RTR8p4bgWwTKUessm7SykzSaFz8bYNBSQjuNtnQkVBWFcsQGiUB7ijxXHFZkur8LrkZ3Z6NLTgYiyYu",
  "key18": "59LRCJCjgrnLYJ2KB9cfcNMNidrrDHTCTYb2C8eETS6SyJvexAcTH87HWpVfkkgANDSW31oPEbuD4dM4g7bHUjju",
  "key19": "4HsGNqJyk6wfvejpJTjQ4UunpAEY4L94orkxNf1iQw6T88Zeus7hAvL9YYK5KNy4Hps2XvBV49Pp34HgRWYDZLkK",
  "key20": "4sZ2NR2KgH19GrxxzmNihBr4uAQLB9ozrjRNsKGbjcohtmkWVWh6w5grEprv83eSar9nb7Tve9LS5pWEQBTMiE81",
  "key21": "28FKEEHZsXy4BktJokhM4A4qWpi5kFNszeq8UtAPhvHHXxNbUo39o7QNj1YLcAXevy6UxMVSU76AcrDhZk1VW2cU",
  "key22": "YALGv2gtBZb6btPyG1ZwXFCCqyBNtwtSLdT1xyan6bohbNAradhLHk3ZvWWmi1zaciHTbEs5zLD3ubtRN3ojLNT",
  "key23": "36gyNT9AMRdAk5sQYAszatC5bcY7YMk2yUZGjLTZt3NMPuUfe2G6Nf22U7vn4jNHFAPG3w2BeupjkvrRAgaxzVg7",
  "key24": "hrKejr7LXb8fLFVrmDWYnhKvbtz2VpKwCSJVCzCwXnMPUyL2wQJUVEWxbwCtiMcGEcQAdoVWL4nTNgvHuFYUG7i",
  "key25": "5UdSQRQNmmRSkW38cuY5wWJ3WhjTAsPoQ8RmYM64waMnYc6zVsvxqN1yXE3ds5zq49PB5WzCyQE5tzEF1ZvHMQDg",
  "key26": "29V6uGyY3vXT6LfhfpUpapZNCktj17LUNBo4ohBpLWHxbxzckJnqoDewBYtNnVGEaCyi66TnPvXSN443vg9qnPyf",
  "key27": "5u5THz2WnnRNhJsHv5snZiZ1vUPEfYd1qMdLDhgPuccbcGxndatPrf1yEZENiSbemVpCjDSTdfgSjpW9mu8VC6eg",
  "key28": "4dPh6okd5p3A11zcG7ZTJ1W4x7Vc97sEWomEcFGg1vqw3xEWjArCKuroPK64xzPab6gSDjYuNvUNrnMG7VyHkVEX",
  "key29": "UBV11EXUCvZomPq93WXHFA6koape34tNGeYJbj3NUKGmU46b1h9JgoVeD9VWw5bHfPQoRWERitpRaoVexj4ddmL",
  "key30": "3YMC3UPen3HjEcxbAUECKEumird1LKgxn75Vf5E5xfxfK8r93o3ZdySxKtzPXTpF3PTrzqAoKQLi4Qn7MV6L4XR8",
  "key31": "4rpuifFp2zqQdCAzPhZhpa7sds3T7ZX8W4VxSQH4sM8RZ5hF5XP5oQoQxBjp2zHenvkWHQGAioCvyp8dhTZUunPj",
  "key32": "2UbcEBk9ZEbW5WAFyumRo2djjyNVevwZ6mRq3N678zeKtgGk5nasYV95DgTNsLBtLXZeFtZGxKwikyCFJxA3Wnc9",
  "key33": "5GQVEMVgndtpXPKTyQ88oFyGu88iJFBuaBsZJhxtXya638KduQh6wycPxbCerW7HNtrux26fr1zV3DBAUqQeh7DH",
  "key34": "3Fx7Tfc4Q1ah4wMaeMgWatSJqnk2egk9uHxGYUTuh4hmzuJPhtTUYGgcCb2yY45Jmp1Jz3NX7VZsfo6LXkbMSb6U",
  "key35": "55Lg4MUv3jF2vVqaDsFW1vBQsmRa3mg34ruuqZmyVZDqaWc6es7NuyVcp7byLcRyPndB3aFWhMMEQLXq6nHehjxq",
  "key36": "3zgpvxCfQYqDH2q7BbNgYxMLfA2Mt4KXkrsyL5HDXp5PYKg1GsWPZYo55ebUquGsFocoDQoscRfRdfgAgtwDf4Ez",
  "key37": "451CTJ6qJfR9CutheFCg977rHmejhGRhSGpJap1rAHAZvGL1DJ41aCAaags62gkLfpekKUewjoCrLzsmGNXpBwCo",
  "key38": "22yPxebkaY2wmRvEdkCoSmJ1cmi2KD53ZJAP461Fh9uew2rG5tpxvS9sWq2RxwM22fSzz7v9wq1kNMyfrCPE8a3u",
  "key39": "4qnnRkoeAp9W48LSqY4aPERu3jBgCLLKozuUuXZxXTHZtJwJiKu65tenHo8Fp4zGYwN21GP2JsfWUQJ7eCmNhtQP",
  "key40": "52fkkqR6rQqXZ2f6zAMWF8HEBNnvC2vcTpmT7BRWQcQsR13JrXaN5woT3US2NrFh6eDDU9bXazHB2odtbaPZWx7G"
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
