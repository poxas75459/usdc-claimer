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
    "s1Fv3oC6gKqVUMkWFnNYFipiKTyyEXBPu5dZYMyZ6n1xdhUCaXgYa3atjpxjwWc1zaVewKt3VzWV1aVH4QKDE9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51pstgUsxdrrjrvdT9aKSC6PJqKv6TrjVc3cYE6ncrZiZ8uXT5CiZG7VMSGnNdqFUtVTX8kE2AfTAEeKBr2jyZ9t",
  "key1": "VP8mQajjZsUH7BPYQCNcKqZSnaZFZEJBobm8egQGQtUqMaoqMyHfWprnE8dcn3arVCZAqo1AWxxd4hRSywAxikn",
  "key2": "4itfCyZM46RSv4bZhk2CA15s3VEczE1xqDJMDSPoKhw6nc2xYWwTo39f1XaNNUDCAzDszAjWnh1sdkoT8x7gFur2",
  "key3": "3dE3m6hR428c7YLSo4r5bwwydHgDhwW5TYPwkDVgdrMWq2xs1tBPeyFiyohNYpwVc7eNbtkFW8fRyZMx8ND8uLjG",
  "key4": "2MjWX7pm4c1ZekY37xkiTZnDmULk7WxtQq7sSJ6vTjxjYPPiDR5DaiecwZ4EHutvtN2ohDDzCihD5WmD2TU3ixF5",
  "key5": "2cJ6kt1hJefX8socZ7ME77deAV62odfF3719YyTDPqYHtDFSAkPQMJE1URbE17dK1QaxgApKPtssMrjXKgqTBEcr",
  "key6": "rQRPFmf61Xp5XXYy2U9TjUzwu8SDMKrRXt63Wi2b8JZG4maUJ2uUwNBdEUqerC8Kw8J2hyMcGHDzmoe3kMGLxz4",
  "key7": "2ndhwnpVJBnxM8VpLwSaKG4g6f2Xt2xY2478orp7jrGsx8yvuoeiXF2z9PV1uhXfaqDQgZKMDRyFqKqE24FqwxxY",
  "key8": "5qt4RHEPMmXJb8131Hxoxv9oGpy5wJb7f9NTf6VgYCiMZbvHpcurXyJkSV1Hu1JzPEWMffxn4DaqAXLgNEf6QTaZ",
  "key9": "54qvk88SThguwvzoUDgwQaaAjWFayTCQz49NNKjZQdHnzh635egtepcCHTKmscFcojK9hBmUNwygBX3P5Yfu1nhE",
  "key10": "2VzG1hQUMKqCFPR1yrzeATzvMSykFqMicaUs7v6oQSP7QWdxUjNrEf1ynX8DB2ecScAVgRRruShyqoknVHs72vM1",
  "key11": "3euKg6BnjQaiBgkCpDyb7J1cxErRyfE9CQ54s7BfoqjCV1765A1hZPmuAUdeDcoiYdEouPaM6JbwDgGHn9usgUv4",
  "key12": "3Hm2kwiGzBUSemzJ3Ukm3TJ4HZvg7ZRq5TNqq2U5d3yE7kHYBuv6GZEw1dUaCpGUrN7mjcF5Pwz89a21YenB2nqp",
  "key13": "ZCzduYTvkebTDo7bmFB13A25XWZUd3koZSMtPa6fVXmXbMt7H3ExVxj9vn1s2j196xYSTLreJWVbth8ZnMJd1bq",
  "key14": "FAeu89aeWPdTVY2GhGdy2fLTQEsdHUFG2xhgnfZ4Jv65H41AifyNwgBTLwRZ7EQ3NRYDk2FESaWpd43s6Es5D9U",
  "key15": "2nmkttCSSUSd3pCd2mayQG2zUuQCGYCVv5kgaeLw5REzfDUt2Vu5AhyrRKoXaJhxqfo9syGLHAVisZ3a525hDZ2J",
  "key16": "2AsopGZjdhDbW7zvq481iA9JMkyY9bnPjYkAZmLSrRNLA4AUgwouEs76hitNnxHAKbWdtKxEwHqC6iAGdaeikGGc",
  "key17": "4DoU3v8caW2BUNezrEwz9m7zhoBdkkxV3ePoUxMccGrX4cyocWHHoejojKnTXTPDCcgpEQL3nJgSQ44VnrjUhyHv",
  "key18": "39JwDhz357Ts8cMEpHEfJoumQgEZN34sx86KGCvj7AQ4iwAG6T39Nwa5FMt9w6pcCeMpqPZa5kpLh9y83gDXjS6T",
  "key19": "Vvq4vjaAxC7VR8McnTSKE1N67YcLTUkWiqReuZ11aVK5XHcy2184YZ64dbDx5h9tb9kMELT16oTEzLTC23GumhG",
  "key20": "5uYdX7zgRVoL7cMJ83a4YbxSmJGRvy4vAHBc37rxZkGu6H3zPyBUzTe1tD6bWQr8WWhQ1AFPvXezqMAtf7ESfXhJ",
  "key21": "4PkG3x6dP5Y76ctEikqEhUfBFTV6vM83cnschqXFXPmQGfc9m6EXMjfNb4RF8pDvUtTDt1p8t9BW11dkywEPEF2t",
  "key22": "2r46waLZCrk6zJsGo73QU6n4rsKuysFQiF86YTKKDmMNFfJP7ABbzmuFzkSpkn81N2wuySu7Sr3mmJZQ5gwXtTKY",
  "key23": "63QBMMb136NfNWgNgDpHyDkX4Bs4gwAboDFhmUgAQg2KffpMDKLMEv1To8KThaW8k1NnN1Q35VGDSLrYTsW29JWw",
  "key24": "SUoknnUBoD5G3EX8jedqxJe5BGdTaUaD5cMxEwwR8QfED3LfnzBhBFmg1r64hPf6XJCnv2mtW6dQQ6bLVHJmgTD",
  "key25": "2qNERDqMCGewbgK6vPbdvrJ19ricQ7T7UG4ArSCPUWhFZukG336W29mX6z3Lqkce85PhM8VnTgUFWDop2LXN9Gq6",
  "key26": "4XYnm9BxeN4okFe4XKPkjzioNqMPPeMdT2jeeyriSAUDreNPM7ns8sZAT7RWHTHtZESpC84oMVLJv9Af6jnTXXiy",
  "key27": "4CVzzsPitiM6QMSyJX8f8gpmi3icwDDR4D2fiPUzdGTfGddUduzBCbZynDmo4pW1iUPhDS7oMLJjF7BctTW2BFKc"
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
