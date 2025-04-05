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
    "3sg1r8iZwKQEAZcG4Q6sqnjDx7FVxRFBdW6ELbZAeffwqANHZfNCjrY4bKQVDGVftypp7sNfw5U36uC6TniJu4ta"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JC3KBowRhQk1vhjhVgsgqmVimhafoVnjyQN98UcLZZxybPr7cEXrLqjjVVmcesJTrwgsgKAGTjXivdBhGceDZZs",
  "key1": "5uhqzKQoMoPGF6BPL2MLgX3kkuAvsF9rfnd9y6HQxbKTPoorMZErj3hmtUbQ9K7jpNHiPDMbYbD9c2uVSZGdradv",
  "key2": "2eJWJPVRq2kNS9BKBFXX7UTHixhiJc9WLK4rm4BwFAG1AspMptrM4dJZ8DRCc5LSZJtC2veHEa1ydZeaMHN3Hi72",
  "key3": "xZb7gFdEa2iPS694ofa7Yqt9KHEPAytiiagaqsR2yPZK8LTNEZBQ8oZWsJz2xPYcmYgQzf5SbF1u9EmdYqXWQsZ",
  "key4": "5QRFqCuH1CWSmd2c8UmVGjmtuk4vAzdzgvWkWpmmAaHLZGe44zVqhn9iWD1qUxfWqbNrzUzZan1GWULSs7Gpaifw",
  "key5": "QP28w57kJubPY1s9VKEZbHynqBGF66qfB2xRvGVdbWdbDzW8JfJQJL7X2GjTm5kq8wzJrJv6LbNq8kdp37ELde2",
  "key6": "5RS7wikZiS5Sz29F1P2m7EUbXe4nYCVDejGnpgFZ7NQLT7W34k24p7A4zuSFQBUKCLaVSsoV4QNRpNs5R9ycptNN",
  "key7": "57eKgXznagUaT7r3LEibuUD8vGEJAFeahsba2sXYiuRb8pdUmrGktsNFawfLcb8hJqQ9XiqEgeyqmP1xHLSHWpaJ",
  "key8": "3rGdTSfb2bGL9jLQJYLaUzgz5yv6ELLG6fuV7f81gexUNVJFmcu5jm4ics2tNjj4B3E78jayTTj1yrsv7xiM5DVQ",
  "key9": "2R69NsMr4myRT4ML2d5KnKkUq1AjWyuUp5pwtHjepBqaHQjJ1GtV9QQyqK7xXtFXfWVQrKXK1YoG49Ue5tfZSdM2",
  "key10": "4XrMRPFiyvCURUHreUzmYFNg82NCWzq4bTp95VxDZtJoUw6D7tPnERWuBf956PGmpGik7C7XRxz79q8PUs47Tp19",
  "key11": "2aRUcbuK9WWGuWBwquh6KtXtqggVbzJxfcNDztEjhgaURYYYNSGfQhoUbnzfeQFNrkWprCTCA2bo3xCiCpuWCNNi",
  "key12": "4cANjS51ZhavfLJBR5NrBjhNbucQumreYpY4vdcRyz3dT8GeJp9anBW6TLvWKfFcSS5y54qk5mAghcGrbqisEzZz",
  "key13": "UCpBdgN8MSGokhy21nPK7TzNFAZhLcxZncVojtGvDLurwcN7RTPMbEPyeZenRuDp2F5KuAieVujrH5y65KMGKTF",
  "key14": "ZfGV893AUtgPENkGZu89HEfiGmb6U7vrt9B7h5qce6d6ua493D5HTtY54w1cyrPZkMZZNAwiGWf2PdqSo6R1E3b",
  "key15": "3Fwb5kRrtDAtBEGkWPiHvCUFvWgHXVbvfxNtuzZs5W7PxndJmHKVnSM4wskSCpive3tLJGekeXBACeDRhM2YLvDo",
  "key16": "5zihFvKBX2VFZgsFBdBQU33ULLdcM8iQmYynX3bnBRRpopNiaQgfnbWociQZ6GKoiFrDnaqdoJSA7xY3HfbkQzGn",
  "key17": "23nNarCJ3DR3J4HXPsZMW4E6APYN94ZdWaFVC2o1XwW6mZgS65reG47XHVBu55eZjndRdZQJrzAuWLENRWisTWG1",
  "key18": "4LxtnEb2pEMC82sV1MkC9NmuwtczgMYGRYxwSEY2Yj15J4wxudZMPFqHYTr2m2dCMBhBvYDDm4od4CdvtBqLiTiS",
  "key19": "5h5oVdjW7i4geqbi4u9ePEBvTzDR1kdUocBVzJF9SCksVwvd3isE16i1BnDdRdwAZWtvQRUTtBi9553aR1d3LaLy",
  "key20": "5yK484h33KTrEn1PcZWWm5sXoBSmTz6vVRh4Rp4dSrtWiEQwnT3qunb3RAK4ou4dzf1iE8EfXnmBbRTVNfTNNJgH",
  "key21": "5aNpbnBHdSMRLUiH9YHsM7cEKdh7gCY8pwS8mHK5731EPr7qtym5gKg8THpbv38BK82kd7tURbD5ENyd3uBgtS1D",
  "key22": "3c35YZS3cQyoo2vdr4PcLTvRAE1GhoSQoB6FonzWb7RRzX7NcJMj684ctgzykbhgo6KW4YPHy6AyQjbgR31X1M24",
  "key23": "2qXujfKKkJtJAQsKfVk4QrmmHykEcviQqiLksLaagbVXV4ftsXzweJm3NnB2BDjWoi1gmuro4MZ3rznJ3AQ15Q3r",
  "key24": "5oaeJbpHfHdKCMNWgvTJPJ9Uz69mTDCC29xdKHVtmsKuycGysjRJjQE2UWc6xrndRbL6th6CHMxE7JHLakhoDKyN"
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
