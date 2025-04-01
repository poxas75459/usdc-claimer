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
    "4kR26cXH2BRFUa3PbeyTEeePnuBq9aWUHztYjnrPFshCbQ9iWWxJ3QcQahZqMFZYuERERyPXxzWiaQkcLHTXe2Jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67rPwJA23YtmCvabfgwxVUDzP2RTPkNoxdHvJyvdSJZhCW4MzuATMAjxwESff4Ma8xAQrrepwCyuSirCgpi9bZCw",
  "key1": "4doAZiSMvyAwodQV6sY6j57UsQPg86UZxfiRky26CvqjWNG97QTpkFtGe3pDjGoefgHrtrJcUcguiTsU4xYrq5Cp",
  "key2": "4k14DJ4Da1LSSBknj7YUD5DUs1HocsX14a99H95cHQ3KtjfXkvT5NcaLPFZmpBoPvhMifezqkWj5KjgEQ6NXai4H",
  "key3": "2bEfcFT38S7sQ2ZC4scfoNG9JbxFvYPkJh2ZYbctFc63VqPEQqGjPJYvDFXQc6evgJcMARK5aDgQXnqbhd6Y2X8t",
  "key4": "5go3t6cAvkJCCwygUw6TmkehptfnT9z1EB1Q1Qd9aVLS6SvGCDsHKDwEaNMkdaKPuAkaU2u91iUapx4MpPszZieC",
  "key5": "2XuzXwH4Drxw1Y6C6EUJDi6R2tkGt9ThBk95KZ4e8nritSjB4W9y15sTapSrXrX1EzNh3oeN2qohUsFTUfor7s2e",
  "key6": "3kQopfSUyHRQTRgub7Xka1TXRd6RKHqKrDfui1X8yYwKTERCJpCDTADQrXRGiS67SCSBsAbitxMywV5HRbPa56qG",
  "key7": "Wy5SBHr3FvsTk45BaxFjJL6kxfAZxQXzDuZiRgXiTCoyyCNj4eFn48Xu8C91mZx4x6aR58AREtDkhhivj4L4Rq9",
  "key8": "3VffA7rXXBt5eqwKyt9GxirKFDJAPr2zrvtKRocbH2iN5hVgrjCBmDsQZwk7qotJi5S1wn1XsQ78yo4FfKXqWWrf",
  "key9": "31jTWioTXC6xs7yJCYgvfVUGbJbhhbxgqURNwLSUJT3UyyfqPBHLnetb6R71SZwKgc2d9n24kmQ7Jk32thxQsGoY",
  "key10": "65hdN1Vviargcks6wkQwcGFpAgfpj2NAsp3L2Nf5J4FkWVGmeHpXHSqdw6CbwQGy46nDU8bzERrCkMGs9g9fkm7A",
  "key11": "2aboNYCQhZWhQYg2pzQjSjDikrGKJm7oJCwrPzU9DyiyEinXR8GyZkRLPk4t8rYuCkDQ9mQnEXsuzvcQXU3QRXq5",
  "key12": "2b4QM7XSn4KJsrgNuWoKGDL7ihWDwg4R3sbZdecMmiwFWdzG2XxoHhbXjjNe25uwDZ9WVEi5fyvCTrLTX2DAGYm6",
  "key13": "66L7neHTbno7UAXstu1VyLQ7jtjgTgrrSsz4e4BB47mrLAarbjUQKg8ayf646pD1TbxzkjECRbehs9LdfJmAZeuT",
  "key14": "5jPKE9sbE4JmKg8oqwXpoQy7QU48ErWdGBaJZG1vHjTf1PNqPC1vPup1i76i7n1Fy962Fq1SuALCEUJnBAMdvgUo",
  "key15": "67nehr3tzT6hgD1ecgKbuHEcD8AtEW67DeHbevuWqAsGUnREQwZ7D3TbjR8GJbocac8BCEUHF55c6Tc2SdMxb1hH",
  "key16": "2iyA4UTNZ1mPg5HbzeGdX5BwkDAudiDfgLjp3jLCAS3aNwmwj5gFanf7e8RBJeNV9s5XNCg6HPiEZHcFoprU7tdq",
  "key17": "2sNZWcYYehNaHFnrTx4cNaydhPEbdVxCqsPs8aDpCKKCwWzbGukp9xZj5o2iPK5fHb1umixVktCkNTWUuchA5NS6",
  "key18": "5WVLm7UFffsEeznWs8qN3aGnAsTbaxuExbioiFCBHC871gA84cJusCjSeHqVB14Au4QDxC9ExmSrNhncsWMhbqLh",
  "key19": "3uuDSRmUwSDXyt4PAUhu5DjDULpvR9fHEDkxA2BY9jFSQzS3nNHxgQWWzHN6B7pSBVfVs9nGg4Vs1tz6ep9atHp9",
  "key20": "1NgMs5tgeCXzR3nh2kuqhdD37n3hb1VxaKgdhrNrkD1oDpECnMsMMzfEYDQUSwDt6XrdkAvLEJoo1H3CawP3xS9",
  "key21": "2W6RRcxWH1Ky4J2Wi7RQZC4NvptGqjruJutsXmjhvoAmVsW2jaj645ognhEvYqJ1u6J2bV3JtVQJpwVBG6LoZ8Fm",
  "key22": "3VLcw9z42ZHsypHRRU9rQo8MbrXVpBChMfjL2iPNQkrRqwqCeAs99KojrFHscwYPbJiStDXhkcKfmhRJ6o5yRkaQ",
  "key23": "23sU2PtVP17U8my9oWppniq8FzeDE86ekCjv8GumJbdKDoYqoU2oAAGwqnTdVb6bzLGyT68AgnK8emoq79aY5WeN",
  "key24": "2QoM4VfBfGRw33jveb6aQEgsm4wLKnnciiQDtJixVkgJiwzuQQ4b5mYeyrb2UWgT7XbHzTYnMSySFThhL3xCTiWg",
  "key25": "5LzdEQLmbpRVmGy8LKtmMq5wvur7Djppst5dfEgJiZshvthfaesQDunmQGFc4exBBPQ9BcrW4CEWWht91vebwSa9",
  "key26": "4FPeQvzdoG1sjCAZt3d77D2oy1JiQUUD4K4dh159DqiEnYgkDDWU2rYMJeDZD4qgF6DFYr6hGxBpEmSpDJyqD47h",
  "key27": "4EwhnNVRcXEKMKCgdq5PLSHqEszuYmcS8WUtdEni5JE158MoipATgbqkZnBkDngqDstwFeivtkjpsVxoBieij1iB",
  "key28": "2Bxf167RYDo2cvwGuXPYi2MUJ2FeknkFt7VCWdWd7tGhBQ976KfANkVmdYCghfsQCNV7CU6rTL6zmi1SPxAQ7cVF",
  "key29": "5giPKSPxrLz3to81naKFZwgo2ZUU4tJX1UBnBF6NkJ331B41PcQhTc9Kykach1Z1ubfsKibYBYEE2XYqdNa2i8Qf",
  "key30": "p1NGyyozTs6WZqtaZ8bqBmnvWwrZ5yZD5kSWrM8daapxveTZE3GNLtdjBYSQXHHFLXWXxw7wiKhNRfQVE5xF8jk",
  "key31": "4VmJYdfHtUq8xbpYsCGttgs7xS3hxA5TCyqG8vsfWTnaRMBqB33TbUVmvWbVYbh8vhN3AcAMwMAsK5QTFZYxJgU6",
  "key32": "3vng8FfV9qwbGao1zTQh8ZoHHc4ujt4HTcwm3pLrkdSLJEVA7i6oFq1Y612bPAqaUgPnrha64y6wcm4PGULgpbzH",
  "key33": "5ytwexgeME7zunJGrgZR1RNpNkAkDr2XPEEXZ5fzVumKAdNaZC93JkDbMJ7KPrYYAd4XxyxxewoZ1wiJGp6grG9q",
  "key34": "P8pPMkUHDQEXPpbEGCvjsyoTQjCnMvFa966CbKaHcR9T2QEvxFVfzLoPrC4fYMCQqhhsL8WXtQyy9tDDWMWz46M",
  "key35": "41WNKu8SmoG8mXCKBZzXMoGAnKJZCws8eLawskP8ZXcaHDsxVACmhTEfQxv9YtAdKifhwZbW9LKh7wurrx1cseBT",
  "key36": "4GRn8FL6UCdavehd6QoehmR6bniNbjorMiGDCTPjsgPivxAwaymS8ZbpkJMkbD5EHUXMEGTY1GK7ZDsqDqbxEtRL",
  "key37": "2b1szZKf2TBzGqXQXP98HPxLpbS76QW5VS8Q5rPRh5Xk1XxQHEAwFatJG68gkXpAEJrL2mBEMCB3KfcXd6fRjogA",
  "key38": "XwKoocc7EMCwM9sN5f5d1cJZyGaGYKbeJeeVUjn7trJHkeNcyTYeBjGCPxGAiyef6qQoZJpGb87upJQgs8N13pu",
  "key39": "4QUXi7FiZkbZXpckwj7Gxk2AReHnhtwrACbGznpyc5nC2tA7jr9h46gSonGF6eck1sARXauMY2pd1vytty8ozvGs"
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
