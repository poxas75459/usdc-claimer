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
    "2SU9jLfpUWu6u7p5dYxNEE9YNURr2JHweoB2mbmxsZVHbcMyLd5xM8p5p9YvmDtVufHqfTRseKFosBjqnjrFSDbv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C9nTnzEhYxg2vYKCGatJdMu6Wt2ewaH39ANcmSXgJ3CqqXm33segyNAtumWask3WpMEbfAnZUvPngaNmrCQCH9P",
  "key1": "4vdy1aGerMEBh6xQ1XaxkoHAgoRq2ypxyQXhjoT3fg4cm5c5ezDEi8YMGtxNk1K5izEHWs4DSDdnVCgjAFsFYkgE",
  "key2": "35vdsV8U83YanJc4kJjTxKPTxTjLC4sb9Bbrgu4M3tuRhyGfDd5VaQ9KAmFMtiDWpDnjN8pET8b46jEqSjvZqqTN",
  "key3": "4AVziUgDQEJoWZwvhgqP2Z8oDkbVoVsUZHHs5r4zY3ey5RZYFyf9Zfo9Uioq3DVQm2u6VSh9sKNHeQiZgKFGReY2",
  "key4": "3ey6ED8MuZsu3jRYFKrmNsscJnhrrZXnr7nZjxjmFfNmdfZPDQGBFTxV3f2FgTt8PMKfv7qzukN7Z7aUwoiUMCLG",
  "key5": "5aQzZZ5sefLdbUVuwmHvs1w3hV9nx5hp3CimmkQkQMsMhfeFtCkh1T4kVykory7o6uyRsY41xnrsvRjF6EHif2uB",
  "key6": "5XJ5DWibSvdGLd7pRK91cRGmSFASNNFPMZQzm97Uou4DhN7T7Xd3ku9B5iz2w1nQGMhe7Ey8bn7rNqZaoPSD9cmi",
  "key7": "47Rdfcs1mjqVHBdZtmVTQdxv51MzuW1fS1Fn26A1aYUQgdC6XX5Miog57Z5wqC6WyPkpdNHsBaTiKgYbGJBBG1DY",
  "key8": "2oMHhVzbZ79gDdHejtnz1Vfo6aipN2bhnSvwrQucguhfYrdGajsD633qLtMYCHcnaLpuVhaMjAeUijckmFyAMaJb",
  "key9": "5HCmV6s2h5Niz3PBYmmCCamnVvUrPy2wMWd58jtJavMSCChc8efcWSGALQ7XZUeN71Z9VUuGtju4YdP44cs5T2Up",
  "key10": "5MGk3Be8VpzwXdDVQGdgM3Aexyv6uTWwm9KUzwH36sK8S7DytAoSwNUnFXyadN5H9U8DnjzhBJSWXcmQcxgNcZxb",
  "key11": "4GY2rqNkFckvyjpU74pfcFXrxZn1sRghQgVrNmBgV82bYnGSFgmC1dLA6ZNJiJhsYehHK5pgYe99nxW7m4xnBaK5",
  "key12": "RRyHPCQnxPqgS6EyGLdpkCxYBEPF9mSgB6FgjkZeWeTHXWAtxbeWsfsmSBMQcLZ7471zifeQCAfRbfZGFBsSg1B",
  "key13": "2dC4VheGVuYdCpJQFJVrgUnP7ywMaPgkP1wENNHxRqxsMnWdLXEKdHQCTcDGjBAbRGCdYz8oY5JPyHAxaPSEdmSe",
  "key14": "258mVMfmsJ8W5MgEey9qCKiqUk4gTmhXghn7vEfjyxT9yMdeTaZHpF8eV7tdfjcxt6Xm6PpdJqFXv2my7iz8XH9Z",
  "key15": "3dNsyP3yzj7dTZaW1K9wRSdMkutWJTK5CcgiaTf7SgH445EWp23RiSw6i2YfX5R4b2bdGidYP6uTTQvxWbL4oEtH",
  "key16": "2DKDRT4RVQGEG4bgMefbxajmyLRb3CDq2CAdSXkfbnsPtVJsKf1jSSNmP412ELBKe4cbgFGwRnA6PgM2vtWbxJBf",
  "key17": "6ATHUBuSSVD8szrng6BTAjTwA5EhTLJDfi9m1hfXEq8WymS9h2b2GRbVuyyQCMAc67F7pKUDGffHebW17T8XTVa",
  "key18": "5RAqLLcPTvUM9h73RYzLSA3AhzmkYMoMcCXaCco3k1hwenK3yVB8Mtv9PgkYGXTDX7YVEaqZ5EovS6QsrZypNwaM",
  "key19": "41xGZdfdqexQAkbGgw9cRyMYsPUcv9N4VVoByrBUqPE9QSSjZ4Ne84G951VU8x11MxUKgR3Uriou15Ds5y2V7asK",
  "key20": "2u5YfmPLYhvj89tdYVawNymyneyGBf1sQ36N3V3HmKD1aGgZLtgZJDRS82gP2MnhcP7GrPd7UX1isSxcU7HMoQVt",
  "key21": "MUL7x3vefPNCG111HQVcjzW8hXwymin6fAexYCeYkCTeqDtmXWUVm8goh3dK9LejLUjA7YUcRH9ZE7kpsq4mjGp",
  "key22": "2HBVy1j3CFJtJ5SRiBnvqdZDr82E3w1eLPZK1Dd6njVAMExj61XEkKYHusxbY2bM19B8Pft3qagxzQu37PcSqETq",
  "key23": "3rUp9hGqoXdaTtbLDsYaQZAGZ1PNp1jnKLvQD8nzM3KnEvnaJwFVLsP8AZZ6gvRaKMETMfbed9o5QTBbQK6hCTLo",
  "key24": "3Y4m9igRnzuj8UQEt4T8Bu6KHZeSps2P6mTjuJe5GhsjBoDVxNofikX9act8SSmBq1KRTn4xX11EG8gK37dbtnZf",
  "key25": "4omoM8bUKWj23ci2JnW9MnCTXLZ33LT4MBDGsWobYyFeSj1fNzr19LESzX8JQrTFMq3CMbtAUKjipu66TGAjDUbc",
  "key26": "4cKGGX9oaYGCTtHxnbfeP8NhMAREwYokryEoBhuGLiT7pa98FCLu7JLpHAfDUu7gEtDDDmGbxddPV8xT3YadomJ1"
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
