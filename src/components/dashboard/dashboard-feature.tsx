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
    "4bY62yu6yuB3yuMWMeJnr9pYWjkwfvq9eiLpjK226MS3VLvFBSQ9aY3J9xCZ4z8VWS8L4yEvZSeszTHfkXEoMRME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HRTKRXrhD1KRmC45z9cXNrzcCuFUWaVZTsxXpf6evVRqyaLqWpauMfsFbD8ktcJKGXpgCkucg2ouyFm4irkE7hb",
  "key1": "4ZB7LVXQQjPGbgtEUqoZQgAAVU4ytGu2fEe6soRwpwQVyputTUuTKBZDdqHWHxwrU6ZQDwYqVAK3a2h1k4A5tmab",
  "key2": "pwDPwLn83eNajZith8n8PBohfw4XpNApYzXuqf9s2Ac4LkEGX2zJYVXqCJMQjWRCLD9ha1gkwHMxs6G85CRPNF9",
  "key3": "3ARqi9yWkJq6e9HKhDPXhvboTRaPYwKhxXXNB1Qj2THinPfC2uupPUz3j5fDYRHg5LCB6aELcXnrG3JPnEwN7fwY",
  "key4": "JCPYgKWA4cbZkrWyRJf9kRpFAiRMJ3gZPFTWrmeGx6MEFyAKD17Gi2WZH9hJQC5E1aGwtfYxY51cPTMtwaaSr53",
  "key5": "49hyxZP44ZfZy4T9VgpvubwpZrqqqXqdrKYCx6kjCeCs9gPYGAKLrq2pyYBVccjAS4MVWr4LvEXDQ42a3LK36P4s",
  "key6": "4t1iC2i1dvfriBDJoA6uDroJruetn6sx2r8ccqKsoyiQXrrzLgu1gHUu7jo6aEJF4oTMmbp42BvAieU4AjoCwdJy",
  "key7": "4afBR3UV3WydUNp5CtjRr5hRyHkzYKDgobecFoRWKv4Zds5JcQVAjf95PgsWgCbbQMarCZ4wGbJBfmgTfyhioJSA",
  "key8": "4tfq4rEspjQYpSgtvNrDT9j7qc2ecC5sLJVE11X9WLESuntkMSMnPkrvKG4gszk3Xj1gLg12Q164hd3w3wLWohoW",
  "key9": "4BpLjYodzCWvGGoJNjSg8sy8dC9JYzQqMW4uV6v2aj2hu7qR6YkqetoxZKZw82WQgZqQTURNXy8c9abBEMAJbWCQ",
  "key10": "2i8nuVT7sfdEVZJvT3o86dhqmHtHDNYo7gtSWpRgrDmLtrVpcYX2TZQBqumDFbKtePPP875God6ZyRaDLZFPEoKV",
  "key11": "5CziQBNt7vXdxCqe36pfH2m9kPNajbnzbYKFyJKmUZf3uLT1d6Lvit645sh7nEdR86hzdKnNkwqNhh6jA1W9oSLE",
  "key12": "3TL8L9sUjjTs6dsg4ztQ7xHzVPjdzYHbTRsYkj1xGM3BYJTUuGRENMyxCPBpcQswouBEC7Qu4d263hjFSFz8wYux",
  "key13": "2MiqnjHWfs9k7SMZNJ3Cf1uP148E2tC1xAgWM6z8mbmwQNmcZUyoDhJEDheLWiuh3PUV1RpdNbBBp4L64taeS88w",
  "key14": "TMbgoGmjWLvaQupkPXWLwbXH5oJZ8JhoKTNYm6hcLxrwBJ89fAi5TEBTfWHhqiHYw5CP954ShWj6a4KPuGBw1o8",
  "key15": "2esw7T9WeKkMWo3bBbmari9rcJL6LCXwj8TzDyvicCKmqzPwseUPFE46rZM14UzZWZ1q5ud2y9tSfzZCx9VVBfaM",
  "key16": "453L8hLqEr2g3VVoPWGeFy3VB9txQsSdkfnBDqWhVdARHASYfoU6HHZ23QX2hFpd3Gxd9T156Rz5ppNY3oYgai29",
  "key17": "5NL5ug7sSMb1MgBQnMQ2ynUrixHyNDCJbGAyrcnuY94GqgsTuwxgSsY3V6zzsQfvf3MBpt1eDSTjPgQsWyg2cmLt",
  "key18": "aL4NYwxbbq9J4aaZtqG4sjYf5wHNhPZoKdHY8QnnRFme42W5exhvWcATNGRBkx1CELUm3fzp671epxLoDxQ5fZc",
  "key19": "dvscGQoBp74vp94yJ7WeXaFKb5LW43UWSxCkPQG4DeUG64NYfkL5g4MRnseHrZ1kjmYTPcCasXzXznRc1KG9aUX",
  "key20": "2fWoqpFLhryryWv7GFHLKikL9LPahRVJ4mBojdxcybe6GkADWHuAQftkZmtYT2XvmhewYh3QxRS78nncEArC61QX",
  "key21": "45bQg4zrF36oUKJTXG76c6Jju7Vm26NW2TJFhjGG6rVrvMdzD4vhGHKNBSW2x7EhXqa1J8hxrWiyMTof8wArfxzB",
  "key22": "537NvtatjWEDPBozzdsPqbLZZGVmQ1oXbnuujP3jHapdkt381SiDdgwkdckfiRSrbujtrMMpDjvrmTnAtQvGdjcd",
  "key23": "4ZsTQpP4S8nwryUPg8kXy518k5UEt2k2tChupzJkkhogr1ieKBN52rqd5iRhHj3RX1P4oHusf9Ew9EyT29s5ChYQ",
  "key24": "4knGx9SfecdSUp9xpmovPMae1YxRLg1ukYPJfHGqpLYF43RAZsHL1JhuBprGuYLqHVnDCuCWByKTy1Vr12kKXDGm",
  "key25": "5cm89VBjYbmxKNyUaQ9dHknJV14igWaCuQ6Sai3xbrng4bf3WaPzZKS67QtNa1Ar8rCnTfdNMgCkzN1X2K6xY3HH",
  "key26": "41L5ATtLPH5Xtc3sivLAsYdgNkPrdxbn5VQT5TUj3dN2GSjdotnt5yH4mpQsK1q9CCXsNEraNVZHodDFsyrRUPXD",
  "key27": "2PQxTT3GAWRptjPZgNYqX5GB3G8j1w4cTtg1tgJQAABAaK5JAAXHitowK7doUeKtudWuVgqPMXqyVptiwhK9wH6q",
  "key28": "4fyTG3kGq5AFNTamUvhu1ZqmHVe1cwNBZbKPs5cHUdufh9jM2JZgmUimcQH6VFrNZBxjqW1QAx5sqKsDPJ62HpCw",
  "key29": "3TFR4dsGzFTJDYLNmKgSBE5UmWxnfAbaAjD6ePwncVcnBAcbhAdNifaYuxVoF3hitHvgihRzfDRe7XrhjBbCHDW8",
  "key30": "PBCh582k1KpaSAacnjMJJVERN6vcgmRxG6XoJYvBrtCL4VCkkV7Fuqk98fExtwP9m8XCNNnRDS29jeK1Y9gngyL",
  "key31": "3fNjYAdYYkX5MgHHXRzTeJJankKEwrrcw6mUAyhcKDDh8cUomDZg8nyQRi9eATaHJ7WQbLGj9HedN8HWoa3CXNh7",
  "key32": "4UKB6ENixySVYjFAkZ5Tfev5U6SXfjx1Ny7xM6zsttiwFBnJb3SapaJXoGu1KMJn9mkThMsVdpBmwhsasD7Tgfyn",
  "key33": "3GiebUYJivG6uLNXUyoLr6AeRQRNoGNfc57PD3544iMmBaHqX9eVCqaJZgH4dgryqsFBVmiTfiGNTasd4i6jXBfS",
  "key34": "54TmcDcsHbqXtFmAJkPXLhViw8pdHYuvN26RdNecQAU52n3ghEYCkn2T82MeF6CzD53UqyEpPc7WMwTgaGp9yMKz",
  "key35": "34pFsuXBXn3qUGk8GdNLB1bbXrXPfmioFQ2cMnZ1yTBGGMJX7qeMr9fpqvvSj6TQBM9NcMzD2A8XHhpNRvjQyvGo",
  "key36": "3RH7BM1uvTxM7CcHwMkPmmcbfQohAYjA3WN5Wc6VAaGGsJLhMhb8uPPRb8kTwicYqdywN2M9xTff76wrthvx3PAV"
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
