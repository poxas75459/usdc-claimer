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
    "PnAoxaXeoXASzidqWH2wecpoyV85sr8vQGhpywVrfTGhaqmGfGmVULgxiDgDBQARAoGGwaYQ3141RNGHuiNiTB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gzTrBDEc5rDqURPaMSyCKogui4uAwWse6GZbSfWu3NPhJK9kAnXPR1giXaEB27vu8DiMTfmotz4ywEYj5EGWcK5",
  "key1": "2vKsrfuUsfujsXgNKLETZZqCSuLTtrAvhzsEgdkmjDKsi5w7xooL9p4jvpbckhX61uDXS3rKaJiLjYtgpKPXFgvd",
  "key2": "27MdfawVYV31aEND9cVjsDctunLs3hgXnLmfeTGN8byEcTaiMPkrPCeVs9V3BPuwyi4Qr8ywLSDGMRqMhkf5GdPp",
  "key3": "4n5eBWwMQM2feauSn6QwvN2by5PN86W8qigQkLQd4QpqUJcNXV8ZHcQtQQr43aiYN9E3hme5bLBtXvDbSwNyx1BV",
  "key4": "3WGPcbTHFW2jXhMNKgdMHK8wKzfnn6QA3tiaXJkRG7ZSbh62ABbyXCupEXNbdwzGV1QXsNfNp3v462mjkzC41ZJ6",
  "key5": "3BY61DHpaxuS3r8tYd7tbeWuEnQxirruuXwneQJVHgpMJdjHtHGHK71ij61UWxR6saaQWHceaPjdZFbY64Porrfg",
  "key6": "52Cv1a5yE2A3Gyvyi1YcA2qi4MXu1KGqhg4cjByG2qkciososezuwKc2ye4pCCzE2CnKapxxwEumfxjKfZQK8axz",
  "key7": "5oTbCtoCtUtycytYbb8oBgTNU3D9THfQChGTfhVGAEQmNu2KgnuNtt85Uwoz1ykoHaaHvbE3aekxeN1rGpNmvCyA",
  "key8": "2EsGTSjiS6mQRqnKFb7igypkLaSJAd1ZLwkz3g9WZmJerc3QNkkYuzV94tcSKLq3cKPZoSxbakiETuxnWPk6xHxN",
  "key9": "43mo7VA9WCSf4tEjjdCtFqW3ciekdpxXDSYqWkkMtdmUyfrQNXXwDLq31D6cJp7Empe7T1UsUr2oLmTs7qgjQPJd",
  "key10": "4RvA5GErTYTiSaLfN1P1RXe1agABZaoR2o9EDsW7q7vYnDByvWVTBLubRg3mBCwsr43EkrcNZun6vSFzCnLi1wh8",
  "key11": "3eiXE2tYqSuSRdAfmFz1b5sMBPvgKECXrTPVp1V6CevB8X6AESGrhR8UhYXfKzyKs1Ny6fEpZXECrxEYL2W65o4s",
  "key12": "frjBZ22qrNmyJsNopGYfPGdQmvqKiobL7YgJvyysTS7gP3Agnmta7eTQtRttEVcKexXTakdgz4jJhYgLJwo11MF",
  "key13": "67Bid27Gj4HgGgoRCBhtv6RhEhh29KvBVksEUBvDGwtfNAfx4ThFjyAENqoJmU7wBim8W1egzReLEeQBHRHMhjvh",
  "key14": "5C8SGF9s82N6roYeqTN9zTTmHg1vNwRyS4eyhu6G74cvovDi2MvMFs4AVBHtVdo9KxYsoegjzbRCyJdZKEjTi4Yd",
  "key15": "4QFHVQXH1Kswi5QuWjLfkuTTUeDX6g91dR2fHgaeSQsCZZ54f8xLS5YAp8yzoYD1T489T6ywbDvnQFaccHNALvHY",
  "key16": "LFgbNJQRhitA6bh1Qt1N9TrULoK4eBSKCXUoM6yHumPK4gAULMFTgZcD89pXC2pWAfKKvQT7bCWzCkwLJ7hEro5",
  "key17": "5WTQ1n5jR7iTSsFM3iqTg3y9WyuMvAMdmJY6GnScE6FCCHQufN5wezrMyGctVLZkWg7UTZTLXqxBwXSnKYRE2B9E",
  "key18": "5LTKz96fYsvgbNmY8XzYeSNEs1nqhn4roxESfgS9ZGXFsqcG1gi9XKv5j5wqoYavRTVe63tz1TShn4fkhPGEdxEt",
  "key19": "4Zu1WBM5bMMGrbEMv25CGNV9hVVw5j9VEHyNVhEhhP2g6qJq5ciT2JBmn9RspbRb5qmbY2vA7DWNjnnS7fub6oZ1",
  "key20": "2a2HsBh15Q6SihE1af53w7XCesr2PDbiuT9GvND64rH72dHSgmJGiHDFXWAznWUtkqNsGdVZPJngtZ2cqZhP2AWk",
  "key21": "4jJA2Svrf6SGEAoUwcMxYWpH8676suoTD2na9qo8zVqMonJAnVqLHGJHxmWWh95MkrzDAiQ2jRgmZbu4sEZU5sdi",
  "key22": "G99tBiCetbpYTVDCthjmNGys96cLtFgoeTvd7uHLuHfSSPyLTVEDrJgPnvdTRCFGFrgbCj3d7qiDwUHYUNQTM9D",
  "key23": "547eXWmRBxRGuFcZekehtcgcdNQKuLHx2XRPrTQrSLH3u25bSxvsK7g1TNaYW79cTHE4y6bUAuFGCwiEq3XdpE3",
  "key24": "AjbKj8xGNvASypAL7dX8R33Yc9HS8JKcNsymLaV85z7mD6pFgmmJcyUQwKHofiBCy67LykowWeYndYMK3LsyqVA",
  "key25": "5X5ncjjtJVBbQ4FKDHnmu5VwVkHE6ovrCAUYTumVLu1Xyhktia8EqTBPETroF5r43kADJaWnvsmXTjNCYGGiVz9r"
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
