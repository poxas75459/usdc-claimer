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
    "46cZsQU8YPAP3hKq8aNsVLgPqrw8ypcYMY1KTDNEYZuv9k5WfNb1UbdUBtfUif1W2bTGFKmhB6MvdPSLaHX7XBjy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XvMfVvmR4kixPedGshyd4aiZwgbiPbn8B8jgcR23nRvc421vtHni4FPa5FWhFGbLYQ5632a1wkbkDX24SGWR3EA",
  "key1": "38HKbAV1j2Dnpj8zumEHoHaQYpfg5d6jTMYBjLKB7wydXy6Rysek1ASjwnuEZrcfhQEvBLJ3topMi16YXPuYWMnB",
  "key2": "5yLUuprRFCwdf9kHMb2Rkn6wwJAHDxEFD4JDuqfncPgiddKWEvvUxzfNbQEiNaT5yxMYz1dWYFhWL7xvM7WrxaTU",
  "key3": "5doy7AwN6vCAWffspUdgAbKQVYNcoUQRiatMA38pEJdnY8pDdTWSieBZ6uCwiLK1j1SXFfkxHgZdAkp7KVvSyCRm",
  "key4": "ZDvN4t7Z2ATABvEsSXTcdJVrqezzsWTuEbkRqfRYdaGRndENzMZuNC73FmW2hsW5xrUEijhLFhvHAQNiZeePM6m",
  "key5": "3yoKow9Y5D4yVtAE9sMfFDQm3ct6eMqv6T9S2qXJkDozHcXRXgm5uDYFuJdJS9VGNwMDDVXsv8sNLxURHspzq7Wd",
  "key6": "5GcqtdNdQJK4YkvZzcb44mkofCPrqgt814q4hPpSFqNPdAmBup3Cnh76ZGh9L7xjbkEbedpY462CtiwDVwJMwHtp",
  "key7": "PuqMe4HLhZwc3eXuGNLppBWQLyVVsT8XJRKgoSfWgCPEE9Mfgw6AogoFBGmg3NRdJYgVeB5MMAwUdky6jmpoti3",
  "key8": "5yNiL9F2trTQieqmXVYi2r6trQGgmoEZu9eNtADSKE2a1s5Mkz98QqJ1MTxaDyyubvuKsX8rQHjhkLo6NxfDyeW3",
  "key9": "3BQiFHotLyBHzEpumQvNWJhPMMWi2epA37ygR7LmGjVq8eUFU2JqFroEdsEHtqvPK2K26fhqtefQ5YEreRUdzTau",
  "key10": "5TXZFuo2YRFrXycJMtfdFJ6A14dZT1DktwN2aKqWaSB8AYAuQG4YbB7GnoScj6xUBXS7RLwNEmauhi2thqrGGwqq",
  "key11": "5EKVemztJxN4eYpCLKS6oaz4VYkDFrt8um53bqWkiH4XLnWRPHpJmNFuLWXZZGC9csXUdGdBYZxeAVRTX1z1xkYu",
  "key12": "3hoj5H7B6SfaAs34Rp3tkmu9ZaFYfuoqLPpJuViyDu7WyX2GhiUEkuCqxNypq54SgPDU4vF4Qpkpg8JHD9GcxC1W",
  "key13": "36n21Cpvv8VMJFVV6DPsh4o7eyZizMfQJ3GDCcYikYV7B7TKZo4Hw8P85s856YLBaUdMpyG3Uh1uB1nu6rcKS53C",
  "key14": "2xoHru44ipGg5VRW9qZM2cRhJYQvF5ssDT2DYMjDbnQAoYapf77CMQwPPRZnDkCPa3FSDgPYDMN973aHyghxV6DZ",
  "key15": "2JRLYtSUKdidLFmGvbujGzbG2VStkj9NB4eTeieKSHK1RB1oohnYFnJ6KfqBU7hjL1dc2KGUeCSFXz4H934YBv2Y",
  "key16": "582DGnH9WSytTJp7gHMAWJh9eQYEeP4X61FgeoEBfZLuzxa1sLewmX87xVxdr5u3GReqpXWt1WmiKbk7oXm9NPZL",
  "key17": "5w3KX2ZijFiy48TRmiaHwmY1ZyhDJ33ZfH3yDJ7Db5qbLjJyEwFrxuNwQ2cra3TZsN5MVoqNuQUuZG5SCaTakeNR",
  "key18": "5dRSugpTc6RwMARcBKbPFUzk2Y3qmQfRaNUMyce791dJ6iXJ5vgA1ueCYEhT5bYXNEHCJheQdBrXSs5ope8SMLX6",
  "key19": "2Joax7zUsEcLZgCAaS82pT3SYywkNWCcnKi7CujFViAXSd5KGsmmGZcyJLZ77KTNnbviKmTV4gppEhvM3FMtaxqh",
  "key20": "5Dn6Ut6uuf8gYoEvrWahhoMqWxVcXVhcSTD5g9EUg33Rcug5ghgsztVECWp4KsmYEUcyMa113o2GBR6Qn7zfmgd8",
  "key21": "3XwE8qjxdAtEchbzjYFpiJL79883YPbJ3recdsgBuJUn7rsRCJBySphxHxm29cDY538hTRz8SNTyT8jmY5orXYRF",
  "key22": "3d7ePWBktz2tgKSC3LJwS7GovTw548pbFAKdcgf8xvFS8zP5YYpbNLi5nLf2H4SfLjcfyKrjrpegTP5dX152BgpT",
  "key23": "3nuQF6T9r9cpMfBwA94tvSgdaxHVvFosShAXYfm5RCirhxuLLxX8xPvQmuWNDWG6au3y5qDUbLVeAA252kMaouWq",
  "key24": "3gABNBM3zNvnaREvZXifhe2yaNZGzW2rVxgK7ovxCbkr4gR9cMXXsocq8L66nmPgeQG4EPapoTZikaRxmdxp5mHr",
  "key25": "3Hq67QTXS5mVWisHpQGKQrdtGyZGrQAVWRrZYEvECB6yDePJTrVPTDSWpQu5ii4smistbUmpTsmLM7f9kv4hB8Ss",
  "key26": "4z3426J7gxedoryMuFDRXyLQKeUeip94zjwue87ZLeJAXFiw2133f5YPS3vXdLKKnxsBg8jnqx5xAd2JSiYEAK59",
  "key27": "4CJJwV2xF8Nbc6AZRXEN8Z2buzkQcvqfLhkv8Nfv793vJqf6uYwVRYqBa15XCTdDGFGRenPiWzVCroMpSdTbFAHN",
  "key28": "2UusR8XemWzq6CPKNuboSC4zvWywHPU5CeL1GtKbJDyi1vrrSNphC1MMTqkYk3CmiRhtcGpPLaxy1Rwu4Vs4Z7oC",
  "key29": "2Baq74oPCpcq43nRGhbzN4XJgV8RBnrqxu4zUGSmuxrKfPx8Bg3cBzb4QHMamyAUjSkVsCzicsLsaS5kPNVEPktA",
  "key30": "5VGsTHY3LWVw9VB3d9fTQuNkPejveQzvLv3MZxa81Stv6TMZ9N168AMxF7z8k29Vku3nac2oFgJyg5NxTQMt9aQe",
  "key31": "3PBXWLngahLo5yLs181hurE7bJf8Jr4mbDxGy5PZVbyB89r7ekNKwsBSSNCJvE2j6umjdhKcm39XbMjJBHjwdu8S",
  "key32": "5xQz5dce1Nf1VKa78Rdxfwgq8s1Ce1EFnsa93VQc4Pbi9AYef4eVmHUtk7YcnancMLxBBnhHPnzbzdJh7LtbmBT7",
  "key33": "EVzg4pCpHPwJrzJ5q3usznJ5eNE3EuzPTibW6zpWgC2jqfmc7jCTrfk212wB1ELaRPPNVSLjHZfT7ZjJemFpzAo",
  "key34": "2WYvw5Dcmu3XVum4NFfDQTAXRhh8kKg8N2vZ5wZyRVAA5NQfWNJrsEQp33WnwBv6NTEfSXpcqh4p4Nv5RVdBXzgN",
  "key35": "4r7Gszk8GfpEjwo268uG2KHLoegCAeYDDW785az59roayam41AffVvyL4ypiwNFC5ZLqmkz8JZcJAE7iSsHZD5kS",
  "key36": "4AyJBpuXCVNu4kmMDCGWPe9xipCnLA3xEjN9tDkERc1F4CEeN6bsZ5vqzqHzPLsW5JhwKLwLEsPpCYjMcDFYuJy3",
  "key37": "5GWXHR3nV4xhxNVDQR4emqjNssySU9GnST2GT9CzCkHo3sxnraY9YawX2vUQ8xKCUqFWweKa2yQjj6w6AYEeKJUw",
  "key38": "nxeQh2fxjAQbcAcq6r4dTHeBr4k3trxvbqrdHTuJAcVpnfDgKKxdAHUVWRNPGEnSyRnsBkwN3RQK59r3aHxy2Hp",
  "key39": "JLmmQQFjqZ1XcxPUu1Np63NBS1JadyJPGWc8q1HCiVXMLAZC8ywxzzzsjKJreWgqaLDXDaeiEYebsfkxsozfmGG",
  "key40": "LULgwRR1dkE8eURg2fj2inPvadQjVmbR36zk1sFe7Hke1NcfaSKSF64d35Mk28oanwBvurFKJYrcriAGhSMDvUu",
  "key41": "3DgGt9hdUgDGei5fA2UvjdNpt9fBxwdepYrobUstWArxriL9v5Q33HbwEVjaoeorocicZrzgbxejnAfmsRjhQMb5"
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
