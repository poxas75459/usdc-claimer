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
    "4C3TYijsnFr3C4bog5pouV9JRJFrBpszmBUkidvni7mDHkVj8rEPfQDWeBNKsk9tnaJcVZgVUKoDTUFSUVgWMy4J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wzGCGRWXoBirkqdHV6FKaXxxPEggaMJ77fPipZ8rx6BF6xbgR1bmAAX82PME7pUGbCmwwx3RHJXoNXjgfBofQD8",
  "key1": "22hDVUj7cStpy6CSy8NJHq9SCr7qhmd5oji74QSMTWhiWYs9ZhSdenNv986DQzawaeMxdhnEonyzRBt4rL2rztb1",
  "key2": "4HKrtsLCHuZp9rdYBaFUoJtwQdq4VZUXWdxUzetyidLTYGT4feLqimJHEY2uNKZVDVmJn4gRQKhXWHKX7tTp4jMP",
  "key3": "S7q7tnP1mUwF4FvWXQ79wZkp3g9dvbTyonNy2ZVy14kMC58WxMT7kebSapvjUZqsSq4kaKxcy6TYtTPdrcgfjRm",
  "key4": "2tk2fcE94ze1BatriBNusGDLKCHBcpqNH9Tim34bWYqhyYbaJjdnnbtSEp7KJrakki2SB3awyL1nQ7ztBFCeW3ra",
  "key5": "63xusXhxJMmGZPuqi4YLx3ia56MUp1AgiviUR7LcG5AyK9gPAW6mxXrZxJhrm7WSM4yxwvCWHsU2PneMAJaRJ9K5",
  "key6": "4nK3V13UbCJvsRSKZVpgq9TUcNpU4WD2uZdgRjxKsD5zet6XsEehja3VXep1A2RtmchyhSrwYEPMwEw95hPEriAC",
  "key7": "k1Ah8FWVym9GbbN7PiZnKq5Qb1TjuwFCJg4PzgVHSGpWzdzbru3jaLbEELNPjEcnvKtnpGS4726M6kTCHwMfEc2",
  "key8": "2Bm5ZvzNtdDj882WtdKLrj4uPtcL4Rq5ZRQUK4JMgTGyKm2oAn5bi8hF9WuUir6D5vSgY2yeBSz3SAXUbJ8wa3BD",
  "key9": "NcCQktVfCDzRdH2GhbJ5wPP2BYQYCvD5TVyDw3shXAYP2PrgMtF9jzF1gHYVXYoVfTCFYixLCoSqBWJF6puHfkU",
  "key10": "5FVGxkN2yKqduafZX9khZEznXSMb37Nt2WhX3LXqhm9LHVWFASkQrwmg9Tx7ui6tfqPHmqQaJfBAHv2WynrNXXRk",
  "key11": "5WbUfZNYqMRbp2dfjLGqMDeyAknE5foveZayLm2A3Wyhcpz1iJk3U7TgvVbE8qmFJ2qhQysY6eMUJ3v3rc3StjUM",
  "key12": "2Chp4mHVnBajf3NjujDGF5T3zvsy1STpoqp9XVXWH2dKwzG2bDGRP6F2GAX9YXcoMNxe6xsNFmpRRiRpFHfZeUgA",
  "key13": "8SeXZEHT9VdYc2tHZQqkbFWjTCCSGmN68ShUTryAdAJFWngJ9ciXEPS6ftJAPHFV3LWCQwQrtkt2hZBFoj23ms2",
  "key14": "2ycuH3ZA7ntW2Td1KhkWDxm5dNYQ7dtP5SzRC9UUStQyuvUZkRNQdtdZiYZtCNSwn1kR852sqcHMpAYsVMnvfMuz",
  "key15": "4NyyN7vMabdLBfuLpCRUYEQE9jtr8z7jJeHHKkfNWA6gVu3WehxqXKaY6nFDtu7FY7BRwZdfT9vRKJj57ZRb7aLi",
  "key16": "5epA18EtV6cqYx73CLLw5N8iubSti3bZ3LyEFSwe1kukoBggi6oCNwTQfv93y5UJ3HDjYaBjTVvHwRAcSERUDXaJ",
  "key17": "279vWKFTbmn1M7dU8x2aZU77to2UpokhKrxvUkXauoo4HaGPtUEuqn7fERGQKWGZRA9et83sNUNR5MM8svcJpbsu",
  "key18": "3K9h1KjtwtDcNDQBvJHrazZDjrKwqroh74raA8StjirdvLYC78wgTNjFDArrsDqnX65kQpmwQxWbUWu85AS7MPBd",
  "key19": "2Li2Q8soLKC2N6jnhw734abkYhAwiD9joMhJqC18WzhQQbiEH7C51UK7jFnNnchqqUXxT394MMbtbXzsjQVspCwy",
  "key20": "5wtUeDWGK8EhD3wTQ4SJhXESFJfgDhmCS6iLGgP4Rzn69FJUjhr1RbnZB3T6nCuEwiYRH9mjMA8vQ6E16zur29Nc",
  "key21": "618mzW5UuWXg9qdH834mCq23SgvwJxKFrmMsjg5z6BvK6oAJXA1NQ8FnkDBWkZAorkq2U64zBjtWbLj9hbEzJ2co",
  "key22": "399Pv4FZSysHGTWjRhb3Zy83WXbqFvTqaaZqp6dTvbwN9xaPZ4ovfaFg2oxqtfgcUCBN2cR73L4JvSpLk8MVKj8b",
  "key23": "4DJbbGdYhyk5kbTF33wXCF6px1mU25KQXdMHpP91NiHDMyNcJSY87JPuNGqQbDoB8zBzYx8qHDSx5DtXJRoMVfzd",
  "key24": "4rbN9ygWYsCgYUUhDrwbFzAfXUWe3kMhyKQ72rWhAfdb8hRmuzvtSZxMVMY5E17X4wTgL53SCveywfa6tT84BeyF",
  "key25": "2wiriMBYKbhCYMpomJWkvje6F8V9USKRhAhbfvXmQdfouJk6j3prYxfMVHPceJcFA7GwBxMuY8wUyBtqumBWUXT9",
  "key26": "34DCkWaCAqGxzYyJ5y5dhdjSuoTr4r5rPegBQ6eSqmtneZk3dfC3YvvVTJDf7iUFYCuJL9jqntRSz6fgi59ixZ3y",
  "key27": "38UcLqE2NqkGNVGXDxbDY1T1tT1WMwD5rhDir5yfPTbK8HsbHyQzXsdVkoSHEFFQ366QThHfGCBbTv8MY7zrWitF",
  "key28": "2AYweqL5W4fJfZp9cMGtBAemfSn19iwe1MxPAieZ55pbw5ro7z4m3mU4fWYzdq7T5z5wvUca6nEPcGd9QZbt5pyK"
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
