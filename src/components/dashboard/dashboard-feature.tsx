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
    "5K41rn6PKTZnaYaW1yj6CPAj5isn8JUXrDgzhAz92hypq4xm7byit2ovVoMaG5BuTSquRi2145AqsyeiiFwFpczM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BkfmAmdc7LsFZcMx1VZWSw4BmQoSe8a8EnjkASqSkK2h5LdWHneiq9dPgqVCQeVhVESEsjCCrAcTx2s1vZG317s",
  "key1": "3gNW8gTBXHEkb5azn7YP4TbRNKi9jcNk6PhJD4QR39r6yGZ6Ebom13MjHJWjMvEcdfWEdiRMhb7US9WdDBDWZQ4J",
  "key2": "5y1RGgq5gvcNLPCYW1Rf95KeuWaPaa5ecN6937YHE1YUM728tAsE9h5MEMVSKDgKkXJzFuxAZ9X1An72s3i9iV5i",
  "key3": "2QLM39GqgeFVonTrGJpenptNo1Bpyamh4jhtyJiHCCDK4dMSKxQjNGNtQvnBUwB6PxPyUVCejnF6NhNgAYcTdBaZ",
  "key4": "ZTDzyzurMLMehAHou41DBVgYA6B3DWBespxeRsTTq7NunHQQtFmK15MfMZA3HwPSsybvz15weTyCcMhN7SVjSab",
  "key5": "2zQshnwDXXbeEuTP8NTVaEQ95ttAWYB6t3NhaTBPjxGG7w4izCJYrDKVQHLycgjcUrMeMpT289zyJyLe7Z74Bdi7",
  "key6": "4qxVBT9NhNrA2FQcFiVQgSBT8TT9F48nSjLfxTZXWVMBgVpNJYSCd4QCS8k4UNvuS6sjdzQPUcPTorNkwNJKHWVB",
  "key7": "3FJEcXUHusTbCSvKZ3FsbuteQ2fuXLpVNBLNBqReZvCxKp7jJWGu9wPfNsasMC322Cg2zEgjJ3KhAnUz2wonUSUL",
  "key8": "5zXASkZ3GLw9eb9wkLYkorpmTRsxt5dvxqFRGJw8t9KN25KVwz58XuYRApQYwNHbFGDbhopN9FCi8JRSqgoRrVDn",
  "key9": "3S6gsDzR4nfsjgLhDEDAaXXLsj3LDQjE1XoqMRNjVkuhDDdJru9cTpjbX819tDjZStV9JNSSpQfyc361pYJoZZiE",
  "key10": "58isV8coG2mgQWf7LHYSGuarVzpnMmZNwi8ifYopgSUMUD8ZGdaidzpBW3e6KZbB6FMWag2dgS5AmWgFUsTcSNpP",
  "key11": "4SBieC1N1iYeZuHGibKGKDtUbZzj7hTw1v5CXNCESq34U8W5gtRzLLnYsJV8NrjzRfXsKQygy7XHQUFkNYcBxxiE",
  "key12": "3Wt7JUhLu4zWG6gw5DLhdkNGLHrtDJVaSjgaJGJ1P3ktuEpQPDSDeM4H25TkL4Y2EnN1SjMBSW4fvyM4MJ7cpWDy",
  "key13": "3jUVMaoTGVsjCiPgFu1BS4EgChzXqzGyw1i7vc8SYoVccz8zuMYQGLTz2pSkvFb9Pmc7smS1Y6Px9qvsdKPU33cV",
  "key14": "2iHusoS3Lqm1W4Fsh9kQTKNaJH1d3UZBWRgUjmYxjzixxSAN4aTUxWiYJ8LGZhS7rMKozS3eFEGQTUXJVNtxxQRz",
  "key15": "EfH7X6aUYPtGZUjhrsYNeRKD35Pvpt3XyS3ofLqLxncSqeYPzVxWQBiYv5rZ9BMboLDkX4CP3vnQ6hXnERnovMu",
  "key16": "5gouzURm7uHsEZWfCdvHHYxx67K8fyib88TpDu5FpDoJUwMVqjaTgs77cKWW4VFQgjTxSvK3mKoBL9vYjT2NkkHu",
  "key17": "4azGMgtGuwMGBBWYEG41KALUuFz8gxDVJKMr6qGqE2pUHYPuPepsCKZBcsefekRQN3C4QRrTJKCdEV3YJ5kUaBbB",
  "key18": "4ugwsmBDj6CSzhy3HuTNs3k4FrgZPDw4WzQsjAK68yRAR73N53rFVn7SJ5qRssBYHTopnZo7x1fvKr2Aj8xsNBNd",
  "key19": "XiEGnB9oPKWVBf3av3kXZJUtN2vMAH3i1UjnoT35XgoocS9X97j6s6VbJciZbF7PNvrigEUTAwXzc1pXfGAuVb7",
  "key20": "RgL7GYFwAjb8ztWyvckvzFoZe8oMUb6FjsU2k1Gje4LyMkEwFEnAMbHKzeV4zmh7Envf3g3uUZCHJ5r8p8k2Z4W",
  "key21": "5sXNpGopPcdqRM82CchMZfkVEdhXJUzBYzHpVTFFrtVR4L9ceJv2L7WZCLRTm6EHbzTbTT8DSrLAWNYY5qyYmBqV",
  "key22": "5mPmbpuAcBkaUW2bnQwEdDxiKCNWkhXjXFktYhffHgQ4DibEBgCs9V2tupPe78LwQrnbanj57uEdLPrUptvUrFCt",
  "key23": "2VjMddsD2tqQsnAsR5SBTWSoAPWRrLYtyejRReneDRaW2ZKN8jBjZvZ4rySYsCK91m8JQYQw1PMwa1F8vFdV4SmY",
  "key24": "2wxVa7foLmxuKL78FtTgN59kRqKDFSBiR61URNc567fF3yKAKSDtR7goAP5hwzVETHztHWrFxnLP7sAR3coAYewY",
  "key25": "5RKFVVCz8RFXR5PC4KKzy89NmtiYoKMYXXoNxfpE5qkbabS8eoCLjGbrgE6oscSNeuxhRg2Jyd6E2yrUWkPSvVG6",
  "key26": "3s3AVhpLcP1i2BjujsuLFAoKZbGvySE8orXmTp1jvLGjXQNjkJLxYQpQRqeWxrCHdSxYja3b6Mm8miqF1H6ugToj",
  "key27": "5uzQw5U8zA5gnYUbSECxNJKqVdGRHJveHARL8taqkDWinCBk8NzVEcxbohe6bonYAixnwCS8XMQRU8o1zwkx513R",
  "key28": "3h94wAsZgTdrnYrcAhTLJ42HPoKrUpUVvfSuuexv2hGL8P1kbEhsAToD6Pd43ZgPVQBQyCfCfheeBFJcBTGnkayE",
  "key29": "YrTZcDWEQLXs8nL1iqx4h6XNhG7ANYUP1hVPh4pGnodJD4aHAeEtg28nH5TzecujbnfEXHFQSS7PMMWn41ooHYj",
  "key30": "3DytZ4qpn3AWi3eoiNpnRX9WZprYSMj6g7r7YTQownzArfQVXusATCjKmMtY62aMnm97GAXn7QdFC5X7QB6xodpP",
  "key31": "2b3oecsCQj2gwMiLaU2oUpdzS97DsoG5JqgMrx61iAu8MJp9ZGYYKRwxE5ecRydPh3Ku5GB5E8SEkde2KLCncTXd",
  "key32": "5dhaMc2WPcz7y8M83yMJU2C3uu2bQKxtuMKNKvrauYgxPTVAEiC3f6QYWBqooLeZ23xnz81GBACq2HWEmQH43McC",
  "key33": "8E3CG5HLFmTqaw5Ue7pX3uE2pAVZ13yeQQudbzduT7RusT1qF3wwJdqbUBrHaQLrthGgPyMEv5d564XiC4HC5VD",
  "key34": "5zNjBgTcxuJvi9LjXoE4LTG5tNyJTFHepTKHmYYDCBPnQQxZqSofLtAxotLvjUcwNna8drAHpAohSjwAgh7auLL8",
  "key35": "3My1eFPHoBBgqbzguabGkZ2Lk6Zq6ZRtkLx77Po4nAKXywKeSRtP8eVCdWZij2tYJKXQMMprYYG7YhPXDGaoNsiN",
  "key36": "PD1dp7QMvpBRzTX9da6DHbSUppGHkyPABR5CqnfHm77RyCrZ45MHPrV8JDFU1uZQSvFz2ReSajUwpELUeMZpDSs",
  "key37": "4Dky4cCc1ubsNANgKyv6hkEiJ8vCgkTr8uXiY2oKZ11EbwkHKnAV6UqUAsbyjtCYPPVhfsHVUAAu4NY7fuJUaNik",
  "key38": "VnxSxNSup6WUPxQW2hhFydi8UsAud1VtaJWjLr6Do4EqBQwevqEncCrp8ioSQuCLAPBMs9QFTgxrhoW8XQfQ1p7"
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
