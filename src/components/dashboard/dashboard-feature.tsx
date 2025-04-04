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
    "3bc1D8RQbLhvtKG1Uck5nt35KLFRBydKHxttrYJN7eFk887bPpaX91tSSVWCY7YBAToz4iiVsx8gvoPajF46vxZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SGXBpaD7ci4tCXpBkKy9GfFscdrLpqGM5231uvKjCpBRBTacUoJUDFcJtpMoFLBqsQpTLBu5MQSgJS3YKDtEBbp",
  "key1": "52bbvkWHU7jQL5i86WLuF4LqtDtqMaSZjb5jFy6mgu6GMFv8DHbwzCfZWWFzMfp9Suq5ZtEMRrBWvhZVphyLK5gt",
  "key2": "7mERXg1kYsy6efPwnGh8tKZwVXo226ShkMqN4NtDNQZshDdtK8BLtwsaHpRceqTYJk7tbfykBEUGdVvMbFbJxkw",
  "key3": "4x1VgtHrMBgVLYtxK8EMWpJtMzKUU3vaAvtVrEwd11hUgfUUJrPdiQLY88hvFEq5DeayyHhYag3LUpC387VQaN1H",
  "key4": "4FaSkmy8kxA5yXoLjobhY9vJAAYXe7seHXYYDYq83wBYPutE5PLR437xwXk8KJdjHea859cVWnV2DWtgJnHz9BS2",
  "key5": "5LVtd2wXPG9vkjHbXJhMwrvcYDbKbEk78ZbLsmULAyGppKtvvjTR9ZuYwQm4Ve4QV22JxjCFjCS4DdJRNoZ4zCpf",
  "key6": "4S2JdcvDXSSv3w1mSLNeiCwUCVpC7fMv4PwP1fBamh2LqxXxyWmsHS2gbpQxktGDALBWjkp1KpMWB3pxHkooGBYx",
  "key7": "4pSYUJgsREdJ1kU8CtsPcgZMKCRkn1dJ8e4cVyaKEcYjYCZdWWSEFs7oqq6kGVC7wF5wuCRdeqUzixCyhXXzuzA3",
  "key8": "BUJea9y8wXdMMJUZbdXDau3m89MFwsaZ2VGerY4AtDQjEfhoRQG7xn9nqHVmgB2DrnZcZx6kgqkF1hNiZ7sGxGF",
  "key9": "2dKezzQdixsv91K521aSH11vfJnE9CD5z7ejCVuPPCz9hDt2gUtWeo2qUVnAhoKAYZAymi4fvCKu1Vj6xa9d4YWz",
  "key10": "2bQwDoG1PAqiUU7KrhEgVDVGcvpztmmbCf5EFhUzArCvT8sFmgDFwoDXfYUi3Mt1rLjLfxHPmsfnfdRDsUuNonfm",
  "key11": "5nwJzCUtG6yfK3cQkbeRZb7qADDzkfakWQWHf5ejqDgwULdsmMUgMDuvacd8vnfS1wMP8vvfqU2Pan8dZn8jMBDc",
  "key12": "5hzMCrwt3mnk1Fc2XHT7hRR5Haaj75weArkseDGVPLSjq657S7UtRLh3T4GU4pDQjNr9HUCo2Fu8iddmdK5AssBy",
  "key13": "2PXDkaA13ksAfUqTHEHBWovoZytEXFuJJKh7wd8zoNkbHQJXfM33dZgxP1uEnrnLY2A93ENBpZEGDbBXrSMrtT6N",
  "key14": "3wVMkvL8hrJ4fSuYS1HRpxHGcUdNcZb6jZtYrzKotRcDnBg4V9nx9LNfYPHXHadjfAVwi5bJVcbvap1v9Y7Dgjj4",
  "key15": "6Zedy3Kxeqc4JePQrgcYc48MvGHnyYa8FschU59GA5DZg59FRYDJuoGDU1FTUm7j3cuBCSktRknAAsGufuTMogF",
  "key16": "5kQLqcwr2d5tAQtp1ppPvneNcLhyEcX2nQfwenenHiHifg6SqxxHrXPNjyWrdBwuxbh2uT9HXCV8A4qAG8fpqaUd",
  "key17": "5Tf8bd6ytw81kvH9EpXtonmvm2KS7nCm5fW1zV9a3LnYK58FcVYz4VDKqghvWf4Ckrfoddap4hXqEBkV7NfAM15V",
  "key18": "5DG51AEM7eYn2q8WAszxn5nLVd4sQQcgt9KkrBXRadj7iHmTSJfcytBNDvNJLXVjCHuvY7onQJfMfbuTqtZrax5J",
  "key19": "3oWJo8bNLcqPNHMyphNdk9WiFKdzcsa7iBCMDPMPaiANkcnqPMoemcmr2XphdZDMK7X3xZT7t1vxejLnMgZEoP58",
  "key20": "5BB9WwJwD8J4suJnVijeZivgdV8B8kLWs77VCBWRGQAKzR5SchraJEUL1HpqwGq21ezicZZaUVT9q3ErarCuTYai",
  "key21": "2siiXJ3buoYUVToVbTLeJpLLFL5cnXhDuLWdY5UJExwrrYKYcpNx29LkGaAx1R6ABNKsYe7Ra1BPrpTZmq6KGgzf",
  "key22": "3Mjk8S94Xw5jE9MEXTF4ZYRmDJX2Byzyh8nLcE16zDZu5NqjwhvQnGbvpv91VdRFPapHGpuWPGCGLDC8FgKCqicJ",
  "key23": "3xJJnCfv1b3b9mbWjBNK9ZeuGQTZWeCPZ98y4XaZBMeEeGBqhRx37r7TGznquzo2kSJCvfNTHics5zw6afkNchcG",
  "key24": "4dxsL1SWJeSTUvimheQeE5k2ob2843nsqTgQFELLLq96FNDq6AqoEyCGSALu4istpJttvE8DzrGdqcxRF7NxHm6K",
  "key25": "4cYt7cQW2haxTN45FZ67bBJ3acsXtAVjSBHYayFGVZQJzh1thAxthUPRUEAUJmrbhbrdoDXjALoBAjhQuHZ7YH5D",
  "key26": "55X2GZK1DrB8Wc3g7PqhpUWbNmEMZiEiwqGsUr8GmmvBkZwJearam6gLgjL7SUcFLuku7AktKLLg44Z3KXT43h4i"
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
