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
    "3oHDesPVJKGcRGNUSC7EF9HAi8N9QBTVupA7gjABacKuhHpfhZcvKZKyUsgKoNnM6kfivraD5vo2s7bvXZbb3ZHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qg4nJpU5PXmLd1LPDYYkaPdAgZs6prYwhZEaEkudHfEDssSwXnnYFFEkYnhUxg1ZY3NM5SKDt7pHEBCq1Q4UaJ5",
  "key1": "4k4FZy4mWw1YkNa5T5KfCNUnZGEDUVDqWLdrqkUTpcjgYtFeaPQ15aidocRCb6v7GKreavNUizZAJyox3eeUTwY8",
  "key2": "Pt9oM9EUvMvShhLCuXHawKTf7QipRXNPkUt8sdNYihynBfk9P6o5NuYA4PrnMpLB9sXvuo5cw96WrzjMrVgPAbs",
  "key3": "4PxrY1G2eCAoX2CV9uwggfN9rroMH8b4fbGTHf4PG53BLRKUXn9WcRaLPQjBbjnS5FziH7YS4HEknJrhu6kMN3Fp",
  "key4": "4aJiQpMXLycd9QWgmCaEqeEJ73spnWbrot3F6j1eMNXLNpbpJkDAoPUGvHE28KbgU2Bo3SdFcs7YthjZMwk8gjLm",
  "key5": "41RwtMkrZMqtZGNhe3S91CQLtahws2QDFiTfnqKbHso5B9q1AfTsqiigd8ccURfQ5neNis1Hsre2REM6xU989Ltm",
  "key6": "4beija23CbgTpv9cFqYXkjfMGypnVqb5sj1Att5t6kdFivrWv4cSNqKaPhk4pC1rhXeXTiXgBaQ4oLLmMwmd16ak",
  "key7": "5gumR76onmHmijqNyYj4JKVxTSwT1pZzb8UTfZqdmhr7HoiKr3a9AwLJGVrnfnetMKusAnmN2ZMf27rvPxc9Tv5w",
  "key8": "5mMtueTYfd95M5DerCZFKehwEXB1Qz2Shzt4JhUNHsBRbC3xyUw8fjJJvQQrVZgcebGVPRTZSaiEhvD4t6G2CPpv",
  "key9": "3SS1eAqNMTM12kkD81fcAy29bqwrAyyZz7kJN38goBYPSrPk9HN1HTdnExWfjkpyQowzzK6GUXmfVsbLPHLzaNEX",
  "key10": "4cuBjDLzb55Rg5bGqVp42wgLYVhYK7t12jhKSRVTFwKjFCJSBFSTpHLx33A6yAsYLBB1MZ8WpLTmppPXFgShDGy9",
  "key11": "5UFCkePEupPHxhBAaBksxkb2ez3zU35XWCs3f4mpEeuW8BFMsuLtTtDDQZ7UMAkQjNZYnMZ1Rf6VcbEJLTjZogCk",
  "key12": "4FiBAPncStGA2DWvSNR4Kqu7W785tTrVYk4qBzYWYDsHZyCKXvA5rGYsWESswoFWcfdYuZuP63EAYhhxKCoTASti",
  "key13": "2pe5BytquQiJomMzGQtJYL5RVGM5Jmkbz7YcABXkfexDLZhf2SCQQAh5cvKu6MKtdmjAc2daQqgxokyfMaVwYEK6",
  "key14": "4kEv1Ve8o2D4ZrsM5hH5zFb6okoTtF19xb4ohEJ6qZ2QS75qgXGX5URQn2FxeyohRqTFb2BF8JG3qhDmfDnTCoCH",
  "key15": "5RqYDTw9NnPPNzLztccg21VMDdNRhSbv2GosqUuZpQN1NvdHz1ZrQshHoVV3qi6fXcTshYKAgZ8h2DEH5SA15LVc",
  "key16": "5bN13EjABznqbsheKg7gH9GEq7LCQ72vgaQHJSiDkHrPVuciDPyxMaLKVVfYVrUKxPJ58NuXx34Uu144GBsBZmQN",
  "key17": "4qRNBtDSn8SZe3igJNJEinWxBCQkB47cVeQ3Bx7MVm3a3dd1iTeqsyaV2LxwugQribRGueUgkewHm36Deivi6Gct",
  "key18": "s2Kf7PC98Vzz6Rox8hJkrNsHTPaPwfb9GiVtV9zwsYUZ1pEotZTTTu58V6MDBpEW1o4YvRpn5Ao47rCL6vsamqz",
  "key19": "7cPVFp7Po2Ra1dwCxL9kmQwBnviFRLPhzfhygDyHt5GhecymdziDamjQdsdgHht1jfA2HV8CVPSY1BY8NP7BsyS",
  "key20": "4J3HhvwKu3YbHL2C4ocv2SyCWKjnjeHT3oW99KunJexiQUwiu3iEe4dfs4qWonsiZu1QsmoVjq7MtGyv7az1MdqQ",
  "key21": "66ZMSwvfmb4enmG83MmoZRHLSHW2Cht9aYWxBeCRQWFRVFy7MxXuLzSaRGSVaxfjj5AcP77DB8ef2GDBCvXKwTnV",
  "key22": "C4zfDqUXAr8FA61YcFd8KbPoc3teKb8uB5j742CAChfbnvH36FnjihdkvwagaSP9hBVdmJJP4CS4jukz3x5z3XJ",
  "key23": "4yTcykLJ52WETAMuhdwxQPZwMcpWUCtDPmRBdcZKfG1Xc6MBZgFaLkR7XCWn37DM8KSD2CnQmtSPJ6B51HN7Cx3y",
  "key24": "34CeKkfRRHebnvCTaX6ywdxdG9gqHXkf7LvXxNfgwb4MqPbdc84xiJkEZaFAvVUPqTpLAmVcG8aZfcgZqRNr7c44"
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
