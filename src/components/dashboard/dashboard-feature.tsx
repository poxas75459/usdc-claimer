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
    "fq8Rx72esA2RJQcEfYv1p9PRr1EUugCNNComoEM3TzN6VD3mJguxpa1hX8V3v8PRzGGNpXZnp96GHVVWPwVcjUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y1UgDKV8zQ2v47yoRF9gqXniYT2Zd3XrgwbmFaaRG8AcPx2mTMaoakVBNWoaVLUhHN4hVufG46f9PifNWrb72zi",
  "key1": "5hoe1453TB77CW3FWngNfTPCdmPFePhUSMaTZkwobtHfT5qvzPJ87QvHs7BJh6ZCauywsT5ks2QV4kGGDaydaXBH",
  "key2": "HFcn42p4uxh3m3xHh6w5Ra3h92gJWEPm1Sw4ZUZW6KUZqFtFgT29A1KcuDdNxWW34tTP7VAumrw1ncVJJe9SnZT",
  "key3": "uEPHLGtBUjX3ssupMSBAeMudUKQK6Mui9GPEUhgFn1dfAtBa9JfkoFVnKCJowyiaiNmKJtCgWnZ6gkHdWR6SeJE",
  "key4": "4de9dTDzLL8YNBMiGFWCyo3865RxBdvhQPhrV9EXDoqNx8fd793jLBQgji56c1GvtKNYWvPvgjmpL7RT2f28FoT4",
  "key5": "4zGqSfcFfyyBbk4VdT1hMVSo7jhiwXjCSzKHANBVSNL4XqMTbVBmCn7VpxfVwWwm5JZA62JhCfxBxPGuxvZ5aMjg",
  "key6": "5K7Pna75ntHSj2wWnCnhJhGEG4maKbkTH2xjyNtMucQi1CfuubzL6eE2ahpgaB9w8BbgA8WiZaUWTSiU2aKdTPtD",
  "key7": "4EoRfL6MmWSMwKJa4WQKDBxiRYgtWBBEi45dq21oTwo7951upg4KBhw7fk2bogLcHG4HkT2MyTH98LkzeZfvUSMF",
  "key8": "296f9ufzVVPbPFGQdcekxmb7FWpZ2Dd9BpEzqBfLW5AWjLvS2Rop8iPUtZTMFaMK5rikBt8tioL79dH8HGzehaNf",
  "key9": "K3UdmNZ9K6z2sCjKVBMWdsPkQYjrk1mNXkW1oj4Safp6R7yPQ4cLfVsyNQV2kR34RLTt6kthvFfc9xyf2z4kRKg",
  "key10": "5CJNmUxce8MZTLRfs9FVPPGB6QkBo8xwBRCSZwQe7cyPeDudez4cwUnf5JR8Eo98tn2neKXzKidABLMd6UyMnW9g",
  "key11": "3K1AN5UZJ6733y8NYmZSFr7zySqpZov7ReTgsWSQFkAnoU2PXTBgUiHyM8e5EeZt7bTmhj4GW3fBSh73uFmiL3ME",
  "key12": "2szwNY1YY3tZRRSkbBw63TbDSU9oyuXrd5yC8NPZmgDtYkoXmHv8N5yZn7z35u1YR3yTVrfhc2tZy9fzHJ4vVZvc",
  "key13": "66hPTdgtoY3qYvDeaU1dvAbxyTy1WEtxGqsaENXSYohinqohVbwsHBSjjwqhqVttQUwQ8EYtaSrg6ye7Luhq5EMR",
  "key14": "2r8v3oyRJDHmUpSRZtVoX54ddGavUpz1P9Xwebin9Eww77q2z9DkZ1AsUFG3oiQ2JojJEAUnqs5DynrR5b2Yp3MJ",
  "key15": "2oHDr1B1cggTX37BCD81PqdFEoukQPNQhPF4oULknYRjF9J9dqy3TrhW6g6FFRPcZQBSyetpu4VwJ7PoaJfrfSUy",
  "key16": "5t43sPipFeVMgCndfPo2U64Zp1DCZWVAt9kYVz3zP8aa54Y4iyxhQbQZhChaRYYryHMUmjrP4R3ESBGbSvCZUKGh",
  "key17": "49WX9iPtFFe6kMicF83JjEfawYdP1MTDehuXjS299P6r2FHq5gSaRX3QiVxmiFeXwZffX6VzoZPJStSM1KxDrJqG",
  "key18": "5A435KSAijt1YmSTnCeyn7JewbM9HQd1BnjyXbRYQj7Gf2pz2Lyv6jDMGZsXzZs8aFzodEWn6SHnzBRf6c4YiPuo",
  "key19": "3kwDYrWmYi5GTRnJDRn82XvwgXrmo5RBmsi3bwnr2oFzdEwYuGqYTo5PxPoUjaHdSaCq3abDh7QUyuoD8E2ay6kC",
  "key20": "4KLZmmAWA28mEVw4VShH5bB6zcgTF1a3tPHRL4Lysqsi7YPJ7LeYucDfmMR3cvHCvmN9XMgnEiDeTGcoWnwLLfnc",
  "key21": "54MyRCFEiy76xDBc6N5rhgyNtvs5FGJHryMfof1xeKbS8i3BRir8pkaizQFjXvamMKeMn2hbQ5qTjPdq2C32fcaC",
  "key22": "453cnWVDBVibBfMzxHDqJMXRz2MADFb5YXaoQNcdGLZ9nrTZkdcFqF5hmhj73UVDzYPx1arVrxutPTMJtp8ZNofA",
  "key23": "2EdkNSHY8jFWeCyS8eNcFnVaLU5mJqz6RHDYKbX4KxZmBAWj8b2CMqQyJeyuBb5tdGb7ZgZw33f9G3ciZMjPxZUL",
  "key24": "25VbQxH8kpj2WST5gHrJJiqoLbiMQt83ALhcYjkv3TToPE2wWzLCpDYd7gk7sLanpfN1gTj1Eyvzo149PgUkbHPW",
  "key25": "4Y56uSdkWeQ1Ey4hGo7Auj6wkQikCqfESa954RHDHCm4kVSNJqnt5Cmj6tM8UGVad4NhK2AGf87eFuE6oMTQdiF2",
  "key26": "5xKdarxqkUAJXTnv57S9MSXHtq5zJa6Xh1NyGoRtVAiEJ9HHhKL6r6CDAo4L2vR6VhbeMdPCTjENMjsKRReZEoPt",
  "key27": "3CLVaaTiFqHzqzLtKVu9CZRXJ9jM3S9WDR2rQAfsK4iDeMAq9ozfJMBzhCsiKs3F7zKpTLvu81T7cnqgNj86Tqjz",
  "key28": "vmMmgQaGtknHsmuAYcWZfPpj4MGXAX7RvWqzNqUacA43NDH7r1QW6Grd7jab1TwKyDivFR6BSiBqzGY6WRwg1PL",
  "key29": "5fRDZmgTysP999W5JZYVC5rSQSs7A85oMqA8cFaSSuVcoGKPLYGc13oPkWGbkQ8icYnxrR1RWUBwkRkbwtxgSRuQ",
  "key30": "5HDo4W1q57jMedcFzcmJYA3q5G4JaFiVDsBBs6XXJKJmReXqNWFbb2nPU2G16r3LbGQqTwXZ1jkiSrhA4iNhw2Lm",
  "key31": "64aCq5Mmjotv54vc1y9bJTsXzmSve16pkurKeJhJvYA584yWhhiuHfkKKV76Lhs7Meg6Dpv5oX6eDXHWPWaRw1jX",
  "key32": "4q5SQPumn5VCPTYnjKj4K9B8SbufatG5CjBRnyj1D71rCbXTp7hGXBpbNL3DQAfPufZ4n352VDKdzp2NFCkoPf7L",
  "key33": "3GMTku9twtaBDe5KKY3SHEoJKXP83s4kfdeX93kvn6n115WGxMMUPTWxTsaRZJyRX3DCwhRQ5XJCxjviNCNAXKXr",
  "key34": "2mWkPw1iUHe9h3W14FjWmuvNL6VGTwnUM6e2kpGMaUUhu4nsRSTdmAdRmmWAyzP12XXbRrdyetqFVzXUut2Ha4G3",
  "key35": "48WEL1Y7kg2dpgpqmGdfyGabTU7SAaJD4p4kv16qc4db4qFA2DvQdqyPWxYpzQCet6AhtzBqaBSXFYfD8VDkNzMx",
  "key36": "v7qNdRLQr7QPh3pP5Qf5uDkQTpzWCFCzaChNjnsXwwzYCZdcLe7JbJ76qgCVB23zXB3KjiLiWMsPqovMD43a8sb",
  "key37": "Eb1HxnzUSFRa2dBML6VPQ6zocek8MgC8izscmhAUg9Zz36aRakDTJiJL4bqmJhqwo3n2D2p3jHPYMSznZdSPsge",
  "key38": "3Bpt5n2tauYae3n8DFwoyoSruDWeiYs86x1WvzXFvzXSkmJH1QU2GeN8nwGDXHE3nCvt4ttDB5MeyKb3QBiPWPA2",
  "key39": "3kxcYoMrZSix53Qxhvr6zTwVC9shvpqRofV4JticJqGjfhjmbHQ9Jv6dk9TtbHtyEHsnFqUtqDpoDJN3zDMac7Nh",
  "key40": "53hojzovMwYiwA3CCYY9niCrTLRBVDWZvP5nuS4c2FpLgexQSGWFhEe4Yf8nSK6DVfB8TzBkEb1J7UtTzB9rzsp8",
  "key41": "43pc5HfmCp1kHjjoX9qQ6h3RXokZjyxdudU7LyCYhY5VoWCA4pudXHyYknFKUF4o3HvNj2LJLDhCGWqvQGzgs2Ho",
  "key42": "3pUDuWzSFprNzyzGkqH9t1W44oR7gp7MLgGr1cTFdvV2vmrSzi1P9FaG3FXgBCSKuQSAxyG69gieBr3ZDsMvpSrN",
  "key43": "38fkZqReZuoJufeB3t8teazjLRh8EyKTFbzgZLzMFeDN3CvGFxyhSxCqc6w9NE13Wi8oYjE3V1FPuyrtnFLBT7RJ",
  "key44": "34Tbpijo7V1jXihqxuYwhhuWVneKZ3BXvmZ4RZ3wJmRr3Yjfiqt7zo33poWinReyu1HizjGMvN4cRbpvtea1eJc4",
  "key45": "4Q2Js8w3LMmHWtbhvWJwvKufsqVyXPqjuKg6XSkn5MUgxGKtmoXF2sdavDUna5PQZbGJyym4h2dXgQZnzxC52Ao6",
  "key46": "2KnKNmzNjMGn83UKfGM4NXVApqU4p28tHvLVAaxvhxWv66VNn7NfzRV96368As9wzSKcef6gaRTQ8HFyBtzjtkQg"
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
