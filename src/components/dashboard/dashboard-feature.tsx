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
    "3uMuQsATRFqcUN8RrG9mcDSRiLZoJmiFA9gN8tCrSbGb3S4CsTxMxyivzD5fS2uZBTf1KM3P3j8bfx3kLsHQDhbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ys7zD9UuSvhMoFtQwd3LgL47jDNUgTD48KLnvibP1zKGHB2JT79PG2uQeSAesS4rNG5tyrHACYaJoiRHvTed5Mn",
  "key1": "26daXgFg7jkcKqKHKiK1VCSsdcTbFyVSCriWU5A9GMQxbQQRookj9rxV3MEQskWcHkWkG5gpXau3BMeZksYEFSX2",
  "key2": "PtUKDuRcFHGeLavPNcBDDz1KfYHGkw8SxWphKS9ABggHgtvWC77QTZNm8DHjmvpC7Y91EUiNaWh2dQjMUtnLyAD",
  "key3": "4J9agJAEthk1pX1faSWWx7tu9dpfcptRi6bUHDCgeEumTEo8nwRrBC5r6xoHY972KJ9WSebcJtVtwdUUMUEykZrd",
  "key4": "5RtabmFS4N5cMgmbe5KD997JAEAhiJecuYyY4EobJWUZpJJwkGwEn56Sjuknu9bkJ3fpx4y3vg9bmpmMWoaHK9hM",
  "key5": "4wtZeJuwDEJAZciS4pJWTCgLjLu6Rw5ned1oMmbaiBrb5PNpyXd1yhHfw1dvWwixgudLmksGdEoqoQYroCTejP9t",
  "key6": "37kJidC7LwBuR119DjJyp3wAPU7MHK43ZMRiwjSWg7RhMsFqc4xL2ad7mJYTSitej3NWJZFaBYyNBwPx2UogU4WF",
  "key7": "2ikEUNiBRQMTD93UJktwFxD2quBFLdgoSQT8pvjMUPcbgCFFMzKjGVQoahfxBbS6yzHYrccmMiZgFWSeSGWWpjsd",
  "key8": "5GEon3EPmnRvazUctsToYtEPUyytNupYUAhu7g9uYJCsomx8XAWCPVKoJEc7SoNdbugdWnEN5LzVvtfzuxpmUr2g",
  "key9": "PpWWBnCqZrpHkgmkGAx7Q77gmeTR2novqhuVCULNZPZg2yUBkLxSTuaehdqNriSeEiC4FPz2kjwHv6dGNtwmmDG",
  "key10": "5xX3UDYFjZ49xsthvvcmDb7Aztt1eqC6UAz3hws6Pqoekc7BWfJ3U6T3ZEVM97bGPMydFDUQNgyc86EQ11hgMRCa",
  "key11": "2bbTGPcQArCSBv7UqaTGi6UDv74RrpsKqLhfspWfHqPMD47hmbTZT1BpYpdQU9puycTdq26hH86n2Ai6XRGxNVCt",
  "key12": "2F2A6muZyWb5M9jpdi8HAY6cbhwrx7irLQhKivh5C7c3N2wPgPz7qNgCa6sZKUxMsydxDPSDkSBEdJfWFevwZ68Z",
  "key13": "5rF3AeFijSsyNtkBaTt4EimK4TLp7Ky4TRJ4LPWdn8hSAW9SQqncaREY1oFW1CU65T4WFGm7mdHv8ufPL2gjyvGd",
  "key14": "47Pty6cZqtoegJHeUg6e68EA7aFgFNdA1u8gtggEWftNSR4quSNGp7bAWiFHJwZyrztdL3vqAksmt56Xgi1Tne5Z",
  "key15": "5ay4apP8eFXjGhwEVq3eZmHAVdvbRXqv53ZcDU3jg3H8d3w1dPKorhngYAce3NwPaY3EwRcPz1hTRcnegTqRTwUs",
  "key16": "2ZfVQDowMkTDRZntF5qaLPnyrWHsBGsgoyG2AnBoQdj5S51MFeGAXd2GzUQxQ5HemQ54UcGNCBbpSK68ziRk3oED",
  "key17": "hX3kC1tiT1Q41RdU1UXTuWtdbWcUZxzM4WSj17Axeds4v1KsiTVmeJ5YH25uz2rNd7iNQriQvx3Luk7igJrJhp8",
  "key18": "zHSJ9RcCkarvZrZ5LWT6LKW97j74yUnn8B8ePVT6dg7qddojeeLW57v1S1W8BGP3BK8qymymnn4XxWUF5NydfcL",
  "key19": "2SBX1zijqvpueLRm2EkyQthnuJfcBJVsZ6vyHF91DhMruev5zpYg67PDTgQ1xBNGeXT3VAQYgZ1oYywQseGDtYn6",
  "key20": "4px6kJ2FPDkV337dZeiobo9MD4FnLbWRuX7mYkpNqQdqZD3MUbkjpJHuCdBq7Ei6c2UVPJKhTA21R9gYGSrK8MQw",
  "key21": "UuoNG2psrRFzbfMHBQYqb7t65FXvmdGqSNt1fsdMbHGGGdv2dot6bd1MjVr5utv4Vq43q6Tuu75ieovfnKoWMiY",
  "key22": "U3vWZBYKTyQaZnm6i8nQdwRi1PtRzzuPhhoemptogjjuPhn5DJyMUzwzaPrzuNwx6FhA34TXjPAbiwX6jw7RvoB",
  "key23": "31UfEtGXAJ4CjKGYEFTizvH4iVN9SoYys6dqQyvjJwZV4Q3Hf3qVpaysdMtrkW34TLYTxPYTWNr7Hoo6W5i38fjZ",
  "key24": "3aKbCUDkXKWh1b7rvUmquX2EzY1UCJYNaQsvoVEiXFQfFssgf3pqU4pQEDWuTq6ZaqrcHDN4J8vmhGBKdUow5446",
  "key25": "3DNLYgqSDfEuxJFtSfnKKV6MUnEkGaHCY95P8v33TWGLMjTbhPDH4z1H1ondZ7q1UrwX76xe6nbicVUhTKQGNjzi",
  "key26": "5zJB9CSB3knS3a7U1xX9sjqrWjdaA4fMs4TfBrAQKDBGbRd1MShs4mvZwK9Ps4zSSam1EVXj9pQCamPFHj84Lf84",
  "key27": "e5Ey1WeGykdxznoiaRu8zCypLT7wJmGtz5w1KwJBU2zMDXXfhSniNW5UbqXRV2FQsj4FawTMRqCFRRWhU2PX7ky",
  "key28": "26mnj4KJPsHQjEyR7ckBuxTvKHa2KvgjHLwK4z97MFJFBJhrh9Ym1riMinqbDEo7LC9wcVEhZY9oiHik9HZdRP5B",
  "key29": "5pJ8BNqaSBHmRDWxNxx7Q35NozhNUwYFpt4vqUCRbSdwBhw4aBQ2tmxmzuzxq1Gq7C8bMxXVmfoTuCRqZD9SvRwt",
  "key30": "5fgDMe6NZSbdCm55Gy4rUdMXNgXAqezc1pDVKucagU71qqiuMsm9v2Qmq2DP4LAhuCmonZaW6Bb7N4C4LQNRxqiQ",
  "key31": "414k9unsXL7tmCWwRfuu55gpmceAvjZitW8mnZidGVoudSudQ3DhLsYE6y5hki4xSRqjkgL6BtMwUJ4Af7RoPkZ7",
  "key32": "4Z7N5sqPMXtCQE4hBBwJB4D1wER13gc44ePWtywotxLuqRCRbFJE4AqHErTs9RcAUAiEEkg4r1QsMpxKanMGVL6E",
  "key33": "3dz5FEs8WqVku2aiNcAm6aFPDz6spCAZzFBxvwhW4SkYRzxjN8U9hXgWXVrqzzfEdmyE5fqYdgFVTm4NtUJaMeUs",
  "key34": "2ndcAuQCNcCrN78xXeWKRy3Q1ZSb6osmxKK4uCN5ULUKyurSymvthHXVeaFxJK4PsBEY91J3HoJUfryXKaBqnVyt",
  "key35": "2QCgXz8j5CA1x7XuyiuiB1QkSCQqjpYjTZaV5Un3TiwBYduZgfDChD4EgUUHVxrC3scVSeFYQnFBN2M1PS8m9rZY",
  "key36": "3qFaCeNJHgdVCDkvnBTrCLraEDvEcu45L9p6hYBzeBCnRXSLQVvVm4Qu9vjM79nxpwXZ3MoBmoYZSFYQYAmKDgnA",
  "key37": "vkH1vp2YvQdHNmqMua8pKL7T3WJxGQcz3CgquBrpvg2hgJ9usQ3yo6k16ywMDJuim5oFYHQSABaj4Nnu2AQWzeR",
  "key38": "34KUecAeW8m5ZcmBEo7r3yUGxFD2M8RNaGZZoTed6qeZY5maR4a1AyGqfUqxJsLHJEgP7NHnVDHnfAKCYZe3jZqN",
  "key39": "49X6xGCtyuht95dBe8TJTCn2LKzeA9PgeCwGWK9vQGfPz3KfUHcL765brahe57zSH634DavQcMupMvzt4oojMfU6",
  "key40": "4xbWcTQW7Ero9jnmqfxtKAyb6ze2NMiUsodQKHw1DYv95rVK8HZb9fZkC8GNJHv3z1PEDtYrvcSL5dKmNyMvYnzw",
  "key41": "2GWQWeVkp6qGCL8Sj7D1DzkKxSs8rNTSjERWmMtGvQkZAF36AV8derZRZ1KAsxge5DKtZgTTiT8VDusnBZYHWmcc",
  "key42": "66Hi4RoMRYY6FiVsw8WpNNgVQ2jGPLDpjcy8GYaJDZP1kza4KTLS2ktfvPEKzDCRs2QVNzrkm3MrYhiGozV8gWSv",
  "key43": "2h8zD8GeiRaSZRjtwPDMPyRraYF3MV3KXHDrLRoTHzsVMut2GZyhK4YCtbojjACoD3C4JRzPVoV843kT1Dc8ptM2",
  "key44": "22XvhP1xVRPwQG42TYecNmELLnpCBmpuqVbCGdiGXXF3DE1mfGQtGiCThwhByEzVJ4F23DZ3dFxVbDCSY5JNNLDz",
  "key45": "5YsjF9FEPpM5NCewQgwtcQkkqThw9DRSWjHmFKoS6WLwkaeok2z3CHhsZCzP6uY4fb6VK3whbyZAEm73rVDbo3F7",
  "key46": "4PwbhnJtiuTdE7JBRBkmPgkigA65zrJcs78s2sXqqYwETGSaVdVWiiY46uwADU4VqMEZTrjnrEvhSkRppfQTAuNG",
  "key47": "4D5xU6EJT8exn1esefAdANT8zjVeVfWDRhWx9AZdvW4dc92Jv7HPMjvM6TFKKgvVV1NebW1XCM4uDseReALHtrWb",
  "key48": "SEAk3KzULatPbKZmcLmccXktSt1vJrTgxkSvrGKrrZHBoMGMzD6a2pFd1oxfkM2Kogq7uDRvfY7Hbok5hFwkjxL",
  "key49": "kQ5qjGvcdXdEhpHcUD3MRRGYd84juUnrqaQKjaYroHrE8oM13XvcieoQ4ERbi1goocNtWZ38gvC5eJmdcAVhheR"
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
