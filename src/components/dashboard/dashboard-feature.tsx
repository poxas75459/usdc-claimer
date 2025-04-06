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
    "21hDvDQcrFf4neteVQnJ7uokRRKAsTywnT6r9uX8kryq7EDiNthQ1Ghs6wemJ9ahaDuD6VpJuqW9vTdat8pXFREk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GyXXwaeX4NtDA2TsPHm1ZzzwguoFg8PTtEw4mnbKEAXd4ZoYMFHZRWQgSBWcoup8dSPNKcxSMKUh6HeXsHHTZAU",
  "key1": "2pEYrHqtxktrV39xSwtxB8nuJfVdSeWBykQrYJo7q5C8J8nVZXu4gBa4r6qUZEKe7gg8ktPwfbwRzga4vPRayRAo",
  "key2": "sPZVWNdvdGNDowQF5EerfE7G7UBixYxHM2WoETcacXyBmWSV8aHEWHJB2ieqKVL2bVHsVNvfBing5s13TCgCN3k",
  "key3": "2MACpRyiFZPbbJDkY5BLymtKaMVNS3pvVKoo17i6ps5wxUzrNofGp8A6e1g2fh9MzLfUaC7mGd8DZTkn5FMnPYBt",
  "key4": "5x3QFfqzJwKZduozeBcKmNLb1Dwx8XdpDd9o9AzvnT3bA1CPnBm7BxqCgKNpGLjXAohPJqNiJKm5MjaL9icp2Mk9",
  "key5": "2hEd3Ss1qR9t9ocMRHtcR9cJbDWGUTY9AeNFUaZLZJJ62d7dMNdaCMNjBJnH7r9bTjixLMo6YpAdtFCX7SRCWJYz",
  "key6": "3eBS86Db1ybWepdRY4LS93DhL8rNwsyqdVzaJrtpGXY6QMiYDXRd6gbLFJaiQ3zmEeYsquE9sfW88PKNtEw4bcFe",
  "key7": "5oXpLkwKQCybR3fAYcUWigUAdLYZzMJJyoH3R7BKwKDrRifA5KKBgxWJhuhCiFLkXiye3LfumQ4pNbRiTcXo6k78",
  "key8": "2ud3KGS8DhtzEtQ6zoBz1TWZV6K7Yh6Y4xAAtesT6n1NzotPGTWvg1edqCbsn2q3KYEC6MVF28SZWdJoMTeoMXph",
  "key9": "5Y3EamYnbzfGdwcLb9r8QcaDLvFPC8xYnsJUghoApr7rmGrD9riUdVPHi2HCYjKSuAwXAnJBXa5ipNLkKGcfiX1z",
  "key10": "2ReuQgDdVkFsqMaxLwjFqyTiDAoQKpL1bbZgAVie76zyyA5wHhsnaRpRseEfJQ3R229s9dbPS5VcZUwuEcJk1amG",
  "key11": "dpKd5aCCB6Kzmve9a1sQ7VLGehZUxhVKzPGhVJyTnCXisTP4ZtXFku1Gx28m6Mx9sXzzF1b2TqfMF51qVMNzv44",
  "key12": "294d4UFhzbpuY6Mf7vRLosWUcYUM8b1kpfh2PsTQiBVFEmzXbTbEzXX3q6TAeK2Y8aNiz1pHEeusdeNqwdZqvQ71",
  "key13": "AgM3sHmP8pXm9m9xZ29hdpebyHHZ8kkTM6GuvvETP8gasREsNLQj31rdBa36RzLrP86GXvAmc7gZ1y5C5etJb8A",
  "key14": "ZyR5GBTuYgHmbaHTDf1GJgRJjsGdX4huUw4dvtBaYzqcBNJCwE4cSTfjRw2m1McJvpbxA5dZdCNRq7PEQEykp1Q",
  "key15": "2krCBbo6ThGkr74x4hgnVQPxoMWUnMiYC8EiMCHpSAZttz3ZyoHfEd2Y6WJHjkzugQAwxQPDir7TQQJNfxk4XPfD",
  "key16": "31MaaNNTafpugoteX95M6ZgjdYAsGbKCyRBW8zNLnTE1Uu4K5stSfiQruKGBeQZswpLYtK3WMzXBGgQqvwwcwYCW",
  "key17": "3dfSUDk7EgFBgJ7i2s8ASyxJTNG56HtUn5RLqqiG3EUSS6bmQE1VBYSSKGwDmttmcy4MbcjG5XK7M5PkiXwa5PSx",
  "key18": "4Sx7rL9b6SgJ3Fhmw5JNxqM2y4zcMyCNrzkPMd3vuBzBVWLaDNiYyqRb55qUPUPss8F91oDrFKXf7iKUH2ML6zok",
  "key19": "2DcHNNP6KVUr6UrZSUDPHczHSyLpxRmHZfQwrmH7N25m5EUhhMmiVeMJtXZANZxTvJ3evfNkRSgp38kQQJp7nP3p",
  "key20": "3VGekZacu1355Dj5ZAurhqXqj55tkBjsiaBHvR43i3bWiguJUrdv3QfuVuL1fEQvLoQn2fzAdmidzjFgkPRLorsH",
  "key21": "4sUSKdQPBp6KhwqwmW6DMJFfxfGnzeDtvp9giWtGPL4KU4jQukeZBEVYDyKnyuSk653aoMRgAQdE8iY53Xw6Anb1",
  "key22": "9MKATyYs8kwS5JzczYM3DB9f5XPjoDZ23UUv7JBwshajbMpadXeX63xW7rNE8NNfVPnvw3GaKNEZmzgJdSSNPgT",
  "key23": "mmhJ7fnPnXwZdKBVHZaS2wimGFv1S8Md7MsGCrTqAZoXHEHZLrgMcBrvCWt6HfN11q63YKqi2CyatEnqd8moKVC",
  "key24": "3yaEmPJSVUqQT2MB3TijXrzg2KWZMsERKrd76xAA6iZ8tgrAhusCBeL7DrTkRNbpwqThNVjxwMzivacGRjWC61K4",
  "key25": "39MVupDQmkwKp42kP9w1RoqtDTsb44nPbzma9hPAGUNdPqPyKZcYobcem1ETdP8epwNeNDDTHZBtDiNggmu3pqqD",
  "key26": "3idcuTobCzL89M5Pvkmc2DewKWRDx5ZtA5VvfNob4GTdr56C3UhN2jpYpgsQW9zExmh4Va6ETsbFoCMcMjiQ3NDz",
  "key27": "4RxUs1QhyJ25zrgwuY9ARH1uMXg8eDAwVf2DC4NfN2pGNUWyFYLW3CHPAayq3jMa2bwQ9Gbdoz7jWJhHrGzpASQ5"
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
