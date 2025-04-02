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
    "5HxqPc3cCeqMLtsokuJMRyaLfKdySJGF6qVQWBvDEQpkgfhhdPQoErBQLKL9yrks5nCtodA4xZf99ED84fhZaQck"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1XpAoxpM7CLaWSPdg3oVqripxh1eNcnTyowmq1RGssXRe44hpXcjfxQdKMHpaRUx8VmmaiZanPdn6NNr2yeF8oa",
  "key1": "5v8mjxvH4hc7oVDyvpqvB3muKra7VmsPhm8sMJ91QXu7es9UNnw5C4sdHseimFv8Z5eDR6M3ezvcvwV7kwui8EzZ",
  "key2": "66g5MWEQ33Pioqco7FRkE2M4DQnYWSMkMcsZLZvBVeJL5xGKx4NyEUte6451jTCdqxJVC4TpsFeph17uDAbPj1ze",
  "key3": "5vE3QA1SkZaiep5P4xsim9jdCyZsU2ib4ZkeHJCBxFr1ziBQywuvawDT5pnjiyJxrRQ7hm6sLER7aZcwM4oBrW7e",
  "key4": "MrHL9u4RaMpwuAc4qSYD1KpoYpHWdCwCUnh1iF1LvGNukHEn1sqBWX752BrFo9ENNMti47tmPn3EpqVwq46wydS",
  "key5": "5YNX1LeZMcvpEawB6Me9i67bLymzw6tyaiFsY4G9XbvX2hrNG2X3P8L7xnAhAwp4LXqXxgjabU3DEQvc9QdGSLPW",
  "key6": "2Rmvy7sVxp9x3QjL251aJUKaanRbY1iMWHEoSqJN5kDVTszgywAzQwx72EzfgcKL13ypSeM5uAt5jrp7khPRV2ej",
  "key7": "vUgTiXaw2WY51u7RsaT5pw3XRMsa4wdyAy9AKiA9EUZskbXhophcigrGcj4g2MjmECnzcrWACcqcSihtCmeCskd",
  "key8": "5a6BnBnzv5TyUK4GWxNSdWxSodayUTJqV8RGWXBAzoiDZDv1VpRPTRHwPC1J2Yhw5m6jsxMHGAEnpebgxzNbRBGT",
  "key9": "3heQzKzCea9tEtbvsK5hFT3sGqXk52P7XUAWSRCrJBA7jEjUAdsVTuqmRPMTmEbQYmtrwKkLggXtZgVtPKZZKdNS",
  "key10": "42tVW38Tuz9CLqQfiEnBd2Q1j2r4L3PdVPRCEmUjb57EmxurgiKvcYBWo1Mz1sXTooTU3aZsrCAuqPuhyMqwoQ8",
  "key11": "56NTV64btwn7sJVoDnvwp9wG3gsyEaitfeJoUCoRuaX9U7ksUwH56Hz8TV5ZxA3pTBreZc75LSc2TBVJ8NfT7X4V",
  "key12": "3PYbzsAYPFEbVVXw7rnS8B5MhMvEp8S1Ehy12GZJNY3H9KDBxfakpifqTZ7U1Ps84ZFrumYi8B9u1iP5upfiuWbb",
  "key13": "5HmHVSvGoCradctCqJtxMaoa5VGUe5Kgsfnb3hzejqBTaTzT8UNEDodoNnWZYBNteguuapdQEHk3udgdwKhAAtNX",
  "key14": "5V8cJG3dLCrKRcESkGJ1xab1BnxWtFW9GvdAM4g1SjU4kBLzUGc6r9UrVc83TZ6jW3TDhAMkiBGqE7Ei8gnumBW6",
  "key15": "k5xukL8zAJyFiakTcCCKQT8niMcGffRqXKoHsyXANq35fwoRYpf1UJ5i4FuvkGepwHudAYoy6V8HvEGHmV9NgDk",
  "key16": "4kcT3QWvwgRpVvr8KiBsLFKhZGmrEyDFmEFuv6Na24eoEirdWvYtSWFfQtNsec9ydRiRpV126LZCUMB1WMrgEBYR",
  "key17": "3GpP7MosuP9BkGKiEorFLFHFTo46Uq3dkzQHkby7hhXutogXnb3Kztbc8RWdYiN2roDuGo3PoLUA5TDuJdLN5gxo",
  "key18": "3b4nj44XFjJjyxbdAgG6Wceex5qGFMytWbgayEgoFxTYuzCQufGmhXmvtVLXLg9wasC3xTibYpKTU8XQXW6PAzQD",
  "key19": "39n5zjXNJqMwRFMfabtQn7j11Mo1A83BMfJfsB2DEHpRCyaYFtxZSxdnQ6Td6bWK5kdWSN9otvECJntgKJF3qH2y",
  "key20": "2gwLUWmQn2hBphd4w5X8ddy4ktMp9CpL6AnBtAnKfzSRdex2uwxFXjvbTPeDeHrDqRfxd7ubqw9Cy3BgJQnF5y3U",
  "key21": "4cXC9dKYi9B4cHDUoHv39eWkWwtUyAm9U4zNfm7aayWNzRBEFv5tY48pyrkWKbbw1YPoFFA3pLN4jv3otyQBx4rV",
  "key22": "2qwhcxYZDAvwq3MHq5riX5qonhrHuAiuxMH29yBEVpSWomYdBRxCbnDii6zAZwVof8zkpbVxnJCjvdj11DvBcoqC",
  "key23": "ZbSAEZKCDvnbbU1Lon8WWTpxP9ZTbud5jQxLHWxjPmswMinZDgidgu3uZMKUBfUdTzMWiiFHTehw4p319WJy6Jj",
  "key24": "2SpLdmyk7FoayLQDWen3MiZAo8nJHebz9GxXMeGijHMEX4XxyF8UJYE3zjRjj3Mhj7DwSEHtUQDojbmMVmaJxJVE",
  "key25": "ANQMVFJHwk7szbU1PKyUf4AxHEc8tst7y7mn8ESQ1y7ZHuj4JZmQCtHSySVZnw1sDjkdAVmUC1JYbQFENvseygZ",
  "key26": "5YqdgsuWRe2bTv7BuAjJ397pBLEU9Rb7PTeKi3DmvffwefwSt8rDnMkSbKSPxM3cBqDkX8XH3LmyJ3GkWm7aJnGL",
  "key27": "ZJ7wzhbMqV7DdGvvDF85nEhULoRmD2J59W3zXKNTa3DapGxLqzymSykUj67HhcRvT5nr3CGaerrPKV7thSboYCk",
  "key28": "3xPpCWbWqqKcwuHvJVpJ3mNANnuyMkFp8KmxJj3KYXW9EnDjtRdMuZ6BEFoVSvhjKgPJKMZ3vMa9H5dMaTMQoCzp",
  "key29": "4Ls262kuZKmqFjRfviAzPAJvos7J7PC97jjHp4m8acbFf1kZjXBQVEmbRmtKKm2fKHfxxiQWAHWS69NqS6Mop1BC",
  "key30": "46dw1ubSXcmgQdDCv8HtCGigK6RwLWRq4N4mdGk1f36oZHUntD7USpwziCGBgTgjqwKw21HKoZNo5A1KpFcEJe85",
  "key31": "2GvfuD8sVYitrDUG6UpyF8H9E8BnJUPoXsxZ5AcQEh2k1yW7zAubcWFe6faMNW2GwpSmy7hWDES3HvEuCaiWH9rE",
  "key32": "2pkxXew3iRdR8kCpnDwewC6UoQ5oetZKyr96za9Wj89MesDENcU3ELdAwHayWaNu1zXkpSNNWWpaGgj7eKn5nvdc",
  "key33": "5Ec9r71onSG3aQT3HPPcdqPjz4Hz2ktPst38uiY3pYXjoa1TZaAPpPKCJC62oh8pteojeeUVwDTgJ6EDzx1VcPU7",
  "key34": "4ChSayxFJT2qLGNya47dButc95nzK2yhgQMgu3smczoH1aGLNMhsFzsBzjk4TXmeW4Wp1S6hn98fg7febC8yGNVc",
  "key35": "64XsjfJUw2RFvS33MJgEoiU66T7GyKyMEVghjmHU74xKn4J5Ld4iwdojPfbZUHHPXdVunRWWUV5QwKAWHzdE8Abi",
  "key36": "5gbUXfMiU1u5Cq9Ab9Ne5hpiFtYoFVCSaWjqX3mAXbPREByAztmQWDZqW4vxGRjH82fAm4XwTnXKwjGztaVtFu8X",
  "key37": "yKZyPxpX2aLprwC19iQ4Ndn2KWNpcasFSnhqW4eaPLXTbUpKPX2k98mUxXbyTmdixVyvwNCK9N6CAkwtNaDVQa9",
  "key38": "5H1q1E8PAKxvW9PJGSWj9dPpbxLGRbpwAQFNuhX2HKWxJeaaz5armABZnuDPgKA75NbEYRunv8nEKaS2XbstkA9u",
  "key39": "5ULCtf3czthhEuQBFfU4M7LVchETDvndqE73Rrye2Zd6NPPTrZCTDg8WwUJmMUabuNA2JZ9FcpJBNitYzjmX333M",
  "key40": "5cgV8wVwWMHyQVEhbSPXpnGDtHbcBf6DUkc2SQ8JVorNryqQHKGKCmC4Rd6H1wpa3Wp3qqsvBTzG9imt4G6gVAd2"
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
