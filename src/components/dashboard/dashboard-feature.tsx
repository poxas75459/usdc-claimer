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
    "4iVdd4oQCniEKu3EVVBUAZoZfXn5G6GJwpea6k4E4ejo91cWBDT4npUpH3FzuKiSLzhJ5T3Pp1ckP22cTJLPoMqA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CrhbBV1tSJQhTYPuihpH3FkcY68VsJx3RFWWSWYgLJ6b1m3Z9cHcsMCTLv8Bis4VasWN1QLLGgidt9dmzgVpL9Z",
  "key1": "4pQzirN1sudKDpW4QB9isRvYqLoenAs7CpNPLF6Lm51BFUsi6jL69wozyLwCxiGAqtpadVrXjPDAzA7Qghq1QS5C",
  "key2": "4i5xn8FjwWEW36cZCiatVYxAVUMRbcNrG3bcg5UUgnR3f6Ew3SxYtJoJ9zNVE7iPtRUXG8R4ooN3N4ucZsya2jLz",
  "key3": "61FJHZ8khcB3aVwivX4MqvAXd5pNE3m5wPDUNQLNVS3B5jGWHPR6EG1Wsp92JACoxHJFw2oEG2QiHaprumtoSPEB",
  "key4": "2RfuRrntvECJWkuWmLUBLRbqERX7bTskHD9VJNR8FrhULhsQLFT7TJPoU8EZuCV2nz64aXuaugpGCvYiTFAT7Y7K",
  "key5": "466yLzawLZ6KEj9cLwSy9MEYM9X4fhbt49U6kbwKAQcPqnR4K2zLbMzwKM2DPFmYGzXAfUnBAqFJBfynkac8zh9b",
  "key6": "66rfc3s3fMUgjjD9UWjmf93uRH4eiP9MYJoE6QZ17SkNtGggYYtjkjASYn7KpFMyRgitcymQCNjJ9DcKRVbpVHdn",
  "key7": "4x7UT8rgNjGxzJHSsj4r888aMND6BcJyhbrG3otVTwDiueqs5Sfqrndjt8qAUnqdrh9VvhYQUbHCq4bB16YxxdMR",
  "key8": "BwHLRrcGBe23RqDk7SxUYRr75mBmr9YSSVuRSs6cqxcMHZ7M2PQy19PWgEKk6TdfW7mBSTEdL1QJ5Ktzg43iv6N",
  "key9": "47zGZMu93Zcv2ewT1C36J2oPsowqBX3628b6GUprCrRCRTZmNGcChWtJe4WEMSDb9q6quXKekUGbCY7JELDCxxcR",
  "key10": "2VN4kiB4VNft53jtGMGMQdDmxyHcyPRHt5GUU1MdsCvxC85Ns7vW3okG58XsQxnPRyW7XV4DBweZiwxvFhYvSPqb",
  "key11": "4KLgnW5YBb9m5ziE5SUxjBTDffcrM7HgGp5T6bLx2M1uiRnUbs9R2JVTaZJx1iDvfNWa56zSQoitBvQe2fYo3Ljd",
  "key12": "51b1dEK9Dj2PtdQPH6vRdvnfWFnhTY2YxMdYn5eE5xUfHsqg3abypo1JramTwa1vNSwsmXeDpxUCzc8c2zcpZj99",
  "key13": "5foMrbGQftkaLAWTcTXXC5HmKUr2xfRvUY7pXi8hqNXzH3uWuQx3q4vq8SnK1KGyAa8vohTZmrJubrKiPiFBa79i",
  "key14": "22ekawgkkDJWanV4fpNMd5zFXML6wrymnxk1LwbwFuMUruqmC9aVbJPuF8WypaG2Jdo4zBo9QkxoiN2LYr77TFpf",
  "key15": "F7K7nkNkHaxUZD6TSNEcZRwvHnp78eaD1tXVdPZKqb91pVgeuYiTXR7t222m36yqRscKBKHxJK4XSVKHk43TSKg",
  "key16": "RFq7bMut7qFvijybJ7UodXDft5gvmK7T9KHUtFJZrWVGdkNEz7pn5ZhWQxdC6NWKQRex17dzdb5jKkNpGeLf6c8",
  "key17": "5syyTcQyLXXXNa9Yw7qbr3i1gTjLm5CA23QTJxD7AB9QrANEaVGPERhg2LzJv77Z7jFSgEPjFoVtkDME6rprXLRX",
  "key18": "H2E7u26FhUirQugeBcbdr7dj2HPUDJ9W7f87a2VjUxfC8qgJSBAbfdC2FYadZhSpyXKHM1fkTLRLZKdkSf4bKBs",
  "key19": "3x6xjm3J8Y9Kjj21cgyfs6mfY98jSetxifkMPLvmGvSVh5d77PT5bAiZz5QVe8Lnf2Ne5EUCYjqbFdo8oBE9Ze2W",
  "key20": "2Pquw1PByWR5Kzmoe1HxGELKaGr1tMVoqTmGvCcgp1ut43iaBx37DoWNwKFGCRWNGf9gyJUv2iTdcvjhxzph3rW6",
  "key21": "EJseJ8we8N6wuzAvu4b6Ech7Q44zS785EDQLQN6yZR9w4EYWh7DaoKrniLNRudV4wBS8fti4QdmP9tWt5JMMudS",
  "key22": "5aKjgfLkfS54rproEpMx37dTQkVeg4cKcH831yR5WhpZoFSqLKQm8N6muzY17ekMpkvKP9iLD6ETc4QHdxv1xSH8",
  "key23": "5UyPMZUQaNNQdWTeatrqDybe12GJr7MTsM5JGFSJi9p1qK5AzNDu2SbAxtgbM2hLdhQSFj8McR14MSUWr4SEjGAJ",
  "key24": "2q4QgrfFN5qdqQykKWmB7juT4c6VWmvGXFDsKaLo8N4VxxVUfqTsNXYNB2umwqH8TGjyGdxta9HV6sCwxYm49mHw",
  "key25": "3Nhje4dfTpt4kWrz3EG9hg1hUvLZU4uNjFc7KNmgiNtrLBnFGP8uspbgdjCjz3YBPFPMECKXgDPwvPHacT6JWaoX",
  "key26": "5GoTXHrrBH4qixL2kaMtN4TjJ8TtUYhMvb78qWFzZWuz84RmBK6xY9z8HjUbh53HSx7sYZgG88WGj5dYSzuF5xd2",
  "key27": "3JmBXeNc9xmWByznbrJAd9uc1QKg4xieuJLUeNkpcr1yKPKZXrRoCFJ64ubQj2g9vQpYSP5mAGwUG6L8eYRQcNhY",
  "key28": "4DBUS1CRHL5CW3D1hNfoCWEBcoKmKPk8cBpm8CZPYuzVaVPyG8EJHm2sKYYQnKehcXeagkvhk7r2h7hjq8s98rAW",
  "key29": "JawGeTfCmZcn47XnLp8MVcwVPeSggEXfaAbK1R3rE79T3JHRifCEaiLysgULEvBkUSfKk4VQuJgpi5H6zCdjMWP",
  "key30": "5vMJzyQJrB2wNMcEkyVb6vmGp3nYnsViLQk5RDrtLVYyVZm9noTkjrvAaiHDCeBoTxXLJstiH6aAfrkJ5jsK15fe",
  "key31": "GZMjxygFwqpAtxqLicyxfZ4NT1YhWz4GrtZHwsHQ8ABNX7AAbbGw745kZHzCxKRZoVPZTSoFCqvUdci8JCEmyoU",
  "key32": "dq9ci9ihX8fd7xkNLR1Kd4eKXQLPc8jrrpozbpXMMkcT99uWp2n5PbVE2P26RKwKy3U819FownZn3pQNbq7yw2F",
  "key33": "49NoMBw4fZBMBFTpVyi9uW2KxYV65aM9qNoKdBwDh643mj3w7MVx1adKWaNedBtohnpDmqs6HJvVsa9wKRdaYLY6",
  "key34": "kfDLJZv2nHaAA828YPgTZUEhQ92Y6YQW3WfUcPr4zL8wH493yKNRNQhvCuBEhAiLCNZJLAxsdfgkFsfzSB6xNXB",
  "key35": "3xVAXqccb2Pgwc34GGc4ENVv66r4tW3bEsDoLdah81HaJo7qseV6YPsL6tji2WfPocQxipngbcsCvv4o2CtdvDro",
  "key36": "5HoHgEyvtxwsT9ABRyG7cEtFwp7myk2CAaPsbRKfazbCjkLeWtHXxQdPWYTDh6cf34TcQM3yKFB1fYmpS9fRJh3Q",
  "key37": "3U5Gixaq17Uq7DggqmQzENPeYateVyMH54kLiL3VATSmRKWCqe5z8ew8QRCVJVrrt9Akaffd4XDAKPXZGTBKe4Ti",
  "key38": "2HG21FjwDvxjBSNtpaDjmyA3bh9uoaZr3mTaTSP3Khf4uLb32kr4dnxxqKz817wnYwRJZv1ubJXKNCS7awx7gqA2",
  "key39": "5fA4KSm4v3fLM3Q3XSCecuuzvPspFk33rRfxJfdfhHYbf1PLbZGt9242CxtEgXnhogt5EDeMiVb1WeB4g3s6455W",
  "key40": "3hQZja7bJ7JjU4QC9WJ9U5GSiuNMgBhxF5iBvrtSCkdXb9NJoxNA2HRL7pQX2w6KqZoNjw97bwpCnGZvfZFNfni4",
  "key41": "5MdqoKijrizBXXSkxsWtJAamcucgZxaZ7vB2jkD1r3JEEhjvmNbQHqTPqBXBUbhYQabEpEbr6M6TXF4j4KoS2ze7",
  "key42": "2wnXU4BG61vteURPJ53PpZBBTaMrgpzNS6122yCg3mG8ihXX1aiGb56WXrAvifvwVVFDJFNaX3ixSLxMWmxSKuUm",
  "key43": "1127cEVo54LzwSv9pbexEPhhfkcfW2pQX886z9Pranfmw52A8cd7iGBJScFAwWcZ5XDNb9dVVw8nxNthLhXV8Qn",
  "key44": "2P43xo88GAkvo5Fe7oBZeS43fRLGdeJoM6JU19oHGXr43uaDBFM1aJqPDujRFex7Hn12CzE5TAo3RSRigvaEQWgf",
  "key45": "3B9rBLP2z3tWBK4YSH35yPkx1fa5QahSEoPYxTeGCvaVdG1fcf29C4YHWao7p7HGn6SbTmhwUcetPRfdh8PXDAdi",
  "key46": "5hSb2H7qYrCUvD2L5hXJbCAePzPdWtsaFctXRoGyp2pP6BkvPqS6Wk8RY5nH1JeRqUvusNCmHKrmQtSq61vkiisu"
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
