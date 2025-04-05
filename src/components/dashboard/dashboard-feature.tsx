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
    "4GzxkdRUcAFCuL1ihA7C1PxVtaCEzrcXyVTuCHKke4nD17TGYXVBVxqXBkWJZFpowmGNqDVgpkcyta8JgKMgkLQM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zwBxftYhb9fsSti8TuUEVSASc4cuVdmnmizMvZ5C9aAV8GucYXfyLJ68Nq5zSpBpMtiGco19u33aSbT2xvWrN2C",
  "key1": "bGsCkRJvpEmAje2akZpNfr1Ng9VCtPi5RAh6bGNiMTRhUYG8nyNLYVxan1Hm9fNTJsKb7kW74FPY1AE2mFnuT82",
  "key2": "5NWZFsSbWdXzGL4zXiNmwnZsXLZQbodA7WchG8Fse7SvdRpD2i1w5apqxk7QDPgFSqB6gbknxZkGYmJCVbxbguL7",
  "key3": "2PbB5HzgdaR28STWBWAqAHnuL4pfb3obARPfJwkFj3nAVXfhUKjWtiDVvA8Vezfmkag2CxLkF48idBcuHuHXFQgZ",
  "key4": "2Vsy3s2TKdDbRayJukLnyQE3PpvaZsHgzpB8nb3K6wP6dAjzVxo93zy3cuEVo5etkbngMgibFmWgnyQjVZASjS6h",
  "key5": "2kRbpBmxf4NZifkLYBcK1ZfNKseGsfpgtgz6JxBcCzC4USmUHy3Cy4gpfNHbaNGRvHitQT8ooSn6csZC8zW5Lkkv",
  "key6": "4XwH4PTpgyeA2fDTVYWkqAVNgwFz8NqEYPqqx1kjMcktg2Wo9Ams2PRgu5hNu6jh87BLX4DZzc9YMjqoch2irpjr",
  "key7": "grwMNEkDh9ca9HuYkfawFY1xLbNEx22ryUhkkGpLhG2wZzvAgmz6jXSHAnznofzFUHBkeb5MYGx4G2fzcJKoBTs",
  "key8": "46faDrgSEPKEaKp1mdTo56iMxwedvNBUG27E3bnd51Cfd9J7CVwoXGExQS8mB7GuS52DjRvywrkwzv7rRGD3hjyy",
  "key9": "546s11e49epzCNRRkBptdHFXMxHY64YbctifYes5exag1y4rWTowLVfD89LbHGvAZsgLd5jnh3QREUZSLpynGFAG",
  "key10": "3vqrCDa1jCYzbcpaN117YPhACY2Et4gHV3SFjecaGmZSs4epCq1tzeaqdZkGG7p14sduGrDiTkvZEtyU2JBeKhxZ",
  "key11": "4pZP8zteLfXNxc5innbdTMc3P3EypHUTZJw1oL83MNQnzB8m2gD2jRQ2jS7sGKxJbfRkhL28XhdJbqKyqUCfdRYg",
  "key12": "5MrBKJcUcSCH29FqpW4vzeqy2u9DFKAmiqeZGF7Vt3nm1fsV6TevvUxrCum6fHoJRBtYdyejeJAq8JAXjMSTfxxe",
  "key13": "4s2jyt46aWkz7qRiKLhJTDCkYeppnKjdWcpJEL8z9QM7fUdELKR7sMuoeCgNi9vucuy4NJqQyZRNhW7DkwPr1zFh",
  "key14": "mXpAdqBanFz4VVGwY1M7ETzxH9iTb6q5qBjroreAUec2Tk8nj4b7nhTc1c7sBFiQT2oMM5Rux3EQnPFL9jaFYoq",
  "key15": "4RRACXCo3yW4FjSGk8JdHjA7EaPLcsHenzyavdZZPsqkQS1WjsPiQHYYgicYYZpwBMecbdjhfeKNpLs9LLJQdquh",
  "key16": "3sNJTP26ZujSwPKvsAbyQQab8tVMu27bbsgKR5dnAs9CwPtTzKeRNYyQ1zG9m2eQvgg7TThMPVJvVc2VyUzkXQkM",
  "key17": "4oDX7xDVZ2XkpfMqaq86phA9BMzDqphk5KoaTj3QHqSLWiuipSqr3SFkDusuwzgouBhA3QMk2ERaWfhyRmUzMYM6",
  "key18": "v2NQEEjFxSWoLcsJeVGf5FzMTEh6Cpn1VajwQdELr6MuPEqx5qPVrxWqDDLGZWoH68kE9FMSYBGeied9L77JcTN",
  "key19": "2Rj9MCFah3hE3Du9e377GJu4s4grqKHkS3ypSpZP3Hz3UiFfGAsXXNEehVwFNqfir4zjwigJgXWobUoTRvEzRWWC",
  "key20": "4G7TbhQowx4f14tvBzd7ibPjaFoqn5UkmLg1cRqV1geFtT5Z7zLc6vVU3PUUwszPFuGdekCvRAaUeTaLoFc5Zus",
  "key21": "3aWJPBbPwbCyQbxBcUGRgyQjUjLvYCUNVe2rCiBKeJJ4UJcoDY4o6aLgTZhddvMiXJLYknNDyA7CnJTKrqkcVuKi",
  "key22": "tTgvB166mGh1dCmvFtoAP5xQNYL57VgeAkqNgWK4jPWHSp8kU2LzCx7DxCSwWLtUBGbpkfUFXKW7hn8hYgvU4RD",
  "key23": "28ocx1iKEbXCx2ra1vbpwExbwNH5YYsDRQC6v9LraN36sgoVcJYgoxN62nseGD9r4SfgVvZ3PfVhcwDbshC5s66B",
  "key24": "4NDTxbxsrTnPejs59FdUxiPhZGWaekkhW8notXa2pXbjyDJXPLReY2LcDzeoNRsWxWr44TgSiyoES2H4t6AzsBLX",
  "key25": "nrAZPpFyWB8gVz2VfPRnxKZGGt4xzcyyGdKnfRiBzNLXHEeXepwkHkSRXveakMJXspb2GctKWeFy5GvHiWh1K21",
  "key26": "3ucaXQcFFTzL9Rmupm2pD3YQr1ABjbvvawGwqhgVG3Fpj9vCG4XJD89TsynKG1ny9AQ38wwbsZpQqqoQaiLFPTNX",
  "key27": "SG3cE52nxYvREvdRNgiTNExLDsj3BY92RNMUuEo829mV5c4bRwRkJfcHCHPxpNkkjq9GtoD1KVkSvRNe2kJnjG4",
  "key28": "5FgifVwSgKeJJs2kZ9BhxoeQZ49H4yx2pU7XNEJj5n2jh5RqNsS6S19N4jMuUwmxkprHWxQoLePe5cWW5tRRUeWW",
  "key29": "548sAC79Wub75sgCJHMVEUKkXRLvEbB6waob62s2WJHypMDgFArtrAQMkKCLTm9SDTrFpyZSbBowvhzgztkHHos9",
  "key30": "21EXt7WvCYRFpyjRL2RvtuE2VWRWypT2MnNLziU6LjndCUNNSRAxL3fMnYzNcBKzfCFkJMyiMykTMs9quHjFs3w9"
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
