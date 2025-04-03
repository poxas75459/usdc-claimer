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
    "4wGq1yaKpuS7KvYUejaVNmrF9LBLngaZJSxWEWeNzjt3uC4LqQNbvqSXSZhcq6ZDwGJwxyMc4M2Dau1CFoFxYHwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AWbJN2Q7ZxA4beSqx4SZuoVrhSemi8J7L7BDd16Tzfqxj8iwrP4FBZyhvPiiL4SBaxUghwsuSGVHaRuqybcDZLW",
  "key1": "54ySV6G94uvkZLRbH1vd7GMF2yMbnCbprtQ2G4BxNsnnQfzkFryU6K2VqDM61nfEraSkdHH2SWDJY67mhubrtRKu",
  "key2": "kC2x5PPPUaLCTyELzK2EDXS5xKknP7U1JxBSKSELKAdsBU4wYDhueWuK8c42ZPiDeio35aYYsdSJS2huW6GUW9C",
  "key3": "3Y9ztdEJVMasuDLuMABjGwgkVB2fnJLaoSF7ii3yt3xduyVXmxUFJJFPqwaNa53Vn3u681EG1v3qK5A27MqUj8A6",
  "key4": "4TkkGagQ6WtStfEfXXZd7z4GfBgcgj8dZf8qMPEwhrTPTJCi5SLWsUKy4b4kRAdxMGH85cgpyHx2naHRZg7F1MQS",
  "key5": "3hiqo6M8GTZvdx1E56BcqAUjEH1NSTgCYVF8J4LE4xQnZjCHkQfXWne286y9MoohdKsSMZ4S33TwuxwWhxy2FPAU",
  "key6": "tG8ruiKzCTdfpDVCe3T65YRRFPkxsVkcavijMMXguhWW8hxLFpBmsBqwimfcR6hCDUcwVCq6drA5tDzTcnjKGPy",
  "key7": "FNAXq5Uw7C3LYsvutLCZzDppGLqixc9x9DiHcHoiYbLspgLY1zivEVzd6dcQrscGgYwbn9M1KDDkzAVER8T6avX",
  "key8": "3GTke8V7vSc2V1ptomb54s77asafguJGfBdUKKjs8GFinoVMUaXzv3hrjRHFtvcfyo5TB7qY4QZB9FR1e68DEUar",
  "key9": "4rgN5dQJuF1hZhJCW3SK8Cek77RZtrCMWqNNF8AbGzkkpvqLQcwhssHhF9pZqfvWeAD3U4igLUfjW6AfHw8iMNx4",
  "key10": "3FQrjqHrxsGhTG9QpWZw3qQRGo7m7Q13mdy8ipP2r3bFpwnNc2LYyuqHzQXHZe9ZAs3yBqbt5FhLGTn1RX3ka3S7",
  "key11": "48HhxiT4ZusgGEcTqD4UTDApzeKHuXgXxhzXrYPz8MDGoHts7nTSYocrZokDMSFpKPbNQxEBkMTdaJNoxdxUuEqD",
  "key12": "3aqkDnWR72HmYwaaH7NHDhoKMhBfPJzTNYnZ6VLYcYuQNFtdGgLFWpqZftPUEcbB6WyiFVPkyqyzkCgpy5N36Wvq",
  "key13": "5ACEGJoPhj4ZeNNZ8Mj3kseLCRJRzvbNfMRmgmgeV5eUP71Yw6eV7DHjavuvHNc73GB1ai3jd2vavaovsD2BLYeZ",
  "key14": "4P1VvNn5b7U3jC7r2Kg9eaX7b4Ngfrd7A62wFVaZssC3ErzRqwfN1JSy1RpMqm9f2DJMoiE1EFLNsNyBGEco1u6d",
  "key15": "EkoYc3RAevCqxVAwuEiiyKt3a3Xm35nwDD3tnQ54P6snCJjGNR9NFRdrrdYm5EVaikE9TptTDe2sma49wJ9coJ1",
  "key16": "SsVmk3AeKUxCGwhFrv6hcQex31kaYxMwx34HuB8zRC6dUmB2p9MQsXezqxX73sMGhzTEDA8mivTNFJfPd6ycCF7",
  "key17": "32eoMf48ddFLEQgh3kQ9mNMhTnFWydk98BpcGJVKe97ijMF4S2ELxJYFAiz13ckxEL77S7PmcteaeAD9tcQcnDtP",
  "key18": "XpcmgMRRgG1idtfx5Rtpj23kjHJ6GK4GFE3fZQDjY8W64DskrAPhjERfDCKkGLGPvdYb9nqCRf4DvAPfKFctGqN",
  "key19": "4H7Xv1NqsdTbpgeUyhx7PYM3wRyPkmkt3sKQHCz8bWqoAJChjCH6f4ig7kbjaGYtA7HJb8D7JuMYdWypeSNfnZpQ",
  "key20": "35P4DB5AvRavAqU9TiN1xvrMFbzEpzyAV5tHnnjTnbRhsnpZA8E1URwsrGVXwswB7tZadPXFAVkR62fv4dn3Hg9Y",
  "key21": "5qnoi57Bn3VVWerjcZKTVaELH3r2f8VZ1qMV4o7YTri4FSr8xx7JTT3eUuCDBxDvhZ9A3G45ydcuaZSBtFf2EvJb",
  "key22": "4zQkecTCVYZwCnG2ej235Av631bPxsS6omj8JD71gwiE7vYa2f9eFZpWstsQt1FmfBUyfm2U7jtaABiLqmn52ihS",
  "key23": "3aPbJSXszWtF25L31tMU4CptgPVEGyu2wGphJiU9DatE11mvSD566vPnV2ZP9xjsedQEMsMTrpVxkzPX5tsZaHFL",
  "key24": "Vosg9ZSuSBaC2U8vGUYh6ooRNWn8zGyViXhJMK595osUkkeUF6Y6EkutsJQXYUN8rH2BY3QRAAysgeDF8rWG1YV",
  "key25": "3TY1q7kn4PhN6dBUz3MoJE1sRhzxRvRhcnGVs9wBqocPGrfy72HQrGM3CccH4JAgPqgbxPva5Tm46y7X8ArNJ6Rs",
  "key26": "usgRwBWwP8xCNwebmoSPbUAjyuTem1QydVX5YBu2Nqj3hGGKCjikJvmZKkCvUXZPHsBRMdmJdWy4JPLoVaXv6Vs"
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
