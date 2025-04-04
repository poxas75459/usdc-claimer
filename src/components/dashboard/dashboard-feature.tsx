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
    "5tufyGZyaVXJVUJRZYpVneGe5o2U2x1NzxzpNt2iR7QunUDzAQHQQdmAXpvzvWeib8M7EWJgsYQtBiX3iESFDJEn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XDrJd9GBYaATb4oXF7ywtNdGdw7U3vd8NGWtQmjyKJLXzTTciEJSSPE5MjvHqS2sm7TUmsGBryLfNHpEMdCfuUC",
  "key1": "nqiFfMt933RiSMutKVLuCHxsd8SNPoMgTaM4WQzHxEKaiNBWga9sCphXoJ8BG78jbCfeAYi7XdRSz5Qrv4LAgAw",
  "key2": "5MT8B5UssE1G8F5o4YrvPJEp59wzcDTT9RkTz6JGazUY6YYAQeoaqtjb7LqFCbyzmPP93DQgXEW8xQC4tnJXbgFv",
  "key3": "41jwFvtXLfqFXaYcpxGcwu7fFku9qAvSGbZ3Wy7c1ZQ1EtrJDjZmA5HKi7QXaabRNzcskhLv1R9eV4PhWYMGh4yc",
  "key4": "2AL4maf2fRVeDPEG3VWJD9vLEi8E5ETxrCRy25kE6D9Np3YJbaEzkfbG128Zh6t5Yp8yREEvJuFEztqN9iakfotS",
  "key5": "g5GcTsSe1eUfW5VCesP4LE8UaWDihnV2q1BYiCjJrhxqPXdbQmnGDuTJjtbPbHy3SY3nThi6keZsYkjiRztzdZw",
  "key6": "4eErZLpSkrEcCtJXMg1WJHnoqbRrJmRkQbZd9jYdwJuR7fRXFkZYaxnD2cJrv51oYXCSNr6dBmM1wSYYAdzCBYhT",
  "key7": "2a8HjMppzSGAJEiKchj948sufUjSjpiwdSXjR6jQzKaoxCZwziXP8x41pFren7YUGkP6JPSDWPFKYD7EY5RK5P6r",
  "key8": "t3z81R9jT9NxRn59AahKrimtD6tmabn6qg3v61JQgnHNvQzwXENn43gR8agXTHVJ5LYRgRnnu5H4FTB9Jad3tJk",
  "key9": "4WVyBnNmpFWp3DygW36Q1VHAvLT3KB7FXcHCD3QjDYCiJmc4Q8zkh3nzWZyxWKZ3rkEdLLKwRHFYQcNi792jVfvE",
  "key10": "2gMQ5ncWs2si5U3RALZxpcp7cqkUFcyUQQqKkLhLceSBP3VH17BXc88YxEqFQcm6BoJeYDY5Z56jf3J1RQogogLC",
  "key11": "43Y4hJYMYpqkYoQm4NWxYLpUVyYqzTjf3pPdr44T6NRD7LZ4jffYdaFMDeR1qcJzsVyMhesBFceP8iaGuNoYg9zw",
  "key12": "4XbonvkDLL6yhdiDQRnTMFjauomNPpRJNtDDkRXocYx3YHeTpxKF52DXRF5mmtbLwfb4TasYvnU28qztqA8qBQm",
  "key13": "QaKip3KcTBAQcWhxsiF3Yd1KmMe6LjUAzzKpMw1N24h2iBnMs3MFLBtjNSMHYn7d7cc3f5KRW1q4FMPYRNbDfhy",
  "key14": "3jF1o8H7f9xvuTb5ENxHwJep1k3aD6z9Q33rn9ePRyAqiwqsTmjnDyDy8ax4DanjzYyirFy9wXaQLWFFdnhkv1fF",
  "key15": "4TtUw8BAHyEJMTFNNPU84DHs1i96NjfiWzc47Qnxz14hZNXdD6kCYdKLro5zwSXazie86nxB9tHmxPeUV8BSDvJv",
  "key16": "28sm1VftVRNL845ruaPy4137421boEvgW51bkTHPAWj5gDpmPgtEzR3gTYSthW1BmfrBx3Npey9JAqB7NGTZeLLH",
  "key17": "rjF52qA9Sv8N9gEDD6qQi5h9yyo4hwJDCbKvwSU79mdFszJpa4xG3oVyHXW52EJkfhKd1op1i59vfnCpbM3vRdz",
  "key18": "o2MhapALEAZTomfJkYMBu3Yd4U9FzWTM3HVrjjQCu4dADDMW7jUnX86kboQEZZix7uuGD1H9fr5f5yKPhXewcDi",
  "key19": "4j1VdWcGDw6aN42rtayZiz8n6sYRtThcmy9oxT8RuQvQ6wGgfn8p4ugSsqsXVe2dEj2ZC1gh8bbJ28Ffd8woRD2m",
  "key20": "rzh2bA4AAgNAcTrm9ku3GbshvjRnz1NcnMnZaFPaPyQXNr4iXq76YvaAaHQ6qHvBUbuQzUcGydDaxr3KH2jE4Ew",
  "key21": "33rhVU5EaLtiqabFSu4tcsdFoB4wcqGcHpFwDRwtwAkX1HL6oJCMqgrq9sQj3ZBmZsav3MfiN5g1ysqoEFaTfMSk",
  "key22": "3wbdeU6ca57VGbmqU96oNgae3Ub1mkMAUk615aCvsCKbwKc2NwGhEkyD9ZFmeEZcVuHhoYNx77LUxQN68uNjBwDa",
  "key23": "4QBBNwrUR2FfTCsYBn6JAbLwJuztTKBM5zvHwkPUtwDqHWHA8MCDfQsGcQWh6DAF4tirNUiUcfEdigLHYxmn2wWs",
  "key24": "5e8yCv1HimoZQQwsS4Wayuy822YVFV7AeJfQvXGnUMgMeJSienMQTA9hfzieoTmmUUCYb7y7L4mNN2pUXHQxqpyD",
  "key25": "5YvJdRVK3wbDQ9s1Y8x5kC4ATQ2DcbZw75RW2jaeBAwL2Gogw1puR9FkTXEyqRr93oJDPADJPVi26zEXrG8FrKeR",
  "key26": "yg91jkLx82L5tL1gWMKAqCEvNEfQXaQLwYBMuBwnDr89ictZZFC1EbUhWS4n9BJAgpQzKAX2HDB5vNoJFyTxev6",
  "key27": "xGxB4TPE1YRRXe9TCresezqDgAeftDSYeVoMeDUWKq4aH2YcyftwRwRTrSkK5Hj2ssGZrNrXf5PuaoFGwbMMoGA",
  "key28": "5nFNP8ie4FRmBNvFr7miVkYspNBCZrWxwru4Hk2JoQ1aiBYg5zFuMDUqg6dPbp7DQ8AtyQz4uLmr9d9udGrMyegD",
  "key29": "4Cki79p2rgwqKLfsjd9TVaMFLEEVNZQcrJDej6CSLVbkpp4a3M5Qq4QGeZzTT1htm5r6Q9jL7ZUCUXwcrPrbpz9K",
  "key30": "4ERpAtPTty3MMoAodfX9RPpgYp88VtrR6QYtoq14gi1jTeDkfUjpqgwUq6RQa6zpHWXg82H9u7riNfv6k9CkYt9F",
  "key31": "vngdLriRuyhHxQdNEYaLBv5WGJrUTVrz5ieZ7YYhe1eZ6v4ASBF9Si4MeUqzaHs1DeY5jvDA9q1sKcwnN8jJMaf",
  "key32": "4B71z1QiVsS4r5itKF5UshskjtqNx2UV3iWc8z1ehD6WW6VZckypo6YYzQT4FdHQgE2BSpASWhioetD8m1AD6ZwJ"
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
