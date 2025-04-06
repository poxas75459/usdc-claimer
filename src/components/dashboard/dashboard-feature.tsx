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
    "22eeNoDaMEbXCetBSTdKCn7twAzqHSPYbVb1reczdcyBBp9V1SANfCGCACERQgnvGoEsQMD64fv9V2Fx9szvo5Pk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k3wLEVmsXQpR3UhTw9wGXaYGcjz3AJ8HvP4aAjQHFdPj67buMUVYAnHBFHLnHuTqEANheG9w6ti9LHivDvmuASi",
  "key1": "4QAQgjho6TTN12rp3h3hdVK11uvAzVRMUMNpE64uigQnBryLMqU9VyRCiyGZMjSjruD4aFstqw18c4cwiW4FPHF5",
  "key2": "5yf2ypPraoYs1G63U3KvxURNJYAAeDHndCieQi1Cv1V3tTgscmZdf3kqbNmqgCEKPt1VJBfjqNBScbsBtJfQVw4H",
  "key3": "3ZJZ7H3jz5QAaqDRnd8JfahMJYfSpFdRUXBXcR36qtEiajdA6Uu9WumTGF245Eq2vYQH2Pto9r3roTYDZXgxd1Jt",
  "key4": "H2n423N3TcMiyMZSqhKwwNBK3kyp9ignX9quiWu4zpWLSfvgpVf6Xih6xiFVsNBepaUMceCwULrhqmzUiH24yJ9",
  "key5": "4xKb9YVkHBbYynENkqR8AHXo61Xvfx4Lps15g57MB57VYypdaAYsyPX1wQyZp6yJ1yBR4fzWaobN1uHviPiuDNDJ",
  "key6": "t779sNMX82iCPLHwUVgWtG9W6XxLVy1uPAFuDvXwPr4ZcDk2Fi8PxVcvFFUgyr2Qz5uU8MWJpF6X3N3cAGHxbhS",
  "key7": "PEvGN8x6s3Fdok6p8j2n7LHiUHRSTFZgcAcpjzFaAzx1yYD4N4UW2Fmt88ijfxbZGZr2ht2hdDRnY3vLA4Hp7tZ",
  "key8": "J55wKxrVWJ3Mm5Arde8Yva2rC4Uh1dzsAuC75hVePMYWsutxoZuYHWrRJEmEZ2drFqWvZL6Ai2NF745TFEEaJWH",
  "key9": "36EjMsF1PRx8M3F74PM4qryGh6gcwnET2mVvc843S9N2NaLrxLJeYz1T1sVV7gQwF11weTCFhHgusP5uzAtSiEcw",
  "key10": "cmqNGTiC6gm3VCVzNwneN1uDkLVdg4sMDUycbEwYuiub3JadCfNgoPQNeBPkHu245VG52mxm2UCBKFFyaZnuon5",
  "key11": "4Sv4hv9ZukJ9SCHND9b1hqwwnTcjv7e3XsyMQU7jj1KpAHVajTtrqu7ybNxM1r2FXwr58HbzftskfWj5zN8Svv6w",
  "key12": "LTu8oAKrwytP7iY1fyMc9utqxcneX5tPrCeNPsG7QgQCAVVWB5Sa4WFWLaNraN5K5xJaUYnG75RFKqg8VWhNTk7",
  "key13": "236tLyU4wkYYf23s3Jcai3BkUeG29FCh9oQi99Biq3goukdaApZkwmKyPa4M8X2uh7fBLPjUmGpfqQrEAE55RuuG",
  "key14": "4RjydH5kUc7Uw8fVd5NTxhTv9rhe7SbkaCE71ezcFMp4GXv6zja6C1y8zVBvHnjLeNPmZAoRaN5yDiYwfp82c1pN",
  "key15": "NZvNcMw1nYDS6UMsRKyDWPKsbBAGDBcFyWM9sLHuVcD15epPXnma8UmnffAfyQcrRAiqbUj3himGdufU8oQuExq",
  "key16": "4oxeHdvRYQhdKoFeqU95yHwKBsQUgUuthXdDE7LHenXg71fB7SutDMWP5MaZUDKtwgGnyLF3STntFUqKHvStRktD",
  "key17": "5Xes2Mf99YNkqi6uxRNdgo3QQVAdru4Hn2KCpzcRtLtjNA3D9JGHTbGTaPsaZ2rrf3dcgWyZveMewjK5uKEGBsp1",
  "key18": "2aWMdSZ2UJaxu2e5g1qrv1TEeoActoSkX5vRH6w1pRih9ixqpP5n4fwrst42rn3xMsE9MpVg2dip6hY4dWLcZJpJ",
  "key19": "5mSDUGwoUCWptDWnBH3rdqmKCfnx1tXRqrDVJDrc2USCLgX4YuqNBEc5yTm8hWVSXa5nLhPcSRyNND1U1iEJAHEP",
  "key20": "4CnznxwC46HxNm2Y7izZ1igd8hPzJxAm7A3YQhKSE47jGwBERKe5jUjzek5DR1CMe4an1R4s954tpKC5b48Zkd6w",
  "key21": "FyeN514inkDaDVvMruXpDUDSETfw34SuRKD4bdtxtNp7GnoNrSKKLxeca9UqR7kg5SRYQtaoiWa3AHnXMst3qVx",
  "key22": "4jYCLbWo8MF4axZPvSJVqSc8epyiBJVB54hXd3u6AQKKMyaKCLHczDpC4mhwKTvD1F6JnZvSvqRE7VTnJ1iSdcfK",
  "key23": "3c5dN6TkWKGtEWJajYgAdbFC5KAEZVS4ZQ52CciMCMAhL13krYWPiT9uXCGdHPkqgpwkv85kqUzwCnHqbhZtuGDP",
  "key24": "2fhJskRKpHgnkniJCcaNdMJ5nysnsQqJFRTSasoYptMVSo8mWx9Qojj8xP8cUu3KWum4WPGTrAkUfU2LDWAQ9ERQ",
  "key25": "5EEqu2JRLjwiUNEP5jAvZPHZNArmDPJhecje2ZdfvGPGYinVwoigD7dSf2CmuwMSPX2A38ecrMKrEzHhW7VgFWJy",
  "key26": "4d8sXgfYSLQkmNFBbFGqNtiPX3CRVESr7xZWHJ2EDBHnDKMTthLv5zUSQZh6VdwDKRv6eCke1wa54ZvqXXk4vk1c",
  "key27": "2CYKQtQfGzeiAFAeoUwzZX9op7Xd3xJtzW7dYrWDZYVMMV1sjFZ5yskSo5nRvHuU3aCeCF1cThvuPM8VtGtcSW5K",
  "key28": "3hiywLZgqfVuXHfVDdZ4z5LTZ7adMkTtv26GWN8nFU9Z2JVoQ1SBvvrv4fvGhEdGZzGJrVdYvg9cTr85hTze98FG"
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
