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
    "qQMJ8CGnUKQmy9ghrhjeJ859TaddyAytYcmoA46NtSzm2RUGyknRSfpUWksYTeDJQ5BMeWMs7yBGMTAbq7xRdGy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LUUKu1q2fCe7y5soq8uPWiTYqGPaHfXzwNyaHZ7zo5PgsovvzeCxVe8NzeFH3Jf3Zgpn1xazEEQsCG7QdUiTSK5",
  "key1": "5ZyDnuH6hWYpNUtMJDHqjxxxgfSqac71tapdHdZKwe64TNo3LQ7xFMzRAnwbU1ySEqxSiaDToM6p8a7AaTAxc7Nb",
  "key2": "2WXUrUb5nuXmo6qAoTYGufGyUqjc3xrDJbRNmvfRVGLmUxDnV4Bg6hCKregovvFdHmqqr2YMDtppfBZGZ8CjR1BR",
  "key3": "22isWNA4hwDA3DEkHUPirjRXWfUp4BxyNjpxUwJRiLCFq8Z29EcRfAV3ZMt9akipBGrM6zE9UVK2Hynd2APJ6ab7",
  "key4": "4JVddX8hX4SkmSj1T5WM3884tUfaiunmJPy1kxWZkMXB3ezpK3Qn6Z2ZPruuP99MCg6hS22dgnJDMwoGEeEvmCtw",
  "key5": "4fsERhyiFbZAHCagxG8SuzAPoFJejXbkYRvmgmM89HEgbxMFDiFuvfD9qRV4NB4BZWTQkPav84fX7MsynBbh6TFg",
  "key6": "48xQ94dWA5DDXEZ5LmGUZY8f8zmWRtAkJsBjcEMwUWW28MSqhtKmLt3Bt5bvPPJMgqpqxLQhmpqJE1BWNSRhQTKs",
  "key7": "iY4dEENzjqghjipJZc4xDe4bgiUH3f3vz4wHbCessqjmewiCcRXW1rXg2fSEB1JYt7bv6qy2cFmSuFAsUUBZAHc",
  "key8": "cucUANmPub3hNkcUEgnHMfAq3W9n8s725hcGri4UELB3JR7zdXyCgAwnzsmJWiKes8c44QxGMNYa2jhh3ftSnQ6",
  "key9": "4kGh5BrsQAHtVSmFoLH6Wktn9ej7Do7Jv1iN3NRSTDR8VfhRAnuPsi5QtVs2fLVhivgYoyxFnLPvESqzzuqJugsf",
  "key10": "5Mj7MzE1tRbJcH3RiUzh9ZcTkH6CVjBgRL3mAEQxxf3TE1XychCxsPeX1efcSPVXpoyuYyNMoWrXnjgS2bRv3SvB",
  "key11": "5uiogWQk3zGsBzTnheT7UGdoyKgnNJKxh6BYDS71ZGSFVTXvjjSnxuQbgKRzyvq3zb3sGmubiV2ySVVbBD6RqDH9",
  "key12": "2u5DoPAuccbBTiM6jvbV9K5fDy8Wu6jSqpqyCaVsb1KPBUVSyHaCeNntdzC5SGeSTd4dBxqKYpzKeucf2gS7wyei",
  "key13": "5dpjBLsN4NCRS1zq1fGPP85LhXJwTedywkDkWdE6AaYLvetRRu6PfzRfiLe6P3TViHjb47jtRVWuueZiugWYcMBY",
  "key14": "431KmrznShaKAjuei9TbNC2RYhs3zoyfzXaCGLasVitS7mpzfnzGkB231zBn4HwUCjrVmHRmz4npKQqytHVtAQdr",
  "key15": "3Ygip6aox14EMYQqkNP3ANcLsnE8As5RGh9RfiDybXbhyzUMBauP1qY9rqEuuXxuKetrBkMqMkr7parRfuYKoPtb",
  "key16": "uYQ5x1T7Qc2QaLpgPDjfLyKTvQ9bTAMvSWNY5me5UJHptjCiWKxXNAcUYkcvjNdATfkzfAYYwgnAE7SB6kNtyrh",
  "key17": "4bABEVeLU5NCnkvvXaVCd4jh36smQngMu2tXED7vxVRQhT1fUzdg6EjAbFeZBKfWKQELy7n1WQR9rcjnPdSWjMR4",
  "key18": "5w1yWyDqcTwdAoCfwB2ZdLhxC89jgXXJ31r6jU8KyKGikX6M6p7kxksitd7GkVnTYTaG5BJfXRv1Sf3CBaHcaeeC",
  "key19": "usP53JAtWPaccoegq7qyitnoVQRNGUxNo4ETsTNto82iTg2kFcCW9ntfY4g3MRwefAYZa82gJfHW3chkKo8AMqt",
  "key20": "2f6u7X4qGWFvmbGwcFW77zCk2BwWh72oGz5j3h8mN6Dq6DygdeS3E3zJJHzvL5Zsy6giujnikTyJt7nm5QCczWKt",
  "key21": "4xxmDzcD1iAgLqcEWQkLse8WBRJEvd3EAdSqTt9MLJLWsbe9rQXWYn9tD6cbFatoceTfWqVrB3hAtNpMp3x6B5ys",
  "key22": "x2uiqzk3KnjVQBfAB39KHfavvMDCx6ivf74tDGM8gPjrSvGsU6qQ2j6gNxqEvjUgxMGm2mJvjQ7H2MagNFRQfEG",
  "key23": "3BXnMTrcXwFCzH3PNb5mtKLz7sUQuXGJi3WMJtAzSpYWcASB48V5NXwSzQQqfoa697w1TBnLtJCxVGgLNPDv5Cco",
  "key24": "5ERr25r3x8kQtQLQC7GkM4a9QKvnSpEJrD6mJ72vGKPeyHWWZ4DDTUwM2DMbEEGT4paKn7Vmn7eGchCDUVySs1oG",
  "key25": "4GW9tJytHkDKGKQ4tmTTmVwRo3XArHqQNuiPh7nR7PZNpm5jjbG1ZcaKtxkHQMrbtVdxVo7qS4iy8DeQDGaPwayN",
  "key26": "4xs1rakmyuFNdNhxw76m8GvLyu1mrFRqFjQoVUqb9TVdbmXP7soNHVFMSpNaMdeBSNFLiCmsDWvACHVYD5A5nYJh",
  "key27": "4PJzT37YmCESRyJyKfRLz8xJd2n1C6dLjJYPoi613w757yFaKfbcm4jfgc8zNaHAjB1xQjiAHQtVLeKjspMJGF88",
  "key28": "8rkVJ3NcHvYzK3DS4ChZhhZ8ht6rMXjZ8t932TJnyTK1msCSoLiLWXX6eFKwS6TdMsthM1YWK1usZga3vFfbtSR",
  "key29": "59tBsfN48etxYbMguzzbnYQvXXqtJ3QhKkKsuoESG9G8P8KHeFvrZKK8npPyyMWPcfH7EtdCo7yJ236ZyjCQUyza"
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
