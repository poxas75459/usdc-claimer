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
    "64EhRdzbYeriMzEdzVuWszPgSabxSnDdn3ZKNNoLtiAp4KeLKG9KJmFZ1ssjnLz8DX6B1BXDSeaJGiQNrm8ULKAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oiWeUUQem5Sv2PCHxGnHRyZ7V4LN8ijM3TQRSvtsf3JC1jCECTokqVKwA2GLB72w3Nutvb6T6dxkGZnjUnxA1pj",
  "key1": "3daB5TUN29oBWvvv5DkNhTTnd5S3aGwuyqepUgUjZtVEqAH6SdKBuWKeBj2H68h624rFwbGonRqQAwMvbgbN8Cp5",
  "key2": "2RqWnBidApZ7vq5hMCSVyx2p5ZqfotdyohVNFCQuGhkz5yhA4R3YjFHhw6mfKbVmhjKksgJpmNoKsUK242uJSBPD",
  "key3": "4MmSzLPkQf7XStViKavgvvLLXeMAmqHYZqW8ydgRoEz5DWYzKpszdH4KK61p2r7HSUJq57xXJbJBSsELba4jcwsd",
  "key4": "4c3Mj8SsZLD1uVQzrkKkdru7L3uR8wzMsAF2qTBFhWU4tCsvajH8hY4pAKoSqkHMbXfazbrNtSP4ckzkM7TxGbfN",
  "key5": "4mF8PLqDrNy3E6G3mwzGQVHediSCmtK9HcHPqLpGc5KWN8vZdLKMGh1wdFFyFm3k3HDQcpVruqvMTRGXF4QEL6iG",
  "key6": "34htJbaFwAjjwbfpHbRFt7MxKXrdKf5sktcpzV6Ui5Zb1LUXgkNjbVynfyPuxTbpjTsnzVKQ52oUPJE41Cf3QtZ9",
  "key7": "5AEPuv6UvjXXXGQx68FeWjMDVjsUhiQXYfUA5AvfMNLBkGu7HHdCCUGak2TTiEiLWV66LNAPGTfBXNfxp8huLTUD",
  "key8": "Esuih51uhqkPEG6y5Nq94FtcUT3zF8HW4TELHauFGsd7jGmnco8Hkf9NLsomQW3R5WaHRT6wuPVkJ1YQ2XoSQq2",
  "key9": "4SM8Hygih7hARZVoEtAqMub7hgw7LrK7gZDoNjywG7JTmrazE3ABfLB9nVQiuLHzZ5gkKkjrawGNuMvoALwVhjfi",
  "key10": "2hKGmFHigM8hmJ35EePsRK65nPGc9xEvchn9RaU7JULhAKhgemcDUEBgMT1tinW5z4DA2YuKW2nvFUscirkZM7t8",
  "key11": "zyBkkyvHkn8258GyxtTCttNkDRrBCe76Mu8e2A14QpDRGMRXcFwcaDk4VGjSvZpqWJM8BzjLbQpiJRiQBqURWb8",
  "key12": "23urxLcWvrWnmfkdXYZvtsfLYVuSmUR1CGuL21UdnXjFKnJe9sXGPSbserdBP6BWrYGJV8CSAysmxF3rvWxR39zW",
  "key13": "2iz9Kk6yEigdGc7bTE5SfEjUeUu6mm4d4UjqCty54yYWwTUBjhu5RomR3JA2ooPtCqZ7oH2nsV1ykrJJS3KDrTd4",
  "key14": "25ka5EyW4Xt4dgRssdrwy6USewc6kfB6w6FsMX2FFHyMGSJ4vaVidx5n3qvvCQih8SG5hZZ1WH45VcSQbqWTyHc8",
  "key15": "3CgyXuwsPu2G7Ev7nUmLsCWSH1FzuNmdytG866C928r34hiMG6Gk6F9YmqfmDAH5AvMbVWkpMXb2TQ7MpoTnBt7b",
  "key16": "3WUwR11BRZsFkWKt63k2tYfe96nXAiquC87QjEcmDizSS7xynGqydGSR6mr39bbgnhhH6yVVYkSdVfSQkEmLw66f",
  "key17": "4Hbs9EG4sChFUnKuKYHni9Xsp1EgSQVEdLYg8AZAZg5hWzRuUyChKFUf2AsoS1rZ6coCcrvrJiHZ9UxWX5VVtUT7",
  "key18": "5Ag3c45grzaMWtqcvQLEfFbpTZqCA6cBZAgnTZ3bBF4QTyuJUdvC4fSGxhtP3awicWRZZyQbxDwfrHY1SfWJXvHn",
  "key19": "2WjP3v4eFd3urHMmjqApJexw486LSinkMe3EcbMTN3aZFSApUGfJ4AQEyNHATbJzVFceHbEcu7jVuZhbzu2zTn9j",
  "key20": "3Sa8v7m61bG5XUgAmLeTvtuTcrkUbyGXChrnbwLF8mPXasKVzZMbTsoWTNjDigfWXFyxtioNtUFN5aFWU389XnBP",
  "key21": "2VfBVXYQ3kKTNdzRpGAgktrhWBTScyViSMVjXVwpyZhZujHsdkLvJvW1ixtmZFqEA9cFrSH6evN3Y7JvrRmEoFP2",
  "key22": "53xcGojw1UyhB13MAhxJ9rHdTK5RRUcWLs4Ak68wPFXqQ6yRpTSugrCFV7KjXDnd2BiywmLtZS5i3TLf5bgeZyRr",
  "key23": "4spXtbMd2SDWAoWP7zgbaztTxYiUWoZHGijq559XQNKTRRmfn5UfiejkPGgS7Lzy6B8PdWefjmMyMeZh21FRqEa1",
  "key24": "5R4nwjFe91nmqUJSxWSYKMWkDJvmAfceojTmdptVd7D6hyjNj9xSucZSsAgXDFUo31DaTwi3R9ETYpBsN6E7Mw3h",
  "key25": "26QF8vY6SzsTb9yCnejQqXhjyoVKkYT5VG1HukXVin8nVuUj18jzgCczt6f1k2E1cdVLjHt3jkFLhbxva2h2xkBf",
  "key26": "3JHNG1J4NFV37gp5qWmYU3Ztmvp12eqaQenNv5rsg1fuvDKY3kfZmiM9fVg5UVAYkBKQK3XHw1huorQVLViCWpFy",
  "key27": "67SnEDm12gHQkM41njjQfxjyv4EttWRSx2VoViWT1eJvTD1v4m2e7w8xv3Y6yFQrb92fBNVybyoGqgoHMESJRDC3",
  "key28": "5SCrB6XBqG6wsJpdweefSnvBnQjRkNCWuSqy2ucehCb2c5F13QJ6BVqVomABM7GBFhBCjtEkeaLxKrpNAvXbtvYd",
  "key29": "wNXC7YTnVaow7AMpfReeN1tUa8ApMFdRuPP2fnGLCj7Y4Z5fTPwqK5zNccyvzA9tYButtn1L8jTH1YN6mUmcEja",
  "key30": "7QqsEtx1STbQ9MmKaK636ngfnqFNqnjJ5G2xuckNTUmmtsT8tVzBHvgjxfziJqtmCHJ29n8Mpam3zEomrkCans6",
  "key31": "4NeWDVBF4rGgSWM7NRG4n2Czz5xuyBD2DWgLRKMFzYK2s9bYfqZ1h2y4CpyDCK5FuonMYvqQrsQynxaTDYHiaanw",
  "key32": "5R2S3GauxtoTLhRT2G8GpxhoXmtEULDntxQUbCDouc3arNGvyasffUvm6uvaBN5AeDkTJRGRQJm16NSFsYsmztbC",
  "key33": "QRb6H6McuXjRDbUvrYAJB1yeziCVRemt1aRDcGudcdfYSewFsuc2T9W8QA3NBhFHRvSEtCqEQHUW84EkBJN5DKu",
  "key34": "2jzStgFgg6XhtRxdg1bypyb9C4GARtn8dyASzUTgC1mCT6vh8Ln1WPA7BEFxXRYWL9gCsMVVdr9sLsYaaLrSMAG2"
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
