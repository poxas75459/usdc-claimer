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
    "5Q3PgXepW4iMLEbn8xT4Yi7dhHGysnZh8sn16oHJC1eSvgxvYrbUr8QXv3as1W9Uvvhksu4K3Xf2xCRCe1Q7b3rN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46BpCxC2ZZewM1FC5fdnz4Cj7ir72WWfrR2dst3VAHFUs4sr9XDofnppxC6r3FyrY49A4v6ThRWai4JfST2qfVk2",
  "key1": "366vLD2SZpA1z2YNqpRnNQUA8r8bjSpDnn6ysjGKML1ZVgrtEYyoNedEYJEUKLadW7FMYrAfxcCnjeEkj3AAHWFy",
  "key2": "5SK5QoBnuSLFy8Du7DahVkgWPBAQDmhZ1fEFir3M8tFDXD9SRvLdoJFv83nNraZLN5EXnRgsfACaTUarKroja3tB",
  "key3": "zSTJm9bXoSxsZSghx11WbSDyQWiNGMrj8TE6j1yPKdPfoM2tzHzNPM4H8vZoHgaD56998zZ3mXJDA9v8tWysc5g",
  "key4": "4a9FEcjTs72FY3nG2X6WBGrgbQT59cHn5eEZyMLLjAYtuHNbQYqdSSmSQ6QWmQnnpEs4d6rvGdW59qPuGzexPGj7",
  "key5": "54St5Yfr4x5ZijnJiyTPZdc8t9cByJRqyLEQv1knAGEQFyGvnxBJr4EoSXryU7pdkD3R6Ybk8Z57ZF5HNfAt3NLq",
  "key6": "2EQUQzmr7kBU7L2rXff1nF8TWptAJZ4aF1NMhjnEKKxrgMa7XB4X61FLB7mxFDsKAJwU3rQFKu51SvH5Q2X83J9k",
  "key7": "5yiEmcxrHBDLxaL1aUhqyph1UPSqVfYPZ1T1eXm5UhH2GoxeijQhiUJ3TMS2sLjQefK1xqLannYT54GHSdyytyZz",
  "key8": "ySYgzyjaDAgq9m4axgpPHgkcvVwvpVipzfdkRQAbnnrtbJEzMyeQFuf1ek9Gu9vCVSGHA7apTyPnKK34HKJvxAY",
  "key9": "46RFQwky23PkeW59LjzTZ2YkrKRQMfDLg9rLzMuHccPG9CiLMuNznwhLxsEXDMujFNaKbT78VLSaGg4i7bndPPLT",
  "key10": "3DpQpe4ham72hnHDfwLdBfS3tHR5wFafnPrqPMWexidRtawm9aHkGi3SjsCVEiCZRAsWLY6c685Nz4aoYhU9TfdE",
  "key11": "XCi2AzAShY63Rp7siyuinACM3keSSHLnjkV1Wovtt72gK82kCwZ1wMXLVmajEpzSm5E8Wv3pQd1HhccQijEDJBV",
  "key12": "4yGa3AcMcwHMibJLar9pCAusfTbsYAE9ddUkcUHbLhYMEKTWNKjVgpSgvAPWeU4ZK8xGhC35tdXBJDyxEcwXqYtF",
  "key13": "2rLqsz25ViteKNozgPDkq4LrCrKkGZ1bVJidmRybaxJqFNV1gheMWZ4sDwMqtHPUps14MtwQrmKfBREth7st6MzG",
  "key14": "3sfJKcoQqoMBGURN3aW6DFQoYHEQVXXrUyfpcEiLzbJE1rz2HxQhGuhHg6ZwVJGn84CtQVMNa9c1JWgt33WXFnKh",
  "key15": "2wE9fQet5tGPMrBWsUxF6deFRbmsNwvY7Tnd7V98K2L96zTXbuHXpG2UjRqDtXctcGdmS4RqNVnkonjKy2HE6kTZ",
  "key16": "66jsHytkahDh231pWxJrB8zZMzdLnM3nggUGmfmtveKdPmibqyr6YUtUB7mMS1nXEmEfy7aDoWvrC144pfrn6iJ2",
  "key17": "5EzLFW76D7o7vQPoD9aeLsreZSgE7q6sNxe3Q4t2WaACYBM9kjsYuiV7WbvgeTMMhmYDeLZeZ2zGbvboysPNoG2X",
  "key18": "299wrhq5h3ri1NJcuRETAsLxPXUecLthVdDr4oWRSZP7qvjznk9VuDmK1HCN7mx63ojfqa4CvsSuLfNK6cC6rckz",
  "key19": "4NBQ2Lng5QtWZBqqENuteRerg8AKhkXiBKKWdBTAcmZZfZ4CV1UcxS9L1HyCRVbtGj7Nn5ReipTuFiR7FcTymczV",
  "key20": "3XNKFuPY48AaSu3iwyunjbmUy7crpuW9TPNtqr9oRpbN8XjBQ7TMYL2usdgH4QEwTGRGXMWbeuVzyzmgvXmX7J5Z",
  "key21": "5TXCv4a7umvUE5vvyrBxnsgxLtj9QAaympnuU1dL7RMzB6SYPTo9kNfc8GxBbEq7A9ePggEM5a8WynoEPeLdTbrd",
  "key22": "3chUmbmxgN1USEv558i7CNZksboaeNDTAMSTVqDP8Ey7uN3d39aMwn8TxdTgZYFhM4ntvUjCPDsFLBe8SC6LPFPs",
  "key23": "5NfXfCDgUGapPWtYr93p9JSQoSFvL5YiHk7n45iWHPfD79GukvV9w7BtLBHnS7Rv24moqySTuADVMAcS2CY6ft8A",
  "key24": "4Kfnucak6f21qnFdXMHrEsLK1eJyp2ekGShcjUVQBQ1VvWsDyWE4bSFP21egMfuDbKMiRt45Y7VhJyBXspMjyZoy",
  "key25": "39NkZnsVbyppp6F2Y9ZiFbAEDFfyp1wqrtFL4FXnsrVVtn4EkTABb8hyugNMhZdtHbr2LtQkL1t5r58maYBf28LD",
  "key26": "3Uw2AwwFSxmHNnSo7tVAzyqnSxXhthB5AKLcSfq3ZrykoJoqF8x6smsZpNHkimKmzK3tdGCaBGvY9dppQyMpGuM7",
  "key27": "naFx4a2jbS39D4iKuEQoAL7nEz16hTfyz2Armpy11oV99SAh5umDb5V8aJyAeUNRziVGR8dvobg6ZDR6SRXPPE4",
  "key28": "4DCMekpEfybh1w4AsUMQRdU3VafE72iS4SH7QyGbHuwEQGrh2H3YXpw5hM9J6ogHuwryWk2JEuHseA2Q89WajxA6",
  "key29": "2c1JCB4aRJJjP74q6a52NXrBq1EtoqD3gpriA8QenmDtYK691JSMYiWYyMMEujhDj46MEsHDcfYMNrQVKApFe9P6",
  "key30": "5ZN2s58Jkymbk9AyGz1Pg6nLkeN9KR2iu2ZtKwg9j7NS2JQit8MtuTqaHHmbrLYYj3Yyn6dwzFyP9vnT7DpG5SF2",
  "key31": "2ta1pr91WH7bic7gHk3uty3WJ9aHY3sbuawjcTnxFaLwooxgPpqqVuADoUH4PPGpu9apjHm5LbNW6b7qfWXHKinW"
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
