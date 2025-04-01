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
    "5PDenTaoFx9xecC8dwnLuB2A73SDWXzE8BKEsw1YqDECYNbruGfGTVASEGs5buQEeXAiM8pshGjThTzsqPX41n8d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JoJUxgso4e9ut1UVgLpp1uNR2dLbnadSCpFp2Jr5aLn7eR7H378yTpjnLXW6kSPQ7QHEr231xHPoH3GkVMhUoub",
  "key1": "3wvhRBHmueaYJ2GEA1D7XgUmLHax7ARz2pEVJ3TjFSHtigSdbdgf4dbj9UYDgdiL8nZYHyJpgCVEVCvrXLuckozp",
  "key2": "56x11peXo3n1msdUCYCU1Yj5ujd1PjiSH7SubGbYefXi2GQ5m5gcZqSsQiu5BywPupfWtUoE5qMLEfBvLiR9fSPS",
  "key3": "5mxEE155SxnaBmJ5bJdvYxMyy9hqYAxd1AfB5zfw3G5wnvaNridNDmxqGvgnVqVpqTwU32JZna22AVGWrcPV4sLS",
  "key4": "5NnyoCpkcpcj1SFo5uWdKRSMiuZ33mCuunHU6ty4pqioMhoTmmJmLqVvSLJJ5499f8Rhyi6RHzgGf2ubFA12h2fd",
  "key5": "5tfn9m9pUGb3X1xcUzw8ZuaynseP6bSHASEdu3RpEawPuxno3NwKmEVVbupR8YTU4RdtHYEi1dLD6yaVV1ZdCbhV",
  "key6": "4saTcBjFkgKrFVbNrxrvqhLUxcRnLs2USMoCEqrB2LhWSv8cwfSHworU6wx1puB2iEmpsVYPuzG7q8Y9hTLpGPA7",
  "key7": "53eeqto7PCjQyKJukAXAzBj267WXqNLHuVZMtFhdjdQAEmbzpxbUeyjThK9jZakLm4DQYUUAJEhcbVMs2XErwk9Z",
  "key8": "5KuAG8fnQUbxRJKjUa23iqF82sTLY7RCzpodCXcNeGi9oBXhALJYPdrz24wYLSR9UjP3QqdmT8yA3ehmYvvAZrmP",
  "key9": "5KtjpuKi8zDWFCY1NnCxMDXbBvVcKvkqWnVqnGWyednTEDLA8uLke6s8dRtFurkJ9UpeTrJ2X69YrUfySasnC4UV",
  "key10": "3D4Lk1CjWPMuittFpw6CDgNLp3qKspDinyKzEiTVgLL8xWHz7zCcBFcNYVQhRBx87yuD4sPWPC1bLYtG1LVsVaoX",
  "key11": "3uM5r24SVz7zK18qHryPCig9jvbFEmGNzYResNiBmcP3WT9vzv2S3G8Fmwz2NDcDxbx7pjLX6MJmPhxc2DmJCQjK",
  "key12": "23hcQu4cLRng5oJdHkxEwakeqTiRze5Q5GujQnps9hY22M5KsaXu3Cd7xkVVGBPdhmR6PqZjcQLwq6pJ8KNmwbK9",
  "key13": "51JT9DGaQ95YcmBhfNpaRa7wziqZBt4zy688nHohcoHWWujg2edPae68ZhVuFrhFTji4x7hdeiaaLk2RRXKA5p3i",
  "key14": "2H6DRT5dfXLWyvB73z1gzcX4Eccq9jaijeedNrDvTVKiRc2vpaEzy57rxV4WRFznVy26x79esbcHusVaHdPAPNYL",
  "key15": "83yteYFh6a62GEp5n875An2X1oJrvS5L7JvWyGoHRf37h2gEtTMpgdW9K8g5Qy4FmbQ8NgTuhpKyd8Bi7iER2M8",
  "key16": "E1QbLrEnPxgXd2nCQ5SSpmHXEyrWkZcCSEE31ERPBpwYFtBYjhE7m51Rbh4Gvdid4QyNrJmh5yj1yLfXEBnFDwz",
  "key17": "DKZPAsaT4vZgYronnhA8MY8zhg2QdyeqCKw89BK8ViAQn2987xBn9Fu7GrfYw2n9zQjQzqtKVyowZ4untM14nF8",
  "key18": "3G1LJD8Dh6xi6KTsQojbT5roi33JPkKHtyf9B1CZ5J4nkgdt6XzgUdktVaG3orCciE2BaAqGB9uD8KkPfLniCbSF",
  "key19": "67bRzeqiYiFAXKDgE7eUaL5woPfd9hcHvGFncxgw8s9HJp6UczQBT2s2dhGzRU14mK7pwV91XxtsfinbF1pZNcEB",
  "key20": "vjUxmHn1nYBiwgwugmR2oWpEbigsV4SMZvmLDRRjjsEhw3ZYcNLBHBeANsn9XAsijdtCezUxM3mBPokejpAqkPN",
  "key21": "KqYaLPZ7CXC7VBJkRTmwc8s1NdQk3g625Bbn4HyHMAPLAdWRabFeGDKNekNwEP2qJi1njKdj2Dg11H41vYcL4uD",
  "key22": "5nVgbBaZzHGzGCpWu39DgudYrS5fwzKhmVCHGKiPdDaX38Z28EGELEfWhhYwvTbpFWV7hwQyaxrpr9thvpwwk421",
  "key23": "3aQZM7u1ff2Yn4rQG698djLRNiHBTGm9LTwx5eLcTubV4ue4Qm6aBrdEtLPbco2CikMvg1qJwNx1JwJEA7k2uMtU",
  "key24": "2xsAxgJpGwqRstoWrSb856vwYJx6J7WPQ5ihULfMJ4QFFruXjVkGyzfnj6Vqe4dfRtj9mzpMDjb3QR9tBCvqoS2P",
  "key25": "5tDdZGn7QrB84C54wK9cKzoK95fDu2VgVuJMoNSU9s5rsuCDTXdJkG1moqCu9i5gwouGNMXsvvgzyerR8jxXDTtC",
  "key26": "5xsi6E9Pnov1JbK92SwK3sz4QeWGUFUys1vppBvmce4J38Zku6WBRw31xFPpPXMb4WPdUbBbM3Nb4DRSwLisFdWR",
  "key27": "3UUqg3ypAUf9Mik9ovZB4N1m7TjVsUYGFDSbhkcjhkqxaHuajfdcgFdkxDP67uRPUNQ15BBPw1Lc5sNEYZLKumL6",
  "key28": "5Eh8k5NN3Z6DYBSwgrrkgxu62M6zJgydYwdTrXAdNdE2yvSQ26YgJ82B93gya4yWZgicL7JqGu9Xj1eUJjBkAwKy"
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
