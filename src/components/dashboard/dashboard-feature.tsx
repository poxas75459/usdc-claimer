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
    "irrnjAMLWo6Hr8rTJ58iWKaGyuBDrcJuvVGSvD1rGYNGoUvq5wVgaqjvE3i2YuCbFXB1Ssiy3YSfpZDwV74qpHY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YbsJMp9327W4x3RW9QsCMKrXP6sxxsUPKJAHP2437nEytNgjPff8FiqFpodArh3CaLeqsYygkoBXVg9u9em8Mtb",
  "key1": "2gmNaGT7msod8ZhXcGF2URFy1diy3Z7rfUDhZRjKXuiHUF5DL8qvKMFLhjt34GDp4W7ytfHfA6dPWvjAoFnTNL2w",
  "key2": "2pY8guyP4q1zhHc1YPhmXJ5ar1tckQnwQuX8LknDX3jgmAgbeMQj9KaYJXBi1RDD3x22uzjPznTKuw2YpGf3nszg",
  "key3": "3fzVeH4VfZ41Gw29kYYgqPYEM5A4F5d18z6TcvJ4CPefLoZpht5KJ7tZC5NH8fEXsAZfPBgCUHGDNjnMvLBhgYbY",
  "key4": "2QYn55aAWrSygqMytzmVqR3VYr3GyDduL13qgTxK7RtKDVFx468miouDhwdF3TYEjLQZdSpzk3zRyGYacZJBNNK9",
  "key5": "3GSPd2KQ5iTkLpuv5rMLWTqFRDaAY9cRE1D7dV6e8pb3vTaPGEf8zUkMivH4rWQYSEmrkDShcemgaudTETJfx3DW",
  "key6": "3BYvnbXyhm9GJEQnGpwqwgceBi3DueiM2zDCNe6uhwzAUKFVYA3wRAnzWu6ZVpLYGKPfgT4pU8H2nQzWbZUaRvY4",
  "key7": "4aWydPtJgr9yKKyoqB8EeTHnQeimq4qab3gLvE2RignYwTXe62YmjXoKgKm4M1ZApJgK8yzfcJRpACUancfk2Y62",
  "key8": "2YN6G4w4qMi1h8geYV84UYdbmuqB3QHiCSqi8jyLZzws3Rnq59hMYX8WXoKjQrEDCcWSNrz8dHuXZjgemZuDHWD8",
  "key9": "5iCY9QPxLrzBQzwFKPcuMKwPQj18jhvN7eLLuwy9dpCQJP1DovUEpP1rrw8MtnK8deBc7d4TBQ1bw4tPDR5gusBj",
  "key10": "vK4chFA7sCFFevbTJ3Z4beMMTAnMY6RhYCJZ2FfwNVnEevtLgrpKHVeBv5Q4UkppETvWUxa9ECek6X7dhGRRbCc",
  "key11": "2na1d8cYV1tw5jamyW6e9JYnzksYsun1cvdBB3hLkKHx6LLqXyrYzqDPseCZsfdP5y5okXxNU1wFvE8fGCSwvQcM",
  "key12": "3SmET1Tz75jP9Dx66cWFGtMy8pU1DbcoDZeG246UcPTAMuagPxumd2GUepHgEikjDvJHzDMd3eaHkGSjSZU9VqdR",
  "key13": "owYkwCJ1xdA4GwHVMS2LK7NDZ97VmcPsz6HXYDvXHoE5A9TJNZHh2bMdhTGnPt6fzyAWpQphTN47FTJEbErJZgr",
  "key14": "51Hyk9nirsQJQ5awBgbEQHVknBmm7xytqTa8aZjHX1F2oKVV6GQQc2BxrGmba1uBiY81bkH29vLrcKbP3N7Xpnea",
  "key15": "3AUinAmLtdpb4zHy4SfgNWFW358zz7pbs7pocLazLWgpzidinYtwrijDsj9nB8pYhxozGKyug1KtP9vEd3gdkymF",
  "key16": "27t7sD5nubrxpVS7QYRSbzzkPRPuBKPNwGZyQcvnrEFHSoiAzjX3EYroVTJ5fHjCm5u9vGmUowDAZj1x1LbV3ZSn",
  "key17": "5fo7Qr4enZaCYg6X2gVEnHx9MxvQWkBF5ZeYDD9H5nGW9PL4MQfHk6qP9cPAwTymhy5CTphNCrJFZN8ys6KACcSV",
  "key18": "3pQQLy1ErXdya9R5jCNcJ4qLLfaWoMkK22uXyypDDxiCqMudDF1tD8vJx3smmRZWpfupprFXUP4Bmy94wYBngkQc",
  "key19": "4fCsio8FpPQQEHa22Vz7TFTN2yVH7bZEJ5ncgKiCznnAEBLGUdPTPG7CG6f8gkfckY811vR8SFxpMKzXQo5dedh3",
  "key20": "3Burrp8oQXksB1eki6YLr3HzZnVmmsrRa38AddZC2CoPLj3nFh4jxsicxHKsdYXMRNvFhxqNQ1R14ft5v8psCGWu",
  "key21": "5oeLERDKrF49bNXjuJXyhFJHYAaNhZ37K26o3WTFdsWyrmtxAZTbgng5np8TeWaWBxWnK5ffp1heK17hmsMYH2qy",
  "key22": "644YuCbn26mmdw9n5xyZS9ovLLA5Q6GyR2fhWKoDK892jh4EaJiws6ZeNqxjPnTmp3HTRgHCYRaKuWZRYwt7Yf4q",
  "key23": "4FD3Fm34HxKqEy3UzjDUTRGma81j318Aw5BoWo3WZLz3ktAQzhYg4SDzHkYAi3reVUbR3hwADySX4D3GrTWSSaEL",
  "key24": "2NNye14sKtVPPQN61rh9c8VPQg85AyMF8fR8WoetqqJqHAfJ6XCPQQq8KnMqAFKWvd5oj84eNwkB1a3Db9y1NLMV",
  "key25": "uFVCCJpzVr2VnqRnFSJRAAZtu6pR4bu4m2zPCKhsg4hPt9oVgBFViUj8UNPXVnq5b1xxTSBjDTQErn9qUtE4WHn"
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
