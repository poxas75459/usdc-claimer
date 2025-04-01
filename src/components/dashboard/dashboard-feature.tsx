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
    "2qFd4TWupk6XRhxvULsiysJo9enNgPpW5WRzFbEiyW4iLnfzkQoX3ksGGWwmewmaW3Qyoexpa7BdZaEcXwo4NaW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52NkLBwNkgFJgddxLwPFPatNrDKC9ShMxKkaCk8xREWy4KjM8B8MzUA9s525ibN8CRTTyUuRtBxVxR61kPtARevy",
  "key1": "44QSD4tWVm1P1AGRnx8BaTXLEMki5BzgB9JpgY15eLneK4Nh9vp2hTcjPeS3CCxmQqtvDUKxTUfsj2MgigNaCPsH",
  "key2": "3n3SdXHiFi36iz3iWGAq9N9fkY8bEACUDduFn4Ug9QR3st89BAzwCCVJHEP8TSpkDforx71KyCjrq8v6yGfC6dhp",
  "key3": "38BtUYpz7hBqQGnARzfUooVMakkybti3sqDSv9KCKVhYnZ1UUX4iz1cBb3Fksb8QhMDs8rQCvZNEWDYPaG69SEFp",
  "key4": "fPLStuJPuefwjtYDbAnEJ33jBsTXjJvDitgZ1rCtLK4iGKHForKHzZaU8pBW76hcst1XoxxeuFkep5So9TvQkvi",
  "key5": "2wkXDECogyhqVrwy2SEkaGzgvagXa3dW8N3uGzyBYKxWfkWXPzXrp3KGA3eb2nPjpwJegiwUB1CS1g9TQ4yG9dLe",
  "key6": "3zy9RWS7WiFVEgGREa37eEKRiyJ91Vnf3NN6QuXpCdktixE5LBi2hmSv1hMuFXzHtojbbea4bzMc5nB2iDNzCsD2",
  "key7": "KQxLLwYtWHQqf4YbirHbnnTwWAbxAaJhwpNBcNEfHErify4YuC83gjuUG6VoiXJNA33HWEYtjNLuc6pJkXCSYQp",
  "key8": "oSX3PyUvqcEMybQBrwjmL8qGihGU4ubwXSaGP4Kb7BJL4SX92Rn6bBxNiUcyaJq3G7TE9ag2uR9e2ztgr8842QK",
  "key9": "2c6X4jKmJcV9ZZEwWKbdTefkeB6zfY8qi8Sci9gbU2WsQ6XfCqtjPK3JCLZhiGGsVas1gYdpXCqvmSbXRJVHGeej",
  "key10": "3bmDpNztAwRGBDRA2YMTcedaQcpWBoNwGk4TCZfo5JHCtpgP58jXDn5eUjnsUGiK9n5JZqVo6s6vahB7BAFuycbF",
  "key11": "RezrZZ9B2y2G8g5ueRQYVsc3MUjquaTagKbqfFBgFQbzNRAAeQrzzphfi4gXueRmCBwCqo2ZR1pRYTtAac8ocN2",
  "key12": "2zqdm5jMsXVAN7WNJvtgWn25tJEPD4QGUi3a7kUYt7LntpUYM4NVPrdj7QphUp6iU8H1hUCFPCzukAwEzgfvEoeQ",
  "key13": "2PXZuezwLDN6beWZBJYRUR4vNGZeMAVBp7JY3UoVMXDRE5WC1ZMvGwj8E24pKCCMQmDSK73qnnufoMCnJ8yuRhiN",
  "key14": "rxZnJekVzUes2WkHPfaVwYngLxVbA9UeUo1HXJqsjD2bqbkcTL8MK1kLceY9GoM3dTFkHnL7wSs2WmVAypRWEmA",
  "key15": "2hyDQaDigYwZXJHcKdksprnG8gbbukjns1JHL3vsRuEaKg5YfMcbV1SjuVP583e1sEBmKdnsC29nRYgvT9dSupAX",
  "key16": "2VLP1EYcYfGUeRWhSJnTcPpkbyVQxeQyr5SoceX697BH7sQ6NTxZvMvzGHuZ7TB5g8HGm6ymW7t4C3sX3ZGUyTEc",
  "key17": "AHWVeMoNfCXCsBzBX5bxEp7L7XnM9fansVxirLmExwHHBGzYYVuZJRJ71vUDHv81JEa2vC4omcn5LoNuhE61mHN",
  "key18": "4G52DHLRDytsWv16oJZcfemYH6fNvCHYVQfYtXCGXcVQHYqcsTNSf2WnPnJ2yLeRxPPmxNFScSmGFB737YZnp5xf",
  "key19": "3yUFskZSM54Z9FNVd5TRhteKzg5ya88KEx3iNDZhmtx6SZ6Fwwvi4fzUf7HrCwrBN189MrFfE3J3TURFHTy5rUv5",
  "key20": "4pRHNSkpDdmYWz8cGDVP25Q1WxtduCF1sqn2qyMXU9WCzyZogpkvspCXBT2Z8HcUNRGkwJ4m7vWPffzCke9Th6gE",
  "key21": "4riHcbuM8eDxjv82YQdKdsPEPct29PZXGa8mMGDTbYLcbmCS3qKg3doXhJXdfJMh99QbNCM2NyXabvVN8o4AbuGc",
  "key22": "8Ao9uezfA9J5JZ9f4MXmYLaSLe93khwufdhX8B2MnQdJMbRj6KzPDiUZVz7aMBktsBFTxMFCwLygEXVDJndCzqh",
  "key23": "21tHCfYzHgCwLo6J5HsALavCf1Vs9oaUdypCnS3LGzoAdKSBe1yVi31aAvKBUbu3GK3jYddWwBbUAnURP8heMnt1",
  "key24": "2UxK4S2uchxSiFpPNNCbNzu3t53LkDJqUeCYEQqsyw6DbAKnwuZxfukLyNckPdqqUZXLLZEA6zaeBpuwmCQ9RTyx",
  "key25": "RPLYPE6D8f3dyAGCsmfcyVR7V5515x9G2a49zVPHHP6rRvPmhphpg53u26NAWtAMivGwdRioRWqfaNUEoQJN928",
  "key26": "31oMKW2P32isfhGazc4Ry9ngDadN5tJojGn6p5Ty2uUjxLxHW2eYeYnQR1aNYuqR8PeYMtoq68NfqX52f23Jby57",
  "key27": "5F4sdDD1n4WZ9EFqTXhsBdGfeRhezwSUik8HZJSnTG85RGg2KM7rn3YRxr31Tyyd1onAuCxEgg4GtGTmdWT5EKhZ"
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
