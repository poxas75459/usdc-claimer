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
    "5zfXoTyTewBgZTtRRLET5yJFiEAWxphmPcXjoxfei7TsANboYyhgr7a9a5u5AQ6ajkybF8E9N8y3QXj1S4ZwiQDC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YNnh2DpMYwupGAH2ZB1mdTZesSXQDy55CRe6Dzi6RTWFnZw2hK6L4kYxFt7wMSXKzcT8MnCB6X9Y4WtwugRFvBq",
  "key1": "4e4BWPMf8q4qzt2iEo9kyZbwbTR2boFovAekbR2LbfbHeiodLRLzH6r3zkTesfXApdzJC3JjQzB4g1oSsaXvfXPN",
  "key2": "5dA4KoRvFHMtvsqA366VEZ542fbqzjzgh3tG9hwKMzPQk2vHvpagAfhPmQcSbRQniarF4noL8kGdvLXKbVYE4Uzk",
  "key3": "5wwsr6EaQnJTJzX7DwDtG49qShgtrNRum7CUP3TVGemTKgCYKuiinsSKefMX3y4moZjGvepGZyXZXvdrx3RdsaTn",
  "key4": "2818kYDeL2vazacnKwULPHkRNwg685BpyvfnFD73GAR6gRdQ9eviZFoC6RTdr5DTzRBeeCr317ZZpxHg8VK8n4gQ",
  "key5": "365gnY6AVRiia6RFxpQ7a3BQGkF2Pg9EUBNEh9FqE5wukmxcvEgNrVmS83KUveqwqu1RH2jdMiJ4nuQxj2pQmHxz",
  "key6": "oWMKK5DpBDn1SuH4qNHHfXmYYGtyFz9r4rTTc9arE5pavN1yV3bHvGFcVDqqEE6L7d6cS3Vg1uavAKeKFVxWWwU",
  "key7": "2ikFkEKTkuwyPfii7mYcjRkTjpxQJ12VrQcZ5qSiegPfGtaSr6cWY4Lp4FB9o366GUSt6UN7ZSZeyfRpu9spFKi4",
  "key8": "25uxuFGCE2nSM2EPs3QgXFJFvUruk6BMVMjAv8CTyzvLBg8grvUspqTV4NrWJzrzdeFsc1qKHRNTC8jCBWGDVG5P",
  "key9": "fB1g6h4iis2nJwE7pS5BeMfe7Q2V7MfE3gJmrnr5qTMMVCyFL9CjgVWCPMUd1EJFJJcMFXWiJcEp8gyqeqMhGG1",
  "key10": "3gGhquorJu86ir6byyFaHTUivXNBDSkXmZ6JZQNkGM27s7WnvKYZ9wBZ6JqPm7ssGLMbbw8wAtFyyJibk1gieGh",
  "key11": "5tFDpzBM1Nbr9j7GYoHge7iQEUNff4hjoouDG6kLrcAkda413dFzncVSb45XboNiHmWydaPAc3r6FUBCUMMGkftJ",
  "key12": "4p4PCgbrnUETeaLX72jqnxqGjzkdx1bQPL8VHTuhF9ohf5QTjGkRct7KPLgdUzg4ak6wEEFEJpRy114fq26mJxKa",
  "key13": "4HSkgzqfzmBQQ7w9YtfMrXhJREd1aLqE2BsiUNSaCrapa31xmijL8uR8LYenzb3usL2T5Nx5nm9Mvke7NDsDRoSM",
  "key14": "5XFZQdf5F8npt8hPkqyr2kYo13m7SE9asvf6EoM2gLk6xLKJNS7fUaKwXRoyYSt9r3xLPX7qfERQH3KatS84SPKD",
  "key15": "4i2s2J654ZYfMpsDYmwHcwcaXrvYWbPiG3ZRC2oRaSMxaqcdns2EVjaSegkTX6y6CawEevGZLj3Kt11h96VBdFAk",
  "key16": "4J1tQAHBNGP1wrb48ARD7p8v9GRXEdiPQK23mRAPgBwuxF3WM3s9KfCnxu8uBAWncouBaLfJzjeCZmqh65iR4wo7",
  "key17": "3HN4pr99qu4JwzR5SVVrMoXpFQbYydbU412u3pU8ZuuJKyCSnMBLv2L87Uj8nAib6ivcCukAxhzMq2VNTWKnQMCy",
  "key18": "ZNGWwSnYnLpFruD4wbZCTngSi4RbdPpSH3Rnfs3AGVyXjvfXxwb2M6mp18RaMFbwZ6TT55P86R8i3EZ5drMJQJ4",
  "key19": "jh6sUnsirEyAjMVrqKskhiwfQBZAYYLtEpQ8MFt3U586LFFvqwSZhJSPnLsUVsB6G5mTpGo2BC9UgcsXbxuRt6t",
  "key20": "ZkcmPYoVQc3LAB81yp29pxNf6X9QygUYhJmepNNm8TnjjTT5CL441mp8gogJmCFwgDyvLdenjZmtRK7iqyGsTpc",
  "key21": "2DeHDkbNzNoMXZVYdiKABepYa5kEzwFwG9YDWGFRSSzv8owyT9NtaDUj4k8vpqvnfVHnnG84J2wz6wdAe5FZjoE3",
  "key22": "41jdTGnpRUTW5AvnzFTf9R6Z8Cvdpebqawu9bGQuemvfXjHACMZ7aqM6k2Y64yu19EDNv5pyxumWq62SCvGPNBv1",
  "key23": "51rj7rSLY3r7pbCWP6jPSYQo8XDmkAQ3epDdYp1Mj3Xjn8VdubNh2QKVKdfsTGKWb2F4psafDqMrgfjfEfq9pahY",
  "key24": "2kMxX5Lb8Mz3fijT7Gaigd63hK5RegnhRGs3aZpU4sFmRw6JwY8xpZ1w9uuxFjBgDgYvUoxRJn2bQK94Saxj2atW",
  "key25": "3sdBDRQey2CgJfaPnmuyxP4xVhK9CZwdeBtYUWVXiQGpE874zRfrEE3MhVic29Hi52h2a6qRFHjbGyQRFTaaJ7kq",
  "key26": "6CwdzgvdJLgpSgxzYLj6uka61VZYidLXkRJo9Xy5LJ3Q7qT99JfDEtseoBBX4js4xFrWP8A7tcGRq8WiwhWsQuT",
  "key27": "2o7x5hiRZKmnFXCoZZePrir1WC5Vb4hUEKRv4g5msDuPHggRXZepkreJ1QVV3CDXtmxQFZt8bEzjNDDxjqhKNZ1a",
  "key28": "3UAYd6cGyMaEi6HmKdN8p447J3yXjateyJKEcDygrBnoTYJ8uYsse1Ygi7EzpcVzS1VcnJ8NnknrFnwNQ9K55kzu",
  "key29": "471wGRbn3n61vULJxfJuS1mwGJH73tsLZhUPNYZTMNcaLtzBamAFeMAFyWuNx3wk5ha4dR7RePckQiBbMrvj5D5X",
  "key30": "4oUHTBSY8rqiUwCwUpvNLbiZxcgdkEXcebfgVAJa3r73JtTuftFw2VuMaXp2JXVR8dsiUoxk6Hu1y1ijAk7KxpNo",
  "key31": "BfiDn6XvDtp4yza4LLYQnLZBJZffsmtEthacXZen3vdgva1LqAeirCJ6ZX9XYAxJaHfykH38q1qeTCSP8jwknK7",
  "key32": "3k1b6gKWGxLi53JNN9us39nbDiJBpGBRgKeW9unDeuDbm3mAVjrRbqA6zGDKF5B5TwuPWpJLWW8hPYu8g6fWKiHr",
  "key33": "NKxof89t6Q2QFTWj4PBaRRJFfjh9xSpECRKEWwdAqadvWXmdeqFhKGAoC3jPPMgmMxsp87o4mVGf8B8JYZGby4r"
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
