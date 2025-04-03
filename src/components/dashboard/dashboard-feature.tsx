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
    "4dmDhP65GjqMv4mvNkDpuTJPr5iN1DCxrpNLjTBr7VPsDBdfWymcofFocXJizVzBW9iXHFYZ1HTAyUBUr6cq4t2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vv39hkx24KRL9FCWcMNvPVKSxLWRfaywREcXuBosrnBKiUVYbns8k2Wh68UNWM9LQL5YKoxEb6hXDGLkysuEkgY",
  "key1": "4bTyuHyjqvSYjVBttLn9Jdesexjwy4Tu5Nu9UvfZWXrvSuDN2cykTYetdWpTZsUMsW7GLYAp4A8KZUhsBPhXnhyP",
  "key2": "5rqqWNKWy48ixami2ov466pBbFT85RwDmhsxRyfXx6tfef77FtStHsF8wkizQw9VxF3JFmDVVgiMcLPVinF46DhA",
  "key3": "5XDE4mTSjttuXcLFa6HMBzXHjfPdgnsb6ftSVEcVmhGX57DekrVSATktLDWxLLh8iCEatP1EeReaDc7xJBvtkbR",
  "key4": "5d1ocbP4W5dMs87ZrYiopyn6YHx94w9YsvFPxDp6dhKw7m6vWs9UAxyxwyyAgRfj3dnvW2E2Unw6kwcgp7UpviNp",
  "key5": "5GCW4DjXEjqJ3bknum1hhzb9NsjJ22EhngwUHxaRT5mkSzf7bJRsxBuHqecyMnRRWu6mv4dWE7wFgHDfUXejWytu",
  "key6": "25iWsX9EEkBN6TUBCSASBAzDjybZg6kQh3wti6ce53mRRew5jRCzij9uL6CtVpvbioZcuXVTPkvS2kGRCHjzGZQn",
  "key7": "43PwQqVSY9w9HvX83QRhrYnKdRUnxKKJC49T59sbcaCQzrKJnb3v1RXKgCcpwKDsfn5XezRERzpz9GUSiEsvgFek",
  "key8": "66n912zKoyhHgC3Nu3YZ7pVEoGkk6qz1fqmvmbQk9kXW35rqCCGKtRiWv1dozH6xCKd4iJdHwtxi85b4wVZgrz7A",
  "key9": "5cBJEBoxDPq7zYfQccbcw5j8nYT7buLqtgwaXaX6T2mMA2jGSUCtPy9ynCDFC74Cv7uJcJky7kYbt6GUooVbU79u",
  "key10": "2VKeoHQWLUbGC2FxVfeXGQYYEDd5s8gx2o2r9Ud8ZFokQsaKSVp7AsXob4W6h1BouY9q71zarfyrFSVBcMvD5krG",
  "key11": "KThMwrnzjzbVfyFua2usjNd6WMYBcFtRJRJSHnYbPSFr49TS4JbaHdCyToGnPuRVpGhgnoReWpzvFtswTH5JPDn",
  "key12": "4HX2WXXgQtekbE92kVdUc1WSx7FWBhaC4nj1a5doG9Mak2Nv8etTZYK5tGPNUAT4sco5UHv5YtR1MJukRjgfkezN",
  "key13": "McBiNHuvQ5E3XLcTdtMRpiaaU8ckDoayRJXCMov6h4RsvypSr4jhRbQHGyDfJMccg8xRgD5iJFYs8UEBoaUTCxm",
  "key14": "QxciwhvgRtL8mSPUE1WGNuzo1Nn5Xa488Z9HW5m6PXMM6uSiWA6hibiH67x7U3XDnyFQykArAnVDr5jGA1mT3w2",
  "key15": "2LB4h34RvPU3NHKREdaztBGg6X4Z9Hz4oMxfeMbjBia3Yi48htaCeDGcRKWzvJKqr6yLqM3CZyQQNm4pQxTKvvjn",
  "key16": "4GzEspJjKEvwGkR39EZDZ2DvbYDJ3KdXngd7St3k2C26R7wjFW5Crg2DZp5qUTg634sDrvvGeJf8a8dBcN8KY2tz",
  "key17": "65KkeDQSC2z2vKabg59xAXzSYS6zj1nqz6Yc2UpBzD2xhZUm3LoVbaPvpA2aT9yLXPkuGyHuqtfj9Phh389LHheg",
  "key18": "5D3oznoNBZpUP2kwgMok6WojpbxeUrK7ehD7fP5tMzgyZRmM45kVzn8Qq2oavJHfFKsXNawBbyWbaR8CeHDHA3g8",
  "key19": "2LWwLaZRcFPFzArLUAE5AQiXKWSB988CE6jKQqAxaxkhwyYd9uZT92ijRkFCr3enPknGzTg8VbCdgxone4EZVngc",
  "key20": "5JAqUZgHudR9Db25kLem9Q61XY21JQ1DXSGYF5wFhcn9QBxCbWqCuhRyxvCUUxb3QEFHmvktuJKkT5xDMfd4DLnz",
  "key21": "4jk76wvBRehThrQg2GftgEuBHub7Y1BWmmfXFMUa2Jo8XavyeGQhVsgJ9tGEqyJLMCWuVFwNBhgneS6ZyNQV839r",
  "key22": "5hrdFfMhZCJbnWoevR5v8iYTLzvhf1NGcju237JLRb62BhaDataNho19qbMMXXZw8JcDhujrTGLBDM1RAoLtksty",
  "key23": "2wi5K8ehMoYqGSkCvW97zhfYbDnfZejBvHrmdrWxkLJxhKpD1oqghGys2efUjwZNz83CRkzVvyANDR9qt1LfoKEK",
  "key24": "4y8X2d1fcnKGGjEWvKecT8Cx39V5HnG96TSgu5d2BUx1dHKuJzCJrzgTmQYd7m2uCKtWAmxYHJ2iNZMND6oc53E3",
  "key25": "4znCW5Md9shUKAAPth1dzB61Lw6wLEAZkJyFihffDBuWckRmB18PUVJxD5C6wmgPMbd8Vs9Stip3uKnxjmr9NrsJ"
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
