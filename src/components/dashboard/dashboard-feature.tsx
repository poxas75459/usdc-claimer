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
    "4FFaAZoNvC3bVGUqsbdqdM8uXQecJotbX514zX5jiTWgk9es78ivP4K8vmsGtqAEQ9vaEY1HRckVMw6eFKHMgzTS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PGFB1C7QVU88DqstCFyYN2tpumLBakfEVgLRgLgZq5r7uQLheAgJw2PaRA8gSPVGkTZhZJoWoX6G2SAao9MSMtd",
  "key1": "vDTbqTrDMeVX7wnBkMwqBkfxCk6XT6EZe7s5yWfezBaj9hAtGB2AQdfNCv9B6pjr5EFVQnjmTFQQ7gDH4AW9H1Z",
  "key2": "6WU7JnDqUyRkWKeRDgrxnUnQFFj5XNSBi3d4PWrM3cs6N3U8p1jSmRue6HQ9MddkA7meDKgShYAA1gujowN8RYM",
  "key3": "3kmgKzkvVuZScrwv8JWSh2CYmMKiC6XkYsMkTbuoc6D8DhkSyNbF3v9mCVgRZ6J2KedhnBp8eruqgZe5pZvfmd6P",
  "key4": "3HdZRCWZ4eAxCqjwDnBrjSDk1V255tU9YdCs8AcSPaYQ4qCYwPzR2pTaonvfMDMWAQoyvtXEed6e6xPmHvy2jzUR",
  "key5": "4J1EKkbL8sLuKxk3BMV4g9DTyTV62tQvaQCJuek8YNXMRhZRCApr9PyqX4AEmsvUg8fwnbJL26iNK85h3FiDugpF",
  "key6": "297vFxzL1yQwk737YPcvGU2iPMhamWrAofbvDu2HNmN76V4nxCXXpEknVP5VYnhNkSX9qozodKbQyTMKU6vAnfCQ",
  "key7": "4kDxu1U3sEYFWtfqSqdCRwGHr6dro3TfVGztXFTYM2J5i9dSUDUsTfG6h5AvuXqbfyjietdXj7YtfYU5kF1knyYF",
  "key8": "4pZMRnu7uaesuthXSRhKBu2ZTTQzsJ3kk6dF3Z6hdmd5bAJrjuYH1XJV98CA5Tsw934ExbgUjNXi6TLmmb1ha4rj",
  "key9": "4bKFLX5mCDsn5LRetC3cfXsQdfz3pTx9Cf7WkPwk3mAeHid5LVrBy6apbcMtVHYjQYfQEApXu58VgPB3JRkNzSi9",
  "key10": "m7aMD2nQPWVhQBB1cqr1TiSucQJ6uCaBemoLsAx3rVsSHZZ8MeXK9acYHHJ47rmUkkR3a48Y2yAQeBSy3uasPMN",
  "key11": "2zmSLDdJGxp2KY2g2KCTgywmFGrzNwu6eVXedduwsqnyxjWHCaVxd5ePTDMfsqTw3KkNUE3Snc1gHZUwS8etQG82",
  "key12": "3NXptnp8vr4dEunCUL61aGdtYRnffuAhqJRBnCUTVWiLL4ExGfmZnAkTP5yXdCDycRxVPH5hUmDQ3F9VTM2phHsM",
  "key13": "2zHYfC3WHkSMiHWqx2QA4oxgePEnTVbSNVHk6APdapFGpXL2VsytpEj8cFs63yJPuYpoyDkKisTDAzhgDjsTY7o6",
  "key14": "4WZ8SsheJHD5soPfDWEH4YPKnRYhV1zVwm2Bh83iXSnKExp5sVCYvvNsnx32ogGqSnAkiFiB3cweE8HVc9vpURtz",
  "key15": "4eFakjhjE5HfHRrm7LCdm6oyzs8mdNTJB5d1U2nvE4x4voCUnRBpEU5SG7yr57PXZiwfm67BVqmJWh8rKheZPJSE",
  "key16": "4sVhGvsRdGioRW4VPkMQifyNXBFoXkXGrAkNpr53kJaqzjzHTC8qcQ9MHkSrE4MWgJAX3smFMHneNXsKJ8VjAvQ5",
  "key17": "45eJy2erzQpwyCmYQqrbz5MfEyTKZ6K3UcDXRAgsCfBMZFHXNWSCLmxR9HtGx7mhZycoqUvsBLZdXrnQSG1hutqN",
  "key18": "3jKo6E3R8kr4EwdbGYQ7CimB6zVED7GmH5HVYjoFTJArUQ6JoE3WSLo2dmFiyRsRov4wZuwZEGU7QZvzFo4pJhYs",
  "key19": "S8mHcFwVp6EM6VYXGCZyxHeN9jKHFMikYsBgFoy9SH7ua65ckk93922zSRapd5iHSTtaLfssC7oLFG4QwpLEFo7",
  "key20": "5Psax2peNgjmmUrWav66KmEccpkfSjTMD7tLsbVSSQM2pRWV9Wxg3wdPCdZV1SD89JHin9KGrzS4XWPLH4WygkJn",
  "key21": "2F9gN5637zrnvjy2dPSWNC3efbf3ZbbkRpbtEMdaNZkEyuvKmfGPKm12usGABAKpmDAHYxiQ5UTL8mPAXBTSptWT",
  "key22": "3oWDDNq7AKKXer4CVkYd4hdk8XPfWZhwkc5V82Zkw6zGRxMPvcQjWuRomQVTsLwBqcabhUXErdpKW5zZo5qij8Yk",
  "key23": "3oVnm25pS285WVRmQVZskR65LNoQrwBy2FqpahSEnEjGndnBmjhPCUxE5gue8u4bwJEdmE9BnK2MaLp5i2L85riR",
  "key24": "37dcd2qh5QM5YTsaRkYV3oM35BQPaA2o1ieYrvHcPiwcdDEkmFwHhDmJcQL41gqwZ3YYGCnZBUwcLJa5NJHZvyvP",
  "key25": "45NsrUx5p7paobzrxRoSUDy8QczDysfhQjQTMZYyeeWwHLrFP94gCfQQJbL5t5RWgPtnn5VaqKPmK8fBLiM7tGDf",
  "key26": "4GAo9bAxJVCqdLYGzAmLMgmFSzPKLKriTpf9YVVtbXJv4k38osezoEdcSNixZPBDXHvg9T8JpRXHBobGwAsrJAHM",
  "key27": "AeQrvvzhSxdMMRK6bzJGiiw2aBy5NDoUCsdv8fG3axYCeWGGNkELzoXZ9cPttZifpAGKc2YvNDFhu7CxGeQ1N6g",
  "key28": "4Rsjqu6rmDgZohrkzr8dRPj2cXioQEJhSyhFaZNC1NSNkLSwv4UrMVzQgGV5cinzfxGLW8Leiebb3ueqJh38ukbC",
  "key29": "3mKF1UL1Yf4gzxKH3kXZDwBDPaiRtFdNd168cMjspBRwjd6woTpuvf4xGTkYSc2hj9LLoz6MPAgWgzPugEWK2a2d",
  "key30": "3YuAqCHCMHGzTd66kXhbfUZ8atcErYjHBXQU5KLVMQfxgw4DHc3LL22wua15Xxn8fKaMU9yP6hbdsTZkx99wB6MH",
  "key31": "43AUCjezUC4HcUMbsDftGuaBtXmVk1oxPJBNQSj8RwsRpqVzkFbzW4cym2V7zkMjNGQ9Ggk7nTfPpMwkFicWA372",
  "key32": "4Rto3qGfD7mZxEiQnbkcXZECTSnKZ4SKQPhiLnTsiLjgmwkRxUz4ZWjRKFb3DxXXd65D6sgyqBvAJzwwxCHDFMKx",
  "key33": "4dyF91N4apmyvCTF4KECaCwr1XZajeD79j9BEgAu4kTdgv8FbP964P5QPNFoWeMjdp2HoFaVn6q2zhfgRHtyxtcp",
  "key34": "AexmxbQLA7YVWewiihsfbNKtiau11DMSEatnrkcvF6UyWzGrxsuKuJfGRtyti9WE764aMmFPLK5AmPrB45c7BA4",
  "key35": "NwwTYrjrWBVLLprHfwSdEhmAoeXfjHsSvSjrsPwnDoXzWkBEzRosyeShv6vWjFcWmkcLVe9RtgjyCGyRYqwHo9h",
  "key36": "4K6rYykdBKcmcaYqBVP9PsV86bnAy9HM4m5V2hLLcgmxsdS7y6ex4VdqwnTx8jdMVqAmJoFrEjxUjwyFLzb1bRmh"
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
