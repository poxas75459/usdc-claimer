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
    "dVTui8MxaECuNeGnatsG8b9ty1DUajDp2ndgeUEFGkgJq77WavUQiu3JmdLzhTuJbubkUc5FRUszDc4xVY31zsb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32EoYaTTUiYLCysNcJKbzp8kZjjJwoi4KeJpaY32kkC73cFbaV2R2Sdjx53s3jWiHi3LL3FHV7ftGw7bjfXEcuPG",
  "key1": "3nvC2zm7z3yPtYdWTUybaA9Yn93guaYQhkRdv9yhiYH3vZQZ8nSQvmHoebpJ5fevDCCp1kA4sDiE1pnv2ednjWx6",
  "key2": "2ZzoBQGDAuiXTnpb5gG3yKD8RAHDmBMDnqfSpabV3ctRNELAyuJqBjouidbtszLinYvf3ddfnHRsXnN3fE1pgz9j",
  "key3": "5Yium1E9WsJKH3H71VZpw8fzZi8HeAYkACSFv7if2WA8eacydBQS1SmUtUSmnE6YjXLNR3HL5MoHDbRiAPhm3eug",
  "key4": "2E7DFCP8WgG5yfJq73MMJ77uVGJzvCeZkmv12RvoyAhXFEeBbbiX8TN9uK5GPuKFrBhtPEjxyEJDHbLCCirK7CS4",
  "key5": "2zfus1HytTPMsjTdUbsJBRtgrSP4revJU2jWspKrygQgA1QBX5S98CALkJBxSz5yt2ad41JvC5Fuz577yFyD1KKL",
  "key6": "2oC7mLwT96GsTAngS3ugerNCeqkjNTjE3RFPmFc1AJgnf7SWhJCS1Xc6uv157iQuJFh3K549QyNgbkPA64zdWQD9",
  "key7": "2Nckyqpdwmbzugw9zb6iCbvYfUUJ3aWQ6aBygvdmtgkHr4GqhLjVqGdAwSmR5EG8tFmmL128wTomR5M5sUzPFRfC",
  "key8": "4Y5wzYBgZ5uVVK5PjwQQqbbRPqbZi67KNdSq92aDAFTnMoyAnr9X17biUuSHaDBJBE9TEoS7wevbujGREG9FGND6",
  "key9": "AH3CBYTQeU87J8SgXF5MZP32AWUY9vhek8ZstCk4pASyQURtuaEQpwTGGLtdssWsqttE9ZGJJfBAZNzwwbZUMvN",
  "key10": "5wQxkEqzjaRtWt4c8XvP52xjBiqebu5U5ggXcnw8kPRwkcczwSWJXRHPthLts4JKV4ZndMHBbnjGevusw6tJ2RXQ",
  "key11": "48xzqoat1icV5BqwVnbtJChKxrUb1xXbJJcHvoTi32C2qTX1CsPx1wKntpwsqLodCYCRwKygPJwiJu2mJpZrLyRU",
  "key12": "3XWfTtqsKH42W5MfnFeHrb97aBgVJtawxzvUqFo5g515W6HZJV65vAQvn6cAM6Df9YhSH9ZG7F6ZmbM2qrFVC3YP",
  "key13": "37Z1iZ6xfcBoeoGvoD3FkuaLqtNrspR83pa9KAKZ6SLDbAWSxSnvzPDS4dLzy5GEd8tL5A8CQsGTHXdhmkwN32rz",
  "key14": "rD7JfXsccr5gKxcwd9F9oLZv3EbNmRxYFML6BpFUxaXmMscntianwFXiaTTfheErTnCfQujS6zPCUTGWhuSo9Vv",
  "key15": "dsNkf7aqti58wB7cixJ8UpBTp36EXcwHVdxmPwQGT7AUgvzSb9v47dNYK7B5EipNkRexRJwi4BdshPozmBG72G8",
  "key16": "5nU2uXUDEp9eZHdFo6HJ714AUpNVgTctS7VdvapMqU9gnK8maQrrkmTmyajPdXSxpRuvSGdruQ32VUn5QViAV3pQ",
  "key17": "5KX78379GJrGoUertxvDWbbE5gk9EbGERt5ef5ouxV4hHt55hTKSBM4anVJdxB8w2RXXkJBmTber8PDaSRSrxJnz",
  "key18": "3y9shKfPsniZj2uKVJ9wSnQBvepRsniVadhgmdSqg8hNqB5RfAZXUhN39gJzNaBq5TngDTTQ4HqtABM2XW1QEu3E",
  "key19": "4i5BHWe8YfEKrXDLuF3TMExeKE2EvHTxUPuH8wUdgzzpWiV1E6aEHZkwVx5B4VUX4whaPfAWSeg7EtzaNYHM2MBo",
  "key20": "4WKXMkzm5gufD866GsSvhT2A41zXoyomc75BocF3HLSp27ijuVpRpB8hg53o2Zjv48qnxGbGSGvqLSY2GaQqPLzt",
  "key21": "JYhLQucoa6gnd6uj4xJRYDPj4dgKPuSx92VNXL9cjs28xMLymUxvgvgimJKchzXPnitC15FYmbNzNyisq3yF5Ns",
  "key22": "2eVbTBxnNrHsDZZ4Nkt3qsh74R3FjRUiFgAJ6b61dXto8P6zvaRVJrmD7bcPqwXgScZXonh2bXDK6kRmfEXXfTes",
  "key23": "61AcYJMZQzg6sRTTN592EwijYyeqCENEREgJsNUNRXgtHUiUq4pgpKy5Cvn7TPDizt687j6Zc4nAuVyf8bLvu8Wp",
  "key24": "55qDKe3CgmaQrLR64Z9kwsaAkKLBXUkUG5pEnA7oPyXR9Yd3sPqCCjcpp2wFiw5qnD1tJokRkt975JMCYdkeovo"
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
