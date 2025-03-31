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
    "4LsNXm88ew7v4aTEXe5DFUF8AnppKqLFY29S7KAGvD7ejMfCpAnv2shLuEtE3EPHxsAhKdV1QuWSZv2rJk2YvEGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Qu2yUw7S3i7tT3uRJDCww3JG46RPEgE7GKGdGchqfKdAFDkSPDiqDk5PEDRub76AsKaaXUQXnXcS4NhWv7EuSc",
  "key1": "emb593CsEzaApQofhJgZx9HtMQ3sGZ1jNV2rJFZCv4gaFxuKZe9nm18UCd5Dsf4dqrRqbagJ7qSHMcXxnB5QhPK",
  "key2": "2DGF3KPGwermNvn2r1i2pMgPeZt79E69Ctr6tic7WrmHHhkPPwNPYuVmTHoc21uKHBTFBeKwXywj9pyQXnKT2sbA",
  "key3": "3Mt1h4HsC7sDcaMj1aVFEedM7DZvjqNZ9V2j1HH4tH9PRo9k2Kqcq2qRncVk4YUgpbVuYxQ8WBP21WdRosNdkq1j",
  "key4": "3gTFYyYUy3WwYZCFKJePpfJfc8UwVYacpu5gWNys4CWPtgLzGkRsY387WEyxrfmDqPptGpVg766MTZrMcqLVvWr6",
  "key5": "2adGTg118k8mtLpHWKPv5UxEkuvS1LSumaZuq1gYbmAq3waQUM3w5YxszaWFYFz1igs84xarbFZjGXpdpB8jKMPG",
  "key6": "3pEmLFiNf7Qf4M3RoPoGx8T675AHoBA7HLWoTJmdALGmxiFsxSozuzbcN4WgHEvvGndT3pZNmcKSpuSFWrXkypCM",
  "key7": "5MGZ77D1tPvAgMzNeiV7kpKgoxLxPoUvoBRPjjgVNQbSoacRDNqBaFupJjGRFidWhNa2bbwyRHWY2kQahNpCPWYj",
  "key8": "vHdw4TXiHwrpVgBnYBdaLthcMFSot2QwmRcrKJgLmWbdPHbF34khUchR9oghvKv1Rxbxk3JVG8esi2GWAh8izFM",
  "key9": "pxDEdQK8DaMohhcLZJCt7Y8rBsKHrNX2Qfu2B7Pkd73ms4uWcYfa8PCTQpwHYgddTiDiyGqh1pBm5hotv2acsLV",
  "key10": "2zSdsUWwKorFWWtNvbUGa4NaRWoWxdEYKghd7QTQrYi5hWXkbghd84hA2vQBSC5YRYD6rZ8i1PQrGh46KSmxb3Co",
  "key11": "2v41cWbmP5tiuNKzumw124LV152Fq8aq4AUtLReEfPwmf3GXWjcgDesyvEgvgUCVfd9s7svUuoWG2PQZJdE9Syh9",
  "key12": "4N9DiG9W4k9NDQ7KziHGm5dnDYCnjbV7yzzFr1qzim96BGsiRpB2SugeZqw5fxZN1kMPw7k7yzuSGBwNWZGSVNCy",
  "key13": "3Ntrvh84v8nr5ijXptTczh8Kms5hqSMtgAvdvR6i9FKj519R41XKEA9hU94ZgaHMCji3KzAioZs1rR3bG2c6XKx5",
  "key14": "5qwfDfoa33JphU3ByyF2skUJ3Da8XxZSEY46yo5UhEM98own1enC2fkrnxDHHU7czkLNAuWuSFtL36ZuNJDVamUf",
  "key15": "2EY52oyXs4qaTsfadEKdVUaSsoVTVRi53mjHerdcS7hEfh8bXHV8JrvzzVrx8QNMJhkfSADsyEGHmddC1acUbHMK",
  "key16": "2mWUU89Z3sbEUbx2g43MsjoiPBMAAUkbqM4ztPpkHRTgNKM69nkZg664H53ges2mW11QKCtLwJUG1whuVRAgdeX8",
  "key17": "34MKpec17DsQjc6WWx2YsDoGwvZdXVjpfTUUcFJQ8oTGXX889AFAYCtnJEWMQ42TrJa4UPKRKoFAYDpf7ntv4D3C",
  "key18": "2kfi8u3H4HTe8m8j1DgoSvgnNgPEDNLrSnvAL7e5zwxp2YUPdu4nxyHH2VoEa1pQQ7R43RaPBKwEXG28gFjZFDTz",
  "key19": "21QKCzsTzhhy3FuxL3niV1LmatmztrVcmWNcZFLa7syccscqrA6uxxVxvutECW9fPApVAGJEsRj4QgXoobQVuC8E",
  "key20": "4F83XJhbP3BcTtjUHjggB3K3AEnZExn31V6jNvkwDvrGCDPDSyw4tSDZCoZ8DzXMdustKiRfQTsiqxTWM86684Me",
  "key21": "rznHC7PapSMZn1gkBpNLyhpuKPcCuWYBj8GnqrHEPAmm5dRghXjG7JLvmpi1Lm6XzgKnHCPaycF6VhEs5trVj1S",
  "key22": "3gyoCeuqcuvBhjoSftBqqe7KKsShDpzdkYozbsREf38ZXvt634K7T1Lw9FNoyCFUPgT35sqMMxdUp9bVMcZVyeg9",
  "key23": "zr2fDrGn5tzQ9yCyHHV3eF2jVJNf7uWWGJCREqAXfVxFchx8P39JjXqLK5SjQTbhtj2ypthEm9Rcgb977ubAuCY",
  "key24": "22fF7vUKrKboha6J7sfwwa3haoNm48xV1fW9QFe1XMLUt3ZMh8JF9p4jaZ3kjAME1PMC9icvshsDLHCqL5LK7vQB",
  "key25": "3CQapf5yDTYxVidAWH1nPthcrdSLbAM4L2MKnuVnUs9xstVtWbPcXh5AyG11oFpY4VX7BiDQvScFsteqa19s6igH",
  "key26": "4sJeWyk4yY1dVfAcyY2P4CaZB7E9y2ypSz7H6nv7RWvsufuEoLiyQ5oWHWRUN9DhQNeNM4RMD1e17D74J74RjCYD",
  "key27": "9St4qGYNJYFwGCUXXqrf2XPiR6xGhsJ8Jes43Y9TSJ18L6moWyhCoAxgkH9YhNBkgyDKLiBgbsy7GhH5wxc119S",
  "key28": "3qL5bUu5emYK3Z9ZdXGWmFtngBSxUrM77kap5K9aNYEraWgn4MzdKDfYk3rNQmZoLGXQ5hsqkTysJHMirUbewCyr",
  "key29": "66hY2HErHFAtqSLMLwV5UuAPJLpPe5LskjoM2H783jrrtxA484UZFtjp9av8wgG1EXjtEDhsHvn5gLmTCukHA3Jo",
  "key30": "5jh62JL7ztzjtCGnHgHdnpQKGKvKYUxvA3tHsU9mcma9CYvazs5Z93GQi4DTrFhWSExdqDbF29KsaDzBqbWUV3h1",
  "key31": "URsGf4ZHd6hxQXuWx75syGwzXJLQgczFbhLCVckbKDyfn6UkorYZB2wNCxGkWDAb5pdkXwuDRvMLP6dqYLuxyqV",
  "key32": "5dUdnmrr7XHLqwHvuAEAzMN8jUrTpR8DxtDg5wtyH3iPGSkhazb7Qx1htzaL3w7pazQKuwq46UKUSJSdSJmmvpdp",
  "key33": "4hJhh38rrTYHRusAe8jj3Hej682Rf47sWfsmPkzsXA37gzKYtrH6JL6tWi8PeER1w7YvVnBnEZN5FkffqDiVFxiB",
  "key34": "3sFAS4Exk6yfumqrzZaCtFg1RT3LY36y1VuJsQe8c6qoZ5DCMwMZznxKXC7r1hkHuH2rAKtFuPD7nkcGyV7EKtio",
  "key35": "5iC4ZXUbB3twoDbJNAexWtegBGvSfFR2ekZgiMDMrvbxGK4czHXp5cfzP4Dg5RTnP13XdLZ8c4TdjazEfaXQKv87",
  "key36": "2QVvNJeqCQyJ1Et9iKAHYAEZG1dbMoGXA5g1m6mUysgfqTd4TsVzgJBuJq7P2T2YZ8Wc5jDLimvr4q4MKibXogc4",
  "key37": "TTTD6txtzZQhxw15VJuT2QNthPQRBydPTpHczuCFwZZDRbARNxUkas2DpZvzZPNbArULbQQFbcpBhsvdNEBG71Q",
  "key38": "3S9YrrTMxEw26TpWsPyMTW9HzrMWKAi1jv5HYtf7yRGSgBsMVDMq8usjRp6dSL2m1EvpzBGC7ZuzpaQxV9DfRWHB",
  "key39": "J6NeweGqapb6EnFDVTSCYK1CX5Ctz1uJZvwxrJASVVUE6G51uziLTgeqAnKdZmDKz1syAXasQ4Hk2XoZBfhBAMV",
  "key40": "4SoxDnMhmHSeUiqbD4KM8bynDLgzRsKeuoM6gcC4s2AS91WiHwkCpayLVTUr3PxwwxzFirT7AX8maFyWZtDbo7EB",
  "key41": "3cZbk9gzhf45LdmE9YvFSAtXLDXkna4w1BwVxhi9GrgnRtQy2CfxbUQZ72xd3NWYrGvkf1VCU1Ct2jJ6XfjRB3ge",
  "key42": "5fvzgdb1vLkWfU7VV5tWZW6XJHjkFnXhzbFWDTCMrszqyxSzXeKAJbYUkWi1TWWfv7et7ZSoqYWzPFKi5sbw3wk4",
  "key43": "2MXS4ZCjn3pMgEkSisahr9WoUUY4mFdTdAF9DR2jFriPY98CM42uNvyZFbxGGcJzctiy8WiHBSN4XDFSHD2m5hQN",
  "key44": "5ZHr7CkVLrW8BbdiaFByzp3wLw67rEny65Xx2JmAQrxuy4RyritCXKFsaUDqbS3Rf1TRrkphAmC2HbztqnzFkvXG",
  "key45": "c5QQbexs5Y8fHNT6EGcNR9cbfedUJA9WVThujkHuTUtWAaTnS3BxFzFHE1LHqs2kKXuYe7BMt7Td1cqFWeja786",
  "key46": "2q6oUCUaJHb6m3mRrHCjg5SMJ4SRK5zuW6Tfvo2RatEaAcFeDTm128s5ZMUiXtmxyJiv7BbrZ3NCK5YEPxZnzyDj",
  "key47": "5PG5qbYinPkFRhoJ913VLW77urR167f8etWiEsTK5XubFtNXccVwRLSwq42hWvy9UAaTMtwrygz54FkUUPe7V7UG"
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
