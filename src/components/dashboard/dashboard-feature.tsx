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
    "5rFEoF2bemuSdQwtoCZPTyrSvRUFrEjpRtwtz4bHDZR6x1PJeHRSt5Gaq4cSCkbNeWTyr6PpjnSM1qrjqB1SGLdD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CJYsqv6ziBdDsFSPGmYxmBx8EuKWUfWH3Mh9ri2bnqPdFpFdpXSuqgKXdgpa5xcDhSEcsJd3ZYMuRUg9CQvVVfr",
  "key1": "2PLZAjVNM6y8V5wUCek4cF9cfcrb2E4pmEij5Tpu7EsCAfq68sYZHH1XWxX2f5f4zbkd857FzjcSS4ufA1vP3dDm",
  "key2": "4D6rUzn7zQ2WSYVZawRNjtsaec1hdWJBxzarN1ST1jKAyMBC8bAFvZZMdBEGsoRszm6MShDo9D3VLKspxSHhi8xJ",
  "key3": "2Ya8N2vSjFrb9yPr9ayV3v8Df7kjvbvk2TowVqJSBVSLf3DzUvt8nYr4gm3k5ZNqGF1HUSKZzvqD6boVSug7Yhzg",
  "key4": "3nmDho8Cymf6wKcxMajcoyU4cWkAbJQJrKvxfgjWr9JVyeByahok2K8swUyHQzRki4cXn4gu2LsY33MvgyYQU32T",
  "key5": "2GNhtGBmamRmH4LEyjRLp4ZnXwtL1WaiknUzekwpd4PEjNZ8rooAMKvSoecbQ2gQx81vmxeLVSQLoih58ojFbiHZ",
  "key6": "3VbpiS18CqW6UP1paHNsk53fkLHk3xNDBwiiAmtf9qLtxf5bTCjtvG1xg3d2tgc2CVquULmDQnMVbY9kr69HEm8D",
  "key7": "3sXuaWBLJsDarqHT5hoNoDriLAs7TdMF7i4LmripJ7TkAFWinZR5jweGicQTmQp23RnjZDhHig4QUmD578QwqYR6",
  "key8": "35kSiXt4BmFaVeny1t8bsDzAX5Wk4PLjCLLrJWpyDAHoTX1k85gnsydvBXuDpAaPQ78tx4kAXLud7v5WZkTnE7Le",
  "key9": "63t9yTz8f2NnLsuJLmAPGGHr1FtrZCff5Huzc3842KyE6BxWELUeHdjU3PRYfzAP5XAJNfTrXm1DhFJk5zCqjgFc",
  "key10": "4vjg4Qyay1McUna9x7VQyKALy5sBeihaiT87FBd2iWEBGopyCyXpcXs6BtFNHjagik3nB2ecGSxLHhBJD5PLZhbR",
  "key11": "4H4Z9TaJkHZg1YDXuhVErZvNFS8Bv3jYKqvqUSsFtvGmgcodx94Une8d5xthPmwMe6Ro7rs2qctQKvZ5Frv9C3Sn",
  "key12": "3E1v7TsMJpruVXShDBDXiqHVDh93RPhyLJc1DvtLxwGBxk1B7VyDqqTDLvSPmyhWPvp7tMakfpbzHh5GRzdgbTZP",
  "key13": "3UadpjaeG9UMccMBRaQBVBcpSvBuwpXKqxg6cJH21X327LGhsEHeezkriptBT4DGuySNVdsrt93TCaT8KHnMYPb7",
  "key14": "45SwHtPQEJepirU9PPRYQ1gXjbPcxHHfJmJyW9TcsdAvj2QAw98Jh78wwjvqZ5hSMRbMtimpN3oJWRJV3EqWHH93",
  "key15": "4NsNTCYi8dFroyXozLsL6SGTrxbQxv8YoXAHb5CnKAZHY9aa2eQdFUQ2XKoPXcY2L3CaXBQVikX8bQfUWtwmGaLZ",
  "key16": "4PxgfTpBo3ruEHTZveuDJju7LPS3ib9WoSq63omGVYEUKqBxar5vDn22c8NC2eJAgM3Kb59XkKFoC7HEmYjN2mNW",
  "key17": "2JiYGcmfmZB4pfryCuezPH61nqVdgjQnS4LEUsnuQkDgFAqEhCG3r59WGZeegWDmka1PQLqSVgBsvF1ZKwiayPEw",
  "key18": "2k2WG2cQSafDdW2dBwH3uPKV1x88afd7EPZ62Yb8W8gne99i6uqkr31W9HJaRJ6aHad1d5UGTKjnhTAbMvergVcd",
  "key19": "2WTY6jaBsRoi88N3Cbvd9tnASdQqHZ4bSs9fTBaFmk5LqfYqMGTh3MxwjxDvV5yooEKa1V1eEceFbiB9pFcvCEFJ",
  "key20": "4R7ec9WMR9oJfiPheVsmdnbtSkpHBq6vEuA5f8HbYL6RDgwjSwX6oZAsczog4J1ruN9mrR4L9Sx8kaHSXPT62We7",
  "key21": "34NZz2TM722Bns2LWf97QQ1taDuvL7Te5bvyCaTjgsdZ8MZqkAmF71afCWxqNb25mbaP3VxghYyMmYw5CyJVvE6Y",
  "key22": "3Z7qxq5F3DyugnrdkocU7Diwa61hHjK2ChS5XhHwHjXUenKmTJbTW4VJ1B8vtcrQWvXEEH6ui2878JV3ps3VhGVy",
  "key23": "3LvvxtGhRTvdn19tt6sFJAuLUwrrw2KA7Mtgu2eKpKdCRCjD8fLWv7Sh6PrvzYQQjawchMHisqTk7iJsx8pQoLNp",
  "key24": "61f59p76XpbQGu7KMSM4EJ75aVkvr9M6kNoPmYZYrN7thh9HvUhADEZQteBB9RDFqhBMivinK6RDjtv6LS5EXQjT",
  "key25": "zZSTdQ5pwyZpJ7JjEenydw6cbYF6X8ygX1H3Yx3vJjfecCLE4sf1h2cpfhnTXoqQyUuxmUXpn3AgtPikoyBnCEs",
  "key26": "5RgpjGQbBc91b8RaGVseEG4wkUN962iDbbE42zFcmHCrsPcMveNfWf2PhG2fEv3RXEhHREi5oReTUTy7URUy8ETD",
  "key27": "2RGeNfVnyAaX5VvUmHkn9Z4QA4N7J6Jrpv6PbqYs4tonsBf8dkwzMrHABKMaguEEXicaANVLBvGciLzPabvbTR2y",
  "key28": "643XTeaDRTRgoctSskaBMLhR2bLxahcRXcVLJhGRmH8nnTe7BWysuu4sDzhrSMeJWft32nzgpWeCJ5MwvPZL1Wi4",
  "key29": "3mthGxbYwjaX1gwxj6gezm2iq4sLwEhVTyUhuxXg1cTzwJyAUvR4eFfVHnC8XwKzNeaXJ5rnRTSvVbtjrz9ihmCi",
  "key30": "2twEKV4BrDSHFzAJc2gM2sdtrzPFVGqTE2cJqPVLGBRKUvSuf92N1dARDoSavUgNFo2U5Hv7FmbT5LYNdDtCs3Vg",
  "key31": "5nQf4QWU8nNEHymjbEqd7TQBixSKYwMxK6awxk4DvtwTUCrP3egQMJ3Db68dZcgVTWGH9GVPyG2QQ2E8GF4q6sv5",
  "key32": "4cJnjfPRfYqjaqChjb42HJkKuJ9td7z1esMGJ3zAzPZsM5tVZfnXwmgm3DQGvVUtUMMn41mHayXruAsTBbdgaAt1",
  "key33": "2L2AxmurKAALETkLqLNYgARCh3RYrERTraD6txMcZtsQrb2dTmbMm94noYKNvyhRcaBmSTmeYJTm1a8qsH2995Xz",
  "key34": "bpfYgqanqku52R795PKmJpmUFe2agywWirSATU8HsVTxHLaAuiQYx7VQRv3LB3sR4CnMDDg4goP3dCXrvuFsZt2",
  "key35": "5z4mER2bVAv8hwKGmDcdCLGtsoogvEJCiPRcb1Ni1ANAjxafERQFdD1N6D2PYGyyRBjr3TfjDDeitfe21jNYy3Zo",
  "key36": "3t6C9VX8bV6P4PWE7fuRkSC1VYZTi66irRebmWuXPFbLKvpj1xmXJk8irpWW5VhLD1Po3QBDesXJeNBX4FZ8TvPr"
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
