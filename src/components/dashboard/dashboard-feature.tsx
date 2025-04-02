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
    "453mCbHt3dxqiyRnondMAsbD8ik4RXeFcxzLMsXukpt8xNUZNWxiGodEH1c8EoBRXfkwAZDRNnSEijZoeHJp8hdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43byC7TYGXQ9CDNfiQMozJx9xPCEEtT1RxKTYzcYdV9s8YSBZNPkUYmcs8Ymtp7VPV7BvLD4kjVzS2pmGU7621aM",
  "key1": "5p8UFJUNkUD4So6PqMEX5erjUza8vysdW6FBbaBqiivziByo44UxHS1iyAVyQZRDMzgX3tTfsRB1Qyf7BKGuJLsZ",
  "key2": "441HveCKruHU7XKwjaX53UmE2spkwUoVoCcrzmAcXpW3dfu7xcVcSq3cf9F3fWqudy47NoyYG1chW8o6py1ASD1J",
  "key3": "5aFgLQUYWWDoxH6yQ79s3dH1FtZzBcuUNqPNBRjfWG73b3CapUa12nAP6ybtYu3tXWeAwjy21NtoQaFwgkvzrpMA",
  "key4": "2aDXqyjWyZ8UTUAdoQVY2DdCfnc5CBwFdbnC6RmnTCh6RN5gpu73pDbHcjnfqdTejDUzKSHo2qiak42oT5avdvK9",
  "key5": "57Fy832aYDd7RuerfEnQsjpC9SDWLRbwJd61ak4Gk7nbodAjs7QRPVNiQoVaDPks9qgZCgHwx9TMH4ywovQmoiPS",
  "key6": "4HHx68QtZM4T5QneX4ZuYihV2qqV2RHVjsAsFXvTgor57X2S3cY3HBoCVCXDsMnujY8gcPbzptaw7iwEpDPTkMhB",
  "key7": "4FrCwVUy4en5UWEJPUpYAksWtmHPy9rdQ13EvaV97bTieUQ93vRAcWmdM9GLrjqhvCXL77J1YCZpQzUgmjufkDgL",
  "key8": "5crnzDiEnnvrBgWmwpp9hyieDTufXKobZokaHfxEF4NcuFAdUXqhzg7fghkMftQeQp2teaUVVw9FhodDQUG5Eunk",
  "key9": "4UHBN3DsU9wds1SNicq1Bz8Sh6W5CrWD9oofmG5MpeDFKCTy3cEbiWN6v6c9Bdqx585UBA2KqBENrVDnHbEQX83c",
  "key10": "mA2AVPhC3ixCKwXRmLD6Twkjt6bhLygwcqHwVKbYwG3s88qe4jnNggJRfLCgWNNhAE6oc4r2EqEyoBzC7qCyZMg",
  "key11": "2XfHtXn8WMYo8xKK46GnEnKG43ysfi1UQBVGt5fzbuM9xnxYqymHXhNfgCeJxqw8ooSJdn5MSTZiaMSoV3goV6Su",
  "key12": "4GrtfRhMdnWkMMvQPbQUiyr4dg9JJBJxVtWqxG5bjEtFuVSrXn8P2xaSH7YeGMLWiJsMLEQM9dv6nbyHmAn5xWv3",
  "key13": "4cpJ2iqijHCPg3rDKtNs3to8dicrokvcxw6KnovoK3tSZPLrdQLpdwgU9YwdPKZv6H1K8H4hA419nk7wJurRMgYj",
  "key14": "42jhxjc8XEPF7mk4daCGkbs6PmDKzRHfFfRMZnUMXtKT1vLZyiZNw17JWYfD2rgdwhP67CoB7aTo45yhrjcMxQfP",
  "key15": "yX4JSguv5RMKtvU1Z7yi6RjCqgPp6szKXjfzEwkzGuUwhXqqCePcpjAUNcBXVEGuuXJxzcLNftEAMWpMMc63Mbf",
  "key16": "5mXqSrstjgkzpJAVBtHuJFWVYiCx6gqxxsvtaLVysDTsUoHpk6CuHLVQo8mT9VyzXZQrs86EmL4quKG18xGQS71x",
  "key17": "5eLtRQZbZPbNzevQkbkyYxetvjyShs3SLpznr69KbzSbiW2puzKRh1w6LrFQ5HPhE9apUcF8yViXvmE53GaEjFDa",
  "key18": "2LJeibZC2BZyj8uPFY4Ymka5C2E6Gf3NPVYznWtdVa2PqUfA2tK8PfZ8HgLQC63SXyF4fRHLL5MBymErCPcamaRr",
  "key19": "5CPNKopALNmiQsFZ5rCwRgNQNjeDbMmHVMYRAnGzDcvBsBbLa4ncHKdHiXJqjU6m6zCjen4wivV7YKEDRkM3y3BP",
  "key20": "3CYr3dwzaqwY5qo9X49VMGXm1rfMJto4VV2f2ckaFU4rchEwFwubWNrnczmcq71qsqwmv4KTcbS3hzpMD9BgZvgP",
  "key21": "5DZUc5w8k1ebEUGzRaEoKCH3CnxGrd5iVR5NebiSuaHJ7rRcpVu6bt1hqrDVAQr4eCvBN1F5bsu9fw5v5BkmGWas",
  "key22": "2tnRL2e5FawvhiFqRQ8JyKeYdwrjwkuH7gWgUYyybP2g5ZMKtme9SdrTfvPY17jFAp4E8wowT74HANggpgPKqW3H",
  "key23": "3v4AqUzBwHzcakMqABBJ2EJqZzbh84zSZBiij8SECRbgCgPjaFjrxEGFqeTN9GjNDN6jRPDFnojAN3qAnbHn2SSF",
  "key24": "3fSt7F1XEGKHjPdHK9M4oas4RojFddeTZuhkWZP8DC6nA8zcAtTas5GzmEosEjyK3vCV4VHXGKdpz7WsZj8anHVs",
  "key25": "2C1T4K79ET5rEKdifbf8EYrUp6mHKRxvXksLZRRaLBkMdenUzK5oHigi2iAonvrtdLhdJwZAASzT7WCTKWHyWW3z",
  "key26": "3YofoghuGLc2GYrQgXb4bxiQorsfZLcaL74MWEWGQX5SsfPoG7MWu1pdvcwsKoEBTQZQZLA9ebRYmc5oftRtee9w"
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
