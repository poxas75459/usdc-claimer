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
    "4hVXrceh5rTU5o75JvWdy6s2BcXVSkJAQL3yi2BQM2UcY5LC5UTrYtdmjktGYoz4whwmqBs2vFyAYFTkhTBwQ8MM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XKX1UDdpLjWAr7YLQ2mnKJYFQ7MyMd54xyHFcyRKPhwCzVfzYvzMnnR55aaMMDT68YPQiaTxg3yQRzNxTgxEkdd",
  "key1": "3fJRnZFsX26GoyonhcvUVaPSDaLgAVqmTPm6xPNrC4k5JPEiBynxZZPhDnDTDFjhxXMfAuPD8eeXhqZuwcNNbvNQ",
  "key2": "3xUCeHEZ2rsdxKjYPzo4MobxxeVEAeLWEnjwmXp7gik5nYPtTZaHCnkHmGDWxie6KnC9gEZT18VccvXnrp2m1o3L",
  "key3": "5r9vEQiQDvWzsaagJG5WCqtJVXKDcRsRAUuTmZvu2EG5CYavgkSYV7PpnBcNAkXgDaKtLr2mAuLj9yikqUSuk3PJ",
  "key4": "3gSknKmhE3ozfBqP4Dj3TEZwNTtMdDP32AtTHccY9wxZawTwjXAqZxy5x9S758CzCqMcBAVUSU9natGH5WqiWJC1",
  "key5": "5sgcV9vk3yAEcdeKoSSdqRsnewpVb2C3WjsZ3A2BA6sW4sRspgbDzQnosgdQQRshKdtdc91RgK3hiz7AKz1bSDk9",
  "key6": "4eoduUzDUBM8Td1UhzYHCfZXuGfQdXW5cY4aW2JVGdKpvVfYazyMX5PFDDpBKszRwtxAfGpr6KCHkV7hFb3G6oPA",
  "key7": "3jmrUHproVLiG5DsoY7FJL4RKFTqSNn2kv1sMRzWqgaqExeNa6Kbnv9vTDqGZygqp2qwJ6yQNFpWAZhDdmCreViA",
  "key8": "5K5kuwohbrrkpPJGHjrmuRj2c1qckeyz9KjupR465UH9AewkiYGhXfL3hzGvDBdh2yAKh2aeBnNFNEjUUGM2k6Sx",
  "key9": "5JXcgFrJbCoCeVtrh65eAkqokRk4YTDSUPAiCXLuW7SijkCMG4FdH6w9imLTzSrzez1ZVQRADWqSRJeh4Wu1MECL",
  "key10": "5u9ixZCxeU3Q96uzv2Vk81LBgH2fudHrQGbU1HVvowyXXXdtyqNsexk9U1TSoqnSAuho6xoZ3hwW95DpbC83dutG",
  "key11": "24gnSq1a5m2K9XTGzWc3FmzWNq8hjez2F9mf6d97AEVo5BWYvpyzQrkwTKaz8b5ANFZb3oDBYDewLh2WMyNT9zRW",
  "key12": "YRaCndANWajYk5bygP56Zt2opL4VouS9UTduhhGttg3RMsf44Eo5SDueoogyEHjMQZeUAUEspe4tbCCNpKJuSgb",
  "key13": "5Ne4hBSUpLY31BSkvRKSdyjRA9ZLVsupTaJ1Fwtr5Jjsk3LV79NZ8ZQ6o6K8NEar2zAUZFcs9bURhN3NG7GXUDYE",
  "key14": "5jMRnMFXijWWueuZvZYdWfFckUfXNTW6241DWQTT4wgdeQhah3xB87oKvpgGXPbvBaCC3N1XX3CRzufmPyvKpHYZ",
  "key15": "2o3RjggbWWaq5CNEPct1NwqcZx8QmbmZJ2mL6Wc63mKH5pxo5FdSHHzGgcokjrRbVmXQtvrcw3azmYsfSbJecBza",
  "key16": "9GmJCbnqMt4eiwbs1RW4sVrGqmQaupy9gZQkbgTbD1APvqdQkGLGnU5cWrgkTNvUtFpoZoC38wJYw1RQvUvB5Uy",
  "key17": "YrsT8ikFkmVdCBadzkDupHLsmrXC5qqWiaXfbGjqPtsgGeyTZH8onAzcd8TBo2AsmKca7caHfhAvsS1tyTQ68Qf",
  "key18": "4ygzzdZukbeUMqr4fN82wSZA5PAp4EBrbZToeQwNFxi81j2BwQ19dMM6KXHLQsF5EbJj8umsFXNTqvV3x8WkGJEn",
  "key19": "43C4M4MALkP2QXhTNMepg74NhkGZtKg4rPknVBFJ2nYjNYdZZCw6pdYzYD3BPGpvusjrDuWaNrVAteUFCmELoeTs",
  "key20": "KeFM9ojwafNu5L5VkGZ7K1rFTYrQZeHhjria7z5CaJ3AUUCCj2rEcV7DQ4ynruAuwz21WDXQ398mTJVs1psjvyK",
  "key21": "5i7WHfMfdeQ4uncLoFJUSZiQzSHAVPrTSPWV1eXm8rQ1mRq2d76oynNQrGBxHFNXVvuao4kRbnn5xQxoHmjg2dYB",
  "key22": "WdeXL6qFhCTU7KWFAqanUJaNQ3EUWcQLEBKxCsn6A7w8WeR3aC6Fa3j6hNZ3d4KCprW1FQDZ9edYFTkq8tCbqS3",
  "key23": "2Z14gLcPdpVz8S5jrPtvsXzjrkDSBiHpwdid66JroxsmjSndZLSAUp8wMVV3ho8Te3inetQSih2t5iBtEhrmG5Rt",
  "key24": "2KYGkyPrLw1tscdCg2HdPMK3pXLdHSRtxr35X9fU7ydykbWAcJdck88QEzTF3vEmNaJvMSFJveqRDb6FViGTQP9B",
  "key25": "5rxLLAdbge9rZ34QPyPdHnnZWmP17t9V7oh6aKK4fMMurHyTJmi36Wgv44CJSk3jYKzDw7zCRc4r72VvMDDMd6c8",
  "key26": "4nTkXFRfGDekVN1K2xKpzxeFxSDsQPMwp85RehJ8ck1pGaHVY35TMmTPR8BqTCFk7dYbpymwHYrfFobX5RpibFYa",
  "key27": "3iaUcV2BTK8tUtiZFLjUgToxoPyRrGNDYmvb8Tjy3ybZsvJUj8eAPcFnreP4AsV6BYTnapLzeSvsZkxTeW27PnCT"
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
