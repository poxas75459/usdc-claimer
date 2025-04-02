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
    "3jrmLqK1FbfrCa7iafiavU6JKb7KMgEzZcm68yEWyPb2NkK4enqvdiz7UjrrQacY2SYW5te2pkWtTzMW2R3GEjJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yp3rV987oY8oz1sQYozVtzWg9928H298ohSiwqE8YWdaj9Ze1CDxwhxfzPmWEmFdDeaj3jL9sNjEvkuHoipo7g4",
  "key1": "5Hht1RqRCG8nj4Ab86YdN33sv5Wh1b88qELoKm4HAxogeg6aSCFs7a1oZp9qkfoPrzMVN3BF3Lco4Z6hZHJ2t4sg",
  "key2": "66c8bfwSnS1szGbTPth3488fQUh7xev1kHYPNWbbU2hnMUZ3ZCS2TFD2jYU52dtCYe4vfJvuK2Kj7M82rNdwjjK2",
  "key3": "513LMt1Niuzbj8wfLXaWjP8K9UorJcuHbQivgYGmFkKpsgyryZaBoNwp1n7R34CV5JL2TKFssgCGrDhDKZ16dBk7",
  "key4": "5Ec9jdwW1szqh5DJJWn1LhKxqd5pb15rC3QrjB1SXNRdTucixEmGH1tdjkkktcCQddqT1Ux1n7nryv66xSBWmXRp",
  "key5": "21zi15DCEZsucHitDUbDBPfwfjUfcMDoRMmzPWZW1gce6FwY9QakPYR9zsNbTXaz8aagDpanHzsCvjj8iF5JYaRS",
  "key6": "3PUd7WWNkHWBA8FhdkdtQxbHMrsBf8rnn5ToXzxioA4T8htaaKMupJZo9B1F2eQGoure9EUSE2SMVVEn4XLHwTgK",
  "key7": "3K3wdJfNp42dS4A8UXtYSHbFFbPqM6LA35SWX6YPT5r1GFdqYSAnTKNMSNHM2zvQwci6m5UWvbqMyuVKdeZN9ZNG",
  "key8": "3BRCYB2UhqBcof4HnDNGExFSoxk4cmEgVAmUnE5tJmXYYcPiYWveW9bc7xQwh7CnDscw1zx8LQ54ZjGDwXyvg19d",
  "key9": "3YUXawEqKV2zkTv3tPmytYVgqizo97afdLsyfDDG9Sjkp3X4RbCB9gkN78maNxpzpVrWZHT886rEbnXCpLWYDdiS",
  "key10": "31GBxrtirRm5U1pkhrekyPpx7SbSWXksfABo3X7gjt6XyZsmrFQ73PZp4XiG8h8zgRc2fYSGCddVxWRWjdSXotSo",
  "key11": "4dT7hFFbwwp32fZFQ6ufN1idLSD95X4ezrvTNs7cthkYePj3jr59xBdzu4bFPS8mNXvX3NaMTjvFAE6cfEdjUt54",
  "key12": "4ezsKjB4fVVG28kynZvHqMKredHWNjHZ2rWo6ZybikT5rwupGKhJNbZoFFta1oVSwvSAfP4GGmCsvaEw6Y2q7bpA",
  "key13": "2B6rt5eQiCbTCGCoquUjzrwUuwPBaHh5H4JKQZNQQKP3xskHmsgG3ws7JViD7TBubN73nE15GCPx5sph9rKkDVN",
  "key14": "3FHEwp5gB5Yx2MCtoRzj3DWpBL1HmYavj81zNWdGZkSdq89PgYG9v9mVJZwQPuHKifVnZNdof1CsodLSpTD2YygD",
  "key15": "2Y6U2qgZmywJXGLanNVQHNQkB5W7QkRiLHiYuTvpx4tRg9qu8criXrXhASk6gnLU5UHH3Z3VPmUkVT27fmDFHqC5",
  "key16": "3t65eqmNDFtFYVMek62fATvk7MbLtDZje3VwgVyqErV4vAxCcFcHHjrUrHA3q7SxEpqHRp4vjjnu4FhCc4W5ejBu",
  "key17": "3iQPwsfj3d4WtgNH3N8m81uSYvqU2XRnz2Fbb8LrbM1aKAY78mT6N1Ssy8pcdSG6GaVPfFafeiDz7nAkzqkfn62g",
  "key18": "5HGxo5dzkTrU7uohFQc118UuxXPRrFHaNGM6oMgFZhWt15Sh7gS5CzXU5Zb7ueFN58rWsDkH21rqDuKucQmmNsR6",
  "key19": "39oL7U2VDLS6rY64hXvkeubMJd9yujgRfbduybU9rGT4XZjJ2YnzLw7idUzqZsiJK3iofQHtJGEpaTTzKayJjqvK",
  "key20": "3yidx9zjvPGqK5oGEj2GJZU9HEPVQ63c4zcVcHk8CyFfyV8DvnbBa9zB2LV9mykUo5BkdWD15pkdcUzAp5RUmtjd",
  "key21": "3WuCex78xAxk8MwNq6PjSHBiSvW5KuLe8P9RzSrcurBAAWfwHMntsnCo4ofpKENYKn42h9zkWeYuZ8aYPS1hSB8y",
  "key22": "2rVfbaGMBzQgNcfPiBEpbCy4qgLWMxStq7q92Wg51gnyMBR2CKrT2ybUMHU57dHJerDDRzhmBWAVVim4PPoLQsVV",
  "key23": "jhGny171XQNAtnmTabgenTo5C2c88F27GALTxS6igxp3C29jm9bb5kEpBbbqNFUuRKV2asUTMtvSHpKWJGyU79r",
  "key24": "5k4mfa296oaVeG2UhGnuzaxnvuCHdmQPbVmT7nsbvCdzoVZQY9Jx6xMY9cMetQ3m5qGE3xEhDsZE9PCt1ZBxoP7K",
  "key25": "31PMRTgKFb8Y6dpeCnmtLdbPW8yZX9wnsSRH8ou9ehoGQALaPR3CvzsRJLkweXX5eyYz9yeo9EWGZWM8DTkvSnUF",
  "key26": "2nZADBoAirM5TT43n4i6R45dxbc8r3y86otQS5JnrYqNNRERVeVRTdqt16VudAorFoPZfMDkMiVgGXdzwNdzuj6r"
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
