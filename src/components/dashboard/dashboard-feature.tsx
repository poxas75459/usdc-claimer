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
    "2A8Rc1nG4NXDn7ppTA2QeGJKU2FHX5EJNS2dWYe8hK5wZLb5LkMF2pDV9gCixQ5vy5CTvcXSduCUxC6nEcnC7wX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "438GTBE8318C9NL9YGACVSzigLBCc9bD2r5uTzNNjJW17zzTex5gvuLQmoStqvtXkGne9mtBtp7WQKRutGfVkvu2",
  "key1": "HpDL7FL6htLfKXSxakWPk3ZPze8Jku3RvD3WY7JgHoVi6Hegg9Lenjg5i5vRnchU39tJmw73TnihQKF7xg89ZEb",
  "key2": "4u4iz2Bu4mrKFELZURPPTUApsQwfNWoc8X5KTLuEBDWKfAVPraWdri55Wehd4a2QWzkb58KaEL3R7McXEyCNR7q6",
  "key3": "5qvivTe5KoD96pAV7eiRJpdpgFSZauV5bUTpM5uffwLNiTEkPhpAaLj391FKBwEfva76TijiLu5cFGnMYaHHQEGQ",
  "key4": "4LmJuHrHm97g2CbZeNXLBkcKVmbsGUWcES5PzbamrA7fPddjYK4REUJBt37oVbLy1YHoYnF4nZHiqoVQm8Uyi5Eh",
  "key5": "wkEbB3yGkr6JCG4ErnDpXty7afNox8qiBrPEjoZ7wNVXx188Er7Vv7TGPvJHV3JymXuXFoUd1iTWaqVvgo4ggDj",
  "key6": "4JzcBUzEMqhMrYCGgg7XkNBoUuBuGCYMZDTtVxTHdKiWhrd2Q9BTDdduoCWXn4AAE3FVjremk7uu8bLdRSa8qqV3",
  "key7": "bG9k8FTgXm8VEcsoz9YWNpnkwX2u6B1zi9KJhF7v8Mwh43Ld6ryxcjPdAKkkDhM76xXFiKKbUsDnVfVoEjFBu8X",
  "key8": "4uCMmWRrcvCyiH7x5bqycZW2wCAX6bsxTPgePHYwSVrWX5Q1Anqji5cHFScSg2RijhrAqJ4tKHa7Dkyfz2UZ9q9w",
  "key9": "JHjVanXnD8718rKT9dEuGtXgoMagGo9pcsmrE5nvDpimmNprjEWRBR6TKXNPfC2jnHL87S8RAvDBFducu8aRyK8",
  "key10": "4jJpeGR2ioLdBRJFm7HZoUBVskNTMKvGzdgUALLJ1DZEJWQKDAbfF6zGPe1ayPGA8AHMuTXJD871kQRjpic6eR9w",
  "key11": "5C3yUehHmcD1CYvQg7aLY4ZouKokjWs8BoBrgqLAW5STZnSrHPZ43PsrN7pjW1giWpiDFidPapJCUfpLbCXDNgJR",
  "key12": "2HU7y1PuJrxYAgJLfJDcWNz2q5MvDbE9o4BocPBm5cVmGf8mqZJ88aAEk3WuMoFepDyd6njxW4qdWZ2GL8qvJPWY",
  "key13": "Doo12vFARDeRDmw3mMjfR18bghnQ5qKUhj2CDzySH7vGM9pE9ZCjuo6pmA1BqCwStM9A2HcuDfdxwUbLzxJ1mno",
  "key14": "2Kh6HxurYyXEeSbGKKLnwavX9uHasoJCcT1w5jbfNUDGiT3GkCz4CEU4pehndMsx8eiydEYae4L9uvZgfLcpCcfv",
  "key15": "uLCZtaFwCa4VpdDAwxCLingCin9TQhvAyg6W3tznYZn4wUoApWwAqsajVSqSDx1oGrCHt7rP3b4yCvfG5iUFCVp",
  "key16": "3ceETfMAmeVtmA6UcTL1kXyAwSmvzcoHCfuxcBM2uY94aaHVWDwN7z7tGSzAjH1CePRc4pQ91AnzPYmSrhqa2ipe",
  "key17": "5N5qFFZAtqKVnQ89gtZWaeY1mfsFN3WfefAy19dE7QBbvrH79udRiWTuvBBGd8Cm5A2ef88Rscc67j26DuwqJ31N",
  "key18": "39pn95U5SJ4GUyADfCVUFEG6Zriym3Dd91PLMFnTcVZvQuMpcr5uE59iPgeZfqLLxhMfE6mozo17f3WGKf68tG6P",
  "key19": "4XoDG8RNf4Ro1Z39JTcGetKLVmBNsdjQFA7owrxVKbTapkJypxmoHRoHNgTw7d8scmybt1KbHybgT9PU2E3SZ1uw",
  "key20": "4dZpaRY8Widf1FY5wFoGFc9qQnBPAAq26hyYX9Ja36PUWeAcgrjs6yK4j1dqS74FhENR2tqnZFiHRDmZM6QwKQzr",
  "key21": "EkW7e66649YXAfHsk4gw41mmzepx5n9hpmpESq5aDPtUCyeLxV5u91t8LLhmLNnhTM4NVuCDqg6U7jibrWGFinn",
  "key22": "2KuSKhDwkor5REbUiwxKD1dsCpqGPssZwhXQTZxA4RhSGLpogfuAL3f83qkL9sUWw67stVjMz2MrkAXGG43AggiT",
  "key23": "3GMM6a1wWXww9GacYAUTWLZGVM7Jgq1zTE86VBEGxvKuQPKn1THZwWZFg5KCh4f3odiPQZHqxXSTPF71kJqzLSBX",
  "key24": "2mn4zdSKJPyLzGJJHiJmv9ZvFkMRCp7q4swb43bHkELtafiNAET6TcBeVwaXFyqHXdAJxY24YkVX3StUyR2UkwXP",
  "key25": "4Co6BET9nAt8BvnmHeqk24YtyKUTRTuwYkxsKgr6dXtmEWjZYXguCjMiPb2FwSSx8taYA8iq18Jy3Gkh3EZw5fWz",
  "key26": "2xhF6ociUMvFBksNS1dies74yT6FET88AJ4kNkpKKtHXjGfvygjGCeWkiDduFGWggsE6SH3axeqnJxw4cmMVgWyk",
  "key27": "5U7WPg5diPAjc7TW69XNpnSMpHwHqhvRzBVPhLYryDZsAxw2WwM7vrcYwRGhWfBkGJ8Bb45BHMxDpgow1i91c72Z",
  "key28": "3U6XXFSUYFnP6Qqfs7ShCE4Fo1nvstAKWEt22hoo3c9GP94kmLsMyhLcCAtKvd9GzFYnEsx5sm7GjzyXDabPUFnu",
  "key29": "5KwX1J9DHVTKXwaaLRX5UhajoUNgMhPn1u6sq6KhVTKH8tkNGCdVuMBMpQXs93NrCyiHSBNuKueuLFo3BDdf4ZK6",
  "key30": "2YbdJMk3AxMRriiBZLW7WQM1dEtNzX1ZvVcithqLUTyPJV9hmJZe3KwrHs1XVDFHr9RPKvmJUVVYPPrVS5qTVpCT",
  "key31": "27UxWiq9B1aTRfTti4xkzz7bWnqUfbAzMJ3rwY93yA89dH2dqx2aWdZbHRSjd7ReQuroaiD42E7npXXdVirMeV6c",
  "key32": "5FXkobYGkUmNaTPeEYuXCS7KpCNfo6E2bFr7o3ARPoLwpsX4ku4hvC984pjJ2Z1jYKktgD7JEivbREDN9scsKAG",
  "key33": "3zFMqGfMvsU6FgwEECXezG1jAJ5HQWwr2qwubY9oyGkW6Ku3YAYgXqoPhF9epG7C8qUKdcL9u8J2U2gAPcj5LoVo",
  "key34": "5nWo1W9FmqVKJNHbJAjxQga2VUMKu622oSHamdxcyWHcWP4SVxank7nRKXXr9mvp1fNtGVWumFLWWL1QFBFpsjXN",
  "key35": "537QqiAKG5LVVpAb1f27hdavn7v92h1ZNedBjRQikc3cwqjsX3nEMgnP7frQY3XKNMSoWbNv8EkQxdzfy5ku6vEx",
  "key36": "3qy7oRsFfz84AEvLQCc5SiTjLVzUyDy5R11jx6kdTovsKKKQENTfW1G7K7VzCeZGFETgvDYp5GXvGN6cB55XdhSG",
  "key37": "4zu21qBDPSFHuKpa3k8C9XiF19Pepvy2bTtgcsFtJsG9626WQrRmUZuhX9GuVLRBx7hiTspj5qnqm3jRXHpfrmRT",
  "key38": "zSEs3E9pWuqdJxxZyXajdxj1de1xUXMNp7rqc7dU2dUhE4cbZkyDKMaMyFBR3W1jFmuPBDiqjERHdCgGkDc9JV5",
  "key39": "2fsJofd3R3TciBLcXsWrNW8t3eAvwdZacKbqhK8kx2cpNeCVKbUpk3QTndAfXBYoHmyWXxy5LJv9hhw3hC8pKpZS",
  "key40": "46o6AJ9v9JGgJEmj2sgo6XrcL1PqKfyD6DxwbJRw4B7xs7GhvaXBfo6YLHkLhALnXbsvVkewyVZEccRrn4S8136Z",
  "key41": "5cbifYw85iiYDxu8Mo1xp9c4XCyYHBZnxVYTob84LqGudHY44jQ6pmUciSar2QQj5WTt2aLEqZBSvvrekn3m361b",
  "key42": "3jCzaENPyCbDVi8zHtLjMK3TT2Hocq9szwV74bPNGUUZ6eHR4cSowYbE7TJPfCEM5ofrbWnHsP52q2KkCaa7eyrZ",
  "key43": "3AdfZ5AdBWx9uDcVduBQrkTk8icTf4816bxjyF511vV29RR1AbcaBFXCA45G8zXQtb8nQGzEa4XU7wLntdRwkHEL",
  "key44": "5ZCoWhmHWE8Vk4dCeGpCRga1GUt86HRuyFF8RYyFPNiirX9JPVtYW1XSpRt1oFZRyd34CqhAyDVr6ESttwCUP1Rf"
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
