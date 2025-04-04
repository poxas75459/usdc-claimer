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
    "45m5LNiiPWBc2uNxYNoQNUcaW83G9eHBNSco9Q3Baizj3DoDrrzQXPp7MCzsd4apghS674XjHGYWHqqt2chQwpWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LUqYLPGkoD8DA4C7Qfyw9jxPi65nWoMC8664Qp8S7GxWogAnVGHX7GjeKuaYLGzMgto8ja2PGP4HehZeQUnNdSR",
  "key1": "5Zzoo6hNpWwDEcqywURqDtSoo5MXGM8oRPr8ire7ZxLfxXG8QQHxzktbCgYAuVkA3Lh87bCuQNg9WB5fnmBduC2S",
  "key2": "3ivUMDCcV4K9KcrWLW1grMxwnJ2KzRQZBtXnHhYn1Ak3jgg2bPxFsCnagPxtFmUTWGSutz4FcZiR83RfpqQJn1NR",
  "key3": "ZZs1BApfLFh2NDDnoy4rqbG7JYvabZWXK7MtFDf74WnNqqWk3cEtRUwZ3gucBrqob9R67aHX82WCewH76HFptSP",
  "key4": "DvzShkGAK2ksiZcCVXH3JMwmf4RYqDtrL24k4mhvsydjZoR2QZMAM2DeWYVHiRNLAPnfXozE87g34AbcCUwdLMz",
  "key5": "4fR1ovV3R2GSFF5BeEm9bAjmG66BfxPK7MPwiSXQV5dyBZzt7qmJ7g2tM1jHWgmAbu4jGkQLHcewTj55hyY1BgAZ",
  "key6": "3y5QMdRELtQcMrzHJt3kHg913b6LhKZ3zsQ87eaYS3RifBxTnnRx9H3TxDXHrron1Ux6dNFxYm3W4FEdh4CQXCbc",
  "key7": "2cF5LnoRmwNQJ1FQpMdeLnqCRJxuTqPo1u8Tg5m3swjktbarE1EBf2ZLV3hv8FN49S7eX8ywC6bTGLjfECChGUEw",
  "key8": "csMSKZzd5dSGrpW9DgWRBRfZ3AYcx95DpuzU5ZSxniL8Gw342KvLcuDpS9UNFKP8GkxFJ75sAtYQaWKfVmw2MTW",
  "key9": "3tR2ih6Bw1ivUFZNXPyveTZwMWGiU3vgCaqEfPfguzunJLEzZBuYG1x4odvfXaeBgNoGR7gP3iNPRRNc22xyN6RF",
  "key10": "5WURfQdE3uts878ARrnBtwN9EmW1xNNzaPdwZbuhRY6UN6GVBiQgo8GpUDgWNy2HWbZW9ReYPFsWtg6JPqcyjkXb",
  "key11": "18XCjrjpZtK8pAuYiKp9ZHYJWTPZpwaanRs8foeEEPi9WYAgFJgs2MZE5S3D4rpcsVRp6nJmkCQd6LmZHkNkn7v",
  "key12": "5XdAcDCBpjoxDqbvs4kzkZrgp3t3it46JFgwGfQQ1vp4jbNyaXDWH5omNiGSVwU4a69h9QFXW1XkM5FTU542HA87",
  "key13": "2pg3Mqa2Kb2NtNs8YDNVrFXmotzz6sDVkra3NC4fp5eVjcso2LhavVsaxMRfNXrsFibapQcdRJecAWZZfmh4YA58",
  "key14": "5BiRKwW2JQGcRuaj3kxFtaWwUUc5avzg2Jsoid6Rmeuy7DuXKgkmn7KZNoNeXGygpuQhaCphojsAEnShFsPJTvgX",
  "key15": "24eVCM1NGCxm44MRagtyG1miwd1hdD8qZnRANuXuGvL7cN7T8F195T5RGjRae2Py1NSD5BFrbG7RfKMEECKz19Ji",
  "key16": "2xAKWD21GAiQoWm6vLF6xs9jjZzxYfUdVb4oUqvb1bxN4jRCDzvqSxtU72qCfK4uUWqD3atWo5XPAEiMqudkkKzA",
  "key17": "3HCdAV6VkJmWiGgiDkFobaVARZjRukGHnetod6fh1vgdBUescsAapQDfUcgQixRnmckjNiHpnukNQqeVJyNtJBZF",
  "key18": "2cUe4nSkehs77kESeT5sXSGQE6CJKWp2exQk17nCsfXPg48YDU9KnyPsDCr1xS68g4LvsvaWXggH9QfAH7ga9MrV",
  "key19": "F7qzknDgSaZ5En89keGPEcfyEqyJKXzqnp6GBNrCZg9ziLLnbMqC3rQ92sjG5rmjh74Mj9QooKwngkeTrJvAV2k",
  "key20": "66x8knZozpRc5ukCMMMKXUgJpnMhrwmBkciBeqPjCunmWsfbar1eUXHHtfE6xPTTZMNV9HjuMQAKiX3sv4fv86HM",
  "key21": "5u3qcJf7RenBBWxFXQnA4NqqYxdvBKtqGzbESH8ZpHQ8JjRiEpwawotZoLRqUWo9HU6d56seK9FELbpK23hR5xzN",
  "key22": "2QfxPHnoRA1bWiALrWStqWrWdtuf7YqH2cCqvfSiWm9DPwFbMMjZwq82wKh6t37n5xda5YKhm81JdGLW8dAjJLLn",
  "key23": "3kBgqscADWKS3NFFkwKjVKoRFGWtaXzLBJQHuc3XZ8Cs7tgiuG8e5DJRSe7iTgumUy2gjVA81gpAzo7vVQobv6UT",
  "key24": "4DfEKVBB3AY56V1HPDDk7mXEAGR2HzAxUjSdLbUmVZgnt5wP887hzoBBtcqG1bo3VD6HAmgAsxTBqFE8wGUzdsA9",
  "key25": "vjvcRKE8vNGxbX7kU7hZkdVfmHW2vjUFfoZfphdfPAVk9982swH76H9xfBVYVii1aaEA7Qqmowx9TYcZHUEpqvn",
  "key26": "FbU3G4m7Fz53QovWQXkcqsiBn4fqpBbY5LeWCtMDPUK8vVn5MJz3bvg1hWpDj92csZKYBWmiuakCGjTeGWas5Lw",
  "key27": "2ehwhtk4Bevyiw1sHw1P532UEc9juHJVNva9kTMCRN34w2mnvtVL9n8BG31PT1ohomAFVCcr36MArykbhDFPnx6u",
  "key28": "2rQ2YyfVqPbuzxnvCrQazJaBJ9jyNT5BZ7tqDgy1C5PtMEHTaVvdyiXWRdTBSTez47aerpc7GFwE97Xg4Vczp8NC",
  "key29": "5bxavJkhXUzcTynBUo5RRNVV9N1Q7ufD6qRc7Hq8SbCYQMqax7QFptEfcj4yYwmz2mkUb3xEa3xAL9LUsPJwePjr",
  "key30": "EANe5RVYwg6UyjxfsfVMM7opDVqebbBXMhV6Supdyd3c1ZYUnj2GZinb25TAKode72Tn5g1sfn5rGB6ZDyH3YFX",
  "key31": "4JmYd9ffzzZFSf6pve8kszQ4U76iRs21EedLPpwX2psYaczjD3KxzpyqLc3m2d67qBSE3wgBHvNXZWuShodsCtDy",
  "key32": "5rqBNq4cjzhSpQ3g5Wfwwsv2hEZeeBnvzokSPDzgLRUN4K2j7vkhoxZrCBA1YWtY7T46JJ3zUN7VA4siB8bLNK3E",
  "key33": "5r4WA1rAoi5xwyraHLaPob48g6GmgxnsTJHM7Z2Zvf8So4nqezGJ4VreLxYwfUvFTTk5XgdRQhyrfNR97nN7ggrb",
  "key34": "3WwukkzenUMbbsFX6uy3TPX5EWTpHBWRpa6RUYUNPFXRX13CKg4tdgtwq4QmqyyRZBYExttukc48M3VLhrQhCjRD",
  "key35": "2qxEQ5d2rMAH2acuZYrm2scDkB4Ssf1EjCDuKqC4vdCK6Tecd8paK6LrzzfX9hv4QymBSoKEuLDceJ9wdsFTpEzz"
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
