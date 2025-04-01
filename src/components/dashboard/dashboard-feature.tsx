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
    "3vSqfxHJcpHAcarHjHZKK2cmfZPrx3ZspSVPJuhXzLaegaimgGiZcqrnbPd4Q7Eaho8e4a1kVykbBL1yNi2XZ7GF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ntFVV9rn3FHE2XiLDxLimQwpYH4BQGKxHVqoaXuHg2T8DM9m1bg4pvVKW7QsnAZHpKMCDWqkCYugTkig8ZyCtgE",
  "key1": "2i5uxUjTwL6ZdjZYWEF9pMDCD2xpgEfSNL8XArPjk6vsjhbAo8qyT56BZ7xxRN2smqFa4EiFoxwhaabVm4noGeUZ",
  "key2": "WyCporfSo8nsgPPm5J5EeNmqM6A8tQEhYH7LWiSahWLCSf4Fhhj9wqBWSnfHp1g9iD9xiyQzamSpEkyaF6ugbQe",
  "key3": "4svCYxyBmzoDSFtt7VNgcXxGtrHGwSEVsQ4zsnvAwj5vbh66okJiku89amTaC6nM8dTt6pfZE9JpRPg5qbFqLPpm",
  "key4": "3Yvgg4NF35ADYYynqA2uN1Bs7SMgwe2BNBKU2Fj2zBGZ4FSKEmU8hc1wJRszcLdtRWvE1Hz5pEJVNXUNHu9hCVnw",
  "key5": "uPk4e9sDWuoQG6L8oxapQfJkDJUgi1jfAZei2B7weWgWnn728RKFkVg5ZcdFnkaUvwLRnEoGjxx5hdK4k3hyHsV",
  "key6": "5LsYW3UhYemQbqevWYa8w4WMzYygQfMmqTtEbFBhwpTp5UTASmNi4KZmAnJSjDqmo6ccHQZYzqU67g4pjB7ZocGG",
  "key7": "5e8wckKfkpx9RZYtMwQ6fsabt8aSuTdBsJErJbHbvpHtxixmReX5okuCXXWHYNNRWjcLgaDMvVvxZ8JDdWnYrmoy",
  "key8": "krwuLHFZEdRDaTib4qsUxeaz73kB8PqgvNoweoJVybYWfUHRmdngeLZrKTtvpMX22cWvZHeVfNTZr7HYPoV2Soq",
  "key9": "5enMZH9AgR5kW6dqnRc9r3RaCNQH17EdKHK2XA4ynTJ9tvvtb9qfsNEAaLLPmCNGbYejQ5wxdkig93fmTh7Pe676",
  "key10": "4tkrvmtjiHQyr7hy612ic2cwxUYbVyNHqBnMrHn5cqNGtwDXogjjXTt2BhmfR8hwRybHRR5vEGSDd1gNrg7dquhm",
  "key11": "5oaHhUjGkoFUfT7TnpBCzRRNBtCKBvq7pvryJCexUvq7XpURychs3T1BkAgTCW3cSD9Da4b9evrZmHnY1Nm5RCG1",
  "key12": "FAGr3LpxNdaPpaCyTDBG2Cs8oo2pjAopbbavCzyfutoxEABwotymDC5zFUnVVwRpTgtmASRa99KHRrczVV33qhn",
  "key13": "2fNEpoh39qNRfLZTc1KCn5yo6KC7GLAfwDMj5T6t4A2HAFVprgsCetat4F4v2JsWc9cajCwmLQqiYR5NtXqjhEN3",
  "key14": "3uPbAMCkbEpNmLLefu8FvZK9Dgxrqua2pSCyowkVDZmTV63bTZTVsy81YLiKrNUrg7DoScZCUGfDDWNYWfs9iwf5",
  "key15": "4Mq4SNjyuuykfBDSRFZKY99hkk52GbpBRpU5Zn62c4nS7kLwjrR1Z5YbosNaAVUv1efECNoQXhBZCDsk88YT3NiT",
  "key16": "4h72BudSWmT87YqYJam12LKB1fGUPUeFSZvxsC876PJZdNPjnkPg9aaB2hLGAdybz6xVxoB7zEoDzWWFSbzRGEb8",
  "key17": "46KWfUqwWW7W8puNnLqQJYejF2M8E7hFWLznDsUyvJSu1REDszqCRXKWZbgxfLWvaqTZVwNWpt6bJgocbsfD9wbw",
  "key18": "2c8yWXuPqZbD9sAj1DESd1T9dLjKnnh2W1qh7cpgwYxAb1fvoPJSVpYa9X31Lnwwwfdu6ZUVACNcSzhbth1JSw4D",
  "key19": "3T7qiqosCTqdWfkLWSpdSxehAEHCYm7wJ6WBCx2zwxUNgtSBPjaPsckTGRY5xnSC6oCp9uc6ZKD6Rs6grjrgh4Ws",
  "key20": "5nS51JSAwV3hceXSvEJPG4bnxurYAW8Tn2uVzdeNXwj2bawencbz39Cqr4cevPLi85HQ4KkgqYhX4g5ChoBmZLag",
  "key21": "2os67gwrrAxnFR2Zupao2ad88hAfxmGrS6ecHL2iD6NfAN13H7rwEJFRNUycQGcsFMxBn46w5LjLRHk77GU5z5rn",
  "key22": "3GrVhBpzXafABEWG9bCLurhtbTxn7yUDW8ZjdV2tiRHTrokkzbwWq24c3Y2JPKPqQpiV2NYP5cNT3ir8oKeGT5xx",
  "key23": "4NE2ouxk3nHDuHLMkqSx6wEXYocLRYoHKahFeJnyNCrr5EDXK5LKqksVjdkmJLRTQqL7CawCERK8WzicLMZ1R3do",
  "key24": "2WZ6XPtkRTasbcjmEUumqANdKDdU2C8cZsXrkdUJTN4PxVNaRHAszVqF3Yq3EgUY2iZ85a6Hunp64W4FnUSLqnGa",
  "key25": "4uhabaUApvakjkQNogKrQhhhzcTgzBn5YpJDK1FNUUmzR41uSqWLANt31SYv3MTK44v9iQRK4GQ8DiCFjN5w68Ji",
  "key26": "w3YfdGBPFjpEp1dAcjHwTSe9552pWKpy3SgbBbgFroHM1uoaSWfNCey43FmSyK6DNHfeAHJBw4kkqHTeionJwt6",
  "key27": "ymF1WLMr8zwNFma38vHL6yRf417RhiDUHgKnEniQFZLvGECLZWJcXD6S5vQDVLHFdyY17noYHPC2xpZj6vEBhRU",
  "key28": "4r23BGqqRtEyJxd839ZhJcENc4SqUy9tKc6HK3wS2dFPDdWQohiBtY9Kr9MPJCm2gqaFMHRyb8SvXySD5UsYKUCh",
  "key29": "bEuLTpRjXsbXdnn7ZUp75NUEK9qGDUG5SU5NVBuh7EfGCdaKV1APwvhUnSvX4qaGqopwspPVZEheniPjYsKdvUM",
  "key30": "5Jfq48y5AmqKmtcZGBLppS9ELFqMA9QZtCtrQpb51YEqNwhpbzDodbbUBGdpwweDdpZLFK7oLbEeDbAcFk47gGuU",
  "key31": "yGTLu6HWKzgDab5fcVQbEhqS6TNP4LR7udUKcTZosGdnNFJSDFnuFgC7Qo5Hrg83GySmJF2LSLbeWdNpkv2N1Lk",
  "key32": "UfKnkW6xjNLQiceua6yh5xTcH8BiFiMhTjfzchpzpGAtumUqopsTR6c7GfAqXaxLLQ1GcdaaxyRNjekPEJ49dfm",
  "key33": "WXg8wCUeqAUDUsiWT1u1rcq29JvyR8ARn8Z1vx6Ui9NNUhdRm1oJRigRApYDidPXXMu49KtSXxyWC2B4sKXr9nt",
  "key34": "31HRWRqSJJoAzgqLFHJu3rJRqA8RRZJGVokTvwUkQBQ6NmHibxPqsrgB6jr6wt4hHL7VpDA8k1eKimFdXeNxFULL",
  "key35": "2UcdtaT9boAQPqn3wp34REDsMEiBJWXy7UJkeULdjAXkZDFfykMYAg6WCWNwzQwmTxdwuTWSaUr5WPS4QvRgwn23",
  "key36": "5Ro2Z64nJtUKeBJtEDssHqGve5xKF1wc8FxoS2HKVHJqQCmyvGAuqwyLmVGgzSr66JLhdqfBTkaGvHsWBgSewrpC",
  "key37": "2dLq31PriYEx7QqWhvXZUJE4dA4f26eGSCd8zbgxFZv5hYea1Bs4XdXcfPNLCn4tD9aYgeQb6tiXQJHM5ovWN7mM",
  "key38": "2Mx4y83wmtgS5eupv6d8uPJb21Jrh9xkCEJEMbGQVbUSSxi2Bm7y6ZUuyaNQC4z17uJPjwgWZyYnW2fDsnhitGpr",
  "key39": "3LWPnwZy2u8R622449Me3LAKkdkFNX16kGpLvxyb3Mm8EPE5Ym78yny4oT7DN6ErQsCPdRtvXSuDcsgJ7LMS4wwf",
  "key40": "2VxDYaNywiTWed1U5n9vqSyDbbuxtuADTLvvbMTkp3sYJ2RartYNJTwtteJAwbbwzBpBzMRodVKcRZEz2bSxLhmu",
  "key41": "4jUisfDfciB7b4MPVL8mBkQP1ntHUera6u1sHjtD74mKJymSShJnpvaZpv5cbPmGef6AFGjZZNmD6iJ4tymL8tFn",
  "key42": "2KNnR8UP7HjKEGV9YdFwcxRGwKiexrecD6CHaNt4eMX3btreCQbGcpPLCY868s2Hwux6tSiDhgztakeUQK5YSraS",
  "key43": "2ZFm7k4euLMsbVyejb2kHuCMjCoZvpWuYZG4byA4ooWGGwSjgCUno82cwpthZY32UwHQir31xbxyT4Y3czRtkP4z",
  "key44": "5TT9UoGvHcBHhuUf7h13wtVDRSJf3SvZBNAqe9fse8ZdQkyBj81VgagZBHv4kTLtQyLMhq4qGQkQwyBtTC5Fqy7U",
  "key45": "2AhSUsXpWFx9Ko9KeKgcBVNghZGyHFQLBDfS56kCikBudb257W6aHmVw5rQqg1YaPae1DCrHUGzowAkbm781WaUG"
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
