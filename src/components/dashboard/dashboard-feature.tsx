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
    "3eymQKbpLPpSi6bc8hoF9esCaw2fcDHwjWi8c4C3aPonCVD3JfsABqBTLBdW1ZzrNjJVsvakWJHeHkvK19UNjGfT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f78kEPTfwHsDiC6DGG6ZxK92vpf76up3wey9UQAnTaGQeVQHdu4EDbhMVVbQdTetqTgaostomMwHwntPNEuNAtM",
  "key1": "3drBerPqWhcr74wRTuX8iZdBep1HjpUpW1fnm1t8B16uSSSFzaCLWiuQQznwU2WUxySeZYjkMJerriiLXmCqQHBe",
  "key2": "596kzTnSJ5w4GzUfFAyBZjw3eAQAiAXu2wt6YK7fCBcdJjXnajAsGBJzQzvt6Nfkq6BBDnVv1E69iBT2A58zEDYD",
  "key3": "5w2wwn2xkA2a1NMiCnyP6ArcUnjvKmrpaQrdN8vm63ZS3Y1UwpMEqV94ZtTRFCvgDFMGPKqLCGUfdXvc4ikaNMtc",
  "key4": "2sFC7Yffmxx8oMCTXTyaKfy49hUf95K8a823DSuCPDtVFzsPjhL8bcUW2qgdEifLC2t5kZXUk551aGNyfx1xzsAz",
  "key5": "5RTjcRgJVE3Bg5azwbL96CT3RHKQdoCqc71rLEmE79RBadXwKRdiq8K5Ng42AyPBnrWviWsbXVCytMsDye6LSEUo",
  "key6": "3xPrv4CRac6c86n4FCMjvo58sYFCuyvkwQrTzw8pkrpiikAuKoNCuQddzzkarxGUzta7THtZGj3gwpapd9qVb8CN",
  "key7": "4Jtv5V6ryt81HjDgn57MBg462dHz2VNvYuAYBcnbGca9BgkGPWwF97FTBXQZdnbAG4eA1Qek8sVgyCPGxe4WyxHa",
  "key8": "4jhwYNMZceA3FrDkrvsSBt3sykdhT6k98JY32Sdx3ZddMomUEKsfuEmcCzcS3BJCfkK8nnGJYjcK5zow9yQQtXey",
  "key9": "3H5SNMfngzz7mCaAHPjCJh6i8DndXiS25WmVJe4JmWeHG7FxctakHs2MCE5X4rrhj219SYKNZ9d6tLuS5tw29anP",
  "key10": "5TCber1aciNsjuaMQKQ5YLtwXvRkaG6sE1uh7JNHfnTDWdR8N3B33cvdkq5YASwo1yRKxAg1JCHHwYA6infkvDiM",
  "key11": "5BiWDokTyAqQvDfrUadUpGUmizDqb1yUu3Vs7HswuTjLSSC2MWfoLT55Evg2JHJoNebyfkSRWD6QBkMPKtZKWeB8",
  "key12": "2ZHQSmEn5k9GchhkyDPXuiBd2iF5Lh4KacZxfoAxfhMMPt39gPZPVYYP6BpYFUKM3iVePBWoQkKPSMUpzvtsF9ES",
  "key13": "5VuDFiFPTWiuDMPKem31j6U62WKdX31RVkwxh3scFgrMCD4zv2UNodBpruPsSGdKC6Kn3utKSeuQjLQKuKSMqN44",
  "key14": "5F3AdUi92s3PFkKqAf1Ydn88uAES7XTheQZp2er4yBPFraUG39UHEcPwtBbSgpZLAvcnWZWR1Y9CYYfnZZARMN1a",
  "key15": "4AKvpmiQ4JJwWPA9CxUyRdpZj5xNe3TECLgS2tRcG8bN7BG71c6wEzFcKhsVtxf1Zsry1izDdFduUHV3GwpkTpQP",
  "key16": "t49AD2NztCogZzDEDjcwDfpqYu8pDU8oa4QSECMvQoYijgsw9DtXRnvLZUWsACaRAxDVd6ExiQ7joFdhWbcme4z",
  "key17": "zYNeVSKYEgWsCMtZP8Dwd9ridHaodSdxHVuh93YwKuHwoF8aL1Wa14uXNPyNEDyS4giN5Z2dC9wQ3kFTGmYFJRW",
  "key18": "HVq3rizHrtr2fUKPWLCKa72doBMuSvwdyznw745jaPABoGvLFT9u7R2hRQFtZSL24w2H4VmDRxXDAAJHGfq7btG",
  "key19": "4D8pG1UX5gBiVjNkafMh25UV3qpvDCdB7LLw7Bzk6JpgpAQiFKJXDJ1g2zd7J8jNT76oNUrHTEL2MKBZz8CnJ6SV",
  "key20": "4a547Bb4m6KU5fYVBCCuBA75EgLqmtNkL1QUijP6iS9Hwf27R75enj2tuMGu3CNLn5gpeKahdpAunWeigDJo1y5B",
  "key21": "39jdnbRAwV9zu2JtzCzc4RVynZa6dSTy1Yu4Rk2JqNJionLLSAZWcSnuKZbbXDiV8g9KrYDDiEBYgo3LddDiQ2i7",
  "key22": "2R7GvPCpLb8GzpWkTuN5WotyQzTMpYRi25CEBusb65EJKLbAJQgHnK9EYdYp6ZevfNXcnhTtCJkzdYD9fUHTzRSS",
  "key23": "4MmmHRabX7WC9aKwNDsesM3A7ZMFcoxUBej9u2SYFJiebhk7YcnHCGYmq39j1tLNckstDFWfWX6VNkMUNcWMuEGi",
  "key24": "5akXXAVj66wGUdFTEyvskY61fHjDDyMeSbYSH2bhwqJNv28uV6A8JsuBkYCYPf7rNNfiAvf3UMpTszsrHURa8dkJ",
  "key25": "2iiScpzhB1exh15oDSuiXBG6o5MNi1KHERgQV8ffBmQSjtShY7gjYoui7QCY5BrqwEeLbi8PGALdEaPUUwc1s5Ug",
  "key26": "3J4g1cx2pTKxSHJZXdCFD2itWcohrc6ciEcNE8ybjJ4VJc3y6GFonHAdu5NHjMdddfTEmu8PgNWXpbZJJ5SShEFH",
  "key27": "5bLFABmK1zVZhRGEph14Zc1zediaaX67tYMgfF2csnFZ6M1LhvCXK3HvA1QGBa7MMdFL2WRkVokprpLadRPMvsWf"
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
