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
    "4UEWgQKiC8ATzTFiQi4zg8RiygccH3ztUsUaW4U3xi6ZpAjdFvCsTgUS8qCiNLXrsiDaExFM2nh7MoK8kVEhoej5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MWH5ksFvz8dA64t8DdT7h9U25eCeVnGaWRegb8fkiyXScmZsQfhU2C9ZTw2Atwv1TPozpttnSWha7Jrhqumb2DS",
  "key1": "gWTUq9dvJaX4Hp438F3CYHuDrhRhp7SQHAo7FG7nt5GTfKGhmBgMHgNFBZD5Rmhtap417j4TyKgiPnQHbyP7u6d",
  "key2": "3gXTdH42f81oYsE2me8HWUQfsPd38n57Ujzuafkk6cBh24VpAfK3WY2Qq6hpukWkPajNvy9E1KxEb49zfaTqPSWb",
  "key3": "5kXFNmwwfY8hRq1ELFvbQ5ERvUw1ZFdAincwYetMAPYsSkCdhCfE8G3qKMmQsa7Q2kjquz7P1cb9yyyajQbLpigu",
  "key4": "56T1WrXN5rBgNH9FKYVQaGks4hvzZMtsQWaUd7hPPxmHzpd5MtiEjyS98QDd7cfBDVv2sDxBLGgyeoxu5nhNZVzR",
  "key5": "5Nvh1pBVf1biSPwU1QZhHwubqge3dLMsakEJynC4RSeiaYRfKnanQ46QkCr7YkUzBpxTkar249D8VwvZ2MqqLw9f",
  "key6": "3zjcMzRFgU6ZGtEDVh4V2URrGpAqCPhgDWVj8L6f86d93vLzMZAgTrkCERPakcUsh72SjbpH41rocwEME9geg62N",
  "key7": "pxRc5ArD1uC9YjZSg6R14kHHWZmCk1MS9zNYtNhHHSmKogFvHMyAFMW3HX3pHoFpgaENBQBx3WudMkedsofFZus",
  "key8": "2jmxChagbPKtYXabGSdABFtZhWZVcNiRW7WuvSjcjffo82cEModjAdjXbR2EcRYgxz1jCpkpF1LQTSdxNNa91tSL",
  "key9": "2AkmARJSuJaFgELVC2xt7hZRcFjB7isG74JyyCbxiEWJKvPdQWmj8MKZxtXgoEw6iXDtPfBmtpzK743nSPi92JTQ",
  "key10": "21sWFB7Q9yMp8HYXCtqjr4M9BdqYQ7joXxFvyc1vrfAbQrDeNXxfEvXpQwyKffau2Ldh6r5R2PWAAW9nDjJYaiFM",
  "key11": "2B6hzxavWEqXhVVAjvqyApNXe7K7S3EQ2yopZpspxFmL4CBx7AVhiF1whHGCSnbwKu4RJfdmCnRVz2KXLeBNxcp6",
  "key12": "5GrcJWz3DE3USoD217WEjokNT39j7nQbMr24DtxY1X1debQvvpRshdrEiUmMwjd7aALrP45chvjnnHNhfTECPXsq",
  "key13": "2GW65n5HeURssGSHS7U4CYpuga46uuFmwh9LqCEi8grnz8kjaxJGX6wAKXxr9KNq4AhAgKQe4rsuqRx78wVmaxpP",
  "key14": "5UwHi7Bvw4K7ZTqcpuZuZyDPUJmZKVaLAZ92MMRHw5HocFE8EGoytA8wGw9sD1QpVdhGuULUkdoy7EbeGRgx4aoH",
  "key15": "VgMzGVtgo5SdpVttHEFB7cDhFe3Ek1j6h5mtneCDe8rwupdk84ayArFMPFrpz8VkD2jWv1dMB33zM2pH6JwFcUa",
  "key16": "KW57w3gCivjbYD43437v6fnwq65V6QqTZW2NQoNKkSoJnK9HWvvLkcoG49U94SFs68dsQDR2j4k3gZa1kBFXVbU",
  "key17": "35EVBVxQWfeRNaDyzifPLtL46MtvucR1L5mwf83yHu9Da7VLVwfu1oYXqbsSHev6TDg4yJJBeGZfJrAT7zjgPwtv",
  "key18": "5CYcvAvtUrACDuydigQRpD49T36RKSoksXuzvhc6sLewCkuK5cgkU8Fw3aF7UKtGAeC6Qhn4X9nTeBsX4Evamsht",
  "key19": "2zMwEzDtVTFcCa32Q6PBHgwP4J6HArYcdpD5sAnnK8BEEfNwBaZBARpgqf8Ms6Qdbw51ALTjQKGWaBq3roEdNiQY",
  "key20": "4FucGzXvwhdXpgrw56mVVGo6o4Cnn4eHETCnDZh6ECiRCe9hXCHw4RBQ78bntkZgBjnEEPDY5ZV3cxwQUpNeZonw",
  "key21": "ohA3FmfGUQ5A5FSUZnLPDRQNmdhRLof6162yGfRS7ikUA1uP2MCPujdGVWUXxypWHW2TnhQVYyHYsJanest1B2a",
  "key22": "5qMZW69JVsuYrMpNGSQH1VrT5hzG65NDyFCZtNk7YnopxRUE3SispPQ3xdw6MG1i5QmKUxhUpY368sEXPJBXXawT",
  "key23": "5pcB4hrgBrnyxXN4fDvND9ZWnAPzQ2JpzbU5FT5bm8sCWMTFKWCrrqpLNsAo2xnKSwndMLxK8jKh5a853U6BeP2U",
  "key24": "2H5FCFArLgbSbxHCEDyjm79NNvExdgbKmQ5kHm4UM1LLxv3GKVpufhXa1QGuHEZbe5ayhqvdVLaXs3VD3qAdUEaT",
  "key25": "2pnDaxp9rjp4MVw4ZUkEoHR8qT52ZWrPKhbSvRhWJ3UpXqZksnX3iTtioWrcv71SzruL3VwsvjYsdMHLTQXDbP1B"
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
