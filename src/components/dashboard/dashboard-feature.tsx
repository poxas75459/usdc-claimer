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
    "5Nf4znA3smns5ZYdGPQneHBdeSGsPUa2Wamg7mhA2uwcxXCNk85QVyefqT1xVWUShpwasCw4TBEYzN8CeWY3zEN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "td64C4ZLV5wBY8ue59i7M7BdiX1yFv4tBrrvFVsw15dYgM5iaNcBQG54V7qBBgE1kQnq5HSs8SW8ceiqTXMNLgZ",
  "key1": "Hct4skVQMDNkC1NScnvDc8eM9ayxQknRUSEjtz9sJLuedZvhrr771744D4x5JUBKgsz8ZEQ85A5e2zU255NDKZ8",
  "key2": "dEFT8JgUeH5gagxbHtVTmgwnLDrhH5gNe1CSBygsUuUKqqq5M791DgKyijZfWU8YhZ5VWyDb3j1m3RrVBe7bpoL",
  "key3": "Hgz3SvR7vzsZ7nT5Jyx2aVk1PR9ZEkYdHzsv9wrjLSeABtSV6WnNZELDXeLvR4mrfPhr5CLoQqffS1WX6cCxUjH",
  "key4": "rWK6GAKfjHwMYk4WqvsEfPvJAMZAdbvSo5WxWubDt1fEgJJ9XqcgrzHSHuqZyrbLJuYuWQ8aYoAE8Cy9vTQekwQ",
  "key5": "3fkDUQtuQ3X3y6fR4mvC6JYeNWPX4HgFYa38xZhxvGGRFnhL6Wk9YncD7ztwuZvyu1kZuzLM5Tx26Wgc815NFEyh",
  "key6": "CQtfCLNXJc8hsu1k6JH3sUKKdEmBZq3Qnxy1dyGpA7r3VrtYPBFc5txCn2c4WZPjnTC2kfWwVB6me872rrzj3tM",
  "key7": "5aVS4bCZmCk6zonHYbZfgYBcQehtb5acWpRfMB2AxJf8v4aB2yMdUg4aMh3tpSiWB4c5E2LJUaNCxFv3VBqdTrJh",
  "key8": "5JTFqwdCTWHn85xyp1MuzLFoM1s4GBpP7a3FuDLXwLoPbQfKYMKwLDMW5RwkSEVZpGsMWjY94jom77KwX4LJQGZB",
  "key9": "4F8HLbwt2B3wxr9eKoLaVeKRVcWccCPN93zsACmtaaCZXJVAhHsw34JmkeTgKx4wDDNBgzzWtwwavQxZYFgsNrT9",
  "key10": "K15LsK8nfc5xWVghjEb1MFgNMCCoBe5UVnourBDR5dUkz8rM2GmDNZnxdUCiSrQ2cZeqiSQtVNJiiGfKzshiEbc",
  "key11": "eCB7bk1APwgQPLgc5HguqZRHBvETefCxFRQvnBDvgDDTh1kssj35G88twmbewp6EPre7Gwkwfc6etcKsFaMqA5D",
  "key12": "35JAeuB7GMbvwFVbmFEJg9YfaR6Rum7Qrb8oEjHj8cxGVKVab3vq7B2q1xUYt69RFJVcUbvALaqXNfDKMogS1Hi1",
  "key13": "ExWBjKW7yUpx9DM5y941N67VCF2kgoya9uhB1NEQpxmovgxAkjj4LQb5j9Tq8hk2YvyUST61pkWgXwf9HvqwJ69",
  "key14": "2rjUDHnBpGhr5CP235edgdS6P7u8VKr68428M6dLqT99sMZHvcznRS5FWsUrzJXSRvu9FnD3ZxGUdrWQJFJL5E4b",
  "key15": "2oCVurkpyAzXRxwPcgpnhvaSMBEkmKcxGw8m3DTByM8ivzoq1geKabEe9GEP1cWR316a4MznDXsjowDDF1fUcCFF",
  "key16": "2HGnz5JqcwD9a3WRX8rPTegqGgq64W9yVR8QPzz8464TDm36HCTY5FHrjRrdZoeo2ESuALXL6xzmhAThAsqVtHmN",
  "key17": "9bUMbFcgh7zNpLMoibxBZ6o8ZT2cVnFdLtNVLojD2yiZpbyxuUFg5tNGNKK3ABSat1WP6jBUQatTxyEpYoiKqhd",
  "key18": "2wwwVhJoE9NqGowZvkZT4rmybUsMuHkoNArUXDBczaheRtZmRX4ZZJRQtRALaM6Cfo8R64CdwC3LbQakKQfUdccm",
  "key19": "5V8QgufJYvEWWNbHBv8cQAnhdSWAT3KvpKcXPvEY5qRp5rdEAwJqxWYau12mP6sYAkS3Cy1TiUch29XGN7VzBwQL",
  "key20": "Xt5bUdD15xFKwquiX62Eti7nhsDxscndFm6MfKPSLvtMqKSbRePLmSo6Xmtfmt7bUUbgSmpsLoepqm4RkPCtZnk",
  "key21": "e1V4zY9i9eyQR8Xmo185GWCgFBUwdMEiibXmKxTefJrr1Wjc7gzrGAEceAcQ8qVQCTLoXCnt4TuoNkVuzpjWzEu",
  "key22": "3y3A6G4aH9QRbBWVYAD4fUwDwfL1vPSgTxKd45YWhdYiAV4XhgGs2WU42j7U3BWy7J98UBKsQrCsLdESBfKYjxEX",
  "key23": "5NyjwY3JT8nu2B1NBFg6sw1QRSRhoL4xgC2jNNqB2QrvYwUqgzztau5aSf3hQm473oxTn81hnJFyyp2cVKNk96rs",
  "key24": "3RWBu8ZvGyJS7RAqMunj2FJKAtx3wkQjJZQLTJirUNxLvMXorttZQEJSovkX1dQFHvLrSREwoyvKWqn4BVmAsWQJ",
  "key25": "3XjaHbSYkiYSKu42Atx8ivk6BZrm1pdiPWSoTNX2Bsyg3SvJkfr6B5QzxESYxQniUp5bQx1NTqRfAFA6ed4cHxg3",
  "key26": "2xgVw5sGj9X8NiUaj1HBNmVjw9VEHGX236sJPf7uUPKRTQMRWsL9pcNBJ9ajJGC7DNok5aozHEtEMqeAUpnQAKdx",
  "key27": "65xCwP1ujYnsiQSqTqqqf1TYyboSKEqwboEZEnZHH1A83afan2rVtfAubZhtLWDASLDUnsTznyPMLVxCWnY8uat9",
  "key28": "5Ln67aE9FjL3oYbSZWiLktuZyLk5D8M5fyKWBfEyV72pSeZPCcV33mBCKu88co4qMDDr2L9VKfr1Z3QR714rKQqP",
  "key29": "3mQE3Q3BVrgabpFHoSaRG9hnn4GiZtaKvXGm2EcbY1gd3bx2xMwyr3BPraktVatVxUM322jZXpENni59bsBwbRH9",
  "key30": "2L9s27uvScMErUFXTmwK1HAuePjnLJrexUoDNJHHPozZKW8ZVKA3aEjcvyF83SkwNHzNuaQ8EF1CbPokdPtaeS7e",
  "key31": "4oxLZ5nSWopwjaSfRkgKzmiJFYZ3hCynZiG5ckBaQwdehjDExwf3UFvRgf8mWsAc8JenQSV41hDeCGyDA5r99D4P",
  "key32": "ZY9fH7GbPQ6m8CzsjgtHGTWdciBj91Aiyda5ZC6DWUNFtWcQLYmRwQVVfzDk5vTJA6xq7kz473oNXvCNpEXCZeP",
  "key33": "2dKKB62P1pZxKHToSphDXDiPFZnycDioD7Zkwy4Tk2XsSJPNy3rbu3WMg5yPELkeSM27hrDB2HudeWZQkg7tWnmc",
  "key34": "3biezv1sPVrb3RusxQP14AhpZEFo7WbbRqx3opEMZn7uFzttvPucW4cdXzRyGgW8ZJpanhSSPLoVquwSpybp7mY2",
  "key35": "5d64iiGwf4w9uR7FNhRzv3b3XuV95oPaGRqXxU7yomEPwjfmJMNhK7NfbhukrHaiixXwQs8kKcAKNcTQ8uV4xALe",
  "key36": "2mAZRHVvuCwismq2Qx34ymKbrSTn26FNEP1WD4PmcbQLjaEG7T3HAjhXJu1whBTo3z2xnAkqvfJjGfzaEjikh2ia",
  "key37": "5vxReh92UNcmGtRgyM3opmjv9cZKxZiNb35xjBatzNvRicmnzXP4Egp41rr4WDNJDepLb72BjDnv2crp5U1RQBMH",
  "key38": "4Mc6NMLPxMCGoJRw8UULQt98J1H2jQqUfhApsyxaMKJ5wDPS573uR4aBfiKrmVrA3v9xwnYiGCQfySbBMCLgVtfG",
  "key39": "55F63zPCk4dVEzDJK2v7mtYfHj49RWmUGB9EavGMVCgC3Hd7PYq3dmSyC6RHV45Njc6kijQ78sUMLRBxtZzj9jJy",
  "key40": "3NznRR8LP9KT7yWibWryHXmxMzWRiL1Di5TAycY589sq55R36QB58kmMoN2VJg9PAq2fX6jtcJs2QeNpC4rQMtQg",
  "key41": "3cVwmGnFD9tdQuhSrHq4tm2Qn59D8Z4wkNCzwdQFBG6nbKF5tLXU1XW7AfP3BhZtqHsLB22Pe7EQRwCE3YwQDpyi",
  "key42": "2o1vLEgtTK27c2xgQrVisWziLHbGUheHsmXZWVNX2Gq7QxxWSCfeUknN7pU5iMc4FYw6ooBvYa3WcFbANyZffrYk",
  "key43": "3yZJsPwdJSd5cLifuR1Jmc2Fxf2R4B7thzUN3wuzCXVNuf4xM18yV9uTdLqXoESKq5zRBLuYTjwtZW37Rhq9gnhL",
  "key44": "4SMnURrA1jYoyFG6pcoUJDu1xeqELdVZNqniDGDAr8r88RJj4MtNM3AExyiFn2uzuDdLbgGhAPCzyj83mPNym1Yu",
  "key45": "3oNnq3k2BodVePbAxVN4oc8VdtFVjx2WuUaQtUYx9u3EHrmdTctkXAb1QnTCeU3PhC31dftkqTfXZDiXe8EcEtpP"
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
