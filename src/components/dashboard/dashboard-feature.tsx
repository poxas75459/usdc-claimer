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
    "5kZWVmem2YfdQs7j2URXKXa5N2EoDMJ2BNTczNBgSU7fRPaKXcn5cTHstu8LtsCQLfuNaCEp6KrezsMBa5jL9v4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VbPAUkmnp9Bfw1XH4wHZrKLSSvXMhgB4an1Z7CXiVAwvGd5GuHj48RG12zi71EUicKopksoA6uQ4Qf4mtpjVmcU",
  "key1": "5hsr8zeMQkaYMXuBmT4ipVJ6kc4kg6LUYptZwwVNuZ5uAwiG5d5DTTs6symtkFU9agUebpMjEtszskznbRJMwFNx",
  "key2": "2M1LmpixRSh1iB31eUJKZ6yuZgZowhthuPBwbQB7vpXnUeerDQNfgjTRq1sxZ5hnKgghgtMbDCsVVamAcbLFocDf",
  "key3": "3TbmSYjnpMPpg7EBmHGkJGPqqneG678oxGJ3ezyEBJpqGwuYFQ4d8uphGs2eCMjPQDtKurFY39W1qrj1rYo3vM2F",
  "key4": "4cjiDnL1JwPLiYGq2wVVuRoKq6qzmqb3SysqV75tU4CBB65zH9NkCydY428ELWpoATDtjAn1rFvK97Vq3ooTGagg",
  "key5": "5tSHW3JJwaC4LwTNYrfeL8D69WZ58zLoutvdWwkSVenp8isL6cP9RkNsgZ8kNc5bKhzwR8kkh47cuYW64sXPfmBk",
  "key6": "2CLpBKzaVBSi9wSQtnsjKpQtVNEg8XkFtzTJs1wdZroatQ5jza2NDR43Q55iJTC7rWKANXHHwLfFKKGQgfwYWNeM",
  "key7": "5WXiDEfacQP9tcNePwFJg3okcfQnk2vQevoEVwXvp9istVrz5NZC5fe9Q34uB3PkkpqLLNEPotwLHT6EG5aBvKZe",
  "key8": "3XJhHuGc9MDdPhaHyhi5KFsqJ4T4dQHV3ymbpk5AzDTUvWM1CRKfLbsQLWWSj3XNGKeCvDxdmZvbC6bB2w1c3N6x",
  "key9": "3gomBNoPG7Cj3MpNnNRR6cYAo1oMWFz6iZg8RnUDCKu1VcRV91twRFFUL2UfPqdJAW38GphuD1bme6ZrS2Yetp6C",
  "key10": "4FLGyKRDJsWyjQcXiqybbQnRs3wKQg3aS2aqhKiaJscDVGEXRX2KALhqs8H8qRQ7kEx5YfbzNwzboMnDuNFWtMUy",
  "key11": "4FjMiKFaa639dNKv7ct1P8DNeRJjG1QUVW19fKXqgNb15p6mrX7Jyy65J28aZ3hVkDFbuMHWAWsEGjbbxVP1xZ1q",
  "key12": "5Ppbfh14G21VdV4k7rrZYoSuXrk3HUJE31msGPmhByC1FQ6rFWdnTaVP49q8n7zT6zwxjQ4Sbsb5zBpgftAiosYj",
  "key13": "2PfdzZ4ThomGEi8kxd2GMpdxyb7EwgywB5cNDyhZFf3e5JxSPjGM1nYZsGB4SEyvXQd9Uh87hZFzCHUCbuUSj7Vk",
  "key14": "m8XQcuaRztCW1f6r1aRFASyt4d9nwcQkGUxE6Yr2EbUPoGKRGEdqvhSxMkDxKQtbiXBbWgwkbptCPfv4rQ89eKG",
  "key15": "ZCzgYhApNKvSssbAWk5TXZNPsWctkd1Hxy7ZoTrLbh2JHP1fX8ByABr7yR9HecP3FhvpoiYENHw1Zn1zW66d38C",
  "key16": "2GPkf3tEs5ZjXeQnh8GzMkwJAqzkLroZoWSQF8sEyEnxE4jZn87VB3rznAoxvdbRKB4SHCdyWW78Kb1e7wb5mYS8",
  "key17": "2d5i5GK6AFFY7YCw9sFsjdt3idjg5JhYXJd5vHXzbXGFbfEaRihD4E8nQV4aFg64yr1zGcK9StX4sh5TEzxoEv7g",
  "key18": "4W1u48XBbFD5a5mgtjtQEqoqao5uuyceJ3Dq3LqxSA2KtDYe1pCxYXdF2AEqvVL8oACcispZBZKHASzpu5ZVnfte",
  "key19": "3QUz4ub7sXzy82jpt5pi1YXFWZk4WpwUEXTQJivsSghjYoWEB2RKEqio27tm2mLr9qPvdfm4dVB6jpSk1K144khz",
  "key20": "2DxEHcXgSBy4FkMNL5JHagPu6dhWtcqenNV7dUU2bwF4SfhUS5qUdjD8HeqGVS3cFXmqjgQBpTaL6spLdMgfHVHe",
  "key21": "2sL4MVuvDYeu6zzUho2Kzyo8G6tBSXxycReu7pjRciZEqZGFeJFFarcCCA5yCF1t6tHMpHficep92weLsCKnd77M",
  "key22": "38Qjm5oVZX15rKKa5aHcD5o7XHaNHunzxHmMc9PrjbqBwQkVstTr5szCQMUMHzXt92Ksc758epGxqr5TA5KRGRqF",
  "key23": "Rt5yX9871xPXLTRmrxi4xUSjYiarefr7J12HDHWrep2eB6tX8wnHCFxxM38HiSGN2n287j2ZuDEesDbEujkeeFq",
  "key24": "4e5zhUXwVsdDTeZkW4hi5eNapYrChcigGUUPjWW8v4WEGNpFWmza8GZdRm4ieHdJHCUKChg3RnmHtzux9Nf7zKv9"
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
