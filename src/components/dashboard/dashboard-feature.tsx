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
    "5hRd1JxS5199Rw5p8iTE8XjTWbH34e79R6oSW5x8vQBV3ZcM65sgUSycEdvk21FZWVAQcvDZ86G8DE9Z67rBbTXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GVbvWsv8msMto1L7e1WZio9CkXUA4WiuwYQePAZXUpT8XQciRVC8bBFQkRzjQ3W8DSFKt1ppMHZaAVqMbX5AXsc",
  "key1": "5het64G2gzWc3s236RLE1sJmGTcWo3FKpPkerVvmWaRRaWeGssJcy1Dgc3HPXmuCM28Pt59k7KZQhRjqkbK6DhBs",
  "key2": "5phe2DCFjpe6EgWP2Nb52dGDGy9HerTpnwauSGFEVxmHmYZBYzdde7Bvpa3rE3cEWDEkHXADTxoXboJpB82mEAED",
  "key3": "4M8SPhqUwh2SNpStJCx1jvQVMa9FL31MugUfSLYrVbyUCRu16AyHYEq7iNPSJQyaLdpuH2RYKz4bpZ4jKijCtVqa",
  "key4": "4eGsepALYTNs5CSP76pVh8V6378hJcNY3Xaooab9MsVEjawVpx74ynAwYqYP4zEeYHXsoT8JCz461Ei8c7XJppjk",
  "key5": "23QgVcr37SDk4xPTBN9P3pkmrCw7KGm9ajgr8u4bJmAGNoYgRozPeivne1gqSZc85eVuJVPeX8KBMEu7qGwEBpqW",
  "key6": "3Hbnd9U2pDRaEnnjTwBAJZzATiNDmux3PkWRhb4zjM4esnAZekyVqWPp5UsR6b5C4MunbGoXPsfcMu8P1nrDfG3Q",
  "key7": "4oaF5b3iy11JZmHm3mqeQUHiHeT4MQHFwC8ahTbFnhWeVTDCjzyAKPRr3Tmt3XtjKQCEsgb915K6V1x5kULxJVTB",
  "key8": "pDiAbGPsMPE6iRyDZFKex5hdt4UyPN82z1GXdgECTLB1gJZLczD8nc74LZczHTyNAxnWk9Lj8WuzbYWkw3a9eEX",
  "key9": "Qp8JVUETjcLH4LZCpPWMeaMBEoiXmi1ubBuXathFeg4vLKTzHjz5Jr2t95RHp8j6rw6Q153uZ4A57DQdygnSdgx",
  "key10": "54EGBCKUr1voD1eP1eLPoF86Z4tHPzyChcyL1gCWDCuq3XvF6ovnHuaGb3cxEdxBNMiWsLs3KZPAgAXbsnUUrUze",
  "key11": "XvQ95goNQQKJHcygVpbP7iivMmQcu92nvE42RGCwWseqdgGwYz6nxfVGo3fN6PV33ihHF1SWHb6hwqa7i1P9eGo",
  "key12": "4X5SoMNc1nuQvJX7G8VTGjE3HPfpqRXkZeVpPkVRF78ioXWyt6d3L3yYPL38PR55FRgYXfozEiBhMK317XXDvcXv",
  "key13": "35nvKonk4qh3uVf9dhcSNSDZyfzUUjecC1YbMAB5i6jZcBpx1qVaM9gSUqL4nrsrPUQMWuNTHd3Qg5rVBJxjWAm7",
  "key14": "3TuMFKNzK2PyHpHcxBy1WrLJPmrxQ19CgEsgXiNmwmjWENoY42KVGWWhfWJe5Zg5AK14ouPEMcJQuHYEqJ2bG766",
  "key15": "QmfjTGDTAaFuxoWcKDuSQWqx2afQRDsaZpUfvkW3xkDP9WTrKMXFRdbWqNWuBry1AuJS6HtFva95d4uWRXFHvka",
  "key16": "5UfxWfSPEwU7xCL8D7gLoM39XuXri8qdB3fcMeRTcZP9RSUmbVxNtkCahWXHbp3d5VPUHDTaoh9d4xumyW92vVSX",
  "key17": "2xhL1VzKQC6JWNVUGUN71KSMYujPCu4D68dQUAmSkMTjjZ9sjDT9wjguGNvANdbKmoECbygbtRJ9D5UP57Qb3ogp",
  "key18": "3UWj25enizxHCtEpuvAfgkgUowLpSEevGPY6LG72Ht4x5Me3nGW2ZRPSvNWnfdiwzmZkHdmKcgEeLvuCu2y3q5Sx",
  "key19": "aCQw5poHZGDqCvjL5akv81HSXAbjYWXQocYPVdZRdbVHrLRHtAebRdn6B2YrY2gzXJuA58Ejb2Z9GnhAkU6Ji33",
  "key20": "2FeCA1gVyBgxR43Leze4jxRwiBmjvJGNG489oELDaY26SuRbSMeRc9DUCcgoe3WehyXUj1A8WEAbm7R7J1iYFbND",
  "key21": "4zhwK3p3okRYhomJwUigwvqFBx81Xcb7rfsR4VpX8CobZS6eiTQtfd2w4TDc58dDvLvjhKWPUM9NSXhm88cjjXU2",
  "key22": "5zqX6Q2ND2vrpypof19ttUpmSeYPvhWiLfFms4Z1tyxGqHTZFM3iWTLHCeUC851ATi1k9x3a5XS3UJiEvTK4mec9",
  "key23": "42xzMrZWqackSroXbJv6HCQXFCvFaTr2BBSKnSUQP57oaCYTzMnhfsQh1fpPkbJ8ZPbfATzRei64zTJ7eHrD6ceR",
  "key24": "3eNrw45maoz6RrF2SZVcG96BPQ3ZSb2srAMmQxY31Ksj3RuCXArr9yvH24H3yWSu2iTwcZvxK5gvK4ttErNyAWSE",
  "key25": "31jYU7VkEzqz45c3KfS4aZXZK7zH59VsLL9gusMxf4FdKT3qTXekHbcmE1gbwtb1NpqHyy8RhdWw9rmoaEdnTxnH",
  "key26": "3AUf52KTxNe1HjdwZ353a1AGbsb9ca65b1qYFpM7hp9z5Usq1PvBNGtr8u5WAwD2e7YfXharozyYEQQ1t6jfuoYK",
  "key27": "24HdoqdJDnyeDrSaXsq7wjM6yA1bP3fq7BMSUTbk6juzKvVqFRfuYsXKfd3dZES9afT45bjg8zbkBepXGKm9UhXC",
  "key28": "2V1F6h1N2YdGvenEG6eHSY9DLBnyXHfbRyVozqHWftW5eXmBFjiSPKjoHjnfRQErvYT8fgs4RWXXzsbTrXwqT69N",
  "key29": "4e65ckV5bWX1ZDgrffwUncmXfDDJriVwKJVdNb9mYUpJ7pTNgYBsiWBNAwb9G93KawrK4bVHx8t8nPcsdrFmemPW",
  "key30": "FVVjvxqUieDqf7bqUAADKpMCcAfH3NyhJV5KQNqe9kzYVJePAYMT4oSPoXfTekMXMNPARhnZTjx9hufrqN51Gwo",
  "key31": "2jYwjKTRUh9WH26QNbjE515pY6sWTFR4n1H9sVgDYfHGdYyF5srfEieC4zzzg6Bdx5QwkUvyAxJ6Wza9RTEKef4S"
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
