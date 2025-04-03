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
    "5F9yB27XgrqNeXDD3AaqpigwuD8ySFiZwgbxmy2tSSuuFeLLqebkhsiCp88ReEMRpWua2Y5r5oVYhWzH8m8K63Kv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mp2TFkgkQRnKNM2SSqTFXPCGjiALDyEbHqoWDgHNXGkKx6W76nMgTmFap8RppevhadrKCxvGzKod9qQkAxpKYbT",
  "key1": "GDGUDUJj9SEyRVsAHbxRUeHZgcZoX75xseWxaPEnjkPHaCbE1JHqKuAvqoA7KD74VurCHiRYfFwUL4zNuJGKV8B",
  "key2": "4hjx4aABafKJhHosc8SnsvczRNGq2rUaKbrFCqRj9btzY57BKCFbfKuRxNJppE4R6p34WqTqJ2DhfWhDvoEbx3Ax",
  "key3": "9RGmTB7qNKXB8K2ktHVoaFFzNXWxSL9XtiXNTfTJbV3DLfhLQzX36xDbEZf24EPhxLHqUgPB4bFsmNBjcSZ7CCG",
  "key4": "2UR9NrxJqLTqPJzu6fBBLFz3mKmcBP7Sc9CZVB5FCZXvpAxajLhQciEwjcDBDPLR49jT7Wqp2PRvxuRL3xc6TkdV",
  "key5": "4v59ox5usbPgPmSvceBKpuceGyabXY6CanG42QA8LpBGZmwixFKZnRvoEkvDtshtVdZYJ9YFukfVbNHq9447ngmf",
  "key6": "2rvCuq9jBEbC1tB96VTypD3rtVALL4uhPvaijDnsx2eLapDtS8xT3aK5yX7oaRueRYfBwGb8MjBkjYktBFwxHEtV",
  "key7": "2mgLsBJzqBHdkNidiETb1KJn8i5tnpQqm2bVAZaLe1s6A7auY2XPykfbsAJjXcxMqGcTM75LKTmx4SzGFrk46BVi",
  "key8": "ZFQ8EujkMU8TSD8AiW4oZN1KorzKC67KqtcyQUdvPfBAUu65QfZdgQHF9fww13YPNMF95xgVdTdJ9FArAoA8QkW",
  "key9": "LoZdvBo17Q5VipLvrYdm1QyDfb8sxxU5VbaGnL6jNGKtPZf9WDmFYsx4BypsnzcEyMDGqEyZMTiSaHz3pMwX9bi",
  "key10": "jU8kn5kCxvhvQtizmPnxCLvv7QnMEVgk3wkRXHK4ij181R11tFiwXAgpmC6TxEXmYmwqCeqgMUbaWf3DVuTydXv",
  "key11": "Ghxqh9Rojew2aPK1RZBezWQXuo3ASN8wGk7cr2WSvweb5rMmyfcmoYn6WcMGQQs1tBbtaKDn76Jpvo6RzN6nt7u",
  "key12": "3f2FLiWRintva3GDX9UY55dc5fs1th5Vqg5Y31Rui5ridVRufqcobJxfiQ5QiDFSJxyVSq38hVQtDVWrxTKdvMPP",
  "key13": "3bgosSxJjyKxtFTNuDNSh3MhakWqGLGQjNAgAocAQ6QuTEXaTonQ2E3Ji4PTVjoZvn8w3JLXFZQ3AC7V5kbqwvcT",
  "key14": "5xBkdBrCTUG2SbQKQ2aZPU2wqKZYAZKygb1H5sQmcAyVekatsgjyBWvU1kY47cjr1nKo42CBeZAajC3JcqmYw3ze",
  "key15": "5CMUdrpaG5j4THZKiVyinT9CDEfrKXm6pV6cPmFzrSe4rjfz3a91Fnp5Md1nb7sDZkuSxmTnjjMqa7u5HMXBP64R",
  "key16": "5u9dacoqJ5o8S5KaiLM4rYknGsBjEiF8DbWooDnMEShTyitQVW7NYjznoXnb87HVSJUoM7Ax7k8w27zr3WSqfHyq",
  "key17": "YvF5Lfp1rF3xEvaCu98AU6mARBQUVbXmohTH8MGqdgdSbAK23ornqjsKoLAwnQiW65jfTTv9DBHjbUM5WUymAcj",
  "key18": "4jZnsgBNHD8jMuLfHSCYvh7MMPpyvjqK4x9KRgQAkr6vQDnYpkumVJKgfCRfESe6e9JoAtB4duBQz6Z5TUdcxcC7",
  "key19": "3bPm5fXg4Mr81AK1Q5xbngpBPCm3UmhzvPT2zRDk8f9dLdDo6oLz51ZAmw1dMgPFpwFN2PKBfseXVyjScW1GQP2E",
  "key20": "3kvZk2YcUWJ7PWrj5wSc8bhsb7fwVYdXyH2n9b4em3zQ7kw55wymAEh1EhDkveizNxgy116HLgEoMF2HStFsBzBH",
  "key21": "4qihuWouad2QmBrPyB5efX8zMScfuifjBM4M48EtCXrGEDLZgJXfLxYvHxfL3aPhaNiEGuMyqgou41fQUU3orMZF",
  "key22": "4nex7Kfr68e9JxRosXyiRbqLc33KbHMXja8VFNgWmhdPEaLsr1cs9Ny1sAdz3NHubsUCyZ3xsKdgSHdAwsqYj6gb",
  "key23": "2fEUgarBpiYuDayskfTLKgXr4bXZKFv5RqsTB88Urty27GjcrrvcG9WH9pyLMg54ZCJUdcLhk8XdWkaSGcgs1kWZ",
  "key24": "2zBexvpYNHBXjD9NYXQHZBijuqyir3DzRYsCZHxrT5WuRLByLreeooU9uVr2JoNpbHL4DdLbHZSEfuhSzKzTh1Xp",
  "key25": "54KbyUhCC7c6vurw7NrfDEnqvdCYQU7k9J5Zx3f82gW6tsHzgMHZP7A5FS6ZzoHst1ttxU15CYSX2CU7oZN6sPnY"
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
