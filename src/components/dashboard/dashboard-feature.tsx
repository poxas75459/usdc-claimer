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
    "2T5isuhtJ3CZZX75bWxMsGzZWAao4c2oxZgvEp8Za3C7xGtpegZu7jiRfskLL8p8tGRSERd9xW1Rj3WTEtEA9UCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KoSKc5apNmw94APc1TToQSBArvJhptwd6m48m4VLjRpgNmeg27FAXmVhCLpMN75BWYwbmQ6hFCRNMbzJRKq4F4w",
  "key1": "2q6rMgVX7exL727SwrcBK7qysQMRU2BSJ7weEq5BiwVABeLiT69Q6XB7tAdvsC2VRAVva5FFyvpMKjVpL9FFnskM",
  "key2": "4mQkavi8ndQpt83cHviPvcYtKkYyLyMZepziyYDepqhRAqiMmSR1NpAELygGh8mcEvfAwyvmAgfamo1tVy5p7Kty",
  "key3": "FVhnZRs9fcqh3mZSkaqjJ1kw2diygkV4EkLLpxpTRgxx4VGZqQ3TQSTzPnGM5ftxkEoHKNPx3iQGAoELdoJPuK8",
  "key4": "iMeSJXKsXJ1AMEdCd8zxUsG2NeKh9borJjTJd8ferdFJkYGQB2DD13Kz2DmRkBD7HnHVtYgkNYnGoNFCmA1SVpR",
  "key5": "2m9t6n1uRpa1JqV8ewwkScBp5DjFLbbdpbajYXfrFwKiosMaq7rcP3vwpN86rP5MfUYJgrof59YFTxBbcfybJGYT",
  "key6": "3hfWnxNVYPt2u9NGjnGDY6f1ow4cjdRM16ZSdtxEFZtCaptuKMPFiCst6k7Na4DMAGpPNPxNpmyapZT2pv7jcpV1",
  "key7": "2aMFUT1U1VRw3or7NmvsaqyGSfnxywL8NZHJq7CZ8oBdAVUnptPpjzA9r5zD3FwsZCCTsKyN53fZG7BpUoF54wt8",
  "key8": "5pdkSS8mM2wqVrFpsj8SMQ5S2sPcnQx2dW32kpxTW1mjZHVxU2yEYF3MW1NfLwiHZAeW48UiKqH7CtSPsgw4Q5A2",
  "key9": "3VKUF2bZFD7jN23GqBW31t4MrxV6M2Lsm2KA8ff4ncj1ubCydYMpzZHwowtSjDZi3c1ujGBDsgMeK6zHKS2Cpki",
  "key10": "437vpBPwhnHcgUr5iNLeDK6jZYydfxfwjemUQeAzfphYLjhp3NViFV6UemHrGS9TfF9avCX4FKNz1QYejyD9qgkv",
  "key11": "2iewh34wnHahHYyjghrBtBRqRcPn2bbjibYQw1Fe8TA7mhwxseY6yaCwURgTPwEZY1f3wVYXbkDLPzTdH2hgSCh4",
  "key12": "4a1K6RCvcRwyYLzWXsA36g4i3KdVeqrWwACjNUzYLRCkgj76M7XqDUcCHXRXrW3juRvssN7Uvg1J6Sv5hxGfCrt8",
  "key13": "45qYJQAh7AWFeTET9SmEg2vx1wkfry8deAhgsTrd2vj5rsu7uiPGYc4D2tCP3VoLDrtWWgaWsGLaeskhz8mPer6",
  "key14": "2NZeRmBT9petjKxrLc2ax1r1xqaYLGKNqhAmkyxF1CXzEJ5EWxhwVT19taaTskcTUpM6jHKZRWd4tKjzACJjbZjT",
  "key15": "4CQLGVyWPijyzkZkMfroJm2K1RuvTdBnYgMfCPCYQnnPemXoEi24sjJrCeWJkb4uHhgMsy6iyY3gwWTsXk3EVuXR",
  "key16": "3u1D7Uxwsp8kKom3eikP8BfxxCcK6i6kbMMM2e1ipwLhQ2aXVsUigNu6165o5gMfydP8BPdriVyutqUvo5QwvUPL",
  "key17": "v1f7E9PzcQ3i6ZvEX1tUf9uNqj4QkqdMQikYU2r1NJ3SQTAmFJF7fBWgmVd6KdErBaGQh5siLVEiq1CsWy7ysQM",
  "key18": "4dBA1fSpzs6PNJ6sqJyFrexLG68gWQmzCPA3z5P8iEcikkTDCzUa65sjbNYG4nG3tWjiJc2KqDKJBVfpUqcGJcZA",
  "key19": "Ep6usCGGnddFRjNPYfnU6CTKuSwEo7AgArkY9ZvfDiaaEgNy4VLTZQCVUHh3HvxWtyzQw4Djz9wzgzr8gV7i1ya",
  "key20": "Nwj5ej3b9Jcg2U7VUNAqXuLE9WELe4y3XGES5PkWT2VafaPmrsELKSoQp2eAjKUHx3Kkt7WeBDCgYXxeWae2Rw2",
  "key21": "33XifzDM8NdeGNH1X7PeCtrzrbScy9fDxk8CwaYPDDqaQb9XVAFCNBKbni9WMwETqpPFdHuAqZAkZLQJiq17rCJQ",
  "key22": "3v4ufAWnLksHn15T9Bw6VqszZpu1LHV1ZbzG8p87azEPkvQKhSKtMjtv7jHjvzKUG2Eiw9ZSMboLxtUDYzMLrtfS",
  "key23": "4byzJLHEHyTKE47bQny4ZbwFFYf1AyJRs7PR5XG7QWF9oGTGFqEEeYveiwnj8Nh4Hkz4mxKnMyxXUkS9XcTr64ft",
  "key24": "626qKskGgWAcYUUNpGq78nzELhGf2GctpbezWdzpXwYkuaFZy7CM2nzWaapY1yDR8dvRy38C1uP2y8YGtmoSeA9Z",
  "key25": "LEaXj24Cy4CvapcRceJ6BRG5Vi6HU7yJi2LeNPPhX4Rx2o92Bmek2ZcXmYxp8TdihMLxHF5xWbJ1RsxpqLR1utu",
  "key26": "4pPtcACep6RA6AGEt5ZokNi8Q5xkNPLPEkdVXq96GYCrJY5suWfMjZtUXeFiWMTxYku32wXeiqaUSiqiMRtY2tsz",
  "key27": "2trx2v9haq9ZZiLafdvfMaz6s2omHPv8MJmRoDMJ8SkL932qukiNBD5MyvNZWf79gn53JEte6Q5Mapds16AUEFdP",
  "key28": "2S7DKD85b3ehscNttoMDgPawBTMLKzwprVTPNNo4SDKEPLGWa2XUXHVg3HXfDCZwvUXrHfUtwsc4fkibvDbLeQh7",
  "key29": "4GejVNtg7tcFDxJ5aweep8JDZVLHVRpEH4quW7ewWEZHtKGnp3HHCQneTiYfeivJ5Tc8JVHdFTz22xHGoJn4EHue"
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
