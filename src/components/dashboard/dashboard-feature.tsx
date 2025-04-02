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
    "2wYXSdpttayimjuLpWYbqJEwhTLhHzQ7BeKvqWAsgfeFXEpWj2vpKN7wvXdDbjQRKfcHjXVNxZBGF3taN9eSUFTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56AnkYj3g8wLtZwneVbSEJ5FLcepMQiyimH44N2vT3tkE2MRU4uYyGoMQk7kww8V1CRH8yKhyw7phrjCupcSLzrY",
  "key1": "3pyHEN2dd6SYCSyHkjPMLpd9QL6wg4ae9eLygqanmrsudDGTTnXkASe5HAz3TQ62nTxK4NnwsJqsVPoAAihwArEs",
  "key2": "35E2gpUrTV9TgEESQyuopwtmUXQoANEqJMvmhGprrkTgE6fqr4dz73LETSf5fe75gXZ8bDZGKAd81PiGH1HG4Mxn",
  "key3": "3CQF9AeMtvFJmbPFzZ99aTFZYmwFXKozw9tG8YcqMfEwn9PRWqcmbuSMw8KxyZXSJXZqdUmMKMQwdF8PhDV1Tuzc",
  "key4": "2t8RJ1T9uAzRwmWFbg59fP2pQeMB5qMJNRPJLTfSJgKCYmiAfHPgSKoU8BeXoTEJ4cWfas43nNTcfpusEaPhsy3t",
  "key5": "2mbBYmnXj2moziwwjsrPqEZxruHsS83anX6F975S8eKhaTRD5o8n4LTFZTF184YQ1su3aTsKddES4Kmop3tbcvuC",
  "key6": "27VCmou1Z55MMKJCAyNKNxNhczhEh3kA1XWuVKrRf9CVzZqkqLZfZrQzkPnECLP3a41f27cWnZsQN9Epf2SQHMcV",
  "key7": "Q4SrMUTYdKoTPjPkNtartUoyGEK3aaBqYDMJn4VpSc6M6oDv712v1YRxM6uRstGP9QPRwjQXydDBCcckUdBhmq5",
  "key8": "mfhXpHGLMvMT4yWN7CkksPzRprLN8wgAFWrQD3GiMeNYi4bhFr3NL7gWwAAC7X16SdcJTG4jKcR229DsAdQYsde",
  "key9": "g3QExUhptQfpLBrC3RDosbcbBbGMGXfprLpRY11zyEvZCwg3kRh1cYQzfsSuoq8c8YMQK6mvLVU4ecb1SKsPUMw",
  "key10": "3B6oLeBvGX95qL1BAL4QM1NjiqvMeDu7SVmXrYVMr7wXiBUvrAxyfkiRrQkpF52f8pFxKXG7LmXEHsLAzDJBwRrE",
  "key11": "yG4zFtb3bnZYPpmx21qS8bChwUKeJ95LYGRYAGwkd5GyRjLnPmXYcjeaTQ3C4mbMuUYpAzHqBhRGHwRoJ8SpFVq",
  "key12": "4nxTzJXYJqzx2rxQebGMsRB3wqmzmfDiBwdMbe82LzikrctgcoitqYK3ffz2kq4y4mTFCEmeqjjeSz8J7Rch31D9",
  "key13": "54xpEXVBKZwfAdfDRNUnRZYuiA1KwMRDhHc5bs4qcU7RgcysyuSsrfUkzV8azCaJQSrbjEy7ASh28G4Fkem7XZDY",
  "key14": "2RsyMdy6YB191Njv7kN72mgnQ6UT3rCV3NS6uJuvYqwFPhMrjm5o7CMMon7GVJdGsi7mwj7hVNH6X3a9Rt4JKkEJ",
  "key15": "3HkNy3SRCvP8c1WciiQBaL5WjyRdXcin1SypL9yyj5C6GCnf9DH8CyBc7QyCnRgKEURq9hX8UBHs5SFgB4Yfc24h",
  "key16": "Rma8pADAeBfB3vTFEeNUruoq2MDQCMeKAyUhxfgebzqLmHugQYJq3NPsiwxKusmKzK2y2UGKBGSoQRvjhG29ry5",
  "key17": "2GJ7wcSqrQsEHkpgAuGEymcXe9WgYCUVYT5VYPuvkqVDQWAULzCiKZZmPvXcWRa2i6fk53Wt1JhyLpFVFjT4afAm",
  "key18": "5g3F8TpfKi4qV6Un1NSSM3vZtxoEkm6FFSsxzX9QSqCmkEhaqqA7VKjUWzDoei4KPvqHHX7ZWoKghf543xM2bsAm",
  "key19": "2uL9w6hiJN4CLckxRgBuQZVGjkTjWGQvGoCqwzLAA98rdHo3HaVWsuN6pevyh2Uf6pne68HNp4zVtpAW6dBNWJVt",
  "key20": "SxgGdrSUFMmkhx6hoy8p9fcauxCz8NckNDusERzuUAowRTkTRAyZenruTVCycyL1zZPAkhXVJAY1FuM2qrNhVB2",
  "key21": "3NuKsSfFt8spdGhYA7WRhEQDmNAaZEzaX1mLuo9NozfkYmokXoZECrF9Jx7vaEGaZfq13zFJpQXxU4t1RBEhYvMF",
  "key22": "5egC8PggfCqA3tRykLkyMmc6Ct1FPTLPz4XqbDJxq4Yv8yvj4kiWZsKSYjaGfWakMun4e8agHfvq5LrLVMf9bsDd",
  "key23": "4oVAZZL6Hf4K4PH6iX7BYwTNUHnToDzBn5qfZqoamXunSZSsPXUfLvJT3xk51dpZpMth51UMHijwmJUQgve6rHJC",
  "key24": "4yzZgXnr3K8ERqDoPUEx3WfaB8NPP2qHhVCfpZ93LXNBh64PjtV8soXvoPogcy8S9xbxd61wLr35y9ygiVmhYmqk",
  "key25": "3nNNTEQ2jYZ3fJbvcZXkWQFwY54XrQ1SyAkYRegcXUpyWwQ1wis95LoVKyzr5x8tWijDK72LoxNv2hANJWQ2EtFz",
  "key26": "2H4bbCT4PTcfgdWsgPgQuibgd9WW3wXJbxz4LprkBZZWzzFPTwQ3ApR21yDgPgi8TdDk7KuRT4tAFxEPNTh9rsGR",
  "key27": "3peJdqhfZpPFCKoEtW79WXPFMdsAMSJE1uSZv6dnXDdLrWf1UXMnY5zBnmfNeH2mLGTw6vma28LMn9aEE6jsqK2r",
  "key28": "vkBYhunTh9YV6j7DDNnwW2ThnqwecJ5AY6MPhjNEFDyc3GdnfMEe1RvCnUReqiA6NGKd6H8agW3pyVsPt4zj8tY",
  "key29": "5rJEisxKXAyhGhHEpRsGdT6TmH9zhQzjqoB7CDUHPddZqMTPQbjE4bpC8ksijWZoL9SoELXyaN8HV3xaSW4EAtjn",
  "key30": "62uYMJzivH5J4ym36nkvULS7ghhQvtxr9R8GvC67VVHgYiA2jFaVz9ZrKYuW3wmp6kK2iBx8auF7Xp1R7ixXXPon",
  "key31": "g629gGJoaHuNNZUdV1SqqytrhtmY47gwS5sYcnvpEarH24Nd7N2tSXTdAYWEkCbkLCdYwDHHfUAASzf6SW5utcz",
  "key32": "2qPygm27gsC8YPHndrx7Px9C97TV2vZPTGgor6JUSF2tsB9DcNbFiiES3L6ExuV5F2uEYBPNmfoDx7XyquM5LwoC",
  "key33": "3oHqbqtSKL6xBDaKtVEhiHDv5W6jPK8rbGL5tdHnD7khQNzBSQru85SGGeED2QefcLmozzVDENQYUsbpW2aa5dHn",
  "key34": "2d3DNuefDMHXfTp5TcJaWymif2J2WnT7RPvJqinBmv6SrRemcNDSJvGNTekWJc9YMxCAt5YUj3aVg42DEfd4TNCZ",
  "key35": "63g9Hg9FPa8WXLpzTL9kZeczpDpiDuwDMxp7NGYvqn1qC1FdPScssZgxpumcMfUd4oSFjsGr9SDs8kLfquujq73G",
  "key36": "55uqvT9pr6qNnb1D9f6Wb3c3aBdPbqGjfhLcVesoUtD2qKEGzaNJHARCpXDY19vseRnRHjdo5WrfTh8atDgwgzfq"
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
