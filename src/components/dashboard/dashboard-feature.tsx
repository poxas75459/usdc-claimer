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
    "273YZorgiQRNYWFoDT9rj46kv48GWTAmfDqo96wGFfrCQ48ipvFFh66gMYMDCV27vGPLvon4baUJW5E3EkX6PXTz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63fjo4mm7Ys2tWcdkZ1HvTLX79QWH4dS3TYF3bMRfdpHayuTGCxAd2xUjc77GxaDJjcVBXeBjbwfwVnRsUmgRFcn",
  "key1": "5H6WQx63Pp6SDH9samdx2xhphZKpjwTqEGgEc8oZjgUQYxWuxubapVGp4eZiHETfh1TVYHM3o2MwhihgB8npCqJq",
  "key2": "2EnN772nKfCY5bKGjnKxakZK6qJEBadz95o7PRwHUQtZWiLxN1o85KYaRphca2JRZ5AyqGcRAnA27bfGwDfdsqD4",
  "key3": "4TKb5xnjSGwWB16Tq5mBEv2PPNLYQaBGZxfEDqGbReeJLNteUDKdnh3Ji3CWtSWG9mhndYCDXwZptjE8BwTrSBRL",
  "key4": "5eg7bskvKHs7yvc2zXCet2fWX5GqAPWh92ucqioRRXvkJLWgJJL8peu5EAkqTxiQmKdMwcXbryFWkcMseQiUnTGX",
  "key5": "21JUb8B9UtcEnTRjxFuB4qmHjhrN3dQf1wnAYnRuhxo16HnD2SNL2GWkVgwfWWqVWVjctRdFjBQi3DAM2Hn2g7oH",
  "key6": "5M7j8YjkKRuFxsHQ7Lea8BLM5bux57xvmbqb5ktuGE19WjMb9uDGAwjW2URX3NbJWQm3iiauKnCjyYaYHqvpM5bu",
  "key7": "65jf8cnb3SFR8RBQBXkgjJFvEjCiyMm2WYBe5X32PamVdk4FMwDjepJj24aF9wCsMT9VLHbovt4e7ejPpCGjZN5w",
  "key8": "zgugv9QPRGXwADbu2aT3Ytt52A5LqFGiEJVwSpRDAPjXPdKcd43wV97GSPiN4zcrQ8Ka8iCm2xXucGo1oyk7kck",
  "key9": "3t541SfoevE1kus42eXMCWixKvF7tZemiwBZAeznofySpEe3szr67LwxfV8m8evRXqf3XQdcQedMxkTHLqi9oLuj",
  "key10": "5kurVgVNVpcRrniDToubshQZTN1w65Eg6EFmZFEDXjecjgQ29VP2GvUb6kZ2CHDVmB2vzbaFv85s9oQtsvq11tKL",
  "key11": "4Hy9zGoCP4NK1UURhjE2gXWuuhKwbLFxkMZos4yzg2Vk2LiEV73FRubVdqpZJss8HNddhxQYzD6XenzA2Udg1Vjs",
  "key12": "27ygHjvasTpbbeiaxE7Ghq8NF8ZuFzsMMNZx7FhgLqEX1K2KKdU7xcLWv5scTisTH48JAVmLLqbaHNdxcVxkcBso",
  "key13": "2uka1wYHAvgFhHAp2dXuFak2MuPvdPAwMa24sNdxRgCz7c9MCeexQ3yKxXayMfMnvZWAKG1Q6sVLtxZfE6G5Lnum",
  "key14": "553T4QqUBSgDy7SaxUkpJjjRnn4DgQKdgCGKG8funwiAb1ep8Qiqsu57xdV8xrEEofi1SjUQcFrbH3ttR9tcJW9B",
  "key15": "28bUDzNzKRgs3W9LzyvG3zSQr7auz7JxavdpmqNAVXSL88o28ytT7aGdEB41Ssd7De3ErqE6MVz8dQq3dTKqbkdr",
  "key16": "99WgVdWkozJ4YMPYXB4GF513EvbBHyMoQDSqcdfXSGiggQwmXxmE4XcfZZZuJ9vNLeqyhUzSU5cYWhM6Yu6tNMu",
  "key17": "UYWFuRAJpSVr1wSUEHHJEuw1MpkhEa9Vx2PPGAe75FQqoYeCQyv5WVv2o8rfVTQS5QJu9wquGLm1VEh5P4nXEJb",
  "key18": "52R2XfUSiThAVUFgRSeLqQF3o2hHyym5rdZLEXqdT9E6Ufzu9QqaWBdQhkP3A45oAzdCiSB8Ux8vLdRn6p5183Xe",
  "key19": "5dZ4k9k5Rt5f57RZkCBWLkJxS1z5GsmRUCzXxSpsAvX8Pz4PnqL7zk7KYt2oYZEmnu2b4eCmKufQAewJtqjs5eSj",
  "key20": "63oHuJMGbTVADHXTQgJY4kXkCjwxmwMcdqLrBB4rBnN1Bpto2wq4HgzB2dpd8mWxVTuy1Zfd3ZZNWBS9Xk2GfVvT",
  "key21": "yevPmpM6K6tztjbFGtpdPwUhVjUXENBc6TMyLb8Ap7QMTi1vzygH1VuKAr3oz4vHWGAra93fTRvnAJG2QahNghd",
  "key22": "4h5w2zUTrQ9i2aMMjbJ6X8ixdRZeiEkCeFBUXBrLNR7uMd2jRWVM9be9m2Sss1c5QWz86U9BmQt8sy7vaBqpAuvW",
  "key23": "47YiTDfxnfSJba6Pr1iPbR6BCvuRRfA37wSQSBQo4VXCNtngNH5j2zKhzfpmE6mdpixyxxRbjqQQrjnsijp1yXvV",
  "key24": "CGcoMVmoH6TmmLUByD7CFBtoYxmHrGqnQ8M84auJvQptnRMr5RvbYLy2eidkyw7JLX9wmYxKhTLDzH8y6Cd4gKv",
  "key25": "GWvh9eVPYTSV5y5W2NsNZLTWDRERwj4JmdjAgWWcuQroA1oSea9t6qWvcT6BukKw5n7WhiRZbE2u4A8gtos4CGR",
  "key26": "3YVhy7p6ebeqkbweG4tcr9Gq4mM36puNRA2RNJdNqqK8EtGkPhrVuGRjYMeHj5oiM3BPiLMQVGASLjNdR6u1SHhK",
  "key27": "2iWHGWAQvqNbi3ekFKKjh7b7WaMgK8Jx2gWgUDeQxS18NQuGzYkdzEG6ZNqg7YwLQUkFU6L627PsP9tLoJpVrhhz",
  "key28": "3M7zUbiR5PER6icz63gcptkRrWFq6itohDPLNAcNW2PNyjZVRki4dbL6k3JhGTuSow7Xn33E5gHacYJQszB6SZzf",
  "key29": "3TQjGFopnNnyw9ce6Vc7Hx8KQtafTr7RmwtwtLfspKCEAZMqQ4vBfAXv4R12bVxDwiwv87c1ZGTfkTeyczM3BWCS",
  "key30": "3ZjarmVHPCwAWwZWj2XLA7Cs4xf4RcptDk9ekCKbuZ2qMPRHcVz7hKaFgFUXYX8GexrM6h7i4avBrUpmV8V7A3cM",
  "key31": "5ycUqpmhfXZggd3Dcdbi5ZQDkjKxdq1t8vmfUrAn4MFAE4pmbRTUQAuNwVxgmY9UsRT7Vf2HbB3otqLAvgDNodmv",
  "key32": "3H2twiev6grxp3UJ5nD7JpLdLtH1mHs9E5BS1SjAniRNxFbWX98e2UCLTQwpmMYXrqbXFJaS7qeEuX6aizbUUPnJ",
  "key33": "2VCVnTEHEW1c9F22vhxRyDN31dye2Ez6aFEt4zeZ9T9rn45M2s7RuNv8sjuLBFQ7YX4pZe9cmNkmxQaeGdu9DbS8",
  "key34": "heWwhVwWQxJhduK7hV8yz71jWMPhdSKy9TVsiFh2q8gpsQzV5vu5mRNmtyXT6XSMvMM6DVJhJoW4NC4pUEgjAFX",
  "key35": "4GjmW3y4m3jpBroeiDWAznrQCWVzB9n5yYmBsUAMFSjj4FQ5jmAFKrdRUsfF4dKUzSi335nyN396uCbuc7sdokzd",
  "key36": "32vknFS3LWpEuPNJ9KqWxySCRNDgrxtLSLVhgpNaRVgAmw2NPBancKv7QM7XRo66p4MucAk9zu5MqR8um9QtyFwq",
  "key37": "3zXcqHZNo8PNZJ9PzQie9ze3SgcQaU2zBDMAhmxRR7iW4KZknpedbfjQs5pBuT2mCzGacbeqLK8hF6aL65BdGiqk",
  "key38": "2t6DUBNsnyYzsp1q8dVmB8pNfDRtbMcGVwny9L5EVPqVvEazMFSnC4gs7E1atNJsUg9rL6d32hM3JpXsyPGGQupC",
  "key39": "2mgHp4W45PiqdiSDVUr82GqbRqo4m6zGPwqVUpmygVXjmnLDA8FGc5vi55NYhjnPW3FmxhMMNUx3tgXLe4vWRSpG",
  "key40": "vbz321NfXWqRGwbUoAzdTJW9EvosSgGmNUUHurz9hUPk66S9ZmeeSwhGUCETmpkEFhQHHzjL5ie8waYpbCtQgPK",
  "key41": "4moxTAtrAnKPbM9gusD16XYGboYShQKjgF4Ki7ZeHrDaupMoUTP8N4xDK5M59HET2tDzdwRjpUnUoGvRch42Dia7"
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
