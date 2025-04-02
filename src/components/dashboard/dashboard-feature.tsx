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
    "5eLmdHK4YyhSQRKbcCRoXyD3uRfo29hgZZi8gH7ik1v6cwsJuKF6HPmsuKpmpaiHfdKdSdivLqaoyCn7sFN88sXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "465ubyBTeHpxtcb3QSh1GVic8GbCgGXc1v9EQaKFgqjJMWAmAFkdBe3sxTTTkb6Mb5PMpdAyrY7WvEYASiwjCgqr",
  "key1": "3XEry2YcjE6wBpJrKJfEQdGjDoj8rsCpUBY5he5rKFEQiNLFR8i6PBPH2DKog5qo1CWaRPxx75pqsk5LA3f9633P",
  "key2": "2xsAB6UPnNNXjG8toVifN7kPvFKHyTG5oPa56ggm4D1RsZoA1xr18kdJXQrV8J7EtyZc6QLSFWden12ety7kByNS",
  "key3": "mUBhietrqAzyQ8qitJSdcN1tQkVcZahyUTbVDWJRzE2hT8bvejvS9c6miTzuzVUJckKzLXvNQ7V4qxyevQBHgQe",
  "key4": "59TZSWys6vobSgSccE3VwuPsPGkMDWisQaFRTYFCzjgmVfKJveojhi1HghtMmRmWSTciUM5KC8VkwtwkqTP41kpa",
  "key5": "5MLq45tKB8nYz1CM7pES4e8zwn1L3gfNyX6cGmJoxFWRwx3wcakJqvihn5Czanw214AS7qGccxeB9ZgbcMAqTfMy",
  "key6": "44i7wbVWB4wsPo1hN7XwjAF8NhNzEHhtwb5eCNrP57Kzph14JQgbm7UZtGUuZjaWFEjQB9Vo2sPArYFVbr1pDGLV",
  "key7": "4TYCBft69Mu32G1CwqxF9GYEs6jUT3hkt98SRpMDtQbJRPFe8KLSfzyiZAExNeh8KNgu6WhDxy4XaiywW9odnASs",
  "key8": "2DzmjSigMdficCVa8dsJoCr1Hk5JAi4XcjsHyzupskUBnXTMHGHzaqurnQ26wVxzQGYwwZQ91S3A1x7MrS5bFxTY",
  "key9": "21hdhTBkNZRmg4frqyqE2J2CWwfe6AnaRNCG5UcXWrCswypS9GMMsL7PsybHhUu28F2qPY9UMZj7JSNzE4tXCLY6",
  "key10": "4xCp1g6Zy2j4oNGGewfE6GLpbiQuapP3Yu2r8iCmwXsy8ZiGFBUxB4iLR3YpoWZU868fd3ijrAcC8gsTa7sZV9pY",
  "key11": "5P6QCr7Q2CkCSpQ8SheqgZnNFsAntc89Lt2sYpeMoy6xkGKZ58fatbttcwvTMG2bpt7rU63sSAm2pJafNUTXMNNm",
  "key12": "4MewbuPmBkcYS55aN1dw9PNKtcEN58CR35sHPmmptrwSYqMNrottGjmE4b7a9zVUFUYxP5SDtwwzsEc1kQKMnU1H",
  "key13": "2u9aj4fGHuCCdfuS7ZJcMNgKtNCpNvDZ7pGd2gvqcKbHqRKyEMfyeisjkSavtKdhkS7ohDGjJvNeY66ZHqNkpwW8",
  "key14": "2baHxGR6cPY5hQb7yob8tCzHKx9U2iG1K17zwLRNUQYmnyCFcHPP6cBusPjvrrswLam5NPFvg3KnKuC54QGwK9vV",
  "key15": "3Sg7PUWMwiSJS76BMUNyBu8bNtCU2NEHQ5deBLeznYnaf6caqvfLwYLuqN1bgBk7BF5YjnNbeXLQtctrsQHcLzBh",
  "key16": "46He1zbUf1b7mCtAYpfDd5k9gx8BFMdffJyTxHho6qy7tA9VPdjoAnKBkyiwByhg4WznAqPVhwNi11UAv2YS1Vh8",
  "key17": "5dxdoDVQQkQwqLCEmHbsdYhsAMpEd9rfQUXt2J4hsZeUCsiLhrvUHzmGfiz7snZAz43m8TyXNRbgLnoQ2QjAuvdA",
  "key18": "5NSvYAqVLXb611mQbJ4RAdiTucV9BMJsHz5NLQGJgfPuZm1CYdsF8AgDCGPpTyxBKimmjfXSysYVtihMqe8U1Kfz",
  "key19": "4jXFvssBeAEV2eR7bgNa2UjCzj3gYzaRPL1R1nzXW4skPWnVjB4nGREhvuVvro7M6i4KCzmNF5W1m46U9mtpg5UQ",
  "key20": "2rrKa6HpSVeVp2pJANxcy41j83yrqZqmgRcbUuxqdT51E8oK1X1PpCgqRraQHfaveFso1uKkGkLBPewtFaGpCLC5",
  "key21": "5rqxakWVZoJx5eAWmJjsVfSgaimmBmieXZ2akwTJzVvPaWy3EtThL2swLPPzKuVY2HgkzjZDzz4sn35q2GUD2SZ9",
  "key22": "Rf9a2wFnYLFmUmXrG5Bj8etPWeCSpqJ4BXit2MHnmXZc9mQtuEQ2PPnN9yXiyHHtx634fud6hQjn7zZoHiNN5RE",
  "key23": "543cYuBFrLfGfpjLpgCJVfwTF7u7EXdQvpT8GuQirV9nyQLJk99CuqYiQWWL6HEVQt5PCSwJswJ6fkhgZK91CdCZ",
  "key24": "PZ8eBaXmFrRPvJBhtEpRaxf5sKdg53n7zJhGx4C3MxneCVFW57xdm71gx3KeS9SL9GCXY9PJ7Gd5mitKorGKdue",
  "key25": "5He9LyaWs3aen6KzQQN5We7DaddF4EmGWBUwQKjZ9N5rD4nxUEPp7whNTCD5vfmTMkJwrABsTviRutj3G3m7DckP",
  "key26": "5aListJ1JQp29ZDxjoJTL7qAKTUKyGNJ7j7241CGTUs1D2VmPfvyqzBvNhqzfcUVrH9wo2bd8sKziEeYz5nsGkU",
  "key27": "4hXy3N5qj5GeATvEH15p49wc2Xj996uzdGHg94TCH9eQFSpFGpmRc3dVaJeWdPSF8h7K3PZHAFeViNxv1W4fCVsJ",
  "key28": "3uKLJhkBDAE1Q5boDmczTjknnYbLcjC86WdWjLwHVXxxwMkhA7ukkjFnT4qy9seui22PmryXdpm81qGvRXq26ta8",
  "key29": "4MPDFXFj4jMpUyCRzBtvcbrndS6E6ABXcN9njX8LH6mKRk4qabtXqW1e8cWMc6Q8cHd1QQejgBn1TzWkg7kGd5va",
  "key30": "3f9tohFrLQcRTYxLWyhJSDS65uUuihHX53jj4XE843GSvxBHSVpJ2C9u4iBJ7yu6No1Kan8AD6eTe5XK3m8mhjJN",
  "key31": "42VyUdFL5D8P95MMdEeMkEwsH6YP9asFyshArfaz6D2GsHqzbv3fSFza1hQDohkAVZuTHPtvKz3kvmDib4J3HYcA",
  "key32": "4B33Gm3ZU5RL1XEXdx99WvbVesUYyzJj8wFF9Q2NuYsaEzGcs1U28TLnHZDcYnxDoesqN5YkzJCJz2ARJ133vnKi",
  "key33": "53cHNzNdD5GCjBokQSBhhrpb5tAMgc54m1zqFaZHYWZyeQSS9LVj7H919GjLsHSrGvyLx5cVBtGvynwJVzSETrQL",
  "key34": "DkqQn5hbxxZsvwW6v8FBdUEmXirLxCYNphAJzVyjakN16umoVCPaGADozUyFHX4yuM6UvdR536S1qTXyiKXmQMu",
  "key35": "41HTG1ZpYvEuEbjxXuEAaQtaooQ6enfrMCzP9p8SBaQaScSe7DXMFm5cHYrAsGrsJuC5uS4bpJjFFBuag3GuFvyV",
  "key36": "4U3v36HrWvKywuLJV6arXZhrFn3YoUZSAsHNUViQzbC5X5isGhR1JAJjs4vH8cFWAxeihbRPbTuSUG7hHWbrj5FB",
  "key37": "kAKWXoVfFVak7jgfMxdF3fZhdtJw2Vixzt2YiEamxqnvbuMwtwmqR5UaEiod8miMxBoHfGe8d2ntittQg7W5TgQ",
  "key38": "4hfEt8aEzsWsW9zxeHdAR9ENVxHgffdqPMFi7An2bNvHSduusaYqBvNZUVjBKeSrYz9HCLr8ddFya33gHbiKLkMJ",
  "key39": "3PK14fQLxjaEd3EjbdQiSYX52DcRCgZzYpAEvZiaPaTSSunmsNQgWqQRuDKdSkG2f9QVykkvzjgu5rvsqK2paRw1",
  "key40": "44pS5a7ro5Tbx9VqyvTfcHj8Kbhtqnr2M1Y8n8C6BxdfCmfjatZ5BqrKWx9r8PyXJMbGtsmf8Wgp2cm7jq6AbK41",
  "key41": "4dXxjLvTP6VbTosQJZzgwcD2d6Q9izbGcWvyJ6xfEw9zfocgiSacdwKXG1mq5tF9zJMv6RVWdgktGPDi7AiceFNz",
  "key42": "3txv8u8hFtzWNMFTKS7onkxdsp2LYPpHXX5sz32NqryZFBJaSnvcPdZaDtJNd2quYxqHwSTZvtRiZjY8ye1Gi3y1",
  "key43": "U6H9eaqc1XB62eNHUT9PpenY9r84j35ZNNTnZNPsgZKMmgbKdXxTh9nPqwxoiLQTtdMKvcVKmxDCgoGRx8t9Sqq"
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
