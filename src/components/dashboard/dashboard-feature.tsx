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
    "3NhApdzfCxxWTtCuW5dByUBEmHZufFFr5vK6g6ZAZaGj4SvxD5jP7uwZGTqRZi89wLYN9tzhDm9tRiiWfjyHLgqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mDsU4wgnGqqGiXCwzZ74hnZXkkggCZ8kZsFnewGi5CvA43AQTNtjphaMsuo7otMcJA1zz5MJBizCHGvu9HsMg28",
  "key1": "2kWabUPka2tK4jsJAGFQk2F29KYhRr3tpKztBZCNbKJzjZKVouW3fACkAjfVxJFYKZu1FjTRsDWfgbj1QzAUoMhn",
  "key2": "2kehGg4kg2AUP5G1HaGzv8UbEVHmDp4XqK9R9vXQ8VQh9NR85nCXivgaQ6vvsSBiWGGdu1s7Kw1aVjkb8mFPCd78",
  "key3": "5otzZ12fMYfLfhJFXrcqyhrRTMaDpqBHPS5qQa8sEydGVGNzBYmp6jbbHd2Fe1nBRKYpr2HrpR1d7en3CH7a5euC",
  "key4": "2GK28vQDcFmcFm9Hu8dKuJEG32AaFdoYXKdU1kLrBocBRhLEEMB5xEZ9wfAt7JbMwPYbSTXnvZZT5CpBoknGtkM1",
  "key5": "4vSbUZD6iqLp85bxgLSR4FJJQgiuhRGW8cK7pzPUmC3D4Br71z9UbJn4n2DDYhmvkC4tGmwWbNHiDhaXeyEp3QCD",
  "key6": "5ZTM1epcB7ZJrEEPLEW4BVNdSTat36LnBrPZMzEirFLyZKSztbMddnDARbjPBcchkNeAoj8ZVxUwd68fTntJSXuU",
  "key7": "316AcogFWrf95zUYNkWqGsk2jhYQPH3ajqZh8923HppEywSRWJyNXsZyyFg5SBfcuiWwtbovqNxTFgvp5wUtgCcE",
  "key8": "2Sn8MDQYbBFx3Cc8QAqaTwwk3KS85YnzPMrEa4ZTHaTiiXogwpEr3GrrR6Gw5BUZD2neYzP4VeCKu9eYZxGQJqwf",
  "key9": "4d5iGWwVKMkXvwfZRhxCGHooUVJd4RBHtDM8p1eWQKACCnMbk8U4EtbPp2vcZtCHw2iJsyYTPrJMb8VwCTvPwxHA",
  "key10": "5jpex95GbE9SBxmHKrKePXkX9yHAKyk3v8rtADnCrFHZ2JnxtB1XdPqySqSG6Ccc4WVm2cUrkHCTSZNXqhu4zF84",
  "key11": "2veoG19rCHjWbJN6KAvrBLxkpU4V4HtcJJLjTKwnCmDtLQ191Ex4vGatzkcYeT2wUtPP6PjvjcjtUReurFZaaGKp",
  "key12": "3xsjKoQ9hzEF32iL7NU3LxYbBD2SAxBo4JNvJnMb3sfMF1deufthHAWHLNCcSi4sVxt2SgkF7mJ5kuC9XKWt7Q8q",
  "key13": "qiiXSjMNqNBXJjybusVo5dHdGXjA6oQesALTinmSi4vVJbTo8oBFwJSpPa9cKbKa8wJ594ihR5U3FtCr9LhMf8r",
  "key14": "3UpFwtxCTphh1NVwEyEQgDjs3Xet9Ny22Bc76qZ9YwsR24GDUpa3Rzm8p5fJemQJqma5EhgUfLfoyDwyjesin9nX",
  "key15": "uWmrfvT15retddLMfXiZrrWV5PwmTrvM9W5ofcYqb3935zLbh8rNAV23rGMpnRdH5TZWegj55Ufg1vqo3zwsFai",
  "key16": "2qA6t4XWQNEedPeboPRztJQDdoN8ozYMxr28X4LfuespTVmoD9KQG9Xa4aT2yrVuNVm4JY5uouMpKEqQzZN46zZ",
  "key17": "Z6RDesJV2cAk7kVKRdNxLU96p4uQ9GE2JaqB5e734M7YRWjsFTGmbVAsRstEaRWwRfFCwSb8Kg4RK4Ev2mQQ9S4",
  "key18": "5pC6yAfxrk1E9byuF1pRxN2GBG25Xzd7QBvP8m7riYschWLwmg3Y1brZKgGkY9FPzc1QZUkkrrWfhkxyYZvijz1h",
  "key19": "4EwcZwCMGrZknpxz1eJSpC4EXGRiZeRdfoDNv7CHbhtLL7q97evg6ukg8T9gwhFYd7XL2XatSP97NWB9mUSFYzTt",
  "key20": "3rnmPDkPF7JLuYNi3vpGCNTpiVbnd22DPJY5ZRDZD4bRJU1HXoxXGkUBcqqDTX7bJC5p4SNTPcbL5MT29yzHfWrj",
  "key21": "3F41w2JhpMM2q3MZSAbL76jxSBqYAjjoLxSzhKjcqMFqKyjjz5kAD1pRPPQn4Ty8XE5vWpG1V9vsd5BqCeXtdLnQ",
  "key22": "2Butp5FheP3Nf8hWb3XNcH6aNT8qXvUxaBDhP8nvALctNpB8Zecnmwdn7ieRQJSJ5FBoCsmtv3EKC41mB4FZC9K7",
  "key23": "5K9EAzVP1W4D2SLW9Ep6xH2JKua5nGDdEaq8nUJPv6FjbYzyUuKZWiyMFmvGYYRiDa3fUCVeaV4HHVApEQEn61ds",
  "key24": "3uExafbYSXYAcEAC2ExDDyF8Ff2Hp9MyU6ksWjt53eexQiGSZ5WaZLrPhdZG1PX5dZunLGUXG1WPHV6epneKggma",
  "key25": "2W1pdSuqjys4EdaqYjyDqxuNWKsJ89hxywKNLxCUgxoEBnGtcfVDPFEdX1pJV2WZRPuwnnr1oHzVJVtq1QE3ZFQF",
  "key26": "5HZftTVBF7RPum5u6epF9iJE68GrVbh5pmwajiGmhArjvkeTA6iL3b3hWaVkUbk64Da7dFudKXPUUiyuKTboHpea",
  "key27": "4kzyh2eJueVqbca5dASkEHHD8CZsRBG3hm2dhzHoMXwgDRFAwEvda4Ge5pDLZzNnjYjFiDE57uckyfLoggfyZHat",
  "key28": "2EhPV55Yw2gmNdDiMYTxLfW5iiP2dAqkMcnZPaAydDz49bGF78HLurjC3u6zEEKHua2rcr8MfMmNnZUpzVCEXPR7",
  "key29": "4WMh6Yjec5Eous5arzzn8CRPzBPr9x1sMAQBUbXtt1DzrXbzZZsaFuFgqGR51hzm8Py1FLRWDmg8fqjWKwXBQJgW",
  "key30": "NSUjghPuAHAcFqETHEebaPT4rg2yjTpmQAorTbtodSxcoLFjuE37NcWcn7iqX8HXWYBSfuXj1J6PzAAG7fZq5gX",
  "key31": "M87NJjKGGzWuZ29XW6iFbMSaFybw4zwzskyVeLdxLFPZ3GTBE9a4nBToHw25G6b2C1z3YHv6W9LuWfBTcUGD5NE",
  "key32": "4tv3N5oVcF7oHZrbuV3QovEx1F9rCsgST4KzarnXyQv6wrDr76Sev9RTD5BRMMvem9VjaHReRJGMzeQeCqzeHre8",
  "key33": "5MRCsHcPoBGzo2RphFuFnjnGfx7vJhaaLVKEFoqGAoDUboCUfEGCdpL5qywUVGzbXiiXc1oahnQ5cqQUiKXEspTY",
  "key34": "4dWFvEc3wzcVhkYWcHTRZH2TS9n5FirHDRM2fjChoV3q2bsSGgUFnBHEb13wKHKLyQCi6soxwFazhrnhcjR9yUiK",
  "key35": "5c3T8n7RtDXfkRgB2gw3PDSUzmGAHrLVLLQqwLKubv78z78nh6uZJfxeewNirUioesPvGNC47FhY9kwG612CYcE1",
  "key36": "4Y3GF5AHm1nDmitfNzmfximYsQ8JFHBrD8c86UQapnrvLSJpFAXxkk2ULPErFqQFpwbYLb8Mdeci6c5wCFRgQybg",
  "key37": "3DZspvfJ4C4rrzfqvCmg9XGwbz6xFYkY1u32TaYcLtTkpjqzkDHJjHpratMVd6WvVA57zWct6g4J8dAyFktdDmjn",
  "key38": "5Gg1JffeMwFwjzZqoNrh8QWKqrGyvYoo7y57YQVVbj8JR3fNR9e1RC5DgiLcL6up64gaJhcdG28Z2BL3bnWNKHx5",
  "key39": "4w7iDykt56PjGXwhUEUe9LHuRrGmvRVcZGYcT45sM67BcsrWNzYtmLQfLDWDtrXxvA3hcVJkBBCpwAM6g74yxMq3",
  "key40": "Lf593ZcRujeTNNTLCubEg7MYRBqrjSGxb29RZSVsQxs6vBhe7RbjJYbt4FEiLRn19qdK5TDWZCDtXitoFf221nd",
  "key41": "9daBc54Zha3MSXD39C5hEsmAjEDPadaRCb9MNssE9tS9TaqLhSvsRP8YkDrCoNMK2secDv7QWDvMgMvr3mCwWHP",
  "key42": "2ZbDhPxRR3PbJBMNjFgZ3v92KPrHrmpJRUbiHaAaYeNAG1qzHpeeuWwuU54pGKnA1NiG2d6BQiJy9pWajBqARJPm",
  "key43": "4JRu7PA4cYZtmkMH3n4ASiUeRfS87kU5Aiq2CRSCBYQL3HXCSGVdhnhdQGJQzxN7hNVr3FAtmenzpcbmycuCxGyc",
  "key44": "2JeEurak77nP5gWah1wFCwa4xdDiJBdLTfDVpccCobSB9ZBaXM5EikQuoA7JNViAabzXyFvfqiavUTQrgtFY5kQb",
  "key45": "3fCorG8bMJ7iSW2nmPCR7b4kEX4pV8KyvmMtvCjcq4P6hMNzHrRsHqEEMG24sUwBxYhtsYVmC6FB5R5qMpFrPTNV",
  "key46": "3idZKuh9itfeLojETWTX3BZLtLySro5HWjo9Umjxgv4Sm3VLGHn3ZDNfTTTKHFux5ZKq45eoJrXFfUpsFuSkBZK9",
  "key47": "4VfARq48zMi95qpbuNtrBtyioWXsjwTFV8LWgi4Nf96wmHrfJkfQY4iPkRLj79RjWJcDQW87CK1twmn41DCv3sL7",
  "key48": "3tLhLrjXei8r3ZwJSQYG5NUrw9wY76t37vNxS9KCjuDHVaCDuSg7niPhSzSFjvBMPVQ1ERFm9A6Zob36A6RHMMSx",
  "key49": "3WqrdxoWZqQCoSXhMwxpAYDBrw6971fnMJsQsExkjr7SSNmKYxvaG4oGAY6bTRNivhYu6CXhUZAisG4VyHMXrmJ4"
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
