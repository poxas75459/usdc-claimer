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
    "2kYo4UZkWSQjMYvR1iKiLaRcgte5SrSnfcLUCWX89qenXEMoMNJ1R59Ue5P6tYQnQSMBCYaL6iZNFJebFWr8A5YP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wg3VS78Ackorf7oaPrynxKoqbCsDfLKkUSWDrhFCmeuE54V4xwXAMhW4DqyTQpCxKEDmcN4McszeShDgzeoAwZT",
  "key1": "3xtnC8xn6Qz9mS9MSEUq9ZN4JUoHpdk3BVLjkqC5aLaxsuMLvZvnLahTcAyubCoLbWBHGdjcnPmp7kru3QgqLnVn",
  "key2": "2iq3iMCF7coKiWwZkQVHheNGdMo6HkfowfPQR5pNvwCqnr7itCF9WuccA5bHQieX52fEBxrpzbYKzyAExFxj928q",
  "key3": "5HCLwd6SThe4ywfQ9Zo8ibWnnt9JXCiqwSYews9Ds3e15Uwm2McFEE8sK6yR1jpr8jeA7866dqe3Rh1oYzZQr9U",
  "key4": "62PmSZKLtdKRhotkytJkyJEVy3j5fttuZ61YFZjpQg2Q5usEx7XbYQwPm3Zpdxx1TH6ziWxu3j19BJqrKmJZvBNC",
  "key5": "5Kr8tuoTQtjLuzeimV8Y4QTLs4yGasoUmeCVDb8pbQQsNB9EnA5WLVUag6baVPxXiqYemp43wwm2EmJGSBJ1omKX",
  "key6": "MiHoxaX4ctGJZYCHfVYkeipcnkP7oy5t77ZtQuhy6yksAC2oUcQPLPyNdk2C1Coy4NH3VNg3EeHpZedwNVFG6Uk",
  "key7": "3q8b5u8zqxKhfA6A8XyLHraXC1YVUEwro1gK94cPNt9TnU4jNVgLyqTWpVodsp7f42MKyskL1yvSH2fNfgojyww5",
  "key8": "3NqYVGaMfdjiy8NtXA52fFArXjw16peHeUSZpqSfedbzFUwxEKgfFrnXw8bkjXN8RhR3p9E4Y1qudtv3E2W5Aa3z",
  "key9": "5xwJtL7ECnkBc3U8EeNWZNa1Gx1kUvRyvVJQysscvBkShuW8824t4SXSH3KxM1gr615DGFThhJLfyabpiBpLghM9",
  "key10": "2FKFEk3RUK5RE88hHpx7WuqNDg4Ff1BrXY5WvpT5wgk4hnxW8BzCU1os6jJ2wVqWeCaFQRYYDD6X3D9SGiWna63Q",
  "key11": "6vBdNRdQwtYQtihH1exbYZWMvQoVHsSVDf4Sg6hDxCt59fym9w7s7pNx1xiDg27cVRbo6zeVToCXqRPwNHE4RbV",
  "key12": "GyVf2E5d3hac8w2PgLWN2epKDkhjL9S6PJhjbyH7TTgwTgKoMAj9cwnvVegUMDAc9xkuZR2usPR8rpUWsWij6SK",
  "key13": "uw4Dt7bnh4xDM5VNFs6ghy924thnTumTUUV1pbrRxpxQ8hWunDJSfRteYcP2H7ZCtmtQvjQPrdYcccg8WYorzd4",
  "key14": "5f3jb9Sp9HTH5RgZxdJDWUJheN83RKaiuRYrTvd4ZHjRk1VQGd8p8mDRAK4GtfshY7icUaZctk2cFotcqwdcHKxx",
  "key15": "5oQGNL3L2Qp2BSwcboRRuAeVdNd2GofMHpodCeXcFxTbRQft8aTvvqQSSv9gcJZ6Sg41Npi6G3w4HGbDJYX3fcJo",
  "key16": "32dv2vdAPajPi7iwg747xhuRhgTZCNcxTj6rRgTGSLFToZaNL782oHfqVWLKSiGy3si4eMdrndoKmpQZ2t47cbfX",
  "key17": "HhbFJ2S2VCG5xhGGrv35FAGtEL235ohMVeporMpuKmbWADRju7XBn2KPn2BwwBG8dpdNMQ2kWtKTcadguPxyiJV",
  "key18": "5bpHxkhwmpg98KtpgG8gKUeRUAH8LLzSEemjnjmfDXawEo68WfZEd3wcdfPGY4AM1a78Tp9zWHQoAFtvYZBxFBpK",
  "key19": "4Dq4ix7uvbPvEneQmqVuiUpuVZ6ELDfAxRHYevSsJFD29HmfL9Y7CpsJ5m4aRLimb8ynFe6n1WWv9gjin7WfPWM8",
  "key20": "2LN4ZNM43GSdwJghHnyY87pL8dWuj74xAv14cXdtdGM7SGewsJzoEJRmZRjBQBmwvVSHuCvNhzCQE5NNNpmUjsMV",
  "key21": "464wWdekNAK2zUvVYEzNWpjR653p2n8fZUERKQzKmAZbYo65SK67DaApnLNGTnJ3Ngui9mgC1XLwwrMdeocMFAbN",
  "key22": "2ixkC68V6hRLdFbcjdeXaP63hz6qUEChdqNqVRRmdtFNAmSh9FikFXpVjK2mEDT6xL88SHqGEN3ah7adaqJ4Yge9",
  "key23": "2wxmHgk2f5H1nWh8q2DQJj9fpCR1m4pz6b5vbDKp5zHXcBkcpGRvHpcHydjRSFGdo4bBhukYdpWhZ8BsDDJUpp1a",
  "key24": "4WGprSwvQLZAGRoUMACi8CVbDUiSqwUBXXF91bDusj7Yk9zpiUnihEZxV1AVFP8yMwERsZaf4BHvokkvXTSGkT1m",
  "key25": "4HeeNFyxhoQvZvS4b4kWhBZX14Vs7mPgqdGtQGYK3GvJLfRgjsYCiKXsAi7JZXH3VzGuAUt6WaZqZnrHca25C4uC",
  "key26": "2KgdV2RKYfubNGQWtUP9XqUzE1aW4yJdgdPsJP75z5kkdzXzwUU5KQ38duQkjkBo3pYd7m35KC5aZ3gTycCYfmce",
  "key27": "3ARxCeppZmZRNphh6HQFKM1978oNcXt4XRU5BtcLs8yJLDKhKhpT9sr61kqFBXJoSska9x7v9Jpqjwdy1De5MAWY",
  "key28": "66kNfUu4d1QpNn1Y27sAv4nJyrDpBUAvJ9N77k6tX7ShZAZGSQx22kPCJtoSZ5amDVY4Cmmaza6HRoZBJN6mv5Va",
  "key29": "tYmmHXJmQdeydsykM5HaAi57C24qUKBVRXnMg4RLNXgFfW5bVRRV2ukdKFsbP4JyitwAc6hV5BnbecBeBgTemTS",
  "key30": "2QgcdpD2wpuo9qoGTiS73SmKA6xNyUf1XUEv97Uu1UdXQPEuq583sradCNqNSFPZPS4oyARZFa96vEUCHDgzDKqE",
  "key31": "ZGeuunXdGK16suEEnrGd6Qw6xpXUBAvfkhYRuBcAZjjyA7oSBxZrSXsvNJGXV89QA6tSRhFgqnsux74BqB8E4fV",
  "key32": "2kveeAXJwQwtkK6tsv95YcLL1dSfpdGdHbGHLMqQESCS9ZPD3sjKJcGb64B7XpBR7yysmbWqPBnQezQ8eR57V2dg",
  "key33": "5G9zYY23wGF1wRn5FtBZmA4xPhDtmnKXf1pb2CXhH3qivzwGptFSnPFtTgzaagLxmEPmxXug9R4ofmVjAVUdPkwv",
  "key34": "2NN1fmxYPZMn2xq3aXjfainDeXsemsDe5XaGGfqDTmRqDbxuMCeU4CG8qqa8xwS9hf3XC73urfEh6JdUcX9SYjyN"
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
