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
    "2tmnXBB6npStfaL3ofchPRPVZjVpdi6ykLbnhZrKQQq1r4ay3mTh57A2QHaWMWP6i58Agt1qjs9zoPNUhCW2WTTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NDnTerxin6bNnAYvRShu9Kj4uJPuGdenb29Gufex7bXj8z12csUdy7RaoTW3AJd1MxZ4wrWD1xM9nPNZCwPuCtF",
  "key1": "CbrjavtEeaW2A7oskDmEX8jCF7aFXcg9kyBxNx38i3gFRFjFcEwHR4jz8MBuLoJ5UMoprtCF1K5bxfpC3WTaLEZ",
  "key2": "4Em5yDzxSAJ9kDmjtFbRqc9n1yGacmD8LjeQ6dVLo2Rin5rrnaSZ2j6qtsw5Tq4zm2xgURcK7tN3FuFVLbY6B5R3",
  "key3": "3DudKLHaCXKgC2JC3aYi88tuNUELKaZA6qobbJZpgmvuxveFsH1eH3AwVayF9JBfFbBq2uV1FBoiv8TotKVcEung",
  "key4": "5ygkbcCNiM5zuyn68ZDQWdiLvi6LuceYCgRuwhpUahJ1Uzks19Gmh2UGSgGmbQ4g3w9iR3vtiFaBcRRYV1cNH9j7",
  "key5": "5sPXsboGioJJ6gGQmtKFqGhLkV5Zvm18Gu3FSXbnkhmBk53NwYBoFk4EZDxgo3dmGmtaKooPUhUiEErjeimSikga",
  "key6": "674JQABdFTqG8yLg1dQukob8Pu4rw5D4td9wFmfJp46TojoUUE1AU84bWdNpkvX8e7PJDHf6FuNve9i1FjQJFzyc",
  "key7": "3Ru9SKhT3xBREJv48XGdDGxztx2TJGr4hAhz3GisZe7oL99zM967UPpfbhN6GkEsKA74CugFYNzJWM5LDu4bHWnr",
  "key8": "43gizj1MQptSaefuFT8zdbiHqMbPXzwzzfAcmthJoceeRk4MrUX6hqzPWE89uSAYdpigx8EGXx6mXsYwgaqKzENC",
  "key9": "5QyFwLEfgLBtiTuv5SGeXw85H8F3k1BkiAoy1UpxUkVu6Hon91RrtaUSN3Qf3SJBTjnu5xTsHGhkh7aGbyiDMtqs",
  "key10": "59Zihh2R31byy47n6X4f9jzm5NmLBLf8fYg3HdgGTY41r2fEStHQ52viBFGk2AiPjyiv2z3c7YiFMxRHUEoVvW1",
  "key11": "xYZzAcBk99cENzs4ah7L1RW5hyhfQWyHZ8kfANZQ8i3Khj5AXxppuoM72mq8hEBumeaZQYkpqee4E6A8KAt3tVQ",
  "key12": "5GsGk9sFZDfij6MYrHEnsD5cA7UP3pRQFPATVezet42EwvAqis5H8PGYyfqLrQJrCikeJinvTpjrobu6biwcwXDj",
  "key13": "3fCtPy1YrRyGLhTHK1Akx7QxwEyQWkXTaJHEB5jDoMqsSq3LAmAZLXahnihwc24g7Bvo36w7Q9KG7dQW5caxcodh",
  "key14": "e8qeuvn5a3P7mTscPwKdqw46vmtJeTpRsTPPbNceJuRieC9sKC8Mx8wTimCexvHBBgkCoMjQiFq67kczvEjxTHC",
  "key15": "265Phdn2xL2NHjBCGNzNkjVho1jUR5MiDsi2v3ScKK5V2GR2nQgCrVZMuo5qsrsgUPHevzDBdUsDvqiXEi47Eek5",
  "key16": "2jHfa84FWKyxpEA1vXz2aM7TDX1MiE1pqhNTuWU34fB2rUU9NZNb1gcasrxw2LKaggztUSF2ci15J41VTPhM9xeR",
  "key17": "3twyZeFMHeqfjPhsdEaoy43SbWqxyBQqB1pTwESQxFNsGSVF8kvAwH9s7qgMS5U9C4P4tgNErV3m9Y3MFCZotXB7",
  "key18": "7AvYEUd6qE5ixjtEH6qjvJHdViRPB4LrfM8PxkESdNR5Pzcdhv3g3fMzD3GzvHxShefDYaJEY7bbjDczLcNLRRj",
  "key19": "4Lu4FtHWCvpgVvdhSMU9RGvgecEPz8rerhYjidCmPnbCjbtbDECDuc2PDA9GN9942kTGSYMPUJJGrgrr9arYEqmW",
  "key20": "3yJogYWAdjzJzPFbqvb7EvVkinEWX6e4qcsC2pKQgtwoocYfJnnxvDokpNW5ZNKuJCkp6bKvnbPLWcx7WV2P2s7Z",
  "key21": "4ajAVaimZLyYL3WRSmypw96td5iezF9Wgu6r7WqroiA3p6RTkeLG4vMD25cVAaEqi7Wm2QMvzqPS1TgvdJNrGfoi",
  "key22": "5G9tB9qtsWXnJSuR1dHCq3TUxiw9Ty4nui1AdTDfwf5oypUueuVHh4Pc4EYwNHQcWqS5DuS1CfacXaDTsHxmS3Vf",
  "key23": "5XDLvnktpy8FVpbXKR5wPcKaA1p1w3DD3gv2dnwnmgroM3t9tGSamdvQeaH94MseP3FaAmzLTRJS5VjPsaCR1vwn",
  "key24": "3Gu1zvchfoViU9rZjBWMuWYszg5kPwsVeWUbMKmTTgHACQAkxTVszCKhME7vaTbZEA53qsbMukSfi2uofH2uTDQM",
  "key25": "4VuEYMxd8kozXhAXDTYzThbivvLrfKUXTuwFSAQ8tFVjQcW5gTi7UBSRHyqZw1v8r7EuRtxe4K2qfcYUa71UAUJw",
  "key26": "toahF9XhwZxnV3YXJnCi2Z9irCcre3PQ5tNzc71xdRaSjb2Eyu1zq9vdUDBC2EzYRmzEZvKMuU1rLG2iVPyHQBn",
  "key27": "5ybUR3yLjbZY7dCFWLShytajJBzFiroi872UDXGdL8vJ8C6w4n49HSHgAhjcZ2ihHV2g13oasfjvnoDUDQ1n9xie",
  "key28": "62YDnou1tFLivnp8oeQHQ4p8m5RbjUJ5AZLAoHxmjLSuLnnMNhDtKpWUJyqsLEzfuHoA2yE6Pkd7HaeW36TYBnNE",
  "key29": "mEG4gFyGvD2YTJDp5qyjswWfzhzBYhR8ioaXDgR7sfzBgqH8dQvPmDXCUcKwQZGDYEmt23iHuSitqHK4rkxrkvi"
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
