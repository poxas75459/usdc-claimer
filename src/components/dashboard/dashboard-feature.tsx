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
    "HwZemYTXkaciRG9bGcssewY12H8rpNJqwxXJJUH8sAoPKc8mShQs5dTaXPgXGqNziY9zQthPUFMd6CV3thCEXEG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UboF2uZxfBXgE94rR7EsPsHCRyawt5yCZiMYZm4BFZKCotRRHSyA3biw5aeC2T1K7e9Lrb8cWhcvbkzKoAVfHhr",
  "key1": "5Q4WxrVLFC8njXYf31uahRxhifdftpWPuTuhAceyvjKsPmwPvWkUiqtF9PB1GgQ1ZYSe6s68Hxydd7M8TdwArEMH",
  "key2": "5qLMELpNmBEQJnSMgm6g8Rj1AFhdfg37bNw6Y44L7dyybHNu36p75bqVfGyTSyaN5SCZJKs4nLRqk4VsNH8VyK7j",
  "key3": "3xkKGrefMcDjifjmYgabTqrTZZNaJM7Zv2h5tFQ6o6ygmbECMK3pBmAcGsh2oWmb5e6D3osvs1mLmg7YAujPcJHp",
  "key4": "3nMzsyW1eXjSpCE2ij5vqBEFgtGtZ67dN1Chni5pVY9ZEuGmwDDSaQsAMSEX1uQ3u5zJbRwKuNds5ENU9dhEgstE",
  "key5": "2XVVWm65wQEsSfGuhoFTSBNtZ2XbdT54nnrZiXaQ7nT7SLSCXgAUfenAgAbYroE99ros1hsc28PKPQHpQkiM1igV",
  "key6": "5cE1AmrQftnd4E3hcWqWSNUG33GUvoCFvuEMShJC7XpZVkKXCRvAnsqcGoUxwmUW9k6hr5p92j1hBXzx5UUv2LX5",
  "key7": "5J1nzqAD2wbfFLBuXJ1C7yVPWQ1bhsr8gN5beUU2bjnAfv5yvPaZgGrKL7tCMuPw6sLt7pYuyDizaP963hggDeUB",
  "key8": "35YWH5MPnm1j95fc9XqSwwJWw1YQ8HdvXyqPNcZmWPR3FLv2onrfwBCkVMuDwCNd8njczQ8kDD2XLvtNjwfcR38V",
  "key9": "3edNG7MY3Zy7iFoz1UYWYMeKoivx8wkPDcDJxzoekYRFPJxggpYqR1ZuVZwhxTWhD73i9YVQaPw2BiN1cXY5DzBb",
  "key10": "4PLM6vbLggap7G9EUGxn1W9npZVexTAbcvsktKh4zjqbD7E8ERe6eo9NX66ufwTFLTfondyicaX1onGUgQJxTwf1",
  "key11": "33fPJgcLXeEVfjF8DE2bznp2nP1bcrTZmy2DyhRrHKCgHLYhFYFhz7Uwjo5sknT44rVfczmfiZ6KrWDm41oEfCPh",
  "key12": "52KJMdV3F1eGwT7k2ZVMFaWRyqvt6XCE9PHgyLjETDT91bqThyayGT1XtwJkWQCHdPKWJCmUwpEM6Gx5o3n3yuFU",
  "key13": "2bne6GK9H67Cd7P5e9yzfUgvV5v6bw6T4Jm6UgPUD8EdGnfyVB1wdVnPTv8xpn6aeHB794dVSnCZnZuMyR2YZvB9",
  "key14": "pc8d45KpW6r1AVcusP34zLGNYx6prxLk7FFtkwExdNUMmRgaCkzBe7JJJCFRz32Ex7CYCG6a5dNp6RXSKKmM9um",
  "key15": "3Qs5tHx7JYmhsjAbAHz8YVhqUBSNZU1gh5XrXeTkkVo9yeGceoFZPy7AGbpksURCeXrwXrRyXGEBPC9cQrkRyjnj",
  "key16": "52e8Y1M84PxJnD4y1TxaHUcDrv9or8itw2u8vwY8S3VNA3cBKfz5PdqGhobtaX3XNp693vLgDbiyT6DxsPqJcxnZ",
  "key17": "4DEFKvcAZUNebxsJQZ9dg6sXiG9kTn99KmZrkmkMzrQYFo942fq8WpJuSjWkspiHueZQSzCoSG76Jpx9XV4a3hTG",
  "key18": "4RaXjnwWJiCqB2M2Gt3svPEVJ1HAmZN5dFXvm83HtKY1NPCKKhBjjnsXoBq4UQJ91Y2rbmgWekKXMTE8LXZ4P44U",
  "key19": "3ScBGFdRA3uhHkfca9gxNqQgFBaQeE66MJXX81YGbpmADSHEwsPbUftQR3LuwYez2AutLYbfXsqzzpkHUWELcdYp",
  "key20": "58fpk8kUJ4184NsK8Y6tadkPHDpKPUAeNDwMzv8mgXnmf3NReV9gPwFFkssQ8GbwRE3j8m6ShxY3pkB3rurpdfia",
  "key21": "2HJ58ergtXfZzaQoWMfAF6GhDmfKeka5yAbUgcccn5GBzHF272wgN2beJT9AzEDUmju95e5cjBvanJwbQhamB3ZU",
  "key22": "5BQpTavNX6PELu8REdv7JuG1C9kgttrqEdGhqjqNV1j64Zo1td4kceUFKdQf7vVrtT2BSYLkrpegV3yYGi8VuytV",
  "key23": "qdPZJtw7Skf6Tm3i1xbX7UWncJps41ZyHeHYpiWYBnwm2xZkh7vEvhoZMToH2ary4Ym52kyBzBWPqqvYBcfVFXq",
  "key24": "4ZsqBqzVr2TjZgvmwu6sHdpTZcBGnxWXu9UGMVsw3g5Pv22h39ZVLNA6GdzToUdMZmKrs2oYbeFosXYPQQjeqCQR",
  "key25": "2xTwPi8AboZF4BS25pM9uGujbQPxWKJJhXEzKbmAXFGfH1kMY4C7xxDnbVB5eJjw4s5k4yr9etNZeWMPUStLJEZo",
  "key26": "5L4WDUXfHZS3YxQCDTD5ooLGqwCqMP83y2JYue42QAnrZzuNJwJYr96aSEddtzVJjgaf2yhZnN5aHLxBQQCYyhAR",
  "key27": "SP43zCXWMgkhRVYvLZh83Zn25wPHuUppSk1Pz44vRyGYjC5JkaRcJmFwTUpwCMzjZ6496uHyz4s2ixz2LReAJF9",
  "key28": "4WJMw6iwXQ53DMTjXfmK5w18iTLEhhU9DnVffCYZEU7ZEwvq4tKBKjbXMMivpSDRrv8BbtCz65RGQizz84GGF6Lx",
  "key29": "3VR6wcDnUoNbc4UsT8ePYtwMRiYoV4YmqaMJR2zzBmA8sG3deVZLy8oGZXdz9aT1MzFjrjuEpWQUzfgnHFMUeVMz",
  "key30": "3p5yXS48CTNhbsiH5LkfhyK75SqZSsuUoSdQ61MjXHWo6at3fn4UKB4Dv4ME2J6gtejoJynJuUk1Psn1kUeBx4CP",
  "key31": "2VWBzw8dGaPcvAX13aQJ3SpyKeWu1SLyE3BwytRhYRLJt198vCLdyGzsuX7FcHH4PghX29TUA1bBwP115Z3j1VWY",
  "key32": "3kA3mjwkuB7uExRWRyufrsLNrvdBS3JHLZ9kggaNER5BBvZcChQaSCacU5neMiygy3Gvnh5PoXgZFLEfxFiMDAep",
  "key33": "2PBSnYxaUVBYVsqZKhFVVaNMWdETQQhALJ3Fo63TxqcYc2YBf7KcQG3rFefoQBATDcEQgtgitHJFofZDSPXSKE3N",
  "key34": "2EcqjvcSTRnspVPYZPH819zyyYHvbySm9rTeFddGf6U1H66e56mxBC1Hw1Hmm16BFDpUaYjiwACzUGgQKzamhTpr",
  "key35": "4TTrFxivGeCYBX757aBiJxkSVEEaebUwywYEHfaekuVE3ZDfMdSWqTtQVNPnm3upj41LF1sVQfZF7dc88hpMg6nT",
  "key36": "3z1vqq7k5X8SLWfqkGqunDYmKAEHwvRQ3RPEeabXGHXDj4aGqvLWxJhinALNctbf8wmfPbEx6i8pAoJN9tmSPexB",
  "key37": "58tQnbmsYWL9k2WBmt2gXUbunjupDpPNvt5wrQbyPSXjBv5j7a4Y4EwkeSwT5fM6ngamaZBhtUpK5ba5AudY5hZW",
  "key38": "2aHTKMitp6kDy5J5kJewbUaHV8u7QhjSUF1FQKckzN7F7pxdSvFpPrAf8YQgcnvkAYeGtXtCR6LR87mzVquCmNAh",
  "key39": "soLzCg9UABqDWyisVHCbNFRNgwDUQF9NLfhfWMs3p1YmKaT2Vcn51QAhBCe7vniD4WJSkqufJTPK8nY4oMvsTug",
  "key40": "4S6YSvFheYpbpkGnZKLoToG26bU6riGHxKB4YCaQ7km8MrVy258tVy15u5rGm59C7bKgypUwEJPSHWiqYo2zWTHD",
  "key41": "3f8FLvuQBKpiy8rNP38Qgrqtaqehe3BcbtdQWyzvWbRKULWyXAwgFs7QrRKYZSVS8mikSzBnpfSCE6pvgDDSiPM1",
  "key42": "4GRkohLByXjRYC5wmY6sE56aByQJorKwoJ2zGDXELLMyztgXmkZCCT8bVMdY7k3Sq3Z5GQh4iVVgbKVcuX2YXMLq",
  "key43": "3KbPCBACAyUR9Gk7JwibsF5JAvEuGdJ5VkvPVF1SVjqQ7FYkcf6xR1FGeGXCxEPk8M72tdN938VxU9KyEYRsXoqt",
  "key44": "PhD7UDNXfD3cJAiRTMeUNTCLeUn5PQ86rVhbZkhKYkvDjJNPxXtMvadKwHPNWKNADsw4WmPLgiwpbCM5KfGbXn4",
  "key45": "3Whza3auCA1XpUT6jehE5hFmxm4BnMQwYRmbeJfXXEMHTrXj2pg8TZ1BoS8fE3ZX268azLTmwQP5EJRM67BfdmuK",
  "key46": "ZJQiBv8d7YS1p9Ryy1HFSwELDzViJtbW1v6LQAXV4qFqkoBeq4M8k7XtsYkd6huZPBgU5YG6UR1p69oFH1osR1p"
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
