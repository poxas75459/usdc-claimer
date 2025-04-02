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
    "3FKRQSoCRrUdVxQKqhEgT89ZRXtjbZSaE8xPtzUJwTPLadYhBe5WJGGJvC14n3opwLoBpYyaZG8ybetcjJ2X6Fcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gxUS6CuC4Kq6cZfNjys1c1eNmm2VnBFmo1qMw7ZnY6WXczQEt1KCppLU1w89GaAL6qGALZes9CkVEkpF6VCuULJ",
  "key1": "41MiMpmMuR1uy3c8b1Eu1781dJRcBUv4x4xXcwSKsvJnQiaUNVgK8m9eADYbyWnW22RAGf1AXk2tDVCkpyBTsz73",
  "key2": "2mJ5DK9YJTwzMQTtefXeiWzxcbuGgdC25VBJ6uKPZw2UKCg2UrLgabVMdBn85muBPLYPEx2TxF69moZRts3StPFY",
  "key3": "3rtW154SAC9psDdoNFRQzadRuqprdVuVCyTYYViFK5HpWgtFcK34fb6cjjHi8LBRHAgUhJoqXACdajGRsc5Dtd3h",
  "key4": "j9JEdDw6iQyk6v1MAHw9nM4Eh8XRxYzTnbkFUgBdJ1xkifekY4K4VPtk3XhxEgT1kDa43ayHWepn1rPvDtmttah",
  "key5": "3EhAnT4qL25yhG9Fk3y3hVY4FyPhPqbwH1jY88cWGzsM8jtUDLbszZibi4ZsPVHYk3VHxKbdYpCCrYCxyF6zwF3H",
  "key6": "4TZtiDNm8WVXi8kBTgd7t2pk1WPLWNxuT2LEAstC1Xm8VZtJwEonvHXyVzaDUer26udQUUCxUfczWsvAiafpVe8q",
  "key7": "soQAUiwpBwWepsZ5Gq1jWyEgkfdxLR9ZYwRwmjpv47wPPLyzyGdq7hQ9PfGZWx2npohHtxk2Nfwj8quGx3yj7mF",
  "key8": "4WhMbh4SVXRbgM4w7QeMqePSQP2yGjkufRergeTAViReoXGdnDq6irpVbvvkG4Z8dLhp2eyhhHFJsHPqaSZs7Jay",
  "key9": "4ersG98GkV53joXQNkyeMiXFmS18E9cbKxdMBCYinykBPyDzTgyzNcqGAmfYtzgR87MAUgsFpfB2WuYxbQu3vTHe",
  "key10": "WoZXZXxJnri5ZcfiPxNP4t3tu1LFtGnjzb3fveP4fiPosCdgZPSmrqHQMVLxB1FpouCR5GW3ggmquX6Nbru9WiV",
  "key11": "JKgKxP3H95uF8Jy4eTjJv8H72v73YdzrUF5B1nCbwQEHUEwQbfkfEMqsroYXEmPGuNVuduJyeY6H1VVYKhPWKJC",
  "key12": "3Dg5g9cNgDw1HYmQPhVdxLBgcrp1JrAWiXa7bt7u1q2MerR6HgzSyrQhaCvYiMM4ccg1x41aaYGK2mWkDBQiK8VN",
  "key13": "4Dv2Wq7NVqcupEJWFCKTjeBWrchoqrzcz3dPEf7Ac2wcgHcgemhVtjsNDYpzBzMeCAbSoLcWJh7DW2Zaxez36L6a",
  "key14": "46LZRZAQ1HNtL4rn65jPVMJCqzZVrTiuL1uWFDpiR8PCUsARvgQrfqvP5NPFmYb4nK5jhD6ezPgQnNdWmNzzSusF",
  "key15": "48BSkfL4iXXmQdK4mseCivQw41Sx33VpvTMcxo3WmmnfktV7v2N6kvNqmhLVqySzKtHDAr2Ub6fYiGLSfhTXZM4g",
  "key16": "PjJDJzZbidyCvSNqU78a5dwxkFrgwRqyxeisuFeh3xqxMELFkhzC6Fc8LJf1WPWE9L8Qz41ugozKWFrHFAsy9eQ",
  "key17": "KU6SY2Ka3RfxJXBpo2hyG62tBcey25TKBAM7qoeJtMQ9ZkaMsYoxkNDw7pJyCPdn1hRDzPioiHHoUK2BSwBZRCw",
  "key18": "2S1pEFsgJrtfkVXfYmQrA5tSS5T3XibP3PTDXLgXASHo83Jo8LQeVQgoHud1YXAHCYwAw7DTwZQL6yidS9xKpQDa",
  "key19": "5gdrLXeVJN5Ei4Pobtx44yLNeQA4hLN4GBahS3HUcAvXzfJjabPhk7S7mnwwQpreP4DLB41p8ZuoomCa9nRsoxKj",
  "key20": "5TvTyskjueizPXLUzY2hUxgqhKwMAfGwffJbdbgGVmAUwv3LGEfpW3VHkTvzEEgsYx8z2wn4Wzohkn6RGU72u3kB",
  "key21": "53ohHnNLEiTGvyw2YngK4P4xVCTCxuwDSgh8wUrbDvkcwwwGPydSUmM6ybwgqJcMZKYzicHDtKzF22fpkYX6JTGd",
  "key22": "4Mu5MCvA6GdnXJjA2WN1N9B3drA9LbLiA62WMjsx9qr4FY54NDr4bqJFR5ZmSMtrYHVkgitATKgN2C9tDYGcgfSJ",
  "key23": "3BvUYDCi8gaLzLTZzQzMMipxMn4uJGiqK44wL5DBMHEHPSCLsamq56URLpQGz7NxGZqkUfxZm2yPHFcw5AcGHB2X",
  "key24": "2MSY82CXEsknfMVyopLi9qHugd57iz5FN1Fcfcd3MQrZ8gDm41BAXNnuU6onvVkUeGqBYYpf6CPEJhARkumeUbtw",
  "key25": "4FGdPUcVjfL5xg6o5hWHNWM3VnpDMHvFhssdMSpCpiTZBMK6RCDRKXsVS2g33ZiaXBPcVTf6wSCa3WTcPbUkoVu"
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
