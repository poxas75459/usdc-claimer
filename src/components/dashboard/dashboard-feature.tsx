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
    "3HZ7HJit14NXyK2A8dkXBR2Ek6uvwVm7qAiDhUy65XhgkiFYzskBrT5PdEoki3hdqDEdLXGaKL4nxmUMiCw9LBhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44Ry4eK1NeWkak2XTdP1HBxrSQycmHVhuiFXavf7xw3hPqktu3GhSo5KSQnfVD9nZZw3BncVvQvSq7TY1jh3f9FK",
  "key1": "3vF4fRDB9TLktZxMb1BEmcppndcPVgoJqVvsukhN4prWqYjED3ZoPQJX1Kdpt5zDyQUijZxaHQj5veKHQHmTSC6E",
  "key2": "9u2GdQMDsNDThkhQceDQEUcg4XX2EZ8tL7yZ3FN7NRWMrwoVjWNU5LFLZbgW6ZAfNs7o8Bn3W1U5e2pGVqkufuP",
  "key3": "5PHjHxxnAbZdzc2tEVb6phyJ791JWUSvUHBX8mduHir6vaeJm7wQLyc5VAo1xaS8mgKh7KuV76yRpGGqqy8vXN9A",
  "key4": "5qDusnd7cKi62X4cHMKc7Yi4pCVLqaH6WoduwcXvhEBXB7uATiBJXJ91ahkBXnoXVJ2uqcgfm5iGBByMfkPaMxMe",
  "key5": "4pXL31DiQo7epchnne9o6baboPgUdgYKCP41maMe3h6YNKTHF5zAeN7SDsEyeitAsABFmj9LMrnSuzVZjCHtXpXs",
  "key6": "5oAZhFZHKJwZvTaqUCxpniViXDcn83f8Gr72rUr3HMiBtcyCioD3AMWXqPsY99EbCBtBLWes6cFvXjsbNJKtCpQc",
  "key7": "cjeb8zis8dDhbUV2RXzF44BiCcdetRhcr3rUDGLb7bBVraskYiveXE9DTpJmvwqQHUBbfegzqSkJjnRY3892raA",
  "key8": "hcHYGvdMzi4NLfMx5LsJeWPfcuHUXhuLdqWxPirtiacm3XiLQCqHecWPBoKJK5YpLDP6jRyayX8RD4gALdCdujK",
  "key9": "27d1fDikVgTpBrpYYLp5VcL76AENsAjBfjYNoDzv2SzojdKaJyNH4LRTmB3FxKw6t4fEimpGvLY11z4V6CLzwAqK",
  "key10": "4BA7ZQ11Xp42tNe89WDkBFKo5EBSGMSpBw93z8wvK2rioGbcC2Ya7N8o9qTnkhwsoLZsfgEU4mWr7BH6kKpcTGCH",
  "key11": "7hLa2eH1n6Dc9LrQgC44C4anf8nsRJfKFBP7zWMYx7rRCCJFJRUp5TyCmUdXBJByrNfPdzS9HHbZEj5g9ixJBu9",
  "key12": "2DKEowRZjtn9bhWe7pDucPf1HeKcNse4XNuvaGBDK9TfPZ774XUX7anrX8tLju2eVdbxH1vtAWURt1EUqhiMnKW2",
  "key13": "wLAQ3mDD2EbHNqRKsfxbTNW3DC1LZu1E9uiHKEKuVXywbURajn6aFQbXVMT5wRNtRftBGmFZjZWWdAMr5Y3Qsvd",
  "key14": "2cENmhqQ9GjB4CBvWitvEfeBfBikhEW8nNDnRcVzBYtjnB14PfaSdiSGBM2KVmCDYoqfAied4qQ61m2r6Hsf2MYc",
  "key15": "2Ahgv7wZDpxS9uDPoPbFtCdJiD4Gztr2hmwF9UowoZz3SEpRvckRh6bLfNJwBeLvDeEDxnyvwaZD7SWEw21jEbCm",
  "key16": "3zu7BkePqUs7zWjgUZ3ntTuVWTFUGhWdWms9ssNDD8paZsHfiTxQz5sTf28iNULrGijFCSvYgMYbD7dbz1878B9E",
  "key17": "53G7VoavUt518fY9UQye3ne7zrmmyuJr6B6cVX6nmUHK8r8eTGVPv9FbLujEAqp4LxsMXrixW7hrW2fggHH4c1au",
  "key18": "3XQdZdfvix2DFUsABcaArz79eW6NCJgTmZrzpumHoAHKCzkYEYa6itXBhghTWesMCvT5uJAVti8UFRjNcCzQ6vCw",
  "key19": "2JdDzeVLNYgPgjSyCmVx1xmNJTnoEBVNtDCBig1sxyqpmer48ewUpeM1xCiMDagMrMv71Evg5ReA8vN1cUox1eqU",
  "key20": "27TNPhg79eNms9fzvGGPUGveLXjP7fm8fnLqeQxreD6H2UmQauqrkGsJR6AD7hRTkfJajYK6nvPRXZ4nSF738uNq",
  "key21": "2LnUB2B8uGNnY6azdPMpDBZGSqzzdQm5Qm2x3FgWSe3Hg8go4FTGLMjFh8qp2u6JzZgWVpDwsJSrBAhngXWD9Ryu",
  "key22": "3rZz6eS6bXobXGyenLnE5FoAMZGMCVa9XGW4KG2xRpc6ez492YwLuRfzkmQjS9imA8jAsXddo9w22cLq5KpU84EQ",
  "key23": "22n93HSRxVB9itahN9Hz4U55f91v9yF9GtC8KQP2iJxSDMAzfcsyK6usxmyUPuemMGZA1V59W25szKeKbAYL9DQu",
  "key24": "ty2XcixXtaW8vjELmufzYNaG6pmin9rmc6g1pEXWSJPXdiMtPebjVgDQeoDjeSCxFDXRWt4wrxgiu2bTzRvJxRw",
  "key25": "41kFWEjHUdAwEuUZuE1PqX9tbQhRrUKdDuiN1suuySxkthJKgWPSHAxWVG7cDNkR4sfk5fzngqtCckyQoaNoMHMu",
  "key26": "7P6W7m6m21ubHFdTCmW4hXPqUMC5VVfZFKasjBHDHvcMPqXp6Ve5F2gboDtS4ns2f6wtaNQ8shCdToLeLmH7bS7",
  "key27": "5ANTZuV3H74eJJfLEwjcZjMzePUYkk7wS3XsjoGK1Eqw69ktyFXpfK6NCb7KuV6hVavmVjb26oVH5yAGRqgMvMnJ",
  "key28": "2oN9hAL43pT3gVBynQb1mX99u8yw5HgpLdRCVr3YbwzsbCo8hv2wPVtdfE4Pbx4FsCrNJ43zQyLJjBbzrPDmzTXE",
  "key29": "64XNpLcpVfpvxjHFdy3KuxMsEJPmZsWQexVfji3zzydrvPWuvbtcbeM4CcxsXaL1ShSbgowEgPt3Dsvjjto1J7Jo",
  "key30": "3v7GUanN4np6BDe47iBRUcPbqT5q4iTK7kbXEmtYe9ocSigiRTW78gSghUYiXwdeN16YLWj9xruCun4NJ8H1y5pF",
  "key31": "kBmdn2Za4jGrCbQTpZFfzAydk3HefU8MdbXraAr33nNhBtVfgWFTr2DikQT2w4BJ4xMqRcEQwiqmMQH3y9j16jU",
  "key32": "3kZ7vK3j8yvMGaLPQ7axACJdzFRxkHEvJVX3rpQw8zm2o8phRBT23ZLNkDgC5AAwUz98NMnj1ZdCee1ni9s38xBL"
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
