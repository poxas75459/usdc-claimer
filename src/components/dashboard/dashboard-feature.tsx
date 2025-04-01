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
    "54jiUBBNRTa5N4AFtbtc2Uc8Cw9caHyWioZLXg4cyiYDmwCfxeFxdow18o9yrStiReRDejkZ4XDf36K3G1Def1kR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dG3yo7RsiuviZEzCT4bCatJBAwa7AAHyMVEG2ipCjWUcbXoQ1oNgqBw8a9QrvSw3aQPRXBh3T8KmijxdHyi72JN",
  "key1": "5EPHheVgP1gGtbBKZjkqhTvyYni4cfwJDQt1ggEZVL7gmRb6rCiEvpDxpM5QPXvgNh4QyoAg3EybMURVbsKAQosZ",
  "key2": "54ghXdMsYiK8NRwPVCotmszeVzrR8JabM9wUterXtpLC2rmTnTMYu248k76hcQjGsA1nqSVwTY9rn92x2TMt4cVP",
  "key3": "4nAh36tZc39MfQv6oLG63VhaV6niYFWnVFcf5fjF34BAiBwL9Rc5R8rccD916svWtKJEMzj2oATPPWiy7QdPiw9w",
  "key4": "3NPwXp7xdabHkFAUjM7fq7nZizes2ySiZEMpJvc7WoR9y7gpvuRk8NngGr8oV5GuSKT59phhcH4MyNozMNiPveWq",
  "key5": "3chBmAZkvB3VUKRYkuVduatvjQsn5ChV5uAomVXFYWqcFTdAmxzkY1aQn1Ttfow4RNKHx6nbmWKs8FV7uXQReJic",
  "key6": "5CLByTE6rEPzCskqshjDiDjSFPY9PZVF5NKkr2HLsyGDv8Tmqw7R6Uysxtoha5KDistfmaY9svuLXV3LH2oM9bQ2",
  "key7": "51cF4U8cbjhdDr57ithx7nYdUXWCuGsauztxfbQRpPd1DboyWJtjBWEk9u3usNRzQdNXBDWy5a78ucBvxqygRzec",
  "key8": "5SgwFtvW5yuqAPg9omcSjpcRLonDsB9WwLk41VtQFcjSfj9nJSZREQmAqryEsdgNHuhSZjApuwgLBhnx74KjwxZ1",
  "key9": "3BLVMcZL4DZtVwM5PN2bYXjQBLRBQL3LHY9PfznqFsvaoDCA383pfVGXwQPEYGykBREG6iUgjLgdrrkAYYe9ad7p",
  "key10": "53mbvdCqVbGsE6MsNNQPpvpjpRkLwcQuaG8bfQUWHSKJTQbRgZqgm9y4azao4rAx68DQijCCCtTqSUEJ7exGmxe",
  "key11": "5DVTGn53xpXM5Nc62PcfZdsmQrU9iJVbF5R19qnd7CtDz33ggJY4rZytpdUwLaHNg5jfScERUWAQ9zTN3YDq6c9a",
  "key12": "3qkV1WhEabeZJv3SxJgPcjJxMo3L66KJx1tP55bjFSEXUF4Hk47Tb2ijQoxHwiJTCytpbYrAGnN3sB2WdNcAm3pA",
  "key13": "VS7GjXuLrsx67pEFhwfnx93WNSk6sy7cbyH4njZt1hdJu7Xguox6nhwFs92R5XXyLZj34miHLYcSRJ9XQp1ykNc",
  "key14": "4fDFaLLizuNDACaqr5oL3NodJmuEGKE7CCWvAz9r8gKp2QxDmmAuK8J5s4X72ToghJmyMN3Nj6N1VfuCnRXbrne6",
  "key15": "386zybYiKrPxvhgsBbajTs2AFR72VUoq4qtqoszufVtVKZsQhn4utTNEVzdDAA5txUZG1Z2iYeyWANiu2LGXxWL3",
  "key16": "3yKWPyfXAp29QiymQEeGCSQLLQzt27iJ7uxWNverepxkrqM6UCBosuvthqbMGgBMmvm4a2eihKMTVukurSJASEX1",
  "key17": "2YovDNFHJdNG9y7fV4Vha21rAZ8WgYXZh9YwjWmhP59mAEBu8Vqj1YZeGtFimMnkipP2CDqMsJyVfitHMmHws6uG",
  "key18": "3RaYyzSw2ZhZW4bX7KTu8fVZzWmMt4fuEtpQ1zpZinMR2aubCptb72Kd7mJzweubGYZJSB9gQ28aaiViiPeowYqg",
  "key19": "32b3ShnX9eyqKyZPjEBiiHMgrFzXLWNvycsJmcRmuJhG4ga4U6Bmk4ncPx7iF3Z4V9cKuQqFJqHdLDzjSB7LJaS8",
  "key20": "4sB5RKJxeNqDHb6vmCRLSz8WtpJrLfJ1MA5Kv2KdxbADGGgqdzXkYb6ZwYfHpDviDUDQzcwUjjokwctgRjTJ9Rs6",
  "key21": "21xCu3hom9EpGNgeQkCcjw8ARfc91v5ZzY9VNXpsChd3EDVgUnfHPhoQK7tfGjyJwC3SBP4K1fiubbAmyaDys9Hn",
  "key22": "5ZP1WXiEKFksXEe5xvU6yeHUSo9y56vCZDj87sqrdRzTr31zgjc45c7Vc9w7APxtPUPyLc2kjqbHW8vWBT6FwBdS",
  "key23": "3pTwKRYehGH2dcRT7sZ5pNzkeHmMLrgEWMwQLF8HFG5WHhPDM2FCwV9h3ZJoF7jusViTNjQQ7LVRnsc8tkAB6Xed",
  "key24": "4xcrowWscdaVZGP4PAB4xsHRyw8iTbh4h1ynvnT8HzbkF5ZhQHdbTq5NCosnpuKKZzECAnap9iN7JPoih3JzmPeX",
  "key25": "2mB5JffyzXHwScoJPVUoVaF8bHYKLx3rWb78VFyrFKs9YLBJZhywpPQ2u8Mmw4a34SH4q8p5Z1Bb4oDZwAR1dRYt",
  "key26": "2USJ3UMFgqgDLExcmDopMBoJujLdg2N83RRFR285p1wf5PjSLGSRzwt2McxEzA5uRLvDYiANGTmbSedvAirtyeYD",
  "key27": "5ZVCibhG6VBCJDQTxhhxwdzJiwhjeaRDCq8wkpU9XMwuC8SnFXCD1crWtxtV6P22ap8PKq7j87UsYSizorS8gnLn",
  "key28": "2NNKP5KpAads8NcU3toUprDEZEAzK8nnZ2QYMMFzeDtF89889Q7qZkStjurW68pwTmwwNeTn9euv7Ba5F2vgZbGH",
  "key29": "52Z89J9pZ3ikFzKnCEEvYnqJPeVoDeoahX3Y6cWaM5kztubg9UZBuhbrpbMEvFG2a5apuiuRbHn7K3C6tNDvZ2qm",
  "key30": "3ijFScS42CW4RTBHuPoXUbV7w4qRDgE7aNYLXcCoo9MqTimdJnHrHNbmPKBhxTQenU3bwAFoYmVVhRGDhLPDyGpp",
  "key31": "3G1iRmMgPmeqyhDxSzCkdstNPZuekoWWUecXtPWCz5H8D8NWvJK4UBart2pgDJdyYFK1KequLJKwyAfsXsjH3aXL"
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
