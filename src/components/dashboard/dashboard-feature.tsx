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
    "2n8NYpU1PqH4sHnHMphxjhQ4om1dZ6fyZQyd7Fk8yBijUQfpC2rcBthQq6KKvUES4fUZN9jAXHFDtMqkhtKLXtYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gHigiNvzUnnrHZxEe1zHiLrUJgzC3os3RQhmZLGk4a6gweLnPqmjg7AQdkaUNS2QtyXNjNS533vaaqPGy9Kvw7Z",
  "key1": "Uc8oSgmy4oiMZ8gii4hE4A9yaFP5R4886Bu2UYMwCnfPNgxcYUK662bzv3sV6rkKMSoEZjM7KVtxBa6CePdo9B7",
  "key2": "3x2uxsyUzo5p5Qfv3X1TMHGFvoYdgmqYH1eSyCAeTagQ6iYbvixwcRFC7GdVTyuDkgNXcU6VVq7Uf811CiSDt3Bb",
  "key3": "4bRzVbHgkvtVkjwZ6ZgdsJXEneosMazY6wZY2EsQsjTJhD26AShw4BXipZT1zsrdXNQrUaYeiub1wRqANPzZuVNR",
  "key4": "5db6BT4vZeHeyCbMLN6wSLYuBm7zZ48NuY7WgKP5kSsw7jWAbX2WJATPhCHBiu2MY9St97g9aguq3GZBupKC35M9",
  "key5": "2am2dZJzbVnRQm2pa9tB1frs9kELRMk5mMBMFJjWwBSzZWDtWP6STJM495JLPvXF5LokpzmDTUV1gNSkuJF3foEg",
  "key6": "4vsxnNEgv4epg5YdrtTXb3gMiKy78vcyiZCvpEa3mgHS5FNaa7JridhTx1DG16VHFLvP6SysRpV6Px1XPWPHT76V",
  "key7": "5ebLgLng9MiCDiU8NHXXrqhE7GiebEVFMKudF26v7gB5z3Pi7yqubBMoKSvYMJq5PTce32od6v1nynsui9h2JawU",
  "key8": "3qdGGqBHTWY9QG15CyPXC57XCAz9HYbgaAmkNzTjUUZJLzaAp6MoDsBeF6vrCjJAfabx93tNTJWyMhMhGnVEQKoR",
  "key9": "2gMJ8gDsMFwmYB9ienEMnrdeWUNLRxbVN5dmzG4Bd6jN8jPKAuFKVkZbCFNc8CBe9QXZEbiy3rfiDYbFpJBp5N2L",
  "key10": "67q1JhCKq7MymgV56snVG8uKfDcWDqB7m1Bp4E1m8Le9iB4pwkhpMzgTcgdjV9UJTff26KW1eNMSk6YiQqjrWSJJ",
  "key11": "5fGC2WxCwSqSHqo7YyQXLPhBamL7uamADY3YKC3WdobaSB3LBqMaw7LE1UpuEcheznba9N6xUQVV3Py3cUUyWzXU",
  "key12": "3Kz1poYNwqjbcx2xes6GsCkahKrQyKCLdZ41jrqv7dVTZTpjLRDvufKCFEMny8YZpiJNecT5rbZWthhWHZdWGynx",
  "key13": "2qLqAz3tAEpdYv7dmc9Mik9Pfgh4MUtiQYjty79Dmk6JifT4AgAqtyH7RK9A14J2M4mozoBWJaZt88hWmqzxrYNE",
  "key14": "LNNxsR19eAiRjkfzbQc4dMy83B5iRshuGTUMVtfQmZXnyqvad1Wkm8r6rgmeYj6HgG3shHe3yvPVGuphiWKr9DG",
  "key15": "3v11APivah9vjPGNbNNjEEEpm83YRKhV756rYozTvnDQXLFkSL3shPBwbaxhAM4Y28KV6EfARHrPJZ6tP56y7H92",
  "key16": "5DkpnJgEXPWdbDd4duF16D1xUJJu1CYuFrQTo2Y7hkcEjTpoLi3mh7fLuMhzDvqcCAptrKqqYzQx4nnhqXYnLoLT",
  "key17": "5qzoQR6UF2RYFTpxMpneehzCZneXLu78Sh8tV7WhLZh5kt71gjHg1zgcrZsTQMAEnnjkvGFQcrSiJzFW5wx8JsLw",
  "key18": "3SJSGMu3Bpvho58m81t24U1MWjdu4bPaaCNhnJ1kv2dsCPLTay1x84TcaZZTGsuR6f9tuHybtRVMjr6mscvMjN8F",
  "key19": "5qPg8a8RpRk7Gja4v2XydRiezPm1fwvSAZUwKFWp4BkN17kxzGcmftwj71y96t8EqUdK1JUFZ19wM286HajFyoDQ",
  "key20": "5KHV9GXymubSvFFFnDLYsk6A9voA58efgrLaTpFZ3Zr2Yq6nhGsmDSriKp4RW7Ceo4dbJ8Co8Au5b8b1SzoLFs83",
  "key21": "3TpoWjK4Bohuo43z7oPZd6T6dUtwzcUFCJH7RbwvLHoprz94zXxJQ5mNJVRT2PVSeG1LNH6omEwukDXWjwKpeL78",
  "key22": "4VJVmZW6bKoGrGmfx8p5BCz8JqSgZNvpdMCPCnqjtESe5JUg2caDX4noQwqLmSo8GZXRsFB2fiT7LrH3PhL88Q7L",
  "key23": "m9wdXjcJ1yPZtdUmTqUE8Apq2thd5HoyfJ6bNqZz6ZeYyrYViKjxvW2gNwh9b7hdKmSBEMR1i6DnfoNpobrX1KM",
  "key24": "5xohL5EKvFrguH18185Mw8WiaAJgruCHcVjqUNmYa4bhDt73Vwwq3b1BZ2T1bfBbdMnWhYwLbNYD9AwUGpu7k3Ch",
  "key25": "5LrUutuxsv9LUbdZVv4MCFFiDomSSWYuB6sswZMijW3dy9rSoymXhwmaMpTaUTGvSyyPdaHyrQS3J5nkC82JpCZT"
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
