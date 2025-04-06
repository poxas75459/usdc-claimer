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
    "49vmkDUwBEFGJWggWHDXEgibCPUTQt7BFK6v1YruPHwR1MPH66v3SjHGZKLGj9BJsD7zWiyAiLBrr1PyntJrMG3D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w9MrA3LdQUXVPCyoEMab4GkB5cVtkzNKPdjf2CkkQASkB3Lk6jB5yumCPr232Xu4pbSwEGP56ew6TwjkJF3o73c",
  "key1": "25GTHYWGxGE1fpsm7635EPTj2X6csp78qNZxdyguqgU9XWLWFtukJmczwmBq2aUfdxRud2DZbp3boixVy96wjEK6",
  "key2": "5RoYEGrP6edG8r9dCeL1VFGXEiiY6rbosnfioGMKqSYf4ru2TqD2zsXs8PrN2b7YoTtUbYfTKnJPKf5xXfn7z2mu",
  "key3": "XvRw9E6v851kTtrz5aX1YkUF6Tyt5ZXSd29ZXVd8PoVKXBAAH7fMG8x8fhDk8SymmgVCYRNZPPqYZ5ns9gDAF2E",
  "key4": "5Uk2Yr9WEunGotCx3Q1RDK1usBeeD47TfP9P3VpsPAb7sifF7o59wvi7NgRG58MtxVJ361zHMAPU4DXsdE5fDtAq",
  "key5": "61EEbAX327KmpWTKYMcMZFGu1hi8JJ5eJdsR2umMQJEYSHLpFa44QpQ2mrzaDnnCTekZhCW6YmpuoZ4uRQCcEMcS",
  "key6": "38cHPtao8fxaFVcxfitn6svgYcfqGft1Q4xXUxZtQ7kiRLvR9NgQBEiNBqbdhBU4BrURwgFDQRPaagPhDnScM85j",
  "key7": "4vGdE8iJpN6iwV1xDAMGsBjZemwoZWPpJWdzvVo55KUeWxXMtud24yjiVmHTicZbTDFNti6q59MjncEe4EEoGSwQ",
  "key8": "3SZ6HCAUiTX61naQq4tLKwXwNzT8a4f1XwgwvNz5npbnMrjt9Sn31Aeh6W3sWtA8E5Y3x8MhJwvt8gJhMFcU1giq",
  "key9": "3QKNy1R1BWYSJvrwSiXiBemLdRMc7fX2KQrgKqikjyTWTHuQDh7c6pHDEGHkkFgEeXLrcnnrG6bHZiABpVCz74pk",
  "key10": "4NmQSUWuKPC2VgepvMN4daHN1ERJxvceWVcM61dHZf99tpvo9JrBA3YfG8YQbfnXabdG7gmXcVP4QMeHjNmrpmtR",
  "key11": "tZBXZBkmDXnPeiCFB9N3LAvWpEmVRvam6YVtsWuk6qDvLF3RJXPz5qqD5nf73uF12vr3foKxH3AympqfhG5AKB1",
  "key12": "5tdxsrtEBpawAUnMQE38whnVTsbnF1gpEGVHz6KmBztztBdvutAyPsWMvzyJdZUJnpaAMrjFbKZkGi7vHWU95sBz",
  "key13": "35YLzDJR66HM1fzDJ6ict7LKAQebLUrosZaWdYcYhe7tp63uPZTgvaZ2vFxcTgcdWEjKDXAbSgqG2cG9SXydLbMi",
  "key14": "5gXX4R9MsNxKHuefJKmAPn2q8mL476wKiWD3mqbG6stdwQMdq5Gzv5X6tgDyCvmyZojrjxKseh2Yaghqzu54CsYQ",
  "key15": "5WHBFq5AKwav512hDXk1W1aNhHtnUd151dPnSV6XBXYZ6obak3XXFWDVSkvWwbu5uQZbdZhS2wjfcHMD1WeQeKGj",
  "key16": "5adhLNtZSYcMRpdSXL2QBrK7e6qe8Q9p3FBTyhoqdcKXKkuEaYyxer5cxr2MT4TQvvVe3q9Eh4Diovb8SJAXMWm1",
  "key17": "5V8XShJS4Lg9YJ4sYREyTGvaCrnp3fQP1X4D2nYLeDhXBpNJYBWzLB28gjB8kAWp9CNSxqvjgnD8JnskfRaDq6m",
  "key18": "gHMV7oxPpnuAuCQYG4kCnZZBhjNf3eqUw3Pu5kJ252wyeuzCmgPMQ8BrNXcnsvxc4KgSvBUGEy5w2cDkMxN5DSj",
  "key19": "39dfAKR1umhtFgHorv1NFwoFE5p6ZhCcnhDXGxWpz17x8MwvPTUiKTeZdKwDEQje2eAbR1U7LjqfhSqP5CkNNXjV",
  "key20": "24CLE6yqYwfcyVbdYjdb4e2Jf1gtjs1H6P8A6vCkqZZ1Wx1ehzdPLm2dp91NPnoT6DexJPRPCj5omwgq7LsVWhVP",
  "key21": "5xh7zb8naLhQErvFoiatbqHxLAs8ycYohnVpFwD9z618UfXqAnJBA23qHe2QermUabXcQDD3To2zhSb9UStzUUjQ",
  "key22": "wsXChZYLvJrqDJ8MT5cL7VUfRuuCzNcBhpLWpGDB4K1GeoutdSvXkYB8VoJm8ekRfoLAYyFus4fLXsTS3DNck8L",
  "key23": "5kqnyrx8btUdcid5qHLTkD6NCBRQJYDnAMWfRRTBmc31d1oreSUo9RBpJZekxtTqhWPiUSAY9onRGRBd3BMM5Tw3",
  "key24": "5YiXMtQUgrCDEsFcK5sQko8rQu5cvoiasBhXafmCdfTQuyvD9RP1zG5yKkAR4HPNsKaTXnNPYjE4VNdPSBBADyrw",
  "key25": "3CMa7vAdFngoVs8FtS1tZXwMtK2ZmVt5MoDp3GNQm2UTQ1T81q4tn68FQeGpeponZoZnDoTfcBTsS9TseUJbuxHL",
  "key26": "XWUWv2GqP7UngLn9BF2G1G2qDiHPXP93jRTbiP9ZTm3USyLLTTJ7a4hA3R8sGSk1omTuW9MFEwkz76Mhxo5aGua",
  "key27": "337EXiYLUBhukfXMSCYXdx6hjCoV53yYx3oxV3X2nhh32NVUrg8jmmn2uJShuB6Wz8ELTqBXhDGaWJw6EHaGiPDd"
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
