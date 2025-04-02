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
    "54jSda9SZgmPriLtmurcrRGtr9iRQ7mRaxmV9z4nCfW1vihVNAqRj8kiX7twUC1rE1KR51ZnuLrnFfynrP7FD9a9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g97MMdQYvMgNkPgyrfN1Z4D3b6t8KNcYidcgcs3NYiRHy7YC68ckdKLL1fX1RbpeYubnEqYE6TgfZPdp53QH1L4",
  "key1": "2ofBnWwtQGdUboBPiRWwyZ9fTCxmYpdvMo513kF8DGirukX5Zmk6JLEGp6unbhugwdNeaa9d5AyjSbpPUg1U2Mgn",
  "key2": "mm8urFJK6fesnRgFxqwtvkbP7N8ZU6Amrj9eWGEV7uJHANidhquWyuvWY2XkkWDgdUsaejS31JEdGwVTVSWS7pD",
  "key3": "5UzA6kWrziXQWhU6tq2fJQgGVVc6gA6CAyD9aiD3i2oHwF9uxBiJBWTjbV4JFJVpfUTCzJNMruQdddiTcwBxfdPC",
  "key4": "YwkZPwdCECLofUj9zVohwybmGwxBEVuJ8aZHPgZZ59CEMWMvNPdVNQU6n7aAUGfoQXaQvF8B58mnmZM1bDCoPNQ",
  "key5": "2q7H8opQB8uT83jacHrBBqpkSqGkegvaQWcZuYZrSPUxY5iGU8xamNkYTDTAnE9KGsSTcFCsLY4asHAFmrCGhayb",
  "key6": "5V6FwJNZk76rTzN2yhm6JQEoDuuH6qkA65ykJZ7gmQNGGGhUuLMUEVD3wmB7epTQ3nn7jzfX38Lc9FKBEt6LvWe4",
  "key7": "GVNG3e94PezZBRwsvAZLqafpufXjLdsWn9AdVBko49ZaQLuQbQZdXeqdMHmurzwXVipY7gwRGcD2vXsiKKe6Rx4",
  "key8": "WDNofruxwxbdRcEbPaBbrdjSBmAfR5qYwXn9BUPT66UJjSqTZ4PCdtXKP16u3PNJ2VyH5qYTHL2ZK3ZYUwDqEs7",
  "key9": "4twALD1M4c4ygXAMRDSpvTSnKhFdfK5xECdpdBdLzYjFYz5nTWiT2Ar2fm1sAQZXgHpjPNSufeZropGtX68pQuxf",
  "key10": "bKCWn2UtmWKBMRCH1DF5Sz6P3ZcW9UqAt1o87zUQKwLcHJt1G1no7hPVrKe9jyQFm49RLVkUEZ3DRm5YMweq75q",
  "key11": "5rzGK6ZsKiuhfKPEtasNGjQ9ysgSkf71RTy7jmaPbvoAjR1eoXhDSovM4AhKi1S53NnwaSUFG5w6EoTK6VNBFKQv",
  "key12": "35g98MMSGUVGjCfetLDZFXYY6YUzsh9sAg6R1oFwadfatpB63oYts828knWdmFjgZdwezPuyfnSanfRbMr5ABtv2",
  "key13": "2qGRuKHEBbg9bBqi4byQeE2FxHtPGXGpkzvWxr31noR1z2emK9Eo8A6LrUtWvDZuXZXL1QwaXrfTegyVK353noc6",
  "key14": "2GMc9FEYsWzU9xDGq39ABHP5vRPsVb78A2VMmXZuGxUNZGWKYNwEiTWLZyZx92a4UYgtHvfJmyE2rtLDtnFP4Jhw",
  "key15": "5BzYwcFavqFVQ4UL6Uu65yMSg7xLZ1ke7Snngxijtfjv4nfZZokpHSTefHhWSJ5UNjSp5h5zK63BmCXp6i2JYv5j",
  "key16": "5SC17QpUL1uGE4B58LDzQnXm8msSzA3Wd6roY6VjiknTBdoZJb6378LorkUBqex4Mqc6BA1zZdS2xSwfNtbg9XP8",
  "key17": "voSoPutLuX2vVTfozuBe5hgwnETGb29Dg9K8xoPT7x96PKeRe48ocdhpb9jSXmD117dF3WrSh3qxbxoStu1j6Rq",
  "key18": "2VmAQkcwAqXHDKvuQs37yyry3WnHPdWwGHTfjFprbYxY6nZwdkmsK3mHfjtrHzRMYaDgqonbFh91yXj7JjDgLNSd",
  "key19": "fb5fQV5FpPe93oCJhNCPLqb5g6BYvPYQWaByNjo2e23HkuASz2RNbXm9Phr6zqFTzNaEorhqVjGsUwGY7DJwa7A",
  "key20": "5LnnVxowwaALZSe6fCfcmHJ2rW1HvTqSBZGpmHdnNP2uUVWcTFZqMqLMH5GVrTiLSqPAm6poJNqJCLMw5T6vxt5k",
  "key21": "4sHHxXeaJgLC4bDdVkZsdD46vpucAgihmjXJ2JozasP3dfqiv3Qb9u1rRepjrFjBjxHVKjskSxhN2LW8JzYAb8AR",
  "key22": "2W4BmaELzko1hMbi18iuSyJ3vhat4y8czrFxzfP45nAV2TmC2NFawbefHt9AgxAuhqkyTWzoMCxtoiybSttWLTci",
  "key23": "4464yUWJR7oNfiLEkrRowRSptJdw8QjMRGmRmiGvoGqGqax1wnWC3giwAQ3J9arBQKitFH9JrE8pLxrFp7nWXTiR",
  "key24": "564tj4A1fmRJGErE8xSfqLX8RHsr1ZZWcZXK4vDWVVnBtscYSUXqpK39xvTXCcvwgnu9mdD36prfbq2RvzAe7gBM",
  "key25": "41HMaWbZREmhkkku1uhSTa4GCv4eep63JNBFUU6uktC2ntDYm3VudLcHrxzB7y4ZZ6qEbpJZqbxheeJbEYH2EtHD",
  "key26": "4ENd2m3CUDV6yxs7GdZ57GxzxNxYV1vYDV2drnhNZvX4CSKC62yPBjdCdWsMZbadDzULS1uW1E9C6iVc8tAaWbsh",
  "key27": "oFLeat61fnefofi41HsMnAEDL5bwjgGNevb5aF1aDiZ4mRUJw7VhqLouF13CtbA5yeCr3xonbKHECAmKmGHYtsx",
  "key28": "4UBtSVgLA6eBihziWB5rPpVCiomFQyuMhTPaNPFsEMZEy1Bjyndb3ajRjqk5miG8okYKoirkufpch71CBvjT333s",
  "key29": "63L23PSDC4x38THgZEEqJLGvoDWgPkPxDrMYQqNps3N6f8i1sEf6Q6CE6hZHKt5hyobo9vsfm8hhqAsqa8RJb1p4",
  "key30": "nCWoRFmWCp1QbnKPx3sExbQnu1HVYrzM5jxSzT6SUMrx44JwGBuJYJkcRe4XFfUbh6xbHyCjAoHJi2MZwZNGpiS",
  "key31": "4hs2XL8GjjLkqEtCtZKxwr3dw2QazmvJUgLWjSS5QwryP72aQ66yRzY9FkCJ8xRSfy2NJmtPU3ANKX8Qm2CSuPh1",
  "key32": "48M9VwdSKLcDeRmfA2GAbpxcw9Q1JLdh9Lo35vf6BUc4Ac7mRd1dbKVWRkawMH5Tk9ozWR4KVQWui8dacpvbQyma",
  "key33": "4LgHBDd64sgbVjAEYLwLz1wbbWpuCtqSssaHFW7fMggALpy8967Tdb98VXGou5ufRYSS95xkCFpuFt1Ys15VCYKh",
  "key34": "3y4jXpr1goEf9Yi8x84djxcxK5f2HrumtmLsLFAMJR3UcYkJH41HCqz4imfDTBL2xwPPxdU1cU8ZUTaHzYoHwQ76",
  "key35": "3zy7fzc9GnhQ3LvqdhNmqQcs2rdFZrNuJbZ85BEe1EgaCegWPSqc9Sq6DbW8esfstuTpCt7nvrWanGQGDEBoVgKc",
  "key36": "2PEmt5dPPthbSXFhbgQSpkFWxHonXg75NK2vhiW4NJrUXnu7wzNYrKg9rBU5UFu8Uzz55PRcyWepZYjAPAfL2MiH",
  "key37": "3YUJQiMQDiGc1EkZ5rigr3QPXZeWYBJQQjYW7Zd7eZwP2XosLb9xwauMPwx2AwaWg8H2oiHMprABzaoWdWq95QEW",
  "key38": "3Af7vPq5YsdfM1qJRoWjX2HB4tr7XKwSLA8nXygPjMbxo5XLTng4TgRbNdhpnuYg1J4pYntxcFN7EHLvgVyKgjSW",
  "key39": "1acjbzj2etMpUryKPUi1ynUW6E55r4jRcvRjQax7TbrZH8QcEuDHdQWcs21NLkp39ADRHDisGQoj2DhpXgG3B4u",
  "key40": "27dtWVou5yxAgqm4D8Coh9pFWYvMfpg5HhLLLovLSmKmx6dgNLhtrvoLomLJEasXNGARyu4RDz6F7cb2hGGNGRyx",
  "key41": "uRpA7h5e26Ay8AkB9aGRvdzWv2V7CtF4fL85wSkVkQ7GbCwsuZLzCxyBUsVVwBAVQ69cHbeR9PnhQ1iFZcGSaxU",
  "key42": "BL5Wd6EvCb1UnQ4HLacWQutf7kum9EF3T7KUGC1hoSP6eFsBm2fZmyAPJmfbMrRn5o5MH6SMpfUvj21Mq2XwVNA",
  "key43": "3rYQCZAo1ycZMECL1xaxsaARz7vrsYy2oonhUZ3hphXdtxBxaJ7eUqxvTnqYZ7Uh6qaKubRgY87YrafmLStmrfkp",
  "key44": "5rb6aNXqkniNgrUXFcvgvNCfroHBFLveiJZjtYgaf7LahCcCxZzBbUtgvZ8XRjB6sfxSWiavFzzwFNjS1bzQiMor",
  "key45": "5N9UPScy8oHMvjWxY4NkQs95j8uJS5peC9hQRv2Meq1ZQJTCPKkMY4GRAEZSmxkgRsRqtXv3no5wLgSHrJ8xi87k",
  "key46": "2tW9n1JRtBcJkwQgVmnm6itGRGkiLT7FiHWk5CTdyLX5vwiL7XfjRukF1FK3j2gVc4W415qegjApMWNFVNVLH74Q",
  "key47": "3TBmYGDcMpzdWZRECkNpjqBsmXhtWs7hwUv8y6cM3AC6bk91fP86m8Ssa5Bw8Z6k5QriagNaweDmmG4Ar6rxR6Tu",
  "key48": "37sbZ4HbBmVQU9L4BrHQBWmF58MFGZ65DLwfB5ZvvpDraguvbyFA3BYzDGBwodfouqRha1Dy1feWE7k1cHC9Mm2F"
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
