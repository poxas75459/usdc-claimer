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
    "3rXiG357PzAR19Dz8AZLZpUXG4rGLX5ERzs674r7tLaEyYN4sXLXeargQnnSXsZ3QmuDFPMggoCGniSZzufZtjiT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eLYYAAfNiRDDhKXzUhTTfwy6ENhyCSvquiPZffjFGJMvdQ8kXWrWVfKcetH32Cs1wPViNvd5zqtDr2HuFY17dBk",
  "key1": "2GU9BYwKkt44FiXUcuy18LjJdM8UzdUf62DVdVhf2PrtaVkn1JquJ7HtwyXWg5UmecQC1gGfWvyvDheLJji9PiNj",
  "key2": "5istTuudU1Hkz4eT6fAYgKZHYAcAi48ho9eLZmz8viCH7ZnwsmFZyXvqcnPNRKyXJjUffhnSonX7Cy6KJypMb5U4",
  "key3": "5LV1VvQmoiHViH2wbyhZTavxVTGJUjkTgV5aPjfmvVqcQw9fuuiaaHArccBUCvsZFif5Ag5VFePKzpcwuHHb8c2B",
  "key4": "44MnS1dN8JtUosnseSvNTx1PhTohAp3xhf8Wa7JgixPa6M9XugJ2JrSvy4okKBXMtGnECVsfB7k3h4MUkmkTuHh2",
  "key5": "4BkNQX15e8VE1GPLzaMtKCs8HG7dpBih1rUriVina3aGTp7QWv1cC6yWNW2bgXhegB9rUndhw9iRGmKPyv8M4DsB",
  "key6": "HStPam1x84v8hXf2nzTU38ADkcuketqvuERqJ3D2rUZGCbdGGz6h2LHvNjeXEPRegc2jmhxLvJocF3YApSzGbwE",
  "key7": "28CP18sDNm65ymqcwfENaMCL9fhLzEwSYxJUnwfzmv1Y5SWqyeEL4atNzYmWVzY633SesLuEyxqkErzLi9i5EzQ5",
  "key8": "fzGSfxn4Msf6zzVPB3cdgDNGcGqL3q2CRBeqrLhwfiATypAk8GTRF6bz5TTbf7yvXtKBZhZd9mhPDL6XtpUrW9t",
  "key9": "2JqGj4Jyb9jeMfKA3ZJNAN44SWxyMyJbdGkheU5R2hPFAzNJtLjF32SNSprHim3gNx8tjaTVDsLnL1EahJvH41pf",
  "key10": "56vCQYk9Dw3WnBcXJtjWVDPSb2fhTaZHMVPLgKhYCb4SXVKMo7VaCy387Sfo6G6qGvPZokrUMD2ozLzrrVze7UKa",
  "key11": "4bKLSrNofqVR2rjY4VnnMgvFq5QNAPBhJQ4ibXZSoJt7Jx7SQXtP8gC9mpqB3aCeNCdLbsGBMdzcpKPS8ddVyAM8",
  "key12": "RCMeGRxzaSYD5Cz1q61z51TKJSvBYxJCjvz9tBVguCAMP5US73FgEgwDhCc4PrGLyj5MAZfPN62zErQXCPdSgFi",
  "key13": "4wphHPvVsvJBuJ4pQzpKTcsEqvmHLaD5beDJPLubKvtja6TG3TyCgdfcV6A28RbfAF8G8q8SQLxtbyRzy3LFkJGL",
  "key14": "tuzQG8gqyC7tntLuNPK8YjgBpVY8Z95sMR4TnKFsvwSrCBb99jg9Bz33BH9CqfW2XKzmFeRWNoY7TPuLVbKmkiA",
  "key15": "4Be4R3Gw3G1XD92XVhYAgCirJ6HpMhTpJhdYnWSb92LJhs8Afc4KYntvWbus5LxgSLu3RwqSPnczX5P5cG9K5qtN",
  "key16": "4xeJtWgZokibw18nVT8Z1Dt5PvcnVVkAckSPY2gAUFQDtVngW1HLshiMQZxVAbf4D7EmspPTPDRguawMADvLmJkg",
  "key17": "mgR23DCcvQRjbZcFfEVMGci46B6MsgmSm5ZsP5jPtW2raZvALPZKCrTXvQPZ8kPNBsV7TdWyKNWCZSPE3b6Prw8",
  "key18": "Uf8z4fGDNarpAvcxQephSGY1bTkhbEe4Mi7tfKzM4h6y9aZLHdufzycAH3Um37LenMJ7F3Vgu5VYMWacVUUeBWr",
  "key19": "3XNqqi2T8J96P2MTykvgaD2hEMdXLuD55ANdza6yUJR9fsjBETDZL8C1EHemYzsojWuYZgYRWoq8cHqice6vFUnD",
  "key20": "5UP6bmJhnePXzYNhgnQy8b5Bg7AFJvPynTw5MAUBbsPnhZhC2x2FC9F9p2PpAqh9Z8Pvw8ozu7pguMFqRF4eku77",
  "key21": "4N18tqXBEGhdBAYEzt7yhneXpFzHZW5SFU4XgdjfGDLnq7jpN9yz3Mt1J8JvAViTtsz6nVCxEtysBjbAzwnx3w7s",
  "key22": "2x5a7TvZ5CMxGBUu63JB1qY7G7KFKoNjm7BYtARV91PwUBHr9rVt62A6qp4pi67xWjpmXMmcEF4dQdmq8mrBkEoG",
  "key23": "2Cw4MqM5Qd3VbK6GsEy7NnxF3xRFqkwJPptN1aDGBvbHntc3Nsoj4WaTE4HrUWJ96J2gsXzeafMtjnUiHFreZRAf",
  "key24": "2y8c8j8uM6jstPAYLTYTujnerRVagx98Yav7AnRLUHNvtcsobJQ8dgUT3UowoiSsRJcG8TLtiwHmVA58zdceoAL6",
  "key25": "CKXZdUdgJ1C2vDRToWqtSnd2zHGog8shJ62YY4PDvPxxLQzFKPwE2QmZELBDmSg6N2wa62MwbBee2SWPmFcSaa7",
  "key26": "4pRYKTEUx3hG9381aWFyZsj8XwY85psYshsUsV1BrZi6XXBH617fTFsXFV8vxudGWAZunFAjzXLLqZFEHm4PnR28",
  "key27": "3pifsWSoVuT4r439DeH3vUvzfUjKoVEekRtSbLKMqcux5jKmuqKBfDNbZ1EnxvkMPgqLpUJZr7hp9pva7g823m56",
  "key28": "3ZvpbszrN39jmTvvNZN5qPNWyGQdK9CrXhFe9GUUL2rErxyzm3NCdLL25hp2HWyn7vyN4xeM24ZQAaAQtXc45LpL",
  "key29": "21hVPJ4Ma8mmu4QtqHio36E6ue7oy2zb8kDxcywWc81esZmWENKpbMtsHqe4LjVSfqWAWAS1BbknUJViucTPVPjM",
  "key30": "Sk7XSRgEouw8gH5Ed98FHqmCjceCUjchjgHpTDvEuYEAgi8xMWX9LXvPaeo786SVnBDhCbQUdTFQ7fowvVb3wDV",
  "key31": "4DeNe4ELTC9WGFQdHvvuHarR2fGHZPS8do3T4LbUqgg26ngjaNLZTWL7smkFjwVfhrB56St7TthwxF9U2WCLnJeT",
  "key32": "5qLwhviiZFCcRjCm9rQUX36hCrfQUDd3gSTzwSU2BAJ58fsy6UsMR4M9uZetMsJvuLANAetTKMjCPRwNe7xDQx4c",
  "key33": "4MU6BwCyoMpuQUDxCZ1a8YSgRzCt6fV3nAw6mDE8s5a97WcmDXSFV3GszNa2n6THX5nAjMQJHzsV9VtCem27yc1A",
  "key34": "229k23ubMduJVT4AYgjEThfiQ7BQcqHEYcTdx4p4C7L77pkATzrYp8Nmdqq6GjJMvBWWZiXSwSj2A5asTDCZHQJp",
  "key35": "4DYtWGkf9vdMTGquVd8rRk7W2WpwEVL6w61F6toDavH54sXztnAfp54AvxKabgLx9gkWhZJBrK4NVWNJ9W4EvV7B",
  "key36": "31z8YCU2dU8stUiwMEA6G5r1LbFGzXffTfBoBeC58Eem8oX23fBsyED1YhBbs4wWHZAuuK8rBN2pLdecaddkoHL5",
  "key37": "3WQeYeCAaiiciUpAw8qHvWpfLebQyrhEyTiZsD9zKkyXLopEonUE2WfYVN6k4nTkz9EEkjor9c9L9sQ6qrXes5uL",
  "key38": "67kZrtY9cdDxiCG8qfg6DvCU9rarf4TU5qcwVUi3E2c3rAgmUt7XJS1gQ8SSTAGzgSDnTCz6zoouPvA4BY1r7odc",
  "key39": "3tY52PXy627eEcJMFaw6cVYK55Uf9ENeV8BsDyYCK7A4S8ALAoYpB49Ew6MpTMrite5guPVpLLTxicXHY4eU2eSw",
  "key40": "5ZXM3kkGvtkwZio9ipvM2dvMy79m81yPJNyZKFM3MYbEPkoqRvynoukTKSwH88UUm5rGdzdoFduSuXVQvJF5zWay",
  "key41": "59bxtzkAgcTDMxix1wp8o19MLrXRpwdtP3HazMqgzUD1g4PtjU5WCUWwsd4qauNjgQH7jt8xq9mzEjCvwkLwL83D",
  "key42": "4b6RZz855dES1RPerMcFpsaKYQwCPS7MnbQ8fzhzPdrU7dxgPDc3HpNxywFFfSYKLTdTYKuEckN7anwu4B5Hkh6F",
  "key43": "m72YBYQuDZWkexCCM8VpcugNe6XLiNk5f6EGM7Mfi78aZLwveCc4rgmfcKKBKWFqXTewuDmiDqMWqvKkRRHAWyS",
  "key44": "5TZhy3wLM8kWALpzmgmjXHK9NfWdpPD64qPxw3SmVyfBrJhj7N4M5Xfn8UNehA1Q6x98aA7h57Hrx7knzmHXJgpY"
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
