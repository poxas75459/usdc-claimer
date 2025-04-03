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
    "3AyMaPmoNLFnZHpGX1y5cwGTozXuToyTy2BELNqrHXzF5cvErUMnvKCsiiQrmVvGg1h49EDa5byY8hRf2A3N43e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RgoKVzE7uKDUJESyyKBevMpmx2UWu25Wi6cS8uSkYkv7z7thJK5oJNtqFECWVmBqZs3BLTHRzXq8AbsVoVbzmHg",
  "key1": "5kM8h4v7rHoNfnwy8hqho2RMyufurxw5MqtRVG4Zmv8TZbRcvHDskZ88S8cKqJfTuajUS6YGXKZ8T1K98azbLDFb",
  "key2": "oodEVq1uWFXmyH6gy3U7SZ9N36TZogv9MhgZu75hgPc4cYJr6k3zvG3f8MMqRHmv38UqTPi2go1h4cosjkrLniQ",
  "key3": "PWCPL9mPVnj57CU97Ukx4rfXQkLdgfav5vfUGdbN872gYgTgQgiyhvV6LGzpiatsKBoF4gsVcEM8jyoJAqrL6zd",
  "key4": "5Aq4ZyRNwxHzMeqF3FUS6MYcDD4XCEss25X9Qdi4bc8xZmHr3tNehpShaBUcXu8CnymyXMcrCttNkkvQe8cfeso2",
  "key5": "2Q73i97VkZJX2ePDJY1PiNduZr9ShxxULvEK81J2TQyzHnVqNdzHtzDnT8icpqXSXDppwDx3eXFCKL89PqHLNeGa",
  "key6": "F98pm5LmWo9WVKFpqvozoHpmsJaYJmyy5g6qa118WNStzvaG2gvjG35gHWQxTX7kwXBV2Lsh5UsN7488AFxrQvp",
  "key7": "5itAo9hiNiBYYgPnF7GrJoGdXrdM9ZpYAc9yLyYAjJ91Gy67Ay9e5NotZH5Jqt4KkYscFX1z2RoiENK4EASqdEHk",
  "key8": "5WEotzf7NzirgP94SgozSM1MUFQ8ViqzmxggMp2bAszWWXdSgMeDBkNTZgJBEJUqRoDRSfvi1PHpGqBrzPnXseuR",
  "key9": "36ncmNMLCWK8oArZR9WJxFw96K6V92fWweha49uM9HJyVobPre2HeU63FyVUHsstU7KGpRbYigbpHtpryowSW2bw",
  "key10": "4Gg5Gd15m1jpAkdRAakzRxPhzfbzS3P86KB8JWv34VFDBRkZxw13F3VFznZvKVrPQ6itU7uZ5jcPAxdntgEdiRvW",
  "key11": "jnfytHLawo2Ur3pbTHSzWi1LL5u7GpsQDjy64U6tUyGva35YjDEkKwf6LMBbg229TR62Ziv6q1nX4RwYQ1zS7QB",
  "key12": "JeZnVpCmn6PuaAr8Y39VpjRG1zB2iQ1PbbL6z5L713QNyHFWPPg1tNTgeFm4J1AcsGdKFf99zF1M7cUB9GLiBYH",
  "key13": "dq2uPTUoNFLNXj1ajNqooCGaSGrzffKU5naUSuiz35zBNrgGd1aduULJyYpaLZjZiDx6rRngVuvM7H3qvjwvDPD",
  "key14": "XvQ9HZGGBnwTA1itbaBk4UB5duNc2euYE7ZuLBpceC7siccx7edz5jQMC3Yw1xAJ9jFMyL8ewqkCjU4Jb5mcns4",
  "key15": "s2nD2rfZQd6hQkrC9TPNPEWW6E1WySAs7JdoYSQFSN7UVFkbLfjJZSWYXEngY9sDHMJi9vqfDQx6gwZmT4CpYPM",
  "key16": "3AiswtQhucot8twmqZrsd2n87dmr4oshyi63aivdMqAXvYMAS85NqpvyM8Tp5ZBXogs5KsaPV3b6aQiTNX2x8VHb",
  "key17": "vAEtMqPXVvYhEomVUPNYtHvo6dgcXMAXi42oRKhZUt4dso2mKF2ZmECT7kWdazxkW7b7jCfvapHRrho4rvsCXJa",
  "key18": "5LfZysiRoUNuTctKGEicxqKrcyTvg223Y6pMG1ucmvHDY4Hg1nPDPMVk6ffYYP9L36dT9ZKSWugyeVtDq5fvnErb",
  "key19": "pyDm2VMRX4bA1tbBZ2LLRHsJn45dvFRQhuS6AJbZzZLAWb5cu8fw83RCGKT4JCac35MvxHR2J7qKKGKFVFoygFx",
  "key20": "4dLP2KyYrFFZidb8SgXkudjLRMRx9GUAr3gDeukAAQj5CcG3Rhat2AKyDep5M6GGsCP2zKecd6byNaUiefVn6B2",
  "key21": "63xQDd8oJd8tsSc48A43dCnR2kkV2VVsyhCXRGVgNpC7oxPNaa7yww57ijem9E2WT6e83hFd1DMbrcdbLUN3C8YB",
  "key22": "3yuLyRaYhJGQz7qnUeN7TQ9qnGbrWUjGYengApCLtGTs22yemgi7Th7TnmhuAkQCSz1srKGC5aYTCpP8oQAfRk5S",
  "key23": "2b2TQQ6BtScecCSNesoFNfXC37MQhUfioQykiME1pdefhVz7RqSfQKk9x9zLd9jhELiQGVUDteqE7PjNcTFqZdrD",
  "key24": "4TJ3ZKEQNdvbzisueJCy4VUfVgDjfKrtDeVi7gsvF4FV2453oDc46wg52wKdr1TANdgRbes2p3uS5sn4ymwr9f1m",
  "key25": "g2FjrGFdBUTrkovJQGrP1A5fRCB3FwV5nvjLjYt7uHHBAD7XmMufw9s6QoSEyxjeZeoX9bC3pnBPXm4Yxp42c5X",
  "key26": "XPHZqv9gcc59wiBQoMEWaJZA7BwSt66GnLz3vKoNmRBaScabdexkuu8QzD5mTvcEh39D5Mh6rLMHa2QAYixQHKz",
  "key27": "6JFR5m7KgeFH1sKtrhcYLKngXaTzEkRKNWLuVcpK3fFJDekSBJqkhWMY8suquhQ5WqsSC7EcJBEudXgQUjM2fLQ",
  "key28": "64msjuguqmTjbwQHag68tS2LKGgiEH1HrxKRjp8LfE4pVn7B7Eik31bJ9nBZu8UTkadyTcS9C6LGomQbWhXjdH5t",
  "key29": "36JsGvNmybK74xHgqwfrgzwH8BorAJ8xnU8FCdkVE9Mauhv4be4LmrJmzMFUSg4pCaGq7WLyX4YpxEv34oxn6HM2",
  "key30": "AJd19VnzaPGXH9sY8WnNopZvGfqSEfwfYHfTLqwgyiGyanwdysNbqkJSFLA527bdjjVPMdLjN2Aum6ApbYS7DEK",
  "key31": "5oNkyRfJXkungG6mCqPvYBbu5Lxxpj2s542EpJCUsk5SXsZ18FA39FE5sDkbmCnTipkUkN3PEJQPxwCXTxyL9b5v",
  "key32": "5tGfGs1vK7uNjMNmGt2QyLQXXiagBLtX7dHA1sRSiTzvC72xA2Ku2jm7w6ipaPkpQfEwSzeWPwBUc7vUEh1uPxFf",
  "key33": "4MtBv6GwfEKpn6WT3ecUArDTuxYi7ckL79L5oFmsBXFBw9q8wCgmpW8ZpSLKpbNdBy8xQACj5s1hF7vAeQTbusWy",
  "key34": "5UT3gFfHesgqVnaVYfHUm2ybnsyHkzWE7GJcpymEKLAgKReqLf5eQMJo9WRzD858rnEMRpDT4kLgnXQ1Jph59qGR",
  "key35": "2ffCz9wkeXgJQp6pXXKMdHjwXZ4TggAoiv5EGEvgqBAFYNPWsweKEsyUYZqXdZq1vrSGu3a6rzrgh5CCKKhDtygf",
  "key36": "TN2tfDXFv3CcNKbgjNRnZ3455vWYPve7xfCUsNbhKNgGs7BY8JV1h28UBzN19Fn91cLtVVAYasiSxQxegwjhbwe"
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
