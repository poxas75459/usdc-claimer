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
    "55vgZ83K6yEVhSynNP49yq5RBEMdeBsWMiDksCFnWhSNNBP6Rs5JDzJQB3HSqnt3wr9mc6tch6PmhsY2Yq9KfPAs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UnggzG4xG8k3rJFihHYJ5HUahhHHc7cKXD4avNs5TDmQbhXyUW5guhMGhG8w8aQ4c9rCQnFpMuEVtfCJwzziKKz",
  "key1": "5boaEJ7wmTELmjZeqSk3RPCQKTZb1akgrDqZ51pEwpuThkyKMF7VHXofqBhbuLoJsnwqK5wgiFy4ixL181YusuKW",
  "key2": "5GEBgfs7vMfdJ9ReDw6BuxrHyaM6GMyGMCwWVYzPNbAyioMkKvGBi3yq6N5on6di1C6dCYkU1BMKBWCwLw6bJ8sN",
  "key3": "VNzZSKhcry8xgZbtJfL3X6Bcmkd8TGhJQQUA5VtQMUKPSu3uNph2Ne9XbhZ3Fi8zT6DzPBK5RwRwv6DFCQsoqrp",
  "key4": "5mQ7qkgPPGkt5nCadepPkMV6DiKo9e9tLdvM5EjrGAtVrjtDHDGEkAe6vuEzAzsqs46529ohsLW7ayiCmmqgU8Mn",
  "key5": "2rrDntjbGafaYjVHYwgKbajo5zjjxfZ83jU99FVX9PHpLSXwDN7CQM6Jmao3oDu3gKUCjznmkJ18dTxjNcFv46nP",
  "key6": "2FhLa2wDe1b3ikSA5A5pWDsD6UVBMvmhE9yVP8kHBzM97YdEYq1HZfDwjskptSVqm3wty8deZLqDnxo3F9W6qYiT",
  "key7": "3mzyuo6bgc5CVmhpAu8NZrsG7f3JioGR6FoZTqjA4BcmqQouwmahLxXizFuAWbN5az5AXjf9rhCzvgSZg9H6BtpQ",
  "key8": "4pER5DqQroYzXY6fPXro2ANf9DQuub4rmrrMHn1h8wnJ2iCE1YfssddxPocdtfv5wLFWcvSsenHdzjgSoYuXsLYM",
  "key9": "3zfLQhSwCTdmDQpBN1dgLfJjnLUZ6Fb2J2t6qZJybf55HkCHJMjUxs8GYSKxE34vxZzn2SpRQiL1EXtXR6McsnfC",
  "key10": "46pqUUoPvoGpZSDXagb3Yedk6xWvyinoQUTcNV4rfAMJ8eueekkvf9ahtJazh1AxE9GQcB74PDUu46xwSjbEinkd",
  "key11": "6gcP93XvnFwrN9RoZYZMJFZaae8Ef7JuxGW1tVrWDTeJ7QnLf3mvn2DBVmPofhpcqQ6SGKsH9QyJaC1nc4g7WMq",
  "key12": "372AusrLSprGjHbnPLRkMnhRMqq2rvoPvhKrVtgJqJCEgnRnAX3STnKRt1SF3irTG7NXjgdWiD67oh8M38AxvxMK",
  "key13": "wX8fBd9tSqwV5Np5R28mxTcQo1kP32qUNk87SDugbHNUUCLhNzNUv8QqPSiGZwz6635cc3CDvCSvnJKu8fQjUCF",
  "key14": "4UKTisXyVKHKYN6134xeCZ3vej3dtZ6rdrz8R2V3xGsRoiN6NewkkADFKpWfnhfiBCaLG2omayZotoMVdgF17Voa",
  "key15": "2nwBiLuVDTSkFPnSaqAJBazaKkLGC9TJmm7ifut4UMuCzGPZGxTb96dbuH4qdRooMh7bESfgMgQMmKzg7Nc4Ve3v",
  "key16": "2zTvm6XPsN21yMAgVHnrthYyKQfPcb5ExwAcosPLjEyZPMoX2MbrRBBvJv39FtbnGoYXCFFiveqimorqRd9MfwXX",
  "key17": "98NuYj2hAqb56cA51vfpWD3fugst2QXWyX2wgMzEW91NpznA2Vc1592aVkCZWzMEZumrfv1zH2GFCmhZp1KJJWv",
  "key18": "4SV9e3DzBDcwyCfXtCnFm8ciuedneqwAJ1z8Ldpp43qu4jayV56oQCD2ksAhZjaCtpmBHXT4JJczKohgrXEwUrWB",
  "key19": "f6zQwQLHWtSKV7LPrFWY1PWDDzaJg4duAKNoVi9xTqVjokdVRBYDAxgqgk95Y2yztudFWoJCZXeJ55pkBWjjefH",
  "key20": "2bvQ616PBfCzVUK5dQHQ8KmhVz318YCNuRX7DB2XwdityuqmLf1Zg6LAwbGkffKSFPfiNhh11BPfLULb1Lw7b7sC",
  "key21": "46MWaTZaAdxhwYXhsE9kBNmeB19YVwdSf7V3D1peidHZzaSSKdLXGfc3axP5C9GK2Q6q69phHtHZwRmLyGxzHirs",
  "key22": "2PDgBpTXdE3MaPKgAGi4w4hHzs9GnosG8iKixYiypyX3dniVoa24tNR1ukcp8GK45Gw219aYADQWTz6KUMXuyjkk",
  "key23": "2uajgdPyNgTiGtx6cSp2s1TeB11rT9HvE4PC2Je2aQeefDBtqrpXo8ZNsVgLv4NND7vc6HzA2HuUXH1wcsFwR6G5",
  "key24": "4e8bgyZA7sMzhdkJPJawkWtMo6JRCBAEFxTzGA77TGe6zfutuyhMwWxyNwJCVqopgv8ehjHWfT5qiS3dyVEzLNyD",
  "key25": "UK2XBUNrpacELnuT688jisWSSgV8GyhAhFx1AWXaPzXr3aFgxgpgvWuL6Q4LYTnYNdbUBYuF4n1u63CF7jcaX73",
  "key26": "y8w7vrdjLbgyRY31kJD3fqK1bdcvne3CWsjbeMmaUasaHVVq45cnZE2nYnYHXtQpQm2Lwj4EfyLDUQqkmmu3xHe",
  "key27": "4JRLW9q6pCLGG97yLhFBjFFGrRYrA9buWL6NENiLy9gdzc5N4kVPDP8AR79WEL8wtXWWvekvybH1AY1WxMGrriwY",
  "key28": "4AzEi8XdhmBGfRq3GBr8ohUnuKLWKQ1TVDafqXPKgDVGqCvjKhC7jaKwiig2jUnc2Mm2xPAzuwpdu1Ecufmzq4M8",
  "key29": "5mBegveNN5JC6Cjwk2EYALp3Qe5Xi4sfAYgLzqch6hkP3bcTbEaHrfLbxWTj6BM3mQvX9GTXvp1gUoBBTViTvTJF",
  "key30": "33rPDt6Mb1UnwcuNTNBBkk61ytxjtUhYv5u4M8q9iv41biTjoZrBYHLLpSjuRp6RyLiBcnojbL7keMrcnEdfLuWA",
  "key31": "35GN66toHCttHjfb48iQs4JxvwiBVnAaqj5c1NLwExcDXHrYt8BBzYZTrqBWu4JKuXAnAPXQeRRCPzhtQLbDWJRj",
  "key32": "4AoRnWxv9p6F6xjc3PfBR9yY8DNjruLoZ3DTGrLqwefjuGoCEEYhjR81NjDtdYGS3yoRBeumBbDvFpnmiMXqRvDY",
  "key33": "5gzuxFsz7dLjzkCB4nS9d1jh17c9vB1EdcH9kmG7mUH8J4fNY1kyK1sng5Rib2aeRn42UZPEzXftZDYaGEAE5Xuf",
  "key34": "2vQZ7TNcLpFZbdw6WpyH9GzTR1fpZPhuDBymtR52JsuUsupC1MpH8sp4HdgVdMv6raU5cREPeNCn8BA51gJ1PG5V",
  "key35": "wrBDU7bTwPnTi4TEXuAhEqabXk4ujvT5cJZ7x1TG9NnYKwCPjp9KmnXE7fdVqWMbMtAsKqWzkQ5cnQKcqmUPh8M",
  "key36": "3tCipWKoq6rcwYVtRGdymAocfnBhETZeaAUHC3VZVesKakNnQE9wnSKEGHRMrgaWomJXZZSpt7tZ3yQA1yzFKfdA",
  "key37": "22cEqkWhYpYAg9dhNoiioNYZBXkWnjsWFpr6Vai1Q44e3t8fdSxZ2pZb5D69HwN8xqEKvpQLsiDSbkGsBNjBiyTc"
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
