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
    "27k8R8WEhfYCqrsLozt4bupDYocfWKsexmmdHxewWtGB7AAhfvyQyvJ4LitwfmUkbhHGgz5H8KBfkdQ9XZH9FtQ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KQhegsFxBkDgwYCGqRrQa98CQNp3pamEN8jKimxN3G9w76bsAAQbvnWHGdsvJKpaaoT2Tg6XhN9pXUbLJB1jpAT",
  "key1": "2sRQbytv4H9pB8gghrVvpbVPQPUx1ZuxWVibKnqDjGYpvbs73KGPYzny1DSckBRZUospAYdHQEx7Z5S9h3jaNADh",
  "key2": "3KLQTtoUaHHBVvodH6NARx1sZodtSirkCZV2YG8FJTqYbtpVZ7MVwpjZ4hcJ1eMzxHsjkEHhLcL9zy7o6SBpFd7j",
  "key3": "4W6RK9Ls9Kam1VJfw3fuzPEY89WgcAQsT5FKC8Wff3ynq2rg2CU8wWFRWfdKvdfmgD8WmCpVBd8qwBsbi96MygFH",
  "key4": "5hknWNmW7J42nRAsCPKj2GuVJdyHuSpE6qWsVgxbjudRoiiSsybuZfwg63toNjxCiGEjAb2ojYk8RWJRMk3GeoK9",
  "key5": "j5r1PvQs8y1CS9JCp6XAF2m5NxsbLdLrX1DY4cBvoDqWtNRJKkFScVAsA2BJp6J8qUTqv8Jxm9KbnvMFqy2Kgqc",
  "key6": "4QtxDKeZJM8yq71gsdjrLpS3s8ZZRgTxiTipNnQcHJucFvG9Ket291Pa8PrnQeuxziH2ck2HhRzrBtfFVahWtTkp",
  "key7": "5ZDn8JUtqVceXTzgTLEH9tz6uB7TLYB6R1diMqnamntfM9ksoiiba1UqrgVRLQccnAXpj9b7vByiAYvRWfXXnmqs",
  "key8": "iSretdj2Dvgjo5hYb7Ltgcm2F3vtJWV8tgPAo5Zok9LjXT8s3qHS5SDshu6EWgT8iCgHvG8s3WdtMW41NXhmgtM",
  "key9": "3uJMYxZtXRPRki4BrajxvYSR94WS589UMJXqQgpCaUSMMDbLfkHvxKcNWsDMi3faXj5WFU1w2etMHW5GQDQy3Wwf",
  "key10": "38LiKuFkDssfs9GQEjTiNfnyD4iERmSdJhooxv9CTuv8q4yhdDRLDsZPzdCYpcSGvEo1rdA3p291wajtpUtvTUBn",
  "key11": "4DL5Wcidg67UU7NEJp91SM24CMFKJ1g1oPPHWWftcwQAjET8EMMYJAPen1KzMoWcE4GefSCZn4qkRFJoaTR32aA",
  "key12": "4wxCtwfSPSzHxEwrVCCmdP77pGKte4j9obEDjTTGwtkZmtemDFB9GiQ9wjb46Gz7iYXJUE7HAxGVYHVLwBYujR3D",
  "key13": "5tcgLdhgJtvqmVe34wHGqQfqwfY1LSM2YgrMFt7VpWqdobCW69Us7YhEzpf3rgfV4DXpxU56nqX23Y7mCbKy6YYn",
  "key14": "4uo6dBbhxkvY3ascLaKhBMPx4LUTpNicuU6UVbEJH2xr6LXBQpUReLRoUKEmaRMnGDTTSdaBJUcSAXTbph9Y129D",
  "key15": "dJRow7q7FkTidRBw8cPuVYHrifyUWTY8bTSEtqZfSVUsW5Dx9tPgmLQ4BksNMiwu2wSQzV8zfBZrvGZhiEZq7CG",
  "key16": "2328aMBwNoUKi5B2Jx8qPBQpQvdkFH3oiGSoB64VMAs7pVf31Q7PwzyRFNcBj39uzSANS7TJTGKGmC3K5QuKDCxP",
  "key17": "4KMsAwB7kra3NEQM4rwUYJADAsvNVTad9KB1t6LUus6P7aP8KhmX4qBTyEtrPLXCxpf85Hs1nAPztZh2mm3evCcP",
  "key18": "PvnrKpkbkJjMxS3dAi3vtycfKCbkHzv2xrzSxdNG2nmQfofZug25r8Ddsj2QFrEZ8jTAVHTQ8utqGEUHBJcvGKh",
  "key19": "219Z3B1vyTbpDs6M4Nrhn1qK64YuyRtVyHNy4WNBUp9imAQZf8avvjmh6wu6fogSD7p6LRhmdQnmmt1xT5e8dKNT",
  "key20": "C5cjXSBfpUFRFj2Kxt6nsndpmcX8i4yoaGQfooKLftUaRJG2MxEfixiPR7N5KHp1RaaakAvUBmH3vqmxNFKcRA7",
  "key21": "64PwbKMAtYNSs82Fi3Sxi1toy8MxkcbnTrBh8BFDeHwBBWptLJxhkARWtwdqqdwNSny8jwxUXHTdLfY5tkb6Ko2f",
  "key22": "32LJJBXX17idJPqyEPdVj3x4Wg5b6BJto78Fkv55jFM2WxjYceiYVqkVCAFe2aiLnpto98GxGxzyniEAbhbhKgsG",
  "key23": "5mjjryK8zjyaEDEcxUNUCCiiHfJLSw3ggihHtxXbRSMkri3MAen2MmoHmyDy9UAYB1JvND9XyaUKptoWwkgdZ9ZX",
  "key24": "3Hg57zy9nDKYF55618YpisGHiqMMPmgLgrc2zPBKWSnQ8KtKfVci1ChhGvVwfJJbhuJZPU6mqYAwooJm9bhWGgGj",
  "key25": "3Sbi9DRH3Pe7r1t2vWwXgK3iEAQw2LDcQgxeauHkmjPiYJm81tSvjJFjUA62teQrKJHrx1gveLH4bBcGA8LcJQvx",
  "key26": "k4z2zCQo9MJ4DoFvmwqrwZsxLEkKKsp3dPiqxrS6uu3ZAYgj1V2WgKxyxHLyJoLosG7AxXECrmbYRtAzGKkFau5",
  "key27": "4QPR4s5wd1TsPp8LccxejpwHk8yPR3aSPFX5k9UcCNxbPp63sE4bzkcoVjpysm2u6qb9tCzf196mD1f5ZJySXuBw",
  "key28": "672wtHzssLbcW2YEDkPqs221Wghx4KJT6JBbeQjMpgTR7DKpKKQVQDqorJNWLHEF6dofWJ4zfR2zFJGBRxAkroGS",
  "key29": "5So4dGF5MzAiLCM3fCUtVwNucP1rKZVaEY1bYhqgoALTzzC1npcbPnVAP4GQH6MZP2WEgadToMRDkHK2mWoQAnqe",
  "key30": "4DcKGC1hPkL2en5hmE1dNbKqoGxJBZepAi69qGiGsWFTXPTZL5v7Gy8DJdwv79TbHfZbwGswmYfm4tB2iS9Kq1FY",
  "key31": "2NDAK4Zn6fkdtDYZuAyBRQSX1ABDGGV1JVhe2rYy6L6u4nsvFCCcvwRpMnbwL3CMyxGR3NZXvFsHPw3KrpKCydfd",
  "key32": "2nVacryYkg7yJJEkd16fZ2AdyjeqYmVpdBt92XpiEpjFqnYTovfSokYyTVs6ruUhSW3Wbv6Q7K4akdavJDvaxcii",
  "key33": "3byH16URsTPJhJqarLUU6HZqSU6GF5B1gzhzVcgiyZgtoiZ13Q4DkKDjt4ix1Kf93AvwZRUoVqfEwM4up191L9CP",
  "key34": "5LKdZ5BRgRoxo9pR8Z3EuGqW8FiSSCw231Cg2sUDYqYce2AtU6FBLieBRMxygCuYQxizcCPTRHMcE28RR5W5mh1x",
  "key35": "iTzDVu6HmtZnrHbMoUa2KdMb4HRojFhVumwJRcvEcZLLVuEB1JsazU2LrHYxSTkdb85Mqdsx6hnp2TVv63MZWsd",
  "key36": "4Qe4gCcVhPtikSrXLNeQmfpVTmnXcQ7PR4NSnpkDhUZQ5LbFZPRSrDX9i5pfDAMr3ErRQC2u4VhVAAfnDrYVhDDx",
  "key37": "2SP7RVWHpDnSfQnJxAeUz2jfAvSn2v9SF3vKSrSEzqkYwyNGd9HEHnhUb42pow6rNze3rdM5CDYYJVLAGHsD6DTU",
  "key38": "5v5bjzvZNwX8otWjaXX2kPLTqvRf95rPvR3haN9Z3enBW9kFxpVUywGFtgBMVMiBzCM6rv8sdyp3NnYXK7NVujJV",
  "key39": "649jJPM9FqrkmuXPNKSgEBDYQjmAjM2hvrFTaYmY4hgdRzyPaMK7GKzzcBfwokGs9jDL2H2kixcjo7e2NkcCgPki",
  "key40": "3gzLDnVcrs1SuHa2Ce6kgAdgxZFEU5ZRyot1Lz4qywvst6YcqKRsPa2ewz6q8PSTL9wQAqdKXkr6vac52dSnFbR3",
  "key41": "2FYtouST2mC3qoAy5HdMaT7xn966hA7CiqH3gCsWixkFdXA8q4RoAuCrPs4iFswAH4UuE87qKf8MqSGrcrL6cCPu",
  "key42": "2aB3BWMjYy9ZW5PyqEas2LhKEQRCPon6cDthf1s2iGiBqDzA289WqzyQDue7eTDHVNukdzFbX44VBLpGTArm1yHQ",
  "key43": "3tbpUdW5P9dhP1KLWsvWzBZwMLSTowqcRKjWAiQAoJuHG1QBp7xTRSpDeDH9tGp245Ps9x14uWFMuYXWSXCP3ERh"
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
