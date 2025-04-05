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
    "di4ZhAmifadb72SY7qjJ1i3WxCFH8vKmxNPvR7LREokssqFNmsDMY2URpQmjxRsi8FwnsFDzaCtfEpu89NtdyL5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59boqqERVToF2PGqrrstmeSXRXG78PVfvpMke1zXdT9yy3VCVX6qZYp1PRU5G7TfwBjxefiDxki9mrG7nEXqnc5t",
  "key1": "2yotidoU3QfFDxQf3pHEsHAChzxCJiCK4F21EucqZyrhC2TVzEMCWgUYRSrgxD9owsL5oW6rPHePHmmsc2GiFhMq",
  "key2": "2R3iNk3F3E5W5kh6xc3wCRYuUTchp7cVCJQ6TKmuVaPeBPAZD5V2tBYEevjy2sd8dhbSjVqRSDjgwSoqVpDV35Rd",
  "key3": "2ZeEJQvLa3xNCSzS9MSUMvnyiS55AnLn1ZiqzVkZwo3VGJjZSdC7VbT9WA4HSgoywacStUnqHu8HRx9CvKT5v6V3",
  "key4": "5XNsjHSgHw2U1a6yTczyzyb6p8KcyjtbtTM9SXtfmLHJjXtq4cbAE7FtnXHySuzVv8no2PctDKnUV33c8Yo7Rze5",
  "key5": "3FcvL4beb1EkniA5wKLwq5SFYg9Nz3vgcRy4pbs46ibQJuGq9KWpEtcbxKs5jrrcg7zTMNfniga2BRbWGq58BKps",
  "key6": "5yodPTmeKe8zBwQkMSsbEVxh72fBS89zEYTvN7CG2VDjgo8TQnJm3UZa5xs1C4LAQhB6LnJ6Xt8VSr4vuG6MD4Wi",
  "key7": "3KDgGyMrChV6tmCAJKF8cbgiJsYcsSByKTxs6taLKhpGUy1eLVr2B1tmKeZLQvkHYxS3bjdX3k7Y3K3QxUPH2wvq",
  "key8": "3YiyteZJTaL3JBTzWZaTskP2iuRwvfnbA1w5UquChjsB1i6rsxtVitswXJtBivnHDWvXGZ1E4giqWzgSQPncoZvA",
  "key9": "3cuUm3LCGYJGTqjLCcGEHcPpHZyQvTiFrZsBGyu1HbUXDJpJJepkHiNKbqi1pU5iScBnq4eNdAn7m6NkBrKJQqC6",
  "key10": "2SwvER25oPN2T4bK1HimAVLLjAj936KssUkQcnnC7JoG5am9TQSqZYNvpQw8t8koAb1xXSGhHn9tunoUHwQZx4jJ",
  "key11": "2ePvA3LdRA7ApF5en828VQzoshLrDtjbzhqADGgxT59SKpv2bCD9TPSvAB16S3syjgAzZB9fhGHTXmDGr4krjsUb",
  "key12": "2JiHuay9gsMSoMUvkMoUQ54Abz72qNRrmgyozU7TToKEQC5xcPndqfzSFKYRNS7LZPegwQpX7opd5WfvZe2TPzbA",
  "key13": "5gVXVkUtZNFs5gNKSiMhf2D9QB3oTLm4xHnw96WjdX99uFKK3QcF7GEdSGcYbtmMTPcbM8M3ryHx4g9GS4ZzeSVR",
  "key14": "3pB2PdgoihLjSonetFUEhim5hmkYyH4HDPve3qx4U1BqCG6coezam9MTZcVANmy6JsBfnR2SAV4oUvEUY8C2whvy",
  "key15": "3ik4JbkMhpBeLD9nwWV821uteVj5FcBj8rDfFABAE6LpVyE9qiMnX2SHKVQ5K8ifgUEeEjg8c1nCyUe18me9vfUX",
  "key16": "xqiYxFAp4X1FGbaM2DdcwHbt7bnt8orhuGTDForPsNKMBwrXSruMb6aSDCN5j1z1YFiHTDaM5kzUUR58shccWCs",
  "key17": "3TZEgo8znLLiuQgW8BBHzb4F2d3qF1GBqvDmS8uCTgSsfeujkdBhgcAtHdMR3YiDF1oDcWrjkSP33Xs1D5YhWu6S",
  "key18": "paSUAZUtruKAC6ZSMGbTqnvC34pMwPERGF5ubCYn6Fux9y7CpTE33w3oCkFxZYRFJZy55MrNjTYEWJhYUf92oGf",
  "key19": "33FZoDHTDkd7aynA1bfvrkDXjGxAWgLnKohqrxEeESa1fF79dePxrLjJdvtNpgcPCwAmLy3GA4jg6JvB3UC58Hwe",
  "key20": "2SiMUtMarr1GeoDMQpHfGdXJfBTKNbSeqNRfhYmShtcxXbKy3CUYiiPEYZxVRGDwFofQ85nsWtFrm58hW4Tj7mik",
  "key21": "4rP2rDvRWkiEn3eD6ixSNAaHDWBtf1smipWxbeLyFu95ymFrG3tcxEQPvBzE5rGmDyg4NdohkCHmPdfvK43osc6E",
  "key22": "25mrGbEuefqp1va9r8zToFUirfhLjPV4Svye7DyA4xJhSe8qaVzykPwR4WguUkU8cAeTYuVawM2bxV7brqdDP7LK",
  "key23": "5Csbn8F8B2sxmQnPB1Zw12DXxLRZiBKtrcjEaLwHaw7oM5GQpjyNDqjR4RhQKgezzoumcAErNmTFrHzBRKnSAaQa",
  "key24": "YnTnScMT6xetLuRA2tgrWrr3tejuVYLJd3fKfiiFADok5rmuPoLWSZHjBr5Xo1BxnfvxfZBQ8EL4HDnd7pAuPgz",
  "key25": "4y16DUFsgaSXUjEvMDSBV41pAK3TSPspFCKxgBRKbb45e8ipAJjvBtR6axCXJwSr6ftSp4F7ibEE7wQ9z9ojJory",
  "key26": "3RXVAXXDjim17LJvQ3AFW8mo7Vm5fWFv2EBfiqt4a4Y1tzLsmdjGrn6K5hwXZRe3zMrzBk7ePdEV2riQY1dzv8gk",
  "key27": "5Wfjm8tjSw7UPBGv1vgaTPYvcoyGFqUydTXJiEEsaYmV2X1b4HhBTDNqrPgakXnHzZVjwAhifBCEN8Tuovhofk7j",
  "key28": "3TadBP5i7KTP3HrCaELSNWTF5WoagrknL3P6zUaMbX6vRMcFsrCCgWYvxKFNAh5dG2uZAFqG84ThJXo2UAvSKd25",
  "key29": "3V5XEtmq7GV6TbzK9EnkuhzUKXD48qBtxDgf8Wh9ENptRuVLJMK59khpbLD25oNNzH1rr7QGMzwYJGercQkCCxQG"
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
