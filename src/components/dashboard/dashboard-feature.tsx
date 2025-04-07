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
    "3RaKCoavnsVsuWtnDWDsuzdfxK11ggqcUtkcKrFqripvwHAZ5Whnuc3xnBYorAwaescwEd6GiPhieiaMJCKvNeoB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66hGAfiZRugfepX1MXQDxHrVtRNSGWDNAVX5d7NKu9PCoyxNpwuXPeckiNXjmgJEtEm4kNrCwQ7bzPP1PWmsMTkb",
  "key1": "2feKYxKsqQExRDdwMbhH1W7FzZvFyMZxtibJSV1j3FFKd9qbQcnMQ6q4bqPReNyTFWY7v1m1ESvmV6jU75RKTU17",
  "key2": "5SC8XnCqu9DRV6afLvUbWB1UfS2mkJWurArgEDPeiQj2fCjb6oFnsMp8ymQRNTFzBB1Egw6VobEP2ZKfEXZnRTZB",
  "key3": "LG9Q6TvRkrBvetwmQosBc6AzyrVmRGdiVvc6ZPGudh7RKvKPYHBXVGoE82uD8BPaWW7YEbGLKNPNfzySnuvsUJD",
  "key4": "JxxLHgh3Gk5y8CKAZQMteUnqBwbA4jAFdJp91ziPLnBr2MvNcpQhkmSDgL7sNSfv62wLYpZvUNmuWvkaBgDqZmg",
  "key5": "2XEo71gi77oK82SNTtFeahbceyAZ3DAFrZRvbSVmzz2HhcSB93gjWj4NJsZfp4yq2kuPBgtjwira5P2WLF3LvVC6",
  "key6": "2pdR2eKnKguacAyTvk9XdC1NFjJVwqhsptMrsrqFse1ZmPmSSCMb5FgccfonCsPHeH3vYKPcL1FhxLMNSaL8CaZ7",
  "key7": "4m5iZPzo3JbCM7UbBQTCY7CT9Vb4Z8mkaESxUCGmViWEiyWUSFfdWbtQ3Z8fryTAuUz2gXMQei1dTPzaQG9H2r94",
  "key8": "3W4KwEW279VELhg6RL3qe1VqkLcND3Ls66fuVj4A7nySpRPzqPEYXkXthg2t4Ngo3W5PhpcC78on9a4vdCk3qRon",
  "key9": "4eiadDvtRT7jJKxnZErRP22L8YAVEx6UejDJHvPbMfK6LsYzu8H9D1BKQZJNLvfV362a5cpLFaMsY6jkS4zgAze7",
  "key10": "3ua2EhXvCxzFBpa8vXUycGdW5USB2oLtJFojBnJzcso4yLybKoYJ7uLaRaNChyqzQnSwKDFTDGGQeofhAEap6SU5",
  "key11": "2aFTPH8115vXcBa4MCqognFKtw6qBab7JKcFmXzWfs36qnxnfs65R2JtnL9wFYRR8dRdwrpn92ne8F1Fh2NG71UU",
  "key12": "5qbpCncUXthJ1mfyrNpkkSfCUPE3gcj5AM2V5rUQZCPmo74D4Stu5oBgRxMiako7Fc7XxyU35XxMctBjBstQ6BCy",
  "key13": "2aSbQUh4vZ1CaaQNt2WZrtSqcKA77gPj1iyMsQFQ58Dwg7e9jY8ENZqBZDNGE7QHDmsmuwwQkEerDLjuTWizSJ2P",
  "key14": "5PYgosS5T6hdHeW5rZPvmG9dBj5L4nBqims9GH3jav8Tg8TfBD8D6zhtsRY1gApMwutbdx9Aivn9UC1d1FWAGDZs",
  "key15": "5RrkEnkr4dybqaNV6yjxuDWd6fFR8APingFsXzVEBadbircoEYzZtcQXJFRnonyFLFAvrFVZmufVJ1DJMMiHCmdV",
  "key16": "8Zqr6HBS1gNZBpADFsjsvBpK37b1Thh1JLQZnFMkHchWVqCxqu9dSC5t7ngrwmWgtekut1GKCWkFqCnk8KYKyRR",
  "key17": "63V8m1ZHcV1aq1xdJV8v6dTkXDy9xHqLEgTns4PeCUusJ5cm8gKJAAE5JPLVHtUka9GwExVAaK6kV3oHqjN29dkp",
  "key18": "3ip7iXNmmrxqWmt9fgNdoaX36A9LCU44rh2Gvv4UHXCGb6ULyxkvy9n7TsRmYVY9atJV4jRKmGHk3YKxmnnEnf6d",
  "key19": "222NbCbPf5AngbufEB836YBugMqDHPXhTiv5t7nHVHdToti1TMNWo6hMMqLnGBMjNzyW9NfeCqcSnqgujBpnadZV",
  "key20": "2PJD2kmsTEkL9KUMEBrbYqcH59hdYQWjFBND3F36QZ7kF6ZGqf4MymHBnBQ9M7dp2Bbc2LuJaEhKmRyxhALjgLo3",
  "key21": "3jV4iuAMpeGaJiFfoFxg3FcsVLHeRBaBz7NxhcXdUBB31GqCnZk9mP16uusePUoUbv6JpF8capUQScFckJGMNBuD",
  "key22": "3TEbGRpYMTa6H9fVvymSP1wXpEtfcTaq78WH27J6URTVrHmGsuV4aSZVbz7DXryc4QrZbxvWeSpsyavzr7s4A8hm",
  "key23": "64GSW3DtHu8ThEwQgwt4JC4wRbDhPNRT6XjJLpxJUKvgUQmSFN8y2fKNGauWTFu1N76eZaiJMqmmDGR6bB2Csx8W",
  "key24": "64HoN8w265Eh4SYDL17A75yhYEwDpabuoQtCKvikkcCT8btPNQKjQL5YKZW48i8jpKHMBpS4gTJoeWFVdQPhWith",
  "key25": "4ZS8LqKS5RFfcf1AiJ2ULZe22Unhn1m36s4xLrWKrnzZgQJuy92qn2b7JFvExAwQRDrxbs418rH1YQyYz5VWoeje",
  "key26": "54XZZctPwNv9iNFtfhdn9yduEN63CeTXa7zdwidBumciwzQUTZauR3DKS2NRB3jCNHgg1ZHRjyqjCuNNxwDMLvLF"
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
