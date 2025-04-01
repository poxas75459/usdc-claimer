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
    "46PWQSwq8SseeAfsQubA4NQPN7mwJ7ndXSCow26oqcLDLnV3kBDiciHt7zdyVv3MST27w4oMJBHnvVxHLzZsgtQ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y7BRdqwJYVzHynh6vQZ1TFxLhqoDqFMHPpaAZx94sDaV3bTynPtthYiQrwrouEc9GVatRd7yPZCq99skVm1SkUH",
  "key1": "4rPYNxA82UHJGiim552sBmZ277i3prhpGHkJeSCkS5R6cwVTuMe1E8g3dpPhMN7488w1wbra9Avwa1G2ra4yLp85",
  "key2": "2mVJ7Bc6wfecAKdQVqtecDKBmFg917CD3vB2gUUq18a3SPS77UjuZJNq3gwvgEgY8XmN8GGxCpFRVn51MAbTxBsm",
  "key3": "5fAMYxKPwAantF8VEoci1T8a4KnFBcvBqqA4sRHgLVoUrZUFPLchEPuBL9VtEXRHymUBb17sdrtHtzbU62os8GJw",
  "key4": "2G8UktFK4NX174MdNaVf6gRBvgY7oZgSmSJJ3rANxdnDUn5F9r7NCLx6iC8Fgdh1sgRatmi2JJKNrLiasqJ3hxQW",
  "key5": "4pWF2PPPvDpZ1xhJFjFi5wCbRF1G4stqjkPadTRAKJM71HMh4yWNd6CAesg8yyGq3GchK5xg4g1B67usXiMutodJ",
  "key6": "2AJ1tLu8oC1JuRWmzupW51YCqkj6TY96voM5aKYoEVtzTHtHmcsirXWesTWJuiGULWcC4mkSAyiw2FJ5sjpDt1Yh",
  "key7": "291MfpE6amTkibaV91rwMyVY76jY5SzUTd2Acy41XgG1UYVHUfhMsA8NLV5HffkvxubzJSZoBoCtNe1ZDBzdiLzH",
  "key8": "5J3VEwjCmjd38xN4FSYHXSGH1nxUqNJsaoT8cUrYJ8m7MHyJW1fsZU54jRqczbJZVW5DnWyN8QZdk1fR3VaSTHke",
  "key9": "b2WVVq6SMchQFQfig1V3k1hwqLeGwuhhZ7wV2nuioitnuyqMb1H4peNtCcP7teqjDHFwVPvrnBhDcQeA1YFiQqu",
  "key10": "3c8RNYnCxpMWqYQYrPnaWZDPaexzy4xbutHNFG1kk5r57NeAxGUHfNmJ7C8s7RgjVt5fQusTGjZHuQtJJ2Z7S8fP",
  "key11": "y7q73uoNDKeju4mbNQxdAPFw9pMg2ia8HsDr83G38yZiz1pFkdXsRhiV5ApqdiEMBq9vhukJ4iNyKqhtvNWPNnd",
  "key12": "A28vm8f9GBCdPBz36noixyzR2KuQdvad6MitygtFd14mB2QeehsKhUdtsn3YEGt1oCRXM6b8ET2Sv7yzonSKhJ4",
  "key13": "3qPJWJAMWEkjNQFYXARSmdkiAj5CtrGJDeTUnbeVuHAVkg1xktnrD4xY29VvtrMsG1tDvTazPTSQdrdhd1pbwcJ5",
  "key14": "5dttxTGzU5rUMxiVjqAS7ZR28s9FHwRG688oRj6sUVbNyR12e2KBAz1PDD16FJn946irm2YN11PoFtZyYTUqayoc",
  "key15": "2WeKvmmM5NPK7wHpZYaGawN2ZXcjhCKQDXmrjQB53Xwh6jgq9pM9XLW2nFMZwWH76s5bfriyizdtLateTYJA8L6",
  "key16": "5sf3SF2y4g64hcpMNHRax2JvcNWVmS3YoWLh1fKuSKvwActTusmy6skfbZgWe9E8Wyp8YRm4y8iM3YRsZt4cTZ1a",
  "key17": "2nD4WSzEKUgG7P6mzTyLDpzfdVTtMgqibPa5Li9CfcbPctcPtUhVqtedk3YpEmYDSS67YpHF5ZhCocFVHa4RhSHN",
  "key18": "4jBGQEEd1qBG4wYCxPHuTjdWKFSfyLwgvHY1zPru6V9FRmWXThQbkgRWCH9G5FWvvid5rgR1UKw6KFePKaNBMNFu",
  "key19": "2MR2FtU2X3SBFdJQtgUPBNAuHkEiYq5gA51Jdn445MKzMhSWpGhsCr798BKBDZttKdhyyvfETgpMu3iqh6TXzUW5",
  "key20": "527MP4cwuUyH2cbjRKdghRsUpLF8pT8obZm7MkF7xoMw2zkfigdqxZUbx4qVNfmZwK79DAMtJRQ8mwjLNRGGx2qN",
  "key21": "53Uh3oGQmrrJSjzeuEhHQsPzBQRU2cMmEfCspQKZAGTFWKMGxo5j4LubaiQvqRyENM5TJdYtHecUQwqr3ZTUbZj9",
  "key22": "5H1mTenaGYysFBMNjuFAsNv8yndcdAAw8BKyGsEzem3dkY3twMTKNr2FmMARpt4sK727KVPLq8m7wtJW9Pzppq5z",
  "key23": "3diaJ2S7yjdraNNxe3ywivgyUTxuKMZTqG7NECuz9fbSc2MQ9W1UrDfdaPNEGdi98r4B5rp7FyCaEnrfwM3cuAGA",
  "key24": "3Yx5ZiU8NWH9pjF16CXN14uenTSx3nfEbroYqBvGvDEqCmESqfGzc5Ttf3Up5jN9nb5n28fdPfQYPoqFT3cZAwnM",
  "key25": "5aUUM47uG31BwmbXJYsV2CsU2DtVSE5QfDsu1FqiEYwrMfAgGfcfWn2STf21XFhbHXKMxxip9ANJy58R9MAGuzN7",
  "key26": "4aBh4MbrnF6g2aHVDbZuJgo3FY3zFZiJssBxDYwyK27AuEhUFaiFBCA97VJuHHWo1bpvZV1ZfRrez5PMHw4qSs2S"
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
