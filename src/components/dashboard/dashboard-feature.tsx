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
    "3aeybwWNAKCcJaVfd9vUra8twvTqwxRub6DJCqNLHcn7UnjJ3JuQdeiJJySWbUaSHV294LsHxXCGz9Qs1LXrZCRo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26UHdYQPeYt3cNdA2T4id3HEm2WYWXfbscmUwsnQ1KU2LgsD8XLQvR884ex8UmW8AkmAZeL93GdEYjEZn5dkgQS7",
  "key1": "XcqJiG2cBMXEn4bXbzrNLKNZWoe2JPfk5VoF1xs1am5PaEEz7wwx7MwQ1x2tAK8UHn1Q1VyhvNaASRAzgUcRDuM",
  "key2": "3e3EUrPYgv5RQ2WSvrnWmZ5zxZBAZR5oqEd3hBYE8HYgv3PXkj3Rvc3p4B9yLQ17nE6ztiXMfCSox9F5ic75m8No",
  "key3": "tZhcWc8t4i53buDHMEDRtjJpsTseRzda75L5occ5dwNVx6avgAJWEfinSvYcRUmvekiuBinbLjscfThrYs2Atts",
  "key4": "5rdXNSxVwFN1xxNbUF54Bq3FujFNWFe9gZXim5Wz2JZ7oCpqsssWbT32kxw3GNXH9WKaDXdRLEcUV1euiA5nAAZS",
  "key5": "3JqnthzRbhJMR2PDGJXSukCtwVzDTzv1ADuuDfPUZnvPrcxGY8Vxe25cLNA9ehQMTBG3NMx88sLuZTH8YWvTDU34",
  "key6": "5Q3aaj5o96EgoKwvDQh6Y3KnEDUzfUcFpqCa1wHUQ63e8r9vTDjj6FvTs1DfnSAGt9chtmyDuPgfPQjK7N1WhvgB",
  "key7": "gtsrGiAc83gMy46xkFymZrdLsiGogP7aDBouKMUPurqT3NPk2azY2edkuuHJm6AuuLj6cZVT1SgfJo5HT6JVPL7",
  "key8": "2wb89szUVvpAKQNp37bZzFvWKNsnDfSL7m92NpEVVxGRZkJ4VAesN5hynzbvzXnzFPFBS9tLa58zNYyRdJ8aMnoL",
  "key9": "4NGx5CSw5GnA9qgxcN88pvxPfssfDkfroz2ELiwbtuXhSGgQGGSLztxT7U78XmcR4bW32iShHpEZRPZjG7jiJ361",
  "key10": "65JFjXqqBbM2WtpXKXGQgnFwkV2Nnn6sdnfyrKx5CfRGbeYZ2rBsCACFyMCT3Phidij79KqPVfSfCcvmPhQ87ajm",
  "key11": "3PAiNWkVMC8zVKmBTdHbq1Ynf4U6uBNSpar1EpErFxJMxBhghXrNAErjuA8f9EQx9NxpD9WM23eKy3t7FYPwUGS9",
  "key12": "4zYrgVcMJozmfdRtHArnPiu6hSjuoxUbce8gfY1kpKBx9Bihm6PKu2tYho91wohHgUpWxq1ndAQEMvoktkm5gM7U",
  "key13": "5FMDMmKwar9bWv2Bsz4xbXSL1rECj7kGvrQSan2dp3yFLywekPzrQCGrh1fdoTtC2EB58TEgqT2tGCmTuEVCHyEX",
  "key14": "3Y79sTmuHk6SEneyS46Me23Fw3JBKRFdEPcDZK7LAxCnDcUrjLN1t5GioSAFBPgxReBJybzbT3i3uG3SHVsCuGzu",
  "key15": "3uFgVSHajTjWFq1y8cxYQq3gx2sG1JWYoDRGWrYcNFGmPGapZixRHtct9udP4R8YW4ftoNx7CKzL54AKojgcx3NV",
  "key16": "xpS3pjdzqu2hptyGa5R1XW4Jjawj2LsHMi8KhtPvZtqFWNjmACfmkd1XaNq4FfR9yRRV4ZdMA6oSG4ghFt8P1Pn",
  "key17": "5xvWuPWCTM3Ed6Y92eYZZeJznu2BgMor13DFH6rbDTJf9NeXqSNCcte3ZWT77wWsc96Nb56244bEziY2MSY1aeuU",
  "key18": "5YoZ4j2zjEuc1QDGVzzioDwzMokf8ijuaLWT4Mfe2eajgKkwF54wdqoVN3tphmQfSUZXp2E73t1oLRX3xyGa2P2X",
  "key19": "fpK3dBmBjJ1t65dkR6qBum5BDdUmQykVBmv7dEepW1ZpPqNbrdo19bGDMxUTd1biocqjRyTbZU6QGkK6ZVw2QYS",
  "key20": "2VNP7JqZfZ83p6GW9Wzt5gaaE5fMaELNyBowAvnhzG53ceVGbXQdKi5onuviK7jM2ULXZs5jKTuwt2sxqUeGFHQ2",
  "key21": "5ruBWgjTBW3ZfbXgctMpfUeUvms7d8WRLZ1E2BR7Aj37HwowFn1hvnw655Wu1YiBCZZLmnTqqyMx6AS7KsLui4L7",
  "key22": "awcJWFHem9XDEWnCF1K3bGfRJMBDkU9AFYBgmGpibGSRz6MFff9GbQxdeEeZmSfndPorwSPMMQkV4kiyfv8fq3p",
  "key23": "3prKccKAVS3J39zsLRnEcDFyRhhkE78S6urzGNjZk6uFvAdTtUHeUS6DTMFCdbRAvedTKduU5xg3psCcuiPvVCUv",
  "key24": "rDPnr6p63Lx4GqAdMoirYTRFbyQPB9rjko7fPk9U84D1Ma5cBaJS4jytDxEgxCUcfCQbwBfJfv7wLeG8A318cti"
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
