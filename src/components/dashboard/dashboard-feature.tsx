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
    "5hsGYTY4zC6sf9L3qVziqcBa9pYEmTgE8XLd2k8LaJn7PijNjimLJfjX2LJoEhyHYiWLb1BWiqpBbkL3f7UKnev3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4stciiQyFg6RdDup9hJkdXp4bfBFJXSgB2nSxTgRXY6HYkbhqFTqqjfxffRSvunDXpjHBTmX7PFRn2dNMxaGWSjA",
  "key1": "412Dnp6CP4SRX9qYpEpCuuEovNPSa4AgzdT28Y7yampUQc8UX5avpVRE88PLgRPa2J2RnvvfXDArr2XHKB9fwTNy",
  "key2": "2fNjau79vauKd4kzMu3yF97zsjZGDpSgsBzReEXtcyNxhZ7iMdhgSJyTzUmzoRmZXNfyUdfSXu5DtBoHxfBxqwKz",
  "key3": "5hr2UJUGewngCP8pmyrYsjJe2fgQg5GN4ghtNfYixJ25P69kP7G24z3zMjcnJUQRSJ8vGPUWSGNXBmjiYBKpQ7Jn",
  "key4": "58jc2SzQFf59Zh64osU89yibzmfwocZ3NX9e8btrFF4Xq5d5oNDgnPurzHvHSe7an4D2vnf9xyxsguXqfPPdb4KG",
  "key5": "5eKFeqBL5sdjP8DxktXhiNvB1rk2qEWw3gwSpkkNYw3G7jGWFwkKCooHNu1Mycq364VCBE3xTS8BKqoQckVdAYmG",
  "key6": "3f8DptxpuCWLRE5D5nLiZJzAFT6psYhYQD8B4bhEU75TwRCe6tTVVjDD18phtJBjzQa6SCe61uyJQFSbSywDTwDp",
  "key7": "5dTqWqw2U6qBBUyhH1ee75F6ZubPPi54FPdvTf6wqnvhkWMZx3syF8Xyy9D8pBRkEPLoyNAFcW34pdoxWvJzvCEx",
  "key8": "5BzX5fg9wCj3ck4NBGVEx5xPLKyKbnvvwsQ7xCjHYeM3BqZC3WtvgQ6KDdMKitk2LGM9Ef44oT8sHmZHActU8SDS",
  "key9": "ABnHdJoRpVFhx94L5fzWxgKphKJ7XyGagkftdw4Fx9r6TngMADuyngNQgXP8vyhNr5R5yCb4YEmCS2dv1w194Kh",
  "key10": "2TD6bfrZaLWsUtYkh5ksdi58M2BZ18P2mfpaSPqw2wgqFNndb4Qo5aUoRek9DriiRFgWy592T4KJ93mSVHqBNTYi",
  "key11": "4Z5ZXoYiExXEcc5c5ERvHmAJM2TAT8b3n5fSLxzrKsWGjMp8dFuTQT1uS2P4Afs6Qv5rXHH2GwSjGJedooVEaqxC",
  "key12": "3negyYWDS64rjFTHv7W87F4BM1nuTovtyCp3tPXEdvqDrdohgd93LnYwpQCm7dx64AodaSsa45mK5woG28aWsvmy",
  "key13": "5GwVdcqtBkrXYcPxmvDtq1EHp7NmeWif6Y46J8jUXTMFfjSvLx3mmarn6AoeuZPjCWNEnJGwzRR45P2FtQy2pnRN",
  "key14": "3JVKQgTKf18bfQrtLxNFnnW1r717BW4w7XDC8KwbxeG4pWmL6cKmYq8jZNfgLf6gey6fkWB68UeUxmohNnPC9P1o",
  "key15": "2itzAeuiBSp3p6rx5MdHpM1DgcdfG4VvjMT7fS2ewtDfaLPPckHf3TntYhsvaT13K2D3pg9CJvvGGTD1LSzeEBwK",
  "key16": "3tTEM5HJxJ1B4ViR9XrPtsjQinoLixXtnvHDwRzuxU11PVbM5k5JQPJbVbVQ7hPxivMV8TJWSTX41C1rSUR538Db",
  "key17": "6475FnDKFeaZaoqaPDTMUopaVPqWzGh3DmJBcrpG7yKEq19ayu1edq7Zr6n5NkQrp6tNuFXEWsvvFusWAHGWM99w",
  "key18": "3j5yPnBuEt47uBNxJ9dAspLJEoBpT76GNQzo21uLbUUtUcJmPdbdr9HTcJQu6fZPcLSXSDcrDvZL3mo7rXX8Y3aD",
  "key19": "24gZX68GSyKNf5k8mwHNQercHAqcMDMnqLokineQHJzvX1aiskBMur1r8bc9EoQL4x2E121ZFS5UBCKJTzXDMCjd",
  "key20": "4WjNQJHCWNZLRpnFgAYP3U3N3XZW33gG8Jex7yN434sKKYQw9W14o7QUsfLqbNVSdswVdXHqmpfi7x97g53MNovT",
  "key21": "gH4XfeiayNwjgMSCFMrhhy6H2GjQUezLUD6FiABsGXHNuKsvPYXzJ3rzBFw5EM2zNkx4zTbr94MFuAi1vWWqk1H",
  "key22": "5RJYAJuUvP45jJQbYxskLDKxtdkv4SGNCCDZsoUW3cXSSbWUfXw7iFGESRtZsiqqX1ewn2Smq6pdSedmZNkeBADN",
  "key23": "4ip7wuzgQuE1LCUYDUSh4AVFRCB3xgg5jY4FjRX56GPhh1w4UdGaLMpDB9nhnDvFi3eVnZFpeHPbdgP1F2k5ftV8",
  "key24": "46yC4V8omyUbTchhDFtPTqGkA4rCQsLUAz77yHyFe8QXJPhDE2UVjvDJTYmfhhZisdeynLhpCDycm8iiUfd6a2HW",
  "key25": "2HixcvAgHZTW2m3wjDxK1D3P6SjLKyhfobjp8JwteVsFLyxNxBf6MZ3sNwEEDNQNM3BcH2LKfuLbQYjmb3DLvF54",
  "key26": "9AKgnqX1BBi1waPhi6S8rQi7gUBdyWDxUJfV7mCat1zqwKyouMyBQBB42XigdQaL9CaRK5ejvGjG23KgSNXYPLa",
  "key27": "66qm5GDDYbMW5dxeZooz9UwnQjciiAn5NneZCPUKSJGXVjeJmjjiYEQrXzYdck2Vzvkd92oCZgvrgv7EqFoXojqD",
  "key28": "3GCh6798P6C5BqMs7j5qTAEikBzryuUJwxjFV4kmt4tm3cGqmJ1umZE6tMoe2f1Tmc6ucJGmEivvs8gN79FWei91",
  "key29": "5LBcsvN6ugLP96nfAWSZZGf2qanZ2NHwAQMUQ8FRnGgzCgN6GBHYJiQDEXvT2WcukNfnK9XGASDAEkAqjmiRkUfC",
  "key30": "4joNW8ZEbzVpQgysPZT2Z5X7EdpoUeqDFSjbLt94pTXL2TezMUkj3CHzduhiYJ7AgrnAK9UG7bRjjfqNLRUYTKsS",
  "key31": "2dgHmrPjdt6yjn8TaiiFnDqL1gdjZchnHBjMyMZ9wkjbMSn2CoiQX4saMkyp9m7Dv12DPeC4Gij8phpLcYVjU86S",
  "key32": "55Ufe6VgvPJJAVKQTrTcR7NdCKyWKZiwM4eAUQkdcucavj13i9U5RrEkbSmSAsQGCZYdUgS6tTNPjkKGtPZfz8XG",
  "key33": "3s2xeKH8pciWxkYPYYR8mJpkYmaa6W1NjoUqGG91n2y64CTVgGcQE8YPpGJwwxPAiKCgMpmQ3RRWUaj8gf9zktQx",
  "key34": "vpzW4GsGkUh24fANt5Y7ea8d3KwHDMStDg6WSoNunRoGsPfpgJ4aCAEWVdWuPCGL36usbSMzvD9shcUVA8VxaAx",
  "key35": "2spg1HodMuAFiM4vTHwXnJLrKy2Jr6JbemAYHVn7qwHS2DoCeEJERe6gTENDCGh5CKX6paeHCHKtT8Am8EvZmjRY",
  "key36": "4uX1eaGSJYHC2wuYtpxiB1JHoj59joTBjRySSLDYdmixjkxVBtijtLViG1rqsF3AdKZ2VtWhCTJwfjE1Rc72pg9w",
  "key37": "3grKCz4SDrt7BQ8bqvXU81nwjpMr5nkb6Wt8kLGZj5iGdPQtDQp9bB1kLd3RGmpUzWeYERefRgssFnhHpr87wBib",
  "key38": "3NieZPMDPkrLHMG7xUXJcAj5pEaqEbreTtntLbfdnMeYU6XQFsj7fAMJKCVAUAs55RCHwtaAkAipn8cHtEDTYhvU",
  "key39": "44vpMD7UqofHHd5Lf85VPMHCTfq8vZNgkVQM7KVBQrUGfkL3eZX2LVYaQ3yQkLaKvwUogEaw9k3Z2puCi9iLumES",
  "key40": "5XuFtNzWgCv4hjWoB6tycE1NvXNCHgy1i1MTtuC7Cr15L7G7UqCyZw8edTXE4P6ZeGdqwqrHz4PwbqjpCdmZNcX",
  "key41": "5EF3YcusqcT9uZaJSKHJyWN3JN2HN3hvfiV5KHQvSb7f3yBjFsbsD1kdvaotMpdKE1AGkarb7jAagrpwZCmFtjTB",
  "key42": "qD4aiXBYYqpHJoG6NZ27ofkLErtLbSWiVScsVvLcyDM3po2tiUZUhYjDwWrhDFWqt8daTihuNorUysT3xNvnczP",
  "key43": "42qbAgd1DwRbSMV7uC7WvhA3P7gpfDgArYhqa4GwGwyoh17Qzjtkr34cAYyLh6XTmshxsFFAyhxJzgg2hdCorDQd",
  "key44": "4KWHjHGeH4umPDpPfW6TZvqsMUYTy2uv87ZhvAuKa54ib7Noiof2vEFRBzbwnNrCWVJASod3MiNoPcu1Eo5kiFnu",
  "key45": "34b6XT7NCDQZm9ziLUKPtik3bp8SvwqZMt1PSH53pXVVAqKTemUhgpmpb7Xw2tAEgj3GqhWXuvrLVw5X8DP8a5MA",
  "key46": "548ENMUwhe7mp1fKJxCueUpB8M2HicBDzuAUpi4aix5bxBFFpKJzJaXReGNAZYtZiUmu1v3qWcthskvP8pqJmoB1",
  "key47": "2bDTBdGyyjq4LbCMku2NA4QjwBAxJegCyjTPnFFyxHEc9iT3Dcswry8FFUNPcdegdbDstrCENSKvBxsLfMg4zTDa"
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
