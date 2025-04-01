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
    "4eqbYivzTYL1uKpUTETuQysqV921hpydfrqmkKirMA7VP7rcz8tiKPfGXAsqxqFV5ogJbuTcdstZDtAyEuRj3PhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KX5U6pD2gAhTkotbuhKv6VG3NMoguV4THr9kDxsUwtVvSE5s29h2u4j88ceaWgVpMucwwoqvMzMZKdwF48qgk5J",
  "key1": "2fpa5aH2YpQ3VzuMUrww6BJQ5fC3Sg4y8LsveM1Z3dnGVNm5PmMkHfbrGpyM3mTvoeBko1HVnkQbrKdSo5J9pDtB",
  "key2": "3B7DiUW9QcBUm1SVj6Hs4TWb1cEnY5Av6U2TftgL3J8P2s4UP1E3chS9Yj64sPzwRDwqR8sbXEcdiWea661Y7mbj",
  "key3": "CuRhuVnok8zoHV4MceT14sTWyzfRkEcvmmSkURC7bTfXDgVpLonvnRvuqFp3v2uR2TMaUt6NGkbRTfhgieiiDZv",
  "key4": "Z9YjQJzCwgSEFVSanhhaSowcFuzVmDaPdtzWc6QeUW57KrUeZ3kYHqahDvBz51C7ykxxtGfctsSDqTSNZ38wrJK",
  "key5": "4zrhQ4LdGVMGGNd4ZpcM5Nw2qqawc1g9NyuariKnGR2h187ZE4kiJANSFHbmQopeSwTBoQ7rzL7DkS4aVu5uo7wk",
  "key6": "5TWkqtX5dMUK9iLEHsxZ3hKxyPfSfh3ZewTA93kdopVqQZqs2bo2UU2J5gRGzNR9w1JWsoLvEXSzYGcCHN3CYPyb",
  "key7": "r98TzpYSakTY51yYqKkEJWHUi7d23ykw4eMbN58bLN5J3S5xUBG9wnP9GaeRe2TDQ4GLmMXxhS19EWs9Z2XcaNd",
  "key8": "67Vy8V62sfcLo4zNhUGWkWYN826CwfZraxmY1fNN6Ro14SYTcdE3ZBVsjaLV7Zq593QDb4hiSiTPDgu24brbNz34",
  "key9": "48Z8Yrs6ieBL6eLrdb9GqMSX5b4biqMEohTUT5YvVTE4U93Gh4Xi9mdRHEFzshFEgLfN6Ni92ydNpoVGdQa3zu43",
  "key10": "2z2Bh2sjs3PeisVMzaZS7xXaGxdcoMsucTJvKq926RPDCy5gYuGwaL6W2e3Bih7xTiKCEms2kLR8fGHnJ5Fj9HaW",
  "key11": "5MsXtf6b9y9ygztKxjLFUwkrXMWiuPfMyx3eo4tRjLPvfWUBfMGHnYnP9udyHn87hLmL4ZcyAcniA5bZkzMgpBdu",
  "key12": "2KQGSwz79jz7grauSvVKHAXhViU2H9mhpVvj5UzMAhSyRVxixpVSA6F3nLAYYMDJnRfvkaS7pANaKoP388VbwCXJ",
  "key13": "3wAC7XPRQwPEjhGkp4aG8wkaE53WNBtfwUd2NWyDbRcxUn6QJ4iqp99cKMEaXdbmfdQzZ2yGPADWd6HFwp4RcZNd",
  "key14": "GnF2TM6ePHtZgEcb59AWw5nKxLxUzTYYSs56XXXDE3zHvW5frUh7a3Cb91jNjk6h8gNdn2aiPjGTvgJqihPxx89",
  "key15": "47J1scFPb2M9Q7Rc6a93vjD7MojYtQoMWJJmyv2w7mufgebwVeyfkCxGw5Sqm4JTtmukbqMiYUuANFz4vrw9rruC",
  "key16": "4npouVCS1CTsufRLQua3utR1FiMwxhUWvwsx1ciagZ5NqGwe5pKJDka3nkn1LuXwyQJaDpnVCm2TrTR4nUQ38bsg",
  "key17": "j8pG8CwMnH6A1Wro1o1JKEbyEna6BGuHTg9AidKy1SDDoJkdYwzPA5bwCA7P5RCPHHAQaFcbkCYkva3HU173wRY",
  "key18": "21nzfxRa5iRzYW64AN7WQoPmfMK1FEHpdBSQsTKaXcgA1wS7CNiFXSPKSzngpV3A1Gwhqgip9MCajvbLy6w12QXF",
  "key19": "48KRDhAB6MzAJnQBhGcmoHDTPDspxegeTTtoc1SkYAMfFyy6KmSHtUPfGgfjgRsip7xwbB3d7mKcC4WcfjZQaT4u",
  "key20": "2xaYAaXBQV7DivyXf6kNjFMAFQGsMFqk7tJuJPfcdYnsXtaFnWXk7d97KPPBjDhqcGpQxAy14X3f7nBXpMzDRpPj",
  "key21": "3jvnCWrvyHkK5Zk4s3LPPyw2dUWXJNa9rUtr4ZMPhoE6godoPRpNYD23vwdepoDtn1i7T8FsqVsjpdZCfZ9P7gfJ",
  "key22": "2jy2LDKYc5uXEdMZ5CxVkNdUwp7Rk8o8UqzZoiTg33tg7SoiUKK3FUvdGcec2TbaCj7mAf5xxTQanEwm7dJkKCHp",
  "key23": "2nrZsvQhFLJxqazuMUkS1r9joBbhsWFfXqKcajfLDApTRBevMkzyzbXaGxBkDaA6R8SFdmGtRXiLVe9dYWLM1Xky",
  "key24": "qDLgyNAwX2D77U6diFHqmcZe3s5rpJmGM4xzkVDJgz6G6rCivwTSZWKcj9nxZifS733HHDnS1oX4mXrrac7SzRw",
  "key25": "3W2FKN1HCL5x7B2UWsECkbQD4b2ZmB2NwcNmPNZKUJSoR3EyBPZR2YkhQWDYrn65trSDbmC7CCGcRGBqbpsjVTvF",
  "key26": "3YxG5jQRSr3a6L8tb4gJBdQV4UWWhU2pP35MCi1e6GppEoxGuomeXPcEVhSS9fW3S6qorniqkWT8vd1qQsKo17i4",
  "key27": "5nP5e6HnDWXiR8oHWoeTtZHz3PAYmoCjmYvPfEX1ZVuZ6n5DxFmsgxzEVMSM2KmpUZqWpbm89z7nfFNGoA4p95C5",
  "key28": "KGSPxbGcQfPEpUxbpGxqs5yzSah83nFUtBxx9dMgwAacSiWr2Gwc93GHqEuzWCUg7xUDyeZqx5ABJsvEaS3NDvg",
  "key29": "y2Z8JCyPdwCSsU94AtYHGeVsiu7VSfuWsznBW34Q39Y8xyXMZFHjdPxx58BKwhXrniU33i1urkLKXxhfPH3Lp8S",
  "key30": "2Eg5JFWTi1KPdqu4ZnGYqLGzaYiHpec1WMr4cB7ucmAeJirahwPH3VZjxnnCa8msVeTJ5zAfNkZF6oemjvkMBkrp",
  "key31": "2VagCd7atXma8CZ3deUYhi2uNz6DLjAkpWw9eV6sNjDABCRo5xHSRJeeaetRfx9miWfva4aj3K1nbTBU6WeANcWC",
  "key32": "28fPMk9H3R6DcV9u3Fpz9kbcrcdxXwNDtpnCR1BVgweKiXGmokA1FDKmqU76CnwtjoKV4SqdcGRYqRCpgj64csVn",
  "key33": "3mCbEHLapUoDfqtqf6Y6f7GZjaSYEfBeEnA9Gosna5YLSmVmhWQwLSrtqLye6kLSGFQ9jaodL96c8ZGSFtqLC4E4",
  "key34": "3g2aBjiuRrg686Yb116SA2Txq5ecwXwRB9uCBTRH1FYLbx8u7p9pk2aQ4xGoaBzb1Y1k97Ctd2D6Js1djPqKaiRz",
  "key35": "DngVDCNxbLwziS89KqWoafSjXWEavUUqVsukM6sREynVYYWuNb6VmhtT1ZGwT9iADwTVkqZZYXLLa8Mc54D8g2S",
  "key36": "2QRMimx87haHDHesipUqg4Gn1WUevCmavR7PKdRzGbicUgR2LLBAPNjJNkkGbZxcLFVttn5m7dnhnr8iYYNksyf",
  "key37": "3SPiucxyj5ZoCB7e5Q84M4D9jVL6RyChb49fosDMfLFy2m8pgDvymHCSVLZ76ieXNdMCd23wSNnbZrom1tD75mKd",
  "key38": "5uN45WSi2u92caxeTW1FM8orTHD6XqFbbP11hHuDJ1BKWBXbziFwLTCPogustdb2NhL7aZfAz8wcKsXTrNiCWrHu",
  "key39": "ajfLArCERoHsPaJQ8tWUxb99nK29q85DWWye9CuA3FnH3wgia4ZMwrsYJkxjUJKw12onk4FLVhqh67JopE4vcjg",
  "key40": "22jjRQryZpSnd71Z3M8fPRtHowYF4arPWad3FBBrBERdhDUGkZCZxFoBQibdePBXvXUwuEm18Zr6HgfVrjxuwwB7",
  "key41": "3DYUw8NRP6BUKjKwDcBNdLnJkw2KiKssDmjUGMdzgcF29yic4xHxk7i4kUJQpYBBqcAWPwFHUiEu5SKUa2BxbpK9",
  "key42": "5QHQFwmnWjV4JoQPM5JF8MNvG7jNy819oYaWiW2EutTZdHCfhvn4TheeyG4Jo18PELYdHPbPHW1VJm38ef3TAY4r",
  "key43": "38rQgd7eZeZV266C9FJuCn4NRBfexaneYsWRSk5uKt46yGWstfTUqt7quqAHJiLXWCDzXnzy7vv3h3rYpAYDuNnt"
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
