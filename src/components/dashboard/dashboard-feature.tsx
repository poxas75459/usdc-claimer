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
    "3LkGNWbMknDQFe1RE5srkn1AYgPP6CD6rqqmsj5Moj4sEHssiJYLKKdn4nyb21LL9rTErBtYo8aZjFeZ2ayG7DRS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54433TYH2CGhP2j9TcEg9K7Yxst7U5L9xpDQmoZp3hm6hoM5gyTU5s3ZoyWFxA6FxnbWyvckQQNiXqwBDQVNTwT8",
  "key1": "3Uf2tcB1HoZZhe7KT5UNFve7zTqMyEw9V8HByiDBdezf1iqQJmMK9MQAaMTiTNHPJVDAr4XJrxXHQhJzXYJYxzcf",
  "key2": "5W7UzBi8HczueHf3yaUazL8GosNvH9bqqfYRZ78pyWhrEfa3P78bYTcmsngEJSVq6zV85HH6fsZ1tXcKaz9qNwWq",
  "key3": "4JK2b5jMDaQZfHSVgt8LnmeNQfsGr5c6tG1krLByUCdULQkx981qz4f6wc1TEzFCdqax2WTiwPiBnWwE6odT21o6",
  "key4": "4DUtAn7KUqhpdXUinFR2d4Fy2QdnVPUip8P6P4VDP7sNF62qEzmwbxEoZBjvsoqjDA2qBW9TWBRoP4EGZ9Lp6s67",
  "key5": "ZSySAXKgx22BRvk8LzCrGCutAh3BNmH3o8SwQxgiouYLKyb8ZfVeiFoRqvvpRfvJfSNJcorVQ5BhjThWnqVRPq8",
  "key6": "5ZWyFDSy6WiU7Ab2mrUSTodYvqYk9YauFVyAQNo9v1RUAuFh9RjWyeVWHvWQEEv29fKN887cDKMbQEdHGF2J4uGP",
  "key7": "9VTztyKSXHpVS7F8BrVsEsewSwK8mfoWiTr6PjyVhm5t9E8rVcxTTvi5NKozPimRhy4jqzZYsUEZmRXWgA2r9fH",
  "key8": "dngkF6ueaemLhA5otMKwnBzXtvy2yGL4TDBSnVWaHv6QgkUjsUm3VLZhp4s4tpbidohFaoQQqRtw5XuMw2dxiT8",
  "key9": "1QHLeWsQY9niJzRxbEsP1ArX6eKyqEh6Qysq9Ybjos8NA1dYQBLReCwnzoD3EjyPYX6xVsMbcyvCpA3jQtsvs1Q",
  "key10": "2hBNgopTo864BgfyrWDhzkpPu9nArZCK2JfifnnuZ3pjvW37HPJvL6BDK1C7w61j8HXJ1sBC5rT5gSP4zv6rWYui",
  "key11": "5zT7seMgC5RnZVfFnjtnAj6u6tUSj19QCMsNKpc6Tbrgoo4ThsQxQMffs8m1acYrmwWYzKJfUmofHbwkqpBd6bas",
  "key12": "5LRZSqNag3oUBFrfwDijqSncWFpjKJzZhSUoudsRxc8TKf3Hsq3PpsUQGs36KMqnpBKsdUCBuRrHDMFiMTpDmgs7",
  "key13": "vmu4WUhYETaRQtytRh9B5zD4u47ndhXrmYJCsPgCP5XBQfMjN22zPEzhD6GGMbKeQnsQGM7kZZEtRGrcrLgciXK",
  "key14": "4j2DDJzAW1QrH9pPHPKtpoWuSvCMNCEstHtXWrdHy7ybCDUTsJ4kBm1YsuBFLj3scjvJbhdRLweimuFL5mKBJtVH",
  "key15": "47RUqApkSBu9LTdKnHdtxDY63MTbD1BLkdRMsz5L1oiyRHmz5WykH6TR35mY39pydVpZBdUrsCLraxVbEaEwE4uw",
  "key16": "vJmqidzuDQh3m1n9yTn5pumbEVAxCVg3ZXQTnk81bdWNkhmmCiY4qhe2xa3jUQoDnqvEYjV1CpGC5LuCFw5DBLX",
  "key17": "4LQ82tB6Eys2evQWU4Tvkao3ruywvvZ5eqUZG2YzhCTD5G5KbWTtBvzfExgBJYBDRqcvktxeTdarvYJuNxFdAY5V",
  "key18": "2Yd4t7wPvpCg2Z1a6VckkHQwRNRTTrLuDbRGYQbCgJQtyXjY5WggFJkicvvHwgTPEaR4WdjFkT6dzxXXukfTuAj3",
  "key19": "4krg8wTU1G9BSuRm1XCJv4SvAJd9PBgwKGD4B2383fi9pADL4D8gaSemhEwucLseEvjbjNFtcbdtePErdzUHijVe",
  "key20": "xDHkToQSt2RPQgMptTZsxjuhQw6ajTX5yYWYJpRnDCR7nj1VoNYbQNmE3dhaj3J4tGnzntAGxehyzz6Ko1FvKhn",
  "key21": "62q69d9kGQC48pBGUTyASttnZrcQMk7qimmUHsWhbiH1JosGem1GGHc2Tkg4aAKWddgAyubNYAeqBh8VqMetiy6",
  "key22": "5sm1Ne5rVHgFtDPFoVgAB9hd6YLCC1umynFnLLukRbnAowMTLKgYBNXpn2PWFfn2FjcxUrzUzbSjABLy6cLfmF8q",
  "key23": "5b83WjgoeBV3rHS9N5iKitRSmbSc7QPgutwCB9oKQVK42RrJFdpsRGjNAKtZYkyH824ASnAG7DnTeNp8xtx8h86G",
  "key24": "2KRNeu8PRSyQ6HXUJkckTsKie2w7MFGhg2iynd63HYPcNcWB2ZCGSsPBSJFFyyeggzUkNz9M4n29KMJKjWhphkxF",
  "key25": "5EjXugazJt2QCm5cBcBTvCACpCi7V7fJEk5nBxEUiq67f4f6hMTak9bBYWPTfqbwhBZ8KBaK5cfyiezzweUkC3Eq",
  "key26": "3sAueWeFqDH2kNFryUTp6NKGJa7xXXCMq6ADt9oLkexz6Wxdd2e6pCnyLr8E5KF9doc1dessNkhrhDsXS8iMioqq",
  "key27": "5p49PqXSL8GrxWRPNQKR2MyaKH56vzEpjV3o8jPnBDoFqRiYp2sf5izUTZpTqFAN8FsASYqFc2E7JEEjfXovHnwP",
  "key28": "417MJ9MoFnzue73UsSPHZsPR7BvFQmdqVum8fobWzq6PQt8ABfqasRDSeqYZLKbfb6EyNAhQCCHLvZMnsnt3EAMK",
  "key29": "4qpBxmsnkDGS7C2K6Z9mm6KaSHenxk1uHxxTrEoVRYrq257PpSxoSdM2M4t4f5Yz7a5V66JgpJPEPYusZRQzKx9c",
  "key30": "2befU5xPdMgBmeVpj7Q3zVteB5qdLxf71bXZaVi7sR6MM5dztBg7ajCtvk7QqRpmN2cBAAux9Bh8fiSRthahcqFH",
  "key31": "3AJvbJqAViLyfUUUsHPK94oapKhEG4GGNwEyEV2PGNe31Cn23ux2GVbWai51jhnP7pnKW3DESXTiWjawL1mPdFgi",
  "key32": "2B3aCmjEXqEXgt7bPXL3Yo6LM71grxZkCg2bNBUor74KC61DDEDHV5cb8gnm2Sk6j9jGdby4a1FAveUgAA7G1p5Q",
  "key33": "2sDVcu3VRarXN5CdUpvLvq7Nqmy3pw5ENBjCamYNxoNM33yem8kDGF2hC6fE13zvkjZrV6wRLqxTYLRPPbdEfBNJ",
  "key34": "54DB5RtivxQZv5FD2urmfweCBqNAH8XjcgMf65ZMnvhRcHVTT5aPr1fEi8GwjDECaHLaFXfLxLKeaSSfkjwMeCs7",
  "key35": "HUR6fKSqurCqiq5LHX69gzfMFWzrMq2yHaytRi6mFsE1A88Zsu29zFb4NrF9Wo2JQBXLEWEqUPEbTjQ17oLpKsR",
  "key36": "MfWdjkfz8jV6E28GbwoQLhLqrcNVKpnviyRxwuYy9MHbRfxDdXCfRhk7bk6kKsc7cYTKugaEU8vTX28Eiyv6Ujh",
  "key37": "bzeKQ8HHAAToj5svic5GZJsHLN7L64XANoQYJK34cFCBJ9DcVwZKMTyi6ARhn8kVdx1iZXNdhiLjij8f9ids4WU",
  "key38": "44CBTQ388H2Yh4pLQUkcnf3UtKMZfbwCsBSYYSHTA51NAopHEA8v56nnttEXVhzVprVozsNy2hduLWpeTVAtMRLL",
  "key39": "49w1qQWtshpL348yzTPPwciCpurQ6Y8KRF2Vy84ZfMT9QzxMWXPtsCagi4wRmnntaYAKG2h5oqQV2paUwsUxyiHA",
  "key40": "gsxfhZDjW1T5pftEQCT8yMWiukKDkAVjfDAts63Pc6ciZwyzGQMXsttgmm4rp9zcbsASedWQrfuRn84ZAn9UqEv",
  "key41": "mP7vo6AW44SSVwYvh1z6BuLJypQMiAkBMcTKC1FR3YNSMthPwZHWCodakVwxjtRekEgN1qfZfx97zUvnDVbH7kx",
  "key42": "3EZYUandnhCocBZfmHF8on2xAatZKhDw2AcoxhAZ8nS5Sm1QmSHFRrG76mZBkwFzHhGim1c6vsesKJmRAkcakdEa",
  "key43": "4DJp9qffPKDPrBCtBoRzSHYssNaoeT7nt1Bakr2hCjUzWZYTBsceQpcNftS9ygajNFMgxi7Uqe8mAY6jdo9JJpL7",
  "key44": "2tSshzhEr1rHKYjAZaM7kBwhmFa2mTXdYURkPWgaqnfiV4FcjZ2imCiqN9hU7KZ5hxZ3J2MdbecsnqfDaX9XRqoe",
  "key45": "2Rxx4YRU7fZrW4DsUC8ATua8duTCbWMhrpftr1iyXS82S2skn4excUaHEJEHL156hBX6MmGbNQFvurpdLbcDDd7m",
  "key46": "641mLrDCduioKsoDirtACmHUSEX3LLK7KWT1ZneQxL7agyCXo5kKVC2heSjVFbwwY83Csf6xDGrTSeJ3ko6Gg3uJ",
  "key47": "56jouVFNYRiSgsXKD2jGuCboFHstdue5PATMcrNieM9TcLVMmRqCGuwhakPjbj4eDH4RdAjmJovhugUKMBeuqFpg"
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
