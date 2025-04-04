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
    "4nWC18vnmYGVzGo7eVqeoo28JDMXaXi8tuzB2pXUS4CRedzuETSVUpCPVdQ71B3pF6nruqS8tg1Mby1bmShwGLZa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jsqNVJb8SNfne6DswjV2ZT5yYe6zAkhxK2NfoVPaZCFRAACtr3UfPifZV5L4was33um56JqxYad8cnPE26Sam9d",
  "key1": "4BFSkJ31xA7p5RebABMxBnErLg7b3gJ7ezWzeyz4QtCkqJua7YAohypctqRiMv5SPrrcJDPtkFiyFuHTsd4CysAW",
  "key2": "5FxyKZULJL8o15QtFTb3LNH6b57C3iHmGNwWT3uhQoJudNK8dcR6xzkXkQZrBrVmHkhnV2dqa8nt6F3D6tFzbQpU",
  "key3": "4bVWWTz5Zm1seBfXZAkZZwBRsVTzDRAqtGNtd1WUDUvFspRUMuAqUwTnPxWvo7CNvHc4msGNsKH6W7k13XqEXhv3",
  "key4": "5MpS2j4faJ5twD26DRs3WtHKDkUnFduRnioTwbqrwa4B14ouw9G6qgeNj8r3eGSpdJNm6PAu9cJ87g2Phfj4Lkms",
  "key5": "3mBr3j4jkAnEYWe8WGeZnwcqi3k2RvnEgZDRdmWYGufQwiHfRXQvMin3ig5RHcQyUUMzbE1JkcVnVwGvTWz34yrC",
  "key6": "XWVCcA5UsQq6w15BXjf1cdueoKCQKnnCLKBQDzocQ4z4xL2V2KMsXq9R6DJ3vkm3jD4uhKLJ4RNaeSb7StG6HqV",
  "key7": "42LSvQukk1HMTjrGyPz3jq8wnW6ekptxAZdH127Uwh8bvWLuwJT27x48LNMWT5Tuoapf1hxfB5p9hYvUfvL2Y5Do",
  "key8": "5xcJsoAMu34umYvAUXusqxBi8SLD9wz1m71kf6whfc52B8qq3WBEAQyhHc6w69DLg3FD1nuDQVsmCwfeBfsut7pD",
  "key9": "2hwSM7WEhAWWR9Tr3xKs7aPNDnzG1KDN7M78enAn8mCE7uDTX8vBYawTWW9FzgNHchJVeSoVnhi8SqYT2zNivB5h",
  "key10": "5RTvKY1sqMkSCbvUhpooP8DoderrUcWvbSgFBxPAAAneSfNmBLiTPoxXYpyBG8U8obG8YuVxmULUq6MPsRuFaAr4",
  "key11": "1P5Lib3Jbpf9aEtwUZ7aB2DpSk7XHLJt21d3QYexovrF9yp5BB1sgvm9PnBbsNeAKe18Wisc5XDdpCUnxQvmkMn",
  "key12": "2BEaCQue3KejNXMU4exg45qXw3MpKGxsP5vcfcM3kT2RPMf957xYhCbQufhDKpseMgxW5dbCytVZKesKViFDLDm3",
  "key13": "3cNWMjUjxocY7GHuPZoj8R44yEb6BCXY1SZXK5jktQSkVE52QLtcibtZapVRkAGACL6QxZvWqsGr7A9UivJyQtcT",
  "key14": "3b26vqCEQeARKTEwMx1TSbzdFr2uo3Zu2iii2krRzb9QKZXmmnCg7NJ7zeMgSeq2FgfcT9vWesYSYHYbcSoVy17A",
  "key15": "5F2obQuLNfBU5nwdHCjpJ1tGfFgs4mVQB5EtgKeDmZqTBYdvMDux34uzJ1k1crUYDgU9u95LD2p9PXSC3Fa1mefq",
  "key16": "2DCWtffqw55c4AmwqThd55HUbj8WKSykSbbrQkoKUnm8PXGCf7onSAEnuxDetNDETtaHUU2rbZyD94EhbJfchAAe",
  "key17": "4LrJJniurWAsHX9DteHMqdYNiLDeMn8UdWcTYw9pazeMtKmkFxhRzoh6qfmFT4Af66dc31NUqteBimE3RU1ji8EA",
  "key18": "2QFCGfKzg7MZQ9TrWFWB7WL3jMArcjpNk29Qof1LFphD9FqR9ULZCgCeFRGh2Q8JZZMU2f1He9h8Rn8taUc66YSc",
  "key19": "4mmz2Ep1wThueXuSLCire1u826qrJ2bzej9nZoS1QQZbWwuFCRSWL8q9d7J2an9AfNpjaGRqw3xC3CjhXoo8bSVp",
  "key20": "45PPkmXM6xx5dATh3xT72urmUpCmJUuam9zWFo6NjCAshqPG8kjmCzQCY3qxKiGXGvs89YCNBWapeZLKLgaSAXYY",
  "key21": "5DbYEshGFzA4rErBrP4tPemBPtLbfpLpkGSVGYWH8GrzdVZmcUULy7iTQgMjCSYBg6qpEw2ZuUD7HxB6iS8NPCGd",
  "key22": "HXtxhDFaUBBsWsTpPcffutD8y8RyJGLre6LWjFXdn655btXENdLkf2W3XayPNCURw34VygiEGRuZ1CcAoFy81tT",
  "key23": "4kHw7tWWHny9Hub9NrCNZ9vNdKDf7S64nNNYxWU1knHR9HWx3g3juw4kTr3kXh5ZUozufk66BjeadL6LvTubij3T",
  "key24": "5fuophh4e2etaY8Yy2LTX76HtdGFoptebfugZAHPg16DkakfzLdqXNKnAiKcWyQgqUjPiC6CwexmokDViSAGpRiz",
  "key25": "4TLui93ekfDd2Z8wbamewqsF514gJtZg5dcu7pWckNws1csXMC1C1QAqm2SyGGjGd9jEGYVLQ3L6CvVQ1eXBgYd5",
  "key26": "vJ2XjRZmu5ag1xFRzA14K3NNgoVqA6SPEa9acGT2vKv5XG18aEvdqDfRnLmSP48BvqT3pvdPCtEFpoNLaVwNq7t",
  "key27": "EsDxuEmfrfFeL68EAVtyEFmsYgjGnsEEb6qfiPRwjDmF2Kr1fn3r1SVibtnNKzrnmJe1NEvzxzqpeVH2meU7Epg",
  "key28": "A6g2TYosBtvAwgbL5eTQzkzfWSvKUgoZSczWGQY27Vwmzi7kwqCBcc9GyQAG8a6fsQ3VZYuxr1LsHGiyiQ22qU9",
  "key29": "mYV4T1CYQVTm6j2zeEy4ikEvybqFBJi7nGvxPaRoe1hJkT45ZpFRv4vwWdrkCP74pexh9F14J3c4opD6nDCmHjt",
  "key30": "471GMLggUbSKMM2LzpCkpTVGScm3iMfPMWZ75uWWYNbqD7vgxRVfmyzr9Nenw8MF3h59GWziuAKEK7rtzGwW6PC9",
  "key31": "2eo3AKkvvanspVZXnEXUBNyFPBmtMy3zJqdVwaafLEuM43Gwf9FU8LhFekhm7eGgsVkwyiJ7rNbNXLe2R2nw4xDa",
  "key32": "JHgwFjcZDdqWJQejZHHeTwVeuiwv48cNwSpSFPs7iLCQq5dhpVfcxQX3ohfy8o5jsUxobUFeup9pd2ybJeu3JSP",
  "key33": "5sr2HSS1RCz6xaYgY6RbdkfBbanjCbFCGHgcoFkguqjnYyALAjBEMaCe4TyTEUrUuTpYocKbK6nkbmH2asRbntB9",
  "key34": "1Eoh4W4iLFE96qHMZHdxKZQq58YPS245uNkuBn2Cdn3LNVc5mH2NNKYU2sPaYgfRPyxY1RucFG4omUYV6a86NA4",
  "key35": "3WCsWEbhD4o5quwnWuThndbgYvKRDfVvxUXSJZ4W1EXDa8rjKojzLg7WL37TSueCUtoQno7o3VXUnkfe3dXtfVUs",
  "key36": "5xdMWPuTkU3huWVQgAhgXUQzoAgBLMNx3oNh4KnVfH91PK14KdohBqLcXEu6bmh6Rr5A9EQcmfSp7jn828gwvF1v",
  "key37": "5yG2sqJwxGuhQaDQ8A6onC7mZvUpRYRi2oVMEqLnH5pRzED2cWBCABtXGXrmcdaEuPe9otSeAPdifqmo3FAuxoW2",
  "key38": "4ntm8hYouh7tFo9CbQRDYfCLwMY1WpoQTbvRMzjoQMPfmYpb9LeaLrncCxAGj688CmyrbnHGdhEtWjAUmtACECn3",
  "key39": "AueRRueCr51TMZYmdMFRKh4gD9Vs2eBz3oQDyC6azZYpxZdsx1HBwZW9GzSqem26HK7cYzisR6pMeq3CkPW4kKU",
  "key40": "3fhcnmCZZyBdzs1PcqDtsAN3xN6Xyuwsv5C7iLTCtM4iRviUtPTpGzTCJh8qafjoh2DRLG54rY1PAVDfJWtBpirL",
  "key41": "5AXwii1uv3ff89Ujy6Ttod6wSDiTKbQbDuTujXMfWvy9AjFm1AwyB5mSZKcP9FfYhDLjjfBpnHRkaEzBY2xbfTjd",
  "key42": "5vhxVxBUUo6cQz1NKSfnZP1Koj6TeEMmo4bdzbFZEyz78sKGVZGZfCpenG94Sh6fb3zLMhptv9wnDMUUjdyAm59t",
  "key43": "5YAW2JRe4dryN3gKiP71ZoQKpAbhZpDWEx8KYhfs5FTjuKgP7JaHm6PJv8cZvQMgZ1Nrj33r4npCRykajep4JmSV",
  "key44": "3vv5X81qZgimU8jxyrodXdNWA4mf8JAxHt4ueV572b26FTTiiFewSx53QdM6E5Evvk7L6L2woHcDxULcva5hF1dY",
  "key45": "4B1GPFTTYsJbQ8eDszHpsgD4KjA3YSbLPSKN7wd3XFW9ahipJVKvoiJwa8yVkcdY4jRdXB9nBZF5fa9xQkM9oP8n",
  "key46": "39UAMytpuCmgXHZs7PWNptL3epKwwDZMdqXQLoi3vmzRUhoZpGxMM6eaKGYekit7AGhjY4hiq4bgbsz3KWmdQjDG"
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
