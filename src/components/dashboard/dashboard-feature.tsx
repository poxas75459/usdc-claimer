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
    "drzqTvBh1VAoMjiTUCBNFpMKLfXvCtj7VQsVafq9WiWS4YJEmKBB436CK9DF8kmCLXk6ZsrUGnZzLrkwngV2dHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tCWhvKWvaX4z287Y6gcAasEzsheux8BXcitv7DyCC5NrDZ8YFE3SD5GLCeHiRzDEipBEZds2Uvs3KPAh126iehg",
  "key1": "3R9Cf7yZ7dDzLJ4nstcS3Jhrc1U7dTYtYbDx2bJfkkH78KbuBPK5Ykh1GuqcKYrXHAzsZXVFXVGx1XwLaLuftDXL",
  "key2": "yecMQrExkNQ2ygYAL9atahFAKuTT3ro1PHt469Pcm8HrNNKjXyYUHnB73cQu3tzDPsreBi5FuWyVcBLRZzubNrT",
  "key3": "4LMFFE4Pa4p1Wfados2Fvbzc3Y59VAs9VbDRmUMYSSNoF75ktSCUjyCJ8jTxPjiTaDamLB8bGizp2Lu7uuZtyPRE",
  "key4": "483aBwUpvd9a6rGV3w6jKBRCZN58fQRwVYcryyUXbpQgXRibVxDX4rxP6VDtLSjJpoc2VS5ke4gQ4ScA5pha3q8e",
  "key5": "t85YkXJjzAzfLMGFReQsH44XvFxdRwmCooCXgdvDVZKAky2j5si4dXTmxnJojnTuwth66QGWUrTuhhYj91LX8We",
  "key6": "3zA9LSUJ8ipoqw56jFLDjyCGjivf6u7PmSs5oTHRmDecFjvFiVbzg4F7QK4TqJUZbvG61n5ZpQoJQKRCFa1MkB9q",
  "key7": "55GzEoXxzzZPDCny1qxp6MDkLqLhvyTvrR1mdEJyVfTUMVZR1ccDHpMDDKnyFZZdeo9q5Kv881pQ7fCavKnuzfuw",
  "key8": "675APEJk1bxLC9PEFfdRmesXwkTu4CeFu1QqCRxfcj5efHd12uihm6XtvotV8hhJmzwT9mQcbRymfnBGTnWeNRn7",
  "key9": "26az1dwhrJArTb3KE21p6GcpqgF8VX5o7YrHCtGCy2ryqVgBSVpVcBhEYfH3TBSExj2cPXnJqeRHopbnsuF3hsdf",
  "key10": "2iKiGXS8rvx367dJsuJKqu93J7oXtwodv2Rm1iBBrPxS9DktKyKp2EEnMAMR3GcJcpJ2yvJ9DBqpcEQ4V5fryT1c",
  "key11": "e84MFSQyavepKvBbbDagexiEq2cvyse4uF3XSxrPWy6HApaYnJNN99p5WDbZXYoo9DeJMwffg6NJwqKqsZ8FoBy",
  "key12": "4VqaMuUpvjRca4bacJTYCVwYJWrCMT664XQ3dF1pCP4cx7wk3NE4GcUwCPuQirP9ZpRtCLP6hmXKUqs5LXQdeuzR",
  "key13": "DDBNyeKLFKtMcCkV5XHN7jseoV8rnudukBnQyVEBibfjxpQ4vSTPAw4A64HgrnYJXBwhEzAWAMeaySZNG19ycwR",
  "key14": "2x9ydnz3g2vamaiZ3Yy87616vv7BiY4jVFFAnH7uC76AQdC6qnis4yBEzSTGuMvXRagMSVaqaeckzBAj7FC3mahb",
  "key15": "5UF5NRkpTgZKwMbVzGvQ1gvHNZKbeiNJ3UrkSnzieUa4oY31XvYAL8iV88YWzHPA1t3yfAEoEurbYTUxLirETf8G",
  "key16": "564RtNL1n2dD6mVe3RYgxEVnvB35UhPUpN8oEsMdfq1mYxbUDs7toyrCNPCsGaREFXveS1kds9TxKWuPmku7Gavk",
  "key17": "5iK13ZjbWu5KG9X21P2wpNUKokvSAqAdUcWx6B2z4LLSVK2byJA9CA4zSva9Ya2ghxYn8EtQnqKYMu2G7rmVUyAJ",
  "key18": "5g63TKCwn8DLaizCsufQmUX5ZkcLiewJu7S4ozcRNuVjn6W7AAcyvpsJ4x79JoV9fGQmWXak4DqQwHUS2pNjozPM",
  "key19": "2E2BBav6zN2FR17h9evvnBPzxVFQuBh9NMZ3JAhiDyHouQATH3E74BezvnAt2NrrsvDS7tkKJ8s8dKRwjfvXDres",
  "key20": "56rAiBPEt5Bdtou955mdrXoc3RSiC8xAbizkdteNtRivMit9UzhdWxbLqNterc7LVqAt63tzuodF9kM9u8eVLFH1",
  "key21": "2P1VzLaVbEN91bTAKCsJbDX46tWV2Ne1Rz3gVTuyqLTuBXe8VAaVAUzt5Rg4hH9mgUtUXubQeJU23q7hnbS9wdeE",
  "key22": "2QRSjhtYED2usmcGWDmvbcpTZDFVcqn7Bq85zsCJ8MSYunumWtqWdfqxiGUkSMJbxKE2D3VrEvgKC1f2tvQJ7Q9j",
  "key23": "3esMo4mp9kJuSoiVzVvGYG4FgsZbqnBSJdZUm4YmHdJEZXQatpyzvfeRkDVU5oLc2FuvXwT2QQtZbPNKNcxBQXm3",
  "key24": "4wKNF8KwKrEDAuUC4zZCgSdKFh7JDfoAtQn9UnDFDXmojH63ZXqyisTaXsxdJdq3jpCbGeD4Dds6mhuLeFEkYkYa",
  "key25": "5mvxziEPxqeBG12t3FbyA514kgvo2vDcMz2yq3o2RMMeS3tr3McxhZFaByB9ChzVdA6u69LdgkXLnx797dgKVbFZ",
  "key26": "3Ya57N5st2tgdx4X2ZMRiQVeZYRNkAmLGu6ufgYS2svDq15VFmbeponaRCPvXYypB54aYKs4h8eggMCK54v4yLv3",
  "key27": "4DBgPfJ3Gq6HWuNXJsCzerMWiaZ6ztRB1yqpMVRLdpX6sCTEF4jJPKAXtnbbeRKBXCfNzQ7FSoWUtATUi8Gu3L1X",
  "key28": "16wJxcCKxRzW3TnQ3Ecvf7N5UwLR4eQAfxtH4hgcqBTN9XXe5SNfxe4pdUF3z5nQipWWnjdoggTHfYjmCRLX6ar"
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
