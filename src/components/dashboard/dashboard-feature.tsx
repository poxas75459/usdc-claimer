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
    "4RXGZQBMZErS4bxn7VoYD7mjaGKj32WMxenpBGH7ijmEogG85PkJxeN6gWWeezRue8G6MNpeGwuM2EUWAbFvisMM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GQxQwvDry6BkpgCYbyzBCqfNgR3qXGrruW6YM2rw2Q8RhnLtGB7EaYjDni3JEebeB4EnS3hSrZgzynQQg7eiZPD",
  "key1": "4jEF8JZxiLifKfsWNymGZDgCPrgnttHYQnV7TVKJ5Hp6TRC6koeuVt6hcEewrHJpn7DJrkJ2mPcnwB2BTD9TF8Mu",
  "key2": "4q4mZvZxJ3qqJe5ZR7PRRCnfFMpctGQkJYREDRnRbFzL7qvwQGKVQuZiMk9EiCuZdeyp98iw6ABBa6dTJiJhSr5u",
  "key3": "Gx2wmdGC78Yn9iFE9e62TFNaTvYzAmSmcagxusLvJTfJ5ATMciMHkoG21CgScGfk39Vksq5pCB9jXbj9qj89coY",
  "key4": "3FRfsXMUVE14WuFhVveRok9u9gv6yoxaBBqTm7jmj26aqe7SFuyRAJLsFWgQ4fJHtKBB7sC8E4Dm4zoS4ESDdN1V",
  "key5": "4NHW9K9TzG7NKJg6zsTdhquQVHsYvoeWsHu1SVTUMuh3HNr3GKRrBbt4iXJYGgfXrR4a4KaMq579hHF8hCyAqY3p",
  "key6": "34UjRLw7e27Six232ycP5G8dppzsxqNaSawMfEq2qQFntWPMTSHVcD6cTTzrCaaNRafoG4c3XEWqK4d2RbvyYcCB",
  "key7": "4QahDcA1bug873iyNwcuLoPpJ8YP8iH3ZQTUrz3Ayyo7LMNLM73enUp2nH55tGzMAoE5JCFseBnffasfPK3qXwCz",
  "key8": "55xYFC2sDLLkksnexxEZcYRux3KC2qtKna3V8FQC9GgqsL1Sv1rbGfKevtT28xWY5ZtnBPDbHrniMLMW5EqRhTaA",
  "key9": "4N8tvjMwEEr9PUKTt8c89si6xV5M55PRiJGdHekd3SUtG8dRLuXEdW7GibinXE5yYoZo5Pivq5z8Sqtvuk22i5hB",
  "key10": "5eYQc5nzBAp5KAXqxM61Bi4uXBgL2FQgZcvvQmkyszQ4ymutDKGRBmsqk3xkBvsoM7d7uazWGo8cWcwVkZA4GWKo",
  "key11": "4uKw1Ktk5UE52BVUnAJ8BFo5rFvqF9iMToCybb6k5hmUoysfWDUgXiUog6P6idwk7STdg31NMPtRf166pgJHuUTf",
  "key12": "JHtV4RXarwAsY3c6d232EKPJ7eu6jzrkTYr6pXbMhpS8FURDyVk3CgvMxGmRemPApmMmtUFE62zD1PMRM585aH1",
  "key13": "3mzXVjKRKGQuX7Cm5AEuTbrpAzFqiefZdD5WnQWjfWVDnDzDYEb4EpsYSRQ33chJ4K28oJrTu3UeFsdfUpyTfeUm",
  "key14": "5bZx1riZpc1eKisZkdvdVDJCSMUvvDTwBARFkv5pKy5pauUT49416VFbYQNBX7hiYrz4HeEuWJaB2Tz7qqi2dTsQ",
  "key15": "AMyyoSQNQYvo5tQQ9BNjJH2EeVeym1KWU34rGNNTZxEcAic5our7AXBaS8CSzfAQtpksmUTPcrFRww9NVh57qG2",
  "key16": "5wSeevUroRJoXjNA28BaMUucuFAGPh91shrESYKHVRV7hrKacgE7oyo2RLUdvQ7wFXWuSWTEyp54avgHfu9FX54G",
  "key17": "49hbJ9mH2hapqXihS2HkG1ExrsX1Dh7LL99niYhSWNbexscz4WZtYkwP2c575Au2LQ4Sr7Rqd7mudokHmmCD9m2t",
  "key18": "5kyd9SPkqRY71Kv3UTp5DRLR9gUsHQcMGH6fktod3DUPpeQvNETa6eiEP6o9mSTG13TMxXth642wYrsECrQprNob",
  "key19": "2S1Uio5o39Y89GpEwJqS6gaxmQ6kmM67TJvJCy2CzV6tgQHPG5n3G7qNanFqHvPPBAENU9Dbrh7bHz7sqS27T32o",
  "key20": "yBZAaUqkibpKNNCAPBS1UG8rgfpW6RxmkDgXCkfytFPz1UB2fZXLcxookJ1VYYwPsg8AV83qAf4CPRLZF54UfrL",
  "key21": "5wa4Jdp8gy1Tvvrpj3ajumog7ub5KumAtTWNoXkPePT4PSdQFUi4oLdGxNqSYStzjYUkSYYenDahZ3jhL6DHfFN3",
  "key22": "43icLSKEuDNNMYYU5eG3Azos2PfJF4cRV2K94t1YKizo6wV745acVXtf2Jr2nvDmjmvQEsYXnPrmkD3QTcSfUMEc",
  "key23": "43HM1uKQbTVcpAo6cxVvFxK6YPVFgzhaWiMWAdREJXyJJS3khFfZQdZmmm2H3bUCAA2rZpQE1MQBDznFkQwHBAqx",
  "key24": "5JoHNqjg2hJtV3qM9sEK46dF2NiXWk2V9mdN27FqZRKrgmAVRUMqyaqFpnYwfo5fu3XmWp7vSs5MqTT5MVnmyRmV",
  "key25": "rVeNrH8dEyfVKQ7Ugauf7AToDRfWmtmzYo6xUFVSbbM9S2hBAXLo6wfqxzwyehpvSDfLiw3TMjVhiP8ANBJwrvd",
  "key26": "4xvB9jxD7x1fBWxWuBTLgAXXgpxbQE5mBXy6zkjokVNsLhHerGpFoqxk4tY8hdaSRsHKHYAy3icSn6WfyvqD3QGB",
  "key27": "yHJXSknrHvUrHgWSamKB8jyNC2sAjzHehd3eGh7SPdGzoqr7q3793orLLTMrgC1tM4nHj89niBBhftqGmh8Ar3j",
  "key28": "5XZBJHDJ2HPyK2CtcC3uiCg4kh9wyzAUoZ5ssaXrJib5ttCKcih53jT4wgmRP3Hem1kQdGahub3EZ1o1mg9ZFq8F",
  "key29": "4NjapjjgZGzTzaaWqw7zHAFDHpREePqFmecK52HhrJnviSjpQJfV8DhjmpE6QLdhGkxJdNgQXivgipHtU47aU9Wj",
  "key30": "5eSPfTDSwjRTCizmYikCRP5P5T88PdfUw3gk7iwUkUFAcVVDdNEgptquMqD5PsKGBFToEk5rXYd5nT8hi1QAcGfv",
  "key31": "3tdGVJzUEYKq5tZktEVBdg9tpkiG9PwtyfK1iK3PgvCC2na8RN6ji9RWSTu8ZTfBhkuNvUqpdUKkyTjrSwViic6d",
  "key32": "4Tiu4NdLfoyi4DbDG6CsqKuVREjGqswM181ZqN5AcM5YGbAoDBnyWDPHMuEW8YCZATVfs5sNCGs57jt239Nbagcq",
  "key33": "GwnayKECjCALTta1dUfGMhtgEdKFc6USxgzWZrJ2th1HRy86apV8dfhpZqbVSZzReLYazPS9JNtiYN3VBG8XVD1",
  "key34": "YYHmP29syp3Agy2f8xgkNpqEDbWMeV22BsKmQgnxewH91DNa9nVp4tnM7KKaufZg3KW4KQcW6UWtwTNo7QXUecF",
  "key35": "3X2kAZUKCh8axuBGyGQLkdqypVnacYqpjqqoCnRZSNAYwPa5PR6P2c8poDBp5oVLcerVXP4erdQWwxBk8G1es5fu",
  "key36": "13XxoMhfhMQg6Zxeay4hRZiex8Q7b8PTyvgE3VbKdnCkho5DfhXYLkpZUfzkP1p245vrSmDtmmCY5VARCVwbaNq",
  "key37": "51BmogjcLXk2fr6VGbdPp7HntjhgpEynaZcEm8dwZvzb2gxvFj4C8iRUBPMXEQ81QscjMRG12BJg7NHqiZMS9RrC",
  "key38": "ufNxSijzAAefAEeH8srxiT22ETGFuegnriGoVyGC9fHLzdPs4yfAqFtsp6p457Wqm1ung4EyYSVogN6oUHohQFg",
  "key39": "dtW1NjozuhodYoHtiuhcsEUWEbWg7rWuNssmwto7sKPEre92NY6Cwd7rxiUqYLdxAcvNYjNbE2Fhy6o1nNvx1aD",
  "key40": "3aGdTRoaeAKbYTnSRTwBq6mbMrTUWKjwvt6APThvkddV9UD9HBeTjmkMmrrhzZ1W81NFRxUjnqPBPgRsmXpyqeQW",
  "key41": "5PUGUx6pVmXy6pWM4BiWspmyPcCZeApoXKBpur5HKFJa6YiGjeChUHmZ6PbyvJJAte2gxXpAAf4bzhXQemDpmBBW",
  "key42": "3NgyFkW6VAWHvrLLqR2BR53G7q326G3eWDqyTTAf7NimyCYBZMjAdJDz5hKhsCQrUws4ZP5LWtewPwW83wYMjQDo",
  "key43": "cYHNMYoxJAgjjwXCpnrhzd5gUMwQ1sE6vk7wWax9WGK6Nx79VcVxiLLpd9qarFk2rrc1X7jbUA76JgpsVfwMRtE",
  "key44": "39zJaj3V5ji5gxLTaAsrUnXx3fkdZxN1Y4g4TXATtpH979GUJ3maQ9RvRZrdLTLoe1TVmfwrrM2xTLDWsYX9nGWT",
  "key45": "4UCpwK2UvKJdiwfvJs9Nd4nv8Phkv2kwauoe6C2ZSMHmvSvh8JK4TVKwps4Hvds6w8H9pgY2An6DMLXQF2pvQ4Xm",
  "key46": "38b76HsP3VUWsW8Qn747fG4KSmZkWdpCXYrLRVhZUjtgWpJwN2AEcp4axcswEpHBQ7icf9VNq4rLQKA5NmYAaZXk",
  "key47": "5o5GaCNaB4vzoaJRz56guBnYPCTrYo1VvcfXJo1mB23BVgoBkHFxH2epi7mb72kTtJTTxLBo54EiwNE5rjYGLvCN",
  "key48": "5tDyevzyhbkd4ySu1f4AHRW5rvjZZim38JUT1Ae8obMtayiAEUP2MVebi24GNA7ntuuD1na4pKBQvH89eX2B4paL",
  "key49": "4tqLH1x6Ve45NABVkFAZP4LHmjFci7CNHf12CA9N3qEUQDbEsLdaMtTCZeEdGBiyUsHgeMVqC7tkxqsfDAntMEMo"
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
