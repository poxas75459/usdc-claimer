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
    "4vzyoTddub6Nzb3JGvN1v8vvVXgKPL7VHaECAZXZxTHrk3Pkrq47vZujH3Uwu2FaAqFSmj5xLTA7eCJ1yQ9aNaym"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "meoRqvju35XARHZ1uAiTWSZXiceKzyD2aBvsHCv2TkU7jYY61bDLuiEQLnYhxLczeTLRaJWGWNbVKEe25gUJJpE",
  "key1": "YMqHP1LfawNtejuzpBYBvzYxDpLihGyAgzbJ1roXp7zYnoNDpyVGtjm5ASm5SPd1vnvSuFkM6Jt5QtQFik97Y9e",
  "key2": "2t3qwMDbL4gsJCvtUN1XiFGrNEGUMA4ym22hDbKq9KEHuMaDJLgSim2SFyjzQKA58KE881Manp1QGVGtZVAqig7d",
  "key3": "PSXWjrNcufEnx1QyWQZbNd9jrneR2KxpXC5jSfsABzLfYht8zzkVS3qN6bWWXXC6wWmtEG9QtCm71AAMDV6HQBW",
  "key4": "3Thi4iJYfrYvuxxPCCZzsarw27xJkifNKdhJR4zbtXDSS9FWapzfRs5MYFVvBFrvkJ1vPyBvGem118KH7ohkap4B",
  "key5": "46tor1Co3bF874j8uesL1GV18nLPGkWaFyNiQNc1KSd2aiuhBRVpzcca1xwNXy1af84WFsoQ3GzoU9GionLheiYy",
  "key6": "deX8xQrqvCSHJBmAyBHZn7n2CrxDfS67w3QDEXbgtY6Cx6boFuf3ngPSueiZEzsH6m5g6SCNa2YXDA8bPA7Lsr7",
  "key7": "2D8VRwvDfDWZ71gk5zii1NF4JDEPoqbDJTTQ6utZBoLTXJrfQhXSMWR8sdKHeXaKECnj75u1qnJM8LPzzGv1bFze",
  "key8": "3kS1tdrbqiXqvFa87sEb9RED5wfRhAV4MVtg23tHqt6mAzMSp19G3kLYYYeP8YfEC2ti14kdJnQzqzman6rbb3va",
  "key9": "4R2nKkem5T8P25jVRkXuT1Ad8vcVwFBkSfYB51ZbsjmgCJRpbRXw95jo89wWgfvadMjCqwpmEJWkFNgAtxJseEFw",
  "key10": "Zsy36uQB8AXg7rvKxtHEXKhSjM5md1Xi94beyvrkKkRrxgavQQKe9BPgKXDHVrHgmn1SZR7jBEnr9vVwSsNpZoH",
  "key11": "25MCGVtU9ebKQ65NY4umTxxfB37i6QKJhVNUuum6hw4g4LX44oAFb8sZ4y41VYcu9gxJp2DvDTfAaJZHvCpQEaBa",
  "key12": "2mru9cRAikM6p6YfkA33hyHfdSwSYrJnGHbFtu6vUH25CRjxqhrDtjLAk4ZaH5iExFpaPzw8yxMhbqaWw9roTZ5d",
  "key13": "5YTQGXtXkyJyHkHB2bY8ZWZes8NrcDe3p6Tz4hTGekMBCTymgTzwebg5it3rHsm65txv2VsrFkTYNHe5uPtkxv1v",
  "key14": "CGU7uRcw8WsmJdeJtJMacs9cHksyK4qYDxnGwqaRoMAQsiFKR6Ai17j1QepjWNFmaCnrg51ZzjUh7SKUpdcfEvh",
  "key15": "2MugXWErwVKigvKzqVLXdMseizYQgjwiyz4Wq6QdUnQ7im4WRqiuoFFmHM7MNxpSvKutx41JeTh1RgZ98VXHkb7G",
  "key16": "qk2Fmk7K5sifJb2JhGgAa48Dhjn6rUGcvU2FySvcxq4XBtBM2RfooBNshxn6v4dcgJW1f6ZuvieWDAU3g7Kw2RL",
  "key17": "53dwfejDNLdFcrEkw4pAjsyTGHUuC63rdYvUphpLLLaCMXPTjm5ZRvvFphPpevUjFa61E6Xx7qRTBYvnbGJgjDNw",
  "key18": "53Y8HTRsHoLxiieHgpLLkUC8TPxsQav192JBVDjVwggYCb946niiSiXapgAx3ghUfZuD5PnjoLzubzb2oUxu1JqA",
  "key19": "2oYh1iaAePuBoTFTTNbPg9gp5XdpbrHqN1ugpsqUsK9Wqw13FfmXU4gtnMEddTSPBEQNX5VqgDyRuBBXsZ8GBCt2",
  "key20": "5yMobXLSqGAgqkCJHnxxtMcm8xzQSf5n7rgpJoqQMNBCwDYEbX8NErH1h8us3mkmGZnfFPmRA9ZYGRjdGx2AaCYt",
  "key21": "5dDJB7H5osc66KFA3TvSNuzXmdNCLbEkQtVurnoVqrSNTaZUURLaJ6yGpxZiy8j4SvvRL8NH8D1hEo5YwadMRabL",
  "key22": "2dHvYeDWuh7w9QpnhGjY1LKZXGGr59VffLDSrxfpuQVVpmco9nD5rabybmX2nHPEQmQqVCYCBX6kr38uDg8bRbxZ",
  "key23": "4qEBmTqPT7MUsUqXC4JEzg7vYsMuKD9HCQZjywf7egHd4uQ18LcaKxMaWhgQSY9ppppbinbeVR4f2FyQF69k2xkB",
  "key24": "5CKbeaFmLHtZ3qPUEhq3yNqQW8Kk85kBz5ChQYnpwVmyB5qxoYXKdzKPA8W3tchzoLDR8TcYa2B9yxxofvWJgvzV",
  "key25": "4cwbDsASujPNmpiCZebbctGjPumyiJbX5JG4TGrjMb8G2PoN8azH718ogAh6BAm2CsvRGeezykvixz9KkWBaZXQT",
  "key26": "5YPL37HrmxMCEqtE8SbH4pL7wW8WcHVZrqVed158h4WAAht7x9GpK84CgFWSTaTihhYp13oNe72pAnRE2yYeE4bc",
  "key27": "3wKh4jJ1bUFAv29ywqzyufGRTe7M2ZkLHHChPbRN8QCyW7dimhiyrE5a3ermpAKPgNoAcEQBsgVxvASiajB8bEwE",
  "key28": "EexUcQvw5wV1La96gB78abcjvzyPWEkgEuL33DjRrGjyveRJQ5JHEzq5KMb6ie3oUrcJ5Ftqxhc7Jx8q2dQgjXB",
  "key29": "29AHTJvns7s9iUHNHbz7UyVQJzYhracvsHJJT5ksjQMRyUeb8nikeP8FTKJkhgDiXug7ZvL1otBgpRG9sXzuYXXz",
  "key30": "41fz3b8FZqRa2BcW6KF3twxKjMxzSSsnHPTkjHJWD87vHYaBJXvybPz2jNPq5k4BwkPPDkP8T8c1oSrtrBeEK7Kh",
  "key31": "2obmQh27yLCRd1pCrdgvMouALonWD3MUyH1QhymHj7T5QDtJcshT6FZ2VRQaf3YMykFfYbyEgF3z1Y1VCufZw755",
  "key32": "4ncogAB9Qzz7cg9zyyBvAYvMAyCkHJEkHZYD48FmypTx7vCXi5EamjZGegBajt8pbmaoqrEWXqmzy3UbecD2aeiq",
  "key33": "2hLuQiosujg9qKKmeTSq3CFXPGvaZabGtXaCjpHvCaqYah2TC66tB7YsAb9ZPBpA5rYfBoUaGChG7XkPCiazJtLT",
  "key34": "5wL81un9smuns8a1mk9CtvFR4WLQYHMB9tMS1dRWCbLsW2hciDBSDjrMaN1xHB3rUsnxz8JNJy1gwGcrFzk6Cnky",
  "key35": "48P4NWHzm2vTYtsi1zkcrmFgWzyEDvKxrT9NW91pGpQ3UE12RE74DpMLoJJMMD1zSypGExykZyJNDgnL6MERaHQf",
  "key36": "59UTcQ6UqZgWpf8rxFVpFSmKaLhu2L7BmTeV3AMEnGxB4HmjUdnPLgPX2tb4rsB4d8DqqTtw8stiryx5zBRkLsnX",
  "key37": "61t34vhWhUo8W4kKdHPFLG2wFjUjLZixR7funLCwJwWgRX38wDoWt1vkZgnjTLtbRULrsSNKjeb38eFPVCRwYvD8",
  "key38": "2sHNFrueDwrMtpieQMKZCLoffzKL237xCjWeESPfveuzBs89ABqV8X3oBhP27KJqHGHmksai3dNBF61LuvkjWXsx",
  "key39": "fiG5rtEcrbh4juTE9FaaotZonczN8FXMRkmEoCGmdKjAcSJXcNKCXGYsC1GBnQho2dgftfyZzcriFBB6YtyHfbu",
  "key40": "4X7EmAsQHJKsENyUN8cyTSuF1KkzGfYdMTtekcTvYCBfsHFkXVos8SASUUaY4C7NusxRgS4D295mztWxyPbxsjp6",
  "key41": "5gUjDjbsMCwoj2eTeirKqEaUPdskvpEXzQoaBSF4nB5DiVPBvgwEVFSMDtZWRhBFvDUjasJBc44BP5zEfimjRFKr",
  "key42": "3YNmZkBQq8oqdJVHfX25daYnAYKUuvjrW1u8mwQ45T5GmgpUtFS9axkrQ34TzmZfmzCJEQhrmoe4AabfAX8weC6F",
  "key43": "K7c4hLznTugPbzi5AbVbksjQ38jbDAzvEorHnArMpvMXrFQSuFrxWzvaMAvhq7B1d4WiBrtYA4NEXcgwEctsNt6"
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
