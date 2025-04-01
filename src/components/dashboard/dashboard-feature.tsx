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
    "49CdxpQQBiJuyFJKmWDLXes7BDJ62QbvL1aKk5rnWbjvB7x6jx6PX8CMgXa1uX3RH5p2JPf2gq9rCDVERxMHpeYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66rhEM339woejkSFighJpixeuE68wjUME728vwVKbGbeigaEEwkQRjRKnt4BmHKPjMAQ354k3F8cq2tyWPBiTWRR",
  "key1": "5Y3ewWwUAiuot6ZGqMjEyKKEm58Y9MTvZk5fPiRtLimPjQh7t5Lk5yCE6A5wpoFkvDVoHoo3nxvh7b4jUEdCdveS",
  "key2": "2efiUAnpwUnsn1M3PiRKKENUgTKefbBBVhB2ZL2MEd8DRV6Z1YFijBPVwq66b93e6aqUWSqT8pHQZVMcgQVPY1AJ",
  "key3": "399o2huSNZVYccayWHcL5AS3wFtjBDWuP16Z61Auyi2Pp4NRcjaKEkgnni6gQHH2LjWqgwWDMd7hF2WjRUVRJ4ZA",
  "key4": "4kx8Cytd2JYH4t58duZrAiXh6yMp33qyYvtrKERSKcKEzAY3aFsesufy6UcgUBU2MVjnqaLYzSBSg1qJdCqcGFjD",
  "key5": "4NsuZpKsTiSpS3phL1D7cV22BhCwhLRBSMNs3HDyZADuMnJq1xzbRwRmv7Aya9otjk9H5mntFZDKtKfsStY5wKxa",
  "key6": "3DMPaTCMtvyPEcLXwVoYD8qdbxicdG3Ki8GRHRdxALwye4ZG8t9HSdNqq23thAREZ8vXJL6q6rGCVM9fzZmPLDsS",
  "key7": "4kDwuu6wL9CaAPnbV3YvruTChixz5S8QqgHPSVn3qFzZ6nVQLXsv2HQvu2kUbwDgvrLNwsGbXedjeLu87gkg9ZJD",
  "key8": "57hBCPJt2jP3wxxEu6R4A8okvn3acV24hACm17LafSdwNLVfJP6xXXuNRiZm8TDg9m5fWVrikz3Xdh3ur4cLgw4k",
  "key9": "5aEuekac8EmuJBr5qk1evAWWi1Sqk5Sq1vRKnjJcSemLSjGNvx8t7yXiDQqnsPcqcqJtWpiGjFRZhUtUUqq7DyYm",
  "key10": "3vdTaF4qNLMFXUACaJK7c6ruCuLCr4v8j9bBhocXBkK25dz7mBPNqwYECRhwXRhCGEqcRoG4A2MpctAPgZc1QMxL",
  "key11": "5RLpgqHAEdLyiMRaiHDmztsUr74VBFGhFFAoypNbMWzEwWpE1sQuwX9QanxD8MY2hYfrXe4KmyWoaeyVHcZb3o2t",
  "key12": "4MpoeqcMhXyyPMEyhEC569haDPfNZF3dhb99r9DuKUcqfnCAJ1bpung9p64CUp465Lsfqqe6hqdViLtiuCqy7yKB",
  "key13": "CMkPmJeZwG7iakrBWrNFrSHF77PjNYnTXQqJwn8CLFVw74SDJGuuufPiT8GfE9Hgiea8pN8jPafYpeJFWokYDUg",
  "key14": "2rF6SzD2FcktavEBoWcwRdpM9kPuc76WdJU6wd9WkVe3jop5k8JUy95FtrkqrZzPZJDvacGzWVAMVZbCCEVhceMd",
  "key15": "Fr3SgMS7xsMyLrjkw6YGSNFrtQ8bRugsTjDuNYEiv4423WQfeVw9ABkDCXuJTYgJBz4yYP8zNzbkD9YUiS21GUg",
  "key16": "4VzYtyYAKsWS9TDyWk33J4wacqLNeV8tecRf5Qaj6JPrS9td3Qwh9iDnamDfoK82DxFSJZE7VQ45BTDo5K2PGKFk",
  "key17": "4QftvoV3zjVU5XarVCJvdtEiioHYTRQpvYYccauEdBvqx7VNthtf2asMEMz4NY1VRLV8DjpFGRR43YKZp3BobdtY",
  "key18": "4YgL9FeoPgtW7gr5RJqgn8eh6zfkEVZyKak5EDmLx3VAA4wxE8YY8roLuGkY7hM2ivuPfPKx1mWivZA5DanxpNY8",
  "key19": "5EoyLePJnseFGWdBZCGHhyxCjf7Gu1sPQKaucGJfSJ2mMELhdgSmFKSEjKHABdDYRWh39U3AT2rSKtYjEvS69Yqt",
  "key20": "3MhLZP22pZjhxVNv8E8iN2Vt1Rsd3xjDagt17yuGXxDWa1nfD7u3YFRStMuwmKZzsVcBNYnGSKa9hDAwM4xYnfkV",
  "key21": "88ZoqFFZ5jBHC8qnJBJNTb4wLiRekFHaYtWXig7RrTr5GSFtkcQHis8tLtKbwYHUZsvrCM4gE7TpgxUgCe9edpM",
  "key22": "61cNfVhYmNFNNQuKQghRjuGfNFUGgNxmmHA5HHAB9fyoQgFyNiPKDzha33CMe4fYcuMf99ssQiqLqbyP7PuYzuid",
  "key23": "54Bw16YcfQAp4c5cacdjzmrH5K65AQ9K8PaxPaS9G5xfjJoRoGvbwZAgMZQEyCc288K1hiFxf9niUm5ApTDrBB4v",
  "key24": "3d4JR9u6G8SrM2goGTzjv3L2L4JCyJz87D58Tgi5dj7WNoSsZ7FF8ZCrSH4P6wrwZamdDMHWuYZurLj6RxRRfHi1",
  "key25": "4793xfJSCwRP71DW4kDSqRX5qN4HXKfpHZnR5TZb1WktMRzMES5MxmaTq9NvNWN8vNuhPhVa2qtkdUQKSbMhRHK1",
  "key26": "4fxTZgrX5HvUa3cUGZ5b758x4EaVpnJEK6E4LnwaZEuf7whUy8JSVstU4d9975S4TEmDcuu2wkbLhy2zBoy3EtiE",
  "key27": "3qXr79QZQzJAUCmh3sZiaCLNBgvamJBBKFeaHB56KmH8vj6MefztgtkRJZz9apLwEAPg7p8R5nwSp3MescoY1kgd",
  "key28": "49D5ZJATVKb6NEXvqeWDFAbgERTZCLTQ9ig15H7C5ZAeGBFgDWbS8z14zMNg4stdZQKHQ3GXZEPrhs2CcdRsda2B",
  "key29": "5vtuxMNBmN1TQB2Nmkxug63ZathkRAw1VtLxaK4t41yVZNVyR5YuzbiS8WVDej8LL63gWdhC1VWdQF5bHuoRUgz5",
  "key30": "Z932MpAaVCV2F4xXLw4xniZYiTMxbnEE3N97akzkpLhzTFRRjXBQQMg6ixsMUdpMXq5RLiTwkUu4F6RzRDGrfzW",
  "key31": "5EFFxkb8psGDCghkNRjRqyZufz6i4xAgFJTygMpcNAc127rGwycnizPEJsvbCXLazmWeMrxFinjB2GscYndTmLj9",
  "key32": "2oNdZ3wCpM9MwX3biq6zRiMAAX5Jqwc18gH5EifCSBiu2gnL4FG1GCsJQxxDmSxny6kAyRCnVUygQapDYtsquwAr",
  "key33": "63bspWhf6X2M8z8834ryjFFbeHQqeGkkjoMxb2gBkTxd4S85AnLJ9GBsQ3GuRy7ihBp299Wyo4mA3reYjrTFCnun",
  "key34": "3WqthHkrcy9YkRYNNTmJumVBsQFcpGe5gJxEWLTAAB56scb3dKLcRrgTAAv5xuQEynoyVjwZg8qAU4d4wVkKToe1",
  "key35": "5yGW4sJpSeSqkKpzvvXxzK1qSpMZ3RDb3UeaB6W37Ye9CGrpAeBvExo3r5tPJY57Kq77ca8GCTb4itJ5eP13dUVq",
  "key36": "L3qsJjhdKQTxDTNGHyk8Y19DToeiP1WofiPBSgHWCCXjMSB9n1FrxM1Ku6edcMn6LqRK1DQyA4MLCybhDqRAjJu",
  "key37": "w3VQ72zJB5oPVo2cn38w9pASWurSaFLyuRRoTCN1TzrDF58Nn2X88wFwRvVtrD8dex1ALyFuS6H74GenWcW2uqv",
  "key38": "2Tb8gZM2VzoSsTuV18Mv951NtZy36NbMqdQcvR3buXekuCmH3uJW6MWrsGkf7DSoxBKDceR4DJftWoarMCjd2qNk",
  "key39": "2D4ytt8v3fAxzbaBA4Z8RnQta2YDRuptUwUWZJaj1TE71YD7nn2Z2mogyi2NV8TKFb7f8qJikEsTyd6YerVMLqgt",
  "key40": "66Eg7NZFSKsFNsZd1oiLUN5L5nvoXXNrkYHWJyqMcNPPhJnxiWMKz8ujBGQkU9PX5A7xqC7gcyqhVojsvyTj73fq",
  "key41": "2g7vq81KYAHKmSbtsfVga2SBnWP3HQnt72Av91CotiS6fh9BpYZdPEDBrDZn59Jnhn5iExyBYAvZVsBaTbkSjMr3",
  "key42": "5ksYXgsEofpJENyip6BJvB5MnsfPuLmMmwW3dgLZhrN9mUhxporc4T1EXVZjykv82PcSkUzNsXDDMNekwuqcnk4N"
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
