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
    "2P428JDR5BZKVNmSoKyvSWjt6cd8LgxhEGN2W5SnAbHhZnUdLQWjdBnj8yoZVLsJWPFta67j7iNAPW845d4PgcvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9ts8kuAbDmHj2Fcvidr7cuv9TkLzvS5Evn7zSY88xLwG6cdtC5KtbWQUWeBDhEuLUU7MrFrBxAoYtosEHRdQoxw",
  "key1": "M8pYyWawwXkQrv7FX9wkSBSLbTVwu1yWfsJmbr2CBSp73j6G4h9fTX6774BtMtN7Mh8num6yjWGkYZsKJpUyWe3",
  "key2": "MbSWbwoj67spaNtLi2rGAND14fVQ4HkkoW9T85GxT4hco4p5aeyyh6vYkTG4P1crKhCh7d2LmZAom4fjf19WJ9y",
  "key3": "5Fxa4iZJkCBMyJFg4zYRfnhEVR7JjgtGCx5GSpmagwBSg8zaJijddoStncTwrRNzjXQhU3uYcsbXrwzm1NPyq12L",
  "key4": "4weNP1B1ajnj1kHBDfNCrTvYGVh2Qhic2qL1G4KTPLwqg1gAVjGBUepodYiaRpnbMGTBmpjaKseWAoyUZ5pugTeP",
  "key5": "4tefyzaSx3mdCvbjCicx8DcUW5NzkwzfxEGVvqmi2NzLJjJ1q95Wi2Vca2kirKAeKcRthEXLsSrjzYid4ZZw157H",
  "key6": "2zeDQX5qtXve3eS4WBoVSk4YB9oXfxe8drxmWvT5PfovaBL5i9Cq9uYy75uff7YzbUMi3khseQEAiy4NCPyF7qhn",
  "key7": "62CdPnqDLs3YueczoWm1vFDDfMGBX1T3oZB3tvxZ7ocziVqL7F5Kd1VpAQc5RXbvkPJuUkazwjoTJegpUmi1QmbQ",
  "key8": "2BwKA2uVNDnyX6KK6p5wjcZmzkp44icsc6GjNDwkKdkrS9YnJXRXoMP8pyvjGmqQzHA3DwugbdGJnhXFSRjbeRDk",
  "key9": "45iRPREF3UNhsqzGDsJRaeneK4dcXwz5vnna5sqVU6kCYDUE2B81sqobTmZqMDy8583H8KMDnufowgLQYdS7APZN",
  "key10": "455x9qpHZz7a9LGt7MG3hbqcAVTJ8FoYKfK9XDEVEV3CdSWgxKUmYapbY7g5F5Ceh1CW9EnhsWNjSLzZVNW3YSP3",
  "key11": "JUAqqydYVY3gPG6RibTLZeMuaepND44XgRjVXxVzcmBGo2QGWUJsyZp676qcohpAFFF2ZXdPyH6k5uTW2i79BrH",
  "key12": "Jfjx1Fbd3e2HUMMLgUYbaPCN6FJ3hXxPxqFKYx4LSDcbD8bK2GeB3tftPcNCgEsxjABmwhqbjZTy1EhkrM5TvGS",
  "key13": "2rh3Pxfrz51oCpm68G1Sq8SNLbF6wRD5NMR6DBU3LqR2LJoRejma8U851VfjSshui4EZNof73KzwMGKZcE9kNgJr",
  "key14": "3jiTHy3uvi1vzQ43V6EULm5Lt4XNeJxgjMSTbQxsJMRQ9N8TjAZXwDa2u7yBc3wtXZdS23YBwnvkFWv4atDNrHtn",
  "key15": "5kCBGwrWBLqbWWBj3Uynyh9GBCyouppKYy3FiCnvoGhFgCyvRmXDjFd7TAHUvAvs3EcQCmoGkXrWHi7ybwXf3dSw",
  "key16": "5Dr4rzAhuUiTx7YXADqoDaWzTMKi5XL3Y5cjhMhYmvhzGw4PULbuTX2LPr58CYjqqrwjX5H9PtWbW4iQgyfXrbsW",
  "key17": "2WhEda5bhTQwutmVwMBWY3oJgHsgTQBZbHmJ1HCZC9QeyhvW9hhqRDLhRbdy9tPEEfEtqMg7n4YihZf6Qhy7fCUn",
  "key18": "4HYzscH4aRZJHfx8mJPwPmVLxJPSCSdMivD1nQ3ubiFJVNrHE32yDhRePRFv3Fzzp7jSyr7GVE2U6usFfj1Uz2oJ",
  "key19": "2zhcxS14TQAzzLhTRhjRjd3wR8bEJPpbs9eNktw11VQWgKg5RzK1JQftNAe7T7t9vx7W7fuFaFdELmNFAEQ1pbyS",
  "key20": "pGmYiKDrBDGbqizidCotsULJEygLQnNXe7ZidiNmFGFRzXrdQkWSDNzNg4UCzKwzJd2oX2ggEJDiCFsbV8agHa4",
  "key21": "39W5BmRMLDB39ikvTBGcj8VDKKBgcPYXKX4bueBrqskiywgZfbd5pCDbwYKbnniHrgRw5pH5XB9aEtbhz15Pj5ib",
  "key22": "KcSW8bCjytHqzwCp4Br23462zCGVRd8ehwZFmEuXkxZB2aRWKxetrLwWveJ47bCGYBSWrQsNbiZ2wwKhodCLhkn",
  "key23": "3EXiHu463xw3LXXFfYvJUDL7JoWr9uAeiu47sj5gDDSihBcsCiPbMqubiVsS28VXv4FUSENyP1YMnU6FauFvJ5wd",
  "key24": "5RwNJALbCfyFgZFmFT6ECJPWzEDyQtnUqRnNoiM9c2wMPZQXsLheeUAQzKhwf5NPDfnVaVTqXYW7BoQnst38EcVh",
  "key25": "38mp8ABjt29YqNhoZu2GuoztwYEU6fSUXc928teudB6kNtq3WwjjUWW8kMqqotoeHUJ7tu8jYrbFpdMPJUqFxz6q",
  "key26": "8xTd9etqY64kTqxf49XDDLew33WY2e6zeQoSoXLDqS63uYuMVZvdS3KHMjjUZwucd8SgC43ZuzKcRb2eSapzbQZ",
  "key27": "5oe5piGdBNdT9P6wJqHR77Tqtj6xctZH1pTZPyTzdNvNRCW5k44zfoXvMux1M9ZKeX9uoqgScW54PCtujR3gYkfX",
  "key28": "26UzoyPN5LZw7Z9GjUR9ncGc2v9HPr3UD6wtQbygrZZAuJPSgMoSAjf8qcHCmQgpb5hL576jEeoVDwTBxZ31JZp3",
  "key29": "4ivyi5dVqiKJPjZGVximiEjKJymQ1t9E7uHNQH65T39WnmLKzKcPba1pX6t7V96NpD1YQvUcCMaiF4i2h69eCyUe"
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
