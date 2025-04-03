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
    "5utXw55i4GAGDc82NuMbKLX25QWC6jg9jAnQhjxd3pWQonzZy5w43NA7BMmc2RV5h21WBLEctdUc73M3jWYKiV7Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62gDFrNQUqv1Qq7SbifbL92pwWxcUehJcc8yyr2QjhcVhyeyCsJP39vQFxc7Q6zbxsHgCpjTHXiaCmAVZdN7UVtZ",
  "key1": "3iEZhHshhLwaZE8jSSA84ECXQf1cNos478XF6LkZq2pbx1guciC867YHQo98WtYZ6Rjh6VzvSetcn3b5DNN3AQgJ",
  "key2": "5Af6bmm9boSybdVRp1mBmQCTVhUvbvGnXT1XLRc67SEdspKmhKRUxGEzLrrqsNgbGXittVkYttyzEKm8NQwno7SX",
  "key3": "DLj89vHSXJDJ1VCVJNYBtvZBECUwov2CBYnrSy2MBSCeNtADojyTfs6d8URw9BgBaCVqvH6UnWsvCMsxo8tDbxd",
  "key4": "61nm7fkJSbzcBPPRauHN4M1KBsfYFAX6df8VM9ABuSwPTSKViWWFg5Z337oZp4GGp3e9T85bKqQRrnYAUrSRi1Vp",
  "key5": "36ZYAdFnvbZs6kYYAm43yiwixgXSfoDvPfTXwx1iDp5eFbjTizXfZRHqZ8DND1obQUFYeUvj1S4mpmUonTu7Wtkx",
  "key6": "2Yf2mtENoVaRanENoRCcuRGdhS781uMTRt7CestgRSHKZgmnESEY2XfLrWajrm83xkjAyGfRsEF9e4ciGwofqoEy",
  "key7": "35h7y559uzBbheq1AjRVUjLbkJVbQ3FWYhbcijsAFQ3zABeQ1N4QBKxEgjeaZP9ruB7Syqbkmrx8VBAhEVaK3XY5",
  "key8": "52RtcintYnEPUBDzdhLLrjGJqxh3weBoqiiLsWM7Dtb572CYfpTUwn4Tvt1pJKRwNFUGQQqVCmyqDCq28uQPbBDY",
  "key9": "tgXpfZxsRQWQ77E84ZrVbxY8fYVokXAM6nE8eR6rsAmCGJohrtvKZC17XVGRz2tBchEHgMUMCUj7ARdJwRJkQig",
  "key10": "ckmaBEv4cX8A8ttenWBz6nfTWq1KTCvmRzkJnGahkp1vXfZNAb7PVLZW7kdf4KPyaBhq9btJ5gvjcQPxG7BDu7D",
  "key11": "Y4fnh85KJA2b3RQtpv8UUHNmyFGXwDVgZAUnw2qhaw3AqcJ1EfwBV5SFeLnVQ2mQRJbakMi2kU5T8s6rvF5HexB",
  "key12": "5eZywGXfbEHd7h7iL8JgQYNSu8HL1kV3rAsbsAiQ5JWK4sm2DVNoWBTyVc1RWi85UgaZ1ynoB3yZujq1iSwESRVW",
  "key13": "3pRGMt5zBGNyL1HxrJE2pwCB5kKT1V2fu2c3thQqvhGb4jhSVuyg8qRxkmAq4qnn1uZaxqwHrAo52AAbV2xN7ydh",
  "key14": "e8DXcXonNYj9tMCnVJQhPquV72g2cUQaUr1pkC4PXGFJSy99UBdYhSe63nuXkEUKWjq5KTFTe5kV83pxdEPeXsB",
  "key15": "3NvTDGEo9J37gVq9xDijNPfYshs6vxbwFNu8DteTe8NcW96NjJQwZHMzhEANmK45WCiRdjFWM3hAKG1ERmheDiN9",
  "key16": "jmRvbmHJjeSLJfuX2YBcL5kWUNM5j87TLqjgqxjiLs8u8rE7fiF3n3H8HuG7NrgXTm3ELmvEuuJ1W3rKQ1s5JP6",
  "key17": "TAfu7ZmFM9FFy7kvkkquj5m173pJQL6xoca62cGZx966ZNzhq325DPspposFbiU1pJbkn5XsraC7Kuh3bB1TwXd",
  "key18": "35TejS9SKrpA3M672xRsXz3mAo5hBRk3Uko15wNgftCYARDxm75pJc9DGsNjMnHcuEfjS5obF7DzQWSRS8fhvdmq",
  "key19": "3fqoz1sKfDvXuneWzEEkENdg1HYGrct4Ctu934GsAwRyChmj5nVTYiEEPCQ8J2GcbviBFD8exce854XnYRVwyb2V",
  "key20": "3eo1s1MSsCua5sztnsfgzCLMNDGTNn5rxzKh9JA8qLWfGNu2FCUuLvX21pKAfoxWsTGuW4wKGHKzJnpgbNMboNZw",
  "key21": "35LRPjZVCBvRSbVCtr6MeaXLdJA3Zhi98kMCwAmDRphW8PgA78wsqpW4zGkLjJsPcF2Swo5NLwgaMMWE2vLt1Jwb",
  "key22": "67MsM6rjY9Z9NjJrFYNFnKYp6j79Lh2ATiw2135QCA3G3hodzvq1zwv2i3HL49LtiEBgn8cdD9GDoVHhGeyNVUG5",
  "key23": "5qHh5ZVJRwjNbUhVb1dndwCmiHdCPPfurZFetRJbuW543BeSW6U9QLBGv1f7SS3LWjeor4nZbBxQ8QQKJ6D4HKw9",
  "key24": "2X3HJ1cW33PpQBXDKtGuqKna8PePF2rPR5wb4SsbNcHR2N2i5VA77mP4ZV1vgPjaXYehV5AFKgmwhDHZFc8Kafvk",
  "key25": "5AY6AwdgBeLXHbrSxJq8RVBmN58jEKW3MaunEx9JfjmcCqvk2KVJjwY8F8ZKuMjWkgPc3mKCrsLTcccPHhw33JE5",
  "key26": "5GGuNgrNaT9hbdaU6bBna9Qs7hqBQAQ8rcWzDsZTKUJb1cjsm4bWv7v3YqtfLZy85BefJqwV83BqgiBAjPrKVvLK",
  "key27": "4D5WW5Uuj4UFHTjQuU9uLvA5Vbsd5JSK64kuBGvvPmGLCN6YN51buKB6bAcLH9sXtUBFBJe6ickqsDGv9EMCUJhA",
  "key28": "4Szpm3fMxnbVGgt6uD1JHAWGDNtmf5bRAkgpoa7XUjVEJFvwQAGkp7GpysvnSXWmNPbDH1hRsc1eKfwtdnsryZFC",
  "key29": "34QjNh8kVTpTLq2EGQ3s6PjSXASynVffqChcdYBHZyRzDN2JrjsmSTfua2u2YL3uNoFoFFvRzQZjgxPbkkUGSjQJ",
  "key30": "44iH3K7Js6DAPha8M6uJgxEgnryC3yXtTYxe5bWBtpZaVBbT31n6g4g6pGyvFCxSR66PrVnBguwgtdfy61P61SGJ",
  "key31": "4u1UKEhgFLYhXUBHLG3dFotqiS51aeTxMDmzmjR9WWdaDWrnCtakDqktNA4NL5YK2Hq7DmZCarkAXqyibbtHriE8",
  "key32": "ENhm3F3x5QJQVc72ZGSCAyR7ZHF8qvbRNEakxGuDpoXTbwUAnRfgZtyXg82EvE8iptPADCtozutAXHi8yFL1sEL",
  "key33": "4cAo3UgEhZS7oFY7UnBS2cSk9TUtQVH4zDsQ25YJUU4mGZjeFabMJavpQH5W8uQFwBLJ9oaRpkFCv3VDV9U82QF3",
  "key34": "5P8HgaEK56d19xV4t3zysbbpY3ziUCUrmF5nfAda5PgyqqbRvMZZAitARsmHGKsJ13YgRiPPysoZvcrYqwdhC5X4",
  "key35": "5ap6ij5HYq1t3X3tZaC2LUFW9cYQY3HRse4das4ki4JkwX3cXhQuqK8ujFenn3H1jTWQ4Gh4Gi49JrQxjcPXpSAv",
  "key36": "2VkvSiNQt3aPmQNmEE16bFMFMY2avxVqfruJgRo2ysYz9vfrkKo78Q8VWVXFBFRJo5aHQVkLWnCd7PguF6arWHAx",
  "key37": "4d1gi4Juj3emPk2kwTYN14q6Wup269wBtZY7Dyw2GChhi1iQhKDB3KDG9G6XYJ9FM7q6J4LhwRZJGgZfDAimMitA",
  "key38": "2gahz6Hx4RvGyBhRxGHR3T1LNs5M8gDU8SEisMNyi1xhsJdbNA3imSJskpCntazKRTMhXkaG9hxmjhTWVycvpMPr",
  "key39": "5ebVGNuQM3zg9zooR93MjS24qLS3CujVYnnxb7SztdYNYhkzJoP8nA7HBUsycy16rhqhgb4cFpudkkx5UGXwHDdj",
  "key40": "5iY3pXhxz1QaPz7RY3sQfK7FGaRWqNjQK8JAyWEvVYY1zaQmetwqMZDVTz7rCyqo2jJA5iMxtHVeWui6X8jAMMVb",
  "key41": "346AhQzsQ2XdrBTCYxDwUydMRQ2hGEfoEar8BJL1Q6MvvjVq9UBHdqqDvrQbci66h8LTbgJzKEf1Ru8oRuxrJSPd",
  "key42": "45KKjToxZ9ot5QtLQCHdMCnR6VEdH1uN8qSRx71Dbcgs8w58fvtSZ3dKBFpoqc59HVpLEcxsat1jsasPkCjjzjS",
  "key43": "4aGRuQN4uqhV2wMzoF1jTRaM6sBLHR8sNfKjU31Lg9JiQJuq9yzGVaotxF93CFx4CD1r4oyQmEDtEZAH3aoedmwP",
  "key44": "38rFASxMMhp9hekHbYesjMDTpCkhDszaf9tjPiobWvX7DEFx6Wqhm3VQ8HVPrxSfhG9dt9bdTTMiRYPpGAx9MGRb",
  "key45": "3LdDJPDaTxb4uWoWdaL1wW3ADhh8SJQCe2eFoM6RGn45JCSSWr9ZZzicpttL9EQC61XHfrvVYYo9um3jGUwJrdH8",
  "key46": "3B3cUnuAYZbfRFtf3i2nLEnRT5QVG2UCiSu6cnoB6BmtvVYKZwNPRtqvdx1pJWDrQjT7j7JDtQUnRzjLidDqdcLx",
  "key47": "2EPXwEDefntiEcwtn5nADqPAsg5hKR437bmGFZvV2VjFp4BaCD9jvSK9kKz6R4WVUSiEVDYtdDcVKn9APfb5D1Ne"
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
