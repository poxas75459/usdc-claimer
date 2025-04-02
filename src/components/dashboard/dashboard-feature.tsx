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
    "3aVC6NCa22HH9G4vWugEoYcHpN2DBJUEqK6EvhSirosj7w11LUPfw9VCAnkTat3ikt36VRkacYJzJNwjSNpnH11M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MhMTw5LRZ7dGTXdyjmLy5t43wGNK8Gurf8CtLn41ihzDWkYNuWhFb7526eLp8Cju718feHo5uwUGKwPGVRuLukL",
  "key1": "3HhRrqhvQX1n7DExJ3PhNEdDYQsqEiTPXUB2MhNo9NeuShbGn66X1Gqbd1KhrXTsLZQc8nUSs67oyiWPKHGEUBFv",
  "key2": "2yNUXgr9psBx5p1zwPymgY65orCkpqdZ4iPdBRYNVfkKw4DWesyrf66ZMPbHP2Ao2k1mAnozv1vvzyGuSUsR7kbk",
  "key3": "5AHCCZbuhWML5Mxteiy2iP5wHpQPEbHNKP9hmwzt7SjC4mnsgiYj7xdJEjYFBTwcepCi1dUSnKjSeadhYCvu1Kir",
  "key4": "2CdghKJSiw4WRZPvAq9RRMpEVJ5pYv564LcdFwWBt1Ndt3tj2DNnMYktLjUk77MC8GCxQNjfa8vtaf4VpegTHCUP",
  "key5": "2seX63xwHTPqwDt8rR5NS6dABB6Zv7ThvYHE4MFBcrKX7wVH4ugTZkJoGnKCiCmFrtAY5GJqGVfQkt266NDj3YMV",
  "key6": "3if3h8xGLxAY23tQb2pbFACXKJu2kPcpRBRwg5u8FdvPsbxJhcXcj9gDXbdc3qNoLLJ7eUfgq4fmERQSe6nH5ycM",
  "key7": "5zRqmhgbotRtHPPRbLQ2yWLh1meMbcykjV2NSkVtQBPqr3trteXVpgHbTcjSjnphH2NRah7o3eYYWwPKeVn4Mkq4",
  "key8": "5YwSyX11mZJVMBPHbYnMT3KDyJLcAoioj3hGufytGcTvhQjWw3B7dNpviA4AqQKtH5Q1KLyxjdwFihzBAuhZ2jqh",
  "key9": "46ppQNZ93QJNHr8nfqBFnFwM2FAeMwUBGxgmE2D83Tbws2aB4aGZNdkqAfRB4T9jkCpX2SxgZUV1A3jLvSHyPHo4",
  "key10": "BKqRqxBg9TwejiaA7FbKRas3oG9kP7gPKuMsNQQsvfAnNXm1mL2pKAfEQgw4xrbxcF9yK6jzVeKzRAsnqTFzgxU",
  "key11": "5j9RusWtf66TaE9hSPo1iMYFdAPtSujAjRbnk7GYvqBwQwYMqztthtqQTRCYjq7Uvso3TpZZ2oaH8MHCFqaG2xje",
  "key12": "2DC76Krs2LNbXfz2ywjp8GBTbdqpVvRVtnpn1Rgvb6vAs87szommq5fMuhinLg5314QDWArg4cScbD6UhqHadDVn",
  "key13": "4mkdUBmsa1XiojbR53iZ8EnANXcyUcJM5EqgmCQGPJW3QwrPJ5S6Rv8vqZRdaYipQNedftFrDqauDXDxa8muLpJd",
  "key14": "4gaLM83c2YNo8hUX8UcuvKtsudNgAzsNyFA9kfUahDaP4Tn9a8v84vnKwZQ7QeLvWrJox8e4AGkUZMwCMnSFjXCe",
  "key15": "3qjojJpAnrKx5oAaPeXahyMUj52kbChY6g4ebG2BBj8T32nneWg9nxuH4QmnhSPs69xVe7r3EMBSv4taDA7812Av",
  "key16": "4NNDDar1gYAWh2nYAPST1omsbUNN7GuYJcK9HiKqoU7ZzwwUq7angAD7SSazbDcUK347fBbWZvFCeyK3Jro3DP7K",
  "key17": "3DBRgT7LbVchikvTT2YJCX7x5PY6gA5SjoviqcriLCf2esJEH7WjvHBZHbw2C7nCjamKqiVUf2WVw4zeSeK6PG7u",
  "key18": "4fy59PkiXc6eGGVnmqC8kKDcNRQ2cNudahYBF8mLv9UxJpVSXpcCnXerDVK5w5UDUWEMUQPJEvLwLJ3WY3RbYwPJ",
  "key19": "5X6GCtBEACf1mLhhUrsnxHkCAQAES4CsdkgVQRRV42xnXHY6bB635j9VSoRiRXttx58xfbiUcAAFRth35u85Jnq1",
  "key20": "2s4Mh4LUL47ogeC2C8wqie3TUZA3jPsoMeKeerSUkvN5APCcSHsy4b93ytZoNCDBa2oc3CxiV76wTkwi83m2G1Fg",
  "key21": "2najbwp5b39CYxkkHpQsmSET64KS9obW6JuFaeSR51muFUtJdpn8yx1qUTRa6rXTu4V2XWreqpwBY5oAFKdavokq",
  "key22": "5FtnYTiGA4iaRBRVFSky9GPUYPX7SU4Ljo22SccBWzawsi1xr7Mgs8Kbgh9Q3jQWjFK7fAxRUEiBKrDYJXdxbG5y",
  "key23": "4WBSfeLa6NpiMdDh3PJsrx5nH8Q7jskouZZ26ADgcaxCRCsmizUHEi26Aq5ZPsFVU5tAXDF4DZvFDxrXcWBjWNY8",
  "key24": "4h4kkSBKR9wACVQ4VwnJUs8734HCeCxBDmUibhyonG6mFykET4DuBaWkv6NAM1doQrkbvYYxRQJ1U9ZLZd9iPq96"
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
