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
    "2jgrm2SQknH2ft5roHydEX29VZekJuHLfJB4qJS13JoyRszZXskP8rC8yjp3qoKfS7i5VvvQ5we7KXaM4vTm3zMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51tJZDgSpNwt1XoC1JuBdejjQWNYM6yTg5SVBqKcSH6QZHEe7JDqTjDTQ5D7CwGmy9PzMNbqomK5F2qKEMGSRfiN",
  "key1": "2EgL4Xj18ahSocmYbrs3xwpdqjDbbVS4MwTbab51cmuzDvrn62raKJHKR1nTsVaEXZicyo74AteF3WfMRfmV8aJS",
  "key2": "5hEfgyZJcPJCXDqvRBh4skn5CRJ2vShDi2dZuivYjoFMuHQPU15nESCT9jEkxo1vjW77zu9jBeEe1RsnyDtYVzNb",
  "key3": "2soPKGHt6EtGtKk8BfqwoSgUkXXQmxHaAPbN1kwr8vKtEf9hMMUaL5wNjgYGAwsnmt7Xs4fa5sEtYAEm46idL3vV",
  "key4": "3fxZHPmP8CDKPDpDdUDSjWY4BJnsd7V86uVo4ELz24RX5vBNY4GzcHoBjn9JyT5W3Q8TvgowRLK7AyPdJESXGCx6",
  "key5": "XftcLQNgCF66Cdd4pYjvo3nBXEQ3mPQWpkL9L5igpCNz6nvvzBLAkQ3kqwp9LAj9De3bEN4hR1ToNPz9BkQqjxw",
  "key6": "3VzMzbUQTzdYrn8xgeicayDUw65H2GrFUR8qHZf7VwxL2EVaaqhVyN7GRFV38s68MnzHYgmMxLp9XFSUyDcq6YZk",
  "key7": "4oZn3mwmm4rgVMHmuzA18zbiiTTPPDu726yaeFKGUXiGyh29pvAq1EfUGNjqTxBZ1jZsNny1U7JaKw4pkeCYyHMo",
  "key8": "3Dq5QZjCev46Ykf8ipav5WnxCVVEsSkvq4yeMwcBrwf7KwfVHCdwcQgoW7E93e7J1mQS8S7t5UnLN4mKheftRSXw",
  "key9": "2BSbHjE7CLXvE4aSPCTmRZ6AVS7TFQNuW1kQsGbSjBWVbc6m5RAyqivq1PRV3kC9Ajp996erkqiPdBXSFHCvyNdc",
  "key10": "59tDjxtvVFYAg2hnDBqdsTdPeXAQTt9sKrkbq3CTQrxDCRd6aTMSTbWmQ8AaVPgURsC5W2jMws4uzdgTd9U9rtU7",
  "key11": "4Cifi2LXbPJ3M2eCuM5DoarHkJp8B5vJikWakSNNxkqkJHixKVb3Zb7SnDpFxiNnNNaEyrBP7mpL8kETDfkTbndJ",
  "key12": "3vNCRsL3m9s4fJhKGy5teLsV7GxTd32W3nWDEtzNnCYkVU4LaM3AuSCNPoXw1mHroKjyajB8chrhVEamvPFgguzq",
  "key13": "589CNaPWFu9f6FVcpndVCZkBoHK5CpPFDABr5XZLKxpLdwDmMm3cEhTCk7nrbZ4YAreR8Ga5VWis3qPJ7DWw8hXq",
  "key14": "66iq6cWd1qmpq76C21BgMP2Ai1Qn8xPahXSgYuGrb8UFomyqaBpxkUwwy5x8Tc8J55GqR16yGJXzQJMVDNJPYkWz",
  "key15": "4KUA5gZH7tscksVMtdVKgriPnQThivGq76fj7YaVAcB5KsJvignZDQTo62VfcEf3wc9sFX8TpdhL4MMGQfV41F6d",
  "key16": "29fxmGCUQVnRTJnK8vvakLCeA9t2nXZRred5z9oiAbj8DxJG9o3azpKSoYmt9YrbH7jcPJhM5gBq6qj8McRms1dP",
  "key17": "3nJ54hdyhSHQKZs2M9XA6P4WUWW4h57pYgcSJtB7hFCsxBrmFTpoAEffmwypKnAj2ZA155qkeiXgaGgzeHhVaKzx",
  "key18": "GSt9b4RYNnzvzHMvsmQs6kPtFttEgLZKSQqqdgymWB1KLamsVGTEsn4HfqxJaQUuGzhoMhgKxCDLswteWq8b7wY",
  "key19": "3EpeeWLFZLxveTkX4SExNxF8tKhcvxMJz2EWbDDihwZXLERU9wyQd82vGPKE8GshrztTRTcpiyKCZMUDV9aWX6g5",
  "key20": "3LukYRNUZTFed59H7DeuKg11QxXV1RG8TDxZjTF1WQkpQc2acabX8gAMRt9bjcnUw6Uir5rdcRPipfn92u6LskFX",
  "key21": "2Lq3byQT4C4A3mg8dxh6QfZq6TRQzE4i6gyHPoqGu5b7Ht6ZMR5Wfw2PGqxhH7tgX5Z5ACgWYhDfmm6NErG9gv49",
  "key22": "3o29WM1Gi76phcStnZ4ABDTSuLriYZ5T8NdVGhW23fbgm6gcgf2tsazymtGbZPbxKeQMrefsPQ4ygA8ncdQMfSWT",
  "key23": "5LAq1F282mQv6BQ4SBJ6A1AydCSBrjxmT3NfT55tS6FRHsaDn4rs24GCMZ7LKvryS7sXzBgbbUpJmLgAKJGTg1rq",
  "key24": "3bWouQCKZjaH8sgXTvwjosgbZJVSKEojHSNaL4C9JFasRqDxTVo9aadS2P6dryhZk6bgtJNiJyJqEcEPKoNBYrAk",
  "key25": "4RpkvqAQdzhaoBqKkUsFhEsYs41aD71nq4mehD6TETyV71mU4STmRSAv8jQ62PKSD4Sqe5xtM1M2yAvD68yY59KC",
  "key26": "3CpVBr3wua1RBTY6sFhpLrwD8AFzv4g7zuiUWFTGfFaCDmRzMaQSjJaNMG8FUfxBbykA1Cvo8itMh3Vy5axAq1RE",
  "key27": "3wsHDme1zBo4X31rSAHWpWtqd648uoPZDLjbWvB6bFid4Hr59Eb6DdbhHUrTJsHgGK32QM3eB24pDmjf9wo3GX9e",
  "key28": "2moqS4RLEKP4v6Y999SNGGFYVRNR6Nre56nvmpD6vGS9UUZ1r9DducTy2QSyQWq9UjrFYUwgctFrisnhYhMnGaVi",
  "key29": "35EN4TRH8K6mPCTsfHzPGhhjkRSGB2KvdjE2us2ab3M8A6yy2LP9E3FsquRQo35MwgvK9ALBmFoT2ocJzZ1yW2TK",
  "key30": "GKbMShX8A1RCWN9QRsRSRwPAyPU1N6ecY1ow2uDWEV5dUGp5PH5i9MD9hoTVXZXVRY8DPqqDFWxwMCnfu4Zbi2r",
  "key31": "67WR8PmR75pJfCPWutAXdqKmQM7hm3CbKYu1EN8FdvzqKsbgcnrSripVxSNHyEgsbsoa6tQd1PqvZ2D5D6v261BX",
  "key32": "3dL3en1e1A2ZabvDziHowfpfL4j9FJzLixg2bzef4BG7wzBTGY8epknU4dHZytWpy8Bm73KaHYmtyY7xrr8mBnzz",
  "key33": "2F5wpPQRSWyrpZZztvsPnsSxrYmoxFQvtePFWBmrhgEpfctq3BG8o6SnYgtnE7oDqPDu9B2RtknMeGK3G2dWDKM7",
  "key34": "38rPQTmNdMaQCNCS6PzHfRDFQDdH8SNTrfm5WKoo6PhMxS5DFaNwMLWAeL2CLK615YLuo6kkENi4krPi3pth3T9C",
  "key35": "2LJq3hmbH14Qzjoh4YVo163JmK2SCjhi5yKWcr6qy9mXVCjarDJiNYDbTELcvVf8dMo6kYt2neoDwg3DDstKNnPM",
  "key36": "U8D7CogNdirtZDce98m97eARTFtcv7QX93QTSbHNp6ADmowUkeAkmYbUgLnyDGNS2VvfH5ACkRqTqNKaP26iYcm",
  "key37": "3Brr2hbUTmjifufvgy1JePhcwQkWoavfJp2q6D29b23MAPCHNdtbLFyCfc6RGv9HqF3hm31KWMMw5RFGmNszTFi",
  "key38": "3wka1GTNPRMqHiwtt7MJPXVTm8gEytVvi7a1s6UUTugjwHsnSCkXtiPsQLwS37CYNxE623HZHq6biKVodeh28J2a",
  "key39": "2UYrM7hz694kHZJNvthuUsuqjsuAE4N3zVqCw4jvQuqqgwQg5rFTZHYK4DwFJvyN1xLgcbLna2okF7RUWUugsHc7",
  "key40": "44mKqUn8KLpG9Fv4aBtZ8E8dwGzu46bKpELmw9B9vRyFHFxboxHYSn8DJJ3yHEvTGDGCb3At8LB2r7KaDZRU4qvx"
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
