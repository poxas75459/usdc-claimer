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
    "4kCpVyogQMso9qiHdgXnDtz5PMy1RAWuZtxGHZytivjfdKSP2UgnB8cNo7kEwMwV18XUrHcdmT13Tf3i4dC7U8P2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5btcdYSGfxa8tKUSYJLDyeZsV6DLq1KDLZnyynRBYAci6oVaptbnMLHHgPTdrQrEgSf6NpfuXg8ft2x98Fuwb64z",
  "key1": "3AEiRiF7RfU6BheztMdH8kGPHWRTeSWqBkXc8ZH5gyDfPp1y9UajHRL97Nvuqb9ULNu3mA4nREvvjAz24LxPdxa6",
  "key2": "644uZ79Xhc6MogPCG6K3Unf6kW9yeVP95JKmHRPcPUEiST6PcEBg3st2TLFN2AYx5XxP3bW3EaLsyFMZxUCCwvX4",
  "key3": "5pGMRrqtXTSiBc847moSJx6SPE5YxxkP9JSGcEgKi3RZ1FRGrdoXmQXGn6BX4mBRU44q1rPEx7ZpZG9QuYgw3rLR",
  "key4": "4yxTTXWzH5qHFZmpMCC76vCYL7Z1cuepH5jNrxqEo8WgDCNU4Dymk5beULc1avcuMBMsWG8kTTjtvEsSCMXWF48k",
  "key5": "2GHJZxViB82EKctBAcoB5nGz3GJedzgB4WKJXxX1nFn4fVTa2196SX2tceq7YpELURGwG8u3FN64KVM2NCT1LSeG",
  "key6": "51ynZfsxuevEXjkJg6dSVh5kEbeZNMEfZX8mdTRMDxKhsrdVaP7LiTKraMLZfz8tFHZwVZFuWqxKkuycSCZd3DdA",
  "key7": "tWdrVhSy1gSGa4VH7ZU5AfkZ6ek9q2PfCFJmom88ukxBAL5cEx1odr2uqgRbyH2tWtiUqFQ6qPfFsjBdz2e6DLP",
  "key8": "3jN9TdufofvASQmGLYBuzFKzC8jLUdrVB25rpArY3c15k9gJQVf9d9pwMgj39AStgGeJ2oz11gk5xyLp8vmXip4M",
  "key9": "4G9zqfqBYEqjpghNZmDJsXsmUxwBkTdcQ24o49An9Q4UYXLSf4FhTizdAY9JcNdCooZSQAgkYQEQaoxdJFBGNMTR",
  "key10": "iSiTemGRvv2MeyWqKkyKijYcRDghxByH8bVZqNFhiEjadZMBw4YwgJxgrNszMa9uBe13yxxdpzRXQYsKWQaRboh",
  "key11": "nx4Xun6fNXaPQG642Rg2pGcmfGkCNXPSrNGmZ5eu18xFsx1ivhvmBGPP9xSkPubJrhodVFDxLLG9yWh1BDsgJCN",
  "key12": "n8rRj2TYrpzSJ8nCKTLgnzakmKhKyteqWjykmf3Kpnqz9enQ6rraviATv4Jg19WSuSNv9wxVFpX3M1sTEfJUZvq",
  "key13": "2bq3Mz8ELTtf26sH8EHs52Xc17ydVsXy5nWk4YhMgrah2d7cVngYVjpHsDCeZzMPnLcjWAXfTAho1on3d43YtL5G",
  "key14": "3xca53z39h7zBPdSJCa3pL3mVM83Yxroc38vsshQc3erN5RYkgvoydqUHv6LCKbaodPjzPxnbedZd2fZ9QxFenQX",
  "key15": "4RLfwDQtfyFZdydknap1jxAX3LrGhZxmMCTw44b8cjMttL6EtKSHD3kgKmMakZhn5zAC1zFukFuZWcYNJ8KJ4co9",
  "key16": "5xst4sBoDPY2PZ8jCRPAicqeCCgxMXegxr4t17ZBc9uFxzZXjdvw7U1VgaFtLhUrqxkDmLbwtgT4vXmz6SsACMM8",
  "key17": "4MZsEVggRgDVGTaGLzTrSmKVXe4m4b8UAvwakGvCtMJ8KQugJzn7ic68uN8fszVLVdkdQHZUW7759pa9uvg6vNMw",
  "key18": "2mXpvGVEBU8FkbXomgq9iej2Rc8pQQ2k1fm6yvvhimD3DdNm1C8jsFx7EbG3Fro2AjWU2LTNowgpKzJRABUp5HM",
  "key19": "4zLNCaPXVHiRDyNRNyMGemezgpEJXDC21pz8LdQfx2ZwPUJDxmLMQTpDox2PwLaJwtCvogP8T9U2UdMJvFsVbbmV",
  "key20": "2MnHX6RWEXNitTSDduT38tJCtE9YDm1ZLaB7QeKtQyVHVhjANfPmrvG6Xqv5rUBDfMwn9tZ2UWVfj7ZfkDNJCaSz",
  "key21": "1nFMebRgoHKnEnKdXKHZBACPdz68533TnjuVwZkz5XXxynd8kwGpGa1PkoAXA4BSZ8EFT9tDYanPVH3fa8HL5Qu",
  "key22": "2cyjtvRki2fVymt78ufkMQ4PwZYHog5ExXMfK2TibBj93ZTL2nmCrKzM8tSczTdzPBHW1C7eBrtFZDJt3KLAUGyN",
  "key23": "3oajDGWQ7Px5qBDYMfh8JFheLN6HDzMxKPF8HgLbx18VyhLCNSqUDyiw86CRvwMWTEEDPqQXRHZaXzBuBzQU1Edy",
  "key24": "M1FZQo7k6xxvoSAN1P8Tx3wFz7Sr9feDTQwZRvSwPtziMrL416kSH1sPMkaqeFBc7VkoMUyCAuYDDbTkKABhb4E",
  "key25": "2gaHPL2wwK2wuSkqZu731Vdo3fGojqTxgrULGi2KqXsRaEhRWbvMex7igejHJqXyQZZiXfKMEdtPQdqkMXJoLKvW"
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
