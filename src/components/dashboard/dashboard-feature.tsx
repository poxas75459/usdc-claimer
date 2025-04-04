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
    "45wumpD4Uc9RTrGS46GxMUqVRqbUGj1r518wH6NgYb4hBX54DHgaLTENQg5UEXDe6owLbFr4JruwDsAC4CSRS7nV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fZPdPLReWkVfE6iLpxJRHPMkVk8MWapjgPcXEjNX6Pps8yWrHJMxNb4xCZpZGVMTfK9obNP6hHdt3i7GfJzBC7Y",
  "key1": "Asx5x14iBu1VwaXDG3VpgMuFELKgYNoy5Vswk7JTxLaRKwDQ4heccTzCg5xe3LKqNuYTD8xs5tA6cJpiM7wJAXW",
  "key2": "4rX8bye47RDzym95yARiDcfyqaFyaov5QApVdUVFndLkjCLJ2aTqT9PrQG68oY4dW93KjHsMQR5RE6qY68h8ZqmC",
  "key3": "522s6XnASH4csT2GUcHpDtnoR5MqiCE3CxXNTpNkesRognzzRBfmKV5dVw1qCosZNREw15f8M7GXUoS9ANxAmdnX",
  "key4": "XL4bgFqu3dDLPrZeCMMcoHbAxcosziSmfcdDn92Wb6AC9ya5QjvqvG92aEoKpuV9kJuXL8Yvbaho4Un4n5CToiY",
  "key5": "A8DQ1ZZdiwL7oJenwRvvDo2sdypGAymK6ZK1vVRH9s8o794CTJAx8bcXfRiucGZdUHC3MdED2Kbry6d2TqvN7ik",
  "key6": "3fECA6CoGrb3GCg18fwVWWEKUpR5eARe5Bd2z5dAq1QZehdTys3tXnzvBM4jRoXe1aYXYFCVYzEmpjfpDvsAidJp",
  "key7": "Hn4XvbeoXq7yTYy3EPpgDu8TStixgy6zaLk3VjJ2CrSUDHwf9W1JraA4AXM6K7bjUdyY6owXG9kEiuZ8TJmkjpt",
  "key8": "63LDd8WpwNNNSfQmEACz3f2emAQbjGfXJuX72mXRTjbV3GSFmp72F5uaj1s2Ru7ZXz7VaA3i88D5vAC73oeRfaT3",
  "key9": "3i1QKRf3UgQ8s2eYZ8vqKAeqh3GMvtgG7YekXtNKSWyHPN9zdt6ncy1rGUUAPtgBFTkzsmj7KWXnSZ8iqohZE9nh",
  "key10": "5CfK6P1VWn8xfCcF86RkVmiY9eePUBW9pA2ohDUc844hB8MrG1zzARaniMSnuwWJsZWCmekH4oScyuGFW8ypzbA",
  "key11": "6xeCtWi9i68kEUfXrHbrZQtBbkUAoSd1cfctaSE3o4EwhKKcjyhr5qAuYfRv1DsJGLybE7N5HRANwzwasrTSxz8",
  "key12": "386N4MXfDekohrVW7UaUDjqR1bUT3RAisUbfXtv23xDqNDxQtfGUd7q3VkGzuua8gQdpQramcztr2UdtvrCaQS7J",
  "key13": "4gcVgfR9fcN4MDyRnmU8z1NyyqEssrkZr2SNAPDkHeVeUHDfj37oHKu5qsrxy1dc1SQhtk8GWpu6FUDAvsntdg9i",
  "key14": "4mP8d9D8Su3Sxg9fBnGpr2T8eS78PAnzjNkW2Xp3zGzaExxNG7VPNaEZ1Z82gdKMMBNiDs1UAnvRXCC5A9NgDUE6",
  "key15": "4DTcBCRAEEZwsmttCNbcJs1uDfePh2qcVF2fbxYzW21TWvr2xwa6NmQazfKpPqpbrPRSSEH5jVqg5vqeUmj6p5qD",
  "key16": "29etVPDAEpYBLzKGeVJ4PTqibXEzyjoVkxNFg4eKBgJck4eiX8tHMSydZGdu56hFHetF62nqzuSCQmkXeiVxd8Gr",
  "key17": "5gGQpsaUR2nzRJCvSuUCPqduRB2avLuGVJd6jthwnfQd11DimYpo49pfmE8g6PUXTrUf1Xx1oq1WwQjQYwFyWPPY",
  "key18": "5nJrXoFsHC4vHFpfsXG38Suab5N6CvoySSgiwXqnxBBzMhyFjDvqwFPkEVkWPth76WbJDNhdAmLyje5QahK5fcGX",
  "key19": "3UEFxS7bJB4rPfiADfkFsowkLmcfnSNxKRk1kGdvAdm1WpQWop8X35rD4hScRmTuF6fmktQdKuMZfMXzoh4ZJh1C",
  "key20": "o1N1w5uCEcXjz9uZaof4AgRRYJWUP5jUJpnpfG5hVtGp8vn8szsWZ7EAwvSsdSbAtTyEDYv7y2Yq9hVLsCu6SF8",
  "key21": "5uQ4LhNLNBaY97Nhw3Bz2VveZqo4aL72gUdBts6A3KDEYo43YxcnWrSEdw74dDU8uJgTCvAEPApYxPPXfwUCxAhE",
  "key22": "6USjywTSebFAQUJu8eVVyk1jzngsojTAKmb4tCpJEQKJj97KLDTes3vYqN9Pg5UysvBtvkCC19YmgaGfGjmr9R4",
  "key23": "h5TJJa2pWw3U6WTyzp6dCDVFdHGAB3Qd5cqDx2ZCdz3t1Myeqm9EVfg1eYYk7SffEWeZjPJonDpWejmdrmq7RM7",
  "key24": "5XqBmUd7fq9Z8Kof6isLHbnn2K65mRYLoRDUqbLDnor5irV35pRQ911wpeHZ4C1vQ1maKRa87KCAzvGHrCBSuWf7",
  "key25": "UUtPijaniDR4kLBF5gr7vRNyLL3kDkhu83Xb7FbK9urXS8XJn1xZHUbA3jsUgkeWyhBqmzbXK9RL5KHeryu6TfD",
  "key26": "4Xpppq1myGKmfCXJF2yndNSL7yuU1qpVySZUj1moHBDRWH6XHU2UfNqd5zHCrjjZcQjiD19stn2R1jiw287t81RR",
  "key27": "23SWzvu4zrLUwwRtcDVgGVTXgTZBrS821TtEqsvwXsxhKHoB7v95AtjtAeef9Ee9aHAKRsSKAwpMgmUD1zJHy8WP",
  "key28": "bk9KGc2whMjmWuDGH8CVvVBszWU7aArJqbCcoNbBLCzfoGE35M41rNNQzMkP7pEatqgD5VPiaR6kn635f1Dz5n4",
  "key29": "5Wyrv1zrkvuuoS6Sqpu3ccjyyiAg8nmNfj3oTTrMe5x5Ne2ZW7KHskNfxa5N76ZeC2DFrmqdZVcs5HgTBTSXMuu2",
  "key30": "2whVQE1c63c8iW2kxxbeHD1dEX7yo8PUicw6vYswsgKK1Lk7cJzvASyn5PKYHAf3iHZSeaisaxVP8SD7nLjE8Sjh",
  "key31": "WtjxeSsBM4BWVssanrE6Lw1eobhcScnfaEFMSv2q7E9NKDANV4jWnRwq7b1XZ8Rg4Y59J2NtPU1v4N7GfbczGeR",
  "key32": "gfKSu4w8RsnjXHBkEZPmskvL17XxYAQ7pJrNFGZqh7ku5DNFv8tv5i8byRN94R1JhgwJySHwwvYV6sQN8hBMhW1",
  "key33": "4JjRoGCUWeQdYHDrj49kJ4SmLkjK7QMRdSHffPSdjeTGRfVUQzjAcoksZa8j6HcGAeo4emoSJBEHpxJ5Fvg8vPYv",
  "key34": "3Hz2Zp2URgF68THHAkT3NNRGvurNTxm5Lx5WYHYAjEmeJ1fA5ebd4RKJAjvHwKoLWPyut1XzwvDdNS6bV6mgJeML",
  "key35": "4FL25BgMACDUVYJzASAmSXWGSXDUMD4DXSyST7oRkjy9ov71J7UaDe8bEZMLin5gszu7Dgnv39ATmFebSLhXgteE",
  "key36": "5CDYVM8qcKbYbRS2DmdgWo5aVq9Lt91ASv4uusAJH83wYfj4pMPth7Ga9wFgJTrGcVaiHoJPM7cjXFEReyn4JVMx",
  "key37": "62NA6fhQ6RcoJg8boFZdHPgCM7eByCkZwrmFgn9CczCxsLordV12R1Ribg7cHcrQSqVjWYpDxBeNuqsmW4aNjHxu",
  "key38": "3okD18HWedfREGn4GF7Hz5gqgp4gJXCidZf2Rpxta5SbUfiqtHrgQxZPPGVBEFqDhkKW92e5KHYG22CHDgUKYx1z",
  "key39": "4Avhhf5UGj1S7dqdYLBXQ1YBXCGym6QDkC8xLZstebomNmJk5QFUj7C2r9hzhsJLvBmmuHZobNAQydBpgcBu9pSG",
  "key40": "xKEJArYpMTsF2QeevGefjMaHZMJ2WscAa1hzYRWMQbKYeQ9viiaHi4esYQuhJ3zRKeSXSmXwAEmmfcJey3GKU25",
  "key41": "3v95FtiVGBEd5Y2vtAhWLkHru8DjzoR6TrksqJtFzznGrE87zNxrh8ykaR5shrWnBsNBf2o5d2qDf542HNB782xQ",
  "key42": "MVtPR32vyiEogCFQWzcSrU1Hcv27Wm33vHjNZ8rn5YzepDDPq58iEr7PiQKvewMCrDmUt4UieMbi4EE3EFW7CqV",
  "key43": "2idhCCWX6isyt4Ciff6Ey9Ryhhynapffzi3JqZnFGrq4JnYC3JorRsm3fL77YkUU87mhkW1F9Sz2i8iYrCWxfacR",
  "key44": "31ntFKTsmuB7sdHfxpJexFXaRnAgAsPXpRfrQd3usa8rD5VoWY4jM4xfDZKkhYZ9jcdyXa7Z2pPm565iDUhZSMzZ",
  "key45": "5vEuCYxAKuX6fCaACS3K3hcyLTdKgn36Y5Keo1LThEefv3r5vJbgh8798Cs8GyVqh1HcCyPjfWwqivzL5MPA1EhH",
  "key46": "47shbDHjzzTNsqFcuRiZ7UVjP3ZChoUDd4NKVyUGuZBND6kuJqE5ZMtQXFXA4X7TVhPHXPdzvmDKh39xdmgrqeBg",
  "key47": "3DqZaVJdyzy3GFmSvpK3pzQKrD7Fgb913tmf7m9gZpHTYQPZbxz2eMZsPnHVdkXHSQgsm6FkXx5hAYwZ7LWuXmf9"
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
