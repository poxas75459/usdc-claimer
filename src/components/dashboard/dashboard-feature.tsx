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
    "5AxckK7gh6x2uGH6qLGaLZg6if27U1tENQAF96gNBHxt7ZjvVahvM2v9Q96kJpcbAjYKPgbAdzFq4RboDqbeLUdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QcHSNZBH7pAAzuEcWhyFuVYmHnhLcVx3pYyUHMySWMCXQwo1FhcMiT2nnJhaDn1nhzhx7HYy6DirGuZrsR8W89u",
  "key1": "5rX55J2ko4s9vuv7iJVEgigzdHEELd1KCucNAHLZzcy8kDdDSAsEAQZoTGV6KRFHzDKb7CtpwggRfeoM9gsR4n7a",
  "key2": "4HsBzV1e8puxfgBxDYY8jbCKQ8GbgqbeQ7mf8wBFKCTMH9DoGxostxgvM72qivAmjgHG7n3GkBUBiSpB5qLTpBXu",
  "key3": "QDkafg4WbTdP9VvdPTNxRRX68TotnbKVU2DFkTLtKhvZtNGEvc6hCF8wqsnHNwBMh7wRoeM5cVhveTbiHp5DYhq",
  "key4": "5BDm98i4G5UMTH7GiZg4CZZi2RPxg7SHakKsZFUwsFa4oLVHyYBdLvabJopGDQojxsNjjRRscssgAdZCQvv9YcUu",
  "key5": "4i6K2aWLzPTjbF9TJ6BPXvxTwY2YMiQ5CaTbHgejpTqnCWYiYX9RSeHyF17PKHWLYuQMWaPSE7HnWjzJspPm9x7R",
  "key6": "2cNsH5px8L7g4w59aPUFzBT9nQfV9vU3TZD21LyT89ps64LmvvJmjEKwuN1nWNgr96owmbGFKNU9ZYsY2GArdjZu",
  "key7": "ofsvRS1StjdrLTAt5ia91uvQGmx8UTz9SzSFw5miUUAApDSgHQCffhTFe8qAMcU8Uiuqthzj13vpVJ8zcwThVSm",
  "key8": "cHzsjp1QnXVRXFUAn4BhJQo9yizvaeixWVUk4V8ePwe6iBBw7ta5qsLFdFeaNVRwwHrJTkxZ9u1DcGeZk6MW79h",
  "key9": "43nZMfuKq4x781XU8NwRbWEfpavEHjDtmAeckT2GZedB9Re8coNADm2j3818zTLYMgYpCHsi4YaD3uHwSgGTtfo6",
  "key10": "2SUUbG3HcAUMuUiWhP2Lq5ECZXtaXAWTmgwfjYeBCnWdEcvUhtbXEci85CZdkaK2y9RPkBdiXvjSVcRMYdeyVr5o",
  "key11": "4BXwZ22quXsHjRuyn3h3TdKQBQxmfydsUruReBQBn4RpsWhH6fSc58JiC12GLoNFr5yX5chbeYzkXR2BthmXmwAh",
  "key12": "2MdXhhDsAUKLStQiuzedfUpKSVR5DnR1uoYfj5tSWnDXW7EHb9KbHLUdXYCJ7t4Ng8idDALHbS1EKNvNbWmBz9sE",
  "key13": "Y7bgiimeZUVmnBo3LowWJidr9Z8Nq991tSihPVwVdxDXB9TmisnTw6TrwVSPJjjPsQy2Bp4fUvnEN9gjkZFYAhG",
  "key14": "3yVH9vxs5bJmRpeSTmAwNgKi4LH9NQAmiZ8fCAnwJijqxAbm7knMffrezycmms6ytz1Yo1mwYqMjtcwzMiK8tVab",
  "key15": "4wAXh3YE3rYXWi2b9zjWxHG4bTeT8eYupArABGx42b5wpSMpqR2PcWiXpKTso3Xt3ThLPuzUgufysTr4w9o7pPbn",
  "key16": "5SHPyNEc9aG5fXKy1i5hihm1sBy6oVSAV9YcgkYDythAZFNR5aV654xGkC7ivddsJcDeJGj3HKE8bvUHtvQw9dqY",
  "key17": "FDD1XatCYuY7q6y7fkSpEuXikEc218QrWe8738u7h9CCCPuj6fHdB89Qq5Trvsq56BVZLipRXa39Q8YNUXeaf9J",
  "key18": "4SbvBMcQFFU8QZPz8c4tem9URQtreFsMd4xXNxgiJcMMyqpRc1z2CfEKwY1SzKU4896ibSpBfJohUHDYGmESmAWS",
  "key19": "4zqNyy235fNYEiXaMFv98XvnPCLVJt8e4kWyWvfQNJus5HR5gzB2xJ9armsvU1UwbVWeS5tQnkUUMq8o3cECNFBK",
  "key20": "4sqMGpeaKuuAZPKw4uA6EsdgLfJQpGVZJoo463gtkjpVuxnaabPaJzXUZGz24vVLDcc46xtHLVuZPqkBk2D5kY7c",
  "key21": "2bUJcVW61ybVNd25kKHCH67LBN7EpyZuRcWwmEzQxJGuzhFbUBL4DV4gMs4DdArhAXDbxGWPXXTKDVvAcRyeHTug",
  "key22": "2PFdUh3GjNEJ5zvmPCpGLGBf6EZjoz9jdNBhXVuEehPaNGUUijJpCF9coTCjpfDG7UzRaMmkSQ6Zovgr8PzDXM4e",
  "key23": "2Hq7GhGGp7tkJnN1BgcotyPC7ho2LJGVp8fPDqvkVqft8j57XBC9RCHrj3yfjUejgqAwEr8wSJSKMVDYCdr6zfu5",
  "key24": "2nMuAmKoA1ZQ1F8cPT1ZVsj43QfrzBv36VyHWTMCc6DaCccU4irvLbTEqHcSgFDHSz3qtMqgHo55ZLKembiJVXWV",
  "key25": "4TX1bRY5kmKvAbrnTMaCTsgcaBSNTtx6QRoC5a3YdaE5N8T3ebAwdRdYfevchUtztky8zUoLqzncmXkkAkt9iLAE",
  "key26": "QTaQy3ZNBYi4i4erEp91p2j99CE12vCV21GkSoEmfmzQBx9w6zhDGaQVHPAtHgVdhfkCfhcLUessoUBFKYNGnpC",
  "key27": "49f8EfzYk6pS7oEjgKRq2vXueiLE9nsp9CoSWAr6PMBMXRHdCpffTbeJfTHg7xdjXmVtJgDosp1tJGAPRZoY81es",
  "key28": "2AHZopnLJPae2ULa1hxz3juzDKi6PoDDjLoGLFo95QTAVdzm6ES85rvt1z9ciA8jrmavRDiiC9XPmyPeoXjVYoC5",
  "key29": "3cjQTgXdKiCP5X4vMgWRMPxyFJFFtXkg9eiCKHqREaW13vEmCsy6EhUzqBmsXoWNa9Qn5dzGDdy75m4DumegVnG",
  "key30": "5nNF2kiTmwG5qqjWciyGt6w2DXdgZN8FvbmC13b4xbSQuRhSixy152mASzewpi8RgUqXVotUsGRdZquWjPu4VdKs",
  "key31": "4n7QnDTdbftprgqJG4ptiDrWoMgfXJYDxLkXwoPRub9Ztimmwon7zwyxMjhBoy9444rQAMqykne6o4K5iLJonL5R",
  "key32": "4hkefgzNAQv2Nhsyusf4RXwRS7jTacJoZGHUQe2trjwPSPz9zxP948XN1qPGY93cnGUmdF2ajwRfwe7paPvhRRPG",
  "key33": "2A9PHziAtqF2RXQfGWTuyKYd2xL578SmjJE1GDga5SvNS2xBXwaw5b3oNxh5p7ueVSYCDARWVk7T3wJaNvS1KxtE",
  "key34": "aWaFN4UgQ3SNSUXTcSsRwUaDNq1uYW7F6R8QUKwGNHQhpktJF9Ket6WFVFJg3zkRRcKNWAUoT29RA14d5KEJGEQ",
  "key35": "2xYZgTknwcoXhj3iouBXvD7xm4oUmaHDG7wP8CWJA6CKQaxW81u65uV3FaWu3gMU6XTW4xXU1YmyfQXBGv9UaZMN",
  "key36": "5K92egiARsvgdTsVY6gsUd7pRAwxZSkY6XZemfAzCX5yKvbvRb8XMZ1fSyb6aGTBk8chK75nJqSyTckxKUQ6yXw8"
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
