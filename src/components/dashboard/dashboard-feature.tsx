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
    "kgypYgU67v8dTMDpoTaK2v3hbDvRjb957bHoTb6umQAU6aFtQKMWfRxtmFh2FoDt7WKEbUs3HxU929iKecgBR5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "roDDtnhf7PK9iV46Pj23ppM2UkQputapTYZvjZDeboRx7ZcxVbs3biMUSLogLkxZ7tcijTaFgvi3vNFBgJGad9e",
  "key1": "2DM4EeNBg3SmM3Bk2TA9QyaaLiFwL5fVwY5daC55Xqjv2H6pwa8iagj6F2uBDsBYxNkCJ8sPsti7caZ65CqW6shZ",
  "key2": "2nTHguLfnMG1HaEBv6omxVksXfRQPenusaWEQTiLCbA4Csfe3Nh8dTNZ5WFL7w1PYBnfa3dR87VscQ7yku5vruTj",
  "key3": "5pjjroqYk85FHuN1vK6n7FUnoofHFCMQgDXSxgjViXhwBMkR6KPjgstB6Bvbq8Fg1FTYLdB67AaKopAjVZRAmHPA",
  "key4": "3RoUhRuBzohKpGHPwBg1NrRzprXKAS32qWLkRNje1UQ6EPsM9qPWuxJSBXGdQPDjjjoEGNbCUYuSqiXQpRFZpbeF",
  "key5": "2cDbu4wxu4QABJejP1fFpVyLrK7icp433qkQtdYZDnJziqgXujaJoPSRkzfKXMAx9nvxf4pAdxNevohe7B8G2Pa",
  "key6": "4Pj5dmz7b4Y72ypJbBwoKePR5DDK47R1ESRGckBHRcdRAVcXB4etNSCzbkMdTdpKJi9y7RNJ4MYWNH9waixCyM8Z",
  "key7": "4QS9CLG5zU46PfymUk5xmYpfJrLMARpHuo7TmiT2Kanm5bbJURiZ32Szajn16SiuTLr9WKKjErftJ816NpCyiTpk",
  "key8": "4PqTANV3hjerK7zzbQ6fW8L57qjNQZevg926c8FKNhCPzRZ1S25RKpAMEThx98RStDCzPswvWckoaVhLpYdGf7qX",
  "key9": "3yMELQffNnJ3NcnSK1HXeLJL8jq6wLLTiuNahBzQJVvs4XcbuyHMjDgSDWSFW8FDnDdnGEzR32E7ySZbyQATFDqS",
  "key10": "2mMpe3q61S1xhDvnvUQghagFx8g2Nb9DKYWpDyp9jFkoLGsipwW7mr3iKgML9aJCAMBKRjqh4CLdSzunych2j2w8",
  "key11": "4XbSD2aa5v1c5fdshKjntYyErZnvSRahGhdhrvb1chQuVD1WZvGXKBay9VvScjyTZr5iqggZRm34ghGiAJDrbdKN",
  "key12": "37PnLsWnDMYj1qDDQRd3fn1FD4TjmF3QFsk1VbFKbepg4NwSdqGR2nH4tqWKDB1hxCt18ciTfWhJZ5rMSRA4Rhpt",
  "key13": "3GYUSQZN55ozGgv7bRgX1MVmXCANsr399uBse3s6bmoHHT1qwn66cEfvBtXeE6bC2RCujycY6BzywExKM8bfcZX",
  "key14": "i6eBqdDvNQVSkX3Ai6Y4T4u8662Cqjg5YQjLWktq2f254oMytffWSTdQ37KowtE7tZkUoNiYhjsr8NQnmPtfBHD",
  "key15": "46qbt8Ph8ypY8eTE8DHTio6kcqz9iixiJBuaSsfFkMpQ1cyCVuDS1uFBdAFMpeUp9urcEUAbzvJ5Q4Pz2b4wbkyt",
  "key16": "2DfpJL1i14VheweRVtQ6bZYSsaFUACkxTjvvLfsYbUu5GXHkUqpnN2qnvZRKJb36sxdP8R89RYznpkdQ4sYjYis7",
  "key17": "FUEj3cLFtiEkrUXb7jsML875d4UhRR3KJVL8C5M3qaTK7iyjejSL31Ks471gcEVb35413RvM814woDF6pit1NwX",
  "key18": "5aEz8mDREZZQt6W3ZLVrq1mZo8Suv53HGdfthqeS2E5z7qz4Pw1skX1v5KSb6sjLpYzCZvN6nCpH3r8PsXcKJynG",
  "key19": "5ej6DLHkgBoo8Wg3QARciqTSyb3r1WMg6XYMTNZsHKbc7cVV8rZnSzWf7LoNXst6Vhut6eQKSRiMBef23xBmaDeL",
  "key20": "3PJvcYwpHdYBpmzo8jntgvWWzbuudrPGMw2pFyw9YnbDMLk1AoK9oSWcwLwoBdUkCHLJMeoCcCS6nyq3KxcjiW6j",
  "key21": "3g1gJLpQWraoVLbU4JPWF1bDQYwyTgh7aPwMdVfG7QbSUNYgXvrbM7XkiwdtZFrGEQjM7ZUca3Uc9HKKGiBjZXW9",
  "key22": "3tT8PXqfwsca725Qv8qYSkZbd1oggbNVN6Jp1s9LkhhUGtUHwikYUsxLaQrAp5tguqBtDTEhydQpWHAGb7UN1fyf",
  "key23": "3SMaHUNVtoxcXfnUfEchBwWNuGG5ruJeWxR5QqoPdCiw6Bvktg1ZWeN2AGqWY9axYcozM2R7hgfk81UCawDTu7sk",
  "key24": "3xoZhJ2PRn7swHSNS5DfZvKF1KGg3dp5LzmTVqJfuqvqnjZaU9Uo1bjR4ggpYs9b3Psk2HWpCDCgZxkjhynokbNJ",
  "key25": "4QHEdjGcBze1PFoZeP1dSKc5r6JhKoatzfUqNZz6Ns3NEyhuL7EekKpbphWr8NrdLDNmxbLHGh4uLPDTneJV28mv",
  "key26": "3eSdfjKzsRM9s5j2V9qz8FFoXJ8cUKoGdKhnEe3TayPY8hxRucUPzQzh2tTaS19V7mLpcj7C4c4dz35wdBkjkoYQ",
  "key27": "5bRpt6E1AxYshTmVF78B3xcy2angoHG4CjBWhFeQNJ8KHbMibPEtJvKohV5pyskXpJyMEXy1beT52eRcMhC2AkjT",
  "key28": "5FsFdhabNLXiKyzq2EPsVfbWq52UqaPPxFpW2RRuLi6ePGHbbvq5ztCYHhGAphwMjg1r9x5kdGSWbqnqfbbf1QdF",
  "key29": "YmpZCXqAv9UdPjdK2fyDF4B1mGhLvkFiHUZ2aRzXcEbAyVLn4xvwtJuQRfm1YaeX84QVhN18NHnWKS56x2Bgzdo"
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
