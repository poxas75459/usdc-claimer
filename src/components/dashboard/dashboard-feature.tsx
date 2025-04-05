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
    "4CuBbNF1jm9YEg9DusjTsKJP9TkFSLz8WLzehyQ3pdUmMjweGJ6oVm4kd8DJYsom2AbMWX9vLrVgsr9zEgNbaFCr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "515G84ZocDCYr8pGYT64amJg3N2fJ29EeMFVjCWCkczhaiMWGCyefkuLTrswAaEn2ZSKGQgfud7wig9WTfV5uK7G",
  "key1": "FM6zdz9wRHXCQ9uUXMf3BtP2AB4YvLLYLcjxZXAiBzL4J53MSK1qVFom7bkWdNe2Sbc1ZUqnTb2DPhhZKhBt3u3",
  "key2": "5mXZcpQP6Jr9YKMbdxnMfd8dMYYCPbqi7TDaLXQ268LKzw1dQnDZ9VhMdHxTq3Gk3EYayKMfz99XFbW49sjWRd15",
  "key3": "FyY4z6iAjT9fx9H8nVjydvxjD8hexx7tByjobmCjQvLGzzwZaBozajcR4Hs62mWD2s2sSFr56Z4kgcJuqr6jTkw",
  "key4": "31M4DX6gJ1Ltb2nGj24WbeW2eH59T5vEMWPRmAG2UfWjuN95XsAtpdHB4uVGJXSG89cpGBfQ4e6MYzGNL27Wieor",
  "key5": "4EFkZqMrFQ4ACF135LrQ46Uyg8wZszwkihRLrPrvrcUNQhmxxxKruzRZNaKVjvFKs3u3NWencMQfvDmzQKmQb2W6",
  "key6": "2JwRZWTmqvjLutBoc51bDAzKRUtkSD24jqEJiJhGJw839YyN2KCanwY751Z1b5MrZWR82KBX1XfCPFEaR3LvQqDe",
  "key7": "4UShiL2c6oDzjLV9m6BiPU1tvHhmHkZUrBXnXdZnjZ8SHmMSbAPXDMR223LLV56F96yyvsTQw2apyHR6qMQ5Vus1",
  "key8": "2sGrRM33WxM9BV1w2wLn1fKzDZ9yUn4xdagmC34ri8v68vxAEYafjhK5YvTxVbfZDa7Dmg2kiXPXT1CwucBTidCp",
  "key9": "5tU7jgpBfztwEncRWnyQ9zeouTZHxa5td573iAV8KafM8UfGjDA51PYqVCh8xWhdG7kddJk7dmMmwdQram8Xf3sN",
  "key10": "2PwkG4c1q48mujhRWwnoVcz8NpvBCyNBWE3G3DEzUJfUmUTpiBPeVEWr5uBAv9ungHuqv1DD25SMKpcQfL5josmE",
  "key11": "4d6JBBF8JnCQB8qxX91CeM4DChMPxwb1NDXrgK7h2jyPoAHi6Gyp2RG8zvtYnwm9WACZuWb9eZoQrqGoxxhHbwYB",
  "key12": "28ZsrsH6BrHHSbnMWSZWm8FejqnPYpto4QLpHhGZHvJBQWiqy3DVY9oF3YmSP2e8tYSoe4Q8ePEcH3CKgNYQgcTF",
  "key13": "2PRkStodKzshB5hyabMExm8MFeiZjB38xv9pewVVVveiX4usFwmkw8ugHCkGkk5eHVqkomEJkm634vvawdSFztvh",
  "key14": "5c16QrtDACa6x5qsvKRNXPbnUvwWpsqdPt9nyQgxzjcchKbvzdQZov4tBV4rFVMHwoxuYNGeCQfApg45m86HGh5H",
  "key15": "2KK6DYd1jtYrqzVuzz1BpEwtJXYho7311WrMjHKXSmDfNcUaSKJ2pFAYgMXTFBL6gNcghQ2ahCVsqKpCg7JSm1un",
  "key16": "4YNHcUBgQqWAVjB6dLf23Fy3MUhS1JRWTR9SUnYWm7DG55K2B5Ddo2AZLbXyMEqTJBL5NSdVXfWm3P1BjKiocAcw",
  "key17": "36pQ6QeSJvMsyZtmYc5PaZL3iemDNrnKHFKD2TeXkMAftYh3hp18bn5zrWgJnWdFmBQQCRcEymjQuu9NeaFXM6aT",
  "key18": "3eRbuLj6vLSABvee5p79gvhCZYQPFjoQFeaBJBtnqGTxZrp7yAqXonkpsvgLknnEfR9Q9sLvLrX92C8Nmjs2p6Hk",
  "key19": "4XCJiVLkpQvAAGhvdZbiNPaPjy9hFMx8NRTiiL3aD4N6EheDCJj4Cd34zq8WLULmA9NV8EVo7RAAoaFqVRRpEtj4",
  "key20": "5HEXATE474155TfWNBeWysevCkoG5NUnd8V9Z3DgkJmQDuaCEaxmJWNnxnuj9x9FiaZ5462fH6UBok5ysnkdgrnS",
  "key21": "48YuKUfmvLkXTAnXkqMkRkn9fm8jRBgLuHr2RThuJKsG4x2TuGX2pnevj1KxXAqEsZo1EeSiDLmYtvgmMb3jA3wg",
  "key22": "5LCAi3wkDyJ4KdxWy4bRx8f7EzjbRL1DYT4z9k9EFdrt8yevtK8v3osd4XWTR9ELrD6hadc2v3WWftWiSsSAQSwY",
  "key23": "5fj6fXSndKksH4fJXbCBYeXnUGsNYQ7tTrQjcKN3uxaEJNR74Sr9tKTMgYLiS2DppTepu7s4ix77ZevMvCy6oDAb",
  "key24": "2kPe85pGeBc3TUPJTmza6VSQbPaT5m7whBVyi6eov8BgqpNh685DmpvTU7FvE1C61T8cRQffAA6dj7pevzMmxWrv"
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
