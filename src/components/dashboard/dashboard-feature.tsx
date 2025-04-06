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
    "2yeCMnQpRFjmaewijFw8mw6gCYafWpejgaUpLwnfXCxdTEcAjbjSCMgWsWrFEF8469Ce7q5uuA8av49KfzVFZF8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xPq5ibJ373688fe7RPSLPxjpb1HxdViKsKdhJKWAbbWayG6n2VaHQdVE6pC4sR4Jw396ufvkENwTvnq2L81YhBu",
  "key1": "9FSCvDbdHT2NdTdCyrQjT4mk2i9JtEgVMPCAhPUM37XQyxz9QtacbGuYkvEfpKJmpzJNJmbaSuciWfSm97sCQYU",
  "key2": "5T7ADy4k2NoaXsQpspstQWWDHHgW4MmjwLJcNzXZDebq1ettbHeL1KjX9ui28djuXKJH1PinZmDnuYEX6NwFQEqd",
  "key3": "44NKLQhbAMT9E2paVwyCkZYz7L4ecR8toLGiuaxM3DzieTY3GqZGuCutMNX5snEQat2u2J31Z37VH3T6zRqj8CHg",
  "key4": "LSyEJf5dKo4Hj1iJqUzRcmzXsdUfk46XzQXm53k4rmG8za2rsZaL8FfeJrTehLdTn9kd2ETwTiajLC1hMf39R2P",
  "key5": "bTZjCj9EhpgiqTAQyD6VWn7eB5LtCDJJAeb7Mmro7VXdyyHknDXxcrnG23ktYojYGVXSE3FupKUz8Pcnbw7DXY1",
  "key6": "3AY3gdk3axyDJddkJZGLNyJhaXH6ru9tX4Dp4BfvN473ZX7pPQmMDQHMQhr8Hz1i7yPCm5651qqB6cxjd8brBnyb",
  "key7": "PgxAchTv64N3ATnidUvXV5iePNKbXkWurW55BBu61uHBCN32m4aVPh6kux5wCBuEg1nQoGgAPdYfw96Zk6EUoqR",
  "key8": "4xUio9ov67TGbJouUg9DtxbEp6DUMovGmLVcifYJua8YhSsBsUJsu3vKtjAh9FBooYd174QwWNLNNAdCkpgZUrrK",
  "key9": "erPNv2GTCqAojXrH2vn53qRk8dzbokBhxJyBKdXFEin4fCaq8aGkeoqBsshaY7WMUc1y6vmGwkDSqk8ekWG1sGg",
  "key10": "5oZy11Xu15jNMJueeq3gMnSitUCq7AiqXQpemjbgNQxQcB5wQzxWDPwuE7xwYhuQMbFLmyfvQKJ6obLwqoduRKMP",
  "key11": "2TFKg5QUHfey17HpESMuuB45wGLwMPoXTGTtHVG4APfET4anKgUAMpv3gmVQo41cmDdYq8axvMfuhdpPuaMpHPD6",
  "key12": "3UZav2376e447YQTkYrUG28EiR6zETk6v88QEna8SikosowG1YjA9V6qfh9CtCoj8rj7nFx1mj9dgpdHW8pHGzH",
  "key13": "XBT2UCXBUwbb5oPyvAERTFYzUU3UWGttes7EEfSvkZzZoi3FnXmtL77uXdzJWamCpu6A3N6d69rGjy96pAS4q7Q",
  "key14": "3DfeWfnuwnc3xsYjjnxhmhkguoSiNshQv3x8UMdLKTLftwfxpHF4GYJC4G22KpnYn2Rpd8t4Mw6pcQfoeKZRh2wY",
  "key15": "kDnx7cSXc466Node4qHokC5C8P9WuxNNfC67MWTaJTAcyQGwMVQz1AAE7p9uHtAWtGNUmQ8Z2HXoiX1PGA42Mbm",
  "key16": "k6bB3DsNWLGYRsX4LzSwMzkw8eRWwc5HK4NbyuEAaWFTwXZ1dzpooxVmVMimvxPzhgYSrbaavUHy2fVjJ1G2HpX",
  "key17": "2ZpUg6muRccQYsarWcmqRRy2F5A1Y8YfifhnB8RDg7XEw63oTjPp5X5akcg86ZTyq719YFUQZkRcuudeRGkm3u2H",
  "key18": "D4NWFeGNB2ZUm4ycxwvhuB6cBKz3XUYqf5unuY93kiMpqB9VPoUzGRkne35epp3Hb2XRDpg8XPffn1c4atL5mVp",
  "key19": "3x4iKyBFmVCdEBEhgjiHi6RgYxfG7pmjvSyx7ujCHUBQixXiuZ2g6uQKzFVGstyKDYicCX2fjts1LiNUEbTHuRn5",
  "key20": "25z8hTETK7kq9LpxUktz9GQG83LuFUs6xdNSPpWRXDwa9GcS6hhTLcr9AyPa2pEFNeVKCGKxoz97VxdVZXhR2hR8",
  "key21": "Z2XrmdgArAmgABEdJi7m4kRj4CnrgpqSGXDkpFinAMpP8n3DGtWEBGGpnDkSMeVt89piJJHGM4q6eEgFbsGCtvY",
  "key22": "3bRNL32qb4C3te8k48FobsnLdGxNi8vJLRdSjrmmbswJ2w3JAM89BndAgoYd6duTpvqcLw8JRq7j4xYeaxoB9vAc",
  "key23": "3JcW9ieLH6LXhD7P4wRivzSjRp533qejMRXFBehnxS6LnTnCAxrbtytdY4GxqpDiseWAkSEYSXmEuH2aLuVDsWCD",
  "key24": "vMWr2GKsjgVXDmE5N3ep8qfiDH3vuQb1XSoPr8FfTk9jyrRmSKjMkbtsRaZZKxv1RsQfLYxN91NtgfRXz5qu2ig",
  "key25": "NNiFhSfUScYN3WfdCUmYuEGj2bZzKcJu6zyip7r4Kt78NBMG5f1vzx2DkTKW5f2d8ZhABSu4kcmToRUdkuiR1ve",
  "key26": "2rF1U9iV19WFDrHs5ZJMtT4bnAqcFpgptrrNyGa7xCemQVV5CJ3fFay7EUoc7Ktt69DBBotnnERVNJDZtkauXkQw",
  "key27": "2rHzJaaD3oXZYNk8PgpxkmTzQ8wcGb5CkLn4Jggt9RxtAL3S9Y34BcYnWXfieZwYNP4qgpbC539bnUjHbRvgAC7W",
  "key28": "1eWVHBvknfzSiebJL5m4jfjnjbVzx3eH3VLEvSbo5paMHVxeEu7TRcbeaeqL5z8QeTHcEe2vHAjqxur3u5qbmcB",
  "key29": "iej7zZW1oHzqND5LqP9sbgSUktBAqGLbdGZF9nfLbeAAepjQzVL8vJahYoDKk9qZZMFHnsXepY7SmhMB1XNaxmR",
  "key30": "jRt4MduTr4ny3otZAFJSzmpj88ZiKYa2NojSvA98eWjbasAkkVojVCKgRpmaPvLYunccY8TQYLH47CrKTdkarhM",
  "key31": "2FJyu3h9JUsMt3d9gQCTZXx2z5boaVbDAo9jCVgzs5866hZdMrwnMMrAWePHZjz6ZVcrhb1vF7xVQYtDDVHxwXa9"
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
