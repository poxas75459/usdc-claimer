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
    "ih6KTBHL25dNP5bJCbXn7hkrHxWUugoThfFxvE3kjqfi7uQPbpfNvrtu1bP6H8yyYsmNqRuLGbL49i3thoVpmQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mpfDBTtKafPFZ8bva9VjLkGHgJQvyDEWc6x6J1XvLtfawecy7hUs8x8fRyFNccuQ7P9YVznBaqsRAQQuP3kj2T3",
  "key1": "9pC98svMf8KcQzXMBn6nSqJ9yrFXZiRxtVp2i1cKJFNQC76JNaFsjC4N6gyTjftJRtao4Z6LY1ik2fbkTQVVerf",
  "key2": "2EF9XZqGGo1vqr3f3cTeUc8iM9CfXXHoQjH3EGWV9Mj8WgpRqEz4AtYscQCi19k81LsVU3NcEu3o5YdH5PKFw27s",
  "key3": "2h4vjqGc3ZR8TMRBfjuyvXgBzPse1jPcbzYgJfxxF1fdo37o3PVfqVVLd2eKR9U6P38tDfm8dgUnruhCGAmJXEbT",
  "key4": "4hVnppjm4cWHdcBGe3Tdvo5kaTf5eMHDK8xT6r8hwiUYjcCTKrysFHiuCJ6AvQnAJzU5QDW3KoCP3qjDsTSaBwSH",
  "key5": "2vjuxLfBDxy6mTzb3Ru4fT4R4RAC8yXBr3XeMx2oVmDprthmHUDdpgh9q5WLfs6Zmuo6BZ11aRFaAEnPnvXQeb3f",
  "key6": "3GwMwvc53vbt9BDMZ6KwHMAyDXcbExfHtw75K7qFAzpydtgRvB8utKf2jSkVxuQPDYdsxoVuTWyewnb8RbUsrwEw",
  "key7": "365YAKg1B1BcWqbdyjCVynsv5RW5H7U6nRDY9RgkFHroe3nmgKPzFVrK75yewFoMZr3d5HTsRe3YCfmqt511AxzA",
  "key8": "5AF2h4BXTfyspDe7n3uaUAi8dWuTtog1N9wgXnzfNW8dLv5T7jLmtdhwXPvTb83FoEPyPFbxknS9NZG8M8Wq12Rd",
  "key9": "49u5ngV3PRbJ26JDvhg7KWo8Ju7RnUnsq286syTdqfSTtLFU555DmtVQhw43vDS5hZNgYqn4mUGpRQ9Vqk8kJV2s",
  "key10": "uH6EHsLGHibV8dMvBzLvNeW8oKL4pmXgYgEvPGtFfrpm4Ei6Ns2D5BEoc4WZNbWAmSxxpjRFwoFkvwDp9Sa6ebt",
  "key11": "4YpH5CXM74xmTVnw9YZ5EGqSTWGKsVNUWXpJTyGT7ADvKW8EPPwNYZQh5rZt37RQo3dtXokKNUfmBWnCARaCmcnp",
  "key12": "j6VXtMuXEmM8No4NrggCiLZCksEtLkET97QJmFz7VNxESBCxnQHnM8deprgwzUyPztxJ1yMMjd2nVH3QQp44WwD",
  "key13": "4YakbjzVZUAWKPt2e5HR1NV6GJNpN9x9T4UKNKyWgArddbCgpJahmqMSY7d346yRgLpv5PrUaGLGnCvGE12asVUn",
  "key14": "aw53vF6DB9hyEDFBYnxFsbpcPYKsodpRffUwyxDQFhJw7p6V3A4EAUaqGxMsUrmAbFRx113Ago6X7ArPfG4v5cu",
  "key15": "ad4qZc2Fjg5kCTNRURJLKBqbajEvLvQdVygbeo1xetFyUJtbRG7SwNECuhBcnjUwveNBPKXzgvd44udt1KouiGi",
  "key16": "eJ4uL1VxQQwRpRGyXDsCtEzaoLbq3KJpmmYnKiPUjPpCwrmsLg4naEcsEhkQoQWStow1G1j4fer75YXtt7eHXiE",
  "key17": "aoPndXi191eKXnaKraXKRqVkFm6BgtyiSCmifuattpWjLoknFG9SyLNdZHubr2RZFHeDYSTr2h9RUeoz2gLdKKC",
  "key18": "48b2s2ijKFZCnSxY3DTTeUpFHhQ58KoA3byyemWGmiUh5KjWNSpKPAHcAVbYJsjU8MJEP4tWJnvcsr9Yr7R7BdGF",
  "key19": "5hyx5XyAKyQaTHnZQw8fbYUHvBCLgEcrPcnr1bp4UkywZSVXkoqoAWvVHcLA7MuyDSuNxGS2AKPvXRe2ZTd3zu6x",
  "key20": "3HeXcraMGbvdkpdQ6Aytsa9CYErnocK46pz5Uiu8iFJxeJ9GgWMXdmVanKfAa7Vg9HBgPdjomscmho5oDGdqviJn",
  "key21": "4FiRSvGpp7RzwSy2qhkUyrjkn662kSWgpRkTJPgCJezHS8cqguZrFkxMnQWjQ8wiFwofAPwtKbDAqZhYFe1tgzhH",
  "key22": "54s8kjX6dvjgW1TJdfhqszSj7Xw8Q2LQaYH1axQNdgPTCiodoMQi7DhjwhD1wz7ToMPZ9WJXgy1d4vZssYrAiYQa",
  "key23": "5MorRcWR4H26WD9pFRnZoDDsukGeKBH7mSpNAo5mve1HEUYvbB51kWjJNwZqiwZaY3eCGMwoy5eHZxr87GSCEcp8",
  "key24": "5KvWmJYhPtVcdyyQtUiwo29PBdsT1KsVXZAttFy7f6JH4jN2X75icEbfDuw44nJ8M7psBjtrNPz9gf8LxJvDriYz",
  "key25": "4ocxBA7cJDJgW4jao392UnBJF9BWdZ3BxuoLsgVcPafxsba7o1PDdwxUUdLhfoMadVieBYTzv6LWH3UcG75myQrY",
  "key26": "3E47r4uAiFhXJsgRCjtz7Diey7a236WYmuuEzACtRvPjSNsiwr4YTkHCxVbrgfZr7nSaywpTt5i3TztpHkaQ3Ap4",
  "key27": "5fqGJokqSAJBrFTje4zhrDyFRzYaF7n8neiwWVw9aheDBAp1Us88aWvYnCS7kz9kkvC6XhKqZVk9sSfyqXmfobm8",
  "key28": "3D5RdoyaWwCm8gpNsQezwAdf5rWn9GSUbCjdVRh3KhceFACKPWUGDgxPQr571BgqdKyF5RDFBGJUCGz9ekaMrwYF"
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
