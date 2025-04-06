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
    "45FWz88pVz3bZyeYG7Rrw142dVheoyL9tMex1yJeThTPe4CYGPLswb74VXooigQqvqoH7eP3ZmMJCBmMDgqhiH1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fWk1q652EUrtN59Fri4NjSYNG3DyiYCmrfLjp6SAozJckFTNCABjY9F7dACV8A4HoNMD8cdfVQ3JyL9Bi4mtB61",
  "key1": "3wgeo4gX4Hvj4dc7AkUkzwZChxyUGqgBbWraeqgEX48PohKo2XcNkHtnHoaJ5ah9Uj2jAjrFojuy7wTb1scwQXV",
  "key2": "yTxufZ7FpCsvmeKktVD8men6wutVBWcaHvKCgtAFwMwqSdELpy63ePWgSufuES9RPdexi13hVfTQwXqifP97FX8",
  "key3": "27G9x6kF7wGorJK5Hsytv9SpCMEAbiLp783RgsaMvsC9M79Q1WjSu3RCxVnNuxLyXqcfT1TW39rFsjCD6dofRX8W",
  "key4": "5PA91NuozEFKcLjqRLZ2w4Y3GNXTUu2SHrzfs6KPYvs1BizVjqofryfPCXBFf6ouXgPqZgULR9Q1VQVvhdRKgitS",
  "key5": "3uc6iP1E1W8sqZgwvrkWu2VmRz2nezaeM1N76NqpGyaTdTqbLxbNrbZJu3416bajjpB19VqLnK2rpyN3KXwpNnvD",
  "key6": "2FGP5qJDQcEowfA7fNYKNFPfmTZHZXCizDTSmdXhoSHKpRpQwL5LHEfXNp7xPUEoMHxE3uDvHmo9FFPXPuMUhV2o",
  "key7": "2E6HUydqeycqYG27y6u2yPV3DmdjJYs2HZFVPY6uxJB2K3D7a13rfGEQC14wVJRKgAaagTu6RhDEaUPzvEtx6bwN",
  "key8": "5EdbUpkGhzpigXphgVYVZxDjQiX8wVmVLbymdYNE33vwomAcgjqevj252hCAMaT5MWXKeLRKBCc7YqhkmKJHX52s",
  "key9": "48XaJ1X9eynXd7PbenSaH8HjxSobNToY3JbybDrJwxoVpT37sYzXshbMHagpSFjjFMKFGhYvGRVPhhS1gtsnJhjb",
  "key10": "2B7qcrn6tHrKWNftCs3CMZoAXP1nHMxm3RveDxwM9sMgNiDC7YTXMcKBwHvB3hYMG8Q27jEMefHsrJntX9px5zPq",
  "key11": "UoHw9E8i9LBEtrNm3iH2xEyvpsAEvJsjeNdCK8DAxhNaS7bHHsRmK2MNmd5WLSdZp5CwCwqP7zRPcqVBRsjb8U7",
  "key12": "5CiSxPw8NPJ9izniEEgowJ9MzQ8YtVrZpUqbatJgdosF8qe9CAuNskpDdugR7PYPEZnX7vgjThrQyVb684ihpoyc",
  "key13": "5RkvnzBvEavdTfT9syVXAAEB7E8ZXAGxnqSxN13pxE6yjuTZ7QgXhXiAT43vgtQ4ZXxETa31dUjA6vEeDAvgA2v3",
  "key14": "2L21CF6rQxtQ45gnFPtHR7w3ACzzk5sD1iP75MhqbNdosoKa79KCUyJmQVjTLAo9iLm1qWWrCQyijHgKCE8EafpB",
  "key15": "5GwcC24YDsforT8cBqVV3iMFBDDCadcxXoGCyde3E8mCzjzrdNo59krbJWhJgENFT71vrdy2HWZWypMDPRorRQX5",
  "key16": "4LUmXorhChGPERa4NfGbjRPD25aNBoAiVunFZ2qqg9iLk8EHSxR1fDbod9UTraXeVwqVYmrLtSmu5eNoNvtufAHv",
  "key17": "48svqMXNcr2GEZz4yoEcTchUzqhryTDLcfsfPo7HgTo8Bk9b8kVuwLJmHMqLiMiNfsGvtF1r4MKXCC4mX8A4ktrt",
  "key18": "5qqHxfgN9AE6sVTaLj3n9u252hvSbMRAjeWevdioRfjCCC1Mdng8TBudsmCQqbHvMB1N6Uq861mDD3Y6BGSei8x1",
  "key19": "47kk6tCTDUZsDLUGKLeaVqfdm6mkydbd4Y5qxSL9EiN4fJ1o6noHD5aiRKqqh4gTQFxH1HZEfERpMZ2r1HsrikV6",
  "key20": "M86xikHzTyLU3mVXW8u9QbRaXw7hMrLkr3wtiWVs5JTZbjuv2jdV2epC6Zm6g7zdMgPewaPAJjAnNoyJGeeVded",
  "key21": "2tV44W8wyQEREyppruxo4cUzCrUtodheC26LgUkghi6zUnvX8ewxRvcQWsXDuKd9qudvk465KEaTdBPjksqsH3Hp",
  "key22": "4cA8Hh4b9hSGmTBZUCyPjsE7Gn7CjVBCRpdM17p5hr7N5vnsoyQenMMWQJW4ayFjkTgNtyzC9A8wkNFxyyou1x4",
  "key23": "3dBsn2jcyeeiGyikdNDDP2RrUx2xdnEHjJN17v2BTaop1ZCzcz1y5K6ajrU7SyHYnxBvX5shQdqLARqh3xgx4wMQ",
  "key24": "2FPZ837RPt6CnARCm57AmFQC2858B7ngduVahVXKnhCSadPigtxBR9shMnd7nDpkR6YqymXNUdcBKhgbY7FzCbpH",
  "key25": "4C13d2dfBPRkEqCH93mu5Xi6baesF1jm3B4dHnywpJkuBbUsYjTT9RgVEYTTXg16k542o24TU8AqqHHF2FZCkDfo",
  "key26": "2vidpPqTqPNPzo8K7NH9gSCQwmM9EJbhQ1xMp2yFzrJLYg7MBTEiXVHaZU2v1eXmg8L5Z6hHRdz2M4iwr86WUPm6",
  "key27": "2ntTD1tvPRbFB94NbnJk5b8QQwg9mE6M9CBkwauanp1uAZp7W46h1e1dn19gBRWiStGwgZMhGd94Aaa4L8mxSbFr",
  "key28": "4LZXthnnkuKwKpwmvoCACBVqVpEoNxEWmwUfMpLyMx2YJW3eFbETDgfDCv2ZhEfnLoecCYRyaxPBYdoVJbTJ8Wbj",
  "key29": "4vYJzj9fcMyckKhab4sccA2btcuBWHs8FiHK8i2QqpxF9SwZgNxAos1bHv2jSMwuzm8xkUrW9D8PbFYV7h4WAfdn",
  "key30": "49e3hVXz45oz3hF9YheWrqbkTMdpkp7reoocQzXhXBXG72dX7igZ137JXhbUwLX6FU6kFParwMFVqqBnhUXjYqW4",
  "key31": "4idZ3G3TVRR8F6KKUxioyx5Ut9iFHoJzwk9CqWCsgFhoFK95v85pP2U7kRQnf6UbvETTpFm3oXWGHxrV3mya4WK",
  "key32": "4xkBnTfaEwrKYp84HJ7AtkbMqBrMma69LkySqUxcJoLHqnEAkBk14nPQJe372oQB9YhWdC6bzxwTtjffC76koBAX",
  "key33": "2eHcLSALkYFYSCkfiqm4u2vfML3jVw1RAru4qCetic2XzoNBvgBQVj5DMYfwhauPii1e1kUSKxWZPdo7GDTQHBAk",
  "key34": "5vQfp8Qcncg1qUsDVPGgE4T5D3JeCKwFbkMP2sAqAQawn2hcRdbuyiLnMTBwisKXZC71ijAYfcAKmwPny58rLzyH",
  "key35": "44KrovwBah55aAWCRpHbdLqFpuh2cpEwCtNEP1g6FSU3mUogXKbCVf76Mw2rjsVRGXGayXrPhyzy8zGmeDCypGEv",
  "key36": "2j2Yo7sDFE3aVthQSYbHQo4KS6u4V7NLVeVom27VKpQFXXko5H3JNokdM7cTbgAaBi43JrKKMfBbj8nSzR8bH9ZJ",
  "key37": "3LA7DsdXNybfoa9ABie5ZFCi2ZgQbUuoaepULU8QTjfsSq8UD7KXZQtQVj9aoNfu7JSDxao9FY914ULpvNBuR5Y4"
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
