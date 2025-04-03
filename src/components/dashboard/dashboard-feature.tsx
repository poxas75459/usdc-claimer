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
    "4jmdC8eopwv8qStFqBMM89eed8rmJKuqWfvS3eCFuLv2wZSTHTHLVXWtgj7e61UUYxesH1SwYFk9rPWUPdgDjEee"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44gsNhWJepqgPcQNeHkbEeyqi4XQvBoZx6cknnT1zopBeN23fA8YTcyrgnm9KGzWPwCznzB5DbBAEFZPzMMagXif",
  "key1": "2GHi6WNX4kq3xFRpQ5gkEvoPygrThXzJasnGWiG88acnwKEPFChfje9NX47tSNUe3eBECqycJYfiktHfZKhm3eMw",
  "key2": "EGUimW2S1p4xeXH55aqz3oezFqZDTBN9QyVetnNHaWfJYJ24jFCQxhuqUnzqH2D91y9MV14TNQ6L1LhPSoyVCYS",
  "key3": "25NDP1pLAkZMbcVxXezq6xyRs5gCPMX7MyvPD4FfeUaqsAG5NqCoo9idoPX3FTvye9fHGib2fSahD4fdkKT4YxJS",
  "key4": "3dxPSyFUVwTAcSLzi6zquHhq2kNzPBMAcY2dXUAxVNQV6UnMiZJRn9eivAiFKN5rFVUGSxcBLQxNcbtWPAf8oxdC",
  "key5": "3bek46MEBqUxzy7jvVMsj5bSAYXZwbkh2xqJ7HempyXnL9djrXmqShxdgsHCDoWGqLbiLwoca9F9KSyX6WNRz1fA",
  "key6": "5DjRuktH2ZyQAZVaJ2s72ziAjrpjNdkkocGFkEsSYPab5yDqjM2QZUZXenzwzVeZbtdiCqupkcK4LUyPQdiZEZxf",
  "key7": "2hA7PGsDg7sTyxS7uBmc9zFteH9d5ezXhduwcPoecVJKsnz6XbffNkCkmunnTPL8qPr42V7A5C8zrH4jd9u2Bhn3",
  "key8": "3NMhhYQwZhAqepG26GwsqQd4PVSAqd9JDUB22YUwu37TSruPdFU6njMSrdDXNHGPqg6Q3uiTFqrajEk3WSwcnuGJ",
  "key9": "4jYhHdYtG2RZtqiFXMjd5RnrEaqajydpUUDNySSc3H55PVpzHbZP9oWswLfr11NfWKTUHDyHSvzzjxa9J22bwcAk",
  "key10": "4YgMdDcv4mM2GafqhTnbZZdFcByMorFUwN8YbqwkzwnCXRc7DkJadPDtF3LHn18tuRieFPXCjMdT5eCPr7DoYXEb",
  "key11": "2Tnywozd5dHaoe5kpfpE2An1YQSKQs3aiyhXqkVrcKjDEATsjjarLwBoc2pphd7DXuMxtMrYVYGzCTXzD72yJTU8",
  "key12": "3t8wizjhiusopBkKVMtZTnwqr5JaUdQRCgP7da6RG86KtawxQs5tFjQyzkdcS6VPvXhifNZMPzEV5Q2kLH9Gyv2E",
  "key13": "2jRDCrwxCUchZySuiifGPTBQoKYTZszUWK2Lov4b58Tes8oSWrww4ZoTZZVxmzwLKYpp4nd7VUwj1cmwU5zMGntn",
  "key14": "2zkotqWjYsxkW3DtLemYLjJ8XXV1SAbektStF2pBDdsQsDwJLTKBDKAs4hHhqqNutJ46Yo3kzHqqeCda1twuJvnz",
  "key15": "WQgcN5zMGhg4iTf69xunZPRyeS8voEkHtggWriJknyqi6oRHPH4nQfWst1dUKaj3h7g2dmBQteUA5cfEnbwCTc3",
  "key16": "49QLDcUa6i6qmY5nYQ5Z8jRyma3dfNxZdQG5C6UiGDYwq4cKk3uWgZaHt2s2QUpNvfdgKGhvpts9csK66seYYbgj",
  "key17": "4X6JMzoAbWvCZuHYbmicHTgQ4Hn9hFR5spNjqjjxpdNywGomazbPF7ytJ1Wdx2R3r3xUjDA2m3nPigkCSabXQUkc",
  "key18": "oAvB37Yd6P5z1BbidPAWMRXvvPAhWfv5gUvfvB7zVFeotWrojfGfMzTdqwrwq5EPA9eZCwqG21arB3Pcjw9P7FN",
  "key19": "5vzKBkMjkeW8o8u5LgxsEAZYsZgAPa11efN278Yr8xNeXCopWe8z2sjPoMaXGEU2ghkZqsTQSvu1rwr8mrXQmEQ3",
  "key20": "3rQ6WCXe634bB4jAm1xbtECQDzqQsxmFWTwvJ2CaWMRAA4r4yDBFegUPitHA8Ms9TFb4VzUdGfTd9hGipjJXGs3e",
  "key21": "2dTVni7AhCDJEXGnpKg4f8mNgWR1naF7jGzdv2tHwBScMfm5p9XEWEZkuKN8US1wPdUwcfFZyLuSgPXnWtngswNy",
  "key22": "5CkmZLMS2AtTrTrDN9wTF4Ww4V4zBtwJxJbvvoguaq6nTzWNmQjf5dVGqQg7dP6jxSSqjp53JeH3SyL6wTxehe3M",
  "key23": "3vgEAhMbWMZ7jAiwCjP2rjVhfhBGYNZG8rMmzXgRLK9HLTQSCmJepfEYebLnfM2RwVkgwbUCqgQoJVES5KVFtLj",
  "key24": "3GKdF5KxU6LQRvqBsCCB3STYTVATD6QA1PfpRz3PDTJkZz1qgakReTEma4ZLyeQpyTLfnxa6wCms71obEUFoCDcz",
  "key25": "2p4j9u2dnWTsN7yt2kK7G2oFCxig4Rv8nQWmXyc5LhJ7xmMEWDcr8wERviHZnq8LeQq2mtnytKco3pKzWjGeGPQU",
  "key26": "5KTXLG6vyKBMPdDZ4m68NC2RakCMN8rNc8AAswK1jiGmnNmW13FUpEmAQbidMy2zCE8tVb2c8DUfmpUPu3c4fJAk",
  "key27": "4tMC6WT1YETXsbzp8RkMxWmfDZ7t4ccLdvWdj8NyoPPdtMCNXmEbmzaqmHfRTDgEZfCy5jMrKuYFN69gD2FJDJyu",
  "key28": "5Kj9Xdtum3jNaEqCnZ91qnupZkHM5RsHqZ8dw2NBrrDhG17sLgWikKmEF76m4hMRHGcFaT5aDyY9sECc4Z4vFDkM",
  "key29": "ygzEQr6iQswh11FscQzUK2prxBeZoo8S8jbN8299WGfvrD4eLRjSTyJ2hA64tXLiwLgmRzMNqy6ax2YBEteWx6P",
  "key30": "5yTzfc19suGCkGnRE9FvwKkgWrRc1QPuqNr9cYxTtpvTKSQdfjT9k9W6jA7PYw8CB29zA1bSxbkDgeCAkTvTq813",
  "key31": "rxziKAwru2KZc49UBDeVH53QiXpKfAgpPYgiePd8JozUYrBnyH9f2eHipyLVrJzLqcgCAZu5ntxJmRbtLcYninC",
  "key32": "53PBHBqeq1irEJfX1VPFie7eqx6kvsy3JjsUM4QDdVR1xWPGFcuZTXCo24A5w4wGgt8VpDwG1L8gtz7s5aGCrGmk",
  "key33": "4bqXXtAQxXChQ5EHEpoWEWdz6LH9TL3oF8A3yUY2yzfB55EwdJKbVSTAhg4rwLFtGgbRfTKCmToS3bR5o3bhNpHp",
  "key34": "3fm23Py6RNzYGxsMyntrLJvEw1B6AqT1rs5M2JA6TRq2P73hdq4oAUbJjRi71fH8iTEpAgpErFX4SxoRx2kghREe",
  "key35": "22WoNVLc4YwtHNQHtBn9Nm3NckciC9CHMX52UhrUuQhsMXCwZyuNFKG5BfCLnbNEhkjfj2ze6eWSSHfx6eNm5NfD",
  "key36": "4uuti7gAdWwjNmvg3ZU9VGg1yMYTkNT4XkmFwDfFCLhrPXWbhVGJUVnRrxhCnuuEaDrjLsCT6fUZfJnxekYu5Azb",
  "key37": "ppqhk7anV2KGAMU2pvehYyqmpJH9fMPEN5hv99zufdMM2T5bN6Ungm8zcRt6nLwM8NRhiRWdRS3dpMMFHoa1aL3",
  "key38": "5LYb3ygXgJ6B5vCQMVkuxnFdkpHJEhxqkXXVsPGZftqUkfVY3umLs15r4Mx7fpozqBwrmiNNEb7fmG15Cr9omCsY",
  "key39": "2EzzdiQKtHZVSMrWwFM8WKGa9ktJcwJR93rAJsipfN5yVXxM12fiuefVkNp8qD7wpqLKzZqa9KTcaSp852bQLks4",
  "key40": "4YjWR2F8FzAowJAewuMbuaxqGq2Wbh7HW1zFpL5zX91Ch9jHw5AWPfvNBD26k6Lfpokar4NmAiU47N5CXuWM8Z71",
  "key41": "39wXCSksRmYDPowu7LiECgTNdxK6c4PzJtTsnf1LXPkybgo6HADBixYidST5QHEu7UVoVGdU2j9nLD2ncAqD6TQv",
  "key42": "mu2in9YS3nzNcnCyguKTCHk866vSz33BX2MrNPwcnZ7BZAoMMfYSCGCH9u64WQc8d7tr6rXtJbfxmfVXnDWhKNu",
  "key43": "3rkSV1xrUVzvaFS9KjnwpWKNFAMch8iCYCaoQjUjRWQuau3v5bupiyMqDPdCszDRx7SFTEWoS7iLDQgzex8bCTuw",
  "key44": "FBfhEmYaFRJGk5Unm6y4JLNZicZ3J1MyMxyQPzYWbbxxMDUn91EKS4c8kuJUidJ72NNQHkFKHXWkFGUR9BYSKG1",
  "key45": "31NQtGL6bE7rKzbsXNEX1xPiE5vMw6evbep54ocnktUBSm5nJWBF9kfZsR5ee993tFxJMvXB7CSS94m7s3GL7Yj8",
  "key46": "3tbMAMvoRHAF3hCGrhBxkx8jBwtrAHn2dgSaig7BhGvjRMzsiwqWpM8AJ5iHdFgoXBS9Xj9VXvXj675CyPECvNvW",
  "key47": "1oVDqXjDoXtZMum2PvjaqnEsaUVwyri2H1Y7s8JKu4UPKrpjizJiEfHnZyoeVMwtuL334djSq7Dz9WikcLxrbMH",
  "key48": "3pzNXxjMDxw2TzsaJ9NwwGinHf6U6yfiVeE7LRhLN9K1wGoRmKu4T2eD48z6dRkD7N2Laqhy1DdEySAoVpTqNDuL"
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
