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
    "5gPYNjNKMBrmsWw32aThsi8T6SvtKwsseH3ADPXgfHJ1pPQ1pLiYiAUExFf7wu8W68QoHYhmeQGeBd7xmeqS12D2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CzharE8S2nnCc9BNFh6o8oAWvMJJPrAZHTrBi8fCrEc3QcXWfBGpgf2XWWQ9Vdgzjm1iNMhSH8VvaNLR7A1L9NY",
  "key1": "5sGarwoEpeWuEHW6rHExyZpDy4q1brsypbueCBs7BTx1tQXXL5NcqvGJYrWMeG8T2SzFTRASXy1Nvmx5MxGn9xjy",
  "key2": "4WZGePtyh1SeW5TgaAVshcGDQDb8tikJJ6bADoy7kidH2dK3pJsioqh68GuDaRxrjx25dWjYnTTX2q2qyNXxxRNe",
  "key3": "23vkTeomCvihNM16HRdQR4euR5CvmhYTdm21mPu1k2KhT7ChbTTFgd2T4srHy6SXECdqrEBUKh4XCLSk69demK6P",
  "key4": "PFKk54nYdrcSwqmFpUwzqEyphSTL9avmimPbWqSg3sapg8Gkv6TVFMBBWhW3EvRepXZ6hbgV83dZQwumrYjh9AK",
  "key5": "2W8pf8GkYJ228PvPXbckUnz36pYZ9dKpkjyaLes5amEc4yU4UqaN4f5aGnfma9zmCcD385U1aC66zqy982o1Yypb",
  "key6": "675tRmVVWYymKEN1sedpHQ2C3qrrupzrp9xxXjCbnNPikg4N2W1eLXWWn47HvBFvnmK34352DT4swqM4k2z6Uao6",
  "key7": "3Lq5uV9BxwYnncZPqnwhTAktzMeEoPDYWDfMhwEZmA2ZohnqBKJE5gvwXrUtnaUPwFR6NHuPmTd7cqyxxQ8S1X5C",
  "key8": "mqBrz8pJwhtwA2YAsYN439xME6UTMK1yve1YVcPhdnr4DqMrzRpUqTBA2KSMnd7cwzQ3gawRkLw2jzbywNR98Gb",
  "key9": "4K1LwrvuDRVvgV5pkLt4q8FEDDTvDh38eo8i2azkQCoCTCmeu2A98kqh2TDwKHv2LN53ZFxmJ2P26e5UnMR3W4QZ",
  "key10": "3KhAXnQVVBbztUVP7nekeZPNWsCNsUzxbMfkEz3eVQTZ5KJsTTYP7ydruuYyvpAzNbrAmRjfyFEEoSu6jwMshkyN",
  "key11": "Dofa6YJN4j7zZwGkhVFVyfSg7Gwu3tufRugED7m1L4kPd6kjj5UavBYeAdAZNqkYse8tw3LiXKQH5Z9f1jUAcq4",
  "key12": "3K86WcsuKf7ihNczcE9Ln1rCayN7k8kUPJREACbyhzb7mVHHjErEd6jBgXBovwruv68BcpzxDybgWYmXa548ZVq5",
  "key13": "68Bdz26jz2Kry7GF2wvFpYY6n6DinDmCa3N8BUhhKDdNUfsnQX9fCEuVdvMhHgo7PoZv8tUn2BoasepvsPAvuJ2",
  "key14": "2CuP8Lfr6oogA1NYkxSHU16FcNe1LFZQzXkKz8FT22erTvTVTZaHD7HGVYujabQManqnfx4BPKkPmNQsS6ekuV5F",
  "key15": "3FfDkPBFjDTDMJGaG7b51Z92XvNvsLWf53aM9kCAvQmLAZKF1JJcQZKfFxPg2d9XtGzrKH3GLr1GDEgP3TCxRijy",
  "key16": "kUhWbxV5kXSBVjkpnUinDZKP4ZC842hm2sfvsxFSBTHhaPDm6Pogp1SVzcwtCavqSVWM5G98x2Nm34ckhzEzC45",
  "key17": "3dM9kRq3BGaSNxN8n1AmcnNSDX4hYgXrNtNZdcjYTxDJxf9nMHm9BeNEVxujSa8VXohC3vR4717DtuuQsff8gvNG",
  "key18": "3h1FGQaWmhyVA66XG2r52yuNw3d6NbigG3z2h6j9GaBsdrZBSbrRFSiMgAcaGcCh5V5JNShDAxUnnymV6MW31qHX",
  "key19": "3vTd8cENBErVpEdQb6ybTqQ1ZAcKaqQHyvfEv8HibvFf9a6LwMvEjFKgvHbNC3GrrsjVqzs6y6EmUBDqG1uwQ6cm",
  "key20": "2DroBFRLCqNVWp87VopgkMTMknuJ7h3QSNnx2aSGUzeiUSS5y51EucTVQ5TCJhDm483Je8ib6xpdKcwnYc3jnraL",
  "key21": "4jxqHLVJZZS7JgtcydhwBqmxVaqEaCXuvL3QQVNLhJFt4817c9Uw8XyRtkZTHd4mnqSxcwEUVnaaoLbTiwrAqRHB",
  "key22": "Ln9mfDjLjsRsP2kKoV9MnHgaFkynmZrCHNoHyrKHXaNBdd8xxzQC5Dyn6F1M5xGUwxf7w3KvfVvRDVd2TUYpa9w",
  "key23": "3Tp9bKNeh7s99znB4V6KgU2NCJzcfuSHJxR5W6G9jiUR19VCeQNmW2Tn4z6bNEMFUgfmeTbyYxF3uifJzWMvnLvL",
  "key24": "34MN83Yj1npSfqqVMBsT9ir5CKf4puQtfKJyW3WnhdPPVHbvMn5Ah9XnJs1Zz9xZA7eCExgv5tCoAhW83UztFDy7"
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
