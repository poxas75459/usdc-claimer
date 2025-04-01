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
    "oQqjL3MJWzScvKqNS2R7yWWjT6Pgebnat3MfBoGmfiw9LnDTYqRTgHRyzf8gn1G1gWPPu2DweQvpshi8sP5Ryhd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oLKmP9Zd9is7Uw8ishjNo7W95sctVK5RcvAoWnaf7So1zVQQcjjeVnAvJUqNV67fpfw3JgupwVVSaX5jPajZjEr",
  "key1": "5udfFBkECTRryTumkuoLUJThNaudG5DpVJ9cwPW99bvFJdys6wjKu8CKS9BbyE8gsKzjetPCEpRNrjRzsAjmcgEb",
  "key2": "3Ubnicm4pAsPSL9sQ3qdogiBSc8VoETebBhGyfa7VUezMbdYLFt2aPhZyYJWv5AQQHkfQRNiEcCTdZmj4kVrNCF1",
  "key3": "2R6oBFus9NMKWYQKLG6DizuURNqcAuLsUyMVgm2EWGm4N4pqL5miurqHPqapc1KFH43uZHkPA97DNJAWg3Gbgv8S",
  "key4": "2DziipfRRYosQQuPkhQt78UY1hJP1sAynvG5KtcAGMXoEQGHrPWFprAWQKKxtx1s1brib7pM9dRe3EWHeTCtePwz",
  "key5": "DMYbdbpoJtQcfucCuVh11Suj6jUcV3nZCpngZbfBafqoL9sANkKfrkD2U1eKDvFWb2Vjkw53XFvXT8pjjoHu7aH",
  "key6": "4xM7rqqtJVYocDU5w7PY61YhYsQtnbjCGAhd8ez5UeQTz28KPQrDLYaTmDkFogBouEWKuLpzX7HgQme6Aee7MGLt",
  "key7": "3ovYS8GK7nhW3U2U4VgU6Q6nPVVBE4gcaeuYRHuekJqK4Hm2pn1yHdZN58pawhNMsJoJeQKSruZwfmqDM2EMPVng",
  "key8": "5miHHcYQgsC6y6A3hxQvgE1jQibCCVPTLsK47vMnnvb3gsfw3ThwkPm3qyXp8S6379fzLwKqVjfQ4siabkk15FQc",
  "key9": "66VoLZgSoDdYqN8DpTzi3WSK9gywjpyrA3TygfcvqPA1izoPpvvMg9e8z3rQjDhfNxFogdjap96dhcVx3B9L1cSF",
  "key10": "VRREcsP1BCfxwq1gxLwUhFTCiYntJ6T3FvvAAvVjcmewkCpu5jBn9hBhxRUVXH5LznTfVs2qSby6eGY5vNLUT7D",
  "key11": "24BwzU23SBc7sBrJ9qktFSbcBXs5X6WVA9bM3fDtn5uo6dbA8s5szmE6EYH5PbwGvuVESZYTkJN8APVKzSurpw6i",
  "key12": "UXXDWGEX7pjuPNKGkNjaKHD6SE4Q2mjHYDvZzgNua3tbPz2WctBt4XTMxcvQmx7qGDmtXAENvnomL4ASKDtA2hG",
  "key13": "2f8Nv2JXnYozXFftgHURYQrwtHSmWHnegfFVkfU1jhzmzoUUieZe8xGcELVLDnSW2HxUop9QGzRjz28E494nAiDh",
  "key14": "2Kh9UnApKBkETTaTgQy2omXWqzMoawmUrwrSVKDkWPAuo4TAVFoqZp7myiwYDGTqyvoTpyuNpWPa6f2rqQ5wXPbT",
  "key15": "88YSaawQm7k569ZPj8hvKSNSwoKBQY5AETfRcpNU6NAYD65bnNBpWf2bFfUjqwwTUDgLnTS7xg59gqvRb3fdyzH",
  "key16": "2J5oyzUuDSx4DCkukavB65REXRriNE8wMquwPx3fdnjevgwd3mjt7qqQKJn1BNwhwArkrSNguLTSUxxG3qyf5xzP",
  "key17": "4WL2mYH1vgsqUHfbLXAvUvqLMmg5VMcg9qP5uQrvGTP7vFweMm27EQzCAddKeStDQ5YnM6i4pDafYASdZCtYkKfk",
  "key18": "59ygxBSgXXv6tZkfG7guBcjux7NteugwmGQtssi1cjMX3hRCRVzZw8SaA4a1y5NZX3ZwqWivKhhXwqxMbTUf3aYz",
  "key19": "35KGamg7emL5BVwm72YTz3iUshzeQXT8gcMaw8zr6jL4UzoyeXcjYGiyUUVEfQwUCTyjRw3rftfYwXQLq8wbsKhR",
  "key20": "5WF4hp92msKpzomvGmcm238ToyX5qqTEdrGixUnipNVESRtJnoGSC45UccNVkTeYQTN4MovrwWS9oeGoyzXHeYae",
  "key21": "4Qy381CJ5CDVgk9kVPGQY8cV526qemvcwvZqwhSMs3jYJvGmLZ48xdnRMSe1tutMELxrGptzdaYfRhrepQnWxLGd",
  "key22": "Vd5NFpYhPoTN1QaKqtmQwe8Q32pGuBaGyyRNaFcaMzNiYuxNRJEXjTSnFGidRAE4ZgThArgQ4fp53fwVBk1quEV",
  "key23": "3kt6sjYG72JNEK5DUnNXkta2MdU9idXjKFZo8xRVv9PcuWQz9NCWroDXRcKxWYiXrGQ57JJqmcYpvLnuD9yfrkgT",
  "key24": "2rmpX1ohbBCKWBiyN6eGGAX1wSGjZuLU7C7NAEep4jbSDfHt7cwbDXNZXWiYdAT5tFZDNdHSqWC95sKcSd5PJNKn",
  "key25": "2gtfoM5Ms3XRAUuH2aWULf79ZEfHEeK76gYWWGKBgEE8UgZpc6ihFXbnJNUqFWJbhUzTirx6rFqAmKaL7JghqHge",
  "key26": "4jygsxBSQYt68HWDnpsB19y56ro6YovVTerCPATfadasncdN3gH8Q7tAhbyNG8VoMmVeuKfv9gWTkvPpnNC4KEXv",
  "key27": "SyfTNd5yht1gEwYzD6YaTDPUz6QiZRfCR5gUSEZiMb43hHSx6CyrzXsTn4R6cz8GbGtvHtwdvy8BZFGsV6SXABf"
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
