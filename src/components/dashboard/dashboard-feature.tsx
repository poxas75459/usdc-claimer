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
    "cLyrYeaUPLc998ChWH38tDX3avN6pNMXV69VRQrr16x7A1VZsFyz1NLAJwimkVNr8xUynNqL3dj6BNyujXGMrUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YpYnVqxPHr37utS2efDWKzUu75NdrxpvzzFw4XKVcF4qagvQxJMgZLrZtiUbiKCMH2JcgBFtqHFsyiuwUp5qEqV",
  "key1": "31NiEnWkQraCwxBEZG2dMrWidgaExkcVnjBcpwP9E5afRZNmPhBtRVTryNfDYTJUF4PdsjA3sC5TfjxKUEaPmx5M",
  "key2": "f1j668aTefHq8pxaFjWNjSQnZombEnN8prkRbwCJsqQCcHJAVoYBwhWngY71ViYRVqNhFQkDe2YtkP4XnHGcN63",
  "key3": "415VvFsrUeHs2SMo8MRpYxJo3e4pPW6Cxefe35hBkn56rGo4k8z78B7tSJwPftKpvBewQDzrW9TNRwstUeD3ifGE",
  "key4": "xJh8349mskAg1QwCWHMVrHpH5oFAFj7fNmV6tgxf8oztx8kb46h9AcvZVEAG9UwMvGHPqYFqMN4rUNhdDXkuuGy",
  "key5": "2bu4kD5ZHJFjmkmpRZB6hYgqP2FGnZUsUbWBSBzRUs1e8LLDQcBLDqZHGRkC3LkFFqXswvpcxLr2uF9d346U5TRL",
  "key6": "5WqDsq9XazDeHQSpStb3jJNRseGntDTi4uhCVeV1auYi8v2yWoFgmLYC9kdEy9QHyXBrAu6cs36edyg7k6W6xHKU",
  "key7": "2FMVh3CCHcx38q8AAY68hkj91WgjArGWTrWczULbddcknEvYXu34UJryuxp5GXE8pvD1n4juhGiYv2DtrLZRo4dS",
  "key8": "4FqD1LjK8DL5bg7xqDRit857GccPFyRG8v1LZgLXRggBeMfKUTU3FvwJzeuBaE8D88FefaS6bxajSSBoj6XQfWNx",
  "key9": "3aafzYQC6nkCgLXPJmwxNBrwiLHKrbG4LUV2oPsmGqLBa4AjHuoHe6JLSmzyMoXQZDC4pErBwcvQ7XZ2cGYzfCeX",
  "key10": "2utfDnJjYNhKmp6YviQnzYaQDUxqGyyn6chi5iZxvoZL2g83APTRZipsVRm997GDYU1DdaVZuBFPXj4DgWuSDrwa",
  "key11": "2vTrnvUrd6cfjyqAAEDCMaQanH9wBihiPV5e7YTfe8Wsq6mfVAWLf81qntxygu45opqg2avdxQi5WXwtuurVs4HX",
  "key12": "4AjXroiTcRVNQVKr82WPawA39Kmock5koHRMpNf55hNDSViKgjKZNkF4p7zcVnrSVetW8ZTccGU1nQbn4VHfvpnC",
  "key13": "66iAJBzzWrnQnHfjkEZfaCaNB6LadxFANz4hjCJyn1GQprzaykqJuD4qZsL7DA7CH13v8iNU7tWra2QCeciu9Lra",
  "key14": "63ifmmup53WLDeBKRxMP8DPdF8nsnUGpkhjVQ8wR2Tps1V2hVEiD65kA4wXDaM1bqC98KX2oG6qEhfDkNhtEAA5V",
  "key15": "5YcrttoqVdbZ4bpw8qZMJ86DFwrZQwEVA4ysNM87gX7TJjKn6FGp94hVqWfHCzC3TCrtgbMGpaus6TccB8fLfbCu",
  "key16": "3Kofb1N1X66dEFx6TQeMzYwSybytmVoJmB16zAVnD2iBj2GG9hTrtyZcyo8mmkkodF2c5fVsgFx6gUZmqGnvMVJ8",
  "key17": "4au3ZKqJfAxixBKajamLmMy7xEHGBekSBaQHYRiLJwVsBBNooyyBkgzqyAXDyK3oHoeZYfpouFU4KQ9wp8WpwQMz",
  "key18": "3KH3KzwCHXFNEDmimWvHBUbZhcg9nipsGMR3bupQYhCaSfmS6HLDa2jvYJL2QUnruuybj6FGoTtjk7qSku482pRu",
  "key19": "65RXSrap5nPsaG5RpUV4SXcbTRZ8vgT35uS9bngr81YhAnzhVFCESTbD9m5kYhtPCsxkMrTgX8cpmMVUPfsbvgNa",
  "key20": "zQW94AAvr3ks9Uano3hyjkLSS45Yc2rsr83FemLqhMkmY5SpvJ66jTacwF8dsFFZ1fSCtfBLC6ipmkByWcaFgyE",
  "key21": "3yf97Srv94zF5w9rLtbgGc1dzXq2kizYsyBisATnJ7GzkVpGrChsZpD3s2voLhxUAfxhqDZCRrjFKkBVSK2AySSs",
  "key22": "X9m4qTEzcALVkca7g2XHahFmYXtPcuUbcniRa22PLxWNZ231VPjFkNG7Ep2PhDkcu348qrLiTtSawDxNSpuiozF",
  "key23": "5SVCcALeKouYxrh7hgh8pVXQuDqRK3WSQDJ894cRKisaM9jCNqXXPamsjFAbaiu7JFW4j2BVwgDcFULjYLYBR9K3",
  "key24": "x1V7eMnx1m4Ks4ayiqKnJWqYeTGRDA86tstdjdNTZmf2C5nChghc6HD9SErmz3C55FoCe9ZEBavBWftFTc9atem",
  "key25": "5Pqej5BEaoqASv8RhBGN8XCuG3vf3bUAoHC8XsvqGBVxMoSbLZpP29aQoFL4R12XjMcD1q9bZ26asvpqo6GhFd5L",
  "key26": "3FiuGnko7QhtsAv15gGbuAEELQNwNZkJRNacUmtoVtWbmaH9iBKupTEVkv9iJEp2YJSxQApBk2S1NCnTV6w5g2wf",
  "key27": "5mcGjWGyu2tgpeSzQuHr17gfw21EnY8KyERP3ubw31zHP9g3hWAWTxYm5s6mu9Sjt4txhSWKZW1K3bENhMqoMi3h"
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
