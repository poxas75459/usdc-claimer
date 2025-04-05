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
    "4YUow4DWHLAj6itHKeW75xDwTbTZhamkCkWZbn2hYp8FQd3oxU8f85KCvZqxT5U688h2aXZv7zYbFVAAcxVSDamz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4suB8WBd4uV4wDM6xdbQGfZ9TRTrTCUPUPuckog7afiynqtxMB7ZvQcss242PtgbX35fGa2PRSoFVhR3a5BqsvD5",
  "key1": "44f5Kwfe6oSSWLhxtY6FawAzEFXTvsJTGd9Yx3G5dQQMqtuFoX4pV2XQypkYn8Q1PB4wXMtBLKnN3Z3GndCDHRMq",
  "key2": "2d7XrgupVXecbFckAWpfsZbKbwNBPEvaXyY1ZchmTuJ1EdT46dQe7XknWbhzzqmX48s99w7wSDXLSShgFjuRYFrs",
  "key3": "YXfXeWSrpcjTRKBgpqaoEF65CdoWoUMfsUK3DVXQwj1qJY6YGvBFEFK1DqGrE3GmjHvPe2AYMx1pWiM6ukgoGh3",
  "key4": "319cPa7UH4AdL4ucBV8DSsxtyRxdJwNW24Dkyr6frhS2cNGQrkHdRou2zHMUYUTTx8owQvk3DJs8JoKPGUWHBMu",
  "key5": "3N48zM7qcgNHUt1BsbcH68CgBAdaweNDeakSUUFduNAoR6txWm39Cd6zPMmPGU31VETKcEB7ckbVAK7np8Tk6YaJ",
  "key6": "2JobDqNhvtqE6uSE8Z95B8r5RqPxFRSZwcgGTJNARfnqiUmJdGsaVArZ4shmJuhG4gNEsAK1axx46qXx1e22RjRy",
  "key7": "4WA8rhWthAPZSnqYEAvSG7wHk6Mh2HZfR9WEPk3C4Hy4hrh4Ddk7a2LiqBANxZyYae4c2Ze4hgAtbZD2PYBDtwux",
  "key8": "5Hwf974oCeEALQT7NWM13Ck3s78o8EMMVbcoh17hdJe6d42bcDAGfgTsQ1TymWaqzUYJjTqdtzXTjMVrKo9AZPR3",
  "key9": "8SwUhKRiKPLF23jqTa2AXmzq9fskiUb2QRcATFctZ3uFk5WRo5KyeCbeiFsKcXw2rSEJWnA3q5dvh4xqgzzrQKU",
  "key10": "4X3QSqyC37MJ5bvwYiGXw3HZXaNfK35MW58bcMnqH3y1icFL9ckEvckRxjmhLSYgvf1Tivb4bVSG7t5Pj7nKTcQ5",
  "key11": "3zJvhKcwsPZgH5zx74Jxc6bc11NCjHxYCZzfvX1pbxUjV9nLfMr5dZGzbjJxwLauM88cBJHstNs59jaQPx7vPWrN",
  "key12": "NrD6zittYbhPA8G1seiX6DCXsS4ANux3fjxG52mMgDB3o7jmFFXLUynyEkQYAEafKSbsZLsAADwzdwuWbkRaLWf",
  "key13": "4X8a7JcJcA4FASMYKaXKF4bENJkdJT3HWvrP4RhqMtVsWC9gyQJRqmQi79iZNqxZSACXEyGuMmcZPzN9kM9cy15y",
  "key14": "5cY8YMzYjQwHenenMzJXXvhi6rdDC6oCukV4oSdGnoBbUT3zFUitZn7kygPf3yzPEwn2j6Z3Y7vxGH8vjnuixRr1",
  "key15": "4Mnkdh62w4LLZ5doqvZx42jVDQarUTWZuTcgm7NXneuYLVnvmci546KZj93rx22Cd2srHvri78ryWv4kFK6ZTVLh",
  "key16": "2CPRNarN8V9NUjoTS5JJbsJFB1eB2uoAgzRcd9ZcLyQDifHZothe5TXZwWHm1NeRLMP5ETcoRR4JtBvvV2LPiczU",
  "key17": "63JDqcAHVj6TxUuJZKv7xqgAYS8VuH1wiDRV3hpvegmkxXgKnXKLvZUu9F45ZJNAMCQgCtcN5eVLm5pc9pMJa4V1",
  "key18": "4R58ZWSCvQ9dCkVaBxGzfoLHrjeD4WYgcD8W2qySRCkeKjtxD4u7SV4i4ftvJHUNy5UR3BZYPaCqB4XSnX71RFcs",
  "key19": "2oywq2YfqzSz7qBZgg5gom33uAwTuefQThX1gpqeyxgbJHp7GsVPnXXsfmV1Mc669MBCd5SvKTkL2dVig8SKRjA4",
  "key20": "25HiQnZ2BzbrufBehLH7ELtFrVVRgaKaoV2aDTfFdc45bceRoWFtrcFYWshsdYHah1TJVdrSeogH4HUc1sg2QLPT",
  "key21": "CggTQVuJCTBinSHn83s8kuctL7wN3zbtnEvA8VFbtZP1DfNDKEaL1BNwp9pzhicYGPmbzkkXHpf9tiRian7iVmW",
  "key22": "42BrM3rb9GsG9nPkTtJeGzUdnHgf4REdRZiLxpP8QkKmVkGraVr71BW5v6Q5fxS2YHCRF2cMVwwmYy9XiWLT8Vjw",
  "key23": "C1YGPH1eY6ewbkerSQPHExyAnFpRDn7wwNDMpLe5izMJAWfUn3gEdSJCrV5qLS9ezMYePfoRxkhBWDbKFJfeNKU",
  "key24": "3EoPZsmmsGwJFSMhw2zfNykGUgHjZdpncZqQrFL9ufpWfRXUBTRqLMBDHWfmqDjqp1AVA4vGvNWYkPNxCASc5fTV",
  "key25": "39SDtQKWDuFQnx9qEQnFeSxzBaVyhmkqY7p9ypXsojuTCX8FSALbUNQUkK5RrY5NmpEAJCbfnDmMekCn1m3PVJzK",
  "key26": "22mEAqFBWsnKqPdqWLMyUehTs5uQ8n7KSdc3Uwt4h2kipMg2XK1LavAhi1zUbjzqviZvr7Q8NrvoEabvJieyZ3kh",
  "key27": "2nLdUvWTUefXNjVp1xTtBvpjZXNzkvteiocAq8dFYgMnrwEFikXVuMVGdEKRHtFDze1RrfxXK4cW3ooWAQwfR44Y"
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
