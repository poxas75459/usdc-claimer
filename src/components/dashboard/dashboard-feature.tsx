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
    "2vLqexJhAvNC2isfNXjkuUJ6XWDtCnQSyB4TzxAFEWMLNcsemi9cASoSoeLLErTpNB49NsCiudn1XYP9qGhYdXCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zZWzhR6zc8JKwPUwurXvao2quda8ZYC8sSi93H67Ru9toHPtFPYHk3KKhqScVxi3UB99kcZQeaNhDGyJCHd7nGi",
  "key1": "4crx9SAFScrjtYKDS3gHD7qiuetHR3UNcvvmCwsyDPjDypUMWrzbdPdMv9jqDxJUhAcHWkMce2ghNUg2qqary9Ym",
  "key2": "4X7To6sxhS3TNgppdydMxNyWemK9BP4ZByFMhUB7hLBaGtHV2X52rYbawowZqxg9NxMf9MAKUx2e9B67hBsct4JN",
  "key3": "4inMVrEZT7KS8zL4E4cev5rpAtSRGBuWo48N9fwyC2BJ2C2vQx6yxzm7SZbyv8i28XPiyoMK7HqyoPZwSH6x55Jn",
  "key4": "HMZiStrYj5SEgQwkp2pV87x7wH3wZxJCAc1tAvV6VPFM9R243HpFkeAGJkJy2wYKyyZAfXcMStLhqMQi1UxwcuB",
  "key5": "2vuUAeCoER19kQWFJDio7eiRU5UsVkGTzqJYwKhbGJPM2f3hSVTNJQmNjiFqDjGNpDxf7oc4WjkhzpVmeDAeVu9w",
  "key6": "2uwmdEVc4hJf834Gkp2tVAMqNxK68tff833EDxvKEyMcjVuN4NN8Y6cxivDJGJEBJ59HzTmdKQV1Z7Dr8mz1Jfkv",
  "key7": "2BZJpGotVb5AmgqC8gsfP2VY9SNPaCYZKgVPGwP4znEwjn8igpcNc2aGhLkdgfdfkpM2ponHCWXEFr1o8CNqeuRg",
  "key8": "tK82yrsVV44gczqJrbFWRMgVa2fHtALM3Z6RPP4Vk6oBwwg6dCBczEXiTrCQGnXh6BrXtBzUWViVUCUVcaH5Xzj",
  "key9": "5sfsmqgwabVTeSFLkEHuUG2TfTrjp4qDz5pk8UsxnfdWvQZp5g87YQwmqaUMpukEVxUef13v3rNE1ru1FnRL23Ai",
  "key10": "4tirT3WemeVW4WSrrQ4USCTNKPa8rpocVbEpSy2NVYf2iGzgMCUQkH5eLenp4SDCZWh6WpDmpxFhsLbRpokPaoQa",
  "key11": "5Ddr3xAZiL1hqVEFMjo5sgJmzBpKTujCqtgDpVMiQ2HMTahivtthsxFGEp9mNF9dFDTzE8xxg2XgQ5XJBt5t1de2",
  "key12": "3QDE7jktiZmvDpEVuqip6eQCfXH9KoKC6HeCgr4hjHGPdseBCni1MGiuHUiMHYryYWtpJeERA7uBVhiXM2zPjyy7",
  "key13": "44yJ53jYSNbRTCxbuJYSEnaLGBm6kW1QJ3BPX824n11xV2EpUThCuavX9UfXNWLXtSd3kghFM5ciGY1kyT2AYkZe",
  "key14": "4pt8FEqkS66KXjnFRTSu6nUSFh6sKesTERf5VP5mEWsnf9L1phYHJuctwkDbEUpNC5KrreYme2xNF7SH7NBvM1Eb",
  "key15": "4Nya8UN2qygDFyzzRB5ydksHQ7uYjcQ8aX24s4tUbXTPd8V7nCxbQDv2u37aiW6jeZmZmxvXpypzxBPMbjNr9Ve9",
  "key16": "43nxkUbai8cTmqijNTtPwTfHAHA5JNa9vbANJedeMujzBb5R8v85AX6azDZ9AauaiLqiUNrHgAw9142GzUDCPDXp",
  "key17": "5G1XM6jgNRRZs2TeCQP5biMSxumaUamr9p4Cmm14GwVWPcyvybzoFQs22v4ufXjeAAyGDvwLGSTDeN6cTGzJYiq9",
  "key18": "4pNtnZPwAwqv3vexmpULrHMXWPkhCFAVkhzQ8XChSsbpFXXmH5iEA13EBJswSWYwGuXpFwN5dTu1y66UDicutkZd",
  "key19": "J6Ma2GfaWw6u8sudmF5qCYCd941z3HKDBca9MuXNYPndB5tF9PVKsFKUenkKRbRwdXyTgxS2dSMKZvP35Kio8y6",
  "key20": "czrisT9YY5ERDqRH3rMoFspuaTgfhqwVBqBReZoP3sQGxypmLbxhz2gdShs8mUinoxq14tBncnuGGkpxyHQVZMC",
  "key21": "24tkCdxmFfLoQshAszuAMV5XZdF75ATccKirRay7mpK7sZeJoEbprufGzsHarpX9Mc45K1yqhiPiNrM3LBqJD4PC",
  "key22": "4tJH6r2eLmjyzZ1KApEJfMND5eB8WgXWyqJmQsqeziYbacdqV2thGnztTTPjKygVqYBDWTgCfwKEirFgm9fHYcsY",
  "key23": "3EC7p5eFzrocDNUjSRKixBau7UQ6FXFY7fGNRegzFbfK7kFKdNbyuAToLA4v17CR7z9yPEp2r1JnA3CgmZzhNVoL",
  "key24": "5P2yABQSS6oSWQDkUrXCvDTfPar6KnMN2ESRioeehZXK8xcneB1MvXxs6vXSE4r6jw7xNigDVwAXTKgrLcLK6F2X"
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
