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
    "62gVSeBhdD4f33HGfNcBkg8Pb4gvg86xLmtoifgBkpRyTMegB4U37ti7x44a5cGUCDYQKMoQamHn8zw9TCXoHyJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tbgjwTco2cfzgfBEzHpS1PERYWRimqV4dxLQMjLT752Nkg8Q22mw7CjhZjNcSjRm5KuBc1wTGbhvjnDhH7Y6kgU",
  "key1": "2ifpmKndbaLBpvjER1aNk9qQGxVCKihfRXn7v3KiamYTbrZBjznKcRcSp6Vx1R9X4VETJDxkYwpVFNxmzRqqRizN",
  "key2": "61HHqhh5tvyHWJpR5Ph1km5AxyZYpMn7igkrijX2y3rokUMwU5q3DMaPgitYN2VHWomgPHK3ExSTACRf3e6fdxjj",
  "key3": "5BU7ripTy7PHSD2hMZaYtsQL41d9PiUKdtS3RxEK5xJ8BLUcV5SXLdLj1MuLd8dPGsc6vgknzZbTW5ww11Goqfox",
  "key4": "3h9tBDNX9JVXcvBiUaJjDVGVG4CuUGCAwiSU1YP41BuBqdRFrgt4im6bS5oVQbi7LGzteYFgi6esyZ4vBeajEje2",
  "key5": "2YWcSCqonE7BzQtR6e1jMS9xQaYqxGFCGx3QtHZVsRB7C3karHHahKJDoHSHLHhkNnnEfHChUHAgQjjvCgCC8TN6",
  "key6": "4pSfe4LbcpFEBTaURiuCPD512QUJMrBGC4eon384C9jVApvy41qd3kAqkyQ2pWr6UCVMqifq4KbCsVgbATJAbSSt",
  "key7": "2YxBXV4uwxaUTX6sJFhGrZASY1JbGNhDTjgB3ti72drdMur3mTrTMe1etrXouatxcQ8QArKowagJiW5r2ZrbEiB6",
  "key8": "5MA8QBin4X8KReLHzvDscYJBY5yMTS7L96gfTBeU92KbDr8SyBQW8uqAAMZX4LZynS8emzMYNu9Lpse8FrxL6QYZ",
  "key9": "3FAvmfQPRBk79PidiEABDHtz2AXTkAJbawEdwHjTpxCysTtrfPTeDo2SfwdyfQ7jCmpxZEdKJNZfz1rMKbimJHYa",
  "key10": "MqL97ASDh8jhmY4zy6oWRKrirHqQTTyYvtwZsiWM6YM4Sv9WHpYx2CnbvTst9Z2euBDt9wEbFeeGckaY7rmrED8",
  "key11": "2jKdaeMHYVhy1xCGXeofS3QCRFpcuprYphvXVw4BUwte1M8n87rJRnhU4238HFeAvaugh4vBoJmi4F6dfh9zBDp6",
  "key12": "3NU8dvgmpWWPqRoY3ou9yd2dTjo21a3f3sC9QfeHyzXkAxZLbMtxeLLoJ5qaXm6EK4y9oa7pv67zm5HkanQyLAkH",
  "key13": "4Y4o5cc1xQAcBKfBBqNViXaeZWNaVNBDFGUHtB2Xm1dE8hKhWhgar6mjWfZMnKR295ZTwShHGJHAFpQdMckTgYSZ",
  "key14": "LTqZgSjAxboZNdaGTm84g4wLbLZ8cgQGhcfoMdUz9bfu4x824hWeC5N6SuZCgkmmHqWZVbAubJEGFZFsZDmYzdo",
  "key15": "5t1rFHveNP4a9ZG46bmHADGBPbd6CXXJpPk1zHHCpiaKwDfGcG8vxiJPrPTn9DsutppRJD42mTKC3FdCmTZURgFY",
  "key16": "17vmYqBNENjTYUrp874JsRguZHdpJK2vQgWdqoSbrAU5fkbofBgT6nsa1pxrXouo2ZKdmaACzAjmCwCK8isQVQu",
  "key17": "2dSzL3ErAfUKrviKfyTmymBoEZj9umAag3fNohfBzkpMsy6BD3fqssmQi2bS4Gt7JraUScfZQFshRcRpKFPXia5G",
  "key18": "4MKGvVTn6yjUxLZ2AmiE9yhYpBCzkvRaQcQFxS5C5E4hQMMJWF5AwU97N9mKY8nrvTfXMoYBQcZKoczPFBhyQjtu",
  "key19": "A7vauHMwZootQo1xR8gXHfsFJ246vFrfwRjjqWsQyzC6Jmnt3GwJvodqCLgyZTmn7sbrLWzuRNS8aLt9X54BkDp",
  "key20": "34nNmDgb9ropeWmobEitmfU5Cy8F5eor6oSr7HkbMpbJWEqq9Bu9yxqF8hxnGHPRXtXBrjUV6724QYCZ9VsxFeof",
  "key21": "NdRJJ54ao9rRqVZedKSDD5ov5etgkWnonAqX5a5FmWchGKm6if97ys8twqXikXzdfjgshX6yRw3wJrnPVxByp6t",
  "key22": "2LfWhB3AAg1Y3DFBetvzFeLtC5cW42pZ327Zmu4i9tYhnYPVTnicK4hC5Qw5Cfdy3JoUKD27fMJss8NAPpEigXN3",
  "key23": "3FX1KRVrdoWG9nM7Zfs3LyeFiceiLVdBEVq4BxUqJx7PGbrJwTMRb1BMnJG7nwxEWYdsbXRpm1YMqQRXL6TXFpPM",
  "key24": "MWQRMBGZ31wQvM4u9PBu3aQwzUFzhAncpuzxKS6W9Gz9PGQZqFTbxystgJgApPPoeSpooVq53Jxcf4G4RgrTiaR",
  "key25": "2BfVqZED9y1uujWaGrtKgrVvhrchNBzf1ucEeFALpzR4pcvoe4BVac8qsaX3JjTL4yh9dB6dciWbmzE1BPGiJg2B"
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
