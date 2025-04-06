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
    "3iPRNscCLWr7FQVRPd5LhUv5AVxiwNjZRchJwnY7Y7Z43eE6LycEV5GuZi6cfDnxHoQtufjc78BYneHN6U2KCWbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sVa9JDxSoyvv9rjiHurrw4RGqiJUoD1EVXmWHW93qZ11iuFhHsXPH66w24mBjzSuwNR2kCHLawznGaVc71mjSh4",
  "key1": "32fYFXc3rkBDb9JKPNZd7LFh5Aw1UzpjnmLbBXqKLf3GYeA8qSXwcqg3ar9ZqWaU2g7qNAfLSz3wJuiKKZEXJsgU",
  "key2": "2qs8Q7YhnJ5EXn6DJuEC2Hq3Uo1vF2UQu2zAXd8kNxWTi8gXmTxca4mX7rVBRs3wD3crWt2XYDfJqiH1mxWHS38",
  "key3": "5NMFSYzh1q7QKzt349wsj6tFizjGKHhB4oJznzTvzGmKUP7u5sF3iwG52ESkpKonJ2516g4WrS3J6GJvmfrZ2wcr",
  "key4": "67nB86FeEbaUtuRnXKrbBZr3hy8vhqSRCqX6iurY3jbth2aNyYAv2zAFEJQGFTvopNecFhEH71jSw8cYHynBDgMw",
  "key5": "gPfmsQ5Q8dwpBUpZP3cEcDCge86uAD6wnxHuohFfHErZnY8KtTjkagZozXCBdqmtzXjnGcozpbX7cywknH2JrNf",
  "key6": "25v2cC9yBZyw5rsrt7FNk4jRj5mcLD7nRTsRHvwse3q6Qrhkogh4ukmdgUsFD32Y3bk6A1LPn5uxtKEtvG18dYW2",
  "key7": "2mh9oYiwUzsRWYNnW4esEfYRFdGngENov7mq5KAngm6SxSYhh3bkBWvP9GGGw9dtDxrzQYrKweyEsLpAyE8BYJhF",
  "key8": "4wDTRgLN23omrFEB2df4qD7uipFQhin6SRBfw1tWhwJnyjazdEji6KbBUQimK9AAyZxhMx918wPtRGeVkE9Qme7",
  "key9": "4CXNnREw77qvy7XACdnBbRe4wScACque5p3Bxkv3KjEiBUHCYcLUneDj6aQ4FiJap3nx9zNJY6MQLDGSk7pj6d31",
  "key10": "5NrbczC3QvDQpDQnuNQfkxuwyHWHSjsX1Fss8fvYJrWsoG3zoKKmtLHevSXs4pcx7AG3pDuamvMXXBcj4PsKrUCj",
  "key11": "5stUzsGUTr1aUCYZXe2KqsTnMTnf1aMLmNKAXkfm1a3Rekti3XDP8qjGqdXyHjXjPFzx7UGvZaeFLYPCJbKLqkd7",
  "key12": "4RjeZsrga5dbyVEYhF1T6U4cQY5s4eFvQVvrifap9PadcQL9sxBZtcMPjxqrro8DbYC7zZ85UPUTJSRXevujWu5g",
  "key13": "56YDTfsvc92vF85Ennz9zdmg8Kt4KFtmc6XuMxPh4gBti9sr1xxGvPHTNLrqC5JMudU1oANSjfrqP7tn9oqMJDNq",
  "key14": "4f38g3na7a1Fbvusdh66QTy169j1P5RocbagDCHegy6gVsYVA3Z5Djf9FdWtPK2DyQoCjjJri1xZ9iLkYcNXAVve",
  "key15": "25GNQNzSq4ahgvKZDRWwuBTHyzd8iew22oxkgn9YhqRws65P89abEygrJm3XunLJEhV4R5RGT3xtjM5QHJqL8Jzi",
  "key16": "4iaijzJrYYfVHFf9HSfUr4858o4XNXCTNxS8r1KcdVpBDmkC6bN3U4AEKedJYkyKQRXx6tvRqBjKpazvYSRCAALz",
  "key17": "4NBwNqPHptZyc3XBv9eyqaFHKzjhySp4jQv4EJ637bUHvJ42U1sNp2fEm2TUP8E2PLpXVTb3UycFMnj5sydjeBa2",
  "key18": "47Q69ZVt5HzALdYxhkExg89wrpPt1N8e7sjpEq2ZBvFrAF53xZ6jybFzGqNnFxc33tNSEfPyjpunDVkQmMY69Y5D",
  "key19": "31bSb2hq6sBB4FXUgLDnKU1dhjSRQ4q4pUvYz7L7qHK6rFG8SvLWEiK5RxyMTrjMP4PWq5JkkZm6P4W2Bfknm6JX",
  "key20": "3s6Jzy6MSpfsGrxSgyxpuipvepRxFL2WZteuXk24z1GDv6RzPYRNkmxS2QPK5XkoQVDvU3JGZq7NgfqCNvgx9xDa",
  "key21": "3LsoRxn772JGrfcg6ztw4n3AMpDPugK2thp6zBcGdRY4yvfzgqDLMhT4KG47XNaPTpRCARTKSTTtXgPjw4ZHxgNF",
  "key22": "2SG99NPAgBWW3G3Fcn1w3pSLbyGHmB9hAPfnzJh2BeJvaiP22MT12JTPKiAH4vxdjLAbXBfvNo2QHLnkRBAvH4cH",
  "key23": "65eqmZzUCNQYVRRjKm8ra5kxCSVp5C6zxufbCPHfXhDSWqpZAsz7WmZvd3nMLu9X8c96RFDzyQFHvzGgGQFYcuza",
  "key24": "51cfCHG8w2YnudHQpFp3qeh4NsQZ2VCQ6sdJg4MEYdATPQht3YQn3rvYHBUY6BU8mFFXD8WmxPQTWhdQ4czUxWvY",
  "key25": "Hj3yrWwbDtixPbyd6B3fuEkLLvnzfrhTAPfdqjkH19ozhjGrNmfdViTVBTrFycWGtXpxLnHYZnPBeCjFgnSV8X9",
  "key26": "5ouikASJkKNCjAB78dPbX3dB8BiuSD4EeBScdusce3waQWxmDosEaobeUEiPXGXaPS9yLuYce18SPV87sFUXCuRw",
  "key27": "2QaxYsWsbWgpVEFAAhinEkzLxC9oK9oNAyqF5NeZ2t9oVeqMTewHJ1uNSzXqEn4x9j6u7DG3EjMyrPVQtirLv2Gf",
  "key28": "4G5mL5i2Bfs1fDTwVN2pzSUE67w2kKDKKYRRMJknjVKNKE4qd2NVJ3d3UPmtBLdxEX5qsvVhvaKiwAAYrennyLtN",
  "key29": "3ZY8bREXgSFJuVossLHJsout1qRvTqgdWV1sYfDz6utT5FPHSTyA3yqAMfUk5YBeRg9HHFc2W4gzUHJJCcPzvbgT",
  "key30": "3xGKvTsPWs5AeVvitJeh81WWRZkmab98v4jNBVrc911F8yv2tyUmtKBkFpXFWsKGs2EbvYJkBSMksfbMP3ZoZnbs",
  "key31": "8KQvbTEN8yKvLTEP3BcrznVpyrsrasVqAZSLAE6yv4Lab4vWW2Fff2KTqdbcZsnSzdVZdG8RDMD8pMsX9MZTFZq",
  "key32": "4mAGpTvNGPGprBSVppEKyyaX3haDMbcWvqcE4VbfxEpbwKjwpnKtxG9bkkVNgUsNoGy6KogjgQVhYUNzpwfFFaf5",
  "key33": "652s7SL3vSMKWuU9hw6tM4yonbMhBBF3xEJrZj1mBPpm7X2gn5C6hDGL5taWdwiLw2WECfkH2REEZzeKtKdXS4Jp",
  "key34": "2p5QuUcKYu7YfZjVW9NfAfUV5WzXMjVTRAc4uz17K91ob34h9XioHCigKndVi4QV482QdaDXJ2Aha4dRmgwXvg4Y"
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
