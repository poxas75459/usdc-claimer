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
    "5X4sRFxK9DY6f4iYmLcpZtvxf1jB2QTSxv8EtJzfBhEUiuo7eS2ZidAusPoPNnR54qq2frSdcXp5UpCCGXafLUGC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kBR3HvhuDjC9zYjFQURxJV4w3mN4ACW9CNVnjMioFkKwD6JnVkzi4oDdjLTq6StrpTQUF6DA3F4ZWHUzCQJeJF4",
  "key1": "5v3RFUhqMhkR9nFkU9TKD1t1nA2ZpqerrncMwwsJpyxVrzV42tFqArNSoSt1iofpTCcMbueTREbMwQRo4G98wBU5",
  "key2": "67WVZgwyeM6UxvrEo4HcruAdZPH5K3cLUxjGv1ZxAsP5AQyfwNfYiVDJqVfc3gd2kuVwarz5EhmAYTogHTFpVVzo",
  "key3": "2TTycbTDGcMXBbKVeEXwgzauySjzcNtBkTUUc2ydKq4HGMKZ7RzaKZAQtmzy2aLdXdDEAiX6SGSwVbioUzmG94vH",
  "key4": "2QcA7vxEYbcXwr61vXYXbU1AbpcnQUJZxBCS2cxPpDTda7JHLQzFUQKd3MBteEM5qB1nBUsnzzwEMYMbjn7peR6C",
  "key5": "5LbFLA4uCHHfX2Ydc4Y4GRJxqKgmnUnRqpkxsE4XjQpiTNpLtp2PF2gPNFLH4kotbN5sJDkPayycNjWwL4SCix3i",
  "key6": "3o2f26e6F8JcnFnsoaacmAXYYHZy3RvP7oGSrkZZxvQjz7TgHLwzAMnYdZoEuuRPCuxmzKrmEys4eFyC2PzrNknN",
  "key7": "imHbFPaLz3tyvy3ePrUXETwMG3hDQH3unou7S1zPViPW5i4r9873LGnpupKYLgn5jM4SNLYcMPPsBjVY4u1eoyC",
  "key8": "3yf2HDjPjmTBxNPbB9XWHZywxGMUW8CG8PgNnFDHcSwD3wjNEYqbfHQZ92PLEKWRWEk72SHz6KGFP6XH6an3Awco",
  "key9": "SUafggZr4nSomuGA52hWLmok1NDqvUQ4Sz5ABUBriRxm74TDakUm5qtju4tMgeR7dGoM4EyGFb5XCMtbErTr3kD",
  "key10": "u5q8ZypYMwbm5tejQv2p5SRJozPxL7D5rNN6oTyeLkS4un5t2vXoVXGjU2t53KooYtZwmjFbn9igAyrVFkRyoLP",
  "key11": "4K3TU778YYYZeB1b9JxxXVe4Ee4iy3HQrfEG169a3fr8gYRt3ntdk7do7nKmaRwyXocTysE8KR5QcF5BJtiucvk6",
  "key12": "2mv9DtXbKrBBvLoWuimYm2ptmcFaNqm4uB5q6eKik8u4HrFhWffbmEBnuxiYsPo9KYAAdMJPN7suzG8k3raWvoGX",
  "key13": "TWyX1ucotkiE8N3pZnYt1sq256o8hFZzVxqpfHz93wfBCX8PfKmaH5QkvawCKWQgVBmAGWXSugUJpSx6qWXQmuy",
  "key14": "52sD3hdYGWEpvPR325ggd5Pf7jQyxQv9YKuBwD4BRYrqa2JPzooYSrhxDxjYCUTk4qG1hWhkqH8uMsBsyNE5h9Su",
  "key15": "339oZWiWxub6c4AUfujjWE8cPJWbHhxA3mbopHg599ogHZ6NbUwgbLSU2EhvQVXfqkJH6G9do7tej3aViVePAmP6",
  "key16": "wLaJ5bB3U74Qd2grHy49JurXRG2sMsUFJtZrAAwj1maABr6uzNWXNESjnX5WKDgwA7mXPniiDn1w8yqaeYGstZR",
  "key17": "5gAm4pF6Eiq4ucv577FEEcZfdSMwfqgvDDm6WXPFSJnuXE6zVgM1nQgJzWWpUgedWjtESnny2ibN7HBop4CDKezo",
  "key18": "2NFnYt3tz3w9D1iUph2vYN9Q9X3uPxhgVpWnHGC8Jxv7a7hwvhGASFRpVVM3umR2wP5U2PmKS1B5zRPc8pPn6ZN2",
  "key19": "289w9kjwzS19uwnxs5qv9D9HeaoS6tgyzYipLMpGWnJMLHrzq3g3yXcRptEjDZPbJvzJvGCNK1BqsdRmuh93mVuX",
  "key20": "2rtbUQ1Bw7FFMX7B9HhNuXZy83MXNsvm3s8B3R1ZZEQPzNiojFGTy5nhHkR5JJDCbEMkEJZiviHMdSzU8T8zRkwv",
  "key21": "37pqQXQh5hpsUq44birDjw5tzdMK4FV6v39tK3RJEJtdxWbwWdTjBDsjdzs7zagAVCmPQ7EBewyWTck9yDsdVp6d",
  "key22": "5YBwUEM3HPKSjaCmZGS6MjaMA4QHEsUwuykHidUFN1Tsk6JrqaHb496db76FgEudEDMgJEcWUFK9d1RjQmEWMtav",
  "key23": "4Ln4PdRPgJLcG5Tign7f5XcKkthhFFDv13UGrFoYcKUZ2U1e5x6XvvPrXZFxVTEZrWdotVkHNYY4wuxba3R51npw",
  "key24": "4t24rGvH3SR9vcvy7ghcXqiu2d6ewaLHyH91bbSQKeWsdzMwhu7S852UdoPCCK3DWrzuz5gqHCgEN3zRHvgw7EHi",
  "key25": "5nhgxdZNVWGTk54jSb11THoXQ7i8RnCLunpyLXCC8EWbHY57HcGNzbW1XJ8DMzvQ3B95j82toagYGcgj44LMmEoy",
  "key26": "2ZCWvjE1eJZipPgaMVyGNtBPDmdNCKVQVkncF3LeEX5mmQv6mvBgq166raX39qzG1duXdjuZxXHX8WzX6eyZPaZV",
  "key27": "2W4ko7Q9vfwq6jW1crdfKiN41QbUQc5CZ53KXGKdP8CSp2ERHHSkqG8jSLfWra2FVRnBe9fiB1cNLgT2qHkbEWZR",
  "key28": "4WRj2bfa2hUfg9L1vh1JAXmsuFJQh72FVDQWk7TWaVVfz7qqQEUVQUphU9DjNbUtmRdX6yZ6U85xkAckG4npogYS",
  "key29": "3UxiTxaDyWbiPG3qoSn8Hr6usSNBQDvB3SYzjVXct7ubzcVpC12o1jnBPe5CAhXLyubbUUKLsGGzmNwgdhvLpX31",
  "key30": "4VTNG4p6DCABsZZxPpfGyUC6YYRatmiH1U2QPzvhM5A2VGWJtAMtoioqwSC7NVzdBu5osza4XQtTkZL7xHmv877F",
  "key31": "5MRA6x9RJed75EWWfPmmvgwjUgyczied8t6dHgrGzyuBGnuEWyw16CXaGuJjyMWeX2rqgFEjzBwhgQXZZjGe73v4",
  "key32": "5YNgEdDtGcrUymJhYRaPVMzmQDZdpYGfZ7dgwxM1HVHyZpko8qX4A5Eq998T5xWJhqB5JPvwg1FfLpozXFYkha3e",
  "key33": "2fFrvNVe7y7o3dK2N6hyZciidqfJYES78AzHYLnriTSMvE32Kd5Fkwr7xbakV3mW1k7ygTpWTvz5d5CMhcxMWg3n",
  "key34": "3Jf8gPXQecniUysU7awVewxuQjAJYBZD62jsAjGmBCpEHdyXMKiP5Swmx64k2cN54YDLxatBX5sYiiad9ntZWYgA",
  "key35": "4K3qnog31tN8mK2k16D1pXTTPwR1cfQb9ywYu84hG8cFJ5efrK45iBLvG7q9vKUv5Dh4zdtJnEt4nUJsCMLU2kQ7",
  "key36": "42h6pGXhgWc74rUQzc1rhZMKaXUSftkq9o2brxGCFSvJWTKfCQJX1BPk2pwedYXGQWuSYLJvqSqHY6Y4QvuwLiG3",
  "key37": "5T3Bu2Dxo1KovCgWYX9pbAXKL1F62KYjWeQgFreTbSQQi8Gsi73TigLmZptBUmQ4GKUTGr919gmLUhoAvgEY6cNx",
  "key38": "4cDpHrEuSkQYsRdgNjibyKmVjGW8g913dYa6GHVYb1vNkEWWzNsKuEGQQ8i5yBa9GzfnGddemhdWd16PjbNeFqjW",
  "key39": "2kN5CMywaRbMn23a42v5BJX8GA52rWdfPvuLqmf9MRCGKCdUakjFsU2jwm62J1KcSCfm2g1Ru5AygAFyJwPo4fjC",
  "key40": "AWLs9i3LsneqMdpzv7bWA4Xg22pxg1oW7MZLxqq9uVa8rzJXFv4jDJVAWKBSELmrjStURUyzBagZa3NwtkaaqRD",
  "key41": "67jcesGeBNE2oGmXNfRWyRqEc5BbnFp2yhJsfjbHZdSuoJ4nGfUhn4qsvqZm3ysEQtdnU3RHmRXzk3gorsjLDaAQ",
  "key42": "tRkfXPFy2nBSxdbAkxxpRSxwhFrzJQ23MxFgyeV7adgJH8TVE2WWoSHg24tQf29Tv3v8a2HsBx4jPsoHTXK7J82",
  "key43": "2RtXCdqzjdN79kMPjhbMScqVuuthqKTZwKjZxBdDA4a9Uz2r6Lewf6Hygqxrqz7jKD269tVLixN3riabfoSyY9GQ",
  "key44": "2azVBNMBaq4Jj2yMDotQeTRfZ9owT3vnVoca9jbVhiPXECzoKi5C2Tmnc1Aw14todPimMbLQkPRtagXMTtJ3nPwd",
  "key45": "wJ9MpiM1kWysTbwSdZWMiyyjoMV7skVn4ojtesTBeuwnuNxSL6CbhSFswEQLNYJkaXGWqQSWy5arG383DoehSUb",
  "key46": "4wn41gqVh9AABD55iCdJyT7sNdwQWm8hRcbM8wPCrFHrPzfXFy52eaXMAYZvR9PRWPYjrQYgNDJFb8dtsDBF1tya",
  "key47": "3cnYZdLdUdc71cj4zjBG49P6rhGxqdDAd1V7SLSrfafpqpbUeGLrfgVJQWYq4mekDb63c3mqvjhhXdCuGgifxUJz",
  "key48": "5JwLafkhs1td1aiJnfAy2sGvbu37aURmHcxXFpFSFZmQi2MqfZeciWNaSqtT8AQEij1w4SF1wHH7f3QP1HXMCrY2",
  "key49": "41KdmzR7xKrET4bDFeEyiYvehip7imLGEDGw7DjbsxgrYEwokF1jXLXeBTtdtp48BDb6Y1iNnhx37mS4CWw9q24H"
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
