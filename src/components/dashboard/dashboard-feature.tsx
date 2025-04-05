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
    "5FoWZ8FY8bbE6xkW9ejSBvqtqmarvmxdkeMRmSAcdkjY9WzyDhUMTLZAVMtbXzNCdr4eCGwANe9NR7v1JX2bVG6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bs8iEPfo58U6ZQiKUf2ZUWSB21zdG6S1fvf3BWG1orW5jeQdJq3vpcwTZbGdzaxdCCtRV8L24gEcJTvdw1V5ab1",
  "key1": "4fXiHh1NhPQ7LnZwxVMcxMyFKjbCAHXi2d49JahTFoLM3KRv9XGvLUVZ9zzmfMmUYup3qU7giXf2R1u3tRci4eG9",
  "key2": "uSkxkoVQ5ao1YMbrLbCZ7VYoAdbucHrk1wS2Cz7qfnfcT1vrc2XehHBFGFiHCEroEBQ4zwv4rVmcMjLjanqFonf",
  "key3": "65MkbKutHhciU5XAatx59zVeE3vZrQaQsec3U6MoRNym3oLrZUuxCC3ifThkG7y2uzQJmopzmWbkfB8iMPecgFyt",
  "key4": "5N1ifg2A7tEXSUjKg657xV6fB7AKNdQET4vVDDHhFPHvgun3r47MSVDrcnqdGwyi9W629D6EkjQy6V4vcfNGb85p",
  "key5": "2rvbi7gM5rogKi8prCh9wKcBxbt357DvEKyLYNHehjEafaSNnAtcTuMVNoKhoeDcVBQWdxscRLYBem6V6h4VUew5",
  "key6": "534ijSbzowBQAJ9twc37kmqHKP6h79bm1Z68BjGomemKujJHmT8v6hR2tdjded2SW1BuKA3pEmryrhtk6KN1SWFz",
  "key7": "2jHXH36NHzXLUzkufwm3hkZSB3a9eiZgxoqYMrErkcTgHSK2nfyQNbETQqo57Fv3gbeHRsVVJSzfBSGbTJYgX6MB",
  "key8": "4aCxiSaQwQSXw5ybQfKR2Z7gyC7gWHC487hw8p37CwkdgJfMcNZdfViJnYDaiP69sCf7qm2Vvwi36gD5c3msJjzj",
  "key9": "4dVrVfGxnqdov3H3XaLbdQ2LDPk9vCriWfvqFPwbiX9Brrh2JCQdHECUiF1AFTghaGc5VA7aom3zMEqxabRm5on6",
  "key10": "a32NvShPRQu6Y2bwpGaT94bVbAyvSWmeTvCMneARwVLZLaw2Kcoxo4yBoQZKZgvDW5DRiY7x9RK6ZcEsEN59uPA",
  "key11": "5p5kGtw8BhRTd4tm7YuQtHgmjjYmQ5S1h5C83wi7iEjkCQUn2FxNahUMc16NWzAMwHsL2SwYqAZew4psFM5Tw5HY",
  "key12": "4L96oqBdaBbbRTXjkJUNqpxieCDQc8NoDAkzHV7pCq4xXtgpmQqx4DXUf6hcCcjGsrMERuHmg26Rzbq7Y7hXLKoP",
  "key13": "3SMXm62J2M4CpiQGKUFYNmm6SRUUmGUycu4ovsP3P2pt14CA7awCjup8vbETZZadPJg4iZKCmrTEy3PLdF7vr4ya",
  "key14": "44mYvYxB4NtTZ7jSmwGjrB3JTiHBCfWQdYS5SHqnpu48zQa7MqvPztVGdFn2gDyFsjjxnBCYzWZfS8LZTeq1k7Ka",
  "key15": "5GiByFXmjptfT1Atkfb5vJsowitkXa3qPFFJKTZJkkh2GzaUTa2qLV5TcLtZuitogXG81PjvfEaG5TVQ4BMXejBP",
  "key16": "oTCCU4WVafLcFNvB4wAzC96QERXzLYsknfjT2YZYDoyWMvZshzwehsseikV62Km7ERQTS3ecdYDwZjJN7AqRb1w",
  "key17": "5HR3LJGjDasSMAjtnugFDLxShP44WAKnReKbcYz5Bzo4ZZgiAvTD5iRs64uJaw77ZCxiuV3n3iisJeB2wqZ6sG52",
  "key18": "2VXvHNUvxho6dVmtCDngfksrH476LG8Vr7cGXXUQ6HQWL9HeTEPMXui5pRNhHzhmeFJcxduowzYRjSZ4tdixtimw",
  "key19": "4ohQiSDZtArchb9HZ6ntQn5Fu9hPbRWiTwRtQAouCfxHVv1EKDnWRVsq8yu7Y5j6jJLA6MY4XEvimTxcAzurLUet",
  "key20": "2CQcJMgK5t2B7eTZ3wtVPAy6Mtyd4Maoj5oxXbFXXmz9UzLY1YhCvdYWoMAcKq9PUYnGLcWHCjKMcE5Va9uJjmBJ",
  "key21": "62Vx2bFkKzijD6xGUqmn2QS1TDRdSCXrkj6kLuuygfQAgRpHb1cWW996Nxgo4FtXzPnSgdWE2Y5PsADtBZPfNsbU",
  "key22": "xhscZL1ELMYq419uqa6sVNgW2EQhiCn1LamLYpsTJ3mj8eRyrPGF8JFnwdKk6JxQQyFX25jAWV3zYscYsG4EZ8K",
  "key23": "2CjQRGygXUQwUP9Tq9ukLRYhRKmDUC3qrbjipRT9QLBkgd4QQQB5rTQiQQBLrmjGmq6EydyM7txTPHsnX6T782PK",
  "key24": "2sW4xFtMXU4rjwf4AmAPUD5fktiAyGmAfK3vNhR4px5HXCMxMsKZC3QrXRGojyNKpw1tjLJQDBDaAi5cuqNmU9xP",
  "key25": "5NmALGUodQxSsje5cN2G5rDv6beyzyfp7NjKJQ8Q9Tq4BSzp7t4MXRgXhmfxbe9Uj4KwJY1S7rnD3JruLqLUMWtz",
  "key26": "HfMyvCiEBr2Lt4ezx7seJa3Rmpy1a5K4xAjXigasQJ7jVf8ZNncn455jTWEWCtR5tiLsCfCbnJUhXqa6LsxM2oR",
  "key27": "3mJw4GV9M6CsBF18CHLBoUdZPNTvfey2rkeie5fUUk15rBwF9PEqatg5DU2SJ62gVo8h1nN5kqGw2PabPsmyFGsz",
  "key28": "57V9QPCpHbs53z6EQsFyt6nS5p5Ju6NvZTMhYTHy8FF5ohKvkr97QVXzJab1R11NQX8VPoJ7zVLVsn7kKpsUzArP",
  "key29": "m7YasiSJLLeHmXxDxCmRyyZQXVUNAmxFwaAqa2N5yAWDuV2VRZSCgJGjzLksDfrQ1UHYYRTvZPmN34eDhjKsxtN",
  "key30": "3fu6GMaFppDP4VSnjEz1S2VXSJkujAszDmW18UWCR38ecdEEgpNQuQkmTF3VSx75HcG1o2skqbCBHdS4VHdQCGvH",
  "key31": "2surPXNe67dNHr8uvPTexoY6hEuYaJFB9c8iVWeA8gWHKPJ7ciSrcczn2zQykUfbk2fB3ajdSrTcbwBRm3zWhnso",
  "key32": "2BgxSkAFWPE6YWK51ZRw2wKguSZRMksWLeu7ZDEaKKVhrDEuCu3rtwApFCfN7ZFDiC8f673Yu4gZr5M62gm61MVp",
  "key33": "4r6YDMyBbrYdk3NS3BFZiAEs7zXneBRtk7NPTd6yuyKzweP1sNc7JB39MG2Bkcvk276PzkhyonxACGuusYAqsLcx",
  "key34": "66VMNu84VAnXSHVzgEEWQtrfrp8QeVt8SkimeT1D3w4PtoB2d2wjwhQQgrJ5BpumG6xm8nAxzMRvkPREDRasFWfj",
  "key35": "2ro8PrtZjSmqdS59qw2aN6iXgiHFZ862vtDU1Rpi1fNvUu9idbfZZgQvkabJk7VikT9QJ3r9ymeb3qFpYCS5qokC",
  "key36": "wHAJFofyaNSVZPyVxJXiSkfHJtCvf2WLkUoQUkGwCCKSPfE4eXyMB187pWeJFxWJCMnVCRDGwDRoY2Hj6UXVXBw",
  "key37": "K6er57sTFSBgUq4iJe7QBY4F2BS9WDxgUNFyAGHjVepLQj1J8DK3MEHcxzbXrPj1DxcuATvM9m7qwRhrrqteJ2m",
  "key38": "2myL4h3WdwaSJBy7wzjYw2qVjmAEdg5CVs7C4SnUF5P9JYPEzTjqdJjGbSj2NPFGKGgYARKShuK4pW7YodwoaaJZ",
  "key39": "4UWYtWjuqmcQgoi8Gpp2Q6sdCx56ssWJtWujQBwRHpGnfdCq45H7nS2ZTxhkyQHrMfU8kQjaTq4YU2UTbo82K1Zc",
  "key40": "53aCgsn9XGxTdQ4wqncD44HDqi3oWCNeydgc8GmTuEWXycAYQC5F96943YSLKV8mN7fctBBDSwiSCNiiXVPBgUWa",
  "key41": "2xCmPZW3NRWqGs8ezF1QygcJ3rTMqxNLDXjBBPfzP55DyJ7MTwKgUFWagHmRmfkWBLwuNu261fmwHEKi8aQXQjzW",
  "key42": "5N2YeUquGL5TQkVmwCewbvhqNWPQctQgZuypbxcsCy8jFZLz4DSTjDMyydbLnBpXHJsSFUZdiK12ZFFZBSZ65qjR"
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
