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
    "4QtpnUdEoB64Kpy9UC2tvTkG7FeqNrRZuQ3SazbNSNTJyoFjYRwHHxv3pXHnaAKnjMk1kAVHPuqcNgcY2FvM7Cr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sQEjUaBWdtdi8iuWa2yeYu3jRJZY4fGCciisDGVKGaDkYVkmaan4JTQRbtAcNgBRdbFbBiNS5KmsrZCtydrKsFe",
  "key1": "2haGVxZ7SwPJPsnjT4dyuWkZYMpFbedVQf6fu6RdndpM4MZnutRLeGJE6ouhbTEJ7Jv2f1XMENknhzAPfL4gzrUo",
  "key2": "4nrNTVLLW7ipwqVfM9JKhSuis9T8y4LPfy5WcsL3ZTL8sMSEjqUwYN9XAuBfHUk2zqiD4C72L7c5TUhxZ9h4jzTe",
  "key3": "2iJ5obu8aooDDpaRNF5TYJjFzCkUKGFqnn5uDYQ281GjThpe7qrdBuWCjXvWJt1r4xakPaaJPFo97APHdZpHHUoQ",
  "key4": "5SBnE9tsbTp78pBb7AXAouvAsfTJjNECaQYaXMwy85RHbTA7b4d67e41yQXM7vQmTaLnRaAkZ9bZLvRFJge7i3EM",
  "key5": "63xouhGYH1thn13ahDLQygoT2EHaUjdp4HZasuKztbWKvdNsqfsdGmn3djEk3scDtn16MuJGbLoKyh7QJr6CeNUP",
  "key6": "3Rg2tJAANuXG2LZNGjMxCBEX6TpTB9UBb1dSDGTUei6TNcqiSBtMViBJdZ69WL8D6UnPRTvVNTV9iiqJ1LKKTVGg",
  "key7": "36FM1q9mtNiuY2kZp5MKty2ymwpbKW5dngjpdHLtcRH6E4Udow2GvNU9jpYF64qgnb9UE8akUara1GqaMV1FQ3Bc",
  "key8": "2NBpcdc22T6Mn7NUUEFzxG6kZEGBLHahFT44mNisSZChaUQhHcCLvEb3BfRFN1vqyWZbuFMuFnonUiMmk8JMafHV",
  "key9": "v31Hbd5k7ZXzxSDjSceHSRuS58aRVob42QAZXkZbXzseMcLNDJkcM4UryYgVmxMpGrb7qGnkayJeJc27X3dX7zk",
  "key10": "61dUqV7rxLLxpBcNR1DE1uiyALCgQ42APeqnAXTttsrFwgn3KUgRQGwTajyuXaEhEciyS2ih2RajsjNdfEA4Ctew",
  "key11": "4AXz6sW2iNJjsU7CFf6wTFm1jyHoE2eivfoyftS3qMJsb7AzwKZLhM2T9HiMcPjwgVvRmsiiBdKAgYaHBXqVD5BJ",
  "key12": "5BgvwC3pkvkanSjQoPmuz9Z3kBNehR3Fn1GeVNyJVxMHm5rNsAJGtZCE6JdW4kZF8htjwhgLrBCv5tfzdbvmavsT",
  "key13": "3cwEN1HiycLD4nLLZUyhhVCWiPBvyyPEN5TBgNTtaN2Yb3qMvwUoz6R7UW2LC97jipBAfwbcRMnSQUCcVz9t4L9n",
  "key14": "wQsqKB4VPF6VCU1K6Viw7w37aP3wNRVbd8Lz9uoTuoM8K8ZyupoyEnH4VVWr7t33rPjqBp7s87xUHDvXtgKXGnA",
  "key15": "4b6sqmfrBybeTFzyQ91ytiN5TtQTdsEPBxranLcF3PRgTCxGA8YA5PCpT5u3CzSxnQGPPZj3r14iS9orPa9Q1HBK",
  "key16": "5vp3xt4EidNsfKd2BeBYYUjr5yvTUaYWfpk7Qd3qLSMbKfXLBgc81rM9Jk8x7dbKZBgPNafgKTpYDnyq1q2zaNFp",
  "key17": "4K6euhEsyZBGp1fQXfVNeykcNsjQfLB2GASw7zoX3b6xupexotntLRVqeK7k12nJESxsrMyGSjEZEQjBzfwGbj3C",
  "key18": "65f3KhTgdGBMGm58LVRAfjQ7j3oN5jWLnRjm55xGt1vyAGc1AgfsmgTk3h4EYkVukAu3LF4fmo7yD3bjV1YXshH9",
  "key19": "4m5XbfbBjuZ3beHkf9sLt4pRyi4adzLieLm388kd7Td2CwT1aNg4GtWc1KzWaKq2zq52W6kSwYFFYgr4JnrmSqUD",
  "key20": "4FjbyuX6bqCuQ39J97NUTyrm5NhrAASP1mVruxxfMhtrenfLfAoHhrgDZnbU16fUQiENYzEDjLK7Q7V75Pth5uaD",
  "key21": "7cXb4vWNcVUQdF2JgotVCJgdicyiAPxtBLaFJQHPyR1v84UkbNb3u2ssHPxNuTmH4vk6sVeRntC6TeZ1ABLY8AN",
  "key22": "2k1VDZryVnZPjvZj9hABkEba1Smw1q4nZbUD5AcT8e2Bp6MtsJuMefxjXdqx1KC7XvpgBD3keEqWxsBJZNbAS4rh",
  "key23": "3SKM1zgiYM4otfyJToSB5mC8KM1pZ8szETRreMtME8kgEqZUwuJNQ6vxcEhz9upQz2ot12c9eCKgef8SjxS8NoKa",
  "key24": "4HMLEXC9f5XUnbt47oALHLzqDSUYqWUo3YpdPySQPMKeE82wusLnme2wcQgZ4iLy3JesqccCruRVeBYyEkLTbfJy",
  "key25": "58rTobJEZgoWcvxxvC7mf5o1ihUeQhyi1nR8heNK4jSTRCMEh3koQ2pYM8scxk5gsDmjN7DtLV2BowVRTiaLAJae",
  "key26": "5s3jjnoKEmNM2Kzew1bPKcWRWgxToMwF5HABVQsAAVrmqhcLonDSousauieEqfxspW5Yc9S7WvRBnP2Sk4oD74jr",
  "key27": "3QryCXmDu46r5sSYGMCzw864F5tKKSAboDVEKRp39AdfyN3wAZF1yg6NWUY67LPbaHCzPoUrVcSkVMkmPWNaKAAz",
  "key28": "2MgHP2dq4hHfhcdG4pLowaUEBoMbri6Lorgj5Rke3x2bRWRCpVywizgDYDKZjLAyRNP6i7dzHRZMKiQxpUYFz4wc",
  "key29": "2VDAzvj1Uqa9xukrKZZZDpQtNoZ6HZX8pLpB6qsVFRqQk2Pk9vhrDAGCtAa9Pj1jUjL26ttConJ4eUDNzoZ78cuW",
  "key30": "4zrA6JTRjYZzVfH9nWniZH9AK5CpoAF112bUHsYd18Y5nDru4KoEy1ceYSrL2axPSNESkW33DzH2FBXbE6xahMU2",
  "key31": "52muNwpW8TWvJ7Savz6BVazpfrEdhpo93WvyanN1wAsh71zX25WTGDZVy7tuerdqquA1DPupLDwSH9iqRMoFKPBQ",
  "key32": "Wtoz26WuaG5LfkELXgANSi5hotQRbqjcdWFhFGtQf9EFCGAXTXFFhEU7r2tmJDadPLKR1TRFbjw86we7NEF3UXN",
  "key33": "3eoLiecx42BUArDRB1YA7pDrqEi3sQ5ZVp86KFNmv6dAj7yFCC45P5sRhJS2MghqTaAvWXTJfzwi9GfAyKyPYzF3",
  "key34": "4XjHbXCVLvwWEugvSrV7qqgZbwTzdVRimGFMktXjKvj7fk5Ys1y4vQZStbkE976ydsviXTW3gASsk4g1w8F2W97v"
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
