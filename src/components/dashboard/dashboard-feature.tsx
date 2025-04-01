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
    "4kEsamxV5UerFMqAQ1ay73YyKFhPyfVvXkB21GbAipWodQdDYgFUh6SYcwidEebSEdVv6rszbQVAajJmA2z8MiiV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MiVS1yAuQXP5hkWDnd6YKRHF53gteJG4m5QmiyFp9NEHsDodQ7Gy5pfjNFYVXYRYbkvkb7d2mMnpCJC4tePNvvP",
  "key1": "4WiTNBGsyAyWeCwLAnkpPe5wTSjCRnnfZM4WabVMCAAcQcWyoX3uUxmNUWLotBEhynM3ABAbhMWibwXFcCPn4oV",
  "key2": "5Ln26pE5koG2DmFmHuNwonhhm6w4cKFoEEcaiSYZrrSFf9PdYhLb7FrHEDhFDHAs1kT97rwi4T2zV9kekbCeshDd",
  "key3": "3UjGdhVcxKrnPeQVStFJzs1wjtDqQ7mnTgD9Xh1bZ7yseb2Brf9GTtpkauSSsq6ycKK72AwwFvVEmjiPTrMKNM9h",
  "key4": "MjQ8hpW29Cmuvzdf8bdyxNx136P59w7Qq8HAcvZKwmR69W6ZriMjaYFcjv29oU37bFCKavhyQpdCmjkVJCaz99n",
  "key5": "4cbTFAJGHNiuT29K2yUea6dXZMqQzszeCK6QAkTPsJ3oRBmvCDS254ut6VnntHiGScY1zx3muZ8n4adKt9j1cRTS",
  "key6": "2t4PvZHFv4qKoKKki1HFNDDjGXy8Ne9pBuyA8U6PJqeyauwJ4J1P4WecpPkGRYnbhs9SV7VMg4KjEyef4UWoruND",
  "key7": "2JFABGxpWatjrVsXvkKDRHnJ2HNic5fG3ssu6fSwqG96jcT26Mhy6VTAQpr3i6wr39rUfR6edNtDEX8DsDTupfhc",
  "key8": "JpLSV7RwBuft3BLTgbJTCkAJt3o58S2JdHSUaApmDGPCXCRuNow8PhrKqKdBnkxxWqSWeFvnJuQczV1tF8Ww1dY",
  "key9": "2AAdzbkajMZ2xQkdFXBPdxsVibv31PN2RPsUE3pg7eQxtHeD6BPbcrpzceYRyfv6ButYt27RWigVzR2NjAT3xaEb",
  "key10": "3MkWf5Vt3eJxwVSawace6ptHjY2wJbRGrGtoby8EKdkzYWKQhshaffdvmUJfAyV4w4b3DESBeyPqwT3SkzftKQYn",
  "key11": "3LA1ErAMw3iKc53M38JVXyt57Bg9Zrghd5AEL6RqkQTJuiGhGXGCCPaFdGwzRyBHuS7gasejrAaPaaueAoSBzNhi",
  "key12": "5CfcUdBRTPxfNUPRvrvNCvUG5WKCCeLPBY9ph95rqXib8kiSKZgkNaQe5TRdMAae4nKZ9ptMyn8DcZ9eCXRkvUtP",
  "key13": "48NMCrznWAeJnEWNVAuQMjmTgaz9Q6gnDo2Ua2DbEcK7osJYLJZ3mXkS3af6fVhopdZ57f9bbzntGx9JdzPpyRUG",
  "key14": "5x4VPjKrbCqSjosBqXAApsPMjtLgD7DxHvFfg5jiGsdFfCF87w3uiNZfsjq2ky2Nsbes4bRKeFGwbQD6bSXhqrzV",
  "key15": "5AWPhkmbmg6oZ2ZvyD4y3JhH1nq6PtwYnemG3QSi71MsDPyP5sX5RKYBVpCT8yvJ37KNLFegkPpY4Qfjixcr6h3z",
  "key16": "22UUHWj7ksT1fyCfGujDsWn3NGXhMP4nticwBeuyjWDXz4g9mF2R6PuqBWxkP3LMsgGhp5cpHZJ5FCCnM7oNez5v",
  "key17": "cVb8cwgTjqCmVVMVyErCBzr1tPMKZpqCuNcYSkneuDgTvj7wPxVLZ27dfqwPap3cWRfv8grTJfhwCXSxBAuVfYk",
  "key18": "3JT331CoUX1a2wVu2yTEhAuHRBjDHEBeoQz8xkNY8tV3gu4r3HUzhNbqiw1oz2v7XDYEzc6GnyfnJAcp11gsjVor",
  "key19": "4bRuEAMK3tegwRT8G6nMj12HQKGXgg5VaoWN4nucZxTD4RyMZS4MHtLE7joJT2jXn7wkmjwTeVyojshj4Cw6Mjti",
  "key20": "226yM428S5k9A4jMRPojdgJ7WxFVjgieBPUK4KWTBcXiZsVooXWbfqrBep3EH7uz6iEKBguHV93MDZhiB4HRVUME",
  "key21": "4LJdpM9Z1PFJhq7AwqkmzJuvnoEhqg1QLBYeG44NtbtAG41VHYyZzAhoDc81EtwGAwxjAett4C6BBrFJvsM3Tjya",
  "key22": "2Q8zeR5jwcZRhgkSg6JCcNTLkBtYAGeJD2gV1E2U2kTtiVDqhu4u9M9sn1EaCARsAfrAbRd9tRBRPoXrrfm7XHp5",
  "key23": "3hqxg4NYXQpPe1y9ALSRojerYF1Z7SZGiNzfk4SF1xEkTVXpGcmuvvE6jv6des3eofbpi8ee3xzUNGrQZGkXwSmr",
  "key24": "4ndea6GeQQHHR9wF2vvM4MiG1GfJFxgxrMDXFmEK7cRTsFLHHZBuBwxuCbyzEbSNDRVnYxFaP1MnQAWpYVN2ur1j",
  "key25": "4eVDWFqTphtGDoU2Pjp9fPqjiFg5LFJhYSnFYkaRordcePyMCTMWSwTryaPyESibkNC5aSxr8oiWec1Mzd7j4ux8"
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
