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
    "67dekzWa2xvC4it8ereXk4J8kboD9q2oNN2UK641JZBDfVfvuZa9JcfyUhyGc1f9b6bmwg6H81jauu2Ai9QhDaGh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62KZvecyyNsfUaGhZh84PrHeXBQ3arasMcpU1Z1x8pouoCoE4MvRBhFejeEbEbe7QLUu3w4uLgZ12rabD4yPAx2g",
  "key1": "3Td2qrFmuT3SeTcsaj5MXFCdw578RgLgToE2JQmas89WoYmZaFsBhQJ77Lj848wKSarje2c4e41HGAo6uED4oDr8",
  "key2": "32d5oh8A6L1qhhr1Rf33GJ9MLx1gBJsu76RgGjtEmAmGbMMzrxUxpguRYL8GPYMynGB71cwap663LcMM6Jb8bYHg",
  "key3": "5x6TCG9k2rU67WechPezB2Fm5PXp5jKtUng5SgVkwBHgrDMhM4FkaU45uNR6uyoF9Z6Q5UDWhRB43Ks7cvTUYb5K",
  "key4": "mYniQGBmnJi2dH8YrvBtFPMQreS91RkgUd5ikaAoARaCHfCt9gZxELu27peVFghuCb72dWomZ1ajrWaU4HpmQzk",
  "key5": "kiwbQZZkANNwB5qiQ1EvWquN4FuFCf4GRxjFT4xLkjAahQ7JFgRuCiQXQ1AnJHozmRGzdsxLre1PZiCr9iBC4ka",
  "key6": "3pC7zwuvJoN4U29UdJg3e7drFb8ADcEWGkVYa1crMyDnVDwBa5TyDx7tHNXerF79LE4EFEfAWsSF8gcmmha2e3m3",
  "key7": "5aVBuBE5ZfTTAva1b4xGoGqjtcX4swykYRFwUV9uEiAF6FDFoc93BnJQ8aZQkoY7FDjYUnBbXnnQt51Wc4Yb3s42",
  "key8": "2qtLmcngz9t8R1qBB78MBuSEiW5fwAKuW3HiBYLTxkPDi7FBknejhQ2SZF1TCxAvFXhMxzHkfMfbBGm8UXxmMehv",
  "key9": "1RuJtCjuRAUmSPKXzCRzFTsengT5mJttCZ25w9JxDWv83BuHRhzK6TT3e29DxcXgFzuhZrLMwAnMALNKvwqZJa9",
  "key10": "2oLbsY1ejpWYTpJzVHrvbu3fFkv79s9GQeUViBLNfc53c47uCz3r3rtKUy7ukB4AngE3XoAtg7AGdyt2aPxGscL2",
  "key11": "5r1AyfdE6ZT5veMYeD8rfydAwX1E868HuGE17LhBwkLz8iQW7yrDR8baRSw6R1ztuTxHmhBRoFxKmSppCtPrXu86",
  "key12": "8wfmHu6uYJJxRsW2mb3okgVjcqytCsb1cQW8ueFZ35AyY41C9ffCVu8Zk3K9D7ibZCTfJEXj2wAf78WgB6JaomV",
  "key13": "3GvcsDxoWMnPwxFMM2Xws51Bc8Ue5g1mxHJei2qrtC2rvZMjfPwW5YvyYiMJhXgfFTXCV6WUDa83CCrw3WQqy9gX",
  "key14": "33RA23yNTGaSJNK1iVTq29cqXEgt94WJQB4wG8H3SsP8kgBeaNn6RcLgyfkFar73D2PcVJCkJzskZYsu7FfsMEhh",
  "key15": "4g5wueJRZESoob7TfUmWipUtSQVsduRpYR59DPkGrWh3CnhftLTdTtPiz1Wndm1T6EECjptBk4oqgxSNhkR3sGg3",
  "key16": "4jgCMHengreXEyDdV3rYBJDucn2p526v3a59i9fc4UV9NUTbyo8nu22ybs1T5Kb61BYCMVLBVwQivSxQwRtzXPga",
  "key17": "4KxZVHY96VbRVWjSg6DBK3bMMsyfvFnXrKXuDpBi4aLAhvV33WeY5jH9n1QxCo9RoL93X5G4SdDEp3sc8gYehrSb",
  "key18": "4DtsaJkG84LoU7GEdNA2y28UNSGNY8UhTBsPHeykYu8TNcrT2sunAYC4QUHVAjfWG7t9ML8NJHQ1khaCxZdDyYR6",
  "key19": "3YGoZ4viXePevp3x6qsVoHp761XBdBWRCJxbbL2uKpZrBzHwd2SyEXnM6QmiZLVdyj2kVspX7vJR6M5ANkVP6Z6J",
  "key20": "5pvTkSkX5Gr2xxdzjTTS7aZ8LBrBZCbGD8dksHnYAmnG7STrJvb94Fx7mZH9pXrY82JSRZoqnT9WpSJB3LpAtu16",
  "key21": "qwhRY4vZ9Jv7MCSnZVpkrhpu5ebceyvuvXjkjcseYUzea9i9a5fdqQgGkb8k2BLfaZmPSPnNEfESVVvq8APQ2Fh",
  "key22": "5mno8cq88jVF2veymo79SQjHBRgZRxqqFyk29jb7MwHiz8XLUTZk7Tkzzowv8oZ5sHNnSCJzBXcw7wnV5UsFUFFq",
  "key23": "4NMWBuUbxmGeC9JQQv22Dwxa2CNcmRcHXHgGwKCJD1SWpxpfo5ZJKHZ3tAjsvxA1PVy2muujnTDXeVc5VfJ3Qpsd",
  "key24": "5GNW1HLjeJN8j8XQYi7h4oRcNfMyds4nSuBGPz4vEWgV8piQVfod3RoVLpYtNuGHtjsD7qkn7ksJPfaoWZpxTxaB",
  "key25": "Rw6Spz31Ut4uSjiKn2VAayURPRbU9hg7VDDNfSR5VPzBaQsiSJPckpfxcZibjqLTUzeRJpHwXXY8pAsFWRPH8Ce",
  "key26": "4bERiAFysMeMHEsXYpZK2Rw3dr2kV3JwtEK8TSFcNeeZMi1DUVwn8tpgaSE258MbYE5wRaUT9MGts8t8RTfVTUVt",
  "key27": "mxJ8qCfP7xkPBL5HV59qyBpswW2d4PjZPBmwALERNR6Gj94tbz9L3kZVhSy8At3dgLFCVki8RwTG2RDH5pgX2R6",
  "key28": "5G3oycxe7N6n9NvbTHMwcVQ4ct1VwtTMb4e1Cxxqzv1EMqgNtEt2iE9hY9UGkqiG98SVqsAFSgWA7CjQpXQ5HRGY",
  "key29": "3Y1DbgAxuq5M2onAEbdNs3cPqMMJqzZYSje6qQSkFcmrTyC28UUsSSUVq5MM21eVrV4qgcqWQqtZcYdDP5MDbtpV",
  "key30": "5dqHY3o1cH4CRDYq7Ww5GNmCRtui9K5vYfGFuu97yRrpWPSuhnjBBNjTo67vxjRjpnJPVb3vumXZ4c3dksbETvc",
  "key31": "48AqYF9ASwaUHjoqtx9MtC9rWWQpSETGby7Lryeea8VqcZRPKBuuw5ozSNQg3ksg6bFERaPaSqft1DnZvC4gQAxv",
  "key32": "5yWXNUuM8uvfcpDA7rcALs3YdszezAdAGNwqybiVstZUxcRpgxgBuKPRW7Qvh6WF8NuQSuodzgotVvqPnKtWBWaE"
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
