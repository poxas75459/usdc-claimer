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
    "3NPUwA27VPEVTr5eHSW6WxYhAneTQjdj8wpiNeWm5KcjViLtwo89Q3L3D8bbMVxKkXmu96pZo5qmfgHMznbFzdu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ca67bkMUKH9AVqrG6fR4xTGdDxhGgyLr6zQWM2C664ysvCRKejmrzcVxvjA7pBoSw6diEr1xNgnFV912a94Ppoa",
  "key1": "5PLmRDYXuevFzez3cLiwnPiVeZ1CU52BZNw6vWj8N9mWErt2EEZgB6CvsF35CEZwWxcwTSJgFbxGjnUfnFTRytkR",
  "key2": "4nSD4mKJQDg1km2dy2Pah8JgoRDervwT63c29Y5JJYVjQjHugL9qaFQY1VZ31H4SujCPHE4nbiK9WhH5f44zg2Ex",
  "key3": "21AykkdBWY851fzCvHZWuT4BSad4GqfJGbCE3HK16gQHhyZinrcTtq9uXTTiWUJL9JFLu4oCmUBS67R19KMBmrhh",
  "key4": "5RfWPeZ23Z98Fkc8d2TGGuS11rEvAuRFzj1p9PBweGiQBeoVc4kEkADEWMUTmGRi2pbwQZfpXDsrwRddc529QqkZ",
  "key5": "CURUXwSK91Yjx6unfdeh3exLjLNv4L8G4RXkz1aPWTAq3HuwQuxm5xgXbXWdDrD3LoqdqgoWFU1CmMJqvJypjhx",
  "key6": "Zmmjuxx7rVrazbx5yoPHMS43ZuXL8i3b6rTxJwPLDJ9C3cRwYy7QALLjJPXuKMchYuoiNQWSriqN3xs9RG9Z12M",
  "key7": "rJP6y8WQgJrtRTsNrrDqSQhw2C1Rsv6XazjuUWKA3Nnx2o61BhNPv3gTscd6z8QVfvHx96N96Vwp8YoJVxiUNys",
  "key8": "5DeG4qZXQKUytfdGzj4eLbWo8XkTUCeC24y9sFxgVjeTRpVQsYBsVrfovess1KegAiQc6nsNWK5GoDWiU7Q5hbKR",
  "key9": "2Yir6Z31jrRqopx3NmssHkm5DpB2m9ztEkv1P4Q3AFseLnGqChvGQuAKFSL59Y6ZyrTuotpdLVdYS3djqPM8Locv",
  "key10": "5KyuC1yLyNW44UebSNhDNakxJHDkwpiJsZD9yaHa2Y9Cidxs44bK4ohiet9jS4qB41nptAfUVPM3vGHM9RDf2wu",
  "key11": "KoBxRn5Bkm6QDT81dUXvPbR299KyuyFX4cqQm9FPSeuVUbq2yAGbFLVMpNfvD6xnU5UxeKcQmNGm2JYUhSNcKzw",
  "key12": "3BEk9umcXn7eZcPpS55h41oKw3mHdV7R2raR3sse6We7ho9c3CR36L2VRwP5Gw5hrJBHduhEjgVtqqcvGBtag6aN",
  "key13": "4QHzQYScRfPdAnFU5MnDJFw2Y1GqRUjAgtQEpwdVcmBy9ayC9Mur2Qn9xJXeHVBsnAeQ6uXtrZsxgzmT76NRnfTD",
  "key14": "3tJwfVfza1eqKn6A4uVxSDKyrhRcqf3eS2xzWptjtbu8DK4Rxbkggudh8tSmvkjyb2fnm3oCb3WqukQumTXMTCAa",
  "key15": "3W99Wo6moR8ge65zir6DTxHeTazqfj1KX6LwXwa9MksMN7KLfoHBbbGr4zinWfChyG2L3M7kn2j87ef6yYwAzvek",
  "key16": "sHqmJ8fNYSQCorEEJCj12UKnce186igabn6ob1JfanAKGtUttdcj4HWwvUbEU4ERCnoutGiUWd7tKXBzeNuYUT6",
  "key17": "671MDkZZNwyyamGPwCYacPgQUhFv3Nf3E3E7ATmzSk2rJsE5vR4kiAMkywz94Y3JJDrtC953krf3Y9ykJyJ36iut",
  "key18": "GyFC9uzjnsBoQBTfQzbGP727eMt4mKXN9sf2eH6JajusWzUk6sP2LSSjpx6gNmajUnwdez9sAZ1iG2wctFpXXMM",
  "key19": "2U6hZeS3McRnreK2J2FLq5cvK3NwfStrSFvDzduZixkDKQhkp8gWfNULEcPPfN3PmYiqnVjzmFxMd69PXT8HZTgx",
  "key20": "2pJfeEY1gqeygUrPToVf4YWRj17K5vZ4UcyWJaTANXgC7gftwowBgECvCXJtjeU5hu3ymK8bdEN4Qi6EtWwhW4ou",
  "key21": "BPEdUANyptM3j4bJUbCnxmdBxHGwD8HsLoffv2JLN1kNbKG4rHJV3RyUoGS7tLo494hsPPpB15jPwxjnsSJTNm4",
  "key22": "5ktRw13udnz1grQikL7MVcFg2XnEMjJ2cr22f6vdm885bK6uwsCMgSPcYQwiwLn1jJTecHjm2V3WbdqqztuwpHKy",
  "key23": "4hrsiPKN6orPMyMecbTPVxVUHevqtp5xMRVAy81ZDiKbG7PxXKx8Ad32jpCTuAUJBYkH35uqSNSLG2EDBnhhDHcn",
  "key24": "5FYU9RMyDjMbEt6W8zYedqNhxPRsGGQ79Ve1cAHyUtSHrNviHao8aZGAWbtyTYVaB8NoBM29acHtvGUx6oPka33Y",
  "key25": "5AhiRqoRrABe2NadSUcfRKywwPQRJXCW6bFWFET8VFsyFG8GSsXutbBoUeRAY25j65nAGm4MyZKWrpTB3AmYJYjm",
  "key26": "4g6UzkrnnU513Jy2Rm9oGjnajbeuhdGbx6XwXTXqarju3Y4AzdiprUKonUaTVXE53L7StMTm1MxYKh8KHeEbhapb",
  "key27": "5AGkDo1a9HqedzD6MtCzruXqUyFMnndvr4E9C8eJH22PiRvfzUbnV3XeLH8PubxTqiRDcaeTR9BG7HymbYJjA9B6",
  "key28": "2oxm5Y5oZoYduAwWv4vNXuKCfbhZoCfdHu4ktxVwwBZdRfGcy5A3qzNzUvDhKgPaYj5PpanxziEL1MBRkARdXbM8",
  "key29": "5ULwe1MZUBy7obNAibo6r9yP5zGDuAkyuC5SuanvVDXekbApVkUZ48RQUSZ8MkAx4ZKwVAWoVZT2nARePg6ozBS3",
  "key30": "121eenVz3AjVpyujFwDaXeFNYuPhTV4zKKEAWqb2V1fqgtCKNou6MNgKTaXtgqCmTWSMWnScgddiiLVdF9u3p94B",
  "key31": "4dDoKbRwA1zTCyTAA3WPQu6LwcKk8qVLAaFk2JcY7uovVtmNRjstX5kTpKQPMwCHow1XB8B3JuzreUQqsn3EmZSW",
  "key32": "4wiQvVBNEY4suWM5Uv9fYKRyrm3WZoWzXMrDwZKfm2vsHmkToznbYh8o5TwgfeT1DGT2HsfGh67N27uBqd9j98kh",
  "key33": "2MpyTtpRhm6an2Xn8NbEtzr695vCTuukjH2pVfnVCLXnSabLWWAaaAnpCMmjEiTKBJmttEAEBYbR8F2BP7MFpnvo",
  "key34": "2CNte9nG7bAdrszDX5zpzpLsrkSgMWSLCFZCtJe26Un3NRnwcMQXJwsk5HTqYpsQcBKxJyxFnRyifEnz9fvzWgxm",
  "key35": "DD8WxNKUh2EbVSpQ1WijhvTafpzfNRbj16T7ZFzTYkGstCtoy667BKU6U9GfVGLn7wCNzQVyV3TzVtHF2BLEuqR",
  "key36": "42ynjoyttUzqQfZ3NnsrkhSjwfvfeoGWVrXDd2MWDwzPvasqMY6bSUUbSRfGQmqStJxd3pUWPrNFzDHNGhRBrgyD",
  "key37": "5y9Xahr1Sh3BqaabB23RzkLky2HFGLoYJHQ9BSaqWwiEAupKXMFKVisxi6puCvze9L1LBTSSLnbMNWnZN9TDwGv6",
  "key38": "4UZh5P7zyPCxxVgzgvWWz7q5jMpPa1HjSV3KpuqBx1H9jBVtNc3aiEjyQ5QNLJxr2wv1CN5Pvoc2fKfqJKTSN7hE",
  "key39": "56zWHEPeMPeUj9wBqhuMdxhPSs27iAbRo9xEE3YHGsXGXSh77VgM6Sf9V7E4NwomGg6paWYw6UJojLj6MuYQwzu2",
  "key40": "224pGMAqju3uuuFQTjXvTaUUb27s51Ja3rweruDjKWrsUMLEFoUPGstjGz6JRETA6RUXo5mpQibLFA8s9XKo6unt",
  "key41": "5G87x887Tfv3emTyt6ZZVjLyfPUPNP2nmWQBtTNR5rUFdMUTMBMYkbpaznRyX5e3WCEFTsqQLPjyTvKw71Ct87QA",
  "key42": "3xFGtGuALkeLkTYQKwnUePfvYgJkVxBrJPavzvohJebgJuM9CpYu1GK74f7KooapnVkJpvrGkFNaVGFGtK4GTDa7",
  "key43": "4hkqXVxe7dyvmRmZ4PcfLT1pMoMBQvENFzGUTaMArXUfyEQQNwcp6NcaNXhJyGDwQYMgDMRnKpM5w6wRG5ZfLxWL",
  "key44": "Rxwrb93SM7hHueEz1WaXJBQ7eJMBVSoFTSmhV1t5o8XSkvoL2b29s5LcGWNHXYRoxaQKw1TuYLJjmp5DjqfyD5K",
  "key45": "pEuwF6tnE7yJBAoYmYBdv2RnQs98FVnnUbWTUnLFkXLoMz4t2i5mjSV25ZbubT1HNfXjfVE1ja7RWE2wA2uDUzi",
  "key46": "Y3KGxE8e91cP498AV1HAv3CqhqfjCfjDDSK8GVo4DcNdDEU2iMxh7jETbL88YXMfTDjTd4YYy55wG9uj9Lra8wM",
  "key47": "3FvyWrmDCQksxBNawqyhneHdpygt5wrnWtSJMuA5VepSnAP66mqVWeMZRX3SqFZvNbMf4eT2ryWLhyPPkmwBM33J",
  "key48": "4Q9UuA9bGWLhyMieVrgehFKERHHXgpEC8JHYMDf5tnMkBKhtN8pKWXTQvtQHbymF5Ae8AxKL7SrbYaWuFjFJ9rzn",
  "key49": "5mXrVqWPs69Jp8Rz5RBUwjYnj7orTTHRaxRgwa9h3bDjwwN5YxyduZ5Qk3dRAZAY7zzF9LSsVsMTxXRo4L6jmxLx"
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
