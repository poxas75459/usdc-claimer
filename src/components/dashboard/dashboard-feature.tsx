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
    "3amRAKuVbRY4RCEJ4rxTc8kCMTZENXPKD3ay53AQknMVDik5BnpLMaacFv7dqSGabWPUybPVjdiyjYVFWBoPzrRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sZrhbru8bK81bxMsCL18J9JstQAJ72X53HPCNpfhRXhE3o6RYxXSAK2CHJyibpWx2w9cMk8XYEQP75598KMmUHS",
  "key1": "3FHxKoXGhtxUESygVqDTR597VP9goAosQDY5fPBkbVi6QSvRaY88XqjjeV9bABx8eSoj8AfMRnUzHmgq3WTNVPr5",
  "key2": "4ZZQ1YWS835icBVRshKnE8rUse9XgtCmnimWLeEFtkGkfT1S8pqQVnstZdhxN7qy8VNRdHwd3GVxN3pgkvRsw98j",
  "key3": "ZHQ4GqMcD7CzWHuriYdZtRkHF2oaB5FMdFefqvZi3TPwUBgX5skF5Cpfv4SnaPnZJz2UMDmtH8e4wdu9qTc2ZHy",
  "key4": "4UqfWLAJ9xyZ1zLiyzq3TbwjEAkVquUws2r9SWRqMP2DwU646VN6imSa4dPz1PdvbV4z4z2aWmKyBii4Cat5VFLa",
  "key5": "Wq4zsHHo5tqaq5wbbCR9jSvfsHPeNdEC8NPkoKbDukuCZKuQChMKYRUxv3d14KyEaqqUm3dh2rJPKv33y6zAJj8",
  "key6": "2VgzMFvVB6LqF5RnZ4WAmBpYVNhVDmrxN9FHLNYQkJTyF7SNaGR1knC6kRxuQugJjx28k4YWCSfUDB7xrQV1jbrr",
  "key7": "2HqgHNjtkLUDViAdcjo8dxwDzAxDzHm7qFDkbziUVXaJ5G6DrCcs3NDhrSMxWz4zwZwNdN6kx74WFH2Nkdk7Feir",
  "key8": "2YCwkNoJjrEXmf96BeW6Ph1qKJayGyeypUHZPPNFa2FYiMEhuUG279sqevj1azRT7g23XwL9NqBAWraBqdDxd3oZ",
  "key9": "aVuvKLDqXgfUrpq7KYqNYtPVM2ECLmhTTBR9MpJSBpdhdNqdmFC9NFaVscfzWEn3U4ny6t8Y4VZ5CaCibJQ4rry",
  "key10": "5iSP4iXQY86gn2MxTXvhpnHFf69iEAQiRUEjEHUasAkxEWmdNrc3p4UhSJEvYPZwxsSTjBkRPoNAyUSpGohPKVk4",
  "key11": "5cmMDaEvbmxnr3Ty5PjAwm5YCqrm7kwRCBN7Hbqrg3vKryLYD1d3rrRFaaYVEveEaX2WBkrvrV74Jyp2ySGAYCtg",
  "key12": "3sM39hj4j1chFeJuy9rnbKXavr6LbHiXeY976QinuWzyqUAbyY9mTRednJ6jM93o6E6JRBD9rA39ZPbWY4rxS5Le",
  "key13": "SSnS5SgiG3NqjazLDrUv5zUMHuxraSMKbiH9GuqUf7TrVyjCUedzMew38TH3ySsZ2kAdo7F6buzgNqfD8qwC7ga",
  "key14": "4TgdfzrVe4EuYGFWcwAB5eCeX294gvDtgWp72dd6FB8WZj3yVjMQLVwZV56XXf1T7j3zW99eoVmQyF1dTSwwgReq",
  "key15": "6rAFVZFK3Mc2ZTDuqmHyuaiTieuSQkYBTLboV5iZnBPRiWB5qmXKbTNmr2E5bUEqfSpEPGt2h9MTkjFag84qLe9",
  "key16": "4QGJdmS6PYuzwKuDg4yEt5eqvjQutwmrrNgE4hBJwAQrV1FF6Aegb74b4jk1VGXxnMSz8kKhjs9ZDxf3odu9D5WT",
  "key17": "5cCdoeLKyvmwqaE7XoceNC2BTkDfKvZmYodn1TmxkiuGxsYuyzDvQDFnMeSmd68Sy1GmjM48x3YPHFHunhavcGST",
  "key18": "szyNMhJs69NKaSb4k4wpXVJSTmUtEaHP1myaANUiEmXGRDYfEa6q1kJpPKqXMedH4Ut27q8QNep4dfv172CEW7m",
  "key19": "31nQsNcC7onMyVcQYfjFEUPqKNoGAjA8khUbGQqrauM2ZE1DSLDdgGzA9e9g3zkHnUc39mBqAZwoqfQLatzmk5Gb",
  "key20": "8mP9G4iMKc78TTa7SGTVQa18Dyn2yrqepBr5MrkvFjYtQMi3AzDippE6Zq6U2E8Dz6JCerA3tGrgvdN2nuapxck",
  "key21": "ofFKY9rvrJJcn8ZeDq9yBs369WipV74TLPBGX87rEFz6dtpZrQpRrZEcu5LAkSskPDHSLhDAkmgRK5qNfoaPoSD",
  "key22": "qn5fy6eJURRJ34EuCTodp8i7TS6keoK3gRzHjx7YxMT8MA9PqfQWwjpR4aiDfCt4cfGTEwFLHskRWXHVuaqzxaF",
  "key23": "4LfCgJpt2qcNdrrGCcpVpoK281Pxh2YShjy8vSoNBaKYDxWEfZkB41x3EVuBocG6p3s7HXNFipXRrFqrypHppPW5",
  "key24": "XuZV73hs8y4FtFEuT6R52SmiMGrhXHoVQmyBrHJSHFqszh1U5Wfyb5BGM9siKRT3UWdwQudiq61moZHXs31Jya7",
  "key25": "cxe3vQozTSDyRKArkXen71UuDjTeJNaHvngroBPacFcH3gTTtKd8g5ZJUD6wKwnBU13JytKmZGt2psodNXe4gDr",
  "key26": "2eXZkFcu6uQgKvehrsR5XCvoK3G1JfeHJbeSkmZAN1xb5TRTtRNoMJCXw1sPFE2ZGSi7xdj4Mqo8h4cUmBJDbquf",
  "key27": "4wodbP4dcwgZowuu9qoSmHxMxMrkEJFbXnhLWX4f9FvJijNdAfTZyAi3AYvWo14xh3hftYNRsupgH4MwAnR8dbyU",
  "key28": "26Q9J8uGcjcBod6aCJWahdptf2f2u7YAxWgXP3F4BVzAD3HD7GWxRMyt2R1kcapqt5V5sfVCW8R8Ki5CfqUTWP3M"
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
