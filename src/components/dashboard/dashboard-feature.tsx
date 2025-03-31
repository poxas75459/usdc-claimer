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
    "49CTpcFti81SaYcnrnVxZRFsKpXNGcy97RMp1Lum2vF73QPSvaVnrNPttEBvWTLqthAZgZeaziw1D7JnPaqVd3rN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Fu3B6uxS5LuioB49ykpdoBqSe4t475AXys1YCaXvjn29mYMBPFdUoWpxwHHTBCqnQfVdwDxwD5rUusZthf9RNXk",
  "key1": "53jEL2p7aFDXnBaUeWAo4CBYgT7uvAV6ANmMy4nNBv1b75SkS2oa9U2s23QkyckHnxp5X1Zwgpwr5Htk4HVsqXjV",
  "key2": "cztAwF2yFqaNWMfhzzKZvM9v2TNQrPhr7sZ5UPwbWDeA4RAfimVTAwd5dMJCtKaofH1ue7c2PgezvXDuqpNPCH5",
  "key3": "71G6jZGv2Z9w6fUyz7Rb1KaX4AFjp3GupBrA6nqmjmpdx3kpDavgKhoPU2DnFGKsykCSNYyWqL1Wcj6jpexQz7a",
  "key4": "4Hhamtgj8jTRVCvLh3WjUo8uMUQFh7QBqatNpw3g2NH2iX3oxdV52jdwQ6MXd3yACJxYtHFheF6JBN3vSeLvKYkQ",
  "key5": "2bygZkokEkdQBwPZy9AxUFfSTWKqEjRyf8vooucF19WSb4TsADEvPSuBD3pckuodGFG8aamgXRSjgZtW5Wyo8rni",
  "key6": "3DUHTMCHwbbjWrUTqE4CLZ6utg8jr7aKwnSwUXB2FzUxEmUjGoTuP5xUrPzrkNuN8tHbcsXYtFevTUkMEXRCn8dK",
  "key7": "5iiXYFGjJT4aohsoxXboAGCopcFcZgW4AJ2vzCZQ8A3Ym7sriUEM8Nk3y5ACwxYZG7CxMbQJc86bvJc25PNv5Fv2",
  "key8": "4cuytFcxQRP3Bqj4HXeskEjBD5hst38XmeAC6vG1rdAht1ZcWdiPgoxDC9Hc5EzFzgF55L93TPKuHkJ2mq2AaUsV",
  "key9": "2GmWD3pry1G7AFnntamx41TV3itXwLFv1tpdCyzHirhSjYqfGzb5gnSh4JyqTAKAu3A9nzaGPN3aucNa7HQ7gae4",
  "key10": "fuBc5vXnkpqsvMLbkKQFQbdzEET9q1vMpiyeDBDDbt6zKDbTRMpcz3UxYaNeiWAqynUDro4Et5H8csoRNeBpYMf",
  "key11": "k6qfb9WA5rv1ry2FPNFVijy2kvXJJDbNscPjN8eVyo5DPjVXpPiarDmbDfVWPqMGMuS2tJRaLJ9qPWEvMkENMUv",
  "key12": "41a8zuxQjKbuRcDx7xdRvQ9J71FTT6cgM2hkP5NdLiD4Sb9TWtyhSALom4LCVMQNEbNxteCb4AXoS6oZzvcMxBy3",
  "key13": "QwuiXwcfAoeX8wqJWhJG1aazLqVbxPakZsNQcibAgRiK7yYQLVQuu1D3VM4wNHs5XpL3nBNG4ZuRFUCYqRzmnFK",
  "key14": "34vHHEm53gL81HCJxzhKf6kPMKB18xL4uh7w2E22pxpgwwSkQkEXmQFwRoZUCUk9AcFxVK36bDGafWFW4GindPfX",
  "key15": "4QGvkkj21zPNNjVq9SGtEovSXM2DybBzHThxexYtzFfRxXW6dL6visCtwczBxL8R2Q47PcMtjVfSke3w9LdTywmB",
  "key16": "2YC238mvHCxHRefxgcobtpcR85ein4ZqRNs6MshhDmjZ49dv8ZSpfn8aJNyGHPb6DVR3wRgLyqK9Jyh5ZsSscQJa",
  "key17": "5U5TRKXRwbz6xPDf3k5kNATffp4KRZByepZpML4H9Y9883nAVJbqaXuchtAfNiggzj3upqPvUfKrrT1RVLeYHAKq",
  "key18": "58mdL6rm9NcDfZKj2b7xD857ND9hRQeXtXZ9hZeAzCWjcrG6f6nd7oXFLnzwbosxLXNpT22fWwtqmdMn7qX6mi1p",
  "key19": "3c9DimW143ToGeTB42hQjHTt53P2zX56b3CiQVJ7cbS59yE2ptJMXSboD1AABL3soWaVxY8sx1DHk5PJ62iyiDAk",
  "key20": "gW8KfFxX9pAPFtFJSbcDkpwyLid1LjtyrGCSy6pupb6pboAdWtFpSYgzLLzd3DKNKW2GzgbbXzjCFfeGhiRtCTh",
  "key21": "4nyfqgqXpvfe6CJB2hQQvW8FUJ2ceHg9SwGKbW3UERKTscSg4Dr5BBD8cQhuttBH54ouB3uitHEVUCZiD1abQzmX",
  "key22": "2w2WzJxmyTqTT7rakUSE5iEf6CbU7j1pgcbAafGXT5YHcjvD7T37BwbraMn5rbX3owbUKwr3XfwMZvQacBnmF2Qr",
  "key23": "dNA43V2wiX8v6odMZLAqWS7uXfoXJFokWgdMotdJe7smFWWiJfeCZd5uyTtMyzGGu5uByqKeADh9cL3TXqE2KX6",
  "key24": "54iyHNUGuHSWaK6VRJBA2vQhmGbPoYJEE9SKPTULWtCCBqTjj7SCU66Bce4LTyhHppDmS7CrbxJrETWu7JG87GRT",
  "key25": "5ZtUsM2KYdHy1vGXxEbyKDHRrs9fzv7YMRkfnjhqmzHW9XeiEoJTX8NXepXk4phUXr7VVy1cHZ9utkizXohjFHJA",
  "key26": "mLAjrWFK2EoJzFWon5WEj6XTPVZLMDrtD7sWb9hPXzSEBe6dvwqELws2vKAtddyt36qZGJvRx3vLnJz9xz6fb7C",
  "key27": "4vZfyAUzCEoK9AJGmAahiJbSwvJ6VG4debu9iPgaUX4GefjfgXS5jody1nSaBSyqyf6NKmNq68DDBMXSNZdRf92c",
  "key28": "3ey9Rf9ntm9hH1dsRc1hBWeKePzTS4TFdyFkeKY4Gf2GmtMEmKBr1D7zt4k7iuwArAQ6kJkgD5cEeeFyMnpQYei2",
  "key29": "4dER3fzbN6zQnyg5a9kDfXn12RBm9qxnYWDzMZv42hauY8YXmN8jGxPWbGMicEorXrFopzD88T9MrPEi59kP8ZGu",
  "key30": "59cioLzKf5dyCyVJbCbez97KdS3uohwLpFBZJ3qyKuNZ6fq6sXFc4FviD2LNdtMsZpjuxK598G4bvHVQX7rS8Loe",
  "key31": "3Pjm4UBoTLX3mzkNgnJdAmYVaeUB3bKxoNG8qkvJ6cEiWTuRQkPKa4jCrbGysK3HcQJvoPffAUz4Dm429Nm1z64R",
  "key32": "5k2tGd4N8hWrjVawWUyhcjXAKWLaiya1SfHzuqTsXR7gTMXMKXY59ZLPjHi4R4xZotVQtkLYgLvHWrgqQX4bNYbN"
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
