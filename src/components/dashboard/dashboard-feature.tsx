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
    "5iL2ZyuHdLMrJ9jrji7Cx8DVTkZUxoHxZzW65NkpdkFbEgjwTtwUtcUG7eNRsMPL2SiFAHXnXcxyWb5d3m3JEUAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KaSzcDsPx4nmCzr66y7WbsPLxCoZrqKaKs8YyutD3JMULJoMnLyZ61tuQfBP7kySUSxgr3aVXNJYcwsjjiSmAXq",
  "key1": "3iDwcVEmMXQ5hTi8rq5JJcAGFcG3h6QDj4GTAcYT7s1ExCqxUAS5xA6Z3cAxQTn5CnK5yMKMcbqbGzarRt59DgaA",
  "key2": "66MBr8Pt6BwnoR73fP9Acxe3gH9NKJ626cz2ajAXGNGkDzv9d979EZooaZnSzjVsQkgDZiJWr2Lt1je1aKdn99F9",
  "key3": "Vs4a5qQWJXCYo5sRHb6wZx6RBTrvqrtcHRjC4AFJDdrKfrWfLkASgqvdtboqqcdDamZq84nnFr3HGdu7vn7c6cy",
  "key4": "21bJ9KvSFZ7XNEDQkC4ZQMVzqwqwMpciXoaLZLnFkw4pTQRj4XUoBpZHSgcBFkRJitkmk66c7x3awDQnEU1ifEzv",
  "key5": "2jHPnsYfwiWAqPaVa3wMEo8Nr7QZoVvfNrnWyf6h4kNka95fVZZj38czoXakEaSpvvXxa9E2PqUg2J7G6UQurXqg",
  "key6": "jWZ7KZ6MnFb7KeSxsE4b7xBKTtLE3xDFXseUcssmjfWKsKg8MSUfvEDbUtdJhvv3sFRhjNjS1NmsDtaG4yRvbyd",
  "key7": "3obzfgm2zJNXf2XVTCu3e3bWpJoPmGrw69FbhEpCHhB2fbWhTTTWQeVobKRTLiM3xGwpkFizHxECuRMiGuLEA3AR",
  "key8": "N3oPtaMhisxHzFhohChXcwzV4ovLVF4UPnnuDTvvbsVjuednKEvLHGn2q7ax1BCJxpVDkwEVye5329wEC5HbAH8",
  "key9": "3Fz844PicRo2RMkp7goVmtbsKfdf93f9V7SrggrhCT2GS6AQRz8xK2zJAA5ppyskY4Egyk5HofCKwcGAEPjR3Gud",
  "key10": "3266zqa9zd5Ym6MmkqTrBnzuCMiJbN1NZioDDuQru482VCHomQRhZhdSFweAo4aYy7kJtp3kG8ebtRFy7A4fxmgn",
  "key11": "KjATpaJbm4VLQL9W3jB1BimZvWLSkhENS49Tib2hzj4hj3UcmvTxzLZtqtpC5yADtq5EKhVzqCycDtnoH2DSwty",
  "key12": "iaCKMJjwvTkDyuQtGHQmGP9pbUTqJBgJXnXum8j89nPuF4f5dm63fMhQPyLZsXjWNARZTxBrdS94aw2Y4SJ5vMe",
  "key13": "4TETUzcW6cJhSuGdTcafcX7i6VXg55ttJcixTCodcG3o5u2y6JEWothCF3WT2JAzY6GAEWbN61BovNxvPAf6dfM6",
  "key14": "5vd5eG1pzxpQukXJjR9ie28o1REXvK2o2nSCGK4jAkEsKgb4mLEAEum6niCnA4pQnG3PZg2TL1y58bwEVoEVBzx3",
  "key15": "5HzPL5395NDdaPezgD71pXD4CBzuy7QhnUPsYEVTsCk1Hf4bSocqq2UToG8ajTY3C9DawQxQRkL6DM1epayNsB8F",
  "key16": "4rcb9h3rYXGdGCyTXcW3gxY4iU1W8TNkq335eRtLSb91q7eeSnAFnCM9dCRLqPHKMauRSm4zxz2kuJB4PPBnNnyN",
  "key17": "LNv11LPsK2x5P3kWkdTsuprcVzVvFXJ73Cr7zvkBYB1iEt9hbdNg2Gc2f2f864B5xLNRcUEYJuFuG9dojmiDbfn",
  "key18": "cvbVUi8167iS3Q7tomtud3LGSbzkGPPxDosTsHmMSLq2TF91yvH7AiwmiLbypShC1r8jCnpMZA1P1PeUP2bpsu7",
  "key19": "2Uox1TbcmwGG8RBdbHQWG436i6sbf1bUKXPcSThXuBmFKv9PboKikB8jpSGviZKdU5zEXcL26Mg2V78wxxL1aQSw",
  "key20": "MbpRMujJV25pDVSA1f7r5dgSx2UWPkGcewzqLZVMF8DNFLQFSFxAcdG4aFnYZtTAUvRvdb4oz7Mxyi5FeGhX1tD",
  "key21": "5U2bXc8ZkKJgiGxRHTY8vdtNzugVufWpDRFrG15w7opsM6bK94cDLWsUMoitSPF3MtqQyVKoSDh3c1orCxBVgmKT",
  "key22": "1TsBM84sBP2Thvdaxea6tZ5AovyrGt6XC3e5Z8SBCiPuHR9vp5e7UZi94Jfn2pq9VphEKYURFg6HtNB1eJLEi3Y",
  "key23": "2DeCB8jZYXcot4GfJLYp3wgJNW2iTzYJTL4xYCPyG2kBafqGXegeoYRQzRw2rZFLcZX6jTGSLuGpLJWCbQVrj9gZ",
  "key24": "35PwP4rh94sn7rgUkmo3CMk9pwW1Eo6J5TdasFxJ4CEDkFN12jfex7ADatGHatwDPbD33rSz6Eozdw9PdoCYCG4M",
  "key25": "4WrqNtfJj72oSV7xAMDPEgsVpEDEtZb2NQRdhNMLpAKjf73ut8GRcekmgBf55r2e2R2txPwQR5RTJSCikC8cawF6",
  "key26": "3uf5BYsiiN4wtAiS48issQwy6cAfTHjnq5JRNKG9HVXyrLNZN9EV9bFZXqNx7x35xfhLZw8QRSxKMgH8ZqthwAa8",
  "key27": "5TRZV4VjXrovTYiGUxJAosHhwPDjUG6aQjnXVvKCmbDfbwprWs5bHvhJ56Pi1e4Ybs75TC6ksGdDrJJ1rt8zDYcH",
  "key28": "6T4RSoDzgyUYptZjuqEFJkvi3aCc68W3MiJA5enXgeP316qoxtPjvRgFZwxkAfH8wAdmUxkBrZe4jdKWtidByqr",
  "key29": "4vRZRSY1FNVeVaSeRgbqfsK4rTrS8mVsiPW4L1ZTqwqdmhss63G65ecYa6gukXDHLkCsdqvzZkUhM2w7a6w1cab9",
  "key30": "2ZGPKBFAALZMtE8CWPovVB8BvguceatDJ5uTC6nhRRwHdhdap2X6uNGU5Cn2nve49uSKpfYChdN8nsezUEJ6xGzP",
  "key31": "5f3accPUx3vWLDCnP1Qj3r3PWAuSyprcgroZ3wVWi3cyTEPq2i6za6nULbnxYBsmkzA6CsgHEEpBgbR64nVxGuvT",
  "key32": "2sPDW6wbFeZKfjJasbPdBDc4yZ9YDtwoEzkSjuWDEAvXErsSUxt2EsW1QHLfVb6kJSDKfC1g1wD3rQue85aVhf2q",
  "key33": "3Qa8BTMQk7uiuiXmyXJ8e5JtoBXgYa8nNnDRywhB65RaTHtRj48ikNPwMToKHffQZNctbzZtr6fgBLUo7Vnzu7Tc",
  "key34": "21CfryYtEc2JdqzwNaLVksz2suxzcqELXU1FP4oRfzKnUDCg6GALzoenPb3VHEzjMhuRm77mxKRivpjHPNELqKXE",
  "key35": "4iZkuDTc95zq5jrDX2xU5gNQpnGp4hZ2UeYzih2woECrfemXLoicRcXKhQ5Au24dTvEatwP4napYJaL48Cv4PDBb",
  "key36": "3x368nVAR77P3jRc4QAXHtkpNHHC6yeBa9dbyxBW4TapnWzcy66uH1gJcq16i8KaBcPmpPCc4fLEkDNVrcZGcTFT",
  "key37": "2Mc8MjNz7Hg6JE9o6FqVQbwM144C5fKyH7tvgPDo6Yh2gQ1cFPN8hpEbfWw68EncbnRmvJM6McWQR1JAT54qzwrU",
  "key38": "Rr8NZtPsf1VkLRjADf1LyWQySaPQ4pT3QfHv79PFeyAS1iaD6sBX5YgUajUwmUvvABzWTokYY3rUtZiUxaaGZKY",
  "key39": "64AkYcijTwiksbDhoCGLNZFAyQ8piQxse1Dt1MEyrsgekennbRvTnqTaEqPxTzb7rzCojBZNGazi16vWntaq9qVp",
  "key40": "5m5LGov1eBZ5G2qStoKWYhEeHRNxwCtHE1tsvz5iz6gdDp1BJA9C46e6DdmBCgtBRLtGQAEHB2XBxm3ieo47mft9",
  "key41": "5WQkEjxZBMLRv4QMW6PFThT671rifKVZCzaMYuJVRvNZwre91KnvAoF8XRh6m2RmVpZ8evDf9FEUnkpkEcJHXnr3",
  "key42": "4ZDyWsQBeNeevvSqr15Bxe8519HiuF4Km7FfrTHTZHeMToppJWxEPdXdCRgZ7J9iqCGso3rLY6tEFN96Z4P6owiP",
  "key43": "2QGTadJS68aHpkZRviW6Da6DdYmfWEbVM9uPmETdkZtd4bZC7Ht9oqxSBcoKi4ByNZ8PpHCYnhRfWqztsSiDtSUV"
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
