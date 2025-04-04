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
    "38c4tz48zPySvvPNtQSUBhZuExfJxa1L2b63i6VwhdE2mosndpkfmJzy9ZHLAPhbyebff8x4C5K7xyEHLXLKrLkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47N9Rw8AXrcbS528Lz2stLi2ihzYWQHkPq9Y7ewDpSnVS4iUs9ejbcKG8k63VMpnAtZvGvD6UUDeWeGqrRKpyp2m",
  "key1": "36YUxTvAgk3YoqMcMsY7De4VvYh52Yy5ozBdfzudqsVxWDJcRBwnBnDLtN1ViYrLBkUsX3wggReBZJhkGoXwEvuR",
  "key2": "2dSgW9Y3zphunPwj64R5hk3299qETBSLjBpvnX4wirM7vZPSZJgD5rYAs9UkskkWuPWzNcnRK8xp28ygH9MC7e7T",
  "key3": "4d6cd9ZqQqQkpNCv5Pyu67HCsx95iVTqMy2NmpDYTz1BWrXbARM8FKjfRjSHoM87kSaTFiCc4jipuN1gcpdiDVbD",
  "key4": "3tUTaRruLzmkJS5T4KhdQbeeChNmUQ4EfidCietc7DYJNHoZqB7CKhu4rDAoAEZMDRZUMotgbJSWN9WoFy8L4x8v",
  "key5": "2LgSdDw7NXQ5HL7KGG58GBGoewuPLMF4HJAX6eyfDtkLEJ3EMrrG6Y8YcwmMmeR57gSFz8JkzgDmW9ii4UB2Dj2n",
  "key6": "2ptksapuSbnuSLNf3LY9jfk2wqJdoYURJV2NRpyYQM1NJiEcCUBku3iU1EfWiATUJgF6eDSPNTv13BVZSd293Lbk",
  "key7": "3FWsgePpb5youZciMxyevjqrGMfi2nHZKu7nBJgjrg8963AeHm19prb65Hr2VJjTH9DfJZ2bTDLsn7nQFGxNy6Xs",
  "key8": "4r1HJh4V61gb6jgzZiw9RCK3J5ZWUyc5hfP6XkEz8hdkPiMBskYNAJMopdH7UTBaqp5pHrHjW6f5hscYVo1Fr5AT",
  "key9": "43DcntuCXHGqYQuwcdMXK2CVbPcoH35VoCiWckywSdGLKidrNaNdLaQbgZAokFBDV6UE46VBicENwihPHpmf2QJj",
  "key10": "3xMFmh9s13Zj3LuvZCPdE6QrR7MgWv5pzmFCKWL2mZtbn42yRHAcTNiEG7CzconQQwyg6goDgxTSeGwacSK7fdsa",
  "key11": "2kiuLwWVK1q5K9DS6gxx3qQchQatAcQDLEVrWiiq7fUvygskq8LxX5YNmjd16bH9RwpHPaSKTNa3VQtaENcLFKAq",
  "key12": "3TWPeH1cNAKD2vAgHTUceKJqaonzJXyfz1u45pq3EJmhzmcv1kJgkQVL3MSDjwY7FFoaKNKcdmEMTKA57b7EYsad",
  "key13": "4m5RrJcd4VwYbaD1kt5beZgquhMxLDztBkVWHvHHngKyUNGA8HhKsUZmo2g5yhBGyM9L8oUSwZ6M9MdGUFckFA6J",
  "key14": "NAnuhb2mpyck1QY3LiWLsLw6YDPFW551Zyc2kuHQwDkEixTP8up4kp2Ck4GKPzz4MeXzz1NEuPXmCYX9KFCqjAP",
  "key15": "5VWoj7m6Wm3GBEupCwh8aBo1e73k8pCHRw3Ay6RE5VaY3zWVRU1hd2pT1fUhHnAmzmGdfaHoMmX3wEu5H5wppXi2",
  "key16": "55CYsUD92H7sH934pt2rtnj2kE3J4wwFJZeJaczKvWTwFsXubNib9SdpGnS2gtCd2Bm8TU4Wc3RA9n9JmBeQD71w",
  "key17": "5Mrmfkh4etzms4BpAkc6cCavXnVHtfoGrhmzzo6uX3rWctths3JJ4d2YL671WhTVPhrEHj4LZFymDHFCn3RLwBZb",
  "key18": "iFP3dBiEnp399cvWC1WcMZ2XMSkRu9cvmQp53AaGo3E1CWR1Kn8jV1BRcot3wSta6DvAVaqhYDtdredEWVnv3WU",
  "key19": "2RrNse1eobPabzr2UcZd8me5zPvNXyjauCPzeueux1WTDkXX5EzWBvpkwucijke8j7hA1r5hYxwhwuetKA24be6g",
  "key20": "2LrZqaZ7rqma5ywA1oYNyc3ZV9x5zwmRTyUYazDVmRqfGysoN7gmzALzS5p9yXAE9PUDAHPwiVBnFWbQk5HQXfCU",
  "key21": "3CgsyxtyK62CU66aYLoEMWDqPcmdTPYXsydan7X4gUL5UNxbUemqKwZHEbrnsv9NBDLj8YF31PGKYo52jvctwJaB",
  "key22": "2HKbBTPb3aBXmRrvKHTh8Uj6U11EBh8YL72BRLDQ2rwY6GYVTT3m5RpRcEHjjDPARzmFigccRPZzrWf9CoK5zdtM",
  "key23": "3pAARtFDatTUMRQESmuC8pDDDorpEsHEzPfvW1zoZbayvdsrA1QHMcv9bpmRUa5zyJqXRxuEqxhLqcBPUqFCwyrY",
  "key24": "36WRcMWNgf7FGn5F86D8GMQVy8Cfww6bwdoDGRoncX8FSnbx9Ly3VEGu2GdfzfpHrej6C6xH9EokvRPhYHkMQto3",
  "key25": "K2qXA9mersfkzQDPQKB8P6fnHPi6h929z8yW26ttHGusp4Yj9We1kkgGd3CbtVZK8CUgqi8qPbz1Le8kRJknNUF",
  "key26": "23cydPmddtgy2m6BYrNaUh5xTAz4XF7VTqqDvsW1XxerW2PpDeKa1iS4LKJVzit3MRivGWDRXr3T4kcDXt9qkY8N",
  "key27": "3h2h6vd9QzHsnuyGgtW7TcudaA1orQ7oobV8hNLfnHsqkPos4Wg9EUSdm2FEcabcbezCt7SrjUpYtZuAD88Lfpxi"
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
