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
    "3DxaQChuhzmGgAK68YXfpMB1wYU91ZsbEBJwxcaqSr2LdhjyDmgNhYtU9PgdXLoENPYKkgYwRrpQ3dTc8jAkmuUj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8moTd3pByncBpWGgGUPNVpuqanpQ1AUWgAmx6B8rtmxhWzL7evjPwHz3PE5BYH2kAQK4rDZpG1S3egUH1C4Fk95",
  "key1": "5y3awbHAJ8FyDJrHSPUoaYzBpWvYHMZa63j9GMxLs4ez5yQ9zQLEd8urGoJYd8bLx3NsL2DTBQaQqy6tKSKSgZSM",
  "key2": "5C34RWHyYabs8PKHsLLbRXpLf5R4uTwGbBTYraK8iWEycbDosCkfRJGUHwChUTN9ZzV1DRFKQEboXAfzC7rPnSDC",
  "key3": "bMcxNuusjVrbw2wuRnPUggc8pb4NB3gLFgU1yzrWrP4L4LWnCaYP5P463dJKhHppeb3ssXVvwTWQwwfH8WpaL8o",
  "key4": "YPanBaf5jG3ezPZ3RueRoibRcPxEeknCcMD9h1RL2VK9gC4EYnxC1Ro3oixqDC5VZHuf6kRnxJMGroDhHen7WHq",
  "key5": "3A5X5yJZVgchydUxrnZJvN2jMGLwEeFGG46H5ZypRT4pLfhTHQpqSHyvQswAQhmfK67qggibSWo8evpXWrHPjdHs",
  "key6": "29oiHGiNdigubyzBWR3E42HvsFYPgqSs3wqDGGeyq5R2XG9CHJ5iw5sF1R1dsB6FQFVFWP7SfCC1EumYyNJqR5VC",
  "key7": "2PtjZtXV8NThcpZPkmNn5ebvQvWyRhWi8DV4Ks6r4ZvmTbHYbWTDQtH5ySsiNQwaJb8JuCom5uUUxnR3N26aDU9A",
  "key8": "2sdrGXd71cHtNy9N1vpMw9qDXD3CwYQKA3cKGqX62gyhBDY6fGysmbS97jkhA7Bgq4xyS77XhfrLs3Pr34Xt7Fxn",
  "key9": "39tkpeEy8QWpN6dVpVzjrhxZhnjCFF1LtMftDPQtoFQzKAAR8T8yaCnGSAD4Spb8ZHFQPEQ8FC3BNsRzMrSrikf2",
  "key10": "4Gptn6g3tNnMALZdT4hioSgp26hJVDuFqsgwKfaRzZNX3tSfuTNvwdTjrJRsr8LaLxTELRySVGwxVMiccrqBa1CE",
  "key11": "2mFMjnwmmZYL4apsSTkEQnU64jhGRKGbYkSuSRFz1K7VsBKYpZU9a8YwJTaVPobZ7ShxuJmqPkFeUHsuU5ga5SsT",
  "key12": "2ynMwe27vuFSFXXBCrPH1tXAZkjFJiQJCUKjFMiv4iTq7bWPtrhSY5B85Q3mxccHAQVsGxw7RaSZKY54ppRHGeRL",
  "key13": "5u1kVmsdR9Cd85KJ1ZNykTGbPv76mKA53bMp2W2s4zrZj1mpWxQiFcmn1XfxEfi2uq8JVVmx5NHq1vzF7gVSFSEx",
  "key14": "39k5pAamDgbX9r6QU84KjBPyZ3eQR7Suj3g4hysP6AkyEToKJTUvCciSEmpCRVFKnboTpkPUSjRyq7SQh5RPQoZK",
  "key15": "83CSJHejTJ2JDTPrbxyS1rp2ZVXuJT4qA9bAjUV3wDEv5rrthEqUaYmcMw3nKeRdN52gBAWnjcYuzK4nfozGged",
  "key16": "4owQtJneFoT1nFUb6kqAHd3JrGmQZ1vnYJrK5YLKfrge45R81MJ7boGG47qsvdwGoxh595SvmxEWxHakYcbxP5gW",
  "key17": "5CARMfNgDC1qwTPZj9fR7bty46wzS4bpugnDbwZAzCFZ8DeE2t6YDP3rxGViArGpLGDSydPdwMqNbcS4CToyEC6X",
  "key18": "JnEjwBx1HTxFSXRRMmTzaUfTYBaHPGmKrdagnQmPrEvWYL9j5inpYckCHMkhZ8VQ7Vtef5sa84gggmMtvU6xkuX",
  "key19": "BdLtbtMDprD6JsrEcpV2mqMbrYUyNTyY9KzrDzonW8SByufGezavqGpcCkNf7PMKKBB51jR4JrJBqbHtPk6ZWdT",
  "key20": "2NiEENgABs95rAEoQ5cNcbEa8WDcfQUkGMN2NASyc5wZfFymCWgoKZMfAvbfcQ5B3uvzYe4oLRrEJywbfRUdQnUh",
  "key21": "5uzMNYVYeQQvKba2r8zMiNzACQkih3qfVFca4vtXLehWnBA9nB7UwzkDELrow1nVxd5iK2zStg7etqx11Ku1P7oC",
  "key22": "h1vkyiTdSZcizYM5zE8uycGSQiHHuXU3U9VoQTDc54umQAyiNzwywKT1NdNhDnQMojYqy5FKyLtzd8mgjhRKGpZ",
  "key23": "RR7sDGWLRrMoe9XTUwph3pBj1Ubq1JjRe2rUZo3ZcNs9xD6pcBGsXHUGVcvc6MEeU2PdKrAyfY5sZebpHF6p44E",
  "key24": "TiC9ieZaaSpco8ENQsMCrVoFQyy9y9CCnfHMFr3KeaKupDfVqWs4EF6ZVCgemgDV5EvBvs9PXYzqzQAkgJ2FJqF",
  "key25": "4LddbFWbwNofJD6NjsxrJvQMqjjFTCxvRE2QtQ4ocSYxkKZPHkNqXjSeX2UWYQ51utnXKtfS388235uCqZVtVgyr",
  "key26": "2Bdwe6c7pQqUoAeoiYq7y2DaPXVVDTQnSUNvwvZ9gfPsePZNW74pTve4Gmw3gcbeFK3LTvEgx5DtvPYhNqomZPf6",
  "key27": "xj5qBpPsKUt1hEbMQs5mdektPNqan2Es5otjC5bg2ysYHffsywCnAmooTw7Lmdv2sTH5voueU7Ltka1pzc2uPGo",
  "key28": "ffffP5Q1uJuyJN3SnQtyMJubh2o7gxgnJwvSEPxSNBcMKvoj23QJk2Z9deNZVACzwhQinQQs4shvjMnpf8WivA9",
  "key29": "3CuVqCYr3nPwKXFjQnqGqR47Xfdh6oPZBbXYsaViJxpjsH1f6Q3QGJgSHmpFbuF4gwBGhtsP2Xpj9XMo8Eadzoqj",
  "key30": "67FM1yjTeaHyN9w1orLzKWjfKv1hLhYZdmh4ttR4AhRXLPmyPojgFzYA7SmpSFheC8QNxX5jYwpG4rwV4dL9dzC4",
  "key31": "CNeZDdttpLmqmb3QZh5yeZe9g23YwKL4KhURPxrAZA1TZ5ay55MouBCzULEppePSeLwFP3N5pD8Afw26u2ajSK2"
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
