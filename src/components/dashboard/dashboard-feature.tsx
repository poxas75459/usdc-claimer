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
    "41EevtU2kjFRXRGFinfVnvvDa3EUGf2Vu3mx5sdQfGMViSK9hiLp1upZJWw7gWhEthLgbimvYyepxNGTDiqH1aAt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iW85t8aMPLrTsTFHpzpP7v5ca1jJouPH29VZShnyn19HUejuyCxwYUpxkgqAMe8sG7Mhirt345RWH7e4nPShf8R",
  "key1": "3jVP3iPhtvK3n9GqRotcAd89L7m4Hd2Q5iT2i3bBoxocEebdpbQmt9WdLDN61uC9tEoGZEZJUP1e1t7n5uNGiWyF",
  "key2": "3TtcZi9ta1aXamY8SHhBYAGYGuhkTcLyQFGVTVG4TqFYUwWNJdfT91G3N5aLowQBAyu8ooVDr99q5tUTWDKL55xm",
  "key3": "5gMqkbbYGtFgDSHKmLwgb5dtjaiGN8gaLkTbqzg3BQ96NuNHBXw77X6UmvmZVLjFGqsy4kt877oYA5XZ2W2sJqU3",
  "key4": "5AuBPeMHQ5dTqo4z6E2GrXviJUFKcGcTzpTUw82iHs2UpYiFsGfnj9LwJvP7TohGDk4hZS1uuPT1oF9r9myd2Ltd",
  "key5": "127m9uDacNBuFYfHmJDDbTkbWFx99KgsN6AHxJbjb7dtCrfkSQjB6pPPKKv1VwedGgtBnixvEWAjKQuFGD3vKwVE",
  "key6": "5tTrLUVh9o3cWhwQbGqrg13A52nZDM4LQspTt2BhwWd6w6ghkuzjvpJdaHpSkshqF1YxurXJjLjrAfRxwcpAyZGN",
  "key7": "wj49g1HF2dVuhE2ExDxQvYNQcwpyW6BrBBL56aFW7SKhY9SRX5EPuHfpLjd1u7G32N6nfzymVqK4T3QyNGrTHby",
  "key8": "2LkfxxWE2Z5qwUAFcoCrTejNWW5hjBXvUeHaHbGZwQMT68nhYnD76N383xuDJjjZWnpra1htErmhW5LyAgUdaZ6r",
  "key9": "4Dj2hHoTgQ1SuMQMkXaWvhp6jzaJcYjS1SHw3StT2cm8fn7cAXM4m7PfLzjL2ZaA3HzdidZjzrEfik9Uj6J1jzh5",
  "key10": "3jfgDGHyMqPP8x5X4xg6KDbXKnyy3rbEDCTzioeEpsGR5rUzGNbGvjrcs2t853AB4uBi4LHqHyrGwRJAABhXYi86",
  "key11": "3XHh9bm9U8ajPHXrWp6niKV8wCNcohdCTd9Xfs2M4mbnDL1VqM7gHgUZkhQYPNjR5mhJ1qhWhihD4DsoVjFXqZU",
  "key12": "5jJocL2GQqRw6V21rCYNoXZGSbtpu4UFhsmcegafnkCsXs382eJ3NyPdwyRtZJy3vAARUvvqLVWVe2MDPe5kaJYo",
  "key13": "5toSFLCGkw5ZQ2gmQJaEqPBuPifg1b2LrWumxCzLVCna3HcQK6WPXoFRdW18UAgfdv2VQqav46H5SArt45BXJTLg",
  "key14": "35tEoGgkocvdoxwjuQA6f3JcDTEFtDNAZ7poYtQAUxo8sBcLNAc1tukELFssB16dGEYH56CE6xQ8do2BKDHEmB7t",
  "key15": "4sYQvQ8hw6e3NdpQTjcuZcYwdDC5jQB4aU9ceBPTC1tTo31z8Nm1RGS9sZvg1Yxe7YXZBS3gfiXfA973mtU5RAj5",
  "key16": "AC7NkQEFrrZBJjyDuo8wKe2dLzj3qoMg3SouKiS6W1X4Jfch1FwEiynoKUdoSRxm3sWbcnAnH7m3foUsHdggZdV",
  "key17": "644gN9rL5HEwSDV1dmwiQHVJdMoQsT5ceVULk5mz4hgLkuYJ26WHEuVxiLMRYGj2jW29tp93fsED1rt2fVtMfW92",
  "key18": "2KyYCFa665wQBidsQrP7CZxg3dfEuE81n6LTTNP7zfu3VcM8eVcTkMcoRDuMSZ9cqmxubY49UwJP5wjLu4z1Khgs",
  "key19": "4jJpdsavcd6PWnAE3RK2x3oBhgqi7A6T2vm7oLzmnZZP85tDohGQGW8YjPHim1MuNZJg8nLXeUcGyf5z2b9CVWzD",
  "key20": "4qM64vVrUuuZF7j4RF9dx1ZdoDC2yzStZPBxdmvvesEYqRGFCDcVzsHRbmRLPuiRgCfj7RLFpV55V5vhjdLi2adU",
  "key21": "arYje2mJdBHCm93zELAh3zkUF6vupWHQhbEntLc4spLWHvS7ncbwW5vT9LCGZjS3LDbcXPQdsfAT4D8CjmDc5uL",
  "key22": "4eKgzTif28CeKAWmRGAb4yC7piMYgAMuVd6ksvnoT1MBCDueCc8ZcMsa3uFCu4zWfyXy9LbAhzGEL5mkSFnV9PkT",
  "key23": "34wWahBbLVfiPUacAhS3d6XkgyPSB9LmsxonBZQ6vsKD9cmnADfk2oYZ3EscTfCReF6A5ouKK1c6fwiXi88GswWK",
  "key24": "3irtj1W7vbpfYTZqiaAE5DD44rUytvNCauwhGbTE7vcceCTgvN9sXDufr6X2pvDyQhwW6hbLH7vNzRG8i2MS3AEv",
  "key25": "nKoXzZNsmzRWWBrwD5L5CYx33MH1BTA9ZBtZKckmAgWme9eMCrMYeHoFHvBq9eckVVTr8wQntWxuLMV5eTcbh2s",
  "key26": "5NmokkiuU9RDf98GEQsDt8CuWidhEVikqxoRYsCpkCbt9q1scXD6hjW3MqPT6hNAoRdbLG1NfZ9SbXYokKPg36mt",
  "key27": "2wE8p8USAgsbTi5ub9F1goDaQg7ToKVmHpRjsw4ZGq37hmdbdo1ZMjpAj8dnUeV9djq6QTHDTWBcZHnw5X61HEaT",
  "key28": "2r51SDn6q9CGAU74YN8TMJfw9Qt6HYgTAV8wA3nwjqFicNnGcaFSTrJCcapm4r95naUxngCeS6nqxQa6Q2tXAoRQ",
  "key29": "3RYqj4PSqzzCoSQLifuM7BVB4o4t8NYmf8Hn6HkjDx1u6EmhBQ2h6M5eapUoa9NEt9evnCaSUd4TFwz9Euu6sbNq",
  "key30": "46f5BhPsEFcotg1cU6resSCU3Pga1sQixYXzc6TYGgMva2reQR5ZD4UVt9H6Xh8WJimxBqEcwur1UkuAa6WYTCC6",
  "key31": "41D61qcqnTi4CqZz8qxfniJQ21vHTy8mEV6vDR8EtYsTtcd6QRPkQGWd64jvvWyQQj7ivTtqTohqdwh7UmLc5xwW",
  "key32": "44nW9c3dmdkwv5kcfcrfaQjsiCuM2RiK4iGZP2sZQMwa8qEGBx3bo7qgLqAe9gdMso6iEDV3PoXsVVyzJhrKHq22",
  "key33": "21B5seEJS7P8qFpYczLXN4drmdMVaAMgNbq5X2Dx3UGUN2fjw39Z79UoZ2PFqCA2TERyAtEdjgno7MxEdPVt47di"
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
