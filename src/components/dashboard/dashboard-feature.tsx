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
    "2RgW1fgMJKoVsZ7UQecpanmJt4QBjRnCSRbLBWYqGTVdK2osdjrpT7S5dV4dbiwibhERQStMAaQUDDVAgvaAd2D3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d4buRMGZNCeNLANjtPrhu4H5AasKT1RWDjuwrG66WUUqrtVPAAXC6Evf8WuXAXjgXJ5uHKX4W4GpesrvdRapqbC",
  "key1": "5ETRuvYAbabPaYkcVKZi1pAznwdGAVFskLNYk3aTYMt1AihUXb8aW1aGBUVQasz5eznc7Ar9Cvab6S6BpEcJs1sy",
  "key2": "46emRN1DtyUWN8zzuW2tPQWW9TmiFBnoiKtAB9QywoWninNWMhQuoeL8Z1FSYAHbSmGAjV3hRptbRsRme893BtNq",
  "key3": "ANMSSC24CxDMwqg78kR9fRGb3pRJk3RreESJVQR3iEqg2bEskPGjiwgwcfcbeGwrgayBJ6BdX8519mvGjugKXUX",
  "key4": "52yRhv5Fr3fqtBPy3fD9wKnCUJ1xpggS9RGsLqAc8JWY28pLJEzWL3yTNHs6GFfm1nRR3Ko38LBNLaG3FwnndSex",
  "key5": "62f1gKnaauztcVURqa9Ya8iBhmUaBBzpGuHJe1pAR1fcpQiJ9fd5tdJWkSk8UJ8ZtxQeZWfGtQDaYxqF2Hgu763V",
  "key6": "2NmRyVr72MPzYkn23eUZpTFtGVyW4iet2nNk5aGy5BmWkpdaJu9XNNqXF8k3nkiELPJEvR8Xgig4yCDxpdvxasgt",
  "key7": "4c9cqzRTPEYsb2up5CAsVfU5MnBgnVSuTQ9bTxrfa5yDGSRoNLdgShxvfoJjJyCDLt8Pmep2rNTSFm711SnuSXCn",
  "key8": "4y8Fxkd3xznzHqProF8UaYAoHWTdXWPmJyffD9DN9yeRN41vSLHFZ81ugQ4voTKrPujU62TVU6anFSHmUtmR7RMo",
  "key9": "2RkRcJ7gPs7SNunDSy3RTpaUtzRJjfmv61f4fkeZ8M7nvZaDBBmwH5qdJP2NZPxgabmXffFjjQpS9dhPFLkvA6nw",
  "key10": "3c5y5AAXXqFUUwtA5rm8aGN3EMXLnwVhLFPMi3nPpxE8Vhq8wxTQ1eWLDavFK3gdc1m5QG1HND31yyCgm6NT8Dyf",
  "key11": "2YKwtByVAdYyQ3aRndhEoZJnJrE5VustR2jEUbwBqZrwJyqX18U8ahBn9B7Y9V1FxJRCRpzU2sHDRwqwRLkVQhCF",
  "key12": "31cnKrCNZe9chPUnLF3d4skTcshikTxb68M6YRjZAYgu1zNbCzcg8xKgT6gz3wpXAENvgbFPMtgb3fTj4Ljbt4pf",
  "key13": "4uFcU6ssLEQmiQMGw8YfPn7UvLvNnNJhmnPLAzC5TaUj7HtNWCEixgqYduNbDfXio8EZV7pRsavhiY77uoJBsQ3d",
  "key14": "66sdiTjjpszYbZk1XqnG7pKKUevwoy7j5evQk5NGkAZGWGjUEoACSxzLbEnYrrduuRjis5TxgsjJxjCTx6dKnYjo",
  "key15": "2zg9tFitwVdgdy7N6Ve2N3x1GK58bao2nZZAo5NsEMujjuHtGyGd7a8WjLE5xDmGvCrkPZCvBqvrdfT34iEehEgq",
  "key16": "5hGCwibEJLrkXYyZBmZD4VmpDNKdmWFRpxipJxMYnKMgMe3uojxBhbbXgK4apaehCa14dHH4WAEgPV3MV8qbHW5x",
  "key17": "6w64mfV831UY1zqb13gKzzYb1vVeDrTwrxkfBzyDLQSquwpMhDZsHmTaXAJMnHbCxC29WNwdrRgv88PK4PepBtM",
  "key18": "4k9umn9xrcxDdog99Jh6p56NMEYPPioCCdndrrnPewpaLWNm4WxAkreuJCcaMwHKu5XWnYcPVJ5HoW9rYXi36sSD",
  "key19": "4FzFMQ2gtkb876fcZsAYLoQGE1Wf4xjsaMXndbZdtxwac2ZaK3ia8RDMLKVQjaMCjKE3CXPov1TZWJ2nJ3cV2doT",
  "key20": "E3idNSFyk2fCKyW2RWkyBXQTs953QWQNrwLhyjpzFzv3LwvyX166n7KpKADxVnh4o3VfJewVoc6NYfgYmUUnsSn",
  "key21": "2YkoVYbmU6ank6ptJM4YLeNq29Ux8D795SZoUqnczVV8CzSFfLhDthLaF7JfV8vQFJ5FNMLeqdSw1BMGB4KMuHLr",
  "key22": "9fQ2sk5DQBxRHyaj5jHdsGA3UtV4mKmQ3GC1vv8BBLknmooGTuUQyZhL1P6oQH8VyCid2evThuQphc5TQUMtuVD",
  "key23": "4joKwU5hDSiJyc1yeTEtjoKXbJXnqQgMtpN51oQYo9GuccWPuTRWuq9stxKJAKipouvZngWKTdRniyyDpDS5ZsaQ",
  "key24": "4hCcZWZfkDeGCJjvKjJ6jyFXv8MqcZ1ARSbxNSCsDs6igUe3jgmSesMpmXyWpVz4XaojiLpBX4NgbYfJgmrYELkc",
  "key25": "4HFbZ55U8fJjN78nGE1h2bc42te9L41GdF24frGJZREz6DAjY2eGaUiPKqeykC6yQNttcaCMjWvgdiUZMDTmCcvL",
  "key26": "2WaecBo9gpv2L9Xs1PjcbVkYixY5kBXwsrsE2fZpzoH1X6y7aN42wz6ehp1m3w27NtCQJwPF5CL9CcRQm7Qu3CWk"
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
