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
    "39EP5fN39SVpgM4zP4dX5cebyiXy4TZ2TqfsiJaDmKEmSNjcQ9SsiR9piHLmUa91Usxz1rZeXsv6Twt2GgpM1351"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3McFjUUrDni12uXJ7LsHV3vFW6UgJ5zDCLXmjkAFVEzhtaSRTAcuTdLAKZj1WrFV6AdSy5Jc8CsnLQsujq3RS1iA",
  "key1": "3C6on5a2igknKj7mp8FUD3RCZX8RGyVzT76t6FociTSFnmZBd77S6baXnN3peNrZEEczUBy6ujGCLyhByp42ptku",
  "key2": "5oiRho2GnjcFid58EYgie2GB31Qq8r8e3unqroU9Fje5E2UNanFJLKNjzC3MJE7yVgp2KkBrfW6sa6LDjg7EuPR6",
  "key3": "1MKSqxdXwmFufLb2Ky5GyXut9hBB5eUpeJuYMnnuLrW7woq5F1pBDN9iCejNBnjvMMCYyuLeV3mdWKYDENYgFhn",
  "key4": "4jhLDW1ERRTegmvpuk3Kqz5at97jZgmqvFLS8ktw8sTHm63h8wm1oSMc958HurGVaiDuWwjzQfzFZi9RtfyWdth6",
  "key5": "4SBF4GVGRzgibhFrWBQhknAoaicR286Fm8DWoPD8zwi1xFoCitMaLFhMF6mk93qKkVMo3UCebVz8vUacsPbUNfXJ",
  "key6": "3gE5na4NVBpDRZrXgb2cgdwu86CL7CrgHPUKfd6Qvj2Hfk1uTgYi4fYwJ6ckbNUsP6JiDnqbapmFJ6Ea1JeNhxk8",
  "key7": "4nBkiyBKXUzRdfQcrxYuid6UMVUMREzcSmTCcpBrJwg9umhPjzdHzNRTAaXseXmsCZVByzkncbFkpqGnVPxkFDoj",
  "key8": "3nt8drxu5qmpoj9mi2xfEtEdSJsf2bSZqkQnsAwnp8JC9Yf3fDKAKDaW3kr3N8bhUQm43X2Q5vRCrRy2Tocnwt1A",
  "key9": "4cAz6X5PpFV2dov9GyWGbsetaxtnqihG4ZB5b7ag7Y4uxaRGrsANzXuyECkMvR1Z61yHXAYco8LRx51KFAkKcU1N",
  "key10": "3BCgiG9v79wpJawqEDhNWscPfhDPPUHXReJvJQn82SVZoLymno1oDzeL2SAx3uFYfv2CVGgqykxAkzprN57iAzhY",
  "key11": "3ZgPxZkBUF1dPB2xyeG3ymWfhDbJZ5Gze7HM7GUgQXm3hdpTfsXWu8Ei3bhmYNzyCGf16T57fQkdRkkkPHB1GFN8",
  "key12": "5X3drZJLv6pAovHXAaa7owsZfzQu9t6iHZzPHb7352xfL3r7BC5zXxZhZ7czx8ssfUcBuvWpRcgAR4sEMexg38Rx",
  "key13": "2e1V6iWgcTYyBF742UFbiLyWdqKG2CmZexrFBsCHTpVbNxMyRzE5KMSM6eAvDTJ2D6uUxKw6r2fLBaBFYBrkkLps",
  "key14": "5hM2TM7aVuz92hssNh4681z8wcJP6Pb7NQ6gq1TSh2saM8kDx9qucAhPxZ4gcVc2Tc7oqy8bGNyCU98kJbfChR6P",
  "key15": "34JhXakvBd1PZQmdDs9r7AHDywGAVGmHTKfUPiGQWFTscuTE2a2ggtrYiBKfap2GWZkBsS8TSHCifJaxLLF9YtMD",
  "key16": "42xUjCgA2WYx16JLvFPnHs683ozvTUCESnKYovfizeR32YXB4igye1n92LE7qYxoxqqpvBx39ctHviYU4jtVFTqK",
  "key17": "3vv8fgTp549SaEfsFVdus2hk7ha7RQXsUasMUfzMnvF1yQgJWEwdMJcHwHBbiYJXcBy1rgJf1mXoYP75pZ15BYGa",
  "key18": "2qfxr9Udy5kDGTEgGz37c9p4UWovEEiss9iFyq8KSLFNWo2Wa44Vza6Wxm1zmMobjgR9KEiH8r1e7qAnaqhKaCiE",
  "key19": "4PRfnvf8rp8BQeiYxF6WEYzLPzRQbHqgFcGSDk96JZPrGuyNhLouujHv9ZctzNZ45JUgFUqMMS1JX6vjSALaqFkw",
  "key20": "2eDNBr19DEEyb1Sy3LX84khTDNJR1C92kTvvdJDWJt8tBe3GSjLtnTAWio39Yw27H12v9UAXZV6SB8BknkwkYEGH",
  "key21": "ucjp2JH1STzkF2gSoB5FNu5LjDNxHMjn7bm3pm93cCQ7rQdd9xTqAkcfNGyBVS95cXtJPgBx1dkZ1G9zoQ5dUrS",
  "key22": "3FMLJRUBJyhWxF3DiAnLWvnFHNxWx8pZ8dFEncWXSbByztZttGySoVDYrAbJXK3pwrubWhuGLPHuQHjykEZPhQ96",
  "key23": "uDZC9btC9WHzSQ7uawuBzLQsd2x4fxNP7QungtG2igmv4sjyPPmQZZcWPTKMUdz5kA3ejNJsryEcoXUrnkqtNM4",
  "key24": "5dxqWG3YgWfquoYz6hYHKbAd7g2k1SsbYCLqoHLtzNmha13bX8wijBUqXJgh1L31E4oYHNCzG3LUj2BtLfXzp4dH"
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
