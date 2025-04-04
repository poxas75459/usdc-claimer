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
    "652po3VnuBQpwvkegE1siq2odShDy2xzZzdM7uU4jjAVG5d71Eynxb1rXxxV634xteoP6QpYU6pCszx7DNHFZLSk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6FTvcqJdkZUk6WwXa9B7iBwAkFjFoiuTcrHU2TTVtfowyoF9hseAApTQjJMDukMPbgbZ4K9atA3X6boxDuMi6Vx",
  "key1": "3D8SXbwKtrZqN9xfGkLFaYzjwCHtpk4hWHsXxwG8rmzMk54h8P2iceoGJhLQepbq2ghHwhLceS2MncdckWXUJndp",
  "key2": "2Ds7cjeV99oGFcgox6ADwLKc8GnLwBa5KBu6aiJ2adLmDpugtjEwqoibnCizXzY8haJMpCkAVtKwSKr6MwdRKLbs",
  "key3": "3KqJzw9TATSMevWP4gAdvRgV2Gv4LLfDuYZiuQBVXD3gL87MLuhEgdZDjMpNbvPZjqMXpLeSnFiHad3ZT1agDTuH",
  "key4": "31GZZhmTFtD4MJpu64pTBVBudkvZmbfJ5M1evTALnPmb42kibjn88wpCZRR6S5bUCiCDUtYZwM3WrjTbxV1ZTKH8",
  "key5": "2VEYah4CZMAgQBTqvf4tEEebzDyW9bdZJjmXtnv9V8pB9wyHACmMVprU7uPjBcibcSghJTAH7qqJk7kZDifAx3oL",
  "key6": "5xTpFh3D1a6DKkPwQ5UxaStRMeXs6ZEmwx7C73bThSXsbnSMB2A25h7x3wJTcb9maLSkLEQ5RYnpmtH6Gm5qvo73",
  "key7": "2fzLW4Vq5kGKA2SVFQNV8LNFn48jkGjZ4wUrmCoTgUmDke4HQMTtABMbcun8cjRsQ8wbdDwpJZGsUNkWmKr9wafU",
  "key8": "3ywi4dXtxXQW98fReowYYVR55XPbFrNXYXXxkLYtztx4eSQtmsBNpRVDcLywr2fS5v78Q8oyFqitjTzqB5dh3RHV",
  "key9": "2t9Z2pEMtzdWouVG99NXeBstNxStWwSc2rrYDtKSLY235FiSD2FtGmbPRc9GBiYZe67ABBCpNPbjoAxPwiMse9Mu",
  "key10": "4SBoPL4GaswvaXnKVrJ4bfjXSiTArkqnv28t511FUkbNN8hWUaZBcTQEwQX4JoHDxZK4eQiaAj4LoKP2YLcfzeXA",
  "key11": "7fCCjdtiCUjFesTmRWqfUA3mt71a4Lb18u4xTN7upPzcGPwFrtaBXSN4kLzjSjbJHxCEovFbzFvdST858A6Dft8",
  "key12": "43eKfExmFoQ1dt9UBXdnNBX5ozXdhvowTwnpE7kXewprYQbY1P46ZFbVwLH2PJhWzaAx5xMmaWcahDYUTir2VFp7",
  "key13": "3A1LdCiNWB3T7fAq48xTt78s5KiHL7HFt5WZH4wq3Q8ezHz6XrxKdmyoRxk2dyW37NXSPyaj2bG2EkJe2EvxeZvZ",
  "key14": "4uQTwjRzjQvqDmvLjDmDvGuZ273iULYg6RiBGk38x6ZAqCiMpafDhMHg5NTQGPh7bnT2T2ymdbenDzax1v9j1mFv",
  "key15": "5Gww926a8KZikdiPk2CLyTBvUh6i62msXpD5713ohMCNEr5Z4au6iAteiSUH7nHhX5ZGhawmnwnqxKQTxXSPpQR",
  "key16": "5AwQ8xCqW1XLpHTC4indfVuY9nrf725b4ZW9WFzwt8S79wnavgcz8jRUQBJuvFQ1N3GoJkZ6SAZHe3G9fKtfPApx",
  "key17": "3Y8vcQspoHHnGzMyh3YgXyg6cEb1zKcY849sgkT3AkfcUR1dj6p3bDmkzKzT1fKsCtyvrPkpfzheZwKqPU15gXWy",
  "key18": "4AgSGFUX4kAbqkxBA3syLeXjb8cqfuzhqwPEk51WHv9WtgjZkHRNFuBVGbsNaGJzEgpn3tUt73cMVWzHwesEd63A",
  "key19": "4BkvvuCdmVtspxN32CNUr5jTWS6AKydq77nco1LiHQRwvpkGfAGtb5p6RyAan9AZ6rxQTq24z6o18PURbshZLQq",
  "key20": "4i6BTKBhNLDdMKNmUmmMWMSiPhA5pkzQux4qC73cJjCTm9tcoVLa93gEVfA3442coPmWJKoKCbjE6PJg7h8iqUz4",
  "key21": "2nf9h7o5g4AaehdRKMDnqgxmaAv2N3uLg9ogNte3X1LEGz4VMcFF9o8UKU6ESXFDyqCQG6qyuM644rAx8WYTmc2j",
  "key22": "58FSqG5y67XUrphHR92jtCmy6oCM9mE6jxWHrrYxSk2RVWceq6UErtxUh2WiAHWd7BVcu1VGA3n6AW36XG54JC8d",
  "key23": "37UW4Pzwh3zsbK269XY4BRcPM6rs2uP2odrCEDHY3CLUtUAkkc4FaSjHdNBgiUh6NAFTXH6811zj6sZ1NwDEMfMr",
  "key24": "3dZkuWp2uEDZyjN9z1GaWfmLeh96ZJdumzLr8Pap4T7TAckywyawJtW2UsXSkuiVZkPq6v34G6ATDL6GxCoW1aY",
  "key25": "NtT9Tf3kksgPjP6yeCfXj3kt1wtY45hkKCVyTLM4tFafEpsv1hHwueG4B8Bju7pbHC3rwoYDJobupBjk5Kvppqu",
  "key26": "4EqztNNowzy7Uw8kAMa8PvoYf3376eCSW6U5fXEzJsaH9FdQw8zEUrWz31Sm1wecHs8MEKmqS7cKXRRg15dZzMWx",
  "key27": "2u9ta2g1DF5kCzJz2CfqjNvNFbtGGfqF7wRa4tL7V6iM8URQ4QTnWj99oTFYQRVrTkZrRtRRqrY8zndnRfm62RBU",
  "key28": "5R6D2zdZXjZ7BsweJXLVMeaWQhHGzMRUozWBi3btbNbxW5yn8u8KDrZv8UHPpWnn4rd1hLHzsYC6zhD1UK8yAeju",
  "key29": "4CfJAGiGLQonXWAjnexwbZikrPYk1q3ZvJvK3nnjF9sfo7UU1zfTUmiAvR49Xi7dYfENF3X9sWawNLqVi6cpdNaw",
  "key30": "2S6bimf4ocgdxz9xQQyaeAFgfxfbfvH74ScgCDvuhXTxcBrRZ3CvfZK7jQV5n2v64tJVHkxKFQBo831gib8dUJcW",
  "key31": "3QE1qRebgMHcWPmsWzU5kwJ3jpSA9gMBVR8zJcuYMEaF4P9SACggNXqhxfBBrXFZDNaEJ3pyhr96YQoFxp1Q3UaW",
  "key32": "5CxhXacTU3z4aMDs71B6ygZ4Y4oxF1AW5upMHo8tv84stcFXdhGYuRxg8PNZYwdBXX2vGR9UBPhx2Q9m2gp9fPgq",
  "key33": "4x3nSVGvSDj2uxBkSvtc7QYjosbNBKuy2XGymCUCvPmieFPrpjdmMbTZVXyNGn19eWDx6j12vdQPmy17W3mA7JcN",
  "key34": "4cCzs6HykTGK4n48nAJyiGaesu4b86cTtZf93i69vkuZVyNZGTmPMduCcJPPhs2QrWCy3oDYT3HjRuxR4f8hF97",
  "key35": "rhV2GkqhP9fWvHfMTpUpZPZJjDko6hRzCHjqucJLGr22CegkUYTDcxWcsvshHk3J4X6ACKggNFKnjTncn6BMLXW",
  "key36": "5DbJzGyQbdf3Us4QgGRbHmoGpyt7fUveUi6FaAr6fLZL4Jbb9bzsWMyWEihRQzNrPfEGE4yasiuZ1KvweKKHxejp",
  "key37": "5B5AS2jUVFTK7un1HoMT8csZnzA4QpxbvVye5ksnd9pPBCCFARaBqhXw11bnj4dFWu7gahgCcQaMUE2iD6YKpHLR",
  "key38": "43qDa6Y9Lx7TcYdzWhzKnMWcGXj9VZRppmfwXfEhj3S7U2xzyqUT1J4fTLkwwpWG9DvLCGLyvhnD9eVqWD5h2mV1",
  "key39": "oRQqCXbkyJzZTdoJX87nTBV1rMrPVGvHvytEsJGLug99Bn6x2n71ByxarbBnRwUcdPPYSzbdcg8ojQACSU9T4F7",
  "key40": "55e1wyV7w4qQxc9dce49mfiiErNjjZidmdaeKK13VPiWWzhtc5GNW2kV23Rtgkiuxf9s2vh4s7cMrMPd1RR24qCt",
  "key41": "4t9cE6sa5jsxN9CQ7eiGDZgw6avtJWA1HReUnqEJQbjALH24ug97BrbqgzJczzbfu1yNx7Ui9YZ9wyxZaVvjHgfQ",
  "key42": "7fk3123mHKcmF9Ejnu3EGMQfzVvVGteFrWRgoPfQ7sycxc2xPviFHQDNjLQujqxXno8XksfuuJm2Ky79wMrWFxV",
  "key43": "2hqsxiWuuft4nTzZ638nM15XYo9CiBidfEMEqCi1CrudnnobjQ7UUehAnQ4TjxitJERLjUB726HToGxrAiawaX99"
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
