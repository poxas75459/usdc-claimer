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
    "3vaUDx449oJ8kciqnkgEGZ48xWraQ7DS61SzrhGRfy1SpGt4GsCk1vxfTAVtq6ZBWRLP7us373BzMArnNEMxbh4i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kJyAT4H3LEW5rumN36ZFMucZu5ancvcmvtkgarG22jjmi9B2HxdtmcRN92VEhRQeZNhdwrdU5UrgacpXM9EHP4f",
  "key1": "2zQfAG5AcT3bJKw7gokzMQLEUY3sFeYQyh1oFZcqns3j4pEWXUgRpjSpmRRixJf7SpmY7SKGNJs1jHZ8BsvCjmbv",
  "key2": "4krnyyYCSReZ9PKr4CLL6W3kQyZ4kEhPKTpoqFF3G1WAuptyMP6V4WF1iyuQqWxMHLiudtTku5JQc6PWFgxH2HWq",
  "key3": "2n6EJAsXgwX7yLvDPcAFMP9Z9ivxVY95io91HMFhNK9KQ2a6PtJAHWe7ikEcjZiUcRyz3YXjKPzi5LCPgbmKh2Mz",
  "key4": "64k5t6SmNrt6bAM5ZSuFmp77E1TLjaBzefnsFJr6G8LetaG3xyGoJFySfEUMGZxZZSUYrbgn6i5QoewCM6eoz8u4",
  "key5": "3o2GsYUEinjo9DTStbZCAUKRTwU51g1Uux4EduY9khdfCsjqLNUxPaiUBcuhDondWxSXAi4okRaQUjnawdJNs5qa",
  "key6": "3W69hQqVRyJAwZvg6vRwZTRDpKbvxaX7U7ckT7HyxXb2mij6BQsX3rn1QsbSHt7kEBKg1zkng4X6BNCTTtDMuN9L",
  "key7": "9WvKRXpnEbckpQJLWN88oeCSkjQnKWrL3oSNpidUmf2uhEXqTZnJ12UJFeWyiPpUdHEBqwP4TEpveAA4RBkt4wU",
  "key8": "3K9YvdujrNs8wzjnobjzQRWaQY9MdxsCVDG8DMZ7i6Byf34HzwjtAJkSqpzw47r43jf2UdQH6X7YzQggK2C54YYp",
  "key9": "2spXBiwLSpLbLedgATTNMVrVEuVSZDzBzB6qb7f6a5qF7NAtcuZWA5bannJ1eLEumRGzHvFYm4aboNw2sdAnYuop",
  "key10": "5ptSuPzdvtvdhtdDHBbfamrPHkxGu4xqW4WUmZ7tgbSpxcgmgw6itEkZ8rsackiLdRdosmEn79Xkua47CSNByMnQ",
  "key11": "5xrtMYnTWFmTkdaDRmbZQBWSeMBBsGXP4tGJRQE9QZYf1thqEvKqV8xpvEAL5aNM72wFmuPcTHgcYeBS49wKbFox",
  "key12": "3Rg22m6rH2gs5rMksnoAFZfWkFFPBD9oikPVW8rBNaSLjpFcrnKhat4QwN4pEMPVGY3ZgXWqxkyfXSLtmo1myJip",
  "key13": "66pZ5tCyHYtaCnJPLA78DvosYaNKJqpGV9i9ofmbJwrXNssbgAKsPiWdoqCFn3FHN36mZYBsaQLF1s6KJ64PzKH6",
  "key14": "5xG9kbSzMugQLZnS1ddNG8DmtyzQiUuD2uUZCszYahcvD76yyHhHC7nWSQNbu8GuqLR5h5GPMUmQ1S2yCcE4uPt4",
  "key15": "4ommHNwUCLqpqrZjNX7EWRQ2E3478KhFA5Pd3MRR3NFgZnWC3GfKpLWWQt7NQWgNiQyHgVyebReuWyWvv2e8uaCX",
  "key16": "5KC3keqtc8zGT3DFdPPkxcg16DHVWBDDcFGNZEoZBc1L5QNuNvSi6ho7xoMUcTHpFsEds5Ydd1oaxFJyoBczBdAd",
  "key17": "32XTayrmay1DKimqFxQtw1EucdkmS1MoPsofX4nPthXan41ScNefso1Cosywtgm931NneKR9LZqESr2HswHu681Z",
  "key18": "5pmLmyGFoM6FSCf9wsSknCzb3GgTiQ8QMzmxq5FTjCqfGkw5XUpVn8FrWoh76FuegGCq8F9xnMgccAyvKe6tYZ7",
  "key19": "yibnsogxqboedqgFq1NwCUnipKnghgdaueMkirG4GamP4YQNQQ9GtRnBBxTT3RU2dPnG5R1ZNuJdNHppvzfEoYV",
  "key20": "3sjghVNQMXqi97EdctcN1fabaUyHwwzFErGvZYv42ypdCCAnh4ftoC1Vg8FDcYrtnMV4J6Yp8iWCCYDL5txYSfcD",
  "key21": "3PhnSKXf5YGEqMnTCcC86zkQiBmhABN24k98ez3vF8YAVWxQ5YVSn4vu5bYBbpaXZsv9UNJbpVSKkwEEPimbQaV2",
  "key22": "2kM6AsS2BL4K1DDwfWn81TmCdjkstNFT7NLgxTi1qGoupBrNxNXbutDn7RTW8txAWro5d48M8b6SSPSLZrgTYVCD",
  "key23": "5VARkF5voLDShr749utudpRQmbtxniydzukAASb7wFgLWbXXC8B2PUvTUbcUm3XqMY1XgpJ6YGmGBsypiREuoVzo",
  "key24": "5qAers6vp22QRPZACLEEdLnuh6uqZ4DcW2UBgrZDdKUshS8sRH4xpCDBUG5aHbqRfQaETHsaat9d2rKsibzL6pTG",
  "key25": "59yKX1ZVEghnWnYjkcDh88cHT5APYfNDgmt2gE6Xz397FnQskT4pYogEmxrYkK5JeYZ7ZT9sGyaU1mUwqsg5Kpzp",
  "key26": "5n62Fdc4swYd1dvvyCGN3bEoxkZ78SXV3WuaqXAgEEVcuTAk6XSfqdMt7k18rzzNWN6mGt3bUS8Gw6fPEWsfA1Mz",
  "key27": "5wp4W1wdiQ6w6RVcuJCgBBguVhkJWZSwLhUjdY3k86FuFcH5qGygjT2HB1DhE65KuJwgv3ZFLtCZbZsfnx3ECEBQ",
  "key28": "vRh12EpgWKeTTL8mmLf442y1NJ654dGkXtJ4KZGug2iV5rJXTpzQDWurZRVLmXQxshCHvGykRmfZELd67RNKz5e",
  "key29": "5fahkcAjZwiesyST8DoNuvtBBYsj7ooao6fm7AmmxBCB5k5VeJodr1tbZ25VdZk2S5FQwrPKmRv6tgutEtHF3pDS",
  "key30": "59crKVnAsPBMxng5ppjJytVAfSwhUsfZWMdoUTTcnyFiHdJJY2ecpj9ooLdM4pneYhPXbAuxKt2RT36eNdMJeHmt",
  "key31": "3rTkRAge4jq9H3gwSZU5j8EQLCodhV68WckhD4eqSosrcuQUb6TWrffcMLFZ1KaGRSxroBbZWCM3gXJMWAKj4Q5r",
  "key32": "3jqMXEridgV2jAMbMAxMVUAPYp212RBjD8hEYs8f4UnYGL7ame7BYd51xPjoSjbn3zrRuzCJF15XnaKLStw2NDfJ",
  "key33": "4LCUWWLQZDU6BpoYZpATJnbpYve1PDT5eMN3DZg6xJSwbAMwhAhENE8Q81rswjQfW7iDZMRrPUXpJbWQ6ESYxFEH",
  "key34": "4WJwQhUMVgvpQAvRPoZQsjouLYYLXQtbk5wJTdhbmGvRWSg4EfyczPDEfHZ8KvmkHyaDL11QX8rQzUoKhUUiQsJ6",
  "key35": "3VUcori7BoKPFV9zCx3M44n2Bc4wUdfHKaZ7GwhiZcKrA9nnnPDqTdsyRhqU9eYzAhcdc6RdtdJH14Yv9fLhKfTY",
  "key36": "3gdpQuuHMqxTvtD78hDE7KavNmBL1R9qA8i5dQjBiZkhHFzJwK8GhdM5zbtobwBcF9Nqwg9BtPZkPu35wcJVuLnE",
  "key37": "4TG3i1WzF2uAYcoxzBpYb1rK8CgpfPWe4Ps29oPmeZqrjCBkFkkJRsE4AMrYqVJFie8cny8vtKXdkBT8HrU1B1ko",
  "key38": "46awK29fEjwu77VRCDHGrJjv5FcJnw3EBYtG5UzDRPE8m4Hr7xubhkCn6oBYVKnJEfa6cK6RMuftRuzKLwYzGuRV",
  "key39": "ZJnRWEX4NwxPyfFWQTBbMV61N9cs9Ac3ap9sHmtraAwvxti1EjsncvVKzssTsKH6QaNgbP5SAvhq7Zp8KRGMDrV",
  "key40": "3zQkv9VM9mSgbJ5TuNYP3rJd6vXRVZHXmKapoBk6P5jkqQeThWUjfmFJdGUuku4wAX9ZVpb2jc6GppLBzE8iJ4ZA",
  "key41": "6HseQcQ7vS2ZimB9iKBiGD5Sz3ZeioH9whZ6dt4z8gi7tagpshNaFyF1XgLwhLWQWK6Ay3q1Dw73EuzC6KvxHW2",
  "key42": "26zw4zzwGrHnaCf1wkguwz25rQqTLctJcMB8cXfC5XxiNpDcVhdgr4mJM5gHxwH66XPgPw1w5yycaAfFUvd8Kpjc"
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
