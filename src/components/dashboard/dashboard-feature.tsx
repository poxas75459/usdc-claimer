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
    "2ytQV5r7GCjL66pE4mc95S9HoRhJHDxS4N6yVDnzQhvjn6A29Vio5WPEq8Ta9XFKUaRqv2TMx961qT54cJiBhjok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "659nWwZuahVXseTYoL4sjVUr5ArsYgN12xnq9jRqnh2UGmyHQeB5XFptFrK5DHT2obA1AhTMw1N31cr9trvTrhso",
  "key1": "5j8xTKaZq1aqAULbQFCzNqMMDakwDB1LRt3Q2eZueho2xMQPLLYZwunbLetwcpjuJ1BL94jVJzH8L21Xh7RRAW4P",
  "key2": "4Tp1DoaPd73PDYyVDa5ZHH2UYTXjs1fvDoCnZgi1R8gTmH1gBJHwknNtijDg7KJJhb3s6hqSxciZpHoxUdHEHcN9",
  "key3": "4BPxYqkSmCUe4qf43zdS2GNFPmP7AQx21JSs77wCekn5ovXe6YFWTG84bxPokkunvoGbMV7C7axV5UZqawBrifbN",
  "key4": "Ygw5grFBZHSMoyQjbdAqZx5H4dBExwQ669yYZdxxPMXAMTboY4uF8n1wt9oCqBPhpwF5YGfgsCEfH2rW6LGG1Xn",
  "key5": "2g7izLTFADyCxf3SSWjR1YCvxsPvLoByDySktRjvmhTzz2S99XWmxcQpCy9JDKpwhE7C2Rzt7TTDTyr4MbaSwyDY",
  "key6": "3hNjpUyFJujjs4NG1ftVB6nidnNGsHGAYybnQT78XvQ1wMRshTEVxzhU7WQE15ZXVBoz97ZRUj3oG78Ua361kxKQ",
  "key7": "3jYYxvCxEGsjmWzADtns5hQwckmNduYUvQnf23fvuaF63LrQFrAaTsvB5xBr2WQk6WkxCsHPKGpfbcnBpY4Gnrjt",
  "key8": "4xBZ5Ac8hh7YfhzoM4Fkba3QtaJ4KdWc6zGV5RFsx5N311iFswKCgk4qBmGpM7etw82S8garjvYXsA4EFfQ25MMG",
  "key9": "2bcHphbEqxZQqdCtLByRHUV9S2ak71HR4CLbfqED9zoixXcRvm3shjSfbNUA2bK9Ny1SnUN8WKCKzbYtTjkodzvw",
  "key10": "2rg8KvG9E5NfK44ocEsHbomJZSRADNDSunoDQZSbM2grbtmc1LnWtDheNRmoxaSc8nTRwsyrsY5kxmA6P5firPj5",
  "key11": "4EQT9qKJoWoCDWMkQyeKLABmdDYLzTuRw9BFwd6CTLyCENN3reSqwF2gAL1SUJHG9Rn2J3PiwrVUTgLEwhvvViB7",
  "key12": "3ZJC8mtywEYjhhojUD4Qo7EaqLiNQTSRtEqWuVg8ST9KM6amAUTaJUAZhZ3un6nsfGuD82TrpaEjsS73kY4wRgcz",
  "key13": "JiKpeYy89MpUaPu4CnkE5e3xiPcnPvYCaqNoe8zVvEoB4rAbgUbTj3sSdMShYhb8GU61jq1nzqSxLwwzcAmiuG9",
  "key14": "3KGwjcH3SFNNcTZEdXF8256NkpYETNez5pF6CYEmJwdzh9mbRf8u9HDaMAYg55v6bjeCDJR2tBPuv6Ho4nBK5H81",
  "key15": "4nE8xjgezj2UEFdaQWC5Xr5CZ4eEMqpUnSvj3iMtmfBaJzidiKLUeapPdcp4YVDC6MgwXaTvS6TByqmj3TMa6R62",
  "key16": "5nB7inQQLDHxPc53QR6UULWyQnEQ6XhwSUYaYQGbG5S2t1DwjBLn8DhejJggq7AJnLLywcFcbG4Gs3X94G1srZS4",
  "key17": "5hM1FUpV8LH8ajUCAmauC7z8phDTr276CaBw3GG5BEcpPi7MJARr36XaJLAioDLkByY1cbZGd67pk74uibHvjHKC",
  "key18": "3NG4LPcJnoAcietSWruYHG2oh2qydGkoCdB9D96rWBbYehTzDLW82LU43CNTKFkyvXEeU5pTceKvtrvHZgMxLLoS",
  "key19": "oqpzCxTx8DP58eosMk6bLRs3LKTTBf38fvh5L6gTXPeNvBocg4Dv48QGgFMWeErRJQuQo7g9Mq57dT4ZoasdNVr",
  "key20": "2dvb3yg8hNwwnoSKrkNBbzmucx8Aq16MfFgc1qPVcc89rDkPW6XRxgB3QMY8NRNfVahNiyNUy9h393Aa1LKaeaJx",
  "key21": "eT9Nfotpvg6NkB42nBWXRJxjrZaYb9MSEjaWgj38wqdMDPMU1inXGGQW5r7A6aKVo3371yJMCQq5L9EJxfmUp4W",
  "key22": "4rQkwH6hkFg4KNJYM9s5xm8p4j84rM3MkZ1eswAgNNwjvUB5eoiR1w5T4N6E6n7usiAeuPubX5gQsWGycsxpkYku",
  "key23": "4zBFLgwU71nP2jS93CS7Psbd52YHBVQh6eSsgnL7Cc4QaobcdK9FAmPD4WvY8SAPkFrWoCK12rsJmAZRRBQv64ez",
  "key24": "2SBV5dr4FZpV78szSQW39JVJxSeyS3M5jQSWtVtsg2cSiDhtTgcDiCkFXT5McHwuBCxaim2gw3hhTS6xXL7qw8tu",
  "key25": "4FR1vF968FSa28xF1WRtooYqhrtq4bpmoLqCudr26ysngvx3MKZkKEX8cyHA5BYHZySdwcrxZZbDvhMSuREhE6KG",
  "key26": "2eAWbV7fz64xSvMsVi3BHri1SwCVa8YQMe5SYRvfsCdP5XGgHd321DAeaZ8T9YwnJm4Zizor7VjbvS5wVJZejEPB",
  "key27": "27JncDr3Bee8EdCPp3XXLCfV3oDphdQdqiJrGxSro7cfNhFwG6EN9xG55PP2Pu3XZfgCNxL3YmDpnnBJsC1tsPJM",
  "key28": "qDLHbnHzbBxv7xXsEjTVDTYXZd87nbTKmv6fzLr66xUxe9q4XBsYA6neGeyyPKUQRjWeV4H9PkKXxp3mF9gk5kg",
  "key29": "3M4NSy3gi1KDyjHYVMVogEegdsHvosX5epbC9hVb7eHwqzf6DxhPsvnitinLc2rtBYi65yvC4FoUxoAMhkzxyH2x",
  "key30": "3tiT1x4Z2WToUtu4uqY7qbNu6bmefJYDRvURkbi1ptKR5dwCMypg4rujbnUhJ2brjoNEdP83rQvun6xh2jVr1pr1",
  "key31": "2HXQU7Gd4awviW8p9BPcXmKjrMCk1eBk16XfMX7kF3b6nJZSm2b7b9QKQErG2ShQejndUEXCorNh8BDKwqZ5Ky6E",
  "key32": "USg63Mj3nsV8FSiKhZpfnKT6FyUse3n1AFkWLLTmHZ9y3qDY3Ekzbbgo4MGtRNKq4j5bJB8G78fXnrCtk4Aivrq",
  "key33": "5A4DTvvV1QV5XReSYweGVvdz2ZKWgbxM1FmB1JDNsfU1TRJNSKXSwhzBNJXD93bTRZNcPLTuV8ZsRnuRN3VaeF5L",
  "key34": "3RRWKZm5ZJDRR47z2MxyKPN5EdwM7iojwdR4xaoLtZCsktUtxSpjvBsXa3s1YuAff2XaAfeUiZN6bUYYPZy6v2W",
  "key35": "5yuT4ABdiLR14gYdBivydj6wSSHnAx28DyJy2jcRhKJg5RazAA7hDR1TrrmxboB3zwFhfReXSnGTYJKdD2upo1o2",
  "key36": "2kFJB1oTsNARZeUxbd2dXtF9aTRYtWwQLEm1omrgYtmWCjWocHZ3kxhCxYfM4Hyj8ymsysasj38tVnMx1VQqpkpB",
  "key37": "4xonEoA9rqmF5bpf2yV7PjWr3QuZ3hFurP3KDEo7Zts4Ybcr6ZgW5itYvLPcLyYDxjf4YG42G3FcBAx7rBgjBJT4",
  "key38": "2n48SVEawHf7j1TBbJDXoeLPsBkAddoHiywKXjJFU1ssz3SQj9hRRMRDv2Pu94jgk5jGh5YeGFSeydwdV3sizCxM",
  "key39": "5MiA7EqKw42eqfbsGjJEK9UPKEbdA8epfgK29Vk4wPmxRJ599GoHj97u3ZM3sU7JhwwApBs89c1oSSdWWRH2znwW",
  "key40": "42W3dAkm9xZBRR5wU9Q9VstbfKDVCKe1UBgyezNygswtfifvBwXijLmUezZi5w2aqGehJKRXfgwgJSkyYz45ojqg",
  "key41": "3zr3LG6VAgQdaHAWtpaiBFsKG45F86zAAszQ9YPcNMM6LmutwkXKsBDtkej5ta7S3K1Zow7hZD2XRRGnCPSnbyJH",
  "key42": "JxRHuVmtCsbPB3MXdrfv9QTxfkPRDFGFHGgGxNWY7snDtA9FSG1EPSv9QAMz82Vqwv66cHd342ZSTMHHNRohfkW",
  "key43": "5CMgt1PTGu5U1SvRjcFFgrk3FfiLHsHfG7hJx9GXn7yeiL4MMKxct3G9b4CoCnuZdXmUjRVzq1fzhQMmyeQsoASS",
  "key44": "2mNPS8dbvbgL59JdhpMxBTq5H7iBQHmM2ppsqyBq9bF2cBbLqdGRjvj6dSiwt52hvhMXLW4hbpp7NJAKrZZoQn6s",
  "key45": "54KmkRVMSThZfBVPcEurv1oW1SeAUNLdKWWfzeXrtSa3BimvQDs23MQRCg5nTbTuFDAoDHZj3hAHFfdAZatXWGAr"
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
