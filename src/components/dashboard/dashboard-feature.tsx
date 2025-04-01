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
    "2KszT73KeJxtkRkwE3wP5ZZPVDiEyDRfKAfzkom2bfCPMeuqMAms4ifEyMZ5dTCuMK2tEYFdmwC6Uy45xyZKjMZj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PFHJrShsU986ut2MzHtEdJiwcxpScKqSpmtkPCqKs1EnpszX2kKpAkSbScHDnXu8GKyZ7YTUgFZEizFQQnfg6Rp",
  "key1": "3Ky6Lw5qeF8H86giubXE2B1i783LnRfhJGVtmZcoxyuEhb8CU4dZUyggaDb2vvhRSVq2hgtD3e3nYReXZcTDkFF7",
  "key2": "4RgvEBQwPTRJ26TFMZ4wba94uoWKedsPTcR6YK7qyNw6u7TFQKv1rxS12gcpkh9HQAvGjwGY218umUtZ82VTgz3u",
  "key3": "3qMM5TCnwtStQDDBLC5nefYJNKq92ze4EEoqJt2jwpsHTTy2xzS9ikXVv4hSK3FHojDPbL4vG2u4Efixtefroc7u",
  "key4": "3hX3kQifFmXRV6y5Pd87pegyAhTpohFyebz5D72LBnPRfagAeWKebnpN7jZgZr8xZ3oEkKqvZijEYSmRyGskNLCR",
  "key5": "4SP43RXwwm9LSqppVN3h4t5UeWVHdhVHWMvTTAGb24E4kEMHVJ9tHbpGtky82Mo8KvGbGQyfHvXKbi2DGRsCJHSW",
  "key6": "3GMWiXhqTugLhGyWbKBDDe3ydL4knTJ1bS6pT5J4HNAwcFUVBvrKAG8sYejssHdJw68w7n4sZBVAH8osjGXVudWD",
  "key7": "29JXi8FvevEB6Lfr2nfPtN8pgj6mi4v6FPFjjNfZ3Yz3E9cr5vF9xqhNx4eC52pfq95rG1mB3VmvDGAeckBfTCjB",
  "key8": "gijy7tefxH4MZMUszCdV1TGxKEAhnovenW2juedLENeofQsqC2KGshHS8hyojZHK4mkp39ac8w7CiXvUpKwfmwJ",
  "key9": "KGT8p8ZcdXToJRKmvgVYcdkR5Nt72b4c4bb3ZRw9iqD492zSwX4goST5xkm6PtqdBgDqBpPzcbsjhNVYkRWrmUw",
  "key10": "AMESRR41oPr3CxG4mYcizpgW9krJoQbc3ZWwayiUukEHzgxZMHsuEnDb6ceAWUWgurAyCFco6BDQE6CgnWZWvU4",
  "key11": "YBE2WkQZzCeiLZU5FAZhchKnyazNCBZr5UQN8YkNM22UDAohCqpaFyTr2V8m4atUAs2axR8817f7KbRZRRe7NYW",
  "key12": "3vuQoCETXo4MPjPAj297xrpSLtKRPFKeHQf7PBGfFw4DLUnaJBUS6HdRT3tdqpQZS4hp4H9J8d2FgGXWtp891B1g",
  "key13": "8KD9u6QapUiyigRC168G2gQqx5UQ23LJPbmHHMKTuKeN8b376Z4CAVok2MHezaCPSZrpdaUhL8SHVAsqAFjReu9",
  "key14": "wq6AgY5EjxYsNsbkK8M5ofei8rXVuTmj7Xg2B8mVJdxzj4jM2mekQmwWGEY7jXieDcMRnSj9uN1XJW1YS5NH8v9",
  "key15": "5kJv1A3sLPpLhRAyGnGMZy6EFMRaC8ipMqTENScjmHVMHwLQMs1LgShqM6eChz1ZrLWS8EcGCKA4DfAcZWJqFXAd",
  "key16": "4RsDt2uNrf4C5un3EJ4rmNWtEJBghQSR3nGAo4d534C2dC1vbMM4jks52RDMzNHE4GYULQjuEiZiSYF4qy3FJ6Pf",
  "key17": "ygCjHw5viGUMgpfCQen42RbJCsRm7RV4Bhb9SyTd53DTvr3tpuXe5TdVf4WdJdQ6a5jkeSWj8XR2XJbrFhxAHJV",
  "key18": "3oD2NU9tRMVgzfT73x2PPSmeEYbUh1GW4pzfpj9t1Rj9kUtjD9WCuryvB5giXsqcpQyyeFH4ZiC7G4orCSJh8pT2",
  "key19": "2qER7ciDgYXZLW5fA3dFirhZmEUaeELgYCdbpTPZi2EWnQAfbogFgsiBHQbJ6wVtuLhkzCDCcYJNub6LqAQA1xQN",
  "key20": "4Vfhkb3NW8iiUrHDz5ZVVzQtkrNUDmg3xQGmfANHESzx13UWC3wur5oaY69noBbESGYnXshQCyZWkNtUHakzrXbH",
  "key21": "4X18XcFcndowoQV2KcPj9A4ujXztRN9XJ6Hwy9dZ4DkiYJ7uqH7tByhKbUiHx5dvdAn9mvqbft6q9BwDBCRGPaSK",
  "key22": "L2tnBCfqRTMjs23CirUZmh6xDJC2bGVw7SanWYSQHfPccotAWnCqjiYqzW13Gf3afR8u21MC7FTCuNnXTGL5SK4",
  "key23": "2nZBeT2MPuQFxspMxkWMYz9DHp7ZaDkwoiC2R9rpaQ7joaakNw3fxLVznzbFKRJGdJ6KgHPXps9W7cNs16f15q1v",
  "key24": "7rynHJFykHzFQsG7SHkFDt6mQ6XqsK5LvCM8rL3tNd4UPRQQ5ANV3sRtNkuTCJ2DGLK4C1yY7qHRCU2coByThFt",
  "key25": "su1wdgrJw76cueoLWcn6ikHXaEje5zkfdJEzVKqeJPkHeHUc4EjLoC7weMAQ2BnTFfQVNf2sq7MzjfmUMkeo428",
  "key26": "3FC3GxY3wNDJarnhKxPTGeqg1Lsw1FWRU37YJbeHZEoDeang2njbdSK3LVizizasgvBkiRjTD67B23EmSBHPZWod",
  "key27": "CnmE2N5Q28j4tDUrhzWdo6sg3sz3PipEq7wMvRQFTwtGFDMd8nKMhcsYWScsoiVLDRH4KTGB1QscuAyH212B94T",
  "key28": "4FZq8dpVb5UwcJbp9AazMXbBhnAg6Xwn6YB4qSyoo7dcc1Mu1avbQecBigUyvo4Ykgorheop9PEFBNJyNRkMnyUY",
  "key29": "4L39mLhYgt332sZya3jKpmGsSXEmw82hJpSEQyTARgudhF82rFeLBGmLyS6Mfixj3hGSv6YR5LhjjreyjBxc2hy9",
  "key30": "5uh9vNKS5ZKCW8EyTFiqqHUKSKN3eAga3dryaxm69ZTU2bkpD9psiyJ7G7jmHjgTMQYYhqNamxPUwYYXovo1BHTS",
  "key31": "47RmYfRz3uCM3n4XWPybSnm3g5LutAn5YhdfMmPgJmk1wnb3H5LDAMyn1cUpgyviv2pCHwCueCok7zEoN77o5v9g",
  "key32": "5saprmnKvG6xRCunVKecYtwP34yinquhLbhyzU9Xf4ensQrwzC3H6HM6mtWCmpHrnLR5dCr8GkuAtPm9JBVBL3Uu",
  "key33": "7cnhPPmyrzgy8vSjTxPaXS9LqYiua7p4iqJXXgN7nStScTK1vTfNUw2MuobbrJzzNJUbyAgavmfqLDRZa5heC6o",
  "key34": "2at6XqDvJn1c76SA34Df34WUjEDxBdmxoVYpRpD6MCxdnJGsvW7SYy2kY78BJZn6SMHCRPyrHwccSsxJu9N7qFSZ",
  "key35": "AWob3kn9DUDrnjtQ8ejXBQz2LNewVNcwoirD96JkJVuXHo1f9NMA3EfYzccyBfH5gopuRUQSiTdjAstXfGEqDgi",
  "key36": "2qUDwjFeyBe2b6yj8xgjYw3ARvGN4goXBfiiYNXJarSNhVVBFfobT9WzAPT4uXET8Z78jn4kucVeX6u9r7HqxNmY"
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
