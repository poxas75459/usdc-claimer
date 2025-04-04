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
    "4yGJzYtpj5y8EG7Dwoy7ZJrgRLpaHir9fTwG54ZWSATzjzjUYHWQ7Tpm63sMSpK49pKuj3URk9aHUQKUWktqR1EL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dNMpVNiva75ohWLupxX8HYRkDwzyLEs8AZPAYiQhV7uaEyhPw7zp6gzUh4DDpoNtfSBi63K3SqPcoXn98qhBy6G",
  "key1": "4HhKSPQwrRC5Dj8agogYc4fW5BiszuPfgnq56j4s1gVqsZ2LpcZoQpzPATR3Phz4SjmUxwHEGmvDBSjd8dNp54cC",
  "key2": "5ceypK8AUDrDtDytLGYMUa4LvnNykDngREecYcnsJEjojJY3VUTxHETWrBxi5VgLozR37A2K5zUGsumTDC2PbwEd",
  "key3": "5ewvV6m2xexZtpV6x8zZtmXCwuFYWT4c49BE54cXWohfyJ3YU6uTe3hG1DGYmhbDXn6z6ZU5Kwq7wENTDkXSPr6a",
  "key4": "27cy77rWKX4tYxaF1hteQC4YLV3eME8ojPx6zAiUD7huY2fkY8vbGvrNV8VeZrCFb6yEXxu2STyKx1uSneKa3xTs",
  "key5": "2uWtaNhM3QLJvFFqWyVTSbQjeSCbL4BWYkLZQAGym3v7LUvkttTDE7N8F1EUrUB3tzBYttgE358eC3h8WfEiMRf8",
  "key6": "5oAgLCxDmAF4dNPTsfX4K9nMipY1WSeK4wsjjGPwhs5fbbxxu5ohm4VEMryjEANBB1ZizLfuSRWBe89vSdFp6Bde",
  "key7": "637s22cMkLQwA5rZFVnNpnci7CDtXvpbs6MsNvh1mNr8p915Pa7KUjrVbhzwJ1QKAMANFhQfLEQexVHp3wq8ueYG",
  "key8": "4XXrMbe1qZM6X8jki3FfHRRjxjo9cbdujSak1DtkuCPsgm19EhhSke2AWvf9WXMthbiJeQCnKZY8BCAH7uvspN8F",
  "key9": "z1CcxTbuPfLYhLGWkNE9Rffxftv9y64gBPuF79tyVp2h8pM671hao6rFAEF6YPTiixMHZ84AHkk6npC9cPDYzxP",
  "key10": "2RLFAGKNAEm6hf265NYFoveX16CYroSDvLo57QDrTaEYrXs9e8t4ANfoxP9DZhLXmo1DHgNBHm6U4tEZgh52PUcK",
  "key11": "2BmACHjXTNqh6CcE3vLPNhz8QanngvkV8GpF7TiGfiwiAxoEWpRBZ1aWcxomB666hpidBfNcgko8asaPwZpngYpV",
  "key12": "4fkZZ31cVzbF1VbLSSHaJxUPWaUdPVq5AE7UiNvKdiSLTGPqDHjCCsYYC5smfQWD2QZZdCtYhP2FWo6S2HucrqDY",
  "key13": "4JyQBZnMyfPTfarPd9hLwWgLgtaimUJPbw6mSLLPmYs6JnEXNHSVhRmWyd87HVEjRYAnRMmCPcQTBDNJXwd36e42",
  "key14": "2n4dH6qntzZ3Pft8uGdDXW1yi4HBKpmESNKsP1FpYRj3SnucuGCe1cw6shVonCkye1ahJFtkWeWcqHergGe7bJEh",
  "key15": "4cPjAzxAusMktnNCm3LKUppnB3mXSmVuTBRwfv2UTFwBMWcN15LSVtZ3HR3FR34njS9Jn5aZ7EtZfNw354wyM9ok",
  "key16": "rLVP4rHe71HYHFjNGaahhzKYd64sbE9yvKpdZVbFALCtQwicrs4h9QcCd3atUiVq8ivyTPAx5SdxWA18jwi1YLv",
  "key17": "2FqLjreW4koCNadQqzi3atcfLTRAqSSVMLL2LHsEd8ShSzgSAn7Yozgh1dSjp9SLdpFf5hnxyWFszcmAXc89hmqF",
  "key18": "3VMwQq78f9m4Unisi3EZyXDfYJAkQq1k7NzPZVgiidtHC6HrPUF5BJAkgKQsrWdUf14vtxi1UWV457JgfMGDoVga",
  "key19": "25VA44ShefsxLv7f2d5JvDzvjfwvx2CkG9aPba3UTZSkp5P1tXKuK9PpsBXmocargR65d5SUtqUSTCWmcEJXdgzo",
  "key20": "jL3nxGsqSUEP4o3ekaRDzGpsbBDN7X6oTiqnk4s82ewwYKLHWhx2H5VdC7RGvuwBTcitexCDqTjJGdw4cVn48UJ",
  "key21": "e7HrFdtcqaV3fXX5ty13Dqfj8qx962WKAd6FzHtL86PRu3wzsGD2Wiy7986v9rN6jZrR5FZuuEfHP4Uic4fgQih",
  "key22": "3rWgohNk4BWkcYmioRDvD5JzRdRMUNAAwVKCUazm7vG1mMLy1tSypNcESXD2DRT5EafxH6rxSkZ1sQ4YsvDMDTM8",
  "key23": "3uvMncwirZcYUMToAMpMkH51BcWMsqFXmHSpDFB4oNs6YpMjydCK2W4WTSe4mVrdYcRjttLDU4fiGKcaC1SwMHtz",
  "key24": "39udGQjXx4EyEtcS1TjkJU23kUjUxLDCBh4Q7pvU5PwYJtEnxyouFtsNmayh65JNVBGUW3v3TwcUnGSDMmvdMxYW",
  "key25": "4CdNKeEXwgECZd4QUEeHvcxmK6VwrcP4mdkGzGxpuaHtqFgftdFEMF3nA4XXJAeigccadkQRGtSGNmNJZwaLDs5z",
  "key26": "5zyKo6pVgCt55qYt4HfwPMQuveD2j5WT9HcFCYnTCwgUAZDvyvqbTPR8LLhaPLYKoePvm6KkuZoJ5hzpmBwxtatH",
  "key27": "5HyXomdwWKEstGCiN3Q92FV8pkfTqajjZdj5sFPaHCQ3PtE8NrtonTRnpmRSKJdK1AAPpfZNDzmxZLF3ubJomuxE",
  "key28": "2sc4SBKZBeDCrfAYkDZRaZCwVqn3TN9snRNUNgEeBUVtajz8EK1us16LsNScWyvcuzr9MQduVqv8D8RAUFvLPwwx",
  "key29": "zuigvdjkhzwrT1283Ax8D6HosogyL3NTQHwfyB6rjF6k6uaYzW5zQwx12M9AZ4tyHyBk6eJJu5J19MEy89qVWMd",
  "key30": "55BH5HpDrv2MJ8KUH5CFBHWT5GEQwaNpi8NVwW95DbvUFo78zENK3nWRk1rodVmvMnHMHWxjassvEKJaVxixgw4i",
  "key31": "YNgd5UntysruWRzPCemC4XUSqTWggnacEzcUJqpLLDc2xNSQFqWSGy3Er9hW8o4LUQoyV9g6KNeuzVaSnr7Stao",
  "key32": "4Q1HspAQN82UoY54X2iJZbXe2C8Xmq8e19bC97jLmvnNQGsQ3JJPPiNF3Wg63V8VSJLTsaQajSxK7bNfwCVHqySu",
  "key33": "32aKqKRMmZsPDMVayk8SUCQ1cJdSdHGUmLaTJrXQoyxixPice882wKPMZFt4G1sh4iGp3GamRwR7SYji26jWg9E",
  "key34": "2oX82YZ1wMHJj5sgprvPRaL34tSrJaXvdWK5FcwPpjUGtPKvPcWKikuxeEzgb6G6aChzqsFvFd42mMdvdtcJDCyA",
  "key35": "4aXJprWQaU8X2R4tWowYE1EtXV9A4PA1KBHb1ZEDCzH9RDc6KJ4btguFtcqkHoTEcQKeddDDHLf4bn84aZGFLbEw"
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
