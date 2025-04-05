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
    "4HdJoZjxFus3w3eggThrMEsEVX12Ghqh7GHCbk2njpLHaB6WgzYrWr1AdwxrQEagXf26dETkVrHkWdjHAVPiF2L5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hti2iADaqUVoKe4DWGK13Tv8ZHZZJuUdjYJoNAHkNMntRszMFeNWoLw7f7jdeGdwWAgQaTkiYbU2ro74kKSMr7a",
  "key1": "FPfVSKYgdxfyEFB3gcEYkSGY1UhRUZoFA9wu55LvUh9CixDnHr5AFaxZMGiGxnTviBVdbtgRP4N9nu54y8i3e9n",
  "key2": "5i3XayCs5DwoLrPe1dBy94pGeDJ1zrPN7kcf1MyRd7kE9H1bgkagAKRoAyT5yZG1g1feq26Hf5cBzvADhRN9oxeh",
  "key3": "5XNTYQf2axZhRFyp77wSoy3hp1AnFHzQQ8vnuVWWJ3jg4EmHy7CDtmQjniimbtCYYwyWtiKyKQxVb9LvVH12DjFD",
  "key4": "5q54NNLTS4qB8izAbzPiSew6khY3pcxjMdAcEoQRq1HD4r68diGTMcAVZh8KXr5hVcEBiHZdRh3wcrpYNNqpcuBX",
  "key5": "F1h39xSNjBQwCxp7x65GdSPLCRVtZq4DTjWioxRC5FB2VSjhtTg56zJravKDVcWBEBkkF8CcTAvradta9iq9aDR",
  "key6": "4BpRWWqKMr6g4JCwdob4LZg1VkCJqM92TSP87pLmmxsX86EMprDynoqGm1TZkbYnwZvJJ2o63uxuNrBd2WguDxUG",
  "key7": "39Jq4UvctPF6fZ5DKqmmyK5VxAr5MGV5sDtT48i37mcci21EpPGwKURgpZA1QqKN3VFvcW2JdM5MSXXkrY7fn51f",
  "key8": "31JUnj9FrwLTN5PHdSsHoDcaVM6K2ASgHt6Q8bbGa57mgpKmVXpCN7nEy1CMTWFMV6YgVJwBdL71235GwKvaMoSK",
  "key9": "ZFbk5vnQFtMrVbc2uK4KYvgaCz9zmVrqn71vfQKj9VK9cGvsjfpWmA3vxPKF8WXVHYPKWfAwchrfVU98gFm36x3",
  "key10": "32BfhYWKd1S3fZ2X4nCnBr6kKTLN46dDxomQFD5BMqg5wow68wfhXAkrWF2XRvne8oXHQNY6RXipk861Ndz6WHLy",
  "key11": "bN84auF2g9HVkkzk1NzusrKE1Rb8vZaAcMX8etp5aarpoKvX6ojWW8aM7JzBtpiA8LDCc76YNd4TPotGoXRJEwN",
  "key12": "2cKPP81mNyREPmHwtkjh8w8ps8CYPLE6KoSeSmWpEHPrmySnRSVBuYzQ1N8PZhmqT4afCmCm2UBM6HL6PWAbgK8e",
  "key13": "62VNCN9CNyhFKKegaKyqufwCp8TgaCrmmMNjVpn6aLW3tAALdAJ7DXdDCfYrPPsL8KAMEGryevShLfq2kHjtFi9R",
  "key14": "3r4q5QiPAgdsg6Yh1RbbsjLhW3Mu5rWfKzts7oRRHgd3qqaWdCAjGztv2gaMpDS5qtB7AFP8Me9GDV4tBzNZ1jcj",
  "key15": "p99h6arMK8qGBpqJmgSVimAxPMGaLBC3idsbSRJuygKFPzZNViQaPbkiCVR416oSaYXwLb9dW2Y4AoSeDUV6yJy",
  "key16": "5Xn3P9Jbyqk7Hs5xPEc8SNGNEGWPVYpMSSHZfyKA4qc1CN8k3zryyd8if33zWNhPrhjVWeWzXegKhwSC4CrRFTey",
  "key17": "5ZJxf4i4SZLo8NzkUGZ97QfccwRTb7iS6REyqyW8bFdJVEf5jEUNbc7Vz62eiekQjyQf8XRnqTHHnx2z97BkgXsS",
  "key18": "4eUCzUpZDae1xr9LY8sRuke6qjK8WFg9djEx5MyERrzoJnne33f4gM4R2XJmuYnTvEz7sg7BSowitjuFzJQQtvxr",
  "key19": "5fFTEY2dRRGp4edtqnzoGa9BooACbRUf7posFFffgSPfDW5Br9zVnY1kRnMWTxNZjfDH9ReeyaBc3FV7Fm23ucX6",
  "key20": "4EyzT3oSwyoVHp6abQVmUNp7Y17to9sJNzuH26bMG76cd3mpLCi7nNoC4cnYH14niTA1T8TobbQo2Q6NC3dDhrYf",
  "key21": "2LjGXeLHsj59LK9S3NByVLV3izdwDQEGQ9GB71V6BYSJo5ZHkWEgFvjSvkYLYsMPmWWfdTV3LCjSAHcimtDGXYdc",
  "key22": "2hM82QMXAEJVmovFM4hPJLp6cucGvQ7h8ZKXmUZuuUuPMi5LPed6vRo99HMVyhq3ipYCbMgtozdrWWbWhabXkft3",
  "key23": "4PPm3qmL84jyjXFiXaK4AkEMvcvti8yaJbdxrLwc9DgfTYpdyfYgFfVuMH8UfDDHCwK24677udsH5xsWGsxHZqFE",
  "key24": "EMgLGi6GYA98sKuts1HPZWgsLCa6ARrLpUsbUrc1M4GwWkLnLpN8HuA9m4VGH3m31Dme2ysEgQmsRasL7aDL6Yv",
  "key25": "4W1oh1YVprqKHxzh9Qp5DfjSuHSAjq9b9dGEg4Ao6FwBAgUdryCe5SsMdacLgYUSZEz1XiEKzaTn2my7EtcRkFjy",
  "key26": "5tT7mkDwYvD1G3xdhACvv7xBzMXxfCiknb9o23ByyTzKuYapT5R4Fc7PK4Kd7WNwewqChvigr9QMdyaj7nxrwp1f",
  "key27": "5ejYsWPPr6g9hggbSYsr98FW5PXnPnZcjqFf2Kzk6nhrhLtQLKXrECDH74MMyF3yQKZkrzyNYUBeRZXxTHrYEUZP",
  "key28": "UXhqXKzZ51uMJkjmuDSCnhc3cnYcv89Hs85KXGwYT8Y7Ggy1hSX5kAyxYsYoFSQ2iBBeFJ3r2FX66B4H3ooi99s",
  "key29": "5ZrGDPfCrY13NVZRY1x1js628f9o856Y9xwrhVw9YTLrTp9tx4m59z8PLF6pEoFQx9GFyrnFHCqENp2B7ueZzFB3",
  "key30": "4UyTZYCDS3aBAQLzeUQ7w7sGbDZromj8kTcAhnp1r3Z9ddPk8YMYXon7o6MeqDDXrghZeGNG11f3Y1kjmnWRAbos",
  "key31": "xKhZxGhHsLfDQr9YAmbvLwHK4PVGJvUHppGqX2TUdGocFM6wma4quaCW7asZZeF9aZwvUQtVmRZygxyQAC2DCL4",
  "key32": "5q8yCKrxdmFvvf5isqRCJruvkypqtAu4gfnzz6YZe743Xw9fSE8Kzpx3qUTViyR2RvEQLEchjFBJTJt7k3gxcXZz",
  "key33": "VZm3qBDZFMCjUiiEQUQ4T5n7CnHbfQXi5Y6qLCa34G78B3h5eVmkpHQSPRQ2QpTb8GGfbybmtuJnVutKTPxt2Wi"
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
