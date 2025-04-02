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
    "4VEHwyuGAUFmYN7VLopuSkMdZPsuenav386mkTQvdm9uEdi3MTQuVnjHaQrqeD5K6cZvzdQ2cKWG2SBKNUgHuxty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GFxvejSKEXbUYounxFaGUhqeV756HszM38V4A2rW7rwPXHaQjc538Lx9nCQaqr7qugo4zxbkEfaEVi7NqVHuLod",
  "key1": "4Qmk6ZduADCfTMo94ycXTZfwdmk239S4RA9h6dCx77QXeSLgvHEYwYng36EnvDPtb76eCTZybek9FXhbhKo7UbRo",
  "key2": "32vTasYH4fHWxzcQtfCGeUxm6PffCkX2qhLjPXuV5vsc2Nt9mf4mWmP3wDAyMNfzneprPCuWF1n1RsaKGvp1aXrR",
  "key3": "5jFDAxKpmsMH9k9ZQBnf4uZT3e4whE8q7KDCHC2h7ED13M66jMkqMKccKKFxrGtJBZ74HiQ3MXS7VNa63BvM7xRd",
  "key4": "VjQSvTFkCyeHXtF6o7UDUYKn2in2MRVz5Pazo2J1konpiM8ftd7DvbuVM9JQiajhwM3KYtLeV58fmaM8KPBnTHh",
  "key5": "4aeofC6e4krbq5dZodNNiB2Gm2WpmihNQRbKgcs68LuBcHfPuvV3i2GyMjjPLaZ548s4CaZ2NQhaEz8PUp7KLopp",
  "key6": "67kPtBUZhvMNdV92Xgztt7fBDwJXEF9o7Mwky2zDyRkAt5wJEHMhxfECpgc6T8zfu1ki4iVN6y6XCo25qykdW924",
  "key7": "f7a8qrbXfYaoDDV6dmSBMRAoidsYA7nvE88Jy4ZBavrrhch9qKCGrRWC6a1CQNSbbNWyCHVD8a8ad1UTLPguyk5",
  "key8": "2yVkFYJrnZ2CQizLXFEiEpud4bgJt256STZgAkD9kgCuvq9CH4e3TxKhqYTCnj2tuWCpTLda2nU2Mo5GxxnoFaWj",
  "key9": "5bGFxpd1g3PUNFuCb84Qh56P6rLJB2v2MSFs2qEgAGL46Edd8b76p2ERfuXKKqp6J3BChkFwT5ottMkdNPn6wXGF",
  "key10": "5KsF3D8mqTwEp1jpwwmYbBVbHhBrafQ66zY3H1eVcRtSyS2zn4Fv14KKHWwqreohgXHDXyNQtcwrw9yECduvTJqw",
  "key11": "25ZFzPTVFZ4dcvDnKG4kk4NkoncCFo2jFwT8VGEeDoq3MqA4jivpARDUPcbMVMBm1zLN9eTnDGXjwK7qHhrnTEhC",
  "key12": "4Qvqx7LStUoz29TXMpj2Gj3pTwcg7fzFWjRfvPiaA1AhV3ArVfwZ9rdkDp9d9tNQxRSgFD3NGfAvkKBrem7qrWrW",
  "key13": "5KE7aRD3avfokV1PG6ptM4U7uGRCZqWnxmvvm4prAGKtRnkcjeyX5jWixWfQGziKXf8FAHAmms7ZQTZTqHXeVfnA",
  "key14": "326Ds2xzJ1rjuo8ir6k8JD2HthUBR6PaBpU9uj47WrMRdw9dNHsULzj8ghTDLYQGaMuyN1hpC5sxt7qU5seb94Mr",
  "key15": "5RaG2B5BTiXVnfu4SHaXUn5gKfJFH7SuzGpgVYb6wrcTCQBVfqPELb7LX4snqWKvESpMQHNtZpVF3xPqKznmHU59",
  "key16": "5i1u7Lf2ML8ss31RFojj8oYsackpM9Qgs56xxhWTF4nJ85gVdeqVJ72QDKaHdWi1AUdFE3Vp2rWyURmAvT9nJp8c",
  "key17": "5ATf9wTRCyno9EbMgCzU5Amofh8smry3xmTpB6HsmjjJDkAChj6aAiKvTBgqqM4SXmvRRkeVeZDxG9QH2cPj4HWe",
  "key18": "2VF8KWxDGWeNHye7f7NZDvgnPWSYDZc3PYPrDznJxhSgtQPiV3DtfPDhs1dTnT7BnJ2M82Vgr8XKq9ucKs2fvufr",
  "key19": "2tL1k8pcyBRvTivkze6jp9rLE1rKnKtcgQX6iLaD79cwyyyabNjwthnWKMtsHXoKWVRVTPRcfsisQjPzVm8Aiggj",
  "key20": "36p3dB53UNK3oVvQnivZouT96ZeuXLu6CcbwH3JdyJyoguRFkxFtB2LC1Fy8HhtskfyLBAxio4C9XSaSgJ6yjpS2",
  "key21": "5Hic6VGw3s9SJsojUa6aQ45XFd8CnYWAWwdnqu6qTjrmEjV2gG22eX3UU5ysq1Px2MxE5xKwoWk7fLK4wgRaa5YZ",
  "key22": "BcQfWwnMZZXQP2sPT68dUpDXosYPfAgq5z6qGkwLnvWobdqKZrqyxGcVWMd2apEypdpuLghHeYbzGgZeh5i1c1r",
  "key23": "5gn95jv4nNbENN2t3TgDotNTGZcr8KL963gfjpbDiEF2GNQZjdwCfcJN4szwrL9oqts3PY79nXpo71geGhF1wqaF",
  "key24": "5Ga3wmA9NpprVvumtW8UStdHYmuMnht3M39iPUBQMGnytJMmTtHBAjZW1QDZHW2g3HwBMWq9ekQHyuVx5wfjHXLb",
  "key25": "675LoabvspoRBxuvpsWDdgy5764sWeJNynmnJpvnfhnEvcFh8YvR9HkkgZakVGYKjXiQ4Dtrc8vKkzd3FjMpEAiM",
  "key26": "2RiPTkZXKzU5Yf9whJk4KBupRpiEmamAfU3kTNJeDUBqsPC9wcw69Ddfz3wmSKgYQdddQFc5LAzk1WgovJk8Jb8q",
  "key27": "5s2WAjJXvCCjtsMJDBSgS6usawVhZh24XpaJp4Xw3xNahTwRLqmeL5PWSSYzEa1irovJxCLKeKpxdvQP9jaUAnEp",
  "key28": "4EPLkQPS59AsUVDAzVozdsN99TRMWwk2QTmcNKmop1QZP1CaPW9HLkW861gHRZhmWZJbFdFJnZ2XnxBrB2cRxQm5",
  "key29": "B6t2uqfrVeNUCn5bArUg3At6QVWCcdMi8SUkxKnwLT7e1ifjNZVHG6XdzyBepRN5DPsqP65QTWp9KSFVHD6dGhL",
  "key30": "DXHAv2bZ1B8f5Wfy6vBTja9qUD4Riw4bvp53nW8eTVw242c6ErDhDvvURVBT5XBuJa5pbSvFE2dALbvz1kypMJQ",
  "key31": "FoB9cNsVJPFE3L8Vq5WNCqhRUvrvT2nozyxQroNVkFandWqsTU5EC1SwpaBiiJeZ3ceejGWtuNSLguEAoGpu2oU",
  "key32": "4gX8xgxegdeL71DBgXmZSZP7KbTuEioWVmkyJHYdeUe2Dzx5w6vNfxu5dARDNCTYyDphvQqnfHBmw9h6oGDvLz2e",
  "key33": "5idmtfwCsYwoFZXDsVgiPMbhX57PtTesnDVd876cfpJUhuzrnqbGBdvDoMocUGLxW1W5JdVLFz3GdsjrhhLx1Htf",
  "key34": "mK3twdF6Dt4sdbJe9uZ3AeBtD2BLp5LJ8gmBa5k1Vas4KqmysLbDk2Jx1WF54tMZe6La7S7sComiGJWu8YjDhL8",
  "key35": "5MrjyPueS9QBr4eCK2Dqkkehkb9mP6ecLHydCR71v4k6fjo5t7R9cFQ5qeS6cwucggxVRxZLTzUiqnQdmzCo9CmK",
  "key36": "58oH2aNfmZig5FHRB1o1diuNGC1bDXrwq41ecCrJSYHYgYgq63YKxMH7kzGfyVgK7GosDqYqrhJAQ6DCWTNTKfhz",
  "key37": "4YtNxMrELaP9eskD4mEipRk6sFcSMtCc5TD39T1yEhg31Lot5oxjv9YDY2AUdGHXhrSE142kW4GAVqwnJJXWP4wY",
  "key38": "38WRt2jXQ9tsU66VUgiCCvC3wJLVk9cqm5uJ58oNukPApdF4V3NHUpN63eMoGnc3hFczXw4ogC31XMyV6dXdFczg",
  "key39": "35NfkG1FK23zwFKydXe8TWydMxoZ8Z34bEeDApaJL7CLDqP54xFTw1dmN6nVGEUChLQ7DPtQRfsBMHG8Boju4vtx",
  "key40": "2U9RAc7J3BrBgFFKZFJ6ZUBGkwB3CYDmS69hcaRa5bLKvnuo82vZ9JukMS2KzzVaW566adRSF4eAnVKz2zCNLmNW",
  "key41": "533ApbqjX874ecHpww4Fo8iEL13C8GrMkzfTqTE2SkFrMRj8RuAybhRAd4C5a2qyeXXigtpEWKCXJUjoWHfWMWcA"
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
