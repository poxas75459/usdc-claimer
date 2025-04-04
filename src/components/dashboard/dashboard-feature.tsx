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
    "3SHkBYGXTjJ78crj7vN4EgBvKDGXTzKb7Rdgs8JuheoKTUstQA5qHaxS5LQS4aDtq1bq5otgYhz1JEGM2JS9Fz1L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46qWZTvDSeRKbY4VmT2Qz1CLRjrcHYQRZ4mB5o2mskLduWhNr1XbdYJicP76YrPKgQvpLBF1wbyAzNH32jWCwEkR",
  "key1": "2vs7wSfaFXQhoQKP4ME4r77QBoQE5yVdaMqu9VYmNkEgY46HPpy7vLbcz4DM5oN2DCCULL4brpQXWVLKycNU1bMP",
  "key2": "a34oGQ59j9i2ykDYxM7w3FbcJuVFVkUcmd5qy8irhx2bzWE8gZVmVDNRdvvxzJZzkMwyCkTvmvBNkKd2zidQ9iZ",
  "key3": "3j93ABeMmn1o2zxPt1LHVFQ1Hgk6sW6NAtihQTXCQpg23oVkZogwQ9hmPfVcSZB9n5kuu66TZJK1EogSLLjjmQmm",
  "key4": "4aVUGzBoM7PbtjwLrFCCYtvLRHACoSj9B2XeKMfr6AshLMk4746cmujQvvEoLbbFEgbQWt8WATcMA862f7nGFKCe",
  "key5": "5czVcizXL2FXBT725ePobDq9151stzUxMkPHLwJyqhSRFnft1Uvs9sUNABL8RM5GHyiQsVsNVjRrSFnjkADTdbnF",
  "key6": "2tYdNVNXJhuQJbmN3FRUxSJtqNRy2vpMndWwrMULtXncVbm44LjZNHYKuM2Bd6PPaKb7bRgSEPzNuN9T7zv6J1vr",
  "key7": "4VoW78pZfgfgDQjbRG4DsAETgH29Zdd54Wg99veB1u8UbYMibxcLiPLuPbfthept2RBzCbpCSoJnzYNBHnsxxLYL",
  "key8": "dMJoSbFuN3fcLng5euu9BAfJsn3QAd4QkR1hSTJYH9Gwm8kRdJ1s4pmNJs4T37f6ziF9bSusRSWXpM4ZrKZfPta",
  "key9": "3cgFNteW8UbLciyJM3GcTEzocQ8T1d16GL6gSquV8qBp22vuMxzbBrRkhyJMXVmqPkhCidMwwHTthr4u8E4toVkk",
  "key10": "rPRUcKz2ELeX39rkScDjVCmjWGipZ9HTpj7fu7xvpykchMUf5jB6rKXxk26vF8osVhmSEHCNNw7oUT8eLKW7jgt",
  "key11": "3QZrG8fPnmDB544QWfKmkeykfStUq39PKfD67w4SUG6gPWBFfavVvcMbLj2ECVwnY8xtALJAbwtDB7T8DV7K59cd",
  "key12": "4sngzgghMtUb2LgivqY4NyG5aU2ZJbKJfSrh94HUZGQqfbBajAdg5gUwhHuagSYhLbZ2v3EHvyAGuGN8Cs8bWAxv",
  "key13": "49ajpd7vSxT9WozkBPvzXbAgQdxLK6c9ndyKpYM29V2WguxyRcTz1v1Lw3UpPArvE4hLjHN96sxFkJtQP53wJ8VD",
  "key14": "2T1kEjUySSwCMEqaZMDepjpmuyB1DPgNVNXKGkqhPtd2Vk1jzYrSvFdKmubB7DFf4XbLaqrFu1LeCgfwymiZvhNd",
  "key15": "FfHU1ESVuhsspPqdxiRQGkQJ8pTceqgeir7HjfNx9BcKPpPtUrRDyWna5HYkxd1UXfsytkdzmx5JLUucpo5pBro",
  "key16": "5RkvpMSGsTuSvQtigDEWkHW5eES6D1kZ6fcSjVLR7mRvwaGecMVMrCXnojbriMfyW6rDzZiCBsJqCCkYVPCLmMGv",
  "key17": "2PG9xsGDQmD3QoyLgoKuURhRojiU6gRBbbt7CqozddYtJQqttcjeJNRKPztjBudUkPiyyyprttJ4yvo9eNjkVY1n",
  "key18": "3FwDz42eCqJkrQ77LscSPEnLjWoFuewir3BLLnSu8tGYs4Xg3HuUmUdXSAEzmUeUPH8K6PbdBFFsuUQ1SMftUzjq",
  "key19": "2DUMihBtQZmdtGdoKqJrPBo5gdbRVZvrZBVhr8yeZqDXYyRP41VakTDRY7Umbviqzr7iQ9J6Hm8vAVJrv4sFVrr6",
  "key20": "398Vbby3mPXirfnVRPm3u7FQTHiDXS2DjnfR3QxUCht5S1SfPPKMdQdWo8FGiGCuSW3cak5zv8mJfpeAcHJM7cHr",
  "key21": "4F9B98zJ3BdbdZckQMCXSRDg7uEbDTgEY77ijvzegvBZpBNZeto7TnsRCo5ZcYmMb8grzNjQ3vqC5diJntYZF3aG",
  "key22": "4wJ4QjHeb5hPNixKfBsmigN98q8g1PLmwBi3XU6GzzQtvjspWrr3bWJPN2MDph4bnAB7bSwABSpTbiaZkV81Cd1e",
  "key23": "y5ZwHmxSodR8j3UxobGVxscA5V668MAgzzVAQVhgLvWrcs9QaqyoCoF7CcvVR5fmTuuXx6vWaMQecW6hJeYw5Kd",
  "key24": "4FxxfC8NQmUu3EyjoXLafnaPFLU8GtKeoDRthFr6WzorbLcEoLBSjCktcNyPDH6UwjcAoxw2fxFA33qk5izuhffc",
  "key25": "3j2D9yiVi8tTbFLGK6Ae2rkStHhuFwmacvdgAigpywbfgxpcSy8P6RvHBGzqkhUCc6Mh7SyzaRNbRQtUij5QQzaV",
  "key26": "3w2p8FZaVLLmYBqEG6Aji4dGzLsHsVeoxq2rb5JBxgAnrqiyj5GyqV2j1GZzriPPjZ6XiTkZPnr9YJZi3Q7CNCgR",
  "key27": "3eTihtL4bM6JYFqtHY6Y3d6wXG7hkHimkC3skkMR2oXRoTD2Xa1aMUM2eXNWPHLQb1KQqeB7DBkUbEnqkGBtgTSj",
  "key28": "uUwpkvx5umFff6Sqyo9cx9oBpFRr9sC6dBfFsZSYAGjpGAAHR61DutSa1HkHXLvYLPHqkwe87ZQsmP7GXQ4KhHV",
  "key29": "4GMydvVDwaTZ3PUCJybYbmzmgaXZAXDB6DLjSvimqcCrjdHT8GMt3cmLUUS7hXk8PyD7Qu4n3DJGX79mR2L4oajq"
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
