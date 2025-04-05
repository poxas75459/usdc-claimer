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
    "3dDWhsQYZ9FLNsZNZ26qwMNvcjoXLfjBjmLjuUvaRTpVjGc7ggT5wgbo1VuSUw5dpPeSnXNVUFtYdDAXKRA6q4nA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XqieKv1JwmGRTN8UrMN7nJW2naa1xWWoXj9HDyWNTQBEmmyN9nbh2XabbxrdkEy9D3PXQeoMnYQPjV9gLWXGnnh",
  "key1": "5XTcPWzdePPpGbmu55XoXTqBu3VkaxArbDfw1v97SVvb8oSiytitHzCWkLnnXhsjRT1u1GeRbSwM624UaZE1gTkA",
  "key2": "59xm4Tav5nmFuNaWbvJCPP8tkxWD5cCkyURmBtChP15ZCC4DfyCiKCrJ6cshHtyyDVN2yUtpNre91vZ1s47qxjnQ",
  "key3": "556sVeK2e3ddr4sWcS6o4KdtnvxjHaHAmQLEKZnqFVYmK2ynGsZNQCMpU1Lb82DDJj9wXGkXkDwJxFyatUYGtd4K",
  "key4": "2zgUYiUz42FjYdCDkbERA5eEvmTXf4MrVtUZ1EJnQuQfxQ329xNcUMsrHrN8Y6E98YfMo58w4KLias54YE4WdKjQ",
  "key5": "2hsYbgKEq1mF7WJaHWCBSyf24uVteknbLeN6RtQFKtbduxvn9g16HZwSxdJg5ixt2oTyCk4YXsfMMaawTwrVf36X",
  "key6": "4KdJdofoS32Nt76VZFFh9hShYkdoR7FJFXpzMGsy7aaMpL8Am3Lk3C4ejjas7CwuhvVN7Xh4SY8cntW3mwPE7vkb",
  "key7": "4JDuFwHb7SxSV6yWXATo4UgQjZZJrbApbH4XYciU5yUNJzpuJWzU6BT8PcESg3BT8QqsJC73d8jPAaqrHZFwbQ7G",
  "key8": "q7bYXDeY9uhGzNC8neuTd54ZTjHCPdZodC7AR4rJ6HFk9csfievBY74Dhr4N4UgKwBXQSnvxk8U1iaWGgMqSLHL",
  "key9": "5oUpXL8ZW2GTiEwbVku2RBitLM5JgRsytjWnhNpmNHeJT2Bd4VtkWekdrJz5qfdQ8F9VUfryyrcVw377JVN64yV6",
  "key10": "3YPHyfJ7Krm7cLeP5XNYdDyNK8ZjVTRt94RhdbvfmdyZKbZVs1QrJu7ocqEbPd5XVWutyvA5S9dbdiNM7bVQky8",
  "key11": "Sy9TxFB7ZGJKk3NT7ChuRpKZBLQSMg72eY6skLVgLTxB1LY3qFopKbRbuf8RoUEueeH9ZXxtDSpFybuymmtFhCW",
  "key12": "4S5C6ovRckpyKyewZxPax3uHSYWviv82NTodVGtyPHHonwhL2zsSd7JETNx4UBaSruCFwcSMmEnqtS7SV2zQoxhu",
  "key13": "3gwabYnkhVcctcjXTMoRHu9deotScnBsWMCD1C8qjewMoYNUpNR4hDNmdWWjrk1tZUJbiZc5BjqRf1V6TXhvtzrv",
  "key14": "2dBBrpo8hEPEXXPyiDJZPNsQUeXxMC7Gjyugke3tiGfhnzZDSJ1htyhiFNtDAaaXtJCNJNizbzmzrGdpJZh5gKg8",
  "key15": "ZyHPUFcNoRj3hofH9M7iRSSMM1abJErSd6t66uFfvP86i33cXP4wVbk2sPyW92Ww19RsnvgYi9Mbhv8EpQ3uLVv",
  "key16": "5j3xNEXYQh8VV5st5k7ifkjsvPZ8J9vHUdRqBpXkXrDzzSDU2kTZJ2MhjQoMwuWNfTcSJyhZVUH2HLZZNEqUHhGt",
  "key17": "3Xj6t6G1zy3W26QMf6tcFYxK8xHKVEZsDeUVAwTnPkMUAJciHmq6mtkeC4Cz6Gj3YcNC8qv4EUsoS7mh6Do9rgT9",
  "key18": "XyQ9sK1YbUnJ3ocDJXTjprkMfoWiYbWV3mj9Tf4RWok4op9NvpUEDYpdzkcrCjeuXdhSXJhWC54aVE4c6idM7JJ",
  "key19": "5XduBxtcDzUeFGAbBpH9zRmTExqRFN4hjXLSPHYdtvsGHfnGBdctWZXVLXx2cD8VCkStzYMgZNeKVRWrKnu6aiNu",
  "key20": "43E7EpMPAXUboL3T1SuCmt4LMYqsXEf77XggEWU8Myc6SN5aHUqaBVd7sYMji6FyFa9zWExHE6s6WnFqHt3Wiewz",
  "key21": "u6DjaREanrmouxckHBTxoCeKBipnE9ET6GLdWYCRhgjEArS2N5xnxvQAGhQat2hBQJ48myuLK8HhP4peBndyXQu",
  "key22": "3c96G2HbPwePs493WTMwCVREDGsCymE4Emt3nMLN4XLZbf67ZfTdi68jnjwqRBZbQrDKsxwQszb3ZrnmMCTqSRC7",
  "key23": "45ofMSdtsmzJonfxDhNhiY3rdHbJZaAaZUnzfCxpp4dvQuqH7KMpnxvC8yAuwjgagjTfDjsusY6UzAyvvHGDP6Vf",
  "key24": "2ge9aEnycuWExdNSSja9VCMPY4HaFhtq5oHkKtPZE142dRbavF7tem8ULYYTcmJJCwgmDAsxApFkT8XGrepoSti6",
  "key25": "qEkCnWGPtY2dHpBGAaZRSSfPcxG6TnaQhot9yMkdsQQvyNrc5foZkxjMsSf5nNSCsgY25k3bra9uZTpk8txKiZe",
  "key26": "2nzCqbvpcqKb18MneJ2CYj5BTNamkzHV2B3kevsyJFg2RAN5L2tavebzzE3KygXeCEzhp2uT21EG8QR9ZXBaZkjC"
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
