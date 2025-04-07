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
    "49j3Rek1h8XxY7e8UE4hZMTghWMhYRSadj52tF27c8TMLhwyewyVNXWQY2HhAnBeYAFRWRStqzREWi6Zye8eiLyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HDwbjLanfxuBbKQ26FBW65LAuvKQVuGqhhVJgNTvJWimmsmwYC7jprtqfQR2HPLgox6STwVdchVapQY38dxFoEU",
  "key1": "5eNS1HPwLsPRpKiPSNPm7nve3oqZ1h4hHQEW8gorqvsdoZXjh3FMD9f1UeFvqgycmMFuqyyqWdvw18Qv8cLh6api",
  "key2": "2EGTmdfnuzszZ2vWsaKaQKKjMCxqGag9hMRzm2QWJmcYCHa9YXTBvM5QHASS3cXWYXh6cTFG78L2PDaCnEcG6tnn",
  "key3": "4dguoeu4rTyMZQCYKgHEQZvCzoXwHY8gUUifGb7YjhLMbbxzov64NiWeCYZ8T1jKRFVp7G3xaQkKVsmAQZd6jqE5",
  "key4": "4Wkz1U6sckFmVmXYKQseFYrLHst4Vhj5Amj2h9Qyy3jwGbhMKUkRuDHxHdrzNCogT4myUxkEKufd11yp8UKvVr8u",
  "key5": "53Ld13CXHkYXWardPx6QhB5Ree1nmVegbNyun5XDzJvpEFhLJTuJr4TiQcMaGtrrjwvhPpfJqiSAS1jHGdsqnMhw",
  "key6": "t694h2yemSmye4hwcjcPQi7oAhvfapQRiAZ17U6u7MaCaEPE8jpV152wcx8jo2PhdBYo1CBvGe3kyBPU2d7GXyD",
  "key7": "2ZppgAD6VSWGyqjrF1uTuysVWuoMYUzw1XXc5D2vVkTMG1KKEbwNDE56t99b4ofYsStQBej1q88kkjwVQVH5g4Hj",
  "key8": "63J5LMwy1UPqv79TYRfkrTaomeJneoLKvjQpxNP5bYKjMiV5BxS1X21khdzkya4Sb8FQH2S9TwhT1xNbicBrqSjk",
  "key9": "5ds7mk7mcdRD51JvfAmrJbutpRgunFdfEpvNkjS2mBdaNtkASNxqr6H6GAahkMRw1zRuicpg41uDA46BwAryp6BW",
  "key10": "2bk7t34fXGAGxGRfWvNx1Lygr7DuYKEjXh9Zzsy5so7zreVjzyMxRGhPm3XKYwGfDGuecTEuBUAadDQQaxTyAKcm",
  "key11": "5ntrpjQNCcVqwEfUXKz48y7j5ZgvxirUsxM8yfs1QRFaN2955o57VmUbETBovQUdXBBcXh99rpN4kwHzHBGTdbsP",
  "key12": "2jyF5qiqvH9FEvF3U1enwMUWH9FCbkUtwruhdcbT5nAe9YNCrHmtjNbvowMF9AA4rLygrMWBBuhc5TTkJ1k3fcDN",
  "key13": "hKGkVMysGBrYff8KoBX64Qw5c3di8opdDKzSQASVtUbEzD7h8u1TWPK4oR3o4x4Ro7Nbje6G4hZHJtwX6qHba6C",
  "key14": "5Awpv6qowpdthde5zdMfj91Htv6KbDwB7UxBzmab1s8t7hvg5D6kosYpSwaBrEi3zcTmiHCNroBs85bG4mZxcNNc",
  "key15": "wiwhoa8ZZfkTKTYFRr9zm45ewjZ2sHPTxKZDzM4VhWRKVh51cqEurrdxbqSRC3WpQD173TvGiEd4X4bEibd4F1Z",
  "key16": "3tT8cFutqeGPFkzF4f59NDN5b9J8rTSDBAt7vLSAUzD6zEqeQxfNNgo9M4XSsfaBs9PifsYVRLPaD3Kge6FcRF4h",
  "key17": "5zDGoZ7Yemt8cuzdd55CFfJb2yZ5r5qYtpNXW2zSwKo39XZteHqACcCB8gUnAY7itq83TxYg37sp2wyrEEPamxUQ",
  "key18": "5Qp2AXB7yJ8KzjjCRYSB5MpJR64ooxiGBe6rwxQTqZqsAj1fURZyNZMuVPVaZbTWcJoSC9hXxkX3gNYYiUqchCWC",
  "key19": "2BwnAuCBHxwSkM1NfBaaPgrLQbUMDg1u11Fz3Uok65F4bWKvTJHzt8WRASSQwNd7anpVeiEyz4N6mpYbj8pQuxHb",
  "key20": "2LFerrrNLXNZgRiydrDfncaR6o6y2szG1bZN6YDpXvuBB2f3BrfgCnq32nszb93kEKnVq67Em4zqdcrebfyEEkc6",
  "key21": "546VVBhRMfQ3ZQWsjhGd3XqXugx4gjG2GqiBki6k9YeyVmwe6gZLimsFj3BdHVEjFBQpRCnfv7t76bs8YGbeuva8",
  "key22": "24X7BcAc2MoaCJy27kH42DdCGPbR2P5eu2KkK5zRNAcxhwse4Wek8PG9ahjLErd9ZpvNSBpHJbKo1wFoBkRoHq6r",
  "key23": "5EAu2KNDabKUuPY9HCaHt58d46HhHyzGLtQAirTT8EVgBXQxMkkc2hZ9uXvbbdmb37SF8DuZveETWDHXvBspcvN6",
  "key24": "43PGSXEg67Znhagf4CfskxdKZA6nLMVFkJUyTqJeDGK6G8EM9xjz6dnJG9cPYZQSB24LskcZz8FDDgxKYfhaVLBX",
  "key25": "JyTvAHJhPUVXVJGKkGjWJXBPPoFAf322ea82srpSa12tEQ4KsFSX3QJ9kKZb65in4dQ4k8kUGncq9P38hUeWrZa"
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
