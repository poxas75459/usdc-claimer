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
    "2y9NBMAGgLg8E9HAaiUpa7VcpK2v7p93iexeU9Jnhz9VAtD7awT3JmGa7Mri9wZRTeuhdUnoS6AqPUN9p2feGkZY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yGLHEV9TkM5ccGghtS2m4amJcUTTfMrkUL2EMbx2qR2XnPeoBhhEQnswiar3H4UasHYETgmM4Mwk2YTKydmfT3n",
  "key1": "4d3C2cETqhm51RWry94EHUrL3yR9z3giuvqUFNFFBJhzMrLHR4cKsJULZ2DsajLt19V4Ngyh1mAuNNEoqEePr9WA",
  "key2": "4BLZP4xxERmDsS9n52rio2AbvBJTYgK7Xg6fPdjUTAfe7bGhT6B2cZsSMqpV6T49UGNKEnCnBjEXBJD1VJnjTMBZ",
  "key3": "qQTFcvg9XgT18Vm4H4Ny7qLaNRFqcQT3mmQaFVV6aGfx62RjxvBYnXP6sqpt9nF3PLM6rKqTcwr2cQ75phUMtYg",
  "key4": "5LKsLTMR36uwZbnZJfL8VtxKWWtqW2GHCKCLnnpiiYpevZDEjFVP7ndyL9oa1N1ZCqJKY7hDiZGScuSFzfRXGJVL",
  "key5": "3TsJSMQy9hmDUPqDEDUr8jL4D9icyxmP4xdVUsAKx9oFfp3TLApVP6RdLFRRk4ehHRNNLf3Ehtgsj2DQu1kJNDzZ",
  "key6": "4eKKJ28fDM69CTGXMTGxf32i9o6zJgWcsiQgZXJ68gKQSAamReZnDj78m4XdMybz6QzBfz1Wom4BeVpZ7NESG9Sa",
  "key7": "28Cc7qNRtzCgzbXNR7E23BRwRe981dyMfFB8751QgKz1aGBy59hmDsCLh3eBFcjtKz1oX5wBokD8YEmZ9fbgy6wi",
  "key8": "4AWzsHqD1jYCwXCYRp2QxWXs1MeKPeiU8zbxm4gYEs985dyfyfQ7L6A45gDT2hzy8P9DarLNVZRu7fHV3ezifLec",
  "key9": "4BWQV9YDZ1T1AWWdtZKpD7Q1EoBSiWvnBH77QHuv6kcNPYQgvSv7zuhQqRhFrojXRn8pDAh5CYPSfwimdS19HFHx",
  "key10": "2SXD6i67FNDjarcUhUFiVAek7nWZVmXzzdRKnNbiPPnziWGy7WXMD8DGrE4jvpQJGMUxJpnQwd9guQq2YADNeB9N",
  "key11": "23YappZxPJHwWLoGH6HrrTPuNN1w1UpNYbeDagYd4MZA26tvTxMpT726z8ycbTCPusiHdAU7shb94bHpWCP6PtJY",
  "key12": "JfB7Tk1wJ35892LL2PReHMyCy5uhpoxcbTSmUkN8XoM74AXcsNCJjwBN6gjLYd7eFjXhv8JMuC6MQ8MJqdsDGAq",
  "key13": "5X32xrnUc5FjEd2Nf2BoNGEr3bkTtZSr5VBuSYS8DHvVbzkJ7U9i3QP3FzqNXoiEQgDJyPgdR3LkhQznSpTC6FvG",
  "key14": "5fYe2zDG6HvD2LD4Qzejw3yoSyxUTwMNVBGHfbCtg8nfnTVBVkMb4CHzf6npdqxxoPGzWm9fu3EYEN3ETGeeM7FA",
  "key15": "2kqzKimWRtnXdthXTF5UksNxwBKFAqHPFZL5VAbT19Gq596LCT9ZWiEhAdGFZyDAkoVFmxGsEqY82NdBh98w2x2E",
  "key16": "hyzZ57macCwFhqyh911WVUiiHneTM7kvcnDo4WsWYVW6WvNkTqdfDQXMUswxFAH6mDo3P8oN8VbkBwgvgcGjeWm",
  "key17": "5pbeNXARmkv2CDDeEabpKRf63SzeRyFF22Es1WzudVTepYchxhEESUVJ7WgPpAMmjdR9kSczFpdDcCYqRTBPmXb6",
  "key18": "57QpaAsn7Nq7PUrgZETMB5EDTPkMMgNhwVt93xvkBhgNkxyngt389vDFt7MW7cqucV7huKUkLi1WTdDvH3QgLz2H",
  "key19": "2KzEFpVgnXPTZ4voYxVzHR47mhJ5KJDMNTJFN3rfqs5MXLZWXUhN9aZnyVJtijzJtYS9m5CnuuiL35cHxistWeem",
  "key20": "5BdovEz6Zu3gwA8wDo6VsUMWFT2ebZEQQTZHYbn4aBhSBZ1Qd4TMXKgUdYGjvFYqQssz3Z96dnq7ksdrraEfKExX",
  "key21": "3JcLvJLShWwU6W3EL6Doza1bxaGAEksVtPqmkR7QRab5gusHyWFbDdrrF3JcgcNtdxQ9vwfPDCRpEHQffNjt29AS",
  "key22": "5AZzhmjQFNGLJDLf2UrCm2yHrg2Dy5XRCfGV87gX3nqtnjrkAa4rRvCpAxtGz6Y8usWgVpZicSt5GJDjJTrFq2QS",
  "key23": "5MmsV6bcv7ngC2wF7iN9HdUTdSkvqqyqD1uTQPQLD2x5v8g2CvjxHxBmGuAgewtyRkdApVtXdS4ByEhw7JkkwMtE",
  "key24": "3ZCMMFQ27aeVMy2EJhdhrUWLFcDUqmzvCcoyX3mFrY8yvVcHhbLLTcRpTJeeZA7ouasGJ2djZQ43fyfMHgKTqqUm",
  "key25": "4hdRP39dnaoWFSUjuQR1dqyUg6nkxxaieUpcUgnEruFQLsVJQtAAjjQPqhGxyga5SY7Yv7LbeFqoy7SUp6wkH3PV",
  "key26": "5qAvcURYvHKRHniTEHtQ4LNWCyurwBv5RUCeya4iee8e4g47AjdbxhTW1m9kksM9WNwGuY5WCRKdgBKpyzwiM9Uf",
  "key27": "52HFYvchQroiiUGeWTsEyACB8fQi5xjGaJnD9NfxSMNB1w5cdFhzbznpcnWFw3GRDyj3VR5kpHwiQtMPeEVAeB1g",
  "key28": "JhoQjS9qSadrq9PXZhqgAsjAQQ7kvqUSZsAqFLiAqU9T733Tgv8Bgxr4RQSJvsQynHdCAuFEbzEAsnCFVWWGFNB",
  "key29": "2gfvDdotrf8ZitEmghf3KyXef3GhSUfLui6L4qDhBoXefJ5s2BfkPvHCQfYoSUr1WoW5FAFmCavPKgDhqeqrmyXy",
  "key30": "3cLwvCvXVw8R95og4irwHJXWEwAp86vwXzDWyFexi9TNfBuEmgD5s1MJ98uuPU7rEFWfgwbqAupodFSfqZaABNLV",
  "key31": "5pr2kHEQD9b2dScajAFFmmyGSvEH7hZqSMh6koT5x9Fq73pGCLwaT8gMA6uZfsQgcfjCcVHqpw9qQvFXFif54JXd",
  "key32": "5KiXvCkQkdMVuC1eHmi8drGpzXGR1GCS5FHyUx3pdthsZrXJKDnUf74r5LhSqernJ9u33nXJvo1ebn3PvyqDzt59",
  "key33": "5ictJKf5QgBis9VE6e7votLeFdqUXpYYVTbbNJZXSNqJ1KwZjwp4B4ViN8w1qUgy1twJxKA9sTjVyD2A8Yg4WWS4",
  "key34": "3SPb1cZHqggMUzQDENcD7wC4YAEwo67veFKaG1hcmMrgSyho7H4BQbck56mvod8eCX7VxLZTamxui3H35T4DEAtd",
  "key35": "3VfDHdbk8BQNRqZ8k5GGYbUJFMLWspY75sA7RS1Pc9V6v788Gfp7vuf6syUfbog4iVxT1pNnNQR7gxd6xNDbqvcm",
  "key36": "2ujpeTMqpYTQn7B6viyGZDc3179VTTuEASHjXjsaDDJ68oJe81H2acj5j4E3KgpSwtQQ7b7Ein5G69m5Bxicqbh3",
  "key37": "24vMHB1wQSi2DgkWGrL6gwdcFgFkuJtg4qy1sUhtpTPagVJ9A6XVWpkqLU1w4L3zdYv3LCmgi2gmuHzHVAwJ5mFf",
  "key38": "3PkNnYZqXt4vo1kHzbPJpEhHLBPVH5yV7XPbvT17FxhBcUqqcJGfWmK2t9Y44PCq3b1wWZMfPrYKShJ8MNWbPqKL",
  "key39": "3DnMdpJkbrdqfi1ZpVmaaEseVu4CdGZcLzMtjxX7fQXeAb8CQcCdWJiHBDuXpbnVZs3omdN4G1QCsvGCnTJWyrd1",
  "key40": "3PcCJLujow6scoWJGdjLHSyy8NJ81bsYTXVCUatqAbqkKQ9NL3TaZaUZiMQoacW3No6cxSpkAfWhR7XiydK45GGV",
  "key41": "rf5GvkJVqXK2PxQHDPVXZ4bnR97JgZVG3QcQT2Xzv2ZFysZRJoXx9EskzFvyvrJf4AyP6UHRaioFb7Rz4PBriNu",
  "key42": "3qAFo4M1N6CRbwHseNLkEnci1rryJ8n2eCXitNFndfwwBPQb2DwkV9VPCq7vtMLMhWNh5NXP4eBuTPyo3kRM7s6v",
  "key43": "qYsDqDc7LKycYRMX2RwfCcZ6QoYWRagJXA9RfmyMVFqaHoYV9XyuheX9BvEaXnVWvrfjzqpRrgdc8sp6nMjNZ8H",
  "key44": "4Yq8j3FKECMUZ1124GYeGDva3eBbTLzBRW5EBdBUNtPMgmsrN7fhE4GJ2ATsodcPE8shz7cPDgLqX1D2nk6nP7Zg",
  "key45": "3xT3WDerXd5w4ySvkCPvGYCSDzQ5w1eDaC1wFGCQkReDtDaNB2o9PtqnvHaUuzcYEcUbTP6qy2qdAbBcz8C8CfeD",
  "key46": "5wqgfKqDZfRPTXTcLfNtEYk4rnUCDBmSNzjFxgERrieKLnhxP6DJyj7NDFnDynuQjqzhUQ12ifkTTJfnfgvWUwDb",
  "key47": "5NWjRXY3XoyvjT16zJ4Gwy6MQdPMYNwxPxocGZAGfrGzwtuESYqEkYmVy5QZ2kizrfd5TCTMzcpgkwCeFhWtRfCX",
  "key48": "4UUbsU77kwSKDJE7NEQ2w8qLCw9k9JXo2sRcYVhZW6JMWZrQGRQtGVCx9a1ZJZhTbwP53LHbcv8tMuyo8sVqBvk1",
  "key49": "Rh4UjN1mrPHS6HzhAS1aeLYtbruD3F85y15A1Hhz4zLpLnNXkeYDK9FnNuWR2p7equCamLUppJnxXbqXYqVjjJs"
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
