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
    "56wd5zz4iJaB9kdYH7vhNE8MbzmDfTDVfsTxWTypYavCoGzdCd5tDHaHdwqjuHYoC6tLboDPbbnsz8LMaZ2hoZMB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n2nZmosLmgTjWqiDjLtZcc5NbUBFhxzo1JnD29Lkz4wrPxuYzGb2LAwCuVGQaMME5PQZnYTT8yyFDcpYNRJceUo",
  "key1": "3E2BpGbd1YV6mme15SQ3rgz6AskBmpaDMZMY1knye2AzJSW7mPSrhrY891VpNHE3A94AHmdcTBfLK8F95QtMJ7Fa",
  "key2": "d6dd81auyzr4MkYJjHjvvzcCqXJaxTePbkAk2eKaKkEtRererawvZMQ84wikQ3fHtFAmkuLT9r3x8wEDLu6yFb3",
  "key3": "HGrjvfViSWHSNpzcpmHD5nkfZgWLiryYZpuyxEhDfpkCG7DKgp2u6UPg4tt9vsUJzYzVqi9GgS3MZMMtFHTByqg",
  "key4": "3X4Mv42emEqj992pSuceDQmwcJJaxtEMpDe1euP8q2CzekMQgpQtLbWgSU1mnekXFeE5dtFPqGkxgXJYhhpEwV2f",
  "key5": "56a7fkpRcZ4sqHdBFcK4p22JmNtyk3triHJEbctKJfsZ3vmzx84Hp7SEcqhLKJTUjPaLLSbe3HA6qWRUojXc2qVt",
  "key6": "4c8K74AyCBzGTvJjbJ6vF2cEA2fYAkFU7V3Bf4jUBZdZX29Y7xMTCX4pdMangv2EapmFrJLhRhREQKTU4X6qGux4",
  "key7": "2H7ZUUe1iyuL3K9tUMssaif7W8aAcMAFkEeKyPguvffwNjBHM23RVdY4usaRXbj8k3ZBKujKRbcbsUg3Cnv1zjUm",
  "key8": "2w4oepKiUL9Rid7RV79cnzz8LoqLg69SSuzT4pCr6Dmo9j4J8JsPUSXkjzmJ9cJCVnCW8ZT54CDxH4GmBzUZ2xzJ",
  "key9": "3ucESqWmYFbu7PQZr5pfUqz6bXfLY4Hc62wLeLU6GLHsjXUbiBbB9WrAqogB6hjjJ1zK1BviksGbFiD8mhqMv3rw",
  "key10": "3W1rAS3obnnDXdRoPTiNntsZRURCrNbCdqPSQjQhBrjMefeRxYx1JxRwsqhhKoSK1BS7UUVaZtdtW3wKnWYRzEnJ",
  "key11": "5TLrq3rxWgQWoQXaoD5Zftq4sF976khRZ53EiY8rnFopCibFs2U8tJHvjsUXM3DwoMbJAj53veKy8HAPdKjZhG4T",
  "key12": "3aCqKUyRXGVpouiENcRgeeaKbeuypSKXuuBEi2qxJTkkpLNPa4LqWrqE7D6NzGADRzWYg3zANmoz7xxcgK9kcF6h",
  "key13": "4kk3Tm52rtpUSUpWa1hMLgRJSE6jBQEZ3QJJCRin6dcEeLrjWeXQPKcGaSyvcE6dwKL7AAF8Ljs1h8piUkMMHK3A",
  "key14": "3nhG4RQXHJz57bS56Zdsj9wg9p79cb5bwsjkQE8fUtsw2emaZEbtn8WB4YGMVAw9R4HESgbqQR7JoEG4TMYb1Dz4",
  "key15": "5kdk5EuVzRGGdF7wFdRvHdJvMbTdHQdPSQCNLURBmuvSiXgLZAeSbmepuVzGHDa1NsDSAWews7QBgudKfhMCRYjq",
  "key16": "edojJEZVAaTsmUtHG7ZBnCVq8yhTwSDMWSS7qEGuie2F4uJR46B7UH1HmB4XghUJqDQ6g1KSkwk3Yb2HA2Dc9tX",
  "key17": "3rDuQjBmUY8TNeEBXtRZaNtro6MDsUKeWA9nkZZbwdHK6i3P1EpV9TLpMM9YcJw7TfHsyxt52iuXbD6cXA4wcZML",
  "key18": "9KXn1MPB47E9dHyRFukBtPNc7TDELsREGYybo197kLRJhDLJ6r55q9T9VnU2fupSTb8cUxyeMMK9jBP9Yv28VVM",
  "key19": "61cKBLsbf7GZy2VzQmBfNDdGSk18HqUHcf7wyMan7NYcSAAeWF3GhvNnMgm1v3mMpxjcNsukcY7YKNAv1YrXhyNC",
  "key20": "3rRyVDbP3K7VHReq6sXCV9JmRDJBm2xQKWjrCb5WvpjwDWc2uy2xKiDSLvXf7abWXwMwBXs7Tn6DA7GYTdjorKZH",
  "key21": "5Y5stKstxjsbTGLSjBs4MSdDWq5MmJSwwayevnLvEEH7s4Eeig9zksSftbHLBKBDhp4928ZMWWtxv7cUyFwHDJin",
  "key22": "2AZ4yY1HTdcMgRu2U97sLZNpciRxbVsuZJodXM3MrmTrab3V8Hz6iwgNtRGupC8Wz4oCT8AWLnoToWJkUTkM9iPH",
  "key23": "32jzRTiA2eRRP8aGmttxZTkzoxVmtq41X4wUCpNe2tijHSdVQftEi9sFoQ8upMopVb3F6YcWkRuuJsND3z5ADH9v",
  "key24": "4G1xDD65BHmhY6ZRtsYs3vrQUSUNYJ64V2C9HxAzVGUn7N4ZGuNWP6BqdTGYC1yjWbAn3U4E4e1UJBM73E6WGTPg",
  "key25": "4SapE1Tp9cATjQV9XBYX9cGac5pR9Xc3iAtqGJzRWFRkUWKa1cHZqADUbVkJHTJwyma8W6RDgD9aRRvWaiANDVQn",
  "key26": "3nMnPwxdpvP7ist3Wp6uzEpxDHbxuzWnUAzKknLBZvq5c6e1uc3be3AhdUAQyyxAk7WFnGFHj9ENarWwft58tE3b",
  "key27": "4ugtLntSoAC7LnLhd6u8bMmr87x261DKipi7wgHYVVEHWiZw7iWoX1ZVp6wwEYu72Sj46MHTyFcHewH1C1tTChpg",
  "key28": "3tJUDqSnQ6psKcWKQJcWJWpV4FpyqKU5doP3z1u2mTaPPChHS1NARYg5VxuDDTxRXZ6BKDVK8kdajcBjua6fgHYH",
  "key29": "qfh1V4kTECgL8uvebSSZ7b7ZuUWaga3SnoPaS3K3GSt1m8cjd3QKFyTcNpBnrBCY3442F6FdnTLvHjSWiS9GTn2",
  "key30": "4tGsdR4Zhb55ykVTAd8d1pVux9qYue1xcydC1gRwUuCQJeFL7uKhWMutEdVz7LN3Z4CjjA72TKWbkeRbaHmMxnzt",
  "key31": "2KTmFP2chYMBJi8gXfdwCrRdT1xCGDXe7BGsHQkAe6wny9FuZ1nsK6fUmVAXnvYSxXurCoxVaeNAGFwx8arQJqo3",
  "key32": "bF8AWtcq2YTNih5cnXMoeNX4PkugmJB1DUM6yzyUPF5zjqkEBKsR8jEM8ma64Rrgy2oafwXhMTcigw21ZQATcB7",
  "key33": "4nLRLsjnym3Ewu5qheTY5Vi9BQEoSWksQQTY2afQTHk33aZkYH1RAAvngrPtC2mMV8ou1djKaH7WMaSiZjpx4Pgg",
  "key34": "3kMnvzNsrVCEgnNCJLzMaBSCGNRh8Nut753uvfrjacxp52pfcnp2YMAypT6mxijhHU1s7X35FsS7jxYi5LraLFse",
  "key35": "1i1BNyuzRwvisiwqmWuS6YUr3GXcGnDw5qxub8vMUZLZyQmQryYD5cvQEAZk4H4Jrq1hGJTsppQdWumutieTGd"
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
