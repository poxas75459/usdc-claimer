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
    "4wcbXtkDMK1si5CbFHF5WVaFhwuDc7pj4iedubtfxBgAWJ2rVCBJbFRDmCdE6jxXg16iqSxLSoVNhWA2supZgAt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66MyJPcJdha7Wy8NtvSmT2U297w4XnnR7mwLZbDUdFDCPH7nQLHjAN3etN6QBqokGihE563njhHfCiDRvvtUdEer",
  "key1": "5bUP1ZM2CPJ3J45F1bHxGqCBsRbqks7XuQHBrd8LkEUxC1hfcmGxbu99isZhD6RLV4vk5enoTXZNV6JF9A4oHQqH",
  "key2": "2mJTookujBuZQHKJZ7NuG2DbBZyvo7kPmNUtZzYTAdGTvn3sVKbHr8noDaioMk8bnMx3h4iV814Bh8qxPr6u6M4B",
  "key3": "5qtguvsd3s8gSxQLdtMdF6tYZihYarhi4e1aW11jerPAVmXfcerAkmty1iQ3PdXsRt5NT27FDYn5ddCBpmL24tvV",
  "key4": "4xCnLPzRbT7aEPNcRmujnATpdVfexgiESe6JAAn378W1th6W1kHP13os3nr8CWwZLAqbkEcFRcpN9K4o5D8Nne3L",
  "key5": "3vR2vmjSi7toQUVtEw94damEuCjvV3fwN8jdKg4kDZDMBCDsxSvi47X9AEWb5HyKXsto5movUvCAftjxY1an5bni",
  "key6": "3WGBWaAAg7ooDQ8jvFqnrGzX6kjFrkfGbikweL6mG5yAibdcPdbpxLWVbvS1WYhrSmbavKuQdxAtuTQrCz8aQbYJ",
  "key7": "X64yuCCtRSMfN9cMKW9QAqQP8KUs9cHC4P2hAFf23xNJ4L57zKGF4SB6ZWqsa7ZCH9H2tqUEn8bhZVva9uUrKvZ",
  "key8": "3kdhUhnN8vPxWbyM85TPN9DoQjvpd1FjwhcMamNH9epqVxEYLwWZouxrStffVUaTQyKYv69tdR26xTrjtunStLuo",
  "key9": "3J37CUMJdsyWHdzBGGuYj5g2giNJguKWwU42jfAWMVy9WVpei5pX4B8pSuDxjtNgfHe5fRrxSMmS5Bj9xtTrb55W",
  "key10": "1y1RmR3sE5JpjjSXy3pZbVAnMut1hbY6QTcNGgTrCKVz8gkFmVwu86BQpCKgv81iwXUUTc18vYcWQA9KtxxvCjG",
  "key11": "4XkkAxjYYy1reFTV7oTzJvWwRxKt2AdGxeM9eDUSWc5w4BnVE9GsswhkJVmjLyVkNJ7PaJbZx96ErqZN2WWi3EDh",
  "key12": "4xPRFkZEgcn29RyUodx5SXyFn2A3AmAU482gpWgpsw1qiNTYERMwxS3wdrP94HgPXTu8CrwzHiNu698MHCn57LY",
  "key13": "4xNspET2kMKgCj21Dor1Y2VTeSmALbsdYirGiXkTi8S8n3gMnJgkjzDPFeHRV5PDEBnQcM5NXDoWw24kHE9Ywegw",
  "key14": "48iy7jAcEqdSX436Vu2LprUfbr3XKTenG3kJHNU6SX8NMcFEp2d4M4hTKH6imtih27br2xMmDZYrDVDFnAt4JAmu",
  "key15": "2RxecHCpdSr9KTbcz6HqHtcGW5P1SAkBsj2P7rqGZ4NqzhgNPVKuY7Ux3CzJWiUyF4pb51RUdeWnQMbVAQapEj2m",
  "key16": "5Kq9KbzXaW6fyyz19H9WZSo1KvaPyfduJz1r7xCsr5nFF8Jux1jAkzPd13JPjTsDdHd8bS7C8nFf6iJGBZb5edDQ",
  "key17": "2uy6XEBHmnSRCgzZfjrH5qB6xsqJDKtEdzkbsC6BPCqXzHGswRRCnCLpcFyjSdoFSjjBynMX2MxMQsdtuSsH2Knw",
  "key18": "27jj2M4Sdga3mbT93h9gBed2ycwvqMdhKyHuGemHMmeEbsiSP5S2pJKk5Kx87zR8xFnniUshjxuEtqt79f688eV8",
  "key19": "4EY12QCMjz64MdRQUthKrdioR5gnhZm6BUm8tosMKK94rhtTmcTZPpWri8uPriBeXNChhAQBoW8W1sSe6aunoJXa",
  "key20": "5FQgnPZESikZ9xUo4ehG8CFMNiiLqcYnbYkowddCC4GpU7Q7qELfgwtzXQ6tPQNHMVduQWNsdXzpPQLJFTdbhqbe",
  "key21": "54HPWW1e3CjztYCpWGYqAzm4CqnfePNe1GASEYpfQUBtEL4gS51Eiuu7iVWbv8b3TamrSUEwtX8f3m3miNKBLaHT",
  "key22": "4Xyod22vZswrqmX5WWDHCHGWZrsrsUGaRb2Ds2iM7ZwZX4ep9jzRMu3Z2r54Dw8Dajry28ySEZZVVYTPddiHrjhZ",
  "key23": "33fw7T6iPtoCiqUBMyL8WdQxevNfjckhEdsuGg92b4RjPuuPjeL5A2tciDpFrRMRRrkrszQSBqdHPqzxnBA14Jxa",
  "key24": "32KdPHdwfdsxyvsTh6uqQUKcpKWv6pxrUm23WCTezxofc96JJgNVaoanc2AAp7MTFTvsiq9eandwFg3ZHSApNmpp",
  "key25": "3xNxDnj3w3McBKgH5HwRcaraNA7EBebg8gccYDtQQ1cR8npQxhgkQ9Yi5d9PiEQivrk9jexQpP7Nk3SguAizRi17",
  "key26": "s3izhmtkKhs4truHYmb24xDqQBN3cecbqjKmYofH48Edbh7EnNZTa5NQJh4bym5r2LTZs486W3LPwrW96VqhDoS",
  "key27": "5XUDFEYbqKjVoQUKLXcHZ7JaahBGfSwD7no4hPBt551xzJ9a1NnLBRSBAa4LGjCyCcqLFEz2rTMfj2FZ9x5rjj6L",
  "key28": "54iyDW1xdyWJFeyjH3ksc3WxKM9mMMCbmFEdJuCDV4PpzBPmtZfscsnMcaKGyHQqXqjNVep51SxzSww7PDymU7AT",
  "key29": "4qGF5ZwtoCZrfXdYFshZxkXwBksJYhnwgUNZH6h27yR9yUL68bMvUCmcDHPgfE9E3bFSaunaFsziyefW2jHv3N2M"
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
