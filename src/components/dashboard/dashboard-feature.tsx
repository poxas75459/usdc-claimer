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
    "3dRf7n34HG97Jj9xqncfqhoWqGzsZCCUj7YvDNrJ9BnhH62hm8KSKGAoaiBzAykXVdCuTEj9AwN7FcacjR3Pbe2x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4g9PsYK4BXfmnerjNPAq4beVQQ2zmFSf8LidrVqcgYGxZLRCLnc5AgqJmgi5oDuGTEDU9h9Ldrzt9CkP3pco8kdK",
  "key1": "5SwgKd3UKy41JPsCPEeRDWXMpcfpHg1LrM6KspCcS7sJn9k6J1NDthTChKdepaBmVmoJKDdy6Ymm87Lxkqn3xkkb",
  "key2": "52Lz6mtZM4M1RqPqM5Azm4sFBcXLs2N38McQYDW7biyqTpZxwxNQtyVHq85j674YfuCH5XvT6yUThAJDQ3Gry8uD",
  "key3": "5JGxkfB3FtrsdzcLHu98tgFJ8h7PKcrDkuoSUUTfBeW7nYnK7npKHdpWZeaKWsvfhefAt4Ptptx35aYZv7rHKMjM",
  "key4": "25sreV3AtZaHLCU2Avf2eHg5XTYrUU2c18MffnsTgJYMruu2hqr4C9C2uLCVxvDbtpb1CyrozKfFmipfuTCv1Xer",
  "key5": "2yWud13sybYX7RhTz7eHHk2hqnHhvFtmAdy9K8PNwnzADBZVR1caG8VRJMVgS2K2racNYztLx2FiiMYaA4soYepN",
  "key6": "4hQzcQKjzCYjP2oApbiw7YCvhhjqs6FZZTn4UNUVjcYM4RCsAbuxSwLGjsCqPsQRAtxMqVPhSLEoyqNSp8pGTHpZ",
  "key7": "4zoQzbesoa8jfKyCLjuVPqibQyqje2UzhGh3RUje1s2uJ4RAV7HCdE8RccTBoq5RvT2gkdmJnNt6Cob8J7xBLTJK",
  "key8": "EsxHESRRb3jjyARgJP4HxH7uAzdHkSybyUk3wipLN9wRey1tcjQwyfxafshk7jusSPpVuoTk9p6VAxqvWwq4PPx",
  "key9": "4Eax5zxyoVFz9Zeuzwzf4V84JKr6MdtEp6vKZsupqiiQgQ6GvY6kZXU9QD9QtHW5he6oHUZhGi2HtMHGKwvruoGn",
  "key10": "D98yhVnygbam176zxWEfEDs3EWB1joGzyzMeE1VogQk59FWyhwgSwKiLZvTCsSsQELB1eLYF5FS3Etva1Phrqhi",
  "key11": "LLkFyDxym2nm7agteJTCzi8QyK7qEEpZ4WcGjBgmXJP1mfaNcZjaeipesRG4tq5WWBGtMCPHFyzrbnJkPuJLFgm",
  "key12": "4VE9MKyeEohC5gRqz8XZRY8XdG4bbjLmG3JGEeoK8GCuonYAWZsjQ1AMEVXZBWBjzmWEDusqi2W34Prqk7cE6L32",
  "key13": "yk1MBaZks57quRLSwvVUp7a3B73QSXQ5xDRkkfaRytuphh9VyzSsbMfepAn1Puwfx3TGe5LYnPpLDbWtwzrUU7B",
  "key14": "5RhdJZHBxchAnn8YSoYknNc5hAheozY2j98Ngr9dDNJVx4eCNXntTsTMrHfAM6LtMzFTRdhZ4Ndap18xPshhdPQF",
  "key15": "5Xv9gmRQp5V23GcfuSFHBShNxQvMpz1xRq7hL43h8uoP7cv1BMDXm3NwAieuRrYx3cEj1kx6zGpt8bSpLeUwgoDQ",
  "key16": "AmWJmbuFXYgUjVaaftaSDFRwhV2Uqou8rWfNxsdGV3GP5gKGbJi8RTAXW4HZYWy2kLXHFtZodM4wshwp3Wx6kJd",
  "key17": "453YvD8LX5hVosrVXRHr3gDSwru2Dkcz963uRSdxopqHDwegozffLNu8SxnRZkK1JQiPReakbd1kY2919ADFMXTT",
  "key18": "2hRDTyPeAGtK2ezWpHgCp3VxheE2iaFXbH4czvc4sgYuXfMtwPxue1Eovm5f5zvGYR65uSqhmErsvmseZQtikhRM",
  "key19": "4neAfpeQS1Y7Wjke9kTfgeTH3t126iHUnAoa3BCqC3sGVrboEfBoj8KN3ziwRTptL9nekp6diivo47M6f8mRCXDK",
  "key20": "CtE82c9LMVKCmub9WARnAfCnfJMudUo7fpY4e3BnrVxzc9zLUdXsb7D6XyjD9GrUauxea3HRXCZ7BTkWeLXyQix",
  "key21": "4H8vQ2qVN8H24AFZqWtRHUhAQyd2rpxq7KsDuuDZKGugK36qtZY1v9sZGP44DjSGXySeKESPyYVYzJVAAPMsLDC1",
  "key22": "2VvB4axrzqpFYzMA1MZ51LzPLy6hvqmrmR7hBzgTY76y7YEPamaJ1PU7Jhi4DBTonyNB3o89rg73gLFKJJqQ6djC",
  "key23": "3L4z3aHetgPxFoJ16BffoEUFZHUrLfBNeo7SoZXgVRjCsc2yo7SPTYTzdUrQEtf4joPoG83qh8EUV2uxpJyod3MG",
  "key24": "PH9CrpY6JxtDZmi7nHd41dkNPtSzyyNHatB17YSdAWfdNb1eMz3dyBrTmk1e6Hd9e3SNu6xX4UhLXQmxtggueVK",
  "key25": "4ANB3rWqBsPrb3soxXjxwT1YdHUHkAadV43K6XBpy5J2bwaL7csJa653TqDqz4eDwp8GviS6jKc3tSSWHQAdFpFq",
  "key26": "isWi83xWRAdd8VBLfC27mhR28WScYTCvCWK4maoDBb5Fcrci42tR81BwH9xaZ8jDsWePYYofYXgtu1DAyW3TZ7K",
  "key27": "gDQ1y842LucpfaDzZ4viMWyPqFMgQkyRon1cqWkRMuYRFdovJUFRbCY78RZgKaWfCvz2VV6TRGRUW3fua7EPur9",
  "key28": "4WFCmEMYiWrAvU4LoxqTdKGUbbspxk4rRN7oEP8jaHXKbLZL2eqJsSeBCwAfLrS4RgHDGtDZdWuauPuJ3CUXhvCk",
  "key29": "5buxM3J5qsKudAsXbgUzgen9efZebXCcoy6NPZyNT3ESZycitJA5BYafbqA5Va3VFfL9AyiURa9xDqnWCJTyTbQE",
  "key30": "3qLFDsoZiGYwux4WxMrXxJVm25saiknrkoruAdVjMoeYAT35aaKn8q63EUKLabhSYzvSYt3EpjiFJ4neU6uGSVNd",
  "key31": "4XoCmLkGTPwxQCuanPjm8fqNm7KLsypaZ6VmNXdhoxqk1YLGAGomeMnsrDF1gPPmbCAVYMSaVqXMyLeqYc6MJyf8",
  "key32": "bBXFWzh4uEj7cxvBLEtFxVS1Dtq4JMZfh4brrHNiJmatpEUvRWf8ifX115SsDh2Spy57FKy36HyAidpe8s2YSLM",
  "key33": "3x8f59nmXGYWEuANh4C9poZLk81whd7hkDid1tGk5NygSf25hQnQ7EhBe1Efhwxe98xFyxzCf2JUeraSEB5KpTQb",
  "key34": "2D6Nv89JY1TVAyp9mbut5QGR8yzqCdHfxxtVJ3Dntnqaau9HSiN9aTjNjr1zSVAz8STnLTZaad91YoFxBqL44Egw",
  "key35": "3T2gTKftEgqGr1YVtP8vLDFRKcGSvyQZrv75TR81ZF663SuHfQySc8FySk54tR6WXvLkCjv7BxTKPeziAW1qmY8j",
  "key36": "XxPvFCCFRK1tuHLSUzvogv7bi5NKbyhUUL2vbxk51Pyec1Zqyb7BxPTd8bjEVhvoNL9UBrWYdb1saP8X782oT7n",
  "key37": "658miP3tEDXL9c64vSCUYJLmFfkizWc3yApk9gkaYLXoM4pCWNmK7ZURAC4CCTKeM75ck1uasBq26enLhb1tNxJy",
  "key38": "52Q8ARpTmeBfKNMmtvFjXytYjcUyXqYDBMaDN83283ZyKr7x7DzNc2q3PvjWNiZs5maG44ks8gij1uw2tcfgsLaA"
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
