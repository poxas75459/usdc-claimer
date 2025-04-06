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
    "45zqVAsAVnpdDFDmoEcRjFQYPWiMgiDSgqaqg43gX9JDNSvFuihx7cZCKy5a5FKz9XzYWet3f6A6WV96d6rW4CME"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SeNG2opDRk38ZnAv9rBQfePSyha5SCGmYfSyGhgcGy8Gis3ArfzaiwPSVabsjcFp9Cvtvw5YnzX4MbF2ysUp24N",
  "key1": "2daPd6STJUVsFtfuDkPNinn1Xu2uei7HaeGaRx9AMZ1upyzNNb3LggcotKNPf2oCJckDnV9mUPCQCuaA2DgrcpeF",
  "key2": "3TSwarzTnwjka8HXTtvmTkGguxfNwE3swvYUntFA7pdfexVSMssThQ14HqnYFx3yxKbmfRxVkgKQrFLt7Gz99SdQ",
  "key3": "5ofeDoFdWhZyrmKJApbBPAfZCPL5g9NhHTZAjGVQ6ucYXTzuRmH6zfLhpaoeh21y69FmXTbbwk9DGuBQ2fJDEqTn",
  "key4": "4f5QYUDT4agHFqMPP6SLuv2Z4BN7fw4nbbA2axhSKju3vnyHGTUD5ueSQLagezfNkh7pELfjHwC6mG7PN2i2USyh",
  "key5": "5eSt1KFkupmmZWkoQwxhsmksYTGhqtQA3WETGDLgL2Mfzrp2vYgLbpkZfJJsY8ef1XXZrzxfh16ZCnYBdw4vB5pG",
  "key6": "2zvdZ4rBuGyTn2WP1bBo5Pwxt5sBRdN1aGt7veushFNtNVZUmXosmeWuWYuwfJKDkbeYrZUJVpxb5roUJPUCQ1VH",
  "key7": "3LfPcpsi9wZAuYHqi6Vpg3oEDPnUu7nFppkFbgnwZcMfNRC8QWzdKVsgENGqh7749xL2mShCPTL9k43Fu2eAFsRb",
  "key8": "3gpixUN6AVusVac2rhqkiDB7G2hEY8VuSojCWzosq2kaBJcL396WSCeP8VE4DBcHTKcd11i1s5khncaE9rtYxyHk",
  "key9": "3bYJZYHdtRpCegABewYBbXtbHbXSVHX7fHk3ztYPW6t8tid5NkwF4UCqh2U4d9EjxBth4p6Y5gc4HeSDNa3NeCwn",
  "key10": "4S6SQ3gwo5XgGW2PyuRmSss57vH3ubqcT22ZpmRNd5gp4zanFokVKuuU7KvSizrG92QXqCAygF48Lu2vjQgF4hRo",
  "key11": "3eTdTKUUUZcXMVwQuGppqvdhDPiebhqWNAepC2m3fA5wfUrbBSQ8NncRXiqxECyivxMzYwtLNHeL1H77RR2trz5S",
  "key12": "4GcxmcDKJwpCTffjzgwUoGVchN8WSStgUEmFrLyEPpHDYxLhZcysMqKcAMqTEGtYRP5JMdejVhaS4rPUE7dNEDSx",
  "key13": "5Ae29x7La18eaxbS1yUehFwNG9R8qxz693gSDdDGvSz9gMJCurGF15AcD9nKvveeb88vErBaUX4Gg4neLdo1iavm",
  "key14": "3gpbRAkse2uV8bPebyNDrUyeiCVdhw9kDQGj9pK8MNrmxKd3CCgr9AoTj8sZpw7bnXkBMqGwVccMCaciTE23sEXd",
  "key15": "4oArZNpsGv8qx1iVPnSTspP6Ti6fRiCgWWynK75gNrp4TuVhQbnjt1n4FyBHch4zZ4gCiGgygmURq4py36VKpwHC",
  "key16": "2ZZ9cW89QBuXoh4Ke4XuvgYfFjhGWX6ZVTo7suw3rvBdrNf61mFYcXTsuQUbnyxRQLB694mZHWNMK6hD1CFsKoCX",
  "key17": "2RCND3YwPPZCEP8VVMPUXHrazmD9nzUyDHguJsRkkE64Y1fShJWtwqqHcnbjD6zL7Cg9py1BAmjcvCsR4zapdfev",
  "key18": "4jf8wXddDtUgbE4AGY3dAPJu2MmYSh32EqSjyFQKgLQgwxSLM6h9D3bXifRDnRvNk71h9b6yRHs7ja1BDcVV2xry",
  "key19": "2YKAaLnuWkm12KfgspyjPoeoDLgPXfmU7yzyS5WBYZmuejFZRqzrQutSMocLMoyvdoA4Px3zPj8BxUbJ8jPRK4wW",
  "key20": "65qY4nKBhVbJTF1cuzFCBev8MupeT9WNDGJZcM91zGeF8kQ1KA5kG7Ryu9pniYmMrkCAWh6oYMHb2nNs1tUeGyRf",
  "key21": "3RZokFgsqGfNdCTv18XYYeebhNshbaMudRAtYSMw3Q4ymQyXvVMbXiG6VrvagxggC1GDbupCJ61mkMLDDaMemf1B",
  "key22": "3L5iT4fh4nuXfaP7NJzF7U1EkkqEpEiFAx2g3tvgz1XEWcJv1pjGBKtiZ18krNjD1FhrLuF6zYW6Joh1Du4F5kNK",
  "key23": "piLeYBCnoCUfrzjrsvJnVHJ5bpnS8znbpt2EofPfZ3cWnWfx1EvEJsf36b8wvB6YNjXQTYBraCdsBbMhKfwhToL",
  "key24": "4YWsMBcHg7LTCizU8VByTcxThrHjFyUZNEBs4GwWTZ94wJjN64TJ6vY6CfgsUXA3gu3JdJ7xiecEV3HEvAGRYavL",
  "key25": "4mpLNNXNrNwzLgBDHURehmDTF4uY1vWkggy1FC7bPLBYAhWkaKvwJJ5ncqEMiHxbH2ZZRMt4w5VaroLxttSBNXsL",
  "key26": "4eQpFHhKVJRk1hjkT2xn5vy8hjMzNmvWGKeiwFpgECqQr4AXmqKVxBHquqcxW5y5pHCej8qDsRgV2c8HiePPcSsE",
  "key27": "64Pk9bRYKD7ymeYMZkMTgvM444xCzKT4UYzhKrWokGPdtiefXm4DwEUEqEnPVXggjigVWggH5q45fqWkh1uSnKoZ",
  "key28": "X8W8LV8Y1jiQa67NHrwNHGWjJMW9rw8R8MmRpPK56dGj2NurFTR2i9KXXNoV78Taa76Noq5SwX3nEaqXLVrmQKg",
  "key29": "4qTnY7v2TUpohTphb333YFjJUMVbs7c6h8VBrKs9Nn4jWHitQpKK6qLgMiyfXjHxbCZtUzVjXyCeFqPmQDuKo2ZN",
  "key30": "2fTW1CfVThMRTPTeMYo7wYwTK1CXvmpF82sLU97Tig5n67fgoxDVePP8FinPAUCidFUJSyQwzh71tdKCovLm3QGr",
  "key31": "39ULj371B6C8gTuaQbcyBYwBkQ6RjqDAF8uLyNuxyXGSvsHwvRFthb4wU4oBmY5qvsm7NnvPSwFJxZjgguhrRECc",
  "key32": "gdsAgAsCNcRu1VNPUheopEgnvGEUjq8PREPgEivGVSh58xFBic2YqiujULjf95LbQfby7TEb3HoYhDiFGnYi5XD"
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
