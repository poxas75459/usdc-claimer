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
    "4aFCLftoQkTAopeRYJ3Hn7H8DF3qZrDrR8J7LngoyFc8JuXbvvWN7WopVfXjdipJmCCJmdJpWMhaLCQRxT9bR9hD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3a9wmBCTYFGeoUsXS7XGW4VmtPa3NMHHgXhXuSwXhGN7z7h66wjpAMSAkfYrNvXz9mM86RGUNDojrPtPoBeYWGXY",
  "key1": "37ZhUPr94n8CcCeeZRP7PeiUSZhJpB6eZfxk62W75zUZDFaH44TywENeyVBwJYnntjWbX4wz8aCZktw6QzdDrqq2",
  "key2": "24sjzb9naVLTYiWC2eW9YRdhhJgJJBHSJXkq5NTWz9mQVBTN3wr7DSzT3byz5ersfU8rHExeWstHrqaZa6i4D2Bu",
  "key3": "4y6A9NdJAj9e9Xo6Whs4apxtruqALaWR867WH17G5EzTYJ2QvaLP6aUcR1p52K38j9XVJYBjVqinAwFrWxrn1jd8",
  "key4": "3fAjM5SRcoeMcpfea1aN72XeqEz5osKB7TWXHbjpPeZSEXupVDHsAqGj7NViotg3zjM4EmMRW5kjv4arvSy8ZgJp",
  "key5": "3MqWEDa1tbpnawKi7WdTPWVEWDxudHu7RhFm4V76i6CBihEycyVJGmiMqVQJwjeY2GEtQKi1H9wgRsuFUzJJiaey",
  "key6": "5EJuWHPpYuDRTAdUpwKiHCq9vHwGUYeZ4fiseDQEzCqrAYodkodY429JNA46hjFy1MF6dPEnaVBKZjUT1H6fc3Wk",
  "key7": "52mPLR5G7tR22b4k4xv2pBrF5wgbm8gVY8uRHJwyGzHqrZsFzFbRDsrZMo4CE2QsQFPHR4wpPH5frdcYDG1zG6SJ",
  "key8": "3JY8MesTT6KLSo4RKCky1RQs2zrw1DzAceYpBB72AGNAZ8NeuGYE14M1kSqhmb6ghb5aVMGQ31ZSW6eiHJeg4td3",
  "key9": "4DDDDwgbpKnWbqvL1Ug7XMCAorHUu4EJqmodctXdM2ziLPXEpPVykRkdARXzKjEbXfX5e9q8y8KULET3RESGiKkj",
  "key10": "2vBxsEwQn1J69dyTM3SdXLUBE7baGA56p3GMvfGdxjznnV95F1SCgsJRWhsFDpfgTrtXEh2zdk3fEpNwzs3DYr9k",
  "key11": "2VijmMkpwkqCcAKP2XXQ1o35WmLbr4ee8d2UyZ1zBhj9cvzzgFQcx55GRxRUHv4s3UqjwZoxK3oDbBK6QDSNqAXN",
  "key12": "5py1rsrxQkt5LyriPRFuqa7dJUhZXiTKwHrCZweFwB53UfPW9VxfaqmX1PaFDoUsy17jb2tq5ngCGqKB4KDrrQB6",
  "key13": "4kmAmxNTrjPARh9d75j2NvdhKoBGsZdFW5TrsPjmKb5Ysx4wA95bM2EfsbNLjQs7A1AAnXkw1fcy4nDGSiCBEWQx",
  "key14": "2VBBcfQwyNNDLtx8a87Zksnj157mtWtq4MnkNunR28pgrFUaRxFL6rsx1guiMD8aRgkBJBtVNCJ5pstPvSN3SngN",
  "key15": "5cGt2yf41Bhh1CPhZ1odetYuTn7Bw7gvbDcfBz853GW9R72n6rQXN1peCBufcQ8ADmGJqV3yF2XiyaKcKA7CPVGL",
  "key16": "48b36x7zTu5eaSt5Q6hpkNE33awnLRXhTuhGdXweAQirLZ3sCM3AFGqJ6SZjznCrbMtgQtFQms4BZX7TeB5TXQxK",
  "key17": "33YsJkgptnBk45WnZJPHZUoDTERGmAmHSPZGCmszH9E8deQYdevbfeWCkEMC57yMZuABJNyqV8EiwzvXJwwF9BPy",
  "key18": "3Cn8NrzMSkdntySNdCSe9D7cjxPP6YSKV2XU8Z8zoLDDqcKSFR6urDMMkUPfpSxMVhj3SVFhow1G153Ms6GSZCxx",
  "key19": "2xWkdArq55c77nRdYWSmqa9ugivoyJbBxBR4thFDKxMjFHW7ZvgrhQM8r3N9peAqbrHSeyUjcnaFWsCkJB9F4YmR",
  "key20": "3wqFrMefan5HS8wgm22ACvZfkCRM43a5MAQqZATix5Hj6df61p3wts2qnDj255eTGUpDButccNZHyoT5gfTTfFjC",
  "key21": "3Tqz32vVboWeEnVG7JaFsFC47z79AKpA8SnouCH3PiFHn52nbi44ChjhkZ61TFHK5to3Dn7sTvRN9pPRLxqypxjM",
  "key22": "cg1yEusn5Nq48RtvreaRGDkcQVjXsNveaiYFw7Nyg6FUFnTJqC3v5u6sG762pnumnfx7b8kfZo4iCVTodDFbS3P",
  "key23": "5Kvm2nE6q4RBtMNhn4vbCB15ccNwGnv1pmuDsFHWb4ymCZjZnqa3eekaQE3zXjs1fPJzNHFNT8oS1LP3eU1T1LKk",
  "key24": "bbxUALvSxkDsPP1h5kVPz6m4vFWgTboXzXZXJSsLimGeLSNucHR8URtrpuFipyujGSAcZYTtwhW84FMPp78xKs7",
  "key25": "59MWwYc1fY9W2HbqQzkY2zgHdsZuLv6bSj3QM5HAWsLj1EeTos2PuFi3Kxc5DL3MbRNozn2yGFj7abtonk3eLQ5Q",
  "key26": "5ySozwQtuxoMTFhED13iLQUiq3J1oeAcBSYsSQMqfUuAqNYo7fspSCg9hGvZo3kwpAnDpCpNerF68uiaqHyHDA43",
  "key27": "2KMSAXcWD7PCBjGkJGztYqoAXuxJLSxLpKpbcmHfzSiUc2fCaZeVxsz2tAPEuT7o8hNwG2XFeejEtbnPtuaQqU1y",
  "key28": "2zMts4HUAukBKtEW7dJC7ooj1wqywDPqDAuGaXSwCLwq9ohut3YuMoA7cFLYU459YZ588wxNSCBE7M2v16A8ut7n"
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
