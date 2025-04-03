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
    "2UnkqoynKxWgTqRXBUmLteid1esu4bcZMKmiVPDXsVS6SRtCuAdpvRuK9RmskgBLAVerkuhLckLxTRMn4GDgNBaD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35YvwZChFcTmQeo2YhM4SCiPs8Uh4rGc88HajcsP6KDQgDBABFCCxX4U8f1bf5jXMAAi6kBeJzYRYLp98NjAj7nf",
  "key1": "5wA3koNc2RyUsfyuesqHn7DTjK3umw2KCULuadcqPLeNDuHvp2rTeusmGUsG6XjRK2MUtadVA3196VqKpNLBCmWf",
  "key2": "cGgP8GPekX6YrutqB7AaHPmjHHWi4y9eFFvY1Xtk7VKaVEv8ZFg2nEqf9pDEgEnbPqn7fEayuXgzWMR6eThJUFr",
  "key3": "4TPYAt72S5s79C2jAjERUgdjLqJcJnCU3kBikfSmPgX58UnPFKd4beqs4qti3wHsFr14g3aDCRSK9UuHSCu7Pjnw",
  "key4": "3cKaafZMKEb5M9jjiSybEfmDzFCtLZHwSKSFLy7yfYWLKEqAxTdjYGD7An12VfTydfbhqUqNz5itPgW95coYgGbm",
  "key5": "HYaKxoFs3c9pZphR52cM4hCfq3FdpaYCxer8Erq8RENJ3xadHjheDQ7JzWUEhS1EbHeDTrvZFkYXaZFtpATy7XY",
  "key6": "tegk57LhhM915j8PpRpmkVsywX2Q2fRiJM79vt76vD3GMEF2M6SL5WXU7jg8Lyrph8DhMp8DD86uDRbPFT26fBo",
  "key7": "2mTjdq51WRBXDuHrFRhr6uJVtzaq2fwhu7bzgpf9VT8rAUTXZvg6oSJQZMKNQUp5Uq8Ar18wSTYAo9YAzVPtAh4A",
  "key8": "3DFT5HtzReLCu5acuhxxbEiJud98RFkUZgMwUbXYYKgqHst53u9x7pTRHnMLEm6J4kNMrLCDw7XvMsy56EWjXxi5",
  "key9": "3Cat1XEkxW9LLUY3YH1PKDQjhDZgPmbCD6bj4RdXWYCKa4QHW8xqGtr8sdfYvF2HEoorXLQZvFQMaZXvLwCRipy7",
  "key10": "3ru2VLKW1KGBPce3ZURW4sRCFK6bXdtbuqjgUCvS5Ngk1SeSmu6cdBJ6eghUivpTJzGFtu9eh2XQXUh6yLEFYT4B",
  "key11": "6786D9zf8MNHAKCvokzeii7Rh4GZ9Gh1yTMKTAoWHjJJnrXtnd8zw1farH2cASCCa1xiHm2mSkZ8U4qUFjELXA45",
  "key12": "9u245RCjabF5ePo8vcgPp9HYNwanyE87Qbo685GhS3mFPxVP7k5yUhWxNh2GZWQBZB6zvWS9M6kTbxCES5WqJpN",
  "key13": "5nxZxowbQsfq69NKGKHk82iMRgQU61BxrdoqgzXEPrQ4MF5nkbdRTu8tDuNdWPc2grzWj2AMEowrHPggb3epetYj",
  "key14": "2PtfLacT6nTpqVerrvBEMYxjq6UCyLgYNTkp1NeSCyAAsx5vbcw9t79woAeNdGiHWZjftTQTrAnTaQ4fYD6Tdznp",
  "key15": "4nqwVJHgp6D5MgrSQu5nWcSYHHo8NzWaVXPH8uxT2iQQ3uEjkAhEfTvKR8EHccmHEBnNkKgcmEcqPyqFN8bYZucy",
  "key16": "5UGaQiUu6Jjh9j36rDrvUk785CMyVXYebbDxbzje7Mv8iBD1iB4xuBZ37GqMPpJBi1bpHzuchX1iXuwS7uivP7Rp",
  "key17": "629ryXtTMYiB7CLC3CwMHWYXoLxkpHizp8pYeUGo5FZEnGmfDvxjFfLLFashcMZnboCPkGwxTnHBtaeyuJ4kTvhz",
  "key18": "3zQcKaTMB6oLCv4az9w5RifYt5Nj1Wks6he6bhRnZVgo4GXsB1myWeUuqJeJYbYqKBYfqSdmNKXLrhh8rsBhF3C8",
  "key19": "63MZ3JPajzdUbiucuZHL66jFVJaJvsfMSdtSiteUU67SFb727fUBaqtKURF2efEGQAcYLoSNpCpQmPQKoaU2AbvR",
  "key20": "2Fa3cyBh14EpcSBr61Wmr8dy8yo8KE6UHjwchm1vdoqDfTq8E4ehXUfeFDYRSEvJi5j27RHmoHvfBYbz77aTNo9i",
  "key21": "VsSQET5TBhhVUThtTYoFnZmhcytQz2AGw1kv3CehBAzNaWBVvpbBeQqNoKitRQcNHr34CsRwdA5e6W6gEPSJtqi",
  "key22": "2iFqgVG64EtRgwC6Q1qrH6pT1GUGfkTHD3jgVou9uxvBBmEF1FVNcoKwkeweYu3J6zWvpiaTbaaAf7bf2KhKqksQ",
  "key23": "zn3hKVwnRRSvBKEAXHPdSGqs9gWQwQjztjUqXv1BHimvVLkFMhTmw6jKc9FHKkS7SshNWe9t7uNpFgrqMuTfXBu",
  "key24": "66rzBxragkDDH1CbbM8vimFqgaUGUaRBN2UJ8wNwcnDscmT6ReD1cSPqhvYZ2KMREzMLL6s2fVknaYw7cz2tBRMB",
  "key25": "5VP4dbzor9ZMEzpxYaqTWQKgomCUMy3s4MSF6ngmELH8fhy5CsGyJDDFajNsSLx5qrFa2Kx84cGyFDcYnHr8Pabu",
  "key26": "4mYMAXstBRjZWXbvakhtgqHMvcYGooxfHwXjQBiPGPhmbpyDQ5RmPumfrTh5kAQWNSJAJ6M4P5C495QmNptbHkeU",
  "key27": "3PoPuEq9kn59m7ZhEh52QNjL7XHvRuyhJTuC8fkyj3uCtd7e5DUBPtx3WFbemz8apcjE5bTgWYR1ATGUBaj2bgfU",
  "key28": "4SE62K3BSN8yKXNSZHFYjL7pGfShLoMXpgo6gydhUTtBS2owksMLmdpL8uNv5t9KxrDScLR41Yz12E4a5GeL466B",
  "key29": "2LznuCa21NT2Tu8vqFh9f424pJtHLdeojmZnApLBFtVX2TNd8ixCXvQ1bfj2MViFVrN1eD5uohLs9hjEUMQmDpJ",
  "key30": "5YpTWuZ4jzCgBZiEJ2D3yLPJHDvDaaCFV1e3EyhQytXFzcfnv6MN6D9iQnrnxrm91sDLDrApDcJ5ppH1suDxfQ2n",
  "key31": "283P6fKTmJAs9o9baUzV5ZPH9UCq2xqNYCdTEzY79PLVNwCipPaPrCwbW6SUJvxwS6NjJUf2mN4M4kfH4fa2kkdp",
  "key32": "3jwSrpraMKv2H4hvXheyry1VXRXCBUjHornqVmBccN6LRSMvpfVmqtHgCqG8d7T78AkNZvzGHXTNmbBGc2YFRu1p",
  "key33": "E7xLz3YxeKan35iuq1EbBMigwd6MyvWVEvsE5aw9QNCySz7H7murp9Mj6ocWXfiUTB1J5NY31P6RyRYcghaHdyh",
  "key34": "37RBLJdZFq5e1GZSAbQ8PyiF6ctnu3a7DVWWQ674cNNz7hnjXxk2HP388mi3nRUa14TUukxArk2XwoJP5P7bD9T8",
  "key35": "5CyQWJ7muVVdkmsKYxBwSBus5vuMwA6VTbXUuw3bHCydyzLRtvF9gCRHjGnUA3qo1uxCppFxTkexpKVuTSBHZ4g4",
  "key36": "22HU3AkuX4m25uwcCYgSGzCzM5naNeK2gfCFfvasaS9eBjj6L5rnkDYUD36uDkiVC7Gqfdat1kijRRzwPDZ8MrrA",
  "key37": "emD3TRgCaGM8456DAnWNaqCWnz5PYyzZ1KRJW6e8KcH2FenwdxK9n7LFnyUpuwp2piHBNANc5uzGFhGev242KUw",
  "key38": "26TKCxBB48rfnwHsSkqDbCGhxFebkNchEoz4YwZfTzuNKMfcgZYF1FNvo39KeU2ukEjp1uqccDpJKsuiNNUts2GX",
  "key39": "5QmEY5bF8azL16LgBy5M6Ft5XL827z51HCfVp5hYtYpyaHc5LtT2URNB99oaQ9knJhdJvgUck78WiP3TBmUSjuG6",
  "key40": "38m2J7HkH5znDu7ngou1C6X6Bxq36eP6MgqVwfnb1sn4tM1p7SxdUAKWwSSjBdN4QqP9CxwoTmgP973SMBsPm6Xd",
  "key41": "3kHL1iBmmAbHg2ax74oYCYpkDescDRRtjGPWcFLPi8LZMfCq9NduHERzwBsHtH8fHZZnaBeWGhMYtzSt46S6H3Qb",
  "key42": "5WJHaqoYSHuSTAzwL8iNXR6J6cjxsWmzdsnfAEitAd2SbMfRa3znq8LveLRXWgqcUQcfri5RvW41Zvg67Q6Fn4z4",
  "key43": "41bD1YB8qeWWsbS5TzcqNEpfSVVHJB4MJhJ72Lc9YzEmEaiU6nAHAjuMDnYKafv1zyaXGmzjgsLHEdjg9KmpfP5z",
  "key44": "3cij9DHU5wJrQW2pmVAxvcXNHgkW4M75qUM8fRX11CN3jiYKRUaFXN38wcp1NFyR97ppdEXkrSwnTRo6LYrprPBP",
  "key45": "4XauVKiHDmT8fHbGCDbVVr3ZUUXRapiQKXXBdBDHkCHtQkKGUdrUTLjPJ472jXWFU5QLGMxVr87rBXrwTKvvXSjx",
  "key46": "12YmtJKidZ8zLgF9eaEim2622qx6m12G1tPMBvGNxCUMz5HjgzXgsAqhePSqgu9C5EvHQNSCynDpMWQuQrCbCtP"
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
