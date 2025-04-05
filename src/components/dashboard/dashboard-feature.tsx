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
    "561za3T4wpDAPCMkaBNLT2R253MmMF8hpow2k5V5xTWANr129QwYicagnBZTaxaqzL2LkCirrmJyewns3PYW2rRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HekdxSE6uyfGuA9DpG1yj7RtnHfYMRuSAxEp9uHsznivA87s7YDNaKXikQTn8V2GgVqdkYa8o4M9nfGeMwZNS3f",
  "key1": "ufVTmRUWkAThtkYGDc7G8QfpxZZ5xHoJdR5dECrW86AitARkPo2wSQAtYEMci9kmKA1afoj839kgxJuWjQ6Y1RQ",
  "key2": "4hWu9udHdKwsUQi4P7bBKpufc6abZf5nPwuGQT1hkCTvomt67461X3awbbEnqMfBSPCGmSxBQDQ9Z7xGtYbdLfDG",
  "key3": "2kKk77pdEf9Mv3h3SFUDF8xAXHhDgYMYx6AC2CbC9pPxxusBUrEddRE9JJVhACxqcsNAbEeop8oNHueiEBEGnpmB",
  "key4": "63zvMyWzX3yiZPH1Di2rgdHaYF8fAaKMmiFGFASCkuD4PoH4U4JXzskx8jf2miR81uCkuvei5yJDdfTG9Hzx1nWE",
  "key5": "3Ai7i2Qyw8Bm8RdLoUmTXXN3ZsxtXVSTAiXVyquMcftbemExSKcmFWvVoEAmCW8KXVMGya2hyS7MCeAKaZ71yqkS",
  "key6": "qdvdTzCw9HHmP8nf4Cd36T5eqqoBAZhuCUzVsh56jtecQgoCHfUdvbq9An2yTtK2YrZG45kqME4fNv2xUX3WvSt",
  "key7": "3hzNXQQEwvH8KaeF4ZUuDX9b7mck3BYvg12RSyTE4Q31ecYoCyhuRHNDueqEujfPNaEiKDq9ZYgFRFh7CNy7Lo4S",
  "key8": "4zHRD9wmZokEuQmFpo8Yys7Rv9Q3Wg5o6F8L2n7Q9eS8BLXra9Ezw47NTkwvsLeZzwdET2RtbeeD3hzamRqQ7V1Q",
  "key9": "3ytv3WKdsHCqsufRzVJ37yLDBGwnUvxbzbspkmBBSUCzWYj1aJgN1qwvLujAHVQWEMQyXxyHVsBj7V4tZkhSrptc",
  "key10": "42JbKDVF8S37W82h1g4h99mJhn6es5xD2Hu2w2oRLoipusH4uvKnY5qeL5ysat3xW2EUzpzMPFiF41JrKDWUwpFM",
  "key11": "4P4mFqkreJ8k8m1sgoRhcUJvPUZtFb9P7oP4pZpBNWyH7mvZGTCT2yC5Uz8wryLKoe8snPeT8BkMohfgGioRkvfc",
  "key12": "3SP8W7uTBNxUUpchfjs5NEvdS4XfZ9d33cqrf3m8eDdNWnJJtB3LTf1N69JZboQWnXz2EbtaueJEobocyWjoZ9mN",
  "key13": "1Hrp3fZ8Rx2qCHz31VK7PLaJ9xp7o1yJ68vpRqrrnWewST6VUefW98YME6jSWpqqSE9qn5D8Lp2ZPqAr5NhLz7z",
  "key14": "5fcrFUW918PdX9tXEMRP6pnbCDCn1fWsxaePBgogEtqeoKhouHP5SjApHdBMzAt4hNNwidyjpKYMkN3YxVnsqC4h",
  "key15": "5LVWB1uD6gPwKentexQRjXJ3M49dfsBmZcZyAF56m6pLijyM8R8pnLT3PeGbW46pnPorXq9VWr7QGLsdFbu78EFU",
  "key16": "3yWSCfyVWyjHidWvAnSra89gyFdy4wydf1MyHLxLpv9ZJ2iRPAU9NGVrKHaH5sxRqaqwxYMsjqwH4VuwhHe5RcAg",
  "key17": "2Tj7y96KzKAbWKqgmQrTxc4L2d8Kbk9Qe5jGJW2d56gG1QCcN3yktufByScJve8LH2VG5KzmR2X6YxaNkRnWgCPY",
  "key18": "n8P3PbM6JPecdgvtNGk117JGJGG24xXgeuD3mWcRQq985KdAZosCPB17MSssW84wcotRcmqpkB3e8qy4q7Wg8HF",
  "key19": "5CfoUrRhbnx84TbxvL4csTu4Hf3A87Rn2Gb4kqEcN4pBdWDqXYmE1qJcUKrZ7wkU2ZKm2wESWwr5X3HqNoq4cwfe",
  "key20": "3KM8d3xJ7ZWGSCYyte7swiJSECuuPZ2ZAoZqkUXvpyLMB7jadnr6pPhM2easuW6QZTCF7fSkrFr7Btd3au3BeQPt",
  "key21": "3godsp8vVA18pYEtryaRtVszfNqqZX4sbqAYuJ74mnfB32PnMsGXkzjQ5KAuB8vuNrsarb7Wiw9q7x3bvatZ8JRk",
  "key22": "3wzA1n1cZTe4bfKg1MH3GqCoXUvVaKmgFDHUCVdwnRoNp7pyNukocHHWwgNx4PqrBQs2GnEGyoviAxgAJvVDx7f9",
  "key23": "5un3S5KZGHMYYopvG4ttoDBfes6bRV4AYdSxC4fY6tjRG8pT5fgTj1GAPdaeeNCPcT35whdaitLCwH9H5tLSohGr",
  "key24": "3kZ7CncA6qWDXvWLDW9UvtLms82KpiFj4SJLpmye2bRKdhniAg98bVtVXusFp6YgqurZdUsxPkSvixi5zMmNDeWb",
  "key25": "5AmBXnLdw1WNzCjQCe3AxHszx6eNwNNPefv7YeXXHMYQvMrgjCwmdaDGePnzMEh1cVyrAcdDj62S2Q82eCSaqAEs",
  "key26": "5gkiPgwSMpUMt5GyuNERmbbDdXeJzaVdJFjQUAvx25cnZBqAeJ5DKhg2maQz6MDsj9FWn5iAoytgYvvXfKWD3ChU"
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
