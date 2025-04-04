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
    "PNmqVJAMdEasHoTyLxjggVMKAn7Z4At6wacUFBcGpf55zx9C7uk5WVxSjjrBhYC9Bm8R9r8HJVguQ82NbBHE1s7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44vdkP4hE9ySkozBkbULpJ4KFUrk3pKD2NFzt9BnEFJ3ASnkbTRuSk5oXkPVn3v8W4JotjzFC4jsin1b5kfMtoYT",
  "key1": "C2ZRNV1wHcmJhyjvXA5XurCRs98Qw9ywNh5boeHBUcxJQhoQVNv1nqF1Ki6zFLD7eZqX4piJTvC7kPr6c43mPq1",
  "key2": "5YY7s9tiZE1UFac2DTQutHFiBcBiR7rJZSLsB4qEywPsQRqEhGiEAAaFCKHCWoatnZ8PduaBZoaAnqenwZCCkvm6",
  "key3": "mUzirMesfx8Y1L8jWLNY3RVSoDJ3qrr61j7bYHQLtjXRTHzWtzMBWTjaKGLo1ZpoLuFgcwgsHfijKPBENGAGwSk",
  "key4": "66k6ZW9T7rViPLv6jwzuqiq7Kr2scUW2ugh4oyuYRr5wTMjncEihwHeSyHMkT4oKk67ZiEEz1WQep69zvGdJTbjC",
  "key5": "FnxEH6GXa1FDb3AGTCrXBaVNrfyc95ncPqmZmV8WE1HwnAbKkpmpaaBXAbEPwEri4Zur9oPHSCeq1Zd7XBVA2Q4",
  "key6": "5PedRYG7HcJqbUDbFyCY5EUJBi7Ea2s2LBZug4z5DAFRBsXfXPT1uVuLzq2w75voePpZwxPRbGc4msxomZMVnTet",
  "key7": "51EaxEwx3M8a5UdFmbwpaxJrkceXvxrkgyLyH3BFgPiC8s5VRT3rpLf2aKX5d2Tkf5E7paBReQpcDMgFMKtrMDY2",
  "key8": "3aQNT6GzgjuhkSmCUCmbqwYnLD3n8GNuNFBRcJFw8H6jcVKx1e4xs5sL64kUpxmYACYjFmqdGhGftJNGWw44Rsku",
  "key9": "4TXWgjZn5h31KLz5nt4MyynVEQLhPgpiYL1sPu1GVUgdLXMgTFyRkrGATzYQoSnxL9N6EfQcze1w6FdSoutPAvw4",
  "key10": "5PoSc5Ty4P4ET28hY45AtrrJRw6bJ1N5MtkRRkB8Fg42o3eUAVqU8PQnsghaH5vfFRh23V1agVZ4FUg21dcsoNe6",
  "key11": "218jprce9akfGsxfMZh2BjsiYa5ifBZUB5bNgcJmXUUFfjvC5T45Y7chvREdGUM2sHDLPeg5LMobcP66ZeYajDuf",
  "key12": "3L5zrv2dbW8x779gUVMTuXjHG9PAUnKjfgvnzAeqR9QKi5DkhvsKeo57Xbp6K8vtRSm2AJ2GZw4Bp4dpdrWvi3Q6",
  "key13": "2YYKPNpt6mmxLHNUqr4Ue4GyBSR8HqZQrqkzFRi9zfjMWWrCNa7oXVCKpL1aLA7Dx66hkYU2QEQAZEaMmbDRgL1H",
  "key14": "p6efNsEEqaSavShHy5tDMEfiJu4vwuoNg659eovrPgLL3kRsQrjz2zhJ2ZsSnq19QGQJj5TboGy6Kg2SVzFo2c5",
  "key15": "5amNxQgrzudQDRMxJ6zfYXqMRuUAnQJrKsc8zBYrC8n8wHHqLcNwqHmbmWXKxBPP7cGuUS2VwYB3XCZJvJPzr2zN",
  "key16": "36w37bZbDFhtLekcvXeWjdJKrjDKZDejeX8SVGggriiB771UaXuJdzkk2X5bUFhw3WDo6GPn7bEAkjgSoQJpxMqv",
  "key17": "4wHGPQnPyXHu39zURb4SNkgc2MbMZy23bzt9b185N4vxNr7DsqcqrnARF8UWCGuXmWeK8YYNRHQ1wffPJXxzdyzs",
  "key18": "5LuyugkmnVFCgx4qKv8wavFeXLDEaHzTx4WPhbaP7dMHZjiozvLpBcqmwxhVfyjwp8G1PQw77xERkQxTZDnTYNT3",
  "key19": "3CGF28oLzWpwJNMMjikCazNgaXwsFGxFXRLVEmGw53QuMrZLnzEHu78PspQku7nQDntwCnQzmb9aCYMP6uK4tqng",
  "key20": "5fAzb9gj86NSP3xuprAjWXQRr59PSgb9pSB8oDK4KbZqJYU6iAaZAs4StBHXySw5fGUoLa9KGQ7Pd9VsjYTCeqRY",
  "key21": "3embu1cNstubF2BbBUPbUU2czVF921gC15fLEuBeQuF5gTtKxScMfhRkwmbGgTx4PGi7D2L9opatxXKXNHvgsScx",
  "key22": "4Z3ejbDQjWohW5C2txVG7SAEEAYVMcSzHm8rWTcwoYn5iF1WXKxsrRtJo9wBBU8J8x4z6KMCGA8ii2VbzzhXVsT3",
  "key23": "QN42fmxzM4Te79xsbxktq8WdBAVLPpbVBVA6VUAMny2tMddMDg7hu88ajYgSVUxmaN92iTMzgShpS7UYGkHid4M",
  "key24": "4Xg97NREkjc1UnbTZKKc7vQhS5DTHRTPqi9VCmziZ5qZYexTffxbtEhMDTyAq54RCssapkrgpMKvR7GVUBk2pkLR",
  "key25": "4uVP4BWBVTXhJY3j11svtYhToYkPDmieUHs4nKS2dywWYiJLUUQCHviwT3c751Cwa1j6D54y4G4EeSdQHuhyq3kQ",
  "key26": "5HoF7BtXraoqzpAKc1syU7M3m7r7dBhyEoAWMMtRhFSEh2ajmjwWpy544kT8XebTLLFrDVA76WNTW9ufxwDEHY99",
  "key27": "P9XsC3opExPg7F9KENLGBeEV9oGMhnoCV1nctgQQHha13XWYDzT47rSGpiFy8UPwhnGQciQdiKcFVaZnB44KrmH",
  "key28": "5Y8mnN8nEboXEUJnP1U5v1rzoK99csToe4jksJpfST98APpj1yhdE5Vt7brgexPj6La7JhnT3a8wvh88HfoV7HK1",
  "key29": "4dxRrSJtyrDFV9QYdF4jfubooPA8VDJcXpZMZReo7oaf6JGn2jMEc1otnNPdAQ5sAFkxBo2F3QcFTskTXWJTMimB",
  "key30": "3Ku6KXoSGZrEeqT6uZuJoEZLuVMyb9XMdHR2TrW7b2gEPDKts6pkkQ6mKfrgNcWfnhJenozuX2XWhA6C7TJrWa48",
  "key31": "5MimX4e795aQUvM4vbMstwWmiia9D2riWTSqmJbeHzdXfnSzgg3HjNdvzUtt2wiBDug1wmn9TV9ud7cTG9qmen8i",
  "key32": "2R6tRyoLqKCaedjn6bH9mM2pZdDmTZqgH1dPN4TF2v1eEWMN5NYe2ERpCF8yyFvnmHWM18jojBBW6WJMQQagmQj5",
  "key33": "4iQURvM58sgfrwJCXuRa7L5svyrweQBW4g8BE1uK5L8ysNYdeh1KRRgHLgH3BpNej6LfsxXfsziXqKB2UUgZyWUr",
  "key34": "378gN8Q8tNJHL1sARdtbAYSfKtRFgyAHWFGWy71bMj4ipRsN4DHsEpf6zH3wXWGjZsmCJRh7yY49fvVDwvtdCT29",
  "key35": "3HX7xZt9u4d4ZTbXE5Hyi6tY1fVj1MWhAVJypHofBsVJef57GYC5ZaQk8pFja9nFaxB36r2qYYYDFMfGwH2LGW8J",
  "key36": "3nmgy6L98kgvj24koH3jiDmzoMpgDwu26Dt4EqHeCZNnw4HxAbekQmQ1zm9X61w6Um225bepe3D9qzfiHPHzYget",
  "key37": "dEVxBENhDBBzg8D95k2dyTuyK99iSSeqks8LGiN6Lhv1qC6sdwvPBcJohjVAUTnqHpZkXMS66qirA3oqdFoAANZ",
  "key38": "5wv6YTLsZoTPo8AFePfp5zJTgF14fEmbawnx3eqTLPZT3JdR3asqPD4PfX7qLhB24WJTje9gTRKvTVRGQ5W9H7kP",
  "key39": "2WEBpyhf94L1KKejVpS4oXna64g1dVMYkRAkKsZq8qVhimp5CeFCvcHZcaKr3DXX8CfEGcgXBoWXfBoAo6wk2dzW",
  "key40": "ySX9wskua8Cenc5MkLx6ZhjmiZuxbaAA8KTuQW4YqEaM9CbG6BdJwDV47J8EMqLPVhm6ZLkpiHQTstezjVBdNnZ",
  "key41": "26yrSEPg5XA4awDvbutBWhZsTCEGVYG5UyZYqwvXQ5FPNrd4bwcfqxRBwANCErronFPKdjQQsd7QAXbMHkDG3fc1",
  "key42": "4c6ByHYAW8dqU2Dfo5BzMmj4WkXVf3pNGEMVzqErkxkE913C1eJXjfET4yUEoh1skiPwrTN3wB1izfToZTCcPySb",
  "key43": "2aGpe1UBohyTMwpcS76w1LZAAiwxVMkGEVELHwM14jaVj54JzWh2Ff4MUiefKXei6Xm3Vfu8CCBaNxXhzhLzzDLv",
  "key44": "4Yutkd3P63houmiioPZvzbPJCKQefrLdadJSBGr8j6dmZx5bZMcGbAgKd9mfiesZ3iGJvq37mz2jbL1Vn4R2PwWJ"
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
