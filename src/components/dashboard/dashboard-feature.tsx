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
    "qTV4GdBWLVT1EJb8Kq3YbrTKyNWWfCXVZcJASmKFa2v9G2hwkYuWG9New4CJRePCUWMFr3RY1uaEABWuHB8s2yJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pc18Voh1mMT8rBrDfuPuPihvp653ANmpVtX4kGag7DEPtmoNnuibLdK4d3FQLbDnTLsDRWcJrPsj51nzNbVB99J",
  "key1": "7jH8gKEwwvB4bLXCFoEsrdrbhPnXAP8Mxu2ME4VfGaUjF2oceo1fLyAKQSP6Q7yK8JThwvk7npNPMu5VSrj5hpm",
  "key2": "2WEW5jiZNFboEvZfjYQh9J2KRbEfaBpSDjJ14pVfQpUsccgVN1ZnBZ6nyUxG3M3s7nSMYbcJ99FD57VFj8NbaHeF",
  "key3": "2ufkvYRT157jEWEubgmsA4T91Cn2DLEyeZYP3pXghSaxxSgLFNrPCpw7PLVnAyD1stBhC6sHSfWsp4og5ud85bZt",
  "key4": "36a1ve6UYZbRk7yHxMJG7qJHt2rnfpHExaR16rTEArvsRFr2SnQsvrX1KYj2LsPv7jvouhWM6cB3rnf3EZ2gfzov",
  "key5": "2LQ8243CYkJ1ds7ZXKgqHExsXonmuDmBQTKcDRyw513yDqW9miVqUJcEqMNBx56pwPi6aMc6P3AjwpS2V4xkJahg",
  "key6": "26HDPTrqtQgFp3epFtTUbimKKwDzeu1GeqnY14n6t7jUKs1fKuP1yMbqX8iQQpJx7Khey38EagtCHE9gLyooatna",
  "key7": "2NbEbTrjCP286CrXJjUPn9BcaN9q7PdC1f8D26VomJguM7rWgNx8UL99VSswLHqAEecYxdTVubn7eBD6asW2C9Wt",
  "key8": "5zVgXeeDA83GCcB73kFXcbFBhyRNz5pq5DAfcxSfrissztUeiUAie79PuGBNf5JZiHKsuXF9gWE76gh2ho4TR7JC",
  "key9": "EDbcuU78PNfaGx4fY5EQuTAvYhGUgE2jtMAW4CH45eFZqydNGrn4TK5DU1NZKdZGab17PkyHqMxZEzfWR46F61h",
  "key10": "2cGpoE6312XUJHSLFdRvRp59U2gpYRztqpxgE3aEdSAF9gDq6qC9zgQJwqAndLyCqYhVhE25oHzhuf8G7CwzazYX",
  "key11": "2ioBeJcmipUC5nSFT1H6B3UvEJYFUguPFhaqm9ywY7YSZ6mZbfMS5dbG7HpRMG4qC4vm2MUVMRv27yRxnKzGdX1y",
  "key12": "Z1G1UmYNdfbJzNCmD5k6q5T156oTMvrTSLg19K1k3aRjLsehxyHMN8NYcF2ze6AtwLkwFAdHhfmxbyAWK4YbJDj",
  "key13": "3TnQMY4RQVHnERPNyULjXLrLxor5BMuw2mzUQbQxaiCy18KfMdB2KAcD9x9mD1Ggco6CpnaFnBRdhnVPLPfgrjL8",
  "key14": "d7FRzhqyuiLTm4JHeZmGxHVd4b15nw2Jz2mbmMct4ZxMBJiwrdjvqUTezasKGbzZryB3s6fEoSQ1U78icePLD23",
  "key15": "3U7J9ctkDzKXyChyUovX7DZCFoGG8A6ZwKKuaQgdaAxzuS36yDsjWohbPbaLSTWiFyYeTXKrivWrSNe8MT2tup92",
  "key16": "3RAmCZC8SdpuymZ7zkNoFVdT1Vi5qzAYx7856wybBf5zHFGHW1ZCE1BGkTNHEnStAH6Epbxs2rVAEsWCArcHjBmr",
  "key17": "ousdtGLqb9aCwnKxzqo8rW2Ntk1M6qrZ8f94k8SrRiUq4cFJwtBAtZ6y7sYxegS6MSjEaE3jkTmxYWoxYX88q7d",
  "key18": "2eBjzR8u8DHV7Mn5AvtLCat2dKyuBZFHG8uBdegp2vQFWoN3MGDQTc5uF1RaznPRSYVfFM67HvgW4vZvMBVeoWxY",
  "key19": "YvY6dMoqQufDTNxfjgwWeg7fEdkBmKs82kdSe38sk6nKewJvtiy2FGUbCFuer1TwHDhN7FL3UQuDqpKfg5EYQsx",
  "key20": "p2HrQopx4RErGojQtJWX2Dy39T5FRQAWnjDg4JUsBt8JsC6B2ZQ7Zbc6kKaRCTPAf7p8kuaTyw7QQ66qu6xMTKr",
  "key21": "5skXc9NpU4fMcBcbVkzVetDWyKriY4EEKVgxCv17zbYw4YfbxqgKkja4btJaZLCkoiq449yu8jCxDJ8rNcwQWNeZ",
  "key22": "HYpaKKN6sbuR2pWch1rnRuv6XbP9WunhCXFmrsEuQn4n29MDTEUEGpa1JVSvcJcFVmKJWD363oZptmPgCoqdjkD",
  "key23": "5fTppYDvnJeussmE9QjUckPSpHaoNTpcugYxZB2XwRNZkCBmhXMgfTfaqnVE9HHqWsJcCdQcgBr5JWs57Wq3Hh7r",
  "key24": "5MDXPyCsnHLxMbNQ6A7pPNr5QgycgWiQb4MVhUWmN8nbprejoptEvTCBfPbJT5sxcSCpywQVLG9cVvU9ffsJPFYv",
  "key25": "4NmiyjBwBHAbo932LwsduZKRaZXohWbbec1EaxMEYDsPDVB85a4s4peA4SmHrQiTts8qydtmzCQYXo4aLR4fCfkA",
  "key26": "adiNMgQSduQdeQ59kLVgb2yxMct1p2VPMXxF3mFWQ6EKDHAnMdRiBwZgpen3YAKxHo3YCAYhNUJLnphCpkxy5hE",
  "key27": "2kunAepedqwqMd3so6SckdCSFHMarTz89kcmDC4yF5MGLcUTD81jsRACRCvJQECcFqfcqrWkzQtAe8Eexf5uXySs",
  "key28": "5YPeYWN5WuPXQjtaQV2eCJNdu6m7YJyuEEyhZHgotYbbzVgQyCwuZvygheFFX16vRqtFEoDwz37Suvz2saoQB5jQ",
  "key29": "3sPZxt4XqFTX6Kp79988DB86sosY3Mp7KxioHZNNpSyXZiJ8Y4QuVEVS3ZkhAWiAWt9Jp4wiDW8tXsueiXQYQRRb",
  "key30": "qFtQ9QCjwY4u8QNssuLNAqAqUvEFdabdCwJ9P3KcNsYY7jqxjiFdYnNw76CUJ6HSpHfSvsDaJ5MyvKdVzMpb7KV",
  "key31": "4euVRhnid5BQt7mFX9eNUAi1yAr6jNYzMAUefk9jZnWTUSjT9kMzB4Zwyf7mkDXbesztAYNLRXG2G8YJMXjspK98",
  "key32": "24hUioTGQUKLBxfbFceUL9xmTcUX4LzAoxvCcF9P6jbaLnAqT8NnpzVjvtf9EMm3xxwYYosuY43AxtK3KKix8V2W",
  "key33": "igAQj44z1u6vhUJzL2KpfotVyeVt4VLRhWxtPd6REzKLyEmwHeN9iMdF67cY7qw7bHByQQHDs13NtWpirVPfiSF",
  "key34": "3jvCQhkqak5HCnNrMQ1JUDT5Hu2HGf2QQZpTARD22DEuoTGFL9M9BCLqaAXWq9SJQvTihejZssw8VB8nL9MC84Rp",
  "key35": "TEbaxcpfShgNy72oqxJmS9rZerpgjfgWRWQ4d267iMbvm3zLSJDYcqiyvYBrMuoRJ9mtZaps5NgNVmoEf4dvSw6",
  "key36": "58QPimB8vTYEhyRRN3u5S3kT2cH3ea23g7wrvMxBEb7FVtCVWes3kemThtirGp1UiJuyhPaFN66siebxRn29ntnX",
  "key37": "2akiV7ez5zmj5kZqNvH3SHh3qEcMzKLsm1r7eU9vBAaeJpz18xCUdEsR4tQzCmsTBrPnHiYAN4Y9MWJcCSFmhLV6",
  "key38": "5vag1MFpLLSBvTkWHHJ6ccdFakWkyvXx9kgTjtCXrr7q1FLi8BxpG7eQ2L5fg4M4VWNYotXcwpgzEzFZ1xNdPGh4",
  "key39": "4fY3PToRCwVhzHuZK2vo4Y15gRZ6ZrmEbNomfnqEHbfKixEYkftEzzvm2ydbceDyA3tBScKpNusowTFRKBwQW5Md",
  "key40": "3W6tkJHFFExpk8mmMp4PcM1EwSKigbMkHYzE1BRmzdFR5mF9Sp16g8EvbYXm73dn326Gyh6zqxqEMz8bftdPsAyp",
  "key41": "3ayJMhF3ym7f9PVc5jNQPvPNAxHUq41TMStQwenGhCHscUsZmh3fAyBeriGjQFVWzHBLkKr9e3cKHwfZAdrbQtFb",
  "key42": "5ZdMKQQTvQh1KbFboovSsK8RMgCJHgT1piBHhxdGiBgrU8WVStPcjCu9yBGDAP9QkotmS5a429tjrYcCJ77ANRN9",
  "key43": "5zEiGU8hu35pKbLXtYNNDzvuEx3DGQtHTf5MyXqCaEZA3opvHxRwLqb8ZGVEBUn3b1hh4wdkdmVDXto98fWjDZhr",
  "key44": "3bZX3XiFvoJWyMEYDF91uJmQB6id4Qc2gwmZHKATcPFy6pTG5Aka8WDDKVjUPNR6FbBzZeMVPwwX6TMfWKzi3LAS",
  "key45": "5sG2NYPaj4XSrfDwVruyDThgkvaF6mC2vK1dfbgwFE5mfcc6m3NwWTSDciub1aoHcC2peMpru1TsZJA9CRvDNCZz"
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
