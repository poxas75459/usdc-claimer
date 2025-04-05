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
    "3YEqKTaQFyUSU1FMntH4cqXTvD5W5PEHSPtzMrXb4ZH8xtqJ5s18BmSB34FQ7kmLPyVRyXkqAKvXnS2PyLNfjGHd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wGepKAwn25hiDt2b1JE6UpHt7mUpUs9YYtJyVj2mb9eoyxrU9KVdaK8HiNNUhE28QUPjTtxDrJqZewJJdGnd3W7",
  "key1": "2Mqs5TTugBzfvqFLGbWGmRc9wWtzFVJbeVMPHugWuTT9Hv1yKdtycwCaVyB7CkA6pQ4RqgmZpgBD65PJA7T8DK9q",
  "key2": "5xAWXtCJ1wRicgszv8gok3KuMvvTYowzNxxqKAjk7HiPZaVXeuX1X26vFwDnrACLCUZFH8VpZLvVCoSQvGkSXWDd",
  "key3": "2sWV3w3sLodZ9A8bTJPUNPcTwBhCQAFetLthcJZ3B3qZk8gJgNE6oYcJ9tzY6mAbSrmZLXdsybaUnGU8HYzZYrpv",
  "key4": "2SHAr3Rr8ufm8T25nFL95Y2jHQU53A9D2XP2Qxzsh6DJw1PkCTmbCuReQ9X7X3NaU47sbr7mrQ7HV4GbbUwLfPmb",
  "key5": "4wdotqfW63FATkmnEtD4P6TfwrTAEMs3E72ySXRz7gh8QXCDqaAwCQwENZXc6MTue2aPRhyUU9h21XWiB8ke52cw",
  "key6": "2AiwYsNfAa7UtvNyb4SRST7dwHqcPd3MLVGn8nHEXKgwoA5VMCQm1E7vhoa32zSmubYW4cpMob449Hav3ksDtdV6",
  "key7": "2WDxyeKcB4Pi99bMFLmW9eNty4s6uB4D2a1bmv1bcunPYfr4zGdz1Bt1fMhYhrkRXz6vxwkSadvtH5m8GShvyv6a",
  "key8": "4hv55s66sPZiyYWy2VHkTxvFoum6NQbpyx59gdW1DRhnLMHSpVzKJ2mV2a2dGcR3JM7NgKUqZm3iAwxSu6pMuLJS",
  "key9": "5UfYUqxKxz57jES4n6KNVEH4YU4RxAHupvKKTMsBeynZcYfoFMGqj7JMv5vEhdiKdrDPE6ePwbsFazQNgSZVGpJU",
  "key10": "53sYdn5gx2UqMrwcbvzyG6GkLLRt8qAXUs98mFKbVyUTzJAkcVn36Px9Xr6voU6Lu5ijA7hDkorYRnpZPedMBEx",
  "key11": "3G1dHyMtbj2NdqYwCtKUSuFDmsFoju8AfWpWaKVySCmfRUVRbdw7VA9JnL7mxVbtTtCf5RoPyEuubbrmbvWdcrqR",
  "key12": "5tjBP9ecmUiZDZTozY5JiHyiEjumjfxSipBu2Z22P7yeVFWqGJKNF1qPEuT7jzFzGBWHvTG5kxrphnVRzFgUKGN5",
  "key13": "4q2ohUht2ZzwUQz9BCjspsVw6FvpuAwzXrVhrEjySH3AdcgHxBHErGES9iLZw3deNW83pkCcd21CW2oUNTs8K5Bh",
  "key14": "bcyz8S14cvVn3gdEu4A3oXHD4Yqmq33wrkcY4ey9dEFr2i7JE2vdqWeGgQ54crJLAFdLQFAAGbVpCP42oKBLM6V",
  "key15": "5wfaWFUM8ThATTYFhwRrRypKxevAJDuCaZsMZwRDpLXBnBJAVHR9QCrAr8rHTQEBoKtF9WYRTrkPJA33APKTEdXS",
  "key16": "3VkXjxQvPYnY89x9HfWickkLKWFg8sNF8K91v9ra7PjuEop8AnjcXPcsDn4fLnXnvnUjTRdjqC2HceB6X2hEW1pe",
  "key17": "5PMgzfjQuh4LdMyiYfASdpXbXdbBFEnJKgTc7qfawtpMfFkWNouttMhn9LQkBign6KUwjoqE48tcbLX3EWTwJifM",
  "key18": "5Cj2R9FUAAxRToRFx9Sv6TSRFahHrVZyneCGMN3XLmSohETaq4ypxAPwc3mp6N7DHAuqhpZqZfttnSgg4GJc6y69",
  "key19": "4B8YSagVWKLL8A4EzTD3uA6EEuzKvytPUFPbfnmBvcgHghrVTUeXqnXKKeLCWrRqnqr62nrxNQoVk2PLZyDZFzhX",
  "key20": "UBZgnZo5djjzsgLrer2PuqdJibgBieD95jFtiUms1PdZeBhmzRriNB2DJvKGQhvdGGRwaMgmCaXp3Ck3WaYHpYT",
  "key21": "3EbJtFhpoTXknHdVEqv3HK42fsqLoFDJSW8a4Pzr7vnDsf7aW53rbJVQQW2q8uUqPFzEXSgs5xmfSLaJf7f6qXkt",
  "key22": "2589cVucb29oTggS1KBrcML1wsYYzZaDGwyeWwoTupmYLYqmMDjCEwPJKVV36zoBEfn2spf5kAFcGp5xJamFXaAC",
  "key23": "4zoeiAcj6WEn8yVUGZihkhx74bttj7kSwnR4hHUj6dCnocrdXnjG5ESNa8QstCVzhXHBXkChc8hEx4nXsZmjgM9e",
  "key24": "39xgrCdkE8JeqprvLcbHNbkP47J2fBa3YzmEXPY5tJm381X2KgdzDxzK2J8QrQDUgEExQw3wNqTYN24VKQoz9gvQ",
  "key25": "4zbsognv2XZ7XaHZnRRGXot3kDevCqx18691x8W63Gs5265AzPyAgXje7bP2qsCLSwHYAnKwCyRBzc81mNuvH6aP",
  "key26": "2fWaG6kCQXy5uoqEYJoYjz6x9hicVDFVWXGzQBXR1fGrYeZ27azMsdtUdkx2JvTpqXqEXD9dYrWwTFC2XwhHfDH3",
  "key27": "od1B6W6BrZjTWxsZAc81YZ8UkaFVRn65ALKDToQ2C7h76U44g5fg64A2PqimKSRET4mjKAqG1i88z8M7Vyzu8A7",
  "key28": "43NiY5gdeHNisWp3oxJkUzRffu3SBpmFD2qTwUZq7N25DPeVM1iuQSanHBdr4Je2hsUoZtScasqrP18P2chtPsgR",
  "key29": "5sVLpAa76mdsL8c2uwpGtac5HTE7rq6NWC4Y2mFoH5kn7PKNSGHmnxLv3UqMrodYGzcXEHnfiGyBVhqQgY79N2hK"
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
