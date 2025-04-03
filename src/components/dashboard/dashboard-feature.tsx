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
    "DQMT6KbPSxNvMTGDbtYYGj8JBkANtxDzrF4j8tBtK4P7B95F53zSYLvAYJaamPYkuqfUgRJ9ys33CVrajLVcDvr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fL2g61ohpB5PJKxG81QAeCJChS9cuGPrrSjd9Exjyz61T4aeVQnBWGfDkwcGWaZwsY1ytLnhAkpijxxc5qUveUx",
  "key1": "35ujGTpZom3zscTQi9di4pYQMrWDV9bF18i1nXdUM8oXFN1haXnaqAL34a1dYzRwAb4hkpY8pQsRN4eQSVWyWB3P",
  "key2": "4aS2QGaETpTdUGw3eGefL9Eo1JaeYFcPjw73FwiZKYfG2JaMswfFFxX3ToZSPrDexsyhJYaj76TazHsvvUJBpwVC",
  "key3": "3EB16WvGKU8Q1eSP9M7eNLxSA7YWzAjHmBXfrtw6iDexQN4nnioLeissLHeqgxrohBiikP99aWpNubi1YKxWJD5i",
  "key4": "597akaTgbjq7gvMbmfD4cwe8Vop7KkWtRayrBueNC1AkLpFXokecuzStPRW8r8dMesYk7SorkxCp4YM3cav2n1q",
  "key5": "4JBUVRwKd55cDrnxosszts4bLXdjb8M6rV3HkRw89Rbhujjyjm4Ahvyakoqrgdu61JawoPnegp5nVuqwNnotqjpY",
  "key6": "4XRPkX1aoT14FFoVv652vrD4Z9zVisMqLuZn9H2nqbnrbGerUVzbf5LiDzd8FxX85nuyFKTXsEbhVdUVRD2UeTb",
  "key7": "4sNtfNwwKAsEd1kCZ8uU9hHAwx3Cn5ZBFgfvqzqGe1JQPM7sxfvrA6LSuVQXtNtR7AeGDzDCptCLW3xK7Zo3UK5z",
  "key8": "5Z9dZcXzzBVmv2gXZ51wKLiV8wwBLHeVCBTT9Zhr8A2N8M2CFAPScJ953oMpJqhvqmXCW2S1D51iZn47HgtVqyEc",
  "key9": "32sghC6R4XqbhEnzxreiV91mVjTH13uvEBBHLEnv2Q6WKjkNdYQbCqBWV6xwx5ZAn54ZtNEjjD6NEG8Pp4GrpRsS",
  "key10": "55yCaUrrbpnt91qFWc1mT7Sbme8rd1bCPTwTKuynuqJXeWQdbYDA4ocBEygGvEbbd3qBkq9QuUynm9tXPpoQUFeJ",
  "key11": "53da1tXnr7Lzm81qQwsprjoDWb2mT4RtFTqYdcqjQAhRAs5PJVtsH8xqp4TYxE44gfTFoz7Kg2VSb8upD7YHCUtU",
  "key12": "5PCPQrHiAuaXDFgnavV6UY6KPiieXjvhzu352965QeRBqLGZGG77h76e2t9zmicR1Yc1X5vDfBdaH8HcfpzLjcTE",
  "key13": "4A6Nt8k65SSgCaLvptJJrrvUJrcH2BU9NJD2MMKpkrfsdUVd8VwN3Bgy9jamWMRCddvBrp7fkwwiTf9ZaxbYt2UU",
  "key14": "3hangosPfVG9PnfEEJCyrbYgkmGC6T8pxcMtcZA7ae8jbH2XqhugYPTzC3K2RrkPD5APE8L1yv48P7LpQYQ3J4WL",
  "key15": "4S6qMhM1YMUznNgWosZGzzX95iEPdtQGZC37p5JcdQE44VPAJqEK6vjARGPSuMSV4f8X95E5RNRJE67AuPkrJgHn",
  "key16": "xKjZRV4wRQv4UWqfQbeUZ54VDJwYfCFzk2ZP8D84w4vsPC6ZLM5e2z3KjY1Nsnic4C9Ck6hzKPL3cjXM9XDhKB7",
  "key17": "2fHD6KqdZfh5kxdc7ouLwWQnkEwhfPk1cbR7du4XHE7dm2uiHTzAtGAhvvv9Zswko5f5gQwpswGs18pktkzSWNUK",
  "key18": "2FL8Jha5AKisewtWoaw1Zz1BrjoNUPrVYWYYVY384S9wGcH6mp7LrmpKst2dAhgZAri5bXswCWLyrytUT6ppzWTr",
  "key19": "3wAojEHk92VzpWWYkj23GJeWNoUhzeGG4PaNAnvCrLuR7UTsdm9bn9ob3CpGRrMWSVsnidhcioUNjxQqrbzZLe6Q",
  "key20": "4aoLhEq8miDgygbBSkeV7nww47dDpYUHXgeiU8vVvMxW6b6FoFkUEuDTafhYSG9ganDBiu6aiKfnawV6WPCdUGK7",
  "key21": "3Yw8BPprf3ZzyzZmoz54X4HpULuGLkLnTLtrJFWV3yygNBbTQWfhh2VoP9PhpAHSEYt5JheEFgoWGWoFDvusBiP8",
  "key22": "4KDn4h7yZbe8Ah7LNeDbUnAMbCs9L85tAYp1k6XYB7JKiBced83WMxWDn5H3H4iw1emVSeLAEE57Q3aGr2ND61qU",
  "key23": "4Yz5M59rLQFM2RF24M9wVcQDRPKaoZVUQGm9LS97akSNZZ8mXWo73XbemnA8rp4nEPftPsC7rVQ8Tgy3pNyFCw2r",
  "key24": "23dSZPX5btBbV3Dq3eXXP1SsEnwXm9snsq8GwFdkvQ4qLtj2NNnx7akTyRC8q5dVQYSpTKhY595kmskinnZ3CAQS",
  "key25": "3UGZZ8orABFG99FmeJkKt9QwGgDHS9g7KSnUJV5ewN1ghx3eXtUT8cFof948q1GCoyxWBLYHk8M8ZxbHr3w1UuCC",
  "key26": "2Y2qREbaoWhvduFPWVA5kFpCR95SrkrQXPsjw7KdmYARcx8portaUoJ7Ngr35TypMJ3scbsdccEX1oTXrJ2M82dt",
  "key27": "3nwSATLvL92SiQMYCEUydnLY4sALfnaYaatCEEAUwrVAD9jw7X7BMsehGx5G3gHk5SKdZy6CVX17uRMiiZJiFsWG",
  "key28": "2ZfxCErotJvdUeKSqw7udwVuZ5DZp2tj8J7Y6aGPaRzdXWNxo3udyKYhjfL1MxpmB3bsjpg9CSkDtGRj2VAwmGXS",
  "key29": "4U6VW4UaFEanKpLyrM3nsTnXLDFh1VMqTbANpS1s23N57ieAX8fhAJoW1jnkUcKGL32k3JKPyM7fypkezcSzMEAh",
  "key30": "2YQu4CgLPhhmVSVd7TFTugq6RqrHQCPBSq6iQP655Nr387E5ZqrtAkLUua6V7aHvjErm9f3TvbyG7qbQFQ9uVbgW"
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
