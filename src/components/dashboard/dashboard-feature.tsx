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
    "2mmzFA8eLiWiL15NX9S9pZ2Dz73MovjmKPBQm4uxHGZSixv7Dey7jzRdjnDbP3uyTfh9x83ykUzZddEbqzDJRHUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4njWXyPqkKL5J79q7Cn4pCp7HuY6rbhV2Q46sCdxn9LEkMobv3WmaFPrb97jkFaTvBgftSVxCpnsbATTx42mw7BT",
  "key1": "2BJtZ5tRCrScUBUbSRYo2Bv5sKm6sJzrpWKdGxaHAtmDWUaGP6AnqqCcvh6T2UtPJQ6PzyPiYgQ5KzMqbgivKbjN",
  "key2": "3oheFAizMWnK2yMrHNdRVeuwhfpoHMguRvd9oUpmK2mpw7c3JU762vAePeRgfTywMCRHnvWpm1a3cD1ibRMWrT8r",
  "key3": "57jHRMi3B2yuVU3thBpUyffvkc5JHiiahNiTFfU5ZH9zRho9Za9GhqmgdSc1ZssnQvV5r5RGV8hyY8tGMGd1R1ux",
  "key4": "3TDU6KkhRCPmhZ3kNewhBncLw3Bs3RvhYvQDtMS4KsuPK2FAJnKStLgGykcBwwV3tT8uRUyf4KxxysUUUv91bF6v",
  "key5": "2tTEXrkvWTe8D5tQwjFxoXVRUyf4haAqpx82wqDcxenfucGBr3FLjWym3BrVNK31SPcZDMuFDC2JjtLVDWRae4U6",
  "key6": "64UzVSGvZ4iAuBU1as2779JGcXu5g5u4xC6hePCdNap9MXiss1EpCSDKMuUhCPL91nmmPJeb93CxYHgBABf94Zib",
  "key7": "2UyrvVYcRHH5yRAk7gwrESGUA3HHdCcbmWRQUkUQ8PNxvsi7sV5QAdupm2UhnsWWo3nsDYhJwdQpH8WHBq2EqK8B",
  "key8": "PTgRTwLR7qDjL9mQDGhf5dsg8hrukAVmvSy997UhCUC4VAdnhFDfy4tHoEWv5gegLAucqgFFEMNajMmd4MmseL5",
  "key9": "4dBcqB19a4vMFfGPCdgm2MvfhaKyjTi734Vwq1P5iwMMBJVW57DsVhkxDHn3aPAxg8C8rWhkxP9QZziD7LSqKbJs",
  "key10": "xpCXkZjRWbfZCdc3zc2QAUK69NZdwdNEDoSSoWss129mF8V865ZnxhDAxE7W6HRHbAnxTg23kdskmCoeiPKMHaG",
  "key11": "5hgxJFHN5amdN5eyAhuGJj4pVdMP2v2cdHXsso2c7Fs2YpKTKSCU87zvZFwZWWujJbZptTsc8fVaxku48XtB2vZ2",
  "key12": "8P2pMBL5ZaQheAmgjF2pQAUiV1SU4DD413ae1Nn5RNVmbtY93vXDNJPnYD365reQGgruMjzBNQg75jRrRCtkGFL",
  "key13": "4EADcyRxtx1NEV2BRZEKkVVTMPjCaV7CSeHcbGVyZahwfSn9T7KhEe3h6cJXaCYsf4pk65WLSyUmrARgrHhGXswM",
  "key14": "5wiQp6LS2YP8Yag8pbJMouVQAHaR3ZiZTFmHu1TQ1Xa2uTiYLwUKdbnnUJCSWREbPvqyifAeps93VAMgubVMLw6s",
  "key15": "5k2tuLNZdGU65FTeLu5f8rxaNoJv78DxSWo7CdSBRFGx1a7dDZhxthGbPSsoBsegNnasPC2942U5oYyksrV4Kh2V",
  "key16": "5FYM9CFGGiDRZKNYTcyCu3EH2nPR67GxZBTd7ipBa9asZXAkbJ1genDPFvZL46RMe78rGPQS27QLy3wCKjWg7hZs",
  "key17": "5jPEecaJkWN8HmuRPg5aduNqPp61wFviRud8G87gXenxL7AB56Tgc5hBHnsSUwX39ZJKFCpbhUEFVmJaE1yhdQRG",
  "key18": "4ikxbeca2whUUytnMehfcU1dm8s4U3TEk2RFQjKDks6QeWXPu2ZVz3bRgrC3WgHG2MBdrFzh6vzpzaAbNyqEWj54",
  "key19": "289cLtCN6LRuNRmjCs9qhEWkUeRTdjZborY5fgRuYpdVMEHksg3b49NcB5V7Dpg4aCWsSHEXg2YrNTjm7u4sL5GJ",
  "key20": "2ousThXbj8ECGaYzUfDcKMbYQaCTgsLp44h2JvZvkKiqrGy8F5SDnchBrK7HBjDraNBWqFsDuZkvQGvPj84LQvvV",
  "key21": "5Uy6FbHsmeJk36p8NWYHnhsMVwZGnCKsvtKwjB4suED2DFyhxVgtCHRVDu7Q6uYJtDC9SFd57Xmp88uM7FvLoNzZ",
  "key22": "5NY5UsCaGJJViwWUqqEe9AhYZigGvUPdDHMXdAC4SwUTYXik8BqwKWVW3Muecs8ZmEipXwf8RpKbnj7NqSHtrF4m",
  "key23": "2J1t4cNKi17AcZeMzQt6WjsZntF6JzQYnKnUjQC3TZACkeJQmJa6phFAMvDunk2EkLE4orxU2XTeu9cm1iiz7GeZ",
  "key24": "ivbXMyrXbBNSPf4arfe2ySP9ujmnudm5gC4EeUBKzNtUgAreyDrjuMYxEh8rmPY98YM79Cqm63o8vAzh74QeA4c"
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
