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
    "2uJWEd2FP8zwn98r3Z6aFn278wCE3zQMfPNW9MqUGqcM42NF5RuycW4UrJNzXAPd4Fu19VkG5yk7bwaFWb4Dx8C4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MM3i4pUbeQRL3AvDUX8LsK1GJhRoD82zDZTTwLrWNoHNxXZCtsxJmNzF1TBZXEegnDjo2y9kSRqxF6tX6dvZsfv",
  "key1": "57avHsvmWk8PSmiGHoA87BusQEzBu4Np8FoMP4H1c634EmpU5tYRVhaPEW9Gg9HuTsfbx9GJfco9xgVVbZWbVXRJ",
  "key2": "3TuC2WmW7B2EZdb2Pz7TtPEYYjL9qHpJdpqCsoMWYih4umEyq6U6jTAZQXGQ58xAoSR7FGfxKFgG9UzEqy9rTEe9",
  "key3": "5yeSRWJNbabTrxkawNV2G1qhe3dpCCd1bN6B1goCUbs5qkgrKe546pzurpPd8AWxdzg1ux8EQBLWRxENzCQHHEmq",
  "key4": "38qpXsEcwvywcSnaokpWAX89Rmgc3C718LPp7pv6sKgAeB9ctbvb9xH2xydQF7qfubu1tFz5p4gy37SMTYUdNCDt",
  "key5": "4Lcsb3WkkmAZneaAjCASHvNHcrqeTjaU2tA1ct45Ut3g69drsKQyfEGrpLaUnYvL1D9djZx2r9F6WrGq4pRDvcXh",
  "key6": "2Ee9UidMYV4svikKjwRFhR1JVo4CE1tyVeuHozDQodAicAsFz2YipN91utAJwnfSFnXLvKXuSMrEQwL7pWjZPHp",
  "key7": "2E94A4uCSJqpsEJH4bESYmK51TCBMB5bBNRv5CoLogDvGK3d4XF3BKHNPChxLM1bb3t9iNwYq8vxiXp5xwQyTwX6",
  "key8": "u1kam19P3HsdWchhScwu7Txii2EbEMgLXuPyx7UQ4u83BMF1QLcV6qxHdMMqsyJMtUzxU4QP7MHDBv8Rf8AtttA",
  "key9": "51FGfE2iAZPJp8vwF15DGLhK7YZrLz7d2kMANhPM9Lps52GzUtdzvz68oCSJb9zthjeHykfSTCrDD91nsHP2Hj9L",
  "key10": "4YNou7qWtbFR3JxEkGsqs4wqfU1EFEtwGtfHKj2rrmKNEYx6Ki8xkCpW1qL35Ri3H8fEubTykknVKCCwMAHvawDE",
  "key11": "49mcLzdrZrRdzVrZrqiP6ursZAvN7772QBeNiaequveCoSBHfNNNQFjsMWSznCwnumW1UnG1WNA2hjs1Fpge6f5T",
  "key12": "5PhERF3FwJQ9tWUAMt8zErYF8mgdUEiDdrWBnefsYKHxPcGaipg4dBcbxvqxvpiHgybF3MGCLossV4yp2U1FSufp",
  "key13": "597CAVvT8yAyaov9JeCGdfs18pZ9AgwiJZHYhRWJRf5bacjCpX9qLH8BGUE58shZgk2n6XvwA52rtqWphiAFuLSF",
  "key14": "dJmJsQR9nQHZQftaZ4tLHemwCnYR7gkKPFYZEDrbCzXa7obANqZTqHUHTwLe4JR7iPP3jy1XPSCnzxApsjxa1GC",
  "key15": "486jN6SCXxk3F9jhp5fFb1j29n8mEjvmTu7yb7mnu1hkaWsDJSQbb48DgSpBLMhHk9RYsasFQfGawpKeJ5T2m7UE",
  "key16": "4o6fVE9iE5cWmjsFJJLBSEgy5TbkTCRvCDwRMqV4JMFrDmamdpfGgLFFjCERxkJwKc3Nrowhgp75jvNDX3yfSmig",
  "key17": "5SnmeJjNT9KjPZkRzNfVspqTCUfeXzLgZrvzEar48AgiubHr44AJrhcRR3GupRYMkdaccnUF6izyWiHUk928BRoQ",
  "key18": "UAXiaZU7qowAvy8Yfp1Pg21nupZj1b2fYkEFjHVdQvxV3JqLJyEryiE5hDJvwNnXC3hUbCE2dBfjcjsKRi3zokk",
  "key19": "4Bwf5J7CfqpihA3mJvDvciKtcbH4YKjmWPd8AGAstsLkdUGjjJ5ipfD1CB8VC5sZmw24bJpzLdDktimMvAHvUqCr",
  "key20": "2pa17gorDJwJMk3fiwFx3WhxNN9LDsHyv44NY86zppkerLAsX9o4yJgfQks8rDNDmkJipt3vKLmwTUTXK8mCZKuM",
  "key21": "3Y9Z9btGqaGc7GAvRK8ZmtCUzDXCGxuy9Eob1FpS3TAHWgjpPsBQgV4fQExRujqAg4rrVFXWpMdsAkgjS1kz3oSp",
  "key22": "3BC6rTpMMELNrvPpj9tWSNXzQbs66sjo2gKhYnikUmGT7G9KJfh7R8qQ9zodNEbHywDrF8WVZcdNTwMf9wY4pWjZ",
  "key23": "EGFUL1fygXcb9ocYjPPXf533pzqCCczoVZM9rUSmj7VF654rzqP6VrqjL7Kn9FxmMDQdPhMWjU19CY14Q5xR8TQ",
  "key24": "3NqXg4AZZ2aekCG9aKZyjR3DMtb8vNav7mbFLpZCXXfP8LjEdUY2WbTU8UcB7YM8MdaLo6aGTSdP5R6AXbDYcFCb",
  "key25": "5eKNxi8H2cxRhyyNEpMSQ5rokNCSRGjzBGr1rWcio5icfS4KZqujrD9VED9PoExVKYCQG8QgA2pZRhLe7SNyLwy9",
  "key26": "21afhLLd5Z45LKWyDLN4UPz9M66e9De26zeQBmuahpWvT9C6AGerRkPJvbsbpQr2aMFRA8UXj5uEekShQMoaZbJf",
  "key27": "2h63CZkWZdAwjm8XenJL6ymLLgCy1npPmxAh8iexKGUeYgo92eSifHETw2WG3bzMNch7x456MsKY9oadrrbWc9zv",
  "key28": "2G6VyEtUzfowy22Ne6kQLEZH7qUJxa19WYkHs9jEctq6KE8ed9a9niVeZZf7BerUwAuqSc9JKEXtqkgJWDvUDZtC",
  "key29": "4davtseW2BaSgXbwT6DfVpwVurJm8C9AXGZFq56bP3HSQiQ5VoMFiWeUb3bi18DAfDMpHLZ35dFTDQoiTAdpsiW1",
  "key30": "5oyXBAKqRHJkzrtBH3rZVEVg3CHJVw3g831FhZ3Thov8LRaWR5DN6WH9GxsjD5BgeCq3xpkMkKQHEKn1JqFpjPGh",
  "key31": "3nrodaFQGd6dpSGMFMGnHPMmLmmzKwHWuuhLeBEpKQ2PyioNyf3MBmf1CGMCWMrcshrjqR8aPBQbVtKPd5cbdvGS"
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
