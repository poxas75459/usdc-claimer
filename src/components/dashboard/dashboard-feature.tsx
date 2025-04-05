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
    "4m15vzj2hxZvXwjyJrzAMkTMYyhD5iLsFGVNhP89VUN89hk9AouVsX2bZinXcxgxHCePf5EFyQgRgjrr7xbbLCw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xy8XHGMXFEosAPbzEhWUHGUuttxt9FskNapeTYhm9DzjXJGmsZjcPRf56vCaPteh2zyaVXYVTPwCJtBYmM3hqjt",
  "key1": "qU1F1eycvLjPoAq2nPid9XG31D367TdPR3mWmCvF2QwxBftvyCijCFaGiECRFr4T8WhG5tqZvDNmqPEXHa84WYR",
  "key2": "FwkRft9S8WF3KyfVr1kUPGXTwwYF8SM9Dahe8X9k5ebdJeh4sfcLAkqrejm2Hv6JbS6VwoBTnWA5XoZfZ1Mf24L",
  "key3": "2CD4tb1Wyr5f1qmCiuwPh6wwq5Ru4A1VNnjdzom5nR9GhdCoR5ZTgpsqKT1H5Gi3P5sh8F8sGTno9uRXyKFvLhWF",
  "key4": "3pvboi7dFmpMhBQfaVhSzxdE8hcyrYU5Y759aewPy3GWyxxk3kSAURSzkeZLaUPKrE4V4NaeaZyAyxiauJQEz7dm",
  "key5": "h1hogL14vh2bVhEeeU9TxQz6m1aF9NJJjnFzpG9ab2ovmnfd99YsTjVDRHaTDTNxSHuS2dLuNpt7vnnEtkrStzw",
  "key6": "5ySLkTpdP9Wq8k4ttZ5wd36z9G9pE7YZbcGDMuXGxD4sCAtQ7MDDePi4nBm8Noxh5yHLFQEQb5YrnRi3ADLeUiZm",
  "key7": "4KiH6gHVaPQ24KHybgezxqq45H1JwTbYUo6gBBN1nNaucpkgWLgtUmgE6pk3Z7fuabxprvRiDSTyNfg32j8UNyn8",
  "key8": "3UW7pLuHc9wpec2SWmamFGJSCqHtTQifcB1bV4eMhjYY1DwFep9bV7Q3fNuABc6N1EqPR1GLY1iuxLVM3MWRnQeu",
  "key9": "5xcFpNmSpQUDbmCzbrPiSqWQTF7ahXms86CoRWCs4mzRGyWUVwhHgkL6Z9VDpvBuAwLxGQDkyav3vQYeqKrVqQRd",
  "key10": "2hmPyarEQ4qAamLLeYVoMQSzzGH6dgTo6RzDWeVXafwoRJXVHcZUP4HVnoanGzGHwvJiFYNuyYovxNDCHJFUTSWR",
  "key11": "XdkZBcp63pU15rcKPD891Ff1o53CoNPbrBREafo2QRdkq5CfxhijpSZYp6qVdgyDtKGo5x7MPee1HT2msc2Ytx8",
  "key12": "268NyhSTTDBJefJepieNAL6EzrHZ1NkuC326hZBgRJDBspjSaoMMH1GYzDAzEAJawPFujFkPK3kf9ZE4cAJeYFFa",
  "key13": "4iXFZDdhqsjTeRJUSEWoQJLCPgkbTe5xzNB2s2Yjut1X3VMnMTSWXA2WEG9Qndv5EWUK6xoa5HrJthx9epXmcv1z",
  "key14": "4uHFyNWkgTCwPjXpkZXyi2rACyGBWpA34ZiMgG5tivoMf16P636cgK6CRToNk6YMR6P7wpKPKwTZF1JQqqjpqivf",
  "key15": "3hVSRCYQZir7jwjnciH8z18LZwagPdR9sj1CGLaU9Ef4UJ75hMf4qo7vCjTe1KbwEccN9Z756FAyGM5Zo6kzQPii",
  "key16": "2wAdRRezgUf99GMSohEHsM3aJm2gduiv9WNQCfuqPpQTfeQajK5ARitavMwc1ZsZ1Yk8KjbkwwpUS4EcR7AhYeXt",
  "key17": "v33mawM3tFVjf1AsDioHc2EhFWDZvhTwvrKp2kFN1Utte8t8gfBjHr6PsL7FnyFzrFVe6FtDvdL3TAPMMeNDbeK",
  "key18": "4B6eJMZdiHdXjawJLwHLTukKML4ePqwHKrmEmq8HPHiKFaRFAUKCgP9pqbsCV7jUD7MHuEQNt5F8nrASS36x2BKT",
  "key19": "4qfa3oRyFyNMWeZAC6HExPLyvGY2HU1k6iFVppjeXEaQcV3QNxvUU32KQDZybzdD2txkRfaZZasEXm44Yr4ugpht",
  "key20": "ohKnjTmnqfYTfog9QKZuttqc94DTHeWvY3kq1FUFobC9BHdzAovE29JqYtbbmBg5B6iYWB9b5Sefr5jmsHvCc5z",
  "key21": "2AGXXSRDGAzLNZhb8SdDZQFYap1BdtnRrrxs7TMfHTxRn8s3iKrWhDDgTZ5bRvkzicYhUkS8mRNwDTptS3cjMvVM",
  "key22": "CM5KwV7uJ1TzL9kmE7DmWpoBcpqjwGq98TUiiVvzd8AEQsGZRapE5uvQxNfWxScceje1nNtExNBHDBv8kx6Rnyz",
  "key23": "zGypwCqnqPPWr4Wt931RsGo31uXRrLmM23ebp49qh3GqocMc9CL76GNrB3oTPCTAvqJueaQ9GSEMLbxdq2QoTpn",
  "key24": "2Xv1yQudtbMiGkveWgwaAbYQMUnFtcQroTYn3mpmHyEZ7XYMsaJjVj5yDBoubiM329XcSTuXcL9TiHEMhNJNGbFB",
  "key25": "3rwVY7EGoz1tipJk7NaRXUoiD8PUQjjV1QkwL1Bk2fo6WvRBBh4gxmxMX8omhtWe41Kg9JVKv87yJGe34ReFrjX7"
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
