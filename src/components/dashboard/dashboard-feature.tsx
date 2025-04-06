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
    "3KLfQTueFEQHunr2S6hp2ZYPMwSQ5aPbtsYSMQkUXQf8Y1PgcK8tFAp9xiXchnMTjF1w7QDyeRvxyQWVkmLhmFKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QXw16KZNUWe3h58367nBmVz52cHfQkB7oxn9Hi8kXRaYjBwnxWv4QGbPc3exAsVct95u4gvmy9MXKmtGiaejyGq",
  "key1": "2LenMPRznFdWxru83e2VxpKw7CL785pbDiLDTPFoZ9FFzHsszcnFqvrNiow6DAbg1G6Zpt7kshiu9Uhkfdg75Jr8",
  "key2": "4v2KsGpzSx6qfs7cnqYzbnouffxBADnHxvAiqWRCaR8xCFptkcm2nbWJ6X8hJzJqEvn3MjcfsRfvXGxrBLdEqYHo",
  "key3": "2j21WQ6kcP5rqJuwzN9ZtsWv3gJtbgCKxXTX1yX6wGC9YncNSydRFyfFhfdHLQiRTqLU9ZzT2w5xfm5vYoDmyEFs",
  "key4": "3kyQsRTyC6VwF2BXiR48phS5cL8SF9TuoM93SmM3WigigU7AH1MRYhzxGrPMsvvsc4cgYDKx7mDVDhx1ugAuKaQR",
  "key5": "3dqYNcVaXWSQuPueXHpHKvJv7rsvnHgRQtXA8Wk2P6sfv9gXcf4vpr1bNLCVtm61rLSPz8ANnX7w6JmDMoTGvNkD",
  "key6": "4iSDGenu2dVy4n7aUhjcoP3Q4mXCETYu4ddAoXL8AnSdN5fmmCbQ1YotBPK7ipuesYLAb2Mb3NnQLL5p2facD4Vo",
  "key7": "2bGwHQP6JHoanuLT33mBxCgFZ52rHh8mP3BtLUn3nZkKscQDyNyCk1VCwiReXgmsZXEbP5hYQ3ZoccpUvpMU2iDS",
  "key8": "3U8pkX8guuY6Aj38F4ejA41aYVVpESRHhFmbghJRoZe16QzEajggWs6asuX7UQfXL6d4qehtKw43CsAcxVPuGzRi",
  "key9": "3oMwdtMwXZ88tuMTMYj5KkSZ4eSQrYaUBY6qvDCodgSYYcingTHuChFQFBtU4XUNM9B1jTncRwqKHWPEqvtQRZBK",
  "key10": "sa4rAUDxMa4btWVopoKijETNSMEcRtbqKdWpK3dZjv7hTUhRct6FWxFTBCXYrvynJG873fuCap2RFfQB625HJGE",
  "key11": "4caM6oNMZz9bR4cE5cJrBeok6kPX3HUVkYvMd3RF3XEsnWYDuVDsyaZpKA1xzBWvgrEPohuEhAFysB13yrfhpBu8",
  "key12": "5UjZqYXETn9hvmybWaVui3f42Er4LBNaXMaRAGaPgYhFH26CF2zAenDRzFBMdZMbudYuvvUN6WKiu3sR5rExA7S6",
  "key13": "3MtpJJ1tH9m3eweW75VVPoyUwYucDzpNhQ9j8nqiDCNFryrdA9hdGwFiFwTAcGb4i7VbiNtqaLaquu65XKaBExEK",
  "key14": "4vDjuMHHnrvR2qji1kFFnReB9MQom2TVsQz8HbXwwPPeuSYHTuM2dFDou4mjDvG7k9kFbCz81QPk3XjadFud32Xs",
  "key15": "2g7jzVDeFw8VxSokx3k8nhjpu56zMitn7BHC8RcuYb3xJF8G145AegJiuZzLvFQdXaHFimwRBdAvJnEFv4ikLKNM",
  "key16": "5wey2JMvFjvZEyLkosCubmNdSPieXekP9DVnTnP7o6H3fwgKBE9FbZ4wVAEXEbaNMCMcPACMK3GJ6kP74QrohHup",
  "key17": "5GyGMG2b7mRJFMmhziojib1bRH4838CQ54DcmTAdRmR3fdiFNnzv6HeuSbuxtFFaPPgMb9Rucxtw6snBxxnedKHH",
  "key18": "38BsekPxm1rJL9ur2NcavhiRNFaL5DGyxrRYWNu972xxx7cceS6xCdgpD63rJUwyfyVKCFYTvjnLieUMRzRbYcPh",
  "key19": "5H2BhRFCzZZ3oeEL2CNHbwN2NBnPWH2gUejAxqfkPEH5hEq3Bxm79e23Q7dbffSUCHjvs6LmhAXYvDX9pwNhXKrE",
  "key20": "3iSgQn4dmMqL6ugM9EWK6b4iBqTqH6FowCRsHKFoNAE8PLu7bYPNcSKSP6jbDRUmipZuUJtzu3ftH1dxkXfG3dd8",
  "key21": "46LXsaGvhw6ZjuYi7HHG8RJ83gbPznrYBnqHvN7RV25dwkGPZky6nmE38Ue9hwXAceDQmpTW7b2vkcxqAisFe8Kf",
  "key22": "54CzfeSL1WKXKJAVkJcu8LDKkoqBwoncJEjE4FZatBbKYmSbKnemfB9QgLCiH3aXrZMJZazLkEoqY4GxYY5qq8nD",
  "key23": "4nw8tiX6yJ6vBraeexfVSuwgBc3NzAZJy5uexL5d2YrCKX4UtkYYbQMcbrwZwNRQStHJ1tQAjNv5e1Nj93b7qfC2",
  "key24": "GpYfgfxoEsw8U5vyC4B2qkhEpYrhtHrhccZyC3GwuuV1f5YcUSRz6117isP3t7Q1qBicEYeSooqw2VcHWJA95nB"
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
