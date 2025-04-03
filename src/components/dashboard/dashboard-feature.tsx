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
    "2MjEzs33Cpf7Tz9FWYXqnbxcTJvSuzfah2LUSYU6xy7Nj67fDWDc5coRY5ij2Byj1fCoSVjREoVdtCSkKP6LoeFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H6NB8ixA9ScjSPRc398NUuKo6UzeEhbAVrahxbMnFnxhDhbc5NBiN2ki3yArCGKUB4zcmyZF3wV5kA1K4EiDmbC",
  "key1": "3xoKmxXAvJnLtJ9MaNpDFRDgLxYtgC9VcCqjR3etMC8EH4AZ7H6WLwGYgFGYY6HjHoJ2NzL1FCvYJZdXrJekF1A8",
  "key2": "cQV1YRVMV5LQmc4TZwe9xdL1vJVvwE4JY794i3Ah7YyutjngXiZGs1cLYs2UEzYeKb9NKUqeLXLiVMjpqsC2NPt",
  "key3": "3qj5eWP1J7xmQYeifXA2AZPb2EVkQY8hUJvzYUsr5snUaEkR62afNQ1b2Tsvj6bE1xrzMiJVf7tLBmMc2rX3KE9i",
  "key4": "33wDc2cV69cUgCGorEWBYsjkmnc8c3qP8dfhMPD76yd5a4B7QzvuAGNZoXq8oaJk1uEB2rUGnhghXmk7WYUCAQjg",
  "key5": "28SKHQfmaksGjKESxcR63DKmG3dNktRSGbaZbSiS1P3CQnfnkVqz7ayZ3r5oKA9srqYJWXwugmJac4Jf1DRz53ee",
  "key6": "4wnixombQSi4j2pTteN8ASJD3WChrUoiamwvrE4PCMeKSa5C6VVnBk9o2zhGD9emRVFU2ub2aK5oV8siwmRtDpKm",
  "key7": "5MPyQ11ZMAkW98V4Ln2Hb5ABy7Jr6eihJsqYddGvpaTD7y9P8BHYbvPNyBQQUsR83kkDQHwDCtM7mcoaCr1WPbUY",
  "key8": "bPBhWyGwCQxUSrPKUjjb3NC4uTF4oQEMLQXskjFNgU7yfR3x9cFWFBuqqGawLsHBAcEJbBkNQCnEbHvxxKpshct",
  "key9": "3oKuNxRxeUFj7V8Jk57kDAXETSTTc5LKmmCREVpMPbeS7XgwZrNRX6mK6uAeTBCJYQGnphH7XprxcjQWSX1UVUTw",
  "key10": "4ARaZzFZvVpbwFSDZFrChBjB7mnPAfEDJ85k5f3DpLzQUgLm9otYNnmifTQMosQckUv8qM37E7xccJLctsLSwzz4",
  "key11": "kcLhksM1JudrVhyDtQKcpvdbGwkGYsXHUBbwD2Cx8BBaC7mosFvyef8WrdyNtEsS7hWf1hbzp8zbvzTEcx1cJFZ",
  "key12": "MGaFVEFQaAPHfgTkYa9LAYncYTCQE5FegUfq3a4WgLfx135jLZEPo4oocfF9SqvmDqbihydTPrG6Wccrto5fA45",
  "key13": "5r2GRtvBuvUiaBkrDtP2n99EZBEC1kaGd3CbCWmJur9bGAvcMryWWrxsfz3VdXt7ai9LJhRNF7SYC8u1WtjZSoLX",
  "key14": "2oPBhRdMkiucjrtMgySLpxmo1wS1CnxjDpoFppxqwEMezHhcHmH9nkTQe1Qtfehc6e9GJvqFth4LYk7zrd3THi7D",
  "key15": "61eDpVwWfBeBMVC4RWBVuPUqcBkErtDinbsj3w8qTtu4GA6yiPKJosBjzFoiCrPbX744M9j8keYrtXex9qkbkVSk",
  "key16": "3HJqT37o6TgekK3mjVamffAovsn8vxwHsBwAZ3JuduRGp7qzNLkbGiunLxc6L3zEjzUUrDoduozwEfrg3KqVcEkX",
  "key17": "2HygtfpLVC4BHbHJFFoVpahB3sqK95pRHftyTTyC7RVWggw5DU4qcKX9vhjAXv4EknLx1P12wTnVH39Ec6Fpq54z",
  "key18": "BwuMmi5TwwiBRrQnLwxZzQMnAoZojR2nPp2GCrnktKFLjuSbHTuiMFXe52kPZfJZzhGn9nhXNYQTgn876AQxTq9",
  "key19": "Sazv2WAdPMz5DwA4rVtRN6KiAJaHu9irkRjVZzAAfHaqoVeGWYS71EJ4JGEuFD6qhKotjFPZkAZHP3WCGi8Qnki",
  "key20": "5xTXseJYTexeVQp7pMKM4PdtQQTgZQuEK6EHmgWAhAVBzNmBTmwdkZV69DdciZKgqv8tQKfd6YP3acpN9dnUJa2C",
  "key21": "2aUAHCaL71jrSHPuhYxNpg9syyNfGGj1PexGNbuDmqUYkSX64Y8eRrJ66eMoStpQNkj3zTWKUreEebcLgFY7kCdk",
  "key22": "5tMT4G6aiwnTTYKURokK4CJMa1wayE3FUh5kGaSkLyGe9GhUZyRmJxwbrruuTQvo86H7CpMnBmR1unc88AZnV3Wr",
  "key23": "3dbXvYXDM2xRhhCd1Ki5Gtevd6mDTDfcpjWEt3utrD7jhExTJEd6zmJ7Uv1be8EYrsr8f82PfCjgdSTqQTn3fkwz",
  "key24": "4Ps92PGnPf56TN24F6HvCB1bH355kGJVnAsXzGv56b8kcdD2iSDRSZSbA2u1JVZb2vXxFHwaAiivm23ETw3hNvye",
  "key25": "4ZCf4q5kNcpmKae3PmUkGwN93hwMia8USWTHtubsSVQjEa8MSnVoiDVSK6DVciqkNyEiREE4b4u9wuywKQHYP71c",
  "key26": "T8XZXfSJUriaeTGNKrCTNxHCGrDWKmWCVhQJ3UF1wJGpqoybXz6LhP6LnuWyDXLurDpG3xy7n89bNmRkqfTZBbp",
  "key27": "4DTkCwDfb2DPcBfdjv7iGDvh5jH2UYHyCw5bXCK1u3e1JSLbnGB2n5LJ3ya1mF9DP9YhzUXThgV2ZCfSHKBMwFAq",
  "key28": "djLjNyz2WGCKLj5HFeMfAbyCJS5wo4NvHPxfCtHwRQsodpQQUPZgkMiPjSdQsX5AF6csjYPF5v12duioey27YjC",
  "key29": "3bZDXotcjAfXTvt65AvcUE9wYukX3vBEi5LSnnZBwMoVbs7388NBdrTaKbZhHKBQv7pg2RvPhqPnzXGhL3fgjP3T",
  "key30": "JNjyRq9XsH4cLNGDbxmkrtfFj9DZ83kcH4h8YNfzqz5CGoAuCyFCoyM9FfMW67dgfcv4EJ61eCHLGTkBtoniPb6"
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
