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
    "4MjsBM1Q9EGKHTkryq1nF9MCBhnuuV2s6VofK2fFbj8kLCNnsATiXZVv2bcipC8CRmAtteahPr1BJcC89edmuPBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AMpuxYQ2DFjHfPgBQorSnFurXJMNTiWb8mxfYHXSmfx1jhqzBNUrzdJzDcyV2KqF44w67uWpkkPW3Vg4vDTjnFF",
  "key1": "24gKTNE2wjKhX5s4CxDR8c6mMt32UheW5QjSWjDCALBfU5E4MGXJV93aVsAws4kbz81QMvT5rJM8GF2ePQMVnagb",
  "key2": "42a1WEL4FHcM9FDUFSAgJdLaXhUsUBzaAZDKpdGxyDfbkGs7vrPNfcYqUd5qXgp12CUuE46qgGgR7UR9dfbCu7ES",
  "key3": "4ejbGe12bD2t7jZbUddQ6pBzTdEPxGgNe1tfv3hCipnhVtFkQAUdyXzA5MxXxCJVC5vJoW56RqpqCMPT6KV6zkav",
  "key4": "2cGKbKwKPyiCos7qcVrFJhoLVV1os8kVPBuJEamAtMRCrTjX64Y6BFyKXDpoEXJ2fx7U7Z13dGK4CiY9X2FnztPd",
  "key5": "5tLkm3xVNtyTXSBYMFymQN9fbCaLULtFJk3JiAK3PrYjds2TVXdCjQxDL2XiTvAFKeehsg5eSqBWP8q4DHGZ7e6F",
  "key6": "2yaxPAkDpky6KR5JKTXMwdifmP6YHYXNEpqFXULY1gipuqge8pVqvL8RLhLcoDsSmGwxcUs5kWcE3f3fctxjhTVA",
  "key7": "3KHpbUuSZ5nmaexXTbauPr8RgZuniJpV4eDKwckrVsrKFx5SAdRneCQJFiLT99B5XBZA6SDetKwWmnBcme7EaTU6",
  "key8": "4X6DYkCUMuLvjqzbfq6Kz6oBKPTGPiAUc1KFQzMP3yvxeNV8zf8rQvdaWzyx8fSKGfuZAaVkzzkvPS8TgtnJAz5G",
  "key9": "4zGNKBkYK975cuLVihqdNc9RgU3BpBdgVCZPPdKviruGmG9cVNmSSTGXQts7Bko8kqCEcm6upPhfDZYEhKGLUHrX",
  "key10": "2eBizzrFEavgyckM35L1xYy8ogEQUgf4LvbgDj6AkxBKUmBXPBCVfbpPykLTNJdHB6xrvMyM5pYze12ZTwp9iz4q",
  "key11": "5P53Gdg9Av22pZLJQ6QUvioJ5tuNJKbPiHmQJnMZZesjnzPnz44eBYpZkr1dnPNENNAvJYLg47kPTJYUvQHgUmtd",
  "key12": "5GC61NmXM1WVdTN4SjckGbaLwBTWG2E3TQGqDszbPX3C2oHEedTGpPreVtKMqct3g9Cv4oV2dr8A4qDFBBygkvRH",
  "key13": "gy2t7UX3Z2mJVFpHw42jpqJPaQ1u3dNz6vu2LcEyoeQFLE3TTwCgBFC1dsCnLoFU7fnfKHLnWig6NbfFRxYcKEw",
  "key14": "3C2NnUGGUyE47qZqj4q9G8sWhvfQ6ZtpuHdtsBCTzCtAPWg1thrkArzimop8uhZT4tVseLgF3ExSKYPUSWeqRGCn",
  "key15": "3y48NDe3YpKRDpxQQdCt9csnb8ZkpDJ6pPTeJCr3RhYX2ZKLVoS18wmTdg8i3CxiAnwbRjT7jK5e1ojFDSA6yHmQ",
  "key16": "5qBSH3ntobEdifamFNjgVskJXLYk1izoL139C9kRS1N13U4upo6eD9CJfUWLNk7spjCpqSDgNCmDp2GwDq4Tzu6t",
  "key17": "64htoKYfbNuNiXpudk6bLYcbBEhVfo3aAgKRcCQ5HpkDCZ1eaixKQBPj4GBxbwfUMbf4zfeHBFBxDM5Upqc7HWSy",
  "key18": "429M6iubuVA6XdgrhaocbLehBnUvwvnhHEow9tmB8ae1TikNaer3QwSj1qK5x51QufReuJfcAQsKqPAQChKdysM5",
  "key19": "2kptCb9Tb944jLBrortJL66ZEwoZ9zFioyzgnuGheKCPxJE821QFV3bAuCzCCRzAigdwSyEfWbFKQ9Xmzx4xDSfM",
  "key20": "g9yb5dwz1jy1ULbZccxnmFBb4amsQ3RmAoS2uLHuPE4Rwy4QUwbmVLZmUEXAdSdSaCJPZs71e54RwQCssg6D5Vu",
  "key21": "2MR3tstfSjQdmhtdXeWBFuSFxBNeFoE5MCqYQWRemDybBoqDXRJZSdfWqXD4ChxowTA5Sa6b2UJzAyLvTFqKotpm",
  "key22": "4seZEgEChMK9xTJu1BvgetqbKMnQACUAQQqrhSFVLbYLTdcCag5EHsR412iqj66ZLSejmnMb3QUP5yJv7vYGsoYn",
  "key23": "61zXH9KjetuvoBtVvBh1Hspib2DFGSPZZHUuUGjhwzLFFTkfFE6B8wp6dZncMwMf75tyqrpGkJGEpDrbLfmhYMoF",
  "key24": "2uj5mMH2ti6DTjvEeh8zRxE1HN6mFbaq9aHKUyAdqGvxyTS78oqNCJ29yWGEejHk1hB26woT9gCARUM7YZEi33MZ",
  "key25": "4YgbHYNpp8MsUPdpUkoxKg8Q5sXVL7c8VBz7vuwCxxXBERFDVw394q39SsXeAsaZNyLtcb9bGbN9yHYTQ3x2Mqmf",
  "key26": "5Pjsd2GNtS2DdiUhgQEpkRW2wh7GNhqEMT7LuZEBkiLbYCnCPq8Eo97RFRgYg31T4eQHYN1DyLc4r5Kv9j1dF9NB",
  "key27": "5Q73Zv4BwbpWmLKvSkDWRxFA2CNZzXtRB6Lg5CBq81r69a3tZhhUHPeJeFnBDjhx7W6MqCgueQ45kZTfgYAtvg3D"
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
