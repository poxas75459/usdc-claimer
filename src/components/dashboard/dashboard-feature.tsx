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
    "5gTySPvgftzagYCXXneHgyqgY6Pf854SD6UjXD2h3xcrCLocsEDnTiJ8PvRXh5f2BwHoCWvLovENATrBQkcmwLHx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vfych3vp4szE3nMXGJyZ6Mnm2NEJ2dk2EzsXVXNBMBqTocpoKEvyFMrU4RDjoAYfw96XcYX5d3FgwdFb9KjV6BW",
  "key1": "43iZok7gw7cFk7U2jqdPzLCupPEHKRKV5HyH9ayxuXbXiW3UyZTssoyB6nhTQY7jfeRX1VWEFpV6cf2r4XjJSBjk",
  "key2": "29gX4yWv1P18A9qJE8dRJ6t7xrrSqjrmhwtctgoGEMYt3iiF6M9k8ddLvsrfPsRbwimvhoSoM5hCdPx18pcS8nJ6",
  "key3": "5mTkgQUrab3TcS4vfYmo66FBNfgEfg9KLQ9J7a1rz3qcueY3aP4rDfEA5iRNjp9xgkpfpLmiZLHU8k88RFc8V86F",
  "key4": "2YuZ8WyVgDvnTNbvF6cEEKMYbCVnFFse9bk6T2BstpTGUDnNMphKqvSY2g2XCYDXh11mnes6JrTH7zC5kw6xiW28",
  "key5": "5NQPiBNvJZMH7guoTZTuta4LeQgdbmkGAbreMUKyBMqBJ1Yh2FAj8BC9LHmQ4r1zW4NqSRpqK4REVxxWmAy334x2",
  "key6": "2w9PCvcKChp8Aoznrt4KKx7Z7EQta2LmiZd2DdJLDFFCBicz6cCA785Z19CnmR85TGHBrAv7eJTeNfNwE2gNVUaB",
  "key7": "4La9KKUU8fcgFDHU3yBjnT7vS3hyxTm2XVQ6E6UgPMN8L7dJWaFgRc6bqkvbMMedqH6DDFXLaSECxFq7nrxCBn1m",
  "key8": "4MRpnuso51gDDC38PfZPRxgqzKXz1BZXkznnMw8getUjTPz1cUse6M83cAzcVefrapBpdeG89h6XRXNrP1FtgJrP",
  "key9": "RGFUikggSJUxqyrceryFiCvUfYBeQKo8RUHkCJKZyJNyJpr8K9zcC8iBuYcSNDzT932KLn7ECbQUiNmHzrdxU2x",
  "key10": "3MauBSSqzgrKiNhkNZUgyuTVtNCzBrujPTBaz8NgJsEsx3hTVjDZduiZmtjyLXVcT4wDEFomWaVGh4rGoYwEHpkP",
  "key11": "3DW5bzk9akDDidAwFZ8R7DrFCPrabykNY217ivn6SYJqjQcqhfi8EL8cNMxmEE7tufpDWAGMgFsTmduVgkjggFZT",
  "key12": "4523R3LT1QDY1fszoD6uQm2JoZ6v6YfScigjg3ck9tWeUT1XnDU5WZXtBwdtoyngpoyjK1PLXB3rKHuVcWgb8LW",
  "key13": "2bSVxnAK3BuzJsP8qq2WYTSWE9GaHMEbaNfDwLp73h2dH9KcjsFxusnRNp2Bi3HH1AbdRr4dfFc7QPFgvrbd77Xt",
  "key14": "2cXLvRUNYEyfBE5Z6PoenFDKmy66SA37mqE34Z9ALXPrGdwW4osBgtfswnUXVcPX13MyKXqQps9VkyKzpLLJXPzh",
  "key15": "2amA5QoQNq7fBdjCnVb9VE1m38GxEfcvjqzD2MkFW8nwHsvZeqs6P631rp6FnwbgYCAC8TxPgpM4exaR7ryW5Hu3",
  "key16": "3QVU9sFjNKbAi7FSANCRYeivt5as527diz83GVyBCKsZ45k86a9rz9ENhsJpJTa6RbLzbvbHim7CRbDUZsvfChbs",
  "key17": "2LCcyvTd3GRh1u6ZVVbLsKHhKBWudvxLNRRw6JT34yatFaJ4HvVcjXuPmjAc6LXCoJyjSzwdjsnTZ7qChw3t3teN",
  "key18": "5Vztmd16VAaHo3hHApGoXZfbCE5sAkDgofrgFKZNz625gY3qPPkbJFdPs4N5XgfvhBStaFXwHDbpGa6CYXy4e4kz",
  "key19": "3dwvyvbHQtCfZ3EJjLu3H2BrBpex3ueCv52YN4LS7kYyJeMRwaZbRAPzca9jt14WTLtL3c4PiWoXFW1CKvMmcZab",
  "key20": "29oAxdTkFRNvhEN8FVfQMr6qRk6FwySzuX9nKvyYRJKRML39BHCqu51j6vghv8TFyoncvmZvukMr1AirMFtM6EKL",
  "key21": "3cXJTzvxWd1Beu9jxnYWRDKYmUZhPcn71M9fL9Ng8xUL3joiYQK3moia28qnKwHVa2kguAvFGhV4rXmJ6LbXKHif",
  "key22": "3zXCMsu64sBJa3iFoRroWp2x39QnBMwPyz2PNHsxR4WRSMGdzWWqKahdd5no5V2RptD21edE1WLp5VHCSEDpxpux",
  "key23": "45Kd8oyWJ6NFX5WRv4MnRuVirfWfQTBCzpFvATYjXni9LYVhgN5S6XJJamiYG7YM56T8wPexujX999rG5fJFKFXM",
  "key24": "GD66NLHycchSNqMEmvT68BDxxPdb57HaENhf9oDwLurkavB2vW7hG4SbpMabfEZ41DwjLtkEqyFkCxwTeyUcNCA",
  "key25": "tmXtbnXMPQFZRkCVQEFuj4ZaSTQ6Lfykd1xbGdCFQzbvu6SHZzd4GourRoa34eazBor63XQGxx78R1Yzk8dSioS",
  "key26": "5zAjx7H88G6J8g7ScpTWZdqmUAezwtjVh1RVaQD7ceyF3hqU4qSL7QLWfHfHRucG9CuApsiaAWFt6b74MBYdJ7gH",
  "key27": "5S32Fw78QTSZEizjZv4QexuB9RZ7zEZfBvYJ33sRiFdUCQ484xMCfA8CNJkAxXCxviVWorn8nKeCchMySSkD4peh",
  "key28": "3y1NE6VtHafTT3yPfcvr281WDXAmnURQVqvAvFKnf2fotUxHnGRJB69JAkkpK3m5EDhJjFEt3h3VmzsfWBsSKKng",
  "key29": "NSny58FguV5LGGxduta2gx1KmBs67dJKhJu52eGb5LYC9vgJ8VdktRiykqv1dnvM1MWMRtH5CGp1ipgeQgFWUMb",
  "key30": "2wNQSS7ZJBTByP2TQcoQk4Am7B9frKRK52s9thXwe5zGf1t19SEsQp2DeEdzsErLJ5DXYuVdeTPzd7f5Z6PypgwK",
  "key31": "4wtRTJC3B8xhc8dbarNn4EcWqEDB2H6vMeLcXMZZmJRpNt35bno3ZTWvTdnxvWBockh2cZUquSETTJ3eVgRhaDt",
  "key32": "4r5ZDcaZE9P8gvZy198EoUMWLAvS9pGaMzxMTxVsqLnhqmqnkMmufhqYiSmagRu6wGeeVbTbobMcuJwGCGH62ES6",
  "key33": "4SMMrhU6vxwMpZcAzeohVfyQgUjsnrHqVAMRFDchyii5eXMGDWthDtxDEjKKZXB3jWc9Gx2WkgnFb78wtJ7CCj9Z",
  "key34": "37731ygRRywdy7pFdCJ2rWMWwPjCLWG4HyrK2JUNP4pArfTZi9DbZtTJv71wy5Ys3P4MwQ6ru8GYBu9CfTuaFAx1",
  "key35": "4LpR2wwnkuMMExi5ZwMnZ5ws6637M8ij6BnH36v5Zg9FcbATEtyz44NvHkcYDBLpUE85BD4iYKoFzBL8CDyQDbby",
  "key36": "u4hSsQXj5Ga7tRDE21LEdrL8Zo2h17YfNhb6EQKnY41rzMTstvqbtjPhR1NeR3EJaSLGN4wt1RvRc1N1U89Sujg",
  "key37": "3oXmAgASDSosR7a1nqHHdDSBPQG5sDmp5c4igaRxaup6vn1m1xdYwB4jCPuyeDJJSFdW6mZwg3iuSxQxx3PRvAe6",
  "key38": "CkcH1CKkAMMmELFg23Kj6Nw7HKr451gxUEZ2rtHTUrBs9WijT8Vmt6UswbeBg2h68niYm9n4MKSbV78RS8YGXCA",
  "key39": "67rGus6K4gSx4ZkL8n69TL86mXLczmmUBuJGupPGNothVH23VzdQFq3t2aiVXc457scbEgGmYga5VaktHnqycecf",
  "key40": "4PRTnQvsGqjLzEhgqn6L5ZGPSupAykeLWt6koqi1jhRsckRy9Xm96xx3uQrhLtTu1aPpRggf4tcES2MGmsh3SmC2",
  "key41": "2tNn32RC3uNsRcaRRd6ta2HPHvVaT65CL7XDkkhPPA9B2M6c9zek5DNWTo4aVJj3KjA43QjuWivhaqsnRuhZaFLG",
  "key42": "5zQYp8VmHgaEEsPnxJnAM1SGtyyj7PuDduLVKPGTn97SrH8BkXrrjf18cKrKeT7vCtnz5XC96ED7bYn9nccqFU8Z",
  "key43": "5Kr4oT9MYtfYCgEtyHTjoSvjpZRyQpeAVRU8oBgUji4ZppGXUA3MJ78edBKMUtHpMtzbq4yiti9pgv6weQUjKvf4"
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
