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
    "4TsdjKT5yDGMfJQrDsDEUmA6QRcG7AkEBH4vxaPL39JL4wyPtk5M4AQo5w2umPcas5s1W3zVU4oECoSmmJeZYaQi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZNmCBh2FsbZp5gLLZXJco5YsMPMUngkkisgUwatthCRLyHS9292rsvNzmHizoAviatPDBniPkahb2p1wthsbzLy",
  "key1": "2gwfkR6gKb7PoTV5jpDReAHgzZ8tb9f86YxQGaouTx9b1MhPTPMWjup3znEmuRYpmThLPx4yZtKgTeZ1wgvjrUka",
  "key2": "cksJnTdek43CrHbbUp2zoiKmkyvVsVzimF27mSzLgELpgwpNF9SrUvMTxE1Bc1qofCRyB2mMcqDvKL2Vq5kFNti",
  "key3": "bYeKBumQhFqURDV6nzfub3AzYAmPj7zii9kcD3xjNxjDxqT4MmNMUZsPkjcXxXfTdcgbovfLWCvGtp24SyjnbjY",
  "key4": "583Q8E3ZhXAqCo2PUxbbfT55zHW6K6VoBTjyJ4KqGkruFjE87myjAFMfKD4MroC65KrYgggV5KvLq7rWC5Btp862",
  "key5": "2a2JSNmGkoHJhs9vVriTBWS9Yhwm9D2HvQUREyTErq2gkT1xkTaCZxnNn974u1gQzP655iXKfj79m5dra7xQnsPi",
  "key6": "FG3Yza1d15Fmc77ERwW7RDtFvJzpdnbLiwSCPhg1bTRtZDSWCHQtvns3kswkYhUdRkgqXjXjneiYD2yhQDynaME",
  "key7": "3KHexZJCngf3JWdPwB9rn53AsfLqDzLUEdbiJoUGQkzT2eJankzGYnaFtm6YxXmkujqFVVVXWKmLQYEkgjx2KTan",
  "key8": "4x6dyxUyvxQ6RDNP8k9Dr5iuw1ttAFrxZqBjGHkwjLicKf7kea2JrM7xuyinxGyHXcULfmZ1zscEABJQbsDXXJPc",
  "key9": "uujc7erQ5FpbZ2jFDDiCYiCnNg1UJCBtpjymrpRe7jeRatt14p69DngPRSKLd4SMVyFu2XYAhcJARLAsrzJtKjF",
  "key10": "prnpBh4sEpqmyE4mzc1tJmSyAHPmURK8P7Kq8vQGEizTnxCaqHkwhCwrjMix5DieCV1icrYduWfJfLuBP7XNaeN",
  "key11": "5pmSHsBJWMhEzAVPQ9BMeZuHFCBy2xgm1CqcMRgkHP55beeqPd5LuoQifU3NJAdCkD9J79YfrfDGrWjxGRknqWnR",
  "key12": "61G6Ag5HNJxFPopTECQUwgNGmgWZZFiRfZ18fzshLFkbMmKBGywn45thZubRcpyLhzZEtcgbaTa18adhc4fhyo3E",
  "key13": "nQsTEnQaDggcMP5kH9TkgoJ7CHgurh1csq8SuBnSdpa8GkL2YD89hrBEsH3Ja6iTCc1nBQi4qRMGaBRSxC6UVKg",
  "key14": "665MHtJYV9S6ckCDPrWgWbQHmwEuwEUkDYYkfTovsbYShLB8rbKjeP45gZP4S29wB5WxoiPiJ2YbzRp1kdhuiSp5",
  "key15": "5rs4wV4ubpdYfUKHh37xQPtdPgsFfA7n4kmiBYPv8KssPeweAc3QPFmF4iGkiMJgqSgRNwVTPiSa3YPbYTWGJCGE",
  "key16": "2hXY5L8JmeGCAiqrQGnC2VBo7pnXLie6JRPvDc6omQifyMRYpztFNdQMKMct1gnHPZfzAFxpLpPQq1EJoWHfVyqb",
  "key17": "3BdmNEFGUo9HtaJUXKLA4smvcAe4wiBiAJmtY5qqHS21zvfAeetJgf1PhK5tCfB66Eh36f3KZRuV9Waw8Ym2pA73",
  "key18": "4w2jk4ADbKp5UcyuNX7F4T3UapGWGfLMqY3AxWnJqQHSA4MQr7CDPypfMcaLmRCKUg4eJ6S4MMuNDs8ewDE9PgXs",
  "key19": "2oKkGiUmLEvT8qVkg9oTYNLjzERWwWzyX55v1xe8qcjisPRrcEUaXTy6ivAwkJMayaszkd9e8y6B5bKvEsbjixd1",
  "key20": "54haGvRKxmEGk7u8EgbSSF41LNXAKjUgi9CUdZ7ujoDs9UBQJ4VJ7ACnaz8R4HssHWyYN97UVdQvQxKoj9391Sn9",
  "key21": "39opa51WWsGRBzPmRT5yHERmNkm6CGGdwhDqyRRYmVorbxcBXGzmBWkwzWuydwndVLcL9Z9nuzcxFHsgwvcxEHt1",
  "key22": "4PG45zvSC5wbcdfzLPVJn8ddmJLPHcnRPN6iYcRhm1seV531W4MJ7obJwzEmCEb1grffp6xbQKM9g59EyyKX9W59",
  "key23": "3J6m8tnqqbwNDAcGb1qvy26KtBHtdp7qMJe9tTSFUWF7TqdsydRPzJiS8rZqKGUjvfe9hwSjSwzevTmLDwbEKqXv",
  "key24": "5hZo46rusH2LzjZMkzzentqjJ94cKecPNV5UxLFYgvBLb7FRS9TeV4v78eMe6VkPLVWayHLJtF7TioRwaMrhk2fY",
  "key25": "543QhkgLJYu1DwW2oYNhbKo12rMpFq9bh1WjsWYQf6wtLhJ2iCDZmN3LDhWaDBo1m8vgpaQcFhSAQrdR9EfdP52s",
  "key26": "4fuZCChMyw5vRrP1JAsTYgfm4PuTM8e8qLsVUUDHMGCjTdYcEZboNbR7RjtXo3JECPSYNZsUva1pBLEajThatuv4",
  "key27": "2VNt9LFG5C1ZQcuK4BGHJPX557LX43fYEEjFXo1fECewUvLKUbvcT12mK7vyTo36dG9g4orqE3grdKK78CyN4Trh",
  "key28": "9nnF5XN9BNXpKPEL1kZjunTF9UdK5TcQG5XVGTWhkBSm359r5xvKuvNA1JksXU3e6Q692CK2oh4b1Q1XE8Zp9RC",
  "key29": "3AyqcVPEcFDebRxmgHgjgGA5Twx5GPpZujr7uPkWNnhEXnLCSnovEE1KdC89RQ3PbtFn5zvUBH3L7cwT9VtkqrKV",
  "key30": "gMm3tKLs57fQgDTHe4wdvTSa4rPMxMLEQCbGgTZRrS5ZgVMbso4ZRGpW7mzixsQLMHNULzu2J5zRz5xxSCwWYcD",
  "key31": "2DstSw1jrw6wYbqkUVhdZ7gf2uxZfmKcLYQXwV9TndLAuDzRnRuj9DTHpJZxtpdZuyky2k5oegCa4JppEqavX8eY",
  "key32": "2Q23URQjBX1Fzp6Log7uUpQYSRWukjAhWcs3jM32HzDZxvhAvHUvJ4wTd6ZjXk4VGEtbcEUKB1xEzjEAqYqLSTdW",
  "key33": "517vCwouuUD14PfetEJuxRNmqe7zem3o3KWG1NWmeHd5x3q9mQsnJZXLeEm3EcQcTaDVPqRFfGnF43RkwWHA2NsV",
  "key34": "33MnxKpW8VcLJoPGMa3YrBgmS4uZQpmmZKtPbNYNWeVzFLFGjeRZRDStABam8v2QgcHUqD2abKRLjaiJrSEsmnqH",
  "key35": "4yAK3hAD3tfLbY4xnim4kLHK6RXRTZF4G3UctrfhtnUpAtwnUEbqbhPUqUth1NdpepWoiMECu8WdYY99wTXMgDjf",
  "key36": "3kk8VCW6RC7gmCnoJBX7AM4g5FY1dxhVfeU3NNUNZ7sSQ9JsV6DfceL7PTS7RcBTYV9mQKWy6ByDuQqMSEbfMPuy",
  "key37": "5henfy6vgDznnjZdaduznB76Yp5NGMh2r6AXVCmzBhAoWsCFW3L6aM5QLVDPptEsgnqg5H6iuZK88iqVP36wuMRb",
  "key38": "3A4dHzKKepAEDhxLyMFmojYNUH4NrigYAYnqYzkbtVWHRQSbZ6NBhxggHEhn2PWVQ1RaBRAXizx4Y75283pho4Ho",
  "key39": "25guKndsysgHvZAGyAeWC2MeAMGx7iDpjaoeUhymHq4E83i18c87YHfUutwir1TdR16VcrbzmZkEDbBVKcZWPXFU",
  "key40": "2TUJKCybfjdHsSAjryf9C5kaiL7YA41ZT379xoRoxLyaprCT49pVXWfmszgdjktazE9s9dSdZXduwQg8HdsqM5Vo",
  "key41": "5KXuhdSM2PBPB3wTC7KZ1NRM95mVuN3rqKN77Y5KjBeBYQCYHDiUWmx4FzrFrHBJp8EHB1ha6AJTAxEX6EzNJ2Z6",
  "key42": "5DJaiRq8CVrfV9MpWCHcYvDUusyk5cP4vPmk7cVAkjDDLciosqj9knEL8EMxBymPZfJ8jHvkoSpErmRG3engnWTE",
  "key43": "34Fayvcven1prFjwN7EDBtZSTvhyrhuHvW5WLXqvE7TBpYrgoFUDaH144U9ggQLq9iKhfRE1GwbedtemU6TpF9mN",
  "key44": "4vmdvVos8NR1EGtGP5R1g1dpRxn1H1MvSrc2EtRcoWSJAvpn2H5iWrLWTceLYByGmTb8iuN3rt1o2xYMz7UTMcEN",
  "key45": "4iLUA12puf9VKeE27XSfANMBmULLkjeEzDXcTRUaJK62FqwZpk5wJjmJHo3JETTpGXdbG5UuFFBz8fBz8snzquzZ",
  "key46": "3nSpBQ7vKd78RYVuELGybvdQBQWKpFqUe3hqdHHh742RqjBa3CDmXXnofdXx3pmnCZ1RWAWczDbWnqfFVchRUVgn"
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
