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
    "2bYEwSM7zookpPLMw62hVcQmTL8uYeWJQ9CEYi8sBJ5ZkCvEG9k7VdqGgWD23Vvz6Reyaxgt7UNvGMymFVSe38mM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SZYzbPAZZDEVgbaM8AyMfZxp3DoUJJqks6j5jAedxcRSHbyFJLHfNLNcwwa7vwoTa4BkgaaXLemjbiZBoMVMXPC",
  "key1": "4ZyTGuTEnnXfRJNRn4G3h4NoTwnfo4XFCo3ZdZx4TTKwbXC2JtVaavKSxB5wks3mZKBNyNuYZXpDoW8PBGWpRVKy",
  "key2": "5uC1WXt6SCtGewggEQe24o5Tix8zSUPXhN1WJ4JAcjj8VXJkSbuHvWeHzLx7Hb9tK4pBwpMUsVWArgj4UvsTcjDX",
  "key3": "2tgsJGggnAcboZfyHvhUcN1omGTXhps2b5ck2aXgUMFbmtz8vsjNUqAEL3ijiA4qi3PWbVLrpkFSBmBRoF3XttKY",
  "key4": "2BXaHnkSYtBgwMQbG41ka895PW3wiVqMVKQVcyqHHx33369YaMXyb2ftaozmSqLzsGzkjmz327hRsEfD5Ss3Tz2x",
  "key5": "KVB8NLdhoYN93oD45Dx7FnxwMNrqkr1YbkCuuLJcsFfBeFJa6D1sKt3szVH9KftWm3TwMXJgCtis9zQsZeBBQEL",
  "key6": "jEQ9sCBnHakSL3HRnErRoNYNv7zjF7Lon7fgN3wqqUFc7ocZHBe6j5KdfWf3ZJBrG7yeQ5WGPtAHFWqwSkhYXKD",
  "key7": "3x7wUJyaB3YfndDPqMKi2qekokLNYYTDwEzRZmKFk7jdTMSmEfzY4sjBEoDvHrm1GAeq64NwDiBHaRFd3kp9Joyw",
  "key8": "MmgHWH6nqisXC4p4A4TicbuwduYw61GDN8cE5LghDWffSCKBaqtdoad77USEyfR22MotaZgJYDt2G8E9B1XK5cQ",
  "key9": "2TfHBgof4WPErPQxMeqCDBPtp1df7jSuK88BUg8JDpVvfUsZJryzbCtoot436qxeBDmKaibZz8AT2xjvNXmQhGyv",
  "key10": "3t1dyWsQjgS1tp3YVfv2po4aD3FsWBCrsUjNuEtSa2zCuehKYUmbPhFMFNouYzLnmcs9Gvc3SuSaxHveTMPesYpQ",
  "key11": "5WhrRsDQr7N6AhsMjAFRzgreYxQkAjUuM4XKipfo14d5WpbT1EddQ1AfHn5fxeQH7h3j2WZQsyGs5j8xWsFGpVLJ",
  "key12": "3kMH1eigMvgkjtTwRafwHz9sxx6PKybYdCs44D1sWNQ5VwdxRKi58axh3yoa8iH7sWSPv4L97guAFZAeA944zE2Y",
  "key13": "4iGiutTj6D3SLhtqNNubPLpp487cURVT1VKfiLfw4E8BLdfkPqLanumT2yQF5z8f5Q4D625JNoaxK4TBERcKEMC4",
  "key14": "5t7iVa5ttWHt5t7Kb2H76umr9X2n4zUdF1jvPGtDKn3ZcLjxAm4AsijWBannATRuR7F4hzekWaR7dNaLUVJmkLwG",
  "key15": "4bUCvpb1nCnL3yj2x8aRGaXESJKvYePnkRUPLLDktE92JEU68z8FeYvRU7zpSiNA1d349k4YCzJSAGfcEHStUHpx",
  "key16": "4xS8dv3BQKeyRFPTdJYCChtEVV9ZrHfmnhKdS5dUDxitzMeunbvL5cWTxapVosUWWAAxiYBFCgP7EdRZ9UGHorQ1",
  "key17": "4AChYMSzxppohyo74hAcSR8AguNsxNKeLDExMyJd12AzU9mspDrJnjQsGvdpjBhAxUeKAt5P46ABGzivQwEKxpeP",
  "key18": "3ftXrmzp4MFuTS8Kaw6QfgzsmjvFNMdPCt7hrwjQ4MKn76iViwS5qqGDzZAqCX9YLtspqEe7L94cQciY63J1Ht5c",
  "key19": "uT93r49hNKRLPE4RqNg6AcK4ryWE4bzR9YDCHaZ37mCMxV15HCAjZLUZeVe4gQGCQej1LvcVysLFQdW3PrFXmNz",
  "key20": "3GowFNwbJUYdL8AbDHB6MwfrgvZh8ZLtGg8Zb8sMGEksGV83AAt8fBdZxNSmQqqnp23hcLvaLPSqoxYHc8kHrAyc",
  "key21": "3mGCHAq4yTnW7cUjLWqNgFqU7yUcwt2eCYnAk3kSedrFk3fReBNH81r3TLcD1itqjJBbNhsfC8QTUocoioD6avR6",
  "key22": "4mXozCrysANWY1duAjxfNLf45TrZz3cHsue81b1dTmddWGuXtgUW1idUx77DQeKaKYhk7gZFBfAnK4P3pqCCzn1a",
  "key23": "apgjxiB7Cmh43qCYJZAU5JyhGbKRTF7E1kgw8bfKgmeknQN9fLULZCjjUkhyKASa8voQ7tYmeguq9cF4WyTFz5e",
  "key24": "3XRCh55BTAKKtervUeXbP3LBMW1sKMJEm7nWyAXiSbQJFvDuNNjHFy2EywJZmHEmYvrhR5omQnXBg5GghZUpP9zP",
  "key25": "2viJt4XgB3md3EkdcYJiCCMTsJcV8Y4GkepoGQj9EabsWBMp4onkpxrHVqFeyqJeEwvqAVkWaNjZ9ZWaw1WfjLav",
  "key26": "oFXEKrsCp2vS1eZUY7uAgbpjxCWGEbZzK9WYbpmBKw5d2wg4HPAJAjnmqLtNdNAUk5p1PNPDdzXZXRrtKXEKhS4",
  "key27": "4w44Qy28v1ZaGdoVVq64Cp9m949Vbrm25Avjoar2cYqBnzzVdurvcs5pBgbpRB3fuHsgtzNkXgB7xUQhBq5bmQqR",
  "key28": "4W5vSSF1cNvVz21sAPm1CL5hwM6eQyf4RjtBMh3S4zpgVEuRQgn3UWaZytotVDRq38RVUMmxbjqLGrtuz6dizYdp",
  "key29": "inLDnFeJxCxPed1JezyknR4jpkfdjckEDBYZNRBvXKMr5hmjBmKos8va4MHGZAEonMcqRoE986hx1ogadrYdA1s",
  "key30": "4GfiDuMnME8BhLBVakaruciGqesuyLDiUHAgzDKaGbq18V72tWwsFJtyXUjaVV4MPSwzHMZ44X3qZWxiTgsWoGgR",
  "key31": "L4Ze8PSuaTMkXG3W5oJw2oWqHudWXX98WmhAqM1f9jzQmBPHSDBCsPzbMrDQqKtoLxGEUyoG2HX39qP8LSbyanC",
  "key32": "3uamCpdMFFfw8ALATJsTJ8aUtNN9ckprc9PBoATHg8UPaUCPEYLsFLZxRL35TB9ecg2KLniqH9AZW2Ss33veVvtz",
  "key33": "2XbEUhZnT1mrBaFwtW3dByFGdfWygusiEpCvwL13zScBAyKFg2CnoTGbzFk2ppdSZatNn96PUskBoroLSShWKaBt",
  "key34": "4drddr7ri2edwUZy5sq5ngSka6QjNCreQesccjz6bFMV7uZB1sB2Xu9WeFPnTL4puqt8er1TaXRBbyA1B3wbUndA",
  "key35": "c5SF6NBdqTY7eRMDxmtGZCgQXQWACKnDetHPitRg87ufw7axFpuYJKEEoRWMtW1wd11suWPF4h6n5UEamDBsT6q",
  "key36": "2U56RuPfFYY8eTjCcNZcEYepgikCbaYYRegZ1fC9Bg3qu3KnT7KguggpYHTso79isUbECW76NXYrqMH5bmvBuu1W",
  "key37": "5isqqTCAV5tCqZEbjB2K8KRsb134WXqcQ1SiVcGX7ERSM2GtpPgvVR7SoW4bLJKbcSNtKkXNLHbYBTnSUtZrQkA3",
  "key38": "4N9a5xwv5xMDaiWF72kAPrp237byxuWhJs4jYJxSKeS2RpA7J3NxYQkcwZ25ordeaRv2eMfVkHyDr6N461X4BsLr",
  "key39": "3q3ew9XYYMXsJpSyQTBGanozP2WaMqbZqBTzqRuLZHJeuMPKGiXV7oRnFD9Sxa8WGLvQTd5bxhketcn4b8RZFTXz",
  "key40": "4db3NeAEt2EW7FThzJszwNC93pR4Gm8CB8RPMbsAJCgtjBrwAeuS6p7QaysSuroMkGnmoRCyobsgF7nSafyrSHjh",
  "key41": "4RU7BJpen44xxPtsfAAK6hxJeBS3xq6weVbJptDKMpKsthHghFChpugDtbbx65Hyx5TyDvtQ4W8TkDqBSgAj7F22",
  "key42": "5RNZNT4WgdRzJKNY6epopnkBJjSUxJyuYwoXTKXPF1dBETnvY1KczUwBbsgkLxGyGQxxDKzogo9PSkWmU6yVVQJP",
  "key43": "3e5bJ5WrwkPgWAZJKzUKrNkNA5MqA8vJSXpATvSeD9C6G27wjx7YDbH7A41BszFtCnirZ86hqhMV9PTqezYQ2hcG",
  "key44": "2jXWYKuyAhD31ptLXMGET1L86GYdiBj66Waq3gxS1YcA2aCnq5tnxq8CK1RcgTKCwrwLvcFraQGbmLqee6gPT8WY",
  "key45": "Pyk8XrDHNR4RLo6vQA6qVgassNKNnGPAmYdbZ8cVDpy2ngtNuEAMbCmy2ZeHLGMTEPpgTok3cH3gXA6eEACsEXg",
  "key46": "63tR2bkaEukbZa5JGzrWMs6Ac5TGVNXJ4Ax1J4VPpAhYH5RCVevUPCpMUb7iDPpXoPCMnLZEBXPSP3LK8xagsyC8",
  "key47": "2BCBP4hmP3oq57db1V3awhHotyYbLTXC5fhctrTuGRuHPAVp1Y9Lji8gAWXH5GoDenQyZMv15jaafB3snNWamu8e"
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
