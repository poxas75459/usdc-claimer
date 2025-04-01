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
    "3wUmwEdFQGDDGGvSU4hzB3tV9W9vMahcjo1UixDRAkiJn8kXuR2RXPGXNvkhzz1Rxep7SgzC2KYZDWZK7tXmWa9K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RUS7THApDzpobP1eSpPyqaAEB66tVRSvTEbjKpAnmNquesPDNqrFXwjnUCmbVvt7ZZwLZCvaHKqXCMwzHYqnjtw",
  "key1": "Q7dSozymbVCEj6XxnyQAQfxKd9ysWE77oCoNHfoaxBoCNxBnYKjfLYkDx619L3cSCCFcu3hg7gFmzXVtY8pb6QD",
  "key2": "2kw4Th4diAjAptHwEqKEcLKJoEYsqoHV3Azo1mNsV5oKS44rhwhKWZQWUCjRx5CMiQowfrqSxLQGHdGJFhriGNBV",
  "key3": "2F3SNUERiiqKM2YkxHA2nsyWw4xaNTn4uYbpFEkNrRMKQDPu98jz6SVpbppkDcbFStmBxy4AdPYzhqiogWo397r4",
  "key4": "2rYsCcJSmqmdoxdpnWfyKWRcD1GS2gT7BJEzg43eSDdZw4zmLiXFAMvHYwaKYDdgDKTTMzudRdk1sjaRjyGsPkLt",
  "key5": "67tAdqfMxgBYqZDDTzDdcpPPGLWPuuHPz1ADmBd9hqsuLkwQcRMeaCjnhoZ7TJ4qE63L84HxVXKc1V3jN8vJAD3",
  "key6": "5DSepGtJPd1awY419tijA1tnkWnwd2fGcivjieKe4Wfe6XNpbNZ1ZUCvjdi2E92Ww69YLpDiHjFwWKgxRuyWZBgU",
  "key7": "4HgRT83BScWJZrJxAhMUL7Y5cw41TzSR3ay8yVMHgThFA9H3fHGJq8c9h7XDpxjz79BQU7uerwJCgn85A2q7CbWB",
  "key8": "4HvCVGobnvvvztyv8P5KC9NqMPEdSDjdtdhrXWwA8Xgox8RNhff3YntoDqQDzwTzMcLM6GNFB3ZZV55bwu6sGXqM",
  "key9": "Hqv7HKUyxVRyQB9rKGmms26tip8RRH9pTbpyVjhtC54HpvCzB5fgRoL5pEqtwwF4a4dxdVotsob3jbLAz1QDzuk",
  "key10": "CNAh9NYdF4UbTxLj28DgFBTz9uwsFcrpA95nxh5LrwbxBwmC4fWZwvyJhHRq3XpmHiFb5a6Pf7eueS3J2sHKZKD",
  "key11": "5xw9qKctcmvfit8NbkLvMJ9mTu32bB8TUcohkZP5UC9DqrdfJ95ud4p5Ck3k9FwAiac46T2CL4vyTpVmze4moREk",
  "key12": "5DfwY2jnS2oPezDLpVdGnZy4LedshydKbVJYcnR7BehawbCmnF6eAy8oQFWW2mxEhxYVHMzhg55zExHdnzNmfvcD",
  "key13": "2AZoNfZgtxuw9CtkF2jKHEgfRLyRPx4phDoaEAtdjq2eDWFXgeBcizkuSD9a8XwZPxYzungJ6ej3Esj5WNaHkc1w",
  "key14": "2PEoXbuFpPu6eiPriNTaA1JCGhtdL49DngkSc3v647kAFR9y3RuFTWDrKKSgQqNjwcYMNGEoknNtibf6MGQMyzYf",
  "key15": "5GAchzaNqhzjGCB1xrGFV2QydoWvoqe3QTfACM9pTr9gK3azy9WLnThZY6nRretZShosAbqmDV4zirawp8jo5Jrw",
  "key16": "FwXww8RgiWpjsMffjr6ErjKKArssr9S6RfkJ9WjeJDY8zjjFXwHC592gECeRYaDYjUmgqm5CNM9s9AtdSLtwGSv",
  "key17": "4rv8Yji5SiW7PAgJnuasH6cwjqGEjqFbLpXVZwYQZpeeKQDAyGwjk8YUttB9j3MgU27KQvcGxGu2Zg1SYgtA8nCW",
  "key18": "veReD55J9qrVSBNNrAZJNTbkMjiuiEaV9UPuE59pnP4LvxQCnXYCBXDd2Ka7so6jo5sbRgyQQXWZcP2gr3Qt38E",
  "key19": "2SULsDP3g4ewJV56JoceW7brxyFeakQ9fA4nzfjtPByWiL1H67aLUVazeoW6joPzt3XHJTt6AKyeHRiaL3MKe79Q",
  "key20": "Txc84njX48BnWZzneFf4csxQHNDWH135XLzSLxAWgwWzM1D1GFXxGQZytKayRN1qy18mx3xbm1d4vvFtmL9616s",
  "key21": "3EGJSx5wVUZUJzUG2zZrk6ko5dfYDtbdF8azAT6aN6dmEsJf9TREEGitf11BHaL8sWHsqqkh9rBwJz5PUwTSmgMS",
  "key22": "34xScDRoJEj4xfXpZBN9z59BLjt4s6DMHLX3rBQRT8VCrih1r5Pq24QBSfsAUN54BjbLwTkKcBhfa5rx8uJ8e7Vy",
  "key23": "QE2Vc4XffLWXTMstJ5dVtqGQY1MMw7HtveKHYaLjH693Ku4X7syXZKftyXKcXmD7UZZU8e1Yi9isyviZj9PRYfg",
  "key24": "55gJnNmTBkGj1ozG6UEAkJimfZREnyFB8wDDgpXVAQjwnpzcHCexhDADPqqUuDAHDeau7Xk6ukt7atwaNqiKxEdo",
  "key25": "4LrsYyq3x2zCH921s69WuLjyT7ETaAiAFkGYbQo9coi6U4LW7DptmEQnwKqvwzBJ1e2u96sFT1Ce2xQHfMA3SS9f",
  "key26": "4bw4zwhqGXgZVSk4RWnrWnVFDk29TM8nqvDdgjtcHCt9YP7L5EVGEWKBrmPCacKNgKNiJjhNHLLxYpaac1JhnQjG",
  "key27": "4ZwxERX3k13orZvttVKQ363H6j9KEx4uiDdXeLmKWaszYiHjibhBJV7GkxLvotacrUa4Hy1zji35C5u52JFHwnKh",
  "key28": "57iZ4gHreXU74j8Pijz8344opemgP5REiqqtdsZrWQNm6UoJ9But76AW7sqbJ4p2RxWZWjcaMeZZat71R7o25Bth",
  "key29": "5mizQjQTNa9U9htfQgdjPGXwSew2sxDTHckBKZhtdLqUQ1oUhQS5kYkiCCqKQau1ziChVkVMDr9TTAekaeXKkGcS",
  "key30": "5UtK3oUUinraGe4Krm3wALJQwc4gjWA9R48qreN827r3MRgZuyhYS7cKEVXjEPKda6ZwSCU5x9HcpEGCE5C8pPme",
  "key31": "3RFxewTRRUDVPDU333Z27i5QaPdQjqLTWURAoBC7dkscKUY4qUSXHYZ1iwx2cWYWFFsLVAvtvEALEG2dtRmg8tio",
  "key32": "3EiNBsV2eKC9pYmpkAf6fSsu2AFJsaRKMNW8cBNjY3Y6a6hmS6rGyi3BZpQA9MsYKHkcRt2gjgHfrRMFWPc1Rd3P",
  "key33": "2j7HUxeJhbyWSjRHmBuUjcVSQgZRAnTva3qtjueLvUrf3oJb3jfC4D5B3fo6Pgsc6qLPb9rNNb2FSSb5Apdaab8z",
  "key34": "jekDmXFwTGbpu8ZcWd1RZLvLsti2M77scu6pCP58taSNHpUjVyrhaKq6DjhK7U6RvHzrPhspmqcPwwEQJuSgrPM",
  "key35": "5fSHkRd4AAW5LKrKv1YajSAP8oYTL8Q4dRLLHwVDD6cAbWdfsw4DGbBFkXuZ6v4k7Kq6xAad2jXgd9DpNPAKjZA",
  "key36": "5nbKbh9G2m9bbXRwLowjwqkjxt4kb6CWFX2d3avnbuB6ejqX8dfEAmLtaJXp3DdNys5zr7ZGerGiuWMwek7e12PG",
  "key37": "4u6gHsf2LmDFQUFGy6kTDsm9dLBCms5F32CT4knpX5RLaPmzX24HLMfb4D6fkhX7aHnkuf4ybJZqz4BcfJqNfcr8",
  "key38": "21h94tyE2p9uRihX9p1dgD8DjRYtdtoNYFMzmhhjiDZGs9q3gZ67nSk18TTtikxHghiNQ8YK3zcn8Y5Y4vjhHLJ2",
  "key39": "23sXWoeamiFbsMhJDi3e8BYGoM7gLGGxtNeqsPb7bSkR87Jevt2YtW1KRyHz7riJVqTUrniXZfzkJYGza2qkX5r1",
  "key40": "5eYPF9NMmQHUSuysSMGivevLiE9t8s8bNnX3f1gYF4Fa2Gc2dvdi8hWLNJe6J4QRC5kHYXsepnAPKin7bhfuAsV6",
  "key41": "2RpsPYrDrEow6AdAENzK6UX32DhMDkS5hFL3EbhUbLKiowygi25AVhZCgx4XydDu8HUb3SgAWGTd74526EStBiqX"
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
