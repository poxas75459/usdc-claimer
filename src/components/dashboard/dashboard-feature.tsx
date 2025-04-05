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
    "C1rubwGitLXNpsuwoCB96BonTDBRTVy28rpmP7yFgUVeiN8oucgkPtrTuq1ip7qqp9aUXmibZyDN2B21LtK476E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pxuPWuEPfgRP7ENFzmhFiKrQEZUrrL6ZJ6pGeGcJeHzfbGqvRF7duUJMonThvAJmSzKdHfwDXUTQTH1cNgAwQNa",
  "key1": "2AzNSbeR86KFXTxbGPG9zHzbJLYe3N5ttTjeeAz6Mu4CGULq7ApFWBUMEsbmbVTupbdfSpWraUXsh1bWrLGN2Frr",
  "key2": "34Vkftp1vhEs69z1BoBhvGL2iqFKkKK5NYyrZKmYXpaS5qcXTRHJ3jqhqYtkSBZsZr18oqKg8mMRUuyvKxmZNWUd",
  "key3": "3CipxBJ9JVWnWTwjn84wcmbb3NGDKRmJLs76YHFFHxF5SZdikrfiDSrwVwwwtfCig87UxNTvKXpiqd76PokH53Ka",
  "key4": "iFjUfFqyNbh4eGyd28y6VjGYtcMsFQLu3TNQRefVuLDKF6umectjHMPab4oScT6Czjz41scieUFfgyn2A6QMivt",
  "key5": "2HJ9FXvovnF4LzXByBEZjkCHBnfu3gGkwTCTtBX81JDsmz9Jq14NMLoEAfGSxQc3mYRUKkpb5pBK4qPCVrT3BCtW",
  "key6": "AjH5ihbDjjXcXcx59KdbdnTVJd8XQ1Lspb87QXHtWiMXCiWZxs7ZnxXzMd714Hu1Ne4S6UTLGExRdUXB9WdQBWb",
  "key7": "5y1q3eJ1BxXwpZ17QTA4dScd11uhBXfwa6DPFMyjh561NT87hpETLhkuq9rRJsCPWVAvEHVsfujtDMSUqNTbdULJ",
  "key8": "EnE5yjWRmoeQp5Tbqid17LMnri9k5fFawPwmrkDPxuUjmFbhS2ePfhe1G9HQMhRMGdorAW96vmCk1RLcNgcwa3T",
  "key9": "39M3paPf8KjnUFqVTNrnYajUeQRQ2NoeJmB1XU14oGEV9ejwT7CQ5EBhQgnh4SpssGyayh2hW5sMnUJdr5tHUJCe",
  "key10": "2FwPB7di5BLAFeGsHn54HzPs9NQ6VULP4MSdUCUvmToEFLvC6zu8dy8eXhieLqmjaz5KyyiEcnAFNZnSTz9Zk3ZL",
  "key11": "4hNtrvaH4h7SejpPeL1tnVgcwnxwWybJJmNUvgqZbibVhTM7N11Yy1YCKnANnzb3J158C9d58Zf28xFvqRwj8JfE",
  "key12": "3MYAzjxKDqjfE6QmHndF3LNhn9bdrKx2S6MsKq69x75RdVdUVaCm4K6SVqtse2dsPow7MqzyfCowsKQ6mgAjkLj8",
  "key13": "5J6NN7DBAuDwuzr2Aadd4LsDakLHFkbVBUdMfcgtNFMczfqqYUVn3SMFPKkWNaSh3k5GWKaAUzWoQfFzhzhD732t",
  "key14": "37LwomXMke6QK42p4QVGqqERkScqBub7GudwkYramoYK7JmqU93PNotDTCTFosFwproSnkFzj5VWuxCTXgxmAnLD",
  "key15": "4TjaJtNAn5H1UFaCQg6SdiVGEt2xzf597imV5BJfH3mQx9STmFAzfC5xre4F4RgxmN9jHA7PhTKhwYepD6jhbSmX",
  "key16": "JZvhyzQQZk7cFguAQzCjLtpfcuCJQ8odUUYN9icCnp4He8KLsjY5zTWrov32tumjx4esMR1UQX2eVeDYd7gh49D",
  "key17": "55hfWHrMRnEW8RuQ6bCDsgQsrQ1WWmonFjKowFgGpHVgZ3CBxP4ehUgJKifTLQwwEPqCwbQDwTfcSAPNi7ZpQPyc",
  "key18": "26FS9e54nfnYZwD1c8W4vBQJL1Rf2TMJFpd1CVaArbzhADJPjvvuDBw2g1LWRGRmV2rACnMzKHUACrGdeNipC4wR",
  "key19": "5UgyNCQYB6kCYTA5E6pxMJJAMzVaDPuS2RrR8gHUitoxgSabw6fvFh75g43kFr6616r97bkMMRYBWE3JEk6zgNXP",
  "key20": "3LMfJEsc3RUnbbQBdsS7bRRCNV8md9DBcHwqCrdhoXSeL6K9p1CPf1maELDoXnZSwbGrHEmfSKAjQXgHa8v1GQfk",
  "key21": "2cKr6vPA4soDkgR6UABHviWiWPfcadb8g3SMPQYF5fU9EHGT9aXpyvtPC9dg83fqxUrUz2CnnqJQWRoTm35XPNyA",
  "key22": "4fBGJbdZfcjU1esM1no55iTtKzqNdZwZGxBdeQF2M533bHyRUMk1TwSVWdFQuwJXL8iDsV4HW8YREBqsoupMwqTq",
  "key23": "2HbDLRkQKNMxtwrZ4gPvnPYMdtNTb4v6xSMgR5HRTPGjajN7DcSffDyyipZwjKWmTtRnbg5fFtqmdwAdBk6FhMoB",
  "key24": "2tjMhUPP9yk62NT39wiGnnQqQCba199KQDAS3dCvQ6C9wnhDEkE7BqGeZN42ztmYtQPWsVN5uh4PdHmAYBMsNcXf"
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
