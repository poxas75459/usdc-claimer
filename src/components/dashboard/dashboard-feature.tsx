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
    "4jJwGxhb8m9uc5FvwTN7B3UFDQbLnJh1HvDvW4cR8ZiZ6K21znBcN7J7FBkLaiKDAadDnL2Lz5o2m9gqpHykz4Je"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "233cfWQ4izxPVT3bW5rXRAcRZ6ixF8AnTViZwcgybkf6Xygo6qU9NfaMnqxohxCMC7y1euEYa85tEnvFKHzMEn3u",
  "key1": "5WiFvEtd8vvBMxYhdE81vdU1gzH7H8jWTPXKeGLneURN9MLvBttfGcmZcLXS8rBv95Qqws7GL4G8C4PgYTa7GB6",
  "key2": "2SN8f7sQnfVM13MdHoqhGRzEr9GRECLVvUitbZg4dJYqen3zxSvL1oaK81RDdLZ6Nn72gRq3ht1FhJyM8tRbrBjX",
  "key3": "2ZPiiHjwqgRK4UVUqwJZNQYwrunTUDSRV8JpndPBNiTUVb7BRSTvytaRihXuqLk1S9GzLwejU1e5XsWsG2r4g6kd",
  "key4": "3Ntsfz6fhzh41NENRDTpyAKY86DWUDuSXkcMNZRkoNrAhRKPoFskqLTqRf6LZTsPTkxHCJ3Ee2KQqwxp1wFJ75Gu",
  "key5": "4HVLhFXtEDgCWLbWBGp9mnwVasR5QfC3Rt8AnkTUHB1vR8oUWRE4H3tybSb2K5RVEzMh1neusYYEQmFC6zv2PQBf",
  "key6": "FMrrqzSSMJk1EUv4sojjrBGkKBziRdbmGZj1CZYajtnHz2svkCYTxxBsHyVCdV3iW5xrH4uvd32o5ADTyrTxZ4V",
  "key7": "2Y6RkE7hfbAEw5rnCyzS1hzYKjkoqLoeXby69xwtKFzoo2DMecjf7pWkz95hZaUbao6VzU8yzvLMrUhVbAPXKpaL",
  "key8": "4RKSwb8cei4p7ZRcwNuLrcr3iRxcD6LQLAc1NEifdVg7GUv5PSjnB7gmr3TiXXM4mR26Z26iLhc8NWnRdmtDVf7b",
  "key9": "3nHBkqtgwgW5DGYCioSWp9oEDTmSLgU3dtaXudW1XChQVSvLDgjXcwGcyY2CeR8HKoiiAmany6dTWmGecvFo3Ro7",
  "key10": "4D7DBkKxn21vXFH93SccUofmXyyeynaPoV65RTo4wXuYMLycdVhWqVGkTTK59kGe5rqq2rVRyfGDzfNzt3TMW8a1",
  "key11": "279bvmG61vaQ1NFokx5KWhtp82GxGxaC98GFqh7PniD1QcXXW247Wd6JZywugr65XWR57w9q4HKyG7CAg2tttQAe",
  "key12": "2ywbtWqrbA873LN2zEZtU58G4phTvtwQVmEE6VB56dcpYEQK5shsg1dkQEXiyjBibf22DEZUzX7FToUwaoDykwjp",
  "key13": "3CcaYiaF3jSGpyr8qExyYw73maDTyWkRxtR5WuLofo3hXQrsuwzKkPamvvfjVxGsiBq4JDadTjf9ftcQPTCuWESt",
  "key14": "5p2NruHEak8kQhrkYtvtYjjNg1wbRYiE82MbxCUAikYDipfooA5joWgYLh3QRiXGvBBhw2BdpHKCre3St8pGgp8i",
  "key15": "UxrdwmsTJQeL3JpSLJwmAzVpdKADo8oSm1C4Yg4mNAGw6fpMXxYYqZ8RiYoR7vWB3hZiKRc8hUFx636zNXrvc9M",
  "key16": "57DLqWRT1ugpSyvjyhdijrBB1UuaBDDaDjHTeMfHCzUTmTpC5BcttZtVmHxHfBaSJ4ZHWreW4x6AwiKxZqs4ZDjK",
  "key17": "3Ydck8sYYgA28zx2nBx38Ps93fyyGfszjzcbRXbQjhxXSTTqBUMsSMc8FLth1Up3CVSeAUVHq4kPCg7S1r8hSeQL",
  "key18": "55xifxmkwM68U1bSnTXfbZY19qYj44ycA6tEKmigbNEsUvWcv7kvKJWtkRGCaVV3S2VETpqojRd5w1xW2B1LhKxs",
  "key19": "TGERaddXj7RapvHVpW2ef53xRk7a6ow4FQEC3fTqDA84DCvqzTS52q18TdgRuWvxiyM2h7xeQojnCrFJvnRhxZy",
  "key20": "2qDxnFytzf2MCLC7Zj9MdHcBnvEPsMQhEWUysb7XaqrLUWNHDsuE3knn9Z9cCXhruwaj2GfhaKr1e5E7DD4KYrCQ",
  "key21": "4VWQr1aMv9DCkMjipGTnxr8uatPSADCqK9bhgsfiwq3APyLA8KfW3JDr22HwAykuRY4nQABTqcScbkaMRi7ijJrq",
  "key22": "2FCZMFr9fkXCAF6x459kx9TNxMVGAj9JB4LxAeTQ5LAbNpQrntk8P32BAbxh1RMc1CaVEQJVR9jdQcwiLUxGY5j6",
  "key23": "as8Di8ioNuqr1PQB2azgMoT3nDKLM2hyHb2uPtw3RWUZCMskNFFo35Psj4sbkYedK5G4QzxXQUhTVyUSLSNZ9H3",
  "key24": "9vZm6XKVexkbqsrFeijRf6pHsJyRDryFQWutkNbrGfynvvQgDPQcoxRGK4pYR1YNXMgnCCDX1GbyPScmENqvZs5",
  "key25": "36gEYu4TX5Y6jrd9pN9cjaa46kb1Y1xxXAWrceMKMnagKFkrCfcNjofYQ8yZDMox8ABd9XRMhXvKjYxwKF4wUat8",
  "key26": "4JUzDkCk2GX8AgCwT8zx7zxKboK2WefwyhpyYYDKtAnmrXrNr6cRnfZGoadusddWHEjqZ3wGF8qpfU5zuoyH6SyL",
  "key27": "3vEWnZgEBUfsrPiAV2EYsDtpTUJRmhX2G2eH7PH9bhEdkCp5FQqzzQpYS8QkWwfW6vx9JSUnQVxBGgaHwiqFRRjz",
  "key28": "3D3iVMkiKYBwzoGGFf5kBgdcTzN6cXTP1Dra31UPVuYbhWKznRYtJ8yavjHVyFBJZkLNqJsVK8r5mfNHXdJPEA6h",
  "key29": "3zWuEDgT1fkweqMw7U4Gcyr9hLmxedypXpx5KVqj2Wtutgz7pMVhWSfWgvBNnoqAbqtmVWDxASaDqQHHrRyMhD8y",
  "key30": "4n8JLUbjpZEZqEA6cBntzSLMxzzXWmMhj9NzUbsFVcUpSVP5eXWmRqoUmuXAEaW7VNFyuMBqbe7giCV6ve4hFfhV",
  "key31": "4fixpyBKUu9kXyXgy1vYKJqdqf4jUuXaZnqquJpJbzTjcHcaDthtbsJWoATUG15WsqM2FvtkwnHvsBziZg7UfBxf",
  "key32": "3iSqjL4znT3fsEKUPdVC8ict52NEydjVdHrgbCDd53RE6TdMeSUYcdC6ZBazXq2h3at9LSpmp2LbhNaDwhcRBrbV",
  "key33": "3LTtoeE9k7Xt7i3uNwF5WXNDKQtFeaoufJ5o3z8iSwVLibK8YkM9LCWsFaWdA4JXmHnuuQXPVdoTTy95nCReuehy",
  "key34": "3ycXbScuuZSs8pg9WPP9uEicNpicDwSDCJasH1kZffoYaxn3NQbaL5fBdx52MnQN3CcSzmnyWa4c4pMxjM6kE4qD",
  "key35": "2g6pyrKuPXxwwqKBcm4oTot5PW8uD47Nhiy47BJjWckbt4TnYn3jZR4eNYyw3QDRR61MkymQLarAEh7NcvWXTGbN",
  "key36": "5UvbN4TPNNdw3qUMGduoKGGKPVcnE67UFn2BsjUgUdBo1bniTPiqZF3fJzpks7rtdzQzS7rKryL4sQLLGZx6MAPu",
  "key37": "af2fM9XstbVYEmomDMifmv1cMHqG3GyqzDHeiqjdJ79AHWyMr5MoTHq2HGbTw3d7bxawQLsG2zSicKfZCkq8sXq",
  "key38": "X3RX2RUie1bvy2dAYtNAcv4Z3fbodRu2F6umqCto25zLDZgscnJ48cE8UEAxhFQXuPWdcmU7KT7Ne9D8PdykbeC"
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
