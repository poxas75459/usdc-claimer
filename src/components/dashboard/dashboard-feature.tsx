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
    "48A76fkc3SoEbu2URjCR1wjSoHTRUvknFdddeokBTLWyU9LinpEfFp58ENVJKEdxfS9ckUB1fFJZ7n2Qvsr7Paht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UavdMhVfm8vrmBkJCKuyeeJW9114qdwshdmGD3yJR96kCDBJ6YSozFL8rgDoP11JZm5BQLygxkopbkx3sdopHRy",
  "key1": "24zNwVp6bAugrZnroXoBDhDB7hqy54GmA9A11jUPERhc2FUyEriZnnqLLKCwKHLekWxxmii6fNUvWixxXXJckojH",
  "key2": "3FA3snGtrKCuLnsAZm9CR2yYghCAWonUprSqRbRpMghzSFfdseXytdEBPr3mu9c3VkpT3EtPiotEMFrxgbLXy9WV",
  "key3": "45d1SsaMk2QN2D7kmikNJiwiGw93f9V3tetTtWhFrBWYgJgidmxrWuE6rin7k1mwqfNahL2bYhoShKe8RcB1b8j4",
  "key4": "rm1JPGrygzTbnp4QK9kPE4WPy1KxrVHWQpDXL7rNvwnBpWmYdJjjz6oe9Lv2zSZYawX7Mtqx5u4m2xbnpakZrYu",
  "key5": "2U6rPMEQkQvTZy45g7QDq5MjrWRtVeRA3CJ8j9WX8CsvL3s18f5FPkVHGJBw6tK1zBUww3eEw1a7LZBpRYWnPbZd",
  "key6": "HHCR5Uks7g1iERBm1xRj39vuYY9aS6Nfn58HaMUsRqWisDLs3LdMUuX2XC4LBwmwUWRA8PH3Hapibiekypkprog",
  "key7": "4822wXMD4xCCVpkXpXUoVi2NN6wxBTmN4Ve7B64V5SfZnn5KDP6tuyNLM1RQQoVFfDc5e2znTgFj5QNY61ueEoMB",
  "key8": "3xvdxd27GnCkfYqUPv9BEkk6aFUTDiR8k8H2Q1yDcSWT42LDRM6kgjqYzQuuAF5JjjKohQYq8aNAWr3ZdoqZPkEZ",
  "key9": "gXXT9oZxGezcEBof7jAKPppyYTJ95FB8LWEvCpAPV1u3rrKNWQYrGMyaTpWyMxkRzq1f66do6bXMXioaHAQqTPa",
  "key10": "4bX2RCZTde13aQt7yRz3EUveja3BYDXqrvwNpJhdsN1NhkvFeXBZx2JSwv8bJsyiT7QFtbCq18LYW87mhHAK9TAv",
  "key11": "4gyJUoKCJwizJSHV6rn47BYx7A3WEiuksmLYLzSLygnr21qDJT481qgMBMp2SHhkbY6Akr5sT99gAn2q1XVDo5t2",
  "key12": "sjxbN3mzTh8Mnj7UANuAtPLe7R9qQQzuFPt7JtBxSgdXiMi8E2HuBFg6NzbPMBj8Vu4pn4mrEdwvaiyEdGBcyPm",
  "key13": "46BVDQybbPF4GbiAbYmAzE7naCyQu4e51nhBRP8Uf6pMYyNGCydS156sQ9WNJTAfxXK1EQxwxwKT122eC2pDMT7t",
  "key14": "2WDXErUNTG9JwiHdZ7kHkF6F1qXHe38TjsJTSnPyEVCxQSVcrxgGhUYwdcCTaHwkjqCwsN9NdRyXU8p5APmhHAbD",
  "key15": "fF4kmnFdK5HwdBcG6LL8Zqda7Sca11bei4N5HjmNGX6EMXygZxjjiNF8JEMfmWKfGZ5W8HE7Nrgg8eJ6NhveuYA",
  "key16": "WqZFhNY8busePxmaNQR8Qdb6tJiRenPo5yBiidDJbG2gsDzZRKUpMsTgSjNVy4wm6cXwU1eJWFfPewQVU1wgmda",
  "key17": "5DXjByu3v2auvrGtbUq3kmyDov7qpmNUhTABP4xsonNfuofT2Z5V1DkBWaUredNVqo6sj7Z773m4gyQvvYS8SG8p",
  "key18": "3CU6HicVCvTXNsTE6LPwRhnCs89p5j9aMGurW7CabgVuJZsdLqJqB5hM1vRgBUx6vZuzFVGKssjAvuLZcXsnc1nx",
  "key19": "3dXbhtcNpKpriBC5z2XBJXgQrd2y1p135bMzU22zX12PzeXoN5P2TWyKQN8fGGka53g1hFrxLbQMCVeyWkPShW8U",
  "key20": "35obwg5LebE7ZpxP2xdnBj9Q43b6QTQg2xXAPisWkV4NqicNfHKsNKRpdw44nyySNEZS6ALYvRTA68m3XmEyq7Fi",
  "key21": "2BQK6898KF27vUHcCT1Q5hBVEQr4axACKoAvGi7TyvRtGTzVBrxbjyhMJxUPmhyc8HHsW5gSDAw8FAzKFZkeog7F",
  "key22": "4YoixChJtHuz6sLhAg8LES3zxqoPTvptYWHpBanGPtJcL3suDBYGsCKccUvdbNQxa517qe2GtzJqS6CDVkZd2pKz",
  "key23": "376k2FthzKu3mMrHUqfws4k39aBSY1VBQ8GFnhzgMqWVrwzescK6qGgeVw6UtLzMSHRPFCLxTiHBPhEmET1ToYyG",
  "key24": "3d8PE93ViKznKJBdgAhvGfyVAmNGbPc9HEaxDVhyycP1Ff9vmpC5GSP83vHHeTs1wtY9p4jX65JWUJRzgUq2coMV",
  "key25": "GTUBYkZeBrNnoZMvEbe6UFHDagXVsmbQfB4spL9bmpnT3qG96ZN2gzwtUjuyB56Syfu1C3qis8TZM5YE6S1krNS",
  "key26": "4apPy37weXn4f87HEyYNytmMRmcCnmzjZmx1SJqcp42seaLTPiHeM4a5RH3jse29VA9Mqp25Fzg91yNPqBmmmH6H",
  "key27": "v31hz7XRbk9qg8E9VL4Sd3xMkj7h7fM8v82fJq3FJNxCqn1Ye2SqpPygBQKPFmeeC1X9XG16mvfbhVhnCu9wUqf",
  "key28": "4WLgPDUtniHSFbzoyXumQZTH1Quc3etJqp5mMvGhaYqVxcUyA1h1ZKcZDyneF4wQWwPYmAmVVsqYHRdTe7L8vgi8",
  "key29": "4LUBhoucGvU1WjAvDTYAW4EzhcPZuG66D9HFzonUe4i7MaZpcLaE1tzMxnY6dHRq8C4SGtbxjUctHpSfUymvBAtJ",
  "key30": "4s69FNC6dHGVcNW5hAL1hTazEg3KsjzadUuSLH4tfXPxZFdjCkhcNFb4BTdWrVT62e1zUxrHox7RNr1UoceD4MXD",
  "key31": "3Gyd4HVp5sn5fvxcVnQMxtNAxKokMVfyqT7TxPNz1FCYXpziE6ta1kuK9f1ZoZsqndZW6GHxXRwJTuPMaYwsJkeb",
  "key32": "4FTAGBdXrVb9cPpt8cJGQW3oAHFu2xXfgJvPKMXJ69Da7aeHFxYQvbMVdAdF16w6E5SPJqeY646VASSsb8MkTk4X",
  "key33": "5QY2yHEMwbJhEfRYTgntsfdb3gbPdrLk63jnT6kqLkXpb5ENaSrMVrwJJPMBJzwrJR3yrkY3in5d3ZGsrYPyydR1"
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
