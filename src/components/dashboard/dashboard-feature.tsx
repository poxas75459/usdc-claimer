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
    "4VGeDpWT1udugdN7CdK5WXbLjQRpR8ZS6pAP2CM4Kc4Y7DYM4z91SeGtkqt2hDRGDnVRS6bF1gaU3yGuuu2p4VJS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JDmnEAtXpQ2npgoH59LaL2nayCQBCiNRw7dy4PBC6juyaiUyno8jfGLDe9jqQjrbQJUPkSke2nuhTtRDU3aE6x1",
  "key1": "3HZKppPFqoufdfeXrQex85Qp2oG8ecRj8cAUBsAwa6ChhF9KQrWLuYqXsg8EFsfvSuUKzR8QCCKXhEq9tNKbc4tq",
  "key2": "55SBU6CXF43vEYPKh1fbhJ1Ycdf1fz2NNHE2p7h2XULceW949e66dCkV4nXaRgMANaXKSmwUoLd8yJN2DNoLW22B",
  "key3": "2L8bDFwbQFokHwXEe897krR72QnDBw35maEKEXJZrs3QTcnXA5tZF7ne83FaFfaKxSdBb7j7sEku5wz7UL6Z6Xvw",
  "key4": "3wEymdExh1oRCuc1tcaLM41WYwrxxYi7gdQ2k4cppTxyfFTQctF9CQdxVmDBP63VoSv4JnYxnyarSawby9SWKhf3",
  "key5": "2jN2MtXWw6X44PQtK931TKuvRYucmu43kcxN4qJWtRYkvdxgiiEjo4TQ7XZVC64auC5bPs5BixFkFUCBpqimtvGk",
  "key6": "3YmtdDsVRMPBGXpfv9BqUde3sAiGgLqgWwCvH6vwRjYFAVnmZKJntkNhKyxz7DScXwF5se5vxwhTnRWJe27j6NYq",
  "key7": "3jktLmmUvNBKKLvGekETbaSJt3JkAtNFuqZtZSVLGZjT2KVyKaut1k4m1tYiE3La9qreLMnP6rjC3Vh8afCxkqhn",
  "key8": "CYseM5jcK86CKarM7TSRQyGW2haatP1H4aLG13hpLzJEJ9GmXaaoTR8Mj7DkdxP1egFcGps8DuaDHMiwv6G45Y8",
  "key9": "4xdZUdomoZZr4i6bVTowWN3W4LgetjHGUQ7FxsZUzWjJwTBDYxg4wY9kM6SMm2MyF6R5kkfSPmrqp8QJ9pkKsJXE",
  "key10": "qAZaN3PfLDb2b3nbNDE3jYho9QASYMtvhaCbUsZpNpWgcVaV4LEX36vheCgPvsvP92SiNrRYvEBo3ADkmrUZ9c1",
  "key11": "4XYLJkGkid6ounyjV2FeTFPGRukXk4HrNAPZ66iTYyQA4n4KgDZfuzYpHyfdgnXyZDy9JZqvcpABVLmBnCYv6oN9",
  "key12": "AtTQxWiGGKQUM3kdU9ps9jLLMhTHCPFuJsJE2YBFXypwikwk7fKaex7XX8oHsaMKoMpPmoCjBGZezssBqBM8dNz",
  "key13": "3UsPousX2tYA3wcTxKpUhVnYGbUA6UnwcFte5wHB1q96aPcHmyX89aeFq4XZNjJDmS6qPBadHV2tCcPcw74WfGzs",
  "key14": "5i7GWPzWzhWBVeUKBrXM7cJdJ1WyNVVVTj9wpHpKRepJy8BAGkUjoQUDiYydAfvXikqgzpHuXUw7mG88yvA3d1p5",
  "key15": "44iMGAsj5oSEkGbMqJ4oyzHMYc9YMoxEeuV7gsmphVcZpZgNBUXVLNAiwMJVsyPrBLqiTij24ayqwiF7xBifxkFW",
  "key16": "GKH31gmR22pK3V19ou6vqmSs9J597dPATKoQVZNH1RCkgdbnjcxJExv5zhxAnX8gcFUdXnYfmqAGAZXGP8o6Mww",
  "key17": "39WJvGBr3YsdWWFvc7xFypP23BSvY9MuNPQpBLwHa3ALbSeZRxoewkcsoXL7b62mp8S7thm1gFEqGCbi56aCatx",
  "key18": "5STu1efnCw4gEXWZ2uacfNhKnNJBVKXE7BGhiuKyjS7wXFPznCbdougR59RdNmRYMhMhfhU68P4ppNGdTFvxk62D",
  "key19": "4PUWKo7u42mpYf4pm8ksoch5Nii84dQKs2t8oxAxMf1Xp2qCoPrrqB2VmQ6gNkKe51yfY7v3jJxHs8Xmm8BkQJKM",
  "key20": "3HeLdj4jw3giKETGhrPAqmrftbd8TZnMsCRztF7NdGc4Mab72KaiiMzkxBG2PY8cFSUJAWGm9Ygjy1MXEXLiaGaJ",
  "key21": "4b5319SVHwbaoJZSJEfCyRbmpZccs45fD4v5EkuBHdzjiK3b7UdEqqJo8ihQN462NTjgKRSFdjEmKS882Fet8C8M",
  "key22": "5yDhrw5QdnbANzFLjAmm3xUwQBLcHVbmrNyQ2PGr5KoDMc5sMsNQRaynEcvwPA9nCG4nLY1RCrr9kDuHo2WRdQCZ",
  "key23": "61ZGeZsxSZFngPTYP5BYArWgdGVxoQNBx8KqG5m2tnunpREp3gfBPDUWhx5GFYd4mcrXxgxZ2EkQZcaYzirsNRNj",
  "key24": "5m6ztThpRfHiydK8SiXJLeBxsXrcF75xgR7UVKpuT4vP1BZyRhK5VtEe4fiV34ANKuA9d45j2DqUbXgHqrNVEoXt",
  "key25": "fQHbBXFSfTtzHZAQhfa3UFv16MnuMF3RQXtCYMMaG6dvgNKETVxzve1Sjq9Wu28VNQps3bUNirmCzTxrva9Kx7t"
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
