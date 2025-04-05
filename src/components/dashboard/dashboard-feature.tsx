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
    "2RvK1nKA1mugYr8NcPvkcLmhQFPdjAvCYVcykKmCe9MATLUwbjVmyjHkcxHFPURd9iJd2zZAhDytPhNd5UnSSndJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fxfnoYvuvL2VpgZC1gbgDSVHZLmSYi7BkXXpt6m4XJ6XTJVBXoZydcpfQA65cVFFz26SnGV1qJmeR9c39eXYELS",
  "key1": "3SUDiqti73UEDgvgcocfhBYvrcijNsgCh4NrmKmQv27rD9B6TaocyvH9SWfNmjFgnZhViaArS1GnKPSC1t1ZweQR",
  "key2": "25VgU9GwXbCZdrbCaYZv38WZHKUNBZ2DnPCnYyeUKo2rhj9oxyEqADHtTXyREj2DvEp2YPdz8fhzL8MJAco1KbZ7",
  "key3": "5pzoMUWRUAJf9CtF6Uvu8U5UEpKC2G4ScgHb7Wnrbk6qc1CxenFW2gpKCxoU9m4Ukx4mp5kXGHs85a8D2i8oFX9d",
  "key4": "jNXReqaMCHM8venZLzBTFY3tNWeYw5jgG6cUbsHhhwfWXCdXzhp3Y81SysUhtXdo5uDecmnJbJfwL5XAa2XKd6F",
  "key5": "M3cgfgdgkcFNk1FGBrQf55vz7UHeDBY55Mexyjc3vZa9jrxoEjQDK9e4babmdXej2EHSDCbYzYdhewghiStdj2k",
  "key6": "37x1uLbyKxVSgbV3uca2pnvy47fU3Dq3PfxV5pRERi4RVvAg61Huofk7PEmqibghApRi692oKKA3bNgPvutiqNeL",
  "key7": "bJieTXVufGEbr2iBXpgSMNTox1x2p7AUXGXBNWQE6aKH3Fr8F8yoZsGxFTjcsTVCKPbGNio2QhxghkTdeX6aJaa",
  "key8": "4V9yGN5aGLxunct2B61vhMbpsqHgVGjJsVrTyPwr35R81PVq9rJeLwoBkB6ZfqLDWN2HrLpw5XA72HsdzXdVQUCv",
  "key9": "pV2LTpzU2VWm2yCNbtfDt6hdErEBAGv5XYZnNYrqhKKRhaatJQy1PNTSDaSHpfQP5eTqnyLjaH5F7Z65K7oEnoc",
  "key10": "4Gyxwp21ZKgEMHrYwVGdCzzVuB4XCTFTKheTVGoehQDqKcCb93iqBUYVmv5jyf1BtJXXabHPUPuNHjG2CGouNvSc",
  "key11": "3XtfbtsgH3a3E6CkNEvPVBQNizGr98ewvanzBWTEFAEaysb147E2iLKAEcAtnUrRTr487n6UHZ2Gco8PbexnbV2v",
  "key12": "5KfUL7qq47KB6SYBARWKuNiYyGt5c583bQf3xzERvgddQhzutYzVrrpkNd939DhnmPCoM3ffKtkK82gHbaeZBEM7",
  "key13": "XkB7xrSy26ck98BD1czM8qktvQUr8q1oLVQpG1H4Ld2euWX15fFNEtHuUXsFZb4jpFWU2fxByWyVZfwagFqW4dT",
  "key14": "45bMF7RKzn2JHwkCGoWcMEHDtUi4Wgck8woeve7epf8ukv6NR1VTrLAQGynw9ZmVTNn8R9mPW4HRgJyx9CNkjdkE",
  "key15": "JChjShRLsnwNnjiyDFuaSN9tAC3a3H7EG6arv3ADAeLJaRa5hMxBoJaU2DonrSFZqUkpS7zoLGJVKkp9RHrkuzr",
  "key16": "2X2uzehPfkfYAvV9ebkBYuzP2DEN9KALM5gHFTDi2qpKYBYBmY2i4DN7b7kUwdXheYsD9txUwbUFk4ybR95NWMnc",
  "key17": "QvcZzAUQycqgJPVT7KbtbqzcWoNTvzwGk2EhrhviQzVVtVq4CDtf8q4CVfN7TK4bPFheFStQhLTwztFNCTdVDei",
  "key18": "3zS4CVCyNBGpyxGDjNQh1JYHYnm35y5PAcFRTQH2jzePYe6WEJrMDrLHRWmE5ysD4QX5kvApLrhnT5B82CSEGQUv",
  "key19": "3aeFyrSKY7vZz2drTjEpVLxgb2h3phXpfyzwbcmAU42KiswNrGphgNhKVrA1S4fyLMjtvWPP4UGyeyW6By1re8AK",
  "key20": "W9uKMykb6CnqG7p6AAjbLBAcXRkvpQTKxSiuYxbSS58kTGnegtHawrsKYzkN7BRhzR2n9u4jitDrLH6oRV86TK8",
  "key21": "2rFnV45yPnBRKSJXMRrCvgJ8Mc5PDGe5AdVXeFRkWpMGYAd8TtwPYCpygjgFLb3uHAfxXXKtbZMK1tq3sey6LNd8",
  "key22": "35HbPWEnP9XcjhA15tTrXaNJKUz9yy6FynFfsxULtDsmBTeNxbb1MvHqMFXLS9ReU7PikVve75RdmeWapnyr5E6D",
  "key23": "4GqxDsqxXcLWReCGgk4pcV9YvGPfbdDXBxXKs64ERwDC9gAzJRKbAs6gNMME2WZCn6VW2CwLNTCGuF9nzsqZckFx",
  "key24": "PCLBAYUxJvjqjMpFbq8nCM7Zif9HmiXCT7iYJKDN8idVifWWQWecv8CgGheJ7HHprNnPbG6DVka5593d8buWXkg",
  "key25": "2XTWrXLZNuemA2DQRauni6yJ3ocnmqBneZEPXcxEgnawbze7BKZGraCuUZYQXMuvv1CoFmR1Wt1URm7Tke33QYnV",
  "key26": "3hm9hLU4FWDZW7ygN8U4erriuuMH8F7LJGLYMddQsEvakhcakgr8Hd37nHEoaBuUH3VVsLwLx2kYLCCE98cziiyT"
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
