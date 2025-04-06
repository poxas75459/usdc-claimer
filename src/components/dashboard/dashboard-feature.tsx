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
    "UhxsvEhjVhgWTjsmJRX4nmpH9JNzp8zBxC1ZMNFrxpUyBxLEbEheZx3Hi6Q57AbRioEuAqYbBVJGnw4TpSpQUvM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BYeQjETLurdrTWFb8GzuKx4XL2AsQUoxLXMg9xmsqodePt2n77rafzvEWWfv58xAx4dMNuypxZnt62ea8e7hMDB",
  "key1": "57uZwSVgryMkvkELyVW9bXJZ5jWKN7kPfRhCExBLrGLPeM1mgXpMJfwz9S2YDh3yq52mCBZbToZSBUSZzsSS4ojV",
  "key2": "U24LEMFLbDPQNxpvAxH3sbRQFM2yQRdPUfqjx3Fj1Tvtcnb3WYeB86qi9JF2LAGY7Yd564hzsmMFK55Dbt7i7SN",
  "key3": "4U7bsgDvZ3K1rbSpeHN2n1qT37a8xDA1yUMZoFL4zF2zJwyQyjShRbcHV9K7c3aV3PtW9C6LJB3Z63hSTWYqDMtu",
  "key4": "2szQ7KZVVvzgTmBKaQwA1Xs9kEEUrEQvuC9YLoSRnPDswA6RZdPntfRqQ9PNmmc8RRaWPLqJb39qWUF4uqTHBrMi",
  "key5": "yHUJh2u7uPyp1bZuncEiABX1iQRzw8XyVL6czUwG488npdnVCQSG6BJhLJtkG1JVaJSAqCobjMKaD7jSA37Z4tz",
  "key6": "5kWNuVKaxWKMMaPYuqTQ5vrZtxcu47SgezB1924Nq1ZHVTbAf2Rtey8aVZkRo2CYBZGboFjquG8HY9kaH6CsZJXn",
  "key7": "z36jRANMEhXQnrPvJyC3EzHKAf9dqSCVxfDdiT8xqsNvnZ3cPSBTN6YFgYRkrqu4WAJdFpHR2Vvco9GRE4vTkmx",
  "key8": "3LGbqez5KoVm3syTdvNu9CAULkPTorZ1SXzY65hk9RxQ6iHbo3HxQpbY6JL98JQ1NYm7vJyc2QanMLxiEtieU491",
  "key9": "4VrRhvyF2chiijjK7L1K9sxVYwjJvYAw9azaHeULxvyrRMrWiKbZqueFcMAyMraYjz8DDGaJxKutx8u3HqjLSwZJ",
  "key10": "2QCT4CtpRxodAiAg67HugA6pG3uKpfvWa4hjzGNWqwhjUpdA5vnJCCqxKZ59KZr71gbwiizCejkBM1kZ5bwWemBC",
  "key11": "TCdP197KxjsGU9RdgLtm4Ppdh8uZy1NRrTysHpFg15Fs8ideamymDdvfEUzbfdXbDbb6bcJTfrpvQJFQbZymqUF",
  "key12": "3Sat8JaPMsRYCyB1nTvSK5UA7EcAvkBgFmWbrawbYMx17U1W4nLTct9Vdgnvq1QubeUp36LntCZKdBXoJsXJHeVe",
  "key13": "5fmnEcJ2mANSYsTKXT5nn7WeSuySRV2JgxSgJ28Nu4taHWL8LeyPJuAYTHbDxh1JU7q2aDenYpj8c9Ueye61peYM",
  "key14": "3iRDyC8VeVhDcZsfLP6fCdu25icNuaXahAcBn3ABiFJyKFq53BvyFoZyDYyeuKgUA6PYK4biu1a76voZUXwtNgzF",
  "key15": "2YJKPUauhEcu7oMrEMwRmU44ypw9SstVCoMzLy3y5Yx2BhhmvjGLHGkz8FJKdQdoaTQWcPEESMCqv9fc1RWrebDF",
  "key16": "5EhQkyrXwgkHAmWBoSMPgzgwfWR28jtKEUwbQ5KrdYncUi7o22FYMhS3Q9R5khDv6VzLp3xjV6sxiaRumnDJ67j2",
  "key17": "cpFRMH6z7zp2sVpD9GWMhQdiAH6kbJ4VSvmCmqDFFwvVP9ZQZHdNBjXzHQYXcVAFHWm7FZ1zXGSscMdDwqmyCps",
  "key18": "2qTVbApa2Lerva54Y4FsEGBjuVoYtrEr2Lfgf2zT1ASf8cgHmeNuQjDKyset4Vrz251uAaGsNJXpo9ezGsy4F8WW",
  "key19": "3gbF5tAgMUNp6qiM21SK6rKjbaRxMjPXRfM5NreXYAyBK8vTUYDdXm25PjBhrUSPMfTMa7ctXTh2rRqabnKgDSHd",
  "key20": "5vMVdZ3tW5pjGP8epjZhiLZbBPC8J6TVsUgyZqN6NXJ8PN8tLUYFsmRT5T7eDt8LYSLopkoeBzj9gDeQLhktxCC1",
  "key21": "LbyvGvvZoycB3f22qpB3F2Wrx2yYH2s6CE13x1yvJqrEuAZXmSEtMzLQJT4g1XuVtpLJkD2E9ARpF9N7tz3MEf4",
  "key22": "53QmgA39sMJ52RpfAaTEi47NWFTwNZcgVAyD1vMvNK8UUnQzFac62xNoamaWv3mdEVRsRLzBkqZYSdutT6VL14MF",
  "key23": "2Lq4DKa3Fegui7t5Y2i6d2eDLZyegVycWZCatf3NUjGHXnVmn8ymtS8N3664tGzRvMJfbZPxxZjXiBKBQZYc8bv5",
  "key24": "2dF9MBdexd6rZ6sWD9enC3FwFuL8WQx1VkaKMwXFd7gp3AqifnAVBiiGNEXd88AMwD2twFfwSX7JEebnmiMEyyay",
  "key25": "5swbqBiyy3cjuzZaQVDFvxPBgwRRhKCh4c31XKjMiHrcqtTCXLoDaSdeLw1EqxdCLCjvMuGmAjKn65EpemZhj8K5",
  "key26": "4M2mNEWTrqpAbkDe6V4DyYjUXV32LPtx3aTsSQRRdQTu4WUq6sCddv37bz1bsKPLZftjfxy6yMjm3WXpJuEZiWfq",
  "key27": "3NTywShGKeSSjM6Sa9DMjC1MvMsb42qntgqyQSPCkNyxWYR9My6hMkTjNsrjvA6A5xNRprQCEkhYKj4K7BcSkCxE"
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
