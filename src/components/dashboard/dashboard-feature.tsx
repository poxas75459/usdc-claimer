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
    "4uPt3B3uhHE4KAt5LP9MSVjMVLrJS9FUTj6ysoeRdmgtiys6H8PSeAiC7v9A2zqV4uEVS16oYToTEaSAGngthBo3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hbn1oxBBfCYU4Fa5FwUvy4fWG5zQdgZAKC6QuBmaenr3XhZJxtNaKeZFez5JiV4No9BF8J3FZxaxFND7vsA3UqB",
  "key1": "4UnPBSNLpStjusL9EFMXrve11kfcjMeKHDYburzK5P28oB13zoLk47Aw1AirKEMuwQHbWZoqA8E5AXy9aruSrWCP",
  "key2": "4kTvPwxA8npMrXcaW6SfVKiDyvF8Ch3u4btyWLsuGBPUMG31E1KLxE7wMccaAiCPjVjMeRiRNomwkCMDJVLgXSum",
  "key3": "2XmdyqkwgN1RzfiumdnR2kA9ju9B3Dmw9SMBTzX614yYse5A3WxuStdPXtNfadnQyrbbjnoiV92gZhdZDQSyva8q",
  "key4": "3XZbDWqC8LQ4MZeam9WSmZsRyKhgo4CNRqPsSvu8uBEorUtZ88kuGneJ2gnbon7QjNeQ6F8qJhJGLCF7YNi4CAxP",
  "key5": "3Dtkk6stRczxd6dNTF3o26rJevL4LK4szm9nv5XpW7y4yw2sANmP3YPAh4qsGcYCD2Q9rDJw9HcbNmCfjPa6P5DX",
  "key6": "2MThuXybLYEXUivx97ZBo2Ng5Ao6wtABT7WJkVckTyVCVxtvVsaDE7i72qBe31Hfcp7126VToGEmQKAURYujPBU1",
  "key7": "4BLiUVtJwqNaih9K6C6svjtUzYrn57fMvFJCGXPANxFYz4xZXdKPWcYzcsyLhfeadzGp2db1QXW3i9YmN6izB4nU",
  "key8": "ztv6y9Kf8P2PwVj8AVhpF9gSqJizPpstbeQvDVwBxmqSxWopMZxNPyZKcicK9R8yk2xFqb9oQq3kLZEteriViQv",
  "key9": "3ZV2ugNkKUoZsqweNTbXUDFD19X4Enr4tRnYKPx8fLaeYvgfdSqbwb8TdkCgZfN8cUTPavK3KQsUbvKr9awzTeg1",
  "key10": "5mJGXpSZqcBhp74EVsbxV9eZZLjP2V7YTeT78SBF2LmzbesT8gLYTWpk2C5D5uKRVeksFqHgoNKq61EB9nqh7Tti",
  "key11": "4w7pCmugheFbajDoCrCckXgRj1bQiEfo1f5ZjSCepZ39eoTpJ76x9ssgpaFE3cveyotaHYdbUb77ZqJP9937c4FP",
  "key12": "2e6RYwZ1477tHUUi6P7qgMQZXrKvb4M2bqNyr3S9MDHZSupSo6hxJTYaEbFaAJZHHuMget3eKR6Zb13ohJTASsh8",
  "key13": "2GL97uBSwLrLLUhc6t57t6GB1TXpWsTtEBk7A37MEPAV6EHr8nQS3EH4rBEbWEF1pvfvMc1ExLDmqARfraaXgAsg",
  "key14": "5649CWmpM4SKb9DtU8Rnud9RR1sDvo8My5TSccwdBPMPc54wwoYH45jXGQev66hbFhr4ZXyobJ7yJBGmtTB4ViKc",
  "key15": "z3BeHALAPwS6ZT4TG3Aemaqd4XETDuDxiA3A5vuBEEZ28FCExrMo2mLnp2ozbneui2nTPCKiYL88BdgqRFnhHxZ",
  "key16": "3XXRpMPgB6319fChWoVM2Go4WQ4ek2rNGqe1rBUqBpBrnLxu7GcPFjWapndoyyFLN5UbUFLxKkKSdGKFfZRihBpU",
  "key17": "2bG95dV38ZxaQVyoFqX6xX1cRpk24Pa7cPG4GJxA7rrZrbx6Ro6JUAnLvjbM5jgdhK5c6Qe78xGMdr1am55N9uCW",
  "key18": "4PKPA3wagqVDVka3pRuBh4GQMciFAQMkhAHEiduEJA1pjZRdpUoePmT7gn3vh8wVun4GbmJorGU6tGFscQ5n32hV",
  "key19": "2A9Pcf5FtUS3fQ5avnY2ELnwEeBxSNv2EbGWJGdthv9zMgX6Nr4dDbh8NMiE9rexAx8U54TvALuuzvtFT3Y7pZum",
  "key20": "41PfQar2WmNVAj4wbLe9RU4JE7XChcYYiX8NcVvEK6jqDfHVqZa32RYt4YLjV7yDTjtSn2H7KXxzb6bRjpRr7PtY",
  "key21": "4cXzATmKmddmtnez7XoTNizmM3jUXJ9ya65fcPyhWtbRpp8at3cUvM4YibDinqGFkMvc93XEMWfYowsgEsBpiPDv",
  "key22": "5yMUh1rKah9Y1oiudb5HCwuSn5cwaNd4KGAv3WR95R5w6cfs7XkZmoNP4AbkgHCPLeT2FsVFQjnWN7ANLqsbLhsZ",
  "key23": "5w3VPpaALdP2VJFt4RP89udMk5yS7MK6ZKgvUm2Szj5hPupKXdMAwfWhnNhDeav7g1y1tx4Br4UseLwdZZWBs7NU",
  "key24": "Yv4f7L2sWH98onqDhGa8R2o9n5zTBa8X3mMmLrzrRMDx1u3RYuszhnUPk77zYjwVyBdMCX2tC9wG6jz4PeHqCwg",
  "key25": "5pesfnVVkFDnDQvCbrCq84uRkhDXzVF6Q8yCSvtMsH8ez9A4U7asozV2R7HG1gcz8us9xdG8yhz7MArcybFPLkGu",
  "key26": "1RzJ2PVB7JwQniEsQdLvXAXwkqY1hxWc18zSY7rr8LrAJgKG8GaRVDXoc6TKre5UPAZF95kikw3RrUXwr7GkYbw",
  "key27": "48YHf6RuBRA1zoyBNrAdpT2pjnarsVwdBWvePQJxdBDGquZzAbdHmcZEt2Y7U1nbY9qCijLPNHFyn6RdxP6Hv6ed",
  "key28": "4GqvMAyZv3arvqUP1Y1xgcC4VR1Bp6XbcGLa7yKQRT2J3n5P3cVCyexDM4S6GyLjXyB5qqijEDyBeup5tVXr96zW",
  "key29": "2Hzb1q6f27csc4pMBHhCUowyR1tExonHFSyMcCjvQp7HgpKEk66CkehqBi4jk5MVNu8Tcp45cEc8e3Swz8imMUqr",
  "key30": "YRCHk4eEzUfFWhfucEHZ9MEzAjnqr5vntqXzbB1o8hzFWpuKPuveNqmLcUZHwysfrTfZoEVmy17bXeFvqBQWbnu",
  "key31": "b82C6SfPs61oarqL8RbipE4GaRqLe6DTLGkgBY7osRAoqpeBE8ND6Pu46Tt6ZPZLddxWnt2UUb4y4YjwoJcDww5",
  "key32": "4gxkFnsFZio6VeFyR5wgrXjajETYL8pzHBESwQp7fCuZHk9vGTFthoYuowP3KpxVX4K1S3Mhy1hu3t9QNdJsjhWj",
  "key33": "3593ziXGHjVEQwrxzFvDQFBee7N7Btpyta9ZQcpn5uB5s9W5DqFmafyhDWiPPAqLQxNHAXL4zGBCUdgZkmyo4NdX",
  "key34": "51cWDYpJj2MM7GQ7DZyH5FFxq7SX3pRNWPLZV8SkoMKeXNBioG8VMiUWMt4dTDW66EzRYYPEi4KXM3xoj1BJJ5ax",
  "key35": "3yASXcS1aaqRkfAAgvPugRZB6dW2DDJ2Fj8PqW2T9y5PCkAQmbsNA4du1tqH2hMX3SSKxdHfuZZYDQFXxNwteGMi",
  "key36": "2iEsHer3buwqEzNjrAXGTPjzFXQF9CtpaqsJ4XNVHbNfMUNauwBAT29kUhmcHPyssMhxu7r5qbVCghKPpdwzvvhV",
  "key37": "3mWYTdRws5JMMWndDUn5i3K3kgDK4nW8gjPj8subypCcE4h4MA3mB7sdjnNKyJLgFfbVgGH5F1nEZLrj2cLH3Fy5",
  "key38": "21xrhc89on8S5fuNziduMFgYiLf1MFeC1RwKnouSKhh8B6JHMmGMsYfoP5fBYEFkuvsQrnxyPFtvyDpYoVY2QfTM",
  "key39": "5WitqjaRRjqvVXaQymsNqUpdqTKi5Lnuimy49F9XDYZS8XQgEtBs4QnxTNdtKEKCf3FZhTRrQXM3KxmoaYheZZE3",
  "key40": "4o2pPo5zaSs9xZSkaRGatmP1hFm7vvNkvTnb1PVS8gHqecYpoG2VoJ5KHH9UBZHp7dyY3dsaK6S5gUWTphbLGq4y",
  "key41": "37BMR79hQs7bi9w1XTsLbM2vsc1i9oEQj5dfZKoNhHRVUseuXcR2cdUBqTCkdTaBaFvHDVnMFH6MsoZuwPW1jFQp"
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
