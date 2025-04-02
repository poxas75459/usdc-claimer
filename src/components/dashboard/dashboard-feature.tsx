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
    "27ven5srxoFLSJQzF1nUQKNMnaZe9StYgaJb9kJxSEotSrCeuK15fPZcrLccq91AyU1c7jnvf8jfknne7Bi9zdA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sqaBD2Tdhjp3DYqxQVDKpi1XXnAK6hj8bWMXCDtnKVG7aHPhT86e1zujM8Vp9XunNeMksp9YmEx8JBMU8EXJFGW",
  "key1": "qbcqkVPdo8zopcwLc6qu4gQAHd3zw7zKhLyooWZumc2VgLkghKiDRUBytr9YJy7f2SB1QmoZ41H1r1YufeGxuEr",
  "key2": "44ASW2z4ZpWohhi6ELGqjpFQJHWpNf3uVeAduFHAY3jvywf4DXr99Dfw38hsJ1zkaotsygNLRUdb694gFGDGEmoa",
  "key3": "47qhfjd3TYVvYqpgyKUXVQFtym1QEnb74SF69MxztPMHRuDv8BTrT46Enu6c3bXwwNTQ6XCRLB9eRmpScLj71YTS",
  "key4": "36GyTSLfk1umBxU3Q4gm7d7gmyrXGdcNHvvCF3YSDgnurbLTB5xtgHuzNZV92g4fSM7B7Ej7jnV1MxNTc1xacc7f",
  "key5": "j1fSRBiBJYm7UocdVgHDpyGbJF3mrYsjm42xgL6b2iMp8Jq5xDKVFUGUosiVtE9bn4TVtS9j1S99aYHkHf2WbVh",
  "key6": "3VCc8swWiKNGXwLn63DyrH8xFBCcP6L73QWKRpGDBwXNU8PuGi2drAfXaQEyP3SmeYMHFPjKbrQco5bMPqqrp9Dv",
  "key7": "2CoNdWBg8fbk2jHBkTdcMV5h8WgakdrNisi3pb9nstxBVbQKqinUWRp4hj68iVqknfHQpgDd1owZ7GzU2E4k7Szx",
  "key8": "5vLPWtteCRnAaJwNz9b4M4nxvGgaWiYGB1SBmMQ5BQbibJa4y9CcJR3KhsdiugoYASzNPL8nv16t6nVTAdJXLnPs",
  "key9": "4h7WJLa5fXPzYC1SDNbRteKnURWS27K1J5pwwjZyuTKfA9SALksV3Rad8Y5mBUn5MXBeq6KBUYkF71DpoSd67Ad7",
  "key10": "5x5DG3GHtxjDz7485sM63SJrHpQDma9JdVv6ZiCKk42pBSGhedRSEmzsk9pM4f3bweNZZgFceejZvwQbF1CCTdFe",
  "key11": "5nnKkLMceBVLVQjDZ6oW2bcWNTTdaZtdJ6VKwsKnvMQpKUau8AC5dHy1vSLh5qcaqWMKPgcSB4HjrquGNeHrgEss",
  "key12": "MYE4tQZYBSh3V5M7mYcHs27S3HADmQx9zZ7BPjLxzyEoU6XijR8aJRy46LmstLu9umoNGde9Y6mVSaLpEsRRzxx",
  "key13": "2cciXjkFNc8VReL6UoW1K7SVCBrUSTrVFXZnF6NbSW5oMEkiLoNWixAZgKATTUiWVexsm6iU8LPd8aUFvFDYstqo",
  "key14": "2UNnS7WHgLvtffvu697RkFUxuoqdVK1FdRh7aK96aogB2qvMyaGG9kFnwinfogK9V45oGb5UhkVwkQgELH9jwR4E",
  "key15": "43nUDoqN6yoEmrUD8uKUWKPCtbzkHoqAAB3bjEhUfbmZHXHabPVzPeuCBh8wpnGkRU7CfkmHMGFHYog4hFqoAf6Z",
  "key16": "2N49cpikTECx7aj1LN6H7BviLyFkpWB3rKUtBauerj1xTbuLKyART3bUsfuEV38EQszXDQZfKjKjUQwP7pXZU6Zo",
  "key17": "543MCJy8RWWdzSEJrmewLLa5Hy8p5U1WnQf2q3txyfMXa8Qsdib6XcdkSKz9Ci9LEN3j9cjzR8CD4iUmMwZpXdpA",
  "key18": "Kc4a69irjrZYyvdKSQP6KfUDdHXwX24pVTv3BEy7v6gRWwWjURBtHqbdy9zAzSjek8PCptst7MoAngDwuu1kzKD",
  "key19": "AcZNvarFpss5CctHGEi55mCWBcA5dacr9nEfsheT1VLfXVhNzH7UhbGHS5HCdMEonCyJWyogcrvGhM6Rfcg7gr6",
  "key20": "4DR6xZsQx8PdHZ3dRKtctzGtNH84YWCLAbJ9MSukygJknD8PDcEHi4Ez1uRNi4zuxpnB7ZbAZd4ZFQL8VFyC7LmE",
  "key21": "5JXqWaAEuHS92tvwiwMNoyPL1A31QxLvN3BguMZCc6kHxLtvDmUFNUxyaXfP8BeoMuXxgRoaxA5s2P7JcbeGQmwC",
  "key22": "5tpU2qvgtTLU1uUd5Ct4t2d7zkynA4bJS2qYqs3kBF1bF4Nr5fYn44SCucqLM8edeYHF78tUCTr4EDaCK7uNjCSp",
  "key23": "4ehBU3VcU2v524LXMT36NpgvMnQkcdqsT8d9PeXnCPrDjdM8p8E5k9YKQvBNaLPfCdotEFqHaBGnqfnSd5nzsAZD",
  "key24": "3UMm2jb2h9mKDRpGa6rpuR2FeWXZ13MuhTSmURgGZdYNS6CacFtJtTHTVLCPk1ssX8FqAp9E1MpAxf6dt44hWgSJ",
  "key25": "38mErpySeQNcDEfdcwC1KhpbcXhxdeN7jXCntvAPS95eEzoxKzhSyqTexaBEunSupdEccXVxxp9MYNVzt75SfsYE",
  "key26": "3LaRrvAxYZSqmJnJVw4WWfBPYd8yj552xLn9Mpp5c6PXRsCv7NiEuzssUVMRgkVZwpQFU9h5Pn6b3Mm77jCpwVF7",
  "key27": "eabVmJkBsEDrSk4ByMPxaerZPUR5Gso2UaJ3ZBdd3PKq6XDaVgSVjt4rMVVx5c9kT1FAoCkJaeToLN1hPFnsUqh",
  "key28": "66TEiKXGdEudZrNM6P159L7eUqMR3HXhxQgeZ2ust9uFGbytVyBPrDwigGUf5zUEbuWejPWAkvKWK8AjLFsnurnH",
  "key29": "L7aMEaKv28UbTkCP9ZkYYA99zLoefmRdZ2HrGCvomwdcGQf3dZAPAhdhf3W1HJjcexceDgEzfj7z2AJiEusxExT",
  "key30": "4MRSu2HJfZZvz7Lyh5fCnw7DyHB7mxcjRqayDV1MGukCvryo5krpJT8vmfG5uWVTzf5FDqkwtuX7HQ5M3Focg2wD",
  "key31": "328XNXozvWwDPUbUvHnoxSgVHZwAGCSL7JmUUbdCsawYEPLjKPdXuiUxN2cNgjbhA5Y9tfNrxRvFkVTJ5f7ubHz9",
  "key32": "4SBukCbqvdgw2p7h4HzTN97yvdLFyjunWPgWyS1HWA5fdQ6HaPkQRH7Fw4k4bT4iQdcCqZeDFneHNQzGSgbrPmWU",
  "key33": "Hx5PCxwQ8DKm4JSErkKBptrr3Jinha4htH9Z6T3YCEPFVhVeHgLn3RfzMU1GLHr1LrV3yYJKDYbJh8bqRuQSJJw",
  "key34": "3yPBWMkw32CqahG6yBueoR7jFPcnhZdN7GbfGzcweipA7jgPBZ7g56RCpiQYrhuDVusvRsAnYSwKXqtxphimNq9L",
  "key35": "2DQmHiiDDaXoMeVgxAcqLKJe8Wyo7Ye68Nv97mwNa8YuhbGKTk3Wd3MC4EMxQZg3cTwasfmAMVRD9v1b4jSTwo7Y",
  "key36": "3RCgUfDkeSXSzTYc9UyyKbR4HymFjKgr6Hch4yEiyxNVkSuV4poniu6oamgmmSw4kZfhevkMK7zmcgy7ZjdLk4dP",
  "key37": "3MQMb2Bihg1Ncb562n3t7V4jbDGrpcq5oAc5pTkGA6zktmAMTrbBdnb63ANBzNjPfQriQWiuqZkKYDgjhfjcjnps",
  "key38": "3TLECqnvTsenqKqCsoTgD78DzBq62aqEkqLZNjKinjm88axVxGuqSnGKCyPNj8oaRENVjdhPv6AiHKwxjiPXKiS3"
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
