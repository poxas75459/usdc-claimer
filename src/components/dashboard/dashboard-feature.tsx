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
    "4VQjSxZ4m9VuhLbfP5kh6Kz2sqL9Pp3J4TMQ6RgJkJRNmoTsE7beRJKVjLMDe57uFFh5HPsWCv9Fx5ynqKw13CsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ppQd6LX2V9Xc4KEoLjR3rkKEN1mUQwWa8Pt8s1ex6xY6nuXPZJ2dDP4i2p1RVHBS5HdZtctUu7DtaY7WVAi6vVW",
  "key1": "5UuEXoF5PbmXMJVcHyyweUGmXoFtgvdzMafQvqFEkYLwGLwaPykdR15XhHZ4HRMfQPLCwFrBc35LgV83Tqt5zt7Y",
  "key2": "3k3pYadS5wT2CL7zGHTxfaZmzsDAyQ4zn56ogbmLvgjRpH6hzDurpPzitmPpTgjW1fi2qs2XsivXUP7uU3Yiwq2a",
  "key3": "4xMiUCn1KWqM2cyjpUAtMrxbKYukDpotdbmZFeUUYDZUjKjmo8z1RCoBKQ4nNtiT7xroAdsm9FyM8KjgUTDanmTZ",
  "key4": "tqkfiqchboWG1zsBd1vu5oAA1scxagiSdh3W8u8rJR6cFxRdJ9vmiXBuwTz9JbDPb67kedww1jbiJHLB4tYNxt1",
  "key5": "52swJLamfrgDPesPYKdSPF4j9yESYHNUyD8av1iMR7H2npCTUsGVZBGhDsdora1rEHcfFSFtRJthfW6tPyAhaXe",
  "key6": "9WdSD1vMxBsq1yJC6dpTYXYTLbJpBJkhtMrMqe2eNYUtM6u1xFZjGQbUUAy8wV1vZGk8TiB9c9HMvuM6k5dJQXm",
  "key7": "4Kavk6rsRaAsYVooAinze58PixcVTRJEVRe8hgzGGmz7PPCsDzHBcx8p5m1nc9xWL2yqrLKpmZVZXP51hDVrrtDc",
  "key8": "3qUHn677111xAeQ1WTkTTp3YmraeiCH8DeS78Rgx6Es72wYWrV1k4jG9zxs7rwHMgxBdVB6CYF4NFZweH3qbcN3c",
  "key9": "5hgzJxEbtgEVxWSdEwDviJHM2SkKuJNUYHEifByicwuoNf52hMyBXV5shNYnAn776PyKfh1VCpJ9NfAeSbx7q4Zq",
  "key10": "5tE1dxH4jieU8M4QaueViZD3m7acii4pcQYPR4QyVSLeYwVi3K92UT1PZPxharG6mQunfs4Zj943qv5PPLMK18Uw",
  "key11": "5mT3Nyj3kT2htfNPU4YrUcCFsHf1v3d99xHQvtkwCodQGPadGzUpPgUejxbjqvcVt4LvtMthvATvmo1x9ZcqG3Ss",
  "key12": "2jNaFYS9b85caukZ7B5TN3wCH3F2yXs8Gk86iq4mCWo9ktq7znrjeCsxCFe9HooDW3oH6Fs75fD9YChbMibGBCJC",
  "key13": "dp2Jc3GZKYDG7NQjaXYjpYgrzgpwp4AB5RMrJV6bh4dccwPfMVmidbAe58dgDtzhMWrX4R3s298BeqtrX5QTenJ",
  "key14": "Q7S3E9TuLdaYWJCdnycwrWzRhfSPhtkZk6fH7ufVWnHENsHHLtoETWSvY4gScLcZSC3q6Nyq4Ptrqp1zt4xLqA6",
  "key15": "5wpQiLsGf5o33cCty7qZh1hz26md1VP4ni8syNK6yrkTrXkJiNFPQQwDgcQd5d48KQd5ZJTVMskdHe4vg43qWW8r",
  "key16": "3FSW3nKFsJmkjHvXpE3fFzu46tU65vk4aqRGp1iyJhivfNqPgUyo1wsU1gHEKsfLcKZ25oxecxMHRus8mjqCbMeJ",
  "key17": "4oR8wrDbBQhXkE6cX9Nh8YDTkurrYQC397LXWa1FYo3HLVKp4AVhCHuwSeQ9oE1Mq51dh8EkN298L7CuRaSjHhLa",
  "key18": "54zyuD1FE1oqhGZ8KMDACwdrqcFPmN3TBZrsRSETKsomuHjPdNFPs3W6fuUpBkE2FiciWG4xFsyepkVmnuDkRtxX",
  "key19": "4nQhuH6ZYcc3U6kf2jqpnXDmSUWx8Ng7ehT4KBSRMD999pxuTD9dsdusc9pHBjiscmpoyjT8jjGQ4eLkHfpv1RQN",
  "key20": "4n4KqSmeBGhdueG5NvWpYXUFCaQ6sTq2tu4seaMaCaFtr1r8ztS5x8CqvdNHgBH2g3Nxxw2MbVARtNKbFn2nfMDf",
  "key21": "4Mn9vJYij1F3MLAyiB6FADwm5qSmzfh5viLSpH3PWednmyLBtXHTJxG6zHc3zmsuU1QCKzH3k5gVFeyZgJLrC1BG",
  "key22": "5aBprbdGQiFPjbX3JgfDkZEEFC1S7KCTk2YFoBxzZmdrYrZwzJqsQf4wss9xmngLeGDHjUxMx6YbR469c6fCMoYm",
  "key23": "5sa7mCYExCmCQR31TS9zX6rnCsKcqapUXpZ7dAFK2xUB497GAxbhJKG2uPQooXSJe5Wif2WnaiR6nBafmgnzmH2U",
  "key24": "3jPXya9WbuxSs7cwqMeRbgnRqBciaTbyafsCbPseZzeH7X9mZwwQh6RNUigtQfHuyccue5FvECgAQkDQK8DmJrxb",
  "key25": "45aQvLo1c141c4qto26awMtdQzSNqgR7TVqm5Na3g7C5FBNLH35eHUzYRP66rFM4BZGUAaDnz6pHKgNzk9PsSYoG",
  "key26": "yFgT56L4AK5VwQafWnH58A96nRF1PoKA471ugcqG7C9za6AHk2pBwcg75DF5yWWVcT57vzrsgCy9nH3M1MnKzTP",
  "key27": "MxfuFc9DN6SAdaztoeLKL111xaymRKKVFSy8dsrkdgufLjBDcnWDwCsRX2YGBAoKvvVgsSgrdNHxYMY9Bh3zthK",
  "key28": "2FwwRDJwHmfJgvXx6okimku8WB4csyuMi9wnDa7wTLDJEa94ckeS8yqS9B42kbhwXoMhcwEv8QmDd7GNAQw23GAx",
  "key29": "3xP5EkGoVMuSSLz5tWDAmz2bn19S12RRgNkTSjjrYVxywqK9ky4Foqz5QKzrUFd9FjRiPFQCQX5krMosKbUU9R7x",
  "key30": "4nVUncfdFbeTL8G3nHhGBpq71a2KZztumh8aPqAVTEUYtxNESmVmwgKG3duzqptqrHXKyfa1hCPbCWESaWBtAUCs"
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
