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
    "47GWYC5jHN4xuu6m6mBpo3vZqumKYhTkca4BNTaNfbCoygKqvoMGmNbKt3FSxi93gLcAv8A2FFzf811iefMGRzyU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XGmDZTUQT7WvfZsj1jzXLBFsxSGrjRNobCJRUFEmNtkxkYvrAfkqzzypY7TrHAyhKgAJbJujeqg6w8QrpQmWssq",
  "key1": "4eYcdmEproqtjj7tXiHGd8eLsqWgjTmSyUvneutSt2sT1CopZRURFMbTjDZ9p2avExuyk1DtjNCpWYEusLzMZtQP",
  "key2": "4LYBKBKhimSEmnHBuZJKDr3euAryKjZ2i9gVxsRRE8LQ8hJEDt1RcHnHEG3hAKzJdj92SFCVU8BZroDkgRSuR2ka",
  "key3": "az9vMrjaFnGbT9tyEqpafXVEYXspwwDAyr6uqVWzjLcZjcTFwfnQha2137rwudB4Uay1EHg3ton2BiKZTFo4kRV",
  "key4": "2sMg3NsZSA5Em916tZkrQ1k1XDWGEGiLBzskx4h86gHXUKrcHLf7HvnVRy1YQkKshygMB3oaMppFshbYtwbsRASW",
  "key5": "3ehpq9tcXE5ZgoyAcLSvZZXy5Nczz7tRFhhnARn7mJTDnED2SgDT3w63EXmwNKLBaaSi4NfMK67FK6LTwowazGkx",
  "key6": "3xjpiu3X78eyUoZ4696zkDSN15A1kc9yBAPtL9JRXrrmMYHNrW7WDuQr4S31f2xPrSGgoLMVuBuA7DXFBTEbduUf",
  "key7": "5NRHDXDJsvXygH29frKChvLNUDVcMgjFjSNUmvjgSB5TEEYR4KQCJ2pxgn6Gj2iq2dn1V9tjpB2YDBojmricw383",
  "key8": "yG7dcLTV4pFH5dHup5vcQgKvK67bqMnQsNusro4gd8n2ACy8x2AchJQmNPm1ns9zxx8nP8Lv9aEi8F21nUmaP7m",
  "key9": "5kSBt4SboNCKTKDS3wduecQ5gXf4roEJ2UMswLxQrv4PzodRSF7YYjbWG9fqfA7xamuzkXeuioQLfwzNNMXsZrJf",
  "key10": "5v28ii952bhaghqmFjW2RRfgLm69ofiJJ7mZv9MU6ZMsajvi1Md3K6W99ohoZWqbMWeonjP83nWYjKawaQLVjLrC",
  "key11": "5nH2K4HPYKapqTvVLWUWxjA2eVzK2UpwxqWf7Eu6KAAMLALZnHUYrgTET3wgApaN4PPHgVCbqUni2Cc5CoeMgyn1",
  "key12": "39NED5ErDw5oBgPDF2v5tNkA2Vvbt14Y5NcYbKxTXChYH2R1kzQffecErpdQpnwo6tVMm63o9aA8cYwzTCpfHaPZ",
  "key13": "47G25deDgGB3FXQQ3sGVyHaTzdPDDSDo1nrvZXAum4iCghVQaU3J7fhL4ciJN1L1VxrH8Uoi4aPGuQm5GuC1SSqF",
  "key14": "2D9gKobwTsHHnZXNnBx1Cb6F1H1th42vzFDyjEKhfWTyjFk3BQYV92DCDbjDW1JMF9T43eWEsdov3VTaUMH9uNNF",
  "key15": "2hRD1WSicNunZmQw5yqW2bxdHrhMkkH9VcgzTTxbhdhcaMc6nswECys1YpSDzhRqCff9jbVym2Zdnuyu3L714yJd",
  "key16": "3GHSaXYhoe8Ek2JCgbv1CYrbnghGg3A94KxMA4MseaamVm3SXFAsLjpvnFAHWikA9qTQyFTDhjwA93EYmrUi1Qf3",
  "key17": "2dwUVMii7TJFGSycxpmZwderbXzhGBxut9GkpsmGKUQ4MZspyzBz3KQgijHb34eW8wQr7G2cRkLFQvReVoRTLhPy",
  "key18": "2nMwUuX86izQBUVvB7vPtHL4cwHep2U2JBCt6B3944i7LUTunwJ3DszZM4HGikPthznL34HVTqH5pXu9bknRxCQC",
  "key19": "5NXhwSJgKfVi4Sa6gU9GCcTzZ8VMFHuXCv8t6b1CsM9xwQjHKbERZe2PkB1ctaoixtmDb42TNRAb7MPYMqs1U2zv",
  "key20": "34vPYYatcpPv8UCg4ZVkpXcfy8fDPQXmQfp3kRv7B7QwbCpG2smBe7DWHR3raL6ejcxN7h4gwevUHS8BLWFasSdL",
  "key21": "5DG1KqHuGanXpt34fctj6Q3JfGBDMt4Dpfu7J7LJ1Hmr9N8CzskTEezyA96KvvqCqVaiMPbtvynAKGzH5M5rrAUf",
  "key22": "ivkSzMrvb7kkRYd1Zep1qVm2mBg8SskHNJdX8rRxAAmXbLZuAAhEhCMH2B5TzGqRQvVisCH2JQQn4dk8F6x9Pzc",
  "key23": "xZtEdCxkrupqJzJvakdxykipmmejErVs3Q5wUcXXsD2s9k53PbrKUtsVBXmAnhMkuj78522dDz4JQzK7yeJEMNx",
  "key24": "4c95RBbA1mBAZEdr7Ez46jQKX8PFdDes2EzSYWvvjUQBS7GSPS2jKrqYvjorhVhcxvvFSjPo5xV3J88bqc3BCvt3",
  "key25": "3p73zQ1cn8UsaEUZV5RJEc2GmbsHKozRe2myt9wU2qaWGmU6TDa3jh4BrH81oEt56Kxfnxdy76BMFQHwSftjdDL2",
  "key26": "5B8K1d3dbCP6RjRyms4z8ELeGAe4ANqSwxXbfPoJdJ2QzTHjfZLRkdKbGKyzz8KGcyyxiYjrdh18qyeHAnUJDBbN",
  "key27": "4TKrpr2zPbWvf3Tu3m2e9oza3F9rU5ELbTeEqpTNsgC8HJNPZAi3difAZ1VDgPf7rLLEb1TRDDUTFJLBaWRFbFas",
  "key28": "4Wtyt6rV38oVZiMt2SvfjQXNX5qQ4HavobtU7z66Q7EZjEKVejF59dQC33P4zMxfw3DVgr9x9SJitYUMFmQtEdVD",
  "key29": "32h8gwR9UdAjfSi4BJJGwjWbZoEp6USM9jU8LdJHNMBmjJkaMxXERHpBchvNhzuLmBCXHaijeo66pf2JMMSrHvq1",
  "key30": "24qey6XUzM2jSZzfFtTyT9zpbVUiq26tb8MXVKC4sBiU4cyGU46hFH9GfWhxD8qVCcAWgCEejcmrGF9XwkobbEiz",
  "key31": "UVeuWoKMK5k2QdsvH5HgNxC1YutUAXCpHE4JyTVtro1DY1KyVBVFo9AFPUyYSG6poLodrwhhPw5QtHhiJkmKThW"
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
