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
    "Z2mCYAhVqXJuppXBNokEEKMqb4TLzMb5J2UQ2cxWhQRA8sQkhcNMdrmZMThp7G8AtfJWrhpj964UTzXKpWYETuZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i6FNjanNri58JLDSTxsFngorPa9SCjwW1RMKYYRqZLmCKmMAu181doV7VTSFBUNTW71k69FHAdFJ6EAhjsxqiaV",
  "key1": "dc9TVB9y3ZBVoE7SC9HzqB23npQuKaKRY9iaWXsu7WkWZK75bnP4wRNPKtWzHbyr5n4dDU7DD3UY1xDCWA55N8s",
  "key2": "51fFRB2fTffLrFKRosRgoyf8mzgUqF4BZgyjWP7A8zAPH6xw5uskukKiNEjbrbA6EEUhjfwN5Bae2ucFcRPfEV8E",
  "key3": "39z4P9axRSHYaPono3FArqD3f1y9tAUvFy7xzrtGguCJfovjY8ExeWSEruJK7QWAo8rQzTZcJukfqMA2j78V92pf",
  "key4": "4ckSYQd99Xmrz7agzMpHKxqutqRCZXMdKkRaUBikF3dp41eKqJwPf7mK68LiNZ26Z878KkmK8rjMhcrv7VcKtx1C",
  "key5": "63WzSJknDn6Mag2udnY2Xtxrds3sZJBfHdvgUo661j8UyCBoFtNu76MiK8uq8YwL76jcqDfhmuVEPjNMwHy1kTvP",
  "key6": "3KR9aV2A5BKuQkRC7CtHu5eUP2EkSzfRF8jGebhKixVPTUhj3Uai5z2SrEDeYUgKSEMZNi23DNfbgPXKZPqtNRqT",
  "key7": "5iVVr5kT1ePB79G9MbDUgYpoKKbHpBx4xcRV1F5rBKVBe5cFicQyqUQ8iyxjUerosK2Q1EvraVZ4Ztxr6ZVYnsw",
  "key8": "3LzT3igvkvay8qcmf2Re5xiqRtMERnS8tqR9XAsRUUQatZYWDXXvM2KN9vwFKdas6XTk7EszWnRNKdGKc8s9GkTt",
  "key9": "5TZQCfN4ey7TxCd3HPZDq7AkqJ8o6CY38GSbb3zNNG8ZGPahXcPvNyqTyvE3rxYJumvpaewdjxaAHYiqMcNWWWim",
  "key10": "3ZNTsb7c2QVuhQFXZDhTsR6kogQ1hPTLTkvMZvLPQaaZyb8TBA663trXGUTSDm4egrKVSVZot7mxVGph34LAK18p",
  "key11": "3KNrrnSqYSz8WYMiDBd1vUGFX13Pm7VmtoUeijqUbEQntHZYB6wAhrza27gypL38SCCuzYwFxaSEkZSLAhPu7xG9",
  "key12": "p1oPAEviZBpG1Bhh5V244ihvUmq7SyG5mCMeJpSPEAwwFVgTPDAQ7xzGXPL8GXRapytiSUzdSoYTpfpXBWod6cv",
  "key13": "3ze1dFWeia92a6ZSexDjTMRA4isXS5xi5fHra4sTvUkjSjHjFuF7VFRMcUu3xZshPQCs2VwrLXVpKx56VR9w9JN9",
  "key14": "2i4DF6gG2msM1dbMF1cqE6kAVr6rzeq8jL4G3dpvu4odNvyBHcskUdXHs3iuukFkyvxwDgrtoJHM8NTAfujzbYoz",
  "key15": "4vvmv8ivkDjGXdmA5iGhY3X8bLNvauXW7ebDsNNLNnYu4q51tC15QjccMeC1W6StMgV1JgcTny6mvWfwwPqF2mGN",
  "key16": "222xoxawnSJtaSCWMUETQtVbnuzgZq9xCGZo9a9KSHTtBQhscpsaQ2f6W3cx9kRtGVq9XD9pWVyZXvg355DGWWH6",
  "key17": "5p1Zz3DEtdM9sPTvmVAoJ5rLS9SpDC69L57Ay4gXqUjgU2PiBecT9B8CJFarQVL5jEXukjDN2qbpuG2reVogEqca",
  "key18": "2GtXFoTb4QxnR3c71NWU16XcsRapxND7uBKhweQChsv2M2fTAy5GZfBwS9MbANZVMqjVRr19d5XVxUHx28vTzc8Z",
  "key19": "RwG4T6Mr8Uv3jWiELyWWZArEwQwXdvXtK2Kuv3d2JjbQkeYZ4uqB3icfHkBpHJ2Pa7KrAEQv1tYXp6jSNuGcUCh",
  "key20": "3V2Ke94cerPjnMhPxNKaBoe9LHxN885hu5JE5ym9qPVNx5PM6Z2iWodJeimvFdHKWt8Z63DMW3ASE1kYXQhQWLA7",
  "key21": "3qjpiHjvcooYs8p5bMKGHEAH1Y8p8JVag9jBpeTqdjZv3MjgD9mGGGmP3Ew9HoiPT7xAW8rPEb7TRSCcaBUfMauj",
  "key22": "2rvttmzcMqhQ5d1uCwBu21tWkKjimpb3nhfg3Qcezg9d6JucLS2xZT7CoCu4BixFXUcwMkRkL5nACnu1veknxYD7",
  "key23": "1LpN9MRMu7QKsZSLGMuCwwvoeUWUtGBLTzbUj54F9um2EpWz8voLnysgWPamfmeGKLEwsYwJdoZr91x1F8R35t4",
  "key24": "3RLuWX2hbHBSaRWnptJ848jNrtmHGftdSBhY816n349U4rr2gf9tttRnz7ADDsS9X7Cr4d3nezR57kTNfe7oemi9",
  "key25": "4TU5mM4HWmDTqb7QK6SrRStS21ZRD93wsPLtjyKCUXunjz159LD51gw4cbktipMfigZVCALETdSFjrQCubruQ6zf",
  "key26": "4y7Qjn11ncGGnesYu5LQYJTXeZMaoJeaHeDdxNzt4DEqkmSqauz8PeJxAi6vYzabc6fYix1UioJYH3Zw3ptQ7PK3",
  "key27": "3VEVWNznDiZ6ss12iBiiE2epoBZwSxAZHRhX7WGL9BbbW6vWs9ubVmxshJYCDgVNSF2B1JfEXsq6iesCS6PbiJPo",
  "key28": "5uGxbotacRKcHkETLcvdSXSGXpcoZSRujf73SKdes3CKckyzboCAkjpdn7qjt7fTL7q8MuNUzF1crC8M7ApYKcWe",
  "key29": "3KZ9zofLRAjztGDRexk63mpuh87HYZgVBwPe8oZqqVR9yKY1nfRj6eV389J9EQnuQwkZRkp241Kxr86KJ8SsBQqw",
  "key30": "vVo3WVcKr96eqYbwMdSVE1bZUXDAJyse4yGZzKocTMbMGXftUW4txeCSutXca26vzcn7VdLgngH4K9W5WQc5mom",
  "key31": "2eCrWKHsC8cYGPkkizdFQSaDG9Ag9JTLiuCLfLJXz6UXJV24qJ8fGLgSLLJaWACjzgS1jUF6KCahikBwfSjp1qV1"
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
