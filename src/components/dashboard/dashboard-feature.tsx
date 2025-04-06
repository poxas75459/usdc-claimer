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
    "2X4ngibnSQmJu7cQHDQS3om5VXxpvDbLWNxfb9x2aruFQ2rcbxBDTZamm5awFnhkvwtMvE11Arnt4evZp1mrManq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eo64j3HAq4X5pd4EqSH2an3vz64GsJ1CcykHze1Q3X9Uo3acr1aSFKkBfS9CicuVVnCe5uJm1kdi7NFceKjTj7W",
  "key1": "5P1gV3fqhMoDL453NMaqejzFDBvFb6W2xc8Y1vAuJRpjKpm11NGNRcZZCLGJGWrmqQqQTtq352VbNCoYixi5amax",
  "key2": "sb5tQYNEjv8gZw924AA8hXB5PehxAquoFxX7QYy32X1qsGp8RSnSfV4SWYhEX7g43sp3y32Z66vEfUAimdMsKKf",
  "key3": "3zP8nzjCZEqL1mW5ZXVTQhdnbUFoXb8DYmiSaZaXz8kxLsqKtayafK9zJ3D2XhrugJBSRBd4TGo75HujGWzDZUro",
  "key4": "5kQfEnXbyiZecnV6mqH8h19f1vwGvEvNY4qam5FAL5S2hnAvYsGBvk4S3fQ1rqevo5ghXPG7XCkuj57YkvMt2c3Y",
  "key5": "31KmWrd62JQ5RSegaqS4RTvauuPPbbxiMVDgiprn17SL7mJkQcXPfq6oHcUz52vAM6jVBiavuCVwEbXZUGNfWkM9",
  "key6": "5UQetLeASEsv9eSotBqQg8RQia591H2TKnNew8JQjH9TUwR4T81S5xsABPfs8pKik3U2BD4tz4YjdvkPNikAcGhT",
  "key7": "32g7ETzm3pJ1GWeTVnAq2BXFKPTah4cjv4m7KvbvQrZDDExVuuy6gmpvyTRDG6HfZtzyANanAiTVEvkzAsDDYrBL",
  "key8": "2wJcbhFBDoSEi35SRNcvm6U3K8B9ySb6jgZTpF7fmgAhcuvDfaz6qd7zEGF2LzPdeRRYjb83AfevYoWD2RLNdB7K",
  "key9": "QkCj1fpJxzicxiGZBBtMjZqVe8MQ6CWhyXVn2gEwgSsdrvECyxRXkMNthcUZt6c81BsqK96H2iyQXgsfEaqgLco",
  "key10": "yfdMDD8vwHPpfHTHM4ETGXHb6csB3ghpfSQoPYQM6oTMK32ZhsHP9g8eQmfPVQi4FeJ2WPhaV3HvL68fQXdRmXV",
  "key11": "ud9BDAWEFTE926kgx5pzoTnwSETdbmK7GmAHRexQPJiffP6RoHZWuDbc48JxewsKid2fS2Eu9pc3FCywGoBJPdB",
  "key12": "277iqBWPFUQ8dVutcjpdvGgXyZ9z6CPkFgquZr8oP3cdsLPBzp2eBcXgWwxYF9ywdwXJ2xz2uKkFhhq3tuFRStZM",
  "key13": "4NbQDL4gQZT7GazMz12BkiKz73NLsqimCMb5BGi91wonJHjn3so3xUoovVMVNuQNJcWNW3yiSpoK383BNypfdmpD",
  "key14": "3AzRyQghauXa8QPsK4y9uK9MG3183BoH2mGPeB2B5EKWWkJ8wrt9cYKZTtGWrZ6pwGdg67aLfLd85JuDmHz5HV9Q",
  "key15": "5akdB1nADiz7BtoT4RqsRrtnozGreQCXqzBkV82QgsUFRG3kyGoVSsWDkVCsRV2bkaC2QqvxRr3cyp8x4CFofLaq",
  "key16": "2KTcVc2T7488AK6DxAdfqtSgLYus1mPy2ejvKhVRECn3EKCYPpcdiACqkT2hDa2djH96aX7n4PbyYcbEY3iNscxQ",
  "key17": "2ZCR5j9mmJmPwYnAVbHnBzFkKAz4FhTkZTLvjTm5rLYutovagwoKkePip35KCPnt1wczrJ2BQgytmKeEHqj7FtD2",
  "key18": "3nnTZPRjefvSx3LRaGZTDKXX2wiTe78XuyDvrA39FHCDbZerFvvmRzJf6CV2mAy5eX6AZaViCY5GRc6Vq4bNDJWj",
  "key19": "hMAY1t8edEaoXNoT8mAqhfyA4wYCjR8xfKkNsPMr1LHHjWoQFtMzsc2b6uRLoGjBrZ53mqPWJoWQnHdcRfoFajc",
  "key20": "ENovZvgWeqkfKnbaM6m1e4dPUB4r5WNzXU1rK9LMvJiLFtuaygcsL9vma5nVgSLSP9uLicjGi4bD4kUdUYjbBWT",
  "key21": "4h1yFoZ1t7YyRQgkbHd5VQxhvJ2anaJDkssxK2HE1bu34Q1xktBggAVQGNeZAoPiPTWSzq14S9cSBLHT1Gsr2YmS",
  "key22": "4uW3xcUtuFSUKrf9Lj9axGJ8orGceHMtSekbAtBJjaPBcbaDswdsCou9JzjekkWYtZiMqs8ddYGZ2huRzrySjPxB",
  "key23": "34bbLNzRQVRWogPQwDE5KzsjDSQiJMVkWdjUM2YaFnnGcN8DT7MWMMU28db7UcHrFkNtcGUxqiLAKNKWejtejFsb",
  "key24": "4efgFoAwPT5MCCMj9H7UB9GbLCwKrHsaAupBd6zJqxzvUoREEewFrm2CJS2eszzkym3P1MdrJHwZM8RhZeKXmGJe"
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
