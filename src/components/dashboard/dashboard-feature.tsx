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
    "3YQCiVTd2SRyw4ABn6qo1BbAV7SPcHQD93ma5M4T3TphvWccsBGiWfSvmg9EHgsH98nXDPu38fzNzoLuWM2aEtci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42vJe9jcUPZFsNBygx1pevaG4F5CEYaKnrnYcgswmYxVL1nJN215yH2YJYGvycJxC72t6qYJKzqAJAwXZiQArara",
  "key1": "Xiv1zqG9CkAdphUFZEMPnEu3jrpnmJR4aMPUsUR9J7Yo3ESpeJxPprCkFFM9NBCafsLV3cmfwfn15w3GdMnsXYG",
  "key2": "55R26Wx1nM6Bmedu9vKNXE71zokGBtfESH5ANvsbc92MD3t75jXMeVKjwE3S1BL9isfMPSdUX2FZsUDubQgzqkm3",
  "key3": "3XdXxyfqhECRxKEhrQFrDShh1pvnh2tuAMZK23UwZ6XvyUofUVMJ6WDT28b673a3e8PfieUs8a2DD23o1C15Ftho",
  "key4": "5bwMUm8QKDpNGoXjczv3XPZjp6GA7urz4rGruVLnhM5p7cczBgvdJMSS8KXYbBSBDMdaCQM18RLCdYe7hjcuTuz1",
  "key5": "3jjFv7mdR89cTXFAFc8ytx3nYwEC8TanVya2gvWVQDXiGpLgtxPrXkLwUzmsK2aGoxvdVW8E5fuEaQ6Db22yET4k",
  "key6": "2a3EhBF53ZHHvtgrjcghQ33pEzAoPbsEz3fAgjQNyoHoQQBSritNBY1HZb6nekdpk8sT4rbhGAv345iJFhicEx6Z",
  "key7": "62cNiTNEvMJ4G2MkznuaTN25NAHpj8MVECrAvgGbKztRGZkBBR36esyFYdy38ua2q7qzgjRxSnRxk1sLyQ2FK5ak",
  "key8": "5JpNo3i5YG858g4Nnh1HvYB2PrZRUs7cwCimuPyULW9XtnWokuzdgS7sH6TuYQV5pPdi9c2HWPaG7cHic77yFqih",
  "key9": "2AYc2WHamS4Wy6ch2YkD8KL9buVYR36Mn7WVwt61jvyteFY3CKgCn5AMHsW9uv9JCwTa3nLCW5NCh6ivZtcRYXb3",
  "key10": "3uDm8C6vfLxU5gXXPy4L8tqsALH1zJ1teBD1JtpzPJiPt42LaWF4aT2ttSkEy34txPzzf9UNEuoPqDf6Hq3gqpKz",
  "key11": "4bucewH9bBzAtsU27grKQ4x3WC8JcC7FViEYhbSyD6wnDDAtHYe4emvsxWfLS2ae4ZZcbKthEpF1H73iatkx4QnH",
  "key12": "4vetfG5qv8QCBz538MvRck7KL5GD51bvCUsfQ53BNboBahRwiihHgKqy2hckRNffU3P53xKrtvqRbARgVRyEp2Qf",
  "key13": "2gv6DaR1pU88pZb9rGZsrHG8VL9Yomt7t7tWnAQ2R71QLvKACbF1wEJhrrp2qZmhw2MkXATTibQmnZgdLunqhunk",
  "key14": "2fCNLB3NZFXfmJpm2rSbqthDTGsCCUFeqLph4gHDggvFCC5XsZ2eMZuzBY8SXndUBjfr7RFPBQGjjGpNcm22jAkM",
  "key15": "3HufKmzgYtV9NY2sNEMoDVEA21oc224tiaG8HECGQX6pbDPQvjMZtTbHspv2fxin5B5VQJNart9xrpUbji6RsTu5",
  "key16": "38XxGyZgdiNFPu2nA1sMmrb6wLZ7X3hQZ87CkRtSZMqn8pABjk2ZNjE9hZS3qnfXeY9LzcaR3WJkFw59Ph2hw4LT",
  "key17": "64HiqR5eE8VCpUPTYEhnUYMDZDpLmp2XJPFpqJMsrBjfcew6cLPvKmoauhGbunmxFB5yksZzTpUKa5gVqdk4gWHj",
  "key18": "5A9gfXjmRjRLzVZAog5hwkuCiGvFK25JZk6sjvRdjmAVMfEDpANP7jifvtsVbJiEuq35RiDcZuSJs67hL7yRtvbW",
  "key19": "41zgGwbAJhYP2ftgFQG3Ex3FhgQJJRTqZEf9rk8Wq4BHdYA9pr9xsxo6Q4ENTbQHXHkoUKep28QRjmknqqwZJBXi",
  "key20": "HSnzjGmTt5WT2VJvDGMEQ8Xony4HyUFMMLPG6LuwaHPrYPkotTZJ1542Lma28HRrqhEH34Z2WGdqUF1oGXpVjbh",
  "key21": "2CnGcUvZfkYt9dZfcZDfoJiSVDMY5VUvWeL3sXZgjVChCCoSGMdH2sUDXkq1VC4qAWU7HPAkk8Kr4TdYKJBxFxMw",
  "key22": "3vg9u1FzraqzxcXrUUWYs2V4k3CWeyspTtTpZseF5Ls6nirJectyY7NVNTQ87QuHd19aWymULBH4eULB6rvCkHbc",
  "key23": "2NNaL4aGxMnPXk6qUB4Es2bmqr5f2vET2xpNPLZvmrfaU2GaTLxvwA2kjJBxySdtAUuYtckgrKpWRhi3oWK9e9LF",
  "key24": "pzXswm94x1Y5GtCf4MucPKgZTsqXxGp6ppyBLkfcCXLL1dvcArBkY3threZ87zSuuUGnPdqEvBFt3pd948kRHMn",
  "key25": "9rENiUQBaemo7Us1fyHjFGdvtHVmt6xLMLs6uUgj54sqWCKBosNT6stP3JxJHnLK8Fro67zXStvKEnQc2GmSWdD",
  "key26": "41ReXgsqm6CMXNWovYUxmHVubopHtYXGwrXWVz4e1sAXKbpZD1VaTGeSwhT11EPjpGAqydKZTG9aQr2X3mGuAEkZ",
  "key27": "3EdmP6VkAhLM4eRcppKDQbtQkb4atfnce5sinENu6jfiiCgXt3eXAD59SSZEByx76vm3Q6CykL4XU68B5B5BDPJg",
  "key28": "4yaDTKYyvfuxQHMRFARrF3k3mc4BBQ3Ck6NQH89VCdLroz1nyUQEJsgAvqc39HoCP7R79GEN5VecaYv2sHwJuZaT",
  "key29": "VsTXt2c1EMyMy4jaoLG3ztmqEECCqvAV16MmxqDwuBeDVYdkdniMq8wx2hwRZfdeLG3PzSZ59HtgpQpQmWaAfTi"
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
