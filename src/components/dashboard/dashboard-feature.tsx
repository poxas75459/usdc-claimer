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
    "3r51gCv36UzxDQrGckKWqqp2Xp3KcGDfy9dDKmae6BnmJb9L3jqktBMzfRURay6f3qUUma782bWCVddousqazc9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "v6kHqvXAzJv16Q7xacQvWU6aQ122rUrjME9yvZhM9EMjn9ko874h6XVntyALTq1x9eBSuNQazettramErfGhrM8",
  "key1": "4cT2BK2Qjbny7KJ1cjQ2fJHixbRBgP6kSt8mtvBcqyNAnJxSd5TmmUszH7vrwJyZVrRsRvjNEWEW2bptNKH2cFSx",
  "key2": "5gELxt3WSiUbFY6c3SVKsZt7CE7oSHsJbnAYAnoeBtUKDvT1ThdmW5rrnrZJZV17sf4prCrNbB71RMN2pXAgebwK",
  "key3": "39DZzTVR4fncErW9HAYXnyaqkjAu58PjJQLpcqbiJXgqEzC3jRbYZ2iLwBURdRK9vyo61np2STPwYamMbhffBx3v",
  "key4": "BXzMgRcdE8JTotGSpad3ZSd3Qj5wVmu4iuA6PnVgsoCzakv2whyGKLC8GGP1s1J1btr5GrdxDHLktisjXsHmb2b",
  "key5": "4CkTCU2Xa8SyMq6Qy3GqJL2uRRpPBjSxXmY78Jo56AZCjzQka9X13S7CuCtGUtrUHeCKt2LoFvQVj5RAgZU92n1K",
  "key6": "QyxCDvHzNGP5bsA3HZq8bH88416AKmr8RhSFeceTVGQ86rPoQPFoFYBkE76RkrrfyuMTFS9EN59dLC2BQzWxFjA",
  "key7": "5bxPonkSUzzdcLkFe7kSUewu2rM9GkVByQW8hv38QrhzSDaXhHf5LbUUw3TQU4P7UWh1RseLGumzoeqdqh7wKTiV",
  "key8": "2RgS4E4mFtTkqhD3y94aidk2q4RhwarGwZoCoiJ3AhS9AsCJPQYBZ8uZ4mjE39g4anpvACXDGH59UU2L62jqKYes",
  "key9": "5kqRUhv6S3LC5gNqw8ytN1L835kWpG25tpdvJ6W9eojtd2hv5o13e6uy77a3ijWMfrkve433bxSWdskuw742HC3k",
  "key10": "iWFynB5xn28EF3tt235Rkf71X97aNXoUCXWu6LCfZmFHJv9dFdv2ReonBsveUPMgCKHMyi8JGTxGmz1rr1jDURN",
  "key11": "3idF1dmqvYcgZ7fexwhME8NsRXGWtQiXK8nHgEiCqvmSmyEhD58qazbXLDiQGojtb8EiAWPUHhuLe7u4gFSAGdky",
  "key12": "3hohk6WAKERRPDF42tek8anjxdzKPg94hR6zPwy6CGuPJxwFfTMniicRPZvekVxG3uJR5nGMMiuKqiKbH3RKh7p4",
  "key13": "2J7i9bqkpgQS55CvkcjsXLj3p5fUZhi6Uux2HcKSG7ZHUo8cpDcXeRh9VAg3dFkHLHC5XSRbN58wdd3YnTiCLCZz",
  "key14": "4LVaw5UTCSynWRi32j1Tn2djNJxxdyWn6oWcAyDFbXWDgiRbAjU4D89YUjvwUo9UudDcNL1hjk7SpEP9dw17XDj7",
  "key15": "2WtGD4q1WTRxFWuBksbsExgHwbLu6y6jmQCHC8BUpULvmVs7oGRZmU5Rdy4iQ4gYEc6o6XpuaECM2KRxxenUJDb6",
  "key16": "5ws1kVr3fZUcqnTnEFRyE8WEbQ3RdFyfcrV9xZFyGGvoYY9mpk8AxWFeMoRvq46JXYFtbfKWJ2P6R9mgucUYix6N",
  "key17": "4dmmMwtfw99Xe44cdMrPKyFAYHuvsPx4Ab3JFaiowvFhcLZ6e5FmPFT72Q1gy9RT5BAZF47SdeALuj4gK6iFF1iT",
  "key18": "5eUoXQkMVS1nkzWTpjXHqVAettxS71d4u62FVDmpMae88n8Yxumemvm2vrjq2WdDmtMkFuxbeERwUm4czGSMus81",
  "key19": "4Rtp9WBZHknH2preLfqn5tQ3Rc3R4WkStVPkQgcsBGsgEp22rA3h5VTcU6onmdXu3Pi3dxCUTest8KKd8GSqLMom",
  "key20": "3NkPsPTNVYokdXqbi7189UBkZdfyMyYv7R9gGuR8fYBavLKzztzAgFiUeJ23fuVLH21A7dC8BWEaJjA7rsW7BS27",
  "key21": "3wNFHDJpbGN2pcuG5Pgya2VUEY9zdMTQA8XwFhNVxCnGgSVSSqUDVNMkBoUdtGxyL3BrooBhcuaJaDHjR16PumVP",
  "key22": "333uDiJ1q9Dfc9wdv4aW7VRuxrfDn6LX7T8R92Ro6M55wnhV3Byu5LckVtkxdABZuScSK8xojFtbaFRGmPRXZ1aQ",
  "key23": "kg5H2FbJHmEQQGm7dv3gEpN1Mn1EGdvTPKerGk1TdWfkD7rT3PhSyh15X77ihCLJ4LAr9QPzAJWvSSJHG6XDBjJ",
  "key24": "4Rj9oEnEbY3iRe4TDbop27eGb7kLAmqUaspYrHXg8cW2R7jDMQaHA1MdUcEBVQsYyu5QVVoYTBcnY6qGLtaCmZNx",
  "key25": "2CcmXh19iRp1MXxRMnGUrX7zqRB8X65tGBRyfdpwvpmwWFcth7JKeLTHdaCjSCNjyzHAjuBbmdBxBBxPSUfmQC8v",
  "key26": "xdbHXCSGWNvowL1AavMMNDmd59HRRTuYNi19us7mTEBK3Ca3PAF4CiqgThPu5E7zNEG5vZxUKGcVPkaUwJKmgKp",
  "key27": "3fLKtLymcZUcTCDMBzdbFxatXu6n5TVCa6XTu9Rd94riPkDVD23xcV6wL8gpKXbt8eakNyvNPz2oyueDH4JvY8dQ",
  "key28": "3ywtbsVNNcYDTzer6ANNCrE9ZArqLhiBNAuGkM1a8TacqD8ruMebD2MFXNE5kQzmDoVe1JZcNUURGADAGLFp81p6",
  "key29": "5PUYrEbgLYpsD1SjK7eaNqCjRispZHzjjYe4pPMiF28ub26qCGGKF7PrbE1iJp7KnAPV3E62BKCUc9wcZCboUqYt",
  "key30": "65epaS1SSQxV44Swe3zojguyxseoWEo6tH448YVED2CZjTwJKVF6uimzGQYgr6SM6W7Q8j71tPRZDupHc9X9A89F",
  "key31": "7gE2otZNdJJbwreH7CTi5dXy8C6mReTvEowkJkfg3n4jEtuBMrymxLNXV3uMWjUA8hJ4Qhj8frDm1KJVEisvcvz",
  "key32": "4tRNfs3WPg6pkBvZi7fpC1M5RyouUzzVe3YEJNc2x1ebxTH1E2iGXLzDndZT1graAzC3KmG7KAf2FmWPQWhWWVRj",
  "key33": "3bSbE5wEhGLTqrupYypwqjeYPepjDN9XwSB7vk7CFDujVK1M9BBe4YFnVJjqoRwAS3BXpusDBEM9W9R9HKqsijuN",
  "key34": "2VxjinsMCPFFtoEKhoCMQUb8Fv4v2Gr25FvLGg8bDzR7zjsWUZ1GojnrPy7XPPLzD8iN38HYG2titTfwQfCCsDMN",
  "key35": "u2rCZoTuKcUAniS6WRoggVMT4MDb7GRf9TxgrKqHgvJsaqUiRR4bWqUQy7xpM7spocaTdmbpTtUvsS1GN2fSmkn",
  "key36": "4RYak6KFKLsDYqQvKnkkJ7uC7UC2RkmX8z9PCMtFEsoquUhDiF4rLYcTgzYmZZtGxnZjWneikndBnKYwGaqvH8zb"
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
