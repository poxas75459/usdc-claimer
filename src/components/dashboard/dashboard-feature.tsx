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
    "5noxErGNx9VpHYznENW1MPocjdawTU9Px1RagTsADSNRiiw6y9yrXPibqqu5VuhHum7DP412KcLoxuXJ7HzTR9R8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zRaF2cizCMNjMUnrb4GvCLptCgH34nKVnmBGmktMvJasWb2xjfe2JBz9dcbhv7zNWQ2DtqHPPgFDNMBzVnKFGnb",
  "key1": "UhagQa4yMbMgnfYVGHQf6ut4F2puuuvGZVLfQTdgmH4poCp66cez52BEzA2UupswHN8zYQyktFT7JoN4caJK3w2",
  "key2": "xBGZQZsjBKTLj3wLJd6KNfV3wYWm24DHdMEmFhnm3BqsYgpgu6s8WrMegFtRMnqYBhAmxLKDxg97HsgLqqFUihW",
  "key3": "2iiSpGM8RfcSJZFSTWMmUrxhD85HXpdtZUxhh6EtoG5JQPexFwiApd9Hud3s6VDP667JM8hyEb6uLh8CxUGgB3k1",
  "key4": "5zFkwEzLwMynLup9LGtVSxcQDgVRGfSWbSyGsFy29tSEpgtXsr26TK71a4azFDwXsoCA5GY6wmMxKutT8jxvuPuQ",
  "key5": "8BQxu628ZLNDsShcZYW1pBBaoGUYE2Zx282YheoLwn2WGJw67eHjt6RhFFipZbNyT2LXKuTAEo5roYZXeDJvGNF",
  "key6": "obnMTmfvyRUa7enMhvE93NNVfmTZUcPjkF2M2K9xvF8s9eQPgWZ5gsuhdKHe8Gy2ejqrBzJct11L5LHgEYuU1od",
  "key7": "3RATMKKUfyxw49vyBLBoBz4fhQDm4Nwa89FdSV7f5hV2GrENpMnThHEhb7dJRGCSW1Dt1PwnKvHUtbUBLoq7gTrx",
  "key8": "5Cctu2m8MM6GMChN5XwjfHqVt8Y9ALqm8mDV1EUajZbjbxRHXtrZiivUBeXbuaCBvHSymh9xK7PJpZwK6HGzbRyo",
  "key9": "4KYYZKB2Fu2aRruQATyzT8huHa8E1hjJDGuPZJG18PuYd1bhRojLoPfD1Lny43ZCuc7axVF52np7mJhjfnC6cnar",
  "key10": "36Zf2k4tqpAvDbXTqwwm6a23BrRB1fHpfc4JFSwVdmBRX18q3es4265YeU1kP3hY9mi1sa5rr1oz9neQEdWVLpg6",
  "key11": "41vL2mp1EpG7k4Y8WvvKUuy6ytcR6PYirJ2dEqS9QQQddNrNU1DYG3oeqxHtJfGSuV2CzbcDg8Eb2G5Paj7XHiTM",
  "key12": "4gvQz2BFjcmtpPn7zmWqKvmLuJWhSwanKNmU4SxvDQ7YU9K1t7g4JUnvAP6yNDgpyWitwTZh6hmBtPnaBzaPVbPo",
  "key13": "4hZnBZhpJa8PsunVapQQwU79o92huURaCE4gPyvt2JVNumkFXnhJ4XbvZGuLmatWpJKG8X4oZXUoj8az4ciYHh4Y",
  "key14": "3GNpPBRY7f5DG6TBS6ShFVYJ9sN66d1eQpT9ZPsXoZdG1yjydAB3AtsWGyPuFxEJKnW543wjGwS8iuNue6hKY86i",
  "key15": "33YkbKPTYT3uGkAwKeQXXxVYhpGcRTnZ1HmJFJQwWfTFMrmV6ovueADpoUR8meUUqahfqZPzGjfoE9oKDyNgVMW9",
  "key16": "2RLV7SKLf3Wvbgb9hPmgTWMLdfoPcqeHnAJeRuk95LiJqL93pfFohwCDo8mkL5ZPuxtt4HgjTGQyUB2F352XuCTf",
  "key17": "3Q5o1579monXMhthkPfc2j4bqEZU8LMSjsE3gKgDALupUvBq2pS2wBS5a3C4RM57WzCQ3DQ9mrrn8FBc8D2JxZoD",
  "key18": "5Vqu2XuEdp1BtXj7QiKQoiAnxmxpdynAeBEV6vRdvN4gjeziDtiYJv5LzXMXo3XaDSSz4WkXCn4NSnnXZDXhStHB",
  "key19": "49PVSZJwFTdCfvfB7DhZuoCUJ8SvKTE8iU5WxsB6BPWFWaRDuST2xTU3khkgdbrmBBnc5V28AnQLka97u3Jqawnq",
  "key20": "2eDRT6Lb3hD91omCCmnydYR6FX4hZnu56iauWnfAkd3KNaHQe1PBSEPEbN87WotpsC6BkJv2mVXCdJcELBRorj5k",
  "key21": "3TDMLubqHLz9gHpSgsuLsRH8LqFExLLFrS5kmVRBpJwBkEtDcfyU1tw9bMgJMaMbnpJ4sUDTxzWf3FhRorEfdSJY",
  "key22": "2fjBKVAK2cDB9S9WBnAosTDp64RQLKcV9ymcE1sA6gPk4tSqVGWPHmKjpc6HKohhjdUQvZmLxApAUJcoMgQAaDJP",
  "key23": "29uSJwoThMikERLFahpAXGZPit6Zxs5oUBjQ7gnKndaz5otyGsNMTXBvbS9xtMowWLrWSY2MdWvgNm9WgTTREwfe",
  "key24": "59xHD9fF2qDPZJjjc5gBnRVuFm5rqMzfkL2Et1AQ7WW99jRz5RZpyF7Cq77kEg3U9YfquL8WaLZjTLxBbEARPggq",
  "key25": "5jd8qgzE2nDC3wZFzQnWfwG1eENZU5hqPMUW49QW3YVVMhrxH5NcobvNwcbWZzajKVV8DGPgEeWAhG53rUdycm1x",
  "key26": "3zNWZpbAVKS1QmooFTAAbrTFdJHkuYR3nUG4H8NyyMkrWHWUaMWJLMstxcYQu8Ggxe5MWw54Pv3iQDTsVqjQUt8F",
  "key27": "3GiRkmqu5mKE7zQ3yHiarJscjwfsBXnf3m9Dhijz8F39kknWFJqKiJpuNhxv3zbyyLf2qkv149syuMJu9SfwBy4q"
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
