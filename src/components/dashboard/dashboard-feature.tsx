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
    "3DekGx8AzmqD4tZ8DiCZ7iSNa3yhcn3d85zCofwGwKeZzJ8H1DxLQeprcDseTPVFZ5atbb3M7znhEvhmDAGxBovx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hNAeXTnfCUTFuE4Tvh1BH1NqxPkQ2kgUa51ctkzAVV1Kh8QDP7Yrmmd6hGZtxxuwmxscTtgBGiPwFDip8nPfNFx",
  "key1": "LeW6kRL3MB85NJve2MTmxGmYuw3TV9RkEjUn43iGS4fy2TBcSZoPbzQozNxgMw4HtoiiZS73jeYniEsSUibsg1B",
  "key2": "3n1NN28gquikSYbU36quRajxgpx9V5hfc6HKZ59E6JcTBguRH9GJWeu5s2FFZhNE64k96RQ3dws3UASMBv5w14Cg",
  "key3": "2r7ms7vk53gKvENqT4ZvxueSjWWn5L7wivFx8H2mRFde1b9cKEVd34iHxEju8TjL25TKQpKHDbF3Toqv3NxTRAxD",
  "key4": "i2k3TDPUCZtMLDx2XmDkUNB2nkphGs1B9QHkobunxxAEnSJaHKRmMW342r5iQGTMbqrMaLUB8rgAMK1qB6qB2af",
  "key5": "2bVXrozj4NNkT5S5fQw7vmES5b5W5myCKtQ5fis32tKC9n1pbSWurFYWszT6LYeMn9dUv86UryfrzcCpaBp8DJDP",
  "key6": "3r5hjrjDYcHuPyp13o5UNLMBeQ3YREZCZTPMGsUCZtQyRtZQ3wJYVHreTWDVen4EKudsLBCHBSGEhoCs8mqLVhC4",
  "key7": "5KFRjcmuvRdXZqEF6kLouE92QmzHT18tyoNgx7bLEb2AYy1KTxAL1uzpfGGN99txSQZ1X9VBBqr35Uc7LwPV3Spg",
  "key8": "5WLiR72hdfHaaYyEeNyXemZsoWNiFEXa2EBZjPT7jdsNbXXhAe7UpfbMouKB49BGoBAqVDki1HJkJz9Gr2MCTqV7",
  "key9": "3sD8cwRauWoadv9cXERFBVVRHY9jcqcnSPsiFUJhAai5bfVmjPwUZ4W1fax7BpcMdPNzkuQMYU41f4mbcs21aY57",
  "key10": "2cEr5jNYuDPWoK3kYG2nmWjkjrVj8cfTbVbHsrRbxyos645RuKAdZUes9R187fuoa5PiniuXMJNmsbGGqegZ9CQ2",
  "key11": "D7VJy2gJhxRaaMjLNbHi6sTsnZkdBCXvdUWLcqxYx5pP2ZVrVMiioq4jbgbPV89BqPnpYNkG9N9ixeG85LRGsiK",
  "key12": "2DZY7rHdgiWpkswx9qH5k3Rj8LGMDdZpzKzGrJXdEXux41uwFygWmQQ8zByVyDJmT3vfL3QHKdkQaV4xDo9gGWhX",
  "key13": "hnYMpyW2g4qse16Fz1CPKkJmVgPDWWpBEV7qz84mAaCFLQRn2wLCo8M6QNX6GSgGckpn9pTeRWhTkVPissQaUDY",
  "key14": "44Hx8Tg4SXQN3FFEjALaKascqFyG1othmMxGDgheGcoBAfbfEaHtuq8JJ2fxa5bopKzzmhP6uxGmqpcwoebNH1No",
  "key15": "3LhroDUv7bp7FzN64WK52jWSmkqDfTzPa6QFFvVaAP3eN5qcFRXmpUPD6WfeophrN1cbpjV4GXQienx1yWnW1iqt",
  "key16": "5EiAacUG9ivRreMGBhXEgciRoYTg2vkJFWjfXnwPMG7AUB4nwhCJNtgkQ5jvCiAf6B1PhLSLR2dnSsmC5Zh27TMT",
  "key17": "3Q7vPYZg2rQKjyr9J6asLJzrak1SfcA5hm9fJb7GvAc9B88jLpbYeXcs3JSrCV2czFBNessMppnHG9RAvKrhMgaf",
  "key18": "37qnCDtFjQBJZbJF9vxMqCHfzRsGuoagBRyMzqBhRED9grep6jEQoPDWT6avTBd2TRbzLPT9GU6GF5EMKDFEwNU1",
  "key19": "4wMUF5LvnVPsuK7Xrd4Dd8FXAde9X8tk48TH8EWHRY8sWxg1WUxEfuJihhqBpnita8CVeeRT5KL9S3V93ERwUtfS",
  "key20": "DuLj96UFscVhesu4gnMRWNRqYFwLnXoQwtDML8bsERf4wdycfPZQiPK2KjSgEnoWtxCUjKYs2cLrHtysoBH3bZY",
  "key21": "5hSUEwv6QSNUUAPjurfBXSgimai8cbqbCsqxfeNqZ9wUwoyyxUhMbCAw41Bt1SAZ4WYXkANFmYToheHAybTwSLTx",
  "key22": "3kqtv2JHo1h6rprxkgoKfH9xGEPkEo1EzyXpZDZfyUkT9MmtxfvYB6H8tTZoCEk8ue59EoYmzUjPR7LQgEmEpHwp",
  "key23": "2Y8H2PT42cEqUiUdzBUHz138xyKwBDFpGaVt3qJ5QKBdA2TgWZbqLkK7WKfZXCrd2YihFWJS39XsKQYWEdzzqPdQ",
  "key24": "JKfxzBdwf7SmryfCi5dmWCHxuTg4iBXqqEdLVZksopSTqAECRqk1PdEkgeNAUF6tkPt1KhvpW9e4MNqavfzNCwg",
  "key25": "KZYCs5FRiRSt3YJa7BddzrGAfoLsLu8USiS4HmLEvcwZ2qSjYx31dxSX85vnFQ3LhkDStcDPhHbiD7XyAZmFZCY",
  "key26": "3NcN7nAgfEtr1QaJFZ9NwN2FYZcF5YwUFJzpzDG1vwhrEaYFb1w4ihhHHGzKVG5GY4rX7vztNLfZW9CAAmhYZTEj",
  "key27": "6bP6tCxQhLyprwRQUDqaCCC4KpWmTrz1R4iXqfaQgN8kzram71zck6WcU6MiPDLnZhQaMuy54WnEW76Ja8gfNDP",
  "key28": "5HW1SEgqBeMmuvLUchr3gsFsicaFYGQcH55uFv7HKSPu4UvuayA9QvPNJRnty6KoixKn4ZPGK7rBVS9yXTY97FMt",
  "key29": "5F5SiAuFeZsEvH2wLuwx5J1oqJmr9afsLYBHhZZk9vt9V1jQ5qwGi4w4xVVLWpa2eCtRR9YToaWawrcRc6gDL8p3",
  "key30": "4xtEn8yR5eN9dvSe5yLrVqN6zHD3JjovoYUu5fnSyCrHh32g7fcSe4H1KvtDnSNMxdMoAqo1EMePRDsVsh1zkv8c",
  "key31": "5YRtThSVaYhct5uvDW5HYh6bmeD6P14YmaARmTaYge6CG822RvuQ9UTx7Wyj3Z3KwEAJC6a6EqNFioboHDyRRmJy",
  "key32": "5XqztHqcrvugkFtFAc54FkFsPmL3YWQkZpKBeCFqgf2a2u9adKH7w4nYHM679eiRgLpUyArfiRP4ko9tZ5e4sddM",
  "key33": "463jTgHKz5s9eTsVuD7RU6GV7ytxsBFEkeNurjJA2fiXAT7xUxJYoLmnpkdi31He11cggeeHw7QivAHWWK2BvUQ7",
  "key34": "5yShwqtpH84vvNgBBnDX7aFztqn8uTS6EBYATkUCF6bxzWpiMpgxVgWWv5Qf5KRxR33gK355bDwmkWARkDvtmPuA",
  "key35": "2VPzP6ymzHcXgQjQSJp3iyLNA3KFjzE7H41T6DjAMksNzc9FF7RYJ4r7ZRZ12ws1La7XJqE97HLFDRj5eL7jyVd2",
  "key36": "4nno5u2F2ELwkpWCYCLkWGZEpwS7NFQ9Js8FPSekk9To2Vs75eKz7RMVnwfE2p2dwLLqHBFfciLeXXeW6rkeuSeq",
  "key37": "58rJ3EpdVEcKDXnCJyCGqG8xiG8vWvQ9P91VVaT7icNh6P2Ua4EqFQknuocdvh97y9u17x23tamXzpmeVPC1NzH5",
  "key38": "ys6aXbHEySgYswz1JFjQgbvS4rUBCmHiVdeeEqf2jihcsT7mQKXwofX5UzhF74V8qYVWJsr2aAhA7WkH3cQTVM4",
  "key39": "5dsFjtywkk1Hu2buDmyByKEnVFKpmnqsbJES3nYZLMcxQQVHQpcaCphkZdgZTqG7buLLRUyr6vDAnspFH3hEGDAQ",
  "key40": "35wEivjTWT89y27AkuJaRPgU6gmC12zizmhMLnRHqufLSPzGWmL1wJA2ggD6j7xYR52gLmnvY7SuonvGAwK6wauU",
  "key41": "5f55wBKoJnyLNyDoDUZRHWBJ2w86zDqE4Mn842q7XRDTBYd2Jt5QfWM1P44tGHY1XNYhhkGnjwjwtv74b7SFRwie",
  "key42": "21HmPnQAcSXptBdjuHazPzJocmtbDawCTiYk23AC5tTousB2eDEqrahgWNA3bKLsybdmfxxDCxRpJcyGhAFPLqtK",
  "key43": "4EMipRf7La1ffFXcWCvXMu4GziQcE8NyE6ksw3cpfYoYYAv2EematdpHvJ2LPSBnrnk4Wac7voC7qgVN9PDWTn1J"
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
