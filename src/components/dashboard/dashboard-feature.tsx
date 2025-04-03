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
    "3yozpqTbcebT8gWVdeYy9xWEwM48NwCHcgf9agR9VoQhoxsn6F65WE36E6ojmqAvu7JqcV7q8T2TwyPp4XGuwVht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dk19CVE4SYDXzLFGrYzgvGnX5R9SkTTykztQRZ76oMKAK9DTzhSCaGfsP9gCDjX2LjiZ7NjsZBhKMxVjGQ5Ceqj",
  "key1": "23qgFjJjPXdhesz3MF6uqgydkSqRrghYGf9mAxSmWWrctX4UV2uoHHVc6ua3W2UUzLqHiV5xUYDSLdnnqgStncZK",
  "key2": "33KjGChZsaxFijouYcVuKikbB8uDYKMR8wNYtQfD5yrQ3M1uGheSd3sHiEhCuaBXbAit8x17gPUTzscys6UzdHug",
  "key3": "SqKCR2ANeAGVAcPgtEcfqYXdTtL5GmTyX4TDHXujLXrhi61RKWvxV8ZzGTgZkcidqXMTT3Q8Afd47KqgVHfqdbq",
  "key4": "5SwAMfAnN21BsVCFs1cXmcmoY3J9NSW3jbqbv1PD7TKrbEKTzkLWiYBQHcDAvVNLbS28WTSU1jd6RThRaBx6dksr",
  "key5": "2pkDEYVJ9coGXhcNRDw5iphSs2bpFhc9yJcE5KXfZWWJBpC6FUFwiNmHx2qtXgUtZLWBT2owiGteECwk293Dhhrf",
  "key6": "SKmxvUqnz9Y6xk9DHuSjX7njPPfzp8dFjn9YL4oaRKz9L1xDtKbVebMYoBaapXaL78ktixJhAjzuWjShMyzk9tJ",
  "key7": "2XLgAjMt7cLfrmCTyiXVMZddkKCwntvQ38Nx4ZZPG4bC3DjvthaY3HsvHHJPXyTPzcD1H43vaFCxqvibF16YMkPy",
  "key8": "3ZQNArXxx9d2otT19h7uTHiVqrsN2bVwhSes6ZbTxWTo3Fp7xphJppdLsjgGUC96mbKwmBHrhxmyEHUK9T4se6fe",
  "key9": "53yBDhehA4VopPbKZqvqfHnHNAwtB7uAyYLiAMkxsMxTGkNeeJkkVLQjU1YkSfRtQF5EkBHEfJ6ffTLejKDjVtCA",
  "key10": "xXj1txLTqairqArLvXtPQQHvxNytd77CKFMBb3ySd49mfjazN3yMW2dr3npg7nWZSda12zrDtGUTxpHvXw3L8qG",
  "key11": "2NchSAuoztMt3x187JcsAYBFB4hbhj2teLMeBaf87xXW2xG7uW2ey5isg4fDQbrf56ZHUy8MNwPq1DoEdZ23YVYB",
  "key12": "7PAsH1yW2Fq41x2ZBnMbkUYRFsWDMAGP7brupUHaw4e4b75cewQNXBnvP9hxkQuHLkBtqNNPtxxrFMMMX2Y6NDg",
  "key13": "bhRUsFfgjs7Jq9qEMNCFxp3YvP3SjA41mgrn3T1SUbURHSU6myrd2sWw5kDeeKEd3G8E27ZG9TpxRTLd2GFoW8C",
  "key14": "2wBX8qC6B2CJ1MupxeAimoDg8MXkBh4mkB9F8XiBWgikHTpHstezaeifMoJ2Le6q5J1hjzpCag7RcPMPe3Xmg4ng",
  "key15": "2us5eHFDvzh6pxpjwwSA2dYq3VNNdeBhZia2AxPRCtK1iwGjTxELemDDWZGPJPnjMyR6RJhgPQqhH5bSo4g3TUdv",
  "key16": "3H1ZaVKKNaswxPvwVezJKJaKJqsLz71DTURpuoMhe16FjmWzQGxVBjR1UbAUHoZK4wEPVZGdYfSKLjUfvgovAaZU",
  "key17": "5DAvsudvdSHj9seuzmNqoDrAXZWK7zoqLXK1n76oZGhtZ6v6CSbLUE8Hpveuvo2CCFbH2hxUD1XnAv6zyFd2jW2J",
  "key18": "2wSSMEtaywymvGsdVbJXyCZ9exmQAipENJKbqsJCVrBM7zhW74ZM8zxd8SqVwPdTHuwvFxGamoRAs1P6NWPSb5sZ",
  "key19": "5pXCTXj6kR2Zd7XeRL7fKZ3uqSjeAFSqCu5F8iaxdg3EbAZnMmUMfkrU97jAqBCM4tNMrLeeD1tcYpdyvh1j4KFG",
  "key20": "3f55yqPKuoYi4aqF2hkckFst7Df2AmvkrBjPCPzB8QkvyQrWjeMx4pf1X6vmhZNPybBtARvy2D8D6smWXG4Ers3e",
  "key21": "3f9oZDRL8TzxcxrZK9qCWaRY4XtuRUVacsgpMaoJp8ZbE4n5AbPGdsa55j3MVctGjbRF7jGGmjgciHErfr3bF79z",
  "key22": "4bHyfdW81Q3e1zpSizTRC9hzjGmkQNDopJ77csnmVhJxxGeiauZ2XKMQjQqzqyBSg2w2sZJn6jS8qmZBFfnkRnkK",
  "key23": "31XUXdbLVC9kaQe5rszZprGAar8Tq6Bxv3icSG2ZxupoEhTfveQYPitmvNoULrET4AbDaFa9hwxrVeuCDiJD8fkv",
  "key24": "4C5JwEcgUtZqJx9s2hy7fdoHQ2JLDnAnuXApMzdbM4ozvgw3uUbgvYBaodGbDCGd4Cqb6Zre1zZLxBwQ6F7GpE4J",
  "key25": "2KjzJgt4Nc4Zh4Bj2zxYjJb5zSHvSC6L9yi5FABnG7qzuctaGbnpNg9c9NyLsnocxxmw9Y8g1X15i6a8dd5CLpRf",
  "key26": "3ggJZjRAeWWftZ2gVkaqnGx5a2WXxBCp3dSqj8K795Kh8CVLP3MH2cRagA8fabhxzkkVEfv8mFSrQPBAYFc2KYEQ",
  "key27": "3E4cwX7sE62p2xxw2fbGaGm44LGw8YChYbKwuvn47NQcqp55GMVjbN2X8T8rvNof94tiLpuaqSqNyji5uPw1oHNK",
  "key28": "k9pRw2jD6o4U5e1foWSrMXAbiPys4jaRMyeNCvq6hwjTkkA4CJ1E1Xrwv1JpENJuMpUmLchKotAi7mEWrVSsU9t",
  "key29": "5yGpWR88f4A2ay3E9gK82xmKhSiVBSYQfNHtoXuP8ygmVzqJ3669uPkZVZ6afCDp8W2H6SxLWaeS4UdbxunmSf3c",
  "key30": "52h4qSLAFbazkiv7BeQa9KqMPWvuEVghjtUjCKb5qxL956eXKx6uu2QHKWgg4FtaKS5JVT1vBmR6FzALKMEd37sX",
  "key31": "36hgtjzeU6RiPQxsZ1d8eWjB8CPzccdLykyspVP1QCk6mGDkPVJKTiHTCbRBQ4W1ib6cMb2aqBRWFe5P6yJtZMzE",
  "key32": "53XDpanXNwVB74eaekL15UFZzPp1oGkpBcqeKr9oFr2YzKjHhrJQki2cUXAk828R4bJ5J8vCvLD1acSrxEfnGDSr",
  "key33": "3Qt74Xc9pjyicqo67WZzUS5NKiZsHvRmP3yCrk7CsGKkHig33GsThiu7oJy5iuu8Q119mNWyqiKmM5XiPhyxgjsb",
  "key34": "4mS8AvLgWozpqi9WhSMG1u99AWcVpuRLFQGenuuRE4Pwdp4QHawbSDSeX4qWj2a6Da6mxirQdEN6VwaukMciwnSi",
  "key35": "28eUuiRx3sxCCU4GLc9oz6JKQA2SeF2Qu2wTXXhYgmRfcNcGHJ5EdTAUn2t5GUaZA8dHAVjEy7rFSamY2eUhgPmd",
  "key36": "1e3tnP5WmJBSV4anwB5TpQ9MBpT1bbL9mT1cLMSXm3sU982YoMrQajwB11VCtvFf51Tp5NQZaSU2r8d8prprZpf",
  "key37": "2RhvvS8durf17N7jCpNwuoJ8rXMqp3xJhfMyZQH5pooErJ7FcpDG3oyg2cyoXtSmeyo8wBajgu9iw2Pj7ydho7o7",
  "key38": "oGTKaZgxAahC9MYzfRMfDv7AXAhpY7kh1ZgC3ge8mMQ6Ry1AU9fLiXshXcXvqD45eAo3UiaAusPuq6DgsKGmMPo",
  "key39": "3FWVqmH7gBaJBAJsLPAvGhLpRRbSi1fqs7pdEnfadcKVLQdoNCnmZVkFhAhXhQT3qUL3o9Nkxq54YzjCXpp9hEB2",
  "key40": "37Fqv1ov19kEGnikZ49JHkNvoZ52zaMgEgpnYafSjoBwUuJCB95LrmTV7caTEXCdzKQo9RqoCXx8febZ8SCDCaP3",
  "key41": "3vv9QJgqwmcdhKnL58VBcHxqFhjbnsPq7xgcN3La3t1dPwXdwawTctkDhcoGdPJYF2WF2ia5gFMJzv977oJR3BnS"
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
