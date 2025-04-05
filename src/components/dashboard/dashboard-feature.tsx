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
    "67NgU8vZw3dTg5x2Yktx4ZZk6muDoUw7pChy217EVk7nissXBAqtufx4N3SVcLaNZrVK3easwQQDN3N4TQHNLvDA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BGivEfdiRemhdQVekuoQui89sHuvKdejmnQauwZuCayAJZuri6GtN4gf9A13GUuwo5P8F6kvWefBr6iXNUmT9eh",
  "key1": "5YSJ8X2LUHWgKs9aKCa6nZQ17iAVZZ7t1Xtkn1wckLfX3q9dWS2SC4wMT2RHJvJ9Y6WAy3GdDha4x2kjHPHsXLRn",
  "key2": "5Epu7tWg6N2yhiCktQrSJJ6LHoDacgGbJekAVQRdRLdo979GutMMs3SRoZi3yXrzj5XUqeWHdUFQWdPadr1hD6tY",
  "key3": "kuGRsVExk1NumzS87owdSS7AB3fqt9bpK7w5PWuzxVjMEds4htqJuAkAix5Rek2SFJirCZ2nSvNaiGsMhgCwowd",
  "key4": "ZRigLtzejNNfpy7dMspc7PHWyv5veWG3a8sE2BoCVHeHoyfBHCJacP4JZ3DTAp4NntMCMekWJhEvgvvcmsDpuHw",
  "key5": "3MJryVZJPSmLa3pomEG9QoXXseaikjGjUNfVQ5yP1QL6jDgqP9VLKkfZJ1KJ8zDqgNgnaL2BB2wciKgBD127StQR",
  "key6": "CaH7jo2a5Ey37eBGAvLcMgZgDMCDuTS1mEgr1cfaqHvp39vZJsGYNgjMhC1Hw8BbFwtu55FT7pKPEGytY8MZY2b",
  "key7": "5Tt3yMUgCECrJkdjPK8t3iBEPqb1tihnCx3F6Ga2XnE9u8rjTfBs7oDL1EiSpgdjsvKza75ERN3oiVTamzK5fk56",
  "key8": "5P2q1WNX3sLCcomQsT5TCJxcDA2j3gcpzk1mCPDe7sZ8vLGzcBv7egW58PKfmNEENx2wf5cFftojZritZbuDF9wp",
  "key9": "66fB6x76FiiwhH94V8WmY82ueGD2iU73yepsvyA1X1whGX8sc531JWPXBgbhEYSjaxvoraB9f5vthiF2Xi1e1h3F",
  "key10": "5sqqDH54EdaJiAMyUS6vespaJux1WpNuhphaJJbtAW1BX2btpyFck31uaZsZ4ASD37mrYMn5hGzXSbpkqjhqYtQj",
  "key11": "2TR6mTYvDYbzJC7mbVHzQjzMAVSLqwrK2YHnceDUaYQWj3StKaPbbt8CTGYTGoCx1nbA4GrYwcXSRAeTpBHaMX1g",
  "key12": "5q8sVQWRFRh67ELYqFgL5GhrYzqhYsq48HJfBEcYrSdu7bhfq1aExwjtE1E4LMPJUbZmjt3Lwt91oEdgKY8oVSyo",
  "key13": "2aNak9QV3rjRPwx7vv77JQbyirRgaaK8aHCvoJPQLH9a8B1JdxERivemWeQrW449hq4re9kRqzuVXvW7pVHYKLFu",
  "key14": "2S8THFp5R8GUJeaWZeje1GrSTB45a4i3cv2vnaQzWKikzz5RuoeNgbAbz2PN4w7Zr8zGzUxXAAFv9jKWyzviNshs",
  "key15": "MycLSGoyjy83aL9jzRVDWYXF3eDu4sHXpvj9gGHztd1NMjRafSnLmU71EhQFNyVpFD7xt4B5SmtDpp7hwcUu3qP",
  "key16": "3fszABAHbvvgThJGRrKKyQWHeN6vJ34zqGCMhvwVVrUsCQnNamX3LhWsQNBEotUHwvQdr8f7yqx17dCx7u6SDF9K",
  "key17": "641AHhKQNSs2kZh9pKCKiqMMojmQ28VrnZwk7E2MDCEA7cSwebRF67pq6QNhR1u1AhC53VR9WhbkwtCursyPM84H",
  "key18": "4XGKACFH1CXaUHyV8DR3J4Hrk4YY4cTMRnNbxt7PNwmPpRirih7fJBFbcoVesuGCXu5rJuUKSBa3KmeVtCmN4xMb",
  "key19": "57cfVP1YNVLBFBTT8GgrCAMs1bwgxDB1difJmMZZYgqBos8pCWH9R3nUnn96AJ7BftjMFDqiJbMpHjzUxyP2XBEV",
  "key20": "4U7FTSk7dqDxGTh5sHbkKsw1Yzh47extwZp69dXFmUA3MzGx2SyfuEMPEWS6XxcrdMgk3XjHwyaSALmjPCUNtoqM",
  "key21": "2pSb4NZVHdUroANjAWK7paRHq1wACjk33bzPcNNdzXGzGGh6yEz535DhQn2Evdrs5WfBBNFsoBa7PpPN1tJABg6v",
  "key22": "2f9Jz43MfeH4Qa6cBGYsBpoFqzJkeXPyV2cmmyVdjkjhLtKipKhyYj4DBrxmcxjLTHBDvf8jpPR2VJzYrhvvFCQD",
  "key23": "5WhqsgZtnVbzHVLkE2UcxdwMnLp32FGvhhLKTrGfQPRjwSWj7gbJA58tazbbxZ7gU9YYzcqMkLhC6r2NQ3akoTBL",
  "key24": "4aoHAQVS5zEAAzGj4z6ufXRjfRBjuwAc4cV77iR3ZeoNAMzMB3EjCiFmfbUaGeWQzihFmaUDgvmXJuVMKWur8be1",
  "key25": "43tia5jmHodhWzFoFMkfaBKoSsVEUYJTQSxisV9EsK2TP8mvQkm8CPX9LJYXQ2dMr8dVggaE6ha9oPUYmeMGcsaG",
  "key26": "5siwUgwmtVTKk1JxyrrBBbKhTuF1DZZYCJ497EBaSUWE8L9H4BWUqiCkX3heaYdMBmUzhmWNFjcfywk447UQmBvk",
  "key27": "488PWitHicsgWJ24JHm8Z5AngK6ZazLjV2mV8V3dhh7LyKe5A56JbFkpjCh8NgqdEoTdYqFTuSaavEc7ghX9vmx1",
  "key28": "f2RwcjUCqkfJkzDU7fqhVeX5unh7dwagpPN72hjT6JWcV13gY7DkdBpWHVhP8iGFTtfASk3JTbD83nF9gtPrgRL"
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
