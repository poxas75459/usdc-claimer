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
    "4Ntn4teBAV8YecMTZzpAx5pSkRoUmiVeuxern6vkTpfLHJ3z7b4V2eYqhrgNz4Go99MYfqhXXyJRskY1JrjXXmQN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DXAxjXxpJ6jWWzeieCJvwU5i2qkWn53QSH43VnagPRFmgT7Wx9Y4D77MYpHD8vheypH2d32dqyhQDM91Yi5pbuW",
  "key1": "5LyknEL3HhKYV59vf8tXXuLqx2jRwJMG2idF1NvgaBygZ3kPwMxYZTGYjzwnKGYV5qrST9pq5HoGAYrxAEVd4Ga8",
  "key2": "4fFbvbqPDMo8rawxzi5m4eUV9RbqG1FuJL7yigyn1wPWoyvHcRLf4FEzCu6hnUZywVVqpdP4CAobFxB5GcbbqpbT",
  "key3": "5kfeMqbRPJjmxUqYfNXd5BnLTo6gg2LJFkUhKnzfbLd6NqW1R7cqh31Jyv7quz3bZkBuqB2aRSfY516GUwbw81xM",
  "key4": "5jrLTrMzAGb7ztxotvZS6yoH6qKbE4J9Ux1wkyRPSGuv5fJu2YLXZ4Y2JP3NsZ415sG2a64QSxC63A8SKDss1zUa",
  "key5": "5mgkDSSxrT8XG2Na6QP6VzxqQJ5xawsMbARnUdQBPx99TZXLfmoSdV7o7Sh2rsE3wi7DyssWTTHAffc2BpvAK4Kn",
  "key6": "atQWZLeUDoDaEEb5U6fWpKE2tRbXYszz89XWXP1pePSGBH1oKh6s94L6jbp1ZWpJmJtkDZuVGABJQk6M4VnfxRm",
  "key7": "5WHGitEHRHBtRNwLo75JhcrGpaxt9s9EyhWgN7AcFW87e6UFyg1u8PSXscFDYfbpe5Awx9esxhx1PScsQdUe1Q6x",
  "key8": "46XLyS7mKUV7oDi7hfGJGEH4FJpCtRNFCK8Q8XS9LkNsH5vFb3G1rFhG4of4VCCdocFc474Epf3ZqgyM5vD2yQJ7",
  "key9": "3wPvVBHfX9eW3iGgLtQ2G35nZtrqFzmRiTsH8DKzwjbZxtgEAioBAFsnJnNitCsDREmJgiBVEcs2em5YVzn3vn6C",
  "key10": "4ATPuWezVevFkYdVAGGjtwX56G89ffTMpoTGgs2sXrsSm7ufEbJxL58FsAev47wF37EZiKeh5aQ5mCkNX3RZm3iT",
  "key11": "2two4fTT2aaFaQBSHWqMqXuhPvz9HS7CDF8U8rxtDyfkww4CoKLHkwABBCHrwum95S9RdsqmJ7XRoUs8qUNpzvCN",
  "key12": "3M7MoE2pfP4YBuTzTMfn9kexWAcQnfRfAiVBZk9c8FCdwgmr3BSNjwRQVcZ5SpxDUigZseXkJTg55Mm4T8gceQKp",
  "key13": "WAmhUbdcSNCbSKJWBz9xNMPuMXj7W6XckdNLZWBuKEAEKUNnPJ829V1ky6jrEEqeUWNN3wt54ZoQvJG9Q39xEZ8",
  "key14": "5sJibfdSKYPpscxsNV3Kj9aYJtK7f8VjRo6696Dg1AXDMViEf5NRyaKzFJax12eddsmBmhDJVFLdc1sD8wiKcyPb",
  "key15": "5P1dPtijhcGCfWbmGjt8ktMTyNAqjtvjgmG6TcTFuJYZEa1k7FnwbwnvHL9EmRiEvEgLH7p6bMrRAEYfRK6HXmZj",
  "key16": "2FCHoHKC3mJwf4s9iJPR4qZiE4tNRcgccT1S42rpuwZXaSgHCgCAvoheGQNvQSbSYQP7AbBV5pqSSZB3QwfpughZ",
  "key17": "2RAvhZvBxgcfAtabrQcq3fbPXZrbWZRVCirRyfJ8Yk4ZwntFDeYaUopUGnWQhwYy3Y331mGS9KaenbKioVjFYt4n",
  "key18": "Rj33tKDTnGMyYa4vKm9VrvdRWSJFHjY9pUnDucNvVeHnR1veXPHZLSx6LVFULa7ZYH7jh1AqZ3G5xB97t7xcGhX",
  "key19": "2WA8gFT23JHmk7MeXBLHKiuTFQKPq6dfALa55zkN9p95VMRTuVarjWPrzCYTFCqxZV2sedoJPf2hRofaej5CS4Fk",
  "key20": "A8Vb7DqeTk5o5EcE7kM6ogDQoeHJi6n8hZZm9gDqhnVyD8Xk3Tg39k2PKc5mhKKcHLg6RKqx5eUhsDA55cc73tA",
  "key21": "5eJtyzKvEB91ZEPf9ah4nhcRtJQRUSewL2ygpnaPaGK7r2DTDLeob1gT9ndBZGezf5CLj9Zmwb4RovAKahtW1vQt",
  "key22": "uR6zs8gfEL7zvVPz9SjMRWtQZHzYTTdFcaWmTtAwjHwfyaocTU2nvFnm9AwtEi1zBaLaJfLg8tkPnaQDBw5XNdf",
  "key23": "5JpAURXtapB5hPwSRinNPqebMthHJAv1UawML6L7d46BnHJmLUZ3sVhYaV99PbDm7EUzGKDsTTbPcJTEKdoRzHNu",
  "key24": "4ZMbjXai9uu3RG2GmPyrDoBGAJ45iPLNDKdkVGf5w9vLm8mC2cJqJqNjJW6akCxTz7FGw1Ue5WbBFUE1nyydZuZH",
  "key25": "3DXcsHn1EykRp4t3Yqaoh9YtBxtzpYYARMqLXJZpz4wSfVngZGH13EaYbTuXfe4LgbNQUfW8W45xfgKT6vTQY4Ep",
  "key26": "5tJqnyfpr5GvSeSPq2jPvAAtahT9HTfK6jq28WzvsScBFFXCaq7weeB1szNgSxeatn7hi8U2Ejy6EeXRA2pDbR84",
  "key27": "2CFpzKHVptkrVbuUZJePHqHP14BSCcuiZ3sVvpJ882PodPtHYvi35Y1pptiEvBP9gryNP4vQEYpimDx87oGKeBuv",
  "key28": "5FYwHQFQzPkjPhk9koNzKWBqEKKxhwa2FB65FtApdf89PpD7qDJuJDR8uABck7gYNX2Jer6EdphKphsixc28upUV",
  "key29": "5DrRZZPpGCi4Rq4tLh5G1wkfprJ6mynrQhhyB59LVpbKES5NQYGgRPrp5gu2J1NfJLouihaELDrexEX65aKjx2FB",
  "key30": "35W5ATg2TSqoGyxvK75jLsqy2ZGXN7mFa51W3eho1bwGMxisNzh84t4ehHXu1Yz3FPQBT7WQJuubyAfBXmttreBf",
  "key31": "4PxmQpU9UhPBvjqUrDiuz9Vzwi7ssHTV6ZUjHPUrTuRXK8enigM2dFGUUtfQUAh8E7bV6Ljyr4md6Y2scSoB8xhK",
  "key32": "4SxHnoAtMXKNU5ocfQhZQfiFE2X6dNTK2n6Rvw5VVnBCTzKJN9vefHv15Ckx5QjxL1soAexZSQrfRJaxqDZZidJq",
  "key33": "2NJjqGN1zGiwZZRzF1kCaCWrMPt46XfEejZYuTNqNsTdV1EBnPJViXgqg8A8hE7ptAL9KzQZna2AHPxx18qSE8aS",
  "key34": "5nkWWizGosFcAAxZG4fgzoqe7TqJXbJ2uocHNuLH3FWK8xDrETDa4yTobLTqcGELUNG71smVxX6Sk9k7jSTvxuSZ"
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
