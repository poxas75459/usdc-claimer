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
    "2HLrZoCpoMrYL3MmpdZbm3JHjqAr2i6eGJuwYa1eS8VHfVovZAKuw3Zfp49AM5GDitWUpqLzPL74V4UdPm9k6ULL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Nvfm1VdbSyDo9FHosy1MpreneoZgxJ2eF86tjCeHCMgwUha6pu38neUJq1nFwacEAgdokMz8up16BrFaNTMjbUX",
  "key1": "2wCczdJVsMC7hvzLjRRcHG1cnYZW42HUNXR7sRWzhBY7RoEC2MWZNRshfj7M2njGfGS3JHFRWrFt7smbvf7p5kYS",
  "key2": "2CGxdbJgAQnPaDr6UuHNJxkjHGDRQMFej95rCtqmBBtDV6bT1ECcGfG2q5tjvrQSr3eRo9AgHQPWJXqqexjg5ynj",
  "key3": "AwiDpti2h5bp23j2P7oQtMT262cdyUDdDWFoE8A9kmw13dPXoR3oqc17GL9egxax1KFXSdWjKNVehPuAGnTh1KB",
  "key4": "zSAsKr1LWVHjrtN1KM48t2ETx7gmm7tN9q2mT3Xhyk1SUgKALKykqPvhXtA5RCRNfFpKToTzxsYPiT3PkjcCb5S",
  "key5": "4QWR6WSrBW3iA9qM6gFmKVW9DzNXoHTF5n1JHNHsHCDSDvkA6CdRGechTy3fv7EgqGPNzGmj8cWuLzRZdQdZWVRD",
  "key6": "3HZhMf1iLcb89tn2KFP9hgz4v7kTcSdvD6Qevzd3We3myxqakbmaY6hDUN8UWQ7oLR1dseYE9oUyWXwrxkFhDRA3",
  "key7": "BtZADQvKEupsmhmyTSn1zHzZjQbo2cYBAME2fwDmKJCESv9pJoKEYZvJeQCs55X6vpWdiHXacUgrAFttxtrgbGf",
  "key8": "4BDw11iZEcQqyrQ5hqW31oA2YBTFEMeSmMDZ8ZkRm9HK9oS9vy1Pt1Yxm1GKGg6MLh344772oxBCAshnCPhjftDi",
  "key9": "2tRVNAb8cQZ3iKHn5ZxdX9G2jmxNC6dQtkzvzYckqcYAnfQLCneVMofqinYb9kmtUK4gieNCw6peVYwwXeGc1fKs",
  "key10": "4DJ7Fx6k3DSKa2TfbedyzbAq4K5PVSRNG7JHT7gXsBsRidwVJwBTnFJjfEHEF8ddWGbgzHBXuei3dffB8uUozrD8",
  "key11": "3i9UsrjwCEr89WMoN9BbdbrTyxWcMbnPjyJ93ZjrqQbFCntY9wEGuM7DorgRBA4sLha9UehWsQA4S61bQ8JEW9uS",
  "key12": "2zo8hTunaeaMpWZQqtTeMeZVrq3NbEQnKrw8ch2F7nmTfDR1N3QGps99dNuN6CoY6rnJa7TFCU6x2t8nxAajTinJ",
  "key13": "fGESCpWSRMfqQ44HC9g2dkDR7fatH46ccwLtVvDuEY42hXhVwLyQREGzcAwGCkykZAkG6QmTPHEndhEqUMi6t4k",
  "key14": "hxKwDkCnKV9FqJjfWhFsFYbN1bYKK5b497JKpLXuRjR59X92qCrcASfCgivtx8E63Y4cs7PoctUpGmfsQXR2yr6",
  "key15": "22ks1wAYeoUAQwCM5iRbnXMGsGHez6x5bcWk9LwgRqHW6pUJSbz5ytzJjZHzoY1AEbs5GwSkwCyxus3sXdLMZXcd",
  "key16": "2F7ADFPVixZaiAhKKEhGoJWqXJV9FctVs2MWMeXnhxRAoxAnwpWzDnczmF3P2GD6kdEPQvzn8KMVQVsgtmN2gaCw",
  "key17": "4gujBN8CqC6UcgZFhfoJn124cr7ToqGJxQQDZ9kszJVSwgsqzqabJCgZfsSHSUbt5v3at9UQvuzoSxDBTJshqJxj",
  "key18": "5JYCDiFk75aLqdoiu3ozpyvs1f57BVLuTyRfqE9Q5mSZt4GVPamaz4S6XXbQHXkuoewT9WacAcZtUFfPrMsQxd5N",
  "key19": "5dYzCgUbYKubeuW2vEFZcwWy5y3fU2dJMUrvun7ZGbx1DWXHSB7k8TSwP2sc4jyMYACKVyPCfkUJb6yjnHCDDXc2",
  "key20": "31HXsb4dHavuPhnuYgUgpkBqM1fe84bsXRYGVVj3SsfqY7RAEDCGXYaLFmsMYZDtWN8rxcdMUuqhBBQKEvsT4HoM",
  "key21": "2pwPRNKQgm63QcNaX6wRUY8hnFDe51BizSZ38xgu6tfV8ksKtWC3sB351pPrNHv3NyGjYHFsiGzmDoNAy9wepKrT",
  "key22": "4iHSwRYjzhdKgn4X3TXD3qjpv6Qr4sTfkX8jqtrq7F8CoaXdmjBDXc6cMm9m2ckKpzVRjZuACMpTjbuwNhVV5oRK",
  "key23": "2ohVnAnNDqprvi98HX4RjUeHLuSVhmbBwag2QrHTcadVcpYvmvv4KZ2do6yj1fG8SZU8bchUD6dZq2oG5v4W5dam",
  "key24": "44mpBpBAE3dUqhT8PdxwZjyg4dPpPa7V7KBbQ53JfwAdkjH6n4kENhuPdvuvmf8vFcPzS5pcCXcbXCXjcsuteCoR",
  "key25": "3SiT3VEFsj52TgujZHEMkNQ7YXdACNeMtdHpEoTgGfrG2jEc6mwnz5bFnMnKcf4TraKygQCCUCpViEzZrtHdMNLe",
  "key26": "3rcQ9nMY4V2uVFbKuaC24G57AMbXnczjgHB8sWU1z4SUvMCL5NteD7MW1mT1DVrNGPtWoEaTzTvLscnKsGTAQno7",
  "key27": "4B8wA8zY1Q91c3ggNCyGzgA19nB2JxdDjyr7DzA7pFuYsmrvXbKvSESLkuMrKK3M88ymAY4WkGqpnaHwBzCS1PSh",
  "key28": "5yFPurZo4fCbgPuwy2eVC9t7wkxSVJHUtS97btHsoKXc3UVa7jYgVoAJRcMmykfTV732iN8PFM4pLwCY3VUjdZ9x",
  "key29": "2BYmDrjTrACyRGTFmnodp63gE2JWG5PUjrNVHMRWhWfcyEKua82ftddCHmphnAaBVXa5XiSwrWybfPnS8dAfE5LB",
  "key30": "3LKcZ5XrBRbsiQyELQKYgUh1Pj7fLDjMpzWhQfxoFbtNBiniQE9CJZTDinQ27NvCRbvYiv148g7RbnWZPoEpN4C6",
  "key31": "5JpKdHqWFaJBnQQ53pfUSw3rPJskA5KacGdhusr7PhzoeNr8AQHJJUg3HmkdjKVyVRBoKsBCMBxXvXVDefBv73dp",
  "key32": "4Ep3cbeHV8FpgzmxYRqq4Sw5Vj7LtdMtcKMkmRs65We1fh38ATsHt9BtoiKVkrL88jA8Ycq6fiCy3b15M27TQEG7",
  "key33": "tEMbg7Jim3HBPwrnh27zR1aDga1i2KAwrcNpKVHr7w6WXkFcHuzCCi1pNgiSRzZyEZQbot4UcjVBVeNLuoSuu4L",
  "key34": "SB2TcZ8YZVcCLUgj4meswBK75thSdQvs5FyFo91JrVsgJtDosy6hBK4YjnE9jCkf9s9MFVFzZtcgkJbrenQFCj3",
  "key35": "2dYJM1oPThXHUvYSvofNwHc8vwf4ByZBYU4Gi4T6QSsFKvcVBduePwLiCUZSX9CRWGkxvZLJYtoxhzKAJQZ5nfJX",
  "key36": "4YHXvcBvJtvw5HTUTrsj2iecwzRC2PfavGQEdCbpT2x5181iKX5mgU8wCWZ51f1PqFTywMtN34YyQhFq8VUAhe41",
  "key37": "3z8eEsxxvKSApptzYPABzE7nqwtwCjv1Tsk4At77AJaKhWXv7nwjmMu25K4eXttxEhLYQftZPkBLj1nNP4diAchW",
  "key38": "NnJRVRpTPM6GjRqaEmNLvNrhM3ztbyRdDsXX1koE9gNrit4ggwWAv7hPX6or4JpPWc9mRqL5Kr5KDxg6ptLqv2m",
  "key39": "2AgHkP2JFnLzSBR7nNhDkctmHVauRkjSSQ1wnm6TvbKZuuuFpaPiyv5zAWxtiKuLEveC1k3VbF3tWBNUU2XKi9fd"
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
