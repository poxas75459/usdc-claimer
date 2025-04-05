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
    "FG6Tzbb5GsDjuvjzuWnKuGixakj4BwZH8vcTvskvr6e7uep7TpgX2EZL4By2UK6mAMcx7yRQ39MmWsgossBzEHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5arSgRtDNhUEvd26Mv1vbrpLdmgqPGEA1Fztwn1wtWTnUHLdyuAQMpn5GcQ6ezPz595Ks4NWnpSX7jrLadQr9Tuv",
  "key1": "4gxfQxa45RmQHW2s4TRLtbSzgu3naSvaoRyTBvsefuXKUBYYcc4pZ7AarL41DaQj2j1JjWZ7bbnPgfZN6rgtUXcA",
  "key2": "kKmcyBh8yfVC6G7T6JJNQxr9P4zoH3WBPDjAmX9UgVMbpojGsc4i5Zi2d167yhenkhygf78z7duUZ1EKfTkzef9",
  "key3": "5eGhV3BYU99L9aEYv162T8xp4s6TgK2WouyPfjw3bp99JEcwjf2ufPXNnW59CwqWfhawEc8g5MZNHWFPFfxDh8bQ",
  "key4": "2HuJwf6zNchJ9X8RCyjbn2ptiYwMV6fGH7aR6XtaUhkYdpXQcCTj9Z1KrAKkkndobRhsPQUb5MV2AnwWrT3EhG4K",
  "key5": "2iXKu2MHKTnLTTYQFKH1pGarmudfhh6YvbgDKdvb6KYLEborXR24pU62fe94b8qaSq93UMmxfntupjcKW96KYuGA",
  "key6": "5oKbLtBstpaUKyEnFDRtYwLqEbfNg5eD2o8ASCcwH3sm8A2m7e7xvGDqiAxxR3yjX72X1nmTCNkcqvg8nGmWBCWb",
  "key7": "35E4EVibx5YE5k2qf5KS2rey9PsPfBmhDGP3hsZvvSNaiqP4AN87czo4VMZmgaLWavWShJtuhXxD1nAWbYtMdtCZ",
  "key8": "3jVwGvZy4cNSRnWfGTDjZZet8xAGKiyKXs2JnyctYJNL9BN1ewVphdsfggyXFTTBDLQkue1QnM8ZjF6Yi61Yw99W",
  "key9": "3Xk95S76aiDJ5vzm3HD9ramQTNLLmaytvpRh7QRraTCgMYV3wtLr7QsfpY7LmPjAK3PEogWA1YZ2M7HN6unbqfmE",
  "key10": "3PLVCvhwmiVsATxCgoRKvn3MeXyXy2m3KQrHPLfxWgX5bcp6cdeM8AmRjf16n88Nj8Lk4Yk7mJEF6DjKikFJhniu",
  "key11": "4a4fT9cGcLxDqbwi5TVFmnygE65tXApGgfZGP4wjMCbKngSMAbRRhwtvzPqGRyCr8C4TFNVBWgwVWTWsFyWakAiz",
  "key12": "4KbKinr1jaheMxpGaGWfyJiCa3zmfY6FsZhDXmFZEh3Fb8751tbwQTAi3UFtPkBxgXo5bWnex2PM89555uQKAqBu",
  "key13": "2r9kXKjYZxXyozwgbgjJAwka1oK6smQ2uXt7XScadz1xquPyRSuXvJoLkrbvF3UMiPYoaFdmnChzfAt4YN6PP9p4",
  "key14": "Eezyj8L13SihCwDy37bKvVXaAi7HcX71BdGucpqhpi5n8zx8us8f4EFeCFKE2da9iGDoXiXztoXBzLnmSfPo2J9",
  "key15": "4AAG9xh1N1BW3w9WvtRAoKgb9NihohpjRCP6dZbzqzLn9H9xrgz8FyQhxP4ozBKhfBP89JHMm37xcyzfwcDcv3Tn",
  "key16": "3WTZwpjjYhiWWa72TKzempdGnV5byt46UV2qKfnqFNjJpmUyziQE93cTvAQaT7ZeFanADBuofYzUakKTbvpVw4NB",
  "key17": "52AbzBy9CuPToEUe2SioNjyRVJ5JtZwfkNGFWHECTmH8c8Mse9cKWR2e79TTJK72BbkhxBPpiDmja55CCjebgPKm",
  "key18": "2zrnuN5jEhfZHsq2vuk5wy38EAC31hsgXGUaoEkw4ZNi5hyes5qURm33cM5StZSHXJbLw1zE5qCFAdFx9DVcL6gi",
  "key19": "2H8ZXz7o6XsUQCBQrZQGa7G82tSms8WrfypzhJhmtsKG7N5Q5aQPoK1xQwGVR5EGyCHLgpVvBjVpLrhBY9Ke1xoU",
  "key20": "HZXU4ctn4YGyaK9Kk5F3pstJoAX9Rf6Cx8Z7RSGbwLkJyWEg1Uu9vqFkCAM5vzHUo73Uy8MQvEjb11JqcGhWccx",
  "key21": "5P8rVevTyzegd4hoJRKmXHqwyzcRmboUks1cCQuxKFQULMY5Mx9znWeg1ajQymQ4BFB9czym7uCEV9MFkhxNheWD",
  "key22": "2CmoSwwNt8PgAWviwixkVLAtenW8SDCZw4RrFZ9WydyQMuJkFyhD45EE7uaTUhTdJStFD9wQtNaDx3n3QPw8gZUG",
  "key23": "4qCgHMYpkzH7mZHqDiZe8kfwxLHtkQLGCEBM13vutyK5x8Qze1VuFzWYgQcWGfSax6LWnfxAgmsQUX7qZ9BE2p3C",
  "key24": "3JAnaJnb513GiLyAjDvRhfLE2h9dYnJFLoWot1mSHkgVdVmrAEAe4nEo35t8DK7KX4zdJoKvbWZCMunqzygWRsbQ",
  "key25": "5JA7aFG4KMbLiru7qjqrE1diBAPbvcY3dQLv4SvaGF672eShb9UL8TPXndXZDKSbhWQrZySDSUTDEHrzsznzpbog",
  "key26": "NstMVUxiqbr4wzxvucLJGjowwCNQB9UuLfnggi2ZWVdmb2EeSbAAQx2E4aw6LNEEooc6z2QPwoWzm4gPjhzN3pE",
  "key27": "4heEatP9TxCSjRdmsbYU6vLTUHnFxqhhYxj1gzhcCgEpQikdcFvwzVo8PJamjY17Jb7opEpkGz3rwyYsAkdxEvuf",
  "key28": "27qipVfH6X3SsD7iE3aiPhd1m1p7WhAeDYiVUZpS71xZ1GCAMuNSoRjx46iyckSFp3GW7QUWsgikKewkoCAKpueX",
  "key29": "46APHkNSAHnQ2KwHqdUhLUHKv6ZkbAYH22jBHpPcrxgyCDCSeiGYo4LQKE5uvq7DGq2TpP9irFHfkaMQooPe8yxu"
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
