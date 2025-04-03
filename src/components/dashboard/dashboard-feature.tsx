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
    "5k2ZJ4Xib9Tqig7C2pxtg1Q7ee7xm5W8oAjSSSxDpXdDm93Ca7qTzQbnKcaMRrUXU4qKGVPY3vZB7wGt1hXkq7DP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b1bHh96osDenJfsi8gfpjCET3s9pZC6f98PQLXvZXoRbNLUsQjJBSeLViqFGjdJRdLM7EvN12N5GbyMdcq8Ly25",
  "key1": "4D8BLu5kKBD7N3biCCggcvdMoFsA1vHCNkHHgpGsKH1ZkVvNKzuCzB4PFMuHVdUr6k5xfDEDnFpZnWAHXAxiJCgy",
  "key2": "3aDK2jZkWWCq2MBfy2hgpu9vaa9kdpmaTwDVfHF3v9hTsZ5hdDzu1bHiw4kaiPeoDbRbupfGaKppRqhHH3pJhaHU",
  "key3": "2Rn3jqXMPFwURt8ecKjYcJUjaBRyvR9ECPUrijc4YQQAGdrzkrD9kKFGv7Zv7TGzcqm4DQkL1KFuY7GQi1TWwPFB",
  "key4": "Dx38owfpB4YvNQfiRvDuSEMY1WGfx7i6EKoM5aQgJCYHkwkqBkc9Shf6aUQeVviJhrPT7M64TYjp6x4LtsodGdS",
  "key5": "2HHwk8eUrnyTeZ2HGGnheEnuVdLTm2kkK5kEBt6uoB4nQTxQoFbnAE8gb8aZMitGWWpEEECaFRm8RJLPN1vYEMcH",
  "key6": "4H7K2dTceo7wyFmr771noYsHNGqqFBEry6tgDuXi9sg5BPAkS7NfTwJcrnnYCksEwNBxsN1SkQdJuUSXxGKuzkJg",
  "key7": "2ejPPvp4Ve8TSoRAnhtQ2tK1kudvisYBfXArtmqp2hamtF95KMDtKsyqoe6JWLcaneHBSZsj6TF83DSGjUMdxgL6",
  "key8": "2Enj5NrucrAeeb6CKorBKBuWXeFN2sft1L235TbERRXwFcQrJ3tJ8bQAo7HhSFJMwJ7nauPz9oceKBuEAaX99SZ3",
  "key9": "2bw7hZ4U231LpNKFuhcHEJsMUFqcMWQJufNsSpdNAHVJnL71XEVb7hmYnNbnLPkXhnPVySqhu26DPdjdWGesjacq",
  "key10": "2a6i2ncZE2UHcQ2GixcJ5MWBE3MF2fmsLdvQvWHzJW3W4XdSjdc4bvR3nZkbMo7x1ewG1yQrKXApozLLmcxbQnB3",
  "key11": "ko2VQrdR3e5hMJbka3MzBHMcxKMWee5F4sJHCiGdf3Hj1bxakFmb4WohjsW7pr5RuhZYFmRVndDxJa4STHVdhTM",
  "key12": "4LxhU2vDXc4ECVxfyGnSEaSSv3dskvKKkBT82zC6S2uxVgv2wWKvPr5SFDBk7iBS2ykR1ouqnggiFqhzJ5sUVkNp",
  "key13": "43ryXovnniDdw3685ewq61RSjQsJiMQikLd9487tLznrfA9aUposThyikHmTU1qNksnvdbAeKSnB4NerznBkKPkq",
  "key14": "3UjgcxRWKZS2KE9xcq9z21ezP2X7aVsKwCHsRiYhkpxc2fqQYCqFfM2fmiXR1r2p1935x8SG5YXuw4p27LV4F6jg",
  "key15": "5AU6MQFm89e1oP7VzdQreNdKWGfGEisja6iHFpaCozjqwhs4gx9jUF3tnJediggRjnwXXJyhk4SZdUeBUScFaYDZ",
  "key16": "3BevZxXte497Gz6wrbJf6HaAaCB9pm7gjbVGgXeFpisp5GmpQSTsCj1hzyW3d5ALLSVgyeadtE6fnNjfxBWiCCaC",
  "key17": "3qcNffxCv8nGy6YY2BsJuAP3pyzzxKG39KCQjczZdxGRU4VGryhHR5t1KGMYosDaMaU1sihCWKHSfnXB8s4yrnup",
  "key18": "4U52T2fphvGCqX4W7hWudXwf9pYUkYExgXK5FoV15jSvLQQFiAhsqtRjBwgoAKALuFzKnasUuoNoEa7FWj4SowSD",
  "key19": "3yMnkniwH6WHcxQpBdqNzWns5y9pqRDncyVuzq2mb5kRcmbu5isXmULcnYvxW5BAYMNLWNKhiGcKWKWJBVYXCMwQ",
  "key20": "2wZkENkF5jreARM5mLtY6Y4SkqG7GNetHTPzw1ndrRk29SAdXCYYyL64KZFuxWCzgf67tkP99DMcZ21z7aJmvitj",
  "key21": "5L2D3ZgUapMSSKHtS7v6vnkTniGskbMh4WKMbovmKkK8rnPL4XVyP3r6x35jMTtBVp15mPe1aezT1AE3wFSrT641",
  "key22": "5oaFjF9xis9aJEykdcpMYjjKs1epKymVSmxW8iLE5uUQMQAiaM6zkN9JCBYrLAYcAoR7XvDoXfqi8SCsWrtDxePr",
  "key23": "2KbatxmRp8qVoEzE8qmSt8Um3H8GG6UMNVZYy4My6xfrztbjmFRXzacdEhH4H1ZLntKDDTJHmzDjrJ2APhj8uyni",
  "key24": "4h7xngaD9gkMGzgbgn7UzJ9fpnX7iVZqtdmfuiSSavURpn6GuRNLi55RgaoCvpp5u5RnDiNFyjHM1YX58AXv7aLx",
  "key25": "5jjae8KCrP8ooJdo4qxrXUP7CmTzmDaiAfKhTDTBrnhi36ew58DEYrpCkXf5dAUTNvVT1myF5gv8nrZ4HvN9ZKgT",
  "key26": "49uCcQcQopnDuctbu7FnjZnX55ohpQrAbuQc7oCUXSWmeRmmcdzzyeVEbk1mu8HcXtsQrAWf4yDLkz49nF4GfKHi"
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
