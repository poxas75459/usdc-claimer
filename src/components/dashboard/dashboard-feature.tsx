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
    "466fYNqapkudKRXVnWj9rsoqpgkJsN9rALrq5PFKHN71Tf4msuDhrXNYMbsLryh99M9wHrfz9nmp8d3y8orvZTdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CAWvALMnPuScwVjzTQ6XrzDU25CP9HrZnxJmevmMK15B93qChHePzFQbPuyFzXu5wU26qufw9aNAYxCTMXAxbyB",
  "key1": "36xQQq2w4uGyXg9ryFAPpqkF2hVeCbTjSd5CgcYqDjAELdb4b26MqQZXr9dJspZ7gfbiCn4veB5BHD7nSV2HZpHc",
  "key2": "3BT4wMLV2g2X1iBmhY5iyHywtTJ9avup5aBP6wmdaAyoEM3qamX1iHmLhYZ1KnhK6NsJGeY6kehxtP7FMJrFhR9m",
  "key3": "5x28SVUPxY33tUcxpTFZ7zePWTonhSRCHNhr4gHt3CagzC2em21keMWu97dkhduUfM6BW5HFJZ9EU9AB9SGdH7nZ",
  "key4": "3gChNitgGNajQRhdXvoWCewbuS1vYX1zhyDvtpt8fLKpwfowkoPt4QMbE1zzdcvXqoyhk97UaBPjyNQjayrE8pHD",
  "key5": "4oQic3nMDcXrza3hQX9YSiwKWEf19AgDL5nNLkDMr3MCCDZSu9HfEpBRkEJtX7PBQrZs2AeP1xsDhSNncco8FYEq",
  "key6": "4iNKX2zthgt2xZ898L5rDwyxVg9y5E7mEoii6KEjKZN1Yph2oZH2Xj3UTTkB1yk4QgRedWU12gvYKu9FyFXg3wuj",
  "key7": "3BCwepiwDaHR1C5k11xrqUx9JA1sZfEYYijcxAWFfB8x4KRNe7viyXjmzWa6vtoZ2QoSqs8fGfLKocByE21CidgH",
  "key8": "5DfNSQntGDHkertGzeDFg2bwx6S7waHgBGsaqVL4yC6SdpPzC3VFhXbbYZFVowL7Ugo5DJeWG2ZuwjArPyjVCczX",
  "key9": "36LcBLHLbv5Mes7Psio84XGJmBGrMVqNPAuu7aoj921Tt9S2itKMtaFKyZUEwiowwAm3BroWsKcRontGtHrMm98T",
  "key10": "4hjkjojLbQoEDT2Ft5H9GSmj7GAVNEtYF8r8FaZPrkNcR6VC5eWAG74xuPeHisMJiZw3yvmbCZto4q7WH7i3tB42",
  "key11": "5928Zh5inLnNMmXs4yP6jtKN6FPYMnSC7ZsYN5uwNKamrXhTnWTYVcAcML8E5Uq2af8cZ2ZhQG8BFBTLgCzsvEjp",
  "key12": "37MRnEQBiYUhHpcKpPg4rJp9ocGDcaADKSSxyYL8rVirj8AB3x7D3NsFroihSDHjRd2ruKTNuTVf2UjMNuKakeu1",
  "key13": "4a4BGVfhCWTrcLb33QdtHDhp2G3Vx2G6UiQerX32ve8YAmM5zey7wwd5cyF8tkbstyB1RDV6Un8FnnYUCpEj93Zr",
  "key14": "GAQwPmY7oa6RgVijycYKauTTRz4JnuHP7yNn1qTtYptFjFfqsA2nJn5DM2j6QPBjASgTuJhW6S3XRb4uvds6sTE",
  "key15": "65BRQnoCocuR9cRnpVXuxWnEynGZewt6Ye1J8S9dtCZrKW16iaFmnHpinUSnQwX48PLaVscksNJ1SRqzmiDee61v",
  "key16": "mvL1yCsBsnqimkDJhofe4dghkrZqQ6YhXtsbWxkhj1J6CGBN856PxAXGLcRdXtrnXBn7fWonuzSLDKXYvA9BH5n",
  "key17": "3Xud9cYDr1zXUMMhs1UZGxUmKLfe3K6X1Zb6LZHDDy26Jkos9xV8CoRWLqMT6TX1BjVt1H8tg8anoqKGfCEFsqPk",
  "key18": "939qcjNbJzFuNqZeMmtSWDn5rCrbnXNLgLrCLpPgnxECb9fxweYb9GBxMWydh8r9696mDgzVi46YxGbmVYX92Po",
  "key19": "4QcAQgKB94LMySBs5Qs3p8X6Kij1c2F5WDiCCUJbmehkkbgPfGbLHNmtyVe8pwmUnREtTKkrXEEi5ZLLNtwvfqQh",
  "key20": "hsEzSLLGEGXBik8Z3BiQCLDEB9CzryHf5yqekkxddT9WcgzvSjCEPf6cvxJwgqNe1ZhPK7sg6BzhDG7K97HVsBq",
  "key21": "44bu6DTSe17mDMz4XxGS5zPnKdLCy2TRjXQGKUukF94rtUBzqRRk54s7efzf6SLSub2JnZjhmjjstq25bpYZzCqm",
  "key22": "fz5TyxEc2H9Q8kBPYWE2KNBkGC6Bvr3ZHN52ENri8qchadcV4JqHwyBahUqCakUA62hq1MdfMG9qyHYBTc2eEyR",
  "key23": "3w6pYpk1FCcgTZ54jfhvmLSgnDXruo7qB3uAVRR5cDTN9ytKvuXFCmpyq3wDJ9Fh2zm8dYMZGrn1QDZJumgLXkFJ",
  "key24": "4qWX6eMtK9KNfvbMwCGsWbyRCqXVrYRWqV8muuxYFQZKTETmPr24xoc7Z49KbBCwouCYAjP71WJxVC3FYjcTRcu9",
  "key25": "2SiDdUo1ADknvArDe9RMVcHStrwbyMX4MMjoS6R578VU5niwaEfcfYqhgBLRbpL4DUMAQWEyGPazwyPPL8vjjZwc",
  "key26": "4fPDMTqmowUAg1rVXpcTy46tEQwf9GkDP1cpyHTRDSTziy9bHAo1H9d88DETvP8joe2F4EraiV7Rk7sAyjpCHN4V",
  "key27": "5Uqma5w6Hte42q29SfXAQLpiTJwLFZeQBSsLPVN62mK7HHJyPXMzm6W4Sz7FSi7ZwSP7XLzQE7gd2v1hd1SnPH4P",
  "key28": "3BWDtpa2myFB3PZfPhz9ygg1BuNAmZ9SxKJzcWBPDvw3xxdV6NoP9vqUQToGobvMgwqsVZThE3jxg28MdwTHyGGD",
  "key29": "3mLUXeehMVUHFq8HYiA26vZ3TGA4a7yF51ybioy5xmfZUrXxSywNKbq2re13XNJpKWgiF1w5mcQWzddYSzv9nAwp",
  "key30": "hNXNmM1SsUubkd2KzRdgWh8yT6hsdNnZics9XAG4uRKzNw1Ah2Jez3wRXsp6aiZxRPFMQAeRwS5gfjoMWUhECUu",
  "key31": "563u2VHt8Eo5xUJMM4nTc2zqxhgcsENNhH5iucmpeSW2YKXktmWHsqku6c8XSwN3WqkMXNqy8Uqd3vMCjcn3FDb9",
  "key32": "51Hyqpx7ZUXdynP4RkV99Bz15kKbbKfFPaoqYARtEZfiR1TPMFxcF8ybT6CvuFbHE2ufEAHtHbCNM5GS8cLvVmKF",
  "key33": "ifTDuLXAfsiZbhH8YZkDjBh3DjdGQ9tsL4jNdEMSBQSKtisLKSkz4xsP5XMRZib17VFqJDhFsVyKLwU48rGpAZb",
  "key34": "2yRZyaWtdHQJSMryXFceMDiTff2SgfFCJy3ajQya7qVudyJ5u9YbV1x8du8MDrmNgrDzHr8NqfnTvH3KY3fYSDjj",
  "key35": "derRC9vXQYyuaR5KDuSbxzVQyoQTDwvdJfizb3igkqm7fcaWUTKjq8uvQvSsCNctkfhHPgnWj9NcN5eiSyNtEzP"
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
