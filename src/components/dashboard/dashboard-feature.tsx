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
    "3Ww314a5VTdqz9xYAJD28AhfxctYc2ViarHjACJNyj1mB2DzAHdRLdcpJK8VgA5qYWZhGtvY5RoWWxuA9giv13VA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8V8g7D7A4xhijg5hLYzK4YaFr3fbv4f4Sfh8Rz4hszWA37HpK9qa7Df9DYAdQ3K4GYytvcWppCFXYT8LcwXM5vj",
  "key1": "EQm7pDrPTujTYipP7xzfBkhjrv43pWfps478iQSz2H5CA5Ee6TnnkuJG82L51SmJfpgJhrJ6xzi9PF34JAXyLG6",
  "key2": "5DwopjWYN9Av3mspcuSyptwwWPt64emyDZQZ98Vjqc6zjdiHdvSWut5WjFebtmUebzXbDBgcXCaPczAaqVWfqWNW",
  "key3": "3PtKWtWAgR6DUzM2EYTMrm4n2MQbc16zN3czGxGGb7u5jrehLxsc5TNzo2exooon48jbCMQ63BUar9MGKXEUiRom",
  "key4": "zkVTxK3XG7TKmwXoqQsj1Cf2GEomasiN2RZy9KJKzMparMRvzHbK4TNGqe9juuoye5f2bJzPGfSxU6JRQgLz2bY",
  "key5": "4Ytyoqjfz2RH5NqLGoiSakV2cNsNVuU53tApcD9TQwcg5HsUQ73hyi5vPMSmTcUbPWaKokL83KBVrtxzxK1eYY4B",
  "key6": "3VQkh5D32JRA7JJNL6STfrSgRjFR3SyWVVcKDBRXbZdq8X7q122c2HZp7zSCqbDaJYuav6B1L9JVeoYBHedqxeK4",
  "key7": "5ycZ5jkv2jCjTmjVUvaZ42GHTHYaBPf4aDftPK242ftnYZ3mcpPCrfwAVfpH6XEiZV9WtuzaUj72RsMNsC87B8ao",
  "key8": "2XiAPiExSabF7u2JaEighgcACDt42t5zeokmGfz3pz622apSgJFBMtAH2STvzooB7fxbV6HvnNhmKm9a8kMms9if",
  "key9": "5Y74i6WBKrurJZ6vzemTWoTVzdePDvgjLGsmwjkzwzi5baqFyycsPGHQBQ31wtaDBHtt49yJwzTTGuT3NrsPkJZz",
  "key10": "3nhcyk1hQW7FbzvejjDJ5gx8ZrjfXGmfWxtuPhQfhDwE6n2pF9opsbKJqvvkhS1E1Tiezr7hQH2aFmGuhV4LB8ac",
  "key11": "28t9tK1XhSbLexLZjAgJ5ertMRALiqzJsNLhNVWBWYPF89R4UTG2V1QFXVG8eMg823Pht1p2o2tisCe7b9jBQw58",
  "key12": "63qGtsF4vXdvmzJNkwAhfyg5886CQHdbi5YxJR6hPPMu2VamythmprCB43t8BB4FMhVooAXD8Ga1dSWoC2B73NXF",
  "key13": "4uCnHqbNs18uifU5tARp4psHJ8fgGeMj8L8wMYuL24hwkSbDx7iPQM94d1qDr1LiPdXuJMj1etUbxWM7Cx12KL6r",
  "key14": "2jNhQWi9wezjZuYMyiNege3gMmCcbjDZBKMFUD6KHSaQ56UzbGR9dc91yMxMzBjRdo3i4usNESbN536gz6P9XdXC",
  "key15": "SVjK4e5Le7WVbvRq3aBn3i5P4qBEvhcr8bxdBivvN57Uo52a9FzHKTiECszQho935o89WPuLj1mZfkjzRkaFEC1",
  "key16": "3ANqepjaKpKagJhQkTVWzoTeDqQcccNpBpMuQ2WHk8XyHyVXNmi4pzma5xh2pMU9xwWPjzsyAFG49yTWVknC5B7D",
  "key17": "5SUE2ekWMym3gLHhtyt7GjY6C41RuvFP7W67hGqGDDF8jzL9xbR3xgaqsbU4mbVkc74GroccBzSkY44uhL13azAc",
  "key18": "bsgSQW35xkipK2agwbdvFbgbzBZrgT2zoDYNK4LmXjij98K5nj27LEY1MXRQ7MdSy7aLpgLG2apjqHywHt7AdnA",
  "key19": "3yr54bcEqbp2f5agFNYiQqBGk87vpRQApCDu549DbtuoE3VKaTCH4SbVyHpiSWLvFKrXRDGuqRcRHWoP1Z85GH6T",
  "key20": "46kyFM35rVySx7LvDakZWHA48AWPfqghVmPyVZKvTtaVN7yhQDrwbsEkBiTbysUAiLkbMPQ19XMm9Jr79QZUNB2k",
  "key21": "21diZkMgoQaJZqjm3xNCFekPJudVojzvP7XTe7r3dXmcwuK4ZJa1KdvVXL2aMkk1twCesFKR7SAy16YWWMpKPgAx",
  "key22": "3er7egKcCBAbEAVv2WVtazfBVRZsRtnuMK95ZKuDhuzjGpYgzhs77HMtn3zvTKoHPtRDPHnP1wKqffbWqFP145tu",
  "key23": "5nrXiwCAtYosUv4wRbcidgjsovCLeonyWdzpZkJm21i2FoDsAtjHx1n1GU5w4ES1oe3gKvhTFEt5bij1Q9nKK9XP",
  "key24": "4cFtU4hWGb2yMsG85UsoweNNN4JQ772uo4WVzKpLszbSLkCvZp9kUtJDXRaifiZi4YKMc52FhEhMYcSNwWoLzHvS",
  "key25": "5ft642zj6GeExfkFmDgfDNVuWSh7AfZX1ZCvWuijgYsfzfAi4Wsh8ftysBenUSM3aazyyUKdYFuDaJuGxsBLfSGM",
  "key26": "5TDcRjaDPxgSEr92dz4LGRHWw9G28d591oKAZzx4RYXEyfWGJd9WGJHy9rwTnEcMhhP5q3pSTZsn8MKSWpuvsrY4"
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
