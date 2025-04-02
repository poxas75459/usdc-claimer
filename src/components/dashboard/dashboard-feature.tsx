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
    "2J81R3Dmf3SGrzSEyEnV8cowpkF9PrMz91HGZ9KpQNzpHDVg7wDH6K9a6wwpwLnXxZ28ha3QcjwtncygtNih3Bia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y4SXCTFLdzj3rvr8C4CRpEVGKeuFGbtYgsKeLpCP4gV28uFCETydHVUNftsxkFFBPPtktats7mFJe771MDVu3Zm",
  "key1": "4VXs8UcT9EyDd71bG3vt7xXZsJobHA6H5BtqLenG6J16MENKarGTZ834mdcSeM16Yo4hPB1nJeuYfgt4k1szsRg",
  "key2": "5yiG1EXPWixLd79EpxCsTH3KeQ9EZpEXXL1nPxGi5zB6CDXT6mX5JYyn4jp3aW4jhELjXgsUtkSTP4MUzWiNEoT",
  "key3": "67fueXzH6JG4yNgnaicRH2cMFCPwtzMDnbvrG1vPrG5kKMLvTicp8p3JjinriL3wwManDJYLtUZ1mPQq9Wb6mLgz",
  "key4": "2sPTMigtXgzEcBu5zvmg2VrvA3C7ztaQRLzZVUenLZrgoUojAvnkkavypGaUniFmvhF79x96XyY66NhsDUB8BarP",
  "key5": "3MzcuEEL4RBKANPBDX5esTTc53zzBB6tUk1Lf38XmUG4wshPLL4TqQMG2iEfHFiMCVwEVnaNyrZQ7DMLJsQYWtni",
  "key6": "5mH7LtAhXQYHGsb2tuhyDpH3n1b2xZWacGZ6435vYYmEqCcJotnZGsSnsdjaXeCnnKvFauMbGFj82XRfiSdQJNHG",
  "key7": "2qF25zLbVV2pzifcLt3udTS3Hax1TDGdLS7tKhLfDHs3JEz2TNNBU4XXsw8DPT7bQTFcJoKfMhPGS4cFM9Szt3Kh",
  "key8": "4a3r3eFEbffU5MCyZRjJPAcjZqFsjxMTC8dw5TUqakUG5ycbZbqEDyQ44PPpywqYbpGPHoHM97mgaFTPDqCFsJ9v",
  "key9": "2CRcyntWquzaByXa4CQTQi4pSzcj1CEkhQ7MvjcxSAHyLJDqshMTPbpvND115iZbpZmCAAAPeHuTFkYvjsfkexVQ",
  "key10": "2YJHAz8EfTJkYrkDiVsAVyHmFSu9jWhpLRZuRkzc53iLVKwmuw9HjFPVmwKsNPnj2WzR9dUxiBQ5cCBEMz7eF9f5",
  "key11": "5tZvjZdZscC4kwbwph9LJyZ8hNLrS6XLAwzNQg6P5Mdi1RHTcYQMFs3jJkUYNhfsaD85DnpdkmhCSiF3SJXYFF3p",
  "key12": "4pRkj676uGCi4R5uq3NCQW56wCYWq4NNaitBfpDymK3hzEnKrHBSfnuyhcAb1LVFcfnHufYT2nNU1okBcQ4WK9wY",
  "key13": "58sQtwEPGQRFaB58QM9eSv7Fyi2jUi8Szf2s7VmNwhUh9dDXgKU3c3M221YmgVywnf8auxgsQ8s2e5fXcXPjL3g3",
  "key14": "5MsCDnUgPqmp1TFjGWtjNvnMRyPzEbF41y3avBMy2wCSqKuHcueno9GptwBjHYnFUWnHd4WVAqz9Qrxksvp67pAC",
  "key15": "54ZecxXtcRRXnD2Akd26EeGipHesYaoGDSF53wVVcvVBwFAkGGpBnxwNb91ADz8C4yPWKxiVGUv4ez8gZdDJLDX7",
  "key16": "4ZKVmVjsBYsPC1cye9CjcZKRqvPJjem1mbEZWreipLjxygFuVxrB1XxouSVNkQMFekWpmwLrWjoaFAjNgCpfjvBx",
  "key17": "2UTGeQSxcxmdmN3bC5EM23HdK9yYdgZySk5uCmPFZmdaNaigdpLKnfEMXRqHNUZ9xhezXXnu82uLmLU97r1Q5ddK",
  "key18": "5z8rpLhUfNT1Cr7NM8YwVKZPMhJrsZMN3DM18ETuahFnVQTcFijZVB74akgRNEJHMo84KL32wvNhRUBAXK1EnhZz",
  "key19": "5PYCtKoLmXkFGXMaSTMnAwzK7AEUNNJ46Z1RtFKveGYwGpLWjBf6fExXuJ2aKngbkCppDoyDSVyofW6hARVbr6HD",
  "key20": "4DhsfrGcm5JD87MGj1aD7m3UeHxCM8yJrGsZbtPjcNxNiVgd2HtP5atvdrk6VAYaXJBR1X5nheAxUmrNd93xnpxX",
  "key21": "pka53E77AXee2sZSHpp37ucQCMAadzy6t3D6GzYKG5H4AUs1A9tXZjn1ZFr7CWSEWMTYt2tQy4RdWoQNu5XCXSz",
  "key22": "2cLQAmYHKiQVvMyX1St6MaSiob3QYuWHpafRfbU8yJAucjSxzzanyhhSN9bDQhNv8WFidQ6LTjm86r7WafxVXPoj",
  "key23": "42N9oQztAC5jPPnTgN81UkbxaqHoKqE9TCpE67F1mdWd8SghujAyuoqhhYzngExZfFHPJT7cAWhpUcMAPAPsjZVD",
  "key24": "5Y87rEQ9323szMBfKpRo8nu7JbMVjfRTrn6bKXXCxv4QPQQM5ctLTbdxivjctrt8QHwPTHeQyTFkUrtgtkwWiCVg",
  "key25": "2k12QnhJexHr9vnNBVD1YG1gmGFRaSWYPCixf2d4fWimJgTt4SmKsu2uQLa8rADHBtXbfEzgGuyKAxkUaAdMShPi",
  "key26": "2429d3upXW6jonMAPbNwcUfu5FMFRtPLtNmfJUZ9JEdyb5TZEGZHARFA6pUD9hFf4chb4mm1wmBHKrLcSYCjGNmy",
  "key27": "A49MjkYhom8eXANUupAF3pEB9KPSxYhDjeu218DytHsx8N18TJSoBQxY9jpeorBwNNtZAkZyJZYfuT8nHmWLnro",
  "key28": "TFNNWYG8PMMSzZVC72eLqnt7JU4jkdb44ezunhMw5EYxvUYihPAnGEYeMwoVaCKYdw49qnevGPZWTJSw2WLqwXg",
  "key29": "aBBcN8NPEX414cRYEJyWLpk6FYwtRaptNiY4DxzPYpQbsZfqYRhURaFJJvUw2xXuvvzhvHQL8mqbR7xwyRfqqd3"
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
