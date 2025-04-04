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
    "22K3cBkx6Hw3wJoUuaPPRWDauo72SS2xMgURFmAsYTznz8UTersGse9T6yKXx522CwxJQSe9dY8MbDj16XaCaSWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wwz78cXuXHmduxD5SVh45d2PjZMEi66U5Cwm7z91cpDtf8yKmzJ5a8hDPXk7pqWNRprz6a8nCx4U8v76NuWbvSc",
  "key1": "QMWbqKmPXFn4VFLb3GVnNRFgE4i3NRjSeM6WcoujcZqiTDb4n9wGCitnS6Wq4euaLv7QMVA6bjDarwJc2BkFQwf",
  "key2": "2GfzMtcLFUHxpXGosxtRGTQgKohWU3jEYY71RgduiWU67Zn5BUMVwZXZ1UQfvMGkRmxRtX1YFwrHNJd36AsvT82V",
  "key3": "4XL49sehdHKcSYuXDAoa6xS9qwBhjmG9XtbrPBtMz6sFmoRoQxKTPD7FqYydiBTkn78duyVAWgm1RMn5SVTXqJ4x",
  "key4": "33WEQCwrpo4cSeC8RJ66bjfkPnm9oUSXgwY83f6PWDMKDDBb9KCD4isHQCYUYmzWgVfNMBE1v93GKcy6jd8bCAdd",
  "key5": "27GneBx7KSuZqGGddRrm4WVVcognAQJpfhaXcnhpy7xeFqLq3YwPii4ZV8NqSLoH5sXTAXVTrmXeBdZpxfFRqsGy",
  "key6": "9hC12Wo5JLxK42j7MzTyy6rgoQEJHgngx9Ky6pB94szWC1UMzbEab9PyvUj5T2bHdBbym6D4sLrgPpfvfrEdTyw",
  "key7": "4PrGeBc3NqJN1RTjCeR94HPuhHJHDJ2XcDKZmYgoUWecNTo6aR944NMqFnRNpdsHr8fzMteBLaQ7dMtz1dbqUeTU",
  "key8": "3EXaTEd42xGQTq9E2xccxYp9LBwm5Y536qe5h7bBmWgeop1PRZEXGUQ7YC8hPGMWTVEGEHLVD7H6EjaqBcfM9vgY",
  "key9": "32BF863ULU4yCSdtRbPPHALcpfNEMN1c88rfZxqA4SWBJQoLpxPhup6MEJTuMn1JJdaJDszZTe3fNpdYn33dqmjR",
  "key10": "4GSyVPEQEzWi464EJir9dp2JWYAbd8NqH1WCuYv8aF8wBnMWuK45Yb1tgjtiuoMU8KY3W1CY2yT4D8WYNTa51ybW",
  "key11": "5tC3yMvxqdcSgh6RJaCpktbJSM4VrSHEqJR3mrhdS7CeTtnsaJczVR3pCHgzERCh2L8gzjBx6r3ssPHFz2zZHqF7",
  "key12": "5vTkGF3wLi1D2T4qAYMMcszaNS7UCAbSZajcwaXmhxU2GZUyZNEXYvMsa8DSG5yYrHjrHZwGjY7nBd63QzgHGX8X",
  "key13": "5vmUJ7BSDnZoUbzD464mvjpQbscSkmY1p4dDnpwDvQJhUzg6Wvmw4YcwKPotvjL5vgKN9baVniGiPSaqBBeH6vXx",
  "key14": "4W3P9fBpFkaFpuyduUJq58MMhRvcBaEHtB2kFQCyZVQ7vmchYs5oFvAAC9txNbqwJnsxyrJu2w3wuFnULXsk38Xn",
  "key15": "2JLbg2yYhkYfUrRy8vsm52AUiG7tY2ctDfkgteFNbAtiV6j8vQqfqZntT4EZ2sSqDStfuc8KTBNxiHFh9WzDiDCb",
  "key16": "4FNEW68oFwW9TsyLbpMBHkWq223hYVPaqsLvFBu12ZDnQ9xk7DmodTMbhfyFTspz8jTBE5yxWoQXFR4n3nEa8xd",
  "key17": "49RRm1wyNDQXRCnEpNKhwsKu1ea4xJgFGVTF7L3RXVzKT8brWrQ9NoudtUUu4RtWiroJCF8f4M7izsV98PMHchRU",
  "key18": "649iDTytGKxqCetCZTMiWpG21QBhFtt2QHiboGj3r5pheqmbEoDwipQCNXuphJitFouXcjWPWtqwSSKBvAFUEdm6",
  "key19": "63b1NvhXPRT4UXFr2tarS4vmU6Lx9AtgBpuWxrioEnTA5wHSDE9VW3tmieRpq7h5LvW2qLeCps8poQKFvyYLH57w",
  "key20": "3FUu1iuGmWCCF4D513HHUuV4cEcAfbwJZmCreewC7jpdRxL354ugYG9hpLkMf36sDJsE9raemfTXzSoSfVyjiYhZ",
  "key21": "3mts12wtqo953FCkrV8GrPSVnaKXTcUjzatyQV8ZFfMRB3WUdGbyphTkir6Ym5P3XdDoZmnBqZoThmHaoYrWnCcJ",
  "key22": "4DoyanErnm2xMgaHH1f13BffMXp5P4Pw1tz2XsQAHYf9GyoQSfATwqDL7FkLo4qXyLCM5Xp5nsRAvHoJitvw8oNi",
  "key23": "5skp7FCngyRaY9ZPVKtcBiSfNVBDNWM94hCpZRetEd7r46mfFYeo44Nq6dXqh7G3MkJh2n1az8kpPrt7huqs4yKt",
  "key24": "VsPXC7LcpkgX97qkrXR4W6DevGfu5o3657f8v8DLFLvYdQVW8hn5DgLy81AdUuqZ36vbc661pn4jBzxLW29d2C7",
  "key25": "4XKEmgZZfUmskp1AsZAf5KtynoaCNyZs1LZregLxFnnbX5gfr1cG79ipPNzqyeeLcDdTP7wNBkbYt4PCZLxkp1XU",
  "key26": "5TAmRkjAkiz2YcswKeBqWFYtPJH3SRR9tu3xLssShctapwpdNCgNx4ta8t2JB2cnLCNBFZ8WFxC76ToGTsiCvrcw",
  "key27": "66ock7e3j3Rce8BoY2BF2Xd1E5thPSM74DVPo9i2RAutKsYNhn7jcUVP9WGKjteWtu95D9QQZTxiiRrh6zYwiHq4",
  "key28": "463GL1xpenKdp65JTkPkjCGMq4JL2gL1UvFVH9BgL15c9Q3HyFPUiSyfnixuSRfrWx6MHhgMUoSCV7JCwSy5DGfA",
  "key29": "3vf713yhugLtSbRnRhRzzmHujkzHWgiKEr39hQprcrCHuQQBrUqSP1kUhjHD6GHJvNoQDKXdUhf7Gdq4vHYHEfPm",
  "key30": "5QV2dsWzKg3XQyMPa1RDXTX9APi8A3ziSvCL4JNCXQurHFaWw632HMqQeoFVJtdUE2skmnKA8pemBiG2W3UQk2uG"
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
