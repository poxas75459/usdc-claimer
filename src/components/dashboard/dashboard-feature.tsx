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
    "3imvhE7p91usbmADMUS6rdiSFa4pYeDWycUjkkE5oco5HdK1XbHF4ebHZzjoBzAQZ495dQ5BfkqeUPKaZLUwosKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BRN22mrL3w8S49M9tCuwbQsvpXDSkEVVphGGUyL23o7R4CDcLLT6YxwFP2rSWPgXx4tUyvwgef2kxyGPFgYZfgi",
  "key1": "43p1wGj8BEbfyjLEGZLwFDS6SsFYvVx1KLsXgr2L3gv6Xoj97VdRq3ufoNHEVAup43MGvRyh6ADnpaBJynSpYavn",
  "key2": "3tDYMoQEgcQzqiMkyTfNuiTxA7J85yWX1h8dwJY8aSfVUA2FLoiLRUsKb4yrxWU9tChb9qaZZ8xGR27XEtgS6VVc",
  "key3": "5f5y2HtDb87BHJ9eFARH65TR4BCcmyd5xJdeiqVfTuKQeXYYTRNoZPHisqwcEkkwFnU7ET2TAM1kE3cMBgTrtdCg",
  "key4": "NAY9sEB2WEJGBNY3VPd4tS6gCgcvX5Ekwp54BnW4YPZfWn8rhSecNWu2NpaPwDC7P5g5uQbVtMd19rX2FzxiiqQ",
  "key5": "2NZLe4ZY3587nzpn6re5vH4LtetCvTvfWRwXrGw3hSL9AnYpb6D8fnPGqCrWPiLChUyBB19gByFQkJqNR2gNH3vx",
  "key6": "5cFLjU5kFyjinKJXPFgcBJ49QVjGJKdNF11tCyznigxhDvKUspCjWNNJ6ChDoWCgs34bRt2ZG4SsWjRrhp185Rtp",
  "key7": "3ZJGzyFybiEKgx5a1u2s2j3eFWk1UitXyLVWHP2NwWutT8JNKvfWyKCmK1poCVtSmUcZAaZry9QJPdy9G7Z1zZKL",
  "key8": "2CifrA1jQYQww2e7XUAzgRnuTj6jqmHonxBRpca5euAnBhDUCuCHQVgB8YvDugwZapgXQpvVx1orbSuYBd8qzRZo",
  "key9": "4rk3ynJwX2MsG3pw41Ls8DaLFe74fkyVE3ntAm92btKioMG7D1Y5ZUV9Wj4XP2mK93jdbiWUq1GnuRCSGqns15or",
  "key10": "5zjqw2BPSf3DzpwRKsLYSGRbEVWrjs9krj8Vd774CbBRSERhY9HhsgYT91RbHzUyDQW8nfBJyMdLfthi918j7WsU",
  "key11": "42xaBWYFbDRkUxBiEpdnswhBf2YcsBAviRKdztDY3TRGgYJdkEUuLyaXkySYD4usbWHHDgEXJjn8csFmHg8t5E4V",
  "key12": "3n9mTdjvTRLhmFhXhKqzEk7A9FTvmWv8xModQGzSP6ELKGxKoaZuCSzoaewGBJKYs1Rcz2WqJFMnLC1LdMyJjMUy",
  "key13": "3Prvi9HqR499CNRCHP2yhbqNL2vWYi6gpgZqNLxVTDRo7bZxyDMcBsHK6bcnEB8ygv1wF76X3n1ezNgUW2ZFmYYF",
  "key14": "N6wKZ9L8MaapR5Yxkar5h5ruLnhHpmCGdYtnjdTs9UkStMBVoKJFnd3cnCFTdxDv48mncCkKRzBCS73iQpg2Zgs",
  "key15": "3ry64UsyhnTjkvfqDEFEXykJ3d9ZDCS1s486HZQWJ7iJtvKsaURr4pJYpa8FhhsTCdCcYwEL3L6nUnCNHRw7f8Q",
  "key16": "56G7u3pvrYpHr9YtUYALnY7g3N8hNCbXGDuLi6pXrn3rrtm3shM5zvr9xxsp9b1byBFxhLN28uArEPEPt4c5L4X7",
  "key17": "648ZbvN48QnMYSf6rZG7yvvuH1msjcki6mcSixsCowaVgE8PfpE91oskU5rmhQhiQNBr86vVUjuVukztivepKcJf",
  "key18": "D77ThxB8E8cEEqASZmvf5iq2gHPHYYatG5LsVErhrcPAecixKJsYeAKzzAWo8Z38bfky6VivPnvSjz9JUaSLKay",
  "key19": "2LcbdED4pkz5oVvB8TuPGpwbaWQjNf4QoD4wRNUXxd3EnuyhKjARNhSkZTUXES4KZkHMWkungg3USY3DszohP1bt",
  "key20": "4DJBwYg7JeLvavth63sArKbhfa2njjQvNLZSum9mQakG9dNu8SCnToPv1TJqnaYLuGziaBABCqfFs6ATzxXJQ8B1",
  "key21": "4jsZsyQKobPP6PHVfrYuuDfGzCRDBKMBcoMs45GHwQCZTCJjQVHRnT97T59hvsEeaBjBwM6N2KVdhrRm5jobLMLt",
  "key22": "C4pg5ZYMJ2Sb4bR4pENh2r6WYbJjgLpLNqzbpG2E9wTiPZmTJ5TWs6HR23bgNfqynSUX5Mf9884bgHFpVJbNupQ",
  "key23": "5n6nnjfWkQaaL1T65EbJviNdsMfFR7jSr9FFbYAN82UxXMcpnhM2wwcEretaXhVWTa7MCa3Eg2CfakqMcpvNH1gu",
  "key24": "3QrTS3GiCX76bWHWoapFeTtKTsqEFfvTmbHeKsvBYMpPFZL5we5hc27N6DnY7JzxA8JqAuj6wbs1ciANrQiK9vSX",
  "key25": "2XvnjJ3z6W65aPdeRUCcf9arHMG3JvA6RrYmTZH7KzyvALvpR5HaJwZFUb1nCK2NsbB6X7WwHrK99ZZZrZoqQMHw",
  "key26": "5txcTsibQip7HZdTvhbkaoHL3jD29oZw5qLUhhpcdjNDfXCErrio8USEUF1k8T7ECNsHrQtQkommkfdEkrWQvTde",
  "key27": "2qHKWXFrdqgpSvFAAMQDzSuJ8AjmNP6sszafjRVvdyAyF2eSUcjM1hfaMRUn9Cm6hi8VAFdvZR5P9op3XhUocGMW",
  "key28": "4yVxvKjUavU6DesYNuLVE3A2Z1MTUHtTudSf53DEFNRi1LCmL4LHMBkZFMrc1MYCGoSo33Xajcpc1N3NMjhbRkby",
  "key29": "2evYPf91ScA4NE8bK9atiwzPbQXU17uJwwcQxUKkRQf8q8SeoEkbuotYZDsdNg2mDqHWoHtx3TxCpqc3tTuiVByH"
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
