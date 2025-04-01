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
    "4q27v77bT8D5rW7MJ8HFP1XBNpQmCMv3Zwdd8v7rjmqnBtHuJet8WzbCpEcDHpRBWX18sQkqMR8q7ictgoDvGaCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3reW2QdDeu6fuMsWKsRWcRqzHxAQN8yBUaA9ceBizSPeioEraqpd64HomRyvTJ6Nqp6nxwXmxFVkWD67DZCLx5Gy",
  "key1": "3RZUX1FaGz6ENQBoukKf2FmnwhwmUBcXpXpAKvmbfk3H76PDaNFbSdstppDTKRGi68GxtDeQSX7LCijNPdpJ92FY",
  "key2": "3vXBXjMfAW7B9hGbKmGp48NpmSvJMa57Vf7cCxMhnWoaPLwgTSH4i3uhjhqJ4L8o9rUiV6UyRVrizkX5vB5F6fZB",
  "key3": "2A1pv9GSM5JXajBCYEtzEg9BFv2ifXJJoBNLwi2bwW4uQdpZ3foLd98ocPJQUD7Qt2ZRGxeA9gNkDkJGZu3v9KSb",
  "key4": "2ApzP9uK9CB3vPSJdrcE1NozNsMtPCPmmJbgtAUjypBEJ7cuZHCZnSzKU6DyvxadjqZLA1R2T3Z63NBscWmnvwW8",
  "key5": "4u3Qj7fhM5hQHyzoN9nkzT86GZZccwcHHaZaKFZeJ4U8GG3NymGuan9eJhnMRTDoGCEqQL2b23CU37cW3CqTfqgb",
  "key6": "5fHkMv6JgmERXjxLx5HhAa2Dt6yGrxK8WVy1isfQmEq2d23WC6osrjZtwaVGTPQNTDJohfrM7qR1UrZ183mE9UXT",
  "key7": "3yFAJYYy9PPkUds3rs5MUnjx7uPmpqxGwCKqHEdL82ijzPHBDqg4QSSXPri4J4bGszdKQmuS4jan5Aec9Zfecv5o",
  "key8": "2LvpJZStHE6sPSW1RwqKMHwLfW5hyV5jUbYoeh68mLSxQq1pprgcr42PoxezRrmRmu1FynXE2UEXMqZFX7z5xrYC",
  "key9": "55HbSoTdQKyuAwaLunW4crCA9SaE8fLopYj7tciX82NEUcnrFdG8zKc2TBRogVSAPtf7jATFihKJn42Bdp6L4Aep",
  "key10": "4xoV485AxiCdmvpNhtc9D2HBfSiA1za8kcZCSgfcDwAbWhY2PRZDZo1uSjXAF1xCiZfen4TARKFtQEGjon9SrBka",
  "key11": "3wHABqWJWdwYLWwGGHDwwF9g2bPpXaHFMf94R2AYNRfgX4Lo8YhU38EMFqXCdkKbnP6gHnN8UM5nTkCMDHbF3qNN",
  "key12": "3Ke8pT2yxjdgJ9ai6gJ3z9njFjqN1x29w7WbuPou5FADiN9p6LEJWtfU6bU8b9ux8anq3y9fP1rsjSc2XTZBGfWy",
  "key13": "59TpMdNkgpxxgxQJJxE47P2s9yGgHHU3prGWxBAcqtNWcyuc2qos6NL5zPTcPpcs6yQE7cVh9krSVtSPjT6DHVd1",
  "key14": "5ke674MVBcvGycfJzVGp6AJVoeVknpsXZkbKHQMBwKZDTzRwNUbPzkmaA51KXH27VqXTag3dNyu9CTBqW9ZmZxyn",
  "key15": "3gsPoYHNJaxc6Nz75HbyMhkQkjv542LFJyV9AorMa5gchCYJkHAUhwc5KKL5xjvFpnGsxgpkt4Ukg4RfsApRUK9B",
  "key16": "2M8TE6mTgEQWa2DdsxemXy7TamBgfmmSsyV85iX5RurixW86QWbvu7miQuRYfaeSXkVvhQFKj3Zp4pZtNCfGnH4j",
  "key17": "2vyf696S2UG7QCGnKLRLntDFQm5Y18WHmQJrfeNtwmiA2M7WWayrMJoi7uyQ6hBWRy7r2qgm6vfrim2gngeMJecR",
  "key18": "48pQR8AmZ3SyU4j8GNjBGPYSzavYJkFnDeXo7v8ziujtpcJyKdGTVDgtinxAzZgSSQGbBQWrkBJMkm3orHZscwVM",
  "key19": "4dUQCi8G4AynomBaKLPuLbEP2otx45qQa91mRfmShZbdaiKt4N5uQKw1RKfsUJRv3ZwVfct2VKVVmdaFiJrerkUm",
  "key20": "3UiQBDZibpL3NFTQwQjPD9MiUpXBnoa9PvEhCu7mhRT9dabwFarWDxgMqKjLjKFbyvh1ZPu61ugkASuVdnosqLgZ",
  "key21": "wZ7s68bxwQVZ8gtRG3NyxehL7PUQPW4dVK742F3e9U5ZkLGNfsdxUrAin8dHT4QyxkqvkNDPR8xAdkFBxjoMuje",
  "key22": "4s1mp5rQdPEdX9F6TTsgFhDW8WTYoPwNF8s29ki9hgoh6wrBkt955JU8YH58tNpQirg4G6gcUd3W85ZppSSZSirp",
  "key23": "2KnH1zqe9ngRsGafVcvE8JjhuH6JP6xx3YX1AVx21XZfHPunNaEByEw3LxWDn4Xy1B1ce1bPnRwxxwiv2Bp8soua",
  "key24": "2Rn8cw3AdqF6BUSQHaoMVy17TrGNEdH16Uy4iYWPCYEqAZD5heJW61rACagc4AqaKrTjQwY6FGk3vHpvitHZCPxA",
  "key25": "2gU3dSvzbt4uVxxpD6b5KKnG9VPcahRwUizvfCcBrCoa7TNARgnZAoShvqKjHmgrYXGMMX14cpx7k1i4EJNw2PJq",
  "key26": "335ZEviHXs8me3mFWUQ1NqzN4MGQmvkf6NBvYLBTJnLRa72ukPZ6N5cdSWDHgqrb3XagXFpfseYMt1ddPtgEWkyb",
  "key27": "3JNq4T6K7NFvDLLzVMMC6MdtpRJ5rqKv1A9kRxYaGegnY17zCqnWaEyyxLFRht2TbZpnzYpATUA9DSPTuS6R2SXk",
  "key28": "41LNoE9WwWuzzzG2mKgiMsNGorhy3cd4BBtw6Ciycz2yxLjBTutUQyY8ZoongvEvSnnh4y6NB9z559oYPHTA54QY"
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
