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
    "QmvZYgqua4CYYjeS4qe9v971ETwVoBWBog8VwdKYV3Laxhw22vJd73h8L17gxd6Xgg3RLuyMajPUMDvV6iKvQZs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58zZJX4YRxNLU9xDPp6AUBUt2BdGcHVV7ZgyiuK2M5ChAQYPWrhEPBzAgu31SwxR3HgtoRpABdpkK8igAAHzA1KL",
  "key1": "2t76z9dBBvs64UPafAJqhN54Q8vfdP6M1t62XJoqjK4LGkeGPsYdTxnSJoerstzjTAsvaBEN3hAwHBNHKbpFAd6j",
  "key2": "5YUUEoCKHHCEriWX1QVAAvVj5AZsCeX8iREkq3UgEtMckVTfLgSyZjSHVissMj4eH5KijktU6bjLJvkmA6yY4usv",
  "key3": "aARryAGzJvvkveft8Sc7YHT93Xi2qFMVJ7fK19isf5eBezpXkyJ5htPz5q7cQvJhmBdCKENGkQK53EipEU3DmQS",
  "key4": "5YHLAWhKXVSbtFKn24786ArFbBiVfvr82h4mCvZ65dqujBhccRrj5vodwww98MGfMRs3qQcmjfHuYCoctitcxVGM",
  "key5": "27P6ArNpd4e4z4zALQasT3bRsSfpVLXiGEZD5Sz43x21Q3WDpegufvJS4F8jGwWVr3yidxpMFxs4TYsoab4qJkyd",
  "key6": "5G9QL4dEiy1GrSSaCXmM42CeZS5iKzCPP4hTL8Ajb7ZyJw7UJbESH89z1U43MnVbgtntR41qa1nEN2LfgEcVEdj8",
  "key7": "2icukduC1paNR1U9679ku3PHVhhhW2UbrqTbMbXXxMG8DEogAW9h8UFB1zFE7zH8PwD5N7dkTCqXKgDPmuZxB9kS",
  "key8": "3fQQUvUeFrLPFhK3BHSH2MkZk9p39YDobAXoSiLAZSGL7DC8xU6NsFxx2is3PyL82tqKUfHDKpgriXjrtjQ7WBG9",
  "key9": "3bgYZxosGd889gUYrvbTaSACJ177WhA5ybeFv8qYACVSjAW5WUmSrFRbGugY57DJf821p7SDp2hC72R6Hypcohfh",
  "key10": "13ayjUgCwnY8AHXy9Uzqqs631SyB47heSgiv6riu35Jd4hG7FsDwgutJQGZ2V9jPFAjeZBN2BMejwJpeqPBnubZ",
  "key11": "3Wqui8ZbRkh5Nt1zCR8FCvAzR7y8RQj5qWy8ewSBXjizuAqEvHHZrr9Rf2sQRZvpYyfePvoNUwdrZNKYP55qpwNu",
  "key12": "4aTz4Z4WygoVDRAf8pvwexJkEB4xZUZCkuu9voCX9Hs8td6TNiewSivyN4MeTf5ePuyk1iy6RZPfcNLyF3PmjQt5",
  "key13": "2vorxLp7PspXqtmCEZW88F78n6ywPBGWHakBw5giCz3gQrf26GxPj7hHhZWyArQAfqwG3BrMg9woLidk1yJicdAX",
  "key14": "CPQPYChdDqSs7kN2vLvH7Vpo64P2DdgY5jcgzar8EjWQWBgfDUjqKTjR61u4D3M8E54yy1B5sWgAnUb8iYij9cH",
  "key15": "55r62TUZJCsnWcGVZvCs1Bpn4PKVTQUopoRkcEGTaAJThk743hDu3bJhCkumWq3RfXwMC6DfMQgZrgAuBQ3zRaq",
  "key16": "3ziEtGxaKzsZkTpH764hRsXxxzgNmasgruSMiUokYFa2JQt83qJYL1LcfWSWFbfxJMUDyS9PuqF8HpQ37wPsgrUo",
  "key17": "UQPCbEzKKveyiJXPshqEygadsBJr3uEhqWKhspJTivNe4C2q1fZFRuCNvYtNZPea9AbpyB2GVKqMPmWvDLezk7p",
  "key18": "5HqvksdjXXJkFwQTD3hejsdpiGN84j951xtVXcb7J8qcqA7KEwogp54grWvpLwsBECERZJ5KCqvq6wwJse7AhsZw",
  "key19": "5wAEyzpwj39Qu1ZVaegm5hcvxAjoMU6v9rwqb2hkcFxRkAbHpEVBQBAC6yC13Wz7CxHXj4etupncDADc56YcrAG9",
  "key20": "nB9SdhRjE94GQreZfjZqksSsQVT8Bo1ztUE3vBRmPeXBt88kKFeEna6NuSHgd8YMq1fZgFAYq3q2SGrDafy2sgE",
  "key21": "63DgZpFdLM6o4m1m8yAwqnSve43fmv1U2azFHMcmu6kkgJVk5HjuXk6Tb2tWAKfy5vd7eLxNAg7Lb4ffTqrD9fgq",
  "key22": "4XvBxMLCB2g7cgvXo8dbMYkRdfMKxV45KNv5cSQ8ftgqahnodXHrATseqW3bv2bvXheu18x25GYbiZcordSdF4QL",
  "key23": "5fcmdMhifSzoaR1dKbaGd2Qg3JFiquSY5U45GrP9bSayT3ZbtfxQJcEgc5LuEqzpL4dhznt6fxanf8ZQwx7WAf2J",
  "key24": "3uceoCw2cgT6P1TbGnEgmF5KPvwrKPhB3bDC7pfK51aVykpv37GmMYAC7yYPvrM3YA4otbzUuazPwg1H91UfRtZZ",
  "key25": "4x7EwPyYntkDfp9dP7M7aH5syQEqvu8mDKzVRgxnLjYmWf59mdagy6YRNrtbnjMMTSbhM4YQcgCuP51Kq4eR1aQ2"
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
