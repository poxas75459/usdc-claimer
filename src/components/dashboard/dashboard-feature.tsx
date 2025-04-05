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
    "2rsh8kZ2oHxKRRszEaiigC4n4tAUsx5KD6SjGXASn1G5ToAd3bJGppk8YraCaAA1us7g1YB9n4GikpYyL16ZkrwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N5PuCxEMotux4YeXmNZn7FLySvNxCDFVfwnY298y1fCTZb93xo8F9ntBTkomsuzkzK9WdqrJD7PdXzjQRgqZsui",
  "key1": "5MznSFmWrxNuH7R6pQUtwqdb1akoY21vs7enE43KUxh1GKJEDrtCZRXTPEyp1N9SWvBzhMUMH8W3DkNZu5KfxuAf",
  "key2": "wWfxYwyF7PXDDBnZzgk1cejYF8PkuC2Gdo5MqyfPSXVFX3tUupnc6y97mcgYkH8wywhfZ3Q93mScKctB16PmAAa",
  "key3": "2HSWrLJMWWF16DMJmTSaXzwhjX3H3YRJVzaaxKnfhzPmbKS7tLJ9jpucLqJ8yHTLt7CJo4J1S5gU1LHcXFJQmTzA",
  "key4": "29k5g18oMbKba2CzfrNcWPrPd1UnwpWCDoxXnc2fbejoi6nBT1QjjdyRNwJ9VaPjZxmCTbYD1K2L9o24oFxRZfU2",
  "key5": "2TzsGZmL46HmdmyCYK12MqAyGJHjXx9MTHGSE5n7YkY98y5v2gUiNfT8CmB9FMfF4SDPpjyNZDRFDci9MzrMJSxM",
  "key6": "51Cosk8QH3o16MDTSu7zXFTZHZThEeonroED9JExut9Nc3BYySFHUtu5SQnHckfWvLnjsTZt8sKYCHUqmrqU3Y4m",
  "key7": "3DUiZ5utUmoABBM3JA25KgjKmfjUDZGXFbff6okviz5b9z7A9YBYC1gP3vnZRzbPoy9DeS77FneJZ8HWyrtZFzod",
  "key8": "5abXNhoHGHETz7A9oDfkxPeCqPom3tMKa2hgCWBadjsmAkEmg7T3yE94tLid94U5MvEQw7sZME52MHbPWaPv5wE6",
  "key9": "CCXKTMnGPoMcSYCE1teXrBoexh8dkFLBzKzkLqnLC256ne1vsWaerjbUcPMUG8rkVLRiwGPFmrmZgYnbdmmr98M",
  "key10": "2mVzX4ASp1qJigYa4Z3nAQgc3xFv3uhVKnj3pKsDoYPwZGWNaeWYs45VH361SdpLWopLNuvnpG6nPLkqzKHXvJVD",
  "key11": "CGVyV39vEu1HRsnywYRM6gFpFKhw2u7W1WeMxoJocD5jk6iSUbUgHkjH8m7UK4KUTcSFRmrjV6pfcToMFh52Vja",
  "key12": "5h7t45dYyKpqThbHHj697hKhhUiMM8ye4kRmHHKzdnFTchgwWjM3uDmBBzSeH3bZKLLpwZ36G42DgP8sQ2thYdCZ",
  "key13": "5BaQE2C4WKBsi96Ngj7FASEYNuiQAMTMqRX96xh6imMT5JMVmkv1NyQtZwoTb4XcHyupZcJrM7q6VPuaWhjY7rdW",
  "key14": "36sQhpNKpxr6Bnj71jjayHrxjcxz38XAPEAoHVGDTSA2rYkHHQ7JAJfhWUmMDpvLMsvi5NcKQ9yYTYaYznYPyCrT",
  "key15": "3TnhaxHqays7uinBjabzj89fX6hxyxRPbwKf454MCZ1ZZtiP8FdNm3sFMhiwVvrmELPAzfi3uw4i3LULkzH6JZQo",
  "key16": "3KKRvHhkoZiYsDoV2QwfwkiTxAD9mCVfFBXhV4qxoPaR1Epi4YUKuPbuhBQqr75HgjRJi5yH93oxF4mFNT5cFnLX",
  "key17": "2AfK5MPu79QY9HkLTLwHtUoz1CV5pJ5JDsP6CVmBSNqaRv8MMAmfpKvSYGNpUeSkFdZkrRCYE9NeZF6hqQRRgCLr",
  "key18": "2yYS3UECYwxQC2Tvj8P573H2mgGKZ1ksV74aELz5ZEszbJg3SF8M7YVjBKEcnyvK48RpBTGGoKNoruVqfSSTJ7dT",
  "key19": "1YtiE9gAa7MxbKoceTV86N7muoL44MA2eNzkk3jgmsdXLJQLvJY38XvZtNhrRgam7SGqaT6i9BJBYnoAUKw4SMn",
  "key20": "2RsmCFRWkArVTmMa8VkX9omwXjRTmrJtJGVX6CrKNRdKLxsU4fudmmzmqc3Thg4S54die1NswiDr6TbA3Zt2ozTU",
  "key21": "352srRM2AkSvPr79u4NgJa17QhmqJU3DhhR8gKdnShiVhn4z3fLb6JxAtivpPBVVZZmTgv1tgwUcg8febk1VyppJ",
  "key22": "Dtm5Yrw2PJZkdKygYZ9kAbUuNRqy9SmRJpSHTj87ipqwpjSoA2G5Xizgd5H2eiRKNzRJwmFM5BLVPEyyn78if4n",
  "key23": "2vvMjHbnQsm8KNuUfiWBT7eXhFKqeQodjj18qiXe2VBCNSx2QoTmqxAK6ijg6nvLU8NZUXUVsrSzWafex93ULp5W",
  "key24": "5C34kkHChHMRDinw4HSbaLnezVYGPTPsS9tbXnE82VLvtPr8gebcB938Lm8Py9A9XMTzBZCzTQP8eDLjAFVmUWTv",
  "key25": "4Nn7wLvQ7Zzhwg8gASCqZwhC3ibAbHD1w8zPZSw93w12JhY2jfz2RmMUihxFjLiPhj9xTV5ZVsWGqwgy7y1MCuGv",
  "key26": "2gc4gcBHDcgmDqgCG9Ep76fAQJDc4C9Vp4sfQ89k9qFQ3P5hXGQ3P2jPpgEGP4zfqSBFBn5pkQFLsJ33Tpubyr12",
  "key27": "5boroUZ4dUeKCWiVL7yPyoyZCTQ9MXee6xBnWKTeU55oMsFyhMbiPHNbNGDUeMwmH4Kq7oMct1c2KXg8UF61PZbu",
  "key28": "3XNhZv1mjKXMbeVH8ZKUfLFek2kz6ARzkx1wap4qWR2WQmGsge5dBRCdd6b1Ue8KeDE48B5M4LvzYEtgU9BhP5iC",
  "key29": "Kn2soDj9RunaVRsiSDckyzSkLpMsV6afeBrv4PEPGTLohn72yVjqumZbZbbfHnL9SUMsyWFgjmpxfXyLQkz6kAZ"
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
