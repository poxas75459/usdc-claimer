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
    "5y84Dck3h77ZKDcaWkw7fpfJFPkSzjYq2S9AcY2qaDaA2KGqqnXcPTPpST6WjMUWNop5bZP2qu9DaNWfqp95u7Gb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39hkBo6kcgP18ZFSNDaNtC1sNej16yvyF6xTutMztANzHeT946CothHdxkDTYTPMaVAbDBWtBWg4XHFCZ89w7G1s",
  "key1": "4Z512vkBTLLP8tmHVst2X33JSsMC2GSjD6XFnpL8ZY4jvvWsKoZHh4yiojC9EK2z11K4jbY3C7dRCJwtUTsR7AN2",
  "key2": "kGEh7rrk6MmhdjasBjpAR1N7W4jGe5zZBBfL5XJ3xhSSwBwWPMWmLC2ze489WmYok41cvV1Zzae9j6cgMCuBNJL",
  "key3": "SG1xXZJB2bEKb3Mrk8jLFYfe1rB1H4WQFs9NNpcFdB9jVLuN85qmAg9w88RRKe5aEDgGSkuBiAuY4PvU12sko1r",
  "key4": "nKuDe5wHtkeDiTR9ZK5YAquV8nRge3QEQChYS1T4K2BZFQkCsdpM65AjMiiNnP1fTJVUMpuhk4jDbbBAqPS98Mz",
  "key5": "4LzKU9sHcUdG7c77or9K6ED7Y5dBNgo2Ef4Y337FzRZC9jHUFUM6HQg4XoRGsjxuLJvTaGWRaEiico6cPpzUQGFb",
  "key6": "jxrDkUuYhf39ZzkmCCXTyPdDmWyjVdNtGQ8TUK16BZvy3KD8d3SNXv5Q63W5hwJtpe9DDUEMiWvsV5CQz8tD78i",
  "key7": "5Fc8XFtUpGMUvMCHBXGk6NRKTrs3qF5A2e24SHkmenSavs4ytrZztaYTSt2Wn11S2CYXJL2pxves9e3kpWCRqii6",
  "key8": "5ZEJWhKdhYEXKbw6uYyfKc4Grw9SSTUBVoRk4uwAtqnnJW3SG5eBeynjsVHSU4WM4o7S6aJNjdfafARMCvg58RQk",
  "key9": "hgigKX5BkwAf6o7aFmvjZqQWNs3AYgt9zJkY216UXLw6LNeFmTSHrmNU6x8mqfGMBCfdGcUmMkcKZPyusTLeEa2",
  "key10": "5kfv6YTcCWbM932vUfhtmCkhsKqCLJa246AhqZR1KyNzvVp7zK8NFTSt7wbQXtJHZQjxi55VbMe2jxi9pmqFz58A",
  "key11": "ARWDp2g1TPuzQwmD95gJRK8H8f3YFLj2jNA1mmiWRQugkamwnoJ7Rj53aq2fKyt8CeXbgiaeg3qW3Bg1RWtdTFS",
  "key12": "cgM6JiEWC1NKQLQHX7cURbdaEo27hXgs8NkHHhcrV2B4kQ1g1tJjJ4bhdP2dytwyE9JSShEahM1AGfTu3RBw4Ag",
  "key13": "2vu4R8QfEQoMb3baozyNmEmrMDYgCd7jUzk9x5XJC7ZrZMXUzvytBCCSUWajsNKLg7RRLzCDEasujXa5gFMMwsZp",
  "key14": "4TnoW5Mn5wuKF1ut7jDSiEQ3G1STHVNJuHiVENQPdZG5jSgHBDi7ypNAN35rwDXmx8vhEZM3hAmymH1xUPjRQRzp",
  "key15": "2kAkNVDBbvVVzfHzY5kj73D2Dymi7qKA8S4AJ3o22hpbB2PouuRqyxeKPVit2jSqhA7zqs2A714rk8nha7x3bFak",
  "key16": "4nVjfVmqezeVGQy7SWt3w8VBrqzxDyWvZmP7wE9zA35fQbmJEtmvxmdc9z5kcTvdx7eZN6Yn8xaaRL3qE863AfbC",
  "key17": "2gQQs1TuqvFvsCz1q5tkVMtXWuxG5ueRtgXvr4iuDDomWBM2W5ji7rCxHaH8gs9zvuKdXU4xYdiJqU1Es6uBxJ9r",
  "key18": "oevheHDe9LUPFe49zbU2JpmE7buiysSQ4qnWxzpLnFj4XNRC5CjWv57ajXgyoSQi8bbmajjXp4QRHPchXvAWeRP",
  "key19": "64xx3tZFY4nPw8qaMSVpLovTkzSZBmk7iiyo7C5SNKM8dUTqWHjhG34TYngFWyyKMg3xVj2BKx5rb8SMmMReC3fg",
  "key20": "3RrrQqrqJStuB4784uU1KmsU3nBDTxtzsZJWHxdt3j6JwhghpCAQpaR9oX9PaMFLJR6JqGJN79VpPBdhu1FLBKTg",
  "key21": "2eHGrrzHDA3k3vceCv2fnyw3BwwKDQJxGYe5THJ4oARj38JNdbZvxbwxUvbju1KvY1DScH88kFzwkz2JEeBsMRq8",
  "key22": "4tkR7DcakygPdjw5w9fL89xJDpFxAcxYY4bixDebykQ9SW936fCsGaNDCaor9RiNQ4b1KopiSGpzbHh9PdoMgT2p",
  "key23": "ULwUdjUY2CvSZNJQ24zTGkLJ3dHgeg2MNcL1J7AGCsU3rG5RgUFdkQHGidcTJm7bWKUPPer4QGUBV9Zuzvb2CYZ",
  "key24": "4QdsDv5JYFgCGH94dwpR8GEE2cvCQ48tt1sQGSHQFGFeJ87RANyfAdowDP7nCSuuEDa2SuiW3wz9CvWaaJ7mGh9E",
  "key25": "3Jr6vj9w5aZNbNpdttS6KyweBXKmHWeKPLrNcWFSdaiRr9ET9NE4YTLv6NEjkTLDbg9AsQSuYp4G2RaWwtiFpnsC",
  "key26": "4xqvALDo1jDiLcxsCS2ycyuGGtWm9PuRZCbGbZ4CBTWroe6RL274XWrJd3Whxzdo73FeYzzsx2eDYSzzpWMbgdoJ",
  "key27": "3e3QF7SU8m1rWAstnaear5uCmGPatqJCy4eZ1pDUd4grfLew2zDLXhkwnNcMQwH3bCXtt3NR3v6qfgLqGgBzQjcu",
  "key28": "5YViDAX5mycCQPTTjy8X69giGkaKAoeZ6PZyjGyXit9fG3gZDMZ6uLKriPbJ4gL5UZzGMopEgKeQQBLFJAQfpGM7"
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
