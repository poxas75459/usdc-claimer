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
    "314USAEbu3rPumQHYGWhXipHUE6UcXKsAghwWc4XVDpcmET83JkiUJFjh8xgN6oVEzEzPsSqGU653kVcsA1aVNB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tFUsVUowQh6n4ErZiVVkhHRy6ETAEu5hkZrev96imjnjXNuoTAmM6ieGiEWt5RGVW1MRwgYJ15MZz4zq6bg4Dqn",
  "key1": "5vbRKCHvHnRyugzJnPSdqvhUL3vuTPMBdas16rJbH3FW3JVmBLjwLCiMR86tnrx5dcUGdgadZJA4iRUNP82XmSw2",
  "key2": "3CRpjcmdyfqxTXFzQGHn25RuL8i5z6YQJWmQrz2eJVzGDbc4iU75sszCQPdTXu74ZZ8UZ1Y3dToENQH7bMTLbTic",
  "key3": "3sra7xHCj1DrvEamH6929p4VWjHsvJnTTkKQ6v3ZRge78MtFPFauwUeUVymEXEu12negP6DXh1MZiuTy9VRWqW3R",
  "key4": "3D9hB8Ldma48VCu9VDsfvNBB7JEbxmRvvr2VKn5Z91GzK94tqixkay1QjUjwnrRPpEC7C3KazADYpBk3wrDzX2cy",
  "key5": "4tGC6iQpxF1AHZgURvqcCQiVcnVmjnSzT36yh2aDKZSRnH1sxHoxehJ6kbKcFWrPqKhxr5hyA4ETfpYLLnYW7rbb",
  "key6": "3uGCZb56CDT9UYRkAcAzj17qjdsESQtnm3JJYP7P9JEWvD7sdR7a7bEL2ppUwmSagJ7N8QdUtSRbxYvJA2oxUwXV",
  "key7": "3fdzTXgRqWqvnqsDJNQEekxjSedZtTcSADrm77paPfJNpsx6Rke28r4uYH1yd4JGuVqMpoteZz9iifQDeox88AG9",
  "key8": "2M72vvXrU9kBgUtFgFHYisVsDDJn5vqz4poxURekyVYs3YAaBQxfDarLKFCZY6bz2GgNsx86fDRAb4Lf4CGMkPQy",
  "key9": "3zp3vc3ZDG2ZzFRNgJBynrkqDWveFf8LNMLfjhLHAY3B8XJpoqEnsgSfekEuo9KMSCLTeLjCxxcjgc9SwwMg8mF6",
  "key10": "9ddCq7Q2z6BAKuZ2t1Xsz3N2ABh4zgJJnYmQKa6Lv3kd5Lh7xbdgSAuAAKAj9EvNTR3x8zNR9kzgFpe98dPZjtj",
  "key11": "4C994NKSgNvzriL8Uasf7uEnXkYtwcnvTHznBW3QLUg7B5k6WsakLzt5n83VFx6HcUv1P4njcYjizrKGFkN3ahL9",
  "key12": "2HZdLkS6fJtxpkf3jnBVPb8knbAMo7kzC9kfXfAoqNjb89vYGBEjN4wFKCNugebZEkRVGmNMrFJiiaPwuShMv4UV",
  "key13": "21D2XzDLsvhQu9PPDdoTgYDBdk4cCSupjzgR2jgjoQowxdfLAiv1F7zehDBsuuM8bBwcDDqGjd4bNcMupTXCB2k5",
  "key14": "5HyKrm2mn7TxJTm3T9jBDrBdX21sCLXhzJsX2t9zpzYG31ZYBfLyg9iYaJqmcmAcJ3K4yr7dNnjeyEkrdhwb9xHS",
  "key15": "3r5TPxCsWCiufYF8FZmdaEarRLGZLcGErLUtg6fm4uBPZ1xvHQwyG94Zdgyj3fpb7pdHMLedhyLg4sG7EL6kqgL7",
  "key16": "3kdkmnyH7Tr724akYACLHg4J5HP6weSSKkURoaR1P2WvbPiX8a8RxvnYDXZfEwy9ZtQmiE18zpDVtKUBEU2oE2pF",
  "key17": "39UjQMpdZ9QK5yiJejMTvWRBx9hvvhowp8DQALs9T36az6QVSEnLVyvRmgJpMobzde9oozQK1zq7zcqu8BKQRsVu",
  "key18": "4LpWQ63hT9pNdWVBxc2Pz1Xtrd2ntUijsY1tJEcQwwM2J6MPTiAp7Ew1Mvk59uXRSKJBXwdQzdhwoZYijVPjwSHF",
  "key19": "3G4ztp3MNHUABbEAq87R7tyX6nR72DDjXRX8gGPTCZ55xLWmT8tfF7SLwFE8UwEgszZP8xxQtNtub3BT4QrETXHm",
  "key20": "36xuo6P8zXU6mfeGNFpbkfPUdzUWazZo3YbXGyE1nkAwFRzfJoyUr6JspD4gLNciX55LfSTF7BJcp4JGZp42KLak",
  "key21": "55NT5KfeWbwEGhcaXuVwaJ315MB4W5g118SkijBJcxXLxBaTb2f79d7w11rTEMcy17eVVaVAySvHmPwZ6dPSzKEZ",
  "key22": "2Qai7nzTZvCwjfSgmUKoRYjrbdFMzXvFopVVjcPcZjBtfTKZgEzovSETmLkAKTfg5j2g6njg54c1r9EauUmex1TF",
  "key23": "4Dsyf9QkRQFhLwEV7dvPpnvJAdwnv7cyj92bXRGzDj9KKVt19pDrWQZajoscEGb4vnRGejHAykNuohi3h6ESiuoD",
  "key24": "5Vp741g2JgN1B8zopdZrSGPQ98X7KTZfZryeZoMFnZjL3bFziEb1x47iMv7LXjxUiF7wTWRRaygWi9ocetqtkTHA",
  "key25": "4TKgJ5kHM5R1KvU2uqZ7E72av9tJ8oQJiUyoJy4k4U4W3W2WuoUV3ao5P47wKDd82Lyw9i1rmEYWzFvFAq9eH2A2",
  "key26": "65JskUu8iaf4ZGxPSE448C6ZTv2SGfc9qzKLJUTw77CoeLRy8nkSB5VbofT9fhN23pitRGyvSUPgmkApnGWrq73t",
  "key27": "4EJMtsJSxFQNoHyRR2TuYm32pWJxJuWHvSZTC9yGwc8WLvCRxPu1hPDG6Noz1j4kZd51ofXS7J7dEPE6vztZVwYF",
  "key28": "3tijPCUFCe3mTi4vmzcHYimhdkh4Cj84ttc44gojf6vhDNZTrayxYFmeZypbuPy9jLzYbzoKvLVkrPvXurSoYJ1j",
  "key29": "34tCyKgrMLDdWWrPxuXScDkfSs5ZjrXTK8kZpmE453fnbnDXA3oszFqJ6AcRfH1FbvBk3QBMLJjfrcPyyg1gbowh",
  "key30": "4dY3xpj9duzASeWoYgoJWm72H1zUyNxQhDZN14FmBnCFe9TWDKyifwpFMMZrEgjHxVs2Y76rMzANWXQphBNRLr3s",
  "key31": "2F1Vterrtc7RrvQQUQUP3NPhE2mhXYxLwthd5ujZtc5ja6xuz2euGbgX1gtc9A1WSxGGPQPSP9DSJZ2LPb8TqWhb",
  "key32": "22VyFwmMfmv6zS6UyHmouZKRHhS571qv1APLW4h8XBQi5eoWLv7qech9V5gNnxvuDNc9uGrdqo1NMt59dmGuK4cQ",
  "key33": "Pna9pxXsLQRXWh3gqWAThFqbn7wWZCEpCHSTKmVN4uj6D6xRGYWBzsSHW9MgK5DWWBYz3fTHetL66sjFQw3FXxP",
  "key34": "4qkwrwQoxPV3eviFN1HSBYJPSC5f2rScV7qxZTW71Pdk7Cp29zq7svX6tm9io6kHkb4VAuvB8YYhNuZxCXP8FPaS",
  "key35": "4zP9hLhugThrLzwTFLJaYEBN7XfJJeRZWuPM7DQqmkFFbvv1GiVs5GRhRc7V58HpzHC4y2jiyQbbCGmeCiVkn2V8",
  "key36": "3fHcL6u5xTxyhxy5aP5MMV4L86NvvNBCPbnu1ksSet4aESHj5mz4MD2zBJzSzkgg43aTDakn7uojtv7HuKSEjH9E",
  "key37": "5Cor8sx1UC1tk8Y6ePPnC1nzngb6Qt4pHuLeBW3e4R7pSwEAZmYgpH7LfYxzXvk8aGMc4bcywqyaVp7C7DHpwwSw",
  "key38": "53dYUNXcUnsgw9jKEUpktK4bLyF88yAkWXKH2cBEKTHooXTHuyazC5ZZj28CgJfP57gvrdFwRihNPxGzUXfHmmrT",
  "key39": "4pbGhejRhgATehcbPjh7xwzgnA1BkvHFJGLoyer7t9i3BXRuju8D7CFyZYRnKwXikaAmewEyxRoWP8UdBb1jpDvR",
  "key40": "4qoGFf7SUyLxYGCYeXWjW92jYS8D1LiU3pmDHEBqFFzQPHhqAopRwxo9bqrG92VtWfKHJ12vUDQ41CPnNrvE9RW2",
  "key41": "4UYJ1AVGj7KrAVBWbMryPHm7Pn6iRVViMwkjuKoFn8Z4BDS3UXDyCxyuCeL5aAR7pYngr81WCJxiUbKVbYK4FR4z",
  "key42": "x4ssyz18N3dDLhrcm7YnCAiTR9mSKMk38vQkanfsjbrTscjXh6DjTQPzXgEWp1X8yijzMsh2dqk2P4zBumzihHK",
  "key43": "58sNJKJANBUktSQmKn9g41BAW96AkFzMG5w7Jm1z9DhjcnJJLgzLhR3wRAbpjhLAPM4hjjmvFKEHAxR8sp8QPz4R",
  "key44": "4khRTHHNsvC6dfxKNwzUfewQ9inNwxSU8GM4TsC5HE6c2EK7F5vhdqapuKiYZnwnTnt4X99QeWBr3MfLYq1hs44u",
  "key45": "279w5JWUQ3s5CNfHZd3ZHs2jzdk8BifPt7FzUCK9TyF9TAWkXw5pAu3ZrRs4oqCzmeYpuDigG4c6cGdC5VZmwvPe",
  "key46": "485NvMtLrpnw6aF7UC2XgczRqE9tq6YjcV9AuKnQCc54zosDchoBWHmFbh9YmB5m5MW3SJ6pY7g95ZfBR5v4NTpJ",
  "key47": "3tvtRU85Qray4dnSBYBD97d9SKN9EhrAuGh4qUfHcL8tFiQEAPeTuHZ5bpnSo6csgSZTBobhnTn8bgpVdk9TFNmf"
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
