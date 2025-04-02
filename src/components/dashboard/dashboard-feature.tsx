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
    "5tLqkqVE4J5fQkYy2YsHC6aNvmkTJAqXm5BigPJUz2sxJfpFjbwCszG72JXTmBHHibR2TfY4sBTs51PjJ129J1C8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gJk2RVJ2iYWBRekqj69YanDWeKkVF3PPYQFaafJa5Tgx4XygHXZgL8jqDY5iQ9g8uco64PVAysjxbMRWBWqLS3h",
  "key1": "49fEnHhVoQECLr6ssj3cTx4vxqW4D1h3HchgmUJLfLWM2M4Pm4QSJRYynUWaVDMphyXsHn24EM9qJoAS3D2b4ZVf",
  "key2": "4Gz5Ee5Z3kSPwoxGv2txM4XFxELVDoyJ9AyptJzAge8cCVmuSeP7kP8pXn7MBgAFu1g2E9o2aPebsC7zwVR26GVL",
  "key3": "UTJH3KdXDUFi4v5g1Uoz4TxNU7hpfd62munaMpqeC6Ur9dRsPpAWtupRg6mb84cJ9XM5QXUz7Tyw1RwD7oM1smL",
  "key4": "4S2NHchgt7eDpEkqn3cRwCWDT1Wndtixtj5DCZzViG3bH9mUDRDB3NAAokLxSuTpqoRDh5praYC53retaMTELABV",
  "key5": "2ptKtTN8AqCciApBdow7wu4XwBfwbTWfQ3MmM717PyzzQQv9NCohG4HrDXBBFe1QpazTXzhFwYK1CHuFNWUFkCkx",
  "key6": "62fHhiNroSn9SmUjTvcM8uUsNeMg2Z91jH36fot4jngyubUJL7nB89vUG7GeYEN1SQHfcSKABLDMnriRBVtKDM6j",
  "key7": "43EwG73stsqqnaAnsGqZBNQbxG2L68nCcC7E3viGHsJYfsVKjD7pogvKfhaBk1cbZ7eESuD8i9dT1fndgBsroyPs",
  "key8": "WM9hAMrf7kZQ81DusG6mqKQTr64Dp7cNPmTBSxeFHNhixsLCS54wh13hBySLqoewcu34x6yheVfBNT83PP2o1U7",
  "key9": "5Hehp1f8gE7UBtzFRUoUghfTywAAKdSownuHUqkUEDS1fLs2AaGScut2MmEcVPxpgaCV8RFpQjSNKXeixSf7V93P",
  "key10": "PjEAqS2r27KtedjNziWVzLMFNQLZ91pSC91614tZAhAqWoqAJYxUnRiAFDVYu6xSKmGnakUH9aU9YC9zGdcf6xJ",
  "key11": "5opCxneykqCJWD9f3J9K4sBfahC8r6Eykrj5ak1ShGSj2uNXHn94eANsRp7xzujQGJmhj6fNjLNyRerXfsiwmmhA",
  "key12": "2n8RW644RP6J5MGUWcfMhQnMQesiFWrnfMM5J3XDhXZVhDqH1FU1KeVpjKMR8wvZYmGcib52UFc5T5CyhG12k1ga",
  "key13": "5GY8vGwDe6vqGB3rECQcDaEXdvicgSu52iWEk11mbuzx68McSKbR182tmysUZfZCyKKjC8QymBM3DijZ3TWb2G7u",
  "key14": "2pCbXzXtNuxzqjAYwLAVSM9VTEW8MtKZFsXhd9wpcRWxY7gzxmdyoVQJTpeGbS1osXZ5GnzTTDyjcSM48NdLMPzJ",
  "key15": "5HRg4iQmiXskkSscsFPhokaRoLJCGpid48E3xvhZmFpmDFj4e422rBP3hDAyQU1hiHjdwY9C9n4DXgPmSwwjJGrS",
  "key16": "2R6Y8ap65jwU7tSrCS2arx8EDwZHs3AgbmQXELGGxVMyyRQwPsJnEAa2Bz6eCJUeWstoF9UdZ98nBrcqtt7fqpUr",
  "key17": "21CtqsE8GpPNSZM6dfZ6EbRZVcRESKePP2hHRYmnvxLL3NyMwg6nNZXMRrHSnSSa4rkGnGz1W1qJ6VP9fvZD1PyK",
  "key18": "2w4fDVpmi16pkQ7Wj4ZJgRGRBHvfSa4V7vjxdadv9YkRhZ4tPsqrTDCNkAWwYv98VffJ1zHseDYTfvDuSXQhYRQt",
  "key19": "5RWoswfGfiWFw8GGfFe9mfdjiHeFJeW2YrgyNNFQ2ynsHQzoN2UbWVftjskdetR4NcXRBAyxpXkHFjJx2nXHSDq1",
  "key20": "3TyXoSJoYXBfsFRALxWSyBn3n4oMxirpUug5RkXeztfTzx1b7ENd9tMrmpJWtvXkzisC7ixz9mahVsagb35S8Mtz",
  "key21": "3fmRKdFX1ve2b4MCAm7JhJxxbQNCkWdQgG6Sjsr78YkrmhVs5Zzxk2k1YeMQUtPrNXjuC3qzKeJbq7N55jj8GQkG",
  "key22": "3oi6PJsyKPwj2FmXEG22phWDLZUxoNb6bEuDC6EYUvzNN5vW6moLNhuPeB832axrjaL2AyS9tRKWA2ggNq848tgJ",
  "key23": "5ZFZ8bNTeuLE371X3fz3tqctev3d19w6zos1iYp6emyBoEZGPNjyxd2aNM7xMk7MNyNHVFF4x14ibfDJ95kVHDCC",
  "key24": "3C6eeWG3JtLGhn4FeydeJtcqG9XmUaiFUxtrxB98sJoRwX286hVybEZiZgaEWYKfCrsxDJpuuAduPURnLYpgeZa2",
  "key25": "3cn6TnGC9gDEPYt3ZQQbNVqNtWYedBL7im8A9LrCeLcfjtaHjxQ9v4HAQAmhjfZ14oUWDRf47yENdPxZxMH7zCn2",
  "key26": "25kQFofgMLqZRBRn8cinriQwz2DcEHWFddtht33en2toTwKym1QAkrvdWjtKsF4NmHX9qPXogStqNRAPES7yjMBR",
  "key27": "Jb9Q1rHB7AdTKYmXeq7jMJjFSD1EtfrVf2zaaNdMz8oPrFZVCb3eDxkAdPpRN6qQVYPEVqKYm6WUEC9S97q7jiR",
  "key28": "52oCRkv1eUjvoRemz4WPqgAxBv4N7DT8B2PaaZ4fudTajmbywnAeGq1Uu7Yd7GaPAcEeoaE9XLTZFNBJZP4a1iEu"
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
