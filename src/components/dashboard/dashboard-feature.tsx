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
    "43ZkXEWGRW1QAZ1yoQUcyhp6w9EJ5S2r9QSwRYcfpVaYeNTXBTEifkRpKstMh6g2Ej9CUHfZuSXhgTFwsgpwukic"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59VYeWvEgUvNBcLPA2MkswtSrTMEXkSR4Vw4qawn8vfUvu5k64EuP6zjvHhM2rYP85EYQSm3cjTY1SVSGXLz6gL8",
  "key1": "2MmcmHnzRhKGmLbjArKWLEREzCfd5CDcPfYmmDGjKv7CD93SbzYAiAtcfpZvAK1ZCpwkwJ5MMdvhfEdVByJHZQuP",
  "key2": "24omsE4CyV8NjRB4wMLzRTZ2R1MFosUEkStdapnhk97xGc7Je2Jv22GhyyaChivnVJG17qRGrE37oxzcdLBauST4",
  "key3": "2yRXnLBQRoZuXs35KVpLecPofKbFD5gTAWuyTHotQZmNz6fpiYKcdw3YXiy9WNugvq7EA1xATP2GVLzarkwb51SB",
  "key4": "QpiLQcMJA9eNnoq3ZKMLRZ2XFqtFmtpAnFUth7T7Nnmdv5diBbEchGr7HgVX5Nj5uPgp8EkttDp3G3wSLzFVs1q",
  "key5": "4m2QXbaWGbyRZkaQsL9hs2b9oH5BDAVuicWWkV7ybeySDHKv5uvSLHXuF976htr7gFQT7nmzq5GtKfrNb7iDiv4Z",
  "key6": "25G2WYF79UKK6KHbh17o4bWijQaWuAqwXCA9qfody6LZH2oQZYtWcEdEMaNzKjdDd6P2xVWuSHdnzYeeNAqzMBeW",
  "key7": "4cLSyVMDB8ueR4r8SsvLdX16v2DUGrBdEbkxVzkLva8tmvDh5W3xQ3mt5w1H6JMExiM6urU6w67bQHcUeHcPVWrV",
  "key8": "RdrqtgDbZPKz5jFXjvSjwWi2niisCGrRTDtGqGxY1XeJBxYUgEaZZcECLVChZYCH6u6Wz6KwuJmp8DiJ6NjQM1b",
  "key9": "5UUxropKvPnTHSJXn1NPiSz41txbviVmbiU4gN9218jVetP2a4db5UBizZhxby6TmG2DMeTZ8FTnZBKwWksW9U54",
  "key10": "65bSw83TUuCkkab5w4KQuzcWHBjo54oNsEZThw7KakaSRJ1pbbrSRcGxCQdhYCfLVFyww3WeY4hbpn4Sxhfxqhrr",
  "key11": "2sS3C4qFaykfHsrntwzPsL9trURSWKuPTqstQAdVib7KFxNSmp3pRhSeN2JHEGx3qrvqTaAEwqDKk1UbZVGfBELY",
  "key12": "hVDjMqDrvnyENg6YXK4pzfA3tRf6urwkaXuCdSVKwrskKTHSgZY3WVVm4c132BZ2YcwB8Vk3Kh1AiD4u67XzmqE",
  "key13": "4W2a3w5EaCNcWfVb1jaCSubtmL1ebVjSowz8hL74Ei1PmWo5kMJ12jnqp2ysuUtnY1YL2yxCXssbfD5zCUGDQjYE",
  "key14": "2dNjUmekzYXZEmZMdhvfVNNSHdqXDZkKjKpJbKhV5AfqSYHfUymQrvjmGwSjrzDy2YYnwkvTGA9JF23vmXy7nC6d",
  "key15": "4eADkePgqZc4XR6GtHAidJKCEFRyNY4Aa6TX1nxug3JWgAPBhgCj8RZYcUbYqsJpTzZD2AnVENGRiWiNRP4jSdec",
  "key16": "3qMSzHzoRbHvWSSedFUt5GKVVPaAzPAJ9bNWe1Uj6C28SsNy5xMXnETX8pqoHNcuUcu17KuWr2hsumsZrDgZ9jh6",
  "key17": "4pknCdg32qoLhE9uNSpF7mWeCkoWZLwf5W5dvJnxAHuGjA4eAuD6rBtKrhUh8UndT9o4WkfFLT8aiKHj1fBeNmqk",
  "key18": "5WfbQBSgWBhN4Jna18K3pbCRojwJ9JpiYJ4Ft3kuhrQ3YcoPJ7E1Wyd5dHNRKnumCZe3AAJQNkS67aLqFUMjSPXS",
  "key19": "2Z7pswQ581BsTJdrzGFUAFQV37hAvmDFAQRftD7haEwBEceXN7aRS2vPH4nvSGFfjYJuEUfXxED4UwrzqrW9AmiV",
  "key20": "MGJQKb53kAu4ocMiSUmFnzfR9F8XykbpoJizYEK1mudX7jPCirtPYbi3tAhdUfScWWxnZLhnvrfomcVkQC46mCE",
  "key21": "4VKSS3bcs9vbWXnZ5Q6uL3qFWNpXtKMoqfaTajWLx6Kszey8gbw8YoxbUimxxhX5E7wjsm2RggnPgz5g5p1vSkQ5",
  "key22": "4cSu7QEFxdWyxditqTCFwM6Z6sdDpwKSELfmiYkRwng6yBvCYNuQiEx1ogReYb6xNZ6Ap3vNp9PN4fpbNoP11dEg",
  "key23": "863gTs5B124DXCkwXv3ce8SXvxNDC5qpVdpTxkCKwywJCuFzBAcKnsnmdK1Z7bPDn4A3q26h1Z138P1wRhFHJpv",
  "key24": "5CAxiQrVvXhUxcQqXPG6amiGq5TUgvWYYhV9sDLxYMfJa9fVnK1cWzSgnf2watRpowTnpkDkr9S9t2rnzskadDr1",
  "key25": "MFQv2K74FstCmzRHZtvcvRtzmtiR4Msv8yJ2ZpeJxKTERrE3xTe8Dm4fagZneQuhQ3vgHcuxaXgFgXQDNL12XpK",
  "key26": "28QwBJkxxMfPGHu1fZndZNNvnzQLoBisSMdZyK2UNvs4o6HpFLsf5uLvs1mTN3bBfed2JRzP8tPXTr4C62yecAt3",
  "key27": "5nvU4cZpmVmVrQyGjuBHqD6hR37cJ1Jq6odfEZbg3cZHpvAuUHCNPqRJr1kEhGmH1FiuAZvzsLbt6N3DCoYU1kue",
  "key28": "VqnS5WJkDuwnU5h9PNbRgsc3yr6RsJrunevZg8GHDqS8xigamw5Qov4Aa1Vds35KGtPhkZgbAuRjSvDpg2i1gg3"
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
