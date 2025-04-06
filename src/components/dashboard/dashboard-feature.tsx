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
    "2aerQ6nrxJCeZUEwGPyiWrwz9kxEk7dvAHTC8bHjtKU5HGeP24gHEUjNVFVKgAnhT8UNWWpzj1T2CnaYH5CwNhk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YcJQng9rYKtVXx2CrTC858AK5pDdxWYNJWf4b1rVpSibbC363sPaUxiHbgV4HPPw4jZeqUcrJS4TJQiPSNxzQyA",
  "key1": "5NxjrtzRFSCsF1Q5wihE8JZGXpmFFv3opvNZ32wiHgv2eVxrdAwNrdDDG7y6Fn6uuWv41EDSKqpEw7Lsppck1fcn",
  "key2": "3zRFgnGK7krrifL45E4d5T5q8Vnp5XY3KeXC9BND32ySxsRmr9nQ7rSnMvtpwizkmJMPURj71wxDkJJNGkR747oL",
  "key3": "HhPhQu3h6Zmxvpy9FtGR5o6juoX7dahHq3h6AaEXKknwkKeT9HunWZqjssfXPmorZ2YATYTJfegCY17t9DWwJzD",
  "key4": "64F2F3acE6BUJjp4A2S9vuLqPtubdVbHSSqak647n2ibfMfqRyvPsCCemDXuCKUkExvG1MBhhHXY99mNU8DKgqA8",
  "key5": "6431UVmBSLhtu2pKNeSV5TLNztQyjBWeR6Co3qTm7j4BV73sv2UqXF21JdANxh8X2VZbQ3PF6iXA7rcP6ZrJpb7A",
  "key6": "4MHkd1bpW4eFrMicUGGXEwBsP86YXXuCTnm3Haw6emuS2HnJCAJk6rQup7qfdZXxZGZ1SipcqjSUk7oDuRiNLGmJ",
  "key7": "4WcxT2mvAX3nY4bHCVpEoVvFJr9YvW2hupvge5VSk5A7E6nijHzCNh8hcKExF2LXYBdRuJyXNKB2WZcpL53rkMFf",
  "key8": "3Dkq7F5NS8NXsDSo5PueUCkCbHA5kK4BzV4fYMdQ9MHvtFtYn6L7auue5aoZAEgLvms6MVrAEqruL3oYSi6t3Hx6",
  "key9": "61kZv8eJi81GuqnGaMEQyw7Un7AWfkb4BKytovz9uaHwTGeMGRe3X1pctgQaCRytA11RTErk8Jq7GiMk23P8qDh5",
  "key10": "4KrXkyFr4y4StgnqBHKTtJBHAWMMjg9PCyC3qtRn1J26QXYHnmjyPLiX6uLuoPkANQjcXxf9jr7eqRYYCVDvPP3r",
  "key11": "28qfRQZU7iTB8E5caaVCyChNYd7SVQ4U12T8keeJQxFJrN84po8JwoXs2CGHVpoi6Q9BPYf9kp6yfCyup7EbVLrf",
  "key12": "2D3NivscqYzs1etQYtwjnzMFbwDYBwUFXewKLZCTgL1MJhBw87d7zjhYsCqaMPRPpESqRpiY7m9wZZgyQVLrf7Lc",
  "key13": "ZgY4dhyvKPhLAeEojXmKS2c5eaSCfQ7dc68z38h3xfoiDPkeLRbfdMJSbsL2MRyC3nzYZPiNcbGKiZpfSXHAqNu",
  "key14": "4KzDWc5rD5nGekV4WMurCce4hUxsZKgnEsRQCGDNsJSprxHRq1qRARZPXRQF1FP7u5yjxxun2vU9UpQcPKdPxHLH",
  "key15": "4Tc7GR6QRfTNfyjGJo8dvaDTGa7Q3mtidefJiNKn6HAy9WX9FiNW7cNB8DxjAJT4gE5F7i2Qvp28pDLMRZikPYTX",
  "key16": "2GqaDWuBdsRFXQ5HoDGVkytR9u7XjMueMeoWcx4E36C6Vj6p2XbpReMhyYJCmetr46QTttMvxwzWB2s8JucofFLT",
  "key17": "673wRf1iUGwFPeKtkc82Uv8s9HgiHnGq57VJE6K2Tp5cgrQPt1CmLHoFPawC25t6xzHJddwNcuU5SLpi824rYfzw",
  "key18": "5mqepvwtpSRvWdt82K8yxPNLFzt7hny1iHqhCKaAdwhGt5YKb2ectBGQLhvnuzSa5xUY6cX5U4HmCyripzQ6geD9",
  "key19": "3EegZ5iuRLenXYcmjPUuDpMCSjmtNir1SGCkEVZHUy9M6AXk6tDJrGcSNvr2VUqxoPw1QM12Cgx1daofacvPDmYp",
  "key20": "52owGMUxM9wNPLosZqTqDjDWLh5X3BWHnSzQWHV1XLPfd1jCpDmLjtndd6KDcaxJv8FXEySkr5nX1isVrMM1wXwQ",
  "key21": "2y5LUkjZh6oTSFocneS7LA7xJxsjr5MHWzofWQKn8t6RhM1CthjmM66uEb6Hx2uo18Q83Zzu3SoZaF4fQ9NH2yRq",
  "key22": "16TDUDMh6D76os8K1G2KcomZ2Uxb9EK7i9bvhWe4Zri6WNZocB9FJYh7AE58BAMPChJWGypvJzyTGEN5dQuYC6w",
  "key23": "46dXPUYDMKL3vTUuLZkoxix2CUz2M3V3DGSzuT2qqreGqMZH2dinQrPSTE6HUDwmmDy1okMZHRtDvthTkWHpMNZt",
  "key24": "5kRJLQFPVx9BGJba3qW52gJrt6RbknBmxZrn7tKYrrJFxfK9ZSWb1qSYxCQ6ASM2Nggo3S8qdYgHhPFoKscdSw5G",
  "key25": "4KtHXWJdaPyHoTuNqynoQ3PCPvBtw5puq3AdVQybL8t8Aw4cEiws4nFQTJfxwjFHin9cjNYFBp7hh6UyHLGZXsUa",
  "key26": "4Z5JLwBnewemYBz919K15a5RnMLb5fXTHq2oGjVYzUuszvYJ5tDSpNbPEWya5CuUL8njCBHxDAR5k6LixDZ4migF",
  "key27": "2F8i5V8Kw8Wo8v3ySwSdCcsJC9SXzu48LRm8ZdB4QTbtFa1FkMG1KPKqGPpJa1Ucf7pRLQ3k8h6qtkZ2ZULgyRiu",
  "key28": "3QmnC25QATG8dr6xLSyHmZk5fHhZEVYaaV8YcV2vsiwDg9JJniLRPRqtvdxx3jF87aEv9G8kcYYtMqYWJbHnQ6ST",
  "key29": "65XRXDUp1jUo84Kmn9ocrVnUAS5X8b2RKpTpBarH65fndB21qRXUNLnnvSiwyJgHjJyS3P7BF36yMzaprEhxxiKe",
  "key30": "2nR3NpuU3MNpbP1se77QeojoajKyb3BMG3SfADtcyejQRNZvmeQq3RYHyaEnFhdmFTSPW19ij7qNdbkk5oybHZAK"
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
