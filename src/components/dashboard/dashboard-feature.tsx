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
    "4R5aWX5LctSeL5iJxdU6ZTxWPHuXZJoDfhCwKeEmAVMKLbLKXQMZr6pcLcv3Tu79uRi8g9twsRUr4Wxw7tKLPyoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38f2ZDATzHGSSN3cGe1aCfRXi6AKnhYotS5Qp2ujpibGqZ3vbagrKk5YN6qidJUVfAfFC2ARMR91ywRgmAYz5wcJ",
  "key1": "3r5RpmTC3ktzAb5uQjpY6asyyiv9XU61cMHV9t1kcBx2jfjor2x5GZXW71qeUo23zWWTh2q67jYcLLYnD6P83Dsg",
  "key2": "638c4XAVewghx8sTpibDTxoM7gwba4byEekRhUVvdzyZY49HgNeKeESTkye3hVhUp7Lb4iTKLvAY4y14nScwCEsy",
  "key3": "5Av3YqZzQ6u7kUsPnjNroGHvrrvdFzoxLBgZTmB6tcXUxp7uEcvajQzcJwRTgmyiFVmAyC13BdtvoygixqgXdBB4",
  "key4": "22XHkQZsbM6KRa3Wuq3if84KWHQTfUoBGBHS9FNGzme37oXVGcA9QWbAomAnzipDsaSb6YW5r28iFtRnLjYEzkzh",
  "key5": "5C5YwWa7EoCyNtdQsXVUvQKh5aVhv7mzX5CpgMpbvjbipNem8P32foA7ei95E3r7nnsmFYKtFkiqwiCF9Yisvgiy",
  "key6": "2t94A7AW7kFQP6e4V76uqCZZJt2Eo2pFoBEpJRudJTe1S9E5Mi7xZEm5XV8huzfNJLdNDWFZNi5KNGkq63HBNM8G",
  "key7": "31EMsabH19xd9mcS5Bk8MdhwHd7GdYW6f9zcJNMneJJwV2S7fcGPDuEF5vFCWBjtmz1KwNUzzCh5aHPSpHMs4s5G",
  "key8": "3Zhh6Q8pRvCkQC1HEFFLxKApXMFgFcoJ9rGJMCYzAjzpSyepmmKWU4Us2u8ZJp4rpJZ23i4o8faD3TgrtyRR8FXm",
  "key9": "3VHef8e9rYu6nrnbwhAuTww2ABnmwceCMWkYXHc5j3JxgP2xPXsUGwGh48Ny7W6RPJtyqf1KtTwJdtytSjkubWcS",
  "key10": "RJ3Uf7nZgVm6hejyH4NBnQWpYxHmDASvDX43ngy9ktBhEcNHbrLZi2FKQiZJ49q24PCEw2s8acBufm92D3zoq8Z",
  "key11": "4XUjqTrQgW3vrP8h79fMiX2T5EzJMnB7dNEfPVL3GyYVMo9snpHKtH6qDHQc7ubAEXJpXMPbsEABXEcGKh8Gk7K",
  "key12": "5Agh95isNxgYdWvGfTTMghhmMuzJsRoaSq7GyEniJhXFGtPYdTuhi1WwvcrXA651vnYB6AMb5u8SNDUWfpQxfekK",
  "key13": "536PRZYrL7NtG9wr1uGw92qUHBHyneHVwtGeT1sZqLF2mnLxfxhezTn4Fz7GSGRXeXvXAEZyfsQTWGqePkXRcMjA",
  "key14": "3pHuR1MyGqxg1toZjGTphdvAPdYrbtccfShBhXXBiMcaqRg6EHy1iwUDesgAsXW2CJiR4WEePPPJrBiSDx4NwUQF",
  "key15": "5XKohaxkfAeoKu59Pc3jECo7AHSvydkUz6XWFKz1XYc56Cgr8anGVXXM3Bnd682T82hHsmEkm33hhmcfhPFPjmaQ",
  "key16": "3PvzML8UfMmRGKLGRgwAMiaLuUXNZbUd24Yd26fyvrR98HFAb1fUELsNQftTnrEyMhdhZbkTsQwEDhVf73awwQMK",
  "key17": "4LtuR9HVjuMDXYFYKsd2CFyHtDvyxnnThmSSTvq6LsskzJgENHSA29e5xDapNihv3XaFZNYAz3TvtcFmXb7kGqoj",
  "key18": "29FPKb5anjUMT8tZg6U2AFkfPv5hWpSS5gbLXFz95GFiWqbTmZL4ckbQ7VHc1rF33k182DwubTX8txnFdB1ychL8",
  "key19": "jfHTZkw5ma9ne7pkEZBG2TsrWvxcBvYwJE8kuDpLqjr3iqxQvsPmC2RjBMehgq8ruo9ae715TeqJov2TRvmqC7b",
  "key20": "2wviXT9vLnzhL1umdSvPamMEPMNaT4aryHwUcsQGQzL5zaeynXVHP8VbBiy2JA9Ly92yGxas2bjAAaMojdMpi6M7",
  "key21": "5TYR3H3QhE5wxJZtbxh9DZerbxKbtDrgWmXXTuBervGPfNaMAJeHzZfRXfGBYgVwA8UeFbkaShxbNfvFw8zdqAMA",
  "key22": "3krRvQP8LNdMSDsoiBUTqoQMNHj78b5i2DGX2kurTHjF6ANtiyVeZqPUTKcYARWv6GxV6EueCtpENrzVS5KBfAMZ",
  "key23": "2aPs82zVbfa8JBTmPxvk7BWeNzRBkni1MDEmUs7RZjeBnhLGC8AL1AZA9FoPHXdaeuy7xhLbiPuaRq4BBdZwZ2yg",
  "key24": "3wxJaqKSer4fRyCqJ6kq4oPU6Y514QUCvHmZB3Y17kuFduJv7en84WMdThYs9L3v6Vn1AacEMmP7jiJWkNmSc9gF",
  "key25": "2hU4BxmSn9c6sch2qD9mkgmZQP4awPumhxiPsq1ec3caKru719UDM7tRpygdr25XuyKnrYdmtFCLbFmTtM3jxL76",
  "key26": "3HdoWXRBEMyrC9NpDRawsmXQ9NcQ3MNTVYpzcGvREycYg1x17WuoSxNyFD4J2RSZJrZ9DcWP1CyRLetE7ZNLuFdY",
  "key27": "3mnj7zL4s9sXfusEYrFdPFYEVsAGrEbLcfcfSBMoD5G2SJwwYcFdF12cQfRdEiAQGSjAsjtLWH3UeQkcxJhieAMY",
  "key28": "3muv4Pz5GSY5rVkz3SMC3msoWJtogkMgUKCLjeRCHzenAysUqApXdJgG9dac53Cg6oL9CcCcEg8L64wK32XHLbtE",
  "key29": "5ZHTspbfPQJvHXuJ1gCnqp3VdjgohirnMYRxrf7ZeReuyvy9EMv7jZuEUfzGrRKEPb2cgzJ9yVyCz4tEjeRqoCW8",
  "key30": "NdwBa8G9az9SfpozSYYidqDi9dXGeZUynAsV8YH2J8WhQh7M97dJyQfGTRUbsp2Hgycs5WM9AQLNkptVWzUqRYd",
  "key31": "2M2Btt1qzvYw9BAUhq5V7Rskfr185DYVRC4bXW3KgQMiz5hCSbEMhVX37mbAownWhUWRMUKAAn6iG9LvjvJMdj3g",
  "key32": "2gxP9LWJNhCoWYFTuaKGzzT6esHhUwdCRzXuB3aJjViEBnRur7fz2no4YEMqnRmeNCP5wyUBv3ceDgsP8h2HYESm"
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
