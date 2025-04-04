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
    "4UMpCHqfps1FKP43QAW2hSyrhJ8hRXaHjyYEGeTPrib6jEnJHWMoRMEFKp7Qzj8knUygFCXsVw6pnuWiWzSZBhXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WzRRoYTJ2HM5oJrxhapJw6mfkihmvW347ZbTyqyd4E4RWxErsVMS1BohohooqmP1bQHNtv79rZhr9kgc9CMU6Y5",
  "key1": "27YSYW2Hg2MtJyxzYDQFQ49R8wMRki7pe4oWxmAdAb439jsn4U5HNq3P6qx7hBC3jqFAtdEqCeWfxJ4uqjNDw7xv",
  "key2": "3m13E9P1anLLwevKmXXG3zN9m5XiJAiZviznTCQqHF9bXSQrkcvnKktA68mYf1grsPUfmjReMwoeM5usArAb4GxJ",
  "key3": "3YyXmZAsJ6hFzY53jPBmJZ6CKRFgpf85Xvqyr5R7WrJ2eusqSH89gt9gtuFuLCtQEbAJ5wyNiecApSm72bM4hoo5",
  "key4": "eUGqTMccajy5fZxJ6W7XAyNmSESXR69rYuHEZ4i6D62ryWARyaGQJh1wkpfW45x5zdnDPCPfi36wpSjprSipzFW",
  "key5": "3gBJyrPNRqA2nhkRHfcsLiUozhbQDqsuYyXEP1fy5bKP2HVFYC3ubkEKscndVeNxBSWuCP3zf63LCx8d9VTBjJqF",
  "key6": "3qoRtBB8jSVcPcDAJfsq1N8HQfLCKHVHZrv1hSTQLS5samgnFisriG14j43rHRBxZQN49VzmskmmX66CUniREf7a",
  "key7": "n8C5EmQ8vJCHXpE8pPY27VjHxY1Va7BuMe43EKpCCqn1D2tyELhyVkqqyie61hjntW3SyRzyAhCAdUzsjSwYFpt",
  "key8": "4rjFdQhepL9h7qBMAzJnfL3Yu99cpUNSMrvVoZk82dSq2HozmpjWDazst858ojqx87jxxJQ57MWDKCyus4PavWMo",
  "key9": "33zfqirXwu8ydkE3tov2isVtspV6n1i82QXuj2w4k2X8yPD5RWbUVopeKRLFKY3qK5ZBS8scZqPo9uCugM8X859y",
  "key10": "2RrpBqrXkKN7hFAmjZGRP4HZXQxBW7ovujDAD8FFk37m6qQfVFWvNiNiqhbGhESXMVPak3iH4XdoY2ffZZdAJdzE",
  "key11": "a45DtyDTvsFmMBND1nqiJcK5Jw54xQkWLhWZ2Jsv6j58wyUaRwK1aJ3gcmD5LGRxrWXjnrkhHCKgCEWzfRjvZKe",
  "key12": "4AiNaLPEmrfj29mT6FEDhUoudPhuQf1G6v2bjMP9QMNw7iYjAWiaudBqVsryAkF3LHMZ2PuHrftpkuGJU9pam7pX",
  "key13": "2kk75ak9Zjv3sA2tkLAkfWjRUSgu5jLeCgjr2W2oDM1T5s2kjTa4Sdv4vVKkA8JDoKAfNcjUKM7g67GGeeXx5pHs",
  "key14": "5bSGUWEFcfCWaXrZNsmUrJXQNzf7eGcvbp7x3S1Qv4GMUyCKYdk4kjzHbcZhUiSjP2ALtCSUJek8ooESBgp8yzYb",
  "key15": "4rQ8xqjezx3HREjqw9kveASXA3gU2oEwAW3UXLF1SQw7VUQUBQRuDSYuCekqGktQ3g9VvbHmwpXHMN4HZa5VyZZ3",
  "key16": "41618zheDwMKkgiackZA19eTXpjniTCp6YcibsmMxYWfkg6T6W11VRWeRpfdq8gqwxMyFwf9q2bW5USTxpueqodo",
  "key17": "3b2z6paYfkgk9Ceb7tstBNYHTzR1RnhvYU7RqtVXLxsoqHjJAH7vSKk9bqeZvQMGgEutidiVFdQo4DG49CK4wjQD",
  "key18": "3pXxfxi6uCXG5MhjAftrjUKjCmePdCkSZxPvNdAG3u8QwL8MZazhbPNjjzccH2sg4YVsY5iUWSFo9p88cEstcZYG",
  "key19": "51eMnMJgVoqWkpQtn3sw2qmJ4xs7GrtBRdHbeSfiKRNNkM6cFafoP4yDF49szk2QxTNjsTuKQKi3kPtjCSPxYckX",
  "key20": "51EFL27SEq5MrDTESkTTzsrbmuF9Lx2vfQiE2Mz2fxrEbe5aLJFqzDXmydiRXTqugJTEwTU1nDiSSdexXcZ6gXS6",
  "key21": "5nbiRbU89DVTHTXPjPEGeTEwuw2otSWERW6cmUerWStmaCENYef141fgJLhtbEHEN1fY51bCAG1s3TGnwrTqn41Z",
  "key22": "2TL7abhmz4C78jAdLudN7PAFZNiUJnLPZxq2DYU5o6CvezEvt9zNtMsoSgYTYbxkxSSMFXLRYZDgwRxZr3pigajv",
  "key23": "4MqpubWYQnFRVAYezkZfMizdwBdicxEb6KDTTHqorBeNuMScwK1DBbTB2kVJhcfgg9C7CmBMaP2T4FXMW8p8Bf2K",
  "key24": "26aF6ZN8v1tV8H8j5Cn9oWde7tnLgcxSHkTQhPCQHQbmx5uuSmYPjRjyXYTYRkWev5Qcu7DYpcv9fRGN7stbKNru",
  "key25": "3fDzi8XdwbZSe9AXvwdRV94WdVRk5HbfNXL8d71gDEpcsFmTLuaKAuVEKKVNS4yXz9RWhYzKWaGD7uJjV6mqNUJD",
  "key26": "3tE9gAtVbBTPzf8p5wD2t6oq2JM3eCivpvnyMSUkVe1c8im35Rd6JRSh3tciqts8PZec9dS8tbeH2QJq8iM7czaa",
  "key27": "3hcbC2SGREmjARQQ5rsd4R6yVgwCxDMvGqigTDmjB1ULAiK5eaJs1ZTRp69KFSyrCrPaso92GWZjzcViLyd4eyUn",
  "key28": "5bMoJh9cPfo1HfEpZ9T9ifbGMRBV8tzfnjrjmBsNbSnpJ3uuNfEGbHKJmQEbXbUvVFynJs3WFUK81PEDdNtZHjt1"
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
