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
    "587ipYHpRnbuss4fwTMRAPrU6L5Trf72KZyAfzeGZS8TsE7euPnEEVyFsGDa37SmgqW2jRvYNR1s4vuditUxt1Ga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G1jowXHoBVEqpEhNCoiNc1SNM8h28daE6tXf44NEcSRwdVTRfAw27wsGSDNAKgoD3XHqAZmHPfqNNTiNUkHsXEr",
  "key1": "4qfwXBkMWR9eR4BkuZ3eHFmiCZeaKo2qgf3qBoDSL1VeSmiHdUnBachh73wdJauwKPrTSPh3kC9uS6wxUonD5Z5Q",
  "key2": "5Y4ZnyHY7iFcVVFxfttm6884TxBY8fjWDUgyTuLpTnJV4uzqEP7DFonWMfUCkhTj25Cp6dexzjVdjqJ9V54a7sLw",
  "key3": "5SNtiP9Vd6LHotsbS9UQ4RboxQSJkKEdpvzrQcNqEg1tr5gNhxu2yFA6tnXHyUeZiPLdQ7XzasxwuaFkTBkPdd3z",
  "key4": "kH2T6eY2dLDhfQvXR9xvh8h4oUCNtxvGATV5NAVHPQfLg5xzLzsmguq8XgMy5ambaJDnAthnHbJQfNENv1osbgH",
  "key5": "5kwbnvqZXMvZ4r8wQiUfiWksqLn123GuaVp4eVqShULHTGPitXJwxVsa6NFLo5poaMXfAoac4svzJVn4bHqUqEuD",
  "key6": "4seL8bM2NRMaXTSDc9GbqkXbhkwEp7UfnLC3AW48FA2o9bx2tRPteCcs3ZFUcQ5VfcbKNKgZ2zZZL9HgbHafXxvY",
  "key7": "5G4hsgyX8jHUFTcfmCSnhrgPeiVxXdgM2YoxT7D71L5kU1weg8fDSeFhLgCkW45oMFFNSx5FbZKbBCGtkSv4hL5A",
  "key8": "3PfNiKNFNyGcLPLxQh5SP3eUeActYqyo8P4HFy6ubAEihkiobcyR5hN9RLM8qLcXDpWo2wwtfjnKLWMmQbrfZ3Sh",
  "key9": "4snTZ6m2EWiM5SF2KBb7Jbwh9bdSMFsH2BEdStUdBjXT8VDXaLxz13R6JAN8hYQ2e9TS2nirDJ6rdACZBEE3SVw3",
  "key10": "4e9Ca8XD33CEqmrvqdmbS2jWPjrnGAb5CusgHHzYFaPcP5GJUMzkv7SiEiBVMUwHBhz1oL65S9ghsCs2XE3eVNEX",
  "key11": "3VpQJKZ6HSDR4SDxf2nmPwtdVrxLy6Lm77eTdjMhRsGWUzN9oXtdUzMnGkLvee7bVedMXFtFRAU6nTSVLRAZeGHF",
  "key12": "3gAJFDX5FhCwtLvV6uQ72DjaoxLN13vH4LTqgWDgjA8bSU3G5LCoPuyvHDE17VDxGtvN6kBYzQYA2h9A7D3sX636",
  "key13": "2AnVmHVaqXyrU6U1fgoJXbU8RXZ9yPBtwtWsawftzGMozPGKAX1FqGkx8KdEAVCH2uBdFkJpStoWJ31B5ioiRVjM",
  "key14": "2xAiU6kAzVjbF2Yr4MmNGNPtVa71rkAv4ofpABTYviMLmg88hsCSuLLcEvbCYMVx6Xhef2gpzqvLpzNAgEGZv57b",
  "key15": "3J3CFMUHNXS7BSY2ZYwVLQGKWDZZoTTz5o983D4cvozAbQr366phA9MYz1xMacexJ9NTkwX8tuWvu9VeqVKbGPd8",
  "key16": "4U7eP9PZ3CNLbdEeBJtQqjRQBm1LSuzvXp7JrBxscrCSJmJFZWRpf8SVuKTP5PRSMXVYhJsD7pA8LWpKuo7MRPvC",
  "key17": "g9V6fPiJVzaK5vfc1X3drZiZJ8GTPwN9aDQ5J17JSGGvHLuoaabEJxEyLh8AkjVkPTDzyv3uKFdbtGMzumswGDU",
  "key18": "3JGpyHtT2hgw2PTHe6a5DRLD6BcRMUA98L2GBaQHAN2tGqdfpKgzvEHdrGCHZiqcsKHcCtiGmqBboNm4crVY2BU1",
  "key19": "D68wujeVFRv87p1qcnQtavfb1X98x6nUW9fc6FHH4ZAG2QyNeTAkZATddRR9H2u5ow1aaVmGaU8ztMNfkVZJrjY",
  "key20": "VHvwRh23U9rUVpaTHzr8A5y5Xrr4xhBo7poQTJrtmAfaszN5rG4GU78XPhe4wuGC3WqBxLP19WUUpXZFxn3zAJE",
  "key21": "4Z4fjKNPBuDHRy46PbpCaV1m5NzFX2HosFf8yNEkfbWpqeL2jyMdtyfggjz1ViSH9Z11jQo4EWb4jRBogLiRMWXe",
  "key22": "5hwvWk1M2sGpbDTLxhddWMBmZu4HUi5qeaaTfGSyviDAwmHNFLBZMvDV7fxPPBDiSfY5aBNz2jAL2WiSe1CRyitV",
  "key23": "4cVaWMmoEDECdMzFxTEZDZbhrRNQuZscsKFrMQbiVVekMQK5FXDsAJtVPwoHnYnRDmoi1dLAP3RZbfh8imCg226N",
  "key24": "RJpLwxN4mmTpCwjknuV5MNvVcH1VXwsUkZYD13CSC1sj6qSFq6vHFBj8c8wXs2c8F7kgM6hgo3ZVi1Sq6k789ZZ",
  "key25": "4DGBkZ1A9Gu2iuu6syAxMyFkkH2yUK5CNGxmLVczkUh4gv22UB2HgykMUqQicH7b7oC2dSfrDyjmAjsHgFTsvBt6",
  "key26": "67rjSgvnixdQdJaCodyVCisTPgFz6PaGsbEerfAbkE5qL1j5Qn8FVnzSyDbshn2KZxmjZQ1Z2kGLXmrDJvtbCiHe",
  "key27": "3j3bHSXoZDbkKrHCKt9SFoBgw44rusThodygS1gGP8Gie7LZ27vTChBYprs9krei3pkF8fnepod8VkXVVED71Gwg",
  "key28": "3A6E3ougBDBqDTSpbAD88U5TEkJJSRbUYwf3KaoCg4sAXdDBCxJ3wUZxhaz6561PXahntUtC9HpayaKaJVRh9LQD",
  "key29": "4qcE3DiiTJDQAdR6Pz6ic5RZaTMmPQPswzZ1GwfnTF4DaizmcFgQ7uwd3jT63bS8drJAbtJXu5nYMWuQps8GMiQF",
  "key30": "2vaYmxwNNB6h6dh2GMHt8NvRhoqwgwLSyYRWGZpFEw9wu3Ksbx2LUWKnBK1SiefMBmENtwxMszJ35hiaW4PdGCia",
  "key31": "52z9TBriVF1rMevr9Q2YfHMDGLR7RDyLKdzt4gciYEfnjP52GW4uG3ndzmKGqwevNQZ4F2WhdgLuQdhJo64K2gCa",
  "key32": "5AfMqkCExzBtfEK4dQevEjmyhTLKmZD6ffog7TctHX78Xx9kjn5rECV7Moh5zT8PuZrjwvRevtE2PLCDTP99NXJ5"
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
