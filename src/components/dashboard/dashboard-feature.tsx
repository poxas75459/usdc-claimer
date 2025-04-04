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
    "4wPwhd6HQ4VwKo6ph4vZegqRr2Rw94BxXgG5eqVXWcpuBJ2dUW9sr4J3yYAR8u5mBbFJSLmcbS4q5bk9GeSHqMPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PvEP8HbCDu8hP5emE82prWZUEFaZ4671EwGv2CSBo2Sm6MHTUDs5Ar8j4pcnzHq7nSL2ewWEwubC3WacsyQUcEc",
  "key1": "3w9KvqWuAgVERBqxnJuryGqXxrvgtj33GAK9PS1dnip37yy2LQ8q5LU5uZ3qM7jH8WxEdZGKzXfvZa6NRGo1g9ne",
  "key2": "5jkPXpWkwwJpUvSFmvppNpHGTjJ2FajeP35hj6ZPQSYxmRCYFbMsZsppHgMauH7uzpksftiDafAUHbiEYYaXuhAX",
  "key3": "5bQkUXYL6Xk5kp9ACn6HLwCNJhv7SGjP9jNjm27zQm2ftAocJfBpCJX2CikTWAqg5TfXYkDZStP4sqAbmLzQ1Hym",
  "key4": "4uFKtN1zrp14fqa1FrJ94ZgSXZBstzLbWt4jz55LxXJioNiAcXf2t5FZQB7SCdhUraxHAeFxQz6HuYEdci364pM2",
  "key5": "5ZQcjCqwywTyD2Rq3FhkbFVr5GRroAXf9DjCtqqkfKP747UackoK9cmAmDvRXye6zKScK8X6CS9N6rQ5Mv9tWLUJ",
  "key6": "QsmTWkBnSYDSmJbcJpSPEGjBy4vBARTSFJYybqujR8bK6wcgk6UXKZov3X8KwUhu9gnvmFoKMNX7mtJhxSDjYZK",
  "key7": "T17HMqgJ44MqxN3WVCD7pBxpz9YHRQv7MwnkvQ1JZk3fKWrPsiSeZBn9tuoPEzd5mX5mPfprqq8kVw9AgdSrwKm",
  "key8": "2CfsHbv3uNV8Uz2vhShaBhRQcbVUs8oN5irTRLvM7P7t4T9LSDHcpmBpPngiPTSLbjH29gkwcFfQsSPGdvGm4HGb",
  "key9": "2Bx3B8i3spjF2awxomLyYsUkjimK9fnvBr7gTkWs1oBh5tMhdUHX5oLJyNxZadKtuDJUyRjBAzFWCtQt62vd3v2Q",
  "key10": "2VaF7EWyBAd3WQ22UbwXwf8LLc3rQQU9ozxriddjsoi39DuhynAJPPBe5EKGu78ifv25QeuHdx9Znvj3pxPeYgTL",
  "key11": "4T9m5SRM7oNhCXv8TWFipGvTEZ1feprwsDwhJFy4WpwsgePxR4R1XhZkDXy5eLLhCHXJJrXUcNs9nKhAowjKcH27",
  "key12": "wngzkqEGn1GTXjsusLUEv7qYjjB8pHyLTGu89DTz5gQLUwB53qSfT4RDToj7SxrX9gqiHXbk7Notrw6CpdnJFvh",
  "key13": "5dLmjJao16Kocxo15oqoACbPaGCPTC5REAnq1d1aCDickETddVPWzkjMKF3Kh3m29LU8QanEvMkYS6nHoYgpNAP8",
  "key14": "3VaBpLECjhGZp28e3F94VvP6F5WcL4VcFSUx7dFnnweso72GXicrnFru1vdb7ck3DY8Wpg7vophbye7VWX3ZcRzS",
  "key15": "gu3nm1m26VFAyyS4j66gcKHeSeczvzqLj6sfsGSmZVWQN8DgcFntiGfh4j19rA3EN1Bnk61YTr3BcH17J1SwrQL",
  "key16": "LPMDYXfWD87NdzFdZ1ft4b5jDCo1TzjC8HghxQr4rKSodt1LpcAoibD48Bnpu4Rpz2VFTFyXFxqgXNssSxRrae9",
  "key17": "3eBKqExVSThFzmY4TKPkueS2E3wr1QDkbVbJyQZtXJgDH2skWW5CC1RiBEd8rM3nyCMmxHemeVKEbGXga6KSCXi4",
  "key18": "3iYoj5JjszCRKHLMMbo2FPW9gBRjFYVjqCoqtkFjAxB8hktP8mVvPjgC8AXx2CQyXAHNFB9g1JGxX3tBVaPUwzBH",
  "key19": "28NrMgBZ5Rg2wBKqNvGFxgPGacDwKj6rYUk6bdgUJoFptZP83SSuGph6EHqHLbb7Vvj2TaPzzHEAo6AqKM5So5R2",
  "key20": "5WCse9kyrBXQ9Hefvdnu9UJjTBX8YUuX5x5fKbWHRH9N29sh2f7CK7LLHrA3SLTDV5oRYDpHY4VL2EHujZnwTd2n",
  "key21": "3727rdNzMKrf3JWFzCdQpBvRqb3t9kUbGxxsnF8AX3Faj1wkBgyg3q4kH2rweB6YKuXk99GXcvVY3VFU2yBpnKM",
  "key22": "4SeHuPzc4cBUsLyWjAZGcR1MFfahqeFjabwkmPW9fTU2MVLejD9Mc7PMJUPxs2G11Hi9cBwzRYQ5aEK7yNVswQxy",
  "key23": "ZKozGBFjoTEEuFHLc9ChXVvpbjwp92dW4eqSHZRSCkYRz8MuST8ekGFFhcJ3q3STYPhyaXHDf8h5pFEzQfVfiPS",
  "key24": "2ZcX38oAihsfNTfQ84xGNmPDKBom8ksEA7WiqSB3hqmUUAzt8JdoHqtdryYunD6Z1K5Fx62n4ZogMgQrhdn978Fh",
  "key25": "P6L6sroSmWh2TCaqzuZpExXhjMmq6BuprQwbbPjnVrk7tpTpxt5eAkcxc4n5E4FfBEcfWLqNWcBaED51SLwUqXh",
  "key26": "2oE1UyskpDGSmYfJxzGcYocUSuAni9RiKuC7Hjcr1eSDkcEiNya5cEzcubx3C3bZz7PF4dPWSFDZiKNk5uwBSUD",
  "key27": "8TM3WKeM5KUFyD8AmcMPuwjjhjg5331vD1k1wbJPqsbeMsSD7wjBZhATUqza3pgtrU7Jb16Ck1mgKWudGnttT27",
  "key28": "Km49RWPpGyoQrQrDkoGHtqxBMmxCqucR8ArCmxPcLKZmwsRtxVnCztsYg5aCQLEZob4UKMLeG2S6pj5oDWVybq9",
  "key29": "2LmXQmEXPcvLJdfdYSPMEvaP2YYzWNhmn2oB7eADbVcxiWjedLYVvANkUyn3NdAhdRgH3SrASw1JmenDMcyjpvA8",
  "key30": "3uUMpqvyRoopo5YH8yHNAWwW9nL6N9GYh3UBv18FuE6SMiFnyyNH9rLpmLgztpbVK8DSpVyi5aArL2CjsEZ97yRM",
  "key31": "rDmxX7VdDV6StXzrLheR6Z34wrJJARjxD833mFVk5DztXuVuQekX7Rj9cPRWDK8CbjRLbYsayRqymfcGoUvvvx4",
  "key32": "qaimYTcs461fLYeXv6u4w9bab4v5gL7sbZLQ1CD6abG9Fidu8T217QGDcK1YiFhmkHKf2j9R4dtaMnYLuYpPJoF",
  "key33": "3eFfwo5aLDbHEQAP9ahWM6rnXCnS512Gkc49GCv6yfdPjHrf5nFTDeCMGmdu99PuLrK4G2MNPmrX1nNVArwjo5ZS",
  "key34": "4L7666uzQRSGKKW3dNKbuKDqa3aJawLmEC8sucQ2ZCvwxmGjAEcbKAmBfdQEJhBzebcpmDb3rge4hXC9yAqM71zk",
  "key35": "4HfmXmgbnSFgRFxFBK6rjzMsc1UZTCqW7kEbGLcP14WQPeXPSVHgB6dLnP3PMtuCMuyBJbSfJ9GSV38e6HxXS5TM",
  "key36": "2BrndLjcd9vGj8ZLX24uk4gf3XEC8n7XRs2KFbWGfezZTJi9XBE7YJb81gFm2FeX3c99NZyMyfg8fj4dCkRKKonW",
  "key37": "3K4ghCq9DPPnefhRs9D3i6WFsdscppGMrQT12jNRTL7nh1isuiopQUUwupUNacFmdFNng1R5s63bRk1SuoQUmS4M",
  "key38": "28JwDZHRbUqjYRMd2NjNkHM7sYMDHVsARkBKDpSLsgSMGfVqtHfb1ezCnvHm1C3RKLoBRBigJK7oB9vPSyQwdNgC",
  "key39": "4W2MMF8zyfUS2j6B6uehdySEyQ3fqxfZWn2sV2ciMeGE94E8MsQxTgbfdcKXcKQJkGK9dW8RraGnzFA3utUcnzbE",
  "key40": "5bxFaT4MqQ3TfaDB61n1UPkfE8yttr1UVrcrrk7XBJJgJe3aB3VqMSkib6v7x13Af1VCN3jgnCvAzBdc5iMWPBkz",
  "key41": "3HfTpTT72QVQjPVqsAVDHaAknNTkRc6524Wr8v23zzkpBaCyupKXjYfUHhyuBD2TjBff59NhS4aWCUJCrVqTxPNn",
  "key42": "3Fbkr6kt5aUKkdCdSAsgTKtdfANoDik8MyJBdtRL4uquyDLab1ZF83JZ8HhoNEQsQ5S5LK3rjtEYAw5JQY8fboPZ",
  "key43": "3jkGJqa6qSoWk1UThzHnK4f1SiPvcbRGgJqWyVci48VSd7RTVff8mVotW9UoN3gQqzNgfH1iZMVpZ2aVv32Mk1a1",
  "key44": "36tp6DRGijKT74S6onheQfWfRaS687ozPfHHur26Z2Qiahn1tsQcVdQLzBiypi69FLo7ULQMRcQ5be8NeReHfwz",
  "key45": "3W7Fz6ZAEYuq7sjTzLS85M4Aztu3oBfNzrEp5THVHzXWM6qikqDyNo2cGFM6LQDn46fcKAYmw4Y9hsENx2GaP3VJ",
  "key46": "2viznTiLsfwDsCiMWk67SNnDmdoP3S4qSgQydTKr9kPkrnhUwtGqXT189vJSz1JwHjLi8dePNCUMMDjwRAWFaPrn"
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
