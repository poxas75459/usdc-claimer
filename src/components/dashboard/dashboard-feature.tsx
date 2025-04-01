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
    "39FfH6QPUDXG2bSGwAW199RwfGeLeHe2rRpChqsbJnbReUEfMMV6Ejgr9MJcuB6diEHVwH38EjG224AubMr1Foyq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26AWhpVucGfRsGecWdx2aBMguKa6J3Pd7mfZyK89MaA2n9q2CTBtxEKt4xpecs59p8HZqRSyF4wfiwtCF67ar2BC",
  "key1": "3hcR7A31NBZx1N7ayLzbVPyZgeEeob8yqr6FgGSZsygNKJ5kRGtde2ra2vA4iQaw6JoL88AVeFnAU2mD3LDStAGq",
  "key2": "kUfiwuFPCJCP4rgtniAceQ8cSNwTP1kgKPoNjiJRNYPBwYCcAJioWtumAd7zbHUH8tEahgJNkC7RGGujtVwttDq",
  "key3": "xXLKeoJkm6Ly6cV3urJtaMadxkMphF993mx5mgbPBhZGqXi9dwutx15v7M2n6dh24i8svugci1JG2pXJdi5svqM",
  "key4": "5Dau819AvvU9NtbwbYjsB73wn8j7NQipivaFX71ph2CgvdjFPycTDaNZkzLt55s1NVwa4QNkTAQbZQL1s6jkszin",
  "key5": "4vUF41fxq2rdC9iZVvo5DTSndHGSVuaYK2hReHqf9w3hdwMHBz7pNAzK8nqp6jFigo16Y47RUj88FP5q8KJ14vHu",
  "key6": "2u6QttVkNsfAuVVpryUwxkoeDwQ6k16aB6Yzo1NeJNHmRsdCjiFkMzBUeCx6hZqfMdPcnekw9yViQ77e7Pd8Nrkt",
  "key7": "3XKJSkN9WsSwXuTkZAzLbWaWV2QEhTVCBTbmqwGE3poJgnaSw6b38dqc7hYQXhtFPYv82oyDiEWNXjuX8DY8bBV",
  "key8": "58YbcWYEierhbVVcksFFP1BQfjtZeEKPpKrn8ZSMattnCSpoijAvbSU9eMAeLNZPwp5fZMUNM9rRWwz9PJgdc8jJ",
  "key9": "2ghMHQsQjQwU3GEKxmMAP6pAH4i5ALhBBSByZWxGbABRkMJjCHsKwsphnD3AiqT2Qasq3hHfZ4fns3RgxXgpCzsW",
  "key10": "2DEETiYVsgM19yL85mYjgnfKrR4EXDsGN6EfhekCYhC3ZCwSbG5G9HnPHo9DuKxDStbPdqTW5G3A5UMYVZqHCU2m",
  "key11": "2NZbdY93ciTm4cEy89risWBjzzGUBQSH5MjV3E8t8A21fungKk6vTMceqD9E4XfXCYQbYHFgpNk6Jxocj1gH4PSG",
  "key12": "3SLvqSoEDixbdCeBnPYFXabxa3HJrfyHsPVN3CbR44gKQKWjthtcZgBGsXiKasYip16cmvftspcHQBezb7yjAc1E",
  "key13": "5BzH3TupZpjc6RYuaRrrUGBAKQjwzV5H6npf8Bp8bzMTzme2dfyZyc5XA9UREBGRkUMNohLpuwx3sSmJiqVJ9LQC",
  "key14": "4wo6RU3H8n4bPMoRazRrrxosK5999L4un8szG7i1dXvQnduLQ6UCAFskmfNR4M9rsetoSKtEVCAGrv3jrRghkmjF",
  "key15": "uEvYZcFEiKH8huM5PrpTYoPa4n3mD51LBXEKLM4NELmbLdjeoRAh2o9SpVHyGeF8baHiJcYjG2evfWhZ948WkmZ",
  "key16": "5uLXgRKEXbgtdokeTbz1CY1ogNfbGJ5BYX2hqbHfAb5gFkde5KXFqkCxrCgN4e8Ftx2rB4ZiTKbDRiwzF5UrJ2s6",
  "key17": "516xn5QANh1fzAf5waaaGSeV7B6aUxQx6W8YPsXpuQHvRFeLDZhPKv3236mQSzcsoykB4vQmmeuC7XhNmUd24tqM",
  "key18": "5NkMhmnHSkznGkqtxaPkQSsGX2EAPcLVYfLSCbh9sGEeFErbxKCfBKzARDdcKAiHnb9otBF92GkY3f8WZ3hFj8jV",
  "key19": "46DGmN974LY1nyWswTN8Dhn5dSzW6hnDLCToPnvgLK5Mtyp59g5fraZ5fWzMvrnpviW1GDUbM1ok7jeSR63WDeoL",
  "key20": "2vNnKUfduNnA87Unh6AVsDDyLzPCeAXFYaXbkn34g1Yt2m4AhhTdpNbfXC3n5hKgxn6THJoGu93sYqNjFn39Viot",
  "key21": "LDW4thYWBREYrZmthmX8hKLu1yDUgX4itpTZpbUjLnAnqrQW1ZqJBA52pA48fskdhYJ2wbobmyv6jdQ4RDc3x1N",
  "key22": "4ywXoZHrezc8QA4X2feypF5z4AQr2yfcp6zgv6EKipr27dEgoz11dv8GTGv63fznmYkX4KHGf9p8aLmMH7BaKQ94",
  "key23": "xc5ocn3G7p2YpVGhfgd6CtxVxqzGsG9YeQZQgvzahMHVjA17nYJrCFoeg8TYwsFTxhxtoHR4xABayT9ALPHGpuv",
  "key24": "8axp5XVFz4G9YKm3AZGASNJNggmHkc6JUQN91if52XarzGXsvVoRnSSckv8HKrhy3Wqmze7T3EGTmqJD72qYnxo",
  "key25": "2eEPZbsQUkuggq7EFRTksqVoZyqkp2qKrNboW1GSL61uNTfLzEHrr9W5sbvQicUpa8GKFtTEswCsfZQzf5PSVwbc",
  "key26": "48tDxmmM7pmahSoscuSUWYapkiMafCTccssPX2kuVe7Si2aLvqmjLnbCP9x5y1SVoQahLdmUJiVCoTmXeguKprR4",
  "key27": "3Uz83G51BsQKWfAHFQ5u7XkFeMfSJh7yJuzr14uFHBGt1g7aUK61xuSWtKRM4dv6yQLrGc34Mk361YXugiCSh8j3",
  "key28": "2tvfiVt5B7U3zVXddEexrNK5EJvxF2a7zuHCU3o7uFZFt3165rrudxcrfa7SQehNvxHfLg4Qh3EJoeBynAdpUcPj",
  "key29": "4wkVj3eUG1dL7UL6Fm4kDavo2BXXLaZt5a78J4MqLp6f5t7pKGGfG3mgsekuBtSdAGqdRVNWTGDWFig4P2KnG2oS",
  "key30": "2f2iutsWYv7jzGXsZhco9vpP2bWXKKbSpHMeBHkW4dU8gibroXBDsyi9actfHGhDXpfoZW6MxpGiZHjL6jqiSuvN",
  "key31": "5kryA3QKPwSmNtE5E5mZRcQwhzztJvSUCGm5UkYWsGBYn78egpAjn7nykeZzMioMtxrU2DTCc6JZvBAkAmXCnNZh",
  "key32": "55PiPocrMDdR77ef8UPgdij5WXbkoZ3kDkMixARQ6FAAHL3sM9wem5LzvE8uVjnPdP8rpmLDH6C3NpT4FGmFL2f5",
  "key33": "4oasYsuHmgn3DYZ7n4D1RTkJpcBzwzPzfvFf9JXbYzc5dYu61nx4az46F4XKmvPmYh58FDg6fxmdpjtMDYqg9iuX",
  "key34": "bMc2TcZXkbQDSAsVu3SFW1ofLnBv7heyzvZWqckwTcpoxLMzSizpVTLU6g5RPAHbPpRr9WAx91wqXNCj5VvfmkT",
  "key35": "2z41a4ynVpEZMWDVHHvpXU3fXez7fTiBj47aCPVNo9ybZSEANjUnBoKRu9DDXfcWZR3BdwLVYYbuznZjrm44NxgA",
  "key36": "5FEDtHnKsqneCP8nnLMHrxmN7hyuM4DbRsxFW8mBTQxUzgiz9DZxBtwrpr1BE156Ers87QwbPAtcUrvN9NaP7r5n",
  "key37": "3sDMVpdHAD9TTCwCb7HFUiomSPHUo62NWL8Ye5NvndjvY86BeiWMwVRUx8x1TFJdUpbxwqeS2wpGL1ueRUJCJveZ",
  "key38": "5BtYa5evug1bcE6eAXYFTiz2irNnuAusNgggEeXj4VN7hJwCwZv4MuvVvyNh1aNkNeEgaaYL11qFgr9SWURvkXtx",
  "key39": "2ofJD6c7D9sx3kAwrnd7Mjk1qok4B9BgHuwV3BD4tatCWPzumkchJgqCUcK2oavLPa34zcEnYqhfB4T22RQAop92",
  "key40": "5XPcPa8R7kaU94qyGdXb8bh69E3bQDKvvdc8GDe8EBuPJY6JvCNqLdPyczVvjmVUwfo2Ka3WDLbDdFsHrAqV2818",
  "key41": "4thrWkf8dpBNGgLXVNuH3JudZKumXRmn9XbDKzmzyVNL8c82rvpsqty3BjEuo6mfakXbvnyMAYkSsfXQhqFPRSSS"
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
