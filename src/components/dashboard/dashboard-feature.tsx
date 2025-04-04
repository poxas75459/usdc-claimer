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
    "szwWa5Md8iPHyKq7bh8WxqE6vogj2n1YbtpXFK9pS4GHVCAsgSqc5BgMun5v37MhbHbCEFrscQw9nEpijCbrZCR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AAakxsPSSYyeNkKwmXbZ7pikyamdroMcUCBJisiV2C7s5NfWQpCWgssccNTJYRTtWfpLt2Df696zFQnce2wTQv2",
  "key1": "3pqyuVcxjrYf6XFXj1pFtQwtK2uHdzEzYu4G6kKCLmMGL9DnjgJ2hqGsd4f5F4wGqZgnYzjuBG3mrG4UKrRriVRM",
  "key2": "5t5FegZMhLwATt9icfpUGb6u9vaUGqikZGchze3VGGxZVdWMJEstWDPoEwXsUjF1Bwwakq1jy5ykRGsxV9Tjg5sZ",
  "key3": "2rsMzKd8tcyZoKVvMwbYhMYVyRpCojyKYNtPBhXSq3LEuKnYMo74bw1t3qL274NUUnYtMrGvgpn8RBEHutCCzr5F",
  "key4": "4EczucCKjGLae41DrpBEjBgBvjBWzyCAvwnJ2NkqbVjyUmrYqHxtPmm1r9Ndg1RinWdsMMjmHZB4NaPMybkjcAz3",
  "key5": "4gfYudY79Q3517rnFgH242AsDBQUj3TZp6f9MfjbsSCwJ2nrTQZLPeU44tcjS6BiofRMFnVdPt1YsRor8xH6NneS",
  "key6": "4MxvcENLMWG4xUfyF9ZXh24ZhYsQh5Qdn3ugehsXpDndLBwkojsjqCxJqXs56uhTPPvJsJZg2Udxx4GvGx9vqfoo",
  "key7": "3mWFNa8mJudK2aRVBPhdGjhUWAdUDvy3Qg6Go3e5XBvR9A5Sz84AJvgRZ7qJCWLvTRfe35cUvY65Qf9QAzeBUE1w",
  "key8": "4Ci5KzwxB8ByqKqixWYwzT48wpFA3NapcDoKjVj8fswxEKD3vAQEpRxEyTB34k7Yytg7sAbzD7abBadsVabcyiuu",
  "key9": "4gbezWd3Pta6zuy5YiRGKVFxKAKzgD4YhrcJqN6oTAwxeMzsMHf5SDRHY9gaZmJSQrnBhfzB2EhDT8Z5xBRFDBCs",
  "key10": "2iE17SJ4HBmcryXt2N1hFFZxn8eNeMxvuxm7oxfzhG74WzxJtSwsGxCbNGUNxijxvN4qRoi27q5xTjt3DDhUakjK",
  "key11": "5XPtz2tG5hFTP4CTN7ySpG66fAmXr4kVncJCRyFnCvaLAidjknkCMssuwnsqjqWsFmZSH3xndTBpWMMw7w1kGM2H",
  "key12": "4Wx3hvgQaQdKkSmWCCY4P94Ajj3tMk7zoEXvX6qrhUDuiYKgsPMXYoU7RsknHx2XFkPLT6VVQyCBy1TY9ja6WwGg",
  "key13": "31JJgcKFGPSKEqsLmd6GyavrLW39Q6aCQuccKpSp27Rs3k8NN5Ht1SJx8NjVJoHaxYgbS21xbVNrHqkrSsgbcGEd",
  "key14": "321KmhhXVzF55TjmwPnZwKbGrJnApEmxhAc8Lz5p1h6pE2bsB1wNiJSWYyM7TFjxDXtcNoyvkDj5vbTZDtRLcyh3",
  "key15": "2RqfvxbBu4BjYRYoXdG77nANHK1oipziT87iqougaVSrRXrDjzBdfuTFuN7D7x1iJv175QpqwM9Ty9tmrwjnPWCt",
  "key16": "5aqJ2XnAJUjyjbDQob89WQs4ZeFLS2461wpNvVpH1jrBquC3LL2n7ffeppHxDkMAnTyFyW5B8LU9K29fKhXpefJ3",
  "key17": "5STuSghu14NAomG1j9p5QgtHmutZprFsi11mLEpV5fBMxxTkUR2PzEGjaV8JRdPYYi3MPigpKPL7hukhgCDhS16x",
  "key18": "3jfDnwSMMXEKGeC58CWAXddywzAvebwzVaTdf3AhzfqMGKqwmkvKJFdN8oaECe7t15niJ3dkv7Dji3ZLfU7j6WWr",
  "key19": "4E12U9N9AkEGwBLrdwCbuH6NaQExYZHCGDSudcpvL14o81L5rTcQtmBBkBhty2iRPYbf47FUAesuj3uKKF9hdS1x",
  "key20": "5dF37R1S1LE8yAtVvWw8hruH3KfqxAy6AumyuL7pEsYnJ7Wa4TGFcJ6fhu5YcHMdGMNoFn3V7p3618vCTtWXqomh",
  "key21": "4btwvjgaSGSkoHWkKWBpH8Sr3XpAw4qUbQw29Cs7d3fcmFKdrggExYjhw2RkZkpseKVdhQayUpzLoTFJDj8sTeEa",
  "key22": "cwg7RtmPV3paMs8bh8P4a6QBX4VfrzBQQ3p6zBHkQDqoN75bmGVMDKs8F8MYvMawN5jRZ376ugVXW8KPsutjf7F",
  "key23": "3xWCWUCMkhnpT7cjQzTNJRBGCYUCHN4ipcr9cezUD3iZXy2j5CshZETS9GovtxzTSFJkYSajyQQknxYwm6f6sMRJ",
  "key24": "zLsDeyLt9gM8FR2CPrByijtVBAA3YfKRMp2CX8ZhqAfaXrcnD7RXdpf1CbZJwmVDnxk4uxj6rV4EJsz3ZUx9sjT",
  "key25": "3DDRQFpyeRPs9zt5Rz1zDzKyYY68j6wVQgDi5KBxBwTMHwqV4Jj8HCBhUYmM6yx5AG3MmnybVX4yqhETd8TG5BeV",
  "key26": "3TGUab44P1mKxuUYqsrSGQrdUYBqLpj7CePm2XyaUn7vxzVqntBBwoMBtKkNm4AjENBzaBfRkk7F3ags14JM4xMS",
  "key27": "2XRwPuqoYGv1jVunGFkcgTXSUURgMdXbz4hbmcNWgCPgxzBybUgm1frN4c82JdmAU9sosu48raEKTf5pc2RwBfGB",
  "key28": "4tY3cSpE7inQvx1ZF8mwioGeHgpBKniGSt51XVzDQpi1kUBByPzNBdXhNDYvrCbfkPbuVSfxApFvgkMGDGXJkXFa",
  "key29": "2c1SocoyZ6tXVQgyzcZj37i75V79bqb7xStBxP2UUJEojZ35Q9XHeRWSW3xwcvcyj3vVDjJeBiEPDXCPAJVBZyku",
  "key30": "ZXXk7JeUKDzqZRyNrwAdiHCXWMLyCpBrADvtMEppm8om5pswm7GAsm8d7UFiKH1eMQ3WnEJLpwDTdkst4J95XSv",
  "key31": "5zP7iFm3dhsiFV8KiLfb6wjFTjCuYefmcFvPwrQGcLjFeXDHxsLFJNYJxv6UM7AD46K8xRZmEZCk3CWzyyfWvypQ",
  "key32": "3PG17M9nDwzgLXgh7eeoSNMhEQZmjgHHCY6nJVB8dxEmQLmYsgsVxBhCeiUCtk53UUfu2iXhZ7X6FcBumunBzFVk",
  "key33": "4FfbkZxgwzTdv1PQnDgcKBJcCCG8UybRpULquupvgJsHWC6MLK5xqYyMZFDbyKEGWBkJGRrVVGVozDM2XCpoyjsU",
  "key34": "2BU8fP8WZJkyywRn3TX3MYGpiQhUMtcGAenTP9EkZRj9mNyB1GvxfQpkgjyVQNsYh1smCUJcr6yJeLdK3B17bgee",
  "key35": "4VUoCtD8K9svFSxX7gbAuG5pYrdWHnAdoSsaADcCwaBPa4SSbbeXtiFqZYsURMguRhmZ8etGTmBHQD4Zjo3vNogx",
  "key36": "2REx8AUHVpTkJ6h6tpiPoWN7HXf7A31SqzZiSHSpHPXxPcaYsLiReQXEsQJF9XPMdCS7qxxdm5oQwekRoTyLkLco",
  "key37": "2n7yxeRgkjam9GJXsWfEx9tHRQa9JEBSgVNGgxyk1WeXrBQyWGejXBPPKkyXF9NMySJ26UHnwxrgbVt9L3UE8Z8F",
  "key38": "4kzi6RFMtw8u51STmgBcdexpDuYHz8pU4VeaYwjn61E6WCdazjPgmDeokVthq1iKBpEKTLJzWKKxF34Xmy56HS89",
  "key39": "4Y5QNUCAPgNCWMWFVUvZ75MTbtaXwspjdg2Nqydy6J5J7aGbnpuPZG6X3j9mtnJ5yc34LdCyBpKwdXgGvAaU1CA2",
  "key40": "1ixcpEJRGi4K4mzru26EuYMxvchd8X7NDUB2zGaEvv1QhVezhC81dcC8uTpDk5uc8wo2N3JyyJ8P8DxHjzWiu5X",
  "key41": "3Df5521j318CDUQ43WC297tkUGYQ37uT26f4KhmKaTf2EQ2HQ2MB1VyJZWJQbyyXF4gxnidoWB5ySxBPhYxPgnRG",
  "key42": "2rzXrYsW4Qr3c2VPvaWsZdHv5vkQ8XNNYxA9tvv7sFZY1d24AEtdQGJc8saKGg8ZQej8i34JbuCLKmAMiJVhCmDe"
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
