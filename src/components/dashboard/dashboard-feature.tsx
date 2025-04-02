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
    "5jWRb4H8BGyfS8iLnbJKopHB3hc7zSu5Wmo7ndbgzb3VobadBZxxrzGdbHQ5UeQ6wpp74MegGZqpzUgJqoBkyQ8F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uaDAtG1obuUa12DLLXPt2qvgEmsZat3TD3wakfuamRozDcSFtGMbS6uXwrxoAKjWCsogrMicK5D2vyvDMuoMUjQ",
  "key1": "3uf18yTUn9SiVAo1NJ4J3KQpvSN2uL4wEd1RkmYHFDB6mHoBj1JqUXhacTjMAd3Jv12T5L4As2av6vDukbhMx56M",
  "key2": "PvHcMUixaK7VQ79LGAmvcWdeiBDWKiWexfRgzr3R6TH348k1tDwLisqA4UQ3ZH5N4qd5NmRjzjvFua3aDGowGFu",
  "key3": "4YVLkdS117RmJQauqB5twkyi1sTEJ6YN94Rim2QnW3J1BEu3N7q6k5tnek6trdR2iSFnNDV5Fwz945ropwRFBCrX",
  "key4": "4ywYsLG6NSHy7Y3mBSw57EuGZ3EBsCYmkVF4hEtHwhK8YrJUCCXVkwQAUXxhAciNDCvZA6EPCwm37k4Was6UH37p",
  "key5": "27udUzXZJg9MZ9U1KSCNGWEnsg9tzbZAr7PwyHCeLftiWYwDVhhi871uCkyajSwpCTUHLKLHZPvYPbPnpKunVXse",
  "key6": "2K8fEajhBFppFYCGUmxM8UGM7ZxwWGaDsARsKnG8yUEpd6BXS3CX2Q3MLMoYiU6QUAiFm3AJSEsqcva6P6Gr3L9P",
  "key7": "xSStfNexnwyH5Wwprg6MyKJeTWviE3MtiNbN46295wXg5YGbScTqqKB13ruFRhr1BbbrgyhRVLPfwdj88Jj7MvP",
  "key8": "2qQd1zpMuzLQm2CASN6693pAK6dxzqdQkiNUZ27PNMQPsu1aE79mCuVFDtk3X8dstGjUh331CXwL7PvG8PpPHCY8",
  "key9": "3Z1gUUFzbGgDg5zFBBfEXZYA77ur4NDg1rCxXqHF4y6fzhzEc8HMkVqUfKvnHAcKyoyUzifK26BEniiqhsEQFg5",
  "key10": "2EZFmfyBpQ2hRMBukiPKZn2zKNPgd5uUAC42F6uf1AqW3TfUXbXJYGtNtciQJ48u5PuTNsgzMD38ArAQMZNWFEuq",
  "key11": "2ffNhdhdpLavSA6bSppfT7XxxAJMgctypc8kTwMRhwT4QrPD7rwQM985vCDZ1YvJeGuchqVnB1bZxyqpDjejDPZe",
  "key12": "5t4vCC5osezZkxdBgDCQKd6NLTShntGskRSCn6bZoZmbCDLCgDVCPo7SxUDs5K9s9g75cmhCQhNrAqWAeDNcfe7j",
  "key13": "VL9mNbCcSacLsSF5AJWaZr389sJXcKSfPMsmq5Di9eprUVRHbYoHEDJkzNivxqUzWTYD3hqSA3u8gN3qmiSFWnf",
  "key14": "FvVeHH8X6PfX9GfDbyUzpwnRgPc7acBru546thYwuxnKcZBtCTZkgWpdn1NxE8TNwuX5Bsuk7BJE1FAVDNj1K54",
  "key15": "MN4RBGyDDDVNx2XdcrCjv8Ky62A1WHCgVWwRbunLyj9KAEQ4u93HstF9EvzPiVbUmScxXrs7CK8CPjSYzUXFapH",
  "key16": "2imqXYALnKdDjpxJALZDvSVwu8pUZ6wWzjh3EmFJuHA7RK7ehap7xygcJF1g3zX6xqtps3vdY5LMmdQ3PkqpxxCz",
  "key17": "4hDDGNzSgUGAgodH5Mck5Ze7ADkgndYZsBHFGLksUs4uQQG6ey9Zxk81DTfQL2qdWoj3oUiuKwSChLSZVez1rdUJ",
  "key18": "554kJCQRjLb7Z7PBrjf4w8wfEZzw6o36yxQaKL6pFPBrPVFt3s7HvBZnaJrq1K4GZYvkU8dvJCue5jBT61cgs1iQ",
  "key19": "BpVQ4RQxZqiFxvkvREj7oiUugwPvuVqiTFwBxwmN3JnLR9tyDEnXhhtedWFExQUDKSKCY1eQrXALG2B5neCKkjw",
  "key20": "3n6V3WbfwXG2N3JkhK9nHMQZftWjifK42c7VADGvHzu3rpukfprWwmmbZTdEV8DEGsMz2qnQKXcr9gEU4q5jTq2S",
  "key21": "ogwxe17YnVBpTirLA19EsiBthgBWdgf2moxc2RYHTjMM5xRYu38oPpfdzhqjU6Z5BbA3gn4N6Kz59zj1Ezp7yLS",
  "key22": "5ahmH6FzeJx2CLYcWCf7ZVXx6MnKtDWtdASJLChn1LD1dmi7WdJnk1y5JNchdgfH53nJ7MustoeMAqDxxyqq2RXE",
  "key23": "3K19mWBLY1P7vCUcXgzEFXHgE9gMdborK7oKHVUHcfGU2RmbRRtnrNcM69fxTh3QHpj9nqGaLTxaV51FZg2p8e8A",
  "key24": "4HrodTR85PsgZPBQH7jTbjuc7j6wbALCHcEGBJdj1psTtxiVz4tinu4sySBZpKobCnVd4sKKhprtg8vGbXLkBckM",
  "key25": "BU7v4ocPWMr61K5JXDzwX9uVqtJQLFFTCiobgjaivZXZHjHuQHHBEXN4fUeGw2tKT8eDdyUd3gtxkbEPsVgzASy",
  "key26": "5xXkDjcuXohRKhKRySKL4BXU4DRYagaHG5cmMwSENfha4UW9b7o586bUXMd8gxJbJGSmbjsbTifXY1U4YsVE9Shr",
  "key27": "21ByrNCJSfn4Y6VFQaFUZAPKo2t7DqSAh7ejo2XyiZgRVEFBj9VxPJgwgQRCAYJ9wT7zd4Fk1g9ejFKR6FFgjP42",
  "key28": "4UFeSrWq1ZaEwk5HnuKCZ28CP1im8C8saWHZRdLGSSVQLhpJ3ZKABrWoerAZQys8TQgeioQuPNpmY79Ay8mgTyF5",
  "key29": "UwMWeJ49ihVA2mtin9tkB5a6r6iYcFw1XLYTZn6WYT8hs2skGLw3V9BbbfasRKjqeNDasxanXeJUCddpiRDhF5b",
  "key30": "2wBV1W89pRJzgvE5vubcJ9pgRg5UkMURhyivCssdxXmrKMRz1aqyAVy9T69SC5A3ZBravTE1yBLnsNs8kEp2fRJ6",
  "key31": "5ALuNtzyUv3mdEvp1itMYBXNa1Xd7wmA9FKKYscuf8GHFii7uhxvQLV2Mr7MX81dy6dEsKhVRhHizibSkvNm25nU",
  "key32": "2DVToQSnKACFnqMQ37hZaocJcqy6C4ypZSBa7H5w1XtUvnkj2N6PA2AF8jaQKwfuGmBSW5HhyLhtkQ3dYATX9dJx",
  "key33": "56A6gDjVtEcRvqPXB9nwd34joWxKpYdH5PzY6XopXvC71t5odBQnUpzPCT9c8VWKAZHukW6pkH6uFihChgHEoRFz",
  "key34": "xDBTeC57n621piQwLDp8ZKnnARHHxVdprogenUU36soRTPiZzCL9CLehLxafTx37F26omAJ6jaUtuJp4qaXfCMY",
  "key35": "2tVfNvQTfXE4vaC7zeAxZXUqS8oAcyEifKZtfELrA6zpaae38rJYiPmpE9aRvewKDUh8Cui6fMrQxBjQzSPNkgpu",
  "key36": "4jCMNNcc7i2s7Ccv3msKfqq1k29uV7c4e48xk79cq2yJLd6gA8rE7BY16uehuGQszXFUN2AJBczkyzQQaeEvNBX8",
  "key37": "hY5Z4QoPbCeSqR3ZTWewqCx3rtb3G4JCWpJxyncSG7hLHztZzBrPm7tve1BzE7jq3SZ2gHdh7gW6NQBbeEv8upQ",
  "key38": "5rsw91Hrcw6GmsgazKANJXMzdToxZJYpN32RGyKjoRHemdWTQb8yqVeKpbUVa4sBibqUW78yUzoUnQFD4ZsmPdmE",
  "key39": "2j4Q3ZXYyMuXXVnB3MnmoNNrwtoh8svkiD1pxHrCqjD6cA6WztdEyUSPtCkQnq9gRpVaubdsSde8R5SqjiaxZQ4D",
  "key40": "2moLGiddrLvRsxyWwaTSzJBkLJnvASwbK12DNemiyTBPGL5dyAfoUCC7zD5AqwBZnZvAvNhkZWBABnnt3gVLCDPb",
  "key41": "5KNnPbiz5dyZUCqM8e5jVu4WiTmBY8MsTn15LqtKgD2MAkmwHgZYaRc24bpsNYpBaUWCeK5gMf31H4T9VLjtr2UK",
  "key42": "4YenRtZg7jQem6BvRp3Mwj8Y1SbtGQRvJCrRcyZozUyNxqJur421vDxPP268HVnUcShm9Z2MpD6gdtSiSJxDK15",
  "key43": "4HXDvrf4PxMdyodbHLidHSkio4ns2MHb9gTzbvDVa3LAyNZiv9uK2GwLzrQUWh8xHkSuG4hB3fRPQc4vt5DJgrX6",
  "key44": "5JR74G1hLHqiFFA19NgSX2Tzsdug72vub9JeRVGgeDPkArF1BN9ienRMcVFRkj7wCb9d1oTPz5bh6SHxwJREGUoL",
  "key45": "2qTsMMecNVgCG1h5mF4NybxskzW1PcW2oymuYnfDfTkzh8MWMu9vhA9Gw7AbwWPEQ1XkeN1an3iVqhrxq1uVN3cc",
  "key46": "3mA9UaRGuK5ve7ukwyPTwYJedGQbPU6ZtDuxF3KbrGnqE3CbTu7F2yb4HpExq8Dvi9Nf4WtzEGMcnG5rmd99FDe4"
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
