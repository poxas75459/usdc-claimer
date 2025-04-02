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
    "5uwvoZEySRjKNWAxbWzRXJd6nZ78FfXdp88W3ztnBtAZQXipVQGjYZfwF72w5qhYokNPv1SWVv1xjzK8rY9oWgTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m3jMnr7szHTQAyep6gNhoeZDHr1uAGUNVW2FG5k5hJBWtm7Kt6LKXWKNN3fFzoMpdK62ZkAFjoaLBMnfxqgz3ML",
  "key1": "uUcNi45ZqMagyFDPWHPGB4CphLJeLvLUAHmbMKjXanEHa3D6ZCjeEp6gXfxXVNswhHJ2pJQEnFjvjW8c9hjJ1FH",
  "key2": "2gv2Hm48cJ25a5Y1JV7RYpXtDDp4xLpPpvbvm2w5gAd7jhu3PiiiRf4HN83jQouPu1LggUpQzsS4cpfhQWLQioRi",
  "key3": "3TGBxiYWRshSDU1qFGBv5k4ZP2NZudSM8kuV5HJSHEMZUJJkxP6BwtGz1rU4QiunEGE3JdAZ27jCSbB19drBoYDY",
  "key4": "4VyvyN8jtaWJL4dzdxYiZZPoaNr4MnPGKBpBpxorFPHkq949tpMHFdUfuyLLGscQSteBHZh4jVaV82uXjW1NKybW",
  "key5": "3EbEVKCUz3Q33JdTqHoUMpUrkkHifS8eYyAtYJnyYtCst1ZPeBzjtzU1MbLzV8gmZThPfnG2JppD31nkbZXgyseZ",
  "key6": "5xGgaGqnPggGGCopzgxfC1C8qGWciSH8XqYmxi4N98iNzrqJqX9i7XXXbW9qfTcFnUGaETmPNfhtjpsSx83ToFz1",
  "key7": "dF7kimC6DvPsWtfhFrvSak1RFLr6k8XarQCPTTXrBue2hpN1Yq8sSfmob5zvQAueYD74YyvhQZozCLjMHqYYERr",
  "key8": "zf7KRoaQdFZ67EW6Hz6gEsXYyasVGQvKpq8npfADwp4zw5U2Q8CrjHQ96rDjnnpxXSvxYKLoN2WNULggmaBc7rE",
  "key9": "26KNkhnBDUQK2mXWHasYo2EhMot9jbaGiigPVAHiTBSvoKaFHRH7HgyWvh3WYbo7cWXLwrM19rQE6Z1WQLLT7CLf",
  "key10": "4GBZUDZF5oCKXnT2DrAh9A5MEioxLMid3k5XDNAqZaCNSZtjQxkNMVQxHZ8pH4KafEPLGxawL8XZuKrsgNfR1zov",
  "key11": "5SCsUoZJ7VbDwooX4LMHYsVSfT1h8e1ZXhuXo875xjWtHTeqfSLe7PGS1wpAn9aTFF3hFGvxtd3iy8V7kPKmftmN",
  "key12": "5hQVSLzAeZnnvummZU19BmSABLaZngWUEEar4g48RGMuZxybjJkND3shfLau9An26T79bixdKhyVvtstXvckdfC8",
  "key13": "48Xx4TzYDHAh1dCPGxQxCESqGUjqZTMorY8xCKNTmbh1Z3BRSp6P645La1hy8JTJMrXfeyZ3U8bpAVD6EDDkdqx6",
  "key14": "3UnhGuHPenp6f48BfFqHGUHdTfUVuUFyDkwnmwD4remvKi7V4ZHr3kV7z8iVxfyxerwF8t93WhEwBXN8ZWFUPDpT",
  "key15": "4CkNMmg1CiXWX71PvznCkp4GXwbnoYJ74EKmo4N3capje7Vheey7DzCp5QGCcUSG6cuTjoabqa8xxp8pRVDsXzJ2",
  "key16": "2rHtE3K3LhAdPFs29WiWtpdNfNiGmGdpM1jki2XWLNFaB2odF7J469nMzrjA9WG2aKyVoxMW1vdPd3Ld9xJzZ5DX",
  "key17": "3Mtpt8Lxq9gPQsiFhuzQDCn26kBG7HUEkWNSNou1spXsQB3ksWpCWRuewu39mySv2zea4DtLVfdeSQGS4J63g8NK",
  "key18": "31t16cLfetAhgVj7Ut1hdHqfSud8Zy2EgJYLruyzgM6eeyPEdkgY61LUoj8YcXDcPZHPrE82Pu9vg2pashzgaRxL",
  "key19": "4c38wvrXjJCYCAchGvRRPpevmxp6f1V5hF1gRFce2CkM8aidRoDKtkJdZtxFoCugHZ6RBwSk9E4uJJNx2CnrymGP",
  "key20": "31sZGVthdtNRYkBJ9tQFJbbvVjBWk5RACTduUR9smhZeoCozhiz3tQKuMfxjzL9fX3xeNeTwFxxK2UtXMUgbjKsp",
  "key21": "2tCVjZdFdL4wuLWRemnH6kBzu8TgBSHJa6ZgE4EknC6TED4V5AyCB4rUwr3c5MEHcGxeabbEeJakgDtFgHm851s3",
  "key22": "3GmZWiurkCHTx3yHRGqcLqrVMxWbhYVZueN2cXpYerXX11FdUiFvKG28L7Be85NgUEry87X4SVfXD9n4ZoMV8w6G",
  "key23": "2AtgiVfG7WGG2VWfu3UCxeKPRZzrJph2Ht7vysJrm9WC1sHDGMvK5Zb5sAXbFaJ45rwKASLbEUWPkoAikvF3uTB3",
  "key24": "5d9eUC9Tua2ZprWsqnc26nuEyRgqPjqjQ4wq9gmDcrvX1Zqotze29cjntdwCiBEVPHd95uQao7ZVkfM7EzAH9Zfp",
  "key25": "39zM23Ff3pefpccK7i2XcFsQWUvK5YnJFSufTYxDRxWcYHRjviecNYEnQhTR6erA8NuLMTk6CxB2vKwox4BoeBcX",
  "key26": "4KhciZfd9NpAiswJCrNNP1r4KzAzPma6CLXNUkNHNc1Z8uXc9mbJfybs3c9ud4WNnHEc6GBdED4XRTr7XpT6pjyX",
  "key27": "5RUhwUsqXGRv5aP536yvtFKkDK41RHq3pCbiEBc7UeRt1ZivXpKAN8QdFkmgxEzWXGBzbhsBjktNZL4r6bTuMTX1"
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
