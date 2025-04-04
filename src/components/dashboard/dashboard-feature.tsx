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
    "4pTigyzTDWU2ZhtUyURyBrndPWLsBAYEYSFAMWG14hNWzXbve6v6zBx3vMxjBmqiTgnkoTQj9xw576Gyn2iwT4aT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FTphg89Q19CQ5SmtMxhLdw7crhMP6nxyobh4ABy1F1aVvs9v3ApPjKWpcnyT93zVjfcJJch92FgVi1yRWQ1hcTP",
  "key1": "2gYobjXM76chMRJRp6EhHpTXAogZ3Y34QxemrAijSqwoNfQ3PRBseo7boXqp1VXD9VM9J1XtuGyj6HrwY2xN2FS",
  "key2": "5XG1XwtaKdJhZm7S7rsvYgn94ggPoCvBBGD2mHvDcoMNxMKxDJa5SW66JgNLwvEX2PR9X1uYQ1pzUoeTM3o4pEb",
  "key3": "pvApdfd77baQHJEGT1YDHUzNuSp1PhZdvrAxm5Qnx31KVxidgBdLVNny36MoZMSMdxvNLVXc4VshVk5XTdtqhMv",
  "key4": "2XUtviuVYUenFxUyUcchE54Tm4huZGyFo1PxkBDQmpvGm1ceCmppq8UXfcgyAmSKGAms1TMAKcNzue881SNzFByt",
  "key5": "5PPM3VfJ1Rb7BbFBEckrawm6AoUx1vVgQEgMNjN5GdLESLSyw2tErrezBYeELLBA6FbN6Zwvy3uWDb8kQCBAtR7r",
  "key6": "5UKnewc9eja7HBHQivzWsKSJdNLkMAggui6pb9NfcXvW41KfY7MXonv1DDJNYoiT5dRMggio7MzNpjs5Hvpkk4A6",
  "key7": "5jfvizXeui72A1NSLiNKZxZoTXcpmEWJam7JAUXmUpyxMW1JuFxEFEYPHQUZHEF8v9zYVPsb9Ev1TUAxbgkoSuQN",
  "key8": "CzjHtBEujNsvuMHG92HGeaMUB3Wmg2fueWaQ9m8dxWE8TxhnkfMQFxyjvPbXZ9G5T2UunPLusoxDe1R5eu2CNAP",
  "key9": "3qKMSE49gdmwiJPefMfbnvRE2yUaT2LF9g3VAs74EUDczFiVimvrTKDFjP3ggb9tjBYY8vS6Phe5Q4AYpbDV1t4",
  "key10": "4DL1W9VL5mfgDufZLLFvK8xGas8xsWotNnCe7FWPx5vxhMsxNySaohs1STyTydiQFYsE43iGLZu6mm7494Uecu6e",
  "key11": "3VxLf6GEWxEEcrq2SMYCkjWn5crXvE3ksH5Ys8q9umAa8AjBw66sux3bYi4GqRVm8ubrUEwDCJ1io2Wfvazhhywy",
  "key12": "3B7wWGUU6DFFqQepjUTEQ2MUZa6R8N75wWhW3s5kbxbLrsMbAT94zLwBtNd7oPGyqHqd89XoGitVmfprRUSf9PNH",
  "key13": "4wKVw4JcAcV6omNCSFaYzvNMiVPrcdiERim7vb1ktyCBcbsj7rqt8WTeVW6pupsmvbE3iM6CQcN9wXrNuhTXZU7R",
  "key14": "3RyenZAevZNU2xUdPqxovrDXGrJWDDzJfupZk1E299AtjXZgin63GHNX7PHXu4psYT1e7Fuo7KxwX2bATENWoYhv",
  "key15": "5wKoKXA6qufMCQJmTVnZQ4B7x8nmAAELuAZhYbvRNia85sPMxXswvNyD5N6eHyWM5c59VpE2d7DKD1hyV5QeZW4P",
  "key16": "512siHbbDFvAg9UqhpnNjHgLGCup7Ks63vBbdc21LTFwGsozep3s3XLbJhpEXcZwkSubKcdgXw4JB6TZBYwpKTwh",
  "key17": "2799nJTwEpPbKoLvounCmvDBHsCnk4vCDHidyfAewUWeTp7jS6Nym2BFC2jnTgUCaCPr89Wjhr2pjTobToD1c2af",
  "key18": "2WvtMDTDZVVzjw1TyoY7fSUNd6169hsUXmDmSQysYruLghNZw3QcQCthrUu5ozdGCKHZ2Va9t9eMswPQtnL3WCzt",
  "key19": "4P4CrthhuKPuYLP4yxcaZDPm2Fb4e3kZpV1wCJ7hsPUQqUcYvsRW4XZuWest1jmoso6RWRehdUMqca49ZveyCxTL",
  "key20": "5gnJ8vqzQ9X4A8AvBX6YGyGFgLNWmd1CNEgaf29UortgYQGjN2sKioZjPQezvnrVjyDpDC6dmrDthAtCTckJW2Ea",
  "key21": "V2gV8Pfb1vSjnKhrtFVTKkm7gvPBMdMkRKHHd5fHEnoRMp69kkxLV9oDTeVwUiwqDQWRj4sNr1iSHHjaVYAF3ZT",
  "key22": "39Wx2msExSSMieGrwhaKhEebQV67aremrnFBoyLu2EDXb7ZJeb5ZKrpwWRfoeCz6Kck4MdiyKJGBCQjT2rAmXAL4",
  "key23": "ie3cZvizZqXwZnabn71v17LU7VwQCFbvYqpFNWFjv4en2rGdg6BKo4bfiARD7outvwdVXq323j4mKA3Y7PrUNce",
  "key24": "3cmgSVQswGcq5vp4CKs2k9VHh1pL7yNvuSMbJGrSMwaochKyu7gkEqNc5ytKYPDXyD25x1RKcdYQEHVqUZMSnpHG",
  "key25": "FGF8mchPHKyWkstCcXAnXfsynSPUBWDiuozZowE4wk37ggAsm5TamfGVpqnvbxYSko5QhhLUDK9b8Hw5Z8NaiqB"
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
