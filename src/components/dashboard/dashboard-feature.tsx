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
    "z6yoNKdpJ1Piy9g9DmMzw4erTbhM8cAgKRx3j5Y8vPF7nA1NosfdzsMCh8EvcZditGZ6MweA2V5wW5wTgHmkjQx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54og4x3abQefQAtzC8xo752zZgRBkyZCt2NRCwKzK5QhvYhwGYqBJjaHrjz7wkuiioXkHqixtqQT75Vwtd2pazFQ",
  "key1": "3dE7p8bDNwSCGT7MTzqnjjLmnGv31tVTWpaYr1moSvPyo4vY16v8Hi4D6Pr84jJDA5tTdB9sFVrrxdzygjdb2qSr",
  "key2": "6DjcgMyp7m3nww8oPiqyUY7ofHPdU75Z3m5bPjYfCL1oDaL3cPrDuBu9aLwyXu9z1aMnDVLm8bWYxtfPjD5jccH",
  "key3": "5mgEUU3Pw36tBYeFUCzzrST5atzRhtecoYYJRkMwbboinyXuCcQhAc76mYMVFGJRotQEcjpaLg4b2jr3QDcyEv75",
  "key4": "3q6bgvaQoc6sqvLKQfwqjCF5heVFXrTuppRFLaseofPSjYzyQhBR2pP5acm6Coc5X35XMGbtsU48KC8m9XqvsxXB",
  "key5": "2YW5WYXxh7kMzd64DeZnp6jzBgfB4FbyYhZMF99Pz2YW89599awySgauyyEr3NuUPGg7r1kVCyvA3m5Qz6jp2hd4",
  "key6": "aq3ykXknd7sbGnpzVBPprivi8oKNWdEGL8uVN1RRWJ4Fq7Z7ADP2iQttbU758ktG9PwPGSu9V2LBWx7HNh9TVPB",
  "key7": "5HbquyHbpvq7nn4vJ7yuZWribRujQVS5KZuekPinooYknaLf7Qxy2dYRk5V4Mv2PZVMJt8TtvX9pcaCSH77fXQWu",
  "key8": "46GYxband6pLiKaKXefBxAsYwM4ynqQJ4P5eNTSBEQ69gyXJKGVKeEftBBPtkwNpuo8LtVtbQT7PWnqqMnrm3QX6",
  "key9": "rtqd24BifG5TCDcsMYmE2ydGp9BbrHM5o7CwWbvAVAuQTUUS7cGErofmo8iCTNekhykkzMDq14hN41mdwBQw5CJ",
  "key10": "2NVoWgfEhvxmcmE7fPTdkhtaquH9Ldc4b63EemwPcUd6RhkPZAHFBV5GXZ2pyBAaVFXj1DqYvBxWxKthu4jPaJ4C",
  "key11": "5g3r3KrHB4sTfRV8imvjs78KRrreQLq4VDqFSkAhkDkSpAKexVrSjwPFsqwB5BCmNWsMvh4saj9K1vBt4meHQFdM",
  "key12": "2yaUCecqmVrBUpWW7sBqfHSa34t6mvzGT7aKzXJyJnPNzQ8v8Pbs1qem44C7QoaFHy9m5832eLs7zpY7Z3UfKYhe",
  "key13": "2ubeZzDbveLfndQAmEohDtSQHwH4EZtUPgGrjTcxUKKaaYKdezzdAp3tmCm153s9YP4inASaYe197CdZ3LRMuH9w",
  "key14": "5rqz9HFBoxyWK3DhcXtbrTzhVmXRGnXzMtGMXTLuwHrGHcq7EiD6n4khpiFVTvAzyygxJNUyxMWSbrjszYydVw9D",
  "key15": "4LDjbx8hp7xpY6TcoG3aqXaXrVtyWLSRUdcRG36RVKRTm4mhqXY2x13bCXum9vPYd1sFb9evBTSg9cZpkfdrZUCA",
  "key16": "4HAYAe3XDE7NtGMmtJc6A36H8MdXbv1QJtWEGooG4cgGzEihwE8Yx61jZczVsWGWZbQ15M7sqQALM2iB42rvdwni",
  "key17": "5umAVwBw7Tf42JALtmku87PLuEQkDEkLYKjH5hPMpPwThvhY8dE5WR9WVYb8JA8RsmQ3wSpvFcGB7P5PzdyTEqHR",
  "key18": "2ZcEWJtigCPzp1eqZPw1W1F2Bufj4AVLL6e8M15yMY2UfRec8iHo3kHhK8VHTyJD4WzctFWEBUXNURHkdKP4yBq2",
  "key19": "2GiJEeFP7uHjUDzZFs7cnz6ikEi1y3iJN5RJKcVGapKtMxHZpqgnXGc9WqRWfS6xc1WcuxZQyvuTeZUmXgpjwpFL",
  "key20": "389qFo9bZn6j4M3LYPoXJk8NBD4Z7aakyTcnJgJw2By3bnTY8DZHvkFmCjTD7ArUSE1P8LbkqA3iagLAvz3JnFnh",
  "key21": "3uG3dgSRo7n2TQLaMSeKm3AQKHiZ9xQeRe5vrz9eHvZg5p3mzNT99YEQgMaT5YSGfQYmboiRdQwHHRsFZQYFbH7B",
  "key22": "2pryXGPmSxE83ctdJCyCCQUcoUe9jAg38oRh56cGQ88SUVF1U7Mrmb5JyBzhw28iWvw3He4wHjmKB6eNyoUgByQV",
  "key23": "oJ2o3dLTLwDBFJmw2Pv3ffCDNgKwnhfrDGUSVc1wk3GFJJHxStkDaJJ8ufZUqKv7Exm9PzftmJhvSY9epgRU9Ty",
  "key24": "4f6BzJbtqkiaaxSEWPtxgCanYWJgr1GWoqdtNPY8SoN5DahrskPqReCihjgAEy7mQS1AyXMEgyGRFbWtxzeKSYAt",
  "key25": "2qpWvqPQkk3o9f5zr72nfh6rHtoSpew56taMcjMHVzJ65KVAN64wZdzz72zisMkqJJfQjLrXbkKExRgt4Gt6jAqs",
  "key26": "ESJgyWXvgoXG2eKLXy2wmdLKMGuiU7dy4io5ZygPFSZcMTSVCEyE2xtc5dUVcVBvnTtitPQBz9hLidLyC4Krukm",
  "key27": "3jBdwvLMDPmR44T3eMJiJKKtbpWCaFcT7ubw8wMRv59Y2o9CmeN8bDRszQ7rzfCGzdC7FS5XwbtQgt4JnHPG1ry",
  "key28": "4VLGP2fpxs1zAFUuWUVPj8setvXwspQAAgiszFrwzSDVfrgMwqd7gL8TGj2Gco7hHRHC4TjHXdGiJyDvrERPVFaf"
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
