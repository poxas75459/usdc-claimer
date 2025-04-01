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
    "4MsdFrJcv6Tr8je1WU7tZwuXSKSANu9vpcz9aFRdcjGRjRNK3siz44pWfYd1fCMLU7WGmbQyUp4Y4vioKuafMYK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37mpbCbzCDpGz3MuSqMMoc66GyFEFeEEWeePHTXywuy5FcChPq9mTwzTbcDMTG5WQmgVtJKL7zqFQmtSJMMoeFun",
  "key1": "ZJh4CfAmu5NfqyexNtxiia8fpM8zzhgXKvXQivFnKMbZeGuQqoWSfE9hLPCAYvqcBQYWfMU8KFiwjM4u3VHpxMx",
  "key2": "3TpQhqd7cA5vLxSgwbQdapxZobCttsC1sRpvUUJvBp8tSmoxh4eb2gzCP2B8emKDDtcG7RWH4agmzb7mghp1c3GR",
  "key3": "2vDT2MQTLiE7ydpRTLebWPN1u3p4rucUBNYPcGYUah9soP3FeiNXBKgAgodCVfypqG5pwc6Ds8zCL4jAoKEkpPAD",
  "key4": "3pGjZwsc838hPXSPqkBWX7WgWZ6Jd2UmEtycQRiH4RJLdXWM2Q36Ju2J5cBpD96gBMsSCskMWioqANB8P1TZB36z",
  "key5": "38AvcHUQYPj65ChvBtL3YU4AhmuCr7fjnsMpodUcX66mxJZj3kFdbnzJ8m72fKZjnB2jroic9UWuwAGFFTubUcDn",
  "key6": "54Z1dKNVAEXUU121Qbb47tSg5B7qkz4WoYhAK44CRuM734ts7hSBJ28dj9rrQShvqShNsKcWCdiZhtkC9cEdSvi7",
  "key7": "26bM6hbPpv93ptnsjiXcLDQD8kVupJxgEKK1YWC7oWNrsfMQm7YAPJa3R98RX4DzNfNKm6hBziz7NXb85kMh6Cyc",
  "key8": "ZpUopp9FXLh6YL7AdguJxfKszuJs5jpQeHabYdygi8sedtLYACce8hAmSv1L3tMd61YGVzHX6Xo45qjtac4MtP1",
  "key9": "4RwkR3mdZpMZez8WKwAZrsaq2K6nRXhjURePoQGLf8pYG6WezqfMsNcD3H1EAFxS9iKWaghcLnePAJRwtecrdcvG",
  "key10": "3kSvTAHwrcCwqwVHEgQy8bT1dFaA3eBZFs7ze8qM2RxcMtPv9gw2mjXn8V5ZoHzeyWU4FnKFhLom1sfzCZ7vVTKe",
  "key11": "Zq1SH5JG34fCpcCRqgaZ1MhXM5Q3MtmbSeccg1KQMgBf4u2WFk6ndXNU1iPrFtntfmDpFK8vTXB345XyP31ZBSa",
  "key12": "3tTmC5H13wrmbastYVuMM5Ltm1bDpDX2Hat7BQ7u4NrFY6Lv3XG9VtPiwH1HhXgXLEvjVa3ybX143S8mLs7f4nTF",
  "key13": "63omJQRD5wDHUqAnE9bcGQ1U6GbgTEsDahFaLY845uUr7SrywKsUwkL6RsKseH1bDh2Qqsgkb3pgwk8E98uDjd2z",
  "key14": "4uA6TvXB1ynRYWhRmmi5tk1u4C4NW19eDJGQXbbvtWFPqNwMbprZnUYF6935WkwufQ5uwsQpnUmJWs4UyeffQRAJ",
  "key15": "64nVYNULX6VCcoi5KrMDYqWYKNtfmUqZDqr7KTyVFJmf5tpq96WtjSDjoRdTtR5Tsf9ko5abTbNXDdxbZ8qWWEHw",
  "key16": "2tT6fsiZ7X3fKs52QavEvSahUMWSt3wVqUqRogLutW5C7eV4RJa1EGuYDFoa73LBFZy2i81M383d6grHTXucxuWu",
  "key17": "2pt4JhT6FdWH7aMannSJfPuxoHeTUbzij8aymVxU7a3TNwK2QnCzrVwqgjbVAoNvMBEketzJo3KmsiHneigvbijk",
  "key18": "3kpbL82pHEpDLZVn2MxQe5fFuRXaYAg1gBCyd8ZC4jYrK8gis2QKEgRrddC1GgEdZ4Znmt5sEG81ZR5aXG4ttzeD",
  "key19": "2BebKtKSuqWK7rcJca2bQut7hCiTVjeNdobzg4H1pubKJW2cjWEvy2Gy94yozkqaXHSwxhwGf9nnRBkGsZgPXzm8",
  "key20": "2yMoxg4iAfL4kSi6FpFtH4vaHKt4mV2jZmSgmK6g3rCmn1PTx9zQo6y5zaUBn9i2JFQX2g5UePh6z8LqxXZYLMBp",
  "key21": "3eXg5u4fWqvNf2T9omVrixT9E5mnGyxuSKXd1eTr64GaiyZ84Yo8waURs6zcuNYNHA3hz74FvEPjZmMGkXQAeXws",
  "key22": "5wSyLwA6wdm3Cno96HVCywX3z7GwuhJ7Mpx6YTYS2fhaxPx9JrR5hjdfY1WcgqeM7gvL4F7FwtUCfXT9KmeZaGNR",
  "key23": "2AqmGj8egowTSEYdGXeYoWfkH5hre43Ra5zmXHqDW6igH4ousDzeNFD4cpUThJT3QVfYthj1Ds22wjhYSViuAEe8",
  "key24": "2d2g1jcAULKDDdDTnaZZzjQUwVHbZYeft5NKKio7KNi8etaaKGrVfv2zhj72vKdSHQFLzMUkrXte4Y9LRLvf3kY7",
  "key25": "2xL8oFuUxSbQsnJhFgnyLzw31veZfbYVLmkjvJ5sXUti9RVNfau97DKYjY4odrpkEBgyWNf7BWQ5gxu4rHmyPm3y",
  "key26": "5UFkPQgDYH8AHC8W2e5w9TTZAqgk7F3pThZZiUqndT6d1GnFuLHnCvGFp5G15rExpGg6qfN6DzLTUjaHbeQpFgZ1",
  "key27": "52TeqRNAQ4LgqxJRnJUeXxQEy52RUozxRJF4o5CyfYhcg2wu37iTM2gmAgUYkq4uG98KZuYKTQQGS7Eyx7xfUSWp",
  "key28": "4hRKDLJXNq7AJr59B4m9EA54FHBBFwisFboZW8gPNhhLikL7EuBmndoU3APDA27aBSWYLk8jdEasCkHhZLCkeh6U",
  "key29": "22WuLYdcDSUEnLykLwUCpwknS4AWijN8RcTsHtZqjTBVenVnu2SxXD1WrCHqDTyEsgW9qTm3DYrxfKasKMreQ9XW",
  "key30": "1nBpkce4hcdPtNcmK5xnNseDKcdU8j4MLQ3EUgfnb4DWpHPMFmyQTmiD1VcNReLeX99DrMnx7cTtH8J6Bviii1r",
  "key31": "2DucwQRzq3g33Butpt1knraoCs6mKNWP2WFidkL9oQLpDJ8RW57QVKuwkLfG2J8zrmrXSEYKTiRBAdvvcsqxx4pB",
  "key32": "36PZRa7EbfpuwvFLTkKBDH99m56Pn32nh4AVqiwRsE1EN55dc1gE7yaBuqgGqrR4n8hVGjmJvA6Mr2WdGgYw2Ueu",
  "key33": "5PaonhNWMmHDmu6VCVe8RSUZNYgxcsZXXvFNQaJv2fR5NxYN8v4Sq3mzLJqmcdLVUm1UXQhMZ2AgqNPoFf8VzCp2",
  "key34": "4WBsWPeD3ZbvnEoYgPK6k2BVmB3MZq2eTTtnp9B1LYtp5fpgFZCFgU4VdaCu4poQjynhEq5wYbhuTfYeU7G5xHiE",
  "key35": "3wMeCYdqTkr66kFQ5LJ3ovbLQtzSnKnSa2Q7Gx3RZufyuNuDu7AzKf6JYxAEKXYPGTCapAJra5j2jZDspydftQzP",
  "key36": "Umhgav9Kr6FfcyM14hM718g1wYcEdxVS9LCLAZcTmnbZVZ7m1CDMfmEizfaTS57qBHYhwzBWgiTqFRsLwFZ3uTr",
  "key37": "3LWZiGisPkfqKkoMLFYnKz9DCf5LNHXTuy7gL75Wnihhjzy6EzW3AYQp1rC45AV22hRzsa6TdYifnSbYMg5TcYec",
  "key38": "4J9zJgjHdsZ54AV239UAxxXzzYhav1AmLqtGK9JesdQMdZoi8jNtNiQGiJNaC1oBZweJsgMwEDuEpLgVEp3rMCA7",
  "key39": "2y1bL3JpyKDtfRmCxa5ENP7Af9c2btMBV8ykdCC2bNBMNkRhxnMMwMcnrTj1bqmUagazqPotG7Fjfy1eKpqe6cJK"
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
