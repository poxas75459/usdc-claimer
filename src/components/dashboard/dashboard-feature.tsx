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
    "4USNqbvLgWFNdJQRC2iLTwfrdCNPGAmYJdSYptCHVBDGNMrCvsnr5vrvuSYuxzcsfexLV4d7V98zUEwxPe8rhiAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HCXsDfRs4bZRkrgmNtmeE8KjAHcRNZWEqSr5mkNYLcxoTvEX6A68ZUfRfYy5nAv82XwePg5t9NcVpX1StV9iWV7",
  "key1": "65UHz3mfnvmPq4Uguu2dsynFF6mj4GHsZcKH4oGF7QnHeBbW2rREjK8241ESq8b2HzxKsUnixoYCxh7UH2ZE1w9H",
  "key2": "47s8cWKnccxM7Yv4RnRciJPyocMoEBu5sJRzJs9XqdUBsbeuUVdkPmD6RufkG7Pwk5ipSPsNbJrx21WzUnWeau76",
  "key3": "57CbmVPcQcfiCCrLcQrKjXiQcDchA5Z2Jnr3ESozkTkj1YxKgyQEuF78oMdbR2sxDwo43oLqPp83hMzXqzbR3gKe",
  "key4": "kxKGp7dtJc1qPtrTYQq9DwJZ9f4m11xa8AUMk4uuuKoasGxdDFimeYA6HBZXUiYDNWFyGhedaAjMvQ1NG8J3nQ2",
  "key5": "2c8bdyTLWBPet6xNgQZ1ZuntLFMtgvhe2h26u1uqM8fCstZXPa9NX2UDysmgTt9QjhtMJrnnYpjedZPHnMxbYBLN",
  "key6": "5qPrMubstVTXFpHcpAfSBhY6W4kyYeqDJyH7ZqrLkhYBEhfi6D3q8SdejuGhJjWxXKoaGkJbi8jerJvchyZFyHup",
  "key7": "5Pt9r6XyH2siSqwoyZ3GiZrht57sXvTvzJXN1AiA9tP5h3WwTnpumqnVBaPc4BykkyiQ81ivtgr1PBRCE6n9VfYo",
  "key8": "64C1scr1tkGRhkBJ56i6npVLEyXmy3GYEThW3wbYBAq72GUvT3sKzpBootoWoZmcKXZKpSDTUR81TwPZH8m7wYhp",
  "key9": "6FdFw2DwW5HiT42bvaS29LksLQzNFi2Vaim3YJggkC4Zawfvbvu4egwD28tpPoz2RqF44rcbyKy8bAW3gCVsj9y",
  "key10": "5QoDhMjuqNxzkCEZT3Wz66dsVdxaGBFAB9LhB832umCHXTZ2b3m4BYD2oQanMeGW3qUB8wcHZE8FrTJwG5xX9DvY",
  "key11": "2P52A3TXjpustYARve1wBtBFPSPes87WnPAQvPaqBoEuKMyPZTEMHR6k3Gv94Ps2px4E86YqJYvBXdMhJciTkHCM",
  "key12": "ccrjJEe7mwwmVPXJgNr1CSN19E4sPVTaJzw3ipyn9d4CpkFtxMibYzGxzzanpknorp7FrRXPo4hecZWV33fRno7",
  "key13": "5YfUmHJqv32B8fMncB7MNodXqAqgQT6LRaeanWV3AGVbWxwnn5GQZh6VWX1dbAD7cX8PysJxBcyy7iXGMEFAADyH",
  "key14": "3HLbMpmi3vUzGNy49fJ3yvXaZgDMVPWjyiM7p2ssfJHa2Guwp4AUhgLKpgwxqQ7nh7fjEJCz5Ag7hPajYjmB2sYR",
  "key15": "4WqUuUM7gCQdA4Ceii7fMUctbymbKxBf8WdHqfaLBc9fhyAbCMNqknHpSN1JGfL7FWMKbPxN1KAZfnBuUj8UXBtF",
  "key16": "5NUfRkFKE1pSY7u52ACyQtCwhJaKbQ6CqYqE1NoK2PVK9i8QDb9weYc7QfMML3jeJ2tnT46e59W21sRJdbYef969",
  "key17": "61cNxBw4ytiDcQtKYrGgRZ4brTTumgGmrGv83GetfZRjRjctRZxc4TyWSY1RKZS6tA22urhU1D62TJMSmX4HTEXZ",
  "key18": "3z7X2mTA1Q17CEtvEYrKRKEQ1c7gWagQrFhQ1XAL5WJYLhudWGu4dF2oxFLtxvoVhSfc7T2FmXFi3FEwfCcvBUds",
  "key19": "5tw5B8pRxHrCE75yzfwqeSWpb2BSDKuyWN4jXajV19jCAvYRgiXqNLYRC8RcVzDUHMWMGAAMabfnUAhTK2ZVswcQ",
  "key20": "5MEkXpBfJ8CPPZN4TwaQvZYM64xvg8vnWoq4Nv1cD96Md3VapLXscFmNBLsHd5bNNU7G3Xpvs2g5RVTFF1J6Jko1",
  "key21": "vDcGTS5iJPK7GtGj7arLPmQgV2VXE6kvHRHAt3EU6tZKiNmgjo3JkAG2uFARPwgy9fcEg6Lmpd9K5As43iLksJn",
  "key22": "3pEsDEySBLYkXmP5ExGYY6VhxbfmAH1gRJ2wbRVryRt2M6n35AHgB5BmhgnYZvytE5AXbGdEmcpNbhBfWm3WdPJN",
  "key23": "QUyuraFKRYekwYSDEZFRqUNHCrE7WDdy1mTstX32dADVxLzu3KicM5vVoEFDacWemLkr1YXiskzJh7UqJFsaVwe",
  "key24": "2MmGcHduwCzqWEnNgUarhQvTYZk65oLCmfC9Sy358NGuddXkUYVwW7UheZq72bLY6YrGxt8wAqVNd71GXatjLMq1",
  "key25": "6rW63TgrnZ5pw8SDY2zzQgYL9JRxxc5dZhirV9SgvUbwUunZJmGp2c4kqnvc8j4nHAvEr4MTEdKcbQzk5RvQpnw",
  "key26": "2kJ8vEaqK4h5cBKrbePRJsfSehT6yU7E7WQmmZGNwMTagvcx8RmyvZoqogHfRjSqaPbdzhPfMQ6PvxjwcxLSzreZ"
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
