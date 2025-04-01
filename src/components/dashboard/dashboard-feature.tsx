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
    "5NrTX8bLd7nLpW48YrNgbYARMdZMUMZYfL8xPoHmL2VBXcNZVCRQuJj5ATQWfkAzfsr2DzV3eGrhykBcJAtvbUwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nigfbwyykui4cF3JsVR9GxqWzUJx26uFrMkHpfERmsSS4czk49jRZuyx6TU4ApkSCLGLwHyGqF9yqb8Xm1VFHQL",
  "key1": "2e8R8MWcRh2wA2cDPfvQDAfSsY1Q9ZKwmRytvQjri85urDJghQRe19oVB57eft4z7oMUsyZhGr4Qz2PHRcUJwPc4",
  "key2": "TmWJQKs1r9umGAmZSFYQz7ab39g4EQWGU1FUH8Km6Z4iqYoLkZ6tXKYgzStKHokXMu2KHLcrmvRts2CRr6ys6YP",
  "key3": "3jJaiyLYHknywwXFAamrM7E5kmJB2eFU46H551cLErSBsTRtY45bwkw6ojiNvB8YgHg7yGj47YWm5TZkD9fZ3q1H",
  "key4": "2VxoX1xAy9rwA2UR1Y3JrpiBMirDwvzQS1o9JiRQMpEEBC1Me2fagNCdyf2NjQ1k6DyMT3Wbt5SMZAXPqUXudVqf",
  "key5": "2NhacZ6kkJxMcUyuHXPZaRHfzb4BjNkqJPRdRAysdy7P9SAVAx6nyyqAek1moaUwpbwFb6enhHYvamSoZ2Hg9ATB",
  "key6": "2oxsSGZaMaPC6aQ1GTQfkmUjYVpjS4bUkw2YzwR1dCbJ7Vxs7ue5nBb8zK9VsQrGfE5cKG95ory3aeCis7diJouF",
  "key7": "5ErALi8xNdJytnaMW4tCd3cchBmf6SjauNzdQgupGU2EjYMyhtcSMy3WqhhvRFK1WZ3jaqvgu4TJx5mcZXYKZy6M",
  "key8": "5nb4k8ny7YLZhU8zBQh9nocGVPZo3JmtNfxH64bqHpUbofTvgyivHsm2gPiNk9K29k82y8B6tyJ7gvJEoh5qVnZL",
  "key9": "4YwMQ56iwLKMGHtq39D7z2wLWXuo24bZ9ja2CwTU73YRYGvYP3EA1vFTtnpFRr6GDgJy66pKBaUNGfLKPqm4WJCX",
  "key10": "2BnAzHjeh6szAxhpNC5diRE8391SvpxJkAzS2ccoUCzhsBPboh7eEDDRgSJgwjjAexpoYnq4bsE4qSUM6wnTL8CK",
  "key11": "2teAcmRGDySALoQxvQ7fziaujJDveTZfn74bEUvpnFD6VCB3JS94an6VfUhHA576go1nFhtP94nH8CysdwSR1N5t",
  "key12": "3jvXHEVcpsTeXD3kZe9o6jiCrfF1n3uivmocqEU27gfZeRkU9EiRzV3Qj71tW7iVnx9DBEy9DKQnGiH4gAgM9wNG",
  "key13": "2jge2tu45ofpdSQN46p1nfa6jqh7661MjkDCg5B5ucJZxrwWB9naQbLGtNTSM6V9xS2XgfoWDV95tRgUVvqdGTP4",
  "key14": "4DdjfQp17ni2WEJ78y4aSQuUMummCYcXZJm2J8mNr9tB8nUrEMvPMxGfze96K17mTYfpDvnA6AFJdnsnaA3EZBcW",
  "key15": "2HhuYDx2pqps2TEPzbD7HUokP8Pm2Mia6dPQqgbcSrrmjY29QRi8kqVFJWFPTGCyNBJ94Az61ZwZ2yg8wRjGWNY",
  "key16": "5PccY19RQ65bAKLm6LVqUSbRq51ugVyVkJnDVyg7UDGNNjLWYyVUR8csLNoXUZhYER3zATvjQnMAbSvF7jit6SCj",
  "key17": "2cEHYPVF81fwyPvnpwsY1Zcqv5egu3eJTFPCuTXDtp4eH3DNxr7HiXyD8rJaFeNFE1rtwunbBpJmbZwnKrrdqHgX",
  "key18": "2GZghHryDyAAaSfkoiUhSe9ppMiAJVvHRqgNWojD9dMRjE5bxH9nrkzDaEq8V9m1Cm5ZtzmPe6CxGWcdtwzvhE95",
  "key19": "5oDMkogmdUBGLKeaSiyCatGe7mhqobyQnm7kUoXPi28ux7D6vvAniLj9StCT7dLAfsYYydeFfQxSbJrkwCEbQaCA",
  "key20": "29ZoB1rsXcWTjPFmojzLhQVGsJ2W79fCBWzbuUiPFpHPHHG7a4U2vUYBUD5y3vm4bLXtfpPKanmk91hgFKtp1jfK",
  "key21": "23EbM6hSjeq29EVanVx8zC1UoxBMcGmYQbXCPczAR9Bwke59cig6GAzCV7LbSZRA29qek7YnBuXUgzGMWsrW4rUR",
  "key22": "yBQgbtbkVRoh68vbPfHSPqCP2tA11r8FUW4JirEsmTfEMg4hHxrEDWQHVrNQYhPtZGxFL5D8aAF8pbm8pXoJqX7",
  "key23": "3cKht2sMqTL2SruY1p2iRiRxZogHhWKAKRLEDP5YQoaSyfsfAyPCcowaFAvyKyBwnSz1BQX8HMzQLU8QmfAvn7EE",
  "key24": "2HUfneugc1uSY1kP5Gd2dgRxjoBxJPMFPxMGaHAS4xcDafBy68ohYWjkySZGY8pJgbCkmw34MU9vEv9RYDdXk2Hk",
  "key25": "5oaPpZQ2aMGu3NJbHCGc8vKGanw6E5RsK3SXzhVaity9dKVNNs383k7bTcH4uLMCSuohuiokATKo25akAe7jbi85",
  "key26": "45F5jk2eEnKEcXVxkkG7Q2LeXpHqcqm2gZXSUYz8674AM3kWY6i94fukkuemGmRYwV7dnFw3we4tnAZoiR8SggUR",
  "key27": "5mhFTEBFYyYzNq49TwGRPgrzkQiDJeNAYqymWxstGRLaEz9D4gEwtVSvtKVpRbQJNxx1GHb9cr5F7Cm2ztycQjHM",
  "key28": "539QXAL1gkB9zwB2QAkg2tWC66bQPdt16rParW496qnQytT41pz1qpdPZ6gAEAyKyLT2ujcn2Brpf89pvnkPRBrd",
  "key29": "5ZsoMuzSyf3VZxnEntBYotGXj7YP8bJ6gTDspaRrJ5n9tNEUVScAcP87gsyNF7LjqZea5YaeXVGZzkZ54JvT6bwy",
  "key30": "4HMfKx1c9ZFQKQNbZUM7ZQJifhiJzSr66x5U6XHhyevfCnFqUzDfSWTtDaXAoizq8Dg9qBj2qZj5AXJDj8uDcdv",
  "key31": "4mb3BkjMvkYhCb7t4tuYuDUi9vD7VAE8DXyfKBXPULfaoMN3HveBu5eV8NYh9NsKQocmkzexPEtYFDmRUM9MVjjP",
  "key32": "261D7oewkT7YYi1yP2jSavMJc1tufHpuCTmHUNkTLXB32R15JT7vNHHpA84t24E6bdMYucfY3NaivTZz2k54fXNj",
  "key33": "3xBWB8vWKhw5F2cAUKjf7DgAQdYR5DfZnpyXFvH2ptJSEHtqdfKgUEGNKumjvEJLCXsw9TwBbFZdy15YMr6J98od",
  "key34": "ZwupgDvNdfaT71uvA5oyCfJnk67dnHpPszgrmtkmBbHWAGrvoE3Ptph2AXHhLspQcbdHVJpLMyj7D5aYY58kZSb",
  "key35": "51G3jy8YdrSqRirB2iNd6mDXQMLAaat6P8w9vFPRWxna5B6ZRTZZLWZTFM59LpE7MnD66Jr9aqsJYpMNAgY64Hj3"
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
