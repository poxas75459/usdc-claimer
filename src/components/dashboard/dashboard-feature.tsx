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
    "4Qn2CiaVNuDrudYVoWvATPFMmtayWVKD4V7dA4txrGTSSPnEppEuKgsRkoFg2c68UzdjennesFqcMU2Xd4aAUPqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Run7XYfEXyQidrdfchYtXxH4MNwjLRHa9xkbHT17kaiD8FaLeXGVp5DLUw6yCqxR5YQqLRjdEN85Q39oakzfjST",
  "key1": "3U8yb3kTz2pqvm32R2BzXbhYPAVVsduqYVNSyaNjEBuDM9kEzbFM4WXxCTvP2LpZvbxArqgsE9mndBrvBvj5RbsT",
  "key2": "2Z51jJBuCnEBCyND9Wo8V2siPjscyfKsUsjC1pfn2conSDhc5Qkf8hzwbDjwbU2MzN73M5bhHm5ssGyhVRdbwD5w",
  "key3": "dzQoYtpYKiBtfxEzFUxJKeHN6Gft8B3RC9wW5ppquNBkaBQLLtS6TteFLLAPFA8W4ZGxazPCWXziNg9oT35LBHi",
  "key4": "3r4v26p5azCAZyZJ1tuCbyfxDE2Jd2WR1iyXegarsWxVd5ZUWE8dP4HqZrhT11AAP3acrPHA4xGDqNmPxi2kQqww",
  "key5": "4F4jTFTEuXzyoiZz83yq7SRKCRaVTqmGiX2RAFVeJ8RWkP4i9e8BNfKgPd2KhUsvy7UTH6FFxZjRnjfv3DrxSk4m",
  "key6": "NCyRdF4qRpdNbRoMmapVF5KaGYzscp7YCysXKAFXW9CCcTKZCJoFxzmc1YeXibETSevMNpxaMR3ZHG4vZryfrCj",
  "key7": "629sVKHT3bzW6wwntKkBwLHMqUy9WfBwf6MufjNCpsZ3ioMVsT2nPJfhVkrijrP5TzGJ3Y9w3TUq66m8eZ21xWN2",
  "key8": "2xfETvx9rKDPuHAWytixXo2bjtjebc6Rur8zP6b5uLkpGUCLnWvb7ZREBKdzUZikA65ELQcW2h2t3utHTXEvbJ4Z",
  "key9": "3oSq3jtS9i1iKaCxoCiQQerFuMwUv5bc1djJPsPk1QnNAdcSkqfGMRTb2Dp7RHBfF2Ti8bDLKqXMXxvDYJEaEgfm",
  "key10": "26nR6w3kSdQGdqQYoDScxqYheRCEw6c42Lb1us2Gub8pPzoVBy2FpUiE4MRuqsdTRdxZ3tuZa4mVYYsoSXADb1go",
  "key11": "j6ZbP3aTi5EgL1dFYQBTiA8ZCaSKV5S7JCcBEE82HP9B5NmmMU2U6nkyVC5J6taa5mpoK84TJw9PBGpuMoGfSiA",
  "key12": "4QqP5hL9bfP3MyJzmssFpB24uB3BT5X3jNRogb1unFscZqrW46EtPzwDGJpv88JfBkTcew66o8UR2oF7UoMgeSgq",
  "key13": "59eSZx2cnEex1CQ5bhddN1vCVxGCtyUuTcQUzv3kDgjuC8FUhaWZrn7BdwCXWfsfYTcpPpHBZfVtkNkFJpphDiWv",
  "key14": "26DmqUj1ne5otPQwSSddTVKzQzh4UxYdgTvWbf8noT5AqR3ZygpXKmwauhR4sCQDgk2Kj71DpY9bLjAczcyfFM7q",
  "key15": "2EGm7E4EihdcxmVK3qq3gRHUGumKR8gzyUxDsWyYse6jmQz1gwG8sDUUcreUhfLNng3mTPSkP4yHuj2jq4mxErje",
  "key16": "4TQ7dVa9GHaXprs8F7JdoLgjehT9HSLPyDkerGs27YYXLZJQ8XqyNQrgcEDktP54A79zpxG5KF7xfwyTrWLo3MNn",
  "key17": "2xAVi4t9rB8qt3EGnoCcbhQc66sfdJCuCCULCrETfEdxLva1SgGHHx7enS7fjLodKNUdBb3i4FG4bYhv4C6Hathx",
  "key18": "4zfyAnHE1KBKVFYasffskS5s12ngZ3nNzXkFvLcRgC4EfnDCHgi3A2S7ndeggPafDpHgv7qcLXLDZTfQYncXUWcg",
  "key19": "5WGPvihQhBRDrf6LxxLZFyX56ujmhRtF8zMV2asEcGgdm4RHYgqpaH3QfrW6YfRcn45LhnKgnKYdp8Stta9wTLCT",
  "key20": "2GGPGi2WHGLaWSzVaU3NuSte22k7Tb2z1Xeox5a6W31eR1PdU5phpWrLDhVjpoibvxGR6UeBXKk7xfkiVZRUTmD4",
  "key21": "3HZtvtaf6W2cvp9wzUTSconCPjgCrfSLGccVgz8r7erSTwcocxzLBYBF2dfCbkhBoajm6iTv8zx4awbJSNuAmFpC",
  "key22": "5ZE8Kh3FGpDJhsUtcHTJ8pDwfPLiU2a2ikFoQf4dxfN854s7FbjBwfzYxCHwssBfMFEzmGc3pQsFEwT4Tnmg3Wk1",
  "key23": "jHod4cGTDtUw9kHE4wmtV12PnE5NZ4q4t9E1GQr6XFXaVmvHQbpzuEw8fHyNLtsTVVfi4RZKa3zD7jAVRh1NWfU",
  "key24": "NkdsUNAsq9w1HoVcwx7FB9ZorbmVaN6hnwmLPQXJsweip5MpfPbLEWGMeDDURSSuS8LgKWyr2rimh9Ssv7MRMiK",
  "key25": "muq8h26vxAjMGmo51wgvb9rCHzDr1Tiv3S1K6xqzBhxvMR5bciFv53YC7uKQdsGsSYUgMRw13p4mBgLKcJ6kSyJ",
  "key26": "48qYkX7LGcLwDuaVu5cgFjp2K9MVGEMTWBxiSGS9RZmPz9UNdUKmyaQQRfWE67aKmK9mFGTxfokdQyMWvWa7SwLY",
  "key27": "66bchZ4KJDV4UTNTJ1tHx5E4EeiwQLsx16h7eVXG1gUR2fs7eoFy2hfMShRV47hCiSupDKKYF2GeqLXMrBLheFuX",
  "key28": "Mhq2sxwAkqakSJrc12GG2z5zW1W6m7GcLMS1W4ryZcuVAr8Eb24HZAzJpLtMqTnMWuQyWi42YnZjJpcYJBai9yr",
  "key29": "DQgwFNHtLM6Biw4H5DAKSKMZ5GNzNCWo2uf2snwrdHq7VST6PsUuLXYbqHmrXpXZ1t7FEG2zzzWBvp2Pphf8d9q",
  "key30": "4xs1GRZTmh3sXTQ7UtbRVCM1KCCh8QwuXDHtYFpe9eVxhSA8n3eS1DJULYuqf7ECyhM8keVrTX7YwH1Kxmo5ViXt",
  "key31": "3RjJEh8qW959b9nEjiqxgWicHZmjNHmeagZyYm22ZKaBfDJm434eVvyChQ6wF3vE7FvtSYBz9nYjLyCNReUbhQzX",
  "key32": "43ss8Brf2XEsjFu9jjK4Gi7UX1SUe6buHyxrAkXowGV2DBqkXh7zB1h4VWme7sZu9dmqj2Qfm9vUG9xJ7PbnPBdD",
  "key33": "5WGC4PJ75LbMeaZw4ejmMQEtQFtdzZ1Tmw1ZYAiveBxFCPe7uWe9Gx1iaX4yYM9BxkxN7QHMESBAdiZCtR1YGHkG",
  "key34": "4W7yBTTeYcwYiZyC2waoWVLYsEm7pnBCWarN2kFAQHRrM7kpzSLSmrHskfVhVHqbmwmPstdGvS2SRpuYhHP68Vg9",
  "key35": "4acivzxnMSCpqAiFTdJYP1S5cYXmfq32ZHtBAmAdt2TjXMfKUvFsD6LuN1UA6wXQFyFqYsv5RgF7DzieR4w2cGHP",
  "key36": "5GkEHN3omSePaS5Zpv586hWVJnA7sU6hJufRZ7wVDK2WoVJqhUTEFyAAhemnMqqiXu7n51BxGmLjVWf5jZnoQYDJ",
  "key37": "a7x2HQEQK2SrQ4dUDwdB4Pyquui1saQ9KV7QBu7wS4A5XZqYyZGGFDQPwkr6rodPcTySjHyunoqyzfW5z1qTSU6",
  "key38": "2msA2TW3xQ5YvkjBx3HEMnF2QGiTKqozMyY4rug6jvtqLRWzXCU4upZ5DjPLthpkqgLUAFfR6EZtpcrfaErybQkZ",
  "key39": "2yJ7aQmLWo7h9AgKF4ZZ1i7irPNrvdTnNchcPUqTJmKt5W2ncfpCjgBuXf7UiQYZVbzrYy7tBBEqFyZHmvCQQeKA",
  "key40": "552AcjNNyKeYrLCABzJbs7vNyG4Fb3iXamfFgJxyfEL9HJoLa7dCriohfjd7dHp186S7F3JH7qQqZu1RbyyWhU6b",
  "key41": "2HjCZMrUrS37qxgnwnfRcRLuhrJaoSVJXiSke1UjgVGsjJgELVS5h1ThS7ZEJBdzopGxy7G8TBjSZfrQvt6go1Jk",
  "key42": "4VHymUafqczX2KGMVGkTWXMVqCgmfHiAxii9VVHU72Zycj9NTkTiLhcfrgwXij8tWyZz9esRf3HmzD8atnAtEx5V",
  "key43": "3Q9QDDZ1fHyDfVHGuUuPb1AeYPfffb4ASqcvyhAhukD52nyUhnSdZtK6hZ7ta7ohLbAXBu8nDeJw8j2XnBdPYd4f",
  "key44": "vYmjgYLmLd98L6pLGRZBJRRhdqtTPSBUbBh91sRrPLoj9vYVHEkHXeNrPUyyiSkgnjBbAsvHjDAA6Mfb4AQ5EuH",
  "key45": "4LKMe35D4YmpxW5Q3E1zVAQ2Znub6DtqiHLZCpXMeSqnnKHLDCLK5G16bq7oCFvSk3KTKnSbCMTuH46JHUEuoEsg",
  "key46": "31FLaupK4PeXFxpouNzLfug7p62JMpjPxZ47hsUvXfNQ3LexNtsgzfGuvKmR3GPRR3fkAoKTd26uQfApAP3LCr1r",
  "key47": "2fSzezYVj7tE1W2udfENmMseDAsUWmzcjQE5e1QZJfKehV7Sw5HGZ4rSYMBnwa2JAzazKDcBxMdz8bQ3CTrCnG52",
  "key48": "3bXsmL1keVfYFoVoewaWDkVwGGKabhaFUXQrNnm92Ld7gQ27chgoxTuLcgiHTLsf5e8f81pd8fHrwSkPmiGntd5M"
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
