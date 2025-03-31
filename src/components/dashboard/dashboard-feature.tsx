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
    "3K81hwz9ZbpDjXWpiWHt4hcvzX9fVzpibcS31QxkcFerqai7r8yv6pHyUG3c87tCCqoHtTEYSGLuW9XTaYCKQy3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MA61roVL8GJLXiU65QkQm18y1KVzECMTCYpNvmvZv7QgKBMtBu5ZAh5qeW6CKBAqS3bQhV11F44BVhe1UTr6vN1",
  "key1": "2aQn7ALdesqVRWphPqa2o2p9oonFiBNpUE9vGGgTRmnCeT2vN2ng8KUFAYWToN1Qnyhj93gLvE7kZpAXjyBjrxnG",
  "key2": "TCrJgNN1WUGCuZP6VhaKnhb8uke6FvwNWvPWV12ZV5D31EsdoN8bcipD8mdaLrKB6hv8gqVXaEvBWB9yuHXc7P6",
  "key3": "5LS3RPwpwv9ptW1m3cpZavWX6CDNYKUm3U2sKRcVcRF5iUntgAA1Jntuyuo998JWrcRFdFXwAarAgkc4khAjeRy1",
  "key4": "zxLKX9VE9bRMS5p1QcetEsQ1z2JnJXMmiKH9kUYP4RRtYYcMgcc2CyZG5bNzgyQib1AdTvdE85TAKA8FmuiaoBY",
  "key5": "5i4vkkHenmBMSTHASdFgGcQpPymrEoTaEYyJdH28G2sExBX1i24QyV51eZLP46BZx4ZsM8TZ7ThhWaabqEiL5Br",
  "key6": "638LL79Vz7nm2SWG7VNh3J4ucSVuhbpoUw9BZE4bCTfMbJZWbHstqwWZ8LgDroAebEfiFd53bAqF6WtkSgJc5iPd",
  "key7": "3pVppxKzuxtjhh2fCdBxoSrhrygWrSahKo7cggS9Ny4fgfSrpfBiE81nVmSGD6dMBQq8b6TnKunkW8ftyXu9h2Pm",
  "key8": "2gvBjKai4fPo2wVkptMhrFzsQfGCNz4LnDfqtow7UmYR6EwnPtNTD8NNTVQJPSyferbiiuP8hMdQmYjvSoQJnrfd",
  "key9": "2V2Z8uHM9Qx9rHaKYMofU2SYXYWmfAJDDVdshCH6hNWdWoNEntm7VhsPsWRDYc2jQ6etpwyPpHHNJgU5aSzvfCTr",
  "key10": "2jrZw5ESVNNJ8mmrESZNxtY77za25EN3UBA89WRqP81syomVETSoeCwkvM2RWwmkapboz8bkwK9hkjhwQ9PvMMLx",
  "key11": "LrxsKy1QgbbPS5bboEvXA4jtSXU1RTP7q3DWGwmBXoEjgSdwsTwdbPNSG4YZK6VhFgw8Pi7XLnpPeWcLVhsdX1z",
  "key12": "gViT6wmVpDPPuVuyHKsWYvWLBTeyqs5iSowxvbej6ThiTK9zQgMD7Zm7eafXZ2ykPCjKrLmqbJ1DbsLpoDAjbJA",
  "key13": "3BniXzkxMLvq1Fmt6cYHr93TBXYGdkLT4exdJ7zr2XgyNLdJifsmc5r4Hw2WQQs5KMDZCHyKAmXDUN1rWtKztaB3",
  "key14": "2vxhDmZwXbu1j1p2iDdLNTu9goCpyoFW2h52Jcj9GC2wa4tZ9KxNjgugh2gDxTnrcbX4811HdpBJwnteoPkG6BRF",
  "key15": "4HPXbTVdko9uke4qe3FSV57thDUrYYkStajEVaNBhQd92qP7XdsV6vRAJ2sVjVPuvrbrDRybPyus2XsCSTQcB82p",
  "key16": "31Xf8qY5ew28poGwBrKrCfKCPvtvKVDeYpohHF6KkDyt1tXZRa2utTZDbGgRZweMCiPSCXYDhFsnbUTEV8q6cwWC",
  "key17": "x7nU2Zu99gYjzNEGdsA5jAbL43yfqKYmg1myheW3vPnvRR6uSZ1X4WL5WUtY6BAE8j83k9TAYxBtChojxaBg9Hw",
  "key18": "zRcf7ZotBYVG5cT5gZ4CDQYByJHJrXJoZYoV3j6hs5DGPH87hMCTuCakU8QDTK6tM1748fBR4j53jxsS4UaXhSA",
  "key19": "4Y8VJLavQyfscsT3SvqypArHxq4YC9K3q1TcZy8Voi8rxhgbDAmp7UDKDF9fdMNoBUH4p6J1nk8QPodZRLbKUa2z",
  "key20": "pnYBdfsPXEiemqMy9wZGXAmydgvcYoC5bgbun5CUcjW6ofqj8xf2XnqCkUxmxoVzzZxQ2R7A1fPmFKfusoxsU4H",
  "key21": "5Vu9LdpdJmNDCLRZswWLetEEWby7dQSTebfxwnrZQ1kLfEVu4tb1r4Za7UDVXAqVyyfpDb56fyEvTB9RH7oa6Fgi",
  "key22": "2YY9qgeu3XTaM1pQzyMVtM4sRq8K9sAsZThhnTPCwtbbyxGybHr7RR5BL3McSooaRojJEWpzZ2555nVSnLhMYVx9",
  "key23": "5hn83XMmVST4tvjkJRMctYEhNZi4Eb2CkjJwugseK4uz5PgW1epKtuZCTccjuXr9FeBi9nYRomcdJojvyMM84Wz4",
  "key24": "A2iFNx2Anv251g9MziTkvp6q3f4Cx3Kzi66qyJtFv1SeDYwq5SMfqnMu4w41tCCSEyoKgoaHKy7FKpbYJntqCpa",
  "key25": "2Grab5te2TQ2rvyxKYmW5KhrTVenxh6HLVhJJPBHcRUKTY8cJb3Aqpw2MQKNyqJw8UFLY77BwW5MNX3GbUKZmZHE",
  "key26": "6MT78ELmNQUFL1QH9iaCitoEDEJXFVjQ7bn3asrEesTDa3PNdXvDo4LrHh8dQBCKo7Z9c2zgZedHaB11cNrE5sL",
  "key27": "4mGsb3AJMDeDdB7hxbgj9ATyYhEP29uJjyKfnjhL8T49bXAJ7P49ZSCYMxQn2QQ3Wuv57LF7K3PvoyBsooxq11Qx",
  "key28": "FYHvvpXddmHnmGPMsobbotnd751Hq1Zmg6YKpbJ7G4UtefkS2hXjQqRdGBLKgogVTkFrQ7Ka5zbD3A7CdUEHKHX",
  "key29": "2eYpMe9LarPKWp2zfBfQK9L6Gc5qMStf3xhpYWGBrdqQtRLhLqG7rthmcChWMNNUsCyNHLSAN7ENHzBBUCLzkR8Z",
  "key30": "2UfRoGqZuxD2u21je2RhyvaLErQ2iSKH4soU9xYsedxWfm2jQSWhbShJQHYToNqmJFVj6yMHVPhW9crdQMmU3GEs",
  "key31": "2kWKZX6HPVcVQ7CNsMaRXmz51fBLTkerx3C6fi8vSysqSXzpfmRcm9xHcYDD6GHpQRpXpmRVi9tVDXa3BkWecsSE",
  "key32": "5yPFaYErZj1kRzuYiP1WtThXJoy7XWyJq1J5MaJkEPTUm2SB1Qgx7742VuDFTNhCdTsMSQmL37BiuVCa4j82uyxJ"
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
