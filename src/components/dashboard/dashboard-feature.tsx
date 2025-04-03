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
    "UUBjg2VT6mgCLpiq5zt9CWZVWHXsAYffmkYGdcCA2tzwdfvcyNfeedepsrutY7GKsNtwU6kZtxBuFnZeWUtYjyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5n4mQSL4wERgPyihEWSMLiF3spXG2bTJqoXDHYEYWaXBazpi9zcbaResXRWSLmqdr4DjZdaNH9nHn78kL4Frv3vc",
  "key1": "2FNV5HztFqmJR8Rtpk3edtEn4vn8jjD19bhbcSFqenW232xkUAFy175Y5dR9snx7CRU9y9V2bArKoSqckd1e4Z5L",
  "key2": "27PUoDTzcdBwuZWkye7mF4SZXYc9tscvcdPRtFT2yUNAVb1C495KsBKGWoynN9DAu2yBzF3wkVo5AkvUYFofZHuQ",
  "key3": "5WREdS6zZqcKs7ptPh5majcsNKBgo6zVHkQmN1nxQEuwuDQ3bnSGiD552Spi37Yqmvg7DFgokKjKxMGkM7tQqnCr",
  "key4": "4FQmJvh5pbXSRJAzdmV6ZK6WiRpZb9cFm1GaTUJGonGu9F7CKGhuoaGuzsQLgQFESS17k2aHFoh2cMyQt55GVYcA",
  "key5": "2fAdTMQHp7XRUiCd5XLPZHP5uqkPhyZuur1V5gp8T2Tosdan2iYRhnzdavwbqyYcUgWAF3rovKdAsCqAYbw5hxMM",
  "key6": "37oUq999wtEnz84w45Y69BS99mYxoywUCYNtUq6ewANYVCtNkpMdCtuhjJbdVHAdFWnZ2KAJsnA9aQNerg9o3AQH",
  "key7": "2M9iB7Gr46JwzU8Xqoxq71fgnrubVgG2AT8M59BAsa1kA4t1yePxKUbNvfhhcwHdo7UB8vnbnmXpBZ2gBZyeiiQ5",
  "key8": "3QFvkRK2uhxsdcjCGvvwGx2NrYhmoUDJ85PKNcZU1g1yYksNBxosM9Yc47FyFUeaZaMnza5cCt6XQtpqaom4hF2J",
  "key9": "5CykQQ9VYRVDpZ3gFQigof6uK4RDYDuLEf2g4k6ydGHtCMV41Gz67CKb3MGKQdQuwkc8Tt9ScHdKgjmKAPrBr39Y",
  "key10": "4EcGpyPGAgYCcpYcb5DzytMZxPzfmnqnf966EuFyEmj5Ej348ww6R5rejxJmDXjKfkR6Q1BGZSxAr5HVyW6mvAqX",
  "key11": "2zHM5V8hnqCXPyox7NPi7BkLWN5BuXWA8W7HGRebpvKDUqzEExJ3ATgjci6bnBsAjxke8jpj5JkQR4G4KC8BaZjy",
  "key12": "46KFax8oDDzMZTaL9fZa4yCkdXxvX5sgwRApa4T8npivRFX3dzZFctvWrwXwRTRBeoKkMnPEggAQ79VVud9CjeUW",
  "key13": "3i7apDbSxcfukXKhmzpEf8xmJn2aUN2LrdSk9zs5CF9sbNRbbQZx6eSSQRNvfEJfUAmN6JPKQ7bASX3QsqHPmRMS",
  "key14": "2uR9TjChLbNQRdzuFrGtTJokLVvGZjHhXqSZKgEKjMHKtHvK5iMnjMwJZyuPSwdJ95CWUD7ti8c6BBfAv7ExoW34",
  "key15": "xWbAWLiN1hfAdbnTVSBJZJyDW9KBViYeUfo9jkX8iq6rySyfjvSuVEkQbf3CCzZAZroMrgrerN1E7jBh17CVVeV",
  "key16": "2EKTtuTCKCfKng39r7Yd3LbzT6CRFT3RiATgtVQP6XwehaPxh41mKRefzqfwzsmAJAMHTqkVSNHb7e6wnDo8EyDH",
  "key17": "4LSYWJuTJfWft31NM2SGCdQdKVQCsea9wo67L5rMmv7vCPg6n16cBx3dnrmfmiBubz2kAqjDgeegnLeLXXdpMmxL",
  "key18": "3LT3tFkHW5Cw75s3ir9HquubQEeZSZ5pQ1PiQuhYVLg4tJPvnshGqL1rrQQE5iKShnxAKfwvNTb8eBSGjqgpwPeR",
  "key19": "5vtigbuyRxeTooeizNTBPmqBM1gEZGpg9F3RWG485CTz2p8sXXq3LoYwXAN1JKDZbds7FQ98HfGKA1oVVDpwDQSM",
  "key20": "2o48WLzqA9eFB2GThVAxuHJjeQhiNtmf7zjkSpkvJiQZeBwhoJQKBzLgwfinZyorHAqZFavMnfTxNyXNdBziRfhW",
  "key21": "Vqoo6JdnapJg9B9C9UwuEqjbUj1tTmyutNN7DkCHKoZeJbc3qfDDKtuiv7kf8DxWfDrFYpKrP2dGKvx9JF6pTnx",
  "key22": "5Ys2ye3YAJg7pbQUrmyDN6xmrpfdAhsFUrZngKYbb5m5KvQowtYk562tXdzgx2SGDYoi33kD5kB5pQeFnoqo8vbq",
  "key23": "45qSVE6G5EAqzAn61H2jtQ6fbZbyQoLTYtWjqh8aNJTwrch88khRbjc2r97VsAw2ShFTUN8MtsKkJmgMd2u5tELA",
  "key24": "DpGLtTqEpnFQev6FHtfg8qdE71oFbmorbHqyFH5yuEiZK4TGhPZtmAEJkJVcD1C4ouySN4ynTyAUwEr5uvyHTDA",
  "key25": "3aF4Yc1s9wQeVaMSDXSbaYmYqjTWzfFCMEFqeTomnq2CiWh17CeVKqTxgGDoHY6Pyy7YV6MiFMpFZRCWPtv8fLFN",
  "key26": "3uXvg64eNQRPL3h7eJN3yEVBFUFz7KoGzAk9AvpzTy8V2iN1KFwTN1hvs7VYJurKfoEiVWwZQJ3stCyUsKVGCohz",
  "key27": "34WQdsvGyaPEo6JU7kn3mSYTvaJTguYkM7MNcKERsu9yVLnVq36WBe3X7oPo7ZzsiTibDF1fxM9c7ARDW9zDZmVW",
  "key28": "2p9AVCuVxKCv5uoAUSosqZYxWQtAuRM1GLkNwLUxHrwb1djQ6Gr4qCYYU5mtnuyhSvVSnT2buJBiRxfRS1RVGSvE",
  "key29": "5ym8pyR3Lq9FP5FwX68WYjZzG3N6CPWfFubhZLdkDUGBCKAw2yTKtMxHhFvjRWima6WMtd5yfWNKH1Y68VvnBTzX",
  "key30": "2kZyz2BNA2RJpceTgJxaoBZgkcWPzLymxufB2szYeCxGaqm3sbtrkP2VuV5kfr7y5sV7imDYWrFBU29a3xjmLDwH",
  "key31": "3b7GJ5gL5oqmVPjXrKSDA9szj8p92iz5yB9kSuCmbS2CiXHvF3RW74e6iGxfT312GAc8HPStiDgAf7ZHNW7tgDwv",
  "key32": "3UYGMXaiLnsW6bLvqM6rjCszxwg2RSgNu8ww2ZDbAFPmNWGjjCNigbmCL2BFkhoTD3SHhuvNUsjarM7BD1TboXeS",
  "key33": "X7miYYAxeTecGb9kS9AiDFBHSx2cT1HDupEVrv5DZ5CnhF9GWbyHHRRBKiqLfXq7qq8u2W4RPQkv9Urg9iwivoG",
  "key34": "2zF9svJsKgx8fMs4JxzGaEWCNyJ4Du3irrvyY3rscXBbomsJQqFTBVfKgsutoqJECsDQQV66zvMix2UEvKX5PkUp",
  "key35": "2UcDqdDPUYL3HuRL5yYn2eiQLKPjN5GjnAdQLdHkpCyGxZZC6r6jnVyCksA6BUgRhfxVm5jeURTF6YfCC2GhJeWQ",
  "key36": "4DjAobBWtBTusKdZusiBBdcACvq196i9a54nGG6Mrr7gMNDdB4ZBspA5ZyiymHLZSRXX3Er41YNTWtFmSGzZjTCu",
  "key37": "3onq4NzQn9bQNE8YAGQZvzATxNZpbG6FQPo5Ay3af2QzupGr9Dt5H7fBNHf2YTZvZsnT2zBRmyy236Z915L8xzHb",
  "key38": "3gTudNajo9UjuTwqb8eLaAMAp7cqciMRembQHtJkCEwGDKUqGAWFFDvS5KbWKZwBmq575y1NdLemdBKwkqVXsSZF",
  "key39": "258AaW7tYSetpNGLX5WXujpaC76oKuSFa12H2NftfFL5zYHsfBeqhsUD4qk5awfqt6AaW5tm7h8NAwXtCKHRvqCm",
  "key40": "3s2A95cZyALj9azabEiaLseSCP5EBi95wTjEsWFhdrc52Y5CEfApvc8m1GcyXxUdAhC8jDDS2bZvV1RsguaEooJJ",
  "key41": "27377cgJVAf9pcpkqYHeVGGYNg8wBYMYXRfWumici5pWd8DSPqZmkoMdHomYwodLEPH1iKE6UQz41w89BcmY6Pyi",
  "key42": "4uutZv62TM5o2Qgun9HAcNrP9CDiAXgDipji9qyJVECU3gNFEb3bu2gA8urmkQ9HTE81vVW3kaWewoJGCBdT8uXi",
  "key43": "5gR3vWjKB9hoBJm3pKQ2dgXsDuuHh27jJoeiyWfaRW2uo7PCTDUagxGEbhFfAHA75vPLEtmHu2CD3Z5syjAxDHdn",
  "key44": "64C6R7BJTt8Tsd32714P1kA7maXZ6ZdzH59tBwu8LTtDyNetnnmbqAB7uscnUpwVW9fVdtmQ89HTSN8nFXuCFK1q",
  "key45": "4quJH82FBYQGeZSmHiTKF3Kwxbiexf1J8Q7axZiniyZZgJLSNjrHPz3AtvWJyqZ8yEAvMQTxmQcQV1qTRHD3ktgE",
  "key46": "3VNMyx1yABXz2zKRPAcyX8xEUT9httYfTLBAmCdMbnPupW6yBcTKACMfHteiAwJkC6F5MG3tV5mNsgxkADYNiM96"
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
