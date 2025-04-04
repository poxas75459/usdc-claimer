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
    "4ohTb4BhzbnEffaJnMrim1urzKaRKbo1wdvYBkhXKaK9u7dSP2A6TekgPGYptM85B6tNPQAeLxK6cnjZZGRWP4nC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yKdaxbJUoxnxyT3NkGQwAEMks1WVfUV18ti9UE6QWaWSfxnAb4uYHLdkSeaLJc12EoF7tjVT1ycHHi4U5iuaYT4",
  "key1": "3rZwkantYUuTLufwBcNskuTgvmJfRUkbhPBu63dUftMhQPhRddUJkvL6XsSi3dUAUTdFZKqaDG5uK9jSUHn92cyr",
  "key2": "2efzXpAy2NZRuCwbRfZ9ChJnDHpRKNHpLdmmfodHUqajsiYR1d8NdKZpLHneAag6BLjf27BZEnr3W3FGZzDKDPK9",
  "key3": "A4i1KszPpsYE9HcZq7XYXj6JhfFeC4J7HSHSdtZLzW3UUDe7cVYEhqjGByfrCTkNDCD97H3X594iev7hKqUfiGG",
  "key4": "5V2EF7N9ZYPWr7EGcGXVAzFGFbXov9rjex54jDVxBtn7fRDAe8NSegqfAwoJNxJK12nnZqTkov1kPzExMYE6jWoW",
  "key5": "46pDPqFbMYYSssem7nZ3kEQDSnrXTVuuheqeK1hat26bo6g2Avvr2rM4tUYrTZFRk3aKrc8vjFnuGu5NF8NGjQ8Y",
  "key6": "4TKojbGwxfnMczmCwCR5ZU2p4zB6w11RCxcuY7XfnrR4DGF3qDuoYq17koNzhagi8UE7KEtbB4YFp3bZqMiRDevF",
  "key7": "runeirV1yCampZe2MrhjqgZu3jjK6Y8sQciWyqPE3piqW16AKZSaLpiGt57AJ4Qsagu5ijqFdNvjUSFeyb8osWT",
  "key8": "4k3oqW5rZnkjo1wGZrj49BafNbbd7KGmmfn1zCkEDeZ6m45ZCRVrXPWZgmFga4GnZawryRj6v7eks1x2pAqvgcUM",
  "key9": "82MDSCPRJCPnhAPRSNLsF97dV7FoEgDW56JSLbLh5h5tbPFRLrZYwcTwLsKPtF4X7fWE5U9upaKbGeeobfHTH88",
  "key10": "3MEokkj7LzHUBijx4gk2Q39dMmpwHihL71g5ijSdCXpevEHmv9YWdRY6rPkoaCM4ZujLFfXrGWh5cVPSQubAzVow",
  "key11": "2JL3T8NYTnbURcJCwsF88UqC9CzzK1NzajshQdgLpGZzawgutA2KU9rHs1CwJ9o4RdjwzEwrmKNSA8SPxyBjAVQZ",
  "key12": "3EAwK5LcG46GAC7UzSqdaPJAcCvaxqdXWWipPNZv7aa6ZeDitXWn9V1SGoKkqi8G7Ee7CKqT8SvdVz9FxbArkRBN",
  "key13": "4L5vTcK7pVjtTrJjRKEqHUzfZtPHnLP85FargbbEHMSRfKAp2dD6HcmTS1mtSh4Ab8LuoRAp2LH25UGJLjQYKSWK",
  "key14": "39pdRiQeXH7HYwokT2z6voq2LEk2A5w8ikfSeYWrs6pnbgSkH3BESEd6VsJhXR8fA6AD5MeXsfFTyscm22u9cwus",
  "key15": "5aeq1AcJSd6GAzNSqdWernHVRjfHSruyz9gtBmYwr1dk9Bvk5z43r9YD4yC94bDDRcT4GHKijVfsPifTWi9iNSYM",
  "key16": "45rndV3AATnpvqfUEDg8nLLhDQ5wL78DsurVrJCAaTYYn4gVJcSuX5SVJ7YLmTtUFBzVzamvSvv928APzfVQNnAP",
  "key17": "5o7p33NwFehsFnQeyJJEew3CxW5vd6BbEyzeN477mmXTiUqdvzZF1mNruQ8bZ3mviQrZbLLkKvFxgNQGQKunzpfS",
  "key18": "3xPA4EYcm9Nqmgs1jqyg8xNG7q3sL8G5knXTWQoJKgqueTsvZY26viUaE3DzWn13pUgDMjRSaQuus6nnqmL1X28u",
  "key19": "9jwCaABLyqknuaNjqpCEjoJ9QSBRzsEbUBVNrWMB6gH66kBEyjH4tKcW7g1jmVhnmt9kRYN1TEUQaDe1WkTdfWQ",
  "key20": "2buG493CvbTnZDYaiTPRyvbv95LobewaRXtTJ8YACcmXKHfYwEfSQr1jrJiCZtBqGp4NWuB2AtxCmRgKRzURR2Tn",
  "key21": "5uRLLCWErrKFAc9WH74bMcAqBRjtrkLUmiE1WVFW2KSeLtkPV6XPo9H3ED7u15b9B6osg4PUFv678EJUw7TuikHd",
  "key22": "22H2BevLYZhcfd5SPvvj45pbiG6kuEHQubFD8TJa7PWApq4i34LQ5BVh7oTNU9r7vArVyqMikEAXssfRmKB78fRd",
  "key23": "4Weg9fhc3esprGeQunRRDLwf5Tk7PHaRep8oVJpRVhYG6bhUU49BZw4Xyk7adPYE2R2JcRrYUUrUogNzKcmXw9ot",
  "key24": "5ZrwpF9jAF4kBa69jPaNVvS1tDygPNvepnJM4QP8WixiF1KambVKQGDzPKfYh2wgoqBfMBd2E9D6Q6QS5FkAztQR",
  "key25": "UZEvNDiwQJnrjnTAEDQWugYN5kkvRQ9t5ujKeEE1a3MusLxdbvBSJoKEXMUeBgc3UmopFMFf6EtxmgqVrTEaiCr",
  "key26": "JYTc7Vuc4pNrgXuZyAKeBZkyuNkfuj9GFoawb6RupD68pFX2fUGzLRyXZx4kf1CM5b6cfYT5vksbLa4w7xvrgA5",
  "key27": "ChzkPLggXengtQMBJxafExvmdKZZSLharmACtDpiXMQsfpUmpFKxvEaMQxpv17te7FS81oymH92tAzKCkD8ryo5",
  "key28": "2w6hGknFoQeh1vQGN51qvLs7oZGEpTR43MxWLur4ExjUzo5oRVsTPnP17pUitjEkVhHvR9a5Jbi9Lb42f8WiScR9",
  "key29": "5xp7JiEkXR8NY4jWecs7dUXi7u4iKS8FihQzhVGYYjFfrJk9K9WquVEn6CWxDnaK5HdVeuhZAPxaL8gkMCPxdg8c",
  "key30": "3FTjR3gbY7C3KqjdHUWyhq7Sxcbj9tso79LwVAp5dkbaPicrr8xXE4pJy2yguek6WM5u58J4iWLNAhg4tkqb9U1p"
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
