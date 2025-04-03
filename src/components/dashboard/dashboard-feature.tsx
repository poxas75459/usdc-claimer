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
    "2katV6Bj6wwpQPUk1xXYpwUJuc5pamgw1qY6nerAAzgsnjS6JwfpQCaW9ZvRMGUNWsg27AkerJhE5qw581QsYvVu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cvKa63qbcNzzDap543pRC3Cv4kLvktHM4TTx5YiE2bbTbkaviHGkGv4hHx3sT5qtbSYricrtwwmU1RHKAZB65X6",
  "key1": "59PwyNgpiLs6So4qYi8wY8PEbjQNeTgY7YXyRhBVE33yPBQ9yd91YZuXhCuGhiD8M2hbQo6otqLG81Wfc9SwVkry",
  "key2": "5khhk4RCRkD8HbsPX149Sio6sqeFa9Ueed5tu3sKsf1KhUQqTwL2MWPrGfekt89jgqQ5XB2DFizWycYUM6bQh1mp",
  "key3": "2XwqpiAxJ5j7Az1gs5qU5rxgaWedMcf7BDMTYR86MxxACKKpccpRTFCKDs3U2RX6Z6Q8fGwPj4Yz3H4sNraA6qV",
  "key4": "3L9ngrZ8WWT5bGFGsxDNh3LULFN14L7YdsVKACsjJ1PL5PYP1SpZsXwAE6oNcYyD44aQHEX3QFg7ZJDEQddHEFRt",
  "key5": "2G5PsaovaJdSEHPZE2h9bme8MqBvFSLbHUXdXdpXDMEMAN3E7V7dXHpm17nZ2bRtU4kv913zfinmSVfshw9fWr73",
  "key6": "2nf4CyHK8R7E3Eh6zM9uq9iM8MESJt8cdCGnwY6ZsbaBwVugn3dYBr8UZnZ8i4AcqTL9Tyxkhxv94qjpD61wmnZJ",
  "key7": "3xNdYZTLHYoRkB4eB1Xysv5HQMtsGmoLmHTr97exBDrjbQ3UsUxcFFa8sXa8rDy9gEWYuLonkjhHvqCFZPBqvMZy",
  "key8": "5mQ4aTxPcATYbi87k2zGyDhLvTAywVWmEhD7U9tSS8PSRZCXTRZ4TDNt8NykNuSg7AbKSkqS2HjPGTpENKL8ZndR",
  "key9": "5Lo6x6ysPk7Ks13WkaQfJc43jeUHiemwpMth795H9oTyK1NVxa6teo2SYZjQw1ypoyimbHwS7V19XWzzcft2qZme",
  "key10": "53neKZ2mw2YGnQ3sfisatAcEh3JgX5ynYyxxyjTsKNn6Ad4qUGqvdTc95cgJwdsNE8DLCPwdjfqDrkmz5UHZw4L2",
  "key11": "2nJjuCPf9NbTM2z2MzG98geMuHkyPS8XD9uz16aHD7RwCA5y83zGRg7fnBZKc5deniEcaGRkZ6NyWpxAHt7wJCzn",
  "key12": "512Zi8qoDBfatysf3voVaRdpBy6E2jAdbSP5A9m5pBu2SBLQsKydRS8CQuXscc6kxfyRQ2qY74VXjSPfdGK8v1PE",
  "key13": "5CdomtvxcsmH4C8ZENRhRt3uWpHzG8VS69yGLEKUvtQX8Y7KPdY6k6kZ2SzKSxoxWjdV2Jd5KJasX2bbqCay1kg8",
  "key14": "4NxgxBZPdfApnbBcHs313xv1TyX9Z73TrGVfWHqRpxdFCQr2n7fqYWiADUQ3HPVZwJ1HjK4tPtkmwGwMBdJLwomV",
  "key15": "33cnfs68zLNLiNCqjZMPMC9TPLhWSMLTDxkVEsXgQpM2ahePj84FKPLAVGMskHNbqmHLE6qjqXaNbC4TWMjyh9nY",
  "key16": "4tMYa4X1NFcu9vEwHmWu5pzTwaawTNuSQ4Tmhw7P4PkzrLDGKPC83c5u1g3iLi8oq9aLdwit2CE92C7iAaoXjxwU",
  "key17": "5TGVcrBuVGAKKvCMdZNu8jWpVv2usA2SCJUXr4a2BeUP63kd23MrZGyaWzUp19G5rXEYA6wZWcwgX7kdaimgTHx",
  "key18": "2mpDTdbsjVpVb5qSw8WSzM8cbRtCdpnrvgUiq6zpb9gwvdp7fvNWiUGMay62b87Zn18yMo9cP5K3TcnoBQuqMpns",
  "key19": "5yyZYwiFwUvMXD7xRrZ26ZjVyoci4rKEz1tmgcNdfzwyQtXkqLwsMQSTmnHfijndV41pxmP65GxPU9D9YugSdSey",
  "key20": "2QmLvCn3iNQ5T6H5hGbWkkWuGEJDUTrH8J9kq6HjyvpofeEPqCJrC4QqMpLdiGdiJcy2HgaeD53m9mS5tkb2fQkB",
  "key21": "p6wh7kECzbS6cKUfRkJ9H4RqsvTyAWxQGdVc74qFyU35zRmeHa3jQudS2PMqnsFMeDPLY52PomJw5Uzi54LUS5C",
  "key22": "5H2foBQAptsqgGLNSpxgtDvP61oaPpbR9E9QynbDAdgpuBHa8cK2WPtDbc3wuP1qTQFmuUMHHirjcbYcVJQmh5Ep",
  "key23": "383mm67opNGh9MvGEVSB1uEKvJhWksc78tHfnH6dLWFcpFgSBaUYWfhSfeB7gwVCaTkfpvin7xeeWN9X9zBQV152",
  "key24": "2mJimYLtTrtDehnvvXMpZX2uzLfimvvBZ7a7M58qP41JqkT435NPYPVe1JFcL6y1w3H2AUAqymZ9rYjs9ceADct4",
  "key25": "3SYJij5KMZ3roQQREST4mY9VvYMxLetq9kDYNALhhVEyZKUHKBxMjfQvd5npcB9mSvP8H25vHRCcpiaLC1oNQ5fm",
  "key26": "3hsbsuSCY52jJYsTnLiyAD4nJManS92PVhbTs4fVfAnDGgaM1PADuUJY5e9nPyZGFmpEUXmAUASWNcx9a8QMRapu",
  "key27": "2f8Ud6cEYASVsyvG1CwTDDUVj6Qfcbj4KGPbaTRmTZDYzPeupDXFCheqm1fQPj9xTir8yBuTvM1inQEAaCMDeGmP",
  "key28": "HBMRQmPE1okS92mGKTTUFU88F3cLQ9WrrxKAaW7XtogqhTyzRKxfY6tj5wrq2zNR2B1fkLAGTNGQNRjnYA4Vtfr"
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
