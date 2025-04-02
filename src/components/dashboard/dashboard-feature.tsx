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
    "39AGx5HCRA6v3QSWrsSvkxUWYYqw6CDnjKgC3uJApbrydL49rjQnTnBDZEgjSSZcU6EkXmY2oQhngs9SHMBtbZ1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dGnVw6nfLBGbD5oSz5QP2maZCLqJAskVtZvUNG4WxS5Nt83LmJmR9a3pj2Neg1M3CyEWiZ7EXDFqxQ5cBSFAvb4",
  "key1": "5WPgV3WHhegPptjNNvnaqsdw1BiRc3aNSnY5Fs6HVDfoeMFf8P2a7qEAcsKLSdFksFGEdoFpd3tL9qjiywGPeTeW",
  "key2": "673kuKMh9v4fw218J5jDfTk6PBM48hLn2tnfui9DUhmosNSzkaynkDpisthMqNhkyHF6dfwg4YKWsmgz8CYsGoZ3",
  "key3": "4eqNFmdrXnU4TrUjv2TjY8WeKKz9zqzM9WMzsxajHHn1hjb3RSsas3WHu7Jqkj4szikoE6RKyfz3JdSDsq4VCmSP",
  "key4": "4wo4tz7Nyb5MPMyy7tnNervo2QwTCx8yRXgaDK9PywXPoboLreUqLoV135HjkKb6Gmx6CGRkayJ8iioMWpFYR6Ve",
  "key5": "3ukd9FCAwTCgb3ZP1pxGk14fHkpY5baSHpkHKfj8ZZck9jFz42BEwEsK16XaGvRSntffzpQQv1vfqwthFrUDHutd",
  "key6": "39XEwk9gYaeY1yV1yVAA4LcAf7qKf8znPJWrgDARpaBu3B4sqFbe7jqRc9Kqg2tSWpw2k9XKCYtqRo4iUCQVUnfB",
  "key7": "2LCfLjGxGxq3oRRmDW14fRLQ2TDmEpdGP7wkbHpSgEEPncsdQfP4a6UVgbgRLSG8v5ZUCBND5b6c2ETvvpL16ufP",
  "key8": "UxvZuhAkvfbPomS3nstdKdZXJrXrmCwCwAq6yJ2Bzbjj8k7tyeHSAtqJwAdD9N3SJ6eK7V4KncB3mVH4G6SggZU",
  "key9": "4f2VRZaKCUgCEtmWtmygdatUEefE6crPJfNCkTXPbLFVCj4bui9Ljt8CsypJTKSdrcfSTxboTKqedMYeRdQBp82v",
  "key10": "axugyuvTdFsX7boSrwxN73AGzvTzCJbVWgXVe93WSqkK17jL2vyKTZbWjpEqaed2zkNUDUt4mhfaVKWo2d6JTZU",
  "key11": "41XTGvpFtf3zbRZ2oTksFvP7Jf5oZDiuTkar2ANo6oK8PT3vs9oTZkj1tq32fSiRKh2DD6vHqCWEvJ36xQ5APxuP",
  "key12": "3yS6DLJyGMHkwNpfkhpJm4kpwwRWvTrWkptJv4BWEGcP7GkWPSCFb1FnpxZTQPLwW5nZWKtxRyTYCdN7atQ3Gf4e",
  "key13": "2kRXN3i8L94gC8WUtxNiLrkWFgjXjnCeACCAz9kC5wA86sD3Ur6zX7rzDb5BU4NWweyQCV6QJpFrefmWKsyy5boa",
  "key14": "3EefP5Q4nADi55Gc5Nb9tC1SzAdvT7yzVL7oQY6tEvRSUavdVVJEjMeAZR5z65nUn5RMiyZMLM4rtiYqVQJ91ngu",
  "key15": "2CFab4brJQoTv2QK2orxX5J3J7qJCJMYuViAwtuVEoEtMpGsVYv47mhWvkBb188GNqHsBr8K5JqYM5BruoY4fVUd",
  "key16": "CnMqFjsnVTSgJp346AFrhEawWweuRGbyu5NLoKcfN2dxuYyN1yJgrkWUbffh7cPKvNPjo1pnkUwp1mAcAryNPV2",
  "key17": "bwBA1eVNss4Tky6r4u2pWuSo131WhtJ8hiSQjyhtNJdyUHRvGSoKXMo2xQpV5LZgNPssn68FeQAAggEUoVBviUP",
  "key18": "2Q9buZ28Lxa6PRG2FZKLFHoCktovm1zS8p7ppgWFJkCuycQpXLiuf2MtTkFirWW4qWq7HqQS9DaLRnhrkLqRMM1v",
  "key19": "5Bwkf6RN2yKwFtitRSDQKDKyckxEZYftC5cPnMnfSJh3VNye98EfjgTzVJ2N31qfTekwD4cm84Kr4AqhmPzLHHGi",
  "key20": "vNwpBaZ7hchMAu5tAm176QLo1eWmCC5f77cPLy6qYWwFoLC5yZYNjKieTCkmTFzhLyoFeAcFV5aLNeok7puJ4Sm",
  "key21": "26irMz5Eq82Nm4BXbGV3RLbfhcbSR5GL5z8m8VADvsxSEm3ZcZsSHZWqgdibykgyG62jBsVusWSfDSRnTeNazCfC",
  "key22": "65H3doFkuTrE1LEwRUoXS3yURVvVjw3HZUyU6WnuufupikEFVV2oSW15t3w9yQWhPPezcj2d5JbmjXgpa6ZxmFp8",
  "key23": "26bJhZDDjgUyUpC7PMCWXrR7cFuSWRyJ7gtP1Dn1v3RqsUWf8Fh98raqQNjMriiUzsNWxzWniZ4fMfPzLkFxh6yP",
  "key24": "627UfMnhkUFHvTv7tzPW9gMFdvovCocaT42UiHpkH5D35MbeqtUJ7gt4eb56fbg5JT4zhQGmNt9Mpm5is6HbTiZ4",
  "key25": "nVrHeunsNYQYdd969L4bG84oLhm6cv1PdnW9JfphmwxLH1DxQwmXSztkDqLAUnfPEkeYhsxxwepJVtYkbzETNQp",
  "key26": "48KWKeqm8zMXp9yzZSkb2FiMYEXwzUzV2byhcPHxViVrGW2FggF9TKfWHVM623rXqE9mBjmmg3Ep4gX7pPZ9oQzG",
  "key27": "5TGaSVQgWPur89AZiiAywMWbFptZwKLuE6i7HuaaV4PC9GSNnmBPmHMHmfehxmgyRR8VBT5ERkD6ahhUj6y8VQUk",
  "key28": "3TJgzCCEKNDCCywQRYDa6oaPrFYAAWaScgnnrwsAfJeJPKawc1HVgMGbdYDQ4REXvUp1kodNFCUkXvUGW2txyeR1",
  "key29": "4ttWSUc3vNeN1aFjiefyFdupMbp2NuMYWhrK8ybrpKsmtJHE5HtEzWQepT4NeUxF4Ar3o8QSNMaSUejWGxjFAbx8",
  "key30": "5frRwU8iNurtv8dhRPECbWEuCKzBZW69jzJRnifoPq1pv7Eaac5jjD4k6kck54iYtHNSBtFEJ1aJN6Cj74QfyU7i",
  "key31": "4UQKYrEzLun9QDG7D9vNiSfsx9hcDFYcXkARoxuP4E2rPhNf3C5Ub8q1zxENuueRS1XB4WywR52xn54ASXWaHCh5"
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
