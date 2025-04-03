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
    "4iDjnwgWWdMkbSpfJrnM3QSADr3XCBbG9MpnpjS3FEoj5Ssn5iXkdaH3yaX8VVLJZC14GaeHptFuYgiwbQFGMSf1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uxJsQYdCXecDKANWkUtezBUqFwAGNGGRXfyZ4UgrPuGnQnTyWHzsEghCPrUddk8FsdUeDYJePhwwVgSS1xJEvtA",
  "key1": "qRTkrCM8rFJiZYHhAjBd62aapow5Cu92vq85tbQQoagtrt7FsYbH2No81PqFKEVJJU6BeE55NpLmuESpbaumPup",
  "key2": "5Rw3wCCSWWodepQNuYSyydGsgnPmxWYVYiERdUMUeUXTV4hC6PuTaeDz96AAy2qw2Yz8MijFdrRz79NVf8Qe8GZc",
  "key3": "2CHjHXobHZxf5Cq8iBXn4La8eeobM4rYpMrGh27vS2cz19TnTEYrVjn3KTSwL8pKknjDY8Je9YxeFSJ9ZDuQ2TQ9",
  "key4": "5ThVT26VZB5G3KihzpHEoXvWT22SoKXDiNMLqS8E5G8EhDAXjUmejmcBeTbVcnTReb58SC7UdH7RrBkkrSxrB42M",
  "key5": "3NatX9x4QxP7Uf1Lmqm5i1i4jvK7Xod6RpmWiab5AMkWRRWPBzzQzT7LzYuh43YtY7E2nkng5yhywF8ji9MYxBNC",
  "key6": "3KBfQQAnfGZWv8AiF7cnLLb9kk1tThdFRHJJgFdgHWnE2d7aJtYcSK1rXm23DUvvzzkVg8kUccokrkCkRSLALWvY",
  "key7": "25eci6UeDL3FGJgLTLBXeuc1rVVtWMeuYkgtP7ZsXK7HHTCrxjZnfZJYFs4v3zFVJjP7Af5hPohdM44Sm8wPJmak",
  "key8": "4yF3eX2kTLXqTdyR1ttE3FgTCkoxnL3EocJfLiFuJHCWk9Ker3qspFoAcrvzzvNDebzbfjj5Haf88y6m5MrQtfxx",
  "key9": "4p3tvtthWrBzKjYGSB4ishP4MZMNhAur5zBfF4T2YeN2JbNf6TWfWc5WSnzbnUxGNZMLqfAx6qkJnQtKJsnwWYwq",
  "key10": "31tedhcJ3w86WuGdcb9eY9G4KJWV2Y2u14Byh7RbbzbKKzpTF4JUudusNLwG4Fi4deREW4ZZ5igbhprBTFABq1VN",
  "key11": "2au57qcWdXoNdQeBgqZfE9Miq8CgLiQJE4LVwqNAsAnVm4xhPCdtiMHQYQRzZMpQky2JBQj4ErNo2bKwTTkeoQtk",
  "key12": "21WcyCWy5h3vPM4ynZ4RF68kKncyic8qzZcVMLeS9VbFFWqKnxFTr5196C1mn9qoM7EQ3XVjBhSmbdWjPUfp6b5R",
  "key13": "5RTpB5JxEXy14fvhTN6ATWMx2aBU6hua5NKgEVW22L922BfDtmc6bZVVxKGf3Rf6K8k8bjUTQe6vva5ZfVdzaFcv",
  "key14": "45RCrTLw5VLhoohzskKs2gidRiuyjbuBAQHRHkoZFim7mqdP6FAN8V9o85iomkGYnGTFo6uzpp2k1BztWcD4sEHr",
  "key15": "V5HKxXuDRV4hDD7ddEW9N7EswPfVnMcqc6Td3aG4BDugpotR6c4XKzQVnZv2Kw3KzyCX8HRwTHRT5jDRCstK7AP",
  "key16": "3Af2DdUj9ewJstZzyvAzu1wbT8XcLiZDjF1mcaS2sKoN6YwZnE3ZihVWcSrhhGG2UpAUEC5LgASKKtm3ruWR8AS7",
  "key17": "5wcKDgYq5fc2C7AUrromSgqKag9VZUzyi6Jbam6YMsFahiqHK4zVwsez7hutA7xBKzWW4W3vrteaGnW3AgDDSvLK",
  "key18": "2wvddW6WxgdTENMKS688LnhQPDPgVnuUQT3VASuC8N9emEB8VTGiFJ75BFWZWJRoFsNoDxU88kWEPLoMjgCaQd8Y",
  "key19": "Z1wCWgXK4UVUaHHw62zjuREozHxWodHz8v8QHDg7idMNt2CsCwyaxtBZSk2MAVyEyBPz6SKcJiZbxBxrZf4hMaJ",
  "key20": "4fz7mgSY6fk8znANrpdUURuv2L8A4W8UUNwTQpuC4teKsLYzhRpENfoWbs9JpS2gaUE5B3JHhvXFiiwWMWxbp4em",
  "key21": "57sYpmfCGaqdBV7nCnETxqmgvuV3veRxocut5cZCx2CGeNYd1XdPDHtKwyFceoRqEg7KGmyKoWcA9dRSM2y94i1k",
  "key22": "WAnC2v5daKYB5dVSSFnfhcoseFxmXUoYqVusJSV6JSJxoctZ2sTnUvVSwEJNq1due3hT2LDD6jZfo9G3DR5SMUa",
  "key23": "37GqVBYchSGVFLY3sgpYhQQdFCrQ5hc1fJqmPCNvJjZu9D9N5mKKEcBy1DW1cJExRH6oewPGGirDcD1WrVqvNoAX",
  "key24": "3Dg7HCE5dfcULHRNXrpfvtgT2XgkyEVepP5EwYGFK8MkEkCSnorL9L8rWMqyRtGGQkd38ATeEMkHbLnJXbGEYmUA",
  "key25": "5T2SbtjKKsd7J7rdW6QXjgZj6aaDHNJfLokRS2uYan5H37xvf89GYzZMvWfytk4G1YpbwUfXVscbmkrevhnaNjU3",
  "key26": "2Fo1cuq5LwY4Y14Y6Eomt5aujAUysHn5owTDxroYaTXrfFqZYdPcCVoNFoAP5xB7P8kBhPZ7v17xuEQExwYPH9iw",
  "key27": "SWSi3e5Jn6Crf37rgZ3nttqFQdpefyMCktPytTkL6cGmse1vhY3SHTsHo16h8mFSy2XDW2bqhA9BcmALdu3QHH8",
  "key28": "5mpSprSYi5MqtPH41mteXCbvwSepv5fh4Q1oxF22Zp4DyVxpQGFY29AAVhCJMaZXcz7U8P1nMyRV6XnZw35aWaXA",
  "key29": "46ECG3GbaciHasvkjFCQhMsLyMpHPXyJ16PD5EuWThLzdXEPqXPwCJoHCymr1sNHPeK6PgpFuwu4fUX1Xy7hAyMw",
  "key30": "4Ccqrq84ns6d2efYKmcdFiJMqTmoXHTHRkj5r7aQAS5LGxztmzsdUJErEXZeGjixUXrKLjS4hAU6qYnfRWCBh1nh",
  "key31": "5cnBxKxLYbJHPHpAoRks25w1vKPBK7x2RP56Bq8FFgTYgt8ZFPTsCXSHw2rMfShHGtJFbAapLbdPT2uxM6XmBBeg",
  "key32": "2ZcoEPGApUmDJRDM4Dbe7mvpQc3GfhM68YU4G83oArzoRVCVo4eamUVTLAzTPQXrUqGxDiU5nMi42icESjYEzN8D",
  "key33": "3vYXPppw8VTHd8c7Fsf3HdpsXduZR6xCSNao9ZEpZB2y6ma4mNgvfwEddVZkorA5JWUnapqJUXqQUKeTqkeDSha8",
  "key34": "5xfbuvUrZC1XELsu8vgPQePXi98RHnfdqvaZdGzdZUMCUBY9k5iVF82Rmd9UmsaGNyRdqBVAiAJTU2g1bSS5RHgp"
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
